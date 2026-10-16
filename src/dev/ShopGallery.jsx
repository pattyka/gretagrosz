import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import ShopScene from '../components/ShopScene.jsx'
import { SHOP_LEVELS } from '../data/shop.js'

// Nur im Entwicklungsserver: /shop-gallery.html
//   (ohne Parameter) alle 8 Stufen nebeneinander
//   ?level=3            eine Stufe groß
//   ?level=3&from=2     Stufe 2 zeigen, nach 600 ms auf 3 steigen (Aufbau-Animation)
//   ?play=1             alle Stufen der Reihe nach durchspielen
//   ?still=1            ohne Endlos-Animationen (für Vorschaubilder)
//   ?w=900              Breite der Einzelansicht in px
const q = new URLSearchParams(location.search)
const still = q.get('still') === '1'

function Single() {
  const target = Number(q.get('level'))
  const from = q.has('from') ? Number(q.get('from')) : target
  const [level, setLevel] = useState(from)
  useEffect(() => {
    if (from === target) return
    const t = setTimeout(() => setLevel(target), 600)
    return () => clearTimeout(t)
  }, [from, target])
  return (
    <div className="flex min-h-screen items-center justify-center bg-page p-6">
      <div className="rounded-blob bg-white p-6 shadow-bubbleSm" style={{ width: Number(q.get('w') ?? 720) }}>
        <ShopScene level={level} still={still} className="h-auto w-full" />
      </div>
    </div>
  )
}

function Play() {
  const [level, setLevel] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setLevel((l) => Math.min(l + 1, 7)), 2600)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-page p-6">
      <div className="rounded-blob bg-white p-5 shadow-bubbleSm" style={{ width: Number(q.get('w') ?? 448) }}>
        <ShopScene level={level} className="h-auto w-full" />
        <p className="mt-2 text-center text-lg font-bold text-slate-900">
          {level + 1} · {SHOP_LEVELS[level].de.name}
        </p>
      </div>
    </div>
  )
}

function Grid() {
  return (
    <div className="min-h-screen bg-page p-6">
      <div className="grid grid-cols-4 gap-5">
        {SHOP_LEVELS.map((l, i) => (
          <div key={i} className="rounded-blob bg-white p-4 shadow-bubbleSm">
            <ShopScene level={i} still={still} className="h-auto w-full" />
            <p className="mt-1 text-center font-semibold text-slate-900">
              {i + 1} · {l.de.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        {SHOP_LEVELS.map((_, i) => (
          <div key={i} className="flex items-center rounded-blob bg-accent p-2">
            <ShopScene level={i} still className="h-14 w-20" />
          </div>
        ))}
      </div>
    </div>
  )
}

const View = q.has('level') ? Single : q.get('play') === '1' ? Play : Grid

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <View />
  </StrictMode>,
)
