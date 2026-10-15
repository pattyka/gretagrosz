// 150 days to the ÖMO Regionalwettbewerb für Fortgeschrittene (GWF), following your GWF 150-Tage-Plan.
// The real paper: 4 problems in 4 hours, 8 points each — always algebra, geometry, combinatorics and number theory.
//
// Each day is one of:
//   learn — a topic with a lesson, 2 quick problems and a proof (plus a challenge)
//   paper — a real past paper from the ÖMO archive, under exam conditions
//   task  — review, debrief, formula sheet or rest
// Only papers from 2015 on are online, so those replace the older years in the original plan.

export const START = '2026-10-07' // day 1 of the plan

export const AREAS = {
  A: { name: 'Algebra', color: 'var(--blue)' },
  G: { name: 'Geometrie', color: 'var(--green)' },
  K: { name: 'Kombinatorik', color: 'var(--orange)' },
  N: { name: 'Zahlentheorie', color: 'var(--pink)' },
  X: { name: 'Mix', color: 'var(--indigo)' },
}
export const AREA_ORDER = ['A', 'G', 'K', 'N']

export const PAPERS = {
  GWF: { name: 'Regionalwettbewerb', minutes: 240 },
  ZWF: { name: 'Bundeswettbewerb Teil 1', minutes: 270 },
}
export const paperLinks = ([comp, year]) => ({
  problems: `https://www.math.aau.at/OeMO/aufgaben/${comp}/${year}`,
  solutions: `https://www.math.aau.at/OeMO/loesungen/${comp}/${year}`,
})

export const PHASES = [
  { name: 'Grundlagen', days: [1, 35], about: 'The basic tools of every area.' },
  { name: 'Vertiefung', days: [36, 100], about: 'The ideas that come up again and again.' },
  { name: 'Altaufgaben', days: [101, 135], about: 'Real past papers, reviews and your weak spots.' },
  { name: 'Generalprobe', days: [136, 150], about: 'Full practice competitions and getting ready.' },
]

const ROWS = [
  {"area": "G", "kind": "learn", "items": ["Winkelsumme", "Nebenwinkel", "Scheitelwinkel", "Stufenwinkel", "Wechselwinkel"]},
  {"area": "N", "kind": "learn", "items": ["Teilbarkeit", "Teilbarkeitsregeln 2–11"]},
  {"area": "A", "kind": "learn", "items": ["Binomische Formeln", "Faktorisieren", "Quadratisch ergänzen"]},
  {"area": "K", "kind": "learn", "items": ["Summenregel", "Produktregel"]},
  {"area": "G", "kind": "learn", "items": ["Kongruenzsätze", "SSS", "SWS", "WSW", "SsW"]},
  {"area": "N", "kind": "learn", "items": ["ggT", "kgV", "Euklidischer Algorithmus"]},
  {"area": "A", "kind": "learn", "items": ["Quadratische Gleichungen", "Diskriminante", "Lösungsformel"]},
  {"area": "K", "kind": "learn", "items": ["Fakultät", "Permutationen"]},
  {"area": "G", "kind": "learn", "items": ["Ähnliche Dreiecke (WW, SWS, SSS)"]},
  {"area": "N", "kind": "learn", "items": ["Primzahlen", "Primfaktorzerlegung", "Eindeutigkeit der PFZ"]},
  {"area": "A", "kind": "learn", "items": ["Satz von Vieta (Grad 2)"]},
  {"area": "K", "kind": "learn", "items": ["Binomialkoeffizient", "Pascalsches Dreieck"]},
  {"area": "G", "kind": "learn", "items": ["Strahlensätze"]},
  {"area": "N", "kind": "learn", "items": ["Teileranzahl τ(n)", "Teilersumme σ(n)"]},
  {"area": "A", "kind": "learn", "items": ["Wurzelgleichungen", "Definitionsbereich", "Probe"]},
  {"area": "K", "kind": "learn", "items": ["Schubfachprinzip"]},
  {"area": "G", "kind": "learn", "items": ["Pythagoras", "Höhensatz", "Kathetensatz"]},
  {"area": "N", "kind": "learn", "items": ["Restklassen", "Kongruenzen mod m", "Rechenregeln"]},
  {"area": "A", "kind": "learn", "items": ["Betragsgleichungen", "Fallunterscheidung"]},
  {"area": "K", "kind": "learn", "items": ["Symmetriefaktor", "Stars and Bars"]},
  {"area": "G", "kind": "learn", "items": ["Satz des Thales", "Umkreis", "Umkreismittelpunkt"]},
  {"area": "N", "kind": "learn", "items": ["Kürzen in Kongruenzen", "Inverses mod m"]},
  {"area": "A", "kind": "learn", "items": ["Gleichungssysteme", "Einsetzen", "Addieren", "Symmetrische Systeme"]},
  {"area": "K", "kind": "learn", "items": ["Vollständige Induktion"]},
  {"area": "G", "kind": "learn", "items": ["Inkreis", "Winkelsymmetralen", "Inkreismittelpunkt"]},
  {"area": "N", "kind": "learn", "items": ["Letzte Ziffer", "Periodizität von aᵏ mod m"]},
  {"area": "A", "kind": "learn", "items": ["QM ≥ AM ≥ GM ≥ HM (2 Variablen)"]},
  {"area": "K", "kind": "learn", "items": ["Invarianten", "Paritätsargument"]},
  {"area": "G", "kind": "learn", "items": ["Schwerpunkt", "Schwerlinien", "Verhältnis 2:1"]},
  {"area": "N", "kind": "learn", "items": ["Quadratzahlen mod 3, 4, 8", "Kubikzahlen mod 7, 9"]},
  {"area": "A", "kind": "learn", "items": ["Teleskopsummen", "Teleskopprodukte"]},
  {"area": "K", "kind": "learn", "items": ["Extremalprinzip"]},
  {"area": "G", "kind": "learn", "items": ["Höhenschnittpunkt", "Euler-Gerade"]},
  {"area": "N", "kind": "learn", "items": ["Kleiner Satz von Fermat"]},
  {"area": "A", "kind": "learn", "items": ["Arithmetische Folge", "Geometrische Folge", "Summenformeln"]},
  {"area": "G", "kind": "learn", "items": ["Peripheriewinkelsatz", "Zentriwinkelsatz"]},
  {"area": "N", "kind": "learn", "items": ["Lineare diophantische Gleichung ax+by=c"]},
  {"area": "A", "kind": "learn", "items": ["Polynomdivision", "Horner-Schema"]},
  {"area": "K", "kind": "learn", "items": ["Färbungsargumente", "Schachbrettfärbung"]},
  {"area": "G", "kind": "learn", "items": ["Sehnen-Tangentenwinkelsatz"]},
  {"area": "N", "kind": "learn", "items": ["Faktorisieren: x²−y²=a"]},
  {"area": "A", "kind": "learn", "items": ["Ganzzahlige Nullstelle teilt a₀", "Linearfaktoren abspalten"]},
  {"area": "K", "kind": "learn", "items": ["Graphen", "Knotengrad", "Handschlaglemma"]},
  {"area": "G", "kind": "learn", "items": ["Sehnenviereck", "Umkehrung Peripheriewinkelsatz"]},
  {"area": "N", "kind": "learn", "items": ["Aufeinanderfolgende Quadrate a² < x < (a+1)²"]},
  {"area": "A", "kind": "learn", "items": ["Vieta für Grad 3 und 4", "Elementarsymmetrische Polynome"]},
  {"area": "K", "kind": "learn", "items": ["Ramsey R(3,3)", "Kanten-Zweifärbung"]},
  {"area": "G", "kind": "learn", "items": ["Winkeljagd", "Sehnenvierecke im Dreieck finden"]},
  {"area": "N", "kind": "learn", "items": ["Quadratische Reste", "x² = ky + d"]},
  {"area": "A", "kind": "learn", "items": ["Substitution x²=u", "Substitution x+1/x=u", "Reziproke Polynome"]},
  {"area": "K", "kind": "learn", "items": ["Spiele", "Symmetriestrategie"]},
  {"area": "G", "kind": "learn", "items": ["Höhenfußpunkte", "Höhenfußpunktdreieck", "H am Seitenrand gespiegelt liegt am Umkreis"]},
  {"area": "N", "kind": "learn", "items": ["x²+ky²=a (endlich viele Lösungen)"]},
  {"area": "A", "kind": "learn", "items": ["xⁿ−yⁿ", "xⁿ+yⁿ (n ungerade)", "x⁴+x²+1 zerlegen"]},
  {"area": "K", "kind": "learn", "items": ["Doppeltes Abzählen"]},
  {"area": "G", "kind": "learn", "items": ["Winkelsymmetralensatz (Teilverhältnis)"]},
  {"area": "N", "kind": "learn", "items": ["p-adische Bewertung", "Legendre-Formel für n!"]},
  {"area": "A", "kind": "learn", "items": ["Mittelungleichung n Variablen", "Gleichheitsfall"]},
  {"area": "K", "kind": "learn", "items": ["Rekursionen beim Abzählen"]},
  {"area": "G", "kind": "learn", "items": ["Ankreise", "Ankreismittelpunkte", "Tangentenabschnitte s−a"]},
  {"area": "N", "kind": "learn", "items": ["Ziffernsumme", "Quersumme mod 9", "Dezimaldarstellung"]},
  {"area": "A", "kind": "learn", "items": ["Cauchy-Schwarz", "Engel-Form a²/x + b²/y ≥ (a+b)²/(x+y)"]},
  {"area": "K", "kind": "learn", "items": ["Inklusion-Exklusion"]},
  {"area": "G", "kind": "learn", "items": ["Südpolsatz", "Nordpolsatz"]},
  {"area": "N", "kind": "learn", "items": ["Größenabschätzung", "Unendlicher Abstieg"]},
  {"area": "A", "kind": "learn", "items": ["(Σx)(Σ1/x) ≥ n²", "Umordnungsungleichung"]},
  {"area": "K", "kind": "learn", "items": ["Bijektionen"]},
  {"area": "G", "kind": "learn", "items": ["R = abc/4A", "Erweiterter Sinussatz"]},
  {"area": "N", "kind": "learn", "items": ["Chinesischer Restsatz"]},
  {"area": "A", "kind": "learn", "items": ["Polynomiale Ungleichungen", "Summe von Quadraten"]},
  {"area": "K", "kind": "learn", "items": ["Monovarianten"]},
  {"area": "G", "kind": "learn", "items": ["Flächenverhältnisse", "Flächen ähnlicher Dreiecke"]},
  {"area": "N", "kind": "learn", "items": ["ggT(a,b)=ggT(a,b−a)", "ggT(aᵐ−1, aⁿ−1)"]},
  {"area": "A", "kind": "learn", "items": ["Bestmögliche Konstanten", "Spezialwerte einsetzen"]},
  {"area": "X", "kind": "task", "items": ["Wiederholung Kombinatorik: Schubfach", "Invarianten", "Färbung", "Doppelt abzählen"]},
  {"area": "G", "kind": "learn", "items": ["Tangentenviereck", "Satz von Pitot"]},
  {"area": "N", "kind": "learn", "items": ["Unendlich viele Primzahlen", "Primzahlen p ≡ 3 mod 4"]},
  {"area": "A", "kind": "learn", "items": ["Monotone Funktion auf Ungleichung anwenden"]},
  {"area": "K", "kind": "learn", "items": ["Schubfach mit Summen und Differenzen"]},
  {"area": "G", "kind": "learn", "items": ["Sinussatz", "Kosinussatz"]},
  {"area": "X", "kind": "task", "items": ["Wiederholung Zahlentheorie: Kongruenzen", "Fermat", "Quadratische Reste"]},
  {"area": "A", "kind": "learn", "items": ["Rekursion 1. Ordnung aₙ₊₁ = p·aₙ + q"]},
  {"area": "K", "kind": "learn", "items": ["Optimum zeigen + Konstruktion angeben"]},
  {"area": "G", "kind": "learn", "items": ["Dreiecksungleichung", "Vierecke mit Diagonalen"]},
  {"area": "A", "kind": "learn", "items": ["Σk²", "Σk³", "Summenformeln per Induktion"]},
  {"area": "N", "kind": "learn", "items": ["Exponentielle Gleichungen 2ˣ+3ʸ=z²", "mod-Argumente"]},
  {"area": "K", "kind": "learn", "items": ["Gitterwege"]},
  {"area": "G", "kind": "learn", "items": ["Potenz eines Punktes", "Sehnensatz", "Sekantensatz"]},
  {"area": "A", "kind": "learn", "items": ["Fibonacci-Folge", "Fibonacci mod m"]},
  {"area": "N", "kind": "learn", "items": ["n⁴+4 zerlegen", "Zusammengesetztheit zeigen"]},
  {"area": "K", "kind": "learn", "items": ["Tabellen", "Zeilen- und Spaltensummen"]},
  {"area": "X", "kind": "task", "items": ["Wiederholung Geometrie: Winkeljagd", "Ähnlichkeit", "Sehnenvierecke"]},
  {"area": "A", "kind": "learn", "items": ["Gleichungssysteme II", "Subtrahieren", "Multiplizieren"]},
  {"area": "N", "kind": "learn", "items": ["Teilbarkeit von Binomialkoeffizienten", "(3n)!/(n!)³ ganz"]},
  {"area": "K", "kind": "learn", "items": ["Spiele II", "Rückwärts arbeiten"]},
  {"area": "G", "kind": "learn", "items": ["Hilfslinien", "Spiegeln", "Parallelen ziehen"]},
  {"area": "A", "kind": "learn", "items": ["Ungleichungen mit Nebenbedingung a+b+c=1", "abc=1"]},
  {"area": "N", "kind": "learn", "items": ["Repunits", "Zahlen der Form 10ⁿ±1"]},
  {"area": "K", "kind": "learn", "items": ["Kachelungen", "Pflasterungen"]},
  {"area": "G", "kind": "learn", "items": ["Trigonometrie im Dreieck", "Koordinaten als Notlösung"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2021], "items": ["GWF 2021 (4 Aufgaben)"]},
  {"area": "X", "kind": "task", "items": ["Beweise sauber aufschreiben", "Fehleranalyse GWF 2021"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2020], "items": ["GWF 2020 (4 Aufgaben)"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2015], "items": ["Bundeswettbewerb Teil 1 2015 (4 Aufgaben, schwerer)"]},
  {"area": "N", "kind": "task", "items": ["Wiederholung: Teilbarkeit", "Kongruenzen", "Diophantische Gleichungen"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2019], "items": ["GWF 2019 (4 Aufgaben)"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2016], "items": ["Bundeswettbewerb Teil 1 2016 (4 Aufgaben, schwerer)"]},
  {"area": "G", "kind": "task", "items": ["Wiederholung: Sehnenviereck", "Südpolsatz", "Höhenschnittpunkt"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2018], "items": ["GWF 2018 (4 Aufgaben)"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2017], "items": ["Bundeswettbewerb Teil 1 2017 (4 Aufgaben, schwerer)"]},
  {"area": "A", "kind": "task", "items": ["Wiederholung: AM-GM", "Cauchy-Schwarz", "Summe von Quadraten"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2017], "items": ["GWF 2017 (4 Aufgaben)"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2018], "items": ["Bundeswettbewerb Teil 1 2018 (4 Aufgaben, schwerer)"]},
  {"area": "K", "kind": "task", "items": ["Wiederholung: Invarianten", "Schubfach", "Doppelt abzählen", "Spiele"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2016], "items": ["GWF 2016 (4 Aufgaben)"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2019], "items": ["Bundeswettbewerb Teil 1 2019 (4 Aufgaben, schwerer)"]},
  {"area": "A", "kind": "task", "items": ["Wiederholung: Polynome", "Vieta", "Faktorisieren"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2015], "items": ["GWF 2015 (4 Aufgaben)"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2020], "items": ["Bundeswettbewerb Teil 1 2020 (4 Aufgaben, schwerer)"]},
  {"area": "A", "kind": "task", "items": ["Wiederholung: Rekursion", "Teleskop", "Induktion"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2021], "items": ["Bundeswettbewerb Teil 1 2021 (4 Aufgaben, schwerer)"]},
  {"area": "X", "kind": "task", "redo": true, "items": ["Altaufgabe wiederholen", "deine schwächste Probe nochmal unter Zeit"]},
  {"area": "X", "kind": "task", "items": ["Schwächstes Gebiet (aus Fehlerheft)"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2022], "items": ["Bundeswettbewerb Teil 1 2022 (4 Aufgaben, schwerer)"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2023], "items": ["Bundeswettbewerb Teil 1 2023 (4 Aufgaben, schwerer)"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2024], "items": ["Bundeswettbewerb Teil 1 2024 (4 Aufgaben, schwerer)"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2025], "items": ["Bundeswettbewerb Teil 1 2025 (4 Aufgaben, schwerer)"]},
  {"area": "G", "kind": "task", "items": ["Wiederholung: Ankreise", "Winkelsymmetralensatz", "Potenz eines Punktes"]},
  {"area": "X", "kind": "paper", "paper": ["ZWF", 2026], "items": ["Bundeswettbewerb Teil 1 2026 (4 Aufgaben, schwerer)"]},
  {"area": "X", "kind": "task", "redo": true, "items": ["Altaufgabe wiederholen", "deine schwächste Probe nochmal unter Zeit"]},
  {"area": "X", "kind": "task", "redo": true, "items": ["Altaufgabe wiederholen", "deine schwächste Probe nochmal unter Zeit"]},
  {"area": "X", "kind": "task", "items": ["Schwächstes Gebiet II"]},
  {"area": "X", "kind": "task", "redo": true, "items": ["Altaufgabe wiederholen", "deine schwächste Probe nochmal unter Zeit"]},
  {"area": "X", "kind": "task", "redo": true, "items": ["Altaufgabe wiederholen", "deine schwächste Probe nochmal unter Zeit"]},
  {"area": "N", "kind": "task", "items": ["Wiederholung: Fermat", "Quadratische Reste", "Legendre"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2022], "items": ["Probewettbewerb 1 unter Zeit", "GWF 2022"]},
  {"area": "X", "kind": "task", "items": ["Nachbesprechung Probe 1"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2023], "items": ["Probewettbewerb 2", "GWF 2023"]},
  {"area": "X", "kind": "task", "items": ["Nachbesprechung Probe 2", "Beweisstruktur"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2024], "items": ["Probewettbewerb 3", "GWF 2024"]},
  {"area": "X", "kind": "task", "items": ["Nachbesprechung Probe 3"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2025], "items": ["Probewettbewerb 4", "GWF 2025"]},
  {"area": "G", "kind": "task", "items": ["Formelblatt Geometrie-Sätze"]},
  {"area": "A", "kind": "task", "items": ["Formelblatt Ungleichungen", "Identitäten"]},
  {"area": "X", "kind": "paper", "paper": ["GWF", 2026], "items": ["Probewettbewerb 5", "GWF 2026"]},
  {"area": "X", "kind": "task", "items": ["Nachbesprechung Probe 5", "Fehlerheft"]},
  {"area": "X", "kind": "task", "items": ["Formelblatt Zahlentheorie", "Kombinatorik"]},
  {"area": "X", "kind": "task", "items": ["Leichte Aufwärmaufgaben", "Zeiteinteilung"]},
  {"area": "X", "kind": "task", "items": ["Fehlerheft final durchgehen"]},
  {"area": "X", "kind": "task", "items": ["Pause", "Zirkel, Lineal, Geodreieck einpacken", "Früh schlafen"]}
]

export const TOTAL_DAYS = ROWS.length

export const phaseOf = (day) => PHASES.find((p) => day >= p.days[0] && day <= p.days[1])

export const PLAN = ROWS.map((row, i) => ({
  ...row,
  index: i,
  day: i + 1,
  topic: row.items[0],
  details: row.items.slice(1),
  phase: phaseOf(i + 1),
}))

// Which plan day the calendar says you should be on (0-based, can be < 0 before the start)
export const scheduledIndex = (start = START) => {
  const [y, m, d] = start.split('-').map(Number)
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((today - new Date(y, m - 1, d)) / 864e5)
}
