// Zusatzfragen 1. Jahrgang, Teil 2 (Format: siehe zusatzfragen/index.js)
const EUR = { de: '€', en: '€', hu: '€' }

export default {
  'bestandteile-kaufvertrag': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man die Vereinbarung darüber, wer Kosten und Risiko des Transports trägt (z. B. „ab Werk“, „frei Haus“)?', a: ['Lieferbedingung', 'Lieferbedingungen', 'Lieferklausel'], e: 'Lieferbedingungen regeln, wer Transportkosten und -risiko trägt – z. B. „ab Werk“ (Käufer) oder „frei Haus“ (Verkäufer).' },
      en: { q: 'What do you call the agreement on who bears the cost and risk of transport (e.g. "ex works", "free domicile")?', a: ['delivery terms', 'terms of delivery', 'delivery conditions'], e: 'Delivery terms regulate who bears transport costs and risk – e.g. "ex works" (buyer) or "free domicile" (seller).' },
      hu: { q: 'Hogyan nevezzük azt a megállapodást, amely rögzíti, ki viseli a szállítás költségét és kockázatát (pl. „gyárból”, „házhoz szállítva”)?', a: ['szállítási feltételek', 'szállítási feltétel', 'szállítási záradék'], e: 'A szállítási feltételek szabályozzák, ki viseli a szállítás költségét és kockázatát.' },
    },
    {
      type: 'number', level: 2, value: 2352, tol: 0.01, unit: EUR,
      de: { q: 'Eine Rechnung über 2.400 € gewährt 2 % Skonto bei Zahlung innerhalb von 10 Tagen. Wie viel zahlt Loopy, wenn sie das Skonto nutzt?', e: 'Skonto = 2.400 · 2 % = 48 €. Zahlbetrag = 2.400 − 48 = 2.352 €.' },
      en: { q: 'An invoice of €2,400 offers a 2% cash discount for payment within 10 days. How much does Loopy pay if she uses the discount?', e: 'Discount = 2,400 · 2% = €48. Amount to pay = 2,400 − 48 = €2,352.' },
      hu: { q: 'Egy 2400 €-s számla 10 napon belüli fizetés esetén 2% skontót ad. Mennyit fizet Loopy, ha él a skontóval?', e: 'Skontó = 2400 · 2% = 48 €. Fizetendő = 2400 − 48 = 2352 €.' },
    },
    {
      type: 'number', level: 3, value: 4365, tol: 0.01, unit: EUR,
      de: { q: 'Der Listenpreis beträgt 5.000 €. Loopy erhält 10 % Mengenrabatt und zahlt danach innerhalb der Skontofrist mit 3 % Skonto. Wie hoch ist der Zahlbetrag?', e: 'Zuerst Rabatt: 5.000 − 10 % = 4.500 €. Dann Skonto vom verbilligten Preis: 4.500 − 3 % (135 €) = 4.365 €.' },
      en: { q: 'The list price is €5,000. Loopy gets a 10% quantity discount and then pays within the discount period with a 3% cash discount. How much does she pay?', e: 'First the quantity discount: 5,000 − 10% = €4,500. Then the cash discount on the reduced price: 4,500 − 3% (€135) = €4,365.' },
      hu: { q: 'A listaár 5000 €. Loopy 10% mennyiségi engedményt kap, majd a skontóhatáridőn belül 3% skontóval fizet. Mennyi a fizetendő összeg?', e: 'Először az engedmény: 5000 − 10% = 4500 €. Aztán a skontó a csökkentett árból: 4500 − 3% (135 €) = 4365 €.' },
    },
  ],

  'schriftverkehr-kaufvertrag': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt das Schreiben, mit dem ein Verkäufer eine Bestellung schriftlich annimmt?', a: ['Auftragsbestätigung', 'Bestellbestätigung'], e: 'Mit der Auftragsbestätigung bestätigt der Verkäufer die Bestellung schriftlich.' },
      en: { q: 'What is the letter called with which a seller accepts an order in writing?', a: ['order confirmation', 'confirmation of order', 'acknowledgement of order'], e: 'With the order confirmation the seller confirms the order in writing.' },
      hu: { q: 'Hogyan nevezzük azt a levelet, amellyel az eladó írásban elfogadja a rendelést?', a: ['rendelésvisszaigazolás', 'megrendelés-visszaigazolás', 'rendelés visszaigazolás'], e: 'A rendelésvisszaigazolással az eladó írásban megerősíti a rendelést.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Ein Lieferant bietet Kakao um 8 €/kg an. Loopy bestellt – aber zu 7 €/kg. Wie nennt man ihre Bestellung rechtlich?', a: ['neues Angebot', 'Gegenangebot'], e: 'Eine Bestellung mit geänderten Bedingungen ist keine Annahme, sondern ein neues Angebot (Gegenangebot). Erst wenn der Lieferant zustimmt, gibt es einen Vertrag.' },
      en: { q: 'A supplier offers cocoa at €8/kg. Loopy orders – but at €7/kg. What is her order legally?', a: ['counter-offer', 'counter offer', 'new offer'], e: 'An order with changed conditions is not an acceptance but a new offer (counter-offer). Only if the supplier agrees is there a contract.' },
      hu: { q: 'Egy beszállító 8 €/kg áron kínál kakaót. Loopy rendel – de 7 €/kg áron. Jogilag minek számít a rendelése?', a: ['ellenajánlat', 'új ajánlat'], e: 'A megváltoztatott feltételekkel leadott rendelés nem elfogadás, hanem új ajánlat (ellenajánlat). Csak ha a beszállító elfogadja, jön létre szerződés.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 1,
      de: { q: 'Ein Lieferant schickt Loopy per Brief ein Angebot ohne Annahmefrist. Wie lange ist er daran gebunden?', o: ['Nur bis zum Ende des Tages, an dem der Brief ankommt', 'So lange, wie er unter normalen Umständen mit einer Antwort rechnen kann', 'Genau 14 Tage', 'Unbegrenzt, bis er das Angebot widerruft'], e: 'Unter Abwesenden gilt ein Angebot ohne Frist so lange, wie der Anbieter unter normalen Umständen (Postweg, Überlegungszeit) mit einer Antwort rechnen darf.' },
      en: { q: 'A supplier sends Loopy an offer by letter without a deadline for acceptance. How long is he bound by it?', o: ['Only until the end of the day the letter arrives', 'As long as he can normally expect an answer', 'Exactly 14 days', 'Indefinitely, until he withdraws the offer'], e: 'Between absent parties an offer without a deadline is binding for as long as the offeror can normally expect an answer (postal time, time to think).' },
      hu: { q: 'Egy beszállító levélben, elfogadási határidő nélkül küld ajánlatot Loopynak. Meddig kötik őt az ajánlata?', o: ['Csak annak a napnak a végéig, amikor a levél megérkezik', 'Addig, ameddig normális körülmények között választ várhat', 'Pontosan 14 napig', 'Korlátlanul, amíg vissza nem vonja'], e: 'Távollévők között a határidő nélküli ajánlat addig köt, ameddig az ajánlattevő normális körülmények között (postai út, gondolkodási idő) választ várhat.' },
    },
  ],

  'zahlungsformen-1jg': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man die Zahlung, bei der Geld von einem Bankkonto auf ein anderes übertragen wird?', a: ['Überweisung', 'Banküberweisung'], e: 'Bei der Überweisung wird Geld unbar von Konto zu Konto übertragen.' },
      en: { q: 'What do you call a payment where money is moved from one bank account to another?', a: ['bank transfer', 'transfer', 'credit transfer'], e: 'In a bank transfer money is moved cashless from account to account.' },
      hu: { q: 'Hogyan nevezzük azt a fizetést, amelynél a pénz egyik bankszámláról a másikra kerül?', a: ['átutalás', 'banki átutalás'], e: 'Átutalásnál a pénz készpénz nélkül kerül számláról számlára.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie heißt die internationale Kontonummer, die man für Überweisungen im SEPA-Raum braucht? (Abkürzung)', a: ['IBAN'], e: 'Die IBAN (International Bank Account Number) identifiziert ein Konto eindeutig – in Österreich beginnt sie mit AT.' },
      en: { q: 'What is the international account number called that you need for transfers in the SEPA area? (Abbreviation)', a: ['IBAN'], e: 'The IBAN (International Bank Account Number) uniquely identifies an account – in Austria it starts with AT.' },
      hu: { q: 'Hogy hívják azt a nemzetközi számlaszámot, amely a SEPA-térségben az átutalásokhoz kell? (Rövidítés)', a: ['IBAN'], e: 'Az IBAN (nemzetközi bankszámlaszám) egyértelműen azonosít egy számlát – Ausztriában AT-vel kezdődik.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 1,
      de: { q: 'Loopy erlaubt ihrem Energieversorger, jeden Monat einen unterschiedlich hohen Betrag von ihrem Konto abzubuchen. Welche Zahlungsform ist das?', o: ['Dauerauftrag', 'SEPA-Lastschrift (Einzugsermächtigung)', 'Überweisung', 'Nachnahme'], e: 'Bei der Lastschrift holt sich der Zahlungsempfänger den (auch wechselnden) Betrag. Ein Dauerauftrag überweist dagegen regelmäßig einen gleichbleibenden Betrag.' },
      en: { q: 'Loopy allows her energy supplier to debit a different amount from her account every month. Which form of payment is this?', o: ['Standing order', 'SEPA direct debit', 'Bank transfer', 'Cash on delivery'], e: 'With a direct debit the payee collects the (even changing) amount. A standing order, on the other hand, regularly transfers a fixed amount.' },
      hu: { q: 'Loopy megengedi az energiaszolgáltatójának, hogy havonta eltérő összeget terheljen a számlájára. Milyen fizetési forma ez?', o: ['Állandó átutalási megbízás', 'SEPA beszedési megbízás', 'Átutalás', 'Utánvét'], e: 'Beszedési megbízásnál a kedvezményezett szedi be a (változó) összeget. Az állandó átutalás viszont rendszeresen azonos összeget utal.' },
    },
  ],

  'unzuverlaessige-verkaeufer': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man es, wenn der Verkäufer nicht zum vereinbarten Termin liefert?', a: ['Lieferverzug', 'Lieferungsverzug', 'Verzug'], e: 'Liefert der Verkäufer nicht rechtzeitig, ist er im Lieferverzug.' },
      en: { q: 'What do you call it when the seller does not deliver on the agreed date?', a: ['late delivery', 'delay in delivery', 'delivery delay', 'default in delivery'], e: 'If the seller does not deliver on time, there is a delay in delivery (late delivery).' },
      hu: { q: 'Hogyan nevezzük, ha az eladó nem a megbeszélt időpontban szállít?', a: ['szállítási késedelem', 'késedelem', 'késedelmes szállítás'], e: 'Ha az eladó nem szállít időben, szállítási késedelembe esik.' },
    },
    {
      type: 'number', level: 2, value: 2, tol: 0, unit: { de: 'Jahre', en: 'years', hu: 'év' },
      de: { q: 'Wie lange dauert in Österreich die gesetzliche Gewährleistungsfrist für bewegliche Sachen?', e: 'Für bewegliche Sachen gilt eine Gewährleistungsfrist von 2 Jahren ab Übergabe (für unbewegliche Sachen 3 Jahre).' },
      en: { q: 'How long is the legal warranty period for movable goods in Austria?', e: 'For movable goods the warranty period is 2 years from handover (3 years for immovable property).' },
      hu: { q: 'Mennyi ideig tart Ausztriában a törvényes szavatossági idő ingó dolgoknál?', e: 'Ingó dolgoknál a szavatossági idő az átadástól számított 2 év (ingatlanoknál 3 év).' },
    },
    {
      type: 'mc', level: 3, correctIndex: 1,
      de: { q: 'Ein Kunde reklamiert einen kaputten Mixer, der noch in der Gewährleistungsfrist ist. Was kann er grundsätzlich ZUERST verlangen?', o: ['Preisminderung oder Wandlung (Vertragsauflösung)', 'Verbesserung (Reparatur) oder Austausch', 'Sofort Schadenersatz in Geld', 'Nur einen Gutschein'], e: 'Zuerst gelten die primären Rechtsbehelfe Verbesserung oder Austausch. Erst wenn das nicht möglich ist oder scheitert: Preisminderung oder Wandlung.' },
      en: { q: 'A customer complains about a broken mixer that is still under warranty. What can he basically demand FIRST?', o: ['Price reduction or cancellation of the contract', 'Repair or replacement', 'Immediate damages in money', 'Only a voucher'], e: 'First the primary remedies apply: repair or replacement. Only if that is impossible or fails: price reduction or cancellation of the contract.' },
      hu: { q: 'Egy vevő reklamál egy elromlott mixer miatt, amely még szavatossági időn belül van. Mit követelhet alapvetően ELŐSZÖR?', o: ['Árleszállítást vagy elállást (a szerződés felbontását)', 'Kijavítást vagy kicserélést', 'Azonnali kártérítést pénzben', 'Csak utalványt'], e: 'Először az elsődleges szavatossági jogok érvényesek: kijavítás vagy kicserélés. Csak ha ez nem lehetséges vagy nem sikerül: árleszállítás vagy elállás.' },
    },
  ],

  'unzuverlaessige-kaeufer': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man eine schriftliche Zahlungserinnerung an einen Kunden, der nicht pünktlich zahlt?', a: ['Mahnung', 'Zahlungserinnerung'], e: 'Mit einer Mahnung wird der Kunde an die offene Zahlung erinnert.' },
      en: { q: 'What do you call a written payment reminder to a customer who does not pay on time?', a: ['reminder', 'payment reminder', 'dunning letter'], e: 'With a reminder the customer is reminded of the open payment.' },
      hu: { q: 'Hogyan nevezzük az írásos fizetési emlékeztetőt egy olyan vevőnek, aki nem fizet időben?', a: ['fizetési felszólítás', 'felszólítás', 'fizetési emlékeztető'], e: 'Fizetési felszólítással emlékeztetik a vevőt a nyitott tartozásra.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie heißt der Verzug, wenn der Käufer die ordnungsgemäß gelieferte Ware nicht annimmt?', a: ['Annahmeverzug'], e: 'Nimmt der Käufer die richtige Ware zum richtigen Zeitpunkt nicht an, ist er im Annahmeverzug.' },
      en: { q: 'What is the default called when the buyer does not accept goods that were delivered properly?', a: ['default of acceptance', 'acceptance default', 'delay in acceptance', 'default in acceptance'], e: 'If the buyer does not accept the right goods at the right time, there is a default of acceptance.' },
      hu: { q: 'Hogyan nevezzük a késedelmet, ha a vevő nem veszi át a szabályosan leszállított árut?', a: ['átvételi késedelem'], e: 'Ha a vevő nem veszi át a megfelelő árut a megfelelő időben, átvételi késedelembe esik.' },
    },
    {
      type: 'number', level: 3, value: 184, tol: 0.5, unit: EUR,
      de: { q: 'Ein Unternehmer zahlt Loopy eine Rechnung über 10.000 € um 73 Tage zu spät. Berechne die Verzugszinsen bei 9,2 % p. a. (Zinstage ÷ 365).', e: 'Zinsen = Kapital · Zinssatz · Tage ÷ 365 = 10.000 · 0,092 · 73 ÷ 365 = 184 €.' },
      en: { q: 'A business pays Loopy an invoice of €10,000 73 days late. Calculate the default interest at 9.2% p.a. (interest days ÷ 365).', e: 'Interest = capital · rate · days ÷ 365 = 10,000 · 0.092 · 73 ÷ 365 = €184.' },
      hu: { q: 'Egy vállalkozó 73 nap késéssel fizet ki Loopynak egy 10 000 €-s számlát. Számítsd ki a késedelmi kamatot évi 9,2%-kal (kamatnapok ÷ 365).', e: 'Kamat = tőke · kamatláb · napok ÷ 365 = 10 000 · 0,092 · 73 ÷ 365 = 184 €.' },
    },
  ],

  rechtsdurchsetzung: [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt das vereinfachte gerichtliche Verfahren, mit dem Geldforderungen in Österreich eingetrieben werden?', a: ['Mahnverfahren', 'gerichtliches Mahnverfahren'], e: 'Im Mahnverfahren erlässt das Gericht einen Zahlungsbefehl, ohne zuerst zu verhandeln.' },
      en: { q: 'What is the simplified court procedure called that is used to collect money claims in Austria?', a: ['payment order procedure', 'summary payment procedure', 'dunning procedure', 'order for payment procedure'], e: 'In this procedure the court issues a payment order without a hearing first.' },
      hu: { q: 'Hogy hívják azt az egyszerűsített bírósági eljárást, amellyel Ausztriában pénzköveteléseket hajtanak be?', a: ['fizetési meghagyásos eljárás', 'fizetési meghagyás'], e: 'A fizetési meghagyásos eljárásban a bíróság tárgyalás nélkül bocsát ki fizetési meghagyást.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie nennt man die zwangsweise Durchsetzung eines Anspruchs durch das Gericht, z. B. durch Pfändung?', a: ['Exekution', 'Zwangsvollstreckung', 'Exekutionsverfahren'], e: 'Zahlt der Schuldner trotz Urteil oder Zahlungsbefehl nicht, kann Exekution (Zwangsvollstreckung) beantragt werden.' },
      en: { q: 'What do you call the compulsory enforcement of a claim by the court, e.g. by seizing property?', a: ['enforcement', 'execution', 'compulsory enforcement'], e: 'If the debtor does not pay despite a judgment or payment order, enforcement can be applied for.' },
      hu: { q: 'Hogyan nevezzük egy követelés bíróság általi kényszerű érvényesítését, pl. lefoglalással?', a: ['végrehajtás', 'bírósági végrehajtás'], e: 'Ha az adós ítélet vagy fizetési meghagyás ellenére sem fizet, végrehajtást lehet kérni.' },
    },
    {
      type: 'number', level: 3, value: 4, tol: 0, unit: { de: 'Wochen', en: 'weeks', hu: 'hét' },
      de: { q: 'Innerhalb wie vieler Wochen kann man in Österreich Einspruch gegen einen Zahlungsbefehl erheben?', e: 'Gegen den Zahlungsbefehl kann innerhalb von 4 Wochen Einspruch erhoben werden – sonst wird er rechtskräftig und vollstreckbar.' },
      en: { q: 'Within how many weeks can you object to a payment order in Austria?', e: 'An objection to the payment order can be raised within 4 weeks – otherwise it becomes final and enforceable.' },
      hu: { q: 'Hány héten belül lehet Ausztriában ellentmondással élni egy fizetési meghagyás ellen?', e: 'A fizetési meghagyás ellen 4 héten belül lehet ellentmondással élni – különben jogerőssé és végrehajthatóvá válik.' },
    },
  ],

  'unternehmensgruendung-schritte': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man die Berechtigung, ein Gewerbe auszuüben, die man durch die Gewerbeanmeldung erhält?', a: ['Gewerbeberechtigung', 'Gewerbeschein'], e: 'Mit der Gewerbeanmeldung erhält man die Gewerbeberechtigung (früher „Gewerbeschein“).' },
      en: { q: 'What do you call the right to run a trade that you get by registering the trade?', a: ['trade licence', 'trade license', 'business licence', 'business license'], e: 'By registering the trade you receive the trade licence.' },
      hu: { q: 'Hogyan nevezzük az ipar gyakorlására szóló jogosultságot, amelyet az iparbejelentéssel kapunk?', a: ['iparjogosultság', 'ipari jogosultság', 'iparengedély'], e: 'Az iparbejelentéssel megkapjuk az iparjogosultságot.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'In welcher Interessenvertretung sind alle Gewerbetreibenden in Österreich automatisch Mitglied? (Abkürzung reicht)', a: ['WKO', 'Wirtschaftskammer', 'Wirtschaftskammer Österreich'], e: 'Mit der Gewerbeberechtigung wird man automatisch Mitglied der Wirtschaftskammer (WKO).' },
      en: { q: 'Which representative body are all traders in Austria automatically members of? (Abbreviation is enough)', a: ['WKO', 'Chamber of Commerce', 'Austrian Economic Chambers', 'Austrian Chamber of Commerce'], e: 'With the trade licence you automatically become a member of the Chamber of Commerce (WKO).' },
      hu: { q: 'Melyik érdekképviseletnek tagja automatikusan minden iparűző Ausztriában? (A rövidítés is elég)', a: ['WKO', 'gazdasági kamara', 'osztrák gazdasági kamara'], e: 'Az iparjogosultsággal automatikusan a gazdasági kamara (WKO) tagja leszel.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 1,
      de: { q: 'Loopy will als Konditorin selbst Torten herstellen und verkaufen. Welche Art von Gewerbe ist das und was braucht sie dafür?', o: ['Freies Gewerbe – nur die Anmeldung', 'Reglementiertes Gewerbe – einen Befähigungsnachweis', 'Freies Gewerbe – eine Konzession', 'Gar kein Gewerbe – nur eine Steuernummer'], e: 'Konditor ist ein reglementiertes Gewerbe (Handwerk). Man muss die Befähigung nachweisen, z. B. durch Meisterprüfung oder einschlägige Ausbildung und Praxis.' },
      en: { q: 'Loopy wants to make and sell cakes herself as a confectioner. What kind of trade is this and what does she need?', o: ['Free trade – only registration', 'Regulated trade – proof of qualification', 'Free trade – a concession', 'No trade at all – only a tax number'], e: 'Confectioner is a regulated trade (craft). You have to prove your qualification, e.g. with a master craftsman\'s examination or relevant training and experience.' },
      hu: { q: 'Loopy cukrászként maga szeretne tortákat készíteni és eladni. Milyen iparról van szó, és mire van szüksége?', o: ['Szabad ipar – csak bejelentés', 'Szabályozott ipar – képesítés igazolása', 'Szabad ipar – koncesszió', 'Egyáltalán nem ipar – csak adószám'], e: 'A cukrász szabályozott ipar (kézműipar). Igazolni kell a képesítést, pl. mestervizsgával vagy szakirányú képzéssel és gyakorlattal.' },
    },
  ],

  'wahl-der-rechtsform-1jg': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt die Rechtsform, bei der eine einzelne Person das Unternehmen allein führt und mit ihrem gesamten Vermögen haftet?', a: ['Einzelunternehmen', 'Einzelunternehmer', 'Einzelunternehmung'], e: 'Beim Einzelunternehmen führt eine Person das Unternehmen allein und haftet unbeschränkt mit ihrem Privatvermögen.' },
      en: { q: 'What is the legal form called where a single person runs the business alone and is liable with all their assets?', a: ['sole proprietorship', 'sole trader', 'sole proprietor'], e: 'In a sole proprietorship one person runs the business alone and is liable without limit with their private assets.' },
      hu: { q: 'Hogy hívják azt a jogi formát, amelyben egyetlen személy egyedül vezeti a vállalkozást, és teljes vagyonával felel?', a: ['egyéni vállalkozás', 'egyéni vállalkozó', 'egyéni cég'], e: 'Egyéni vállalkozásnál egy személy egyedül vezeti a vállalkozást, és korlátlanul felel a magánvagyonával.' },
    },
    {
      type: 'number', level: 2, value: 2, tol: 0, unit: { de: 'Personen', en: 'persons', hu: 'fő' },
      de: { q: 'Wie viele Gesellschafter braucht man mindestens, um eine OG (offene Gesellschaft) zu gründen?', e: 'Eine OG braucht mindestens 2 Gesellschafter, die alle unbeschränkt haften.' },
      en: { q: 'What is the minimum number of partners needed to found an OG (general partnership)?', e: 'An OG needs at least 2 partners, all of whom are liable without limit.' },
      hu: { q: 'Legalább hány tag kell egy OG (közkereseti társaság) alapításához?', e: 'Egy OG-hez legalább 2 tag kell, akik mind korlátlanul felelnek.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 1,
      de: { q: 'Bei welcher Rechtsform gibt es mindestens einen unbeschränkt haftenden (Komplementär) und mindestens einen beschränkt haftenden Gesellschafter (Kommanditist)?', o: ['OG', 'KG', 'GmbH', 'Einzelunternehmen'], e: 'Die KG hat zwei Arten von Gesellschaftern: Komplementäre haften unbeschränkt, Kommanditisten nur bis zur Höhe ihrer Einlage.' },
      en: { q: 'Which legal form has at least one partner with unlimited liability (general partner) and at least one with limited liability (limited partner)?', o: ['OG', 'KG', 'GmbH', 'Sole proprietorship'], e: 'A KG has two kinds of partners: general partners are liable without limit, limited partners only up to their contribution.' },
      hu: { q: 'Melyik jogi formában van legalább egy korlátlanul felelős (beltag) és legalább egy korlátozottan felelős (kültag) tag?', o: ['OG', 'KG', 'GmbH', 'Egyéni vállalkozás'], e: 'A KG-ban kétféle tag van: a beltagok korlátlanul, a kültagok csak a betétjük erejéig felelnek.' },
    },
  ],

  'businessplan-1jg': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt die kurze Zusammenfassung ganz am Anfang eines Businessplans? (englischer Begriff)', a: ['Executive Summary'], e: 'Die Executive Summary fasst den ganzen Businessplan auf 1–2 Seiten zusammen – sie wird oft als Erstes gelesen.' },
      en: { q: 'What is the short summary at the very beginning of a business plan called?', a: ['executive summary'], e: 'The executive summary summarises the whole business plan on 1–2 pages – it is often read first.' },
      hu: { q: 'Hogy hívják az üzleti terv legelején álló rövid összefoglalót?', a: ['vezetői összefoglaló', 'executive summary'], e: 'A vezetői összefoglaló 1–2 oldalon foglalja össze az egész üzleti tervet – gyakran ezt olvassák el először.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie nennt man das Alleinstellungsmerkmal eines Produkts, das es von der Konkurrenz abhebt? (Abkürzung)', a: ['USP', 'Unique Selling Proposition', 'Alleinstellungsmerkmal'], e: 'Die USP (Unique Selling Proposition) ist das, was das Angebot einzigartig macht.' },
      en: { q: 'What do you call the unique feature of a product that sets it apart from the competition? (Abbreviation)', a: ['USP', 'unique selling proposition', 'unique selling point'], e: 'The USP (unique selling proposition) is what makes the offer unique.' },
      hu: { q: 'Hogyan nevezzük egy termék egyedi jellemzőjét, amely kiemeli a versenytársak közül? (Rövidítés)', a: ['USP', 'egyedi értékesítési ajánlat'], e: 'Az USP (egyedi értékesítési ajánlat) az, ami egyedivé teszi az ajánlatot.' },
    },
    {
      type: 'number', level: 3, value: 2500, tol: 0, unit: { de: 'Stück', en: 'pcs', hu: 'db' },
      de: { q: 'Loopy hat 6.000 € Fixkosten pro Monat. Eine Packung Pralinen kostet 4 €, die variablen Kosten betragen 1,60 € pro Packung. Ab wie vielen Packungen pro Monat macht sie keinen Verlust mehr (Break-even)?', e: 'Deckungsbeitrag pro Packung = 4,00 − 1,60 = 2,40 €. Break-even-Menge = 6.000 ÷ 2,40 = 2.500 Packungen.' },
      en: { q: 'Loopy has €6,000 fixed costs per month. A box of chocolates costs €4 and variable costs are €1.60 per box. From how many boxes per month does she stop making a loss (break-even)?', e: 'Contribution margin per box = 4.00 − 1.60 = €2.40. Break-even quantity = 6,000 ÷ 2.40 = 2,500 boxes.' },
      hu: { q: 'Loopy fix költsége havi 6000 €. Egy doboz bonbon 4 €, a változó költség dobozonként 1,60 €. Havi hány doboztól nem termel már veszteséget (fedezeti pont)?', e: 'Fedezeti hozzájárulás dobozonként = 4,00 − 1,60 = 2,40 €. Fedezeti mennyiség = 6000 ÷ 2,40 = 2500 doboz.' },
    },
  ],

  'vertraege-mitarbeiter': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man den Vertrag, in dem Arbeitgeber und Arbeitnehmer:in das Arbeitsverhältnis vereinbaren?', a: ['Arbeitsvertrag', 'Dienstvertrag'], e: 'Im Arbeitsvertrag (Dienstvertrag) werden u. a. Tätigkeit, Arbeitszeit und Entgelt vereinbart.' },
      en: { q: 'What is the contract called in which employer and employee agree on the employment relationship?', a: ['employment contract', 'contract of employment', 'work contract'], e: 'In the employment contract things like the job, working hours and pay are agreed.' },
      hu: { q: 'Hogyan nevezzük azt a szerződést, amelyben a munkáltató és a munkavállaló megállapodik a munkaviszonyról?', a: ['munkaszerződés'], e: 'A munkaszerződésben többek között a tevékenységet, a munkaidőt és a bért rögzítik.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie heißt der Vertrag, den die Sozialpartner für eine ganze Branche abschließen (z. B. mit Mindestlöhnen)?', a: ['Kollektivvertrag', 'KV'], e: 'Der Kollektivvertrag gilt für eine ganze Branche und regelt z. B. Mindestlöhne, Sonderzahlungen und Arbeitszeit.' },
      en: { q: 'What is the contract called that the social partners conclude for a whole industry (e.g. with minimum wages)?', a: ['collective agreement', 'collective bargaining agreement'], e: 'The collective agreement applies to a whole industry and regulates e.g. minimum wages, special payments and working hours.' },
      hu: { q: 'Hogy hívják azt a szerződést, amelyet a szociális partnerek egy egész ágazatra kötnek (pl. minimálbérekkel)?', a: ['kollektív szerződés'], e: 'A kollektív szerződés egy egész ágazatra érvényes, és szabályozza pl. a minimálbéreket, a különjuttatásokat és a munkaidőt.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 2,
      de: { q: 'Ein Grafiker soll für Loopy bis 1. Mai ein fertiges Logo liefern. Er arbeitet selbstständig, mit eigenen Mitteln und schuldet ein bestimmtes Ergebnis. Welcher Vertrag liegt vor?', o: ['Dienstvertrag', 'Freier Dienstvertrag', 'Werkvertrag', 'Lehrvertrag'], e: 'Beim Werkvertrag schuldet man ein bestimmtes Ergebnis (das Werk). Beim (freien) Dienstvertrag schuldet man dagegen die Arbeitsleistung über eine Zeit.' },
      en: { q: 'A graphic designer is to deliver a finished logo to Loopy by 1 May. He works independently, with his own equipment, and owes a specific result. Which contract is this?', o: ['Employment contract', 'Freelance service contract', 'Contract for work (Werkvertrag)', 'Apprenticeship contract'], e: 'In a contract for work you owe a specific result (the work). In a (freelance) service contract you owe work over a period of time instead.' },
      hu: { q: 'Egy grafikusnak május 1-jéig kész logót kell átadnia Loopynak. Önállóan, saját eszközeivel dolgozik, és meghatározott eredménnyel tartozik. Milyen szerződésről van szó?', o: ['Munkaszerződés', 'Szabad szolgáltatási szerződés', 'Vállalkozási szerződés (Werkvertrag)', 'Tanulószerződés'], e: 'Vállalkozási szerződésnél meghatározott eredménnyel (a művel) tartozik az ember. A (szabad) szolgáltatási szerződésnél viszont egy időszakon át végzett munkával.' },
    },
  ],
}
