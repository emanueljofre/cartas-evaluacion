/* Mazo — Álgebra · Unidad 08 · Números Complejos (forma polar)
   Parte 2 de "Números Complejos" (Unidad 6 del programa). Entra en el final.
   ⭐ Incluye RADICACIÓN (raíces n-ésimas): confirmada para el final (oral 2026-06-16).
   Campos de contenido: SIEMPRE String.raw`...` (LaTeX literal). */
FLASHCARDS.deck({
  materia: "algebra",
  unidad: "08-numeros-complejos-en-forma-polar",
  titulo: "Números Complejos (polar)",
  cards: [

    // ── Módulo ───────────────────────────────────────────
    {
      id: "alg-u08-001", tipo: "concepto", dificultad: "facil",
      tags: ["modulo"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`¿Cómo se calcula el módulo $|z|$ de $z=a+bi$ y qué representa?`,
      respuesta: String.raw`$$|z| = \rho = \sqrt{a^{2}+b^{2}}$$
Es la **longitud del vector** que representa a $z$ (distancia del origen al punto). Siempre real $\ge 0$. Conviene dejarlo como raíz exacta ($\sqrt{13}$), no en decimal.`,
    },
    {
      id: "alg-u08-002", tipo: "ejercicio", dificultad: "facil",
      tags: ["modulo"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Calculá $|3-2i|$, $|3+4i|$ y $|-2+2i|$.`,
      respuesta: String.raw`- $|3-2i| = \sqrt{9+4} = \sqrt{13}$
- $|3+4i| = \sqrt{9+16} = 5$ (terna pitagórica)
- $|-2+2i| = \sqrt{4+4} = \sqrt{8} = 2\sqrt{2}$`,
    },
    {
      id: "alg-u08-003", tipo: "texto", dificultad: "media",
      tags: ["modulo", "propiedades"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Enunciá las propiedades del módulo para producto, cociente, potencia y suma.`,
      respuesta: String.raw`- $|z_{1}\cdot z_{2}| = |z_{1}|\cdot|z_{2}|$
- $\left|\dfrac{z_{1}}{z_{2}}\right| = \dfrac{|z_{1}|}{|z_{2}|}$
- $|z^{n}| = |z|^{n}$
- $|z_{1}+z_{2}| \le |z_{1}|+|z_{2}|$ (desigualdad triangular)

Además $z\cdot\bar{z}=|z|^{2}$. Permiten hallar el módulo de un producto/cociente **sin operar** en binómica.`,
    },

    // ── Argumento ────────────────────────────────────────
    {
      id: "alg-u08-004", tipo: "concepto", dificultad: "media",
      tags: ["argumento"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`¿Qué es el argumento de $z$ y por qué hay que tener cuidado al calcularlo?`,
      respuesta: String.raw`Es el ángulo $\theta$ desde el semieje $+\mathrm{Re}$ hasta el vector, medido **antihorario**: $\tan\theta = \dfrac{b}{a}\Rightarrow\theta=\arctan\!\big(\tfrac{b}{a}\big)$.

⚠️ La calculadora **no distingue el cuadrante** (da el ángulo de referencia $\alpha$). Hay que **graficar primero** y corregir según el cuadrante.`,
    },
    {
      id: "alg-u08-005", tipo: "completar", dificultad: "dificil",
      tags: ["argumento", "cuadrantes"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Con $\alpha=\big|\arctan(b/a)\big|$, el argumento $\theta$ por cuadrante es: I $=\_$, II $=\_$, III $=\_$, IV $=\_$.`,
      respuesta: String.raw`- **I** ($a>0,b>0$): $\theta=\alpha$
- **II** ($a<0,b>0$): $\theta=180^\circ-\alpha$
- **III** ($a<0,b<0$): $\theta=180^\circ+\alpha$
- **IV** ($a>0,b<0$): $\theta=360^\circ-\alpha$`,
    },
    {
      id: "alg-u08-006", tipo: "concepto", dificultad: "media",
      tags: ["argumento", "multivalencia"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`¿Por qué el argumento no es único? ¿Qué es el argumento principal?`,
      respuesta: String.raw`Sumar una vuelta completa da el mismo vector: $\arg(z)=\theta+2k\pi$, $k\in\mathbb{Z}$.

El **argumento principal** es el que se toma en $[0,2\pi)$ — el que escribís en el examen.`,
    },
    {
      id: "alg-u08-007", tipo: "concepto", dificultad: "media",
      tags: ["igualdad", "polar"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`¿Cuándo son iguales dos complejos en forma polar $(\rho\,;\,\theta)$ y $(\rho'\,;\,\theta')$?`,
      respuesta: String.raw`Si y solo si $\rho=\rho'$ **y** $\theta=\theta'+2k\pi$. Que coincidan los módulos no alcanza: los ángulos deben coincidir **módulo $2\pi$**.`,
    },

    // ── Las tres formas y conversiones ───────────────────
    {
      id: "alg-u08-008", tipo: "concepto", dificultad: "facil",
      tags: ["formas"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Escribí las **tres formas** de un complejo: polar, trigonométrica y exponencial.`,
      respuesta: String.raw`- **Polar:** $z=(\rho\,;\,\theta)$
- **Trigonométrica:** $z=\rho\,(\cos\theta + i\,\operatorname{sen}\theta)$
- **Exponencial:** $z=\rho\,e^{i\theta}$ (fórmula de Euler)

Las tres son la misma información; $\rho=|z|$ y $\theta=\arg(z)$.`,
    },
    {
      id: "alg-u08-009", tipo: "practica",
      tags: ["conversion", "binomica-a-polar", "cuadrantes"],
      fuente: ["algebra/unidad-08-numeros-complejos-en-forma-polar/ejercicios/numeros-complejos-en-forma-polar.pdf", "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html"],
      concepto: String.raw`Pasar de binómica a polar ($\rho=\sqrt{a^{2}+b^{2}}$; $\theta$ corregido por cuadrante). Sube por ejes: el cuadrante (que la calculadora NO distingue): I → IV → II → III → módulo mayor.`,
      variantes: [
        // N1 — cuadrante I (θ = α directo)
        [
          { pregunta: String.raw`Pasá $z = 1+i$ a forma polar.`, respuesta: String.raw`$\rho=\sqrt{1+1}=\sqrt2$. Cuadrante I → $\theta=\arctan(1/1)=45^\circ=\tfrac{\pi}{4}$:

$$z=\big(\sqrt2\,;\,45^\circ\big)$$`, pista: "Graficá primero: la calculadora da el ángulo de referencia; vos lo corregís según el cuadrante." },
          { pregunta: String.raw`Pasá $z = \sqrt{3}+i$ a forma polar.`, respuesta: String.raw`$\rho=\sqrt{3+1}=2$. Cuadrante I → $\theta=\arctan(1/\sqrt3)=30^\circ=\tfrac{\pi}{6}$:

$$z=\big(2\,;\,30^\circ\big)$$` },
        ],
        // N2 — cuadrante IV (θ = 360° - α)
        [
          { pregunta: String.raw`Pasá $z = 1-i$ a forma polar.`, respuesta: String.raw`$\rho=\sqrt2$. Cuad. IV ($a>0,b<0$): $\alpha=45^\circ$, $\theta=360^\circ-45^\circ=315^\circ$:

$$z=\big(\sqrt2\,;\,315^\circ\big)$$` },
          { pregunta: String.raw`Pasá $z = \sqrt{3}-i$ a forma polar.`, respuesta: String.raw`$\rho=2$. Cuad. IV: $\alpha=30^\circ$, $\theta=360^\circ-30^\circ=330^\circ$:

$$z=\big(2\,;\,330^\circ\big)$$` },
        ],
        // N3 — cuadrante II (θ = 180° - α)
        [
          { pregunta: String.raw`Pasá $z = -1+i$ a forma polar.`, respuesta: String.raw`$\rho=\sqrt2$. Cuad. II ($a<0,b>0$): $\alpha=45^\circ$, $\theta=180^\circ-45^\circ=135^\circ$:

$$z=\big(\sqrt2\,;\,135^\circ\big)$$` },
          { pregunta: String.raw`Pasá $z = -2+2i$ a forma polar.`, respuesta: String.raw`$\rho=\sqrt{8}=2\sqrt2$. Cuad. II: $\alpha=45^\circ$, $\theta=180^\circ-45^\circ=135^\circ$:

$$z=\big(2\sqrt2\,;\,135^\circ\big)$$` },
        ],
        // N4 — cuadrante III (θ = 180° + α)
        [
          { pregunta: String.raw`Pasá $z = -1-i$ a forma polar.`, respuesta: String.raw`$\rho=\sqrt2$. Cuad. III ($a<0,b<0$): $\alpha=45^\circ$, $\theta=180^\circ+45^\circ=225^\circ$:

$$z=\big(\sqrt2\,;\,225^\circ\big)$$` },
          { pregunta: String.raw`Pasá $z = -\sqrt{3}-i$ a forma polar.`, respuesta: String.raw`$\rho=2$. Cuad. III: $\alpha=30^\circ$, $\theta=180^\circ+30^\circ=210^\circ$:

$$z=\big(2\,;\,210^\circ\big)$$` },
        ],
        // N5 — módulo mayor + cuadrante
        [
          { pregunta: String.raw`Pasá $z = -2+2\sqrt{3}\,i$ a forma polar.`, respuesta: String.raw`$\rho=\sqrt{4+12}=4$. Cuad. II: $\alpha=\arctan(2\sqrt3/2)=\arctan(\sqrt3)=60^\circ$, $\theta=180^\circ-60^\circ=120^\circ$:

$$z=\big(4\,;\,120^\circ\big)$$` },
          { pregunta: String.raw`Pasá $z = 2-2\sqrt{3}\,i$ a forma polar.`, respuesta: String.raw`$\rho=4$. Cuad. IV: $\alpha=60^\circ$, $\theta=360^\circ-60^\circ=300^\circ$:

$$z=\big(4\,;\,300^\circ\big)$$` },
        ],
      ],
    },
    {
      id: "alg-u08-011", tipo: "ejercicio", dificultad: "media",
      tags: ["conversion", "polar-a-binomica"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Recuperá la forma binómica de $\big(\sqrt{8}\,;\,\tfrac{3\pi}{4}\big)$.`,
      respuesta: String.raw`Con $a=\rho\cos\theta$ y $b=\rho\,\operatorname{sen}\theta$:
$$a=\sqrt{8}\cdot\big(-\tfrac{\sqrt2}{2}\big)=-2,\qquad b=\sqrt{8}\cdot\tfrac{\sqrt2}{2}=+2$$
$$z=-2+2i$$
Chequeo: $\cos<0$ y $\operatorname{sen}>0\Rightarrow$ cuadrante II ✓.`,
    },
    {
      id: "alg-u08-012", tipo: "completar", dificultad: "facil",
      tags: ["radianes", "angulos-notables"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Convertí a radianes: $30^\circ=\_$, $45^\circ=\_$, $60^\circ=\_$, $90^\circ=\_$.`,
      respuesta: String.raw`$30^\circ=\tfrac{\pi}{6}$, $\;45^\circ=\tfrac{\pi}{4}$, $\;60^\circ=\tfrac{\pi}{3}$, $\;90^\circ=\tfrac{\pi}{2}$.

Convertir como fracción: $\theta_{\text{rad}}=\tfrac{\theta_{\text{grados}}}{180}\,\pi$.`,
    },

    // ── Operaciones en polar ─────────────────────────────
    {
      id: "alg-u08-013", tipo: "concepto", dificultad: "media",
      tags: ["multiplicacion", "division", "polar"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`¿Cómo se multiplican y dividen dos complejos en forma polar?`,
      respuesta: String.raw`- **Producto:** módulos se **multiplican**, argumentos se **suman**: $\;z_{1}z_{2}=\big(\rho_{1}\rho_{2}\,;\,\theta_{1}+\theta_{2}\big)$.
- **Cociente:** módulos se **dividen**, argumentos se **restan**: $\;\dfrac{z_{1}}{z_{2}}=\Big(\tfrac{\rho_{1}}{\rho_{2}}\,;\,\theta_{1}-\theta_{2}\Big)$.

Geométricamente, multiplicar = **rotar y escalar** un vector.`,
    },
    {
      id: "alg-u08-014", tipo: "ejercicio", dificultad: "media",
      tags: ["multiplicacion", "polar"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Con $z_{1}=\big(2\,;\,\tfrac{\pi}{6}\big)$ y $z_{2}=\big(3\,;\,\tfrac{\pi}{4}\big)$, calculá $z_{1}\cdot z_{2}$.`,
      respuesta: String.raw`Módulo: $2\cdot 3=6$. Argumento: $\tfrac{\pi}{6}+\tfrac{\pi}{4}=\tfrac{2\pi}{12}+\tfrac{3\pi}{12}=\tfrac{5\pi}{12}$.
$$z_{1}\cdot z_{2}=\Big(6\,;\,\tfrac{5\pi}{12}\Big)$$`,
    },
    {
      id: "alg-u08-015", tipo: "concepto", dificultad: "facil",
      tags: ["de-moivre", "potenciacion"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Enunciá el teorema de **De Moivre** para $z^{n}$.`,
      respuesta: String.raw`$$z^{n}=\rho^{n}\big(\cos(n\theta)+i\,\operatorname{sen}(n\theta)\big)$$
Elevo el módulo a la $n$ y multiplico el argumento por $n$. Es el atajo para potencias con $n\ge 3$.`,
    },
    {
      id: "alg-u08-016", tipo: "practica",
      tags: ["de-moivre", "potenciacion"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      concepto: String.raw`Potenciación con De Moivre: $z^{n}=\rho^{n}\big(\cos n\theta + i\,\operatorname{sen} n\theta\big)$. Sube por ejes: exponente chico → mayor → base en otro cuadrante → cuando $n\theta$ supera $360°$ (restar vueltas).`,
      variantes: [
        // N1 — n=2, base simple
        [
          { pregunta: String.raw`Calculá $(1+i)^{2}$ con De Moivre.`, respuesta: String.raw`$\rho=\sqrt2,\ \theta=45^\circ$. $z^{2}=(\sqrt2)^{2}\big(\cos90^\circ+i\operatorname{sen}90^\circ\big)=2\,(0+i)$:

$$(1+i)^{2} = 2i$$`, pista: "Elevá el módulo a n y multiplicá el ángulo por n." },
          { pregunta: String.raw`Calculá $(1-i)^{2}$ con De Moivre.`, respuesta: String.raw`$\rho=\sqrt2,\ \theta=315^\circ$. $2\cdot315^\circ=630^\circ\to270^\circ$:

$$2\,(\cos270^\circ+i\operatorname{sen}270^\circ) = -2i$$` },
        ],
        // N2 — n=3
        [
          { pregunta: String.raw`Calculá $(\sqrt{3}+i)^{3}$ con De Moivre.`, respuesta: String.raw`$\rho=2,\ \theta=30^\circ$. $z^{3}=2^{3}\big(\cos90^\circ+i\operatorname{sen}90^\circ\big)=8\,(0+i)$:

$$(\sqrt3+i)^{3} = 8i$$` },
          { pregunta: String.raw`Calculá $(1+i)^{3}$ con De Moivre.`, respuesta: String.raw`$(\sqrt2)^{3}=2\sqrt2$; $3\cdot45^\circ=135^\circ$:

$$2\sqrt2\big(-\tfrac{\sqrt2}{2}+\tfrac{\sqrt2}{2}i\big) = -2 + 2i$$` },
        ],
        // N3 — base en otro cuadrante, hay que restar vuelta
        [
          { pregunta: String.raw`Calculá $(-1+\sqrt{3}\,i)^{4}$ con De Moivre.`, respuesta: String.raw`$\rho=2$; cuad. II → $\theta=120^\circ$. $4\cdot120^\circ=480^\circ$; resto $480^\circ-360^\circ=120^\circ$:

$$16\big(-\tfrac12+\tfrac{\sqrt3}{2}i\big) = -8 + 8\sqrt3\,i$$` },
          { pregunta: String.raw`Calculá $(\sqrt{3}-i)^{4}$ con De Moivre.`, respuesta: String.raw`$\rho=2$; cuad. IV → $\theta=330^\circ$. $4\cdot330^\circ=1320^\circ$; resto $1320^\circ-3\cdot360^\circ=240^\circ$:

$$16\big(-\tfrac12-\tfrac{\sqrt3}{2}i\big) = -8 - 8\sqrt3\,i$$` },
        ],
        // N4 — n=6
        [
          { pregunta: String.raw`Calculá $(1-i)^{6}$ con De Moivre.`, respuesta: String.raw`$\rho=\sqrt2,\ \theta=315^\circ$. $(\sqrt2)^{6}=8$; $6\cdot315^\circ=1890^\circ$, resto $1890^\circ-5\cdot360^\circ=90^\circ$:

$$8\,(\cos90^\circ+i\operatorname{sen}90^\circ) = 8i$$` },
          { pregunta: String.raw`Calculá $(1+i)^{6}$ con De Moivre.`, respuesta: String.raw`$(\sqrt2)^{6}=8$; $6\cdot45^\circ=270^\circ$:

$$8\,(\cos270^\circ+i\operatorname{sen}270^\circ) = -8i$$` },
        ],
        // N5 — n=5, base en cuadrante III
        [
          { pregunta: String.raw`Calculá $(-1-i)^{5}$ con De Moivre.`, respuesta: String.raw`$\rho=\sqrt2$; cuad. III → $\theta=225^\circ$. $(\sqrt2)^{5}=4\sqrt2$; $5\cdot225^\circ=1125^\circ$, resto $1125^\circ-3\cdot360^\circ=45^\circ$:

$$4\sqrt2\big(\tfrac{\sqrt2}{2}+\tfrac{\sqrt2}{2}i\big) = 4 + 4i$$` },
          { pregunta: String.raw`Calculá $(1+i)^{5}$ con De Moivre.`, respuesta: String.raw`$(\sqrt2)^{5}=4\sqrt2$; $5\cdot45^\circ=225^\circ$:

$$4\sqrt2\big(-\tfrac{\sqrt2}{2}-\tfrac{\sqrt2}{2}i\big) = -4 - 4i$$` },
        ],
      ],
    },
    {
      id: "alg-u08-017", tipo: "concepto", dificultad: "facil",
      tags: ["conjugado", "opuesto", "inverso", "polar"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Expresá $\bar{z}$, $-z$ y $z^{-1}$ en forma polar a partir de $z=(\rho\,;\,\theta)$.`,
      respuesta: String.raw`- **Conjugado:** $\bar{z}=(\rho\,;\,-\theta)$
- **Opuesto:** $-z=(\rho\,;\,\theta+\pi)$
- **Inverso** ($z\neq0$): $z^{-1}=\big(\tfrac{1}{\rho}\,;\,-\theta\big)$`,
    },
    {
      id: "alg-u08-018", tipo: "ejercicio", dificultad: "media",
      tags: ["exponencial", "euler"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Con $u=6\,e^{i\pi/4}$ y $v=3\,e^{i\pi/4}$, calculá $u\cdot v$ y $u/v$.`,
      respuesta: String.raw`Misma lógica que la trigonométrica, escritura más compacta:
$$u\cdot v=(6\cdot3)\,e^{i(\pi/4+\pi/4)}=18\,e^{i\pi/2}=18i$$
$$u/v=(6/3)\,e^{i(\pi/4-\pi/4)}=2\,e^{0}=2$$`,
    },
    {
      id: "alg-u08-019", tipo: "opcion-multiple", dificultad: "media",
      tags: ["estrategia", "cuando-polar"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`¿Para qué operación **no** conviene la forma polar (no hay fórmula directa)?`,
      opciones: [
        String.raw`Potenciación`,
        String.raw`Suma y resta`,
        String.raw`Producto y cociente`,
        String.raw`Radicación`,
      ],
      correcta: 1,
      respuesta: String.raw`Para **suma y resta** no hay fórmula en polar → conviene quedarse en binómica. Polar gana en producto, cociente, potencia y radicación (los ángulos se acumulan).`,
    },

    // ── ⭐ Radicación (raíces n-ésimas) — entra en el FINAL ──
    {
      id: "alg-u08-020", tipo: "concepto", dificultad: "media",
      tags: ["radicacion", "raices-n-esimas", "final"],
      fuente: ["algebra/cheatsheets/unidad-08-numeros-complejos-polar.html", "algebra/unidad-08-numeros-complejos-en-forma-polar/apuntes/numeros-complejos-en-forma-polar.pdf"],
      pregunta: String.raw`Escribí la fórmula de las **raíces n-ésimas** de $z=(\rho\,;\,\theta)$. ¿Cuántas hay?`,
      respuesta: String.raw`Hay **exactamente $n$ raíces distintas**:
$$w_{k}=\sqrt[n]{\rho}\left[\cos\!\left(\frac{\theta+2k\pi}{n}\right)+i\,\operatorname{sen}\!\left(\frac{\theta+2k\pi}{n}\right)\right]$$
con $k=0,1,2,\dots,n-1$. Todas tienen el **mismo módulo** $\sqrt[n]{\rho}$; el primer argumento es $\theta/n$ y cada siguiente suma $2\pi/n$.`,
    },
    {
      id: "alg-u08-021", tipo: "concepto", dificultad: "media",
      tags: ["radicacion", "poligono", "final"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Geométricamente, ¿cómo se ubican las $n$ raíces $n$-ésimas en el plano?`,
      respuesta: String.raw`Son los **vértices de un polígono regular de $n$ lados** inscripto en la circunferencia de radio $\sqrt[n]{\rho}$ (para $n\ge3$), equiespaciados $\tfrac{2\pi}{n}$ ($=\tfrac{360^\circ}{n}$).

En el final pueden pedir el **gráfico** del polígono (oral 2026-06-16).`,
    },
    {
      id: "alg-u08-022", tipo: "practica",
      tags: ["radicacion", "raices-n-esimas", "final"],
      fuente: ["algebra/unidad-08-numeros-complejos-en-forma-polar/apuntes/numeros-complejos-en-forma-polar.pdf", "algebra/unidad-08-numeros-complejos-en-forma-polar/ejercicios/numeros-complejos-en-forma-polar.pdf", "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html"],
      concepto: String.raw`Raíces n-ésimas: $n$ raíces de módulo $\sqrt[n]{\rho}$ y argumentos $\frac{\theta+360°k}{n}$ (equiespaciadas $360°/n$). Sube por ejes: $n$ (2→3→4) y base (unidad/real → compleja general).`,
      variantes: [
        // N1 — raíces cuadradas (n=2) de reales
        [
          { pregunta: String.raw`Hallá las raíces cuadradas de $1$ ($w^{2}=1$).`, respuesta: String.raw`$\rho=1,\ \theta=0$. Módulo $\sqrt{1}=1$; argumentos $\tfrac{0+360^\circ k}{2}=0^\circ,180^\circ$:

$$w_{0}=1,\quad w_{1}=-1$$`, pista: "n raíces equiespaciadas 360°/n, todas con módulo ⁿ√ρ." },
          { pregunta: String.raw`Hallá las raíces cuadradas de $4$ ($w^{2}=4$).`, respuesta: String.raw`Módulo $\sqrt{4}=2$; argumentos $0^\circ,180^\circ$:

$$w_{0}=2,\quad w_{1}=-2$$` },
        ],
        // N2 — raíces cúbicas (n=3) de la unidad / real
        [
          { pregunta: String.raw`Hallá las raíces cúbicas de la unidad ($w^{3}=1$).`, respuesta: String.raw`Módulo $\sqrt[3]{1}=1$; argumentos $\tfrac{360^\circ k}{3}=0^\circ,120^\circ,240^\circ$:

$$w_{0}=1,\quad w_{1}=-\tfrac12+\tfrac{\sqrt3}{2}i,\quad w_{2}=-\tfrac12-\tfrac{\sqrt3}{2}i$$

Triángulo equilátero (radio 1).` },
          { pregunta: String.raw`Hallá las raíces cúbicas de $-1$ ($w^{3}=-1$).`, respuesta: String.raw`$-1=(1\,;\,180^\circ)$. Módulo $1$; argumentos $\tfrac{180^\circ+360^\circ k}{3}=60^\circ,180^\circ,300^\circ$:

$$w_{0}=\tfrac12+\tfrac{\sqrt3}{2}i,\quad w_{1}=-1,\quad w_{2}=\tfrac12-\tfrac{\sqrt3}{2}i$$` },
        ],
        // N3 — raíces cuartas (n=4) de reales
        [
          { pregunta: String.raw`Hallá las raíces cuartas de $16$ ($w^{4}=16$).`, respuesta: String.raw`Módulo $\sqrt[4]{16}=2$; argumentos $0^\circ,90^\circ,180^\circ,270^\circ$:

$$2,\ 2i,\ -2,\ -2i$$

Un cuadrado inscripto en la circunferencia de radio $2$.` },
          { pregunta: String.raw`Hallá las raíces cuartas de la unidad ($w^{4}=1$).`, respuesta: String.raw`Módulo $1$; argumentos $0^\circ,90^\circ,180^\circ,270^\circ$:

$$1,\ i,\ -1,\ -i$$` },
        ],
        // N4 — n=3, base compleja general
        [
          { pregunta: String.raw`Hallá las raíces cúbicas de $1-i$.`, respuesta: String.raw`$\rho=\sqrt2$, cuad. IV → $\theta=315^\circ$. Módulo $\sqrt[3]{\sqrt2}=\sqrt[6]{2}$; argumentos $\tfrac{315^\circ+360^\circ k}{3}=105^\circ,225^\circ,345^\circ$:

$$w_{k}=\sqrt[6]{2}\,\angle\,105^\circ,\ 225^\circ,\ 345^\circ$$` },
          { pregunta: String.raw`Hallá las raíces cúbicas de $8i$.`, respuesta: String.raw`$8i=(8\,;\,90^\circ)$. Módulo $\sqrt[3]{8}=2$; argumentos $\tfrac{90^\circ+360^\circ k}{3}=30^\circ,150^\circ,270^\circ$:

$$w_{k}=2\,\angle\,30^\circ,\ 150^\circ,\ 270^\circ$$` },
        ],
        // N5 — n=4, base negativa / compleja
        [
          { pregunta: String.raw`Hallá las raíces cuartas de $-16$.`, respuesta: String.raw`$-16=(16\,;\,180^\circ)$. Módulo $\sqrt[4]{16}=2$; argumentos $\tfrac{180^\circ+360^\circ k}{4}=45^\circ,135^\circ,225^\circ,315^\circ$:

$$w_{k}=2\,\angle\,45^\circ,\ 135^\circ,\ 225^\circ,\ 315^\circ$$` },
          { pregunta: String.raw`Hallá las raíces cuartas de $-1$.`, respuesta: String.raw`$-1=(1\,;\,180^\circ)$. Módulo $1$; argumentos $45^\circ,135^\circ,225^\circ,315^\circ$:

$$w_{k}=1\,\angle\,45^\circ,\ 135^\circ,\ 225^\circ,\ 315^\circ$$` },
        ],
      ],
    },
    {
      id: "alg-u08-024", tipo: "opcion-multiple", dificultad: "media",
      tags: ["radicacion", "poligono", "final"],
      fuente: "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html",
      pregunta: String.raw`Las **raíces cuartas de $16$**, ¿qué módulo tienen y qué figura forman?`,
      opciones: [
        String.raw`Módulo $2$ → un cuadrado`,
        String.raw`Módulo $4$ → un cuadrado`,
        String.raw`Módulo $2$ → un triángulo`,
        String.raw`Módulo $16$ → una circunferencia`,
      ],
      correcta: 0,
      respuesta: String.raw`$\rho=16,\ \theta=0$. Módulo de las raíces: $\sqrt[4]{16}=2$. Ángulos $0^\circ,90^\circ,180^\circ,270^\circ\Rightarrow 2,\,2i,\,-2,\,-2i$: un **cuadrado** inscripto en la circunferencia de radio $2$.`,
    },

    // ── Parcial / integrador ─────────────────────────────
    {
      id: "alg-u08-025", tipo: "opcion-multiple", dificultad: "media",
      tags: ["modulo", "parcial"],
      fuente: ["algebra/examenes/parcial-2-modelo-resuelto.html", "algebra/cheatsheets/unidad-08-numeros-complejos-polar.html"],
      pregunta: String.raw`¿Cuánto vale $\left|\dfrac{(3+4i)(1+i)}{3-4i}\right|$ (sin operar en binómica)?`,
      opciones: [
        String.raw`$\sqrt{2}$`,
        String.raw`$5$`,
        String.raw`$5\sqrt{2}$`,
        String.raw`$1$`,
      ],
      correcta: 0,
      respuesta: String.raw`Por propiedades del módulo: $\dfrac{|3+4i|\cdot|1+i|}{|3-4i|}=\dfrac{5\cdot\sqrt2}{5}=\sqrt{2}$. No hace falta hacer la cuenta binómica.`,
    },

  ],
});
