import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getJahrgang, getKapitel, getTopic } from '../data/curriculum.js'
import { theme } from '../theme.js'
import Page from '../components/Page.jsx'
import BubbleButton from '../components/BubbleButton.jsx'
import { titleOf } from '../data/translate.js'
import { chapterQuestions, correctAnswerText, isCorrect as checkAnswer, questionByRef, refKey, topicQuestions } from '../data/questions.js'
import AnswerInput from '../components/AnswerInput.jsx'
import { useLang } from '../i18n.jsx'
import { XP, useProgress } from '../progress.jsx'
import { chapterLink, topicLink } from '../data/links.js'

const OPTION_LETTERS = ['A', 'B', 'C', 'D']

// mode="fehler": Fragen aus dem Fehlerheft wiederholen (Route /fehler)
export default function Quiz({ mode }) {
  const { jahrgangId, kapitelId, topicId } = useParams()
  const navigate = useNavigate()
  const { lang, t: tr } = useLang()
  const { award, setLast, recordAnswer, mistakes } = useProgress()
  const isFehler = mode === 'fehler'
  const jahrgang = isFehler ? { color: 'pink' } : getJahrgang(jahrgangId)
  const kapitel = getKapitel(jahrgangId, kapitelId)
  const isGesamt = topicId === 'gesamt'
  const topic = isFehler ? { id: 'fehler' } : isGesamt ? kapitel && { id: 'gesamt' } : getTopic(jahrgangId, topicId)

  // Im Fehlerheft wird die Liste beim Start festgehalten (richtige Antworten entfernen Fragen sonst sofort).
  const [fehlerRefs, setFehlerRefs] = useState(() => (isFehler ? Object.values(mistakes) : []))
  const questions = isFehler
    ? fehlerRefs.map((r) => questionByRef(r, lang)).filter(Boolean)
    : isGesamt
    ? kapitel ? chapterQuestions(jahrgangId, kapitelId, lang) : []
    : topicQuestions(jahrgangId, kapitelId, topic, lang)
  const topicTitle = isFehler ? tr('mistakesTitle') : isGesamt ? titleOf(kapitel, lang) : titleOf(topic, lang)
  const themenLink = isFehler ? '/' : topicLink(jahrgangId, kapitelId, topicId)

  const [index, setIndex] = useState(0)

  // Für "Weitermachen" auf der Startseite (nicht beim ganzen Kapitel)
  useEffect(() => {
    if (!isFehler && !isGesamt && getTopic(jahrgangId, topicId)) setLast({ jahrgangId: Number(jahrgangId), kapitelId, topicId })
  }, [topicId]) // eslint-disable-line react-hooks/exhaustive-deps
  // selected: gewählte Antwort (Index bei Multiple Choice, Text/Zahl bei Eingabefragen); null = noch offen
  const [selected, setSelected] = useState(null)
  const [typed, setTyped] = useState('')
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const total = questions.length
  const question = questions[index]
  const t = theme(jahrgang?.color)

  const isTyped = question && (question.type === 'text' || question.type === 'number')
  const isCorrect = selected !== null && question && checkAnswer(question, selected)

  const handleSelect = (answer) => {
    if (selected !== null) return
    setSelected(answer)
    const correct = checkAnswer(question, answer)
    recordAnswer(question.ref, correct)
    if (correct) {
      setScore((s) => s + 1)
      award(`quiz:${refKey(question.ref)}`, XP.quiz)
    }
  }

  const handleNext = () => {
    if (index + 1 >= total) {
      if (!isFehler && !isGesamt && score / total >= 0.8) award(`quizpass:${jahrgangId}|${topicId}`, 0)
      setFinished(true)
    } else {
      setIndex((idx) => idx + 1)
      setSelected(null)
      setTyped('')
    }
  }

  const handleRestart = () => {
    if (isFehler) setFehlerRefs(Object.values(mistakes))
    setIndex(0)
    setSelected(null)
    setTyped('')
    setScore(0)
    setFinished(false)
  }

  if (!jahrgang || !topic) {
    return (
      <Page title={tr('practice')} back="/themen">
        <p className="text-slate-500">{tr('topicNotFound')}</p>
      </Page>
    )
  }

  if (total === 0) {
    return (
      <Page title={topicTitle} back={themenLink}>
        <p className="text-slate-500">{isFehler ? tr('mistakesEmpty') : tr('noQuestions')}</p>
      </Page>
    )
  }

  if (finished) {
    const pct = Math.round((score / total) * 100)
    return (
      <Page title={topicTitle} back={themenLink} inline>
      <div className="flex flex-col items-center pt-16 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-lg font-bold mb-4 px-4 py-1 rounded-full ${t.soft} ${t.text}`}
        >
          {pct >= 80 ? tr('greatJob') : pct >= 50 ? tr('goodJob') : tr('keepGoing')}
        </motion.div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          {tr('scoreOf', { score, total })}
        </h1>
        <p className="text-slate-500 mb-8">{pct}% – {topicTitle}</p>
        <div className="flex gap-4">
          <BubbleButton
            variant="ghost"
            onClick={() => navigate(isFehler ? '/' : chapterLink(jahrgangId, kapitelId))}
            className="px-6 py-3"
          >
            {isFehler ? tr('toHome') : tr('otherTopics')}
          </BubbleButton>
          <BubbleButton gradient={t.gradient} onClick={handleRestart} className="px-6 py-3">
            {tr('again')}
          </BubbleButton>
        </div>
      </div>
      </Page>
    )
  }

  return (
    <Page
      title={topicTitle}
      back={themenLink}
      inline
      sticky={
        selected !== null ? (
          <BubbleButton onClick={handleNext} className="w-full py-3">
            {index + 1 >= total ? tr('showResult') : tr('next')}
          </BubbleButton>
        ) : (
          isTyped && (
            <BubbleButton disabled={!typed.trim()} onClick={() => handleSelect(typed.trim())} className="w-full py-3">
              {tr('check')}
            </BubbleButton>
          )
        )
      }
    >
      <div className="w-full">
        <div className="mb-6 flex items-center justify-end text-sm font-semibold text-slate-500">
          <span>{tr('questionOf', { n: index + 1, total })}</span>
        </div>

        <div className="mb-8 h-3 w-full rounded-full bg-white shadow-inner overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${t.gradient}`}
            initial={false}
            animate={{ width: `${((index + (selected !== null ? 1 : 0)) / total) * 100}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            <div className="rounded-blob bg-white shadow-bubble p-6 sm:p-8 mb-6">
              <h2 className="whitespace-pre-line text-xl sm:text-2xl font-bold text-slate-800">{question.question}</h2>
            </div>

            {isTyped && (
              <AnswerInput
                question={question}
                value={typed}
                onChange={setTyped}
                onSubmit={() => typed.trim() && handleSelect(typed.trim())}
                locked={selected !== null}
                state={selected === null ? null : isCorrect ? 'right' : 'wrong'}
              />
            )}

            <div className="flex flex-col gap-3">
              {!isTyped && question.options.map((option, i) => {
                const chosen = selected === i
                const showCorrect = selected !== null && i === question.correctIndex
                const showWrong = chosen && !isCorrect

                let stateClasses = 'bg-white border-slate-100 hover:border-slate-200'
                if (showCorrect) stateClasses = 'bg-emerald-100 border-emerald-400'
                else if (showWrong) stateClasses = 'bg-rose-100 border-rose-400'

                return (
                  <motion.button
                    key={i}
                    onClick={() => handleSelect(i)}
                    whileTap={selected === null ? { scale: 0.98 } : {}}
                    disabled={selected !== null}
                    className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left font-body font-semibold text-slate-700 shadow-bubbleSm transition-colors ${stateClasses}`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        showCorrect
                          ? 'bg-emerald-400 text-white'
                          : showWrong
                          ? 'bg-rose-400 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {OPTION_LETTERS[i]}
                    </span>
                    {option}
                  </motion.button>
                )
              })}
            </div>

            {selected !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-5 rounded-2xl p-4 text-sm ${
                  isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                }`}
              >
                <p className="font-bold mb-1">{isCorrect ? tr('correct') : tr('notQuite')}</p>
                {isTyped && !isCorrect && (
                  <p className="mb-1">
                    <span className="font-semibold">{tr('rightAnswer')}</span> {correctAnswerText(question, lang)}
                  </p>
                )}
                <p>{question.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </Page>
  )
}
