/* Mazo — Álgebra · Unidad 07 · Números Complejos (forma binómica)
   Parte 1 de "Números Complejos" (Unidad 6 del programa). Entra en el final.
   Campos de contenido: SIEMPRE String.raw`...` (LaTeX literal). */
FLASHCARDS.deck({
  materia: "algebra",
  unidad: "07-numeros-complejos",
  titulo: "Números Complejos (binómica)",
  cards: [

    // ── Concepto y formas ────────────────────────────────
    {
      id: "alg-u07-001", tipo: "concepto", dificultad: "facil",
      tags: ["unidad-imaginaria"],
      fuente: ["algebra/cheatsheets/unidad-07-numeros-complejos.html", "algebra/unidad-07-numeros-complejos/apuntes/numeros-complejos.pdf"],
      pregunta: String.raw`¿Cómo se define la unidad imaginaria $i$ y cuánto vale $i^{2}$?`,
      respuesta: String.raw`$i = \sqrt{-1}$, de donde $i^{2} = -1$.

Permite resolver ecuaciones sin raíz real (como $x^{2}+1=0$) extendiendo los reales: $\mathbb{R} \subset \mathbb{C}$.`,
    },
    {
      id: "alg-u07-002", tipo: "concepto", dificultad: "facil",
      tags: ["forma-binomica", "parte-real-imaginaria"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`Escribí la forma binómica de un complejo e identificá $\mathrm{Re}(z)$ e $\mathrm{Im}(z)$.`,
      respuesta: String.raw`$$z = a + b\,i$$
con $a = \mathrm{Re}(z)$ (parte real) y $b = \mathrm{Im}(z)$ (parte imaginaria). Equivale al par ordenado $(a\,;\,b)$.`,
    },
    {
      id: "alg-u07-003", tipo: "completar", dificultad: "facil",
      tags: ["igualdad"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`Dos complejos $a+bi$ y $c+di$ son iguales si y solo si ____ y ____.`,
      respuesta: String.raw`$a = c$ **y** $b = d$: deben coincidir **ambas** componentes (la real y la imaginaria).`,
    },
    {
      id: "alg-u07-004", tipo: "concepto", dificultad: "facil",
      tags: ["real-puro", "imaginario-puro"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`¿Qué es un complejo **real puro** y uno **imaginario puro**?`,
      respuesta: String.raw`- **Real puro:** parte imaginaria $0$, p. ej. $3 + 0i = 3$.
- **Imaginario puro:** parte real $0$, p. ej. $0 + 4i = 4i$.`,
    },

    // ── Conjugado y opuesto ──────────────────────────────
    {
      id: "alg-u07-005", tipo: "concepto", dificultad: "media",
      tags: ["conjugado", "opuesto"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`¿En qué se diferencia el **conjugado** $\bar{z}$ del **opuesto** $-z$ de $z = a+bi$?`,
      respuesta: String.raw`- **Conjugado:** cambia **solo** el signo de la parte imaginaria $\;\Rightarrow\; \bar{z} = a - bi$.
- **Opuesto:** cambia el signo de **ambas** componentes $\;\Rightarrow\; -z = -a - bi$.

Error común: confundirlos. Geométricamente $\bar{z}$ refleja respecto del eje real; $-z$ rota $180^\circ$ (refleja respecto del origen).`,
    },
    {
      id: "alg-u07-006", tipo: "opcion-multiple", dificultad: "media",
      tags: ["conjugado", "caracterizacion"],
      fuente: "algebra/unidad-07-numeros-complejos/ejercicios/numeros-complejos.pdf",
      pregunta: String.raw`¿Qué tipo de complejo cumple la condición $z = -\bar{z}$?`,
      opciones: [
        String.raw`Real puro`,
        String.raw`Imaginario puro`,
        String.raw`De módulo $1$`,
        String.raw`Solo $z=0$`,
      ],
      correcta: 1,
      respuesta: String.raw`$z=-\bar{z}\Rightarrow a+bi = -(a-bi) = -a+bi \Rightarrow a=-a \Rightarrow a=0$. Parte real nula $\Rightarrow$ **imaginario puro**. (En cambio $z=\bar{z}\Leftrightarrow b=0\Rightarrow$ real puro.)`,
    },
    {
      id: "alg-u07-007", tipo: "texto", dificultad: "media",
      tags: ["plano-de-argand", "geometria"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`En el plano de Argand, ¿dónde caen $\bar{z}$ y $-z$ respecto de $z$?`,
      respuesta: String.raw`$z=a+bi$ es el punto/vector $(a\,;\,b)$ desde el origen.

- $\bar{z}$ = reflejo de $z$ respecto del **eje real** (cambia el signo de $b$).
- $-z$ = reflejo respecto del **origen** (rotación de $180^\circ$; cambian ambos signos).`,
    },

    // ── Operaciones en forma binómica ────────────────────
    {
      id: "alg-u07-008", tipo: "practica",
      tags: ["operaciones", "binomica"],
      fuente: ["algebra/unidad-07-numeros-complejos/ejercicios/numeros-complejos.pdf", "algebra/cheatsheets/unidad-07-numeros-complejos.html"],
      concepto: String.raw`Operar complejos en forma binómica. Sube por ejes (operación): suma → resta → producto ($i^{2}=-1$) → cociente (artificio del conjugado) → expresión combinada.`,
      variantes: [
        // N1 — suma (componente a componente)
        [
          { pregunta: String.raw`Calculá $(4-3i)+(2+i)$.`, respuesta: String.raw`Parte real con real, imaginaria con imaginaria:

$$(4-3i)+(2+i) = 6 - 2i$$`, pista: "Sumá partes reales entre sí e imaginarias entre sí." },
          { pregunta: String.raw`Calculá $(1+2i)+(3-5i)$.`, respuesta: String.raw`$$(1+2i)+(3-5i) = 4 - 3i$$` },
        ],
        // N2 — resta
        [
          { pregunta: String.raw`Calculá $(4-3i)-(5+2i)$.`, respuesta: String.raw`$$(4-3i)-(5+2i) = -1 - 5i$$` },
          { pregunta: String.raw`Calculá $(6+i)-(2+4i)$.`, respuesta: String.raw`$$(6+i)-(2+4i) = 4 - 3i$$` },
        ],
        // N3 — producto (reemplazar i²=-1)
        [
          { pregunta: String.raw`Multiplicá $(2+3i)(1-i)$.`, respuesta: String.raw`$$(2+3i)(1-i) = 2 - 2i + 3i - 3i^{2} = 2 + i + 3 = 5 + i$$

Clave: $-3i^{2} = +3$.` },
          { pregunta: String.raw`Multiplicá $(1+2i)(3-i)$.`, respuesta: String.raw`$$(1+2i)(3-i) = 3 - i + 6i - 2i^{2} = 3 + 5i + 2 = 5 + 5i$$` },
        ],
        // N4 — cociente (artificio del conjugado)
        [
          { pregunta: String.raw`Calculá $\dfrac{1-i}{2+3i}$ usando el conjugado.`, respuesta: String.raw`Multiplico arriba y abajo por el conjugado $2-3i$:

$$\frac{(1-i)(2-3i)}{2^{2}+3^{2}} = \frac{-1-5i}{13} = -\tfrac{1}{13} - \tfrac{5}{13}i$$` },
          { pregunta: String.raw`Calculá $\dfrac{2+i}{1-i}$ usando el conjugado.`, respuesta: String.raw`Por el conjugado $1+i$:

$$\frac{(2+i)(1+i)}{1^{2}+1^{2}} = \frac{1+3i}{2} = \tfrac{1}{2} + \tfrac{3}{2}i$$` },
        ],
        // N5 — expresión combinada
        [
          { pregunta: String.raw`Calculá $(2+i)^{2} - (1-i)$.`, respuesta: String.raw`$(2+i)^{2} = 4 + 4i + i^{2} = 3 + 4i$. Luego:

$$(3+4i) - (1-i) = 2 + 5i$$` },
          { pregunta: String.raw`Calculá $\dfrac{(1+i)(2-i)}{1-i}$.`, respuesta: String.raw`Numerador: $(1+i)(2-i) = 2 - i + 2i - i^{2} = 3 + i$. Luego por el conjugado $1+i$:

$$\frac{(3+i)(1+i)}{2} = \frac{2+4i}{2} = 1 + 2i$$` },
        ],
      ],
    },
    {
      id: "alg-u07-011", tipo: "concepto", dificultad: "media",
      tags: ["division", "conjugado"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`¿Por qué al dividir se multiplica por el **conjugado** del denominador?`,
      respuesta: String.raw`Porque $z\cdot\bar{z} = (c+di)(c-di) = c^{2}-d^{2}i^{2} = c^{2}+d^{2}$: una **diferencia de cuadrados** que da un real (y positivo).

Así el denominador queda real sin esfuerzo. Es "multiplicar por $1$ disfrazado".`,
    },
    {
      id: "alg-u07-012", tipo: "practica",
      tags: ["potencias-de-i", "ciclo"],
      fuente: ["algebra/unidad-07-numeros-complejos/ejercicios/numeros-complejos.pdf", "algebra/cheatsheets/unidad-07-numeros-complejos.html"],
      concepto: String.raw`Potencias de $i$ por el ciclo de período 4 ($i^{m}=i^{r}$, con $r=$ resto de $m\div4$). Sube por ejes: exponente directo → grande → combinación de potencias → con coeficientes.`,
      variantes: [
        // N1 — el ciclo, exponente chico
        [
          { pregunta: String.raw`Calculá $i^{3}$.`, respuesta: String.raw`$$i^{3} = -i$$`, pista: "Ciclo: $i^{0}=1,\ i^{1}=i,\ i^{2}=-1,\ i^{3}=-i$; usá el resto de dividir por 4." },
          { pregunta: String.raw`Calculá $i^{5}$.`, respuesta: String.raw`$5 \div 4$ deja resto $1$:

$$i^{5} = i^{1} = i$$` },
        ],
        // N2 — exponente grande (reducir mod 4)
        [
          { pregunta: String.raw`Calculá $i^{23}$.`, respuesta: String.raw`$23 \div 4$ deja resto $3$:

$$i^{23} = i^{3} = -i$$` },
          { pregunta: String.raw`Calculá $i^{18}$.`, respuesta: String.raw`$18 \div 4$ deja resto $2$:

$$i^{18} = i^{2} = -1$$` },
        ],
        // N3 — combinación de dos potencias
        [
          { pregunta: String.raw`Calculá $i^{18} - i^{35}$.`, respuesta: String.raw`$i^{18}=i^{2}=-1$ y $i^{35}=i^{3}=-i$:

$$i^{18} - i^{35} = -1 - (-i) = -1 + i$$` },
          { pregunta: String.raw`Calculá $i^{37}$.`, respuesta: String.raw`$37 \div 4$ deja resto $1$:

$$i^{37} = i^{1} = i$$` },
        ],
        // N4 — exponentes grandes / suma
        [
          { pregunta: String.raw`Calculá $i^{100}$.`, respuesta: String.raw`$100 \div 4$ deja resto $0$:

$$i^{100} = i^{0} = 1$$` },
          { pregunta: String.raw`Calculá $i^{50} + i^{75}$.`, respuesta: String.raw`$i^{50}=i^{2}=-1$ y $i^{75}=i^{3}=-i$:

$$i^{50} + i^{75} = -1 - i$$` },
        ],
        // N5 — con coeficientes / varias potencias
        [
          { pregunta: String.raw`Calculá $2\,i^{23} - 3\,i^{10}$.`, respuesta: String.raw`$i^{23}=-i$ y $i^{10}=i^{2}=-1$:

$$2(-i) - 3(-1) = 3 - 2i$$` },
          { pregunta: String.raw`Calculá $i^{4} + i^{9} + i^{14}$.`, respuesta: String.raw`$i^{4}=1$, $i^{9}=i$, $i^{14}=i^{2}=-1$:

$$1 + i - 1 = i$$` },
        ],
      ],
    },
    {
      id: "alg-u07-013", tipo: "completar", dificultad: "facil",
      tags: ["potencias-de-i", "ciclo"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`Completá el ciclo de potencias de $i$: $\;i^{0}=\_,\ i^{1}=\_,\ i^{2}=\_,\ i^{3}=\_$.`,
      respuesta: String.raw`$i^{0}=1,\quad i^{1}=i,\quad i^{2}=-1,\quad i^{3}=-i$ (y vuelve a empezar: $i^{4}=1$).`,
    },
    {
      id: "alg-u07-014", tipo: "ejercicio", dificultad: "media",
      tags: ["potenciacion-binomica"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`Desarrollá $(2-i)^{3}$ (exponente chico, en binómica).`,
      respuesta: String.raw`$(2-i)^{2} = 4 - 4i + i^{2} = 3 - 4i$. Luego:
$$(2-i)^{3} = (2-i)(3-4i) = 6 - 8i - 3i + 4i^{2} = 2 - 11i$$
Para exponentes grandes conviene pasar a polar (De Moivre).`,
    },

    // ── Propiedades ──────────────────────────────────────
    {
      id: "alg-u07-015", tipo: "texto", dificultad: "media",
      tags: ["conjugado", "propiedades"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`Enunciá las identidades de $z+\bar{z}$, $z-\bar{z}$ y $z\cdot\bar{z}$.`,
      respuesta: String.raw`- $z+\bar{z} = 2\,\mathrm{Re}(z)$ → **real**.
- $z-\bar{z} = 2\,\mathrm{Im}(z)\,i$ → **imaginario puro**.
- $z\cdot\bar{z} = a^{2}+b^{2} = |z|^{2}$ → **real y $\ge 0$**.

En el final estas propiedades hay que saberlas de memoria (solo se permiten las tablas de verdad).`,
    },
    {
      id: "alg-u07-016", tipo: "concepto", dificultad: "media",
      tags: ["inverso", "cuerpo"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`¿Cómo se obtiene el inverso multiplicativo $z^{-1}$ de un $z\neq 0$? ¿Qué estructura es $(\mathbb{C},+,\cdot)$?`,
      respuesta: String.raw`$$z^{-1} = \frac{\bar{z}}{z\cdot\bar{z}} = \frac{\bar{z}}{|z|^{2}}$$
Con neutro $1=1+0i$. Como $(\mathbb{C},+)$ y $(\mathbb{C},\cdot)$ son grupos conmutativos y vale la distributiva, $(\mathbb{C},+,\cdot)$ es un **cuerpo**.`,
    },
    {
      id: "alg-u07-017", tipo: "concepto", dificultad: "media",
      tags: ["modulo", "lugar-geometrico"],
      fuente: "algebra/unidad-07-numeros-complejos/ejercicios/numeros-complejos.pdf",
      pregunta: String.raw`¿Qué describe geométricamente la condición $z\cdot\bar{z}=1$?`,
      respuesta: String.raw`$z\cdot\bar{z}=a^{2}+b^{2}=1$, es decir $|z|=1$: la **circunferencia unitaria** (todos los complejos de módulo $1$).`,
    },

    // ── Ecuaciones y raíces conjugadas ───────────────────
    {
      id: "alg-u07-018", tipo: "ejercicio", dificultad: "dificil",
      tags: ["cuadratica", "discriminante", "raices-conjugadas"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`Resolvé $x^{2}-2x+4=0$ en $\mathbb{C}$.`,
      respuesta: String.raw`$\Delta = b^{2}-4ac = 4-16 = -12 < 0 \Rightarrow$ raíces complejas conjugadas.
$$x = \frac{2 \pm \sqrt{-12}}{2} = \frac{2 \pm 2\sqrt{3}\,i}{2} = 1 \pm \sqrt{3}\,i$$
Las raíces son $1+\sqrt{3}\,i$ y su conjugada $1-\sqrt{3}\,i$.`,
    },
    {
      id: "alg-u07-019", tipo: "ejercicio", dificultad: "dificil",
      tags: ["raices-conjugadas", "polinomio"],
      fuente: "algebra/cheatsheets/unidad-07-numeros-complejos.html",
      pregunta: String.raw`Si $z=2+3i$ es raíz de un polinomio real de grado $2$, hallá el polinomio.`,
      respuesta: String.raw`En un polinomio con coeficientes reales las raíces complejas vienen **de a pares conjugados**: $2+3i$ y $2-3i$.
$$P(x) = (x-(2+3i))(x-(2-3i)) = (x-2)^{2} - (3i)^{2} = (x-2)^{2}+9 = x^{2}-4x+13$$
Verificación: $\Delta = 16-52 = -36 < 0$ ✓.`,
    },
    {
      id: "alg-u07-020", tipo: "opcion-multiple", dificultad: "media",
      tags: ["potencias-de-i", "parcial"],
      fuente: "algebra/examenes/parcial-2-modelo-resuelto.html",
      pregunta: String.raw`En un ejercicio del parcial aparece $i^{37}$. ¿A qué equivale?`,
      opciones: [
        String.raw`$1$`,
        String.raw`$i$`,
        String.raw`$-1$`,
        String.raw`$-i$`,
      ],
      correcta: 1,
      respuesta: String.raw`$37 \div 4$ deja resto $1$, así que $i^{37}=i^{1}=i$. (El exponente grande se reduce con el ciclo de período $4$.)`,
    },

  ],
});
