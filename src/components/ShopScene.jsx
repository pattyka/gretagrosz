import { useId } from 'react'
import { motion } from 'framer-motion'

// Gezeichnete Fantasy-Szene von Loopy's Candy Store: Nachthimmel mit Sternen,
// Mond und glitzernden Funken. Mit jeder Stufe (0–7) kommt etwas dazu.
const GOLD = '#FFD166'
const GOLD_DARK = '#E9B949'
const NAVY = '#1D3F86'
const DENIM = '#1D5DA6'
const BLUE = '#6495ED'
const LIGHT = '#93B4F2'
const LILAC = '#A99BF0'
const WALL = '#EAF2FF'
const WALL_LINE = '#B8CCF0'
const WINDOW = '#FFE7A3'

// Feste Sternpositionen [x, y, Größe], damit die Szene immer gleich aussieht.
const STARS = [
  [22, 24, 1.2], [48, 60, 0.8], [70, 18, 1], [96, 44, 1.4], [120, 14, 0.8], [146, 52, 1],
  [168, 26, 1.2], [214, 16, 0.9], [240, 48, 1.1], [262, 22, 0.8], [290, 58, 1.3], [312, 14, 1],
  [384, 76, 0.9], [374, 112, 1.1], [18, 98, 1], [40, 128, 0.8], [300, 96, 0.8], [110, 92, 0.9],
]

const pop = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.6, y: 12 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { type: 'spring', stiffness: 260, damping: 18, delay },
})

// Vierzackiger Glitzerstern
function Sparkle({ x, y, s = 4, fill = GOLD }) {
  const d = `M${x} ${y - s} Q${x + s * 0.18} ${y - s * 0.18} ${x + s} ${y} Q${x + s * 0.18} ${y + s * 0.18} ${x} ${y + s} Q${x - s * 0.18} ${y + s * 0.18} ${x - s} ${y} Q${x - s * 0.18} ${y - s * 0.18} ${x} ${y - s} Z`
  return <path d={d} fill={fill} />
}

function Twinkle({ x, y, s, delay }) {
  return (
    <motion.g
      animate={{ opacity: [0.35, 1, 0.35] }}
      transition={{ repeat: Infinity, duration: 2.4 + (delay % 1.5), delay }}
    >
      {s >= 1.2 ? <Sparkle x={x} y={y} s={s * 3.2} fill="#FFFFFF" /> : <circle cx={x} cy={y} r={s * 1.3} fill="#FFFFFF" />}
    </motion.g>
  )
}

function Jars({ x, y }) {
  const colors = [BLUE, LILAC, GOLD, LIGHT]
  return colors.map((c, i) => (
    <g key={c}>
      <rect x={x + i * 14} y={y} width="10" height="13" rx="3" fill="#ffffff" opacity="0.9" />
      <circle cx={x + i * 14 + 5} cy={y + 8} r="3.5" fill={c} />
    </g>
  ))
}

// background={false}: nur der Laden selbst, ohne Himmel, Sterne und Hügel (z. B. auf der Startseite).
export default function ShopScene({ level, className = '', background = true }) {
  // Eindeutige IDs, weil die Szene mehrmals auf einer Seite vorkommen kann.
  const uid = useId().replace(/:/g, '')
  const id = (name) => `${name}-${uid}`

  return (
    <svg
      viewBox={background ? '0 0 400 260' : '0 30 400 222'}
      className={className}
      role="img"
      aria-label="Loopy's Candy Store"
    >
      <defs>
        <linearGradient id={id('sky')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B1E4A" />
          <stop offset="0.55" stopColor={NAVY} />
          <stop offset="1" stopColor="#4B7BD6" />
        </linearGradient>
        <linearGradient id={id('hill')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3E6CC4" />
          <stop offset="1" stopColor="#24498F" />
        </linearGradient>
        <radialGradient id={id('glow')}>
          <stop offset="0" stopColor="#BFD7FF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#BFD7FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('window')}>
          <stop offset="0" stopColor="#FFF6D6" />
          <stop offset="1" stopColor={WINDOW} />
        </radialGradient>
        <pattern id={id('stripes')} width="16" height="10" patternUnits="userSpaceOnUse">
          <rect width="8" height="10" fill={BLUE} />
          <rect x="8" width="8" height="10" fill="#ffffff" />
        </pattern>
        <mask id={id('moon')}>
          <circle cx="348" cy="44" r="17" fill="#fff" />
          <circle cx="356" cy="38" r="15" fill="#000" />
        </mask>
        <clipPath id={id('frame')}>
          <rect width="400" height="260" rx="28" />
        </clipPath>
      </defs>

      <g clipPath={background ? `url(#${id('frame')})` : undefined}>
        {background && (
          <>
        {/* Nachthimmel, Sterne, Mond */}
        <rect width="400" height="260" fill={`url(#${id('sky')})`} />
        {STARS.map(([x, y, s], i) => (
          <Twinkle key={i} x={x} y={y} s={s} delay={(i * 0.37) % 2.2} />
        ))}
        <circle cx="348" cy="44" r="26" fill={`url(#${id('glow')})`} />
        <circle cx="348" cy="44" r="17" fill="#FFF3C4" mask={`url(#${id('moon')})`} />

        {/* Lichtschein hinter dem Laden */}
        <ellipse cx="200" cy="160" rx="130" ry="90" fill={`url(#${id('glow')})`} />

        {/* Hügel und leuchtender Weg */}
        <path d="M0 212 Q100 196 200 206 T400 204 V260 H0 Z" fill={`url(#${id('hill')})`} />
        <path d="M0 230 Q200 220 400 230 V240 Q200 230 0 240 Z" fill="#7FA6EC" opacity="0.7" />
        {[30, 90, 150, 250, 310, 370].map((x, i) => (
          <motion.circle
            key={x}
            cx={x}
            cy={234}
            r="1.4"
            fill={GOLD}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
          />
        ))}
          </>
        )}
        {!background && <ellipse cx="200" cy="214" rx="190" ry="10" fill="#1D3F86" opacity="0.12" />}

        {/* Stufe 0: Marktstand */}
        {level === 0 && (
          <motion.g {...pop()}>
            <path d="M150 130 Q200 92 250 130 Z" fill={`url(#${id('stripes')})`} stroke={BLUE} strokeWidth="2" />
            <Sparkle x={200} y={100} s={6} />
            <rect x="198" y="128" width="4" height="52" fill={LIGHT} />
            <rect x="155" y="170" width="90" height="34" rx="6" fill={LIGHT} />
            <rect x="155" y="166" width="90" height="8" rx="4" fill={GOLD} />
            <Jars x={172} y={152} />
            <circle cx="170" cy="210" r="8" fill={NAVY} stroke={GOLD} strokeWidth="2" />
            <circle cx="230" cy="210" r="8" fill={NAVY} stroke={GOLD} strokeWidth="2" />
          </motion.g>
        )}

        {/* Stufe 1: eigener Laden mit Märchendach und Türmchen */}
        {level >= 1 && (
          <motion.g {...pop()}>
            {/* Türmchen */}
            <rect x="242" y="78" width="26" height="60" rx="4" fill={WALL} stroke={WALL_LINE} strokeWidth="2" />
            <path d="M238 82 Q255 70 255 40 Q255 70 272 82 Z" fill={DENIM} />
            <Sparkle x={255} y={36} s={6} />
            <circle cx="255" cy="98" r="6" fill={`url(#${id('window')})`} stroke="#ffffff" strokeWidth="1.5" />

            {/* Hauptgebäude */}
            <rect x="135" y="100" width="130" height="112" rx="6" fill={WALL} stroke={WALL_LINE} strokeWidth="2" />
            <path d="M124 106 Q172 98 200 56 Q228 98 276 106 Z" fill={BLUE} />
            {[[168, 92], [200, 76], [232, 92], [184, 100], [216, 100]].map(([x, y]) => (
              <Sparkle key={`${x}-${y}`} x={x} y={y} s={2.6} />
            ))}

            {/* Tür mit Rundbogen */}
            <path d="M185 212 V174 Q200 156 215 174 V212 Z" fill={DENIM} />
            <circle cx="209" cy="190" r="2.5" fill={GOLD} />
            <Sparkle x={200} y={170} s={3} />

            {/* Schild */}
            <rect x="140" y="108" width="120" height="20" rx="10" fill={NAVY} stroke={GOLD} strokeWidth="1.5" />
            <text x="200" y="122" textAnchor="middle" fontSize="10.5" fontWeight="800" fill={GOLD} fontFamily="Inter, sans-serif">
              Loopy's Candy Store
            </text>
            {level < 2 && <rect x="145" y="150" width="32" height="28" rx="4" fill={`url(#${id('window')})`} />}
          </motion.g>
        )}

        {/* Stufe 2: leuchtende Schaufenster mit Markise */}
        {level >= 2 && (
          <motion.g {...pop(0.1)}>
            <rect x="143" y="146" width="38" height="36" rx="4" fill={`url(#${id('window')})`} stroke="#ffffff" strokeWidth="2" />
            <Jars x={146} y={166} />
            <rect x="225" y="146" width="32" height="36" rx="4" fill={`url(#${id('window')})`} stroke="#ffffff" strokeWidth="2" />
            <path d="M139 134 H261 L255 146 H145 Z" fill={`url(#${id('stripes')})`} />
            <circle cx="241" cy="168" r="7" fill={LILAC} />
            <path d="M234 168 a7 7 0 0 1 14 0" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            <rect x="240" y="168" width="2" height="12" fill={LIGHT} />
          </motion.g>
        )}

        {/* Stufe 3: Café-Ecke */}
        {level >= 3 && (
          <motion.g {...pop(0.15)}>
            <path d="M276 172 Q300 152 324 172 Z" fill={LIGHT} />
            <Sparkle x={300} y={156} s={3.5} />
            <rect x="299" y="170" width="2" height="34" fill={LIGHT} />
            <ellipse cx="300" cy="196" rx="16" ry="4" fill="#ffffff" stroke={WALL_LINE} />
            <rect x="294" y="188" width="8" height="7" rx="2" fill="#8B5E3C" />
            <rect x="276" y="198" width="8" height="12" rx="2" fill={GOLD} />
            <rect x="316" y="198" width="8" height="12" rx="2" fill={GOLD} />
          </motion.g>
        )}

        {/* Stufe 4: Bonbonküche mit Sternen statt Rauch */}
        {level >= 4 && (
          <motion.g {...pop(0.2)}>
            <rect x="22" y="134" width="90" height="78" rx="4" fill="#C9D9F5" />
            <path d="M22 134 L37 118 L52 134 L67 118 L82 134 L97 118 L112 134 Z" fill={DENIM} />
            <rect x="88" y="92" width="12" height="30" fill={LIGHT} />
            {[0, 0.8, 1.6].map((delay) => (
              <motion.g
                key={delay}
                animate={{ y: [0, -22], opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 2.4, delay }}
              >
                <Sparkle x={94} y={86} s={4} />
              </motion.g>
            ))}
            <rect x="34" y="160" width="18" height="16" rx="2" fill={`url(#${id('window')})`} />
            <rect x="60" y="160" width="18" height="16" rx="2" fill={`url(#${id('window')})`} />
            <circle cx="98" cy="190" r="9" fill={LILAC} />
            <path d="M89 190 l-6 -4 v8 Z M107 190 l6 -4 v8 Z" fill={LILAC} />
          </motion.g>
        )}

        {/* Stufe 5: Online-Shop & Lieferwagen */}
        {level >= 5 && (
          <motion.g {...pop(0.25)}>
            <motion.g animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <rect x="30" y="214" width="62" height="24" rx="6" fill={BLUE} />
              <rect x="92" y="220" width="22" height="18" rx="5" fill={BLUE} />
              <rect x="97" y="223" width="12" height="7" rx="2" fill={`url(#${id('window')})`} />
              <text x="61" y="230" textAnchor="middle" fontSize="8" fontWeight="800" fill="#ffffff" fontFamily="Inter, sans-serif">
                Loopy's
              </text>
              <circle cx="46" cy="240" r="6" fill={NAVY} stroke={GOLD} strokeWidth="1.5" />
              <circle cx="102" cy="240" r="6" fill={NAVY} stroke={GOLD} strokeWidth="1.5" />
            </motion.g>
            {/* Laptop als Zeichen für den Online-Shop */}
            <g transform="translate(300 120)">
              <circle r="14" fill="#ffffff" opacity="0.95" />
              <rect x="-8" y="-7" width="16" height="10" rx="1.5" fill={BLUE} />
              <rect x="-10" y="3" width="20" height="3" rx="1.5" fill={DENIM} />
            </g>
          </motion.g>
        )}

        {/* Stufe 6: zweite Filiale */}
        {level >= 6 && (
          <motion.g {...pop(0.3)}>
            <rect x="336" y="140" width="56" height="72" rx="5" fill={WALL} stroke={WALL_LINE} strokeWidth="2" />
            <path d="M330 144 Q352 136 364 110 Q376 136 398 144 Z" fill={LILAC} />
            <Sparkle x={364} y={106} s={5} />
            <path d="M356 212 V186 Q364 176 372 186 V212 Z" fill={DENIM} />
            <circle cx="364" cy="160" r="10" fill={GOLD} />
            <text x="364" y="164" textAnchor="middle" fontSize="11" fontWeight="800" fill={NAVY} fontFamily="Inter, sans-serif">
              2
            </text>
          </motion.g>
        )}

        {/* Stufe 7: Candy-Imperium */}
        {level >= 7 && (
          <motion.g {...pop(0.35)}>
            {/* Krone auf dem Dach */}
            <path d="M186 58 L188 42 L195 50 L200 38 L205 50 L212 42 L214 58 Z" fill={GOLD} stroke={GOLD_DARK} strokeWidth="1.5" />
            <circle cx="200" cy="52" r="2.5" fill={LILAC} />
            {/* Laternen-Ballons */}
            {[
              [120, 70, LILAC],
              [290, 84, LIGHT],
              [318, 64, GOLD],
            ].map(([x, y, c]) => (
              <motion.g key={x} animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.6, delay: x / 200 }}>
                <ellipse cx={x} cy={y} rx="9" ry="11" fill={c} />
                <path d={`M${x} ${y + 11} q4 12 -2 26`} stroke={LIGHT} fill="none" />
              </motion.g>
            ))}
            {/* Sternschnuppe */}
            <motion.g
              initial={{ x: -60, y: -20, opacity: 0 }}
              animate={{ x: [-60, 140], y: [-20, 40], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, repeatDelay: 3 }}
            >
              <path d="M60 30 L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
              <Sparkle x={62} y={31} s={4} fill="#ffffff" />
            </motion.g>
          </motion.g>
        )}

        {/* Glitzer rund um den Laden */}
        {level >= 1 &&
          [
            [128, 150, 0],
            [282, 120, 0.6],
            [160, 82, 1.2],
            [326, 170, 1.8],
          ].map(([x, y, delay]) => (
            <motion.g
              key={`${x}-${y}`}
              animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2.8, delay }}
            >
              <Sparkle x={x} y={y} s={3.5} />
            </motion.g>
          ))}
      </g>
    </svg>
  )
}
