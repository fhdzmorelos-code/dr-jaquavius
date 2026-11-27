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
      arr.push(n); byId[n.id] = n;
    });
  }

  root.QB = {
    add: add,
    clone: clone,
    sec: function (s) { return bySec[s] || []; },
    get: function (id) { return byId[id]; },
    count: function (s) { return (bySec[s] || []).length; }
  };
})(window);
