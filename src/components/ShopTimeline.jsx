import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SHOP_LEVELS, levelText } from '../data/shop.js'
import { useLang } from '../i18n.jsx'
import ShopScene from './ShopScene.jsx'

// Loopys Firmengeschichte: alle Stufen zum Durchwischen, jede mit ihrem BW-Begriff.
// Erreichte Stufen zeigen die Szene, kommende nur ihren Umriss in Akzentblau.
export default function ShopTimeline({ open, current, onClose }) {
  return (
    <AnimatePresence>
      {open && <Sheet current={current} onClose={onClose} />}
    </AnimatePresence>
  )
}

function Sheet({ current, onClose }) {
  const { lang, t } = useLang()
  const currentCard = useRef(null)

  useEffect(() => {
    currentCard.current?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'instant' })
    const onKey = (e) => e.key === 'Escape' && onClose()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" role="dialog" aria-modal="true" aria-label={t('historyTitle')}>
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="relative w-full max-w-xl rounded-t-[28px] bg-page pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-bubble"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 380, damping: 38 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.6 }}
        onDragEnd={(_, info) => (info.offset.y > 120 || info.velocity.y > 600) && onClose()}
      >
        <div className="mx-auto mt-2 h-1.5 w-9 rounded-full bg-black/15" />
        <div className="relative flex items-center justify-center px-5 pb-3 pt-3">
          <h2 className="text-[17px] font-semibold text-title">{t('historyTitle')}</h2>
          <button onClick={onClose} className="absolute right-5 text-[17px] font-semibold text-accent-ink active:opacity-50">
            {t('obDone')}
          </button>
        </div>

        <svg width="0" height="0" className="absolute" aria-hidden>
          <filter id="shop-outline" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0.478  0 0 0 0 1  0 0 0 0.14 0" />
          </filter>
        </svg>

        <div
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-[9%] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          {SHOP_LEVELS.map((level, i) => {
            const reached = i <= current
            const { name, text } = levelText(level, lang)
            return (
              <article
                key={i}
                ref={i === current ? currentCard : null}
                className="w-[82%] shrink-0 snap-center rounded-blob bg-white p-5 shadow-bubbleSm"
              >
                <ShopScene
                  level={i}
                  still={i !== current}
                  className="h-auto w-full"
                  style={reached ? undefined : { filter: 'url(#shop-outline)' }}
                />
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-sm font-semibold text-accent-ink">{t('levelN', { n: i + 1 })}</span>
                  {i === current && (
                    <span className="rounded-full bg-accent-ink px-2 py-0.5 text-xs font-semibold text-white">{t('historyNow')}</span>
                  )}
                  {!reached && <span className="text-sm text-slate-500">· {t('historyFrom', { n: level.xp })}</span>}
                </div>
                <h3 className="mt-1 text-[22px] font-bold leading-tight tracking-tight text-slate-900">{name}</h3>
                <p className="mt-1.5 text-[15px] leading-snug text-slate-600">{text}</p>
              </article>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
