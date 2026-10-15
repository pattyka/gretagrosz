import { Link, useLocation } from 'react-router-dom'
import { useStore } from '../store'
import { BuddyFigure } from './Buddy'

// Your streak buddy at the side of the screen — tap him to dress him up
export default function StreakBuddy() {
  const { me, streak } = useStore()
  const { pathname } = useLocation()
  const count = streak()
  if (pathname === '/buddy') return null

  return (
    <Link
      to="/buddy"
      className="fixed -right-1 top-1/2 z-30 h-14 w-11 -translate-y-1/2 opacity-90 transition hover:opacity-100 sm:right-3 sm:h-16 sm:w-12"
      aria-label={`Streak buddy: ${count}-day streak. Tap to dress him up.`}
    >
      <span className="relative block h-full w-full animate-bob transition hover:scale-110 active:scale-95">
        <BuddyFigure awake={count > 0} outfit={me.outfit || {}} />
        <span className={`absolute -bottom-1 left-1/2 min-w-[1.25rem] -translate-x-1/2 rounded-full px-1 py-px text-center text-[11px] font-extrabold text-white shadow ${count > 0 ? 'bg-orange-500' : 'bg-zinc-400'}`}>
          {count}
        </span>
      </span>
    </Link>
  )
}
