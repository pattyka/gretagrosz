// Zusatzfragen 3. Jahrgang, Teil 3 (Format: siehe zusatzfragen/index.js)

export default {
  'leistungserstellungsprozess-produktion': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt die Fertigungsart, bei der dasselbe Produkt in sehr großen Mengen ohne Unterbrechung hergestellt wird?', a: ['Massenfertigung', 'Massenproduktion'], e: 'Fertigungsarten: Einzelfertigung (ein Stück), Serienfertigung (begrenzte Mengen), Massenfertigung (sehr große Mengen).' },
      en: { q: 'What is the type of production called in which the same product is made in very large quantities without interruption?', a: ['mass production', 'mass manufacturing'], e: 'Types of production: one-off production (one unit), batch production (limited quantities), mass production (very large quantities).' },
      hu: { q: 'Hogy hívják azt a gyártási módot, amelynél ugyanazt a terméket nagyon nagy mennyiségben, megszakítás nélkül gyártják?', a: ['tömeggyártás'], e: 'Gyártási módok: egyedi gyártás (egy darab), sorozatgyártás (korlátozott mennyiség), tömeggyártás (nagyon nagy mennyiség).' },
    },
    {
      type: 'number', level: 2, value: 12, tol: 0, unit: { de: 'Stunden', en: 'hours', hu: 'óra' },
      de: { q: 'Ein Auftrag für Loopys Lutscher: 2 h Rüstzeit, 6 h Bearbeitungszeit, 3 h Liegezeit und 1 h Transportzeit. Wie lang ist die Durchlaufzeit?', e: 'Durchlaufzeit = Rüst- + Bearbeitungs- + Liege- + Transportzeit = 2 + 6 + 3 + 1 = 12 Stunden.' },
      en: { q: 'An order for Loopy\'s lollipops: 2 h set-up time, 6 h processing time, 3 h waiting time and 1 h transport time. How long is the lead time?', e: 'Lead time = set-up + processing + waiting + transport time = 2 + 6 + 3 + 1 = 12 hours.' },
      hu: { q: 'Egy megrendelés Loopy nyalókáira: 2 óra átállási idő, 6 óra megmunkálási idő, 3 óra várakozási idő és 1 óra szállítási idő. Mennyi az átfutási idő?', e: 'Átfutási idő = átállási + megmunkálási + várakozási + szállítási idő = 2 + 6 + 3 + 1 = 12 óra.' },
    },
    {
      type: 'number', level: 3, value: 2800, tol: 0, unit: { de: 'Lutscher', en: 'lollipops', hu: 'nyalóka' },
      de: { q: 'Eine Geschenkbox enthält 2 Tüten, jede Tüte enthält 5 Lutscher. Bestellt sind 400 Geschenkboxen, im Lager liegen 1.200 Lutscher. Wie hoch ist der Nettobedarf an Lutschern?', e: 'Bruttobedarf = 400 × 2 × 5 = 4.000 Lutscher (Erzeugnisstruktur: Box → Tüte → Lutscher). Nettobedarf = 4.000 − 1.200 Lagerbestand = 2.800 Lutscher.' },
      en: { q: 'A gift box contains 2 bags, each bag contains 5 lollipops. 400 gift boxes have been ordered and there are 1,200 lollipops in stock. What is the net requirement of lollipops?', e: 'Gross requirement = 400 × 2 × 5 = 4,000 lollipops (product structure: box → bag → lollipop). Net requirement = 4,000 − 1,200 in stock = 2,800 lollipops.' },
      hu: { q: 'Egy ajándékdobozban 2 zacskó van, minden zacskóban 5 nyalóka. 400 ajándékdobozt rendeltek, a raktárban 1200 nyalóka van. Mekkora a nettó nyalókaszükséglet?', e: 'Bruttó szükséglet = 400 × 2 × 5 = 4000 nyalóka (termékszerkezet: doboz → zacskó → nyalóka). Nettó szükséglet = 4000 − 1200 raktárkészlet = 2800 nyalóka.' },
    },
  ],

  'investition-finanzierung-ueberblick': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man die Fähigkeit eines Unternehmens, seine Rechnungen jederzeit pünktlich zu bezahlen?', a: ['Liquidität', 'Zahlungsfähigkeit', 'Liquiditaet'], e: 'Liquidität = Zahlungsfähigkeit. Fehlt sie, droht die Insolvenz – auch wenn das Unternehmen Gewinn macht.' },
      en: { q: 'What do you call a company\'s ability to pay its bills on time at all times?', a: ['liquidity', 'solvency'], e: 'Liquidity = ability to pay. Without it a company faces insolvency – even if it makes a profit.' },
      hu: { q: 'Hogyan nevezzük egy vállalat azon képességét, hogy számláit mindig időben ki tudja fizetni?', a: ['likviditás', 'fizetőképesség'], e: 'Likviditás = fizetőképesség. Ha hiányzik, csőd fenyeget – még akkor is, ha a vállalat nyereséges.' },
    },
    {
      type: 'mc', level: 2, correctIndex: 1,
      de: { q: 'Was zeigt die Aktivseite (Aktiva) der Bilanz?', o: ['Die Mittelherkunft, also die Finanzierung', 'Die Mittelverwendung, also die Investition', 'Nur das Eigenkapital', 'Die Erträge und Aufwände des Jahres'], e: 'Aktiva = Vermögen = Mittelverwendung (Investition). Passiva = Kapital = Mittelherkunft (Finanzierung).' },
      en: { q: 'What does the assets side of the balance sheet show?', o: ['The source of funds, i.e. financing', 'The use of funds, i.e. investment', 'Only the equity', 'The income and expenses of the year'], e: 'Assets = use of funds (investment). Liabilities and equity = source of funds (financing).' },
      hu: { q: 'Mit mutat a mérleg eszközoldala (aktívák)?', o: ['A források eredetét, vagyis a finanszírozást', 'A források felhasználását, vagyis a beruházást', 'Csak a saját tőkét', 'Az év bevételeit és ráfordításait'], e: 'Aktívák = vagyon = forrásfelhasználás (beruházás). Passzívák = tőke = forráseredet (finanszírozás).' },
    },
    {
      type: 'number', level: 3, value: 350000, tol: 0, unit: { de: '€', en: '€', hu: '€' },
      de: { q: 'Loopys Bilanz: Anlagevermögen 300.000 €, Umlaufvermögen 200.000 €, Eigenkapital 150.000 €. Wie hoch ist das Fremdkapital?', e: 'Aktiva = Passiva: 300.000 + 200.000 = 500.000 €. Fremdkapital = 500.000 − 150.000 = 350.000 €.' },
      en: { q: 'Loopy\'s balance sheet: fixed assets €300,000, current assets €200,000, equity €150,000. How much is the debt capital?', e: 'Assets = liabilities and equity: 300,000 + 200,000 = €500,000. Debt capital = 500,000 − 150,000 = €350,000.' },
      hu: { q: 'Loopy mérlege: befektetett eszközök 300 000 €, forgóeszközök 200 000 €, saját tőke 150 000 €. Mennyi az idegen tőke?', e: 'Aktívák = passzívák: 300 000 + 200 000 = 500 000 €. Idegen tőke = 500 000 − 150 000 = 350 000 €.' },
    },
  ],

  'investitionsmanagement': [
    {
      type: 'text', level: 1,
      de: { q: 'Loopy ersetzt eine kaputte Bonbonmaschine durch eine gleichwertige neue. Welche Investitionsart ist das?', a: ['Ersatzinvestition', 'Ersatz-Investition', 'Ersatz'], e: 'Investitionsanlässe: Neu-, Ersatz-, Rationalisierungs- und Erweiterungsinvestition.' },
      en: { q: 'Loopy replaces a broken sweet machine with an equivalent new one. What type of investment is this?', a: ['replacement investment', 'replacement'], e: 'Reasons for investment: new, replacement, rationalisation and expansion investment.' },
      hu: { q: 'Loopy egy elromlott cukorkagépet egy azonos értékű újra cserél. Milyen beruházásfajta ez?', a: ['pótló beruházás', 'pótlóberuházás', 'pótlás'], e: 'Beruházási okok: új, pótló, racionalizálási és bővítő beruházás.' },
    },
    {
      type: 'number', level: 2, value: 9000, tol: 0, unit: { de: '€ pro Jahr', en: '€ per year', hu: '€ évente' },
      de: { q: 'Eine Maschine kostet 50.000 €, hat einen Restwert von 5.000 € und eine Nutzungsdauer von 5 Jahren. Wie hoch ist die kalkulatorische Abschreibung pro Jahr?', e: 'Kalk. AfA = (AK − RW) ÷ Nutzungsdauer = (50.000 − 5.000) ÷ 5 = 9.000 € pro Jahr.' },
      en: { q: 'A machine costs €50,000, has a residual value of €5,000 and a useful life of 5 years. What is the imputed depreciation per year?', e: 'Imputed depreciation = (cost − residual value) ÷ useful life = (50,000 − 5,000) ÷ 5 = €9,000 per year.' },
      hu: { q: 'Egy gép ára 50 000 €, maradványértéke 5000 €, hasznos élettartama 5 év. Mennyi az évi kalkulatív értékcsökkenés?', e: 'Kalk. értékcsökkenés = (beszerzési ár − maradványérték) ÷ élettartam = (50 000 − 5000) ÷ 5 = 9000 € évente.' },
    },
    {
      type: 'number', level: 3, value: 20, tol: 0.05, unit: { de: '%', en: '%', hu: '%' },
      de: { q: 'Eine neue Schokoladenanlage kostet 90.000 €, Restwert 10.000 €, kalkulatorischer Zinssatz 6 %. Sie bringt 7.000 € Gewinn pro Jahr. Wie hoch ist die Rentabilität in %?', e: 'Ø Kapitaleinsatz = (90.000 + 10.000) ÷ 2 = 50.000 €. Kalk. Zinsen = 50.000 × 6 % = 3.000 €. Rentabilität = (7.000 + 3.000) × 100 ÷ 50.000 = 20 %.' },
      en: { q: 'A new chocolate plant costs €90,000, residual value €10,000, imputed interest rate 6%. It earns a profit of €7,000 per year. What is the return on investment in %?', e: 'Average capital employed = (90,000 + 10,000) ÷ 2 = €50,000. Imputed interest = 50,000 × 6% = €3,000. Return = (7,000 + 3,000) × 100 ÷ 50,000 = 20%.' },
      hu: { q: 'Egy új csokoládégyártó berendezés ára 90 000 €, maradványértéke 10 000 €, a kalkulatív kamatláb 6%. Évi 7000 € nyereséget hoz. Mekkora a jövedelmezőség %-ban?', e: 'Átlagos tőkelekötés = (90 000 + 10 000) ÷ 2 = 50 000 €. Kalk. kamat = 50 000 × 6% = 3000 €. Jövedelmezőség = (7000 + 3000) × 100 ÷ 50 000 = 20%.' },
    },
  ],
}
