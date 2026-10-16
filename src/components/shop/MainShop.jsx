import { useId } from 'react'
import { motion } from 'framer-motion'
import { Appear, Ball, Box, Face, OnLeft, P, Shadow, Win, pts, useScene } from './iso.jsx'
import Loopy from './Loopy.jsx'
import { C, M } from './palette.js'
import { SLOTS, STAGES } from './layout.js'

// Loopys Hauptgeschäft: ab Stufe 1 ein kleines Eckhaus mit Süßwarenladen im Erdgeschoss,
// ab Stufe 2 mit Schaufenster und Markise, ab Stufe 7 das Stammhaus der Loopy's Candy GmbH.
// Fassade (Tür, Schaufenster) auf der linken Vorderseite (Ebene y = 7).

const S = SLOTS.shop
const X0 = S.x
const X1 = S.x + S.w
const Y0 = S.y
const Y1 = S.y + S.d
const FONT = 'Inter, system-ui, sans-serif'

// Geschosshöhen
const G = 1.4 // Erdgeschoss
const LEDGE = 0.08
const Z1 = G + LEDGE // Unterkante Obergeschoss
const ZW = 2.4 // Traufe
const ZT = 3.45 // First

// Fenster des Obergeschosses (Ebenen-Einheiten, gelten auch für die Etagen der GmbH)
const UPPER_L = [0.85, 2.2]
const UPPER_R = [0.55, 1.85]
const WIN_W = 0.6
const WIN_H = 0.48

export default function MainShop({ stage }) {
  const empire = stage >= 7
  const foot = { x: X0, y: Y0, w: S.w, d: S.d }
  // Schlagschatten nie über den Inselrand hinaus
  const shadowH = Math.min(empire ? 6 : ZT, (STAGES[stage].island[1] - 0.2 - X1) / 0.7)

  return (
    <g>
      <Appear order={0}>
        <Shadow x={X0} y={Y0 + 0.12} w={S.w} d={S.d - 0.12} h={shadowH} />
      </Appear>

      <Appear order={1} dust={foot}>
        <GroundFloor stage={stage} />
      </Appear>

      <Appear order={1} delay={0.06}>
        <Box x={X0 - 0.05} y={Y0 - 0.05} z={G} w={S.w + 0.1} d={S.d + 0.1} h={LEDGE} m={M.wall} rim={false} />
        <Box
          x={X0}
          y={Y0}
          z={Z1}
          w={S.w}
          d={S.d}
          h={ZW - Z1}
          m={M.wall}
          left={<UpperWindows lit={stage >= 6 ? [true, true] : [false, false]} />}
          right={<UpperWindowsRight v={empire ? 0.2 : 0.34} lit={stage >= 6 ? [true, false] : [false, false]} />}
        />
      </Appear>

      {!empire && (
        <Appear order={2}>
          <Roof />
        </Appear>
      )}

      {stage >= 2 && (
        <Appear order={2}>
          <FlowerBoxes />
        </Appear>
      )}

      <Appear order={3}>
        <Door stage={stage} />
      </Appear>

      {stage < 2 && (
        <Appear order={3}>
          <SmallWindow />
        </Appear>
      )}
      {stage >= 2 && (
        <Appear order={1}>
          <ShopWindow />
        </Appear>
      )}
      {stage >= 2 && (
        <Appear order={3}>
          <Awning />
        </Appear>
      )}

      <Appear order={3}>
        <BladeSign />
      </Appear>

      {stage >= 5 && (
        <Appear order={3}>
          <Parcel />
        </Appear>
      )}

      {stage >= 2 && (
        <Appear order={3}>
          <SandwichBoard />
        </Appear>
      )}

      {empire && <Tower />}
    </g>
  )
}

// ---------- Erdgeschoss ----------

function GroundFloor({ stage }) {
  return (
    <Box
      x={X0}
      y={Y0}
      w={S.w}
      d={S.d}
      h={G}
      m={M.wallPink}
      right={stage < 3 ? <Win u={1.1} v={0.3} w={0.8} h={0.5} /> : null}
    />
  )
}

// Tür mit Glasfenster, Klinke und Schild an zwei Schnüren; ab Stufe 5 ein Online-Aufkleber,
// ab Stufe 7 das Messingschild der GmbH daneben.
function Door({ stage }) {
  return (
    <g>
      <Box x={X0 + 0.22} y={Y1} w={0.92} d={0.22} h={0.06} m={M.paving} rim={false} />
      <OnLeft x={X0} y={Y1} z={G}>
        <rect x={0.3} y={0.4} width={0.76} height={G - 0.4} fill={C.ink} />
        <rect x={0.38} y={0.48} width={0.6} height={G - 0.48} fill={M.blue.l} />
        <rect x={0.46} y={0.56} width={0.44} height={0.38} fill={C.glass} />
        <path d="M0.54 0.94 L0.7 0.56 H0.78 L0.62 0.94 Z" fill={C.glassShine} opacity="0.6" />
        <rect x={0.46} y={1.02} width={0.44} height={0.3} fill={M.blue.r} />
        <rect x={0.86} y={1} width={0.05} height={0.14} rx={0.02} fill={M.butter.l} />
        <path
          d="M0.6 0.6 L0.56 0.71 M0.78 0.6 L0.82 0.71"
          stroke={C.ink}
          strokeWidth="0.6"
          vectorEffect="non-scaling-stroke"
          fill="none"
        />
        <rect x={0.52} y={0.7} width={0.34} height={0.15} rx={0.025} fill={C.white} />
        <rect x={0.58} y={0.76} width={0.22} height={0.035} rx={0.015} fill={M.mint.r} />
        {stage >= 5 && (
          <g>
            <circle cx={0.68} cy={1.17} r={0.075} fill={C.white} />
            <circle cx={0.68} cy={1.17} r={0.04} fill={M.pink.l} />
          </g>
        )}
        {stage >= 7 && (
          <g>
            <rect x={0.03} y={0.6} width={0.24} height={0.24} rx={0.02} fill={M.butter.r} />
            <rect x={0.045} y={0.615} width={0.21} height={0.21} rx={0.015} fill={M.butter.l} />
            <text
              x={0.15}
              y={0.7}
              textAnchor="middle"
              fontFamily={FONT}
              fontWeight="800"
              fontSize={0.075}
              fill={C.ink}
            >
              Loopy's
            </text>
            <text
              x={0.15}
              y={0.785}
              textAnchor="middle"
              fontFamily={FONT}
              fontWeight="800"
              fontSize={0.065}
              fill={C.ink}
            >
              GmbH
            </text>
          </g>
        )}
      </OnLeft>
    </g>
  )
}

// Glas mit Bonbongläsern (Ebenen-Einheiten, u = linke Kante, v = Unterkante)
function Jar({ u, v, w = 0.22, h = 0.2, color }) {
  return (
    <g>
      <rect x={u} y={v - h} width={w} height={h} rx={0.04} fill={C.white} />
      <rect x={u + 0.025} y={v - h * 0.68} width={w - 0.05} height={h * 0.62} rx={0.03} fill={color} />
      <rect x={u + w * 0.22} y={v - h * 0.6} width={w * 0.14} height={h * 0.26} rx={0.01} fill={C.white} opacity="0.7" />
      <rect x={u - 0.015} y={v - h - 0.045} width={w + 0.03} height={0.05} rx={0.015} fill={M.ink.t} />
    </g>
  )
}

// Loopy hinter der Scheibe, auf die Glasfläche (Ebenen-Einheiten) zugeschnitten
function LoopyBehind({ u0, v0, u1, v1, x, z = 0.06 }) {
  const id = `loopy-${useId().replace(/:/g, '')}`
  const glass = [
    [X0 + u0, Y1, G - v0],
    [X0 + u1, Y1, G - v0],
    [X0 + u1, Y1, G - v1],
    [X0 + u0, Y1, G - v1],
  ]
  return (
    <g>
      <clipPath id={id}>
        <polygon points={pts(glass)} />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <Loopy x={x} y={Y1 - 0.2} z={z} scale={0.9} />
      </g>
    </g>
  )
}

// Stufe 1: ein bescheidenes Fenster, dahinter Loopy
function SmallWindow() {
  return (
    <g>
      <OnLeft x={X0} y={Y1} z={G}>
        <Win u={1.75} v={0.52} w={1.2} h={0.58} />
      </OnLeft>
      <LoopyBehind u0={1.83} v0={0.6} u1={2.87} v1={1.02} x={X0 + 2.4} />
      <Box x={X0 + 1.7} y={Y1} z={G - 1.02} w={1.3} d={0.1} h={0.07} m={M.wall} rim={false} />
    </g>
  )
}

// Ab Stufe 2: großes, beleuchtetes Schaufenster mit Theke, Bonbongläsern und Loopy
function ShopWindow() {
  const { still } = useScene()
  const jarsLow = [C.candy[0], C.candy[1], C.candy[2]]
  return (
    <g>
      <OnLeft x={X0} y={Y1} z={G}>
        <rect x={1.38} y={0.48} width={1.94} height={0.82} fill={C.ink} />
        <rect x={1.46} y={0.56} width={1.78} height={0.66} fill={C.glow} />
        <rect x={1.46} y={0.56} width={1.78} height={0.33} fill={C.glowInner} />
        {!still && (
          <motion.rect
            x={1.46}
            y={0.56}
            width={1.78}
            height={0.66}
            fill={C.glowInner}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </OnLeft>
      <LoopyBehind u0={1.46} v0={0.56} u1={3.24} v1={1.22} x={X0 + 2.82} z={-0.1} />
      <OnLeft x={X0} y={Y1} z={G}>
        {/* Ladentheke mit Bonbongläsern, rechts steht Loopy dahinter */}
        <rect x={1.46} y={1.06} width={1.78} height={0.07} fill={M.wood.l} />
        <rect x={1.46} y={1.13} width={1.78} height={0.09} fill={M.wood.r} />
        {jarsLow.map((color, i) => (
          <Jar key={i} u={1.56 + i * 0.34} v={1.06} w={0.28} h={0.26} color={color} />
        ))}
      </OnLeft>
      <Box x={X0 + 1.34} y={Y1} z={0.05} w={2.02} d={0.1} h={0.07} m={M.wall} rim={false} />
    </g>
  )
}

// Gestreifte Markise über dem Schaufenster mit gewellter Blende; die Blende schwingt leicht.
const AW = { x0: X0 + 1.3, x1: X0 + 3.4, z0: G - 0.04, z1: G - 0.22, out: 0.46, drop: 0.12, n: 7 }
function Awning() {
  const { still } = useScene()
  const { x0, x1, z0, z1, out, drop, n } = AW
  const sw = (x1 - x0) / n
  const yo = Y1 + out
  const scallops = Array.from({ length: n }, (_, i) => {
    const u = i * sw
    return `M${u} ${drop} H${u + sw} A${sw / 2} ${0.09} 0 0 1 ${u} ${drop} Z`
  })
  const valance = (
    <OnLeft x={x0} y={yo} z={z1}>
      {Array.from({ length: n }, (_, i) => (
        <g key={i} fill={i % 2 === 0 ? M.blue.l : C.white}>
          <rect x={i * sw} y={0} width={sw + 0.004} height={drop} />
          <path d={scallops[i]} />
        </g>
      ))}
    </OnLeft>
  )
  return (
    <g>
      {/* Schatten der Markise auf der Fassade */}
      <OnLeft x={X0} y={Y1} z={G}>
        <rect x={1.42} y={0.07} width={1.98} height={0.5} fill={C.shadow} opacity="0.35" />
      </OnLeft>
      {Array.from({ length: n }, (_, i) => (
        <Face
          key={i}
          points={[
            [x0 + i * sw, Y1, z0],
            [x0 + (i + 1) * sw, Y1, z0],
            [x0 + (i + 1) * sw, yo, z1],
            [x0 + i * sw, yo, z1],
          ]}
          fill={i % 2 === 0 ? M.blue.t : C.white}
        />
      ))}
      <Face points={[[x1, Y1, z0], [x1, yo, z1], [x1, yo, z1 - drop]]} fill={M.blue.r} />
      {still ? (
        valance
      ) : (
        <motion.g
          style={{ transformBox: 'fill-box', transformOrigin: '50% 0%' }}
          animate={{ rotate: [0, 1, 0, -0.6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          {valance}
        </motion.g>
      )}
    </g>
  )
}

// Ausleger-Schild an der linken Ecke
function BladeSign() {
  const x = X0 + 0.22
  const d = 1.15
  return (
    <g>
      <Box x={x + 0.005} y={Y1} z={2.16} w={0.05} d={d + 0.08} h={0.04} m={M.ink} rim={false} />
      <Box
        x={x}
        y={Y1 + 0.08}
        z={1.66}
        w={0.07}
        d={d}
        h={0.46}
        m={M.blue}
        rim={false}
        right={
          <text
            x={d / 2}
            y={0.33}
            textAnchor="middle"
            fontFamily={FONT}
            fontWeight="800"
            fontSize={0.27}
            fill={C.white}
          >
            Loopy's
          </text>
        }
      />
    </g>
  )
}

// ---------- Obergeschoss ----------

function UpperWindows({ lit }) {
  return (
    <g>
      {UPPER_L.map((u, i) => (
        <Win key={i} u={u} v={0.2} w={WIN_W} h={WIN_H} lit={lit[i]} />
      ))}
    </g>
  )
}

function UpperWindowsRight({ lit, v = 0.2 }) {
  return (
    <g>
      {UPPER_R.map((u, i) => (
        <Win key={i} u={u} v={v} w={WIN_W} h={WIN_H} lit={lit[i]} />
      ))}
    </g>
  )
}

// Blumenkästen unter den Fenstern des Obergeschosses
function FlowerBoxes() {
  const zb = 1.6
  return (
    <g>
      {UPPER_L.map((u, i) => {
        const x = X0 + u - 0.04
        const w = WIN_W + 0.08
        return (
          <g key={i}>
            {[0.14, 0.34, 0.54].map((f, j) => (
              <Ball key={j} x={x + f + 0.02} y={Y1 + 0.1} z={zb + 0.2} rad={0.13} m={M.leaf} />
            ))}
            {[0.24, 0.48].map((f, j) => {
              const [cx, cy] = P(x + f, Y1 + 0.17, zb + 0.28)
              return <circle key={j} cx={cx} cy={cy} r={1.7} fill={j === 0 ? M.pink.l : M.butter.l} />
            })}
            <Box x={x} y={Y1} z={zb} w={w} d={0.18} h={0.12} m={M.wood} rim={false} />
          </g>
        )
      })}
    </g>
  )
}

// ---------- Dach ----------

function Roof() {
  const o = 0.15
  const xm = (X0 + X1) / 2
  const ze = ZW - 0.06
  const xa = X0 - o
  const xb = X1 + o
  const ya = Y0 - o
  const yb = Y1 + o
  const t = 0.12
  // Firsthöhe über einem Punkt des rechten Dachs
  const zAt = (x) => ZT - ((x - xm) / (xb - xm)) * (ZT - ze)
  return (
    <g>
      {/* Giebel zur Straße mit Rundfenster */}
      <Face points={[[X0, Y1, ZW], [X1, Y1, ZW], [xm, Y1, ZT]]} fill={M.wall.l} />
      <OnLeft x={X0} y={Y1} z={ZW}>
        <ellipse cx={S.w / 2} cy={-0.42} rx={0.22} ry={0.2} fill={C.ink} />
        <ellipse cx={S.w / 2} cy={-0.42} rx={0.16} ry={0.14} fill={C.glass} />
      </OnLeft>
      <Face points={[[xm, ya, ZT], [xm, yb, ZT], [xb, yb, ze], [xb, ya, ze]]} fill={M.blue.t} />
      <Face points={[[xb, ya, ze], [xb, yb, ze], [xb, yb, ze - t], [xb, ya, ze - t]]} fill={M.blue.r} />
      <Face
        points={[[xa, yb, ze], [xm, yb, ZT], [xb, yb, ze], [xb, yb, ze - t], [xm, yb, ZT - t * 1.15], [xa, yb, ze - t]]}
        fill={M.blue.l}
      />
      <Box x={X0 + 2.55} y={Y0 + 0.5} z={zAt(X0 + 2.55) - 0.1} w={0.36} d={0.36} h={ZT + 0.32 - zAt(X0 + 2.55)} m={M.wallPink} rim={false} />
      <Box x={X0 + 2.51} y={Y0 + 0.46} z={ZT + 0.22} w={0.44} d={0.44} h={0.07} m={M.wall} rim={false} />
    </g>
  )
}

// ---------- Kleinkram auf dem Platz ----------

// Ab Stufe 5: Paket neben der Tür (Online-Bestellungen)
function Parcel() {
  const x = X0 + 1.12
  return (
    <g>
      <Box x={x} y={Y1 + 0.04} w={0.32} d={0.28} h={0.22} m={M.wood} rim={false} />
      <Box x={x + 0.13} y={Y1 + 0.04} z={0.22} w={0.06} d={0.28} h={0.005} m={M.butter} rim={false} />
    </g>
  )
}

// Kundenstopper (A-Tafel) auf dem Platz
function SandwichBoard() {
  const x0 = X0 + 2.55
  const x1 = x0 + 0.48
  const yf = Y1 + 1.12
  const yt = yf - 0.15
  const yb = yf - 0.3
  const h = 0.6
  const [cx, cy] = P((x0 + x1) / 2, yf - 0.075, h * 0.5)
  return (
    <g>
      <Shadow x={x0} y={yb} w={x1 - x0} d={yf - yb} h={0.5} />
      <Face points={[[x1, yb, 0], [x1, yt, h], [x1, yf, 0]]} fill={M.wood.r} />
      <Face points={[[x0, yf, 0], [x1, yf, 0], [x1, yt, h], [x0, yt, h]]} fill={M.wood.l} />
      <Face
        points={[[x0 + 0.05, yf - 0.01, 0.07], [x1 - 0.05, yf - 0.01, 0.07], [x1 - 0.05, yt + 0.01, h - 0.06], [x0 + 0.05, yt + 0.01, h - 0.06]]}
        fill={M.ink.l}
      />
      <path d={`M${cx - 4.2} ${cy - 2.2} L${cx - 1.5} ${cy} L${cx - 4.2} ${cy + 2.2} Z`} fill={M.pink.t} />
      <path d={`M${cx + 4.2} ${cy - 2.2} L${cx + 1.5} ${cy} L${cx + 4.2} ${cy + 2.2} Z`} fill={M.pink.t} />
      <circle cx={cx} cy={cy} r={2.4} fill={M.pink.l} />
    </g>
  )
}

// ---------- Stufe 7: Stammhaus der GmbH ----------

const FLOORS = [
  { z: ZW, lit: [true, false], litR: [false, true] },
  { z: ZW + 1, lit: [false, true], litR: [true, false] },
  { z: ZW + 2, lit: [true, true], litR: [false, true] },
]
const ZG = ZW + 3 // Glasgeschoss
const ZR = ZG + 0.9 // Dachkante

function Tower() {
  return (
    <g>
      {FLOORS.map((f, i) => (
        <Appear key={i} order={1 + i} delay={i * 0.1}>
          <Box
            x={X0}
            y={Y0}
            z={f.z}
            w={S.w}
            d={S.d}
            h={1 - LEDGE}
            m={M.wall}
            left={<UpperWindows lit={f.lit} />}
            right={<UpperWindowsRight lit={f.litR} />}
          />
          <Box x={X0 - 0.05} y={Y0 - 0.05} z={f.z + 1 - LEDGE} w={S.w + 0.1} d={S.d + 0.1} h={LEDGE} m={M.wall} rim={false} />
        </Appear>
      ))}
      <Appear order={4} delay={0.3}>
        <GlassFloor />
      </Appear>
      <Appear order={4} delay={0.42}>
        <Flag />
        <RoofSign />
      </Appear>
    </g>
  )
}

function Mullions({ w, h }) {
  const n = Math.round(w / 0.7)
  const step = w / n
  return (
    <g fill={C.white}>
      {Array.from({ length: n - 1 }, (_, i) => (
        <rect key={i} x={(i + 1) * step - 0.025} y={0} width={0.05} height={h} />
      ))}
    </g>
  )
}

function GlassFloor() {
  const i = 0.18
  const w = S.w - 2 * i
  const d = S.d - 2 * i
  const h = ZR - ZG
  return (
    <g>
      <Box
        x={X0 + i}
        y={Y0 + i}
        z={ZG}
        w={w}
        d={d}
        h={h}
        m={M.wallBlue}
        rim={false}
        left={<Mullions w={w} h={h} />}
        right={<Mullions w={d} h={h} />}
      />
      <Box x={X0 - 0.06} y={Y0 - 0.06} z={ZR} w={S.w + 0.12} d={S.d + 0.12} h={0.14} m={M.blue} />
    </g>
  )
}

// Schriftzug auf einem Stahlgerüst an der Vorderkante des Dachs
function RoofSign() {
  const zr = ZR + 0.14
  const ys = Y1 - 0.3
  const base = zr + 0.62
  const text = (fill) => (
    <text
      x={S.w / 2}
      y={1}
      textAnchor="middle"
      fontFamily={FONT}
      fontWeight="800"
      fontSize={0.9}
      letterSpacing={-0.03}
      fill={fill}
    >
      Loopy's
    </text>
  )
  return (
    <g>
      {[0.5, 1.75, 3].map((u, i) => (
        <Box key={i} x={X0 + u - 0.04} y={ys - 0.14} z={zr} w={0.08} d={0.08} h={0.72} m={M.steel} rim={false} />
      ))}
      <Box x={X0 + 0.3} y={ys - 0.14} z={zr + 0.5} w={2.9} d={0.08} h={0.07} m={M.steel} rim={false} />
      <OnLeft x={X0} y={ys - 0.08} z={base + 1}>{text(M.blue.r)}</OnLeft>
      <OnLeft x={X0} y={ys - 0.04} z={base + 1}>{text(M.blue.r)}</OnLeft>
      <OnLeft x={X0} y={ys} z={base + 1}>{text(M.blue.l)}</OnLeft>
    </g>
  )
}

// Fahnenmast an der hinteren rechten Ecke; die Fahne weht leicht.
function Flag() {
  const { still } = useScene()
  const x = X1 - 0.28
  const y = Y0 + 0.3
  const zb = ZR + 0.14
  const zt = zb + 2
  const [px, py] = P(x, y, zt)
  const [, pb] = P(x, y, zb)
  const flag = (
    <OnLeft x={x + 0.02} y={y} z={zt - 0.04}>
      <path d="M0 0 H0.62 L0.54 0.18 L0.62 0.36 H0 Z" fill={M.pink.l} />
    </OnLeft>
  )
  return (
    <g>
      <rect x={px - 0.8} y={py} width={1.6} height={pb - py} fill={M.steel.r} />
      <circle cx={px} cy={py} r={1.4} fill={M.butter.l} />
      {still ? (
        flag
      ) : (
        <motion.g
          style={{ transformBox: 'fill-box', transformOrigin: '0% 50%' }}
          animate={{ skewY: [0, -4, 0, 3, 0], scaleX: [1, 0.94, 1, 0.97, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {flag}
        </motion.g>
      )}
    </g>
  )
}
