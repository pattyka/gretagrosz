import { Appear, Box, Face, Gable, K, OnLeft, P, Person, Shadow, Win, ZS } from './iso.jsx'
import { C, M } from './palette.js'
import { SLOTS } from './layout.js'

// Stufe 6: zweite Filiale links am Platz. Dieselbe Marke wie der Hauptladen (helle Wände,
// blaues Dach, gestreifte Markise), nur kleiner, mit einer großen „2“ auf dem Dach und der Filialleiterin an der Tür.

const B = SLOTS.branch
// Traufhöhe; der Giebel trägt bis SLOTS.branch.h. Ab 0,6 Stockwerken Firsthöhe bleibt die
// hintere Dachfläche unsichtbar, darum nicht flacher.
const WALL = 1.8
const ROOF = { t: M.blue.t, l: M.wall.l, r: M.blue.l } // Giebelwand in Wandfarbe, Dachfläche blau

export default function Branch() {
  const { x, y, w, d, h } = B
  const front = y + d
  return (
    <g>
      <Appear order={1} dust={{ x, y, w, d }}>
        <Shadow x={x} y={y} w={w} d={d} h={h} />
        <Box
          x={x}
          y={y}
          w={w}
          d={d}
          h={WALL}
          m={M.wall}
          left={<Facade />}
          right={
            <>
              <Win u={0.5} v={0.14} w={0.5} h={0.38} />
              <Win u={1.6} v={0.14} w={0.5} h={0.38} />
              <Win u={1.0} v={0.9} w={0.62} h={0.5} lit />
            </>
          }
        />
      </Appear>
      <Appear order={2}>
        <Gable x={x} y={y} z={WALL} w={w} d={d} h={h - WALL} m={ROOF} axis="y" over={0.12} />
        {/* rundes Giebelfenster wie am Hauptladen */}
        <OnLeft x={x} y={front} z={h}>
          <circle cx={w / 2} cy={0.36} r={0.15} fill={C.ink} />
          <circle cx={w / 2} cy={0.36} r={0.1} fill={C.glass} />
        </OnLeft>
        <RoofTwo />
      </Appear>
      <Appear order={3}>
        <Awning x={x + 0.22} y={front} z={0.98} w={1.32} />
      </Appear>
      <Appear order={4}>
        <Person x={x + 1.93} y={front + 0.26} shirt={C.shirt[0]} skin={C.skin[1]} hair={C.hair[1]} />
      </Appear>
    </g>
  )
}

// Große „2“ auf der rechten Dachfläche, von oben lesbar wie eine Dachmarkierung.
// Ebene der Dachfläche: Ursprung am vorderen Firstende, u läuft den First entlang nach hinten
// (−y, in Kacheln), v die Dachfläche hinab bis zur Traufe (0 … 1).
function RoofTwo() {
  const { x, y, w, d, h } = B
  const over = 0.12
  const xm = x + w / 2
  const x1 = x + w + over
  const y1 = y + d + over
  const [ox, oy] = P(xm, y1, h)
  const vx = (x1 - xm) * K
  const vy = ((x1 - xm) * K) / 2 + (h - WALL) * ZS
  return (
    <g transform={`matrix(${K} ${-K / 2} ${vx} ${vy} ${ox} ${oy})`}>
      <ellipse cx={1.0} cy={0.5} rx={0.5} ry={0.36} fill={C.white} />
      <text
        x={1.0}
        y={0.5}
        dy={0.12}
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="0.5"
        fill={M.blue.l}
        transform="translate(0 0.5) scale(1 0.7) translate(0 -0.5)"
      >
        2
      </text>
    </g>
  )
}

// Fassade (Ebene y = vorne), Ursprung oben links auf Traufhöhe.
function Facade() {
  return (
    <g>
      {/* Obergeschoss: zwei Fenster */}
      <Win u={0.32} v={0.14} w={0.5} h={0.38} />
      <Win u={1.05} v={0.14} w={0.5} h={0.38} />
      {/* Schriftzug zwischen den Geschossen */}
      <text x={0.32} y={0.75} fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="0.21" fill={M.blue.l}>
        Loopy&apos;s
      </text>
      {/* Schaufenster mit Glasreihe */}
      <rect x={0.22} y={0.9} width={1.32} height={0.66} fill={C.ink} />
      <rect x={0.28} y={0.96} width={1.2} height={0.54} fill={C.glass} />
      <rect x={0.28} y={1.33} width={1.2} height={0.05} fill={M.wood.l} />
      {[0.42, 0.66, 0.9, 1.14, 1.38].map((u, i) => (
        <rect key={u} x={u - 0.06} y={1.16} width={0.12} height={0.17} rx={0.03} fill={C.candy[i % 3]} />
      ))}
      {/* Tür mit Griff */}
      <rect x={1.74} y={0.84} width={0.5} height={0.96} rx={0.02} fill={C.ink} />
      <rect x={1.8} y={0.9} width={0.38} height={0.42} fill={C.glass} />
      <rect x={1.8} y={1.36} width={0.38} height={0.44} fill={M.blue.r} />
      <rect x={1.83} y={1.4} width={0.04} height={0.14} rx={0.02} fill={C.white} />
    </g>
  )
}

// Gestreifte Markise: schräge Fläche, die von der Wand nach vorne und unten kippt.
function Awning({ x, y, z, w }) {
  const n = 6
  const out = 0.42
  const drop = 0.22
  const sw = w / n
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const x0 = x + i * sw
        const x1 = x0 + sw
        return (
          <Face
            key={i}
            points={[
              [x0, y, z],
              [x1, y, z],
              [x1, y + out, z - drop],
              [x0, y + out, z - drop],
            ]}
            fill={i % 2 === 0 ? M.blue.l : C.white}
          />
        )
      })}
      {/* Volant */}
      {Array.from({ length: n }, (_, i) => {
        const x0 = x + i * sw
        return (
          <Face
            key={`v${i}`}
            points={[
              [x0, y + out, z - drop],
              [x0 + sw, y + out, z - drop],
              [x0 + sw, y + out, z - drop - 0.1],
              [x0, y + out, z - drop - 0.1],
            ]}
            fill={i % 2 === 0 ? M.blue.r : M.wall.l}
          />
        )
      })}
    </g>
  )
}
