// Lerninhalte 3. Jahrgang (siehe ../lerninhalte.js für die Block-Typen)

export default {
'unternehmensfuehrung-ueberblick': {
    schritte: [
      {
        titel: 'Was ist Unternehmensführung?',
        blocks: [
          {
            type: 'begriff',
            term: 'Unternehmensführung (Management)',
            erklaerung: 'Bedeutet zweierlei: die PERSONEN, die ein Unternehmen leiten (Führungskräfte), und den PROZESS des Führens (Managementprozess).',
          },
          { type: 'text', text: 'Zentrale Aufgabe: den Unternehmenserfolg sichern – nicht nur im Alltag, sondern vor allem langfristig und nachhaltig.' },
          {
            type: 'kette',
            glieder: [
              { titel: 'Von der Vision …', wert: 'Normativ' },
              { titel: '… über die Strategie …', wert: 'Strategisch' },
              { titel: '… zur Umsetzung', wert: 'Operativ' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Ebene', 'Beschäftigt sich mit …'],
            zeilen: [
              ['Normatives Management', 'Vision, Normen, Werte und Ziele (Unternehmensleitbild)'],
              ['Strategisches Management', 'langfristiger Planung, Unternehmensstrategien'],
              ['Operatives Management', 'zielgerichteter Umsetzung der Ziele und Strategien'],
            ],
          },
          {
            type: 'text',
            text: 'Beispiel Schiff: Kapitän will sicher nach New York (Vision) → legt Zweck und Leitlinien fest (normativ) → entwickelt mit dem Ersten Offizier den Plan (strategisch) → der Offizier überwacht die Fahrt (operativ).',
          },
        ],
      },
      {
        titel: 'Hierarchiestufen',
        blocks: [
          {
            type: 'pyramide',
            stufen: [
              { name: 'Topmanagement', beispiel: 'Geschäftsführung – Gesamtverantwortung' },
              { name: 'Middle Management', beispiel: 'Abteilungsleitung – Vermittler zwischen oben und unten' },
              { name: 'Lower Management', beispiel: 'Team-/Gruppenleitung – operative Aufgaben' },
              { name: 'Ausführungsebene', beispiel: 'Mitarbeiter setzen Entscheidungen um' },
            ],
          },
          { type: 'merke', text: 'Je höher die Ebene, desto weniger Führungskräfte. Normativ + strategisch → Top- und Middle Management. Operativ → Lower Management. Kleine Betriebe haben oft nur 1–2 Stufen.' },
          {
            type: 'begriff',
            term: 'CEO, CSO, COO',
            erklaerung: 'Chief Executive Officer (Geschäftsführer) · Chief Sales Officer (Vertriebsleitung) · Chief Operating Officer (laufender Geschäftsbetrieb).',
          },
        ],
      },
      {
        titel: 'Kommunikation im Unternehmen',
        blocks: [
          {
            type: 'begriff',
            term: 'Kommunikation als Führungsaufgabe',
            erklaerung: 'Einen erfolgreichen Informationsaustausch zwischen Führungskräften und Mitarbeitenden sowie zwischen Teams und Abteilungen sicherstellen.',
          },
          {
            type: 'tabelle',
            spalten: ['Erfolgsfaktor', 'Bedeutung'],
            zeilen: [
              ['Klarheit', 'eindeutig und verständlich, keine Missverständnisse'],
              ['Offenheit', 'offen und ehrlich über Ziele, Erfolge, Probleme → Vertrauen'],
              ['Regelmäßigkeit', 'Infos zuverlässig und rechtzeitig über feste Kanäle'],
              ['Empathie', 'Bedürfnisse der Mitarbeiter berücksichtigen'],
            ],
          },
          {
            type: 'begriff',
            term: 'Digitale Tools',
            erklaerung: 'Microsoft Teams (Chat, Videokonferenz), Slack, Intranet (interne Plattform), Newsletter-Tools.',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Unternehmensführung',
        punkte: [
          'Unternehmensführung = Personen (Führungskräfte) + Prozess des Führens',
          'Normativ (Vision, Werte, Leitbild) → strategisch (langfristige Strategien) → operativ (Umsetzung)',
          'Hierarchie: Top-, Middle-, Lower Management, Ausführungsebene (Pyramide)',
          'Kommunikation: Klarheit, Offenheit, Regelmäßigkeit, Empathie; digitale Tools',
        ],
      },
    ],
  },
'normatives-management': {
    schritte: [
      {
        titel: 'Das Unternehmensleitbild',
        blocks: [
          {
            type: 'begriff',
            term: 'Normatives Management',
            erklaerung: 'Legt die „Spielregeln“ des Unternehmens fest, damit es langfristig und verantwortungsbewusst handelt.',
          },
          {
            type: 'begriff',
            term: 'Unternehmensleitbild',
            erklaerung: 'Schriftlich festgehaltener Sinn und Zweck des Unternehmens, seine Überzeugungen und Ziele. Orientierungsrahmen für Führung und Stakeholder.',
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'Vision + Mission + Philosophie', wert: 'Unternehmensziele' },
              { titel: 'beeinflusst', wert: 'Unternehmenskultur' },
            ],
          },
          {
            type: 'vergleich',
            frage: 'Funktionen des Leitbilds:',
            links: { titel: 'Innenwirkung', punkte: ['Motivation', 'Zugehörigkeitsgefühl', 'Kommunikation von Zielen'] },
            rechts: { titel: 'Außenwirkung', punkte: ['Positives Image', 'Glaubwürdigkeit', 'Attraktiv für neue Mitarbeiter'] },
          },
        ],
      },
      {
        titel: 'Vision, Mission, Philosophie',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Bestandteil', 'Frage', 'Beispiel'],
            zeilen: [
              ['Vision', 'Wohin will das Unternehmen? (Vorstellungsbild der Zukunft)', 'Instagram: „Capture and share the world’s moments.“'],
              ['Mission', 'Warum existiert es? (Auftrag, Nutzen)', 'Netflix: „To entertain the world.“'],
              ['Unternehmensphilosophie', 'Welche Werte sind wichtig?', 'Post AG: „Wir sind gelb, grün, bunt.“'],
              ['Unternehmensziele', 'Was will es in Zukunft erreichen?', 'Marktanteil +7 %'],
            ],
          },
          { type: 'merke', text: 'Vision = Leuchtturm (Zukunftsbild). Mission = Beitrag, den das Unternehmen leistet. Nicht jedes Unternehmen hat eine Vision, aber jedes hat eine Mission.' },
          {
            type: 'begriff',
            term: 'Claim vs. Slogan',
            erklaerung: 'Claim = langfristig, drückt die Mission/USP aus („Bildung, die begeistert!“). Slogan = kurzfristiger, bezieht sich auf einzelne Produkte.',
          },
          {
            type: 'begriff',
            term: 'Corporate Social Responsibility (CSR)',
            erklaerung: 'Freiwillige Verantwortung des Unternehmens für Gesellschaft und Umwelt – Werte müssen sich in konkreten Maßnahmen zeigen.',
          },
          {
            type: 'tabelle',
            spalten: ['CSR-Leitlinie', 'Bedeutung'],
            zeilen: [
              ['ESG-Kriterien', 'Environmental, Social, Governance – Pflicht-Bericht für große EU-Unternehmen (ab 250 MA)'],
              ['SDGs', '17 Nachhaltigkeitsziele der UNO'],
              ['ISO 26000', 'internationale CSR-Norm mit 7 Grundsätzen'],
              ['UN Global Compact', 'freiwilliger Pakt: 10 Prinzipien (Menschenrechte, Arbeit, Umwelt)'],
            ],
          },
        ],
      },
      {
        titel: 'Unternehmensziele',
        blocks: [
          {
            type: 'vergleich',
            frage: '1. Nach dem Zeitrahmen:',
            links: { titel: 'Strategische Ziele', punkte: ['Langfristig (ca. 5 Jahre)', 'Setzen Vision und Mission um', 'z. B. Kundenzufriedenheit in 5 Jahren +10 %'] },
            rechts: { titel: 'Operative Ziele', punkte: ['Kurz- bis mittelfristig', 'Setzen strategische Ziele konkret um', 'z. B. Anfragen binnen 3 Tagen beantworten'] },
          },
          {
            type: 'vergleich',
            frage: '2. Nach der Zielart:',
            links: { titel: 'Monetäre Ziele', punkte: ['In Geld messbar', 'z. B. Umsatz +10 %'] },
            rechts: { titel: 'Nicht-monetäre Ziele', punkte: ['Nicht in Geld messbar', 'z. B. flexibles Arbeitszeitmodell'] },
          },
          {
            type: 'tabelle',
            spalten: ['3. Operationalisierung', 'Frage', 'Beispiel'],
            zeilen: [
              ['Zielinhalt', 'Was?', 'Marktanteil erhöhen'],
              ['Zielausmaß', 'Wie viel?', '7 %'],
              ['Zieltermin', 'Bis wann?', 'Dezember dieses Jahres'],
              ['Zielverantwortung', 'Wer?', 'Vertriebsleiter'],
              ['Zielort', 'Wo?', 'Ländermarkt Indien'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['4. Zielbeziehung', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Zielneutralität', 'beeinflussen sich nicht', 'ergonomische Arbeitsplätze ↔ Kostensenkung Logistik'],
              ['Zielkomplementarität (Harmonie)', 'eines fördert das andere', 'Kundenzufriedenheit ↑ → Umsatz ↑'],
              ['Zielkonflikt (Konkurrenz)', 'eines stört das andere', 'Arbeitsplätze sichern ↔ Personalkosten senken'],
            ],
          },
        ],
      },
      {
        titel: 'Unternehmenskultur',
        blocks: [
          {
            type: 'begriff',
            term: 'Unternehmenskultur',
            erklaerung: 'Bestimmt, wie im Unternehmen gedacht und gehandelt wird: die gemeinsam GELEBTEN und akzeptierten Werte. Zeigt, ob das Leitbild wirklich gelebt wird.',
          },
          {
            type: 'tabelle',
            spalten: ['Maßnahmen für eine positive Kultur'],
            zeilen: [
              ['Offener Austausch über alle Hierarchiestufen'],
              ['Rituale (gemeinsame Mittagspausen, Teamsitzungen, Firmenevents)'],
              ['Gelebte Work-Life-Balance (flexible Zeiten, Homeoffice, Gesundheit)'],
              ['Führung lebt die Werte authentisch vor'],
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Leitbild',
        punkte: [
          'Unternehmensleitbild = Vision + Mission + Unternehmensphilosophie → Unternehmensziele → beeinflusst Kultur',
          'Funktionen: Innenwirkung (Motivation) + Außenwirkung (Image)',
          'Vision = Zukunftsbild · Mission = Auftrag/Nutzen · Philosophie = Werte',
          'CSR = gesellschaftliche Verantwortung; ESG, SDGs, ISO 26000, UN Global Compact',
        ],
      },
      {
        titel: 'Ziele & Kultur',
        punkte: [
          'Strategisch (langfristig) ↔ operativ (kurz-/mittelfristig) · monetär ↔ nicht-monetär',
          'Operationalisierung: Inhalt, Ausmaß, Termin, Verantwortung, Ort (+ SMART)',
          'Zielbeziehungen: Neutralität, Komplementarität, Konflikt',
          'Unternehmenskultur = tatsächlich gelebte Werte',
        ],
      },
    ],
  },
'strategisches-operatives-management': {
    schritte: [
      {
        titel: 'Der Managementkreislauf',
        blocks: [
          {
            type: 'begriff',
            term: 'Managementprozess',
            erklaerung: 'Die Ziele aus dem normativen Management werden durch strategisches und operatives Management umgesetzt – in einem Kreislauf.',
          },
          {
            type: 'zyklus',
            mitte: 'Managementkreislauf',
            schritte: ['Strategische + operative Planung', 'Entscheidung', 'Umsetzung', 'Kontrolle (Abweichungsanalyse)'],
          },
          {
            type: 'ablauf',
            titel: 'Strategieerarbeitung',
            schritte: [
              { titel: 'Vorgaben aus dem normativen Management', text: 'Vision, Werte, langfristige Ziele' },
              { titel: 'Externe + interne Analyse', text: 'Umwelt/Branche + innerer Zustand' },
              { titel: 'Prognosen', text: 'zukünftige Entwicklungen' },
              { titel: 'SWOT-Analyse', text: 'alles zusammenfassen' },
              { titel: 'Mögliche Strategien entwickeln' },
            ],
          },
        ],
      },
      {
        titel: 'Externe Analyse',
        blocks: [
          {
            type: 'begriff',
            term: 'PESTEL-Analyse (Umfeldanalyse)',
            erklaerung: 'Untersucht, welchen Einfluss das Umfeld hat und welche Chancen und Risiken sich ergeben.',
          },
          {
            type: 'tabelle',
            spalten: ['Faktor', 'Beispiel'],
            zeilen: [
              ['P – Politisch', 'Zölle werden erhöht'],
              ['E – Wirtschaftlich (Economic)', 'Rohstoffkosten steigen'],
              ['S – Soziokulturell', 'Trend zu gesunder Ernährung'],
              ['T – Technologisch', 'KI steigert die Produktivität'],
              ['E – Ökologisch', 'strengere Umweltauflagen'],
              ['L – Rechtlich (Legal)', 'neuer Mindestlohn'],
            ],
          },
          {
            type: 'begriff',
            term: 'Fünf-Kräfte-Modell (Porter)',
            erklaerung: 'Branchenanalyse: Fünf Kräfte bestimmen, wie stark der Wettbewerb in einer Branche ist.',
          },
          {
            type: 'tabelle',
            spalten: ['Kraft', 'Ist groß, wenn …'],
            zeilen: [
              ['Verhandlungsstärke der Lieferanten', 'es wenige Lieferanten gibt, Wechsel schwierig'],
              ['Verhandlungsstärke der Kunden', 'wenige Abnehmer, Wechsel einfach (Vergleichsportale)'],
              ['Bedrohung durch neue Wettbewerber', 'Markteintritt einfach, kaum Markteintrittsbarrieren'],
              ['Bedrohung durch Substitute', 'echte Alternativen (Hafermilch statt Kuhmilch)'],
              ['Konkurrenz bestehender Wettbewerber', 'viele ähnliche Anbieter, langsames Marktwachstum'],
            ],
          },
          { type: 'merke', text: 'Hohe Wettbewerbsintensität = Branche meist weniger profitabel. Substitute = Ersatzprodukte mit ähnlicher Funktion.' },
        ],
      },
      {
        titel: 'Interne Analyse & Prognosen',
        blocks: [
          {
            type: 'begriff',
            term: 'Interne Analyse',
            erklaerung: 'Untersucht Stärken und Schwächen (Produktion, Personal, Finanzen, Organisation). Instrumente: interne Audits und Benchmarking.',
          },
          {
            type: 'begriff',
            term: 'Benchmarking',
            erklaerung: 'Vergleich mit dem BESTEN Mitbewerber. Ergebnis wird oft als Stärken-Schwächen-Profil dargestellt.',
            beispiel: 'Zalando vergleicht seine Retouren-Prozesse mit Amazon.',
          },
          {
            type: 'vergleich',
            frage: 'Prognosemethoden:',
            links: { titel: 'Szenariotechnik', punkte: ['3 mögliche Zukunftsbilder:', 'Best Case (positiv)', 'Realistic Case (Trend)', 'Worst Case (negativ)'] },
            rechts: { titel: 'Delphi-Methode', punkte: ['Experten werden in mehreren Runden befragt', 'Antworten zusammengefasst und neu bewertet', '→ immer genauere Einschätzung'] },
          },
        ],
      },
      {
        titel: 'SWOT-Analyse',
        blocks: [
          {
            type: 'begriff',
            term: 'SWOT-Analyse',
            erklaerung: 'Führt Chancen & Risiken (extern) und Stärken & Schwächen (intern) zusammen. Daraus ergeben sich 4 strategische Stoßrichtungen.',
          },
          {
            type: 'tabelle',
            spalten: ['', 'Stärken (S)', 'Schwächen (W)'],
            zeilen: [
              ['Chancen (O)', 'S-O: Stärken nutzen, um Chancen zu ergreifen', 'W-O: Schwächen überwinden, um Chancen zu nutzen'],
              ['Risiken (T)', 'S-T: Stärken nutzen, um Risiken abzuwehren', 'W-T: Schwächen abbauen, damit sie nicht zum Risiko werden'],
            ],
          },
          { type: 'merke', text: 'S = Strengths, W = Weaknesses (intern) · O = Opportunities, T = Threats (extern).' },
        ],
      },
      {
        titel: 'Strategien',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Wettbewerbsstrategie (Porter)', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Kostenführerschaft', 'niedrigste Kosten → niedrigste Preise', 'KiK'],
              ['Differenzierung', 'einzigartig (Qualität, Marke) → höhere Preise', 'Gucci'],
              ['Nischenstrategie', 'Konzentration auf einen Teilmarkt', 'Patagonia'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Portfolio (BCG)', 'Empfehlung'],
            zeilen: [
              ['Question Marks', 'Investition oder Desinvestition'],
              ['Stars', 'Wachstumsstrategie – stark fördern'],
              ['Cashcows', 'Abschöpfungsstrategie – „melken“'],
              ['Poor Dogs', 'Desinvestitionsstrategie – vom Markt nehmen'],
            ],
          },
          {
            type: 'formel',
            name: 'Relativer Marktanteil',
            zaehler: 'eigener absoluter Marktanteil',
            nenner: 'Marktanteil des größten Konkurrenten',
            beispiel: '> 1,0 = Marktführer',
          },
          {
            type: 'tabelle',
            spalten: ['Wachstum (Ansoff)', 'bestehende Zielgruppe', 'neue Zielgruppe'],
            zeilen: [
              ['Bestehendes Produkt', 'Marktdurchdringung (mehr Werbung, Mengenrabatt)', 'Marktentwicklung (neue Länder, Anwendungen)'],
              ['Neues Produkt', 'Produktentwicklung (Coca-Cola Zero)', 'Diversifikation (Coca-Cola kauft Costa Coffee)'],
            ],
          },
        ],
      },
      {
        titel: 'Operative Planung, Entscheidung & Kontrolle',
        blocks: [
          {
            type: 'begriff',
            term: 'Operative Planung',
            erklaerung: 'Im Detail: wer macht was, wann, wie, womit und wo? Herzstück ist die Budgetierung.',
          },
          {
            type: 'begriff',
            term: 'Budgetierung',
            erklaerung: 'Legt finanzielle Ressourcen (Auszahlungen, Kosten) und angestrebte Ergebnisse (Erlöse) fest. Teilbudgets (Material, Personal, Umsatz …) → Gesamtbudget. Controlling überwacht die Einhaltung.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Bottom-up', punkte: ['Bereichsleiter erstellen Teilbudgets', '→ zum Gesamtbudget zusammengeführt', 'Für getrennte Bereiche'] },
            rechts: { titel: 'Top-down', punkte: ['Leitung gibt Gesamtbudget vor', '→ Teilbudgets abgeleitet', 'Für abhängige Bereiche'] },
          },
          {
            type: 'tabelle',
            spalten: ['Erfolgreiche Entscheidungen'],
            zeilen: [
              ['Rational abwägen'],
              ['Auf übergeordnete Ziele achten'],
              ['Mindestkriterien definieren'],
              ['Relevante Informationen sammeln'],
              ['Szenarien durchspielen'],
              ['Externe Beratung einbeziehen'],
              ['Einzel- oder Gruppenentscheidung wählen'],
            ],
          },
          {
            type: 'begriff',
            term: 'Kontrolle (Abweichungsanalyse)',
            erklaerung: 'Ergebnisse mit den Zielen vergleichen, Ursachen für Abweichungen suchen, gegensteuern. Ergebnis-, Verfahrens- und Verhaltenskontrolle.',
          },
          {
            type: 'zyklus',
            mitte: 'PDCA (Deming-Kreis)',
            schritte: ['Plan – Ziele festlegen', 'Do – umsetzen', 'Check – kontrollieren', 'Act – anpassen'],
          },
          { type: 'merke', text: 'PDCA = kontinuierliche Verbesserung. Braucht eine Kultur, die offen mit Fehlern umgeht.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Strategische Planung',
        punkte: [
          'Kreislauf: Planung → Entscheidung → Umsetzung → Kontrolle',
          'Extern: PESTEL (politisch, wirtschaftlich, sozial, technologisch, ökologisch, rechtlich) + Fünf-Kräfte-Modell',
          'Intern: Audits, Benchmarking (Stärken-Schwächen-Profil)',
          'Prognosen: Szenariotechnik (best/realistic/worst) · Delphi-Methode (Experten, mehrere Runden)',
          'SWOT: S-O, W-O, S-T, W-T-Strategien',
        ],
      },
      {
        titel: 'Strategien',
        punkte: [
          'Porter: Kostenführerschaft · Differenzierung · Nische',
          'BCG: Question Marks, Stars, Cashcows, Poor Dogs',
          'Ansoff: Marktdurchdringung, Marktentwicklung, Produktentwicklung, Diversifikation',
        ],
      },
      {
        titel: 'Operativ & Kontrolle',
        punkte: [
          'Budgetierung: Teilpläne → Gesamtbudget; bottom-up ↔ top-down',
          'Kontrolle = Abweichungsanalyse (Ergebnis, Verfahren, Verhalten)',
          'PDCA: Plan → Do → Check → Act',
        ],
      },
    ],
  },
'organisieren-und-fuehren': {
    schritte: [
      {
        titel: 'Aufbau- & Ablauforganisation',
        blocks: [
          {
            type: 'begriff',
            term: 'Unternehmensorganisation',
            erklaerung: 'Regelt den AUFBAU des Unternehmens (Aufbauorganisation) und die ABLÄUFE (Ablauforganisation). Beide hängen eng zusammen.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Aufbauorganisation', punkte: ['Struktur: Wer ist wofür zuständig?', 'Aufgaben → Abteilungen → Stellen'] },
            rechts: { titel: 'Ablauforganisation', punkte: ['Prozesse: Was, in welcher Reihenfolge, wie, wo?', 'Innerhalb der festgelegten Struktur'] },
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'z. B. Messestand planen', wert: 'Aufgabe' },
              { titel: 'mehrere Aufgaben', wert: 'Abteilung' },
              { titel: 'innerhalb der Abteilung', wert: 'Stelle' },
            ],
          },
          {
            type: 'begriff',
            term: 'Stelle',
            erklaerung: 'Grundelement der Aufbauorganisation: Aufgaben, die zum Arbeitsbereich EINER Person gehören.',
          },
          {
            type: 'tabelle',
            spalten: ['Stellenart', 'Befugnis', 'Beispiel'],
            zeilen: [
              ['Leitungsstelle (Instanz)', 'Leitung, Weisung, Entscheidung, Kontrolle', 'Geschäftsführung, Abteilungsleitung'],
              ['Stabstelle', 'keine Weisungsbefugnis, berät und unterstützt', 'Assistenz, Controlling, Rechtsabteilung'],
              ['Ausführungsstelle', 'Entscheidung nur im eigenen Bereich, keine Weisung', 'Sachbearbeiter, Buchhalter'],
            ],
          },
          {
            type: 'vergleich',
            links: { titel: 'Zentralisation', punkte: ['Wenige Personen treffen alle wesentlichen Entscheidungen'] },
            rechts: { titel: 'Dezentralisation', punkte: ['Entscheidungen an viele Personen delegiert', 'Führung sichert nur den Informationsaustausch'] },
          },
        ],
      },
      {
        titel: 'Leitungssysteme (Organigramm)',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['', 'Einliniensystem', 'Mehrliniensystem'],
            zeilen: [
              ['Prinzip', 'jede Stelle hat nur EINE übergeordnete Instanz', 'jede Stelle hat ZWEI oder mehr Instanzen'],
              ['Formen', 'funktional (nach Einkauf, Produktion …) oder divisional (nach Sparten: Länder, Produkte)', 'Matrixorganisation (Funktionen UND Divisionen)'],
              ['Vorteile', 'übersichtlich, klare Verantwortung, klarer Weisungsweg', 'kurze Infowege, schnelle Kommunikation, Entlastung der Leitung'],
              ['Nachteile', 'lange Kommunikationswege, Belastung oberer Instanzen', 'widersprüchliche Weisungen, unübersichtlich, viele Führungskräfte'],
            ],
          },
          { type: 'merke', text: 'Organigramm = grafische Darstellung der Aufbauorganisation. Stabstellen können in beiden Systemen eingesetzt werden.' },
          {
            type: 'begriff',
            term: 'Agile Organisation',
            erklaerung: 'Kann rasch auf Veränderungen reagieren: Kundenzentrierung (entlang der Customer Journey), flache Hierarchien, selbstorganisierte Teams.',
          },
        ],
      },
      {
        titel: 'Ablauforganisation & Prozesse',
        blocks: [
          {
            type: 'begriff',
            term: 'Prozess',
            erklaerung: 'Kette zusammenhängender Aktivitäten, die gemeinsam einen Kundennutzen schaffen.',
          },
          {
            type: 'tabelle',
            spalten: ['Prozessart', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Geschäftsprozesse', 'Kerngeschäft', 'Produktion, Marketing, Verkauf'],
              ['Unterstützungsprozesse', 'unterstützen die Geschäftsprozesse', 'Personalwesen, IT'],
              ['Managementprozesse', 'Steuerung und Führung', 'Planungsprozesse'],
            ],
          },
          {
            type: 'begriff',
            term: 'Flussdiagramm (Flowchart)',
            erklaerung: 'Stellt Prozesse mit Symbolen dar: Start/Ende (abgerundet), Prozess (Rechteck), Entscheidung (Raute), Ablauflinie (Pfeil).',
          },
        ],
      },
      {
        titel: 'Führungstheorien',
        blocks: [
          {
            type: 'begriff',
            term: 'Mitarbeiterführung & Führungsstil',
            erklaerung: 'Mitarbeiterführung = Verhalten der Mitarbeiter beeinflussen, um Ziele zu erreichen. Führungsstil = langfristiges Verhaltensmuster der Führungskraft.',
          },
          {
            type: 'tabelle',
            spalten: ['Theorie', 'Erfolgsfaktor', 'Beispiele'],
            zeilen: [
              ['Eigenschaftstheorien', 'Persönlichkeit der Führungskraft', 'Intelligenz, Durchsetzungsvermögen, Empathie, Selbstbewusstsein'],
              ['Verhaltenstheorien', 'Verhalten (Führungsstil)', 'klassische Führungsstile, Verhaltensgitter'],
              ['Situationstheorien', 'situationsabhängiges Verhalten', 'Reifegradtheorie, Vroom-Yetton-Modell'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Führungsstil (Lewin)', 'Merkmal', '+', '−'],
            zeilen: [
              ['Autoritär', 'entscheidet allein', 'schnelle Entscheidungen, klare Kompetenzen', 'überlastete Führung, demotivierte Mitarbeiter'],
              ['Kooperativ', 'Mitarbeiter entscheiden mit', 'Motivation, Teamgeist', 'längere Entscheidungen'],
              ['Laissez-faire', 'greift nur bei Problemen ein', 'Freiraum, Kreativität', 'Überforderung, Kontrollverlust'],
            ],
          },
          {
            type: 'begriff',
            term: 'Verhaltensgitter (Managerial Grid)',
            erklaerung: 'Zwei Dimensionen von 1–9: Aufgabenorientierung und Mitarbeiterorientierung.',
          },
          {
            type: 'tabelle',
            spalten: ['Position', 'Name', 'Bedeutung'],
            zeilen: [
              ['1.1', 'Überlebensmanagement', 'kaum Interesse an Aufgaben oder Menschen'],
              ['9.1', 'Befehl-Gehorsam-Management', 'starke Aufgabenorientierung, strenge Kontrolle'],
              ['1.9', 'Glacéhandschuh-Management', 'Wohlfühlklima, wenig Leistung'],
              ['5.5', 'Organisationsmanagement', 'Mittelweg'],
              ['9.9', 'Teammanagement', 'optimal: Leistung UND Motivation'],
            ],
          },
        ],
      },
      {
        titel: 'Situationstheorien & Führungskonzepte',
        blocks: [
          {
            type: 'begriff',
            term: 'Situative Reifegradtheorie (Hersey/Blanchard)',
            erklaerung: 'Führungsstil je nach Reifegrad der Mitarbeiter (Fähigkeit + Motivation).',
          },
          {
            type: 'ablauf',
            titel: 'Vom niedrigen zum hohen Reifegrad',
            schritte: [
              { titel: 'Telling – Unterweisen', text: 'niedrige Reife: genaue Vorgaben, Kontrolle' },
              { titel: 'Selling – Verkaufen', text: 'geringe–mittlere Reife: Aufgaben erklären, stark mitarbeiterbezogen' },
              { titel: 'Participating – Partizipieren', text: 'mittlere–hohe Reife: an Entscheidungen beteiligen' },
              { titel: 'Delegating – Delegieren', text: 'hohe Reife: Aufgaben ohne detaillierte Erklärung abgeben' },
            ],
          },
          {
            type: 'begriff',
            term: 'Vroom-Yetton-Modell',
            erklaerung: 'Führungsverhalten richtet sich nach Sachqualität (wie wichtig ist die richtige Lösung?) und Mitarbeiterakzeptanz (wie wichtig ist Zustimmung?).',
          },
          {
            type: 'tabelle',
            spalten: ['Entscheidungsart', 'Bedeutung'],
            zeilen: [
              ['AI / AII – autoritär', 'allein (AII: nach Einholen von Infos)'],
              ['BI / BII – mit Beratung', 'allein nach Besprechung mit einer Person (BI) / mit der Gruppe (BII)'],
              ['GII – Gruppe', 'alle entscheiden gemeinsam'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Führungskonzept', 'Bedeutung'],
            zeilen: [
              ['Management by Delegation', 'eigener Verantwortungsbereich; Führung greift nur bei Problemen ein'],
              ['Management by Results', 'nur Ergebnisse zählen (vorgegeben, kontrolliert)'],
              ['Management by Objectives', 'Ziele werden GEMEINSAM vereinbart'],
              ['Management by Motivation', 'Leistungsanreize nach Mitarbeiterbedürfnissen'],
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Organisation',
        punkte: [
          'Aufbauorganisation (Struktur: Aufgabe → Abteilung → Stelle) + Ablauforganisation (Prozesse)',
          'Stellen: Instanz (Leitung), Stabstelle (Beratung, keine Weisung), Ausführungsstelle',
          'Zentralisation ↔ Dezentralisation',
          'Einliniensystem (funktional/divisional) ↔ Mehrliniensystem (Matrix)',
          'Agil: Kundenzentrierung, flache Hierarchien, selbstorganisierte Teams',
          'Prozesse: Geschäfts-, Unterstützungs-, Managementprozesse; Flussdiagramm',
        ],
      },
      {
        titel: 'Führung',
        punkte: [
          'Eigenschafts-, Verhaltens-, Situationstheorien',
          'Führungsstile: autoritär, kooperativ, Laissez-faire',
          'Verhaltensgitter: 1.1, 9.1, 1.9, 5.5, 9.9 (optimal)',
          'Reifegradtheorie: Telling → Selling → Participating → Delegating',
          'Vroom-Yetton: Sachqualität + Akzeptanz → AI, AII, BI, BII, GII',
          'Management by Delegation, Results, Objectives, Motivation',
        ],
      },
    ],
  },
'personalbedarfsplanung': {
    schritte: [
      {
        titel: 'Aufgaben des Personalmanagements',
        blocks: [
          {
            type: 'begriff',
            term: 'Personalmanagement (Human Resource Management, HR)',
            erklaerung: 'Kümmert sich um die Mitarbeiter = das wichtigste Kapital (Humankapital) eines Unternehmens.',
          },
          {
            type: 'ablauf',
            titel: 'Aufgaben im Überblick',
            schritte: [
              { titel: 'Personalbedarfsplanung', text: 'Wie viele Mitarbeiter mit welchen Qualifikationen werden wann und wo gebraucht?' },
              { titel: 'Personalsuche und -auswahl', text: 'geeignete Mitarbeiter anwerben und aussuchen' },
              { titel: 'Personalentwicklung', text: 'Mitarbeiter qualifizieren' },
              { titel: 'Personalfreisetzung', text: 'Arbeitsverhältnisse beenden' },
              { titel: 'Personaleinsatzgestaltung', text: 'Rahmen für motivierten Einsatz' },
            ],
          },
        ],
      },
      {
        titel: 'Personalbedarf ermitteln & decken',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Quantitativer Personalbedarf', punkte: ['WIE VIELE Mitarbeiter?', 'Schwankt durch Saison, Ausfälle (Krankheit, Karenz, Kündigung), Nachfrage'] },
            rechts: { titel: 'Qualitativer Personalbedarf', punkte: ['WELCHE Qualifikationen?', 'Ausbildung, Erfahrung, Persönlichkeit, soziale Kompetenzen', 'Steht in der Stellenbeschreibung'] },
          },
          {
            type: 'begriff',
            term: 'Stellenbeschreibung',
            erklaerung: 'Enthält alle wichtigen Infos über eine Stelle: Eingliederung in die Organisation, Zielsetzung, Tätigkeiten, Kompetenzen.',
          },
          { type: 'merke', text: 'Außerdem: örtlicher Personalbedarf (wo?) und zeitlicher Personalbedarf (wann, wie lange?).' },
          {
            type: 'tabelle',
            spalten: ['Situation', 'Maßnahme'],
            zeilen: [
              ['Bedarf > Ist-Stand', 'Personalsuche und -auswahl ODER Personalentwicklung'],
              ['Bedarf < Ist-Stand', 'Personalfreisetzung ODER Personalentwicklung (Umschulung)'],
            ],
          },
        ],
      },
      {
        titel: 'Personalsuche',
        blocks: [
          {
            type: 'ablauf',
            titel: 'Prozess der Personalsuche und -auswahl (Recruiting)',
            schritte: [
              { titel: 'Anforderungsprofil festlegen', text: 'allgemeine Anforderungen, Ausbildung, Persönlichkeit, Branchenkenntnisse' },
              { titel: 'Personalsuche' },
              { titel: 'Vorauswahl', text: 'Bewerbungsunterlagen analysieren' },
              { titel: 'Auswahl', text: 'Auswahlverfahren' },
              { titel: 'Personaleinstellung' },
            ],
          },
          {
            type: 'vergleich',
            links: { titel: 'Interne Personalsuche', punkte: ['Ohne Personalbewegung: Überstunden, Urlaubsverschiebung, Personalentwicklung', 'Mit Personalbewegung: Beförderung, Versetzung, innerbetriebliche Ausschreibung'] },
            rechts: { titel: 'Externe Personalsuche', punkte: ['Durch das Unternehmen: Inserate, Website, Messen', 'Mit Dritten: AMS, Personalberater, Personalleasing, Jobbörsen, Headhunter'] },
          },
          {
            type: 'tabelle',
            spalten: ['Begriff', 'Bedeutung'],
            zeilen: [
              ['Personalleasing', 'Unternehmen „leiht“ kurzfristig Personal von einer Leasingfirma'],
              ['Headhunter', 'spricht gezielt hochqualifizierte Fachkräfte an'],
              ['Employer Branding', 'Image als attraktiver Arbeitgeber aufbauen'],
            ],
          },
          { type: 'merke', text: 'Stellenanzeige: Infos zum Unternehmen, Position, Qualifikationen, Gehaltsangabe (Pflicht!), Art der Bewerbung. Geschlechtsneutral ausschreiben (§ 9 Gleichbehandlungsgesetz) – z. B. (m/w/d).' },
        ],
      },
      {
        titel: 'Vorauswahl & Auswahl',
        blocks: [
          {
            type: 'begriff',
            term: 'Bewerbungsunterlagen',
            erklaerung: 'Bewerbungsschreiben (max. 1 Seite) + Lebenslauf mit Foto + Zeugniskopien (Ausbildungs- und Dienstzeugnisse).',
          },
          {
            type: 'tabelle',
            spalten: ['Bei der Vorauswahl prüft das Unternehmen'],
            zeilen: [
              ['Sind die wichtigsten Kriterien des Anforderungsprofils erfüllt?'],
              ['Stimmen Lebenslauf und Zeugnisse überein?'],
              ['Gibt es Lücken im Werdegang?'],
              ['Häufige Jobwechsel?'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Auswahlverfahren', 'Bedeutung'],
            zeilen: [
              ['Videobewerbung', 'kurzes Vorstellungsvideo'],
              ['Telefoninterview', '15–30 Min., Grundlegendes klären'],
              ['Vorstellungsgespräch', 'fast immer: Auftreten, Kommunikation'],
              ['Arbeitsproben', 'Tätigkeiten aus der Praxis'],
              ['Testverfahren', 'z. B. Intelligenztests'],
              ['Assessment-Center', 'mehrere Bewerber, Gruppenaufgaben, bis 3 Tage – v. a. für Führungspositionen'],
            ],
          },
          {
            type: 'ablauf',
            titel: 'Ablauf des Bewerbungsgesprächs',
            schritte: [
              { titel: 'Gesprächsbeginn (Atmosphäre)' },
              { titel: 'Selbstvorstellung der Bewerber' },
              { titel: 'Unternehmen stellt sich vor' },
              { titel: 'Lebenslaufbezogene Fragen' },
              { titel: 'Situative Fragen' },
              { titel: 'Freies Gespräch' },
              { titel: 'Gesprächsabschluss' },
            ],
          },
          { type: 'merke', text: 'Unzulässig: Fragen nach Partei, Religion, Schwangerschaft oder Krankheiten.' },
        ],
      },
      {
        titel: 'Personaleinstellung & -entwicklung',
        blocks: [
          {
            type: 'begriff',
            term: 'Dienstzettel',
            erklaerung: 'Hält die wichtigsten Infos aus dem Arbeitsvertrag fest. Pflicht – außer bei max. 1 Monat oder schriftlichem Vertrag mit allen Angaben. Arbeitgeber meldet vor Arbeitsantritt bei der ÖGK an.',
          },
          {
            type: 'begriff',
            term: 'Personalentwicklung (PE)',
            erklaerung: 'Alle geplanten Aus-, Fort- und Weiterbildungsmaßnahmen zur Förderung fachlicher, methodischer, sozialer und persönlicher Fähigkeiten.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Betriebliche Ziele', punkte: ['Qualifiziertes Personal sichern', 'Wettbewerbsfähigkeit', 'Zufriedenheit & Bindung', 'Unabhängigkeit vom Arbeitsmarkt'] },
            rechts: { titel: 'Individuelle Ziele', punkte: ['Persönlichkeit entfalten', 'Prestige', 'Karrieremöglichkeiten', 'Höheres Einkommen'] },
          },
          {
            type: 'tabelle',
            spalten: ['Methode', 'Beispiele'],
            zeilen: [
              ['Into the Job (Vorbereitung)', 'Onboarding, Traineeprogramm, Lehre, Mentor/Buddy'],
              ['On the Job (am Arbeitsplatz)', 'Unterweisung, Coaching'],
              ['Near the Job (nahe am Arbeitsplatz)', 'Projektarbeit, Qualitätszirkel, Feedback-Gespräche'],
              ['Off the Job (außerhalb)', 'E-Learning, Seminare, berufsbegleitendes Studium'],
              ['Along the Job (Laufbahn)', 'Fördergespräche, Karriereplanung'],
              ['Out of the Job (Ausstieg)', 'Ruhestandsvorbereitung, Outplacement'],
            ],
          },
        ],
      },
      {
        titel: 'Personalfreisetzung',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Art der Beendigung', 'Gilt für', 'Bedeutung'],
            zeilen: [
              ['Zeitablauf', 'befristet', 'endet automatisch'],
              ['Lösung in der Probezeit', 'Probezeit (max. 1 Monat, Lehrlinge 3)', 'jederzeit, ohne Grund'],
              ['Kündigung', 'unbefristet', 'beide Seiten, ohne Grund, mit Frist und Termin'],
              ['Entlassung', 'immer', 'Arbeitgeber, sofort, bei schwerem Verstoß (Diebstahl, Arbeitsverweigerung)'],
              ['Austritt', 'immer', 'Arbeitnehmer, sofort, bei schwerem Verstoß (kein Lohn, Belästigung)'],
              ['Einvernehmliche Auflösung', 'immer', 'beide einig, keine Fristen'],
            ],
          },
          {
            type: 'vergleich',
            links: { titel: 'Kündigung durch Arbeitnehmer', punkte: ['Zu jedem Monatsletzten', 'Frist meist 1 Monat'] },
            rechts: { titel: 'Kündigung durch Arbeitgeber (Angestellte)', punkte: ['Zum Quartalsende', '1.–2. Jahr: 6 Wochen', '3.–5. Jahr: 2 Monate', '6.–15. Jahr: 3 Monate', '16.–25. Jahr: 4 Monate', 'ab 26. Jahr: 5 Monate'] },
          },
          {
            type: 'begriff',
            term: 'Kündigungstermin & -frist',
            erklaerung: 'Termin = Tag, an dem das Arbeitsverhältnis endet. Frist = Zeit zwischen Zugang der Kündigung und Termin.',
            beispiel: 'Frist 2 Monate, Termin 31.03. → spätestens am 31.01. kündigen',
          },
          { type: 'merke', text: 'Kündigungsschutz: werdende Mütter, Elternkarenz, Präsenz-/Zivildiener, Betriebsräte, begünstigte Behinderte.' },
          {
            type: 'tabelle',
            spalten: ['Anspruch bei Beendigung', 'Bedeutung'],
            zeilen: [
              ['Entgelt & Sonderzahlungen', 'bis zum letzten Tag + anteilige Sonderzahlungen + Urlaubsersatzleistung'],
              ['Postensuchtage', 'bei Kündigung durch Arbeitgeber: 1/5 der Wochenarbeitszeit bezahlt frei'],
              ['Dienstzeugnis', 'schriftlich: Dauer und Art der Arbeit, keine negativen Formulierungen'],
              ['Abfertigung (MVK)', '1,53 % des Bruttoentgelts monatlich; Auszahlung nach mind. 3 Einzahlungsjahren'],
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Planung & Suche',
        punkte: [
          'Personalbedarf: quantitativ (wie viele) + qualitativ (welche Qualifikation, Stellenbeschreibung) + örtlich + zeitlich',
          'Bedarf > Ist → Suche oder Entwicklung · Bedarf < Ist → Freisetzung oder Umschulung',
          'Recruiting: Anforderungsprofil → Suche → Vorauswahl → Auswahl → Einstellung',
          'Intern (Beförderung, Versetzung) ↔ extern (Inserate, AMS, Leasing, Headhunter)',
        ],
      },
      {
        titel: 'Auswahl & Einstellung',
        punkte: [
          'Unterlagen: Bewerbungsschreiben, Lebenslauf, Zeugnisse',
          'Verfahren: Video, Telefon, Vorstellungsgespräch, Arbeitsprobe, Test, Assessment-Center',
          'Dienstzettel + Anmeldung bei der ÖGK',
        ],
      },
      {
        titel: 'Entwicklung & Freisetzung',
        punkte: [
          'PE-Methoden: Into, On, Near, Off, Along, Out of the Job',
          'Beendigung: Zeitablauf, Probezeit, Kündigung, Entlassung, Austritt, einvernehmlich',
          'Arbeitgeber kündigt Angestellte zum Quartalsende; Frist 6 Wochen bis 5 Monate',
          'Ansprüche: Entgelt, Sonderzahlungen, Urlaubsersatz, Postensuchtage, Dienstzeugnis, Abfertigung (MVK 1,53 %)',
        ],
      },
    ],
  },
'personaleinsatzgestaltung': {
    schritte: [
      {
        titel: 'Stufenbau der Rechtsordnung',
        blocks: [
          {
            type: 'begriff',
            term: 'Rechte und Pflichten',
            erklaerung: 'Ein Arbeitsverhältnis bringt beiden Seiten Rechte und Pflichten. Sie stehen in verschiedenen Vorschriften – geordnet im Stufenbau.',
          },
          {
            type: 'ablauf',
            titel: 'Stufenbau (Arbeitsrecht) – von oben nach unten',
            schritte: [
              { titel: 'Europarecht', text: 'Verordnungen, Richtlinien (EU)' },
              { titel: 'Nationale Gesetze', text: 'z. B. Angestelltengesetz, Arbeitszeitgesetz, Urlaubsgesetz (Parlament)' },
              { titel: 'Kollektivvertrag', text: 'Sozialpartner (Gewerkschaft + Wirtschaftskammer): Entlohnung, Arbeitszeit für eine Branche' },
              { titel: 'Betriebsvereinbarungen', text: 'Betriebsrat + Arbeitgeber, innerhalb eines Betriebs' },
              { titel: 'Einzelarbeitsvertrag', text: 'Arbeitnehmer + Arbeitgeber' },
            ],
          },
          { type: 'merke', text: 'Untere Stufen dürfen nur abweichen, wenn es VORTEILHAFT für Arbeitnehmer ist. Gehalt laut Arbeitsvertrag darf höher sein als laut KV – aber nie niedriger.' },
        ],
      },
      {
        titel: 'Rechte und Pflichten',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Arbeitgeber (AG)', punkte: ['Zahlung des Entgelts', 'Fürsorgepflicht: Schutz vor Gefahren, Gesundheit, Gleichbehandlung, Sonderschutz (Jugendliche, Schwangere)'] },
            rechts: { titel: 'Arbeitnehmer (AN)', punkte: ['Persönliche Arbeitsleistung', 'Treuepflicht: Verschwiegenheit, keine Geschenke, nichts Rufschädigendes, Konkurrenzverbot'] },
          },
          { type: 'merke', text: 'Pflichten des AN = Rechte des AG und umgekehrt.' },
          {
            type: 'begriff',
            term: 'Konkurrenzverbot',
            erklaerung: 'AN darf ohne Erlaubnis weder ein Unternehmen führen noch im gleichen Geschäftszweig Geschäfte für ein anderes Unternehmen machen.',
          },
        ],
      },
      {
        titel: 'Arbeitszeit, Urlaub, Arbeitsverhinderung',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Regel', 'Inhalt'],
            zeilen: [
              ['Normalarbeitszeit', '8 Std./Tag, 40 Std./Woche (KV oft 38,5); weniger = Teilzeit'],
              ['Gleitzeit', 'flexibel innerhalb einer Kernarbeitszeit'],
              ['Überstunden', 'Normallohn + 50 % (100 % nachts, Sonn-/Feiertag) oder Zeitausgleich'],
              ['Höchstarbeitszeit', 'inkl. Überstunden max. 12 Std./Tag, 60 Std./Woche'],
              ['Ruhepausen', 'über 6 Std. → mind. 30 Min. Pause; danach 11 Std. Ruhezeit'],
            ],
          },
          {
            type: 'begriff',
            term: 'Urlaub',
            erklaerung: '25 Arbeitstage pro Arbeitsjahr (Fünftagewoche), ab dem 26. Jahr 30. Volles Ausmaß nach 6 Monaten. Urlaubszeit nur im Einvernehmen.',
          },
          {
            type: 'begriff',
            term: 'Arbeitsverhinderung',
            erklaerung: 'Krankheit, Unfall → sofort melden; Lohn wird weiter bezahlt. Krankmeldung meist nach 3 Tagen. Auch kurz bei wichtigen persönlichen Gründen (Hochzeit, Todesfall).',
          },
          {
            type: 'vergleich',
            links: { titel: 'Mutterschutz', punkte: ['8 Wochen vor + 8 Wochen nach der Geburt', 'Absolutes Beschäftigungsverbot', 'Wochengeld von der ÖGK'] },
            rechts: { titel: '(Eltern-)Karenz', punkte: ['Anschließend, max. bis 2. Geburtstag', 'Kein Lohn, Kinderbetreuungsgeld vom Staat', 'Eltern können teilen'] },
          },
        ],
      },
      {
        titel: 'Betriebliche Mitbestimmung',
        blocks: [
          {
            type: 'kette',
            glieder: [
              { titel: 'wählen', wert: 'Alle Arbeitnehmer' },
              { titel: 'vertritt die Belegschaft', wert: 'Betriebsrat' },
              { titel: 'alle zusammen', wert: 'Betriebsversammlung' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Organ', 'Bedeutung'],
            zeilen: [
              ['Betriebsrat', 'Bindeglied zwischen Führung und Belegschaft; ab 5 Arbeitnehmern (über 18)'],
              ['Aktives Wahlrecht', 'ab 16 Jahren'],
              ['Passives Wahlrecht', 'ab 18 Jahren und 6 Monaten im Betrieb'],
              ['Betriebsversammlung', 'gesamte Belegschaft, mind. 1× pro Jahr; kann Betriebsrat abberufen'],
            ],
          },
        ],
      },
      {
        titel: 'Motivationstheorien',
        blocks: [
          {
            type: 'pyramide',
            stufen: [
              { name: 'Selbstverwirklichung', beispiel: 'Weiterbildung, Karrierechancen' },
              { name: 'Anerkennung', beispiel: 'Lob, Auszeichnungen, Prämien' },
              { name: 'Soziale Bedürfnisse', beispiel: 'Betriebsklima, Teamevents' },
              { name: 'Sicherheit', beispiel: 'faires Entgelt, unbefristeter Vertrag' },
              { name: 'Grundbedürfnisse', beispiel: 'Getränke, Mittagsverpflegung' },
            ],
          },
          {
            type: 'begriff',
            term: 'Zwei-Faktoren-Theorie (Herzberg)',
            erklaerung: 'Unterscheidet Motivatoren (schaffen Zufriedenheit) und Hygienefaktoren (verhindern nur Unzufriedenheit).',
          },
          {
            type: 'vergleich',
            links: { titel: 'Motivatoren (intrinsisch)', punkte: ['Arbeitsinhalt', 'Leistung, Erfolg, Anerkennung', 'Verantwortung, Aufstieg', '→ führen zu Zufriedenheit'] },
            rechts: { titel: 'Hygienefaktoren (extrinsisch)', punkte: ['Arbeitsumwelt', 'Gehalt, Arbeitsbedingungen, Arbeitsplatzsicherheit', 'Führungsstil, Kollegen', '→ Fehlen führt zu Unzufriedenheit'] },
          },
          {
            type: 'tabelle',
            spalten: ['Motivierende Arbeitsorganisation', 'Bedeutung'],
            zeilen: [
              ['Jobrotation', 'systematischer Wechsel des Arbeitsplatzes'],
              ['Jobenlargement', 'zusätzliche Tätigkeiten mit GLEICHEN Anforderungen'],
              ['Jobenrichment', 'Tätigkeiten mit HÖHEREN Anforderungen und mehr Verantwortung'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Angenehme Arbeitsplatzgestaltung'],
            zeilen: [
              ['Interessanter Arbeitsinhalt (flexible Zeiten, Homeoffice, Vier-Tage-Woche)'],
              ['Sichere, angenehme Arbeitsumgebung (Ergonomie, Unfallverhütung)'],
              ['Gesundheitsfördernde Maßnahmen (Fitness, Yoga, gesunde Verpflegung)'],
              ['Betriebliche Sozialleistungen (Altersvorsorge, Öffi-Zuschuss, Kinderbetreuung)'],
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Arbeitsrecht',
        punkte: [
          'Stufenbau: Europarecht → Gesetze → Kollektivvertrag → Betriebsvereinbarung → Einzelarbeitsvertrag; Abweichung nur zugunsten AN',
          'AG: Entgelt + Fürsorgepflicht · AN: Arbeitsleistung + Treuepflicht (Konkurrenzverbot)',
          'Arbeitszeit: 8 h/40 h normal; max. 12 h/60 h; Pause ab 6 h; Überstunden +50 %',
          'Urlaub: 25 Arbeitstage (ab 26. Jahr 30)',
          'Mutterschutz 8 + 8 Wochen; Karenz bis 2. Geburtstag',
          'Betriebsrat ab 5 AN; aktiv wählen ab 16, gewählt werden ab 18 + 6 Monate',
        ],
      },
      {
        titel: 'Motivation',
        punkte: [
          'Maslow: Grund-, Sicherheits-, soziale Bedürfnisse, Anerkennung, Selbstverwirklichung',
          'Herzberg: Motivatoren (Zufriedenheit) ↔ Hygienefaktoren (verhindern Unzufriedenheit)',
          'Jobrotation, Jobenlargement (gleiche Anforderung), Jobenrichment (mehr Verantwortung)',
          'Arbeitsplatz: Arbeitsinhalt, Umgebung, Gesundheit, Sozialleistungen',
        ],
      },
    ],
  },
'personalbeurteilung': {
    schritte: [
      {
        titel: 'Generationenvielfalt',
        blocks: [
          { type: 'text', text: 'In Unternehmen treffen bis zu 5 Generationen aufeinander – jede mit eigenen Werten und Erwartungen.' },
          {
            type: 'tabelle',
            spalten: ['Generation', 'Geboren', 'Werte', 'Erwartungen'],
            zeilen: [
              ['Babyboomer', '1946–1964', 'loyal, pflichtbewusst', 'Sicherheit, Anerkennung, klare Hierarchien'],
              ['Generation X', '1965–1980', 'eigenständig, pragmatisch', 'Entwicklung, Work-Life-Balance'],
              ['Generation Y', '1981–1995', 'teamorientiert, technikaffin', 'Flexibilität, Sinn, flache Hierarchien'],
              ['Generation Z', '1996–2010', 'digital, sicherheitsorientiert', 'Struktur, Feedback, Sinn'],
              ['Generation Alpha', 'ab 2010', 'digital, individualistisch', 'Mitgestaltung, digitale Arbeitswelten'],
            ],
          },
          {
            type: 'begriff',
            term: 'Sabbatical',
            erklaerung: 'Längere, befristete und unbezahlte Auszeit vom Beruf – v. a. für jüngere Generationen attraktiv.',
          },
        ],
      },
      {
        titel: 'Entlohnung',
        blocks: [
          {
            type: 'begriff',
            term: 'Entgelt',
            erklaerung: 'Gegenleistung für die Arbeit: Lohn (Arbeiter) oder Gehalt (Angestellte).',
          },
          {
            type: 'tabelle',
            spalten: ['„Gerechte“ Entlohnung ist …', 'berücksichtigt'],
            zeilen: [
              ['leistungsgerecht', 'Arbeitsergebnis und Leistung'],
              ['anforderungsgerecht', 'Schwierigkeit und Aufwand'],
              ['qualifikationsgerecht', 'erforderliche Qualifikation'],
              ['marktgerecht', 'was andere für die gleiche Position zahlen'],
              ['sozial gerecht', 'Familienstand, Alter'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Entlohnungsform', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Zeitlohn', 'Entgelt pro Zeiteinheit (Stunde, Monat)', 'Lehrer'],
              ['Akkordlohn (Leistungslohn)', 'an Menge gekoppelt: Stückakkord oder Zeitakkord', 'Erntehelfer pro kg'],
              ['Prämienlohn (Leistungslohn)', 'Zeitlohn + Prämie für Mehrleistung', 'Makler pro Immobilie'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Sozialleistungen', 'Beispiel'],
            zeilen: [
              ['Gesetzlich', 'Arbeitgeberanteil zur Sozialversicherung'],
              ['Tariflich (KV)', 'Schmutzzulage, Urlaubs- und Weihnachtsgeld'],
              ['Freiwillig', 'Kantine, Firmen-Pkw'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Mitarbeiterbeteiligung', 'Bedeutung'],
            zeilen: [
              ['Erfolgsbeteiligung', 'Bonus für besondere Leistungen'],
              ['Kapitalbeteiligung', 'Belegschaftsaktien, Mitarbeiterstiftung'],
              ['Gewinnbeteiligung', 'Anteil am ausgeschütteten Gewinn'],
            ],
          },
          { type: 'merke', text: '„Cafeteria-System“: Mitarbeiter wählen selbst aus verschiedenen Anreizen (Versicherung, Urlaub, Firmen-Pkw).' },
        ],
      },
      {
        titel: 'Personalbeurteilung',
        blocks: [
          {
            type: 'begriff',
            term: 'Personalbeurteilung',
            erklaerung: 'Leistung und Potenzial der Mitarbeiter auswerten → bestmöglicher Einsatz, leistungsgerechte Entlohnung, gezielte Förderung, Motivation.',
          },
          {
            type: 'tabelle',
            spalten: ['Gestaltungsform', 'Bedeutung'],
            zeilen: [
              ['Durch Vorgesetzte', 'häufigste Form'],
              ['Durch Kollegen', 'guter Einblick, aber Spannungen möglich'],
              ['Selbstbeurteilung', 'hohe Akzeptanz, oft abweichend von Fremdbild'],
              ['360°-Feedback', 'von vielen Seiten: Kollegen, Vorgesetzte, Kunden, Lieferanten'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Verfahren', 'Bedeutung'],
            zeilen: [
              ['Einstufungsverfahren', 'Kriterien auf einer Skala einstufen'],
              ['… mit Verhaltensbeschreibung', 'Skala + Verhaltensbeispiele'],
              ['Zielorientiertes Verfahren', 'Wurden vereinbarte Ziele erreicht?'],
            ],
          },
          { type: 'merke', text: 'Immer mit einem Gespräch kombinieren (Personalbeurteilungsbogen). Nicht arbeitsrelevante Eigenschaften nicht bewerten.' },
          {
            type: 'tabelle',
            spalten: ['Beurteilungsfehler', 'Bedeutung'],
            zeilen: [
              ['Halo-Effekt', 'eine auffällige Eigenschaft „überstrahlt“ alles andere'],
              ['Selektive Wahrnehmung', 'man sieht nur, was die eigene Meinung bestätigt'],
              ['Ähnlichkeitseffekt', 'ähnliche Menschen werden besser bewertet'],
              ['Recency-Effekt', 'zuletzt Beobachtetes wird überbewertet'],
            ],
          },
        ],
      },
      {
        titel: 'Unterstützungsfunktionen',
        blocks: [
          {
            type: 'begriff',
            term: 'Personalcontrolling',
            erklaerung: 'Planung, Steuerung und Kontrolle aller personalbezogenen Aktivitäten. Prüft, wie effektiv und effizient das Personalmanagement ist.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Quantitative Methoden', punkte: ['Kennzahlen: Bewerber pro Stelle, Personalkosten pro Mitarbeiter, Überstunden, Fluktuationsrate, Weiterbildungskosten'] },
            rechts: { titel: 'Qualitative Methoden', punkte: ['Personalbeurteilungen', 'Mitarbeiterbefragungen', 'Potenzialanalysen', 'Stärken-Schwächen-Analysen'] },
          },
          {
            type: 'formel',
            name: 'Personalintensität',
            zaehler: 'Personalkosten · 100',
            nenner: 'Betriebsleistung',
          },
          {
            type: 'begriff',
            term: 'Personalverwaltung',
            erklaerung: 'Administrative Aufgaben: Abrechnung (Lohn, Reisekosten), Meldungen (Jubiläen, Finanzamt), Überwachung (Arbeitszeiten, Überstunden).',
          },
          {
            type: 'vergleich',
            links: { titel: 'Employer Branding', punkte: ['Langfristiger Aufbau der Arbeitgebermarke', 'Imagekampagnen, Zertifikate, Bewertungsportale, Mitarbeiter als Markenbotschafter'] },
            rechts: { titel: 'Personalmarketing', punkte: ['Konkrete Umsetzung', 'Karriere-Website, Social Media, Praktika, Recruiting-Messen'] },
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Generationen & Entlohnung',
        punkte: [
          'Babyboomer, X, Y, Z, Alpha – unterschiedliche Werte und Erwartungen',
          'Gerechte Entlohnung: leistungs-, anforderungs-, qualifikations-, markt-, sozial gerecht',
          'Zeitlohn · Akkordlohn (Stück-/Zeitakkord) · Prämienlohn',
          'Sozialleistungen: gesetzlich, tariflich, freiwillig · Mitarbeiterbeteiligung: Erfolg, Kapital, Gewinn',
        ],
      },
      {
        titel: 'Beurteilung',
        punkte: [
          'Durch Vorgesetzte, Kollegen, selbst, 360°-Feedback',
          'Einstufungsverfahren (± Verhaltensbeschreibung), zielorientiert',
          'Fehler: Halo-Effekt, selektive Wahrnehmung, Ähnlichkeitseffekt, Recency-Effekt',
        ],
      },
      {
        titel: 'Unterstützung',
        punkte: [
          'Personalcontrolling: quantitativ (Kennzahlen) + qualitativ (Befragungen)',
          'Personalintensität = Personalkosten · 100 / Betriebsleistung',
          'Personalverwaltung: Abrechnung, Meldungen, Überwachung',
          'Employer Branding (Arbeitgebermarke) → Personalmarketing (konkrete Maßnahmen)',
        ],
      },
    ],
  },
'produktionsbetriebe': {
    schritte: [
      {
        titel: 'Bedeutung von Produktionsbetrieben',
        blocks: [
          {
            type: 'begriff',
            term: 'Produktionsbetrieb (Fertigungsbetrieb)',
            erklaerung: 'Unternehmen aus Industrie und Gewerbe, die Sachgüter herstellen. Gehören zum sekundären Sektor (mit Bauwirtschaft und Bergbau).',
          },
          {
            type: 'begriff',
            term: 'Bruttoinlandsprodukt (BIP)',
            erklaerung: 'Gesamtwert aller Güter und Dienstleistungen, die in einem Jahr in einem Land hergestellt werden.',
          },
          {
            type: 'tabelle',
            spalten: ['Sektor', 'Anteil am BIP (Österreich)', 'Anteil an Beschäftigten'],
            zeilen: [
              ['Primär (Urproduktion)', 'ca. 1 %', 'ca. 3 %'],
              ['Sekundär (Produktion)', 'ca. 28 %', 'ca. 25 %'],
              ['Tertiär (Dienstleistung)', 'ca. 71 %', 'ca. 71 %'],
            ],
          },
          { type: 'merke', text: 'Rund 70 % der österreichischen Exporte kommen aus dem produzierenden Sektor. Über 95 % der Produktionsbetriebe sind Klein- und Mittelbetriebe.' },
        ],
      },
      {
        titel: 'Einteilung der Produktionsbetriebe',
        blocks: [
          {
            type: 'vergleich',
            frage: 'Nach der Art der Abnehmer:',
            links: { titel: 'Konsumgüterbetriebe', punkte: ['Sachgüter für Konsumenten (Endverbraucher)', 'z. B. Möbel, Getränke'] },
            rechts: { titel: 'Investitionsgüterbetriebe', punkte: ['Sachgüter für andere Unternehmen', 'z. B. Fließband, Roboter, Stahlbleche'] },
          },
          {
            type: 'tabelle',
            spalten: ['Kriterium', 'Gewerbebetrieb', 'Industriebetrieb'],
            zeilen: [
              ['Bestimmender Faktor', 'Material und Arbeitskraft', 'Anlagevermögen (hohe Fixkosten)'],
              ['Betriebsgröße', 'Klein- und Mittelbetriebe', 'Mittel- und Großbetriebe'],
              ['Geschäftsführung', 'Inhaber', 'Management'],
              ['Fertigung', 'wenig Automatisierung, wenig Arbeitsteilung', 'hoher Automatisierungsgrad, viel Arbeitsteilung'],
              ['Beispiel', 'Naturbackstube Honeder', 'Industriebäckerei backaldrin'],
            ],
          },
          { type: 'merke', text: 'Gewerbe = arbeitsintensiv. Industrie = anlagenintensiv. Die Abgrenzung ist nicht immer eindeutig.' },
        ],
      },
      {
        titel: 'Ziele der Produktionsbetriebe',
        blocks: [
          {
            type: 'begriff',
            term: 'Wettbewerbsfähigkeit',
            erklaerung: 'Produktionsbetriebe müssen absetzbare, einzigartige Produkte herstellen (Alleinstellungsmerkmal/USP) und flexibel auf Veränderungen reagieren.',
          },
          {
            type: 'tabelle',
            spalten: ['Ziele der betrieblichen Produktion'],
            zeilen: [
              ['Optimaler Einsatz der Produktionsfaktoren (Produktivität, Wirtschaftlichkeit, Rentabilität)'],
              ['Kundenzufriedenheit'],
              ['Niedrige Kosten in der Produktion'],
              ['Nachhaltige und ethische Produktion'],
            ],
          },
          {
            type: 'begriff',
            term: 'Fixkostendegression',
            erklaerung: 'Je mehr Stück produziert werden, desto geringer werden die Fixkosten pro Stück (Massenproduktion).',
            beispiel: 'IKEA produziert Billy-Regale in riesigen Mengen.',
          },
          {
            type: 'tabelle',
            spalten: ['Nachhaltigkeit', 'Bedeutung'],
            zeilen: [
              ['People – sozial', 'faires Arbeitsumfeld, Gesundheit, Weiterbildung'],
              ['Planet – ökologisch', 'erneuerbare Energie, Energieeffizienz, weniger Wasserverbrauch'],
              ['Profit – ökonomisch', 'verantwortlich wirtschaften: Gesetze, keine Korruption, fairer Wettbewerb'],
            ],
          },
        ],
      },
      {
        titel: 'Standortwahl',
        blocks: [
          {
            type: 'begriff',
            term: 'Standort',
            erklaerung: 'Geografischer Ort eines Betriebs. Standortwahl ist eine wichtige strategische Entscheidung – langfristig, teuer und schwer rückgängig zu machen.',
          },
          {
            type: 'tabelle',
            spalten: ['Standortfaktoren', 'Beispiele'],
            zeilen: [
              ['Beschaffungsseitig', 'Fläche, Infrastruktur, Arbeitskräfte, Nähe zu Lieferanten/Rohstoffen, Mieten, Forschung'],
              ['Produktionsbezogen', 'rechtliche Vorschriften, Steuern, Bürokratie, Personalkosten, Förderungen'],
              ['Absatzorientiert', 'Kundennähe, Wettbewerb, Verkehrslage, Image'],
            ],
          },
          { type: 'merke', text: 'Für Produktionsbetriebe zählen vor allem beschaffungsseitige und produktionsbezogene Faktoren (z. B. Lage an Flüssen für Rohstofftransport). Hilfsmittel: Scoring-Methode.' },
          {
            type: 'begriff',
            term: 'Follow-the-Customer-Prinzip',
            erklaerung: 'Produktion dort ansiedeln, wo die wichtigsten Kunden sind.',
            beispiel: 'voestalpine erweitert in den USA, um nah an Lkw-Herstellern zu sein und Zölle zu umgehen.',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Produktionsbetriebe',
        punkte: [
          'Produzieren Sachgüter (Industrie, Gewerbe) – sekundärer Sektor, ca. 28 % des BIP, ca. 70 % der Exporte',
          'Konsumgüter- (Endverbraucher) ↔ Investitionsgüterbetriebe (Unternehmen)',
          'Gewerbe (arbeitsintensiv, Inhaber, klein) ↔ Industrie (anlagenintensiv, Management, groß, automatisiert)',
        ],
      },
      {
        titel: 'Ziele & Standort',
        punkte: [
          'Wettbewerbsfähigkeit durch USP und Flexibilität',
          'Ziele: optimaler Faktoreinsatz, Kundenzufriedenheit, niedrige Kosten, Nachhaltigkeit (People, Planet, Profit)',
          'Fixkostendegression: mehr Stück → weniger Fixkosten pro Stück',
          'Standortfaktoren: beschaffungsseitig, produktionsbezogen, absatzorientiert; Follow-the-Customer',
        ],
      },
    ],
  },
'leistungserstellungsprozess-produktion': {
    schritte: [
      {
        titel: 'Der Prozess im Überblick',
        blocks: [
          {
            type: 'begriff',
            term: 'Produktion',
            erklaerung: 'Die Produktionsfaktoren Arbeitskraft, Betriebsmittel und Werkstoffe werden so kombiniert, dass Produkte entstehen.',
          },
          {
            type: 'ablauf',
            titel: 'Leistungserstellungsprozess',
            schritte: [
              { titel: 'Produktinnovation', text: '(Weiter-)Entwicklung eines Produkts' },
              { titel: 'Absatzplanung', text: 'Menge der verkaufbaren Produkte schätzen' },
              { titel: 'Produktionsprogrammplanung', text: 'welche Produkte wann und wie viele?' },
              { titel: 'Materialbedarfsplanung', text: 'Bedarf an Materialien ermitteln' },
              { titel: 'Planung des zeitlichen Ablaufs', text: 'konkrete Arbeitsschritte festlegen' },
              { titel: 'Durchführung der Produktion', text: 'Fertigungsmöglichkeiten bestimmen' },
            ],
          },
          { type: 'merke', text: 'Parallel dazu laufen Produktionscontrolling und Qualitätsmanagement. In der Praxis hilft ein PPS-System (z. B. SAP).' },
        ],
      },
      {
        titel: 'Produktinnovation',
        blocks: [
          {
            type: 'begriff',
            term: 'Produktinnovation',
            erklaerung: 'Ein völlig neues Produkt wird kreiert oder ein bestehendes weiterentwickelt. Erfordert Investitionen in Forschung und Entwicklung (F&E).',
          },
          {
            type: 'kette',
            glieder: [
              { titel: '1', wert: 'Produktvorschlag' },
              { titel: '2', wert: 'Entwicklung (Konstruktion)' },
              { titel: '3', wert: 'Vorbereitung der Produktion' },
            ],
          },
          { type: 'text', text: 'Begleitend: Kostencontrolling (Gehälter, Anlagen, Marktforschung).' },
          {
            type: 'vergleich',
            frage: 'Woher kommt die Idee?',
            links: { titel: 'Technology-Push', punkte: ['Neue Technologie löst Innovation aus', 'z. B. KI → Chatbots'] },
            rechts: { titel: 'Market-Pull', punkte: ['Kundenwunsch/Trend löst Innovation aus', 'z. B. vegane Produkte'] },
          },
          {
            type: 'tabelle',
            spalten: ['Begriff', 'Bedeutung'],
            zeilen: [
              ['Konstruktionszeichnung', 'grafische Darstellung des Produkts'],
              ['Erzeugnisstruktur', 'Baum: Produkt → Baugruppen (BG) → Einzelteile (ET)'],
              ['Stückliste', 'Auflistung aller Baugruppen und Einzelteile mit Mengen'],
              ['Simultaneous Engineering', 'Produkt und Fertigung parallel entwickeln'],
            ],
          },
          {
            type: 'begriff',
            term: 'Produktionsvorbereitung',
            erklaerung: 'Arbeitsplanung → Bereitstellung der Produktionsfaktoren → Tests (Prototyp).',
          },
        ],
      },
      {
        titel: 'Absatz- & Produktionsprogrammplanung',
        blocks: [
          {
            type: 'begriff',
            term: 'Absatzplanung',
            erklaerung: 'Schätzt, welche Produkte in welcher Menge voraussichtlich verkauft werden (Primärbedarf). Grundlage: Verkaufsstatistiken, Marktforschung.',
          },
          {
            type: 'begriff',
            term: 'Produktionsprogrammplanung',
            erklaerung: 'Legt fest: Art der Produkte, Menge und zeitliche Abfolge. Prüft, ob die Kapazitäten reichen.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Auftragsproduktion (make to order)', punkte: ['Produktion erst bei konkretem Kundenauftrag', 'Kundenwünsche möglich', 'z. B. Spritzgießmaschine'] },
            rechts: { titel: 'Vorratsproduktion (make to stock)', punkte: ['Produktion nach prognostizierter Absatzmenge', 'Immer lieferfähig', 'z. B. Waschmittel, Getränke'] },
          },
          {
            type: 'formel',
            name: 'Deckungsbeitrag',
            zaehler: 'Erlöse − variable Kosten',
            nenner: '1',
            beispiel: 'Optimales Produktionsprogramm = Deckungsbeitrag/Gewinn maximal',
          },
          {
            type: 'begriff',
            term: 'Kapazität',
            erklaerung: 'Leistungsvermögen eines Unternehmens (Anlagen, Maschinen, menschliche Arbeitsleistung).',
          },
        ],
      },
      {
        titel: 'Materialbedarfsplanung',
        blocks: [
          {
            type: 'begriff',
            term: 'Materialbedarfsplanung',
            erklaerung: 'Ermittelt auf Basis des Produktionsprogramms den Materialbedarf und stellt die Materialien rechtzeitig bereit.',
          },
          {
            type: 'tabelle',
            spalten: ['Berechnung'],
            zeilen: [
              ['Materialbedarf laut Stückliste · Produktionsmenge'],
              ['= Bruttobedarf (Gesamtbedarf)'],
              ['− Lagerbestand'],
              ['= Nettobedarf (tatsächlich zu beschaffen)'],
            ],
          },
          {
            type: 'text',
            text: 'Beispiel Tischlerei: 120 Tische · 4 Tischbeine = 480 Tischbeine (brutto) − 75 auf Lager = 405 Tischbeine (netto).',
          },
          {
            type: 'vergleich',
            links: { titel: 'Eigenfertigung', punkte: ['Nettobedarf wird selbst produziert'] },
            rechts: { titel: 'Fremdbezug', punkte: ['Nettobedarf wird zugekauft'] },
          },
        ],
      },
      {
        titel: 'Zeitliche Planung',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Durchlaufterminierung', punkte: ['Reihenfolge nach den anfallenden Tätigkeiten', 'Start- und Endtermine festlegen'] },
            rechts: { titel: 'Kapazitätsterminierung', punkte: ['Berücksichtigt die vorhandenen Kapazitäten', 'Kapazitätsprofile'] },
          },
          {
            type: 'tabelle',
            spalten: ['Durchlaufzeit', 'besteht aus'],
            zeilen: [
              ['Durchführungszeit', 'Rüstzeit (Maschine vorbereiten) + Bearbeitungszeit'],
              ['Übergangszeit', 'Liegezeit (nichts passiert) + Transportzeit'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['', 'Vorwärtsterminierung', 'Rückwärtsterminierung'],
            zeilen: [
              ['Ablauf', 'nach Auftragseingang sofort starten → frühestmöglicher Endtermin', 'vom Liefertermin zurückrechnen → spätestmöglicher Start'],
              ['Vorteil', 'geringer Zeitdruck', 'geringere Lagerkosten'],
              ['Nachteil', 'Kapitalbindung durch Lager', 'keine Zeitpuffer'],
            ],
          },
          { type: 'merke', text: 'Chronologisch: Balkendiagramm. Parallele Schritte: Netzplan. Termintreue = fristgerechte Auslieferungen · 100 / Gesamtzahl.' },
          {
            type: 'formel',
            name: 'Auslastung in %',
            zaehler: 'Kapazitätsnachfrage · 100',
            nenner: 'Kapazitätsangebot',
          },
          {
            type: 'tabelle',
            spalten: ['Anpassung bei Überlastung', 'Beispiele'],
            zeilen: [
              ['Zeitlich', 'Überstunden, Liefertermine verschieben'],
              ['Quantitativ', 'zusätzliche Maschinen, mehr Personal'],
              ['Intensitätsmäßig', 'Produktivität steigern (Technologie, Weiterbildung)'],
            ],
          },
        ],
      },
      {
        titel: 'Durchführung der Produktion',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Fertigungsart', 'Merkmal', '+', '−'],
            zeilen: [
              ['Einzelfertigung', 'ein Stück nach Kundenwunsch (Kreuzfahrtschiff)', 'genau nach Wunsch, hohe Qualität', 'hohe Kosten, lange Durchlaufzeit'],
              ['Serienfertigung', 'begrenzte Anzahl gleicher/ähnlicher Produkte (Autoserie)', 'niedrigere Stückkosten', 'hoher Kapitalbedarf, wenig flexibel'],
              ['Massenfertigung', 'identische Produkte in beliebiger Menge (Mineralwasser)', 'geringe Kosten, schnell', 'Umstellung teuer, hohe Lagerkosten'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Organisationstyp', 'Merkmal', 'Beispiel'],
            zeilen: [
              ['Werkstattfertigung', 'gleiche Tätigkeiten in einer Werkstatt', 'Metallzaun: Zuschneiden, Bohren, Lackieren'],
              ['Fließbandfertigung', 'Stationen nach Reihenfolge, automatischer Transport', 'Fernseher'],
              ['Gruppenfertigung', 'Mischung aus Werkstatt und Fließband', 'Couch: Gestell, Polsterung, Bezug'],
              ['Baustellenfertigung', 'alles wird zum Einsatzort gebracht', 'Tunnelbau'],
            ],
          },
          { type: 'merke', text: 'Fertigungsart = WIE VIELE gleiche Produkte. Organisationstyp = WIE die Arbeitsstationen angeordnet sind.' },
        ],
      },
      {
        titel: 'Produktionscontrolling & Qualität',
        blocks: [
          {
            type: 'begriff',
            term: 'Produktionscontrolling',
            erklaerung: 'Eigener Prozess parallel zur Produktion: analysiert Abweichungen und Optimierungspotenzial (Budgets, Soll-Ist-Vergleiche, Kapazitäts- und Engpasskontrollen).',
          },
          {
            type: 'zyklus',
            mitte: 'Regelkreis',
            schritte: ['Ziele planen', 'Soll-Vorgabe', 'Soll-Ist-Vergleich', 'Problemanalyse', 'Korrekturmaßnahmen', 'Überprüfung'],
          },
          {
            type: 'begriff',
            term: 'Qualitätsmanagement',
            erklaerung: 'Kundenorientierung im Mittelpunkt: Qualität wird systematisch überwacht, analysiert und verbessert.',
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'Kundenwünsche', wert: 'Kundenorientierte Qualität' },
              { titel: 'Basis für', wert: 'Technische Qualität' },
              { titel: 'beides erfüllt', wert: 'Gutes Produkt' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Qualitätsbereich', 'Bedeutung'],
            zeilen: [
              ['Produkt- und Servicequalität', 'Qualität des Endprodukts/der Dienstleistung'],
              ['Prozessqualität', 'fehlerfreie, kostengünstige Herstellung'],
              ['Systemqualität', 'Qualität des Managementsystems (z. B. ISO 9001)'],
            ],
          },
          {
            type: 'ablauf',
            titel: 'Stufen des Qualitätsmanagements (seit 1950)',
            schritte: [
              { titel: 'Qualitätskontrolle', text: 'Stichproben der fertigen Produkte, Fehlerhaftes aussortieren' },
              { titel: 'Qualitätssicherung', text: 'Produktionsprozess überwachen, Fehler schon während der Herstellung erkennen' },
              { titel: 'Umfassendes Qualitätsmanagement', text: 'an Kundenbedürfnissen orientiert, alle Prozesse auf Qualität ausgerichtet' },
              { titel: 'Business Excellence', text: 'beste Unternehmensführung für alle Stakeholder, ständige Verbesserung' },
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Prozess',
        punkte: [
          'Produktinnovation → Absatzplanung → Produktionsprogrammplanung → Materialbedarfsplanung → zeitliche Planung → Durchführung',
          'Innovation: Produktvorschlag → Entwicklung → Vorbereitung; Technology-Push ↔ Market-Pull',
          'Erzeugnisstruktur (Produkt → BG → ET), Stückliste',
          'Auftragsproduktion (make to order) ↔ Vorratsproduktion (make to stock); Deckungsbeitrag = Erlöse − variable Kosten',
          'Nettobedarf = Stückliste · Menge − Lagerbestand',
        ],
      },
      {
        titel: 'Zeit & Durchführung',
        punkte: [
          'Durchlaufzeit = Rüst- + Bearbeitungs- + Liege- + Transportzeit',
          'Vorwärts- (frühester Endtermin) ↔ Rückwärtsterminierung (spätester Start)',
          'Kapazitätsterminierung: Auslastung = Nachfrage · 100 / Angebot; Anpassung zeitlich, quantitativ, intensitätsmäßig',
          'Fertigungsarten: Einzel-, Serien-, Massenfertigung',
          'Organisationstypen: Werkstatt-, Fließband-, Gruppen-, Baustellenfertigung',
        ],
      },
      {
        titel: 'Controlling & Qualität',
        punkte: [
          'Produktionscontrolling: Regelkreis mit Soll-Ist-Vergleich',
          'Qualität: kundenorientiert + technisch; Produkt-/Service-, Prozess-, Systemqualität (ISO 9001)',
          'Stufen: Qualitätskontrolle → Qualitätssicherung → umfassendes QM → Business Excellence',
        ],
      },
    ],
  },
'investition-finanzierung-ueberblick': {
    schritte: [
      {
        titel: 'Finanzplanung',
        blocks: [
          {
            type: 'begriff',
            term: 'Finanzplanung',
            erklaerung: 'Klare Übersicht über den aktuellen und zukünftigen Kapitalbedarf und die Finanzierungsmöglichkeiten. Grundlage, um das Geld effizient zu investieren.',
          },
          {
            type: 'tabelle',
            spalten: ['Managementebene', 'Finanzplanung'],
            zeilen: [
              ['Normativ', 'langfristige finanzielle Ziele festlegen'],
              ['Strategisch', 'Budgetplanung, Investitionsprojekte bewerten (z. B. neue Technologie zur CO₂-Reduktion)'],
              ['Operativ', 'laufende Kostenkontrolle, Liquidität für Gehälter und Rechnungen sichern'],
            ],
          },
          {
            type: 'begriff',
            term: 'Liquidität',
            erklaerung: 'Fähigkeit des Unternehmens, seine Zahlungen fristgerecht zu erfüllen.',
          },
        ],
      },
      {
        titel: 'Investition & Finanzierung in der Bilanz',
        blocks: [
          {
            type: 'vergleich',
            links: {
              titel: 'Aktiva = Vermögen',
              punkte: ['Anlagevermögen: immaterielle Güter, Sachanlagen, Finanzanlagen', 'Umlaufvermögen: Vorräte, Forderungen, Kassa, Bankguthaben', '→ Mittelverwendung = INVESTITION'],
            },
            rechts: {
              titel: 'Passiva = Kapital',
              punkte: ['Eigenkapital: Einlagen, Gewinn, Rücklagen', 'Fremdkapital: Rückstellungen, Kredite, Verbindlichkeiten', '→ Mittelherkunft = FINANZIERUNG'],
            },
          },
          { type: 'merke', text: 'Gesamtvermögen = Gesamtkapital. Investition = WOFÜR wird das Geld verwendet (Aktiva). Finanzierung = WOHER kommt das Geld (Passiva).' },
          {
            type: 'kette',
            glieder: [
              { titel: 'Woher? (Passiva)', wert: 'Finanzierung' },
              { titel: 'ermöglicht', wert: '→' },
              { titel: 'Wofür? (Aktiva)', wert: 'Investition' },
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Überblick',
        punkte: [
          'Finanzplanung = Übersicht über Kapitalbedarf und Finanzierungsmöglichkeiten; auf allen Managementebenen',
          'Liquidität = Zahlungsfähigkeit',
          'Bilanz: Aktiva (Vermögen = Mittelverwendung = Investition) ↔ Passiva (Kapital = Mittelherkunft = Finanzierung)',
          'Anlagevermögen (langfristig) + Umlaufvermögen (kurzfristig) = Eigenkapital + Fremdkapital',
        ],
      },
    ],
  },
'investitionsmanagement': {
    schritte: [
      {
        titel: 'Investitionsarten',
        blocks: [
          {
            type: 'begriff',
            term: 'Investition',
            erklaerung: 'Verwendung von finanziellen Mitteln zur Beschaffung von Vermögen. Fehlentscheidungen können bis zur Insolvenz (Zahlungsunfähigkeit) führen.',
          },
          {
            type: 'vergleich',
            frage: 'Arten von Investitionen:',
            links: { titel: 'Nach dem Investitionsgut', punkte: ['Sachinvestition: physisch (Maschine)', 'Finanzinvestition: Wertpapiere', 'Immaterielle Investition: Patente'] },
            rechts: { titel: 'Nach dem Investitionsanlass', punkte: ['Neuinvestition: Gründung/erstmalig', 'Ersatzinvestition: gleichartiger Ersatz', 'Rationalisierungsinvestition: effizienter', 'Erweiterungsinvestition: mehr Kapazität'] },
          },
        ],
      },
      {
        titel: 'Investitionsprozess',
        blocks: [
          {
            type: 'begriff',
            term: 'Investitionsmanagement',
            erklaerung: 'Systematische Planung, Entscheidung, Durchführung und Kontrolle von Investitionen.',
          },
          {
            type: 'ablauf',
            titel: 'Investitionsprozess (Beispiel neuer Herd im Hotel)',
            schritte: [
              { titel: 'Investitionsplanung', text: 'Bedarf melden, Entscheidungskriterien festlegen, Angebote einholen' },
              { titel: 'Investitionsentscheidung', text: 'Investitionen bewerten, Finanzierung prüfen, Kaufentscheidung' },
              { titel: 'Durchführung', text: 'Bestellung, Bezahlung' },
              { titel: 'Kontrolle', text: 'Ziele erreicht? Korrekturen, Erfahrungswerte für die Zukunft' },
            ],
          },
          {
            type: 'vergleich',
            frage: 'Entscheidungskriterien:',
            links: { titel: 'Quantitativ (Hard Facts)', punkte: ['Zahlenmäßig erfassbar', 'Kosten, Umsatz, Gewinn, Kapitaleinsatz, Rentabilität, Rückflussdauer'] },
            rechts: { titel: 'Qualitativ (Soft Facts)', punkte: ['Nicht zahlenmäßig erfassbar', 'Umweltfreundlichkeit, Qualität, Zuverlässigkeit, Service, Arbeitsschutz'] },
          },
        ],
      },
      {
        titel: 'Instrumente im Überblick',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Statisches Verfahren', 'Frage', 'Entscheidung für …'],
            zeilen: [
              ['Kostenvergleichsrechnung', 'Welche Investition verursacht die geringsten Kosten?', 'geringste Kosten'],
              ['Gewinnvergleichsrechnung', 'Welche erzielt den höchsten Gewinn?', 'höchster Gewinn'],
              ['Rentabilitätsvergleichsrechnung', 'Welche hat die höchste Verzinsung des Kapitals?', 'höchste Rentabilität'],
              ['Amortisationsrechnung', 'Wo fließt das Kapital am schnellsten zurück?', 'kürzeste Amortisationsdauer'],
            ],
          },
          { type: 'merke', text: 'Statische Verfahren = nur quantitative Kriterien, rechnen mit Durchschnittswerten EINER Periode. Scoring-Methode = auch qualitative Kriterien.' },
        ],
      },
      {
        titel: 'Kostenvergleichsrechnung',
        blocks: [
          {
            type: 'begriff',
            term: 'Kostenvergleichsrechnung',
            erklaerung: 'Vergleicht die durchschnittlichen Kosten pro Periode. Die Alternative mit den geringsten Kosten wird gewählt.',
          },
          {
            type: 'tabelle',
            spalten: ['Gesamtkosten', 'bestehen aus'],
            zeilen: [
              ['Laufende Betriebskosten', 'variabel (z. B. Treibstoff) + fix (Versicherung, Wartung)'],
              ['+ Kapitalkosten', 'kalkulatorische Zinsen + kalkulatorische Abschreibung'],
              ['= Gesamtkosten', 'Vergleichsbasis bei gleicher Ausbringungsmenge'],
            ],
          },
          {
            type: 'formel',
            name: 'Kalk. Zinsen',
            zaehler: '(Anschaffungskosten + Restwert)',
            nenner: '2',
            faktor: '· Zinssatz',
          },
          {
            type: 'formel',
            name: 'Kalk. Abschreibung',
            zaehler: 'Anschaffungskosten − Restwert',
            nenner: 'Nutzungsdauer',
          },
          {
            type: 'formel',
            name: 'Stückkosten',
            zaehler: 'Gesamtkosten',
            nenner: 'Ausbringungsmenge',
            beispiel: 'bei ungleichen Ausbringungsmengen vergleichen',
          },
          {
            type: 'formel',
            name: 'Kritische Menge',
            zaehler: 'Differenz der Fixkosten pro Periode',
            nenner: 'Differenz der variablen Kosten pro Einheit',
            beispiel: '(292.500 − 221.000) / (150 − 110) = 1.787,5 Stunden',
          },
          { type: 'merke', text: 'Kritische Menge (bei unbekannter Auslastung): darüber lohnt sich die Alternative mit den niedrigeren variablen Kosten, darunter die mit den niedrigeren Fixkosten. Restwert = Wert am Ende der Nutzungsdauer.' },
        ],
      },
      {
        titel: 'Gewinn- & Rentabilitätsvergleich',
        blocks: [
          {
            type: 'begriff',
            term: 'Gewinnvergleichsrechnung',
            erklaerung: 'Erweitert die Kostenvergleichsrechnung um die Erlöse. Für Investitionen mit unterschiedlicher Kapazität oder Qualität. Höchster Gewinn gewinnt.',
          },
          {
            type: 'formel',
            name: 'Gewinn',
            zaehler: 'Erlöse − Gesamtkosten',
            nenner: '1',
          },
          {
            type: 'begriff',
            term: 'Rentabilitätsvergleichsrechnung',
            erklaerung: 'Erweitert die Gewinnvergleichsrechnung um das eingesetzte Kapital. Höchste Rentabilität (Verzinsung des Kapitals) gewinnt.',
          },
          {
            type: 'formel',
            name: 'Rentabilität',
            zaehler: '(Gewinn + kalk. Zinsen) · 100',
            nenner: 'Ø Kapitaleinsatz',
            beispiel: 'Ø Kapitaleinsatz = (Anschaffungskosten + Restwert) / 2',
          },
          {
            type: 'formel',
            name: 'Rentabilität (ohne Gewinn)',
            zaehler: 'Kosteneinsparungen · 100',
            nenner: 'Ø Kapitaleinsatz',
          },
        ],
      },
      {
        titel: 'Amortisationsrechnung',
        blocks: [
          {
            type: 'begriff',
            term: 'Amortisationsrechnung',
            erklaerung: 'In welchem Zeitraum fließt das eingesetzte Kapital durch Gewinne oder Einsparungen zurück? Je kürzer, desto geringer das Risiko.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Durchschnittsmethode', punkte: ['Jährlicher Rückfluss gleich hoch'] },
            rechts: { titel: 'Kumulationsmethode', punkte: ['Jährliche Rückflüsse verschieden', 'Rückflüsse werden addiert, bis sie die Kosten decken'] },
          },
          {
            type: 'formel',
            name: 'Amortisationsdauer',
            zaehler: 'Anschaffungskosten − Restwert',
            nenner: 'jährl. Gewinn + kalk. Abschreibung',
            beispiel: '250.000 / (75.000 + 25.000) = 2,5 Jahre',
          },
          {
            type: 'formel',
            name: 'Amortisationsdauer (Einsparung)',
            zaehler: 'Anschaffungskosten − Restwert',
            nenner: 'jährliche Kosteneinsparung',
          },
          { type: 'merke', text: 'Die Amortisationsdauer sollte innerhalb der Nutzungsdauer liegen. Sie sagt aber nichts über den langfristigen Gewinn aus.' },
        ],
      },
      {
        titel: 'Grenzen & Scoring-Methode',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Grenze der statischen Verfahren', 'Aufgehoben durch'],
            zeilen: [
              ['Nur eine Periode betrachtet', 'dynamische Verfahren (mehrere Perioden)'],
              ['Gleiche Kosten und Erlöse unterstellt', 'dynamische Verfahren (Auf-/Abzinsung)'],
              ['Geringe Aussagekraft', 'dynamische Verfahren'],
              ['Nur Hard Facts', 'Scoring-Methode (auch Soft Facts)'],
            ],
          },
          {
            type: 'begriff',
            term: 'Zeitwert des Geldes',
            erklaerung: 'Ein Geldbetrag heute ist mehr wert als derselbe Betrag in der Zukunft (Inflation).',
          },
          {
            type: 'ablauf',
            titel: 'Scoring-Methode (Nutzwertanalyse)',
            schritte: [
              { titel: 'Kriterien festlegen', text: 'quantitativ UND qualitativ' },
              { titel: 'Kriterien gewichten', text: 'zusammen 100 %' },
              { titel: 'Alternativen mit Punkten bewerten' },
              { titel: 'Punkte × Gewichtung, addieren' },
              { titel: 'Höchster Nutzwert gewinnt' },
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Grundlagen',
        punkte: [
          'Investitionsgut: Sach-, Finanz-, immaterielle Investition',
          'Anlass: Neu-, Ersatz-, Rationalisierungs-, Erweiterungsinvestition',
          'Prozess: Planung → Entscheidung → Durchführung → Kontrolle',
          'Kriterien: quantitativ (Hard Facts) ↔ qualitativ (Soft Facts)',
        ],
      },
      {
        titel: 'Statische Verfahren',
        punkte: [
          'Kostenvergleich: geringste Kosten; Gesamtkosten = Betriebskosten + kalk. Zinsen + kalk. Abschreibung',
          'Kalk. Zinsen = (AK + RW) / 2 · Zinssatz · Kalk. AfA = (AK − RW) / Nutzungsdauer',
          'Kritische Menge = Δ Fixkosten / Δ variable Kosten',
          'Gewinnvergleich: Gewinn = Erlöse − Gesamtkosten',
          'Rentabilität = (Gewinn + kalk. Zinsen) · 100 / Ø Kapitaleinsatz',
          'Amortisationsdauer = (AK − RW) / (Gewinn + kalk. AfA); Durchschnitts- ↔ Kumulationsmethode',
        ],
      },
      {
        titel: 'Grenzen',
        punkte: [
          'Statisch: 1 Periode, konstante Werte, kein Zeitwert des Geldes, nur Hard Facts',
          'Lösung: dynamische Verfahren + Scoring-Methode (gewichtete Punkte)',
        ],
      },
    ],
  },
'finanzmanagement': {
    schritte: [
      {
        titel: 'Finanzierungsziele & Aufgaben',
        blocks: [
          {
            type: 'begriff',
            term: 'Finanzierung',
            erklaerung: 'Planung und Bereitstellung von Kapital, das man braucht, um die Geschäftstätigkeit zu starten, aufrechtzuerhalten und auszubauen.',
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'Welche Investition?', wert: 'Investitionsmanagement' },
              { titel: 'gehören zusammen wie Puzzleteile', wert: '+' },
              { titel: 'Wie bezahlen?', wert: 'Finanzmanagement' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Finanzierungsziel', 'Bedeutung'],
            zeilen: [
              ['Liquidität', 'Zahlungen termingerecht und uneingeschränkt leisten können'],
              ['Rentabilität', 'wie hoch sich das eingesetzte Kapital verzinst'],
              ['Unabhängigkeit', 'durch hohen Eigenkapitalanteil; Investoren wollen sonst mitreden'],
            ],
          },
          {
            type: 'formel',
            name: 'Rentabilität',
            zaehler: 'Gewinn',
            nenner: 'Kapitaleinsatz',
            faktor: '· 100',
          },
          { type: 'merke', text: 'Zielkonflikt Liquidität ↔ Rentabilität: Wird viel Geld investiert (Rendite ↑), fehlt es eventuell für Rechnungen (Liquidität ↓) – und umgekehrt.' },
          {
            type: 'tabelle',
            spalten: ['Aufgaben des Finanzmanagements'],
            zeilen: [
              ['Laufenden Finanzierungsbedarf ermitteln (Finanzplanung)'],
              ['Über die Art der Finanzierung entscheiden'],
              ['Finanzwirtschaftliche Analyse mit Kennzahlen'],
              ['Finanzierung durchführen (Zahlungen, Kapitalaufnahme, Rechnungen)'],
            ],
          },
        ],
      },
      {
        titel: 'Finanzierungsarten im Überblick',
        blocks: [
          { type: 'text', text: 'Finanzierungsarten werden nach 2 Kriterien eingeteilt:' },
          {
            type: 'vergleich',
            links: { titel: 'Herkunft des Kapitals', punkte: ['Innenfinanzierung: aus der eigenen betrieblichen Tätigkeit', 'Außenfinanzierung: von externen Geldgebern'] },
            rechts: { titel: 'Rechtsstellung des Kapitalgebers', punkte: ['Eigenfinanzierung: Eigenkapital (Eigentümer)', 'Fremdfinanzierung: Fremdkapital (Gläubiger)'] },
          },
          {
            type: 'tabelle',
            spalten: ['', 'Innenfinanzierung', 'Außenfinanzierung'],
            zeilen: [
              ['Eigenfinanzierung', 'Selbstfinanzierung', 'Einlagen-/Beteiligungsfinanzierung, sonstige Beteiligungsformen, Subventionen'],
              ['Mischform', 'Umschichtungsfinanzierung', 'Mezzaninkapital'],
              ['Fremdfinanzierung', 'Rückstellungsfinanzierung', 'Kreditfinanzierung, Anleihen'],
            ],
          },
          { type: 'merke', text: 'Diese Tabelle ist das Herzstück des Kapitels – jede Finanzierungsart hat genau einen Platz darin!' },
        ],
      },
      {
        titel: 'Eigenfinanzierung',
        blocks: [
          {
            type: 'begriff',
            term: 'Eigenfinanzierung',
            erklaerung: 'Das Unternehmen erhält zusätzliches Eigenkapital – aus einbehaltenen Gewinnen (innen) oder von Eigentümern/Gesellschaftern (außen).',
          },
          {
            type: 'vergleich',
            links: { titel: 'Vorteile hohes Eigenkapital', punkte: ['Unabhängigkeit', 'Keine Zinsen', 'Verluste leichter abgedeckt (weniger Insolvenzgefahr)', 'Bessere Bonität (Kreditwürdigkeit)'] },
            rechts: { titel: 'Eigenkapitalgeber …', punkte: ['sind direkt beteiligt', 'haben Informationsrecht', 'haben Einfluss auf die Geschäftsführung', 'sind am Gewinn beteiligt', 'tragen das Risiko mit'] },
          },
          { type: 'merke', text: 'Richtwert: Eigenkapitalquote mindestens 20 %.' },
          {
            type: 'vergleich',
            frage: 'Selbstfinanzierung (aus eigener Kraft):',
            links: { titel: 'Offene Selbstfinanzierung', punkte: ['Gewinne werden nicht ausgeschüttet, bleiben im Unternehmen', 'Kapitalkonto bzw. Rücklagen'] },
            rechts: { titel: 'Stille Selbstfinanzierung', punkte: ['Stille Reserven durch Bilanzierungsregeln (Aktiva zu niedrig, Passiva zu hoch bewertet)', 'Erst beim Auflösen entsteht Gewinn'] },
          },
          {
            type: 'begriff',
            term: 'Einlagen- und Beteiligungsfinanzierung',
            erklaerung: 'Kapital von außen, aber Eigenkapital der Eigentümer. Einlagen: Einzelunternehmer. Beteiligung: OG, KG, GesbR, GmbH, AG (Aktien), Genossenschaft.',
          },
          {
            type: 'tabelle',
            spalten: ['Sonstige Beteiligungsform', 'Bedeutung'],
            zeilen: [
              ['Venture-Capital (Wagniskapital)', 'Finanzierungsgesellschaft gibt jungen Unternehmen Eigenkapital (meist ab 200.000 €) gegen Anteile und Mitsprache'],
              ['Business Angels', 'erfahrene Privatpersonen: Kapital (ca. 50.000–150.000 €) + Know-how + Kontakte'],
              ['Crowdfunding', 'viele Privatpersonen (Crowd) zahlen kleine Beträge über Plattformen'],
              ['Going Public (IPO)', 'Umwandlung in AG und erstmaliger Börsengang'],
              ['Mitarbeiterbeteiligung', 'Mitarbeiter erhalten Anteile (z. B. FlexKapG-Unternehmenswert-Anteile)'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Crowdfunding-Modell', 'Gegenleistung'],
            zeilen: [
              ['Donation based', 'keine – Geld für eine gute Tat'],
              ['Reward based', 'Belohnung (z. B. das Produkt)'],
              ['Lending based', 'Zinsen + Rückzahlung (zählt als Fremdkapital!)'],
              ['Equity based (Crowdinvesting)', 'Beteiligung am Unternehmen und Gewinn'],
            ],
          },
          {
            type: 'begriff',
            term: 'Subventionen (Förderungen)',
            erklaerung: '„Geschenktes Geld“ von Bund, Ländern, Gemeinden, EU oder WKO: Zuschüsse, günstige Kredite, Haftungsübernahmen, Gebührenbefreiungen, geförderte Beratung. Decken nie den ganzen Bedarf.',
          },
        ],
      },
      {
        titel: 'Umschichtungsfinanzierung',
        blocks: [
          {
            type: 'begriff',
            term: 'Umschichtungsfinanzierung',
            erklaerung: 'Mischung aus Eigen- und Fremdfinanzierung: Geld, das im Betrieb gebunden ist, wird freigesetzt.',
          },
          {
            type: 'tabelle',
            spalten: ['Art', 'So funktioniert es', 'Beispiel'],
            zeilen: [
              ['Rationalisierung', 'Abläufe optimieren, eingespartes Kapital nutzen', 'Lager reduzieren durch Just-in-time'],
              ['Abschreibungen', 'Abschreibung im Verkaufspreis eingerechnet → fließt zurück, bis zur Ersatzbeschaffung nutzbar', 'Maschine 100.000 € / 10 Jahre = 10.000 € pro Jahr'],
              ['Verkauf von Vermögen', 'nicht benötigtes Vermögen verkaufen', 'ungenutztes Grundstück verkaufen'],
            ],
          },
        ],
      },
      {
        titel: 'Fremdfinanzierung & Kredite',
        blocks: [
          {
            type: 'begriff',
            term: 'Fremdkapital – Merkmale',
            erklaerung: 'Nur befristet · Zinsen · Gläubiger haben kein Mitspracherecht und keinen Anteil am Vermögenszuwachs · Gläubiger werden im Konkurs ZUERST bezahlt.',
          },
          {
            type: 'begriff',
            term: 'Rückstellungsfinanzierung (innen)',
            erklaerung: 'Rückstellungen für drohende Aufwände (unklar, wann und wie hoch – z. B. Prozesse, Garantien, Pensionen). Das Geld steht bis zur Inanspruchnahme zur Verfügung.',
          },
          {
            type: 'begriff',
            term: 'Kredit',
            erklaerung: 'Kreditnehmer (Schuldner) leiht sich beim Kreditgeber (Gläubiger) für einen bestimmten Zeitraum Geld. Rückzahlung + Zinsen.',
          },
          {
            type: 'tabelle',
            spalten: ['Unterscheidung nach …', 'Möglichkeiten'],
            zeilen: [
              ['Kreditgeber', 'Privatpersonen, Banken, öffentliche Hand, Unternehmen (Lieferanten)'],
              ['Leistung', 'Geld, Waren, Haftung'],
              ['Laufzeit', 'kurzfristig (≤ 1 Jahr), mittelfristig (1–5), langfristig (> 5)'],
              ['Verwendungszweck', 'Anlagevermögen, Umlaufvermögen, Zwischenfinanzierung, Konsum'],
              ['Kreditbesicherung', 'Personal-, Realsicherheit, Kreditversicherung'],
            ],
          },
        ],
      },
      {
        titel: 'Kreditsicherheiten & Kreditprüfung',
        blocks: [
          {
            type: 'begriff',
            term: 'Bürgschaft (Personalsicherheit)',
            erklaerung: 'Eine dritte Person (Bürge) haftet mit ihrem Privatvermögen für den Kredit.',
          },
          {
            type: 'tabelle',
            spalten: ['Art der Bürgschaft', 'Bürge haftet …'],
            zeilen: [
              ['Ausfallbürgschaft', 'nur für den Rest nach allen rechtlichen Schritten (z. B. Exekution) – eingeschränkt'],
              ['Gewöhnliche Bürgschaft', 'wenn Mahnungen beim Hauptschuldner erfolglos sind'],
              ['Solidarische Bürgschaft', 'als „Bürge und Zahler“ – Gläubiger kann sofort wählen – weitreichend'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Realsicherheit', 'Bedeutung'],
            zeilen: [
              ['Eigentumsvorbehalt', 'Ware gehört bis zur vollständigen Zahlung dem Verkäufer'],
              ['Forderungsabtretung (Zession)', 'Kundenforderungen werden an den Kreditgeber abgetreten (offen oder still)'],
              ['Pfandrecht', 'Lombard (bewegliche Güter: Gold, Wertpapiere) · Hypothek (Grundstücke, im Grundbuch)'],
            ],
          },
          {
            type: 'ablauf',
            titel: 'Ablauf von Kreditgeschäften',
            schritte: [
              { titel: 'Kreditantrag', text: 'mit Unterlagen (Kontoauszüge, Gehalt / Bilanzen, Finanzpläne, Firmenbuchauszug)' },
              { titel: 'Kreditprüfung', text: 'Bonität mittels Rating: Hard Facts (Einkommen, Vermögen) + Soft Facts (Zahlungsverhalten, Management)' },
              { titel: 'Kreditvertrag', text: 'Vertrag + Sicherstellungsurkunden unterzeichnen' },
              { titel: 'Kreditüberwachung', text: 'Konten, Umsätze, Bilanzen beobachten (Frühwarnsystem)' },
            ],
          },
          { type: 'merke', text: 'Je besser die Bonität, desto günstiger der Kredit. Beste Note: AAA (Triple A), schlechteste: D (Zahlungsausfall).' },
        ],
      },
      {
        titel: 'Kreditarten',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Kreditart', 'Merkmal'],
            zeilen: [
              ['Kontokorrentkredit', 'kurzfristiger Kreditrahmen am Girokonto, rollierend nutzbar; teuer (Sollzinsen, Überziehungsprovision)'],
              ['Darlehen', 'langfristiger Geldbetrag, nur EINMAL in Anspruch genommen; günstiger'],
              ['Haftungskredit (Avalkredit)', 'Bank übernimmt Haftung (Anzahlungs-, Haftrücklassgarantie); Provision 1–3 %'],
              ['Lieferantenkredit', 'Kunde zahlt erst später innerhalb des Zahlungsziels; Kosten = nicht genutzter Skonto'],
              ['Kundenkredit', 'Kunde leistet Vorauszahlung/Anzahlung vor der Leistung'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Darlehen nach Rückzahlung', 'Bedeutung'],
            zeilen: [
              ['Endfälliges Darlehen', 'nur Zinsen, Rückzahlung am Ende'],
              ['Ratendarlehen', 'konstanter Tilgungsanteil, sinkende Zinsen → Rate sinkt'],
              ['Annuitätendarlehen', 'gleichbleibende Rate (Annuität = Zins + Tilgung)'],
            ],
          },
          {
            type: 'formel',
            name: 'Jahreszinssatz Skonto',
            zaehler: 'Skonto in %',
            nenner: 'Zahlungsziel − Kassafrist',
            faktor: '· 360',
            beispiel: '3 / (30 − 8) · 360 = 49,09 % p. a. → Skonto immer nutzen!',
          },
          {
            type: 'formel',
            name: 'Zinsen',
            zaehler: 'Kapital · Zinssatz · Tage',
            nenner: '36 000',
          },
        ],
      },
      {
        titel: 'Factoring, Leasing, Anleihen, Mezzanin',
        blocks: [
          {
            type: 'begriff',
            term: 'Factoring',
            erklaerung: 'Ein Unternehmen VERKAUFT seine Kundenforderungen vor Fälligkeit an eine Factorbank → Geld früher (minus 0,2–1,5 % Gebühr). Offen (Kunde weiß es) oder still.',
          },
          {
            type: 'begriff',
            term: 'Leasing',
            erklaerung: 'Mittel- oder langfristige Vermietung von Sachgütern durch den Eigentümer (Leasinggeber). Der Leasingnehmer wird NICHT Eigentümer.',
          },
          {
            type: 'ablauf',
            titel: 'Ablauf des Leasings',
            schritte: [
              { titel: 'Leasingnehmer einigt sich mit Händler über das Objekt' },
              { titel: 'Kaufvertrag Händler ↔ Leasinggeber, Leasingvertrag Leasinggeber ↔ Leasingnehmer' },
              { titel: 'Händler übergibt Objekt an Leasingnehmer' },
              { titel: 'Leasinggeber zahlt den Kaufpreis an den Händler' },
              { titel: 'Leasingnehmer zahlt laufend Leasingraten' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Leasingart', 'Bedeutung'],
            zeilen: [
              ['Operating-Leasing', 'wie Mietvertrag, Leasinggeber wartet'],
              ['Finance-Leasing', 'wie Kreditfinanzierung, oft Kaufoption am Ende'],
              ['Sale and Lease Back', 'eigenes Gut verkaufen und zurückleasen → Liquidität'],
            ],
          },
          {
            type: 'begriff',
            term: 'Anleihen',
            erklaerung: 'Festverzinsliche Wertpapiere: Unternehmen nimmt langfristiges Fremdkapital von vielen Anlegern auf. Feste Laufzeit und Verzinsung; teuer, daher meist große Unternehmen.',
          },
          {
            type: 'begriff',
            term: 'Mezzaninkapital',
            erklaerung: 'Mischung aus Eigen- und Fremdkapital („Zwischengeschoss“): keine Sicherheiten, langfristig (≥ 5 Jahre), gewinnabhängige Verzinsung, kein Mitspracherecht, im Konkurs nachrangig.',
            beispiel: 'Nachrangdarlehen, stille Beteiligung, Gewinnschuldverschreibung',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Ziele & Arten',
        punkte: [
          'Finanzierungsziele: Liquidität, Rentabilität, Unabhängigkeit (Zielkonflikt Liquidität ↔ Rentabilität)',
          'Innen- ↔ Außenfinanzierung (Herkunft) · Eigen- ↔ Fremdfinanzierung (Rechtsstellung)',
          'Innen + Eigen: Selbstfinanzierung · Außen + Eigen: Einlagen/Beteiligung, Venture-Capital, Business Angels, Crowdfunding, Going Public, Subventionen',
          'Mischformen: Umschichtungsfinanzierung (innen), Mezzaninkapital (außen)',
          'Innen + Fremd: Rückstellungen · Außen + Fremd: Kredite, Anleihen',
        ],
      },
      {
        titel: 'Eigenfinanzierung',
        punkte: [
          'Selbstfinanzierung offen (einbehaltene Gewinne) ↔ still (stille Reserven)',
          'Crowdfunding: Donation, Reward, Lending (Fremdkapital!), Equity',
          'Umschichtung: Rationalisierung, Abschreibungen, Vermögensverkauf',
          'Eigenkapitalquote ≥ 20 %',
        ],
      },
      {
        titel: 'Fremdfinanzierung',
        punkte: [
          'Kreditsicherheiten: Bürgschaft (Ausfall-, gewöhnliche, solidarische) · Eigentumsvorbehalt, Zession, Pfandrecht (Lombard, Hypothek) · Kreditversicherung',
          'Kreditablauf: Antrag → Prüfung (Rating, Hard/Soft Facts) → Vertrag → Überwachung',
          'Kontokorrentkredit, Darlehen (endfällig, Raten, Annuität), Haftungs-, Lieferanten-, Kundenkredit',
          'Skonto-Jahreszins = Skonto% / (Ziel − Kassafrist) · 360',
          'Factoring (Forderungen verkaufen), Leasing (mieten, Operating/Finance, Sale and Lease Back), Anleihen',
        ],
      },
    ],
  },
'finanzplan-analyse': {
    schritte: [
      {
        titel: 'Der Finanzplan',
        blocks: [
          {
            type: 'begriff',
            term: 'Finanzplan',
            erklaerung: 'Übersicht über die geplanten Ein- und Auszahlungen und den daraus entstehenden Cashflow. Sichert die Liquidität und zeigt Finanzprobleme früh.',
          },
          { type: 'merke', text: 'Liquide bleibt ein Unternehmen nur, wenn langfristig die Summe der Einzahlungen GRÖSSER ist als die Summe der Auszahlungen.' },
          {
            type: 'begriff',
            term: 'Cashflow',
            erklaerung: 'Erwirtschafteter Zahlungsmittelüberschuss eines Unternehmens in einem bestimmten Zeitraum.',
          },
          {
            type: 'text',
            text: 'Grundlage sind die Teilplanungen (Umsatz-, Material-, Produktions-, Personalplanung) sowie Investitions- und Finanzierungsplanung.',
          },
          {
            type: 'tabelle',
            spalten: ['Aufbau des Finanzplans'],
            zeilen: [
              ['1. Zahlungsmittelanfangsbestand (Kassa + Bank)'],
              ['2. + geplante Einzahlungen (Umsätze, Anlagenverkäufe, Kredite, Eigenkapital)'],
              ['3. − geplante Auszahlungen (Gehälter, Material, Energie, Steuern, Investitionen, Rückzahlungen)'],
              ['4. = Überschuss / Fehlbetrag (Cashflow)'],
              ['5. Ausgleichsmaßnahmen'],
              ['6. = Zahlungsmittelendbestand → Anfangsbestand des nächsten Monats'],
            ],
          },
          { type: 'merke', text: 'Ein- und Auszahlungen ≠ Erträge und Aufwände! Abschreibungen sind z. B. Aufwand, aber keine Auszahlung.' },
        ],
      },
      {
        titel: 'Ausgleichsmaßnahmen',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Bei Zahlungsmittelüberschuss', punkte: ['Rentable Investitionen, Kreditrückzahlungen vorziehen', 'Rücklagen bilden', 'Privatentnahmen/Gewinnausschüttung erhöhen', 'Kurzfristig rentabel anlegen', 'Mehr Skonto nutzen'] },
            rechts: { titel: 'Bei Zahlungsmittelfehlbetrag', punkte: ['Investitionen verschieben', 'Einlagen/Beteiligungen erhöhen', 'Bankkredit aufnehmen (z. B. Kontokorrent)', 'Nicht benötigtes Vermögen verkaufen', 'Kundenkredite (Anzahlungen)', 'Längere Zahlungsziele bei Lieferanten'] },
          },
          {
            type: 'vergleich',
            frage: 'Planungszeitraum:',
            links: { titel: 'Kurzfristige Finanzpläne', punkte: ['bis zu 1 Jahr (Monate, Quartale)', 'Basis zur Sicherung der Liquidität'] },
            rechts: { titel: 'Langfristige Finanzpläne', punkte: ['2–6 Jahre', 'Kreditwürdigkeit, Kapitalstruktur, große Investitionen'] },
          },
          { type: 'merke', text: 'Liquiditätsreserve: 2–3 durchschnittliche Monatsauszahlungen. Laufend Soll-Werte mit Ist-Werten vergleichen!' },
        ],
      },
      {
        titel: 'Vermögens- & Kapitalstruktur',
        blocks: [
          {
            type: 'begriff',
            term: 'Kennzahlen',
            erklaerung: 'Geben Auskunft über die wirtschaftliche und finanzielle Stabilität – ein Frühwarnsystem. Basis: Bilanz und GuV.',
          },
          {
            type: 'formel',
            name: 'Anlagenintensität',
            zaehler: 'Anlagevermögen · 100',
            nenner: 'Gesamtvermögen',
          },
          {
            type: 'formel',
            name: 'Umlaufintensität',
            zaehler: 'Umlaufvermögen · 100',
            nenner: 'Gesamtvermögen',
          },
          { type: 'merke', text: 'Anlage- + Umlaufintensität = 100 %. Anlagenintensiv: Industrie, Energie. Umlaufintensiv: Handel, Gastronomie.' },
          {
            type: 'formel',
            name: 'Eigenkapitalquote',
            zaehler: 'Eigenkapital · 100',
            nenner: 'Gesamtkapital',
            beispiel: '≥ 20 % ok · ≥ 30 % sehr gut · < 10 % schlecht · negativ = insolvenzgefährdet',
          },
          {
            type: 'formel',
            name: 'Fremdkapitalquote',
            zaehler: 'Fremdkapital · 100',
            nenner: 'Gesamtkapital',
          },
          {
            type: 'formel',
            name: 'Verschuldungskoeffizient',
            zaehler: 'Fremdkapital',
            nenner: 'Eigenkapital',
            beispiel: 'EK : FK = 1 : 2 sehr gut, 1 : 3 gut',
          },
          {
            type: 'formel',
            name: 'Fiktive Schuldentilgungsdauer',
            zaehler: 'Fremdkapital − Zahlungsmittel',
            nenner: 'operativer Cashflow',
            beispiel: '< 3 Jahre sehr gut · < 5 gut · > 15 insolvenzgefährdet',
          },
        ],
      },
      {
        titel: 'Vermögen & Kapital im Verhältnis',
        blocks: [
          { type: 'merke', text: 'Kurzfristig = innerhalb eines Jahres fällig. Langfristiges Vermögen soll mit langfristigem Kapital finanziert werden!' },
          {
            type: 'formel',
            name: 'Anlagendeckung',
            zaehler: '(EK + langfristiges FK) · 100',
            nenner: 'Anlagevermögen',
            beispiel: '≥ 100 % = Goldene Finanzierungsregel erfüllt',
          },
          {
            type: 'formel',
            name: 'Liquidität 1. Grades',
            zaehler: 'Zahlungsmittel · 100',
            nenner: 'kurzfristige Verbindlichkeiten',
            beispiel: 'Ziel 20–50 % (Barliquidität)',
          },
          {
            type: 'formel',
            name: 'Liquidität 2. Grades',
            zaehler: '(Zahlungsmittel + kurzfr. Forderungen) · 100',
            nenner: 'kurzfristige Verbindlichkeiten',
            beispiel: 'Ziel 100–120 %',
          },
          {
            type: 'formel',
            name: 'Liquidität 3. Grades',
            zaehler: '(Zahlungsmittel + kurzfr. Forderungen + Vorräte) · 100',
            nenner: 'kurzfristige Verbindlichkeiten',
            beispiel: 'Ziel 150–200 %',
          },
          {
            type: 'formel',
            name: 'Working Capital',
            zaehler: 'Umlaufvermögen − kurzfristige Verbindlichkeiten',
            nenner: '1',
            beispiel: 'soll positiv sein',
          },
        ],
      },
      {
        titel: 'Erfolgswirtschaftliche Kennzahlen',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Operativer Cashflow (indirekt)'],
            zeilen: [
              ['Jahresüberschuss / Jahresfehlbetrag'],
              ['+ nicht auszahlungswirksame Aufwendungen (z. B. Abschreibungen)'],
              ['− nicht einzahlungswirksame Erträge (z. B. Auflösung von Rückstellungen)'],
              ['= operativer Cashflow'],
            ],
          },
          {
            type: 'formel',
            name: 'Cashflow-Quote',
            zaehler: 'Cashflow · 100',
            nenner: 'Betriebsleistung',
            beispiel: '≥ 5 % anstreben, ≥ 10 % sehr gut',
          },
          {
            type: 'formel',
            name: 'Eigenkapitalrentabilität',
            zaehler: 'Ergebnis vor Steuern · 100',
            nenner: 'Eigenkapital',
            beispiel: 'gut: ab ca. 25 % (Industrie), ab ca. 20 % (Handel)',
          },
          {
            type: 'formel',
            name: 'Gesamtkapitalrentabilität',
            zaehler: '(Ergebnis vor Steuern + FK-Zinsen) · 100',
            nenner: 'Gesamtkapital',
            beispiel: '≥ 8 % anstreben, > 10 % gut, > 15 % sehr gut',
          },
          {
            type: 'tabelle',
            spalten: ['Quicktest', 'Sehr gut', 'Gut', 'Mittel', 'Schlecht', 'Insolvenzgefährdet'],
            zeilen: [
              ['Eigenkapitalquote', '> 30 %', '> 20 %', '> 10 %', '< 10 %', 'negativ'],
              ['Schuldentilgungsdauer', '< 3 J.', '< 5 J.', '< 7 J.', '< 15 J.', '> 15 J.'],
              ['Cashflow-Quote', '> 10 %', '> 8 %', '> 5 %', '< 5 %', 'negativ'],
              ['Gesamtkapitalrentabilität', '> 15 %', '> 10 %', '> 8 %', '< 8 %', 'negativ'],
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Finanzplan',
        punkte: [
          'Anfangsbestand + Einzahlungen − Auszahlungen = Cashflow → Ausgleichsmaßnahmen → Endbestand',
          'Überschuss: investieren, Rücklagen, Kredite tilgen, anlegen · Fehlbetrag: Kredit, Einlagen, Investitionen verschieben, Vermögen verkaufen',
          'Kurzfristig (≤ 1 J., Liquidität) ↔ langfristig (2–6 J., Kapitalstruktur)',
        ],
      },
      {
        titel: 'Kennzahlen',
        punkte: [
          'Anlagen-/Umlaufintensität = AV bzw. UV · 100 / Gesamtvermögen',
          'EK-Quote = EK · 100 / GK (≥ 20 %) · FK-Quote · Verschuldungskoeffizient = FK / EK',
          'Fiktive Schuldentilgungsdauer = (FK − Zahlungsmittel) / operativer Cashflow',
          'Anlagendeckung = (EK + langfr. FK) · 100 / AV ≥ 100 % (Goldene Regel)',
          'Liquidität 1./2./3. Grades: Ziel 20–50 % / 100–120 % / 150–200 %',
          'Working Capital = UV − kurzfr. Verbindlichkeiten',
          'Operativer Cashflow = Jahresüberschuss + Abschreibungen − nicht einzahlungswirksame Erträge',
          'EK-Rentabilität = EGT · 100 / EK · GK-Rentabilität = (EGT + FK-Zinsen) · 100 / GK',
        ],
      },
    ],
  },
'businessplan-3jg': {
    schritte: [
      {
        titel: 'Bedeutung der Finanzplanung',
        blocks: [
          {
            type: 'begriff',
            term: 'Finanzplanung im Businessplan',
            erklaerung: 'Die Überlegungen aus den anderen Businessplan-Teilen werden ZAHLENMÄSSIG dargestellt – realistisch und nachvollziehbar. Zeigt, ob sich die Gründung lohnt.',
          },
          { type: 'merke', text: 'Die Finanzplanung ist neben der Executive Summary der wichtigste Teil des Businessplans – Geldgeber prüfen ihn ganz genau.' },
          {
            type: 'tabelle',
            spalten: ['Geldgeber achten auf …', 'Bedeutung'],
            zeilen: [
              ['Kapitalbedarf', 'wie viel, wofür, woher (Eigen-/Fremdkapital)?'],
              ['Realistische Umsatzprognosen', 'basierend auf Marktforschung und Zielgruppe'],
              ['Renditeerwartungen', 'was bringt die Investition?'],
              ['Break-even-Analyse', 'ab welcher Menge ist das Unternehmen profitabel?'],
            ],
          },
        ],
      },
      {
        titel: 'Teilplanungen',
        blocks: [
          { type: 'text', text: 'Ein Finanzplan wird meist für 3–5 Jahre erstellt und besteht aus folgenden Teilplanungen:' },
          {
            type: 'kette',
            glieder: [
              { titel: '1', wert: 'Umsatzplanung' },
              { titel: '2', wert: 'Sach- & Personalaufwand' },
              { titel: '3', wert: 'Investition & Finanzierung' },
              { titel: '4', wert: 'Erfolg & Liquidität' },
            ],
          },
          {
            type: 'formel',
            name: 'Planumsatz',
            zaehler: 'Nettoverkaufspreis · geplante Absatzmenge',
            nenner: '1',
            beispiel: 'Café: 110 Kunden · 4,50 € · 300 Tage = 148.500 €',
          },
          {
            type: 'begriff',
            term: 'Rohertrag',
            erklaerung: 'Umsatz abzüglich Wareneinsatz.',
          },
          {
            type: 'begriff',
            term: 'Sach- und Personalaufwand',
            erklaerung: 'Laufende Aufwände (Miete, Versicherung, Energie, Werbung, Löhne + Lohnnebenkosten, eigene Sozialversicherung) – auf ein Jahr hochgerechnet, mit jährlicher Kostensteigerung.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Investitionsplanung', punkte: ['Alle aktivierungsfähigen Anfangsinvestitionen', 'Mit jährlicher Abschreibung (Anschaffungswert / Nutzungsdauer)'] },
            rechts: { titel: 'Finanzierungsplanung', punkte: ['Passende Finanzierungsquellen für den Kapitalbedarf', 'Eigenmittel, Subventionen, Darlehen, Kontokorrent'] },
          },
          { type: 'merke', text: 'Banken verlangen meist eine Eigenkapitalquote von mind. 20 %. Früh zur Bank gehen und Förderungen nutzen (z. B. aws)!' },
        ],
      },
      {
        titel: 'Erfolgs- & Liquiditätsplanung',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Erfolgsplanung (Plan-GuV)', punkte: ['Erträge − Aufwände', '= erwartetes Betriebsergebnis', 'Buchhalterischer Gewinn'] },
            rechts: { titel: 'Liquiditätsplanung', punkte: ['Einzahlungen − Auszahlungen', 'Sichert die Zahlungsfähigkeit', 'Cashflow'] },
          },
          { type: 'merke', text: 'Gewinn ≠ Geld am Konto! Kreditrückzahlung und Privatentnahme = Auszahlung, aber kein Aufwand. Abschreibung = Aufwand, aber keine Auszahlung.' },
          {
            type: 'tabelle',
            spalten: ['Liquiditätsplanung (Cashflow-Planung)'],
            zeilen: [
              ['Ergebnis vor Steuern'],
              ['+ Abschreibungen (nicht auszahlungswirksam)'],
              ['− aufgelöste Subventionen (nicht einzahlungswirksam)'],
              ['= Cashflow (Innenfinanzierung)'],
              ['− Investitionen ± Darlehen + Subventionen − Einkommensteuer − Privatentnahmen'],
              ['= Veränderung der Liquidität'],
            ],
          },
        ],
      },
      {
        titel: 'Break-even-Umsatz',
        blocks: [
          {
            type: 'begriff',
            term: 'Break-even-Point (Gewinnschwelle, Mindestumsatz)',
            erklaerung: 'Der Punkt, an dem die Erträge die Kosten vollständig decken – weder Gewinn noch Verlust.',
          },
          {
            type: 'formel',
            name: 'Deckungsbeitrag gesamt',
            zaehler: 'Umsatz − variable Kosten',
            nenner: '1',
          },
          {
            type: 'formel',
            name: 'DBU-Quote',
            zaehler: 'Deckungsbeitrag gesamt · 100',
            nenner: 'Umsatz',
            beispiel: '96.500 / 148.500 · 100 = 64,98 %',
          },
          {
            type: 'formel',
            name: 'Break-even-Umsatz',
            zaehler: 'Fixkosten',
            nenner: 'DBU-Quote',
            beispiel: '86.900 / 0,6498 = 133.733,46 €',
          },
          { type: 'merke', text: 'Bei Einzelunternehmen zählt ein fiktiver Unternehmerlohn (Privatentnahmen + Einkommensteuer) zu den Fixkosten. Steigen die Fixkosten, steigt der Break-even-Umsatz.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Finanzplanung',
        punkte: [
          'Wichtigster Teil des Businessplans neben der Executive Summary',
          'Geldgeber: Kapitalbedarf, realistische Umsätze, Rendite, Break-even',
          'Teilplanungen: Umsatz · Sach-/Personalaufwand · Investition & Finanzierung · Erfolg & Liquidität',
          'Planumsatz = Nettoverkaufspreis · Absatzmenge · Rohertrag = Umsatz − Wareneinsatz',
          'Investitionsplanung mit Abschreibungen; Finanzierung: EK ≥ 20 %, Förderungen',
        ],
      },
      {
        titel: 'Erfolg, Liquidität, Break-even',
        punkte: [
          'Erfolgsplanung = Erträge − Aufwände · Liquiditätsplanung = Einzahlungen − Auszahlungen',
          'Gewinn ≠ Liquidität (Abschreibungen, Kredittilgung, Privatentnahmen)',
          'DBU-Quote = (Umsatz − variable Kosten) · 100 / Umsatz',
          'Break-even-Umsatz = Fixkosten / DBU-Quote',
        ],
      },
    ],
  },
}
