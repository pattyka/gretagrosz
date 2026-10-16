import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SHOP_LEVELS, levelText } from '../data/shop.js'
import { useLang } from '../i18n.jsx'
import { useProgress } from '../progress.jsx'
import ShopScene from './ShopScene.jsx'

// Kurzer Hinweis unten am Bildschirm, wenn Loopys Laden eine neue Stufe erreicht.
export default function LevelUpToast() {
  const { levelUp, clearLevelUp } = useProgress()
  const { lang, t } = useLang()
  const navigate = useNavigate()

  useEffect(() => {
    if (levelUp === null) return
    const timer = setTimeout(clearLevelUp, 5000)
    return () => clearTimeout(timer)
  }, [levelUp]) // eslint-disable-line react-hooks/exhaustive-deps

  const level = levelUp !== null ? SHOP_LEVELS[levelUp] : null

  return (
    <AnimatePresence>
      {level && (
        <motion.div
          key={levelUp}
          exit={{ opacity: 0, y: 40 }}
          className="pointer-events-none fixed inset-x-0 bottom-24 z-40 flex justify-center px-4"
        >
          <motion.button
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60 }}
            onClick={() => {
              clearLevelUp()
              navigate('/')
            }}
            className="pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-blob bg-accent p-4 text-left text-accent-on shadow-bubble"
          >
            <ShopScene level={levelUp} still className="h-14 w-20 shrink-0" />
            <span>
              <span className="block text-lg font-bold">
                {t('levelUp')} {levelText(level, lang).name}
              </span>
              <span className="block text-sm opacity-90">{t('levelUpTap')}</span>
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
