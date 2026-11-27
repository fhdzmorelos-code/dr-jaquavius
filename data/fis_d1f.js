// Física NM · Preguntas con figura del tema D (campos). Las figuras están en data/fisfig.js.
QB.add("D.1.2", [
  { q: "En la figura, un satélite en A (a una distancia r del centro del planeta) experimenta un campo gravitatorio g. ¿Qué intensidad de campo hay en B, a 2r?", o: ["g/4", "g/2", "g/8", "g/√2"], a: 0, d: 2, img: "g-dist",
    why: "g = GM/r² es inversamente proporcional al cuadrado de la distancia: al duplicarla, g se reduce a la cuarta parte (D.1.2)." }
]);

QB.add("D.2.3", [
  { q: "¿Cuál de las figuras representa el campo eléctrico de una carga puntual positiva?", o: ["@ef-pos", "@ef-neg", "@ef-dip", "@ef-uni"], a: 0, d: 1,
    why: "Las líneas de campo salen de las cargas positivas y se alejan de ellas (D.2.3)." },
  { q: "¿Cuál de las figuras representa el campo eléctrico de una carga puntual negativa?", o: ["@ef-neg", "@ef-pos", "@ef-dip", "@ef-uni"], a: 0, d: 1,
    why: "Las líneas de campo entran en las cargas negativas (D.2.3)." },
  { q: "¿Cuál de las figuras representa un campo eléctrico uniforme?", o: ["@ef-uni", "@ef-pos", "@ef-neg", "@ef-dip"], a: 0, d: 1,
    why: "Entre dos placas paralelas con cargas opuestas, las líneas de campo son paralelas y equidistantes: el campo es uniforme (D.2.3)." },
  { q: "¿Cuál de las figuras representa el campo de dos cargas de signo opuesto (un dipolo)?", o: ["@ef-dip", "@ef-uni", "@ef-pos", "@ef-neg"], a: 0, d: 1,
    why: "Las líneas salen de la carga positiva y llegan a la negativa describiendo arcos entre ellas (D.2.3)." },
  { q: "Entre las placas de la figura (d = 2.0 cm, con 400 V), ¿cuánto vale la intensidad del campo eléctrico?", o: ["2.0 × 10⁴ V m⁻¹", "8.0 V m⁻¹", "200 V m⁻¹", "5.0 × 10⁻⁵ V m⁻¹"], a: 0, d: 2, img: "e-placas",
    why: "E = V/d = 400/0.020 = 2.0×10⁴ V m⁻¹ (D.2.3)." },
  { q: "¿En qué sentido se acelera el electrón de la figura?", o: ["Hacia la placa positiva, es decir, hacia arriba", "Hacia la placa negativa, es decir, hacia abajo", "Hacia la derecha, en paralelo a las placas", "No se acelera: el campo no actúa sobre los electrones"], a: 0, d: 1, img: "e-placas",
    why: "El campo apunta de la placa positiva a la negativa; la fuerza sobre una carga negativa es opuesta al campo (D.2.3)." },
  { q: "¿Cuánto vale la fuerza eléctrica sobre el electrón de la figura (q = 1.60 × 10⁻¹⁹ C)?", o: ["3.2 × 10⁻¹⁵ N", "6.4 × 10⁻¹⁷ N", "8.0 × 10⁻²⁴ N", "3.2 × 10⁻¹³ N"], a: 0, d: 2, img: "e-placas",
    why: "F = qE = 1.60×10⁻¹⁹ × 2.0×10⁴ = 3.2×10⁻¹⁵ N (D.2.3)." }
]);

QB.add("D.2.4", [
  { q: "En la figura, la corriente sale del papel hacia quien mira. ¿En qué sentido apuntan las líneas de campo magnético alrededor del alambre?", o: ["Antihorario", "Horario", "Radialmente hacia afuera", "Radialmente hacia el alambre"], a: 0, d: 2, img: "b-sale",
    why: "Con el pulgar en el sentido de la corriente (hacia afuera del papel), los dedos giran en sentido antihorario (D.2.4)." },
  { q: "En la misma figura, ¿hacia dónde apunta el campo magnético en el punto P?", o: ["Hacia la parte superior de la página", "Hacia la parte inferior de la página", "Hacia la izquierda", "Hacia la derecha"], a: 0, d: 2, img: "b-sale",
    why: "El campo es tangente a la circunferencia; en el punto de la derecha, con giro antihorario, apunta hacia arriba (D.2.4)." },
  { q: "En la figura, la corriente entra en el papel. ¿En qué sentido apuntan las líneas de campo magnético alrededor del alambre?", o: ["Horario", "Antihorario", "Radialmente hacia afuera", "Radialmente hacia el alambre"], a: 0, d: 2, img: "b-entra",
    why: "Con el pulgar hacia adentro del papel, los dedos giran en sentido horario (D.2.4)." },
  { q: "En la misma figura (corriente hacia adentro del papel), ¿hacia dónde apunta el campo magnético en el punto P?", o: ["Hacia la parte inferior de la página", "Hacia la parte superior de la página", "Hacia la izquierda", "Hacia la derecha"], a: 0, d: 2, img: "b-entra",
    why: "El campo es tangente a la circunferencia; en el punto de la derecha, con giro horario, apunta hacia abajo (D.2.4)." }
]);

QB.add("D.3.2", [
  { q: "Una carga positiva se mueve hacia la derecha en el campo magnético de la figura, que apunta hacia adentro del papel. ¿Hacia dónde apunta la fuerza magnética?", o: ["Hacia la parte superior de la página", "Hacia la parte inferior de la página", "Hacia la izquierda", "Hacia el lector, fuera del papel"], a: 0, d: 2, img: "b-f-in-pos",
    why: "F = qv × B; con v hacia la derecha y B hacia adentro, la regla de la mano derecha da una fuerza hacia arriba para una carga positiva (D.3.2)." },
  { q: "Un electrón se mueve hacia la derecha en el campo magnético de la figura, que apunta hacia adentro del papel. ¿Hacia dónde apunta la fuerza magnética?", o: ["Hacia la parte inferior de la página", "Hacia la parte superior de la página", "Hacia la izquierda", "Hacia el lector, fuera del papel"], a: 0, d: 2, img: "b-f-in-neg",
    why: "Para una carga negativa la fuerza es opuesta a la de una carga positiva con la misma velocidad: apunta hacia abajo (D.3.2)." },
  { q: "Una carga positiva se mueve hacia la derecha en el campo magnético de la figura, que apunta hacia afuera del papel. ¿Hacia dónde apunta la fuerza magnética?", o: ["Hacia la parte inferior de la página", "Hacia la parte superior de la página", "Hacia la izquierda", "Hacia el lector, fuera del papel"], a: 0, d: 2, img: "b-f-out-pos",
    why: "Al invertir el campo se invierte la fuerza respecto al caso en que B apunta hacia adentro: ahora apunta hacia abajo (D.3.2)." }
]);
