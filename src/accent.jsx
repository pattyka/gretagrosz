import { createContext, useContext, useEffect, useState } from 'react'

// Farbthemen der App (alle in Pastell). Werte als "R G B", damit Tailwind
// Transparenz (z. B. bg-accent/20) darauf anwenden kann.
//   fill: Pastellfarbe für Buttons, Balken, Kacheln
//   ink:  kräftigerer Ton derselben Farbe für Text und Icons auf Weiß
//   on:   dunkler Ton für Schrift auf der Pastellfarbe
//   bg:   ganz zarte Tönung für den Seitenhintergrund
export const ACCENTS = [
  { id: 'blau', swatch: '#93C5FD', fill: '147 197 253', ink: '37 99 235', on: '30 58 138', bg: '239 245 254',
    names: { de: 'Blau', en: 'Blue', hu: 'Kék' } },
  { id: 'gruen', swatch: '#86EFAC', fill: '134 239 172', ink: '21 128 61', on: '20 83 45', bg: '238 248 241',
    names: { de: 'Grün', en: 'Green', hu: 'Zöld' } },
  { id: 'rot', swatch: '#FCA5A5', fill: '252 165 165', ink: '220 38 38', on: '127 29 29', bg: '253 241 241',
    names: { de: 'Rot', en: 'Red', hu: 'Piros' } },
  { id: 'gelb', swatch: '#FDE68A', fill: '253 230 138', ink: '180 83 9', on: '120 53 15', bg: '254 249 232',
    names: { de: 'Gelb', en: 'Yellow', hu: 'Sárga' } },
  { id: 'orange', swatch: '#FDBA74', fill: '253 186 116', ink: '234 88 12', on: '124 45 18', bg: '254 244 234',
    names: { de: 'Orange', en: 'Orange', hu: 'Narancs' } },
  { id: 'rosa', swatch: '#F9A8D4', fill: '249 168 212', ink: '219 39 119', on: '131 24 67', bg: '253 240 247',
    names: { de: 'Rosa', en: 'Pink', hu: 'Rózsaszín' } },
  { id: 'lila', swatch: '#C4B5FD', fill: '196 181 253', ink: '124 58 237', on: '76 29 149', bg: '244 241 254',
    names: { de: 'Lila', en: 'Purple', hu: 'Lila' } },
  { id: 'tuerkis', swatch: '#99F6E4', fill: '153 246 228', ink: '15 118 110', on: '19 78 74', bg: '237 250 247',
    names: { de: 'Türkis', en: 'Turquoise', hu: 'Türkiz' } },
]

const STORAGE_KEY = 'bw-buddy-accent'

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (ACCENTS.some((a) => a.id === v)) return v
  } catch {
    /* Speicher nicht verfügbar – Standard verwenden */
  }
  return 'blau'
}

function setVars(vars) {
  const root = document.documentElement.style
  Object.entries(vars).forEach(([name, value]) => root.setProperty(`--${name}`, value))
}

function apply(id) {
  const a = ACCENTS.find((x) => x.id === id) ?? ACCENTS[0]
  setVars({ accent: a.fill, 'accent-ink': a.ink, 'accent-on': a.on, bg: a.bg, title: '15 23 42', muted: '100 116 139', nav: a.ink })
}

// Überschreibt die Farben, solange eine Seite offen ist (z. B. der rote Testmodus),
// und stellt danach das gewählte Farbthema wieder her.
export function useScreenColors(vars) {
  const { accent } = useContext(AccentContext)
  const key = JSON.stringify(vars)
  useEffect(() => {
    setVars(vars)
    return () => apply(accent)
  }, [key, accent]) // eslint-disable-line react-hooks/exhaustive-deps
}

const AccentContext = createContext({ accent: 'blau', setAccent: () => {} })

export function AccentProvider({ children }) {
  // Farben gleich beim Start setzen (vor den Seiten), damit eine Seite sie danach überschreiben kann.
  const [accent, setAccentState] = useState(() => {
    const id = readStored()
    apply(id)
    return id
  })

  const setAccent = (id) => {
    apply(id)
    setAccentState(id)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      /* ignorieren */
    }
  }

  return <AccentContext.Provider value={{ accent, setAccent }}>{children}</AccentContext.Provider>
}

export function useAccent() {
  return useContext(AccentContext)
}
