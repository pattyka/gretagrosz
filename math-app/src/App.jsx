import { useEffect, useMemo, useRef, useState } from 'react'
import { AREAS, PHASES, WEEKS, YEAR } from './curriculum'
import { getDay } from './content'
import { isCorrect } from './check'
import { MODELS, askCoach, gradeProof, loadAI, readPhoto, saveAI, testKey } from './ai'

const KEY = 'olympiad-year-v2'
const TRIES = 3 // per answer problem, and checks per proof, each day
const PROOF_PASS = 5 // out of 7
const CHALLENGE_MASTER = 6 // out of 7
const MOCK_PASS = 0.5
const MOCK_MASTER = 0.85

const DAY = 864e5
const dayOf = (t) => Math.floor((t - new Date(t).getTimezoneOffset() * 6e4) / DAY) // your local calendar day
const dayOfDate = (y, m, d) => dayOf(new Date(y, m, d).getTime())

// results: day number in the plan → { day: calendar day, status: 'passed' | 'mastered' | 'done', score }
// work: `${dayIndex}:${part}` → { day, tries, solved, grades, startedAt }
const EMPTY = { next: 0, streak: { count: 0, lastDay: null }, best: 0, results: {}, work: {} }

function useSaved() {
  const [state, setState] = useState(() => {
    try {
      return { ...EMPTY, ...JSON.parse(localStorage.getItem(KEY)) }
    } catch {
      return EMPTY
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state))
    } catch {}
  }, [state])
  return [state, setState]
}

const FRESH = { tries: 0, solved: false, grades: [] }
const bestScore = (entry) => Math.max(-1, ...(entry?.grades || []).map((g) => g.score))

/* ---------- Small pieces ---------- */

function Check({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

function Chevron({ left = false }) {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={left ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
  )
}

function Ring({ value, size = 220, stroke = 22, color = 'var(--accent)', track = 'var(--track)', children }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - Math.max(0.001, Math.min(1, value)))}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.2,.8,.2,1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">{children}</div>
    </div>
  )
}

function NavBar({ left, right, title }) {
  return (
    <div className="flex h-11 items-center justify-between">
      <div className="min-w-[70px]">{left}</div>
      <div className="headline">{title}</div>
      <div className="min-w-[70px] text-right">{right}</div>
    </div>
  )
}

function BackButton({ onClick, label = 'Back' }) {
  return (
    <button onClick={onClick} className="link -ml-2 flex items-center">
      <Chevron left /> {label}
    </button>
  )
}

function Page({ children }) {
  return <div className="mx-auto max-w-md px-4 pb-12 pt-2">{children}</div>
}

function Caption({ children, className = '' }) {
  return <p className={`caption mb-2 mt-8 px-4 ${className}`}>{children}</p>
}

const STATUS = {
  passed: { color: 'var(--green)', label: 'Passed' },
  mastered: { color: 'var(--purple)', label: 'Mastered' },
  done: { color: 'var(--orange)', label: 'Mock done' },
}

const KIND_LABEL = { learn: 'Learn', review: 'Mixed review', mock: 'Mock exam' }

const formatTime = (ms) => {
  const s = Math.max(0, Math.round(ms / 1000))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  return `${h}:${String(m).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

/* ---------- Calendar ---------- */

const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

function Calendar({ state, today, onOpen }) {
  const now = new Date()
  const [month, setMonth] = useState({ y: now.getFullYear(), m: now.getMonth() })
  const byDay = useMemo(() => {
    const map = {}
    Object.entries(state.results).forEach(([index, r]) => (map[r.day] = { index: Number(index), status: r.status }))
    return map
  }, [state.results])

  const first = new Date(month.y, month.m, 1)
  const blanks = (first.getDay() + 6) % 7 // weeks start on Monday
  const length = new Date(month.y, month.m + 1, 0).getDate()
  const shift = (by) => setMonth(({ y, m }) => ({ y: m + by < 0 ? y - 1 : m + by > 11 ? y + 1 : y, m: (m + by + 12) % 12 }))

  return (
    <div className="group p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="headline">{first.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</span>
        <span className="flex gap-4" style={{ color: 'var(--link)' }}>
          <button onClick={() => shift(-1)} aria-label="Previous month">
            <Chevron left />
          </button>
          <button onClick={() => shift(1)} aria-label="Next month">
            <Chevron />
          </button>
        </span>
      </div>
      <div className="grid grid-cols-7 gap-y-1.5 text-center">
        {WEEKDAYS.map((d, i) => (
          <span key={i} className="caption pb-1">
            {d}
          </span>
        ))}
        {Array.from({ length: blanks }, (_, i) => (
          <span key={`b${i}`} />
        ))}
        {Array.from({ length }, (_, i) => {
          const day = dayOfDate(month.y, month.m, i + 1)
          const hit = byDay[day]
          const isToday = day === today
          return (
            <span key={i} className="flex justify-center">
              <button
                disabled={!hit}
                onClick={() => onOpen(hit.index)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[15px] transition-transform active:scale-90"
                style={{
                  background: hit ? STATUS[hit.status].color : 'transparent',
                  color: hit ? '#FFFFFF' : day > today ? 'var(--secondary)' : 'var(--text)',
                  fontWeight: hit || isToday ? 600 : 400,
                  boxShadow: isToday && !hit ? 'inset 0 0 0 2px var(--accent)' : 'none',
                }}
              >
                {i + 1}
              </button>
            </span>
          )
        })}
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1">
        {Object.entries(STATUS).map(([s, { color, label }]) => (
          <span key={s} className="footnote flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full" style={{ background: color }} /> {label}
          </span>
        ))}
      </div>
    </div>
  )
}

// This week's 7 days as dots: L L L L L R M
function WeekStrip({ state, current, onOpen }) {
  const start = Math.floor(current / 7) * 7
  return (
    <div className="group grid grid-cols-7 py-3 text-center">
      {Array.from({ length: 7 }, (_, k) => {
        const index = start + k
        const d = getDay(index)
        const r = state.results[index]
        const isToday = index === current
        const open = index <= current && d.content
        return (
          <button key={k} disabled={!open} onClick={() => onOpen(index)} className="flex flex-col items-center gap-1">
            <span className="caption" style={{ color: isToday ? 'var(--accent)' : undefined }}>
              {d.kind === 'learn' ? `D${d.dow}` : d.kind === 'review' ? 'Rev' : 'Mock'}
            </span>
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{
                background: r ? STATUS[r.status].color : 'var(--fill)',
                boxShadow: isToday && !r ? 'inset 0 0 0 2px var(--accent)' : 'none',
                opacity: index > current ? 0.5 : 1,
              }}
            >
              {r && <Check className="h-4 w-4 text-white" />}
            </span>
          </button>
        )
      })}
    </div>
  )
}

/* ---------- Home ---------- */

function Home({ state, today, current, streak, passedToday, failedToday, hasAI, onOpenDay, onPlan, onSettings }) {
  const d = getDay(current)
  const passedCount = Object.keys(state.results).length
  const masteredCount = Object.values(state.results).filter((r) => r.status === 'mastered').length
  const result = state.results[current]
  const started = Object.entries(state.work).some(([k, w]) => k.startsWith(`${current}:`) && w.day === today)

  let headline, note
  if (passedToday) {
    headline = result?.status === 'mastered' ? 'Mastered today' : d.kind === 'learn' ? 'Passed — now try the challenge?' : 'Done for today'
    note = d.kind === 'learn' && result?.status !== 'mastered' ? 'Score 6 or 7 on the challenge proof to turn the day purple.' : 'Come back tomorrow to keep your streak going.'
  } else if (!d.content) {
    headline = 'Problems coming soon'
    note = 'This day hasn’t been written yet.'
  } else if (failedToday) {
    headline = 'Not today'
    note = 'You used all your tries on a problem. Study the solution and come back tomorrow.'
  } else if (d.kind === 'mock') {
    headline = `Mock exam: ${d.phase.mock.problems} problems, ${d.phase.mock.minutes / 60} hours`
    note = 'Finish it to keep your streak. 50% turns the day green, 85% purple.'
  } else {
    headline = streak > 0 ? `Pass today to make it ${streak + 1}` : 'Pass today to start your streak'
    note = `Solve all 3 problems. The proof needs ${PROOF_PASS} of 7 points.`
  }

  return (
    <Page>
      <NavBar
        left={
          <button onClick={onSettings} className="link">
            Settings
          </button>
        }
        right={
          <button onClick={onPlan} className="link">
            Year Plan
          </button>
        }
      />
      <p className="caption mt-1">
        Week {d.week} · {d.kind === 'learn' ? `Day ${d.dow}` : KIND_LABEL[d.kind]} · {d.phase.name}
      </p>
      <h1 className="large-title">Today</h1>

      <section className="mt-6 flex flex-col items-center text-center">
        <Ring value={passedCount / YEAR}>
          <span className="text-[64px] font-bold leading-none tracking-tight">{streak}</span>
          <span className="footnote mt-1">day streak</span>
        </Ring>
        <p className="headline mt-5 max-w-xs">{headline}</p>
        <p className="footnote mt-1 max-w-xs">{note}</p>
      </section>

      <Caption>{d.theme}</Caption>
      <div className="group">
        <button onClick={() => onOpenDay(current)} disabled={!d.content} className="row">
          <span className="flex-1">
            <span className="caption block" style={{ color: d.kind === 'mock' ? 'var(--orange)' : 'var(--accent)' }}>
              {KIND_LABEL[d.kind]} · {AREAS[d.area]}
            </span>
            <span className="title2 block">{d.content?.title || (d.final ? 'Final exam' : 'Coming soon')}</span>
          </span>
          {result && <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: STATUS[result.status].color }} />}
          {d.content && (
            <span className="secondary">
              <Chevron />
            </span>
          )}
        </button>
      </div>

      <div className="mt-6 grid gap-3">
        <button onClick={() => onOpenDay(current)} disabled={!d.content} className={`btn ${passedToday && d.kind === 'learn' && result?.status !== 'mastered' ? 'btn-purple' : 'btn-filled'}`}>
          {passedToday ? (d.kind === 'learn' && result?.status !== 'mastered' ? 'Try the Challenge' : 'Review Today') : started ? 'Continue' : d.kind === 'mock' ? 'Open the Mock Exam' : 'Start Today'}
        </button>
      </div>

      {!hasAI && (
        <button onClick={onSettings} className="group row mt-4">
          <span className="flex-1">
            <span className="headline block">Turn on the AI coach</span>
            <span className="footnote block">Photograph your proofs and get them marked out of 7, with feedback and hints.</span>
          </span>
          <span className="secondary">
            <Chevron />
          </span>
        </button>
      )}

      <Caption>This week</Caption>
      <WeekStrip state={state} current={current} onOpen={onOpenDay} />

      <div className="group mt-4 grid grid-cols-3 text-center">
        {[
          [passedCount, 'days done'],
          [masteredCount, 'mastered'],
          [state.best || 0, 'best streak'],
        ].map(([n, label], i) => (
          <div key={label} className="py-3" style={{ borderLeft: i ? '0.5px solid var(--separator)' : 'none' }}>
            <div className="title2">{n}</div>
            <div className="footnote">{label}</div>
          </div>
        ))}
      </div>

      <Caption>Calendar</Caption>
      <Calendar state={state} today={today} onOpen={onOpenDay} />

      <p className="footnote mt-8 px-4 text-center">Built for training towards the Austrian Mathematical Olympiad. Not affiliated with the ÖMO.</p>
    </Page>
  )
}

/* ---------- One day ---------- */

function Lesson({ lesson }) {
  const [showExample, setShowExample] = useState(false)
  return (
    <>
      <Caption>The idea</Caption>
      <div className="group p-4">
        <p className="body">{lesson.idea}</p>
      </div>
      <Caption>How to use it</Caption>
      <div className="group">
        {lesson.steps.map((s, i) => (
          <div key={i} className="row items-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold" style={{ background: 'var(--tint)', color: 'var(--tint-text)' }}>
              {i + 1}
            </span>
            <span className="body">{s}</span>
          </div>
        ))}
      </div>
      <Caption>Example</Caption>
      <div className="group">
        <div className="problem p-4">{lesson.example.q}</div>
        {showExample ? (
          <div className="rise problem secondary p-4 pt-0">{lesson.example.a}</div>
        ) : (
          <button onClick={() => setShowExample(true)} className="row link" style={{ borderTop: '0.5px solid var(--separator)' }}>
            Show solution
          </button>
        )}
      </div>
    </>
  )
}

function partStatus(problem, entry) {
  if (problem.type === 'answer') return entry.solved ? 'ok' : entry.tries >= TRIES ? 'failed' : entry.tries ? 'trying' : 'new'
  const best = bestScore(entry)
  return best >= PROOF_PASS ? 'ok' : entry.grades.length >= TRIES ? 'failed' : entry.grades.length ? 'trying' : 'new'
}

function StatusIcon({ status, score }) {
  if (status === 'ok')
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: 'var(--green)' }}>
        <Check className="h-4 w-4 text-white" />
      </span>
    )
  if (status === 'failed')
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: 'var(--red)' }}>
        ✕
      </span>
    )
  if (score != null && score >= 0) return <span className="footnote tabular-nums">{score}/7</span>
  return null
}

function DayScreen({ d, state, getWork, isCurrent, onBack, onPart, onStartMock }) {
  const { content } = d
  const result = state.results[d.index]
  const [showLesson, setShowLesson] = useState(() => !Object.keys(state.work).some((k) => k.startsWith(`${d.index}:p`)))

  if (d.kind === 'mock') return <MockOverview d={d} state={state} getWork={getWork} isCurrent={isCurrent} onBack={onBack} onPart={onPart} onStart={onStartMock} />

  const challengeWork = getWork(d.index, 'c')
  const challengeBest = bestScore(challengeWork)

  return (
    <Page>
      <NavBar left={<BackButton onClick={onBack} label="Today" />} />
      <p className="caption mt-1">
        Week {d.week} · {d.kind === 'learn' ? `Day ${d.dow}` : KIND_LABEL[d.kind]} · {AREAS[d.area]}
      </p>
      <h1 className="large-title">{content.title}</h1>
      {result && (
        <p className="headline mt-1" style={{ color: STATUS[result.status].color }}>
          {STATUS[result.status].label}
        </p>
      )}
      {d.kind === 'review' && <p className="body secondary mt-1">Problems from earlier weeks, without telling you which idea to use. Just like a real competition.</p>}

      {content.lesson &&
        (showLesson ? (
          <Lesson lesson={content.lesson} />
        ) : (
          <button onClick={() => setShowLesson(true)} className="link mt-4 px-4 text-[15px]">
            Show the lesson again
          </button>
        ))}

      <Caption>{result ? 'Problems' : 'Today’s problems · solve all 3'}</Caption>
      <div className="group">
        {content.problems.map((p, k) => {
          const entry = getWork(d.index, `p${k}`)
          const status = partStatus(p, entry)
          return (
            <button key={k} onClick={() => onPart(d.index, `p${k}`)} className="row">
              <span className="flex-1">
                <span className="body block">Problem {k + 1}</span>
                <span className="footnote block">{p.type === 'answer' ? 'Find the answer · 3 tries' : `Write a proof · needs ${PROOF_PASS}/7`}</span>
              </span>
              <StatusIcon status={status} score={p.type === 'proof' ? bestScore(entry) : null} />
              <span className="secondary">
                <Chevron />
              </span>
            </button>
          )
        })}
      </div>

      {content.challenge && (
        <>
          <Caption>Challenge · to master the day</Caption>
          <div className="group">
            <button onClick={() => onPart(d.index, 'c')} disabled={!result} className="row" style={{ opacity: result ? 1 : 0.5 }}>
              <span className="flex-1">
                <span className="body block" style={{ color: 'var(--purple)' }}>
                  {content.challenge.source}
                </span>
                <span className="footnote block">{result ? `A harder proof · ${CHALLENGE_MASTER}/7 or more masters the day` : 'Pass today first'}</span>
              </span>
              {challengeBest >= 0 && <span className="footnote tabular-nums">{challengeBest}/7</span>}
              {result?.status === 'mastered' && <span className="h-3 w-3 rounded-full" style={{ background: 'var(--purple)' }} />}
              <span className="secondary">
                <Chevron />
              </span>
            </button>
          </div>
        </>
      )}
    </Page>
  )
}

function MockOverview({ d, state, getWork, isCurrent, onBack, onPart, onStart }) {
  const { problems } = d.content
  const timer = getWork(d.index, 'mock')
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const result = state.results[d.index]
  const minutes = d.phase.mock.minutes
  const left = timer.startedAt ? timer.startedAt + minutes * 6e4 - now : null
  const scores = problems.map((_, k) => bestScore(getWork(d.index, `p${k}`)))
  const total = scores.reduce((s, x) => s + Math.max(0, x), 0)

  return (
    <Page>
      <NavBar left={<BackButton onClick={onBack} label="Today" />} />
      <p className="caption mt-1">
        Week {d.week} · {d.phase.about}
      </p>
      <h1 className="large-title">Mock Exam</h1>
      {result && (
        <p className="headline mt-1" style={{ color: STATUS[result.status].color }}>
          {total} of {problems.length * 7} points · {STATUS[result.status].label}
        </p>
      )}

      {!timer.startedAt && !result ? (
        <>
          <div className="group mt-6 p-4">
            <p className="body">
              {problems.length} problems, {minutes / 60} hours, like the real competition. Paper, pen, no calculator, no internet.
            </p>
            <p className="footnote mt-2">When the time is up, photograph each solution and hand it in. Each problem is marked out of 7. The coach can only mark it once.</p>
          </div>
          <button onClick={onStart} disabled={!isCurrent} className="btn btn-filled mt-6 w-full">
            Start the Clock
          </button>
          {!isCurrent && <p className="footnote mt-2 text-center">You can only sit the mock on its own day.</p>}
        </>
      ) : (
        <>
          {!result && (
            <div className="group mt-6 flex items-center justify-between p-4">
              <span className="body">{left > 0 ? 'Time left' : 'Time’s up — hand in now'}</span>
              <span className="title2 tabular-nums" style={{ color: left > 0 ? 'var(--text)' : 'var(--red)' }}>
                {formatTime(left > 0 ? left : 0)}
              </span>
            </div>
          )}
          <Caption>Problems</Caption>
          <div className="group">
            {problems.map((p, k) => (
              <button key={k} onClick={() => onPart(d.index, `p${k}`)} className="row">
                <span className="flex-1">
                  <span className="body block">Problem {k + 1}</span>
                  <span className="footnote block">{AREAS[p.area]}</span>
                </span>
                {scores[k] >= 0 ? <span className="headline tabular-nums">{scores[k]}/7</span> : <span className="footnote">Not handed in</span>}
                <span className="secondary">
                  <Chevron />
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </Page>
  )
}

/* ---------- One problem ---------- */

function GradeCard({ grade }) {
  const good = grade.score >= PROOF_PASS
  return (
    <div className="rise group p-4">
      <div className="flex items-center gap-4">
        <Ring value={grade.score / 7} size={64} stroke={7} color={good ? 'var(--green)' : grade.score >= 2 ? 'var(--orange)' : 'var(--red)'} track="var(--fill)">
          <span className="headline tabular-nums">{grade.score}</span>
        </Ring>
        <div className="flex-1">
          <p className="headline">
            {grade.score}/7 · {grade.verdict || (grade.source === 'self' ? 'self-checked' : '')}
          </p>
          <p className="footnote">{grade.source === 'self' ? 'Marked by you' : 'Marked by the AI coach'}</p>
        </div>
      </div>
      {grade.summary && <p className="body mt-3">{grade.summary}</p>}
      {grade.good?.length > 0 && (
        <>
          <p className="caption mt-4">What’s good</p>
          <ul className="mt-1 space-y-1">
            {grade.good.map((g, i) => (
              <li key={i} className="body flex gap-2">
                <span style={{ color: 'var(--green)' }}>✓</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      {grade.issues?.length > 0 && (
        <>
          <p className="caption mt-4">To fix</p>
          <ul className="mt-1 space-y-3">
            {grade.issues.map((g, i) => (
              <li key={i} className="body">
                {g.where && <span className="headline block">{g.where}</span>}
                <span className="block">{g.problem}</span>
                {g.hint && <span className="footnote block">Hint: {g.hint}</span>}
              </li>
            ))}
          </ul>
        </>
      )}
      {grade.next_step && <p className="footnote mt-4">Next: {grade.next_step}</p>}
    </div>
  )
}

function PhotoPicker({ photos, setPhotos, disabled }) {
  const input = useRef(null)
  const [error, setError] = useState('')
  const add = async (files) => {
    setError('')
    try {
      const read = await Promise.all([...files].map((f) => readPhoto(f)))
      setPhotos((p) => [...p, ...read].slice(0, 6))
    } catch (e) {
      setError(e.message)
    }
  }
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {photos.map((p, i) => (
          <span key={i} className="relative">
            <img src={p.dataUrl} alt={`Page ${i + 1}`} className="h-20 w-16 rounded-lg object-cover" />
            {!disabled && (
              <button
                onClick={() => setPhotos((list) => list.filter((_, k) => k !== i))}
                className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-[11px] text-white"
                aria-label="Remove photo"
              >
                ✕
              </button>
            )}
          </span>
        ))}
        {!disabled && photos.length < 6 && (
          <button onClick={() => input.current.click()} className="flex h-20 w-16 flex-col items-center justify-center rounded-lg text-[12px]" style={{ background: 'var(--fill)', color: 'var(--link)' }}>
            <span className="text-[22px] leading-none">＋</span>
            Photo
          </button>
        )}
      </div>
      <input ref={input} type="file" accept="image/*" multiple className="hidden" onChange={(e) => add(e.target.files).then(() => (e.target.value = ''))} />
      {error && <p className="footnote mt-1" style={{ color: 'var(--red)' }}>{error}</p>}
    </div>
  )
}

function SelfCheck({ problem, onScore }) {
  const [ticked, setTicked] = useState(() => problem.keySteps.map(() => false))
  const count = ticked.filter(Boolean).length
  return (
    <div className="rise">
      <p className="caption mb-2 px-4">Tick every step your proof really has</p>
      <div className="group">
        {problem.keySteps.map((s, i) => (
          <button key={i} onClick={() => setTicked((t) => t.map((v, k) => (k === i ? !v : v)))} className="row items-start">
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors"
              style={{ background: ticked[i] ? 'var(--accent)' : 'transparent', boxShadow: ticked[i] ? 'none' : 'inset 0 0 0 2px var(--separator)' }}
            >
              {ticked[i] && <Check className="h-4 w-4 text-white" />}
            </span>
            <span className="body">{s}</span>
          </button>
        ))}
      </div>
      <p className="footnote mt-2 px-4">Be honest — a step only counts if you actually proved it.</p>
      <button onClick={() => onScore({ source: 'self', score: Math.round((7 * count) / ticked.length), summary: `${count} of ${ticked.length} key steps.` })} className="btn btn-filled mt-4 w-full">
        Save My Score
      </button>
    </div>
  )
}

function ProblemScreen({ d, part, problem, entry, update, isCurrent, hasAI, onBack, onCoach }) {
  const isMock = d.kind === 'mock'
  const isChallenge = part === 'c'
  const kind = problem.type === 'answer' ? 'answer' : 'proof'
  const passMark = isChallenge ? CHALLENGE_MASTER : PROOF_PASS
  const maxChecks = isMock ? 1 : isChallenge ? Infinity : TRIES
  const graded = entry.grades.length
  const best = bestScore(entry)
  const done = kind === 'answer' ? entry.solved || entry.tries >= TRIES : best >= passMark || graded >= maxChecks
  const locked = !isCurrent && !d.result // only today's problems (and finished days) can be answered

  const [input, setInput] = useState('')
  const [wrong, setWrong] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [photos, setPhotos] = useState([])
  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [selfCheck, setSelfCheck] = useState(false)

  const submitAnswer = (e) => {
    e.preventDefault()
    if (!input.trim() || done || locked) return
    if (isCorrect(input, problem.answers)) update((w) => ({ ...w, solved: true }))
    else {
      setWrong((n) => n + 1)
      update((w) => ({ ...w, tries: w.tries + 1 }))
    }
  }

  const check = async () => {
    setBusy(true)
    setError('')
    try {
      const grade = await gradeProof(problem, { photos, text })
      update((w) => ({ ...w, grades: [...w.grades, { ...grade, source: 'ai' }] }))
      setPhotos([])
      setText('')
    } catch (e) {
      setError(e.message)
    }
    setBusy(false)
  }

  const saveSelf = (grade) => {
    update((w) => ({ ...w, grades: [...w.grades, grade] }))
    setSelfCheck(false)
  }

  const canShowSolution = !isMock || d.result
  const latest = entry.grades[entry.grades.length - 1]

  return (
    <Page>
      <NavBar
        left={<BackButton onClick={onBack} />}
        title={isChallenge ? 'Challenge' : `Problem ${Number(part.slice(1)) + 1}`}
        right={
          !isMock || d.result ? (
            <button onClick={() => onCoach(problem, latest)} className="link">
              Coach
            </button>
          ) : null
        }
      />
      <p className="caption mt-4 px-4">{isChallenge ? problem.source : isMock ? AREAS[problem.area] : kind === 'answer' ? 'Find the answer' : 'Prove it'}</p>
      <div className="group problem mt-2 p-4">{problem.q}</div>

      {problem.hint && !done && !isMock && (
        <>
          <button onClick={() => setShowHint((s) => !s)} className="link mt-3 px-4 text-[15px]">
            {showHint ? 'Hide hint' : 'Show a hint'}
          </button>
          {showHint && <p className="rise footnote mt-1 px-4">{problem.hint}</p>}
        </>
      )}

      {kind === 'answer' && (
        <form onSubmit={submitAnswer} className="mt-6">
          <input
            key={wrong}
            value={entry.solved ? problem.answers[0] : input}
            onChange={(e) => setInput(e.target.value)}
            readOnly={done || locked}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            placeholder="Your answer"
            className={`field h-14 w-full px-4 text-center text-[20px] outline-none placeholder:text-[var(--secondary)] ${wrong && !entry.solved ? 'shake' : ''}`}
            style={{ color: 'var(--text)', borderColor: entry.solved ? 'var(--green)' : entry.tries >= TRIES ? 'var(--red)' : 'transparent' }}
          />
          <p className="footnote mt-2 text-center">
            {entry.solved ? '' : entry.tries >= TRIES ? 'No tries left' : entry.tries ? `Not quite. ${TRIES - entry.tries} ${TRIES - entry.tries === 1 ? 'try' : 'tries'} left.` : `${TRIES} tries`}
          </p>
          {entry.solved && (
            <p className="pop headline text-center" style={{ color: 'var(--green)' }}>
              Correct!
            </p>
          )}
          {!done && (
            <button disabled={!input.trim() || locked} className="btn btn-filled mt-4 w-full">
              Check
            </button>
          )}
        </form>
      )}

      {kind === 'proof' && (
        <div className="mt-6">
          {entry.grades.length > 0 && (
            <div className="space-y-3">
              {[...entry.grades].reverse().map((g, i) => (i === 0 ? <GradeCard key={i} grade={g} /> : null))}
              {entry.grades.length > 1 && <p className="footnote px-4">Earlier checks: {entry.grades.slice(0, -1).map((g) => `${g.score}/7`).join(', ')}</p>}
            </div>
          )}
          {best >= passMark && (
            <p className="pop headline mt-4 text-center" style={{ color: isChallenge ? 'var(--purple)' : 'var(--green)' }}>
              {isChallenge ? 'Mastered!' : 'Proof accepted!'}
            </p>
          )}

          {!done && !locked && (
            <div className="mt-4">
              {selfCheck ? (
                <SelfCheck problem={problem} onScore={saveSelf} />
              ) : (
                <>
                  <p className="caption mb-2 px-4">{isMock ? 'Hand in your solution' : 'Your proof'}</p>
                  <div className="group p-4">
                    <p className="footnote mb-3">Write it on paper, then add photos of every page. You can also type it.</p>
                    <PhotoPicker photos={photos} setPhotos={setPhotos} disabled={busy} />
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      disabled={busy}
                      rows={4}
                      placeholder="…or type your proof here"
                      className="mt-3 w-full resize-y rounded-xl p-3 text-[16px] outline-none placeholder:text-[var(--secondary)]"
                      style={{ background: 'var(--fill)', color: 'var(--text)' }}
                    />
                  </div>
                  {error && <p className="footnote mt-2 px-4" style={{ color: 'var(--red)' }}>{error}</p>}
                  {hasAI ? (
                    <button onClick={check} disabled={busy || (!photos.length && !text.trim())} className={`btn mt-4 w-full ${isChallenge ? 'btn-purple' : 'btn-filled'}`}>
                      {busy ? 'Reading your proof…' : isMock ? 'Hand In' : 'Check My Proof'}
                    </button>
                  ) : (
                    <p className="footnote mt-3 px-4">Turn on the AI coach in Settings to get your photos marked.</p>
                  )}
                  {!busy && (
                    <button onClick={() => setSelfCheck(true)} className={`btn mt-3 w-full ${hasAI ? 'btn-gray' : 'btn-filled'}`}>
                      Check It Myself
                    </button>
                  )}
                  {Number.isFinite(maxChecks) && (
                    <p className="footnote mt-2 text-center">
                      {maxChecks - graded} {maxChecks - graded === 1 ? 'check' : 'checks'} left{isMock ? '' : ' today'}
                    </p>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}

      {canShowSolution && (
        <div className="mt-6">
          {showSolution || (done && kind === 'answer') ? (
            <div className="rise group p-4">
              <p className="caption mb-1">Solution</p>
              <p className="problem">{problem.solution}</p>
            </div>
          ) : (
            <button onClick={() => setShowSolution(true)} className="link px-4 text-[15px]">
              {done ? 'See the official solution' : 'I give up — show the solution'}
            </button>
          )}
          {showSolution && !done && !isChallenge && <p className="footnote mt-2 px-4">Looking at the solution doesn’t fail the day, but be honest with yourself about the next check.</p>}
        </div>
      )}
    </Page>
  )
}

/* ---------- Coach chat ---------- */

function CoachSheet({ problem, grade, hasAI, onClose, onSettings }) {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [photos, setPhotos] = useState([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const end = useRef(null)
  useEffect(() => {
    end.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, busy])

  const send = async (e) => {
    e?.preventDefault()
    if ((!text.trim() && !photos.length) || busy) return
    const next = [...messages, { role: 'user', text: text.trim(), photos }]
    setMessages(next)
    setText('')
    setPhotos([])
    setBusy(true)
    setError('')
    try {
      const reply = await askCoach(problem, next, grade)
      setMessages((m) => [...m, { role: 'assistant', text: reply }])
    } catch (err) {
      setError(err.message)
    }
    setBusy(false)
  }

  const STARTERS = ['I don’t know how to start.', 'Can you give me a small hint?', 'Is my idea going in the right direction?']

  return (
    <div className="app fixed inset-0 z-40 flex flex-col">
      <div className="mx-auto w-full max-w-md px-4 pt-2">
        <NavBar left={<button onClick={onClose} className="link">Done</button>} title="Coach" />
      </div>
      <div className="mx-auto w-full max-w-md flex-1 overflow-y-auto px-4 pb-4">
        <details className="group mt-2 p-4">
          <summary className="footnote cursor-pointer">The problem</summary>
          <p className="problem mt-2">{problem.q}</p>
        </details>
        {!hasAI ? (
          <div className="group mt-4 p-4">
            <p className="body">The coach needs an API key. Add one in Settings to chat about problems and get your proofs marked.</p>
            <button onClick={onSettings} className="btn btn-filled mt-4 w-full">
              Open Settings
            </button>
          </div>
        ) : (
          <>
            {messages.length === 0 && (
              <div className="mt-6 text-center">
                <p className="headline">Stuck? Ask me anything about this problem.</p>
                <p className="footnote mt-1">I’ll give hints, not the answer. You can also send a photo of your work. Deutsch geht auch!</p>
                <div className="mt-4 flex flex-col gap-2">
                  {STARTERS.map((s) => (
                    <button key={s} onClick={() => setText(s)} className="btn btn-tinted h-11 text-[15px]">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className="max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-[16px] leading-[22px]"
                    style={m.role === 'user' ? { background: 'var(--accent)', color: '#FFFFFF' } : { background: 'var(--card)', color: 'var(--text)' }}
                  >
                    {m.photos?.length > 0 && (
                      <span className="mb-2 flex gap-1">
                        {m.photos.map((p, k) => (
                          <img key={k} src={p.dataUrl} alt="" className="h-16 w-12 rounded-md object-cover" />
                        ))}
                      </span>
                    )}
                    {m.text}
                  </div>
                </div>
              ))}
              {busy && <p className="footnote px-2">Coach is thinking…</p>}
              {error && <p className="footnote px-2" style={{ color: 'var(--red)' }}>{error}</p>}
              <div ref={end} />
            </div>
          </>
        )}
      </div>
      {hasAI && (
        <form onSubmit={send} className="mx-auto w-full max-w-md px-4 pb-4 pt-2" style={{ borderTop: '0.5px solid var(--separator)' }}>
          {photos.length > 0 && (
            <div className="mb-2">
              <PhotoPicker photos={photos} setPhotos={setPhotos} />
            </div>
          )}
          <div className="flex items-end gap-2">
            <label className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-[22px]" style={{ background: 'var(--fill)', color: 'var(--link)' }} aria-label="Add a photo">
              ＋
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={async (e) => {
                  const files = [...e.target.files]
                  e.target.value = ''
                  try {
                    const read = await Promise.all(files.map((f) => readPhoto(f)))
                    setPhotos((p) => [...p, ...read].slice(0, 4))
                  } catch (err) {
                    setError(err.message)
                  }
                }}
              />
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) send(e)
              }}
              rows={1}
              placeholder="Ask the coach…"
              className="field min-h-[44px] flex-1 resize-none px-4 py-2.5 text-[16px] outline-none placeholder:text-[var(--secondary)]"
              style={{ color: 'var(--text)' }}
            />
            <button disabled={busy || (!text.trim() && !photos.length)} className="btn btn-filled h-11 px-4 text-[15px]">
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

/* ---------- Year plan ---------- */

function YearPlan({ state, current, onOpen, onBack }) {
  return (
    <Page>
      <NavBar left={<BackButton onClick={onBack} />} />
      <h1 className="large-title mt-1">Year Plan</h1>
      <p className="body secondary mt-1">52 weeks to ÖMO federal level. Each week: 5 learning days, 1 mixed review and 1 mock exam in the real format.</p>
      {PHASES.map((phase) => (
        <section key={phase.id}>
          <Caption>
            Weeks {phase.weeks[0]}–{phase.weeks[1]} · {phase.name}
          </Caption>
          <div className="group">
            {WEEKS.slice(phase.weeks[0] - 1, phase.weeks[1]).map((w, k) => {
              const week = phase.weeks[0] + k
              const start = (week - 1) * 7
              const written = !!getDay(start).content
              return (
                <div key={week} className="row" style={{ opacity: start > current ? 0.55 : 1 }}>
                  <span className="footnote w-7 shrink-0 tabular-nums">{week}</span>
                  <span className="flex-1">
                    <span className="body block">{w.theme}</span>
                    <span className="footnote block">
                      {AREAS[w.area]}
                      {!written && ' · coming soon'}
                    </span>
                  </span>
                  <span className="flex gap-1">
                    {Array.from({ length: 7 }, (_, i) => {
                      const index = start + i
                      const r = state.results[index]
                      const open = index <= current && written
                      return (
                        <button
                          key={i}
                          disabled={!open}
                          onClick={() => onOpen(index)}
                          aria-label={`Day ${index + 1}`}
                          className="h-3 w-3 rounded-full"
                          style={{ background: r ? STATUS[r.status].color : 'var(--fill)', boxShadow: index === current ? '0 0 0 2px var(--accent)' : 'none' }}
                        />
                      )
                    })}
                  </span>
                </div>
              )
            })}
          </div>
          <p className="footnote mt-2 px-4">Weekly mock: {phase.about}.</p>
        </section>
      ))}
      <Caption>Day 365</Caption>
      <div className="group p-4">
        <p className="body">Final exam: a full ÖMO federal final paper.</p>
      </div>
    </Page>
  )
}

/* ---------- Settings ---------- */

function Settings({ onBack, onSaved }) {
  const [ai, setAI] = useState(loadAI)
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)

  const save = (next) => {
    setAI(next)
    saveAI(next)
    onSaved()
  }

  const test = async () => {
    setBusy(true)
    setStatus('')
    try {
      await testKey()
      setStatus('ok')
    } catch (e) {
      setStatus(e.message)
    }
    setBusy(false)
  }

  return (
    <Page>
      <NavBar left={<BackButton onClick={onBack} />} />
      <h1 className="large-title mt-1">Settings</h1>

      <Caption>AI coach</Caption>
      <div className="group">
        <label className="row">
          <span className="body w-24 shrink-0">API key</span>
          <input
            type="password"
            value={ai.key}
            onChange={(e) => save({ ...ai, key: e.target.value.trim() })}
            placeholder="sk-ant-…"
            autoComplete="off"
            className="body min-w-0 flex-1 bg-transparent text-right outline-none placeholder:text-[var(--secondary)]"
          />
        </label>
        {MODELS.map((m) => (
          <button key={m.id} onClick={() => save({ ...ai, model: m.id })} className="row">
            <span className="flex-1">
              <span className="body block">{m.name}</span>
              <span className="footnote block">{m.note}</span>
            </span>
            {ai.model === m.id && <Check className="text-[var(--link)]" />}
          </button>
        ))}
        <button onClick={test} disabled={!ai.key || busy} className="row link">
          {busy ? 'Testing…' : 'Test the connection'}
        </button>
      </div>
      <p className="footnote mt-2 px-4">
        {status === 'ok' ? '✓ Connected. The coach is ready.' : status || 'Get a key at console.anthropic.com. Each marked proof costs a few cents. The key is saved only on this device and sent only to Anthropic.'}
      </p>

      <Caption>How it works</Caption>
      <div className="group">
        {[
          ['Learning days', `3 problems: solve all 3 to pass. Answers get ${TRIES} tries, the proof needs ${PROOF_PASS}/7 (${TRIES} checks a day).`],
          ['Challenge', `A harder proof after you pass. ${CHALLENGE_MASTER}/7 or more turns the day purple.`],
          ['Review day', 'Problems from earlier weeks, without the topic. Like a real contest.'],
          ['Mock exam', 'The real ÖMO format every 7th day. Finishing keeps your streak; 50% is green, 85% purple.'],
          ['Streak', 'Pass every day. A missed day resets it.'],
        ].map(([t, d]) => (
          <div key={t} className="row items-start">
            <span className="flex-1">
              <span className="body block">{t}</span>
              <span className="footnote block">{d}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="footnote mt-2 px-4">The AI coach is very good but not perfect. If a mark looks wrong, ask the coach to explain it, or compare with the official solution.</p>
    </Page>
  )
}

/* ---------- Celebrations ---------- */

const CONFETTI = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#5AC8FA', '#007AFF', '#5856D6', '#AF52DE', '#FF2D55']

function Confetti({ colors }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        left: `${(i * 53) % 100}%`,
        delay: `${1 + (i % 10) * 0.07}s`,
        color: colors[i % colors.length],
        duration: `${2.2 + (i % 5) * 0.3}s`,
      })),
    [],
  )
  return pieces.map((p, i) => <span key={i} className="confetti-piece" style={{ left: p.left, background: p.color, animationDelay: p.delay, animationDuration: p.duration }} />)
}

function Celebration({ status, from, to, title, score, onDone }) {
  const [ready, setReady] = useState(false)
  const [filled, setFilled] = useState(0.04)
  useEffect(() => {
    const a = setTimeout(() => setFilled(1), 700)
    const b = setTimeout(() => setReady(true), 1700)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [])
  const mastered = status === 'mastered'
  const color = STATUS[status].color
  const streakUp = to != null

  return (
    <div className="app fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Confetti colors={mastered ? ['#AF52DE', '#BF5AF2', '#5856D6', '#FF2D55'] : CONFETTI} />
      <p className="caption rise">{score || (mastered ? 'Challenge solved' : 'All 3 solved')}</p>
      <div className="pop mt-6">
        <Ring value={filled} size={240} stroke={24} color={color} track="var(--fill)">
          {streakUp ? (
            <>
              <span className="num-out absolute text-[72px] font-bold leading-none tracking-tight">{from}</span>
              <span className="num-in absolute text-[72px] font-bold leading-none tracking-tight">{to}</span>
            </>
          ) : (
            <span className="num-in absolute text-[64px] font-bold leading-none" style={{ color }}>
              ★
            </span>
          )}
        </Ring>
      </div>
      <h1 className="large-title rise mt-8" style={{ animationDelay: '1.1s' }}>
        {mastered ? 'Day Mastered' : status === 'done' ? 'Mock Finished' : 'Day Passed'}
      </h1>
      <p className="body secondary rise mt-1" style={{ animationDelay: '1.3s' }}>
        {title}
        {streakUp ? ` · ${to}-day streak` : ''}
      </p>
      <button onClick={onDone} className="btn btn-filled mt-10 w-full max-w-xs transition-opacity" style={{ opacity: ready ? 1 : 0, pointerEvents: ready ? 'auto' : 'none' }}>
        Continue
      </button>
    </div>
  )
}

/* ---------- App ---------- */

export default function App() {
  const [state, setState] = useSaved()
  const [screen, setScreen] = useState({ name: 'home' }) // home | day | part | plan | settings
  const [coach, setCoach] = useState(null)
  const [celebration, setCelebration] = useState(null)
  const [hasAI, setHasAI] = useState(() => !!loadAI().key)

  const today = dayOf(Date.now())
  const { count, lastDay } = state.streak
  const streak = lastDay != null && lastDay >= today - 1 ? count : 0 // a missed day resets it
  const passedToday = lastDay === today
  const current = Math.min(passedToday ? state.next - 1 : state.next, YEAR - 1)

  // A part's work. Unfinished days start fresh each calendar day; finished days keep their work.
  const getWork = (index, part) => {
    const w = state.work[`${index}:${part}`]
    if (!w) return FRESH
    if (state.results[index] || w.day === today || part === 'c') return { ...FRESH, ...w }
    return FRESH
  }
  const updateWork = (index, part, f) =>
    setState((s) => {
      const key = `${index}:${part}`
      const old = s.work[key]
      const base = old && (s.results[index] || old.day === today || part === 'c') ? { ...FRESH, ...old } : FRESH
      return { ...s, work: { ...s.work, [key]: { ...f(base), day: base.day ?? today } } }
    })

  const currentDay = getDay(current)
  const failedToday =
    !passedToday &&
    !!currentDay.content &&
    currentDay.kind !== 'mock' &&
    currentDay.content.problems.some((p, k) => partStatus(p, getWork(current, `p${k}`)) === 'failed')

  // Finish the day as soon as everything is solved
  useEffect(() => {
    const d = currentDay
    if (passedToday || !d.content || state.results[current]) return
    let status, score
    if (d.kind === 'mock') {
      const scores = d.content.problems.map((_, k) => bestScore(getWork(current, `p${k}`)))
      if (scores.some((s) => s < 0)) return
      const total = scores.reduce((a, b) => a + b, 0)
      const max = scores.length * 7
      status = total >= MOCK_MASTER * max ? 'mastered' : total >= MOCK_PASS * max ? 'passed' : 'done'
      score = `${total} of ${max} points`
    } else {
      if (!d.content.problems.every((p, k) => partStatus(p, getWork(current, `p${k}`)) === 'ok')) return
      status = 'passed'
    }
    const next = lastDay === today - 1 ? count + 1 : 1
    setState((s) => ({
      ...s,
      next: current + 1,
      streak: { count: next, lastDay: today },
      best: Math.max(s.best || 0, next),
      results: { ...s.results, [current]: { day: today, status, score } },
    }))
    setCelebration({ status, from: streak, to: next, title: d.content.title, score })
  }, [state.work])

  // Mastering a challenge (today or any earlier learning day)
  useEffect(() => {
    Object.entries(state.results).forEach(([index, r]) => {
      if (r.status !== 'passed') return
      const d = getDay(Number(index))
      if (d.kind !== 'learn') return
      if (bestScore(getWork(Number(index), 'c')) >= CHALLENGE_MASTER) {
        setState((s) => ({ ...s, results: { ...s.results, [index]: { ...s.results[index], status: 'mastered' } } }))
        setCelebration({ status: 'mastered', title: d.content.title })
      }
    })
  }, [state.work])

  const go = (name, extra = {}) => {
    setScreen({ name, ...extra })
    window.scrollTo(0, 0)
  }

  let page
  if (screen.name === 'day') {
    const d = { ...getDay(screen.index), result: state.results[screen.index] }
    page = (
      <DayScreen
        d={d}
        state={state}
        getWork={getWork}
        isCurrent={screen.index === current}
        onBack={() => go('home')}
        onPart={(index, part) => go('part', { index, part })}
        onStartMock={() => updateWork(screen.index, 'mock', (w) => ({ ...w, startedAt: Date.now() }))}
      />
    )
  } else if (screen.name === 'part') {
    const d = { ...getDay(screen.index), result: state.results[screen.index] }
    const problem = screen.part === 'c' ? d.content.challenge : d.content.problems[Number(screen.part.slice(1))]
    page = (
      <ProblemScreen
        key={`${screen.index}:${screen.part}`}
        d={d}
        part={screen.part}
        problem={problem}
        entry={getWork(screen.index, screen.part)}
        update={(f) => updateWork(screen.index, screen.part, f)}
        isCurrent={screen.index === current}
        hasAI={hasAI}
        onBack={() => go('day', { index: screen.index })}
        onCoach={(p, g) => setCoach({ problem: p, grade: g })}
      />
    )
  } else if (screen.name === 'plan') {
    page = <YearPlan state={state} current={current} onOpen={(index) => go('day', { index })} onBack={() => go('home')} />
  } else if (screen.name === 'settings') {
    page = <Settings onBack={() => go('home')} onSaved={() => setHasAI(!!loadAI().key)} />
  } else {
    page = (
      <Home
        state={state}
        today={today}
        current={current}
        streak={streak}
        passedToday={passedToday}
        failedToday={failedToday}
        hasAI={hasAI}
        onOpenDay={(index) => go('day', { index })}
        onPlan={() => go('plan')}
        onSettings={() => go('settings')}
      />
    )
  }

  return (
    <div className="app">
      {page}
      {coach && (
        <CoachSheet
          problem={coach.problem}
          grade={coach.grade}
          hasAI={hasAI}
          onClose={() => setCoach(null)}
          onSettings={() => {
            setCoach(null)
            go('settings')
          }}
        />
      )}
      {celebration && <Celebration {...celebration} onDone={() => setCelebration(null)} />}
    </div>
  )
}
