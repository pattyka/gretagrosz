// Wo was auf der Insel steht (Grundriss-Einheiten, 1 Einheit = 1 Kachel, Höhe 1 = 1 Stockwerk).
// x läuft auf dem Bildschirm nach rechts unten, y nach links unten, (0,0) ist die hintere Ecke.
// Die Insel ist immer quadratisch [a, b] × [a, b] und wächst mit der Stufe; die Kamera rahmt sie ein.

// island: [a, b] · frame: sichtbarer Inhalt der fertigen Szene in px [links, oben, rechts, unten]
// (mit getBBox gemessen; nach größeren Änderungen an der Zeichnung neu messen)
export const STAGES = [
  { island: [3.4, 8.6], frame: [-104, 51, 104, 194] }, // 0 Marktstand
  { island: [2.8, 9.2], frame: [-128, 13, 128, 206] }, // 1 eigener Laden
  { island: [2.8, 9.2], frame: [-128, 13, 128, 206] }, // 2 Schaufenster
  { island: [2.4, 10.6], frame: [-164, 13, 164, 234] }, // 3 Café-Ecke
  { island: [0.8, 11.2], frame: [-208, 1, 208, 246] }, // 4 Bonbonküche
  { island: [0, 12], frame: [-250, -16, 250, 262] }, // 5 Online-Shop & Lieferwagen
  { island: [0, 12], frame: [-250, -16, 250, 262] }, // 6 zweite Filiale
  { island: [0, 12], frame: [-250, -114, 250, 262] }, // 7 Candy-Imperium
]

// Grundflächen. Fassaden (Tür, Schaufenster) liegen immer auf der linken Vorderseite (+y).
export const SLOTS = {
  stall: { x: 5.1, y: 5.3, w: 1.8, d: 1.2 }, // Stufe 0
  shop: { x: 4, y: 4, w: 3.5, d: 3, h: 3 }, // ab Stufe 1, Stufe 7: höher
  plaza: { x: 3.4, y: 7, w: 4.6, d: 2.4 }, // Platz vor dem Laden
  cafe: { x: 7.5, y: 4.4, w: 2.6, d: 2.6, h: 2 }, // ab Stufe 3, rechts am Laden
  terrace: { x: 7.7, y: 7.2, w: 2.6, d: 2 }, // Café-Tische
  factory: { x: 7.4, y: 1.1, w: 3.4, d: 3, h: 2.6 }, // ab Stufe 4, hinten rechts
  road: { x: 0, y: 10, w: 12, d: 1.6 }, // ab Stufe 5, vorne links entlang
  lockers: { x: 9.2, y: 9.2, w: 1.6, d: 0.6, h: 1.2 }, // Abholstation, Stufe 5
  branch: { x: 0.8, y: 6.2, w: 2.6, d: 2.6, h: 2.4 }, // ab Stufe 6, links
  park: { x: 0.6, y: 0.6, w: 3, d: 5 }, // hinten links: Bäume, Stufe 7 Ballon darüber
}

export const THICKNESS = 0.9 // Dicke der Insel in Stockwerken

// viewBox, die den Inhalt einer Stufe mit etwas Luft einrahmt, immer im Format 7:5,
// damit die Karte auf der Startseite beim Aufstieg nicht springt.
export const ASPECT = 7 / 5

export function cameraFor(stage) {
  const [l, t, r, b] = STAGES[stage].frame
  const pad = (r - l) * 0.05
  let w = r - l + 2 * pad
  let h = b - t + 2 * pad + 8 // etwas mehr Luft oben für aufsteigende Rauchwolken und Bestellungen
  if (h * ASPECT > w) w = h * ASPECT
  else h = w / ASPECT
  const cx = (l + r) / 2
  const cy = (t + b) / 2 - 4
  return [cx - w / 2, cy - h / 2, w, h]
}
