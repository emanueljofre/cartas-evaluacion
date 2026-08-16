/* Mazo — Álgebra · Unidad 04 · Conteo
   Contenido en los campos pregunta/respuesta: usar SIEMPRE String.raw`...`
   para que el LaTeX (\#, \cup, \cap, \varnothing, \begin{aligned}…) se escriba tal cual.
   Enfoque FINAL: inclusión-exclusión, Venn/Carroll, "exactamente/al menos". NO combinatoria.
   Bloques del sistema «Manual»: `> [!prof|trampa|vale|exam|nota|fx] tag`.
   Nada de emoji como identificador de bloque (ver card-schema.md § Bloques). */
FLASHCARDS.deck({
  materia: "algebra",
  unidad: "04-conteo",
  titulo: "Conteo",
  cards: [

    /* ── Fundamentos ───────────────────────────── */
    {
      id: "alg-u04-001",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["cardinal", "notacion"],
      fuente: ["algebra/unidad-04-conteo/apuntes/conteo.pdf", "algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`¿Qué es el cardinal de un conjunto y cómo se nota?`,
      respuesta: String.raw`La **cantidad de elementos** del conjunto. Se nota $\#(A)$ o $|A|$.

Ej: $A = \{2,4,6,8\} \Rightarrow \#(A) = 4$. En conteo trabajamos con los **cardinales** (cantidades), no con los conjuntos en sí.`,
    },
    {
      id: "alg-u04-002",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["idea-central"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html", "algebra/transcripciones/2026-04-07.md"],
      pregunta: String.raw`¿Qué son los "problemas de conteo" y qué herramientas usan?`,
      respuesta: String.raw`Son **aplicación de las operaciones de conjuntos** (unión, intersección, complemento) a situaciones reales (personas, objetos, situaciones).

No hay conceptos nuevos respecto de la Unidad 3: es conjuntos aplicado a contar.`,
    },
    {
      id: "alg-u04-003",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["alcance", "final"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html", "algebra/unidad-04-conteo/apuntes/conteo.pdf"],
      pregunta: String.raw`¿La combinatoria (permutaciones, variaciones, combinaciones, factorial) entra en Conteo?`,
      respuesta: String.raw`**No.** En esta materia "conteo" es **exclusivamente cardinalidad + inclusión-exclusión** (Venn / Carroll).

No se toman permutaciones, variaciones, combinaciones ni factorial. No estudies eso para el final.`,
    },
    {
      id: "alg-u04-004",
      tipo: "completar",
      dificultad: "facil",
      tags: ["disjuntos"],
      fuente: ["algebra/unidad-04-conteo/apuntes/conteo.pdf"],
      pregunta: String.raw`Si $S \cap T = \varnothing$ (disjuntos), entonces $\#(S \cup T) = $ ____ .`,
      respuesta: String.raw`$$\#(S \cup T) = \#(S) + \#(T)$$
Se **suman** los cardinales. Se extiende a $n$ conjuntos si **ningún par** comparte elementos. Ej: 5 libros de APL + 5 Basic + 5 Fortran + 5 Pascal $= 20$.`,
    },

    /* ── 2 y 3 conjuntos ───────────────────────── */
    {
      id: "alg-u04-005",
      tipo: "completar",
      dificultad: "media",
      tags: ["inclusion-exclusion", "dos-conjuntos"],
      fuente: ["algebra/unidad-04-conteo/apuntes/conteo.pdf", "algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`Para 2 conjuntos no disjuntos: $\#(S \cup T) = $ ____ . ¿Por qué el último término?`,
      respuesta: String.raw`$$\#(S \cup T) = \#(S) + \#(T) - \#(S \cap T)$$
Al sumar $\#(S) + \#(T)$ la **intersección queda contada dos veces** $\Rightarrow$ se resta una vez.`,
    },
    {
      id: "alg-u04-006",
      tipo: "texto",
      dificultad: "media",
      tags: ["inclusion-exclusion", "tres-conjuntos"],
      fuente: ["algebra/unidad-04-conteo/apuntes/conteo.pdf", "algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`Escribí la fórmula de inclusión-exclusión para 3 conjuntos $\#(S \cup T \cup R)$.`,
      respuesta: String.raw`$$\#(S \cup T \cup R) = \#(S)+\#(T)+\#(R) - \#(S\cap T) - \#(S\cap R) - \#(T\cap R) + \#(S\cap T\cap R)$$
Sumo los individuales, resto las **3 dobles** (contadas 2 veces) y sumo la **triple** (borrada de más al restar las dobles).`,
    },
    {
      id: "alg-u04-007",
      tipo: "practica",
      tags: ["inclusion-exclusion", "venn"],
      fuente: ["algebra/unidad-04-conteo/apuntes/conteo.pdf", "algebra/unidad-04-conteo/ejercicios/problemas-de-conteo.pdf"],
      concepto: String.raw`Problemas de conteo por inclusión-exclusión (Venn). Sube por ejes: 2 conjuntos → despejar la intersección → 3 conjuntos (triple) → "exactamente / al menos dos" → "solo X" con despeje.`,
      variantes: [
        // N1 — 2 conjuntos: unión / ninguno (uso directo de la fórmula)
        [
          { pregunta: String.raw`En un grupo de 30 personas, 18 toman café y 15 toman té; 7 toman **ambas**. ¿Cuántas toman **al menos una**?`, respuesta: String.raw`$$\#(C\cup T) = 18 + 15 - 7 = 26$$`, pista: "Sumá los dos y restá la intersección (que quedó contada dos veces)." },
          { pregunta: String.raw`40 estudiantes: 25 cursan inglés, 20 francés y 12 **ambos**. ¿Cuántos **no cursan ninguno**?`, respuesta: String.raw`$\#(I\cup F) = 25+20-12 = 33$, entonces:

$$\text{ninguno} = 40 - 33 = 7$$` },
        ],
        // N2 — 2 conjuntos: despejar la intersección / "solo"
        [
          { pregunta: String.raw`50 personas: 30 leen el diario, 25 una revista y 5 **no leen nada**. ¿Cuántas leen **ambos**?`, respuesta: String.raw`Unión $= 50 - 5 = 45$. Despejo la intersección:

$$\#(D\cap R) = 30 + 25 - 45 = 10$$` },
          { pregunta: String.raw`60 alumnos aprobaron **al menos una** final: 40 aprobaron Matemática y 35 Física. ¿Cuántos aprobaron **solo Física**?`, respuesta: String.raw`$\#(M\cap F) = 40+35-60 = 15$. Entonces:

$$\text{solo Física} = 35 - 15 = 20$$` },
        ],
        // N3 — 3 conjuntos: despejar la triple
        [
          { pregunta: String.raw`Club de 1500 socios, 1200 practican al menos un deporte: $\#(F)=600$, $\#(B)=525$, $\#(N)=450$, $\#(F\cap B)=150$, $\#(B\cap N)=195$, $\#(F\cap N)=120$. ¿Cuántos practican **los tres**?`, respuesta: String.raw`$$1200 = 600+525+450 - 150-195-120 + x \Rightarrow 1110 + x = 1200$$
$$\#(F\cap B\cap N) = 90$$` },
          { pregunta: String.raw`210 personas, 190 usan **al menos una** red: $\#(A)=100$, $\#(B)=100$, $\#(C)=80$, $\#(A\cap B)=40$, $\#(A\cap C)=30$, $\#(B\cap C)=35$. ¿Cuántas usan **las tres**?`, respuesta: String.raw`$$190 = 100+100+80 - 40-30-35 + x \Rightarrow 175 + x = 190$$
$$\#(A\cap B\cap C) = 15$$` },
        ],
        // N4 — 3 conjuntos: "exactamente dos" / "al menos dos"
        [
          { pregunta: String.raw`112 alumnos, 3 libros ($A$, $M$, $S$): $\#(A)=65$, $\#(M)=32$, solo $A=29$, ($A\cap M$ pero no $S$)$=8$, $\#(M\cap S)=11$, los tres $=7$, ninguno $=10$. Hallá "**exactamente dos**" y "**al menos dos**".`, respuesta: String.raw`Regiones: $M\cap S$ solo $=11-7=4$; de $\#(A)$: $A\cap S$ solo $=65-29-8-7=21$.
- **Exactamente dos** $= 8+21+4 = 33$.
- **Al menos dos** $= 33 + 7 = 40$.` },
          { pregunta: String.raw`50 personas, 3 apps: $\#(A)=24$, $\#(B)=24$, $\#(C)=21$, $\#(A\cap B)=8$, $\#(A\cap C)=9$, $\#(B\cap C)=7$, las tres $=3$. ¿Cuántas usan **al menos dos**?`, respuesta: String.raw`$$\text{al menos dos} = \#(A\cap B)+\#(A\cap C)+\#(B\cap C) - 2\cdot\text{triple}$$
$$= 8+9+7 - 2\cdot3 = 18$$
(Exactamente dos sería $24 - 3\cdot3 = 15$.)` },
        ],
        // N5 — 3 conjuntos: "solo X" con despeje grande
        [
          { pregunta: String.raw`60 pares con fallas (cuero $C$, suela $S$, color $D$): solo $C=16$, solo $S=10$, las tres $=6$, $\#(C\cap S)=10$, $\#(C)=31$, $\#(S)=27$. Todos tienen al menos una falla. ¿Cuántos tienen **color desteñido** ($\#(D)$)?`, respuesta: String.raw`$C\cap S$ solo $=10-6=4$; de $\#(C)$: $C\cap D$ solo $=31-16-4-6=5$; de $\#(S)$: $S\cap D$ solo $=27-10-4-6=7$.
Unión $=60$: solo $D = 60-16-10-4-5-7-6 = 12$.
$$\#(D) = 12+5+7+6 = 30$$` },
          { pregunta: String.raw`80 personas, 3 idiomas ($A$, $B$, $C$): $\#(A)=28$, $\#(B)=24$, solo $A=12$, solo $B=9$, $\#(A\cap B)=9$, $\#(A\cap C)=11$, $\#(B\cap C)=10$, los tres $=4$, ninguno $=3$. ¿Cuántas hablan **solo $C$**?`, respuesta: String.raw`Dobles "solo": $A\cap B=9-4=5$, $A\cap C=11-4=7$, $B\cap C=10-4=6$. Unión $=80-3=77$.
$$\text{solo }C = 77 - (12+9+5+7+6+4) = 34$$` },
        ],
      ],
    },

    /* ── Generalización a n conjuntos ──────────── */
    {
      id: "alg-u04-008",
      tipo: "texto",
      dificultad: "media",
      tags: ["principio-general", "par-impar"],
      fuente: ["algebra/unidad-04-conteo/bibliografia/jimenez-m-3-98-104.pdf", "algebra/unidad-04-conteo/apuntes/conteo.pdf"],
      pregunta: String.raw`Enunciá el principio de inclusión-exclusión para $n$ conjuntos (regla par / impar).`,
      respuesta: String.raw`Para el cardinal de la unión de $n$ conjuntos:
1. **Sumar** los cardinales individuales.
2. **Restar** las intersecciones de un número **par** de conjuntos (dobles, cuádruples…).
3. **Sumar** las intersecciones de un número **impar** de conjuntos (triples, quíntuples…).`,
    },
    {
      id: "alg-u04-009",
      tipo: "completar",
      dificultad: "media",
      tags: ["principio-general", "conteo-terminos"],
      fuente: ["algebra/unidad-04-conteo/bibliografia/jimenez-m-3-98-104.pdf"],
      pregunta: String.raw`La fórmula de inclusión-exclusión para $n$ conjuntos tiene ____ términos. Para $n=4$ son ____ .`,
      respuesta: String.raw`$2^{n} - 1$ términos. Para $n = 4$: $\;2^{4} - 1 = 15$ términos (4 individuales + 6 dobles + 4 triples + 1 cuádruple).`,
    },
    {
      id: "alg-u04-010",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["cuatro-conjuntos", "final"],
      fuente: ["algebra/unidad-04-conteo/bibliografia/jimenez-m-3-98-104.pdf"],
      pregunta: String.raw`Escribí la fórmula de inclusión-exclusión para 4 conjuntos $\#(A \cup B \cup C \cup D)$.`,
      respuesta: String.raw`$$\begin{aligned}
\#(A \cup B \cup C \cup D) =\ & \#(A)+\#(B)+\#(C)+\#(D) \\
&- \#(A\cap B)-\#(A\cap C)-\#(A\cap D)-\#(B\cap C)-\#(B\cap D)-\#(C\cap D) \\
&+ \#(A\cap B\cap C)+\#(A\cap B\cap D)+\#(A\cap C\cap D)+\#(B\cap C\cap D) \\
&- \#(A\cap B\cap C\cap D)
\end{aligned}$$
Con 4+ conjuntos el Venn ya no se dibuja cómodo: conviene la fórmula y las condiciones del enunciado.`,
    },

    /* ── "solo" / "exactamente" / "al menos" ───── */
    {
      id: "alg-u04-011",
      tipo: "concepto",
      dificultad: "media",
      tags: ["lectura", "trampa"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html", "algebra/transcripciones/2026-04-07.md"],
      pregunta: String.raw`En un problema de 3 conjuntos, ¿qué diferencia hay entre "solo $A$ y $B$" y "$A$ y $B$" (sin "solo")?`,
      respuesta: String.raw`- **"solo $A$ y $B$"** $=$ la región $A\cap B$ **sin** la triple.
- **"$A$ y $B$"** (sin "solo") $=$ **toda** la intersección $A\cap B$, **incluida** la triple $A\cap B\cap C$.

Para pasar de una a otra: $\;\text{solo }A\cap B = \#(A\cap B) - \#(A\cap B\cap C)$. Es la trampa típica de lectura.`,
    },
    {
      id: "alg-u04-012",
      tipo: "completar",
      dificultad: "media",
      tags: ["exactamente"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html", "algebra/unidad-04-conteo/bibliografia/jimenez-m-3-98-104.pdf"],
      pregunta: String.raw`"Exactamente uno de los tres" $= $ ____ .`,
      respuesta: String.raw`$$\text{solo }A + \text{solo }B + \text{solo }C$$
La suma de las **tres regiones exclusivas** (las que no comparten con nadie).`,
    },
    {
      id: "alg-u04-013",
      tipo: "concepto",
      dificultad: "dificil",
      tags: ["exactamente", "final"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`¿Cómo se calcula "exactamente dos de los tres"?`,
      respuesta: String.raw`$$\#(A\cap B)+\#(A\cap C)+\#(B\cap C) - 3\cdot\#(A\cap B\cap C)$$
Es la suma de las 3 intersecciones dobles menos **3 veces** la triple (la triple aparece en las 3 dobles y no debe quedar). Equivale a las 3 regiones de pares "solo".`,
    },
    {
      id: "alg-u04-014",
      tipo: "concepto",
      dificultad: "dificil",
      tags: ["al-menos", "final"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`¿Cómo se calcula "al menos dos de los tres"? Relacionalo con "exactamente dos".`,
      respuesta: String.raw`$$\#(A\cap B)+\#(A\cap C)+\#(B\cap C) - 2\cdot\#(A\cap B\cap C)$$
Equivale a **"exactamente dos" + "exactamente tres"** $=$ (exactamente dos) $+$ la triple. Por eso resta solo $2\cdot$ la triple (en vez de $3\cdot$).`,
    },
    {
      id: "alg-u04-015",
      tipo: "completar",
      dificultad: "facil",
      tags: ["al-menos", "exactamente"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`"Al menos uno" $=$ ____ ; "exactamente tres" (o "los tres") $=$ ____ .`,
      respuesta: String.raw`- "Al menos uno" $= \#(A \cup B \cup C)$ (la **unión**).
- "Exactamente tres" $= \#(A \cap B \cap C)$ (la **triple**).`,
    },
    {
      id: "alg-u04-016",
      tipo: "completar",
      dificultad: "media",
      tags: ["ninguno", "complemento"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html", "algebra/unidad-04-conteo/ejercicios/problemas-de-conteo.pdf"],
      pregunta: String.raw`"Ninguno de los tres" $=$ ____ . "No $A$ ni $B$" (no consumen $A$ ni $B$) $=$ ____ .`,
      respuesta: String.raw`- "Ninguno" $= \#(U) - \#(A \cup B \cup C)$.
- "No $A$ ni $B$" $= \#(U) - \#(A \cup B) = \#\big((A\cup B)^{c}\big)$ (complemento de la unión, por De Morgan).`,
    },

    /* ── Método y verificación ─────────────────── */
    {
      id: "alg-u04-017",
      tipo: "texto",
      dificultad: "media",
      tags: ["metodo", "venn"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`¿Cuál es el método paso a paso para resolver un problema de conteo con Venn?`,
      respuesta: String.raw`1. **Anotar** todos los cardinales dados.
2. **Dibujar** el Venn + rectángulo universal.
3. **Aplicar** la fórmula para la incógnita (normalmente la triple).
4. **Completar de adentro hacia afuera:** triple $\to$ dobles (restando la triple) $\to$ individuales.
5. **Verificar:** la suma de todas las regiones debe dar el universal.`,
    },
    {
      id: "alg-u04-018",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["verificacion"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`¿Cómo verificás que el diagrama de Venn quedó bien completado?`,
      respuesta: String.raw`La **suma de todas las regiones** (los "solo" + las dobles-solo + la triple + "ninguno") debe dar $\#(U)$.

Si no da el total $\Rightarrow$ hay un error en las restas.`,
    },
    {
      id: "alg-u04-019",
      tipo: "concepto",
      dificultad: "media",
      tags: ["error-comun", "final"],
      fuente: ["algebra/transcripciones/2026-06-16.md", "algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`¿Cuál es el error más común en conteo (el que marcó la profe para el final)?`,
      respuesta: String.raw`**Olvidarse de restar las intersecciones.**

"Siempre restar las intersecciones": $\#(A\cup B) = \#(A)+\#(B)-\#(A\cap B)$. Es el tropiezo típico del parcial que después no te olvidás más.`,
    },

    /* ── Condiciones del enunciado ─────────────── */
    {
      id: "alg-u04-020",
      tipo: "concepto",
      dificultad: "media",
      tags: ["lectura", "condiciones"],
      fuente: ["algebra/unidad-04-conteo/ejercicios/problemas-de-conteo.pdf", "algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`¿Cómo traducís a regiones estas condiciones? (a) "ninguno usa los tres"; (b) "consumen $A$ pero no $B$ ni $D$"; (c) "si está en otra materia, está en las tres".`,
      respuesta: String.raw`- **(a)** la intersección triple $= 0$ (centro vacío).
- **(b)** todas las intersecciones de $A$ con $B$ y con $D$ valen $0$ ($A$ queda casi aislado).
- **(c)** no hay "exactamente dos" para ese conjunto: sus regiones de pares "solo" valen $0$.`,
    },

    /* ── Diagrama de Carroll ───────────────────── */
    {
      id: "alg-u04-021",
      tipo: "concepto",
      dificultad: "media",
      tags: ["carroll"],
      fuente: ["algebra/unidad-04-conteo/apuntes/conteo.pdf", "algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`¿Cuándo conviene un diagrama de Carroll en vez de un Venn?`,
      respuesta: String.raw`Cuando hay **propiedades complementarias** (ej. "escribe a máquina" / "no escribe"): exactamente **2 propiedades** y sus negaciones.

Se arma una tabla $2\times 2$ con totales de fila/columna. Para **3+** propiedades $\to$ Venn.`,
    },
    {
      id: "alg-u04-022",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["carroll"],
      fuente: ["algebra/unidad-04-conteo/apuntes/conteo.pdf"],
      pregunta: String.raw`Empresa de 216 empleados: 159 escriben a máquina; el sector Cómputos tiene 124 y 87 de ellos escriben a máquina. ¿Cuántos de Cómputos **no** escriben? ¿Cuántos **no** son de Cómputos?`,
      respuesta: String.raw`Tabla de Carroll:
- Cómputos $\cap$ no-escriben $= 124 - 87 = 37$.
- No-Cómputos $= 216 - 124 = 92$.

(Y escriben $\cap$ no-Cómputos $= 159 - 87 = 72$; no-escriben $\cap$ no-Cómputos $= 92 - 72 = 20$.)`,
    },

    /* ── Problemas de examen / opción múltiple ── */
    {
      id: "alg-u04-023",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      tags: ["exactamente", "parcial"],
      fuente: ["algebra/examenes/parcial-modelo-resuelto.html"],
      pregunta: String.raw`100 personas; $\#(\text{Cel})=20$, $\#(\text{Tab})=38$, $\#(\text{Note})=41$; 18 usan **exactamente dos**; ninguno usa los tres; 17 usan celular pero no notebook; $\#(\text{Cel}\cap\text{Tab})=5$. ¿Cuántas usan **solamente tablet**?`,
      opciones: ["23", "18", "25", "30"],
      correcta: 0,
      respuesta: String.raw`Triple $=0$. Solo Cel $=17-5=12$. De $\#(\text{Cel})=20$: $\;\text{Cel}\cap\text{Note}=20-12-5=3$. De "exactamente dos" $=18$: $\;\text{Tab}\cap\text{Note}=18-5-3=10$. De $\#(\text{Tab})=38$: $\;\text{solo Tab}=38-5-10=\mathbf{23}$.`,
    },
    {
      id: "alg-u04-026",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["dos-conjuntos", "al-menos"],
      fuente: ["algebra/unidad-04-conteo/bibliografia/jimenez-m-3-98-104.pdf"],
      pregunta: String.raw`De 34 programas: 23 con error de compilación, 12 con falla de lógica, 5 con **ambas**. ¿Cuántos tuvieron **al menos un** tipo de error?`,
      opciones: ["30", "35", "40", "29"],
      correcta: 0,
      respuesta: String.raw`$\#(A\cup B)=23+12-5=30$. (Y $34-30=4$ no tuvieron ningún error.)`,
    },

    /* ── Síntesis / lectura ────────────────────── */
    {
      id: "alg-u04-027",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["exactamente", "al-menos", "razonar"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`¿Por qué "exactamente dos" resta $3\cdot\#(A\cap B\cap C)$ y "al menos dos" solo $2\cdot\#(A\cap B\cap C)$?`,
      opciones: [
        String.raw`La triple está en las 3 dobles; "exactamente dos" la excluye del todo ($-3$) y "al menos dos" la incluye una vez ($-2$)`,
        String.raw`Es un error: ambas deberían restar 3 veces`,
        String.raw`Porque "exactamente dos" también cuenta la triple`,
      ],
      correcta: 0,
      respuesta: String.raw`La triple aparece dentro de las 3 intersecciones dobles. "Exactamente dos" **no** debe contenerla $\Rightarrow$ resta sus 3 apariciones. "Al menos dos" **sí** la incluye una vez $\Rightarrow$ resta solo 2.`,
    },
    {
      id: "alg-u04-028",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["ninguno", "venn"],
      fuente: ["algebra/unidad-04-conteo/apuntes/conteo.pdf", "algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`En un Venn, ¿dónde se ubican los que "no practican ningún deporte"?`,
      respuesta: String.raw`**Dentro** del rectángulo universal pero **fuera** de todos los círculos.

Se calcula $\#(U) - \#(\text{unión})$; quedan en el referencial sin pertenecer a ningún conjunto.`,
    },
    {
      id: "alg-u04-029",
      tipo: "concepto",
      dificultad: "media",
      tags: ["lectura", "exactamente"],
      fuente: ["algebra/unidad-04-conteo/ejercicios/problemas-de-conteo.pdf"],
      pregunta: String.raw`Si un problema da como dato "28 alumnos están en **exactamente dos** materias", ¿qué ecuación es?`,
      respuesta: String.raw`Es la **suma de las 3 regiones de pares "solo"** (sin la triple):
$$(A\cap B\,\text{solo}) + (A\cap C\,\text{solo}) + (B\cap C\,\text{solo}) = 28$$
Sirve como ecuación directa para completar el diagrama.`,
    },
    {
      id: "alg-u04-030",
      tipo: "texto",
      dificultad: "media",
      tags: ["metodo", "tip"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html", "algebra/transcripciones/2026-04-07.md"],
      pregunta: String.raw`¿Por qué conviene **siempre** dibujar el Venn, aunque resuelvas con fórmula?`,
      respuesta: String.raw`Porque permite **ubicar cada dato en su región**, ver exactamente qué pide la pregunta y **verificar** (suma de regiones $= \#(U)$).

Los problemas de conteo son "de ingenio": el gráfico evita los errores de lectura ("solo" vs "y", condiciones que anulan regiones).`,
    },
    {
      id: "alg-u04-031",
      tipo: "completar",
      dificultad: "facil",
      tags: ["diccionario", "lectura"],
      fuente: ["algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`Traducí a operación: "al menos uno / o" $\to$ ____ ; "y / ambos" $\to$ ____ ; "ninguno" $\to$ ____ .`,
      respuesta: String.raw`- "al menos uno / o" $\to$ **unión** $\cup$.
- "y / ambos" $\to$ **intersección** $\cap$.
- "ninguno" $\to$ **complemento de la unión** $\;\#(U) - \#(\text{unión})$.`,
    },
    {
      id: "alg-u04-032",
      tipo: "concepto",
      dificultad: "media",
      tags: ["carroll", "metodo"],
      fuente: ["algebra/unidad-04-conteo/apuntes/conteo.pdf", "algebra/cheatsheets/unidad-04-conteo.html"],
      pregunta: String.raw`¿Cómo se completa una tabla de Carroll?`,
      respuesta: String.raw`Cada casillero $=$ se cumplen **las dos propiedades a la vez**. Se ubican los datos conocidos y el resto sale por **sumas y restas** usando los totales de fila y columna.

El gran total (esquina) es $\#(U)$ y sirve de verificación.`,
    },

  ],
});
