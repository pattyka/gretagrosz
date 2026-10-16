// Categories, post types and small helpers shared across the app

export const CATEGORIES = [
  { id: 'art', label: 'Art', tint: 'bg-rose-100 text-rose-950' },
  { id: 'music', label: 'Music', tint: 'bg-violet-100 text-violet-950' },
  { id: 'crafts', label: 'Crafts', tint: 'bg-pink-100 text-pink-950' },
  { id: 'cooking', label: 'Cooking', tint: 'bg-amber-100 text-amber-950' },
  { id: 'tech', label: 'Tech', tint: 'bg-sky-100 text-sky-950' },
  { id: 'outdoors', label: 'Outdoors', tint: 'bg-emerald-100 text-emerald-950' },
  { id: 'fitness', label: 'Fitness', tint: 'bg-lime-100 text-lime-950' },
  { id: 'writing', label: 'Writing', tint: 'bg-stone-200 text-stone-900' },
  { id: 'photo', label: 'Photography', tint: 'bg-slate-200 text-slate-900' },
  { id: 'garden', label: 'Gardening', tint: 'bg-green-100 text-green-950' },
  { id: 'wood', label: 'Woodwork', tint: 'bg-orange-100 text-orange-950' },
  { id: 'other', label: 'Other', tint: 'bg-indigo-100 text-indigo-950' },
]

export const cat = (id) => CATEGORIES.find((c) => c.id === id) || CATEGORIES[0]

export const KINDS = {
  first: { label: 'First attempt' },
  made: { label: 'Finished' },
  progress: { label: 'In progress' },
  milestone: { label: 'Milestone' },
  started: { label: 'Just started' },
}

// Starter ideas: the welcome quiz and the "Need a spark?" popup pick from these.
// cost: 'free' | 'cheap' | 'some' — noGear: nothing to buy, you can start with what you have
export const IDEAS = [
  { title: 'Bake your first loaf of bread', category: 'cooking', cost: 'cheap', noGear: true },
  { title: 'Cook a dish from a country you have never visited', category: 'cooking', cost: 'cheap', noGear: true },
  { title: 'Make fresh pasta from scratch', category: 'cooking', cost: 'cheap', noGear: true },
  { title: 'Learn three chords on the ukulele', category: 'music', cost: 'some', noGear: false },
  { title: 'Make your first beat in a free music app', category: 'music', cost: 'free', noGear: true },
  { title: 'Learn to sing one song really well', category: 'music', cost: 'free', noGear: true },
  { title: 'Fill one sketchbook page a day for a week', category: 'art', cost: 'free', noGear: true },
  { title: 'Draw your own hand every day for a week', category: 'art', cost: 'free', noGear: true },
  { title: 'Paint a watercolour postcard', category: 'art', cost: 'cheap', noGear: false },
  { title: 'Fold 10 different origami animals', category: 'crafts', cost: 'free', noGear: true },
  { title: 'Knit a simple scarf', category: 'crafts', cost: 'cheap', noGear: false },
  { title: 'Build a tiny website about something you love', category: 'tech', cost: 'free', noGear: true },
  { title: 'Make a tiny game in Scratch', category: 'tech', cost: 'free', noGear: true },
  { title: 'Walk a trail you have never tried', category: 'outdoors', cost: 'free', noGear: true },
  { title: 'Watch the sunrise from somewhere new', category: 'outdoors', cost: 'free', noGear: true },
  { title: 'Run 5 km without stopping', category: 'fitness', cost: 'free', noGear: true },
  { title: 'Do 20 push-ups in a row by the end of the month', category: 'fitness', cost: 'free', noGear: true },
  { title: 'Try 10 minutes of yoga every day for a week', category: 'fitness', cost: 'free', noGear: true },
  { title: 'Write a 500-word short story', category: 'writing', cost: 'free', noGear: true },
  { title: 'Keep a journal for 30 days', category: 'writing', cost: 'free', noGear: true },
  { title: 'Take one photo every day for 30 days', category: 'photo', cost: 'free', noGear: true },
  { title: 'Make a photo series about your street', category: 'photo', cost: 'free', noGear: true },
  { title: 'Grow herbs on a windowsill', category: 'garden', cost: 'cheap', noGear: false },
  { title: 'Regrow vegetables from kitchen scraps', category: 'garden', cost: 'free', noGear: true },
  { title: 'Make a birdhouse', category: 'wood', cost: 'cheap', noGear: false },
  { title: 'Whittle a small wooden spoon', category: 'wood', cost: 'cheap', noGear: false },
]

export const COST_LABEL = { free: 'Costs nothing', cheap: 'Under €20', some: 'Needs some gear' }

export const AVATAR_COLORS = ['#FEE9E5', '#FCE7F3', '#EDE9FE', '#DBEAFE', '#D1FAE5', '#FEF3C7', '#FFEDD5', '#E5E7EB']

export const uid = (prefix = 'id') => `${prefix}_${Math.random().toString(36).slice(2, 9)}`

export const initials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export function timeAgo(t) {
  const s = (Date.now() - t) / 1000
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  if (s < 604800) return `${Math.floor(s / 86400)}d ago`
  return new Date(t).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

// Demo photos are Unsplash links (sized on request); uploads are stored as data URLs
export const imgSrc = (src, w = 600) =>
  src?.startsWith('https://images.unsplash.com') ? `${src}?w=${w}&q=75&auto=format&fit=crop` : src

// Shrinks a photo so it fits in browser storage; also returns its shape (height / width)
export function compressImage(file, max = 1000, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)
    img.onload = () => {
      const scale = Math.min(1, max / Math.max(img.width, img.height))
      const canvas = document.createElement('canvas')
      canvas.width = Math.round(img.width * scale)
      canvas.height = Math.round(img.height * scale)
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
      URL.revokeObjectURL(url)
      resolve({ src: canvas.toDataURL('image/jpeg', quality), ratio: canvas.height / canvas.width })
    }
    img.onerror = reject
    img.src = url
  })
}

export const progressOf = (project) => {
  const total = project.milestones.length
  if (!total) return project.status === 'done' ? 100 : 0
  return Math.round((project.milestones.filter((m) => m.done).length / total) * 100)
}

// Daily streaks: a day counts if you did at least one thing that day
const DAY = 864e5
export const dayOf = (t) => Math.floor((t - new Date(t).getTimezoneOffset() * 6e4) / DAY) // your local calendar day

// extraDays: days protected by a streak freeze (they count as done)
export function dailyStreak(times, extraDays = []) {
  const done = new Set([...times.map(dayOf), ...extraDays])
  let day = dayOf(Date.now())
  if (!done.has(day)) day -= 1 // today isn't over yet, so yesterday still keeps the streak alive
  let n = 0
  while (done.has(day)) {
    n += 1
    day -= 1
  }
  return n
}

// Your longest run of days in a row (outfits stay unlocked even if a streak breaks)
export function bestDailyStreak(times, extraDays = []) {
  const days = [...new Set([...times.map(dayOf), ...extraDays])].sort((a, b) => a - b)
  let best = 0
  let run = 0
  days.forEach((d, i) => {
    run = i > 0 && d === days[i - 1] + 1 ? run + 1 : 1
    best = Math.max(best, run)
  })
  return best
}

export const daysSince = (t) => Math.floor((Date.now() - t) / DAY)
