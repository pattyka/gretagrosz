import { motion } from 'framer-motion'
import { P, useScene } from './iso.jsx'
import { C, M } from './palette.js'

// Loopy als kleine Figur in der Inselwelt: runder blauer Kopf mit Naht, große dunkle Augen,
// viele dünne Fühler mit Kugeln, kleiner Körper mit Pfoten. Etwa 0,9 Stockwerke hoch (scale 1).
// Licht von oben links: linke Kopfhälfte hell, rechte im Grundton, die Naht trennt beide.
// Gezeichnet in Bildschirm-Pixeln um den Fußpunkt P(x, y, z).

// Fühler je Seite: Ansatz am Kopf, Kontrollpunkt, Ende (Kugel). Rechts gespiegelt.
const FEELERS = [
  [[-3.2, -17.4], [-4.6, -21.5], [-7.4, -22.6]],
  [[-5.4, -16.6], [-8.6, -19.4], [-11.6, -19.6]],
  [[-7.1, -15.2], [-10.6, -16.2], [-13.4, -15.4]],
  [[-7.9, -13.4], [-11.2, -12.6], [-12.6, -10.8]],
]

function Feelers({ side }) {
  const f = side
  const tone = side < 0 ? M.blue.t : M.blue.l
  return (
    <>
      {FEELERS.map(([a, c, e], i) => (
        <path
          key={i}
          d={`M${a[0] * f} ${a[1]} Q${c[0] * f} ${c[1]} ${e[0] * f} ${e[1]}`}
          fill="none"
          stroke={M.blue.l}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      ))}
      {FEELERS.map(([, , e], i) => (
        <circle key={`b${i}`} cx={e[0] * f} cy={e[1]} r="1.45" fill={tone} />
      ))}
    </>
  )
}

export default function Loopy({ x, y, z = 0, scale = 1 }) {
  const { still } = useScene()
  const [cx, cy] = P(x, y, z)

  // Fühler wiegen sich langsam gegeneinander, Augen blinzeln selten.
  const sway = (dir) =>
    still
      ? {}
      : {
          animate: { rotate: [0, 3 * dir, 0, -2 * dir, 0] },
          transition: { duration: 6.5, ease: 'easeInOut', repeat: Infinity },
        }
  const blink = still
    ? {}
    : {
        animate: { scaleY: [1, 1, 0.12, 1, 1] },
        transition: { duration: 5.2, times: [0, 0.9, 0.93, 0.96, 1], repeat: Infinity, delay: 1.3 },
      }
  const origin = { transformBox: 'fill-box', transformOrigin: '50% 100%' }

  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      {/* Schatten am Boden */}
      <ellipse cx="2" cy="0" rx="6" ry="2.2" fill={C.shadow} opacity="0.35" />

      {/* Fühler (hinter dem Kopf) */}
      <motion.g style={{ ...origin, transformOrigin: '100% 100%' }} {...sway(1)}>
        <Feelers side={-1} />
      </motion.g>
      <motion.g style={{ ...origin, transformOrigin: '0% 100%' }} {...sway(-1)}>
        <Feelers side={1} />
      </motion.g>

      {/* Füße und Körper */}
      <ellipse cx="-2.3" cy="-0.9" rx="2.1" ry="1.2" fill={M.blue.l} />
      <ellipse cx="2.5" cy="-0.9" rx="2.1" ry="1.2" fill={M.blue.r} />
      <path d="M-3.8 -1.2 V-7 A3.8 3.4 0 0 1 0 -9.8 V-1.2 Z" fill={M.blue.l} />
      <path d="M0 -9.8 A3.8 3.4 0 0 1 3.8 -7 V-1.2 H0 Z" fill={M.blue.r} />

      {/* Kopf: Kuppel, links hell, rechts Grundton; die Naht ist die Kante dazwischen */}
      <path d="M0.4 -18.6 C-4.6 -18.6 -8.4 -16 -8.4 -12.4 C-8.4 -9.2 -5 -7.6 0.4 -7.6 Z" fill={M.blue.t} />
      <path d="M0.4 -18.6 C5.4 -18.6 9.2 -16 9.2 -12.4 C9.2 -9.2 5.8 -7.6 0.4 -7.6 Z" fill={M.blue.l} />
      <rect x="0.15" y="-18.5" width="0.6" height="6.2" rx="0.3" fill={M.blue.r} />

      {/* Augen */}
      <motion.g style={{ transformBox: 'fill-box', transformOrigin: '50% 60%' }} {...blink}>
        <ellipse cx="-3.4" cy="-11.6" rx="2.7" ry="2.9" fill={C.glass} />
        <ellipse cx="4.3" cy="-11.6" rx="2.7" ry="2.9" fill={C.glass} />
        <ellipse cx="-2.9" cy="-11.2" rx="1.95" ry="2.3" fill={C.ink} />
        <ellipse cx="3.8" cy="-11.2" rx="1.95" ry="2.3" fill={C.ink} />
        <circle cx="-3.5" cy="-12.1" r="0.75" fill={C.white} />
        <circle cx="3.2" cy="-12.1" r="0.75" fill={C.white} />
      </motion.g>

      {/* Pfoten vor dem Körper */}
      <ellipse cx="-2.6" cy="-6.6" rx="1.7" ry="1.3" fill={M.blue.t} />
      <ellipse cx="3.2" cy="-6.6" rx="1.7" ry="1.3" fill={M.blue.l} />
    </g>
  )
}
