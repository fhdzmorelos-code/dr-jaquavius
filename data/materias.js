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
      ] }
    ]
  }
];

// Carpeta Exam: copia aparte de los temas de la lista inicial (1.1–1.6, 2.1–2.3, 3.1–3.3, 4.1, 4.2, 4.4, 4.5) más el caso Paper 1 (FP).
// Sus preguntas son copias congeladas (data/ex_*.js); los ids de sección llevan una X delante y el juego la oculta.
(function () {
  var base = window.SUBJECTS[0];
  var units = base.units.slice(0, 4).map(function (u) {
    return { id: "x" + u.id, name: u.name, secs: u.secs.map(function (s) { return ["X" + s[0], s[1]]; }) };
  });
  units.push({ id: "xp1", name: "PAPER 1 · Foot Power Ltd (FP)", secs: [["P1", "Case study: EcoStep tiles (temporary)"]] });
  window.SUBJECTS.push({
    id: "bmexam", name: "Exam folder · Business Management HL", color: "#ef7b45", icon: "pokeball",
    desc: "A separate copy of the first topics, kept as it is for exam practice, plus the Paper 1 case study.",
    units: units
  });
})();
