import { useEffect, useRef } from 'react'
import { useLang } from '../i18n.jsx'

// Eingabefeld für Fragen zum Selbst-Beantworten (Begriff eintippen oder Ergebnis ausrechnen).
// state: null (offen) | 'right' | 'wrong' – färbt das Feld nach dem Prüfen ein.
export default function AnswerInput({ question, value, onChange, onSubmit, locked = false, state = null }) {
  const { t } = useLang()
  const ref = useRef(null)
  const isNumber = question.type === 'number'

  // Neue Frage → Feld fokussieren (Tastatur geht am Handy gleich auf)
  useEffect(() => {
    if (!locked) ref.current?.focus({ preventScroll: true })
  }, [question.ref?.i, question.ref?.topicId]) // eslint-disable-line react-hooks/exhaustive-deps

  const look =
    state === 'right' ? 'border-emerald-400 bg-emerald-50' : state === 'wrong' ? 'border-rose-400 bg-rose-50' : 'border-transparent bg-white focus-within:border-accent-ink'

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!locked) onSubmit?.()
      }}
      className={`flex items-center gap-2 rounded-2xl border-2 px-4 py-3 shadow-bubbleSm transition-colors ${look}`}
    >
      <input
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={locked}
        inputMode={isNumber ? 'decimal' : 'text'}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        placeholder={isNumber ? t('typeNumber') : t('typeAnswer')}
        className="min-w-0 flex-1 bg-transparent text-[17px] font-semibold text-slate-900 outline-none placeholder:font-normal placeholder:text-slate-400"
      />
      {isNumber && question.unit && <span className="shrink-0 font-semibold text-slate-500">{question.unit}</span>}
    </form>
  )
}
