// Física NM · Preguntas con figura del tema A (vectores, gráficas, proyectiles, fuerzas, movimiento circular, trabajo).
// Las figuras están dibujadas en data/fisfig.js. Estas preguntas se agregan al final de cada sección.
QB.add("A.1.1", [
  { q: "En la figura, los vectores A y B se dibujaron cabeza a cola y C va de la cola de A a la punta de B. ¿Qué representa C?", o: ["La suma A + B", "La resta A − B", "La resta B − A", "El vector promedio de A y B"], a: 0, d: 1, img: "v-cabeza-cola",
    why: "En el método de cabeza a cola, el vector que une la cola del primero con la punta del último es la resultante A + B (A.1.1)." },
  { q: "En la figura, A y B parten del mismo punto y C une la punta de B con la punta de A. ¿Cuánto vale C?", o: ["A − B", "B − A", "A + B", "−(A + B)"], a: 0, d: 2, img: "v-resta",
    why: "Se cumple B + C = A, así que C = A − B: restar es sumar el vector opuesto (A.1.1)." },
  { q: "En la figura, ¿qué expresión da la componente horizontal A_x del vector A?", o: ["A cos θ", "A sen θ", "A tan θ", "A / cos θ"], a: 0, d: 1, img: "v-comp",
    why: "El lado adyacente al ángulo es A_x = A cos θ; la componente vertical es A_y = A sen θ (A.1.1)." },
  { q: "Un vector A de 20 unidades forma 60° con la horizontal, como en la figura. ¿Cuánto vale su componente vertical A_y?", o: ["17", "10", "35", "40"], a: 0, d: 2, img: "v-comp60",
    why: "A_y = A sen θ = 20 × sen 60° = 17.3 ≈ 17. La componente horizontal sería 20 cos 60° = 10 (A.1.1)." },
  { q: "En la figura, dos fuerzas perpendiculares de 4 N y 3 N actúan sobre un cuerpo. ¿Qué ángulo forma la resultante con la fuerza de 4 N?", o: ["37°", "53°", "75°", "30°"], a: 0, d: 2, img: "v-perp",
    why: "θ = tan⁻¹(3/4) = 36.9° ≈ 37°, medido desde la fuerza de 4 N. El ángulo de 53° es el que forma con la de 3 N (A.1.1)." },
  { q: "En la figura, un bote apunta al norte a 3.4 m s⁻¹ respecto al agua y la corriente va al este a 2.5 m s⁻¹. ¿Qué ángulo forma su velocidad real con el norte?", o: ["36°", "54°", "47°", "25°"], a: 0, d: 2, img: "v-rio",
    why: "θ = tan⁻¹(2.5/3.4) = 36.3° ≈ 36°, medido respecto a la dirección en que apunta el bote (A.1.1)." }
]);

QB.add("A.1.2", [
  { q: "En la gráfica x–t de la figura, ¿cuál es la velocidad del cuerpo entre 0 y 2 s?", o: ["3.0 m s⁻¹", "6.0 m s⁻¹", "1.5 m s⁻¹", "0.33 m s⁻¹"], a: 0, d: 1, img: "gr-xt-1",
    why: "La pendiente es la velocidad: Δx/Δt = 6/2 = 3.0 m s⁻¹ (A.1.2)." },
  { q: "En la gráfica x–t de la figura, ¿qué hace el cuerpo entre 2 s y 4 s?", o: ["Está en reposo", "Se mueve con velocidad constante", "Acelera de manera uniforme", "Regresa al origen"], a: 0, d: 1, img: "gr-xt-1",
    why: "La pendiente es cero: la posición no cambia, así que el cuerpo está en reposo (A.1.2)." },
  { q: "En la gráfica x–t de la figura, ¿cuál es la velocidad entre 4 s y 8 s?", o: ["−1.5 m s⁻¹", "+1.5 m s⁻¹", "−6.0 m s⁻¹", "−0.75 m s⁻¹"], a: 0, d: 2, img: "gr-xt-1",
    why: "Pendiente = (0 − 6)/(8 − 4) = −1.5 m s⁻¹. El signo negativo indica que regresa hacia el origen (A.1.2)." },
  { q: "En la gráfica x–t de la figura, ¿cuál es el desplazamiento total y cuál la distancia total recorrida en los 8 s?", o: ["Desplazamiento 0 m y distancia 12 m", "Desplazamiento 12 m y distancia 0 m", "Desplazamiento 0 m y distancia 0 m", "Desplazamiento 6 m y distancia 6 m"], a: 0, d: 2, img: "gr-xt-1",
    why: "Termina donde empezó (desplazamiento 0), pero recorrió 6 m de ida y 6 m de vuelta, es decir, 12 m (A.1.2)." },
  { q: "En la gráfica v–t de la figura, ¿cuál es el desplazamiento total del cuerpo?", o: ["20 m", "28 m", "16 m", "12 m"], a: 0, d: 2, img: "gr-vt-1",
    why: "El área bajo la gráfica es el desplazamiento: 4 + 12 + 4 = 20 m (triángulo de 2 s, rectángulo de 3 s × 4 m s⁻¹ y triángulo de 2 s) (A.1.2)." },
  { q: "En la gráfica v–t de la figura, ¿cuál es la aceleración entre 0 y 2 s?", o: ["2.0 m s⁻²", "4.0 m s⁻²", "0.50 m s⁻²", "8.0 m s⁻²"], a: 0, d: 1, img: "gr-vt-1",
    why: "La pendiente de v–t es la aceleración: a = Δv/Δt = 4/2 = 2.0 m s⁻² (A.1.2)." },
  { q: "En la gráfica v–t de la figura, ¿en qué intervalo es cero la aceleración?", o: ["Entre 2 s y 5 s", "Entre 0 y 2 s", "Entre 5 s y 7 s", "En ningún intervalo"], a: 0, d: 1, img: "gr-vt-1",
    why: "Una línea horizontal tiene pendiente cero: la velocidad es constante y la aceleración es nula (A.1.2)." },
  { q: "En la gráfica v–t de la figura, ¿cuál es la aceleración entre 5 s y 7 s?", o: ["−2.0 m s⁻²", "+2.0 m s⁻²", "−4.0 m s⁻²", "0 m s⁻²"], a: 0, d: 2, img: "gr-vt-1",
    why: "a = (0 − 4)/(7 − 5) = −2.0 m s⁻². El cuerpo frena (A.1.2)." },
  { q: "En la gráfica v–t de la figura, ¿cuál es la velocidad promedio durante los 7 s?", o: ["2.9 m s⁻¹", "4.0 m s⁻¹", "2.0 m s⁻¹", "3.5 m s⁻¹"], a: 0, d: 3, img: "gr-vt-1",
    why: "La velocidad promedio es el desplazamiento entre el tiempo: 20/7 = 2.9 m s⁻¹ (A.1.2)." }
]);

QB.add("A.1.4", [
  { q: "En la trayectoria de la figura, sin resistencia del aire, ¿en qué punto es mínima la rapidez del proyectil?", o: ["En C, el punto más alto", "En A, al lanzarse", "En B, mientras sube", "En D, al aterrizar"], a: 0, d: 1, img: "proy",
    why: "En el punto más alto v_y = 0 y solo queda la componente horizontal, que es la menor rapidez de todo el vuelo (A.1.4)." },
  { q: "En la figura, A y D están a la misma altura. Sin resistencia del aire, ¿qué se cumple para la rapidez del proyectil en esos puntos?", o: ["Es la misma en A y en D", "Es mayor en D", "Es mayor en A", "Es cero en ambos"], a: 0, d: 2, img: "proy",
    why: "La velocidad horizontal no cambia y, a igual altura, las componentes verticales tienen la misma magnitud; la rapidez es igual (A.1.4)." },
  { q: "En la figura, ¿cuál es la aceleración del proyectil en el punto C, el más alto?", o: ["9.8 m s⁻² hacia abajo", "Cero", "9.8 m s⁻² hacia arriba", "9.8 m s⁻² en dirección horizontal"], a: 0, d: 1, img: "proy",
    why: "La gravedad actúa durante todo el vuelo: a = 9.8 m s⁻² hacia abajo, incluso cuando v_y = 0 (A.1.4)." }
]);

QB.add("A.2.1", [
  { q: "Según la figura, ¿cuál es la fuerza resultante sobre el bloque?", o: ["6 N hacia la derecha", "14 N hacia la derecha", "6 N hacia la izquierda", "0 N"], a: 0, d: 1, img: "f-resultante",
    why: "Horizontalmente 10 − 4 = 6 N a la derecha. Las fuerzas verticales de 8 N se anulan (A.2.1)." },
  { q: "En la figura, ¿qué ocurre con el movimiento del bloque?", o: ["Acelera hacia la derecha, porque hay una resultante de 6 N", "Se mueve con velocidad constante, porque las fuerzas verticales se anulan", "Está en equilibrio, porque hay fuerzas en todas las direcciones", "Acelera hacia abajo, porque la fuerza hacia abajo es de 8 N"], a: 0, d: 2, img: "f-resultante",
    why: "La resultante no es cero (6 N a la derecha), así que según la segunda ley de Newton el bloque acelera en ese sentido (A.2.1)." }
]);

QB.add("A.2.3", [
  { q: "El bloque de 5.0 kg de la figura está en reposo sobre un plano inclinado 30°. ¿Cuánto vale la fuerza de fricción f?", o: ["24.5 N", "42.4 N", "49 N", "0 N"], a: 0, d: 2, img: "fbd-plano",
    why: "En reposo, f equilibra la componente del peso paralela al plano: f = mg sen 30° = 5.0 × 9.8 × 0.5 = 24.5 N (A.2.3)." },
  { q: "En la misma situación (bloque de 5.0 kg en reposo sobre un plano a 30°), ¿cuánto vale la fuerza normal N?", o: ["42.4 N", "24.5 N", "49 N", "56.6 N"], a: 0, d: 2, img: "fbd-plano",
    why: "N equilibra la componente del peso perpendicular al plano: N = mg cos 30° = 5.0 × 9.8 × 0.866 = 42.4 N (A.2.3)." }
]);

QB.add("A.2.8", [
  { q: "En la figura, la partícula describe una circunferencia en sentido antihorario. ¿Qué flecha representa la aceleración centrípeta?", o: ["Flecha 3", "Flecha 1", "Flecha 2", "Flecha 4"], a: 0, d: 1, img: "circ-mov",
    why: "La aceleración centrípeta apunta siempre hacia el centro de la circunferencia (A.2.8)." },
  { q: "En la misma figura, con giro antihorario, ¿qué flecha representa la velocidad de la partícula?", o: ["Flecha 2", "Flecha 4", "Flecha 1", "Flecha 3"], a: 0, d: 1, img: "circ-mov",
    why: "La velocidad es tangente a la trayectoria; en el punto de la derecha, con giro antihorario, apunta hacia arriba (A.2.8)." }
]);

QB.add("A.3.1", [
  { q: "La gráfica de la figura muestra la fuerza sobre un cuerpo en función de su posición. ¿Cuánto trabajo realiza la fuerza entre 0 y 6 m?", o: ["20 J", "24 J", "16 J", "12 J"], a: 0, d: 2, img: "gr-fx",
    why: "El trabajo es el área bajo la gráfica F–x: ½ × 2 × 4 + 4 × 4 = 4 + 16 = 20 J (A.3.1)." },
  { q: "En la gráfica F–x de la figura, ¿cuánto trabajo realiza la fuerza durante los primeros 2 m?", o: ["4.0 J", "8.0 J", "2.0 J", "16 J"], a: 0, d: 2, img: "gr-fx",
    why: "El área es un triángulo de base 2 m y altura 4 N: ½ × 2 × 4 = 4.0 J (A.3.1)." }
]);

// Figuras para preguntas que ya existían (se cuentan por su posición en la sección)
QB.img("A.1.1-5", "v-cabeza-cola");
QB.img("A.1.1-6", "v-triangulo");
QB.img("A.1.1-7", "v-bote");
QB.img("A.1.1-8", "v-bote");
QB.img("A.1.1-9", "v-comp30");
QB.img("A.1.1-10", "v-resta");
QB.img("A.1.1-11", "v-rio");
QB.img("A.1.1-12", "v-perp");
QB.img("A.1.3-9", "gr-vt-auto");
QB.img("A.1.3-10", "gr-vt-auto");
QB.img("A.1.4-4", "proy-60");
QB.img("A.1.4-5", "proy-60");
QB.img("A.1.4-6", "proy-60");
