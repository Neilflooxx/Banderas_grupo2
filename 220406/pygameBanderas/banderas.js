// === CREAR AUTOMÁTICAMENTE LOS CANVAS ===
const nombres = [
  "zimbabue", "sanvicenteylasgranadinas", "irak", "ecuador",
  "finlandia", "andorra", "sancristobal", "suiza",
  "rumania", "montenegro", "suecia", "argentina",
  "chipre", "tayikistan", "tunez", "armenia", "samoa",
  "santotome", "vanuatu", "coreadelnorte", "tailandia",
  "serbia", "gabon", "estadosunidos", "georgia",
  "lesoto", "libia", "mauritania"
];

const contenedor = document.getElementById("banderas");

nombres.forEach(nombre => {
  const div = document.createElement("div");
  const titulo = document.createElement("h3");
  titulo.textContent = nombre.toUpperCase();

  const canvas = document.createElement("canvas");
  canvas.id = nombre;
  canvas.width = 300;
  canvas.height = 200;
  canvas.addEventListener("click", () => agrandar(nombre));

  div.appendChild(titulo);
  div.appendChild(canvas);
  contenedor.appendChild(div);
});

function estrella(ctx, x, y, r) {
    const spikes = 5;          
    const step = Math.PI / spikes; 
    const innerRadius = r * 0.5; 

    ctx.beginPath();
    for (let i = 0; i < 2 * spikes; i++) {
      const radius = (i % 2 === 0) ? r : innerRadius;
      const angle = i * step - Math.PI / 2;
      ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
    }
    ctx.closePath();
    ctx.fill();
  }

function dibujarZimbabue(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const stripeHeight = h / 7;

  const colores = ["#006400", "yellow", "red", "black", "red", "yellow", "#006400"];
  for (let i = 0; i < 7; i++) {
    ctx.fillStyle = colores[i];
    ctx.fillRect(0, i * stripeHeight, w, stripeHeight);
  }

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(w * 0.35, h / 2);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.lineWidth = h * 0.02; 
  ctx.strokeStyle = "black";
  ctx.stroke();

  const escudoZimbabue = new Image();
  escudoZimbabue.src = "escudos/zimbabue.png";
  escudoZimbabue.onload = () => {
    const ancho = w * 0.18;
    const alto = h * 0.24;
    ctx.drawImage(escudoZimbabue, w * 0.07, h / 2 - alto / 2, ancho, alto);
  };
}


function dibujarSanVicenteYLasGranadinas(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  
  ctx.fillStyle = "#0072C6"; // azul
  ctx.fillRect(0, 0, w * 0.25, h);
  ctx.fillStyle = "#FFD100"; // amarillo
  ctx.fillRect(w * 0.25, 0, w * 0.5, h);
  ctx.fillStyle = "#009739"; // verde
  ctx.fillRect(w * 0.75, 0, w * 0.25, h);

 
  ctx.fillStyle = "#009739";
  const size = h / 6;
  const centerX = w / 2;
  const offsetX = size * 0.9;
  const offsetY = size * 1.1;

  ctx.save();
  ctx.translate(centerX - offsetX, h / 2 - offsetY);
  ctx.rotate(Math.PI / 4);
  ctx.fillRect(-size / 2, -size / 2, size, size);
  ctx.restore();

  // rombo central
  ctx.save();
  ctx.translate(centerX, h / 2);
  ctx.rotate(Math.PI / 4);
  ctx.fillRect(-size / 2, -size / 2, size, size);
  ctx.restore();

  // rombo superior derecho
  ctx.save();
  ctx.translate(centerX + offsetX, h / 2 - offsetY);
  ctx.rotate(Math.PI / 4);
  ctx.fillRect(-size / 2, -size / 2, size, size);
  ctx.restore();
}


function dibujarIrak(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  const stripe = h / 3;
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, w, stripe);
  ctx.fillStyle = "white";
  ctx.fillRect(0, stripe, w, stripe);
  ctx.fillStyle = "black";
  ctx.fillRect(0, stripe * 2, w, stripe);

  ctx.fillStyle = "green";
  ctx.font = `${h / 3}px Arial`;
  ctx.textAlign = "center";
  ctx.fillText("الله أكبر", w / 2, h / 1.75);
}

function dibujarEcuador(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  const y1 = h * 0.5;
  const y2 = h * 0.75;

  // franjas
  ctx.fillStyle = "#FFD700"; // amarillo
  ctx.fillRect(0, 0, w, y1);
  ctx.fillStyle = "#0033A0"; // azul
  ctx.fillRect(0, y1, w, y2 - y1);
  ctx.fillStyle = "#D91023"; // rojo
  ctx.fillRect(0, y2, w, h - y2);

  // imagen del escudo
  const escudoEcuador = new Image();
  escudoEcuador.src = "escudos/ecuador.svg"; // ruta de tu imagen SVG
  escudoEcuador.onload = () => {
    // x, y, ancho, alto
    ctx.drawImage(
      escudoEcuador,
      w / 2 - w * 0.1,    // centrar horizontalmente
      h / 2 - h * 0.15,   // centrar verticalmente
      w * 0.2,            // ancho 20% del canvas
      h * 0.3             // alto 30% del canvas
    );
  };
}



// === FINLANDIA ===
function dibujarFinlandia(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // fondo blanco
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  // cruz azul
  ctx.fillStyle = "#003580";
  ctx.fillRect(w * 0.3, 0, w * 0.12, h);
  ctx.fillRect(0, h * 0.4, w, h * 0.2); 
}

// === ANDORRA ===
function dibujarAndorra(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // franjas azul, amarilla y roja
  ctx.fillStyle = "#00209F";
  ctx.fillRect(0, 0, w / 3, h);
  ctx.fillStyle = "#FFD700";
  ctx.fillRect(w / 3, 0, w / 3, h);
  ctx.fillStyle = "#D0103A";
  ctx.fillRect((2 * w) / 3, 0, w / 3, h);

  
  const escudoAndorra = new Image();
  escudoAndorra.src = "escudos/andorra.svg";
  escudoAndorra.onload = () => {
   
    ctx.drawImage(
      escudoAndorra,
      w / 2 - w * 0.1,  
      h / 2 - h * 0.15, 
      w * 0.2,          
      h * 0.3           
    );
  };
}


// === SAN CRISTÓBAL Y NIEVES ===
function dibujarSanCristobal(canvas) {
    const ctx = canvas.getContext("2d");
    const w = canvas.width, h = canvas.height;

    // Triángulo verde
    ctx.fillStyle = "#009739";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(w, 0);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    // Triángulo rojo
    ctx.fillStyle = "#C8102E";
    ctx.beginPath();
    ctx.moveTo(w, h);
    ctx.lineTo(w, 0);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    const banda = h * 0.30;
    const borde = banda * 0.15;

    ctx.save();
    ctx.translate(0, h);
    const angulo = -Math.atan(h / w);
    ctx.rotate(angulo);

    // Borde amarillo superior
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, -banda/2 - borde, Math.sqrt(w*w + h*h), borde);

    // Banda negra
    ctx.fillStyle = "black";
    ctx.fillRect(0, -banda/2, Math.sqrt(w*w + h*h), banda - 2*borde);

    // Borde amarillo inferior
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, -banda/2 + banda - borde, Math.sqrt(w*w + h*h), borde);

    // Estrellas en la diagonal usando la función externa
    ctx.fillStyle = "white";
    const diagLength = Math.sqrt(w*w + h*h);
    estrella(ctx, diagLength * 0.25, 0, h*0.05); // estrella izquierda
    estrella(ctx, diagLength * 0.75, 0, h*0.05); // estrella derecha

    ctx.restore();
}



// === SUIZA ===
function dibujarSuiza(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // fondo rojo
  ctx.fillStyle = "#D52B1E";
  ctx.fillRect(0, 0, w, h);

  // cruz blanca
  const arm = h / 5;
  const size = h / 2.5;
  const cx = w / 2;
  const cy = h / 2;

  ctx.fillStyle = "white";
  ctx.fillRect(cx - arm / 2, cy - size / 2, arm, size);
  ctx.fillRect(cx - size / 2, cy - arm / 2, size, arm);
  // Suiza no lleva escudo central en su bandera oficial
}

// === RUMANIA ===
function dibujarRumania(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // Tres franjas verticales azul, amarillo, rojo
  const colores = ["#002B7F", "#FCD116", "#CE1126"];
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = colores[i];
    ctx.fillRect((w / 3) * i, 0, w / 3, h);
  }
}

// === MONTENEGRO ===
function dibujarMontenegro(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // Fondo rojo
  ctx.fillStyle = "#D71A28";
  ctx.fillRect(0, 0, w, h);

  // Borde dorado grueso
  const borde = Math.min(w, h) * 0.05;
  ctx.lineWidth = borde;
  ctx.strokeStyle = "#FDB913";
  ctx.strokeRect(borde / 2, borde / 2, w - borde, h - borde);

  // Imagen del escudo
  const escudoMontenegro = new Image();
  escudoMontenegro.src = "escudos/montenegro.svg"; // ruta de tu imagen SVG
  escudoMontenegro.onload = () => {
    // x, y, ancho, alto
    ctx.drawImage(
      escudoMontenegro,
      w / 2 - w * 0.15,  // centrar horizontalmente
      h / 2 - h * 0.15,  // centrar verticalmente
      w * 0.3,           // ancho 30% del canvas
      h * 0.3            // alto 30% del canvas
    );
  };
}



// === SUECIA ===
function dibujarSuecia(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // fondo azul
  ctx.fillStyle = "#006AA7";
  ctx.fillRect(0, 0, w, h);

  // cruz amarilla
  ctx.fillStyle = "#FECC00";
  const grosor = h / 5;
  const offsetX = w * 0.3;

  // vertical
  ctx.fillRect(offsetX - grosor / 2, 0, grosor, h);
  // horizontal
  ctx.fillRect(0, h / 2 - grosor / 2, w, grosor);
}

// === ARGENTINA ===
function dibujarArgentina(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // franjas celeste-blanco-celeste
  const franjas = ["#74ACDF", "#FFFFFF", "#74ACDF"];
  const franjaAltura = h / 3;
  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = franjas[i];
    ctx.fillRect(0, i * franjaAltura, w, franjaAltura);
  }

  // Sol (opcional, simplificado)
  const cx = w / 2;
  const cy = h / 2;
  const r = h / 10;
  ctx.fillStyle = "#F6B40E";
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.fill();

  // rayos del sol
  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI) / 8;
    const r1 = r;
    const r2 = r * 1.6;
    const x1 = cx + Math.cos(angle) * r1;
    const y1 = cy + Math.sin(angle) * r1;
    const x2 = cx + Math.cos(angle) * r2;
    const y2 = cy + Math.sin(angle) * r2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = "#F6B40E";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

// === CHIPRE ===
function dibujarChipre(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // Fondo blanco
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  // Imagen del escudo centrada
  const escudoChipre = new Image();
  escudoChipre.src = "escudos/chipre.png"; // ruta de tu imagen

  escudoChipre.onload = () => {
    const escudoWidth = w * 0.5;   // ancho 30% del canvas
    const escudoHeight = h * 0.5;  // alto 30% del canvas
    const x = (w - escudoWidth) / 2; // posición X centrada
    const y = (h - escudoHeight) / 2; // posición Y centrada

    ctx.drawImage(
      escudoChipre,
      x,
      y,
      escudoWidth,
      escudoHeight
    );
  };
}




function dibujarTayikistan(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  const stripe = h / 3;

  // Franjas
  ctx.fillStyle = "#D52B1E"; // rojo
  ctx.fillRect(0, 0, w, stripe);
  ctx.fillStyle = "white";
  ctx.fillRect(0, stripe, w, stripe);
  ctx.fillStyle = "#007847"; // verde
  ctx.fillRect(0, stripe * 2, w, stripe);

  // Corona dorada central
  ctx.fillStyle = "#FFD700";

  // Arco semicircular de la corona
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, h / 10, 0, Math.PI, false);
  ctx.fill();


  // Imagen central opcional (SVG o PNG)
  const escudoTayikistan = new Image();
  escudoTayikistan.src = "escudos/tayikistan.png"; // ruta de tu imagen
  escudoTayikistan.onload = () => {
    const escudoWidth = w * 0.2;  // ancho 20% del canvas
    const escudoHeight = h * 0.2; // alto 20% del canvas
    const x = (w - escudoWidth) / 2;
    const y = (h - escudoHeight) / 2;
    ctx.drawImage(escudoTayikistan, x, y, escudoWidth, escudoHeight);
  };
}

// === TÚNEZ ===
function dibujarTunez(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  ctx.fillStyle = "#E70013";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, h / 3.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#E70013";
  ctx.beginPath();
  ctx.arc(w / 2 - w / 20, h / 2, h / 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, h / 8, 0, Math.PI * 2);
  ctx.fill();

  
  ctx.fillStyle = "#E70013";
  estrella(ctx, w / 2, h / 2, h / 10); 
}

// === ARMENIA ===
function dibujarArmenia(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const stripe = h / 3;

  ctx.fillStyle = "#D90012"; // rojo
  ctx.fillRect(0, 0, w, stripe);
  ctx.fillStyle = "#0033A0"; // azul
  ctx.fillRect(0, stripe, w, stripe);
  ctx.fillStyle = "#F2A800"; // naranja
  ctx.fillRect(0, stripe * 2, w, stripe);

  // lugar para escudo si lo deseas
  // ctx.drawImage(escudoArmenia, w/2 - w/12, h/2 - h/8, w/6, h/4);
}

// === SAMOA ===
function dibujarSamoa(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // Fondo rojo
  ctx.fillStyle = "#C8102E";
  ctx.fillRect(0, 0, w, h);

  // Rectángulo azul
  ctx.fillStyle = "#002B7F";
  ctx.fillRect(0, 0, w * 0.5, h * 0.5);

  // Estrellas blancas (Cruz del Sur) usando la función estrella
  ctx.fillStyle = "white";
  const estrellas = [
    [w * 0.12, h * 0.1],
    [w * 0.22, h * 0.2],
    [w * 0.3,  h * 0.08],
    [w * 0.32, h * 0.3],
    [w * 0.18, h * 0.35]
  ];

  estrellas.forEach(([x, y]) => {
    estrella(ctx, x, y, h * 0.02); // radio proporcional al alto del canvas
  });
}

// === SANTO TOMÉ Y PRÍNCIPE ===
function dibujarSantoTome(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const stripe = h / 3;

  // Franjas verde - amarillo - verde
  ctx.fillStyle = "#009739"; // verde
  ctx.fillRect(0, 0, w, stripe);
  ctx.fillStyle = "#FFD100"; // amarillo
  ctx.fillRect(0, stripe, w, stripe);
  ctx.fillStyle = "#009739"; // verde
  ctx.fillRect(0, stripe * 2, w, stripe);

  // Triángulo rojo en el lado izquierdo
  ctx.fillStyle = "#EF3340";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(w * 0.3, h / 2);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();

  // Dos estrellas negras en la franja amarilla usando la función estrella
  ctx.fillStyle = "black";
  estrella(ctx, w * 0.45, h / 2, h / 12); // estrella izquierda
  estrella(ctx, w * 0.65, h / 2, h / 12); // estrella derecha
}

// === VANUATU ===
function dibujarVanuatu(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  ctx.fillStyle = "#D21034";
  ctx.fillRect(0, 0, w, h / 2);
  ctx.fillStyle = "#009543";
  ctx.fillRect(0, h / 2, w, h / 2);

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(w * 0.4, h / 2);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#FFD100";
  ctx.lineWidth = h / 15;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(w * 0.4, h / 2);
  ctx.lineTo(0, h);
  ctx.stroke();

  ctx.fillStyle = "#FFD100";
  ctx.beginPath();
  ctx.arc(w * 0.15, h / 2, h / 8, 0, Math.PI * 2);
  ctx.fill();
}

function dibujarCoreaDelNorte(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  const stripe = h / 5;
  ctx.fillStyle = "#024FA2"; // azul
  ctx.fillRect(0, 0, w, stripe);
  ctx.fillRect(0, stripe * 4, w, stripe);

  ctx.fillStyle = "white";
  ctx.fillRect(0, stripe, w, stripe * 3);

  ctx.fillStyle = "#ED1C27"; // rojo
  ctx.fillRect(0, stripe * 1.4, w, stripe * 2.2);

  // Círculo blanco
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(w * 0.25, h / 2, h / 6, 0, Math.PI * 2);
  ctx.fill();

  // Estrella roja usando la función externa
  ctx.fillStyle = "#ED1C27";
  estrella(ctx, w * 0.25, h / 2, h * 0.06);
}

function dibujarTailandia(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const stripe = h / 6;

  ctx.fillStyle = "#A51931"; // rojo
  ctx.fillRect(0, 0, w, stripe);
  ctx.fillStyle = "white";
  ctx.fillRect(0, stripe, w, stripe);
  ctx.fillStyle = "#2D2A4A"; // azul
  ctx.fillRect(0, stripe * 2, w, stripe * 2);
  ctx.fillStyle = "white";
  ctx.fillRect(0, stripe * 4, w, stripe);
  ctx.fillStyle = "#A51931";
  ctx.fillRect(0, stripe * 5, w, stripe);
}

function dibujarSerbia(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const stripe = h / 3;

  // Franjas de la bandera
  ctx.fillStyle = "#C6363C"; // rojo
  ctx.fillRect(0, 0, w, stripe);
  ctx.fillStyle = "#0C4076"; // azul
  ctx.fillRect(0, stripe, w, stripe);
  ctx.fillStyle = "white";
  ctx.fillRect(0, stripe * 2, w, stripe);

  // Imagen del escudo (SVG) en el lado izquierdo
  const escudoSerbia = new Image();
  escudoSerbia.src = "escudos/serbia.svg"; // ruta de tu imagen SVG
  escudoSerbia.onload = () => {
    const escudoWidth = w * 0.15;   // ancho 15% del canvas
    const escudoHeight = h * 0.5;   // alto 50% del canvas
    const x = w * 0.2;             // margen desde el borde izquierdo
    const y = (h - escudoHeight) / 2; // centrar verticalmente
    ctx.drawImage(escudoSerbia, x, y, escudoWidth, escudoHeight);
  };
}


function dibujarGabon(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const stripe = h / 3;

  ctx.fillStyle = "#009739"; // verde
  ctx.fillRect(0, 0, w, stripe);
  ctx.fillStyle = "#FFD100"; // amarillo
  ctx.fillRect(0, stripe, w, stripe);
  ctx.fillStyle = "#3A75C4"; // azul
  ctx.fillRect(0, stripe * 2, w, stripe);
}

function dibujarEstadosUnidos(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const stripe = h / 13;

  
  for (let i = 0; i < 13; i++) {
    ctx.fillStyle = i % 2 === 0 ? "#B22234" : "white";
    ctx.fillRect(0, i * stripe, w, stripe);
  }

 
  ctx.fillStyle = "#3C3B6E";
  ctx.fillRect(0, 0, w * 0.4, stripe * 7);

 
  ctx.fillStyle = "white";
  const filas = 9, columnas = 11;
  const dx = (w * 0.4) / columnas;
  const dy = (stripe * 7) / filas;
  const radio = h / 80; 

  for (let y = 0; y < filas; y++) {
    for (let x = 0; x < columnas; x++) {
      if ((y + x) % 2 === 0) {
        estrella(ctx, dx * (x + 0.5), dy * (y + 0.5), radio);
      }
    }
  }
}

function dibujarGeorgia(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  // fondo blanco
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  // cruz roja central
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(w * 0.4, 0, w * 0.2, h);
  ctx.fillRect(0, h * 0.4, w, h * 0.2);

  // cruces pequeñas en las esquinas
  function cruzPequena(x, y, s) {
    ctx.fillRect(x - s / 6, y - s / 2, s / 3, s);
    ctx.fillRect(x - s / 2, y - s / 6, s, s / 3);
  }

  ctx.fillStyle = "#FF0000";
  const d = w * 0.15;
  cruzPequena(d, d, w * 0.1);
  cruzPequena(w - d, d, w * 0.1);
  cruzPequena(d, h - d, w * 0.1);
  cruzPequena(w - d, h - d, w * 0.1);
}

function dibujarLesoto(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const stripe = h / 3;

 
  ctx.fillStyle = "#00209F";
  ctx.fillRect(0, 0, w, stripe);
  ctx.fillStyle = "white";
  ctx.fillRect(0, stripe, w, stripe);
  ctx.fillStyle = "#009739";
  ctx.fillRect(0, stripe * 2, w, stripe);

  
  const sombrero = new Image();
  sombrero.src = "escudos/lesoto.png";
  sombrero.onload = () => {
    const ancho = w * 0.2;   
    const alto = h * 0.15;   
    const x = (w - ancho) / 2;       
    const y = stripe + (stripe - alto) / 2;
    ctx.drawImage(sombrero, x, y, ancho, alto);
  };
}


function dibujarLibia(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const stripe = h / 3;

  // Franjas roja, negra, verde
  ctx.fillStyle = "#E70013";
  ctx.fillRect(0, 0, w, stripe);
  ctx.fillStyle = "black";
  ctx.fillRect(0, stripe, w, stripe);
  ctx.fillStyle = "#239E46";
  ctx.fillRect(0, stripe * 2, w, stripe);

  
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(w * 0.5, h / 2, h * 0.1, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(w * 0.53, h / 2, h * 0.09, 0, Math.PI * 2);
  ctx.fill();

  // Estrella blanca usando la función externa
  ctx.fillStyle = "white";
  estrella(ctx, w * 0.57, h / 2, h * 0.03);
}

function dibujarMauritania(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  ctx.fillStyle = "#006233";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#D21034";
  ctx.fillRect(0, 0, w, h * 0.15);
  ctx.fillRect(0, h * 0.85, w, h * 0.15);

  ctx.fillStyle = "#FFD700";
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, h * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#006233";
  ctx.beginPath();
  ctx.arc(w / 2, h / 2 - h * 0.05, h * 0.22, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#FFD700";
  estrella(ctx, w / 2, h / 2 - h * 0.18, h * 0.05);
}

function agrandar(id) {
  const canvas = document.getElementById(id);
  if (canvas.width === 300) {
    canvas.width = 600;
    canvas.height = 400;
  } else {
    canvas.width = 300;
    canvas.height = 200;
  }
  redibujar(id);
}

function redibujar(id) {
  const canvas = document.getElementById(id);
  switch (id) {
    case "zimbabue": dibujarZimbabue(canvas); break;
    case "sanvicenteylasgranadinas": dibujarSanVicenteYLasGranadinas(canvas); break;
    case "irak": dibujarIrak(canvas); break;
    case "ecuador": dibujarEcuador(canvas); break;
    case "finlandia": dibujarFinlandia(canvas); break;
    case "andorra": dibujarAndorra(canvas); break;
    case "sancristobal": dibujarSanCristobal(canvas); break;
    case "suiza": dibujarSuiza(canvas); break;
    case "rumania": dibujarRumania(canvas); break;
    case "montenegro": dibujarMontenegro(canvas); break;
    case "suecia": dibujarSuecia(canvas); break;
    case "argentina": dibujarArgentina(canvas); break;
    case "chipre": dibujarChipre(canvas); break;
    case "tayikistan": dibujarTayikistan(canvas); break;
    case "tunez": dibujarTunez(canvas); break;
    case "armenia": dibujarArmenia(canvas); break;
    case "samoa": dibujarSamoa(canvas); break;
    case "santotome": dibujarSantoTome(canvas); break;
    case "vanuatu": dibujarVanuatu(canvas); break;
    case "coreadelnorte": dibujarCoreaDelNorte(canvas); break;
    case "tailandia": dibujarTailandia(canvas); break;
    case "serbia": dibujarSerbia(canvas); break;
    case "gabon": dibujarGabon(canvas); break;
    case "estadosunidos": dibujarEstadosUnidos(canvas); break;
    case "georgia": dibujarGeorgia(canvas); break;
    case "lesoto": dibujarLesoto(canvas); break;
    case "libia": dibujarLibia(canvas); break;
    case "mauritania": dibujarMauritania(canvas); break;
  }

}

[
  "zimbabue",
  "sanvicenteylasgranadinas",
  "irak",
  "ecuador",
  "finlandia",
  "andorra",
  "sancristobal",
  "suiza",
  "rumania",
  "montenegro",
  "suecia",
  "argentina",
  "chipre",
  "tayikistan",
  "tunez",
  "armenia",
  "samoa",
  "santotome",
  "vanuatu",
  "coreadelnorte",
  "tailandia",
  "serbia",
  "gabon",
  "estadosunidos",
  "georgia",
  "lesoto",
  "libia",
  "mauritania"
].forEach(redibujar);

