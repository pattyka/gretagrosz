import { useState } from 'react'
import { LANGUAGES, useLang } from '../i18n.jsx'
import { jahrgaenge } from '../data/curriculum.js'
import { useProgress } from '../progress.jsx'
import BubbleButton from '../components/BubbleButton.jsx'
import ShopScene from '../components/ShopScene.jsx'
import { ListGroup, ListRow } from '../components/List.jsx'

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-ink" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-label="✓">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

// Ersteinrichtung beim allerersten Öffnen: Jahrgang → Sprache.
export default function Onboarding() {
  const { lang, setLang, t } = useLang()
  const { myYear, setMyYear, finishOnboarding } = useProgress()
  const [step, setStep] = useState(0)
  const last = step === 1

  const titles = [t('obYear'), t('obLang')]

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col px-4 pb-8 pt-10">
      <ShopScene level={0} className="mx-auto mb-2 h-auto w-56" />
      <h1 className="mb-1 text-center text-[28px] font-bold leading-tight tracking-tight text-title">{t('shopTitle')}</h1>

      {/* Fortschrittspunkte */}
      <div className="mb-6 mt-3 flex justify-center gap-2" aria-hidden>
        {[0, 1].map((i) => (
          <span key={i} className={`h-2 w-2 rounded-full ${i === step ? 'bg-accent-ink' : 'bg-black/15'}`} />
        ))}
      </div>

      <h2 className="mb-3 text-center text-xl font-semibold text-title">{titles[step]}</h2>

      <div className="flex-1">
        {step === 0 && (
          <ListGroup>
            {jahrgaenge.map((j) => (
              <ListRow
                key={j.id}
                title={t('yearLabel', { n: j.id })}
                chevron={false}
                onClick={() => setMyYear(j.id)}
                right={j.id === myYear ? <Check /> : null}
              />
            ))}
          </ListGroup>
        )}
        {step === 1 && (
          <ListGroup>
            {LANGUAGES.map((l) => (
              <ListRow key={l.code} title={l.label} chevron={false} onClick={() => setLang(l.code)} right={l.code === lang ? <Check /> : null} />
            ))}
          </ListGroup>
        )}
        <p className="text-center text-[13px] text-muted">{t('obHint')}</p>
      </div>

      <div className="mt-6 flex gap-3">
        {step > 0 && (
          <BubbleButton variant="ghost" onClick={() => setStep((s) => s - 1)} className="flex-1 py-3">
            {t('back')}
          </BubbleButton>
        )}
        <BubbleButton
          disabled={step === 0 && !myYear}
          onClick={() => (last ? finishOnboarding() : setStep((s) => s + 1))}
          className="flex-1 py-3"
        >
          {last ? t('obDone') : t('goOn')}
        </BubbleButton>
      </div>
    </div>
  )
}
