// ZUSATZFRAGEN – zusätzliche Fragen pro Thema, mit fester Schwierigkeit und neuen Fragearten.
//
// Format je Frage:
//   { type: 'text', level: 1|2|3,
//     de: { q: 'Frage', a: ['akzeptierte Antwort', 'Variante'], e: 'Erklärung' }, en: {…}, hu: {…} }
//     → Begriff selbst eintippen (kleine Tippfehler werden akzeptiert)
//   { type: 'number', level: 2|3, value: 49.09, tol: 0.05, unit: { de: '%', en: '%', hu: '%' },
//     de: { q: 'Frage', e: 'Rechenweg' }, en: {…}, hu: {…} }
//     → Ergebnis ausrechnen und eintippen (Komma oder Punkt; Abweichung bis `tol` ist ok)
//   { type: 'mc', level: 1|2|3, correctIndex: 0,
//     de: { q: 'Frage', o: ['A', 'B', 'C', 'D'], e: 'Erklärung' }, en: {…}, hu: {…} }
//
// level: 1 leicht · 2 mittel · 3 sehr schwer

import jg1 from './jg1.js'
import jg1b from './jg1b.js'
import jg2 from './jg2.js'
import jg2b from './jg2b.js'
import jg2c from './jg2c.js'
import jg2d from './jg2d.js'
import jg3 from './jg3.js'
import jg3b from './jg3b.js'
import jg3c from './jg3c.js'
import jg3d from './jg3d.js'

export const zusatzfragen = { ...jg1, ...jg1b, ...jg2, ...jg2b, ...jg2c, ...jg2d, ...jg3, ...jg3b, ...jg3c, ...jg3d }
