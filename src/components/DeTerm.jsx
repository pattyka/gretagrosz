import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '../i18n.jsx'

// Kleiner „DE“-Chip: zeigt beim Antippen den deutschen Fachbegriff.
// Nur sichtbar, wenn nicht Deutsch eingestellt ist und sich der Begriff unterscheidet.
export default function DeTerm({ term, shown, className = '' }) {
  const { lang, t } = useLang()
  const [open, setOpen] = useState(false)
  // Reine Zahlen/Symbole (z. B. „2 → 1,0“) brauchen keine Übersetzung.
  if (lang === 'de' || !term || term === shown || !/\p{L}/u.test(term)) return null

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        setOpen((o) => !o)
      }}
      aria-label={t('showGerman')}
      aria-expanded={open}
      className={`inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-sm font-semibold text-amber-700 align-middle ${className}`}
    >
      <span aria-hidden className="font-bold">DE</span>
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.span key="term" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} lang="de">
            {term}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </button>
  )
}
