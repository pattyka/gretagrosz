import { PLAN, TOTAL_DAYS } from './plan'

// Written lessons live in ./content; each file maps plan day numbers to a day's content.
// Learning days without a lesson yet can still be studied with the coach and ticked off.
const files = import.meta.glob('./content/*.js', { eager: true, import: 'default' })
const BY_DAY = Object.assign({}, ...Object.values(files))

export const WRITTEN = Object.keys(BY_DAY).length

export function getDay(index) {
  const plan = PLAN[Math.max(0, Math.min(TOTAL_DAYS - 1, index))]
  return { ...plan, content: BY_DAY[plan.day] || null }
}
