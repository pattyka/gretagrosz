// Zusatzfragen 2. Jahrgang, Teil 4 (Format: siehe zusatzfragen/index.js)

export default {
  'supply-chain-management': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man alle Unternehmen vom Rohstoff bis zum Endverbraucher zusammen? (englischer Begriff)', a: ['Supply Chain', 'Lieferkette', 'Wertschöpfungskette'], e: 'Die Supply Chain (Lieferkette) umfasst alle Unternehmen vom Rohstoff bis zum Endverbraucher.' },
      en: { q: 'What do you call all the companies from raw material to end consumer together?', a: ['supply chain'], e: 'The supply chain includes all companies from raw material to end consumer.' },
      hu: { q: 'Hogyan nevezzük együtt az összes vállalatot a nyersanyagtól a végső fogyasztóig?', a: ['ellátási lánc', 'supply chain', 'beszállítói lánc'], e: 'Az ellátási lánc a nyersanyagtól a végső fogyasztóig minden vállalatot magában foglal.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie nennt man die Fähigkeit einer Lieferkette, Störungen (z. B. eine Pandemie) gut zu überstehen?', a: ['Resilienz', 'Widerstandsfähigkeit'], e: 'Resilienz erreicht man z. B. durch Multi-Sourcing, Pufferbestände und Kooperation.' },
      en: { q: 'What do you call a supply chain\'s ability to cope well with disruptions (e.g. a pandemic)?', a: ['resilience'], e: 'Resilience is achieved e.g. through multi-sourcing, buffer stocks and cooperation.' },
      hu: { q: 'Hogyan nevezzük az ellátási lánc azon képességét, hogy jól átvészelje a zavarokat (pl. egy járványt)?', a: ['reziliencia', 'ellenálló képesség', 'ellenállóképesség'], e: 'A reziliencia pl. több beszállítóval, puffer­készletekkel és együttműködéssel érhető el.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 0,
      de: { q: 'Loopy bezieht Kakao jetzt von drei Lieferanten aus verschiedenen Ländern statt nur von einem. Was gewinnt sie vor allem – und was ist der Nachteil?', o: ['Mehr Resilienz – aber höhere Kosten und mehr Aufwand', 'Mehr Effizienz – aber weniger Sicherheit', 'Niedrigere Kosten – aber mehr Abhängigkeit', 'Keinen Vorteil – nur mehr Risiko'], e: 'Multi-Sourcing macht die Kette widerstandsfähiger, kostet aber Effizienz (kleinere Mengen, mehr Abstimmung) – der Resilienz-Effizienz-Konflikt.' },
      en: { q: 'Loopy now buys cocoa from three suppliers in different countries instead of just one. What does she mainly gain – and what is the downside?', o: ['More resilience – but higher costs and more effort', 'More efficiency – but less security', 'Lower costs – but more dependence', 'No advantage – only more risk'], e: 'Multi-sourcing makes the chain more resilient but costs efficiency (smaller quantities, more coordination) – the resilience-efficiency conflict.' },
      hu: { q: 'Loopy most egy helyett három, különböző országokból származó beszállítótól veszi a kakaót. Mit nyer ezzel elsősorban – és mi a hátránya?', o: ['Nagyobb rezilienciát – de magasabb költséget és több munkát', 'Nagyobb hatékonyságot – de kisebb biztonságot', 'Alacsonyabb költséget – de nagyobb függőséget', 'Semmi előnyt – csak több kockázatot'], e: 'A több beszállító ellenállóbbá teszi a láncot, de csökkenti a hatékonyságot (kisebb mennyiségek, több egyeztetés) – ez a reziliencia–hatékonyság konfliktus.' },
    },
  ],

  logistik: [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man ein Unternehmen, das Transporte im eigenen Namen organisiert, sie aber nicht selbst durchführt?', a: ['Spediteur', 'Spedition'], e: 'Der Spediteur organisiert, der Frachtführer führt den Transport tatsächlich durch.' },
      en: { q: 'What do you call a company that organises transport in its own name but does not carry it out itself?', a: ['freight forwarder', 'forwarder', 'forwarding agent'], e: 'The freight forwarder organises, the carrier actually carries out the transport.' },
      hu: { q: 'Hogyan nevezzük azt a vállalatot, amely saját nevében szervez szállításokat, de maga nem hajtja végre őket?', a: ['szállítmányozó', 'szállítmányozó cég'], e: 'A szállítmányozó szervez, a fuvarozó ténylegesen végrehajtja a szállítást.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie heißt der Frachtbrief im internationalen Straßengüterverkehr? (Abkürzung)', a: ['CMR', 'CMR-Frachtbrief'], e: 'Im Straßenverkehr gilt der CMR-Frachtbrief, im Bahnverkehr der CIM-Frachtbrief, in der Luftfahrt der Air Waybill.' },
      en: { q: 'What is the consignment note in international road freight called? (Abbreviation)', a: ['CMR', 'CMR consignment note'], e: 'Road: CMR consignment note, rail: CIM consignment note, air: air waybill.' },
      hu: { q: 'Hogy hívják a nemzetközi közúti áruszállítás fuvarlevelét? (Rövidítés)', a: ['CMR', 'CMR fuvarlevél'], e: 'Közúton a CMR, vasúton a CIM fuvarlevél, légi szállításnál az Air Waybill érvényes.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 1,
      de: { q: 'Ganze Lkw fahren auf einen Zug und werden so durch Österreich transportiert. Wie nennt man das?', o: ['Containerverkehr', 'Kombinierter Verkehr – Rollende Landstraße (Huckepack)', 'Werkverkehr', 'Reiner Straßengüterverkehr'], e: 'Bei der Rollenden Landstraße (RoLa) wird der ganze Lkw auf der Bahn transportiert – eine Form des Huckepackverkehrs im kombinierten Verkehr.' },
      en: { q: 'Whole lorries drive onto a train and are transported through Austria that way. What is this called?', o: ['Container transport', 'Combined transport – rolling motorway (piggyback)', 'Own-account transport', 'Pure road freight transport'], e: 'On the rolling motorway (RoLa) the whole lorry is carried by rail – a form of piggyback transport in combined transport.' },
      hu: { q: 'Egész kamionok hajtanak fel egy vonatra, és így szállítják őket Ausztrián keresztül. Hogy hívják ezt?', o: ['Konténeres fuvarozás', 'Kombinált fuvarozás – gördülő országút (huckepack)', 'Saját számlás fuvarozás', 'Tisztán közúti áruszállítás'], e: 'A gördülő országúton (RoLa) az egész kamiont vasúton szállítják – ez a kombinált fuvarozáson belüli ráterheléses (huckepack) forma.' },
    },
  ],

  'der-handel': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man den Handel, der an Endverbraucher:innen verkauft?', a: ['Einzelhandel', 'Detailhandel'], e: 'Einzelhandel verkauft an Endverbraucher:innen, Großhandel an andere Unternehmen.' },
      en: { q: 'What do you call the trade that sells to end consumers?', a: ['retail', 'retail trade', 'retailing'], e: 'Retail sells to end consumers, wholesale to other businesses.' },
      hu: { q: 'Hogyan nevezzük azt a kereskedelmet, amely a végső fogyasztóknak ad el?', a: ['kiskereskedelem'], e: 'A kiskereskedelem a végső fogyasztóknak, a nagykereskedelem más vállalatoknak ad el.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie nennt man ein System, bei dem ein selbstständiger Unternehmer gegen Gebühr das Konzept und die Marke eines anderen nutzt (z. B. McDonald\'s)?', a: ['Franchising', 'Franchise', 'Franchisesystem'], e: 'Beim Franchising zahlt der Franchisenehmer Gebühren und nutzt dafür Konzept, Marke und Unterstützung des Franchisegebers.' },
      en: { q: 'What do you call a system in which an independent business owner uses another company\'s concept and brand for a fee (e.g. McDonald\'s)?', a: ['franchising', 'franchise', 'franchise system'], e: 'In franchising the franchisee pays fees and in return uses the franchisor\'s concept, brand and support.' },
      hu: { q: 'Hogyan nevezzük azt a rendszert, amelyben egy önálló vállalkozó díj ellenében más koncepcióját és márkáját használja (pl. McDonald\'s)?', a: ['franchise', 'franchising', 'franchise-rendszer'], e: 'Franchise esetén a franchisevevő díjat fizet, és cserébe használja a franchiseadó koncepcióját, márkáját és támogatását.' },
    },
    {
      type: 'number', level: 3, value: 40, tol: 0.01, unit: { de: '%', en: '%', hu: '%' },
      de: { q: 'Loopy kauft eine Packung Pralinen um 2,40 € ein (Einstandspreis) und verkauft sie um 4,00 € netto. Wie hoch ist die Handelsspanne in % vom Verkaufspreis?', e: 'Handelsspanne = 4,00 − 2,40 = 1,60 €. In % vom Verkaufspreis: 1,60 ÷ 4,00 · 100 = 40 %.' },
      en: { q: 'Loopy buys a box of chocolates for €2.40 (cost price) and sells it for €4.00 net. What is the trade margin in % of the selling price?', e: 'Trade margin = 4.00 − 2.40 = €1.60. As % of the selling price: 1.60 ÷ 4.00 · 100 = 40%.' },
      hu: { q: 'Loopy egy doboz bonbont 2,40 €-ért szerez be (beszerzési ár), és nettó 4,00 €-ért adja el. Hány százalék a kereskedelmi árrés az eladási árhoz viszonyítva?', e: 'Árrés = 4,00 − 2,40 = 1,60 €. Az eladási ár %-ában: 1,60 ÷ 4,00 · 100 = 40%.' },
    },
  ],

  'businessplan-2jg': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man überprüfbare Zwischenziele im Umsetzungsfahrplan eines Businessplans?', a: ['Meilensteine', 'Meilenstein'], e: 'Meilensteine sind prüfbare Zwischenziele – so sieht man, ob man im Zeitplan liegt.' },
      en: { q: 'What do you call checkable interim goals in a business plan\'s implementation roadmap?', a: ['milestones', 'milestone'], e: 'Milestones are checkable interim goals – they show whether you are on schedule.' },
      hu: { q: 'Hogyan nevezzük az üzleti terv megvalósítási ütemtervében az ellenőrizhető részcélokat?', a: ['mérföldkövek', 'mérföldkő'], e: 'A mérföldkövek ellenőrizhető részcélok – megmutatják, tartjuk-e az ütemtervet.' },
    },
    {
      type: 'number', level: 2, value: 12000, tol: 0, unit: { de: 'Stück', en: 'pcs', hu: 'db' },
      de: { q: '500 mögliche Käufer:innen kaufen jeweils 24 Packungen Pralinen pro Jahr. Wie hoch ist das Marktpotenzial in Stück?', e: 'Marktpotenzial = mögliche Käufer · jährliche Kaufmenge = 500 · 24 = 12.000 Stück.' },
      en: { q: '500 potential buyers each buy 24 boxes of chocolates per year. What is the market potential in pieces?', e: 'Market potential = potential buyers · annual purchase quantity = 500 · 24 = 12,000 pieces.' },
      hu: { q: '500 lehetséges vevő évente egyenként 24 doboz bonbont vásárol. Mekkora a piaci potenciál darabban?', e: 'Piaci potenciál = lehetséges vevők · éves vásárlási mennyiség = 500 · 24 = 12 000 darab.' },
    },
    {
      type: 'number', level: 3, value: 3.6, tol: 0.01, unit: { de: 'Punkte', en: 'points', hu: 'pont' },
      de: { q: 'Scoring-Methode für Standort A: Kundennähe (Gewicht 50 %) 4 Punkte, Miete (Gewicht 30 %) 2 Punkte, Verkehrslage (Gewicht 20 %) 5 Punkte. Wie hoch ist das gewichtete Gesamtergebnis?', e: '0,5 · 4 + 0,3 · 2 + 0,2 · 5 = 2,0 + 0,6 + 1,0 = 3,6 Punkte.' },
      en: { q: 'Scoring method for location A: closeness to customers (weight 50%) 4 points, rent (weight 30%) 2 points, transport links (weight 20%) 5 points. What is the weighted total?', e: '0.5 · 4 + 0.3 · 2 + 0.2 · 5 = 2.0 + 0.6 + 1.0 = 3.6 points.' },
      hu: { q: 'Pontozásos módszer az A telephelyre: vevőközelség (súly 50%) 4 pont, bérleti díj (súly 30%) 2 pont, közlekedési helyzet (súly 20%) 5 pont. Mekkora a súlyozott összeredmény?', e: '0,5 · 4 + 0,3 · 2 + 0,2 · 5 = 2,0 + 0,6 + 1,0 = 3,6 pont.' },
    },
  ],
}
