// One year of training for the Austrian Mathematical Olympiad (ÖMO), in 52 weeks + a final exam.
// Every week has one theme. The four areas (Algebra, Combinatorics, Geometry, Number theory) take turns,
// so each comes back about once a month, a bit harder each time.
// Week rhythm: 5 learning days → 1 mixed review day (topic hidden) → 1 mock exam in the real ÖMO format.

export const AREAS = {
  A: 'Algebra',
  C: 'Combinatorics',
  G: 'Geometry',
  N: 'Number theory',
  M: 'Mixed',
}

// Formats from the ÖMO for advanced students (Fortgeschrittene)
export const PHASES = [
  { id: 1, name: 'Regional level', short: 'Regional', weeks: [1, 13], mock: { problems: 4, minutes: 240 }, about: 'Regionalwettbewerb: 4 problems in 4 hours' },
  { id: 2, name: 'Federal Part 1 level', short: 'Federal 1', weeks: [14, 30], mock: { problems: 4, minutes: 270 }, about: 'Bundeswettbewerb Teil 1: 4 problems in 4½ hours' },
  { id: 3, name: 'Federal Final level', short: 'Final', weeks: [31, 52], mock: { problems: 3, minutes: 270 }, about: 'Bundeswettbewerb Teil 2: 3 problems in 4½ hours, on two days' },
]

const W = (area, theme) => ({ area, theme })

export const WEEKS = [
  // Phase 1: Regional level
  W('C', 'Parity and invariants'),
  W('N', 'Divisibility and remainders'),
  W('A', 'Algebraic tricks and first inequalities'),
  W('G', 'Angles and triangles'),
  W('C', 'Pigeonhole and the extremal principle'),
  W('N', 'Primes, gcd and Diophantine equations'),
  W('A', 'Sequences and induction'),
  W('G', 'Circles and cyclic quadrilaterals'),
  W('C', 'Counting and double counting'),
  W('N', 'Modular arithmetic and Fermat'),
  W('A', 'Polynomials and equations'),
  W('G', 'Similar triangles and ratios'),
  W('M', 'Regional exam week'),
  // Phase 2: Federal Part 1 level
  W('C', 'Games and colouring'),
  W('N', 'Orders, CRT and Euler'),
  W('A', 'AM–GM and Cauchy–Schwarz'),
  W('G', 'Power of a point and radical axis'),
  W('C', 'Graph theory'),
  W('N', 'Diophantine techniques'),
  W('A', 'Functional equations I'),
  W('G', 'Triangle centres and key lemmas'),
  W('C', 'Processes and algorithms'),
  W('N', 'Floor function, digits and bases'),
  W('A', 'Inequalities II'),
  W('G', 'Reflections, rotations and homothety'),
  W('C', 'Constructions'),
  W('N', 'p-adic valuations and LTE'),
  W('A', 'Functional equations II'),
  W('G', 'Trigonometry and lengths'),
  W('M', 'Federal Part 1 exam week'),
  // Phase 3: Federal Final level
  W('C', 'Extremal combinatorics'),
  W('N', 'Quadratic residues and primitive roots'),
  W('A', 'Polynomials II'),
  W('G', 'Spiral similarity and Miquel points'),
  W('C', 'Monovariants and processes II'),
  W('N', 'Vieta jumping and descent'),
  W('A', 'Sequences II'),
  W('G', 'Projective tools'),
  W('C', 'Combinatorial geometry'),
  W('N', 'Number-theoretic functions and constructions'),
  W('A', 'Functional equations III'),
  W('G', 'Hard configurations'),
  W('C', 'Bijections and clever counting'),
  W('N', 'Mixed number theory'),
  W('A', 'Mixed algebra'),
  W('G', 'Mixed geometry'),
  W('C', 'Mixed combinatorics'),
  W('M', 'Final exam week I'),
  W('M', 'Final exam week II'),
  W('M', 'Your weakest area'),
  W('M', 'Final exam week III'),
  W('M', 'Final review'),
]

export const YEAR = WEEKS.length * 7 + 1 // 365: the last day is the final exam

export const phaseOfWeek = (week) => PHASES.find((p) => week >= p.weeks[0] && week <= p.weeks[1]) || PHASES[2]

// What kind of day is day i (0-based)?
export function dayInfo(i) {
  if (i >= YEAR - 1) return { kind: 'mock', week: WEEKS.length, dow: 7, theme: 'Final exam', area: 'M', phase: PHASES[2], final: true }
  const week = Math.floor(i / 7) + 1
  const dow = (i % 7) + 1 // 1–7
  const { area, theme } = WEEKS[week - 1]
  const kind = dow <= 5 ? 'learn' : dow === 6 ? 'review' : 'mock'
  return { kind, week, dow, theme, area, phase: phaseOfWeek(week) }
}
