import { useState } from 'react'
import { getKapitelList, jahrgaenge } from '../data/curriculum.js'
import { dayKey, daysUntil } from '../data/questions.js'
import { titleOf } from '../data/translate.js'
import { useLang } from '../i18n.jsx'
import { useProgress } from '../progress.jsx'
import BubbleButton from '../components/BubbleButton.jsx'
import { ListGroup, ListRow } from '../components/List.jsx'

const LOCALES = { de: 'de-AT', en: 'en-GB', hu: 'hu-HU' }
export const EXAM_TYPES = ['sa', 'lzk', 'test']
const TYPE_LABEL = { sa: 'typeSA', lzk: 'typeLZK', test: 'typeTest' }

export function examTypeLabel(t, type) {
  return t(TYPE_LABEL[type] ?? 'typeSA')
}

export function formatDay(day, lang) {
  const [y, m, d] = day.split('-').map(Number)
  return new Intl.DateTimeFormat(LOCALES[lang] ?? 'de-AT', { weekday: 'short', day: 'numeric', month: 'long' }).format(new Date(y, m - 1, d))
}

export function countdownText(t, day) {
  const n = daysUntil(day)
  if (n <= 0) return t('today')
  if (n === 1) return t('tomorrow')
  return t('inDays', { n })
}

function Check({ on }) {
  return (
    <span className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${on ? 'border-accent-ink bg-accent-ink text-white' : 'border-slate-300'}`}>
      {on && (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      )}
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
          className={`flex-1 rounded-lg px-1 py-2.5 text-[14px] font-semibold transition-colors ${
            o.value === value ? 'bg-white text-slate-900 shadow-bubbleSm' : 'text-muted'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

// Formular für einen neuen Termin
export function NeuerTermin({ onDone }) {
  const { lang, t } = useLang()
  const { myYear, addExam } = useProgress()
  const [type, setType] = useState('sa')
  const [date, setDate] = useState('')
  const [year, setYear] = useState(myYear ?? 1)
  const [kapitelIds, setKapitelIds] = useState([])
  const chapters = getKapitelList(year)
  const valid = date && kapitelIds.length > 0

  return (
    <>
      <h2 className="mb-1.5 px-4 text-[13px] font-medium uppercase tracking-wide text-muted">{t('examType')}</h2>
      <Segmented options={EXAM_TYPES.map((x) => ({ value: x, label: examTypeLabel(t, x) }))} value={type} onChange={setType} />

      <ListGroup header={t('examDate')}>
        <label className="flex items-center px-4 py-2.5">
          <input
            type="date"
            min={dayKey()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent text-[17px] text-slate-900 outline-none"
          />
        </label>
      </ListGroup>

      <h2 className="mb-1.5 px-4 text-[13px] font-medium uppercase tracking-wide text-muted">{t('chooseYear')}</h2>
      <Segmented
        options={jahrgaenge.map((j) => ({ value: j.id, label: String(j.id) }))}
        value={Number(year)}
        onChange={(v) => {
          setYear(v)
          setKapitelIds([])
        }}
      />

      <ListGroup header={t('examChapters')}>
        {chapters.map((k) => {
          const on = kapitelIds.includes(k.id)
          return (
            <ListRow
              key={k.id}
              title={titleOf(k, lang)}
              chevron={false}
              right={<Check on={on} />}
              onClick={() => setKapitelIds(on ? kapitelIds.filter((x) => x !== k.id) : [...kapitelIds, k.id])}
            />
          )
        })}
      </ListGroup>

      <div className="flex gap-3">
        <BubbleButton variant="ghost" onClick={() => onDone(false)} className="flex-1 py-3">
          {t('cancel')}
        </BubbleButton>
        <BubbleButton
          disabled={!valid}
          onClick={() => {
            addExam({ type, date, jahrgangId: Number(year), kapitelIds })
            onDone(true)
          }}
          className="flex-1 py-3"
        >
          {t('save')}
        </BubbleButton>
      </div>
    </>
  )
}
