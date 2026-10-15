// Loopy's Candy Store wächst mit den XP. Jede Stufe passt zu einem BW-Thema,
// damit der Laden die "Unternehmensgeschichte" aus dem Unterricht nacherzählt.

export const SHOP_LEVELS = [
  {
    xp: 0,
    de: { name: 'Marktstand', text: 'Loopy startet mit einem kleinen Stand am Wochenmarkt. Jede Gründung fängt klein an!' },
    en: { name: 'Market stall', text: 'Loopy starts with a small stall at the weekly market. Every business starts small!' },
    hu: { name: 'Piaci stand', text: 'Loopy egy kis standdal kezd a heti piacon. Minden vállalkozás kicsiben indul!' },
  },
  {
    xp: 60,
    de: { name: 'Eigener Laden', text: 'Gewerbe angemeldet, Geschäftslokal gemietet – Loopy ist jetzt Einzelunternehmerin.' },
    en: { name: 'Her own shop', text: 'Business registered, shop rented – Loopy is now a sole trader.' },
    hu: { name: 'Saját üzlet', text: 'Ipar bejelentve, üzlethelyiség kibérelve – Loopy most egyéni vállalkozó.' },
  },
  {
    xp: 200,
    de: { name: 'Schaufenster', text: 'Ein buntes Schaufenster und eine Markise: Merchandising lockt neue Kundschaft an.' },
    en: { name: 'Shop window', text: 'A colourful shop window and an awning: merchandising attracts new customers.' },
    hu: { name: 'Kirakat', text: 'Színes kirakat és napellenző: a merchandising új vásárlókat vonz.' },
  },
  {
    xp: 450,
    de: { name: 'Café-Ecke', text: 'Diversifikation! Neben Süßigkeiten gibt es jetzt auch heiße Schokolade im Café.' },
    en: { name: 'Café corner', text: 'Diversification! Besides sweets there is now hot chocolate in the café too.' },
    hu: { name: 'Kávézósarok', text: 'Diverzifikáció! Az édességek mellett most már forró csoki is van a kávézóban.' },
  },
  {
    xp: 800,
    de: { name: 'Bonbonküche', text: 'Eigenfertigung statt Fremdbezug: Loopy produziert ihre Karamellbonbons selbst.' },
    en: { name: 'Sweet factory', text: 'Making instead of buying: Loopy now produces her caramel sweets herself.' },
    hu: { name: 'Cukorkakonyha', text: 'Saját gyártás vásárlás helyett: Loopy maga készíti a karamellcukorkáit.' },
  },
  {
    xp: 1300,
    de: { name: 'Online-Shop & Lieferwagen', text: 'Multi-Channel: Bestellungen kommen jetzt auch online und werden ausgeliefert.' },
    en: { name: 'Online shop & van', text: 'Multi-channel: orders now come in online too and get delivered.' },
    hu: { name: 'Webáruház és furgon', text: 'Többcsatornás értékesítés: már online is jönnek rendelések, amelyeket kiszállítanak.' },
  },
  {
    xp: 2000,
    de: { name: 'Zweite Filiale', text: 'Erweiterungsinvestition: Loopy eröffnet eine zweite Filiale – mit Filialleiterin.' },
    en: { name: 'Second branch', text: 'Expansion investment: Loopy opens a second branch – with a branch manager.' },
    hu: { name: 'Második fióküzlet', text: 'Bővítő beruházás: Loopy megnyitja második fióküzletét – fióküzlet-vezetővel.' },
  },
  {
    xp: 3000,
    de: { name: 'Candy-Imperium', text: 'Geschafft! Aus dem Marktstand wurde eine echte Marke. Du bist ein BW-Profi!' },
    en: { name: 'Candy empire', text: 'You did it! The market stall has become a real brand. You are a BW pro!' },
    hu: { name: 'Cukorbirodalom', text: 'Sikerült! A piaci standból igazi márka lett. Igazi BW-profi vagy!' },
  },
]

// Aktuelle Stufe (index 0–7) plus Fortschritt zur nächsten Stufe.
export function levelOf(xp) {
  let index = 0
  SHOP_LEVELS.forEach((l, i) => {
    if (xp >= l.xp) index = i
  })
  const next = SHOP_LEVELS[index + 1]
  const from = SHOP_LEVELS[index].xp
  return {
    index,
    level: SHOP_LEVELS[index],
    next,
    progress: next ? (xp - from) / (next.xp - from) : 1,
    missing: next ? next.xp - xp : 0,
  }
}

export function levelText(level, lang) {
  return level[lang] ?? level.de
}
