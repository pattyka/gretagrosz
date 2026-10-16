import { useEffect, useMemo, useRef } from 'react'
import { MotionConfig, motion, useReducedMotion } from 'framer-motion'
import { SceneContext } from './shop/iso.jsx'
import { cameraFor } from './shop/layout.js'
import { IslandBase, IslandFront } from './shop/Island.jsx'
import Stall from './shop/Stall.jsx'
import MainShop from './shop/MainShop.jsx'
import Cafe from './shop/Cafe.jsx'
import Factory from './shop/Factory.jsx'
import Delivery from './shop/Delivery.jsx'
import Branch from './shop/Branch.jsx'
import Empire from './shop/Empire.jsx'

// Loopys Laden als schwebende isometrische Insel. Jede Stufe (0–7) baut auf der vorigen auf:
// Was schon steht, bleibt an seinem Platz; Neues fällt beim Aufstieg ein, die Insel wächst
// und die Kamera zoomt mit. Gezeichnet wird von hinten nach vorne.
//
// still: keine Endlos-Animationen (kleine Darstellung im Hinweis, Vorschauen).
// animateIn: auch beim ersten Zeichnen alles einfallen lassen (Vorschau der Aufbau-Animation).
export default function ShopScene({ level, className = '', style, still = false, animateIn = false }) {
  const reduced = useReducedMotion()
  const ready = useRef(animateIn)
  useEffect(() => {
    ready.current = true
  }, [])

  const stage = Math.max(0, Math.min(7, level))
  const quiet = still || reduced
  const scene = useMemo(() => ({ ready, still: quiet, stage }), [quiet, stage])
  const viewBox = cameraFor(stage).join(' ')

  return (
    <MotionConfig reducedMotion={still ? 'always' : 'user'}>
      <SceneContext.Provider value={scene}>
        <motion.svg
          viewBox={viewBox}
          initial={false}
          animate={{ viewBox }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className={className}
          style={style}
          role="img"
          aria-label="Loopy's Candy Store"
        >
          <IslandBase stage={stage} />
          {stage >= 4 && <Factory stage={stage} />}
          {stage >= 6 && <Branch stage={stage} />}
          {stage === 0 && <Stall stage={stage} />}
          {stage >= 1 && <MainShop stage={stage} />}
          {stage >= 3 && <Cafe stage={stage} />}
          <IslandFront stage={stage} />
          {stage >= 5 && <Delivery stage={stage} />}
          {stage >= 7 && <Empire stage={stage} />}
        </motion.svg>
      </SceneContext.Provider>
    </MotionConfig>
  )
}
