// ==============================
// App: UI + pegamento con WebGL
// ==============================
(function(){
  'use strict';

  const canvas = document.getElementById('lienzo');
  let motor;
  try {
    motor = FlagGL.inicializar(canvas);
  } catch (e) {
    console.error(e);
    alert('No se pudo inicializar WebGL. Revisa aceleración por hardware.');
    return;
  }

  const SELECT = document.getElementById('sel');
  const KEY = 'bandera_actual_nilson';

  // Lista requerida (además de Perú)
  const OBLIGATORIOS = [
    "Malaui","Yibuti","Tanzania","Nauru","Birmania (Myanmar)","Kenia",
    "Países Bajos","Malasia","Botsuana","Yemen","Vietnam","Eslovenia",
    "Kirguistán","Guinea-Bisáu","Polonia","República del Congo","Ghana",
    "Mónaco","Egipto","Canadá","República Centroafricana","Pakistán",
    "Rusia","Chad","Comoras","Letonia","India","Nigeria"
  ];

  function poblarSelect(){
    const lista = ["Perú", ...OBLIGATORIOS];
    for(const nombre of lista){
      if(!window.PRESETS[nombre]){
        console.warn("Falta preset:", nombre);
        continue;
      }
      const opt = document.createElement('option');
      opt.value = nombre;
      opt.textContent = nombre;
      SELECT.appendChild(opt);
    }
  }

  function dibujaActual(){
    const nombre = SELECT.value;
    const preset = window.PRESETS[nombre];
    motor.render(preset);
  }

  // Boot
  poblarSelect();
  const inicial = localStorage.getItem(KEY) || "Perú";
  if([...SELECT.options].some(o => o.value === inicial)) {
    SELECT.value = inicial;
  }
  dibujaActual();

  // Eventos
  SELECT.addEventListener('change', ()=>{
    localStorage.setItem(KEY, SELECT.value);
    dibujaActual();
  });
  window.addEventListener('resize', dibujaActual);
})();
