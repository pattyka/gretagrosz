// Zusatzfragen 2. Jahrgang, Teil 2 (Format: siehe zusatzfragen/index.js)
const PCT = { de: '%', en: '%', hu: '%' }

export default {
  'kaufvertraege-aussenhandel': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißen die international einheitlichen Lieferklauseln der Internationalen Handelskammer (ICC)?', a: ['Incoterms', 'Incoterm'], e: 'Die Incoterms regeln, wer Kosten und Risiko des Transports trägt – weltweit einheitlich.' },
      en: { q: 'What are the internationally standardised delivery terms of the International Chamber of Commerce (ICC) called?', a: ['Incoterms', 'Incoterm'], e: 'The Incoterms regulate who bears transport costs and risk – the same all over the world.' },
      hu: { q: 'Hogy hívják a Nemzetközi Kereskedelmi Kamara (ICC) nemzetközileg egységes szállítási záradékait?', a: ['Incoterms', 'Incoterm'], e: 'Az Incoterms szabályozza, ki viseli a szállítás költségét és kockázatát – világszerte egységesen.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Bei welcher Incoterms-Klausel trägt der Käufer alle Kosten und Risiken schon ab dem Werk des Verkäufers? (Kürzel mit 3 Buchstaben)', a: ['EXW', 'Ex Works', 'Ab Werk'], e: 'EXW (Ab Werk): Der Verkäufer stellt die Ware nur bereit – alles Weitere zahlt und riskiert der Käufer.' },
      en: { q: 'Under which Incoterm does the buyer bear all costs and risks from the seller\'s works onwards? (3-letter code)', a: ['EXW', 'Ex Works'], e: 'EXW (Ex Works): the seller only makes the goods available – the buyer pays for and bears the risk of everything else.' },
      hu: { q: 'Melyik Incoterms-záradéknál viseli a vevő minden költséget és kockázatot már az eladó gyárától? (3 betűs rövidítés)', a: ['EXW', 'Ex Works'], e: 'EXW (gyárból): az eladó csak rendelkezésre bocsátja az árut – minden mást a vevő fizet és kockáztat.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 2,
      de: { q: 'Loopy verkauft Pralinen nach Japan mit der Klausel DDP Tokio. Was bedeutet das für sie als Verkäuferin?', o: ['Der Käufer zahlt Transport und Einfuhrzoll', 'Sie trägt Kosten und Risiko nur bis zum Hafen in Europa', 'Sie trägt alle Kosten und Risiken bis Tokio – inklusive Einfuhrabgaben', 'Sie muss die Ware nur im Werk bereitstellen'], e: 'DDP (Delivered Duty Paid) ist das Gegenteil von EXW: Der Verkäufer trägt alles bis zum Bestimmungsort, sogar die Einfuhrabgaben.' },
      en: { q: 'Loopy sells chocolates to Japan under the term DDP Tokyo. What does this mean for her as the seller?', o: ['The buyer pays for transport and import duty', 'She bears costs and risk only up to the port in Europe', 'She bears all costs and risks up to Tokyo – including import duties', 'She only has to make the goods available at her works'], e: 'DDP (Delivered Duty Paid) is the opposite of EXW: the seller bears everything up to the destination, even the import duties.' },
      hu: { q: 'Loopy DDP Tokió záradékkal ad el bonbont Japánba. Mit jelent ez számára eladóként?', o: ['A vevő fizeti a szállítást és a behozatali vámot', 'Csak az európai kikötőig viseli a költséget és a kockázatot', 'Tokióig minden költséget és kockázatot visel – a behozatali terhekkel együtt', 'Csak a gyárában kell rendelkezésre bocsátania az árut'], e: 'A DDP (vámfizetéssel leszállítva) az EXW ellentéte: az eladó a rendeltetési helyig mindent visel, még a behozatali terheket is.' },
    },
  ],

  'grundlagen-leistungserstellung-2jg': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man das Verhältnis von mengenmäßigem Output zu mengenmäßigem Input?', a: ['Produktivität'], e: 'Produktivität = mengenmäßiger Output ÷ mengenmäßiger Input, z. B. Stück pro Arbeitsstunde.' },
      en: { q: 'What do you call the ratio of output quantity to input quantity?', a: ['productivity'], e: 'Productivity = output quantity ÷ input quantity, e.g. pieces per working hour.' },
      hu: { q: 'Hogyan nevezzük a mennyiségi output és a mennyiségi input arányát?', a: ['termelékenység', 'produktivitás'], e: 'Termelékenység = mennyiségi output ÷ mennyiségi input, pl. darab munkaóránként.' },
    },
    {
      type: 'number', level: 2, value: 85, tol: 0.01, unit: PCT,
      de: { q: 'Von 80 Aufträgen wurden 68 pünktlich geliefert. Wie hoch ist die Termintreue in %?', e: 'Termintreue = pünktliche Aufträge ÷ alle Aufträge · 100 = 68 ÷ 80 · 100 = 85 %.' },
      en: { q: 'Of 80 orders, 68 were delivered on time. What is the delivery reliability in %?', e: 'Delivery reliability = on-time orders ÷ all orders · 100 = 68 ÷ 80 · 100 = 85%.' },
      hu: { q: '80 megrendelésből 68-at szállítottak ki időben. Hány százalék a határidő-pontosság?', e: 'Határidő-pontosság = időben teljesített ÷ összes megrendelés · 100 = 68 ÷ 80 · 100 = 85%.' },
    },
    {
      type: 'number', level: 3, value: 15, tol: 0.01, unit: PCT,
      de: { q: 'Loopy erzielt Erlöse von 312.000 € bei Kosten von 288.000 €. Das eingesetzte Kapital beträgt 160.000 €. Berechne die Rentabilität in %.', e: 'Gewinn = 312.000 − 288.000 = 24.000 €. Rentabilität = 24.000 ÷ 160.000 · 100 = 15 %.' },
      en: { q: 'Loopy earns revenue of €312,000 with costs of €288,000. The capital employed is €160,000. Calculate the profitability in %.', e: 'Profit = 312,000 − 288,000 = €24,000. Profitability = 24,000 ÷ 160,000 · 100 = 15%.' },
      hu: { q: 'Loopy árbevétele 312 000 €, költségei 288 000 €. A befektetett tőke 160 000 €. Számítsd ki a jövedelmezőséget %-ban.', e: 'Nyereség = 312 000 − 288 000 = 24 000 €. Jövedelmezőség = 24 000 ÷ 160 000 · 100 = 15%.' },
    },
  ],

  'kunde-im-mittelpunkt': [
    {
      type: 'text', level: 1,
      de: { q: 'Wie nennt man den gesamten „Weg“ eines Kunden mit allen Kontaktpunkten vor, während und nach dem Kauf? (englischer Begriff)', a: ['Customer Journey', 'Kundenreise'], e: 'Die Customer Journey umfasst alle Touchpoints, an denen ein Kunde mit dem Unternehmen in Berührung kommt.' },
      en: { q: 'What do you call a customer\'s whole "path" with all touchpoints before, during and after a purchase?', a: ['customer journey'], e: 'The customer journey includes all touchpoints at which a customer comes into contact with the company.' },
      hu: { q: 'Hogyan nevezzük a vásárló teljes „útját” az összes kapcsolódási ponttal a vásárlás előtt, alatt és után?', a: ['vásárlói út', 'customer journey', 'ügyfélút'], e: 'A vásárlói út minden olyan kapcsolódási pontot magában foglal, ahol a vásárló kapcsolatba kerül a vállalattal.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie heißen die 4 Ps (Product, Price, Place, Promotion) zusammen?', a: ['Marketingmix', 'Marketing-Mix', 'Marketing Mix'], e: 'Die 4 Ps bilden zusammen den Marketingmix – sie müssen zueinander passen.' },
      en: { q: 'What are the 4 Ps (product, price, place, promotion) called together?', a: ['marketing mix', 'marketing-mix'], e: 'Together the 4 Ps form the marketing mix – they have to fit together.' },
      hu: { q: 'Hogyan nevezzük együtt a 4 P-t (termék, ár, értékesítés, kommunikáció)?', a: ['marketingmix', 'marketing mix', 'marketing-mix'], e: 'A 4 P együtt alkotja a marketingmixet – illeszkedniük kell egymáshoz.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 0,
      de: { q: 'Loopy entwickelt EIN Angebot (vegane Pralinen) und richtet ihr ganzes Marketing nur auf die Zielgruppe der Veganer:innen aus. Welche Marktbearbeitung ist das?', o: ['Konzentrierte Marktbearbeitung', 'Differenzierte Marktbearbeitung', 'Undifferenzierte Marktbearbeitung', 'Massenmarketing'], e: 'Konzentriert = ein Segment mit einem passenden Angebot. Differenziert = mehrere Segmente mit jeweils eigenem Angebot. Undifferenziert = ein Angebot für alle.' },
      en: { q: 'Loopy develops ONE offer (vegan chocolates) and aims all her marketing only at vegans. Which market approach is this?', o: ['Concentrated marketing', 'Differentiated marketing', 'Undifferentiated marketing', 'Mass marketing'], e: 'Concentrated = one segment with a suitable offer. Differentiated = several segments, each with its own offer. Undifferentiated = one offer for everyone.' },
      hu: { q: 'Loopy EGY ajánlatot fejleszt (vegán bonbon), és egész marketingjét csak a vegánokra irányítja. Milyen piacfeldolgozásról van szó?', o: ['Koncentrált piacfeldolgozás', 'Differenciált piacfeldolgozás', 'Differenciálatlan piacfeldolgozás', 'Tömegmarketing'], e: 'Koncentrált = egy szegmens egy hozzá illő ajánlattal. Differenciált = több szegmens, mindegyik saját ajánlattal. Differenciálatlan = egy ajánlat mindenkinek.' },
    },
  ],

  marktforschung: [
    {
      type: 'text', level: 1,
      de: { q: 'Wie heißt Marktforschung, bei der bereits vorhandene Daten ausgewertet werden?', a: ['Sekundärforschung', 'Sekundärmarktforschung', 'Sekundärerhebung', 'Desk Research'], e: 'Sekundärforschung nutzt vorhandene Daten (z. B. Statistiken), Primärforschung erhebt neue Daten.' },
      en: { q: 'What do you call market research that analyses data that already exists?', a: ['secondary research', 'secondary market research', 'desk research'], e: 'Secondary research uses existing data (e.g. statistics); primary research collects new data.' },
      hu: { q: 'Hogyan nevezzük azt a piackutatást, amely már meglévő adatokat értékel ki?', a: ['szekunder kutatás', 'másodlagos kutatás', 'szekunder piackutatás', 'desk research'], e: 'A szekunder kutatás meglévő adatokat használ (pl. statisztikák), a primer kutatás új adatokat gyűjt.' },
    },
    {
      type: 'text', level: 2,
      de: { q: 'Wie nennt man eine gleichbleibende Gruppe von Personen, die über längere Zeit regelmäßig zum selben Thema befragt wird?', a: ['Panel', 'Panelerhebung', 'Panelbefragung'], e: 'Ein Panel zeigt, wie sich Meinungen oder Verhalten derselben Personen über die Zeit verändern.' },
      en: { q: 'What do you call a fixed group of people who are asked about the same topic regularly over a long period?', a: ['panel', 'panel survey'], e: 'A panel shows how opinions or behaviour of the same people change over time.' },
      hu: { q: 'Hogyan nevezzük az állandó személyekből álló csoportot, amelyet hosszabb ideig rendszeresen ugyanarról a témáról kérdeznek?', a: ['panel', 'panelvizsgálat', 'panel felmérés'], e: 'A panel megmutatja, hogyan változik ugyanazon személyek véleménye vagy viselkedése az idő során.' },
    },
    {
      type: 'mc', level: 3, correctIndex: 1,
      de: { q: 'Loopy testet eine neue Verpackung zuerst in 3 ausgewählten Filialen unter echten Verkaufsbedingungen, bevor sie sie überall einführt. Welche Methode ist das?', o: ['Produkttest', 'Storetest', 'Panelerhebung', 'Vollerhebung'], e: 'Beim Storetest wird ein Produkt in ausgewählten Geschäften unter echten Bedingungen getestet. Ein Produkttest prüft das Produkt selbst (z. B. Geschmack), meist mit Testpersonen.' },
      en: { q: 'Loopy first tests a new packaging in 3 selected branches under real sales conditions before introducing it everywhere. Which method is this?', o: ['Product test', 'Store test', 'Panel survey', 'Full survey'], e: 'In a store test a product is tested in selected shops under real conditions. A product test checks the product itself (e.g. taste), usually with test persons.' },
      hu: { q: 'Loopy egy új csomagolást először 3 kiválasztott fióküzletben, valós eladási körülmények között tesztel, mielőtt mindenhol bevezetné. Milyen módszer ez?', o: ['Termékteszt', 'Üzletteszt (storetest)', 'Panelvizsgálat', 'Teljes körű felmérés'], e: 'Üzlettesztnél egy terméket kiválasztott üzletekben, valós körülmények között tesztelnek. A termékteszt magát a terméket vizsgálja (pl. ízt), többnyire tesztszemélyekkel.' },
    },
  ],
}
