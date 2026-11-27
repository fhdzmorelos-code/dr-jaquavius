// Física NM · Preguntas con figura del tema C (ondas). Las figuras están en data/fisfig.js.
QB.add("C.2.1", [
  { q: "En la figura de las partículas de una onda longitudinal, ¿qué representa la región marcada con X?", o: ["Una compresión", "Una rarefacción", "Un nodo", "Una cresta"], a: 0, d: 1, img: "long",
    why: "En X las partículas están más juntas: es una compresión (C.2.1)." },
  { q: "En la misma figura de una onda longitudinal, ¿qué representa la región marcada con Y?", o: ["Una rarefacción", "Una compresión", "Un antinodo", "Un valle"], a: 0, d: 1, img: "long",
    why: "En Y las partículas están más separadas: es una rarefacción (C.2.1)." },
  { q: "En la figura, ¿qué representa la distancia d entre dos compresiones consecutivas?", o: ["La longitud de onda", "La amplitud", "El periodo", "Media longitud de onda"], a: 0, d: 1, img: "long",
    why: "En una onda longitudinal, la longitud de onda es la distancia entre dos compresiones (o dos rarefacciones) consecutivas (C.2.1)." }
]);

QB.add("C.2.2", [
  { q: "En la gráfica de la onda de la figura, ¿cuál es la amplitud?", o: ["2.0 cm", "4.0 cm", "6.0 m", "3.0 m"], a: 0, d: 1, img: "onda-x",
    why: "La amplitud es el desplazamiento máximo respecto a la posición de equilibrio: 2.0 cm (C.2.2)." },
  { q: "En la gráfica de la onda de la figura, ¿cuál es la longitud de onda?", o: ["6.0 m", "3.0 m", "12 m", "2.0 m"], a: 0, d: 1, img: "onda-x",
    why: "La longitud de onda es la distancia entre dos crestas consecutivas: de 1.5 m a 7.5 m hay 6.0 m (C.2.2)." },
  { q: "La onda de la gráfica de la figura viaja a 3.0 m s⁻¹. ¿Cuál es su frecuencia?", o: ["0.50 Hz", "2.0 Hz", "18 Hz", "0.17 Hz"], a: 0, d: 2, img: "onda-x",
    why: "f = v/λ = 3.0/6.0 = 0.50 Hz (C.2.2)." },
  { q: "En la gráfica del desplazamiento en función del tiempo de la figura, ¿cuál es el periodo de la onda?", o: ["0.20 s", "0.10 s", "0.40 s", "5.0 s"], a: 0, d: 1, img: "onda-t",
    why: "El periodo es el tiempo de una oscilación completa: de una cresta a la siguiente pasan 0.20 s (C.2.2)." },
  { q: "Según la gráfica del desplazamiento en función del tiempo de la figura, ¿cuál es la frecuencia de la onda?", o: ["5.0 Hz", "0.20 Hz", "2.5 Hz", "10 Hz"], a: 0, d: 1, img: "onda-t",
    why: "f = 1/T = 1/0.20 = 5.0 Hz (C.2.2)." }
]);

QB.add("C.3.2", [
  { q: "Un rayo pasa del aire (n = 1.0) al vidrio (n = 1.5) con un ángulo de incidencia de 45°, como en la figura. ¿Cuál es el ángulo de refracción?", o: ["28°", "30°", "68°", "45°"], a: 0, d: 2, img: "snell",
    why: "n₁ sen θ₁ = n₂ sen θ₂ → sen θ₂ = sen 45°/1.5 = 0.471, así que θ₂ = 28° (C.3.2)." },
  { q: "En la figura, al pasar del aire al vidrio, ¿cómo cambia la rapidez de la luz?", o: ["Disminuye", "Aumenta", "No cambia", "Se hace cero"], a: 0, d: 1, img: "snell",
    why: "En el vidrio v = c/n = c/1.5, menor que en el aire; por eso el rayo se acerca a la normal (C.3.2)." },
  { q: "Un rayo incide a 50° dentro del vidrio (n = 1.5) sobre la frontera con el aire, como en la figura. ¿Qué ocurre?", o: ["Reflexión interna total", "Se refracta alejándose de la normal", "Se refracta acercándose a la normal", "Se refracta con un ángulo de 50°"], a: 0, d: 3, img: "tir-in",
    why: "El ángulo crítico cumple sen θc = 1/1.5, o sea θc = 42°. Como 50° es mayor que 42°, la luz se refleja totalmente (C.3.2)." },
  { q: "¿Cuánto vale el ángulo crítico en la frontera vidrio-aire (n = 1.5) de la figura?", o: ["42°", "34°", "48°", "56°"], a: 0, d: 2, img: "tir-in",
    why: "sen θc = n₂/n₁ = 1/1.5 = 0.667, entonces θc = 41.8° ≈ 42° (C.3.2)." }
]);

QB.add("C.3.3", [
  { q: "En la figura, las fuentes S₁ y S₂ emiten en fase. En el punto P la diferencia de camino es L₂ − L₁ = 1.5 λ. ¿Qué ocurre en P?", o: ["Interferencia destructiva: una franja oscura", "Interferencia constructiva: una franja brillante", "Las ondas llegan en fase y duplican su amplitud", "No hay superposición de ondas en P"], a: 0, d: 2, img: "young",
    why: "Una diferencia de camino de un número semientero de longitudes de onda (0.5λ, 1.5λ…) produce interferencia destructiva (C.3.3)." },
  { q: "En la misma figura, ahora la diferencia de camino es L₂ − L₁ = 2 λ. ¿Qué ocurre en P?", o: ["Interferencia constructiva: una franja brillante", "Interferencia destructiva: una franja oscura", "Las ondas llegan en oposición de fase y se anulan", "No hay superposición de ondas en P"], a: 0, d: 2, img: "young",
    why: "Una diferencia de camino igual a un número entero de longitudes de onda hace que las ondas lleguen en fase: interferencia constructiva (C.3.3)." }
]);

QB.add("C.4.2", [
  { q: "¿Cuál de las figuras muestra el tercer armónico de una cuerda fija en ambos extremos?", o: ["@std-3", "@std-1", "@std-2", "@std-4"], a: 0, d: 1,
    why: "El armónico n tiene n antinodos (n medias longitudes de onda a lo largo de la cuerda): el tercero tiene tres (C.4.2)." },
  { q: "¿Cuál de las figuras muestra el modo fundamental (primer armónico) de una cuerda fija en ambos extremos?", o: ["@std-1", "@std-2", "@std-3", "@std-4"], a: 0, d: 1,
    why: "En el modo fundamental cabe media longitud de onda y hay un solo antinodo (C.4.2)." },
  { q: "La cuerda de la figura mide 1.2 m y está fija en ambos extremos. ¿Cuál es la longitud de onda de este modo?", o: ["0.80 m", "1.2 m", "0.40 m", "2.4 m"], a: 0, d: 2, img: "std-3L",
    why: "En la figura caben tres medias longitudes de onda: 3 × (λ/2) = L, así que λ = 2L/3 = 0.80 m (C.4.2)." },
  { q: "Si la rapidez de las ondas en la cuerda de la figura (L = 1.2 m, tres antinodos) es 48 m s⁻¹, ¿qué frecuencia tiene este modo?", o: ["60 Hz", "40 Hz", "120 Hz", "30 Hz"], a: 0, d: 3, img: "std-3L",
    why: "λ = 0.80 m y f = v/λ = 48/0.80 = 60 Hz (C.4.2)." },
  { q: "El tubo de la figura está cerrado en un extremo y abierto en el otro, y mide 0.50 m. ¿Cuál es la longitud de onda de su primer armónico?", o: ["2.0 m", "1.0 m", "0.50 m", "0.25 m"], a: 0, d: 2, img: "tubo-c",
    why: "En un tubo abierto-cerrado, λ₁ = 4L = 4 × 0.50 = 2.0 m (C.4.2)." }
]);

QB.add("C.5.1", [
  { q: "La fuente de la figura se mueve hacia la derecha. ¿En qué punto mide un observador la frecuencia más alta?", o: ["En A, delante de la fuente", "En B, detrás de la fuente", "En A y en B por igual", "En ninguno: la frecuencia no cambia"], a: 0, d: 1, img: "doppler",
    why: "Delante de la fuente los frentes de onda quedan más juntos (λ menor), así que la frecuencia percibida es mayor (C.5.1)." },
  { q: "En la figura, ¿cómo es la longitud de onda que mide el observador en B respecto a la que emite la fuente?", o: ["Mayor, porque los frentes de onda llegan más separados", "Menor, porque los frentes de onda llegan más juntos", "Igual, porque la rapidez de la onda no cambia", "Cero, porque la fuente se aleja de B"], a: 0, d: 2, img: "doppler",
    why: "Detrás de la fuente, que se aleja, los frentes se separan: λ aumenta y la frecuencia percibida disminuye (C.5.1)." }
]);
