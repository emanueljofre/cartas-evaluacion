/* Mazo seed — Álgebra · Unidad 01 · Operaciones lógicas
   Contenido en los campos pregunta/respuesta: usar SIEMPRE String.raw`...`
   para que el LaTeX (\to, \land, \begin{array}…) se escriba tal cual. */
FLASHCARDS.deck({
  materia: "algebra",
  unidad: "01-operaciones-logicas",
  titulo: "Operaciones lógicas",
  cards: [
    {
      id: "alg-u01-001",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["conectivos", "conjuncion"],
      fuente: ["algebra/repasos/resumen-glosario-notacion.md"],
      pregunta: String.raw`¿Qué conectivo representa $\land$ y cuándo es verdadero?`,
      respuesta: String.raw`**Conjunción** (AND, «y»). Es verdadera **solo si ambas** proposiciones son V.

También aparece como: «p pero q», «p aunque q», «p sin embargo q».`,
    },
    {
      id: "alg-u01-002",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["conectivos", "disyuncion"],
      fuente: ["algebra/repasos/resumen-glosario-notacion.md"],
      pregunta: String.raw`Disyunción inclusiva $\lor$: ¿en qué único caso es falsa?`,
      respuesta: String.raw`Falsa **solo si ambas** son F. Admite que ambas sean V.

Se lee «p o q o ambas».`,
    },
    {
      id: "alg-u01-003",
      tipo: "concepto",
      dificultad: "media",
      tags: ["condicional", "equivalencias"],
      fuente: ["algebra/repasos/resumen-glosario-notacion.md"],
      pregunta: String.raw`Condicional $p \to q$: ¿en qué único caso es falso? Escribí su equivalencia.`,
      respuesta: String.raw`Falso **solo** cuando $p = V$ y $q = F$ (antecedente V, consecuente F).

Equivalencia: $p \to q \equiv \lnot p \lor q$.

Regla clave: **antecedente falso $\Rightarrow$ el condicional es siempre V**.`,
    },
    {
      id: "alg-u01-004",
      tipo: "concepto",
      dificultad: "media",
      tags: ["bicondicional"],
      fuente: ["algebra/repasos/resumen-glosario-notacion.md"],
      pregunta: String.raw`Bicondicional $p \leftrightarrow q$: ¿cuándo es verdadero?`,
      respuesta: String.raw`V cuando $p$ y $q$ tienen el **mismo** valor de verdad.

Equivalencia: $(\lnot p \lor q) \land (\lnot q \lor p)$.`,
    },
    {
      id: "alg-u01-005",
      tipo: "concepto",
      dificultad: "media",
      tags: ["disyuncion", "xor"],
      fuente: ["algebra/repasos/resumen-glosario-notacion.md"],
      pregunta: String.raw`¿Cuál es la diferencia entre la disyunción inclusiva $\lor$ y la excluyente $\veebar$ (XOR)?`,
      respuesta: String.raw`- **Inclusiva** $\lor$: V si al menos una es V (admite ambas V).
- **Excluyente** $\veebar$: V solo si tienen **valores distintos** («p o q pero no ambos»).`,
    },
    {
      id: "alg-u01-006",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["clasificacion"],
      fuente: ["algebra/repasos/resumen-glosario-notacion.md"],
      pregunta: String.raw`Definí tautología, contradicción y contingencia.`,
      respuesta: String.raw`- **Tautología**: proposición compuesta **siempre V**. Ej: $(p \land \lnot q) \to (q \lor p)$.
- **Contradicción**: **siempre F**. Ej: $p \land \lnot p$.
- **Contingencia**: tiene **algún V y algún F** (ni una ni otra).`,
    },
    {
      id: "alg-u01-007",
      tipo: "completar",
      dificultad: "facil",
      tags: ["tabla-de-verdad"],
      fuente: ["algebra/repasos/resumen-glosario-notacion.md"],
      pregunta: String.raw`Una proposición tiene $n$ variables simples. Su tabla de verdad tiene ____ filas.`,
      respuesta: String.raw`$2^n$ filas.

Ej: 3 variables $\to 2^3 = 8$ filas.`,
    },
    {
      id: "alg-u01-008",
      tipo: "texto",
      dificultad: "media",
      tags: ["de-morgan", "leyes"],
      fuente: ["algebra/unidad-01-operaciones-logicas/resumen.md"],
      pregunta: String.raw`Enunciá las dos leyes de De Morgan.`,
      respuesta: String.raw`$$\lnot(p \land q) \equiv \lnot p \lor \lnot q$$
$$\lnot(p \lor q) \equiv \lnot p \land \lnot q$$
«La negación de una conjunción es la disyunción de las negaciones», y viceversa.`,
    },
    {
      id: "alg-u01-009",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      tags: ["tabla-de-verdad", "clasificacion"],
      fuente: ["algebra/examenes/parcial-1.md"],
      pregunta: String.raw`Dada la proposición $[p \to (q \lor r)] \leftrightarrow [\lnot p \land \lnot q]$, ¿a qué corresponde su tabla de verdad?`,
      opciones: ["Contingencia", "Tautología", "Contradicción"],
      correcta: 0,
      respuesta: String.raw`Es una **contingencia**: la columna resultado tiene tanto V como F.

Truco: el lado izquierdo es V con mucha frecuencia (basta antecedente falso) mientras el derecho $\lnot p \land \lnot q$ casi siempre es F, así que el bicondicional alterna $\Rightarrow$ ni tautología ni contradicción.`,
    },
    {
      id: "alg-u01-010",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["tabla-de-verdad", "clasificacion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`Construí la tabla de verdad de $p \to (q \land p)$ e indicá si es tautología, contradicción o contingencia.`,
      respuesta: String.raw`$$\begin{array}{cc|c} p & q & p \to (q \land p) \\ \hline V & V & V \\ V & F & F \\ F & V & V \\ F & F & V \end{array}$$

La columna resultado es $V, F, V, V$: hay V y F $\Rightarrow$ **contingencia**.`,
    },
    {
      id: "alg-u01-011",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["conectivos", "negacion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`¿Qué hace la negación $\lnot p$ y cómo se lee?`,
      respuesta: String.raw`Invierte el valor de verdad de $p$: si $p$ es V, $\lnot p$ es F (y viceversa). Es el único conectivo **unitario** (se aplica a una sola proposición).

Se lee «no p», «no es cierto que p». Notación: $\lnot p$, $\sim p$, $-p$.`,
    },
    {
      id: "alg-u01-012",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["fundamentos", "proposicion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`¿Qué es una proposición y qué cosas NO lo son?`,
      respuesta: String.raw`**Oración declarativa** de la que se puede afirmar que es V o F (nunca ambas, nunca ninguna).

**NO** son proposiciones: preguntas, órdenes, exclamaciones y frases ambiguas o paradójicas. Ej: «¿qué hora es?», «¡cerrá la puerta!», «estudiá».`,
    },
    {
      id: "alg-u01-013",
      tipo: "completar",
      dificultad: "facil",
      tags: ["fundamentos"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`Una proposición ____ no se descompone; una ____ une simples mediante conectivos.`,
      respuesta: String.raw`**simple** / **compuesta**.

Ej simple: «Sócrates es griego». Ej compuesta: «Juan irá al cine $\land$ María al té».`,
    },
    {
      id: "alg-u01-014",
      tipo: "concepto",
      dificultad: "media",
      tags: ["clasificacion", "equivalencias"],
      fuente: ["algebra/unidad-01-operaciones-logicas/resumen.md"],
      pregunta: String.raw`¿Qué diferencia hay entre $\to$ y $\Rightarrow$ (y entre $\leftrightarrow$ y $\Leftrightarrow$)?`,
      respuesta: String.raw`$\to$ y $\leftrightarrow$ son **conectivos**: su tabla puede dar V o F.

$\Rightarrow$ (implicación lógica) y $\Leftrightarrow$ (equivalencia lógica) aparecen **solo cuando el resultado es tautología** (siempre V). Las leyes lógicas se escriben con $\Leftrightarrow$ / $\equiv$.`,
    },
    {
      id: "alg-u01-015",
      tipo: "texto",
      dificultad: "media",
      tags: ["leyes", "contrarreciproca"],
      fuente: ["algebra/unidad-01-operaciones-logicas/resumen.md"],
      pregunta: String.raw`Enunciá la ley de la contrarrecíproca.`,
      respuesta: String.raw`$$p \to q \equiv \lnot q \to \lnot p$$
Un condicional es equivalente a **negar y permutar** antecedente y consecuente. Por eso la directa y la contrarrecíproca son equivalentes.`,
    },
    {
      id: "alg-u01-016",
      tipo: "texto",
      dificultad: "media",
      tags: ["leyes", "distributiva"],
      fuente: ["algebra/unidad-01-operaciones-logicas/resumen.md"],
      pregunta: String.raw`Escribí las dos leyes distributivas.`,
      respuesta: String.raw`$$p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$$
$$p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$$`,
    },
    {
      id: "alg-u01-017",
      tipo: "texto",
      dificultad: "media",
      tags: ["leyes", "absorcion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/resumen.md"],
      pregunta: String.raw`Enunciá las leyes de absorción e idempotencia.`,
      respuesta: String.raw`**Absorción:** $\;p \lor (p \land q) \equiv p\;$ y $\;p \land (p \lor q) \equiv p$.

**Idempotencia:** $\;p \land p \equiv p\;$ y $\;p \lor p \equiv p$.`,
    },
    {
      id: "alg-u01-018",
      tipo: "completar",
      dificultad: "facil",
      tags: ["leyes", "inverso-neutro"],
      fuente: ["algebra/unidad-01-operaciones-logicas/resumen.md"],
      pregunta: String.raw`Completá: $p \land \lnot p \equiv$ ____ ; $\;p \lor \lnot p \equiv$ ____ ; $\;p \lor F \equiv$ ____ ; $\;p \land V \equiv$ ____ .`,
      respuesta: String.raw`$p \land \lnot p \equiv F$ y $p \lor \lnot p \equiv V$ (**inverso** / tercero excluido).

$p \lor F \equiv p$ y $p \land V \equiv p$ (**neutro**). Y por **dominación**: $p \lor V \equiv V$, $p \land F \equiv F$.`,
    },
    {
      id: "alg-u01-019",
      tipo: "practica",
      tags: ["simplificacion", "leyes", "final"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf","algebra/examenes/parcial-modelo-resuelto.html"],
      concepto: String.raw`Transformar expresiones lógicas con leyes (absorción, De Morgan, distributiva, inverso/neutro). Sube por ejes: una ley → varias → con anidamiento/condicional → dirección (demostrar una equivalencia, sin pista del resultado).`,
      variantes: [
        // N1 — una sola ley (absorción)
        [
          { pregunta: String.raw`Simplificá $(p \lor q) \land p$.`, respuesta: String.raw`Por **absorción** ($p \land (p \lor q) \equiv p$):

$$(p \lor q) \land p \equiv p$$`, pista: "Fijate si una parte 'absorbe' a la otra (absorción)." },
          { pregunta: String.raw`Simplificá $p \lor (p \land q)$.`, respuesta: String.raw`**Absorción** directa:

$$p \lor (p \land q) \equiv p$$` },
        ],
        // N2 — dos leyes
        [
          { pregunta: String.raw`Simplificá $p \lor (\lnot p \land q)$.`, respuesta: String.raw`$$\begin{aligned} p \lor (\lnot p \land q) &\equiv (p \lor \lnot p) \land (p \lor q) \quad\text{(distributiva)} \\ &\equiv V \land (p \lor q) \quad\text{(inverso)} \\ &\equiv p \lor q \quad\text{(neutro)} \end{aligned}$$` },
          { pregunta: String.raw`Simplificá $(p \land q) \lor (p \land \lnot q)$.`, respuesta: String.raw`Factor común $p$ (distributiva):

$$(p \land q) \lor (p \land \lnot q) \equiv p \land (q \lor \lnot q) \equiv p \land V \equiv p$$` },
        ],
        // N3 — De Morgan + anidamiento
        [
          { pregunta: String.raw`Simplificá $(p \lor q) \land \lnot(\lnot p \land q)$.`, respuesta: String.raw`$$\begin{aligned} &(p \lor q) \land \lnot(\lnot p \land q) \\ \equiv{}& (p \lor q) \land (p \lor \lnot q) \quad\text{(De Morgan + doble neg.)} \\ \equiv{}& p \lor (q \land \lnot q) \quad\text{(distributiva)} \\ \equiv{}& p \lor F \equiv p \quad\text{(inverso, neutro)} \end{aligned}$$` },
          { pregunta: String.raw`Negá y simplificá $\lnot(q \to p)$.`, respuesta: String.raw`$$\lnot(q \to p) \equiv \lnot(\lnot q \lor p) \equiv \lnot\lnot q \land \lnot p \equiv q \land \lnot p$$

(equiv. implicación, De Morgan, doble negación).` },
        ],
        // N4 — con condicional / clasificar por leyes
        [
          { pregunta: String.raw`Simplificá $p \to (p \land q)$.`, respuesta: String.raw`$$\begin{aligned} p \to (p \land q) &\equiv \lnot p \lor (p \land q) \\ &\equiv (\lnot p \lor p) \land (\lnot p \lor q) \quad\text{(distributiva)} \\ &\equiv V \land (\lnot p \lor q) \equiv \lnot p \lor q \equiv p \to q \end{aligned}$$` },
          { pregunta: String.raw`Clasificá **sin tabla** (con leyes) $(p \lor q) \land (\lnot p \land \lnot q)$.`, respuesta: String.raw`$\lnot p \land \lnot q \equiv \lnot(p \lor q)$ (De Morgan), entonces:

$$(p \lor q) \land \lnot(p \lor q) \equiv F \quad\text{(inverso)}$$

Es una **contradicción**.` },
        ],
        // N5 — demostrar una equivalencia (dirección)
        [
          { pregunta: String.raw`Demostrá que $p \to (q \lor r) \equiv (p \land \lnot r) \to q$.`, respuesta: String.raw`$$\begin{aligned} &p \to (q \lor r) \\ \equiv{}& \lnot p \lor (q \lor r) \quad\text{(equiv. implicación)} \\ \equiv{}& (\lnot p \lor r) \lor q \quad\text{(conmut. y asoc.)} \\ \equiv{}& \lnot(\lnot p \lor r) \to q \quad\text{(equiv. implicación)} \\ \equiv{}& (p \land \lnot r) \to q \quad\text{(De Morgan + doble neg.)} \end{aligned}$$` },
          { pregunta: String.raw`Demostrá que $\lnot(p \to q) \equiv p \land \lnot q$.`, respuesta: String.raw`$$\lnot(p \to q) \equiv \lnot(\lnot p \lor q) \equiv \lnot\lnot p \land \lnot q \equiv p \land \lnot q$$

(equiv. implicación, De Morgan, doble negación).` },
        ],
      ],
    },
    {
      id: "alg-u01-021",
      tipo: "concepto",
      dificultad: "media",
      tags: ["simplificacion", "metodo", "final"],
      fuente: ["algebra/unidad-01-operaciones-logicas/resumen.md"],
      pregunta: String.raw`¿En qué se diferencia *simplificar* de *demostrar una equivalencia*, y qué conviene hacer primero?`,
      respuesta: String.raw`- **Simplificar:** aplicar leyes hasta la **mínima** expresión.
- **Demostrar** $A \equiv B$: transformar un miembro hasta el otro (o llevar ambos a una forma común).

**Primero:** convertí $\to$ y $\leftrightarrow$ a $\land/\lor/\lnot$; meté las negaciones con De Morgan + doble negación; cerrá con inverso/neutro/dominación. **Justificá cada paso** con el nombre de la ley.`,
    },
    {
      id: "alg-u01-023",
      tipo: "concepto",
      dificultad: "media",
      tags: ["implicaciones-asociadas"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`Dada la directa $p \to q$, escribí su recíproca, contraria y contrarrecíproca. ¿Cuál es equivalente a la directa?`,
      respuesta: String.raw`- Recíproca: $q \to p$
- Contraria: $\lnot p \to \lnot q$
- Contrarrecíproca: $\lnot q \to \lnot p$ — **esta es equivalente a la directa**.

Además: recíproca $\equiv$ contraria.`,
    },
    {
      id: "alg-u01-024",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["implicaciones-asociadas"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`Para «Si hoy es lunes, entonces ayer se jugó al fútbol», escribí las 4 conjugadas e indicá cuáles son equivalentes.`,
      respuesta: String.raw`Sea $p$ = «hoy es lunes», $q$ = «ayer se jugó».

- **Directa** $p \to q$
- **Recíproca** $q \to p$: si ayer se jugó, hoy es lunes.
- **Contraria** $\lnot p \to \lnot q$: si hoy no es lunes, ayer no se jugó.
- **Contrarrecíproca** $\lnot q \to \lnot p$: si ayer no se jugó, hoy no es lunes.

Equivalentes: directa $\equiv$ contrarrecíproca; recíproca $\equiv$ contraria.`,
    },
    {
      id: "alg-u01-025",
      tipo: "completar",
      dificultad: "media",
      tags: ["condicional", "necesaria-suficiente"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`«Ser equilátero» $\to$ «ser isósceles» es verdadera. Entonces ser equilátero es condición ____ para ser isósceles; ser isósceles es condición ____ para ser equilátero.`,
      respuesta: String.raw`**suficiente** / **necesaria**.

Basta ser equilátero para ser isósceles (**suficiente**); ser isósceles es **necesario** (no suficiente) para ser equilátero. En general, en $p \to q$: $p$ suficiente, $q$ necesaria.`,
    },
    {
      id: "alg-u01-026",
      tipo: "concepto",
      dificultad: "media",
      tags: ["condicional", "implicacion-material"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`¿Qué son las implicaciones causal, formal y material? ¿Por qué «si $2+3=5$ entonces llueve» es verdadera?`,
      respuesta: String.raw`- **Causal:** el antecedente causa el consecuente.
- **Formal:** de $p$ se deduce $q$ (la implicación matemática es **siempre formal**: hipótesis → tesis).
- **Material:** sin relación real ant.–cons.

«Si $2+3=5$ entonces llueve» es **material**: se evalúa solo por la tabla (antecedente V). La lógica mira valores de verdad, no el significado.`,
    },
    {
      id: "alg-u01-027",
      tipo: "completar",
      dificultad: "facil",
      tags: ["precedencia"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`Ordená de mayor a menor precedencia (orden de ligación): $\to$, $\lnot$, $\leftrightarrow$, $\land/\lor$.`,
      respuesta: String.raw`1. $\lnot$
2. $\land$, $\lor$ y $(\;)$
3. $\to$ y $[\;]$
4. $\leftrightarrow$, $\veebar$

Los paréntesis/corchetes siempre prevalecen.`,
    },
    {
      id: "alg-u01-028",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["circuitos"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`En circuitos lógicos: ¿cómo se representa una proposición, y qué operación es un circuito en serie vs en paralelo?`,
      respuesta: String.raw`Proposición = **interruptor**: V $\to$ cerrado (pasa corriente), F $\to$ abierto.

- **Conjunción** $\land$ = circuito en **serie** (pasa si **ambos** cerrados).
- **Disyunción** $\lor$ = circuito en **paralelo** (pasa si **al menos uno** cerrado).`,
    },
    {
      id: "alg-u01-029",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["circuitos"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`Un circuito en el que la corriente pasa **solo si los dos interruptores están cerrados** representa…`,
      opciones: ["La disyunción (OR, en paralelo)", "La conjunción (AND, en serie)", "La negación (NOT)"],
      correcta: 1,
      respuesta: String.raw`La **conjunción** (AND): circuito en **serie**, V solo si ambas proposiciones son V. El paralelo (OR) pasa con al menos uno cerrado.`,
    },
    {
      id: "alg-u01-030",
      tipo: "concepto",
      dificultad: "media",
      tags: ["traduccion", "condicional"],
      fuente: ["algebra/unidad-01-operaciones-logicas/apuntes/infografia-operaciones-logicas.jpg","algebra/unidad-01-operaciones-logicas/apuntes/operaciones-logicas.pdf"],
      pregunta: String.raw`Traducí a símbolos: «$p$ solo si $q$», «$q$ es necesaria para $p$», «$p$ es suficiente para $q$».`,
      respuesta: String.raw`Las tres son $p \to q$.

Ojo: en «$p$ **solo si** $q$» lo que va **antes** de «solo si» es el antecedente; y la **condición necesaria** ($q$) es siempre el **consecuente**.`,
    },
    {
      id: "alg-u01-031",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["traduccion", "negacion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`Simbolizá «No es cierto que Juan y Pedro sean actores».`,
      respuesta: String.raw`$p$ = «Juan es actor», $q$ = «Pedro es actor».
$$\lnot(p \land q)$$
Cuidado: $\lnot(p \land q) \neq \lnot p \land \lnot q$. Por De Morgan, $\lnot(p \land q) \equiv \lnot p \lor \lnot q$.`,
    },
    {
      id: "alg-u01-032",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["traduccion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`Simbolizá «11 y 13 son números primos, pero 15 no».`,
      respuesta: String.raw`$p$ = «11 es primo», $q$ = «13 es primo», $r$ = «15 es primo».
$$p \land q \land \lnot r$$
El «pero» funciona como conjunción ($\land$).`,
    },
    {
      id: "alg-u01-033",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      tags: ["valor-de-verdad", "evaluacion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`Si $p = V$, $q = F$, $r = V$, ¿cuál es el valor de verdad de $(p \land \lnot q) \to (r \to q)$?`,
      opciones: ["Verdadero", "Falso", "Depende de otra variable"],
      correcta: 1,
      respuesta: String.raw`$p \land \lnot q = V \land V = V$ (antecedente V); $\;r \to q = V \to F = F$.

Entonces $V \to F = \mathbf{F}$. **Falso.**`,
    },
    {
      id: "alg-u01-034",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["tabla-de-verdad", "clasificacion"],
      fuente: ["algebra/examenes/parcial-modelo.pdf","algebra/examenes/parcial-modelo-solucion.pdf","algebra/examenes/parcial-modelo-resuelto.html"],
      pregunta: String.raw`Construí la tabla de verdad de $(p \land q) \lor (\lnot r \to p)$ y clasificala.`,
      respuesta: String.raw`$$\begin{array}{ccc|c} p & q & r & (p \land q) \lor (\lnot r \to p) \\ \hline V&V&V&V \\ V&V&F&V \\ V&F&V&V \\ V&F&F&V \\ F&V&V&V \\ F&V&F&F \\ F&F&V&V \\ F&F&F&F \end{array}$$
Hay V y F $\Rightarrow$ **contingencia** (de hecho equivale a $p \lor r$).`,
    },
    {
      id: "alg-u01-035",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["condicional", "negacion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`Si $p$ es **falsa**, ¿cuál es el valor de verdad de $\lnot(p \lor q)$?`,
      opciones: ["Siempre falso", "Depende del valor de $q$", "Siempre verdadero"],
      correcta: 1,
      respuesta: String.raw`**Depende de $q$.** Con $p=F$: $p \lor q = F \lor q = q$, entonces $\lnot(p \lor q) = \lnot q$, que vale según $q$.`,
    },
    {
      id: "alg-u01-036",
      tipo: "opcion-multiple",
      dificultad: "facil",
      tags: ["fundamentos", "proposicion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`¿Cuál de las siguientes es una **proposición**?`,
      opciones: ["¿Qué día es hoy?", "¡Cerrá la puerta!", "7 + 5 = 9", "Estudiá"],
      correcta: 2,
      respuesta: String.raw`«7 + 5 = 9» es una proposición: es declarativa y tiene valor de verdad (es **falsa**).

Preguntas y órdenes no son proposiciones.`,
    },
    {
      id: "alg-u01-037",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["traduccion", "implicaciones-asociadas"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`Sean $p$ = «sale el sol», $q$ = «voy a la playa». Escribí en lenguaje coloquial $\lnot p \to \lnot q$.`,
      respuesta: String.raw`«Si no sale el sol, entonces no voy a la playa.»

Es la **contraria** de $p \to q$ (no equivale a la directa).`,
    },
    {
      id: "alg-u01-038",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["valor-de-verdad", "analisis"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`¿Para qué valores de $p, q, r$ resulta **falsa** la proposición $(p \lor q) \to r$?`,
      respuesta: String.raw`Un condicional es F solo si antecedente V y consecuente F: $(p \lor q) = V$ y $r = F$.

O sea $r = F$ y al menos uno de $p, q$ es V:
$$(p,q,r) \in \{(V,V,F),\;(V,F,F),\;(F,V,F)\}$$`,
    },
    {
      id: "alg-u01-041",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["tabla-de-verdad", "clasificacion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`Construí la tabla de verdad de $(p \to q) \land (q \to p)$ y clasificala.`,
      respuesta: String.raw`$$\begin{array}{cc|c} p & q & (p \to q) \land (q \to p) \\ \hline V&V&V \\ V&F&F \\ F&V&F \\ F&F&V \end{array}$$
V cuando $p$ y $q$ coinciden $\Rightarrow$ **contingencia** (equivale a $p \leftrightarrow q$).`,
    },
    {
      id: "alg-u01-042",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["traduccion", "necesaria-suficiente"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`Escribí como implicación: «Que un número sea divisible por 4 es **suficiente** para que sea par».`,
      respuesta: String.raw`Sea $p$ = «divisible por 4», $q$ = «par». «Suficiente» $\Rightarrow$ es el antecedente:
$$p \to q$$
(Equivale a decir que «ser par es **necesario** para ser divisible por 4».)`,
    },
    {
      id: "alg-u01-043",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["valor-de-verdad", "evaluacion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`Si $p = V$, $q = F$, $r = V$, calculá el valor de $(p \to q) \lor (r \land \lnot q)$.`,
      respuesta: String.raw`$p \to q = V \to F = F$; $\;r \land \lnot q = V \land V = V$; $\;F \lor V = V$.

**Verdadero.**`,
    },
    {
      id: "alg-u01-044",
      tipo: "ejercicio",
      dificultad: "facil",
      tags: ["traduccion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`Simbolizá: «Si termino el trabajo y hay buen clima, saldré a correr o iré a nadar». ($t, c, r, n$)`,
      respuesta: String.raw`$$(t \land c) \to (r \lor n)$$`,
    },
    {
      id: "alg-u01-045",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["clasificacion"],
      fuente: ["algebra/unidad-01-operaciones-logicas/ejercicios/operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/respuestas-operaciones-logicas.pdf","algebra/unidad-01-operaciones-logicas/ejercicios/resueltos-operaciones-logicas.pdf"],
      pregunta: String.raw`¿Cuál de estas es una **contradicción**?`,
      opciones: [String.raw`$p \lor \lnot p$`, String.raw`$p \land \lnot p$`, String.raw`$p \to p$`],
      correcta: 1,
      respuesta: String.raw`$p \land \lnot p$ es siempre **F** (ley de inverso) $\Rightarrow$ contradicción.

$p \lor \lnot p$ y $p \to p$ son tautologías (siempre V).`,
    },
  ],
});
