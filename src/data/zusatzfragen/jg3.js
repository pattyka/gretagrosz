// Zusatzfragen 3. Jahrgang, Teil 1 (Format: siehe zusatzfragen/index.js)

export default {
  'unternehmensfuehrung-ueberblick': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt die oberste Führungsebene eines Unternehmens (z. B. Geschäftsführung)? (englischer Begriff)', a: ['Topmanagement', 'Top-Management', 'Top Management'], e: 'Topmanagement (Geschäftsführung) → Middle Management (Abteilungsleitung) → Lower Management (Team-/Gruppenleitung).' },
      en: { q: 'What is the highest management level of a company called (e.g. the managing directors)?', a: ['top management'], e: 'Top management (managing directors) → middle management (heads of department) → lower management (team leaders).' },
      hu: { q: 'Hogy hívják egy vállalat legfelső vezetési szintjét (pl. ügyvezetés)?', a: ['felső vezetés', 'topmenedzsment', 'top management'], e: 'Felső vezetés (ügyvezetés) → középvezetés (osztályvezetés) → alsó vezetés (csapatvezetés).' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wofür steht die Abkürzung CEO?', a: ['Chief Executive Officer', 'Geschäftsführer', 'Geschäftsführerin'], e: 'CEO = Chief Executive Officer (Geschäftsführung). CSO = Vertriebsleitung, COO = laufender Geschäftsbetrieb.' },
      en: { q: 'What does the abbreviation CEO stand for?', a: ['Chief Executive Officer'], e: 'CEO = Chief Executive Officer. CSO = Chief Sales Officer, COO = Chief Operating Officer.' },
      hu: { q: 'Mit jelent a CEO rövidítés?', a: ['Chief Executive Officer', 'vezérigazgató', 'ügyvezető'], e: 'CEO = Chief Executive Officer (vezérigazgató). CSO = értékesítési vezető, COO = operatív vezető.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 3,
      de: { q: 'Welche Zuordnung von Managementebene und Aufgabe ist richtig?', o: ['Normativ – tägliche Schichteinteilung', 'Operativ – Unternehmensvision festlegen', 'Strategisch – Werte und Leitbild formulieren', 'Strategisch – langfristige Unternehmensstrategie planen'], e: 'Normativ = Vision, Werte, Leitbild. Strategisch = langfristige Strategien. Operativ = konkrete Umsetzung im Alltag.' },
      en: { q: 'Which pairing of management level and task is correct?', o: ['Normative – daily shift planning', 'Operational – setting the company vision', 'Strategic – writing values and the mission statement', 'Strategic – planning the long-term company strategy'], e: 'Normative = vision, values, mission statement. Strategic = long-term strategies. Operational = concrete implementation day to day.' },
      hu: { q: 'Melyik párosítás helyes a menedzsmentszint és a feladat között?', o: ['Normatív – napi műszakbeosztás', 'Operatív – a vállalati vízió meghatározása', 'Stratégiai – értékek és küldetésnyilatkozat megfogalmazása', 'Stratégiai – a hosszú távú vállalati stratégia megtervezése'], e: 'Normatív = vízió, értékek, küldetésnyilatkozat. Stratégiai = hosszú távú stratégiák. Operatív = konkrét megvalósítás a mindennapokban.' },
    },
  ],

  'normatives-management': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man die freiwillige Verantwortung eines Unternehmens für Gesellschaft und Umwelt? (Abkürzung)', a: ['CSR', 'Corporate Social Responsibility'], e: 'CSR = Corporate Social Responsibility – Werte müssen sich in konkreten Maßnahmen zeigen.' },
      en: { q: 'What do you call a company\'s voluntary responsibility for society and the environment? (Abbreviation)', a: ['CSR', 'corporate social responsibility'], e: 'CSR = corporate social responsibility – values must show in concrete actions.' },
      hu: { q: 'Hogyan nevezzük a vállalat önkéntes felelősségvállalását a társadalom és a környezet iránt? (Rövidítés)', a: ['CSR', 'vállalati társadalmi felelősségvállalás'], e: 'CSR = vállalati társadalmi felelősségvállalás – az értékeknek konkrét intézkedésekben kell megmutatkozniuk.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Nach welcher Formel sollen Ziele formuliert werden – spezifisch, messbar, attraktiv, realistisch, terminiert?', a: ['SMART', 'SMART-Formel'], e: 'SMART-Ziele sind spezifisch, messbar, attraktiv, realistisch und terminiert.' },
      en: { q: 'Which formula should goals follow – specific, measurable, attractive, realistic, time-bound?', a: ['SMART', 'SMART formula'], e: 'SMART goals are specific, measurable, attractive, realistic and time-bound.' },
      hu: { q: 'Melyik képlet szerint kell a célokat megfogalmazni – specifikus, mérhető, vonzó, reális, határidős?', a: ['SMART', 'SMART-képlet'], e: 'A SMART célok specifikusak, mérhetők, vonzók, reálisak és határidősek.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 2,
      de: { q: 'Ein Unternehmen will gleichzeitig die Personalkosten senken und alle Arbeitsplätze sichern. Welche Zielbeziehung liegt vor?', o: ['Zielneutralität', 'Zielkomplementarität', 'Zielkonflikt', 'Zielharmonie durch Operationalisierung'], e: 'Personalkosten senken erschwert es, alle Arbeitsplätze zu halten – die Ziele behindern einander: Zielkonflikt (Zielkonkurrenz).' },
      en: { q: 'A company wants to cut staff costs and secure all jobs at the same time. What relationship between the goals is this?', o: ['Goal neutrality', 'Goal complementarity', 'Goal conflict', 'Goal harmony through operationalisation'], e: 'Cutting staff costs makes it harder to keep all jobs – the goals hinder each other: goal conflict.' },
      hu: { q: 'Egy vállalat egyszerre szeretné csökkenteni a személyi költségeket és megtartani az összes munkahelyet. Milyen célkapcsolatról van szó?', o: ['Célsemlegesség', 'Célkomplementaritás', 'Célkonfliktus', 'Célharmónia operacionalizálás révén'], e: 'A személyi költségek csökkentése megnehezíti az összes munkahely megtartását – a célok akadályozzák egymást: célkonfliktus.' },
    },
  ],

  'strategisches-operatives-management': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt die Analyse, die Stärken, Schwächen, Chancen und Risiken zusammenführt?', a: ['SWOT-Analyse', 'SWOT', 'SWOT Analyse'], e: 'SWOT = Strengths, Weaknesses (intern), Opportunities, Threats (extern).' },
      en: { q: 'What is the analysis called that brings together strengths, weaknesses, opportunities and threats?', a: ['SWOT analysis', 'SWOT'], e: 'SWOT = strengths, weaknesses (internal), opportunities, threats (external).' },
      hu: { q: 'Hogy hívják azt az elemzést, amely összekapcsolja az erősségeket, gyengeségeket, lehetőségeket és veszélyeket?', a: ['SWOT-elemzés', 'SWOT', 'SWOT elemzés'], e: 'SWOT = erősségek, gyengeségek (belső), lehetőségek, veszélyek (külső).' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie heißt der Kreislauf zur ständigen Verbesserung mit den Schritten Plan – Do – Check – Act?', a: ['PDCA', 'PDCA-Zyklus', 'Deming-Kreis', 'Demingkreis'], e: 'Der PDCA-Zyklus (Deming-Kreis): Plan (Ziele), Do (umsetzen), Check (kontrollieren), Act (anpassen).' },
      en: { q: 'What is the cycle for continuous improvement with the steps plan – do – check – act called?', a: ['PDCA', 'PDCA cycle', 'Deming cycle'], e: 'The PDCA cycle (Deming cycle): plan (goals), do (implement), check (monitor), act (adjust).' },
      hu: { q: 'Hogy hívják a folyamatos fejlesztés körforgását a Plan – Do – Check – Act lépésekkel?', a: ['PDCA', 'PDCA-ciklus', 'Deming-kör', 'Deming kör'], e: 'A PDCA-ciklus (Deming-kör): Plan (célok), Do (megvalósítás), Check (ellenőrzés), Act (kiigazítás).' },
    },
    {
      type: 'number', level: 3, value: 2.5, tol: 0.01, unit: null,
      de: { q: 'Loopys Marktanteil bei Fruchtbonbons beträgt 15 %, der stärkste Konkurrent hält 6 %. Wie hoch ist der relative Marktanteil? (auf 1 Kommastelle)', e: 'Relativer Marktanteil = eigener Marktanteil ÷ Marktanteil des stärksten Konkurrenten = 15 ÷ 6 = 2,5. Werte über 1 bedeuten Marktführerschaft.' },
      en: { q: 'Loopy\'s market share for fruit sweets is 15%, the strongest competitor holds 6%. What is the relative market share? (1 decimal place)', e: 'Relative market share = own market share ÷ market share of the strongest competitor = 15 ÷ 6 = 2.5. Values above 1 mean market leadership.' },
      hu: { q: 'Loopy piaci részesedése a gyümölcsös cukorkáknál 15%, a legerősebb versenytársé 6%. Mekkora a relatív piaci részesedés? (1 tizedesjegyre)', e: 'Relatív piaci részesedés = saját részesedés ÷ a legerősebb versenytárs részesedése = 15 ÷ 6 = 2,5. Az 1 feletti érték piacvezetést jelent.' },
    },
  ],

  'organisieren-und-fuehren': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man die grafische Darstellung der Aufbauorganisation eines Unternehmens?', a: ['Organigramm', 'Organisationsplan'], e: 'Das Organigramm zeigt Stellen, Abteilungen und Weisungswege eines Unternehmens.' },
      en: { q: 'What do you call the graphic picture of a company\'s organisational structure?', a: ['organisation chart', 'organization chart', 'organigram', 'org chart'], e: 'The organisation chart shows positions, departments and chains of command in a company.' },
      hu: { q: 'Hogyan nevezzük egy vállalat szervezeti felépítésének grafikus ábrázolását?', a: ['szervezeti ábra', 'organigram', 'organigramm'], e: 'A szervezeti ábra mutatja a munkaköröket, osztályokat és utasítási utakat.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie nennt man eine Stelle, die die Leitung berät und unterstützt, aber keine Weisungsbefugnis hat (z. B. Assistenz, Controlling)?', a: ['Stabsstelle', 'Stabstelle', 'Stab'], e: 'Stabsstellen beraten und unterstützen – Weisungen erteilen dürfen sie nicht.' },
      en: { q: 'What do you call a position that advises and supports management but has no authority to give instructions (e.g. assistant, controlling)?', a: ['staff position', 'staff function', 'staff unit'], e: 'Staff positions advise and support – they may not give instructions.' },
      hu: { q: 'Hogyan nevezzük azt a munkakört, amely tanácsot ad és támogatja a vezetést, de nincs utasítási joga (pl. asszisztens, kontrolling)?', a: ['törzskari munkakör', 'törzskar', 'stáb'], e: 'A törzskari munkakörök tanácsot adnak és támogatnak – utasítást nem adhatnak.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 1,
      de: { q: 'Eine neue Mitarbeiterin ist motiviert, kann die Aufgabe aber noch nicht. Welcher Führungsstil passt laut Reifegradmodell (Hersey/Blanchard) am besten?', o: ['Delegating – Aufgaben ohne Erklärung übergeben', 'Selling – Aufgaben erklären und überzeugen', 'Participating – an Entscheidungen beteiligen', 'Laissez-faire – gar nicht eingreifen'], e: 'Geringe Fähigkeit, aber Motivation = geringe bis mittlere Reife → Selling: Aufgaben erklären, stark mitarbeiterbezogen führen.' },
      en: { q: 'A new employee is motivated but cannot do the task yet. According to the maturity model (Hersey/Blanchard), which leadership style fits best?', o: ['Delegating – hand over tasks without explanation', 'Selling – explain tasks and convince', 'Participating – involve in decisions', 'Laissez-faire – don\'t step in at all'], e: 'Low ability but motivated = low to medium maturity → selling: explain tasks, lead in a strongly people-focused way.' },
      hu: { q: 'Egy új munkatárs motivált, de még nem tudja elvégezni a feladatot. Az érettségi modell (Hersey/Blanchard) szerint melyik vezetési stílus illik hozzá legjobban?', o: ['Delegating – feladatok átadása magyarázat nélkül', 'Selling – a feladatok elmagyarázása és meggyőzés', 'Participating – bevonás a döntésekbe', 'Laissez-faire – egyáltalán nem beavatkozni'], e: 'Alacsony képesség, de motiváció = alacsony–közepes érettség → selling: a feladatok elmagyarázása, erősen emberközpontú vezetés.' },
    },
  ],
}
