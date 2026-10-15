// Zusatzfragen 2. Jahrgang, Teil 3 (Format: siehe zusatzfragen/index.js)
const EUR = { de: '€', en: '€', hu: '€' }

export default {
  'instrumente-marketings': [
    {
      type: 'text', level: 1,
      de: { q: 'Welche Phase folgt im Produktlebenszyklus auf die Reifephase?', a: ['Sättigung', 'Sättigungsphase'], e: 'Einführung → Wachstum → Reife → Sättigung → Rückgang (evtl. Relaunch).' },
      en: { q: 'Which phase follows the maturity phase in the product life cycle?', a: ['saturation', 'saturation phase'], e: 'Introduction → growth → maturity → saturation → decline (possibly a relaunch).' },
      hu: { q: 'Melyik szakasz követi az érettségi szakaszt a termékéletciklusban?', a: ['telítettség', 'telítődés', 'telítettségi szakasz'], e: 'Bevezetés → növekedés → érettség → telítettség → hanyatlás (esetleg újraindítás).' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie heißen im BCG-Portfolio Produkte mit hohem Marktanteil in einem kaum noch wachsenden Markt?', a: ['Cashcows', 'Cashcow', 'Cash Cows', 'Cash Cow', 'Melkkühe'], e: 'Cashcows bringen viel Geld bei wenig Investition – sie werden „gemolken“.' },
      en: { q: 'In the BCG portfolio, what are products with a high market share in a market that is hardly growing called?', a: ['cash cows', 'cash cow', 'cashcows'], e: 'Cash cows bring in a lot of money with little investment – they are "milked".' },
      hu: { q: 'Hogy hívják a BCG-portfólióban a magas piaci részesedésű termékeket egy alig növekvő piacon?', a: ['fejőstehenek', 'fejőstehén', 'cash cow'], e: 'A fejőstehenek kevés befektetéssel sok pénzt hoznak – „fejik” őket.' },
    },
    {
      type: 'number', level: 3, value: 25, tol: 0.01, unit: EUR,
      de: { q: 'Eine Anzeige kostet 4.500 € und erreicht 180.000 Leser:innen. Berechne den Tausenderkontaktpreis (TKP).', e: 'TKP = Kosten · 1.000 ÷ Reichweite = 4.500 · 1.000 ÷ 180.000 = 25 € pro 1.000 Kontakte.' },
      en: { q: 'An advert costs €4,500 and reaches 180,000 readers. Calculate the cost per thousand contacts (CPM).', e: 'CPM = cost · 1,000 ÷ reach = 4,500 · 1,000 ÷ 180,000 = €25 per 1,000 contacts.' },
      hu: { q: 'Egy hirdetés 4500 €-ba kerül, és 180 000 olvasót ér el. Számítsd ki az ezer kontaktusra jutó költséget (TKP).', e: 'TKP = költség · 1000 ÷ elérés = 4500 · 1000 ÷ 180 000 = 25 € 1000 kontaktusonként.' },
    },
  ],

  'material-warenwirtschaft': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man Waren, die ein Handelsbetrieb einkauft und unverändert weiterverkauft?', a: ['Handelswaren', 'Handelsware'], e: 'Handelswaren werden ohne Verarbeitung weiterverkauft – das ist Warenwirtschaft (im Gegensatz zur Materialwirtschaft der Produktion).' },
      en: { q: 'What do you call goods that a trading business buys and resells unchanged?', a: ['merchandise', 'goods for resale', 'trade goods'], e: 'Goods for resale are sold on without processing – this is merchandise management (as opposed to materials management in production).' },
      hu: { q: 'Hogyan nevezzük azokat az árukat, amelyeket egy kereskedelmi vállalat megvásárol és változatlanul továbbad?', a: ['kereskedelmi áru', 'kereskedelmi áruk'], e: 'A kereskedelmi árukat feldolgozás nélkül adják tovább – ez az árugazdálkodás (szemben a termelés anyaggazdálkodásával).' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie heißen Stoffe, die als Hauptbestandteil in ein Produkt eingehen (z. B. Kakao in Pralinen)?', a: ['Rohstoffe', 'Rohstoff'], e: 'Rohstoffe = Hauptbestandteil, Hilfsstoffe = Nebenbestandteil (z. B. Kleber), Betriebsstoffe gehen nicht ins Produkt ein (z. B. Strom).' },
      en: { q: 'What do you call materials that become the main component of a product (e.g. cocoa in chocolates)?', a: ['raw materials', 'raw material'], e: 'Raw materials = main component, auxiliary materials = minor component (e.g. glue), operating supplies do not become part of the product (e.g. electricity).' },
      hu: { q: 'Hogyan nevezzük azokat az anyagokat, amelyek a termék fő alkotórészévé válnak (pl. kakaó a bonbonban)?', a: ['nyersanyagok', 'nyersanyag', 'alapanyag', 'alapanyagok'], e: 'Nyersanyag = fő alkotórész, segédanyag = mellékes alkotórész (pl. ragasztó), az üzemanyagok nem kerülnek a termékbe (pl. áram).' },
    },
    {
      type: 'mc', level: 3, correctIndex: 2,
      de: { q: 'Der Strom für die Maschinen in Loopys Pralinenküche ist ein …', o: ['Rohstoff', 'Hilfsstoff', 'Betriebsstoff', 'Handelsware'], e: 'Betriebsstoffe werden bei der Produktion verbraucht, gehen aber nicht ins Produkt ein – z. B. Strom, Schmiermittel.' },
      en: { q: 'The electricity for the machines in Loopy\'s chocolate kitchen is …', o: ['a raw material', 'an auxiliary material', 'an operating supply', 'goods for resale'], e: 'Operating supplies are used up in production but do not become part of the product – e.g. electricity, lubricants.' },
      hu: { q: 'Az áram Loopy bonbonkonyhájának gépeihez …', o: ['nyersanyag', 'segédanyag', 'üzemanyag (üzemi anyag)', 'kereskedelmi áru'], e: 'Az üzemi anyagok a termelés során elhasználódnak, de nem kerülnek a termékbe – pl. áram, kenőanyag.' },
    },
  ],

  beschaffungsmarketing: [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt die Beschaffungsform, bei der Material genau dann geliefert wird, wenn es in der Produktion gebraucht wird? (englischer Begriff)', a: ['Just-in-time', 'Just in time', 'JIT'], e: 'Just-in-time spart Lagerkosten, braucht aber sehr zuverlässige Lieferanten.' },
      en: { q: 'What is the procurement method called where material is delivered exactly when production needs it?', a: ['just-in-time', 'just in time', 'JIT'], e: 'Just-in-time saves storage costs but needs very reliable suppliers.' },
      hu: { q: 'Hogy hívják azt a beszerzési formát, amelynél az anyagot pontosan akkor szállítják, amikor a termelésnek szüksége van rá?', a: ['just-in-time', 'just in time', 'JIT'], e: 'A just-in-time raktározási költséget takarít meg, de nagyon megbízható beszállítókat igényel.' },
    },
    {
      type: 'number', level: 2, value: 360, tol: 0, unit: { de: 'kg', en: 'kg', hu: 'kg' },
      de: { q: 'Loopy verbraucht täglich 40 kg Kakao. Die Beschaffungszeit beträgt 6 Tage, der Sicherheitsbestand 120 kg. Wie hoch ist der Meldebestand?', e: 'Meldebestand = Ø-Verbrauch · Beschaffungszeit + Sicherheitsbestand = 40 · 6 + 120 = 360 kg.' },
      en: { q: 'Loopy uses 40 kg of cocoa per day. The delivery time is 6 days and the safety stock 120 kg. What is the reorder level?', e: 'Reorder level = average usage · delivery time + safety stock = 40 · 6 + 120 = 360 kg.' },
      hu: { q: 'Loopy naponta 40 kg kakaót használ fel. A beszerzési idő 6 nap, a biztonsági készlet 120 kg. Mekkora a rendelési pont (jelzőkészlet)?', e: 'Rendelési pont = átlagos felhasználás · beszerzési idő + biztonsági készlet = 40 · 6 + 120 = 360 kg.' },
    },
    {
      type: 'number', level: 3, value: 1000, tol: 0.5, unit: { de: 'Stück', en: 'pcs', hu: 'db' },
      de: { q: 'Jahresbedarf 8.000 Stück, Bestellkosten 50 € pro Bestellung, Einstandspreis 4 € pro Stück, Lagerhaltungskostensatz 20 %. Berechne die optimale Bestellmenge.', e: 'Optimale Bestellmenge = √(200 · 8.000 · 50 ÷ (4 · 20)) = √(80.000.000 ÷ 80) = √1.000.000 = 1.000 Stück.' },
      en: { q: 'Annual demand 8,000 pieces, ordering costs €50 per order, purchase price €4 per piece, storage cost rate 20%. Calculate the optimal order quantity.', e: 'Optimal order quantity = √(200 · 8,000 · 50 ÷ (4 · 20)) = √(80,000,000 ÷ 80) = √1,000,000 = 1,000 pieces.' },
      hu: { q: 'Éves szükséglet 8000 darab, rendelési költség 50 € rendelésenként, beszerzési ár 4 € darabonként, raktározási költséghányad 20%. Számítsd ki az optimális rendelési mennyiséget.', e: 'Optimális rendelési mennyiség = √(200 · 8000 · 50 ÷ (4 · 20)) = √(80 000 000 ÷ 80) = √1 000 000 = 1000 darab.' },
    },
  ],

  'lager-transport-entsorgung': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man die Lagerhaltung, bei der Waren dort abgelegt werden, wo gerade Platz frei ist (z. B. bei Amazon)?', a: ['chaotische Lagerhaltung', 'chaotisches Lager', 'Freiplatzsystem', 'chaotische Lagerung'], e: 'Beim Freiplatzsystem (chaotische Lagerhaltung) wird der Platz optimal genutzt – man braucht aber eine EDV, die weiß, wo was liegt.' },
      en: { q: 'What is the kind of storage called where goods are put wherever space is free (e.g. at Amazon)?', a: ['chaotic storage', 'random storage', 'free location storage'], e: 'Chaotic storage uses space optimally – but you need IT that knows where everything is.' },
      hu: { q: 'Hogyan nevezzük azt a raktározást, amelynél az árut oda teszik, ahol éppen szabad hely van (pl. az Amazonnál)?', a: ['kaotikus raktározás', 'kaotikus raktár', 'szabad helyes rendszer'], e: 'A kaotikus raktározás optimálisan használja ki a helyet – de kell hozzá informatikai rendszer, amely tudja, mi hol van.' },
    },
    {
      type: 'number', level: 2, value: 16000, tol: 0, unit: EUR,
      de: { q: 'Der Lagerbestand betrug am 1. Jänner 14.000 € und am 31. Dezember 18.000 €. Wie hoch ist der durchschnittliche Lagerbestand?', e: 'Ø Lagerbestand = (Anfangsbestand + Endbestand) ÷ 2 = (14.000 + 18.000) ÷ 2 = 16.000 €.' },
      en: { q: 'Stock was €14,000 on 1 January and €18,000 on 31 December. What is the average stock?', e: 'Average stock = (opening stock + closing stock) ÷ 2 = (14,000 + 18,000) ÷ 2 = €16,000.' },
      hu: { q: 'A raktárkészlet január 1-jén 14 000 €, december 31-én 18 000 € volt. Mekkora az átlagos raktárkészlet?', e: 'Ø raktárkészlet = (nyitókészlet + zárókészlet) ÷ 2 = (14 000 + 18 000) ÷ 2 = 16 000 €.' },
    },
    {
      type: 'number', level: 3, value: 60.83, tol: 0.1, unit: { de: 'Tage', en: 'days', hu: 'nap' },
      de: { q: 'Wareneinsatz 96.000 €, Anfangsbestand 14.000 €, Endbestand 18.000 €. Berechne die durchschnittliche Lagerdauer in Tagen (Jahr = 365 Tage, auf 2 Kommastellen).', e: 'Ø Lager = 16.000 €. Umschlagshäufigkeit = 96.000 ÷ 16.000 = 6. Lagerdauer = 365 ÷ 6 = 60,83 Tage.' },
      en: { q: 'Cost of goods used €96,000, opening stock €14,000, closing stock €18,000. Calculate the average storage period in days (year = 365 days, 2 decimal places).', e: 'Average stock = €16,000. Turnover rate = 96,000 ÷ 16,000 = 6. Storage period = 365 ÷ 6 = 60.83 days.' },
      hu: { q: 'Áruráfordítás 96 000 €, nyitókészlet 14 000 €, zárókészlet 18 000 €. Számítsd ki az átlagos raktározási időt napokban (év = 365 nap, 2 tizedesjegyre).', e: 'Ø készlet = 16 000 €. Forgási sebesség = 96 000 ÷ 16 000 = 6. Raktározási idő = 365 ÷ 6 = 60,83 nap.' },
    },
  ],
}
