// INHALTE
// 1., 2. und 3. Jahrgang: Die "Themen" (Kapitelstruktur) sind direkt aus den
// Inhaltsverzeichnissen der Trauner Verlag "come grow with me" Praxisblicke-Bücher
// übernommen (von dir eingescannt). Die Fragen werden Stück für Stück pro Thema
// ergänzt — bis dahin zeigt ein Thema ohne Fragen ein "folgt bald"-Badge und
// ist in der App noch nicht anklickbar.
//
// 4. und 5. Jahrgang: Noch PLATZHALTER nach allgemeinem HAK-Lehrplan, da hierzu
// noch keine Buchauszüge vorliegen. Werden ersetzt, sobald Screenshots da sind.

import { questionsOf } from './translate.js'

export const jahrgaenge = [
  {
    id: 1,
    label: '1. Jahrgang',
    color: 'pink',
    // Große Kapitel (Teile) laut Inhaltsverzeichnis des Buchs, von dir bestätigt/korrigiert.
    // Einzige offene Annahme: "Wahl der Rechtsform" und "Der Businessplan" wurden nicht
    // explizit genannt — hier vorläufig bei "Unternehmensgründung" eingeordnet, da sie
    // inhaltlich dort hingehören. Bitte kurz bestätigen oder korrigieren.
    kapitel: [
      {
        id: 'wirtschaft-betrifft-uns-alle',
        title: 'Die Wirtschaft betrifft uns alle',
        topicIds: ['grundlagen-des-wirtschaftens', 'der-markt'],
      },
      {
        id: 'praxisblick-unternehmen',
        title: 'Ein Praxisblick ins Unternehmen',
        topicIds: ['unternehmen-und-umfeld', 'leistungserstellung-1jg'],
      },
      {
        id: 'konsument-als-kaeufer',
        title: 'Der Konsument als Käufer',
        topicIds: ['phasen-kaufen-verkaufen', 'gesetzliche-grundlagen-kauf', 'fernabsatz-ecommerce', 'ruecktrittsrechte'],
      },
      {
        id: 'unternehmen-kaeufer-verkaeufer',
        title: 'Das Unternehmen als Käufer und Verkäufer',
        topicIds: ['bestandteile-kaufvertrag', 'schriftverkehr-kaufvertrag'],
      },
      {
        id: 'bezahlen-in-der-praxis',
        title: 'Bezahlen in der Praxis',
        topicIds: ['zahlungsformen-1jg'],
      },
      {
        id: 'unzuverlaessige-partner',
        title: 'Wenn Verkäufer oder Käufer unzuverlässig sind',
        topicIds: ['unzuverlaessige-verkaeufer', 'unzuverlaessige-kaeufer', 'rechtsdurchsetzung'],
      },
      {
        id: 'unternehmensgruendung-kapitel',
        title: 'Unternehmensgründung: Der Weg in die Selbstständigkeit',
        topicIds: ['unternehmensgruendung-schritte', 'wahl-der-rechtsform-1jg', 'businessplan-1jg', 'vertraege-mitarbeiter'],
      },
    ],
    topics: [
      {
        id: 'grundlagen-des-wirtschaftens',
        title: 'Grundlagen des Wirtschaftens',
        questions: [
          {
            question: 'Was versteht man unter einem "Bedürfnis"?',
            options: [
              'Das Wunschgefühl, einen empfundenen Mangel zu beseitigen',
              'Ein Gut, das man am Markt kaufen kann',
              'Ein Mittel, um mit möglichst geringem Einsatz ein Ziel zu erreichen',
              'Den Zustand eines Unternehmens ohne Gewinn',
            ],
            correctIndex: 0,
            explanation:
              'Ein Bedürfnis ist ein subjektiv empfundener Mangel, verbunden mit dem Wunsch, diesen zu beseitigen.',
          },
          {
            question:
              'Für die Pralinenherstellung in Loopys Candy Store verwendet Loopy Leitungswasser, für das sie nichts bezahlt. Um welche Art von Gut handelt es sich?',
            options: ['Freies Gut', 'Wirtschaftsgut', 'Investitionsgut', 'Dienstleistung'],
            correctIndex: 0,
            explanation:
              'Freie Güter stehen unbegrenzt zur Verfügung und kosten nichts (z. B. Luft, Leitungswasser). Wirtschaftsgüter sind dagegen knapp und müssen bezahlt werden.',
          },
          {
            question: 'Loopy kauft für Loopys Candy Store eine neue Schokoladen-Gießmaschine. Um welche Art von Gut handelt es sich?',
            options: ['Konsumgut', 'Investitionsgut', 'Freies Gut', 'Dienstleistung'],
            correctIndex: 1,
            explanation:
              'Investitionsgüter werden von Unternehmen zur Herstellung anderer Güter verwendet (hier: die Maschine zur Schokoladenproduktion). Konsumgüter werden dagegen direkt von privaten Haushalten verbraucht.',
          },
          {
            question: 'Ein Kunde kauft in Loopys Candy Store eine Tüte Bonbons zum sofortigen Verzehr. Um welche Art von Gut handelt es sich für den Kunden?',
            options: ['Investitionsgut', 'Konsumgut', 'Freies Gut', 'Produktionsmittel'],
            correctIndex: 1,
            explanation: 'Güter, die von privaten Haushalten zur unmittelbaren Bedürfnisbefriedigung genutzt werden, nennt man Konsumgüter.',
          },
          {
            question:
              'Loopy hat für die Weihnachtssaison genau 200 Euro Budget und will damit möglichst viel Verpackungsmaterial für ihre Pralinen einkaufen. Nach welchem Prinzip handelt sie?',
            options: ['Maximalprinzip', 'Minimalprinzip', 'Nachhaltigkeitsprinzip', 'Äquivalenzprinzip'],
            correctIndex: 0,
            explanation:
              'Beim Maximalprinzip wird mit einem gegebenen (festen) Mitteleinsatz der größtmögliche Ertrag angestrebt. Beim Minimalprinzip ist es umgekehrt: Ein festes Ziel wird mit möglichst geringem Mitteleinsatz erreicht.',
          },
          {
            question:
              'Loopy will für ihren Candy Store genau 500 Pralinenschachteln herstellen lassen und sucht dafür den günstigsten Lieferanten. Nach welchem Prinzip handelt sie?',
            options: ['Maximalprinzip', 'Minimalprinzip', 'Wirtschaftsordnung', 'Bedürfnisprinzip'],
            correctIndex: 1,
            explanation:
              'Beim Minimalprinzip steht das Ziel fest (hier: 500 Schachteln), und es wird der geringstmögliche Mitteleinsatz gesucht. Zusammen mit dem Maximalprinzip bildet es das Wirtschaftlichkeitsprinzip.',
          },
          {
            question: 'Welche der folgenden Einheiten zählt NICHT zu den vier klassischen Wirtschaftssubjekten im vollständigen Wirtschaftskreislauf?',
            options: ['Unternehmen', 'Private Haushalte', 'Banken', 'Vereine'],
            correctIndex: 3,
            explanation:
              'Die vier Wirtschaftssubjekte im vollständigen Wirtschaftskreislauf sind Unternehmen, private Haushalte, der Staat und Banken. Vereine zählen nicht dazu.',
          },
          {
            question: 'Loopys Candy Store liefert Pralinen an private Haushalte. Was erhält das Unternehmen im Gegenzug von den Haushalten?',
            options: ['Arbeitskraft', 'Steuern', 'Geld (Kaufpreis)', 'Kredite'],
            correctIndex: 2,
            explanation:
              'Zwischen Unternehmen und privaten Haushalten fließen Güter und Dienstleistungen in die eine Richtung, als Gegenleistung fließt Geld (Kaufpreis) in die andere Richtung.',
          },
        ],
      },
      {
        id: 'der-markt',
        title: 'Der Markt',
        questions: [
          {
            question:
              'Statt selbst Kakao anzubauen, zu rösten UND zu verarbeiten, kauft Loopy den Kakao fertig ein und konzentriert sich in Loopys Candy Store nur auf die Herstellung der Pralinen. Wie nennt man diese Spezialisierung auf einzelne Produktionsschritte?',
            options: ['Arbeitsteilung', 'Marktgleichgewicht', 'Planwirtschaft', 'Bedürfnisbefriedigung'],
            correctIndex: 0,
            explanation:
              'Bei der Arbeitsteilung spezialisieren sich Personen oder Unternehmen auf bestimmte Aufgaben oder Produktionsschritte, statt alles selbst zu erledigen.',
          },
          {
            question:
              'In Loopys Candy Store ist jede Mitarbeiterin für einen anderen Arbeitsschritt zuständig: eine formt die Pralinen, eine verpackt sie, eine verkauft sie im Laden. Um welche Art der Arbeitsteilung handelt es sich?',
            options: ['Zwischenbetriebliche Arbeitsteilung', 'Innerbetriebliche Arbeitsteilung', 'Internationale Arbeitsteilung', 'Nationale Arbeitsteilung'],
            correctIndex: 1,
            explanation:
              'Wenn innerhalb eines Unternehmens einzelne Arbeitsschritte auf verschiedene Mitarbeiter:innen aufgeteilt werden, spricht man von innerbetrieblicher Arbeitsteilung.',
          },
          {
            question:
              'Loopy bezieht ihren Kakao von einem Anbieter in Ecuador und ihre Verpackungen von einem Hersteller in Italien. Welche Art der Arbeitsteilung liegt hier vor?',
            options: ['Innerbetriebliche Arbeitsteilung', 'Nationale Arbeitsteilung', 'Internationale Arbeitsteilung', 'Horizontale Arbeitsteilung'],
            correctIndex: 2,
            explanation: 'Erstreckt sich die Arbeitsteilung über die Grenzen eines Landes hinweg, spricht man von internationaler Arbeitsteilung.',
          },
          {
            question: 'Zu welchem Wirtschaftssektor zählt Loopys Candy Store, da sie Rohstoffe zu fertigen Pralinen verarbeitet?',
            options: ['Primärer Sektor', 'Sekundärer Sektor', 'Tertiärer Sektor', 'Quartärer Sektor'],
            correctIndex: 1,
            explanation:
              'Der sekundäre Sektor (Produktion/Industrie) verarbeitet Rohstoffe zu fertigen Gütern. Der primäre Sektor gewinnt Rohstoffe (Urproduktion), der tertiäre Sektor umfasst Dienstleistungen.',
          },
          {
            question: 'Auf welchem Markt tritt Loopy als Anbieterin auf, wenn sie ihre Pralinen an Kund:innen verkauft?',
            options: ['Arbeitsmarkt', 'Kapitalmarkt', 'Konsumgütermarkt', 'Immobilienmarkt'],
            correctIndex: 2,
            explanation: 'Fertige Güter, die von privaten Haushalten konsumiert werden – wie Pralinen –, werden auf dem Konsumgütermarkt gehandelt.',
          },
          {
            question: 'In Loopys Stadt gibt es nur einen einzigen Anbieter für handgemachte Pralinen: Loopys Candy Store. Wie nennt man diese Marktform?',
            options: ['Polypol', 'Oligopol', 'Monopol', 'Freie Marktwirtschaft'],
            correctIndex: 2,
            explanation: 'Gibt es nur einen einzigen Anbieter auf einem Markt, spricht man von einem Monopol (Angebotsmonopol).',
          },
          {
            question: 'Was besagt das Angebotsgesetz?',
            options: [
              'Steigt der Preis eines Gutes, sinkt das Angebot',
              'Steigt der Preis eines Gutes, steigt das Angebot',
              'Steigt der Preis, bleibt das Angebot gleich',
              'Das Angebot hängt nicht vom Preis ab',
            ],
            correctIndex: 1,
            explanation:
              'Nach dem Angebotsgesetz gilt: Steigt der Preis eines Gutes, steigt auch das Angebot dieses Gutes, weil Anbieter mehr davon verkaufen wollen.',
          },
          {
            question: 'Was besagt das Nachfragegesetz?',
            options: [
              'Steigt der Preis eines Gutes, steigt die Nachfrage',
              'Steigt der Preis eines Gutes, sinkt die Nachfrage',
              'Die Nachfrage ist unabhängig vom Preis',
              'Sinkt der Preis, sinkt auch die Nachfrage',
            ],
            correctIndex: 1,
            explanation: 'Nach dem Nachfragegesetz gilt: Steigt der Preis eines Gutes, sinkt die Nachfrage danach (und umgekehrt).',
          },
          {
            question: 'An welchem Punkt entsteht der Marktpreis (Gleichgewichtspreis)?',
            options: [
              'Dort, wo das Angebot am höchsten ist',
              'Dort, wo die Nachfrage am höchsten ist',
              'Im Schnittpunkt von Angebots- und Nachfragekurve',
              'Dort, wo der Staat den Preis festlegt',
            ],
            correctIndex: 2,
            explanation:
              'Der Marktpreis (Gleichgewichtspreis) entsteht im Schnittpunkt von Angebots- und Nachfragekurve, also dort, wo sich angebotene und nachgefragte Menge decken (Marktgleichgewicht).',
          },
          {
            question:
              'In welcher Wirtschaftsordnung bestimmt der Staat zentral, was, wie viel und für wen produziert wird, statt Angebot und Nachfrage frei wirken zu lassen?',
            options: ['Freie Marktwirtschaft', 'Soziale Marktwirtschaft', 'Planwirtschaft', 'Oligopol'],
            correctIndex: 2,
            explanation: 'In der Planwirtschaft plant und lenkt der Staat zentral, was, wie viel und für wen produziert wird.',
          },
        ],
      },
      {
        id: 'unternehmen-und-umfeld',
        title: 'Das Unternehmen und sein Umfeld',
        questions: [
          {
            question: 'Was versteht man unter dem Begriff "Betrieb"?',
            options: [
              'Den rechtlichen Rahmen für die Erstellung von Sach- und Dienstleistungen',
              'Den Ort, an dem Sach- oder Dienstleistungen bereitgestellt werden',
              'Den im Firmenbuch eingetragenen Namen eines Unternehmens',
              'Eine Gruppe von Kunden eines Unternehmens',
            ],
            correctIndex: 1,
            explanation:
              'Der Betrieb ist der Ort, an dem Sach- oder Dienstleistungen tatsächlich erstellt werden. Ein Unternehmen kann mehrere Betriebe haben.',
          },
          {
            question: 'Loopys Candy Store ist im Firmenbuch unter dem Namen "Loopys Candy Store e.U." eingetragen. Um welchen Begriff handelt es sich dabei?',
            options: ['Betrieb', 'Unternehmen', 'Firma', 'Filiale'],
            correctIndex: 2,
            explanation: 'Die Firma ist der im Firmenbuch eingetragene Name eines Unternehmens, unter dem es am Markt auftritt.',
          },
          {
            question:
              'Loopy stellt in ihrer kleinen Backstube handgemachte Pralinen aus Kakao her. Zu welcher Betriebsart zählt Loopys Candy Store nach der Leistungserstellung?',
            options: ['Primärsektor-Betrieb', 'Sekundärsektor-Betrieb', 'Tertiärsektor-Betrieb', 'Quartärsektor-Betrieb'],
            correctIndex: 1,
            explanation:
              'Da Loopy Rohstoffe (z. B. Kakao) zu fertigen Pralinen verarbeitet, zählt ihr Betrieb zum sekundären Sektor (Produktionsbetrieb).',
          },
          {
            question: 'Mit nur 4 Mitarbeiter:innen zählt Loopys Candy Store nach EU-Kriterien zu welcher Betriebsgröße?',
            options: ['Kleinstbetrieb', 'Kleinbetrieb', 'Mittelbetrieb', 'Großbetrieb'],
            correctIndex: 0,
            explanation:
              'Kleinstbetriebe beschäftigen laut EU-Definition bis zu 9 Mitarbeiter:innen. Loopys Candy Store mit 4 Mitarbeiter:innen zählt daher zu den Kleinstbetrieben.',
          },
          {
            question: 'Loopy möchte in diesem Jahr genau 50.000 Pralinenschachteln produzieren und verkaufen. Um welche Art von Unternehmensziel handelt es sich?',
            options: ['Formalziel', 'Sachziel', 'Stakeholderziel', 'Ökologisches Umfeld'],
            correctIndex: 1,
            explanation:
              'Sachziele beschreiben das konkrete Handeln eines Unternehmens – also welche Sach- oder Dienstleistungen erbracht werden sollen (hier: die Produktionsmenge an Pralinen).',
          },
          {
            question: 'Loopy setzt sich das Ziel, den Gewinn von Loopys Candy Store im nächsten Jahr um 10 % zu steigern. Um welche Art von Formalziel handelt es sich?',
            options: ['Monetäres Formalziel', 'Nicht monetäres Formalziel', 'Sachziel', 'Ökologisches Ziel'],
            correctIndex: 0,
            explanation:
              'Monetäre Formalziele lassen sich in Geldeinheiten messen – wie hier die Gewinnsteigerung. Nicht monetäre Ziele (z. B. Kundenzufriedenheit) lassen sich nicht in Geld ausdrücken.',
          },
          {
            question: 'Die Mitarbeiter:innen von Loopys Candy Store zählen zu welcher Gruppe von Stakeholdern?',
            options: ['Externe Stakeholder', 'Interne Stakeholder', 'Konkurrenten', 'Gesellschaft'],
            correctIndex: 1,
            explanation:
              'Zu den internen Stakeholdern eines Unternehmens zählen Eigentümer:innen, Management und Mitarbeiter:innen. Kund:innen, Lieferant:innen oder der Staat sind dagegen externe Stakeholder.',
          },
          {
            question: 'Die Kakaobäuerin, von der Loopy ihren Kakao bezieht, zählt zu welcher Gruppe von Stakeholdern von Loopys Candy Store?',
            options: ['Interner Stakeholder', 'Externer Stakeholder', 'Management', 'Eigentümer'],
            correctIndex: 1,
            explanation:
              'Lieferant:innen zählen zu den externen Stakeholdern eines Unternehmens, da sie außerhalb des Unternehmens stehen, aber ein Interesse an dessen Geschäftstätigkeit haben.',
          },
          {
            question: 'Steigende Rohstoffpreise für Kakao auf dem Weltmarkt betreffen Loopys Candy Store. Zu welchem Umfeld des Unternehmens zählt dies?',
            options: ['Ökonomisches Umfeld', 'Gesellschaftliches Umfeld', 'Technologisches Umfeld', 'Ökologisches Umfeld'],
            correctIndex: 0,
            explanation: 'Das ökonomische Umfeld beschreibt die wirtschaftlichen Verhältnisse auf nationalen und internationalen Märkten, wie z. B. Rohstoffpreise.',
          },
        ],
      },
      {
        id: 'leistungserstellung-1jg',
        title: 'Leistungserstellung im Unternehmen',
        questions: [
          {
            question: 'Loopys Gießmaschine für Pralinen zählt zu welchem Produktionsfaktor?',
            options: ['Menschliche Arbeitsleistung', 'Anlagevermögen', 'Umlaufvermögen', 'Finanzumlaufvermögen'],
            correctIndex: 1,
            explanation: 'Maschinen zählen zum (Sach-)Anlagevermögen, da sie langfristig im Unternehmen genutzt werden.',
          },
          {
            question: 'Der Kakao-Vorrat, den Loopy in ihrem Lager für die nächste Produktion bereithält, zählt zu welchem Produktionsfaktor?',
            options: ['Anlagevermögen', 'Umlaufvermögen', 'Menschliche Arbeitsleistung', 'Immaterielles Anlagevermögen'],
            correctIndex: 1,
            explanation:
              'Rohstoffe wie Kakao zählen zum Sachumlaufvermögen, da sie nur kurzfristig im Betrieb verbleiben und im Produktionsprozess verbraucht werden.',
          },
          {
            question: 'Zu welchem Grundfunktionsbereich der Leistungserstellung zählt es, wenn Loopy neue Kakaobohnen bei ihrer Lieferantin bestellt?',
            options: ['Produktion', 'Absatz', 'Beschaffung', 'Personalwesen'],
            correctIndex: 2,
            explanation: 'Die Beschaffung sorgt für die Versorgung des Unternehmens mit den notwendigen Materialien – hier dem Kakao.',
          },
          {
            question: 'Wenn Loopy ihre fertigen Pralinen im Laden an Kund:innen verkauft, zählt das zu welchem Bereich?',
            options: ['Beschaffung', 'Produktion', 'Absatz (Vertrieb)', 'Lager'],
            correctIndex: 2,
            explanation: 'Der Absatz (Vertrieb) umfasst den Verkauf der Sachgüter oder Dienstleistungen auf dem Markt.',
          },
          {
            question:
              'Loopy stellt eine neue Mitarbeiterin ein und kümmert sich um deren Arbeitsvertrag und Einschulung. Welchem Bereich der Leistungserstellung ist das zuzuordnen?',
            options: ['Rechnungswesen', 'Personalwesen', 'Lager', 'Unternehmensführung'],
            correctIndex: 1,
            explanation: 'Das Personalwesen umfasst alle Aufgaben rund um die Mitarbeiter:innen, z. B. Personalbeschaffung und Betreuung während der Anstellung.',
          },
          {
            question: 'Loopy erfasst alle Einnahmen und Ausgaben von Loopys Candy Store zahlenmäßig. Welchem Bereich der Leistungserstellung gehört diese Tätigkeit an?',
            options: ['Rechnungswesen', 'Beschaffung', 'Absatz', 'Lager'],
            correctIndex: 0,
            explanation: 'Das Rechnungswesen dient der zahlenmäßigen Erfassung aller betrieblichen Vorgänge, z. B. Einnahmen und Ausgaben.',
          },
          {
            question:
              'Loopy plant die Ziele von Loopys Candy Store für das nächste Jahr, trifft Entscheidungen zur Umsetzung und kontrolliert regelmäßig den Erfolg. Zu welchem Bereich zählt diese Tätigkeit?',
            options: ['Lager', 'Personalwesen', 'Unternehmensführung', 'Beschaffung'],
            correctIndex: 2,
            explanation: 'Die Unternehmensführung (Management) umfasst Zielformulierung/Planung, Entscheiden, Organisieren/Steuern und Kontrollieren.',
          },
          {
            question: 'Warum betreibt Loopy ein Lager für Verpackungsmaterial und fertige Pralinen?',
            options: ['Damit die benötigten Güter rechtzeitig zur Verfügung stehen', 'Um Steuern zu sparen', 'Um Mitarbeiter:innen einzusparen', 'Weil das Gesetz es vorschreibt'],
            correctIndex: 0,
            explanation: 'Aufgabe des Lagers ist es, dass die benötigten Güter zum richtigen Zeitpunkt im betrieblichen Ablauf zur Verfügung stehen.',
          },
        ],
      },
      {
        id: 'phasen-kaufen-verkaufen',
        title: 'Phasen beim Kaufen und Verkaufen',
        questions: [
          {
            question: 'In welche drei Phasen lässt sich ein Kaufvertrag einteilen?',
            options: ['Werbung, Verkauf, Garantie', 'Anbahnung, Abschluss, Erfüllung', 'Anfrage, Lieferung, Reklamation', 'Angebot, Rechnung, Rücktritt'],
            correctIndex: 1,
            explanation: 'Jedes Kaufgeschäft durchläuft die drei Phasen Anbahnung, Abschluss und Erfüllung des Kaufvertrages.',
          },
          {
            question:
              'Loopy hängt ein Plakat mit "Adventskalender – solange der Vorrat reicht!" ins Schaufenster von Loopys Candy Store. Um was handelt es sich dabei rechtlich?',
            options: ['Ein verbindliches Angebot', 'Eine Anpreisung', 'Eine Bestellung', 'Einen Kaufvertrag'],
            correctIndex: 1,
            explanation:
              'Werbetafeln, Prospekte oder Schaufensterplakate mit Vermerken wie "solange der Vorrat reicht" sind rechtlich unverbindliche Anpreisungen – der Verkäufer geht damit noch keine Verpflichtung ein.',
          },
          {
            question: 'Ein Kunde schreibt Loopy eine E-Mail: "Können Sie mir bitte Ihren aktuellen Pralinenkatalog mit Preisen schicken?" Um was handelt es sich dabei?',
            options: ['Ein verbindliches Angebot', 'Eine Anfrage', 'Eine Bestellung', 'Eine Anpreisung'],
            correctIndex: 1,
            explanation: 'Eine Anfrage ist rechtlich unverbindlich – der Kunde bittet lediglich um Informationen, ohne eine Verpflichtung einzugehen.',
          },
          {
            question: 'Welche fünf Bestandteile muss ein Angebot enthalten, damit es rechtlich verbindlich ist?',
            options: [
              'Werbung, Preis, Rabatt, Lieferzeit, Garantie',
              'Bestimmter Käufer, bestimmter Verkäufer, Qualität, Quantität, Preis',
              'Name, Anschrift, Telefonnummer, E-Mail, UID-Nummer',
              'Anbahnung, Abschluss, Erfüllung, Lieferung, Zahlung',
            ],
            correctIndex: 1,
            explanation: 'Ein verbindliches Angebot muss Verkäufer, Käufer, Qualität, Quantität und Preis des Produktes eindeutig festlegen.',
          },
          {
            question: 'Loopy schreibt auf ihre Angebote im Onlineshop immer den Zusatz "Preisänderungen vorbehalten". Was bewirkt diese Formulierung?',
            options: [
              'Sie macht das Angebot rechtlich bindend',
              'Sie ist eine Freizeichnungsklausel, die Loopy von der Bindung an das Angebot löst',
              'Sie verlängert die Rücktrittsfrist',
              'Sie ist gesetzlich verboten',
            ],
            correctIndex: 1,
            explanation:
              'Mit einer Freizeichnungsklausel (z. B. "Preisänderungen vorbehalten", "freibleibend") kann sich der Verkäufer von der Bindung an sein Angebot lösen – man spricht dann von einem freibleibenden Angebot.',
          },
          {
            question: 'Ein Kunde nimmt Loopys verbindliches Angebot unverändert und rechtzeitig an. Was passiert dadurch?',
            options: [
              'Es entsteht eine unverbindliche Anfrage',
              'Der Kaufvertrag kommt durch übereinstimmende Willenserklärung zustande',
              'Das Angebot verfällt automatisch',
              'Loopy kann das Angebot noch frei widerrufen',
            ],
            correctIndex: 1,
            explanation:
              'Durch die rechtzeitige und unveränderte Annahme eines verbindlichen Angebots wird der Kaufvertrag durch übereinstimmende Willenserklärung von Käufer und Verkäufer abgeschlossen.',
          },
          {
            question: 'Welche zwei Pflichten hat Loopy als Verkäuferin bei der Erfüllung eines Kaufvertrages?',
            options: ['Werbung schalten und Rabatt gewähren', 'Lieferung der Ware und Ausstellung der Rechnung', 'Annahme der Ware und Zahlung', 'Anfrage stellen und Angebot erstellen'],
            correctIndex: 1,
            explanation:
              'Bei der Erfüllung des Kaufvertrages muss der Verkäufer die Ware liefern und eine ordnungsgemäße Rechnung ausstellen. Der Käufer muss im Gegenzug die Ware annehmen und bezahlen.',
          },
          {
            question: 'In welchem Alter ist man in Österreich voll geschäftsfähig und kann daher selbstständig jeden Kaufvertrag abschließen?',
            options: ['Ab 14 Jahren', 'Ab 16 Jahren', 'Ab 18 Jahren', 'Ab 21 Jahren'],
            correctIndex: 2,
            explanation: 'Mit dem 18. Geburtstag wird man in Österreich voll geschäftsfähig und kann sämtliche Verträge selbstständig abschließen.',
          },
          {
            question: 'Ein 15-jähriger Kunde kauft bei Loopy eine Tüte Bonbons um 3 Euro von seinem Taschengeld. Wie ist seine Geschäftsfähigkeit in diesem Alter einzustufen?',
            options: ['Geschäftsunfähig', 'Beschränkt geschäftsfähig', 'Mündig minderjährig (erweitert beschränkt geschäftsfähig)', 'Voll geschäftsfähig'],
            correctIndex: 2,
            explanation:
              'Zwischen 14 und 18 Jahren gilt man als mündig minderjährig und ist erweitert beschränkt geschäftsfähig – z. B. dürfen mit eigenem Einkommen wie Taschengeld kleinere Käufe selbst getätigt werden.',
          },
        ],
      },
      {
        id: 'gesetzliche-grundlagen-kauf',
        title: 'Gesetzliche Grundlagen (Kaufvertrag)',
        questions: [
          {
            question: 'Loopy (Unternehmerin) verkauft Pralinen an eine Privatkundin. Um welche Art von Geschäft handelt es sich?',
            options: ['C2C', 'B2C', 'B2B', 'G2C'],
            correctIndex: 1,
            explanation: 'Verkauft ein Unternehmen an eine Privatperson, spricht man von einem B2C-Geschäft (Business-to-Consumer).',
          },
          {
            question: 'Loopy kauft von einer Großbäckerei große Mengen Mehl für ihre Pralinenproduktion ein. Um welche Art von Geschäft handelt es sich?',
            options: ['C2C', 'B2C', 'B2B', 'B2G'],
            correctIndex: 2,
            explanation: 'Handeln zwei Unternehmen miteinander, spricht man von einem B2B-Geschäft (Business-to-Business).',
          },
          {
            question: 'Welches Gesetz schützt Privatpersonen (Konsument:innen) gezielt vor unfairen Vertragsbedingungen bei Geschäften mit Unternehmen?',
            options: ['UGB', 'KSchG', 'ECG', 'DSGVO'],
            correctIndex: 1,
            explanation: 'Das Konsumentenschutzgesetz (KSchG) schützt Privatpersonen vor unfairen Methoden und unzulässigen Vertragsbedingungen im Geschäft mit Unternehmen.',
          },
          {
            question: 'Welches Gesetz gilt grundsätzlich für alle Verträge, unabhängig davon, wer die Vertragspartner sind?',
            options: ['UGB', 'ECG', 'ABGB', 'FAGG'],
            correctIndex: 2,
            explanation: 'Das Allgemeine bürgerliche Gesetzbuch (ABGB) gilt für alle Verträge unabhängig von den Vertragspartnern, z. B. für die Regelung der Geschäftsfähigkeit.',
          },
          {
            question: 'Loopy eröffnet einen Onlineshop für ihre Pralinen. Welches Gesetz muss sie dabei besonders beachten, weil es Informationspflichten auf Webseiten regelt?',
            options: ['UGB', 'ECG (E-Commerce-Gesetz)', 'KSchG', 'ABGB'],
            correctIndex: 1,
            explanation: 'Das E-Commerce-Gesetz (ECG) gilt für alle Verkäufe, die über einen Onlineshop stattfinden, und regelt z. B. Informationspflichten auf der Webseite.',
          },
          {
            question: 'Welches Gesetz regelt speziell Verträge, die außerhalb der Geschäftsräume eines Unternehmens abgeschlossen werden (z. B. Haustürgeschäfte)?',
            options: ['FAGG (Fern- und Auswärtsgeschäfte-Gesetz)', 'UGB', 'DSGVO', 'ECG'],
            correctIndex: 0,
            explanation:
              'Das FAGG gilt für Geschäfte zwischen Unternehmen und Privatpersonen, die außerhalb der Geschäftsräume des Unternehmens abgeschlossen werden, z. B. bei Haustürgeschäften.',
          },
          {
            question: 'Loopy sammelt E-Mail-Adressen ihrer Kund:innen für ihren Newsletter. Welches Gesetz regelt den Umgang mit diesen personenbezogenen Daten?',
            options: ['UGB', 'KSchG', 'DSGVO', 'ABGB'],
            correctIndex: 2,
            explanation:
              'Die Datenschutzgrundverordnung (DSGVO) regelt in der EU den Umgang mit personenbezogenen Daten und schreibt z. B. vor, dass Nutzer:innen der Datennutzung zustimmen müssen.',
          },
          {
            question: 'Welches Gesetz gilt speziell für Verträge zwischen zwei Unternehmen?',
            options: ['KSchG', 'UGB (Unternehmensgesetzbuch)', 'FAGG', 'ECG'],
            correctIndex: 1,
            explanation: 'Das Unternehmensgesetzbuch (UGB) gilt für Verträge zwischen Unternehmen (B2B-Geschäfte).',
          },
          {
            question: 'Ein Handwerker repariert für Loopy die Ladenbeleuchtung gegen Bezahlung. Um welchen Vertragstyp handelt es sich dabei (nicht Kaufvertrag)?',
            options: ['Mietvertrag', 'Werkvertrag', 'Arbeitsvertrag', 'Kreditvertrag'],
            correctIndex: 1,
            explanation: 'Bei einem Werkvertrag wird eine bestimmte Leistung (ein "Werk", z. B. eine Reparatur) gegen Werklohn erbracht.',
          },
        ],
      },
      {
        id: 'fernabsatz-ecommerce',
        title: 'Fernabsatz & E-Commerce',
        questions: [
          {
            question: 'Eine Kundin bestellt Pralinen über Loopys Onlineshop, ohne persönlich im Laden zu sein. Wie nennt man diese Art des Vertragsabschlusses?',
            options: ['Präsenzgeschäft', 'Fernabsatz', 'Haustürgeschäft', 'Handschlagqualität'],
            correctIndex: 1,
            explanation:
              'Von Fernabsatz spricht man, wenn sich die Vertragspartner beim Abschluss des Kaufvertrages nicht persönlich gegenüberstehen und ausschließlich Fernkommunikationsmittel nutzen.',
          },
          {
            question: 'Wie nennt man den Vertragsabschluss speziell über das Internet?',
            options: ['Fernabsatz', 'E-Commerce', 'Direktvertrieb', 'B2B-Handel'],
            correctIndex: 1,
            explanation: 'Erfolgt der Vertragsabschluss über das Internet, spricht man vom elektronischen Geschäftsverkehr bzw. E-Commerce.',
          },
          {
            question: 'Welche der folgenden Angaben muss Loopy laut Gesetz in ihrem Onlineshop NICHT verpflichtend angeben?',
            options: ['Name und Anschrift des Unternehmens', 'Gesamtpreis inklusive Steuern', 'Lieblingsfarbe der Inhaberin', 'Informationen zum Rücktrittsrecht'],
            correctIndex: 2,
            explanation:
              'Verkäufer:innen im E-Commerce müssen u. a. Name, Anschrift, Gesamtpreis und Rücktrittsrecht angeben – private Vorlieben wie eine Lieblingsfarbe zählen nicht zu den gesetzlichen Informationspflichten.',
          },
          {
            question: 'In welcher Reihenfolge läuft ein typischer Kauf in Loopys Onlineshop ab?',
            options: [
              'Bestellen-Button klicken → Produkt in den Warenkorb legen → Daten eingeben',
              'Produkt in den Warenkorb legen → persönliche Daten und Zahlungsart eingeben → Bestellen-Button klicken',
              'Daten eingeben → Rechnung erhalten → Produkt auswählen',
              'Zahlung leisten → Produkt auswählen → Warenkorb leeren',
            ],
            correctIndex: 1,
            explanation:
              'Der Vertragsabschluss im Internet läuft typischerweise so ab: Produkte in den Warenkorb legen, persönliche Daten und Zahlungsart bekanntgeben, danach den Kauf per Bestellen-Button auslösen.',
          },
          {
            question: 'Welche Aussage über den rechtlichen Schutz beim Online-Einkauf trifft zu?',
            options: [
              'Das Internet ist ein rechtsfreier Raum, es gelten keine Gesetze',
              'Beim Online-Einkauf gelten gesetzliche Schutzbestimmungen wie KSchG, FAGG und ECG',
              'Nur Unternehmen, nicht aber Konsument:innen, sind beim Online-Einkauf gesetzlich geschützt',
              'Online-Käufe sind grundsätzlich unverbindlich',
            ],
            correctIndex: 1,
            explanation: 'Auch beim Online-Einkauf gelten gesetzliche Schutzbestimmungen (z. B. KSchG, FAGG, ECG) – das Internet ist kein rechtsfreier Raum.',
          },
          {
            question: 'Wofür kann eine qualifizierte elektronische Signatur mit der ID Austria in Österreich verwendet werden?',
            options: [
              'Nur zum Bezahlen von Rechnungen',
              'Als rechtlich gleichgestellter Ersatz für die handschriftliche Unterschrift',
              'Nur für Behördenwege, nicht für Verträge',
              'Sie hat keine rechtliche Bedeutung',
            ],
            correctIndex: 1,
            explanation: 'In Österreich ist die qualifizierte elektronische Signatur (z. B. mit der ID Austria) rechtlich der handschriftlichen Unterschrift gleichgestellt.',
          },
          {
            question: 'Welches der folgenden Mittel zählt NICHT zu den klassischen Fernkommunikationsmitteln für einen Fernabsatzvertrag?',
            options: ['Telefon', 'Katalog', 'Persönliches Gespräch im Laden', 'E-Mail'],
            correctIndex: 2,
            explanation:
              'Fernkommunikationsmittel sind z. B. Internet, Telefon, E-Mail, Katalog oder Brief. Ein persönliches Gespräch im Laden ist dagegen ein Präsenzgeschäft, kein Fernabsatz.',
          },
          {
            question: 'Warum sollte man beim Online-Einkauf auf Gütesiegel und ein Impressum der Website achten?',
            options: [
              'Um die Ladezeit der Website zu verbessern',
              'Um die Seriosität und Vertrauenswürdigkeit des Onlinehändlers besser einschätzen zu können',
              'Weil es die Versandkosten senkt',
              'Weil es gesetzlich die Rücktrittsfrist verlängert',
            ],
            correctIndex: 1,
            explanation: 'Gütesiegel und ein vollständiges Impressum helfen dabei, seriöse von unseriösen Online-Händlern zu unterscheiden und Betrug vorzubeugen.',
          },
        ],
      },
      {
        id: 'ruecktrittsrechte',
        title: 'Rücktritts- & Widerrufsrechte',
        questions: [
          {
            question: 'Ist ein Kaufvertrag gültig abgeschlossen, kann der Käufer grundsätzlich...',
            options: ['jederzeit ohne Grund zurücktreten', 'ihn grundsätzlich nicht mehr einfach rückgängig machen', 'den Preis nachträglich verhandeln', 'die Ware immer kostenlos umtauschen'],
            correctIndex: 1,
            explanation: 'Ist ein Kaufvertrag gültig abgeschlossen, gibt es grundsätzlich kein einfaches "Zurück" mehr – Käufer und Verkäufer müssen den Vertrag erfüllen.',
          },
          {
            question:
              'Eine Kundin möchte eine im Laden gekaufte Pralinenschachtel bei Loopy einfach umtauschen, weil sie es sich anders überlegt hat. Worauf hat sie gesetzlich Anspruch?',
            options: [
              'Auf ein gesetzliches Umtauschrecht',
              'Auf gar nichts – ein Umtauschrecht gibt es gesetzlich nicht, es muss individuell mit dem Verkäufer vereinbart werden',
              'Auf eine automatische Rückerstattung',
              'Auf eine Entschädigung',
            ],
            correctIndex: 1,
            explanation:
              'Ein gesetzliches Umtauschrecht bei Käufen im Laden gibt es in Österreich nicht – es liegt im Ermessen des Verkäufers, ob er kulanterweise einen Umtausch oder eine Gutschrift anbietet.',
          },
          {
            question: 'Unter welcher Voraussetzung kann ein Käufer von einem gültigen Kaufvertrag zurücktreten?',
            options: ['Immer, ohne besonderen Grund', 'Wenn der Verkäufer ihn arglistig getäuscht hat', 'Nur wenn der Preis über 100 Euro liegt', 'Nur bei Käufen im Geschäft'],
            correctIndex: 1,
            explanation:
              'Ein Rücktritt ist u. a. möglich, wenn ein Rücktrittsrecht vereinbart wurde, der Vertrag rechtswidrig zustande kam, arglistige Täuschung vorliegt oder der Verkäufer mit der Erfüllung in Verzug ist.',
          },
          {
            question: 'Für welche Art von Geschäften gelten die besonderen Rücktrittsrechte für Konsument:innen (z. B. nach dem FAGG)?',
            options: [
              'Nur für Geschäfte im Ladengeschäft',
              'Für Geschäfte außerhalb der Geschäftsräume (z. B. Haustürgeschäfte) und im Fernabsatz (z. B. Onlineshop)',
              'Nur für Geschäfte zwischen zwei Unternehmen',
              'Für alle Kaufverträge ausnahmslos',
            ],
            correctIndex: 1,
            explanation:
              'Besondere Rücktrittsrechte gelten für Geschäfte außerhalb der Geschäftsräume des Verkäufers (z. B. Haustürgeschäfte) sowie für Geschäfte im Fernabsatz (z. B. Onlineshop).',
          },
          {
            question: 'Eine Kundin bestellt bei Loopy im Onlineshop Pralinen, möchte die Bestellung aber wieder rückgängig machen. Muss sie dafür einen Grund angeben oder eine Gebühr zahlen?',
            options: ['Ja, sie muss einen triftigen Grund angeben und eine Gebühr zahlen', 'Nein, weder Grund noch Gebühr sind notwendig', 'Nur eine Gebühr ist notwendig', 'Nur ein Grund ist notwendig'],
            correctIndex: 1,
            explanation: 'Beim besonderen Rücktrittsrecht im Fernabsatz kann der Käufer ohne Angabe von Gründen und ohne Zahlung einer Stornogebühr zurücktreten.',
          },
          {
            question: 'Wie lange ist die reguläre Rücktrittsfrist bei einem Onlinekauf, wenn Loopy ihre Kund:innen ordnungsgemäß über das Rücktrittsrecht informiert hat?',
            options: ['7 Kalendertage', '14 Kalendertage', '30 Kalendertage', '6 Monate'],
            correctIndex: 1,
            explanation: 'Wurde der Käufer ordnungsgemäß informiert, beträgt die reguläre Rücktrittsfrist bei Fernabsatzgeschäften 14 Kalendertage.',
          },
          {
            question: 'Was passiert mit der Rücktrittsfrist, wenn Loopy ihre Onlinekund:innen NICHT über das Rücktrittsrecht informiert?',
            options: ['Die Frist verkürzt sich auf 7 Tage', 'Die Frist verlängert sich auf bis zu 12 Monate und 14 Kalendertage', 'Es gibt dann überhaupt kein Rücktrittsrecht mehr', 'Die Frist bleibt unverändert bei 14 Tagen'],
            correctIndex: 1,
            explanation: 'Informiert der Verkäufer nicht ordnungsgemäß über das Rücktrittsrecht, verlängert sich die Rücktrittsfrist auf bis zu 12 Monate und 14 Kalendertage.',
          },
          {
            question: 'Ab welchem Zeitpunkt beginnt die 14-tägige Rücktrittsfrist bei einer Warenbestellung im Onlineshop in der Regel zu laufen?',
            options: ['Ab dem Tag des Vertragsabschlusses', 'Ab dem Tag der Lieferung der Ware', 'Ab dem Tag der Rechnungsstellung', 'Ab dem ersten Werktag des Monats'],
            correctIndex: 1,
            explanation: 'Bei Warenbestellungen beginnt die Rücktrittsfrist in der Regel mit dem Tag der Lieferung der Ware zu laufen.',
          },
        ],
      },
      {
        id: 'bestandteile-kaufvertrag',
        title: 'Bestandteile des Kaufvertrags',
        questions: [
          {
            question: 'Welche drei Bestandteile zählen zu den gesetzlichen Mindestbestandteilen eines Kaufvertrages?',
            options: ['Vertragspartner, Qualität, Menge', 'Preis, Lieferbedingungen, Zahlungsbedingungen', 'Garantie, Verpackung, Eigentumsvorbehalt', 'AGB, Rabatt, Skonto'],
            correctIndex: 0,
            explanation: 'Vertragspartner (Käufer und Verkäufer), Qualität und Menge sind die gesetzlichen Mindestbestandteile – ohne sie kommt kein gültiger Kaufvertrag zustande.',
          },
          {
            question: 'Loopy vereinbart mit einem Kakaolieferanten, dass die Bohnen „laut vorliegendem Muster" geliefert werden müssen. Um welche Form der Qualitätsfestlegung handelt es sich?',
            options: ['Beschreibung', 'Muster', 'Normen/Gütezeichen', 'Besichtigung'],
            correctIndex: 1,
            explanation: 'Beim Kauf nach Muster liefert der Verkäufer ein Vergleichsstück, dessen Beschaffenheit die gelieferte Ware genau entsprechen muss.',
          },
          {
            question: 'Welche Form der Mengenangabe liegt vor, wenn im Kaufvertrag „circa 500 kg" vereinbart wird?',
            options: ['Vertrag mit genauer Mengenangabe', 'Vertrag mit ungefährer Mengenangabe', 'Vertrag ohne Mengenangabe (Bausch und Bogen)', 'Vertrag mit offener Mengenangabe'],
            correctIndex: 1,
            explanation: 'Zusätze wie „circa", „ungefähr" oder „zirka" kennzeichnen eine ungefähre Mengenangabe; hier ist eine Abweichung von etwa +/-5 % üblich.',
          },
          {
            question: 'Loopys Candy Store kauft einen ganzen Posten „Restschokolade" eines Großhändlers „in Bausch und Bogen". Was bedeutet das?',
            options: [
              'Die Menge wird genau abgewogen und im Vertrag festgehalten',
              'Es wird nur eine ungefähre Menge mit Toleranz vereinbart',
              'Die gesamte vorhandene Menge wird ohne genaue Mengenangabe gekauft',
              'Loopy kann die Menge nachträglich noch ändern',
            ],
            correctIndex: 2,
            explanation: 'Beim Kauf „in Bausch und Bogen" wird die gesamte vorhandene Menge (z. B. ein ganzes Lager) ohne genaue Mengenangabe verkauft.',
          },
          {
            question: 'Wie nennt man den Preis, der sich durch Angebot und Nachfrage an der Börse oder auf einem Markt frei bildet?',
            options: ['Wettbewerbspreis', 'Kostenorientierter Preis', 'Markt- bzw. Börsenpreis', 'Festpreis'],
            correctIndex: 2,
            explanation: 'Der Markt- bzw. Börsenpreis entsteht durch das freie Zusammenspiel von Angebot und Nachfrage.',
          },
          {
            question: 'Ein Konkurrent von Loopy senkt die Preise für Pralinen. Loopy passt seine eigenen Preise entsprechend an, um wettbewerbsfähig zu bleiben. Welche Preisbildung wendet Loopy an?',
            options: ['Kostenorientierte Preisbildung', 'Wettbewerbsorientierte Preisbildung', 'Marktpreisbildung', 'Naturalrabatt'],
            correctIndex: 1,
            explanation: 'Bei der wettbewerbsorientierten Preisbildung orientiert sich das Unternehmen an den Preisen der Konkurrenz.',
          },
          {
            question: 'Loopy gewährt einem Stammkunden, der 100 kg Pralinen kauft, zwei zusätzliche Kilogramm gratis. Um welche Form des Rabatts handelt es sich?',
            options: ['Mengenrabatt', 'Naturalrabatt', 'Sonderrabatt', 'Skonto'],
            correctIndex: 1,
            explanation: 'Beim Naturalrabatt erhält der Käufer zusätzliche Ware statt eines Preisnachlasses in Geld.',
          },
          {
            question: 'Was versteht man unter „Skonto"?',
            options: [
              'Einen Preisnachlass für große Abnahmemengen',
              'Einen Preisnachlass bei besonders schneller (vorzeitiger) Zahlung',
              'Einen Rabatt für Stammkunden',
              'Eine Vertragsstrafe bei verspäteter Lieferung',
            ],
            correctIndex: 1,
            explanation: 'Skonto ist ein Preisnachlass, den der Käufer erhält, wenn er innerhalb einer kurzen Frist (z. B. 8 Tage) bezahlt.',
          },
          {
            question: 'Loopy bestellt Pralinenschachteln „ab Werk". Was bedeutet diese Lieferbedingung?',
            options: [
              'Der Verkäufer trägt Kosten und Risiko bis zur Wohnung des Käufers',
              'Der Käufer holt die Ware beim Verkäufer ab und trägt ab dort Kosten und Risiko',
              'Der Verkäufer liefert kostenlos bis vor die Haustür',
              'Kosten und Risiko werden zeitlich getrennt übertragen',
            ],
            correctIndex: 1,
            explanation: '„Ab Werk" bedeutet, dass der Käufer die Ware beim Verkäufer abholt und ab der Übergabe im Betrieb des Verkäufers Kosten und Risiko trägt.',
          },
          {
            question: 'Wozu dient ein Eigentumsvorbehalt im Kaufvertrag?',
            options: [
              'Der Käufer wird bis zur vollständigen Bezahlung nicht Eigentümer der Ware, der Verkäufer sichert sich ab',
              'Der Verkäufer verzichtet auf sein Eigentum an der Ware',
              'Der Käufer erhält sofort das volle Eigentum, unabhängig von der Zahlung',
              'Er regelt nur die Verpackung der Ware',
            ],
            correctIndex: 0,
            explanation: 'Mit dem Eigentumsvorbehalt bleibt der Verkäufer bis zur vollständigen Bezahlung Eigentümer der Ware und sichert sich so ab.',
          },
        ],
      },
      {
        id: 'schriftverkehr-kaufvertrag',
        title: 'Vom Angebot bis zur Rechnung',
        questions: [
          {
            question: 'In welcher Reihenfolge laufen die Phasen eines Kaufvertrages üblicherweise ab?',
            options: ['Erfüllung – Abschluss – Anbahnung', 'Anbahnung – Abschluss – Erfüllung', 'Abschluss – Anbahnung – Erfüllung', 'Erfüllung – Anbahnung – Abschluss'],
            correctIndex: 1,
            explanation: 'Ein Kaufvertrag durchläuft die Phasen Anbahnung, Abschluss und Erfüllung.',
          },
          {
            question: 'Ein Kunde schickt Loopy eine Anfrage, ohne konkrete Mengen oder einen bestimmten Liefertermin zu nennen, sondern bittet nur allgemein um einen Katalog. Um welche Art von Anfrage handelt es sich?',
            options: ['Gezielte Anfrage', 'Allgemeine Anfrage', 'Verbindliches Angebot', 'Bestellung'],
            correctIndex: 1,
            explanation: 'Bei einer allgemeinen Anfrage möchte der Interessent nur grundlegende Informationen wie Kataloge oder Preislisten erhalten.',
          },
          {
            question: 'Welche Eigenschaft hat ein „verlangtes Angebot"?',
            options: [
              'Es wird ohne Anfrage vom Verkäufer verschickt',
              'Es wird auf eine Anfrage des Käufers hin erstellt',
              'Es ist niemals rechtlich bindend',
              'Es enthält keine Preisangaben',
            ],
            correctIndex: 1,
            explanation: 'Ein verlangtes Angebot wird erstellt, nachdem ein Kunde eine Anfrage gestellt hat.',
          },
          {
            question: 'Loopy erhält von zwei Zulieferern Angebote für Kakaobohnen und vergleicht Preis, Lieferzeit und Zahlungsbedingungen. Was macht Loopy hier?',
            options: ['Eine Anfrage', 'Einen Angebotsvergleich', 'Eine Bestellung', 'Eine Auftragsbestätigung'],
            correctIndex: 1,
            explanation: 'Beim Angebotsvergleich werden mehrere Angebote hinsichtlich Preis, Lieferung und weiterer Bedingungen gegenübergestellt, um das beste auszuwählen.',
          },
          {
            question: 'Loopy bestellt genau die Ware, Menge und Konditionen, die im Angebot des Verkäufers standen. Muss der Verkäufer eine Auftragsbestätigung ausstellen?',
            options: [
              'Ja, immer zwingend',
              'Nein, da der Vertrag bereits durch die übereinstimmende Bestellung zustande gekommen ist',
              'Nur wenn der Käufer ausdrücklich danach fragt',
              'Ja, weil ohne Auftragsbestätigung kein Vertrag gültig ist',
            ],
            correctIndex: 1,
            explanation: 'Entspricht die Bestellung genau dem vorherigen Angebot, ist der Vertrag bereits geschlossen; eine Auftragsbestätigung ist dann nicht zwingend erforderlich.',
          },
          {
            question: 'Ein Kunde bestellt bei Loopy abweichend vom ursprünglichen Angebot eine andere Menge. Was muss der Verkäufer nun tun, damit ein gültiger Vertrag zustande kommt?',
            options: [
              'Nichts, der Vertrag gilt automatisch',
              'Eine Auftragsbestätigung mit den neuen Bedingungen ausstellen, die der Käufer akzeptieren muss',
              'Die Bestellung ignorieren',
              'Sofort liefern',
            ],
            correctIndex: 1,
            explanation: 'Weicht die Bestellung vom Angebot ab, muss der Verkäufer eine Auftragsbestätigung erstellen, die als neues Angebot gilt und vom Käufer angenommen werden muss.',
          },
          {
            question: 'Welches Dokument begleitet die Ware bei der Lieferung und dient als Nachweis über Art und Menge der gelieferten Produkte?',
            options: ['Rechnung', 'Lieferschein', 'Anfrage', 'Auftragsbestätigung'],
            correctIndex: 1,
            explanation: 'Der Lieferschein begleitet die Warenlieferung und listet die gelieferten Positionen auf.',
          },
          {
            question: 'Welche Angabe muss laut Umsatzsteuergesetz (UStG) auf einer ordnungsgemäßen Rechnung enthalten sein?',
            options: ['Das Lieblingsprodukt des Kunden', 'Die UID-Nummer des liefernden Unternehmens', 'Der Name des Lagerarbeiters', 'Die Telefonnummer der Konkurrenz'],
            correctIndex: 1,
            explanation: 'Zu den gesetzlichen Rechnungsbestandteilen zählen u. a. Name und Anschrift beider Parteien, Menge, Entgelt, Steuersatz, Ausstellungsdatum, Rechnungsnummer und die UID-Nummer.',
          },
          {
            question: 'Was passiert sinnvollerweise als Erstes, wenn bei Loopy eine Warenlieferung eintrifft?',
            options: ['Die Rechnung sofort bezahlen', 'Die Produkte annehmen und prüfen bzw. einordnen', 'Eine Reklamation einreichen', 'Die Zahlung veranlassen, ohne zu prüfen'],
            correctIndex: 1,
            explanation: 'Zuerst werden die gelieferten Produkte angenommen und geprüft/eingeordnet, danach wird die Rechnung mit Bestellung und Lieferschein verglichen und schließlich fristgerecht bezahlt.',
          },
          {
            question: 'Bis wann sollte eine Rechnung üblicherweise beglichen werden, sofern kein Skonto in Anspruch genommen wird?',
            options: ['Sofort bei Erhalt, unabhängig vom Datum', 'Innerhalb der vereinbarten Zahlungsfrist (z. B. 30 Tage)', 'Erst nach einem Jahr', 'Nie, Rechnungen verjähren automatisch'],
            correctIndex: 1,
            explanation: 'Rechnungen müssen fristgerecht, also innerhalb der vereinbarten Zahlungsfrist, beglichen werden – sonst gerät der Käufer in Zahlungsverzug.',
          },
        ],
      },
      {
        id: 'zahlungsformen-1jg',
        title: 'Zahlungsformen',
        questions: [
          {
            question: 'Ein Kunde bezahlt seine Pralinen im Loopys Candy Store direkt mit Münzen und Scheinen an der Kassa. Um welche Zahlungsform handelt es sich?',
            options: ['Barzahlung', 'Überweisung', 'Lastschrift', 'M-Payment'],
            correctIndex: 0,
            explanation: 'Bei der Barzahlung wird direkt mit Bargeld (Münzen und Banknoten) bezahlt.',
          },
          {
            question: 'Welches Sicherheitsmerkmal von Banknoten erkennt man, indem man den Schein gegen das Licht hält?',
            options: ['Kippeffekt', 'Portrait-Wasserzeichen', 'Mikroschrift', 'Reliefdruck'],
            correctIndex: 1,
            explanation: 'Das Portrait-Wasserzeichen wird beim Gegenlichthalten sichtbar und ist ein wichtiges Sicherheitsmerkmal echter Banknoten.',
          },
          {
            question: 'Loopy eröffnet gemeinsam mit seiner Geschäftspartnerin ein Konto, bei dem jede und jeder allein über das Konto verfügen kann. Um welche Kontoart handelt es sich?',
            options: ['Und-Konto', 'Oder-Konto', 'Einzelkonto', 'Sparkonto'],
            correctIndex: 1,
            explanation: 'Beim Oder-Konto (Gemeinschaftskonto) kann jede zeichnungsberechtigte Person allein über das Konto verfügen.',
          },
          {
            question: 'Wie nennt man eine Zahlungsanweisung, mit der Loopy regelmäßig wiederkehrende, gleichbleibende Beträge (z. B. Miete) automatisch überweisen lässt?',
            options: ['Einziehungsauftrag', 'Dauerauftrag', 'Nachnahme', 'Skonto'],
            correctIndex: 1,
            explanation: 'Ein Dauerauftrag überweist automatisch regelmäßig gleichbleibende Beträge an einen festgelegten Empfänger.',
          },
          {
            question: 'Loopy erlaubt seinem Stromanbieter, den jeweils fälligen Betrag selbstständig von seinem Konto einzuziehen. Wie heißt dieses Verfahren?',
            options: ['Dauerauftrag', 'SEPA-Lastschriftverfahren (Einziehungsauftrag)', 'Barzahlung', 'Kreditkartenzahlung'],
            correctIndex: 1,
            explanation: 'Beim SEPA-Lastschriftverfahren zieht der Zahlungsempfänger den fälligen Betrag selbst vom Konto des Zahlungspflichtigen ein.',
          },
          {
            question: 'Wie werden Zinsen genannt, die eine Bank dem Kontoinhaber für ein Guthaben auf dem Girokonto gutschreibt?',
            options: ['Sollzinsen', 'Habenzinsen', 'Verzugszinsen', 'Überziehungszinsen'],
            correctIndex: 1,
            explanation: 'Habenzinsen werden dem Kontoinhaber für ein Guthaben gutgeschrieben; Sollzinsen fallen dagegen bei Überziehung des Kontos an.',
          },
          {
            question: 'Wofür stehen IBAN und BIC?',
            options: [
              'Internationale Kontonummer und internationaler Bankidentifikationscode',
              'Interne Bankauskunft und Bankidentifikationscode',
              'Internationale Bankauszahlungsnummer und Bankkontocode',
              'Individuelle Bankangabe und Bankinternes Codesystem',
            ],
            correctIndex: 0,
            explanation: 'IBAN (International Bank Account Number) ist die internationale Kontonummer, BIC (Bank Identifier Code) identifiziert die Bank eindeutig.',
          },
          {
            question: 'Loopy bezahlt online mit seiner Karte, deren Betrag sofort vom Girokonto abgebucht wird. Um welche Kartenart handelt es sich?',
            options: ['Kreditkarte ("pay later")', 'Debitkarte ("pay now")', 'Prepaidkarte ("pay before")', 'Geschenkkarte'],
            correctIndex: 1,
            explanation: 'Bei der Debitkarte wird der Betrag sofort ("pay now") vom Girokonto abgebucht.',
          },
          {
            question: 'Wie heißt das Verfahren, bei dem Loopy eine Online-Überweisung zusätzlich per Code auf seinem Smartphone bestätigen muss?',
            options: ['TAN-Verfahren (z. B. Push-TAN)', 'Skonto', 'Nachnahme', 'Lastschriftverfahren'],
            correctIndex: 0,
            explanation: 'Das TAN-Verfahren (z. B. Push-TAN) dient der zusätzlichen Absicherung von Online-Banking-Transaktionen.',
          },
          {
            question: 'Ein Kunde bezahlt seine Bestellung im Loopy-Onlineshop bequem direkt über sein Smartphone mit einer Bezahl-App. Wie nennt man diese Zahlungsform?',
            options: ['Nachnahme', 'M-Payment (Mobile Payment)', 'Skonto', 'Dauerauftrag'],
            correctIndex: 1,
            explanation: 'M-Payment bezeichnet das Bezahlen mit dem Smartphone, z. B. über eine Bezahl-App.',
          },
        ],
      },
      {
        id: 'unzuverlaessige-verkaeufer',
        title: 'Unzuverlässige Verkäufer',
        questions: [
          {
            question: 'Wann gerät ein Verkäufer in Lieferverzug?',
            options: [
              'Wenn er die Ware zu einem falschen Preis anbietet',
              'Wenn er die geschuldete Leistung nicht rechtzeitig oder nicht vertragsgemäß erbringt',
              'Wenn der Käufer die Ware nicht abholt',
              'Wenn eine Rechnung fehlerhaft ist',
            ],
            correctIndex: 1,
            explanation: 'Lieferverzug liegt vor, wenn der Verkäufer die vereinbarte Leistung nicht rechtzeitig oder nicht vertragsgemäß erbringt.',
          },
          {
            question: 'Loopy bestellt für ein Weihnachtsfest extra Pralinenschachteln mit Fixtermin „spätestens 20. Dezember". Der Lieferant liefert erst am 27. Dezember. Um welche Art von Geschäft handelte es sich?',
            options: ['Gewöhnliches Termingeschäft', 'Fixgeschäft', 'Vorauszahlungsgeschäft', 'Bausch-und-Bogen-Geschäft'],
            correctIndex: 1,
            explanation: 'Beim Fixgeschäft ist die Einhaltung des Liefertermins für den Erfolg des Geschäfts wesentlich (z. B. Weihnachtsware); wird der Termin überschritten, entfällt in der Regel das Interesse an der verspäteten Lieferung.',
          },
          {
            question: 'Was muss der Käufer bei einem gewöhnlichen Termingeschäft in der Regel zuerst tun, bevor er vom Vertrag zurücktreten kann?',
            options: ['Sofort zurücktreten, ohne weitere Schritte', 'Eine angemessene Nachfrist setzen', 'Schadenersatz einklagen', 'Die Ware trotzdem annehmen'],
            correctIndex: 1,
            explanation: 'Beim gewöhnlichen Termingeschäft muss der Käufer dem Verkäufer meist zunächst eine angemessene Nachfrist setzen, bevor er zurücktreten kann.',
          },
          {
            question: 'Welche Art von Mangel liegt vor, wenn ein Fehler an der Ware bereits bei sorgfältiger Prüfung sofort erkennbar ist?',
            options: ['Versteckter (geheimer) Mangel', 'Offener Mangel', 'Arglistig verschwiegener Mangel', 'Unbehebbarer Mangel'],
            correctIndex: 1,
            explanation: 'Ein offener Mangel ist bei der Prüfung sofort ohne Weiteres erkennbar.',
          },
          {
            question: 'Loopy entdeckt erst Monate nach dem Kauf einer neuen Verpackungsmaschine einen Fabrikationsfehler, der bei der Übernahme nicht erkennbar war. Um welche Mangelart handelt es sich?',
            options: ['Offener Mangel', 'Versteckter (geheimer) Mangel', 'Geringfügiger Mangel', 'Wesentlicher Mangel'],
            correctIndex: 1,
            explanation: 'Ein versteckter (geheimer) Mangel wird erst nach einiger Zeit bemerkbar und war bei der Übergabe nicht erkennbar.',
          },
          {
            question: 'Wie lange beträgt die gesetzliche Gewährleistungsfrist in Österreich für neue bewegliche Sachen (z. B. eine Maschine)?',
            options: ['6 Monate', '1 Jahr', '2 Jahre', '10 Jahre'],
            correctIndex: 2,
            explanation: 'Für neue bewegliche Sachen gilt eine gesetzliche Gewährleistungsfrist von 2 Jahren ab Übergabe.',
          },
          {
            question: 'Welche Rechte hat der Käufer bei einem mangelhaften Produkt in erster Linie (primäre Gewährleistungsbehelfe)?',
            options: ['Sofortige Vertragsauflösung', 'Verbesserung (Reparatur) oder Austausch', 'Nur Preisminderung', 'Schadenersatz in beliebiger Höhe'],
            correctIndex: 1,
            explanation: 'Bei Mängeln hat der Käufer zunächst Anspruch auf Verbesserung (Reparatur) oder Austausch des mangelhaften Produkts.',
          },
          {
            question: 'Worin unterscheidet sich eine Garantie von der gesetzlichen Gewährleistung?',
            options: [
              'Garantie ist gesetzlich verpflichtend, Gewährleistung freiwillig',
              'Garantie ist eine freiwillige Zusage des Verkäufers/Herstellers, Gewährleistung ist gesetzlich vorgeschrieben',
              'Beide sind identisch',
              'Garantie gilt nur für digitale Produkte',
            ],
            correctIndex: 1,
            explanation: 'Die Garantie ist eine freiwillige Zusage (oft zeitlich begrenzt), während die Gewährleistung eine gesetzliche Verpflichtung des Verkäufers ist.',
          },
          {
            question: 'Was sollte Loopy tun, wenn er auf einer Rechnung seines Lieferanten eine falsche Menge oder einen falschen Preis entdeckt?',
            options: [
              'Die Rechnung einfach ignorieren',
              'Die Rechnung sofort und ohne Rückfrage bezahlen',
              'Die Fehler reklamieren und eine korrigierte Rechnung verlangen',
              'Die Ware zurückschicken, ohne die Rechnung zu prüfen',
            ],
            correctIndex: 2,
            explanation: 'Bei einer fehlerhaften Rechnung sollte der Käufer den Fehler reklamieren und eine korrigierte, richtige Rechnung anfordern.',
          },
        ],
      },
      {
        id: 'unzuverlaessige-kaeufer',
        title: 'Unzuverlässige Käufer',
        questions: [
          {
            question: 'Wann gerät ein Käufer in Annahmeverzug?',
            options: [
              'Wenn er zu früh bezahlt',
              'Wenn er die vertragsgemäß gelieferte Ware nicht annimmt, obwohl er dazu verpflichtet wäre',
              'Wenn er eine Reklamation einreicht',
              'Wenn er den Kaufvertrag storniert, bevor geliefert wurde',
            ],
            correctIndex: 1,
            explanation: 'Annahmeverzug liegt vor, wenn der Käufer die ihm ordnungsgemäß angebotene Ware nicht annimmt.',
          },
          {
            question: 'Ein Kunde bestellt bei Loopy eine große Menge Pralinen für eine Feier, holt sie aber trotz mehrfacher Erinnerung nicht ab. Welche Möglichkeit hat Loopy neben dem Festhalten am Vertrag?',
            options: [
              'Er muss die Pralinen kostenlos verschenken',
              'Er kann vom Vertrag zurücktreten oder einen Selbsthilfeverkauf durchführen',
              'Er darf nichts unternehmen',
              'Er muss automatisch den Vertrag verlängern',
            ],
            correctIndex: 1,
            explanation: 'Bei Annahmeverzug kann der Verkäufer vom Vertrag zurücktreten oder die Ware im Rahmen eines Selbsthilfeverkaufs anderweitig verkaufen.',
          },
          {
            question: 'Wann gerät ein Käufer in Zahlungsverzug?',
            options: ['Wenn er die Rechnung noch vor Fälligkeit bezahlt', 'Wenn er den fälligen Kaufpreis nicht rechtzeitig bezahlt', 'Wenn er zu viel bezahlt', 'Wenn er die Ware zu früh abholt'],
            correctIndex: 1,
            explanation: 'Zahlungsverzug tritt ein, wenn der Käufer den Kaufpreis nicht bis zur vereinbarten Fälligkeit begleicht.',
          },
          {
            question: 'Wie hoch sind die gesetzlichen Verzugszinsen bei Zahlungsverzug zwischen zwei Unternehmen (B2B) in Österreich?',
            options: ['4 % über dem Basiszinssatz', '9,2 Prozentpunkte über dem Basiszinssatz', 'Genau 4 % fix', '1 % pro Monat'],
            correctIndex: 1,
            explanation: 'Bei B2B-Geschäften betragen die gesetzlichen Verzugszinsen 9,2 Prozentpunkte über dem Basiszinssatz, bei B2C/C2C-Geschäften 4 %.',
          },
          {
            question: 'Welche der folgenden Möglichkeiten hat ein Verkäufer bei Zahlungsverzug des Käufers?',
            options: [
              'Nur Klage vor Gericht ist möglich',
              'Am Vertrag festhalten und mahnen ODER vom Vertrag zurücktreten',
              'Er muss automatisch den Vertrag stornieren',
              'Er darf die Ware sofort zurückholen, ohne den Käufer zu informieren',
            ],
            correctIndex: 1,
            explanation: 'Der Verkäufer kann bei Zahlungsverzug entweder am Vertrag festhalten und den Käufer mahnen, oder unter bestimmten Voraussetzungen vom Vertrag zurücktreten.',
          },
          {
            question: 'Ein Kunde von Loopy hat seine Rechnung noch nicht bezahlt. Loopy schickt ihm zunächst eine freundliche Erinnerung. Wie nennt man diesen ersten Schritt des Mahnwesens?',
            options: ['Letzte Mahnung', 'Zahlungserinnerung (1. Mahnung)', 'Inkasso', 'Klage'],
            correctIndex: 1,
            explanation: 'Die Zahlungserinnerung ist meist der erste, freundliche Schritt im Mahnwesen.',
          },
          {
            question: 'Was ist typischerweise der letzte außergerichtliche Schritt im Mahnwesen, bevor ein Unternehmen ein gerichtliches Mahnverfahren einleitet?',
            options: ['Die erste Zahlungserinnerung', 'Die letzte Mahnung (oft mit Fristsetzung und Androhung rechtlicher Schritte)', 'Der Kaufvertrag', 'Die Rechnung selbst'],
            correctIndex: 1,
            explanation: 'Nach mehreren erfolglosen Mahnstufen folgt meist die letzte Mahnung, bevor rechtliche Schritte (z. B. gerichtliches Mahnverfahren) eingeleitet werden.',
          },
          {
            question: 'Was ist ein Zahlungsbefehl im gerichtlichen Mahnverfahren?',
            options: [
              'Eine freiwillige Zahlungsaufforderung ohne rechtliche Wirkung',
              'Eine gerichtliche Anordnung an den Schuldner, den Betrag zu zahlen oder Einspruch zu erheben',
              'Eine Art Kaufvertrag',
              'Ein Kassabeleg',
            ],
            correctIndex: 1,
            explanation: 'Der Zahlungsbefehl ist eine gerichtliche Anordnung, mit der der Schuldner aufgefordert wird, den offenen Betrag zu zahlen oder fristgerecht Einspruch zu erheben.',
          },
          {
            question: 'Was passiert, wenn der Schuldner innerhalb der Frist keinen Einspruch gegen den Zahlungsbefehl erhebt?',
            options: [
              'Der Zahlungsbefehl verliert automatisch seine Gültigkeit',
              'Der Zahlungsbefehl wird rechtskräftig und vollstreckbar',
              'Der Gläubiger muss erneut mahnen',
              'Der Fall wird automatisch abgeschlossen, ohne Zahlung',
            ],
            correctIndex: 1,
            explanation: 'Erhebt der Schuldner keinen Einspruch, wird der Zahlungsbefehl rechtskräftig und vollstreckbar.',
          },
        ],
      },
      {
        id: 'rechtsdurchsetzung',
        title: 'Wenn der Streit eskaliert',
        questions: [
          {
            question: 'Was sollte der erste Schritt sein, wenn ein Vertragspartner seine Pflichten verletzt hat?',
            options: ['Sofort Klage einreichen', 'Die eigenen Interessen klären, was man eigentlich erreichen will', 'Sofort den Kontakt abbrechen', 'Die Ware sofort zurückschicken'],
            correctIndex: 1,
            explanation: 'Zuerst sollten die eigenen Interessen geklärt werden: Was will man eigentlich erreichen?',
          },
          {
            question: 'Loopy hat Streit mit einem Lieferanten über eine mangelhafte Lieferung. Bevor er vor Gericht zieht, sucht er das klärende Gespräch mit dem Lieferanten. Wie nennt man diesen ersten Schritt?',
            options: ['Klage', 'Benachrichtigung des Vertragspartners', 'Vollstreckung', 'Mahnverfahren'],
            correctIndex: 1,
            explanation: 'Ein wichtiger früher Schritt ist die Benachrichtigung bzw. das Gespräch mit dem Vertragspartner, um die Angelegenheit zu klären.',
          },
          {
            question: 'Welchen Nachteil hat ein Rechtsstreit vor Gericht typischerweise?',
            options: ['Er ist meist sehr schnell und kostenlos', 'Er kann hohe Kosten verursachen und lange dauern', 'Er garantiert immer den Sieg', 'Er erfordert keine Beweise'],
            correctIndex: 1,
            explanation: 'Rechtsstreitigkeiten vor Gericht können teuer sein (z. B. Gerichts- und Anwaltskosten) und lange dauern.',
          },
          {
            question: 'Wer trägt im Zivilprozess grundsätzlich die Beweislast für eine strittige Behauptung?',
            options: ['Immer der Beklagte', 'Grundsätzlich derjenige, der sich auf die Behauptung beruft', 'Immer das Gericht', 'Niemand, das Gericht entscheidet ohne Beweise'],
            correctIndex: 1,
            explanation: 'Grundsätzlich muss derjenige, der eine Behauptung aufstellt, diese auch beweisen (Beweislast).',
          },
          {
            question: 'Statt zu klagen, einigt sich Loopy in einem persönlichen Gespräch kulant mit einem unzufriedenen Kunden auf einen Preisnachlass. Wie nennt man diese Form der außergerichtlichen Streitbeilegung?',
            options: ['Mediation', 'Kulanz', 'Schiedsgericht', 'Klage'],
            correctIndex: 1,
            explanation: 'Kulanz bedeutet, dass ein Unternehmen freiwillig entgegenkommt, ohne rechtlich dazu verpflichtet zu sein.',
          },
          {
            question: 'Was ist eine Mediation?',
            options: ['Ein gerichtliches Urteil', 'Ein Verfahren, bei dem ein neutraler Vermittler bei der einvernehmlichen Lösung eines Streits hilft', 'Ein Zahlungsbefehl', 'Eine Form der Zwangsvollstreckung'],
            correctIndex: 1,
            explanation: 'Bei der Mediation unterstützt ein neutraler Mediator die Streitparteien dabei, selbst eine einvernehmliche Lösung zu finden.',
          },
          {
            question: 'Was ist der Unterschied zwischen einer Schlichtungsstelle und einem Schiedsgericht?',
            options: [
              'Es gibt keinen Unterschied',
              'Die Schlichtungsstelle spricht meist unverbindliche Empfehlungen aus, ein Schiedsgericht fällt eine verbindliche Entscheidung',
              'Nur das Schiedsgericht ist kostenlos',
              'Eine Schlichtungsstelle kann nur bei B2B-Geschäften angerufen werden',
            ],
            correctIndex: 1,
            explanation: 'Schlichtungsstellen geben meist unverbindliche Empfehlungen ab, während ein Schiedsgericht wie ein privates Gericht eine verbindliche Entscheidung trifft.',
          },
          {
            question: 'Welche Alternativen zum Rechtsstreit vor Gericht sollten in Erwägung gezogen werden, bevor geklagt wird?',
            options: ['Sofortige Zwangsvollstreckung', 'Alternativen wie Kulanz, Mediation, Schlichtungsstelle oder Schiedsgericht', 'Direkt die Polizei rufen', 'Die Sache einfach vergessen'],
            correctIndex: 1,
            explanation: 'Vor einem teuren und langwierigen Gerichtsverfahren sollten Alternativen wie Kulanz, Mediation, Schlichtungsstelle oder Schiedsgericht erwogen werden.',
          },
        ],
      },
      {
        id: 'unternehmensgruendung-schritte',
        title: 'Schritte der Unternehmensgründung',
        questions: [
          {
            question: 'Welchen Vorteil hat die selbstständige Erwerbstätigkeit gegenüber der unselbstständigen?',
            options: ['Fixes, sicheres Gehalt', 'Freie Zeiteinteilung und eigene Entscheidungsfreiheit', 'Kein unternehmerisches Risiko', 'Kein finanzieller Aufwand nötig'],
            correctIndex: 1,
            explanation: 'Selbstständige können ihre Zeit frei einteilen und Entscheidungen eigenständig treffen – tragen dafür aber auch das unternehmerische Risiko.',
          },
          {
            question: 'Bevor Loopy seinen eigenen Candy Store gründete, überlegte er, ob er lieber ein bestehendes Geschäft übernimmt, ein Franchise eröffnet oder ganz neu gründet. Was hat er hier gemacht?',
            options: ['Einen Gewerbeschein beantragt', 'Verschiedene Wege zur eigenen Geschäftsidee abgewogen', 'Eine Gewerbeberechtigung geprüft', 'Einen Kaufvertrag abgeschlossen'],
            correctIndex: 1,
            explanation: 'Es gibt verschiedene Wege zur eigenen Geschäftsidee: Neugründung, Übernahme eines bestehenden Unternehmens oder Franchising.',
          },
          {
            question: 'Was versteht man unter „Franchising"?',
            options: [
              'Die komplette Neuerfindung eines Geschäftsmodells',
              'Die Nutzung eines bereits erfolgreichen Geschäftskonzepts gegen Gebühr von einem Franchisegeber',
              'Die Übernahme eines Unternehmens von den eigenen Eltern',
              'Eine staatliche Förderung für Neugründer',
            ],
            correctIndex: 1,
            explanation: 'Beim Franchising nutzt der Franchisenehmer ein bereits erprobtes Geschäftskonzept eines Franchisegebers gegen Gebühr.',
          },
          {
            question: 'Welche Voraussetzung muss eine natürliche Person mindestens erfüllen, um in Österreich grundsätzlich ein Gewerbe anmelden zu können?',
            options: [
              'Mindestens 25 Jahre alt sein',
              'Volljährig sein (mind. 18 Jahre) und die allgemeine Zuverlässigkeit besitzen',
              'Ein abgeschlossenes Studium haben',
              'Bereits ein Unternehmen besessen haben',
            ],
            correctIndex: 1,
            explanation: 'Zu den allgemeinen Voraussetzungen für eine Gewerbeberechtigung zählen u. a. Volljährigkeit (18 Jahre) sowie EU/EWR-Staatsbürgerschaft (oder Gleichstellung) und keine Ausschlussgründe.',
          },
          {
            question: 'Für den Betrieb von Loopys Candy Store als Konditorei benötigt Loopy einen Nachweis über seine fachliche Qualifikation. Wie nennt man diesen Nachweis?',
            options: ['Zuverlässigkeitsprüfung', 'Befähigungsnachweis', 'Gewerbeschein', 'Firmenbuchauszug'],
            correctIndex: 1,
            explanation: 'Der Befähigungsnachweis belegt die fachliche und kaufmännische Qualifikation für ein reglementiertes Gewerbe.',
          },
          {
            question: 'Worin unterscheidet sich ein freies Gewerbe von einem reglementierten Gewerbe?',
            options: [
              'Freie Gewerbe benötigen einen Befähigungsnachweis, reglementierte nicht',
              'Reglementierte Gewerbe erfordern zusätzlich einen Befähigungsnachweis bzw. eine Zuverlässigkeitsprüfung, freie Gewerbe nicht',
              'Es gibt keinen Unterschied',
              'Freie Gewerbe dürfen nur von Ausländern betrieben werden',
            ],
            correctIndex: 1,
            explanation: 'Für reglementierte Gewerbe (z. B. Bäcker, Elektrotechniker) ist zusätzlich ein Befähigungsnachweis nötig, für freie Gewerbe genügt die allgemeine Gewerbeberechtigung.',
          },
          {
            question: 'Wozu dient die Überprüfung einer Geschäftsidee, bevor man ein Unternehmen gründet?',
            options: [
              'Um zu prüfen, ob die Idee für den Kunden einen Nutzen bringt, realisierbar und wirtschaftlich ist',
              'Um die Steuererklärung vorzubereiten',
              'Um sofort einen Kredit zu bekommen',
              'Um die Konkurrenz zu informieren',
            ],
            correctIndex: 0,
            explanation: 'Bei der Überprüfung wird untersucht, ob die Geschäftsidee einen Kundennutzen bietet, realisierbar, wirtschaftlich und für den Gründer geeignet ist.',
          },
          {
            question: 'Was ist typischerweise kein Vorteil, sondern ein Nachteil der Selbstständigkeit?',
            options: ['Freie Zeiteinteilung', 'Selbstverwirklichung', 'Höheres finanzielles Risiko und unregelmäßiges Einkommen', 'Eigene Entscheidungen treffen zu können'],
            correctIndex: 2,
            explanation: 'Ein Nachteil der Selbstständigkeit ist das höhere finanzielle Risiko sowie ein oft unregelmäßiges Einkommen, vor allem in der Anfangsphase.',
          },
          {
            question: 'Was passiert bei einer Unternehmensübernahme im Gegensatz zu einer Neugründung?',
            options: [
              'Ein völlig neues Unternehmen wird von Grund auf aufgebaut',
              'Ein bereits bestehendes Unternehmen wird von einem Nachfolger weitergeführt',
              'Es entsteht automatisch eine Kapitalgesellschaft',
              'Es ist gesetzlich verboten',
            ],
            correctIndex: 1,
            explanation: 'Bei der Unternehmensübernahme wird ein bestehendes Unternehmen (z. B. von einem Familienmitglied) von einem Nachfolger übernommen und weitergeführt.',
          },
        ],
      },
      {
        id: 'wahl-der-rechtsform-1jg',
        title: 'Wahl der Rechtsform',
        questions: [
          {
            question: 'Welches Kriterium beeinflusst nicht direkt die Wahl der Rechtsform eines Unternehmens?',
            options: ['Anzahl der Eigentümer/Gesellschafter', 'Haftung', 'Kapitalaufbringung', 'Die Lieblingsfarbe des Firmenlogos'],
            correctIndex: 3,
            explanation: 'Kriterien für die Rechtsformwahl sind u. a. Anzahl der Eigentümer, Kapitalaufbringung, Haftung, Leitungsbefugnis und Erfolgsbeteiligung – nicht aber gestalterische Details wie eine Logofarbe.',
          },
          {
            question: 'Loopy gründet seinen Candy Store zunächst ganz allein, ohne Partner, und haftet dabei mit seinem gesamten Privatvermögen. Welche Rechtsform hat Loopy gewählt?',
            options: ['GmbH', 'Einzelunternehmen', 'Aktiengesellschaft', 'Offene Gesellschaft'],
            correctIndex: 1,
            explanation: 'Beim Einzelunternehmen gibt es nur einen Eigentümer, der unbeschränkt mit seinem gesamten Vermögen haftet.',
          },
          {
            question: 'Was ist ein Nachteil des Einzelunternehmens?',
            options: ['Rasche und einfache Gründung', 'Unbeschränkte Haftung mit dem Privatvermögen', 'Kein Mindestkapital nötig', 'Der Gewinn muss nicht geteilt werden'],
            correctIndex: 1,
            explanation: 'Ein zentraler Nachteil ist die unbeschränkte Haftung des Einzelunternehmers mit seinem gesamten Privatvermögen.',
          },
          {
            question: 'Zu welcher Gruppe von Rechtsformen zählt die GmbH (Gesellschaft mit beschränkter Haftung)?',
            options: ['Einzelunternehmen', 'Personengesellschaft', 'Kapitalgesellschaft', 'Verein'],
            correctIndex: 2,
            explanation: 'Die GmbH ist eine Kapitalgesellschaft, bei der die Gesellschafter grundsätzlich nur mit ihrer Kapitaleinlage haften.',
          },
          {
            question: 'Welche der folgenden Rechtsformen zählt zu den Personengesellschaften?',
            options: ['Offene Gesellschaft (OG)', 'Aktiengesellschaft (AG)', 'Gesellschaft mit beschränkter Haftung (GmbH)', 'Verein'],
            correctIndex: 0,
            explanation: 'Die OG (ebenso wie die KG) zählt zu den Personengesellschaften; AG und GmbH sind dagegen Kapitalgesellschaften.',
          },
          {
            question: 'Welches Kriterium beschreibt, wer im Unternehmen die Entscheidungen trifft und die Kontrolle ausübt?',
            options: ['Kapitalaufbringung', 'Leitungsbefugnis und Kontrolle', 'Erfolgsbeteiligung', 'Art der Rechtsform'],
            correctIndex: 1,
            explanation: 'Die Leitungsbefugnis und Kontrolle legt fest, wer im Unternehmen entscheidet und wer die Geschäfte führt.',
          },
          {
            question: 'Loopy überlegt, ob er seinen Candy Store gemeinsam mit einer Freundin gründet und beide voll persönlich haften, oder ob sie eine Kapitalgesellschaft gründen, bei der nur das Gesellschaftsvermögen haftet. Welches Kriterium steht hier im Vordergrund?',
            options: ['Kapitalaufbringung', 'Haftung', 'Erfolgsbeteiligung', 'Art der Buchführung'],
            correctIndex: 1,
            explanation: 'Hier geht es um das Kriterium Haftung – bei Personengesellschaften haften die Gesellschafter meist persönlich, bei Kapitalgesellschaften grundsätzlich nur das Gesellschaftsvermögen.',
          },
          {
            question: 'Was versteht man unter der „Erfolgsbeteiligung" als Kriterium bei der Rechtsformwahl?',
            options: ['Wie das Unternehmen benannt wird', 'Wie Gewinn und Verlust auf die Eigentümer verteilt werden', 'Welche Steuern anfallen', 'Wie viele Mitarbeiter beschäftigt werden dürfen'],
            correctIndex: 1,
            explanation: 'Die Erfolgsbeteiligung regelt, wie Gewinn und Verlust des Unternehmens unter den Eigentümern/Gesellschaftern aufgeteilt werden.',
          },
        ],
      },
      {
        id: 'businessplan-1jg',
        title: 'Der Businessplan',
        questions: [
          {
            question: 'Was ist ein Businessplan?',
            options: ['Eine Werbebroschüre für Kunden', 'Ein schriftliches Dokument, das die Geschäftsidee und deren Umsetzung darstellt', 'Ein gesetzlich vorgeschriebenes Steuerformular', 'Eine Preisliste für Produkte'],
            correctIndex: 1,
            explanation: 'Der Businessplan ist ein schriftliches Konzept, das die Geschäftsidee, den Markt und deren Umsetzung detailliert beschreibt.',
          },
          {
            question: 'Bevor Loopy seinen Candy Store gründet, erstellt er einen Businessplan, um zu prüfen, ob seine Idee realisierbar und wirtschaftlich erfolgreich sein kann, und um potenzielle Geldgeber zu überzeugen. Welche Funktion erfüllt der Businessplan hier vor allem?',
            options: ['Beurteilen und Überzeugen (von Finanzierungspartnern)', 'Steuern des laufenden Betriebs', 'Nur Werbung für Kunden', 'Buchhaltung'],
            correctIndex: 0,
            explanation: 'Der Businessplan dient u. a. dazu, die Geschäftsidee zu beurteilen (realisierbar? wirtschaftlich?) und Finanzierungspartner wie Banken von der Idee zu überzeugen.',
          },
          {
            question: 'Welche der folgenden Angaben gehört nicht zu den typischen Bestandteilen eines Businessplans?',
            options: ['Geschäftsidee und Zielgruppe', 'Marketingkonzept', 'Finanzplanung und Kapitalbedarf', 'Der Lieblingsfilm des Gründers'],
            correctIndex: 3,
            explanation: 'Ein Businessplan umfasst u. a. Geschäftsidee, Markt/Zielgruppe, Marketing, Standort, Chancen/Risiken und Finanzplanung – persönliche, geschäftsfremde Angaben gehören nicht dazu.',
          },
          {
            question: 'Warum ist die Analyse der Konkurrenz und des Marktes ein wichtiger Bestandteil des Businessplans?',
            options: [
              'Um die Konkurrenz zu kopieren',
              'Um die eigene Geschäftsidee realistisch einzuschätzen und Chancen/Risiken zu erkennen',
              'Weil es gesetzlich verlangt wird, ohne Nutzen',
              'Um die eigenen Preise beliebig zu erhöhen',
            ],
            correctIndex: 1,
            explanation: 'Die Markt- und Konkurrenzanalyse hilft, die eigene Geschäftsidee realistisch einzuschätzen und Chancen sowie Risiken frühzeitig zu erkennen.',
          },
          {
            question: 'Im Finanzplan seines Businessplans berechnet Loopy, wie viel Geld er für Miete, Maschinen und Wareneinkauf zu Beginn benötigt. Wie nennt man diese Größe?',
            options: ['Kapitalbedarf', 'Skonto', 'Deckungsbeitrag', 'Umsatzrabatt'],
            correctIndex: 0,
            explanation: 'Der Kapitalbedarf gibt an, wie viel Startkapital ein Unternehmen zur Gründung und für die ersten Monate benötigt.',
          },
          {
            question: 'Welche Funktion hat der Businessplan während des laufenden Unternehmensbetriebs?',
            options: [
              'Nur zur einmaligen Vorlage bei der Gründung',
              'Als Steuerungsinstrument, um Ziele zu überprüfen und den Kurs anzupassen',
              'Er wird nach der Gründung nicht mehr gebraucht',
              'Er dient ausschließlich als Werbematerial',
            ],
            correctIndex: 1,
            explanation: 'Der Businessplan dient auch nach der Gründung als Steuerungsinstrument, mit dem der Gründer die tatsächliche Entwicklung mit den geplanten Zielen vergleichen kann.',
          },
          {
            question: 'Was versteht man unter dem „Kundennutzen", den ein Businessplan herausarbeiten sollte?',
            options: ['Den Gewinn des Unternehmens', 'Den konkreten Vorteil, den ein Produkt oder eine Dienstleistung für den Kunden bringt', 'Die Anzahl der Mitarbeiter', 'Die Rechtsform des Unternehmens'],
            correctIndex: 1,
            explanation: 'Der Kundennutzen beschreibt, welchen konkreten Vorteil oder welches Bedürfnis das Angebot für die Kundinnen und Kunden erfüllt.',
          },
          {
            question: 'Warum sollten im Businessplan auch mögliche Risiken des Vorhabens angesprochen werden?',
            options: [
              'Um Investoren abzuschrecken',
              'Um sich realistisch mit Herausforderungen auseinanderzusetzen und Lösungsstrategien vorzubereiten',
              'Weil es vorgeschrieben ist und keinen praktischen Nutzen hat',
              'Risiken werden im Businessplan nie erwähnt',
            ],
            correctIndex: 1,
            explanation: 'Die Auseinandersetzung mit Chancen und Risiken zeigt, dass sich der Gründer realistisch mit möglichen Herausforderungen befasst hat.',
          },
        ],
      },
      {
        id: 'vertraege-mitarbeiter',
        title: 'Verträge mit Mitarbeiter:innen',
        questions: [
          {
            question: 'Was kennzeichnet einen „echten" Arbeitsvertrag?',
            options: ['Der Arbeitnehmer ist völlig unabhängig', 'Persönliche und wirtschaftliche Abhängigkeit des Arbeitnehmers vom Arbeitgeber', 'Es wird nur ein bestimmter Erfolg geschuldet', 'Es gibt keinerlei Weisungsrecht'],
            correctIndex: 1,
            explanation: 'Beim echten Arbeitsvertrag ist der Arbeitnehmer persönlich und wirtschaftlich vom Arbeitgeber abhängig und in dessen Betrieb eingegliedert.',
          },
          {
            question: 'Loopy engagiert eine Grafikdesignerin, die von zu Hause aus, mit eigenen Arbeitsmitteln und flexibler Zeiteinteilung, ein neues Logo für Loopys Candy Store entwirft, ohne fest in den Betrieb eingegliedert zu sein. Um welche Vertragsart handelt es sich am ehesten?',
            options: ['Echter Arbeitsvertrag', 'Freier Dienstvertrag', 'Lehrvertrag', 'Kollektivvertrag'],
            correctIndex: 1,
            explanation: 'Beim freien Dienstvertrag ist die/der Beschäftigte persönlich weitgehend unabhängig, bestimmt Arbeitszeit und -ort weitgehend selbst und trägt ein gewisses unternehmerisches Risiko.',
          },
          {
            question: 'Was unterscheidet einen Werkvertrag grundsätzlich von einem Arbeitsvertrag?',
            options: ['Beim Werkvertrag wird ein konkreter Erfolg (Werk) geschuldet, es entsteht kein Dienstverhältnis', 'Beim Werkvertrag gibt es keinerlei Bezahlung', 'Ein Werkvertrag kann nur mündlich geschlossen werden', 'Es gibt keinen Unterschied'],
            correctIndex: 0,
            explanation: 'Beim Werkvertrag verpflichtet sich der Auftragnehmer zur Herstellung eines bestimmten Werks (Erfolg), es entsteht dabei kein Dienstverhältnis.',
          },
          {
            question: 'Was ist ein Dienstzettel?',
            options: [
              'Ein verbindlicher, eigenständiger neuer Vertrag',
              'Eine schriftliche Aufzeichnung der wesentlichen Rechte und Pflichten aus einem bereits bestehenden Arbeitsverhältnis',
              'Ein Kündigungsschreiben',
              'Eine Gehaltsabrechnung',
            ],
            correctIndex: 1,
            explanation: 'Der Dienstzettel fasst die wesentlichen Eckpunkte des bereits abgeschlossenen Arbeitsverhältnisses schriftlich zusammen (z. B. Beginn, Entgelt, Tätigkeit), ist aber selbst kein eigener Vertrag.',
          },
          {
            question: 'Loopy stellt eine neue Verkäuferin für seinen Candy Store ein. Muss dafür zwingend ein schriftlicher Arbeitsvertrag abgeschlossen werden, damit das Arbeitsverhältnis gültig ist?',
            options: [
              'Ja, ohne schriftlichen Vertrag ist das Arbeitsverhältnis ungültig',
              'Nein, der Arbeitsvertrag ist an keine bestimmte Form gebunden, mündlich oder schlüssig reicht aus',
              'Nur bei Vollzeitstellen ist Schriftform Pflicht',
              'Nur bei Minderjährigen ist Schriftform Pflicht',
            ],
            correctIndex: 1,
            explanation: 'Der Arbeitsvertrag ist an keine bestimmte Form gebunden; er kann mündlich, schriftlich oder auch durch schlüssiges Verhalten (z. B. Arbeitsantritt) zustande kommen.',
          },
          {
            question: 'Wann beginnt ein Arbeitsverhältnis in der Regel?',
            options: ['Erst mit der ersten Gehaltszahlung', 'Mit dem tatsächlichen Dienstantritt (Beginn der Arbeitsleistung)', 'Erst nach der Probezeit', 'Erst mit Ausstellung des Dienstzettels'],
            correctIndex: 1,
            explanation: 'Das Arbeitsverhältnis beginnt grundsätzlich mit dem tatsächlichen Dienstantritt, also wenn die Arbeitsleistung tatsächlich aufgenommen wird.',
          },
          {
            question: 'Welche Beschäftigungsform bringt für den Arbeitnehmer typischerweise das höchste unternehmerische Risiko mit sich?',
            options: ['Echter Arbeitsvertrag (Angestellte:r)', 'Werkvertrag (Selbstständige:r)', 'Lehrvertrag', 'Es gibt keinen Unterschied im Risiko'],
            correctIndex: 1,
            explanation: 'Beim Werkvertrag trägt der/die Auftragnehmer:in als Selbstständige:r das volle unternehmerische Risiko für die Erstellung des vereinbarten Werks.',
          },
          {
            question: 'Muss ein Arbeitgeber bei einem echten Arbeitsverhältnis einen Dienstzettel ausstellen?',
            options: ['Nein, das ist niemals notwendig', 'Ja, sofern kein schriftlicher Dienstvertrag mit den wesentlichen Inhalten vorliegt', 'Nur bei Teilzeitbeschäftigung', 'Nur wenn der Arbeitnehmer minderjährig ist'],
            correctIndex: 1,
            explanation: 'Liegt kein schriftlicher Dienstvertrag mit den wesentlichen Inhalten vor, muss der Arbeitgeber unverzüglich einen Dienstzettel mit den wichtigsten Eckdaten ausstellen.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: '2. Jahrgang',
    color: 'blue',
    // Große Kapitel laut deiner Vorgabe: Unternehmensrechtliche Grundlagen, Internationale
    // Geschäftstätigkeit, Die Leistungserstellung im Unternehmen, Marketing, Material und
    // Warenwirtschaft, Supply Chain Management und Logistik, Handel, Business plan und
    // Unternehmensgründung.
    kapitel: [
      {
        id: 'unternehmensrechtliche-grundlagen',
        title: 'Unternehmensrechtliche Grundlagen',
        topicIds: ['unternehmer-firma-firmenbuch', 'rechtsformen-unternehmen', 'vollmachten', 'beschaeftigungsverhaeltnisse'],
      },
      {
        id: 'internationale-geschaeftstaetigkeit',
        title: 'Internationale Geschäftstätigkeit',
        topicIds: ['kaufvertraege-aussenhandel'],
      },
      {
        id: 'leistungserstellung-unternehmen-2jg',
        title: 'Die Leistungserstellung im Unternehmen',
        topicIds: ['grundlagen-leistungserstellung-2jg'],
      },
      {
        id: 'marketing-2jg',
        title: 'Marketing',
        topicIds: ['kunde-im-mittelpunkt', 'marktforschung', 'instrumente-marketings'],
      },
      {
        id: 'material-warenwirtschaft-kapitel',
        title: 'Material und Warenwirtschaft',
        topicIds: ['material-warenwirtschaft', 'beschaffungsmarketing', 'lager-transport-entsorgung'],
      },
      {
        id: 'supply-chain-logistik-kapitel',
        title: 'Supply Chain Management und Logistik',
        topicIds: ['supply-chain-management', 'logistik'],
      },
      {
        id: 'handel-kapitel',
        title: 'Handel',
        topicIds: ['der-handel'],
      },
      {
        id: 'businessplan-unternehmensgruendung-2jg-kapitel',
        title: 'Business plan und Unternehmensgründung',
        topicIds: ['businessplan-2jg'],
      },
    ],
    topics: [
      {
        id: 'unternehmer-firma-firmenbuch',
        title: 'Unternehmer, Firma & Firmenbuch',
        questions: [
          {
            question: 'Welche Voraussetzungen muss laut UGB erfüllt sein, damit jemand als Unternehmer gilt?',
            options: ['Eine auf Dauer angelegte Organisation, die eine selbstständige wirtschaftliche Tätigkeit ausübt, unabhängig von einer Gewinnabsicht', 'Eine im Firmenbuch eingetragene Kapitalgesellschaft mit mindestens einem Geschäftsführer', 'Eine natürliche Person, die hauptberuflich unselbstständig beschäftigt ist', 'Ein Betrieb mit mindestens einem angestellten Mitarbeiter'],
            correctIndex: 0,
            explanation: 'Laut UGB ist Unternehmer, wer eine auf Dauer angelegte Organisation selbstständiger wirtschaftlicher Tätigkeit betreibt - auch wenn diese nicht auf Gewinn ausgerichtet ist.',
          },
          {
            question: 'Loopy betreibt ihre Candy Store ganz allein, ohne Gesellschafter. Um welche Art von Unternehmer handelt es sich dabei?',
            options: ['Um eine juristische Person', 'Um eine Kapitalgesellschaft', 'Um eine Genossenschaft', 'Um eine natürliche Person'],
            correctIndex: 3,
            explanation: 'Da Loopy als Einzelperson selbst Trägerin von Rechten und Pflichten ist, handelt es sich um eine natürliche Person.',
          },
          {
            question: 'Welche Aussage zu Freiberuflern (z. B. Ärztinnen, Rechtsanwälten, Architekten) laut UGB trifft zu?',
            options: ['Sie gelten nur als Unternehmer, wenn sie mehr als 700.000 EUR Umsatz erzielen', 'Sie sind von der Unternehmereigenschaft laut UGB grundsätzlich ausgeschlossen', 'Sie gelten laut UGB nicht automatisch als Unternehmer, können sich aber freiwillig ins Firmenbuch eintragen lassen', 'Sie müssen sich verpflichtend ins Firmenbuch eintragen lassen wie Kapitalgesellschaften'],
            correctIndex: 2,
            explanation: 'Freiberufler wie Ärzte, Rechtsanwälte oder Architekten fallen nicht automatisch unter den Unternehmerbegriff des UGB, können sich aber freiwillig ins Firmenbuch eintragen lassen.',
          },
          {
            question: 'Was versteht man laut UGB unter der "Firma" eines Unternehmens?',
            options: ['Die Summe aller Mitarbeiterinnen und Mitarbeiter eines Unternehmens', 'Den Namen, unter dem ein Unternehmer sein Unternehmen betreibt und mit dem er im Rechtsverkehr handelt und klagen bzw. geklagt werden kann', 'Den Gesamtwert aller Vermögensgegenstände eines Unternehmens', 'Das Gebäude, in dem sich der Firmensitz befindet'],
            correctIndex: 1,
            explanation: 'Die Firma ist laut UGB der Name, unter dem ein Unternehmer im Geschäftsverkehr auftritt, Verträge abschließt und klagen bzw. geklagt werden kann.',
          },
          {
            question: 'Woraus setzt sich der Firmenname zusammen?',
            options: ['Aus Firmenwortlaut und Firmenzusatz', 'Aus Firmenbuchnummer und Firmensitz', 'Aus Geschäftszweig und Bilanzstichtag', 'Aus Gesellschaftsvertrag und Musterunterschrift'],
            correctIndex: 0,
            explanation: 'Der Firmenname besteht aus dem Firmenwortlaut (frei wählbare Bezeichnung) und dem gesetzlich vorgeschriebenen Firmenzusatz, der Hinweise auf die Rechtsform enthält.',
          },
          {
            question: 'Was verlangt der Grundsatz der Ausschließlichkeit bei der Wahl eines Firmennamens?',
            options: ['Die Firma darf nur aus dem Nachnamen der Inhaberin bzw. des Inhabers bestehen', 'Die Firma muss den vollständigen Unternehmensgegenstand im Namen nennen', 'Die Firma muss zwingend einen Fantasienamen enthalten', 'Die Firma muss sich von allen anderen am selben Ort bereits im Firmenbuch eingetragenen Firmen deutlich unterscheiden'],
            correctIndex: 3,
            explanation: 'Der Grundsatz der Ausschließlichkeit fordert, dass sich eine Firma von bereits am selben Ort eingetragenen Firmen deutlich unterscheidet, um Verwechslungen zu vermeiden.',
          },
          {
            question: 'Loopy möchte ihr Geschäft "Loopys Bio-Feinkost GmbH" nennen, verkauft dort aber ausschließlich Süßigkeiten ohne Bio-Zertifizierung. Welches Prinzip der Firmenwahl verletzt sie damit?',
            options: ['Die Kennzeichnungseignung', 'Die Firmenbuchpflicht', 'Das Irreführungsverbot', 'Die Ausschließlichkeit'],
            correctIndex: 2,
            explanation: 'Der Firmenname darf keine Angaben enthalten, die über geschäftliche Verhältnisse irreführen - der Zusatz "Bio" wäre hier täuschend, da keine Bio-Produkte verkauft werden.',
          },
          {
            question: 'Wie wird eine Firma bezeichnet, die aus dem Namen der Inhaberin bzw. des Inhabers besteht, z. B. "Thomas Radler e.U."?',
            options: ['Gemischte Firma', 'Personenfirma', 'Sachfirma', 'Fantasiefirma'],
            correctIndex: 1,
            explanation: 'Eine Personenfirma leitet sich vom Namen einer oder mehrerer im Unternehmen tätiger Personen ab.',
          },
          {
            question: 'Ab welcher Umsatzgrenze muss sich ein Einzelunternehmen verpflichtend ins Firmenbuch eintragen lassen?',
            options: ['Bei mehr als 1 Mio. EUR Umsatz in einem Jahr oder mehr als 700.000 EUR in zwei aufeinanderfolgenden Geschäftsjahren', 'Bei mehr als 100.000 EUR Umsatz in einem beliebigen Geschäftsjahr', 'Ab dem ersten angestellten Mitarbeiter', 'Einzelunternehmen sind niemals zur Eintragung verpflichtet'],
            correctIndex: 0,
            explanation: 'Einzelunternehmen müssen sich ab einem Umsatz von über 1 Mio. EUR in einem Jahr bzw. über 700.000 EUR in zwei aufeinanderfolgenden Geschäftsjahren verpflichtend ins Firmenbuch eintragen lassen.',
          },
          {
            question: 'Woraus besteht das Firmenbuch?',
            options: ['Aus dem Gesellschaftsvertrag und der Satzung', 'Aus dem Kassabuch und dem Inventurbuch', 'Aus der Bilanz und der Gewinn- und Verlustrechnung', 'Aus dem Hauptbuch und der Urkundensammlung'],
            correctIndex: 3,
            explanation: 'Das Firmenbuch besteht aus dem Hauptbuch mit den wichtigsten Unternehmensdaten und der Urkundensammlung mit zugrundeliegenden Dokumenten wie Gesellschaftsvertrag oder Bilanz.',
          },
        ],
      },
      {
        id: 'rechtsformen-unternehmen',
        title: 'Rechtsformen der Unternehmen',
        questions: [
          {
            question: 'Welches Kriterium gehört laut Lehrbuch NICHT zu den wichtigsten Kriterien für die Wahl der Rechtsform?',
            options: ['Die Lieblingsfarbe der Unternehmerin bzw. des Unternehmers', 'Die Haftung', 'Die Kapitalaufbringung (Finanzierung)', 'Die Leitungsbefugnis und Kontrolle'],
            correctIndex: 0,
            explanation: 'Zu den Kriterien für die Rechtsformwahl zählen u. a. Kapitalaufbringung, Haftung, Leitungsbefugnis/Kontrolle, Art der Buchführung und die steuerliche Belastung - nicht aber persönliche Vorlieben.',
          },
          {
            question: 'Welche Aussage zum Einzelunternehmen trifft zu?',
            options: ['Der Einzelunternehmer haftet nur mit dem im Unternehmen eingesetzten Kapital', 'Ein Einzelunternehmen benötigt immer ein Mindestkapital von 10.000 EUR', 'Ein Einzelunternehmen muss durch einen Notariatsakt gegründet werden', 'Der Einzelunternehmer bzw. die Einzelunternehmerin haftet unbeschränkt mit dem gesamten persönlichen Vermögen'],
            correctIndex: 3,
            explanation: 'Einzelunternehmerinnen und Einzelunternehmer haften voll, persönlich und unbeschränkt mit ihrem gesamten Vermögen - dafür ist die Gründung formlos und ohne Mindestkapital möglich.',
          },
          {
            question: 'Wie viele Gesellschafterinnen bzw. Gesellschafter sind für die Gründung einer Offenen Gesellschaft (OG) mindestens erforderlich?',
            options: ['Mindestens 3 Personen', 'Mindestens 5 Personen', 'Mindestens 2 Personen', 'Mindestens 1 Person'],
            correctIndex: 2,
            explanation: 'Die OG wird von mindestens zwei Personen gegründet, die zu gleichen Rechten und Pflichten am Unternehmen beteiligt sind.',
          },
          {
            question: 'Wie haften die Gesellschafter einer OG für die Schulden der Gesellschaft?',
            options: ['Nur anteilig entsprechend ihrer Kapitaleinlage', 'Persönlich, unbeschränkt, unmittelbar und solidarisch', 'Nur mit ihrer im Firmenbuch eingetragenen Einlage', 'Gar nicht, da die OG eine eigene Rechtspersönlichkeit besitzt und allein haftet'],
            correctIndex: 1,
            explanation: 'Alle Gesellschafter einer OG haften persönlich, unbeschränkt, unmittelbar und solidarisch - Gläubiger können sich also an jeden einzelnen Gesellschafter für die gesamte Schuld wenden.',
          },
          {
            question: 'Marius ist Komplementär, Lisa Kommanditistin einer KG. Welche Aussage zur Haftung trifft zu?',
            options: ['Marius haftet unbeschränkt und persönlich, Lisa nur bis zur Höhe ihrer im Firmenbuch eingetragenen Haftsumme', 'Beide haften in gleichem Ausmaß unbeschränkt mit ihrem Privatvermögen', 'Lisa haftet unbeschränkt, Marius nur beschränkt', 'Keiner der beiden haftet persönlich, da die KG eine Kapitalgesellschaft ist'],
            correctIndex: 0,
            explanation: 'In der KG haftet mindestens ein Komplementär unbeschränkt und persönlich, während der Kommanditist nur beschränkt bis zur Höhe seiner eingetragenen Haftsumme haftet.',
          },
          {
            question: 'Welche Aussage zur Gesellschaft bürgerlichen Rechts (GesbR) trifft zu?',
            options: ['Sie muss zwingend im Firmenbuch eingetragen werden wie eine OG', 'Sie kann bereits von einer einzigen Person gegründet werden', 'Sie ist eine Form der Kapitalgesellschaft', 'Sie besitzt keine eigene Rechtspersönlichkeit und wird nicht ins Firmenbuch eingetragen'],
            correctIndex: 3,
            explanation: 'Die GesbR besitzt keine eigene Rechtspersönlichkeit, tritt nicht unter einem eigenen Firmennamen auf und wird nicht im Firmenbuch eingetragen.',
          },
          {
            question: 'Was kennzeichnet die Stille Gesellschaft?',
            options: ['Der stille Gesellschafter haftet unbeschränkt mit seinem Privatvermögen', 'Die Stille Gesellschaft muss zwingend im Firmenbuch eingetragen werden', 'Der stille Gesellschafter beteiligt sich nur mit einer Vermögenseinlage am Unternehmen und tritt nach außen nicht in Erscheinung', 'Der stille Gesellschafter tritt im Namen des Unternehmens nach außen auf und vertritt es gegenüber Kunden'],
            correctIndex: 2,
            explanation: 'Die Stille Gesellschaft ist eine reine Innengesellschaft - der stille Gesellschafter beteiligt sich nur vermögensmäßig, tritt aber nach außen nicht auf und wird nicht im Firmenbuch eingetragen.',
          },
          {
            question: 'Wie hoch ist laut Lehrbuch das Mindeststammkapital für die Gründung einer GmbH?',
            options: ['1.000,00 EUR', '10.000,00 EUR', '35.000,00 EUR', '70.000,00 EUR'],
            correctIndex: 1,
            explanation: 'Für die Gründung einer GmbH muss ein Mindeststammkapital von 10.000,00 EUR aufgebracht werden.',
          },
          {
            question: 'Welche Organe sind bei einer GmbH vorgesehen?',
            options: ['Geschäftsführung, Generalversammlung und (ab bestimmter Größe) Aufsichtsrat', 'Vorstand, Hauptversammlung und Aufsichtsrat', 'Nur ein einzelner Geschäftsführer ohne weitere Organe', 'Komplementär und Kommanditisten'],
            correctIndex: 0,
            explanation: 'Die GmbH wird durch die Geschäftsführung geleitet, die Generalversammlung ist das oberste Organ der Gesellschafter und ab einer bestimmten Größe ist zusätzlich ein Aufsichtsrat vorgesehen.',
          },
          {
            question: 'Wie hoch muss das Grundkapital einer Aktiengesellschaft (AG) laut Lehrbuch mindestens sein, und welcher Anteil davon ist sofort bar aufzubringen?',
            options: ['Mindestens 10.000,00 EUR, wovon die Hälfte bar aufzubringen ist', 'Mindestens 35.000,00 EUR, zur Gänze bar aufzubringen', 'Mindestens 100.000,00 EUR ohne Barzahlungspflicht', 'Mindestens 70.000,00 EUR, wovon ein Viertel bar aufzubringen ist'],
            correctIndex: 3,
            explanation: 'Das Grundkapital einer AG muss mindestens 70.000,00 EUR betragen, wobei mindestens ein Viertel davon bar aufgebracht werden muss.',
          },
          {
            question: 'Welche Organe hat eine Aktiengesellschaft?',
            options: ['Nur den Vorstand als alleiniges Organ', 'Prokurist, Kommanditist und Komplementär', 'Vorstand, Aufsichtsrat und Hauptversammlung', 'Geschäftsführung, Generalversammlung und Komplementär'],
            correctIndex: 2,
            explanation: 'Die AG wird vom Vorstand geleitet, vom Aufsichtsrat kontrolliert, und die Aktionäre entscheiden in der Hauptversammlung über zentrale Angelegenheiten.',
          },
          {
            question: 'Was ist die Besonderheit der Flexiblen Kapitalgesellschaft (FlexKapG)?',
            options: ['Sie haftet mit dem Privatvermögen der Gesellschafter', 'Sie ermöglicht die Ausgabe von Unternehmenswert-Anteilen (UWA) an Mitarbeiterinnen und Mitarbeiter, die bei der Gewinnbeteiligung bevorzugt werden', 'Sie kommt ganz ohne Firmenbucheintragung aus', 'Sie kennt kein Mindeststammkapital'],
            correctIndex: 1,
            explanation: 'Die FlexKapG (auch FlexCo) vereint Elemente von GmbH und AG und erlaubt es, Mitarbeiterinnen und Mitarbeiter über Unternehmenswert-Anteile (UWA) am Unternehmen und bevorzugt am Gewinn zu beteiligen.',
          },
          {
            question: 'Wer ist bei der GmbH & Co KG typischerweise der Komplementär?',
            options: ['Eine GmbH, wodurch die persönliche Haftung natürlicher Personen vermieden wird', 'Immer eine natürliche Person mit unbeschränkter Haftung', 'Der Kommanditist selbst', 'Eine Genossenschaft'],
            correctIndex: 0,
            explanation: 'Bei der GmbH & Co KG übernimmt die GmbH als juristische Person die Rolle des unbeschränkt haftenden Komplementärs, wodurch keine natürliche Person persönlich unbeschränkt haftet.',
          },
          {
            question: 'Was ist der Hauptzweck einer Genossenschaft laut Lehrbuch?',
            options: ['Die Erzielung eines möglichst hohen Gewinns für externe Anleger', 'Die Vermeidung jeglicher Firmenbucheintragung', 'Die Beschränkung der Mitgliederzahl auf maximal zwei Personen', 'Die Förderung des Erwerbs oder der Wirtschaft ihrer Mitglieder durch gemeinsamen Geschäftsbetrieb'],
            correctIndex: 3,
            explanation: 'Eine Genossenschaft ist eine Personenvereinigung mit nicht geschlossener Mitgliederzahl, deren Ziel die Förderung des Erwerbs oder der Wirtschaft ihrer Mitglieder durch gemeinsamen Geschäftsbetrieb ist.',
          },
        ],
      },
      {
        id: 'vollmachten',
        title: 'Vollmachten im Unternehmen',
        questions: [
          {
            question: 'Was versteht man unter der Prokura?',
            options: ['Die umfangreichste Vollmacht, die ein Unternehmen erteilen kann', 'Eine Vollmacht, die nur für ein einzelnes Geschäft gilt', 'Eine Vollmacht, die ausschließlich mündlich erteilt werden kann', 'Eine Vollmacht, die nur Filialleiterinnen und Filialleitern zusteht'],
            correctIndex: 0,
            explanation: 'Die Prokura ist die umfangreichste Vollmacht im Unternehmen und ermächtigt zu fast allen gerichtlichen und außergerichtlichen Geschäften.',
          },
          {
            question: 'Wer darf laut Lehrbuch eine Prokura erteilen?',
            options: ['Jeder Prokurist kann selbst weitere Prokuristen bestellen', 'Jede Mitarbeiterin bzw. jeder Mitarbeiter mit Handlungsvollmacht', 'Ausschließlich das Firmenbuchgericht', 'Nur der Unternehmer bzw. die Unternehmerin persönlich'],
            correctIndex: 3,
            explanation: 'Die Prokura darf nur vom Unternehmer bzw. von der Unternehmerin selbst - ausdrücklich und durch Eintragung ins Firmenbuch - erteilt werden.',
          },
          {
            question: 'Wofür benötigt ein Prokurist zusätzlich eine ausdrückliche Befugnis, obwohl er Prokura besitzt?',
            options: ['Für die Unterzeichnung von Rechnungen', 'Für die Entgegennahme von Zahlungen von Kundinnen und Kunden', 'Für den Verkauf oder die Belastung von Grundstücken', 'Für den Wareneinkauf im gewöhnlichen Geschäftsbetrieb'],
            correctIndex: 2,
            explanation: 'Der Verkauf und die Belastung von Grundstücken zählen zu den Geschäften, für die ein Prokurist trotz Prokura eine ausdrückliche zusätzliche Befugnis benötigt.',
          },
          {
            question: 'Loopy bestellt zwei Prokuristen und legt fest, dass beide nur gemeinsam handeln dürfen. Um welche Art der Prokura handelt es sich?',
            options: ['Gemischte Prokura', 'Gesamtprokura', 'Einzelprokura', 'Filialprokura'],
            correctIndex: 1,
            explanation: 'Bei der Gesamtprokura können mehrere Prokuristen nur gemeinsam handeln und Verträge abschließen, keiner allein.',
          },
          {
            question: 'Wie unterschreibt ein Prokurist korrekt, wenn er im Namen des Unternehmens handelt?',
            options: ['Mit dem Zusatz "ppa." vor seiner Unterschrift', 'Mit dem Zusatz "i. V." vor seiner Unterschrift', 'Ohne jeden Zusatz, nur mit dem eigenen Namen', 'Mit dem Zusatz "i. A." vor seiner Unterschrift'],
            correctIndex: 0,
            explanation: 'Prokuristen kennzeichnen ihre Unterschrift mit dem Kürzel "ppa." (per procura), während Handlungsbevollmächtigte je nach Vollmacht "i. V." oder "i. A." verwenden.',
          },
          {
            question: 'Wodurch erlischt eine Prokura NICHT?',
            options: ['Durch Widerruf des Unternehmers', 'Durch Kündigung des Prokuristen', 'Durch den Tod des Prokuristen', 'Durch eine kurzfristige Krankheit des Prokuristen'],
            correctIndex: 3,
            explanation: 'Eine Prokura erlischt durch Widerruf, Kündigung, Tod oder Geschäftsunfähigkeit des Prokuristen sowie durch Konkurs des Unternehmens - eine kurzfristige Krankheit ändert daran nichts.',
          },
          {
            question: 'Worin unterscheidet sich die Handlungsvollmacht von der Prokura?',
            options: ['Die Handlungsvollmacht ist immer umfangreicher als die Prokura', 'Die Handlungsvollmacht muss immer ins Firmenbuch eingetragen werden', 'Die Handlungsvollmacht ist im Umfang eingeschränkter als die Prokura', 'Die Handlungsvollmacht darf nur vom Firmenbuchgericht erteilt werden'],
            correctIndex: 2,
            explanation: 'Die Handlungsvollmacht ist - anders als die Prokura - eine eingeschränkte Vollmacht und muss nicht ins Firmenbuch eingetragen werden.',
          },
          {
            question: 'Loopy erlaubt ihrer Mitarbeiterin Karin, ausschließlich Süßwaren bei Lieferanten einzukaufen, aber sonst keine weiteren Geschäfte zu tätigen. Um welche Art der Handlungsvollmacht handelt es sich?',
            options: ['Prokura', 'Artvollmacht', 'Generalvollmacht', 'Spezialvollmacht'],
            correctIndex: 1,
            explanation: 'Die Artvollmacht berechtigt nur zu einer bestimmten Art von Geschäften - hier dem Einkauf von Süßwaren -, während die Generalvollmacht alle gewöhnlichen Geschäfte umfasst und die Spezialvollmacht nur ein einzelnes konkretes Geschäft betrifft.',
          },
        ],
      },
      {
        id: 'beschaeftigungsverhaeltnisse',
        title: 'Beschäftigungsverhältnisse in der Praxis',
        questions: [
          {
            question: 'Welches Merkmal ist typisch für einen "echten" Arbeitsvertrag?',
            options: ['Persönliche Abhängigkeit und Weisungsgebundenheit gegenüber dem Arbeitgeber', 'Völlige Freiheit bei der Wahl von Arbeitszeit und Arbeitsort', 'Verpflichtung, ein bestimmtes Werk oder einen Erfolg zu schulden', 'Eigenständige Anmeldung bei der Sozialversicherungsanstalt der Selbstständigen (SVS)'],
            correctIndex: 0,
            explanation: 'Beim "echten" Arbeitsvertrag schuldet der Arbeitnehmer seine persönliche Arbeitskraft und ist an die Weisungen des Arbeitgebers hinsichtlich Arbeitszeit, Arbeitsort und Arbeitsablauf gebunden.',
          },
          {
            question: 'Welche Aussage zu Ferienjobs und Pflichtpraktika von HAK-Schülerinnen und -Schülern trifft laut Lehrbuch zu?',
            options: ['Sie sind stets Werkverträge, da ein bestimmtes Ergebnis geschuldet wird', 'Für sie gelten keinerlei arbeitsrechtlichen Bestimmungen', 'Sie zählen zu den freien Dienstverträgen', 'Sie gelten grundsätzlich als "echte" Arbeitsverträge'],
            correctIndex: 3,
            explanation: 'Sowohl im Ferienjob als auch im Pflichtpraktikum arbeiten Schülerinnen und Schüler im Rahmen eines "echten" Arbeitsvertrags und unterliegen den entsprechenden gesetzlichen Regelungen.',
          },
          {
            question: 'Was gilt für geringfügig Beschäftigte?',
            options: ['Sie müssen sich verpflichtend selbst bei der SVS versichern', 'Ihr Beschäftigungsverhältnis gilt automatisch als Werkvertrag', 'Ihr Entgelt übersteigt die Geringfügigkeitsgrenze nicht, sie sind aber nicht automatisch kranken- und pensionsversichert', 'Sie sind von jeglichem Urlaubs- und Entgeltfortzahlungsanspruch ausgeschlossen'],
            correctIndex: 2,
            explanation: 'Geringfügig Beschäftigte verdienen unter der Geringfügigkeitsgrenze; sie haben zwar Anspruch auf bezahlten Urlaub und Entgeltfortzahlung, sind aber - sofern nur bei einem Arbeitgeber beschäftigt - nicht automatisch kranken- und pensionsversichert.',
          },
          {
            question: 'Was kennzeichnet einen freien Dienstvertrag im Unterschied zum "echten" Arbeitsvertrag?',
            options: ['Der bzw. die freie Dienstnehmerin schuldet immer ein fertiges Werk', 'Der bzw. die freie Dienstnehmerin ist nicht an Weisungen des Auftraggebers hinsichtlich Arbeitszeit und Arbeitsort gebunden', 'Der bzw. die freie Dienstnehmerin hat Anspruch auf bezahlten Urlaub wie ein echter Arbeitnehmer', 'Der bzw. die freie Dienstnehmerin muss vom Auftraggeber bei der ÖGK nicht angemeldet werden'],
            correctIndex: 1,
            explanation: 'Beim freien Dienstvertrag ist der bzw. die Dienstnehmerin nicht an Weisungen bezüglich Arbeitszeit und -ort gebunden, muss aber dennoch vom Auftraggeber bei der ÖGK angemeldet werden und hat keinen Urlaubsanspruch.',
          },
          {
            question: 'Was ist das wesentliche Merkmal eines Werkvertrags?',
            options: ['Der bzw. die Werkvertragsnehmerin schuldet ein konkretes Arbeitsergebnis bzw. einen Erfolg, nicht die Arbeitskraft selbst', 'Der Werkvertragsnehmer ist in die Arbeitsorganisation des Auftraggebers eingegliedert', 'Der Werkvertragsnehmer erhält verpflichtend bezahlten Urlaub', 'Der Werkvertragsnehmer wird automatisch bei der ÖGK pflichtversichert'],
            correctIndex: 0,
            explanation: 'Beim Werkvertrag verpflichtet sich der Werkvertragsnehmer zur Erbringung eines Erfolgs bzw. Werks; das Entgelt wird erst bei Fertigstellung fällig, und er muss sich selbst bei der SVS versichern.',
          },
          {
            question: 'Bei welcher der folgenden Beschäftigungsformen besteht KEIN Anspruch auf bezahlten Urlaub?',
            options: ['Beim "echten" Arbeitsvertrag', 'Bei geringfügiger Beschäftigung im Rahmen eines echten Arbeitsvertrags', 'Beim Ferienjob als "echter" Arbeitsvertrag', 'Beim Werkvertrag'],
            correctIndex: 3,
            explanation: 'Werkvertragsnehmerinnen und -nehmer sind selbstständig und schulden ein Ergebnis - sie haben daher keinen Anspruch auf bezahlten Urlaub, anders als Arbeitnehmer im "echten" Arbeitsverhältnis.',
          },
          {
            question: 'Loopy beauftragt eine Grafikerin einmalig damit, ein neues Logo für "Loopys Candy Store" zu gestalten; die Grafikerin bestimmt Arbeitszeit und -ort selbst und schuldet das fertige Logo. Um welche Vertragsart handelt es sich am ehesten?',
            options: ['Um einen freien Dienstvertrag', 'Um ein geringfügiges Beschäftigungsverhältnis', 'Um einen Werkvertrag', 'Um einen "echten" Arbeitsvertrag'],
            correctIndex: 2,
            explanation: 'Da die Grafikerin ein konkretes Ergebnis (das fertige Logo) schuldet, frei über Zeit und Ort entscheidet und eigenes Werkzeug verwendet, handelt es sich um einen Werkvertrag.',
          },
        ],
      },
      {
        id: 'kaufvertraege-aussenhandel',
        title: 'Kaufverträge im Außenhandel',
        questions: [
          {
            question: 'Was versteht man unter dem Begriff "Außenhandel"?',
            options: ['Den Sammelbegriff für Import (Wareneinfuhr) und Export (Warenausfuhr) zwischen verschiedenen Ländern', 'Den Austausch von Waren ausschließlich innerhalb eines Landes', 'Den Handel zwischen zwei Filialen desselben Unternehmens im Inland', 'Die Lagerung von Waren in einem Zolllager'],
            correctIndex: 0,
            explanation: 'Außenhandel ist der Sammelbegriff für den grenzüberschreitenden Austausch von Gütern und Dienstleistungen, also Import (Einfuhr) und Export (Ausfuhr).',
          },
          {
            question: 'Loopy verkauft eine große Lieferung ihrer Pralinen an einen Händler in Frankreich. Wie nennt man diesen Vorgang aus österreichischer Sicht?',
            options: ['Import', 'Export', 'Transithandel', 'Reexport'],
            correctIndex: 1,
            explanation: 'Export (Ausfuhr) bezeichnet den Verkauf von Waren oder Dienstleistungen ins Ausland.',
          },
          {
            question: 'Loopy kauft Kakaobohnen von einem Lieferanten aus Ecuador für ihre Pralinenproduktion. Wie nennt man diesen Vorgang aus österreichischer Sicht?',
            options: ['Export', 'Binnenhandel', 'Import', 'Veredelungsverkehr'],
            correctIndex: 2,
            explanation: 'Import (Einfuhr) bezeichnet den Kauf von Waren oder Dienstleistungen aus dem Ausland.',
          },
          {
            question: 'Warum ist der Außenhandel für Österreich als kleine, offene Volkswirtschaft besonders wichtig?',
            options: ['Weil Österreich alle benötigten Rohstoffe selbst in ausreichender Menge besitzt', 'Weil dadurch sämtliche Zölle und Steuern entfallen', 'Weil Außenhandel per Gesetz verpflichtend ist', 'Weil der kleine Binnenmarkt und fehlende Rohstoffe Export und Import für Wohlstand, Wachstum und Arbeitsplätze notwendig machen'],
            correctIndex: 3,
            explanation: 'Da der österreichische Binnenmarkt klein ist und wichtige Rohstoffe fehlen, sind Export und Import zentral für Beschäftigung, Wachstum und Wohlstand; Österreich hat eine hohe Exportquote.',
          },
          {
            question: 'Loopy möchte ihre Pralinen erstmals nach Japan exportieren, findet aber schwer heraus, ob dort überhaupt Nachfrage nach ihren Produkten besteht. Welches Risiko der Anbahnungsphase betrifft sie hier?',
            options: ['Marktrisiko', 'Transportrisiko', 'Wechselkursrisiko', 'Annahmerisiko'],
            correctIndex: 0,
            explanation: 'Das Marktrisiko besteht darin, dass in der Anbahnungsphase unklar ist, ob im Zielland ausreichend Nachfrage besteht bzw. ob man sich gegen die Konkurrenz durchsetzen kann.',
          },
          {
            question: 'Nachdem der Exportauftrag fixiert ist, steigen die Zuckerpreise stark an, sodass Loopys Pralinenproduktion teurer wird als kalkuliert. Welches Risiko der Erzeugungsphase trifft hier zu?',
            options: ['Lieferrisiko', 'Produktionsrisiko', 'Kreditrisiko', 'Marktrisiko'],
            correctIndex: 1,
            explanation: 'Das Produktionsrisiko (Erzeugungsphase) besteht darin, dass die tatsächlichen Herstellungskosten höher ausfallen als kalkuliert oder es zu Produktionsausfällen kommt.',
          },
          {
            question: 'Ein Container mit Loopys Pralinen wird auf dem Seeweg nach Kanada durch einen Sturm beschädigt. Um welches Risiko handelt es sich?',
            options: ['Annahmerisiko', 'Zahlungsausfallrisiko', 'Transportrisiko', 'Marktrisiko'],
            correctIndex: 2,
            explanation: 'Das Transportrisiko umfasst Beschädigung, Verlust oder Verzögerung der Ware auf dem Weg zum Käufer und zählt zur Erfüllungsphase des Exportgeschäfts.',
          },
          {
            question: 'Der kanadische Kunde verweigert nach ordnungsgemäßer Lieferung die Abnahme von Loopys Pralinen, weil er angeblich die Bestellung storniert hat. Welches Risiko liegt vor?',
            options: ['Wechselkursrisiko', 'Produktionsrisiko', 'Transportrisiko', 'Annahmerisiko'],
            correctIndex: 3,
            explanation: 'Das Annahmerisiko (Abnahmerisiko) besteht darin, dass der ausländische Käufer die ordnungsgemäß gelieferte Ware nicht abnimmt.',
          },
          {
            question: 'Ein ausländischer Kunde nimmt Loopys Pralinen zwar an, gerät danach aber in Zahlungsschwierigkeiten und bezahlt die Rechnung nicht. Wie wird dieses Risiko genannt?',
            options: ['Zahlungsausfallrisiko (Kredit- bzw. Delkredererisiko)', 'Marktrisiko', 'Produktionsrisiko', 'Transportrisiko'],
            correctIndex: 0,
            explanation: 'Das Zahlungsausfallrisiko, auch Kredit- oder Delkredererisiko genannt, beschreibt die Gefahr, dass der Käufer trotz Lieferung nicht oder nicht vollständig zahlt.',
          },
          {
            question: 'Loopy vereinbart mit einem US-Importeur einen Verkaufspreis in US-Dollar. Bis zur tatsächlichen Zahlung fällt der Dollarkurs, sodass Loopy in Euro weniger erhält als erwartet. Welches Risiko ist das?',
            options: ['Lieferrisiko', 'Wechselkursrisiko', 'Annahmerisiko', 'Transportrisiko'],
            correctIndex: 1,
            explanation: 'Das Wechselkursrisiko entsteht, wenn zwischen Vertragsabschluss und Zahlung in Fremdwährung fakturiert wird und sich der Kurs zulasten einer Vertragspartei ändert.',
          },
          {
            question: 'Loopy bestellt Kakaobohnen bei einem neuen Lieferanten in Ghana. Sie befürchtet, dass die Ware verspätet, in falscher Menge oder mangelhafter Qualität geliefert werden könnte. Welches typische Risiko des Importeurs beschreibt das?',
            options: ['Marktrisiko', 'Kreditrisiko', 'Lieferrisiko', 'Wechselkursrisiko'],
            correctIndex: 2,
            explanation: 'Das Lieferrisiko ist das zentrale Risiko des Importeurs: Die bestellte Ware könnte zu spät, in falscher Menge oder Qualität oder gar nicht geliefert werden.',
          },
          {
            question: 'Welche Aussage über Incoterms trifft zu?',
            options: ['Incoterms sind gesetzlich zwingende Zollformulare', 'Incoterms legen ausschließlich den Kaufpreis der Ware fest', 'Incoterms gelten nur für Transporte innerhalb der EU', 'Incoterms regeln international einheitlich Kosten- und Gefahrenübergang sowie Pflichten von Käufer und Verkäufer; in der Gruppe D muss der Verkäufer die Ware am Bestimmungsort bereitstellen'],
            correctIndex: 3,
            explanation: 'Incoterms (International Commercial Terms) sind standardisierte Lieferklauseln, die Kosten- und Gefahrenübergang sowie Pflichten regeln (Gruppen E, F, C, D). In der Gruppe D (z. B. DAP, DDP) trägt der Verkäufer Kosten und Risiko bis zum Bestimmungsort.',
          },
          {
            question: 'Welches Dokument dient beim Seetransport als Warenbegleitpapier, Transportvertrag UND Traditionspapier (Eigentumsnachweis) zugleich?',
            options: ['Konnossement (Bill of Lading)', 'Handelsrechnung (Faktura)', 'Ursprungszeugnis', 'Packliste'],
            correctIndex: 0,
            explanation: 'Das Konnossement (Bill of Lading) ist beim Seetransport das zentrale Dokument: Es dient als Frachtvertrag, Übernahmebestätigung der Ware und Traditionspapier, mit dem das Eigentum an der Ware übertragen werden kann.',
          },
          {
            question: 'Worin unterscheidet sich das Dokumentenakkreditiv grundlegend vom Dokumenteninkasso?',
            options: ['Das Dokumenteninkasso bietet dem Exporteur mehr Sicherheit als das Dokumentenakkreditiv', 'Beim Dokumentenakkreditiv übernimmt die Bank des Käufers eine eigene Zahlungsverpflichtung gegen Vorlage konformer Dokumente, beim Dokumenteninkasso zieht die Bank die Dokumente nur treuhändig ein, ohne selbst zu haften', 'Beide Verfahren sind inhaltlich identisch', 'Das Dokumentenakkreditiv wird ausschließlich im Inlandsgeschäft eingesetzt'],
            correctIndex: 1,
            explanation: 'Beim Dokumentenakkreditiv verpflichtet sich die Bank des Importeurs selbst zur Zahlung, sobald die vereinbarten Dokumente vorgelegt werden – das bietet dem Exporteur hohe Sicherheit. Beim Dokumenteninkasso leitet die Bank die Dokumente nur weiter und zieht das Geld ein, haftet aber nicht selbst für die Zahlung.',
          },
        ],
      },
      {
        id: 'grundlagen-leistungserstellung-2jg',
        title: 'Grundlagen der betrieblichen Leistungserstellung',
        questions: [
          {
            question: 'Welche zwei Produktionsfaktoren benötigt ein Unternehmen laut Buch für die betriebliche Leistungserstellung?',
            options: ['Menschliche Arbeitsleistung und Betriebsvermögen', 'Kapital und Boden', 'Beschaffung und Absatz', 'Anlagevermögen und Marketing'],
            correctIndex: 0,
            explanation: 'Für die Erstellung der betrieblichen Leistungen benötigt ein Unternehmen die Produktionsfaktoren menschliche Arbeitsleistung und Betriebsvermögen, das sich wiederum in Anlage- und Umlaufvermögen gliedert.',
          },
          {
            question: 'Wie bezeichnet man eine Leistung, die sowohl ein Sachgut als auch eine zusätzliche Dienstleistung umfasst (z. B. eine Maschine mit Wartungsvertrag)?',
            options: ['Investitionsgut', 'Hybride Form', 'Konsumgut', 'Personenbezogene Dienstleistung'],
            correctIndex: 1,
            explanation: 'In der Praxis findet man häufig hybride Formen, bei denen Sachgüter mit zusätzlichen Dienstleistungen kombiniert werden – eine Mischform aus Sachgut und Dienstleistung.',
          },
          {
            question: 'Welche drei betrieblichen Grundfunktionen hängen laut Buch unmittelbar mit der Leistungserstellung zusammen?',
            options: ['Personal, Finanzen, Controlling', 'Logistik, Qualitätsmanagement, Rechnungswesen', 'Beschaffung, Produktion, Absatz', 'Marketing, Vertrieb, Kundenservice'],
            correctIndex: 2,
            explanation: 'Die drei betrieblichen Grundfunktionen Beschaffung, Produktion (Leistungserstellung) und Absatz hängen unmittelbar mit der Leistungserstellung zusammen und werden u. a. von Logistik, Personal-, Finanz- und Qualitätsmanagement unterstützt.',
          },
          {
            question: 'In Loopys Candy Store stellt eine Verpackungsmaschine 4.000 Bonbons pro Stunde her. Welche Kennzahl wird hier berechnet, wenn man die Produktmenge den eingesetzten Maschinenstunden gegenüberstellt?',
            options: ['Rentabilität', 'Wirtschaftlichkeit', 'Flexibilität', 'Maschinenproduktivität'],
            correctIndex: 3,
            explanation: 'Die Produktivität stellt den mengenmäßigen Output dem mengenmäßigen Input gegenüber; die Maschinenproduktivität berechnet sich aus Produktmenge geteilt durch eingesetzte Maschinenstunden.',
          },
          {
            question: 'Die Wirtschaftlichkeit von Loopys Candy Store liegt bei einem Wert von 0,9. Was bedeutet dieses Ergebnis?',
            options: ['Es wird ein Verlust erwirtschaftet', 'Es wird ein Gewinn erwirtschaftet', 'Es wird genau kostendeckend gewirtschaftet', 'Die Aussage lässt keine Rückschlüsse auf den Erfolg zu'],
            correctIndex: 0,
            explanation: 'Die Wirtschaftlichkeit stellt den wertmäßigen Output dem wertmäßigen Input gegenüber. Ist der Wert kleiner als 1, wird ein Verlust erwirtschaftet.',
          },
          {
            question: 'Loopys Candy Store erzielt einen Gewinn von 50.000 EUR bei einem eingesetzten Eigenkapital von 500.000 EUR. Wie hoch ist die Eigenkapitalrentabilität?',
            options: ['5 %', '10 %', '50 %', '1 %'],
            correctIndex: 1,
            explanation: 'Die Rentabilität berechnet sich aus Gewinn geteilt durch Kapitaleinsatz mal 100: 50.000 / 500.000 × 100 = 10 %.',
          },
          {
            question: 'Welche vier Faktoren bestimmen laut Buch die Kundenzufriedenheit?',
            options: ['Preis, Werbung, Marke, Design', 'Produktivität, Wirtschaftlichkeit, Rentabilität, Nachhaltigkeit', 'Qualität, Lieferzeit, Terminreue, Flexibilität', 'Beschaffung, Produktion, Absatz, Logistik'],
            correctIndex: 2,
            explanation: 'Die Faktoren der Kundenzufriedenheit sind Qualität, Lieferzeit, Terminreue und Flexibilität.',
          },
          {
            question: 'Was gibt die Kennzahl „Terminreue" an?',
            options: ['Wie lange Kunden im Durchschnitt auf ihre Bestellung warten müssen', 'Wie groß der Anteil fehlerfreier Güter an der gesamten Herstellmenge ist', 'Inwieweit ein Unternehmen auf besondere Kundenwünsche eingehen kann', 'Wie viele der gesamten Lieferungen pünktlich an die Kunden erfolgt sind'],
            correctIndex: 3,
            explanation: 'Die Terminreue gibt an, wie viele der gesamten Lieferungen pünktlich an die Kunden erfolgt sind, und wird in B2B-Verträgen oft mit einem Pönale bei Lieferverzug abgesichert.',
          },
          {
            question: 'Zu welcher Kostenart der Leistungserstellung zählen Miet- und Energiekosten für die Lageranlage?',
            options: ['Lagerkosten', 'Produktionskosten', 'Transportkosten', 'Indirekte Kosten'],
            correctIndex: 0,
            explanation: 'Lagerkosten setzen sich aus Kosten der Lageranlage (z. B. Miete, Energiekosten), Lagerbeständen (Verderb, Schwund, Kapitalbindung) und Lagerverwaltung (Löhne, Gehälter) zusammen.',
          },
          {
            question: 'Welche drei Dimensionen der Nachhaltigkeit werden im Buch unterschieden?',
            options: ['Regionale, nationale und internationale Nachhaltigkeit', 'Soziale, ökonomische und ökologische Nachhaltigkeit', 'Finanzielle, rechtliche und organisatorische Nachhaltigkeit', 'Produktions-, Lager- und Transportnachhaltigkeit'],
            correctIndex: 1,
            explanation: 'Die drei Dimensionen der Nachhaltigkeit sind die soziale (z. B. faire Entlohnung), die ökonomische (Gewinnerzielung für Investitionen) und die ökologische Nachhaltigkeit (Ressourcenschonung).',
          },
          {
            question: 'Was versteht man im Rahmen der Unternehmensethik unter einem „Code of Conduct"?',
            options: ['Eine gesetzliche Vorschrift zur Exportkontrolle', 'Eine Kennzahl zur Beurteilung der Wirtschaftlichkeit', 'Einen Verhaltenskodex mit Werten und Verhaltensregeln, an den sich alle Personen im Unternehmen halten müssen', 'Ein Dokument zur Berechnung der Rentabilität'],
            correctIndex: 2,
            explanation: 'Werte und Verhaltensregeln der Unternehmensethik können z. B. in einem Code of Conduct festgelegt werden – einem Verhaltenskodex, an den sich alle Personen im Unternehmen zu halten haben.',
          },
        ],
      },
      {
        id: 'kunde-im-mittelpunkt',
        title: 'Der Kunde im Mittelpunkt',
        questions: [
          {
            question: 'Was versteht man unter dem Begriff Marketing?',
            options: ['Die reine Herstellung von Produkten ohne Marktbezug', 'Die konsequente Ausrichtung des Unternehmens an den Bedürfnissen der Kunden', 'Die Buchhaltung eines Unternehmens', 'Die Personalverwaltung eines Unternehmens'],
            correctIndex: 1,
            explanation: 'Marketing bezeichnet die konsequente Ausrichtung aller unternehmerischen Aktivitäten an den Bedürfnissen der Kunden.',
          },
          {
            question: 'Welche Phase gehört NICHT zur Customer Journey?',
            options: ['Bewusstwerdung (Awareness)', 'Überlegung (Consideration)', 'Produktionsplanung', 'Kauf'],
            correctIndex: 2,
            explanation: 'Die Customer Journey umfasst typischerweise die Phasen Awareness, Consideration, Kauf und Nachkaufphase – nicht die Produktionsplanung.',
          },
          {
            question: 'Wodurch unterscheiden sich quantitative von qualitativen Marketingzielen?',
            options: ['Quantitative Ziele sind messbar, qualitative betreffen z. B. Image und Zufriedenheit', 'Es gibt keinen Unterschied', 'Qualitative Ziele sind immer wichtiger als quantitative', 'Quantitative Ziele betreffen nur den Personalbereich'],
            correctIndex: 0,
            explanation: 'Quantitative Ziele sind zahlenmäßig messbar, z. B. Umsatz oder Marktanteil, während qualitative Ziele etwa das Image oder die Kundenzufriedenheit betreffen.',
          },
          {
            question: 'Was versteht man unter Marktsegmentierung?',
            options: ['Die Fusion mehrerer Unternehmen', 'Die Reduktion der Produktpalette', 'Die Auflösung eines Marktes', 'Die Aufteilung eines Gesamtmarktes in Gruppen mit ähnlichen Bedürfnissen'],
            correctIndex: 3,
            explanation: 'Bei der Marktsegmentierung wird ein Gesamtmarkt in homogene Käufergruppen (Segmente) mit ähnlichen Bedürfnissen aufgeteilt.',
          },
          {
            question: 'Loopy\'s Candy Store möchte gezielt nur eine kleine, besonders naschfreudige Zielgruppe (z. B. Fans von Bio-Süßwaren) ansprechen. Welche Marktbearbeitungsstrategie wendet Loopy damit an?',
            options: ['Undifferenziertes Marketing', 'Differenziertes Marketing', 'Konzentriertes Marketing', 'Massenmarketing'],
            correctIndex: 2,
            explanation: 'Beim konzentrierten Marketing (Nischenmarketing) konzentriert sich ein Unternehmen gezielt auf ein einziges, spezielles Marktsegment.',
          },
          {
            question: 'Wie nennt man es, wenn Loopy\'s Candy Store mehrere unterschiedliche Produktlinien für verschiedene Kundengruppen gleichzeitig anbietet (z. B. zuckerfrei, vegan, klassisch)?',
            options: ['Konzentriertes Marketing', 'Differenziertes Marketing', 'Undifferenziertes Marketing', 'Nischenmarketing'],
            correctIndex: 1,
            explanation: 'Beim differenzierten Marketing (Mehrsegmentmarketing) werden mehrere Marktsegmente jeweils mit angepassten Marketingmaßnahmen bearbeitet.',
          },
          {
            question: 'Was bezeichnet man als USP?',
            options: ['Universal Service Provider', 'User Support Plattform', 'Umsatz-Steuer-Prozentsatz', 'Unique Selling Proposition – das Alleinstellungsmerkmal eines Produkts'],
            correctIndex: 3,
            explanation: 'USP steht für Unique Selling Proposition – das einzigartige Verkaufsversprechen, mit dem sich ein Produkt von der Konkurrenz abhebt.',
          },
          {
            question: 'Was gehört zu den klassischen Instrumenten des Marketingmix (den "4 Ps")?',
            options: ['Produkt, Preis, Distribution, Kommunikation', 'Personal, Planung, Produktion, Profit', 'Presse, Politik, Programm, Portfolio', 'Preis, Personal, Prozess, Produkt'],
            correctIndex: 0,
            explanation: 'Der Marketingmix umfasst Produktpolitik, Preispolitik, Distributionspolitik (Place) und Kommunikationspolitik (Promotion).',
          },
          {
            question: 'Was versteht man unter Kundenorientierung?',
            options: ['Kunden werden bei Entscheidungen ignoriert', 'Nur der Preis zählt für Kunden', 'Kunden entscheiden über die Produktion', 'Die konsequente Ausrichtung betrieblicher Entscheidungen an Kundenwünschen'],
            correctIndex: 3,
            explanation: 'Kundenorientierung bedeutet, alle betrieblichen Entscheidungen konsequent an den Wünschen und Bedürfnissen der Kunden auszurichten.',
          },
          {
            question: 'Wozu dient ein Positionierungskreuz (Positioning Map)?',
            options: ['Zur Berechnung der Lohnkosten', 'Zur grafischen Darstellung der Marktposition eines Produkts im Vergleich zu Mitbewerbern', 'Zur Terminplanung im Unternehmen', 'Zur Lagerverwaltung'],
            correctIndex: 1,
            explanation: 'Ein Positionierungskreuz zeigt grafisch, wie ein Produkt im Vergleich zu Mitbewerbern hinsichtlich zweier Merkmale (z. B. Preis und Qualität) wahrgenommen wird.',
          },
        ],
      },
      {
        id: 'marktforschung',
        title: 'Marktforschung',
        questions: [
          {
            question: 'Was versteht man unter Marktforschung?',
            options: ['Die systematische Gewinnung, Aufbereitung und Auswertung von Marktinformationen', 'Die Herstellung neuer Süßwaren', 'Die Buchhaltung eines Unternehmens', 'Die Auszahlung von Löhnen'],
            correctIndex: 0,
            explanation: 'Marktforschung ist die systematische Gewinnung, Aufbereitung und Auswertung von Informationen über den Markt.',
          },
          {
            question: 'Welches sind die beiden grundlegenden Arten der Marktforschung?',
            options: ['Interne und externe Forschung', 'Nationale und internationale Marktforschung', 'Primäre und sekundäre Marktforschung', 'Digitale und analoge Marktforschung'],
            correctIndex: 2,
            explanation: 'Man unterscheidet zwischen primärer Marktforschung (Field Research) und sekundärer Marktforschung (Desk Research).',
          },
          {
            question: 'Loopy\'s Candy Store wertet vorhandene Statistiken der WKO und bestehende Geschäftsberichte aus, um Trends am Süßwarenmarkt zu erkennen. Welche Form der Marktforschung betreibt Loopy damit?',
            options: ['Primäre Marktforschung', 'Experiment', 'Sekundäre Marktforschung', 'Feldbeobachtung'],
            correctIndex: 2,
            explanation: 'Bei der sekundären Marktforschung (Desk Research) werden bereits vorhandene, intern oder extern verfügbare Daten genutzt.',
          },
          {
            question: 'Loopy lässt eigens eine neue Umfrage unter seinen Stammkunden zu einer neuen Bonbonsorte durchführen. Um welche Form der Marktforschung handelt es sich?',
            options: ['Sekundäre Marktforschung', 'Desk Research', 'Sekundärstatistik', 'Primäre Marktforschung'],
            correctIndex: 3,
            explanation: 'Bei der primären Marktforschung (Field Research) werden Daten eigens für einen bestimmten Zweck neu erhoben.',
          },
          {
            question: 'Welche drei Methoden zählen zu den klassischen Instrumenten der primären Marktforschung?',
            options: ['Befragung, Beobachtung, Experiment', 'Bilanz, Buchhaltung, Inventur', 'Werbung, Verkauf, Lagerung', 'Planung, Kontrolle, Organisation'],
            correctIndex: 0,
            explanation: 'Zu den primären Erhebungsmethoden zählen Befragung, Beobachtung und Experiment.',
          },
          {
            question: 'Ein Mitarbeiter von Loopy\'s Candy Store beobachtet unauffällig, wie Kunden im echten Geschäft vor dem Süßigkeitenregal reagieren. Wie nennt man diese Beobachtungsform?',
            options: ['Laborbeobachtung', 'Experiment', 'Sekundärforschung', 'Feldbeobachtung'],
            correctIndex: 3,
            explanation: 'Bei der Feldbeobachtung wird das Verhalten in der natürlichen, realen Umgebung beobachtet – im Gegensatz zur Laborbeobachtung unter künstlichen Bedingungen.',
          },
          {
            question: 'Loopy testet eine neue, veränderte Rezeptur in einem ausgewählten Testmarkt unter kontrollierten Bedingungen, bevor die Süßigkeit österreichweit eingeführt wird. Welche Methode wendet Loopy damit an?',
            options: ['Experiment (Testmarketing)', 'Befragung', 'Sekundärforschung', 'Beobachtung'],
            correctIndex: 0,
            explanation: 'Beim Experiment (Testmarketing) werden Produkte unter kontrollierten Bedingungen in einem begrenzten Markt getestet, bevor sie flächendeckend eingeführt werden.',
          },
          {
            question: 'Was unterscheidet eine offene Frage von einer geschlossenen Frage in einem Fragebogen?',
            options: ['Offene Fragen haben vorgegebene Antworten, geschlossene nicht', 'Bei offenen Fragen kann frei geantwortet werden, bei geschlossenen wird aus vorgegebenen Antworten gewählt', 'Es gibt keinen Unterschied', 'Geschlossene Fragen sind immer länger'],
            correctIndex: 1,
            explanation: 'Bei offenen Fragen kann frei geantwortet werden, bei geschlossenen Fragen wird aus vorgegebenen Antwortmöglichkeiten ausgewählt.',
          },
          {
            question: 'Welche Befragungsform eignet sich, wenn Loopy schnell und kostengünstig eine größere Anzahl an Kunden zu ihrer Zufriedenheit befragen möchte?',
            options: ['Persönliches Einzelinterview', 'Telefonische Befragung', 'Schriftliche Online-Befragung', 'Laborbeobachtung'],
            correctIndex: 2,
            explanation: 'Die schriftliche Online-Befragung ermöglicht es, viele Personen gleichzeitig, schnell und kostengünstig zu befragen.',
          },
          {
            question: 'Wofür steht die Bezeichnung "Desk Research"?',
            options: ['Für die primäre Marktforschung durch Befragungen', 'Für die Beobachtung im Feld', 'Für die Durchführung von Experimenten', 'Für die Auswertung bereits vorhandener Daten, also die sekundäre Marktforschung'],
            correctIndex: 3,
            explanation: 'Desk Research bezeichnet die Auswertung bereits vorhandener Daten "am Schreibtisch" – also die sekundäre Marktforschung.',
          },
        ],
      },
      {
        id: 'instrumente-marketings',
        title: 'Instrumente des Marketings',
        questions: [
          {
            question: 'Welchem der vier Marketinginstrumente (Marketing-Mix) wird die Festlegung des Verkaufspreises zugeordnet?',
            options: ['Preispolitik (Price)', 'Produktpolitik (Product)', 'Distributionspolitik (Place)', 'Kommunikationspolitik (Promotion)'],
            correctIndex: 0,
            explanation: 'Der Marketing-Mix besteht aus Produkt-, Preis-, Distributions- und Kommunikationspolitik; die Preisgestaltung fällt in die Preispolitik.',
          },
          {
            question: 'Loopy legt bei ihren Süßigkeiten besonderen Wert auf ein hübsches Verpackungsdesign, das ihre Kund:innen zusätzlich begeistert. Wie nennt man diesen ergänzenden Produktnutzen?',
            options: ['Grundnutzen', 'Zusatznutzen', 'Deckungsbeitrag', 'Sortimentstiefe'],
            correctIndex: 1,
            explanation: 'Der Zusatznutzen ergänzt den Grundnutzen eines Produkts und kann für die Kaufentscheidung ausschlaggebend sein.',
          },
          {
            question: 'Ein Supermarkt verkauft Süßigkeiten unter seinem eigenen Label statt unter dem Namen des Herstellers. Wie nennt man diese Markenart?',
            options: ['Gattungsmarke', 'Herstellermarke', 'Handelsmarke', 'Dachmarke'],
            correctIndex: 2,
            explanation: 'Handelsmarken werden vom Handelsunternehmen selbst unter eigenem Namen vertrieben, im Gegensatz zu Herstellermarken.',
          },
          {
            question: 'In welcher Reihenfolge durchläuft ein Produkt die Phasen des Produktlebenszyklus?',
            options: ['Wachstum – Einführung – Sättigung – Reife – Rückgang', 'Reife – Wachstum – Einführung – Rückgang – Sättigung', 'Sättigung – Rückgang – Einführung – Wachstum – Reife', 'Einführung – Wachstum – Reife – Sättigung – Rückgang'],
            correctIndex: 3,
            explanation: 'Der Produktlebenszyklus verläuft von der Einführung über Wachstum und Reife bis zu Sättigung und Rückgang.',
          },
          {
            question: 'Ein Produkt hat sowohl einen hohen relativen Marktanteil als auch ein hohes Marktwachstum. Wie wird es in der Portfolioanalyse (Marktwachstums-Marktanteils-Matrix) bezeichnet?',
            options: ['Star', 'Cash Cow', 'Poor Dog', 'Question Mark'],
            correctIndex: 0,
            explanation: 'Produkte mit hohem Marktanteil und hohem Marktwachstum werden in der BCG-Matrix als "Stars" bezeichnet.',
          },
          {
            question: 'Welche Produkte werden in der Portfolioanalyse als „Cash Cows" bezeichnet?',
            options: ['Produkte mit niedrigem Marktanteil und niedrigem Marktwachstum', 'Produkte mit hohem Marktanteil und niedrigem Marktwachstum', 'Produkte mit niedrigem Marktanteil und hohem Marktwachstum', 'Produkte mit hohem Marktanteil und hohem Marktwachstum'],
            correctIndex: 1,
            explanation: 'Cash Cows haben einen hohen Marktanteil bei nur noch geringem Marktwachstum und liefern stabile Erträge.',
          },
          {
            question: 'Loopy nimmt eine schlecht verkaufte Süßigkeit komplett aus ihrem Sortiment. Welches produktpolitische Instrument setzt sie damit ein?',
            options: ['Produktinnovation', 'Produktvariation', 'Produktelimination', 'Produktdifferenzierung'],
            correctIndex: 2,
            explanation: 'Die Produktelimination bezeichnet das vollständige Entfernen eines Produkts aus dem Sortiment.',
          },
          {
            question: 'Loopy bietet neben Bonbons auch Schokolade und Kaugummi an, also mehrere unterschiedliche Produktlinien. Welcher Fachbegriff beschreibt das?',
            options: ['Sortimentstiefe', 'Produktdifferenzierung', 'Markenpolitik', 'Sortimentsbreite'],
            correctIndex: 3,
            explanation: 'Die Sortimentsbreite gibt die Anzahl unterschiedlicher Produktlinien an, die Sortimentstiefe die Anzahl der Varianten innerhalb einer Produktlinie.',
          },
          {
            question: 'Loopy berechnet den Verkaufspreis eines neuen Bonbons, indem sie zu ihren Selbstkosten einen Gewinnaufschlag addiert. Welches Preisfindungsverfahren nutzt sie?',
            options: ['Kostenorientierte Preisbildung', 'Nachfrageorientierte Preisbildung', 'Konkurrenzorientierte Preisbildung', 'Psychologische Preisbildung'],
            correctIndex: 0,
            explanation: 'Bei der kostenorientierten Preisbildung wird der Preis auf Basis der Selbstkosten plus Gewinnaufschlag ermittelt.',
          },
          {
            question: 'Ein Unternehmen setzt beim Marktstart eines neuen Produkts bewusst einen niedrigen Preis an, um schnell viele Kund:innen zu gewinnen. Wie heißt diese Preisstrategie?',
            options: ['Hochpreisstrategie (Skimming)', 'Niedrigpreisstrategie (Penetration)', 'Prestigepreisstrategie', 'Mittelpreisstrategie'],
            correctIndex: 1,
            explanation: 'Die Niedrigpreisstrategie (Penetrationsstrategie) zielt darauf ab, durch einen niedrigen Einführungspreis schnell Marktanteile zu gewinnen.',
          },
          {
            question: 'Loopy verkauft eine Tüte Süßigkeiten um € 2,99 statt € 3,00. Welche psychologische Preisstrategie wendet sie damit an?',
            options: ['Prestigepreis', 'Dynamic Pricing', 'Schwellenpreis', 'Mengenrabatt'],
            correctIndex: 2,
            explanation: 'Schwellenpreise liegen knapp unter einem runden Betrag und wirken auf Kund:innen psychologisch günstiger.',
          },
          {
            question: 'Ein Fluganbieter verändert seine Ticketpreise laufend je nach Nachfrage und Auslastung in Echtzeit. Wie nennt man diese digitale Preisstrategie?',
            options: ['Kostenorientierte Preisbildung', 'Skimmingstrategie', 'Personalisierte Preisfindung', 'Dynamische Preisfindung (Dynamic Pricing)'],
            correctIndex: 3,
            explanation: 'Beim Dynamic Pricing werden Preise automatisiert und in Echtzeit an Nachfrage und Auslastung angepasst.',
          },
          {
            question: 'Welche der folgenden Maßnahmen gehört zur Konditionspolitik?',
            options: ['Die Gewährung eines Mengenrabatts bei größeren Bestellungen', 'Die Gestaltung der Verpackung eines Produkts', 'Die Auswahl des Werbeträgers', 'Die Wahl des Vertriebswegs'],
            correctIndex: 0,
            explanation: 'Rabatte wie Mengenrabatte zählen zur Konditionspolitik, die Zahlungs- und Lieferbedingungen regelt.',
          },
          {
            question: 'Loopy verkauft ihre Süßigkeiten ausschließlich über ihren eigenen Online-Shop, ganz ohne Zwischenhändler. Welchen Absatzweg nutzt sie damit?',
            options: ['Indirekter Absatzweg', 'Direkter Absatzweg', 'Selektiver Absatzweg', 'Exklusiver Absatzweg'],
            correctIndex: 1,
            explanation: 'Beim direkten Absatzweg verkauft der Hersteller seine Produkte ohne Zwischenhändler direkt an die Kund:innen.',
          },
          {
            question: 'Eine Luxusuhrenmarke verkauft ihre Produkte nur über eine sehr geringe Anzahl streng ausgewählter Fachhändler weltweit. Um welche Vertriebsart handelt es sich?',
            options: ['Intensive Distribution', 'Selektive Distribution', 'Exklusive Distribution', 'Digitale Distribution'],
            correctIndex: 2,
            explanation: 'Bei der exklusiven Distribution wird nur eine sehr begrenzte Anzahl sorgfältig ausgewählter Händler beliefert.',
          },
          {
            question: 'Welches der folgenden Instrumente gehört NICHT zu den klassischen Instrumenten der Kommunikationspolitik?',
            options: ['Werbung', 'Öffentlichkeitsarbeit (Public Relations)', 'Verkaufsförderung', 'Sortimentspolitik'],
            correctIndex: 3,
            explanation: 'Sortimentspolitik ist Teil der Produktpolitik, nicht der Kommunikationspolitik.',
          },
          {
            question: 'Welche drei Bereiche umfasst die Corporate Identity eines Unternehmens typischerweise?',
            options: ['Corporate Design, Corporate Communication, Corporate Behavior', 'Produktpolitik, Preispolitik, Distributionspolitik', 'Marktforschung, Werbung, Vertrieb', 'Segmentierung, Targeting, Positionierung'],
            correctIndex: 0,
            explanation: 'Corporate Identity setzt sich aus Corporate Design, Corporate Communication und Corporate Behavior zusammen.',
          },
          {
            question: 'Loopy gestaltet eine Werbeanzeige nach der AIDA-Formel. Wofür steht das „D" in AIDA?',
            options: ['Discount', 'Desire (Verlangen)', 'Distribution', 'Decision'],
            correctIndex: 1,
            explanation: 'AIDA steht für Attention (Aufmerksamkeit), Interest (Interesse), Desire (Verlangen) und Action (Handlung).',
          },
          {
            question: 'Ein Unternehmen schaltet einen TV-Werbespot, der sich mit derselben Botschaft an eine große, undifferenzierte Zielgruppe richtet. Um welche Form der Werbung handelt es sich?',
            options: ['Einzelwerbung', 'Individualwerbung', 'Massenwerbung', 'Below-the-line-Werbung'],
            correctIndex: 2,
            explanation: 'Massenwerbung richtet sich mit einer einheitlichen Botschaft an ein breites, nicht weiter differenziertes Publikum.',
          },
          {
            question: 'Loopy verteilt in ihrem Geschäft kostenlose Süßigkeitenproben, um Kund:innen zum Kauf zu animieren. Welches Kommunikationsinstrument setzt sie damit ein?',
            options: ['Öffentlichkeitsarbeit', 'Sponsoring', 'Corporate Identity', 'Verkaufsförderung'],
            correctIndex: 3,
            explanation: 'Produktproben sind eine typische Maßnahme der Verkaufsförderung, um Kund:innen kurzfristig zum Kauf anzuregen.',
          },
          {
            question: 'Was versteht man unter Sponsoring als Instrument der Kommunikationspolitik?',
            options: ['Die finanzielle oder materielle Unterstützung von Personen oder Organisationen gegen eine Werbeleistung', 'Die kostenlose Weitergabe von Produktproben an Kund:innen', 'Die planmäßige Sammlung von Marktdaten', 'Die Festlegung des Verkaufspreises eines Produkts'],
            correctIndex: 0,
            explanation: 'Beim Sponsoring unterstützt ein Unternehmen Personen oder Organisationen finanziell oder materiell gegen eine vereinbarte Werbeleistung.',
          },
          {
            question: 'Was ist das zentrale Ziel der Öffentlichkeitsarbeit (Public Relations) eines Unternehmens?',
            options: ['Kurzfristig den Absatz durch Rabattaktionen zu steigern', 'Ein positives Image und Vertrauen in der Öffentlichkeit aufzubauen', 'Den Verkaufspreis eines Produkts zu senken', 'Neue Vertriebswege zu erschließen'],
            correctIndex: 1,
            explanation: 'Öffentlichkeitsarbeit zielt darauf ab, langfristig Vertrauen und ein positives Image in der Öffentlichkeit aufzubauen.',
          },
        ],
      },
      {
        id: 'material-warenwirtschaft',
        title: 'Material- & Warenwirtschaft im Überblick',
        questions: [
          {
            question: 'Was ist die Aufgabe der Material- und Warenwirtschaft?',
            options: ['Ausschließlich den Verkauf der fertigen Produkte zu organisieren', 'Jene Güter zur Verfügung zu stellen, die ein Unternehmen zur Leistungserstellung benötigt', 'Die Löhne und Gehälter der Mitarbeiter zu verwalten', 'Die Werbung für Loopy\'s Candy Store zu planen'],
            correctIndex: 1,
            explanation: 'Die Material- und Warenwirtschaft hat die Aufgabe, jene Güter zur Verfügung zu stellen, die ein Unternehmen zur Leistungserstellung benötigt.',
          },
          {
            question: 'Damit die Leistungserstellung in Loopy\'s Candy Store störungsfrei abläuft, müssen die benötigten Güter in der richtigen Qualität, zum richtigen Zeitpunkt, am richtigen Ort und ...',
            options: ['zum günstigsten Preis am Weltmarkt', 'in der richtigen Menge bereitgestellt werden', 'nur von einem einzigen Lieferanten stammen', 'ausschließlich aus dem Ausland importiert werden'],
            correctIndex: 1,
            explanation: 'Die benötigten Güter müssen in der richtigen Qualität, in der richtigen Menge, zum richtigen Zeitpunkt und am richtigen Ort bereitgestellt werden.',
          },
          {
            question: 'Welcher Begriff wird vor allem bei Handelsbetrieben wie Loopy\'s Candy Store verwendet, wenn es um die Beschaffung der Handelswaren für Kunden geht?',
            options: ['Materialwirtschaft', 'Produktionswirtschaft', 'Warenwirtschaft', 'Finanzwirtschaft'],
            correctIndex: 2,
            explanation: 'Der Begriff Warenwirtschaft wird v. a. bei Handelsbetrieben verwendet (Beschaffung der Handelswaren für die Kunden), während Materialwirtschaft v. a. bei Produktionsbetrieben verwendet wird (Beschaffung von Roh-, Hilfs- und Betriebsstoffen).',
          },
          {
            question: 'In welche vier Bereiche gliedern sich die Aufgaben der Material- und Warenwirtschaft?',
            options: ['Beschaffung, Lagerung, Verteilung und Entsorgung', 'Produktion, Marketing, Vertrieb und Personal', 'Einkauf, Verkauf, Buchhaltung und Controlling', 'Planung, Organisation, Führung und Kontrolle'],
            correctIndex: 0,
            explanation: 'Die Bereiche der Material- und Warenwirtschaft sind Beschaffung, Lagerung, Verteilung und Entsorgung.',
          },
          {
            question: 'Was versteht man unter Supply-Chain-Management im Überblick der Material- und Warenwirtschaft?',
            options: ['Die Verwaltung der Kundenreklamationen', 'Die Gestaltung der Verkaufsregale im Süßwarenladen', 'Wichtige Entscheidungen entlang der gesamten Lieferkette', 'Die Berechnung der Mitarbeitergehälter'],
            correctIndex: 2,
            explanation: 'Supply-Chain-Management umfasst wichtige Entscheidungen entlang der gesamten Lieferkette, wie es zum Beispiel im Beispiel des Lebensmittelhändlers Hofer sichtbar wird, der einen Großteil seines Sortiments von regionalen Produzenten bezieht, um lange Transportwege zu vermeiden.',
          },
        ],
      },
      {
        id: 'beschaffungsmarketing',
        title: 'Beschaffungsmarketing & -logistik',
        questions: [
          {
            question: 'Welche beschaffungspolitische Tätigkeit bildet laut Lehrbuch die Grundlage für den gezielten Einsatz der übrigen beschaffungspolitischen Instrumente?',
            options: ['Beschaffungskommunikationspolitik', 'Beschaffungsdurchführung', 'Beschaffungsmarktforschung', 'Beschaffungskonditionenpolitik'],
            correctIndex: 2,
            explanation: 'Am Beginn steht die Suche nach geeigneten Lieferanten im Rahmen der Beschaffungsmarktforschung, bevor mithilfe der beschaffungspolitischen Instrumente die eigentlichen Einkaufsentscheidungen getroffen werden.',
          },
          {
            question: 'Welche vier Bereiche umfassen laut Lehrbuch die beschaffungspolitischen Instrumente?',
            options: ['Programmpolitik, Preispolitik, Produktionspolitik, Personalpolitik', 'Marktforschung, Werbepolitik, Distributionspolitik, Servicepolitik', 'Sortimentspolitik, Preispolitik, Kommunikationspolitik, Verkaufspolitik', 'Programmpolitik, Methodenpolitik, Konditionenpolitik, Kommunikationspolitik'],
            correctIndex: 3,
            explanation: 'Die beschaffungspolitischen Instrumente umfassen Beschaffungsprogrammpolitik, Beschaffungsmethodenpolitik, Beschaffungskonditionenpolitik und Beschaffungskommunikationspolitik.',
          },
          {
            question: 'Loopy besucht eine Fachmesse, um neue Kakao-Lieferanten für ihre Candy Store kennenzulernen. Um welche Art der Beschaffungsmarktforschung handelt es sich dabei?',
            options: ['Primärforschung, da neue Informationen direkt beschafft werden', 'Sekundärforschung, da vorhandene Unterlagen ausgewertet werden', 'Weder Sekundär- noch Primärforschung, sondern Beschaffungsprogrammpolitik', 'Beschaffungskommunikationspolitik, da mit Lieferanten kommuniziert wird'],
            correctIndex: 0,
            explanation: 'Der Besuch von Veranstaltungen bzw. Messen zählt zur Primärforschung, bei der neue Informationen direkt beschafft werden – im Gegensatz zur Sekundärforschung, die vorhandene Unterlagen auswertet.',
          },
          {
            question: 'Welche der folgenden Quellen zählt laut Lehrbuch zur Sekundärforschung im Rahmen der Beschaffungsmarktforschung?',
            options: ['Die Befragung von Branchenexperten', 'Unternehmensinterne Lieferantenkarteien und Lagerstatistiken', 'Der Besuch einer Fachmesse', 'Eine direkte Anfrage bei einem neuen Lieferanten'],
            correctIndex: 1,
            explanation: 'Zur Sekundärforschung zählt die Auswertung bereits vorhandener Informationen, z. B. unternehmensinterne Unterlagen wie Lieferantenkarteien oder Lagerstatistiken.',
          },
          {
            question: 'Was wird im Rahmen der Beschaffungsprogrammpolitik festgelegt?',
            options: ['Zu welchem Zeitpunkt Güter beschafft werden', 'Zu welchen Konditionen mit Lieferanten verhandelt wird', 'Wie die Beziehung zu Lieferanten kommunikativ gepflegt wird', 'Welche Sachgüter und Dienstleistungen in welcher Menge zu beschaffen sind'],
            correctIndex: 3,
            explanation: 'Die Beschaffungsprogrammpolitik legt fest, welche Güter (Sachgüter und Dienstleistungen) in welcher Menge zu beschaffen sind – abgestimmt auf das eigene Produktions- bzw. Sortimentsprogramm.',
          },
          {
            question: 'Wie wird im ersten Schritt der ABC-Analyse der wertmäßige Jahresbedarf eines Artikels berechnet?',
            options: ['Jahresbedarf in Stück geteilt durch Preis je Stück', 'Anzahl der Lieferanten multipliziert mit dem Lagerbestand', 'Jahresbedarf in Stück multipliziert mit Preis je Stück', 'Durchschnittlicher Lagerbestand multipliziert mit der Anzahl der Bestellungen'],
            correctIndex: 2,
            explanation: 'Der wertmäßige Jahresbedarf ergibt sich aus dem Jahresbedarf in Mengeneinheiten multipliziert mit dem Preis je Einheit.',
          },
          {
            question: 'Wie werden A-, B- und C-Güter im Rahmen der ABC-Analyse laut Lehrbuch anhand des kumulierten Wertanteils üblicherweise abgegrenzt?',
            options: ['A-Güter bis 75 %, B-Güter 75–90 %, C-Güter über 90 %', 'A-Güter bis 50 %, B-Güter 50–80 %, C-Güter über 80 %', 'A-Güter bis 90 %, B-Güter 90–95 %, C-Güter über 95 %', 'A-Güter bis 30 %, B-Güter 30–60 %, C-Güter über 60 %'],
            correctIndex: 0,
            explanation: 'Die Grenzen werden häufig bei einem kumulierten Wertanteil von 75 % (A-Güter) bzw. 90 % (B-Güter) festgelegt, wobei die genauen Grenzen von Unternehmen zu Unternehmen verschieden sind.',
          },
          {
            question: 'Nach wem ist die in der ABC-Analyse verwendete Lorenzkurve benannt?',
            options: ['Nach einem österreichischen Betriebswirtschaftler', 'Nach Max Otto Lorenz, einem US-amerikanischen Statistiker und Ökonomen', 'Nach dem Gründer eines großen Logistikkonzerns', 'Nach einer deutschen Wirtschaftsprüfungsgesellschaft'],
            correctIndex: 1,
            explanation: 'Die Lorenzkurve geht auf Max Otto Lorenz zurück, einen US-amerikanischen Statistiker und Ökonomen.',
          },
          {
            question: 'Welche beschaffungspolitische Maßnahme ist laut Lehrbuch für A-Güter typisch?',
            options: ['Kaum Beschaffungsmarktanalysen und hoher Lagerbestand', 'Seltenes Bestellen großer Mengen, um Bestellkosten zu senken', 'Vollständiger Verzicht auf Lieferantenanalysen', 'Ausführliche Beschaffungsmarktanalysen und ein niedriger Lagerbestand'],
            correctIndex: 3,
            explanation: 'A-Güter sind die wichtigsten Güter und erfordern die meiste beschaffungspolitische Aufmerksamkeit: ausführliche Marktanalysen und einen niedrigen Lagerbestand, um die Kapitalbindung gering zu halten.',
          },
          {
            question: 'Wie geht ein Unternehmen laut Lehrbuch typischerweise mit C-Gütern um?',
            options: ['Es werden aufwendige Beschaffungsmarktanalysen durchgeführt', 'Es wird ausschließlich just-in-time und ohne Lagerbestand gearbeitet', 'Es wird selten, dafür aber in größeren Mengen bestellt, um die Bestellkosten niedrig zu halten', 'Es werden täglich neue Lieferanten gesucht'],
            correctIndex: 2,
            explanation: 'Bei C-Gütern werden kaum Beschaffungsmarktanalysen durchgeführt; da sie geringe Bedeutung haben, bestellt man selten, aber in größeren Mengen, um die Bestellkosten niedrig zu halten.',
          },
          {
            question: 'Wie berechnet sich der Meldebestand?',
            options: ['Sicherheitsbestand geteilt durch Beschaffungszeit', 'Durchschnittsverbrauch mal Beschaffungszeit plus Sicherheitsbestand', 'Jahresbedarf geteilt durch Anzahl der Bestellungen', 'Durchschnittlicher Lagerbestand minus Sicherheitsbestand'],
            correctIndex: 1,
            explanation: 'Meldebestand = Durchschnittsverbrauch × Beschaffungszeit + Sicherheitsbestand.',
          },
          {
            question: 'Wie funktioniert das Bestellpunktsystem bei der bestandsgesteuerten Bedarfsermittlung?',
            options: ['Sobald der Meldebestand erreicht wird, wird automatisch eine festgelegte Bestellmenge ausgelöst', 'In festen Zeitabständen wird kontrolliert und dann über eine Bestellung entschieden', 'Es wird nur einmal jährlich zu einem fixen Termin bestellt', 'Die Bestellung erfolgt ausschließlich nach Kundenauftrag ohne Lagerbestand'],
            correctIndex: 0,
            explanation: 'Beim Bestellpunktsystem werden Bestellmenge und Meldebestand festgelegt. Wird der Meldebestand erreicht, löst dies automatisch eine Bestellung aus.',
          },
          {
            question: 'Was unterscheidet das Bestellrhythmussystem vom Bestellpunktsystem?',
            options: ['Beim Bestellrhythmussystem gibt es kein Kontrollintervall', 'Das Bestellrhythmussystem kommt nur bei A-Gütern zum Einsatz', 'Beim Bestellrhythmussystem entfällt der Meldebestand vollständig', 'Beim Bestellrhythmussystem wird in festgelegten Kontrollintervallen überprüft, ob und wie viel bestellt wird'],
            correctIndex: 3,
            explanation: 'Beim Bestellrhythmussystem werden ein Kontrollintervall und ein Meldebestand festgelegt; bei jeder Kontrolle wird entschieden, ob und wie viel bestellt wird – besonders sinnvoll bei unregelmäßigem Warenbedarf.',
          },
          {
            question: 'Was versteht man unter dem Optionalsystem der Bedarfsermittlung?',
            options: ['Ein System, bei dem überhaupt kein Meldebestand definiert wird', 'Ein System, das ausschließlich für C-Güter angewendet wird', 'Eine Kombination aus Bestellpunkt- und Bestellrhythmussystem: Kontrolle in Intervallen plus sofortige Bestellung bei Erreichen des Meldebestands', 'Ein System, bei dem jede Bestellung individuell verhandelt wird'],
            correctIndex: 2,
            explanation: 'Das Optionalsystem kombiniert beide Verfahren: Es wird in bestimmten Intervallen kontrolliert und zusätzlich immer dann bestellt, wenn der Meldebestand erreicht wird.',
          },
          {
            question: 'Was kennzeichnet ein geschlossenes System (Closed Shop) im E-Procurement?',
            options: ['Zwei Unternehmen sind exklusiv über ihre IT-Systeme miteinander verbunden', 'Ein großer Händler bietet über ein Portal seine Produkte mehreren Kunden an', 'Ein unabhängiger Marktplatz stellt eine offene Beschaffungsplattform für viele Anbieter zur Verfügung', 'Beschaffung erfolgt ausschließlich telefonisch ohne IT-Unterstützung'],
            correctIndex: 0,
            explanation: 'Bei geschlossenen Systemen sind zwei Unternehmen exklusiv miteinander verbunden. Beim halboffenen System bietet ein großer Händler mehreren Kunden ein Portal, beim offenen System (Katalogsystem) steht eine unabhängige Beschaffungsplattform zur Verfügung.',
          },
          {
            question: 'Wie wird das Beschaffungsprinzip bezeichnet, bei dem die Lieferung möglichst unmittelbar vor der Leistungserstellung erfolgt?',
            options: ['Vorratsbeschaffung', 'Just-in-time-Beschaffung', 'Einzelbeschaffung', 'Beschaffungsprogrammpolitik'],
            correctIndex: 1,
            explanation: 'Wird angestrebt, dass die Lieferung unmittelbar vor der Leistungserstellung erfolgt, spricht man von Just-in-time-Beschaffung – im Gegensatz zur Vorratsbeschaffung (größere Mengen auf Lager) oder Einzelbeschaffung (erst bei konkretem Kundenauftrag).',
          },
        ],
      },
      {
        id: 'lager-transport-entsorgung',
        title: 'Lager-, Transport- & Entsorgungslogistik',
        questions: [
          {
            question: 'Welche Lagerfunktion liegt vor, wenn Loopy große Mengen an Kakao einkauft, weil sie mit steigenden Preisen rechnet?',
            options: ['Spekulationsfunktion', 'Sicherungsfunktion', 'Umformungsfunktion', 'Warenpräsentationsfunktion'],
            correctIndex: 0,
            explanation: 'Bei der Spekulationsfunktion werden Waren frühzeitig gekauft, wenn zukünftig steigende Preise erwartet werden.',
          },
          {
            question: 'Welche Lagerfunktion beschreibt das Reifen von Holz, Tabak, Whisky oder Käse während der Lagerung?',
            options: ['Sicherungsfunktion', 'Umformungsfunktion (Reifefunktion)', 'Ausgleichs- bzw. Überbrückungsfunktion', 'Entsorgungsfunktion'],
            correctIndex: 1,
            explanation: 'Die Umformungsfunktion (Reifefunktion) beschreibt, dass bestimmte Güter wie Holz, Tabak, Whisky oder Käse während der Lagerung reifen bzw. sich verändern.',
          },
          {
            question: 'In welcher Lagerart werden wetterunempfindliche und diebstahlgefährdete Güter wie Lebensmittel oder Elektroartikel typischerweise gelagert?',
            options: ['Offenes Lager', 'Geschlossenes Lager', 'Halboffenes Lager', 'Freiplatzlager'],
            correctIndex: 1,
            explanation: 'Im geschlossenen Lager werden wetterempfindliche und diebstahlgefährdete Waren in einem Gebäude gelagert, z. B. Lebensmittel oder Elektroartikel.',
          },
          {
            question: 'Welchen Vorteil hat ein zentrales Lager gegenüber mehreren dezentralen Lagern laut Lehrbuchbeispiel von Spar?',
            options: ['Kürzere Transportwege zu den Kunden', 'Höhere Anpassungsfähigkeit bei regionalen Ausfällen', 'Höhere Mindestbestände wodurch die Kapitalbindung steigt', 'Geringere Lager- und Personalkosten, da nur ein Lager erforderlich ist'],
            correctIndex: 3,
            explanation: 'Ein zentrales Lager bietet u. a. geringere Lager- und Personalkosten sowie eine effizientere Organisation, hat aber den Nachteil längerer Transportwege zu den Filialen.',
          },
          {
            question: 'Wie funktioniert das Freiplatzsystem (chaotisches Lager), wie es im Lehrbuch am Beispiel von Amazon beschrieben wird?',
            options: ['Jede Ware hat einen fest vorgeschriebenen Lagerplatz', 'Die Ware wird dort gelagert, wo gerade Platz frei ist, und die Lagerplätze sind beliebig austauschbar', 'Waren werden ausschließlich alphabetisch sortiert gelagert', 'Es dürfen nur Waren derselben Produktgruppe gemeinsam gelagert werden'],
            correctIndex: 1,
            explanation: 'Beim Freiplatzsystem wird die Ware dort gelagert, wo gerade Platz frei ist; die Lagerplätze sind beliebig austauschbar, was ein computergestütztes Lagerverwaltungssystem erfordert.',
          },
          {
            question: 'Wie berechnet sich die Lagerumschlagshäufigkeit?',
            options: ['Wareneinsatz geteilt durch durchschnittlichen Lagerbestand', 'Durchschnittlicher Lagerbestand geteilt durch Wareneinsatz', '365 geteilt durch Lagerumschlagsdauer', 'Warenbestand am 1. Jänner geteilt durch Warenbestand am 31. Dezember'],
            correctIndex: 0,
            explanation: 'Lagerumschlagshäufigkeit = Wareneinsatz / durchschnittlicher Lagerbestand. Sie gibt an, wie oft eine Ware innerhalb eines Jahres durchschnittlich verkauft und ersetzt wurde.',
          },
          {
            question: 'Welches Ziel verfolgt die Transportlogistik laut Lehrbuch gegenüber den Kunden?',
            options: ['Minimierung der Versorgungsgeschwindigkeit und -sicherheit', 'Maximierung der Versorgungsgeschwindigkeit und -sicherheit gegenüber den Kunden', 'Maximierung der Transport- und Lieferzeiten', 'Minimierung der Anzahl an Lieferanten'],
            correctIndex: 1,
            explanation: 'Ziele der Transportlogistik sind u. a. die Minimierung der Transport- und Lieferzeiten sowie die Maximierung der Versorgungsgeschwindigkeit und -sicherheit gegenüber den Kunden.',
          },
          {
            question: 'Was wurde in Österreich mit 1.1.2025 im Rahmen der Entsorgungslogistik für Einweg-Getränkeverpackungen eingeführt?',
            options: ['Ein Verbot von PET-Flaschen und Alu-Dosen', 'Eine verpflichtende Mehrwegquote von 100 % für alle Getränke', 'Eine Steuer von 25 Cent auf jede verkaufte Getränkedose ohne Rückerstattung', 'Ein Pfandsystem mit 25 Cent Pfand pro Flasche bzw. Dose, das bei Rückgabe rückerstattet wird'],
            correctIndex: 3,
            explanation: 'Seit 1.1.2025 gilt in Österreich ein Pfandsystem: Wer Getränke in PET-Flaschen oder Alu-Dosen kauft, zahlt 25 Cent Pfand, das bei Rückgabe des Leerguts zurückerstattet wird.',
          },
        ],
      },
      {
        id: 'supply-chain-management',
        title: 'Supply Chain Management',
        questions: [
          {
            question: 'Was versteht man laut Lehrbuch unter der Supply Chain (Lieferkette)?',
            options: ['Nur die Transportunternehmen, die Waren zwischen Lieferant und Kunde befördern', 'Alle Unternehmen, die an der Erzeugung eines Produktes beteiligt sind – vom Rohstoff bis zum Endverbraucher', 'Ausschließlich die Marketingabteilung eines Unternehmens', 'Die interne Buchhaltung eines Unternehmens'],
            correctIndex: 1,
            explanation: 'Die Supply Chain (Lieferkette, Wertschöpfungskette) umfasst alle Unternehmen, die an der Erzeugung eines Produktes beteiligt sind – von der Rohstoffgewinnung bis zum Endverbraucher.',
          },
          {
            question: 'Was bezeichnet man als Supply-Chain-Management (SCM)?',
            options: ['Die Planung des optimalen Material- und Informationsflusses auf allen Stufen der Lieferkette', 'Die alleinige Verantwortung eines einzelnen Unternehmens für seine eigene Produktion', 'Die Kontrolle der Mitarbeiterzufriedenheit entlang der Lieferkette', 'Ausschließlich die Auswahl des günstigsten Rohstofflieferanten'],
            correctIndex: 0,
            explanation: 'Die Planung des optimalen Material- und Informationsflusses auf allen Stufen der Lieferkette bezeichnet man als Supply-Chain-Management (SCM).',
          },
          {
            question: 'Welche Chance bietet laut Lehrbuch ein wirksames Supply-Chain-Management für Unternehmen?',
            options: ['Eine höhere Abhängigkeit von einzelnen Lieferanten', 'Ein höherer Zeitaufwand durch mehr Komplexität', 'Eine geringere Kapitalbindung durch geringere Lagerbestände', 'Ein höheres Risiko für Imageschäden'],
            correctIndex: 2,
            explanation: 'Zu den Chancen zählen u. a. eine erhöhte Kundenzufriedenheit, geringere Kapitalbindung durch geringere Lagerbestände und eine verringerte Durchlaufzeit.',
          },
          {
            question: 'Welches Risiko des Supply-Chain-Managements zeigt das Lehrbuchbeispiel des Spielwarenherstellers Mattel?',
            options: ['Zu hohe Lagerbestände durch zu viele Lieferanten', 'Zu geringe Kapitalbindung durch zu niedrige Lagerbestände', 'Ein zu kurzes Sortiment an Spielzeugen', 'Imageschaden durch Qualitätsmängel eines Sublieferanten (bleihaltige Farbe)'],
            correctIndex: 3,
            explanation: 'Bei Mattel wurde in einem in China produzierten Spielzeug bleihaltige Farbe eines Sublieferanten gefunden – ein Beispiel dafür, dass Fehler entlang der Lieferkette zu Imageschäden führen können.',
          },
          {
            question: 'Was versteht man unter einer "resilienten" Supply Chain?',
            options: ['Eine Lieferkette, die möglichst wenige Lieferanten hat', 'Eine Lieferkette, die gegenüber unvorhersehbaren Ereignissen wie Krieg, Pandemie oder Wirtschaftskrise widerstandsfähig ist', 'Eine Lieferkette, die ausschließlich auf Just-in-time setzt', 'Eine Lieferkette ohne jegliche Pufferbestände'],
            correctIndex: 1,
            explanation: 'Resiliente Supply Chains sind gegenüber unvorhersehbaren Ereignissen (z. B. Krieg, Pandemie, Wirtschaftskrise) widerstandsfähig, sodass Störungen abgefedert bzw. überwunden werden können.',
          },
          {
            question: 'Welche Maßnahme für ein erfolgreiches SCM setzt Apple laut Lehrbuchbeispiel um, indem ein Teil der iPhone-Produktion von China nach Indien verlagert wird?',
            options: ['Kooperation optimieren', 'Pufferbestände einplanen', 'Sich stärker an den Kunden orientieren', 'Auf mehrere Lieferanten bzw. Partner setzen (Multi-sourcing)'],
            correctIndex: 3,
            explanation: 'Durch Multi-sourcing – etwa die teilweise Verlagerung der iPhone-Produktion von China nach Indien – erhöht Apple die Widerstandsfähigkeit seiner Lieferkette gegenüber Störungen an einem einzelnen Standort.',
          },
        ],
      },
      {
        id: 'logistik',
        title: 'Logistik',
        questions: [
          {
            question: 'Was umfasst der Begriff Logistik laut Lehrbuch?',
            options: ['Nur den reinen Straßentransport von Waren', 'Ausschließlich die Lagerhaltung eines Unternehmens', 'Die Buchhaltung im Bereich Wareneinkauf', 'Die ganzheitliche Planung, Steuerung, Durchführung und Kontrolle aller Güter- und Informationsflüsse'],
            correctIndex: 3,
            explanation: 'Die Logistik umfasst die ganzheitliche Planung, Steuerung, Durchführung und Kontrolle aller Güter- und Informationsflüsse. Sie ist ein Teil der Supply Chain.',
          },
          {
            question: 'Welche vier Arten von Logistikbetrieben werden laut Lehrbuch unterschieden?',
            options: ['Spediteur, Frachtführer, Lager- und Umschlagsbetriebe, Zustelldienst', 'Hersteller, Großhändler, Einzelhändler, Endverbraucher', 'Straßen-, Schienen-, Wasser- und Luftverkehr', 'Einkauf, Produktion, Vertrieb, Marketing'],
            correctIndex: 0,
            explanation: 'Als Logistikbetriebe werden u. a. Spediteur (Transportorganisation), Frachtführer (Transportbetrieb), Lager- und Umschlagsbetriebe sowie Zustelldienste unterschieden.',
          },
          {
            question: 'Was macht ein Spediteur laut Lehrbuch?',
            options: ['Er führt den tatsächlichen Transport selbst mit eigenen Lkw durch', 'Er organisiert im eigenen Namen Transporte und beauftragt Frachtführer mit der Durchführung', 'Er verkauft ausschließlich Transportversicherungen', 'Er ist ausschließlich für die Zollabfertigung an Grenzen zuständig'],
            correctIndex: 1,
            explanation: 'Spediteure organisieren im eigenen Namen Transporte und alle dazugehörigen Dienstleistungen; sie beauftragen dafür Frachtführer (Transportbetriebe), die den Transport tatsächlich durchführen.',
          },
          {
            question: 'Wodurch unterscheidet sich der Frachtführer vom Spediteur?',
            options: ['Der Frachtführer organisiert nur die Route, ohne selbst zu transportieren', 'Der Frachtführer ist immer identisch mit dem Spediteur', 'Der Frachtführer führt den tatsächlichen Transport im Straßen-, Schienen-, Leitungs-, Schiffs- oder Luftverkehr selbst durch', 'Der Frachtführer ist ausschließlich für Zollformalitäten zuständig'],
            correctIndex: 2,
            explanation: 'Frachtführer führen den tatsächlichen Transport im Straßen-, Schienen-, Leitungs-, Schiffs- und Luftverkehr für andere Unternehmen durch, während der Spediteur den Transport organisiert.',
          },
          {
            question: 'Welches Recht erlaubt es dem Spediteur, einen Transport selbst durchzuführen und dabei die Rechte und Pflichten eines Frachtführers zu übernehmen?',
            options: ['Pfandrecht', 'Speditionsprovision', 'Sorgfaltspflicht', 'Selbsteintrittsrecht'],
            correctIndex: 3,
            explanation: 'Durch das Selbsteintrittsrecht kann der Spediteur Transporte auch selbst organisieren und durchführen, wodurch er die Rechte und Pflichten eines Frachtführers übernimmt.',
          },
          {
            question: 'Welcher Nachteil wird dem Straßengüterverkehr laut Lehrbuch-Übersicht zugeschrieben?',
            options: ['Lieferverzögerungen durch Staus und Unfälle', 'Geringe Ladekapazität', 'Bindung an ein festes Schienennetz', 'Hohe Schadensanfälligkeit durch Piraterie'],
            correctIndex: 0,
            explanation: 'Zu den Nachteilen des Straßengüterverkehrs zählen u. a. ein schadstoffreiches Transportmittel, Sonn- und Feiertagsfahrverbote sowie Lieferverzögerungen durch Staus und Unfälle.',
          },
          {
            question: 'Wodurch unterscheidet sich der Frachtführer im Aufgabenbereich vom Spediteur?',
            options: ['Er organisiert im eigenen Namen Transporte und beauftragt andere Unternehmen', 'Er führt den tatsächlichen Transport im Straßen-, Schienen-, Leitungs-, Schiffs- und Luftverkehr durch', 'Er ist ausschließlich für Zollformalitäten zuständig', 'Er übernimmt ausschließlich Lagerhaltung und Verpackung'],
            correctIndex: 1,
            explanation: 'Der Frachtführer ist zuständig für den tatsächlichen Transport im Straßen-, Schienen-, Leitungs-, Schiffs- und Luftverkehr, während der Spediteur diesen Transport im eigenen Namen organisiert und beauftragt.',
          },
          {
            question: 'Für welche Güter eignet sich der Schienengüterverkehr laut Lehrbuch besonders?',
            options: ['Leichte, verderbliche Ware wie Blumen', 'Termindringende Kleinsendungen', 'Schüttgüter wie Kies oder Sand sowie Gefahrgut', 'Ausschließlich hochwertige Waren'],
            correctIndex: 2,
            explanation: 'Der Schienengüterverkehr eignet sich für alle Stück- und Massengüter, Schüttgüter (z. B. Kies, Sand) sowie Gefahrgut wie chemische Produkte.',
          },
          {
            question: 'Welche Eigenschaft trifft laut Lehrbuch auf den Luftfrachtverkehr zu?',
            options: ['Er ist das kostengünstigste, aber langsamste Transportmittel', 'Er benötigt keine Umladevorgänge', 'Er ist das schnellste, aber gleichzeitig teuerste Transportmittel mit geringer Ladekapazität', 'Er ist nur für Massengüter im Überseebereich geeignet'],
            correctIndex: 2,
            explanation: 'Der Luftfrachtverkehr ist das schnellste Transportmittel mit hoher Netzdichte, aber gleichzeitig das teuerste mit geringer Ladekapazität – geeignet für leichte, verderbliche oder hochwertige Waren.',
          },
          {
            question: 'Worin unterscheiden sich Frachtbriefe von Traditionspapieren?',
            options: ['Frachtbriefe dienen als Nachweis des Warenversands, Traditionspapiere haben eine Wertpapierfunktion und verbriefen das Recht an der Ware', 'Frachtbriefe werden nur in der Seeschifffahrt verwendet, Traditionspapiere nur im Straßenverkehr', 'Beide Begriffe bezeichnen exakt dasselbe Dokument', 'Traditionspapiere werden nur für Begleitpapiere wie Packlisten verwendet'],
            correctIndex: 0,
            explanation: 'Frachtbriefe sind Dokumente, die als Nachweis dienen, dass die Ware versendet wurde. Traditionspapiere (z. B. Seekonnossement) haben eine Wertpapierfunktion und verbriefen das Recht an der Ware.',
          },
          {
            question: 'Wie haben sich laut Lehrbuch die CO2-Emissionen im österreichischen Straßengüterverkehr zwischen 1990 und 2019 trotz technischer Verbesserungen entwickelt?',
            options: ['Sie sind um mehr als die Hälfte gesunken', 'Sie sind trotz sinkender Emissionen pro Kilometer insgesamt um mehr als das Doppelte gestiegen, da die Fahrleistung stark zunahm', 'Sie sind exakt gleich geblieben', 'Sie wurden vollständig auf null reduziert'],
            correctIndex: 1,
            explanation: 'Die CO2-Emissionen im österreichischen Straßengüterverkehr stiegen zwischen 1990 (4,1 Mio. Tonnen) und 2019 (8,8 Mio. Tonnen) um mehr als das Doppelte – die Einsparungen pro Kilometer wurden durch die gestiegene Fahrleistung überkompensiert.',
          },
        ],
      },
      {
        id: 'der-handel',
        title: 'Der Handel – Bedeutender Teil unserer Wirtschaft',
        questions: [
          {
            question: 'Was unterscheidet den Einzelhandel grundsätzlich vom Großhandel?',
            options: ['Der Großhandel verkauft ausschließlich an Privatpersonen', 'Der Einzelhandel bearbeitet die Produkte wesentlich weiter, bevor er sie verkauft', 'Der Einzelhandel verkauft an Letztverbraucher, der Großhandel an Wiederverkäufer und Gewerbebetriebe', 'Der Großhandel handelt ausschließlich mit dem Ausland'],
            correctIndex: 2,
            explanation: 'Der Einzelhandel verkauft Produkte vor allem an Letztverbraucher (Konsumenten), während der Großhandel überwiegend an andere Unternehmen wie Einzelhändler oder Produktionsbetriebe liefert.',
          },
          {
            question: 'Wodurch zeichnen sich Handelsbetriebe grundsätzlich aus?',
            options: ['Sie stellen die verkauften Produkte selbst her', 'Sie bieten ausschließlich Dienstleistungen an', 'Sie verarbeiten Rohstoffe zu fertigen Produkten', 'Sie kaufen Produkte von Herstellern und verkaufen sie weiter, ohne sie wesentlich zu bearbeiten'],
            correctIndex: 3,
            explanation: 'Handelsbetriebe kaufen Produkte von Herstellern und verkaufen sie weiter, ohne sie wesentlich zu bearbeiten oder zu verarbeiten.',
          },
          {
            question: 'Worin liegt der Hauptunterschied zwischen Multi-Channel- und Omni-Channel-Lösungen im Handel?',
            options: ['Multi-Channel bezeichnet ausschließlich den stationären Handel ohne Onlineshop', 'Bei Multi-Channel sind alle Kanäle technisch miteinander vernetzt, bei Omni-Channel nicht', 'Es gibt keinen inhaltlichen Unterschied zwischen den beiden Begriffen', 'Bei Omni-Channel sind alle Absatzkanäle miteinander vernetzt und bieten ein einheitliches Kundenerlebnis, bei Multi-Channel bestehen sie unabhängig nebeneinander'],
            correctIndex: 3,
            explanation: 'Omni-Channel vernetzt alle Absatzkanäle eines Unternehmens zu einem einheitlichen Kundenerlebnis, während bei Multi-Channel die Kanäle unabhängig nebeneinander bestehen.',
          },
          {
            question: 'Welche Aussage zur Bedeutung des Handels in Österreich trifft laut Lehrbuch zu?',
            options: ['Der Handel ist der zweitgrößte Arbeitgeber Österreichs', 'Weniger als 5 % der österreichischen Unternehmen sind im Handel tätig', 'Der Handel hat kaum Einfluss auf das Bild von Städten und Regionen', 'Nur eine kleine Minderheit der Beschäftigten arbeitet im Handel'],
            correctIndex: 0,
            explanation: 'Der Handel ist nach Angaben der WKÖ der zweitgrößte Arbeitgeber Österreichs, etwa ein Viertel aller unselbstständig Beschäftigten arbeitet im Handel.',
          },
          {
            question: 'Loopy lässt ihre selbst hergestellten Karamellbonbons von der Produktionsstätte in ihren Candy Store in der Innenstadt liefern. Welche Funktion des Handels beschreibt dieser Transport am besten?',
            options: ['Zeitliche Überbrückung', 'Räumliche Überbrückung (Organisation des Transports)', 'Quantitativer Ausgleich', 'Qualitativer Ausgleich'],
            correctIndex: 1,
            explanation: 'Die räumliche Überbrückungsfunktion sorgt dafür, dass Produkte vom Ort der Produktion zum Ort des Verkaufs gelangen.',
          },
          {
            question: 'Ein Händler kauft im Juni große Mengen Christbaumschmuck ein und lagert diesen bis Oktober, um ihn dann zu verkaufen. Welche Handelsfunktion trifft hier zu?',
            options: ['Räumliche Überbrückung', 'Qualitativer Ausgleich', 'Zeitliche Überbrückung (Lagerung)', 'Informationsfunktion'],
            correctIndex: 2,
            explanation: 'Durch die Lagerung übernimmt der Handel die zeitliche Überbrückung zwischen Produktion und Bedarf der Kundschaft.',
          },
          {
            question: 'Loopy kauft bei einem Großhändler eine große Menge Schokolade ein und verkauft sie anschließend einzeln oder in kleinen Tüten an ihre Kundschaft. Welche Handelsfunktion erfüllt sie damit?',
            options: ['Quantitativer Ausgleich (Sammel- und Verteilungsfunktion)', 'Räumliche Überbrückung', 'Zeitliche Überbrückung', 'Kommunikationsfunktion'],
            correctIndex: 0,
            explanation: 'Der Handel kauft große Mengen und verteilt sie in kleinen, bedarfsgerechten Mengen an Kunden weiter – das ist die quantitative Ausgleichsfunktion (Sammel- und Verteilungsfunktion).',
          },
          {
            question: 'Welche Handelsfunktion beschreibt, dass ein Handelsbetrieb ein bedarfsgerechtes Sortiment zusammenstellt und bei Qualitätsmängeln gegenüber den Kunden haftet?',
            options: ['Räumliche Überbrückung', 'Zeitliche Überbrückung', 'Quantitativer Ausgleich', 'Qualitativer Ausgleich (Sortimentsbildung)'],
            correctIndex: 3,
            explanation: 'Der qualitative Ausgleich (Sortimentsbildung) bedeutet, dass der Handel die Qualität der Produkte prüft und im Mängelfall für Umtausch oder Reparatur verantwortlich ist.',
          },
          {
            question: 'Welche Betriebsform des Einzelhandels bietet auf großer Verkaufsfläche ein im Vergleich zum Supermarkt schmäleres, aber tieferes Sortiment überwiegend in Selbstbedienung zu niedrigen bis durchschnittlichen Preisen an?',
            options: ['Fach- und Spezialgeschäft', 'Fachmarkt', 'Warenhaus', 'Convenience-Store'],
            correctIndex: 1,
            explanation: 'Fachmärkte konzentrieren sich auf ein spezialisiertes Sortiment mit großer Auswahl innerhalb einer Warengruppe, meist in Selbstbedienung.',
          },
          {
            question: 'Loopy mietet für zwei Wochen ein leerstehendes Ladenlokal, um dort ihre neue Weihnachtspralinen-Linie vorzustellen und per Mundpropaganda Aufmerksamkeit zu erzeugen. Um welche Betriebsform handelt es sich?',
            options: ['Factory-Outlet-Center', 'Franchisebetrieb', 'Pop-up-Store', 'Fachmarkt'],
            correctIndex: 2,
            explanation: 'Ein Pop-up-Store ist ein zeitlich begrenztes Geschäft in leerstehenden Räumlichkeiten, das durch sein plötzliches Auftauchen für Gesprächsstoff sorgen soll.',
          },
          {
            question: 'Was ist typisch für einen Convenience-Store?',
            options: ['Kleinflächiges Geschäft mit begrenztem Sortiment, langen Öffnungszeiten und meist höheren Preisen', 'Großflächiges Geschäft mit sehr breitem Sortiment und niedrigen Preisen', 'Ein Geschäft, das ausschließlich online verkauft', 'Ein Handelsbetrieb, der nur Markenüberschüsse verkauft'],
            correctIndex: 0,
            explanation: 'Convenience-Stores sind kleinflächige Geschäfte mit begrenztem Sortiment (z. B. Snacks, Getränke, Zeitungen), langen Öffnungszeiten und meist etwas höheren Preisen.',
          },
          {
            question: 'Worin unterscheidet sich ein unternehmenseigener Onlineshop von einem virtuellen Marktplatz wie Amazon?',
            options: ['Ein Onlineshop ist immer teurer im Aufbau als ein Marktplatz', 'Im eigenen Onlineshop verkauft nur ein Unternehmen, auf einem Marktplatz bieten mehrere Anbieter unter einer gemeinsamen Domain an', 'Marktplätze existieren ausschließlich im Großhandel', 'Onlineshops verzichten grundsätzlich auf Produktbilder'],
            correctIndex: 1,
            explanation: 'Im eigenen Onlineshop bietet nur ein Unternehmen seine Produkte an, während auf einem virtuellen Marktplatz mehrere Anbieter unter einer gemeinsamen Plattform verkaufen.',
          },
          {
            question: 'Loopy veranstaltet bei ihren Kundinnen und Kunden zuhause Verkostungsabende, bei denen sie ihre Süßwaren direkt verkauft. Welcher Form des ambulanten Handels entspricht das?',
            options: ['Straßen- oder Markthandel', 'Zustellgroßhandel', 'Franchise', 'Direktvertrieb (z. B. Home-Party)'],
            correctIndex: 3,
            explanation: 'Direktvertrieb umfasst z. B. Vertreterverkauf, Verkaufsfahrten und Home-Partys, bei denen ohne festen Standort direkt beim Kunden verkauft wird.',
          },
          {
            question: 'Was ist charakteristisch für den Cash-and-carry-Großhandel (Selbstbedienungsgroßhandel)?',
            options: ['Der Großhändler liefert die Ware kostenlos mit eigenem Fuhrpark', 'Der Kunde zahlt sofort und holt die Ware selbst ab', 'Der Großhändler mietet Regale in fremden Geschäften', 'Der Verkauf erfolgt ausschließlich über gedruckte Kataloge'],
            correctIndex: 1,
            explanation: 'Beim Cash-and-carry-Großhandel bezahlt der Kunde die Ware sofort und übernimmt selbst den Transport, eine Lieferung durch den Großhändler entfällt.',
          },
          {
            question: 'Was macht ein Regalgroßhändler (Rackjobber)?',
            options: ['Er beliefert ausschließlich per Katalog', 'Er verkauft ausschließlich online an Endverbraucher', 'Er mietet Regale oder Verkaufsflächen in Handelsbetrieben und betreut sie selbst', 'Er ist ein Synonym für Cash-and-carry-Großhandel'],
            correctIndex: 2,
            explanation: 'Ein Rackjobber mietet in fremden Handelsbetrieben Verkaufsflächen oder Regale, bestückt sie mit Waren und betreut sie selbst; der Handelsbetrieb erhält dafür eine Miete oder Umsatzprovision.',
          },
          {
            question: 'Was kennzeichnet ein Franchisesystem?',
            options: ['Ein selbstständiges Unternehmen bindet sich vertraglich an ein anderes Unternehmen und nutzt gegen Gebühr dessen Konzept und Marke', 'Mehrere Handelsunternehmen schließen sich zu einer Genossenschaft zusammen', 'Ein Großhändler beliefert gleichzeitig mehrere unabhängige Einzelhändler', 'Ein Unternehmen übernimmt alle Filialen eines Mitbewerbers'],
            correctIndex: 0,
            explanation: 'Ein Franchisenehmer ist ein selbstständiges Unternehmen, das sich per Franchisevertrag an einen Franchisegeber bindet und dafür ein bewährtes Konzept, eine etablierte Marke und Betreuung erhält.',
          },
          {
            question: 'Was ist eine freiwillige Handelskette wie SPAR?',
            options: ['Ein Zusammenschluss, bei dem alle Filialen im Eigentum eines einzigen Unternehmens stehen', 'Rechtlich selbstständige Einzelhandelsbetriebe verpflichten sich vertraglich zu gemeinsamer Werbung und gemeinsamem Einkauf unter einer Marke', 'Ein Modell, bei dem ausschließlich der Großhandel die Regalpflege übernimmt', 'Ein rein digitales Vertriebsmodell ohne Filialen'],
            correctIndex: 1,
            explanation: 'Bei einer freiwilligen Handelskette verpflichten sich rechtlich selbstständige Einzelhandelsbetriebe vertraglich zu gemeinsamer Werbung und gemeinsamem Einkauf unter einer einheitlichen Organisationsmarke.',
          },
          {
            question: 'Wie berechnet sich die Handelsspanne eines Produkts grundsätzlich?',
            options: ['Einkaufspreis minus Herstellungskosten', 'Verkaufspreis geteilt durch Einkaufspreis', 'Verkaufspreis minus Einkaufspreis', 'Fixkosten plus variable Kosten'],
            correctIndex: 2,
            explanation: 'Die Handelsspanne ergibt sich aus der Differenz zwischen Verkaufspreis und Einkaufspreis; sie muss die Kosten des Handelsbetriebs decken und einen Gewinn ermöglichen.',
          },
        ],
      },
      {
        id: 'businessplan-2jg',
        title: 'Entwicklung eines Businessplans',
        questions: [
          {
            question: 'Loopy möchte einen Kredit für die Erweiterung ihres Candy Store beantragen. Wofür wird ein Businessplan laut Buch vor allem eingesetzt?',
            options: ['Er stellt die Geschäftsidee dar und zeigt, wie diese in der Praxis umgesetzt werden soll', 'Er ersetzt die laufende Buchhaltung eines Unternehmens', 'Er dient ausschließlich der internen Urlaubsplanung der Mitarbeiter*innen', 'Er wird nur von bereits börsennotierten Unternehmen benötigt'],
            correctIndex: 0,
            explanation: 'Mit einem Businessplan wird die Geschäftsidee dargestellt und beschrieben, wie diese in der Praxis umgesetzt werden soll – ein durchdachter Businessplan ist ein wesentlicher Erfolgsfaktor, etwa um Banken oder Investor*innen zu überzeugen.',
          },
          {
            question: 'Welcher Punkt zählt laut Buch NICHT zu den Bestandteilen eines Businessplans?',
            options: ['Executive Summary', 'Personalverrechnung', 'Finanzplanung', 'Chancen und Risiken'],
            correctIndex: 1,
            explanation: 'Die Bestandteile eines Businessplans sind laut Buch: Executive Summary, Unternehmen, Produkt/Dienstleistung, Branche/Markt/Wettbewerb, Marketing, Chancen und Risiken, Finanzplanung und Umsetzungsfahrplan – eine "Personalverrechnung" wird nicht als eigener Bestandteil genannt.',
          },
          {
            question: 'Wie viele Seiten sollte ein Businessplan laut Buch üblicherweise umfassen?',
            options: ['5 bis 10 Seiten', '50 bis 60 Seiten', '20 bis 30 Seiten', '100 bis 120 Seiten'],
            correctIndex: 2,
            explanation: 'Laut Buch sollte ein Businessplan ca. 20 bis 30 Seiten umfassen; detaillierte Unterlagen wie Lebensläufe oder Imagebroschüren werden als Anhang beigelegt.',
          },
          {
            question: 'Wann wird die Executive Summary eines Businessplans laut Buch tatsächlich verfasst, obwohl sie am Anfang des Dokuments steht?',
            options: ['Bevor die Geschäftsidee überhaupt feststeht', 'Gleichzeitig mit dem Deckblatt', 'Direkt zu Beginn der Businessplan-Erstellung', 'Erst nach Fertigstellung des restlichen Businessplans'],
            correctIndex: 3,
            explanation: 'Die Executive Summary steht zwar am Anfang des Businessplans, wird jedoch laut Buch erst nach Fertigstellung des restlichen Businessplans verfasst.',
          },
          {
            question: 'Welche zusätzlichen Punkte sollten laut Buch einen Businessplan ergänzen?',
            options: ['Deckblatt, Inhaltsverzeichnis und ggf. Quellenverzeichnis', 'Ein Organigramm sämtlicher Konkurrenzunternehmen', 'Eine vollständige Kopie des Gesellschaftsvertrags', 'Eine Liste aller bisherigen Mitbewerber-Insolvenzen'],
            correctIndex: 0,
            explanation: 'Laut Buch sollte ein Businessplan um Deckblatt, Inhaltsverzeichnis und – bei Verwendung sekundärer Marktforschung – ein Quellenverzeichnis ergänzt werden.',
          },
          {
            question: 'Welche vier Punkte umfasst laut Buch das Unternehmens- und Gründerprofil im Businessplan?',
            options: ['Finanzplanung, Marketing, Chancen, Risiken', 'Geschäftsidee und Vision, wichtige Personen, Rechtsform und Firmenname, Unternehmensstandort', 'Produkt, Preis, Vertrieb, Kommunikation', 'Executive Summary, Deckblatt, Anhang, Quellenverzeichnis'],
            correctIndex: 1,
            explanation: 'Das Unternehmens- und Gründerprofil umfasst laut Buch Geschäftsidee und Vision, wichtige Personen, Rechtsform und Firmenname sowie den Unternehmensstandort.',
          },
          {
            question: 'Wie definiert das Buch eine Unternehmensvision?',
            options: ['Eine detaillierte Jahresplanung der Finanzen', 'Eine Liste aller Standortfaktoren', 'Ein Vorstellungsbild, mit dem das Unternehmen langfristig entwickelt werden soll; sie dient als Inspiration und Antriebsquelle', 'Eine kurzfristige operative Maßnahme für das laufende Quartal'],
            correctIndex: 2,
            explanation: 'Eine Unternehmensvision ist laut Buch ein Vorstellungsbild, mit dem das Unternehmen langfristig entwickelt werden soll; sie dient als Inspiration und Antriebsquelle (Beispiel im Buch: Netflix).',
          },
          {
            question: 'In welche drei Arten werden Standortfaktoren im Buch eingeteilt?',
            options: ['Interne, externe und gemischte Standortfaktoren', 'Finanzielle, rechtliche und soziale Standortfaktoren', 'Kurzfristige, mittelfristige und langfristige Standortfaktoren', 'Beschaffungsseitige, produktionsbezogene und absatzorientierte Standortfaktoren'],
            correctIndex: 3,
            explanation: 'Das Buch unterscheidet beschaffungsseitige, produktionsbezogene und absatzorientierte Standortfaktoren.',
          },
          {
            question: 'Warum platzieren sich Lebensmittelketten laut Buch meist im Umkreis von Wohngebieten?',
            options: ['Um möglichst nahe bei ihren Kunden zu sein', 'Weil dort die Mieten am höchsten sind', 'Weil dort keine Konkurrenz erlaubt ist', 'Weil dort die Steuersätze am niedrigsten sind'],
            correctIndex: 0,
            explanation: 'Laut Buch wählen Lebensmittelketten ihren Standort in Wohngebieten, um möglichst nahe bei ihren Kunden zu sein (Beispiel für einen absatzorientierten Standortfaktor).',
          },
          {
            question: 'Was gilt laut Buch bei der Gewichtung der Standortfaktoren im Rahmen der Scoring-Methode?',
            options: ['Jeder Faktor muss exakt gleich gewichtet werden', 'Der Gesamtwert aller Gewichtungen muss 100 % ergeben', 'Es dürfen maximal drei Standortfaktoren gewichtet werden', 'Die Gewichtung erfolgt erst nach der Standortentscheidung'],
            correctIndex: 1,
            explanation: 'Bei der Scoring-Methode werden die Standortfaktoren gewichtet, wobei der Gesamtwert aller Gewichtungen laut Buch 100 % ergeben muss.',
          },
          {
            question: 'Wie werden Unternehmensziele mit einer Laufzeit von 1 bis 3 Jahren laut Buch bezeichnet?',
            options: ['Kurzfristige Ziele', 'Langfristige Ziele', 'Mittelfristige Ziele', 'Dauerhafte Ziele'],
            correctIndex: 2,
            explanation: 'Ziele mit einer Laufzeit von 1 bis 3 Jahren gelten laut Buch als mittelfristige Ziele und betreffen die taktische Ausrichtung des Unternehmens.',
          },
          {
            question: 'Wie kann das Marktpotenzial laut Buch auch in Geldwert angegeben werden?',
            options: ['Indem man die Anzahl der Mitbewerber durch den Umsatz teilt', 'Indem man die Fixkosten von den variablen Kosten abzieht', 'Indem man den Gewinn des Vorjahres verdoppelt', 'Indem man die theoretisch mögliche Absatzmenge mit dem Preis der Leistung multipliziert'],
            correctIndex: 3,
            explanation: 'Das Marktpotenzial kann laut Buch in Geldwert angegeben werden, indem die theoretisch mögliche Absatzmenge mit dem Preis der Leistung multipliziert wird.',
          },
          {
            question: 'Was versteht man laut Buch unter "indirekter Konkurrenz", z. B. im Beispiel des ORF?',
            options: ['Unternehmen, die die gleichen Kundenbedürfnisse auf andere Weise stillen, z. B. Streaming-Plattformen statt Fernsehsendern', 'Sender, die exakt das gleiche Programm zur gleichen Zeit ausstrahlen', 'Unternehmen in einer komplett anderen Branche ohne jeden Bezug zum Kunden', 'Konkurrenten, die nur im Ausland tätig sind'],
            correctIndex: 0,
            explanation: 'Indirekte Konkurrenz sind laut Buch Unternehmen, die dieselben Kundenbedürfnisse auf andere Weise stillen – beim ORF-Beispiel etwa Streaming-Plattformen und soziale Medien statt anderer Fernsehsender.',
          },
          {
            question: 'Welche vier Bereiche ("4 Ps") sollten laut Buch im Marketingteil eines Businessplans behandelt werden?',
            options: ['Personal, Prozesse, Produktion, Präsentation', 'Produkt- und Sortimentspolitik, Preis- und Konditionenpolitik, Vertriebspolitik, Kommunikationspolitik', 'Planung, Prüfung, Präsentation, Protokoll', 'Preisverhandlung, Partnerwahl, Positionierung, Personalbedarf'],
            correctIndex: 1,
            explanation: 'Im Businessplan ist laut Buch genau auf die 4 Ps einzugehen: Produkt- und Sortimentspolitik, Preis- und Konditionenpolitik, Vertriebspolitik und Kommunikationspolitik.',
          },
          {
            question: 'Wozu dient die Analyse der externen Chancen und Risiken im Businessplan laut Buch?',
            options: ['Um die internen Stärken und Schwächen der Mitarbeiter zu bewerten', 'Um den genauen Kaufpreis der Geschäftsräume festzulegen', 'Um potenziellen Geldgeber*innen zu zeigen, wie attraktiv die Geschäftsidee bei sich verändernden äußeren Einflüssen ist', 'Um die Buchhaltung des ersten Geschäftsjahres zu erstellen'],
            correctIndex: 2,
            explanation: 'Die Auflistung der externen Chancen und Risiken hilft laut Buch potenziellen Geldgeber*innen bei der Einschätzung, wie attraktiv die Geschäftsidee ist.',
          },
          {
            question: 'Welche zwei zentralen Fragen beantwortet laut Buch die Finanzplanung im Businessplan?',
            options: ['Wie hoch ist der Umsatz der Konkurrenz? Wie viele Mitarbeiter braucht das Unternehmen?', 'Welche Rechtsform passt am besten? Wo soll der Standort sein?', 'Wer sind die wichtigsten Kunden? Welche Werbemaßnahmen sind geplant?', 'Wie hoch ist der Kapitalbedarf? Wie soll das Kapital – durch Eigen- und/oder Fremdkapital – aufgebracht werden?'],
            correctIndex: 3,
            explanation: 'Die Finanzplanung ist laut Buch das Herzstück eines Businessplans und beantwortet, wie hoch der Kapitalbedarf ist und wie das Kapital durch Eigen- und/oder Fremdkapital aufgebracht werden soll.',
          },
          {
            question: 'Was versteht man im Umsetzungsfahrplan eines Businessplans unter dem "kritischen Pfad"?',
            options: ['Eine Kette von Aktivitäten, bei der Verzögerungen den gesamten Zeitplan gefährden können', 'Die günstigste Finanzierungsvariante für die Gründung', 'Den Weg vom Rohstofflieferanten zum fertigen Produkt', 'Die Liste aller Standortalternativen'],
            correctIndex: 0,
            explanation: 'Der kritische Pfad bezeichnet laut Buch eine Kette von Aktivitäten im Umsetzungsfahrplan, bei der Verzögerungen einzelner Aktivitäten den gesamten Zeitplan gefährden können.',
          },
          {
            question: 'Welcher der folgenden ist laut Buch KEIN genannter Businessplan-Wettbewerb für Schüler*innen?',
            options: ['Businessplanwettbewerb next generation', 'Junior Company Award', 'jugend innovativ', 'i2b (Businessplan Initiative)'],
            correctIndex: 1,
            explanation: 'Das Buch nennt als Businessplanwettbewerbe für Schüler*innen next generation, jugend innovativ und i2b (Businessplan Initiative) – einen "Junior Company Award" erwähnt es nicht.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: '3. Jahrgang',
    color: 'purple',
    kapitel: [
      {
        id: 'unternehmensfuehrung-kapitel',
        title: 'Unternehmensführung',
        topicIds: ['unternehmensfuehrung-ueberblick', 'normatives-management', 'strategisches-operatives-management', 'organisieren-und-fuehren'],
      },
      {
        id: 'personalmanagement-kapitel',
        title: 'Aufgabe des Personalmanagements',
        topicIds: ['personalbedarfsplanung', 'personaleinsatzgestaltung', 'personalbeurteilung'],
      },
      {
        id: 'produktionsbetriebe-kapitel',
        title: 'Produktionsbetriebe',
        topicIds: ['produktionsbetriebe', 'leistungserstellungsprozess-produktion'],
      },
      {
        id: 'investition-finanzmanagement-kapitel',
        title: 'Investition und Finanzmanagement',
        topicIds: ['investition-finanzierung-ueberblick', 'investitionsmanagement', 'finanzmanagement', 'finanzplan-analyse'],
      },
      {
        id: 'finanzplanung-businessplan-kapitel',
        title: 'Finanzplanung im Business Plan',
        topicIds: ['businessplan-3jg'],
      },
    ],
    topics: [
      {
        id: 'unternehmensfuehrung-ueberblick',
        title: 'Unternehmensführung im Überblick',
        questions: [
          {
            question: 'Was versteht man laut Buch unter dem Begriff Unternehmensführung?',
            options: ['Ausschließlich die Personen, die ein Unternehmen leiten, nicht aber den Prozess des Führens', 'Sowohl die Personen, die ein Unternehmen leiten (Führungskräfte), als auch den Prozess des Führens bzw. Leitens des Unternehmens', 'Nur die operativen Tätigkeiten der Mitarbeitenden im Tagesgeschäft', 'Ausschließlich gesetzliche Vorschriften, die ein Unternehmen einhalten muss'],
            correctIndex: 1,
            explanation: 'Unternehmensführung bezeichnet sowohl die Führungskräfte (Personen) als auch den Managementprozess des Führens bzw. Leitens eines Unternehmens.',
          },
          {
            question: 'Loopy überlegt sich für Loopy\'s Candy Store eine Vision sowie die Normen, Werte und Ziele, die ihr Unternehmen prägen sollen. Welcher Managementebene ordnet man diese Aufgabe zu?',
            options: ['Operatives Management', 'Strategisches Management', 'Normatives Management', 'Lower Management'],
            correctIndex: 2,
            explanation: 'Das normative Management beschäftigt sich mit der Vision sowie den Normen, Werten und Zielen, die ein Unternehmen prägen.',
          },
          {
            question: 'Welche Managementebene beschäftigt sich mit der langfristigen Planung der Unternehmensstrategie?',
            options: ['Normatives Management', 'Operatives Management', 'Ausführungsebene', 'Strategisches Management'],
            correctIndex: 3,
            explanation: 'Das strategische Management legt die langfristige Unternehmensstrategie fest, während sich das operative Management um die zielgerichtete Umsetzung der festgelegten Ziele und Strategien kümmert.',
          },
          {
            question: 'Welche Aussage zu den Hierarchiestufen im Unternehmen trifft laut Buch zu?',
            options: ['Jedes Unternehmen benötigt mindestens drei Hierarchieebenen', 'Die Anzahl der Führungskräfte nimmt mit jeder höheren Ebene zu', 'Kleinere Betriebe kommen oft mit einer oder zwei Hierarchieebenen aus', 'Das Lower Management trägt die Gesamtverantwortung für das gesamte Unternehmen'],
            correctIndex: 2,
            explanation: 'Kleinere Betriebe kommen häufig mit einer oder zwei Hierarchieebenen aus, während größere Unternehmen die Managementaufgaben meist auf drei Hierarchiestufen (Top-, Middle- und Lower Management) verteilen.',
          },
          {
            question: 'Loopy stellt für Loopy\'s Candy Store eine Filialleiterin ein, die ihre Filiale führt, aber auch als Vermittlerin zwischen Loopy (Geschäftsführung) und den Verkäufer/innen fungiert. Welcher Führungsebene entspricht diese Position?',
            options: ['Topmanagement', 'Middle Management', 'Ausführungsebene', 'Normatives Management'],
            correctIndex: 1,
            explanation: 'Das Middle Management (z. B. Abteilungs- oder Filialleitung) übernimmt neben eigenen Führungsaufgaben eine Vermittlerfunktion zwischen Topmanagement und Lower Management.',
          },
          {
            question: 'Welche vier Erfolgsfaktoren für gute Kommunikation im Unternehmen nennt das Buch?',
            options: ['Klarheit, Offenheit, Regelmäßigkeit, Empathie', 'Schnelligkeit, Kontrolle, Hierarchie, Digitalisierung', 'Vertraulichkeit, Formalität, Distanz, Autorität', 'Kreativität, Flexibilität, Wettbewerb, Innovation'],
            correctIndex: 0,
            explanation: 'Die vier Erfolgsfaktoren für gute Kommunikation im Unternehmen sind Klarheit, Offenheit, Regelmäßigkeit und Empathie.',
          },
        ],
      },
      {
        id: 'normatives-management',
        title: 'Normatives Management',
        questions: [
          {
            question: 'Was versteht man unter dem Unternehmensleitbild und welche Bestandteile umfasst es laut Buch?',
            options: ['Ausschließlich die rechtlichen Vorschriften eines Unternehmens, ohne weitere Bestandteile', 'Den schriftlich festgehaltenen Sinn und Zweck der unternehmerischen Tätigkeit sowie grundlegende Überzeugungen und Ziele, bestehend aus Vision, Mission, Unternehmensphilosophie und Unternehmenszielen', 'Nur die Vision eines Unternehmens, unabhängig von Mission und Zielen', 'Eine reine Marketingbroschüre ohne Einfluss auf die Unternehmenskultur'],
            correctIndex: 1,
            explanation: 'Im Unternehmensleitbild werden Sinn und Zweck der unternehmerischen Tätigkeit sowie grundlegende Überzeugungen und Ziele schriftlich festgehalten. Es besteht aus Vision, Mission, Unternehmensphilosophie und Unternehmenszielen und beeinflusst die Unternehmenskultur.',
          },
          {
            question: 'Wie ist der Begriff Vision im Zusammenhang mit dem Unternehmensleitbild definiert?',
            options: ['Ein Vorstellungsbild, wie sich ein Unternehmen langfristig entwickeln soll, das als Inspiration und Antriebsquelle dient', 'Der kurzfristige Werbeslogan für ein einzelnes Produkt', 'Die detaillierte Beschreibung des operativen Tagesgeschäfts', 'Eine gesetzlich vorgeschriebene Erklärung zur Unternehmensfinanzierung'],
            correctIndex: 0,
            explanation: 'Eine Vision ist ein Vorstellungsbild, wie sich ein Unternehmen langfristig entwickeln soll. Sie dient als Inspiration und Antriebsquelle, ähnlich einem Leuchtturm für die Mitarbeitenden.',
          },
          {
            question: 'Loopy formuliert für Loopy\'s Candy Store folgenden Satz: \'Wir wollen Kindern und Familien mit hochwertigen, fair produzierten Süßigkeiten Momente der Freude schenken.\' Welchen Bestandteil des Unternehmensleitbildes stellt dieser Satz dar?',
            options: ['Vision', 'Unternehmensziel', 'Mission', 'Unternehmenskultur'],
            correctIndex: 2,
            explanation: 'Die Mission beschreibt den Auftrag des Unternehmens (Unternehmenszweck) und welchen Nutzen es für Kundinnen, Kunden und die Gesellschaft bietet. Im Gegensatz zur Vision definiert sie also den Beitrag, den das Unternehmen leisten möchte, statt eines angestrebten Vorstellungsbildes.',
          },
          {
            question: 'Worin unterscheidet sich laut Buch ein Claim von einem (Werbe-)Slogan?',
            options: ['Ein Claim bezieht sich auf einzelne Produkte, ein Slogan auf die gesamte Mission', 'Ein Claim ist langfristig angelegt und hat Bezug zur Mission des Unternehmens, ein Slogan ist meist kurzfristig und bezieht sich auf einzelne Produkte', 'Beide Begriffe bedeuten exakt dasselbe', 'Ein Slogan wird nur im Geschäftsbericht verwendet, ein Claim nur in der Werbung'],
            correctIndex: 1,
            explanation: 'Ein Claim ist langfristig angelegt und hat Bezug zur Mission des Unternehmens (z. B. \'Bildung, die begeistert!\' des TRAUNER Verlags), während ein Slogan meist kurzfristig ist und sich auf einzelne Produkte bezieht.',
          },
          {
            question: 'Welche Kernfragen beantwortet die Unternehmensphilosophie laut Buch?',
            options: ['Wie hoch ist der Umsatz? Wie viele Mitarbeitende gibt es? Wo liegt der Firmensitz?', 'Was kostet das Produkt? Wer sind die Konkurrenten? Wie hoch ist der Marktanteil?', 'Wie wird das Unternehmen finanziert? Welche Rechtsform liegt vor? Wer haftet?', 'Woran glauben wir? Was ist uns wichtig? Wofür stehen wir?'],
            correctIndex: 3,
            explanation: 'Die Kernfragen der Unternehmensphilosophie lauten: Woran glauben wir? Was ist uns wichtig? Wofür stehen wir? Sie umfasst die grundlegenden Werte und Überzeugungen im Umgang miteinander innerhalb und außerhalb des Unternehmens.',
          },
          {
            question: 'Was versteht man unter Corporate Social Responsibility (CSR)?',
            options: ['Die Verantwortung von Unternehmen gegenüber Gesellschaft und Umwelt bzw. freiwillige Beiträge zu nachhaltiger Entwicklung im sozialen, ökologischen und ökonomischen Bereich', 'Eine gesetzliche Pflicht zur jährlichen Gewinnausschüttung an Aktionäre', 'Die interne Kommunikationsstrategie eines Unternehmens gegenüber Mitarbeitenden', 'Ein Synonym für die Unternehmensvision'],
            correctIndex: 0,
            explanation: 'CSR (unternehmerische Gesellschaftsverantwortung) bezeichnet die Verantwortung von Unternehmen gegenüber Gesellschaft und Umwelt sowie freiwillige Beiträge zu nachhaltiger Entwicklung im sozialen, ökologischen und ökonomischen Bereich.',
          },
          {
            question: 'Wofür stehen die Buchstaben der ESG-Kriterien?',
            options: ['Effizienz, Struktur, Governance', 'Ethik, Sicherheit, Gewinn', 'Environmental (Umwelt), Social (Soziales), Governance (verantwortungsvolle Unternehmensführung)', 'Export, Service, Global'],
            correctIndex: 2,
            explanation: 'ESG steht für Environmental (Umwelt), Social (Soziales) und Governance (verantwortungsvolle Unternehmensführung). Größere Unternehmen (ab 250 Mitarbeitenden) sind zur Nachhaltigkeitsberichterstattung anhand dieser Kriterien verpflichtet.',
          },
          {
            question: 'Was sind die Sustainable Development Goals (SDGs)?',
            options: ['Eine österreichische Gesetzesnorm für Unternehmensgründungen', '17 globale Ziele der Vereinten Nationen für Staaten, Unternehmen und Bürger/innen, um gemeinsam eine nachhaltige Zukunft zu gestalten', 'Ein internes Kontrollsystem für die Finanzbuchhaltung', 'Ein freiwilliges Gütesiegel für regionale Lebensmittel'],
            correctIndex: 1,
            explanation: 'Die SDGs sind 17 globale Ziele der Vereinten Nationen (UN), an denen sich Staaten, Unternehmen und Bürger/innen orientieren sollen, um gemeinsam eine nachhaltige Zukunft zu gestalten.',
          },
          {
            question: 'Was versteht man unter dem UN Global Compact?',
            options: ['Ein verpflichtendes EU-Gesetz zur Unternehmensbesteuerung', 'Eine internationale Börsennotierung für nachhaltige Unternehmen', 'Eine reine Marketingkampagne der Vereinten Nationen ohne konkrete Inhalte', 'Einen Pakt zwischen Unternehmen und den Vereinten Nationen zur freiwilligen Einhaltung sozialer und ökologischer Mindeststandards anhand von zehn Prinzipien rund um Menschenrechte, Arbeit und Umwelt'],
            correctIndex: 3,
            explanation: 'Der UN Global Compact ist ein Pakt zwischen Unternehmen und den Vereinten Nationen zur freiwilligen Einhaltung bestimmter sozialer und ökologischer Mindeststandards und umfasst zehn Prinzipien rund um Menschenrechte, Arbeit und Umwelt.',
          },
          {
            question: 'Loopy setzt sich für Loopy\'s Candy Store das Ziel, die Kundenzufriedenheit in den nächsten fünf Jahren um 10 % zu steigern. Um welche Art von Ziel handelt es sich?',
            options: ['Ein operatives Ziel, da es sofort umgesetzt werden muss', 'Ein strategisches Ziel, da es einen langfristigen Rahmen (ab ca. 5 Jahre) hat und Vision und Mission in konkrete Ziele umsetzt', 'Ein nicht-monetäres Ziel ohne jeden Zeitbezug', 'Ein Zielkonflikt zwischen Lower Management und Topmanagement'],
            correctIndex: 1,
            explanation: 'Strategische Ziele haben einen langfristigen Rahmen (ab ca. 5 Jahre) und setzen Vision und Mission in strategische Ziele um. Operative Ziele hingegen haben einen kurz- bis mittelfristigen Rahmen (bis zu einem bzw. bis zu fünf Jahren).',
          },
          {
            question: 'Loopy möchte für Loopy\'s Candy Store ein flexibles Arbeitszeitmodell für ihre Angestellten einführen. Um welche Art von Unternehmensziel handelt es sich dabei?',
            options: ['Ein monetäres Ziel, da es Kosten verursacht', 'Ein strategisches Ziel im engeren Sinn', 'Ein nicht-monetäres Ziel, da es sich nicht in Geldeinheiten messen lässt', 'Einen Zielort im Sinne der Ziel-Operationalisierung'],
            correctIndex: 2,
            explanation: 'Nicht-monetäre Ziele lassen sich nicht in Geldeinheiten messen, wie z. B. die Einführung eines flexiblen Arbeitszeitmodells. Monetäre Ziele hingegen sind in Geldeinheiten messbar, etwa eine Umsatzsteigerung.',
          },
          {
            question: 'Wofür steht das A in der SMART-Formel zur Zielformulierung?',
            options: ['Aktuell', 'Attraktiv (achievable)', 'Automatisiert', 'Anonymisiert'],
            correctIndex: 1,
            explanation: 'Die SMART-Formel steht für Spezifisch, Messbar, Attraktiv (achievable), Realistisch und Terminiert.',
          },
          {
            question: 'Welche Bestandteile müssen laut Buch bei der Formulierung operationalisierter Ziele integriert werden?',
            options: ['Nur Zielinhalt und Zielausmaß', 'Zielgruppe, Zielmarkt und Zielpreis', 'Vision, Mission und Unternehmensphilosophie', 'Zielinhalt, Zielausmaß, Zieltermin, Zielverantwortung und Zielort'],
            correctIndex: 3,
            explanation: 'Operationalisierte Ziele integrieren fünf Bestandteile: Zielinhalt (was soll erreicht werden?), Zielausmaß (wie viel?), Zieltermin (bis wann?), Zielverantwortung (wer ist verantwortlich?) und Zielort (wo?).',
          },
          {
            question: 'Die Unternehmensleitung von SONNENTOR möchte das Marketingbudget senken, gleichzeitig soll die Marketingabteilung die Reichweite auf Instagram deutlich steigern. Welche Art von Zielbeziehung liegt hier vor?',
            options: ['Zielkonflikt (Zielkonkurrenz), da die Erreichung des einen Ziels die Erreichung des anderen erschwert', 'Zielneutralität, da sich beide Ziele nicht beeinflussen', 'Zielkomplementarität, da sich beide Ziele gegenseitig fördern', 'Eine Form der Ziel-Operationalisierung'],
            correctIndex: 0,
            explanation: 'Bei einem Zielkonflikt (Zielkonkurrenz) erschwert die Erreichung eines Ziels die Erreichung eines anderen Ziels. Ein sinkendes Marketingbudget erschwert typischerweise eine deutliche Reichweitensteigerung.',
          },
          {
            question: 'Wie wird der Begriff Unternehmenskultur im Buch definiert?',
            options: ['Als die Gesamtheit aller schriftlich fixierten Unternehmensziele', 'Als reines Marketinginstrument zur Kundengewinnung', 'Als das, was bestimmt, wie in einem Unternehmen gedacht und gehandelt wird, und das die gemeinsam gelebten und akzeptierten Werte innerhalb des Unternehmens umfasst', 'Als die rechtliche Struktur, in der ein Unternehmen organisiert ist'],
            correctIndex: 2,
            explanation: 'Die Unternehmenskultur bestimmt, wie in einem Unternehmen gedacht und gehandelt wird. Sie umfasst die gemeinsam gelebten und akzeptierten Werte innerhalb des Unternehmens und zeigt sich darin, ob die Werte aus dem Leitbild tatsächlich gelebt werden.',
          },
        ],
      },
      {
        id: 'strategisches-operatives-management',
        title: 'Managementprozess: Strategisches & operatives Management',
        questions: [
          {
            question: 'Welche Reihenfolge beschreibt den Managementprozess laut Buch korrekt, ausgehend vom normativen Management?',
            options: ['Von der Kontrolle über die Planung zur Vision', 'Von der Vision über die Strategie zur konkreten Umsetzung', 'Von der operativen Planung direkt zur Vision', 'Von der Umsetzung über die Kontrolle zur Strategie'],
            correctIndex: 1,
            explanation: 'Der Managementprozess führt vom normativen Management (Vision, Werte) über das strategische Management (Strategie) zum operativen Management (konkrete Umsetzung).',
          },
          {
            question: 'Wofür stehen die Buchstaben der PESTEL-Analyse im Rahmen der Umfeldanalyse?',
            options: ['Personal, Einkauf, Steuern, Ertrag, Logistik', 'Produktion, Einkauf, Strategie, Ertrag, Liquidität', 'Politisch, wirtschaftlich, soziokulturell, technologisch, ökologisch, rechtlich', 'Preis, Erlös, Steuern, Ertrag, Liquidität'],
            correctIndex: 2,
            explanation: 'Die PESTEL-Analyse untersucht politische, wirtschaftliche, soziokulturelle, technologische, ökologische und rechtliche Einflussfaktoren aus dem Unternehmensumfeld.',
          },
          {
            question: 'Welche Kraft steht laut Fünf-Kräfte-Modell nach Michael E. Porter NICHT im Zentrum der Branchenanalyse?',
            options: ['Verhandlungsstärke der Lieferanten', 'Verfügbarkeit von Fördermitteln des Staates', 'Bedrohung durch neue Wettbewerber', 'Bedrohung durch Ersatzprodukte'],
            correctIndex: 1,
            explanation: 'Das Fünf-Kräfte-Modell nach Porter umfasst die Verhandlungsstärke von Lieferanten und Kunden, die Bedrohung durch neue Wettbewerber und Ersatzprodukte sowie die Rivalität unter bestehenden Wettbewerbern - staatliche Fördermittel gehören nicht dazu.',
          },
          {
            question: 'Was versteht man unter Benchmarking im Rahmen der internen Analyse?',
            options: ['Die Berechnung des relativen Marktanteils eines Produkts', 'Den Vergleich mit Best-Practice-Unternehmen zur Identifikation von Verbesserungspotenzial', 'Die Befragung von Expertinnen und Experten in mehreren anonymen Runden', 'Die Festlegung der finanziellen Ressourcen eines Unternehmens'],
            correctIndex: 1,
            explanation: 'Beim Benchmarking vergleicht sich ein Unternehmen mit Best-Practice-Unternehmen, um eigene Stärken und Schwächen sowie Verbesserungspotenzial zu erkennen.',
          },
          {
            question: 'Loopy möchte für ihren Candy Store die zukünftige Nachfrage einschätzen und nutzt dafür die Szenariotechnik. Welche drei Szenarien werden dabei typischerweise unterschieden?',
            options: ['Kurzfristiges, mittelfristiges und langfristiges Szenario', 'Internes, externes und normatives Szenario', 'Positives, Trend- und negatives Szenario', 'Strategisches, operatives und normatives Szenario'],
            correctIndex: 2,
            explanation: 'Bei der Szenariotechnik werden ausgehend von den Ist-Daten ein positives Szenario (best case), ein Trendszenario (realistic case) und ein negatives Szenario (worst case) entwickelt.',
          },
          {
            question: 'Was ist charakteristisch für die Delphi-Methode als Prognoseinstrument?',
            options: ['Nur die Unternehmensleitung trifft die Prognose', 'Fachleute werden in mehreren anonymen Runden zu einem Thema befragt', 'Sie basiert ausschließlich auf mathematischen Modellen ohne Expertenmeinung', 'Sie wird nur zur Kontrolle bereits getroffener Entscheidungen eingesetzt'],
            correctIndex: 1,
            explanation: 'Bei der Delphi-Methode werden Fachleute aus relevanten Bereichen in mehreren Runden anonym befragt, wodurch sich die Einschätzungen im Lauf des Prozesses meist annähern.',
          },
          {
            question: 'Welche Kombination bildet bei der SWOT-Analyse die Grundlage für eine S-O-Strategie (Ausbaustrategie)?',
            options: ['Schwächen und Risiken', 'Stärken und Risiken', 'Schwächen und Chancen', 'Stärken und Chancen'],
            correctIndex: 3,
            explanation: 'Eine S-O-Strategie nutzt die eigenen Stärken, um sich bietende Chancen am Markt konsequent auszubauen.',
          },
          {
            question: 'Welche Aussage zur SWOT-Analyse ist richtig?',
            options: ['Chancen und Stärken stammen aus der externen Analyse', 'Stärken und Schwächen stammen aus der externen Analyse', 'Chancen und Risiken stammen aus der externen Analyse, Stärken und Schwächen aus der internen Analyse', 'Alle vier Elemente stammen ausschließlich aus der internen Analyse'],
            correctIndex: 2,
            explanation: 'Die SWOT-Analyse verknüpft die externe Analyse (Chancen und Risiken) mit der internen Analyse (Stärken und Schwächen) zu strategischen Stoßrichtungen.',
          },
          {
            question: 'Loopy überlegt, die Preise in ihrem Candy Store so niedrig wie möglich zu halten, um mehr Kundschaft als die Konkurrenz anzuziehen. Welche Wettbewerbsstrategie verfolgt sie damit?',
            options: ['Strategie der Differenzierung', 'Strategie der Kostenführerschaft', 'Nischenstrategie', 'Diversifikationsstrategie'],
            correctIndex: 1,
            explanation: 'Ziel der Strategie der Kostenführerschaft ist es, die niedrigsten Kosten der Branche zu erreichen und dadurch die günstigsten Preise anbieten zu können.',
          },
          {
            question: 'Welches Beispiel passt laut Buch am besten zur Strategie der Differenzierung?',
            options: ['Ein Diskonter bietet Waren zu besonders günstigen Preisen an', 'Ein Anbieter konzentriert sich auf eine kleine, spezielle Zielgruppe', 'Ein Luxuslabel wie Gucci hebt sich durch Exklusivität, hochwertige Materialien und Qualität ab', 'Ein Unternehmen erschließt ein völlig neues Geschäftsfeld'],
            correctIndex: 2,
            explanation: 'Bei der Differenzierungsstrategie heben sich Produkte oder Dienstleistungen durch Einzigartigkeit vom Mitbewerb ab, wie es beim Buchbeispiel Gucci der Fall ist.',
          },
          {
            question: 'Worauf zielt eine Nischenstrategie ab?',
            options: ['Auf die niedrigsten Kosten der gesamten Branche', 'Auf die Konzentration auf ein bestimmtes, meist kleines Marktsegment', 'Auf die Erschließung möglichst vieler unterschiedlicher Zielgruppen', 'Auf die Abschöpfung von Gewinnen bei sinkendem Marktwachstum'],
            correctIndex: 1,
            explanation: 'Bei der Nischenstrategie konzentriert sich ein Unternehmen auf ein bestimmtes Marktsegment oder eine bestimmte Zielgruppe, wie im Buch am Beispiel Patagonia gezeigt wird.',
          },
          {
            question: 'Welche zwei Achsen bilden die BCG-Portfolioanalyse (Marktwachstums-Marktanteils-Matrix)?',
            options: ['Umsatz und Gewinn', 'Kosten und Erlöse', 'Relativer Marktanteil und Marktwachstum', 'Chancen und Risiken'],
            correctIndex: 2,
            explanation: 'Die BCG-Matrix ordnet Produkte anhand des relativen Marktanteils und des Marktwachstums den vier Feldern Question Marks, Stars, Cashcows und Poor Dogs zu.',
          },
          {
            question: 'Ein Produkt befindet sich in einem stark wachsenden Markt, hat aber nur einen geringen relativen Marktanteil. In welchem Feld der BCG-Matrix liegt es und welche Strategie wird meist empfohlen?',
            options: ['Star - Wachstumsstrategie', 'Question Mark - Investitionsstrategie', 'Cashcow - Abschöpfungsstrategie', 'Poor Dog - Desinvestitionsstrategie'],
            correctIndex: 1,
            explanation: 'Hohes Marktwachstum bei geringem relativem Marktanteil kennzeichnet ein Question Mark; hier wird meist eine Investitionsstrategie empfohlen, um Marktanteile auszubauen.',
          },
          {
            question: 'Für Loopys Sortiment gilt: Ihr eigener Marktanteil bei Fruchtbonbons beträgt 12 %, der stärkste Konkurrent hält 4 %. Wie hoch ist der relative Marktanteil dieser Produktgruppe?',
            options: ['0,33', '8,0', '3,0', '1,2'],
            correctIndex: 2,
            explanation: 'Der relative Marktanteil ergibt sich aus dem eigenen Marktanteil geteilt durch den Marktanteil des stärksten Konkurrenten: 12 % geteilt durch 4 % ergibt 3,0.',
          },
          {
            question: 'Loopy eröffnet neben ihrem Candy Store zusätzlich ein Café für eine ganz neue Zielgruppe mit einem neuen Angebot. Welche Wachstumsstrategie beschreibt das?',
            options: ['Marktdurchdringungsstrategie', 'Marktentwicklungsstrategie', 'Diversifikationsstrategie', 'Produktentwicklungsstrategie'],
            correctIndex: 2,
            explanation: 'Bei der Diversifikationsstrategie erschließt ein Unternehmen mit einem neuen Produkt eine völlig neue Zielgruppe - im Buch etwa am Beispiel eines Möbelhauses, das in die Gastronomie expandiert.',
          },
          {
            question: 'Was unterscheidet das Bottom-up-Verfahren vom Top-down-Verfahren bei der Budgetierung?',
            options: ['Beim Bottom-up-Verfahren entscheidet ausschließlich die Geschäftsführung', 'Beim Bottom-up-Verfahren erstellen die Bereichsleiter/innen zunächst ihre Teilbudgets, beim Top-down-Verfahren gibt die Unternehmensleitung das Budget vor', 'Top-down bedeutet, dass es kein Gesamtbudget gibt', 'Bottom-up und Top-down unterscheiden sich nicht voneinander'],
            correctIndex: 1,
            explanation: 'Beim Bottom-up-Verfahren erstellen die Bereichsleiter/innen ihre Teilbudgets, die zusammengeführt werden, während beim Top-down-Verfahren die Unternehmensleitung das Budget vorgibt und auf die Teilbudgets verteilt.',
          },
          {
            question: 'Welche wichtige Erkenntnis zeigt das Buchbeispiel von Netflix und Blockbuster im Kapitel "Entscheidungen treffen"?',
            options: ['Große Unternehmen müssen nie auf Marktveränderungen reagieren', 'Blockbuster hat als Erstes auf Streaming umgestellt', 'Eine rechtzeitige, richtige Entscheidung (Umstieg auf Streaming) kann über den Erfolg eines Unternehmens entscheiden', 'Entscheidungen sollten möglichst spontan ohne Informationen getroffen werden'],
            correctIndex: 2,
            explanation: 'Netflix stellte rechtzeitig auf Streaming um, während Blockbuster zu spät reagierte und schließlich Konkurs anmelden musste - das Beispiel zeigt die Bedeutung rechtzeitiger, gut abgewogener Entscheidungen.',
          },
          {
            question: 'In welcher Reihenfolge laufen die Phasen des PDCA-Zyklus (Deming-Kreis) ab?',
            options: ['Do - Plan - Act - Check', 'Check - Act - Plan - Do', 'Plan - Do - Check - Act', 'Act - Check - Do - Plan'],
            correctIndex: 2,
            explanation: 'Der PDCA-Zyklus umfasst die Phasen Plan (Ziele festlegen), Do (Maßnahmen umsetzen), Check (Zielerreichung kontrollieren) und Act (Maßnahmen anpassen) und dient der kontinuierlichen Verbesserung.',
          },
        ],
      },
      {
        id: 'organisieren-und-fuehren',
        title: 'Erfolgreiches Organisieren & Führen',
        questions: [
          {
            question: 'Was regelt die Ablauforganisation eines Unternehmens im Unterschied zur Aufbauorganisation?',
            options: ['Ausschließlich die Anzahl der Mitarbeitenden', 'Die betrieblichen Abläufe und Prozesse', 'Die Struktur bzw. den Aufbau des Unternehmens', 'Die langfristige Vision des Unternehmens'],
            correctIndex: 1,
            explanation: 'Während die Aufbauorganisation die Struktur des Unternehmens regelt, legt die Ablauforganisation fest, wie die betrieblichen Abläufe und Prozesse gestaltet werden.',
          },
          {
            question: 'In welcher Reihenfolge entsteht laut Buch die Aufbauorganisation aus den Elementen Aufgabe, Abteilung und Stelle?',
            options: ['Stelle, dann Abteilung, dann Aufgabe', 'Abteilung, dann Aufgabe, dann Stelle', 'Aufgabe wird gebildet, mehrere Aufgaben werden zu einer Abteilung zusammengefasst, mehrere Stellen übernehmen die Aufgaben innerhalb der Abteilung', 'Alle drei Elemente entstehen gleichzeitig ohne Reihenfolge'],
            correctIndex: 2,
            explanation: 'Im Rahmen der Aufbauorganisation kommen üblicherweise zunächst Aufgaben vor, die zu Abteilungen zusammengefasst werden, innerhalb derer wiederum mehrere Stellen die Aufgaben übernehmen.',
          },
          {
            question: 'Was zeichnet eine Leitungsstelle (Instanz) aus?',
            options: ['Sie hat keinerlei Entscheidungsbefugnis', 'Sie besitzt Weisungs-, Entscheidungs- und Kontrollfunktion, z. B. die Geschäftsführung', 'Sie berät andere Stellen, ohne selbst Weisungen erteilen zu dürfen', 'Sie ist nur für den eigenen Verantwortungsbereich zuständig'],
            correctIndex: 1,
            explanation: 'Leitungsstellen bzw. Instanzen wie die Geschäftsführung, Teamleitung oder Projektleitung verfügen über Weisungs-, Entscheidungs- und Kontrollfunktion.',
          },
          {
            question: 'Loopy stellt eine Assistenz ein, die sie bei Entscheidungen berät und im Qualitätsmanagement unterstützt, selbst aber niemandem Weisungen erteilen darf. Um welche Stellenart handelt es sich?',
            options: ['Leitungsstelle', 'Ausführungsstelle', 'Stabsstelle', 'Instanz'],
            correctIndex: 2,
            explanation: 'Stabsstellen wie die Assistenz der Geschäftsführung haben eine beratende und unterstützende Funktion, besitzen aber keine eigene Weisungsbefugnis.',
          },
          {
            question: 'Welche Aussage trifft auf eine Ausführungsstelle zu?',
            options: ['Sie kann anderen Stellen Weisungen erteilen', 'Sie berät ausschließlich die Geschäftsleitung', 'Sie kontrolliert alle anderen Stellen im Unternehmen', 'Sie hat Entscheidungsbefugnis nur für den eigenen Verantwortungsbereich, aber keine Weisungsbefugnis gegenüber anderen'],
            correctIndex: 3,
            explanation: 'Ausführungsstellen wie Sachbearbeiter/innen oder Produktionsmitarbeiter/innen entscheiden nur im eigenen Verantwortungsbereich, ohne Weisungsbefugnis gegenüber anderen Stellen.',
          },
          {
            question: 'Was ist kennzeichnend für einen hohen Zentralisationsgrad in einem Unternehmen?',
            options: ['Entscheidungskompetenzen sind auf einen großen Personenkreis verteilt', 'Die Unternehmensführung trifft die wesentlichen Entscheidungen selbst, die Entscheidungskompetenzen liegen bei wenigen Personen', 'Es gibt keine Unternehmensführung', 'Jede Stelle trifft ihre Entscheidungen völlig unabhängig'],
            correctIndex: 1,
            explanation: 'Bei hoher Zentralisation bündelt die Unternehmensführung die wesentlichen Entscheidungskompetenzen bei einer Person oder wenigen Personen, während bei Dezentralisation Kompetenzen an einen größeren Personenkreis übertragen werden.',
          },
          {
            question: 'Was ist das zentrale Merkmal eines Einliniensystems?',
            options: ['Jede Stelle hat mehrere übergeordnete Instanzen', 'Es gibt keine Leitungsstellen', 'Jede Stelle hat jeweils nur eine übergeordnete Instanz', 'Alle Entscheidungen werden von Stabsstellen getroffen'],
            correctIndex: 2,
            explanation: 'Im Einliniensystem ist jede Stelle jeweils nur einer übergeordneten Instanz unterstellt, was zu klaren Weisungs- und Berichtswegen führt.',
          },
          {
            question: 'Wie wird das Mehrliniensystem in der Praxis häufig umgesetzt?',
            options: ['Als reines Einliniensystem ohne Stabsstellen', 'Als Matrixorganisation, bei der gleichzeitig nach Funktionen und Divisionen gegliedert wird', 'Nur in Kleinstunternehmen mit einer Person', 'Ausschließlich in der informellen Organisation'],
            correctIndex: 1,
            explanation: 'In der Praxis wird das Mehrliniensystem meist als Matrixorganisation geführt, bei der jede Stelle gleichzeitig nach zwei Kriterien - Funktionen und Divisionen - gegliedert ist und zwei übergeordnete Instanzen hat.',
          },
          {
            question: 'Welcher Nachteil wird im Buch dem Mehrliniensystem zugeschrieben?',
            options: ['Zu lange Kommunikationswege', 'Zu geringe Auslastung der Führungskräfte', 'Gefahr von widersprüchlichen Weisungen und hoher Koordinationsaufwand', 'Fehlende Kundenorientierung'],
            correctIndex: 2,
            explanation: 'Da beim Mehrliniensystem jede Stelle mehrere übergeordnete Instanzen hat, besteht die Gefahr widersprüchlicher Weisungen sowie ein hoher Koordinations- und Führungsaufwand.',
          },
          {
            question: 'Wonach ist eine funktionale Organisation gegliedert?',
            options: ['Nach Regionen oder Produktgruppen', 'Nach Funktionen wie Einkauf, Verkauf oder Produktion', 'Ausschließlich nach Kundengruppen', 'Nach dem Zufallsprinzip'],
            correctIndex: 1,
            explanation: 'Die funktionale Organisation gliedert das Unternehmen im Einliniensystem nach Funktionsbereichen wie Einkauf, Produktion oder Vertrieb.',
          },
          {
            question: 'Wonach ist eine divisionale Organisation typischerweise gegliedert?',
            options: ['Ausschließlich nach dem Alphabet der Abteilungsnamen', 'Nach der Anzahl der Mitarbeitenden', 'Nach Sparten wie Ländern, Regionen, Produktgruppen oder Kundengruppen', 'Nach dem Gründungsjahr des Unternehmens'],
            correctIndex: 2,
            explanation: 'Bei der divisionalen Organisation wird das Unternehmen nach Divisionen bzw. Sparten gegliedert, zum Beispiel nach Ländern, Regionen, Produktgruppen oder Kundengruppen.',
          },
          {
            question: 'Welches Merkmal zählt laut Buch NICHT zu einer agilen Organisation?',
            options: ['Kundenorientierung entlang der Customer Journey', 'Starre, langfristig festgelegte Hierarchieebenen', 'Flache Hierarchien', 'Selbstorganisierte Teams'],
            correctIndex: 1,
            explanation: 'Eine agile Organisation zeichnet sich gerade durch flache statt starre Hierarchien, Kundenorientierung und selbstorganisierte Teams aus, um flexibel auf Veränderungen reagieren zu können.',
          },
          {
            question: 'Zu welcher Prozessart zählt laut Buch die Personalverwaltung eines Unternehmens?',
            options: ['Geschäftsprozess', 'Managementprozess', 'Unterstützungsprozess', 'Kontrollprozess'],
            correctIndex: 2,
            explanation: 'Unterstützungsprozesse wie Personalwesen oder IT unterstützen den Ablauf der Geschäftsprozesse, während Geschäftsprozesse das Kerngeschäft (z. B. Produktion, Verkauf) betreffen.',
          },
          {
            question: 'Welches Symbol wird in einem Flussdiagramm (Flowchart) für eine Entscheidung verwendet?',
            options: ['Ein Oval', 'Ein Rechteck', 'Ein Kreis', 'Eine Raute'],
            correctIndex: 3,
            explanation: 'In Flussdiagrammen kennzeichnet eine Raute eine Entscheidung, während ein Oval für Start/Ende und ein Rechteck für einen Ablauf bzw. Prozess stehen.',
          },
          {
            question: 'Wodurch entsteht die informelle Organisation in einem Unternehmen?',
            options: ['Durch die offiziell vom Management vorgegebene Struktur', 'Durch spontan entstehende Bedürfnisse und persönliche Beziehungen der Mitarbeitenden', 'Durch das Organigramm des Unternehmens', 'Durch gesetzliche Vorschriften'],
            correctIndex: 1,
            explanation: 'Die informelle Organisation entsteht aufgrund spontaner Bedürfnisse und Ziele der Mitarbeitenden sowie persönlicher, ungeplanter Beziehungen - im Gegensatz zur vom Management vorgegebenen formalen Organisation.',
          },
          {
            question: 'In welche drei Kategorien lassen sich Führungstheorien laut Buch einteilen?',
            options: ['Normative, strategische und operative Theorien', 'Formale, informelle und agile Theorien', 'Eigenschaftstheorien, Verhaltenstheorien, Situationstheorien', 'Zentrale, dezentrale und hybride Theorien'],
            correctIndex: 2,
            explanation: 'Führungstheorien werden im Buch in Eigenschaftstheorien, Verhaltenstheorien und Situationstheorien unterteilt, je nachdem, welcher Erfolgsfaktor im Vordergrund steht.',
          },
          {
            question: 'Welcher Erfolgsfaktor steht im Mittelpunkt der Eigenschaftstheorien der Führung?',
            options: ['Das situationsabhängige Verhalten der Führungskraft', 'Bestimmte persönliche Eigenschaften der Führungskraft, z. B. Empathie oder Durchsetzungsvermögen', 'Ausschließlich das Verhalten gegenüber Mitarbeitenden', 'Die Größe des Unternehmens'],
            correctIndex: 1,
            explanation: 'Eigenschaftstheorien gehen davon aus, dass Führungskräfte bestimmte Persönlichkeitseigenschaften wie Intelligenz, Empathie oder Durchsetzungsvermögen benötigen, um erfolgreich zu sein.',
          },
          {
            question: 'Loopy bezieht ihre Mitarbeitenden im Candy Store aktiv in Entscheidungen mit ein und bespricht neue Ideen gemeinsam im Team. Welchen Führungsstil nach Lewin praktiziert sie?',
            options: ['Autoritären Führungsstil', 'Laissez-faire-Führungsstil', 'Kooperativen Führungsstil', 'Situativen Führungsstil'],
            correctIndex: 2,
            explanation: 'Beim kooperativen Führungsstil bezieht die Führungskraft die Mitarbeitenden in Entscheidungen mit ein, was Teamgeist und Eigeninitiative fördert.',
          },
          {
            question: 'Welche Aussage zum Verhaltensgitter (Managerial Grid) ist richtig?',
            options: ['Es misst ausschließlich die Intelligenz einer Führungskraft', 'Es wurde von Hersey und Blanchard entwickelt', 'Es unterscheidet nur zwischen autoritärem und kooperativem Führungsstil', 'Es beschreibt Führungsstile anhand der zwei Dimensionen Aufgabenorientierung und Mitarbeiterorientierung, wobei 9.9 (Teammanagement) als effektivster Stil gilt'],
            correctIndex: 3,
            explanation: 'Das von Blake und Mouton entwickelte Verhaltensgitter beschreibt Führungsstile anhand von Aufgaben- und Mitarbeiterorientierung; die Ausprägung 9.9 (Teammanagement) gilt als effektivster Führungsstil.',
          },
          {
            question: 'Welchen Führungsstil empfiehlt das situative Reifegradmodell nach Hersey und Blanchard bei Mitarbeitenden mit hohem Reifegrad?',
            options: ['Unterweisen mit strenger Kontrolle', 'Delegieren - Aufgaben können ohne detaillierte Erklärungen übergeben werden', 'Verkaufen mit starker Aufgaben- und Mitarbeiterorientierung', 'Ausschließlich autoritäres Durchgreifen'],
            correctIndex: 1,
            explanation: 'Bei hohem Reifegrad der Mitarbeitenden - also hoher Fähigkeit und psychologischer Reife - empfiehlt das Modell den Stil Delegieren, bei dem Aufgaben ohne detaillierte Erklärungen übertragen werden können.',
          },
          {
            question: 'Nach welchen zwei Kriterien richtet sich laut Vroom-Yetton-Entscheidungsmodell das Führungsverhalten in Entscheidungssituationen?',
            options: ['Umsatz und Gewinn', 'Reifegrad und Motivation', 'Sachqualität und Mitarbeiterakzeptanz', 'Aufgaben- und Mitarbeiterorientierung'],
            correctIndex: 2,
            explanation: 'Das von Vroom und Yetton entwickelte Modell richtet das Führungsverhalten nach der Sachqualität (fachliche Richtigkeit der Lösung) und der Mitarbeiterakzeptanz der Entscheidung aus.',
          },
          {
            question: 'Was ist kennzeichnend für das Führungskonzept "Management by Objectives" (MbO)?',
            options: ['Mitarbeitende erhalten überhaupt keine Ziele', 'Nur die erreichten Ergebnisse zählen, unabhängig vom Weg dorthin', 'Führungskräfte und Mitarbeitende vereinbaren gemeinsam Ziele und legen fest, wie diese kontrolliert werden', 'Führungskräfte greifen bei jeder Kleinigkeit persönlich ein'],
            correctIndex: 2,
            explanation: 'Bei Management by Objectives vereinbaren Führungskräfte und Mitarbeitende gemeinsam Ziele und legen fest, wie deren Erreichung kontrolliert wird.',
          },
          {
            question: 'Welche Kompetenz zählt laut Buch zu den Leadership-Kompetenzen moderner Führungskräfte?',
            options: ['Ausschließlich technisches Fachwissen ohne Mitarbeiterkontakt', 'Vollständiger Verzicht auf Kommunikation mit dem Team', 'Digitale Kompetenzen, um Geschäftsprozesse an neue Technologien anzupassen', 'Reines Kostenmanagement ohne Personalverantwortung'],
            correctIndex: 2,
            explanation: 'Zu den Leadership-Kompetenzen moderner Führungskräfte zählen laut Buch u. a. digitale Kompetenzen, mit denen sich Geschäftsprozesse und Kommunikation an neue Technologien anpassen lassen.',
          },
          {
            question: 'Wofür steht das "M" im PERMA-Modell des Positive Leadership?',
            options: ['Motivation durch finanzielle Anreize', 'Management by Objectives', 'Mitarbeiterzufriedenheit messen', 'Meaning - die Sinnhaftigkeit der Arbeit vermitteln'],
            correctIndex: 3,
            explanation: 'Das "M" im PERMA-Modell steht für Meaning: Führungskräfte sollen Mitarbeitenden einen Sinn in ihrer Tätigkeit vermitteln, damit diese Eingebundenheit und Verantwortung übernehmen.',
          },
        ],
      },
      {
        id: 'personalbedarfsplanung',
        title: 'Personalbedarfsplanung',
        questions: [
          {
            question: 'Worin unterscheiden sich der quantitative und der qualitative Personalbedarf?',
            options: ['Der quantitative Personalbedarf betrifft die Anzahl der benötigten Mitarbeiter/innen, der qualitative Personalbedarf ihre erforderlichen Qualifikationen.', 'Der quantitative Personalbedarf betrifft nur Führungskräfte, der qualitative nur Lehrlinge.', 'Der quantitative Personalbedarf steht im Kollektivvertrag, der qualitative im Dienstzettel.', 'Der quantitative Personalbedarf betrifft den örtlichen, der qualitative den zeitlichen Bedarf.'],
            correctIndex: 0,
            explanation: 'Der quantitative Personalbedarf gibt an, wie viele Mitarbeiter/innen benötigt werden, der qualitative Personalbedarf beschreibt die dafür nötigen Qualifikationen und wird in der Stellenbeschreibung sichtbar.',
          },
          {
            question: 'Loopy stellt fest, dass sie in der Vorweihnachtszeit deutlich mehr Verkäufer/innen in ihrem Candy Store braucht als sonst im Jahr. Welche Ursache für Personalbedarfsschwankungen liegt hier vor?',
            options: ['Ein Rückgang der Auftragslage', 'Eine bevorstehende Pensionierungswelle', 'Zeitliche Schwankungen aufgrund saisonaler Nachfrage', 'Eine Änderung der Kollektivvertragsregelung'],
            correctIndex: 2,
            explanation: 'Laut Buch zählen zeitliche Schwankungen, etwa saisonal bedingte Mehrnachfrage rund um Weihnachten, zu den typischen Ursachen für Veränderungen des quantitativen Personalbedarfs.',
          },
          {
            question: 'Wozu dient eine Stellenbeschreibung im Rahmen der Personalbedarfsplanung?',
            options: ['Sie legt die Kündigungsfrist der Position gesetzlich fest.', 'Sie konkretisiert den qualitativen Personalbedarf, indem sie Aufgaben, Verantwortlichkeiten und Kompetenzen der Stelle beschreibt.', 'Sie ersetzt bei der Einstellung den Dienstzettel.', 'Sie dient ausschließlich der Berechnung der Abfertigung.'],
            correctIndex: 1,
            explanation: 'Die Stellenbeschreibung enthält u. a. die Eingliederung in die Organisation, Zielsetzung, Tätigkeiten/Verantwortlichkeiten und Kompetenzen und macht damit den qualitativen Personalbedarf greifbar.',
          },
          {
            question: 'Weicht der Personalstand vom ermittelten Personalbedarf ab, sind Maßnahmen zur Personalbedarfsdeckung nötig. Was gilt laut Buch, wenn der Bedarf größer als der Ist-Stand ist?',
            options: ['Es ist ausschließlich eine Personalfreisetzung nötig.', 'Es kann Personalsuche und -auswahl oder Personalentwicklung (z. B. Umschulung) eingesetzt werden.', 'Die Kündigungsfristen müssen verkürzt werden.', 'Es sind ausschließlich befristete Probezeiten zulässig.'],
            correctIndex: 1,
            explanation: 'Ist der Bedarf größer als der Ist-Stand, kann neues Personal gesucht/ausgewählt oder vorhandenes Personal per Personalentwicklung (z. B. Umschulung) qualifiziert werden. Ist der Bedarf kleiner, ist Personalfreisetzung nötig.',
          },
          {
            question: 'In welcher Reihenfolge läuft der Prozess der Personalsuche und -auswahl (Recruiting) laut Buch ab?',
            options: ['Personaleinstellung, Personalsuche, Anforderungsprofil, Auswahlverfahren, Analyse der Unterlagen', 'Festlegung des Anforderungsprofils, Personalsuche, Analyse der Bewerbungsunterlagen, Auswahlverfahren, Personaleinstellung', 'Analyse der Bewerbungsunterlagen, Anforderungsprofil, Personalsuche, Personaleinstellung, Auswahlverfahren', 'Personalsuche, Personaleinstellung, Anforderungsprofil, Auswahlverfahren, Analyse der Unterlagen'],
            correctIndex: 1,
            explanation: 'Der Recruiting-Prozess umfasst die Schritte Festlegung des Anforderungsprofils, Personalsuche, Vorauswahl (Analyse der Bewerbungsunterlagen), Auswahl des Personals und Personaleinstellung.',
          },
          {
            question: 'Was versteht man unter dem Anforderungsprofil einer Stelle?',
            options: ['Eine Übersicht über die Kündigungsfristen aller Mitarbeiter/innen', 'Die Beschreibung der fachlichen und persönlichen Qualifikationen, die Bewerber/innen erfüllen sollen, um für eine Stelle geeignet zu sein', 'Ein Verzeichnis aller Sozialleistungen eines Unternehmens', 'Die Liste aller eingegangenen Bewerbungen für eine Stelle'],
            correctIndex: 1,
            explanation: 'Das Anforderungsprofil ist die Basis für die Suche und Auswahl von Personal und beschreibt die fachlichen und persönlichen Qualifikationen, die für die Stelle nötig sind.',
          },
          {
            question: 'Loopy überlegt, wie sie eine freie Stelle in ihrem Candy Store besetzen soll. Was unterscheidet interne von externer Personalsuche?',
            options: ['Interne Personalsuche ist nur bei Führungspositionen erlaubt.', 'Externe Personalsuche erfolgt ausschließlich über Headhunter.', 'Bei der internen Personalsuche wird der Bedarf durch bereits vorhandene Mitarbeiter/innen gedeckt, bei der externen durch neue Personen von außerhalb.', 'Interne Personalsuche bedeutet immer ein Assessment Center.'],
            correctIndex: 2,
            explanation: 'Interne Personalsuche deckt den Bedarf mit vorhandenen Mitarbeiter/innen (z. B. durch Versetzung), externe Personalsuche mit Personen von außerhalb des Unternehmens.',
          },
          {
            question: 'Welcher Begriff bezeichnet ein Unternehmen, von dem sich ein Betrieb meist kurzfristig Leiharbeiter/innen "ausleiht"?',
            options: ['Personalleasingunternehmen', 'Personalberater', 'Headhunter', 'Arbeitsmarktservice (AMS)'],
            correctIndex: 0,
            explanation: 'Beim Personalleasing "leiht" sich ein Unternehmen meist kurzfristig Personal (Leiharbeiter/innen) von einem Personalleasingunternehmen aus.',
          },
          {
            question: 'Was ist die Aufgabe eines Headhunters bei der externen Personalsuche?',
            options: ['Er meldet neue Mitarbeiter/innen bei der Krankenversicherung an.', 'Er spricht im Auftrag eines Unternehmens gezielt hochqualifizierte Fach- oder Führungskräfte an - auch wenn diese nicht aktiv auf Jobsuche sind.', 'Er erstellt die Stellenbeschreibung für das Personalmanagement.', 'Er ist für die Auszahlung der Abfertigung zuständig.'],
            correctIndex: 1,
            explanation: 'Ein Headhunter wird beauftragt, im Auftrag eines Unternehmens gezielt hochqualifizierte Fach- oder Führungskräfte anzusprechen, auch wenn diese passiv nach einer neuen Stelle suchen.',
          },
          {
            question: 'Loopy möchte, dass ihr Candy Store als attraktiver Arbeitgeber wahrgenommen wird, um leichter neue Mitarbeiter/innen zu finden. Welche Maßnahme setzt sie damit gezielt ein?',
            options: ['Assessment Center', 'Kündigungsschutz', 'Employer Branding bzw. Personalmarketing', 'Personalfreisetzung'],
            correctIndex: 2,
            explanation: 'Maßnahmen im Personalmarketing bzw. Employer Branding (z. B. Image-Kampagnen, Benefits) sollen ein positives Arbeitgeberimage schaffen und qualifiziertes Personal begeistern.',
          },
          {
            question: 'Loopy möchte eine Stellenanzeige für ihren Candy Store veröffentlichen. Was schreibt das Gleichbehandlungsgesetz (§ 9) dabei vor?',
            options: ['Die Stelle darf grundsätzlich nicht nur für Männer oder nur für Frauen ausgeschrieben werden, außer ein bestimmtes Geschlecht ist unverzichtbare Voraussetzung für die Tätigkeit.', 'Die Anzeige muss ein Mindestalter der Bewerber/innen enthalten.', 'Die Anzeige darf nicht länger als eine Woche online bleiben.', 'Die Anzeige darf keine Gehaltsangabe enthalten.'],
            correctIndex: 0,
            explanation: 'Laut § 9 Gleichbehandlungsgesetz muss eine Stellenausschreibung geschlechtsneutral erfolgen, sofern ein bestimmtes Geschlecht nicht unverzichtbare Voraussetzung für die Tätigkeit ist.',
          },
          {
            question: 'Was gehört laut Buch typischerweise zu den Bewerbungsunterlagen, die bei der Vorauswahl analysiert werden?',
            options: ['Dienstzettel, Abfertigungsbescheid und Kündigungsschreiben', 'Nur der tabellarische Lebenslauf ohne weitere Unterlagen', 'Bewerbungsschreiben, Lebenslauf und Zeugniskopien', 'Assessment-Center-Protokoll und Testverfahren-Auswertung'],
            correctIndex: 2,
            explanation: 'Zu den Bewerbungsunterlagen zählen Bewerbungsschreiben, Lebenslauf (mit Foto) und Zeugniskopien (Ausbildungs- und Dienstzeugnisse).',
          },
          {
            question: 'Was versteht man unter einem Dienstzeugnis?',
            options: ['Die Bestätigung der Arbeitgeberin/des Arbeitgebers über Dauer und Art eines Arbeitsverhältnisses - oft inklusive Leistungsbeurteilung', 'Ein Dokument, das die Kündigungsfrist eines Arbeitnehmers regelt', 'Einen Nachweis über die Einzahlung in die Mitarbeitervorsorgekasse', 'Ein Formular zur Anmeldung bei der Krankenversicherung'],
            correctIndex: 0,
            explanation: 'Das Dienstzeugnis bestätigt Dauer und Art des Arbeitsverhältnisses und enthält oft eine Leistungsbeurteilung.',
          },
          {
            question: 'Welche Aussage zu einem guten Bewerbungsschreiben trifft laut Buch zu?',
            options: ['Es ist nicht länger als eine Seite und macht deutlich, dass sich die Bewerberin/der Bewerber informiert, gezielt ausgewählt und passende Qualifikationen mitbringt.', 'Es sollte mindestens drei Seiten lang sein.', 'Es sollte alle bisherigen Arbeitgeber lückenlos mit Kontaktdaten auflisten.', 'Es ersetzt in jedem Fall den Lebenslauf.'],
            correctIndex: 0,
            explanation: 'Ein gutes Bewerbungsschreiben ist nicht länger als eine Seite und zeigt, dass sich die Bewerberin/der Bewerber informiert und gezielt beworben hat sowie die passenden Qualifikationen mitbringt.',
          },
          {
            question: 'Was gehört laut Buch zu den Inhalten eines tabellarischen Lebenslaufes?',
            options: ['Persönliche Daten, Foto, Bildungsweg, Berufserfahrung, Fähigkeiten/Kenntnisse sowie Unterschrift', 'Ausschließlich die Kontaktdaten der letzten drei Arbeitgeber', 'Nur die Note im letzten Zeugnis', 'Der vollständige Wortlaut des künftigen Arbeitsvertrags'],
            correctIndex: 0,
            explanation: 'Der tabellarische Lebenslauf informiert kompakt über persönliche Daten, Foto, Bildungsweg, Berufserfahrung, Fähigkeiten und Kenntnisse sowie ggf. Hobbys und Unterschrift.',
          },
          {
            question: 'Worauf sollte Loopys künftige Mitarbeiterin bei einer Bewerbung per E-Mail besonders achten?',
            options: ['Darauf, dass die Anhänge möglichst groß sind, um Professionalität zu zeigen', 'Darauf, dass kein Betreff angegeben wird', 'Auf eine seriöse E-Mail-Adresse und eine Dateigröße von maximal rund 10 MB, damit die Bewerbung nicht im Spam-Ordner landet', 'Darauf, dass die Unterlagen ausschließlich als Word-Datei verschickt werden'],
            correctIndex: 2,
            explanation: 'Bei der E-Mail-Bewerbung sollten Bewerber/innen eine seriöse E-Mail-Adresse verwenden und die Dateigröße (max. ca. 10 MB) beachten, damit die Bewerbung nicht im Spam-Ordner landet.',
          },
          {
            question: 'Welches Risiko wird im Buch im Zusammenhang mit dem Einsatz künstlicher Intelligenz bei der Vorauswahl von Bewerbungen genannt?',
            options: ['KI kann grundsätzlich keine Bewerbungsunterlagen mit der Stellenanzeige abgleichen.', 'Wurde die KI mit Daten trainiert, bei denen früher systematisch bestimmte Gruppen bevorzugt wurden, kann sie diskriminierende Muster verstärken.', 'KI-Systeme verursachen automatisch höhere Bewerbungskosten für Unternehmen.', 'KI darf laut Gesetz in Österreich für die Bewerbungsvorauswahl generell nicht eingesetzt werden.'],
            correctIndex: 1,
            explanation: 'Wurde die KI mit historischen Daten trainiert, in denen z. B. systematisch Männer bevorzugt wurden, kann sie diese Diskriminierung bei künftigen Bewerbungsauswahlen fortsetzen bzw. verstärken.',
          },
          {
            question: 'Was ist ein typisches Merkmal eines Assessment Centers als Auswahlverfahren?',
            options: ['Es dauert meist nur 15 Minuten und findet ausschließlich telefonisch statt.', 'Mehrere Bewerber/innen werden gleichzeitig eingeladen und von Personalfachleuten bei verschiedenen Aufgaben beobachtet, oft über ein bis drei Tage.', 'Es besteht nur aus einem schriftlichen Intelligenztest ohne persönlichen Kontakt.', 'Es wird ausschließlich für die Auswahl von Lehrlingen eingesetzt.'],
            correctIndex: 1,
            explanation: 'Beim Assessment Center werden mehrere Bewerber/innen gleichzeitig eingeladen und bei Aufgaben wie Gruppenaufgaben oder Fallstudien beobachtet; es dauert meist ein bis drei Tage und wird oft für Führungspositionen eingesetzt.',
          },
          {
            question: 'In welcher Reihenfolge läuft ein Bewerbungsgespräch laut dem im Buch dargestellten bewährten Ablauf typischerweise ab?',
            options: ['Gesprächsabschluss, Selbstdarstellung, Gesprächsbeginn, freies Gespräch', 'Gesprächsbeginn, Selbstdarstellung der Bewerberin/des Bewerbers, Vorstellung des Unternehmens, lebenslaufbezogene und situative Fragen, freies Gespräch, Gesprächsabschluss', 'Situative Fragen, Gesprächsbeginn, freies Gespräch, Selbstdarstellung', 'Vorstellung des Unternehmens, Gesprächsabschluss, Gesprächsbeginn, Selbstdarstellung'],
            correctIndex: 1,
            explanation: 'Der bewährte Ablauf ist: Gesprächsbeginn, Selbstdarstellung, Vorstellung des Unternehmens, lebenslaufbezogene Fragen, situative Fragen, freies Gespräch, Gesprächsabschluss.',
          },
          {
            question: 'Welche Frage wäre in einem Bewerbungsgespräch laut Buch unzulässig?',
            options: ['Welche Ausbildung haben Sie abgeschlossen?', 'Wie sind Sie mit einer schwierigen Aufgabe in Ihrem bisherigen Job umgegangen?', 'Sind Sie schwanger bzw. planen Sie in naher Zukunft eine Schwangerschaft?', 'Warum haben Sie sich für unser Unternehmen beworben?'],
            correctIndex: 2,
            explanation: 'Zulässig sind nur Fragen, die mit der künftigen Tätigkeit zusammenhängen. Unzulässig sind u. a. Fragen nach Partei- oder Religionszugehörigkeit, Schwangerschaft oder Krankheit.',
          },
          {
            question: 'Wann muss ein Unternehmen bei der Einstellung eines neuen Mitarbeiters/einer neuen Mitarbeiterin laut Buch keinen Dienstzettel ausstellen?',
            options: ['Wenn das Arbeitsverhältnis höchstens einen Monat dauert oder ein schriftlicher Arbeitsvertrag mit allen erforderlichen Angaben abgeschlossen wurde', 'Wenn die Probezeit länger als drei Monate dauert', 'Wenn die Mitarbeiterin/der Mitarbeiter bereits einmal im Unternehmen beschäftigt war', 'Wenn es sich um eine Führungsposition handelt'],
            correctIndex: 0,
            explanation: 'Kein Dienstzettel muss ausgestellt werden, wenn das Arbeitsverhältnis höchstens einen Monat beträgt oder ein schriftlicher Arbeitsvertrag mit allen Dienstzettel-Angaben vorliegt.',
          },
          {
            question: 'Wie definiert das Buch Personalentwicklung (PE)?',
            options: ['Als alle Maßnahmen zur Beendigung von Arbeitsverhältnissen', 'Als die Suche nach neuem, externem Personal', 'Als alle geplanten Aus-, Fort- und Weiterbildungsmaßnahmen zur individuellen beruflichen Qualifikation und Förderung fachlicher, methodischer, sozialer und persönlicher Fähigkeiten der Mitarbeiter/innen', 'Als ausschließlich gesetzlich vorgeschriebene Fortbildungen für Führungskräfte'],
            correctIndex: 2,
            explanation: 'Personalentwicklung umfasst alle geplanten Aus-, Fort- und Weiterbildungsmaßnahmen zur individuellen beruflichen Qualifikation und zur Förderung fachlicher, methodischer, sozialer und persönlicher Fähigkeiten.',
          },
          {
            question: 'Welches Ziel zählt laut Buch zu den betrieblichen (nicht individuellen) Zielen der Personalentwicklung?',
            options: ['Steigerung des persönlichen Einkommens', 'Entfaltung der Persönlichkeit', 'Erhöhung des persönlichen Prestiges', 'Sicherung eines qualifizierten Personalbestands und Erhöhung der Mitarbeiterzufriedenheit'],
            correctIndex: 3,
            explanation: 'Betriebliche Ziele der PE sind u. a. Sicherung eines qualifizierten Personalbestands, Verbesserung der Wettbewerbsfähigkeit, Mitarbeiterzufriedenheit und Bindung ans Unternehmen. Individuelle Ziele betreffen dagegen z. B. Persönlichkeitsentfaltung, Prestige und Einkommen.',
          },
          {
            question: 'Loopy führt für ihre neue Verkäuferin ein strukturiertes Einführungsprogramm durch, bei dem sie in Arbeitsabläufe, Unternehmenskultur und Organisationsstruktur eingeführt wird. Wie nennt man diese Into-the-Job-Maßnahme?',
            options: ['Outplacement', 'Coaching', 'Qualitätszirkel', 'Onboarding'],
            correctIndex: 3,
            explanation: 'Onboarding umfasst Maßnahmen zur Einarbeitung neuer Mitarbeiter/innen, inklusive Einführung in Arbeitsabläufe, Unternehmenskultur und Organisationsstruktur, und zählt zu den Into-the-Job-Maßnahmen.',
          },
          {
            question: 'Was versteht man unter On-the-Job-Maßnahmen der Personalentwicklung?',
            options: ['Berufsbegleitende Studien außerhalb der Arbeitszeit', 'Schrittweises Lernen während der Tätigkeit, z. B. durch Unterweisungen am Arbeitsplatz durch Vorgesetzte oder Coaching', 'Vorträge im Rahmen der Ruhestandsvorbereitung', 'Die Teilnahme an einem mehrjährigen Traineeprogramm vor Berufseinstieg'],
            correctIndex: 1,
            explanation: 'On-the-Job-Maßnahmen ermöglichen schrittweises Lernen während der Tätigkeit, vor allem durch Unterweisungen am Arbeitsplatz durch Vorgesetzte und bei Spezialfragen ggf. Coaching.',
          },
          {
            question: 'Welche Maßnahme zählt laut Buch zu den Near-the-Job-Maßnahmen der Personalentwicklung?',
            options: ['Ein mehrwöchiger externer E-Learning-Kurs', 'Die Ruhestandsvorbereitung mit Vorträgen zur Gesundheit im Alter', 'Die Mitarbeit in einem Qualitätszirkel, der regelmäßig konkrete Schwachstellen wie Arbeitsabläufe bespricht', 'Eine berufsbegleitende Weiterbildung parallel zur regulären Arbeitszeit'],
            correctIndex: 2,
            explanation: 'Near-the-Job-Maßnahmen wie Projektarbeit, Qualitätszirkel und Feedback-Gespräche finden in enger räumlicher, zeitlicher und inhaltlicher Nähe zum Arbeitsplatz statt.',
          },
          {
            question: 'Welche Aussage beschreibt Off-the-Job-Maßnahmen der Personalentwicklung korrekt?',
            options: ['Es handelt sich ausschließlich um Unterweisungen direkt am Arbeitsplatz durch Vorgesetzte.', 'Es handelt sich um Maßnahmen, die nur beim Berufsausstieg zum Einsatz kommen.', 'Es handelt sich um Maßnahmen, die ausschließlich vor dem ersten Arbeitstag stattfinden.', 'Es handelt sich um Lernangebote außerhalb des Arbeitsplatzes, z. B. Online-Kurse, Schulungen/Seminare oder berufsbegleitende Weiterbildung.'],
            correctIndex: 3,
            explanation: 'Off-the-Job-Maßnahmen sind Lernangebote außerhalb des Arbeitsplatzes, z. B. E-Learning, Schulungen/Seminare/Workshops oder berufsbegleitende Weiterbildung.',
          },
          {
            question: 'Welche zwei Maßnahmenarten zählen laut Buch zu den Out-of-the-Job-Maßnahmen der Personalentwicklung?',
            options: ['Onboarding und Traineeprogramm', 'Coaching und Unterweisung am Arbeitsplatz', 'Feedback-Gespräche und Qualitätszirkel', 'Ruhestandsvorbereitung und Outplacement-Maßnahmen'],
            correctIndex: 3,
            explanation: 'Out-of-the-Job-Maßnahmen erleichtern den Ausstieg aus einem Arbeitsverhältnis: Ruhestandsvorbereitung unterstützt den Übergang in die Pension, Outplacement-Maßnahmen unterstützen die berufliche Neuorientierung nach einer Kündigung.',
          },
          {
            question: 'Welche Möglichkeit der Beendigung eines Arbeitsverhältnisses besteht laut Buch nur bei unbefristeten Dienstverhältnissen?',
            options: ['Der Zeitablauf laut Arbeitsvertrag', 'Die Beendigung während der vereinbarten Probezeit', 'Die Kündigung', 'Der automatische Übergang in ein unbefristetes Verhältnis'],
            correctIndex: 2,
            explanation: 'Die Kündigung ist nur bei unbefristeten Dienstverhältnissen möglich; Zeitablauf und Beendigung während der Probezeit betreffen dagegen befristete Arbeitsverhältnisse.',
          },
          {
            question: 'Wie lange darf eine Probezeit laut Buch in der Regel maximal vereinbart werden - und welche Ausnahme gibt es?',
            options: ['Maximal drei Monate, Ausnahme: Lehrlinge haben einen Monat Probezeit', 'Maximal ein Jahr, Ausnahme: Lehrlinge haben keine Probezeit', 'Maximal zwei Wochen ohne Ausnahmen', 'Maximal einen Monat, Ausnahme: Lehrlinge haben eine dreimonatige Probezeit'],
            correctIndex: 3,
            explanation: 'Eine Probezeit kann maximal für einen Monat vereinbart werden; Lehrlinge haben eine dreimonatige Probezeit.',
          },
          {
            question: 'Loopys Verkäuferin möchte selbst kündigen. Zu welchem Termin kann sie das laut Buch grundsätzlich tun und wie lange ist die Kündigungsfrist?',
            options: ['Nur zum Ende eines Kalendervierteljahres, Frist: 3 Monate', 'Nur zum 15. eines Monats, Frist: 6 Wochen', 'Jederzeit ohne Frist möglich', 'Zu jedem Monatsletzten, Frist: in der Regel ein Monat'],
            correctIndex: 3,
            explanation: 'Eine Kündigung durch die Arbeitnehmerseite kann zu jedem Monatsletzten ausgesprochen werden; die Kündigungsfrist beträgt in der Regel einen Monat.',
          },
          {
            question: 'Loopy möchte einer Mitarbeiterin kündigen, die bereits 8 Jahre in ihrem Candy Store beschäftigt ist. Welche Kündigungsfrist muss sie laut der im Buch dargestellten Staffelung als Arbeitgeberin einhalten?',
            options: ['6 Wochen', '2 Monate', '3 Monate', '5 Monate'],
            correctIndex: 2,
            explanation: 'Bei einer Beschäftigungsdauer im 6. bis 15. Arbeitsjahr beträgt die arbeitgeberseitige Kündigungsfrist laut der im Buch dargestellten Staffelung 3 Monate.',
          },
          {
            question: 'Zu welchem Termin können Angestellte laut Buch in der Regel durch die Arbeitgeberin/den Arbeitgeber gekündigt werden, sofern der Kollektivvertrag nichts anderes regelt?',
            options: ['Zu jedem beliebigen Tag im Monat', 'Nur am ersten Tag jedes Monats', 'Nur einmal jährlich zum Jahresende', 'Nur zum Ende eines Kalendervierteljahres (März, Juni, September, Dezember)'],
            correctIndex: 3,
            explanation: 'In der Regel können Angestellte vom Unternehmen nur zum Ende eines Kalendervierteljahres gekündigt werden; kollektivvertraglich kann aber auch jeder 15. oder Monatsletzte als Kündigungstermin festgelegt werden.',
          },
          {
            question: 'Welche Personengruppe genießt laut Buch einen besonderen Kündigungsschutz?',
            options: ['Alle Mitarbeiter/innen mit weniger als einem Jahr Betriebszugehörigkeit', 'Alle Teilzeitbeschäftigten', 'Alle Mitarbeiter/innen über 50 Jahre', 'Werdende Mütter und Personen in Elternkarenz'],
            correctIndex: 3,
            explanation: 'Besonderen Kündigungsschutz genießen u. a. werdende Mütter, Personen in Elternkarenz, Präsenz- und Zivildiener, Betriebsratsmitglieder und begünstigte Behinderte.',
          },
          {
            question: 'Worin unterscheiden sich Entlassung und Austritt eines Arbeitsverhältnisses laut Buch?',
            options: ['Bei einer Entlassung beendet die Arbeitgeberseite fristlos wegen schweren Verstoßes des Arbeitnehmers/der Arbeitnehmerin, beim Austritt beendet die Arbeitnehmerseite fristlos wegen schweren Verstoßes der Arbeitgeberseite.', 'Entlassung und Austritt sind exakt dasselbe und nur regional unterschiedlich benannt.', 'Eine Entlassung erfolgt immer einvernehmlich, ein Austritt nie.', 'Beim Austritt muss die volle Kündigungsfrist eingehalten werden, bei der Entlassung nicht.'],
            correctIndex: 0,
            explanation: 'Eine Entlassung wird von der Arbeitgeberseite bei schwerem Verstoß der Arbeitnehmerseite sofort ausgesprochen (z. B. Tätlichkeiten); ein Austritt wird von der Arbeitnehmerseite bei schwerem Verstoß der Arbeitgeberseite sofort erklärt (z. B. Entgeltvorenthaltung).',
          },
          {
            question: 'Was sind Postensuchtage, auf die Arbeitnehmer/innen bei einer Kündigung durch das Unternehmen laut Buch Anspruch haben?',
            options: ['Ein zusätzlicher Monat Gehalt nach Beendigung des Arbeitsverhältnisses', 'Ein verpflichtender unbezahlter Urlaub vor dem letzten Arbeitstag', 'Eine Prämie für besonders lange Betriebszugehörigkeit', 'Bezahlte Freizeit im Ausmaß von einem Fünftel der wöchentlichen Arbeitszeit, um sich eine neue Arbeitsstelle zu suchen'],
            correctIndex: 3,
            explanation: 'Bei Kündigung durch das Unternehmen steht Arbeitnehmer/innen bezahlte Freizeit im Ausmaß von einem Fünftel der wöchentlichen Arbeitszeit zu, um sich eine neue Stelle zu suchen. Bei Selbstkündigung besteht in der Regel kein Anspruch.',
          },
          {
            question: 'Wie funktioniert die "Abfertigung neu" über die Mitarbeitervorsorgekasse (MVK) laut Buch?',
            options: ['Der Arbeitgeber zahlt laufend 1,53 % des Bruttoentgelts in eine MVK ein; nach frühestens drei Einzahlungsjahren kann der Arbeitnehmer/die Arbeitnehmerin zwischen Auszahlung oder Mitnahme wählen.', 'Die Abfertigung wird nur bei einer Entlassung ausgezahlt, nie bei einvernehmlicher Auflösung.', 'Der Arbeitnehmer zahlt monatlich einen Fixbetrag in die MVK ein.', 'Die Abfertigung entfällt vollständig, wenn ein befristetes Arbeitsverhältnis vorliegt.'],
            correctIndex: 0,
            explanation: 'Für jede/n Arbeitnehmer/in werden vom Arbeitgeber laufend 1,53 % des Bruttoentgelts in eine MVK einbezahlt; nach frühestens drei Einzahlungsjahren kann zwischen Auszahlung oder Mitnahme zum nächsten Arbeitgeber gewählt werden.',
          },
        ],
      },
      {
        id: 'personaleinsatzgestaltung',
        title: 'Personaleinsatzgestaltung',
        questions: [
          {
            question: 'Im Stufenbau der Rechtsordnung steht der Kollektivvertrag über dem Einzelarbeitsvertrag. Wann darf ein Einzelarbeitsvertrag dennoch von den Regelungen des Kollektivvertrags abweichen?',
            options: ['Wenn die Geschäftsführung das genehmigt', 'Wenn der Betriebsrat zustimmt', 'Wenn die Abweichung für die Arbeitnehmer/innen vorteilhaft ist (Günstigkeitsprinzip)', 'Wenn die Regelung nur befristet gilt'],
            correctIndex: 2,
            explanation: 'Rangniedrigere Vorschriften dürfen von ranghöheren nur dann abweichen, wenn die Abweichung für die Arbeitnehmer/innen günstiger ist – das nennt man Günstigkeitsprinzip.',
          },
          {
            question: 'Ein Mitarbeiter von Loopy\'s Candy Store gibt das geheime Rezept für die hausgemachten Karamellbonbons an einen Freund weiter, der ein Konkurrenzgeschäft eröffnen will. Gegen welche Pflicht verstößt er damit?',
            options: ['Gleichbehandlungspflicht', 'Fürsorgepflicht', 'Sonderschutzpflicht', 'Treuepflicht (Verschwiegenheitspflicht)'],
            correctIndex: 3,
            explanation: 'Arbeitnehmer/innen trifft eine Treuepflicht, die u. a. die Verschwiegenheit über Betriebsgeheimnisse umfasst.',
          },
          {
            question: 'Wie hoch ist die gesetzliche Normalarbeitszeit in Österreich?',
            options: ['12 Stunden pro Tag / 60 Stunden pro Woche', '8 Stunden pro Tag / 40 Stunden pro Woche', '10 Stunden pro Tag / 50 Stunden pro Woche', '6 Stunden pro Tag / 35 Stunden pro Woche'],
            correctIndex: 1,
            explanation: 'Das Gesetz sieht eine Normalarbeitszeit von acht Stunden pro Tag bzw. 40 Stunden pro Woche vor, viele Kollektivverträge sehen eine verkürzte Arbeitszeit vor.',
          },
          {
            question: 'Loopy möchte in der Vorweihnachtszeit die Öffnungszeiten von Loopy\'s Candy Store ausweiten und ihre Mitarbeitenden bitten, mehr Überstunden zu leisten. Welche Höchstgrenze darf die Arbeitszeit inklusive Überstunden nicht überschreiten?',
            options: ['12 Stunden pro Tag / 60 Stunden pro Woche', '14 Stunden pro Tag / 70 Stunden pro Woche', '10 Stunden pro Tag / 50 Stunden pro Woche', '8 Stunden pro Tag / 40 Stunden pro Woche'],
            correctIndex: 0,
            explanation: 'Inklusive Überstunden darf die Arbeitszeit zwölf Stunden pro Tag und 60 Stunden pro Woche nicht überschreiten (mit Sonderregelungen für bestimmte Berufsgruppen).',
          },
          {
            question: 'Ab welcher täglichen Arbeitszeit muss laut Gesetz mindestens eine Ruhepause eingelegt werden, und wie lange muss diese mindestens dauern?',
            options: ['ab mehr als 4 Stunden, mindestens 15 Minuten', 'ab mehr als 8 Stunden, mindestens 60 Minuten', 'ab mehr als 6 Stunden, mindestens 30 Minuten', 'ab mehr als 10 Stunden, mindestens 45 Minuten'],
            correctIndex: 2,
            explanation: 'Beträgt die Tagesarbeitszeit mehr als sechs Stunden, ist im Anschluss eine Ruhepause von mindestens 30 Minuten zu gewähren.',
          },
          {
            question: 'Welcher Zuschlag steht Arbeitnehmer/innen zu, wenn Überstunden ausbezahlt statt durch Zeitausgleich abgegolten werden?',
            options: ['20 % oder 40 %', '30 % oder 75 %', '25 % oder 50 %', '50 % oder 100 %'],
            correctIndex: 3,
            explanation: 'Für ausbezahlte Überstunden gebührt ein Zuschlag von 50 % oder 100 % (z. B. bei Nacht-, Feiertags- und Sonntagsarbeit). Alternativ können Überstunden durch Zeitausgleich abgegolten werden.',
          },
          {
            question: 'Eine Mitarbeiterin von Loopy\'s Candy Store arbeitet seit 27 Jahren im Betrieb bei einer Fünftagewoche. Wie viele Arbeitstage Urlaub stehen ihr laut Gesetz mindestens zu?',
            options: ['25 Arbeitstage', '30 Arbeitstage', '36 Arbeitstage', '20 Arbeitstage'],
            correctIndex: 1,
            explanation: 'Grundsätzlich stehen bei einer Fünftagewoche 25 Arbeitstage Urlaub zu, ab dem 26. Arbeitsjahr erhöht sich der Anspruch auf 30 Arbeitstage.',
          },
          {
            question: 'In Loopy\'s Candy Store gilt eine Gleitzeitvereinbarung mit einer Kernarbeitszeit von 9:00 bis 15:00 Uhr. Was bedeutet das für die Mitarbeitenden?',
            options: ['Innerhalb der Kernzeit müssen alle anwesend sein, außerhalb können sie ihre Arbeitszeit flexibel verteilen', 'Sie dürfen nur von 9 bis 15 Uhr arbeiten und müssen danach das Geschäft verlassen', 'Die Kernarbeitszeit ersetzt die gesetzliche Normalarbeitszeit', 'Kernarbeitszeit gilt ausschließlich für Teilzeitkräfte'],
            correctIndex: 0,
            explanation: 'Gleitzeit erlaubt es, die wöchentliche Arbeitszeit flexibel zu verteilen, wobei innerhalb der vereinbarten Kernarbeitszeit alle Mitarbeitenden anwesend sein müssen.',
          },
          {
            question: 'Wie lange vor bzw. nach der Geburt gilt für Arbeitnehmerinnen laut Mutterschutzgesetz ein absolutes Beschäftigungsverbot?',
            options: ['2 Wochen vor und 2 Wochen nach der Geburt', '4 Wochen vor und 4 Wochen nach der Geburt', '8 Wochen vor und 8 Wochen nach der Geburt', '12 Wochen vor und 12 Wochen nach der Geburt'],
            correctIndex: 2,
            explanation: 'Für berufstätige Frauen gilt acht Wochen vor sowie acht Wochen nach der Geburt ein absolutes Beschäftigungsverbot, das auch nicht einvernehmlich geändert werden kann.',
          },
          {
            question: 'Wodurch wird der Verdienstausfall während der Karenzzeit teilweise ausgeglichen?',
            options: ['Wochengeld von der Österreichischen Gesundheitskasse', 'Kinderbetreuungsgeld vom Staat', 'Weiterzahlung des vollen Gehalts durch den Arbeitgeber', 'Überstundenzuschlag'],
            correctIndex: 1,
            explanation: 'Während der Karenz wird kein Lohn bzw. Gehalt bezahlt; um den Verdienstausfall teilweise auszugleichen, zahlt der Staat ein Kinderbetreuungsgeld (Wochengeld gibt es hingegen während des Mutterschutzes).',
          },
          {
            question: 'Ab wie vielen dauerhaft beschäftigten Arbeitnehmer/innen über 18 Jahren besteht in einem Betrieb das Recht auf einen Betriebsrat?',
            options: ['5 Arbeitnehmer/innen', '10 Arbeitnehmer/innen', '20 Arbeitnehmer/innen', '3 Arbeitnehmer/innen'],
            correctIndex: 0,
            explanation: 'Das Recht auf einen Betriebsrat besteht in Betrieben, in denen dauernd mindestens fünf Arbeitnehmer/innen über 18 Jahre beschäftigt sind.',
          },
          {
            question: 'Welche Stufe steht in der Maslowschen Bedürfnispyramide ganz oben, also an höchster Stelle?',
            options: ['Grundbedürfnisse', 'Sicherheitsbedürfnisse', 'Soziale Bedürfnisse', 'Bedürfnis nach Selbstverwirklichung'],
            correctIndex: 3,
            explanation: 'Die Maslowsche Bedürfnispyramide reicht von den Grundbedürfnissen an der Basis bis zum Bedürfnis nach Selbstverwirklichung an der Spitze.',
          },
          {
            question: 'Nach der Zwei-Faktoren-Theorie von Herzberg zählt das Gehalt zu den Hygienefaktoren. Was bedeutet das?',
            options: ['Ein gutes Gehalt motiviert langfristig besonders stark', 'Ein unzureichendes Gehalt führt zu Unzufriedenheit, ein gutes Gehalt allein macht aber nicht dauerhaft zufrieden', 'Gehalt zählt zu den intrinsischen Motivatoren', 'Hygienefaktoren betreffen ausschließlich die Arbeitsinhalte'],
            correctIndex: 1,
            explanation: 'Hygienefaktoren wie das Gehalt verhindern Unzufriedenheit, wenn sie fehlen, sorgen aber allein nicht für dauerhafte Zufriedenheit oder Motivation – das leisten die Motivatoren.',
          },
          {
            question: 'Loopy lässt ihre Verkäufer/innen in Loopy\'s Candy Store regelmäßig zwischen Kassa, Regalbefüllung und der Herstellung von Pralinen wechseln, um Monotonie zu vermeiden. Um welche Maßnahme der Arbeitsplatzgestaltung handelt es sich?',
            options: ['Jobenrichment (Arbeitsbereicherung)', 'Jobenlargement (Arbeitserweiterung)', 'Jobrotation (Arbeitsplatzwechsel)', 'Cafeteria-System'],
            correctIndex: 2,
            explanation: 'Der systematische Wechsel des Arbeitsplatzes innerhalb eines Unternehmens, um monotonen Tätigkeiten entgegenzuwirken, wird als Jobrotation bezeichnet.',
          },
          {
            question: 'Erntehelfer/innen, die im Sommer für Loopy\'s Candy Store Erdbeeren für die Fruchtbonbons pflücken, werden pro gepflücktem Kilogramm bezahlt. Um welche Entlohnungsform handelt es sich?',
            options: ['Zeitlohn', 'Prämienlohn', 'Akkordlohn', 'Gewinnbeteiligung'],
            correctIndex: 2,
            explanation: 'Beim Akkordlohn (hier als Stücklohn) ist die Bezahlung an die erbrachte Menge gebunden, z. B. an die Anzahl gepflückter Kilo Erdbeeren.',
          },
        ],
      },
      {
        id: 'personalbeurteilung',
        title: 'Personalbeurteilung & Unterstützungsfunktionen',
        questions: [
          {
            question: 'Bei welcher Form der Personalbeurteilung wird Feedback von Kolleg/innen, Vorgesetzten und der beurteilten Person selbst eingeholt, um ein möglichst umfassendes Bild zu erhalten?',
            options: ['Selbstbeurteilung', 'Einstufungsverfahren', 'Zielvereinbartes Verfahren', '360°-Feedback'],
            correctIndex: 3,
            explanation: 'Das 360°-Feedback holt Rückmeldungen aus dem gesamten beruflichen Umfeld ein (Kolleg/innen, Vorgesetzte, Selbstbeurteilung) und liefert dadurch ein besonders aussagekräftiges Bild.',
          },
          {
            question: 'Bei welchem Verfahren der Personalbeurteilung wird überprüft, ob zuvor gemeinsam festgelegte Ziele erreicht wurden?',
            options: ['Einstufungsverfahren mit Verhaltensbeschreibung', 'Zielvereinbartes Verfahren', 'Beurteilung durch Kolleg/innen', '360°-Feedback'],
            correctIndex: 1,
            explanation: 'Beim zielvereinbarten Verfahren wird geprüft, ob die gemeinsam vereinbarten Ziele erreicht wurden; es konzentriert sich ausschließlich auf die konkrete Arbeitsleistung.',
          },
          {
            question: 'Eine Filialleiterin von Loopy\'s Candy Store ist bei Verkaufsgesprächen extrem charmant und redegewandt. Ihr Vorgesetzter beurteilt sie deshalb pauschal als hervorragende Mitarbeiterin, obwohl ihre Kassenabrechnungen häufig Fehler enthalten. Welcher Beurteilungsfehler liegt hier vor?',
            options: ['Recency-Effekt', 'Selektive Wahrnehmung', 'Halo-Effekt', 'Ähnlichkeitseffekt'],
            correctIndex: 2,
            explanation: 'Beim Halo-Effekt überstrahlt eine einzelne, besonders auffällige Eigenschaft (hier: Redegewandtheit) die gesamte Beurteilung, obwohl die fachliche Leistung schwächer ist.',
          },
          {
            question: 'Ein Mitarbeiter arbeitet in den letzten zwei Wochen vor seiner jährlichen Personalbeurteilung besonders engagiert, obwohl er den Rest des Jahres eher durchschnittlich leistete. Seine Führungskraft bewertet ihn dennoch als sehr gut. Welcher Beurteilungsfehler tritt hier auf?',
            options: ['Halo-Effekt', 'Recency-Effekt (Neuigkeitseffekt)', 'Ähnlichkeitseffekt', 'Selektive Wahrnehmung'],
            correctIndex: 1,
            explanation: 'Beim Recency-Effekt werden die zuletzt erbrachten Leistungen bei der Beurteilung stärker berücksichtigt als die insgesamt über das Jahr erbrachte Leistung.',
          },
          {
            question: 'Ein Vorgesetzter hält einen neuen Mitarbeiter von Anfang an für unzuverlässig und achtet seither vor allem auf dessen Fehler, während er positive Leistungen übersieht. Welcher Beurteilungsfehler beschreibt dieses Verhalten?',
            options: ['Ähnlichkeitseffekt', 'Halo-Effekt', 'Recency-Effekt', 'Selektive Wahrnehmung'],
            correctIndex: 3,
            explanation: 'Bei der selektiven Wahrnehmung werden bevorzugt Informationen wahrgenommen, die mit der eigenen, bereits bestehenden Meinung oder Erwartung übereinstimmen.',
          },
          {
            question: 'Eine Führungskraft bewertet eine Bewerberin positiver, weil diese die gleichen Hobbys und einen ähnlichen Lebensstil hat wie sie selbst – unabhängig von deren tatsächlicher Leistung. Wie nennt man diesen Beurteilungsfehler?',
            options: ['Ähnlichkeitseffekt', 'Recency-Effekt', 'Halo-Effekt', 'Selektive Wahrnehmung'],
            correctIndex: 0,
            explanation: 'Beim Ähnlichkeitseffekt bewerten Menschen andere positiver, wenn diese ihnen selbst ähnlich sind (z. B. bei Alter, Hobbys oder Werten), oft unbewusst.',
          },
          {
            question: 'Welche der folgenden Methoden zählt zu den qualitativen Methoden des Personalcontrollings?',
            options: ['Mitarbeiterbefragungen und -gespräche', 'Personalkosten pro Stunde', 'Fluktuationsrate', 'Anzahl der Bewerber/innen pro Stelle'],
            correctIndex: 0,
            explanation: 'Qualitative Methoden erfassen schwer messbare Aspekte wie Unternehmenskultur oder Motivation, u. a. durch Personalbeurteilungen, Mitarbeiterbefragungen und -gespräche, Potenzialanalysen sowie Stärken-Schwächen-Analysen.',
          },
          {
            question: 'Wie wird die Kennzahl Personalintensität berechnet?',
            options: ['Personalkosten geteilt durch die Anzahl der Mitarbeiter/innen', 'Betriebsleistung geteilt durch die Personalkosten', 'Personalkosten mal 100 geteilt durch die Betriebsleistung', 'Umsatz mal 100 geteilt durch die Personalkosten'],
            correctIndex: 2,
            explanation: 'Die Personalintensität wird als Personalkosten x 100 / Betriebsleistung berechnet und zeigt, wie viel Prozent der Betriebsleistung für Personalkosten aufgewendet werden.',
          },
          {
            question: 'Wofür steht die im Personalcontrolling verwendete Kennzahl EBITDA?',
            options: ['Earnings before interest, taxes, depreciation and amortization', 'Employee Benefits including Training, Development and Allowances', 'European Business Index for Trade and Administration', 'Effective Business Income Tax Deduction Amount'],
            correctIndex: 0,
            explanation: 'EBITDA steht für "Earnings before interest, taxes, depreciation and amortization" und beschreibt das Ergebnis vor Zinsen, Steuern und Abschreibungen.',
          },
          {
            question: 'Loopy muss die monatliche Lohnsteueranmeldung ihrer Angestellten beim Finanzamt einreichen. Zu welcher Aufgabe der Personalverwaltung zählt das?',
            options: ['Abrechnungsaufgabe', 'Meldeaufgabe', 'Überwachungsaufgabe', 'Personalcontrolling'],
            correctIndex: 1,
            explanation: 'Meldeaufgaben umfassen interne Meldungen (z. B. Jubiläen) sowie externe Meldungen wie die Lohnsteueranmeldung beim Finanzamt.',
          },
          {
            question: 'Was ist laut dem im Buch dargestellten Modell der Hauptunterschied zwischen Employer Branding und Personalmarketing?',
            options: ['Employer Branding baut die Arbeitgebermarke langfristig auf, Personalmarketing setzt diese durch konkrete Maßnahmen praktisch um', 'Employer Branding richtet sich nur an Führungskräfte, Personalmarketing nur an Lehrlinge', 'Employer Branding ist eine gesetzliche Pflicht, Personalmarketing ist freiwillig', 'Personalmarketing baut die Marke auf, Employer Branding setzt sie praktisch um'],
            correctIndex: 0,
            explanation: 'Employer Branding umfasst alle Maßnahmen zum langfristigen Aufbau einer attraktiven Arbeitgebermarke, Personalmarketing ist die praktische Umsetzung dieser Marke durch konkrete Maßnahmen wie Karrierewebsites oder Recruiting-Events.',
          },
          {
            question: 'Über welche Art von Plattform können sich potenzielle Bewerber/innen laut Buch über die Erfahrungen aktueller und ehemaliger Mitarbeiter/innen eines Unternehmens informieren (z. B. kununu)?',
            options: ['Recruitingmesse', 'Arbeitgeberbewertungsplattform', 'Kollektivvertrag', 'Personalcontrolling-Tool'],
            correctIndex: 1,
            explanation: 'Auf Arbeitgeberbewertungsplattformen wie kununu können sich Interessierte informieren, wie aktuelle und ehemalige Mitarbeiter/innen Bereiche wie Gehalt, Benefits oder Work-Life-Balance bewerten.',
          },
        ],
      },
      {
        id: 'produktionsbetriebe',
        title: 'Die Produktionsbetriebe',
        questions: [
          {
            question: 'Wie werden Unternehmen aus Industrie und Gewerbe bezeichnet, die Sachgüter erzeugen?',
            options: ['Produktionsbetriebe (Fertigungsbetriebe)', 'Handelsbetriebe', 'Dienstleistungsbetriebe', 'Investitionsbetriebe'],
            correctIndex: 0,
            explanation: 'Unternehmen aus Industrie und Gewerbe, die Sachgüter erzeugen, werden als Produktionsbetriebe oder Fertigungsbetriebe bezeichnet.',
          },
          {
            question: 'Welche Wirtschaftsbereiche zählen laut Buch zum produzierenden Bereich (sekundärer Sektor)?',
            options: ['Nur die Industrie', 'Industrie, Gewerbe sowie die Bauwirtschaft', 'Nur Handel und Gewerbe', 'Landwirtschaft und Bergbau'],
            correctIndex: 1,
            explanation: 'Zum produzierenden Bereich (sekundärer Sektor) zählen alle Unternehmen, die Produkte erzeugen (Industrie und Gewerbe), sowie die Bauwirtschaft.',
          },
          {
            question: 'Loopy interessiert sich für die wirtschaftliche Bedeutung des sekundären Sektors in Österreich. Welcher Anteil des Bruttoinlandsproduktes wird laut Buch im sekundären Sektor erwirtschaftet?',
            options: ['Etwa 71 %', 'Etwas mehr als 1 %', 'Rund 28 %', 'Rund 50 %'],
            correctIndex: 2,
            explanation: 'In Österreich werden rund 28 % des Bruttoinlandsproduktes im sekundären Sektor erwirtschaftet, auf den tertiären Sektor entfallen rund 71 % und auf den primären Sektor etwas mehr als 1 %.',
          },
          {
            question: 'Wie hat sich der Anteil der Beschäftigten im sekundären Sektor in Österreich in den letzten Jahrzehnten laut Buch entwickelt?',
            options: ['Er ist stark gestiegen und liegt nun bei über 50 %', 'Er ist konstant bei rund 71 % geblieben', 'Er ist auf unter 5 % gefallen', 'Er ist kontinuierlich gesunken und liegt gegenwärtig bei rund 25 %'],
            correctIndex: 3,
            explanation: 'Der Anteil der Beschäftigten im sekundären Sektor sank in den letzten Jahrzehnten kontinuierlich und liegt gegenwärtig bei rund 25 %.',
          },
          {
            question: 'Wie viele Produktionsbetriebe gibt es laut Buch in Österreich ungefähr, und welcher Anteil davon sind Klein- und Mittelbetriebe?',
            options: ['Rund 80.000 Betriebe, davon über 95 %', 'Rund 8.000 Betriebe, davon 50 %', 'Rund 800.000 Betriebe, davon 10 %', 'Rund 20.000 Betriebe, davon 70 %'],
            correctIndex: 0,
            explanation: 'In Österreich gibt es mehr als 80.000 Produktionsbetriebe, davon sind über 95 % Klein- und Mittelbetriebe.',
          },
          {
            question: 'Welcher Anteil der österreichischen Exporte stammt laut Buch aus dem produzierenden Sektor?',
            options: ['Rund 30 %', 'Rund 70 %', 'Rund 50 %', 'Rund 90 %'],
            correctIndex: 1,
            explanation: 'Rund 70 % der österreichischen Exporte stammen aus dem produzierenden Sektor.',
          },
          {
            question: 'Loopy liest im Buch, dass der Industriestandort Österreich zuletzt an Attraktivität verloren hat. Welche Gründe werden dafür u. a. genannt?',
            options: ['Zu niedrige Energiekosten', 'Zu geringe Steuerbelastung', 'Gestiegene Arbeits- und Energiekosten, hoher Bürokratieaufwand, steuerliche Belastung und Fachkräftemangel', 'Zu viele verfügbare Arbeitskräfte'],
            correctIndex: 2,
            explanation: 'Als Gründe nennt das Buch u. a. gestiegene Arbeits- und Energiekosten, einen hohen Bürokratieaufwand, die steuerliche Belastung sowie einen Mangel an qualifizierten Arbeitskräften.',
          },
          {
            question: 'Nach welchen zwei Kriterien werden Produktionsbetriebe laut Buch hauptsächlich eingeteilt?',
            options: ['Unternehmensgröße und Rechtsform', 'Standort und Eigentümerstruktur', 'Umsatz und Mitarbeiterzahl', 'Art des Abnehmers und Art der Branche/Tätigkeit'],
            correctIndex: 3,
            explanation: 'Produktionsbetriebe können u. a. nach der Art des Abnehmers und nach der Art der Branche/Tätigkeit eingeteilt werden.',
          },
          {
            question: 'Loopy\'s Candy Store stellt Süßigkeiten für Endkonsument/innen her, kauft aber auch eine Abfüllmaschine bei einem anderen Unternehmen ein. Wie werden die beiden beteiligten Betriebstypen richtig bezeichnet?',
            options: ['Loopy\'s Candy Store ist ein Konsumgüterbetrieb, der Maschinenhersteller ein Investitionsgüterbetrieb', 'Loopy\'s Candy Store ist ein Investitionsgüterbetrieb, der Maschinenhersteller ein Konsumgüterbetrieb', 'Beide sind Konsumgüterbetriebe', 'Beide sind Investitionsgüterbetriebe'],
            correctIndex: 0,
            explanation: 'Konsumgüterbetriebe stellen Sachgüter für Endverbraucher/innen her, Investitionsgüterbetriebe stellen Sachgüter für andere Unternehmen her, z. B. Maschinen und Anlagen.',
          },
          {
            question: 'Welches Merkmal unterscheidet laut Buch einen Industriebetrieb typischerweise von einem Gewerbebetrieb?',
            options: ['Industriebetriebe haben einen geringeren Automatisierungsgrad', 'Industriebetriebe setzen verstärkt Anlagevermögen ein und haben hohe Fixkosten', 'Industriebetriebe werden meist vom Inhaber/von der Inhaberin persönlich geführt', 'Industriebetriebe sind immer Kleinbetriebe'],
            correctIndex: 1,
            explanation: 'Industriebetriebe zeichnen sich u. a. durch einen höheren Einsatz von Anlagevermögen, hohe Fixkosten und einen höheren Automatisierungsgrad aus; Gewerbebetriebe setzen eher mehr Material und Arbeitskraft ein und werden häufig vom Inhaber/von der Inhaberin geführt.',
          },
          {
            question: 'Welche vier Ziele verfolgen Produktionsbetriebe laut Buch bei ihrer betrieblichen Produktion typischerweise?',
            options: ['Hohe Lagerbestände, viele Standorte, hohe Werbeausgaben, große Belegschaft', 'Nur Gewinnmaximierung um jeden Preis', 'Optimaler Einsatz der Produktionsfaktoren, Kundenzufriedenheit, niedrige Kosten, nachhaltige und ethische Produktion', 'Maximale Rüstzeiten, hohe Rohstoffpreise, geringe Automatisierung, viele Lieferanten'],
            correctIndex: 2,
            explanation: 'Als Ziele der betrieblichen Produktion nennt das Buch den optimalen Einsatz der Produktionsfaktoren, Kundenzufriedenheit, niedrige Kosten in der Produktion sowie eine nachhaltige und ethische Produktion.',
          },
          {
            question: 'Anhand welcher drei Kennzahlen kann laut Buch der optimale Einsatz der Produktionsfaktoren überprüft werden?',
            options: ['Liquidität, Bonität, Solvenz', 'Marktanteil, Umsatz und Gewinn', 'Durchlaufzeit, Rüstzeit und Liegezeit', 'Produktivität, Wirtschaftlichkeit und Rentabilität'],
            correctIndex: 3,
            explanation: 'Der optimale Einsatz der Produktionsfaktoren kann anhand der drei Kennzahlen Produktivität, Wirtschaftlichkeit und Rentabilität überprüft werden.',
          },
          {
            question: 'Wie definiert das Buch den Begriff "Standort" eines Betriebes?',
            options: ['Der geografische Ort, an dem sich die Tätigkeiten eines Betriebes befinden', 'Die Rechtsform, unter der ein Unternehmen tätig ist', 'Die Anzahl der Mitarbeiter/innen eines Unternehmens', 'Der Markenname eines Unternehmens'],
            correctIndex: 0,
            explanation: 'Der Standort eines Betriebes ist der geografische Ort, an dem sich seine Tätigkeiten befinden; je nach Tätigkeit unterscheidet man z. B. Produktions-, Forschungs-, Verwaltungs- und Verkaufsstandort.',
          },
          {
            question: 'Welche drei Arten von Standortfaktoren unterscheidet das Buch?',
            options: ['Nationale, internationale und regionale Standortfaktoren', 'Beschaffungsseitige, produktionsbezogene und absatzorientierte Standortfaktoren', 'Steuerliche, rechtliche und politische Standortfaktoren', 'Kurzfristige, mittelfristige und langfristige Standortfaktoren'],
            correctIndex: 1,
            explanation: 'Das Buch unterscheidet beschaffungsseitige, produktionsbezogene und absatzorientierte Standortfaktoren.',
          },
          {
            question: 'Die voestalpine investiert laut Buch 70 Mio. Euro in die Erweiterung ihres Standortes in Jeffersonville (USA). Welchem Prinzip folgt das Unternehmen damit?',
            options: ['Just-in-time-Prinzip', 'Make-to-stock-Prinzip', 'Follow-the-Customer-Prinzip', 'Business-Excellence-Prinzip'],
            correctIndex: 2,
            explanation: 'Mit der Standorterweiterung in strategisch wichtigen Märkten wie den USA setzt die voestalpine ihr "Follow-the-Customer-Prinzip" fort, um Kunden dort schneller und effizienter zu beliefern.',
          },
        ],
      },
      {
        id: 'leistungserstellungsprozess-produktion',
        title: 'Leistungserstellungsprozess in Produktionsbetrieben',
        questions: [
          {
            question: 'Was passiert laut Buch in der Produktion eines Unternehmens?',
            options: ['Die Produktionsfaktoren Arbeitskraft, Betriebsmittel und Werkstoffe werden so kombiniert, dass Produkte entstehen', 'Es werden ausschließlich Finanzmittel verwaltet', 'Es werden nur Kundenaufträge archiviert', 'Es wird ausschließlich Werbung für neue Produkte gemacht'],
            correctIndex: 0,
            explanation: 'In der Produktion werden die Produktionsfaktoren Arbeitskraft, Betriebsmittel und Werkstoffe (Materialien) so kombiniert, dass Produkte entstehen.',
          },
          {
            question: 'Wie definiert das Buch den Begriff "Prozess"?',
            options: ['Ein Synonym für Kapazität', 'Ein Ablauf aus zeitlich aufeinanderfolgenden und zusammenhängenden Aktivitäten', 'Eine einmalige, isolierte Tätigkeit', 'Ein anderes Wort für Marketing'],
            correctIndex: 1,
            explanation: 'Der Prozess wird als Bezeichnung für einen Ablauf definiert, der aus zeitlich aufeinanderfolgenden und zusammenhängenden Aktivitäten besteht.',
          },
          {
            question: 'Was versteht man laut Buch unter einer Produktinnovation?',
            options: ['Die Reduktion der Produktpalette auf ein einziges Produkt', 'Die Einstellung der Produktion eines Produktes', 'Ein völlig neues Produkt wird kreiert oder ein bestehendes Produkt wird weiterentwickelt', 'Der Verkauf von Produkten ins Ausland'],
            correctIndex: 2,
            explanation: 'Bei einer Produktinnovation wird ein völlig neues Produkt kreiert oder ein bestehendes Produkt weiterentwickelt.',
          },
          {
            question: 'In welchen drei Phasen verläuft der Innovationsprozess laut Buch üblicherweise?',
            options: ['Werbung, Verkauf, Reklamation', 'Beschaffung, Lagerung, Auslieferung', 'Planung, Kontrolle, Abschreibung', 'Produktvorschlag, Entwicklung (Konstruktion), Vorbereitung der Produktion'],
            correctIndex: 3,
            explanation: 'Der Innovationsprozess verläuft üblicherweise in den Phasen Produktvorschlag, Entwicklung (Konstruktion) und Vorbereitung der Produktion, begleitet von laufendem Kostencontrolling.',
          },
          {
            question: 'Immer mehr Kund/innen von Loopy\'s Candy Store fragen nach zuckerfreien Süßigkeiten, weshalb Loopy ein neues Sortiment entwickelt. Welche Innovationsstrategie beschreibt dieses Vorgehen?',
            options: ['Market-Pull-Strategie', 'Technology-Push-Strategie', 'Simultaneous Engineering', 'Business-Excellence-Strategie'],
            correctIndex: 0,
            explanation: 'Bei der Market-Pull-Strategie sind bisher unbefriedigte Kundenwünsche oder neue Trends am Markt der Auslöser für innovative Produkte.',
          },
          {
            question: 'Welches Beispiel nennt das Buch für die Technology-Push-Strategie?',
            options: ['Das wachsende Interesse an veganen Lebensmitteln', 'Der Wunsch der Kunden nach individuelleren Möbeln', 'Die Nachfrage nach günstigeren Preisen', 'Die Erfindung der Künstlichen Intelligenz, die zu virtuellen Assistenten und Chatbots führte'],
            correctIndex: 3,
            explanation: 'Bei der Technology-Push-Strategie sind neue Technologien der Auslöser für innovative Produkte, wie das Buch am Beispiel der Künstlichen Intelligenz zeigt.',
          },
          {
            question: 'Wie wird laut Buch eine grafische Baumdarstellung bezeichnet, die den strukturellen Aufbau eines Produktes aus Baugruppen und Einzelteilen zeigt?',
            options: ['Stückliste', 'Kapazitätsprofil', 'Erzeugnisstruktur', 'Konstruktionszeichnung'],
            correctIndex: 2,
            explanation: 'Die Erzeugnisstruktur veranschaulicht mithilfe eines grafischen Baumes den strukturellen Aufbau des Produktes.',
          },
          {
            question: 'Was versteht man laut Buch unter einer Stückliste?',
            options: ['Eine grafische Darstellung des geplanten Produktes', 'Eine Liste der Standortfaktoren eines Unternehmens', 'Ein Soll-Ist-Vergleich der Entwicklungskosten', 'Eine Auflistung sämtlicher Baugruppen und Einzelteile inkl. Mengenangaben, die für die Produktion nötig sind'],
            correctIndex: 3,
            explanation: 'Auf Basis der Konstruktionszeichnung bzw. Erzeugnisstruktur wird die Stückliste erstellt, eine Auflistung aller Baugruppen und Einzelteile inkl. Mengenangaben.',
          },
          {
            question: 'Wie wird die parallele Entwicklung von Produkten und Fertigungsverfahren laut Buch bezeichnet, wodurch sich die Entwicklungszeit verkürzt?',
            options: ['Fremdbezug', 'Fixkostendegression', 'Simultaneous Engineering', 'Rückwärtsterminierung'],
            correctIndex: 2,
            explanation: 'Die parallele Entwicklung von Produkten und Fertigungsverfahren wird Simultaneous Engineering genannt und verkürzt die Entwicklungszeit sowie die Zeit bis zur Marktreife.',
          },
          {
            question: 'Ein Autohersteller kalkuliert Entwicklungskosten von 1,5 Mrd. EUR für ein neues Modell bei einer erwarteten Absatzmenge von 1 Mio. Autos (1.500 EUR pro Auto). Werden stattdessen nur 100.000 Autos abgesetzt, steigen die Kosten auf 15.000 EUR pro Auto. Welchen Effekt zeigt dieses Beispiel laut Buch?',
            options: ['Skalenerträge', 'Fixkostendegression', 'Marktsättigung', 'Rückwärtsterminierung'],
            correctIndex: 1,
            explanation: 'Bei geringerer Absatzmenge steigen die Fixkosten pro Stück deutlich – dies zeigt die Wirkung der Fixkostendegression, also die Reduzierung der Fixkosten pro Einheit bei steigender Produktionsmenge.',
          },
          {
            question: 'Was wird laut Buch in der Absatzplanung festgelegt, und wie wird die geplante Verkaufsmenge bezeichnet?',
            options: ['Es wird geschätzt, welche Produkte in welcher Menge in einem Zeitraum voraussichtlich verkauft werden können; diese Menge heißt Primärbedarf', 'Es wird die Durchlaufzeit der Produktion festgelegt; diese Menge heißt Nettobedarf', 'Es werden die Materialbestände im Lager gezählt; diese Menge heißt Bruttobedarf', 'Es wird die Qualität der Rohstoffe geprüft; diese Menge heißt Sekundärbedarf'],
            correctIndex: 0,
            explanation: 'In der Absatzplanung wird geschätzt, welche Produkte in welcher Menge voraussichtlich verkauft werden können. Diese geplante Verkaufsmenge wird als Primärbedarf bezeichnet.',
          },
          {
            question: 'Welche drei Entscheidungen werden laut Buch bei der Produktionsprogrammplanung festgelegt?',
            options: ['Standort, Rechtsform und Kapitalstruktur', 'Art der Produkte, Menge der Produkte und zeitliche Abfolge', 'Werbebudget, Vertriebskanal und Preisgestaltung', 'Lieferantenauswahl, Zahlungsbedingungen und Rabatte'],
            correctIndex: 1,
            explanation: 'Bei der Produktionsprogrammplanung werden die Art der Produkte, die Menge der Produkte sowie die zeitliche Abfolge der Produktion festgelegt.',
          },
          {
            question: 'Loopy\'s Candy Store produziert individuell gestaltete Geschenkboxen erst, wenn ein/e Kund/in tatsächlich bestellt, während die Standardbonbons auf Vorrat für den Verkauf im Laden hergestellt werden. Wie werden diese beiden Arten der Produktionsprogrammplanung bezeichnet?',
            options: ['Beide sind Vorratsproduktion (make to stock)', 'Geschenkboxen: Vorratsproduktion; Standardbonbons: Auftragsproduktion', 'Geschenkboxen: Auftragsproduktion (make to order); Standardbonbons: Vorratsproduktion (make to stock)', 'Beide sind Auftragsproduktion (make to order)'],
            correctIndex: 2,
            explanation: 'Bei der Auftragsproduktion erfolgt die Produktion erst bei Vorliegen eines Kundenauftrags, bei der Vorratsproduktion wird auf Basis prognostizierter Absatzmengen auf Vorrat produziert, um jederzeit lieferfähig zu sein.',
          },
          {
            question: 'Wann ist laut Buch das optimale Produktionsprogramm erreicht?',
            options: ['Wenn möglichst viele unterschiedliche Produkte gleichzeitig hergestellt werden', 'Wenn die Lagerbestände maximiert werden', 'Wenn ausschließlich die billigsten Rohstoffe eingesetzt werden', 'Wenn der Deckungsbeitrag bzw. Gewinn maximiert wird, die Kapazitäten ausgelastet sind, aber nicht mehr produziert wird, als verkauft werden kann'],
            correctIndex: 3,
            explanation: 'Unternehmen versuchen ein optimales Produktionsprogramm zu erstellen, das den Deckungsbeitrag oder Gewinn maximiert, wobei die Kapazitäten ausgelastet sein sollen, ohne mehr zu produzieren als verkauft werden kann.',
          },
          {
            question: 'Eine Tischlerei produziert 100 Tische auf Kundenauftrag und 20 Tische auf Vorrat. Für 1 Tisch werden 4 Tischbeinhalterungen benötigt (Bruttobedarf daher 480 Stück), im Lager liegen bereits 95 Tischbeinhalterungen. Wie hoch ist laut Buch der Nettobedarf an Tischbeinhalterungen?',
            options: ['480 Stück', '95 Stück', '385 Stück', '575 Stück'],
            correctIndex: 2,
            explanation: 'Der Nettobedarf ergibt sich aus Bruttobedarf minus Lagerbestand: 480 - 95 = 385 Tischbeinhalterungen.',
          },
          {
            question: 'Worin unterscheiden sich laut Buch die Durchlaufterminierung und die Kapazitätsterminierung?',
            options: ['Die Kapazitätsterminierung basiert nur auf der Reihenfolge der Tätigkeiten, die Durchlaufterminierung auf den vorhandenen Kapazitäten', 'Beide Verfahren sind identisch', 'Beide Verfahren berücksichtigen ausschließlich Kundenwünsche', 'Die Durchlaufterminierung basiert auf der Reihenfolge der Arbeitsschritte, die Kapazitätsterminierung berücksichtigt zusätzlich die vorhandenen Kapazitäten im Betrieb'],
            correctIndex: 3,
            explanation: 'Bei der Durchlaufterminierung basiert die Reihenfolge der Arbeitsschritte auf der Reihenfolge der anfallenden Tätigkeiten, bei der Kapazitätsterminierung wird zusätzlich die Belastungssituation der vorhandenen Kapazitäten berücksichtigt.',
          },
          {
            question: 'Aus welchen zwei Teilen setzt sich die Durchlaufzeit laut Buch zusammen?',
            options: ['Durchführungszeit (Rüst- und Bearbeitungszeit) und Übergangszeit (Liege- und Transportzeit)', 'Beschaffungszeit und Absatzzeit', 'Nur aus der Rüstzeit', 'Planungszeit und Kontrollzeit'],
            correctIndex: 0,
            explanation: 'Die Durchlaufzeit setzt sich aus der Durchführungszeit (Rüstzeit + Bearbeitungszeit) und der Übergangszeit (Liegezeit + Transportzeit) zusammen.',
          },
          {
            question: 'Welchen Nachteil hat laut Buch die Rückwärtsterminierung im Vergleich zur Vorwärtsterminierung?',
            options: ['Höhere Lagerkosten', 'Zu lange Durchlaufzeiten', 'Geringe Zeitpuffer zwischen End- und Liefertermin', 'Zu geringe Kapitalbindung'],
            correctIndex: 2,
            explanation: 'Bei der Rückwärtsterminierung wird ausgehend vom Liefertermin zurückgerechnet, wann die Produktion spätestens beginnen muss; Nachteil sind geringe Zeitpuffer zwischen End- und Liefertermin, Vorteil sind geringere Lagerkosten.',
          },
          {
            question: 'Welches Beispiel nennt das Buch für die Einzelfertigung?',
            options: ['Die Abfüllung von Mineralwasser', 'Die Herstellung von Fernsehern am Fließband', 'Die Produktion einer bestimmten Autoserie', 'Der Bau eines Kreuzfahrtschiffes'],
            correctIndex: 3,
            explanation: 'Als Beispiel für die Einzelfertigung nennt das Buch den Bau eines Kreuzfahrtschiffes, bei dem ein einziges Stück auftragsbedingt mit genauen Vorgaben hergestellt wird.',
          },
          {
            question: 'Was ist laut Buch ein typisches Merkmal der Massenfertigung?',
            options: ['Produktion eines einzigen Stücks nach genauen Kundenvorgaben', 'Produktion identischer Produkte in beliebig großer Stückzahl mit geringen Produktionskosten, z. B. bei der Abfüllung von Mineralwasser', 'Produktion, die ausschließlich am Einsatzort stattfindet', 'Produktion einer vorab genau definierten, begrenzten Anzahl von Produkten'],
            correctIndex: 1,
            explanation: 'Bei der Massenfertigung werden identische Produkte in beliebig großer Stückzahl mit geringen Produktionskosten und schneller Durchlaufzeit durch Automatisierung hergestellt, z. B. die Abfüllung von Mineralwasser.',
          },
          {
            question: 'Was ist laut Buch ein typisches Merkmal der Werkstattfertigung?',
            options: ['Alle Arbeitsstationen sind durch ein automatisiertes Transportsystem verbunden', 'Die Fertigungsanlagen werden zum Einsatzort transportiert', 'Gleichartige Tätigkeiten werden in innerbetrieblichen Werkstätten verrichtet, z. B. beim Zuschneiden, Bohren und Lackieren eines Metallzauns', 'Es kommt zu monotoner Arbeit durch ständig gleiche Handgriffe'],
            correctIndex: 2,
            explanation: 'Bei der Werkstattfertigung werden gleichartige Tätigkeiten in innerbetrieblichen Werkstätten verrichtet, wie das Buch am Beispiel eines Metallzauns zeigt.',
          },
          {
            question: 'Wie beschreibt das Buch das Produktionscontrolling?',
            options: ['Als Abteilung, die ausschließlich für den Verkauf der Produkte zuständig ist', 'Als Synonym für Qualitätsmanagement', 'Als reine Buchhaltungsfunktion', 'Als eigenen Prozess, der parallel zur Leistungserstellung abläuft und diese auf Abweichungen bzw. Verbesserungspotenzial analysiert'],
            correctIndex: 3,
            explanation: 'Das Produktionscontrolling ist ein eigener Prozess, der parallel zur eigentlichen Leistungserstellung abläuft und diesen auf Abweichungen bzw. Verbesserungspotenzial analysiert.',
          },
          {
            question: 'Bei der Glanzer Cosmetics GmbH soll die Durchlaufzeit einer neuen Abfüllanlage laut Soll-Vorgabe 5 Minuten pro Stück betragen. Im ersten Testlauf werden aber 6 Minuten 30 Sekunden gemessen. Was ergibt der erneute Testlauf nach den Korrekturmaßnahmen laut Buch?',
            options: ['Genau 5 Minuten', '7 Minuten', '5 Minuten 20 Sekunden', '6 Minuten'],
            correctIndex: 2,
            explanation: 'Nach den Korrekturmaßnahmen (Reduzierung der Liegezeiten, Anpassung der Sollvorgabe) ergibt der erneute Testlauf eine Durchlaufzeit von 5 Minuten 20 Sekunden.',
          },
          {
            question: 'Was steht laut Buch im Qualitätsmanagement im Mittelpunkt?',
            options: ['Die Kundenorientierung: Produkte und Abläufe werden so ausgerichtet, dass sie den Anforderungen der Kunden entsprechen', 'Ausschließlich die Buchhaltung des Unternehmens', 'Nur die Lagerhaltung', 'Ausschließlich die jährliche Bilanzierung'],
            correctIndex: 0,
            explanation: 'Im Qualitätsmanagement steht die Kundenorientierung im Mittelpunkt: Die Produkte und Abläufe werden so ausgerichtet, dass sie den Anforderungen und Wünschen der Kunden entsprechen.',
          },
          {
            question: 'Wie beschreibt das Buch das Zusammenspiel zwischen kundenorientierter und technischer Qualität?',
            options: ['Nur die technische Qualität ist für den Erfolg eines Produktes relevant', 'Kundenorientierte und technische Qualität schließen einander aus', 'Nur die kundenorientierte Qualität wird im Buch behandelt', 'Beide müssen erfüllt sein und bilden zusammen die Basis für ein gutes Produkt'],
            correctIndex: 3,
            explanation: 'Kundenorientierte Qualität (Wünsche und Erwartungen der Kunden) und technische Qualität (objektive, messbare Produktmerkmale) müssen beide erfüllt sein und bilden gemeinsam die Basis für ein gutes Produkt.',
          },
          {
            question: 'Welche drei Qualitätsbereiche nennt das Buch am Beispiel der Glanzer Cosmetics GmbH?',
            options: ['Marketingqualität, Personalqualität und Finanzqualität', 'Standortqualität und Lieferantenqualität', 'Nur Systemqualität', 'Produkt- und Servicequalität, Prozessqualität sowie Systemqualität'],
            correctIndex: 3,
            explanation: 'Zu den Qualitätsbereichen zählen Produkt- und Servicequalität, Prozessqualität sowie Systemqualität.',
          },
          {
            question: 'Coca-Cola musste im Oktober 2024 in Österreich 28 Mio. Flaschen Coca-Cola und Fanta zurückrufen, weil durch ein defektes Sieb kleine Metallstücke in die Getränke gelangen konnten. Welche Folge schlechter Qualität veranschaulicht dieses Beispiel laut Buch?',
            options: ['Steigender Gewinn', 'Höhere Kundenzufriedenheit', 'Sinkende Materialkosten', 'Produktrückruf'],
            correctIndex: 3,
            explanation: 'Schlechte Qualität kann u. a. zu Produktrückrufen, Imageschäden sowie Rückgängen bei Absatz, Umsatz und Gewinn führen, wie das Coca-Cola-Beispiel zeigt.',
          },
          {
            question: 'Welche vier Entwicklungsstufen des Qualitätsmanagements nennt das Buch?',
            options: ['Qualitätskontrolle, Qualitätssicherung, Umfassendes Qualitätsmanagement und Business Excellence', 'Planung, Durchführung, Kontrolle, Abschluss', 'Beschaffung, Produktion, Absatz, Controlling', 'Nur eine einzige Stufe seit den 1950er-Jahren'],
            correctIndex: 0,
            explanation: 'Im Zuge der industrialisierten Massenproduktion entwickelten sich die Stufen Qualitätskontrolle, Qualitätssicherung, Umfassendes Qualitätsmanagement und schließlich Business Excellence.',
          },
        ],
      },
      {
        id: 'investition-finanzierung-ueberblick',
        title: 'Investition & Finanzierung im Überblick',
        questions: [
          {
            question: 'Was bietet die Finanzplanung eines Unternehmens laut Buch?',
            options: ['Sie dient ausschließlich der Erstellung des Jahresabschlusses', 'Sie plant ausschließlich die Werbemaßnahmen eines Unternehmens', 'Sie bietet eine Übersicht über den aktuellen und zukünftigen Kapitalbedarf sowie über Finanzierungsmöglichkeiten', 'Sie ersetzt die Notwendigkeit einer Bilanzierung'],
            correctIndex: 2,
            explanation: 'Die Finanzplanung bietet laut Buch eine Übersicht über den aktuellen und zukünftigen Kapitalbedarf sowie über Finanzierungsmöglichkeiten und ist damit die Grundlage, um finanzielle Mittel effizient für Investitionen einzusetzen.',
          },
          {
            question: 'Auf welchen Managementebenen findet die Finanzplanung eines Unternehmens statt?',
            options: ['Auf allen Managementebenen – vom normativen über das strategische bis zum operativen Management', 'Ausschließlich auf strategischer Ebene', 'Ausschließlich auf operativer Ebene', 'Ausschließlich auf normativer Ebene'],
            correctIndex: 0,
            explanation: 'Die Finanzplanung findet auf allen Managementebenen Anwendung: Im normativen Management werden langfristige finanzielle Ziele festgelegt, im strategischen Management erfolgen Budgetplanungen, und im operativen Management kommt es zur laufenden Kostenkontrolle.',
          },
          {
            question: 'Ein Unternehmen plant die finanzielle Sicherstellung der Liquidität für Gehälter und Lieferantenrechnungen. Welcher Managementebene ist diese Finanzplanung laut Buchbeispiel zuzuordnen?',
            options: ['Dem normativen Management, da es sich um langfristige Ziele handelt', 'Dem strategischen Management, da es sich um eine Budgetplanung handelt', 'Keiner Managementebene, da es sich nicht um Finanzplanung handelt', 'Dem operativen Management, da es sich um eine operative Finanzplanung zur laufenden Kostenkontrolle handelt'],
            correctIndex: 3,
            explanation: 'Das Buch nennt als Beispiel für operative Finanzplanung genau diesen Fall: die finanzielle Planung zur Sicherstellung der Liquidität für Gehälter, Lieferantenrechnungen etc.',
          },
          {
            question: 'Ein Unternehmen ordnet einer geplanten Investition in neue Technologien zur CO2-Reduktion eine mehrjährige Finanzierung zu. Um welche Art der Finanzplanung handelt es sich laut Buchbeispiel?',
            options: ['Operative Finanzplanung', 'Strategische Finanzplanung', 'Normative Finanzplanung', 'Kurzfristige Liquiditätsplanung'],
            correctIndex: 1,
            explanation: 'Als Beispiel für strategische Finanzplanung nennt das Buch die finanzielle Planung einer Investition in neue Technologien zur CO2-Reduktion, da hier eine langfristige Finanzierungsentscheidung getroffen wird.',
          },
          {
            question: 'Wie hängen Investition und Finanzierung laut Buch in der Bilanz eines Unternehmens zusammen?',
            options: ['Investition betrifft die Passivseite (Mittelherkunft), Finanzierung die Aktivseite (Mittelverwendung)', 'Investition und Finanzierung sind in der Bilanz vollkommen unabhängig voneinander', 'Investition betrifft die Aktivseite (Mittelverwendung), Finanzierung die Passivseite (Mittelherkunft)', 'Nur die Finanzierung wirkt sich auf die Bilanz aus, die Investition nicht'],
            correctIndex: 2,
            explanation: 'Eine Investition wirkt sich auf der Aktivseite der Bilanz aus (Vermögen = Mittelverwendung), während die Passivseite zeigt, wodurch diese Vermögensteile finanziert wurden (Kapital = Mittelherkunft). Investition und Finanzierung sind damit über die Bilanzgleichung eng verknüpft.',
          },
        ],
      },
      {
        id: 'investitionsmanagement',
        title: 'Investitionsmanagement',
        questions: [
          {
            question: 'Wie wird der Begriff "Investition" im Rahmen des Investitionsmanagements definiert?',
            options: ['Verwendung von finanziellen Mitteln zur Beschaffung von Vermögen', 'Beschaffung von finanziellen Mitteln durch Eigen- oder Fremdkapital', 'Verkauf von Vermögensgegenständen zur Verbesserung der Liquidität', 'Aufnahme eines Kredits zur Finanzierung laufender Betriebskosten'],
            correctIndex: 0,
            explanation: 'Investition ist laut Buch die Verwendung von finanziellen Mitteln zur Beschaffung von Vermögen. Die Beschaffung der finanziellen Mittel selbst wird dagegen als Finanzierung bezeichnet.',
          },
          {
            question: 'Loopy hat aus Loopy\'s Candy Store zu viel Kapital in eine überdimensionierte Verpackungsanlage investiert und kann nun ihre Lieferantenrechnungen nicht mehr bezahlen. Wie nennt man diesen Zustand der Zahlungsunfähigkeit?',
            options: ['Liquidation', 'Insolvenz', 'Amortisation', 'Rezession'],
            correctIndex: 1,
            explanation: 'Insolvenz bezeichnet die Zahlungsunfähigkeit eines Unternehmens: Zahlungsverpflichtungen können nicht mehr erfüllt werden. Fehlentscheidungen bei Investitionen können im schlimmsten Fall zur Insolvenz führen.',
          },
          {
            question: 'Was versteht man laut Buch unter "Investitionsmanagement"?',
            options: ['Die ausschließliche Kontrolle der Kapitalkosten einer Investition', 'Die Beschaffung von Eigenkapital für neue Projekte', 'Die systematische Planung, Entscheidung, Durchführung und Kontrolle von Investitionen im Rahmen des Investitionsprozesses', 'Die Bewertung von Wertpapieren im Umlaufvermögen'],
            correctIndex: 2,
            explanation: 'Investitionsmanagement umfasst laut Buch die systematische Planung, Entscheidung, Durchführung und Kontrolle von Investitionen im Rahmen des Investitionsprozesses in einem Unternehmen. Die Steuerung eines Investitionsvorhabens nennt man Investitionsmanagement.',
          },
          {
            question: 'Loopy legt überschüssiges Geld aus Loopy\'s Candy Store in Wertpapiere an. Um welche Art von Investition handelt es sich nach dem Investitionsgut?',
            options: ['Sachinvestition', 'Immaterielle Investition', 'Erweiterungsinvestition', 'Finanzinvestition'],
            correctIndex: 3,
            explanation: 'Nach dem Investitionsgut unterscheidet man Sachinvestition (physische Vermögensgegenstände, z. B. Maschine), Finanzinvestition (finanzielle Vermögensgegenstände, z. B. Wertpapiere) und immaterielle Investition (nicht physische Vermögensgegenstände, z. B. Patente). Wertpapiere sind demnach eine Finanzinvestition.',
          },
          {
            question: 'Loopy ersetzt eine alte, langsame Verpackungsmaschine in Loopy\'s Candy Store durch ein neues, deutlich effizienteres Modell, um die Produktivität zu steigern. Um welchen Investitionsanlass handelt es sich?',
            options: ['Rationalisierungsinvestition', 'Ersatzinvestition', 'Neuinvestition', 'Erweiterungsinvestition'],
            correctIndex: 0,
            explanation: 'Eine Rationalisierungsinvestition ersetzt eine alte Anlage durch ein neues, effizienteres Investitionsobjekt. Das unterscheidet sie von der reinen Ersatzinvestition, bei der eine nicht mehr nutzbare Anlage lediglich durch ein gleichartiges Objekt ersetzt wird.',
          },
          {
            question: 'In welcher Reihenfolge laufen die vier Phasen des Investitionsprozesses laut Schema des Buches ab?',
            options: ['Investitionsentscheidung – Investitionsplanung – Kontrolle der Investition – Durchführung der Investition', 'Investitionsplanung – Investitionsentscheidung – Durchführung der Investition – Kontrolle der Investition', 'Durchführung der Investition – Investitionsplanung – Investitionsentscheidung – Kontrolle der Investition', 'Kontrolle der Investition – Durchführung der Investition – Investitionsentscheidung – Investitionsplanung'],
            correctIndex: 1,
            explanation: 'Der Investitionsprozess läuft in der Regel in den Phasen Investitionsplanung, Investitionsentscheidung, Durchführung der Investition und Kontrolle der Investition ab, wie im Buch am Beispiel der Anschaffung eines Herds für das Hotel ever grün gezeigt wird.',
          },
          {
            question: 'Welche Tätigkeit gehört laut Buch zur Phase "Investitionsplanung" im Investitionsprozess?',
            options: ['Kaufentscheidung treffen', 'Bestellung durchführen', 'Angebote einholen', 'Erfahrungswerte für die Zukunft sammeln'],
            correctIndex: 2,
            explanation: 'Zur Investitionsplanung gehören das Melden des Investitionsbedarfs, das Festlegen von Entscheidungskriterien und das Einholen von Angeboten. Die Kaufentscheidung fällt in die Investitionsentscheidung, die Bestellung in die Durchführung.',
          },
          {
            question: 'Loopy überlegt für Loopy\'s Candy Store zwei neue Kühlvitrinen und vergleicht sie u. a. anhand der Kriterien "Anschaffungskosten" und "Umweltfreundlichkeit". Wie werden diese beiden Kriterienarten korrekt bezeichnet?',
            options: ['Beide sind quantitative Kriterien', 'Anschaffungskosten = qualitativ, Umweltfreundlichkeit = quantitativ', 'Beide sind qualitative Kriterien', 'Anschaffungskosten = quantitativ, Umweltfreundlichkeit = qualitativ'],
            correctIndex: 3,
            explanation: 'Quantitative Kriterien (Hard Facts) sind zahlenmäßig erfassbare Faktoren wie Kosten, Umsatz oder Rentabilität. Qualitative Kriterien (Soft Facts) sind zahlenmäßig nicht erfassbare Faktoren wie Umweltfreundlichkeit oder Marktposition.',
          },
          {
            question: 'Welche Leitfrage beantwortet die Rentabilitätsvergleichsrechnung als eines der statischen Investitionsrechenverfahren?',
            options: ['Welche Investition hat die höchste Verzinsung des damit gebundenen Kapitals?', 'Welche Investition verursacht die geringsten Kosten?', 'Welche Investition erzielt den höchsten Gewinn?', 'Bei welcher Investition fließt das eingesetzte Kapital am schnellsten zurück?'],
            correctIndex: 0,
            explanation: 'Die fünf statischen Verfahren beantworten je eine eigene Leitfrage: Kostenvergleichsrechnung (geringste Kosten), Gewinnvergleichsrechnung (höchster Gewinn), Rentabilitätsvergleichsrechnung (höchste Verzinsung des Kapitals), Amortisationsrechnung (schnellster Rückfluss) und Scoring-Methode (meiste Punkte).',
          },
          {
            question: 'Aus welchen zwei Kostenblöcken setzen sich die bei der Kostenvergleichsrechnung berücksichtigten Gesamtkosten zusammen?',
            options: ['Anschaffungskosten und Verkaufspreis', 'Laufende Betriebskosten und Kapitalkosten', 'Eigenkapitalkosten und Fremdkapitalkosten', 'Fixkosten und Deckungsbeitrag'],
            correctIndex: 1,
            explanation: 'Die Kostenvergleichsrechnung berücksichtigt laufende Betriebskosten (variable und fixe Betriebskosten) sowie Kapitalkosten (kalkulatorische Zinsen und kalkulatorische Abschreibung) der Investition.',
          },
          {
            question: 'Wie wird die kalkulatorische Abschreibung im Rahmen der Kostenvergleichsrechnung berechnet?',
            options: ['(Anschaffungskosten + Restwert) : 2 × Zinssatz', 'Anschaffungskosten : Nutzungsdauer', '(Anschaffungskosten − Restwert) : Nutzungsdauer', 'Anschaffungskosten × Zinssatz : Nutzungsdauer'],
            correctIndex: 2,
            explanation: 'Die kalkulatorische Abschreibung ergibt sich aus der Differenz zwischen Anschaffungswert und Restwert, verteilt über die Nutzungsdauer: (Anschaffungskosten − Restwert) : Nutzungsdauer.',
          },
          {
            question: 'Loopy vergleicht für die Auslieferungen von Loopy\'s Candy Store zwei Firmenautos mittels Kostenvergleichsrechnung. Auto A hat Anschaffungskosten von 31.250,00 EUR und einen Restwert nach 5 Jahren von 10.200,00 EUR. Der Kalkulationszinssatz beträgt 5 % p. a. Wie hoch sind die kalkulatorischen Zinsen pro Jahr?',
            options: ['781,25 EUR', '2.072,50 EUR', '1.562,50 EUR', '1.036,25 EUR'],
            correctIndex: 3,
            explanation: 'Kalkulatorische Zinsen = (Anschaffungskosten + Restwert) : 2 × Zinssatz = (31.250,00 + 10.200,00) : 2 × 5 % = 20.725,00 × 5 % = 1.036,25 EUR. Die Werte stammen aus dem Buchbeispiel zum Vergleich zweier Firmenwagen (C5 Tourer und C5 Limousine).',
          },
          {
            question: 'Loopy vergleicht für die Zustellung ihrer Pralinen aus Loopy\'s Candy Store zwei Fahrzeugmodelle mittels Kostenvergleichsrechnung. Modell A kommt bei 35.000 Jahreskilometern auf Gesamtkosten von 14.469,38 EUR, Modell B trotz höherer Anschaffungskosten nur auf 13.491,79 EUR. Für welches Modell sollte sich Loopy entscheiden?',
            options: ['Für Modell B, da es die niedrigeren Gesamtkosten hat', 'Für Modell A, da es die niedrigeren Anschaffungskosten hat', 'Für beide gleichermaßen, da die Kostenvergleichssumme identisch ist', 'Für Modell A, weil Benzinfahrzeuge grundsätzlich günstiger sind'],
            correctIndex: 0,
            explanation: 'Bei der Kostenvergleichsrechnung wird die Alternative mit den geringsten Gesamtkosten gewählt. Obwohl Modell B höhere Anschaffungskosten hat, sind seine jährlichen Gesamtkosten mit 13.491,79 EUR niedriger als bei Modell A mit 14.469,38 EUR (Buchbeispiel: Vergleich C5 Tourer und C5 Limousine eines Versicherungs-Fuhrparks).',
          },
          {
            question: 'Loopy überlegt, welche von zwei neuen Verpackungsmaschinen sie für Loopy\'s Candy Store anschafft. Maschine 1 hat Fixkosten (kalk. Abschreibung + Zinsen) von 221.000,00 EUR pro Jahr und variable Kosten von 150,00 EUR je Maschinenstunde, Maschine 2 hat Fixkosten von 292.500,00 EUR und variable Kosten von 110,00 EUR je Maschinenstunde. Wie hoch ist die kritische Menge?',
            options: ['1.030,00 Stunden', '1.787,50 Stunden', '2.500,00 Stunden', '625,00 Stunden'],
            correctIndex: 1,
            explanation: 'Kritische Menge = Differenz der Fixkosten : Differenz der variablen Kosten = (292.500,00 − 221.000,00) : (150,00 − 110,00) = 71.500,00 : 40,00 = 1.787,50 Stunden. Unterhalb dieser Auslastung ist Maschine 1 günstiger, darüber Maschine 2 (Werte aus dem Buchbeispiel zu zwei Druckmaschinen).',
          },
          {
            question: 'Welcher Nachteil wird der Kostenvergleichsrechnung im Buch zugeschrieben?',
            options: ['Sie berücksichtigt zu viele Daten und ist daher aufwendig', 'Sie kann nur bei bekannter Auslastung angewendet werden', 'Es werden nur durchschnittliche Werte für eine Periode berücksichtigt und die Erlöse bleiben unberücksichtigt', 'Sie berücksichtigt ausschließlich qualitative Kriterien'],
            correctIndex: 2,
            explanation: 'Zu den Nachteilen zählt laut Buch, dass nur durchschnittliche Werte für eine Periode herangezogen werden, unterschiedliche Erlöse unberücksichtigt bleiben und der Zeitwert des Geldes nicht einbezogen wird.',
          },
          {
            question: 'Wodurch erweitert die Gewinnvergleichsrechnung die Kostenvergleichsrechnung?',
            options: ['Um die Berücksichtigung der Mitarbeiterzufriedenheit', 'Um die Berücksichtigung des eingesetzten Kapitals', 'Um die Berücksichtigung der Rückflussdauer', 'Um die Berücksichtigung der Erlöse'],
            correctIndex: 3,
            explanation: 'Die Gewinnvergleichsrechnung erweitert die Kostenvergleichsrechnung um die Erlöse: Gewinn = Erlöse − Gesamtkosten. Sie wird u. a. eingesetzt, wenn sich Kapazität oder Qualität der Investitionsgüter unterscheiden.',
          },
          {
            question: 'Loopy überlegt, ob sie Loopy\'s Candy Store klein oder groß umbaut. Variante klein: Kosten 250.000,00 EUR, laufende Betriebskosten 75.000,00 EUR/Jahr, Nutzungsdauer 10 Jahre, Zinssatz 4 %, Umsatz 180.000,00 EUR. Variante groß: Kosten 600.000,00 EUR, laufende Betriebskosten 186.000,00 EUR/Jahr, Nutzungsdauer 6 Jahre, Zinssatz 4 %, Umsatz 430.000,00 EUR. Welchen jährlichen Gewinn erzielt die große Variante laut Gewinnvergleichsrechnung?',
            options: ['132.000,00 EUR', '75.000,00 EUR', '98.000,00 EUR', '144.000,00 EUR'],
            correctIndex: 0,
            explanation: 'Gewinn = Erlöse − (kalk. Zinsen + kalk. Abschreibung + laufende Betriebskosten) = 430.000,00 − (12.000,00 + 100.000,00 + 186.000,00) = 132.000,00 EUR. Die kleine Variante erzielt im Vergleich nur 75.000,00 EUR Gewinn (Buchbeispiel: Zimmerrenovierung Hotel ever grün).',
          },
          {
            question: 'Wie lautet die Formel zur Berechnung der Rentabilität bei der Rentabilitätsvergleichsrechnung?',
            options: ['Rentabilität = Gewinn : Anschaffungskosten', 'Rentabilität = (Gewinn + kalkulatorische Zinsen) : durchschnittlicher Kapitaleinsatz × 100', 'Rentabilität = Erlöse : Gesamtkosten × 100', 'Rentabilität = durchschnittlicher Kapitaleinsatz : Gewinn × 100'],
            correctIndex: 1,
            explanation: 'Rentabilität = (Gewinn + kalkulatorische Zinsen) : durchschnittlicher Kapitaleinsatz × 100, wobei der durchschnittliche Kapitaleinsatz = (Anschaffungskosten + Restwert) : 2 ist.',
          },
          {
            question: 'Für die kleine Umbauvariante von Loopy\'s Candy Store (Kosten 250.000,00 EUR, Gewinn 75.000,00 EUR, kalk. Zinsen 5.000,00 EUR) ergibt die Rentabilitätsvergleichsrechnung 64 %, für die große Variante (Kosten 600.000,00 EUR, Gewinn 132.000,00 EUR, kalk. Zinsen 12.000,00 EUR) nur 48 %. Welche Schlussfolgerung zieht Loopy daraus richtigerweise?',
            options: ['Die Rentabilitätsvergleichsrechnung bestätigt exakt das Ergebnis der Gewinnvergleichsrechnung', 'Die kleine Variante ist in jedem Fall die schlechtere Wahl', 'Obwohl die große Variante den höheren absoluten Gewinn bringt, ist die kleine Variante bezogen auf das eingesetzte Kapital rentabler', 'Die Rentabilität ist bei beiden Varianten immer identisch mit dem Gewinn'],
            correctIndex: 2,
            explanation: 'Im Gegensatz zur Gewinnvergleichsrechnung, bei der die große Variante mit 132.000,00 EUR besser abschneidet, liefert die Rentabilitätsvergleichsrechnung für die kleine Variante mit 64 % ein besseres Ergebnis als für die große mit 48 %, da das eingesetzte Kapital mitberücksichtigt wird.',
          },
          {
            question: 'Welchen Vorteil bietet die Rentabilitätsvergleichsrechnung gegenüber der Gewinnvergleichsrechnung zusätzlich?',
            options: ['Sie berücksichtigt den Zeitwert des Geldes', 'Sie benötigt keinerlei Datengrundlage', 'Sie berücksichtigt ausschließlich qualitative Kriterien', 'Investitionsobjekte mit unterschiedlichem Kapitaleinsatz können gut verglichen werden'],
            correctIndex: 3,
            explanation: 'Da die Rentabilitätsvergleichsrechnung den Gewinn ins Verhältnis zum eingesetzten Kapital setzt, können damit auch Investitionsobjekte mit unterschiedlich hohem Kapitaleinsatz gut miteinander verglichen werden.',
          },
          {
            question: 'Welche zwei Methoden der Amortisationsrechnung werden im Buch unterschieden?',
            options: ['Durchschnittsmethode und Kumulationsmethode', 'Statische und dynamische Methode', 'Brutto- und Nettomethode', 'Direkte und indirekte Methode'],
            correctIndex: 0,
            explanation: 'Bei der Amortisationsrechnung wird zwischen der Durchschnittsmethode (jährlicher Rückfluss ist gleich hoch) und der Kumulationsmethode (jährlicher Rückfluss ist verschieden hoch) unterschieden.',
          },
          {
            question: 'Für die kleine Umbauvariante von Loopy\'s Candy Store gilt: Kosten 250.000,00 EUR, jährlicher Gewinn 75.000,00 EUR, kalkulatorische Abschreibung 25.000,00 EUR. Wie viele Jahre dauert die Amortisation nach der Durchschnittsmethode?',
            options: ['3,33 Jahre', '2,50 Jahre', '10,00 Jahre', '1,50 Jahre'],
            correctIndex: 1,
            explanation: 'Amortisationsdauer = (Anschaffungskosten − Restwert) : (jährlicher Gewinn + kalkulatorische Abschreibung) = 250.000,00 : (75.000,00 + 25.000,00) = 250.000,00 : 100.000,00 = 2,50 Jahre (Buchbeispiel: Zimmerrenovierung Hotel ever grün, Viersternekategorie).',
          },
          {
            question: 'Welche der folgenden Aussagen beschreibt eine Grenze der statischen Investitionsrechenverfahren laut Buch korrekt?',
            options: ['Sie betrachten stets mehrere Perioden über die gesamte Nutzungsdauer', 'Sie berücksichtigen ausschließlich qualitative Kriterien', 'Es wird nur eine Periode betrachtet, die als repräsentativ für die anderen angesehen wird', 'Sie berücksichtigen den Zeitwert des Geldes durch Auf- oder Abzinsung'],
            correctIndex: 2,
            explanation: 'Eine Grenze der statischen Verfahren ist, dass nur eine Periode betrachtet und als repräsentativ für die gesamte Nutzungsdauer angesehen wird. Diese Schwäche wird erst durch dynamische Verfahren mit mehreren Perioden aufgehoben, die den Zeitwert des Geldes berücksichtigen.',
          },
          {
            question: 'Was zeichnet die Scoring-Methode im Vergleich zu den übrigen statischen Investitionsrechenverfahren besonders aus?',
            options: ['Sie berücksichtigt ausschließlich Hard Facts', 'Sie berechnet ausschließlich die kritische Menge', 'Sie ersetzt die Notwendigkeit einer Finanzierung', 'Sie kombiniert quantitative und qualitative Kriterien, die mit Punkten bewertet werden'],
            correctIndex: 3,
            explanation: 'Die Scoring-Methode berücksichtigt bei Investitionsentscheidungen sowohl quantitative als auch qualitative Kriterien, die mit Punkten bewertet werden. Die Alternative mit der höchsten Punktzahl wird ausgewählt.',
          },
          {
            question: 'Was ist laut Buch der erste Schritt bei der Anwendung der Scoring-Methode?',
            options: ['Die Entscheidungskriterien zur Beurteilung der Investitionsobjekte festlegen', 'Die Bewertungspunkte mit der Gewichtung multiplizieren', 'Die gewichteten Punkte pro Investitionsobjekt addieren', 'Die Kriterien anhand einer Skala von 1 bis 5 bewerten'],
            correctIndex: 0,
            explanation: 'Der erste Schritt der Scoring-Methode ist das Festlegen der Entscheidungskriterien. Danach folgen Gewichten, Bewerten, Multiplizieren und Addieren der Punkte.',
          },
          {
            question: 'Bei einer Scoring-Methode zum Vergleich zweier Elektro-Lieferfahrzeuge für Loopy\'s Candy Store erreicht Fahrzeug A einen gewichteten Gesamtpunktewert von 2,6, Fahrzeug B einen von 3,15 (Bewertungsskala 1 bis 5 Punkte je Kriterium). Für welches Fahrzeug sollte sich Loopy entscheiden?',
            options: ['Für Fahrzeug A, da niedrigere Werte bei der Scoring-Methode immer besser sind', 'Für Fahrzeug B, da die Alternative mit dem höchsten Punktwert die gesetzten Anforderungen am besten erfüllt', 'Es ist unmöglich, sich zu entscheiden, da die Differenz zu gering ist', 'Für Fahrzeug A, weil es die geringeren Anschaffungskosten hat, unabhängig vom Gesamtpunktewert'],
            correctIndex: 1,
            explanation: 'Bei der Scoring-Methode wird die Alternative mit dem höchsten gewichteten Gesamtpunktewert gewählt. Mit 3,15 gegenüber 2,6 Punkten erfüllt Fahrzeug B die gesetzten Anforderungen laut Berechnung am besten (Werte aus dem Buchbeispiel zum Vergleich zweier E-Shuttlebusse für ein Hotel).',
          },
        ],
      },
      {
        id: 'finanzmanagement',
        title: 'Finanzmanagement',
        questions: [
          {
            question: 'Was versteht man in der Betriebswirtschaft unter dem Begriff \'Finanzierung\'?',
            options: ['Die Planung und Bereitstellung von Kapital (Finanzmitteln), das benötigt wird, um die Geschäftstätigkeit zu starten, aufrechtzuerhalten und auszubauen.', 'Die Verteilung von Gewinnen an die Eigentümer/innen eines Unternehmens am Jahresende.', 'Die Erstellung der Gewinn- und Verlustrechnung eines Unternehmens.', 'Die Bewertung von Investitionsalternativen mittels Kostenvergleichsrechnung.'],
            correctIndex: 0,
            explanation: 'Unter Finanzierung versteht man die Planung und Bereitstellung von Kapital (Finanzmitteln), das benötigt wird, um die Geschäftstätigkeit eines Unternehmens zu starten, aufrechtzuerhalten und auszubauen.',
          },
          {
            question: 'Welche drei zentralen Finanzierungsziele von Unternehmen nennt das Lehrbuch?',
            options: ['Wachstum, Umsatz und Marktanteil', 'Liquidität, Rentabilität und Unabhängigkeit', 'Effizienz, Effektivität und Nachhaltigkeit', 'Bonität, Sicherheit und Flexibilität'],
            correctIndex: 1,
            explanation: 'Die Finanzierungsziele von Unternehmen stehen in enger Beziehung zu den unternehmerischen Zielen. Man unterscheidet Liquidität, Rentabilität und Unabhängigkeit.',
          },
          {
            question: 'Loopy möchte sicherstellen, dass ihr Candy Store jederzeit alle offenen Rechnungen termingerecht bezahlen kann. Welches Finanzierungsziel verfolgt sie damit vor allem?',
            options: ['Rentabilität', 'Unabhängigkeit', 'Liquidität', 'Bonität'],
            correctIndex: 2,
            explanation: 'Unter Liquidität versteht man die Fähigkeit eines Unternehmens, seinen Zahlungsverpflichtungen termingerecht und uneingeschränkt nachzukommen.',
          },
          {
            question: 'Mit welcher Formel wird laut Lehrbuch die Rentabilität eines Unternehmens berechnet?',
            options: ['Rentabilität = Umsatz ÷ Kapitaleinsatz × 100', 'Rentabilität = Kapitaleinsatz ÷ Gewinn × 100', 'Rentabilität = Gewinn − Kapitaleinsatz', 'Rentabilität = Gewinn ÷ Kapitaleinsatz × 100'],
            correctIndex: 3,
            explanation: 'Die Rentabilität gibt an, in welcher Höhe das für die Leistungserstellung eingesetzte Kapital im Unternehmen verzinst wird: Rentabilität = Gewinn ÷ Kapitaleinsatz × 100.',
          },
          {
            question: 'Der österreichische Leiterplattenhersteller ATSS investierte hohe Summen in neue Produktionsanlagen und erzielte im Vorjahr 10% Rendite. Weil die Umsätze geringer als erwartet ausfielen, musste das Unternehmen aufgrund fehlender liquider Mittel einen teuren Bankkredit für die neue Anlage aufnehmen. Welchen Zielkonflikt zeigt dieses Beispiel?',
            options: ['Zielkonflikt zwischen Liquidität und Rentabilität', 'Zielkonflikt zwischen Unabhängigkeit und Bonität', 'Zielkonflikt zwischen Eigen- und Fremdfinanzierung', 'Zielkonflikt zwischen Innen- und Außenfinanzierung'],
            correctIndex: 0,
            explanation: 'Werden zu viele liquide Mittel investiert, steigt zwar die Rentabilität, doch fehlen die Mittel dann eventuell für andere Zwecke - werden hingegen zu viele liquide Mittel zurückbehalten, fehlen erwirtschaftete Erträge. Ein solcher Zielkonflikt zwischen Liquidität und Rentabilität kann laut Beispiel sogar eine teure Fremdfinanzierung nötig machen.',
          },
          {
            question: 'Welche drei zentralen Aufgaben umfasst das Finanzmanagement laut Lehrbuch?',
            options: ['Preisgestaltung, Werbung und Vertriebsplanung', 'Ermittlung des laufenden Finanzierungsbedarfs, Entscheidung über die Art der Finanzierung und Durchführung der Finanzierung', 'Personalplanung, Produktionsplanung und Qualitätskontrolle', 'Bilanzierung, Steuererklärung und Lohnverrechnung'],
            correctIndex: 1,
            explanation: 'Zentrale Aufgaben des Finanzmanagements sind die Ermittlung des laufenden Finanzierungsbedarfs durch Finanzplanung, die Entscheidung über die passende Finanzierungsform sowie die Durchführung der Finanzierung (Organisation der Zahlungsvorgänge und Kapitalaufnahme).',
          },
          {
            question: 'Loopy reinvestiert einbehaltene Gewinne aus dem Verkauf ihrer Süßigkeiten direkt wieder in ihr Geschäft, anstatt sie an sich selbst auszuschütten. Welche Finanzierungsart wendet sie damit an?',
            options: ['Kreditfinanzierung', 'Beteiligungsfinanzierung', 'Selbstfinanzierung', 'Subventionsfinanzierung'],
            correctIndex: 2,
            explanation: 'Bei der Selbstfinanzierung erhält das Unternehmen zusätzliches Eigenkapital aus eigenen, nicht ausgeschütteten Gewinnen - sie zählt zur Eigenfinanzierung aus Innenfinanzierung.',
          },
          {
            question: 'Die Tischlerei Hölzinger GmbH erwarb 1982 ein Grundstück um 200.000,00 EUR, das seither mit diesem Anschaffungswert bilanziert wird. Heute hat das Grundstück einen Marktwert von 1.500.000,00 EUR. Wie hoch ist die stille Reserve, die im Grundstück steckt?',
            options: ['200.000,00 EUR', '500.000,00 EUR', '1.500.000,00 EUR', '1.300.000,00 EUR'],
            correctIndex: 3,
            explanation: 'Die stille Reserve ergibt sich aus der Differenz zwischen dem tatsächlichen Marktwert und dem niedrigeren Buchwert in der Bilanz: 1.500.000,00 EUR − 200.000,00 EUR = 1.300.000,00 EUR. Sie wird erst bei einem Verkauf des Grundstücks als Gewinn sichtbar (stille Selbstfinanzierung).',
          },
          {
            question: 'Was versteht man unter einer Venture-Capital-Gesellschaft?',
            options: ['Eine Finanzierungsgesellschaft, die einem jungen Unternehmen Eigenkapital (meist deutlich über 200.000,00 EUR) ohne feststehende Rückzahlung bzw. Verzinsung zur Verfügung stellt.', 'Eine Bank, die ausschließlich kurzfristige Kontokorrentkredite vergibt.', 'Eine Privatperson, die einem jungen Unternehmen ihr Fachwissen und ihre Kontakte zur Verfügung stellt.', 'Eine staatliche Institution, die zinslose Förderungen an Start-ups vergibt.'],
            correctIndex: 0,
            explanation: 'Eine Venture-Capital-Gesellschaft ist eine Finanzierungsgesellschaft, die einem jungen Unternehmen Eigenkapital (meist über 200.000,00 EUR) ohne feststehende Rückzahlung bzw. Verzinsung zur Verfügung stellt und dafür Informations-, Kontroll- und Mitspracherechte erhält.',
          },
          {
            question: 'Worin unterscheidet sich ein Business Angel von einer Venture-Capital-Gesellschaft?',
            options: ['Ein Business Angel investiert ausschließlich in börsennotierte Unternehmen.', 'Ein Business Angel ist eine Privatperson (meist mit geringeren Summen von ca. 50.000,00 bis 150.000,00 EUR beteiligt) und keine Finanzierungsgesellschaft.', 'Ein Business Angel stellt ausschließlich Fremdkapital in Form von Krediten zur Verfügung.', 'Ein Business Angel verlangt im Gegensatz zur Venture-Capital-Gesellschaft immer eine feste Verzinsung.'],
            correctIndex: 1,
            explanation: 'Ein Business Angel ist wie eine Venture-Capital-Gesellschaft direkt am Unternehmen beteiligt, handelt es sich aber um eine Privatperson und keine Finanzierungsgesellschaft; Business Angels investieren in der Regel geringere Summen (ca. 50.000,00 bis 150.000,00 EUR) als Venture-Capital-Gesellschaften.',
          },
          {
            question: 'Loopy vereinbart mit einem Business Angel, dass dieser 60.000,00 EUR in die Erweiterung ihres Candy Store investiert und dafür 25% der Unternehmensanteile erhält. Um welche Art der Finanzierung handelt es sich?',
            options: ['Fremdfinanzierung durch einen Kontokorrentkredit', 'Innenfinanzierung durch Selbstfinanzierung', 'Eigenfinanzierung durch Beteiligung eines Business Angels', 'Fremdfinanzierung durch die Ausgabe einer Anleihe'],
            correctIndex: 2,
            explanation: 'Der Business Angel investiert direkt und erhält im Gegenzug einen Anteil am Unternehmen - das entspricht einer Eigenfinanzierung (Außenfinanzierung) durch einen neuen Miteigentümer, so wie im Lehrbuchbeispiel mit 60.000,00 EUR für 25% der Anteile.',
          },
          {
            question: 'Welche Form des Crowdfundings zählt bilanziell als Fremdkapital, weil die Geldgeber/innen dafür Zinsen erhalten?',
            options: ['Donation-based Crowdfunding', 'Reward-based Crowdfunding', 'Equity-based Crowdfunding', 'Lending-based Crowdfunding'],
            correctIndex: 3,
            explanation: 'Beim Lending-based Crowdfunding (\'Geld für Zinsen\') erhalten Geldgeber/innen für ihr Investment Zinsen, weshalb es als Fremdkapital zählt - im Gegensatz zum Equity-based Crowdfunding, das als Eigenkapital gilt.',
          },
          {
            question: 'Was versteht man unter \'Going Public\'?',
            options: ['Die Umwandlung eines Unternehmens in eine AG und den Gang an die Börse (erstmalige Ausgabe von Aktien, IPO)', 'Die Umwandlung eines Unternehmens in eine GmbH', 'Die vollständige Rückzahlung sämtlicher Bankkredite eines Unternehmens', 'Die gleichzeitige Aufnahme mehrerer Kontokorrentkredite bei verschiedenen Banken'],
            correctIndex: 0,
            explanation: 'Going Public bezeichnet die Umwandlung eines Unternehmens in eine AG und den anschließenden Gang an die Börse, also die erstmalige Ausgabe (Emission) von Aktien (Initial Public Offering, IPO), wodurch dem Unternehmen frisches Eigenkapital zufließt.',
          },
          {
            question: 'Wie werden Subventionen (Förderungen) im Lehrbuch charakterisiert?',
            options: ['Als kurzfristige Kredite mit besonders hohen Zinsen', '\'Geschenktes Geld\', das vom Bund, den Ländern, Gemeinden, der EU oder der Wirtschaftskammer an Unternehmen ausbezahlt wird und nicht zurückgezahlt werden muss', 'Als Kapitaleinlagen von Business Angels', 'Als Anleihen, die der Staat an Unternehmen ausgibt'],
            correctIndex: 1,
            explanation: 'Subventionen (Förderungen) sind \'geschenktes Geld\', das vom Bund, den Ländern, Gemeinden, der EU oder der Wirtschaftskammer an Unternehmen ausbezahlt wird; sie müssen nur auf ihre widmungsgemäße Verwendung überprüft werden, decken aber nie den gesamten Kapitalbedarf.',
          },
          {
            question: 'Welches Merkmal trifft laut Lehrbuch auf Fremdkapital zu?',
            options: ['Es steht dem Unternehmen zeitlich unbefristet zur Verfügung.', 'Kapitalgeber/innen sind direkt am Unternehmenserfolg beteiligt.', 'Es muss zu einem bestimmten Zeitpunkt zurückgezahlt werden, und die Kapitalnehmer/innen müssen dafür Zinsen zahlen.', 'Gläubiger/innen tragen bei Insolvenz das volle Verlustrisiko wie Eigenkapitalgeber/innen.'],
            correctIndex: 2,
            explanation: 'Fremdkapital steht einem Unternehmen nur befristet zur Verfügung, muss zu einem bestimmten Zeitpunkt zurückgezahlt werden, und die Kapitalnehmer/innen müssen dafür erfolgsunabhängige Zinsen zahlen; Gläubiger/innen haben in der Regel kein Mitspracherecht und tragen bei einem Konkurs ein begrenzteres Verlustrisiko als Eigenkapitalgeber/innen.',
          },
          {
            question: 'Warum wird die Finanzierungswirkung der Rückstellungsfinanzierung im Lehrbuch als schwer planbar beschrieben?',
            options: ['Weil Rückstellungen immer sofort zu einer Auszahlung führen.', 'Weil Rückstellungen nur für bereits abgeschriebene Anlagen gebildet werden dürfen.', 'Weil die Bildung von Rückstellungen gesetzlich verboten ist.', 'Weil unklar ist, in welcher Höhe bzw. wann eine Rückstellung tatsächlich zahlungswirksam wird.'],
            correctIndex: 3,
            explanation: 'Eine Rückstellung bildet Unternehmen für drohende Aufwendungen, wobei der Grund dafür zwar feststeht, aber unklar ist, in welcher Höhe bzw. wann die Rückstellung zur Begleichung künftiger Verbindlichkeiten in Anspruch genommen wird - daher wird sie der langfristigen Finanzierung zugerechnet.',
          },
          {
            question: 'Welche fünf Kriterien nennt das Lehrbuch zur Unterscheidung von Kreditarten?',
            options: ['Kreditgeber, Leistung des Kreditgebers, Laufzeit, Verwendungszweck und Kreditbesicherung', 'Zinssatz, Währung, Bonität, Sicherheiten und Region', 'Branche, Rechtsform, Mitarbeiterzahl, Umsatz und Gewinn', 'Liquidität, Rentabilität, Unabhängigkeit, Wachstum und Risiko'],
            correctIndex: 0,
            explanation: 'Kredite werden aus verschiedenen Gründen und Bedürfnissen benötigt. Entsprechend unterschiedlich sind auch die vergebenen Kreditarten, die sich nach Kreditgeber, Leistung des Kreditgebers, Laufzeit, Verwendungszweck und Kreditbesicherung unterscheiden lassen.',
          },
          {
            question: 'Wie werden Kreditlaufzeiten laut Lehrbuch eingeteilt?',
            options: ['kurzfristig bis 5 Jahre, mittelfristig 5-10 Jahre, langfristig über 10 Jahre', 'kurzfristig bis 1 Jahr, mittelfristig 1-5 Jahre, langfristig mehr als 5 Jahre', 'kurzfristig bis 3 Monate, mittelfristig 3-12 Monate, langfristig über 1 Jahr', 'kurzfristig bis 2 Jahre, mittelfristig 2-8 Jahre, langfristig über 8 Jahre'],
            correctIndex: 1,
            explanation: 'Nach der Laufzeit unterscheidet man kurzfristige Kredite (bis 1 Jahr), mittelfristige Kredite (1-5 Jahre) und langfristige Kredite (mehr als 5 Jahre).',
          },
          {
            question: 'In welche drei Arten wird die Kreditbesicherung im Lehrbuch grundsätzlich eingeteilt?',
            options: ['Bürgschaft, Zession und Hypothek', 'Eigenkapital, Fremdkapital und Mezzaninkapital', 'Personalsicherheiten, Realsicherheiten und Kreditversicherung', 'Kontokorrentkredit, Darlehen und Haftungskredit'],
            correctIndex: 2,
            explanation: 'Bei vielen Krediten werden vom Kreditinstitut Sicherheiten verlangt. Diese lassen sich in Kreditsicherheiten - unterteilt in Personalsicherheiten (z. B. Bürgschaft) und Realsicherheiten (z. B. Eigentumsvorbehalt, Zession, Pfandrecht) - sowie in die Kreditversicherung einteilen.',
          },
          {
            question: 'Welche Bürgschaftsart ist für den/die Gläubiger/in am weitreichendsten, da er/sie frei wählen kann, ob zuerst vom Bürgen oder vom Hauptschuldner Zahlung verlangt wird?',
            options: ['Ausfallbürgschaft', 'Gewöhnliche Bürgschaft', 'Personalsicherheit im Allgemeinen', 'Solidarische Bürgschaft'],
            correctIndex: 3,
            explanation: 'Bei der solidarischen Bürgschaft (\'Bürge als Zahler\') kann der/die Gläubiger/in wählen, von wem zuerst Zahlung verlangt wird - sie ist damit weitreichender als die gewöhnliche Bürgschaft (Einrede der Vorausklage) und die Ausfallbürgschaft (eingeschränkt, haftet nur für den nach Exekution verbleibenden Restbetrag).',
          },
          {
            question: 'Welche Realsicherheit bietet dem/der Kreditgeber/in laut Lehrbuch die höchste Sicherheit, während der Eigentumsvorbehalt die geringste bietet?',
            options: ['Pfandrecht', 'Forderungsabtretung (Zession)', 'Bürgschaft', 'Kreditversicherung'],
            correctIndex: 0,
            explanation: 'Beim Ausmaß der Übertragung von Realsicherheiten reicht die Bandbreite vom Eigentumsvorbehalt (geringste Sicherheit) über die Forderungsabtretung (Zession) bis zum Pfandrecht, das die höchste Sicherheit bietet.',
          },
          {
            question: 'Wie unterscheidet das Lehrbuch bei der Bonitätsprüfung zwischen Hard Facts und Soft Facts?',
            options: ['Hard Facts sind persönliche Eigenschaften wie das Zahlungsverhalten, Soft Facts sind Einkommen und Vermögen.', 'Hard Facts sind materielle Faktoren wie Einkommen bzw. Vermögenswerte, Soft Facts sind persönliche Eigenschaften wie Zahlungsverhalten und Qualifikation.', 'Hard Facts betreffen ausschließlich Unternehmen, Soft Facts ausschließlich Privatpersonen.', 'Hard und Soft Facts dürfen laut Gesetz bei der Kreditprüfung nicht berücksichtigt werden.'],
            correctIndex: 1,
            explanation: 'Hard Facts sind Faktoren, die auf materiellen Eigenschaften beruhen, z. B. monatliches Einkommen bzw. Gewinn- und Vermögenssituation. Soft Facts sind Faktoren, die auf persönlichen Eigenschaften beruhen, z. B. früheres Zahlungsverhalten, Glaubwürdigkeit oder berufliche Qualifikation.',
          },
          {
            question: 'In welcher Reihenfolge läuft die Abwicklung von Kreditgeschäften mit Kreditinstituten laut Lehrbuch ab?',
            options: ['Kreditvertrag - Kreditantrag - Kreditprüfung - Kreditüberwachung', 'Kreditprüfung - Kreditantrag - Kreditüberwachung - Kreditvertrag', 'Kreditantrag - Kreditprüfung - Kreditvertrag - Kreditüberwachung', 'Kreditüberwachung - Kreditvertrag - Kreditprüfung - Kreditantrag'],
            correctIndex: 2,
            explanation: 'Die Abwicklung von Kreditgeschäften läuft in vier Schritten ab: zuerst stellt der/die Kreditnehmer/in einen Kreditantrag, dann prüft die Bank Unterlagen und Bonität (Kreditprüfung), anschließend werden Kreditvertrag und Sicherheitenurkunden unterzeichnet (Kreditvertrag), und schließlich überwacht das Kreditinstitut laufend die Bonität (Kreditüberwachung).',
          },
          {
            question: 'Was kennzeichnet einen Kontokorrentkredit?',
            options: ['Einen langfristigen Investitionskredit ohne Zinsbelastung', 'Einen einmalig auszahlbaren Betrag zur Finanzierung von Anlagevermögen', 'Einen Kredit, der ausschließlich an Privatpersonen vergeben wird', 'Einen kurzfristigen, revolvierend nutzbaren Kredit in bestimmter Höhe auf dem Girokonto zur Überbrückung von Liquiditätsengpässen'],
            correctIndex: 3,
            explanation: 'Ein Kontokorrentkredit ist ein kurzfristiger Geldkredit in einer bestimmten Höhe: Der/die Inhaber/in eines Girokontos kann den vereinbarten Kreditrahmen jederzeit revolvierend in Anspruch nehmen. Er dient v. a. als Zwischenfinanzierung zur kurzfristigen Überbrückung von Liquiditätsengpässen.',
          },
          {
            question: 'Welche drei Arten von Darlehen unterscheidet das Lehrbuch nach der Art der Rückzahlung?',
            options: ['Endfälliges Darlehen, Ratendarlehen und Annuitätendarlehen', 'Kontokorrentkredit, Lieferantenkredit und Kundenkredit', 'Factoring, Leasing und Mezzaninkapital', 'Ausfallbürgschaft, Garantiekredit und Avalkredit'],
            correctIndex: 0,
            explanation: 'Darlehen werden nach der Art ihrer Rückzahlung unterschieden: Beim endfälligen Darlehen erfolgt während der Laufzeit keine Tilgung und die gesamte Summe wird am Ende zurückgezahlt; beim Ratendarlehen bleibt der Tilgungsanteil konstant, während der Zinsanteil sinkt; beim Annuitätendarlehen bleibt die monatliche Belastung (Annuität) konstant, wobei der Tilgungsanteil steigt und der Zinsanteil sinkt.',
          },
          {
            question: 'Das Hotel ever.grün nimmt für den Kauf eines E-Shuttlebusses ein Annuitätendarlehen über 42.000,00 EUR mit 6,5% p. a. Verzinsung und 10 Jahren Laufzeit auf. Laut Tilgungsplan betragen im 1. Jahr die Zinsen 2.639,27 EUR und der Tilgungsanteil 3.083,61 EUR. Wie hoch ist die Annuität (jährliche Gesamtbelastung) im 1. Jahr?',
            options: ['2.639,27 EUR', '5.722,82 EUR', '3.083,61 EUR', '38.916,39 EUR'],
            correctIndex: 1,
            explanation: 'Die Annuität ergibt sich aus der Summe von Zinsen und Tilgungsanteil: 2.639,27 EUR + 3.083,61 EUR = 5.722,82 EUR. Beim Annuitätendarlehen bleibt diese jährliche Gesamtbelastung über die gesamte Laufzeit konstant.',
          },
          {
            question: 'Was ist ein Haftungskredit?',
            options: ['Der Kreditgeber zahlt dem Kreditnehmer sofort einen Geldbetrag aus.', 'Der Kreditgeber kauft die Forderungen des Kreditnehmers gegenüber Dritten auf.', 'Der Kreditgeber (meist ein Kreditinstitut) übernimmt die Haftung für Verbindlichkeiten seines Kunden gegenüber Dritten, ohne selbst direkt Geld auszuzahlen.', 'Der Kreditgeber vermietet dem Kreditnehmer Wirtschaftsgüter gegen Entgelt.'],
            correctIndex: 2,
            explanation: 'Bei einem Haftungskredit übernimmt der Kreditgeber (meist ein Kreditinstitut) die Haftung für Verbindlichkeiten seines Kunden gegenüber Dritten - erst im Falle einer tatsächlichen Inanspruchnahme wird daraus ein Effektivkredit. Beispiele sind die Anzahlungsgarantie und die Gewährleistungsgarantie.',
          },
          {
            question: 'Loopy bestellt Verpackungsmaterial bei einem Lieferanten und erhält die Ware sofort geliefert, muss die Rechnung laut vereinbartem Zahlungsziel aber erst in einigen Wochen begleichen. Welche Finanzierungsart nutzt sie damit unbewusst?',
            options: ['Kundenkredit', 'Kontokorrentkredit', 'Haftungskredit', 'Lieferantenkredit'],
            correctIndex: 3,
            explanation: 'Beim Lieferantenkredit erhält der/die Kunde/Kundin bereits gelieferte Ware bzw. erbrachte Dienstleistung, zahlt aber erst später innerhalb des gewährten Zahlungsziels. Der Verkäufer gewährt dabei oft ein Skonto als Anreiz für eine schnellere Zahlung.',
          },
          {
            question: 'Ein Lieferant bietet folgende Zahlungskonditionen: \'8 Tage 3% Skonto, 30 Tage netto.\' Wird das Skonto nicht in Anspruch genommen, ergibt sich rechnerisch (nach der Formel Jahreszinssatz = Skonto in % ÷ (Zahlungsziel − Kassafrist in Tagen) × 360) ein Jahreszinssatz von rund:',
            options: ['49,09% p. a.', '3,00% p. a.', '36,00% p. a.', '24,55% p. a.'],
            correctIndex: 0,
            explanation: 'Jahreszinssatz = 3 ÷ (30 − 8) × 360 = 3 ÷ 22 × 360 ≈ 49,09% p. a. Ein Verzicht auf das Skonto ist damit rechnerisch sehr teuer - meist teurer als ein Bankkredit zur Vorfinanzierung der Skontozahlung.',
          },
          {
            question: 'Was versteht man unter Factoring?',
            options: ['Das Unternehmen nimmt einen langfristigen Bankkredit für Investitionen auf.', 'Ein Unternehmen verkauft seine Forderungen gegenüber Kunden vor Fälligkeit an eine Factorbank und erhält dadurch die offene Forderung früher (abzüglich Gebühren).', 'Das Unternehmen vermietet bewegliche Wirtschaftsgüter an andere Unternehmen.', 'Das Unternehmen vergibt selbst Kredite an seine eigenen Kunden.'],
            correctIndex: 1,
            explanation: 'Beim Factoring verkauft ein Unternehmen Forderungen an Kunden vor Fälligkeit an eine Factorbank und erhält dadurch die offene Forderung früher - abzüglich der Gebühren der Factorbank. Dabei wird zwischen offenem Factoring (Kunde wird informiert) und stillem Factoring (Kunde erfährt nichts) unterschieden.',
          },
          {
            question: 'Was unterscheidet Operating-Leasing von Finance-Leasing hauptsächlich?',
            options: ['Beim Operating-Leasing trägt stets der/die Leasingnehmer/in sämtliche Wartungs- und Risikokosten wie ein/e Eigentümer/in.', 'Finance-Leasing ist im Gegensatz zum Operating-Leasing jederzeit kurzfristig kündbar.', 'Operating- und Finance-Leasing unterscheiden sich vor allem hinsichtlich der Rechte und Pflichten des/der Leasingnehmers/in, z. B. bei Wartung und Risikotragung.', 'Leasing gilt laut Lehrbuch grundsätzlich als klassischer Kredit.'],
            correctIndex: 2,
            explanation: 'Leasing ist kein Kredit, sondern ein Vertrag über die entgeltliche Überlassung von Wirtschaftsgütern zur Nutzung. Operating-Leasing und Finance-Leasing unterscheiden sich vor allem hinsichtlich der Rechte und Pflichten des/der Leasingnehmers/in, etwa bei Wartung, Kündbarkeit und Risikotragung.',
          },
          {
            question: 'Was kennzeichnet Mezzaninkapital?',
            options: ['Eine Form der kurzfristigen Kontokorrentfinanzierung', 'Ausschließlich Eigenkapital, das von Business Angels bereitgestellt wird', 'Einen Kredit mit besonders niedrigem, fixem Zinssatz', 'Eine Mischung aus Eigen- und Fremdfinanzierung mit gewinnabhängiger Verzinsung, die im Insolvenzfall erst nach dem Fremdkapital (nachrangig) bedient wird'],
            correctIndex: 3,
            explanation: 'Mezzaninkapital ist eine Mischung aus Eigen- und Fremdfinanzierung: Es verlangt in der Regel weniger Sicherheiten, wird langfristig zur Verfügung gestellt, hat eine gewinnabhängige Verzinsung und ist bei Zahlungsschwierigkeiten (Insolvenz) erst nach Bedienung des Fremdkapitals anspruchsberechtigt (nachrangiges Kapital) - z. B. als Nachrangdarlehen, stille Beteiligung oder nachrangige Anleihe.',
          },
        ],
      },
      {
        id: 'finanzplan-analyse',
        title: 'Finanzplan & finanzwirtschaftliche Analyse',
        questions: [
          {
            question: 'Damit ein Unternehmen laut Buch langfristig liquide bleibt, muss langfristig gelten, dass...',
            options: ['die Summe der Auszahlungen größer als die Summe der Einzahlungen ist', 'die Summe der Einzahlungen größer oder gleich der Summe der Auszahlungen ist', 'das Eigenkapital größer als das Fremdkapital ist', 'der Cashflow konstant bei null liegt'],
            correctIndex: 1,
            explanation: 'Ein Unternehmen bleibt nur dann liquide, wenn langfristig gilt: Die Summe der Einzahlungen ist größer oder gleich der Summe der Auszahlungen. Andernfalls entsteht ein Fehlbetrag, der ausgeglichen werden muss.',
          },
          {
            question: 'Wie wird der Cashflow im Kapitel „Finanzplan und finanzwirtschaftliche Analyse" definiert?',
            options: ['als Summe aller offenen Kundenforderungen', 'als geplanter Jahresumsatz eines Unternehmens', 'als erwirtschafteter Zahlungsmittelüberschuss eines Unternehmens in einem bestimmten Zeitraum', 'als Differenz zwischen Anlage- und Umlaufvermögen'],
            correctIndex: 2,
            explanation: 'Der Cashflow ist der erwirtschaftete Zahlungsmittelüberschuss eines Unternehmens in einem bestimmten Zeitraum und dient als wichtiges Frühwarninstrument.',
          },
          {
            question: 'Welche Maßnahme empfiehlt das Buch bei einem Zahlungsmittelüberschuss im Finanzplan?',
            options: ['Verlängerung der Zahlungsziele mit Lieferanten', 'Aufnahme eines zusätzlichen Bankkredits', 'verstärkte Skontoausnutzung bei Lieferanten', 'Verkauf nicht benötigter Vermögenswerte'],
            correctIndex: 2,
            explanation: 'Bei einem Zahlungsmittelüberschuss kann u. a. verstärkt Skonto bei Lieferanten ausgenutzt werden. Verlängerte Zahlungsziele, zusätzliche Kredite und der Verkauf von Vermögenswerten sind dagegen Maßnahmen bei einem Fehlbetrag.',
          },
          {
            question: 'Welche Ausgleichsmaßnahme nennt das Buch bei einem drohenden Zahlungsmittelfehlbetrag?',
            options: ['Erhöhung der Privatentnahmen', 'Bildung offener Rücklagen', 'kurzfristige Geldanlage überschüssiger Mittel', 'Aufnahme von Bankkrediten'],
            correctIndex: 3,
            explanation: 'Bei einem Fehlbetrag kann u. a. ein Bankkredit aufgenommen werden. Erhöhte Privatentnahmen, Rücklagenbildung und Geldanlagen sind hingegen typische Maßnahmen bei einem Überschuss.',
          },
          {
            question: 'Wie hoch sollte laut Buch eine sinnvolle Liquiditätsreserve eines Unternehmens sein?',
            options: ['ein bis zwei Tagesauszahlungen', 'zwei bis drei durchschnittliche Monatsauszahlungen', 'ein volles Jahresbudget', 'genau die Höhe des Eigenkapitals'],
            correctIndex: 1,
            explanation: 'Eine Liquiditätsreserve in Höhe von zwei bis drei durchschnittlichen Monatsauszahlungen hilft laut Buch, Krisen durch Planungsfehler oder unvorhergesehene Ereignisse abzufedern.',
          },
          {
            question: 'Welchem Zweck dienen langfristige Finanzpläne, die laut Buch zwei bis sechs Jahre umfassen?',
            options: ['ausschließlich der Kontrolle der Kassenführung', 'der langfristigen Sicherung der Kreditwürdigkeit, der Planung der Kapitalstruktur und der Abstimmung größerer Investitionsvorhaben', 'der täglichen Überwachung der Kontostände', 'der Berechnung der Umsatzsteuervoranmeldung'],
            correctIndex: 1,
            explanation: 'Langfristige Finanzpläne (zwei bis sechs Jahre) dienen der Sicherung der Kreditwürdigkeit, der Planung der Kapitalstruktur und der Abstimmung größerer Investitionsvorhaben, während kurzfristige Pläne v. a. die Liquidität sichern.',
          },
          {
            question: 'Loopy stellt für ihren Candy Store einen Finanzplan fürs vierte Quartal auf. Der verfügbare Kontokorrentkredit im Beispiel des Buches beträgt...',
            options: ['80.000,00 EUR', '14.000,00 EUR', '40.000,00 EUR', '4.000,00 EUR'],
            correctIndex: 2,
            explanation: 'Im Business Case „Finanzplan" beträgt der verfügbare Kontokorrentkredit 40.000,00 EUR; er kann genutzt werden, um kurzfristige Fehlbeträge auszugleichen.',
          },
          {
            question: 'Im selben Business Case darf laut Vorgabe der Zahlungsmittelanfangsbestand am Beginn eines Monats einen bestimmten Betrag nicht unterschreiten. Wie hoch ist dieser Betrag?',
            options: ['83.000,00 EUR', '5.000,00 EUR', '55.000,00 EUR', '14.000,00 EUR'],
            correctIndex: 3,
            explanation: 'Der Zahlungsmittelanfangsbestand soll am Beginn eines jeden Monats 14.000,00 EUR nicht unterschreiten, damit die Liquidität gesichert bleibt.',
          },
          {
            question: 'In welche vier Gruppen werden die ausgewählten Kennzahlen zur finanzwirtschaftlichen Analyse im Buch eingeteilt?',
            options: ['Umsatz-, Kosten-, Gewinn- und Verlustkennzahlen', 'Kennzahlen der Vermögensstruktur, der Kapitalstruktur, erfolgswirtschaftliche Kennzahlen sowie Kennzahlen der Beziehung zwischen Vermögen und Kapital', 'Liquiditäts-, Rentabilitäts-, Wachstums- und Marktkennzahlen', 'Personal-, Sach-, Finanz- und Investitionskennzahlen'],
            correctIndex: 1,
            explanation: 'Das Buch unterscheidet Kennzahlen der Vermögensstruktur, der Kapitalstruktur, erfolgswirtschaftliche Kennzahlen sowie Kennzahlen der Beziehung zwischen Vermögen und Kapital.',
          },
          {
            question: 'Welche Aussage zur Anlagenintensität ist laut Buch korrekt?',
            options: ['Anlagenintensität = Umlaufvermögen / Gesamtvermögen × 100', 'Handelsbetriebe gelten typischerweise als umlaufintensiv, nicht als anlagenintensiv', 'Eine hohe Anlagenintensität erhöht immer die Flexibilität eines Unternehmens', 'Die Anlagenintensität wird unabhängig von der Branche immer gleich beurteilt'],
            correctIndex: 1,
            explanation: 'Handelsbetriebe, die Textilbranche, die Gastronomie oder Kreditinstitute mit hohem Forderungsanteil gelten als umlaufintensiv, während z. B. Industrie- oder Energieunternehmen anlagenintensiv sind. Die Formel lautet Anlagevermögen / Gesamtvermögen × 100.',
          },
          {
            question: 'Ab welcher Eigenkapitalquote gilt ein Unternehmen laut Buch als sehr gut kapitalisiert?',
            options: ['ab 5 %', 'ab 10 %', 'ab 20 %', 'ab 30 %'],
            correctIndex: 3,
            explanation: 'Die Eigenkapitalquote sollte mindestens 20 % betragen, ab 30 % gilt sie als sehr gut. Eine Quote unter 10 % gilt als kritisch, eine negative Quote bedeutet Insolvenzgefahr.',
          },
          {
            question: 'Wie berechnet sich der Verschuldungskoeffizient und welche Faustregel nennt das Buch?',
            options: ['Fremdkapital / Eigenkapital; ein Verhältnis von 1 : 2 gilt heute bereits als sehr gut', 'Eigenkapital / Fremdkapital; ein Verhältnis von 2 : 1 gilt als kritisch', 'Fremdkapital / Gesamtkapital; ein Wert über 100 % gilt als sehr gut', 'Eigenkapital / Gesamtkapital; ein Wert unter 20 % gilt als sehr gut'],
            correctIndex: 0,
            explanation: 'Verschuldungskoeffizient = Fremdkapital / Eigenkapital. Früher galt 1:1 als erstrebenswert, heute gilt 1:2 bereits als sehr gut und 1:3 als gut.',
          },
          {
            question: 'Welche fiktive Schuldentilgungsdauer stuft das Buch als „sehr gut" ein?',
            options: ['unter 3 Jahren', 'unter 7 Jahren', 'unter 15 Jahren', 'über 15 Jahren'],
            correctIndex: 0,
            explanation: 'Eine fiktive Schuldentilgungsdauer von unter drei Jahren gilt als sehr gut, unter fünf Jahren als gut. Ab 15 Jahren steigt laut Quicktest-Tabelle die Insolvenzgefahr.',
          },
          {
            question: 'Was besagt die „Goldene Finanzierungsregel" in Bezug auf die Anlagendeckung?',
            options: ['Der Anlagendeckungsgrad sollte mindestens 100 % betragen, damit das Anlagevermögen vollständig durch langfristiges Kapital gedeckt ist', 'Das Eigenkapital muss stets höher sein als das Fremdkapital', 'Die Liquidität 1. Grades sollte immer bei 100 % liegen', 'Kurzfristige Verbindlichkeiten dürfen niemals höher als 50 % des Umlaufvermögens sein'],
            correctIndex: 0,
            explanation: 'Der Anlagendeckungsgrad = (Eigenkapital + langfristiges Fremdkapital) / Anlagevermögen × 100 sollte mindestens 100 % betragen – das entspricht der Goldenen Finanzierungsregel.',
          },
          {
            question: 'In welchem Korridor sollte laut Buch die Liquidität 1. Grades (Barliquidität) idealerweise liegen?',
            options: ['zwischen 0 % und 10 %', 'zwischen 20 % und 50 %', 'zwischen 100 % und 120 %', 'zwischen 150 % und 200 %'],
            correctIndex: 1,
            explanation: 'Liquidität 1. Grades = Zahlungsmittel / kurzfristige Verbindlichkeiten × 100. Anzustreben sind Werte zwischen 20 % und 50 %; bei 100 % wären alle kurzfristigen Schulden sofort durch liquide Mittel gedeckt.',
          },
          {
            question: 'Welcher Sollwert wird im Buch für die Liquidität 3. Grades genannt?',
            options: ['50 % bis 100 %', '100 % bis 120 %', '150 % bis 200 %', 'genau 300 %'],
            correctIndex: 2,
            explanation: 'Die Liquidität 3. Grades (Zahlungsmittel + kurzfristige Forderungen + Vorräte, geteilt durch kurzfristige Verbindlichkeiten) sollte laut Buch zwischen 150 % und 200 % liegen.',
          },
          {
            question: 'Wie wird das Working Capital laut Buch berechnet?',
            options: ['Eigenkapital minus kurzfristige Verbindlichkeiten', 'Umlaufvermögen (ohne ARA) minus kurzfristige Verbindlichkeiten', 'Anlagevermögen minus langfristiges Fremdkapital', 'Gesamtkapital minus Fremdkapital'],
            correctIndex: 1,
            explanation: 'Working Capital = Umlaufvermögen (ohne ARA) − kurzfristige Verbindlichkeiten. Ein positiver Wert zeigt, dass ein Teil des Umlaufvermögens langfristig finanziert ist.',
          },
          {
            question: 'Loopy übernimmt für ihren Candy Store die Bilanzdaten aus dem Buch-Beispiel (Eigenkapital 558.000,00 EUR, Gesamtkapital 1.166.000,00 EUR). Wie hoch ist die Eigenkapitalquote?',
            options: ['87,39 %', '52,14 %', 'ca. 47,86 %', '103,43 %'],
            correctIndex: 2,
            explanation: 'Eigenkapitalquote = Eigenkapital / Gesamtkapital × 100 = 558.000,00 / 1.166.000,00 × 100 ≈ 47,86 %. 52,14 % entspricht der Fremdkapitalquote, 87,39 % der Anlagenintensität und 103,43 % dem Anlagendeckungsgrad desselben Beispiels.',
          },
        ],
      },
      {
        id: 'businessplan-3jg',
        title: 'Finanzplan professionell erstellen',
        questions: [
          {
            question: 'Welche Stellung nimmt die Finanzplanung laut Buch innerhalb eines Businessplans ein?',
            options: ['Sie ist nur ein optionaler Anhang ohne große Bedeutung', 'Sie ist neben der Executive Summary der wichtigste Teil, da Geldgeber diesen Bereich genau prüfen', 'Sie ersetzt die Executive Summary vollständig', 'Sie wird von Banken üblicherweise nicht beachtet'],
            correctIndex: 1,
            explanation: 'Die Finanzplanung ist laut Buch neben der Executive Summary der wichtigste Teil des Businessplans, weil potenzielle Geldgeber diesen Bereich besonders genau prüfen.',
          },
          {
            question: 'Worauf achten Geldgeber laut Buch bei der Finanzplanung unter anderem besonders?',
            options: ['ausschließlich auf die Ausstattung des Ladenlokals', 'auf den klar dargelegten Kapitalbedarf, wofür er benötigt wird und woher das Kapital kommen soll', 'auf die Anzahl der Social-Media-Follower', 'auf die Schriftart im Businessplan-Dokument'],
            correctIndex: 1,
            explanation: 'Geldgeber wie Banken oder Business Angels prüfen u. a. den Kapitalbedarf, realistische Umsatzprognosen, Renditeerwartungen und die Break-even-Analyse.',
          },
          {
            question: 'Was wird mit einer Break-even-Analyse laut Buch festgestellt?',
            options: ['die Höhe der fälligen Umsatzsteuer', 'bei welcher Ausbringungsmenge die Erlöse die Kosten übersteigen und das Unternehmen profitabel wirtschaftet', 'die Anzahl der benötigten Mitarbeiter/-innen', 'der optimale Standort für ein Unternehmen'],
            correctIndex: 1,
            explanation: 'Mit der Break-even-Analyse wird festgestellt, bei welcher Ausbringungsmenge bzw. welchem Umsatz die Erlöse die Kosten decken, sodass das Unternehmen profitabel wirtschaftet.',
          },
          {
            question: 'Welche vier Teilplanungen enthält ein Finanzplan im Businessplan laut Buch üblicherweise?',
            options: ['Marketingplanung, Standortplanung, Personalplanung, Steuerplanung', 'Umsatzplanung, Planung Sach- und Personalaufwand, Investitions- und Finanzierungsplanung, Erfolgs- und Liquiditätsplanung', 'SWOT-Analyse, Zielgruppenanalyse, Wettbewerbsanalyse, Standortanalyse', 'Bilanzplanung, GuV-Planung, Steuerplanung, Exit-Planung'],
            correctIndex: 1,
            explanation: 'Ein Finanzplan besteht üblicherweise aus Umsatzplanung, Planung Sach- und Personalaufwand, Investitions- und Finanzierungsplanung sowie Erfolgs- und Liquiditätsplanung.',
          },
          {
            question: 'Für welchen Zeitraum wird ein Finanzplan im Businessplan laut Buch üblicherweise erstellt?',
            options: ['für einen Monat', 'für drei bis fünf Jahre', 'für zehn bis zwanzig Jahre', 'nur für das laufende Quartal'],
            correctIndex: 1,
            explanation: 'Ein Finanzplan im Businessplan wird laut Buch üblicherweise für einen Planungshorizont von drei bis fünf Jahren erstellt.',
          },
          {
            question: 'Wie berechnet sich der Planumsatz laut Buch?',
            options: ['Fixkosten geteilt durch Deckungsbeitrag', 'Nettoverkaufspreis multipliziert mit der geplanten Absatzmenge', 'Wareneinsatz multipliziert mit der Anzahl der Öffnungstage', 'Eigenkapital multipliziert mit der Umschlagshäufigkeit'],
            correctIndex: 1,
            explanation: 'Planumsatz = Nettoverkaufspreis × geplante Absatzmenge. Der geplante Umsatz muss realistisch angesetzt werden, da er in viele weitere Teilplanungen einfließt.',
          },
          {
            question: 'Loopy plant für ihren Candy Store im ersten Geschäftsjahr mit 110 Kunden pro Öffnungstag, 300 Öffnungstagen im Jahr und einem Durchschnittskonsum von 4,50 EUR je Kunde – analog zum Buch-Beispiel. Wie hoch ist der Planerlös?',
            options: ['110.000,00 EUR', '148.500,00 EUR', '156.978,00 EUR', '135.000,00 EUR'],
            correctIndex: 1,
            explanation: 'Planerlös = 110 Kunden × 300 Öffnungstage × 4,50 EUR = 148.500,00 EUR (1. Geschäftsjahr). 156.978,00 EUR ist der Wert des 2. Geschäftsjahres nach Kundenzuwachs und Preissteigerung.',
          },
          {
            question: 'Mit welchen jährlichen Steigerungsraten rechnet das Buch-Beispiel für Kundenzuwachs bzw. Preise in den ersten drei Geschäftsjahren?',
            options: ['10 % Kundenzuwachs und 5 % Inflation', '4 % Kundenzuwachs und 2 % Inflation', '2 % Kundenzuwachs und 4 % Inflation', '0 % Kundenzuwachs und 3 % Inflation'],
            correctIndex: 1,
            explanation: 'Im Business Case wird ein jährlicher Kundenzuwachs von 4 % vorsichtig geschätzt und bei den Verkaufspreisen mit einer Inflationsrate von 2 % gerechnet.',
          },
          {
            question: 'Wie werden erhaltene, nicht rückzahlbare Subventionen (z. B. 8.000,00 EUR für Investitionen) laut Buch buchhalterisch behandelt?',
            options: ['sie werden sofort in voller Höhe als Ertrag verbucht', 'sie werden über die Nutzungsdauer verteilt und jährlich anteilig als sonstiger Ertrag erfasst', 'sie mindern direkt das Eigenkapital', 'sie werden nie in der Gewinn- und Verlustrechnung erfasst'],
            correctIndex: 1,
            explanation: 'Subventionen werden laut Buchhaltung über die Nutzungsdauer verteilt und jährlich anteilig (im Beispiel 8.000,00 EUR / 5 Jahre = 1.600,00 EUR) als „sonstige Erträge" erfasst.',
          },
          {
            question: 'Welche Eigenkapitalquote verlangen Banken laut Buch bei der Kreditvergabe meist mindestens?',
            options: ['5 %', '10 %', '20 %', '50 %'],
            correctIndex: 2,
            explanation: 'Laut Buch gilt: Eigenkapital ist wichtig, um Fremdkapital zu beschaffen. Banken verlangen bei der Kreditvergabe meist eine Eigenkapitalquote von mindestens 20 %.',
          },
          {
            question: 'Wie werden laut Buch die Zinsen eines Kontokorrentkredits berechnet?',
            options: ['nur auf den tatsächlich ausgenutzten Kreditbetrag', 'vom vollen Kreditrahmen, auch wenn der Kredit nicht komplett genutzt wird', 'ausschließlich auf Basis des Vorjahresgewinns', 'sie fallen bei einem Kontokorrentkredit generell nicht an'],
            correctIndex: 1,
            explanation: 'Die Zinskosten eines Kontokorrentkredits werden laut Buch vom vollen Kreditrahmen berechnet, selbst wenn der Kredit nicht vollständig ausgenutzt wird.',
          },
          {
            question: 'Worin unterscheiden sich Erfolgsplanung und Liquiditätsplanung laut Buch grundlegend?',
            options: ['Sie sind inhaltlich identisch', 'Die Erfolgsplanung zeigt Erträge und Aufwände, die Liquiditätsplanung zeigt tatsächliche Zahlungsmittelzu- und -abflüsse', 'Die Liquiditätsplanung betrifft nur das Eigenkapital', 'Die Erfolgsplanung wird nur einmalig bei der Gründung erstellt'],
            correctIndex: 1,
            explanation: 'Die Erfolgsplanung (Plan-GuV) stellt Erträge und Aufwände gegenüber, während die Liquiditätsplanung zeigt, ob genügend Zahlungsmittel für die laufenden Verpflichtungen vorhanden sind – ein buchhalterischer Gewinn ist nicht automatisch mit Zahlungsmitteln gleichzusetzen.',
          },
          {
            question: 'Welches Beispiel nennt das Buch dafür, dass eine Auszahlung stattfindet, ohne dass ein buchhalterischer Aufwand entsteht?',
            options: ['die Abschreibung eines Anlagegegenstandes', 'die Rückzahlung eines Kredits bzw. eine Privatentnahme', 'ein Warenverkauf auf Ziel', 'die Verbuchung von sonstigen Erträgen'],
            correctIndex: 1,
            explanation: 'Bei der Rückzahlung eines Kredits sowie bei Privatentnahmen kommt es laut Buch zu einer Auszahlung, aber zu keinem buchhalterischen Aufwand.',
          },
          {
            question: 'Wie definiert das Buch den Mindestumsatz (Break-even-Point)?',
            options: ['jenen Umsatz, bei dem der maximale Gewinn erzielt wird', 'jenen Punkt, an dem die Erträge die Kosten vollständig decken und weder Gewinn noch Verlust entsteht', 'den Umsatz des ersten Verkaufstages', 'den durchschnittlichen Jahresumsatz der Branche'],
            correctIndex: 1,
            explanation: 'Der Mindestumsatz (Break-even-Point/Gewinnschwelle) markiert jenen Punkt, bei dem die Erträge die Kosten vollständig decken und weder Gewinn noch Verlust entsteht.',
          },
          {
            question: 'Wie wird die DBU-Quote (Deckungsbeitragsquote) laut Buch berechnet?',
            options: ['Fixkosten / Umsatz × 100', 'Deckungsbeitrag / Umsatz × 100', 'Umsatz / Fixkosten × 100', 'variable Kosten / Deckungsbeitrag × 100'],
            correctIndex: 1,
            explanation: 'DBU-Quote = Deckungsbeitrag / Umsatz × 100. Der Break-even-Umsatz ergibt sich anschließend aus Fixkosten / DBU-Quote.',
          },
          {
            question: 'Loopy berechnet für ihren Candy Store (analog zum Café-Beispiel im Buch) bei Fixkosten von 86.900,00 EUR und einer DBU-Quote von 64,98 % den Break-even-Umsatz. Welcher Betrag ergibt sich?',
            options: ['86.900,00 EUR', 'ca. 133.733,46 EUR', '148.500,00 EUR', 'ca. 96.500,00 EUR'],
            correctIndex: 1,
            explanation: 'Break-even-Umsatz = Fixkosten / DBU-Quote = 86.900,00 / 0,6498 ≈ 133.733,46 EUR. Erst ab diesem Umsatz sind auch Privatentnahmen und Einkommensteuer gedeckt.',
          },
          {
            question: 'Was zählt bei Einzelunternehmen laut Buch zu den Fixkosten, die in die Break-even-Berechnung einfließen?',
            options: ['ausschließlich der Wareneinsatz', 'ein fiktiver Unternehmerlohn, der Privatentnahmen und Einkommensteuer beinhaltet', 'nur die Abschreibungen', 'die künftig erwarteten Gewinnsteigerungen'],
            correctIndex: 1,
            explanation: 'In Einzelunternehmen und Personengesellschaften wird häufig ein fiktiver Unternehmerlohn angesetzt, der die Lebenshaltungskosten (Privatentnahmen) und die Einkommensteuer der Eigentümer/-innen umfasst.',
          },
          {
            question: 'Im Beispiel der Bäckerei Laurent-Gerhard GmbH werden Backöfen und Küchengeräte im Wert von 20.000,00 EUR über 10 Jahre Nutzungsdauer abgeschrieben. Wie hoch ist die jährliche Abschreibung?',
            options: ['20.000,00 EUR', '4.000,00 EUR', '2.000,00 EUR', '1.000,00 EUR'],
            correctIndex: 2,
            explanation: 'Jährliche Abschreibung = Anschaffungswert / Nutzungsdauer = 20.000,00 EUR / 10 Jahre = 2.000,00 EUR.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: '4. Jahrgang',
    color: 'yellow',
    topics: [
      {
        id: 'kosten-leistungsrechnung',
        title: 'Kosten- & Leistungsrechnung',
        questions: [
          {
            question: 'Was zeigt der Deckungsbeitrag an?',
            options: [
              'Den Unterschied zwischen Erlös und variablen Kosten je Stück/gesamt',
              'Den Gesamtgewinn des Unternehmens',
              'Die Höhe der Fixkosten',
              'Den Umsatz eines Jahres',
            ],
            correctIndex: 0,
            explanation:
              'Der Deckungsbeitrag = Erlös − variable Kosten. Er zeigt, was zur Deckung der Fixkosten und zum Gewinn beiträgt.',
          },
          {
            question: 'Was beschreibt der Break-Even-Point?',
            options: [
              'Den Punkt, an dem der Gewinn maximal ist',
              'Die Absatzmenge, bei der Erlöse und Gesamtkosten gleich hoch sind (Gewinnschwelle)',
              'Den Zeitpunkt der Unternehmensgründung',
              'Den höchsten Marktpreis',
            ],
            correctIndex: 1,
            explanation:
              'Am Break-Even-Point (Gewinnschwelle) decken die Erlöse genau die Gesamtkosten, der Gewinn ist gleich null.',
          },
          {
            question: 'Wozu dient die Kostenstellenrechnung?',
            options: [
              'Um Kosten verursachungsgerecht auf betriebliche Bereiche zu verteilen',
              'Um nur den Jahresumsatz zu berechnen',
              'Um Löhne auszuzahlen',
              'Um Steuererklärungen abzugeben',
            ],
            correctIndex: 0,
            explanation:
              'Die Kostenstellenrechnung verteilt Gemeinkosten verursachungsgerecht auf die betrieblichen Bereiche (Kostenstellen).',
          },
        ],
      },
      {
        id: 'bilanzierung',
        title: 'Bilanzierung',
        questions: [
          {
            question: 'Wie sind die zwei Seiten einer Bilanz benannt?',
            options: [
              'Soll und Haben',
              'Aktiva und Passiva',
              'Ertrag und Aufwand',
              'Brutto und Netto',
            ],
            correctIndex: 1,
            explanation: 'Die Bilanz gliedert sich in Aktiva (Vermögen) und Passiva (Eigen- und Fremdkapital).',
          },
          {
            question: 'Was zeigt die Gewinn- und Verlustrechnung (GuV)?',
            options: [
              'Nur das Vermögen zu einem Stichtag',
              'Erträge und Aufwendungen einer Periode und daraus den Erfolg (Gewinn/Verlust)',
              'Nur die liquiden Mittel',
              'Die Anzahl der Mitarbeiter',
            ],
            correctIndex: 1,
            explanation:
              'Die GuV stellt Erträge und Aufwendungen einer Periode gegenüber und ermittelt so den Periodenerfolg.',
          },
          {
            question: 'Was besagt das Vorsichtsprinzip in der Bilanzierung?',
            options: [
              'Gewinne dürfen beliebig hoch geschätzt werden',
              'Verluste/Risiken sind bereits zu berücksichtigen, Gewinne erst bei Realisierung',
              'Es muss immer der höchstmögliche Wert angesetzt werden',
              'Schulden dürfen ausgeblendet werden',
            ],
            correctIndex: 1,
            explanation:
              'Das Vorsichtsprinzip verlangt, Risiken und Verluste bereits zu berücksichtigen, während Gewinne erst bei tatsächlicher Realisierung ausgewiesen werden.',
          },
        ],
      },
      {
        id: 'steuern-controlling',
        title: 'Steuern & Controlling',
        questions: [
          {
            question: 'Was ist die Umsatzsteuer (USt) aus Sicht des Unternehmens meist?',
            options: [
              'Eine endgültige Kostenbelastung für das Unternehmen',
              'Ein durchlaufender Posten, der an das Finanzamt weitergeleitet wird',
              'Ein Teil des Gewinns',
              'Eine freiwillige Zahlung',
            ],
            correctIndex: 1,
            explanation:
              'Die USt wird vom Unternehmen eingehoben und (abzüglich Vorsteuer) an das Finanzamt abgeführt – sie ist im Regelfall ein durchlaufender Posten.',
          },
          {
            question: 'Was ist die Hauptaufgabe des Controllings?',
            options: [
              'Nur die Kontrolle der Mitarbeiter',
              'Planung, Steuerung und Kontrolle betrieblicher Abläufe anhand von Kennzahlen',
              'Ausschließlich Buchhaltung',
              'Werbung schalten',
            ],
            correctIndex: 1,
            explanation:
              'Controlling unterstützt die Unternehmensführung durch Planung, Steuerung und Kontrolle mithilfe von Kennzahlen und Analysen.',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: '5. Jahrgang',
    color: 'green',
    topics: [
      {
        id: 'unternehmensfuehrung',
        title: 'Unternehmensführung & Management',
        questions: [
          {
            question: 'Was umfasst der Managementprozess klassischerweise?',
            options: [
              'Planung, Organisation, Führung und Kontrolle',
              'Nur Kontrolle',
              'Nur Buchhaltung',
              'Nur Werbung',
            ],
            correctIndex: 0,
            explanation:
              'Der klassische Managementprozess umfasst Planung, Organisation, Personaleinsatz/Führung und Kontrolle.',
          },
          {
            question: 'Was ist eine SWOT-Analyse?',
            options: [
              'Eine reine Finanzkennzahl',
              'Eine Analyse von Stärken, Schwächen, Chancen und Risiken',
              'Ein Buchhaltungskonto',
              'Eine Marketingkampagne',
            ],
            correctIndex: 1,
            explanation:
              'SWOT steht für Strengths, Weaknesses, Opportunities, Threats – also Stärken, Schwächen, Chancen und Risiken.',
          },
          {
            question: 'Was versteht man unter "Corporate Social Responsibility" (CSR)?',
            options: [
              'Die gesetzliche Buchführungspflicht',
              'Die gesellschaftliche Verantwortung von Unternehmen (z. B. Umwelt, Soziales)',
              'Eine Form der Preispolitik',
              'Ein Steuerbegriff',
            ],
            correctIndex: 1,
            explanation:
              'CSR beschreibt die freiwillige Übernahme gesellschaftlicher und ökologischer Verantwortung durch Unternehmen.',
          },
        ],
      },
      {
        id: 'internationalisierung',
        title: 'Internationalisierung & Außenhandel',
        questions: [
          {
            question: 'Was ist ein Exportgeschäft?',
            options: [
              'Verkauf von Waren/Dienstleistungen ins Ausland',
              'Kauf von Waren aus dem Ausland',
              'Verkauf nur innerhalb Österreichs',
              'Eine Form der Lagerhaltung',
            ],
            correctIndex: 0,
            explanation: 'Beim Export werden Güter oder Dienstleistungen ins Ausland verkauft.',
          },
          {
            question: 'Was ist ein Vorteil der Internationalisierung für Unternehmen?',
            options: [
              'Garantiert geringeres unternehmerisches Risiko',
              'Erschließung neuer Märkte und Absatzpotenziale',
              'Automatisch niedrigere Kosten in jedem Fall',
              'Keine Notwendigkeit für Marktforschung',
            ],
            correctIndex: 1,
            explanation:
              'Internationalisierung eröffnet neue Märkte und Wachstumschancen, bringt aber auch neue Risiken (z. B. Währungsrisiko).',
          },
          {
            question: 'Was regeln Incoterms im internationalen Handel?',
            options: [
              'Steuerliche Vorschriften eines Landes',
              'Standardisierte Lieferbedingungen (z. B. Kosten- und Risikoübergang)',
              'Löhne von Mitarbeitern',
              'Wechselkurse',
            ],
            correctIndex: 1,
            explanation:
              'Incoterms sind international standardisierte Regeln zu Liefer- und Transportbedingungen, u. a. wer Kosten und Risiko trägt.',
          },
        ],
      },
      {
        id: 'businessplan',
        title: 'Unternehmensgründung & Businessplan',
        questions: [
          {
            question: 'Was ist der Zweck eines Businessplans?',
            options: [
              'Ausschließlich zur Beantragung eines Reisepasses',
              'Ein schriftliches Konzept zur Planung und Darstellung einer Geschäftsidee, u. a. für Investoren/Banken',
              'Eine Werbebroschüre für Kunden',
              'Ein interner Urlaubsplan',
            ],
            correctIndex: 1,
            explanation:
              'Ein Businessplan beschreibt systematisch eine Geschäftsidee inkl. Markt-, Finanz- und Organisationsplanung, u. a. für Banken oder Investoren.',
          },
          {
            question: 'Was gehört typischerweise NICHT in einen Businessplan?',
            options: [
              'Marktanalyse',
              'Finanzplanung',
              'Private Urlaubsfotos',
              'Beschreibung der Geschäftsidee',
            ],
            correctIndex: 2,
            explanation:
              'Ein Businessplan enthält u. a. Geschäftsidee, Markt- und Finanzplanung – private, themenfremde Inhalte gehören nicht hinein.',
          },
        ],
      },
    ],
  },
]

export function getJahrgang(id) {
  return jahrgaenge.find((j) => j.id === Number(id))
}

export function getTopic(jahrgangId, topicId) {
  const jahrgang = getJahrgang(jahrgangId)
  return jahrgang?.topics.find((t) => t.id === topicId)
}

// Große Kapitel ("Teile") innerhalb eines Jahrgangs. Jahrgänge, für die es noch
// keine echte Kapitel-Gliederung aus dem Buch gibt, bekommen automatisch ein
// einziges Sammel-Kapitel mit allen Themen, damit die Navigation überall gleich
// funktioniert (und in dem Fall auch automatisch übersprungen werden kann).
export function getKapitelList(jahrgangId) {
  const jahrgang = getJahrgang(jahrgangId)
  if (!jahrgang) return []
  if (jahrgang.kapitel && jahrgang.kapitel.length > 0) return jahrgang.kapitel
  return [{ id: 'alle-themen', title: 'Alle Themen', topicIds: jahrgang.topics.map((t) => t.id) }]
}

export function getKapitel(jahrgangId, kapitelId) {
  return getKapitelList(jahrgangId).find((k) => k.id === kapitelId)
}

export function getKapitelTopics(jahrgangId, kapitelId) {
  const jahrgang = getJahrgang(jahrgangId)
  const kapitel = getKapitel(jahrgangId, kapitelId)
  if (!jahrgang || !kapitel) return []
  return kapitel.topicIds.map((id) => jahrgang.topics.find((t) => t.id === id)).filter(Boolean)
}

// Mit `lang` werden vorhandene Übersetzungen genutzt (Fallback: Deutsch).
export function getKapitelQuestions(jahrgangId, kapitelId, lang = 'de') {
  return getKapitelTopics(jahrgangId, kapitelId).flatMap((t) => questionsOf(t, lang).questions)
}
