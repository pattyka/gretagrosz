// The app's colour comes from your streak: each colour of the rainbow lasts 30 days,
// starting light and getting darker every day. Day 30 = darkest red, day 31 = light orange, and so on.
// After pink (day 270) it starts again at red.

export const COLORS = [
  { id: 'red', name: 'Red', light: '#FF3B30', dark: '#FF453A', hue: 3 },
  { id: 'orange', name: 'Orange', light: '#FF9500', dark: '#FF9F0A', hue: 35 },
  { id: 'yellow', name: 'Yellow', light: '#FFCC00', dark: '#FFD60A', hue: 48, darkText: true },
  { id: 'green', name: 'Green', light: '#34C759', dark: '#30D158', hue: 135 },
  { id: 'teal', name: 'Teal', light: '#30B0C7', dark: '#40C8E0', hue: 189 },
  { id: 'blue', name: 'Blue', light: '#007AFF', dark: '#0A84FF', hue: 211 },
  { id: 'indigo', name: 'Indigo', light: '#5856D6', dark: '#5E5CE6', hue: 241 },
  { id: 'purple', name: 'Purple', light: '#AF52DE', dark: '#BF5AF2', hue: 280 },
  { id: 'pink', name: 'Pink', light: '#FF2D55', dark: '#FF375F', hue: 348 },
]

export const DAYS_PER_COLOR = 30

// Which colour and which shade a streak is on. dayInColor runs 1–30 (0 before the streak starts).
export function stageFor(streak) {
  if (streak <= 0) return { color: COLORS[0], next: COLORS[1], dayInColor: 0, shade: 0 }
  const index = Math.floor((streak - 1) / DAYS_PER_COLOR) % COLORS.length
  const dayInColor = ((streak - 1) % DAYS_PER_COLOR) + 1
  return {
    color: COLORS[index],
    next: COLORS[(index + 1) % COLORS.length],
    dayInColor,
    shade: (dayInColor - 1) / (DAYS_PER_COLOR - 1), // 0 = lightest, 1 = darkest
  }
}

const rgba = (hex, a) => {
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${n >> 16}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}

export function themeFor(streak) {
  const { color: c, shade: t } = stageFor(streak)
  const light = 96 - t * 90 // 96% (lightest) → 6% (darkest, near black)
  const sat = 18 + t * 22 // a little more colour as it gets darker
  const dark = light < 52
  const accent = dark ? c.dark : c.light
  // In the middle shades a coloured link would blend into the background, so links and soft buttons
  // use plain black or white there; the colour still shows in the ring and the main button.
  const mid = light >= 26 && light < 76
  const plain = dark ? '#FFFFFF' : '#000000'
  return {
    '--bg': `hsl(${c.hue} ${sat}% ${light}%)`,
    '--card': dark ? `hsl(${c.hue} ${sat * 0.55}% ${Math.min(light + 8, 22)}%)` : '#FFFFFF',
    '--text': dark ? '#FFFFFF' : '#000000',
    '--secondary': dark ? 'rgba(235, 235, 245, 0.65)' : 'rgba(60, 60, 67, 0.65)',
    '--separator': dark ? 'rgba(84, 84, 88, 0.6)' : 'rgba(60, 60, 67, 0.18)',
    '--fill': dark ? 'rgba(118, 118, 128, 0.24)' : 'rgba(118, 118, 128, 0.12)',
    '--accent': accent,
    '--on-accent': c.darkText ? '#000000' : '#FFFFFF', // black text on yellow is easier to read
    '--link': mid || c.darkText ? plain : accent,
    '--tint': mid ? (dark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.6)') : rgba(accent, dark ? 0.22 : 0.16),
    '--tint-text': mid || c.darkText ? plain : accent,
    '--track': mid ? (dark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.55)') : rgba(accent, dark ? 0.22 : 0.16),
  }
}
