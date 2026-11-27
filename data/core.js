// Banco de preguntas. Cada pregunta: { q, o: [4 opciones], a: índice de la correcta, d: 1-3, why }
// QB.add("1.2", [ ... ]) agrega preguntas a la sección. El id es "sección-número" y NO cambia: solo se agregan al final.
(function (root) {
  "use strict";
  var bySec = {}, byId = {};

  function add(sec, list) {
    var arr = bySec[sec] || (bySec[sec] = []);
    list.forEach(function (q) {
      q.sec = sec;
      q.d = q.d || 1;
      q.id = sec + "-" + (arr.length + 1);
      arr.push(q);
      byId[q.id] = q;
    });
  }

  function clone(from, to) {
    var src = bySec[from] || [], arr = bySec[to] || (bySec[to] = []);
    src.forEach(function (q) {
      var n = { q: q.q, o: q.o.slice(), a: q.a, d: q.d, why: q.why, sec: to, id: to + "-" + (arr.length + 1) };
      if (q.img) n.img = q.img;
      arr.push(n); byId[n.id] = n;
    });
  }

  // Asigna una figura (nombre en FIG) a una pregunta ya creada: QB.img("A.1.1-7", "v-bote")
  function img(id, name) { if (byId[id]) byId[id].img = name; else if (root.console) console.warn("QB.img: no existe " + id); }

  root.QB = {
    add: add,
    clone: clone,
    img: img,
    sec: function (s) { return bySec[s] || []; },
    get: function (id) { return byId[id]; },
    count: function (s) { return (bySec[s] || []).length; }
  };
})(window);
