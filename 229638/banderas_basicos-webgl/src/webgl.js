// ============
// Motor WebGL
// ============
(function(global){
  'use strict';

  const clamp01 = x => Math.max(0, Math.min(1, x));

  function crearContexto(canvas){
    const gl = canvas.getContext('webgl');
    if(!gl) throw new Error('WebGL no disponible. Activa aceleración por hardware.');
    return gl;
  }

  const VS_SRC = `
    attribute vec2 aPos;
    varying vec2 vUV;
    void main(){
      vUV = (aPos + 1.0) * 0.5;
      gl_Position = vec4(aPos, 0.0, 1.0);
    }
  `;

  const FS_SRC = `
    precision mediump float;
    varying vec2 vUV;

    uniform int  uHorizontal;   // 1=horizontal, 0=vertical
    uniform int  uNumCortes;    // 0..7
    uniform float uCortes[7];   // 0..1
    uniform vec3  uColores[8];  // n franjas

    uniform int  uUsarCirculo;
    uniform vec2 uCentro;
    uniform float uRadio;
    uniform vec3 uColorCirculo;

    void main(){
      float t = (uHorizontal==1) ? vUV.y : vUV.x;

      vec3 col = uColores[0];
      if(uNumCortes > 0 && t >= uCortes[0]) col = uColores[1];
      if(uNumCortes > 1 && t >= uCortes[1]) col = uColores[2];
      if(uNumCortes > 2 && t >= uCortes[2]) col = uColores[3];
      if(uNumCortes > 3 && t >= uCortes[3]) col = uColores[4];
      if(uNumCortes > 4 && t >= uCortes[4]) col = uColores[5];
      if(uNumCortes > 5 && t >= uCortes[5]) col = uColores[6];
      if(uNumCortes > 6 && t >= uCortes[6]) col = uColores[7];

      if(uUsarCirculo==1){
        float d = distance(vUV, uCentro);
        if(d <= uRadio) col = uColorCirculo;
      }
      gl_FragColor = vec4(col,1.0);
    }
  `;

  function compilar(gl, tipo, src){
    const sh = gl.createShader(tipo);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if(!gl.getShaderParameter(sh, gl.COMPILE_STATUS)){
      throw new Error(gl.getShaderInfoLog(sh));
    }
    return sh;
  }

  function crearPrograma(gl, vsSrc, fsSrc){
    const p = gl.createProgram();
    gl.attachShader(p, compilar(gl, gl.VERTEX_SHADER, vsSrc));
    gl.attachShader(p, compilar(gl, gl.FRAGMENT_SHADER, fsSrc));
    gl.linkProgram(p);
    if(!gl.getProgramParameter(p, gl.LINK_STATUS)){
      throw new Error(gl.getProgramInfoLog(p));
    }
    return p;
  }

  function inicializar(canvas){
    const gl = crearContexto(canvas);

    // Quad pantalla completa
    const verts = new Float32Array([
      -1,-1,  1,-1,  -1, 1,
       1,-1,  1, 1,  -1, 1
    ]);
    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const prog = crearPrograma(gl, VS_SRC, FS_SRC);
    gl.useProgram(prog);

    const aPos = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = {
      horizontal:  gl.getUniformLocation(prog,'uHorizontal'),
      numCortes:   gl.getUniformLocation(prog,'uNumCortes'),
      cortes:      gl.getUniformLocation(prog,'uCortes'),
      colores:     gl.getUniformLocation(prog,'uColores'),
      usarCirculo: gl.getUniformLocation(prog,'uUsarCirculo'),
      centro:      gl.getUniformLocation(prog,'uCentro'),
      radio:       gl.getUniformLocation(prog,'uRadio'),
      colorCirc:   gl.getUniformLocation(prog,'uColorCirculo')
    };

    function aplicarRatio(ratio){
      const [alto, ancho] = ratio;
      const maxW = Math.min(1000, window.innerWidth * 0.96);
      const maxH = Math.min(800 , window.innerHeight * 0.80);
      let w = maxW, h = w * (alto/ancho);
      if(h > maxH){ h = maxH; w = h * (ancho/alto); }
      canvas.width = Math.round(w);
      canvas.height= Math.round(h);
      gl.viewport(0,0,canvas.width,canvas.height);
    }

    function render(preset){
      if(!preset || !preset.ratio || !preset.colors) return;

      aplicarRatio(preset.ratio);

      const horizontal = (preset.orientation === 'horizontal') ? 1 : 0;
      gl.uniform1i(u.horizontal, horizontal);

      const cortes = (preset.cuts || []).map(clamp01).slice(0,7);
      const arr7 = new Float32Array(7);
      cortes.forEach((c,i)=>arr7[i]=c);
      gl.uniform1i(u.numCortes, cortes.length);
      gl.uniform1fv(u.cortes, arr7);

      const franjas = Math.min(8, cortes.length + 1);
      const col8 = new Float32Array(3*8);
      for(let i=0; i<franjas; i++){
        const c = preset.colors[i] || [0,0,0];
        col8[i*3+0]=c[0]; col8[i*3+1]=c[1]; col8[i*3+2]=c[2];
      }
      gl.uniform3fv(u.colores, col8);

      if(preset.circle){
        gl.uniform1i(u.usarCirculo, 1);
        gl.uniform2fv(u.centro, new Float32Array(preset.circle.center));
        gl.uniform1f(u.radio, preset.circle.radius);
        gl.uniform3fv(u.colorCirc, new Float32Array(preset.circle.color));
      } else {
        gl.uniform1i(u.usarCirculo, 0);
      }

      gl.clearColor(0,0,0,1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    return { gl, render, aplicarRatio };
  }

  // Exponer un namespace simple
  global.FlagGL = { inicializar };

})(window);
