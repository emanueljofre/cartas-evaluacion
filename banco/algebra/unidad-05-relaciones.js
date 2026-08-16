/* Mazo — Álgebra · Unidad 05 · Relaciones
   Tema exclusivo del FINAL (no entró en parciales).
   Campos de contenido: SIEMPRE String.raw`...` (LaTeX literal).
   Bloques del sistema «Manual»: `> [!prof|trampa|vale|exam|nota|fx] tag`.
   Nada de emoji como identificador de bloque (ver card-schema.md § Bloques). */
FLASHCARDS.deck({
  materia: "algebra",
  unidad: "05-relaciones",
  titulo: "Relaciones",
  cards: [

    // ── Producto cartesiano ──────────────────────────────
    {
      id: "alg-u05-001", tipo: "concepto", dificultad: "facil",
      tags: ["par-ordenado"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`¿Qué es un par ordenado y por qué $(a,b) \neq (b,a)$?`,
      respuesta: String.raw`Dos elementos **con un criterio de orden**: cuál es la 1.ª componente y cuál la 2.ª. Como el orden importa, $(a,b) \neq (b,a)$ (salvo $a=b$).

No confundir con el conjunto $\{a,b\}$, donde el orden no cuenta. Gráficamente, $(a,b)$ es un **punto del plano**.`,
    },
    {
      id: "alg-u05-002", tipo: "concepto", dificultad: "facil",
      tags: ["producto-cartesiano", "cardinal"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`Definí el producto cartesiano $A \times B$ y dá su cardinal.`,
      respuesta: String.raw`$$A \times B = \{(a,b) : a \in A \land b \in B\}$$
Son **todos los pares** con 1.ª componente en $A$ y 2.ª en $B$. Cardinal: $\#(A \times B) = \#(A)\cdot\#(B)$.`,
    },
    {
      id: "alg-u05-003", tipo: "opcion-multiple", dificultad: "media",
      tags: ["producto-cartesiano"],
      fuente: "algebra/unidad-05-relaciones/resumen.md",
      pregunta: String.raw`¿Es cierto que $A \times B = B \times A$ siempre?`,
      opciones: [
        String.raw`Sí, siempre`,
        String.raw`No: solo si $A = B$ (o alguno es $\varnothing$)`,
        String.raw`Sí, porque tienen el mismo cardinal`,
        String.raw`Solo si $A \subseteq B$`,
      ],
      correcta: 1,
      respuesta: String.raw`El producto **no es conmutativo**: $(a,b)$ y $(b,a)$ son pares distintos. Tienen el mismo **cardinal**, pero los conjuntos difieren salvo que $A = B$.`,
    },
    {
      id: "alg-u05-004", tipo: "completar", dificultad: "media",
      tags: ["producto-cartesiano", "propiedades"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`Distributiva del producto sobre la unión: $(A \cup B) \times C = $ ____ .`,
      respuesta: String.raw`$$(A \cup B) \times C = (A \times C) \cup (B \times C)$$
Análogo con la intersección: $(A \cap B) \times C = (A \times C) \cap (B \times C)$.`,
    },

    // ── Concepto de relación ─────────────────────────────
    {
      id: "alg-u05-005", tipo: "concepto", dificultad: "facil",
      tags: ["relacion", "definicion"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`¿Qué es una relación de $A$ en $B$?`,
      respuesta: String.raw`**Cualquier subconjunto** del producto cartesiano: $R \subseteq A \times B$.

$A$ = conjunto de **partida**, $B$ = de **llegada**. $(a,b) \in R$ se lee "$a$ está relacionado con $b$". Tanto $\varnothing$ como $A \times B$ son relaciones válidas.`,
    },
    {
      id: "alg-u05-006", tipo: "completar", dificultad: "facil",
      tags: ["relacion", "definicion"],
      fuente: "algebra/unidad-05-relaciones/resumen.md",
      pregunta: String.raw`Una relación se define por ____ (enumerando los pares) o por ____ (con una función proposicional).`,
      respuesta: String.raw`Por **extensión** (se enumeran los pares, ej. $R = \{(2,1),(5,4)\}$) o por **comprensión** (una propiedad que vincula $x$ con $y$, ej. $R : x < y$).`,
    },

    // ── Dominio · Imagen · Inversa ───────────────────────
    {
      id: "alg-u05-007", tipo: "concepto", dificultad: "facil",
      tags: ["dominio", "imagen"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`Definí dominio e imagen de una relación $R$.`,
      respuesta: String.raw`- **Dominio:** $\mathrm{Dom}\,R = \{x \in A : \exists\,y,\ (x,y) \in R\}$ — las 1.as componentes que aparecen ($\mathrm{Dom}\,R \subseteq A$).
- **Imagen:** $\mathrm{Im}\,R = \{y \in B : \exists\,x,\ (x,y) \in R\}$ — las 2.as componentes ($\mathrm{Im}\,R \subseteq B$).`,
    },
    {
      id: "alg-u05-008", tipo: "practica",
      tags: ["relaciones", "propiedades", "clasificacion"],
      fuente: ["algebra/unidad-05-relaciones/ejercicios/resuelto-relaciones.pdf", "algebra/unidad-05-relaciones/resumen.md", "algebra/cheatsheets/unidad-05-relaciones.html"],
      concepto: String.raw`Analizar una relación finita dada por extensión. Sube por ejes: dominio/imagen/inversa → verificar UNA propiedad → verificar TODAS → clasificar (equivalencia/orden) → hallar clases y partición.`,
      variantes: [
        // N1 — dominio, imagen, inversa
        [
          { pregunta: String.raw`Dada $R = \{(2,1),(5,4),(7,6)\}$, hallá $\mathrm{Dom}\,R$, $\mathrm{Im}\,R$ y $R^{-1}$.`, respuesta: String.raw`$$\mathrm{Dom}\,R = \{2,5,7\} \qquad \mathrm{Im}\,R = \{1,4,6\}$$
$$R^{-1} = \{(1,2),(4,5),(6,7)\}$$
La inversa invierte cada par.`, pista: "Dom = 1.as componentes; Im = 2.as; la inversa invierte cada par." },
          { pregunta: String.raw`Dada $R = \{(1,3),(1,5),(4,2)\}$, hallá $\mathrm{Dom}\,R$, $\mathrm{Im}\,R$ y $R^{-1}$.`, respuesta: String.raw`$$\mathrm{Dom}\,R = \{1,4\} \qquad \mathrm{Im}\,R = \{3,5,2\}$$
$$R^{-1} = \{(3,1),(5,1),(2,4)\}$$` },
        ],
        // N2 — verificar UNA propiedad (con contraejemplo)
        [
          { pregunta: String.raw`¿Es **transitiva** $R = \{(1,2),(2,3),(1,1),(2,2)\}$ en $A=\{1,2,3\}$? Justificá.`, respuesta: String.raw`**No.** Están $(1,2)$ y $(2,3)$, pero falta $(1,3)$. Un solo contraejemplo alcanza.` },
          { pregunta: String.raw`¿Es **simétrica** $R = \{(1,2),(2,1),(2,3)\}$ en $A=\{1,2,3\}$? Justificá.`, respuesta: String.raw`**No.** Está $(2,3)$ pero falta $(3,2)$. (El par $(1,2)$ sí tiene su simétrico $(2,1)$, pero basta uno que falle.)` },
        ],
        // N3 — verificar TODAS las propiedades
        [
          { pregunta: String.raw`Analizá reflexividad, simetría, antisimetría y transitividad de $R = \{(1,1),(2,2),(3,3),(1,2),(2,3),(1,3)\}$ en $A=\{1,2,3\}$.`, respuesta: String.raw`- **Reflexiva:** sí ($(1,1),(2,2),(3,3)$).
- **Simétrica:** no (está $(1,2)$ y falta $(2,1)$).
- **Antisimétrica:** sí (ningún par y su opuesto con $x\neq y$).
- **Transitiva:** sí (p. ej. $(1,2)\land(2,3)\Rightarrow(1,3)$, que está).` },
          { pregunta: String.raw`Analizá reflexividad, simetría, antisimetría y transitividad de $R = \{(1,2),(2,1)\}$ en $A=\{1,2,3\}$.`, respuesta: String.raw`- **Reflexiva:** no (faltan $(1,1),(2,2),(3,3)$).
- **Simétrica:** sí ($(1,2)$ y $(2,1)$).
- **Antisimétrica:** no ($(1,2)$ y $(2,1)$ con $1\neq2$).
- **Transitiva:** no ($(1,2)\land(2,1)$ pero falta $(1,1)$).` },
        ],
        // N4 — clasificar (equivalencia / orden / ninguna)
        [
          { pregunta: String.raw`Clasificá $R = \{(1,1),(2,2),(3,3),(1,2),(2,1)\}$ en $A=\{1,2,3\}$.`, respuesta: String.raw`Reflexiva + simétrica + transitiva $\Rightarrow$ **relación de equivalencia**.` },
          { pregunta: String.raw`Clasificá $R = \{(1,1),(2,2),(3,3),(1,2),(1,3),(2,3)\}$ en $A=\{1,2,3\}$.`, respuesta: String.raw`Reflexiva + **antisimétrica** + transitiva $\Rightarrow$ **orden amplio**.` },
        ],
        // N5 — equivalencia → clases y partición
        [
          { pregunta: String.raw`$R = \{(1,1),(2,2),(3,3),(1,2),(2,1)\}$ en $A=\{1,2,3\}$ es de equivalencia. Hallá las clases y la partición.`, respuesta: String.raw`$[1]=[2]=\{1,2\}$ y $[3]=\{3\}$.
$$\text{Partición: } \{\{1,2\},\{3\}\}$$` },
          { pregunta: String.raw`$R = \{(2,3),(3,3),(1,1),(2,2),(3,2)\}$ en $A=\{1,2,3\}$ es de equivalencia. Hallá las clases y la partición.`, respuesta: String.raw`$[1]=\{1\}$ y $[2]=[3]=\{2,3\}$.
$$\text{Partición: } \{\{1\},\{2,3\}\}$$` },
        ],
      ],
    },
    {
      id: "alg-u05-009", tipo: "texto", dificultad: "media",
      tags: ["inversa"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`¿Cómo se obtiene $R^{-1}$ y qué pasa con su dominio e imagen?`,
      respuesta: String.raw`Se **invierte cada par**: $R^{-1} = \{(y,x) : (x,y) \in R\}$.

Si $R \subseteq A \times B$, entonces $R^{-1} \subseteq B \times A$. Se intercambian: $\mathrm{Dom}\,R^{-1} = \mathrm{Im}\,R$ e $\mathrm{Im}\,R^{-1} = \mathrm{Dom}\,R$.`,
    },

    // ── Representaciones ─────────────────────────────────
    {
      id: "alg-u05-010", tipo: "concepto", dificultad: "facil",
      tags: ["representacion"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/cheatsheets/unidad-05-relaciones.html"],
      pregunta: String.raw`Nombrá las formas de representar una relación.`,
      respuesta: String.raw`1. **Tabla de valores** (filas $x$ ; $y$).
2. **Diagrama de flechas** (Venn, para $A \to B$).
3. **Gráfico cartesiano** (cada par es un punto).
4. **Matriz booleana** (0/1, tabla de doble entrada).
5. **Dígrafo** (grafo dirigido, para relaciones en un conjunto $A \to A$).`,
    },
    {
      id: "alg-u05-011", tipo: "texto", dificultad: "media",
      tags: ["matriz-booleana", "representacion"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/bibliografia/jimenez-m-6-220-236.pdf"],
      pregunta: String.raw`¿Cómo se arma la matriz booleana de una relación?`,
      respuesta: String.raw`Filas = elementos de $A$, columnas = elementos de $B$ (mismo orden). Se pone **1** si el par pertenece a $R$ y **0** si no:
$$m_{ij} = 1 \iff (i,j) \in R$$
Conecta Relaciones con la unidad de **Matrices**.`,
    },
    {
      id: "alg-u05-012", tipo: "concepto", dificultad: "media",
      tags: ["digrafo", "representacion"],
      fuente: ["algebra/cheatsheets/unidad-05-relaciones.html", "algebra/unidad-05-relaciones/bibliografia/jimenez-m-6-220-236.pdf"],
      pregunta: String.raw`¿Qué es el dígrafo (grafo dirigido) de una relación y cuándo se usa?`,
      respuesta: String.raw`Es la representación natural de una relación **en un conjunto** ($A \to A$): cada elemento es un **nodo**, una flecha $x \to y$ por cada $(x,y) \in R$, y un **lazo** sobre el nodo si $(x,x) \in R$.

Es el "diagrama de flechas" cuando partida y llegada coinciden — de ahí salen los **lazos** de la reflexividad.`,
    },

    // ── Relación en un conjunto ──────────────────────────
    {
      id: "alg-u05-013", tipo: "completar", dificultad: "facil",
      tags: ["relacion-en-conjunto", "propiedades"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/cheatsheets/unidad-05-relaciones.html"],
      pregunta: String.raw`Para analizar reflexividad, simetría y transitividad, la relación tiene que estar definida ____ , es decir $R \subseteq$ ____ .`,
      respuesta: String.raw`Definida **en un conjunto**: $R \subseteq A^{2}$ (es decir $R : A \to A$).

Si $R$ va de $A$ en un $B$ distinto, solo se pide **dominio, imagen e inversa**.`,
    },

    // ── Reflexividad ─────────────────────────────────────
    {
      id: "alg-u05-014", tipo: "texto", dificultad: "media",
      tags: ["reflexividad"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`¿En qué se diferencian "no reflexiva" y "arreflexiva"?`,
      respuesta: String.raw`- **No reflexiva:** $\exists\,x \in A$ con $(x,x) \notin R$ — al menos uno falla (otros pueden cumplir). Matriz: algún 0 en la diagonal.
- **Arreflexiva:** $\forall x \in A,\ (x,x) \notin R$ — **ninguno** se relaciona consigo mismo. Matriz: **diagonal toda 0**.`,
    },
    {
      id: "alg-u05-015", tipo: "completar", dificultad: "facil",
      tags: ["reflexividad", "matriz-booleana"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/cheatsheets/unidad-05-relaciones.html"],
      pregunta: String.raw`En la matriz, una relación reflexiva tiene la diagonal ____ y una arreflexiva la tiene ____ .`,
      respuesta: String.raw`Reflexiva → diagonal **toda 1** ($\forall x,\ (x,x) \in R$). Arreflexiva → diagonal **toda 0**.`,
    },

    // ── Simetría ─────────────────────────────────────────
    {
      id: "alg-u05-016", tipo: "concepto", dificultad: "media",
      tags: ["simetria", "matriz-booleana"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/cheatsheets/unidad-05-relaciones.html"],
      pregunta: String.raw`¿Cuándo una relación es simétrica y cómo se ve en la matriz?`,
      respuesta: String.raw`$$\forall x,y:\ (x,y) \in R \Rightarrow (y,x) \in R$$
Cada par tiene su simétrico. En la matriz: **$M = M^{T}$** (espejo respecto de la diagonal). Los pares $(x,x)$ siempre cumplen simetría.`,
    },
    {
      id: "alg-u05-017", tipo: "concepto", dificultad: "media",
      tags: ["antisimetria"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`Definí relación antisimétrica.`,
      respuesta: String.raw`$$\forall x,y:\ (x,y) \in R \land (y,x) \in R \Rightarrow x = y$$
Si $x \neq y$, no pueden estar los dos pares. Los pares reflexivos $(x,x)$ la cumplen. **No** es lo contrario de simétrica.`,
    },
    {
      id: "alg-u05-018", tipo: "concepto", dificultad: "media",
      tags: ["asimetria"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`¿Qué es una relación asimétrica y qué implica?`,
      respuesta: String.raw`$\forall x,y:\ (x,y) \in R \Rightarrow (y,x) \notin R$: **ningún** par tiene su simétrico.

Implica que es **arreflexiva** (no puede haber pares $(x,x)$). Matriz: diagonal toda 0 y nunca $m_{ij} = m_{ji} = 1$.`,
    },
    {
      id: "alg-u05-019", tipo: "opcion-multiple", dificultad: "dificil",
      tags: ["simetria", "antisimetria"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/cheatsheets/unidad-05-relaciones.html"],
      pregunta: String.raw`Sobre simétrica y antisimétrica, ¿cuál afirmación es correcta?`,
      opciones: [
        String.raw`Son opuestas: si no es una, es la otra`,
        String.raw`Son independientes: una relación puede ser ambas, una, o ninguna`,
        String.raw`Toda relación reflexiva es simétrica`,
        String.raw`Antisimétrica implica simétrica`,
      ],
      correcta: 1,
      respuesta: String.raw`Son **independientes**: se analizan por separado. Una relación puede ser **ambas** (la igualdad, o una con solo pares reflexivos) o **ninguna**.`,
    },

    // ── Transitividad ────────────────────────────────────
    {
      id: "alg-u05-020", tipo: "concepto", dificultad: "facil",
      tags: ["transitividad"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`¿Cuándo una relación es transitiva?`,
      respuesta: String.raw`$$\forall x,y,z:\ (x,y) \in R \land (y,z) \in R \Rightarrow (x,z) \in R$$
Si $x$ se relaciona con $y$ e $y$ con $z$, entonces $x$ con $z$. Los pares reflexivos siempre la cumplen.`,
    },
    {
      id: "alg-u05-022", tipo: "texto", dificultad: "media",
      tags: ["transitividad"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`¿Qué diferencia hay entre "no transitiva" y "atransitiva"?`,
      respuesta: String.raw`- **No transitiva:** $\exists$ una terna donde $(x,y),(y,z) \in R$ pero $(x,z) \notin R$ (falla **al menos una**).
- **Atransitiva:** $\forall$ terna, $(x,y) \in R \land (y,z) \in R \Rightarrow (x,z) \notin R$ (**ninguna** cumple).`,
    },

    // ── Criterios matriciales ────────────────────────────
    {
      id: "alg-u05-023", tipo: "texto", dificultad: "dificil",
      tags: ["transitividad", "matriz-booleana", "producto-booleano"],
      fuente: ["algebra/cheatsheets/unidad-05-relaciones.html", "algebra/unidad-05-relaciones/bibliografia/jimenez-m-6-220-236.pdf"],
      pregunta: String.raw`¿Cómo se detecta la transitividad con la matriz booleana?`,
      respuesta: String.raw`Con el **producto booleano**: $R$ es transitiva $\iff M \odot M \subseteq M$.

$M \odot M$ se calcula como un producto de matrices pero con $\cdot = \land$ (y) y $+ = \lor$ (o). Es transitiva si $M \odot M$ **no agrega ningún 1** fuera de $M$.

> [!trampa]
> **No** es "$M^{2} = M$": basta con que cada 1 de $M \odot M$ ya esté en $M$.`,
    },
    {
      id: "alg-u05-024", tipo: "opcion-multiple", dificultad: "dificil",
      tags: ["transitividad", "matriz-booleana"],
      fuente: "algebra/cheatsheets/unidad-05-relaciones.html",
      pregunta: String.raw`¿Cuál es el criterio matricial correcto para que $R$ sea transitiva?`,
      opciones: [
        String.raw`$M^{2} = M$ exactamente`,
        String.raw`$M \odot M \subseteq M$ (producto booleano)`,
        String.raw`$M = M^{T}$`,
        String.raw`La diagonal es toda 1`,
      ],
      correcta: 1,
      respuesta: String.raw`El correcto es $M \odot M \subseteq M$. "$M^{2} = M$" es una simplificación incorrecta. $M = M^{T}$ es **simetría**, y diagonal toda 1 es **reflexividad**.`,
    },

    // ── Clasificación ────────────────────────────────────
    {
      id: "alg-u05-025", tipo: "completar", dificultad: "media",
      tags: ["clasificacion"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/cheatsheets/unidad-05-relaciones.html"],
      pregunta: String.raw`Completá: equivalencia = reflexiva + ____ + transitiva; orden amplio = reflexiva + ____ + transitiva; orden estricto = ____ + asimétrica + transitiva.`,
      respuesta: String.raw`- Equivalencia = reflexiva + **simétrica** + transitiva.
- Orden amplio = reflexiva + **antisimétrica** + transitiva.
- Orden estricto = **arreflexiva** + asimétrica + transitiva.`,
    },
    {
      id: "alg-u05-026", tipo: "opcion-multiple", dificultad: "media",
      tags: ["clasificacion", "orden"],
      fuente: "algebra/unidad-05-relaciones/resumen.md",
      pregunta: String.raw`¿Qué propiedades cumple una relación de **orden amplio**?`,
      opciones: [
        String.raw`Reflexiva, antisimétrica y transitiva`,
        String.raw`Reflexiva, simétrica y transitiva`,
        String.raw`Arreflexiva, asimétrica y transitiva`,
        String.raw`Solo simétrica y transitiva`,
      ],
      correcta: 0,
      respuesta: String.raw`**Orden amplio** = reflexiva + antisimétrica + transitiva (ej. "$\le$" o "divide a"). La opción 2 es **equivalencia** y la 3 es **orden estricto**.`,
    },
    {
      id: "alg-u05-027", tipo: "texto", dificultad: "media",
      tags: ["clasificacion", "orden"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`¿En qué se diferencian orden amplio y orden estricto?`,
      respuesta: String.raw`- **Orden amplio:** reflexiva + **antisimétrica** + transitiva. Ej: "$\le$" sobre $\mathbb{N}$.
- **Orden estricto:** arreflexiva + **asimétrica** + transitiva. Ej: "$<$" sobre $\mathbb{N}$.

El amplio incluye los pares $(x,x)$; el estricto los excluye.`,
    },

    // ── Clases de equivalencia y partición ───────────────
    {
      id: "alg-u05-029", tipo: "concepto", dificultad: "media",
      tags: ["clases", "equivalencia"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`¿Qué es una clase de equivalencia y qué forman las clases?`,
      respuesta: String.raw`Para una relación de equivalencia, la clase de $a$ es
$$[a] = \{x \in A : (x,a) \in R\}$$
(todos los relacionados con $a$). El conjunto de las clases forma una **partición** de $A$.`,
    },
    {
      id: "alg-u05-030", tipo: "texto", dificultad: "media",
      tags: ["particion", "clases"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`Enunciá las propiedades de una partición generada por una equivalencia.`,
      respuesta: String.raw`- Ninguna clase es vacía.
- Misma clase $\Rightarrow$ relacionados: $(a,b) \in R$.
- Clases distintas $\Rightarrow$ no relacionados.
- Clases distintas son **disjuntas**: $C_i \cap C_k = \varnothing$ ($i \neq k$).
- La **unión** de todas las clases es $A$.`,
    },

    // ── Divisibilidad ────────────────────────────────────
    {
      id: "alg-u05-032", tipo: "concepto", dificultad: "facil",
      tags: ["divisibilidad"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/unidad-05-relaciones/apuntes/relaciones.pdf"],
      pregunta: String.raw`¿Qué significa $x \mid y$ y con qué expresiones equivale?`,
      respuesta: String.raw`$x \mid y$ ("$x$ divide a $y$") significa $\exists\,k \in \mathbb{N} : y = k\cdot x$.

Equivale a: "$x$ es divisor de $y$", "$y$ es múltiplo de $x$", "$y$ es divisible por $x$".`,
    },
    {
      id: "alg-u05-033", tipo: "ejercicio", dificultad: "dificil",
      tags: ["divisibilidad", "orden", "demostracion"],
      fuente: ["algebra/unidad-05-relaciones/ejercicios/relaciones.pdf", "algebra/unidad-05-relaciones/resumen.md"],
      pregunta: String.raw`Demostrá que $R = \{(x,y) \in \mathbb{N}^{2} : x \mid y\}$ es de orden amplio.`,
      respuesta: String.raw`Hay que probar las 3 propiedades:
- **Reflexiva:** $x \mid x$ porque $x = 1 \cdot x$.
- **Antisimétrica:** si $x \mid y$ e $y \mid x$ en $\mathbb{N}$, entonces $x = y$.
- **Transitiva:** si $y = k\cdot x$ y $z = j\cdot y$, entonces $z = (j\cdot k)\cdot x \Rightarrow x \mid z$.

Cumple reflexiva + antisimétrica + transitiva $\Rightarrow$ **orden amplio**. $\blacksquare$`,
    },
    {
      id: "alg-u05-034", tipo: "opcion-multiple", dificultad: "dificil",
      tags: ["divisibilidad", "antisimetria"],
      fuente: "algebra/cheatsheets/unidad-05-relaciones.html",
      pregunta: String.raw`La relación "divide a" ($x \mid y$), ¿en qué conjunto es antisimétrica (y por lo tanto orden amplio)?`,
      opciones: [
        String.raw`En $\mathbb{Z}$`,
        String.raw`En $\mathbb{N}$ (no en $\mathbb{Z}$)`,
        String.raw`En cualquier conjunto`,
        String.raw`Nunca es antisimétrica`,
      ],
      correcta: 1,
      respuesta: String.raw`En $\mathbb{N}$. En $\mathbb{Z}$ falla la antisimetría: $2 \mid -2$ y $-2 \mid 2$ pero $2 \neq -2$.`,
    },

    // ── Método: demostrar vs verificar ───────────────────
    {
      id: "alg-u05-035", tipo: "texto", dificultad: "media",
      tags: ["demostracion", "metodo"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/cheatsheets/unidad-05-relaciones.html"],
      pregunta: String.raw`¿Cuándo se **verifica** una propiedad y cuándo hay que **demostrarla**?`,
      respuesta: String.raw`- **Conjunto finito (por extensión):** se **verifica** revisando todos los pares (matriz o diagrama). Para **negar**, alcanza un **contraejemplo**.
- **Conjunto infinito (por comprensión, $\mathbb{N}$/$\mathbb{Z}$):** no se pueden listar los pares → hay que **demostrar** en general con la condición que define $R$.

El final es **oral**: practicá justificar cada propiedad.`,
    },

    // ── Alcance del final ────────────────────────────────
    {
      id: "alg-u05-036", tipo: "concepto", dificultad: "facil",
      tags: ["scope", "final"],
      fuente: ["algebra/unidad-05-relaciones/resumen.md", "algebra/cheatsheets/unidad-05-relaciones.html"],
      pregunta: String.raw`¿Qué temas de "Relaciones" **no** entran en este final?`,
      respuesta: String.raw`No entran (ausentes en apuntes, ejercicios y bibliografía de la materia):
- **Composición** $R \circ S$.
- **Clausuras / cierres** (reflexivo, simétrico, transitivo) y **algoritmo de Warshall**.
- **Diagramas de Hasse**, **orden parcial vs. total**.
- **Elementos notables** (maximal/minimal, cotas, supremo/ínfimo).`,
    },

  ],
});
