// Zusatzfragen 3. Jahrgang, Teil 2 (Format: siehe zusatzfragen/index.js)

export default {
  'personalbedarfsplanung': [
    {
      type: 'text', level: 1,
      de: { q: 'Bei welchem Sozialversicherungsträger muss ein neuer Mitarbeiter angemeldet werden? (Abkürzung)', a: ['ÖGK', 'Österreichische Gesundheitskasse', 'OEGK'], e: 'Neue Mitarbeiter werden vor Arbeitsbeginn bei der ÖGK (Österreichische Gesundheitskasse) angemeldet; zusätzlich gibt es einen Dienstzettel.' },
      en: { q: 'With which social insurance institution must a new employee be registered in Austria? (Abbreviation)', a: ['ÖGK', 'OEGK', 'Austrian Health Insurance Fund'], e: 'New employees are registered with the ÖGK (Austrian Health Insurance Fund) before they start; they also receive a Dienstzettel (written statement of terms).' },
      hu: { q: 'Melyik társadalombiztosítási intézménynél kell Ausztriában bejelenteni egy új munkatársat? (Rövidítés)', a: ['ÖGK', 'OEGK', 'Osztrák Egészségpénztár'], e: 'Az új munkatársakat a munka megkezdése előtt be kell jelenteni az ÖGK-nál (Osztrák Egészségpénztár); emellett Dienstzettelt (írásos munkaszerződési kivonatot) kapnak.' },
    },
    {
      type: 'mc', level: 2, correctIndex: 2,
      de: { q: 'Eine Mitarbeiterin lernt neue Software in einem Abendkurs außerhalb des Betriebs. Welche PE-Methode ist das?', o: ['Into the Job', 'On the Job', 'Off the Job', 'Out of the Job'], e: 'Off the Job = Weiterbildung außerhalb des Arbeitsplatzes (Kurse, Seminare). Into = Einarbeitung, On = am Arbeitsplatz, Out of = Ruhestandsvorbereitung.' },
      en: { q: 'An employee learns new software in an evening course outside the company. Which staff development method is this?', o: ['Into the job', 'On the job', 'Off the job', 'Out of the job'], e: 'Off the job = training away from the workplace (courses, seminars). Into = induction, on = at the workplace, out of = preparing for retirement.' },
      hu: { q: 'Egy munkatárs esti tanfolyamon, a vállalaton kívül tanul új szoftvert. Melyik személyzetfejlesztési módszer ez?', o: ['Into the job', 'On the job', 'Off the job', 'Out of the job'], e: 'Off the job = képzés a munkahelyen kívül (tanfolyamok, szemináriumok). Into = betanítás, on = munkahelyen, out of = nyugdíjra való felkészítés.' },
    },
    {
      type: 'number', level: 3, value: 750, tol: 0.5, unit: { de: '€', en: '€', hu: '€' },
      de: { q: 'Loopy zahlt einer Mitarbeiterin 3.500 € brutto, 14-mal im Jahr. Wie viel zahlt Loopy pro Jahr in die Mitarbeitervorsorgekasse (1,53 %)? (auf ganze € runden)', e: 'Jahresbrutto = 3.500 × 14 = 49.000 €. Abfertigung neu: 49.000 × 1,53 % = 749,70 € ≈ 750 €.' },
      en: { q: 'Loopy pays an employee €3,500 gross, 14 times a year. How much does Loopy pay into the employee severance fund (1.53%) per year? (round to whole €)', e: 'Annual gross = 3,500 × 14 = €49,000. Severance fund: 49,000 × 1.53% = €749.70 ≈ €750.' },
      hu: { q: 'Loopy egy munkatársnak bruttó 3500 €-t fizet, évente 14-szer. Mennyit fizet Loopy évente a munkavállalói végkielégítési pénztárba (1,53%)? (egész €-ra kerekítve)', e: 'Éves bruttó = 3500 × 14 = 49 000 €. Végkielégítési pénztár: 49 000 × 1,53% = 749,70 € ≈ 750 €.' },
    },
  ],

  'personaleinsatzgestaltung': [
    {
      type: 'number', level: 1, value: 25, tol: 0, unit: { de: 'Arbeitstage', en: 'working days', hu: 'munkanap' },
      de: { q: 'Wie viele Arbeitstage Urlaub stehen einem Arbeitnehmer in Österreich pro Jahr zu (Grundanspruch)?', e: '25 Arbeitstage (5 Wochen); nach 25 Dienstjahren 30 Arbeitstage (6 Wochen).' },
      en: { q: 'How many working days of holiday is an employee in Austria entitled to per year (basic entitlement)?', e: '25 working days (5 weeks); after 25 years of service 30 working days (6 weeks).' },
      hu: { q: 'Hány munkanap szabadság jár egy munkavállalónak Ausztriában évente (alapjogosultság)?', e: '25 munkanap (5 hét); 25 év szolgálat után 30 munkanap (6 hét).' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Ein Mitarbeiter bekommt zusätzlich Planungs- und Kontrollaufgaben, also mehr Verantwortung. Wie heißt diese Maßnahme?', a: ['Jobenrichment', 'Job Enrichment', 'Job-Enrichment', 'Arbeitsbereicherung'], e: 'Jobenrichment = qualitative Erweiterung (mehr Verantwortung). Jobenlargement = mehr Aufgaben mit gleicher Anforderung. Jobrotation = Arbeitsplatzwechsel.' },
      en: { q: 'An employee is additionally given planning and control tasks, i.e. more responsibility. What is this measure called?', a: ['job enrichment', 'jobenrichment'], e: 'Job enrichment = qualitative expansion (more responsibility). Job enlargement = more tasks at the same level. Job rotation = changing workplaces.' },
      hu: { q: 'Egy munkatárs tervezési és ellenőrzési feladatokat is kap, vagyis több felelősséget. Hogy hívják ezt az intézkedést?', a: ['munkagazdagítás', 'job enrichment', 'jobenrichment'], e: 'Munkagazdagítás (job enrichment) = minőségi bővítés (több felelősség). Munkakörbővítés (job enlargement) = több azonos szintű feladat. Munkakör-rotáció = munkahelyváltás.' },
    },
    {
      type: 'number', level: 3, value: 165, tol: 0.01, unit: { de: '€', en: '€', hu: '€' },
      de: { q: 'Ein Angestellter hat einen Stundenlohn von 22 € und macht 5 Überstunden mit 50 % Zuschlag. Wie viel € bekommt er für die Überstunden insgesamt?', e: 'Überstundenlohn = 22 × 1,5 = 33 € pro Stunde. 5 × 33 = 165 €.' },
      en: { q: 'An employee earns €22 per hour and works 5 hours of overtime with a 50% surcharge. How much does he get for the overtime in total?', e: 'Overtime rate = 22 × 1.5 = €33 per hour. 5 × 33 = €165.' },
      hu: { q: 'Egy alkalmazott órabére 22 €, és 5 túlórát dolgozik 50%-os pótlékkal. Összesen hány €-t kap a túlórákért?', e: 'Túlóradíj = 22 × 1,5 = 33 € óránként. 5 × 33 = 165 €.' },
    },
  ],

  'personalbeurteilung': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt eine Beurteilung, bei der Vorgesetzte, Kollegen, Mitarbeiter und man selbst Feedback geben?', a: ['360°-Feedback', '360-Grad-Feedback', '360 Grad Feedback', '360°', '360 Feedback'], e: 'Beim 360°-Feedback beurteilen Personen aus allen Richtungen – oben, gleichrangig, unten und man selbst.' },
      en: { q: 'What is an appraisal called in which managers, colleagues, staff and you yourself give feedback?', a: ['360° feedback', '360 degree feedback', '360-degree feedback', '360 feedback', '360°'], e: 'In 360° feedback people from all directions give an assessment – above, same level, below and yourself.' },
      hu: { q: 'Hogy hívják azt az értékelést, amelyben a felettesek, kollégák, beosztottak és saját magunk is visszajelzést adunk?', a: ['360°-os visszajelzés', '360 fokos visszajelzés', '360°', '360 feedback', '360°-feedback'], e: 'A 360°-os visszajelzésnél minden irányból értékelnek – felülről, azonos szintről, alulról és saját magunk.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Ein Chef bewertet eine Mitarbeiterin nur nach ihrer letzten, sehr guten Woche. Wie heißt dieser Beurteilungsfehler?', a: ['Recency-Effekt', 'Recency Effekt', 'Recency-Effect', 'Nikolaus-Effekt', 'Nikolauseffekt'], e: 'Recency-Effekt: Die jüngsten Ereignisse überlagern den ganzen Beurteilungszeitraum.' },
      en: { q: 'A manager rates an employee only on her last, very good week. What is this appraisal error called?', a: ['recency effect', 'recency bias'], e: 'Recency effect: the most recent events outweigh the whole appraisal period.' },
      hu: { q: 'Egy főnök egy munkatársat csak az utolsó, nagyon jó hete alapján értékel. Hogy hívják ezt az értékelési hibát?', a: ['recency-hatás', 'recency hatás', 'frissességi hatás', 'recency effect'], e: 'Recency-hatás: a legutóbbi események elnyomják a teljes értékelési időszakot.' },
    },
    {
      type: 'number', level: 3, value: 32, tol: 0.05, unit: { de: '%', en: '%', hu: '%' },
      de: { q: 'Loopys Fabrik hat Personalkosten von 416.000 € bei einer Betriebsleistung von 1.300.000 €. Wie hoch ist die Personalintensität in %?', e: 'Personalintensität = Personalkosten × 100 ÷ Betriebsleistung = 416.000 × 100 ÷ 1.300.000 = 32 %.' },
      en: { q: 'Loopy\'s factory has staff costs of €416,000 and an operating output of €1,300,000. What is the personnel intensity in %?', e: 'Personnel intensity = staff costs × 100 ÷ operating output = 416,000 × 100 ÷ 1,300,000 = 32%.' },
      hu: { q: 'Loopy gyárának személyi költségei 416 000 €, üzemi teljesítménye 1 300 000 €. Mekkora a személyi intenzitás %-ban?', e: 'Személyi intenzitás = személyi költségek × 100 ÷ üzemi teljesítmény = 416 000 × 100 ÷ 1 300 000 = 32%.' },
    },
  ],

  'produktionsbetriebe': [
    {
      type: 'text', level: 1,
      de: { q: 'Zu welchem Wirtschaftssektor gehören Produktionsbetriebe? (primär, sekundär oder tertiär)', a: ['sekundär', 'sekundärer Sektor', 'sekundaer', 'Sekundärsektor'], e: 'Produktionsbetriebe (Industrie, Gewerbe) gehören zum sekundären Sektor – rund 28 % des BIP und etwa 70 % der Exporte.' },
      en: { q: 'Which economic sector do production companies belong to? (primary, secondary or tertiary)', a: ['secondary', 'secondary sector'], e: 'Production companies (industry, trade) belong to the secondary sector – about 28% of GDP and around 70% of exports.' },
      hu: { q: 'Melyik gazdasági szektorhoz tartoznak a termelő vállalatok? (primer, szekunder vagy tercier)', a: ['szekunder', 'szekunder szektor', 'másodlagos', 'ipar'], e: 'A termelő vállalatok (ipar, kisipar) a szekunder szektorhoz tartoznak – a GDP kb. 28%-a és az export kb. 70%-a.' },
    },
    {
      type: 'mc', level: 2, correctIndex: 0,
      de: { q: 'Welches Merkmal passt zur Industrie, nicht zum Gewerbe?', o: ['Anlagenintensiv und stark automatisiert', 'Der Inhaber arbeitet selbst mit', 'Arbeitsintensive Einzelanfertigung', 'Wenige Mitarbeiter, kleine Stückzahlen'], e: 'Industrie: anlagenintensiv, Management, groß, automatisiert, Massenfertigung. Gewerbe: arbeitsintensiv, Inhaber, klein.' },
      en: { q: 'Which feature belongs to industry rather than to a trade business?', o: ['Capital-intensive and highly automated', 'The owner works alongside the staff', 'Labour-intensive one-off production', 'Few employees, small quantities'], e: 'Industry: capital-intensive, managers, large, automated, mass production. Trade: labour-intensive, owner-run, small.' },
      hu: { q: 'Melyik jellemző illik az iparhoz, és nem a kisiparhoz?', o: ['Eszközigényes és erősen automatizált', 'A tulajdonos maga is dolgozik', 'Munkaigényes egyedi gyártás', 'Kevés munkatárs, kis darabszám'], e: 'Ipar: eszközigényes, menedzsment, nagy, automatizált, tömeggyártás. Kisipar: munkaigényes, tulajdonos vezeti, kicsi.' },
    },
    {
      type: 'number', level: 3, value: 0.75, tol: 0.005, unit: { de: '€', en: '€', hu: '€' },
      de: { q: 'Loopys Fabrik hat 60.000 € Fixkosten im Monat. Statt 40.000 werden jetzt 80.000 Packungen erzeugt. Um wie viel € sinken die Fixkosten pro Packung? (auf 2 Kommastellen)', e: 'Fixkostendegression: vorher 60.000 ÷ 40.000 = 1,50 €, nachher 60.000 ÷ 80.000 = 0,75 €. Die Fixkosten pro Stück sinken um 0,75 €.' },
      en: { q: 'Loopy\'s factory has fixed costs of €60,000 a month. Instead of 40,000 it now produces 80,000 packs. By how many € do the fixed costs per pack fall? (2 decimal places)', e: 'Fixed cost degression: before 60,000 ÷ 40,000 = €1.50, afterwards 60,000 ÷ 80,000 = €0.75. Fixed costs per unit fall by €0.75.' },
      hu: { q: 'Loopy gyárának havi fix költsége 60 000 €. 40 000 helyett most 80 000 csomagot gyártanak. Hány €-val csökken a csomagonkénti fix költség? (2 tizedesjegyre)', e: 'Fixköltség-degresszió: előtte 60 000 ÷ 40 000 = 1,50 €, utána 60 000 ÷ 80 000 = 0,75 €. Az egy darabra jutó fix költség 0,75 €-val csökken.' },
    },
  ],
}
