import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { levelOf, levelText } from '../data/shop.js'
import { useLang } from '../i18n.jsx'
import { XP, currentStreak, useProgress } from '../progress.jsx'
import Page from '../components/Page.jsx'
import ShopScene from '../components/ShopScene.jsx'
import ShopTimeline from '../components/ShopTimeline.jsx'
import BubbleButton from '../components/BubbleButton.jsx'
import { ListGroup, ListRow } from '../components/List.jsx'
import { getJahrgang, getKapitel, getKapitelTopics, getTopic } from '../data/curriculum.js'
import { lerninhalte } from '../data/lerninhalte.js'
import { titleOf } from '../data/translate.js'
import { daysUntil, weakTopics } from '../data/questions.js'
import { countdownText, examTypeLabel } from './Termine.jsx'

// Startseite: Loopys Laden mit Level, eine "Heute"-Karte mit genau einem nächsten Schritt,
// darunter nur das, was gerade wichtig ist (Fehlerheft, schwache Themen, Prüfung eintragen).
export default function Home() {
  const navigate = useNavigate()
  const { lang, t } = useLang()
  const { xp, mistakes, results, exams } = useProgress()
  const { index } = levelOf(xp)
  const mistakeCount = Object.keys(mistakes).length
  const weak = weakTopics(results)
    .map((r) => ({ ...r, topic: getTopic(r.jahrgangId, r.topicId) }))
    .filter((r) => r.topic)
  const hasExam = exams.some((e) => daysUntil(e.date) >= 0)

  const shown = useShownLevel(index)
  const [history, setHistory] = useState(false)

  return (
    <Page title={t('shopTitle')} center>
      <button
        onClick={() => setHistory(true)}
        aria-label={t('historyTitle')}
        className="mx-auto mb-4 block w-full max-w-md transition-transform active:scale-[0.98]"
      >
        <ShopScene level={shown} className="h-auto w-full" />
      </button>
      <ShopTimeline open={history} current={index} onClose={() => setHistory(false)} />

      <LevelCard />
      <TodayCard />

      {mistakeCount > 0 && (
        <ListGroup>
          <ListRow title={t('mistakesTitle')} right={mistakeCount} onClick={() => navigate('/fehler')} />
        </ListGroup>
      )}

      {weak.length > 0 && (
        <ListGroup header={t('weakTopics')}>
          {weak.map((r) => (
            <ListRow
              key={`${r.jahrgangId}-${r.topicId}`}
              title={titleOf(r.topic, lang)}
              onClick={() => navigate(`/themen/${r.jahrgangId}/${r.kapitelId}/${r.topicId}`)}
            />
          ))}
        </ListGroup>
      )}

      {!hasExam && (
        <ListGroup>
          <ListRow title={`+ ${t('addExam')}`} accent onClick={() => navigate('/testmodus')} />
        </ListGroup>
      )}
    </Page>
  )
}

// Zuletzt auf der Startseite gezeigte Stufe. Ist der Laden seither gewachsen, steht zuerst
// die alte Stufe da und kurz danach baut sich das Neue sichtbar auf.
const SEEN_KEY = 'bw-buddy-shop-seen'

function useShownLevel(index) {
  const [shown, setShown] = useState(() => {
    try {
      const raw = localStorage.getItem(SEEN_KEY)
      const seen = raw === null ? 0 : Number(raw)
      return Number.isInteger(seen) && seen >= 0 && seen < index ? seen : index
    } catch {
      return index
    }
  })

  useEffect(() => {
    if (shown < index) {
      const timer = setTimeout(() => setShown(index), 450)
      return () => clearTimeout(timer)
    }
    if (shown > index) setShown(index)
    try {
      localStorage.setItem(SEEN_KEY, String(index))
    } catch {
      /* ignorieren */
    }
  }, [shown, index])

  return Math.min(shown, index)
}

// Level von Loopys Laden mit XP-Balken; die XP-Regeln stehen hinter dem kleinen "i".
function LevelCard() {
  const { lang, t } = useLang()
  const { xp, cards, streak } = useProgress()
  const { index, level, next, progress, missing } = levelOf(xp)
  const [showInfo, setShowInfo] = useState(false)
  const days = currentStreak(streak)

  return (
    <div className="rounded-blob bg-white shadow-bubbleSm p-5 mb-5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xl font-bold tracking-tight text-slate-900">{levelText(level, lang).name}</span>
        <span className="flex items-center gap-2">
          <span className="font-semibold text-accent-ink">{t('levelN', { n: index + 1 })}</span>
          <button
            onClick={() => setShowInfo((x) => !x)}
            aria-label={t('howToEarn')}
            aria-expanded={showInfo}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-accent-ink/40 text-sm font-semibold text-accent-ink active:opacity-50"
          >
            i
          </button>
        </span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-black/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
      <p className="mt-2 text-sm text-slate-500">
        {t('xpShort', { xp })} · {next ? t('toNext', { n: missing, level: index + 2 }) : t('maxLevel')}
      </p>
      <p className="text-sm text-slate-500">
        {days} {t(days === 1 ? 'statStreakOne' : 'statStreak')} · {Object.keys(cards).length} {t('statCards')}
      </p>

      {showInfo && (
        <div className="mt-4 border-t border-black/[0.08] pt-3 text-sm text-slate-600">
          <p className="mb-1 font-semibold text-slate-900">{t('howToEarn')}</p>
          <p>{t('earnStep', { n: XP.step })}</p>
          <p>{t('earnSummary', { n: XP.summary })}</p>
          <p>{t('earnQuiz', { n: XP.quiz })}</p>
          <p>{t('earnCard', { n: XP.card })}</p>
          <p className="mt-1 text-xs text-slate-400">{t('earnOnce')}</p>
        </div>
      )}
    </div>
  )
}

// "Heute": Countdown zur nächsten Prüfung und genau ein nächster Schritt.
function TodayCard() {
  const navigate = useNavigate()
  const { lang, t } = useLang()
  const { exams, done, last, myYear } = useProgress()
  const exam = exams.find((e) => daysUntil(e.date) >= 0)

  let headline = null
  let detail = null
  let button = null

  // Lernplan: noch nicht gelesene Themen der Prüfung (der letzte Tag bleibt für Tests frei)
  const daysLeft = exam ? daysUntil(exam.date) : null
  const planTopic =
    exam && daysLeft > 1
      ? exam.kapitelIds
          .flatMap((k) => getKapitelTopics(exam.jahrgangId, k).map((topic) => ({ topic, k })))
          .find(({ topic }) => lerninhalte[topic.id] && !done[`summary:${topic.id}`])
      : null
  const lastTopic = last && getJahrgang(last.jahrgangId) && getKapitel(last.jahrgangId, last.kapitelId) && getTopic(last.jahrgangId, last.topicId)

  if (planTopic) {
    headline = titleOf(planTopic.topic, lang)
    button = { label: t('startLearning'), go: () => navigate(`/themen/${exam.jahrgangId}/${planTopic.k}/${planTopic.topic.id}`) }
  } else if (exam) {
    detail = daysLeft <= 1 ? t('planExamDay') : t('planDone')
    button = { label: t('testMode'), go: () => navigate('/testmodus', { state: { jahrgangId: exam.jahrgangId, kapitelIds: exam.kapitelIds } }) }
  } else if (lastTopic) {
    const inhalt = lerninhalte[lastTopic.id]
    const step = Math.min(last.step ?? 0, inhalt ? inhalt.schritte.length : 0)
    const path = `${last.jahrgangId}/${last.kapitelId}/${last.topicId}`
    headline = titleOf(lastTopic, lang)
    if (inhalt) detail = step >= inhalt.schritte.length ? t('summary') : t('stepOf', { n: step + 1, total: inhalt.schritte.length })
    button = inhalt
      ? { label: t('goOn'), go: () => navigate(`/lernen/${path}`, { state: { step } }) }
      : { label: t('goOn'), go: () => navigate(`/themen/${path}`) }
  } else {
    detail = myYear ? null : t('pickYearCta')
    button = { label: t('startTopics'), go: () => navigate('/themen') }
  }

  return (
    <div className="rounded-blob bg-white shadow-bubbleSm p-5 mb-5">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[13px] font-medium uppercase tracking-wide text-slate-500">{t('todayTitle')}</p>
        {exam && (
          <p className="text-sm font-semibold text-accent-ink">
            {examTypeLabel(t, exam.type)} · {countdownText(t, exam.date)}
          </p>
        )}
      </div>
      {headline && <p className="mt-1 text-lg font-semibold leading-snug text-slate-900">{headline}</p>}
      {detail && <p className="mt-0.5 text-slate-500">{detail}</p>}
      <BubbleButton onClick={button.go} className="mt-4 w-full py-3">
        {button.label}
      </BubbleButton>
    </div>
  )
}
