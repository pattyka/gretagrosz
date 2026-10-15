import { useEffect, useMemo, useRef, useState } from 'react'
import { AREAS, AREA_ORDER, PAPERS, PHASES, PLAN, START, TOTAL_DAYS, paperLinks } from './plan'
import { getDay } from './content'
import { isCorrect } from './check'
import { MAX_POINTS, MODELS, askCoach, gradeProof, loadAI, readPhoto, saveAI, testKey } from './ai'

const KEY = 'regional-150'
const TRIES = 3 // per answer problem, and checks per proof, each day
const PROOF_PASS = 5 // of 8
const CHALLENGE_MASTER = 7 // of 8
const PAPER_PASS = 0.5
const PAPER_MASTER = 0.75
const REVIEW_GAPS = [3, 10, 30, 60] // days until a solved problem comes back in a warm-up, after 0, 1, 2, 3+ good reviews
const MINI_EVERY = 14 // a mini-mock after every 14 finished days
const MINI_COUNT = 7 // up to day 98, then the real papers start
const MINI_MINUTES = 60

const DAY = 864e5
const dayOf = (t) => Math.floor((t - new Date(t).getTimezoneOffset() * 6e4) / DAY) // your local calendar day
const dayOfDate = (y, m, d) => dayOf(new Date(y, m, d).getTime())

// results: plan index → { day: calendar day, status, score }
// work: `${index}:${part}` → { day, tries, solved, grades, startedAt, swaps, mistake }
// srs: `${index}:${k}` → { box, due } (when a solved problem comes back as a warm-up)
// reviews: calendar day → today's warm-up { index, k, tries, solved, mistake } or null
// mistakes: [{ index, k, reason, at, fixed }]   minis: n → { refs, startedAt, work }
const EMPTY = { next: 0, streak: { count: 0, lastDay: null }, best: 0, results: {}, work: {}, examDate: '', start: START, srs: null, reviews: {}, mistakes: [], minis: {} }

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

function useScrolled(limit = 44) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > limit)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [limit])
  return scrolled
}

const FRESH = { tries: 0, solved: false, grades: [] }
const bestScore = (entry) => Math.max(-1, ...(entry?.grades || []).map((g) => g.score))

const STATUS = {
  passed: { color: 'var(--green)', label: 'Passed' },
  mastered: { color: 'var(--purple)', label: 'Mastered' },
  done: { color: 'var(--orange)', label: 'Paper done' },
}

const KIND = { learn: 'Learn', paper: 'Past paper', task: 'Task' }

const formatTime = (ms) => {
  const s = Math.max(0, Math.round(ms / 1000))
  return `${Math.floor(s / 3600)}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

const areaColor = (d) => (d.kind === 'paper' ? 'var(--indigo)' : d.area === 'X' ? 'var(--secondary)' : AREAS[d.area].color)
const dayLabel = (d) => (d.kind === 'paper' ? PAPERS[d.paper[0]].name : AREAS[d.area].name)
const badgeLetter = (d) => (d.kind === 'paper' ? 'P' : d.area === 'X' ? 'M' : d.area)
const dayTitle = (d) => (d.kind === 'paper' ? `${d.paper[0] === 'GWF' ? 'GWF' : 'Bundeswettbewerb T1'} ${d.paper[1]}` : d.topic)
const daySub = (d) =>
  d.kind === 'paper' ? (d.topic.startsWith('Probewettbewerb') ? d.topic : d.paper[0] === 'GWF' ? 'Past regional paper' : 'Federal Part 1 paper — one round harder') : d.details.join(' · ')

/* ---------- Icons ---------- */

const Icon = ({ d, className = 'h-[22px] w-[22px]', fill = 'none', strokeWidth = 2.2 }) => (
  <svg viewBox="0 0 24 24" className={className} fill={fill} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
)
const CheckIcon = ({ className = 'h-5 w-5' }) => <Icon className={className} strokeWidth={2.8} d={<path d="M5 12.5l4.5 4.5L19 7.5" />} />
const ChevronIcon = ({ left = false, className = 'h-[18px] w-[18px]' }) => <Icon className={className} strokeWidth={2.6} d={<path d={left ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />} />
const FlameIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2c.5 3.2-1.4 5-3 6.8C7.4 10.6 6 12.3 6 15a6 6 0 0012 0c0-2.4-1.1-4.2-2.3-5.5-.2 1.6-1 2.7-2.2 3.2.6-3.6-.2-7.4-1.5-10.7z" />
  </svg>
)
const TodayIcon = (p) => <Icon {...p} d={<><rect x="3.5" y="4.5" width="17" height="16" rx="3.5" /><path d="M3.5 9.5h17M8 2.8v3.4M16 2.8v3.4" /><circle cx="12" cy="15" r="1.8" fill="currentColor" stroke="none" /></>} />
const PlanIcon = (p) => <Icon {...p} d={<><path d="M9 6h11M9 12h11M9 18h11" /><circle cx="4.5" cy="6" r="1.2" fill="currentColor" stroke="none" /><circle cx="4.5" cy="12" r="1.2" fill="currentColor" stroke="none" /><circle cx="4.5" cy="18" r="1.2" fill="currentColor" stroke="none" /></>} />
const ProgressIcon = (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.2" /><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" /></>} />
const SettingsIcon = (p) => <Icon {...p} d={<><path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2.2" /><circle cx="8" cy="17" r="2.2" /></>} />
const CameraIcon = (p) => <Icon {...p} d={<><path d="M4 8.5A2.5 2.5 0 016.5 6h1.6l1.4-2h5l1.4 2h1.6A2.5 2.5 0 0120 8.5v8A2.5 2.5 0 0117.5 19h-11A2.5 2.5 0 014 16.5z" /><circle cx="12" cy="12.5" r="3.4" /></>} />
const SparkIcon = (p) => <Icon {...p} d={<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />} />

/* ---------- Building blocks ---------- */

function Ring({ value, size = 220, stroke = 22, color = 'var(--accent)', track, children }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track || color} strokeOpacity={track ? 1 : 0.18} strokeWidth={stroke} />
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

// iOS-style navigation bar: transparent at the top, frosted with a small title once you scroll
function NavBar({ title, left, right, alwaysTitle = false }) {
  const scrolled = useScrolled()
  return (
    <div className={`navbar ${scrolled ? 'scrolled' : 'flat'}`} style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="mx-auto flex h-11 max-w-md items-center justify-between px-4">
        <div className="min-w-[80px]">{left}</div>
        <div className="headline truncate px-2 transition-opacity duration-200" style={{ opacity: scrolled || alwaysTitle ? 1 : 0 }}>
          {title}
        </div>
        <div className="flex min-w-[80px] justify-end">{right}</div>
      </div>
    </div>
  )
}

function BackButton({ onClick, label = 'Back' }) {
  return (
    <button onClick={onClick} className="link -ml-2 flex items-center gap-0.5 active:opacity-50">
      <ChevronIcon left className="h-[22px] w-[22px]" /> {label}
    </button>
  )
}

function Page({ children, className = '' }) {
  return <div className={`mx-auto max-w-md px-4 pb-32 ${className}`}>{children}</div>
}

function Header({ eyebrow, title, children }) {
  return (
    <header className="mb-2 mt-1">
      {eyebrow && <p className="footnote font-semibold uppercase tracking-wide">{eyebrow}</p>}
      <h1 className="large-title">{title}</h1>
      {children}
    </header>
  )
}

const SectionHeader = ({ children }) => <p className="section-header">{children}</p>

function AreaBadge({ d, small = false }) {
  const color = areaColor(d)
  const letter = badgeLetter(d)
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full font-semibold text-white ${small ? 'h-7 w-7 text-[13px]' : 'h-9 w-9 text-[15px]'}`}
      style={{ background: color }}
    >
      {letter}
    </span>
  )
}

function Done({ status, small }) {
  return (
    <span className={`flex items-center justify-center rounded-full ${small ? 'h-5 w-5' : 'h-6 w-6'}`} style={{ background: STATUS[status].color }}>
      <CheckIcon className={small ? 'h-3 w-3 text-white' : 'h-3.5 w-3.5 text-white'} />
    </span>
  )
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
  const blanks = (first.getDay() + 6) % 7
  const length = new Date(month.y, month.m + 1, 0).getDate()
  const shift = (by) => setMonth(({ y, m }) => ({ y: m + by < 0 ? y - 1 : m + by > 11 ? y + 1 : y, m: (m + by + 12) % 12 }))

  return (
    <div className="card p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="headline">{first.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</span>
        <span className="flex gap-5" style={{ color: 'var(--link)' }}>
          <button onClick={() => shift(-1)} aria-label="Previous month" className="active:opacity-50">
            <ChevronIcon left className="h-5 w-5" />
          </button>
          <button onClick={() => shift(1)} aria-label="Next month" className="active:opacity-50">
            <ChevronIcon className="h-5 w-5" />
          </button>
        </span>
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS.map((d, i) => (
          <span key={i} className="caption pb-1 font-semibold">
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
                className="flex h-9 w-9 items-center justify-center rounded-full text-[16px] transition-transform active:scale-90"
                style={{
                  background: hit ? STATUS[hit.status].color : isToday ? 'var(--accent)' : 'transparent',
                  color: hit || isToday ? '#FFFFFF' : day > today ? 'var(--tertiary)' : 'var(--text)',
                  fontWeight: hit || isToday ? 600 : 400,
                }}
              >
                {i + 1}
              </button>
            </span>
          )
        })}
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
        {Object.entries(STATUS).map(([s, { color, label }]) => (
          <span key={s} className="caption flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} /> {label}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- Today ---------- */

function TodayTab({ state, today, current, streak, finishedToday, hasAI, miniDue, onOpenDay, onSettings, onReview, onMini }) {
  const review = state.reviews?.[today]
  const d = getDay(current)
  const result = state.results[current]
  const doneCount = Object.keys(state.results).length
  const started = Object.entries(state.work).some(([key, w]) => key.startsWith(`${current}:`) && w.day === today)
  const date = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  const examDays = state.examDate ? Math.ceil((new Date(state.examDate + 'T08:00').getTime() - Date.now()) / DAY) : null

  let action
  let note
  if (result) {
    const canMaster = d.kind === 'learn' && d.content && result.status !== 'mastered'
    action = canMaster ? 'Try the Challenge' : 'Review Today'
    note = canMaster ? `Score ${CHALLENGE_MASTER}/8 on the challenge to master the day.` : 'Done for today. See you tomorrow.'
  } else if (d.kind === 'paper') {
    action = started ? 'Continue' : 'Open the Paper'
    note = `Real past paper · 4 problems · ${PAPERS[d.paper[0]].minutes / 60} hours · 8 points each`
  } else if (d.kind === 'task') {
    action = 'Open'
    note = daySub(d) || 'A review day.'
  } else if (d.content) {
    action = started ? 'Continue' : 'Start'
    note = `Lesson · 2 quick problems · 1 proof (${PROOF_PASS}/8 to pass)`
  } else {
    action = 'Study with the Coach'
    note = 'No lesson written yet: learn it with the AI coach or your book, then tick it off.'
  }

  const upcoming = [1, 2, 3, 4].map((n) => current + n).filter((i) => i < TOTAL_DAYS)

  return (
    <>
      <NavBar title="Today" />
      <Page>
        <Header eyebrow={date} title="Today" />

        <div className="card mt-4 flex items-center gap-4 p-4">
          <Ring value={doneCount / TOTAL_DAYS} size={84} stroke={10}>
            <span className="caption leading-none">Day</span>
            <span className="title2 leading-tight tabular-nums">{d.day}</span>
          </Ring>
          <div className="min-w-0 flex-1">
            <p className="headline">
              Day {d.day} of {TOTAL_DAYS}
            </p>
            <p className="subhead secondary">{d.phase.name}</p>
            <div className="mt-2 flex items-center gap-1.5" style={{ color: streak ? 'var(--orange)' : 'var(--tertiary)' }}>
              <FlameIcon className="h-[18px] w-[18px]" />
              <span className="subhead font-semibold">{streak}-day streak</span>
            </div>
          </div>
          {examDays != null && examDays >= 0 && (
            <div className="text-right">
              <p className="title2 tabular-nums">{examDays}</p>
              <p className="caption">
                days to the
                <br />
                competition
              </p>
            </div>
          )}
        </div>

        {finishedToday && (
          <div className="card mt-4 flex items-center gap-3 p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--green)' }}>
              <CheckIcon className="h-4 w-4 text-white" />
            </span>
            <span>
              <span className="headline block">Streak safe for today</span>
              <span className="footnote block">Want to keep going? The next day is ready.</span>
            </span>
          </div>
        )}

        {review &&
          (() => {
            const rd = getDay(review.index)
            const st = partStatus(problemAt(review), { ...FRESH, ...review })
            return (
              <>
                <SectionHeader>Warm-up</SectionHeader>
                <div className="group" style={{ '--inset': '60px' }}>
                  <button onClick={onReview} className="row">
                    <AreaBadge d={rd} small />
                    <span className="min-w-0 flex-1">
                      <span className="body block truncate">{dayTitle(rd)}</span>
                      <span className="footnote block">{st === 'ok' ? 'Done. It comes back in a while.' : st === 'failed' ? 'It comes back tomorrow.' : `One quick problem from day ${rd.day}, so you don’t forget it`}</span>
                    </span>
                    <StatusDot status={st} />
                    <ChevronIcon className="h-4 w-4 text-[var(--tertiary)]" />
                  </button>
                </div>
              </>
            )
          })()}

        <SectionHeader>{finishedToday ? 'Next up' : 'Today’s training'}</SectionHeader>
        <div className="card overflow-hidden">
          <button onClick={() => onOpenDay(current)} className="press block w-full p-4 text-left">
            <div className="flex items-center gap-3">
              <AreaBadge d={d} />
              <div className="min-w-0 flex-1">
                <p className="footnote font-semibold" style={{ color: areaColor(d) }}>
                  {dayLabel(d)} · {KIND[d.kind]}
                </p>
                <p className="title3 leading-tight">{dayTitle(d)}</p>
              </div>
              {result && <Done status={result.status} />}
            </div>
            <p className="footnote mt-3">{note}</p>
          </button>
          <div className="px-4 pb-4">
            <button
              onClick={() => onOpenDay(current)}
              className={`btn w-full ${result && d.kind === 'learn' && d.content && result.status !== 'mastered' ? 'btn-purple' : result ? 'btn-tinted' : 'btn-filled'}`}
            >
              {action}
            </button>
          </div>
        </div>

        {miniDue && (
          <button onClick={() => onMini(miniDue)} className="card press mt-4 flex w-full items-center gap-3 p-4 text-left">
            <span className="title3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: 'var(--indigo)' }}>
              {miniDue}
            </span>
            <span className="flex-1">
              <span className="headline block">Mini-mock {miniDue}</span>
              <span className="footnote block">{state.minis?.[miniDue]?.startedAt ? 'In progress. Hand in your solutions.' : `One problem per area in ${MINI_MINUTES} minutes. Optional practice for the real thing.`}</span>
            </span>
            <ChevronIcon className="h-[18px] w-[18px] text-[var(--tertiary)]" />
          </button>
        )}

        {!hasAI && (
          <button onClick={onSettings} className="card press mt-4 flex w-full items-center gap-3 p-4 text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: 'linear-gradient(135deg, var(--indigo), var(--blue))' }}>
              <SparkIcon className="h-[22px] w-[22px]" />
            </span>
            <span className="flex-1">
              <span className="headline block">Turn on the AI coach</span>
              <span className="footnote block">Photograph your proofs and get them marked out of 8, like at the ÖMO.</span>
            </span>
            <ChevronIcon className="h-[18px] w-[18px] text-[var(--tertiary)]" />
          </button>
        )}

        {upcoming.length > 0 && (
          <>
            <SectionHeader>Up next</SectionHeader>
            <div className="group" style={{ '--inset': '60px' }}>
              {upcoming.map((i) => {
                const u = getDay(i)
                return (
                  <div key={i} className="row">
                    <AreaBadge d={u} small />
                    <span className="min-w-0 flex-1">
                      <span className="body block truncate">{dayTitle(u)}</span>
                      <span className="footnote block">
                        Day {u.day} · {dayLabel(u)}
                      </span>
                    </span>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </Page>
    </>
  )
}

/* ---------- Plan ---------- */

function PlanTab({ state, current, onOpenDay }) {
  const [phase, setPhase] = useState(() => Math.max(0, PHASES.findIndex((p) => current + 1 >= p.days[0] && current + 1 <= p.days[1])))
  const p = PHASES[phase]
  const days = PLAN.slice(p.days[0] - 1, p.days[1])
  return (
    <>
      <NavBar title="Plan" />
      <Page>
        <Header title="Plan">
          <p className="subhead secondary mt-1">Your GWF 150-Tage-Plan: 150 days to the Regionalwettbewerb für Fortgeschrittene.</p>
        </Header>
        <div className="segmented mt-4">
          {PHASES.map((ph, i) => (
            <button key={ph.name} onClick={() => setPhase(i)} className={phase === i ? 'on' : ''}>
              {ph.name}
            </button>
          ))}
        </div>
        <p className="footnote mt-3 px-1">
          Days {p.days[0]}–{p.days[1]} · {p.about}
        </p>
        <div className="group mt-3" style={{ '--inset': '60px' }}>
          {days.map((plan) => {
            const d = getDay(plan.index)
            const r = state.results[plan.index]
            const isToday = plan.index === current
            const open = plan.index <= current
            return (
              <button key={plan.index} disabled={!open} onClick={() => onOpenDay(plan.index)} className="row" style={{ opacity: plan.index > current ? 0.6 : 1 }}>
                <AreaBadge d={d} small />
                <span className="min-w-0 flex-1">
                  <span className="body block truncate">{dayTitle(d)}</span>
                  <span className="footnote block truncate">
                    Day {d.day}
                    {daySub(d) ? ` · ${daySub(d)}` : ` · ${dayLabel(d)}`}
                  </span>
                </span>
                {r ? <Done status={r.status} small /> : isToday ? <span className="footnote font-semibold" style={{ color: 'var(--accent)' }}>Today</span> : null}
                {open && <ChevronIcon className="h-4 w-4 text-[var(--tertiary)]" />}
              </button>
            )
          })}
        </div>
      </Page>
    </>
  )
}

/* ---------- Progress ---------- */

function ProgressTab({ state, today, onOpenDay, onRedo, onMini }) {
  const strength = areaStrength(state)
  const [allMistakes, setAllMistakes] = useState(false)
  const mistakes = state.mistakes || []
  const open = mistakes.filter((m) => !m.fixed).slice().reverse()
  const reasonCounts = REASONS.map(([id, label, tip]) => ({ id, label, tip, n: mistakes.filter((m) => m.reason === id).length }))
    .filter((r) => r.n > 0)
    .sort((a, b) => b.n - a.n)
  const minis = Object.entries(state.minis || {}).filter(([, m]) => m.refs.length && m.refs.every((_, i) => m.work?.[i]?.grades?.length))
  const perArea = AREA_ORDER.map((a) => {
    const indices = PLAN.filter((d) => d.kind === 'learn' && d.area === a).map((d) => d.index)
    const done = indices.filter((i) => state.results[i]).length
    const mastered = indices.filter((i) => state.results[i]?.status === 'mastered').length
    return { a, done, mastered, total: indices.length }
  })
  const mocks = PLAN.filter((d) => d.kind === 'paper' && state.results[d.index]?.score)
  const doneCount = Object.keys(state.results).length
  const masteredCount = Object.values(state.results).filter((r) => r.status === 'mastered').length

  return (
    <>
      <NavBar title="Progress" />
      <Page>
        <Header title="Progress" />

        <div className="card mt-4 flex items-center gap-5 p-5">
          <div className="relative h-[150px] w-[150px] shrink-0">
            {perArea.map((x, i) => (
              <div key={x.a} className="absolute" style={{ inset: i * 18 }}>
                <Ring value={x.done / x.total} size={150 - i * 36} stroke={15} color={AREAS[x.a].color} />
              </div>
            ))}
          </div>
          <div className="flex-1 space-y-2">
            {perArea.map((x) => (
              <div key={x.a}>
                <p className="caption font-semibold" style={{ color: AREAS[x.a].color }}>
                  {AREAS[x.a].name.toUpperCase()}
                </p>
                <p className="subhead tabular-nums">
                  {x.done}/{x.total} days
                  {x.mastered > 0 && <span className="secondary"> · {x.mastered}★</span>}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            [doneCount, 'days done'],
            [masteredCount, 'mastered'],
            [state.best || 0, 'best streak'],
          ].map(([n, label]) => (
            <div key={label} className="card px-3 py-3 text-center">
              <p className="title2 tabular-nums">{n}</p>
              <p className="caption">{label}</p>
            </div>
          ))}
        </div>

        <SectionHeader>Strength by area</SectionHeader>
        <div className="group">
          {AREA_ORDER.map((a) => {
            const x = strength[a]
            const enough = x && x.n >= 3
            const label = !enough ? 'Not enough yet' : x.pct >= 0.75 ? 'Strong' : x.pct >= 0.5 ? 'Okay' : 'Needs work'
            return (
              <div key={a} className="row">
                <span className="w-[112px] shrink-0">
                  <span className="body block">{AREAS[a].name}</span>
                  <span className="footnote block" style={{ color: enough && x.pct < 0.5 ? 'var(--orange)' : undefined }}>
                    {label}
                  </span>
                </span>
                <span className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: 'var(--fill)' }}>
                  <span className="block h-full rounded-full transition-all duration-700" style={{ width: `${enough ? Math.round(x.pct * 100) : 0}%`, background: AREAS[a].color }} />
                </span>
                <span className="subhead secondary w-10 text-right tabular-nums">{enough ? `${Math.round(x.pct * 100)}%` : '–'}</span>
              </div>
            )
          })}
        </div>
        <p className="footnote mt-2 px-4">From your first tries, warm-ups and mini-mocks. Weaker areas come up first in your warm-ups.</p>

        <SectionHeader>Mistake notebook</SectionHeader>
        {mistakes.length === 0 ? (
          <div className="card p-4">
            <p className="subhead secondary">When you run out of tries on a problem, you note what went wrong. Your mistakes collect here, so you can see your weak spots and redo the problems.</p>
          </div>
        ) : (
          <>
            <div className="card p-4">
              <div className="space-y-2.5">
                {reasonCounts.map((r) => (
                  <div key={r.id} className="flex items-center gap-3">
                    <span className="subhead w-[150px] shrink-0">{r.label}</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: 'var(--fill)' }}>
                      <span className="block h-full rounded-full" style={{ width: `${(r.n / reasonCounts[0].n) * 100}%`, background: 'var(--red)' }} />
                    </span>
                    <span className="subhead secondary w-6 text-right tabular-nums">{r.n}</span>
                  </div>
                ))}
              </div>
              <p className="footnote mt-4">
                <span className="font-semibold" style={{ color: 'var(--text)' }}>
                  Your most common mistake:
                </span>{' '}
                {reasonCounts[0].tip}
              </p>
            </div>
            {open.length > 0 && (
              <>
                <p className="footnote mt-4 px-4">Redo these. A solved redo is crossed off.</p>
                <div className="group mt-2" style={{ '--inset': '60px' }}>
                  {(allMistakes ? open : open.slice(0, 5)).map((m, i) => {
                    const md = getDay(m.index)
                    return (
                      <button key={i} onClick={() => onRedo(m)} className="row">
                        <AreaBadge d={md} small />
                        <span className="min-w-0 flex-1">
                          <span className="body block truncate">{dayTitle(md)}</span>
                          <span className="footnote block truncate">
                            Day {md.day}
                            {m.k === 'c' ? ' · challenge' : ''} · {reasonLabel(m.reason)}
                          </span>
                        </span>
                        <ChevronIcon className="h-4 w-4 text-[var(--tertiary)]" />
                      </button>
                    )
                  })}
                  {open.length > 5 && (
                    <button onClick={() => setAllMistakes((v) => !v)} className="row link">
                      {allMistakes ? 'Show fewer' : `Show all ${open.length}`}
                    </button>
                  )}
                </div>
              </>
            )}
            {mistakes.length > open.length && <p className="footnote mt-2 px-4">{mistakes.length - open.length} fixed so far.</p>}
          </>
        )}

        {minis.length > 0 && (
          <>
            <SectionHeader>Mini-mocks</SectionHeader>
            <div className="group">
              {minis.map(([n, m]) => {
                const total = m.refs.reduce((sum, _, i) => sum + Math.max(0, bestScore(m.work[i])), 0)
                const max = m.refs.length * MAX_POINTS
                return (
                  <button key={n} onClick={() => onMini(Number(n))} className="row">
                    <span className="body flex-1">Mini-mock {n}</span>
                    <span className="subhead tabular-nums" style={{ color: total >= PAPER_MASTER * max ? 'var(--purple)' : total >= PAPER_PASS * max ? 'var(--green)' : 'var(--orange)' }}>
                      {total}/{max}
                    </span>
                    <ChevronIcon className="h-4 w-4 text-[var(--tertiary)]" />
                  </button>
                )
              })}
            </div>
          </>
        )}

        <SectionHeader>Past papers</SectionHeader>
        <div className="card p-4">
          {mocks.length === 0 ? (
            <p className="subhead secondary">Your past-paper scores will show up here. The first paper is on day 101.</p>
          ) : (
            <div className="flex h-36 items-end gap-2">
              {mocks.map((m) => {
                const [got, max] = state.results[m.index].score.split('/').map(Number)
                const pct = got / max
                return (
                  <button key={m.index} onClick={() => onOpenDay(m.index)} className="flex max-w-[40px] flex-1 flex-col items-center gap-1">
                    <span className="caption tabular-nums">{got}</span>
                    <span className="w-full rounded-md" style={{ height: `${Math.max(6, pct * 100)}px`, background: pct >= PAPER_MASTER ? 'var(--purple)' : pct >= PAPER_PASS ? 'var(--green)' : 'var(--orange)' }} />
                    <span className="caption">{String(m.paper[1]).slice(2)}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        <SectionHeader>Calendar</SectionHeader>
        <Calendar state={state} today={today} onOpen={onOpenDay} />
      </Page>
    </>
  )
}

/* ---------- Settings ---------- */

function SettingsTab({ state, setState, onAIChange }) {
  const [ai, setAI] = useState(loadAI)
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)

  const save = (next) => {
    setAI(next)
    saveAI(next)
    onAIChange()
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
    <>
      <NavBar title="Settings" />
      <Page>
        <Header title="Settings" />

        <SectionHeader>Dates</SectionHeader>
        <div className="group">
          <label className="row">
            <span className="body flex-1">Date of the Regionalwettbewerb</span>
            <input
              type="date"
              value={state.examDate}
              onChange={(e) => setState((s) => ({ ...s, examDate: e.target.value }))}
              className="body rounded-lg bg-[var(--fill)] px-2 py-1 outline-none"
              style={{ color: 'var(--text)' }}
            />
          </label>
        </div>
        <p className="footnote mt-2 px-4">The competition is usually in March or early April. Add the date to see a countdown on the Today screen.</p>

        <SectionHeader>AI coach</SectionHeader>
        <div className="group">
          <label className="row">
            <span className="body w-24 shrink-0">API key</span>
            <input
              type="password"
              value={ai.key}
              onChange={(e) => save({ ...ai, key: e.target.value.trim() })}
              placeholder="sk-ant-…"
              autoComplete="off"
              className="body min-w-0 flex-1 bg-transparent text-right outline-none placeholder:text-[var(--tertiary)]"
            />
          </label>
          {MODELS.map((m) => (
            <button key={m.id} onClick={() => save({ ...ai, model: m.id })} className="row">
              <span className="flex-1">
                <span className="body block">{m.name}</span>
                <span className="footnote block">{m.note}</span>
              </span>
              {ai.model === m.id && <CheckIcon className="h-5 w-5 text-[var(--link)]" />}
            </button>
          ))}
          <button onClick={test} disabled={!ai.key || busy} className="row link disabled:opacity-40">
            {busy ? 'Testing…' : 'Test the connection'}
          </button>
        </div>
        <p className="footnote mt-2 px-4">
          {status === 'ok' ? '✓ Connected. The coach is ready.' : status || 'Get a key at console.anthropic.com. A marked proof costs a few cents. The key stays on this device and is only sent to Anthropic.'}
        </p>

        <SectionHeader>How it works</SectionHeader>
        <div className="group">
          {[
            ['Your plan', 'The days follow your GWF 150-Tage-Plan: Grundlagen, Vertiefung, Altaufgaben, Generalprobe.'],
            ['Learning days', `A lesson, 2 quick problems (${TRIES} tries each) and a proof that needs ${PROOF_PASS}/8. Days without a lesson yet: study with the coach, then tick off.`],
            ['Challenge', `A harder proof after you pass. ${CHALLENGE_MASTER}/8 masters the day.`],
            ['Past papers', 'Real ÖMO papers from 2015–2026, under exam conditions, marked out of 32. 50% is green, 75% purple.'],
            ['Your pace', 'Do at least one day every day to keep your streak. Want to do more? The next day opens as soon as you finish.'],
            ['Out of tries?', `After ${TRIES} wrong tries on a problem you see the solution and get a new problem of the same kind, so you can still pass the day.`],
            ['Hints', 'Up to three steps: a nudge, the key idea, then the first step. Use the smallest one you need.'],
            ['Warm-up', `Every day one quick problem from an earlier day comes back: after ${REVIEW_GAPS.join(', ')} days. Miss it and it comes back tomorrow. Weaker areas come first.`],
            ['Mistake notebook', 'When you run out of tries, note what went wrong. Progress shows your most common mistakes and lets you redo the problems.'],
            ['Mini-mocks', `After every ${MINI_EVERY} days: one problem per area in ${MINI_MINUTES} minutes, marked once, like the real thing. Optional.`],
          ].map(([t, d]) => (
            <div key={t} className="row items-start">
              <span>
                <span className="body block">{t}</span>
                <span className="footnote block">{d}</span>
              </span>
            </div>
          ))}
        </div>

        <SectionHeader>Data</SectionHeader>
        <div className="group">
          <button
            onClick={() => window.confirm('Delete all your progress? This can’t be undone.') && setState({ ...EMPTY, examDate: state.examDate, start: state.start })}
            className="row body"
            style={{ color: 'var(--red)' }}
          >
            Reset progress
          </button>
        </div>
        <p className="footnote mt-6 px-4 text-center">Made for training towards the ÖMO. Not affiliated with the Österreichische Mathematik-Olympiade.</p>
      </Page>
    </>
  )
}

/* ---------- A day ---------- */

function Lesson({ lesson }) {
  const [showExample, setShowExample] = useState(false)
  return (
    <>
      <SectionHeader>The idea</SectionHeader>
      <div className="card p-4">
        <p className="body leading-[24px]">{lesson.idea}</p>
      </div>
      <SectionHeader>How to use it</SectionHeader>
      <div className="group" style={{ '--inset': '52px' }}>
        {lesson.steps.map((s, i) => (
          <div key={i} className="row items-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold" style={{ background: 'var(--tint)', color: 'var(--link)' }}>
              {i + 1}
            </span>
            <span className="body">{s}</span>
          </div>
        ))}
      </div>
      <SectionHeader>Example</SectionHeader>
      <div className="card overflow-hidden">
        <p className="problem p-4">{lesson.example.q}</p>
        {showExample ? (
          <p className="fade-in problem secondary px-4 pb-4">{lesson.example.a}</p>
        ) : (
          <button onClick={() => setShowExample(true)} className="row link" style={{ borderTop: '0.5px solid var(--separator)' }}>
            Show solution
          </button>
        )}
      </div>
      {lesson.de && (
        <>
          <SectionHeader>On the German paper</SectionHeader>
          <div className="card grid grid-cols-2 gap-x-4 gap-y-2 p-4">
            {lesson.de.map(([de, en]) => (
              <div key={de}>
                <p className="subhead font-semibold">{de}</p>
                <p className="caption">{en}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

// When you run out of tries on a problem you get a new one of the same kind (answer or proof),
// preferably from the same area and from a day you've already reached.
function originalProblem(index, part) {
  return getDay(index).content.problems[Number(part.slice(1))]
}
function currentProblem(index, part, entry) {
  const swap = entry.swaps?.[entry.swaps.length - 1]
  return swap ? getDay(swap.index).content.problems[swap.k] : originalProblem(index, part)
}
function pickReplacement(index, part, entry) {
  const day = getDay(index)
  const type = originalProblem(index, part).type
  const used = new Set([`${index}:${part.slice(1)}`, ...(entry.swaps || []).map((s) => `${s.index}:${s.k}`)])
  const candidates = []
  PLAN.forEach((p) => {
    if (p.index === index || p.kind !== 'learn') return
    const content = getDay(p.index).content
    if (!content) return
    content.problems.forEach((q, k) => {
      if (q.type !== type || used.has(`${p.index}:${k}`)) return
      // Same area first, then days you've already reached, closest first
      const rank = (p.area === day.area ? 0 : 2) + (p.index < index ? 0 : 1)
      candidates.push({ index: p.index, k, rank, dist: Math.abs(p.index - index) })
    })
  })
  candidates.sort((a, b) => a.rank - b.rank || a.dist - b.dist)
  return candidates[0] ? { index: candidates[0].index, k: candidates[0].k } : null
}

function partStatus(problem, entry) {
  if (problem.type === 'answer') return entry.solved ? 'ok' : entry.tries >= TRIES ? 'failed' : 'open'
  const best = bestScore(entry)
  return best >= PROOF_PASS ? 'ok' : entry.grades.length >= TRIES ? 'failed' : 'open'
}

// A problem anywhere in the plan: { index, k } where k is a problem number or 'c' for the challenge
const refKey = (r) => `${r.index}:${r.k}`
function problemAt(ref) {
  const c = getDay(ref.index).content
  return ref.k === 'c' ? c.challenge : c.problems[ref.k]
}

// After a day is passed its quick problems join the warm-up rotation. Problems you ran out of tries on come back tomorrow.
function addDayToSrs(srs, index, work, day) {
  const d = getDay(index)
  if (d.kind !== 'learn' || !d.content) return
  d.content.problems.forEach((_, i) => {
    const chain = [{ index, k: i }, ...(work[`${index}:p${i}`]?.swaps || [])]
    chain.forEach((ref, j) => {
      if (problemAt(ref)?.type !== 'answer') return
      const last = j === chain.length - 1
      if (!last || !srs[refKey(ref)]) srs[refKey(ref)] = { box: 0, due: day + (last ? REVIEW_GAPS[0] : 1) }
    })
  })
}

// How well each area is going, from 0 to 1: first tries on learning days, warm-ups and mini-mocks
function areaStrength(state) {
  const acc = {}
  const add = (area, v) => {
    if (AREA_ORDER.includes(area)) (acc[area] ||= []).push(v)
  }
  const answerScore = (e) => (e.solved ? Math.max(0.4, 1 - 0.3 * e.tries) : 0)
  Object.entries(state.work).forEach(([key, raw]) => {
    const m = key.match(/^(\d+):p(\d)$/)
    if (!m) return
    const index = Number(m[1])
    const d = getDay(index)
    if (d.kind !== 'learn' || !d.content || !state.results[index]) return
    const e = { ...FRESH, ...raw }
    const p = currentProblem(index, `p${m[2]}`, e)
    const score = p.type === 'answer' ? answerScore(e) : Math.max(0, bestScore(e)) / MAX_POINTS
    add(d.area, score / (1 + (e.swaps?.length || 0)))
  })
  Object.values(state.reviews || {}).forEach((r) => {
    if (!r) return
    const e = { ...FRESH, ...r }
    if (partStatus(problemAt(r), e) !== 'open') add(getDay(r.index).area, answerScore(e))
  })
  Object.values(state.minis || {}).forEach((mini) =>
    mini.refs.forEach((ref, i) => {
      if (mini.work?.[i]?.grades?.length) add(getDay(ref.index).area, bestScore(mini.work[i]) / MAX_POINTS)
    }),
  )
  return Object.fromEntries(Object.entries(acc).map(([a, v]) => [a, { pct: v.reduce((x, y) => x + y, 0) / v.length, n: v.length }]))
}

function pickMini(state) {
  const used = new Set(Object.values(state.minis || {}).flatMap((m) => m.refs.map(refKey)))
  return AREA_ORDER.map((a) => {
    const days = PLAN.filter((p) => p.kind === 'learn' && p.area === a && state.results[p.index] && getDay(p.index).content?.challenge?.keySteps && !used.has(`${p.index}:c`))
    if (!days.length) return null
    const open = days.filter((p) => state.results[p.index].status !== 'mastered')
    const pool = open.length ? open : days
    return { index: pool[Math.floor(Math.random() * pool.length)].index, k: 'c' }
  }).filter(Boolean)
}

const REASONS = [
  ['idea', 'Didn’t find the idea', 'Before computing, spend 5 minutes on small cases and a big, exact sketch.'],
  ['fact', 'Didn’t know a fact', 'Put the fact on your formula sheet and redo that day’s lesson example.'],
  ['calc', 'Calculation slip', 'Check each line before moving on, and put your answer back into the question.'],
  ['case', 'Missed a case', 'Before you finish, ask: did I cover every case (zero, negative, equal, small n)?'],
  ['gap', 'Gap in my proof', 'Every claim needs a reason. After each line, ask yourself “why?”.'],
  ['read', 'Misread the question', 'Underline what is asked and read the question again before you answer.'],
]
const reasonLabel = (id) => REASONS.find((r) => r[0] === id)?.[1] || id

function MistakePicker({ value, onPick }) {
  return (
    <div className="mt-4">
      <p className="footnote mb-2 font-semibold uppercase">What went wrong?</p>
      <div className="group" style={{ background: 'var(--fill)', boxShadow: 'none' }}>
        {REASONS.map(([id, label]) => (
          <button key={id} onClick={() => onPick(id)} className="row callout">
            <span className="flex-1">{label}</span>
            {value === id && <CheckIcon className="h-4 w-4 text-[var(--accent)]" />}
          </button>
        ))}
      </div>
      {value && <p className="footnote mt-2">Saved to your mistake notebook in Progress.</p>}
    </div>
  )
}

function StatusDot({ status }) {
  if (status === 'ok')
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: 'var(--green)' }}>
        <CheckIcon className="h-3.5 w-3.5 text-white" />
      </span>
    )
  if (status === 'failed')
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ background: 'var(--red)' }}>
        ✕
      </span>
    )
  return null
}

function PartRow({ label, sub, status, score, color, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className="row disabled:opacity-50">
      <span className="flex-1">
        <span className="body block" style={{ color }}>
          {label}
        </span>
        <span className="footnote block">{sub}</span>
      </span>
      {status === 'ok' || status === 'failed' ? (
        <StatusDot status={status} />
      ) : score >= 0 ? (
        <span className="subhead secondary tabular-nums">{score}/8</span>
      ) : null}
      <ChevronIcon className="h-4 w-4 text-[var(--tertiary)]" />
    </button>
  )
}

function DayHeader({ d, result, backLabel, onBack, children }) {
  return (
    <>
      <NavBar title={dayTitle(d)} left={<BackButton onClick={onBack} label={backLabel} />} />
      <Page>
        <div className="flex items-center gap-2">
          <span className="rounded-full px-2.5 py-0.5 text-[13px] font-semibold text-white" style={{ background: areaColor(d) }}>
            {dayLabel(d)}
          </span>
          <span className="footnote">
            Day {d.day} · {d.phase.name}
          </span>
        </div>
        <h1 className="large-title mt-1">{dayTitle(d)}</h1>
        {daySub(d) && <p className="subhead secondary mt-1">{daySub(d)}</p>}
        {result && (
          <p className="headline mt-2" style={{ color: STATUS[result.status].color }}>
            {STATUS[result.status].label}
            {result.score ? ` · ${result.score} points` : ''}
          </p>
        )}
        {children}
      </Page>
    </>
  )
}

function DayScreen({ d, state, getWork, isCurrent, backLabel, onBack, onPart, onOpenDay, onStartPaper, onMarkDone, onCoach }) {
  const result = state.results[d.index]
  const [showLesson, setShowLesson] = useState(() => !Object.keys(state.work).some((key) => key.startsWith(`${d.index}:p`)))
  const { content } = d
  const header = { d, result, backLabel, onBack }

  if (d.kind === 'paper')
    return (
      <DayHeader {...header}>
        <PaperBody d={d} state={state} getWork={getWork} isCurrent={isCurrent} onPart={onPart} onStart={onStartPaper} />
      </DayHeader>
    )
  if (d.kind === 'task' || !content)
    return (
      <DayHeader {...header}>
        <TaskBody d={d} state={state} result={result} isCurrent={isCurrent} onMarkDone={onMarkDone} onCoach={onCoach} onOpenDay={onOpenDay} />
      </DayHeader>
    )

  return (
    <DayHeader {...header}>
      {content.lesson &&
        (showLesson ? (
          <Lesson lesson={content.lesson} />
        ) : (
          <button onClick={() => setShowLesson(true)} className="link mt-3 text-[15px]">
            Show the lesson
          </button>
        ))}

      <SectionHeader>{result ? 'Problems' : 'Solve all 3 to pass'}</SectionHeader>
      <div className="group">
        {content.problems.map((_, i) => {
          const entry = getWork(d.index, `p${i}`)
          const p = currentProblem(d.index, `p${i}`, entry)
          const status = partStatus(p, entry)
          const sub = status === 'failed' ? 'Out of tries · open it for a new problem' : entry.swaps?.length ? `New problem · ${p.type === 'answer' ? `${TRIES} tries` : `${PROOF_PASS}/8 to pass`}` : p.type === 'answer' ? `Find the answer · ${TRIES} tries` : `Proof · ${PROOF_PASS}/8 to pass`
          return <PartRow key={i} label={`Problem ${i + 1}`} sub={sub} status={status} score={p.type === 'proof' ? bestScore(entry) : -1} onClick={() => onPart(d.index, `p${i}`)} />
        })}
      </div>

      {content.challenge && (
        <>
          <SectionHeader>Challenge</SectionHeader>
          <div className="group">
            <PartRow
              label={content.challenge.source}
              sub={result ? `A harder proof · ${CHALLENGE_MASTER}/8 masters the day` : 'Unlocks when you pass'}
              color="var(--purple)"
              status={result?.status === 'mastered' ? 'ok' : 'open'}
              score={bestScore(getWork(d.index, 'c'))}
              disabled={!result}
              onClick={() => onPart(d.index, 'c')}
            />
          </div>
        </>
      )}
    </DayHeader>
  )
}

// What to do on days without problems in the app
function taskSteps(d) {
  const t = d.items.join(' ').toLowerCase()
  if (d.kind === 'learn')
    return [
      `Learn: ${d.items.join(', ')}. Use your book, the ÖMO course notes or ask the coach to explain it with examples.`,
      'Ask the coach for 3 practice problems at regional level and solve them on paper.',
      'Photograph your solutions and send them to the coach for feedback.',
    ]
  if (d.redo) return ['Pick the past paper with your lowest score (see Progress).', 'Sit it again, 4 hours, without looking at your old solutions.', 'Compare: which mistakes are gone, which are still there? Add them to your Fehlerheft.']
  if (t.includes('pause')) return ['No maths today. Rest is part of the plan.', 'Pack compass, ruler, set square (Geodreieck), pens and a watch.', 'Go to bed early. You are ready.']
  if (t.includes('nachbesprechung') || t.includes('fehleranalyse'))
    return ['Read the official solutions of the last paper problem by problem.', 'For every lost point, write one line in your Fehlerheft (mistake book): what went wrong and what to do next time.', 'Rewrite your weakest solution cleanly, as you would hand it in.']
  if (t.includes('formelblatt')) return ['Write a one-page sheet of the key facts and tricks for this area.', 'For each item, add one tiny example.', 'Read it again the evening before the competition.']
  if (t.includes('fehlerheft')) return ['Go through your whole Fehlerheft (mistake book).', 'Group the mistakes: careless, missing case, unproven claim, wrong idea.', 'Write your 5 personal rules for the competition.']
  if (t.includes('aufwärm')) return ['Solve 4 easy problems from early in the plan, quickly and cleanly.', 'Plan your 4 hours: read all problems first, start with the one you like most.', 'Decide when you will switch problems if you are stuck.']
  if (t.includes('schwächst')) return ['Look at your Fehlerheft and Progress: which area loses the most points?', 'Redo the proofs from earlier days in that area (below).', 'Ask the coach for 2 new problems in that area.']
  return ['Redo the proofs from earlier days on these topics (below), without looking at your old work.', 'If one is hard again, ask the coach for a hint instead of reading the solution.', 'Note anything you had forgotten in your Fehlerheft.']
}

function TaskBody({ d, state, result, isCurrent, onMarkDone, onCoach, onOpenDay }) {
  const steps = taskSteps(d)
  const reviewArea = d.kind === 'task' && d.area !== 'X' ? d.area : d.items[0].includes('Kombinatorik') ? 'K' : d.items[0].includes('Zahlentheorie') ? 'N' : d.items[0].includes('Geometrie') ? 'G' : null
  const earlier = reviewArea ? PLAN.filter((p) => p.index < d.index && p.kind === 'learn' && p.area === reviewArea && getDay(p.index).content).slice(-6) : []
  const coachTopic = {
    q: `Today's topic in the 150-day plan for the ÖMO Regionalwettbewerb für Fortgeschrittene: ${d.items.join(', ')} (${dayLabel(d)}). The student wants to learn and practise it. Explain ideas with short examples, give practice problems at regional level when asked, and check the student's work.`,
  }

  return (
    <>
      {d.kind === 'learn' && (
        <div className="card mt-5 p-4">
          <p className="subhead secondary">The lesson for this day isn’t in the app yet. Learn it with the coach or your book, then tick it off.</p>
        </div>
      )}
      <SectionHeader>Today</SectionHeader>
      <div className="group" style={{ '--inset': '52px' }}>
        {steps.map((s, i) => (
          <div key={i} className="row items-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold" style={{ background: 'var(--tint)', color: 'var(--link)' }}>
              {i + 1}
            </span>
            <span className="callout">{s}</span>
          </div>
        ))}
      </div>

      {earlier.length > 0 && (
        <>
          <SectionHeader>Redo these days</SectionHeader>
          <div className="group" style={{ '--inset': '60px' }}>
            {earlier.map((p) => (
              <button key={p.index} onClick={() => onOpenDay(p.index)} className="row">
                <AreaBadge d={p} small />
                <span className="min-w-0 flex-1">
                  <span className="body block truncate">{dayTitle(p)}</span>
                  <span className="footnote block">Day {p.day}</span>
                </span>
                {state.results[p.index] && <Done status={state.results[p.index].status} small />}
                <ChevronIcon className="h-4 w-4 text-[var(--tertiary)]" />
              </button>
            ))}
          </div>
        </>
      )}

      <div className="mt-6 grid gap-3">
        <button onClick={() => onCoach(coachTopic)} className="btn btn-tinted">
          <SparkIcon className="h-5 w-5" /> {d.kind === 'learn' ? 'Learn It with the Coach' : 'Ask the Coach'}
        </button>
        {!result && (
          <button onClick={onMarkDone} disabled={!isCurrent} className="btn btn-filled">
            Mark Day {d.day} as Done
          </button>
        )}
      </div>
    </>
  )
}

function PaperBody({ d, state, getWork, isCurrent, onPart, onStart }) {
  const timer = getWork(d.index, 'paper')
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const result = state.results[d.index]
  const { minutes, name } = PAPERS[d.paper[0]]
  const links = paperLinks(d.paper)
  const left = timer.startedAt ? timer.startedAt + minutes * 6e4 - now : null
  const scores = [0, 1, 2, 3].map((i) => bestScore(getWork(d.index, `p${i}`)))
  const started = !!timer.startedAt || !!result

  return (
    <>
      <div className="group mt-5">
        <a href={links.problems} target="_blank" rel="noreferrer" className="row">
          <span className="flex-1">
            <span className="body block" style={{ color: 'var(--link)' }}>
              Open the paper (PDF)
            </span>
            <span className="footnote block">
              {name} {d.paper[1]} · official ÖMO archive
            </span>
          </span>
          <ChevronIcon className="h-4 w-4 text-[var(--tertiary)]" />
        </a>
        {(result || (left != null && left <= 0)) && (
          <a href={links.solutions} target="_blank" rel="noreferrer" className="row">
            <span className="flex-1">
              <span className="body block" style={{ color: 'var(--link)' }}>
                Official solutions (PDF)
              </span>
              <span className="footnote block">Read them after you hand in</span>
            </span>
            <ChevronIcon className="h-4 w-4 text-[var(--tertiary)]" />
          </a>
        )}
      </div>

      {!started ? (
        <>
          <div className="card mt-4 p-5 text-center">
            <p className="title1 tabular-nums">{formatTime(minutes * 6e4)}</p>
            <p className="subhead secondary mt-1">4 problems · {MAX_POINTS} points each</p>
            <p className="footnote mt-3">Print the paper or open it on another screen. Paper, pen, compass and ruler only. When the time is up, photograph each problem together with your solution and hand it in.</p>
          </div>
          <button onClick={onStart} disabled={!isCurrent} className="btn btn-filled mt-5 w-full">
            Start the Clock
          </button>
        </>
      ) : (
        <>
          {!result && (
            <div className="card mt-4 flex items-center justify-between p-4">
              <span className="body">{left > 0 ? 'Time left' : 'Time’s up — hand in'}</span>
              <span className="title2 tabular-nums" style={{ color: left > 0 ? 'var(--text)' : 'var(--red)' }}>
                {formatTime(left > 0 ? left : 0)}
              </span>
            </div>
          )}
          <SectionHeader>Hand in</SectionHeader>
          <div className="group">
            {scores.map((sc, i) => (
              <PartRow key={i} label={`Problem ${i + 1}`} sub={sc >= 0 ? 'Marked' : 'Not handed in yet'} status={null} score={sc} onClick={() => onPart(d.index, `p${i}`)} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

/* ---------- A problem ---------- */

function GradeCard({ grade }) {
  const pct = grade.score / MAX_POINTS
  const color = grade.score >= PROOF_PASS ? 'var(--green)' : pct >= 0.25 ? 'var(--orange)' : 'var(--red)'
  return (
    <div className="card rise p-4">
      <div className="flex items-center gap-4">
        <Ring value={pct} size={60} stroke={7} color={color}>
          <span className="headline tabular-nums">{grade.score}</span>
        </Ring>
        <div className="flex-1">
          <p className="headline">
            {grade.score} of {MAX_POINTS} points
          </p>
          <p className="footnote">
            {grade.source === 'self' ? 'Checked by you' : 'Marked by the AI coach'}
            {grade.verdict ? ` · ${grade.verdict}` : ''}
          </p>
        </div>
      </div>
      {grade.summary && <p className="callout mt-3">{grade.summary}</p>}
      {grade.good?.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {grade.good.map((g, i) => (
            <li key={i} className="callout flex gap-2">
              <span style={{ color: 'var(--green)' }}>✓</span>
              <span>{g}</span>
            </li>
          ))}
        </ul>
      )}
      {grade.issues?.length > 0 && (
        <div className="mt-3 space-y-3 rounded-xl p-3" style={{ background: 'var(--fill)' }}>
          {grade.issues.map((g, i) => (
            <div key={i}>
              {g.where && <p className="subhead font-semibold">{g.where}</p>}
              <p className="callout">{g.problem}</p>
              {g.hint && <p className="footnote mt-0.5">Hint: {g.hint}</p>}
            </div>
          ))}
        </div>
      )}
      {grade.next_step && <p className="footnote mt-3">Next: {grade.next_step}</p>}
    </div>
  )
}

function PhotoStrip({ photos, setPhotos, disabled, onError }) {
  const input = useRef(null)
  const add = async (files) => {
    try {
      const read = await Promise.all([...files].map((f) => readPhoto(f)))
      setPhotos((p) => [...p, ...read].slice(0, 6))
    } catch (e) {
      onError?.(e.message)
    }
  }
  return (
    <div className="flex flex-wrap gap-2">
      {photos.map((p, i) => (
        <span key={i} className="relative">
          <img src={p.dataUrl} alt={`Page ${i + 1}`} className="h-24 w-[72px] rounded-xl object-cover" />
          {!disabled && (
            <button
              onClick={() => setPhotos((list) => list.filter((_, k) => k !== i))}
              className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/75 text-[11px] text-white"
              aria-label="Remove photo"
            >
              ✕
            </button>
          )}
        </span>
      ))}
      {!disabled && photos.length < 6 && (
        <button onClick={() => input.current.click()} className="press flex h-24 w-[72px] flex-col items-center justify-center gap-1 rounded-xl" style={{ background: 'var(--fill)', color: 'var(--link)' }}>
          <CameraIcon className="h-6 w-6" />
          <span className="caption" style={{ color: 'var(--link)' }}>
            {photos.length ? 'Add page' : 'Photo'}
          </span>
        </button>
      )}
      <input ref={input} type="file" accept="image/*" multiple className="hidden" onChange={(e) => add(e.target.files).then(() => (e.target.value = ''))} />
    </div>
  )
}

function SelfCheck({ problem, onScore, onCancel }) {
  const [ticked, setTicked] = useState(() => problem.keySteps.map(() => false))
  const count = ticked.filter(Boolean).length
  return (
    <div className="fade-in">
      <SectionHeader>Tick every step your proof really has</SectionHeader>
      <div className="group" style={{ '--inset': '52px' }}>
        {problem.keySteps.map((s, i) => (
          <button key={i} onClick={() => setTicked((t) => t.map((v, j) => (j === i ? !v : v)))} className="row items-start">
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors"
              style={{ background: ticked[i] ? 'var(--accent)' : 'transparent', boxShadow: ticked[i] ? 'none' : 'inset 0 0 0 1.5px var(--tertiary)' }}
            >
              {ticked[i] && <CheckIcon className="h-3.5 w-3.5 text-white" />}
            </span>
            <span className="callout">{s}</span>
          </button>
        ))}
      </div>
      <p className="footnote mt-2 px-4">Be honest: a step only counts if you actually proved it.</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button onClick={onCancel} className="btn btn-gray">
          Cancel
        </button>
        <button
          onClick={() => onScore({ source: 'self', score: Math.round((MAX_POINTS * count) / ticked.length), summary: `${count} of ${ticked.length} key steps.` })}
          className="btn btn-filled"
        >
          Save {Math.round((MAX_POINTS * count) / ticked.length)}/8
        </button>
      </div>
    </div>
  )
}

function PointsSelf({ solutionsUrl, onScore, onCancel }) {
  const [points, setPoints] = useState(0)
  return (
    <div className="card fade-in p-4">
      <p className="headline">Mark it yourself</p>
      <p className="footnote mt-0.5">
        Read the{' '}
        <a href={solutionsUrl} target="_blank" rel="noreferrer" className="text-[var(--link)]">
          official solution
        </a>{' '}
        and be strict: unproven steps cost points.
      </p>
      <div className="mt-4 flex items-center justify-center gap-5">
        <button onClick={() => setPoints((p) => Math.max(0, p - 1))} className="btn btn-gray h-11 w-11 p-0 text-[22px]" aria-label="Fewer points">
          −
        </button>
        <span className="title1 w-16 text-center tabular-nums">{points}/8</span>
        <button onClick={() => setPoints((p) => Math.min(MAX_POINTS, p + 1))} className="btn btn-gray h-11 w-11 p-0 text-[22px]" aria-label="More points">
          +
        </button>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button onClick={onCancel} className="btn btn-gray">
          Cancel
        </button>
        <button onClick={() => onScore({ source: 'self', score: points, summary: 'Self-marked with the official solution.' })} className="btn btn-filled">
          Save {points}/8
        </button>
      </div>
    </div>
  )
}

// The first sentence of a worked solution, used as the last hint for problems without a written hint ladder
const firstStep = (solution) => {
  const parts = (solution || '').split(/(?<=\.)\s+|\n+/).filter(Boolean)
  if (parts.length < 2) return null
  return parts[0].endsWith(':') ? `${parts[0]} ${parts[1]}` : parts[0]
}

// variant: 'day' (a problem of a day), 'review' (warm-up or redo from the mistake notebook), 'mini' (a mini-mock problem)
function ProblemScreen({ d, part, problem, entry, update, isCurrent, hasAI, onBack, onCoach, onNewProblem, onMistake, variant = 'day', title, eyebrow, backLabel, failNote }) {
  const isMock = d.kind === 'paper' || variant === 'mini'
  const isChallenge = part === 'c' && variant === 'day'
  const kind = problem.type === 'answer' ? 'answer' : 'proof'
  const passMark = isChallenge ? CHALLENGE_MASTER : PROOF_PASS
  const maxChecks = isMock ? 1 : isChallenge ? Infinity : TRIES
  const graded = entry.grades.length
  const best = bestScore(entry)
  const done = kind === 'answer' ? entry.solved || entry.tries >= TRIES : best >= passMark || graded >= maxChecks
  const failed = done && !isMock && !isChallenge && (kind === 'answer' ? !entry.solved : best < passMark)
  const weakMock = variant === 'mini' && graded > 0 && best < PROOF_PASS
  const hints = problem.hints
    ? problem.hints.map((h, i) => [['Nudge', 'Key idea', 'First step'][i] || 'Hint', h])
    : [problem.hint && ['Hint', problem.hint], (problem.keySteps?.[0] || firstStep(problem.solution)) && ['First step', problem.keySteps?.[0] || firstStep(problem.solution)]].filter(Boolean)
  const pickMistake = (reason) => {
    update((w) => ({ ...w, mistake: reason }))
    onMistake?.(reason)
  }
  const locked = !isCurrent && !d.result

  const [input, setInput] = useState('')
  const [wrong, setWrong] = useState(0)
  const [hintLevel, setHintLevel] = useState(0)
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

  const latest = entry.grades[entry.grades.length - 1]
  const label = title || (isChallenge ? 'Challenge' : `Problem ${Number(part.slice(1)) + 1}`)
  const coachAllowed = !isMock || d.result

  return (
    <>
      <NavBar
        title={label}
        alwaysTitle
        left={<BackButton onClick={onBack} label={backLabel || (isMock ? 'Paper' : 'Day')} />}
        right={
          coachAllowed && (
            <button onClick={() => onCoach(problem, latest)} className="link flex items-center gap-1 active:opacity-50">
              <SparkIcon className="h-[18px] w-[18px]" /> Coach
            </button>
          )
        }
      />
      <Page className="pt-2">
        <p className="footnote font-semibold" style={{ color: isChallenge ? 'var(--purple)' : areaColor(d) }}>
          {eyebrow || (isChallenge ? problem.source : isMock ? `${PAPERS[d.paper[0]].name} ${d.paper[1]}` : kind === 'answer' ? 'Find the answer' : 'Prove it')}
        </p>
        {entry.swaps?.length > 0 && (
          <p className="footnote mt-1">New problem, from day {entry.swaps[entry.swaps.length - 1].index + 1}</p>
        )}
        <div className="card problem mt-2 p-5">{problem.q}</div>

        {hints.length > 0 && !done && !isMock && (
          <div className="mt-3 space-y-2">
            {hints.slice(0, hintLevel).map(([name, h]) => (
              <div key={name} className="fade-in rounded-xl px-3 py-2.5" style={{ background: 'var(--fill)' }}>
                <p className="caption font-semibold uppercase">{name}</p>
                <p className="subhead mt-0.5">{h}</p>
              </div>
            ))}
            {hintLevel < hints.length && (
              <button onClick={() => setHintLevel((l) => l + 1)} className="link px-1 text-[15px] active:opacity-50">
                {hintLevel === 0 ? 'Show a hint' : `Show the ${hints[hintLevel][0].toLowerCase()}`}
              </button>
            )}
            {hintLevel > 0 && <p className="footnote px-1">Use the smallest hint you need, then try again on your own.</p>}
          </div>
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
              inputMode="text"
              placeholder="Your answer"
              className={`field h-14 w-full px-4 text-center text-[22px] font-medium outline-none placeholder:text-[17px] placeholder:font-normal placeholder:text-[var(--tertiary)] ${wrong && !entry.solved ? 'shake' : ''}`}
              style={{ color: 'var(--text)', borderColor: entry.solved ? 'var(--green)' : entry.tries >= TRIES ? 'var(--red)' : 'transparent' }}
            />
            <p className="footnote mt-2 text-center">
              {entry.solved ? '' : entry.tries >= TRIES ? 'No tries left' : entry.tries ? `Not quite — ${TRIES - entry.tries} ${TRIES - entry.tries === 1 ? 'try' : 'tries'} left` : `${TRIES} tries`}
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
            {latest && <GradeCard grade={latest} />}
            {graded > 1 && (
              <p className="footnote mt-2 px-1">
                Earlier: {entry.grades.slice(0, -1).map((g) => `${g.score}/8`).join(' · ')}
              </p>
            )}
            {best >= passMark && (
              <p className="pop headline mt-4 text-center" style={{ color: isChallenge ? 'var(--purple)' : 'var(--green)' }}>
                {isChallenge ? 'Mastered!' : 'Proof accepted!'}
              </p>
            )}

            {!done && !locked && (
              <div className="mt-4">
                {selfCheck && !problem.keySteps ? (
                  <PointsSelf
                    solutionsUrl={paperLinks(d.paper).solutions}
                    onCancel={() => setSelfCheck(false)}
                    onScore={(g) => {
                      update((w) => ({ ...w, grades: [...w.grades, g] }))
                      setSelfCheck(false)
                    }}
                  />
                ) : selfCheck ? (
                  <SelfCheck
                    problem={problem}
                    onCancel={() => setSelfCheck(false)}
                    onScore={(g) => {
                      update((w) => ({ ...w, grades: [...w.grades, g] }))
                      setSelfCheck(false)
                    }}
                  />
                ) : (
                  <>
                    <div className="card p-4">
                      <p className="headline">{isMock ? 'Hand in your solution' : latest ? 'Improve and check again' : 'Your proof'}</p>
                      <p className="footnote mb-3 mt-0.5">{isMock ? 'Photograph the problem together with your solution, so the coach can read both.' : 'Write it on paper, then photograph every page. Or type it.'}</p>
                      <PhotoStrip photos={photos} setPhotos={setPhotos} disabled={busy} onError={setError} />
                      <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        disabled={busy}
                        rows={3}
                        placeholder="…or type your proof here"
                        className="callout mt-3 w-full resize-y rounded-xl p-3 outline-none placeholder:text-[var(--tertiary)]"
                        style={{ background: 'var(--fill)', color: 'var(--text)' }}
                      />
                    </div>
                    {error && (
                      <p className="footnote mt-2 px-1" style={{ color: 'var(--red)' }}>
                        {error}
                      </p>
                    )}
                    {hasAI ? (
                      <button onClick={check} disabled={busy || (!photos.length && !text.trim())} className={`btn mt-4 w-full ${isChallenge ? 'btn-purple' : 'btn-filled'}`}>
                        {busy ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Reading your proof…
                          </>
                        ) : isMock ? (
                          'Hand In'
                        ) : (
                          'Check My Proof'
                        )}
                      </button>
                    ) : (
                      <p className="footnote mt-3 px-1">Turn on the AI coach in Settings to get your photos marked.</p>
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

        {failed && !d.result && (
          <div className="card fade-in mt-6 p-4">
            <p className="headline">Out of tries on this one.</p>
            <p className="subhead secondary mt-1">{failNote || 'Read the solution below, then try a new problem of the same kind. You can still pass today.'}</p>
            {onMistake && <MistakePicker value={entry.mistake} onPick={pickMistake} />}
            {onNewProblem && (
              <button onClick={onNewProblem} className="btn btn-filled mt-4 w-full">
                Try a New Problem
              </button>
            )}
          </div>
        )}
        {weakMock && d.result && onMistake && (
          <div className="card fade-in mt-6 p-4">
            <MistakePicker value={entry.mistake} onPick={pickMistake} />
          </div>
        )}
        {d.kind === 'paper' && d.result && (
          <a href={paperLinks(d.paper).solutions} target="_blank" rel="noreferrer" className="link mt-6 block px-1 text-[15px]">
            Official solutions (PDF)
          </a>
        )}
        {coachAllowed && (!isMock || variant === 'mini') && (
          <div className="mt-6">
            {showSolution || (done && kind === 'answer') || failed ? (
              <div className="card fade-in p-4">
                <p className="footnote mb-1 font-semibold uppercase">Solution</p>
                <p className="problem">{problem.solution}</p>
              </div>
            ) : (
              <button onClick={() => setShowSolution(true)} className="link px-1 text-[15px] active:opacity-50">
                {done ? 'See the official solution' : 'I give up — show the solution'}
              </button>
            )}
          </div>
        )}
      </Page>
    </>
  )
}

/* ---------- Mini-mock ---------- */

function MiniScreen({ n, mini, onStart, onPart, onBack }) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const refs = mini?.refs || []
  const scores = refs.map((_, i) => bestScore(mini?.work?.[i]))
  const finished = refs.length > 0 && scores.every((x) => x >= 0)
  const total = scores.reduce((a, b) => a + Math.max(0, b), 0)
  const max = refs.length * MAX_POINTS
  const left = mini?.startedAt ? mini.startedAt + MINI_MINUTES * 6e4 - now : null

  return (
    <>
      <NavBar title={`Mini-mock ${n}`} left={<BackButton onClick={onBack} label="Back" />} />
      <Page>
        <p className="footnote font-semibold" style={{ color: 'var(--indigo)' }}>
          Optional · after {n * MINI_EVERY} days
        </p>
        <h1 className="large-title mt-1">Mini-mock {n}</h1>
        <p className="subhead secondary mt-1">One problem from each area you’ve done, in {MINI_MINUTES} minutes. Like the real competition, only shorter.</p>
        {!mini ? (
          <>
            <div className="card mt-5 p-5 text-center">
              <p className="title1 tabular-nums">{formatTime(MINI_MINUTES * 6e4)}</p>
              <p className="subhead secondary mt-1">One problem per area · {MAX_POINTS} points each</p>
              <p className="footnote mt-3">Paper, pen, compass and ruler. No hints and no coach until you hand in, and each problem is marked once. Read all of them first and start with the one you like most.</p>
            </div>
            <button onClick={onStart} className="btn btn-filled mt-5 w-full">
              Start the Clock
            </button>
          </>
        ) : (
          <>
            {finished ? (
              <div className="card mt-5 p-5 text-center">
                <p className="title1 tabular-nums">
                  {total}/{max}
                </p>
                <p className="subhead secondary mt-1">
                  {total >= PAPER_MASTER * max ? 'Excellent work.' : total >= PAPER_PASS * max ? 'That would be a good score at the real thing.' : 'Read the solutions and note what went wrong.'}
                </p>
              </div>
            ) : (
              <div className="card mt-5 flex items-center justify-between p-4">
                <span className="body">{left > 0 ? 'Time left' : 'Time’s up — hand in'}</span>
                <span className="title2 tabular-nums" style={{ color: left > 0 ? 'var(--text)' : 'var(--red)' }}>
                  {formatTime(left > 0 ? left : 0)}
                </span>
              </div>
            )}
            <SectionHeader>Problems</SectionHeader>
            <div className="group">
              {refs.map((ref, i) => {
                const d = getDay(ref.index)
                return (
                  <PartRow
                    key={i}
                    label={`Problem ${i + 1} · ${AREAS[d.area].name}`}
                    sub={finished ? `From day ${d.day}: ${dayTitle(d)}` : scores[i] >= 0 ? 'Handed in' : 'Not handed in yet'}
                    status={null}
                    score={scores[i]}
                    onClick={() => onPart(i)}
                  />
                )
              })}
            </div>
          </>
        )}
      </Page>
    </>
  )
}

// Redo a problem from the mistake notebook. Nothing is saved except that the mistake is fixed.
function RedoScreen({ refObj, hasAI, onBack, onCoach, onFixed }) {
  const [entry, setEntry] = useState(FRESH)
  const d = getDay(refObj.index)
  const problem = problemAt(refObj)
  const ok = partStatus(problem, entry) === 'ok'
  useEffect(() => {
    if (ok) onFixed()
  }, [ok])
  return (
    <ProblemScreen
      d={d}
      part={refObj.k === 'c' ? 'c' : `p${refObj.k}`}
      variant="review"
      problem={problem}
      entry={entry}
      update={(f) => setEntry(f)}
      isCurrent
      hasAI={hasAI}
      onBack={onBack}
      onCoach={onCoach}
      title="Redo"
      eyebrow={`From day ${d.day} · ${dayTitle(d)}`}
      backLabel="Progress"
      failNote="Read the solution below and try this one again in a few days."
    />
  )
}

/* ---------- Coach ---------- */

function CoachSheet({ problem, grade, topic = false, hasAI, onClose, onSettings }) {
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

  const STARTERS = topic
    ? ['Explain the main idea with an example.', 'Give me a practice problem.', 'Which mistakes do people make here?']
    : ['I don’t know how to start.', 'Give me a small hint.', 'Is my idea going the right way?']

  return (
    <div className="fixed inset-0 z-40 flex flex-col">
      <div className="fade-in absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="sheet-up relative mt-10 flex flex-1 flex-col overflow-hidden rounded-t-[14px]" style={{ background: 'var(--bg)' }}>
        <div className="mx-auto mt-1.5 h-[5px] w-9 rounded-full" style={{ background: 'var(--tertiary)' }} />
        <div className="mx-auto flex h-11 w-full max-w-md items-center justify-between px-4">
          <span className="min-w-[60px]" />
          <span className="headline flex items-center gap-1.5">
            <SparkIcon className="h-[18px] w-[18px] text-[var(--indigo)]" /> Coach
          </span>
          <button onClick={onClose} className="link min-w-[60px] text-right font-semibold active:opacity-50">
            Done
          </button>
        </div>
        <div className="mx-auto w-full min-w-0 max-w-md flex-1 overflow-y-auto overflow-x-hidden px-4 pb-4">
          <details className="card p-4">
            <summary className="subhead secondary cursor-pointer">{topic ? 'Today’s topic' : 'The problem'}</summary>
            <p className="problem mt-2">{problem.q}</p>
          </details>
          {!hasAI ? (
            <div className="card mt-4 p-4">
              <p className="body">The coach needs an API key. Add one in Settings to chat about problems and get your proofs marked.</p>
              <button onClick={onSettings} className="btn btn-filled mt-4 w-full">
                Open Settings
              </button>
            </div>
          ) : (
            <>
              {messages.length === 0 && (
                <div className="mt-8 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: 'linear-gradient(135deg, var(--indigo), var(--blue))' }}>
                    <SparkIcon className="h-7 w-7" />
                  </span>
                  <p className="title3 mt-3">{topic ? 'Let’s learn it together.' : 'Stuck? Ask me.'}</p>
                  <p className="subhead secondary mx-auto mt-1 max-w-[280px]">
                    {topic ? 'I explain, give you practice problems and check your solutions.' : 'I give hints, not answers.'} Send a photo of your work too. Deutsch geht auch!
                  </p>
                  <div className="mt-5 flex flex-col gap-2">
                    {STARTERS.map((s) => (
                      <button key={s} onClick={() => setText(s)} className="btn btn-tinted h-auto min-h-[44px] whitespace-normal py-2.5 text-[15px] font-medium leading-5">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-4 space-y-2">
                {messages.map((m, i) => (
                  <div key={i} className={`rise flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className="max-w-[82%] whitespace-pre-line rounded-[20px] px-4 py-2.5 text-[16px] leading-[22px]"
                      style={m.role === 'user' ? { background: 'var(--accent)', color: '#FFFFFF' } : { background: 'var(--card)', color: 'var(--text)' }}
                    >
                      {m.photos?.length > 0 && (
                        <span className="mb-2 flex gap-1">
                          {m.photos.map((p, j) => (
                            <img key={j} src={p.dataUrl} alt="" className="h-20 w-14 rounded-lg object-cover" />
                          ))}
                        </span>
                      )}
                      {m.text}
                    </div>
                  </div>
                ))}
                {busy && (
                  <div className="flex">
                    <span className="flex gap-1 rounded-[20px] px-4 py-3" style={{ background: 'var(--card)' }}>
                      {[0, 1, 2].map((j) => (
                        <span key={j} className="h-2 w-2 animate-bounce rounded-full" style={{ background: 'var(--tertiary)', animationDelay: `${j * 0.15}s` }} />
                      ))}
                    </span>
                  </div>
                )}
                {error && (
                  <p className="footnote px-2" style={{ color: 'var(--red)' }}>
                    {error}
                  </p>
                )}
                <div ref={end} />
              </div>
            </>
          )}
        </div>
        {hasAI && (
          <form onSubmit={send} className="navbar mx-auto w-full max-w-md px-3 pb-3 pt-2" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))', boxShadow: '0 -0.5px 0 var(--separator)' }}>
            {photos.length > 0 && (
              <div className="mb-2">
                <PhotoStrip photos={photos} setPhotos={setPhotos} onError={setError} />
              </div>
            )}
            <div className="flex items-end gap-2">
              <label className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full" style={{ background: 'var(--fill)', color: 'var(--link)' }} aria-label="Add a photo">
                <CameraIcon className="h-5 w-5" />
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
                placeholder="Message"
                className="callout min-h-[40px] flex-1 resize-none rounded-[20px] px-4 py-2 outline-none placeholder:text-[var(--tertiary)]"
                style={{ background: 'var(--card)', color: 'var(--text)', boxShadow: 'inset 0 0 0 0.5px var(--separator)' }}
              />
              <button
                disabled={busy || (!text.trim() && !photos.length)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-30"
                style={{ background: 'var(--accent)' }}
                aria-label="Send"
              >
                <Icon className="h-5 w-5" strokeWidth={2.6} d={<path d="M12 19V5M5.5 11.5L12 5l6.5 6.5" />} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

/* ---------- Celebration ---------- */

const CONFETTI = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#5AC8FA', '#007AFF', '#5856D6', '#AF52DE', '#FF2D55']

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
  const colors = mastered ? ['#AF52DE', '#BF5AF2', '#5856D6', '#FF2D55'] : CONFETTI
  const pieces = useMemo(
    () => Array.from({ length: 50 }, (_, i) => ({ left: `${(i * 53) % 100}%`, delay: `${1 + (i % 10) * 0.07}s`, color: colors[i % colors.length], duration: `${2.2 + (i % 5) * 0.3}s` })),
    [],
  )

  return (
    <div className="fade-in fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6 text-center" style={{ background: 'var(--bg)' }}>
      {pieces.map((p, i) => (
        <span key={i} className="confetti-piece" style={{ left: p.left, background: p.color, animationDelay: p.delay, animationDuration: p.duration }} />
      ))}
      <p className="footnote rise font-semibold uppercase">{score ? `${score} points` : mastered ? 'Challenge solved' : 'All 3 solved'}</p>
      <div className="pop mt-6">
        <Ring value={filled} size={230} stroke={24} color={color}>
          {to != null ? (
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
        {to != null ? ` · ${to}-day streak` : ''}
      </p>
      <button onClick={onDone} className="btn btn-filled mt-10 w-full max-w-xs transition-opacity" style={{ opacity: ready ? 1 : 0, pointerEvents: ready ? 'auto' : 'none' }}>
        Continue
      </button>
    </div>
  )
}

/* ---------- Tab bar ---------- */

const TABS = [
  ['today', 'Today', TodayIcon],
  ['plan', 'Plan', PlanIcon],
  ['progress', 'Progress', ProgressIcon],
  ['settings', 'Settings', SettingsIcon],
]

function TabBar({ tab, onTab }) {
  return (
    <nav className="tabbar">
      <div className="mx-auto flex h-[50px] max-w-md">
        {TABS.map(([id, label, TabIcon]) => (
          <button key={id} onClick={() => onTab(id)} className="flex flex-1 flex-col items-center justify-center gap-0.5 active:opacity-60" style={{ color: tab === id ? 'var(--accent)' : 'var(--secondary)' }}>
            <TabIcon className="h-[24px] w-[24px]" />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

/* ---------- App ---------- */

export default function App() {
  const [state, setState] = useSaved()
  const [tab, setTab] = useState('today')
  const [stack, setStack] = useState([]) // pushed screens on top of the tab: { name: 'day' | 'part', index, part }
  const [direction, setDirection] = useState('push')
  const [coach, setCoach] = useState(null)
  const [celebration, setCelebration] = useState(null)
  const [hasAI, setHasAI] = useState(() => !!loadAI().key)

  const today = dayOf(Date.now())
  const { count, lastDay } = state.streak
  const streak = lastDay != null && lastDay >= today - 1 ? count : 0
  // No calendar: the next unfinished day is always open. One finished day per calendar day keeps the streak.
  const finishedToday = lastDay === today
  const current = Math.min(state.next, TOTAL_DAYS - 1)

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
  const doneCount = Object.keys(state.results).length
  const miniDue = (() => {
    for (let n = 1; n <= Math.min(MINI_COUNT, Math.floor(doneCount / MINI_EVERY)); n++) {
      const m = state.minis?.[n]
      if (!m || !m.refs.length || !m.refs.every((_, i) => m.work?.[i]?.grades?.length)) return n
    }
    return null
  })()

  // Problems you passed before warm-ups existed join the rotation once
  useEffect(() => {
    if (state.srs) return
    const srs = {}
    Object.entries(state.results).forEach(([i, r]) => addDayToSrs(srs, Number(i), state.work, r.day))
    setState((s) => ({ ...s, srs }))
  }, [])

  // Pick today's warm-up: a problem that is due, from the weakest area first
  useEffect(() => {
    if (!state.srs || state.reviews?.[today] !== undefined) return
    const strength = areaStrength(state)
    const due = Object.entries(state.srs)
      .filter(([, v]) => v.due <= today)
      .map(([key, v]) => {
        const [index, k] = key.split(':').map(Number)
        return { index, k, due: v.due, area: getDay(index).area }
      })
      .filter((x) => getDay(x.index).content?.problems[x.k])
      .sort((a, b) => (strength[a.area]?.pct ?? 0.6) - (strength[b.area]?.pct ?? 0.6) || a.due - b.due)
    setState((s) => ({ ...s, reviews: { ...s.reviews, [today]: due[0] ? { index: due[0].index, k: due[0].k, ...FRESH } : null } }))
  }, [state.srs, today])

  const updateReview = (f) =>
    setState((s) => {
      const old = s.reviews?.[today]
      if (!old) return s
      const next = f({ ...FRESH, ...old })
      const p = problemAt(old)
      let srs = s.srs
      if (partStatus(p, { ...FRESH, ...old }) === 'open' && partStatus(p, next) !== 'open') {
        const ok = partStatus(p, next) === 'ok'
        const box = ok ? (s.srs?.[refKey(old)]?.box || 0) + 1 : 0
        srs = { ...s.srs, [refKey(old)]: { box, due: today + (ok ? REVIEW_GAPS[Math.min(box, REVIEW_GAPS.length - 1)] : 1) } }
      }
      return { ...s, srs, reviews: { ...s.reviews, [today]: next } }
    })

  const addMistake = (ref, reason) =>
    setState((s) => ({
      ...s,
      mistakes: [...(s.mistakes || []).filter((m) => !(m.at === today && refKey(m) === refKey(ref))), { index: ref.index, k: ref.k, reason, at: today }],
    }))
  const fixMistake = (ref) => setState((s) => ({ ...s, mistakes: (s.mistakes || []).map((m) => (refKey(m) === refKey(ref) ? { ...m, fixed: true } : m)) }))

  const updateMini = (n, i, f) =>
    setState((s) => {
      const m = s.minis[n]
      return { ...s, minis: { ...s.minis, [n]: { ...m, work: { ...m.work, [i]: f({ ...FRESH, ...m.work?.[i] }) } } } }
    })

  // Finish the day as soon as everything is done
  useEffect(() => {
    const d = currentDay
    if (state.results[current]) return
    let status = 'passed'
    let score
    if (d.kind === 'paper') {
      const scores = [0, 1, 2, 3].map((i) => bestScore(getWork(current, `p${i}`)))
      if (scores.some((x) => x < 0)) return
      const total = scores.reduce((x, y) => x + y, 0)
      const max = 4 * MAX_POINTS
      status = total >= PAPER_MASTER * max ? 'mastered' : total >= PAPER_PASS * max ? 'passed' : 'done'
      score = `${total}/${max}`
    } else if (d.kind === 'learn' && d.content) {
      if (!d.content.problems.every((_, i) => partStatus(currentProblem(current, `p${i}`, getWork(current, `p${i}`)), getWork(current, `p${i}`)) === 'ok')) return
    } else if (!getWork(current, 'done').solved) return

    const nextCount = lastDay === today ? count : lastDay === today - 1 ? count + 1 : 1
    setState((s) => ({
      ...s,
      srs: (() => {
        const srs = { ...(s.srs || {}) }
        addDayToSrs(srs, current, s.work, today)
        return srs
      })(),
      next: current + 1,
      streak: { count: nextCount, lastDay: today },
      best: Math.max(s.best || 0, nextCount),
      results: { ...s.results, [current]: { day: today, status, score } },
    }))
    setCelebration({ status, from: streak, to: nextCount !== streak ? nextCount : null, title: dayTitle(d), score })
  }, [state.work])

  // Mastering a challenge, today or on any earlier learning day
  useEffect(() => {
    Object.entries(state.results).forEach(([index, r]) => {
      if (r.status !== 'passed') return
      const d = getDay(Number(index))
      if (d.kind !== 'learn' || !d.content?.challenge) return
      if (bestScore(getWork(Number(index), 'c')) >= CHALLENGE_MASTER) {
        setState((s) => ({ ...s, results: { ...s.results, [index]: { ...s.results[index], status: 'mastered' } } }))
        setCelebration({ status: 'mastered', title: dayTitle(d) })
      }
    })
  }, [state.work])

  const push = (screen) => {
    setDirection('push')
    setStack((s) => [...s, screen])
    window.scrollTo(0, 0)
  }
  const pop = () => {
    setDirection('pop')
    setStack((s) => s.slice(0, -1))
    window.scrollTo(0, 0)
  }
  const switchTab = (id) => {
    setDirection('fade')
    setTab(id)
    setStack([])
    window.scrollTo(0, 0)
  }
  const openDay = (index) => push({ name: 'day', index })

  const paperProblem = (d, i) => ({
    type: 'proof',
    q: `Problem ${i + 1} of the ÖMO ${PAPERS[d.paper[0]].name} ${d.paper[1]}.\n\nThe statement is on the official paper. Photograph it together with your solution when you hand in.`,
  })

  const top = stack[stack.length - 1]
  let page
  if (top?.name === 'day') {
    const d = { ...getDay(top.index), result: state.results[top.index] }
    page = (
      <DayScreen
        d={d}
        state={state}
        getWork={getWork}
        isCurrent={top.index === current}
        backLabel={stack.length > 1 ? 'Back' : TABS.find((t) => t[0] === tab)[1]}
        onBack={pop}
        onPart={(index, part) => push({ name: 'part', index, part })}
        onOpenDay={openDay}
        onStartPaper={() => updateWork(top.index, 'paper', (w) => ({ ...w, startedAt: Date.now() }))}
        onMarkDone={() => updateWork(top.index, 'done', (w) => ({ ...w, solved: true }))}
        onCoach={(problem) => setCoach({ problem, topic: true })}
      />
    )
  } else if (top?.name === 'part') {
    const d = { ...getDay(top.index), result: state.results[top.index] }
    const entry = getWork(top.index, top.part)
    const problem = d.kind === 'paper' ? paperProblem(d, Number(top.part.slice(1))) : top.part === 'c' ? d.content.challenge : currentProblem(top.index, top.part, entry)
    const ref = top.part === 'c' ? { index: top.index, k: 'c' } : entry.swaps?.[entry.swaps.length - 1] || { index: top.index, k: Number(top.part.slice(1)) }
    page = (
      <ProblemScreen
        key={`${top.index}:${top.part}:${entry.swaps?.length || 0}`}
        onNewProblem={() =>
          updateWork(top.index, top.part, (w) => {
            const next = pickReplacement(top.index, top.part, w)
            // If every problem of this kind has been used, start the same one again with fresh tries
            return { ...w, tries: 0, solved: false, grades: [], mistake: undefined, swaps: next ? [...(w.swaps || []), next] : w.swaps || [] }
          })
        }
        onMistake={d.kind === 'learn' ? (why) => addMistake(ref, why) : undefined}
        d={d}
        part={top.part}
        problem={problem}
        entry={entry}
        update={(f) => updateWork(top.index, top.part, f)}
        isCurrent={top.index === current}
        hasAI={hasAI}
        onBack={pop}
        onCoach={(p, g) => setCoach({ problem: p, grade: g })}
      />
    )
  } else if (top?.name === 'review' && state.reviews?.[today]) {
    const r = state.reviews[today]
    const rd = getDay(r.index)
    page = (
      <ProblemScreen
        d={rd}
        part={`p${r.k}`}
        variant="review"
        problem={problemAt(r)}
        entry={{ ...FRESH, ...r }}
        update={updateReview}
        onMistake={(why) => addMistake(r, why)}
        isCurrent
        hasAI={hasAI}
        onBack={pop}
        onCoach={(p, g) => setCoach({ problem: p, grade: g })}
        title="Warm-up"
        eyebrow={`From day ${rd.day} · ${dayTitle(rd)}`}
        backLabel="Today"
        failNote="Read the solution below. This one comes back in tomorrow’s warm-up."
      />
    )
  } else if (top?.name === 'redo') {
    page = <RedoScreen refObj={top.ref} hasAI={hasAI} onBack={pop} onCoach={(p, g) => setCoach({ problem: p, grade: g })} onFixed={() => fixMistake(top.ref)} />
  } else if (top?.name === 'mini') {
    page = (
      <MiniScreen
        n={top.n}
        mini={state.minis?.[top.n]}
        onBack={pop}
        onStart={() => setState((s) => ({ ...s, minis: { ...s.minis, [top.n]: { refs: pickMini(s), startedAt: Date.now(), work: {} } } }))}
        onPart={(i) => push({ name: 'miniPart', n: top.n, i })}
      />
    )
  } else if (top?.name === 'miniPart') {
    const m = state.minis[top.n]
    const ref = m.refs[top.i]
    const md = getDay(ref.index)
    const finished = m.refs.every((_, i) => m.work?.[i]?.grades?.length)
    page = (
      <ProblemScreen
        d={{ ...md, result: finished ? { status: 'done' } : undefined }}
        part="c"
        variant="mini"
        problem={problemAt(ref)}
        entry={{ ...FRESH, ...m.work?.[top.i] }}
        update={(f) => updateMini(top.n, top.i, f)}
        onMistake={(why) => addMistake(ref, why)}
        isCurrent
        hasAI={hasAI}
        onBack={pop}
        onCoach={(p, g) => setCoach({ problem: p, grade: g })}
        title={`Problem ${top.i + 1}`}
        eyebrow={`Mini-mock ${top.n} · ${AREAS[md.area].name}`}
        backLabel="Mini-mock"
      />
    )
  } else if (tab === 'plan') {
    page = <PlanTab state={state} current={current} onOpenDay={openDay} />
  } else if (tab === 'progress') {
    page = <ProgressTab state={state} today={today} onOpenDay={openDay} onRedo={(ref) => push({ name: 'redo', ref: { index: ref.index, k: ref.k } })} onMini={(n) => push({ name: 'mini', n })} />
  } else if (tab === 'settings') {
    page = <SettingsTab state={state} setState={setState} onAIChange={() => setHasAI(!!loadAI().key)} />
  } else {
    page = (
      <TodayTab
        state={state}
        today={today}
        current={current}
        streak={streak}
        finishedToday={finishedToday}
        hasAI={hasAI}
        miniDue={miniDue}
        onOpenDay={openDay}
        onSettings={() => switchTab('settings')}
        onReview={() => push({ name: 'review' })}
        onMini={(n) => push({ name: 'mini', n })}
      />
    )
  }

  const screenKey = top ? `${top.name}:${top.index ?? top.ref?.index ?? ''}:${top.part ?? top.ref?.k ?? ''}:${top.n ?? ''}:${top.i ?? ''}` : tab
  const animation = direction === 'push' && top ? 'push-in' : direction === 'pop' ? 'pop-in' : 'fade-in'

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div key={screenKey} className={animation}>
        {page}
      </div>
      {!['part', 'review', 'redo', 'miniPart'].includes(top?.name) && <TabBar tab={tab} onTab={switchTab} />}
      {coach && (
        <CoachSheet
          problem={coach.problem}
          grade={coach.grade}
          topic={coach.topic}
          hasAI={hasAI}
          onClose={() => setCoach(null)}
          onSettings={() => {
            setCoach(null)
            switchTab('settings')
          }}
        />
      )}
      {celebration && <Celebration {...celebration} onDone={() => setCelebration(null)} />}
    </div>
  )
}
