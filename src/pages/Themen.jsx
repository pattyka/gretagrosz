import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getJahrgang, getKapitel, getKapitelList, getKapitelTopics, getTopic, jahrgaenge } from '../data/curriculum.js'
import { lerninhalte } from '../data/lerninhalte.js'
import { cardsOfTopic } from '../data/flashcards.js'
import { titleOf } from '../data/translate.js'
import { chapterLink } from '../data/links.js'
import { topicQuestions } from '../data/questions.js'
import { useLang } from '../i18n.jsx'
import { useProgress } from '../progress.jsx'
import Page from '../components/Page.jsx'
import { IconTile, ListGroup, ListRow } from '../components/List.jsx'
import { BookIcon, CardsIcon, CheckCircleIcon } from '../components/Icons.jsx'

// Ein Ablauf für alles: Jahrgang (einmal gewählt) → Kapitel → Thema → Lernen / Üben / Karteikarten.

const cardIds = (topicId) => cardsOfTopic(topicId, 'de').map((c) => c.id)

// Kleines ✓ für Erledigtes (gelesen, Üben geschafft, alle Karteikarten gewusst)
function Done() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-ink" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-label="✓">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

// Ein Thema gilt als gelesen, wenn die Zusammenfassung erreicht wurde.
const isRead = (done, topicId) => Boolean(done[`summary:${topicId}`])

// /themen – öffnet direkt den eigenen Jahrgang; beim ersten Mal wird er hier gewählt.
export function ThemenStart() {
  const navigate = useNavigate()
  const { t } = useLang()
  const { myYear, setMyYear } = useProgress()

  if (myYear && getJahrgang(myYear)) return <Navigate to={`/themen/${myYear}`} replace />

  return (
    <Page title={t('topics')} subtitle={t('pickYearSub')}>
      <ListGroup header={t('chooseYear')}>
        {jahrgaenge.map((j) => (
          <ListRow
            key={j.id}
            title={t('yearLabel', { n: j.id })}
            onClick={() => {
              setMyYear(j.id)
              navigate(`/themen/${j.id}`)
            }}
          />
        ))}
      </ListGroup>
    </Page>
  )
}

// Schalter [1][2][3][4][5] zum schnellen Wechseln des Jahrgangs (wie ein iOS-Segmented-Control).
function YearSwitcher({ current }) {
  const navigate = useNavigate()
  const { setMyYear } = useProgress()
  return (
    <div className="mb-6 flex rounded-xl bg-black/[0.06] p-1">
      {jahrgaenge.map((j) => {
        const active = String(j.id) === String(current)
        return (
          <button
            key={j.id}
            onClick={() => {
              setMyYear(j.id)
              navigate(`/themen/${j.id}`, { replace: true })
            }}
            className={`flex-1 rounded-lg py-2.5 text-[15px] font-semibold transition-colors ${
              active ? 'bg-white text-slate-900 shadow-bubbleSm' : 'text-slate-500'
            }`}
          >
            {j.id}
          </button>
        )
      })}
    </div>
  )
}

// /themen/:jahrgangId – Kapitel des Jahrgangs (bei nur einem Kapitel gleich dessen Themen)
export function ThemenJahrgang() {
  const { jahrgangId } = useParams()
  const navigate = useNavigate()
  const { lang, t } = useLang()
  const { done } = useProgress()
  const jahrgang = getJahrgang(jahrgangId)

  if (!jahrgang) {
    return (
      <Page title={t('topics')}>
        <p className="text-slate-500">{t('noYear')}</p>
      </Page>
    )
  }

  const kapitelList = getKapitelList(jahrgangId)
  const chapterRead = (k) => {
    const withContent = getKapitelTopics(jahrgang.id, k.id).filter((x) => lerninhalte[x.id])
    return withContent.length > 0 && withContent.every((x) => isRead(done, x.id))
  }

  return (
    <Page title={t('yearLabel', { n: jahrgang.id })}>
      <YearSwitcher current={jahrgang.id} />
      {kapitelList.length === 1 ? (
        <TopicList jahrgang={jahrgang} kapitel={kapitelList[0]} />
      ) : (
        <ListGroup header={t('chooseChapter')}>
          {kapitelList.map((kapitel) => (
            <ListRow
              key={kapitel.id}
              title={titleOf(kapitel, lang)}
              right={chapterRead(kapitel) ? <Done /> : null}
              onClick={() => navigate(`/themen/${jahrgang.id}/${kapitel.id}`)}
            />
          ))}
        </ListGroup>
      )}
    </Page>
  )
}

// Themenliste eines Kapitels plus "Ganzes Kapitel" (Kapitel-Quiz, alle Karten)
function TopicList({ jahrgang, kapitel }) {
  const navigate = useNavigate()
  const { lang, t } = useLang()
  const { done } = useProgress()
  const topics = getKapitelTopics(jahrgang.id, kapitel.id)
  const totalQuestions = topics.reduce((sum, x) => sum + topicQuestions(jahrgang.id, kapitel.id, x, 'de').length, 0)
  const cardTopics = topics.filter((x) => cardIds(x.id).length > 0)
  const base = `/themen/${jahrgang.id}/${kapitel.id}`
  const showWhole = topics.length > 1 && (totalQuestions > 0 || cardTopics.length > 1)

  return (
    <>
      <ListGroup header={t('topicsHeader')}>
        {topics.map((topic) => (
          <ListRow
            key={topic.id}
            title={titleOf(topic, lang)}
            right={isRead(done, topic.id) ? <Done /> : null}
            onClick={() => navigate(`${base}/${topic.id}`)}
          />
        ))}
      </ListGroup>

      {showWhole && (
        <ListGroup header={t('wholeChapterHeader')}>
          {totalQuestions > 0 && (
            <ListRow
              title={t('chapterQuiz')}
              left={<IconTile><CheckCircleIcon className="h-5 w-5" /></IconTile>}
              onClick={() => navigate(`/ueben/${jahrgang.id}/${kapitel.id}/gesamt`)}
            />
          )}
          {cardTopics.length > 1 && (
            <ListRow
              title={t('allChapterCards')}
              left={<IconTile><CardsIcon className="h-5 w-5" /></IconTile>}
              onClick={() => navigate(`/karten/${jahrgang.id}/${kapitel.id}/gesamt`)}
            />
          )}
        </ListGroup>
      )}
    </>
  )
}

// /themen/:jahrgangId/:kapitelId – Themen eines Kapitels
export function ThemenKapitel() {
  const { jahrgangId, kapitelId } = useParams()
  const { lang, t } = useLang()
  const jahrgang = getJahrgang(jahrgangId)
  const kapitel = getKapitel(jahrgangId, kapitelId)

  if (!jahrgang || !kapitel) {
    return (
      <Page title={t('topics')} back="/themen">
        <p className="text-slate-500">{t('noChapter')}</p>
      </Page>
    )
  }

  return (
    <Page title={titleOf(kapitel, lang)} back={`/themen/${jahrgang.id}`}>
      <TopicList jahrgang={jahrgang} kapitel={kapitel} />
    </Page>
  )
}

// /themen/:jahrgangId/:kapitelId/:topicId – ein Thema: Lernen, Üben oder Karteikarten
export function ThemaSeite() {
  const { jahrgangId, kapitelId, topicId } = useParams()
  const navigate = useNavigate()
  const { lang, t } = useLang()
  const { done, cards } = useProgress()
  const jahrgang = getJahrgang(jahrgangId)
  const kapitel = getKapitel(jahrgangId, kapitelId)
  const topic = getTopic(jahrgangId, topicId)

  if (!jahrgang || !kapitel || !topic) {
    return (
      <Page title={t('topics')} back="/themen">
        <p className="text-slate-500">{t('noTopic')}</p>
      </Page>
    )
  }

  const backTo = chapterLink(jahrgang.id, kapitel.id)
  const path = `${jahrgang.id}/${kapitel.id}/${topic.id}`
  const inhalt = lerninhalte[topic.id]
  const questionCount = topicQuestions(jahrgang.id, kapitel.id, topic, 'de').length
  const ids = cardIds(topic.id)
  const allCardsKnown = ids.length > 0 && ids.every((id) => cards[id])

  return (
    <Page title={titleOf(topic, lang)} back={backTo}>
      <ListGroup header={t('whatToDo')}>
        <ListRow
          title={t('learn')}
          subtitle={inhalt ? null : t('comingSoonShort')}
          left={<IconTile><BookIcon className="h-5 w-5" /></IconTile>}
          disabled={!inhalt}
          right={isRead(done, topic.id) ? <Done /> : null}
          onClick={() => navigate(`/lernen/${path}`)}
        />
        <ListRow
          title={t('practice')}
          subtitle={questionCount > 0 ? null : t('comingSoonShort')}
          left={<IconTile><CheckCircleIcon className="h-5 w-5" /></IconTile>}
          disabled={questionCount === 0}
          right={done[`quizpass:${jahrgang.id}|${topic.id}`] ? <Done /> : null}
          onClick={() => navigate(`/ueben/${path}`)}
        />
        <ListRow
          title={t('flashcards')}
          subtitle={ids.length > 0 ? null : t('comingSoonShort')}
          left={<IconTile><CardsIcon className="h-5 w-5" /></IconTile>}
          disabled={ids.length === 0}
          right={allCardsKnown ? <Done /> : null}
          onClick={() => navigate(`/karten/${path}`)}
        />
      </ListGroup>
    </Page>
  )
}

// Alte Adressen (/lernen/2, /ueben/2/kapitel …) führen auf die neuen Themen-Seiten.
export function ToThemen() {
  const { jahrgangId, kapitelId } = useParams()
  const to = ['/themen', jahrgangId, kapitelId].filter(Boolean).join('/')
  return <Navigate to={to} replace />
}
