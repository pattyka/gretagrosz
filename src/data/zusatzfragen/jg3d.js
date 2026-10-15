// Zusatzfragen 3. Jahrgang, Teil 4 (Format: siehe zusatzfragen/index.js)

export default {
  'finanzmanagement': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt die Finanzierung, bei der ein Unternehmen seine Gewinne einbehält, statt sie auszuschütten?', a: ['Selbstfinanzierung', 'offene Selbstfinanzierung'], e: 'Selbstfinanzierung = Innen- und Eigenfinanzierung. Offen: einbehaltene Gewinne; still: stille Reserven.' },
      en: { q: 'What is the type of financing called in which a company keeps its profits instead of paying them out?', a: ['self-financing', 'self financing', 'retained earnings'], e: 'Self-financing = internal equity financing. Open: retained profits; hidden: hidden reserves.' },
      hu: { q: 'Hogy hívják azt a finanszírozást, amelynél a vállalat visszatartja a nyereségét ahelyett, hogy kifizetné?', a: ['önfinanszírozás', 'nyílt önfinanszírozás'], e: 'Önfinanszírozás = belső és saját finanszírozás. Nyílt: visszatartott nyereség; rejtett: rejtett tartalékok.' },
    },
    {
      type: 'mc', level: 2, correctIndex: 2,
      de: { q: 'Bei welcher Crowdfunding-Form bekommt das Unternehmen Fremdkapital?', o: ['Donation-based', 'Reward-based', 'Lending-based', 'Equity-based'], e: 'Lending-based Crowdfunding = Kredit von vielen Geldgebern → Fremdkapital, muss zurückgezahlt werden. Equity = Beteiligung (Eigenkapital).' },
      en: { q: 'With which form of crowdfunding does the company receive debt capital?', o: ['Donation-based', 'Reward-based', 'Lending-based', 'Equity-based'], e: 'Lending-based crowdfunding = a loan from many lenders → debt capital that has to be repaid. Equity = a stake (equity capital).' },
      hu: { q: 'Melyik közösségi finanszírozási formánál kap a vállalat idegen tőkét?', o: ['Donation-based (adomány)', 'Reward-based (jutalom)', 'Lending-based (hitel)', 'Equity-based (részesedés)'], e: 'Lending-based = sok hitelezőtől kapott kölcsön → idegen tőke, vissza kell fizetni. Equity = részesedés (saját tőke).' },
    },
    {
      type: 'number', level: 3, value: 36, tol: 0.05, unit: { de: '%', en: '%', hu: '%' },
      de: { q: 'Ein Lieferant bietet Loopy: „Zahlbar in 30 Tagen, bei Zahlung innerhalb von 10 Tagen 2 % Skonto.“ Wie hoch ist der Skonto-Jahreszinssatz? (360 Tage)', e: 'Skonto-Jahreszins = Skonto % ÷ (Zahlungsziel − Skontofrist) × 360 = 2 ÷ (30 − 10) × 360 = 36 %. Daher lohnt sich sogar ein Kontokorrentkredit, um Skonto zu nutzen.' },
      en: { q: 'A supplier offers Loopy: "Payable in 30 days, 2% discount for payment within 10 days." What is the annual interest rate of the cash discount? (360 days)', e: 'Annual discount rate = discount % ÷ (payment term − discount period) × 360 = 2 ÷ (30 − 10) × 360 = 36%. So it is even worth taking an overdraft to use the discount.' },
      hu: { q: 'Egy beszállító ezt ajánlja Loopynak: „Fizetendő 30 napon belül, 10 napon belüli fizetésnél 2% skontó.” Mekkora a skontó éves kamatlába? (360 nap)', e: 'Skontó éves kamatlába = skontó % ÷ (fizetési határidő − skontóidő) × 360 = 2 ÷ (30 − 10) × 360 = 36%. Ezért még folyószámlahitel felvétele is megéri a skontó kihasználásához.' },
    },
  ],

  'finanzplan-analyse': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt die Regel, dass das Anlagevermögen durch Eigenkapital und langfristiges Fremdkapital gedeckt sein soll?', a: ['Goldene Bilanzregel', 'Goldene Regel', 'goldene Finanzierungsregel'], e: 'Goldene Bilanzregel: Anlagendeckung = (EK + langfr. FK) × 100 ÷ AV ≥ 100 %.' },
      en: { q: 'What is the rule called that fixed assets should be covered by equity and long-term debt?', a: ['golden balance sheet rule', 'golden rule', 'golden rule of financing'], e: 'Golden balance sheet rule: fixed asset coverage = (equity + long-term debt) × 100 ÷ fixed assets ≥ 100%.' },
      hu: { q: 'Hogy hívják azt a szabályt, hogy a befektetett eszközöket saját tőkének és hosszú lejáratú idegen tőkének kell fedeznie?', a: ['aranyszabály', 'arany mérlegszabály', 'arany finanszírozási szabály'], e: 'Arany mérlegszabály: befektetett eszközök fedezete = (saját tőke + hosszú lejáratú idegen tőke) × 100 ÷ befektetett eszközök ≥ 100%.' },
    },
    {
      type: 'number', level: 2, value: 30, tol: 0.05, unit: { de: '%', en: '%', hu: '%' },
      de: { q: 'Loopy hat 120.000 € Eigenkapital bei einem Gesamtkapital von 400.000 €. Wie hoch ist die Eigenkapitalquote?', e: 'EK-Quote = EK × 100 ÷ GK = 120.000 × 100 ÷ 400.000 = 30 %. Über 20 % gilt als gesund.' },
      en: { q: 'Loopy has €120,000 equity and total capital of €400,000. What is the equity ratio?', e: 'Equity ratio = equity × 100 ÷ total capital = 120,000 × 100 ÷ 400,000 = 30%. Above 20% counts as healthy.' },
      hu: { q: 'Loopynak 120 000 € saját tőkéje van, az összes tőke 400 000 €. Mekkora a saját tőke aránya?', e: 'Saját tőke aránya = saját tőke × 100 ÷ összes tőke = 120 000 × 100 ÷ 400 000 = 30%. 20% felett egészségesnek számít.' },
    },
    {
      type: 'number', level: 3, value: 5, tol: 0.05, unit: { de: 'Jahre', en: 'years', hu: 'év' },
      de: { q: 'Loopy hat 500.000 € Fremdkapital und 50.000 € Zahlungsmittel. Der operative Cashflow beträgt 90.000 € pro Jahr. Wie hoch ist die fiktive Schuldentilgungsdauer?', e: 'Fiktive Schuldentilgungsdauer = (FK − Zahlungsmittel) ÷ operativer Cashflow = (500.000 − 50.000) ÷ 90.000 = 5 Jahre.' },
      en: { q: 'Loopy has €500,000 debt capital and €50,000 cash. Operating cash flow is €90,000 per year. What is the notional debt repayment period?', e: 'Notional debt repayment period = (debt − cash) ÷ operating cash flow = (500,000 − 50,000) ÷ 90,000 = 5 years.' },
      hu: { q: 'Loopynak 500 000 € idegen tőkéje és 50 000 € pénzeszköze van. Az operatív cash flow évi 90 000 €. Mennyi a fiktív adósságtörlesztési idő?', e: 'Fiktív adósságtörlesztési idő = (idegen tőke − pénzeszközök) ÷ operatív cash flow = (500 000 − 50 000) ÷ 90 000 = 5 év.' },
    },
  ],

  'businessplan-3jg': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt die kurze Zusammenfassung ganz am Anfang des Businessplans? (englischer Begriff)', a: ['Executive Summary', 'Executive-Summary'], e: 'Die Executive Summary fasst den ganzen Businessplan auf 1–2 Seiten zusammen – Geldgeber lesen sie zuerst.' },
      en: { q: 'What is the short summary at the very beginning of a business plan called?', a: ['executive summary'], e: 'The executive summary sums up the whole business plan on 1–2 pages – investors read it first.' },
      hu: { q: 'Hogy hívják az üzleti terv legelején található rövid összefoglalót? (angol kifejezés)', a: ['Executive Summary', 'vezetői összefoglaló'], e: 'Az executive summary (vezetői összefoglaló) 1–2 oldalon foglalja össze az egész üzleti tervet – a befektetők ezt olvassák el először.' },
    },
    {
      type: 'number', level: 2, value: 30000, tol: 0, unit: { de: '€', en: '€', hu: '€' },
      de: { q: 'Loopy plant, 12.000 Packungen zu einem Nettoverkaufspreis von 2,50 € zu verkaufen. Wie hoch ist der Planumsatz?', e: 'Planumsatz = Nettoverkaufspreis × Absatzmenge = 2,50 × 12.000 = 30.000 €.' },
      en: { q: 'Loopy plans to sell 12,000 packs at a net selling price of €2.50. What is the planned turnover?', e: 'Planned turnover = net selling price × quantity sold = 2.50 × 12,000 = €30,000.' },
      hu: { q: 'Loopy 12 000 csomagot tervez eladni 2,50 € nettó eladási áron. Mennyi a tervezett árbevétel?', e: 'Tervezett árbevétel = nettó eladási ár × értékesített mennyiség = 2,50 × 12 000 = 30 000 €.' },
    },
    {
      type: 'number', level: 3, value: 150000, tol: 1, unit: { de: '€', en: '€', hu: '€' },
      de: { q: 'Loopys Planung: Umsatz 200.000 €, variable Kosten 120.000 €, Fixkosten 60.000 €. Wie hoch ist der Break-even-Umsatz?', e: 'DBU-Quote = (200.000 − 120.000) × 100 ÷ 200.000 = 40 %. Break-even-Umsatz = Fixkosten ÷ DBU-Quote = 60.000 ÷ 0,40 = 150.000 €.' },
      en: { q: 'Loopy\'s plan: turnover €200,000, variable costs €120,000, fixed costs €60,000. What is the break-even turnover?', e: 'Contribution margin ratio = (200,000 − 120,000) × 100 ÷ 200,000 = 40%. Break-even turnover = fixed costs ÷ CM ratio = 60,000 ÷ 0.40 = €150,000.' },
      hu: { q: 'Loopy terve: árbevétel 200 000 €, változó költségek 120 000 €, fix költségek 60 000 €. Mekkora a fedezeti pont árbevétele?', e: 'Fedezeti hányad = (200 000 − 120 000) × 100 ÷ 200 000 = 40%. Fedezeti pont árbevétele = fix költségek ÷ fedezeti hányad = 60 000 ÷ 0,40 = 150 000 €.' },
    },
  ],
}
