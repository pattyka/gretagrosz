import { getKapitelTopics, getTopic, jahrgaenge } from './curriculum.js'
import { questionsOf } from './translate.js'
import { cardsOfTopic } from './flashcards.js'
import { zusatzfragen } from './zusatzfragen/index.js'

// Jede Quizfrage bekommt eine feste Adresse (ref), die in allen Sprachen gleich ist:
// Jahrgang, Kapitel, Thema und Position der Frage im Thema.
export const refKey = (r) => `${r.jahrgangId}|${r.kapitelId}|${r.topicId}|${r.i}`

export function topicQuestions(jahrgangId, kapitelId, topic, lang) {
  if (!topic) return []
  const base = questionsOf(topic, lang).questions.map((q, i) => ({
    ...q,
    ref: { jahrgangId: Number(jahrgangId), kapitelId, topicId: topic.id, i },
  }))
  const extra = (zusatzfragen[topic.id] ?? []).map((x, n) =>
    extraQuestion(x, lang, { jahrgangId: Number(jahrgangId), kapitelId, topicId: topic.id, i: `x${n}` }),
  )
  return [...base, ...extra]
}

// Zusatzfrage in der gewünschten Sprache (Fallback Deutsch)
function extraQuestion(x, lang, ref) {
  const tr = x[lang] ?? x.de
  return {
    type: x.type,
    question: tr.q,
    options: x.type === 'mc' ? tr.o : undefined,
    correctIndex: x.type === 'mc' ? x.correctIndex : undefined,
    answers: x.type === 'text' ? [...tr.a, ...(lang === 'de' ? [] : x.de.a)] : undefined,
    value: x.value,
    tol: x.tol ?? 0,
    unit: x.unit ? x.unit[lang] ?? x.unit.de : '',
    explanation: tr.e,
    ref,
  }
}

export function chapterQuestions(jahrgangId, kapitelId, lang) {
  return getKapitelTopics(jahrgangId, kapitelId).flatMap((topic) => topicQuestions(jahrgangId, kapitelId, topic, lang))
}

export function questionByRef(ref, lang) {
  if (String(ref.i).startsWith('c')) return termQuestion(ref, lang)
  if (String(ref.i).startsWith('x')) {
    const x = zusatzfragen[ref.topicId]?.[Number(String(ref.i).slice(1))]
    return x ? extraQuestion(x, lang, ref) : null
  }
  const topic = getTopic(ref.jahrgangId, ref.topicId)
  const q = topic && questionsOf(topic, lang).questions[ref.i]
  return q ? { ...q, ref } : null
}

export function shuffle(list) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Üblicher österreichischer Notenschlüssel (Richtwert).
export function gradeOf(pct) {
  if (pct >= 89) return 1
  if (pct >= 76) return 2
  if (pct >= 63) return 3
  if (pct >= 50) return 4
  return 5
}

// Datum als "JJJJ-MM-TT" (lokale Zeit)
export function dayKey(date = new Date()) {
  const d = new Date(date)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// Tage von heute bis zum Datum (0 = heute)
export function daysUntil(day) {
  const [y, m, d] = day.split('-').map(Number)
  const target = new Date(y, m - 1, d)
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((target - today) / 86400000)
}

// Schwache Themen: mindestens 3 Antworten, davon mindestens 30 % falsch (aus den letzten 10).
export function weakTopics(results, max = 3) {
  return Object.values(results)
    .map((r) => ({ ...r, wrongShare: r.last.filter((x) => x === 0).length / r.last.length }))
    .filter((r) => r.last.length >= 3 && r.wrongShare >= 0.3)
    .sort((a, b) => b.wrongShare - a.wrongShare)
    .slice(0, max)
}

// ---------- Schwierigkeit (für den Testmodus) ----------
// Die Fragen haben keine eigene Schwierigkeitsangabe. Sie wird deshalb aus typischen Merkmalen
// geschätzt (immer anhand der deutschen Fassung, damit sie in allen Sprachen gleich ist):
//   schwer:  Rechnungen, Fallbeispiele ("Loopy möchte …", "Die … GmbH …"), Verneinungen ("NICHT"),
//            lange, ähnlich klingende Antworten
//   leicht:  Definitionsfragen ("Was versteht man unter …") mit kurzen Antworten
function difficultyScore(q) {
  const text = q.question
  let s = 0
  if (/\d/.test(text) && /(EUR|€|%|berechn|Wie hoch|beträgt|ergibt|Wie viel)/i.test(text)) s += 3
  if (/^(Loopy|Ein |Eine |Im |Das Hotel|Die [A-ZÄÖÜ][^ ]* (GmbH|AG|KG|OG))/.test(text) || text.length > 150) s += 2
  if (/\b(NICHT|KEIN|KEINE)\b|nicht zu(trifft)?\b|falsch\b/.test(text)) s += 2
  if (/^(Was versteht man|Wie wird|Was ist|Wofür steht|Wie nennt man|Was bedeutet|Wie heißt|Was sind)/.test(text)) s -= 1.5
  const avg = q.options.reduce((a, o) => a + o.length, 0) / q.options.length
  if (avg > 60) s += 1.5
  else if (avg > 40) s += 0.5
  else if (avg < 18) s -= 1
  return s
}

let tierCache = null
// Stufe 1 (leicht), 2 (mittel) oder 3 (schwer) je Frage: unterste 40 % leicht, oberste 30 % schwer.
function tiers() {
  if (tierCache) return tierCache
  const scores = []
  for (const j of jahrgaenge) for (const t of j.topics) t.questions.forEach((q, i) => scores.push({ key: `${j.id}|${t.id}|${i}`, s: difficultyScore(q) }))
  const sorted = scores.map((x) => x.s).sort((a, b) => a - b)
  const low = sorted[Math.floor(sorted.length * 0.4)]
  const high = sorted[Math.floor(sorted.length * 0.7)]
  tierCache = Object.fromEntries(scores.map((x) => [x.key, x.s < low ? 1 : x.s >= high ? 3 : 2]))
  return tierCache
}

export const tierOf = (ref) => {
  if (String(ref.i).startsWith('x')) return zusatzfragen[ref.topicId]?.[Number(String(ref.i).slice(1))]?.level ?? 2
  return tiers()[`${ref.jahrgangId}|${ref.topicId}|${ref.i}`] ?? 2
}

// ---------- "Fachbegriff erkennen" (nur Extrem) ----------
// Erklärung wird gezeigt, gesucht ist der Begriff. Die drei falschen Antworten sind Begriffe
// aus demselben Kapitel – sie klingen also ähnlich. Die Auswahl steckt in der Adresse (ref),
// damit die Frage in jeder Sprache und im Fehlerheft gleich bleibt.
function chapterCards(jahrgangId, kapitelId, lang) {
  return getKapitelTopics(jahrgangId, kapitelId).flatMap((t) => cardsOfTopic(t.id, lang))
}

export function termQuestionRefs(jahrgangId, kapitelId) {
  const cards = chapterCards(jahrgangId, kapitelId, 'de')
  if (cards.length < 4) return []
  return cards.map((card, ci) => {
    const others = shuffle(cards.map((_, k) => k).filter((k) => k !== ci && cards[k].term !== card.term)).slice(0, 3)
    const pos = Math.floor(Math.random() * 4)
    const order = [...others]
    order.splice(pos, 0, ci)
    return { jahrgangId: Number(jahrgangId), kapitelId, topicId: card.topicId, i: `c${ci}`, order }
  })
}

const TERM_Q = {
  de: 'Welcher Fachbegriff passt zu dieser Beschreibung?',
  en: 'Which technical term matches this description?',
  hu: 'Melyik szakkifejezés illik erre a leírásra?',
}

function termQuestion(ref, lang) {
  const cards = chapterCards(ref.jahrgangId, ref.kapitelId, lang)
  const ci = Number(String(ref.i).slice(1))
  const card = cards[ci]
  if (!card || !ref.order) return null
  return {
    question: `${TERM_Q[lang] ?? TERM_Q.de}\n„${card.erklaerung}“`,
    options: ref.order.map((k) => cards[k]?.term ?? ''),
    correctIndex: ref.order.indexOf(ci),
    explanation: `${card.term}: ${card.erklaerung}`,
    ref,
  }
}

// Fragen für eine Prüfung im Testmodus zusammenstellen.
// level 0 Leicht: leichte Fragen · 1 Mittel: halb leicht, halb schwer
// 2 Schwer: ¾ schwer, ¼ mittel · 3 Extrem: nur die schwersten + "Fachbegriff erkennen"
export function buildExam(jahrgangId, kapitelIds, level, count) {
  const pool = kapitelIds.flatMap((k) => chapterQuestions(jahrgangId, k, 'de').map((q) => q.ref))
  const by = { 1: shuffle(pool.filter((r) => tierOf(r) === 1)), 2: shuffle(pool.filter((r) => tierOf(r) === 2)), 3: shuffle(pool.filter((r) => tierOf(r) === 3)) }
  const take = (tier, n) => by[tier].splice(0, n)
  const mix = {
    0: [[1, 1]],
    1: [[1, 0.5], [3, 0.5]],
    2: [[3, 0.75], [2, 0.25]],
    3: [[3, 0.7]],
  }[level]

  let picked = []
  mix.forEach(([tier, share]) => picked.push(...take(tier, Math.round(count * share))))
  if (level === 3) {
    // höchstens 40 % "Fachbegriff erkennen", damit es auch bei kleinen Kapiteln eine echte Prüfung bleibt
    const terms = shuffle(kapitelIds.flatMap((k) => termQuestionRefs(jahrgangId, k)))
    picked.push(...terms.slice(0, Math.min(count - picked.length, Math.ceil(count * 0.4))))
  }
  // Falls in den gewählten Kapiteln zu wenige Fragen einer Stufe sind: mit der nächstpassenden auffüllen
  const fallback = { 0: [1, 2, 3], 1: [2, 1, 3], 2: [3, 2, 1], 3: [3, 2, 1] }[level]
  for (const tier of fallback) if (picked.length < count) picked.push(...take(tier, count - picked.length))
  return shuffle(picked).slice(0, count)
}

// ---------- Antworten prüfen ----------
function normalize(text) {
  return String(text ?? '')
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/^(der|die|das|ein|eine|the|a|an|az|egy) /, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function distance(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i])
  for (let j = 1; j <= b.length; j++) d[0][j] = j
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
  return d[a.length][b.length]
}

// Eingetippter Begriff: kleine Tippfehler sind erlaubt (1 Fehler ab 6, 2 Fehler ab 12 Buchstaben)
function textMatches(input, answers) {
  const x = normalize(input)
  if (!x) return false
  return answers.some((ans) => {
    const y = normalize(ans)
    const allowed = y.length >= 12 ? 2 : y.length >= 6 ? 1 : 0
    return distance(x, y) <= allowed
  })
}

// Zahl: Komma oder Punkt, mit oder ohne Tausenderpunkt, Einheiten werden ignoriert
function numberCandidates(input) {
  const s = String(input ?? '').replace(/[^0-9.,-]/g, '')
  if (!s) return []
  const lastDot = s.lastIndexOf('.')
  const lastComma = s.lastIndexOf(',')
  if (lastDot >= 0 && lastComma >= 0) {
    const dec = lastDot > lastComma ? '.' : ','
    const thou = dec === '.' ? ',' : '.'
    return [Number(s.split(thou).join('').replace(dec, '.'))]
  }
  if (lastComma >= 0) return [Number(s.replace(/\./g, '').replace(',', '.')), Number(s.replace(/,/g, ''))]
  if (lastDot >= 0) return [Number(s), Number(s.replace(/\./g, ''))]
  return [Number(s)]
}

export function isCorrect(q, answer) {
  if (!q || answer === null || answer === undefined || answer === '') return false
  if (q.type === 'text') return textMatches(answer, q.answers)
  if (q.type === 'number') return numberCandidates(answer).some((n) => !Number.isNaN(n) && Math.abs(n - q.value) <= q.tol + 1e-9)
  return answer === q.correctIndex
}

const LOCALES = { de: 'de-AT', en: 'en-GB', hu: 'hu-HU' }

// Richtige Antwort als Text (für Feedback und Auswertung)
export function correctAnswerText(q, lang) {
  if (q.type === 'text') return q.answers[0]
  if (q.type === 'number') {
    const n = new Intl.NumberFormat(LOCALES[lang] ?? 'de-AT', { maximumFractionDigits: 2 }).format(q.value)
    return q.unit ? `${n} ${q.unit}` : n
  }
  return q.options[q.correctIndex]
}

// Antwort der Schülerin / des Schülers als Text
export function givenAnswerText(q, answer) {
  if (answer === null || answer === undefined || answer === '') return null
  if (q.type === 'text' || q.type === 'number') return String(answer)
  return q.options[answer]
}
