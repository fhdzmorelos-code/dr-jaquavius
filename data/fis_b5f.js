// Física NM · Preguntas con figura de B.5 (circuitos). Las figuras están en data/fisfig.js.
QB.add("B.5.2", [
  { q: "¿Cuál de las gráficas V–I corresponde a un conductor óhmico a temperatura constante?", o: ["@vi-ohm", "@vi-fil", "@vi-hor", "@vi-int"], a: 0, d: 1,
    why: "Un conductor óhmico cumple V = IR con R constante: la gráfica V–I es una recta que pasa por el origen (B.5.2)." },
  { q: "¿Cuál de las gráficas V–I corresponde al filamento de una lámpara incandescente?", o: ["@vi-fil", "@vi-ohm", "@vi-hor", "@vi-int"], a: 0, d: 2,
    why: "Al aumentar la corriente el filamento se calienta y su resistencia aumenta, así que la curva V–I se inclina cada vez más (B.5.2)." }
]);

QB.add("B.5.3", [
  { q: "En el circuito de la figura, ¿qué corriente circula por el resistor de 2 Ω?", o: ["2.0 A", "3.0 A", "6.0 A", "9.0 A"], a: 0, d: 1, img: "c-serie",
    why: "R total = 4 + 2 = 6 Ω y I = V/R = 12/6 = 2.0 A. En serie la corriente es la misma en todos los puntos (B.5.3)." },
  { q: "En el circuito de la figura, ¿qué diferencia de potencial hay en el resistor de 4 Ω?", o: ["8.0 V", "4.0 V", "12 V", "6.0 V"], a: 0, d: 2, img: "c-serie",
    why: "I = 2.0 A y V = IR = 2.0 × 4 = 8.0 V; los 4.0 V restantes caen en el resistor de 2 Ω (B.5.3)." },
  { q: "¿Cuál es la resistencia total del circuito de la figura, con 3 Ω y 6 Ω en paralelo?", o: ["2.0 Ω", "9.0 Ω", "4.5 Ω", "0.50 Ω"], a: 0, d: 2, img: "c-paralelo",
    why: "1/R = 1/3 + 1/6 = 1/2, así que R = 2.0 Ω (B.5.3)." },
  { q: "En el circuito de la figura, ¿cuánta corriente pasa por el resistor de 3 Ω?", o: ["2.0 A", "1.0 A", "3.0 A", "4.0 A"], a: 0, d: 1, img: "c-paralelo",
    why: "Cada rama tiene los 6 V de la pila: I = V/R = 6/3 = 2.0 A (la rama de 6 Ω lleva 1.0 A) (B.5.3)." },
  { q: "En el circuito de la figura, ¿cuánta corriente entrega la pila?", o: ["3.0 A", "0.67 A", "1.5 A", "9.0 A"], a: 0, d: 2, img: "c-paralelo",
    why: "Las corrientes de las ramas se suman: 2.0 + 1.0 = 3.0 A, o bien 6/2.0 = 3.0 A con la resistencia total (B.5.3)." },
  { q: "¿Cuál es la resistencia total del circuito de la figura?", o: ["6.0 Ω", "13 Ω", "1.3 Ω", "9.0 Ω"], a: 0, d: 2, img: "c-mixto",
    why: "6 Ω y 3 Ω en paralelo dan 2.0 Ω, que están en serie con 4 Ω: R = 4 + 2 = 6.0 Ω (B.5.3)." },
  { q: "En el circuito de la figura, ¿qué diferencia de potencial hay en cada resistor de la parte en paralelo?", o: ["4.0 V", "8.0 V", "12 V", "2.0 V"], a: 0, d: 3, img: "c-mixto",
    why: "I = 12/6 = 2.0 A, así que el resistor de 4 Ω toma 8.0 V y quedan 12 − 8 = 4.0 V para la combinación en paralelo (B.5.3)." },
  { q: "En el circuito de la figura, ¿cuánta corriente pasa por el resistor de 6 Ω?", o: ["0.67 A", "1.3 A", "2.0 A", "1.0 A"], a: 0, d: 3, img: "c-mixto",
    why: "En paralelo V = 4.0 V, entonces I = 4.0/6 = 0.67 A (el de 3 Ω lleva 1.3 A y la suma es 2.0 A) (B.5.3)." },
  { q: "Los tres focos de la figura son idénticos. ¿Cuál brilla más?", o: ["A", "B", "C", "Los tres brillan igual"], a: 0, d: 2, img: "c-focos",
    why: "A recibe los 6.0 V completos; B y C están en serie y reciben 3.0 V cada uno. Con más corriente, A brilla más (B.5.3)." },
  { q: "Si el foco C de la figura se funde y su rama queda abierta, ¿qué le ocurre al foco A?", o: ["Su brillo no cambia", "Brilla más", "Brilla menos", "Se apaga"], a: 0, d: 2, img: "c-focos",
    why: "La rama de A sigue conectada directamente a la pila con 6.0 V, así que su brillo no cambia; B se apaga porque su rama queda abierta (B.5.3)." },
  { q: "En la figura, la pila de 9 V alimenta un resistor de 6 Ω. ¿Qué corriente indica el amperímetro ideal?", o: ["1.5 A", "0.67 A", "54 A", "15 A"], a: 0, d: 1, img: "c-amp",
    why: "I = V/R = 9/6 = 1.5 A. El amperímetro ideal no añade resistencia al circuito (B.5.3)." },
  { q: "En el mismo circuito de la figura, ¿qué diferencia de potencial indica el voltímetro ideal?", o: ["9.0 V", "1.5 V", "0 V", "6.0 V"], a: 0, d: 2, img: "c-amp",
    why: "El voltímetro está en paralelo con el resistor y el amperímetro ideal no tiene caída de potencial, así que mide los 9.0 V de la pila (B.5.3)." },
  { q: "¿Cuál de los circuitos conecta bien un amperímetro (A) para medir la corriente en R y un voltímetro (V) para medir la d. d. p. en R?", o: ["@cm-ok", "@cm-inv", "@cm-ss", "@cm-pp"], a: 0, d: 1,
    why: "El amperímetro va en serie con el componente y el voltímetro va en paralelo con él (B.5.3)." }
]);

// Figuras para preguntas que ya existían
QB.img("B.5.3-7", "c-r123");
QB.img("B.5.3-8", "c-focos");
QB.img("B.5.3-9", "c-xyz");
QB.img("B.5.4-4", "c-b54");
QB.img("B.5.4-5", "c-b54");
