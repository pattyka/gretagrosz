// Monthly community challenges: do the thing on enough days this month to finish and win a buddy outfit.
// They restart every month automatically.
import { dayOf } from './data'

export const CHALLENGES = [
  {
    id: 'ch_sketch', title: 'Sketch something', goal: 20, category: 'art', outfit: 'beret', people: 248,
    blurb: 'Any sketch counts — a mug, your hand, a doodle on the bus.',
    posts: ['p4', 'p15', 'p27'], // demo posts shared to this challenge
  },
  {
    id: 'ch_move', title: 'Move for 15 minutes', goal: 15, category: 'fitness', outfit: 'headband', people: 412,
    blurb: 'Walk, dance, stretch, run — anything that gets you moving.',
    posts: ['p5', 'p12', 'p30'],
  },
  {
    id: 'ch_cook', title: 'Cook something new', goal: 8, category: 'cooking', outfit: 'chef', people: 173,
    blurb: 'A new recipe, a new ingredient or a new way of cooking something you know.',
    posts: ['p10', 'p22', 'p28'],
  },
]

export const challengeById = (id) => CHALLENGES.find((c) => c.id === id)

const startOfMonth = (t = Date.now()) => {
  const d = new Date(t)
  return new Date(d.getFullYear(), d.getMonth(), 1).getTime()
}
const startOfNextMonth = (t = Date.now()) => {
  const d = new Date(t)
  return new Date(d.getFullYear(), d.getMonth() + 1, 1).getTime()
}

export const monthName = () => new Date().toLocaleDateString('en', { month: 'long' })
export const daysLeftThisMonth = () => dayOf(startOfNextMonth() - 1) - dayOf(Date.now()) + 1

// The days (this month) you checked in on a challenge
export const checkinsThisMonth = (entry) => (entry?.days || []).filter((day) => day >= dayOf(startOfMonth()))
