// Materias, unidades y secciones. Para agregar una materia, añade otro objeto aquí y sus archivos data/*.js.
window.SUBJECTS = [
  {
    id: "bmhl", name: "Business Management HL", color: "#f6c12d", icon: "trofeo",
    desc: "IB Diploma Programme. Topics from the course notes, in exam style.",
    units: [
      { id: "u1", name: "1 · Introduction to Business Management", secs: [
        ["1.1", "What is a business?"], ["1.2", "Types of business entities"], ["1.3", "Business objectives"],
        ["1.4", "Stakeholders"], ["1.5", "Growth and evolution"], ["1.6", "Multinational companies"]
      ] },
      { id: "u2", name: "2 · Human Resource Management", secs: [
        ["2.1", "Introduction to HRM"], ["2.2", "Organisational structure"], ["2.3", "Leadership and management"],
        ["2.4", "Motivation and demotivation"], ["2.5", "Organisational culture"], ["2.6", "Communication"], ["2.7", "Industrial relations"]
      ] },
      { id: "u3", name: "3 · Finance and Accounts", secs: [
        ["3.1", "Introduction to finance"], ["3.2", "Sources of finance"], ["3.3", "Costs and revenues"],
        ["3.4", "Final accounts"], ["3.5", "Profitability and liquidity ratios"], ["3.6", "Efficiency ratios"], ["3.7", "Cash flow"], ["3.8", "Investment appraisal"], ["3.9", "Budgets"]
      ] },
      { id: "u4", name: "4 · Marketing", secs: [
        ["4.1", "Introduction to marketing"], ["4.2", "Marketing planning"], ["4.3", "Sales forecasting"], ["4.4", "Market research"], ["4.5", "The seven Ps"], ["4.6", "International marketing"]
      ] },
      { id: "u5", name: "5 · Operations Management", secs: [
        ["5.1", "Introduction to operations"], ["5.2", "Operations methods"], ["5.3", "Lean production and quality"], ["5.4", "Location"], ["5.5", "Break-even analysis"],
        ["5.6", "Production planning"], ["5.7", "Crisis management"], ["5.8", "Research and development"], ["5.9", "Information systems"]
      ] },
      { id: "u7", name: "7 · Business Management Toolkit", secs: [
        ["7.1.1", "SWOT / STEEPLE"], ["7.1.2", "Ansoff matrix"], ["7.1.3", "Circular business models"], ["7.1.4", "Business plan"],
        ["7.1.5", "Force field analysis"], ["7.1.6", "Hofstede's dimensions"], ["7.1.7", "Decision tree"], ["7.1.8", "BCG matrix"],
        ["7.1.9", "Gantt chart"], ["7.1.10", "Critical path analysis"], ["7.1.11", "Porter's strategies"], ["7.1.12", "Contribution"],
        ["7.1.13", "Linear regression"], ["7.1.14", "Descriptive statistics"]
      ] }
    ]
  }
];

// Física SL (español). Secciones = subtemas del apunte de Kognity (solo nivel medio; se omite el contenido HL).
window.SUBJECTS.push({
  id: "fis", lang: "es", name: "Física NM (SL)", color: "#3ba0d8", icon: "planeta",
  desc: "Programa del Diploma del IB. Temas A a E del curso, en español y con estilo de examen.",
  units: [
    { id: "fa1", name: "A.1 · Cinemática", secs: [
      ["A.1.1", "Vectores"], ["A.1.2", "Descripción del movimiento"], ["A.1.3", "Ecuaciones del movimiento"], ["A.1.4", "Movimiento de proyectiles"]
    ] },
    { id: "fa2", name: "A.2 · Fuerzas y momento lineal", secs: [
      ["A.2.1", "Las fuerzas"], ["A.2.2", "Fuerzas de campo"], ["A.2.3", "Normal, fricción y tensión"], ["A.2.4", "Elástica, viscosa y empuje"],
      ["A.2.5", "Leyes de Newton"], ["A.2.6", "Momento lineal e impulso"], ["A.2.7", "Colisiones y explosiones"], ["A.2.8", "Movimiento circular"]
    ] },
    { id: "fa3", name: "A.3 · Trabajo, energía y potencia", secs: [
      ["A.3.1", "Trabajo y energía"], ["A.3.2", "Conservación de la energía"], ["A.3.3", "Potencia y eficiencia"], ["A.3.4", "Densidad energética de los combustibles"]
    ] },
    { id: "fb1", name: "B.1 · Transferencias de energía térmica", secs: [
      ["B.1.1", "Teoría molecular de la materia"], ["B.1.2", "Escalas de temperatura"], ["B.1.3", "Cambio de temperatura y de fase"],
      ["B.1.4", "Transferencia de energía térmica"], ["B.1.5", "Emisión del cuerpo negro"]
    ] },
    { id: "fb2", name: "B.2 · Efecto invernadero", secs: [["B.2.1", "Energía del Sol"], ["B.2.2", "Balance de energía de la Tierra"]] },
    { id: "fb3", name: "B.3 · Leyes de los gases", secs: [["B.3.1", "Gases ideales"], ["B.3.2", "Comportamiento de los gases ideales"]] },
    { id: "fb5", name: "B.5 · Corriente y circuitos", secs: [
      ["B.5.1", "Potencial eléctrico y corriente"], ["B.5.2", "Resistencia y ley de Ohm"], ["B.5.3", "Circuitos en serie y en paralelo"],
      ["B.5.4", "Circuitos y potencia"], ["B.5.5", "Pilas y resistencia interna"]
    ] },
    { id: "fc1", name: "C.1 · Movimiento armónico simple", secs: [["C.1.1", "Movimiento armónico simple"], ["C.1.2", "Péndulos y masa-resorte"]] },
    { id: "fc2", name: "C.2 · Modelo ondulatorio", secs: [["C.2.1", "Ondas transversales y longitudinales"], ["C.2.2", "Descripción de las ondas"], ["C.2.3", "Ondas sonoras y electromagnéticas"]] },
    { id: "fc3", name: "C.3 · Fenómenos ondulatorios", secs: [
      ["C.3.1", "Reflexión, refracción y difracción"], ["C.3.2", "Ley de Snell y reflexión interna total"], ["C.3.3", "Superposición y doble rendija de Young"]
    ] },
    { id: "fc4", name: "C.4 · Ondas estacionarias y resonancia", secs: [
      ["C.4.1", "Ondas estacionarias"], ["C.4.2", "Ondas estacionarias en cuerdas y tubos"], ["C.4.3", "Resonancia y amortiguamiento"]
    ] },
    { id: "fc5", name: "C.5 · Efecto Doppler", secs: [["C.5.1", "El efecto Doppler"], ["C.5.2", "La luz y el efecto Doppler"]] },
    { id: "fd1", name: "D.1 · Campos gravitatorios", secs: [["D.1.1", "Kepler y gravitación universal"], ["D.1.2", "Campo gravitatorio e intensidad"]] },
    { id: "fd2", name: "D.2 · Campos eléctricos y magnéticos", secs: [
      ["D.2.1", "Carga eléctrica"], ["D.2.2", "Ley de Coulomb"], ["D.2.3", "Campos eléctricos"], ["D.2.4", "Campos magnéticos"]
    ] },
    { id: "fd3", name: "D.3 · Movimiento en campos electromagnéticos", secs: [
      ["D.3.1", "Partícula en un campo eléctrico uniforme"], ["D.3.2", "Partícula en un campo magnético uniforme"],
      ["D.3.3", "Magnitud de la fuerza magnética"], ["D.3.4", "Corriente y campos magnéticos"]
    ] }
  ]
});

// Carpeta temporal del examen de física: temas A, B.1 a B.3, B.5 sin Kirchhoff/fem/resistencia interna/divisores, C y D.
// Usa copias de las preguntas de la materia (ids con X delante; el juego la oculta). data/fis_examen.js las clona al cargar.
(function () {
  var base = window.SUBJECTS.filter(function (s) { return s.id === "fis"; })[0];
  var skip = { "B.5.5": 1 };
  var units = base.units.filter(function (u) { return u.id !== "fe1" && u.id.charAt(1) !== "e"; }).map(function (u) {
    return { id: "x" + u.id, name: u.name, secs: u.secs.filter(function (s) { return !skip[s[0]]; }).map(function (s) { return ["X" + s[0], s[1]]; }) };
  });
  window.SUBJECTS.push({
    id: "fisexam", lang: "es", name: "Examen de mañana · Física NM", color: "#ef7b45", icon: "pokeball",
    desc: "Carpeta temporal con los temas del examen: A, B.1 a B.3, circuitos (B.5) sin Kirchhoff, C y D.",
    units: units
  });
})();
