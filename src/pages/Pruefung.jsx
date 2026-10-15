import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getKapitelList, jahrgaenge } from '../data/curriculum.js'
import { buildExam, chapterQuestions, correctAnswerText, givenAnswerText, gradeOf, isCorrect, questionByRef, refKey, shuffle } from '../data/questions.js'
import AnswerInput from '../components/AnswerInput.jsx'
import { titleOf } from '../data/translate.js'
import { useLang } from '../i18n.jsx'
import { XP, useProgress } from '../progress.jsx'
import Page from '../components/Page.jsx'
import BubbleButton from '../components/BubbleButton.jsx'
import { ListGroup, ListRow } from '../components/List.jsx'

const OPTION_LETTERS = ['A', 'B', 'C', 'D']

function Check({ on }) {
  return (
    <span
      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${on ? 'border-accent-ink bg-accent-ink text-white' : 'border-slate-300'}`}
    >
      {on && (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      )}
    </span>
  )
}

function Toggle({ on }) {
  return (
    <span className={`relative inline-block h-[31px] w-[51px] rounded-full transition-colors ${on ? 'bg-accent-ink' : 'bg-black/15'}`}>
      <span className={`absolute top-0.5 h-[27px] w-[27px] rounded-full bg-white shadow transition-all ${on ? 'left-[22px]' : 'left-0.5'}`} />
    </span>
  )
}

function Segmented({ options, value, onChange }) {
  return (
    <div className="mb-6 flex rounded-xl bg-black/[0.06] p-1">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          className={`flex-1 rounded-lg py-2.5 text-[15px] font-semibold transition-colors ${
            o.value === value ? 'bg-white text-slate-900 shadow-bubbleSm' : 'text-muted'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

const fmtTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

// Probe-Schularbeit: Einstellungen → Prüfung (ohne Feedback, mit Zeitlimit) → Note + Fehler
// preset: { count, level, minutes } aus dem Testmodus – Fragenanzahl, Schwierigkeitsstufe (0–3)
//         und Gesamtzeit in Minuten (0 = ohne Zeitlimit)
// header: Inhalt über den Einstellungen (z. B. Kalender und Schwierigkeitsstufen im Testmodus)
export default function Pruefung({ preset, header, title, back: backProp }) {
  const navigate = useNavigate()
  const { state: navState } = useLocation()
  const { lang, t } = useLang()
  const { myYear, award, recordAnswer } = useProgress()

  const [phase, setPhase] = useState('setup')
  const [year, setYear] = useState(() => navState?.jahrgangId ?? myYear ?? 1)
  const [selected, setSelected] = useState(() => navState?.kapitelIds ?? null)
  const [ownCount, setCount] = useState(20)
  const [ownTimer, setTimer] = useState(true)
  const count = preset ? preset.count : ownCount
  const timer = preset ? preset.minutes > 0 : ownTimer
  const pageTitle = title ?? t('examMode')

  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [index, setIndex] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [timeUp, setTimeUp] = useState(false)

  const back = backProp ?? navState?.from ?? '/themen'
  const chapters = getKapitelList(year)
    .map((k) => ({ k, n: chapterQuestions(year, k.id, 'de').length }))
    .filter((c) => c.n > 0)
  const chosen = selected ?? chapters.map((c) => c.k.id)
  const available = chapters.filter((c) => chosen.includes(c.k.id)).reduce((sum, c) => sum + c.n, 0)
  const countOptions = [10, 20, 30].filter((n) => n <= available)
  const effectiveCount = Math.min(count, available)

  // Countdown läuft nur während der Prüfung
  useEffect(() => {
    if (phase !== 'run' || !timer) return
    if (secondsLeft <= 0) {
      setTimeUp(true)
      finish()
      return
    }
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [phase, secondsLeft]) // eslint-disable-line react-hooks/exhaustive-deps

  const start = () => {
    const pool = chosen.flatMap((k) => chapterQuestions(year, k, 'de').map((q) => q.ref))
    const refs = preset ? buildExam(year, chosen, preset.level, effectiveCount) : shuffle(pool).slice(0, effectiveCount)
    // Extrem: Antworten in zufälliger Reihenfolge (Fachbegriff-Fragen sind schon gemischt)
    const items = refs.map((ref) => ({
      ref,
      perm: preset?.level === 3 && !String(ref.i).startsWith('c') ? shuffle([0, 1, 2, 3]) : null,
    }))
    setQuestions(items)
    setAnswers(items.map(() => null))
    setIndex(0)
    setTimeUp(false)
    setSecondsLeft(preset ? preset.minutes * 60 : refs.length * 60)
    setPhase('run')
    window.scrollTo({ top: 0 })
  }

  // Fragen in der aktuellen Sprache (die Reihenfolge bleibt beim Sprachwechsel gleich)
  const resolved = questions.map(({ ref, perm }) => {
    const q = questionByRef(ref, lang)
    if (!q || !perm || !q.options) return q
    const order = perm.filter((i) => i < q.options.length)
    return { ...q, options: order.map((i) => q.options[i]), correctIndex: order.indexOf(q.correctIndex) }
  })

  function finish() {
    resolved.forEach((q, i) => {
      if (!q) return
      const correct = isCorrect(q, answers[i])
      recordAnswer(q.ref, correct)
      if (correct) award(`quiz:${refKey(q.ref)}`, XP.quiz)
    })
    setPhase('result')
    window.scrollTo({ top: 0 })
  }

  // ---------- Einstellungen ----------
  if (phase === 'setup') {
    return (
      <Page title={pageTitle} subtitle={header ? null : t('examSetupSub')} back={back}>
        {header}
        <Segmented
          options={jahrgaenge.map((j) => ({ value: j.id, label: String(j.id) }))}
          value={Number(year)}
          onChange={(v) => {
            setYear(v)
            setSelected(null)
          }}
        />

        <ListGroup header={`${t('examChapters')} · ${t('yearLabel', { n: year })}`}>
          {chapters.map(({ k }) => {
            const on = chosen.includes(k.id)
            return (
              <ListRow
                key={k.id}
                title={titleOf(k, lang)}
                chevron={false}
                right={<Check on={on} />}
                onClick={() => setSelected(on ? chosen.filter((x) => x !== k.id) : [...chosen, k.id])}
              />
            )
          })}
        </ListGroup>

        {!preset && available > 0 && countOptions.length > 1 && (
          <>
            <h2 className="mb-1.5 px-4 text-[13px] font-medium uppercase tracking-wide text-muted">{t('examCount')}</h2>
            <Segmented
              options={countOptions.map((n) => ({ value: n, label: String(n) }))}
              value={countOptions.includes(count) ? count : countOptions[countOptions.length - 1]}
              onChange={setCount}
            />
          </>
        )}

        {!preset && (
          <ListGroup>
            <ListRow title={t('examTimer')} chevron={false} right={<Toggle on={timer} />} onClick={() => setTimer((x) => !x)} />
          </ListGroup>
        )}

        {available === 0 ? (
          <p className="text-muted">{t('examNoChapters')}</p>
        ) : (
          <BubbleButton onClick={start} className="w-full py-3.5 text-[17px]">
            {t('examStart')} · {t('questionsCount', { n: effectiveCount })}
          </BubbleButton>
        )}
      </Page>
    )
  }

  // ---------- Prüfung ----------
  if (phase === 'run') {
    const q = resolved[index]
    const last = index + 1 >= resolved.length
    return (
      <Page
        title={pageTitle}
        // Warnung, bevor ein laufender Test abgebrochen wird
        onBack={() => window.confirm(t('examLeaveConfirm')) && navigate(back)}
        inline
        sticky={
          <BubbleButton onClick={() => (last ? finish() : setIndex((i) => i + 1))} className="w-full py-3">
            {last ? t('examFinish') : t('next')}
          </BubbleButton>
        }
      >
        <div className="mb-3 flex items-center justify-between text-sm font-semibold text-muted">
          <span>{t('questionOf', { n: index + 1, total: resolved.length })}</span>
          {timer && (
            <span className={`tabular-nums ${secondsLeft < 60 ? 'font-bold text-title' : ''}`}>{fmtTime(secondsLeft)}</span>
          )}
        </div>
        <div className="mb-6 h-2 w-full rounded-full bg-black/[0.06] overflow-hidden">
          <div className="h-full bg-accent transition-all" style={{ width: `${(index / resolved.length) * 100}%` }} />
        </div>

        {q && (
          <>
            <div className="rounded-blob bg-white shadow-bubble p-6 mb-5">
              <h2 className="whitespace-pre-line text-xl font-bold text-slate-900">{q.question}</h2>
            </div>
            {(q.type === 'text' || q.type === 'number') && (
              // Eingabefrage: wird erst bei der Auswertung geprüft
              <AnswerInput
                question={q}
                value={answers[index] ?? ''}
                onChange={(v) => setAnswers((a) => a.map((x, j) => (j === index ? v : x)))}
                onSubmit={() => (last ? finish() : setIndex((i) => i + 1))}
              />
            )}
            <div className="flex flex-col gap-3">
              {(q.options ?? []).map((option, i) => {
                const on = answers[index] === i
                return (
                  <button
                    key={i}
                    onClick={() => setAnswers((a) => a.map((x, j) => (j === index ? i : x)))}
                    className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left font-semibold text-slate-700 shadow-bubbleSm transition-colors ${
                      on ? 'border-accent-ink bg-accent/25' : 'border-transparent bg-white'
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        on ? 'bg-accent-ink text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {OPTION_LETTERS[i]}
                    </span>
                    {option}
                  </button>
                )
              })}
            </div>
          </>
        )}

      </Page>
    )
  }

  // ---------- Ergebnis ----------
  const score = resolved.filter((q, i) => q && isCorrect(q, answers[i])).length
  const total = resolved.length
  const pct = total ? Math.round((score / total) * 100) : 0
  const grade = gradeOf(pct)
  const wrong = resolved.map((q, i) => ({ q, a: answers[i] })).filter(({ q, a }) => q && !isCorrect(q, a))

  return (
    <Page title={pageTitle} back={back} inline>
      <div className="mb-6 flex flex-col items-center pt-6 text-center">
        <p className="text-[13px] font-medium uppercase tracking-wide text-muted">{t('examResult')}</p>
        <div className="my-3 flex h-28 w-28 items-center justify-center rounded-full bg-accent text-6xl font-bold text-accent-on">
          {grade}
        </div>
        <p className="text-2xl font-bold text-title">{t(`grade${grade}`)}</p>
        <p className="mt-1 text-muted">{t('examPoints', { score, total, pct })}</p>
        {timeUp && <p className="mt-1 font-semibold text-title">{t('examTimeUp')}</p>}
        <p className="mt-3 max-w-sm text-xs text-muted">{t('gradeNote')}</p>
      </div>

      <div className="mb-8 flex gap-3">
        <BubbleButton variant="ghost" onClick={() => navigate('/')} className="flex-1 py-3">
          {t('toHome')}
        </BubbleButton>
        <BubbleButton onClick={() => setPhase('setup')} className="flex-1 py-3">
          {t('examAgain')}
        </BubbleButton>
      </div>

      <h2 className="mb-1.5 px-4 text-[13px] font-medium uppercase tracking-wide text-muted">{t('examReview')}</h2>
      {wrong.length === 0 ? (
        <p className="px-4 text-title">{t('examAllRight')}</p>
      ) : (
        <div className="flex flex-col gap-3">
          {wrong.map(({ q, a }) => (
            <div key={refKey(q.ref)} className="rounded-xl bg-white shadow-bubbleSm p-4">
              <p className="whitespace-pre-line font-semibold text-slate-900">{q.question}</p>
              <p className="mt-2 text-sm text-rose-700">
                <span className="font-semibold">{t('yourAnswer')}</span> {givenAnswerText(q, a) ?? t('noAnswer')}
              </p>
              <p className="text-sm text-emerald-700">
                <span className="font-semibold">{t('rightAnswer')}</span> {correctAnswerText(q, lang)}
              </p>
              <p className="mt-2 text-sm text-slate-500">{q.explanation}</p>
            </div>
          ))}
        </div>
      )}
    </Page>
  )
}
