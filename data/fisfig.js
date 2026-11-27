// Figuras de Física: cada FIG[nombre]() devuelve un SVG dibujado con código (sin archivos de imagen).
// Una pregunta usa su figura con el campo img: "nombre", y una opción puede ser una figura con "@nombre".
(function (root) {
  "use strict";
  var INK = "#14182b", BL = "#2d6cdf", RD = "#d8343a", GR = "#2f9e44", OR = "#e8730c", GY = "#8a93a8", LT = "#d5def5", WH = "#ffffff";
  var FIG = root.FIG = {};

  // ---------- piezas básicas ----------
  function svg(w, h, body) {
    return '<svg viewBox="0 0 ' + w + " " + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Figura" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" fill="' + INK + '">' + body + "</svg>";
  }
  function line(x1, y1, x2, y2, c, w, dash) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || INK) + '" stroke-width="' + (w || 2.5) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : "") + ' stroke-linecap="round"/>';
  }
  function arrow(x1, y1, x2, y2, c, w, dash) {
    c = c || INK; w = w || 3;
    var a = Math.atan2(y2 - y1, x2 - x1), s = 9 + w * 1.2, bx = x2 - s * Math.cos(a), by = y2 - s * Math.sin(a),
        px = -Math.sin(a) * s * 0.45, py = Math.cos(a) * s * 0.45;
    return line(x1, y1, bx + (x2 - bx) * 0.4, by + (y2 - by) * 0.4, c, w, dash) +
      '<polygon points="' + x2 + "," + y2 + " " + (bx + px) + "," + (by + py) + " " + (bx - px) + "," + (by - py) + '" fill="' + c + '"/>';
  }
  function t(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" fill="' + (o.c || INK) + '" font-size="' + (o.s || 16) + '">' + s + "</text>";
  }
  function dot(x, y, r, c) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 4) + '" fill="' + (c || INK) + '"/>'; }
  function arc(d, c, w) { return '<path d="' + d + '" fill="none" stroke="' + (c || INK) + '" stroke-width="' + (w || 2.5) + '"/>'; }
  function sub(b, s) { return b + '<tspan font-size="12" dy="4">' + s + "</tspan>"; }
  function fmt(v) { return v < 0 ? "−" + (-v) : String(v); }
  function dimh(x1, x2, y, label, o) {
    return arrow(x1 + 6, y, x1, y, INK, 2) + arrow(x2 - 6, y, x2, y, INK, 2) + line(x1, y, x2, y, INK, 2) + t((x1 + x2) / 2, y + 20, label, o);
  }

  // ---------- gráficas con ejes ----------
  function graph(o) {
    var W = 440, H = 270, x0 = 64, y0 = 220, x1 = 410, y1 = 24, b = "";
    function sx(v) { return x0 + v / o.xmax * (x1 - x0); }
    function sy(v) { return y0 - v / o.ymax * (y0 - y1); }
    (o.xt || []).forEach(function (v) { b += line(sx(v), y0, sx(v), y1 + 10, LT, 1.5) + line(sx(v), y0, sx(v), y0 + 6, INK, 2) + t(sx(v), y0 + 24, fmt(v), { s: 14 }); });
    (o.yt || []).forEach(function (v) { b += line(x0, sy(v), x1 - 10, sy(v), LT, 1.5) + line(x0 - 6, sy(v), x0, sy(v), INK, 2) + t(x0 - 10, sy(v) + 5, fmt(v), { a: "end", s: 14 }); });
    var pts = o.pts.map(function (p) { return sx(p[0]) + "," + sy(p[1]); }).join(" ");
    if (o.fill) b += '<polygon points="' + sx(o.pts[0][0]) + "," + y0 + " " + pts + " " + sx(o.pts[o.pts.length - 1][0]) + "," + y0 + '" fill="rgba(45,108,223,.18)"/>';
    b += arrow(x0, y0, x1 + 10, y0, INK, 2) + arrow(x0, y0, x0, y1 - 6, INK, 2);
    b += '<polyline points="' + pts + '" fill="none" stroke="' + BL + '" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round"/>';
    b += t(x1 + 10, y0 + 44, o.xl, { a: "end" }) + t(x0 + 8, 16, o.yl, { a: "start" });
    return svg(W, H, b);
  }
  FIG["gr-vt-1"] = function () { return graph({ pts: [[0, 0], [2, 4], [5, 4], [7, 0]], xmax: 8, ymax: 5, xt: [0, 1, 2, 3, 4, 5, 6, 7], yt: [0, 2, 4], xl: "t (s)", yl: "v (m s⁻¹)", fill: true }); };
  FIG["gr-xt-1"] = function () { return graph({ pts: [[0, 0], [2, 6], [4, 6], [8, 0]], xmax: 9, ymax: 7, xt: [0, 2, 4, 6, 8], yt: [0, 2, 4, 6], xl: "t (s)", yl: "x (m)" }); };
  FIG["gr-vt-auto"] = function () { return graph({ pts: [[0, 0], [8, 24], [14, 0]], xmax: 16, ymax: 28, xt: [0, 8, 14], yt: [0, 12, 24], xl: "t (s)", yl: "v (m s⁻¹)", fill: true }); };
  FIG["gr-fx"] = function () { return graph({ pts: [[0, 0], [2, 4], [6, 4]], xmax: 7, ymax: 5, xt: [0, 2, 4, 6], yt: [0, 2, 4], xl: "x (m)", yl: "F (N)", fill: true }); };

  // ---------- vectores ----------
  FIG["v-cabeza-cola"] = function () {
    return svg(420, 230,
      arrow(60, 190, 210, 100, BL, 4) + arrow(210, 100, 350, 150, RD, 4) + arrow(60, 190, 350, 150, GR, 4) +
      t(117, 138, "A", { c: BL, s: 20 }) + t(294, 112, "B", { c: RD, s: 20 }) + t(205, 198, "C", { c: GR, s: 20 }));
  };
  FIG["v-resta"] = function () {
    return svg(380, 230,
      arrow(70, 190, 290, 80, BL, 4) + arrow(70, 190, 330, 170, RD, 4) + arrow(330, 170, 290, 80, GR, 4) + dot(70, 190, 5) +
      t(162, 120, "A", { c: BL, s: 20 }) + t(200, 210, "B", { c: RD, s: 20 }) + t(342, 128, "C", { c: GR, s: 20, a: "start" }));
  };
  FIG["v-triangulo"] = function () {
    return svg(400, 230,
      arrow(70, 190, 300, 175, BL, 4) + arrow(300, 175, 180, 55, RD, 4) + arrow(180, 55, 70, 190, GR, 4) +
      t(185, 208, "A", { c: BL, s: 20 }) + t(266, 108, "B", { c: RD, s: 20 }) + t(112, 112, "C", { c: GR, s: 20 }));
  };
  function vcomp(la, lth, lax, lay) {
    var ox = 70, oy = 200, ex = 330, ey = 50;
    return svg(430, 245,
      line(ox, oy, ex, oy, GY, 2.5, "6 5") + line(ex, oy, ex, ey, GY, 2.5, "6 5") + arrow(ox, oy, ex, ey, BL, 4.5) +
      arc("M 130 200 A 60 60 0 0 0 122 170") + dot(ox, oy, 4) +
      t(184, 110, la, { c: BL, s: 20 }) + t(152, 188, lth, { s: 18 }) + t(200, 226, lax, { c: GY }) + t(344, 132, lay, { c: GY, a: "start" }));
  }
  FIG["v-comp"] = function () { return vcomp("A", "θ", sub("A", "x"), sub("A", "y")); };
  FIG["v-comp30"] = function () { return vcomp("A = 10", "30°", sub("A", "x") + " = ?", sub("A", "y") + " = ?"); };
  FIG["v-comp60"] = function () { return vcomp("A = 20", "60°", sub("A", "x"), sub("A", "y") + " = ?"); };
  FIG["v-bote"] = function () {
    return svg(360, 232,
      '<rect x="30" y="50" width="300" height="150" fill="#cfe6ff"/>' + line(30, 50, 330, 50, "#6b8e23", 6) + line(30, 200, 330, 200, "#6b8e23", 6) +
      line(80, 200, 80, 50, GY, 2.5, "6 5") + line(80, 50, 164, 50, GY, 2.5, "6 5") + arrow(80, 200, 164, 50, GR, 4.5) + dot(80, 200, 5) +
      arc("M 80 150 A 50 50 0 0 1 104 156") + t(100, 140, "θ", { s: 18, a: "start" }) +
      t(66, 130, "50 m", { a: "end" }) + t(122, 38, "28 m") + t(142, 134, "?", { c: GR, a: "start", s: 20 }) + t(80, 222, "salida"));
  };
  FIG["v-rio"] = function () {
    return svg(310, 245,
      line(80, 30, 205, 30, GY, 2.5, "6 5") + line(205, 30, 205, 200, GY, 2.5, "6 5") +
      arrow(80, 200, 205, 200, RD, 4) + arrow(80, 200, 80, 30, BL, 4) + arrow(80, 200, 205, 30, GR, 4.5) + dot(80, 200, 5) +
      t(142, 224, "2.5 m s⁻¹ (este)", { c: RD }) + t(66, 112, "3.4 m s⁻¹", { c: BL, a: "end" }) + t(66, 132, "(norte)", { c: BL, a: "end", s: 14 }) + t(158, 124, "v = ?", { c: GR, a: "start", s: 18 }));
  };
  function vperp(lx, ly, lres, wx, wy) {
    var ox = 90, oy = 190;
    return svg(340, 240,
      line(ox, oy - wy, ox + wx, oy - wy, GY, 2.5, "6 5") + line(ox + wx, oy, ox + wx, oy - wy, GY, 2.5, "6 5") +
      arrow(ox, oy, ox + wx, oy, BL, 4) + arrow(ox, oy, ox, oy - wy, RD, 4) + arrow(ox, oy, ox + wx, oy - wy, GR, 4.5) + dot(ox, oy, 6) +
      t(ox + wx / 2, oy + 24, lx, { c: BL }) + t(ox - 12, oy - wy / 2 + 5, ly, { c: RD, a: "end" }) + t(ox + wx / 2 + 18, oy - wy / 2 + 28, lres, { c: GR, a: "start", s: 18 }));
  }
  FIG["v-perp"] = function () { return vperp("4 N", "3 N", "F = ?", 200, 150); };

  // ---------- proyectiles ----------
  function parab(gx0, R, h, gy) {
    var p = [], i, s;
    for (i = 0; i <= 60; i++) { s = i / 60; p.push((gx0 + R * s).toFixed(1) + "," + (gy - 4 * h * s * (1 - s)).toFixed(1)); }
    return '<polyline points="' + p.join(" ") + '" fill="none" stroke="' + BL + '" stroke-width="4" stroke-linecap="round"/>';
  }
  FIG["proy"] = function () {
    var gx0 = 60, R = 370, h = 140, gy = 210, b = line(30, gy, 470, gy, "#6b8e23", 5) + parab(gx0, R, h, gy);
    [["A", 0], ["B", 0.25], ["C", 0.5], ["D", 1]].forEach(function (p) {
      var s = p[1], x = gx0 + R * s, y = gy - 4 * h * s * (1 - s);
      b += dot(x, y, 6, RD) + t(p[0] === "A" || p[0] === "D" ? x : x - 4, p[0] === "A" || p[0] === "D" ? y + 28 : y - 14, p[0], { s: 20 });
    });
    return svg(500, 250, b);
  };
  FIG["proy-60"] = function () {
    var gx0 = 90, R = 350, h = 153, gy = 210;
    return svg(500, 250,
      line(30, gy, 480, gy, "#6b8e23", 5) + parab(gx0, R, h, gy) + arrow(gx0, gy, gx0 + 40, gy - 69, RD, 4) + dot(gx0, gy, 5) +
      arc("M " + (gx0 + 40) + " 210 A 40 40 0 0 0 " + (gx0 + 20) + " 175") + t(gx0 + 52, 200, "60°", { s: 16, a: "start" }) +
      t(gx0 + 34, 140, "u = 20 m s⁻¹", { a: "end", s: 16, c: RD }));
  };

  // ---------- fuerzas ----------
  FIG["fbd-plano"] = function () {
    return svg(430, 250,
      '<polygon points="60,215 370,215 370,36" fill="#e9eefb" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="-32" y="-20" width="64" height="40" fill="#fff3c4" stroke="' + INK + '" stroke-width="3" transform="translate(215,98) rotate(-30)"/>' +
      arrow(215, 98, 180, 37, GR, 4) + arrow(215, 98, 215, 178, RD, 4) + arrow(215, 98, 250, 78, BL, 4) + dot(215, 98, 4) +
      arc("M 126 215 A 66 66 0 0 0 117 182") + t(142, 204, "30°", { s: 15, a: "start" }) +
      t(166, 34, "N", { c: GR, s: 20 }) + t(232, 196, "W = mg", { c: RD, s: 17, a: "start" }) + t(262, 70, "f", { c: BL, s: 20, a: "start" }) +
      t(240, 140, "m = 5.0 kg", { s: 15, a: "start" }));
  };
  FIG["f-resultante"] = function () {
    return svg(420, 245,
      '<rect x="175" y="100" width="50" height="40" fill="#fff3c4" stroke="' + INK + '" stroke-width="3"/>' +
      arrow(225, 120, 325, 120, BL, 4) + arrow(175, 120, 135, 120, RD, 4) + arrow(200, 100, 200, 20, GR, 4) + arrow(200, 140, 200, 220, OR, 4) +
      t(345, 126, "10 N", { c: BL, a: "start" }) + t(130, 126, "4 N", { c: RD, a: "end" }) + t(214, 34, "8 N", { c: GR, a: "start" }) + t(214, 222, "8 N", { c: OR, a: "start" }));
  };
  FIG["circ-mov"] = function () {
    return svg(430, 245,
      '<circle cx="200" cy="120" r="90" fill="none" stroke="' + GY + '" stroke-width="3" stroke-dasharray="7 6"/>' +
      arrow(290, 120, 360, 120, BL, 4) + arrow(290, 120, 290, 45, RD, 4) + arrow(290, 120, 225, 120, GR, 4) + arrow(290, 120, 290, 195, OR, 4) + dot(290, 120, 8) +
      dot(200, 120, 3) +
      t(374, 126, "1", { c: BL, a: "start", s: 20 }) + t(304, 54, "2", { c: RD, a: "start", s: 20 }) + t(256, 108, "3", { c: GR, s: 20 }) + t(304, 196, "4", { c: OR, a: "start", s: 20 }));
  };

  // ---------- circuitos ----------
  function eh(x, y, e) {
    var b = "", lbl = e.l || "";
    if (e.k === "R") b = '<rect x="' + (x - 22) + '" y="' + (y - 9) + '" width="44" height="18" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>' + (lbl ? t(x, y - 16, lbl) : "");
    else if (e.k === "L") b = '<circle cx="' + x + '" cy="' + y + '" r="15" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>' + line(x - 10.6, y - 10.6, x + 10.6, y + 10.6, INK, 2.5) + line(x - 10.6, y + 10.6, x + 10.6, y - 10.6, INK, 2.5) + (lbl ? t(x, y - 22, lbl) : "");
    else b = '<circle cx="' + x + '" cy="' + y + '" r="15" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>' + t(x, y + 6, e.k) + (lbl ? t(x, y - 22, lbl) : "");
    return b;
  }
  function ev(x, y, e) {
    var b = "", lbl = e.l || "";
    if (e.k === "R") b = '<rect x="' + (x - 9) + '" y="' + (y - 20) + '" width="18" height="40" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>' + (lbl ? t(x + 16, y + 5, lbl, { a: "start" }) : "");
    else if (e.k === "L") b = '<circle cx="' + x + '" cy="' + y + '" r="15" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>' + line(x - 10.6, y - 10.6, x + 10.6, y + 10.6, INK, 2.5) + line(x - 10.6, y + 10.6, x + 10.6, y - 10.6, INK, 2.5) + (lbl ? t(x + 22, y + 5, lbl, { a: "start" }) : "");
    else b = '<circle cx="' + x + '" cy="' + y + '" r="15" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>' + t(x, y + 6, e.k) + (lbl ? t(x + 22, y + 5, lbl, { a: "start" }) : "");
    return b;
  }
  function circ(o) {
    var ser = o.ser || [], br = o.br || [], X0 = 86, TOP = 34, BOT = 154, MID = 94;
    var lastS = X0 + 70 + 100 * (ser.length - 1);
    var c0 = ser.length ? lastS + 90 : X0 + 80;
    var xe = br.length ? c0 + 90 * (br.length - 1) : (ser.length ? lastS + 60 : X0 + 140);
    var b = line(X0, TOP, xe, TOP) + line(X0, BOT, xe, BOT);
    if (!br.length) b += line(xe, TOP, xe, BOT);
    b += line(X0, TOP, X0, 82) + line(X0, 98, X0, BOT) + line(X0 - 17, 82, X0 + 17, 82, INK, 3) + line(X0 - 9, 98, X0 + 9, 98, INK, 6);
    b += t(X0 + 26, 80, "+", { a: "start" }) + t(X0 + 26, 108, "−", { a: "start" });
    if (o.bat) b += t(X0 - 28, MID + 5, o.bat, { a: "end" });
    ser.forEach(function (e, i) { b += eh(X0 + 70 + 100 * i, TOP, e); });
    br.forEach(function (col, i) {
      var cx = c0 + 90 * i, n = col.length, ys = n === 1 ? [MID] : n === 2 ? [MID - 26, MID + 26] : [MID - 40, MID, MID + 40];
      b += line(cx, TOP, cx, BOT);
      if (i < br.length - 1) b += dot(cx, TOP, 4.5) + dot(cx, BOT, 4.5);
      col.forEach(function (e, j) { b += ev(cx, ys[j], e); });
    });
    return svg(xe + 78, BOT + 24, b);
  }
  var R = function (l) { return { k: "R", l: l }; }, L = function (l) { return { k: "L", l: l }; }, M = function (k, l) { return { k: k, l: l }; };
  FIG["c-serie"] = function () { return circ({ bat: "12 V", ser: [R("4 Ω"), R("2 Ω")] }); };
  FIG["c-paralelo"] = function () { return circ({ bat: "6 V", br: [[R("3 Ω")], [R("6 Ω")]] }); };
  FIG["c-mixto"] = function () { return circ({ bat: "12 V", ser: [R("4 Ω")], br: [[R("6 Ω")], [R("3 Ω")]] }); };
  FIG["c-r123"] = function () { return circ({ ser: [R("R₁")], br: [[R("R₂")], [R("R₃")]] }); };
  FIG["c-focos"] = function () { return circ({ bat: "6.0 V", br: [[L("A")], [L("B"), L("C")]] }); };
  FIG["c-xyz"] = function () { return circ({ bat: "1.6 A", ser: [L("Z")], br: [[L("X")], [L("Y")]] }); };
  FIG["c-b54"] = function () { return circ({ bat: "6.0 V", ser: [R("8 Ω"), R("10 Ω")], br: [[R("4 Ω")], [R("2 Ω")]] }); };
  FIG["c-amp"] = function () { return circ({ bat: "9 V", ser: [M("A")], br: [[R("6 Ω")], [M("V")]] }); };
  FIG["cm-ok"] = function () { return circ({ ser: [M("A")], br: [[R("R")], [M("V")]] }); };
  FIG["cm-inv"] = function () { return circ({ ser: [M("V")], br: [[R("R")], [M("A")]] }); };
  FIG["cm-ss"] = function () { return circ({ ser: [M("A"), M("V"), R("R")] }); };
  FIG["cm-pp"] = function () { return circ({ br: [[R("R")], [M("V")], [M("A")]] }); };

  // gráficas V-I pequeñas (para elegir entre cuatro)
  function vi(kind) {
    var b = arrow(30, 125, 190, 125, INK, 2) + arrow(30, 125, 30, 10, INK, 2) + t(190, 146, "I", { a: "end" }) + t(40, 16, "V", { a: "start" }), p = [], i, s;
    if (kind === "ohm") b += line(30, 125, 170, 35, BL, 4.5);
    else if (kind === "hor") b += line(30, 70, 170, 70, BL, 4.5);
    else if (kind === "int") b += line(30, 100, 170, 30, BL, 4.5);
    else { for (i = 0; i <= 40; i++) { s = i / 40; p.push((30 + 140 * s).toFixed(1) + "," + (125 - 92 * Math.pow(s, 1.8)).toFixed(1)); } b += '<polyline points="' + p.join(" ") + '" fill="none" stroke="' + BL + '" stroke-width="4.5" stroke-linecap="round"/>'; }
    return svg(210, 155, b);
  }
  ["ohm", "fil", "hor", "int"].forEach(function (k) { FIG["vi-" + k] = function () { return vi(k); }; });

  // ---------- ondas ----------
  function wave(o) {
    var W = 470, H = 280, x0 = 58, xe = 444, yc = 124, ya = 92, b = "", i, p = [], v;
    function sx(v) { return x0 + v / o.xmax * (xe - x0); }
    function sy(v) { return yc - v / o.amax * ya; }
    o.xt.forEach(function (v) { b += line(sx(v), 22, sx(v), 226, LT, 1.5) + line(sx(v), 226, sx(v), 232, INK, 2) + t(sx(v), 250, o.xf ? o.xf(v) : v, { s: 14 }); });
    [o.A, 0, -o.A].forEach(function (v) { b += line(x0, sy(v), xe - 10, sy(v), LT, 1.5) + t(x0 - 8, sy(v) + 5, fmt(v), { a: "end", s: 14 }); });
    b += line(x0, 226, xe, 226, INK, 2);
    b += arrow(x0, yc, xe + 6, yc, INK, 2) + arrow(x0, 226, x0, 12, INK, 2);
    for (i = 0; i <= 240; i++) { v = o.xmax * i / 240; p.push(sx(v).toFixed(1) + "," + sy(o.A * Math.sin(2 * Math.PI * v / o.per)).toFixed(1)); }
    b += '<polyline points="' + p.join(" ") + '" fill="none" stroke="' + BL + '" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>';
    b += t(xe + 6, 274, o.xl, { a: "end" }) + t(x0 + 8, 14, o.yl, { a: "start" });
    return svg(W, H, b);
  }
  FIG["onda-x"] = function () { return wave({ xmax: 12, per: 6, A: 2, amax: 2.6, xt: [0, 3, 6, 9, 12], xl: "x (m)", yl: "y (cm)" }); };
  FIG["onda-t"] = function () { return wave({ xmax: 0.4, per: 0.2, A: 4, amax: 5.2, xt: [0, 0.1, 0.2, 0.3, 0.4], xl: "t (s)", yl: "y (cm)" }); };
  FIG["long"] = function () {
    var b = "", i, base, x;
    for (i = 0; i < 28; i++) { base = 24 + i * 14; x = base - 9 * Math.sin(2 * Math.PI * (base - 122) / 196); b += line(x.toFixed(1), 78, x.toFixed(1), 138, INK, 3.5); }
    b += arrow(150, 44, 280, 44, RD, 3) + t(215, 32, "propagación", { s: 14 });
    b += t(122, 168, "X", { s: 20, c: OR }) + t(220, 168, "Y", { s: 20, c: GR }) + dimh(122, 318, 192, "d");
    return svg(420, 225, b);
  };
  FIG["snell"] = function () {
    return svg(380, 290,
      '<rect x="20" y="140" width="340" height="130" fill="#cfe6ff"/>' + line(20, 140, 360, 140, INK, 3) + line(190, 20, 190, 270, GY, 2.5, "6 5") +
      arrow(91, 41, 190, 140, RD, 4) + arrow(190, 140, 246, 246, RD, 4) +
      arc("M 190 95 A 45 45 0 0 0 158 108") + arc("M 190 195 A 55 55 0 0 0 216 188") +
      t(206, 100, "θ" + "<tspan font-size='12' dy='4'>1</tspan>" + "<tspan dy='-4'> = 45°</tspan>", { a: "start", s: 15 }) + t(254, 206, sub("θ", "2") + "<tspan dy='-4'> = ?</tspan>", { a: "start", s: 15 }) +
      t(30, 36, "aire (n = 1.0)", { a: "start", s: 15 }) + t(30, 262, "vidrio (n = 1.5)", { a: "start", s: 15 }));
  };
  FIG["tir-in"] = function () {
    return svg(380, 290,
      '<rect x="20" y="140" width="340" height="130" fill="#cfe6ff"/>' + line(20, 140, 360, 140, INK, 3) + line(190, 20, 190, 270, GY, 2.5, "6 5") +
      arrow(83, 230, 190, 140, RD, 4) + arc("M 190 185 A 45 45 0 0 1 155 169") + t(150, 214, "50°", { a: "end", s: 16 }) +
      t(30, 36, "aire (n = 1.0)", { a: "start", s: 15 }) + t(30, 262, "vidrio (n = 1.5)", { a: "start", s: 15 }));
  };
  FIG["young"] = function () {
    return svg(430, 250,
      line(90, 20, 90, 70, INK, 4) + line(90, 110, 90, 130, INK, 4) + line(90, 170, 90, 230, INK, 4) + line(380, 20, 380, 230, INK, 4) +
      line(90, 90, 380, 60, BL, 3) + line(90, 150, 380, 60, RD, 3) + dot(90, 90, 6) + dot(90, 150, 6) + dot(380, 60, 6, OR) +
      t(76, 96, "S₁", { a: "end" }) + t(76, 156, "S₂", { a: "end" }) + t(394, 54, "P", { a: "start", s: 18, c: OR }) +
      t(236, 66, "L₁", { c: BL }) + t(250, 128, "L₂", { c: RD }) + t(90, 244, "fuentes en fase", { s: 14 }));
  };
  function std(n, label) {
    var x0 = 30, L = 200, yc = 55, A = 38, up = [], dn = [], i, s;
    for (i = 0; i <= 80; i++) { s = i / 80; up.push((x0 + L * s).toFixed(1) + "," + (yc - A * Math.sin(n * Math.PI * s)).toFixed(1)); dn.push((x0 + L * s).toFixed(1) + "," + (yc + A * Math.sin(n * Math.PI * s)).toFixed(1)); }
    var b = line(x0, yc, x0 + L, yc, GY, 2, "5 5") +
      '<polyline points="' + up.join(" ") + '" fill="none" stroke="' + BL + '" stroke-width="4" stroke-linecap="round"/>' +
      '<polyline points="' + dn.join(" ") + '" fill="none" stroke="' + BL + '" stroke-width="4" stroke-linecap="round"/>' +
      dot(x0, yc, 6) + dot(x0 + L, yc, 6);
    if (label) b += dimh(x0, x0 + L, 112, label);
    return svg(260, 135, b);
  }
  [1, 2, 3, 4].forEach(function (n) { FIG["std-" + n] = function () { return std(n); }; });
  FIG["std-3L"] = function () { return std(3, "L = 1.2 m"); };
  FIG["tubo-c"] = function () {
    var x0 = 70, L = 280, yc = 88, A = 34, up = [], dn = [], i, s;
    for (i = 0; i <= 80; i++) { s = i / 80; up.push((x0 + L * s).toFixed(1) + "," + (yc - A * Math.sin(Math.PI / 2 * s)).toFixed(1)); dn.push((x0 + L * s).toFixed(1) + "," + (yc + A * Math.sin(Math.PI / 2 * s)).toFixed(1)); }
    return svg(420, 175,
      line(x0, 44, x0 + L, 44, INK, 4) + line(x0, 132, x0 + L, 132, INK, 4) + line(x0, 44, x0, 132, INK, 8) +
      '<polyline points="' + up.join(" ") + '" fill="none" stroke="' + BL + '" stroke-width="4" stroke-linecap="round"/>' +
      '<polyline points="' + dn.join(" ") + '" fill="none" stroke="' + BL + '" stroke-width="4" stroke-linecap="round"/>' +
      t(x0, 34, "cerrado", { s: 14 }) + t(x0 + L, 34, "abierto", { s: 14 }) + dimh(x0, x0 + L, 150, "L = 0.50 m"));
  };
  FIG["doppler"] = function () {
    var b = "", cx = [260, 250, 240, 230], r = [26, 52, 78, 104], i;
    for (i = 0; i < 4; i++) b += '<circle cx="' + cx[i] + '" cy="120" r="' + r[i] + '" fill="none" stroke="' + BL + '" stroke-width="2.5"/>';
    b += dot(270, 120, 7, RD) + arrow(278, 120, 336, 120, RD, 3.5) + t(346, 127, "v", { c: RD, s: 18, a: "start" });
    b += '<circle cx="410" cy="120" r="14" fill="' + GR + '"/>' + t(410, 126, "A", { c: WH }) + '<circle cx="50" cy="120" r="14" fill="' + OR + '"/>' + t(50, 126, "B", { c: WH });
    return svg(460, 240, b);
  };

  // ---------- campos ----------
  FIG["g-dist"] = function () {
    return svg(460, 240,
      '<circle cx="110" cy="100" r="40" fill="#bcd4f5" stroke="' + INK + '" stroke-width="3"/>' + t(110, 106, "M", { s: 20 }) +
      dot(220, 100, 7, RD) + dot(330, 100, 7, OR) + t(220, 82, "A", { s: 20, c: RD }) + t(330, 82, "B", { s: 20, c: OR }) +
      dimh(110, 220, 160, "r") + dimh(110, 330, 205, "2r"));
  };
  function chargeDisc(x, y, pos, r) {
    return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (pos ? RD : BL) + '"/>' + t(x, y + 6, pos ? "+" : "−", { c: WH, s: 20 });
  }
  function radial(inward) {
    var b = "", i, a, c, s, x1, y1, x2, y2;
    for (i = 0; i < 8; i++) {
      a = i * Math.PI / 4; c = Math.cos(a); s = Math.sin(a);
      x1 = 140 + 22 * c; y1 = 90 + 22 * s; x2 = 140 + 72 * c; y2 = 90 + 72 * s;
      b += inward ? arrow(x2, y2, x1 + 2 * c, y1 + 2 * s, INK, 3) : arrow(x1, y1, x2, y2, INK, 3);
    }
    return svg(280, 180, b + chargeDisc(140, 90, !inward, 14));
  }
  FIG["ef-pos"] = function () { return radial(false); };
  FIG["ef-neg"] = function () { return radial(true); };
  FIG["ef-dip"] = function () {
    var b = "", ph = [80, 50, 0, -50, -80], i, f, cs, sn, sx_, sy_, ex, ey, c1y, my;
    ph.forEach(function (d) {
      f = d * Math.PI / 180; cs = Math.cos(f); sn = Math.sin(f);
      sx_ = 80 + 15 * cs; sy_ = 90 - 15 * sn; ex = 200 - 15 * cs; ey = sy_; c1y = 90 - 76 * sn;
      b += '<path d="M ' + sx_ + " " + sy_ + " C " + (80 + 15 * cs + 12) + " " + c1y + ", " + (200 - 15 * cs - 12) + " " + c1y + ", " + ex + " " + ey + '" fill="none" stroke="' + INK + '" stroke-width="3"/>';
      my = (2 * sy_ + 6 * c1y) / 8;
      b += '<polygon points="146,' + my + " 136," + (my - 6) + " 136," + (my + 6) + '" fill="' + INK + '"/>';
    });
    return svg(280, 180, b + chargeDisc(80, 90, true, 14) + chargeDisc(200, 90, false, 14));
  };
  function plates(withE) {
    var b = '<rect x="40" y="28" width="200" height="10" fill="#9aa5c0" stroke="' + INK + '" stroke-width="2"/><rect x="40" y="132" width="200" height="10" fill="#9aa5c0" stroke="' + INK + '" stroke-width="2"/>', i;
    for (i = 0; i < 5; i++) b += arrow(65 + i * 37.5, 48, 65 + i * 37.5, 122, INK, 3);
    for (i = 0; i < 5; i++) b += t(65 + i * 37.5, 22, "+", { s: 16, c: RD }) + t(65 + i * 37.5, 160, "−", { s: 18, c: BL });
    return svg(280, 175, b);
  }
  FIG["ef-uni"] = function () { return plates(); };
  FIG["e-placas"] = function () {
    return svg(480, 260,
      '<rect x="80" y="40" width="250" height="12" fill="#9aa5c0" stroke="' + INK + '" stroke-width="2"/><rect x="80" y="190" width="250" height="12" fill="#9aa5c0" stroke="' + INK + '" stroke-width="2"/>' +
      arrow(120, 62, 120, 180, INK, 3) + arrow(165, 62, 165, 180, INK, 3) + arrow(285, 62, 285, 180, INK, 3) + arrow(330, 62, 330, 180, INK, 3) +
      '<circle cx="225" cy="121" r="15" fill="' + BL + '"/>' + t(225, 127, "−", { c: WH, s: 20 }) + t(250, 108, "e⁻", { a: "start", s: 16, c: BL }) +
      t(60, 52, "+", { a: "end", s: 22, c: RD }) + t(60, 208, "−", { a: "end", s: 24, c: BL }) +
      line(352, 46, 372, 46, INK, 2) + line(352, 196, 372, 196, INK, 2) + arrow(362, 120, 362, 46, INK, 2) + arrow(362, 122, 362, 196, INK, 2) + t(374, 126, "d = 2.0 cm", { a: "start", s: 14 }) +
      t(205, 236, "d. d. p. entre las placas: 400 V", { s: 15 }));
  };
  function circles(out) {
    var b = "";
    [30, 55, 80].forEach(function (r) { b += '<circle cx="180" cy="120" r="' + r + '" fill="none" stroke="' + GY + '" stroke-width="2.5" stroke-dasharray="7 6"/>'; });
    b += '<circle cx="180" cy="120" r="12" fill="#fff" stroke="' + INK + '" stroke-width="3"/>';
    b += out ? dot(180, 120, 4) : line(173, 113, 187, 127, INK, 3) + line(173, 127, 187, 113, INK, 3);
    b += dot(260, 120, 6, RD) + t(278, 126, "P", { a: "start", s: 18, c: RD });
    return svg(340, 240, b);
  }
  FIG["b-sale"] = function () { return circles(true); };
  FIG["b-entra"] = function () { return circles(false); };
  function bforce(into, pos) {
    var b = "", xs = [40, 100, 160, 220, 280, 340], ys = [35, 80, 160, 205];
    ys.forEach(function (y) { xs.forEach(function (x) {
      b += '<circle cx="' + x + '" cy="' + y + '" r="8" fill="none" stroke="' + GY + '" stroke-width="2"/>' + (into ? line(x - 5, y - 5, x + 5, y + 5, GY, 2) + line(x - 5, y + 5, x + 5, y - 5, GY, 2) : dot(x, y, 2.5, GY));
    }); });
    b += arrow(122, 120, 250, 120, INK, 3.5) + t(240, 108, "v", { s: 18, a: "end" }) + chargeDisc(100, 120, pos, 15);
    b += t(364, 126, into ? "B hacia adentro" : "B hacia afuera", { a: "end", s: 13, c: GY });
    return svg(380, 240, b);
  }
  FIG["b-f-in-pos"] = function () { return bforce(true, true); };
  FIG["b-f-in-neg"] = function () { return bforce(true, false); };
  FIG["b-f-out-pos"] = function () { return bforce(false, true); };
})(window);
