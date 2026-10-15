import { useLocation, useNavigate } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { BookIcon, GearIcon, HomeIcon } from './Icons.jsx'

const TABS = [
  { to: '/', label: 'home', Icon: HomeIcon },
  { to: '/themen', label: 'topics', Icon: BookIcon },
  { to: '/einstellungen', label: 'settings', Icon: GearIcon },
]

// Tab-Leiste unten aus Milchglas, wie bei iPhone-Apps.
export default function TabBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t } = useLang()
  const section = '/' + (pathname.split('/')[1] ?? '')

  // Im Testmodus gibt es keine Tab-Leiste – nur "Zurück" oben.
  if (section === '/testmodus') return null

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-black/10 bg-page/80 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-2xl">
        {TABS.map(({ to, label, Icon }) => {
          // Lernseiten, Quiz und Karteikarten gehören zum Themen-Tab.
          const active =
            to === section ||
            (to === '/themen' && ['/lernen', '/ueben', '/karten'].includes(section)) ||
            (to === '/' && section === '/fehler') ||
            (to === '/einstellungen' && section === '/testmodus')
          return (
            <button
              key={to}
              onClick={() => navigate(to)}
              aria-current={active ? 'page' : undefined}
              className={`flex flex-1 flex-col items-center gap-0.5 pt-2 pb-1.5 text-[10px] font-medium transition-colors ${
                active ? 'text-nav' : 'text-muted'
              }`}
            >
              <Icon className="h-[26px] w-[26px]" />
              {t(label)}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
