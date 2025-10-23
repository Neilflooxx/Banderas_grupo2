// ============================
// Presets de banderas (didácticos)
// ============================

const BLANCO = [1, 1, 1];
const NEGRO  = [0.05, 0.05, 0.05];

// Utilidad opcional HEX → [r,g,b]
function hexAFloat3(hex) {
  const h = hex.replace('#','').trim();
  return [
    parseInt(h.slice(0,2),16)/255,
    parseInt(h.slice(2,4),16)/255,
    parseInt(h.slice(4,6),16)/255
  ];
}

const PRESETS = {
  // — Perú (inicio) —
  "Perú": {ratio:[2,3],orientation:"vertical",cuts:[1/3,2/3],colors:[[.78,0,.08],BLANCO,[.78,0,.08]]},
  "Países Bajos": {ratio:[2,3],orientation:"horizontal",cuts:[1/3,2/3],colors:[[.80,.15,.15],BLANCO,[.10,.20,.60]]},
  "Nigeria": {ratio:[1,2],orientation:"vertical",cuts:[1/3,2/3],colors:[[0,.48,.36],BLANCO,[0,.48,.36]]},
  "Rusia": {ratio:[2,3],orientation:"horizontal",cuts:[1/3,2/3],colors:[BLANCO,[.10,.35,.80],[.85,.20,.20]]},
  "Malaui": { // negro/rojo/verde (sol omitido)
    ratio:[2,3], orientation:"horizontal",
    cuts:[1/3, 2/3],
    colors:[NEGRO, [0.75,0.00,0.10], [0.00,0.49,0.20]]
  },
  "Perú": {
    ratio: [2, 3], orientation: "vertical",
    cuts: [1/3, 2/3],
    colors: [[0.78, 0.00, 0.08], BLANCO, [0.78, 0.00, 0.08]]
  },
  "Canadá": { // hoja omitida
    ratio: [1, 2], orientation: "vertical",
    cuts: [0.25, 0.75],
    colors: [[0.85, 0.05, 0.10], BLANCO, [0.85, 0.05, 0.10]]
  },

  // — África —
  "Malaui": { // sol omitido
    ratio: [2, 3], orientation: "horizontal",
    cuts: [1/3, 2/3],
    colors: [NEGRO, [0.75, 0.00, 0.10], [0.00, 0.49, 0.20]]
  },
  "Yibuti": { // triángulo/estrella omitidos
    ratio: [2, 3], orientation: "horizontal",
    cuts: [1/2],
    colors: [[0.48, 0.71, 0.90], [0.00, 0.50, 0.20]]
  },
  "Tanzania": { // diagonal real no se modela con franjas -> aproximación
    ratio: [2, 3], orientation: "horizontal",
    cuts: [0.34, 0.38, 0.62, 0.66],
    colors: [
      [0.00, 0.50, 0.20],          // verde
      [0.95, 0.85, 0.10],          // amarillo fino
      NEGRO,                       // banda negra
      [0.95, 0.85, 0.10],          // amarillo fino
      [0.00, 0.35, 0.65]           // azul
    ]
  },
  "Botsuana": {
    ratio: [2, 3], orientation: "horizontal",
    cuts: [0.42, 0.46, 0.54, 0.58],
    colors: [
      [0.50, 0.75, 0.90], BLANCO, NEGRO, BLANCO, [0.50, 0.75, 0.90]
    ]
  },
  "Ghana": { // estrella omitida
    ratio: [2, 3], orientation: "horizontal",
    cuts: [1/3, 2/3],
    colors: [[0.75, 0.10, 0.10], [0.95, 0.85, 0.10], [0.00, 0.45, 0.15]]
  },
  "Egipto": { // escudo omitido
    ratio: [2, 3], orientation: "horizontal",
    cuts: [1/3, 2/3],
    colors: [[0.80, 0.10, 0.10], BLANCO, NEGRO]
  },
  "República Centroafricana": { // barra roja vertical y estrella omitidas
    ratio: [3, 5], orientation: "horizontal",
    cuts: [0.25, 0.50, 0.75],
    colors: [[0.00, 0.25, 0.65], BLANCO, [0.00, 0.55, 0.20], [0.95, 0.85, 0.10]]
  },
  "Nigeria": {
    ratio: [1, 2], orientation: "vertical",
    cuts: [1/3, 2/3],
    colors: [[0.00, 0.48, 0.36], BLANCO, [0.00, 0.48, 0.36]]
  },
  "Comoras": { // triángulo/luna/estrellas omitidos
    ratio: [2, 3], orientation: "horizontal",
    cuts: [0.25, 0.50, 0.75],
    colors: [[0.95, 0.85, 0.10], BLANCO, [0.85, 0.10, 0.15], [0.00, 0.35, 0.65]]
  },
  "Kenia": { // escudo/lanzas omitidos
    ratio: [2, 3], orientation: "horizontal",
    cuts: [0.28, 0.32, 0.68, 0.72],
    colors: [NEGRO, BLANCO, [0.75, 0.00, 0.10], BLANCO, [0.00, 0.45, 0.15]]
  },
  "República del Congo": {
    ratio: [2, 3], orientation: "horizontal",
    cuts: [1/3, 2/3],
    colors: [[0.00, 0.55, 0.20], [0.95, 0.85, 0.10], [0.85, 0.10, 0.10]]
  },
  "Chad": {
    ratio: [2, 3], orientation: "vertical",
    cuts: [1/3, 2/3],
    colors: [[0.00, 0.20, 0.55], [0.95, 0.85, 0.10], [0.80, 0.10, 0.10]]
  },

  // — Asia y Oceanía —
  "Nauru": { // franja amarilla central muy fina (estrella omitida)
    ratio: [1, 2], orientation: "horizontal",
    cuts: [0.48, 0.52],
    colors: [[0.00, 0.20, 0.55], [0.95, 0.85, 0.10], [0.00, 0.20, 0.55]]
  },
  "Birmania (Myanmar)": { // estrella omitida
    ratio: [2, 3], orientation: "horizontal",
    cuts: [1/3, 2/3],
    colors: [[0.95, 0.80, 0.15], [0.00, 0.55, 0.25], [0.85, 0.10, 0.10]]
  },
  "Yemen": {
    ratio: [2, 3], orientation: "horizontal",
    cuts: [1/3, 2/3],
    colors: [[0.80, 0.10, 0.10], BLANCO, NEGRO]
  },
  "Vietnam": { // estrella omitida
    ratio: [2, 3], orientation: "horizontal",
    cuts: [],
    colors: [[0.80, 0.10, 0.10]]
  },
  "Pakistán": { // luna/estrella omitidas
    ratio: [2, 3], orientation: "vertical",
    cuts: [0.25],
    colors: [BLANCO, [0.00, 0.42, 0.28]]
  },
  "India": { // rueda omitida
    ratio: [2, 3], orientation: "horizontal",
    cuts: [1/3, 2/3],
    colors: [[0.95, 0.55, 0.10], BLANCO, [0.07, 0.46, 0.18]]
  },
  "Malasia": { // canton/astros omitidos; 6 franjas alternadas (aprox)
    ratio: [1, 2], orientation: "horizontal",
    cuts: [1/6, 2/6, 3/6, 4/6, 5/6],
    colors: [
      [0.80, 0.10, 0.10], BLANCO,
      [0.80, 0.10, 0.10], BLANCO,
      [0.80, 0.10, 0.10], BLANCO
    ]
  },
  "Kirguistán": { // emblema omitido
    ratio: [3, 5], orientation: "horizontal",
    cuts: [],
    colors: [[0.85, 0.00, 0.10]]
  },

  // — Europa —
  "Países Bajos": {
    ratio: [2, 3], orientation: "horizontal",
    cuts: [1/3, 2/3],
    colors: [[0.80, 0.15, 0.15], BLANCO, [0.10, 0.20, 0.60]]
  },
  "Eslovenia": { // escudo omitido
    ratio: [1, 2], orientation: "horizontal",
    cuts: [1/3, 2/3],
    colors: [BLANCO, [0.05, 0.31, 0.64], [0.85, 0.10, 0.10]]
  },
  "Polonia": {
    ratio: [5, 8], orientation: "horizontal",
    cuts: [1/2],
    colors: [BLANCO, [0.85, 0.10, 0.10]]
  },
  "Rusia": {
    ratio: [2, 3], orientation: "horizontal",
    cuts: [1/3, 2/3],
    colors: [BLANCO, [0.10, 0.35, 0.80], [0.85, 0.20, 0.20]]
  },
  "Letonia": {
    ratio: [1, 2], orientation: "horizontal",
    cuts: [0.40, 0.60],
    colors: [[0.55, 0.10, 0.15], BLANCO, [0.55, 0.10, 0.15]]
  },
  "Mónaco": {
    ratio: [4, 5], orientation: "horizontal",
    cuts: [1/2],
    colors: [[0.85, 0.05, 0.10], BLANCO]
  }
};

// Export simple
window.PRESETS = PRESETS;
window.hexAFloat3 = hexAFloat3;
