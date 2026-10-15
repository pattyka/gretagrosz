import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getJahrgang, getKapitel, getTopic } from '../data/curriculum.js'
import { lerninhaltOf, titleOf } from '../data/translate.js'
import { lerninhalte } from '../data/lerninhalte.js'
import { topicLink } from '../data/links.js'
import { hasCards } from '../data/flashcards.js'
import { XP, useProgress } from '../progress.jsx'
import DeTerm from '../components/DeTerm.jsx'
import { useLang } from '../i18n.jsx'
import { theme } from '../theme.js'
import Page from '../components/Page.jsx'
import BubbleButton from '../components/BubbleButton.jsx'
import { Ablauf, Entscheidung, Formel, Organe, Kette, KreislaufDiagramm, Marktdiagramm, Prinzip, Tabelle, Transportweg, Zyklus } from '../components/LernDiagramme.jsx'

export default function LernInhalt() {
  const { jahrgangId, kapitelId, topicId } = useParams()
  const navigate = useNavigate()
  const jahrgang = getJahrgang(jahrgangId)
  const kapitel = getKapitel(jahrgangId, kapitelId)
  const topic = getTopic(jahrgangId, topicId)
  const { lang, t: tr } = useLang()
  const { inhalt, translated } = lerninhaltOf(topicId, lang)
  // "Weitermachen" auf der Startseite übergibt den zuletzt gelesenen Schritt.
  const { state: navState } = useLocation()
  const [index, setIndex] = useState(() => navState?.step ?? 0)
  const { award, setLast } = useProgress()
  const deInhalt = lerninhalte[topicId]

  // XP fürs Lesen: jeder Schritt und die Zusammenfassung zählen einmal.
  useEffect(() => {
    if (!inhalt || !topic) return
    if (index === inhalt.schritte.length) award(`summary:${topicId}`, XP.summary)
    else award(`step:${topicId}:${index}`, XP.step)
  }, [index, topicId]) // eslint-disable-line react-hooks/exhaustive-deps

  // Für "Weitermachen": Thema und aktuellen Schritt merken.
  useEffect(() => {
    if (!inhalt || !topic) return
    setLast({ jahrgangId: Number(jahrgangId), kapitelId, topicId, step: index, steps: inhalt.schritte.length })
  }, [index, topicId]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!jahrgang || !kapitel || !topic) {
    return (
      <Page title={tr('learn')} back="/themen">
        <p className="text-slate-500">{tr('noTopic')}</p>
      </Page>
    )
  }

  const themenLink = topicLink(jahrgang.id, kapitel.id, topic.id)

  if (!inhalt) {
    return (
      <Page title={titleOf(topic, lang)} back={themenLink}>
        <p className="text-slate-500">{tr('learnComingSoon')}</p>
      </Page>
    )
  }

  const t = theme(jahrgang.color)
  // Letzter "Schritt" ist immer die Zusammenfassung.
  const total = inhalt.schritte.length + 1
  const isSummary = index === inhalt.schritte.length
  const schritt = inhalt.schritte[index]

  const go = (i) => {
    setIndex(i)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Page
      title={titleOf(topic, lang)}
      back={themenLink}
      inline
      sticky={
        <div className="flex gap-3">
          {index > 0 ? (
            <BubbleButton variant="ghost" onClick={() => go(index - 1)} className="flex-1 py-3">
              {tr('prev')}
            </BubbleButton>
          ) : (
            <span className="flex-1" />
          )}
          {isSummary ? (
            <BubbleButton onClick={() => navigate(`/ueben/${jahrgang.id}/${kapitel.id}/${topic.id}`)} className="flex-1 py-3">
              {tr('practiceNow')}
            </BubbleButton>
          ) : (
            <BubbleButton onClick={() => go(index + 1)} className="flex-1 py-3">
              {index + 1 === total - 1 ? tr('toSummary') : tr('next')}
            </BubbleButton>
          )}
        </div>
      }
    >
      <div className="w-full">
        <div className="mb-3 flex items-center justify-end gap-4 text-sm font-semibold text-muted">
          <span className="shrink-0">
            {isSummary ? tr('summary') : tr('stepOf', { n: index + 1, total: total - 1 })}
          </span>
        </div>

        <div className="mb-8 flex gap-1.5">
          {Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={i === total - 1 ? tr('summary') : tr('step', { n: i + 1 })}
              className={`h-1.5 flex-1 rounded-full transition-colors ${i <= index ? 'bg-accent' : 'bg-black/[0.08]'}`}
            />
          ))}
        </div>

        {!translated && (
          <p className="mb-6 rounded-2xl bg-white/70 px-4 py-2 text-sm text-slate-500">{tr('notTranslated')}</p>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            {isSummary ? (
              <Zusammenfassung abschnitte={inhalt.zusammenfassung} t={t} />
            ) : (
              <>
                <h1 className="text-[28px] font-bold leading-tight tracking-tight text-title mb-5">
                  <span className={t.text}>{index + 1}.</span> {schritt.titel}
                </h1>
                <div className="flex flex-col gap-4">
                  {schritt.blocks.map((block, i) => (
                    <Block key={i} block={block} deBlock={deInhalt?.schritte[index]?.blocks[i]} t={t} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {isSummary && hasCards(topicId) && (
          <BubbleButton
            variant="ghost"
            onClick={() => navigate(`/karten/${jahrgang.id}/${kapitel.id}/${topic.id}`)}
            className="mt-6 w-full px-6 py-3"
          >
            {tr('cardsFromSummary')}
          </BubbleButton>
        )}

      </div>
    </Page>
  )
}

function Block({ block, deBlock, t }) {
  const { t: tr } = useLang()
  switch (block.type) {
    case 'text':
      return <p className="text-slate-600 leading-relaxed">{block.text}</p>

    case 'begriff':
      return (
        <div className="rounded-2xl bg-white shadow-bubbleSm p-5">
          <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className={`text-xl font-bold ${t.text}`}>{block.term}</span>
            <DeTerm term={deBlock?.term} shown={block.term} />
          </div>
          <p className="text-slate-700 leading-relaxed">{block.erklaerung}</p>
          {block.beispiel && (
            <p className="mt-2 text-sm text-slate-500">
              <span className="font-bold">{tr('example')}</span> {block.beispiel}
            </p>
          )}
        </div>
      )

    case 'merke':
      return (
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 text-slate-700">
          <span className="font-bold text-amber-600">{tr('remember')}</span>
          {block.text}
        </div>
      )

    case 'pyramide':
      return (
        <div className="rounded-2xl bg-white shadow-bubbleSm p-5 flex flex-col items-center gap-1.5">
          {block.stufen.map((stufe, i) => {
            const width = 45 + (i * 55) / (block.stufen.length - 1)
            return (
              <div
                key={stufe.name}
                style={{ width: `${width}%` }}
                className={`rounded-xl ${t.soft} px-3 py-2 text-center`}
              >
                <div className="font-bold text-slate-800 leading-tight">
                  {block.stufen.length - i}. {stufe.name}
                </div>
                <div className="text-xs text-slate-500">{stufe.beispiel}</div>
              </div>
            )
          })}
          <p className="mt-2 text-xs text-slate-400">{tr('pyramidHint')}</p>
        </div>
      )

    case 'vergleich':
      return (
        <div>
          {block.frage && <p className="font-bold text-slate-700 mb-2">{block.frage}</p>}
          <div className="grid grid-cols-2 gap-3">
            {[block.links, block.rechts].map((seite) => (
              <div key={seite.titel} className="rounded-2xl bg-white shadow-bubbleSm p-4">
                <div className={`font-bold leading-tight mb-2 ${t.text}`}>{seite.titel}</div>
                <ul className="flex flex-col gap-1.5 text-sm text-slate-600">
                  {seite.punkte.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )

    case 'kette':
      return <Kette glieder={block.glieder} t={t} />

    case 'entscheidung':
      return <Entscheidung titel={block.titel} schritte={block.schritte} t={t} />

    case 'prinzip':
      return <Prinzip minimal={block.minimal} maximal={block.maximal} t={t} />

    case 'kreislaufDiagramm':
      return <KreislaufDiagramm t={t} />

    case 'ablauf':
      return <Ablauf titel={block.titel} schritte={block.schritte} t={t} />

    case 'tabelle':
      return <Tabelle spalten={block.spalten} zeilen={block.zeilen} deZeilen={deBlock?.zeilen} t={t} />

    case 'marktdiagramm':
      return <Marktdiagramm t={t} />

    case 'transportweg':
      return <Transportweg titel={block.titel} stationen={block.stationen} risiko={block.risiko} kosten={block.kosten} t={t} />

    case 'organe':
      return <Organe oben={block.oben} links={block.links} rechts={block.rechts} pfeile={block.pfeile} t={t} />

    case 'formel':
      return <Formel {...block} t={t} />

    case 'zyklus':
      return <Zyklus mitte={block.mitte} schritte={block.schritte} t={t} />

    default:
      return null
  }
}

function Zusammenfassung({ abschnitte, t }) {
  const { t: tr } = useLang()
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-800 mb-1">{tr('summary')}</h1>
      <p className="text-slate-500 mb-5">{tr('summarySub')}</p>
      <div className="flex flex-col gap-4">
        {abschnitte.map((a) => (
          <div key={a.titel} className="rounded-2xl bg-white shadow-bubbleSm p-5">
            <div className={`text-lg font-bold mb-2 ${t.text}`}>{a.titel}</div>
            <ul className="flex flex-col gap-1.5 text-slate-700">
              {a.punkte.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className={t.text}>•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
