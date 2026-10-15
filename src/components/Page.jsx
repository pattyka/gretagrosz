import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { ChevronLeft } from './Icons.jsx'

/**
 * Seitengerüst im iOS-Stil:
 * - Navigationsleiste oben aus Milchglas (zurück links)
 * - großer, linksbündiger Titel, der beim Scrollen klein in die Leiste wandert
 * - `inline`: nur kleiner Titel in der Leiste (für Detailseiten wie Lernschritte oder Quiz)
 * - `center`: großer Titel zentriert statt linksbündig (z. B. auf der Startseite)
 * - `onBack`: eigene Zurück-Aktion statt einer Adresse
 * - `sticky`: Buttons, die unten fest stehen bleiben (über der Tab-Leiste)
 * - Wischen vom linken Bildschirmrand nach rechts = zurück (wie am iPhone)
 */
export default function Page({ title, subtitle, back, onBack, inline = false, center = false, sticky, children, className = '' }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const touch = useRef(null)
  const canGoBack = Boolean(back || onBack)
  const goBack = () => (onBack ? onBack() : navigate(back))
  // Im Testmodus gibt es keine Tab-Leiste
  const noTabBar = pathname.startsWith('/testmodus')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Zurück-Wischgeste vom linken Rand
  useEffect(() => {
    if (!canGoBack) return
    const start = (e) => {
      const p = e.touches[0]
      touch.current = p.clientX < 28 ? { x: p.clientX, y: p.clientY } : null
    }
    const end = (e) => {
      if (!touch.current) return
      const p = e.changedTouches[0]
      const dx = p.clientX - touch.current.x
      const dy = Math.abs(p.clientY - touch.current.y)
      touch.current = null
      if (dx > 80 && dy < 60) goBack()
    }
    window.addEventListener('touchstart', start, { passive: true })
    window.addEventListener('touchend', end, { passive: true })
    return () => {
      window.removeEventListener('touchstart', start)
      window.removeEventListener('touchend', end)
    }
  })

  const showSmallTitle = inline || scrolled

  return (
    <div className={`min-h-screen overflow-x-clip ${sticky ? 'pb-48' : 'pb-28'}`}>
      <header
        className={`sticky top-0 z-30 transition-colors duration-200 ${
          scrolled ? 'bg-page/75 backdrop-blur-xl border-b border-black/10' : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto grid h-12 max-w-2xl grid-cols-[1fr_auto_1fr] items-center px-2">
          <div className="justify-self-start">
            {canGoBack && (
              <button
                onClick={goBack}
                className="flex min-h-[44px] items-center gap-0.5 rounded-lg px-1.5 text-[17px] text-nav active:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
                {t('back')}
              </button>
            )}
          </div>
          <div
            className={`max-w-[55vw] truncate text-[17px] font-semibold text-title transition-opacity duration-200 ${
              showSmallTitle ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {title}
          </div>
          <div />
        </div>
      </header>

      <main className={`mx-auto max-w-2xl px-4 ${className}`}>
        {!inline && (
          <div className="pt-1 pb-5">
            <h1 className={`text-[34px] font-bold leading-tight tracking-tight text-title ${center ? 'text-center' : ''}`}>{title}</h1>
            {subtitle && <p className="mt-1 text-[15px] text-muted">{subtitle}</p>}
          </div>
        )}
        {inline && <div className="h-4" />}
        {children}
      </main>

      {sticky && (
        <div
          className={`fixed inset-x-0 z-20 border-t border-black/10 bg-page/85 backdrop-blur-xl ${
            noTabBar ? 'bottom-0 pb-[env(safe-area-inset-bottom)]' : 'bottom-[calc(3.5rem+env(safe-area-inset-bottom))]'
          }`}
        >
          <div className="mx-auto max-w-2xl px-4 py-3">{sticky}</div>
        </div>
      )}
    </div>
  )
}
