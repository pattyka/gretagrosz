import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { levelOf } from './data/shop.js'
import { refKey } from './data/questions.js'

// Lernfortschritt (XP, Streak, gewusste Karteikarten) – nur im Browser gespeichert.
// XP gibt es für jede Aktion nur einmal (Schlüssel in `done`), damit man nicht "farmen" kann.

const STORAGE_KEY = 'bw-buddy-progress'
// myYear: gewählter Jahrgang · last: zuletzt geöffnetes Thema (für „Weitermachen“)
// mistakes: falsch beantwortete Fragen (Fehlerheft) · results: letzte Antworten je Thema (schwache Themen)
// exams: eingetragene Schularbeiten / LZKs
const EMPTY = {
  xp: 0, done: {}, cards: {}, streak: { day: null, count: 0 }, myYear: null, last: null,
  mistakes: {}, results: {}, exams: [],
  onboarded: false, // Ersteinrichtung (Jahrgang, Sprache, Farbe) erledigt
}

export const XP = { step: 5, summary: 20, quiz: 3, card: 2 }

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const saved = JSON.parse(raw)
      // Wer schon einen Jahrgang gewählt hatte, braucht die Ersteinrichtung nicht mehr.
      return { ...EMPTY, ...saved, onboarded: saved.onboarded ?? Boolean(saved.myYear) }
    }
  } catch {
    /* Speicher nicht verfügbar – leer starten */
  }
  return EMPTY
}

function dayString(date) {
  const d = new Date(date)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function nextStreak(streak) {
  const today = dayString(Date.now())
  if (streak.day === today) return streak
  const yesterday = dayString(Date.now() - 86400000)
  return { day: today, count: streak.day === yesterday ? streak.count + 1 : 1 }
}

// Aktuelle Streak: zählt nur, wenn heute oder gestern gelernt wurde.
export function currentStreak(streak) {
  const today = dayString(Date.now())
  const yesterday = dayString(Date.now() - 86400000)
  return streak.day === today || streak.day === yesterday ? streak.count : 0
}

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const [state, setState] = useState(readStored)
  const [levelUp, setLevelUp] = useState(null)
  const prevLevel = useRef(levelOf(state.xp).index)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* ignorieren */
    }
    const level = levelOf(state.xp).index
    if (level > prevLevel.current) setLevelUp(level)
    prevLevel.current = level
  }, [state])

  // Vergibt XP für `key`, aber nur beim ersten Mal.
  const award = useCallback((key, amount) => {
    setState((s) => {
      if (s.done[key]) return s
      return { ...s, xp: s.xp + amount, done: { ...s.done, [key]: 1 }, streak: nextStreak(s.streak) }
    })
  }, [])

  // Karteikarte als gewusst / nicht gewusst markieren.
  const setCard = useCallback(
    (cardId, known) => {
      setState((s) => {
        const cards = { ...s.cards }
        if (known) cards[cardId] = 1
        else delete cards[cardId]
        return { ...s, cards }
      })
      if (known) award(`card:${cardId}`, XP.card)
    },
    [award],
  )

  const setMyYear = useCallback((year) => setState((s) => ({ ...s, myYear: Number(year) })), [])
  const finishOnboarding = useCallback(() => setState((s) => ({ ...s, onboarded: true })), [])

  // Merkt sich das zuletzt geöffnete Thema. Der Lernschritt bleibt erhalten,
  // wenn dasselbe Thema später über Üben oder Karteikarten geöffnet wird.
  const setLast = useCallback((entry) => {
    setState((s) => {
      const same = s.last && s.last.topicId === entry.topicId
      const last = { ...(same ? s.last : {}), ...entry }
      if (same && JSON.stringify(last) === JSON.stringify(s.last)) return s
      return { ...s, last }
    })
  }, [])

  // Eine Quizantwort merken: falsch → ins Fehlerheft, richtig → raus aus dem Fehlerheft.
  // Pro Thema zählen nur die letzten 10 Antworten (für "schwache Themen").
  const recordAnswer = useCallback((ref, correct) => {
    if (!ref) return
    setState((s) => {
      const key = refKey(ref)
      const mistakes = { ...s.mistakes }
      if (correct) delete mistakes[key]
      else mistakes[key] = ref
      const topicKey = `${ref.jahrgangId}|${ref.kapitelId}|${ref.topicId}`
      const prev = s.results[topicKey]?.last ?? []
      const results = {
        ...s.results,
        [topicKey]: { jahrgangId: ref.jahrgangId, kapitelId: ref.kapitelId, topicId: ref.topicId, last: [...prev, correct ? 1 : 0].slice(-10) },
      }
      return { ...s, mistakes, results }
    })
  }, [])

  const addExam = useCallback((exam) => {
    setState((s) => ({ ...s, exams: [...s.exams, { ...exam, id: `${Date.now()}` }].sort((a, b) => a.date.localeCompare(b.date)) }))
  }, [])

  const removeExam = useCallback((id) => {
    setState((s) => ({ ...s, exams: s.exams.filter((e) => e.id !== id) }))
  }, [])

  const value = {
    ...state, award, setCard, setMyYear, finishOnboarding, setLast, recordAnswer, addExam, removeExam,
    levelUp, clearLevelUp: () => setLevelUp(null),
  }
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  return useContext(ProgressContext)
}
