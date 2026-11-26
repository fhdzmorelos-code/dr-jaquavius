// Dr. Jaquavius: juego de estudio con preguntas de opción múltiple.
// La escena de cavar, el cielo según la hora y el fondo salen de Corgillion (copiados, no enlazados).
(function () {
  "use strict";

  var Corgi = window.Corgi, QB = window.QB, SUBJECTS = window.SUBJECTS;
  var app = document.getElementById("app");

  // dificultad 1 a 3 -> nivel de hallazgo (el dibujo es el mismo de Corgillion: tierrita, piedrita, hueso)
  // dificultad 1 a 3 -> etiqueta y hallazgo (dibujos de Corgillion: 1 piedrita, 2 fósil/hueso, 5 hueso dorado)
  var DIFF = { 1: { n: "Easy", t: 1 }, 2: { n: "Normal", t: 2 }, 3: { n: "Hard", t: 5 } };
  var ITEMNAME = { 1: "Pebble", 2: "Fossil", 5: "Golden bone" };
  var PTS = 20; // todos los aciertos valen lo mismo
  var TINTS = ["#ffffff", "#eaf1ff", "#fff3dc", "#e9f9ef", "#f4eaff"];
  var PX = 4, GROUND = 230, PXM = 0.26, DOG = 72, RUN = 10, MIX = 15;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- guardado ----------
  var KEY = "ibprof.v1";
  var save = { sound: true, q: {}, wrong: {}, sec: {} };
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || "{}");
    Object.keys(saved).forEach(function (k) { save[k] = saved[k]; });
  } catch (e) { /* sin guardado */ }
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) { /* sin guardado */ } }
  SFX.setOn(save.sound !== false);

  // ---------- utilidades ----------
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function seeded(str) {
    var h = 1779033703 ^ str.length;
    for (var i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    var a = h >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i];
      a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function meters(pts) { return Math.round(pts * 10).toLocaleString("en-US") + " m"; }
  function chip(t) {
    return '<span class="chip t-' + t + '">' + Corgi.item(t, 18) + ITEMNAME[t] + "</span>";
  }
  function show(html) {
    document.body.classList.remove("jugando");
    app.innerHTML = html;
    app.classList.remove("enter"); void app.offsetWidth; app.classList.add("enter");
    window.scrollTo(0, 0);
  }
  function dsec(s) { return String(s).replace(/^X/, ""); }
  function subjectById(id) { return SUBJECTS.filter(function (s) { return s.id === id; })[0] || SUBJECTS[0]; }
  function secName(subj, sec) {
    var out = "";
    subj.units.forEach(function (u) { u.secs.forEach(function (s) { if (s[0] === sec) out = s[1]; }); });
    return out;
  }

  // ---------- qué preguntas hay y cómo vas ----------
  function secIds(sec) { return QB.sec(sec).map(function (q) { return q.id; }); }
  function unitIds(u) {
    var out = [];
    u.secs.forEach(function (s) { out = out.concat(secIds(s[0])); });
    return out;
  }
  function allIds(subj) {
    var out = [];
    subj.units.forEach(function (u) { out = out.concat(unitIds(u)); });
    return out;
  }
  function wrongIds(subj) {
    var mine = {};
    allIds(subj).forEach(function (id) { mine[id] = 1; });
    return Object.keys(save.wrong).filter(function (id) { return mine[id]; });
  }
  function secStats(sec) {
    var st = save.sec[sec] || { a: 0, c: 0 }, qs = QB.sec(sec);
    var mastered = qs.filter(function (q) { return ((save.q[q.id] || {}).st || 0) >= 2; }).length;
    return { n: qs.length, acc: st.a ? Math.round(st.c / st.a * 100) : null, mastery: qs.length ? Math.round(mastered / qs.length * 100) : 0 };
  }
  function totals(subj) {
    var ids = allIds(subj), seen = 0, a = 0, c = 0, mastered = 0;
    ids.forEach(function (id) {
      var s = save.q[id];
      if (s && s.s) { seen++; a += s.s; c += s.c; }
      if (s && s.st >= 2) mastered++;
    });
    return { n: ids.length, seen: seen, acc: a ? Math.round(c / a * 100) : null, mastered: mastered };
  }

  // Las preguntas que menos has visto van primero; las falladas pesan un poco más; el resto, al azar.
  function pick(ids, n) {
    var scored = ids.map(function (id) {
      var s = save.q[id] || {};
      return { id: id, k: (s.s || 0) * 10 - (id in save.wrong ? 5 : 0) + Math.random() * 8 };
    });
    scored.sort(function (a, b) { return a.k - b.k; });
    return shuffle(scored.slice(0, n).map(function (x) { return x.id; }));
  }

  // Baraja las 4 opciones. La correcta cae en un lugar al azar, nunca más de 2 veces seguidas en el mismo.
  function layout(q, hist) {
    var pos = Math.floor(Math.random() * 4), n = hist.length;
    while (n >= 2 && hist[n - 1] === hist[n - 2] && pos === hist[n - 1]) pos = Math.floor(Math.random() * 4);
    var others = shuffle(q.o.filter(function (_, i) { return i !== q.a; }));
    var opts = [], k = 0;
    for (var i = 0; i < 4; i++) opts.push(i === pos ? q.o[q.a] : others[k++]);
    return { opts: opts, pos: pos };
  }

  // ---------- estado ----------
  var G = null, vista = null, lastRun = null, shown = null;

  // ---------- subsuelo dibujado (pantalla completa) ----------
  var LAYERS = [
    { from: 0, c: ["#4b4f8a", "#555a98", "#3e4278"] },
    { from: 1000, c: ["#3f4377", "#4a4f89", "#333667"] },
    { from: 2500, c: ["#6b6f7a", "#7a7e89", "#5b5f69"] },
    { from: 4000, c: ["#4a3f66", "#574a77", "#3d3356"] },
    { from: 5500, c: ["#7a2a22", "#8e352b", "#64201a"] },
    { from: 7000, c: ["#2a2433", "#352e40", "#201b28"] },
    { from: 10000, c: ["#1f4a4a", "#285858", "#173a3a"] },
    { from: 14000, c: ["#b5541c", "#cf6a26", "#8f3f12"] }
  ];
  var rgbMemo = {};
  function rgb(h) {
    return rgbMemo[h] || (rgbMemo[h] = [parseInt(h.substr(1, 2), 16), parseInt(h.substr(3, 2), 16), parseInt(h.substr(5, 2), 16)]);
  }

  // ---------- Cielo y colores según la hora en que se juega ----------
  // cielo: franjas de arriba hacia abajo; tinte: color y fuerza con que se tiñen colinas, árboles y pasto.
  var HORAS = {
    amanecer: { cielo: ["#3d4f9e", "#6b6fb5", "#a585b8", "#dc9ea2", "#f4b58e", "#ffcf98", "#ffe4b8"], astro: "sol",
      sol: ["#ff9f4a", "#ffd27a"], nube: ["#ffe4dc", "#f5c6bd", "#e4aaa8"], tinte: ["#ff9a5c", 0.14], estrellas: 0 },
    dia: { cielo: ["#2a7ee8", "#3a90f3", "#4ba1fa", "#5fb2ff", "#76c2ff", "#91d1ff", "#afdfff"], astro: "sol",
      sol: ["#ffe066", "#fff6b0"], nube: ["#ffffff", "#d7ecff", "#bcdcf7"], tinte: null, estrellas: 0 },
    atardecer: { cielo: ["#2c2f7a", "#55408f", "#8f4f93", "#cc5f7c", "#ec855e", "#ffaa5c", "#ffcd7a"], astro: "sol",
      sol: ["#ff6a2a", "#ffb25e"], nube: ["#ffc9a8", "#f0a28a", "#d8817a"], tinte: ["#ff7a3d", 0.2], estrellas: 0 },
    noche: { cielo: ["#070b24", "#0b1335", "#101b45", "#152455", "#1b2d66", "#223878", "#2a4388"], astro: "luna",
      sol: ["#f4f1d0", "#fffbe8"], nube: ["#3b4876", "#323e68", "#29335a"], tinte: ["#0b1335", 0.5], estrellas: 1 }
  };
  // ?hora=noche (o amanecer, dia, atardecer) en la dirección fuerza un momento, para probarlo
  var horaFija = (location.search.match(/[?&]hora=(amanecer|dia|atardecer|noche)/) || [])[1];
  function momento() {
    if (horaFija) return horaFija;
    var h = new Date().getHours();
    return h >= 6 && h < 8 ? "amanecer" : h >= 8 && h < 18 ? "dia" : h >= 18 && h < 20 ? "atardecer" : "noche";
  }
  var HORA = HORAS[momento()], tonoMemo = {};
  function aplicarHora() {
    var m = momento();
    HORA = HORAS[m]; tonoMemo = {};
    document.documentElement.setAttribute("data-hora", m);
    return m;
  }
  // tiñe un color de la superficie (colinas, árboles, pasto) con la luz del momento
  function tono(col) {
    if (!HORA.tinte) return col;
    if (tonoMemo[col]) return tonoMemo[col];
    var a = rgb(col), b = rgb(HORA.tinte[0]), k = HORA.tinte[1], out = "#";
    for (var i = 0; i < 3; i++) { var v = Math.round(a[i] + (b[i] - a[i]) * k); out += (v < 16 ? "0" : "") + v.toString(16); }
    return (tonoMemo[col] = out);
  }
  // sol (con rayos de día) o media luna; x, y es su centro aproximado
  function dibujaAstro(px, x, y) {
    var c = HORA.sol;
    if (HORA.astro === "luna") {
      px(x - 3, y - 1, c[0], 6, 8); px(x - 4, y, c[0], 8, 6); px(x - 2, y + 1, "#d9d4b0", 2, 2); px(x + 1, y + 4, "#d9d4b0", 2, 1);
      px(x, y - 1, HORA.cielo[1], 4, 3); px(x + 1, y + 2, HORA.cielo[1], 3, 2);
      return;
    }
    px(x - 3, y - 1, c[0], 6, 8); px(x - 4, y, c[0], 8, 6); px(x - 2, y, c[1], 3, 2);
    if (HORA === HORAS.dia) {
      [[-7, 2, 2, 1], [5, 2, 2, 1], [0, -4, 1, 2], [0, 8, 1, 2], [-6, -3, 1, 1], [5, -3, 1, 1], [-6, 7, 1, 1], [5, 7, 1, 1]]
        .forEach(function (a) { px(x + a[0], y + a[1], "#ffd23f", a[2], a[3]); });
    }
  }
  function dibujaEstrellas(px, r, W, alto) {
    if (!HORA.estrellas) return;
    for (var i = 0, n = Math.floor(W * alto / 40); i < n; i++) {
      var x = Math.floor(r() * W), y = Math.floor(r() * alto);
      px(x, y, r() < 0.7 ? "#ffffff" : "#c9d6ff");
      if (r() < 0.08) { px(x - 1, y, "#8fa3e0"); px(x + 1, y, "#8fa3e0"); px(x, y - 1, "#8fa3e0"); px(x, y + 1, "#8fa3e0"); }
    }
  }
  // dónde va el sol o la luna: al amanecer sale por la izquierda y al atardecer se pone por la derecha
  function lugarAstro(W, alto, yDia) {
    var m = momento();
    return m === "amanecer" ? [18, alto - 9] : m === "atardecer" ? [W - 26, alto - 9] : [W - 30, yDia];
  }

  function paintWorld() {
    var cv = $("strata");
    if (!cv) return;
    var W = Math.ceil(Math.max(window.innerWidth, 1040) / PX) + 2;
    var H = Math.ceil((GROUND + worldDepth() * PXM + 700) / PX);
    var G0 = GROUND / PX, r = seeded("estratos-corgi"), x, y, i, n;
    cv.width = W; cv.height = H;
    cv.style.width = W * PX + "px"; cv.style.height = H * PX + "px"; cv.style.marginLeft = -(W * PX / 2) + "px";
    $("world").style.height = H * PX + "px";
    var c = cv.getContext("2d"), img = c.createImageData(W, H), d = img.data;
    function px(a, b, col, w, h) {
      var k = rgb(col);
      for (var yy = b; yy < b + (h || 1); yy++) {
        for (var xx = a; xx < a + (w || 1); xx++) {
          if (xx < 0 || yy < 0 || xx >= W || yy >= H) continue;
          var o = (yy * W + xx) * 4;
          d[o] = k[0]; d[o + 1] = k[1]; d[o + 2] = k[2]; d[o + 3] = 255;
        }
      }
    }
    var sky = HORA.cielo, nb = HORA.nube;
    for (y = 0; y < G0; y++) px(0, y, sky[Math.min(sky.length - 1, Math.floor(y / (G0 / sky.length)))], W, 1);
    dibujaEstrellas(px, seeded("estrellas-juego"), W, G0 - 14);
    var ast = lugarAstro(W - 30, G0, 38); dibujaAstro(px, ast[0], ast[1]);
    for (i = 0; i < Math.ceil(W / 40); i++) {
      x = Math.floor(r() * W); y = 30 + Math.floor(r() * 30); n = 8 + Math.floor(r() * 10);
      if (HORA.estrellas && i % 3) continue;   // de noche, menos nubes
      px(x, y, nb[0], n, 2); px(x + 2, y - 1, nb[0], n - 5, 1); px(x + 1, y + 2, nb[1], n - 3, 1);
    }
    // colinas y arbolitos en el horizonte
    for (x = 0; x < W; x++) {
      var hh1 = Math.round(5 + Math.sin(x * 0.045) * 3 + Math.sin(x * 0.11 + 1) * 1.5);
      px(x, G0 - hh1 - 3, tono("#8fd07c"), 1, hh1 + 3);
      var hh2 = Math.round(2 + Math.sin(x * 0.08 + 2) * 2 + Math.sin(x * 0.19) * 1);
      if (hh2 > 0) px(x, G0 - hh2, tono("#6cbf58"), 1, hh2);
    }
    for (i = 0; i < Math.ceil(W / 60); i++) {
      x = 4 + Math.floor(r() * (W - 8)); y = G0 - 8 - Math.floor(r() * 3);
      px(x + 1, y + 3, tono("#6b4425"), 1, 3); px(x, y, tono("#3f8f3f"), 3, 3); px(x + 1, y - 1, tono("#3f8f3f")); px(x, y, tono("#5fae4d"));
    }
    var wob = [];
    for (x = 0; x < W; x++) wob[x] = Math.round(Math.sin(x * 0.21) * 2 + Math.sin(x * 0.07) * 2 + (r() - 0.5) * 1.5);
    function layerAt(a, b) {
      var m = ((b + wob[a]) * PX - GROUND) / PXM;
      for (var k = LAYERS.length - 1; k > 0; k--) if (m >= LAYERS[k].from) return k;
      return 0;
    }
    for (x = 0; x < W; x++) {
      var prev = -1;
      for (y = G0; y < H; y++) {
        var k = layerAt(x, y), cols = LAYERS[k].c, q = r();
        px(x, y, k !== prev && prev >= 0 ? cols[2] : q < 0.68 ? cols[0] : q < 0.84 ? cols[1] : cols[2]);
        if (k !== prev && prev >= 0) px(x, y - 1, LAYERS[prev].c[2]);
        prev = k;
      }
    }
    // vetas de sedimento para que la tierra no se vea plana
    for (i = 0, n = Math.floor(W * (H - G0) / 45); i < n; i++) {
      x = Math.floor(r() * W); y = G0 + 4 + Math.floor(r() * (H - G0 - 6));
      var kv = layerAt(x, y), lv = 3 + Math.floor(r() * 7), cv2 = r() < 0.6 ? LAYERS[kv].c[2] : LAYERS[kv].c[1];
      for (var m2 = 0; m2 < lv; m2++) if (layerAt(x + m2, y) === kv) px(x + m2, y, cv2);
    }
    // raíces bajo el pasto
    for (i = 0; i < W / 5; i++) {
      x = Math.floor(r() * W); n = 3 + Math.floor(r() * 9);
      for (y = 0; y < n; y++) { px(x, G0 + 3 + y, "#2f3263"); if (r() < 0.4) x += r() < 0.5 ? -1 : 1; }
    }
    // detalles enterrados según la capa
    var deco = [
      function (a, b) { px(a, b, "#d2a877", 2, 1); px(a, b + 1, "#7c4a27", 2, 1); },
      function (a, b) {
        if (r() < 0.6) { px(a, b, "#9aa3ad", 3, 2); px(a, b, "#c9d1d8", 2, 1); px(a + 1, b + 2, "#5b3a22", 2, 1); }
        else { px(a, b, "#f1e7d0", 4, 1); px(a - 1, b - 1, "#f1e7d0"); px(a - 1, b + 1, "#f1e7d0"); px(a + 4, b - 1, "#f1e7d0"); px(a + 4, b + 1, "#f1e7d0"); }
      },
      function (a, b) {
        var t = r();
        if (t < 0.4) { for (var m = 0; m < 4; m++) px(a + m, b + (m % 2 ? m - 1 : m), "#3f434c"); }
        else if (t < 0.75) { px(a, b, "#f6c12d", 2, 2); px(a, b, "#fff1a8"); px(a + 2, b + 1, "#b98510"); }
        else { px(a, b, "#d9e2ea", 2, 1); px(a + 1, b + 1, "#aab4bf", 2, 1); }
      },
      function (a, b) {
        var col = r() < 0.5 ? ["#7fe3ff", "#d6f7ff", "#3ba6c9"] : ["#f28fd0", "#ffd9f1", "#b34f93"];
        px(a + 1, b, col[0]); px(a, b + 1, col[0], 3, 1); px(a + 1, b + 2, col[2]); px(a + 1, b + 1, col[1]);
      },
      function (a, b) {
        if (r() < 0.6) { px(a, b, "#ff8a2a", 4, 1); px(a + 1, b + 1, "#ff8a2a", 3, 1); px(a + 1, b, "#ffe066", 2, 1); }
        else px(a, b, "#3a100c", 2, 1);
      },
      function (a, b) { px(a, b, "#6f5aa8", 1, 3); px(a + 1, b + 1, "#a892e6"); px(a - 1, b + 2, "#17121d", 3, 1); },
      function (a, b) {
        if (r() < 0.5) { px(a, b, "#bfeee0", 3, 1); px(a, b + 1, "#bfeee0"); px(a + 2, b + 1, "#bfeee0"); px(a, b + 2, "#bfeee0", 3, 1); px(a + 1, b + 1, "#0f2a2a"); }
        else { px(a, b, "#7fd8bd", 5, 1); px(a + 1, b - 1, "#7fd8bd"); px(a + 3, b + 1, "#7fd8bd"); }
      },
      function (a, b) { px(a, b, "#ffe066", 3, 2); px(a + 1, b, "#fffbe0"); px(a - 1, b + 2, "#ff8a2a", 4, 1); }
    ];
    for (i = 0, n = Math.floor(W * H / 240); i < n; i++) {
      x = 2 + Math.floor(r() * (W - 8)); y = G0 + 5 + Math.floor(r() * (H - G0 - 10));
      var kk = layerAt(x, y);
      if (layerAt(x + 4, y + 3) === kk && layerAt(x, y - 2) === kk) deco[kk](x, y);
    }
    // pasto y flores
    for (x = 0; x < W; x++) {
      px(x, G0, tono(r() < 0.5 ? "#3bb5ae" : "#2fa3a0")); px(x, G0 + 1, tono("#27908f")); px(x, G0 + 2, r() < 0.6 ? tono("#1f7f86") : "#2f3263");
      if (r() < 0.25) px(x, G0 - 1, tono("#3bb5ae"));
      if (r() < 0.04) { px(x, G0 - 2, tono(["#ffffff", "#ffcf3f", "#f28fb8"][Math.floor(r() * 3)])); px(x, G0 - 1, tono("#1f7f86")); }
    }
    c.putImageData(img, 0, 0);

    var ticks = "";
    for (i = 1; i <= Math.floor(worldDepth() / 1000); i++) {
      ticks += '<span class="tick" style="top:' + (GROUND + i * 1000 * PXM) + 'px">' + i + " km</span>";
    }
    $("ticks").innerHTML = ticks;
  }

  function burst(tier) {
    if (reduce) return;
    var shaft = $("world"), dg = $("digger");
    if (!shaft || !dg) return;
    var cols = [["#9a6237", "#7c4a27", "#b98152"], ["#9a6237", "#9aa3ad", "#7c4a27"], ["#9a6237", "#fff6e6", "#7c4a27"],
      ["#59c2a4", "#9a6237", "#a5ecd6"], ["#c58bea", "#f6c12d", "#9a6237"], ["#ffcf3f", "#fff7c2", "#f6c12d"]][tier];
    var cx = dg.offsetLeft + DOG / 2, cy = dg.offsetTop + DOG * 0.55, n = 14 + tier * 4;
    for (var i = 0; i < n; i++) {
      var s = document.createElement("i"), side = i % 2 ? 1 : -1;
      s.className = "clod";
      s.style.left = cx + "px"; s.style.top = cy + "px";
      s.style.background = cols[i % cols.length];
      s.style.setProperty("--dx", (side * (24 + Math.random() * 70)) + "px");
      s.style.setProperty("--dy", (-20 - Math.random() * 90) + "px");
      s.style.animationDelay = (Math.random() * 520) + "ms";
      shaft.appendChild(s);
      (function (el) { setTimeout(function () { el.remove(); }, 1500); })(s);
    }
  }

  function worldDepth() { return 7000; }
  function depthPx(pts) { return Math.min(pts * 10, worldDepth()) * PXM; }
  function yFor(pts) { return GROUND - 58 + depthPx(pts); }

  function relic(tier, pts, i) {
    var el = document.createElement("div");
    el.className = "relic" + (i % 2 ? " right" : "");
    el.style.top = (yFor(pts) + DOG - 26) + "px";
    el.innerHTML = Corgi.item(tier, 24);
    $("relics").appendChild(el);
  }

  function drawShaft() {
    var y = yFor(G.score);
    $("tunnel").style.height = (y + DOG - GROUND) + "px";
    $("digger").style.top = y + "px";
    $("world").style.transform = "translateY(" + (-depthPx(G.score)) + "px)";
  }

  function drawDepth(pts) {
    var a = $("dnum");
    if (!a) return;
    a.textContent = meters(pts); $("dpts").textContent = Math.round(pts) + " pts";
  }
  function countDepth(from, to, ms) {
    if (reduce || from === to) return drawDepth(to);
    var t0 = performance.now(), g = G;
    (function step(now) {
      if (G !== g) return;
      var k = Math.min(1, (now - t0) / ms), e = 1 - Math.pow(1 - k, 3);
      drawDepth(from + (to - from) * e);
      if (k < 1) requestAnimationFrame(step); else drawDepth(to);
    })(t0);
    setTimeout(function () { if (G === g) drawDepth(to); }, ms + 80);
  }

  // ---------- inicio ----------
  var QUOTES = [
    "Ready to dig into the syllabus?",
    "Every question is a bone. Let's find them.",
    "Read the explanations: that's where the marks are.",
    "Small steps. Deep holes."
  ];

  function home() {
    G = null; vista = home;
    var subj = SUBJECTS.map(function (s) {
      var w = wrongIds(s).length, t = totals(s);
      return '<section class="panel catbox" style="--c:' + s.color + '"><div class="cat-head"><h2>' + Corgi.icon(s.icon, 28) + "<span>" + esc(s.name) +
        "</span></h2><p>" + esc(s.desc) + '</p></div><div class="modegrid">' +
        '<button class="mode" data-go="subject" data-id="' + s.id + '">'+Corgi.icon("casa",32)+'<span class="mode-t"><span class="mode-n">Open subject</span><span class="mode-d">Pick a topic and practise it.</span></span><span class="mode-x">' + t.n + " questions</span></button>" +
        '<button class="mode" data-run="all" data-id="' + s.id + '">'+Corgi.icon("planeta",32)+'<span class="mode-t"><span class="mode-n">All topics</span><span class="mode-d">' + MIX + ' random questions from everything.</span></span><span class="mode-x">Mixed</span></button>' +
        '<button class="mode"' + (w ? "" : " disabled") + ' data-run="review" data-id="' + s.id + '">'+Corgi.icon("equis",32)+'<span class="mode-t"><span class="mode-n">Review mistakes</span><span class="mode-d">Only what you got wrong, until you get it twice in a row.</span></span><span class="mode-x">' + w + " to review</span></button>" +
        "</section>";
    }).join("");
    var t0 = totals(SUBJECTS[0]);
    show(
      '<header class="logo"><h1>' + Corgi.item(2, 44, "logo-deco") + "<span>DR. JAQUAVIUS</span>" + Corgi.item(5, 44, "logo-deco flip") + "</h1><p>Study smarter. Dig deeper.</p></header>" +
      '<main class="home"><div class="col side">' +
      '<section class="panel kennel"><h2>Your professor</h2><div class="bubble">' + QUOTES[Math.floor(Math.random() * QUOTES.length)] + "</div>" +
      '<div class="stage">' + Corgi.svg(0, 192, "idle") + '<div class="mound"></div></div>' +
      '</section>' +
      '<section class="panel how"><h2>Your progress</h2><table>' +
      "<tr><td>Questions seen</td><td>" + t0.seen + " / " + t0.n + "</td></tr>" +
      "<tr><td>Accuracy</td><td>" + (t0.acc === null ? "—" : t0.acc + "%") + "</td></tr>" +
      "<tr><td>Mastered</td><td>" + t0.mastered + "</td></tr>" +
      "</table><p class=\"recs-note\">Mastered = answered correctly the last 2 times.</p></section>" +
      '</div><div class="col">' + subj + "</div></main>"
    );
  }

  // ---------- materia ----------
  function subject(id) {
    var s = subjectById(id);
    vista = function () { subject(id); };
    var w = wrongIds(s).length, t = totals(s);
    var units = s.units.map(function (u) {
      var rows = u.secs.map(function (sc) {
        var st = secStats(sc[0]);
        return '<div class="secrow"><span class="sec-id">' + dsec(sc[0]) + '</span><span class="sec-n">' + esc(sc[1]) + "</span>" +
          '<span class="sec-q">' + (st.n ? st.n + " Questions" : "soon") + "</span>" +
          '<div class="meter" title="Mastery ' + st.mastery + '%"><i style="width:' + st.mastery + '%"></i></div>' +
          '<span class="sec-acc">' + (st.acc === null ? "—" : st.acc + "%") + "</span>" +
          '<button class="btn small"' + (st.n ? "" : " disabled") + ' data-run="sec" data-id="' + s.id + '" data-sec="' + sc[0] + '">Practice</button></div>';
      }).join("");
      var n = unitIds(u).length;
      return '<section class="panel unit"><div class="unit-h"><h2>' + esc(u.name) + '</h2><button class="btn small alt"' + (n ? "" : " disabled") +
        ' data-run="unit" data-id="' + s.id + '" data-unit="' + u.id + '">Unit mix (' + Math.min(MIX, n) + ')</button></div>' +
        '<div class="sec-head"><span></span><span></span><span></span><span>Mastery</span><span>Accuracy</span><span></span></div>' + rows + "</section>";
    }).join("");
    show(
      '<header class="bar"><button class="btn ghost" data-go="home">Home</button>' +
      '<h1 style="--c:' + s.color + '">' + Corgi.icon(s.icon, 22) + esc(s.name) + "</h1><span></span></header>" +
      '<main class="subj"><section class="panel quick"><div class="acts">' +
      '<button class="btn" data-run="all" data-id="' + s.id + '">All topics (' + Math.min(MIX, t.n) + ')</button>' +
      '<button class="btn alt"' + (w ? "" : " disabled") + ' data-run="review" data-id="' + s.id + '">Review mistakes (' + w + ")</button></div>" +
      "<p>" + t.n + " questions in the bank. Practice picks " + RUN + " at a time, starting with the ones you've seen least.</p></section>" +
      units + "</main>"
    );
  }

  // ---------- partida ----------
  function run(kind, d) {
    var s = subjectById(d.id), ids, label;
    if (kind === "sec") { ids = pick(secIds(d.sec), RUN); label = dsec(d.sec) + " " + secName(s, d.sec); }
    else if (kind === "unit") {
      var u = s.units.filter(function (x) { return x.id === d.unit; })[0];
      ids = pick(unitIds(u), MIX); label = u.name;
    }
    else if (kind === "all") { ids = pick(allIds(s), MIX); label = "All topics"; }
    else { ids = pick(wrongIds(s), RUN); label = "Review mistakes"; }
    if (!ids.length) return;
    lastRun = { kind: kind, d: { id: d.id, sec: d.sec, unit: d.unit } };
    G = { kind: kind, arg: d.sec || d.unit || "", subj: s.id, label: label, deck: ids, idx: 0, results: [], score: 0, hist: [], phase: "ask", cur: null };
    renderGame();
  }

  function cumul(n) {
    var s = 0;
    for (var i = 0; i < n; i++) s += G.results[i].pts;
    return s;
  }

  function renderGame() {
    var s = subjectById(G.subj);
    show(
      '<div class="scene" id="scene"><div class="world" id="world"><canvas id="strata"></canvas>' +
      '<div id="ticks"></div><div class="tunnel" id="tunnel"></div><div id="relics"></div>' +
      '<div class="digger" id="digger">' + Corgi.svg(0, DOG) + '</div><div class="found" id="found"></div></div></div>' +
      '<header class="hud"><div class="hud-izq"><button class="btn ghost" data-go="quit">Quit</button>' +
      '<button class="btn ghost small" data-go="sound" data-snd="1"></button></div>' +
      '<div class="trailbox"><div class="hud-title" style="--c:' + s.color + '">' + Corgi.icon(s.icon, 16) + esc(G.label) +
      '</div><div class="trail' + (G.deck.length > 10 ? " many" : "") + '" id="trail"></div></div>' +
      '<div class="depth"><b id="dnum">0 m</b><span id="dpts">0 pts</span></div></header>' +
      '<section class="ask"><div class="timer"><div class="timer-fill" id="tfill"></div><span class="timer-txt" id="ttxt"></span></div>' +
      '<div class="q" id="q"></div><div id="zone"><div class="opts" id="opts"></div><div id="after"></div></div></section>'
    );
    document.body.classList.add("jugando");
    paintSound();
    paintWorld();
    drawShaft(); drawDepth(0); ask();
  }

  function dot(r, i) {
    var cls = r ? (r.ok ? "t-" + r.tier : "t-x") : (i === G.idx && G.phase === "ask" ? "now" : "");
    return '<i class="dot' + (r ? " done " : " ") + cls + '">' + (r ? (r.ok ? "✓" : "✗") : "") + "</i>";
  }
  function drawTrail() {
    var el = $("trail"), h = "", i;
    if (!el) return;
    for (i = 0; i < G.deck.length; i++) h += dot(G.results[i], i);
    el.innerHTML = h;
    var fill = $("tfill");
    if (fill) {
      fill.style.transform = "scaleX(" + (G.results.length + (G.phase === "ask" ? 0 : 0)) / G.deck.length + ")";
      $("ttxt").textContent = "Question " + Math.min(G.idx + 1, G.deck.length) + " / " + G.deck.length;
    }
  }

  function ask() {
    var q = QB.get(G.deck[G.idx]);
    G.phase = "ask";
    G.cur = layout(q, G.hist); G.hist.push(G.cur.pos);
    drawTrail();
    var qe = $("q");
    qe.innerHTML = '<span class="diff d' + q.d + '">' + DIFF[q.d].n + "</span>" + esc(q.q);
    qe.classList.remove("in"); void qe.offsetWidth; qe.classList.add("in");
    var tints = shuffle(TINTS.slice()); // el color de fondo de cada opción cambia al azar en cada pregunta
    $("opts").innerHTML = G.cur.opts.map(function (t, i) {
      return '<button class="opt" type="button" style="--ob:' + tints[i] + '" data-opt="' + i + '"><b>' + "ABCD".charAt(i) + "</b><span>" + esc(t) + "</span></button>";
    }).join("");
    $("after").innerHTML = "";
    $("digger").className = "digger";
    $("scene").className = "scene";
    $("found").className = "found";
  }

  function record(q, ok) {
    var s = save.q[q.id] || (save.q[q.id] = { s: 0, c: 0, st: 0 });
    s.s++;
    if (ok) { s.c++; s.st++; } else s.st = 0;
    var sc = save.sec[q.sec] || (save.sec[q.sec] = { a: 0, c: 0, best: 0 });
    sc.a++;
    if (ok) sc.c++;
    if (ok) {
      // una pregunta fallada sale del repaso al acertarla 2 veces seguidas
      if (q.id in save.wrong) { save.wrong[q.id]++; if (save.wrong[q.id] >= 2) delete save.wrong[q.id]; }
    } else save.wrong[q.id] = 0;
    persist();
  }

  function answer(i) {
    if (!G || G.phase !== "ask") return;
    var q = QB.get(G.deck[G.idx]), ok = i === G.cur.pos, g = G, tier = DIFF[q.d].t;
    var pts = ok ? PTS : 0, from = G.score;
    G.phase = "dig";
    G.score += pts;
    G.results.push({ id: q.id, ok: ok, pick: G.cur.opts[i], pts: pts, tier: tier });
    record(q, ok);
    var btns = document.querySelectorAll(".opt");
    Array.prototype.forEach.call(btns, function (b, k) {
      b.disabled = true;
      if (k === G.cur.pos) b.classList.add("good");
      else if (k === i) b.classList.add("bad");
      else b.classList.add("dim");
    });
    drawTrail();
    var dg = $("digger"), found = $("found");
    if (!ok) {
      dg.className = "digger sad";
      SFX.miss();
      return setTimeout(function () { if (G === g) reveal(q, ok, pts); }, reduce ? 0 : 450);
    }
    dg.className = "digger dig";
    $("scene").className = "scene rumble";
    burst(tier);
    SFX.dig();
    drawShaft();
    countDepth(from, G.score, 1000);
    setTimeout(function () {
      if (G !== g) return;
      $("scene").className = "scene";
      dg.className = "digger cheer";
      SFX.found(tier);
      found.style.top = (yFor(G.score) - 46) + "px";
      found.className = "found show t-" + tier;
      found.innerHTML = Corgi.item(tier, 60) + "<b>Correct!</b>";
      relic(tier, G.score, G.results.length - 1);
      reveal(q, ok, pts);
    }, reduce ? 0 : 1100);
  }

  function reveal(q, ok, pts) {
    G.phase = "reveal";
    var last = G.idx + 1 >= G.deck.length;
    var head = ok
      ? '<span class="mk ok">✓</span> Correct!'
      : '<span class="mk no">✗</span> Not quite. The correct answer is <u>' + "ABCD".charAt(G.cur.pos) + "</u>.";
    $("after").innerHTML =
      '<div class="why ' + (ok ? "t-" + DIFF[q.d].t : "t-x") + '"><div class="why-h">' + head + "</div>" +
      "<p>" + esc(q.why) + '</p><span class="src">' + (q.sec === "P1" ? "Paper 1 · FP case" : "Notes · section " + dsec(q.sec)) + "</span></div>" +
      '<div class="after-row"><span></span><button class="btn" id="next" data-go="next">' + (last ? "See results" : "Next") + "</button></div>";
    $("next").focus();
  }

  function next() {
    if (!G || G.phase !== "reveal") return;
    G.idx++;
    if (G.idx >= G.deck.length) return finish();
    ask();
  }

  function finish() {
    var g = G; G = null;
    if (g.kind === "sec") {
      var sc = save.sec[g.arg] || (save.sec[g.arg] = { a: 0, c: 0, best: 0 });
      if (g.score > (sc.best || 0)) sc.best = g.score;
      persist();
    }
    results({ kind: g.kind, subj: g.subj, label: g.label, results: g.results, score: g.score });
  }

  // ---------- resultado ----------
  function results(o) {
    shown = o; vista = null;
    var s = subjectById(o.subj), n = o.results.length;
    var right = o.results.filter(function (r) { return r.ok; }).length, pct = n ? Math.round(right / n * 100) : 0;
    var hits = right > 0;
    SFX.done(hits, pct === 100);
    var say = pct === 100 ? "Perfect! Not a single bone missed."
      : pct >= 80 ? "Great dig. The professor approves."
      : pct >= 50 ? "Solid, but let's review the misses."
      : "Keep digging. Read the explanations and try again.";
    var rows = o.results.map(function (r, i) {
      var q = QB.get(r.id);
      return '<tr style="--i:' + i + '"><td>' + esc(q.q) + (r.ok ? "" : '<div class="ans-ok">Correct answer: ' + esc(q.o[q.a]) + "</div>") +
        "</td><td>" + dsec(q.sec) + "</td><td>" + (r.ok ? '<span class="mk ok">✓</span>' : '<span class="mk no">✗</span>') + "</td></tr>";
    }).join("");
    var haul = o.results.filter(function (r) { return r.ok; }).map(function (r, i) {
      return '<span style="--i:' + i + '">' + Corgi.item(r.tier, 40) + "</span>";
    }).join("");
    var w = wrongIds(s).length;
    show(
      '<header class="bar"><button class="btn ghost" data-go="home">Home</button>' +
      '<h1 style="--c:' + s.color + '">' + Corgi.icon(s.icon, 22) + esc(o.label) + "</h1><span></span></header>" +
      '<main class="results"><section class="panel score"><div class="stage">' + Corgi.svg(0, 168, hits ? "happy" : "sadloop") + '<div class="mound"></div></div>' +
      '<div><div class="bubble">' + say + '</div><div class="big" id="big">' + right + " / " + n + '</div><div class="haul">' + haul + "</div>" +
      '<div class="sub">' + pct + "% correct</div>" +
      '<div class="acts"><button class="btn" data-go="again">Play again</button>' +
      '<button class="btn alt"' + (w ? "" : " disabled") + ' data-run="review" data-id="' + s.id + '">Review mistakes (' + w + ")</button>" +
      '<button class="btn ghost" data-go="subject" data-id="' + s.id + '">Back to subject</button></div></div></section>' +
      '<section class="panel"><h2>Your answers</h2><table class="rt"><tr><th>Question</th><th>Topic</th><th>Result</th></tr>' + rows + "</table></section></main>"
    );
  }

  // ---------- sonido ----------
  function paintSound() {
    var t = "Sound: " + (save.sound !== false ? "on" : "off");
    $("ajustes").textContent = t;
    Array.prototype.forEach.call(document.querySelectorAll("[data-snd]"), function (b) { b.textContent = t; });
  }

  // ---------- eventos ----------
  document.addEventListener("click", function (e) {
    var el = e.target.closest("button");
    if (!el || el.disabled) return;
    SFX.click();
    if (el.id === "ajustes" || el.dataset.go === "sound") {
      save.sound = save.sound === false;
      SFX.setOn(save.sound); persist(); paintSound();
      return;
    }
    if (el.dataset.opt !== undefined) return answer(+el.dataset.opt);
    if (el.dataset.run) return run(el.dataset.run, el.dataset);
    switch (el.dataset.go) {
      case "home": return home();
      case "subject": return subject(el.dataset.id);
      case "next": return next();
      case "quit": var sid = G ? G.subj : SUBJECTS[0].id; G = null; return subject(sid);
      case "again": return lastRun && run(lastRun.kind, lastRun.d);
    }
  });
  var lastBtn = null;
  app.addEventListener("mouseover", function (e) {
    var b = e.target.closest("button");
    if (b && b !== lastBtn && !b.disabled) SFX.hover();
    lastBtn = b;
  });
  // teclado: 1-4 o A-D para responder, Enter para seguir
  document.addEventListener("keydown", function (e) {
    if (!G || e.ctrlKey || e.metaKey || e.altKey) return;
    var k = e.key.toLowerCase();
    if (G.phase === "ask" && /^[1-4a-d]$/.test(k)) {
      answer(/\d/.test(k) ? +k - 1 : "abcd".indexOf(k));
    } else if (G.phase === "reveal" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault(); next();
    }
  });

  // ---------- Fondo de la página: cielo pintado y tierra con textura ----------
  function pixelCanvas(w, h) {
    var cv = document.createElement("canvas");
    cv.width = w; cv.height = h;
    var c = cv.getContext("2d");
    return { cv: cv, c: c, px: function (x, y, col, ww, hh) { c.fillStyle = col; c.fillRect(x * PX, y * PX, (ww || 1) * PX, (hh || 1) * PX); } };
  }
  var SKY_H = 152, GRASS_H = 24;
  function paintBackdrop() {
    var W = Math.ceil(Math.max(window.innerWidth, 1100) / PX), H = Math.ceil((SKY_H + GRASS_H) / PX), G = SKY_H / PX;
    var r = seeded("cielo-corgi"), x, y, i, n;
    var top = pixelCanvas(W * PX, H * PX), px = top.px;
    var bands = HORA.cielo, nb = HORA.nube;
    for (y = 0; y < G; y++) px(0, y, bands[Math.min(bands.length - 1, Math.floor(y / (G / bands.length)))], W, 1);
    dibujaEstrellas(px, seeded("estrellas-menu"), W, G - 10);
    // sol (o luna)
    var ast = lugarAstro(W, G, 9), sx = ast[0], sy = ast[1];
    dibujaAstro(px, sx, sy);
    // nubes
    function nube(a, b, w) {
      px(a + 2, b, nb[0], w - 4, 1); px(a + 1, b + 1, nb[0], w - 2, 1); px(a, b + 2, nb[0], w, 2);
      px(a + 3, b - 1, nb[0], Math.max(2, Math.floor(w / 3)), 1); px(a, b + 4, nb[1], w, 1); px(a + 1, b + 5, nb[2], w - 2, 1);
    }
    for (i = 0; i < Math.ceil(W / 45); i++) {
      x = Math.floor(r() * (W - 20)); y = 4 + Math.floor(r() * 16);
      if (Math.abs(x - sx) < 16 && Math.abs(y - sy) < 10) continue;
      if (HORA.estrellas && i % 3) continue;   // de noche, menos nubes
      nube(x, y, 10 + Math.floor(r() * 12));
    }
    // colinas lejanas y cercanas
    for (x = 0; x < W; x++) {
      var h1 = Math.round(5 + Math.sin(x * 0.045) * 3 + Math.sin(x * 0.11 + 1) * 1.5);
      px(x, G - h1 - 3, tono("#8fd07c"), 1, h1 + 3);
      var h2 = Math.round(2 + Math.sin(x * 0.08 + 2) * 2 + Math.sin(x * 0.19) * 1);
      if (h2 > 0) px(x, G - h2, tono("#3bb5ae"), 1, h2);
    }
    // árboles pequeños sobre las colinas
    for (i = 0; i < Math.ceil(W / 70); i++) {
      x = 4 + Math.floor(r() * (W - 8)); y = G - 7 - Math.floor(r() * 3);
      px(x + 1, y + 3, tono("#2f3263"), 1, 3); px(x, y, tono("#1f7f86"), 3, 3); px(x + 1, y - 1, tono("#1f7f86")); px(x, y, tono("#52c7bd"));
    }
    // pasto con matas y flores
    for (x = 0; x < W; x++) {
      px(x, G, tono(r() < 0.5 ? "#5fd6c8" : "#3bb5ae")); px(x, G + 1, tono("#2fa3a0")); px(x, G + 2, tono(r() < 0.5 ? "#27908f" : "#2fa3a0"));
      px(x, G + 3, tono("#1f7f86"), 1, 2); px(x, G + 5, r() < 0.55 ? tono("#1f7f86") : "#2f3263", 1, 1);
      if (r() < 0.3) px(x, G - 1, tono("#3bb5ae"));
      if (r() < 0.08) px(x, G - 2, tono("#5fd6c8"));
      if (r() < 0.035) { px(x, G - 2, tono(["#ffffff", "#ffcf3f", "#f28fb8", "#b48cff"][Math.floor(r() * 4)])); px(x, G - 1, tono("#1f7f86")); }
    }

    // tierra por capas, como en el juego: cuanto más bajas en la página, más honda y rara la roca.
    // Cada capa es una franja que se repite a lo ancho; la última se repite hasta el fondo.
    var T = 128, BH = 100, tr = seeded("tierra-corgi");
    var PALS = [
      ["#4b4f8a", "#555a98", "#40447a", "#6065a6"],
      ["#3f4377", "#4a4f89", "#333667", "#444880"],
      ["#6b6f7a", "#7a7e89", "#5b5f69", "#73777f"],
      ["#4a3f66", "#574a77", "#3d3356", "#514570"],
      ["#7a2a22", "#8e352b", "#64201a", "#83302a"],
      ["#2a2433", "#352e40", "#201b28", "#2f2939"]
    ];
    function band(k) {
      var c = pixelCanvas(T * PX, BH * PX), tp = c.px, pal = PALS[k], nx = PALS[k + 1];
      function wrap(a, b, col, w, h) {
        for (var yy = 0; yy < (h || 1); yy++) for (var xx = 0; xx < (w || 1); xx++) {
          var by = b + yy; if (by >= 0 && by < BH) tp((a + xx + T) % T, by, col);
        }
      }
      for (var yy = 0; yy < BH; yy += 2) for (var xx = 0; xx < T; xx += 2) {
        var q = tr();
        tp(xx, yy, pal[q < 0.55 ? 0 : q < 0.75 ? 1 : q < 0.92 ? 2 : 3], 2, 2);
        if (tr() < 0.25) tp(xx + (tr() < 0.5 ? 0 : 1), yy + (tr() < 0.5 ? 0 : 1), pal[Math.floor(tr() * 4)]);
      }
      [18, 52, 80].forEach(function (v0, vi) {
        for (var a = 0; a < T; a++) {
          var vy = v0 + Math.round(Math.sin(a * Math.PI * 2 / T + vi) * 2 + Math.sin(a * Math.PI * 4 / T + 1));
          wrap(a, vy, pal[2]); if (a % 3) wrap(a, vy + 1, pal[2]);
        }
      });
      var a, b2, m;
      function spots(n) { return Array.apply(null, Array(n)).map(function () { return [Math.floor(tr() * T), 3 + Math.floor(tr() * (BH - 12))]; }); }
      if (k <= 1) {
        spots(k ? 14 : 22).forEach(function (s2) {
          if (tr() < 0.5) wrap(s2[0], s2[1], k ? "#6e5440" : "#8a6a4f", 2, 1);
          else { wrap(s2[0], s2[1], "#7d838c", 3, 2); wrap(s2[0], s2[1], "#b9c1ca", 2, 1); }
        });
        spots(k ? 4 : 2).forEach(function (s2) {
          a = s2[0]; b2 = s2[1];
          wrap(a, b2, "#f1e7d0", 4, 1); wrap(a - 1, b2 - 1, "#f1e7d0"); wrap(a - 1, b2 + 1, "#f1e7d0"); wrap(a + 4, b2 - 1, "#f1e7d0"); wrap(a + 4, b2 + 1, "#f1e7d0");
        });
        if (!k) spots(3).forEach(function (s2) { for (m = 0; m < 5; m++) { wrap(s2[0], s2[1] + m, "#6b4425"); if (tr() < 0.4) s2[0] += tr() < 0.5 ? -1 : 1; } });
        if (k) spots(2).forEach(function (s2) { wrap(s2[0], s2[1], "#d9cbb0", 3, 1); wrap(s2[0], s2[1] + 1, "#d9cbb0"); wrap(s2[0] + 2, s2[1] + 1, "#d9cbb0"); wrap(s2[0], s2[1] + 2, "#d9cbb0", 3, 1); });
        spots(2).forEach(function (s2) { wrap(s2[0], s2[1], "#f6c12d", 2, 1); wrap(s2[0], s2[1], "#fff1a8"); });
      } else if (k === 2) {
        spots(10).forEach(function (s2) { for (m = 0; m < 4; m++) wrap(s2[0] + m, s2[1] + (m % 2), "#3f434c"); });
        spots(8).forEach(function (s2) { wrap(s2[0], s2[1], "#1f2126", 2, 2); wrap(s2[0] + 2, s2[1] + 1, "#1f2126"); });
        spots(5).forEach(function (s2) { wrap(s2[0], s2[1], "#d9e2ea", 2, 1); wrap(s2[0] + 1, s2[1] + 1, "#aab4bf", 2, 1); });
        spots(2).forEach(function (s2) { wrap(s2[0], s2[1], "#f6c12d", 2, 2); wrap(s2[0], s2[1], "#fff1a8"); });
      } else if (k === 3) {
        spots(9).forEach(function (s2) {
          var col = tr() < 0.5 ? ["#7fe3ff", "#d6f7ff", "#3ba6c9"] : ["#f28fd0", "#ffd9f1", "#b34f93"];
          wrap(s2[0] + 1, s2[1], col[0]); wrap(s2[0], s2[1] + 1, col[0], 3, 1); wrap(s2[0] + 1, s2[1] + 2, col[2]); wrap(s2[0] + 1, s2[1] + 1, col[1]);
        });
        spots(8).forEach(function (s2) { wrap(s2[0], s2[1], "#2f2847", 3, 1); });
      } else if (k === 4) {
        spots(10).forEach(function (s2) {
          if (tr() < 0.6) { wrap(s2[0], s2[1], "#ff8a2a", 4, 1); wrap(s2[0] + 1, s2[1] + 1, "#ff8a2a", 3, 1); wrap(s2[0] + 1, s2[1], "#ffe066", 2, 1); }
          else wrap(s2[0], s2[1], "#3a100c", 2, 1);
        });
      } else {
        spots(8).forEach(function (s2) { wrap(s2[0], s2[1], "#6f5aa8", 1, 3); wrap(s2[0] + 1, s2[1] + 1, "#a892e6"); wrap(s2[0] - 1, s2[1] + 2, "#17121d", 3, 1); });
        spots(6).forEach(function (s2) { wrap(s2[0], s2[1], "#ffe066", 1, 1); });
      }
      // borde ondulado hacia la capa siguiente
      if (nx) {
        for (a = 0; a < T; a++) {
          var e = BH - 6 + Math.round(Math.sin(a * Math.PI * 2 / T) * 2 + Math.sin(a * Math.PI * 4 / T + 1));
          for (m = e; m < BH; m++) { var q2 = tr(); tp(a, m, nx[q2 < 0.6 ? 0 : q2 < 0.85 ? 1 : 3]); }
          tp(a, e, nx[2]); tp(a, e - 1, pal[2]);
        }
      }
      return c.cv.toDataURL();
    }

    var y0 = SKY_H + GRASS_H, imgs = ["url(" + top.cv.toDataURL() + ")"], reps = ["no-repeat"], poss = ["top center"];
    for (i = 0; i < PALS.length; i++) {
      imgs.push("url(" + band(i) + ")");
      var last = i === PALS.length - 1;
      reps.push(last ? "repeat" : "repeat-x");
      poss.push("0 " + (y0 + i * BH * PX) + "px");
    }
    var b = document.body.style;
    b.backgroundImage = imgs.join(", ");
    b.backgroundRepeat = reps.join(", ");
    b.backgroundPosition = poss.join(", ");
    b.backgroundColor = PALS[PALS.length - 1][0];
  }

  var rz = null;
  window.addEventListener("resize", function () {
    clearTimeout(rz);
    rz = setTimeout(function () { paintBackdrop(); if (G && $("strata")) paintWorld(); }, 200);
  });

  aplicarHora();
  try { paintBackdrop(); } catch (e) { /* si falla, queda el fondo de styles.css */ }
  // si cambia el momento del día mientras estudias (por ejemplo, anochece), se repinta el cielo
  setInterval(function () {
    if (HORAS[momento()] === HORA) return;
    aplicarHora();
    try { paintBackdrop(); if (G && $("strata")) paintWorld(); } catch (e) { /* se queda el cielo anterior */ }
  }, 60000);
  paintSound();
  window.IBProf = { home: home, state: function () { return G; }, save: function () { return save; }, layout: layout };
  home();
})();
