import { lerninhalte } from './lerninhalte.js'
import { lerninhaltOf } from './translate.js'

// Karteikarten entstehen automatisch aus den "begriff"-Blöcken der Lerninhalte.
// Die ID nutzt die Position im deutschen Inhalt, damit der Fortschritt in allen
// Sprachen derselbe bleibt (Übersetzungen haben dieselbe Struktur).
export function cardsOfTopic(topicId, lang) {
  const de = lerninhalte[topicId]
  if (!de) return []
  const { inhalt } = lerninhaltOf(topicId, lang)
  const cards = []
  de.schritte.forEach((schritt, s) => {
    schritt.blocks.forEach((block, b) => {
      if (block.type !== 'begriff') return
      const shown = inhalt.schritte[s]?.blocks[b] ?? block
      cards.push({
        id: `${topicId}#${cards.length}`,
        topicId,
        term: shown.term,
        erklaerung: shown.erklaerung,
        beispiel: shown.beispiel,
        deTerm: block.term,
      })
    })
  })
  return cards
}

export function hasCards(topicId) {
  return cardsOfTopic(topicId, 'de').length > 0
}
