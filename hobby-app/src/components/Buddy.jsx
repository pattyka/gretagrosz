// The streak buddy: a little flame character, plus the outfits you unlock by keeping your streak going

const heart = (cx, cy) => `M${cx} ${cy + 4} l-5-5 a2.9 2.9 0 0 1 5-3.5 a2.9 2.9 0 0 1 5 3.5z`

// slot: where it goes (only one item per slot)
// day: the streak (in days) that unlocks it — or challenge: finish that monthly challenge to unlock it
export const OUTFITS = [
  {
    id: 'cap', name: 'Cap', slot: 'head', day: 1,
    art: (<><path d="M17 27c0-10 7-16 15-16s15 6 15 16z" fill="#2563EB" /><path d="M44 25h13a2 2 0 0 1 0 4H44z" fill="#1D4ED8" /><circle cx="32" cy="11" r="2" fill="#1D4ED8" /></>),
  },
  {
    id: 'sunglasses', name: 'Sunglasses', slot: 'eyes', day: 2,
    art: (<><rect x="18" y="40" width="12" height="8" rx="3" fill="#111827" /><rect x="34" y="40" width="12" height="8" rx="3" fill="#111827" /><path d="M30 43h4" stroke="#111827" strokeWidth="2" /></>),
  },
  {
    id: 'bowtie', name: 'Bow tie', slot: 'neck', day: 3,
    art: (<><path d="M32 61 24 56v10zM32 61l8-5v10z" fill="#7C3AED" /><circle cx="32" cy="61" r="2.5" fill="#5B21B6" /></>),
  },
  {
    id: 'nerd', name: 'Reading glasses', slot: 'eyes', day: 4,
    art: (<><circle cx="25" cy="44" r="5.5" fill="none" stroke="#111827" strokeWidth="2" /><circle cx="39" cy="44" r="5.5" fill="none" stroke="#111827" strokeWidth="2" /><path d="M30.5 44h3" stroke="#111827" strokeWidth="2" /></>),
  },
  {
    id: 'beanie', name: 'Beanie', slot: 'head', day: 5,
    art: (<><path d="M16 28c0-11 7-18 16-18s16 7 16 18z" fill="#DC2626" /><rect x="14" y="25" width="36" height="7" rx="3.5" fill="#B91C1C" /><circle cx="32" cy="8" r="4" fill="#FCA5A5" /></>),
  },
  {
    id: 'party', name: 'Party hat', slot: 'head', day: 7,
    art: (<><path d="M21 29 32 0l11 29z" fill="#EC4899" /><path d="M25 19h14M28 11h8" stroke="#FDF2F8" strokeWidth="2" /><circle cx="32" cy="0" r="3.5" fill="#FDE047" /></>),
  },
  {
    id: 'crown', name: 'Crown', slot: 'head', day: 10,
    art: (<><path d="M18 28V12l7 8 7-12 7 12 7-8v16z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="32" cy="22" r="2.5" fill="#EF4444" /></>),
  },
  {
    id: 'scarf', name: 'Scarf', slot: 'neck', day: 14,
    art: (<><path d="M14 57q18 9 36 0v6q-18 9-36 0z" fill="#0EA5E9" /><path d="m40 62 4 12h-6l-2-10z" fill="#0284C7" /></>),
  },
  {
    id: 'hearts', name: 'Heart glasses', slot: 'eyes', day: 21,
    art: (<><path d={heart(25, 42)} fill="#F43F5E" /><path d={heart(39, 42)} fill="#F43F5E" /><path d="M30 43h4" stroke="#BE123C" strokeWidth="2" /></>),
  },
  {
    id: 'wizard', name: 'Wizard hat', slot: 'head', day: 30,
    art: (<><path d="M14 30 32-12l18 42z" fill="#4C1D95" /><rect x="10" y="27" width="44" height="5" rx="2.5" fill="#6D28D9" /><circle cx="29" cy="14" r="1.6" fill="#FDE047" /><circle cx="36" cy="2" r="1.3" fill="#FDE047" /><circle cx="38" cy="20" r="1.1" fill="#FDE047" /></>),
  },
  {
    id: 'medal', name: 'Gold medal', slot: 'neck', day: 50,
    art: (<><path d="m26 55 6 10 6-10" stroke="#2563EB" strokeWidth="3" fill="none" strokeLinejoin="round" /><circle cx="32" cy="68" r="5" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" /></>),
  },
  {
    id: 'beret', name: 'Artist beret', slot: 'head', challenge: 'ch_sketch',
    art: (<><path d="M14 25c0-7 9-12 19-12s17 5 17 10c0 3-6 5-18 5s-18-1-18-3z" fill="#1F2937" /><path d="M33 13v-4" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" /></>),
  },
  {
    id: 'headband', name: 'Sweatband', slot: 'head', challenge: 'ch_move',
    art: (<><rect x="12" y="24" width="40" height="8" rx="4" fill="#EF4444" /><path d="M14 28h36" stroke="#FECACA" strokeWidth="1.6" /></>),
  },
  {
    id: 'chef', name: 'Chef hat', slot: 'head', challenge: 'ch_cook',
    art: (<><path d="M20 30V20a6 6 0 0 1 3-11 7 7 0 0 1 9-5 7 7 0 0 1 9 5 6 6 0 0 1 3 11v10z" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="1.5" /><path d="M20 25h24" stroke="#D4D4D8" strokeWidth="1.5" /></>),
  },
]

export const SLOTS = [
  { id: 'head', label: 'Hats' },
  { id: 'eyes', label: 'Glasses' },
  { id: 'neck', label: 'Neck' },
]

export const outfitItem = (id) => OUTFITS.find((o) => o.id === id)

// outfit: { head, eyes, neck } — item ids or empty
export function BuddyFigure({ awake = true, outfit = {}, className = 'h-full w-full' }) {
  const worn = ['neck', 'eyes', 'head'].map((slot) => outfitItem(outfit[slot])).filter(Boolean)
  return (
    <svg viewBox="0 -16 64 92" className={`drop-shadow-md ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`flame-body-${awake ? 'on' : 'off'}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={awake ? '#FDBA74' : '#D4D4D8'} />
          <stop offset="1" stopColor={awake ? '#F97316' : '#A1A1AA'} />
        </linearGradient>
      </defs>
      <path d="M32 2c4 10 16 16 20 28 6 18-4 38-20 38S6 48 12 30c2-6 6-9 8-14 1 6 4 9 7 10-2-9 1-17 5-24z" fill={`url(#flame-body-${awake ? 'on' : 'off'})`} />
      <path d="M32 34c3 5 9 8 9 16a9 9 0 0 1-18 0c0-5 3-7 5-11 1 3 2 4 4 4-1-3-1-6 0-9z" fill={awake ? '#FDE68A' : '#E4E4E7'} />
      {awake ? (
        <>
          <circle cx="25" cy="44" r="3" fill="#1F2937" />
          <circle cx="39" cy="44" r="3" fill="#1F2937" />
          <circle cx="26" cy="43" r="1" fill="white" />
          <circle cx="40" cy="43" r="1" fill="white" />
          <path d="M27 52q5 4 10 0" stroke="#1F2937" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M22 45q3 2 6 0M36 45q3 2 6 0" stroke="#3F3F46" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M29 53h6" stroke="#3F3F46" strokeWidth="2.2" strokeLinecap="round" />
        </>
      )}
      {worn.map((item) => <g key={item.id}>{item.art}</g>)}
    </svg>
  )
}

// Just one outfit item on its own, for the wardrobe tiles
export function OutfitPreview({ item, className = 'h-12 w-12' }) {
  const box = { head: '8 -14 48 46', eyes: '14 34 36 18', neck: '10 52 44 26' }[item.slot]
  return (
    <svg viewBox={box} className={className} aria-hidden="true">
      {item.art}
    </svg>
  )
}

// A little fire with a number inside, e.g. how many days you've worked on a project
export function FireCount({ n, className = 'h-10 w-9' }) {
  return (
    <span className={`relative inline-flex shrink-0 ${className}`} title={`Worked on ${n} ${n === 1 ? 'day' : 'days'}`} aria-label={`Worked on ${n} ${n === 1 ? 'day' : 'days'}`}>
      <svg viewBox="0 0 64 72" className="h-full w-full" aria-hidden="true">
        <path d="M32 2c4 10 16 16 20 28 6 18-4 38-20 38S6 48 12 30c2-6 6-9 8-14 1 6 4 9 7 10-2-9 1-17 5-24z" fill="#F97316" />
      </svg>
      <span className="absolute inset-x-0 bottom-[14%] text-center text-[13px] font-extrabold leading-none text-white">{n}</span>
    </span>
  )
}
