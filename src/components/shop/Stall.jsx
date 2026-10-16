import { motion } from 'framer-motion'
import { Appear, Ball, Box, Cyl, Face, OnLeft, OnRight, P, Shadow, useScene } from './iso.jsx'
import { C, M } from './palette.js'
import { SLOTS } from './layout.js'
import Loopy from './Loopy.jsx'

// Stufe 0: Loopys Stand am Wochenmarkt. Holztheke mit Bonbongläsern, gestreifte Markise
// mit Bogenkante, Kisten voller Bonbons und eine handgeschriebene Preistafel.

const S = SLOTS.stall // x 5.1 · y 5.3 · w 1.8 · d 1.2
const X1 = S.x + S.w
const Y1 = S.y + S.d

// Markise: hinten hoch, vorne tiefer, ragt ringsum etwas über
const AW = { x0: S.x - 0.15, x1: X1 + 0.15, y0: S.y - 0.1, y1: Y1 + 0.12, zBack: 2.12, zFront: 1.86 }
const STRIPE = 0.3
const DROP = 0.1 // Höhe des Volants über den Bögen
const CANDY = [M.pink, M.butter, M.mint, M.pink]

// Glas: Inhalt in Bonbonfarbe, Glasschulter, Deckel, ein Lichtstreif links
function Jar({ x, y, z, m }) {
  const [cx, cy] = P(x, y, z + 0.17)
  return (
    <g>
      <Cyl x={x} y={y} z={z} rad={0.11} h={0.17} m={m} />
      <Cyl x={x} y={y} z={z + 0.17} rad={0.11} h={0.06} m={M.wallBlue} />
      <Cyl x={x} y={y} z={z + 0.23} rad={0.07} h={0.04} m={M.steel} />
      <rect x={cx - 2.2} y={cy - 0.6} width="0.8" height="3.4" rx="0.4" fill={C.white} opacity="0.75" />
    </g>
  )
}

// Kiste mit Bonbons obenauf
function Crate({ x, y, z = 0, w, d, h, candy }) {
  return (
    <g>
      <Box
        x={x}
        y={y}
        z={z}
        w={w}
        d={d}
        h={h}
        m={M.wood}
        left={<rect x="0" y={h * 0.45} width={w} height="0.035" fill={M.wood.r} />}
        right={<rect x="0" y={h * 0.45} width={d} height="0.035" fill={M.wood.r} opacity="0.7" />}
        top={<rect x="0.05" y="0.05" width={w - 0.1} height={d - 0.1} rx="0.03" fill={M.wood.r} />}
      />
      {candy.map(([u, v, m], i) => (
        <Ball key={i} x={x + u} y={y + v} z={z + h + 0.07} rad={0.085} m={m} />
      ))}
    </g>
  )
}

// Volant mit Bögen auf einer Seitenfläche: n Streifen ab Farbe start
function Valance({ n, width, start, tones }) {
  const rx = width / 2
  return (
    <>
      {Array.from({ length: n }, (_, i) => {
        const u0 = i * width
        const u1 = Math.min(u0 + width, n * width)
        const fill = (i + start) % 2 === 0 ? tones[0] : tones[1]
        return (
          <path
            key={i}
            d={`M${u0} 0H${u1}V${DROP}A${rx} 0.13 0 0 1 ${u0} ${DROP}Z`}
            fill={fill}
            stroke={fill}
            strokeWidth="0.02"
          />
        )
      })}
    </>
  )
}

function Awning() {
  const { still } = useScene()
  const { x0, x1, y0, y1, zBack, zFront } = AW
  const n = Math.round((x1 - x0) / STRIPE)
  const side = y1 - y0
  const nSide = Math.ceil(side / STRIPE)
  const breathe = still
    ? {}
    : {
        animate: { rotate: [0, 0.9, 0, -0.7, 0] },
        transition: { duration: 7.5, ease: 'easeInOut', repeat: Infinity },
      }
  return (
    <motion.g style={{ transformBox: 'fill-box', transformOrigin: '50% 0%' }} {...breathe}>
      {/* Stoffbahnen von hinten nach vorne */}
      {Array.from({ length: n }, (_, i) => {
        const a = x0 + i * STRIPE
        const b = a + STRIPE
        return (
          <Face
            key={i}
            points={[[a, y0, zBack], [b, y0, zBack], [b, y1, zFront], [a, y1, zFront]]}
            fill={i % 2 === 0 ? M.blue.t : M.paving.t}
          />
        )
      })}
      {/* rechter Volant (beginnt an der vorderen Ecke mit der Farbe der letzten Bahn) */}
      <OnRight x={x1} y={y1} z={zFront}>
        <Valance n={nSide} width={side / nSide} start={(n - 1) % 2} tones={[M.blue.r, M.paving.r]} />
      </OnRight>
      {/* vorderer Volant */}
      <OnLeft x={x0} y={y1} z={zFront}>
        <Valance n={n} width={STRIPE} start={0} tones={[M.blue.l, M.paving.l]} />
      </OnLeft>
    </motion.g>
  )
}

// Preistafel: kleine Kreidetafel auf Holzfüßen, Preise als Kreidestriche
function PriceBoard({ x, y }) {
  const w = 0.5
  const h = 0.62
  return (
    <g>
      <Box x={x + 0.04} y={y - 0.08} w={0.08} d={0.16} h={0.06} m={M.wood} rim={false} />
      <Box x={x + w - 0.12} y={y - 0.08} w={0.08} d={0.16} h={0.06} m={M.wood} rim={false} />
      <Box
        x={x}
        y={y - 0.03}
        w={w}
        d={0.05}
        h={h}
        z={0.04}
        m={M.wood}
        rim={false}
        left={
          <g>
            <rect x="0.05" y="0.06" width={w - 0.1} height={h - 0.14} rx="0.02" fill={C.ink} />
            <g fill="none" stroke={C.white} strokeWidth="0.03" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0.1 0.16 q0.04 -0.05 0.08 0 t0.08 0 t0.07 -0.01" />
              <path d="M0.1 0.29 q0.03 -0.04 0.06 0 t0.06 0" />
              <path d="M0.3 0.27 l0.03 0.03 l0.06 -0.06" opacity="0.8" />
              <path d="M0.1 0.41 q0.04 -0.05 0.08 0 t0.09 -0.01" />
            </g>
            <circle cx="0.36" cy="0.15" r="0.035" fill={M.pink.l} />
            <circle cx="0.37" cy="0.4" r="0.035" fill={M.butter.l} />
          </g>
        }
      />
    </g>
  )
}

export default function Stall() {
  const post = (x, y, h) => <Box x={x} y={y} w={0.08} d={0.08} h={h} m={M.wood} rim={false} />
  const jarY = S.y + 0.92
  return (
    <g>
      <Appear order={0}>
        <Shadow x={S.x} y={S.y} w={S.w} d={S.d + 0.1} h={0.9} />
      </Appear>

      {/* Kistenstapel links hinten */}
      <Appear order={3}>
        <Crate x={S.x - 0.62} y={S.y + 0.2} w={0.46} d={0.42} h={0.26} candy={[]} />
        <Crate
          x={S.x - 0.6}
          y={S.y + 0.22}
          z={0.26}
          w={0.42}
          d={0.38}
          h={0.24}
          candy={[[0.12, 0.12, M.butter], [0.28, 0.14, M.pink], [0.16, 0.27, M.mint], [0.3, 0.29, M.butter]]}
        />
      </Appear>

      <Appear order={1} dust={{ x: S.x, y: S.y, w: S.w, d: S.d }}>
        {/* hintere Pfosten */}
        {post(S.x + 0.02, S.y + 0.02, AW.zBack - 0.04)}
        {post(X1 - 0.1, S.y + 0.02, AW.zBack - 0.04)}
      </Appear>

      {/* Loopy hinter der Theke */}
      <Appear order={4}>
        <Loopy x={S.x + 0.8} y={S.y + 0.66} z={0.26} scale={0.95} />
      </Appear>

      <Appear order={1}>
        {post(S.x, Y1 - 0.08, AW.zFront + 0.02)}
        {/* Theke mit Markenschild */}
        <Box
          x={S.x + 0.08}
          y={S.y + 0.7}
          w={S.w - 0.16}
          d={0.5}
          h={0.42}
          m={M.wood}
          left={
            <g>
              <rect x="0.12" y="0.08" width={S.w - 0.4} height="0.24" rx="0.03" fill={M.blue.l} />
              <text
                x={(S.w - 0.16) / 2}
                y="0.27"
                textAnchor="middle"
                fontFamily="Inter, system-ui, sans-serif"
                fontWeight="800"
                fontSize="0.21"
                fill={C.white}
              >
                Loopy’s
              </text>
            </g>
          }
          right={<rect x="0" y="0.08" width="0.5" height="0.035" fill={M.wood.l} opacity="0.6" />}
        />
      </Appear>

      {/* Bonbongläser auf der Theke */}
      <Appear order={3}>
        {CANDY.map((m, i) => (
          <Jar key={i} x={S.x + 0.32 + i * 0.3} y={jarY} z={0.42} m={m} />
        ))}
      </Appear>

      <Appear order={1}>{post(X1 - 0.08, Y1 - 0.08, AW.zFront + 0.02)}</Appear>

      <Appear order={2}>
        <Awning />
      </Appear>

      {/* Kiste rechts vorne */}
      <Appear order={3}>
        <Crate
          x={X1 + 0.12}
          y={S.y + 0.62}
          w={0.48}
          d={0.44}
          h={0.3}
          candy={[[0.13, 0.12, M.pink], [0.32, 0.13, M.mint], [0.14, 0.3, M.blue], [0.33, 0.31, M.pink], [0.23, 0.21, M.butter]]}
        />
      </Appear>

      {/* Preistafel vorne links */}
      <Appear order={3}>
        <PriceBoard x={S.x - 0.68} y={Y1 + 0.42} />
      </Appear>
    </g>
  )
}
