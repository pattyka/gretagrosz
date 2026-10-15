import { useNavigate } from 'react-router-dom'
import { LANGUAGES, useLang } from '../i18n.jsx'
import { ACCENTS, useAccent } from '../accent.jsx'
import { jahrgaenge } from '../data/curriculum.js'
import { useProgress } from '../progress.jsx'
import Page from '../components/Page.jsx'
import { ListGroup, ListRow } from '../components/List.jsx'

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-ink" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-label="✓">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

function Swatch({ color, size = 'h-7 w-7' }) {
  return <span className={`${size} inline-block shrink-0 rounded-full ring-1 ring-black/10`} style={{ backgroundColor: color }} />
}

// Einstellungen (Übersicht): je eine Zeile für Jahrgang, Sprache und Farbe mit der aktuellen Auswahl.
export default function Einstellungen() {
  const navigate = useNavigate()
  const { lang, t } = useLang()
  const { accent } = useAccent()
  const { myYear } = useProgress()
  const currentLang = LANGUAGES.find((l) => l.code === lang)
  const currentAccent = ACCENTS.find((a) => a.id === accent) ?? ACCENTS[0]

  return (
    <Page title={t('settings')}>
      <ListGroup>
        <ListRow
          title={t('myYear')}
          right={myYear ? t('yearLabel', { n: myYear }) : null}
          onClick={() => navigate('/einstellungen/jahrgang')}
        />
        <ListRow title={t('language')} right={currentLang?.label} onClick={() => navigate('/einstellungen/sprache')} />
        <ListRow
          title={t('colorTheme')}
          right={
            <span className="flex items-center gap-2">
              {currentAccent.names[lang] ?? currentAccent.names.de}
              <Swatch color={currentAccent.swatch} size="h-5 w-5" />
            </span>
          }
          onClick={() => navigate('/einstellungen/farbe')}
        />
      </ListGroup>

      <ListGroup footer={t('testModeFooter')}>
        <ListRow
          title={t('testMode')}
          left={<span className="h-7 w-7 shrink-0 rounded-lg bg-red-500" />}
          onClick={() => navigate('/testmodus')}
        />
      </ListGroup>
    </Page>
  )
}

// /einstellungen/jahrgang
export function JahrgangWahl() {
  const { t } = useLang()
  const { myYear, setMyYear } = useProgress()
  return (
    <Page title={t('myYear')} back="/einstellungen">
      <ListGroup footer={t('myYearFooter')}>
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
    </Page>
  )
}

// /einstellungen/sprache
export function SprachWahl() {
  const { lang, setLang, t } = useLang()
  return (
    <Page title={t('language')} back="/einstellungen">
      <ListGroup footer={t('languageFooter')}>
        {LANGUAGES.map((l) => (
          <ListRow
            key={l.code}
            title={l.label}
            chevron={false}
            onClick={() => setLang(l.code)}
            right={l.code === lang ? <Check /> : null}
          />
        ))}
      </ListGroup>
    </Page>
  )
}

// /einstellungen/farbe
export function FarbWahl() {
  const { lang, t } = useLang()
  const { accent, setAccent } = useAccent()
  return (
    <Page title={t('colorTheme')} back="/einstellungen">
      <ListGroup footer={t('colorFooter')}>
        {ACCENTS.map((a) => (
          <ListRow
            key={a.id}
            title={a.names[lang] ?? a.names.de}
            chevron={false}
            onClick={() => setAccent(a.id)}
            left={<Swatch color={a.swatch} />}
            right={a.id === accent ? <Check /> : null}
          />
        ))}
      </ListGroup>
    </Page>
  )
}
