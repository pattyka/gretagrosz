// Answers are numbers or fractions. "01" and "1", "0.99" and "99/100", "75°" and "75" all count as the same.
const clean = (s) =>
  String(s)
    .toLowerCase()
    .replace(/degrees?|°|\s/g, '')
    .replace(/[−–]/g, '-')
    .replace(/,/g, '.')

const value = (s) => {
  const m = s.match(/^(-?\d+(?:\.\d+)?)(?:\/(-?\d+(?:\.\d+)?))?$/)
  if (!m) return null
  const v = m[2] ? Number(m[1]) / Number(m[2]) : Number(m[1])
  return Number.isFinite(v) ? v : null
}

export function isCorrect(input, answers) {
  const a = clean(input)
  if (!a) return false
  return answers.some((answer) => {
    const b = clean(answer)
    if (a === b) return true
    const x = value(a)
    const y = value(b)
    return x != null && y != null && Math.abs(x - y) < 1e-9
  })
}
