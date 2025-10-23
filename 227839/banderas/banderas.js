function dibujarBandera(ctx, config, nombrePais) {
    // Esta función busca si existe una función de dibujo para el pais
    // Alemania -> busca la función "dibujarAlemania"
    
    // Convertimos "Bosnia y Herzegovina" a "dibujarBosniaYHerzegovina"
    const nombreFuncion = "dibujar" + nombrePais
        .replace(/ y /g, "Y") // "y" a "Y"
        .replace(/ /g, '')      // Quita espacios
        .replace(/-/g, '');     // Quita guiones

    if (typeof window[nombreFuncion] === "function") {
        window[nombreFuncion](ctx, config);
    } else {
        // Fallback si la función no existe
        console.error(`Función no encontrada: ${nombreFuncion}`);
        ctx.font = "20px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText(`(Función para ${nombrePais} no definida)`, config.ancho / 2, config.alto / 2);
    }
}

function dibujarEstrella(ctx, cx, cy, radioExt, puntas, radioIntRatio) {
    let radioInterior = radioExt * radioIntRatio;
    let angulo = Math.PI / 2 * 3;
    let paso = Math.PI / puntas;

    ctx.beginPath();
    for (let i = 0; i < puntas * 2; i++) {
        let radio = (i % 2 === 0) ? radioExt : radioInterior;
        ctx.lineTo(cx + radio * Math.cos(angulo), cy + radio * Math.sin(angulo));
        angulo += paso;
    }
    ctx.closePath();
    ctx.fill();
}

// 1. Alemania
function dibujarAlemania(ctx, config) {
    const altoFranja = config.alto / 3;
    ctx.fillStyle = "#000000";
    ctx.fillRect(config.x, config.y, config.ancho, altoFranja);
    ctx.fillStyle = "#DD0000";
    ctx.fillRect(config.x, config.y + altoFranja, config.ancho, altoFranja);
    ctx.fillStyle = "#FFCC00";
    ctx.fillRect(config.x, config.y + (altoFranja * 2), config.ancho, altoFranja);
}

// 2. Argelia 
function dibujarArgelia(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    
    // Parámetros de la Media Luna
    const escalaLuna = config.alto / 4;  // Tamaño general (escala)
    const posXLuna = (config.ancho / 1.8) - (escalaLuna * 0.3); // Posición X (izquierda/derecha)
    const posYLuna = config.alto / 2;                       // Posición Y (arriba/abajo)

    // Parámetros de la Estrella
    const escalaEstrella = config.alto / 10;      // Tamaño general (escala)
    const posXEstrella = config.ancho / 1.8;           // Posición X (izquierda/derecha)
    const posYEstrella = config.alto / 2;           // Posición Y (arriba/abajo)
    const rotacionEstrella = -45;                   // Rotación en grados
    
    // --- Lógica de Dibujo Optimizada ---
    
    const colorRojo = "#D21034";
    const anchoFranja = config.ancho / 2;
    
    ctx.fillStyle = "#006633";
    ctx.fillRect(config.x, config.y, anchoFranja, config.alto);
    
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(config.x + anchoFranja, config.y, anchoFranja, config.alto);
    
    // Lógica de la Media Luna (con hueco transparente y TUS valores)
    const radioLunaExterna = escalaLuna;
    const radioLunaInterna = radioLunaExterna * 0.8; // <- TU PARÁMETRO
    const offsetCorte = radioLunaExterna * 0.2;      // <- TU PARÁMETRO

    ctx.fillStyle = colorRojo;
    ctx.beginPath();
    ctx.arc(posXLuna, posYLuna, radioLunaExterna, 0, Math.PI * 2, false); 
    ctx.moveTo(posXLuna + offsetCorte + radioLunaInterna, posYLuna);
    ctx.arc(posXLuna + offsetCorte, posYLuna, radioLunaInterna, 0, Math.PI * 2, true); 
    ctx.fill(); 
    
    // Lógica de la Estrella (con rotación)
    const puntas = 5;
    const radioInterior = escalaEstrella * 0.4;
    let angulo = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180); 
    let paso = Math.PI / puntas;

    ctx.fillStyle = colorRojo;
    ctx.beginPath();
    for (let i = 0; i < puntas * 2; i++) {
        let radio = (i % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella + radio * Math.cos(angulo),
            posYEstrella + radio * Math.sin(angulo)
        );
        angulo += paso;
    }
    ctx.closePath();
    ctx.fill();
}

// 3. Armenia 
function dibujarArmenia(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    // La Posición (x, y) y Escala (ancho, alto)
    // se controlan globalmente desde el 'config' object.
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // Parámetros de Color
    const colorRojo = "#D90012";
    const colorAzul = "#0033A0";
    const colorNaranja = "#F2A800";

    // --- Lógica de Dibujo ---
    
    const altoFranja = alto / 3;
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y, ancho, altoFranja);
    
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    
    ctx.fillStyle = colorNaranja;
    ctx.fillRect(x, y + (altoFranja * 2), ancho, altoFranja);
}

// 4. Austria 
function dibujarAustria(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;        // Posición X (controlada desde el main)
    const y = config.y;        // Posición Y (controlada desde el main)
    const ancho = config.ancho;  // Escala horizontal (controlada desde el main)
    const alto = config.alto;    // Escala vertical (controlada desde el main)
    
    // Parámetros de Color
    const colorRojo = "#C8102E";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---
    
    const altoFranja = alto / 3;
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y, ancho, altoFranja);
    
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y + (altoFranja * 2), ancho, altoFranja);
}

// 5. Azerbaiyán 
function dibujarAzerbaiyán(ctx, config) {

    // --- Parámetros de Configuración de la Bandera ---
    const centroX = config.ancho / 2;
    const centroY = config.alto / 2;
    const colorBlanco = "#FFFFFF";
    
    // Parámetros de la Media Luna
    const escalaLuna = config.alto / 8;        // Tamaño general (escala)
    const posXLuna = centroX;                  // Posición X (izquierda/derecha)
    const posYLuna = centroY;                  // Posición Y (arriba/abajo)

    // Parámetros de la Estrella (de 8 puntas)
    const escalaEstrella = escalaLuna * 0.45;    // Tamaño general (escala)
    const posXEstrella = centroX + escalaLuna * 0.9; // Posición X (desplazada a la derecha)
    const posYEstrella = centroY;                  // Posición Y
    const rotacionEstrella = 0;                  // Rotación en grados
    
    // --- Lógica de Dibujo ---

    // 1. Dibujar Franjas de Fondo
    const altoFranja = config.alto / 3;
    ctx.fillStyle = "#00B5E2"; // Azul
    ctx.fillRect(config.x, config.y, config.ancho, altoFranja);
    ctx.fillStyle = "#EF3340"; // Rojo
    ctx.fillRect(config.x, config.y + altoFranja, config.ancho, altoFranja);
    ctx.fillStyle = "#509E2F"; // Verde
    ctx.fillRect(config.x, config.y + (altoFranja * 2), config.ancho, altoFranja);

    // 2. Lógica de la Media Luna (con hueco transparente)
    const radioLunaExterna = escalaLuna;
    const radioLunaInterna = radioLunaExterna * 0.89; // Proporción interna
    const offsetCorte = radioLunaExterna * 0.140;     // Proporción interna

    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    // Círculo exterior (sentido horario)
    ctx.arc(posXLuna, posYLuna, radioLunaExterna, 0, Math.PI * 2, false); 
    // Círculo interior (sentido antihorario para crear el hueco)
    ctx.moveTo(posXLuna + offsetCorte + radioLunaInterna, posYLuna);
    ctx.arc(posXLuna + offsetCorte, posYLuna, radioLunaInterna, 0, Math.PI * 2, true); 
    ctx.fill(); 
    
    // 3. Lógica de la Estrella (8 puntas, con rotación)
    const puntas = 8;
    const radioInterior = escalaEstrella * 0.6; // Proporción interna (para 8 puntas)
    let angulo = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180); 
    let paso = Math.PI / puntas;

    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    for (let i = 0; i < puntas * 2; i++) {
        let radio = (i % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella + radio * Math.cos(angulo),
            posYEstrella + radio * Math.sin(angulo)
        );
        angulo += paso;
    }
    ctx.closePath();
    ctx.fill();
}

// 6. Bahamas 
function dibujarBahamas(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;        // Posición X (controlada desde el main)
    const y = config.y;        // Posición Y (controlada desde el main)
    const ancho = config.ancho;  // Escala horizontal (controlada desde el main)
    const alto = config.alto;    // Escala vertical (controlada desde el main)

    // Parámetros del Triángulo
    // (Fracción del ancho total que penetra el triángulo)
    const penetracionTriangulo = 0.5; // 0.5 = 50% (mitad de la bandera)

    // Parámetros de Color
    const colorAguamarina = "#00778B";
    const colorDorado = "#FFC72C";
    const colorNegro = "#000000";

    // --- Lógica de Dibujo ---

    // 1. Dibujar Franjas
    const altoFranja = alto / 3;
    
    ctx.fillStyle = colorAguamarina;
    ctx.fillRect(x, y, ancho, altoFranja);
    
    ctx.fillStyle = colorDorado;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    
    ctx.fillStyle = colorAguamarina;
    ctx.fillRect(x, y + (altoFranja * 2), ancho, altoFranja);
    
    // 2. Lógica del Triángulo
    const puntaX = x + (ancho * penetracionTriangulo);
    const puntaY = y + (alto / 2);
    
    ctx.fillStyle = colorNegro;
    ctx.beginPath();
    ctx.moveTo(x, y);         // Esquina superior izquierda
    ctx.lineTo(puntaX, puntaY); // Punta del triángulo
    ctx.lineTo(x, y + alto);  // Esquina inferior izquierda
    ctx.closePath();
    ctx.fill();
}

// 7. Bangladés 
function dibujarBangladés(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros del Círculo Rojo
    // (Desplazamiento X: 0.5 = centro, 0.45 = 5% a la izquierda)
    const offsetXCirculo = 0.45; 
    // (Desplazamiento Y: 0.5 = centro)
    const offsetYCirculo = 0.5;
    // (Escala: 0.25 = 1/4 del alto de la bandera)
    const escalaCirculo = 0.25;

    // Parámetros de Color
    const colorVerde = "#006A4E";
    const colorRojo = "#F42A41";

    // --- Lógica de Dibujo ---

    // 1. Dibujar Fondo Verde
    ctx.fillStyle = colorVerde;
    ctx.fillRect(x, y, ancho, alto);

    // 2. Lógica del Círculo Rojo
    const radio = alto * escalaCirculo;
    const centroX = x + (ancho * offsetXCirculo);
    const centroY = y + (alto * offsetYCirculo);
    
    ctx.fillStyle = colorRojo;
    ctx.beginPath();
    ctx.arc(centroX, centroY, radio, 0, Math.PI * 2);
    ctx.fill();
}

// 8. Baréin 
function dibujarBaréin(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros de los Dientes
    // (Fracción del ancho para la base blanca. 0.33 = 1/3)
    const anchoBaseBlanca = ancho * 0.33;
    // (Qué tanto penetra el diente en el área roja, como fracción del ancho)
    const penetracionDiente = ancho * 0.1;
    // (Número de dientes)
    const numeroDientes = 5;

    // Parámetros de Color
    const colorRojo = "#CE1126";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Dibujar Fondo Rojo
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y, ancho, alto);
    
    // 2. Dibujar Base Blanca
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x, y, anchoBaseBlanca, alto);
    
    // 3. Lógica de los Dientes
    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    
    const alturaDiente = alto / numeroDientes;
    const xBase = anchoBaseBlanca;
    
    ctx.moveTo(xBase, y); // Iniciar en la esquina superior
    
    for (let i = 0; i < numeroDientes; i++) {
        // Pico del diente
        ctx.lineTo(xBase + penetracionDiente, y + (i * alturaDiente) + (alturaDiente / 2));
        // Valle del diente
        ctx.lineTo(xBase, y + (i + 1) * alturaDiente);
    }
    
    ctx.lineTo(xBase, y); // Cerrar la forma
    ctx.fill();
}

// 9. Bélgica 
function dibujarBélgica(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;        // Posición X (controlada desde el main)
    const y = config.y;        // Posición Y (controlada desde el main)
    const ancho = config.ancho;  // Escala horizontal (controlada desde el main)
    const alto = config.alto;    // Escala vertical (controlada desde el main)
    
    // Parámetros de Color
    const colorNegro = "#000000";
    const colorAmarillo = "#FDDA24";
    const colorRojo = "#EF3340";

    // --- Lógica de Dibujo ---
    
    const anchoFranja = ancho / 3;
    
    ctx.fillStyle = colorNegro;
    ctx.fillRect(x, y, anchoFranja, alto);
    
    ctx.fillStyle = colorAmarillo;
    ctx.fillRect(x + anchoFranja, y, anchoFranja, alto);
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x + (anchoFranja * 2), y, anchoFranja, alto);
}

// 10. Benín 
function dibujarBenín(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros de División
    // (Proporción del ancho que ocupa la franja vertical. 0.4 = 40%)
    const proporcionFranjaVertical = 0.4;

    // Parámetros de Color
    const colorVerde = "#008751";
    const colorAmarillo = "#FCDD09";
    const colorRojo = "#E8112D";

    // --- Lógica de Dibujo ---
    
    const anchoVertical = ancho * proporcionFranjaVertical;
    const anchoHorizontal = ancho - anchoVertical;
    const altoHorizontal = alto / 2;
    const xHorizontal = x + anchoVertical;
    
    // Franja Verde
    ctx.fillStyle = colorVerde;
    ctx.fillRect(x, y, anchoVertical, alto);
    
    // Franja Amarilla
    ctx.fillStyle = colorAmarillo;
    ctx.fillRect(xHorizontal, y, anchoHorizontal, altoHorizontal);
    
    // Franja Roja
    ctx.fillStyle = colorRojo;
    ctx.fillRect(xHorizontal, y + altoHorizontal, anchoHorizontal, altoHorizontal);
}

// 11. Birmania (Myanmar) 
function dibujarBirmania(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros de la Estrella
    const escalaEstrella = alto * 0.35;         // Tamaño (escala)
    const posXEstrella = x + ancho / 2;       // Posición X (centro)
    const posYEstrella = y + alto / 2;       // Posición Y (centro)
    const rotacionEstrella = 0;                   // Rotación en grados

    // Parámetros de Color
    const colorAmarillo = "#FECB00";
    const colorVerde = "#34B233";
    const colorRojo = "#EA2839";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Dibujar Franjas
    const altoFranja = alto / 3;
    
    ctx.fillStyle = colorAmarillo;
    ctx.fillRect(x, y, ancho, altoFranja);
    
    ctx.fillStyle = colorVerde;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y + (altoFranja * 2), ancho, altoFranja);

    // 2. Lógica de la Estrella (5 puntas, con rotación)
    const puntas = 5;
    const radioInterior = escalaEstrella * 0.4; // Proporción interna
    let angulo = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180); 
    let paso = Math.PI / puntas;

    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    for (let i = 0; i < puntas * 2; i++) {
        let radio = (i % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella + radio * Math.cos(angulo),
            posYEstrella + radio * Math.sin(angulo)
        );
        angulo += paso;
    }
    ctx.closePath();
    ctx.fill();
}

// 12. Bolivia 
function dibujarBolivia(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros del Escudo (¡NUEVO!)
    // (Ruta de la imagen, en la misma carpeta)
    const rutaImagenEscudo = "escudo_bolivia1.png";
    // (Escala del escudo, 1 = 100% del alto de la franja central)
    const escalaEscudo = 0.8;
    // (Posición X: 0.5 = centro)
    const posXEscudo = 0.5;
    // (Posición Y: 0.5 = centro)
    const posYEscudo = 0.5;
    // (Rotación en grados)
    const rotacionEscudo = 0;

    // Parámetros de Color
    const colorRojo = "#DA291C";
    const colorAmarillo = "#F8E600";
    const colorVerde = "#007A3D";

    // --- Lógica de Dibujo ---

    // 1. Dibujar Franjas
    const altoFranja = alto / 3;
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y, ancho, altoFranja);
    
    ctx.fillStyle = colorAmarillo;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    
    ctx.fillStyle = colorVerde;
    ctx.fillRect(x, y + (altoFranja * 2), ancho, altoFranja);

    // 2. Lógica del Escudo (Carga y Dibujo de Imagen)
    const img = new Image();
    img.src = rutaImagenEscudo;
    
    // El dibujo ocurre "cuando la imagen esté lista"
    img.onload = function() {
        // Calcular dimensiones basadas en la escala
        const altoImgDeseado = altoFranja * escalaEscudo;
        const escalaReal = altoImgDeseado / this.height;
        const anchoImgDeseado = this.width * escalaReal;
        
        // Calcular posición
        const centroX = x + (ancho * posXEscudo);
        const centroY = y + (alto * posYEscudo);

        // Guardar el estado del canvas (para rotar solo el escudo)
        ctx.save();
        ctx.translate(centroX, centroY);
        ctx.rotate(rotacionEscudo * Math.PI / 180);
        
        // Dibujar la imagen centrada
        ctx.drawImage(
            img, 
            -anchoImgDeseado / 2, 
            -altoImgDeseado / 2, 
            anchoImgDeseado, 
            altoImgDeseado
        );
        
        // Restaurar el estado del canvas
        ctx.restore();
    }
    
    img.onerror = function() {
        console.error("No se pudo cargar la imagen:", rutaImagenEscudo);
        // Dibujar un 'fallback' si la imagen no carga
        ctx.fillStyle = "red";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Error al cargar escudo_bolivia.jpeg", x + ancho / 2, y + alto / 2);
    }
}

// 13. Bosnia y Herzegovina (Optimizado, Triángulo Ancho + 9 Estrellas Cortadas)
function dibujarBosniaYHerzegovina(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // ================================================================
    // --- Parámetros Clave (¡Juega con estos!) ---
    
    // --- Parámetros del Triángulo ---
    // (Posición X del vértice 1 [superior-izq]. Más bajo = más a la izquierda)
    const posXVertice1 = ancho * 0.22;
    // (Posición X del vértice 2 [inferior]. Más alto = más a la derecha)
    const posXVertice2 = ancho * 0.75;
    // (Posición X del vértice 3 [ángulo recto]. Debe coincidir con Vértice 2)
    const posXVertice3 = ancho * 0.75;

    // --- Parámetros de las Estrellas ---
    // (Número de estrellas en la línea)
    const numEstrellas = 9;
    
    // (Tamaño de la estrella. Un número más PEQUEÑO la hace MÁS GRANDE)
    const escalaEstrella = alto / 11.5; // (Tu valor)
    
    const rotacionEstrella = 0;
    
    // (Coordenada X de la primera estrella)
    const inicioEstrellasX = x + ancho * 0.10; // (Tu valor)
    // (Coordenada Y de la primera estrella. Negativo = fuera del lienzo por arriba)
    const inicioEstrellasY = y - alto * 0.08;
    
    // (Coordenada X de la última estrella. Un valor MÁS BAJO acorta la línea)
    const finEstrellasX = x + ancho * 0.65; // (Estaba en 0.73)
    // (Coordenada Y de la última estrella. Un valor MÁS BAJO acorta la línea)
    const finEstrellasY = y + alto * 0.95; // (Estaba en 1.08)

    // --- Fin de Parámetros Clave ---
    // ================================================================

    // Parámetros de Color
    const colorAzul = "#002395";
    const colorAmarillo = "#FFCD00";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Fondo Azul
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, y, ancho, alto);
    
    // 2. Triángulo Amarillo
    ctx.fillStyle = colorAmarillo;
    ctx.beginPath();
    ctx.moveTo(x + posXVertice1, y);
    ctx.lineTo(x + posXVertice2, y + alto);
    ctx.lineTo(x + posXVertice3, y);
    ctx.closePath();
    ctx.fill();
    
    // 3. Lógica de las Estrellas (en bucle)
    // Puntos de inicio y fin de la línea imaginaria (fuera del lienzo)
    const p1 = { x: inicioEstrellasX, y: inicioEstrellasY };
    const p2 = { x: finEstrellasX, y: finEstrellasY };
    
    for (let i = 0; i < numEstrellas; i++) {
        // Interpolar la posición de la estrella en la línea
        let t = i / (numEstrellas - 1); // 0.0 ... 1.0
        let cx = p1.x + (p2.x - p1.x) * t;
        let cy = p1.y + (p2.y - p1.y) * t;
        
        // --- Lógica de Estrella (5 puntas, interna) ---
        const puntas = 5;
        const radioInterior = escalaEstrella * 0.4;
        let angulo = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180); 
        let paso = Math.PI / puntas;

        ctx.fillStyle = colorBlanco;
        ctx.beginPath();
        for (let j = 0; j < puntas * 2; j++) {
            let radio = (j % 2 === 0) ? escalaEstrella : radioInterior;
            ctx.lineTo(
                cx + radio * Math.cos(angulo),
                cy + radio * Math.sin(angulo)
            );
            angulo += paso;
        }
        ctx.closePath();
        ctx.fill();
    }
}

// 14. Botsuana 
function dibujarBotsuana(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros de Proporciones (total = 24 partes)
    const propAzul = 9;
    const propBlanco = 1;
    const propNegro = 4;
    const totalPartes = (propAzul * 2) + (propBlanco * 2) + propNegro; // = 24

    // Parámetros de Color
    const colorAzul = "#75AADB";
    const colorBlanco = "#FFFFFF";
    const colorNegro = "#000000";

    // --- Lógica de Dibujo ---
    
    const parte = alto / totalPartes;
    let posY = y;
    
    // Franja Azul (superior)
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, posY, ancho, parte * propAzul);
    posY += parte * propAzul;
    
    // Franja Blanca
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x, posY, ancho, parte * propBlanco);
    posY += parte * propBlanco;
    
    // Franja Negra
    ctx.fillStyle = colorNegro;
    ctx.fillRect(x, posY, ancho, parte * propNegro);
    posY += parte * propNegro;

    // Franja Blanca
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x, posY, ancho, parte * propBlanco);
    posY += parte * propBlanco;
    
    // Franja Azul (inferior)
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, posY, ancho, parte * propAzul);
}

// 15. Bulgaria
function dibujarBulgaria(ctx, config) {  
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;  
    // Parámetros de Color
    const colorBlanco = "#FFFFFF";
    const colorVerde = "#00966E";
    const colorRojo = "#D62612";

    const altoFranja = alto / 3;

    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x, y, ancho, altoFranja);
    
    ctx.fillStyle = colorVerde;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y + (altoFranja * 2), ancho, altoFranja);
}

// 1. Timor Oriental
function dibujarTimorOriental(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros del Triángulo Amarillo
    // (Fracción del ancho que penetra el triángulo. 0.8 = 80%)
    const penetracionTrianguloAmarillo = 0.8;

    // Parámetros del Triángulo Negro
    // (Fracción del ancho que penetra el triángulo. 0.4 = 40%)
    const penetracionTrianguloNegro = 0.4;
    
    // Parámetros de la Estrella
    const escalaEstrella = alto / 8;          // Tamaño (escala)
    const posXEstrella = x + ancho * 0.15;    // Posición X (izquierda/derecha)
    const posYEstrella = y + alto / 2;        // Posición Y (arriba/abajo)
    const rotacionEstrella = 45;               // Rotación en grados

    // Parámetros de Color
    const colorRojo = "#DA291C";
    const colorAmarillo = "#FFC72C";
    const colorNegro = "#000000";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Fondo Rojo
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y, ancho, alto);

    // 2. Triángulo Amarillo (grande)
    let puntaX = x + (ancho * penetracionTrianguloAmarillo);
    let puntaY = y + (alto / 2);
    ctx.fillStyle = colorAmarillo;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(puntaX, puntaY);
    ctx.lineTo(x, y + alto);
    ctx.closePath();
    ctx.fill();

    // 3. Triángulo Negro (pequeño, encima)
    puntaX = x + (ancho * penetracionTrianguloNegro);
    ctx.fillStyle = colorNegro;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(puntaX, puntaY);
    ctx.lineTo(x, y + alto);
    ctx.closePath();
    ctx.fill();
    
    // 4. Lógica de la Estrella (5 puntas, con rotación)
    const puntas = 5;
    const radioInterior = escalaEstrella * 0.4;
    let angulo = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180); 
    let paso = Math.PI / puntas;

    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    for (let i = 0; i < puntas * 2; i++) {
        let radio = (i % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella + radio * Math.cos(angulo),
            posYEstrella + radio * Math.sin(angulo)
        );
        angulo += paso;
    }
    ctx.closePath();
    ctx.fill();
}

// 2. Perú
function dibujarPerú(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // Parámetros de Color
    const colorRojo = "#D91023";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---
    const anchoFranja = ancho / 3;
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y, anchoFranja, alto);
    
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x + anchoFranja, y, anchoFranja, alto);
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x + (anchoFranja * 2), y, anchoFranja, alto);
}

// 3. Grecia
function dibujarGrecia(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros de la Cruz (Cantón)
    // (Tamaño del cuadrado azul, 0.55 = 55% del alto total)
    const tamanoCanton = alto * 0.5555; // 5/9 del alto
    // (Grosor de la cruz blanca, 0.2 = 20% del tamaño del cantón)
    const grosorCruz = tamanoCanton * 0.2;

    // Parámetros de Color
    const colorAzul = "#0D5EAF";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Dibujar 9 Franjas Horizontales (fondo completo)
    const altoFranja = alto / 9;
    for (let i = 0; i < 9; i++) {
        ctx.fillStyle = (i % 2 === 0) ? colorAzul : colorBlanco;
        ctx.fillRect(x, y + (i * altoFranja), ancho, altoFranja);
    }
    
    // 2. Dibujar Cuadrado Azul (Cantón)
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, y, tamanoCanton, tamanoCanton);
    
    // 3. Dibujar Cruz Blanca
    ctx.fillStyle = colorBlanco;
    // Franja horizontal de la cruz
    ctx.fillRect(x, y + (tamanoCanton / 2) - (grosorCruz / 2), tamanoCanton, grosorCruz);
    // Franja vertical de la cruz
    ctx.fillRect(x + (tamanoCanton / 2) - (grosorCruz / 2), y, grosorCruz, tamanoCanton);
}

// 4. República Democrática del Congo
function dibujarRepúblicaDemocráticadelCongo(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // --- Parámetros de la Franja Diagonal ---
    const anchoFranjaRoja = alto * 0.18; 

    const anchoBordeAmarillo = alto * 0.05; 
    
    const offsetDiagonalParalelo = alto * -0.1; 

    // --- Parámetros de la Estrella ---
    const escalaEstrella = alto * 0.20; 
    const posXEstrella = x + ancho * 0.15; 
    const posYEstrella = y + alto * 0.30; 
    const rotacionEstrella = 0;
    
    // --- Parámetros de Color ---
    const colorAzul = "#007FFF";   
    const colorRojo = "#CE1021";   
    const colorAmarillo = "#F7D618"; 

    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, y, ancho, alto);

    const anguloRadianes = -Math.atan(alto / ancho); // Ángulo de la diagonal (negativo)
    const longitudDiagonal = Math.sqrt(ancho * ancho + alto * alto) * 1.2; // Margen extra
    const grosorTotal = anchoFranjaRoja + (anchoBordeAmarillo * 2);
    
    ctx.save();
    
    
    ctx.translate(x, y + alto);
    
    ctx.rotate(anguloRadianes); // Rotación negativa

    ctx.fillStyle = colorAmarillo;
    ctx.fillRect(-ancho * 0.1, -grosorTotal - offsetDiagonalParalelo, longitudDiagonal, grosorTotal); 
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(-ancho * 0.1, -grosorTotal - offsetDiagonalParalelo + anchoBordeAmarillo, longitudDiagonal, anchoFranjaRoja);
    
    ctx.restore();
    
    const puntas = 5;
    const radioInterior = escalaEstrella * 0.4;
    let angulo = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180); 
    let paso = Math.PI / puntas;

    ctx.fillStyle = colorAmarillo;
    ctx.beginPath();
    for (let i = 0; i < puntas * 2; i++) {
        let radio = (i % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella + radio * Math.cos(angulo),
            posYEstrella + radio * Math.sin(angulo)
        );
        angulo += paso;
    }
    ctx.closePath();
    ctx.fill();
}

// 5. Maldivas 
function dibujarMaldivas(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // --- Parámetros del Rectángulo Verde ---
    // (Proporción de espacio en X, 0.12 = 12% de margen a cada lado)
    const margenXRect = 0.12;
    // (Proporción de espacio en Y, 0.2 = 20% de margen a cada lado)
    const margenYRect = 0.2;

    // ================================================================
    // --- Parámetros Clave de la Media Luna (¡Juega con estos!) ---
    
    // --- Círculo Blanco (El grande) ---
    // (Tamaño del círculo blanco. Un número más PEQUEÑO lo hace MÁS GRANDE)
    const escalaLunaBlanca = alto / 4.5;
    // (Posición X. 0.5 = centro)
    const posXLunaBlanca = x + ancho / 2;
    // (Posición Y. 0.5 = centro)
    const posYLunaBlanca = y + alto / 2;
    
    // --- Círculo Verde (El "parche" que corta) ---
    // (Proporción del parche. Más alto = creciente más FINO. 0.85 = 85%)
    const proporcionCorte = 0.85;
    // (Offset del parche. Más alto = creciente más FINO. 0.1 = 10%)
    const offsetCorte = 0.4;
    
    // --- Fin de Parámetros Clave ---
    // ================================================================

    // Parámetros de Color
    const colorRojo = "#D1223F";
    const colorVerde = "#007E3A";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Fondo Rojo
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y, ancho, alto);
    
    // 2. Rectángulo Verde
    const xVerde = x + (ancho * margenXRect);
    const yVerde = y + (alto * margenYRect);
    const anchoVerde = ancho * (1 - 2 * margenXRect);
    const altoVerde = alto * (1 - 2 * margenYRect);
    ctx.fillStyle = colorVerde;
    ctx.fillRect(xVerde, yVerde, anchoVerde, altoVerde);
    
    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    ctx.arc(posXLunaBlanca, posYLunaBlanca, escalaLunaBlanca, 0, Math.PI * 2);
    ctx.fill();
    
    // 3b. Dibuja el círculo VERDE (el "parche") encima
    const radioCorte = escalaLunaBlanca * proporcionCorte;
    const offsetCorteReal = escalaLunaBlanca * offsetCorte;
    const posXParche = posXLunaBlanca + offsetCorteReal; // Lo mueve a la derecha
    
    ctx.fillStyle = colorVerde; // ¡Usa el color del fondo!
    ctx.beginPath();
    ctx.arc(posXParche, posYLunaBlanca, radioCorte, 0, Math.PI * 2);
    ctx.fill();
}

// 6. Catar 
function dibujarCatar(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // ================================================================
    // --- Parámetros Clave de los Dientes (¡Juega con estos!) ---
    
    // (Fracción del ancho para la base blanca. 0.33 = 33%)
    const anchoBaseBlanca = ancho * 0.33;
    
    // (Qué tanto penetra el diente en el área granate)
    const penetracionDiente = ancho * 0.07;
    
    // (Número de dientes)
    const numeroDientes = 9;

    // --- Fin de Parámetros Clave ---
    // ================================================================

    // Parámetros de Color
    const colorGranate = "#8A1538";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Fondo Granate (cubre todo)
    ctx.fillStyle = colorGranate;
    ctx.fillRect(x, y, ancho, alto);
    
    // 2. Lógica de la Forma Blanca (Base + Dientes)
    // (Dibuja una sola forma para evitar la línea vertical)
    
    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    
    const alturaDiente = alto / numeroDientes;
    const xBase = anchoBaseBlanca; // El X donde empiezan los dientes
    
    // Iniciar en la esquina superior izquierda
    ctx.moveTo(x, y);
    
    // Línea superior de la base blanca
    ctx.lineTo(xBase, y);
    
    // Bucle para dibujar los 9 dientes
    for (let i = 0; i < numeroDientes; i++) {
        // Pico del diente
        ctx.lineTo(xBase + penetracionDiente, y + (i * alturaDiente) + (alturaDiente / 2));
        // Valle del diente
        ctx.lineTo(xBase, y + (i + 1) * alturaDiente);
    }
    
    // Línea inferior de la base blanca
    ctx.lineTo(x, y + alto);
    
    // Cerrar la forma (vuelve al inicio x,y)
    ctx.closePath();
    ctx.fill();
}

// 7. Kuwait
function dibujarKuwait(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros del Trapezoide
    // (Ancho del trapezoide en la base, 0.3 = 30% del ancho)
    const anchoTrapezoide = ancho * 0.3;

    // Parámetros de Color
    const colorVerde = "#007A3D";
    const colorBlanco = "#FFFFFF";
    const colorRojo = "#CE1126";
    const colorNegro = "#000000";

    // --- Lógica de Dibujo ---
    
    // 1. Franjas Horizontales
    const altoFranja = alto / 3;
    ctx.fillStyle = colorVerde;
    ctx.fillRect(x, y, ancho, altoFranja);
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y + (altoFranja * 2), ancho, altoFranja);
    
    // 2. Trapezoide Negro
    ctx.fillStyle = colorNegro;
    ctx.beginPath();
    ctx.moveTo(x, y); // Esquina sup-izq
    ctx.lineTo(x + anchoTrapezoide, y + altoFranja); // Punto interior-sup
    ctx.lineTo(x + anchoTrapezoide, y + (altoFranja * 2)); // Punto interior-inf
    ctx.lineTo(x, y + alto); // Esquina inf-izq
    ctx.closePath();
    ctx.fill();
}

// 8. Japón
function dibujarJapón(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros del Círculo Rojo
    // (Tamaño del círculo, 0.3 = 30% del alto total)
    const escalaCirculo = 0.3;
    // (Posición X: 0.5 = centro)
    const posXCirculo = 0.5;
    // (Posición Y: 0.5 = centro)
    const posYCirculo = 0.5;

    // Parámetros de Color
    const colorBlanco = "#FFFFFF";
    const colorRojo = "#BC002D";

    // --- Lógica de Dibujo ---

    // 1. Fondo Blanco
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x, y, ancho, alto);

    // 2. Lógica del Círculo Rojo
    const radio = alto * escalaCirculo;
    const centroX = x + (ancho * posXCirculo);
    const centroY = y + (alto * posYCirculo);
    
    ctx.fillStyle = colorRojo;
    ctx.beginPath();
    ctx.arc(centroX, centroY, radio, 0, Math.PI * 2);
    ctx.fill();
}

// 9. Togo
function dibujarTogo(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // Parámetros del Cantón (Cuadrado Rojo)
    // (Proporción del ancho, 0.4 = 40%)
    const propCanton = 0.4;
    
    // Parámetros de la Estrella
    // (Tamaño de la estrella, 0.15 = 15% del alto total)
    const escalaEstrella = alto * 0.15;
    // (Rotación en grados)
    const rotacionEstrella = 0;

    // Parámetros de Color
    const colorVerde = "#006A4E";
    const colorAmarillo = "#FFCE00";
    const colorRojo = "#D21034";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Franjas Horizontales (fondo completo)
    const altoFranja = alto / 5;
    for (let i = 0; i < 5; i++) {
        ctx.fillStyle = (i % 2 === 0) ? colorVerde : colorAmarillo;
        ctx.fillRect(x, y + (i * altoFranja), ancho, altoFranja);
    }
    
    // 2. Cuadrado Rojo (Cantón)
    const tamanoCanton = altoFranja * 3; // Ocupa 3 franjas de alto
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y, tamanoCanton, tamanoCanton);
    
    // 3. Lógica de la Estrella
    const posXEstrella = x + (tamanoCanton / 2);
    const posYEstrella = y + (tamanoCanton / 2);
    const puntas = 5;
    const radioInterior = escalaEstrella * 0.4;
    let angulo = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180); 
    let paso = Math.PI / puntas;

    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    for (let i = 0; i < puntas * 2; i++) {
        let radio = (i % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella + radio * Math.cos(angulo),
            posYEstrella + radio * Math.sin(angulo)
        );
        angulo += paso;
    }
    ctx.closePath();
    ctx.fill();
}

// 10. Irlanda
function dibujarIrlanda(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // Parámetros de Color
    const colorVerde = "#169B62";
    const colorBlanco = "#FFFFFF";
    const colorNaranja = "#FF883E";

    // --- Lógica de Dibujo ---
    const anchoFranja = ancho / 3;
    
    ctx.fillStyle = colorVerde;
    ctx.fillRect(x, y, anchoFranja, alto);
    
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x + anchoFranja, y, anchoFranja, alto);
    
    ctx.fillStyle = colorNaranja;
    ctx.fillRect(x + (anchoFranja * 2), y, anchoFranja, alto);
}

// 16. Siria 
function dibujarSiria(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // ================================================================
    // --- Parámetros Clave de las Estrellas (¡Juega con estos!) ---
    
    // (Tamaño de las estrellas. Un número más PEQUEÑO la hace MÁS GRANDE)
    const escalaEstrella = alto / 6;
    
    // (Posición Y de todas las estrellas. 0.5 = centro)
    const posYEstrellas = y + alto / 2;
    
    // (Posición X de la estrella 1 [izquierda]. 0.25 = 25%)
    const posXEstrella1 = x + ancho * 0.25;
    
    // (Posición X de la estrella 2 [centro]. 0.5 = 50%)
    const posXEstrella2 = x + ancho * 0.5;
    
    // (Posición X de la estrella 3 [derecha]. 0.75 = 75%)
    const posXEstrella3 = x + ancho * 0.75;
    
    // (Rotación de las estrellas en grados)
    const rotacionEstrella = 0;
    
    // --- Fin de Parámetros Clave ---
    // ================================================================

    // Parámetros de Color
    const colorRojo = "#CE1126"; // <-- Color de la franja Y las estrellas
    const colorBlanco = "#FFFFFF";
    const colorNegro = "#000000";
    const colorVerde = "#007A3D"; // <-- Color de la franja superior

    // --- Lógica de Dibujo ---

    // 1. Franjas
    const altoFranja = alto / 3;
    ctx.fillStyle = colorVerde; // Franja superior Verde
    ctx.fillRect(x, y, ancho, altoFranja);
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    ctx.fillStyle = colorNegro;
    ctx.fillRect(x, y + (altoFranja * 2), ancho, altoFranja);
    
    // 2. Lógica de las 3 Estrellas Rojas
    const puntas = 5;
    const radioInterior = escalaEstrella * 0.4;
    let paso = Math.PI / puntas;
    ctx.fillStyle = colorRojo; // <-- Estrellas Rojas

    // Estrella 1 (Izquierda)
    let angulo1 = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180);
    ctx.beginPath();
    for (let j = 0; j < puntas * 2; j++) {
        let radio = (j % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella1 + radio * Math.cos(angulo1),
            posYEstrellas + radio * Math.sin(angulo1)
        );
        angulo1 += paso;
    }
    ctx.closePath();
    ctx.fill();

    // Estrella 2 (Centro)
    let angulo2 = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180);
    ctx.beginPath();
    for (let j = 0; j < puntas * 2; j++) {
        let radio = (j % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella2 + radio * Math.cos(angulo2),
            posYEstrellas + radio * Math.sin(angulo2)
        );
        angulo2 += paso;
    }
    ctx.closePath();
    ctx.fill();
    
    // Estrella 3 (Derecha)
    let angulo3 = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180);
    ctx.beginPath();
    for (let j = 0; j < puntas * 2; j++) {
        let radio = (j % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella3 + radio * Math.cos(angulo3),
            posYEstrellas + radio * Math.sin(angulo3)
        );
        angulo3 += paso;
    }
    ctx.closePath();
    ctx.fill();
}

// 17. Somalia
function dibujarSomalia(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // ================================================================
    // --- Parámetros Clave de la Estrella (¡Juega con estos!) ---
    
    // (Tamaño de la estrella. Un número más PEQUEÑO la hace MÁS GRANDE)
    const escalaEstrella = alto * 0.3; // Es una estrella grande
    
    // (Posición X: 0.5 = centro)
    const posXEstrella = x + ancho / 2;
    
    // (Posición Y: 0.5 = centro)
    const posYEstrella = y + alto / 2;
    
    // (Rotación de la estrella en grados)
    const rotacionEstrella = 0;
    
    // --- Fin de Parámetros Clave ---
    // ================================================================

    // Parámetros de Color
    const colorAzul = "#4189DD";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Fondo Azul
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, y, ancho, alto);
    
    // 2. Lógica de la Estrella (5 puntas, con rotación)
    const puntas = 5;
    const radioInterior = escalaEstrella * 0.4;
    let angulo = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180); 
    let paso = Math.PI / puntas;

    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    for (let i = 0; i < puntas * 2; i++) {
        let radio = (i % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella + radio * Math.cos(angulo),
            posYEstrella + radio * Math.sin(angulo)
        );
        angulo += paso;
    }
    ctx.closePath();
    ctx.fill();
}

// 18. Marruecos 
function dibujarMarruecos(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // ================================================================
    // --- Parámetros Clave de la Estrella (¡Juega con estos!) ---
    
    // (Tamaño de la estrella. Un número más PEQUEÑO la hace MÁS GRANDE)
    const escalaEstrella = alto / 4.5;
    
    // (Grosor de la LÍNEA de la estrella. Un número más PEQUEÑO la hace MÁS GRUESA)
    const grosorEstrella = alto / 50;
    
    // (Posición X: 0.5 = centro)
    const posXEstrella = x + ancho / 2;
    
    // (Posición Y: 0.5 = centro)
    const posYEstrella = y + alto / 2;
    
    // (Rotación de la estrella en grados)
    const rotacionEstrella = 0;
    
    // --- Fin de Parámetros Clave ---
    // ================================================================

    // Parámetros de Color
    const colorRojo = "#C1272D";
    const colorVerde = "#006233";

    // --- Lógica de Dibujo ---

    // 1. Fondo Rojo
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y, ancho, alto);
    
    // 2. Lógica del Pentagrama (Siguiendo tus instrucciones)
    
    ctx.strokeStyle = colorVerde;
    ctx.lineWidth = grosorEstrella;
    
    const puntas = 5;
    const anguloInicial = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180);
    const pasoAngulo = (Math.PI * 2) / puntas;

    // 1. Calculamos los 5 vértices (P0, P1, P2, P3, P4)
    const vertices = [];
    for (let i = 0; i < puntas; i++) {
        let angulo = anguloInicial + (i * pasoAngulo);
        vertices.push({
            x: posXEstrella + escalaEstrella * Math.cos(angulo),
            y: posYEstrella + escalaEstrella * Math.sin(angulo)
        });
    }

    // 2. Trazamos las diagonales (los "triángulos"),
    //    omitiendo los bordes del pentágono (los "bordes borrados")
    ctx.beginPath();
    ctx.moveTo(vertices[0].x, vertices[0].y); // Mover a P0
    ctx.lineTo(vertices[2].x, vertices[2].y); // Línea de P0 a P2
    ctx.lineTo(vertices[4].x, vertices[4].y); // Línea de P2 a P4
    ctx.lineTo(vertices[1].x, vertices[1].y); // Línea de P4 a P1
    ctx.lineTo(vertices[3].x, vertices[3].y); // Línea de P1 a P3
    ctx.lineTo(vertices[0].x, vertices[0].y); // Línea de P3 a P0
    
    ctx.stroke(); // Dibuja las 5 líneas
}

// 19. Turquía 
function dibujarTurquía(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;

    // ================================================================
    // --- Parámetros Clave de Luna y Estrella (¡Juega con estos!) ---
    
    // --- Media Luna ---
    // (Tamaño del círculo blanco exterior. Un número más PEQUEÑO la hace MÁS GRANDE)
    const escalaLunaBlanca = alto / 4;
    // (Posición X del centro del círculo BLANCO. 0.35 para desplazarla a la izquierda)
    const posXLunaBlanca = x + ancho * 0.35;
    // (Posición Y del centro del círculo BLANCO. 0.5 = centro)
    const posYLunaBlanca = y + alto / 2;
    
    // (Proporción del "parche" ROJO. 0.8 = 80%. Más alto = creciente más FINO)
    const proporcionCorte = 0.8;
    // (Offset del "parche" ROJO. 0.15 = 15%. Más alto = creciente más FINO)
    const offsetCorte = 0.27;

    // --- Estrella ---
    // (Tamaño de la estrella. Un número más PEQUEÑO la hace MÁS GRANDE)
    const escalaEstrella = alto / 8;
    // (Posición X del centro de la estrella. 0.55 para desplazarla a la derecha)
    const posXEstrella = x + ancho * 0.55;
    // (Posición Y del centro de la estrella. 0.5 = centro)
    const posYEstrella = y + alto / 2;
    // (Rotación en grados. -18 la inclina a la izquierda)
    const rotacionEstrella = -18;
    
    // --- Fin de Parámetros Clave ---
    // ================================================================

    // Parámetros de Color
    const colorRojo = "#E30A17";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Fondo Rojo
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y, ancho, alto);
    
    // 2. Lógica de la Media Luna (Simple: Círculo BLANCO sobre Círculo ROJO)
    
    // 2a. Dibuja el círculo BLANCO (el grande)
    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    ctx.arc(posXLunaBlanca, posYLunaBlanca, escalaLunaBlanca, 0, Math.PI * 2);
    ctx.fill();
    
    // 2b. Dibuja el círculo ROJO (el "parche" que crea la forma de luna)
    const radioCorte = escalaLunaBlanca * proporcionCorte;
    const offsetCorteReal = escalaLunaBlanca * offsetCorte;
    const posXParche = posXLunaBlanca + offsetCorteReal; // Lo mueve a la derecha
    
    ctx.fillStyle = colorRojo; // ¡Usa el color del fondo!
    ctx.beginPath();
    ctx.arc(posXParche, posYLunaBlanca, radioCorte, 0, Math.PI * 2);
    ctx.fill();
    
    // 3. Lógica de la Estrella (¡Se dibuja DESPUÉS de la luna!)
    const puntas = 5;
    const radioInterior = escalaEstrella * 0.4;
    let angulo = (Math.PI / 2 * 3) + (rotacionEstrella * Math.PI / 180); 
    let paso = Math.PI / puntas;

    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    for (let i = 0; i < puntas * 2; i++) {
        let radio = (i % 2 === 0) ? escalaEstrella : radioInterior;
        ctx.lineTo(
            posXEstrella + radio * Math.cos(angulo),
            posYEstrella + radio * Math.sin(angulo)
        );
        angulo += paso;
    }
    ctx.closePath();
    ctx.fill();
}

// 20. San Marino 
function dibujarSanMarino(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // --- Parámetros de la Imagen ---
    const rutaImagen = "escudo_san_marino.png";
    const escalaImagen = alto / 1.6; // (Tamaño)
    const posXImagen = x + ancho / 2; // (Posición X)
    const posYImagen = y + alto / 2;  // (Posición Y)
    const rotacionImagen = 0;           // (Rotación en grados)
    
    // Parámetros de Color
    const colorBlanco = "#FFFFFF";
    const colorAzul = "#5EB6E4";

    // --- Lógica de Dibujo ---

    // 1. Franjas de Fondo
    const altoFranja = alto / 2;
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(x, y, ancho, altoFranja);
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    
    // 2. Lógica de carga de IMAGEN (Método Bolivia)
    const img = new Image();
    img.src = rutaImagen;
    
    img.onload = function() {
        // Calcular dimensiones
        const altoImgDeseado = escalaImagen;
        const escalaReal = altoImgDeseado / this.height;
        const anchoImgDeseado = this.width * escalaReal;
        
        ctx.save();
        ctx.translate(posXImagen, posYImagen);
        ctx.rotate(rotacionImagen * Math.PI / 180);
        
        // Dibujar la imagen centrada
        ctx.drawImage(
            img, 
            -anchoImgDeseado / 2, 
            -altoImgDeseado / 2, 
            anchoImgDeseado, 
            altoImgDeseado
        );
        ctx.restore();
    }
    
    img.onerror = function() {
        console.error("No se pudo cargar la imagen:", rutaImagen);
        ctx.fillStyle = "red";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`(Error ${rutaImagen})`, posXImagen, posYImagen);
    }
}

// 21. Suazilandia
function dibujarSuazilandia(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // --- Parámetros de la Imagen ---
    const rutaImagen = "escudo_esuatini.png";
    const escalaImagen = alto / 0.8; 
    const posXImagen = x + ancho / 2;
    const posYImagen = y + alto / 2;
    const rotacionImagen = 0;
    
    // Parámetros de Color
    const colorAzul = "#3E5EB9";
    const colorAmarillo = "#FFC72C";
    const colorRojo = "#B10C29";

    // --- Lógica de Dibujo ---
    
    // 1. Franjas de Fondo
    // Proporciones: 3 (azul), 1 (amarillo), 8 (rojo), 1 (amarillo), 3 (azul) = 16 partes
    const parte = alto / 16;
    let posY = y;
    
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, posY, ancho, parte * 3);
    posY += parte * 3;
    
    ctx.fillStyle = colorAmarillo;
    ctx.fillRect(x, posY, ancho, parte * 1);
    posY += parte * 1;
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, posY, ancho, parte * 8);
    // (¡No aumentamos posY aquí, porque la imagen se centra en el medio!)
    
    posY += parte * 8;
    
    ctx.fillStyle = colorAmarillo;
    ctx.fillRect(x, posY, ancho, parte * 1);
    posY += parte * 1;
    
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, posY, ancho, parte * 3);
    
    // 2. Lógica de carga de IMAGEN (Método Bolivia)
    const img = new Image();
    img.src = rutaImagen;
    
    img.onload = function() {
        // Calcular dimensiones
        const altoImgDeseado = escalaImagen;
        const escalaReal = altoImgDeseado / this.height;
        const anchoImgDeseado = this.width * escalaReal;
        
        ctx.save();
        ctx.translate(posXImagen, posYImagen);
        ctx.rotate(rotacionImagen * Math.PI / 180);
        
        // Dibujar la imagen centrada
        ctx.drawImage(
            img, 
            -anchoImgDeseado / 2, 
            -altoImgDeseado / 2, 
            anchoImgDeseado, 
            altoImgDeseado
        );
        ctx.restore();
    }
    
    img.onerror = function() {
        console.error("No se pudo cargar la imagen:", rutaImagen);
        ctx.fillStyle = "red";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`(Error ${rutaImagen})`, posXImagen, posYImagen);
    }
}

// 22. Haití 
function dibujarHaití(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // --- Parámetros de la Imagen ---
    // (Esta debe ser tu imagen PNG solo del escudo, SIN fondo blanco)
    const rutaImagen = "escudo_haiti.png";
    
    // (Tamaño del ESCUDO. 0.25 = 25% del alto)
    const escalaImagen = alto * 0.5; 
    
    const posXImagen = x + ancho / 2;
    const posYImagen = y + alto / 2;
    const rotacionImagen = 0;
    
    // Parámetros de Color
    const colorAzul = "#00217D";
    const colorRojo = "#D21034";
    // const colorBlanco = "#FFFFFF"; // Ya no lo necesitamos

    // --- Lógica de Dibujo ---

    // 1. Franjas de Fondo
    const altoFranja = alto / 2;
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, y, ancho, altoFranja);
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    
    // 2. Cuadrado Blanco (¡ELIMINADO!)
    // (Ya no dibujamos el cuadrado blanco. Confiamos en tu PNG)
    
    // 3. Lógica de carga de IMAGEN (Método Bolivia)
    const img = new Image();
    img.src = rutaImagen;
    
    img.onload = function() {
        // Calcular dimensiones
        const altoImgDeseado = escalaImagen;
        const escalaReal = altoImgDeseado / this.height;
        const anchoImgDeseado = this.width * escalaReal;
        
        ctx.save();
        ctx.translate(posXImagen, posYImagen);
        ctx.rotate(rotacionImagen * Math.PI / 180);
        
        // Dibujar la imagen centrada
        ctx.drawImage(
            img, 
            -anchoImgDeseado / 2, 
            -altoImgDeseado / 2, 
            anchoImgDeseado, 
            altoImgDeseado
        );
        ctx.restore();
    }
    
    img.onerror = function() {
        console.error("No se pudo cargar la imagen:", rutaImagen);
        ctx.fillStyle = "red";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`(Error ${rutaImagen})`, posXImagen, posYImagen);
    }
}

// 23. Etiopía 
function dibujarEtiopía(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // --- Parámetros de la Imagen ---
    const rutaImagen = "emblema_etiopia.png";
    const escalaImagen = alto / 1.88;
    const posXImagen = x + ancho / 2;
    const posYImagen = y + alto / 2;
    const rotacionImagen = 0;
    
    // Parámetros de Color
    const colorVerde = "#078930";
    const colorAmarillo = "#FCDD09";
    const colorRojo = "#DA121A";

    // --- Lógica de Dibujo ---

    // 1. Franjas
    const altoFranja = alto / 3;
    ctx.fillStyle = colorVerde;
    ctx.fillRect(x, y, ancho, altoFranja);
    ctx.fillStyle = colorAmarillo;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y + (altoFranja * 2), ancho, altoFranja);
    
    // 2. Lógica de carga de IMAGEN (Método Bolivia)
    const img = new Image();
    img.src = rutaImagen;
    
    img.onload = function() {
        // Calcular dimensiones
        const altoImgDeseado = escalaImagen;
        const escalaReal = altoImgDeseado / this.height;
        const anchoImgDeseado = this.width * escalaReal;
        
        ctx.save();
        ctx.translate(posXImagen, posYImagen);
        ctx.rotate(rotacionImagen * Math.PI / 180);
        
        // Dibujar la imagen centrada
        ctx.drawImage(
            img, 
            -anchoImgDeseado / 2, 
            -altoImgDeseado / 2, 
            anchoImgDeseado, 
            altoImgDeseado
        );
        ctx.restore();
    }
    
    img.onerror = function() {
        console.error("No se pudo cargar la imagen:", rutaImagen);
        ctx.fillStyle = "red";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`(Error ${rutaImagen})`, posXImagen, posYImagen);
    }
}

// 24. Bielorrusia 
function dibujarBielorrusia(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // --- Parámetros de la Franja Imagen ---
    const rutaImagenFranja = "franja_bielorrusia.png";
    // (Ancho de la franja ornamental. 0.111 = 1/9 del ancho total)
    const anchoFranjaImagen = ancho * 0.111; 
    
    // Parámetros de Color de las franjas
    const colorRojo = "#D21034";
    const colorVerde = "#007A3D";

    // --- Lógica de Dibujo ---

    // 1. Dibujar las franjas ROJA y VERDE
    //    (Estas franjas van a la DERECHA de la franja ornamental)
    const xFranjas = x + anchoFranjaImagen;
    const anchoFranjas = ancho - anchoFranjaImagen;
    const altoFranjaRoja = alto * (2/3); // 2/3 del alto total
    const altoFranjaVerde = alto * (1/3); // 1/3 del alto total
    
    ctx.fillStyle = colorRojo;
    ctx.fillRect(xFranjas, y, anchoFranjas, altoFranjaRoja);
    
    ctx.fillStyle = colorVerde;
    ctx.fillRect(xFranjas, y + altoFranjaRoja, anchoFranjas, altoFranjaVerde);
    
    // 2. Lógica de carga de la IMAGEN de la franja ornamental (Método Bolivia)
    //    (Esta imagen se estira para llenar el espacio izquierdo)
    const img = new Image();
    img.src = rutaImagenFranja;
    
    img.onload = function() {
        // Dibuja la imagen estirada para que llene el espacio de la franja izquierda
        ctx.drawImage(img, x, y, anchoFranjaImagen, alto);
    }
    
    img.onerror = function() {
        console.error("No se pudo cargar la imagen:", rutaImagenFranja);
        ctx.fillStyle = "red";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`(Error ${rutaImagenFranja})`, x + anchoFranjaImagen / 2, y + alto / 2);
    }
}

// 25. Bután 
function dibujarBután(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // --- Parámetros de la Imagen ---
    const rutaImagen = "dragon_butan.png";
    const escalaImagen = alto / 1.1; 
    const posXImagen = x + ancho / 2;
    const posYImagen = y + alto / 2;
    const rotacionImagen = 0;
    
    // Parámetros de Color
    const colorAmarillo = "#FFC72C";
    const colorNaranja = "#FF4E12";

    // --- Lógica de Dibujo ---

    // 1. Triángulo Amarillo (Superior Izquierdo)
    ctx.fillStyle = colorAmarillo;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + ancho, y);
    ctx.lineTo(x, y + alto);
    ctx.closePath();
    ctx.fill();
    
    // 2. Triángulo Naranja (Inferior Derecho)
    ctx.fillStyle = colorNaranja;
    ctx.beginPath();
    ctx.moveTo(x + ancho, y);
    ctx.lineTo(x + ancho, y + alto);
    ctx.lineTo(x, y + alto);
    ctx.closePath();
    ctx.fill();
    
    // 3. Lógica de carga de IMAGEN (Método Bolivia)
    const img = new Image();
    img.src = rutaImagen;
    
    img.onload = function() {
        // Calcular dimensiones
        const altoImgDeseado = escalaImagen;
        const escalaReal = altoImgDeseado / this.height;
        const anchoImgDeseado = this.width * escalaReal;
        
        ctx.save();
        ctx.translate(posXImagen, posYImagen);
        ctx.rotate(rotacionImagen * Math.PI / 180);
        
        // Dibujar la imagen centrada
        ctx.drawImage(
            img, 
            -anchoImgDeseado / 2, 
            -altoImgDeseado / 2, 
            anchoImgDeseado, 
            altoImgDeseado
        );
        ctx.restore();
    }
    
    img.onerror = function() {
        console.error("No se pudo cargar la imagen:", rutaImagen);
        ctx.fillStyle = "red";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`(Error ${rutaImagen})`, posXImagen, posYImagen);
    }
}

// 26. Filipinas 
function dibujarFilipinas(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // --- Parámetros de la IMAGEN (¡SÓLO EL SOL!) ---
    // (Esta debe ser tu imagen PNG solo del sol con rayos)
    const rutaImagenSol = "sol_filipinas.png"; 
    
    // (Tamaño del SOL. Un número más PEQUEÑO lo hace MÁS GRANDE)
    const escalaImagenSol = alto / 4.5; 
    // (Posición X del SOL. 0.22 = 22% del ancho)
    const posXImagenSol = x + ancho * 0.22; 
    const posYImagenSol = y + alto / 2;
    const rotacionImagenSol = 0;
    
    // --- Parámetros de las 3 ESTRELLAS (¡NUEVO!) ---
    // (Tamaño de las estrellas)
    const escalaEstrella = alto / 18;
    const rotacionEstrella = 0;
    const colorEstrellas = "#FCDD09"; // Amarillo
    
    // Parámetro del Triángulo
    const penetracionTriangulo = 0.5; // (Debe coincidir con el triángulo)

    // (Posición de las estrellas, ajustadas a las esquinas)
    const posXEstrella1 = x + ancho * 0.07; // Estrella superior
    const posYEstrella1 = y + alto * 0.1;
    const posXEstrella2 = x + ancho * 0.07; // Estrella inferior
    const posYEstrella2 = y + alto * 0.9;
    const posXEstrella3 = x + (ancho * penetracionTriangulo) - (ancho * 0.07); // Estrella derecha
    const posYEstrella3 = y + alto / 2;

    // Parámetros de Color
    const colorAzul = "#0038A8";
    const colorRojo = "#CE1126";
    const colorBlanco = "#FFFFFF";

    // --- Lógica de Dibujo ---

    // 1. Franjas de Fondo
    const altoFranja = alto / 2;
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, y, ancho, altoFranja);
    ctx.fillStyle = colorRojo;
    ctx.fillRect(x, y + altoFranja, ancho, altoFranja);
    
    // 2. Triángulo Blanco
    const puntaX = x + (ancho * penetracionTriangulo);
    const puntaY = y + (alto / 2);
    ctx.fillStyle = colorBlanco;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(puntaX, puntaY);
    ctx.lineTo(x, y + alto);
    ctx.closePath();
    ctx.fill();
    
    // 3. Lógica de carga de IMAGEN (SÓLO EL SOL)
    const img = new Image();
    img.src = rutaImagenSol;
    
    img.onload = function() {
        // Calcular dimensiones
        const altoImgDeseado = escalaImagenSol;
        const escalaReal = altoImgDeseado / this.height;
        const anchoImgDeseado = this.width * escalaReal;
        
        ctx.save();
        ctx.translate(posXImagenSol, posYImagenSol);
        ctx.rotate(rotacionImagenSol * Math.PI / 180);
        
        // Dibujar la imagen centrada
        ctx.drawImage(
            img, 
            -anchoImgDeseado / 2, 
            -altoImgDeseado / 2, 
            anchoImgDeseado, 
            altoImgDeseado
        );
        ctx.restore();
    }
    
    img.onerror = function() {
        console.error("No se pudo cargar la imagen:", rutaImagenSol);
        ctx.fillStyle = "red";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`(Error ${rutaImagenSol})`, posXImagenSol, posYImagenSol);
    }
    
    // 4. Lógica para dibujar las 3 ESTRELLAS (NUEVO)
    const puntas = 5;
    const radioInterior = escalaEstrella * 0.4;
    let paso = Math.PI / puntas;
    ctx.fillStyle = colorEstrellas;

    // Función auxiliar interna para no repetir
    function dibujarUnaEstrella(cx, cy, rot) {
        let angulo = (Math.PI / 2 * 3) + (rot * Math.PI / 180);
        ctx.beginPath();
        for (let j = 0; j < puntas * 2; j++) {
            let radio = (j % 2 === 0) ? escalaEstrella : radioInterior;
            ctx.lineTo(cx + radio * Math.cos(angulo), cy + radio * Math.sin(angulo));
            angulo += paso;
        }
        ctx.closePath();
        ctx.fill();
    }

    // Dibujar las 3 estrellas
    dibujarUnaEstrella(posXEstrella1, posYEstrella1, rotacionEstrella);
    dibujarUnaEstrella(posXEstrella2, posYEstrella2, rotacionEstrella);
    dibujarUnaEstrella(posXEstrella3, posYEstrella3, rotacionEstrella);
}

// 27. Fiyi 
function dibujarFiyi(ctx, config) {
    
    // --- Parámetros de Configuración de la Bandera ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // --- Parámetros del Escudo (el que ya tienes) ---
    const rutaImagenEscudo = "escudo_fiyi.png";
    const escalaEscudo = alto / 2.5;
    const posXEscudo = x + ancho * 0.75; // 75% a la derecha
    const posYEscudo = y + alto / 2;     // Centrado vertical
    const rotacionEscudo = 0;
    
    // Parámetros del Cantón (donde va la bandera UK)
    const anchoCanton = ancho / 2;
    const altoCanton = alto / 2;
    
    // Parámetro de Color
    const colorAzulClaro = "#62B5E5";

    ctx.fillStyle = colorAzulClaro;
    ctx.fillRect(x, y, ancho, alto);
    
    ctx.save();

    ctx.beginPath();
    ctx.rect(x, y, anchoCanton, altoCanton);
    ctx.clip(); 
    
    const configCanton = {
        x: x,
        y: y,
        ancho: anchoCanton, // Usar el ancho del cantón
        alto: altoCanton    // Usar el alto del cantón
    };
    
    dibujarReinoUnido(ctx, configCanton);
    
    ctx.restore();
    
    const imgEscudo = new Image();
    imgEscudo.src = rutaImagenEscudo;
    
    imgEscudo.onload = function() {
        // Calcular dimensiones
        const altoImgDeseado = escalaEscudo;
        const escalaReal = altoImgDeseado / this.height;
        const anchoImgDeseado = this.width * escalaReal;
        
        ctx.save();
        ctx.translate(posXEscudo, posYEscudo);
        ctx.rotate(rotacionEscudo * Math.PI / 180);
        
        // Dibujar la imagen centrada
        ctx.drawImage(
            imgEscudo, 
            -anchoImgDeseado / 2, 
            -altoImgDeseado / 2, 
            anchoImgDeseado, 
            altoImgDeseado
        );
        ctx.restore();
    }
    imgEscudo.onerror = function() {
        console.error("No se pudo cargar la imagen:", rutaImagenEscudo);
        ctx.fillStyle = "red";
        ctx.fillText(`(Error ${rutaImagenEscudo})`, posXEscudo, posYEscudo);
    }
}

// 28. Reino Unido 
function dibujarReinoUnido(ctx, config) {
    
    // --- Parámetros de Configuración ---
    const x = config.x;
    const y = config.y;
    const ancho = config.ancho;
    const alto = config.alto;
    
    // --- Parámetros Clave de las Cruces ---
    // (Ancho de la cruz diagonal BLANCA. 0.2 = 20% del alto)
    const anchoCruzBlancaDiag = alto * 0.2;
    // (Ancho de la cruz diagonal ROJA. 0.12 = 12% del alto)
    const anchoCruzRojaDiag = alto * 0.12;

    // (Ancho de la cruz principal BLANCA [borde]. 0.33 = 33% del alto)
    const anchoCruzBlancaPrincipal = alto * 0.33;
    // (Ancho de la cruz principal ROJA [centro]. 0.2 = 20% del alto)
    const anchoCruzRojaPrincipal = alto * 0.2;

    // Parámetros de Color
    const colorAzul = "#012169";
    const colorBlanco = "#FFFFFF";
    const colorRojo = "#C8102E";

    // --- Lógica de Dibujo ---

    // 1. Fondo Azul
    ctx.fillStyle = colorAzul;
    ctx.fillRect(x, y, ancho, alto);

    // 2. Lógica de la Cruz Diagonal Blanca (San Andrés)
    const anguloRadianes = Math.atan(alto / ancho);
    const longitudDiagonal = Math.sqrt(ancho * ancho + alto * alto);
    
    ctx.save();
    ctx.translate(x + ancho / 2, y + alto / 2);
    ctx.rotate(anguloRadianes);
    ctx.fillStyle = colorBlanco;
    ctx.fillRect(-longitudDiagonal / 2, -anchoCruzBlancaDiag / 2, longitudDiagonal, anchoCruzBlancaDiag);
    ctx.rotate(-2 * anguloRadianes);
    ctx.fillRect(-longitudDiagonal / 2, -anchoCruzBlancaDiag / 2, longitudDiagonal, anchoCruzBlancaDiag);
    ctx.restore();

    // 3. Lógica de la Cruz Diagonal Roja (San Patricio)
    ctx.save();
    ctx.translate(x + ancho / 2, y + alto / 2);
    ctx.rotate(anguloRadianes);
    ctx.fillStyle = colorRojo;
    ctx.fillRect(-longitudDiagonal / 2, -anchoCruzRojaDiag / 2, longitudDiagonal, anchoCruzRojaDiag);
    ctx.rotate(-2 * anguloRadianes);
    ctx.fillRect(-longitudDiagonal / 2, -anchoCruzRojaDiag / 2, longitudDiagonal, anchoCruzRojaDiag);
    ctx.restore();
    
    // 4. Lógica de la Cruz Principal Blanca (Borde)
    // (Se dibuja ENCIMA de las diagonales)
    const centroX = x + ancho / 2;
    const centroY = y + alto / 2;
    
    ctx.fillStyle = colorBlanco;

    ctx.fillRect(x, centroY - (anchoCruzBlancaPrincipal / 2), ancho, anchoCruzBlancaPrincipal);
    ctx.fillRect(centroX - (anchoCruzBlancaPrincipal / 2), y, anchoCruzBlancaPrincipal, alto);
    
    ctx.fillStyle = colorRojo;
    // Barra Horizontal Roja
    ctx.fillRect(x, centroY - (anchoCruzRojaPrincipal / 2), ancho, anchoCruzRojaPrincipal);
    // Barra Vertical Roja
    ctx.fillRect(centroX - (anchoCruzRojaPrincipal / 2), y, anchoCruzRojaPrincipal, alto);
}