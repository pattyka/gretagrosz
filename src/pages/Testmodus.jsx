import { useEffect, useState } from 'react'
import { getKapitel } from '../data/curriculum.js'
import { dayKey, daysUntil } from '../data/questions.js'
import { titleOf } from '../data/translate.js'
import { useLang } from '../i18n.jsx'
import { useProgress } from '../progress.jsx'
import { useScreenColors } from '../accent.jsx'
import BubbleButton from '../components/BubbleButton.jsx'
import Page from '../components/Page.jsx'
import { ChevronLeft, ChevronRight } from '../components/Icons.jsx'
import Pruefung from './Pruefung.jsx'
import { NeuerTermin, countdownText, examTypeLabel, formatDay } from './Termine.jsx'

const LOCALES = { de: 'de-AT', en: 'en-GB', hu: 'hu-HU' }

// Schwierigkeitsstufen: die Stufe bestimmt, wie schwer die Fragen sind (siehe buildExam),
// und je schwerer, desto dunkler das Rot. Fragenanzahl je Stufe:
const COUNTS = {
  test: [12, 15, 15, 18],
  sa: [25, 30, 30, 35],
}

// Zeit wählen (Minuten, 0 = ohne Limit) mit Empfehlung: 25 Min. für Tests, 50 Min. für Schularbeiten
const TIMES = {
  test: { options: [15, 20, 25, 30, 45, 0], recommended: 25 },
  sa: { options: [30, 40, 50, 60, 75, 0], recommended: 50 },
}

// Rottöne pro Stufe (R G B). Ab "Schwer" wird die Schrift auf dem Hintergrund weiß.
const REDS = [
  { bg: '254 242 242', accent: '252 165 165', 'accent-ink': '220 38 38', 'accent-on': '127 29 29', title: '69 10 10', muted: '153 27 27', nav: '220 38 38' },
  { bg: '252 165 165', accent: '254 226 226', 'accent-ink': '185 28 28', 'accent-on': '127 29 29', title: '69 10 10', muted: '127 29 29', nav: '127 29 29' },
  { bg: '220 38 38', accent: '254 226 226', 'accent-ink': '185 28 28', 'accent-on': '127 29 29', title: '255 255 255', muted: '254 226 226', nav: '255 255 255' },
  { bg: '110 15 15', accent: '254 202 202', 'accent-ink': '153 27 27', 'accent-on': '69 10 10', title: '255 255 255', muted: '252 165 165', nav: '255 255 255' },
]

// Farbpunkt je Stufe in der Auswahl
const DOTS = ['#FCA5A5', '#F87171', '#DC2626', '#7F1D1D']

function SectionHeader({ children }) {
  return <h2 className="mb-1.5 px-4 text-[13px] font-medium uppercase tracking-wide text-muted">{children}</h2>
}

// Monatskalender; Tage mit Test oder Schularbeit sind markiert.
function MonthCalendar({ exams }) {
  const { lang } = useLang()
  const now = new Date()
  const [month, setMonth] = useState(new Date(now.getFullYear(), now.getMonth(), 1))
  const year = month.getFullYear()
  const m = month.getMonth()
  const firstWeekday = (new Date(year, m, 1).getDay() + 6) % 7 // Montag = 0
  const daysInMonth = new Date(year, m + 1, 0).getDate()
  const today = dayKey()
  const examDays = new Set(exams.map((e) => e.date))
  const locale = LOCALES[lang] ?? 'de-AT'
  const weekdays = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { weekday: 'narrow' }).format(new Date(2024, 0, 1 + i)),
  )
  const cells = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]

  return (
    <div className="mb-7 rounded-xl bg-white p-4 shadow-bubbleSm">
      <div className="mb-3 flex items-center justify-between">
        <button onClick={() => setMonth(new Date(year, m - 1, 1))} className="p-1 text-accent-ink active:opacity-50" aria-label="‹">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="font-semibold text-slate-900">
          {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(month)}
        </span>
        <button onClick={() => setMonth(new Date(year, m + 1, 1))} className="p-1 text-accent-ink active:opacity-50" aria-label="›">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center text-[13px]">
        {weekdays.map((w, i) => (
          <span key={i} className="pb-1 font-medium text-slate-400">
            {w}
          </span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={`e${i}`} />
          const key = `${year}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
          const isExam = examDays.has(key)
          const isToday = key === today
          return (
            <span key={key} className="flex justify-center">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-[15px] ${
                  isExam ? 'bg-red-600 font-bold text-white' : isToday ? 'font-bold text-red-600 ring-1 ring-red-600' : 'text-slate-800'
                }`}
              >
                {d}
              </span>
            </span>
          )
        })}
      </div>
    </div>
  )
}

// /testmodus – roter Bereich: Kalender, Termine und Probe-Prüfungen in vier Stufen
export default function Testmodus() {
  const { lang, t } = useLang()
  const { exams, removeExam } = useProgress()
  const [kind, setKind] = useState('sa')
  const [level, setLevel] = useState(0)
  const [minutes, setMinutes] = useState(TIMES.sa.recommended)
  const [adding, setAdding] = useState(false)
  const [savedNote, setSavedNote] = useState(false)
  useScreenColors(REDS[level])

  // Kurzer Hinweis "Gespeichert" nach dem Eintragen einer Prüfung
  useEffect(() => {
    if (!savedNote) return
    const id = setTimeout(() => setSavedNote(false), 2000)
    return () => clearTimeout(id)
  }, [savedNote])

  const upcoming = exams.filter((e) => daysUntil(e.date) >= 0)
  const preset = { count: COUNTS[kind][level], level, minutes }

  const header = adding ? null : (
    <>
      <SectionHeader>{t('calendar')}</SectionHeader>
      <MonthCalendar exams={upcoming} />

      {upcoming.length === 0 ? (
        <p className="mb-4 px-1 text-muted">{t('examsEmpty')}</p>
      ) : (
        <div className="mb-4 flex flex-col gap-2">
          {upcoming.map((e) => (
            <div key={e.id} className="rounded-xl bg-white p-4 shadow-bubbleSm">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-slate-900">{examTypeLabel(t, e.type)}</span>
                <span className="font-semibold text-red-600">{countdownText(t, e.date)}</span>
              </div>
              <p className="text-sm text-slate-500">
                {formatDay(e.date, lang)} · {e.kapitelIds.map((k) => titleOf(getKapitel(e.jahrgangId, k), lang)).filter(Boolean).join(' · ')}
              </p>
              <button onClick={() => removeExam(e.id)} className="-ml-2 mt-1 min-h-[44px] px-2 text-[15px] font-medium text-red-600 active:opacity-50">
                {t('remove')}
              </button>
            </div>
          ))}
        </div>
      )}
      <BubbleButton variant="ghost" onClick={() => setAdding(true)} className="mb-8 w-full bg-white py-3 shadow-bubbleSm">
        {t('addExam')}
      </BubbleButton>

      <SectionHeader>{t('whatToWrite')}</SectionHeader>
      <div className="mb-6 flex rounded-xl bg-black/[0.08] p-1">
        {['test', 'sa'].map((k) => (
          <button
            key={k}
            onClick={() => {
              setKind(k)
              setMinutes(TIMES[k].recommended)
            }}
            className={`flex-1 rounded-lg py-2.5 text-[15px] font-semibold transition-colors ${
              kind === k ? 'bg-white text-slate-900 shadow-bubbleSm' : 'text-muted'
            }`}
          >
            {examTypeLabel(t, k)}
          </button>
        ))}
      </div>

      <SectionHeader>{t('difficulty')}</SectionHeader>
      <div className="mb-8 grid grid-cols-2 gap-3">
        {COUNTS[kind].map((count, i) => (
          <button
            key={i}
            onClick={() => setLevel(i)}
            className={`rounded-xl bg-white p-4 text-left shadow-bubbleSm transition-shadow ${level === i ? 'ring-4 ring-red-500' : ''}`}
          >
            <span className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: DOTS[i] }} />
              <span className="font-semibold text-slate-900">{t(`diff${i + 1}`)}</span>
            </span>
            <span className="mt-1 block text-[13px] leading-snug text-slate-500">{t(`diffDesc${i + 1}`)}</span>
            <span className="mt-1 block text-[13px] font-medium text-slate-700">{t('questionsCount', { n: count })}</span>
          </button>
        ))}
      </div>

      <SectionHeader>{t('timeHeader')}</SectionHeader>
      <div className="mb-1.5 flex rounded-xl bg-black/[0.08] p-1">
        {TIMES[kind].options.map((m) => (
          <button
            key={m}
            onClick={() => setMinutes(m)}
            className={`flex-1 rounded-lg px-0.5 py-2.5 text-[13px] font-semibold transition-colors ${
              minutes === m ? 'bg-white text-slate-900 shadow-bubbleSm' : 'text-muted'
            }`}
          >
            {m ? t('minutesShort', { n: m }) : t('noLimit')}
          </button>
        ))}
      </div>
      <p className="mb-8 px-4 text-[13px] text-muted">
        {t('timeRecommend', { n: TIMES[kind].recommended })}
        {minutes === 0 && ` · ${t('timeNone')}`}
      </p>
    </>
  )

  if (adding) {
    return (
      <Page title={t('newExam')} onBack={() => setAdding(false)}>
        <NeuerTermin
          onDone={(saved) => {
            setAdding(false)
            if (saved) setSavedNote(true)
          }}
        />
      </Page>
    )
  }

  return (
    <>
      <Pruefung preset={preset} header={header} title={t('testMode')} back="/einstellungen" />
      {savedNote && (
        <div className="pointer-events-none fixed inset-x-0 top-14 z-40 flex justify-center">
          <span className="rounded-full bg-slate-900/85 px-4 py-2 text-[15px] font-medium text-white shadow-bubble backdrop-blur">
            ✓ {t('saved')}
          </span>
        </div>
      )}
    </>
  )
}

