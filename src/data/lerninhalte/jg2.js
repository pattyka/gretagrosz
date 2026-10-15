// Lerninhalte 2. Jahrgang (siehe ../lerninhalte.js für die Block-Typen)

export default {
'unternehmer-firma-firmenbuch': {
    schritte: [
      {
        titel: 'Wer ist ein Unternehmer?',
        blocks: [
          {
            type: 'begriff',
            term: 'Unternehmer (UGB)',
            erklaerung: 'Wer allein oder mit anderen ein Unternehmen betreibt.',
          },
          {
            type: 'begriff',
            term: 'Unternehmen',
            erklaerung: 'Jede auf Dauer angelegte Organisation mit selbstständiger wirtschaftlicher Tätigkeit – auch wenn sie nicht auf Gewinn aus ist.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Natürliche Personen', punkte: ['Lebende Menschen', 'z. B. Einzelunternehmer'] },
            rechts: { titel: 'Juristische Personen', punkte: ['Per Gesetz gegründete Organisationen (z. B. GmbH, AG)', 'Gleiche Rechte & Pflichten', 'Vertreten durch Menschen = Organe'] },
          },
          { type: 'merke', text: 'Auch Land- und Forstwirte, freie Berufe (Arzt, Anwalt) und Neue Selbstständige (Künstler) gelten als Unternehmer.' },
        ],
      },
      {
        titel: 'Was ist eine Firma?',
        blocks: [
          {
            type: 'begriff',
            term: 'Firma',
            erklaerung: 'Der ins Firmenbuch eingetragene Name, unter dem der Unternehmer Geschäfte macht, unterschreibt und klagt/geklagt wird.',
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'frei wählbar', wert: 'Firmenkern' },
              { titel: 'Rechtsform', wert: '+ Firmenzusatz' },
              { titel: 'Beispiel', wert: 'Red Bull GmbH' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Art', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Personenfirma', 'Name des Unternehmers', 'Thomas Radler e. U.'],
              ['Sachfirma', 'Hinweis auf den Gegenstand', 'Österreichische Post AG'],
              ['Fantasiefirma', 'erfundener Name', 'Red Bull GmbH'],
              ['Gemischte Firma', 'Mischung', 'Max Steindl Immobilien OG'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Vorschrift', 'Bedeutung'],
            zeilen: [
              ['Kennzeichnungseignung', 'lesbar, aussprechbar, wirkt wie ein Name'],
              ['Unterscheidungskraft', 'muss sich von Firmen am gleichen Ort klar unterscheiden (z. B. „Karl Huber jun. e. U.“)'],
              ['Irreführungsverbot', 'keine falschen Angaben (kein „KFZ“, wenn nur Motorräder)'],
            ],
          },
          { type: 'merke', text: 'Bei Unternehmenskauf/Erbschaft darf der alte Firmenname weitergeführt werden, wenn der frühere Inhaber zustimmt. Nicht im Firmenbuch → Unternehmensbezeichnung statt Firma.' },
        ],
      },
      {
        titel: 'Firmenbuch',
        blocks: [
          {
            type: 'begriff',
            term: 'Firmenbuch',
            erklaerung: 'Öffentliches EDV-Verzeichnis mit den wichtigsten Infos über Unternehmen. Geführt von den Firmenbuchgerichten.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Eintragung verpflichtend', punkte: ['Einzelunternehmen ab 1 Mio. € Umsatz (oder 2 Jahre je 700.000 €)', 'Kapitalgesellschaften (GmbH, AG)', 'Personengesellschaften (OG, KG)', 'Genossenschaften'] },
            rechts: { titel: 'Eintragung freiwillig', punkte: ['Kleinere Einzelunternehmen', 'Freie Berufe', 'Land- und Forstwirtschaft (Einzelunternehmer)'] },
          },
          {
            type: 'vergleich',
            frage: 'Das Firmenbuch besteht aus:',
            links: { titel: 'Hauptbuch', punkte: ['Firmenname, Firmenbuchnummer', 'Rechtsform, Sitz, Geschäftszweig', 'Inhaber/Gesellschafter', 'Datum der Eintragung'] },
            rechts: { titel: 'Urkundensammlung', punkte: ['Gesellschaftsvertrag', 'Musterunterschriften', 'Bilanz', 'Gesellschafterbeschlüsse'] },
          },
          {
            type: 'begriff',
            term: 'Veröffentlichung & Einsicht',
            erklaerung: 'Neueinträge erscheinen in der Ediktsdatei und auf der EVI. Jeder kann einen Firmenbuchauszug beantragen (Gericht, Notar, Anwalt oder online).',
          },
          { type: 'merke', text: 'Eingetragene Unternehmen müssen in Briefen, E-Mails und im Impressum Firmenname, Rechtsform, Firmenbuchnummer, -gericht und Sitz angeben. Der Eintrag schützt den Firmennamen.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Unternehmer',
        punkte: [
          'Unternehmer = betreibt ein Unternehmen (dauerhaft, selbstständig, wirtschaftlich)',
          'Natürliche Personen (Menschen) ↔ juristische Personen (Organisationen, vertreten durch Organe)',
        ],
      },
      {
        titel: 'Firma',
        punkte: [
          'Firma = Name im Firmenbuch = Firmenkern + Firmenzusatz',
          'Personen-, Sach-, Fantasie-, gemischte Firma',
          'Vorschriften: Kennzeichnungseignung, Unterscheidungskraft, Irreführungsverbot',
          'Fortführung bei Erwerb mit Zustimmung möglich',
        ],
      },
      {
        titel: 'Firmenbuch',
        punkte: [
          'Öffentliches EDV-Verzeichnis, geführt von Firmenbuchgerichten',
          'Pflicht: Einzelunternehmen > 1 Mio. €/2× 700.000 €, OG, KG, GmbH, AG, Genossenschaft',
          'Hauptbuch (Daten) + Urkundensammlung (Dokumente)',
          'Veröffentlichung: Ediktsdatei, EVI · Einsicht für jeden',
        ],
      },
    ],
  },
'rechtsformen-unternehmen': {
    schritte: [
      {
        titel: 'Kriterien & Überblick',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Kriterium', 'Frage'],
            zeilen: [
              ['Anzahl der Eigentümer', 'Allein oder mit Partnern?'],
              ['Kapitalaufbringung', 'Gibt es ein Mindestkapital?'],
              ['Haftung', 'Wer haftet wie für Schulden?'],
              ['Leitungsbefugnis/Kontrolle', 'Wer führt, wer kontrolliert?'],
              ['Erfolgsverteilung', 'Wer bekommt Gewinn/trägt Verlust?'],
              ['Art der Buchführung', 'E/A-Rechnung oder doppelt?'],
              ['Ertragsteuerliche Belastung', 'Wie viel Steuer, von wem?'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Haftungsart', 'Bedeutung'],
            zeilen: [
              ['Beschränkt (Teilhaftung)', 'nur bis zu einem bestimmten Betrag (Haftsumme)'],
              ['Unbeschränkt (Vollhaftung)', 'auch mit dem gesamten Privatvermögen'],
              ['Unmittelbar (direkt)', 'Gläubiger kann sofort den Gesellschafter belangen'],
              ['Solidarisch', 'jeder haftet für ALLE Schulden; Gläubiger wählt aus'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Gruppe', 'Rechtsformen', 'Schwerpunkt'],
            zeilen: [
              ['Einzelunternehmen', 'e. U. / nicht eingetragen', '1 Person'],
              ['Personengesellschaften', 'OG, KG, Stille Gesellschaft, GesbR', 'persönliche Mitarbeit'],
              ['Kapitalgesellschaften', 'GmbH, AG, FlexKapG', 'gemeinsames Kapital'],
              ['Sonderform', 'Genossenschaft', 'Förderung der Mitglieder'],
              ['Mischform', 'GmbH & Co KG', 'Vorteile kombiniert'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Form', 'Ertragsteuer'],
            zeilen: [
              ['Einzelunternehmer', 'ESt (bis 55 %)'],
              ['Personengesellschaft', 'Gesellschafter zahlen ESt'],
              ['Kapitalgesellschaft', 'Gesellschaft 23 % KöSt + Gesellschafter 27,5 % KESt auf Ausschüttungen'],
            ],
          },
          { type: 'merke', text: 'Tod/Konkurs eines Gesellschafters löst Einzelunternehmen und Personengesellschaften auf – Kapitalgesellschaften und Genossenschaften NICHT.' },
        ],
      },
      {
        titel: 'Einzelunternehmen',
        blocks: [
          {
            type: 'begriff',
            term: 'Einzelunternehmen',
            erklaerung: 'Eine Person ist Alleineigentümer. Entsteht mit der Gewerbeanmeldung. Häufigste Rechtsform (über 70 %).',
          },
          {
            type: 'tabelle',
            spalten: ['Kriterium', 'Regel'],
            zeilen: [
              ['Kapital', 'kein Mindestkapital'],
              ['Haftung', 'Vollhafter: persönlich, unbeschränkt'],
              ['Leitung', 'allein'],
              ['Erfolg', 'Gewinn und Verlust allein'],
              ['Steuer', 'ESt'],
              ['Firmenbuch', 'ab 1 Mio. € (2× 700.000 €) Pflicht → e. U.'],
            ],
          },
          {
            type: 'vergleich',
            links: { titel: 'Vorteile', punkte: ['Rasche, einfache Gründung', 'Kein Mindestkapital', 'Gewinn nicht teilen', 'Entscheidungsfreiheit'] },
            rechts: { titel: 'Nachteile', punkte: ['Unbeschränkte Haftung', 'Viel Verantwortung', 'Keine Vertretung bei Krankheit', 'Schwierige Fremdfinanzierung'] },
          },
        ],
      },
      {
        titel: 'OG & KG',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['', 'Offene Gesellschaft (OG)', 'Kommanditgesellschaft (KG)'],
            zeilen: [
              ['Gründer', 'mind. 2 Vollhafter', 'mind. 1 Komplementär (Vollhafter) + 1 Kommanditist (Teilhafter)'],
              ['Gründung', 'Gesellschaftsvertrag + Firmenbuch', 'Gesellschaftsvertrag + Firmenbuch'],
              ['Mindestkapital', 'keines', 'keines'],
              ['Haftung', 'alle persönlich, unbeschränkt, unmittelbar, solidarisch', 'Komplementär wie OG; Kommanditist nur bis Haftsumme'],
              ['Leitung', 'alle Gesellschafter', 'Komplementäre; Kommanditist nur Kontrollrecht'],
              ['Erfolg', 'laut Gesellschaftsvertrag (sonst UGB)', 'laut Gesellschaftsvertrag'],
              ['Steuer', 'Gesellschafter zahlen ESt', 'Gesellschafter zahlen ESt'],
            ],
          },
          {
            type: 'begriff',
            term: 'Wettbewerbsverbot',
            erklaerung: 'Ein OG-Gesellschafter (bzw. Komplementär) darf ohne Zustimmung keine Geschäfte im selben Geschäftszweig machen.',
          },
          { type: 'merke', text: 'Wer aus einer OG ausscheidet, haftet noch 5 Jahre für alte Schulden. Die KG passt, wenn einer arbeiten und ein anderer nur Geld geben will.' },
        ],
      },
      {
        titel: 'Stille Gesellschaft & GesbR',
        blocks: [
          {
            type: 'begriff',
            term: 'Stille Gesellschaft',
            erklaerung: 'Vertragliche Beteiligung eines stillen Gesellschafters mit einer Vermögenseinlage an einem bestehenden Unternehmen. Keine eigene Rechtsform, nicht im Firmenbuch – nach außen unsichtbar.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Stiller Gesellschafter', punkte: ['Haftet nur bis zur Einlage', 'Keine Leitung, nur Kontrollrecht', 'Gewinnbeteiligt, Verlust max. bis Einlage', 'Steuer: ESt'] },
            rechts: { titel: 'Vorteil für Unternehmen', punkte: ['Kapital und Know-how', 'Ohne die Leitung zu teilen'] },
          },
          {
            type: 'begriff',
            term: 'Gesellschaft bürgerlichen Rechts (GesbR)',
            erklaerung: 'Mind. 2 Personen/Unternehmen mit gemeinsamem Zweck. Nicht im Firmenbuch, kein Mindestkapital, alle haften unbeschränkt und solidarisch.',
            beispiel: 'Arbeitsgemeinschaft für ein Bauprojekt (Autobahn, Windpark)',
          },
          { type: 'merke', text: 'Überschreitet eine GesbR die Umsatzgrenzen, muss sie in OG oder KG umgewandelt werden.' },
        ],
      },
      {
        titel: 'GmbH',
        blocks: [
          {
            type: 'begriff',
            term: 'Kapitalgesellschaft',
            erklaerung: 'Juristische Person mit eigener Rechtspersönlichkeit: kann Rechte erwerben, Verträge schließen, klagen und geklagt werden.',
          },
          {
            type: 'tabelle',
            spalten: ['Kriterium', 'GmbH'],
            zeilen: [
              ['Gründer', 'mind. 1 Person, Gesellschaftsvertrag'],
              ['Gründung', 'traditionell (Notariatsakt) oder vereinfacht (Ein-Personen-GmbH online)'],
              ['Stammkapital', 'mind. 10.000 €, Hälfte sofort bar; Stammeinlage mind. 70 €'],
              ['Haftung', 'GmbH mit Gesellschaftsvermögen; Gesellschafter nur bis zur Stammeinlage'],
              ['Steuer', '23 % KöSt (auch Mindest-KöSt) + 27,5 % KESt auf Ausschüttung ≈ 44,175 %'],
            ],
          },
          {
            type: 'organe',
            oben: { name: 'Generalversammlung', punkte: ['Alle Gesellschafter', 'Mind. 1× pro Jahr', 'Stimmrecht nach Stammeinlage', 'Beschließt Erfolgsverteilung'] },
            links: { name: 'Aufsichtsrat', punkte: ['Kontrolliert Geschäftsführung', 'Nur Pflicht ab > 70.000 € Kapital und > 50 Gesellschaftern oder > 300 Mitarbeitern'] },
            rechts: { name: 'Geschäftsführer', punkte: ['Mind. 1 natürliche Person', 'Leitung & Vertretung', 'Jahresabschluss', 'Beruft Generalversammlung ein'] },
            pfeile: { links: 'wählt', rechts: 'bestellt', unten: 'Aufsichtsrat → kontrolliert → Geschäftsführer' },
          },
          {
            type: 'begriff',
            term: 'Rücklagen & Nachschusspflicht',
            erklaerung: 'Rücklagen = einbehaltene Gewinne. Nachschusspflicht = zusätzliche Einzahlungen der Gesellschafter bei Verlust (wenn im Vertrag vereinbart).',
          },
          {
            type: 'vergleich',
            links: { titel: 'Vorteile', punkte: ['Haftung auf Stammeinlage beschränkt', 'Gründung durch 1 Person', 'Kein Wettbewerbsverbot für reine Kapitalgeber', 'Günstigere Steuer bei hohen Gewinnen'] },
            rechts: { titel: 'Nachteile', punkte: ['Hohe Gründungskosten', 'Aufwendige Gründung', 'Immer Bilanzierungspflicht', 'Begrenzte Kreditfähigkeit'] },
          },
        ],
      },
      {
        titel: 'AG',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Kriterium', 'Aktiengesellschaft (AG)'],
            zeilen: [
              ['Gründer', 'mind. 1 Person, Satzung (Notariatsakt)'],
              ['Grundkapital', 'mind. 70.000 €, ¼ bei Gründung einzahlen; durch Ausgabe von Aktien'],
              ['Haftung', 'AG mit Grundkapital; Aktionär nur mit seinem Aktienanteil'],
              ['Erfolg', 'Hauptversammlung beschließt: Rücklage (5 % bis 10 % des Grundkapitals) + Dividende'],
              ['Steuer', '23 % KöSt (Mindest-KöSt 3.500 €) + 27,5 % KESt auf Dividenden'],
            ],
          },
          {
            type: 'begriff',
            term: 'Aktie & Dividende',
            erklaerung: 'Aktie = Wertpapier für einen Anteil am Grundkapital. Dividende = Gewinnanteil, der an Aktionäre ausgeschüttet wird.',
            beispiel: 'Nennbetrag = Grundkapital / Anzahl der Aktien',
          },
          {
            type: 'organe',
            oben: { name: 'Hauptversammlung', punkte: ['Alle Aktionäre, mind. 1× pro Jahr', 'Wählt Aufsichtsrat (max. 4 Jahre)', 'Entscheidet über Dividende', 'Wählt Abschlussprüfer'] },
            links: { name: 'Aufsichtsrat', punkte: ['3–20 Mitglieder', 'Bestellt Vorstand (max. 5 Jahre)', 'Kontrolliert Vorstand'] },
            rechts: { name: 'Vorstand', punkte: ['Leitung & Vertretung', 'Jahresabschluss', 'Dividendenvorschlag', 'Beruft Hauptversammlung ein'] },
            pfeile: { links: 'wählt', rechts: 'beruft ein', unten: 'Aufsichtsrat → bestellt & kontrolliert → Vorstand' },
          },
          {
            type: 'begriff',
            term: 'Dividende berechnen',
            erklaerung: 'Jahresgewinn − 5 % Rücklage = auszuschüttender Gewinn. Geteilt durch Anzahl der Aktien = Dividende pro Aktie.',
            beispiel: '300.000 − 15.000 = 285.000 € / 50.000 Aktien = 5,70 € pro Aktie',
          },
          {
            type: 'vergleich',
            links: { titel: 'Vorteile', punkte: ['Viel Kapital durch viele Aktionäre', 'Haftung auf Aktienanteil beschränkt', 'Aktien leicht übertragbar (Börse)'] },
            rechts: { titel: 'Nachteile', punkte: ['Hohe Gründungskosten', 'Hohes Mindestkapital', 'Aufwendige Gründung', 'Hoher Organisationsaufwand'] },
          },
        ],
      },
      {
        titel: 'FlexKapG, GmbH & Co KG, Genossenschaft',
        blocks: [
          {
            type: 'begriff',
            term: 'Flexible Kapitalgesellschaft (FlexKapG/FlexCo)',
            erklaerung: 'Mischung aus GmbH und AG für Start-ups. Mindeststammkapital 10.000 €, Beteiligung ab 1 €. Mitarbeiter können Unternehmenswert-Anteile bekommen (kein Stimmrecht, aber Gewinnbeteiligung).',
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'Komplementär', wert: 'GmbH' },
              { titel: '+ Kommanditisten', wert: 'Personen' },
              { titel: '=', wert: 'GmbH & Co KG' },
            ],
          },
          {
            type: 'text',
            text: 'Bei der GmbH & Co KG übernimmt eine GmbH die Rolle des unbeschränkt haftenden Komplementärs → so haftet am Ende niemand unbeschränkt mit Privatvermögen.',
          },
          {
            type: 'begriff',
            term: 'Genossenschaft (Gen)',
            erklaerung: 'Vereinigung mit nicht geschlossener Mitgliederzahl (mind. 2), die den Erwerb oder die Wirtschaft ihrer Mitglieder fördert. Firmenbuch-Pflicht, kein Mindestkapital; Haftung der Mitglieder laut Satzung.',
            beispiel: 'Bio-Imker verkaufen ihren Honig gemeinsam',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Kriterien',
        punkte: [
          'Eigentümer, Kapital, Haftung, Leitung, Erfolg, Buchführung, Steuer',
          'Haftung: beschränkt/unbeschränkt · unmittelbar · solidarisch',
          'Steuer: Einzel/Personenges. → ESt · Kapitalges. → 23 % KöSt + 27,5 % KESt',
        ],
      },
      {
        titel: 'Personengesellschaften',
        punkte: [
          'Einzelunternehmen: 1 Vollhafter, kein Mindestkapital',
          'OG: mind. 2 Vollhafter, alle leiten, unbeschränkt/unmittelbar/solidarisch',
          'KG: Komplementär (Vollhafter, leitet) + Kommanditist (Teilhafter, Kontrolle)',
          'Stille Gesellschaft: Einlage, haftet bis Einlage, keine Leitung, nicht im Firmenbuch',
          'GesbR: mind. 2, Arbeitsgemeinschaft, nicht im Firmenbuch, alle haften unbeschränkt',
        ],
      },
      {
        titel: 'Kapitalgesellschaften',
        punkte: [
          'GmbH: mind. 1 Person, 10.000 € Stammkapital, Haftung bis Stammeinlage; Organe: Generalversammlung, Geschäftsführer, (Aufsichtsrat)',
          'AG: 70.000 € Grundkapital (Aktien), Haftung mit Aktienanteil; Organe: Hauptversammlung, Aufsichtsrat, Vorstand',
          'Dividende = (Gewinn − 5 % Rücklage) / Aktienanzahl',
          'FlexKapG: GmbH + AG-Elemente, Start-ups, Unternehmenswert-Anteile',
        ],
      },
      {
        titel: 'Misch- & Sonderformen',
        punkte: [
          'GmbH & Co KG: GmbH ist Komplementär → beschränkte Haftung',
          'Genossenschaft: offene Mitgliederzahl, fördert Mitglieder, Firmenbuch-Pflicht',
        ],
      },
    ],
  },
'vollmachten': {
    schritte: [
      {
        titel: 'Was ist eine Vollmacht?',
        blocks: [
          {
            type: 'begriff',
            term: 'Vollmacht',
            erklaerung: 'Die Befugnis, im Namen einer anderen Person zu handeln (Vertretungsmacht). Setzt Vertrauen zwischen Vollmachtgeber und Bevollmächtigtem voraus.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Prokura', punkte: ['Umfangreichste Vollmacht', 'Nur von Unternehmen im Firmenbuch', 'Alle Geschäfte, die der Betrieb mit sich bringt'] },
            rechts: { titel: 'Handlungsvollmacht', punkte: ['Eingeschränkte Vollmacht', 'Von jedem Unternehmen', 'Geschäfte, die ein bestimmtes Unternehmen gewöhnlich mit sich bringt'] },
          },
        ],
      },
      {
        titel: 'Prokura',
        blocks: [
          {
            type: 'begriff',
            term: 'Prokura',
            erklaerung: 'Berechtigt zu allen gerichtlichen und außergerichtlichen Geschäften des Betriebs. Erteilung durch ausdrückliche Erklärung (mündlich/schriftlich), Eintrag ins Firmenbuch Pflicht. Der Bevollmächtigte heißt Prokurist.',
          },
          {
            type: 'vergleich',
            links: { titel: '✓ Prokurist darf', punkte: ['Waren ein- und verkaufen', 'Mitarbeiter einstellen/kündigen', 'Kredite aufnehmen', 'Handlungsvollmachten erteilen', 'Unternehmen vor Gericht vertreten'] },
            rechts: { titel: '✗ Prokurist darf nicht', punkte: ['Unternehmen auflösen/verkaufen', 'Firmennamen ändern', 'Grundstücke belasten/verkaufen', 'Bilanz unterzeichnen', 'Andere Prokuristen ernennen/Prokura weitergeben'] },
          },
          { type: 'merke', text: 'Interne Beschränkungen (z. B. „keine Geschäfte über 9.500 €“) gelten NICHT gegenüber Dritten: Der Vertrag ist gültig, aber der Prokurist muss Schadenersatz zahlen und kann gekündigt werden.' },
          {
            type: 'tabelle',
            spalten: ['Art der Prokura', 'Vertretungsberechtigt …'],
            zeilen: [
              ['Einzelprokura', 'allein'],
              ['Gesamtprokura', 'nur mit einem oder mehreren anderen Prokuristen (Vier-Augen-Prinzip)'],
              ['Gemischte Prokura', 'nur mit einem Geschäftsführer oder Vorstand'],
              ['Filialprokura', 'nur für eine Filiale'],
            ],
          },
          {
            type: 'begriff',
            term: 'Unterschrift',
            erklaerung: 'Mit pp. (per procura) oder ppa. (per procura autoritate) vor dem Namen.',
            beispiel: 'ppa. Laura Trummer',
          },
          {
            type: 'begriff',
            term: 'Erlöschen der Prokura',
            erklaerung: 'Aufhebung durch den Vollmachtgeber · Kündigung, Tod oder Geschäftsunfähigkeit des Prokuristen · Konkurs des Unternehmens.',
          },
        ],
      },
      {
        titel: 'Handlungsvollmacht',
        blocks: [
          {
            type: 'begriff',
            term: 'Handlungsvollmacht',
            erklaerung: 'Berechtigt zu Geschäften, die ein bestimmtes Unternehmen gewöhnlich mit sich bringt. Erteilt von jedem Unternehmer oder Prokuristen – ausdrücklich oder durch schlüssiges Handeln. Kein Firmenbucheintrag.',
            beispiel: 'Mitarbeiter bestellt zum 4. Mal Kaffeebohnen, Chef zahlt jedes Mal → Vollmacht durch schlüssiges Handeln',
          },
          {
            type: 'vergleich',
            links: { titel: '✓ darf', punkte: ['Gewöhnliche Geschäfte des Betriebs', 'Waren ein- und verkaufen', 'Löhne und Gehälter auszahlen'] },
            rechts: { titel: '✗ darf nicht', punkte: ['Alles, was auch Prokuristen verboten ist', 'Kredite aufnehmen', 'Unternehmen vor Gericht vertreten'] },
          },
          { type: 'merke', text: 'Beschränkungen der Handlungsvollmacht gelten AUCH gegenüber Dritten, wenn diese davon wissen (müssten). Weitergabe nur mit Zustimmung.' },
          {
            type: 'tabelle',
            spalten: ['Art', 'Für …', 'Beispiel'],
            zeilen: [
              ['Generalvollmacht', 'alle gewöhnlichen Geschäfte des Unternehmens', 'Filialleiterin entscheidet Kollektion, stellt ein'],
              ['Artvollmacht', 'eine bestimmte Art von Geschäft', 'Warenbestellung bis 40.000 €'],
              ['Spezialvollmacht (Einzelvollmacht)', 'eine einzelne Handlung', 'neuen Spiegel für die Umkleide kaufen'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Vollmacht', 'Unterschrift'],
            zeilen: [
              ['Prokura', 'pp. / ppa.'],
              ['Generalvollmacht', 'i. V. (in Vertretung)'],
              ['Art- und Spezialvollmacht', 'i. A. (im Auftrag)'],
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Prokura',
        punkte: [
          'Umfangreichste Vollmacht; nur von Unternehmen im Firmenbuch; Eintrag Pflicht',
          'Darf: ein-/verkaufen, Personal, Kredite, Handlungsvollmachten, Gericht',
          'Darf nicht: auflösen/verkaufen, Firmenname, Grundstücke, Bilanz, Prokura weitergeben',
          'Arten: Einzel-, Gesamt-, gemischte, Filialprokura',
          'Unterschrift pp./ppa. · interne Beschränkung gilt nicht gegenüber Dritten',
          'Erlischt: Aufhebung, Kündigung/Tod/Geschäftsunfähigkeit, Konkurs',
        ],
      },
      {
        titel: 'Handlungsvollmacht',
        punkte: [
          'Eingeschränkt: gewöhnliche Geschäfte; von jedem Unternehmer/Prokuristen; auch schlüssig; kein Firmenbuch',
          'Darf keine Kredite aufnehmen, nicht vor Gericht vertreten',
          'Generalvollmacht (i. V.) · Artvollmacht, Spezialvollmacht (i. A.)',
        ],
      },
    ],
  },
  'beschaeftigungsverhaeltnisse': {
    schritte: [
      {
        titel: 'Arten von Arbeitsverträgen',
        blocks: [
          {
            type: 'entscheidung',
            titel: 'Welches Beschäftigungsverhältnis?',
            schritte: [
              {
                frage: 'Wird ein fertiges Werk/Erfolg geschuldet?',
                links: { antwort: 'Ja', ergebnis: 'Werkvertrag', beispiel: 'Website gestalten für 12.000 €' },
                rechts: { antwort: 'Nein, Arbeitskraft', weiter: 'weiter prüfen' },
              },
              {
                frage: 'An Weisungen, Arbeitszeit und Arbeitsort gebunden?',
                links: { antwort: 'Nein', ergebnis: 'Freier Dienstvertrag', beispiel: 'Dateneingabe von zu Hause' },
                rechts: { antwort: 'Ja', ergebnis: '„Echter“ Arbeitsvertrag', beispiel: 'Angestellte, Arbeiter, Lehrlinge' },
              },
            ],
          },
          {
            type: 'begriff',
            term: '„Echter“ Arbeitsvertrag',
            erklaerung: 'Der Arbeitnehmer stellt seine persönliche Arbeitskraft an einem bestimmten Ort zu bestimmten Zeiten zur Verfügung. Folgt Anordnungen, bekommt Arbeitsmittel, trägt kein Risiko.',
          },
          {
            type: 'begriff',
            term: 'Geringfügige Beschäftigung',
            erklaerung: 'Das Entgelt liegt unter der Geringfügigkeitsgrenze. Anspruch auf Urlaub, Entgeltfortzahlung, Sonderzahlungen – aber keine SV-Beiträge und keine Lohnsteuer; nur unfallversichert.',
          },
          {
            type: 'begriff',
            term: 'Freier Dienstvertrag',
            erklaerung: 'Arbeitskraft gegen Entgelt, aber ohne persönliche Abhängigkeit: keine Weisungen, frei bei Zeit und Ort, Vertretung möglich, Arbeitsmittel vom Arbeitgeber.',
          },
          {
            type: 'begriff',
            term: 'Werkvertrag',
            erklaerung: 'Verpflichtung zu einem Erfolg/Werk. Geld nur, wenn die Leistung laut Vertrag erbracht wird. Eigene Arbeitsmittel, eigenes Risiko, Gewährleistung.',
          },
        ],
      },
      {
        titel: 'Auswirkungen im Vergleich',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['', '„Echter“ Arbeitsvertrag', 'Freier Dienstvertrag', 'Werkvertrag'],
            zeilen: [
              ['Weisungen', 'gebunden', 'nicht gebunden', 'nicht gebunden'],
              ['Arbeitsmittel', 'vom Arbeitgeber', 'vom Arbeitgeber', 'selbst'],
              ['Ansprüche', 'Lohn, Urlaub, Krankenstand, Sonderzahlungen', 'nur Entgelt für Leistungen', 'Entgelt bei Erbringung des Werks'],
              ['Sozialversicherung', 'Anmeldung durch Arbeitgeber (ÖGK)', 'Anmeldung durch Arbeitgeber (ÖGK)', 'selbst (SVS)'],
              ['Steuer', 'Arbeitgeber zahlt Lohnsteuer', 'selbst (Einkommensteuererklärung)', 'selbst'],
            ],
          },
          { type: 'merke', text: 'Freier Dienstnehmer und Werkvertragsnehmer haben KEINEN Anspruch auf bezahlten Urlaub, Krankengeld oder Sonderzahlungen.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Beschäftigungsverhältnisse',
        punkte: [
          '„Echter“ Arbeitsvertrag: persönliche Arbeitskraft, Weisungen, fixe Zeit/Ort, Arbeitsmittel vom Arbeitgeber, kein Risiko',
          'Ansprüche: Urlaub, Entgeltfortzahlung, Sonderzahlungen; Arbeitgeber meldet SV an, zahlt Lohnsteuer',
          'Geringfügig: unter Geringfügigkeitsgrenze, nur unfallversichert, keine SV/LSt',
          'Freier Dienstvertrag: keine Weisungen, Vertretung möglich; Arbeitgeber meldet SV, Steuer selbst; kein Urlaub',
          'Werkvertrag: Erfolg geschuldet, eigene Mittel und Risiko, SVS selbst, Steuer selbst, Gewährleistung',
        ],
      },
    ],
  },
'kaufvertraege-aussenhandel': {
    schritte: [
      {
        titel: 'Bedeutung des Außenhandels',
        blocks: [
          {
            type: 'begriff',
            term: 'Außenhandel (internationale Geschäftstätigkeit)',
            erklaerung: 'Austausch von Gütern (Waren und Dienstleistungen) zwischen verschiedenen Ländern.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Import (Einfuhr)', punkte: ['Im Ausland kaufen, im eigenen Land verbrauchen', 'Käufer = Importeur'] },
            rechts: { titel: 'Export (Ausfuhr)', punkte: ['Ins Ausland verkaufen', 'Verkäufer = Exporteur'] },
          },
          {
            type: 'tabelle',
            spalten: ['Ursache', 'Beispiel'],
            zeilen: [
              ['Güter gibt es im eigenen Land nicht (genug)', 'Kaffee aus Brasilien, Erdöl'],
              ['Spezialisierung bestimmter Länder', 'Skiproduktion in Österreich'],
              ['Überproduktion', 'Käse aus Holland'],
              ['Gutes Image von Marken', 'Swarovski, Red Bull'],
            ],
          },
          {
            type: 'begriff',
            term: 'Risiko',
            erklaerung: 'Gefahr, dass eingesetztes Kapital verloren geht oder der geplante Gewinn nicht erreicht wird. Im Ausland höher: andere Rechtssysteme, Währungen, Handelsbräuche.',
          },
        ],
      },
      {
        titel: 'Risiken für den Exporteur',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Phase', 'Risiko', 'Absicherung'],
            zeilen: [
              ['VOR Auslieferung', 'Marktrisiko (Produkt passt nicht zum Markt)', 'Marktforschung'],
              ['', 'Produktionsrisiko (Kunde geht in Konkurs/tritt zurück)', 'Anzahlung, Zahlungsgarantie'],
              ['WÄHREND Auslieferung', 'Transportrisiko (Diebstahl, Verlust, Beschädigung, Verzögerung)', 'Incoterms, Transportversicherung'],
              ['', 'Annahmerisiko (Kunde nimmt Ware nicht an)', 'Anzahlung, Zahlungsgarantie, Dokumentenakkreditiv'],
              ['NACH Auslieferung', 'Zahlungsausfallrisiko', 'Anzahlung, staatliche Exportgarantie (OeKB), Zahlungsversprechen einer Bank'],
              ['', 'Kreditrisiko (Geld kommt erst spät)', 'zinsgünstige Exportfinanzierung'],
              ['', 'Wechselkursrisiko', 'Kurssicherungsgeschäfte (Devisentermingeschäft)'],
            ],
          },
          {
            type: 'begriff',
            term: 'Wechselkursrisiko',
            erklaerung: 'Wird in fremder Währung bezahlt, kann der Kurs fallen und man bekommt weniger Euro.',
            beispiel: '10.000 USD bei 1 € = 1 USD → Kurs fällt auf 0,90 € → nur noch 9.000 €',
          },
          {
            type: 'begriff',
            term: 'Zahlungsgarantie',
            erklaerung: 'Eine Bank verpflichtet sich zu zahlen, wenn der ausländische Importeur nicht zahlt.',
          },
        ],
      },
      {
        titel: 'Risiken für den Importeur',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Phase', 'Risiko', 'Absicherung'],
            zeilen: [
              ['VOR Auslieferung', 'Lieferrisiko (gar nicht, falsch, zu wenig, zu spät)', 'geringe Anzahlung, Zielkauf, Pönale'],
              ['WÄHREND', 'Transportrisiko', 'Incoterms, Transportversicherung'],
              ['NACH', 'Gewährleistungsrisiko', 'Bankgarantie'],
              ['', 'Wechselkursrisiko', 'Kurssicherungsgeschäfte'],
            ],
          },
          { type: 'merke', text: 'Internationale Verträge: meist auf Englisch; als Kompromiss oft in US-Dollar als dritter Währung.' },
        ],
      },
      {
        titel: 'Incoterms',
        blocks: [
          {
            type: 'begriff',
            term: 'Incoterms',
            erklaerung: 'International Commercial Terms – Lieferklauseln, die festlegen, wo Risiko und Kosten vom Verkäufer auf den Käufer übergehen. Gelten nur, wenn sie im Vertrag stehen.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Incoterms regeln', punkte: ['Risikoübergang', 'Kostenübergang', 'Wer Transportmittel/-dokumente besorgt', 'Wer Ausfuhr, Durchfuhr, Einfuhr abwickelt'] },
            rechts: { titel: 'Incoterms regeln NICHT', punkte: ['Vertragsverletzungen', 'Zahlungsmodalitäten', 'Anwendbares Recht'] },
          },
          {
            type: 'tabelle',
            spalten: ['Gruppe', 'Prinzip', 'Klauseln'],
            zeilen: [
              ['E – Abholklausel', 'Minimalklausel für Verkäufer: Käufer holt ab Werk', 'EXW'],
              ['F – Übergabeklausel', 'Käufer zahlt Haupttransport; Übergabe an seinen Frachtführer', 'FCA, FAS, FOB'],
              ['C – Absendeklausel', 'Verkäufer zahlt Haupttransport, Risiko geht aber schon beim 1. Frachtführer über', 'CPT, CIP, CFR, CIF'],
              ['D – Ankunftsklausel', 'Maximalklausel für Käufer: Verkäufer trägt alles bis zum Bestimmungsort', 'DAP, DPU, DDP'],
            ],
          },
          { type: 'merke', text: 'E, F, D = Einpunktklauseln (Risiko + Kosten am selben Ort). C = Zweipunktklauseln (Risiko früh, Kosten erst am Bestimmungsort).' },
          {
            type: 'transportweg',
            titel: 'CPT Bahnhof Graz (Verkäufer BMW München)',
            stationen: ['BMW', 'Bhf. München', 'Bhf. Graz', 'Käufer'],
            risiko: 1,
            kosten: 2,
          },
          {
            type: 'tabelle',
            spalten: ['Klausel', 'Bedeutung', 'Transport'],
            zeilen: [
              ['EXW – Ab Werk', 'alles ab Werk des Verkäufers', 'alle'],
              ['FCA – Frei Frachtführer', 'Übergabe an 1. Frachtführer', 'alle'],
              ['CPT – Frachtfrei', 'Risiko: 1. Frachtführer · Kosten: Bestimmungsort', 'alle'],
              ['CIP – Frachtfrei versichert', 'wie CPT + Verkäufer zahlt Versicherung', 'alle'],
              ['DAP / DPU / DDP', 'Bestimmungsort (DPU + entladen, DDP + verzollt)', 'alle'],
              ['FAS – Frei Längsseite Schiff', 'neben dem Schiff im Verschiffungshafen', 'Schiff'],
              ['FOB – Frei an Bord', 'nach Verladung im Verschiffungshafen', 'Schiff'],
              ['CFR – Kosten und Fracht', 'Risiko: an Bord · Kosten: Bestimmungshafen', 'Schiff'],
              ['CIF – Kosten, Versicherung, Fracht', 'wie CFR + Verkäufer zahlt Versicherung', 'Schiff'],
            ],
          },
        ],
      },
      {
        titel: 'Dokumente im Außenhandel',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Transportmittel', 'Transportdokument'],
            zeilen: [
              ['Schiff (Meer)', 'Seekonnossement (Bill of Lading)'],
              ['Schiff (Binnengewässer)', 'Flusskonnossement'],
              ['Flugzeug', 'Luftfrachtbrief'],
              ['Eisenbahn', 'Internationaler Eisenbahnfrachtbrief'],
              ['Lkw', 'Straßenfrachtbrief (CMR)'],
              ['Mehrere Transportmittel', 'FIATA Multimodal Transport Bill of Lading'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Dokument', 'Zweck'],
            zeilen: [
              ['Ursprungszeugnis', 'beweist, aus welchem Land die Ware stammt'],
              ['Warenverkehrsbescheinigung', 'Zollfreiheit/begünstigte Zölle bei Freihandelsabkommen'],
              ['Ein-/Ausfuhrgenehmigung', 'für besondere Waren (z. B. militärisch nutzbar)'],
              ['Pro-Forma-Rechnung', 'vor der Lieferung, keine Zahlungspflicht – für Zoll/Importgenehmigung'],
              ['Handelsrechnung (Faktura)', 'bestätigt den tatsächlichen Verkauf, für Zollabfertigung'],
            ],
          },
        ],
      },
      {
        titel: 'Dokumentenakkreditiv & -inkasso',
        blocks: [
          {
            type: 'begriff',
            term: 'Dokumentenakkreditiv',
            erklaerung: 'Zahlungsversprechen der Bank des Importeurs: Sie zahlt, sobald der Exporteur die Dokumente zur versendeten Ware vorlegt.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Schützt Exporteur vor', punkte: ['Zahlungsausfallrisiko', 'Annahmerisiko'] },
            rechts: { titel: 'Schützt Importeur vor', punkte: ['Lieferrisiko (zahlt nur, wenn Dokumente stimmen)'] },
          },
          {
            type: 'ablauf',
            titel: 'Ablauf Akkreditiv',
            schritte: [
              { titel: 'Kaufvertrag mit Akkreditiv' },
              { titel: 'Käufer beauftragt seine Bank (Akkreditivbank)' },
              { titel: 'Akkreditivbank schickt Eröffnungsanzeige an Bank des Verkäufers (avisierende Bank)' },
              { titel: 'Verkäufer wird informiert' },
              { titel: 'Verkäufer versendet Ware, gibt Dokumente seiner Bank' },
              { titel: 'Verkäufer bekommt nach Prüfung sein Geld' },
              { titel: 'Banken leiten Dokumente weiter und verrechnen' },
              { titel: 'Käufer zahlt, bekommt Dokumente → Verfügungsrecht über die Ware' },
            ],
          },
          { type: 'merke', text: 'Fristen: Verfallsfrist, Verladefrist, Vorlagefrist (max. 21 Tage). Unbestätigt = nur Bank des Käufers haftet. Bestätigt = auch Bank des Verkäufers haftet. Nur Dokumente werden geprüft, nicht die Ware!' },
          {
            type: 'begriff',
            term: 'Dokumenteninkasso',
            erklaerung: 'Die Bank des Verkäufers übergibt dem Käufer die Dokumente nur gegen Bezahlung (D/P) oder gegen Annahme eines Wechsels (D/A). Banken geben KEINE Zahlungsgarantie.',
          },
          {
            type: 'tabelle',
            spalten: ['', 'Akkreditiv', 'Inkasso'],
            zeilen: [
              ['Zahlungsgarantie der Bank', 'ja', 'nein'],
              ['Annahmerisiko für Exporteur', 'abgesichert', 'bleibt bestehen'],
              ['Eignet sich für', 'neue Geschäftspartner', 'vertraute Geschäftspartner'],
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Außenhandel',
        punkte: [
          'Import = Einfuhr (Importeur kauft) · Export = Ausfuhr (Exporteur verkauft)',
          'Ursachen: Mangel, Spezialisierung, Überproduktion, Image',
        ],
      },
      {
        titel: 'Risiken & Absicherung',
        punkte: [
          'Exporteur: Markt- & Produktionsrisiko → Transport- & Annahmerisiko → Zahlungsausfall-, Kredit-, Wechselkursrisiko',
          'Importeur: Lieferrisiko → Transportrisiko → Gewährleistungs-, Wechselkursrisiko',
          'Absicherung: Marktforschung, Anzahlung, Zahlungsgarantie, Exportgarantie (OeKB), Exportfinanzierung, Incoterms, Transportversicherung, Kurssicherung, Pönale, Bankgarantie',
        ],
      },
      {
        titel: 'Incoterms',
        punkte: [
          'Regeln Risiko- und Kostenübergang (nicht Zahlung oder Recht)',
          'E (EXW) · F (FCA, FAS, FOB) · C (CPT, CIP, CFR, CIF) · D (DAP, DPU, DDP)',
          'C = Zweipunktklausel, Rest = Einpunktklauseln',
          'FAS, FOB, CFR, CIF nur für Schiff; CIP/CIF: Verkäufer zahlt Versicherung',
        ],
      },
      {
        titel: 'Dokumente & Zahlung',
        punkte: [
          'Seekonnossement, Luftfrachtbrief, CMR (Lkw), Eisenbahnfrachtbrief',
          'Ursprungszeugnis, Warenverkehrsbescheinigung, Pro-Forma-Rechnung, Handelsrechnung',
          'Dokumentenakkreditiv: Bank zahlt gegen Dokumente; bestätigt/unbestätigt; schützt beide',
          'Dokumenteninkasso: D/P (gegen Zahlung) oder D/A (gegen Wechsel); keine Bankgarantie',
        ],
      },
    ],
  },
'grundlagen-leistungserstellung-2jg': {
    schritte: [
      {
        titel: 'Faktoren & Output',
        blocks: [
          {
            type: 'begriff',
            term: 'Produktionsfaktoren',
            erklaerung: 'Was ein Unternehmen braucht, um Leistungen zu erstellen: menschliche Arbeitsleistung + Betriebsvermögen.',
          },
          {
            type: 'tabelle',
            spalten: ['Produktionsfaktor', 'Beispiele'],
            zeilen: [
              ['Menschliche Arbeitsleistung', 'leitende Arbeit, ausführende Arbeit (= Humankapital)'],
              ['Anlagevermögen', 'Gebäude, Maschinen'],
              ['Umlaufvermögen', 'Rohstoffe, Handelswaren'],
            ],
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'Input', wert: 'Produktionsfaktoren' },
              { titel: 'kombinieren', wert: 'Leistungserstellung' },
              { titel: 'Output', wert: 'Sachgüter / Dienstleistungen' },
            ],
          },
          { type: 'merke', text: 'Oft gibt es hybride Formen: Sachgut + Dienstleistung (z. B. neue Software + Mitarbeiterschulung).' },
        ],
      },
      {
        titel: 'Der Leistungsprozess',
        blocks: [
          {
            type: 'kette',
            glieder: [
              { titel: 'Beschaffungsmarkt →', wert: 'Beschaffung' },
              { titel: 'Kombination', wert: 'Produktion' },
              { titel: '→ Absatzmarkt', wert: 'Absatz' },
            ],
          },
          {
            type: 'text',
            text: 'Darüber steht die Unternehmensführung. Unterstützt wird durch Logistik, Personal-, Finanz- und Qualitätsmanagement, Rechnungswesen & Controlling.',
          },
          {
            type: 'begriff',
            term: 'Innerbetriebliche Arbeitsteilung',
            erklaerung: 'Aufgaben werden auf Abteilungen (Leistungsbereiche) aufgeteilt – je größer das Unternehmen, desto stärker.',
          },
        ],
      },
      {
        titel: 'Ziele: Produktivität, Wirtschaftlichkeit, Rentabilität',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Ziele der Leistungserstellung'],
            zeilen: [
              ['Optimaler Einsatz der Produktionsfaktoren'],
              ['Kundenzufriedenheit'],
              ['Niedrige Kosten'],
              ['Nachhaltige und ethische Leistungserstellung'],
            ],
          },
          {
            type: 'formel',
            name: 'Produktivität',
            zaehler: 'mengenmäßiger Output',
            nenner: 'mengenmäßiger Input',
            beispiel: 'Maschinenproduktivität = 200 Teile / 4 Std. = 50 Teile pro Stunde',
          },
          { type: 'merke', text: 'Produktivität = MENGEN (Stück, kg, Stunden). Steigt durch neue Technologien oder besser geschultes Personal – ist aber nicht automatisch wirtschaftlich.' },
          {
            type: 'formel',
            name: 'Wirtschaftlichkeit',
            zaehler: 'wertmäßiger Output (Erlöse)',
            nenner: 'wertmäßiger Input (Kosten)',
            beispiel: '18.000 € / 15.000 € = 1,2',
          },
          {
            type: 'tabelle',
            spalten: ['Ergebnis', 'Bedeutung'],
            zeilen: [
              ['> 1', 'Gewinn'],
              ['= 1', 'kostendeckend'],
              ['< 1', 'Verlust'],
            ],
          },
          {
            type: 'formel',
            name: 'Rentabilität',
            zaehler: 'Gewinn',
            nenner: 'Kapitaleinsatz',
            faktor: '· 100',
            beispiel: '500.000 / 6.000.000 · 100 = 8,33 %',
          },
          { type: 'merke', text: 'Rentabilität = wie hoch sich das eingesetzte Kapital verzinst. Je höher, desto erfolgreicher.' },
        ],
      },
      {
        titel: 'Kundenzufriedenheit',
        blocks: [
          { type: 'text', text: 'Kunden kommen wieder, wenn Qualität, Lieferzeit, Termintreue und Flexibilität passen.' },
          {
            type: 'formel',
            name: 'Lieferqualität in %',
            zaehler: 'Aufträge ohne Qualitätsmangel',
            nenner: 'alle gelieferten Aufträge',
            faktor: '· 100',
          },
          {
            type: 'formel',
            name: 'Produktqualität in %',
            zaehler: 'Güter ohne Qualitätsmangel',
            nenner: 'alle erstellten Güter',
            faktor: '· 100',
            beispiel: '127 / 130 · 100 = 97,69 %',
          },
          {
            type: 'formel',
            name: 'Ø Lieferzeit',
            zaehler: 'Summe der Lieferzeiten aller Aufträge',
            nenner: 'Anzahl der Aufträge',
          },
          {
            type: 'formel',
            name: 'Termintreue in %',
            zaehler: 'termingerecht ausgelieferte Aufträge',
            nenner: 'alle ausgelieferten Aufträge',
            faktor: '· 100',
          },
          {
            type: 'formel',
            name: 'Flexibilität in %',
            zaehler: 'erfüllte Sonderwünsche',
            nenner: 'angefragte Sonderwünsche',
            faktor: '· 100',
          },
          { type: 'merke', text: 'Lieferzeit = von der Auftragserteilung bis zur Erfüllung, meist in Werktagen. Flexibilität kostet: mehr Lager, moderne Anlagen, qualifiziertes Personal.' },
        ],
      },
      {
        titel: 'Kosten der Leistungserstellung',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Kostenart', 'Bedeutung'],
            zeilen: [
              ['Produktionskosten', 'für den Einsatz der Produktionsfaktoren (material-, anlage- oder arbeitsintensiv)'],
              ['Lagerkosten', 'Lageranlage + Lagerbestände (Verderb, Schwund, Kapitalbindung) + Lagerverwaltung'],
              ['Transportkosten', 'Lieferant → Betrieb, innerhalb des Betriebs, Betrieb → Kunde'],
              ['Indirekte Kosten (Gemeinkosten)', 'nicht direkt zurechenbar: Verwaltung, Marketing und Vertrieb'],
            ],
          },
        ],
      },
      {
        titel: 'Nachhaltigkeit & Ethik',
        blocks: [
          {
            type: 'begriff',
            term: 'Nachhaltigkeit',
            erklaerung: 'Ressourcen so einsetzen, dass sie nachwachsen können, aktuelle Bedürfnisse erfüllt werden und auch künftige Generationen ihre Bedürfnisse befriedigen können.',
          },
          {
            type: 'tabelle',
            spalten: ['Dimension', 'Bedeutung'],
            zeilen: [
              ['Sozial', 'Verantwortung gegenüber Stakeholdern (faire Löhne, Chancengleichheit)'],
              ['Ökonomisch', 'Gewinne erzielen, um z. B. in neue Anlagen zu investieren'],
              ['Ökologisch', 'Ressourcen schonen, wenig Emissionen und Abfall'],
            ],
          },
          {
            type: 'begriff',
            term: 'Cradle to Cradle',
            erklaerung: '„Von der Wiege zur Wiege“: Rohstoffe kommen nach dem Lebenszyklus wieder vollständig in die Produktion zurück (Kreislaufwirtschaft).',
          },
          {
            type: 'begriff',
            term: 'Unternehmensethik',
            erklaerung: 'Welche moralischen Werte und Verhaltensregeln ein Unternehmen vertritt. Oft festgelegt in einem Code of Conduct (Verhaltenskodex).',
            beispiel: 'Kein Mobbing, keine Geschenkannahme, eigener Solarstrom, Spenden an Vereine',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Grundlagen',
        punkte: [
          'Produktionsfaktoren: menschliche Arbeitsleistung + Betriebsvermögen (Anlage-, Umlaufvermögen)',
          'Output: Sachgüter (Konsum-/Investitionsgüter) und Dienstleistungen',
          'Prozess: Beschaffung → Produktion → Absatz; Unterstützung durch Logistik, Personal, Finanzen, Qualität, Rechnungswesen',
        ],
      },
      {
        titel: 'Kennzahlen',
        punkte: [
          'Produktivität = mengenmäßiger Output / mengenmäßiger Input',
          'Wirtschaftlichkeit = Erlöse / Kosten (> 1 Gewinn, = 1 kostendeckend, < 1 Verlust)',
          'Rentabilität = Gewinn / Kapitaleinsatz · 100',
          'Lieferqualität, Produktqualität, Termintreue, Flexibilität jeweils in % (gut / gesamt · 100)',
          'Ø Lieferzeit = Summe Lieferzeiten / Anzahl Aufträge',
        ],
      },
      {
        titel: 'Kosten & Nachhaltigkeit',
        punkte: [
          'Kosten: Produktions-, Lager-, Transport-, indirekte Kosten',
          'Nachhaltigkeit: sozial, ökonomisch, ökologisch · Cradle to Cradle',
          'Unternehmensethik: Werte und Verhaltensregeln (Code of Conduct)',
        ],
      },
    ],
  },
'kunde-im-mittelpunkt': {
    schritte: [
      {
        titel: 'Was ist Marketing?',
        blocks: [
          {
            type: 'begriff',
            term: 'Marketing',
            erklaerung: 'Eine Denkhaltung: Der KUNDE steht im Mittelpunkt aller Tätigkeiten des Unternehmens – um Kunden zu begeistern, Bedürfnisse der Zielgruppen zu erfüllen und einzigartige Kundenerlebnisse zu schaffen.',
          },
          {
            type: 'ablauf',
            titel: 'Customer Journey (Kundenreise) – Touchpoints',
            schritte: [
              { titel: 'Vor dem Kauf', text: 'Erstkontakt: Influencer, Social Media, Werbung' },
              { titel: 'Während des Kaufs', text: 'Geschäft, Onlineshop, App' },
              { titel: 'Nach dem Kauf', text: 'Kundenservice, Member-Club, Angebote' },
            ],
          },
          {
            type: 'begriff',
            term: 'Touchpoints (Berührungspunkte)',
            erklaerung: 'Alle Stellen, an denen der Kunde mit einem Unternehmen/Produkt in Kontakt kommt. Jeder soll ein positives Erlebnis sein.',
          },
          {
            type: 'begriff',
            term: 'Multi-Channel-Ansatz',
            erklaerung: 'Mehrere Vertriebskanäle nutzen, um Kunden zu erreichen (Filiale, Onlineshop, App).',
          },
          { type: 'merke', text: 'Negative Kundenmeinungen verbreiten sich im Internet besonders schnell (Social Media, Bewertungsportale).' },
        ],
      },
      {
        titel: 'Ziele des Marketings',
        blocks: [
          { type: 'text', text: 'Wichtigstes Ziel: im Wettbewerb am Markt erfolgreich sein.' },
          {
            type: 'kette',
            glieder: [
              { titel: 'Kundenzufriedenheit, Bekanntheit, Image, Markentreue', wert: 'Marktpsychologische Ziele' },
              { titel: 'sind Voraussetzung für', wert: '→' },
              { titel: 'Absatz, Umsatz, Marktanteil, Wachstum', wert: 'Marktökonomische Ziele' },
            ],
          },
          { type: 'merke', text: 'Marktpsychologische Ziele = wie das Unternehmen wahrgenommen wird (schwer messbar). Marktökonomische Ziele = Zahlen (gut messbar).' },
        ],
      },
      {
        titel: 'STP: Segmentieren, Auswählen, Positionieren',
        blocks: [
          {
            type: 'ablauf',
            titel: 'Zielgerichtetes Marketing (STP)',
            schritte: [
              { titel: 'Segmenting – Marktsegmentierung', text: 'Gesamtmarkt in Teilmärkte aufteilen' },
              { titel: 'Targeting – Segmentauswahl', text: 'Zielmarkt auswählen' },
              { titel: 'Positioning – Marktpositionierung', text: 'Kunden mit bedeutsamem Nutzen überzeugen' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Segmentierungskriterium', 'Beispiele'],
            zeilen: [
              ['Geografisch', 'Länder, Städte'],
              ['Demografisch', 'Alter, Einkommen, Familienstand, Geschlecht'],
              ['Psychografisch', 'Lebensstil, Interessen, Werte'],
              ['Verhaltensbezogen', 'Markentreue, Kaufverhalten (Häufigkeit, Motiv)'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Marktbearbeitung', 'Bedeutung', 'Beispiel Schuhe'],
            zeilen: [
              ['Konzentriert', '1 oder mehrere Segmente gezielt bearbeiten', 'nur Sneaker für Herren'],
              ['Differenziert', 'alle Segmente, jeweils unterschiedlich', 'Sneaker für Herren, Damen, Kinder'],
              ['Undifferenziert', 'Gesamtmarkt ohne Unterscheidung', 'ein Sneaker-Modell für alle'],
            ],
          },
          {
            type: 'begriff',
            term: 'USP (Unique Selling Proposition)',
            erklaerung: 'Einzigartiger Verkaufsvorteil, mit dem man sich von der Konkurrenz abhebt – auf Produkt-, Service-, Mitarbeiter-, Technologie- oder Preisebene.',
            beispiel: 'Apple (Technologie), Amazon (rasche Lieferung), Penny (Niedrigpreis)',
          },
          {
            type: 'begriff',
            term: 'Merkmalsraster',
            erklaerung: 'Grafik mit 2 Achsen (z. B. Preis und Prestige), die die eigene Position im Vergleich zur Konkurrenz zeigt: Ist-Positionierung vs. Soll-Positionierung.',
          },
        ],
      },
      {
        titel: 'Marketinginstrumente (4 Ps)',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Instrument', '4 Ps', 'Beispiel'],
            zeilen: [
              ['Produkt- und Sortimentspolitik', 'Product', 'Smartphone mit Update-Garantie'],
              ['Preis- und Konditionenpolitik', 'Price', '10 % Rabatt im Onlineshop'],
              ['Distributionspolitik (Vertrieb)', 'Place', 'Einzelhandel + eigener Onlineshop'],
              ['Kommunikationspolitik', 'Promotion', 'Plakate, Werbung auf YouTube'],
            ],
          },
          {
            type: 'begriff',
            term: 'Marketingmix',
            erklaerung: 'Sinnvolle, aufeinander abgestimmte Kombination der 4 Instrumente. Grundlage sind die Ergebnisse der Marktforschung.',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Marketing',
        punkte: [
          'Marketing = Kunde im Mittelpunkt: begeistern, Bedürfnisse erfüllen, einzigartige Erlebnisse',
          'Customer Journey: Touchpoints vor, während und nach dem Kauf',
          'Ziele: marktpsychologisch (Image, Bekanntheit) → Voraussetzung für marktökonomisch (Umsatz, Marktanteil)',
        ],
      },
      {
        titel: 'STP',
        punkte: [
          'Segmentierung nach geografischen, demografischen, psychografischen, verhaltensbezogenen Kriterien',
          'Marktbearbeitung: konzentriert · differenziert · undifferenziert',
          'Positionierung: USP = einzigartiger Verkaufsvorteil; Merkmalsraster (Ist/Soll)',
        ],
      },
      {
        titel: 'Instrumente',
        punkte: [
          '4 Ps: Product, Price, Place, Promotion → zusammen = Marketingmix',
        ],
      },
    ],
  },
'marktforschung': {
    schritte: [
      {
        titel: 'Aufgaben der Marktforschung',
        blocks: [
          {
            type: 'begriff',
            term: 'Marktforschung',
            erklaerung: 'Planmäßiges Sammeln und Auswerten von wichtigen Informationen über den Markt und die Marktteilnehmer (Zielgruppe, Konkurrenz).',
          },
          { type: 'text', text: 'Hauptaufgabe: Informationen gewinnen, damit Marketing-Entscheidungen auf Fakten statt Vermutungen beruhen. Informationen über:' },
          {
            type: 'tabelle',
            spalten: ['Bereich', 'Beispiel'],
            zeilen: [
              ['Kundenzufriedenheit und -loyalität', 'Sind Kunden zufrieden?'],
              ['Marktposition', 'Marktanteil, Bekanntheitsgrad'],
              ['Marktentwicklung', 'Marktwachstum, Trends'],
              ['Kundensegmente', 'Wer sind die Kunden, wie erreicht man sie?'],
              ['Kundenverhalten und -bedürfnisse', 'Was und wie kaufen sie?'],
              ['Mitbewerber', 'Was macht die Konkurrenz?'],
            ],
          },
        ],
      },
      {
        titel: 'Sekundär vs. primär',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Sekundäre Marktforschung', punkte: ['Wertet BEREITS VORHANDENE Daten aus', 'Günstiger', 'z. B. Kundendatei, Prospekte der Konkurrenz, Google Analytics'] },
            rechts: { titel: 'Primäre Marktforschung', punkte: ['Erhebt Daten NEU, direkt am Markt', 'Teurer, aber genau passend', 'Befragung, Beobachtung, Experiment, Panel'] },
          },
          {
            type: 'vergleich',
            frage: 'Informationsquellen der sekundären Marktforschung:',
            links: { titel: 'Unternehmensintern', punkte: ['Außendienstberichte', 'Kundenstatistiken', 'Rechnungswesen', 'Umsatzstatistiken'] },
            rechts: { titel: 'Unternehmensextern', punkte: ['Internet (wichtigste Quelle)', 'Amtliche Statistiken', 'Externe Datenbanken', 'Zeitungen, Bücher', 'Geschäftsberichte anderer'] },
          },
          {
            type: 'begriff',
            term: 'SEO & SEA',
            erklaerung: 'SEO = Suchmaschinenoptimierung (Website besser sichtbar machen). SEA = Suchmaschinenwerbung (Anzeigen bei passenden Suchbegriffen).',
          },
        ],
      },
      {
        titel: 'Voll- und Teilerhebung',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Vollerhebung', punkte: ['ALLE Personen der Gruppe (= Grundgesamtheit) werden untersucht', 'z. B. alle 100 Passagiere eines Testflugs'] },
            rechts: { titel: 'Teilerhebung', punkte: ['Nur ein Teil (= Stichprobe) wird untersucht', 'Stichprobe muss repräsentativ sein', 'z. B. 400 von 50.000 Passagieren'] },
          },
          {
            type: 'begriff',
            term: 'Repräsentativ',
            erklaerung: 'Die Stichprobe spiegelt die wichtigsten Eigenschaften (Alter, Geschlecht …) der ganzen Gruppe wider – dann ist das Ergebnis fast gleich wie bei einer Vollerhebung.',
          },
        ],
      },
      {
        titel: 'Methoden der primären Marktforschung',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Methode', 'Arten'],
            zeilen: [
              ['Befragung', 'persönlich (Einzel-/Gruppenbefragung), telefonisch, schriftlich, online'],
              ['Beobachtung', 'persönlich, apparativ (Video, Eyetracking), online (Klickverhalten, Social Listening, Geotracking)'],
              ['Experiment', 'Produkttest, Storetest, Markttest (auch A/B-Tests, VR)'],
              ['Panelerhebung', 'gleiche Personen regelmäßig befragen/beobachten → Veränderungen und Trends'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Fragetyp', 'Bedeutung'],
            zeilen: [
              ['Offene Frage', 'Antwort in eigenen Worten → neue Erkenntnisse'],
              ['Geschlossene Frage', 'Antworten vorgegeben → quantitative (zählbare) Ergebnisse'],
              ['Frage mit Skalierung', 'Antwort auf einer Skala wählen (1–6, Smileys)'],
            ],
          },
          { type: 'merke', text: 'Fragebogen: Eisbrecherfrage am Anfang, demografische Daten am Ende, Anonymität zusichern.' },
          {
            type: 'vergleich',
            frage: 'Beobachtungsumfeld:',
            links: { titel: 'Feldbeobachtung', punkte: ['Natürliche Umgebung', 'z. B. Kunden im umgebauten Supermarkt'] },
            rechts: { titel: 'Laborbeobachtung', punkte: ['Kontrollierte Bedingungen', 'z. B. Testpersonen im Raum mit neuer Verpackung'] },
          },
          {
            type: 'tabelle',
            spalten: ['Experiment', 'Was wird getestet?'],
            zeilen: [
              ['Produkttest', 'Testpersonen probieren das Produkt → Feedback'],
              ['Storetest', 'Produkt eine Zeit lang in ausgewählten Geschäften verkaufen'],
              ['Markttest', 'Produkt + Marketing vor der Markteinführung auf einem Testmarkt'],
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Grundlagen',
        punkte: [
          'Marktforschung = planmäßiges Sammeln und Auswerten von Marktinformationen',
          'Infos über: Kundenzufriedenheit, Marktposition, Marktentwicklung, Kundensegmente, Kundenverhalten, Mitbewerber',
        ],
      },
      {
        titel: 'Methoden',
        punkte: [
          'Sekundär = vorhandene Daten (intern: Statistiken; extern: Internet, amtliche Statistik)',
          'Primär = neue Daten: Befragung, Beobachtung, Experiment, Panelerhebung',
          'Vollerhebung (alle) ↔ Teilerhebung (repräsentative Stichprobe)',
          'Fragetypen: offen, geschlossen, mit Skalierung',
          'Beobachtung: Feld (natürlich) ↔ Labor (kontrolliert); persönlich, apparativ, online',
          'Experimente: Produkttest, Storetest, Markttest',
          'Panel = gleiche Personengruppe regelmäßig → Trends erkennen',
        ],
      },
    ],
  },
'instrumente-marketings': {
    schritte: [
      {
        titel: 'Produkt: Nutzen & Marken',
        blocks: [
          {
            type: 'begriff',
            term: 'Produkt- und Sortimentspolitik (Product)',
            erklaerung: 'Entscheidet, welche Produkte angeboten werden und welche Eigenschaften, Funktionen und Qualität sie haben. Produkt = auch Dienstleistungen, Personen, Orte, Organisationen.',
          },
          {
            type: 'kette',
            glieder: [
              { titel: 'Hauptzweck', wert: 'Grundnutzen' },
              { titel: '+ Extras', wert: 'Zusatznutzen' },
              { titel: '+ Service', wert: 'Zusatzleistung' },
            ],
          },
          {
            type: 'text',
            text: 'Beispiel iPhone: Grundnutzen = telefonieren · Zusatznutzen = Kamera, Apps, Design, Image · Zusatzleistung = Garantie, Apple-Store-Service. Zusammen ergeben sie den Kundennutzen.',
          },
          { type: 'merke', text: 'Abheben von der Konkurrenz geht meist nur durch Zusatznutzen und Zusatzleistungen → USP.' },
          {
            type: 'begriff',
            term: 'Marke',
            erklaerung: 'Geschütztes Zeichen (Wort/Zahl, Bild oder kombiniert), das ein Produkt von der Konkurrenz abhebt.',
            beispiel: 'Coca-Cola (Wort) · Apple-Apfel (Bild) · BMW (kombiniert)',
          },
          {
            type: 'tabelle',
            spalten: ['Markenart', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Herstellermarke', 'vom Hersteller entwickelt', 'Nivea, Red Bull'],
              ['Handelsmarke', 'Eigenmarke eines Händlers', 'Balea, ja! Natürlich'],
              ['Einzelmarke', 'jedes Produkt eigene Marke', 'Duplo, Nutella (Ferrero)'],
              ['Familienmarke', 'eine Marke für eine Produktgruppe', 'Nivea, Labello (Beiersdorf)'],
              ['Dachmarke', 'alle Produkte unter einer Marke', 'Procter & Gamble'],
            ],
          },
        ],
      },
      {
        titel: 'Produktlebenszyklus & Portfolio',
        blocks: [
          {
            type: 'begriff',
            term: 'Produktlebenszyklus',
            erklaerung: 'Produkte haben – wie Lebewesen – eine begrenzte Lebensdauer (technische Neuerungen, Trends).',
          },
          {
            type: 'ablauf',
            titel: 'Phasen',
            schritte: [
              { titel: 'Einführung', text: 'Produkt kommt neu auf den Markt, Umsatz gering' },
              { titel: 'Wachstum', text: 'setzt sich durch, Umsatz steigt' },
              { titel: 'Reife', text: 'Umsatzmaximum' },
              { titel: 'Sättigung', text: 'Markt gesättigt, Umsatz sinkt' },
              { titel: 'Rückgang', text: 'Produkt wird vom Markt genommen' },
            ],
          },
          { type: 'merke', text: 'Relaunch = Produkt in Reife/Sättigung verändern, um den Zyklus zu verlängern. Geplante Obsoleszenz = Lebensdauer bewusst verkürzt.' },
          {
            type: 'begriff',
            term: 'Portfolioanalyse (BCG-Matrix)',
            erklaerung: 'Merkmalsraster mit 4 Feldern: Marktwachstum (hoch/niedrig) × relativer Marktanteil (niedrig/hoch).',
          },
          {
            type: 'tabelle',
            spalten: ['Feld', 'Marktwachstum / Marktanteil', 'Strategie'],
            zeilen: [
              ['Question Marks', 'hoch / niedrig', 'beobachten, abwägen ob investieren'],
              ['Stars', 'hoch / hoch', 'stark fördern, investieren'],
              ['Cashcows', 'niedrig / hoch', 'Position halten, „melken“'],
              ['Poor Dogs', 'niedrig / niedrig', 'vom Markt nehmen'],
            ],
          },
          {
            type: 'formel',
            name: 'Relativer Marktanteil',
            zaehler: 'eigener absoluter Marktanteil',
            nenner: 'absoluter Marktanteil des größten Konkurrenten',
          },
        ],
      },
      {
        titel: 'Instrumente der Produktpolitik & Sortiment',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Instrument', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Produktinnovation', 'neues Produkt (echt neu oder Konkurrenzprodukt-ähnlich) → Einführungsphase', 'ChatGPT von OpenAI'],
              ['Produktdifferenzierung', 'weitere ähnliche Produkte für neue Zielgruppen (Wachstum/Reife)', 'Activity Family, Junior, Party'],
              ['Produktvariation (Relaunch)', 'bestehendes Produkt verbessern (Reife/Sättigung)', 'Coca-Cola ändert Rezeptur'],
              ['Produkteliminierung', 'Produkt vom Markt nehmen (Rückgang)', 'gedruckte Lexika'],
              ['Diversifikation', 'neue Produktgruppen ins Programm', 'Fahrradhändler verkauft nun Skiausrüstung'],
            ],
          },
          {
            type: 'vergleich',
            links: { titel: 'Sortimentsbreite', punkte: ['Anzahl der Produktgruppen', 'z. B. Yamaha: Motorräder, Bootsmotoren, Instrumente'] },
            rechts: { titel: 'Sortimentstiefe', punkte: ['Anzahl der Varianten innerhalb einer Gruppe', 'z. B. Vöslauer Balance: viele Sorten'] },
          },
          { type: 'merke', text: 'Differenzierung → mehr Tiefe. Diversifikation → mehr Breite. Eliminierung → weniger Breite/Tiefe. Variation → ändert nichts.' },
        ],
      },
      {
        titel: 'Preis- und Konditionenpolitik (Price)',
        blocks: [
          {
            type: 'begriff',
            term: 'Preispolitik',
            erklaerung: 'Alle Entscheidungen, mit denen Preise festgelegt werden – kostendeckend UND marktgerecht. Konditionenpolitik = Rabatte, Zahlungs-, Lieferbedingungen, Garantie.',
          },
          {
            type: 'tabelle',
            spalten: ['Einflussfaktor', 'Bedeutung'],
            zeilen: [
              ['Kosten des Unternehmens', 'Preisuntergrenze: mind. alle Kosten decken'],
              ['Nachfrage der Kunden', 'Preisobergrenze: was Kunden maximal zahlen'],
              ['Preise der Konkurrenz', 'Positionierung: niedriger, gleich oder höher'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Strategieart', 'Varianten'],
            zeilen: [
              ['Preispositionierung', 'Hochpreis (Premium) · Marktpreis (Durchschnitt) · Niedrigpreis (Promotion)'],
              ['Preiseinführung', 'Abschöpfung (hoch starten, dann senken – PS5) · Marktdurchdringung (niedrig starten, dann erhöhen – Netflix)'],
              ['Taktisch', 'Preisdifferenzierung (nach Ort, Zeit, Zielgruppe) · kalkulatorischer Ausgleich (Getränke teurer als Speisen)'],
              ['Psychologisch', 'Preisschwellen (4,99 €) · Preisanker (UVP durchgestrichen) · Multipackpreise'],
              ['Digital', 'dynamische, segmentierte, personalisierte Preisfindung · Abomodelle'],
            ],
          },
          {
            type: 'begriff',
            term: 'Shrinkflation',
            erklaerung: 'Versteckte Preiserhöhung: weniger Inhalt zum gleichen Preis (Schokolade 100 g → 80 g).',
          },
        ],
      },
      {
        titel: 'Distributionspolitik (Place)',
        blocks: [
          {
            type: 'begriff',
            term: 'Distributionspolitik (Vertriebspolitik)',
            erklaerung: 'Legt fest, auf welchen Absatzwegen das Produkt zum Endkunden kommt – und wie Versand, Transport und Lagerung ablaufen.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Direkter Absatzweg', punkte: ['Unternehmen verkauft selbst', 'Außendienstmitarbeiter', 'Eigene Verkaufsstelle (Filiale)', 'Eigener Onlineshop'] },
            rechts: { titel: 'Indirekter Absatzweg', punkte: ['Über Zwischenhändler', 'Groß-/Einzelhandel (auch Franchising)', 'Handelsvermittler (Handelsvertreter, Kommissionär)', 'Virtuelle Marktplätze (Amazon, eBay)'] },
          },
          { type: 'merke', text: 'Absatzwege werden oft verknüpft: Click-and-collect (online bestellen, im Geschäft abholen).' },
        ],
      },
      {
        titel: 'Kommunikationspolitik (Promotion)',
        blocks: [
          {
            type: 'begriff',
            term: 'Kommunikationspolitik',
            erklaerung: 'Alle Arten, wie ein Unternehmen mit Marktteilnehmern kommuniziert, um Zielgruppen zu erreichen und ein positives Bild zu vermitteln.',
          },
          {
            type: 'tabelle',
            spalten: ['Corporate Identity (CI)', 'Bedeutung'],
            zeilen: [
              ['Corporate Design', 'optisch einheitlich: Logo, Farben, Schrift'],
              ['Corporate Communication', 'einheitliche Kommunikation nach innen und außen, Slogan'],
              ['Corporate Behavior', 'Verhalten der Mitarbeiter (Du/Sie, Umgang mit Kunden)'],
            ],
          },
          {
            type: 'ablauf',
            titel: 'AIDAS-Formel (Werbung)',
            schritte: [
              { titel: 'Attention', text: 'Aufmerksamkeit wecken' },
              { titel: 'Interest', text: 'Interesse wecken' },
              { titel: 'Desire', text: 'Wunsch zu kaufen' },
              { titel: 'Action', text: 'Kauf (Call-to-Action)' },
              { titel: 'Satisfaction', text: 'Zufriedenheit nach dem Kauf' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Werbeempfänger', 'Bedeutung'],
            zeilen: [
              ['Massenwerbung (Streuwerbung)', 'an viele, Streuverluste möglich (TV, Plakat)'],
              ['Zielgruppenorientiert', 'bestimmte Gruppe, wenig Streuverlust'],
              ['Individualwerbung', 'einzelne Person (personalisierte E-Mail)'],
            ],
          },
          {
            type: 'vergleich',
            links: { titel: 'Werbemittel', punkte: ['Gestaltungsform der Botschaft', 'grafisch, audiovisuell, interaktiv, Ware als Werbung', 'z. B. TV-Spot'] },
            rechts: { titel: 'Werbeträger', punkte: ['Transportiert die Botschaft', 'Print, Außenwerbung, elektronisch, Internet, Influencer', 'z. B. Fernsehen'] },
          },
          {
            type: 'formel',
            name: 'Tausend-Kontakt-Preis',
            zaehler: 'Kosten · 1.000',
            nenner: 'Zahl der erreichten Personen',
            beispiel: '500 · 1.000 / 50.000 = 10 € pro 1.000 Personen',
          },
          {
            type: 'ablauf',
            titel: 'Werbeplanung',
            schritte: [
              { titel: 'Werbeziele' },
              { titel: 'Werbebudget (Werbeetat)' },
              { titel: 'Werbeobjekt', text: 'Produkt oder Unternehmen' },
              { titel: 'Werbesubjekt', text: 'Zielgruppe' },
              { titel: 'Werbebotschaft' },
              { titel: 'Werbemittel und Werbeträger' },
              { titel: 'Werbeperiode' },
              { titel: 'Werbeerfolgskontrolle' },
            ],
          },
          {
            type: 'begriff',
            term: 'Greenwashing',
            erklaerung: 'Sich in der Werbung umweltfreundlich darstellen, ohne genug echte Maßnahmen – schadet dem Image, wenn es auffliegt.',
          },
          {
            type: 'tabelle',
            spalten: ['Weitere Instrumente', 'Bedeutung'],
            zeilen: [
              ['Öffentlichkeitsarbeit (PR)', 'Stakeholder informieren: Bekanntheit, Image, Vertrauen'],
              ['Verkaufsförderung (Salespromotion)', 'Anreize für Kunden (Gutscheine), Mitarbeiter (Prämien), Händler (Rabatte)'],
              ['Sponsoring', 'Unterstützung mit Geld/Sachleistungen gegen Werbung → Bekanntheit, Imagetransfer'],
            ],
          },
        ],
      },
      {
        titel: 'Das Marketingkonzept',
        blocks: [
          {
            type: 'ablauf',
            titel: 'Schritte eines Marketingkonzepts',
            schritte: [
              { titel: 'Situationsanalyse', text: 'Zielgruppen- und Wettbewerbsanalyse' },
              { titel: 'Marketingziele', text: 'marktpsychologisch und marktökonomisch' },
              { titel: 'Marketingstrategie', text: 'STP: Segmenting, Targeting, Positioning' },
              { titel: 'Marketingmix', text: 'Product, Price, Place, Promotion' },
              { titel: 'Umsetzung von Maßnahmen', text: 'Werbeplanung, Kampagnen, Erfolgskontrolle' },
            ],
          },
          { type: 'merke', text: 'Ein Marketingkonzept wird laufend optimiert und an Marktveränderungen angepasst. Alle Punkte müssen gut aufeinander abgestimmt sein.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Product',
        punkte: [
          'Kundennutzen = Grundnutzen + Zusatznutzen + Zusatzleistung → USP',
          'Marken: Wort/Bild/kombiniert · Hersteller-/Handelsmarke · Einzel-/Familien-/Dachmarke',
          'Lebenszyklus: Einführung → Wachstum → Reife → Sättigung → Rückgang (Relaunch)',
          'BCG: Question Marks (beobachten), Stars (investieren), Cashcows (melken), Poor Dogs (eliminieren)',
          'Innovation, Differenzierung, Variation, Eliminierung, Diversifikation',
          'Sortimentsbreite (Produktgruppen) ↔ Sortimentstiefe (Varianten)',
        ],
      },
      {
        titel: 'Price',
        punkte: [
          'Einflussfaktoren: Kosten (Untergrenze), Nachfrage (Obergrenze), Konkurrenz',
          'Hoch-/Markt-/Niedrigpreis · Abschöpfung / Marktdurchdringung',
          'Preisdifferenzierung, kalkulatorischer Ausgleich, Preisschwellen, Preisanker, dynamic pricing',
        ],
      },
      {
        titel: 'Place',
        punkte: [
          'Direkt (Außendienst, Filiale, Onlineshop) ↔ indirekt (Handel, Vermittler, Marktplätze)',
        ],
      },
      {
        titel: 'Promotion',
        punkte: [
          'CI: Corporate Design, Communication, Behavior',
          'AIDAS · Massen-/Zielgruppen-/Individualwerbung',
          'Werbemittel (Gestaltung) ↔ Werbeträger (Transport) · TKP = Kosten · 1.000 / Reichweite',
          'Werbeplanung: Ziel, Budget, Objekt, Subjekt, Botschaft, Mittel/Träger, Periode, Erfolgskontrolle',
          'PR, Verkaufsförderung, Sponsoring · Vorsicht Greenwashing',
          'Marketingkonzept: Situationsanalyse → Ziele → Strategie (STP) → Marketingmix → Umsetzung',
        ],
      },
    ],
  },
'material-warenwirtschaft': {
    schritte: [
      {
        titel: 'Aufgaben & Ziele',
        blocks: [
          {
            type: 'begriff',
            term: 'Material- und Warenwirtschaft',
            erklaerung: 'Stellt die Güter zur Verfügung, die ein Unternehmen für die Leistungserstellung braucht.',
          },
          {
            type: 'tabelle',
            spalten: ['Die Güter müssen bereitgestellt werden …'],
            zeilen: [
              ['in der erforderlichen Qualität'],
              ['in der richtigen Menge'],
              ['zum richtigen Zeitpunkt'],
              ['am richtigen Ort'],
            ],
          },
          { type: 'merke', text: 'Dabei Kosten minimieren (Beschaffung, Material, Lagerung) und soziale und ökologische Kriterien einhalten (z. B. regional einkaufen).' },
          {
            type: 'vergleich',
            links: { titel: 'Materialwirtschaft', punkte: ['v. a. bei Produktionsbetrieben', 'Beschaffung von Roh-, Hilfs- und Betriebsstoffen'] },
            rechts: { titel: 'Warenwirtschaft', punkte: ['v. a. bei Handelsbetrieben', 'Beschaffung von Handelswaren für Kunden'] },
          },
        ],
      },
      {
        titel: 'Bereiche & Zielkonflikte',
        blocks: [
          {
            type: 'kette',
            glieder: [
              { titel: 'Beschaffungsmarketing', wert: 'Beschaffung' },
              { titel: 'Lagerlogistik', wert: 'Lagerung' },
              { titel: 'Transportlogistik', wert: 'Verteilung' },
              { titel: 'Entsorgungslogistik', wert: 'Entsorgung' },
            ],
          },
          {
            type: 'begriff',
            term: 'Supply Chain (Lieferkette)',
            erklaerung: 'Alle Akteure vom Rohstoff bis zum Verkauf des fertigen Produkts. Supply-Chain-Management optimiert die Prozesse entlang dieser Kette.',
          },
          {
            type: 'begriff',
            term: 'Logistik',
            erklaerung: 'System, das innerhalb eines Unternehmens und unternehmensübergreifend die optimale Versorgung mit Waren und Informationen sicherstellt.',
          },
          {
            type: 'begriff',
            term: 'Zielkonflikt',
            erklaerung: 'Sachziel (störungsfreie Leistungserstellung), ökonomisches Ziel (Kosten minimieren) und soziale/ökologische Ziele stehen in Konkurrenz.',
            beispiel: 'Regionale Zutaten: gut für die Umwelt, aber teurer',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Material- & Warenwirtschaft',
        punkte: [
          'Aufgabe: benötigte Güter in richtiger Qualität, Menge, Zeit und Ort bereitstellen',
          'Kosten minimieren + soziale/ökologische Kriterien',
          'Materialwirtschaft (Produktion: Roh-, Hilfs-, Betriebsstoffe) ↔ Warenwirtschaft (Handel: Handelswaren)',
          'Bereiche: Beschaffung, Lagerung, Verteilung (Transport), Entsorgung = Lieferkette (Supply Chain)',
          'Zielkonflikt: Sachziel ↔ ökonomisches Ziel ↔ soziale/ökologische Ziele',
        ],
      },
    ],
  },
'beschaffungsmarketing': {
    schritte: [
      {
        titel: 'Überblick',
        blocks: [
          {
            type: 'begriff',
            term: 'Beschaffungsmarketing (Beschaffungslogistik)',
            erklaerung: 'Marketing auf der EINKAUFSSEITE: Lieferanten und Beschaffungsmarkt beeinflussen, um den Einkauf zu optimieren.',
          },
          {
            type: 'ablauf',
            titel: 'Ablauf',
            schritte: [
              { titel: 'Beschaffungsmarktforschung', text: 'passende Märkte und Lieferanten suchen' },
              { titel: 'Beschaffungsprogrammpolitik', text: 'welche Güter in welcher Menge?' },
              { titel: 'Beschaffungsmethodenpolitik', text: 'nach welchem Prinzip wird eingekauft?' },
              { titel: 'Beschaffungskonditionenpolitik', text: 'zu welchen Konditionen?' },
              { titel: 'Beschaffungskommunikationspolitik', text: 'gute Lieferantenbeziehungen' },
              { titel: 'Beschaffungsdurchführung und -kontrolle' },
            ],
          },
        ],
      },
      {
        titel: 'Marktforschung & Programm',
        blocks: [
          {
            type: 'vergleich',
            frage: 'Beschaffungsmarktforschung:',
            links: { titel: 'Sekundärforschung', punkte: ['Vorhandene Infos auswerten', 'intern: Lieferantendatei, Lagerstatistik', 'extern: Kataloge, Websites'] },
            rechts: { titel: 'Primärforschung', punkte: ['Neue Infos beschaffen', 'Anfragen bei Lieferanten', 'Messen besuchen', 'Experten befragen'] },
          },
          { type: 'text', text: 'Kriterien bei der Lieferantenauswahl: z. B. Preis, Qualität, Zuverlässigkeit, Nachhaltigkeit.' },
          {
            type: 'begriff',
            term: 'Beschaffungsprogrammpolitik',
            erklaerung: 'Legt fest, welche Sachgüter und Dienstleistungen in welcher Menge beschafft werden – abhängig vom eigenen Produktionsprogramm bzw. Sortiment.',
          },
        ],
      },
      {
        titel: 'Beschaffungsorganisation & -prinzipien',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Zentrale Beschaffung (1 Stelle)', punkte: ['+ günstige Konditionen durch große Mengen', '+ gute Kontrolle', '− mehr Verwaltung', '− wenig flexibel'] },
            rechts: { titel: 'Dezentrale Beschaffung', punkte: ['Mehrere Stellen (Filialen)', 'Flexibler bei Notfällen', 'Waren schneller vor Ort'] },
          },
          {
            type: 'tabelle',
            spalten: ['Prinzip', 'So funktioniert es', '+', '−'],
            zeilen: [
              ['Vorratsbeschaffung', 'große Mengen kaufen und lagern', 'immer verfügbar, Mengenrabatte', 'hohe Lagerkosten, Kapitalbindung, Verderb'],
              ['Just-in-time', 'Lieferung genau dann, wenn gebraucht', 'kaum Lagerkosten, wenig Kapitalbindung', 'Produktionsstopp bei Lieferverzug'],
              ['Einzelbeschaffung', 'erst bestellen, wenn Auftrag da ist', 'kurze Lagerdauer, kein Verderb', 'Verzögerungen, weniger Rabatt'],
            ],
          },
          { type: 'merke', text: 'Es gibt KEIN ideales Prinzip – meist werden alle drei kombiniert, je nach Gut.' },
        ],
      },
      {
        titel: 'ABC- und XYZ-Analyse',
        blocks: [
          {
            type: 'begriff',
            term: 'ABC-Analyse',
            erklaerung: 'Teilt Güter nach ihrem Anteil am Gesamtwert bzw. an der Gesamtmenge in 3 Klassen ein.',
          },
          {
            type: 'tabelle',
            spalten: ['Klasse', 'Wertanteil', 'Mengenanteil', 'Maßnahmen'],
            zeilen: [
              ['A-Güter', 'hoch (ca. 70 %)', 'gering (ca. 10 %)', 'meiste Aufmerksamkeit, genaue Kostenanalyse, niedriger Lagerbestand'],
              ['B-Güter', 'mittel (ca. 20 %)', 'mittel (ca. 20 %)', 'je nach Bedeutung'],
              ['C-Güter', 'gering (ca. 10 %)', 'hoch (ca. 70 %)', 'selten in großen Mengen bestellen, höherer Lagerbestand'],
            ],
          },
          {
            type: 'ablauf',
            titel: 'ABC-Analyse in 3 Stufen',
            schritte: [
              { titel: 'Zahlen erfassen', text: 'Jahresbedarf in € = Menge · Preis' },
              { titel: 'Zahlen sortieren', text: 'absteigend nach Wert, Rang vergeben' },
              { titel: 'Zahlen auswerten', text: '%-Anteil berechnen, kumulieren, Klassen einteilen (z. B. A < 75 %, B 75–90 %, C > 90 %)' },
            ],
          },
          {
            type: 'formel',
            name: 'Prozentanteil',
            zaehler: 'Jahresbedarf des Gutes',
            nenner: 'gesamter Jahresbedarf',
            faktor: '· 100',
          },
          {
            type: 'begriff',
            term: 'XYZ-Analyse',
            erklaerung: 'Teilt Güter nach der Regelmäßigkeit ihres Verbrauchs ein.',
          },
          {
            type: 'tabelle',
            spalten: ['Klasse', 'Verbrauch', 'Vorhersage'],
            zeilen: [
              ['X-Güter', 'regelmäßig', 'gut vorhersagbar'],
              ['Y-Güter', 'saisonal schwankend', 'ungefähr vorhersagbar'],
              ['Z-Güter', 'sehr unregelmäßig', 'kaum vorhersagbar'],
            ],
          },
          { type: 'merke', text: 'Kombination ABC + XYZ: z. B. AX → Just-in-time · CX → Vorratsbeschaffung · AZ → Einzelbeschaffung.' },
        ],
      },
      {
        titel: 'Bedarf & Bestellmenge',
        blocks: [
          {
            type: 'begriff',
            term: 'Programmgebundene Bedarfsermittlung',
            erklaerung: 'Die Menge ergibt sich aus dem Produktionsprogramm (Aufträge).',
          },
          {
            type: 'tabelle',
            spalten: ['Berechnung Nettobedarf'],
            zeilen: [
              ['Materialbedarf laut Stückliste · Produktionsmenge'],
              ['= Bruttobedarf (Gesamtbedarf)'],
              ['− Lagerbestand'],
              ['= Nettobedarf (tatsächlich zu beschaffen)'],
            ],
          },
          {
            type: 'begriff',
            term: 'Bestandsgesteuerte Bedarfsermittlung',
            erklaerung: 'Der Lagerbestand entscheidet, ob bestellt wird.',
          },
          {
            type: 'tabelle',
            spalten: ['Verfahren', 'Wann wird bestellt?'],
            zeilen: [
              ['Bestellpunktsystem', 'automatisch, sobald der Meldebestand erreicht ist'],
              ['Bestellrhythmussystem', 'zu festen Kontrollzeitpunkten wird geprüft, ob bestellt wird'],
              ['Optionalsystem', 'feste Zeitpunkte – aber früher, wenn Meldebestand unterschritten'],
            ],
          },
          {
            type: 'begriff',
            term: 'Meldebestand',
            erklaerung: 'Durchschnittsverbrauch · Beschaffungszeit + Sicherheitsbestand',
            beispiel: '10 Flaschen/Woche · 2 Wochen + 5 = 25 Flaschen',
          },
          {
            type: 'begriff',
            term: 'Optimale Bestellmenge',
            erklaerung: 'Menge, bei der Bestell- + Lagerkosten am geringsten sind. Kleine Mengen → hohe Bestellkosten; große Mengen → hohe Lagerkosten.',
          },
          {
            type: 'formel',
            name: 'Optimale Bestellmenge',
            zaehler: '√(200 · Jahresbedarf · feste Bestellkosten)',
            nenner: '√(Preis je Einheit · Lagerhaltungskostensatz)',
            beispiel: '√(200 · 2500 · 20 / (100 · 16)) ≈ 80 Stück',
          },
          { type: 'merke', text: 'Lagerhaltungskostensatz = Zinssatz + Lagerkostensatz. Die Formel passt nicht bei stark schwankendem Verbrauch.' },
        ],
      },
      {
        titel: 'Konditionen, Kommunikation & Durchführung',
        blocks: [
          {
            type: 'begriff',
            term: 'Beschaffungskonditionenpolitik',
            erklaerung: 'Aktiv auf Vertragspunkte einwirken: Preis (Rabatt, Skonto), Zahlungs- und Lieferbedingungen, Garantie.',
          },
          {
            type: 'begriff',
            term: 'Beschaffungskommunikationspolitik',
            erklaerung: 'Lieferantenbeziehungen ausbauen und neue Lieferanten gewinnen – durch positives Image als Einkäufer (Beschaffungswerbung, PR, Lieferantenförderung).',
          },
          {
            type: 'ablauf',
            titel: 'Beschaffungsdurchführung und -kontrolle',
            schritte: [
              { titel: 'Bedarfsmeldung' },
              { titel: 'Auswahl möglicher Lieferanten' },
              { titel: 'Anfragen stellen / Angebote einholen' },
              { titel: 'Angebotsvergleich' },
              { titel: 'Bestellung' },
              { titel: 'Lieferung' },
              { titel: 'Annahme und Prüfung der Waren' },
              { titel: 'Rechnungsprüfung und Zahlung' },
            ],
          },
          {
            type: 'begriff',
            term: 'E-Procurement',
            erklaerung: 'Elektronische Beschaffung (B2B-Onlinehandel). Geschlossene Systeme (2 Partner exklusiv), halboffene (Portal eines Händlers), offene (Marktplatz, z. B. Amazon Business).',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Beschaffungsmarketing',
        punkte: [
          'Marktforschung (primär/sekundär) → Programm → Methoden → Konditionen → Kommunikation → Durchführung & Kontrolle',
          'Zentrale (günstig, Kontrolle) ↔ dezentrale Beschaffung (flexibel)',
          'Vorrats- · Just-in-time- · Einzelbeschaffung',
        ],
      },
      {
        titel: 'Analysen',
        punkte: [
          'ABC: nach Wertanteil (A hoher Wert/wenig Menge, C geringer Wert/viel Menge)',
          'ABC-Stufen: erfassen → sortieren → auswerten (kumulieren, Klassen)',
          'XYZ: nach Verbrauch (X regelmäßig, Y saisonal, Z unregelmäßig)',
        ],
      },
      {
        titel: 'Bedarf',
        punkte: [
          'Programmgebunden: Stückliste · Menge = Brutto − Lager = Nettobedarf',
          'Bestandsgesteuert: Bestellpunkt-, Bestellrhythmus-, Optionalsystem',
          'Meldebestand = Ø-Verbrauch · Beschaffungszeit + Sicherheitsbestand',
          'Optimale Bestellmenge = √(200 · Jahresbedarf · Bestellkosten / (Preis · Lagerhaltungskostensatz))',
          'E-Procurement: geschlossen, halboffen, offen',
        ],
      },
    ],
  },
'lager-transport-entsorgung': {
    schritte: [
      {
        titel: 'Funktionen des Lagers',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Funktion', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Umformung (Reifung)', 'Güter reifen/trocknen im Lager', 'Holz, Whisky, Käse'],
              ['Sicherung', 'Sicherheitsbestand bei Lieferverzug oder mehr Bedarf', 'Reservevorrat'],
              ['Spekulation', 'frühzeitig kaufen, weil Preise steigen werden', 'Gewürze auf Vorrat'],
              ['Ausgleich (Überbrückung)', 'zeitlicher Ausgleich zwischen Einkauf, Fertigung, Absatz', 'Brandwein 1× pro Jahr geliefert'],
              ['Warenpräsentation', 'Lager ist gleichzeitig Verkaufsraum', 'IKEA'],
              ['Entsorgung', 'Reste und Verpackungen sammeln', 'Altstände, Verpackung'],
            ],
          },
        ],
      },
      {
        titel: 'Lagerarten',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Bauform', 'Für …', 'Beispiel'],
            zeilen: [
              ['Offenes Lager', 'wetterunempfindliche, nicht diebstahlgefährdete Waren', 'Rohholz, Sand'],
              ['Halboffenes Lager', 'befestigte Fläche mit Zaun/Dach', 'Holzbretter, Maschinen'],
              ['Geschlossenes Lager', 'wetterempfindliche, diebstahlgefährdete Waren', 'Lebensmittel, Elektronik'],
            ],
          },
          {
            type: 'vergleich',
            frage: 'Nach dem Standort:',
            links: { titel: 'Zentrales Lager', punkte: ['+ geringere Lager- & Personalkosten', '+ hohe Warenverfügbarkeit', '+ weniger Kapitalbindung', '− längere Transportwege', '− weniger flexibel'] },
            rechts: { titel: 'Dezentrales Lager', punkte: ['Waren auf mehrere Lager verteilt', 'Sortiment auf Kunden in der Nähe abgestimmt', 'kürzere Wege zum Kunden'] },
          },
          {
            type: 'vergleich',
            frage: 'Nach der Lagerplatzzuordnung:',
            links: { titel: 'Festplatzsystem', punkte: ['Jede Ware hat einen fixen Platz', 'Platz für die höchste Bestellung nötig'] },
            rechts: { titel: 'Freiplatzsystem (chaotisch)', punkte: ['Ware kommt dorthin, wo Platz frei ist', '+ optimale Platznutzung, flexibel', '− braucht EDV, nicht für Gefahrengüter', 'z. B. Amazon'] },
          },
        ],
      },
      {
        titel: 'Lagerkennzahlen',
        blocks: [
          {
            type: 'text',
            text: 'Ziel: Kosten minimieren, Ertrag und Liquidität maximieren, Ladenhüter vermeiden. Lagerhaltung je nach ABC: A-Güter genau überwachen, wenig Bestand · C-Güter höherer Bestand.',
          },
          {
            type: 'formel',
            name: 'Ø Lagerbestand',
            zaehler: 'Anfangsbestand + Endbestand',
            nenner: '2',
            beispiel: '(20.000 + 25.000) / 2 = 22.500 €',
          },
          {
            type: 'formel',
            name: 'Lagerumschlagshäufigkeit',
            zaehler: 'Wareneinsatz',
            nenner: 'Ø Lagerbestand',
            beispiel: '50.000 / 22.500 = 2,22-mal pro Jahr',
          },
          {
            type: 'formel',
            name: 'Lagerumschlagsdauer',
            zaehler: '365',
            nenner: 'Lagerumschlagshäufigkeit',
            beispiel: '365 / 2,22 = 164 Tage',
          },
          {
            type: 'formel',
            name: 'Lagerkosten in %',
            zaehler: 'Lagerkosten',
            nenner: 'Ø Lagerbestand',
            faktor: '· 100',
          },
          { type: 'merke', text: 'Umschlagshäufigkeit soll HOCH sein, Umschlagsdauer GERING. Erreicht durch Bestandsüberwachung, Höchstbestände, schlankeres Angebot, Just-in-time, Aktionen. Wareneinsatz = Einstandspreis · Verkäufe.' },
        ],
      },
      {
        titel: 'Transport & Entsorgung',
        blocks: [
          {
            type: 'begriff',
            term: 'Transportlogistik',
            erklaerung: 'Befördert Waren vom Lieferanten zum Betrieb, innerhalb des Betriebs und vom Betrieb zum Kunden. Ziel: Transportzeiten und Wege minimieren, Versorgungssicherheit maximieren.',
          },
          {
            type: 'begriff',
            term: 'Entsorgungslogistik',
            erklaerung: 'Sammeln, Sortieren, Verpacken, Lagern und Abtransportieren von Abfällen (Reste, Ausschuss, Verpackung, Retouren).',
          },
          {
            type: 'ablauf',
            titel: 'Abfallhierarchie (wichtigste zuerst)',
            schritte: [
              { titel: 'Abfallvermeidung' },
              { titel: 'Vorbereitung zur Wiederverwendung' },
              { titel: 'Recycling' },
              { titel: 'Sonstige Verwertung', text: 'z. B. Kompostierung, Energie' },
              { titel: 'Beseitigung', text: 'nur, wenn nichts anderes geht' },
            ],
          },
          { type: 'merke', text: 'Seit 2025 gibt es in Österreich Pfand auf Einweg-Getränkeverpackungen (25 Cent).' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Lager',
        punkte: [
          'Funktionen: Umformung, Sicherung, Spekulation, Ausgleich, Warenpräsentation, Entsorgung',
          'Bauform: offen, halboffen, geschlossen',
          'Standort: zentral (günstig, effizient) ↔ dezentral (nah am Kunden)',
          'Lagerplatz: Festplatz ↔ Freiplatz (chaotisch, EDV)',
        ],
      },
      {
        titel: 'Kennzahlen',
        punkte: [
          'Ø Lagerbestand = (AB + EB) / 2',
          'Umschlagshäufigkeit = Wareneinsatz / Ø Lagerbestand (hoch = gut)',
          'Umschlagsdauer = 365 / Umschlagshäufigkeit (gering = gut)',
        ],
      },
      {
        titel: 'Transport & Entsorgung',
        punkte: [
          'Transport: Lieferant → Betrieb → intern → Kunde',
          'Abfallhierarchie: vermeiden → wiederverwenden → recyceln → verwerten → beseitigen',
        ],
      },
    ],
  },
'supply-chain-management': {
    schritte: [
      {
        titel: 'Was ist SCM?',
        blocks: [
          {
            type: 'begriff',
            term: 'Supply Chain (Lieferkette, Wertschöpfungskette)',
            erklaerung: 'Alle Unternehmen, die an der Erzeugung eines Produkts beteiligt sind – vom Rohstoff bis zum Endverbraucher.',
          },
          {
            type: 'kette',
            glieder: [
              { titel: '1', wert: 'Vorlieferant' },
              { titel: '2', wert: 'Lieferant' },
              { titel: '3', wert: 'Hersteller' },
              { titel: '4', wert: 'Handel' },
              { titel: '5', wert: 'Endverbraucher' },
            ],
          },
          {
            type: 'begriff',
            term: 'Supply-Chain-Management (SCM)',
            erklaerung: 'Planung des optimalen Material- und Informationsflusses auf ALLEN Stufen der Lieferkette – alle Glieder arbeiten zusammen.',
          },
          { type: 'merke', text: 'In der Lieferkette fließen Güter, Geld, Dienstleistungen und Informationen. Am Ende kommt noch der Entsorger.' },
        ],
      },
      {
        titel: 'Chancen & Risiken',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Chancen', punkte: ['Höhere Kundenzufriedenheit (Termintreue, Qualität)', 'Weniger Kapitalbindung (geringere Lagerbestände)', 'Bedarf besser vorhersagbar', 'Zeitersparnis (kürzere Durchlaufzeit)', 'Synergieeffekte (z. B. gemeinsames Marketing)'] },
            rechts: { titel: 'Risiken', punkte: ['Internes Wissen wird öffentlich', 'Imageschaden durch Fehler anderer', 'Abhängigkeit (Ausfall trifft die ganze Kette)', 'Hoher Zeitaufwand, Komplexität'] },
          },
          {
            type: 'begriff',
            term: 'Durchlaufzeit',
            erklaerung: 'Zeitspanne für die Bearbeitung eines Auftrags bzw. für einen Prozess zwischen Unternehmen.',
          },
          { type: 'merke', text: 'EU-Lieferkettengesetz (2024): EU-Unternehmen dürfen nicht mit Lieferanten arbeiten, die Kinder- oder Zwangsarbeit einsetzen.' },
        ],
      },
      {
        titel: 'Maßnahmen für ein erfolgreiches SCM',
        blocks: [
          {
            type: 'begriff',
            term: 'Resiliente Supply Chain',
            erklaerung: 'Widerstandsfähig gegen unvorhersehbare Ereignisse (Krieg, Pandemie, Wirtschaftskrise) – Störungen werden abgefedert.',
          },
          {
            type: 'tabelle',
            spalten: ['Maßnahme', 'Bedeutung'],
            zeilen: [
              ['Supply-Chain-Software', 'APS-Systeme helfen bei Planung und Steuerung'],
              ['Multi-Sourcing', 'mehrere Lieferanten statt einem (z. B. Apple: China + Indien + Vietnam)'],
              ['Kooperation optimieren', 'gemeinsame Ziele, klare Verträge, transparenter Datenaustausch'],
              ['An Kunden orientieren', 'alles auf Kundenbedürfnisse ausrichten'],
              ['Pufferbestände einplanen', 'kosten Geld, sichern aber die Versorgung'],
            ],
          },
          {
            type: 'begriff',
            term: 'Resilienz-Effizienz-Dilemma',
            erklaerung: 'Mehr Sicherheit (Puffer, mehrere Lieferanten) kostet mehr Geld und Koordination – weniger effizient.',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Supply-Chain-Management',
        punkte: [
          'Supply Chain = alle Unternehmen vom Rohstoff bis zum Endverbraucher',
          'SCM = optimaler Material- und Informationsfluss über die ganze Kette',
          'Chancen: Kundenzufriedenheit, weniger Kapitalbindung, kürzere Durchlaufzeit, Synergien',
          'Risiken: Wissensabfluss, Imageschaden, Abhängigkeit, Komplexität',
          'Resilienz durch: SCM-Software (APS), Multi-Sourcing, Kooperation, Kundenorientierung, Pufferbestände',
          'Resilienz-Effizienz-Dilemma: mehr Sicherheit = mehr Kosten',
        ],
      },
    ],
  },
'logistik': {
    schritte: [
      {
        titel: 'Logistikbetriebe',
        blocks: [
          {
            type: 'begriff',
            term: 'Logistik',
            erklaerung: 'Ganzheitliche Planung, Steuerung, Durchführung und Kontrolle aller Güter- und Informationsflüsse. Teil der Supply Chain.',
          },
          {
            type: 'tabelle',
            spalten: ['Logistikbetrieb', 'Aufgabe', 'Beispiel'],
            zeilen: [
              ['Spediteur (Transportorganisation)', 'organisiert Transporte im eigenen Namen, beauftragt Frachtführer', 'LKW WALTER, DB Schenker'],
              ['Frachtführer (Transportbetrieb)', 'führt den Transport tatsächlich durch', 'Transportunternehmen mit Lkw'],
              ['Lager- und Umschlagbetrieb', 'sammeln, lagern, umladen, verteilen', 'Wiener Hafen, Cargo Center Graz'],
              ['Zustelldienste', 'kleinere Sendungen bis zur Haustür', 'Post, Kurier-, Express-, Paketdienste'],
            ],
          },
          {
            type: 'vergleich',
            frage: 'Verträge:',
            links: { titel: 'Speditionsvertrag', punkte: ['Auftraggeber ↔ Spediteur'] },
            rechts: { titel: 'Frachtvertrag', punkte: ['Spediteur ↔ Frachtführer'] },
          },
          {
            type: 'tabelle',
            spalten: ['', 'Spediteur', 'Frachtführer'],
            zeilen: [
              ['Pflichten', 'Sorgfaltspflicht, Haftung für Sach- und Vermögensschäden', 'Beförderungspflicht, Sorgfaltspflicht, Haftung bei Verschulden'],
              ['Rechte', 'Speditionsprovision, Pfandrecht, Selbsteintrittsrecht (selbst transportieren)', 'Recht auf Entgelt (Fracht), Pfandrecht'],
            ],
          },
        ],
      },
      {
        titel: 'Transportmittel',
        blocks: [
          {
            type: 'text',
            text: 'Kriterien für die Wahl: Kosten & Schnelligkeit, Zuverlässigkeit, Sicherheit, Umweltbelastung, Massenleistungsfähigkeit, Eignung für bestimmte Güter, Netzbildung.',
          },
          {
            type: 'tabelle',
            spalten: ['Transportmittel', 'Vorteile', 'Nachteile', 'Geeignet für'],
            zeilen: [
              ['Straße (Lkw)', 'flexibel, Haus-zu-Haus', 'Schadstoffe, Staus, Fahrverbote', 'Stückgüter, Just-in-time'],
              ['Schiene (Bahn)', 'umweltfreundlichstes, sicher, große Kapazität', 'an Schienen gebunden, Umladen nötig', 'Massengüter, Gefahrgut'],
              ['Binnenschiff', 'günstig, umweltfreundlich', 'langsam, an Wasserstraßen gebunden', 'schwere, unverderbliche Güter'],
              ['Seeschiff', 'größte Kapazität, günstig, Übersee', 'langsam, Piraterie', 'Container, große Sendungen'],
              ['Flugzeug', 'schnellstes, hohe Netzdichte', 'teuerstes, wenig Kapazität, Lärm', 'leichte, verderbliche, wertvolle Güter'],
            ],
          },
          {
            type: 'begriff',
            term: 'Werkverkehr',
            erklaerung: 'Ein Unternehmen transportiert seine Güter mit eigenen Fahrzeugen und eigenem Personal.',
          },
          {
            type: 'begriff',
            term: 'Kombinierter Verkehr',
            erklaerung: 'Güter in Ladeeinheiten werden ohne Umladen mit mindestens 2 Verkehrsträgern befördert.',
          },
          {
            type: 'vergleich',
            links: { titel: 'Behälterverkehr', punkte: ['Container wird umgeladen', 'Binnencontainer, Überseecontainer'] },
            rechts: { titel: 'Huckepackverkehr', punkte: ['Load-on/Load-off: nur Sattelauflieger', 'Rollende Landstraße (RoLa): ganzer Lkw auf die Bahn', 'Roll-on/Roll-off (RoRo): ganzer Lkw aufs Schiff'] },
          },
        ],
      },
      {
        titel: 'Transportdokumente',
        blocks: [
          {
            type: 'vergleich',
            links: { titel: 'Frachtbriefe', punkte: ['Nachweis, dass Ware versendet wurde', 'Straße: CMR-Frachtbrief', 'Bahn: CIM-Frachtbrief', 'Luft: Air Waybill'] },
            rechts: { titel: 'Traditionspapiere', punkte: ['Wertpapier: verbriefen das Recht an der Ware', 'Seekonnossement (Bill of Lading)', 'Flusskonnossement', 'FIATA Multimodal (FBL) – kombiniert'] },
          },
          { type: 'merke', text: 'Frachtbriefe → Straße, Bahn, Luft. Traditionspapiere → Schiff und kombinierter Verkehr. Wer das Traditionspapier besitzt, kann über die Ware verfügen.' },
          {
            type: 'begriff',
            term: 'Begleitpapiere',
            erklaerung: 'Begleiten die Fracht: Ursprungszeugnis, Warenverkehrsbescheinigung, Genehmigungen, Pro-Forma- und Handelsrechnung, Packliste.',
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Logistikbetriebe',
        punkte: [
          'Spediteur organisiert (Speditionsvertrag), Frachtführer transportiert (Frachtvertrag)',
          'Spediteur: Provision, Pfandrecht, Selbsteintrittsrecht · Frachtführer: Fracht, Pfandrecht',
          'Lager-/Umschlagbetriebe, Zustelldienste (Post, KEP)',
        ],
      },
      {
        titel: 'Transport',
        punkte: [
          'Lkw flexibel · Bahn umweltfreundlich · Binnenschiff günstig · Seeschiff größte Kapazität · Flugzeug schnell/teuer',
          'Werkverkehr = eigene Fahrzeuge',
          'Kombinierter Verkehr: Behälterverkehr (Container) · Huckepack (LoLo, RoLa, RoRo)',
        ],
      },
      {
        titel: 'Dokumente',
        punkte: [
          'Frachtbriefe: CMR (Lkw), CIM (Bahn), Air Waybill (Luft)',
          'Traditionspapiere (Wertpapier): See-/Flusskonnossement, FBL',
        ],
      },
    ],
  },
'der-handel': {
    schritte: [
      {
        titel: 'Grundlagen des Handels',
        blocks: [
          {
            type: 'begriff',
            term: 'Handelsbetrieb',
            erklaerung: 'Kauft Produkte von Herstellern, stellt sie zu einem Sortiment zusammen und verkauft sie weiter – OHNE sie wesentlich zu verarbeiten.',
          },
          {
            type: 'vergleich',
            frage: 'Nach der Art der Abnehmer:',
            links: { titel: 'Einzelhandel', punkte: ['Verkauft an Letztverbraucher (Konsumenten)', 'z. B. Thalia, Lidl'] },
            rechts: { titel: 'Großhandel', punkte: ['Verkauft an andere Unternehmen', 'z. B. Metro, Schachermayer'] },
          },
          {
            type: 'vergleich',
            frage: 'Nach dem Wirtschaftsraum:',
            links: { titel: 'Binnenhandel', punkte: ['Innerhalb eines Staates'] },
            rechts: { titel: 'Außenhandel', punkte: ['Zwischen verschiedenen Staaten'] },
          },
          { type: 'merke', text: 'Der Handel ist der zweitgrößte Arbeitgeber Österreichs – etwa ein Viertel aller unselbstständig Beschäftigten.' },
        ],
      },
      {
        titel: 'Funktionen des Handels',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Funktion', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Räumliche Überbrückung', 'Produkte vom Ort der Produktion zum Ort des Verkaufs bringen (Transport)', 'Coca-Cola überall auf der Welt kaufen'],
              ['Zeitliche Überbrückung', 'Lagerung zwischen Produktion und Verkauf', 'Christbaumkugeln im Juni gekauft, bis Oktober gelagert'],
              ['Quantitativer Ausgleich', 'große Mengen einkaufen, kleine verkaufen (Sammel- und Verteilungsfunktion)', 'Getreide von vielen Bauern → Mehl an Bäckereien'],
              ['Qualitativer Ausgleich', 'bedarfsgerechtes Sortiment bilden, Qualität prüfen', 'farblich abgestimmte Kollektionen'],
            ],
          },
        ],
      },
      {
        titel: 'Betriebsformen des Einzelhandels',
        blocks: [
          { type: 'text', text: 'Unterscheiden sich durch Sortiment, Bedienungsform, Preise und Verkaufsraum.' },
          {
            type: 'tabelle',
            spalten: ['Stationär (fester Standort)', 'Erklärung'],
            zeilen: [
              ['Fach-/Spezialgeschäft', 'eine Branche, große Auswahl, Beratung (Parfümerie)'],
              ['Fachmarkt', 'große Fläche, Selbstbedienung, eher günstig (MediaMarkt)'],
              ['Supermarkt', 'Lebensmittel + Waren des täglichen Bedarfs'],
              ['Diskonter', 'niedrige Preise, einfache Ausstattung (Lidl, Penny)'],
              ['Einkaufszentrum', 'viele Geschäfte unter einem Dach (SCS)'],
              ['Convenience-Store', 'klein, lange offen, höhere Preise (Tankstellenshop)'],
              ['Factory-Outlet-Center', 'Markenartikel günstiger (Parndorf)'],
              ['Pop-up-Store', 'vorübergehend in leeren Geschäften'],
            ],
          },
          {
            type: 'vergleich',
            links: { titel: 'Versandhandel (Distanzhandel)', punkte: ['Bestellung aus der Distanz, Lieferung nach Hause', 'Klassischer Versandhandel (Katalog)', 'Teleshopping', 'E-Commerce: Onlineshop, virtueller Marktplatz, M-Commerce'] },
            rechts: { titel: 'Ambulanter (halbstationärer) Handel', punkte: ['Kein fester Standort', 'Straßen-/Markthandel (Wochenmarkt)', 'Direktvertrieb (Vertreter, Home-Partys)'] },
          },
        ],
      },
      {
        titel: 'Großhandel & Kooperationen',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Betriebsform Großhandel', 'So funktioniert es'],
            zeilen: [
              ['Zustellgroßhandel', 'Kunde bestellt (Muster/Katalog), Großhändler liefert'],
              ['Abholgroßhandel', 'Kunde holt selbst ab; Cash-and-carry = selbst bedienen, sofort zahlen (Metro)'],
              ['Regalgroßhändler (Rackjobber)', 'mietet Regale in fremden Geschäften (Tchibo im Supermarkt)'],
              ['Virtueller Marktplatz (E-Procurement)', 'Online-Einkaufsplattform für Unternehmen'],
            ],
          },
          {
            type: 'begriff',
            term: 'Kooperation',
            erklaerung: 'Freiwillige, vertragliche Zusammenarbeit, um wettbewerbsfähig zu bleiben.',
          },
          {
            type: 'tabelle',
            spalten: ['Kooperationsform', 'Bedeutung', 'Beispiel'],
            zeilen: [
              ['Handelsgenossenschaft', 'Händler betreiben gemeinsam Einkauf, Logistik', 'ADEG, Lagerhaus'],
              ['Franchisebetrieb', 'selbstständiger Franchisenehmer nutzt Konzept des Franchisegebers', "McDonald's"],
              ['Freiwillige Handelskette', 'selbstständige Händler, gemeinsame Marke und Aufgaben', 'SPAR'],
            ],
          },
        ],
      },
      {
        titel: 'Erfolgsfaktoren & Trends',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Erfolgsfaktor', 'Bedeutung'],
            zeilen: [
              ['Gestaltung des Sortiments', 'richtige Breite und Tiefe; Hersteller- und Handelsmarken'],
              ['Geeignete Preispolitik', 'Rabatte, spezielle Angebote'],
              ['Ansprechendes Merchandising', 'ganzheitlicher Auftritt: Ladenarchitektur, Farben, Regalplatzierung, Licht, Musik, Sinne'],
              ['Idealer Standort', 'Miete, Kundennähe, Konkurrenz, Verkehrslage'],
              ['Personal', 'qualifiziert und motiviert, gute Beratung'],
              ['Kundenbindung', 'Kundenkarten, Rabattaktionen, Newsletter, Kundenclubs'],
              ['Multi-Channel-Lösungen', 'mehrere Absatzkanäle: Laden, Onlineshop, Marktplätze, Social Media'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Trends im Handel'],
            zeilen: [
              ['Neue Technologien (Roboter, Bezahlsysteme wie Amazon Go)'],
              ['Intelligente Omni-Channel-Lösungen'],
              ['Nachhaltigkeit und soziale Verantwortung'],
              ['Individualisierung'],
              ['Regionale Produkte'],
            ],
          },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Grundlagen',
        punkte: [
          'Handelsbetrieb = kauft und verkauft ohne wesentliche Bearbeitung',
          'Einzelhandel (an Konsumenten) ↔ Großhandel (an Unternehmen) · Binnen- ↔ Außenhandel',
          'Funktionen: räumliche & zeitliche Überbrückung, quantitativer & qualitativer Ausgleich',
        ],
      },
      {
        titel: 'Betriebsformen',
        punkte: [
          'Einzelhandel stationär: Fachgeschäft, Fachmarkt, Supermarkt, Diskonter, Einkaufszentrum, Convenience, Outlet, Pop-up',
          'Versandhandel: Katalog, Teleshopping, E-Commerce (Onlineshop, Marktplatz, M-Commerce)',
          'Ambulant: Markthandel, Direktvertrieb',
          'Großhandel: Zustell-, Abhol- (Cash-and-carry), Rackjobber, virtueller Marktplatz',
          'Kooperation: Handelsgenossenschaft, Franchising, freiwillige Handelskette',
        ],
      },
      {
        titel: 'Erfolg & Trends',
        punkte: [
          'Sortiment, Preis, Merchandising, Standort, Personal, Kundenbindung, Multi-Channel',
          'Trends: Technologie, Omni-Channel, Nachhaltigkeit, Individualisierung, Regionalität',
        ],
      },
    ],
  },
'businessplan-2jg': {
    schritte: [
      {
        titel: 'Aufbau des Businessplans',
        blocks: [
          {
            type: 'begriff',
            term: 'Businessplan',
            erklaerung: 'Stellt die Geschäftsidee dar und beschreibt, wie sie umgesetzt werden soll. Ein gut durchdachter Businessplan steigert die Erfolgschancen wesentlich.',
          },
          {
            type: 'ablauf',
            titel: 'Bestandteile (ca. 20–30 Seiten)',
            schritte: [
              { titel: 'Executive Summary' },
              { titel: 'Unternehmen' },
              { titel: 'Produkt und/oder Dienstleistung' },
              { titel: 'Branche, Markt und Wettbewerb' },
              { titel: 'Marketing' },
              { titel: 'Chancen und Risiken' },
              { titel: 'Finanzplanung' },
              { titel: 'Umsetzungsfahrplan' },
            ],
          },
          {
            type: 'begriff',
            term: 'Executive Summary',
            erklaerung: 'Kurze Zusammenfassung mit den Kernaussagen und wichtigsten Kennzahlen. Steht am Anfang, wird aber ZULETZT geschrieben. Soll neugierig machen.',
          },
          { type: 'merke', text: 'Ergänzen: Deckblatt, Inhaltsverzeichnis, Quellenverzeichnis. Detailunterlagen (Lebensläufe, Angebote) kommen in den Anhang.' },
        ],
      },
      {
        titel: 'Unternehmen & Standort',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Unternehmens- und Gründerprofil', 'Inhalt'],
            zeilen: [
              ['Geschäftsidee und Vision', 'Vision = Vorstellungsbild, wie sich das Unternehmen langfristig entwickeln soll'],
              ['Wichtige Personen', 'Gründer, Geschäftsführer und ihre Qualifikationen'],
              ['Rechtsform und Firmenname', 'Vor- und Nachteile abwägen'],
              ['Unternehmensstandort', 'gut überlegen – spätere Änderung ist teuer'],
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Standortfaktoren', 'Beispiele'],
            zeilen: [
              ['Beschaffungsseitig', 'Infrastruktur, Arbeitskräfte, Nähe zu Lieferanten, Mieten, Lebensqualität'],
              ['Produktionsbezogen', 'rechtliche Vorschriften, Steuern, Förderungen, politische Sicherheit'],
              ['Absatzorientiert', 'Kundennähe, Wettbewerb, Verkehrslage, Image des Standorts'],
            ],
          },
          {
            type: 'ablauf',
            titel: 'Scoring-Methode (Punktwertmethode)',
            schritte: [
              { titel: 'Wichtige Standortfaktoren festlegen' },
              { titel: 'Faktoren gewichten', text: 'zusammen 100 %' },
              { titel: 'Standorte bewerten', text: 'z. B. 1 (sehr schlecht) bis 5 (sehr gut)' },
              { titel: 'Punkte × Gewichtung' },
              { titel: 'Gewichtete Punkte addieren' },
              { titel: 'Höchstes Ergebnis = bester Standort' },
            ],
          },
          {
            type: 'tabelle',
            spalten: ['Faktor', 'Gewichtung', 'A: Punkte → Ergebnis', 'B: Punkte → Ergebnis'],
            zeilen: [
              ['Kundennähe', '50 %', '2 → 1,0', '5 → 2,5'],
              ['Verkehrslage', '30 %', '5 → 1,5', '4 → 1,2'],
              ['Standortimage', '20 %', '3 → 0,6', '4 → 0,8'],
              ['Gesamt', '100 %', '3,1', '4,5 ✓'],
            ],
          },
        ],
      },
      {
        titel: 'Ziele & Organisation',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Ziel', 'Zeitraum', 'Beispiel'],
            zeilen: [
              ['Langfristig (strategisch)', '> 5 Jahre', 'Werte wie Nachhaltigkeit umsetzen'],
              ['Mittelfristig (taktisch)', '1–5 Jahre', 'Wann wird die Gewinnzone erreicht?'],
              ['Kurzfristig (operativ)', '< 1 Jahr', 'Dieses Quartal auf recycelbare Verpackung umstellen'],
            ],
          },
          { type: 'merke', text: 'Ziele SMART formulieren: spezifisch, messbar, attraktiv, realistisch, terminiert. Gewinnzone = Erlöse > Gesamtkosten.' },
          {
            type: 'begriff',
            term: 'Organisationsstruktur',
            erklaerung: 'Welche Aktivitäten sind nötig – und wer macht sie? Auch externe Partner anführen (manche Aufgaben werden ausgelagert).',
          },
        ],
      },
      {
        titel: 'Produkt, Markt & Marketing',
        blocks: [
          {
            type: 'tabelle',
            spalten: ['Produkt/Dienstleistung', 'Inhalt'],
            zeilen: [
              ['Kundennutzen und USP', 'Vorteile klar aus Kundensicht'],
              ['Stand der Entwicklung', 'Schritte bis zum ersten Verkauf, Markteinführung'],
              ['Leistungserstellung', 'Was selbst gemacht, was zugekauft? Maschinen, Personal?'],
              ['Schutzrechte', 'Schutz vor Nachahmern'],
            ],
          },
          {
            type: 'vergleich',
            frage: 'Schutzrechte:',
            links: { titel: 'Registrierungs- und kostenpflichtig', punkte: ['Patent (technische Innovation)', 'Gebrauchsmuster (schneller, schwächer)', 'Marke (Logo, Kennzeichen)', 'Design/Muster (Aussehen)', 'Herkunftsangaben'] },
            rechts: { titel: 'Kostenfrei, nicht registriert', punkte: ['Urheberrecht (geistige Werke)', 'Betriebsgeheimnisse'] },
          },
          {
            type: 'begriff',
            term: 'Zielgruppe & Marktpotenzial',
            erklaerung: 'Zielgruppe = Kunden, die am meisten profitieren, zahlen wollen und groß genug sind. Marktpotenzial = theoretisch mögliche Absatzmenge.',
          },
          {
            type: 'formel',
            name: 'Marktpotenzial',
            zaehler: 'Anzahl möglicher Käufer · jährliche Kaufmenge',
            nenner: '1',
            beispiel: '1.000 Personen · 4 · 52 = 208.000 Bestellungen; × 10 € = 2.080.000 € monetär',
          },
          {
            type: 'vergleich',
            links: { titel: 'Direkte Konkurrenz', punkte: ['Gleiche Branche, gleiches Angebot', 'ORF ↔ ProSieben, RTL'] },
            rechts: { titel: 'Indirekte Konkurrenz', punkte: ['Stillt das gleiche Bedürfnis anders', 'ORF ↔ Streaming, Social Media'] },
          },
          { type: 'merke', text: 'Marketing: In der Gründungsphase besonders wichtig – auf alle 4 Ps eingehen, möglichst kostengünstig.' },
        ],
      },
      {
        titel: 'Chancen, Finanzen & Umsetzung',
        blocks: [
          {
            type: 'vergleich',
            frage: 'Externe Chancen und Risiken:',
            links: { titel: 'Chancen', punkte: ['Influencer machen aufmerksam', 'Kaufkraft der Zielgruppe steigt', 'Geringe Konkurrenz'] },
            rechts: { titel: 'Risiken', punkte: ['Mitbewerber mit besserem Produkt', 'Kaufkraft sinkt', 'Großer Kunde zahlungsunfähig'] },
          },
          {
            type: 'begriff',
            term: 'Finanzplanung',
            erklaerung: 'Herzstück des Businessplans: Wie hoch ist der Kapitalbedarf und wie wird er aufgebracht (Eigen- und Fremdkapital)? Liquiditätsplan sichert die Zahlungsfähigkeit. Mind. für die ersten 3 Jahre.',
          },
          {
            type: 'begriff',
            term: 'Umsetzungsfahrplan (Meilensteinplan)',
            erklaerung: 'Listet Schritte und Aktivitäten auf: Wer macht was bis wann?',
          },
          {
            type: 'ablauf',
            titel: 'Umsetzungsfahrplan erstellen',
            schritte: [
              { titel: 'Arbeitspakete schnüren', text: 'zusammengehörende Tätigkeiten bündeln' },
              { titel: 'Meilensteine festlegen', text: 'prüfbare Zwischenziele' },
              { titel: 'Kritischen Pfad beachten', text: 'Aktivitäten ohne Zeitpuffer' },
              { titel: 'Kontrolle', text: 'Soll-Ist-Vergleich, ggf. gegensteuern' },
            ],
          },
          { type: 'merke', text: 'Unterstützung: Businessplanwettbewerbe (i2b, Jugend Innovativ), WKO-Gründerservice, kostenlose Software plan4you.' },
        ],
      },
    ],
    zusammenfassung: [
      {
        titel: 'Aufbau',
        punkte: [
          'Executive Summary · Unternehmen · Produkt · Branche/Markt/Wettbewerb · Marketing · Chancen/Risiken · Finanzplanung · Umsetzungsfahrplan',
          'Executive Summary = Kurzfassung, wird zuletzt geschrieben',
        ],
      },
      {
        titel: 'Unternehmen',
        punkte: [
          'Profil: Geschäftsidee & Vision, Personen, Rechtsform & Firmenname, Standort',
          'Standortfaktoren: beschaffungsseitig, produktionsbezogen, absatzorientiert',
          'Scoring-Methode: Faktoren gewichten (100 %) → bewerten → Punkte × Gewicht → addieren → höchstes Ergebnis',
          'Ziele: lang- (> 5 J.), mittel- (1–5 J.), kurzfristig (< 1 J.), SMART',
        ],
      },
      {
        titel: 'Markt & Rest',
        punkte: [
          'Produkt: Kundennutzen/USP, Entwicklungsstand, Leistungserstellung, Schutzrechte (Patent, Marke … / Urheberrecht)',
          'Marktpotenzial = mögliche Käufer · jährliche Kaufmenge (× Preis = monetär)',
          'Direkte ↔ indirekte Konkurrenz',
          'Finanzplanung: Kapitalbedarf + Finanzierung + Liquiditätsplan',
          'Umsetzungsfahrplan: Arbeitspakete, Meilensteine, kritischer Pfad, Kontrolle',
        ],
      },
    ],
  },
}
