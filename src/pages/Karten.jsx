import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getJahrgang, getKapitel, getKapitelTopics } from '../data/curriculum.js'
import { cardsOfTopic } from '../data/flashcards.js'
import { titleOf } from '../data/translate.js'
import { useLang } from '../i18n.jsx'
import { useProgress } from '../progress.jsx'
import { theme } from '../theme.js'
import { chapterLink, topicLink } from '../data/links.js'
import Page from '../components/Page.jsx'
import BubbleButton from '../components/BubbleButton.jsx'
import DeTerm from '../components/DeTerm.jsx'

function shuffle(list) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// /karten/:jahrgangId/:kapitelId/:topicId – der Kartenstapel ("gesamt" = ganzes Kapitel)
export function KartenDeck() {
  const { jahrgangId, kapitelId, topicId } = useParams()
  const navigate = useNavigate()
  const { lang, t: tr } = useLang()
  const { cards: knownCards, setCard, setLast } = useProgress()
  const jahrgang = getJahrgang(jahrgangId)
  const kapitel = getKapitel(jahrgangId, kapitelId)
  const isGesamt = topicId === 'gesamt'
  const topics = kapitel ? (isGesamt ? getKapitelTopics(jahrgangId, kapitelId) : getKapitelTopics(jahrgangId, kapitelId).filter((x) => x.id === topicId)) : []
  const title = isGesamt ? titleOf(kapitel, lang) : titleOf(topics[0], lang)
  const backTo = topicLink(jahrgangId, kapitelId, topicId)

  // Für "Weitermachen" auf der Startseite (nicht beim ganzen Kapitel)
  useEffect(() => {
    if (!isGesamt && topics.length) setLast({ jahrgangId: Number(jahrgangId), kapitelId, topicId })
  }, [topicId]) // eslint-disable-line react-hooks/exhaustive-deps

  const deck = useMemo(() => topics.flatMap((x) => cardsOfTopic(x.id, lang)), [topicId, kapitelId, lang]) // eslint-disable-line react-hooks/exhaustive-deps
  const byId = useMemo(() => Object.fromEntries(deck.map((c) => [c.id, c])), [deck])

  // Ungewusste Karten zuerst, jeweils gemischt.
  const startOrder = (ids) => [...shuffle(ids.filter((id) => !knownCards[id])), ...shuffle(ids.filter((id) => knownCards[id]))]
  const [queue, setQueue] = useState(() => startOrder(deck.map((c) => c.id)))
  const [round, setRound] = useState({ total: deck.length, missed: [] })
  const [flipped, setFlipped] = useState(false)
  const [exitDir, setExitDir] = useState(0)
  const [turn, setTurn] = useState(0)

  if (!jahrgang || !kapitel || deck.length === 0) {
    return (
      <Page title={tr('flashcards')} back={backTo}>
        <p className="text-slate-500">{tr('noCards')}</p>
      </Page>
    )
  }

  const t = theme(jahrgang.color)
  const current = byId[queue[0]]

  const answer = (known) => {
    if (!current) return
    setExitDir(known ? 1 : -1)
    setTurn((n) => n + 1)
    setCard(current.id, known)
    setFlipped(false)
    if (known) {
      setQueue((q) => q.slice(1))
    } else {
      setRound((r) => (r.missed.includes(current.id) ? r : { ...r, missed: [...r.missed, current.id] }))
      setQueue((q) => [...q.slice(1), q[0]])
    }
  }

  const restart = (ids) => {
    setQueue(startOrder(ids))
    setRound({ total: ids.length, missed: [] })
    setFlipped(false)
  }

  if (!current) {
    const first = round.total - round.missed.length
    return (
      <Page title={title} back={backTo} inline>
      <div className="flex flex-col items-center pt-16 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-4xl font-bold text-accent-on shadow-bubble`}
        >
          ✓
        </motion.div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{tr('deckDone')}</h1>
        <p className="text-slate-500 mb-8 max-w-sm">{tr('deckDoneText', { first, total: round.total })}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <BubbleButton variant="ghost" onClick={() => navigate(chapterLink(jahrgangId, kapitelId))} className="px-6 py-3">
            {tr('otherTopics')}
          </BubbleButton>
          {round.missed.length > 0 && (
            <BubbleButton variant="ghost" onClick={() => restart(round.missed)} className="px-6 py-3">
              {tr('onlyUnknown')}
            </BubbleButton>
          )}
          <BubbleButton gradient={t.gradient} onClick={() => restart(deck.map((c) => c.id))} className="px-6 py-3">
            {tr('studyAgain')}
          </BubbleButton>
        </div>
      </div>
      </Page>
    )
  }

  const done = round.total - queue.length

  return (
    <Page title={title} back={backTo} inline>
      <div className="mx-auto w-full max-w-md">
        <div className="mb-3 flex items-center justify-end gap-4 text-sm font-semibold text-slate-500">
          <span className="shrink-0">{tr('cardsLeft', { n: queue.length })}</span>
        </div>
        <div className="mb-8 h-3 w-full rounded-full bg-white shadow-inner overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${t.gradient}`}
            initial={false}
            animate={{ width: `${(done / round.total) * 100}%` }}
          />
        </div>

        <div className="relative h-[380px]" style={{ perspective: 1200 }}>
          <AnimatePresence custom={exitDir} initial={false}>
            <motion.div
              key={turn}
              custom={exitDir}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0, rotate: 0 }}
              exit={(dir) => ({ opacity: 0, x: dir * 320, rotate: dir * 12, transition: { duration: 0.3 } })}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(_, info) => {
                if (info.offset.x > 110) answer(true)
                else if (info.offset.x < -110) answer(false)
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <motion.div
                onClick={() => setFlipped((f) => !f)}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.45 }}
                className="relative h-full w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Vorderseite: Begriff */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-blob bg-white shadow-bubble p-8 text-center"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  {isGesamt && (
                    <span className="text-xs font-semibold text-slate-400">{titleOf(topics.find((x) => x.id === current.topicId), lang)}</span>
                  )}
                  <span className={`text-3xl font-bold leading-tight ${t.text}`}>{current.term}</span>
                  <DeTerm term={current.deTerm} shown={current.term} />
                  <span className="absolute bottom-6 text-sm text-slate-400">{tr('tapToFlip')}</span>
                </div>

                {/* Rückseite: Erklärung */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center gap-3 rounded-blob bg-gradient-to-br ${t.gradient} p-7 text-accent-on shadow-bubble overflow-y-auto`}
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <span className="text-xl font-bold">{current.term}</span>
                  <p className="leading-relaxed">{current.erklaerung}</p>
                  {current.beispiel && (
                    <p className="text-sm opacity-90">
                      <span className="font-bold">{tr('example')}</span> {current.beispiel}
                    </p>
                  )}
                  <div>
                    <DeTerm term={current.deTerm} shown={current.term} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">{tr('swipeHint')}</p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <BubbleButton variant="ghost" onClick={() => answer(false)} className="py-4">
            {tr('notYet')}
          </BubbleButton>
          <BubbleButton gradient={t.gradient} onClick={() => answer(true)} className="py-4">
            {tr('knewIt')}
          </BubbleButton>
        </div>
      </div>
    </Page>
  )
}
