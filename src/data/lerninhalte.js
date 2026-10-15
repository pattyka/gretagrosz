// LERNINHALTE
// Pro Thema (topicId aus curriculum.js) eine Reihe kurzer Lernschritte plus eine
// Zusammenfassung zum schnellen Wiederholen vor Schularbeit / LZK.
// Inhalte basieren auf dem Trauner "come grow with me" Buch, in einfachen
// Worten erklärt. Themen ohne Eintrag zeigen in der App "kommt bald".
//
// Block-Typen in einem Schritt:
//   { type: 'text', text }
//   { type: 'begriff', term, erklaerung, beispiel? }
//   { type: 'merke', text }
//   { type: 'pyramide', stufen: [{ name, beispiel }] }   (oben → unten)
//   { type: 'vergleich', links: { titel, punkte }, rechts: { titel, punkte } }
//   { type: 'kette', glieder: [{ titel, wert }] }
//   { type: 'entscheidung', titel, schritte: [{ frage, links, rechts }] }
//       links/rechts: { antwort, ergebnis, beispiel } oder { antwort, weiter }
//   { type: 'prinzip', minimal, maximal }   (Beispiele als Text)
//   { type: 'kreislaufDiagramm' }
//   { type: 'ablauf', titel?, schritte: [{ titel, text? }] }   (nummerierte Reihenfolge)
//   { type: 'tabelle', spalten: [...], zeilen: [[...]] }
//   { type: 'zyklus', mitte, schritte: ['…'] }   (wiederkehrender Kreislauf)
//   { type: 'marktdiagramm' }
//   { type: 'formel', name, zaehler, nenner, faktor?, beispiel? }
//   { type: 'organe', oben, links, rechts: { name, punkte }, pfeile: { links, rechts, unten } }
//   { type: 'transportweg', titel, stationen: [4 Orte], risiko: index, kosten: index }   (Angebots-/Nachfragekurve mit Gleichgewicht)

import jg1 from './lerninhalte/jg1.js'
import jg2 from './lerninhalte/jg2.js'
import jg3 from './lerninhalte/jg3.js'

export const lerninhalte = { ...jg1, ...jg2, ...jg3 }

export function getLerninhalt(topicId) {
  return lerninhalte[topicId]
}
