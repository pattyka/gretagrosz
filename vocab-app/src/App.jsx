import { useEffect, useMemo, useRef, useState } from 'react'
import { LANGUAGES, LEVELS, levelIndexOf, placementWords, wordsForDay } from './words'
import { COLORS, DAYS_PER_COLOR, stageFor, themeFor } from './theme'
import { checkAnswer } from './check'

const KEY = 'ten-a-day'
const PASS_MARK = 8 // out of 10

const DAY = 864e5
const dayOf = (t) => Math.floor((t - new Date(t).getTimezoneOffset() * 6e4) / DAY) // your local calendar day
const shuffle = (list) => [...list].sort(() => Math.random() - 0.5)

const EMPTY = { from: 'en', lang: null, progress: {}, streak: { count: 0, lastDay: null } }

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

// An Activity-style ring: fills up on the way to the darkest colour (30 days)
function Ring({ value, size = 220, stroke = 22, children }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--track)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - Math.max(0.001, Math.min(1, value)))}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.2,.8,.2,1), stroke 1.5s' }}
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

// The 9 colours in order; the current one is highlighted and the ones you've finished are ticked
function Rainbow({ streak }) {
  const current = streak > 0 ? Math.floor((streak - 1) / DAYS_PER_COLOR) % COLORS.length : -1
  const rounds = streak > 0 ? Math.floor((streak - 1) / (DAYS_PER_COLOR * COLORS.length)) : 0
  return (
    <div className="flex justify-between">
      {COLORS.map((c, i) => {
        const done = i < current || rounds > 0
        const now = i === current
        return (
          <span key={c.id} className="flex flex-col items-center gap-1" title={c.name}>
            <span
              className="flex items-center justify-center rounded-full transition-all"
              style={{ background: c.light, width: now ? 30 : 22, height: now ? 30 : 22, opacity: done || now || current === -1 ? 1 : 0.35, boxShadow: now ? `0 0 0 3px var(--card), 0 0 0 5px ${c.light}` : 'none' }}
            >
              {done && !now && <Check className="h-3 w-3 text-white" />}
            </span>
          </span>
        )
      })}
    </div>
  )
}

/* ---------- Setup: language ---------- */

// A dropdown that looks like the pop-up menus in iPhone Settings
function LanguagePicker({ label, value, onChange, placeholder, options = LANGUAGES.map((l) => ({ value: l.id, label: l.name })) }) {
  return (
    <label className="row cursor-pointer">
      <span className="body flex-1">{label}</span>
      <span className="relative flex items-center gap-1" style={{ color: value ? 'var(--link)' : 'var(--secondary)' }}>
        <select
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="body cursor-pointer appearance-none bg-transparent pr-5 text-right outline-none"
          style={{ color: 'inherit' }}
        >
          {!value && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-0 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 9l4-4 4 4M8 15l4 4 4-4" />
        </svg>
      </span>
    </label>
  )
}

function Setup({ state, onDone, onCancel, onFindLevel }) {
  const [from, setFrom] = useState(state.from || 'en')
  const [lang, setLang] = useState(state.lang)
  const [levelChoice, setLevelChoice] = useState(null) // null = keep the current place
  const editing = !!state.lang
  const currentLevel = levelIndexOf(state.progress[lang] || 0)
  const shownLevel = levelChoice ?? currentLevel

  // The two languages can't be the same: picking the same one swaps them
  const pickFrom = (id) => {
    if (id === lang) setLang(from)
    setFrom(id)
  }
  const pickLang = (id) => {
    if (id === from) setFrom(lang || (id === 'en' ? 'de' : 'en'))
    setLang(id)
    setLevelChoice(null) // each language keeps its own place
  }

  const save = () => {
    const choice = { from, lang }
    // Picking a different level jumps to the first day of that level
    if (levelChoice !== null && levelChoice !== currentLevel) choice.progress = { ...state.progress, [lang]: LEVELS[levelChoice].start }
    onDone(choice)
  }

  return (
    <div className="mx-auto max-w-md px-4 pb-10 pt-2">
      {editing ? <NavBar left={<BackButton onClick={onCancel} />} /> : <div className="h-11" />}
      <h1 className="large-title mt-1">{editing ? 'Settings' : 'Ten a Day'}</h1>
      {!editing && <p className="body secondary mt-1">10 new words every day. Learn them with flashcards, pass a short test, keep your streak.</p>}

      <p className="caption mb-2 mt-8 px-4">Languages</p>
      <div className="group">
        <LanguagePicker label="I speak" value={from} onChange={pickFrom} placeholder="Choose" />
        <LanguagePicker label="I want to learn" value={lang} onChange={pickLang} placeholder="Choose" />
      </div>

      {editing && (
        <>
          <p className="caption mb-2 mt-8 px-4">Level</p>
          <div className="group">
            <LanguagePicker
              label="My level"
              value={String(shownLevel)}
              onChange={(i) => setLevelChoice(Number(i))}
              options={LEVELS.map((level, i) => ({ value: String(i), label: level.name }))}
            />
            <button onClick={() => onFindLevel({ from, lang })} className="row" disabled={!lang || lang === from}>
              <span className="body flex-1 text-left" style={{ color: 'var(--link)' }}>Find your level</span>
              <span className="secondary">
                <Chevron />
              </span>
            </button>
          </div>
          <p className="footnote mt-2 px-4">{LEVELS[shownLevel].desc}</p>
        </>
      )}

      {/* The colour explanation only shows the first time, not in Settings */}
      {!editing && (
        <>
          <p className="caption mb-2 mt-8 px-4">Your colours</p>
          <div className="group p-4">
            <Rainbow streak={0} />
          </div>
          <p className="footnote mt-2 px-4">
            Every colour lasts {DAYS_PER_COLOR} days and gets a little darker each day you keep your streak. Then you move on to the next one: red, orange, yellow, green,
            teal, blue, indigo, purple and pink.
          </p>
        </>
      )}

      <button disabled={!lang || lang === from} onClick={save} className="btn btn-filled mt-8 w-full">
        {editing ? 'Done' : 'Get Started'}
      </button>
    </div>
  )
}

/* ---------- Home ---------- */

function Home({ state, set, dayIndex, streak, passedToday, onCards, onTest, onSettings }) {
  const name = (id) => LANGUAGES.find((l) => l.id === id).name
  const stage = stageFor(streak)

  return (
    <div className="mx-auto max-w-md px-4 pb-10 pt-2">
      <NavBar right={<button onClick={onSettings} className="link">Settings</button>} />
      <p className="caption mt-1">
        {name(state.from || 'en')} → {name(state.lang)}
      </p>
      <h1 className="large-title">Today</h1>

      <section className="mt-6 flex flex-col items-center text-center">
        <Ring value={stage.dayInColor / DAYS_PER_COLOR}>
          <span className="text-[64px] font-bold leading-none tracking-tight">{streak}</span>
          <span className="footnote mt-1">day streak</span>
        </Ring>
        <p className="headline mt-5 max-w-xs">
          {passedToday ? 'Done for today' : streak > 0 ? `Pass today’s test to make it ${streak + 1}` : 'Pass today’s test to start your streak'}
        </p>
        <p className="footnote mt-1 max-w-xs">
          {passedToday ? 'Come back tomorrow to keep your streak going.' : `You need ${PASS_MARK} of 10 correct.`}
        </p>
      </section>

      <p className="caption mb-2 mt-8 px-4">
        {passedToday ? 'Today’s words' : `Day ${dayIndex + 1}`} · {set.theme}
        {set.review ? ' · Review' : ''}
      </p>
      <div className="group">
        <div className="grid grid-cols-2">
          {set.words.map((w, i) => (
            <span key={w.front} className={`body px-4 py-2.5 ${i % 2 === 0 ? '' : ''}`} style={{ borderTop: i > 1 ? '0.5px solid var(--separator)' : 'none' }}>
              {w.front}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <button onClick={onTest} className="btn btn-filled">
          {passedToday ? 'Practise the Test Again' : 'Take Today’s Test'}
        </button>
        <button onClick={onCards} className="btn btn-tinted">
          Learn the Words
        </button>
      </div>

    </div>
  )
}

/* ---------- Flashcards ---------- */

// Swipe deck: pull a card right (green) if you know it, left (red) to see it again later.
// Red cards go to the back of the pile until every card is green.
const GREEN = '#34C759'
const RED = '#FF3B30'
const SWIPE = 100 // px needed to count as a swipe

function Flashcards({ set, fromName, onTest, onBack }) {
  const [queue, setQueue] = useState(() => set.words.map((_, n) => n))
  const [known, setKnown] = useState([])
  const [missed, setMissed] = useState([]) // swiped red at least once
  const [flipped, setFlipped] = useState(false)
  const [dx, setDx] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [fly, setFly] = useState(null) // 'left' | 'right' while the card flies away
  const [round, setRound] = useState(0)
  const start = useRef(null)

  const current = queue[0]
  const word = current != null ? set.words[current] : null
  const done = current == null

  const decide = (dir) => {
    if (fly || done) return
    setFly(dir)
    setTimeout(() => {
      if (dir === 'right') {
        setKnown((k) => [...k, current])
        setQueue((q) => q.slice(1))
      } else {
        setMissed((m) => (m.includes(current) ? m : [...m, current]))
        setQueue((q) => [...q.slice(1), q[0]])
      }
      setFly(null)
      setDx(0)
      setFlipped(false)
      setRound((r) => r + 1)
    }, 260)
  }

  // Previous / Next just move through the pile without marking the card
  const move = (reorder) => {
    setQueue(reorder)
    setFlipped(false)
    setRound((r) => r + 1)
  }
  const next = () => move((q) => [...q.slice(1), q[0]])
  const previous = () => move((q) => [q[q.length - 1], ...q.slice(0, -1)])

  const restart = () => {
    setQueue(set.words.map((_, n) => n))
    setKnown([])
    setMissed([])
    setRound((r) => r + 1)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'BUTTON' && (e.key === ' ' || e.key === 'Enter')) return
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setFlipped((f) => !f)
      }
      if (e.key === 'ArrowLeft') decide('left')
      if (e.key === 'ArrowRight') decide('right')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const onDown = (e) => {
    if (fly) return
    start.current = { x: e.clientX, moved: false }
    setDragging(true)
    try {
      e.currentTarget.setPointerCapture(e.pointerId) // keep getting moves even if the finger leaves the card
    } catch {}
  }
  const onMove = (e) => {
    if (!start.current) return
    const d = e.clientX - start.current.x
    if (Math.abs(d) > 6) start.current.moved = true
    setDx(d)
  }
  const onUp = (e) => {
    if (!start.current) return
    const d = e.clientX - start.current.x // measured here, so a fast flick still counts
    const moved = start.current.moved || Math.abs(d) > 6
    start.current = null
    setDragging(false)
    if (!moved) {
      setDx(0)
      setFlipped((f) => !f)
    } else if (d <= -SWIPE) decide('left')
    else if (d >= SWIPE) decide('right')
    else setDx(0)
  }

  const offset = fly === 'left' ? -window.innerWidth * 1.2 : fly === 'right' ? window.innerWidth * 1.2 : dx
  const pull = Math.min(1, Math.abs(offset) / SWIPE)
  const tint = offset > 0 ? GREEN : RED

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col overflow-x-hidden px-4 pb-8 pt-2">
      <NavBar left={<BackButton onClick={onBack} label="Today" />} title="Flashcards" right={<span className="footnote">{known.length} of {set.words.length}</span>} />

      {done ? (
        <div className="rise mt-16 flex flex-1 flex-col items-center text-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full text-white" style={{ background: GREEN }}>
            <Check className="h-10 w-10" />
          </span>
          <h1 className="title2 mt-5">All 10 are green!</h1>
          <p className="body secondary mt-1 max-w-xs">
            {missed.length === 0 ? 'You knew every word straight away.' : `${missed.length} ${missed.length === 1 ? 'word needed' : 'words needed'} another go. Ready for the test?`}
          </p>
          <div className="mt-auto grid w-full gap-3 pt-8">
            <button onClick={onTest} className="btn btn-filled">
              Take the Test
            </button>
            <button onClick={restart} className="btn btn-tinted">
              Go Through Again
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="relative mt-6 aspect-[4/5] w-full">
            {/* The next card peeks out behind the current one */}
            {queue.length > 1 && <div className="absolute inset-0 scale-[0.95] rounded-[28px] bg-[var(--card)] opacity-60 shadow-[0_8px_30px_rgba(0,0,0,0.06)]" />}
            <div key={round} className="pop absolute inset-0">
            <div
              role="button"
              tabIndex={0}
              aria-label="Card: tap to flip, pull right if you know it, left to see it again"
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerCancel={onUp}
              className="flip absolute inset-0 cursor-grab touch-none select-none active:cursor-grabbing"
              style={{
                transform: `translateX(${offset}px) rotate(${offset / 18}deg)`,
                transition: dragging ? 'none' : 'transform 0.28s cubic-bezier(.2,.8,.2,1)',
              }}
            >
              <div className={`flip-inner relative h-full w-full ${flipped ? 'flipped' : ''}`}>
                <div className="flip-face absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[28px] bg-[var(--card)] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <span className="caption">{fromName}</span>
                  <span className="mt-3 text-center text-[40px] font-bold leading-tight tracking-tight">{word.front}</span>
                  <span className="footnote absolute bottom-6">Tap to flip</span>
                </div>
                <div className="flip-face flip-back absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[28px] p-6" style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}>
                  <span className="text-[13px] font-medium uppercase tracking-wide opacity-75">{word.front}</span>
                  <span className="mt-3 text-center text-[40px] font-bold leading-tight tracking-tight">{word.answers[0]}</span>
                  {word.answers.length > 1 && <span className="mt-4 text-center text-[15px] opacity-80">also: {word.answers.slice(1).join(', ')}</span>}
                </div>
              </div>
              {/* Colour while pulling: green to the right, red to the left */}
              <div className="pointer-events-none absolute inset-0 flex items-start justify-center rounded-[28px] pt-8" style={{ background: tint, opacity: pull * 0.85 }}>
                <span className="rounded-full border-[3px] border-white px-4 py-1 text-[20px] font-bold uppercase tracking-wide text-white">
                  {offset > 0 ? 'Got it' : 'Again'}
                </span>
              </div>
            </div>
            </div>
          </div>

          {/* One dot per word: green = known, red = needed another go */}
          <div className="mt-5 flex justify-center gap-[7px]">
            {set.words.map((w, n) => (
              <span
                key={w.front}
                className="h-[7px] w-[7px] rounded-full transition-colors"
                style={{
                  background: known.includes(n) ? GREEN : missed.includes(n) ? RED : 'var(--fill)',
                  boxShadow: n === current ? '0 0 0 2px var(--bg), 0 0 0 3.5px var(--text)' : 'none',
                }}
              />
            ))}
          </div>

          <p className="footnote mt-3 text-center">Pull right if you know it, left to see it again</p>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
            <button onClick={previous} disabled={queue.length < 2 || round === 0} className="btn btn-gray">
              Previous
            </button>
            {queue.length === 1 ? (
              <button onClick={onTest} className="btn btn-filled">
                Take the Test
              </button>
            ) : (
              <button onClick={next} className="btn btn-filled">
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

/* ---------- Test ---------- */

function Test({ set, lang, onFinish, onBack }) {
  const [order] = useState(() => shuffle(set.words))
  const [i, setI] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null) // { correct, note }
  const [results, setResults] = useState([])
  const word = order[i]
  const language = LANGUAGES.find((l) => l.id === lang).name

  const submit = (e) => {
    e.preventDefault()
    if (result) {
      const all = [...results, { word, input, ...result }]
      if (i === order.length - 1) return onFinish(all)
      setResults(all)
      setI(i + 1)
      setInput('')
      setResult(null)
      return
    }
    if (!input.trim()) return
    setResult(checkAnswer(input, word.answers, lang))
  }

  const done = i + (result ? 1 : 0)

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col px-4 pb-8 pt-2">
      <NavBar left={<button onClick={onBack} className="link">Cancel</button>} title="Test" right={<span className="footnote">{i + 1} of {order.length}</span>} />
      <div className="mt-2 h-1 overflow-hidden rounded-full" style={{ background: 'var(--fill)' }}>
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(done / order.length) * 100}%`, background: 'var(--accent)' }} />
      </div>

      <form onSubmit={submit} key={i} className="rise mt-14 flex flex-1 flex-col">
        <p className="caption text-center">Translate into {language}</p>
        <p className="mt-2 text-center text-[40px] font-bold leading-tight tracking-tight">{word.front}</p>

        <input
          autoFocus
          value={input}
          onChange={(e) => !result && setInput(e.target.value)}
          readOnly={!!result}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          placeholder="Type your answer"
          className={`field mt-10 h-14 w-full px-4 text-center text-[20px] outline-none placeholder:text-[var(--secondary)] ${result && !result.correct ? 'shake' : ''}`}
          style={{ color: 'var(--text)', borderColor: result ? (result.correct ? '#34C759' : '#FF3B30') : 'transparent' }}
        />

        {result && (
          <div className="pop group mt-4 flex items-start gap-3 p-4">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ background: result.correct ? '#34C759' : '#FF3B30' }}>
              {result.correct ? <Check className="h-4 w-4" /> : <span className="text-[15px] font-bold leading-none">✕</span>}
            </span>
            <div>
              <p className="headline">{result.correct ? 'Correct' : 'Not quite'}</p>
              {result.note && <p className="footnote mt-0.5">{result.note}</p>}
              {!result.correct && (
                <p className="body mt-0.5">
                  It’s <strong>{word.answers[0]}</strong>
                </p>
              )}
            </div>
          </div>
        )}

        <button className="btn btn-filled mt-auto w-full" disabled={!result && !input.trim()}>
          {!result ? 'Check' : i === order.length - 1 ? 'See Result' : 'Continue'}
        </button>
      </form>
    </div>
  )
}

/* ---------- Result (when the test isn't passed, or extra practice) ---------- */

function Result({ results, practice, onRetry, onCards, onHome }) {
  const score = results.filter((r) => r.correct).length
  const passed = score >= PASS_MARK
  const missed = results.filter((r) => !r.correct)
  return (
    <div className="mx-auto max-w-md px-4 pb-10 pt-2">
      <NavBar left={<BackButton onClick={onHome} label="Today" />} />
      <div className="mt-6 flex flex-col items-center text-center">
        <Ring value={score / 10} size={170} stroke={16}>
          <span className="text-[48px] font-bold leading-none tracking-tight">{score}</span>
          <span className="footnote">of 10</span>
        </Ring>
        <h1 className="title2 mt-5">{passed ? 'Nice work' : 'So close'}</h1>
        <p className="body secondary mt-1 max-w-xs">
          {passed
            ? practice
              ? 'You already kept your streak today. This was extra practice.'
              : 'Passed!'
            : `You need ${PASS_MARK} of 10 to keep your streak. Look at the words again, then try once more.`}
        </p>
      </div>

      {missed.length > 0 && (
        <>
          <p className="caption mb-2 mt-8 px-4">Words to practise</p>
          <div className="group">
            {missed.map((r) => (
              <div key={r.word.front} className="row justify-between">
                <span className="body secondary">{r.word.front}</span>
                <span className="headline">{r.word.answers[0]}</span>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-8 grid gap-3">
        {!passed && (
          <>
            <button onClick={onRetry} className="btn btn-filled">Try Again</button>
            <button onClick={onCards} className="btn btn-tinted">Review Flashcards</button>
          </>
        )}
        {passed && <button onClick={onHome} className="btn btn-filled">Done</button>}
      </div>
    </div>
  )
}

/* ---------- Level-up animation ---------- */

const CONFETTI = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#007AFF', '#5856D6', '#FF2D55']

function LevelUp({ from, to, score, onDone }) {
  const [ready, setReady] = useState(false)
  const before = stageFor(from)
  const after = stageFor(to)
  const newColor = from > 0 && before.color.id !== after.color.id
  const [filled, setFilled] = useState(newColor ? 0 : before.dayInColor / DAYS_PER_COLOR)
  useEffect(() => {
    const a = setTimeout(() => setFilled(after.dayInColor / DAYS_PER_COLOR), 700)
    const b = setTimeout(() => setReady(true), 1700)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [to])
  const pieces = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        left: `${(i * 53) % 100}%`,
        delay: `${1 + (i % 10) * 0.07}s`,
        color: CONFETTI[i % CONFETTI.length],
        duration: `${2.2 + (i % 5) * 0.3}s`,
      })),
    [],
  )

  return (
    <div className="app fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      {pieces.map((p, i) => (
        <span key={i} className="confetti-piece" style={{ left: p.left, background: p.color, animationDelay: p.delay, animationDuration: p.duration }} />
      ))}

      <p className="caption rise">Test passed · {score} of 10</p>
      <div className="pop mt-6">
        <Ring value={Math.max(filled, 0.04)} size={240} stroke={24}>
          <span className="num-out absolute text-[72px] font-bold leading-none tracking-tight">{from}</span>
          <span className="num-in absolute text-[72px] font-bold leading-none tracking-tight">{to}</span>
        </Ring>
      </div>
      <h1 className="large-title rise mt-8" style={{ animationDelay: '1.1s' }}>
        {newColor ? `Hello, ${after.color.name}!` : 'Streak Level Up'}
      </h1>
      <p className="body secondary rise mt-1" style={{ animationDelay: '1.3s' }}>
        {newColor
          ? `${to}-day streak · you finished ${before.color.name.toLowerCase()} and moved on to ${after.color.name.toLowerCase()}`
          : `${to}-day streak · your ${after.color.name.toLowerCase()} got a little darker`}
      </p>
      <button onClick={onDone} className="btn btn-filled mt-10 w-full max-w-xs transition-opacity" style={{ opacity: ready ? 1 : 0, pointerEvents: ready ? 'auto' : 'none' }}>
        Continue
      </button>
    </div>
  )
}

/* ---------- Find your level ---------- */

// 10 words, two from each level. Your level is the highest one where you got at least one word right
// (stopping at the first level where you got both wrong).
function Placement({ from, lang, currentDay, onStart, onBack }) {
  const [questions] = useState(() => placementWords(from, lang))
  const [i, setI] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [results, setResults] = useState([])
  const language = LANGUAGES.find((l) => l.id === lang).name

  if (results.length === questions.length) {
    let level = 0
    for (let L = 0; L < LEVELS.length; L++) {
      if (results.some((r) => r.level === L && r.correct)) level = L
      else break
    }
    const score = results.filter((r) => r.correct).length
    const found = LEVELS[level]
    return (
      <div className="mx-auto max-w-md px-4 pb-10 pt-2">
        <NavBar left={<BackButton onClick={onBack} label="Settings" />} />
        <div className="rise mt-6 flex flex-col items-center text-center">
          <Ring value={(level + 1) / LEVELS.length} size={170} stroke={16}>
            <span className="text-[44px] font-bold leading-none tracking-tight">{score}</span>
            <span className="footnote">of 10 right</span>
          </Ring>
          <p className="caption mt-6">Your level</p>
          <h1 className="large-title">{found.name}</h1>
          <p className="body secondary mt-1 max-w-xs">{found.desc}</p>
        </div>

        <p className="caption mb-2 mt-8 px-4">How you did</p>
        <div className="group">
          {LEVELS.map((lv, L) => (
            <div key={lv.id} className="row justify-between">
              <span className={`body ${L === level ? 'font-semibold' : ''}`}>{lv.name}</span>
              <span className="flex gap-1.5">
                {results
                  .filter((r) => r.level === L)
                  .map((r) => (
                    <span
                      key={r.front}
                      className="flex h-6 w-6 items-center justify-center rounded-full text-white"
                      style={{ background: r.correct ? '#34C759' : '#FF3B30' }}
                      title={`${r.front} → ${r.answers[0]}`}
                    >
                      {r.correct ? <Check className="h-3.5 w-3.5" /> : <span className="text-[11px] font-bold">✕</span>}
                    </span>
                  ))}
              </span>
            </div>
          ))}
        </div>

        {levelIndexOf(currentDay) === level ? (
          // Already on this level, so don't send them back to its first day
          <div className="mt-8 grid gap-3">
            <p className="footnote px-4 text-center">You’re already at this level. Keep going!</p>
            <button onClick={onBack} className="btn btn-filled">
              Done
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-3">
            <button onClick={() => onStart(found.start)} className="btn btn-filled">
              Start at {found.name}
            </button>
            <button onClick={onBack} className="btn btn-tinted">
              Keep my place (day {currentDay + 1})
            </button>
          </div>
        )}
      </div>
    )
  }

  const word = questions[i]
  const submit = (e) => {
    e.preventDefault()
    if (result) {
      setResults([...results, { ...word, ...result }])
      setI(Math.min(i + 1, questions.length - 1))
      setInput('')
      setResult(null)
      return
    }
    // An empty answer counts as "I don't know"
    setResult(input.trim() ? checkAnswer(input, word.answers, lang) : { correct: false })
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col px-4 pb-8 pt-2">
      <NavBar left={<button onClick={onBack} className="link">Cancel</button>} title="Find your level" right={<span className="footnote">{i + 1} of 10</span>} />
      <div className="mt-2 h-1 overflow-hidden rounded-full" style={{ background: 'var(--fill)' }}>
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${((i + (result ? 1 : 0)) / 10) * 100}%`, background: 'var(--accent)' }} />
      </div>

      <form onSubmit={submit} key={i} className="rise mt-14 flex flex-1 flex-col">
        <p className="caption text-center">Translate into {language}</p>
        <p className="mt-2 text-center text-[40px] font-bold leading-tight tracking-tight">{word.front}</p>
        <input
          autoFocus
          value={input}
          onChange={(e) => !result && setInput(e.target.value)}
          readOnly={!!result}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          placeholder="Type your answer"
          className="field mt-10 h-14 w-full px-4 text-center text-[20px] outline-none placeholder:text-[var(--secondary)]"
          style={{ color: 'var(--text)', borderColor: result ? (result.correct ? '#34C759' : '#FF3B30') : 'transparent' }}
        />
        {result && (
          <p className="pop headline mt-3 text-center" style={{ color: result.correct ? '#34C759' : '#FF3B30' }}>
            {result.correct ? 'Correct!' : `It’s ${word.answers[0]}`}
          </p>
        )}
        <div className="mt-auto grid gap-2">
          <button className="btn btn-filled w-full">{!result ? (input.trim() ? 'Check' : 'I don’t know') : i === 9 ? 'See my level' : 'Continue'}</button>
        </div>
      </form>
    </div>
  )
}

/* ---------- App ---------- */

export default function App() {
  const [state, setState] = useSaved()
  const [screen, setScreen] = useState('home') // home | cards | test | result | settings | placement
  const [results, setResults] = useState([])
  const [levelUp, setLevelUp] = useState(null)
  const [testKey, setTestKey] = useState(0)

  const today = dayOf(Date.now())
  const { count, lastDay } = state.streak
  const streak = lastDay != null && lastDay >= today - 1 ? count : 0 // a missed day resets it
  const passedToday = lastDay === today
  const batch = state.progress[state.lang] || 0
  const dayIndex = passedToday ? Math.max(0, batch - 1) : batch
  const from = state.from || 'en'
  const set = state.lang ? wordsForDay(dayIndex, from, state.lang) : null
  const theme = themeFor(streak)

  const startTest = () => {
    setTestKey((k) => k + 1)
    setScreen('test')
  }

  const finishTest = (all) => {
    const score = all.filter((r) => r.correct).length
    if (score >= PASS_MARK && !passedToday) {
      const next = lastDay === today - 1 ? count + 1 : 1
      setState((s) => ({
        ...s,
        streak: { count: next, lastDay: today },
        progress: { ...s.progress, [s.lang]: (s.progress[s.lang] || 0) + 1 },
      }))
      setLevelUp({ from: streak, to: next, score })
      setScreen('home')
      return
    }
    setResults(all)
    setScreen('result')
  }

  let page
  if (!state.lang || screen === 'settings') {
    page = (
      <Setup
        state={state}
        onDone={(choice) => {
          setState((s) => ({ ...s, ...choice }))
          setScreen('home')
        }}
        onCancel={() => setScreen('home')}
        onFindLevel={(choice) => {
          setState((s) => ({ ...s, ...choice }))
          setScreen('placement')
        }}
      />
    )
  } else if (screen === 'placement') {
    page = (
      <Placement
        key={`${from}-${state.lang}`}
        from={from}
        lang={state.lang}
        currentDay={batch}
        onStart={(start) => {
          setState((s) => ({ ...s, progress: { ...s.progress, [s.lang]: start } }))
          setScreen('home')
        }}
        onBack={() => setScreen('settings')}
      />
    )
  } else if (screen === 'cards') {
    page = <Flashcards set={set} fromName={LANGUAGES.find((l) => l.id === from).name} onTest={startTest} onBack={() => setScreen('home')} />
  } else if (screen === 'test') {
    page = <Test key={testKey} set={set} lang={state.lang} onFinish={finishTest} onBack={() => setScreen('home')} />
  } else if (screen === 'result') {
    page = <Result results={results} practice={passedToday} onRetry={startTest} onCards={() => setScreen('cards')} onHome={() => setScreen('home')} />
  } else {
    page = (
      <Home
        state={state}
        set={set}
        dayIndex={dayIndex}
        streak={streak}
        passedToday={passedToday}
        onCards={() => setScreen('cards')}
        onTest={startTest}
        onSettings={() => setScreen('settings')}
      />
    )
  }

  return (
    <div className="app min-h-screen" style={theme}>
      {page}
      {levelUp && <LevelUp {...levelUp} onDone={() => setLevelUp(null)} />}
    </div>
  )
}
