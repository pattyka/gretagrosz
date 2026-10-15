import { Link, NavLink, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useStore } from '../store'
import { Avatar, Icon, Logo } from './ui'
import StreakBuddy from './StreakBuddy'
import NotificationBell from './NotificationBell'

const TABS = [
  { to: '/', label: 'Home', icon: 'home', end: true },
  { to: '/projects', label: 'Projects', icon: 'projects' },
  { to: '/new', label: 'Create', icon: 'plus' },
  { to: '/chat', label: 'Chats', icon: 'chat' },
  { to: '/u/you', label: 'Profile', icon: 'user' },
]

function HeaderSearch() {
  const [params] = useSearchParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const q = pathname === '/' ? params.get('q') || '' : ''
  const [text, setText] = useState(q)
  useEffect(() => setText(q), [q])

  const onChange = (value) => {
    setText(value)
    navigate(value ? `/?q=${encodeURIComponent(value)}` : '/', { replace: pathname === '/' })
  }

  return (
    <div className="relative min-w-0 flex-1">
      <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" />
      <input
        className="h-12 w-full rounded-full bg-mist pl-11 pr-10 text-[15px] outline-none transition placeholder:text-ink/50 focus:bg-card focus:ring-4 focus:ring-spark/20"
        placeholder="Search projects, hobbies and people"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
      {text && (
        <button onClick={() => onChange('')} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink/50 hover:bg-ink/10" aria-label="Clear search">
          <Icon name="x" className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export default function Layout() {
  const { me } = useStore()
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 bg-card">
        <div className="mx-auto flex h-20 max-w-[1800px] items-center gap-2 px-4">
          <Link to="/" className="mr-1 shrink-0 rounded-full p-2 hover:bg-mist" aria-label="Home">
            <Logo />
          </Link>

          <nav className="hidden shrink-0 items-center gap-1 md:flex">
            {[...TABS.filter((t) => ['/', '/projects'].includes(t.to)), { to: '/challenges', label: 'Challenges' }, TABS.find((t) => t.to === '/chat')].map((t) => (
              <NavLink
                key={t.to}
                to={t.to}
                end={t.end}
                className={({ isActive }) => `chip ${isActive ? 'bg-ink text-card' : 'text-ink hover:bg-mist'}`}
              >
                {t.label}
              </NavLink>
            ))}
          </nav>

          <HeaderSearch />

          <Link to="/new" className="btn-primary hidden shrink-0 md:inline-flex">
            Create
          </Link>
          <NotificationBell />
          <Link to="/u/you" aria-label="Your profile" className="shrink-0 rounded-full p-1.5 hover:bg-mist">
            <Avatar user={me} size="sm" />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1800px] px-3 pb-28 pt-2 sm:px-4 md:pb-12">
        <Outlet />
      </main>

      <StreakBuddy />

      {/* Phone tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/5 bg-card md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around px-2 pb-[env(safe-area-inset-bottom)]">
          {TABS.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.end}
              aria-label={t.label}
              className={({ isActive }) => `flex flex-1 flex-col items-center gap-0.5 py-2 text-[11px] font-medium ${isActive ? 'text-ink' : 'text-ink/45'}`}
            >
              {t.to === '/new' ? (
                <span className="-mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-spark text-white shadow-pop">
                  <Icon name="plus" />
                </span>
              ) : (
                <Icon name={t.icon} className="h-6 w-6" />
              )}
              {t.to !== '/new' && t.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
