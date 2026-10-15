// Ein einziger Akzent (Apple-Blau) für die ganze App. Jeder Jahrgang behält nur
// eine eigene Farbe für sein kleines Label (`label`).
// Wichtig: Klassennamen als volle Strings, damit Tailwind sie beim Build erkennt.
const ACCENT = {
  gradient: 'from-accent to-accent',
  solid: 'bg-accent',
  solidHover: 'hover:bg-accent-dark',
  text: 'text-accent-ink',
  ring: 'ring-accent',
  soft: 'bg-accent/25',
}

const LABELS = {
  pink: '#007AFF',
  blue: '#5E5CE6',
  purple: '#32ADE6',
  yellow: '#30B0C7',
  green: '#5AC8FA',
}

export function theme(color) {
  return { ...ACCENT, label: LABELS[color] ?? LABELS.pink }
}
