import { useEffect, useId } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { Appear, Ball, Box, Cyl, K, P, ZS, topMatrix, useScene } from './iso.jsx'
import { C, M } from './palette.js'
import { SLOTS, STAGES, THICKNESS } from './layout.js'

// Die schwebende Insel (IslandBase) und alles, was vor den Gebäuden steht (IslandFront).
// Boden: Pflaster, Rasen, Straße. Bäume, Laternen, Bänke und Menschen nehmen mit der Stufe zu.

const R = 0.6 // Eckradius der Insel (Kacheln)
const LIP = 0.2 // Deckschicht (Stockwerke)
const EASE = [0.32, 0.72, 0, 1] // wie die Kamera
const GROW = 0.9

// ---------- Geometrie ----------

// Abgerundetes Rechteck in Grundriss-Einheiten (für topMatrix)
function roundRect(x, y, w, d, r) {
  return (
    `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}` +
    `V${y + d - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + d}` +
    `H${x + r}A${r} ${r} 0 0 1 ${x} ${y + d - r}` +
    `V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`
  )
}

// Viereck zwischen linkstem und rechtestem Bildschirmpunkt der Form auf Höhe z, hpx nach unten.
// Zusammen mit der nach unten verschobenen Form ergibt das die sichtbaren Seiten.
function hull(x, y, w, d, r, z, hpx) {
  const c = r * (2 - Math.SQRT2)
  const lx = (x - y - d + c) * K
  const ly = ((x + y + d) * K) / 2 - z * ZS
  const rx = (x + w - y - c) * K
  const ry = ((x + w + y) * K) / 2 - z * ZS
  return `M${lx} ${ly}L${rx} ${ry}L${rx} ${ry + hpx}L${lx} ${ly + hpx}Z`
}

// Flache Platte mit runden Ecken (Pflaster, Rasen, Gehweg)
function Pad({ x, y, w, d, r = 0.3, h = 0.05, z = 0, m }) {
  const uid = useId().replace(/:/g, '')
  const shape = roundRect(x, y, w, d, Math.min(r, w / 2, d / 2))
  const hp = h * ZS
  const fx = (x + w - y - d) * K // vordere Ecke
  const sides = (
    <>
      <path d={shape} transform={`translate(0 ${hp}) ${topMatrix(0, 0, z + h)}`} />
      <path d={hull(x, y, w, d, Math.min(r, w / 2, d / 2), z + h, hp)} />
    </>
  )
  return (
    <g>
      {h > 0 && (
        <>
          <clipPath id={`pad-${uid}`}>
            <rect x={fx} y="-4000" width="8000" height="8000" />
          </clipPath>
          <g fill={m.l}>{sides}</g>
          <g fill={m.r} clipPath={`url(#pad-${uid})`}>
            {sides}
          </g>
        </>
      )}
      <path d={shape} transform={topMatrix(0, 0, z + h)} fill={m.t} />
    </g>
  )
}

// Rechteck flach auf dem Boden (Markierungen, Fugen)
function Mark({ x, y, w, d, z = 0, fill, opacity }) {
  return <rect x={x} y={y} width={w} height={d} transform={topMatrix(0, 0, z)} fill={fill} opacity={opacity} />
}

// ---------- Requisiten ----------

// Baum: Rasenscheibe, Schatten nach rechts, Stamm, Krone
function Tree({ x, y, s = 1 }) {
  const crown = 0.42 * s
  const trunk = 0.5 * s
  return (
    <g>
      <ellipse
        cx={x + 0.32 * s}
        cy={y}
        rx={0.5 * s}
        ry={0.3 * s}
        transform={topMatrix(0, 0, 0)}
        fill={C.shadow}
        opacity="0.35"
      />
      <Cyl x={x} y={y} rad={0.055 * s} h={trunk + 0.2} m={M.wood} />
      <Ball x={x} y={y} z={trunk + crown * 0.85} rad={crown} m={M.leaf} />
    </g>
  )
}

// Laterne: dünner Mast, warme Kugel
function Lamp({ x, y }) {
  return (
    <g>
      <ellipse cx={x + 0.3} cy={y} rx="0.32" ry="0.06" transform={topMatrix(0, 0, 0)} fill={C.shadow} opacity="0.35" />
      <Cyl x={x} y={y} rad={0.045} h={0.08} m={M.ink} />
      <Cyl x={x} y={y} rad={0.022} h={1.05} m={M.ink} />
      <Ball x={x} y={y} z={1.12} rad={0.085} m={M.butter} />
    </g>
  )
}

// Bank, Lehne hinten (kleineres y)
function Bench({ x, y }) {
  return (
    <g>
      <Box x={x} y={y} w={0.62} d={0.06} z={0.12} h={0.28} m={M.wood} rim={false} />
      <Box x={x + 0.04} y={y + 0.06} w={0.06} d={0.16} h={0.12} m={M.ink} rim={false} />
      <Box x={x + 0.52} y={y + 0.06} w={0.06} d={0.16} h={0.12} m={M.ink} rim={false} />
      <Box x={x} y={y + 0.06} w={0.62} d={0.2} z={0.12} h={0.05} m={M.wood} rim={false} />
    </g>
  )
}

// ---------- Menschen ----------

// Gesichtslose Figur wie Person im Baukasten, Schatten getrennt, damit sie beim Gehen wippen kann.
function Body({ shirt, skin, hair }) {
  return (
    <>
      <rect x="-3" y="-9.5" width="6" height="9.5" rx="3" fill={shirt} />
      <rect x="-3" y="-4" width="6" height="4" rx="1.5" fill={C.ink} opacity="0.85" />
      <circle cx="0" cy="-12.5" r="3.1" fill={skin} />
      <path d="M-3.1 -12.6 a3.1 3.1 0 0 1 6.2 0 Z" fill={hair} />
    </>
  )
}

function Figure({ x, y, look }) {
  const [cx, cy] = P(x, y, 0)
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <ellipse cx="2" cy="0" rx="4.5" ry="1.8" fill={C.shadow} opacity="0.35" />
      <Body {...look} />
    </g>
  )
}

// Spaziergänger: pendelt gleichmäßig zwischen zwei Punkten und wippt im Schritt.
function Walker({ from, to, duration, delay = 0, look }) {
  const { still } = useScene()
  const [x0, y0] = P(from[0], from[1], 0)
  const [x1, y1] = P(to[0], to[1], 0)
  if (still) {
    return <Figure x={from[0] + (to[0] - from[0]) * 0.35} y={from[1] + (to[1] - from[1]) * 0.35} look={look} />
  }
  return (
    <motion.g
      initial={{ x: x0, y: y0 }}
      animate={{ x: x1, y: y1 }}
      transition={{ duration, delay, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
    >
      <ellipse cx="2" cy="0" rx="4.5" ry="1.8" fill={C.shadow} opacity="0.35" />
      <motion.g
        animate={{ y: [0, -0.9, 0] }}
        transition={{ duration: 0.42, ease: 'easeInOut', repeat: Infinity }}
      >
        <Body {...look} />
      </motion.g>
    </motion.g>
  )
}

const look = (i, j = i, k = i) => ({
  shirt: C.shirt[i % C.shirt.length],
  skin: C.skin[j % C.skin.length],
  hair: C.hair[k % C.hair.length],
})

// ---------- Insel ----------

// Wert, der bei einer neuen Stufe weich zum Ziel gleitet (gleiches Timing wie die Kamera)
function useGrow(v) {
  const mv = useMotionValue(v)
  useEffect(() => {
    const c = animate(mv, v, { duration: GROW, ease: EASE })
    return () => c.stop()
  }, [mv, v])
  return mv
}

function Slab({ stage }) {
  const uid = useId().replace(/:/g, '')
  const [a, b] = STAGES[stage].island
  const av = useGrow(a)
  const bv = useGrow(b)
  const T = THICKNESS * ZS
  const L = LIP * ZS

  const shape = useTransform([av, bv], ([a0, b0]) => roundRect(a0, a0, b0 - a0, b0 - a0, R))
  const body = useTransform([av, bv], ([a0, b0]) => hull(a0, a0, b0 - a0, b0 - a0, R, 0, T))
  const lip = useTransform([av, bv], ([a0, b0]) => hull(a0, a0, b0 - a0, b0 - a0, R, 0, L))
  const sides = (hpx, quad) => (
    <>
      <motion.path d={shape} transform={`translate(0 ${hpx}) ${topMatrix(0, 0, 0)}`} />
      <motion.path d={quad} />
    </>
  )

  return (
    <g>
      <clipPath id={`isl-r-${uid}`}>
        <rect x="0" y="-4000" width="8000" height="8000" />
      </clipPath>
      {/* Erdkörper */}
      <g fill={M.plot.l}>{sides(T, body)}</g>
      <g fill={M.plot.r} clipPath={`url(#isl-r-${uid})`}>
        {sides(T, body)}
      </g>
      {/* helle Deckschicht */}
      <g fill={M.paving.l}>{sides(L, lip)}</g>
      <g fill={M.paving.r} clipPath={`url(#isl-r-${uid})`}>
        {sides(L, lip)}
      </g>
      <motion.path d={shape} transform={topMatrix(0, 0, 0)} fill={M.plot.t} />
      {/* Bodenumriss als Maske für alles, was flach auf der Insel liegt */}
      <clipPath id={`isl-top-${uid}`}>
        <motion.path d={shape} transform={topMatrix(0, 0, 0)} />
      </clipPath>
      <g clipPath={`url(#isl-top-${uid})`}>
        <Ground stage={stage} />
      </g>
    </g>
  )
}

// Straße mit Mittelstreifen, Gehsteig dahinter und davor, Zebrastreifen zum Platz
// Zebrastreifen bei x 4.95–6.15: der Lieferwagen hält direkt dahinter (Delivery.jsx, STOP).
function Road() {
  const { y, d } = SLOTS.road
  const mid = y + d / 2
  const dashes = []
  for (let x = 0.35; x < 12; x += 0.9) {
    if (x > 4.6 && x < 6.6) continue
    dashes.push(<Mark key={x} x={x} y={mid - 0.04} w={0.45} d={0.08} fill={C.white} opacity="0.85" />)
  }
  return (
    <g>
      <Pad x={-0.2} y={y} w={12.4} d={d} r={0} h={0} m={M.road} />
      {dashes}
      {[0, 1, 2, 3, 4].map((i) => (
        <Mark key={i} x={4.95} y={y + 0.14 + i * 0.27} w={1.2} d={0.14} fill={C.white} opacity="0.9" />
      ))}
      {/* Gehsteig hinter und vor der Straße */}
      <Pad x={-0.2} y={y - 0.5} w={12.4} d={0.52} r={0} h={0.06} m={M.paving} />
      <Pad x={-0.2} y={y + d - 0.02} w={12.4} d={0.7} r={0} h={0.06} m={M.paving} />
    </g>
  )
}

function Ground({ stage }) {
  return (
    <g>
      {stage === 0 && (
        <Appear order={0}>
          <Pad x={4.45} y={4.7} w={3.15} d={3.05} r={0.4} h={0.04} m={M.paving} />
        </Appear>
      )}
      {stage <= 3 && (
        <Appear order={0}>
          <Pad x={7.62} y={3.62} w={0.82} d={0.7} r={0.3} m={M.grass} />
        </Appear>
      )}
      {stage >= 1 && stage <= 3 && (
        <Appear order={0}>
          <Pad x={2.98} y={3.0} w={0.82} d={3.75} r={0.35} m={M.grass} />
        </Appear>
      )}
      {stage >= 4 && (
        <Appear order={0}>
          <Pad x={1.0} y={1.0} w={2.75} d={4.85} r={0.45} m={M.grass} />
        </Appear>
      )}
      {stage === 3 && (
        <Appear order={0}>
          <Pad x={2.62} y={6.3} w={0.68} d={2.9} r={0.32} m={M.grass} />
        </Appear>
      )}
      {stage >= 4 && stage <= 5 && (
        <Appear order={0}>
          <Pad x={1.0} y={6.3} w={2.3} d={2.9} r={0.4} m={M.grass} />
        </Appear>
      )}
      {stage >= 1 && stage <= 2 && (
        <Appear order={0}>
          <Pad x={8.25} y={7.4} w={0.75} d={1.55} r={0.3} m={M.grass} />
        </Appear>
      )}
      {stage >= 5 && (
        <Appear order={0}>
          <Pad x={10.95} y={6.95} w={0.72} d={2.6} r={0.32} m={M.grass} />
        </Appear>
      )}
      {stage >= 1 && (
        <Appear order={0}>
          <Pad {...SLOTS.plaza} r={0.35} h={0.04} m={M.paving} />
        </Appear>
      )}
      {/* Beet an der linken Ecke, ab Stufe 1 im Platz */}
      <Appear order={0}>
        <Pad x={3.62} y={7.42} w={0.6} d={0.98} r={0.28} z={stage >= 1 ? 0.04 : 0} m={M.grass} />
      </Appear>
      {stage >= 5 && (
        <Appear order={0}>
          <Road />
        </Appear>
      )}
    </g>
  )
}

export function IslandBase({ stage }) {
  return (
    <g>
      <Slab stage={stage} />
      {/* Bäume hinter den Gebäuden */}
      {stage >= 1 && stage <= 3 && (
        <Appear order={3}>
          <Tree x={3.38} y={5.3} s={0.85} />
        </Appear>
      )}
      {stage >= 4 && (
        <Appear order={3}>
          <Tree x={1.6} y={1.7} />
          <Tree x={2.95} y={1.55} s={0.8} />
          <Tree x={1.45} y={3.2} s={0.85} />
          <Tree x={2.85} y={2.95} s={1.05} />
          <Tree x={1.7} y={4.75} s={0.95} />
          <Tree x={3.1} y={4.45} s={0.75} />
        </Appear>
      )}
      {stage >= 4 && (
        <Appear order={3}>
          <Bench x={1.85} y={3.85} />
        </Appear>
      )}
      {stage >= 6 && (
        <Appear order={4}>
          <Figure x={2.7} y={4.05} look={look(5, 0, 3)} />
        </Appear>
      )}
      {stage >= 1 && stage <= 3 && (
        <Appear order={3}>
          <Tree x={3.4} y={3.7} s={0.95} />
        </Appear>
      )}
      {stage <= 3 && (
        <Appear order={3}>
          <Tree x={8.0} y={3.95} s={0.9} />
        </Appear>
      )}
      {stage >= 4 && stage <= 5 && (
        <Appear order={3}>
          <Tree x={1.7} y={7.0} s={0.9} />
        </Appear>
      )}
      {stage >= 3 && stage <= 5 && (
        <Appear order={3}>
          <Tree x={2.92} y={8.85} s={0.8} />
        </Appear>
      )}
    </g>
  )
}

export function IslandFront({ stage }) {
  return (
    <g>
      <Appear order={3}>
        <Tree x={3.92} y={7.88} s={0.9} />
      </Appear>
      {stage >= 1 && stage <= 2 && (
        <Appear order={3}>
          <Bench x={8.35} y={7.75} />
          <Tree x={8.62} y={8.55} s={0.75} />
        </Appear>
      )}
      {stage >= 2 && (
        <Appear order={3}>
          <Lamp x={4.35} y={9.2} />
          <Lamp x={7.3} y={9.2} />
        </Appear>
      )}
      {stage >= 5 && (
        <Appear order={3}>
          <Tree x={11.3} y={7.5} s={1.0} />
          <Tree x={11.28} y={8.85} s={0.75} />
        </Appear>
      )}

      {/* Kundschaft */}
      {stage === 0 && (
        <Appear order={4}>
          <Figure x={5.55} y={7.0} look={look(1, 0, 1)} />
          <Figure x={6.35} y={7.2} look={look(2, 2, 0)} />
        </Appear>
      )}
      {stage === 0 && (
        <Appear order={4}>
          <Walker from={[4.7, 8.15]} to={[7.6, 8.15]} duration={7.5} look={look(5, 1, 3)} />
        </Appear>
      )}
      {stage >= 1 && (
        <Appear order={4}>
          <Figure x={4.7} y={7.48} look={look(3, 1, 2)} />
          <Figure x={5.95} y={7.45} look={look(0, 0, 3)} />
        </Appear>
      )}
      {stage >= 2 && (
        <Appear order={4}>
          <Figure x={6.0} y={8.15} look={look(5, 2, 1)} />
        </Appear>
      )}
      {/* Schlange vor der Tür */}
      {stage >= 7 && (
        <Appear order={4}>
          <Figure x={4.68} y={7.94} look={look(2, 3, 0)} />
          <Figure x={4.7} y={8.4} look={look(4, 0, 2)} />
          <Figure x={4.66} y={8.86} look={look(1, 2, 3)} />
        </Appear>
      )}
      {stage >= 1 && (
        <Appear order={4}>
          <Walker from={[5.25, 8.95]} to={[7.15, 8.95]} duration={6.5} look={look(4, 3, 0)} />
        </Appear>
      )}
      {stage >= 5 && (
        <Appear order={4}>
          <Walker from={[0.6, 9.78]} to={[8.6, 9.78]} duration={9} delay={1.5} look={look(1, 1, 1)} />
        </Appear>
      )}
    </g>
  )
}
