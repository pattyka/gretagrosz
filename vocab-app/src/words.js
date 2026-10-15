// 366 days of themed words (10 per day, 3,660 in total). Each row: [English, German, Spanish, French, Italian].
// Any language can be learned from any other one.
// Several correct answers are separated with "|" — the first one is shown on the flashcard.

export const LANGUAGES = [
  { id: 'en', name: 'English', native: 'English', col: 0 },
  { id: 'de', name: 'German', native: 'Deutsch', col: 1 },
  { id: 'es', name: 'Spanish', native: 'Español', col: 2 },
  { id: 'fr', name: 'French', native: 'Français', col: 3 },
  { id: 'it', name: 'Italian', native: 'Italiano', col: 4 },
]

// The first 18 days
const FIRST_DAYS = [
  {
    theme: 'Basics',
    words: [
      ['hello', 'hallo|servus|grüß Gott', 'hola', 'salut|bonjour', 'ciao|salve'],
      ['goodbye', 'tschüss|auf Wiedersehen', 'adiós|hasta luego', 'au revoir|salut', 'arrivederci|ciao'],
      ['please', 'bitte', 'por favor', "s'il vous plaît|s'il te plaît", 'per favore|per piacere'],
      ['thank you', 'danke', 'gracias', 'merci', 'grazie'],
      ['yes', 'ja', 'sí', 'oui', 'sì'],
      ['no', 'nein', 'no', 'non', 'no'],
      ['sorry', 'Entschuldigung|Entschuldigen Sie', 'perdón|lo siento', 'pardon|désolé', 'scusa|scusi|mi dispiace'],
      ['good morning', 'guten Morgen', 'buenos días', 'bonjour', 'buongiorno'],
      ['good night', 'gute Nacht', 'buenas noches', 'bonne nuit', 'buonanotte'],
      ['friend', 'der Freund|die Freundin', 'el amigo|la amiga', "l'ami|l'amie", "l'amico|l'amica"],
    ],
  },
  {
    theme: 'Family',
    words: [
      ['mother', 'die Mutter', 'la madre', 'la mère', 'la madre'],
      ['father', 'der Vater', 'el padre', 'le père', 'il padre'],
      ['sister', 'die Schwester', 'la hermana', 'la sœur', 'la sorella'],
      ['brother', 'der Bruder', 'el hermano', 'le frère', 'il fratello'],
      ['child', 'das Kind', 'el niño|la niña', "l'enfant", 'il bambino|la bambina'],
      ['family', 'die Familie', 'la familia', 'la famille', 'la famiglia'],
      ['grandmother', 'die Großmutter|die Oma', 'la abuela', 'la grand-mère', 'la nonna'],
      ['grandfather', 'der Großvater|der Opa', 'el abuelo', 'le grand-père', 'il nonno'],
      ['baby', 'das Baby', 'el bebé', 'le bébé', 'il neonato|il bebè'],
      ['parents', 'die Eltern', 'los padres', 'les parents', 'i genitori'],
    ],
  },
  {
    theme: 'Food & drink',
    words: [
      ['bread', 'das Brot', 'el pan', 'le pain', 'il pane'],
      ['water', 'das Wasser', 'el agua', "l'eau", "l'acqua"],
      ['apple', 'der Apfel', 'la manzana', 'la pomme', 'la mela'],
      ['cheese', 'der Käse', 'el queso', 'le fromage', 'il formaggio'],
      ['milk', 'die Milch', 'la leche', 'le lait', 'il latte'],
      ['egg', 'das Ei', 'el huevo', "l'œuf", "l'uovo"],
      ['coffee', 'der Kaffee', 'el café', 'le café', 'il caffè'],
      ['tea', 'der Tee', 'el té', 'le thé', 'il tè'],
      ['soup', 'die Suppe', 'la sopa', 'la soupe', 'la zuppa|la minestra'],
      ['cake', 'der Kuchen|die Torte', 'el pastel|la tarta', 'le gâteau', 'la torta'],
    ],
  },
  {
    theme: 'Animals',
    words: [
      ['dog', 'der Hund', 'el perro', 'le chien', 'il cane'],
      ['cat', 'die Katze', 'el gato', 'le chat', 'il gatto'],
      ['bird', 'der Vogel', 'el pájaro|el ave', "l'oiseau", "l'uccello"],
      ['fish', 'der Fisch', 'el pez|el pescado', 'le poisson', 'il pesce'],
      ['horse', 'das Pferd', 'el caballo', 'le cheval', 'il cavallo'],
      ['cow', 'die Kuh', 'la vaca', 'la vache', 'la mucca|la vacca'],
      ['mouse', 'die Maus', 'el ratón', 'la souris', 'il topo'],
      ['rabbit', 'das Kaninchen|der Hase', 'el conejo', 'le lapin', 'il coniglio'],
      ['bear', 'der Bär', 'el oso', "l'ours", "l'orso"],
      ['pig', 'das Schwein', 'el cerdo|el puerco', 'le cochon', 'il maiale'],
    ],
  },
  {
    theme: 'Colours',
    words: [
      ['red', 'rot', 'rojo', 'rouge', 'rosso'],
      ['blue', 'blau', 'azul', 'bleu', 'blu|azzurro'],
      ['green', 'grün', 'verde', 'vert', 'verde'],
      ['yellow', 'gelb', 'amarillo', 'jaune', 'giallo'],
      ['black', 'schwarz', 'negro', 'noir', 'nero'],
      ['white', 'weiß', 'blanco', 'blanc', 'bianco'],
      ['orange', 'orange', 'naranja', 'orange', 'arancione'],
      ['pink', 'rosa|pink', 'rosa', 'rose', 'rosa'],
      ['brown', 'braun', 'marrón|café', 'marron|brun', 'marrone'],
      ['grey', 'grau', 'gris', 'gris', 'grigio'],
    ],
  },
  {
    theme: 'Numbers',
    words: [
      ['one', 'eins', 'uno', 'un|une', 'uno'],
      ['two', 'zwei', 'dos', 'deux', 'due'],
      ['three', 'drei', 'tres', 'trois', 'tre'],
      ['four', 'vier', 'cuatro', 'quatre', 'quattro'],
      ['five', 'fünf', 'cinco', 'cinq', 'cinque'],
      ['six', 'sechs', 'seis', 'six', 'sei'],
      ['seven', 'sieben', 'siete', 'sept', 'sette'],
      ['eight', 'acht', 'ocho', 'huit', 'otto'],
      ['nine', 'neun', 'nueve', 'neuf', 'nove'],
      ['ten', 'zehn', 'diez', 'dix', 'dieci'],
    ],
  },
  {
    theme: 'At home',
    words: [
      ['house', 'das Haus', 'la casa', 'la maison', 'la casa'],
      ['door', 'die Tür', 'la puerta', 'la porte', 'la porta'],
      ['window', 'das Fenster', 'la ventana', 'la fenêtre', 'la finestra'],
      ['table', 'der Tisch', 'la mesa', 'la table', 'il tavolo'],
      ['chair', 'der Stuhl', 'la silla', 'la chaise', 'la sedia'],
      ['bed', 'das Bett', 'la cama', 'le lit', 'il letto'],
      ['kitchen', 'die Küche', 'la cocina', 'la cuisine', 'la cucina'],
      ['room', 'das Zimmer|der Raum', 'la habitación|el cuarto', 'la chambre|la pièce', 'la stanza|la camera'],
      ['key', 'der Schlüssel', 'la llave', 'la clé|la clef', 'la chiave'],
      ['garden', 'der Garten', 'el jardín', 'le jardin', 'il giardino'],
    ],
  },
  {
    theme: 'The body',
    words: [
      ['head', 'der Kopf', 'la cabeza', 'la tête', 'la testa'],
      ['hand', 'die Hand', 'la mano', 'la main', 'la mano'],
      ['foot', 'der Fuß', 'el pie', 'le pied', 'il piede'],
      ['eye', 'das Auge', 'el ojo', "l'œil", "l'occhio"],
      ['ear', 'das Ohr', 'la oreja|el oído', "l'oreille", "l'orecchio"],
      ['nose', 'die Nase', 'la nariz', 'le nez', 'il naso'],
      ['mouth', 'der Mund', 'la boca', 'la bouche', 'la bocca'],
      ['arm', 'der Arm', 'el brazo', 'le bras', 'il braccio'],
      ['leg', 'das Bein', 'la pierna', 'la jambe', 'la gamba'],
      ['heart', 'das Herz', 'el corazón', 'le cœur', 'il cuore'],
    ],
  },
  {
    theme: 'Clothes',
    words: [
      ['shirt', 'das Hemd', 'la camisa', 'la chemise', 'la camicia'],
      ['shoe', 'der Schuh', 'el zapato', 'la chaussure', 'la scarpa'],
      ['hat', 'der Hut', 'el sombrero', 'le chapeau', 'il cappello'],
      ['jacket', 'die Jacke', 'la chaqueta|la chamarra', 'la veste|le blouson', 'la giacca'],
      ['dress', 'das Kleid', 'el vestido', 'la robe', 'il vestito|l’abito'],
      ['trousers', 'die Hose', 'los pantalones|el pantalón', 'le pantalon', 'i pantaloni'],
      ['sock', 'die Socke|der Socken', 'el calcetín', 'la chaussette', 'il calzino'],
      ['sweater', 'der Pullover|der Pulli', 'el jersey|el suéter', 'le pull|le pull-over', 'il maglione'],
      ['skirt', 'der Rock', 'la falda', 'la jupe', 'la gonna'],
      ['bag', 'die Tasche', 'el bolso|la bolsa', 'le sac', 'la borsa'],
    ],
  },
  {
    theme: 'Nature & weather',
    words: [
      ['sun', 'die Sonne', 'el sol', 'le soleil', 'il sole'],
      ['rain', 'der Regen', 'la lluvia', 'la pluie', 'la pioggia'],
      ['snow', 'der Schnee', 'la nieve', 'la neige', 'la neve'],
      ['wind', 'der Wind', 'el viento', 'le vent', 'il vento'],
      ['sky', 'der Himmel', 'el cielo', 'le ciel', 'il cielo'],
      ['tree', 'der Baum', 'el árbol', "l'arbre", "l'albero"],
      ['flower', 'die Blume', 'la flor', 'la fleur', 'il fiore'],
      ['sea', 'das Meer|die See', 'el mar', 'la mer', 'il mare'],
      ['mountain', 'der Berg', 'la montaña', 'la montagne', 'la montagna'],
      ['river', 'der Fluss', 'el río', 'la rivière|le fleuve', 'il fiume'],
    ],
  },
  {
    theme: 'Time',
    words: [
      ['day', 'der Tag', 'el día', 'le jour', 'il giorno'],
      ['night', 'die Nacht', 'la noche', 'la nuit', 'la notte'],
      ['week', 'die Woche', 'la semana', 'la semaine', 'la settimana'],
      ['month', 'der Monat', 'el mes', 'le mois', 'il mese'],
      ['year', 'das Jahr', 'el año', "l'année|l'an", "l'anno"],
      ['today', 'heute', 'hoy', "aujourd'hui", 'oggi'],
      ['tomorrow', 'morgen', 'mañana', 'demain', 'domani'],
      ['yesterday', 'gestern', 'ayer', 'hier', 'ieri'],
      ['morning', 'der Morgen|der Vormittag', 'la mañana', 'le matin', 'la mattina|il mattino'],
      ['evening', 'der Abend', 'la tarde|la noche', 'le soir|la soirée', 'la sera'],
    ],
  },
  {
    theme: 'Verbs 1',
    words: [
      ['to eat', 'essen', 'comer', 'manger', 'mangiare'],
      ['to drink', 'trinken', 'beber|tomar', 'boire', 'bere'],
      ['to sleep', 'schlafen', 'dormir', 'dormir', 'dormire'],
      ['to go', 'gehen', 'ir', 'aller', 'andare'],
      ['to see', 'sehen', 'ver', 'voir', 'vedere'],
      ['to speak', 'sprechen|reden', 'hablar', 'parler', 'parlare'],
      ['to read', 'lesen', 'leer', 'lire', 'leggere'],
      ['to write', 'schreiben', 'escribir', 'écrire', 'scrivere'],
      ['to play', 'spielen', 'jugar', 'jouer', 'giocare'],
      ['to learn', 'lernen', 'aprender', 'apprendre', 'imparare'],
    ],
  },
  {
    theme: 'Describing things',
    words: [
      ['big', 'groß', 'grande', 'grand', 'grande'],
      ['small', 'klein', 'pequeño', 'petit', 'piccolo'],
      ['good', 'gut', 'bueno', 'bon', 'buono'],
      ['bad', 'schlecht', 'malo', 'mauvais', 'cattivo'],
      ['new', 'neu', 'nuevo', 'nouveau', 'nuovo'],
      ['old', 'alt', 'viejo', 'vieux', 'vecchio'],
      ['happy', 'glücklich|froh', 'feliz|contento', 'heureux|content', 'felice|contento'],
      ['sad', 'traurig', 'triste', 'triste', 'triste'],
      ['hot', 'heiß', 'caliente', 'chaud', 'caldo'],
      ['cold', 'kalt', 'frío', 'froid', 'freddo'],
    ],
  },
  {
    theme: 'Places',
    words: [
      ['school', 'die Schule', 'la escuela|el colegio', "l'école", 'la scuola'],
      ['city', 'die Stadt', 'la ciudad', 'la ville', 'la città'],
      ['street', 'die Straße', 'la calle', 'la rue', 'la strada|la via'],
      ['shop', 'das Geschäft|der Laden', 'la tienda', 'le magasin|la boutique', 'il negozio'],
      ['park', 'der Park', 'el parque', 'le parc', 'il parco'],
      ['station', 'der Bahnhof', 'la estación', 'la gare', 'la stazione'],
      ['beach', 'der Strand', 'la playa', 'la plage', 'la spiaggia'],
      ['church', 'die Kirche', 'la iglesia', "l'église", 'la chiesa'],
      ['hospital', 'das Krankenhaus|das Spital', 'el hospital', "l'hôpital", "l'ospedale"],
      ['library', 'die Bibliothek|die Bücherei', 'la biblioteca', 'la bibliothèque', 'la biblioteca'],
    ],
  },
  {
    theme: 'School',
    words: [
      ['book', 'das Buch', 'el libro', 'le livre', 'il libro'],
      ['pen', 'der Stift|der Kugelschreiber|der Kuli', 'el bolígrafo|el boli', 'le stylo', 'la penna'],
      ['teacher', 'der Lehrer|die Lehrerin', 'el profesor|la profesora', 'le professeur|la professeure|le prof', "l'insegnante|il professore|la professoressa"],
      ['pupil', 'der Schüler|die Schülerin', 'el alumno|la alumna', "l'élève", "l'alunno|l'alunna|lo studente"],
      ['lesson', 'die Stunde|die Unterrichtsstunde|die Lektion', 'la lección|la clase', 'la leçon|le cours', 'la lezione'],
      ['homework', 'die Hausaufgabe|die Hausaufgaben|die Hausübung', 'los deberes|la tarea', 'les devoirs', 'i compiti'],
      ['question', 'die Frage', 'la pregunta', 'la question', 'la domanda'],
      ['answer', 'die Antwort', 'la respuesta', 'la réponse', 'la risposta'],
      ['word', 'das Wort', 'la palabra', 'le mot', 'la parola'],
      ['language', 'die Sprache', 'el idioma|la lengua', 'la langue', 'la lingua'],
    ],
  },
  {
    theme: 'Travel',
    words: [
      ['car', 'das Auto', 'el coche|el carro|el auto', 'la voiture', "la macchina|l'auto"],
      ['bus', 'der Bus', 'el autobús|el bus', 'le bus|le car', "l'autobus|il pullman"],
      ['train', 'der Zug', 'el tren', 'le train', 'il treno'],
      ['plane', 'das Flugzeug', 'el avión', "l'avion", "l'aereo"],
      ['bike', 'das Fahrrad|das Rad', 'la bicicleta|la bici', 'le vélo|la bicyclette', 'la bicicletta|la bici'],
      ['ticket', 'die Fahrkarte|das Ticket|der Fahrschein', 'el billete|el boleto', 'le billet|le ticket', 'il biglietto'],
      ['map', 'die Landkarte|die Karte|der Stadtplan', 'el mapa', 'la carte|le plan', 'la mappa|la cartina'],
      ['holiday', 'der Urlaub|die Ferien', 'las vacaciones', 'les vacances', 'le vacanze'],
      ['suitcase', 'der Koffer', 'la maleta', 'la valise', 'la valigia'],
      ['passport', 'der Reisepass|der Pass', 'el pasaporte', 'le passeport', 'il passaporto'],
    ],
  },
  {
    theme: 'Verbs 2',
    words: [
      ['to come', 'kommen', 'venir', 'venir', 'venire'],
      ['to have', 'haben', 'tener|haber', 'avoir', 'avere'],
      ['to be', 'sein', 'ser|estar', 'être', 'essere|stare'],
      ['to make', 'machen', 'hacer', 'faire', 'fare'],
      ['to buy', 'kaufen', 'comprar', 'acheter', 'comprare'],
      ['to open', 'öffnen|aufmachen', 'abrir', 'ouvrir', 'aprire'],
      ['to close', 'schließen|zumachen', 'cerrar', 'fermer', 'chiudere'],
      ['to run', 'laufen|rennen', 'correr', 'courir', 'correre'],
      ['to swim', 'schwimmen', 'nadar', 'nager', 'nuotare'],
      ['to sing', 'singen', 'cantar', 'chanter', 'cantare'],
    ],
  },
  {
    theme: 'People',
    words: [
      ['man', 'der Mann', 'el hombre', "l'homme", "l'uomo"],
      ['woman', 'die Frau', 'la mujer', 'la femme', 'la donna'],
      ['boy', 'der Junge|der Bub', 'el chico|el niño', 'le garçon', 'il ragazzo'],
      ['girl', 'das Mädchen', 'la chica|la niña', 'la fille', 'la ragazza'],
      ['people', 'die Leute|die Menschen', 'la gente', 'les gens', 'la gente'],
      ['name', 'der Name', 'el nombre', 'le nom', 'il nome'],
      ['neighbour', 'der Nachbar|die Nachbarin', 'el vecino|la vecina', 'le voisin|la voisine', 'il vicino|la vicina'],
      ['doctor', 'der Arzt|die Ärztin', 'el médico|la médica|el doctor', 'le médecin|le docteur', 'il medico|il dottore|la dottoressa'],
      ['king', 'der König', 'el rey', 'le roi', 'il re'],
      ['team', 'die Mannschaft|das Team', 'el equipo', "l'équipe", 'la squadra'],
    ],
  },
]

// All the other days live in src/vocab/*.js (one file per topic, loaded in alphabetical order).
// Each file lists days as [theme, lines] where every line is "English;German;Spanish;French;Italian".
const files = import.meta.glob('./vocab/*.js', { eager: true, import: 'default' })
const MORE_DAYS = Object.keys(files)
  .sort()
  .flatMap((name) => files[name])
  .map(([theme, text]) => ({
    theme,
    words: text
      .split('\n')
      .filter((line) => line.trim())
      .map((line) => line.split(';').map((part) => part.trim())),
  }))

export const DAYS = [...FIRST_DAYS, ...MORE_DAYS]

// The 10 words for a given day: front = the word in your language, answers = correct answers in the one you're learning.
// (After the last day, it starts again from day 1 as a review round.)
export function wordsForDay(dayIndex, fromId, toId) {
  const day = DAYS[dayIndex % DAYS.length]
  const col = (id) => LANGUAGES.find((l) => l.id === id).col
  return {
    theme: day.theme,
    review: dayIndex >= DAYS.length,
    words: day.words.map((row) => ({ front: row[col(fromId)].split('|')[0], answers: row[col(toId)].split('|') })),
  }
}

// Levels: each one starts further into the year of words (the later days have harder, less common words)
export const LEVELS = [
  { id: 'beginner', name: 'A1', start: 0, desc: 'Beginner. You know a few words or are starting from zero: food, family, numbers and everyday basics.' },
  { id: 'elementary', name: 'A2', start: 60, desc: 'Elementary. You can handle simple everyday things like shopping, home, school and free time.' },
  { id: 'intermediate', name: 'B1', start: 150, desc: 'Intermediate. You can get by on holiday and talk about work, travel, feelings and your opinions.' },
  { id: 'upper', name: 'B2', start: 240, desc: 'Upper intermediate. You can follow most conversations and want more detailed words and verbs.' },
  { id: 'advanced', name: 'C1', start: 300, desc: 'Advanced. You speak well already and want less common words and useful phrases.' },
]

// Which level a day belongs to (index into LEVELS)
export const levelIndexOf = (dayIndex) => {
  const day = dayIndex % DAYS.length
  let index = 0
  LEVELS.forEach((level, i) => {
    if (day >= level.start) index = i
  })
  return index
}

// 10 words for the "Find your level" test: 2 random words from each level
export function placementWords(fromId, toId) {
  const picks = []
  LEVELS.forEach((level, i) => {
    const end = LEVELS[i + 1]?.start ?? DAYS.length
    const chosen = new Set()
    while (chosen.size < 2) {
      const day = level.start + Math.floor(Math.random() * (end - level.start))
      const words = wordsForDay(day, fromId, toId).words
      const word = words[Math.floor(Math.random() * words.length)]
      if (!chosen.has(word.front)) {
        chosen.add(word.front)
        picks.push({ ...word, level: i })
      }
    }
  })
  return picks
}
