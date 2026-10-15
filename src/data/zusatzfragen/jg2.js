// Zusatzfragen 2. Jahrgang, Teil 1 (Format: siehe zusatzfragen/index.js)
const EUR = { de: '€', en: '€', hu: '€' }

export default {
  'unternehmer-firma-firmenbuch': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt das öffentliche Verzeichnis, in das Unternehmen wie GmbH oder OG eingetragen werden?', a: ['Firmenbuch'], e: 'Das Firmenbuch ist ein öffentliches Verzeichnis beim Landesgericht – jeder kann Einsicht nehmen.' },
      en: { q: 'What is the public register called in which companies such as a GmbH or OG are entered?', a: ['company register', 'commercial register', 'Firmenbuch'], e: 'The company register is a public register kept by the regional court – anyone can look at it.' },
      hu: { q: 'Hogy hívják azt a nyilvános jegyzéket, amelybe a GmbH-hoz vagy OG-hez hasonló vállalatokat bejegyzik?', a: ['cégjegyzék', 'Firmenbuch'], e: 'A cégjegyzék a tartományi bíróságon vezetett nyilvános jegyzék – bárki betekinthet.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie nennt man den im Firmenbuch eingetragenen Namen, unter dem ein Unternehmer Geschäfte betreibt?', a: ['Firma', 'Firmenname'], e: 'Die Firma ist rechtlich der Name des Unternehmers bzw. Unternehmens – nicht das Unternehmen selbst.' },
      en: { q: 'What do you call the name entered in the company register under which a business operates?', a: ['company name', 'business name', 'firm name', 'Firma'], e: 'Legally, the "Firma" is the registered name of the business – not the business itself.' },
      hu: { q: 'Hogyan nevezzük a cégjegyzékbe bejegyzett nevet, amely alatt a vállalkozó üzletel?', a: ['cégnév', 'Firma'], e: 'A cégnév (Firma) jogilag a vállalkozó, illetve a vállalat neve – nem maga a vállalat.' },
    },
    {
      type: 'number', level: 3, value: 1000000, tol: 0, unit: EUR,
      de: { q: 'Ab welchem Jahresumsatz in EINEM Jahr muss sich ein Einzelunternehmen ins Firmenbuch eintragen lassen? (Betrag in € als Zahl)', e: 'Ab 1.000.000 € Umsatz in einem Jahr (oder zwei Jahre hintereinander je über 700.000 €) besteht Rechnungslegungs- und damit Eintragungspflicht (e. U.).' },
      en: { q: 'From what annual revenue in ONE year must a sole proprietorship be entered in the company register? (Amount in € as a number)', e: 'From €1,000,000 revenue in one year (or more than €700,000 in two consecutive years) there is an accounting and therefore registration obligation (e. U.).' },
      hu: { q: 'EGY évben mekkora éves árbevételtől kell egy egyéni vállalkozást a cégjegyzékbe bejegyeztetni? (Összeg €-ban, számmal)', e: '1 000 000 € éves árbevételtől (vagy két egymást követő évben 700 000 € felett) könyvvezetési és így bejegyzési kötelezettség áll fenn (e. U.).' },
    },
  ],

  'rechtsformen-unternehmen': [
    {
      type: 'text', level: 1,
      de: { q: 'Bei welcher Rechtsform sind die Anteile Aktien? (Abkürzung)', a: ['AG', 'Aktiengesellschaft'], e: 'Bei der Aktiengesellschaft (AG) ist das Grundkapital in Aktien aufgeteilt.' },
      en: { q: 'In which legal form are the shares called "Aktien" (stocks)? (Abbreviation)', a: ['AG', 'stock corporation', 'public limited company', 'Aktiengesellschaft'], e: 'In a stock corporation (AG) the share capital is divided into shares.' },
      hu: { q: 'Melyik jogi formánál részvények a részesedések? (Rövidítés)', a: ['AG', 'részvénytársaság', 'rt'], e: 'A részvénytársaságnál (AG) az alaptőke részvényekre oszlik.' },
    },
    {
      type: 'number', level: 2, value: 10000, tol: 0, unit: EUR,
      de: { q: 'Wie hoch ist das Mindeststammkapital einer GmbH?', e: 'Eine GmbH braucht mindestens 10.000 € Stammkapital. Die Gesellschafter haften nur bis zu ihrer Stammeinlage.' },
      en: { q: 'What is the minimum share capital of a GmbH (private limited company)?', e: 'A GmbH needs a share capital of at least €10,000. The partners are only liable up to their contribution.' },
      hu: { q: 'Mekkora egy GmbH (kft.) minimális törzstőkéje?', e: 'Egy GmbH-nak legalább 10 000 € törzstőke kell. A tagok csak a törzsbetétjük erejéig felelnek.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 1,
      de: { q: 'Welche drei Organe hat eine AG zwingend?', o: ['Geschäftsführer, Generalversammlung, Aufsichtsrat', 'Vorstand, Aufsichtsrat, Hauptversammlung', 'Vorstand, Hauptversammlung, Betriebsrat', 'Komplementär, Kommanditist, Aufsichtsrat'], e: 'Die AG hat Vorstand (leitet), Aufsichtsrat (kontrolliert) und Hauptversammlung (Aktionäre). Geschäftsführer und Generalversammlung gehören zur GmbH.' },
      en: { q: 'Which three bodies must an AG (stock corporation) have?', o: ['Managing director, general meeting, supervisory board', 'Management board, supervisory board, general meeting of shareholders', 'Management board, general meeting, works council', 'General partner, limited partner, supervisory board'], e: 'An AG has a management board (runs it), a supervisory board (controls it) and the general meeting (shareholders). Managing director and "Generalversammlung" belong to the GmbH.' },
      hu: { q: 'Melyik három szerv kötelező egy AG-nél (részvénytársaságnál)?', o: ['Ügyvezető, taggyűlés, felügyelőbizottság', 'Igazgatóság, felügyelőbizottság, közgyűlés', 'Igazgatóság, közgyűlés, üzemi tanács', 'Beltag, kültag, felügyelőbizottság'], e: 'Az AG szervei az igazgatóság (vezet), a felügyelőbizottság (ellenőriz) és a közgyűlés (részvényesek). Az ügyvezető és a taggyűlés a GmbH-hoz tartozik.' },
    },
  ],

  vollmachten: [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt die umfassende Vollmacht, die ins Firmenbuch eingetragen wird?', a: ['Prokura'], e: 'Die Prokura ist die umfassendste Vollmacht im Unternehmensrecht und wird ins Firmenbuch eingetragen.' },
      en: { q: 'What is the comprehensive power of attorney called that is entered in the company register?', a: ['Prokura', 'power of procuration', 'procuration'], e: 'Prokura is the most comprehensive power of attorney in company law and is entered in the company register.' },
      hu: { q: 'Hogy hívják azt az átfogó meghatalmazást, amelyet a cégjegyzékbe bejegyeznek?', a: ['prokúra', 'cégvezetési meghatalmazás'], e: 'A prokúra a vállalati jog legátfogóbb meghatalmazása, és a cégjegyzékbe bejegyzik.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Mit welchem Zusatz unterschreibt ein Prokurist? (Abkürzung)', a: ['ppa', 'ppa.', 'per procura'], e: 'Prokuristen unterschreiben mit „ppa.“ (per procura) vor ihrem Namen.' },
      en: { q: 'Which addition does a holder of Prokura use when signing? (Abbreviation)', a: ['ppa', 'ppa.', 'pp', 'per procura'], e: 'Holders of Prokura sign with "ppa." (per procura) before their name.' },
      hu: { q: 'Milyen rövidítéssel ír alá a prokurista?', a: ['ppa', 'ppa.', 'per procura'], e: 'A prokuristák a nevük előtt „ppa.” (per procura) rövidítéssel írnak alá.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 2,
      de: { q: 'Was darf ein Prokurist ohne besondere Befugnis NICHT?', o: ['Mitarbeiter einstellen', 'Kredite aufnehmen', 'Grundstücke verkaufen oder belasten', 'Waren ein- und verkaufen'], e: 'Grundstücke verkaufen oder belasten darf ein Prokurist nur mit besonderer Befugnis. Ebenso wenig darf er z. B. das Unternehmen auflösen oder die Firma ändern.' },
      en: { q: 'What may a holder of Prokura NOT do without special authorisation?', o: ['Hire employees', 'Take out loans', 'Sell or mortgage land', 'Buy and sell goods'], e: 'Selling or mortgaging land requires special authorisation. A holder of Prokura also may not, for example, dissolve the company or change its name.' },
      hu: { q: 'Mit NEM tehet meg a prokurista külön felhatalmazás nélkül?', o: ['Munkatársakat felvenni', 'Hitelt felvenni', 'Ingatlant eladni vagy megterhelni', 'Árut beszerezni és eladni'], e: 'Ingatlan eladásához vagy megterheléséhez külön felhatalmazás kell. A prokurista azt sem teheti meg pl., hogy megszünteti a vállalatot vagy megváltoztatja a cégnevet.' },
    },
  ],

  beschaeftigungsverhaeltnisse: [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man eine Beschäftigung unter der Geringfügigkeitsgrenze, bei der man nur unfallversichert ist?', a: ['geringfügige Beschäftigung', 'geringfügig beschäftigt', 'geringfügiges Dienstverhältnis'], e: 'Bei geringfügiger Beschäftigung liegt das Entgelt unter der Geringfügigkeitsgrenze – man ist nur unfallversichert.' },
      en: { q: 'What do you call employment below the marginal earnings threshold where you are only insured against accidents?', a: ['marginal employment', 'mini job', 'minijob'], e: 'In marginal employment pay is below the threshold – you are only covered by accident insurance.' },
      hu: { q: 'Hogyan nevezzük az alkalmazást a csekély keresetű határ alatt, amelynél csak balesetbiztosítás van?', a: ['csekély mértékű foglalkoztatás', 'alkalmi foglalkoztatás', 'kisjövedelmű foglalkoztatás'], e: 'Csekély mértékű foglalkoztatásnál a bér a határ alatt van – csak balesetbiztosítás jár.' },
    },
    {
      type: 'mc', level: 2, correctIndex: 0,
      de: { q: 'Freier Dienstvertrag: Wer meldet die Sozialversicherung an und wer zahlt die Einkommensteuer?', o: ['Der Auftraggeber meldet die SV an, die Steuer zahlt der freie Dienstnehmer selbst', 'Beides erledigt der Auftraggeber', 'Beides erledigt der freie Dienstnehmer selbst', 'Die SV meldet der Dienstnehmer an, die Steuer zahlt der Auftraggeber'], e: 'Beim freien Dienstvertrag meldet der Auftraggeber zur Sozialversicherung an, die Einkommensteuer muss der freie Dienstnehmer aber selbst abführen.' },
      en: { q: 'Freelance service contract: who registers for social insurance and who pays the income tax?', o: ['The client registers for social insurance, the freelancer pays the tax themselves', 'The client does both', 'The freelancer does both', 'The freelancer registers for social insurance, the client pays the tax'], e: 'In a freelance service contract the client registers the person for social insurance, but the freelancer has to pay the income tax themselves.' },
      hu: { q: 'Szabad szolgáltatási szerződés: ki jelenti be a társadalombiztosítást, és ki fizeti a jövedelemadót?', o: ['A megbízó jelenti be a tb-t, az adót a szabad munkavállaló maga fizeti', 'Mindkettőt a megbízó intézi', 'Mindkettőt a szabad munkavállaló maga intézi', 'A tb-t a munkavállaló jelenti be, az adót a megbízó fizeti'], e: 'Szabad szolgáltatási szerződésnél a megbízó jelent be a társadalombiztosításhoz, a jövedelemadót azonban a szabad munkavállalónak magának kell befizetnie.' },
    },
    {
      type: 'number', level: 3, value: 1500, tol: 0.01, unit: EUR,
      de: { q: 'Eine Vollzeitkraft (40 Std./Woche) verdient 2.400 € brutto im Monat. Wie hoch ist das anteilige Bruttogehalt einer Teilzeitkraft mit 25 Std./Woche im selben Job?', e: 'Anteil = 25 ÷ 40 = 62,5 %. Gehalt = 2.400 · 0,625 = 1.500 € brutto.' },
      en: { q: 'A full-time employee (40 h/week) earns €2,400 gross per month. What is the proportional gross salary of a part-time employee with 25 h/week in the same job?', e: 'Share = 25 ÷ 40 = 62.5%. Salary = 2,400 · 0.625 = €1,500 gross.' },
      hu: { q: 'Egy teljes munkaidős munkavállaló (heti 40 óra) havi 2400 € bruttót keres. Mennyi az arányos bruttó fizetése egy heti 25 órás részmunkaidősnek ugyanebben a munkakörben?', e: 'Arány = 25 ÷ 40 = 62,5%. Fizetés = 2400 · 0,625 = 1500 € bruttó.' },
    },
  ],
}
