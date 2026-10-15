import { useState } from 'react'
import DeTerm from './DeTerm.jsx'
import { useLang } from '../i18n.jsx'

// Diagramme für die Lernseiten. Alle bekommen das Farb-Theme `t` des Jahrgangs.

// Kette: A → B → C (auf dem Handy untereinander)
export function Kette({ glieder, t }) {
  return (
    <div className="rounded-2xl bg-white shadow-bubbleSm p-4 flex flex-col sm:flex-row items-stretch gap-2">
      {glieder.map((g, i) => (
        <div key={g.titel} className="contents">
          {i > 0 && <div className={`self-center font-bold text-xl ${t.text}`}><span className="sm:hidden">↓</span><span className="hidden sm:inline">→</span></div>}
          <div className={`flex-1 rounded-xl ${t.soft} px-3 py-2 text-center`}>
            <div className="text-xs font-semibold text-slate-500">{g.titel}</div>
            <div className="text-lg font-bold text-slate-800">{g.wert}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Entscheidungsweg: Frage → zwei Antworten, eine endet im Ergebnis, die andere geht weiter.
export function Entscheidung({ titel, schritte, t }) {
  return (
    <div className="rounded-2xl bg-white shadow-bubbleSm p-4">
      {titel && <div className={`text-lg font-bold mb-3 text-center ${t.text}`}>{titel}</div>}
      {schritte.map((s, i) => (
        <div key={s.frage}>
          {i > 0 && <div className={`text-center text-xl font-bold ${t.text}`}>↓</div>}
          <div className="rounded-xl bg-slate-100 px-3 py-2 text-center font-bold text-slate-800">
            {s.frage}
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[s.links, s.rechts].map((a) => (
              <div key={a.antwort} className="flex flex-col items-center gap-1 text-center">
                <span className="text-xs font-bold text-slate-500">{a.antwort} ↓</span>
                {a.ergebnis ? (
                  <div className={`w-full rounded-xl bg-gradient-to-br ${t.gradient} px-2 py-2 text-accent-on`}>
                    <div className="font-bold leading-tight">{a.ergebnis}</div>
                    {a.beispiel && <div className="text-xs opacity-90">{a.beispiel}</div>}
                  </div>
                ) : (
                  <div className={`w-full rounded-xl border-2 border-dashed px-2 py-2 font-bold ${t.text}`}>
                    {a.weiter}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// Minimal- vs. Maximalprinzip als Balken: was ist fix, was wird gesucht?
export function Prinzip({ minimal, maximal, t }) {
  const { t: tr } = useLang()
  const karten = [
    {
      titel: tr('minPrinciple'),
      balken: [
        { name: tr('input'), hoehe: 35, tag: tr('asLittle'), gesucht: true },
        { name: tr('goal'), hoehe: 80, tag: tr('fixed'), gesucht: false },
      ],
      beispiel: minimal,
    },
    {
      titel: tr('maxPrinciple'),
      balken: [
        { name: tr('input'), hoehe: 55, tag: tr('fixed'), gesucht: false },
        { name: tr('goal'), hoehe: 100, tag: tr('asMuch'), gesucht: true },
      ],
      beispiel: maximal,
    },
  ]
  return (
    <div className="grid grid-cols-2 gap-3">
      {karten.map((k) => (
        <div key={k.titel} className="rounded-2xl bg-white shadow-bubbleSm p-4 flex flex-col">
          <div className={`font-bold leading-tight mb-3 ${t.text}`}>{k.titel}</div>
          <div className="flex h-36 items-end justify-around gap-2">
            {k.balken.map((b) => (
              <div key={b.name} className="flex h-full w-12 flex-col items-center justify-end">
                <span
                  className={`mb-1 text-center text-[11px] font-bold leading-tight ${
                    b.gesucht ? t.text : 'text-slate-500'
                  }`}
                >
                  {b.tag}
                </span>
                <div
                  style={{ height: `${b.hoehe}%` }}
                  className={`w-full rounded-t-lg ${b.gesucht ? `bg-gradient-to-t ${t.gradient}` : 'bg-slate-300'}`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-around border-t-2 border-slate-200 pt-1 text-xs font-semibold text-slate-600">
            {k.balken.map((b) => (
              <span key={b.name} className="w-12 text-center">{b.name}</span>
            ))}
          </div>
          <p className="mt-3 text-sm text-slate-600">
            <span className="font-bold">{tr('example')}</span> {k.beispiel}
          </p>
        </div>
      ))}
    </div>
  )
}

// Wirtschaftskreislauf: Einfach → Erweitert → Vollständig, Teilnehmer antippbar.
const KNOTEN = {
  S: { x: 170, y: 40, ab: 3 },
  U: { x: 52, y: 170, ab: 1 },
  H: { x: 288, y: 170, ab: 1 },
  B: { x: 170, y: 300, ab: 2 },
}
const KW = 42 // halbe Knotenbreite
const KH = 17 // halbe Knotenhöhe

const PAARE = [
  { a: 'U', b: 'H', stufe: 1, pos: 0.3 },
  { a: 'H', b: 'B', stufe: 2, pos: 0.5 },
  { a: 'U', b: 'B', stufe: 2, pos: 0.5 },
  { a: 'S', b: 'U', stufe: 3, pos: 0.5 },
  { a: 'S', b: 'H', stufe: 3, pos: 0.5 },
  { a: 'B', b: 'S', stufe: 3, pos: 0.7 },
]

// Beschriftungen des Kreislaufs je Sprache; flows[i] = [a → b, b → a] passend zu PAARE[i].
const KREISLAUF_TEXT = {
  de: {
    labels: { S: 'Staat', U: 'Unternehmen', H: 'Haushalte', B: 'Banken' },
    flows: [
      ['Güter, Einkommen', 'Arbeitskraft, Kaufpreis'],
      ['Sparen, Zinsen & Rückzahlungen', 'Kredite, Zinsen & Auszahlungen'],
      ['Geldanlagen, Zinsen & Rückzahlungen', 'Kredite, Zinsen & Auszahlungen'],
      ['Kaufpreis, Subventionen', 'Güter, Steuern'],
      ['Einkommen, Beihilfen', 'Arbeitskraft, Steuern'],
      ['Kredite', 'Zinsen & Rückzahlungen'],
    ],
  },
  en: {
    labels: { S: 'State', U: 'Companies', H: 'Households', B: 'Banks' },
    flows: [
      ['Goods, income', 'Labour, purchase price'],
      ['Savings, interest & repayments', 'Loans, interest & payouts'],
      ['Investments, interest & repayments', 'Loans, interest & payouts'],
      ['Purchase price, subsidies', 'Goods, taxes'],
      ['Income, benefits', 'Labour, taxes'],
      ['Loans', 'Interest & repayments'],
    ],
  },
  hu: {
    labels: { S: 'Állam', U: 'Vállalatok', H: 'Háztartások', B: 'Bankok' },
    flows: [
      ['Javak, jövedelem', 'Munkaerő, vételár'],
      ['Megtakarítás, kamat és törlesztés', 'Hitelek, kamat és kifizetések'],
      ['Befektetések, kamat és törlesztés', 'Hitelek, kamat és kifizetések'],
      ['Vételár, támogatások', 'Javak, adók'],
      ['Jövedelem, juttatások', 'Munkaerő, adók'],
      ['Hitelek', 'Kamat és törlesztés'],
    ],
  },
}


// Punkt am Rand des Knoten-Rechtecks in Richtung des anderen Knotens.
function rand(p, q) {
  const dx = q.x - p.x
  const dy = q.y - p.y
  const s = Math.min(dx ? (KW + 4) / Math.abs(dx) : Infinity, dy ? (KH + 4) / Math.abs(dy) : Infinity)
  return { x: p.x + dx * s, y: p.y + dy * s }
}

function Pfeil({ von, nach, versatz }) {
  const a = rand(von, nach)
  const b = rand(nach, von)
  const len = Math.hypot(b.x - a.x, b.y - a.y)
  const ux = (b.x - a.x) / len
  const uy = (b.y - a.y) / len
  // senkrecht versetzen, damit Hin- und Rückpfeil nebeneinander liegen
  const ox = -uy * versatz
  const oy = ux * versatz
  const x1 = a.x + ox, y1 = a.y + oy
  const x2 = b.x + ox, y2 = b.y + oy
  const spitze = `${x2},${y2} ${x2 - ux * 8 - uy * 4},${y2 - uy * 8 + ux * 4} ${x2 - ux * 8 + uy * 4},${y2 - uy * 8 - ux * 4}`
  return (
    <>
      <line x1={x1} y1={y1} x2={x2 - ux * 6} y2={y2 - uy * 6} stroke="currentColor" strokeWidth="2.5" />
      <polygon points={spitze} fill="currentColor" />
    </>
  )
}

export function KreislaufDiagramm({ t }) {
  const { lang, t: tr } = useLang()
  const txt = KREISLAUF_TEXT[lang] ?? KREISLAUF_TEXT.de
  const STUFEN = [tr('circSimple'), tr('circExtended'), tr('circFull')]
  const [stufe, setStufe] = useState(1)
  const [auswahl, setAuswahl] = useState(null)

  const aktivePaare = PAARE.filter((p) => p.stufe <= stufe)
  const istHervorgehoben = (p) => !auswahl || p.a === auswahl || p.b === auswahl
  const sichtbarePaare = aktivePaare.filter(istHervorgehoben)

  const wechsleStufe = (s) => {
    setStufe(s)
    if (auswahl && KNOTEN[auswahl].ab > s) setAuswahl(null)
  }

  return (
    <div className="rounded-2xl bg-white shadow-bubbleSm p-4">
      <div className="mb-3 grid grid-cols-3 gap-1 rounded-full bg-slate-100 p-1">
        {STUFEN.map((name, i) => (
          <button
            key={name}
            onClick={() => wechsleStufe(i + 1)}
            className={`rounded-full py-1.5 text-sm font-bold transition-colors ${
              stufe === i + 1 ? `bg-gradient-to-br ${t.gradient} text-accent-on` : 'text-slate-500'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 340 340" className="mx-auto w-full max-w-sm" role="img" aria-label={STUFEN[stufe - 1]}>
        {aktivePaare.map((p, i) => {
          const nr = PAARE.indexOf(p) + 1
          const A = KNOTEN[p.a]
          const B = KNOTEN[p.b]
          const mx = A.x + (B.x - A.x) * p.pos
          const my = A.y + (B.y - A.y) * p.pos
          return (
            <g key={i} className={istHervorgehoben(p) ? t.text : 'text-slate-200'}>
              <Pfeil von={A} nach={B} versatz={-5} />
              <Pfeil von={B} nach={A} versatz={-5} />
              <circle cx={mx} cy={my} r="10" fill="white" stroke="currentColor" strokeWidth="2" />
              <text x={mx} y={my + 4} textAnchor="middle" fontSize="11" fontWeight="800" fill="currentColor">
                {nr}
              </text>
            </g>
          )
        })}
        {Object.entries(KNOTEN).map(([id, k]) => {
          const aktiv = k.ab <= stufe
          const gewaehlt = auswahl === id
          return (
            <g
              key={id}
              onClick={() => aktiv && setAuswahl(gewaehlt ? null : id)}
              className={`${aktiv ? 'cursor-pointer' : ''} ${t.text}`}
              opacity={aktiv ? 1 : 0.25}
            >
              <rect
                x={k.x - KW}
                y={k.y - KH}
                width={KW * 2}
                height={KH * 2}
                rx={KH}
                fill={gewaehlt ? 'currentColor' : 'white'}
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <text
                x={k.x}
                y={k.y + 4}
                textAnchor="middle"
                fontSize="12"
                fontWeight="800"
                fill={gewaehlt ? 'white' : '#1e293b'}
              >
                {txt.labels[id]}
              </text>
            </g>
          )
        })}
      </svg>

      <p className="mt-1 mb-3 text-center text-xs text-slate-400">
        {auswahl ? tr('circResetHint') : tr('circTapHint')}
      </p>

      <ul className="flex flex-col gap-2 text-sm">
        {sichtbarePaare.map((p) => {
          const nr = PAARE.indexOf(p) + 1
          return (
            <li key={nr} className="flex gap-2">
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${t.soft} ${t.text}`}>
                {nr}
              </span>
              <div className="text-slate-600">
                <div>
                  <b className="text-slate-800">{txt.labels[p.a]} → {txt.labels[p.b]}:</b> {txt.flows[nr - 1][0]}
                </div>
                <div>
                  <b className="text-slate-800">{txt.labels[p.b]} → {txt.labels[p.a]}:</b> {txt.flows[nr - 1][1]}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// Nummerierte Reihenfolge (z. B. Phasen, Schritte) als senkrechte Zeitleiste.
export function Ablauf({ titel, schritte, t }) {
  return (
    <div className="rounded-2xl bg-white shadow-bubbleSm p-4">
      {titel && <div className={`text-lg font-bold mb-3 ${t.text}`}>{titel}</div>}
      <ol className="flex flex-col">
        {schritte.map((s, i) => (
          <li key={s.titel} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-accent-on`}>
                {i + 1}
              </span>
              {i < schritte.length - 1 && <span className="w-0.5 flex-1 bg-slate-200 my-1" />}
            </div>
            <div className={i < schritte.length - 1 ? 'pb-3' : ''}>
              <div className="font-bold text-slate-800 leading-tight pt-0.5">{s.titel}</div>
              {s.text && <p className="text-sm text-slate-600">{s.text}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

// Vergleichstabelle; erste Spalte fett. Auf schmalen Bildschirmen seitlich scrollbar.
export function Tabelle({ spalten, zeilen, deZeilen, t }) {
  return (
    <div className="rounded-2xl bg-white shadow-bubbleSm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className={t.soft}>
            {spalten.map((s) => (
              <th key={s} className={`px-3 py-2 text-left font-bold ${t.text}`}>{s}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {zeilen.map((z, i) => (
            <tr key={i} className="border-t border-slate-100 align-top">
              {z.map((zelle, j) => (
                <td key={j} className={`px-3 py-2 ${j === 0 ? 'font-bold text-slate-800' : 'text-slate-600'}`}>
                  {zelle}
                  {j === 0 && <DeTerm term={deZeilen?.[i]?.[0]} shown={zelle} className="mt-1 flex w-fit text-xs" />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Angebot & Nachfrage (Pizza-Beispiel aus dem Buch): Kurven + Gleichgewicht.
export function Marktdiagramm({ t }) {
  const { t: tr } = useLang()
  // Werte: Preis 3–5 €, Menge 100–180 Stück, Gleichgewicht bei 4 € / 140 Stück
  const x = (menge) => 50 + ((menge - 80) / 120) * 260
  const y = (preis) => 220 - ((preis - 2.5) / 3) * 200
  return (
    <div className="rounded-2xl bg-white shadow-bubbleSm p-4">
      <svg viewBox="0 0 330 260" className="mx-auto w-full max-w-sm" role="img" aria-label="Angebots- und Nachfragekurve">
        <line x1="50" y1="220" x2="320" y2="220" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="50" y1="220" x2="50" y2="15" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="54" y="20" fontSize="11" fill="#64748b" fontWeight="700">{tr('marketPrice')}</text>
        <text x="320" y="240" fontSize="11" fill="#64748b" fontWeight="700" textAnchor="end">{tr('marketQty')}</text>
        {[3, 4, 5].map((p) => (
          <text key={p} x="44" y={y(p) + 4} fontSize="10" fill="#64748b" textAnchor="end">{p} €</text>
        ))}
        {[100, 140, 180].map((m) => (
          <text key={m} x={x(m)} y="234" fontSize="10" fill="#64748b" textAnchor="middle">{m}</text>
        ))}
        <line x1={x(140)} y1={y(4)} x2={x(140)} y2="220" stroke="#cbd5e1" strokeDasharray="4 3" />
        <line x1="50" y1={y(4)} x2={x(140)} y2={y(4)} stroke="#cbd5e1" strokeDasharray="4 3" />
        <line x1={x(100)} y1={y(5)} x2={x(180)} y2={y(3)} stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
        <text x={x(180) + 4} y={y(3) + 4} fontSize="11" fontWeight="800" fill="#e11d48">{tr('marketDemand')}</text>
        <g className={t.text}>
          <line x1={x(100)} y1={y(3)} x2={x(180)} y2={y(5)} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <text x={x(180) + 4} y={y(5) + 4} fontSize="11" fontWeight="800" fill="currentColor">{tr('marketSupply')}</text>
          <circle cx={x(140)} cy={y(4)} r="6" fill="currentColor" stroke="white" strokeWidth="2" />
        </g>
        <text x={x(140) + 10} y={y(4) - 8} fontSize="11" fontWeight="800" fill="#1e293b">{tr('marketEq')}</text>
      </svg>
      <div className="mt-2 grid grid-cols-1 gap-1 text-sm text-slate-600">
        <p><b className="text-rose-600">{tr('marketDemand')}:</b> {tr('marketDemandText')}</p>
        <p><b className={t.text}>{tr('marketSupply')}:</b> {tr('marketSupplyText')}</p>
        <p><b className="text-slate-800">{tr('marketEqLabel')}</b> {tr('marketEqText')}</p>
      </div>
    </div>
  )
}

// Kreislauf aus 3–6 Schritten, die sich wiederholen (z. B. Managementkreis).
export function Zyklus({ mitte, schritte, t }) {
  const n = schritte.length
  return (
    <div className="rounded-2xl bg-white shadow-bubbleSm p-4">
      <div className="relative mx-auto aspect-square w-full max-w-xs">
        <div className="absolute inset-[18%] rounded-full border-4 border-dashed border-slate-200" />
        <div className={`absolute inset-[30%] flex flex-col items-center justify-center text-center font-bold leading-tight ${t.text}`}>
          <span className="text-2xl">↻</span>
          <span className="text-sm">{mitte}</span>
        </div>
        {schritte.map((s, i) => {
          const winkel = (i / n) * 2 * Math.PI - Math.PI / 2
          const left = 50 + Math.cos(winkel) * 34
          const top = 50 + Math.sin(winkel) * 34
          return (
            <div
              key={s}
              style={{ left: `${left}%`, top: `${top}%` }}
              className={`absolute w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-br ${t.gradient} px-2 py-1.5 text-center text-xs font-bold leading-tight text-accent-on shadow-bubbleSm`}
            >
              {i + 1}. {s}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Transportweg mit Markierung, wo Risiko und Kosten auf den Käufer übergehen.
export function Transportweg({ titel, stationen, risiko, kosten, t }) {
  const { t: tr } = useLang()
  return (
    <div className="rounded-2xl bg-white shadow-bubbleSm p-4">
      {titel && <div className={`font-bold mb-3 ${t.text}`}>{titel}</div>}
      <div className="relative flex items-start justify-between">
        <div className="absolute left-[8%] right-[8%] top-[13px] h-1 rounded-full bg-slate-200" />
        {stationen.map((s, i) => (
          <div key={s} className="relative z-10 flex w-1/4 flex-col items-center text-center">
            <span className={`h-7 w-7 rounded-full border-4 border-white ${i === 0 || i === stationen.length - 1 ? `bg-gradient-to-br ${t.gradient}` : 'bg-slate-300'}`} />
            <span className="mt-1 text-[11px] font-bold leading-tight text-slate-700">{s}</span>
            <div className="mt-1 flex flex-col gap-0.5">
              {risiko === i && <span className="rounded-full bg-amber-100 px-1.5 text-[10px] font-bold text-amber-700">{tr('risk')}</span>}
              {kosten === i && <span className="rounded-full bg-emerald-100 px-1.5 text-[10px] font-bold text-emerald-700">{tr('cost')}</span>}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">{tr('transportHint')}</p>
    </div>
  )
}

// Organe einer Kapitalgesellschaft: oben die Versammlung, unten Aufsichtsrat und Leitung.
export function Organe({ oben, links, rechts, pfeile, t }) {
  const Box = ({ o }) => (
    <div className={`rounded-xl ${t.soft} p-3`}>
      <div className={`font-bold leading-tight ${t.text}`}>{o.name}</div>
      <ul className="mt-1 flex flex-col gap-0.5 text-xs text-slate-600">
        {o.punkte.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </div>
  )
  return (
    <div className="rounded-2xl bg-white shadow-bubbleSm p-4">
      <Box o={oben} />
      <div className="my-1 grid grid-cols-2 text-center text-xs font-bold text-slate-500">
        <span>↙ {pfeile.links}</span>
        <span>{pfeile.rechts} ↘</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Box o={links} />
        <Box o={rechts} />
      </div>
      <div className="mt-1 text-center text-xs font-bold text-slate-500">{pfeile.unten}</div>
    </div>
  )
}

// Formel als echter Bruch: name = zaehler / nenner (· faktor), optional mit Rechenbeispiel.
export function Formel({ name, zaehler, nenner, faktor, beispiel, t }) {
  const { t: tr } = useLang()
  return (
    <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-4 shadow-bubbleSm">
      <div className="flex flex-wrap items-center justify-center gap-2 text-center">
        <span className={`font-bold ${t.text}`}>{name} =</span>
        {nenner && nenner !== '1' ? (
          <span className="inline-flex flex-col items-center text-sm font-semibold text-slate-700">
            <span className="px-1">{zaehler}</span>
            <span className="my-0.5 h-0.5 w-full rounded bg-slate-400" />
            <span className="px-1">{nenner}</span>
          </span>
        ) : (
          <span className="text-sm font-semibold text-slate-700">{zaehler}</span>
        )}
        {faktor && <span className="text-sm font-semibold text-slate-700">{faktor}</span>}
      </div>
      {beispiel && <p className="mt-2 text-center text-xs text-slate-500">{tr('egShort')} {beispiel}</p>}
    </div>
  )
}
