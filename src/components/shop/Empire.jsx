import { useId, useState } from 'react'
import { motion } from 'framer-motion'
import { Appear, Ball, Box, OnLeft, P, ZS, useScene } from './iso.jsx'
import { C, M } from './palette.js'
import { SLOTS } from './layout.js'

// Stufe 7: Candy-Imperium. Ein Heißluftballon in Markenfarben über dem Park,
// Fahnen am Platz und einmal Konfetti, wenn die Stufe erreicht wird.

const PARK = SLOTS.park
const BAL = { x: PARK.x, y: PARK.y + PARK.d, z: 6.2 } // linke Parkecke, frei neben dem Turm // Ballonmitte
const R = 27 // Hüllenradius in px

export default function Empire() {
  return (
    <g>
      <Appear order={3}>
        <Flag />
      </Appear>
      <Appear order={2}>
        <Balloon />
      </Appear>
      <Confetti />
    </g>
  )
}

// Markenfahne auf dem First der Filiale: Stufe 7 hisst sie über Haus Nummer 2.
const POLE = { x: SLOTS.branch.x + SLOTS.branch.w / 2, y: SLOTS.branch.y + 0.75, z: SLOTS.branch.h }
const POLE_H = 1.0

function Flag() {
  const { x, y, z } = POLE
  return (
    <g>
      <Box x={x - 0.03} y={y - 0.03} z={z - 0.1} w={0.06} d={0.06} h={POLE_H + 0.1} m={M.steel} rim={false} />
      <Ball x={x} y={y} z={z + POLE_H + 0.05} rad={0.06} m={M.butter} />
      <OnLeft x={x + 0.03} y={y + 0.03} z={z + POLE_H - 0.04}>
        <path d="M0 0 C0.22 -0.07 0.42 0.07 0.7 0 V0.44 C0.42 0.51 0.22 0.37 0 0.44 Z" fill={M.blue.l} />
        <circle cx={0.35} cy={0.22} r={0.1} fill={C.white} />
      </OnLeft>
    </g>
  )
}

// Hülle: Kugel oben, nach unten zum Hals verjüngt. Ursprung = Kugelmitte.
const ENVELOPE = `M${-0.3 * R} ${1.1 * R} C${-0.78 * R} ${0.78 * R} ${-R} ${0.42 * R} ${-R} 0 A${R} ${R} 0 0 1 ${R} 0 C${R} ${0.42 * R} ${0.78 * R} ${0.78 * R} ${0.3 * R} ${1.1 * R} Z`

// Bahn als Linse von der Spitze bis zum Hals, k = halbe Breite am Äquator
function lens(k) {
  const c = k * R * 1.36
  return `M0 ${-R} Q${c} ${0.05 * R} 0 ${1.2 * R} Q${-c} ${0.05 * R} 0 ${-R} Z`
}

const BAND_TOP = 0.36
const BAND_H = 0.27
const band = `M${-R} ${BAND_TOP * R} Q0 ${(BAND_TOP + 0.26) * R} ${R} ${BAND_TOP * R} L${R} ${(BAND_TOP + BAND_H) * R} Q0 ${(BAND_TOP + BAND_H + 0.26) * R} ${-R} ${(BAND_TOP + BAND_H) * R} Z`
const bandMid = `M${-R} ${(BAND_TOP + BAND_H / 2) * R} Q0 ${(BAND_TOP + BAND_H / 2 + 0.26) * R} ${R} ${(BAND_TOP + BAND_H / 2) * R}`

function Skin({ blue, white, butter }) {
  return (
    <>
      <path d={ENVELOPE} fill={blue} />
      <path d={lens(0.8)} fill={white} />
      <path d={lens(0.4)} fill={blue} />
      <path d={band} fill={butter} />
    </>
  )
}

function Balloon() {
  const { still } = useScene()
  const uid = useId().replace(/:/g, '')
  const [cx, cy] = P(BAL.x, BAL.y, BAL.z)
  const neck = 1.1 * R
  const drop = 15 // Seillänge bis zum Korbrand in px
  const bw = 0.48 // Korb in Kacheln
  const bh = 0.34
  const basketTop = BAL.z - (neck + drop) / ZS
  const ropes = [
    [P(BAL.x - bw / 2, BAL.y + bw / 2, basketTop), -0.3 * R],
    [P(BAL.x + bw / 2, BAL.y - bw / 2, basketTop), 0.3 * R],
    [P(BAL.x + bw / 2, BAL.y + bw / 2, basketTop), 0.05 * R],
  ]
  const body = (
    <g>
      {/* Seile vom Hals zum Korb */}
      {ropes.map(([[rx, ry], nx], i) => (
        <line key={i} x1={cx + nx} y1={cy + neck - 1} x2={rx} y2={ry} stroke={M.ink.t} strokeWidth="0.8" />
      ))}
      <Box
        x={BAL.x - bw / 2}
        y={BAL.y - bw / 2}
        z={basketTop - bh}
        w={bw}
        d={bw}
        h={bh}
        m={{ t: M.wood.r, l: M.wood.l, r: M.wood.r }}
        rim={false}
      />
      <g transform={`translate(${cx} ${cy})`}>
        <clipPath id={`env-${uid}`}>
          <path d={ENVELOPE} />
        </clipPath>
        <clipPath id={`lit-${uid}`}>
          <circle cx={-0.2 * R} cy={-0.12 * R} r={1.02 * R} />
        </clipPath>
        {/* Schattenseite rechts unten, beleuchtete Seite oben links */}
        <g clipPath={`url(#env-${uid})`}>
          <Skin blue={M.blue.r} white={M.wall.r} butter={M.butter.r} />
          <g clipPath={`url(#lit-${uid})`}>
            <Skin blue={M.blue.l} white={C.white} butter={M.butter.l} />
          </g>
          <ellipse cx={-0.42 * R} cy={-0.5 * R} rx={0.2 * R} ry={0.13 * R} fill={M.blue.t} transform={`rotate(-35 ${-0.42 * R} ${-0.5 * R})`} />
        </g>
        <path id={`band-${uid}`} d={bandMid} fill="none" />
        <text fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize={0.23 * R} fill={M.blue.r} dy={0.08 * R}>
          <textPath href={`#band-${uid}`} startOffset="50%" textAnchor="middle">
            Loopy&apos;s
          </textPath>
        </text>
        {/* Brennerring am Hals */}
        <rect x={-0.32 * R} y={neck - 1.6} width={0.64 * R} height={3} rx={1.5} fill={M.ink.l} />
      </g>
    </g>
  )
  if (still) return body
  return (
    <motion.g
      animate={{ y: [0, -4, 0, 3, 0], x: [0, 1.5, 3, 1.5, 0] }}
      transition={{ duration: 8.6, repeat: Infinity, ease: 'easeInOut' }}
    >
      {body}
    </motion.g>
  )
}

// Konfetti nur beim Aufstieg auf Stufe 7: ein paar runde Streifen, die einmal über dem Laden fallen.
const PIECES = [
  { dx: -92, up: -24, fall: 96, rot: 220, c: 0 },
  { dx: -60, up: -42, fall: 120, rot: -260, c: 1 },
  { dx: -26, up: -52, fall: 104, rot: 300, c: 2 },
  { dx: 22, up: -50, fall: 126, rot: -200, c: 3 },
  { dx: 58, up: -40, fall: 108, rot: 240, c: 4 },
  { dx: 94, up: -22, fall: 98, rot: -280, c: 5 },
]

function Confetti() {
  const { ready, still } = useScene()
  const [burst] = useState(() => ready.current)
  if (!burst || still) return null
  const s = SLOTS.shop
  // über dem Turm samt Dachschriftzug
  const [cx, cy] = P(s.x + s.w / 2, s.y + s.d / 2, 7.4)
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {PIECES.map((p, i) => (
        <motion.rect
          key={i}
          x={-4.5}
          y={-2}
          width={9}
          height={4}
          rx={1.8}
          fill={C.candy[p.c]}
          initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, p.dx * 0.8, p.dx],
            y: [0, p.up, p.fall],
            rotate: [0, p.rot * 0.4, p.rot],
          }}
          transition={{
            duration: 1.9,
            delay: 0.5 + i * 0.035,
            times: [0, 0.28, 1],
            ease: ['easeOut', 'easeIn'],
            opacity: { duration: 1.9, delay: 0.5 + i * 0.035, times: [0, 0.08, 0.75, 1] },
          }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
      ))}
    </g>
  )
}
