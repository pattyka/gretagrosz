import { dayInfo } from './curriculum'

// Written weeks live in ./weeks (w01.js, w02.js, …). Weeks without a file show “coming soon”.
const files = import.meta.glob('./weeks/*.js', { eager: true, import: 'default' })
const BY_WEEK = {}
Object.values(files).forEach((w) => (BY_WEEK[w.week] = w))

export const WRITTEN_WEEKS = Object.keys(BY_WEEK).map(Number).sort((a, b) => a - b)

export function getDay(index) {
  const info = dayInfo(index)
  const content = info.final ? null : BY_WEEK[info.week]?.days[info.dow - 1] || null
  return { ...info, index, content }
}
