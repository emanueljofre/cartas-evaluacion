/* Mazo seed — Álgebra · Unidad 02 · Razonamientos y cuantificadores
   Campos de contenido con String.raw`...` (LaTeX literal). */
FLASHCARDS.deck({
  materia: "algebra",
  unidad: "02-razonamientos",
  titulo: "Razonamientos",
  cards: [
    {
      id: "alg-u02-001",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["notacion", "conclusion"],
      fuente: ["algebra/repasos/resumen-glosario-notacion.md"],
      pregunta: String.raw`¿Qué simboliza $\therefore$ y qué precede?`,
      respuesta: String.raw`«**Por lo tanto**». Precede a la **conclusión** de un razonamiento.

También: «luego», «en consecuencia». Ej: $p_1, p_2 \therefore c$.`,
    },
    {
      id: "alg-u02-002",
      tipo: "concepto",
      dificultad: "media",
      tags: ["validez"],
      fuente: "resumen",
      pregunta: String.raw`¿Cuándo un razonamiento $p_1, p_2, \dots, p_n \therefore c$ es **válido**?`,
      respuesta: String.raw`Es válido **si y solo si** el condicional asociado es una **tautología**:
$$(p_1 \land p_2 \land \dots \land p_n) \to c$$
Equivale a: si todas las premisas son V, la conclusión es necesariamente V.`,
    },
    {
      id: "alg-u02-003",
      tipo: "concepto",
      dificultad: "media",
      tags: ["inferencia", "modus-ponens", "modus-tollens"],
      fuente: ["algebra/repasos/resumen-glosario-notacion.md"],
      pregunta: String.raw`Enunciá el **Modus Ponens** y el **Modus Tollens**.`,
      respuesta: String.raw`- **Modus Ponens**: $\;p \to q,\; p \;\therefore\; q$
- **Modus Tollens**: $\;p \to q,\; \lnot q \;\therefore\; \lnot p$

Ambas son reglas de inferencia (esquemas válidos, toda regla es una tautología).`,
    },
    {
      id: "alg-u02-004",
      tipo: "texto",
      dificultad: "facil",
      tags: ["validez", "concepto"],
      fuente: ["algebra/transcripciones/2026-03-02.rtf"],
      pregunta: String.raw`¿Por qué un razonamiento se dice «válido o inválido» y nunca «verdadero o falso»?`,
      respuesta: String.raw`Porque la validez es una propiedad de la **forma** (la relación premisas $\to$ conclusión), no del valor de verdad de las proposiciones.

Las **proposiciones** son V/F; los **razonamientos** son válidos/inválidos.`,
    },
    {
      id: "alg-u02-005",
      tipo: "completar",
      dificultad: "media",
      tags: ["condicion", "suficiente-necesaria"],
      fuente: ["algebra/repasos/resumen-glosario-notacion.md"],
      pregunta: String.raw`Completá: en $p \to q$, $\;p$ es condición ____ para $q$, y $q$ es condición ____ para $p$.`,
      respuesta: String.raw`$p$ es condición **suficiente** para $q$; $\;q$ es condición **necesaria** para $p$.

«Necesaria **y** suficiente» $\Rightarrow$ bicondicional $\leftrightarrow$.`,
    },
    {
      id: "alg-u02-006",
      tipo: "practica",
      tags: ["validez", "reglas-de-inferencia", "reduccion-al-absurdo", "final"],
      fuente: ["algebra/unidad-02-razonamientos/ejercicios/guiado-razonamiento-guiado-para-demostrar-la-validez-de-un-razonamiento.pdf","algebra/unidad-02-razonamientos/ejercicios/razonamientos.pdf","algebra/cheatsheets/unidad-02-razonamientos.html"],
      concepto: String.raw`Determinar la validez de un razonamiento (válido sii $(p_1\land\dots\land p_n)\to c$ es tautología). Sube por ejes: regla básica → silogismo → detectar un INVÁLIDO (contraejemplo) → cadena multi-paso → simbolizar un enunciado y demostrar.`,
      variantes: [
        // N1 — reglas básicas
        [
          { pregunta: String.raw`¿Es válido? $\;p \to q,\; p \;\therefore\; q$`, respuesta: String.raw`**Válido** — es el **Modus Ponens**. Si $p\to q$ y $p$ son V, entonces $q$ es V.`, pista: "Mirá si la forma coincide con una regla conocida (MP, MT, silogismos)." },
          { pregunta: String.raw`¿Es válido? $\;p \to q,\; \lnot q \;\therefore\; \lnot p$`, respuesta: String.raw`**Válido** — es el **Modus Tollens**. Por absurdo: si $\lnot p=F$ entonces $p=V$, y con $\lnot q=V$ ($q=F$) la premisa $p\to q=V\to F=F$, contradicción.` },
        ],
        // N2 — silogismos
        [
          { pregunta: String.raw`¿Es válido? $\;p \to q,\; q \to r \;\therefore\; p \to r$`, respuesta: String.raw`**Válido** — **silogismo hipotético** (se encadenan las implicaciones).` },
          { pregunta: String.raw`¿Es válido? $\;p \lor q,\; \lnot p \;\therefore\; q$`, respuesta: String.raw`**Válido** — **silogismo disyuntivo**: si una opción de la disyunción falla, vale la otra.` },
        ],
        // N3 — detectar un INVÁLIDO (falacia) con contraejemplo
        [
          { pregunta: String.raw`¿Es válido? $\;p \to q,\; q \;\therefore\; p$`, respuesta: String.raw`**Inválido** — falacia de **afirmar el consecuente**. Contraejemplo $p=F,\ q=V$: las dos premisas son V ($p\to q=V$, $q=V$) pero la conclusión $p=F$.` },
          { pregunta: String.raw`¿Es válido? $\;p \to q,\; \lnot p \;\therefore\; \lnot q$`, respuesta: String.raw`**Inválido** — falacia de **negar el antecedente**. Contraejemplo $p=F,\ q=V$: premisas V ($p\to q=V$, $\lnot p=V$) y conclusión $\lnot q=F$.` },
        ],
        // N4 — multi-paso (transformación / reducción al absurdo)
        [
          { pregunta: String.raw`Demostrá la validez: $\;(p \land q) \to r,\; p \to \lnot r \;\therefore\; \lnot p \lor \lnot q$`, respuesta: String.raw`1. Contrarrecíproco de la 2.ª: $p\to\lnot r \equiv r\to\lnot p$.
2. Silogismo hipotético con la 1.ª: $(p\land q)\to\lnot p$.
3. Equiv. implicación + De Morgan: $\equiv (\lnot p\lor\lnot q)\lor\lnot p$.
4. Idempotencia: $\equiv \lnot p\lor\lnot q$ ✓ → **válido**.` },
          { pregunta: String.raw`Por reducción al absurdo: $\;p\to q,\; \lnot s\to p,\; q\to r,\; \lnot t\to\lnot s,\; \lnot r \;\therefore\; t$`, respuesta: String.raw`Asumo conclusión F ($t=F$) y premisas V:
$\lnot t=V \Rightarrow \lnot s=V \Rightarrow p=V \Rightarrow q=V \Rightarrow r=V$; pero $\lnot r=V$ pide $r=F$.
$r=V$ y $r=F$ → **contradicción** → **válido**.` },
        ],
        // N5 — simbolizar un enunciado y demostrar
        [
          { pregunta: String.raw`Simbolizá y demostrá: «Cuando salgo sin paraguas, llueve. Si está despejado, no llueve. Mañana estará despejado o habrá niebla. Saldré sin paraguas. $\therefore$ Llueve o hay niebla.»`, respuesta: String.raw`$p$: sin paraguas, $q$: llueve, $r$: despejado, $s$: niebla → $p\to q,\ r\to\lnot q,\ r\lor s,\ p \therefore q\lor s$.
1. MP ($p\to q,\ p$) → $q$. 2. Contrarrecíproco $r\to\lnot q \equiv q\to\lnot r$; MP → $\lnot r$. 3. Silogismo disyuntivo ($r\lor s,\ \lnot r$) → $s$. 4. Adición → $q\lor s$ ✓ → **válido**.` },
          { pregunta: String.raw`Simbolizá y demostrá: «Si estudio, apruebo. Si apruebo, festejo. No festejé. $\therefore$ No estudié.»`, respuesta: String.raw`$e$: estudio, $a$: apruebo, $f$: festejo → $e\to a,\ a\to f,\ \lnot f \therefore \lnot e$.
MT con $a\to f$ y $\lnot f$ → $\lnot a$; MT con $e\to a$ y $\lnot a$ → $\lnot e$ ✓ → **válido** (doble Modus Tollens).` },
        ],
      ],
    },
    {
      id: "alg-u02-007",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      tags: ["valor-de-verdad", "condicional"],
      fuente: ["algebra/examenes/parcial-1.md"],
      pregunta: String.raw`Sabiendo que $p$ es **verdadera**, ¿en cuáles casos esa información es suficiente para determinar el valor de verdad?

$$\text{I. } (p \lor q) \leftrightarrow (\lnot p \land \lnot q)$$
$$\text{II. } (p \land q) \to (p \lor r)$$
$$\text{III. } (p \to q) \to r$$`,
      opciones: ["Solo I", "Solo II", "I y II", "I y III", "Todas"],
      correcta: 2,
      respuesta: String.raw`Respuesta: **I y II**.

- **I**: $p = V \Rightarrow p \lor q = V$ y $\lnot p \land \lnot q = F$. Queda $V \leftrightarrow F = F$. **Determinada** (sin importar $q$).
- **II**: $p = V \Rightarrow p \lor r = V$. Consecuente V $\Rightarrow$ el condicional es V. **Determinada**.
- **III**: depende de $q$ (en $p \to q$) y de $r$. **No** determinada.`,
    },
    {
      id: "alg-u02-008",
      tipo: "completar",
      dificultad: "facil",
      tags: ["validez", "metodos", "final"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf", "algebra/cheatsheets/unidad-02-razonamientos.html"],
      pregunta: String.raw`La validez de un razonamiento se puede demostrar de **4 formas**: ____, ____, ____ y ____.`,
      respuesta: String.raw`1. **Tabla de verdad**
2. **Método directo**
3. **Reducción al absurdo**
4. **Reglas de inferencia**`,
    },
    {
      id: "alg-u02-009",
      tipo: "texto",
      dificultad: "media",
      tags: ["validez", "metodo-directo"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf"],
      pregunta: String.raw`¿En qué consiste el **método directo** para probar la validez de un razonamiento?`,
      respuesta: String.raw`Se **asumen todas las premisas verdaderas** y, deduciendo paso a paso (por el significado de cada conectivo), se prueba que la **conclusión es necesariamente V**.

Conviene arrancar por la premisa que fija el valor de las proposiciones simples (p. ej. una que sea un solo literal).`,
    },
    {
      id: "alg-u02-010",
      tipo: "concepto",
      dificultad: "media",
      tags: ["teoremas", "demostraciones", "final"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf", "algebra/cheatsheets/unidad-02-razonamientos.html"],
      pregunta: String.raw`¿Qué es un **teorema** en términos de razonamiento, y qué son la hipótesis y la tesis?`,
      respuesta: String.raw`Un **teorema** es un razonamiento válido donde:
- las **premisas** forman la **hipótesis** ($H$),
- la **conclusión** es la **tesis** ($T$).

Demostrarlo es probar $H \to T$ aplicando propiedades y definiciones.`,
    },
    {
      id: "alg-u02-011",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["demostraciones", "directo-indirecto", "final"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf", "algebra/cheatsheets/unidad-02-razonamientos.html"],
      pregunta: String.raw`Para demostrar un teorema $H \to T$, ¿en qué se diferencian el **método directo** y el **método indirecto**?`,
      respuesta: String.raw`- **Directo**: se acepta la **verdad de la hipótesis** y, aplicando propiedades y definiciones, se deduce la **verdad de la tesis**. $\;H\ V \Rightarrow T\ V$.
- **Indirecto**: se acepta la **falsedad de la tesis** ($\lnot T$) y se deduce la **falsedad de la hipótesis** ($\lnot H$). Es el contrarrecíproco $\lnot T \to \lnot H$.`,
    },
    {
      id: "alg-u02-012",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["demostraciones", "absurdo", "elaboracion"],
      fuente: ["algebra/cheatsheets/unidad-02-razonamientos.html"],
      pregunta: String.raw`¿En qué se diferencian el **método indirecto** y la **reducción al absurdo**? (ambos arrancan negando la conclusión)`,
      respuesta: String.raw`- **Indirecto**: desde $\lnot T$ se deduce $\lnot H$ en **una sola cadena** (contrarrecíproco $\lnot T \to \lnot H$).
- **Absurdo**: se asumen **a la vez** las premisas V **y** la conclusión F, y se opera hasta que **algo choque** (una contradicción $r \land \lnot r$). Si la hay, el razonamiento es válido.`,
    },
    {
      id: "alg-u02-013",
      tipo: "texto",
      dificultad: "media",
      tags: ["inferencia", "silogismos"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf"],
      pregunta: String.raw`Enunciá el **silogismo hipotético** y el **silogismo disyuntivo**.`,
      respuesta: String.raw`- **Silogismo hipotético** (encadena implicaciones): $\;p \to q,\; q \to r \;\therefore\; p \to r$
- **Silogismo disyuntivo** (si una opción falla, vale la otra): $\;p \lor q,\; \lnot p \;\therefore\; q$`,
    },
    {
      id: "alg-u02-014",
      tipo: "texto",
      dificultad: "media",
      tags: ["inferencia"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf"],
      pregunta: String.raw`Enunciá las reglas de **simplificación**, **adición** y **conjunción**.`,
      respuesta: String.raw`- **Simplificación**: $\;p \land q \;\therefore\; p$
- **Adición**: $\;p \;\therefore\; p \lor q$ (con cualquier $q$)
- **Conjunción**: $\;p,\; q \;\therefore\; p \land q$`,
    },
    {
      id: "alg-u02-015",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["inferencia", "dilemas"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf"],
      pregunta: String.raw`¿Qué regla de inferencia es? $$p \to q,\quad r \to s,\quad p \lor r \;\therefore\; q \lor s$$`,
      opciones: ["Dilema constructivo", "Dilema destructivo", "Demostración por casos", "Silogismo hipotético"],
      correcta: 0,
      respuesta: String.raw`Es el **dilema constructivo**. Para contrastar:
- **Dilema destructivo**: $p \to q,\; r \to s,\; \lnot q \lor \lnot s \;\therefore\; \lnot p \lor \lnot r$.
- **Demostración por casos**: $p \to r,\; q \to r \;\therefore\; (p \lor q) \to r$.`,
    },
    {
      id: "alg-u02-018",
      tipo: "completar",
      dificultad: "media",
      tags: ["equivalencias", "contrarreciproco"],
      fuente: ["algebra/cheatsheets/unidad-02-razonamientos.html"],
      pregunta: String.raw`Ley del **contrarrecíproco**: $\;p \to q \equiv$ ____ .`,
      respuesta: String.raw`$$p \to q \equiv \lnot q \to \lnot p$$
Se da vuelta y se niegan ambos miembros. Es la base del método indirecto.`,
    },
    {
      id: "alg-u02-019",
      tipo: "concepto",
      dificultad: "media",
      tags: ["equivalencias", "implicacion"],
      fuente: ["algebra/cheatsheets/unidad-02-razonamientos.html"],
      pregunta: String.raw`¿A qué disyunción equivale $p \to q$, y por qué sirve en las demostraciones?`,
      respuesta: String.raw`$$p \to q \equiv \lnot p \lor q$$
Permite convertir implicaciones en disyunciones (y viceversa) para aplicar De Morgan, conmutativa, etc., y encadenar pasos hasta la conclusión.`,
    },
    {
      id: "alg-u02-020",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["funcion-proposicional", "cuantificadores"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf"],
      pregunta: String.raw`¿Qué es una **función proposicional** $p(x)$ y por qué no es (todavía) una proposición?`,
      respuesta: String.raw`Es una expresión con un **sujeto** indeterminado (variable $x, y, z\dots$) y un **predicado** (mayúscula: adjetivo, sustantivo o verbo).

No es proposición porque, al no conocer el valor de la variable, **no se le puede asignar V o F**. Se vuelve proposición al **ejemplificar** o **cuantificar**.`,
    },
    {
      id: "alg-u02-021",
      tipo: "completar",
      dificultad: "facil",
      tags: ["funcion-proposicional", "pasaje"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf"],
      pregunta: String.raw`Una función proposicional se transforma en proposición por dos vías: ____ y ____.`,
      respuesta: String.raw`- **Ejemplificación**: sustituir la variable por valores $a, b, c\dots$ de un conjunto **referencial**.
- **Cuantificación**: anteponer $\forall$ o $\exists$.`,
    },
    {
      id: "alg-u02-022",
      tipo: "concepto",
      dificultad: "media",
      tags: ["funcion-proposicional", "conjunto-de-verdad"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf"],
      pregunta: String.raw`¿Qué es el **conjunto de verdad** de una función proposicional $p(x)$ definida en un conjunto?`,
      respuesta: String.raw`Es el conjunto de **todos los elementos** que **hacen verdadera** a $p(x)$.

Ej.: si $p(x): x^2 = 4$ sobre $\mathbb{Z}$, el conjunto de verdad es $\{-2, 2\}$.`,
    },
    {
      id: "alg-u02-023",
      tipo: "completar",
      dificultad: "facil",
      tags: ["cuantificadores", "variable-ligada"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf"],
      pregunta: String.raw`Una variable **cuantificada** queda ____ (bajo el ____ del cuantificador); sin cuantificar es ____.`,
      respuesta: String.raw`Cuantificada $\Rightarrow$ **ligada**, bajo el **alcance** del cuantificador. Sin cuantificar $\Rightarrow$ **libre**.

Con varias variables, queda proposición solo si **todas** se cuantifican.`,
    },
    {
      id: "alg-u02-024",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["cuantificadores", "universal"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf", "algebra/cheatsheets/unidad-02-razonamientos.html"],
      pregunta: String.raw`Cuantificador **universal** $\forall$: ¿cómo se lee y cuándo es V o F?`,
      respuesta: String.raw`Se lee «para todo / todos / cualquiera». $\;\forall x: p(x)$.

- **V** cuando **todos** los elementos del referencial hacen verdadera a $p(x)$.
- Basta **un contraejemplo** para que sea **F**. Ej.: $\forall x \in \mathbb{R}: x > 0$ es F (con $x = -1$).`,
    },
    {
      id: "alg-u02-025",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["cuantificadores", "existencial"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf", "algebra/cheatsheets/unidad-02-razonamientos.html"],
      pregunta: String.raw`Cuantificador **existencial** $\exists$: ¿cómo se lee y cuándo es V?`,
      respuesta: String.raw`Se lee «existe / existe algún / algunos / hay». $\;\exists x: p(x)$.

Es **V** cuando **al menos uno** de los elementos del referencial hace verdadera a $p(x)$. Ej.: $\exists x \in \mathbb{R}: x^2 = 4$ es V (con $x = 2$).`,
    },
    {
      id: "alg-u02-026",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["cuantificadores", "orden"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf"],
      pregunta: String.raw`¿Por qué $\forall x \in \mathbb{Z},\, \exists y \in \mathbb{Z}: x + y = 8$ es **verdadera** pero $\exists y \in \mathbb{Z},\, \forall x \in \mathbb{Z}: x + y = 8$ es **falsa**?`,
      respuesta: String.raw`- $\forall x\, \exists y$: para **cada** $x$ se elige un $y$ **distinto** ($y = 8 - x$). Siempre se puede $\Rightarrow$ **V**.
- $\exists y\, \forall x$: pediría **un único** $y$ que sirva para **todos** los $x$. Imposible $\Rightarrow$ **F**.

El **orden importa** cuando los cuantificadores son **distintos**; si son iguales ($\forall\forall$ o $\exists\exists$), es indistinto.`,
    },
    {
      id: "alg-u02-027",
      tipo: "completar",
      dificultad: "media",
      tags: ["cuantificadores", "negacion"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf", "algebra/cheatsheets/unidad-02-razonamientos.html"],
      pregunta: String.raw`Completá: $\;\lnot[\forall x: p(x)] \equiv$ ____ $\;$ y $\;\lnot[\exists x: p(x)] \equiv$ ____ .`,
      respuesta: String.raw`$$\lnot[\forall x: p(x)] \equiv \exists x: \lnot p(x)$$
$$\lnot[\exists x: p(x)] \equiv \forall x: \lnot p(x)$$
Regla general: el cuantificador **se intercambia** ($\forall \leftrightarrow \exists$) y la negación **pasa al predicado**.`,
    },
    {
      id: "alg-u02-028",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["cuantificadores", "negacion"],
      fuente: ["algebra/unidad-02-razonamientos/apuntes/razonamientos-y-cuantificadores.pdf"],
      pregunta: String.raw`¿Cuál es la negación de «**Todos** los números reales son positivos»?`,
      opciones: ["Algún número real no es positivo", "Ningún número real es positivo", "Todos los reales son negativos", "Todos los reales no son positivos"],
      correcta: 0,
      respuesta: String.raw`$\lnot[\forall x: p(x)] \equiv \exists x: \lnot p(x) \Rightarrow$ «**Algún** real **no** es positivo». Basta un contraejemplo; no hace falta que ninguno lo sea.`,
    },
    {
      id: "alg-u02-030",
      tipo: "completar",
      dificultad: "facil",
      tags: ["simbolizacion", "condicional"],
      fuente: ["algebra/examenes/parcial-modelo-resuelto.html"],
      pregunta: String.raw`Al simbolizar, «**cuando** $A$, $B$» y «$B$ **siempre que** $A$» se traducen como ____ .`,
      respuesta: String.raw`$$A \to B$$
El «cuando / siempre que» introduce el **antecedente** $A$. Error común: invertir la implicación.`,
    },
  ],
});
