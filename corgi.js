// Pixel art del juego: el corgi (24x24, 5 variantes) y los hallazgos de cada nivel.
(function (root) {
  "use strict";

  // Mitad izquierda del corgi; la derecha es su espejo.
  // . vacío · O contorno · F pelaje · D pelaje en sombra · L pelaje claro · C marca
  // W blanco · S blanco en sombra · P oreja interior · E ojo · H brillo del ojo
  // N nariz · T lengua · B rubor
  var HALF = [
    "...OO.......",
    "..OFFO......",
    "..OFPFO.....",
    ".OFPPFFO....",
    ".OFPPFFFOOOO",
    ".OFFPFFFFFFL",
    ".OFFFFFFFFLW",
    ".OFFCCFFFFLW",
    ".OFFFEEHFFWW",
    ".OFFFEEEFWWW",
    ".ODFBBFFWWWW",
    "..ODFFWWWWNN",
    "..OODWWWWWWN",
    "...OWWWWWOWO",
    "....OOWWWWTT",
    "...OFFOOWWTT",
    "..OFFFFSWWWW",
    "..OFFFFSWWWW",
    "..OFDFFWWWWW",
    "..OFDFFWWWWW",
    "..OFDFOWWWOW",
    "..OFFFOWWWOW",
    "..OWWWOWWWOO",
    "...OOO.OOO.."
  ];
  var BASE = HALF.map(function (h) { return h + h.split("").reverse().join(""); });

  var COMMON = {
    O: "#1c1410", P: "#f2a7a0", E: "#1c1410", H: "#ffffff", N: "#1c1410",
    T: "#e8607a", B: "#f4a58f", S: "#e9dcc4"
  };

  // Accesorios: [fila, columna inicial, píxeles]; "." deja ver lo de abajo.
  // Un solo personaje: el Dr. Jaquavius, corgi casi negro con lentes redondos de profesor.
  var VARIANTS = [
    {
      name: "Dr. Jaquavius", desc: "Black corgi",
      pal: { F: "#2c2b36", D: "#1f1e27", L: "#464555", C: "#464555", B: "#4a4958", W: "#fff6e6", S: "#e9dcc4", g: "#d9a441", c: "#e6f4ff" },
      acc: []
    }
  ];

  // Hallazgos por nivel de rareza (0 = tierrita … 5 = hueso de oro).
  var ITEMS = [
    {
      pal: { O: "#1c1410", B: "#9a6237", D: "#7c4a27", L: "#b98152" },
      rows: ["....OOOO....", "..OOBLBBOO..", ".OBLBDBBBBO.", "OBBBBBBDBLBO", "OBDBBLBBBBBO", "OBBBBDBBBDBO", ".OBBBBBBBBO.", "..OOOOOOOO.."]
    },
    {
      pal: { O: "#1c1410", G: "#9aa3ad", D: "#6f7882", L: "#c9d1d8" },
      rows: ["....OOOO....", "..OOGLLGOO..", ".OGLLGGGGGO.", "OGLGGGGGDGGO", "OGGGGGGGGDGO", "OGGDGGGGDDGO", ".OGDDGGDDGO.", "..OOOOOOOO.."]
    },
    {
      pal: { O: "#1c1410", W: "#fff6e6", S: "#d9cbb0" },
      rows: [".OO......OO.", "OWWO....OWWO", "OWWWOOOOWWWO", ".OWWWWWWWWO.", ".OWSSSSSSWO.", "OWWSOOOOSWWO", "OWSO....OSWO", ".OO......OO."]
    },
    {
      pal: { O: "#1c1410", S: "#59c2a4", K: "#1f6f5b", L: "#a5ecd6" },
      rows: ["...OOOOOO...", "..OSLLSSSO..", ".OSLKKKKSSO.", "OSLKSSSSKSSO", "OSKSSKKSSKSO", "OSKSKSSKSKSO", "OSKSSKSKSKSO", "OSSKSSSKSSO.", ".OSSKKKSSO..", "..OOOOOOO..."]
    },
    {
      pal: { O: "#1c1410", H: "#9c5a2a", D: "#6e3b17", Y: "#f6c12d", L: "#fff1a8", J: "#c58bea" },
      rows: [".OOOOOOOOOO.", "OHHHHYYHHHHO", "OHDDHYYHDDHO", "OOOOOYYOOOOO", "OYLJYLYJYLYO", "OOOOOOOOOOOO", "OHHHHYYHHHHO", "OHDDHYYHDDHO", "OHHHHHHHHHHO", "OOOOOOOOOOOO"]
    },
    {
      pal: { O: "#1c1410", W: "#ffcf3f", S: "#d99a12", L: "#fff7c2" },
      rows: [".OO......OO.", "OLWO....OLWO", "OLWWOOOOWWWO", ".OLLLWWWWWO.", ".OWSSSSSSWO.", "OWWSOOOOSWWO", "OWSO....OSWO", ".OO......OO."]
    }
  ];

  // Íconos de categoría (12x12).
  var ICONS = {
    casa: {
      pal: { O: "#1c1410", R: "#d8343a", r: "#a8262b", W: "#fff1c9", D: "#7c4a27", Y: "#ffcf3f" },
      rows: [".....OO.....", "....ORRO....", "...ORRRRO...", "..ORRRRRRO..", ".ORRRRRRRRO.", "OOOOOOOOOOOO",
        ".OWWWWWWWWO.", ".OWYYWWDDWO.", ".OWYYWWDDWO.", ".OWWWWWDDWO.", ".OWWWWWDDWO.", ".OOOOOOOOOO."]
    },
    equis: {
      pal: { O: "#1c1410", R: "#e3363b", L: "#ff8c8c" },
      rows: ["............", ".OO......OO.", "ORROO..OORRO", "OLRRROOORRRO", ".ORRRRRRRRO.", "..OORRRROO..",
        "..ORRRRRRO..", ".ORRRRRRRRO.", "ORRROOOORRRO", "ORROO..OORRO", ".OO......OO.", "............"]
    },
    pokeball: {
      pal: { O: "#1c1410", R: "#e3363b", L: "#ff9a9a", W: "#ffffff", S: "#cfd6de" },
      rows: ["....OOOO....", "..OORRRROO..", ".ORRLLRRRRO.", ".ORLRRRRRRO.", "ORRROOOORRRO", "OOOOWWWWOOOO",
        "OWWWOOOOWWWO", "OSWWWWWWWWSO", ".OSWWWWWWSO.", ".OSSWWWWSSO.", "..OOSSSSOO..", "....OOOO...."]
    },
    trofeo: {
      pal: { O: "#1c1410", Y: "#f6c12d", L: "#fff1a8", D: "#b98510", B: "#7a4a28" },
      rows: ["..OOOOOOOO..", "OOOYLYYYYOOO", "OYOYLYYYYOYO", "OYOYLYYYDOYO", ".OOYYYYYDOO.", "..OYYYYYDO..",
        "...OYYYDO...", "....OYDO....", "....OYDO....", "...OOOOOO...", "..OBBBBBBO..", "..OOOOOOOO.."]
    },
    planeta: {
      pal: { O: "#1c1410", B: "#3f8fd6", L: "#8fd3ff", G: "#5bb04a", D: "#3f8a35" },
      rows: ["....OOOO....", "..OOLBGGOO..", ".OLBGGGBBBO.", ".OBGGDBBBGO.", "OBBGGBBBGGBO", "OBBBDBBBGDBO",
        "OBGGBBBBBBBO", "OBGDGBBGGBBO", ".OBGGBBGDBO.", ".OBBBBBBBBO.", "..OOBBBBOO..", "....OOOO...."]
    },
    balon: {
      pal: { O: "#1c1410", W: "#ffffff", K: "#1c1410", S: "#d5dbe2" },
      rows: ["....OOOO....", "..OOWWWWOO..", ".OWWWKKWWWO.", ".OWWKKKKWWO.", "OKWWWKKWWWKO", "OKKWWWWWWKKO",
        "OWWKWWWWKWWO", "OWKKKWWKKKSO", ".OWKWWWWKSO.", ".OWWWKKWSSO.", "..OOSKKSOO..", "....OOOO...."]
    }
  };

  function rects(g, pal) {
    var out = "";
    for (var y = 0; y < g.length; y++) {
      var x = 0, row = g[y];
      while (x < row.length) {
        var ch = row[x];
        if (ch === "." || !pal[ch]) { x++; continue; }
        var w = 1;
        while (x + w < row.length && row[x + w] === ch) w++;
        out += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="1" fill="' + pal[ch] + '"/>';
        x += w;
      }
    }
    return out;
  }

  function svg(v, size, cls) {
    v = ((v % VARIANTS.length) + VARIANTS.length) % VARIANTS.length;
    var g = BASE.map(function (r) { return r.split(""); });
    VARIANTS[v].acc.forEach(function (a) {
      for (var i = 0; i < a[2].length; i++) if (a[2][i] !== ".") g[a[0]][a[1] + i] = a[2][i];
    });
    return '<svg class="corgi ' + (cls || "") + '" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" shape-rendering="crispEdges" role="img" aria-label="Corgi ' +
      VARIANTS[v].name + '">' + rects(g, Object.assign({}, COMMON, VARIANTS[v].pal)) + "</svg>";
  }

  function item(tier, size, cls) {
    var it = ITEMS[tier], w = 12, h = it.rows.length;
    return '<svg class="item ' + (cls || "") + '" width="' + size + '" height="' + Math.round(size * h / w) +
      '" viewBox="0 0 ' + w + " " + h + '" shape-rendering="crispEdges" aria-hidden="true">' +
      rects(it.rows.map(function (r) { return r.split(""); }), it.pal) + "</svg>";
  }

  function icon(name, size) {
    var it = ICONS[name];
    if (!it) return "";
    return '<svg class="icon" width="' + size + '" height="' + size + '" viewBox="0 0 12 12" shape-rendering="crispEdges" aria-hidden="true">' +
      rects(it.rows.map(function (r) { return r.split(""); }), it.pal) + "</svg>";
  }

  root.Corgi = { svg: svg, item: item, icon: icon, variants: VARIANTS };
})(typeof window !== "undefined" ? window : globalThis);
