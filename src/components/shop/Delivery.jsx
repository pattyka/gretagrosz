import { useId } from 'react'
import { motion } from 'framer-motion'
import { Appear, Box, Face, K, OnLeft, P, Shadow, Win, useScene } from './iso.jsx'
import { C, M } from './palette.js'
import { SLOTS } from './layout.js'

// Stufe 5: Online-Shop & Lieferwagen. Abholstation am Gehweg, ein Lieferwagen auf der Straße,
// Bestellungen ploppen als kleine Mitteilungen über dem Laden auf.

const ROAD = SLOTS.road
const VY = ROAD.y + 0.32 // Wagen-Grundriss quer zur Straße
const VD = 0.92
const STOP = 6.3 // Haltepunkt hinter dem Zebrastreifen, vor Laden und Abholstation (Heck-x)

// Fahrplan einer Runde (Anteile von LOOP): rein, halten, Schiebetür auf/zu, raus.
const LOOP = 11
const DRIVE = {
  times: [0, 0.07, 0.42, 0.66, 0.92, 1],
  at: [0.1, 0.8, STOP, STOP, 9.5, 9.85],
  ease: ['linear', [0.2, 0.6, 0.35, 1], 'linear', [0.55, 0, 0.8, 0.5], 'linear'],
}
const FADE = { times: [0, 0.07, 0.88, 0.96, 1], values: [0, 1, 1, 0, 0] }
const DOOR = { times: [0, 0.46, 0.5, 0.6, 0.64, 1], values: [0, 0, -0.46, -0.46, 0, 0] }

export default function Delivery({ stage }) {
  const { still } = useScene()
  return (
    <g>
      <Appear order={1} dust={{ x: SLOTS.lockers.x, y: SLOTS.lockers.y, w: SLOTS.lockers.w, d: SLOTS.lockers.d }}>
        <Lockers />
      </Appear>
      <Appear order={3}>
        <Orders still={still} stage={stage} />
      </Appear>
      <Appear order={3}>
        <Van still={still} />
      </Appear>
    </g>
  )
}

// Abholstation: Stahlschrank mit Fächern, ein Fach steht offen und hält ein Paket bereit.
function Lockers() {
  const { x, y, w, d, h } = SLOTS.lockers
  const cols = 3
  const rows = 2
  const pad = 0.1
  const gap = 0.06
  const cw = (w - pad * 2 - gap * (cols - 1)) / cols
  const ch = (h - 0.32 - pad - gap * (rows - 1)) / rows
  const top = 0.32
  // offenes Fach: Spalte 1, Reihe 1 (unten Mitte)
  const oc = 1
  const or = 1
  const ou = pad + oc * (cw + gap)
  const ov = top + or * (ch + gap)
  const hinge = x + ou + cw // Scharnier rechts, Tür klappt zur Straße auf
  const z0 = h - ov - ch
  const z1 = h - ov
  return (
    <g>
      <Shadow x={x} y={y} w={w} d={d} h={h} />
      <Box x={x} y={y} w={w} d={d} h={h} m={M.steel} />
      {/* blaue Dachkante mit Überstand */}
      <Box x={x - 0.06} y={y - 0.06} z={h} w={w + 0.12} d={d + 0.12} h={0.12} m={M.blue} />
      <OnLeft x={x} y={y + d} z={h}>
        {/* Kopfleiste mit Markenpunkt */}
        <rect x={pad} y={0.08} width={w - pad * 2} height={0.17} rx={0.06} fill={M.ink.l} />
        <circle cx={pad + 0.13} cy={0.165} r={0.05} fill={C.candy[0]} />
        <rect x={pad + 0.26} y={0.14} width={0.5} height={0.05} rx={0.025} fill={M.steel.t} opacity={0.7} />
        {Array.from({ length: cols * rows }, (_, i) => {
          const c = i % cols
          const r = Math.floor(i / cols)
          const u = pad + c * (cw + gap)
          const v = top + r * (ch + gap)
          if (c === oc && r === or) {
            return (
              <g key={i}>
                <rect x={u} y={v} width={cw} height={ch} rx={0.03} fill={M.ink.r} />
                {/* Paket im offenen Fach */}
                <rect x={u + 0.07} y={v + ch * 0.38} width={cw - 0.14} height={ch * 0.62} fill={M.wood.l} />
                <rect x={u + 0.07} y={v + ch * 0.38} width={cw - 0.14} height={0.06} fill={M.wood.t} />
                <rect x={u + cw / 2 - 0.035} y={v + ch * 0.38} width={0.07} height={ch * 0.62} fill={M.blue.l} />
              </g>
            )
          }
          const door = (c + r) % 2 === 0 ? M.blue : M.butter
          return (
            <g key={i}>
              <rect x={u} y={v} width={cw} height={ch} rx={0.03} fill={door.l} />
              <rect x={u + cw - 0.12} y={v + ch / 2 - 0.08} width={0.05} height={0.16} rx={0.02} fill={door.r} />
            </g>
          )
        })}
      </OnLeft>
      {/* aufgeklappte Fachtür (Ebene x = Scharnier), Innenseite sichtbar */}
      <Face
        points={[
          [hinge, y + d, z1],
          [hinge, y + d + 0.36, z1],
          [hinge, y + d + 0.36, z0],
          [hinge, y + d, z0],
        ]}
        fill={M.butter.r}
      />
    </g>
  )
}

// Der Lieferwagen, gebaut am Ursprung der Straße (Heck bei x = 0) und dann verschoben.
function VanBody({ doorStyle }) {
  const uid = useId().replace(/:/g, '')
  const cargo = { w: 1.42, h: 1.0 }
  const cab = { w: 0.6, h: 0.78 }
  const z0 = 0.2
  const y = VY
  const d = VD
  const face = (
    <>
      {/* Markenstreifen mit Schriftzug */}
      <rect x={0} y={0.36} width={cargo.w} height={0.3} fill={M.blue.l} />
      <text x={0.09} y={0.58} fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="0.23" fill={C.white}>
        Loopy&apos;s
      </text>
    </>
  )
  const du = 0.9 // Schiebetür: u 0.9 … 1.38
  const dw = 0.48
  return (
    <g>
      <Shadow x={0.05} y={y} w={cargo.w + cab.w} d={d} h={0.7} onDark />
      {/* Unterboden, damit der Wagen nicht schwebt */}
      <Box x={0.12} y={y + 0.08} z={0.06} w={1.85} d={d - 0.16} h={0.16} m={M.ink} rim={false} />
      {/* Laderaum */}
      <Box
        x={0}
        y={y}
        z={z0}
        w={cargo.w}
        d={d}
        h={cargo.h}
        m={M.wall}
        left={
          <>
            {/* Innenraum hinter der Schiebetür mit Paket */}
            <rect x={du} y={0.08} width={dw} height={0.84} fill={M.ink.l} />
            <rect x={du + 0.08} y={0.5} width={0.28} height={0.42} fill={M.wood.l} />
            <rect x={du + 0.08} y={0.5} width={0.28} height={0.05} fill={M.wood.t} />
            <clipPath id={`van-face-${uid}`}>
              <rect x={0} y={0} width={du} height={cargo.h} />
            </clipPath>
            <g clipPath={`url(#van-face-${uid})`}>{face}</g>
            {/* Schiebetür trägt ihr Stück vom Streifen mit */}
            <motion.g {...doorStyle}>
              <clipPath id={`van-door-${uid}`}>
                <rect x={du} y={0.06} width={dw} height={cargo.h - 0.06} />
              </clipPath>
              <rect x={du} y={0.06} width={dw} height={cargo.h - 0.06} fill={M.wall.l} />
              <g clipPath={`url(#van-door-${uid})`}>{face}</g>
              <rect x={du} y={0.06} width={0.035} height={cargo.h - 0.06} fill={M.wall.r} />
              <rect x={du + 0.06} y={0.74} width={0.12} height={0.045} rx={0.02} fill={M.ink.l} />
            </motion.g>
          </>
        }
        right={<rect x={0.08} y={0.08} width={d - 0.16} height={0.84} fill={M.wall.r} />}
      />
      {/* Fahrerhaus in Markenblau */}
      <Box
        x={cargo.w}
        y={y}
        z={z0}
        w={cab.w}
        d={d}
        h={cab.h}
        m={M.blue}
        left={
          <>
            <Win u={0.06} v={0.07} w={0.4} h={0.3} />
            <rect x={0.32} y={0.46} width={0.1} height={0.04} rx={0.02} fill={M.blue.r} />
          </>
        }
        right={
          <>
            {/* Windschutzscheibe */}
            <rect x={0.07} y={0.07} width={d - 0.14} height={0.33} rx={0.04} fill={M.ink.l} />
            <rect x={0.11} y={0.11} width={d - 0.22} height={0.25} rx={0.03} fill={C.glass} />
            <path d="M0.3 0.36 L0.45 0.11 H0.56 L0.41 0.36 Z" fill={C.glassShine} opacity="0.6" />
            {/* Scheinwerfer und Stoßstange */}
            <rect x={0.08} y={0.5} width={0.13} height={0.08} rx={0.03} fill={C.glowInner} />
            <rect x={d - 0.21} y={0.5} width={0.13} height={0.08} rx={0.03} fill={C.glowInner} />
            <rect x={0} y={cab.h - 0.12} width={d} height={0.12} fill={M.ink.l} />
          </>
        }
      />
      {/* Räder auf der sichtbaren Seite */}
      <OnLeft x={0} y={y + d + 0.01} z={0.4}>
        {[0.34, 1.68].map((u) => (
          <g key={u}>
            <ellipse cx={u} cy={0.2} rx={0.2} ry={0.2} fill={M.ink.l} />
            <ellipse cx={u} cy={0.2} rx={0.085} ry={0.085} fill={M.steel.l} />
          </g>
        ))}
      </OnLeft>
    </g>
  )
}

function Van({ still }) {
  const [sx, sy] = [K, K / 2]
  if (still) {
    return (
      <g transform={`translate(${STOP * sx} ${STOP * sy})`}>
        <VanBody doorStyle={{}} />
      </g>
    )
  }
  const base = { duration: LOOP, repeat: Infinity }
  return (
    <motion.g
      initial={{ x: DRIVE.at[0] * sx, y: DRIVE.at[0] * sy, opacity: 0 }}
      animate={{ x: DRIVE.at.map((a) => a * sx), y: DRIVE.at.map((a) => a * sy), opacity: FADE.values }}
      transition={{
        x: { ...base, times: DRIVE.times, ease: DRIVE.ease },
        y: { ...base, times: DRIVE.times, ease: DRIVE.ease },
        opacity: { ...base, times: FADE.times, ease: 'linear' },
      }}
    >
      <VanBody
        doorStyle={{
          initial: { x: 0 },
          animate: { x: DOOR.values },
          transition: { ...base, times: DOOR.times, ease: 'easeInOut' },
        }}
      />
    </motion.g>
  )
}

// Bestellungen: weiße Mitteilungen mit Bonbonpunkt steigen über dem Laden auf, immer nur eine.
const ORDER_GAP = 3.2
const ORDERS = [
  { dx: -10, color: C.candy[0] },
  { dx: 8, color: C.candy[2] },
  { dx: -2, color: C.candy[1] },
]

function Pill({ color }) {
  return (
    <g>
      <rect x={-16} y={-5.5} width={34} height={13} rx={6.5} fill={C.shadow} opacity={0.35} />
      <rect x={-17} y={-6.5} width={34} height={13} rx={6.5} fill={C.white} />
      <circle cx={-10.5} cy={0} r={3.2} fill={color} />
      <rect x={-5} y={-2.6} width={17} height={2.2} rx={1.1} fill={M.steel.l} />
      <rect x={-5} y={1.2} width={10} height={2.2} rx={1.1} fill={M.steel.t} />
    </g>
  )
}

function Orders({ still, stage }) {
  const s = SLOTS.shop
  // über dem Dachfirst; auf Stufe 7 über dem Turm samt Dachschriftzug
  const [cx, cy] = P(s.x + s.w / 2, s.y + s.d / 2, stage >= 7 ? 8.3 : 5.1)
  if (still) {
    return (
      <g transform={`translate(${cx + ORDERS[0].dx} ${cy})`}>
        <Pill color={ORDERS[0].color} />
      </g>
    )
  }
  const cycle = ORDER_GAP * ORDERS.length
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {ORDERS.map((o, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 6, scale: 0.8, x: o.dx }}
          animate={{ opacity: [0, 1, 1, 0, 0], y: [6, 0, -5, -13, -13], scale: [0.8, 1, 1, 0.96, 0.96] }}
          transition={{
            duration: cycle,
            delay: 0.8 + i * ORDER_GAP,
            repeat: Infinity,
            times: [0, 0.05, 0.2, 0.27, 1],
            ease: 'easeOut',
          }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        >
          <Pill color={o.color} />
        </motion.g>
      ))}
    </g>
  )
}
