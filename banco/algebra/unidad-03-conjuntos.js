/* Mazo — Álgebra · Unidad 03 · Conjuntos
   Contenido en los campos pregunta/respuesta: usar SIEMPRE String.raw`...`
   para que el LaTeX (\cup, \cap, \begin{aligned}…) se escriba tal cual.
   Enfoque FINAL: propiedades de memoria, demostración y simplificación.
   Bloques del sistema «Manual»: `> [!prof|trampa|vale|exam|nota|fx] tag`.
   Nada de emoji como identificador de bloque (ver card-schema.md § Bloques). */
FLASHCARDS.deck({
  materia: "algebra",
  unidad: "03-conjuntos",
  titulo: "Conjuntos",
  cards: [

    /* ── Fundamentos ───────────────────────────── */
    {
      id: "alg-u03-001",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["fundamentos", "pertenencia"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`¿Qué son «conjunto», «elemento» y «pertenencia», y cómo se anota la pertenencia?`,
      respuesta: String.raw`Son **términos primitivos**: se aceptan sin definición formal (definirlos llevaría a un círculo vicioso).

Pertenencia = relación entre un **elemento** y un **conjunto**: $a \in X$ (pertenece), $a \notin X$ (no pertenece). Conjuntos con MAYÚSCULA, elementos con minúscula.`,
    },
    {
      id: "alg-u03-002",
      tipo: "completar",
      dificultad: "facil",
      tags: ["fundamentos", "definicion"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Un conjunto definido por ____ enumera todos sus elementos; definido por ____ se da la propiedad que los caracteriza.`,
      respuesta: String.raw`**extensión** / **comprensión**.

Ej: $A = \{1, 2, 3\}$ (extensión) $= \{x \mid x \in \mathbb{N} \land x \le 3\}$ (comprensión). Se lee «el conjunto de las $x$ tales que…».`,
    },
    {
      id: "alg-u03-003",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["fundamentos", "especiales"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Definí: conjunto vacío, unitario, referencial (universal) y cardinal.`,
      respuesta: String.raw`- **Vacío** $\varnothing$ o $\{\,\}$: no tiene elementos.
- **Unitario**: un solo elemento, ej. $\{3\}$.
- **Referencial / universal** $R$ (o $U$): conjunto del que se toman los elementos (se dibuja como rectángulo).
- **Cardinal** $\#(A)$: cantidad de elementos.`,
    },

    /* ── Conjuntos numéricos ───────────────────── */
    {
      id: "alg-u03-004",
      tipo: "completar",
      dificultad: "facil",
      tags: ["conjuntos-numericos"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Según el apunte oficial: $\mathbb{N} = \{$ ____ $\}$ (sin cero) y $\mathbb{N}_0 = \{$ ____ $\}$.`,
      respuesta: String.raw`$\mathbb{N} = \{1, 2, 3, \dots\}$ (naturales, **sin** el cero) y $\mathbb{N}_0 = \{0, 1, 2, 3, \dots\}$ (naturales con el cero).

Ojo: el apunte distingue $\mathbb{N}$ de $\mathbb{N}_0$; no son lo mismo.`,
    },
    {
      id: "alg-u03-005",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["conjuntos-numericos", "jerarquia"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Escribí la cadena de contención de los conjuntos numéricos y definí $\mathbb{R}$.`,
      respuesta: String.raw`$$\mathbb{N} \subset \mathbb{N}_0 \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$
Los reales $\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$ (racionales $\cup$ irracionales). Irracionales = infinitos decimales **no** periódicos ($\pi$, $e$, $\sqrt{2}$).`,
    },

    /* ── Relaciones entre conjuntos ────────────── */
    {
      id: "alg-u03-006",
      tipo: "concepto",
      dificultad: "media",
      tags: ["inclusion"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Diferenciá la inclusión amplia $A \subseteq B$ de la estricta $A \subset B$.`,
      respuesta: String.raw`- **Amplia** $A \subseteq B$: todo elemento de $A$ está en $B$. $\;A \subseteq B \Leftrightarrow \forall x:(x \in A \to x \in B)$.
- **Estricta** $A \subset B$: además existe **algún** elemento de $B$ que no está en $A$ (subconjunto propio).

Contrarrecíproco útil: $A \subseteq B \Leftrightarrow \forall x:(x \notin B \to x \notin A)$.`,
    },
    {
      id: "alg-u03-007",
      tipo: "texto",
      dificultad: "media",
      tags: ["igualdad", "doble-inclusion"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`¿Cuándo dos conjuntos son iguales? Escribí el criterio que se usa para demostrarlo.`,
      respuesta: String.raw`$$A = B \Leftrightarrow A \subseteq B \land B \subseteq A$$
(**doble inclusión**). No importan el orden ni los repetidos: $\{1,3,5\} = \{1,3,5,1,5\}$.`,
    },
    {
      id: "alg-u03-008",
      tipo: "completar",
      dificultad: "facil",
      tags: ["inclusion", "vacio"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Completá: el conjunto vacío está incluido en ____ los conjuntos, y el vacío es ____.`,
      respuesta: String.raw`en **todos** ($\varnothing \subseteq A,\ \forall A$); el vacío es **único**.`,
    },

    /* ── Conjunto de partes ────────────────────── */
    {
      id: "alg-u03-009",
      tipo: "concepto",
      dificultad: "media",
      tags: ["conjunto-partes"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`¿Qué es el conjunto de partes $P(A)$ y cuántos elementos tiene?`,
      respuesta: String.raw`$P(A) = \{X \mid X \subseteq A\}$: el conjunto de **todos los subconjuntos** de $A$.

Cardinal: $\#P(A) = 2^{\#(A)}$. Siempre $A \in P(A)$ y $\varnothing \in P(A)$.`,
    },
    {
      id: "alg-u03-010",
      tipo: "practica",
      tags: ["conjunto-partes"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      concepto: String.raw`Conjunto de partes $P(A)$ (todos los subconjuntos; $\#P(A)=2^{\#(A)}$). Sube por ejes: más elementos (1→2→3) → cardinal con $|A|$ grande → elementos que son conjuntos (la trampa de $\in$ vs $\subseteq$).`,
      variantes: [
        // N1 — 1 elemento
        [
          { pregunta: String.raw`Escribí $P(A)$ y su cardinal para $A=\{5\}$.`, respuesta: String.raw`$$P(A)=\{\varnothing,\ \{5\}\} \qquad \#P(A)=2^{1}=2$$`, pista: "Siempre están ∅ y el propio A; en total 2^(#A) subconjuntos." },
          { pregunta: String.raw`Escribí $P(A)$ y su cardinal para $A=\{7\}$.`, respuesta: String.raw`$$P(A)=\{\varnothing,\ \{7\}\} \qquad \#P(A)=2$$` },
        ],
        // N2 — 2 elementos
        [
          { pregunta: String.raw`Escribí $P(A)$ y su cardinal para $A=\{1,2\}$.`, respuesta: String.raw`$$P(A)=\{\varnothing,\ \{1\},\ \{2\},\ \{1,2\}\} \qquad \#P(A)=2^{2}=4$$` },
          { pregunta: String.raw`Escribí $P(A)$ y su cardinal para $A=\{3,5\}$.`, respuesta: String.raw`$$P(A)=\{\varnothing,\ \{3\},\ \{5\},\ \{3,5\}\} \qquad \#P(A)=4$$` },
        ],
        // N3 — 3 elementos
        [
          { pregunta: String.raw`Escribí $P(A)$ y su cardinal para $A=\{1,2,3\}$.`, respuesta: String.raw`$$P(A)=\{\varnothing,\{1\},\{2\},\{3\},\{1,2\},\{1,3\},\{2,3\},\{1,2,3\}\}$$
$\#P(A)=2^{3}=8$.` },
          { pregunta: String.raw`Escribí $P(A)$ y su cardinal para $A=\{a,b,c\}$.`, respuesta: String.raw`$$P(A)=\{\varnothing,\{a\},\{b\},\{c\},\{a,b\},\{a,c\},\{b,c\},\{a,b,c\}\}$$
$\#P(A)=8$.` },
        ],
        // N4 — solo el cardinal (|A| grande)
        [
          { pregunta: String.raw`¿Cuántos subconjuntos tiene $A=\{1,2,3,4\}$? (es decir $\#P(A)$)`, respuesta: String.raw`$$\#P(A)=2^{4}=16$$
(listarlos sería: 1 vacío + 4 de un elemento + 6 de dos + 4 de tres + 1 de cuatro.)` },
          { pregunta: String.raw`¿Cuántos subconjuntos tiene un conjunto de 5 elementos?`, respuesta: String.raw`$$\#P(A)=2^{5}=32$$` },
        ],
        // N5 — elementos que son conjuntos (∈ vs ⊆)
        [
          { pregunta: String.raw`Escribí $P(A)$ para $A=\{1,\{2\},3\}$ (ojo: $\{2\}$ es **un** elemento).`, respuesta: String.raw`$A$ tiene 3 elementos: $1$, $\{2\}$ y $3$. Entonces $\#P(A)=8$:
$$P(A)=\{\varnothing,\{1\},\{\{2\}\},\{3\},\{1,\{2\}\},\{1,3\},\{\{2\},3\},\{1,\{2\},3\}\}$$` },
          { pregunta: String.raw`Escribí $P(A)$ para $A=\{\varnothing,\ 1\}$.`, respuesta: String.raw`$A$ tiene 2 elementos: $\varnothing$ y $1$. $\#P(A)=4$:
$$P(A)=\{\varnothing,\ \{\varnothing\},\ \{1\},\ \{\varnothing,1\}\}$$
Ojo: $\varnothing$ (subconjunto vacío) y $\{\varnothing\}$ (subconjunto que contiene al elemento $\varnothing$) son distintos.` },
        ],
      ],
    },

    /* ── Operaciones ───────────────────────────── */
    {
      id: "alg-u03-011",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["operaciones", "interseccion", "union"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Definí simbólicamente la intersección $A \cap B$ y la unión $A \cup B$.`,
      respuesta: String.raw`$$A \cap B = \{x \mid x \in A \land x \in B\}$$ (en **ambos**)
$$A \cup B = \{x \mid x \in A \lor x \in B\}$$ (en **al menos uno**)
Son **disjuntos** si $A \cap B = \varnothing$.`,
    },
    {
      id: "alg-u03-012",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["operaciones", "diferencia"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Definí la diferencia $A - B$. ¿Es conmutativa?`,
      respuesta: String.raw`$A - B = \{x \mid x \in A \land x \notin B\}$ (lo de $A$ que **no** está en $B$).

**No** es conmutativa: $A - B \neq B - A$. Si $A \subseteq B$ entonces $A - B = \varnothing$.`,
    },
    {
      id: "alg-u03-013",
      tipo: "concepto",
      dificultad: "media",
      tags: ["operaciones", "diferencia-simetrica"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`¿Qué es la diferencia simétrica $A \triangle B$? Escribí sus dos formas equivalentes.`,
      respuesta: String.raw`Elementos de $A$ o $B$ pero **no de ambos**:
$$A \triangle B = (A - B) \cup (B - A) = (A \cup B) - (A \cap B)$$`,
    },
    {
      id: "alg-u03-014",
      tipo: "completar",
      dificultad: "media",
      tags: ["operaciones", "complemento"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`El complemento es $A^c = $ ____ . Sus propiedades: $\varnothing^c = $ ____ , $\;R^c = $ ____ , $\;(A^c)^c = $ ____ .`,
      respuesta: String.raw`$A^c = R - A$ (lo del referencial que **no** está en $A$).

$\varnothing^c = R$ ; $\;R^c = \varnothing$ ; $\;(A^c)^c = A$ (**involución** / doble complemento).`,
    },
    {
      id: "alg-u03-015",
      tipo: "practica",
      tags: ["operaciones", "conjuntos-dados"],
      fuente: ["algebra/examenes/parcial-1.md", "algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      concepto: String.raw`Operar conjuntos dados por extensión. Sube por ejes: $\cap/\cup$ → diferencia y complemento → combinación (De Morgan numérico) → diferencia simétrica → expresión con varios operadores.`,
      variantes: [
        // N1 — intersección y unión
        [
          { pregunta: String.raw`Con $A=\{1,2,3,4\}$ y $B=\{3,4,5,6\}$, hallá $A\cap B$ y $A\cup B$.`, respuesta: String.raw`$$A\cap B = \{3,4\} \qquad A\cup B = \{1,2,3,4,5,6\}$$`, pista: "∩ = elementos en ambos; ∪ = en al menos uno (sin repetir)." },
          { pregunta: String.raw`Con $A=\{2,4,6\}$ y $B=\{4,6,8\}$, hallá $A\cap B$ y $A\cup B$.`, respuesta: String.raw`$$A\cap B = \{4,6\} \qquad A\cup B = \{2,4,6,8\}$$` },
        ],
        // N2 — diferencia y complemento
        [
          { pregunta: String.raw`Con $U=\{1,\dots,8\}$, $A=\{2,4,6,8\}$, $B=\{1,2,3,4\}$, hallá $A-B$ y $A^c$.`, respuesta: String.raw`$$A-B = \{6,8\} \qquad A^c = U-A = \{1,3,5,7\}$$` },
          { pregunta: String.raw`Con $U=\{1,\dots,6\}$, $A=\{1,3,5\}$, $B=\{1,2,3\}$, hallá $A-B$ y $A^c$.`, respuesta: String.raw`$$A-B = \{5\} \qquad A^c = \{2,4,6\}$$` },
        ],
        // N3 — combinación (De Morgan numérico)
        [
          { pregunta: String.raw`Con $U=\{1,\dots,10\}$, $A=\{2,4,6,8,10\}$, $B=\{1,2,3,4,5\}$, $C=\{1,3,5,7,9\}$, hallá $B\cap A$, $B-U$, $C^c$ y $A^c\cap B^c$.`, respuesta: String.raw`- $B\cap A = \{2,4\}$
- $B-U = \varnothing$ (todo $B$ está en $U$)
- $C^c = \{2,4,6,8,10\}$
- $A^c=\{1,3,5,7,9\}$, $B^c=\{6,7,8,9,10\}$ → $A^c\cap B^c = \{7,9\}$ (que es $(A\cup B)^c$).` },
          { pregunta: String.raw`Con $U=\{1,\dots,8\}$, $A=\{1,2,3,4\}$, $B=\{3,4,5,6\}$, hallá $A^c\cap B^c$ y verificá con De Morgan.`, respuesta: String.raw`$A^c=\{5,6,7,8\}$, $B^c=\{1,2,7,8\}$ → $A^c\cap B^c=\{7,8\}$.
Por De Morgan $=(A\cup B)^c$: $A\cup B=\{1,2,3,4,5,6\}$, su complemento $=\{7,8\}$ ✓.` },
        ],
        // N4 — diferencia simétrica
        [
          { pregunta: String.raw`Con $A=\{1,2,3,4\}$ y $B=\{3,4,5,6\}$, hallá $A\triangle B$.`, respuesta: String.raw`$A\triangle B = (A-B)\cup(B-A) = \{1,2\}\cup\{5,6\}$:
$$A\triangle B = \{1,2,5,6\}$$` },
          { pregunta: String.raw`Con $A=\{1,2,3\}$ y $B=\{2,3,4,5\}$, hallá $A\triangle B$.`, respuesta: String.raw`$A-B=\{1\}$, $B-A=\{4,5\}$:
$$A\triangle B = \{1,4,5\}$$` },
        ],
        // N5 — expresión con varios operadores
        [
          { pregunta: String.raw`Con $U=\{1,\dots,10\}$, $A=\{1,2,3,4,5\}$, $B=\{4,5,6,7\}$, $C=\{2,4,6,8\}$, hallá $(A\cup B)\cap C^c$.`, respuesta: String.raw`$A\cup B=\{1,2,3,4,5,6,7\}$; $C^c=\{1,3,5,7,9,10\}$:
$$(A\cup B)\cap C^c = \{1,3,5,7\}$$` },
          { pregunta: String.raw`Con los mismos $U$, $A$, $B$, $C$, hallá $(A\cap B)\cup C$.`, respuesta: String.raw`$A\cap B=\{4,5\}$:
$$(A\cap B)\cup C = \{4,5\}\cup\{2,4,6,8\} = \{2,4,5,6,8\}$$` },
        ],
      ],
    },

    /* ── Propiedades / leyes (FINAL) ───────────── */
    {
      id: "alg-u03-016",
      tipo: "texto",
      dificultad: "media",
      tags: ["leyes", "de-morgan", "final"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Enunciá las leyes de De Morgan para conjuntos.`,
      respuesta: String.raw`$$(A \cup B)^c = A^c \cap B^c$$
$$(A \cap B)^c = A^c \cup B^c$$
El complemento de la unión es la intersección de los complementos (y viceversa).`,
    },
    {
      id: "alg-u03-017",
      tipo: "concepto",
      dificultad: "media",
      tags: ["leyes", "diferencia", "final"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`¿Por qué conviene reescribir $A - B$ como $A \cap B^c$ en una simplificación?`,
      respuesta: String.raw`Porque transforma una **resta** (que no tiene leyes propias) en una **intersección**, y ahí ya podés aplicar todas las leyes (distributiva, De Morgan, inverso…).

$$A - B = A \cap B^c$$
Es casi siempre el **primer paso** de una demostración con restas.`,
    },
    {
      id: "alg-u03-018",
      tipo: "texto",
      dificultad: "media",
      tags: ["leyes", "distributiva"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Escribí las dos leyes distributivas de conjuntos.`,
      respuesta: String.raw`$$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$
$$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$`,
    },
    {
      id: "alg-u03-019",
      tipo: "completar",
      dificultad: "facil",
      tags: ["leyes", "inverso-neutro-dominacion"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`Completá: $A \cap A^c = $ ____ ; $\;A \cup A^c = $ ____ ; $\;A \cup \varnothing = $ ____ ; $\;A \cap R = $ ____ ; $\;A \cup R = $ ____ ; $\;A \cap \varnothing = $ ____ .`,
      respuesta: String.raw`$A \cap A^c = \varnothing$ y $A \cup A^c = R$ (**inverso** / complemento).

$A \cup \varnothing = A$ y $A \cap R = A$ (**neutro**).

$A \cup R = R$ y $A \cap \varnothing = \varnothing$ (**dominación**).`,
    },
    {
      id: "alg-u03-020",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["correspondencia-logica"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`¿A qué operación lógica corresponde cada una: $\cap$, $\cup$, $A^c$, $\subseteq$, $=$?`,
      respuesta: String.raw`$\cap \leftrightarrow \land$ ; $\;\cup \leftrightarrow \lor$ ; $\;A^c \leftrightarrow \lnot a$ ; $\;\subseteq \leftrightarrow \to$ ; $\;= \leftrightarrow \leftrightarrow$.

Además $R \leftrightarrow$ tautología y $\varnothing \leftrightarrow$ contradicción. **Por eso las leyes de conjuntos son las mismas que las de lógica.**`,
    },
    {
      id: "alg-u03-021",
      tipo: "concepto",
      dificultad: "media",
      tags: ["final", "examen"],
      fuente: ["algebra/transcripciones/2026-06-16.md"],
      pregunta: String.raw`En el **final**, ¿qué material se permite en mesa y qué hay que saber de memoria?`,
      respuesta: String.raw`En mesa **solo** se permiten las **tablas de verdad** (el resumen del 1er parcial).

Las **propiedades / leyes de conjuntos NO** van en hoja permitida: se rinden **de memoria**. En los parciales casi no se tomaron, pero en el final pesan.`,
    },

    /* ── Demostración y simplificación (FINAL) ── */
    {
      id: "alg-u03-022",
      tipo: "concepto",
      dificultad: "media",
      tags: ["demostracion", "metodo", "final"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`¿Qué tres métodos hay para demostrar una igualdad de conjuntos?`,
      respuesta: String.raw`1. **Algebraico**: transformar un miembro con las leyes hasta llegar al otro.
2. **Por lógica**: traducir a proposiciones (con $\cap\leftrightarrow\land$, $\cup\leftrightarrow\lor$, $A^c\leftrightarrow\lnot a$), aplicar equivalencias lógicas y volver.
3. **Doble inclusión**: probar $A \subseteq B$ y $B \subseteq A$ tomando un $x$ genérico.`,
    },
    {
      id: "alg-u03-023",
      tipo: "practica",
      tags: ["simplificacion", "leyes", "final"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html", "algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      concepto: String.raw`Simplificar/transformar expresiones de conjuntos con las leyes (absorción, distributiva, inverso/neutro, De Morgan; resta $A-B=A\cap B^c$). Sube por ejes: una ley → varias → con complemento → con resta → demostrar una igualdad.`,
      variantes: [
        // N1 — una ley (absorción)
        [
          { pregunta: String.raw`Simplificá $A \cap (A \cup B)$.`, respuesta: String.raw`Por **absorción**:
$$A \cap (A \cup B) = A$$`, pista: "Fijate si una parte absorbe a la otra (absorción)." },
          { pregunta: String.raw`Simplificá $A \cup (A \cap B)$.`, respuesta: String.raw`**Absorción**:
$$A \cup (A \cap B) = A$$` },
        ],
        // N2 — distributiva + inverso + neutro
        [
          { pregunta: String.raw`Simplificá $(A \cap B) \cup (A \cap B^c)$.`, respuesta: String.raw`$$\begin{aligned} (A\cap B)\cup(A\cap B^c) &= A\cap(B\cup B^c) \quad\text{(distributiva)} \\ &= A\cap R = A \quad\text{(inverso, neutro)} \end{aligned}$$` },
          { pregunta: String.raw`Simplificá $(A \cup B) \cap (A \cup B^c)$.`, respuesta: String.raw`$$\begin{aligned} (A\cup B)\cap(A\cup B^c) &= A\cup(B\cap B^c) \quad\text{(distributiva)} \\ &= A\cup\varnothing = A \quad\text{(inverso, neutro)} \end{aligned}$$` },
        ],
        // N3 — con complemento
        [
          { pregunta: String.raw`Simplificá $A \cup (A^c \cap B)$.`, respuesta: String.raw`$$\begin{aligned} A\cup(A^c\cap B) &= (A\cup A^c)\cap(A\cup B) \quad\text{(distributiva)} \\ &= R\cap(A\cup B) = A\cup B \quad\text{(inverso, neutro)} \end{aligned}$$` },
          { pregunta: String.raw`Simplificá $A \cap (A^c \cup B)$.`, respuesta: String.raw`$$\begin{aligned} A\cap(A^c\cup B) &= (A\cap A^c)\cup(A\cap B) \quad\text{(distributiva)} \\ &= \varnothing\cup(A\cap B) = A\cap B \quad\text{(inverso, neutro)} \end{aligned}$$` },
        ],
        // N4 — con resta (reescribir A−B = A∩B^c)
        [
          { pregunta: String.raw`Simplificá $(A - B) \cup (A \cap B)$.`, respuesta: String.raw`$$\begin{aligned} (A-B)\cup(A\cap B) &= (A\cap B^c)\cup(A\cap B) \quad\text{(resta)} \\ &= A\cap(B^c\cup B) = A\cap R = A \end{aligned}$$` },
          { pregunta: String.raw`Simplificá $(A \cup B) - B$.`, respuesta: String.raw`$$\begin{aligned} (A\cup B)-B &= (A\cup B)\cap B^c \quad\text{(resta)} \\ &= (A\cap B^c)\cup(B\cap B^c) = (A\cap B^c)\cup\varnothing = A - B \end{aligned}$$` },
        ],
        // N5 — demostrar una igualdad
        [
          { pregunta: String.raw`Demostrá por leyes que $A - (A \cap B) = A - B$.`, respuesta: String.raw`$$\begin{aligned} A-(A\cap B) &= A\cap(A\cap B)^c \quad\text{(resta)} \\ &= A\cap(A^c\cup B^c) \quad\text{(De Morgan)} \\ &= (A\cap A^c)\cup(A\cap B^c) \quad\text{(distributiva)} \\ &= \varnothing\cup(A\cap B^c) = A\cap B^c = A - B \end{aligned}$$` },
          { pregunta: String.raw`Demostrá por leyes que $(A - B) \cup B = A \cup B$.`, respuesta: String.raw`$$\begin{aligned} (A-B)\cup B &= (A\cap B^c)\cup B \quad\text{(resta)} \\ &= (A\cup B)\cap(B^c\cup B) \quad\text{(distributiva)} \\ &= (A\cup B)\cap R = A\cup B \quad\text{(inverso, neutro)} \end{aligned}$$` },
        ],
      ],
    },
    {
      id: "alg-u03-024",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["demostracion", "leyes", "final"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`Demostrá por leyes que $(A \cup B) - B = A - B$, justificando cada paso.`,
      respuesta: String.raw`$$\begin{aligned} (A \cup B) - B &= (A \cup B) \cap B^c \quad\text{(resta a intersección)} \\ &= (A \cap B^c) \cup (B \cap B^c) \quad\text{(distributiva)} \\ &= (A \cap B^c) \cup \varnothing \quad\text{(inverso: } B \cap B^c = \varnothing) \\ &= A \cap B^c = A - B \quad\text{(neutro de } \cup) \end{aligned}$$`,
    },
    {
      id: "alg-u03-025",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["demostracion", "logica", "de-morgan", "final"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html", "algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Demostrá $(A \cup B)^c = A^c \cap B^c$ usando lógica (element-chasing).`,
      respuesta: String.raw`$$\begin{aligned} x \in (A \cup B)^c &\Leftrightarrow \lnot(x \in A \cup B) \quad\text{(def. complemento)} \\ &\Leftrightarrow \lnot(x \in A \lor x \in B) \quad\text{(def. unión)} \\ &\Leftrightarrow \lnot(x \in A) \land \lnot(x \in B) \quad\text{(De Morgan lógico)} \\ &\Leftrightarrow x \in A^c \land x \in B^c \quad\text{(def. complemento)} \\ &\Leftrightarrow x \in A^c \cap B^c \quad\text{(def. intersección)} \end{aligned}$$`,
    },
    {
      id: "alg-u03-026",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["demostracion", "de-morgan", "parcial", "final"],
      fuente: ["algebra/examenes/parcial-1.md"],
      pregunta: String.raw`Expresá $A^c \cap B^c$ con una fórmula equivalente y justificá (era el ítem d del parcial 1).`,
      respuesta: String.raw`Por De Morgan:
$$A^c \cap B^c = (A \cup B)^c$$
En el parcial bastaba escribir el resultado; en el **final** hay que **justificar** el paso (nombrando la ley de De Morgan).`,
    },

    /* ── Problemas de conteo ───────────────────── */
    {
      id: "alg-u03-027",
      tipo: "completar",
      dificultad: "facil",
      tags: ["conteo"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`Completá la fórmula de conteo para dos conjuntos: $\#(A \cup B) = $ ____ . ¿Por qué se resta el último término?`,
      respuesta: String.raw`$$\#(A \cup B) = \#A + \#B - \#(A \cap B)$$
Se resta porque al sumar $\#A + \#B$ la intersección queda contada **dos veces**.`,
    },
    {
      id: "alg-u03-028",
      tipo: "texto",
      dificultad: "media",
      tags: ["conteo"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`Escribí la fórmula de conteo para tres conjuntos $\#(A \cup B \cup C)$.`,
      respuesta: String.raw`$$\#(A \cup B \cup C) = \#A + \#B + \#C - \#(A\cap B) - \#(A\cap C) - \#(B\cap C) + \#(A\cap B\cap C)$$
Sumo los individuales, resto las **3 dobles** (contadas 2 veces) y sumo la **triple** (borrada de más).`,
    },
    {
      id: "alg-u03-029",
      tipo: "concepto",
      dificultad: "media",
      tags: ["conteo", "trampa"],
      fuente: ["algebra/transcripciones/2026-04-07.md", "algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`En conteo, ¿qué diferencia hay entre «solo $A$ y $B$» y «$A$ y $B$» (sin «solo»)?`,
      respuesta: String.raw`- **«Solo $A$ y $B$»** = la intersección doble **sin** la triple.
- **«$A$ y $B$»** (sin «solo») = toda la intersección $A \cap B$, **incluyendo** la triple $A \cap B \cap C$.

Es la trampa típica que marcó la profe; conviene dibujar el Venn.`,
    },
    {
      id: "alg-u03-030",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["conteo"],
      fuente: ["algebra/transcripciones/2026-04-07.md", "algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`Ingresan 40 alumnos a la facultad. 30 cursan Análisis I y 35 Sistemas y Métodos. ¿Cuántos cursan **ambas**?`,
      respuesta: String.raw`$$40 = 30 + 35 - x \;\Rightarrow\; x = 25 \text{ cursan ambas.}$$
Verificación: solo Análisis $= 30 - 25 = 5$; solo Sistemas $= 35 - 25 = 10$; $\;5 + 25 + 10 = 40$ ✓.`,
    },
    {
      id: "alg-u03-031",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      tags: ["conteo", "parcial"],
      fuente: ["algebra/examenes/parcial-1.md"],
      pregunta: String.raw`Ciudad de 10000 adultos: 7000 radio, 4000 periódicos, 1000 TV; 2100 radio$\cap$periódicos, 280 radio$\cap$TV, 900 TV$\cap$periódicos, 200 los tres. ¿Cuántos **no** escuchan radio ni leen periódicos ni ven TV?`,
      opciones: ["1080", "1200", "920"],
      correcta: 0,
      respuesta: String.raw`Unión por inclusión-exclusión:
$$7000+4000+1000-2100-280-900+200 = 8920.$$
Fuera de todo: $10000 - 8920 = \mathbf{1080}$. (1200 es «leen periódicos solamente».)`,
    },

    /* ── Relaciones binarias (final desde 3ª fecha) ── */
    {
      id: "alg-u03-032",
      tipo: "concepto",
      dificultad: "media",
      tags: ["relaciones", "producto-cartesiano"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`¿Qué es el producto cartesiano $A \times B$? ¿Cuántos pares tiene y es conmutativo?`,
      respuesta: String.raw`$A \times B = \{(a, b) \mid a \in A \land b \in B\}$: todos los **pares ordenados**.

$\#(A \times B) = \#A \cdot \#B$. **No** es conmutativo: $A \times B \neq B \times A$. Una relación binaria es cualquier $R \subseteq A \times B$.`,
    },
    {
      id: "alg-u03-033",
      tipo: "completar",
      dificultad: "media",
      tags: ["relaciones", "propiedades"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`Relación sobre $A$ — completá: Reflexiva si $\forall a$: ____ ; Simétrica si $aRb \Rightarrow$ ____ ; Antisimétrica si $(aRb \land bRa) \Rightarrow$ ____ ; Transitiva si $(aRb \land bRc) \Rightarrow$ ____ .`,
      respuesta: String.raw`- **Reflexiva**: $aRa$.
- **Simétrica**: $bRa$.
- **Antisimétrica**: $a = b$.
- **Transitiva**: $aRc$.`,
    },
    {
      id: "alg-u03-034",
      tipo: "concepto",
      dificultad: "media",
      tags: ["relaciones", "equivalencia", "orden"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`¿Qué propiedades definen una relación de equivalencia y una de orden parcial?`,
      respuesta: String.raw`- **Equivalencia**: reflexiva + simétrica + transitiva. Genera **clases de equivalencia** (una **partición**: grupos disjuntos que cubren todo el conjunto). Ej: $\equiv \pmod{n}$.
- **Orden parcial**: reflexiva + antisimétrica + transitiva. Ej: $\le$ en $\mathbb{N}$, $\subseteq$ entre conjuntos.`,
    },
    {
      id: "alg-u03-035",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["relaciones", "clasificacion"],
      fuente: ["algebra/cheatsheets/unidad-03-conjuntos.html"],
      pregunta: String.raw`En $A = \{1,2,3\}$, sea $R = \{(1,1),(2,2),(3,3),(1,2),(2,1)\}$. ¿Es reflexiva, simétrica, antisimétrica, transitiva? ¿Qué tipo de relación es?`,
      respuesta: String.raw`- **Reflexiva**: sí (están $(1,1),(2,2),(3,3)$).
- **Simétrica**: sí (están $(1,2)$ y $(2,1)$).
- **Antisimétrica**: **no** (hay $(1,2)$ y $(2,1)$ con $1 \neq 2$).
- **Transitiva**: sí (se cumplen todos los encadenamientos).

Es una **relación de equivalencia** (reflexiva + simétrica + transitiva); sus clases son $\{1,2\}$ y $\{3\}$.`,
    },

    /* ── Repaso · opción múltiple ──────────────── */
    {
      id: "alg-u03-036",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["pertenencia", "inclusion", "trampa"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Sea $A = \{1,\ 2,\ \{3\}\}$. ¿Cuál afirmación es **correcta**?`,
      opciones: [String.raw`$3 \in A$`, String.raw`$\{3\} \in A$`, String.raw`$\{1\} \in A$`],
      correcta: 1,
      respuesta: String.raw`$\{3\} \in A$: el conjunto $\{3\}$ figura como **elemento** de $A$.

Ojo: $3 \notin A$ (no está suelto), y $\{1\}$ es **subconjunto** ($\{1\} \subseteq A$) pero **no** elemento. No confundas $\in$ (pertenencia) con $\subseteq$ (inclusión).`,
    },
    {
      id: "alg-u03-037",
      tipo: "opcion-multiple",
      dificultad: "facil",
      tags: ["conjunto-partes"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`Si $\#(A) = 4$, ¿cuántos subconjuntos tiene $A$ (es decir, $\#P(A)$)?`,
      opciones: ["8", "16", "32"],
      correcta: 1,
      respuesta: String.raw`$\#P(A) = 2^{\#(A)} = 2^{4} = 16$.`,
    },
    {
      id: "alg-u03-038",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["leyes", "de-morgan", "final"],
      fuente: ["algebra/unidad-03-conjuntos/apuntes/conjuntos.pdf"],
      pregunta: String.raw`¿Cuál de estas igualdades es **correcta**?`,
      opciones: [String.raw`$(A \cap B)^c = A^c \cap B^c$`, String.raw`$(A \cap B)^c = A^c \cup B^c$`, String.raw`$(A \cap B)^c = A \cup B$`],
      correcta: 1,
      respuesta: String.raw`Por De Morgan, $(A \cap B)^c = A^c \cup B^c$: el complemento de la intersección es la **unión** de los complementos. La primera opción es el error típico (cambia la operación mal).`,
    },

  ],
});
