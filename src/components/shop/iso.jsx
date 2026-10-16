import { createContext, useContext, useId, useState } from 'react'
import { motion } from 'framer-motion'
import { C } from './palette.js'

// Isometrischer Baukasten für Loopys Laden. Alle Szenen benutzen nur diese Projektion,
// damit Kanten über alle Stufen hinweg exakt zusammenpassen.
//
// Grundriss: x läuft nach rechts unten, y nach links unten, z nach oben (1 = 1 Stockwerk).
// Sichtbar sind immer: Oberseite, linke Vorderseite (Ebene y = max, Ton `l`),
// rechte Vorderseite (Ebene x = max, Ton `r`). Gezeichnet wird von hinten nach vorne
// (kleineres x + y zuerst).

export const K = 20 // halbe Kachelbreite in px (Kachel = 40 × 20)
export const ZS = 24 // px pro Stockwerk

export function P(x, y, z = 0) {
  return [(x - y) * K, ((x + y) * K) / 2 - z * ZS]
}

export function pts(list) {
  return list.map(([x, y, z]) => P(x, y, z).join(',')).join(' ')
}

// Matrizen, mit denen man flach in einer Ebene zeichnet (Einheiten wie im Grundriss):
// Boden/Dach auf Höhe z: (u, v) = (x, y)
export function topMatrix(x = 0, y = 0, z = 0) {
  const [ex, ey] = P(x, y, z)
  return `matrix(${K} ${K / 2} ${-K} ${K / 2} ${ex} ${ey})`
}
// linke Vorderseite (Ebene y = y0): Ursprung oben links (x0, y0, z0), u nach rechts (+x), v nach unten
export function leftMatrix(x0, y0, z0) {
  const [ex, ey] = P(x0, y0, z0)
  return `matrix(${K} ${K / 2} 0 ${ZS} ${ex} ${ey})`
}
// rechte Vorderseite (Ebene x = x0): Ursprung oben links (x0, y1, z0), u nach rechts (−y), v nach unten
export function rightMatrix(x0, y1, z0) {
  const [ex, ey] = P(x0, y1, z0)
  return `matrix(${K} ${-K / 2} 0 ${ZS} ${ex} ${ey})`
}

// Kinder werden in Ebenen-Einheiten gezeichnet. Achtung: Striche werden mitskaliert,
// deshalb dort Flächen statt Striche verwenden (oder vectorEffect="non-scaling-stroke").
export function OnTop({ x = 0, y = 0, z = 0, children }) {
  return <g transform={topMatrix(x, y, z)}>{children}</g>
}
export function OnLeft({ x, y, z, children }) {
  return <g transform={leftMatrix(x, y, z)}>{children}</g>
}
export function OnRight({ x, y, z, children }) {
  return <g transform={rightMatrix(x, y, z)}>{children}</g>
}

// Fläche aus 3D-Punkten. Kontur in derselben Farbe rundet Ecken ab und schließt Haarlinien.
export function Face({ points, fill, opacity }) {
  return (
    <polygon
      points={pts(points)}
      fill={fill}
      stroke={fill}
      strokeWidth="1"
      strokeLinejoin="round"
      opacity={opacity}
    />
  )
}

// Quader [x, x+w] × [y, y+d] × [z, z+h] mit Material m = { t, l, r }.
// left / right / top: Inhalt in Ebenen-Einheiten (Ursprung jeweils oben links der Fläche).
export function Box({ x, y, z = 0, w, d, h, m, left, right, top, rim = true }) {
  const z1 = z + h
  return (
    <g>
      <Face points={[[x + w, y, z1], [x + w, y + d, z1], [x + w, y + d, z], [x + w, y, z]]} fill={m.r} />
      <Face points={[[x, y + d, z1], [x + w, y + d, z1], [x + w, y + d, z], [x, y + d, z]]} fill={m.l} />
      <Face points={[[x, y, z1], [x + w, y, z1], [x + w, y + d, z1], [x, y + d, z1]]} fill={m.t} />
      {rim && (
        <polyline
          points={pts([[x, y + d, z1], [x, y, z1], [x + w, y, z1]])}
          fill="none"
          stroke={C.white}
          strokeOpacity="0.45"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      )}
      {left && <OnLeft x={x} y={y + d} z={z1}>{left}</OnLeft>}
      {right && <OnRight x={x + w} y={y + d} z={z1}>{right}</OnRight>}
      {top && <OnTop x={x} y={y} z={z1}>{top}</OnTop>}
    </g>
  )
}

// Satteldach über [x, x+w] × [y, y+d] ab Höhe z, First h hoch.
// axis 'x': First läuft entlang x (Giebel rechts sichtbar), 'y': First entlang y (Giebel links sichtbar).
export function Gable({ x, y, z, w, d, h, m, axis = 'x', over = 0.15 }) {
  const x0 = x - over
  const x1 = x + w + over
  const y0 = y - over
  const y1 = y + d + over
  const zt = z + h
  if (axis === 'x') {
    const ym = y + d / 2
    return (
      <g>
        <Face points={[[x1, y0, z], [x1, y1, z], [x1, ym, zt]]} fill={m.r} />
        <Face points={[[x0, y1, z], [x1, y1, z], [x1, ym, zt], [x0, ym, zt]]} fill={m.l} />
      </g>
    )
  }
  const xm = x + w / 2
  return (
    <g>
      <Face points={[[x, y + d, z], [x + w, y + d, z], [xm, y + d, zt]]} fill={m.l} />
      <Face points={[[x1, y0, z], [x1, y1, z], [xm, y1, zt], [xm, y0, zt]]} fill={m.r} />
    </g>
  )
}

// Senkrechter Zylinder (Mittelpunkt x, y), Radius rad in Kacheln.
export function Cyl({ x, y, z = 0, rad, h, m }) {
  const [cx, cyTop] = P(x, y, z + h)
  const cyBot = cyTop + h * ZS
  const rx = Math.SQRT2 * rad * K
  const ry = rx / 2
  return (
    <g>
      <path d={`M${cx - rx} ${cyTop} V${cyBot} A${rx} ${ry} 0 0 0 ${cx + rx} ${cyBot} V${cyTop} Z`} fill={m.r} />
      <path d={`M${cx - rx} ${cyTop} V${cyBot} A${rx} ${ry} 0 0 0 ${cx} ${cyBot + ry} V${cyTop} Z`} fill={m.l} />
      <ellipse cx={cx} cy={cyTop} rx={rx} ry={ry} fill={m.t} />
    </g>
  )
}

// Kugel (Baumkrone, Bonbon, Ballon). Licht von oben links.
export function Ball({ x, y, z, rad, m }) {
  const uid = useId().replace(/:/g, '')
  const [cx, cy] = P(x, y, z)
  const r = rad * K * 1.2
  return (
    <g>
      <clipPath id={`ball-${uid}`}>
        <circle cx={cx} cy={cy} r={r} />
      </clipPath>
      <circle cx={cx} cy={cy} r={r} fill={m.r} />
      <circle cx={cx - r * 0.18} cy={cy - r * 0.2} r={r * 0.9} fill={m.l} clipPath={`url(#ball-${uid})`} />
      <circle cx={cx - r * 0.38} cy={cy - r * 0.42} r={r * 0.32} fill={m.t} />
    </g>
  )
}

// Flacher, hartkantiger Schlagschatten nach rechts (+x) auf Höhe z.
// onDark: auf dunklem Grund (Straße) wäre der helle Blauschatten heller als der Boden.
export function Shadow({ x, y, z = 0, w, d, h, onDark = false }) {
  return (
    <Face
      points={[[x, y, z], [x + w + h * 0.7, y, z], [x + w + h * 0.7, y + d, z], [x, y + d, z]]}
      fill={onDark ? C.ink : C.shadow}
      opacity={onDark ? 0.3 : 0.35}
    />
  )
}

// Fenster auf einer Fassade (Ebenen-Einheiten). lit: warm beleuchtet.
export function Win({ u, v, w, h, lit = false }) {
  const f = 0.08
  return (
    <g>
      <rect x={u} y={v} width={w} height={h} fill={C.ink} />
      <rect x={u + f} y={v + f} width={w - 2 * f} height={h - 2 * f} fill={lit ? C.glow : C.glass} />
      {lit ? (
        <rect x={u + f * 2} y={v + f * 2} width={w - 4 * f} height={(h - 4 * f) * 0.55} fill={C.glowInner} />
      ) : (
        <path
          d={`M${u + f + w * 0.18} ${v + h - f} L${u + f + w * 0.48} ${v + f} H${u + f + w * 0.62} L${u + f + w * 0.32} ${v + h - f} Z`}
          fill={C.glassShine}
          opacity="0.6"
        />
      )}
    </g>
  )
}

// Kleine Figur ohne Gesicht (nur Loopy hat eines), etwa 0,6 Stockwerke hoch.
export function Person({ x, y, z = 0, shirt = C.shirt[0], skin = C.skin[0], hair = C.hair[0] }) {
  const [cx, cy] = P(x, y, z)
  return (
    <g>
      <ellipse cx={cx + 2} cy={cy} rx="4.5" ry="1.8" fill={C.shadow} opacity="0.35" />
      <rect x={cx - 3} y={cy - 9.5} width="6" height="9.5" rx="3" fill={shirt} />
      <rect x={cx - 3} y={cy - 4} width="6" height="4" rx="1.5" fill={C.ink} opacity="0.85" />
      <circle cx={cx} cy={cy - 12.5} r="3.1" fill={skin} />
      <path d={`M${cx - 3.1} ${cy - 12.6} a3.1 3.1 0 0 1 6.2 0 Z`} fill={hair} />
    </g>
  )
}

// ---------- Bewegung ----------

// ready: wird true, sobald die Szene einmal gezeichnet ist. Alles, was danach dazukommt
// (Stufenaufstieg), fällt animiert ein; was beim ersten Zeichnen schon da ist, steht einfach da.
// still: keine Endlos-Animationen (reduzierte Bewegung, Vorschaubilder, kleine Darstellung).
export const SceneContext = createContext({ ready: { current: true }, still: false, stage: 0 })

export function useScene() {
  return useContext(SceneContext)
}

const LAND = { type: 'spring', stiffness: 420, damping: 20, mass: 0.9 }

// Baut ein Teil ein: fällt 24 px herab mit kleinem Nachfedern. order: 0 Boden, 1 Wände,
// 2 Dach, 3 Requisiten, 4 Menschen (je 60 ms versetzt). Optional dust: Grundfläche für den Staubring.
export function Appear({ order = 0, delay = 0, dust, children }) {
  const { ready } = useScene()
  const [animate] = useState(() => ready.current)
  const wait = order * 0.06 + delay
  return (
    <>
      <motion.g
        initial={animate ? { y: -24, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ y: { ...LAND, delay: wait }, opacity: { duration: 0.18, delay: wait } }}
      >
        {children}
      </motion.g>
      {animate && dust && <Dust {...dust} delay={wait + 0.16} />}
    </>
  )
}

// Staubring beim Aufsetzen: flache Ellipse um die Grundfläche, die sich weitet und verblasst.
function Dust({ x, y, w, d, delay }) {
  const [cx, cy] = P(x + w / 2, y + d / 2, 0)
  const rx = ((w + d) / 2) * K * 1.05
  return (
    <motion.ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={rx / 2}
      fill="none"
      stroke={C.white}
      strokeWidth="2"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: [0, 0.9, 0], scale: [0.85, 1.25, 1.4] }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  )
}
