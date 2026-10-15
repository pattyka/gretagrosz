// Checking typed answers fairly:
// - "Hund" and "der Hund" both count (the article is optional)
// - capital letters don't matter
// - "ae/oe/ue/ss" count for "ä/ö/ü/ß", and missing accents (é, ñ…) still count, with a tip
// - one small typo in a longer word still counts, with a tip

const ARTICLES = {
  en: ['the', 'a', 'an', 'to'], // "to eat" and "eat" both count
  de: ['der', 'die', 'das', 'den', 'dem', 'ein', 'eine'],
  es: ['el', 'la', 'los', 'las', 'un', 'una'],
  fr: ['le', 'la', 'les', 'un', 'une'],
  it: ['il', 'lo', 'la', 'i', 'gli', 'le', 'un', 'uno', 'una'],
}

function normalize(text, lang) {
  let s = text.toLowerCase().replace(/\(.*?\)/g, '').replace(/[’`´]/g, "'").replace(/[.,!?¡¿]/g, '').replace(/\s+/g, ' ').trim()
  s = s.replace(/^l'\s*/, '') // l'eau → eau
  const [first, ...rest] = s.split(' ')
  if (rest.length && ARTICLES[lang]?.includes(first)) s = rest.join(' ')
  return s
}

// Same as normalize, but also forgiving about umlauts and accents
function loose(text, lang) {
  return normalize(text, lang)
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/œ/g, 'oe')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

function distance(a, b) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1))
      prev = tmp
    }
  }
  return row[b.length]
}

// Returns { correct, note } — note explains a small slip that was still accepted
export function checkAnswer(input, answers, lang) {
  if (!input.trim()) return { correct: false }
  const articleOf = (text) => {
    const first = text.toLowerCase().trim().split(/\s+/)[0]
    return ARTICLES[lang]?.includes(first) ? first : null
  }
  for (const answer of answers) {
    if (normalize(input, lang) === normalize(answer, lang)) {
      // Right word, but a different article than the real one ("die Hund")
      const typed = articleOf(input)
      const real = articleOf(answer)
      if (typed && real && typed !== real) return { correct: true, note: `Right word! The article is: ${answer}` }
      return { correct: true }
    }
  }
  for (const answer of answers) {
    if (loose(input, lang) === loose(answer, lang)) return { correct: true, note: `Watch the spelling: ${answer}` }
  }
  for (const answer of answers) {
    const a = loose(answer, lang)
    if (a.length >= 5 && distance(loose(input, lang), a) <= 1) return { correct: true, note: `Small typo — it’s ${answer}` }
  }
  return { correct: false }
}
