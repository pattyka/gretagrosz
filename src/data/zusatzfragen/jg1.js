// Zusatzfragen 1. Jahrgang (Format: siehe zusatzfragen/index.js)
const EUR = { de: '€', en: '€', hu: '€' }
const DAYS = { de: 'Tage', en: 'days', hu: 'nap' }

export default {
  'grundlagen-des-wirtschaftens': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man ein Gefühl des Mangels, verbunden mit dem Wunsch, diesen Mangel zu beseitigen?', a: ['Bedürfnis', 'Bedürfnisse'], e: 'Ein Bedürfnis ist das Gefühl eines Mangels mit dem Wunsch, ihn zu beseitigen.' },
      en: { q: 'What do you call a feeling of lack combined with the wish to remove it?', a: ['need', 'needs', 'want'], e: 'A need is the feeling of lacking something combined with the wish to remove that lack.' },
      hu: { q: 'Hogyan nevezzük a hiányérzetet, amely azzal a vággyal jár, hogy ezt a hiányt megszüntessük?', a: ['szükséglet', 'szükségletek'], e: 'A szükséglet hiányérzet, amely a hiány megszüntetésének vágyával jár.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie heißt das ökonomische Prinzip, bei dem ein vorgegebenes Ziel mit möglichst wenig Mitteln erreicht werden soll?', a: ['Minimalprinzip', 'Sparprinzip'], e: 'Minimalprinzip: Das Ziel ist fix, der Einsatz soll so gering wie möglich sein.' },
      en: { q: 'What is the economic principle called where a fixed goal should be reached using as few resources as possible?', a: ['minimum principle', 'minimal principle', 'economy principle'], e: 'Minimum principle: the goal is fixed, the input should be as small as possible.' },
      hu: { q: 'Hogyan nevezzük azt a gazdasági elvet, amelynél egy adott célt a lehető legkevesebb eszközzel kell elérni?', a: ['minimumelv', 'minimum elv', 'takarékossági elv'], e: 'Minimumelv: a cél rögzített, a ráfordítás legyen a lehető legkisebb.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 0,
      de: { q: 'Loopy will mit einem fixen Werbebudget von 2.000 € möglichst viele neue Kund:innen gewinnen. Danach möchte sie dieselbe Menge Pralinen mit möglichst geringen Verpackungskosten verpacken. Welche Prinzipien wendet sie in dieser Reihenfolge an?', o: ['Zuerst Maximalprinzip, dann Minimalprinzip', 'Zuerst Minimalprinzip, dann Maximalprinzip', 'Beide Male das Maximalprinzip', 'Beide Male das Minimalprinzip'], e: 'Fixes Budget, möglichst viel Ergebnis = Maximalprinzip. Fixe Menge, möglichst geringe Kosten = Minimalprinzip.' },
      en: { q: 'Loopy wants to win as many new customers as possible with a fixed advertising budget of €2,000. Then she wants to pack the same number of chocolates at the lowest possible packaging cost. Which principles does she apply, in this order?', o: ['First the maximum principle, then the minimum principle', 'First the minimum principle, then the maximum principle', 'The maximum principle both times', 'The minimum principle both times'], e: 'Fixed budget, as much result as possible = maximum principle. Fixed quantity, as little cost as possible = minimum principle.' },
      hu: { q: 'Loopy rögzített, 2000 €-s reklámköltségvetéssel a lehető legtöbb új vásárlót szeretné megnyerni. Utána ugyanannyi bonbont a lehető legkisebb csomagolási költséggel szeretne becsomagolni. Milyen elveket alkalmaz ebben a sorrendben?', o: ['Először maximumelv, aztán minimumelv', 'Először minimumelv, aztán maximumelv', 'Mindkétszer maximumelv', 'Mindkétszer minimumelv'], e: 'Rögzített költségvetés, a lehető legnagyobb eredmény = maximumelv. Rögzített mennyiség, a lehető legkisebb költség = minimumelv.' },
    },
  ],

  'der-markt': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man den Preis, bei dem die angebotene Menge genau der nachgefragten Menge entspricht?', a: ['Gleichgewichtspreis', 'Marktpreis', 'Marktgleichgewicht'], e: 'Beim Gleichgewichtspreis schneiden sich Angebots- und Nachfragekurve.' },
      en: { q: 'What do you call the price at which the quantity supplied equals the quantity demanded?', a: ['equilibrium price', 'market price', 'market equilibrium'], e: 'At the equilibrium price the supply and demand curves intersect.' },
      hu: { q: 'Hogyan nevezzük azt az árat, amelynél a kínált mennyiség pontosan megegyezik a keresett mennyiséggel?', a: ['egyensúlyi ár', 'piaci ár', 'piaci egyensúly'], e: 'Az egyensúlyi árnál metszi egymást a kínálati és a keresleti görbe.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie heißt die Marktform, bei der es nur einen einzigen Anbieter gibt?', a: ['Monopol', 'Angebotsmonopol'], e: 'Ein einziger Anbieter = Monopol, wenige Anbieter = Oligopol, viele Anbieter = Polypol.' },
      en: { q: 'What is the market form called where there is only a single supplier?', a: ['monopoly', 'supply monopoly'], e: 'One supplier = monopoly, few suppliers = oligopoly, many suppliers = polypoly.' },
      hu: { q: 'Hogyan nevezzük azt a piaci formát, amelyben csak egyetlen kínáló van?', a: ['monopólium', 'kínálati monopólium'], e: 'Egy kínáló = monopólium, kevés kínáló = oligopólium, sok kínáló = polipólium.' },
    },
    {
      type: 'number', level: 3, value: 4, tol: 0.01, unit: EUR,
      de: { q: 'Auf einem Markt gilt: Nachfrage = 300 − 40 · Preis und Angebot = 60 · Preis − 100 (Mengen in Stück, Preis in €). Berechne den Gleichgewichtspreis.', e: '300 − 40p = 60p − 100 → 400 = 100p → p = 4 €. Dann werden 140 Stück verkauft.' },
      en: { q: 'On a market: demand = 300 − 40 · price and supply = 60 · price − 100 (quantities in pieces, price in €). Calculate the equilibrium price.', e: '300 − 40p = 60p − 100 → 400 = 100p → p = €4. Then 140 pieces are sold.' },
      hu: { q: 'Egy piacon: kereslet = 300 − 40 · ár és kínálat = 60 · ár − 100 (mennyiség darabban, ár €-ban). Számítsd ki az egyensúlyi árat.', e: '300 − 40p = 60p − 100 → 400 = 100p → p = 4 €. Ekkor 140 darabot adnak el.' },
    },
  ],

  'unternehmen-und-umfeld': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man alle Personen und Gruppen, die ein Interesse am Unternehmen haben (z. B. Kund:innen, Mitarbeitende, Staat)?', a: ['Stakeholder', 'Anspruchsgruppen', 'Interessengruppen'], e: 'Stakeholder (Anspruchsgruppen) haben Erwartungen an das Unternehmen und werden von ihm beeinflusst.' },
      en: { q: 'What do you call all people and groups that have an interest in the company (e.g. customers, employees, the state)?', a: ['stakeholders', 'stakeholder', 'interest groups'], e: 'Stakeholders have expectations of the company and are affected by it.' },
      hu: { q: 'Hogyan nevezzük mindazokat a személyeket és csoportokat, akiknek érdekük fűződik a vállalathoz (pl. vevők, munkavállalók, állam)?', a: ['érintettek', 'stakeholderek', 'érintett csoportok', 'érdekcsoportok'], e: 'Az érintettek (stakeholderek) elvárásokat támasztanak a vállalattal szemben, és hatással van rájuk.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Ein Unternehmen will seinen CO₂-Ausstoß um 20 % senken. Zu welcher Art von Unternehmenszielen gehört das?', a: ['ökologische Ziele', 'ökologisches Ziel', 'ökologisch', 'Umweltziel'], e: 'Ziele zum Schutz der Umwelt sind ökologische Ziele (daneben gibt es ökonomische und soziale Ziele).' },
      en: { q: 'A company wants to cut its CO₂ emissions by 20%. Which kind of company goal is this?', a: ['ecological goal', 'ecological goals', 'ecological', 'environmental goal'], e: 'Goals that protect the environment are ecological goals (besides economic and social goals).' },
      hu: { q: 'Egy vállalat 20%-kal szeretné csökkenteni a CO₂-kibocsátását. Milyen vállalati célról van szó?', a: ['ökológiai cél', 'ökológiai célok', 'ökológiai', 'környezetvédelmi cél'], e: 'A környezet védelmét szolgáló célok ökológiai célok (emellett vannak gazdasági és társadalmi célok).' },
    },
    {
      type: 'mc', level: 3, correctIndex: 0,
      de: { q: 'Loopy will die Löhne ihrer Mitarbeitenden erhöhen und gleichzeitig den Gewinn steigern – ohne die Preise anzuheben und ohne mehr zu verkaufen. Welche Zielbeziehung liegt vor?', o: ['Zielkonflikt', 'Zielharmonie', 'Zielneutralität', 'Zielidentität'], e: 'Höhere Löhne erhöhen die Kosten und senken – bei gleichen Preisen und Mengen – den Gewinn. Die Ziele behindern sich: Zielkonflikt.' },
      en: { q: 'Loopy wants to raise her employees\' wages and increase profit at the same time – without raising prices and without selling more. What relationship between the goals is this?', o: ['Goal conflict', 'Goal harmony', 'Goal neutrality', 'Goal identity'], e: 'Higher wages raise costs and – with the same prices and quantities – lower profit. The goals hinder each other: goal conflict.' },
      hu: { q: 'Loopy emelni szeretné munkatársai bérét, és egyidejűleg növelni a nyereséget – áremelés és több eladás nélkül. Milyen célkapcsolatról van szó?', o: ['Célkonfliktus', 'Célharmónia', 'Célsemlegesség', 'Célazonosság'], e: 'A magasabb bérek növelik a költségeket, és – azonos árak és mennyiségek mellett – csökkentik a nyereséget. A célok akadályozzák egymást: célkonfliktus.' },
    },
  ],

  'leistungserstellung-1jg': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man einen Betrieb, der Sachgüter herstellt (das Gegenteil ist ein Dienstleistungsbetrieb)?', a: ['Sachleistungsbetrieb', 'Produktionsbetrieb', 'Herstellungsbetrieb', 'Industriebetrieb'], e: 'Betriebe, die Sachgüter erzeugen, sind Sachleistungs- bzw. Produktionsbetriebe.' },
      en: { q: 'What do you call a business that produces physical goods (the opposite is a service business)?', a: ['manufacturing business', 'production business', 'goods-producing business', 'manufacturer'], e: 'Businesses that produce physical goods are production or manufacturing businesses.' },
      hu: { q: 'Hogyan nevezzük a tárgyi javakat előállító üzemet (az ellentéte a szolgáltató üzem)?', a: ['termelő üzem', 'termelő vállalat', 'gyártó üzem', 'gyártó vállalat'], e: 'A tárgyi javakat előállító üzemek termelő, illetve gyártó üzemek.' },
    },
    {
      type: 'number', level: 2, value: 60, tol: 0, unit: { de: 'Stück/Std.', en: 'pcs/hr', hu: 'db/óra' },
      de: { q: 'Loopy stellt mit 2 Mitarbeitenden in 8 Stunden 960 Pralinen her. Wie hoch ist die Arbeitsproduktivität (Pralinen pro Arbeitsstunde)?', e: 'Arbeitsstunden: 2 · 8 = 16. Produktivität = 960 ÷ 16 = 60 Pralinen pro Arbeitsstunde.' },
      en: { q: 'Loopy\'s 2 employees make 960 chocolates in 8 hours. What is the labour productivity (chocolates per working hour)?', e: 'Working hours: 2 · 8 = 16. Productivity = 960 ÷ 16 = 60 chocolates per working hour.' },
      hu: { q: 'Loopy 2 munkatársa 8 óra alatt 960 bonbont készít. Mekkora a munkatermelékenység (bonbon munkaóránként)?', e: 'Munkaórák: 2 · 8 = 16. Termelékenység = 960 ÷ 16 = 60 bonbon munkaóránként.' },
    },
    {
      type: 'number', level: 3, value: 1.25, tol: 0.005, unit: null,
      de: { q: 'Loopys Pralinenproduktion bringt in einem Monat 12.000 € Erträge bei 9.600 € Aufwänden. Berechne die Wirtschaftlichkeit (Ertrag ÷ Aufwand) auf 2 Kommastellen.', e: 'Wirtschaftlichkeit = 12.000 ÷ 9.600 = 1,25. Werte über 1 bedeuten: Es wird wirtschaftlich gearbeitet.' },
      en: { q: 'In one month Loopy\'s chocolate production brings €12,000 in income with €9,600 in expenses. Calculate the efficiency (income ÷ expenses) to 2 decimal places.', e: 'Efficiency = 12,000 ÷ 9,600 = 1.25. Values above 1 mean the business is working efficiently.' },
      hu: { q: 'Loopy bonbongyártása egy hónapban 12 000 € bevételt hoz 9600 € ráfordítás mellett. Számítsd ki a gazdaságosságot (bevétel ÷ ráfordítás) 2 tizedesjegyre.', e: 'Gazdaságosság = 12 000 ÷ 9600 = 1,25. Az 1 feletti érték azt jelenti, hogy gazdaságosan dolgoznak.' },
    },
  ],

  'phasen-kaufen-verkaufen': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man die unverbindliche Bitte eines Käufers um Informationen zu Waren, Preisen und Bedingungen?', a: ['Anfrage'], e: 'Mit der Anfrage holt der Käufer unverbindlich Informationen ein – sie verpflichtet zu nichts.' },
      en: { q: 'What do you call a buyer\'s non-binding request for information about goods, prices and conditions?', a: ['enquiry', 'inquiry', 'request for quotation'], e: 'With an enquiry the buyer collects information without obligation – it does not commit anyone to anything.' },
      hu: { q: 'Hogyan nevezzük a vevő kötelezettség nélküli kérését az árukról, árakról és feltételekről?', a: ['ajánlatkérés', 'érdeklődés', 'tudakozódás'], e: 'Az ajánlatkéréssel a vevő kötelezettség nélkül szerez információt – senkit sem kötelez semmire.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie nennt man ein „Angebot“ an die Allgemeinheit (z. B. im Schaufenster oder Prospekt), das rechtlich nur eine Aufforderung zur Angebotsstellung ist?', a: ['Anpreisung', 'Anpreisungen'], e: 'Anpreisungen richten sich an viele Menschen und sind unverbindlich – erst die Bestellung des Kunden ist ein Angebot.' },
      en: { q: 'What do you call an "offer" to the general public (e.g. in a shop window or brochure) that legally is only an invitation to make an offer?', a: ['invitation to treat', 'advertisement', 'advertising'], e: 'An invitation to treat is aimed at many people and is not binding – only the customer\'s order is an offer.' },
      hu: { q: 'Hogyan nevezzük a nagyközönségnek szóló „ajánlatot” (pl. kirakatban vagy prospektusban), amely jogilag csak ajánlattételre való felhívás?', a: ['ajánlattételi felhívás', 'reklám', 'hirdetés'], e: 'Az ajánlattételi felhívás sok embernek szól és nem kötelező – csak a vevő rendelése számít ajánlatnak.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 2,
      de: { q: 'Welche Reihenfolge der Phasen beim Kaufen und Verkaufen ist richtig?', o: ['Angebot – Anfrage – Bestellung – Lieferung – Auftragsbestätigung – Zahlung', 'Anfrage – Bestellung – Angebot – Auftragsbestätigung – Zahlung – Lieferung', 'Anfrage – Angebot – Bestellung – Auftragsbestätigung – Lieferung – Zahlung', 'Anfrage – Angebot – Auftragsbestätigung – Bestellung – Lieferung – Zahlung'], e: 'Zuerst fragt der Käufer an, dann folgen Angebot, Bestellung, Auftragsbestätigung, Lieferung und schließlich die Zahlung.' },
      en: { q: 'Which order of the phases of buying and selling is correct?', o: ['Offer – enquiry – order – delivery – order confirmation – payment', 'Enquiry – order – offer – order confirmation – payment – delivery', 'Enquiry – offer – order – order confirmation – delivery – payment', 'Enquiry – offer – order confirmation – order – delivery – payment'], e: 'First the buyer makes an enquiry, then come the offer, order, order confirmation, delivery and finally payment.' },
      hu: { q: 'Melyik a vétel és eladás szakaszainak helyes sorrendje?', o: ['Ajánlat – ajánlatkérés – rendelés – szállítás – rendelésvisszaigazolás – fizetés', 'Ajánlatkérés – rendelés – ajánlat – rendelésvisszaigazolás – fizetés – szállítás', 'Ajánlatkérés – ajánlat – rendelés – rendelésvisszaigazolás – szállítás – fizetés', 'Ajánlatkérés – ajánlat – rendelésvisszaigazolás – rendelés – szállítás – fizetés'], e: 'Először a vevő ajánlatot kér, majd jön az ajánlat, a rendelés, a rendelésvisszaigazolás, a szállítás és végül a fizetés.' },
    },
  ],

  'gesetzliche-grundlagen-kauf': [
    {
      type: 'text', level: 1,
      de: { q: 'Welches österreichische Gesetzbuch regelt Kaufverträge zwischen Privatpersonen? (Abkürzung reicht)', a: ['ABGB', 'Allgemeines Bürgerliches Gesetzbuch'], e: 'Das ABGB (Allgemeines Bürgerliches Gesetzbuch) regelt Verträge zwischen Privatpersonen.' },
      en: { q: 'Which Austrian code regulates purchase contracts between private persons? (The abbreviation is enough)', a: ['ABGB', 'Austrian Civil Code', 'General Civil Code'], e: 'The ABGB (Austrian General Civil Code) regulates contracts between private persons.' },
      hu: { q: 'Melyik osztrák törvénykönyv szabályozza a magánszemélyek közötti adásvételi szerződéseket? (A rövidítés is elég)', a: ['ABGB', 'Osztrák Polgári Törvénykönyv', 'Általános Polgári Törvénykönyv'], e: 'Az ABGB (Általános Polgári Törvénykönyv) szabályozza a magánszemélyek közötti szerződéseket.' },
    },
    {
      type: 'number', level: 2, value: 18, tol: 0, unit: { de: 'Jahre', en: 'years', hu: 'év' },
      de: { q: 'Ab welchem Alter ist man in Österreich voll geschäftsfähig?', e: 'Mit 18 Jahren (Volljährigkeit) ist man voll geschäftsfähig und kann alle Verträge selbst abschließen.' },
      en: { q: 'From what age does a person have full legal capacity to contract in Austria?', e: 'At 18 (coming of age) a person has full legal capacity and can conclude any contract themselves.' },
      hu: { q: 'Hány éves kortól teljesen cselekvőképes valaki Ausztriában?', e: '18 éves kortól (nagykorúság) teljesen cselekvőképes, és minden szerződést maga köthet meg.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 1,
      de: { q: 'Loopy (Unternehmerin) kauft bei einem Großhändler 50 kg Kakao für ihren Candy Store. Welches Geschäft liegt vor und welches Gesetz gilt vorrangig?', o: ['Verbrauchergeschäft – KSchG', 'Beiderseitiges Unternehmergeschäft – UGB', 'Bürgerliches Geschäft – nur ABGB', 'Einseitiges Unternehmergeschäft – KSchG'], e: 'Beide Vertragspartner sind Unternehmer (B2B): beiderseitiges Unternehmergeschäft, für das vorrangig das UGB gilt.' },
      en: { q: 'Loopy (a business owner) buys 50 kg of cocoa from a wholesaler for her Candy Store. What kind of transaction is this and which law mainly applies?', o: ['Consumer transaction – KSchG', 'Two-sided business transaction – UGB', 'Civil transaction – only ABGB', 'One-sided business transaction – KSchG'], e: 'Both partners are businesses (B2B): a two-sided business transaction, for which mainly the UGB (Austrian Commercial Code) applies.' },
      hu: { q: 'Loopy (vállalkozó) 50 kg kakaót vásárol egy nagykereskedőtől a Candy Store számára. Milyen ügyletről van szó, és melyik törvény érvényes elsősorban?', o: ['Fogyasztói ügylet – KSchG', 'Kétoldalú vállalkozói ügylet – UGB', 'Polgári ügylet – csak ABGB', 'Egyoldalú vállalkozói ügylet – KSchG'], e: 'Mindkét fél vállalkozó (B2B): kétoldalú vállalkozói ügylet, amelyre elsősorban az UGB (osztrák vállalati törvénykönyv) vonatkozik.' },
    },
  ],

  'fernabsatz-ecommerce': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man Verträge, die ohne gleichzeitige Anwesenheit der Vertragspartner geschlossen werden (z. B. über Internet oder Telefon)?', a: ['Fernabsatzvertrag', 'Fernabsatzverträge', 'Fernabsatz', 'Fernabsatzgeschäft'], e: 'Fernabsatzverträge werden nur über Fernkommunikationsmittel wie Internet, Telefon oder Katalog geschlossen.' },
      en: { q: 'What do you call contracts concluded without the partners being present at the same time (e.g. via the internet or phone)?', a: ['distance contract', 'distance contracts', 'distance selling'], e: 'Distance contracts are concluded only via means of distance communication such as the internet, phone or catalogue.' },
      hu: { q: 'Hogyan nevezzük azokat a szerződéseket, amelyeket a felek egyidejű jelenléte nélkül kötnek (pl. interneten vagy telefonon)?', a: ['távollévők közötti szerződés', 'távértékesítési szerződés', 'távértékesítés'], e: 'A távollévők közötti szerződéseket csak távközlési eszközökkel – internet, telefon, katalógus – kötik meg.' },
    },
    {
      type: 'number', level: 2, value: 14, tol: 0, unit: DAYS,
      de: { q: 'Wie viele Tage dauert die gesetzliche Rücktrittsfrist bei einem Online-Kauf als Verbraucher:in in der EU?', e: 'Bei Fernabsatzverträgen können Verbraucher:innen innerhalb von 14 Tagen ohne Angabe von Gründen zurücktreten.' },
      en: { q: 'How many days does the legal withdrawal period last when a consumer buys online in the EU?', e: 'For distance contracts consumers can withdraw within 14 days without giving reasons.' },
      hu: { q: 'Hány napig tart a törvényes elállási határidő, ha fogyasztóként online vásárolsz az EU-ban?', e: 'Távollévők közötti szerződéseknél a fogyasztók 14 napon belül indoklás nélkül elállhatnak.' },
    },
    {
      type: 'text', level: 3,
      de: { q: 'Wie heißt das österreichische Gesetz, das Fernabsatz- und Auswärtsgeschäfte regelt? (Abkürzung reicht)', a: ['FAGG', 'Fern- und Auswärtsgeschäfte-Gesetz'], e: 'Das FAGG (Fern- und Auswärtsgeschäfte-Gesetz) regelt Informationspflichten und das Rücktrittsrecht bei solchen Geschäften.' },
      en: { q: 'What is the Austrian law called that regulates distance and off-premises contracts? (The abbreviation is enough)', a: ['FAGG', 'Distance and Off-Premises Contracts Act'], e: 'The FAGG (Distance and Off-Premises Contracts Act) regulates information duties and the right of withdrawal for such contracts.' },
      hu: { q: 'Hogy hívják azt az osztrák törvényt, amely a távollévők közötti és az üzlethelyiségen kívül kötött szerződéseket szabályozza? (A rövidítés is elég)', a: ['FAGG'], e: 'Az FAGG szabályozza az ilyen ügyletek tájékoztatási kötelezettségeit és az elállási jogot.' },
    },
  ],

  ruecktrittsrechte: [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man ein Geschäft, das außerhalb der Geschäftsräume des Unternehmens geschlossen wird (z. B. an der Haustür)?', a: ['Auswärtsgeschäft', 'Haustürgeschäft', 'Auswärtsgeschäfte'], e: 'Auswärtsgeschäfte (z. B. Haustürgeschäfte) finden außerhalb der Geschäftsräume statt – Verbraucher:innen haben ein Rücktrittsrecht.' },
      en: { q: 'What do you call a contract concluded outside the company\'s business premises (e.g. at the front door)?', a: ['off-premises contract', 'doorstep sale', 'doorstep selling'], e: 'Off-premises contracts (e.g. doorstep sales) take place outside the business premises – consumers have a right of withdrawal.' },
      hu: { q: 'Hogyan nevezzük azt az ügyletet, amelyet a vállalat üzlethelyiségén kívül kötnek (pl. az ajtóban)?', a: ['üzlethelyiségen kívül kötött szerződés', 'házaló kereskedelem', 'házalás'], e: 'Az üzlethelyiségen kívül kötött szerződéseknél (pl. házalás) a fogyasztóknak elállási joguk van.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Welches Gesetz schützt in Österreich Verbraucher:innen bei Geschäften mit Unternehmen ganz allgemein? (Abkürzung reicht)', a: ['KSchG', 'Konsumentenschutzgesetz'], e: 'Das KSchG (Konsumentenschutzgesetz) schützt Verbraucher:innen gegenüber Unternehmen.' },
      en: { q: 'Which Austrian law generally protects consumers in transactions with businesses? (The abbreviation is enough)', a: ['KSchG', 'Consumer Protection Act'], e: 'The KSchG (Consumer Protection Act) protects consumers against businesses.' },
      hu: { q: 'Melyik osztrák törvény védi általában a fogyasztókat a vállalkozásokkal kötött ügyletekben? (A rövidítés is elég)', a: ['KSchG', 'fogyasztóvédelmi törvény'], e: 'A KSchG (fogyasztóvédelmi törvény) védi a fogyasztókat a vállalkozásokkal szemben.' },
    },
    {
      type: 'number', level: 3, value: 12, tol: 0, unit: { de: 'Monate', en: 'months', hu: 'hónap' },
      de: { q: 'Ein Onlineshop hat seine Kundin NICHT über ihr Rücktrittsrecht informiert. Um wie viele Monate verlängert sich dadurch die Rücktrittsfrist?', e: 'Fehlt die Belehrung über das Rücktrittsrecht, verlängert sich die Frist um 12 Monate (FAGG). Wird die Information nachgeholt, beginnen ab dann 14 Tage.' },
      en: { q: 'An online shop did NOT inform its customer about her right of withdrawal. By how many months is the withdrawal period extended?', e: 'If the information on the right of withdrawal is missing, the period is extended by 12 months (FAGG). If the information is given later, 14 days start from then.' },
      hu: { q: 'Egy webáruház NEM tájékoztatta vásárlóját az elállási jogáról. Hány hónappal hosszabbodik meg emiatt az elállási határidő?', e: 'Ha hiányzik az elállási jogról szóló tájékoztatás, a határidő 12 hónappal meghosszabbodik (FAGG). Ha a tájékoztatást pótolják, attól kezdve 14 nap jár.' },
    },
  ],
}
