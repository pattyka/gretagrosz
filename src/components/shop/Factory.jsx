import { useId } from 'react'
import { motion } from 'framer-motion'
import { Appear, Box, Cyl, Face, OnLeft, OnTop, P, Shadow, pts, useScene } from './iso.jsx'
import { C, M } from './palette.js'
import { SLOTS } from './layout.js'

// Bonbonküche (ab Stufe 4): kleine, freundliche Fabrik hinten rechts. Sheddach mit Oberlichtern,
// Karamellkessel und Zuckerstangen-Schornstein auf dem Flachdach, Rolltor rechts.
// Das Förderband kommt aus einer Luke vorne rechts und läuft rechts am Café vorbei; es liegt vor
// der Café-Seitenwand und wird deshalb im Café-Durchgang gezeichnet (Export `Conveyor`).

const F = SLOTS.factory
const X0 = F.x
const X1 = F.x + F.w
const Y0 = F.y
const Y1 = F.y + F.d
const H = 1.9 // Traufhöhe
const RISE = 0.45 // Höhe eines Shed-Zahns
const SAW_END = 9.7 // bis hier Sheddach, dahinter Flachdach mit Kessel und Schornstein
const TEETH = 3

// Förderband: Lage im Grundriss (Luke in der linken Vorderseite, Band läuft nach vorne)
export const BELT = { x: 10.2, w: 0.45, y: Y1, d: 2.45, z: 0.4, h: 0.1 }

export default function Factory({ stage }) {
  return (
    <g>
      {/* Halle */}
      <Appear order={1} dust={{ x: X0, y: Y0, w: F.w, d: F.d }}>
        <Shadow x={X0} y={Y0} w={F.w} d={F.d} h={0.55} />
        <Box x={X0} y={Y0} w={F.w} d={F.d} h={H} m={M.wall} left={<FrontWall />} right={<SideWall />} />
      </Appear>

      {/* Sheddach, Schornstein, Kessel */}
      <Appear order={2}>
        <SawRoof />
        <Chimney />
        <Kettle />
      </Appear>

      {/* Ab Stufe 7: die Marke steht auf dem Dach */}
      {stage >= 7 && (
        <Appear order={3}>
          <RoofSign />
        </Appear>
      )}
    </g>
  )
}

// Linke Vorderseite: rosa Zierband oben, Luke fürs Förderband ganz rechts (nur dort ist die Wand frei).
function FrontWall() {
  const hu = BELT.x - X0 // Luke links
  const hw = BELT.w
  const top = H - (BELT.z + BELT.h) - 0.42
  return (
    <g>
      <rect x="0" y="0" width={F.w} height="0.14" fill={M.pink.l} />
      <rect x={hu - 0.06} y={top - 0.06} width={hw + 0.12} height={H - BELT.z - top + 0.06} fill={M.steel.l} />
      <rect x={hu} y={top} width={hw} height={H - BELT.z - top} fill={C.ink} />
      {/* halb hochgeklappte Lamellen der Luke */}
      <rect x={hu} y={top} width={hw} height="0.07" fill={M.steel.r} />
      <rect x={hu} y={top + 0.11} width={hw} height="0.07" fill={M.steel.r} />
    </g>
  )
}

// Rechte Vorderseite: Rolltor mit Lamellen, rosa Zierband.
function SideWall() {
  const u = 0.95
  const w = 1.15
  const v = 0.78
  const slats = []
  for (let s = v + 0.16; s < H - 0.05; s += 0.16) {
    slats.push(<rect key={s} x={u} y={s} width={w} height="0.045" fill={M.steel.r} />)
  }
  return (
    <g>
      <rect x="0" y="0" width={F.d} height="0.14" fill={M.pink.r} />
      <rect x={u - 0.08} y={v - 0.16} width={w + 0.16} height="0.16" fill={M.steel.r} />
      <rect x={u} y={v} width={w} height={H - v} fill={M.steel.l} />
      {slats}
      <rect x={u + w / 2 - 0.12} y={H - 0.2} width="0.24" height="0.06" fill={M.ink.l} />
    </g>
  )
}

// Sheddach: Schrägen in Rosa, senkrechte Oberlichter nach vorne (linke Vorderseite).
function SawRoof() {
  const teeth = []
  for (let k = 0; k < TEETH; k++) {
    const ya = Y0 + k
    const yb = ya + 1
    teeth.push(
      <g key={k}>
        <Face points={[[SAW_END, ya, H], [SAW_END, yb, H + RISE], [SAW_END, yb, H]]} fill={M.wall.r} />
        <Face points={[[X0, ya, H], [SAW_END, ya, H], [SAW_END, yb, H + RISE], [X0, yb, H + RISE]]} fill={M.pink.t} />
        <OnLeft x={X0} y={yb} z={H + RISE}>
          <Skylight w={SAW_END - X0} h={RISE} />
        </OnLeft>
      </g>,
    )
  }
  return <g>{teeth}</g>
}

function Skylight({ w, h }) {
  const panes = 4
  const pw = w / panes
  return (
    <g>
      <rect x="0" y="0" width={w} height={h} fill={C.glass} />
      {Array.from({ length: panes }, (_, i) => (
        <path
          key={i}
          d={`M${i * pw + pw * 0.3} ${h} L${i * pw + pw * 0.5} 0 H${i * pw + pw * 0.62} L${i * pw + pw * 0.42} ${h} Z`}
          fill={C.glassShine}
          opacity="0.6"
        />
      ))}
      {Array.from({ length: panes - 1 }, (_, i) => (
        <rect key={i} x={(i + 1) * pw - 0.03} y="0" width="0.06" height={h} fill={M.pink.l} />
      ))}
      <rect x="0" y="0" width={w} height="0.07" fill={M.pink.l} />
    </g>
  )
}

// Schornstein mit Zuckerstangen-Ringen.
const CH = { x: 10.4, y: 1.6, rad: 0.19, ring: 0.26, rings: 6 }
function Chimney() {
  const rings = []
  for (let i = 0; i < CH.rings; i++) {
    rings.push(
      <Cyl key={i} x={CH.x} y={CH.y} z={H + i * CH.ring} rad={CH.rad} h={CH.ring} m={i % 2 ? M.pink : M.wall} />,
    )
  }
  const top = H + CH.rings * CH.ring
  return (
    <g>
      <RoofShadow x={CH.x} y={CH.y} rad={CH.rad} len={0.7} />
      {rings}
      <Cyl x={CH.x} y={CH.y} z={top} rad={CH.rad + 0.05} h={0.1} m={M.pink} />
      <ellipse {...hole(CH.x, CH.y, top + 0.1, CH.rad * 0.7)} fill={M.ink.l} />
      <Puffs x={CH.x} y={CH.y} z={top + 0.1} />
    </g>
  )
}

// Karamellkessel: Stahl mit Butter-Band, Deckel und Rührwerk.
const KT = { x: 10.25, y: 3.3, rad: 0.44 }
function Kettle() {
  return (
    <g>
      <RoofShadow x={KT.x} y={KT.y} rad={KT.rad} len={0.6} />
      <Cyl x={KT.x} y={KT.y} z={H} rad={KT.rad} h={0.3} m={M.steel} />
      <Cyl x={KT.x} y={KT.y} z={H + 0.3} rad={KT.rad} h={0.2} m={M.butter} />
      <Cyl x={KT.x} y={KT.y} z={H + 0.5} rad={KT.rad} h={0.2} m={M.steel} />
      <Cyl x={KT.x} y={KT.y} z={H + 0.7} rad={KT.rad * 0.72} h={0.1} m={M.steel} />
      <Cyl x={KT.x} y={KT.y} z={H + 0.8} rad={0.09} h={0.22} m={M.ink} />
    </g>
  )
}

// Flacher Schatten eines Zylinders auf dem Flachdach, nach rechts (+x) gezogen.
function RoofShadow({ x, y, rad, len }) {
  return (
    <OnTop z={H}>
      <ellipse cx={x + len / 2} cy={y} rx={rad + len / 2} ry={rad} fill={C.shadow} opacity="0.35" />
    </OnTop>
  )
}

function hole(x, y, z, rad) {
  const [cx, cy] = P(x, y, z)
  const rx = Math.SQRT2 * rad * 20
  return { cx, cy, rx, ry: rx / 2 }
}

// Rauch: drei weiche Wölkchen steigen auf und verblassen.
function Puffs({ x, y, z }) {
  const { still } = useScene()
  const [cx, cy] = P(x, y, z)
  const fill = M.wallBlue.l
  if (still) {
    return (
      <g>
        <circle cx={cx + 2} cy={cy - 9} r="4.2" fill={fill} />
        <circle cx={cx + 6} cy={cy - 19} r="5.4" fill={fill} opacity="0.7" />
      </g>
    )
  }
  const dur = 6.6
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy - 3}
          r="4.4"
          fill={fill}
          initial={{ x: 0, y: 0, scale: 0.55, opacity: 0 }}
          animate={{ y: [0, -34], x: [0, 9], scale: [0.55, 1.45], opacity: [0, 1, 0] }}
          transition={{ duration: dur, delay: (i * dur) / 3, repeat: Infinity, ease: 'easeOut', times: [0, 0.25, 1] }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
      ))}
    </g>
  )
}

// Ab Stufe 7: Markenschild auf der vordersten Shed-Kante.
function RoofSign() {
  const x = 7.85
  const w = 1.7
  const z0 = H + RISE + 0.1
  const hgt = 0.55
  const post = (u) => <Box x={u} y={Y1 - 0.1} z={H + RISE - 0.02} w={0.06} d={0.06} h={0.14} m={M.ink} rim={false} />
  return (
    <g>
      {post(x + 0.25)}
      {post(x + w - 0.3)}
      <Box
        x={x}
        y={Y1 - 0.08}
        z={z0}
        w={w}
        d={0.08}
        h={hgt}
        m={M.pink}
        left={
          <text
            x={w / 2}
            y={hgt * 0.73}
            textAnchor="middle"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="800"
            fontSize="0.4"
            fill={C.white}
          >
            Loopy's
          </text>
        }
      />
    </g>
  )
}

// Förderband mit Bonbons in Endlosschleife und einer Kiste am Ende. Wird vom Café gezeichnet.
export function Conveyor() {
  const uid = useId().replace(/:/g, '')
  const { still } = useScene()
  const { x, w, y, d, z, h } = BELT
  const zt = z + h
  const legs = [y + 0.45, y + 1.3, y + 2.15]
  const sp = 0.42 // Abstand der Bonbons
  const period = sp * 3 // Farbfolge wiederholt sich nach drei Bonbons
  const xc = x + w / 2
  const r = 2.9
  const count = Math.ceil((d + period) / sp) + 1
  const candies = []
  for (let i = 0; i < count; i++) {
    const [cx, cy] = P(xc, y - period + i * sp, zt)
    const fill = C.candy[[0, 1, 3][i % 3]]
    candies.push(
      <g key={i}>
        <circle cx={cx} cy={cy - r + 0.6} r={r} fill={fill} />
        <circle cx={cx - 1} cy={cy - r - 0.4} r="0.9" fill={C.white} opacity="0.75" />
      </g>,
    )
  }
  const clip = pts([
    [x, y, zt + 0.5],
    [x + w, y, zt + 0.5],
    [x + w, y, zt],
    [x + w, y + d, zt],
    [x, y + d, zt],
    [x, y + d, zt + 0.5],
  ])
  const [dx, dy] = [-20 * period, 10 * period]
  const crate = { x: x - 0.05, y: y + d - 0.05, w: w + 0.12, d: 0.5, h: 0.32 }
  return (
    <Appear order={3} dust={{ x, y, w, d }}>
      <Shadow x={x} y={y} w={w} d={d} h={0.35} />
      {legs.map((ly) => (
        <g key={ly}>
          <Box x={x + 0.04} y={ly} w={0.05} d={0.05} h={z} m={M.steel} rim={false} />
          <Box x={x + w - 0.09} y={ly} w={0.05} d={0.05} h={z} m={M.steel} rim={false} />
        </g>
      ))}
      <Box x={x} y={y} z={z} w={w} d={d} h={h} m={M.steel} rim={false} />
      <Face points={[[x + 0.06, y, zt], [x + w - 0.06, y, zt], [x + w - 0.06, y + d, zt], [x + 0.06, y + d, zt]]} fill={M.ink.t} />
      <clipPath id={`belt-${uid}`}>
        <polygon points={clip} />
      </clipPath>
      <g clipPath={`url(#belt-${uid})`}>
        {still ? (
          <g transform={`translate(${dx * 0.5} ${dy * 0.5})`}>{candies}</g>
        ) : (
          <motion.g
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, dx], y: [0, dy] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: 'linear' }}
          >
            {candies}
          </motion.g>
        )}
      </g>
      {/* Kiste mit fertigen Bonbons */}
      <Shadow x={crate.x} y={crate.y} w={crate.w} d={crate.d} h={0.3} />
      <Box {...crate} m={M.wood} left={<rect x="0" y="0.1" width={crate.w} height="0.05" fill={M.wood.r} />} />
      <CrateHeap x={crate.x} y={crate.y} w={crate.w} d={crate.d} z={crate.h} />
    </Appear>
  )
}

function CrateHeap({ x, y, w, d, z }) {
  const spots = [
    [0.18, 0.15, 0],
    [0.42, 0.12, 1],
    [0.3, 0.32, 3],
    [0.12, 0.38, 2],
    [0.48, 0.36, 4],
  ]
  return (
    <g>
      {spots.map(([u, v, c]) => {
        const [cx, cy] = P(x + u * (w / 0.57), y + v * (d / 0.5), z)
        return (
          <g key={`${u}-${v}`}>
            <circle cx={cx} cy={cy - 1.6} r="2.6" fill={C.candy[c]} />
            <circle cx={cx - 0.9} cy={cy - 2.6} r="0.8" fill={C.white} opacity="0.75" />
          </g>
        )
      })}
    </g>
  )
}
