/* Mazo · Álgebra Lineal · Unidad 01 · Divisibilidad en ℤ
   Fuente primaria: cheatsheets/unidad-01-numeros-enteros.taller/resumen.md
   (destilado de los 2 apuntes + el deck de clase + transcripciones 05/08 y 12/08 + chat de Pronto).
   Sin parciales previos: el techo de evidencia de la unidad es "enfatizado en clase", nunca
   "confirmado en parcial". Las 4 correcciones escritas del profe por Pronto (10/08) son lo
   más duro que hay.
   Prefijo de id `alin-` (no `alg-`, ya usado por Álgebra 2026-C1: el progreso Leitner es global).
   Campos de contenido SIEMPRE en String.raw.
   Bloques: gramática del sistema «Manual» — `> [!prof|trampa|vale|exam|nota|fx] tag`.
   Nada de emoji como identificador de bloque (ver card-schema.md § Bloques). */
FLASHCARDS.deck({
  materia: "algebra-lineal",
  unidad: "01-numeros-enteros",
  titulo: "Divisibilidad en ℤ",
  cards: [

    /* ── 1. La definición ──────────────────────────────────────── */
    {
      id: "alin-u01-001",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["definicion", "divisibilidad"],
      fuente: ["algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md", "algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf"],
      pregunta: String.raw`Definición 2.1: ¿cuándo decimos que $a$ **divide** a $b$, y cómo se escribe?`,
      respuesta: String.raw`Dados $a, b \in \mathbb{Z}$:

> [!fx] llevable
> $$a \mid b \iff \exists\, c \in \mathbb{Z} : b = a \cdot c$$

Se lee «$a$ divide a $b$», y equivale a decir que $a$ es **divisor** de $b$, o que $b$ es **múltiplo** de $a$. Si no divide: $a \nmid b$.

Lo que el profe marcó como el eje de todo: la relación se define por un **producto**, y **los dos factores tienen que ser enteros**. Con $a \neq 0$ ese $c$ es único.`,
    },
    {
      id: "alin-u01-002",
      tipo: "texto",
      dificultad: "media",
      tags: ["definicion", "existencia"],
      fuente: ["algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md", "algebra-lineal/unidad-01-numeros-enteros/apuntes/clase-1-divisibilidad.pptx"],
      pregunta: String.raw`La divisibilidad es una afirmación de **existencia**. ¿Qué hay que hacer entonces para **probarla** y qué para **refutarla**?`,
      respuesta: String.raw`- **Probar** $a \mid b$: **exhibir** el entero $c$ y verificar $b = a \cdot c$. Alcanza con uno.
- **Refutar** $a \nmid b$: mostrar que **ningún** entero funciona.

Ejemplo de cada uno:

$-8 \mid 56$, porque con $c = -7 \in \mathbb{Z}$ vale $56 = (-8)\cdot(-7)$. $\;\blacksquare$

$5 \nmid 12$: si $c = 2$ da $10 \neq 12$, si $c = 3$ da $15 \neq 12$. El $c$ buscado quedaría **entre** 2 y 3, y $\mathbb{Z}$ **no es denso** (entre dos enteros consecutivos no hay enteros). $\;\blacksquare$`,
      pista: "Existencia: uno alcanza para probar; para refutar hay que cerrarle la puerta a todos.",
    },
    {
      id: "alin-u01-003",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["rubrica", "trampa", "pronto"],
      fuente: ["algebra-lineal/chat/resumen.md", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      pregunta: String.raw`Justificás $7 \mid 0$ diciendo «la división da exacta, el denominador entra justo». ¿Por qué el profe **no te da el punto**?`,
      respuesta: String.raw`Porque hay que justificar **con las propiedades del capítulo**, no con lenguaje de fracciones. Corrección escrita del profe por Pronto (10/08):

> [!prof] el profe, Pronto 10/08
> «Tratá de justificar con propiedades del capítulo. Esto significa que "denominador" no es un término adecuado. No está mal lo que decís, pero para divisibilidad, eso que le llamamos denominador podría ser 0 si el divisor tmb es 0.»

La divisibilidad se define por un **producto**, no por un cociente: por eso $0 \mid 0$ tiene sentido y «denominador» no. La justificación que sí cobra: $0 = 7 \cdot 0$ con $0 \in \mathbb{Z}$.

Tampoco sirve justificar con un **criterio de divisibilidad** («termina en 0, así que es múltiplo de 10»): sirven para verificar mentalmente, nunca para dar el punto.`,
    },
    {
      id: "alin-u01-004",
      tipo: "completar",
      dificultad: "media",
      tags: ["rubrica", "cierre"],
      fuente: ["algebra-lineal/transcripciones/2026-08-05.md", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      pregunta: String.raw`El profe corrigió su **propia** demostración del pizarrón: llegó a $3 \mid -45$ y dijo que le faltaba un paso. ¿Cuál? Completá:

«Acepto $3 \mid -45$ recién después de escribir ____.»`,
      respuesta: String.raw`$$-45 = 3 \cdot (-15), \quad \text{con } -15 \in \mathbb{Z}$$

O sea: **cerrar volviendo a la definición y exhibiendo el entero**. Es la instrucción más accionable de toda la rúbrica y se aplica en cada ejercicio con letras.

> [!prof] el profe, clase 05/08
> «lo que me faltaría hacer […] es que esto lo acepto porque menos 45 lo puedo describir como 3 por menos 15 […] es lo que me hubiese faltado a mí para yo decir: está perfecto»`,
    },

    /* ── 2. Casos frontera: el 0 y la unidad ───────────────────── */
    {
      id: "alin-u01-005",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["casos-frontera", "cero"],
      fuente: ["algebra-lineal/unidad-01-numeros-enteros/apuntes/clase-1-divisibilidad.pptx", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      pregunta: String.raw`¿Cuál de estas afirmaciones es **falsa**? (Problema 1c del deck)`,
      opciones: [
        String.raw`$0 \mid 5$`,
        String.raw`$7 \mid 0$`,
        String.raw`$-1 \mid a$ para todo $a \in \mathbb{Z}$`,
        String.raw`$0 \mid 0$`,
      ],
      correcta: 0,
      respuesta: String.raw`**$0 \mid 5$ es F**: la regla es $0 \mid a \implies a = 0$, o sea el 0 **solo** divide al 0. No existe $c \in \mathbb{Z}$ con $5 = 0 \cdot c$.

Las otras tres son V:
- $7 \mid 0$ porque $0 = 7 \cdot 0$ y $0 \in \mathbb{Z}$ (vale $a \mid 0$ para todo $a$).
- $-1 \mid a$ porque $a = (-1)\cdot(-a)$, con $-a \in \mathbb{Z}$.
- $0 \mid 0$ porque $0 = 0 \cdot 0$. No rompe el «no se divide por cero»: acá la relación se define por un **producto**, no por un cociente. El profe lo llamó «una licencia en esta parte de la matemática».`,
    },
    {
      id: "alin-u01-006",
      tipo: "texto",
      dificultad: "media",
      tags: ["trampa", "pronto", "casos-frontera"],
      fuente: ["algebra-lineal/chat/resumen.md", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      pregunta: String.raw`Un alumno escribió: «$a \mid b \implies a \mid (-b)$ **solo cuando** $a$ y $b$ son distintos de cero». ¿Cuál fue el error que el profe le marcó?`,
      respuesta: String.raw`**Condicionar una propiedad que es universal.** La invarianza por signo no tiene excepciones:

$$a \mid b \iff a \mid (-b) \iff (-a) \mid b \iff |a| \mid |b|$$

vale **para todo** $a, b \in \mathbb{Z}$, ceros incluidos.

> [!prof] el profe, Pronto 10/08
> «En la tercera, la frase "solo cuando" no tiene sentido, ya que para cualquier a y b se va a cumplir. Lo que podrías ver, si querés, es qué pasa si a o b son 0.»

Justificación que cobra: si $b = a\cdot c$, entonces $-b = a \cdot (-c)$ con $-c \in \mathbb{Z}$.`,
    },

    /* ── 3. Propiedades elementales (Prop. 2.1) ────────────────── */
    {
      id: "alin-u01-007",
      tipo: "texto",
      dificultad: "media",
      tags: ["linealidad", "prop-2.1", "estrella"],
      fuente: ["algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md", "algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf"],
      pregunta: String.raw`Enunciá la propiedad de **linealidad** (Prop. 2.1.4) y explicá por qué una sola propiedad cubre la suma **y** la resta.`,
      respuesta: String.raw`$$a \mid b \;\wedge\; a \mid c \implies a \mid (b\cdot x + c\cdot y) \quad \forall\, x, y \in \mathbb{Z}$$

Cubre suma y resta porque **los coeficientes $x, y$ son cualesquiera enteros**: con $x = y = 1$ da la suma, con $x = 1, y = -1$ da la resta. No hay dos propiedades que memorizar.

**Generaliza a $n$ términos** (el profe lo confirmó en clase): si $a \mid b_{1}, \dots, a \mid b_{n}$, entonces $a \mid (b_{1}x_{1} + \dots + b_{n}x_{n})$.

Es la propiedad más ejercitada del capítulo: «Esto es importantísimo. Es una propiedad súper fuerte» (clase 05/08).`,
    },
    {
      id: "alin-u01-008",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["linealidad", "demostracion"],
      fuente: ["algebra-lineal/transcripciones/2026-08-05.md", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      pregunta: String.raw`Demostrá formalmente la linealidad: si $a \mid b$ y $a \mid c$, entonces $a \mid (bx + cy)$ para todos $x, y \in \mathbb{Z}$.`,
      respuesta: String.raw`Por definición, $a \mid b$ y $a \mid c$ dan enteros $k_{1}, k_{2}$ con $b = a k_{1}$ y $c = a k_{2}$.

Multiplico por $x$ e $y$ y sumo:

$$b x + c y = a k_{1} x + a k_{2} y = a\,(k_{1}x + k_{2}y)$$

Como $(k_{1}x + k_{2}y) \in \mathbb{Z}$ **por cerradura de $\mathbb{Z}$ bajo suma y producto**, exhibí el entero que pide la definición, así que $a \mid (bx + cy)$. $\;\blacksquare$

**Verificación numérica** (la que improvisó en clase): $3 \mid 9$ y $3 \mid 18$; con $x = 1$, $y = -3$:
$9\cdot 1 + 18\cdot(-3) = -45 = 3\cdot(-15)$, y $-15 \in \mathbb{Z}$, luego $3 \mid -45$. ✔`,
      pista: "Escribí las dos hipótesis con la definición, combiná, y sacá a como factor común.",
    },
    {
      id: "alin-u01-009",
      tipo: "texto",
      dificultad: "media",
      tags: ["cerradura", "rubrica"],
      fuente: ["algebra-lineal/transcripciones/2026-08-05.md", "algebra-lineal/transcripciones/2026-08-12.md"],
      pregunta: String.raw`¿Qué es la **cerradura de $\mathbb{Z}$** y por qué el profe dice que es «importantísima» aunque parezca una pavada?`,
      respuesta: String.raw`$\mathbb{Z}$ es **cerrado bajo suma y producto**: cualquier expresión armada con enteros ($k_{1}x + k_{2}y$, $k_{1}\cdot k_{2}$) **es un entero**.

Es el paso que **cierra casi todas las demostraciones de la unidad**: sin él no podés invocar la definición de divisibilidad, porque la definición exige que el $c$ que exhibís sea entero.

> [!prof] el profe, clase 05/08
> «Eso parece una pavada, pero es importantísimo para ciertas demostraciones. Yo tengo que tener en claro cuándo algo que estoy operando va a ser un número entero o no.»

> [!vale]
> El 12/08 lo puso como justificación **obligatoria** (la distributiva es opcional, la aritmética no se justifica): «mientras pongan que eso va a ser entero ya me alcanza».`,
    },
    {
      id: "alin-u01-010",
      tipo: "concepto",
      dificultad: "media",
      tags: ["acotacion", "prop-2.1"],
      fuente: "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md",
      pregunta: String.raw`Enunciá la propiedad de **acotación** (Prop. 2.1.7) y decí para qué se usa en la práctica.`,
      respuesta: String.raw`$$a \mid b \;\wedge\; b \neq 0 \implies |a| \le |b|$$

**Uso operativo: refutar rápido.** $15 \nmid 7$, porque exigiría $15 \le 7$.

**Uso fino: cerrar búsquedas de parámetros.** Si llegás a $a \mid 1$, la acotación da $|a| \le 1$, y como un divisor no puede ser 0, queda $a = 1$ o $a = -1$.

Demostración (corta): $b = ak$ con $b \neq 0 \implies k \neq 0 \implies |k| \ge 1$, luego $|b| = |a||k| \ge |a|$. $\;\blacksquare$`,
    },
    {
      id: "alin-u01-011",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["producto", "prop-2.1", "estrella"],
      fuente: "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md",
      pregunta: String.raw`La otra propiedad que el profe llamó «también importantísima»: si $a \mid b$, ¿qué más divide $a$?`,
      respuesta: String.raw`**Producto / escalar** (Prop. 2.1.5):

$$a \mid b \implies a \mid (b \cdot k) \quad \forall\, k \in \mathbb{Z}$$

> [!prof] el profe, clase 05/08
> «si 3 divide a 27, 3 también divide a 81 […] esa propiedad, que **también es importantísima**»

Es el motor de los **dos pasos** del Lema de Euclides: ahí hay que **nombrarla**, no resolver en silencio.`,
    },
    {
      id: "alin-u01-012",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["demostracion", "guia-ej7"],
      fuente: ["algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf", "algebra-lineal/unidad-01-numeros-enteros/apuntes/clase-1-divisibilidad.pptx"],
      pregunta: String.raw`(Ejercicio 7 de la guía = Problema 3a del deck) Si $a, b, c, d \in \mathbb{Z}$, demostrá formalmente que si $a \mid b$ y $c \mid d$, entonces $a\cdot c \mid b \cdot d$.`,
      respuesta: String.raw`Por definición:
- $a \mid b \implies \exists\, k_{1} \in \mathbb{Z}$ con $b = a k_{1}$
- $c \mid d \implies \exists\, k_{2} \in \mathbb{Z}$ con $d = c k_{2}$

Multiplico las dos igualdades y reordeno:

$$b \cdot d = (a k_{1})(c k_{2}) = (a c)\,(k_{1}k_{2})$$

Como $k_{1}k_{2} \in \mathbb{Z}$ **por cerradura**, exhibí el entero de la definición, luego $a c \mid b d$. $\;\blacksquare$

Es el gemelo estructural de la **transitividad** ($a \mid b \wedge b \mid c \implies a \mid c$), misma mecánica: escribir las hipótesis con la definición, combinar, sacar factor común y cerrar con cerradura.`,
      pista: "Escribí las dos hipótesis con la definición y multiplicalas entre sí.",
    },
    {
      id: "alin-u01-042",
      tipo: "practica",
      tags: ["demostracion", "definicion", "drill"],
      fuente: ["algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      concepto: String.raw`**Demostrar desde la definición**, el método que el profe dijo que sí evalúa («una demostración que requiere números y requiere condiciones»). Siempre el mismo esqueleto: traducir cada hipótesis con la definición, combinar, sacar factor común, declarar que el paréntesis es **entero por cerradura**, y cerrar **exhibiendo** ese entero.`,
      variantes: [
        // Nivel 1 — una hipótesis, aplicar producto / escalar
        [
          { pregunta: String.raw`Sabiendo que $7 \mid b$, demostrá que $7 \mid 5b$.`, respuesta: String.raw`Por definición, existe $k \in \mathbb{Z}$ con $b = 7k$. Entonces:

$$5b = 5(7k) = 7\,(5k)$$

Como $5k \in \mathbb{Z}$ **por cerradura**, exhibí el entero que pide la definición, luego $7 \mid 5b$. $\;\blacksquare$`, pista: "Traducí la hipótesis con la definición y multiplicá por 5." },
          { pregunta: String.raw`Sabiendo que $a \mid 12$, demostrá que $a \mid 60$.`, respuesta: String.raw`Por definición, existe $k \in \mathbb{Z}$ con $12 = ak$. Entonces:

$$60 = 5\cdot 12 = 5(ak) = a\,(5k)$$

Con $5k \in \mathbb{Z}$ **por cerradura**, luego $a \mid 60$. $\;\blacksquare$` },
        ],
        // Nivel 2 — dos hipótesis: hay que elegir los coeficientes (linealidad)
        [
          { pregunta: String.raw`Sabés que $5 \mid u$ y $5 \mid v$. Demostrá que $5 \mid (7u - 3v)$.`, respuesta: String.raw`Por definición existen $k_{1}, k_{2} \in \mathbb{Z}$ con $u = 5k_{1}$ y $v = 5k_{2}$. Entonces:

$$7u - 3v = 7(5k_{1}) - 3(5k_{2}) = 5\,(7k_{1} - 3k_{2})$$

Como $(7k_{1} - 3k_{2}) \in \mathbb{Z}$ **por cerradura**, luego $5 \mid (7u - 3v)$. $\;\blacksquare$

Es **linealidad** con $x = 7$, $y = -3$: los coeficientes pueden ser negativos, y por eso una sola propiedad cubre suma y resta.`, pista: "Es linealidad: identificá quiénes hacen de x y de y." },
          { pregunta: String.raw`Sabés que $a \mid m$ y $a \mid n$. Demostrá que $a \mid (4m + 9n)$.`, respuesta: String.raw`Existen $k_{1}, k_{2} \in \mathbb{Z}$ con $m = ak_{1}$ y $n = ak_{2}$. Entonces:

$$4m + 9n = 4(ak_{1}) + 9(ak_{2}) = a\,(4k_{1} + 9k_{2})$$

Con $(4k_{1} + 9k_{2}) \in \mathbb{Z}$ **por cerradura**, luego $a \mid (4m + 9n)$. $\;\blacksquare$` },
        ],
        // Nivel 3 — la hipótesis viene como RESTO: hay que traducirla antes de operar
        [
          { pregunta: String.raw`Sean $u, v \in \mathbb{Z}$ con $r_{7}(u) = 3$ y $r_{7}(v) = 3$. Demostrá que $7 \mid (u - v)$.`, respuesta: String.raw`Por definición de función resto, existen $k, j \in \mathbb{Z}$ con $u = 7k + 3$ y $v = 7j + 3$. Entonces:

$$u - v = (7k + 3) - (7j + 3) = 7k - 7j = 7\,(k - j)$$

Como $(k - j) \in \mathbb{Z}$ **por cerradura**, luego $7 \mid (u - v)$. $\;\blacksquare$

El eje nuevo: la hipótesis **no** viene como divisibilidad, viene como resto. Primero se traduce a una igualdad, recién después se opera.`, pista: "r₇(u) = 3 significa u = 7k + 3. Escribí las dos y restá." },
          { pregunta: String.raw`Sea $u \in \mathbb{Z}$ con $r_{4}(u) = 1$. Demostrá que $r_{4}(u + 7) = 0$.`, respuesta: String.raw`Por definición de función resto, existe $k \in \mathbb{Z}$ con $u = 4k + 1$. Entonces:

$$u + 7 = 4k + 1 + 7 = 4k + 8 = 4\,(k + 2)$$

Con $(k + 2) \in \mathbb{Z}$ **por cerradura**, y como el sobrante es $0$ con $0 \le 0 < 4$, por **unicidad del resto** queda $r_{4}(u+7) = 0$, o sea $4 \mid (u+7)$. $\;\blacksquare$` },
        ],
        // Nivel 4 — letras puras y dos herramientas encadenadas
        [
          { pregunta: String.raw`Si $a \mid b$, demostrá que $a^{2} \mid b^{2}$.`, respuesta: String.raw`Por definición existe $k \in \mathbb{Z}$ con $b = ak$. Elevo al cuadrado:

$$b^{2} = (ak)^{2} = a^{2}k^{2}$$

Como $k^{2} \in \mathbb{Z}$ **por cerradura** (producto de enteros), luego $a^{2} \mid b^{2}$. $\;\blacksquare$

> [!trampa]
> Ojo con la vuelta: que $a^{2} \mid b^{2}$ implique $a \mid b$ **no** sale de acá, necesita primalidad (Prop. 2.6.4).`, pista: "Una sola hipótesis, pero hay que elevar al cuadrado antes de agrupar." },
          { pregunta: String.raw`Si $a \mid b$ y $b \mid c$, demostrá que $a \mid (b + c)$.`, respuesta: String.raw`Por definición existen $k_{1}, k_{2} \in \mathbb{Z}$ con $b = ak_{1}$ y $c = bk_{2}$.

Sustituyo $b$ en la segunda (**transitividad**): $c = (ak_{1})k_{2} = a\,(k_{1}k_{2})$.

Ahora sumo:
$$b + c = ak_{1} + a(k_{1}k_{2}) = a\,(k_{1} + k_{1}k_{2})$$

Con $(k_{1} + k_{1}k_{2}) \in \mathbb{Z}$ **por cerradura**, luego $a \mid (b + c)$. $\;\blacksquare$

Dos herramientas encadenadas: primero transitividad para llevar $c$ a base $a$, después linealidad.` },
        ],
        // Nivel 5 — búsqueda de parámetros: cancelar la letra y cerrar con acotación
        [
          { pregunta: String.raw`Sea $a \in \mathbb{Z}$ tal que $a \mid (3k+2)$ y $a \mid (4k+3)$ para algún $k \in \mathbb{Z}$. Demostrá que $a = 1$ o $a = -1$.`, respuesta: String.raw`**Paso 1, linealidad con coeficientes que cancelan $k$.** Tomo $x = 4$, $y = -3$:

$$a \mid \big(4(3k+2) - 3(4k+3)\big) = (12k + 8) - (12k + 9) = -1$$

o sea $a \mid -1$, y por invarianza de signo $a \mid 1$.

**Paso 2, acotación.** De $a \mid 1$ con $1 \neq 0$ sale $|a| \le 1$, y $a \neq 0$ porque un divisor no puede ser 0.

$$\implies a = 1 \;\text{ o }\; a = -1 \qquad \blacksquare$$`, pista: "Multiplicá cruzado por los coeficientes de k (4 y 3) para que la k se cancele." },
          { pregunta: String.raw`Sea $a \in \mathbb{Z}$ tal que $a \mid (5k+3)$ y $a \mid (7k+4)$ para algún $k \in \mathbb{Z}$. Demostrá que $a = 1$ o $a = -1$.`, respuesta: String.raw`**Paso 1, linealidad.** Tomo $x = 7$, $y = -5$:

$$a \mid \big(7(5k+3) - 5(7k+4)\big) = (35k + 21) - (35k + 20) = 1$$

**Paso 2, acotación.** De $a \mid 1$ con $1 \neq 0$ sale $|a| \le 1$; como $a \neq 0$, queda

$$a = 1 \;\text{ o }\; a = -1 \qquad \blacksquare$$

> [!exam] Entra al parcial
> Es el arquetipo que el profe describió como lo que sí evalúa: elegir los coeficientes que cancelan la letra, y **cerrar con acotación**.` },
        ],
      ],
    },

    /* ── 4. Algoritmo de la División ───────────────────────────── */
    {
      id: "alin-u01-013",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["algoritmo-division", "teorema-2.2"],
      fuente: ["algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md", "algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf"],
      pregunta: String.raw`Enunciá el **Algoritmo de la División** (Teorema 2.2) con su restricción exacta.`,
      respuesta: String.raw`Sean $a, b \in \mathbb{Z}$ con $a \neq 0$. Existe un **único** par $(q, r)$ de enteros tal que:

$$b = q \cdot a + r \qquad \text{con} \qquad 0 \le r < |a|$$

$b$ = dividendo, $a$ = divisor, $q$ = cociente, $r$ = resto.

Cuatro lecturas que valen puntos:
- El resto **nunca es negativo** y es **estrictamente menor** que $|a|$.
- $r = 0$ equivale exactamente a $a \mid b$.
- La **unicidad** es lo que habilita hablar de «**el**» cociente y «**el**» resto.
- El valor absoluto está en la cota porque **$a$ puede ser negativo**.

> [!prof] el profe, clase 05/08
> «esto lo vamos a trabajar todo el tiempo y es muy importante que nos quede grabado en la cabeza»`,
    },
    {
      id: "alin-u01-014",
      tipo: "practica",
      tags: ["algoritmo-division", "drill"],
      fuente: ["algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      concepto: String.raw`División entera: hallar el único par $(q, r)$ con $b = qa + r$ y $0 \le r < |a|$. El método del profe: dividir con calculadora, quedarse con la parte entera **hacia abajo** (alejándose del cero si el dividendo es negativo), multiplicar y ver cuánto falta. Verificar siempre que $qa + r$ devuelva $b$.`,
      variantes: [
        // Nivel 1 — dividendo y divisor positivos (mecánica pura)
        [
          { pregunta: String.raw`Hallá $q$ y $r$ de dividir $b = 47$ por $a = 6$.`, respuesta: String.raw`$$47 = 6 \cdot 7 + 5, \qquad q = 7,\; r = 5$$
Verificación: $42 + 5 = 47$ y $0 \le 5 < 6$. ✔`, pista: "Buscá el múltiplo de 6 inmediatamente inferior o igual a 47." },
          { pregunta: String.raw`Hallá $q$ y $r$ de dividir $b = 83$ por $a = 9$.`, respuesta: String.raw`$$83 = 9 \cdot 9 + 2, \qquad q = 9,\; r = 2$$
Verificación: $81 + 2 = 83$ y $0 \le 2 < 9$. ✔` },
        ],
        // Nivel 2 — dividendo NEGATIVO (el eje nuevo: el error común de la unidad)
        [
          { pregunta: String.raw`Hallá $q$ y $r$ de dividir $b = -53$ por $a = 7$.`, respuesta: String.raw`$$-53 = 7 \cdot (-8) + 3, \qquad q = -8,\; r = 3$$
Verificación: $-56 + 3 = -53$ y $0 \le 3 < 7$. ✔

> [!trampa]
> El error común es $q = -7,\; r = -4$: la igualdad cierra ($-49 - 4 = -53$) pero **el resto no puede ser negativo**.`, pista: "Buscá el múltiplo de 7 inmediatamente inferior o igual a −53, o sea −56, no −49." },
          { pregunta: String.raw`Hallá $q$ y $r$ de dividir $b = -23$ por $a = 5$.`, respuesta: String.raw`$$-23 = 5 \cdot (-5) + 2, \qquad q = -5,\; r = 2$$
Verificación: $-25 + 2 = -23$ y $0 \le 2 < 5$. ✔

> [!trampa]
> $q = -4,\; r = -3$ cierra numéricamente pero viola $r \ge 0$; $q = -6,\; r = 7$ también cierra pero viola $r < 5$.` },
        ],
        // Nivel 3 — divisor NEGATIVO (eje nuevo: el |a| de la cota deja de ser decorativo)
        [
          { pregunta: String.raw`Hallá $q$ y $r$ de dividir $b = 81$ por $a = -9$.`, respuesta: String.raw`$$81 = (-9)\cdot(-9) + 0, \qquad q = -9,\; r = 0$$
Verificación: $81 + 0 = 81$ y $0 \le 0 < 9$. ✔

Además $r = 0$ significa que $-9 \mid 81$.`, pista: "La cota es 0 ≤ r < |a| = 9, no 0 ≤ r < −9." },
          { pregunta: String.raw`Hallá $q$ y $r$ de dividir $b = 47$ por $a = -6$.`, respuesta: String.raw`$$47 = (-6)\cdot(-7) + 5, \qquad q = -7,\; r = 5$$
Verificación: $42 + 5 = 47$ y $0 \le 5 < |-6| = 6$. ✔` },
        ],
        // Nivel 4 — ambos negativos (combina los dos ejes anteriores)
        [
          { pregunta: String.raw`Hallá $q$ y $r$ de dividir $b = -112$ por $a = -11$.`, respuesta: String.raw`$$-112 = (-11)\cdot 11 + 9, \qquad q = 11,\; r = 9$$
Verificación: $-121 + 9 = -112$ y $0 \le 9 < 11$. ✔

Con los dos signos negativos el cociente sale **positivo**, pero el resto sigue obligado a caer en $[0, 11)$.` },
          { pregunta: String.raw`Hallá $q$ y $r$ de dividir $b = -37$ por $a = -8$.`, respuesta: String.raw`$$-37 = (-8)\cdot 5 + 3, \qquad q = 5,\; r = 3$$
Verificación: $-40 + 3 = -37$ y $0 \le 3 < 8$. ✔` },
        ],
        // Nivel 5 — dirección inversa: auditar un par (q,r) y corregirlo (la rúbrica del profe)
        [
          { pregunta: String.raw`Un compañero entrega $-53 = 7\cdot(-7) - 4$, o sea $q = -7$ y $r = -4$. ¿Está bien? Justificá y corregí si hace falta.`, respuesta: String.raw`**Está mal.** La igualdad cierra ($-49 - 4 = -53$), pero eso **no alcanza**: el teorema exige $0 \le r < |a|$, y $r = -4 < 0$.

Correcto:
$$-53 = 7\cdot(-8) + 3, \qquad q = -8,\; r = 3$$

> [!vale]
> El profe pide poder detectar esto aunque no sepas calcularlo: «si yo les digo que el resto de esa división es 4, me tendrían que decir: está mal. No sé cómo se hace, pero está mal».`, pista: "Chequeá las dos condiciones por separado: la igualdad, y el rango del resto." },
          { pregunta: String.raw`Te dicen que al dividir $-23$ por $5$ el cociente es $-6$ y el resto es $7$. ¿Está bien? Justificá y corregí si hace falta.`, respuesta: String.raw`**Está mal.** La igualdad cierra ($5\cdot(-6) + 7 = -30 + 7 = -23$), pero $r = 7 \ge |a| = 5$: el resto tiene que ser **estrictamente menor** que el módulo del divisor.

Correcto:
$$-23 = 5\cdot(-5) + 2, \qquad q = -5,\; r = 2$$

Por **unicidad** del Teorema 2.2 no hay dos pares válidos: si el tuyo viola el rango, es el equivocado.` },
        ],
      ],
    },

    /* ── 5. Función resto, ℤₘ y Prop. 2.3 ──────────────────────── */
    {
      id: "alin-u01-015",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["funcion-resto", "criterio"],
      fuente: "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md",
      pregunta: String.raw`¿Qué es $r_{m}(x)$ y qué criterio operativo de divisibilidad se desprende de ella?`,
      respuesta: String.raw`$r_{m}(x)$ es el **resto** de dividir $x$ por $m \neq 0$. Formalmente $r_{m}: \mathbb{Z} \to \mathbb{Z}_{m}$, con $r_{m}(x) = r$ donde $x = mq + r$ y $0 \le r < |m|$. Está **bien definida** gracias a la unicidad del Teorema 2.2.

El criterio:

$$a \mid b \iff r_{a}(b) = 0$$

Convierte una pregunta de **existencia** («¿hay un $c$?») en un **cálculo**: dividís y mirás el resto.`,
    },
    {
      id: "alin-u01-016",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["zm", "conjunto-restos"],
      fuente: "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md",
      pregunta: String.raw`¿Qué es $\mathbb{Z}_{m}$, cuántos elementos tiene y por qué es **finito**?`,
      respuesta: String.raw`Para $m \in \mathbb{Z}$ con $m > 1$:

$$\mathbb{Z}_{m} = \{0,\, 1,\, 2,\, \dots,\, m-1\}$$

Tiene exactamente **$m$ elementos**: son todos los restos posibles al dividir por $m$.

Es finito porque la cota $0 \le r < m$ deja solo esos valores, y **$\mathbb{Z}$ no es denso**: entre dos enteros consecutivos no hay enteros, así que no se cuela nada en el medio.`,
    },
    {
      id: "alin-u01-017",
      tipo: "texto",
      dificultad: "media",
      tags: ["prop-2.3", "trampa", "vocabulario"],
      fuente: ["algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md", "algebra-lineal/transcripciones/2026-08-05.md"],
      pregunta: String.raw`Enunciá la **Prop. 2.3**. ¿Y cuál es la trampa de vocabulario que el profe corrigió en vivo sobre ella?`,
      respuesta: String.raw`Sean $m, u, v \in \mathbb{Z}$ con $m \neq 0$:

$$r_{m}(u) = r_{m}(v) \iff u - v = k\cdot m \;\text{ para algún } k \in \mathbb{Z}$$

O sea: **mismo resto $\iff$ la diferencia es múltiplo de $m$**.

> [!trampa] La trampa
> Dos números con el mismo $r_{m}$ **no** son múltiplos entre sí, y **no** «comparten el módulo». Comparten el **resto**. Lo que es múltiplo de $m$ es su **diferencia**.

> [!prof] el profe, clase 05/08
> «Esto es importantísimo que lo tengamos en claro para cuando veamos congruencias»`,
    },
    {
      id: "alin-u01-018",
      tipo: "practica",
      tags: ["funcion-resto", "drill"],
      fuente: ["algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      concepto: String.raw`Calcular la función resto $r_{m}(x)$, incluyendo argumentos negativos, y usar la Prop. 2.3 para comparar restos sin calcularlos.`,
      variantes: [
        // Nivel 1 — argumento positivo
        [
          { pregunta: String.raw`Calculá $r_{5}(17)$.`, respuesta: String.raw`$17 = 5\cdot 3 + 2$, con $0 \le 2 < 5$.
$$r_{5}(17) = 2$$`, pista: "Dividí y quedate con el resto, que tiene que caer en [0, 5)." },
          { pregunta: String.raw`Calculá $r_{7}(30)$.`, respuesta: String.raw`$30 = 7\cdot 4 + 2$, con $0 \le 2 < 7$.
$$r_{7}(30) = 2$$` },
        ],
        // Nivel 2 — argumento NEGATIVO (eje nuevo: signo)
        [
          { pregunta: String.raw`Calculá $r_{5}(-3)$.`, respuesta: String.raw`$-3 = 5\cdot(-1) + 2$, con $0 \le 2 < 5$.
$$r_{5}(-3) = 2$$

> [!trampa]
> **No** es $-3 = 5\cdot 0 - 3$: el resto $-3$ es negativo y está prohibido.`, pista: "El cociente tiene que ir hacia abajo (−1), no a cero." },
          { pregunta: String.raw`Calculá $r_{8}(-3)$.`, respuesta: String.raw`$-3 = 8\cdot(-1) + 5$, con $0 \le 5 < 8$.
$$r_{8}(-3) = 5$$` },
        ],
        // Nivel 3 — casos borde: resto 0 y negativo de varios saltos
        [
          { pregunta: String.raw`Calculá $r_{8}(64)$ y $r_{8}(-18)$.`, respuesta: String.raw`$64 = 8\cdot 8 + 0 \implies \; r_{8}(64) = 0$ (y por lo tanto $8 \mid 64$).

$-18 = 8\cdot(-3) + 6 \implies \; r_{8}(-18) = 6$.

Verificación: $-24 + 6 = -18$, con $0 \le 6 < 8$. ✔`, pista: "Resto 0 no es un caso raro: significa exactamente que hay divisibilidad." },
          { pregunta: String.raw`Calculá $r_{6}(-42)$ y $r_{6}(-25)$.`, respuesta: String.raw`$-42 = 6\cdot(-7) + 0 \implies \; r_{6}(-42) = 0$ (o sea $6 \mid -42$).

$-25 = 6\cdot(-5) + 5 \implies \; r_{6}(-25) = 5$.

Verificación: $-30 + 5 = -25$, con $0 \le 5 < 6$. ✔` },
        ],
        // Nivel 4 — composición: decidir con Prop. 2.3, sin calcular los restos
        [
          { pregunta: String.raw`¿Tienen $17$ y $-3$ el mismo resto módulo 5? Respondé de las **dos** formas (calculando y por Prop. 2.3).`, respuesta: String.raw`**Sí.**

- Calculando: $r_{5}(17) = 2$ y $r_{5}(-3) = 2$.
- Por **Prop. 2.3**: $17 - (-3) = 20 = 5\cdot 4$, la diferencia es múltiplo de 5.

Las dos vías coinciden, como tiene que ser. ✔`, pista: "Prop. 2.3: mirá la diferencia, no los restos." },
          { pregunta: String.raw`¿Tienen $25$ y $-18$ el mismo resto módulo 8? Respondé de las **dos** formas.`, respuesta: String.raw`**No.**

- Calculando: $r_{8}(25) = 1$ (pues $25 = 8\cdot 3 + 1$) y $r_{8}(-18) = 6$ (pues $-18 = 8\cdot(-3) + 6$).
- Por **Prop. 2.3**: $25 - (-18) = 43$, y $43$ no es múltiplo de 8 ($43 = 8\cdot 5 + 3$).

Las dos vías coinciden en el «no». ✔` },
        ],
        // Nivel 5 — con letras: resto de un entero indeterminado (el más "de parcial")
        [
          { pregunta: String.raw`Se sabe que $m$ excede en 47 a un múltiplo de 24, o sea $m = 24k + 47$ con $k \in \mathbb{Z}$. Hallá $r_{4}(m)$, $r_{6}(m)$ y $r_{12}(m)$, justificando.`, respuesta: String.raw`Reescribo $m$ en cada caso como **múltiplo del divisor** + **valor dentro del rango**:

$$m = 4(6k + 11) + 3 \implies r_{4}(m) = 3 \quad (0 \le 3 < 4)$$
$$m = 6(4k + 7) + 5 \implies r_{6}(m) = 5 \quad (0 \le 5 < 6)$$
$$m = 12(2k + 3) + 11 \implies r_{12}(m) = 11 \quad (0 \le 11 < 12)$$

**El argumento que da el punto:** en cada línea $m$ quedó escrito como múltiplo de $a$ más un valor en $[0, |a|)$, y **por unicidad del resto** (Teorema 2.2) ese valor **es** el resto. Los paréntesis son enteros por **cerradura**.`, pista: "Partí el 47 en (múltiplo del divisor) + (lo que sobra dentro del rango)." },
          { pregunta: String.raw`Sea $n = 15k + 38$ con $k \in \mathbb{Z}$. Hallá $r_{5}(n)$ y $r_{3}(n)$, justificando.`, respuesta: String.raw`$$n = 5(3k + 7) + 3 \implies r_{5}(n) = 3 \quad (0 \le 3 < 5)$$
$$n = 3(5k + 12) + 2 \implies r_{3}(n) = 2 \quad (0 \le 2 < 3)$$

En los dos casos: $(3k+7)$ y $(5k+12)$ son enteros por **cerradura**, el sobrante cae en el rango exigido, y por **unicidad del resto** ese sobrante es $r$. $\;\blacksquare$` },
        ],
      ],
    },
    {
      id: "alin-u01-019",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["demostracion", "restos", "guia-ej6"],
      fuente: ["algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf", "algebra-lineal/transcripciones/2026-08-12.md"],
      pregunta: String.raw`(Ejercicio 6 de la guía = Problema 3c del deck) Sean $u, v \in \mathbb{Z}$ con $r_{5}(u) = 2$ y $r_{5}(v) = 2$. Demostrá que $5 \mid (u - v)$ y que $r_{5}(u+v) = 4$.`,
      respuesta: String.raw`Por definición de función resto, existen $k, j \in \mathbb{Z}$ con $u = 5k + 2$ y $v = 5j + 2$.

**(i)** $u - v = (5k + 2) - (5j + 2) = 5k - 5j = 5(k - j)$.

Como $(k - j) \in \mathbb{Z}$ **por cerradura de $\mathbb{Z}$**, por definición de divisibilidad $\;5 \mid (u - v)$. $\;\blacksquare$

**(ii)** $u + v = 5k + 5j + 4 = 5(k + j) + 4$, con $(k+j) \in \mathbb{Z}$ y $0 \le 4 < 5$.

Por **unicidad del resto** (Teorema 2.2), $\;r_{5}(u+v) = 4$. $\;\blacksquare$

> [!vale]
> Las dos frases en negrita son exactamente las que el profe cobra: sin ellas el ejercicio queda **descrito**, no justificado.`,
      pista: "Traducí las dos hipótesis de restos a igualdades con la definición, y recién ahí operá.",
    },

    /* ── 6. MCD (el «DCM» del profe) ───────────────────────────── */
    {
      id: "alin-u01-020",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["mcd", "definicion-2.5"],
      fuente: ["algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md", "algebra-lineal/transcripciones/2026-08-12.md"],
      pregunta: String.raw`Definí el **máximo común divisor** $(a : b)$. ¿Por qué siempre existe, por qué es único y cuál es su valor mínimo?`,
      respuesta: String.raw`Dados $a, b \in \mathbb{Z}$ con al menos uno no nulo, $(a : b)$ es **el mayor de sus divisores positivos comunes**. (El profe lo llama **«el DCM»** y lo escribe así; en el apunte es $\mathrm{mcd}(a,b)$ o $(a:b)$.)

- **Existe siempre** porque **el 1 es divisor común de cualquier par**, así que el conjunto de divisores comunes nunca está vacío.
- **Es único** porque todo entero no nulo tiene una cantidad **finita** de divisores, y un conjunto finito y ordenado tiene máximo.
- **Siempre es positivo** (es el **mayor**) y **de mínima vale 1**.

> [!exam] Pregunta de final
> Justificar **por qué existe siempre** es lo que el profe marcó como evaluable: «eso tiene que estar claro para todos, pregunta de final» (12/08).`,
    },
    {
      id: "alin-u01-021",
      tipo: "texto",
      dificultad: "media",
      tags: ["mcd", "prop-2.4", "rubrica"],
      fuente: ["algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md", "algebra-lineal/unidad-01-numeros-enteros/apuntes/clase-1-divisibilidad.pptx"],
      pregunta: String.raw`Enunciá las cinco propiedades del MCD (Prop. 2.4). ¿Cuál es el motor del Algoritmo de Euclides y cuál exige demostrar en **dos direcciones**?`,
      respuesta: String.raw`$$\begin{array}{ll} 1. & (a:b) = (b:a) \\ 2. & (a:b) = (|a| : |b|) \\ 3. & a \mid b \iff (a:b) = |a| \\ 4. & (a:b) = (a : b-a) \\ 5. & \text{si } a \neq 0: \; (a:b) = (a : r_{a}(b)) \end{array}$$

> [!exam] La propiedad estrella
> **La 5 es el motor del Algoritmo de Euclides**: reemplazar $b$ por su resto no cambia el MCD, y el resto es más chico, así que el proceso termina.

> [!vale]
> **La 3 es un bicondicional**, así que hay que probar **ida y vuelta**: «para probar esas cosas […] o sea, en 2 direcciones, tenemos que comprobar la ida y la vuelta» (clase 05/08). Probar un solo sentido no cierra el ejercicio.`,
    },

    /* ── 7. Algoritmo de Euclides ──────────────────────────────── */
    {
      id: "alin-u01-022",
      tipo: "texto",
      dificultad: "media",
      tags: ["euclides", "trampa"],
      fuente: ["algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md", "algebra-lineal/transcripciones/2026-08-05.md"],
      pregunta: String.raw`Describí el **Algoritmo de Euclides**: qué rota en cada paso, por qué termina, y dónde se lee el MCD. ¿Cuál es la trampa que el profe repitió tres veces?`,
      respuesta: String.raw`**La rotación:** en cada paso el **divisor anterior pasa a dividendo** y el **resto anterior pasa a divisor**.

$$\begin{array}{l} b = q_{1}a + r_{1} \\ a = q_{2}r_{1} + r_{2} \\ r_{i} = q_{i+2}\,r_{i+1} + r_{i+2} \end{array}$$

**Por qué termina:** los restos forman una sucesión estrictamente decreciente $a > r_{1} > r_{2} > \dots \ge 0$, así que necesariamente algún $r_{n} = 0$.

**Dónde se lee:**
$$(a : b) = \text{el ÚLTIMO RESTO NO NULO}$$

> [!trampa] La trampa
> El MCD **no** es el último resto que calculaste (que es 0), ni el dividendo de ese renglón. Cuando el resto da 0, hay que **mirar el renglón de arriba**.

Si $r_{1} = 0$ de entrada, entonces $a \mid b$ y $(a:b) = |a|$.`,
    },
    {
      id: "alin-u01-023",
      tipo: "practica",
      tags: ["euclides", "mcd", "drill"],
      fuente: ["algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      concepto: String.raw`Calcular el MCD con el Algoritmo de Euclides, leyendo el **último resto no nulo**. Ojo con el encuadre: el profe avisó que «ningún ejercicio va a ser de calcular DCM. Ninguno […] esto es una aplicación» (12/08). Esto es el drill de la mecánica; en el parcial viene dentro de un problema.`,
      variantes: [
        // Nivel 1 — el primer resto ya es 0 (un solo renglón)
        [
          { pregunta: String.raw`Calculá $(135 : 45)$ con Euclides.`, respuesta: String.raw`$$135 = 3\cdot 45 + 0$$

El primer resto ya es 0, así que $45 \mid 135$ y

$$(135 : 45) = 45$$`, pista: "Si el primer resto da 0, el divisor divide al dividendo y el MCD es él mismo." },
          { pregunta: String.raw`Calculá $(84 : 12)$ con Euclides.`, respuesta: String.raw`$$84 = 7\cdot 12 + 0$$

$12 \mid 84$, luego $(84 : 12) = 12$.` },
        ],
        // Nivel 2 — cadena corta (2-3 renglones): hay que aplicar la rotación
        [
          { pregunta: String.raw`Calculá $(48 : 18)$ con Euclides.`, respuesta: String.raw`$$\begin{array}{l} 48 = 2\cdot 18 + 12 \\ 18 = 1\cdot 12 + 6 \\ 12 = 2\cdot 6 + 0 \end{array}$$

Último resto no nulo = **6**, luego $(48 : 18) = 6$.`, pista: "El divisor de un renglón pasa a dividendo del siguiente; el resto pasa a divisor." },
          { pregunta: String.raw`Calculá $(60 : 24)$ con Euclides.`, respuesta: String.raw`$$\begin{array}{l} 60 = 2\cdot 24 + 12 \\ 24 = 2\cdot 12 + 0 \end{array}$$

Último resto no nulo = **12**, luego $(60 : 24) = 12$.` },
        ],
        // Nivel 3 — el canónico de la unidad (4 renglones, cocientes variados)
        [
          { pregunta: String.raw`Calculá $(525 : 231)$ con Euclides.`, respuesta: String.raw`$$\begin{array}{ll} 525 = 2\cdot 231 + 63 & (63 \neq 0) \\ 231 = 3\cdot 63 + 42 & (42 \neq 0) \\ 63 = 1\cdot 42 + 21 & (21 \neq 0) \\ 42 = 2\cdot 21 + 0 & \leftarrow \text{concluye} \end{array}$$

Último resto no nulo = **21**, luego $\mathrm{mcd}(525, 231) = 21$. $\;\blacksquare$

Es el ejemplo canónico de la unidad (Ejemplo 2.4) y la base del Bézout que el profe hizo en clase.` },
          { pregunta: String.raw`Calculá $(1043 : 329)$ con Euclides.`, respuesta: String.raw`$$\begin{array}{l} 1043 = 3\cdot 329 + 56 \\ 329 = 5\cdot 56 + 49 \\ 56 = 1\cdot 49 + 7 \\ 49 = 7\cdot 7 + 0 \end{array}$$

Último resto no nulo = **7**, luego $(1043 : 329) = 7$.` },
        ],
        // Nivel 4 — cadena larga, cocientes casi todos 1 (donde se acumulan los errores)
        [
          { pregunta: String.raw`Calculá $(220 : 84)$ con Euclides.`, respuesta: String.raw`$$\begin{array}{l} 220 = 2\cdot 84 + 52 \\ 84 = 1\cdot 52 + 32 \\ 52 = 1\cdot 32 + 20 \\ 32 = 1\cdot 20 + 12 \\ 20 = 1\cdot 12 + 8 \\ 12 = 1\cdot 8 + 4 \\ 8 = 2\cdot 4 + 0 \end{array}$$

Último resto no nulo = **4**, luego $(220 : 84) = 4$.

Con cocientes 1 la cadena se alarga: conviene escribir cada renglón completo y no saltear pasos.` },
          { pregunta: String.raw`Calculá $(315 : 198)$ con Euclides.`, respuesta: String.raw`$$\begin{array}{l} 315 = 1\cdot 198 + 117 \\ 198 = 1\cdot 117 + 81 \\ 117 = 1\cdot 81 + 36 \\ 81 = 2\cdot 36 + 9 \\ 36 = 4\cdot 9 + 0 \end{array}$$

Último resto no nulo = **9**, luego $(315 : 198) = 9$.` },
        ],
        // Nivel 5 — coprimos + cadena máxima: hay que leer el resultado, no solo calcularlo
        [
          { pregunta: String.raw`Calculá $(89 : 55)$ con Euclides y decí qué te habilita a afirmar el resultado.`, respuesta: String.raw`$$\begin{array}{l} 89 = 1\cdot 55 + 34 \\ 55 = 1\cdot 34 + 21 \\ 34 = 1\cdot 21 + 13 \\ 21 = 1\cdot 13 + 8 \\ 13 = 1\cdot 8 + 5 \\ 8 = 1\cdot 5 + 3 \\ 5 = 1\cdot 3 + 2 \\ 3 = 1\cdot 2 + 1 \\ 2 = 2\cdot 1 + 0 \end{array}$$

Último resto no nulo = **1**, luego $(89 : 55) = 1$.

**Lo que habilita:** $(a:b) = 1$ significa que **89 y 55 son coprimos**, y por Bézout existen $x, y \in \mathbb{Z}$ con $89x + 55y = 1$. Ese 1 es la llave de los ejercicios de demostración (ej. 10 y 11 de la guía).`, pista: "Con cocientes todos 1 la cadena es la más larga posible; el resultado 1 tiene nombre propio." },
          { pregunta: String.raw`Calculá $(34 : 21)$ con Euclides y decí qué te habilita a afirmar el resultado.`, respuesta: String.raw`$$\begin{array}{l} 34 = 1\cdot 21 + 13 \\ 21 = 1\cdot 13 + 8 \\ 13 = 1\cdot 8 + 5 \\ 8 = 1\cdot 5 + 3 \\ 5 = 1\cdot 3 + 2 \\ 3 = 1\cdot 2 + 1 \\ 2 = 2\cdot 1 + 0 \end{array}$$

Último resto no nulo = **1**, luego $(34 : 21) = 1$: **34 y 21 son coprimos**, y existen $x, y \in \mathbb{Z}$ con $34x + 21y = 1$.` },
        ],
      ],
    },

    /* ── 8. Identidad de Bézout ────────────────────────────────── */
    {
      id: "alin-u01-024",
      tipo: "concepto",
      dificultad: "media",
      tags: ["bezout", "teorema-2.5"],
      fuente: ["algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md", "algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf"],
      pregunta: String.raw`Enunciá la **Identidad de Bézout** (Teorema 2.5). ¿Los $(x, y)$ son únicos?`,
      respuesta: String.raw`Sean $a, b \in \mathbb{Z}$ no ambos nulos. Entonces **existen** $x, y \in \mathbb{Z}$ tales que:

$$(a : b) = a\cdot x + b\cdot y$$

Además, $(a:b)$ es el **menor entero positivo** expresable como combinación lineal entera de $a$ y $b$.

**No, los pares no son únicos: son infinitos.** La identidad garantiza que existe **al menos uno**.

> [!prof] el profe, clase 05/08
> «en la práctica que viene va a ser importantísimo. Y es como lo que no le puede faltar en la demostración de sus ejercicios»

O sea: Bézout es **herramienta de justificación**, no solo un cálculo.`,
    },
    {
      id: "alin-u01-025",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["bezout", "trampa"],
      fuente: ["algebra-lineal/transcripciones/2026-08-05.md", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      pregunta: String.raw`Sabés que $(a : b) = d$. ¿Cuál de estas afirmaciones **NO** se sigue de la Identidad de Bézout?`,
      opciones: [
        String.raw`Para cualquier $n \in \mathbb{Z}$ existen $x, y \in \mathbb{Z}$ con $ax + by = n$`,
        String.raw`Existen $x, y \in \mathbb{Z}$ con $ax + by = d$`,
        String.raw`$d$ es el menor entero positivo de la forma $ax + by$`,
        String.raw`Los pares $(x, y)$ que sirven son infinitos`,
      ],
      correcta: 0,
      respuesta: String.raw`La primera es **falsa**. Bézout garantiza enteros $x, y$ **solo cuando el número igualado es el MCD de los coeficientes**. Para un $n$ arbitrario, los $x, y$ no tienen por qué ser enteros.

> [!prof] el profe, clase 05/08
> «el teorema no nos está diciendo que para cualquier expresión […] ese número que estoy igualando tiene que ser el DCM de los 2 números que son coeficientes de la ecuación»

(Cuáles $n$ sí funcionan es justamente el tema de la unidad 02: ecuaciones diofánticas.)`,
    },
    {
      id: "alin-u01-026",
      tipo: "practica",
      tags: ["bezout", "marcha-atras", "drill"],
      fuente: ["algebra-lineal/unidad-01-numeros-enteros/apuntes/clase-1-divisibilidad.pptx", "algebra-lineal/transcripciones/2026-08-05.md"],
      concepto: String.raw`**Marcha atrás de Bézout**: correr Euclides, despejar cada resto de su renglón, arrancar del último resto no nulo y sustituir hacia arriba tratando el resto pendiente como un **bloque** (sin multiplicarlo). Agrupar coeficientes y verificar con la cuenta.`,
      variantes: [
        // Nivel 1 — 2 sustituciones, coeficientes chicos
        [
          { pregunta: String.raw`Hallá $x, y \in \mathbb{Z}$ tales que $(30 : 18) = 30x + 18y$.`, respuesta: String.raw`Euclides: $30 = 1\cdot 18 + 12$; $\;18 = 1\cdot 12 + 6$; $\;12 = 2\cdot 6 + 0 \implies (30:18) = 6$.

Despejo los restos: $12 = 30 - 18$, $\;6 = 18 - 1\cdot 12$.

Marcha atrás:
$$6 = 18 - 1\cdot(30 - 18) = 2\cdot 18 - 1\cdot 30$$

$$\boxed{x = -1,\quad y = 2}$$

Verificación: $-30 + 36 = 6$ ✔`, pista: "Despejá cada resto de su renglón y sustituí de abajo hacia arriba." },
          { pregunta: String.raw`Hallá $x, y \in \mathbb{Z}$ tales que $(42 : 30) = 42x + 30y$.`, respuesta: String.raw`Euclides: $42 = 1\cdot 30 + 12$; $\;30 = 2\cdot 12 + 6$; $\;12 = 2\cdot 6 + 0 \implies (42:30) = 6$.

Despejo: $12 = 42 - 30$, $\;6 = 30 - 2\cdot 12$.

$$6 = 30 - 2\cdot(42 - 30) = 3\cdot 30 - 2\cdot 42$$

$$\boxed{x = -2,\quad y = 3}$$

Verificación: $-84 + 90 = 6$ ✔` },
        ],
        // Nivel 2 — 3 sustituciones y cocientes ≠ 1 que hay que arrastrar
        [
          { pregunta: String.raw`Hallá $x, y \in \mathbb{Z}$ tales que $(100 : 36) = 100x + 36y$.`, respuesta: String.raw`Euclides: $100 = 2\cdot 36 + 28$; $\;36 = 1\cdot 28 + 8$; $\;28 = 3\cdot 8 + 4$; $\;8 = 2\cdot 4 + 0 \implies (100:36) = 4$.

Despejo: $28 = 100 - 2\cdot 36$, $\;8 = 36 - 28$, $\;4 = 28 - 3\cdot 8$.

Marcha atrás (el bloque pendiente **no se multiplica**):
$$4 = 28 - 3\cdot 8 = 28 - 3(36 - 28) = 4\cdot 28 - 3\cdot 36$$
$$4 = 4(100 - 2\cdot 36) - 3\cdot 36 = 4\cdot 100 - 8\cdot 36 - 3\cdot 36 = 4\cdot 100 - 11\cdot 36$$

$$\boxed{x = 4,\quad y = -11}$$

Verificación: $400 - 396 = 4$ ✔`, pista: "Cuando el cociente no es 1, hay que arrastrarlo en la distributiva sin cerrar el producto del bloque." },
          { pregunta: String.raw`Hallá $x, y \in \mathbb{Z}$ tales que $(126 : 35) = 126x + 35y$.`, respuesta: String.raw`Euclides: $126 = 3\cdot 35 + 21$; $\;35 = 1\cdot 21 + 14$; $\;21 = 1\cdot 14 + 7$; $\;14 = 2\cdot 7 + 0 \implies (126:35) = 7$.

Despejo: $21 = 126 - 3\cdot 35$, $\;14 = 35 - 21$, $\;7 = 21 - 14$.

$$7 = 21 - 14 = 21 - (35 - 21) = 2\cdot 21 - 35$$
$$7 = 2(126 - 3\cdot 35) - 35 = 2\cdot 126 - 6\cdot 35 - 35 = 2\cdot 126 - 7\cdot 35$$

$$\boxed{x = 2,\quad y = -7}$$

Verificación: $252 - 245 = 7$ ✔` },
        ],
        // Nivel 3 — 4 sustituciones: los canónicos de clase
        [
          { pregunta: String.raw`Hallá $x, y \in \mathbb{Z}$ tales que $(525 : 231) = 525x + 231y$.`, respuesta: String.raw`Euclides da $(525 : 231) = 21$. Despejo los restos:

$$63 = 525 - 2\cdot 231, \qquad 42 = 231 - 3\cdot 63, \qquad 21 = 63 - 1\cdot 42$$

Marcha atrás (**el 63 es un bloque, no lo multiplico**):
$$21 = 63 - 1\cdot(231 - 3\cdot 63)$$
$$21 = 63 + 3\cdot 63 - 1\cdot 231 = 4\cdot 63 - 1\cdot 231$$
$$21 = 4\cdot(525 - 2\cdot 231) - 1\cdot 231$$
$$21 = 4\cdot 525 - 8\cdot 231 - 1\cdot 231 = 4\cdot 525 - 9\cdot 231$$

$$\boxed{x = 4,\quad y = -9}$$

Verificación: $4\cdot 525 = 2100$, $\;9\cdot 231 = 2079$, $\;2100 - 2079 = 21$ ✔` },
          { pregunta: String.raw`Hallá $x, y \in \mathbb{Z}$ tales que $(1043 : 329) = 1043x + 329y$.`, respuesta: String.raw`Euclides: $1043 = 3\cdot 329 + 56$; $\;329 = 5\cdot 56 + 49$; $\;56 = 1\cdot 49 + 7$; $\;49 = 7\cdot 7 + 0 \implies$ MCD $= 7$.

Marcha atrás:
$$7 = 56 - 1\cdot 49 = 56 - (329 - 5\cdot 56) = 6\cdot 56 - 1\cdot 329$$
$$7 = 6(1043 - 3\cdot 329) - 329 = 6\cdot 1043 - 18\cdot 329 - 329 = 6\cdot 1043 - 19\cdot 329$$

$$\boxed{x = 6,\quad y = -19}$$

Verificación: $6\cdot 1043 = 6258$, $\;19\cdot 329 = 6251$, $\;6258 - 6251 = 7$ ✔` },
        ],
        // Nivel 4 — cadena larga, coeficientes grandes: acumulación de pasos
        [
          { pregunta: String.raw`Hallá $x, y \in \mathbb{Z}$ tales que $(220 : 84) = 220x + 84y$.`, respuesta: String.raw`Euclides (6 renglones con resto no nulo) da $(220 : 84) = 4$.

Marcha atrás, subiendo renglón por renglón:
$$4 = 12 - 1\cdot 8 = 12 - (20 - 12) = 2\cdot 12 - 20$$
$$= 2(32 - 20) - 20 = 2\cdot 32 - 3\cdot 20$$
$$= 2\cdot 32 - 3(52 - 32) = 5\cdot 32 - 3\cdot 52$$
$$= 5(84 - 52) - 3\cdot 52 = 5\cdot 84 - 8\cdot 52$$
$$= 5\cdot 84 - 8(220 - 2\cdot 84) = 21\cdot 84 - 8\cdot 220$$

$$\boxed{x = -8,\quad y = 21}$$

Verificación: $84\cdot 21 = 1764$, $\;220\cdot 8 = 1760$, $\;1764 - 1760 = 4$ ✔`, pista: "Cinco sustituciones: escribí cada línea entera, no acumules dos pasos en uno." },
          { pregunta: String.raw`Hallá $x, y \in \mathbb{Z}$ tales que $(315 : 198) = 315x + 198y$.`, respuesta: String.raw`Euclides: $315 = 1\cdot 198 + 117$; $\;198 = 1\cdot 117 + 81$; $\;117 = 1\cdot 81 + 36$; $\;81 = 2\cdot 36 + 9$; $\;36 = 4\cdot 9 + 0 \implies$ MCD $= 9$.

Marcha atrás:
$$9 = 81 - 2\cdot 36 = 81 - 2(117 - 81) = 3\cdot 81 - 2\cdot 117$$
$$= 3(198 - 117) - 2\cdot 117 = 3\cdot 198 - 5\cdot 117$$
$$= 3\cdot 198 - 5(315 - 198) = 8\cdot 198 - 5\cdot 315$$

$$\boxed{x = -5,\quad y = 8}$$

Verificación: $8\cdot 198 = 1584$, $\;5\cdot 315 = 1575$, $\;1584 - 1575 = 9$ ✔` },
        ],
        // Nivel 5 — coprimos: cadena máxima + hay que decir para qué sirve el resultado
        [
          { pregunta: String.raw`Hallá $x, y \in \mathbb{Z}$ tales que $89x + 55y = 1$, y explicá qué propiedad de 89 y 55 hace que esto sea posible.`, respuesta: String.raw`Euclides da $(89 : 55) = 1$, o sea **89 y 55 son coprimos**: por eso Bézout permite igualar a **1**. (Si el MCD fuera $d > 1$, ninguna combinación entera daría 1.)

Marcha atrás, con cocientes todos 1:
$$1 = 3 - 2 = 3 - (5 - 3) = 2\cdot 3 - 5$$
$$= 2(8 - 5) - 5 = 2\cdot 8 - 3\cdot 5$$
$$= 2\cdot 8 - 3(13 - 8) = 5\cdot 8 - 3\cdot 13$$
$$= 5(21 - 13) - 3\cdot 13 = 5\cdot 21 - 8\cdot 13$$
$$= 5\cdot 21 - 8(34 - 21) = 13\cdot 21 - 8\cdot 34$$
$$= 13(55 - 34) - 8\cdot 34 = 13\cdot 55 - 21\cdot 34$$
$$= 13\cdot 55 - 21(89 - 55) = 34\cdot 55 - 21\cdot 89$$

$$\boxed{x = -21,\quad y = 34}$$

Verificación: $34\cdot 55 = 1870$, $\;21\cdot 89 = 1869$, $\;1870 - 1869 = 1$ ✔`, pista: "Primero corré Euclides y mirá el MCD: el 1 no es casualidad, tiene nombre." },
          { pregunta: String.raw`Hallá $x, y \in \mathbb{Z}$ tales que $64x + 27y = 1$, y explicá qué propiedad de 64 y 27 lo hace posible.`, respuesta: String.raw`Euclides: $64 = 2\cdot 27 + 10$; $\;27 = 2\cdot 10 + 7$; $\;10 = 1\cdot 7 + 3$; $\;7 = 2\cdot 3 + 1$; $\;3 = 3\cdot 1 + 0 \implies (64:27) = 1$: **son coprimos**, y por eso se puede igualar a 1.

Marcha atrás:
$$1 = 7 - 2\cdot 3 = 7 - 2(10 - 7) = 3\cdot 7 - 2\cdot 10$$
$$= 3(27 - 2\cdot 10) - 2\cdot 10 = 3\cdot 27 - 8\cdot 10$$
$$= 3\cdot 27 - 8(64 - 2\cdot 27) = 19\cdot 27 - 8\cdot 64$$

$$\boxed{x = -8,\quad y = 19}$$

Verificación: $19\cdot 27 = 513$, $\;8\cdot 64 = 512$, $\;513 - 512 = 1$ ✔` },
        ],
      ],
    },
    {
      id: "alin-u01-027",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["bezout", "trampa", "bloque"],
      fuente: ["algebra-lineal/transcripciones/2026-08-05.md", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      pregunta: String.raw`En la marcha atrás llegaste a $21 = 4\cdot 63 - 1\cdot 231$ y el próximo paso es reemplazar $63 = 525 - 2\cdot 231$. ¿Por qué **no** conviene calcular $4\cdot 63 = 252$ antes?`,
      respuesta: String.raw`Porque **63 es el resto que todavía hay que sustituir**: se trata como un **bloque**, como si fuera una letra. Si lo multiplicás, perdés el término que tenías que reemplazar por $525 - 2\cdot 231$ y ya no podés cerrar la combinación lineal.

> [!prof] el profe, clase 05/08
> «como yo el 63 no lo puedo perder, lo pienso como algo que es variable, o sea como una letra. No lo pierdo. Es un bloque»

Es el punto exacto donde se pierde el ejercicio: el profe frenó a la clase **tres veces** sobre esto. La regla operativa: en cada paso hacé la distributiva pero **no cierres** los productos que contienen un resto pendiente.`,
    },

    /* ── 9. MCD por factorización en primos ────────────────────── */
    {
      id: "alin-u01-028",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["factorizacion", "mcd", "guia-ej8"],
      fuente: ["algebra-lineal/chat/resumen.md", "algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf"],
      pregunta: String.raw`(Ejercicio 8 de la guía) Calculá $(504 : 720)$ por **descomposición en primos** y comprobá con Euclides.`,
      respuesta: String.raw`**Regla del profe:** primos **comunes**, elevados al **menor** exponente.

$$504 = 2^{3}\cdot 3^{2}\cdot 7 \qquad 720 = 2^{4}\cdot 3^{2}\cdot 5$$

Primos comunes: 2 y 3. Exponentes mínimos: $2^{3}$ y $3^{2}$.

$$(504 : 720) = 2^{3}\cdot 3^{2} = 8\cdot 9 = 72$$

**Contraste con Euclides:**
$$\begin{array}{l} 720 = 1\cdot 504 + 216 \\ 504 = 2\cdot 216 + 72 \\ 216 = 3\cdot 72 + 0 \end{array}$$
Último resto no nulo = **72**. ✔ Coincide.

> [!vale]
> Si los dos métodos **no** coinciden, la que está mal es la factorización: no son métodos que puedan discrepar.`,
    },
    {
      id: "alin-u01-029",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["factorizacion", "trampa", "pronto"],
      fuente: "algebra-lineal/chat/resumen.md",
      pregunta: String.raw`Un alumno calculó $(504 : 720)$ escribiendo $504 = 4\cdot 2\cdot 63$ y tomando después el exponente **mayor** de cada primo común. El profe le corrigió **dos** errores por escrito. ¿Cuáles?`,
      respuesta: String.raw`**Error 1: usar factores que no son primos.** La descomposición tiene que ser en **primos**: $4 = 2^{2}$ y $63 = 3^{2}\cdot 7$ no son primos.

> [!prof] el profe, Pronto 10/08
> «En tu descomposición usás 4; 4 no es primo. 15 tampoco es primo, es 3 y luego 5 o al revés.»

**Error 2: tomar el exponente máximo en vez del mínimo.**

> [!prof] el profe, Pronto 10/08
> «El 2 se repite 3 veces como mínimo, y el 3 dos veces como mínimo. Así que el dcm es 2³×3²»

Regla correcta: $(a:b) = $ producto de los **primos comunes** elevados al **menor** exponente. Acá da $2^{3}\cdot 3^{2} = 72$.

> [!exam] Entra al parcial
> Es una de las cuatro correcciones **escritas** del profe: error real de un alumno, no hipotético. Sin parciales previos, es lo más cercano a evidencia dura que hay en la unidad.`,
    },

    /* ── 10. Primos, compuestos, par e impar ───────────────────── */
    {
      id: "alin-u01-030",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["primos", "definicion-2.6"],
      fuente: "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md",
      pregunta: String.raw`Definición 2.6: ¿cuándo un entero es **primo**? ¿Y la versión operativa de **compuesto** que dio el profe?`,
      respuesta: String.raw`**Primo:** posee **exactamente 4 divisores en $\mathbb{Z}$**, que son $\pm 1$ y $\pm p$.

**Compuesto** (Def. 2.7): admite descomposición como producto de dos o más factores primos. **Versión operativa del profe:** «el número compuesto es aquel que tiene **más de 4 divisores**».

Ejemplos:
- $p = 7$ es **primo**: divisores $\{1, -1, 7, -7\}$, exactamente 4.
- $n = 12$ es **compuesto** ($12 = 2\cdot 2\cdot 3$) y **par**.
- $n = 15$ es **compuesto e impar**: $15 = 3\cdot 5$ y $15 = 2\cdot 7 + 1$.

Ojo: se cuentan los divisores **en $\mathbb{Z}$**, negativos incluidos. Por eso son 4 y no 2.`,
    },
    {
      id: "alin-u01-031",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["primos", "trampa", "el-1"],
      fuente: "algebra-lineal/transcripciones/2026-08-05.md",
      pregunta: String.raw`¿Cómo se clasifica el $1$ en $\mathbb{Z}$?`,
      opciones: [
        String.raw`Ni primo ni compuesto`,
        String.raw`Primo`,
        String.raw`Compuesto`,
        String.raw`Primo y compuesto a la vez`,
      ],
      correcta: 0,
      respuesta: String.raw`**El 1 no es ni primo ni compuesto.**

> [!prof] el profe, clase 05/08
> «el 1 no es ni primo ni compuesto […] porque el 1 tiene solamente 2 divisores»

Sus divisores en $\mathbb{Z}$ son $\{1, -1\}$: **2**, no 4. Primo exige exactamente 4, y compuesto exige más de 4. El 1 se queda afuera de las dos definiciones.`,
    },
    {
      id: "alin-u01-032",
      tipo: "completar",
      dificultad: "facil",
      tags: ["par-impar", "definicion-2.8"],
      fuente: "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md",
      pregunta: String.raw`Def. 2.8: $a$ es **par** si $a = $ ____ , e **impar** si $a = $ ____ . ¿Y qué aclaró el profe sobre $2k - 1$?`,
      respuesta: String.raw`**Par:** $a = 2b$ con $b \in \mathbb{Z}$.
**Impar:** $a = 2k + 1$ con $k \in \mathbb{Z}$.

Sobre $2k - 1$: **también sirve**. Las dos formas describen exactamente el mismo conjunto (los impares), y se elige una u otra según convenga: «dependiendo de la herramienta que necesito».

En una demostración, elegí la forma que te haga cancelar mejor: no son conjuntos distintos.`,
    },

    /* ── 11. Prop. 2.6 y el Lema de Euclides ───────────────────── */
    {
      id: "alin-u01-033",
      tipo: "texto",
      dificultad: "media",
      tags: ["lema-euclides", "prop-2.6", "coprimos"],
      fuente: "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md",
      pregunta: String.raw`Enunciá las cinco propiedades con primos (Prop. 2.6) y la definición de **coprimos**.`,
      respuesta: String.raw`Sean $p, q$ primos y $a, b \in \mathbb{Z}$:

$$\begin{array}{ll} 1. & p \mid q \implies p = q \\ 2. & (p:a) = p \text{ si } p \mid a; \quad (p:a) = 1 \text{ si } p \nmid a \\ 3. & \textbf{Lema de Euclides: } p \mid (a\cdot b) \implies p \mid a \;\text{ o }\; p \mid b \\ 4. & n \ge 1 \text{ y } p \mid a^{n} \implies p \mid a \\ 5. & \text{todo entero } n > 1 \text{ posee al menos un divisor primo} \end{array}$$

**Coprimos** (el profe la dictó en vivo porque faltaba en el deck): si $(a : b) = 1$, entonces $a$ y $b$ son **coprimos**.

Sin esa definición no se encaran los ejercicios 10 y 11 de la guía ni se sigue la demostración del Lema.`,
    },
    {
      id: "alin-u01-034",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["lema-euclides", "demostracion"],
      fuente: ["algebra-lineal/transcripciones/2026-08-05.md", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      pregunta: String.raw`Demostrá el **Lema de Euclides**: si $p$ es primo y $p \mid (a\cdot b)$, entonces $p \mid a$ o $p \mid b$.`,
      respuesta: String.raw`Sea $d = (p : a)$. Por la **propiedad 2** de la Prop. 2.6, solo hay dos casos: $d = p$ o $d = 1$.

**Caso $d = p$:** por definición de MCD, $d \mid a$, luego $p \mid a$. ✔

**Caso $d = 1$:** $p$ y $a$ son **coprimos**, así que por **Bézout** existen $x, y \in \mathbb{Z}$ con
$$1 = p x + a y$$
Multiplico todo por $b$:
$$b = p b x + (a b) y$$
- $p \mid (p\,b\,x)$ por la **propiedad del producto**.
- $p \mid (ab)$ por hipótesis, luego $p \mid (ab)\,y$, también por la propiedad del producto.

Por **linealidad**, $p$ divide a la suma, o sea $p \mid b$. ✔ $\;\blacksquare$

> [!trampa] Trampa metodológica
> En la demostración del Lema **no se puede usar el Lema**. «Yo no puedo demostrar algo usando justo el resultado de ese algo». Lo que sí se usa: propiedad 2, Bézout, producto y linealidad.`,
      pista: "Partí en casos según el valor de (p : a), que por la propiedad 2 solo puede ser p o 1.",
    },
    {
      id: "alin-u01-035",
      tipo: "texto",
      dificultad: "media",
      tags: ["lema-euclides", "contraejemplo"],
      fuente: "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md",
      pregunta: String.raw`$6 \mid 36$ y $36 = 4\cdot 9$. ¿Podés concluir $6 \mid 4$ o $6 \mid 9$? ¿Qué muestra esto?`,
      respuesta: String.raw`**No.** $6 \nmid 4$ y $6 \nmid 9$.

El Lema de Euclides exige que el divisor sea **primo**: si $p \mid (ab)$ **con $p$ primo**, entonces $p \mid a$ o $p \mid b$. Como 6 no es primo, divide al producto sin dividir a ninguno de los factores.

**Lo que muestra:** la primalidad es **hipótesis indispensable**, no decoración. El profe insistió con este contraejemplo justamente para que no se aplique el Lema a divisores cualesquiera.

Contraste con un caso válido: $7 \mid 1729$ y $1729 = 91\cdot 19$. Como 7 **sí** es primo, el Lema garantiza $7 \mid 91$ o $7 \mid 19$, y en efecto $91 = 7\cdot 13$.`,
    },
    {
      id: "alin-u01-036",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["bezout", "coprimos", "guia-ej10"],
      fuente: "algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf",
      pregunta: String.raw`(Ejercicio 10 de la guía) Si $(a : b) = 1$, $a \mid c$ y $b \mid c$, demostrá que $a\cdot b \mid c$.`,
      respuesta: String.raw`Por **Bézout**, de $(a:b) = 1$ existen $x, y \in \mathbb{Z}$ con
$$1 = a x + b y$$

Multiplico por $c$:
$$c = a c x + b c y$$

Por hipótesis $a \mid c$ y $b \mid c$, así que existen $m, n \in \mathbb{Z}$ con $c = a m$ y $c = b n$. Sustituyo **el que conviene en cada término**: en el primero uso $c = bn$, en el segundo $c = am$.

$$c = a(b n)x + b(a m)y = ab\,(n x + m y)$$

Como $(nx + my) \in \mathbb{Z}$ **por cerradura**, exhibí el entero de la definición, luego $ab \mid c$. $\;\blacksquare$

> [!exam] Entra al parcial
> Es el único lugar donde **Bézout aparece como herramienta de justificación** y no de cálculo, que es literalmente cómo el profe lo presentó. El ejercicio 11 sigue el mismo patrón.`,
      pista: "Arrancá escribiendo el 1 como combinación lineal y multiplicá todo por c.",
    },
    {
      id: "alin-u01-037",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["parametros", "linealidad", "acotacion", "guia-ej12"],
      fuente: "algebra-lineal/unidad-01-numeros-enteros/apuntes/modulo-1-divisibilidad-repaso-matrices.pdf",
      pregunta: String.raw`(Ejercicio 12 de la guía) Sea $a \in \mathbb{Z}$ tal que $a \mid (2k+3)$ y $a \mid (3k+4)$ para algún $k \in \mathbb{Z}$. Demostrá que $a$ solo puede ser $1$ o $-1$.`,
      respuesta: String.raw`**Paso 1, linealidad con coeficientes que cancelan $k$.** Tomo $x = 3$, $y = -2$:

$$a \mid \big(3(2k+3) - 2(3k+4)\big) = (6k + 9) - (6k + 8) = 1$$

o sea $a \mid 1$.

**Paso 2, acotación** (Prop. 2.1.7): de $a \mid 1$ con $1 \neq 0$ sale $|a| \le 1$. Y $a \neq 0$ porque un divisor no puede ser 0.

$$\implies a = 1 \;\text{ o }\; a = -1 \qquad \blacksquare$$

> [!exam] Entra al parcial
> Es el **arquetipo de «búsqueda de parámetros»**, el tipo de ejercicio que el profe describió como lo que sí evalúa: «una demostración que requiere números y requiere condiciones […] eso sí va a estar en el examen». La técnica completa: elegir los coeficientes que cancelan la letra, y cerrar con acotación.`,
      pista: "Buscá los coeficientes enteros que hacen desaparecer la k al combinar las dos hipótesis.",
    },

    /* ── 12. Teorema Fundamental de la Aritmética ──────────────── */
    {
      id: "alin-u01-038",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["tfa", "teorema-2.7"],
      fuente: ["algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md", "algebra-lineal/unidad-01-numeros-enteros/apuntes/teoria-de-numeros.pdf"],
      pregunta: String.raw`Enunciá el **Teorema Fundamental de la Aritmética** y decí en qué se apoyan su existencia y su unicidad.`,
      respuesta: String.raw`Todo entero positivo mayor que 1 es **primo**, o bien admite una descomposición **única** como producto de factores primos, **salvo el orden**.

- La **existencia** se apoya en la propiedad 5 de la Prop. 2.6: todo $n > 1$ tiene al menos un divisor primo.
- La **unicidad** se apoya en el **Lema de Euclides**.

Ejemplo (descomposición canónica de 1260, por divisiones sucesivas por primos crecientes):
$$1260 = 2^{2}\cdot 3^{2}\cdot 5\cdot 7$$

> [!nota] Alcance
> El profe relativizó el método («esa descomposición no la vamos a hacer. Vamos a buscar los DCM con el algoritmo de Euclides»). Entra porque el ejercicio 8 de la guía lo pide y porque sostiene la unicidad, no como técnica de cálculo principal.`,
    },

    /* ── 13. Rúbrica de justificación y formulario ─────────────── */
    {
      id: "alin-u01-039",
      tipo: "texto",
      dificultad: "media",
      tags: ["rubrica", "justificacion"],
      fuente: ["algebra-lineal/transcripciones/2026-08-12.md", "algebra-lineal/cheatsheets/unidad-01-numeros-enteros.taller/resumen.md"],
      pregunta: String.raw`En un ejercicio con letras, ¿qué pasos hay que justificar **obligatoriamente**, cuáles son opcionales y cuáles **no** se justifican?`,
      respuesta: String.raw`Los tres niveles que el profe fijó el 12/08 sobre el ejercicio 6:

- **Obligatoria: la cerradura.** Que el entero que introducís **es entero**. «mientras pongan que eso va a ser entero ya me alcanza».
- **Opcional: la distributiva.** «si no lo pones no hace falta […] mientras vos más completo lo hagas mejor te va a quedar para vos».
- **No se justifica: la aritmética.** «no, es una cuenta».

**La regla de decisión que dio:**
> [!prof] el profe, clase 05/08
> «Siempre pensá: este paso, ¿necesito un porqué? Si necesita un porqué, hay que justificarlo. Si requiere que vos hayas sabido algo previo de la materia, entonces se justifica.»

**Cuándo aplica:** solo en ejercicios **con letras / parámetros**. En los numéricos no hace falta esa formalidad.`,
    },
    {
      id: "alin-u01-040",
      tipo: "texto",
      dificultad: "media",
      tags: ["rubrica", "trampa"],
      fuente: "algebra-lineal/transcripciones/2026-08-05.md",
      pregunta: String.raw`¿Por qué escribir «acá saco factor común» y «acá sumo 3 más 7» **no** suma puntos? ¿Qué distingue describir de justificar?`,
      respuesta: String.raw`**Describir no es justificar.** Narrar la mecánica de la cuenta no aporta: lo que se cobra es **el porqué**, o sea nombrar la propiedad o el teorema que habilita el paso.

> [!prof] el profe, clase 05/08
> «acá saco factor común, no me importa. No me expliques, sin justificar». «No me digas "sumo 3 más 7", porque eso no es una justificación»

Y el costo de no hacerlo:

> [!prof] el profe, clase 05/08
> «bajo muchos puntos por no justificarlo […] incluso capaz que no tomo el punto si no está justificado»

Dos matices más del 12/08:
- **El método es libre, la afirmación no:** «yo no evalúo los métodos que usen […] si le sale a ojo también, pero tienen que escribirlo».
- **Calculadora permitida, pero con el cálculo escrito:** «poné el cálculo […] que no es mágico lo que apareció ahí».`,
    },
    {
      id: "alin-u01-041",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["formulario", "parcial"],
      fuente: "algebra-lineal/transcripciones/2026-08-05.md",
      pregunta: String.raw`Armás la hoja que vas a llevar al parcial. ¿Cuál de estas entradas **te la invalida**?`,
      opciones: [
        String.raw`El desarrollo $(525 : 231) = 21$ resuelto con Euclides, como ejemplo`,
        String.raw`Las 8 propiedades de la Prop. 2.1`,
        String.raw`El enunciado del Teorema de Bézout`,
        String.raw`La cota $0 \le r < |a|$ del Algoritmo de la División`,
      ],
      correcta: 0,
      respuesta: String.raw`**Los ejemplos están prohibidos.** La regla textual del profe:

> [!prof] el profe, clase 05/08
> «para el parcial pueden tener **todas las propiedades que quieran**. Las pueden tener todas. Lo que **no** pueden tener son **anotaciones y ejemplos**. Propiedades, teoremas, todo eso lo pueden tener. No pueden tener ejemplos.»

Las otras tres son **enunciados limpios**: pasan el filtro.

> [!trampa]
> Cuidado con el borde: cuando un alumno preguntó si podía llevar el paso $d \in D(a,b) \iff d \mid a \wedge d \mid b$ de una demostración, el profe dijo que **no**: eso es **desarrollo**, no propiedad. La propiedad es el enunciado limpio, por ejemplo $(a:b) = (|a| : |b|)$.`,
    },

  ],
});
