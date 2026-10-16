// Die einzige Farbpalette der Laden-Szenen. Licht kommt immer von oben links:
// t = Oberseite (hellste), l = linke Vorderseite (Grundton), r = rechte Vorderseite (dunkelste).
// Schatten sind blaustichig, nie schwarz. Keine Farbe außerhalb dieser Datei verwenden.

export const M = {
  // Grundplatte (Insel) – helles Blaugrau wie der App-Hintergrund
  plot: { t: '#E4EEFC', l: '#CBDBF5', r: '#B3C8EA' },
  plotDeep: { t: '#C3D4F0', l: '#B3C8EA', r: '#9DB4DB' },
  // Wiese und Bäume
  grass: { t: '#8EE3C4', l: '#5CD6B0', r: '#3FBF98' },
  leaf: { t: '#7DDDB5', l: '#4FCB9F', r: '#35B187' },
  // Pflaster, Gehweg, Straße
  paving: { t: '#F7F9FD', l: '#E3EAF6', r: '#D2DCEE' },
  road: { t: '#5A6B8C', l: '#4A5A79', r: '#3B4A66' },
  // Wände
  wall: { t: '#FFFFFF', l: '#FFF4E6', r: '#F1DFC8' },
  wallPink: { t: '#FFE3EC', l: '#FFC9D9', r: '#F4AEC3' },
  wallBlue: { t: '#F2F7FF', l: '#DCE9FF', r: '#C4D8F7' },
  // Marke
  blue: { t: '#339AFF', l: '#007AFF', r: '#0062CC' },
  pink: { t: '#FF84A6', l: '#FF5E8A', r: '#E04876' },
  butter: { t: '#FFE08A', l: '#FFD45E', r: '#E8B63A' },
  mint: { t: '#8EE3C4', l: '#5CD6B0', r: '#3FBF98' },
  // Holz (Stand, Tische, Kisten)
  wood: { t: '#F2C99A', l: '#E0AE78', r: '#C9925C' },
  // Metall/Technik (Fabrik, Laternen)
  steel: { t: '#E9EEF6', l: '#C9D3E3', r: '#AAB7CC' },
  // Dunkel (Türen, Rahmen, Haare, Reifen)
  ink: { t: '#3A4A68', l: '#1D2B45', r: '#121C30' },
}

export const C = {
  ink: '#1D2B45',
  white: '#FFFFFF',
  glass: '#CFE3FF', // Fenster tagsüber
  glassShine: '#FFFFFF',
  glow: '#FFE9A8', // beleuchtetes Fenster
  glowInner: '#FFF6D6',
  shadow: '#9DB4DB', // Schlagschatten (mit Deckkraft ~0.35)
  skin: ['#F5C9A6', '#E2A47E', '#B9785A', '#8A5A43'],
  hair: ['#1D2B45', '#6B4A3A', '#E8B63A', '#C2603D'],
  shirt: ['#007AFF', '#FF5E8A', '#FFD45E', '#5CD6B0', '#B39CFF', '#FFFFFF'],
  candy: ['#FF5E8A', '#FFD45E', '#5CD6B0', '#007AFF', '#B39CFF', '#FF9F6B'],
  lilac: '#B39CFF',
  orange: '#FF9F6B',
}
