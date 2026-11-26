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
        ["2.1", "Introduction to HRM"], ["2.2", "Organisational structure"], ["2.3", "Leadership and management"]
      ] },
      { id: "u3", name: "3 · Finance and Accounts", secs: [
        ["3.1", "Introduction to finance"], ["3.2", "Sources of finance"], ["3.3", "Costs and revenues"]
      ] },
      { id: "u4", name: "4 · Marketing", secs: [
        ["4.1", "Introduction to marketing"], ["4.2", "Marketing planning"], ["4.4", "Market research"], ["4.5", "The seven Ps"]
      ] },
      { id: "p1", name: "PAPER 1 · Foot Power Ltd (FP)", secs: [
        ["P1", "Case study: EcoStep tiles (temporary)"]
      ] }
    ]
  }
];
