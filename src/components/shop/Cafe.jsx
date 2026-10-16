import { motion } from 'framer-motion'
import { Appear, Box, Cyl, Face, OnLeft, OnTop, P, Person, Shadow, Win, useScene } from './iso.jsx'
import { C, M } from './palette.js'
import { SLOTS } from './layout.js'
import { Conveyor } from './Factory.jsx'

// Café-Ecke (ab Stufe 3): zweistöckiger Anbau rechts am Laden. Mintfassade mit großer Glastür,
// Schriftzug, gelb-weiße Markise, Riesentasse heiße Schokolade auf dem Dach, davor die Terrasse.

const S = SLOTS.cafe
const X0 = S.x
const X1 = S.x + S.w
const Y0 = S.y
const Y1 = S.y + S.d
const H = S.h
const T = SLOTS.terrace

const FONT = 'Inter, system-ui, sans-serif'

export default function Cafe({ stage }) {
  return (
    <g>
      <Appear order={1} dust={{ x: X0, y: Y0, w: S.w, d: S.d }}>
        <Shadow x={X0} y={Y0} w={S.w} d={S.d} h={0.7} />
        <Box x={X0} y={Y0} w={S.w} d={S.d} h={H} m={M.mint} left={<Facade />} right={<Side />} />
      </Appear>

      <Appear order={2}>
        <Box x={X0 - 0.04} y={Y0} z={H} w={S.w + 0.08} d={S.d + 0.06} h={0.12} m={M.wall} />
        <CupSign />
      </Appear>

      <Appear order={3}>
        <Awning />
      </Appear>

      {/* Förderband der Bonbonküche liegt vor der Café-Seitenwand */}
      {stage >= 4 && <Conveyor />}

      <Terrace />
    </g>
  )
}

// Linke Vorderseite: Schriftzug oben, unten Doppel-Glastür zwischen zwei Schaufenstern.
function Facade() {
  const door = { u: 0.98, w: 0.64, v: 1.06 }
  return (
    <g>
      <text x={S.w / 2} y="0.66" textAnchor="middle" fontFamily={FONT} fontWeight="800" fontSize="0.56" fill={C.white}>
        Café
      </text>
      <Win u={0.18} v={1.14} w={0.62} h={0.62} />
      <Win u={1.8} v={1.14} w={0.62} h={0.62} />
      {/* Glastür, zwei Flügel */}
      <rect x={door.u} y={door.v} width={door.w} height={H - door.v} fill={C.ink} />
      <rect x={door.u + 0.07} y={door.v + 0.07} width={door.w / 2 - 0.1} height={H - door.v - 0.07} fill={C.glass} />
      <rect x={door.u + door.w / 2 + 0.03} y={door.v + 0.07} width={door.w / 2 - 0.1} height={H - door.v - 0.07} fill={C.glass} />
      <path
        d={`M${door.u + 0.1} ${H} L${door.u + 0.22} ${door.v + 0.07} H${door.u + 0.29} L${door.u + 0.17} ${H} Z`}
        fill={C.glassShine}
        opacity="0.6"
      />
      <rect x={door.u + door.w / 2 - 0.08} y={door.v + 0.42} width="0.04" height="0.2" fill={M.wall.r} />
      <rect x={door.u + door.w / 2 + 0.04} y={door.v + 0.42} width="0.04" height="0.2" fill={M.wall.r} />
    </g>
  )
}

// Rechte Vorderseite: zwei Fenster im Obergeschoss.
function Side() {
  return (
    <g>
      <Win u={0.45} v={0.28} w={0.5} h={0.5} />
      <Win u={1.6} v={0.28} w={0.5} h={0.5} />
    </g>
  )
}

// Kleine Markise über dem Erdgeschoss, Streifen Butter/Weiß quer zur Wand.
function Awning() {
  const xa = X0 + 0.12
  const xb = X1 - 0.12
  const zTop = 1.08
  const zLow = 0.86
  const reach = 0.5
  const stripes = 9
  const sw = (xb - xa) / stripes
  const faces = []
  const valance = []
  for (let i = 0; i < stripes; i++) {
    const a = xa + i * sw
    const b = a + sw
    const m = i % 2 ? M.wall : M.butter
    faces.push(<Face key={i} points={[[a, Y1, zTop], [b, Y1, zTop], [b, Y1 + reach, zLow], [a, Y1 + reach, zLow]]} fill={m.t} />)
    const u = i * sw
    valance.push(
      <path
        key={i}
        d={`M${u} 0 H${u + sw} V0.1 A${sw / 2} ${sw / 2} 0 0 1 ${u} 0.1 Z`}
        fill={m.l}
      />,
    )
  }
  return (
    <g>
      {faces}
      <OnLeft x={xa} y={Y1 + reach} z={zLow}>
        {valance}
      </OnLeft>
    </g>
  )
}

// Riesentasse heiße Schokolade auf dem Dach, mit Dampf.
const CUP = { x: 9.3, y: 6.15, z: H + 0.12, rad: 0.4 }
function CupSign() {
  const { x, y, z, rad } = CUP
  const top = z + 0.08 + 0.58
  const [hx, hy] = P(x, y, z + 0.4)
  const rx = Math.SQRT2 * rad * 20
  const [sx, sy] = P(x, y, top)
  const srx = rx * 0.8
  return (
    <g>
      <OnTop z={z}>
        <ellipse cx={x + 0.32} cy={y} rx={rad + 0.5} ry={rad + 0.14} fill={C.shadow} opacity="0.35" />
      </OnTop>
      <Cyl x={x} y={y} z={z} rad={rad + 0.16} h={0.08} m={M.wall} />
      {/* Henkel rechts */}
      <path
        d={`M${hx + rx - 2} ${hy - 5} C${hx + rx + 8} ${hy - 7}, ${hx + rx + 8} ${hy + 6}, ${hx + rx - 2} ${hy + 4}`}
        fill="none"
        stroke={M.wall.r}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <Cyl x={x} y={y} z={z + 0.08} rad={rad} h={0.2} m={M.wall} />
      <Cyl x={x} y={y} z={z + 0.28} rad={rad} h={0.14} m={M.pink} />
      <Cyl x={x} y={y} z={z + 0.42} rad={rad} h={0.24} m={M.wall} />
      <ellipse cx={sx} cy={sy + 0.6} rx={srx} ry={srx / 2} fill={M.wood.r} />
      <Steam x={sx} y={sy} />
    </g>
  )
}

function Steam({ x, y }) {
  const { still } = useScene()
  const fill = M.wallBlue.l
  if (still) {
    return (
      <g>
        <circle cx={x - 2} cy={y - 8} r="3.6" fill={fill} />
        <circle cx={x + 2} cy={y - 16} r="4.6" fill={fill} opacity="0.7" />
      </g>
    )
  }
  const dur = 6
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={x + (i - 1) * 2.5}
          cy={y - 3}
          r="3.6"
          fill={fill}
          initial={{ x: 0, y: 0, scale: 0.5, opacity: 0 }}
          animate={{ y: [0, -26], x: [0, i === 1 ? 3 : -2, 2], scale: [0.5, 1.35], opacity: [0, 1, 0] }}
          transition={{ duration: dur, delay: (i * dur) / 3, repeat: Infinity, ease: 'easeOut', times: [0, 0.3, 1] }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
      ))}
    </g>
  )
}

// Terrasse: Holzdeck, zwei Bistrotische mit Stühlen, Sonnenschirm über dem rechten Tisch.
const TABLES = [
  { x: 8.35, y: 8.5, seat: '-x', spare: '+y', guest: { shirt: C.shirt[4], skin: C.skin[1], hair: C.hair[1] } },
  { x: 9.7, y: 8.15, seat: '-y', spare: '+x', guest: { shirt: C.shirt[0], skin: C.skin[3], hair: C.hair[0] }, parasol: true },
]

// Seite eines Tisches → Lage des Stuhls (Lehne zeigt vom Tisch weg)
const SIDE = { '-x': [-1, 0], '+x': [1, 0], '-y': [0, -1], '+y': [0, 1] }

function Terrace() {
  return (
    <g>
      <Appear order={0} dust={{ x: T.x, y: T.y, w: T.w, d: T.d }}>
        <Box x={T.x} y={T.y} w={T.w} d={T.d} h={0.06} m={M.wood} rim={false} />
      </Appear>
      {TABLES.map((t) => (
        <BistroSet key={`${t.x}-${t.y}`} {...t} />
      ))}
    </g>
  )
}

// Gast sitzt hinter dem Tisch (wird vorher gezeichnet), der freie Stuhl steht davor.
function BistroSet({ x, y, seat, spare, guest, parasol }) {
  const z = 0.06
  const [gx, gy] = SIDE[seat]
  const [sx, sy] = SIDE[spare]
  return (
    <g>
      <Appear order={3}>
        <Chair x={x + gx * 0.44} y={y + gy * 0.44} z={z} back={seat} />
      </Appear>
      <Appear order={4}>
        <Person x={x + gx * 0.38} y={y + gy * 0.38} z={z + 0.2} {...guest} />
      </Appear>
      <Appear order={3}>
        <Table x={x} y={y} z={z} />
        <Chair x={x + sx * 0.44} y={y + sy * 0.44} z={z} back={spare} />
        {parasol && <Parasol x={x} y={y} z={z} />}
      </Appear>
    </g>
  )
}

// Bistrostuhl: dünne Beine, Sitz, Lehne auf der vom Tisch abgewandten Seite.
function Chair({ x, y, z, back }) {
  const s = 0.24
  const a = x - s / 2
  const b = y - s / 2
  const t = 0.04
  const leg = (lx, ly) => <Box key={`${lx}-${ly}`} x={lx} y={ly} z={z} w={0.035} d={0.035} h={0.2} m={M.ink} rim={false} />
  const rest = {
    '-x': { x: a, y: b, w: t, d: s },
    '+x': { x: a + s - t, y: b, w: t, d: s },
    '-y': { x: a, y: b, w: s, d: t },
    '+y': { x: a, y: b + s - t, w: s, d: t },
  }[back]
  const backrest = <Box {...rest} z={z + 0.24} h={0.2} m={M.pink} rim={false} />
  const behind = back[0] === '-'
  return (
    <g>
      {behind && backrest}
      {leg(a, b)}
      {leg(a + s - 0.035, b)}
      {leg(a, b + s - 0.035)}
      {leg(a + s - 0.035, b + s - 0.035)}
      <Box x={a} y={b} z={z + 0.2} w={s} d={s} h={0.04} m={M.pink} rim={false} />
      {!behind && backrest}
    </g>
  )
}

function Table({ x, y, z }) {
  return (
    <g>
      <ellipse {...flat(x + 0.12, y, z, 0.24)} fill={C.shadow} opacity="0.35" />
      <Cyl x={x} y={y} z={z} rad={0.035} h={0.4} m={M.ink} />
      <Cyl x={x} y={y} z={z + 0.4} rad={0.27} h={0.05} m={M.wall} />
      <Cyl x={x + 0.08} y={y - 0.04} z={z + 0.45} rad={0.06} h={0.07} m={M.wall} />
    </g>
  )
}

// Sonnenschirm: achteckiges Dach, Bahnen abwechselnd Butter/Weiß, von hinten nach vorne gezeichnet.
function Parasol({ x, y, z }) {
  const zr = z + 1.18
  const za = zr + 0.3
  const R = 0.62
  const n = 8
  const rim = (i) => {
    const a = (i / n) * Math.PI * 2 + Math.PI / n
    return [x + R * Math.cos(a), y + R * Math.sin(a), zr]
  }
  const facets = []
  for (let i = 0; i < n; i++) {
    const p = rim(i)
    const q = rim(i + 1)
    const mx = (p[0] + q[0]) / 2 - x
    const my = (p[1] + q[1]) / 2 - y
    const m = i % 2 ? M.wall : M.butter
    const tone = mx > 0.25 && my < 0.25 ? m.r : my > 0.25 && mx < 0.25 ? m.l : m.t
    facets.push({ depth: mx + my, el: <Face key={i} points={[[x, y, za], p, q]} fill={tone} /> })
  }
  facets.sort((a, b) => a.depth - b.depth)
  return (
    <g>
      <ellipse {...flat(x + 0.45, y, z, R * 0.85)} fill={C.shadow} opacity="0.35" />
      <Cyl x={x} y={y} z={z + 0.45} rad={0.025} h={zr - z - 0.45} m={M.ink} />
      {facets.map((f) => f.el)}
      <Cyl x={x} y={y} z={za - 0.02} rad={0.04} h={0.08} m={M.ink} />
    </g>
  )
}

function flat(x, y, z, rad) {
  const [cx, cy] = P(x, y, z)
  const rx = Math.SQRT2 * rad * 20
  return { cx, cy, rx, ry: rx / 2 }
}
