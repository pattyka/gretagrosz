import { lerninhalte } from './lerninhalte.js'
import en from './translations/en.js'
import hu from './translations/hu.js'

const TRANSLATIONS = { en, hu }

// Titel eines Kapitels oder Themas in der gewählten Sprache (Fallback: Deutsch).
export function titleOf(item, lang) {
  if (!item) return ''
  return TRANSLATIONS[lang]?.titles?.[item.id] ?? item.title
}

// Lerninhalt eines Themas. `translated` ist false, wenn auf Deutsch zurückgegriffen wird.
export function lerninhaltOf(topicId, lang) {
  const de = lerninhalte[topicId]
  if (lang === 'de' || !de) return { inhalt: de, translated: true }
  const tr = TRANSLATIONS[lang]?.lerninhalte?.[topicId]
  return tr ? { inhalt: tr, translated: true } : { inhalt: de, translated: false }
}

// Quizfragen eines Themas (Fallback: Deutsch).
export function questionsOf(topic, lang) {
  if (!topic) return { questions: [], translated: true }
  if (lang === 'de') return { questions: topic.questions, translated: true }
  const tr = TRANSLATIONS[lang]?.questions?.[topic.id]
  return tr ? { questions: tr, translated: true } : { questions: topic.questions, translated: topic.questions.length === 0 }
}
