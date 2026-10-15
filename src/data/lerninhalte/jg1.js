// Lerninhalte 1. Jahrgang (siehe ../lerninhalte.js für die Block-Typen)

export default {
  'grundlagen-des-wirtschaftens': {
    schritte: [
      {
        titel: 'Bedürfnisse',
        blocks: [
          {
            type: 'text',
            text: 'Alles in der Wirtschaft beginnt mit einer Frage: Was fehlt mir gerade?',
          },
          {
            type: 'begriff',
            term: 'Bedürfnis',
            erklaerung: 'Du merkst, dass dir etwas fehlt, und willst das ändern.',
            beispiel: 'Du hast Durst → du willst etwas trinken.',
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'Mangelgefühl (Bedürfnis)', wert: 'Durst' },
              { titel: 'Bedürfnisbeseitigung', wert: 'trinken' },
              { titel: 'Mittel dazu', wert: 'Wasser' },
            ],
          },
          {
            type: 'text',
            text: 'Die Maslowsche Bedürfnispyramide ordnet Bedürfnisse danach, wie dringend sie sind. Zuerst wird die unterste Stufe erfüllt, dann die nächste.',
          },
          {
            type: 'pyramide',
            stufen: [
              { name: 'Selbstverwirklichung', beispiel: 'Talente entfalten, Traumberuf' },
              { name: 'Anerkennung', beispiel: 'Lob, Erfolg, Karriere' },
              { name: 'Soziale Bedürfnisse', beispiel: 'Freunde, Familie, Partnerschaft' },
              { name: 'Sicherheit', beispiel: 'Gesundheit, sicherer Job, Geld' },
              { name: 'Grundbedürfnisse', beispiel: 'Essen, Trinken, Schlafen' },
            ],
          },
          {
            type: 'begriff',
            term: 'Grundbedürfnisse (Existenzbedürfnisse)',
            erklaerung: 'Brauchst du zum Überleben. Sie heißen auch Primärbedürfnisse.',
            beispiel: 'Essen, Trinken, Kleidung, Wohnen',
          },
          {
            type: 'begriff',
            term: 'Kulturbedürfnisse',
            erklaerung: 'Machen das Leben angenehm und fördern den Geist. Nicht lebensnotwendig.',
            beispiel: 'Bildung, Urlaub, Sport, Kino',
          },
          {
            type: 'begriff',
            term: 'Luxusbedürfnisse',
            erklaerung: 'Teure Dinge, die zeigen, dass man sich viel leisten kann (sozialer Status).',
            beispiel: 'Sportwagen, Villa, Weltreise',
          },
          {
            type: 'merke',
            text: 'Kultur- und Luxusbedürfnisse zusammen nennt man Sekundärbedürfnisse.',
          },
        ],
      },
      {
        titel: 'Güter',
        blocks: [
          {
            type: 'begriff',
            term: 'Güter',
            erklaerung: 'Alles, womit wir Bedürfnisse befriedigen. Anderes Wort: Produkte.',
          },
          { type: 'text', text: 'Güter kann man auf drei Arten einteilen:' },
          {
            type: 'vergleich',
            frage: '1. Kostet es etwas?',
            links: {
              titel: 'Freie Güter',
              punkte: ['Gibt es unbegrenzt in der Natur', 'Meist kostenlos', 'z. B. Luft, Sonnenlicht'],
            },
            rechts: {
              titel: 'Wirtschaftsgüter',
              punkte: ['Sind knapp', 'Kosten Geld – je knapper, desto teurer', 'z. B. Kakao, Erdöl'],
            },
          },
          {
            type: 'vergleich',
            frage: '2. Kann man es angreifen?',
            links: {
              titel: 'Sachgüter (materiell)',
              punkte: ['Kann man angreifen', 'Kann man lagern und transportieren', 'z. B. Auto, Möbel, Kleidung'],
            },
            rechts: {
              titel: 'Dienstleistungen (immateriell)',
              punkte: ['Kann man nicht angreifen', 'Kann man nicht lagern', 'z. B. Haarschnitt, Arztbesuch'],
            },
          },
          {
            type: 'begriff',
            term: 'Sachbezogene / personenbezogene Dienstleistung',
            erklaerung: 'Sachbezogen: an einer Sache gemacht. Personenbezogen: an einem Menschen gemacht.',
            beispiel: 'Autoreparatur (Sache) – Untersuchung beim Arzt (Person)',
          },
          {
            type: 'vergleich',
            frage: '3. Wofür wird es verwendet?',
            links: {
              titel: 'Konsumgüter',
              punkte: ['Werden selbst verbraucht/benutzt', 'z. B. Essen, Kosmetik, Auto für privat'],
            },
            rechts: {
              titel: 'Investitionsgüter',
              punkte: ['Damit stellt eine Firma andere Güter her', 'z. B. Maschine, Lieferwagen, Bürogebäude'],
            },
          },
          {
            type: 'merke',
            text: 'Wirtschaftsgüter werden in Sachgüter und Dienstleistungen eingeteilt. Ob Konsum- oder Investitionsgut hängt davon ab, WER es WOFÜR verwendet.',
          },
          {
            type: 'entscheidung',
            titel: 'Güter-Check: Welches Gut ist das?',
            schritte: [
              {
                frage: 'Ist es knapp und kostet Geld?',
                links: { antwort: 'Nein', ergebnis: 'Freies Gut', beispiel: 'Luft, Sonnenlicht' },
                rechts: { antwort: 'Ja', weiter: 'Wirtschaftsgut' },
              },
              {
                frage: 'Kann man es angreifen?',
                links: { antwort: 'Nein', ergebnis: 'Dienstleistung', beispiel: 'Haarschnitt, Arztbesuch' },
                rechts: { antwort: 'Ja', weiter: 'Sachgut' },
              },
              {
                frage: 'Wofür wird es verwendet?',
                links: { antwort: 'Zum Verbrauchen', ergebnis: 'Konsumgut', beispiel: 'Essen, Kleidung' },
                rechts: { antwort: 'Zum Herstellen', ergebnis: 'Investitionsgut', beispiel: 'Maschine, Lieferwagen' },
              },
            ],
          },
        ],
      },
      {
        titel: 'Wirtschaften',
        blocks: [
          {
            type: 'text',
            text: 'Wir wollen viel, haben aber nur begrenzt Geld und Zeit. Wir müssen also klug einteilen.',
          },
          {
            type: 'begriff',
            term: 'Knappheit',
            erklaerung: 'Die Mittel (Geld, Zeit, Rohstoffe) reichen nie für alle Wünsche.',
          },
          {
            type: 'begriff',
            term: 'Wirtschaften',
            erklaerung: 'Planvoll und vernünftig (rational) handeln, damit die Knappheit kleiner wird.',
            beispiel: 'Du teilst dein Taschengeld so ein, dass es für das Wichtigste reicht.',
          },
          {
            type: 'begriff',
            term: 'Nachhaltigkeit',
            erklaerung: 'So wirtschaften, dass auch spätere Generationen noch genug Ressourcen haben.',
          },
        ],
      },
      {
        titel: 'Minimal- & Maximalprinzip',
        blocks: [
          {
            type: 'begriff',
            term: 'Wirtschaftlichkeitsprinzip',
            erklaerung: 'Das beste Verhältnis zwischen Bedürfnissen und knappen Mitteln finden. Geht auf 2 Wegen:',
          },
          {
            type: 'prinzip',
            minimal: 'Ich will einen Basketball → ich suche den billigsten.',
            maximal: 'Ich habe 30 € → ich kaufe so viele Snacks wie möglich.',
          },
          {
            type: 'merke',
            text: 'Trick: Was ist fix? Das ZIEL fix → Minimalprinzip. Das GELD/der EINSATZ fix → Maximalprinzip.',
          },
        ],
      },
      {
        titel: 'Wirtschaftsteilnehmer',
        blocks: [
          {
            type: 'begriff',
            term: 'Wirtschaftsteilnehmer',
            erklaerung: 'Alle Personen und Einrichtungen, die bei der Wirtschaft mitmachen. Auch du!',
          },
          {
            type: 'begriff',
            term: 'Unternehmen',
            erklaerung: 'Stellen Güter her oder bieten Dienstleistungen an.',
            beispiel: 'Bäckerei, Friseur, OMV',
          },
          {
            type: 'begriff',
            term: 'Haushalte',
            erklaerung: 'Eine Person oder Familie. Verdienen Geld durch Arbeit, kaufen damit ein oder sparen (= Konsumenten).',
          },
          {
            type: 'begriff',
            term: 'Staat',
            erklaerung: 'Macht Gesetze, kassiert Steuern und gibt sie z. B. für Schulen, Straßen und Familienbeihilfe aus.',
          },
          {
            type: 'begriff',
            term: 'Banken',
            erklaerung: 'Nehmen Erspartes an und verleihen Geld (Kredit). Dafür gibt es Zinsen.',
          },
          {
            type: 'begriff',
            term: 'Steuern',
            erklaerung: 'Geld, das man laut Gesetz an den Staat zahlen muss.',
          },
          {
            type: 'begriff',
            term: 'Subventionen',
            erklaerung: 'Geld vom Staat, mit dem er Unternehmen für einen bestimmten Zweck unterstützt.',
            beispiel: 'Förderung für Forschung oder Photovoltaik',
          },
        ],
      },
      {
        titel: 'Wirtschaftskreislauf',
        blocks: [
          {
            type: 'begriff',
            term: 'Wirtschaftskreislauf',
            erklaerung: 'Zeigt, wie alle Wirtschaftsteilnehmer zusammenhängen – nach dem Prinzip „Geben und Nehmen“.',
          },
          {
            type: 'text',
            text: 'Starte mit „Einfach“ (Kernbeziehung Unternehmen ↔ Haushalte), dann kommen bei „Erweitert“ die Banken und bei „Vollständig“ der Staat dazu.',
          },
          { type: 'kreislaufDiagramm' },
          {
            type: 'merke',
            text: 'Vollständiger Wirtschaftskreislauf = 4 Teilnehmer: Unternehmen, Haushalte, Banken, Staat.',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Bedürfnisse',
        punkte: [
          'Bedürfnis = Gefühl eines Mangels + Wunsch, ihn zu beseitigen',
          'Maslow-Pyramide (unten → oben): Grundbedürfnisse → Sicherheit → Soziale → Anerkennung → Selbstverwirklichung',
          'Primärbedürfnisse = Grundbedürfnisse (überlebensnotwendig)',
          'Sekundärbedürfnisse = Kulturbedürfnisse (Bildung, Urlaub) + Luxusbedürfnisse (Status)',
        ],
      },
      {
        titel: 'Güter',
        punkte: [
          'Güter = Mittel zur Bedürfnisbefriedigung',
          'Freie Güter (unbegrenzt, gratis) ↔ Wirtschaftsgüter (knapp, kosten Geld)',
          'Wirtschaftsgüter = Sachgüter (angreifbar) + Dienstleistungen (nicht angreifbar, nicht lagerbar)',
          'Dienstleistungen: sachbezogen (Autoreparatur) oder personenbezogen (Arzt)',
          'Konsumgüter (Endverbrauch) ↔ Investitionsgüter (zur Herstellung anderer Güter)',
        ],
      },
      {
        titel: 'Wirtschaften',
        punkte: [
          'Wirtschaften = planvolles, rationales Handeln zur Milderung der Knappheit',
          'Nachhaltigkeit = Ressourcen so nutzen, dass künftige Generationen genug haben',
        ],
      },
      {
        titel: 'Wirtschaftlichkeitsprinzip',
        punkte: [
          'Minimalprinzip: Ziel fix → möglichst geringer Einsatz',
          'Maximalprinzip: Einsatz fix → möglichst großes Ergebnis',
        ],
      },
      {
        titel: 'Wirtschaftsteilnehmer & Kreislauf',
        punkte: [
          'Unternehmen: stellen Güter/Dienstleistungen her',
          'Haushalte: liefern Arbeitskraft, bekommen Einkommen, kaufen Güter, sparen',
          'Staat: Gesetze, Steuern, Subventionen, Beihilfen',
          'Banken: Sparen/Geldanlagen annehmen, Kredite vergeben, Zinsen',
          'Kernbeziehung: Unternehmen ↔ Haushalte (Arbeitskraft ↔ Einkommen, Güter ↔ Kaufpreis)',
          'Einfach: U + H · Erweitert: + Banken · Vollständig: + Staat',
        ],
      },
    ],
  },
'der-markt': {
    schritte: [
      {
        titel: 'Arbeitsteilung',
        blocks: [
          { type: 'text', text: 'Früher hat jeder alles selbst gemacht. Heute teilt man die Arbeit auf – das geht schneller und besser.' },
          {
            type: 'begriff',
            term: 'Arbeitsteilung',
            erklaerung: 'Eine große Aufgabe wird in viele kleine Schritte zerlegt, die verschiedene Personen oder Firmen übernehmen.',
          },
          {
            type: 'begriff',
            term: 'Spezialisierung',
            erklaerung: 'Eine Firma oder Person macht nur das, was sie besonders gut kann (Know-how).',
            beispiel: 'Bauer erntet Tomaten → Fabrik macht Ketchup → Supermarkt verkauft es.',
          },
          {
            type: 'tabelle',
            spalten: ['Art', 'Wer teilt sich die Arbeit?', 'Beispiel'],
            zeilen: [
              ['Innerbetrieblich', 'Abteilungen/Mitarbeiter in EINER Firma', 'Einkauf, Buchhaltung, Verkauf'],
              ['National', 'Verschiedene Firmen in einem Land', 'Molkerei, Bauer, Supermarkt'],
              ['International', 'Verschiedene Länder', 'Bananen aus Ecuador, Handy aus China'],
            ],
          },
        ],
      },
      {
        titel: 'Wirtschaftssektoren',
        blocks: [
          { type: 'text', text: 'Die nationale Arbeitsteilung kann senkrecht (vertikal) oder waagrecht (horizontal) sein.' },
          {
            type: 'begriff',
            term: 'Vertikale Arbeitsteilung',
            erklaerung: 'Firmen auf VERSCHIEDENEN Produktionsstufen arbeiten nacheinander am selben Produkt.',
          },
          {
            type: 'ablauf',
            titel: 'Beispiel Jeans (vertikal)',
            schritte: [
              { titel: 'Urproduktion', text: 'Baumwolle anbauen' },
              { titel: 'Dienstleistung', text: 'Großhandel, Transport' },
              { titel: 'Produktion', text: 'Spinnerei, Weberei, Kleiderfabrik' },
              { titel: 'Dienstleistung', text: 'Transport, Einzelhandel → Kunde' },
            ],
          },
          {
            type: 'begriff',
            term: 'Horizontale Arbeitsteilung',
            erklaerung: 'Firmen auf der GLEICHEN Stufe spezialisieren sich auf verschiedene Produkte.',
            beispiel: 'Eine Firma macht Brautmode, eine andere Sportkleidung.',
          },
          {
            type: 'tabelle',
            spalten: ['Sektor', 'Was passiert?', 'Beispiel'],
            zeilen: [
              ['Primär (Urproduktion)', 'Rohstoffe gewinnen', 'Landwirtschaft, Forst, Ölförderung'],
              ['Sekundär (Produktion)', 'Rohstoffe verarbeiten', 'Sägewerk, Tischlerei'],
              ['Tertiär (Dienstleistung)', 'Güter bereitstellen, Dienstleistungen', 'Möbelhaus, Friseur'],
            ],
          },
          { type: 'merke', text: 'Heute spricht man auch vom quartären Sektor (Information) und quintären Sektor (Entsorgung).' },
        ],
      },
      {
        titel: 'Markt, Angebot & Nachfrage',
        blocks: [
          {
            type: 'begriff',
            term: 'Markt',
            erklaerung: 'Jeder Ort, an dem Güter gegen Geld getauscht werden. Kann echt (Supermarkt) oder online sein.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Anbieter (Verkäufer)', punkte: ['Bietet Güter an = Angebot', 'Bekommt dafür Geld'] },
            rechts: { titel: 'Nachfrager (Käufer)', punkte: ['Fragt Güter nach = Nachfrage', 'Bezahlt dafür Geld'] },
          },
        ],
      },
      {
        titel: 'Marktarten',
        blocks: [
          { type: 'text', text: 'Märkte teilt man ein nach dem, WAS gehandelt wird, und nach dem, WIE VIELE mitmachen.' },
          {
            type: 'tabelle',
            spalten: ['Markt', 'Was wird gehandelt?'],
            zeilen: [
              ['Konsumgütermarkt', 'Sachgüter für Endverbraucher (Kleidung)'],
              ['Investitionsgütermarkt', 'Sachgüter für Firmen (Maschinen)'],
              ['Dienstleistungsmarkt', 'persönlich (Friseur) oder sachlich (Reparatur)'],
              ['Arbeitsmarkt', 'Arbeitskraft'],
              ['Kapitalmarkt', 'Geld (Kredite, Geldanlagen)'],
              ['Immobilienmarkt', 'Grundstücke und Gebäude'],
            ],
          },
          {
            type: 'begriff',
            term: 'Faktormärkte',
            erklaerung: 'Märkte für Produktionsfaktoren: Arbeit, Boden und Kapital (Arbeits-, Immobilien-, Kapitalmarkt).',
          },
          {
            type: 'tabelle',
            spalten: ['Marktform', 'Anbieter/Nachfrager', 'Beispiel'],
            zeilen: [
              ['Polypol', 'viele', 'Kleidung'],
              ['Oligopol', 'wenige', 'Mobilfunkanbieter'],
              ['Monopol', 'einer', 'Glücksspiel (Staat), ÖBB als Railjet-Käufer'],
            ],
          },
          { type: 'merke', text: 'Poly = viele, Oligo = wenige, Mono = einer. Je weniger Teilnehmer, desto mehr Marktmacht – Preise können künstlich hoch sein.' },
        ],
      },
      {
        titel: 'Preisbildung',
        blocks: [
          {
            type: 'begriff',
            term: 'Preis',
            erklaerung: 'Geld, das man für ein Gut zahlen muss. Er wird vor allem von Angebot und Nachfrage bestimmt.',
          },
          { type: 'text', text: 'Der Verkäufer will einen möglichst hohen Preis, der Käufer einen möglichst niedrigen. Der Marktpreis ist der Ausgleich.' },
          {
            type: 'begriff',
            term: 'Nachfragegesetz',
            erklaerung: 'Preis steigt → Nachfrage sinkt. Preis sinkt → Nachfrage steigt.',
          },
          {
            type: 'begriff',
            term: 'Angebotsgesetz',
            erklaerung: 'Preis steigt → Angebot steigt. Preis sinkt → Angebot sinkt.',
          },
          { type: 'marktdiagramm' },
          {
            type: 'begriff',
            term: 'Gleichgewichtspreis',
            erklaerung: 'Der Preis im Schnittpunkt der Kurven: angebotene Menge = nachgefragte Menge (Marktgleichgewicht).',
          },
          {
            type: 'vergleich',
            frage: 'Was beeinflusst den Preis noch?',
            links: { titel: 'Beim Verkäufer', punkte: ['Produktionskosten', 'Gewinnspanne', 'Preise der Konkurrenz', 'Technologie', 'Steuern'] },
            rechts: { titel: 'Beim Käufer', punkte: ['Einkommen', 'Nutzen des Gutes', 'Steuerniveau', 'dringender Bedarf (Medikamente)'] },
          },
        ],
      },
      {
        titel: 'Wirtschaftsordnungen',
        blocks: [
          {
            type: 'begriff',
            term: 'Wirtschaftsordnung',
            erklaerung: 'Die Regeln, nach denen die Wirtschaft in einem Land läuft. Unterschied: Wie viel bestimmt der Staat?',
          },
          {
            type: 'tabelle',
            spalten: ['', 'Freie Marktwirtschaft', '(Öko-)Soziale Marktwirtschaft', 'Planwirtschaft'],
            zeilen: [
              ['Wer plant?', 'Jeder selbst', 'Jeder selbst, Staat steuert mit', 'Der Staat (Gesamtplan)'],
              ['Preis', 'Angebot & Nachfrage', 'Angebot & Nachfrage', 'Staat bestimmt'],
              ['Staat', 'gibt nur Rahmen vor', 'greift stark ein (sozial, ökologisch)', 'bestimmt alles'],
              ['Nachteil', 'Arm–Reich-Schere', '–', 'zu viele/zu wenige Güter'],
              ['Beispiel', '–', 'Österreich, Deutschland', 'Nordkorea, teilw. Kuba'],
            ],
          },
          {
            type: 'begriff',
            term: 'Freie Marktwirtschaft – Merkmale',
            erklaerung: 'Freie Planung, Staat nur Rahmen, freie Berufs- und Arbeitsplatzwahl, Privateigentum an Produktionsfaktoren.',
          },
          {
            type: 'begriff',
            term: '(Öko-)Soziale Marktwirtschaft – Merkmale',
            erklaerung: 'Soziale Steuerung (Familienbeihilfe), kontrollierter Wettbewerb (Konsumentenschutz), ökologische Steuerung (Umweltgesetze, Förderungen), staatliche Eingriffe (Aufträge, Hilfe in Krisen).',
          },
          {
            type: 'begriff',
            term: 'Daseinsvorsorge',
            erklaerung: 'Güter und Leistungen, die der Staat für alle bereitstellt.',
            beispiel: 'Gratis Schulbücher, öffentlicher Verkehr',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Arbeitsteilung',
        punkte: [
          'Arbeitsteilung = Arbeit in kleine Schritte zerlegen; Basis der Spezialisierung',
          'Spezialisierung = nur bestimmte Güter herstellen, weil man das Know-how hat',
          'Innerbetrieblich (in 1 Firma) · national (Firmen in 1 Land) · international (Länder)',
          'Vertikal = verschiedene Produktionsstufen · horizontal = gleiche Stufe, andere Produkte',
          'Sektoren: primär (Urproduktion) · sekundär (Produktion) · tertiär (Dienstleistung)',
        ],
      },
      {
        titel: 'Markt',
        punkte: [
          'Markt = Ort, wo Angebot (Verkäufer) und Nachfrage (Käufer) aufeinandertreffen',
          'Nach Tauschgegenstand: Sachgüter-, Dienstleistungs-, Faktormärkte (Arbeit, Kapital, Immobilien)',
          'Nach Teilnehmern: Polypol (viele) · Oligopol (wenige) · Monopol (einer)',
        ],
      },
      {
        titel: 'Preisbildung',
        punkte: [
          'Nachfragegesetz: Preis ↑ → Nachfrage ↓',
          'Angebotsgesetz: Preis ↑ → Angebot ↑',
          'Schnittpunkt der Kurven = Gleichgewichtspreis / Gleichgewichtsmenge (Marktgleichgewicht)',
          'Weitere Faktoren: Produktionskosten, Konkurrenz, Steuern, Einkommen, Nutzen',
        ],
      },
      {
        titel: 'Wirtschaftsordnungen',
        punkte: [
          'Freie Marktwirtschaft: Staat gibt nur Rahmen vor, Preis durch Angebot & Nachfrage',
          '(Öko-)Soziale Marktwirtschaft: wie frei, aber Staat greift sozial & ökologisch ein (Österreich)',
          'Planwirtschaft: Staat plant zentral (Gesamtplan), bestimmt Preise, kein Wettbewerb',
        ],
      },
    ],
  },
'unternehmen-und-umfeld': {
    schritte: [
      {
        titel: 'Unternehmen, Betrieb, Firma',
        blocks: [
          { type: 'text', text: 'Diese drei Wörter werden im Alltag oft verwechselt. In BW bedeuten sie Verschiedenes:' },
          {
            type: 'tabelle',
            spalten: ['Begriff', 'Bedeutung', 'Beispiel Boutique'],
            zeilen: [
              ['Unternehmen', 'rechtlicher Rahmen – schließt Geschäfte ab, zahlt Gehälter', 'Frau Paschinger kauft ein, verkauft, zahlt Gehälter'],
              ['Betrieb', 'Ort, an dem die Leistung erstellt wird (ein Unternehmen kann mehrere haben)', 'Geschäftslokal mit Verkaufsraum, Büro, Lager'],
              ['Firma', 'Name des Unternehmens (steht im Firmenbuch)', '„Paschingers Moda Italia“'],
            ],
          },
          {
            type: 'begriff',
            term: 'Firmenbuch',
            erklaerung: 'Öffentliches Verzeichnis mit den wichtigsten Infos über Unternehmen.',
          },
          { type: 'merke', text: 'Unternehmen = rechtlicher Rahmen · Betrieb = Ort · Firma = Name. „Ich gehe in die Firma“ ist also eigentlich falsch!' },
        ],
      },
      {
        titel: 'Betriebsarten',
        blocks: [
          { type: 'text', text: 'Betriebe werden nach 3 Merkmalen eingeteilt: Leistungserstellung, Betriebsgröße und Branche.' },
          {
            type: 'tabelle',
            spalten: ['Leistungserstellung', 'Was?', 'Beispiel'],
            zeilen: [
              ['Urproduktion (primär)', 'Rohstoffe gewinnen', 'Bauernhof, Bergwerk'],
              ['Produktionsbetrieb (sekundär)', 'Konsum-/Investitionsgüter herstellen', 'Autohersteller, Stahlwerk'],
              ['Dienstleistungsbetrieb (tertiär)', 'Güter bereitstellen, Dienstleistungen', 'Handel, Bank, Versicherung'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Betriebsgröße', 'Mitarbeiter/innen'],
            zeilen: [
              ['Kleinstbetrieb', 'bis 9'],
              ['Kleinbetrieb', '10 – 49'],
              ['Mittelbetrieb', '50 – 249'],
              ['Großbetrieb', 'ab 250'],
            ],
          },
          { type: 'merke', text: 'Die Größe hängt auch von Umsatz (Wert aller Verkäufe) und Bilanzsumme (Vermögen) ab – meistens zählt man aber die Mitarbeiter.' },
          {
            type: 'begriff',
            term: 'Branche',
            erklaerung: 'Wirtschaftszweig: Betriebe, die gleiche oder ähnliche Produkte anbieten.',
            beispiel: 'Industrie, Gewerbe & Handwerk, Handel, Transport & Verkehr, Banken & Versicherungen, Land- & Forstwirtschaft, Tourismus & Freizeit, Information & Consulting',
          },
        ],
      },
      {
        titel: 'Unternehmensziele',
        blocks: [
          {
            type: 'begriff',
            term: 'Ziel',
            erklaerung: 'Ein Zustand in der Zukunft, den man durch geplante Handlungen erreichen will.',
          },
          { type: 'merke', text: 'Oberstes Ziel: Das Unternehmen soll am Markt bestehen bleiben – dafür muss es wirtschaftlich erfolgreich sein.' },
          {
            type: 'vergleich',
            links: { titel: 'Sachziel', punkte: ['WAS konkret produziert/geleistet wird', 'Menge, Zeit, Qualität', 'z. B. Konditorei: morgen 25 Linzer Torten'] },
            rechts: { titel: 'Formalziel', punkte: ['Allgemeine wirtschaftliche Ziele', 'unabhängig von der Branche', 'z. B. Umsatz um 10 % erhöhen'] },
          },
          {
            type: 'vergleich',
            frage: 'Formalziele gibt es in 2 Arten:',
            links: { titel: 'Monetär (in Geld messbar)', punkte: ['Gewinn erzielen', 'Zahlungsfähigkeit sichern', 'Umsatz erhöhen', 'Kosten senken'] },
            rechts: { titel: 'Nicht monetär', punkte: ['umweltschonend handeln', 'Kundenzufriedenheit', 'Arbeitsklima', 'Image, Marktanteil'] },
          },
          {
            type: 'ablauf',
            titel: 'Ziele SMART formulieren',
            schritte: [
              { titel: 'S – Spezifisch', text: 'präzise und klar' },
              { titel: 'M – Messbar', text: 'man kann überprüfen, ob es erreicht ist' },
              { titel: 'A – Attraktiv', text: 'motiviert alle Beteiligten' },
              { titel: 'R – Realistisch', text: 'erreichbar' },
              { titel: 'T – Terminiert', text: 'bis wann?' },
            ],
          },
        ],
      },
      {
        titel: 'Gewinn & Zahlungsfähigkeit',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Gewinnorientiert (Profit)', punkte: ['Private Unternehmen', 'Erfolgreich, wenn Erträge > Aufwände'] },
            rechts: { titel: 'Nicht gewinnorientiert (Non-Profit)', punkte: ['Arbeiten im Interesse der Allgemeinheit', 'Kostendeckung reicht; Verluste zahlt z. B. der Staat', 'z. B. öffentl. Krankenhaus, Kindergarten, Theater, Vereine'] },
          },
          {
            type: 'begriff',
            term: 'Zahlungsfähigkeit (Liquidität)',
            erklaerung: 'Genug Geld haben, um alle fälligen Rechnungen pünktlich zu zahlen. Gilt für ALLE Unternehmen.',
          },
          { type: 'merke', text: 'Wer länger zahlungsunfähig ist, gefährdet seine Existenz – im schlimmsten Fall muss das Unternehmen zusperren.' },
        ],
      },
      {
        titel: 'Stakeholder & Umfelder',
        blocks: [
          {
            type: 'begriff',
            term: 'Stakeholder (Anspruchs-/Interessengruppen)',
            erklaerung: 'Alle, die ein Interesse an dem haben, was das Unternehmen tut – und Ansprüche stellen.',
          },
          {
            type: 'vergleich',
            links: {
              titel: 'Interne Stakeholder',
              punkte: ['Eigentümer: Gewinn, Wertsteigerung', 'Management: Einkommen, eigene Ideen', 'Mitarbeiter: Einkommen, sicherer Job'],
            },
            rechts: {
              titel: 'Externe Stakeholder',
              punkte: ['Lieferanten: Abnahme, Bezahlung', 'Kunden: gute Produkte, günstige Preise', 'Fremdkapitalgeber: Rückzahlung, Zinsen', 'Konkurrenz: fairer Wettbewerb', 'Staat: Steuern', 'Gesellschaft: Umweltschutz'],
            },
          },
          { type: 'merke', text: 'Die Interessen der Stakeholder widersprechen sich oft (Mitarbeiter wollen mehr Lohn, Eigentümer mehr Gewinn) → Spannungen.' },
          {
            type: 'tabelle',
            spalten: ['Umfeld', 'Was gehört dazu?', 'Beispiel'],
            zeilen: [
              ['Ökonomisch', 'wirtschaftliche Lage, Preise', 'Kakao wird 20 % teurer'],
              ['Gesellschaftlich', 'Politik, Recht, Kultur, Soziales', 'Bildungsniveau der Schulabgänger'],
              ['Technologisch', 'neue Technik, Materialien, Prozesse', 'vollautomatische Fertigung'],
              ['Ökologisch', 'Natur, Rohstoffe, Umweltschutz', 'Solarstrom statt Erdöl'],
            ],
          },
          {
            type: 'begriff',
            term: 'Nachhaltigkeit',
            erklaerung: 'Heutige Bedürfnisse befriedigen, ohne künftige Generationen zu gefährden.',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Grundbegriffe',
        punkte: [
          'Unternehmen = rechtlicher Rahmen · Betrieb = Ort der Leistungserstellung · Firma = Name (im Firmenbuch)',
        ],
      },
      {
        titel: 'Betriebsarten',
        punkte: [
          'Nach Leistungserstellung: Urproduktion · Produktion · Dienstleistung',
          'Nach Größe: Kleinst (≤ 9) · Klein (10–49) · Mittel (50–249) · Groß (ab 250 Mitarbeiter)',
          'Nach Branche: Industrie, Gewerbe/Handwerk, Handel, Transport, Banken/Versicherungen, Tourismus …',
        ],
      },
      {
        titel: 'Unternehmensziele',
        punkte: [
          'Oberstes Ziel: am Markt bestehen bleiben',
          'Sachziel = konkrete Leistung (was, wie viel, wann, welche Qualität)',
          'Formalziel = allgemeines wirtschaftliches Ziel: monetär (Gewinn, Umsatz, Liquidität) oder nicht monetär (Image, Umwelt)',
          'SMART: spezifisch, messbar, attraktiv, realistisch, terminiert',
          'Profit-Organisation (Gewinn) ↔ Non-Profit-Organisation (Allgemeinheit, Kostendeckung)',
          'Zahlungsfähigkeit (Liquidität) müssen alle Unternehmen sichern',
        ],
      },
      {
        titel: 'Stakeholder & Umfelder',
        punkte: [
          'Stakeholder = Anspruchsgruppen mit Interesse am Unternehmen',
          'Intern: Eigentümer, Management, Mitarbeiter',
          'Extern: Lieferanten, Kunden, Fremdkapitalgeber, Konkurrenz, Staat, Gesellschaft',
          'Umfelder: ökonomisch, gesellschaftlich, technologisch, ökologisch',
        ],
      },
    ],
  },
'leistungserstellung-1jg': {
    schritte: [
      {
        titel: 'Produktionsfaktoren',
        blocks: [
          {
            type: 'begriff',
            term: 'Produktionsfaktoren',
            erklaerung: 'Alles, was ein Unternehmen braucht, um seine Leistung zu erstellen: menschliche Arbeitsleistung + Betriebsvermögen.',
          },
          {
            type: 'vergleich',
            frage: 'Menschliche Arbeitsleistung hängt ab von:',
            links: { titel: 'Leistungsfähigkeit (Können)', punkte: ['Begabung', 'Ausbildung', 'Berufserfahrung', 'Alter'] },
            rechts: { titel: 'Leistungsbereitschaft (Wollen = Motivation)', punkte: ['Lohn', 'Arbeitsplatz', 'Betriebsklima', 'Arbeitszeiten, Lob'] },
          },
          {
            type: 'begriff',
            term: 'Anlagevermögen',
            erklaerung: 'Bleibt LANGE im Unternehmen (länger als 1 Jahr) und sorgt für den dauerhaften Betrieb.',
          },
          {
            type: 'tabelle',
            spalten: ['Anlagevermögen', 'Beispiele'],
            zeilen: [
              ['Sachanlagen (Betriebsmittel)', 'Grundstücke, Gebäude, Maschinen, Fahrzeuge, Büroausstattung'],
              ['Finanzanlagen', 'Wertpapiere, Beteiligungen'],
              ['Immateriell', 'Marken, Patente, Software'],
            ],
          },
          {
            type: 'begriff',
            term: 'Umlaufvermögen',
            erklaerung: 'Bleibt nur KURZ im Unternehmen, weil es ständig verbraucht oder verkauft wird.',
          },
          {
            type: 'tabelle',
            spalten: ['Umlaufvermögen', 'Bedeutung', 'Beispiel Jeans'],
            zeilen: [
              ['Rohstoffe', 'Hauptbestandteil', 'Jeansstoff'],
              ['Hilfsstoffe', 'Nebenbestandteil', 'Zwirn'],
              ['Betriebsstoffe', 'werden verbraucht, sind nicht im Produkt', 'Öl für die Nähmaschine'],
              ['Handelswaren', 'fertig gekauft, unverändert weiterverkauft', 'Gürtel'],
              ['Fertige/unfertige Erzeugnisse', 'selbst hergestellt', 'fertige Jeans'],
              ['Finanzumlaufvermögen', 'Geld & Ansprüche', 'Kassa, Bankguthaben, Forderungen'],
            ],
          },
          { type: 'merke', text: 'Roh-, Hilfs- und Betriebsstoffe heißen zusammen Werkstoffe. Trick: lange da → Anlage; wird verbraucht/verkauft → Umlauf.' },
        ],
      },
      {
        titel: 'Bereiche des Unternehmens',
        blocks: [
          { type: 'text', text: 'Ein Unternehmen ist in Abteilungen (Leistungsbereiche) aufgeteilt. Die 3 Grundfunktionen hängen direkt am Produkt:' },
          {
            type: 'kette',
            glieder: [
              { titel: 'Lieferanten → 1.', wert: 'Beschaffung' },
              { titel: '2.', wert: 'Produktion' },
              { titel: '3. → Kunden', wert: 'Absatz' },
            ],
          },
          { type: 'text', text: 'Unterstützt werden sie von Lager, Personalwesen und Rechnungswesen. Über allem steht die Unternehmensführung.' },
          {
            type: 'tabelle',
            spalten: ['Bereich', 'Aufgabe'],
            zeilen: [
              ['Beschaffung (Einkauf)', 'Versorgung mit allen nötigen Materialien sicherstellen'],
              ['Produktion (Leistungserstellung)', 'Produktionsfaktoren kombinieren, Güter herstellen'],
              ['Absatz (Vertrieb)', 'Verkauf mit gezieltem Marketing – möglichst hoher Umsatz'],
              ['Lager', 'Güter rechtzeitig bereitstellen'],
              ['Personalwesen', 'alles rund um die Mitarbeiter/innen'],
              ['Rechnungswesen', 'betriebliche Vorgänge in Zahlen erfassen, kontrollieren'],
              ['Unternehmensführung', 'Leitung des ganzen Unternehmens'],
            ],
          },
          {
            type: 'begriff',
            term: 'Umsatz (Erlös)',
            erklaerung: 'Gesamtwert aller verkauften Güter in einer bestimmten Zeit.',
            beispiel: 'Umsatz = verkaufte Menge · Preis',
          },
        ],
      },
      {
        titel: 'Lager & Personalwesen',
        blocks: [
          {
            type: 'ablauf',
            titel: 'Lagerarten im Ablauf',
            schritte: [
              { titel: 'Beschaffungslager', text: 'gekaufte Materialien für die Produktion' },
              { titel: 'Zwischenlager', text: 'unfertige Güter zwischen Produktionsschritten' },
              { titel: 'Verkaufs- und Versandlager', text: 'fertige Produkte vor dem Verkauf' },
            ],
          },
          {
            type: 'ablauf',
            titel: 'Aufgaben des Personalwesens',
            schritte: [
              { titel: 'Personalbedarf planen' },
              { titel: 'Personal beschaffen' },
              { titel: 'Arbeitsverträge schließen und auflösen' },
              { titel: 'Mitarbeiter fördern (Aus- und Weiterbildung)' },
              { titel: 'Löhne und Gehälter abrechnen' },
            ],
          },
          { type: 'merke', text: 'Personalwesen heißt heute oft Human Resource Management (HR).' },
        ],
      },
      {
        titel: 'Unternehmensführung',
        blocks: [
          {
            type: 'begriff',
            term: 'Unternehmensführung (Management)',
            erklaerung: 'Leitet das Unternehmen. Ihre Aufgaben wiederholen sich im Managementkreis:',
          },
          {
            type: 'zyklus',
            mitte: 'Management',
            schritte: ['Ziele formulieren & planen', 'Entscheiden', 'Organisieren & steuern', 'Kontrollieren'],
          },
          {
            type: 'text',
            text: 'Beispiel: Ziel „Umsatz bei Damenjeans +5 %“ → Maßnahmen beschließen → mit den Abteilungen umsetzen → am Jahresende prüfen, ob es geklappt hat.',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Produktionsfaktoren',
        punkte: [
          'Menschliche Arbeitsleistung (Leistungsfähigkeit + Leistungsbereitschaft) + Betriebsvermögen',
          'Anlagevermögen = langfristig: Sachanlagen, Finanzanlagen, immaterielle Anlagen (Patente, Marken)',
          'Umlaufvermögen = kurzfristig: Roh-, Hilfs-, Betriebsstoffe (= Werkstoffe), Handelswaren, Erzeugnisse, Kassa/Bank/Forderungen',
        ],
      },
      {
        titel: 'Unternehmensbereiche',
        punkte: [
          'Grundfunktionen: Beschaffung → Produktion → Absatz',
          'Unterstützung: Lager, Personalwesen, Rechnungswesen · darüber: Unternehmensführung',
          'Umsatz = verkaufte Menge · Preis',
          'Lagerarten: Beschaffungs-, Zwischen-, Verkaufs-/Versandlager',
          'Managementkreis: planen → entscheiden → organisieren/steuern → kontrollieren',
        ],
      },
    ],
  },
'phasen-kaufen-verkaufen': {
    schritte: [
      {
        titel: 'Der Kaufvertrag im Überblick',
        blocks: [
          {
            type: 'begriff',
            term: 'Kaufvertrag',
            erklaerung: 'Vertrag zwischen Verkäufer und Käufer über einen Kaufgegenstand (Sachgut oder Dienstleistung). Jedes Mal, wenn du etwas kaufst, schließt du einen ab!',
          },
          {
            type: 'ablauf',
            titel: 'Die 3 Phasen',
            schritte: [
              { titel: 'Anbahnung', text: 'Verkäufer und Käufer finden zueinander (Anpreisung, Anfrage, Angebot)' },
              { titel: 'Abschluss', text: 'Beide werden sich einig (Bestellung, Auftragsbestätigung)' },
              { titel: 'Erfüllung', text: 'Verkäufer liefert, Käufer bezahlt' },
            ],
          },
          { type: 'merke', text: 'Im Supermarkt passieren alle 3 Phasen in Sekunden. Beim Hauskauf dauern sie Wochen (mit Notar).' },
        ],
      },
      {
        titel: 'Anbahnung: Anpreisung & Anfrage',
        blocks: [
          { type: 'text', text: 'In der Anbahnung tauscht man die wichtigsten Infos aus: Wer verkauft? Welche Qualität, Menge, welcher Preis?' },
          {
            type: 'begriff',
            term: 'Anpreisung (vom Verkäufer)',
            erklaerung: 'Werbung an viele Leute (Prospekt, TV-Spot, Onlinewerbung). Der Verkäufer will auf sich aufmerksam machen, ist aber NICHT gebunden – es fehlt der Bindungswille.',
            beispiel: '„Solange der Vorrat reicht“, „unverbindlich“, „Preisänderungen vorbehalten“',
          },
          {
            type: 'begriff',
            term: 'Anfrage (vom Käufer)',
            erklaerung: 'Der Käufer holt gezielt Infos ein. Ist unverbindlich – er muss nichts kaufen. Form ist frei (mündlich oder schriftlich).',
          },
          {
            type: 'vergleich',
            links: { titel: 'Allgemeine Anfrage', punkte: ['Keine genauen Wünsche', 'Will Überblick (Katalog, Preisliste)', '„Bitte schicken Sie mir einen Katalog.“'] },
            rechts: { titel: 'Spezielle Anfrage', punkte: ['Konkrete Wünsche', 'Will meist ein Angebot', '„Haben Sie Laptop XY? Was kostet er?“'] },
          },
        ],
      },
      {
        titel: 'Anbahnung: Angebot & Bestellung',
        blocks: [
          {
            type: 'begriff',
            term: 'Angebot',
            erklaerung: 'Der Verkäufer sagt: „Ich will dir das zu diesen Bedingungen verkaufen.“ Kann unverlangt (ohne Anfrage) oder verlangt (nach Anfrage) sein.',
          },
          {
            type: 'entscheidung',
            titel: 'Ist das Angebot verbindlich?',
            schritte: [
              {
                frage: 'Enthält es Verkäufer, Käufer, Qualität, Menge und Preis?',
                links: { antwort: 'Nein', ergebnis: 'Nur Anpreisung', beispiel: 'nicht bindend' },
                rechts: { antwort: 'Ja', weiter: 'weiter prüfen' },
              },
              {
                frage: 'Will der Verkäufer erkennbar verkaufen (Bindungswille)?',
                links: { antwort: 'Nein', ergebnis: 'Freibleibend', beispiel: '„ohne Obligo“, „solange Vorrat reicht“' },
                rechts: { antwort: 'Ja', weiter: 'weiter prüfen' },
              },
              {
                frage: 'Ist es dem Käufer persönlich zugegangen?',
                links: { antwort: 'Nein', ergebnis: 'Noch nicht bindend' },
                rechts: { antwort: 'Ja', ergebnis: 'Verbindliches Angebot', beispiel: 'Verkäufer muss liefern' },
              },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Wie lange gilt es?', 'Bindungsdauer'],
            zeilen: [
              ['Dauer angegeben', 'so lange wie angegeben (z. B. „2 Wochen ab Erhalt“)'],
              ['Mündlich, nichts angegeben', 'nur während des Gesprächs'],
              ['Brief, nichts angegeben', 'Überlegungsfrist + doppelter Postweg (4–6 Tage)'],
              ['E-Mail, nichts angegeben', 'nur angemessene Überlegungsfrist'],
            ],
          },
          {
            type: 'begriff',
            term: 'Freizeichnungsklausel',
            erklaerung: 'Damit macht der Verkäufer sein Angebot unverbindlich (freibleibend).',
          },
          {
            type: 'begriff',
            term: 'Bestellung',
            erklaerung: 'Der Käufer bietet an, ein bestimmtes Produkt zu kaufen. Kam vorher ein Angebot, gehört sie schon zum Abschluss.',
          },
        ],
      },
      {
        titel: 'Abschluss des Kaufvertrags',
        blocks: [
          {
            type: 'kette',
            glieder: [
              { titel: 'Verkäufer', wert: 'Angebot' },
              { titel: 'Käufer', wert: 'Annahme' },
              { titel: 'Ergebnis', wert: 'Vertrag ✓' },
            ],
          },
          {
            type: 'begriff',
            term: 'Übereinstimmende Willenserklärung',
            erklaerung: 'Verkäufer und Käufer wollen genau dasselbe zu denselben Bedingungen. Dann ist der Vertrag abgeschlossen.',
          },
          {
            type: 'tabelle',
            spalten: ['Form', 'Beispiel'],
            zeilen: [
              ['Mündlich', 'Pizza am Telefon bestellen'],
              ['Schriftlich', 'Tesla kaufen, Maßmöbel'],
              ['Elektronisch', 'Onlineshop (Bestellbutton)'],
              ['Schlüssiges Handeln', 'Geld in den Getränkeautomaten werfen'],
              ['Stillschweigend', 'nur zwischen Unternehmern mit langer Geschäftsbeziehung'],
            ],
          },
          { type: 'merke', text: 'Grundsätzlich gilt Formfreiheit. Zwingend schriftlich: Grundstücke, Häuser, Wohnungen und Ratengeschäfte. Schweigen einer Privatperson = Ablehnung – unbestellte Ware musst du weder zahlen noch zurückschicken!' },
        ],
      },
      {
        titel: 'Gültiger Vertrag & Geschäftsfähigkeit',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Voraussetzung', 'Bedeutung'],
            zeilen: [
              ['Zweiseitigkeit', 'mindestens 2 Partner'],
              ['Übereinstimmende Willenserklärung', 'beide einig über alle Bedingungen'],
              ['Freiwilligkeit', 'niemand wird gezwungen oder bedroht'],
              ['Erlaubtheit', 'kein Verstoß gegen Gesetze (z. B. Drogenhandel)'],
              ['Möglichkeit', 'nichts Unmögliches (Grundstück am Jupiter)'],
              ['Geschäftsfähigkeit', 'Mindestalter und geistig voll handlungsfähig'],
            ],
          },
          {
            type: 'begriff',
            term: 'Geschäftsfähigkeit',
            erklaerung: 'Die Fähigkeit, selbst gültige Verträge abzuschließen. Hängt vom Alter und Geisteszustand ab.',
          },
          {
            type: 'ablauf',
            titel: 'Stufen der Geschäftsfähigkeit',
            schritte: [
              { titel: 'Unter 7: geschäftsunfähig', text: 'nur Taschengeldgeschäfte (Eis, Comics)' },
              { titel: '7–14: beschränkt geschäftsfähig', text: 'geringfügige Alltagsgeschäfte, Geschenke annehmen' },
              { titel: '14–18: erweitert beschränkt', text: 'bis zur Höhe von Taschengeld/eigenem Verdienst, wenn der Lebensunterhalt nicht gefährdet ist (Kleidung, Handy)' },
              { titel: 'Ab 18: voll geschäftsfähig', text: 'alle erlaubten Geschäfte (Auto, Reise)' },
            ],
          },
          { type: 'merke', text: 'Geht ein Minderjähriger darüber hinaus, ist der Vertrag schwebend unwirksam – erst mit Zustimmung der Eltern gültig.' },
        ],
      },
      {
        titel: 'Erfüllung des Kaufvertrags',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Pflichten des Verkäufers', punkte: ['Produkt liefern (rechtzeitig, am vereinbarten Ort)', 'Ordnungsgemäße Rechnung ausstellen'] },
            rechts: { titel: 'Pflichten des Käufers', punkte: ['Produkt annehmen (auch wenn es woanders billiger ist)', 'Bezahlen (sofort oder in der vereinbarten Frist)'] },
          },
          { type: 'merke', text: 'Die Rechte des Käufers sind die Pflichten des Verkäufers – und umgekehrt. Zahlungsbeleg aufbewahren (Beweis, Garantie)!' },
          {
            type: 'ablauf',
            titel: 'Rechnung prüfen: Stimmt …',
            schritte: [
              { titel: 'das Rechnungsdatum?' },
              { titel: 'der Rechnungsempfänger?' },
              { titel: 'das Lieferdatum?' },
              { titel: 'die Produktbeschreibung?' },
              { titel: 'der Preis?' },
              { titel: 'der Rest (Skonto, Garantie …)?' },
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Phasen',
        punkte: ['Anbahnung → Abschluss → Erfüllung'],
      },
      {
        titel: 'Anbahnung',
        punkte: [
          'Anpreisung = Werbung an viele, unverbindlich (kein Bindungswille)',
          'Anfrage = Käufer holt Infos, unverbindlich; allgemein (Überblick) oder speziell (konkret)',
          'Angebot: unverlangt oder verlangt; verbindlich bei inhaltlicher Bestimmtheit (Verkäufer, Käufer, Qualität, Menge, Preis) + Bindungswille + persönlichem Zugang',
          'Bindungsdauer: angegeben · mündlich = Gespräch · Brief = Überlegungsfrist + doppelter Postweg · E-Mail = Überlegungsfrist',
          'Freizeichnungsklausel → freibleibendes Angebot',
        ],
      },
      {
        titel: 'Abschluss',
        punkte: [
          'Vertrag durch übereinstimmende Willenserklärung (Angebot + rechtzeitige Annahme)',
          'Formen: mündlich, schriftlich, elektronisch, schlüssig, stillschweigend',
          'Zwingend schriftlich: Grundstücke, Wohnungen, Ratengeschäfte',
          'Gültig bei: Zweiseitigkeit, Willensübereinstimmung, Freiwilligkeit, Erlaubtheit, Möglichkeit, Geschäftsfähigkeit',
          'Geschäftsfähigkeit: < 7 unfähig · 7–14 beschränkt · 14–18 erweitert beschränkt · ab 18 voll',
        ],
      },
      {
        titel: 'Erfüllung',
        punkte: [
          'Verkäufer: liefern + Rechnung · Käufer: annehmen + zahlen',
        ],
      },
    ],
  },
'gesetzliche-grundlagen-kauf': {
    schritte: [
      {
        titel: 'Vertragspartner & Geschäftsarten',
        blocks: [
          {
            type: 'begriff',
            term: 'Vertrag',
            erklaerung: 'Vereinbarung über ein Geschäft zwischen 2 oder mehr Partnern – mit rechtlichen Folgen. Also gut überlegen!',
          },
          { type: 'text', text: 'Wer mit wem einen Vertrag schließt, bestimmt die Geschäftsart:' },
          {
            type: 'tabelle',
            spalten: ['Geschäftsart', 'Verkäufer → Käufer', 'Beispiel'],
            zeilen: [
              ['C2C (Consumer-to-Consumer)', 'Privat → Privat', 'Altes Handy auf eBay verkaufen'],
              ['B2C (Business-to-Consumer)', 'Unternehmen → Privat', 'Torte in der Konditorei kaufen'],
              ['B2B (Business-to-Business)', 'Unternehmen → Unternehmen', 'Billa kauft Milch bei Schärdinger'],
            ],
          },
          { type: 'merke', text: 'Business = Unternehmen, Consumer = Privatperson (Konsument).' },
        ],
      },
      {
        titel: 'Geltende Gesetze',
        blocks: [
          { type: 'text', text: 'Grundsätzlich gilt Inhaltsfreiheit – den Vertragsinhalt darf man frei bestimmen. Aber diese Gesetze gelten trotzdem:' },
          {
            type: 'tabelle',
            spalten: ['Gesetz', 'Wofür?'],
            zeilen: [
              ['ABGB (Allgemeines bürgerliches Gesetzbuch)', 'für ALLE Verträge (z. B. Geschäftsfähigkeit)'],
              ['KSchG (Konsumentenschutzgesetz)', 'schützt Privatpersonen vor unfairen Methoden von Unternehmen'],
              ['UGB (Unternehmensgesetzbuch)', 'Verträge zwischen Unternehmen'],
              ['ECG (E-Commerce-Gesetz)', 'Verkäufer mit Website/Onlineauftritt'],
              ['FAGG (Fern- und Auswärtsgeschäfte-Gesetz)', 'Unternehmer ↔ Privat außerhalb des Geschäftslokals'],
              ['DSGVO (Datenschutz-Grundverordnung)', 'Umgang mit personenbezogenen Daten in der EU'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Geschäftsart', 'Wichtige Gesetze'],
            zeilen: [
              ['C2C', 'ABGB, ECG (wenn online)'],
              ['B2C', 'ABGB, KSchG, FAGG, ECG (wenn online), DSGVO'],
              ['B2B', 'ABGB, UGB, ECG (wenn online), DSGVO'],
            ],
          },
          { type: 'merke', text: 'ABGB gilt immer. KSchG nur, wenn ein Konsument dabei ist (B2C). UGB nur zwischen Unternehmen (B2B).' },
          {
            type: 'begriff',
            term: 'Usancen',
            erklaerung: 'Handelsbräuche bei B2B – Regeln, die alle kennen und die nicht jedes Mal neu vereinbart werden.',
          },
        ],
      },
      {
        titel: 'Weitere Vertragstypen',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Vertragstyp', 'Leistung', 'Gegenleistung'],
            zeilen: [
              ['Kaufvertrag', 'Produkt', 'Kaufpreis'],
              ['Werkvertrag', 'Werk (z. B. Reparatur)', 'Werklohn'],
              ['Mietvertrag', 'Mietgegenstand', 'Mietzins'],
              ['Arbeitsvertrag (Dienstvertrag)', 'Arbeitsleistung', 'Lohn, Gehalt'],
              ['Kreditvertrag', 'Geldbetrag', 'Zinsen + Rückzahlung'],
              ['Versicherungsvertrag', 'Zahlung im Schadensfall', 'Versicherungsprämie'],
            ],
          },
          { type: 'merke', text: 'Es gibt auch gemischte Verträge, die mehrere Typen kombinieren.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Geschäftsarten',
        punkte: [
          'Vertrag = Vereinbarung zwischen 2+ Partnern mit Rechtsfolgen',
          'C2C (privat–privat) · B2C (Unternehmen–privat) · B2B (Unternehmen–Unternehmen)',
        ],
      },
      {
        titel: 'Gesetze',
        punkte: [
          'ABGB: alle Verträge · KSchG: Konsumentenschutz · UGB: zwischen Unternehmen',
          'ECG: Onlineauftritt · FAGG: Fern- und Auswärtsgeschäfte · DSGVO: Datenschutz',
          'C2C: ABGB (+ECG) · B2C: ABGB, KSchG, FAGG, DSGVO (+ECG) · B2B: ABGB, UGB, DSGVO (+ECG)',
        ],
      },
      {
        titel: 'Vertragstypen',
        punkte: [
          'Kauf (Produkt ↔ Kaufpreis) · Werk (Werk ↔ Werklohn) · Miete (Gegenstand ↔ Mietzins)',
          'Arbeit (Arbeit ↔ Lohn) · Kredit (Geld ↔ Zinsen + Rückzahlung) · Versicherung (Schutz ↔ Prämie)',
        ],
      },
    ],
  },
'fernabsatz-ecommerce': {
    schritte: [
      {
        titel: 'Fernabsatz & E-Commerce',
        blocks: [
          {
            type: 'begriff',
            term: 'Fernabsatz',
            erklaerung: 'Käufer und Verkäufer sehen sich NIE persönlich. Alle 3 Phasen laufen über Fernkommunikationsmittel.',
            beispiel: 'Internet, Telefon, E-Mail, Katalog, Briefe',
          },
          {
            type: 'begriff',
            term: 'E-Commerce (elektronischer Geschäftsverkehr)',
            erklaerung: 'Der ganze Handel läuft über das Internet (Website, Onlineshop). E-Commerce ist eine spezielle Form des Fernabsatzes.',
          },
          { type: 'merke', text: 'Erst im Geschäft verhandelt und dann per Telefon abgeschlossen? Kein Fernabsatz – es müssen ALLE Phasen auf Distanz sein.' },
          {
            type: 'ablauf',
            titel: 'So läuft ein Onlinekauf ab',
            schritte: [
              { titel: 'Produkte in den Warenkorb legen' },
              { titel: 'Persönliche Daten und Bezahlart angeben' },
              { titel: 'Klick auf den Bestellbutton', text: '= Vertrag abgeschlossen!' },
            ],
          },
        ],
      },
      {
        titel: 'Risiken beim Onlineshopping',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Risiko', 'Was kann passieren?'],
            zeilen: [
              ['Betrugsgefahr', 'Anbieter verschwindet nach der Zahlung, liefert nie (Fake Shop)'],
              ['Keine Besichtigung', 'Nur Bilder und Bewertungen – die können gefälscht sein'],
              ['Datenmissbrauch', 'Hacker stehlen Kontodaten'],
            ],
          },
        ],
      },
      {
        titel: 'Pflichten des Verkäufers',
        blocks: [
          { type: 'text', text: 'Damit Käufer geschützt sind, muss der Verkäufer Gesetze einhalten (KSchG, FAGG, ECG).' },
          {
            type: 'begriff',
            term: 'Informationspflicht',
            erklaerung: 'Im Impressum: Name/Firma, Anschrift, Kontakt, UID-Nummer, Aufsichtsbehörde, Firmenbuchnummer, Kammer. Vor Vertragsabschluss: Produkteigenschaften, Preis inkl. Steuern, Lieferung/Zahlung, Rücktrittsrecht, Gewährleistung. AGB müssen leicht auffindbar sein.',
          },
          {
            type: 'begriff',
            term: 'Bestätigungspflicht',
            erklaerung: 'Es muss klar sein, dass der Bestellbutton einen Kauf auslöst („Jetzt kostenpflichtig bestellen“). Danach muss eine Bestellbestätigung kommen.',
          },
          {
            type: 'begriff',
            term: 'Lieferfrist',
            erklaerung: 'Spätestens 30 Tage nach Vertragsabschluss. Geht es nicht, sofort melden und Geld zurückzahlen.',
          },
          {
            type: 'begriff',
            term: 'Rücktrittsrecht',
            erklaerung: 'Der Käufer muss über sein Recht auf Rücktritt informiert werden.',
          },
        ],
      },
      {
        titel: 'Sicher online einkaufen',
        blocks: [
          {
            type: 'ablauf',
            titel: '9 Tipps',
            schritte: [
              { titel: 'Verkäufer und Produkt prüfen', text: 'Unternehmen oder Privatperson?' },
              { titel: 'Geprüfte Shops aus der EU wählen', text: 'z. B. mit E-Commerce-Gütezeichen' },
              { titel: 'AGB lesen' },
              { titel: 'Bestellbestätigung und AGB speichern' },
              { titel: 'Misstrauisch bei Gratisangeboten', text: 'oft Lockangebote mit laufenden Kosten' },
              { titel: 'Nicht im Voraus zahlen' },
              { titel: 'Versand- und Verpackungskosten beachten' },
              { titel: 'Bei Problemen: Konsumentenschutz', text: 'z. B. konsument.at' },
              { titel: 'Verschlüsselte Verbindung', text: '„https://“ und Schloss-Symbol' },
            ],
          },
          {
            type: 'begriff',
            term: 'Elektronische Signatur (digitale Unterschrift)',
            erklaerung: 'Gilt gleich wie eine Unterschrift mit der Hand. In Österreich mit der ID Austria (Nachfolger der Handy-Signatur).',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Begriffe',
        punkte: [
          'Fernabsatz = alle Phasen nur über Fernkommunikationsmittel (Internet, Telefon, E-Mail, Katalog, Brief)',
          'E-Commerce = Handel über das Internet; Vertrag durch Klick auf den Bestellbutton',
          'Risiken: Betrug, keine Besichtigung, Datenmissbrauch',
        ],
      },
      {
        titel: 'Verkäufer muss …',
        punkte: [
          'Informationspflicht: Impressum (Name, Anschrift, Kontakt, UID, Firmenbuchnr.) + Produkt, Preis, Lieferung, Rücktrittsrecht; AGB leicht auffindbar',
          'Bestätigungspflicht: klarer Bestellbutton + Bestellbestätigung',
          'Lieferfrist: max. 30 Tage',
          'über das Rücktrittsrecht informieren',
        ],
      },
      {
        titel: 'Tipps',
        punkte: [
          'Geprüfte EU-Shops, AGB lesen, Belege speichern, nicht vorauszahlen, https beachten',
          'Digitale Unterschrift: ID Austria (Signaturgesetz)',
        ],
      },
    ],
  },
'ruecktrittsrechte': {
    schritte: [
      {
        titel: 'Grundsätzliche Regelungen',
        blocks: [
          { type: 'merke', text: 'Ist ein Kaufvertrag gültig abgeschlossen, gibt es grundsätzlich KEIN Zurück. Beide müssen ihn erfüllen.' },
          { type: 'text', text: 'Es gibt aber 3 Wege, einen Vertrag trotzdem aufzulösen:' },
          {
            type: 'begriff',
            term: 'Abänderung',
            erklaerung: 'Einvernehmliche Auflösung (Rückgabe, beide sind einverstanden) oder Umtausch gegen ein anderes Produkt.',
          },
          { type: 'merke', text: 'Ein Umtauschrecht gibt es im Gesetz NICHT! Es muss vereinbart sein (Kaufvertrag oder Rechnung). Der Verkäufer darf auch nur einen Gutschein geben.' },
          {
            type: 'begriff',
            term: 'Rücktritt',
            erklaerung: 'Nur möglich, wenn: Rücktrittsrecht ausdrücklich vereinbart · Vertrag rechtswidrig (z. B. fehlende Geschäftsfähigkeit) · arglistige Täuschung · Verzug (z. B. Verkäufer liefert nicht rechtzeitig).',
          },
          {
            type: 'begriff',
            term: 'Arglistig',
            erklaerung: 'Bewusst bösartig – z. B. der Verkäufer verschweigt absichtlich einen Fehler.',
          },
          {
            type: 'begriff',
            term: 'Stornierung',
            erklaerung: 'Vertrag rückgängig machen, meist gegen eine Stornogebühr (steht im Vertrag oder in den AGB).',
            beispiel: 'Urlaubsreise krankheitsbedingt absagen',
          },
        ],
      },
      {
        titel: 'Besondere Rücktrittsrechte',
        blocks: [
          {
            type: 'text',
            text: 'Für Konsumenten gibt es besondere Rücktrittsrechte – weil man bei manchen Geschäften überrumpelt wird.',
          },
          {
            type: 'begriff',
            term: 'Wann gelten sie?',
            erklaerung: 'Bei Geschäften AUSSERHALB der Geschäftsräume (Haustürgeschäft, Werbefahrt) und im FERNABSATZ (Onlineshop).',
          },
          { type: 'merke', text: 'Rücktritt OHNE Angabe von Gründen und OHNE Stornogebühr! Ein Messestand gilt aber als Geschäftsraum.' },
          {
            type: 'tabelle',
            spalten: ['Situation', 'Rücktrittsfrist'],
            zeilen: [
              ['Informiert, Ware sofort übergeben', '14 Kalendertage ab Vertragsabschluss'],
              ['Informiert, Ware wird geliefert', '14 Kalendertage ab Lieferung'],
              ['NICHT über Rücktrittsrecht informiert', '1 Jahr + 14 Kalendertage'],
            ],
          },
          {
            type: 'text',
            text: 'Beispiel: Jacke online bestellt, geliefert am 7. August → Rücktritt bis 21. August möglich.',
          },
        ],
      },
      {
        titel: 'Ablauf & Ausnahmen',
        blocks: [
          {
            type: 'begriff',
            term: 'Form des Rücktritts',
            erklaerung: 'Keine bestimmte Form nötig – aber schriftlich ist als Beweis besser.',
          },
          {
            type: 'ablauf',
            titel: 'Nach dem Rücktritt',
            schritte: [
              { titel: 'Käufer zahlt Rücksendung', text: 'wenn er darüber informiert wurde' },
              { titel: 'Benutzt/verbraucht?', text: 'Verkäufer darf Entschädigung verlangen' },
              { titel: 'Verkäufer zahlt Geld zurück' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['KEIN Rücktritt bei …', 'Beispiel'],
            zeilen: [
              ['Hauszustellung von Lebensmitteln', 'Pizza'],
              ['Sonderanfertigungen', 'maßgeschneidertes Kleid, Fotobuch'],
              ['Software, CDs, DVDs mit geöffnetem Siegel', '–'],
              ['Dringende Reparaturen auf Bestellung', 'Installateur gerufen'],
              ['Freizeitdienstleistungen mit Termin', 'Theaterkarten, Flugtickets'],
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Grundsatz',
        punkte: [
          'Gültiger Vertrag = kein Zurück',
          'Abänderung: einvernehmliche Auflösung oder Umtausch (KEIN gesetzliches Umtauschrecht!)',
          'Rücktritt nur bei: vereinbart, rechtswidrig, arglistige Täuschung, Verzug',
          'Stornierung: meist mit Stornogebühr',
        ],
      },
      {
        titel: 'Besondere Rücktrittsrechte (Konsumenten)',
        punkte: [
          'Bei Geschäften außerhalb der Geschäftsräume und im Fernabsatz',
          'Ohne Gründe und ohne Stornogebühr; Form egal (schriftlich empfohlen)',
          'Frist: 14 Tage ab Abschluss/Lieferung · nicht informiert: 1 Jahr + 14 Tage',
          'Ausnahmen: Lebensmittel-Lieferung, Sonderanfertigung, geöffnete Software, dringende Reparatur, Tickets',
        ],
      },
    ],
  },
'bestandteile-kaufvertrag': {
    schritte: [
      {
        titel: 'Überblick',
        blocks: [
          { type: 'text', text: 'Bei Geschäften zwischen Unternehmen (B2B) wird viel geregelt, um Streit zu vermeiden. Es gibt 3 Gruppen von Bestandteilen:' },
          {
            type: 'tabelle',
            spalten: ['Gruppe', 'Inhalt', 'Pflicht?'],
            zeilen: [
              ['Gesetzliche Bestandteile', 'Verkäufer, Käufer, Qualität, Menge, Preis', 'MUSS immer vereinbart werden'],
              ['Regelmäßige kaufmännische', 'Lieferbedingungen, Zahlungsbedingungen', 'kann zusätzlich'],
              ['Sonstige kaufmännische', 'Eigentumsvorbehalt, Pönale, Stornogebühr, Garantie, Umtausch, Verpackung, Nebenleistungen', 'kann zusätzlich'],
            ],
          },
        ],
      },
      {
        titel: 'Qualität',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Vertretbar (fungibel)', punkte: ['Gleichwertig ersetzbar', 'Ein Stück zeigt die Qualität aller', 'z. B. Handy, Schulheft A4'] },
            rechts: { titel: 'Nicht vertretbar (nicht fungibel)', punkte: ['Einzigartig', 'Muss man genau ansehen/beschreiben', 'z. B. Kunstwerk, Grundstück, Gebrauchtwagen'] },
          },
          {
            type: 'tabelle',
            spalten: ['Qualitätsfestlegung', 'Erklärung'],
            zeilen: [
              ['Besichtigung', 'Käufer prüft selbst („wie besichtigt“) – v. a. Einzelstücke'],
              ['Beschreibung, Abbildung', 'Eigenschaften in Text und Bild (Onlineshop)'],
              ['Muster, Proben', 'kleine Mengen zum Testen'],
              ['Marken, Typen', 'Marke = geschütztes Zeichen (Wort, Bild, kombiniert); Typ = Modell (iPhone 15)'],
              ['Normen, Qualitätsklassen, Gütezeichen', 'ÖNORM/DIN A4 · Äpfel Klasse Extra · AMA-Gütesiegel'],
              ['Spezifikationskauf', 'Details (Größe, Farbe) legt der Käufer später fest'],
              ['Kauf in Bausch und Bogen', 'ganze Ware zu einem Preis, ohne Rücksicht auf Fehler (ganze Ernte)'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Probe-Art', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Kauf nach Probe', 'Ware muss wie die Probe sein', 'Fliesenmuster'],
              ['Kauf auf Probe', 'innerhalb einer Frist zurückgeben möglich', 'Matratze'],
              ['Kauf zur Probe', 'kleine Menge billig testen, keine Rückgabe', 'Wandfarbe'],
            ],
          },
        ],
      },
      {
        titel: 'Menge',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Mengenangabe', 'Beispiel'],
            zeilen: [
              ['Genau', '50 kg Zement, 100 Paar Schuhe'],
              ['Ungefähr („circa“ + Abweichung)', 'ca. 3000 kg Kies ± 5 %'],
              ['Ohne (in Bausch und Bogen)', 'ganze künftige Weinernte'],
            ],
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'Produkt allein', wert: 'Netto' },
              { titel: '+ Verpackung', wert: 'Tara' },
              { titel: '= gesamt', wert: 'Brutto' },
            ],
          },
          {
            type: 'vergleich',
            links: { titel: 'Draufgabe', punkte: ['Mehr geliefert als bezahlt', '10 m³ bezahlt, 11 m³ geliefert'] },
            rechts: { titel: 'Dreingabe', punkte: ['Weniger verrechnet als geliefert', '10 m³ geliefert, 9 m³ verrechnet'] },
          },
        ],
      },
      {
        titel: 'Preis, Rabatt & Skonto',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Fester Preis', punkte: ['Genau angegeben, wird nicht mehr geändert'] },
            rechts: { titel: 'Freibleibender Preis', punkte: ['Markt-/Börsenpreis (Heizöl, Gold)', 'Wertsicherungsklausel (an Verbraucherpreisindex)', 'Basiskauf (Richtpreis je nach Qualität)', 'Kostenschwankungsklausel (Hausbau)'] },
          },
          {
            type: 'begriff',
            term: 'Rabatt',
            erklaerung: 'Preisnachlass aus einem bestimmten Grund.',
          },
          {
            type: 'tabelle',
            spalten: ['Grund', 'Rabattarten'],
            zeilen: [
              ['Große Menge', 'Mengenrabatt, Schlussrabatt, Naturalrabatt (Drauf-/Dreingabe), Umsatzbonus (am Jahresende)'],
              ['Treue Kunden', 'Treuerabatt'],
              ['Besondere Ereignisse', 'Einführungs-, Ausverkaufs-, Mängelrabatt'],
            ],
          },
          {
            type: 'begriff',
            term: 'Skonto',
            erklaerung: 'Preisabzug für schnelles Zahlen (vor dem Zahlungstermin). Meist 2–5 %.',
            beispiel: '„30 Tage netto oder 7 Tage mit 3 % Skonto“',
          },
          { type: 'merke', text: 'Rabatt = aus einem Grund. Skonto = wegen schneller Zahlung. B2B: Preise ohne USt (netto). B2C: Preise inkl. USt (brutto).' },
        ],
      },
      {
        titel: 'Preiskalkulation',
        blocks: [
          {
            type: 'begriff',
            term: 'Bezugskalkulation',
            erklaerung: 'Berechnet den Einstandspreis = was das Produkt mich im Einkauf wirklich kostet.',
          },
          {
            type: 'tabelle',
            spalten: ['Bezugskalkulation', 'Beispiel 30 T-Shirts'],
            zeilen: [
              ['Listeneinkaufspreis (ohne USt)', '285,00'],
              ['− Lieferantenrabatt (20 %)', '− 57,00'],
              ['= Zieleinkaufspreis', '228,00'],
              ['− Lieferantenskonto (2 %)', '− 4,56'],
              ['= Kassaeinkaufspreis', '223,44'],
              ['+ Bezugskosten', '+ 20,50'],
              ['= Einstandspreis', '243,94 (1 Stück: 8,13)'],
            ],
          },
          {
            type: 'begriff',
            term: 'Absatzkalkulation',
            erklaerung: 'Berechnet vom Einstandspreis aus den Verkaufspreis inkl. USt.',
          },
          {
            type: 'tabelle',
            spalten: ['Absatzkalkulation', 'Beispiel 1 T-Shirt'],
            zeilen: [
              ['Einstandspreis', '8,13'],
              ['+ Regien (30 % – eigene Kosten: Miete, Personal …)', '+ 2,44'],
              ['= Selbstkostenpreis', '10,57'],
              ['+ Gewinn (20 %)', '+ 2,11'],
              ['= Kassaverkaufspreis', '12,68'],
              ['+ Kundenskonto (2 %, im Hundert)', '+ 0,26'],
              ['= Zielverkaufspreis', '12,94'],
              ['+ Kundenrabatte (im Hundert)', '+ 1,10'],
              ['= Nettoverkaufspreis', '14,04'],
              ['+ Umsatzsteuer (20 %)', '+ 2,81'],
              ['= Bruttoverkaufspreis', '16,85'],
            ],
          },
          { type: 'merke', text: 'Skonto und Rabatte in der Absatzkalkulation „im Hundert“ rechnen: Wert · Prozentsatz / (100 − Prozentsatz). Mehrere Rabatte einzeln nacheinander!' },
        ],
      },
      {
        titel: 'Lieferbedingungen',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Erfüllungszeit', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Promptgeschäft', 'sofort (gilt, wenn nichts vereinbart)', '–'],
              ['Fixgeschäft', 'genauer Termin oder Zweck', '„fix am 20. April“, Hochzeitstorte'],
              ['Gewöhnliches Termingeschäft', 'ungefährer Termin', '„innerhalb von 2 Wochen“'],
              ['Kauf auf Abruf', 'große Menge, Teile bei Bedarf abrufen', '–'],
            ],
          },
          {
            type: 'begriff',
            term: 'Erfüllungsort',
            erklaerung: 'Ort, wo die Ware übergeben wird – dort gehen Eigentum, Risiko und Kosten auf den Käufer über.',
          },
          { type: 'text', text: 'Übergabe kann körperlich (Schuhe), symbolisch (Schlüssel, Lagerschein) oder elektronisch (Download) sein. Ohne Vereinbarung: B2B = Übergabe an den Frachtführer, B2C = Übergabe an den Käufer.' },
          {
            type: 'transportweg',
            titel: '„Ab Werk“ (Einpunktklausel) – gut für den Verkäufer',
            stationen: ['Verkäufer', 'Bahnhof A', 'Bahnhof B', 'Käufer'],
            risiko: 0,
            kosten: 0,
          },
          {
            type: 'transportweg',
            titel: '„Frei Haus“ (Einpunktklausel) – gut für den Käufer',
            stationen: ['Verkäufer', 'Bahnhof A', 'Bahnhof B', 'Käufer'],
            risiko: 3,
            kosten: 3,
          },
          {
            type: 'transportweg',
            titel: '„Frachtfrei Bahnhof B“ (Zweipunktklausel)',
            stationen: ['Verkäufer', 'Bahnhof A', 'Bahnhof B', 'Käufer'],
            risiko: 0,
            kosten: 2,
          },
          { type: 'merke', text: 'Einpunktklausel: Risiko und Kosten am SELBEN Ort. Zweipunktklausel: an ZWEI Orten (Risiko schon beim ersten Frachtführer). Internationale Klauseln heißen Incoterms.' },
        ],
      },
      {
        titel: 'Zahlungsbedingungen',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Erfüllungszeit Zahlung', 'Wann?', 'Beispiel'],
            zeilen: [
              ['Vorauszahlung', 'vor der Lieferung', 'Onlineshop, Sonderanfertigung'],
              ['Prompte Zahlung (Kassakauf)', 'bei Lieferung (gilt ohne Vereinbarung)', '„zahlbar ohne Abzug nach Erhalt“'],
              ['Spätere Zahlung (Zielkauf)', 'nach der Lieferung', '„8 Tage 3 % Skonto, 30 Tage netto“'],
              ['Abzahlungsgeschäft', 'in Raten', '12 Monatsraten (teuerste Kreditform!)'],
            ],
          },
          {
            type: 'begriff',
            term: 'Zahlungsziel & Kassafrist',
            erklaerung: 'Zahlungsziel = Frist, bis wann gezahlt werden muss. Kassafrist = kürzere Frist für den Skontoabzug.',
          },
          {
            type: 'begriff',
            term: 'Jahresverzinsung des Skontos',
            erklaerung: 'Skonto % / (Zahlungsziel − Kassafrist) · 360',
            beispiel: '3 / (30 − 8) · 360 = 49,09 % p. a. → Skonto ausnützen lohnt sich fast immer, sogar mit Bankkredit!',
          },
          {
            type: 'begriff',
            term: 'Erfüllungsort der Zahlung',
            erklaerung: 'Geldschulden sind Bringschulden: Käufer bringt/überweist das Geld zum Sitz des Verkäufers und zahlt die Überweisungsspesen.',
          },
        ],
      },
      {
        titel: 'Sonstige Bestandteile & AGB',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Bestandteil', 'Bedeutung'],
            zeilen: [
              ['Eigentumsvorbehalt', 'Ware gehört dem Verkäufer, bis alles bezahlt ist'],
              ['Pönale (Vertragsstrafe)', 'Strafe für den Verkäufer bei zu später Lieferung'],
              ['Stornogebühr (Reuegeld)', 'Käufer darf gegen Gebühr zurücktreten'],
              ['Garantie', 'freiwillig: Verkäufer haftet für Mängel innerhalb der Garantiefrist'],
              ['Umtauschrecht', 'keine Pflicht, nur wenn vereinbart'],
              ['Verpackung', 'Kosten trägt der Käufer (meist im Preis)'],
              ['Nebenleistungen', 'Montage, Einschulung, Updates'],
            ],
          },
          {
            type: 'begriff',
            term: 'Funktionen der Verpackung',
            erklaerung: 'Schutz · Transport- und Lagerfähigkeit · Verkaufsförderung/Werbung · Information/Garantie · intelligente Verpackung (Freshcode).',
          },
          {
            type: 'begriff',
            term: 'AGB (Allgemeine Geschäftsbedingungen)',
            erklaerung: 'Vorformulierte Vertragsinhalte für viele Kaufverträge („das Kleingedruckte“), z. B. Liefer- und Zahlungsbedingungen, Garantie, Umtausch.',
          },
          { type: 'merke', text: 'AGB gelten nur, wenn der Käufer sie VOR Vertragsabschluss kennen konnte. Sie müssen klar sein und dürfen Käufer nicht unfair benachteiligen.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Gesetzliche Bestandteile',
        punkte: [
          'Verkäufer, Käufer, Qualität, Menge, Preis – müssen immer vereinbart werden',
          'Qualität: fungibel (ersetzbar) ↔ nicht fungibel (einzigartig); Festlegung durch Besichtigung, Beschreibung, Muster/Proben, Marken/Typen, Normen/Gütezeichen',
          'Kauf nach Probe · auf Probe (Rückgabe) · zur Probe (Test, keine Rückgabe)',
          'Menge: genau, ungefähr, ohne (Bausch und Bogen) · Netto + Tara = Brutto · Draufgabe / Dreingabe',
          'Preis: fest oder freibleibend · Rabatt (aus Grund) · Skonto (schnelle Zahlung)',
        ],
      },
      {
        titel: 'Kalkulation',
        punkte: [
          'Bezug: Listenpreis − Rabatt − Skonto + Bezugskosten = Einstandspreis',
          'Absatz: Einstandspreis + Regien + Gewinn + Skonto + Rabatte + USt = Bruttoverkaufspreis',
          'Skonto/Rabatt im Absatz „im Hundert“: · % / (100 − %)',
        ],
      },
      {
        titel: 'Liefer- & Zahlungsbedingungen',
        punkte: [
          'Lieferzeit: Promptgeschäft · Fixgeschäft · Termingeschäft · Kauf auf Abruf',
          'Erfüllungsort = Übergang von Eigentum, Risiko, Kosten',
          'Ab Werk (Käufer trägt alles) · Frei Haus (Verkäufer trägt alles) · Frachtfrei … (Zweipunktklausel)',
          'Zahlung: Vorauszahlung · Kassakauf · Zielkauf · Abzahlung',
          'Skonto-Jahreszins = Skonto% / (Ziel − Kassafrist) · 360',
          'Geldschulden sind Bringschulden',
        ],
      },
      {
        titel: 'Sonstiges & AGB',
        punkte: [
          'Eigentumsvorbehalt, Pönale, Stornogebühr, Garantie, Umtausch, Verpackung, Nebenleistungen',
          'AGB = vorformulierte Vertragsinhalte; müssen vor Abschluss bekannt und klar sein',
        ],
      },
    ],
  },
'schriftverkehr-kaufvertrag': {
    schritte: [
      {
        titel: 'Der Weg im Überblick',
        blocks: [
          { type: 'text', text: 'Zwischen Unternehmen (B2B) wird jede Phase mit Schriftstücken dokumentiert. Das nennt man kaufmännischen Schriftverkehr.' },
          {
            type: 'ablauf',
            titel: 'Vom Angebot bis zur Rechnung',
            schritte: [
              { titel: 'Anpreisung (Verkäufer)', text: 'Katalog, Werbung – unverbindlich' },
              { titel: 'Anfrage (Käufer)', text: 'Infos oder Angebot anfordern – unverbindlich' },
              { titel: 'Angebot (Verkäufer)', text: 'verbindlich: will zu diesen Bedingungen verkaufen' },
              { titel: 'Bestellung (Käufer)', text: 'Auftrag an den Lieferanten' },
              { titel: 'Auftragsbestätigung (Verkäufer)', text: 'wiederholt alle Angaben' },
              { titel: 'Lieferung mit Lieferschein/Gegenschein' },
              { titel: 'Rechnung → Prüfung → Zahlung' },
            ],
          },
          { type: 'merke', text: 'Jedes Schreiben beantwortet 2 Fragen: „Warum schreibe ich?“ (Anlass) und „Was will ich?“ (Ziel).' },
        ],
      },
      {
        titel: 'Anfrage',
        blocks: [
          {
            type: 'vergleich',
            frage: 'Wo findet der Käufer Lieferanten?',
            links: { titel: 'Unternehmensintern', punkte: ['Eigene Bezugsquellendatei (Infos über bisherige Lieferanten)'] },
            rechts: { titel: 'Unternehmensextern', punkte: ['Anpreisungen (Kataloge, Werbemails)', 'Geschäftsfreunde', 'Messen', 'Lieferantensuchmaschinen (wlw.at)', 'Wirtschaftskammer (wko.at)'] },
          },
          {
            type: 'ablauf',
            titel: 'Checkliste Anfrage',
            schritte: [
              { titel: 'Zweck angeben' },
              { titel: 'Eigene Bedürfnisse klar beschreiben' },
              { titel: 'Benötigte Infos anführen', text: 'allgemein (Katalog) oder speziell (Qualität, Preis, Bedingungen)' },
              { titel: 'Um Angebot/Infos ersuchen' },
              { titel: 'Ansprechperson nennen' },
              { titel: 'Form und Termin für die Antwort festlegen' },
            ],
          },
          { type: 'merke', text: 'Anfragen sind unverbindlich und an keine Form gebunden.' },
        ],
      },
      {
        titel: 'Angebot & Angebotsvergleich',
        blocks: [
          {
            type: 'begriff',
            term: 'Angebot',
            erklaerung: 'Der Verkäufer zeigt, dass er ein bestimmtes Geschäft abschließen will. Je klarer formuliert, desto weniger Streit später.',
          },
          {
            type: 'ablauf',
            titel: 'Checkliste Angebot',
            schritte: [
              { titel: 'Danken (verlangt) bzw. Anlass nennen (unverlangt)' },
              { titel: 'Produkt genau beschreiben, Menge, Preis, USt' },
              { titel: 'Befristung/Einschränkung' },
              { titel: 'Liefer- und Zahlungsbedingungen' },
              { titel: 'Hinweis auf AGB, Beilagen' },
              { titel: 'Hoffnung auf Geschäftsabschluss' },
            ],
          },
          {
            type: 'vergleich',
            frage: 'Angebote vergleichen:',
            links: { titel: 'Nur Preise vergleichen', punkte: ['→ billigster Anbieter'] },
            rechts: { titel: 'Auch Qualität, Lieferzeit, Bedingungen, Service, Termintreue', punkte: ['→ bester Anbieter'] },
          },
          {
            type: 'begriff',
            term: 'Gegenangebot',
            erklaerung: 'Der Käufer ist mit einzelnen Bedingungen nicht einverstanden und schlägt eigene vor. Der Verkäufer entscheidet, ob er annimmt.',
          },
        ],
      },
      {
        titel: 'Bestellung & Auftragsbestätigung',
        blocks: [
          {
            type: 'begriff',
            term: 'Bestellung',
            erklaerung: 'Auftrag an den Lieferanten, ein bestimmtes Produkt zu liefern. Formfrei, aber meist schriftlich.',
          },
          {
            type: 'entscheidung',
            titel: 'Wann ist der Vertrag abgeschlossen?',
            schritte: [
              {
                frage: 'Worauf beruht die Bestellung?',
                links: { antwort: 'Verbindliches Angebot', ergebnis: 'Sofort mit Bestellung', beispiel: 'Auftragsbestätigung nur zur Bestätigung' },
                rechts: { antwort: 'Anpreisung / unverbindlich', ergebnis: 'Erst mit Auftragsbestätigung', beispiel: 'Verkäufer kann noch abändern' },
              },
            ],
          },
          {
            type: 'begriff',
            term: 'Auftragsbestätigung',
            erklaerung: 'Der Verkäufer bestätigt die Bestellung und wiederholt alle Angaben, um Irrtümer zu vermeiden.',
          },
          {
            type: 'vergleich',
            links: { titel: 'NACH Abschluss', punkte: ['Bestellung nach verbindlichem Angebot', 'Nur Bestätigung, nicht zwingend nötig'] },
            rechts: { titel: 'ALS Abschluss', punkte: ['Bestellung nach Anpreisung/unverbindlichem Angebot', 'Vertrag kommt ERST mit ihr zustande'] },
          },
        ],
      },
      {
        titel: 'Lieferung & Rechnung',
        blocks: [
          {
            type: 'vergleich',
            frage: 'Pflichten bei der Erfüllung:',
            links: { titel: 'Verkäufer', punkte: ['Produkte liefern', 'Rechnung legen'] },
            rechts: { titel: 'Käufer', punkte: ['Produkte annehmen', 'Zahlen'] },
          },
          {
            type: 'tabelle',
            spalten: ['Begleitpapier', 'Bedeutung'],
            zeilen: [
              ['Lieferschein', 'listet gelieferte Produkte auf (OHNE Preis), bleibt beim Käufer'],
              ['Gegenschein', 'Kopie; Käufer bestätigt mit Unterschrift die Übernahme, geht zurück zum Verkäufer'],
              ['Frachtdokumente', 'nur wenn ein Frachtführer liefert (Bahn, Lkw)'],
            ],
          },
          {
            type: 'begriff',
            term: 'Rechnung (Faktura)',
            erklaerung: 'Rechnet die Lieferung ab. Muss laut UStG u. a. enthalten: Name/Anschrift Verkäufer & Käufer, Lieferdatum, Menge & Bezeichnung, Entgelt netto, USt-Satz und -Betrag, Ausstellungsdatum, fortlaufende Nummer, UID-Nummer.',
          },
          {
            type: 'begriff',
            term: 'Kleinbetragsrechnung',
            erklaerung: 'Bis 400 € brutto reichen weniger Angaben: Verkäufer, Datum, Menge/Bezeichnung, Gesamtbetrag inkl. USt, Steuersatz, Lieferdatum.',
          },
          {
            type: 'zyklus',
            mitte: 'Annahme',
            schritte: ['Produkt annehmen & prüfen', 'Einlagern', 'Rechnung prüfen', 'Zahlung freigeben'],
          },
          { type: 'merke', text: 'Erkennbare Mängel sofort am Liefer- und Gegenschein vermerken! B2B wird überwiesen, nicht bar gezahlt.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Ablauf',
        punkte: [
          'Anpreisung → Anfrage → Angebot → Bestellung → Auftragsbestätigung → Lieferung → Rechnung → Zahlung',
          'Jedes Schreiben: „Warum schreibe ich?“ + „Was will ich?“',
        ],
      },
      {
        titel: 'Anbahnung',
        punkte: [
          'Infoquellen: intern (Bezugsquellendatei) · extern (Messen, Kataloge, wlw.at, WKO)',
          'Anfrage: unverbindlich, formfrei',
          'Angebotsvergleich: nur Preis = billigster · mit Qualität/Service/Lieferzeit = bester Anbieter',
          'Gegenangebot: Käufer ändert Bedingungen',
        ],
      },
      {
        titel: 'Abschluss',
        punkte: [
          'Bestellung nach verbindlichem Angebot → Vertrag sofort; Auftragsbestätigung NACH Abschluss',
          'Bestellung nach Anpreisung → Vertrag erst durch Auftragsbestätigung (ALS Abschluss)',
        ],
      },
      {
        titel: 'Erfüllung',
        punkte: [
          'Verkäufer: liefern + Rechnung · Käufer: annehmen + zahlen',
          'Lieferschein (ohne Preis) · Gegenschein (Unterschrift, zurück) · Frachtdokumente',
          'Rechnung nach UStG; Kleinbetragsrechnung bis 400 € brutto',
          'Annahme: prüfen → einlagern → Rechnung prüfen → Zahlung freigeben',
        ],
      },
    ],
  },
'zahlungsformen-1jg': {
    schritte: [
      {
        titel: 'Überblick & Barzahlung',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Zahlungsform', 'Beispiele'],
            zeilen: [
              ['Barzahlung', 'Münzen, Banknoten'],
              ['Mit Girokonto', 'Zahlungsanweisung, SEPA-Dauerauftrag, SEPA-Lastschrift, Nachnahme'],
              ['Zahlungskarten', 'Debitkarte, Kreditkarte, Prepaidkarte'],
              ['Mit dem Computer', 'E-Banking, Onlineshopping (PayPal, Klarna, eps …)'],
              ['Mit dem Handy', 'M-Payment (Banking-Apps, Apple Pay)'],
            ],
          },
          {
            type: 'begriff',
            term: 'Barzahlung',
            erklaerung: 'Der Schuldner gibt dem Gläubiger Geld in Münzen oder Banknoten – direkt zwischen zwei Personen.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Vorteile', punkte: ['Einfach', 'Überblick über Ausgaben', 'Anonym', 'Keine Gebühren', 'Geld sofort verfügbar'] },
            rechts: { titel: 'Nachteile', punkte: ['Persönliches Treffen nötig', 'Verlust- und Diebstahlrisiko', 'Umständlich (Kleingeld, Zählen)'] },
          },
          {
            type: 'begriff',
            term: 'Zahlungsbeleg',
            erklaerung: 'Jeder Betrieb muss bei Barzahlung einen Beleg ausstellen: Kassabeleg (Registrierkasse), Saldierungsvermerk („Betrag dankend erhalten“) oder Quittung.',
          },
          {
            type: 'begriff',
            term: 'Falschgeld prüfen',
            erklaerung: '„Fühlen – Sehen – Kippen“: Relief, Wasserzeichen, Hologramm, Smaragdzahl (wechselt Farbe), Sicherheitsfaden. Verdacht? Nicht weitergeben, zur Bank bringen!',
          },
        ],
      },
      {
        titel: 'Girokonto',
        blocks: [
          {
            type: 'begriff',
            term: 'Girokonto',
            erklaerung: 'Bankkonto, mit dem man seinen Zahlungsverkehr abwickelt. „Giro“ = Kreis(lauf) des Geldes.',
          },
          {
            type: 'tabelle',
            spalten: ['Zahlungsart', 'Wer hat ein Konto?', 'Beispiel'],
            zeilen: [
              ['Bargeldlos', 'beide', 'Überweisung, Karte, E-Banking'],
              ['Halbbar', 'nur einer', 'Zahlungsanweisung bar einzahlen, Nachnahme, Baranweisung'],
            ],
          },
          {
            type: 'ablauf',
            titel: 'Konto eröffnen',
            schritte: [
              { titel: 'Antragsformular ausfüllen', text: 'wer ist verfügungsberechtigt?' },
              { titel: 'Legitimation', text: 'amtlicher Lichtbildausweis' },
              { titel: 'Unterschriftsprobe abgeben' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Begriff', 'Bedeutung'],
            zeilen: [
              ['Verfügungsberechtigt', 'Inhaber, darf alles (auch Konto löschen)'],
              ['Zeichnungsberechtigt', 'darf Geld abheben, einzahlen, Daueraufträge einrichten – nicht löschen'],
              ['Einzelkonto', 'ein Verfügungsberechtigter'],
              ['Oder-Konto', 'mehrere, jeder darf allein verfügen'],
              ['Und-Konto', 'mehrere, nur gemeinsam'],
            ],
          },
          {
            type: 'vergleich',
            links: { titel: 'Sollzinsen', punkte: ['Zinsen für Schulden (Konto im Minus)', 'hoch: ca. 7–14 % p. a.'] },
            rechts: { titel: 'Habenzinsen', punkte: ['Zinsen für Guthaben', 'sehr niedrig, davon 25 % KESt'] },
          },
          { type: 'merke', text: 'Kontoauszug: Haben/+ = Guthaben, Soll/− = Schuld. Spesen = alle Kosten rund ums Konto (Einzel- oder Pauschalpreis).' },
        ],
      },
      {
        titel: 'Überweisung, Dauerauftrag, Lastschrift, Nachnahme',
        blocks: [
          {
            type: 'begriff',
            term: 'SEPA-Zahlungsanweisung',
            erklaerung: 'Formular für bargeldlose Euro-Überweisungen im SEPA-Raum (EU + Großbritannien, Norwegen, Island, Liechtenstein, Schweiz). Gleiche Kosten wie im Inland.',
          },
          {
            type: 'begriff',
            term: 'IBAN & BIC',
            erklaerung: 'IBAN = internationale Kontonummer (AT + Prüfziffer + Bankleitzahl + Kontonummer). BIC = Code der Bank; bei SEPA-Überweisungen nicht nötig.',
          },
          {
            type: 'tabelle',
            spalten: ['', 'SEPA-Dauerauftrag', 'SEPA-Lastschrift'],
            zeilen: [
              ['Zahlungen', 'regelmäßig, gleicher Betrag', 'unregelmäßig (Betrag/Termin wechselt)'],
              ['Beispiel', 'Miete, Abo, Kreditrate', 'Strom, Gas, Telefon'],
              ['Wer bestimmt?', 'der Zahler', 'der Empfänger'],
              ['Auftrag', 'bei der Bank', 'Einzugsermächtigung (Mandat) an Empfänger'],
              ['Widerruf', 'bei der Bank', 'beim Empfänger'],
            ],
          },
          { type: 'merke', text: 'Vorteile von Dauerauftrag und Lastschrift: pünktlich und automatisch, keine Verzugszinsen.' },
          {
            type: 'ablauf',
            titel: 'Zahlung per Nachnahme',
            schritte: [
              { titel: 'Verkäufer schickt Ware per Post/Logistiker' },
              { titel: 'Käufer bekommt Ware nur gegen Bezahlung' },
              { titel: 'Zusteller überweist das Geld an den Verkäufer' },
            ],
          },
        ],
      },
      {
        titel: 'Zahlungskarten',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Karte', 'Prinzip', 'Wann wird abgebucht?'],
            zeilen: [
              ['Debitkarte', '„pay now“', 'sofort vom Konto'],
              ['Kreditkarte', '„pay later“', 'gesammelt am Ende des Monats'],
              ['Prepaidkarte', '„pay before“', 'vorher aufgeladenes Guthaben, kein Konto nötig'],
            ],
          },
          {
            type: 'begriff',
            term: 'Debitkarte',
            erklaerung: 'Bargeld am Bankomaten (mit PIN), bargeldlos zahlen im Geschäft und online. Kontaktlos (NFC) bis 50 € ohne PIN.',
          },
          {
            type: 'begriff',
            term: 'Kreditkarte',
            erklaerung: 'Nur mit regelmäßigem Einkommen und ab 18. Weltweit zahlen, online mit Kartennummer + Ablaufdatum + Prüfziffer + 3D-Secure. Bargeld abheben ist teuer!',
          },
          {
            type: 'begriff',
            term: 'PIN',
            erklaerung: 'Persönliche Geheimzahl. Nie weitergeben, nie mit der Karte aufbewahren, verdeckt eingeben. Bei Verlust Karte sofort sperren!',
          },
        ],
      },
      {
        titel: 'E-Banking & M-Payment',
        blocks: [
          {
            type: 'begriff',
            term: 'E-Banking (Onlinebanking)',
            erklaerung: 'Bankgeschäfte über das Internet erledigen (Überweisungen, Daueraufträge, Kontostand, Karteneinstellungen). Braucht Girokonto, Freischaltung und App.',
          },
          {
            type: 'begriff',
            term: 'Zwei-Faktor-Authentifizierung',
            erklaerung: 'Jeder Auftrag wird extra bestätigt: mobile TAN (per SMS) oder Push-TAN (per App).',
          },
          {
            type: 'vergleich',
            links: { titel: 'Vorteile', punkte: ['Jederzeit, überall', 'Aktueller Überblick', 'Wenig Formulare', 'Günstiger'] },
            rechts: { titel: 'Nachteile', punkte: ['Kein persönlicher Kontakt', 'Sicherheitsrisiken (Hacker)', 'Langsames Internet'] },
          },
          { type: 'merke', text: 'Banken schicken NIE E-Mails, in denen du Daten eingeben sollst (Phishing)! Adresse selbst eintippen, auf https und Schloss achten.' },
          {
            type: 'tabelle',
            spalten: ['Onlineshopping-Verfahren', 'So funktioniert es'],
            zeilen: [
              ['Paysafecard', 'Wertkarte, 16-stelliger PIN-Code, keine persönlichen Daten'],
              ['PayPal', 'Konto bei PayPal, zahlen mit E-Mail + Passwort'],
              ['Klarna', 'Sofortüberweisung mit Bankdaten'],
              ['eps', 'Überweisung mit E-Banking-Zugang direkt aus dem Shop'],
            ],
          },
          {
            type: 'begriff',
            term: 'M-Payment (Mobile Payment)',
            erklaerung: 'Zahlen mit dem Handy: Handy statt Karte an die Kassa halten. Über Banking-Apps oder Systeme wie Apple Pay, Google Pay.',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Barzahlung',
        punkte: [
          'Geld direkt übergeben; Beleg: Kassabeleg, Saldierungsvermerk, Quittung',
          'Vorteile: einfach, anonym, keine Gebühren · Nachteile: Treffen nötig, Verlust-/Diebstahlrisiko',
        ],
      },
      {
        titel: 'Girokonto',
        punkte: [
          'Bargeldlos (beide haben Konto) · halbbar (nur einer)',
          'Verfügungsberechtigt (Inhaber) ↔ zeichnungsberechtigt; Einzel-, Oder-, Und-Konto',
          'Sollzinsen = für Schulden (hoch) · Habenzinsen = für Guthaben (niedrig, 25 % KESt)',
          'SEPA-Zahlungsanweisung: IBAN reicht im SEPA-Raum',
          'Dauerauftrag: regelmäßig, gleicher Betrag, Zahler bestimmt · Lastschrift: unregelmäßig, Empfänger bucht ab',
          'Nachnahme: Ware nur gegen Bezahlung beim Zusteller',
        ],
      },
      {
        titel: 'Karten & Online',
        punkte: [
          'Debitkarte „pay now“ · Kreditkarte „pay later“ · Prepaidkarte „pay before“',
          'Kontaktlos (NFC) bis 50 € ohne PIN',
          'E-Banking mit Zwei-Faktor-Authentifizierung (mobile TAN, Push-TAN)',
          'Onlineshopping: Paysafecard, PayPal, Klarna, eps',
          'M-Payment = Zahlen mit dem Handy',
        ],
      },
    ],
  },
'unzuverlaessige-verkaeufer': {
    schritte: [
      {
        titel: 'Überblick',
        blocks: [
          { type: 'text', text: 'Manchmal hält sich ein Vertragspartner nicht an seine Pflichten. Beim Verkäufer gibt es 3 typische Probleme:' },
          {
            type: 'vergleich',
            links: { titel: 'Probleme beim Verkäufer', punkte: ['Lieferverzug', 'Lieferung mangelhafter Produkte', 'Fehlerhafte Rechnung'] },
            rechts: { titel: 'Probleme beim Käufer', punkte: ['Annahmeverzug', 'Zahlungsverzug', '→ eigenes Thema'] },
          },
        ],
      },
      {
        titel: 'Lieferverzug',
        blocks: [
          {
            type: 'begriff',
            term: 'Lieferverzug',
            erklaerung: 'Der Verkäufer liefert nicht rechtzeitig, nicht in der vereinbarten Qualität oder nicht am vereinbarten Ort.',
          },
          {
            type: 'entscheidung',
            titel: 'Wann treten die Rechtsfolgen ein?',
            schritte: [
              {
                frage: 'Welche Art von Liefertermin?',
                links: { antwort: 'Genauer Termin / Zweck', ergebnis: 'Fixgeschäft', beispiel: 'sofort bei Überschreiten' },
                rechts: { antwort: 'Ungefährer Termin', weiter: 'Gewöhnliches Termingeschäft' },
              },
              {
                frage: 'Mahnung mit angemessener Nachfrist (meist 14 Tage) gesetzt?',
                links: { antwort: 'Nein', ergebnis: 'Noch keine Folgen' },
                rechts: { antwort: 'Ja, Nachfrist vorbei', ergebnis: 'Rechtsfolgen treten ein' },
              },
            ],
          },
          {
            type: 'begriff',
            term: 'Rechte des Käufers',
            erklaerung: 'Vom Vertrag zurücktreten ODER auf nachträglicher Lieferung bestehen. Zusätzlich Schadenersatz, wenn ein Schaden nachweisbar ist und den Verkäufer ein Verschulden trifft.',
          },
          {
            type: 'begriff',
            term: 'Deckungskauf',
            erklaerung: 'Der Käufer kauft die Ware woanders. Ist sie teurer, kann er die Differenz als Schadenersatz verlangen.',
            beispiel: 'Laptop 699 € kam nicht → woanders 749 € → 50 € Schadenersatz',
          },
          { type: 'merke', text: 'Beim Fixgeschäft muss der KÄUFER beweisen, dass ein fixer Termin vereinbart war. AGB genau lesen – oft steht dort eine Nachfrist!' },
        ],
      },
      {
        titel: 'Arten von Mängeln',
        blocks: [
          {
            type: 'begriff',
            term: 'Mangel',
            erklaerung: 'Das Produkt ist defekt, entspricht nicht dem Vertrag oder hat nicht die Eigenschaften, die man normalerweise erwartet.',
          },
          {
            type: 'tabelle',
            spalten: ['Einteilung', 'Mangelart', 'Beispiel'],
            zeilen: [
              ['Erkennbarkeit', 'Offen – sofort sichtbar', 'Glas zerbrochen'],
              ['', 'Versteckt – zeigt sich erst später', 'Elektronikfehler'],
              ['', 'Arglistig verschwiegen – Verkäufer wusste es', 'bekannter Fehler verschwiegen'],
              ['Behebbarkeit', 'Behebbar', 'lockerer Knopf'],
              ['', 'Unbehebbar', 'Glasscheibe zu klein'],
              ['Bedeutung', 'Geringfügig', 'andere Farbe als abgebildet'],
              ['', 'Wesentlich', 'Motor kaputt'],
            ],
          },
          {
            type: 'begriff',
            term: 'Mängelrüge',
            erklaerung: 'Mitteilung an den Verkäufer, dass ein Mangel besteht – möglichst schnell, genau beschrieben und am besten schriftlich (Beweis!).',
          },
        ],
      },
      {
        titel: 'Gewährleistung, Garantie, Produkthaftung',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['', 'Gewährleistung', 'Garantie', 'Produkthaftung'],
            zeilen: [
              ['Wer haftet?', 'Verkäufer', 'Hersteller oder Verkäufer', 'Hersteller/Importeur'],
              ['Wofür?', 'Mängel, die schon bei Übergabe da waren', 'Mängel innerhalb eines Zeitraums', 'Personen- und Sachschäden durch fehlerhaftes Produkt'],
              ['Pflicht?', 'gesetzlich', 'freiwillig', 'gesetzlich'],
              ['Geregelt in', 'ABGB, KSchG, UGB, VGG', 'Vertrag', 'PHG'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Gewährleistungsfrist', 'Dauer'],
            zeilen: [
              ['Neue bewegliche Sachen (Laptop)', '2 Jahre ab Übergabe'],
              ['Gebrauchte bewegliche Sachen', '2 Jahre (vereinbar: 1 Jahr)'],
              ['Unbewegliche Sachen (Wohnung)', '3 Jahre'],
              ['Arglistig verschwiegene Mängel', '30 Jahre'],
            ],
          },
          {
            type: 'begriff',
            term: 'Beweislastumkehr',
            erklaerung: 'Am Anfang muss der VERKÄUFER beweisen, dass das Produkt in Ordnung war; danach muss der KÄUFER beweisen, dass der Mangel schon bei Übergabe da war.',
            beispiel: 'B2C (VGG): erste 12 Monate · sonst (ABGB): erste 6 Monate',
          },
          { type: 'merke', text: 'Bei B2C darf die Gewährleistung NICHT ausgeschlossen werden. Nach der Frist bleiben noch 3 Monate, um vor Gericht zu gehen (Verjährungsfrist). Produkthaftung: Selbstbehalt 500 € bei Sachschäden, gilt bis 10 Jahre.' },
        ],
      },
      {
        titel: 'Rechte bei Mängeln',
        blocks: [
          {
            type: 'ablauf',
            titel: 'Rechte aus der Gewährleistung – in dieser Reihenfolge',
            schritte: [
              { titel: 'Verbesserung (Reparatur) oder Austausch', text: 'Käufer wählt; für ihn kostenlos' },
              { titel: 'Nur wenn das nicht geht/verweigert wird/zu lange dauert:', text: 'Preisminderung oder Vertragsauflösung' },
            ],
          },
          { type: 'merke', text: 'Bei geringfügigem Mangel gibt es nur Preisminderung, keine Vertragsauflösung.' },
          {
            type: 'ablauf',
            titel: 'Checkliste Mängelrüge (Käufer)',
            schritte: [
              { titel: 'Auf Bestellung/Lieferschein Bezug nehmen' },
              { titel: 'Erhalt bestätigen' },
              { titel: 'Mangel beschreiben, evtl. beweisen' },
              { titel: 'Lösungsvorschlag machen' },
            ],
          },
          {
            type: 'begriff',
            term: 'Kulanz',
            erklaerung: 'Freiwilliges Entgegenkommen des Verkäufers über die Pflicht hinaus (z. B. Rabatt auf nächste Lieferung).',
          },
        ],
      },
      {
        titel: 'Fehlerhafte Rechnung',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Fehlerquelle', 'Beispiel'],
            zeilen: [
              ['Andere Preise, Nachlässe, Bedingungen als vereinbart', 'Rabatt fehlt, Skonto nicht angeführt'],
              ['Rechenfehler', 'Summe falsch'],
              ['UStG-Bestimmungen nicht erfüllt', 'UID-Nummer fehlt'],
            ],
          },
          { type: 'merke', text: 'Rechnungen sofort mit Angebot/Bestellung/Auftragsbestätigung vergleichen! Nur der Aussteller darf sie korrigieren (neue Rechnung). Fehlt ein UStG-Bestandteil, gibt es keinen Vorsteuerabzug.' },
          {
            type: 'ablauf',
            titel: 'Checkliste Schreiben bei fehlerhafter Rechnung',
            schritte: [
              { titel: 'Auf die fehlerhafte Rechnung hinweisen' },
              { titel: 'Mangel genau beschreiben und begründen' },
              { titel: 'Um Korrektur und neue Rechnung bitten' },
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Lieferverzug',
        punkte: [
          'Nicht rechtzeitig, nicht in vereinbarter Qualität oder nicht am vereinbarten Ort geliefert',
          'Fixgeschäft: Folgen sofort · gewöhnliches Termingeschäft: erst nach Mahnung mit Nachfrist',
          'Rechte: Rücktritt ODER nachträgliche Lieferung; + Schadenersatz bei Verschulden (Deckungskauf)',
        ],
      },
      {
        titel: 'Mängel',
        punkte: [
          'Offen / versteckt / arglistig verschwiegen · behebbar / unbehebbar · geringfügig / wesentlich',
          'Mängelrüge möglichst schnell und schriftlich',
          'Gewährleistung (gesetzlich, Verkäufer, Mangel bei Übergabe) · Garantie (freiwillig) · Produkthaftung (Personen-/Sachschäden, PHG)',
          'Fristen: neu 2 J. · gebraucht 2 J. (1 J. vereinbar) · unbeweglich 3 J. · arglistig 30 J.',
          'Beweislastumkehr: VGG 12 Monate · ABGB 6 Monate',
          'Rechte: 1. Verbesserung/Austausch → 2. Preisminderung/Vertragsauflösung',
        ],
      },
      {
        titel: 'Fehlerhafte Rechnung',
        punkte: [
          'Fehlerquellen: andere Konditionen, Rechenfehler, UStG nicht erfüllt',
          'Nur der Aussteller korrigiert; bei großen Fehlern schriftlich reklamieren',
        ],
      },
    ],
  },
'unzuverlaessige-kaeufer': {
    schritte: [
      {
        titel: 'Annahmeverzug',
        blocks: [
          { type: 'text', text: 'Auch der Käufer kann seine Pflichten verletzen: Er nimmt die Ware nicht an (Annahmeverzug) oder zahlt nicht (Zahlungsverzug).' },
          {
            type: 'begriff',
            term: 'Annahmeverzug',
            erklaerung: 'Der Käufer nimmt die vertragsgemäße Lieferung nicht an oder holt das Produkt nicht ab.',
          },
          { type: 'merke', text: 'Annehmen MUSS der Käufer, wenn die Ware der Bestellung entspricht, mangelfrei ist und rechtzeitig am vereinbarten Ort ankommt.' },
          {
            type: 'tabelle',
            spalten: ['Recht des Verkäufers', 'Gilt bei', 'Bedeutung'],
            zeilen: [
              ['Hinterlegung', 'C2C, B2C, B2B', 'Ware beim Gericht hinterlegen, Käufer zur Zahlung auffordern'],
              ['Rücktritt', 'C2C, B2C, B2B', 'wenn Käufer trotzdem nicht zahlt oder beide einverstanden sind'],
              ['Erweiterte Hinterlegung', 'nur B2B', 'Lagerhaus o. Ä. – auf Kosten des Käufers'],
              ['Selbsthilfeverkauf', 'nur B2B', 'Ware versteigern (nach Androhung); Erlös wird angerechnet'],
            ],
          },
          { type: 'merke', text: 'Bei B2B muss der Käufer ab Annahmeverzug alle Kosten (Lager, Erhaltung) und das Risiko tragen.' },
        ],
      },
      {
        titel: 'Zahlungsverzug',
        blocks: [
          {
            type: 'begriff',
            term: 'Zahlungsverzug',
            erklaerung: 'Der Käufer zahlt den Kaufpreis nicht zur vereinbarten Zeit. Das ist die häufigste Pflichtverletzung beim Kaufvertrag.',
          },
          {
            type: 'vergleich',
            frage: 'Rechte des Verkäufers:',
            links: { titel: 'Auf Zahlung bestehen', punkte: ['Rechtliche Schritte androhen/setzen', 'Verzugszinsen + Mahnspesen verrechnen'] },
            rechts: { titel: 'Rücktritt androhen', punkte: ['Nachfrist setzen', 'Danach vom Vertrag zurücktreten'] },
          },
          {
            type: 'begriff',
            term: 'Verzugszinsen',
            erklaerung: 'Zinsen, die der Verkäufer ab dem Tag der Fälligkeit verlangen kann – auch ohne Verschulden des Käufers.',
          },
          {
            type: 'tabelle',
            spalten: ['', 'Verzugszinsen', 'Mahnspesen'],
            zeilen: [
              ['Im Vertrag geregelt', 'wie vereinbart', 'wie vereinbart'],
              ['B2B (UGB)', 'Basiszinssatz + 9,2 % p. a.', '40 € Pauschale'],
              ['B2C, C2C (ABGB)', '4 % p. a.', 'angemessene Höhe'],
            ],
          },
          {
            type: 'begriff',
            term: 'Verzugszinsen berechnen',
            erklaerung: 'Zinsen = Kapital · Zinssatz · Tage / 36 000',
            beispiel: '1.000 € · 12 % · 30 Tage / 36 000 = 10 €',
          },
        ],
      },
      {
        titel: 'Mahnwesen',
        blocks: [
          { type: 'merke', text: 'Gesetzlich MUSS der Verkäufer nicht mahnen – er könnte sofort klagen. In der Praxis gibt es aber einen Mahnplan.' },
          {
            type: 'ablauf',
            titel: 'Mahnplan (Beispiel)',
            schritte: [
              { titel: 'Fälligkeit der Rechnung' },
              { titel: '1. Mahnung: Zahlungserinnerung', text: 'höflich, ohne Frist („Jeder kann einmal etwas übersehen“)' },
              { titel: '2. Mahnung', text: 'Frist setzen, Verzugszinsen und Mahnspesen androhen' },
              { titel: '3. Mahnung (letzte, eingeschrieben)', text: 'Zinsen + Spesen verrechnen, weitere Schritte androhen' },
              { titel: 'Rechtsanwalt oder Inkassobüro' },
              { titel: 'Gerichtliches Mahnverfahren, Pfändung' },
            ],
          },
          {
            type: 'begriff',
            term: 'Inkassobüro & Pfändung',
            erklaerung: 'Inkassobüro = Firma, die Schulden eintreibt. Pfändung = Lohn, Konto oder Gegenstände werden beschlagnahmt, um Schulden zu bezahlen.',
          },
          {
            type: 'ablauf',
            titel: 'Gerichtliches Mahnverfahren (bis 75.000 €)',
            schritte: [
              { titel: 'Verkäufer klagt den offenen Betrag ein' },
              { titel: 'Gericht erlässt bedingten Zahlungsbefehl', text: '14 Tage zahlen oder 4 Wochen Einspruch' },
              { titel: 'Einspruch?', text: 'Ja → Zivilprozess (Gerichtsverhandlung)' },
              { titel: 'Kein Einspruch, keine Zahlung', text: 'Zahlungsbefehl wird rechtskräftig' },
              { titel: 'Immer noch keine Zahlung', text: '→ Pfändung' },
            ],
          },
          {
            type: 'ablauf',
            titel: 'Checkliste Mahnschreiben',
            schritte: [
              { titel: 'Betreff: Zahlungserinnerung / Mahnung / letzte Mahnung' },
              { titel: 'Auf fällige Rechnung hinweisen' },
              { titel: 'Zur Zahlung auffordern, Frist setzen' },
              { titel: 'Verzugszinsen und Mahnspesen ankündigen/verrechnen' },
              { titel: 'Eventuell rechtliche Konsequenzen androhen' },
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Annahmeverzug',
        punkte: [
          'Käufer nimmt vertragsgemäße Lieferung nicht an / holt nicht ab',
          'Rechte: Hinterlegung bei Gericht, Rücktritt · nur B2B: erweiterte Hinterlegung, Selbsthilfeverkauf',
          'B2B: Käufer trägt Kosten und Risiko',
        ],
      },
      {
        titel: 'Zahlungsverzug',
        punkte: [
          'Käufer zahlt nicht rechtzeitig',
          'Rechte: auf Zahlung bestehen (+ Verzugszinsen, Mahnspesen) oder Rücktritt nach Nachfrist',
          'B2B: Basiszins + 9,2 % p. a., 40 € Pauschale · B2C/C2C: 4 % p. a.',
          'Zinsen = Kapital · Zinssatz · Tage / 36 000',
        ],
      },
      {
        titel: 'Mahnwesen',
        punkte: [
          'Mahnen keine Pflicht; Mahnplan: Zahlungserinnerung → Mahnung → letzte Mahnung (eingeschrieben) → Anwalt/Inkasso',
          'Gerichtliches Mahnverfahren bis 75.000 €: bedingter Zahlungsbefehl → Einspruch (Prozess) oder rechtskräftig → Pfändung',
        ],
      },
    ],
  },
'rechtsdurchsetzung': {
    schritte: [
      {
        titel: 'Rechte durchsetzen',
        blocks: [
          { type: 'text', text: 'Manchmal hilft auch viel Kommunikation nicht. Dann muss man überlegen, wie man seine Rechte am besten durchsetzt.' },
          {
            type: 'ablauf',
            titel: 'Die eigenen Rechte durchsetzen',
            schritte: [
              { titel: 'Eigenes Interesse klären: Was will ich?', text: 'konkret festlegen, was man fordern kann' },
              { titel: 'Vertragspartner benachrichtigen: Was will ich bis wann?', text: 'Forderung mit genauer Frist, am besten eingeschrieben' },
              { titel: 'Abwägen: Lohnt sich ein Rechtsstreit?' },
              { titel: 'Beratung: Was sagen Experten?', text: 'Rechtsanwalt oder Beratungsstelle' },
              { titel: 'Entscheidung: außergerichtliche Einigung oder Gerichtsprozess?' },
            ],
          },
        ],
      },
      {
        titel: 'Nachteile eines Rechtsstreits',
        blocks: [
          {
            type: 'begriff',
            term: 'Gericht',
            erklaerung: 'Seine Aufgabe ist es, Rechtskonflikte zu klären und Urteile zu sprechen.',
          },
          {
            type: 'tabelle',
            spalten: ['Nachteil', 'Warum?'],
            zeilen: [
              ['Langwierig', 'Prozesse dauern oft sehr lange'],
              ['Ungewiss', 'man weiß nie sicher, wie es ausgeht'],
              ['Teuer', 'Anwalt, Gericht – der Verlierer zahlt ALLE Kosten, auch die des Gewinners'],
              ['Rufschädigend', 'meist Ende der Geschäftsbeziehung mit einem wichtigen Stakeholder'],
            ],
          },
          {
            type: 'begriff',
            term: 'Beweislast',
            erklaerung: 'Wer etwas behauptet, muss es beweisen. Wer beweisen muss, ist im Streit im Nachteil.',
            beispiel: 'Fixgeschäft behauptet? → Käufer muss es beweisen.',
          },
        ],
      },
      {
        titel: 'Alternativen zum Gericht',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Alternative', 'So funktioniert es', 'Bindend?'],
            zeilen: [
              ['Kulanzweg', 'beide gehen freiwillig aufeinander zu', '–'],
              ['Mediation', 'neutraler Vermittler (Mediator) hilft, eine Lösung zu finden', 'nein'],
              ['Schlichtungsstelle', 'gibt Empfehlungen zur Lösung', 'nein'],
              ['Schiedsgericht', 'privates Gericht, vertraglich vereinbart', 'JA'],
            ],
          },
          { type: 'merke', text: 'Nur das Urteil des Schiedsgerichts ist rechtlich bindend – Schlichtungsstellen geben nur Empfehlungen.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Vorgehen',
        punkte: [
          'Interesse klären → Partner benachrichtigen (mit Frist) → abwägen → beraten lassen → entscheiden',
        ],
      },
      {
        titel: 'Gericht',
        punkte: [
          'Gericht klärt Rechtskonflikte und spricht Urteile',
          'Nachteile: langwierig, ungewiss, teuer (Verlierer zahlt alles), rufschädigend',
          'Beweislast: wer beweisen muss, ist im Nachteil',
        ],
      },
      {
        titel: 'Alternativen',
        punkte: [
          'Kulanzweg (freiwillig) · Mediation (neutraler Vermittler) · Schlichtungsstelle (Empfehlung, nicht bindend) · Schiedsgericht (bindend)',
        ],
      },
    ],
  },
'unternehmensgruendung-schritte': {
    schritte: [
      {
        titel: 'Der Weg zum eigenen Unternehmen',
        blocks: [
          {
            type: 'ablauf',
            titel: 'Schritte der Unternehmensgründung',
            schritte: [
              { titel: 'Gründungswille + Geschäftsidee' },
              { titel: 'Unternehmensgründer prüfen', text: 'persönliche und gewerberechtliche Voraussetzungen' },
              { titel: 'Rechtsform festlegen' },
              { titel: 'Businessplan erstellen' },
            ],
          },
          {
            type: 'begriff',
            term: 'Gründungswille',
            erklaerung: 'Der Wunsch, ein eigenes Unternehmen zu eröffnen bzw. eine Idee umzusetzen.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Selbstständig erwerbstätig', punkte: ['Eigenes Gewerbe', 'Land-/Forstwirtschaft', 'Freier Beruf (Arzt, Anwalt)', 'Neue Selbstständige (Künstler)'] },
            rechts: { titel: 'Unselbstständig erwerbstätig', punkte: ['Arbeitnehmer in einem Arbeits- oder Dienstverhältnis'] },
          },
          {
            type: 'vergleich',
            frage: 'Selbstständigkeit:',
            links: { titel: 'Vorteile', punkte: ['Selbstbestimmung', '„Eigener Chef sein“', 'Hohe Motivation', 'Gewinn gehört mir', 'Freie Zeiteinteilung'] },
            rechts: { titel: 'Nachteile', punkte: ['Keine sichere Anstellung', 'Finanzielles Risiko', 'Hoher Leistungsdruck', 'Haftung mit Privatvermögen', 'Viel Zeitaufwand'] },
          },
        ],
      },
      {
        titel: 'Geschäftsidee',
        blocks: [
          {
            type: 'vergleich',
            frage: 'Wege zu einer Geschäftsidee:',
            links: { titel: 'Neugründung', punkte: ['Neue Idee entwickeln', 'Bewährte Ideen verbessern/weiterentwickeln'] },
            rechts: { titel: 'Vorhandene Idee nutzen', punkte: ['Unternehmensübernahme', 'Franchising'] },
          },
          {
            type: 'tabelle',
            spalten: ['', 'Vorteile', 'Nachteile'],
            zeilen: [
              ['Unternehmensübernahme', 'weniger Investitionen, eingespielte Abläufe, Kunden & Lieferanten vorhanden', 'Mängel werden übernommen, Strukturen schwer zu ändern'],
              ['Franchising', 'bewährtes Konzept, bekannte Marke, Betreuung', 'Gebühren, wenig Platz für eigene Ideen'],
            ],
          },
          {
            type: 'begriff',
            term: 'Franchising',
            erklaerung: 'Der Franchisegeber stellt ein erprobtes Konzept gegen Gebühr zur Verfügung; der Franchisenehmer setzt es selbstständig um.',
            beispiel: "McDonald's, Subway",
          },
          {
            type: 'ablauf',
            titel: 'Eine gute Geschäftsidee …',
            schritte: [
              { titel: '… überzeugt die Kunden', text: 'bringt Vorteile (schneller, sicherer, einfacher)' },
              { titel: '… ist besser als die Konkurrenz', text: 'USP = Unique Selling Proposition' },
              { titel: '… hat eine Chance am Markt' },
              { titel: '… ist finanzierbar' },
              { titel: '… ist gewinnbringend' },
            ],
          },
        ],
      },
      {
        titel: 'Unternehmer & Firma',
        blocks: [
          {
            type: 'begriff',
            term: 'Unternehmer (UGB)',
            erklaerung: 'Wer ein Unternehmen betreibt. Unternehmen = auf Dauer angelegte Organisation mit selbstständiger wirtschaftlicher Tätigkeit – auch wenn sie nicht auf Gewinn aus ist.',
          },
          {
            type: 'begriff',
            term: 'Firma',
            erklaerung: 'Der ins Firmenbuch eingetragene Name, unter dem der Unternehmer Geschäfte macht, unterschreibt und klagen/geklagt werden kann.',
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'frei wählbar', wert: 'Firmenkern' },
              { titel: 'Rechtsform', wert: '+ Firmenzusatz' },
              { titel: 'z. B.', wert: 'Lisa Berger e. U.' },
            ],
          },
          { type: 'merke', text: 'Nicht im Firmenbuch eingetragen? Dann gibt es keine Firma, sondern nur eine Unternehmensbezeichnung (Vor- und Nachname).' },
        ],
      },
      {
        titel: 'Gründungsvoraussetzungen',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Persönliche Voraussetzungen', 'Beispiele'],
            zeilen: [
              ['Persönliche Eigenschaften', 'Eigenverantwortung, Risikobereitschaft, Kreativität, Stressresistenz'],
              ['Fachliche Qualifikation', 'Fachwissen, Branchenerfahrung, kaufmännisches Wissen'],
              ['Persönliches Umfeld', 'Unterstützung durch Familie/Partner'],
            ],
          },
          {
            type: 'begriff',
            term: 'Gewerbeberechtigung',
            erklaerung: 'Erlaubnis für eine gewerbliche Tätigkeit, ausgestellt von der Gewerbebehörde (Bezirkshauptmannschaft/Magistrat).',
          },
          {
            type: 'begriff',
            term: 'Gewerbliche Tätigkeit',
            erklaerung: 'Erlaubt + selbstständig + regelmäßig + entgeltlich (Absicht, Ertrag zu erzielen).',
          },
          {
            type: 'begriff',
            term: 'Allgemeine Voraussetzungen',
            erklaerung: 'Mindestens 18 Jahre · österreichische, EU-/EWR- oder Schweizer Staatsbürgerschaft · keine Ausschlussgründe (z. B. Verurteilung, Insolvenz).',
          },
          {
            type: 'tabelle',
            spalten: ['Gewerbeart', 'Voraussetzungen', 'Beispiele'],
            zeilen: [
              ['Freies Gewerbe', 'allgemeine', 'Werbeagentur, Fotograf, Fitnessstudio'],
              ['Reglementiert', '+ Befähigungsnachweis', 'Bäcker, Friseur, Gastgewerbe'],
              ['Reglementiert mit Zuverlässigkeitsprüfung', '+ Befähigungsnachweis + Zuverlässigkeitsprüfung', 'Baumeister, Reisebüro, Pyrotechniker'],
            ],
          },
          { type: 'merke', text: 'Befähigungsnachweis = Beweis für Fachkenntnisse (z. B. Meisterprüfung, HAK + Praxis). Freie Berufe und Neue Selbstständige brauchen keine Gewerbeberechtigung.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Gründung',
        punkte: [
          'Gründungswille + Geschäftsidee → Voraussetzungen → Rechtsform → Businessplan',
          'Selbstständig (Gewerbe, freier Beruf) ↔ unselbstständig (Arbeitnehmer)',
          'Geschäftsidee: Neugründung oder vorhandene nutzen (Übernahme, Franchising)',
          'Gute Idee: überzeugt Kunden, besser als Konkurrenz (USP), Marktchance, finanzierbar, gewinnbringend',
        ],
      },
      {
        titel: 'Unternehmer & Firma',
        punkte: [
          'Unternehmen = dauerhafte, selbstständige wirtschaftliche Organisation',
          'Firma = Name im Firmenbuch = Firmenkern + Firmenzusatz',
        ],
      },
      {
        titel: 'Voraussetzungen',
        punkte: [
          'Persönlich: Eigenschaften, Fachwissen, Umfeld',
          'Gewerblich = erlaubt, selbstständig, regelmäßig, entgeltlich',
          'Allgemein: 18 Jahre, Staatsbürgerschaft (AT/EU/EWR/CH), keine Ausschlussgründe',
          'Freie Gewerbe · reglementierte (+ Befähigungsnachweis) · mit Zuverlässigkeitsprüfung',
        ],
      },
    ],
  },
'wahl-der-rechtsform-1jg': {
    schritte: [
      {
        titel: 'Kriterien für die Rechtsform',
        blocks: [
          {
            type: 'begriff',
            term: 'Rechtsform',
            erklaerung: 'Die rechtliche „Hülle“ eines Unternehmens. Sie regelt z. B., wer haftet und wer entscheidet.',
          },
          {
            type: 'tabelle',
            spalten: ['Kriterium', 'Frage dazu'],
            zeilen: [
              ['Anzahl der Eigentümer', 'Allein oder mit Partnern gründen?'],
              ['Kapitalaufbringung', 'Muss ein Mindestkapital vorhanden sein?'],
              ['Haftung', 'Wer haftet wie stark für Schulden?'],
              ['Leitungsbefugnis/Kontrolle', 'Wer führt die Geschäfte?'],
              ['Erfolgsverteilung', 'Wer bekommt Gewinn, wer trägt Verlust?'],
              ['Art der Buchführung', 'E/A-Rechnung oder doppelte Buchhaltung?'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Gruppe', 'Beispiele'],
            zeilen: [
              ['Einzelunternehmen', '1 Person = Alleineigentümer'],
              ['Personengesellschaften', 'OG, KG'],
              ['Kapitalgesellschaften', 'GmbH, AG'],
              ['Sonderformen', 'Genossenschaft'],
            ],
          },
        ],
      },
      {
        titel: 'Das Einzelunternehmen',
        blocks: [
          {
            type: 'begriff',
            term: 'Einzelunternehmen',
            erklaerung: 'Der Unternehmer ist alleiniger Inhaber – alle Rechte, aber auch alle Pflichten. Häufigste Rechtsform in Österreich; entsteht mit der Gewerbeanmeldung.',
          },
          {
            type: 'tabelle',
            spalten: ['Kriterium', 'Regel beim Einzelunternehmen'],
            zeilen: [
              ['Eigentümer', 'Einzelunternehmer gehört 100 %'],
              ['Kapital', 'bringt er selbst auf (Eigen- + Fremdkapital); KEIN Mindestkapital'],
              ['Haftung', 'Vollhafter: persönlich und unbeschränkt – auch mit Privatvermögen'],
              ['Leitung', 'entscheidet allein'],
              ['Erfolg', 'Gewinn allein, Verlust allein'],
              ['Buchführung', 'E/A-Rechnung; ab 1 Mio. € Umsatz (oder 2 Jahre je 700.000 €) doppelte Buchhaltung'],
            ],
          },
          {
            type: 'vergleich',
            links: { titel: 'Vorteile', punkte: ['Rasche, einfache Gründung', 'Kein Mindestkapital', 'Gewinn muss nicht geteilt werden'] },
            rechts: { titel: 'Nachteile', punkte: ['Hohes Risiko (Privatvermögen)', 'Viel Verantwortung', 'Keine Vertretung bei Krankheit'] },
          },
          { type: 'merke', text: 'Ab den Umsatzgrenzen muss sich der Einzelunternehmer ins Firmenbuch eintragen → „eingetragener Unternehmer (e. U.)“. Freiwillig geht das auch früher.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Rechtsform',
        punkte: [
          'Kriterien: Eigentümer, Kapital, Haftung, Leitung, Erfolgsverteilung, Buchführung',
          'Einzelunternehmen · Personengesellschaften (OG, KG) · Kapitalgesellschaften (GmbH, AG) · Sonderformen (Genossenschaft)',
        ],
      },
      {
        titel: 'Einzelunternehmen',
        punkte: [
          'Alleiniger Inhaber, entsteht durch Gewerbeanmeldung, kein Mindestkapital',
          'Haftet persönlich und unbeschränkt (Vollhafter)',
          'Entscheidet allein, Gewinn/Verlust allein',
          'E/A-Rechnung; ab 1 Mio. € Umsatz doppelte Buchhaltung + Firmenbuch (e. U.)',
          '+ einfach, kein Mindestkapital · − hohes Risiko, keine Vertretung',
        ],
      },
    ],
  },
  'businessplan-1jg': {
    schritte: [
      {
        titel: 'Was ist ein Businessplan?',
        blocks: [
          {
            type: 'begriff',
            term: 'Businessplan',
            erklaerung: 'Schriftliches Dokument, in dem der Gründer seine Geschäftsidee darstellt und beschreibt, wie sie umgesetzt werden soll.',
          },
          { type: 'merke', text: 'Ein gut durchdachter Businessplan steigert die Erfolgschancen. Wer einen Bankkredit oder Förderungen will, MUSS einen vorlegen.' },
          {
            type: 'tabelle',
            spalten: ['Funktion', 'Bedeutung'],
            zeilen: [
              ['Beurteilen', 'Ist die Idee realisierbar, wirtschaftlich, mit genug Kundennutzen?'],
              ['Überzeugen', 'Kunden, Lieferanten, Kapitalgeber, Förderstellen überzeugen'],
              ['Planen', 'Umsetzung zielgerichtet planen'],
              ['Steuern', 'Gründungsphase steuern, Ziele kontrollieren'],
            ],
          },
        ],
      },
      {
        titel: 'Bestandteile',
        blocks: [
          {
            type: 'ablauf',
            titel: 'Checkliste Businessplan',
            schritte: [
              { titel: 'Executive Summary', text: 'Überblick über die wichtigsten Aussagen und Kennzahlen' },
              { titel: 'Unternehmen', text: 'Profil, Tätigkeit, Personen, Rechtsform' },
              { titel: 'Produkt und Dienstleistung' },
              { titel: 'Branche, Markt und Wettbewerb', text: 'Verkaufsmenge, Trends, Konkurrenz' },
              { titel: 'Marketing', text: 'Preise, Werbung, Vertriebswege' },
              { titel: 'Chancen und Risiken' },
              { titel: 'Finanzplanung', text: 'Kapitalbedarf, Finanzierung, Umsatz' },
              { titel: 'Umsetzungsfahrplan', text: 'Meilensteine mit Datum' },
            ],
          },
          {
            type: 'begriff',
            term: 'Marge',
            erklaerung: 'Gewinnspanne – Betrag, der beim Verkauf als Gewinn übrig bleibt.',
          },
          {
            type: 'begriff',
            term: 'Kontokorrentkredit',
            erklaerung: 'Überziehungsrahmen auf dem Girokonto – für kurzfristige Geldengpässe.',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Businessplan',
        punkte: [
          'Schriftliche Darstellung der Geschäftsidee und ihrer Umsetzung',
          'Funktionen: beurteilen, überzeugen, planen, steuern',
          'Pflicht für Bankkredit und Förderungen',
          'Bestandteile: Executive Summary, Unternehmen, Produkt, Branche/Markt/Wettbewerb, Marketing, Chancen/Risiken, Finanzplanung, Umsetzungsfahrplan',
        ],
      },
    ],
  },
'vertraege-mitarbeiter': {
    schritte: [
      {
        titel: 'Beschäftigungsverhältnisse',
        blocks: [
          { type: 'text', text: 'Wenn ein Unternehmen Leute beschäftigt, gibt es 3 Vertragsformen mit unterschiedlichen Rechten und Pflichten:' },
          {
            type: 'tabelle',
            spalten: ['', '„Echter“ Arbeitsvertrag', 'Freier Dienstvertrag', 'Werkvertrag'],
            zeilen: [
              ['Was schuldet man?', 'persönliche Arbeitskraft', 'Arbeitskraft, aber ohne persönliche Abhängigkeit', 'einen Erfolg / ein Werk'],
              ['An Weisungen gebunden?', 'ja', 'nein', 'nein'],
              ['Arbeitszeit & -ort fix?', 'ja', 'nein', 'nein'],
              ['Vertretung möglich?', 'nein, persönlich', 'ja', 'ja (eigene Arbeitnehmer)'],
              ['Arbeitsmittel', 'vom Arbeitgeber', 'meist vom Auftraggeber', 'eigene'],
              ['Wirtschaftliches Risiko', 'Arbeitgeber', 'Auftraggeber', 'Werkvertragsnehmer selbst'],
              ['Beispiel', 'Angestellte, Arbeiter, Lehrlinge', 'Dateneingabe von zu Hause', 'Website gestalten für 7.000 €'],
            ],
          },
          { type: 'merke', text: 'Beim Werkvertrag gibt es Geld nur, wenn das Werk laut Vertrag fertig ist – und man haftet für Fehler (Gewährleistung).' },
          {
            type: 'entscheidung',
            titel: 'Welcher Vertrag ist es?',
            schritte: [
              {
                frage: 'Wird ein fertiges Werk/Erfolg geschuldet?',
                links: { antwort: 'Ja', ergebnis: 'Werkvertrag' },
                rechts: { antwort: 'Nein, Arbeitskraft', weiter: 'weiter prüfen' },
              },
              {
                frage: 'An Weisungen, Arbeitszeit und -ort gebunden?',
                links: { antwort: 'Nein', ergebnis: 'Freier Dienstvertrag' },
                rechts: { antwort: 'Ja', ergebnis: '„Echter“ Arbeitsvertrag' },
              },
            ],
          },
        ],
      },
      {
        titel: 'Dienstzettel',
        blocks: [
          {
            type: 'begriff',
            term: 'Dienstzettel',
            erklaerung: 'Schriftliche Aufzeichnung über die wichtigsten Rechte und Pflichten aus dem Arbeitsverhältnis.',
          },
          { type: 'merke', text: 'Der Arbeitsvertrag ist formfrei. Gibt es keinen schriftlichen Vertrag, MUSS der Arbeitgeber sofort einen Dienstzettel ausstellen. Ausnahmen: Arbeitsverhältnis max. 1 Monat oder schriftlicher Vertrag mit allen Angaben.' },
          {
            type: 'ablauf',
            titel: 'Inhalte eines Dienstzettels',
            schritte: [
              { titel: 'Name und Anschrift von Arbeitgeber und Arbeitnehmer' },
              { titel: 'Beginn (bei befristeten auch Ende) und Probezeit' },
              { titel: 'Kollektivvertrag, Einstufung' },
              { titel: 'Kündigungsfristen und -termine' },
              { titel: 'Gewöhnlicher Arbeitsort' },
              { titel: 'Höhe und Fälligkeit des Entgelts, Sonderzahlungen' },
              { titel: 'Urlaubsausmaß' },
              { titel: 'Normalarbeitszeit' },
              { titel: 'Mitarbeitervorsorgekasse' },
            ],
          },
          {
            type: 'begriff',
            term: 'Befristetes Arbeitsverhältnis',
            erklaerung: 'Nur für einen bestimmten Zeitraum.',
            beispiel: 'Wintersaison im Tourismus',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Beschäftigungsverhältnisse',
        punkte: [
          '„Echter“ Arbeitsvertrag: persönliche Arbeitskraft, weisungsgebunden, fixe Zeit/Ort, Arbeitsmittel vom Arbeitgeber, kein Risiko',
          'Freier Dienstvertrag: Arbeitskraft ohne persönliche Abhängigkeit, frei bei Zeit/Ort, Vertretung möglich',
          'Werkvertrag: schuldet Erfolg/Werk, eigene Arbeitsmittel, eigenes Risiko, Gewährleistung; Geld erst bei Erfüllung',
        ],
      },
      {
        titel: 'Dienstzettel',
        punkte: [
          'Schriftliche Aufzeichnung der wesentlichen Rechte und Pflichten',
          'Pflicht, wenn kein schriftlicher Arbeitsvertrag (außer Dauer ≤ 1 Monat)',
          'Inhalt: Parteien, Beginn/Ende, Probezeit, KV & Einstufung, Kündigung, Arbeitsort, Entgelt, Urlaub, Arbeitszeit, Vorsorgekasse',
        ],
      },
    ],
  },
}
