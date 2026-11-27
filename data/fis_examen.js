// Clona las preguntas de Física NM a la carpeta del examen (secciones con X delante). Cargar después de los fis_*.js.
(function () {
  var ex = window.SUBJECTS.filter(function (s) { return s.id === "fisexam"; })[0];
  if (!ex) return;
  ex.units.forEach(function (u) {
    u.secs.forEach(function (s) { window.QB.clone(s[0].replace(/^X/, ""), s[0]); });
  });
})();
