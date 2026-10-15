import { getKapitelList } from './curriculum.js'

// Adressen der Themen-Seiten. Bei Jahrgängen mit nur einem Kapitel gibt es keine
// eigene Kapitelseite – dann zeigt die Jahrgangsseite die Themen direkt.
export function chapterLink(jahrgangId, kapitelId) {
  return getKapitelList(jahrgangId).length > 1 ? `/themen/${jahrgangId}/${kapitelId}` : `/themen/${jahrgangId}`
}

// Zurück zur Themenseite – oder zur Kapitelseite beim ganzen Kapitel ("gesamt").
export function topicLink(jahrgangId, kapitelId, topicId) {
  return topicId === 'gesamt' ? chapterLink(jahrgangId, kapitelId) : `/themen/${jahrgangId}/${kapitelId}/${topicId}`
}
