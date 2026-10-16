import { useEffect, useState } from 'react'

// Die eine Farbe der App: das Blaugrau von gretagrosz.com. Werte als "R G B",
// damit Tailwind Transparenz (z. B. bg-accent/20) darauf anwenden kann.
//   accent:     Blaugrau #D9E0EA für Buttons, Balken, Kacheln
//   accent-ink: Schiefer #34405A für Text und Icons auf Weiß
//   accent-on:  Navy #262E40 für Schrift auf dem Blaugrau
//   bg:         zartes Grau #F4F6F9 für den Seitenhintergrund
const COLORS = {
  accent: '217 224 234',
  'accent-ink': '52 64 90',
  'accent-on': '38 46 64',
  bg: '244 246 249',
  title: '38 46 64',
  muted: '84 95 120',
  nav: '52 64 90',
}

function setVars(vars) {
  const root = document.documentElement.style
  Object.entries(vars).forEach(([name, value]) => root.setProperty(`--${name}`, value))
}

function apply() {
  setVars(COLORS)
}

// Überschreibt die Farben, solange eine Seite offen ist (z. B. der rote Testmodus),
// und stellt danach die normalen Farben wieder her.
export function useScreenColors(vars) {
  const key = JSON.stringify(vars)
  useEffect(() => {
    setVars(vars)
    return apply
  }, [key]) // eslint-disable-line react-hooks/exhaustive-deps
}

export function AccentProvider({ children }) {
  // Farben gleich beim Start setzen (vor den Seiten), damit eine Seite sie danach überschreiben kann.
  useState(apply)
  return children
}
