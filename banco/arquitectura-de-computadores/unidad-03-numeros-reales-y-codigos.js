/* Mazo — Arquitectura de Computadores · Unidad 03 · Números Reales y Códigos
   Fuentes: resumen.md (reencuadrado al final) + cheatsheet + parcial-2026-1.md + preguntas-anunciadas + apunte.
   Campos de contenido SIEMPRE en String.raw. Alcance: FINAL (entra todo el apunte: cálculos, códigos y unidades).
   Complementa el mazo de la U02 (sistemas numéricos): acá van reales/punto flotante, coma fija, códigos y unidades;
   no se repiten 193→C1 ni −199 (ya están en U02).
   Bloques del sistema «Manual»: `> [!prof|trampa|vale|exam|nota|fx] tag`.
   Nada de emoji como identificador de bloque (ver card-schema.md § Bloques). */
FLASHCARDS.deck({
  materia: "arquitectura-de-computadores",
  unidad: "03-numeros-reales-y-codigos",
  titulo: "Números Reales y Códigos",
  cards: [

    /* ── IEEE 754 punto flotante: formato ──────────────────────── */
    {
      id: "arq-u03-001",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["ieee754", "formato", "clave"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md", "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf"],
      pregunta: String.raw`¿Qué es el formato **IEEE 754 de precisión simple** y cuáles son sus tres campos?`,
      respuesta: String.raw`Formato estándar de **32 bits** para representar reales en notación científica binaria normalizada. Tres campos:
- **signo** $b_{31}$ (1 bit): $0=+$, $1=-$
- **exponente** $b_{30}$–$b_{23}$ (8 bits) en **exceso/sesgo 127**
- **mantisa** $b_{22}$–$b_{0}$ (23 bits): la fracción después del "$1{,}$" implícito`,
    },
    {
      id: "arq-u03-002",
      tipo: "concepto",
      dificultad: "media",
      tags: ["ieee754", "mantisa", "bit-implicito"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md",
      pregunta: String.raw`¿Por qué la mantisa de IEEE 754 "gana" un bit de precisión?`,
      respuesta: String.raw`Tras normalizar a $1{,}xxxx \times 2^{e}$, el "$1{,}$" **siempre es 1** en binario → es **implícito** y no se guarda. Se almacenan solo los 23 bits de la fracción, pero la precisión efectiva es de **24 bits**.`,
    },
    {
      id: "arq-u03-003",
      tipo: "completar",
      dificultad: "facil",
      tags: ["ieee754", "sesgo", "exceso"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md", "arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md"],
      pregunta: String.raw`En IEEE 754 precisión simple el sesgo (exceso) vale ____ y el exponente almacenado se calcula como ____.`,
      respuesta: String.raw`Sesgo $= 2^{n-1}-1 = 2^{8-1}-1 = 127$.

Exponente almacenado $=$ exponente real $+\ 127$. **Siempre 127**, sin importar hacia dónde se corre la coma.`,
      pista: String.raw`n = 8 bits de exponente.`,
    },
    {
      id: "arq-u03-004",
      tipo: "concepto",
      dificultad: "media",
      tags: ["ieee754", "signo", "trampa", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md", "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md"],
      pregunta: String.raw`¿Cómo se determina el signo de un negativo en IEEE 754 y por qué **no** se usa complemento a 2?`,
      respuesta: String.raw`El signo es **solo el bit** $b_{31}=1$. El número está en **otro formato** (punto flotante), así que la mantisa **no** se complementa ni se usa Ca2.

> [!trampa]
> Mezclar Ca2 con punto flotante es el error que el profe corrige ("si es negativo usar complemento a 2, pero acá no se usa").`,
    },
    {
      id: "arq-u03-005",
      tipo: "practica",
      tags: ["ieee754", "conversion", "worked"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf", "arquitectura-de-computadores/examenes/parcial-2026-1.md", "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md"],
      concepto: String.raw`Codificar un decimal en IEEE-754 simple (32 bits): normalizar a $1{,}m\times2^{e}$, signo $b_{31}$, exponente $e+127$, mantisa de 23 bits, agrupar de a 4 → hexa. Sube por ejes: positivo → negativo → fracción periódica (redondeo) → potencia de 2.`,
      variantes: [
        // N1 — positivo, fracción terminante simple
        [
          { pregunta: String.raw`Pasá $+1{,}5_{10}$ a IEEE-754 simple.`, respuesta: String.raw`$1{,}5 = 1{,}1_{2}\times2^{0}$. Signo $0$; exp $0+127 = 127 = 01111111$; mantisa $1000\dots$:

$$+1{,}5 = \text{3FC00000}_{16}$$`, pista: "Normalizá a 1,m·2^e; el exponente almacenado es e+127." },
          { pregunta: String.raw`Pasá $+2{,}5_{10}$ a IEEE-754 simple.`, respuesta: String.raw`$2{,}5 = 1{,}01_{2}\times2^{1}$. Signo $0$; exp $1+127 = 128 = 10000000$; mantisa $0100\dots$:

$$+2{,}5 = \text{40200000}_{16}$$` },
        ],
        // N2 — negativo, fracción terminante chica
        [
          { pregunta: String.raw`Pasá $-2{,}5_{10}$ a IEEE-754 simple.`, respuesta: String.raw`Igual que $+2{,}5$ pero con signo $1$:

$$-2{,}5 = \text{C0200000}_{16}$$` },
          { pregunta: String.raw`Pasá $-6{,}625_{10}$ a IEEE-754 simple.`, respuesta: String.raw`$6{,}625 = 110{,}101_{2} = 1{,}10101_{2}\times2^{2}$. Signo $1$; exp $2+127 = 129 = 10000001$; mantisa $10101000\dots$:

$$-6{,}625 = \text{C0D40000}_{16}$$` },
        ],
        // N3 — negativo grande, terminante (canónico del apunte)
        [
          { pregunta: String.raw`Pasá $-235{,}69140625_{10}$ a IEEE-754 simple (ejemplo canónico del apunte).`, respuesta: String.raw`1. $235 = 11101011_{2}$, $0{,}69140625 = 0{,}10110001_{2}$ → $11101011{,}10110001$
2. Normalizar: $1{,}110101110110001_{2}\times2^{7}$
3. Signo $1$; exp $7+127 = 134 = 10000110$
4. Mantisa (23 bits): $11010111011000100000000$
5. Ensamblar y agrupar de a 4:

$$-235{,}69140625 = \text{C36BB100}_{16}$$` },
          { pregunta: String.raw`Pasá $-123_{10}$ a IEEE-754 simple.`, respuesta: String.raw`$123 = 1111011_{2} = 1{,}111011_{2}\times2^{6}$. Signo $1$; exp $6+127 = 133 = 10000101$; mantisa $11101100\dots$:

$$-123 = \text{C2F60000}_{16}$$` },
        ],
        // N4 — fracción PERIÓDICA → redondeo (parcial A1)
        [
          { pregunta: String.raw`Pasá $-19{,}3_{10}$ a IEEE-754 simple (ejercicio A1 del parcial).`, respuesta: String.raw`1. $19 = 10011_{2}$; $0{,}3 = 0{,}0100110011\dots$ (**periódico**)
2. Normalizar: $1{,}0011010011\dots_{2}\times2^{4}$
3. Signo $1$; exp $4+127 = 131 = 10000011$
4. Mantisa a 23 bits (se **redondea**): $00110100110011001100110$

$$-19{,}3 \approx \text{C19A6666}_{16}$$

> [!trampa]
> No se usa Ca2 por ser negativo: el signo es solo $b_{31}$.` },
          { pregunta: String.raw`Pasá $+0{,}1_{10}$ a IEEE-754 simple.`, respuesta: String.raw`$0{,}1$ es **periódico** en binario: $1{,}10011001\dots_{2}\times2^{-4}$. Signo $0$; exp $-4+127 = 123 = 01111011$; mantisa redondeada:

$$+0{,}1 \approx \text{3DCCCCCD}_{16}$$` },
        ],
        // N5 — potencias de 2 (exactas, caso borde)
        [
          { pregunta: String.raw`Pasá $+0{,}5_{10}$ a IEEE-754 simple.`, respuesta: String.raw`$0{,}5 = 1{,}0_{2}\times2^{-1}$. Signo $0$; exp $-1+127 = 126 = 01111110$; mantisa toda en $0$:

$$+0{,}5 = \text{3F000000}_{16}$$` },
          { pregunta: String.raw`Pasá $+1{,}0_{10}$ a IEEE-754 simple.`, respuesta: String.raw`$1{,}0 = 1{,}0_{2}\times2^{0}$. Signo $0$; exp $0+127 = 127 = 01111111$; mantisa $0$:

$$+1{,}0 = \text{3F800000}_{16}$$` },
        ],
      ],
    },

    /* ── IEEE 754: decodificación (camino inverso) ─────────────── */
    {
      id: "arq-u03-007",
      tipo: "texto",
      dificultad: "media",
      tags: ["ieee754", "decodificacion", "procedimiento"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md", "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf"],
      pregunta: String.raw`¿Cuáles son los pasos para **decodificar** un IEEE 754 (hexa → decimal)?`,
      respuesta: String.raw`1. Hexa → binario (cada dígito = 4 bits) y armar los 32 bits.
2. Separar campos: $b_{31}$ signo · $b_{30}$–$b_{23}$ exponente · $b_{22}$–$b_{0}$ mantisa.
3. Exponente real $=$ almacenado $-\ 127$ (quitar el sesgo).
4. Reponer el "$1{,}$" implícito delante de la mantisa.
5. Aplicar el signo y **desnormalizar** (correr la coma según el exponente).
6. Sumar los pesos de los "1" → decimal.`,
    },
    {
      id: "arq-u03-008",
      tipo: "practica",
      tags: ["ieee754", "decodificacion", "worked"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf", "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md"],
      concepto: String.raw`Decodificar IEEE-754 simple (hexa → decimal): separar signo/exponente/mantisa, exponente real $=$ almacenado $-127$, reponer el $1{,}$ implícito y desnormalizar. Sube por ejes: potencia entera → con mantisa → negativo → exponente negativo → fracción rica.`,
      variantes: [
        // N1 — potencias enteras, mantisa 0
        [
          { pregunta: String.raw`Decodificá $\text{3F800000}_{16}$ (IEEE-754) a decimal.`, respuesta: String.raw`$0\ |\ 01111111\ |\ 0\dots$ → exp $127-127 = 0$, mantisa $0$:

$$1{,}0_{2}\times2^{0} = +1_{10}$$`, pista: "Exponente real = almacenado − 127; anteponé el 1, implícito." },
          { pregunta: String.raw`Decodificá $\text{40000000}_{16}$ (IEEE-754) a decimal.`, respuesta: String.raw`$0\ |\ 10000000\ |\ 0\dots$ → exp $128-127 = 1$:

$$1{,}0_{2}\times2^{1} = +2_{10}$$` },
        ],
        // N2 — aparece mantisa
        [
          { pregunta: String.raw`Decodificá $\text{3FC00000}_{16}$ (IEEE-754) a decimal.`, respuesta: String.raw`$0\ |\ 01111111\ |\ 1000\dots$ → exp $0$, mantisa $1$:

$$1{,}1_{2}\times2^{0} = +1{,}5_{10}$$` },
          { pregunta: String.raw`Decodificá $\text{C0A00000}_{16}$ (IEEE-754) a decimal.`, respuesta: String.raw`$1\ |\ 10000001\ |\ 0100\dots$ → signo $-$, exp $129-127 = 2$:

$$1{,}01_{2}\times2^{2} = 101_{2} = -5_{10}$$` },
        ],
        // N3 — enteros negativos (exponente mayor)
        [
          { pregunta: String.raw`Decodificá $\text{42F60000}_{16}$ (IEEE-754) a decimal.`, respuesta: String.raw`$0\ |\ 10000101\ |\ 1110110\dots$ → exp $133-127 = 6$:

$$1{,}1110110_{2}\times2^{6} = 1111011_{2} = +123_{10}$$` },
          { pregunta: String.raw`Decodificá $\text{C2F60000}_{16}$ (IEEE-754) a decimal.`, respuesta: String.raw`Igual que el anterior pero signo $1$:

$$-123_{10}$$` },
        ],
        // N4 — exponente NEGATIVO (número < 1)
        [
          { pregunta: String.raw`Decodificá $\text{3F000000}_{16}$ (IEEE-754) a decimal.`, respuesta: String.raw`$0\ |\ 01111110\ |\ 0\dots$ → exp $126-127 = -1$:

$$1{,}0_{2}\times2^{-1} = +0{,}5_{10}$$` },
          { pregunta: String.raw`Decodificá $\text{BF000000}_{16}$ (IEEE-754) a decimal.`, respuesta: String.raw`Igual pero signo $1$:

$$-0{,}5_{10}$$` },
        ],
        // N5 — exponente negativo + mantisa rica (ejemplo del apunte)
        [
          { pregunta: String.raw`Decodificá $\text{3EBC4000}_{16}$ (IEEE-754) a decimal.`, respuesta: String.raw`1. Bin: $0011\ 1110\ 1011\ 1100\ 0100\ 0000\dots$
2. Signo $0$ → $+$; exp $01111101 = 125-127 = -2$
3. Reponer el 1 implícito: $1{,}0111100010_{2}\times2^{-2}$
4. Desnormalizar: $0{,}010111100010_{2}$

$$= +0{,}36767578125_{10}$$` },
          { pregunta: String.raw`Decodificá $\text{C0D40000}_{16}$ (IEEE-754) a decimal.`, respuesta: String.raw`$1\ |\ 10000001\ |\ 1010100\dots$ → signo $-$, exp $2$:

$$1{,}10101_{2}\times2^{2} = 110{,}101_{2} = -6{,}625_{10}$$` },
        ],
      ],
    },
    {
      id: "arq-u03-009",
      tipo: "concepto",
      dificultad: "media",
      tags: ["ieee754", "decodificacion", "tip"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md",
      pregunta: String.raw`Al decodificar un hexa a decimal por IEEE 754, ¿qué hay que **aclarar siempre**?`,
      respuesta: String.raw`Que el número hexadecimal **es la representación de un binario de punto flotante IEEE 754**. La igualdad hexa $\leftrightarrow$ decimal solo vale bajo ese supuesto.`,
    },

    /* ── Coma fija / punto fijo ────────────────────────────────── */
    {
      id: "arq-u03-010",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["coma-fija", "pesos"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md",
      pregunta: String.raw`En coma fija binaria, ¿cuáles son los pesos a la **derecha** de la coma?`,
      respuesta: String.raw`$$2^{-1},\ 2^{-2},\ 2^{-3},\ \dots = \tfrac{1}{2},\ \tfrac{1}{4},\ \tfrac{1}{8},\ \dots$$

A la izquierda de la coma siguen siendo $2^{0}, 2^{1}, 2^{2}, \dots$`,
    },
    {
      id: "arq-u03-011",
      tipo: "practica",
      tags: ["coma-fija", "binario-decimal"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf",
      concepto: String.raw`Binario con coma → decimal (suma de pesos; a la derecha de la coma valen $2^{-1},2^{-2},\dots$). Sube por ejes: fracción corta → con parte entera → fracción más larga.`,
      variantes: [
        // N1 — solo fracción corta
        [
          { pregunta: String.raw`Pasá $0{,}1_{2}$ a decimal.`, respuesta: String.raw`$$0{,}1_{2} = 1{\cdot}2^{-1} = 0{,}5_{10}$$`, pista: "Primer bit tras la coma vale 0,5; después 0,25; 0,125; …" },
          { pregunta: String.raw`Pasá $0{,}01_{2}$ a decimal.`, respuesta: String.raw`$$0{,}01_{2} = 1{\cdot}2^{-2} = 0{,}25_{10}$$` },
        ],
        // N2 — fracción media
        [
          { pregunta: String.raw`Pasá $0{,}101_{2}$ a decimal.`, respuesta: String.raw`$$0{,}101_{2} = 0{,}5 + 0{,}125 = 0{,}625_{10}$$` },
          { pregunta: String.raw`Pasá $0{,}11_{2}$ a decimal.`, respuesta: String.raw`$$0{,}11_{2} = 0{,}5 + 0{,}25 = 0{,}75_{10}$$` },
        ],
        // N3 — aparece la parte entera (composición)
        [
          { pregunta: String.raw`Pasá $11{,}101_{2}$ a decimal.`, respuesta: String.raw`$$11{,}101_{2} = 2 + 1 + 0{,}5 + 0{,}125 = 3{,}625_{10}$$` },
          { pregunta: String.raw`Pasá $101{,}011_{2}$ a decimal.`, respuesta: String.raw`$$101{,}011_{2} = 4 + 1 + 0{,}25 + 0{,}125 = 5{,}375_{10}$$` },
        ],
        // N4 — entera + fracción más larga
        [
          { pregunta: String.raw`Pasá $110{,}101_{2}$ a decimal.`, respuesta: String.raw`$$110{,}101_{2} = 4 + 2 + 0{,}5 + 0{,}125 = 6{,}625_{10}$$` },
          { pregunta: String.raw`Pasá $1010{,}1101_{2}$ a decimal.`, respuesta: String.raw`$$1010{,}1101_{2} = 8 + 2 + 0{,}5 + 0{,}25 + 0{,}0625 = 10{,}8125_{10}$$` },
        ],
        // N5 — fracción larga (6 bits)
        [
          { pregunta: String.raw`Pasá $0{,}110101_{2}$ a decimal.`, respuesta: String.raw`$$0{,}110101_{2} = 0{,}5 + 0{,}25 + 0{,}0625 + 0{,}015625 = 0{,}828125_{10}$$` },
          { pregunta: String.raw`Pasá $11{,}0011_{2}$ a decimal.`, respuesta: String.raw`$$11{,}0011_{2} = 2 + 1 + 0{,}125 + 0{,}0625 = 3{,}1875_{10}$$` },
        ],
      ],
    },
    {
      id: "arq-u03-012",
      tipo: "practica",
      tags: ["coma-fija", "fraccion", "multiplicacion"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf", "arquitectura-de-computadores/cheatsheets/unidad-03-numeros-reales-y-codigos.html"],
      concepto: String.raw`Decimal con coma → binario (la fracción se convierte con **multiplicaciones ×2**, leyendo la parte entera). Sube por ejes: fracción corta → larga → parte entera + fracción → fracción **periódica** que obliga a redondear.`,
      variantes: [
        // N1 — fracción corta terminante
        [
          { pregunta: String.raw`Convertí $0{,}5$ a binario.`, respuesta: String.raw`$0{,}5\times 2 = 1{,}0 \to 1$ (fin):

$$0{,}5_{10} = 0{,}1_{2}$$`, pista: "Multiplicá ×2 y anotá la parte entera (0 o 1), de arriba hacia abajo." },
          { pregunta: String.raw`Convertí $0{,}25$ a binario.`, respuesta: String.raw`$0{,}25\times 2 = 0{,}5 \to 0$; $0{,}5\times 2 = 1{,}0 \to 1$:

$$0{,}25_{10} = 0{,}01_{2}$$` },
        ],
        // N2 — fracción media
        [
          { pregunta: String.raw`Convertí $0{,}625$ a binario.`, respuesta: String.raw`$0{,}625\times2=1{,}25\to1$; $0{,}25\times2=0{,}5\to0$; $0{,}5\times2=1{,}0\to1$:

$$0{,}625_{10} = 0{,}101_{2}$$` },
          { pregunta: String.raw`Convertí $0{,}75$ a binario.`, respuesta: String.raw`$0{,}75\times2=1{,}5\to1$; $0{,}5\times2=1{,}0\to1$:

$$0{,}75_{10} = 0{,}11_{2}$$` },
        ],
        // N3 — fracción larga (6 pasos)
        [
          { pregunta: String.raw`Convertí $0{,}828125$ a binario.`, respuesta: String.raw`$0{,}828125\times2=1{,}65625\to1$; $\to1$; $\to0$; $\to1$; $\to0$; $\to1$:

$$0{,}828125_{10} = 0{,}110101_{2}$$` },
          { pregunta: String.raw`Convertí $0{,}40625$ a binario.`, respuesta: String.raw`$0{,}40625\times2=0{,}8125\to0$; $\to1$; $\to1$; $\to0$; $\to1$:

$$0{,}40625_{10} = 0{,}01101_{2}$$` },
        ],
        // N4 — parte entera + fracción (composición)
        [
          { pregunta: String.raw`Convertí $4{,}828125$ a binario.`, respuesta: String.raw`Entera: $4 = 100_{2}$. Fracción: $0{,}828125 = 0{,}110101_{2}$ (×2 sucesivas):

$$4{,}828125_{10} = 100{,}110101_{2}$$` },
          { pregunta: String.raw`Convertí $6{,}625$ a binario.`, respuesta: String.raw`Entera: $6 = 110_{2}$. Fracción: $0{,}625 = 0{,}101_{2}$:

$$6{,}625_{10} = 110{,}101_{2}$$` },
        ],
        // N5 — fracción PERIÓDICA → hay que redondear/truncar
        [
          { pregunta: String.raw`Convertí $0{,}2$ a binario.`, respuesta: String.raw`$0{,}2\times2=0{,}4\to0$; $0{,}4\times2=0{,}8\to0$; $0{,}8\times2=1{,}6\to1$; $0{,}6\times2=1{,}2\to1$; $0{,}2\times2=\dots$ (**se repite**):

$$0{,}2_{10} = 0{,}\overline{0011}\dots_{2}\ (\text{periódico})$$

> [!trampa]
> No es finito: en IEEE-754 se **trunca/redondea** la mantisa (de ahí el error de redondeo).` },
          { pregunta: String.raw`Convertí $0{,}1$ a binario.`, respuesta: String.raw`$0{,}1\times2=0{,}2\to0$; luego entra en el mismo ciclo que $0{,}2$:

$$0{,}1_{10} = 0{,}0\overline{0011}\dots_{2}\ (\text{periódico})$$

Tampoco tiene binario finito → se redondea.` },
        ],
      ],
    },
    {
      id: "arq-u03-013",
      tipo: "concepto",
      dificultad: "media",
      tags: ["coma-fija", "periodico"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md",
      pregunta: String.raw`¿Por qué $0{,}2_{10}$ no tiene representación binaria finita?`,
      respuesta: String.raw`Al multiplicar por 2 sucesivamente nunca se llega a 0: el resto se repite.

$$0{,}2_{10} = 0{,}0011\,0011\,\overline{0011}\dots_{2}\ (\text{periódico})$$

**No todo decimal exacto tiene binario finito** — por eso aparecen errores de redondeo en la mantisa.`,
    },
    {
      id: "arq-u03-014",
      tipo: "practica",
      tags: ["complemento-2", "punto-fijo", "signo"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf", "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md"],
      concepto: String.raw`Ca2 en punto fijo (con coma): convertir el positivo con bit de signo 0, invertir, sumar 1 en el LSB. Sube por ejes: fracción corta → más larga → mayor magnitud.`,
      variantes: [
        // N1 — magnitud chica, 1 bit fraccionario
        [
          { pregunta: String.raw`Representá $-1{,}5_{10}$ en Ca2 (punto fijo).`, respuesta: String.raw`$+1{,}5 = 01{,}1$ → invertir $10{,}0$ → $+1$ en el LSB:

$$-1{,}5_{10} = 10{,}1_{2}$$`, pista: "El +1 va al último bit, sin importar dónde esté la coma." },
          { pregunta: String.raw`Representá $-2{,}5_{10}$ en Ca2 (punto fijo).`, respuesta: String.raw`$+2{,}5 = 010{,}1$ → invertir $101{,}0$ → $+1$:

$$-2{,}5_{10} = 101{,}1_{2}$$` },
        ],
        // N2 — 2 bits fraccionarios
        [
          { pregunta: String.raw`Representá $-3{,}25_{10}$ en Ca2 (punto fijo).`, respuesta: String.raw`$+3{,}25 = 011{,}01$ → invertir $100{,}10$ → $+1$:

$$-3{,}25_{10} = 100{,}11_{2}$$` },
          { pregunta: String.raw`Representá $-5{,}5_{10}$ en Ca2 (punto fijo).`, respuesta: String.raw`$+5{,}5 = 0101{,}1$ → invertir $1010{,}0$ → $+1$:

$$-5{,}5_{10} = 1010{,}1_{2}$$` },
        ],
        // N3 — 3 bits fraccionarios
        [
          { pregunta: String.raw`Representá $-6{,}625_{10}$ en Ca2 (punto fijo).`, respuesta: String.raw`$+6{,}625 = 0110{,}101$ → invertir $1001{,}010$ → $+1$ en el LSB:

$$-6{,}625_{10} = 1001{,}011_{2}$$

MSB $=1$ → negativo ✓.` },
          { pregunta: String.raw`Representá $-7{,}75_{10}$ en Ca2 (punto fijo).`, respuesta: String.raw`$+7{,}75 = 0111{,}11$ → invertir $1000{,}00$ → $+1$:

$$-7{,}75_{10} = 1000{,}01_{2}$$` },
        ],
        // N4 — mayor magnitud
        [
          { pregunta: String.raw`Representá $-9{,}375_{10}$ en Ca2 (punto fijo).`, respuesta: String.raw`$+9{,}375 = 01001{,}011$ → invertir $10110{,}100$ → $+1$:

$$-9{,}375_{10} = 10110{,}101_{2}$$` },
          { pregunta: String.raw`Representá $-10{,}75_{10}$ en Ca2 (punto fijo).`, respuesta: String.raw`$+10{,}75 = 01010{,}11$ → invertir $10101{,}00$ → $+1$:

$$-10{,}75_{10} = 10101{,}01_{2}$$` },
        ],
        // N5 — magnitud grande + más bits
        [
          { pregunta: String.raw`Representá $-12{,}625_{10}$ en Ca2 (punto fijo).`, respuesta: String.raw`$+12{,}625 = 01100{,}101$ → invertir $10011{,}010$ → $+1$:

$$-12{,}625_{10} = 10011{,}011_{2}$$` },
          { pregunta: String.raw`Representá $-18{,}5_{10}$ en Ca2 (punto fijo).`, respuesta: String.raw`$+18{,}5 = 010010{,}1$ → invertir $101101{,}0$ → $+1$:

$$-18{,}5_{10} = 101101{,}1_{2}$$` },
        ],
      ],
    },

    /* ── Notación científica y normalización ───────────────────── */
    {
      id: "arq-u03-015",
      tipo: "concepto",
      dificultad: "media",
      tags: ["normalizacion", "ieee754"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md",
      pregunta: String.raw`¿Qué condición cumple la mantisa **normalizada** en IEEE 754 y cómo se obtiene el exponente?`,
      respuesta: String.raw`Se normaliza a $1 \le m < 2$ (la coma queda **después del primer 1**).

El exponente es la **cantidad de lugares que corrés la coma** hasta ese primer 1: positivo si la corrés a la izquierda, negativo si la corrés a la derecha.`,
    },
    {
      id: "arq-u03-016",
      tipo: "completar",
      dificultad: "media",
      tags: ["normalizacion", "ieee754"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf",
      pregunta: String.raw`$+1011{,}1_{2} = +11{,}5_{10}$. Normalizado a la forma IEEE 754 ($1\le m<2$) queda ____.`,
      respuesta: String.raw`$$+1{,}0111_{2}\times 2^{3}$$

(En la forma clásica $0{,}1\le f<1$ sería $+0{,}10111_{2}\times 2^{4}$.)`,
    },

    /* ── Rango, overflow y underflow ───────────────────────────── */
    {
      id: "arq-u03-017",
      tipo: "concepto",
      dificultad: "media",
      tags: ["overflow", "underflow", "final", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md", "arquitectura-de-computadores/cheatsheets/unidad-03-numeros-reales-y-codigos.html"],
      pregunta: String.raw`En punto flotante IEEE 754, ¿cuándo hay **overflow** y cuándo **underflow**? (El profe: "se tienen que saber".)`,
      respuesta: String.raw`- **Overflow (sobreflujo):** el resultado supera el máximo representable → el exponente pasa de $\text{FE}_{16}$ → $\pm\infty$.
- **Underflow (bajoflujo):** el resultado es demasiado chico (muy cerca de 0) → el exponente cae por debajo de $01_{16}$ → **desnormalizados** o $\pm 0$.

Lo señaliza la **bandera de overflow** del registro de estado de la ALU (con carry, signo y cero).`,
    },
    {
      id: "arq-u03-018",
      tipo: "completar",
      dificultad: "media",
      tags: ["rango", "ieee754", "exponentes"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf", "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md"],
      pregunta: String.raw`Exponentes especiales de IEEE 754 simple: máximo normalizado = ____; reservado ($\infty$/NaN) = ____; mínimo normalizado = ____; desnormalizados/ceros = ____.`,
      respuesta: String.raw`- $\text{FE}_{16}$ (254) → exponente **máximo normalizado**
- $\text{FF}_{16}$ (255) → **reservado** para $\infty$ y NaN
- $01_{16}$ (1) → exponente **mínimo normalizado**
- $00_{16}$ (0) → **desnormalizados** y ceros

Rango de normalizados $\approx 2^{-126}$ a $2^{+127}$.`,
    },
    {
      id: "arq-u03-019",
      tipo: "concepto",
      dificultad: "media",
      tags: ["rango", "ceros-signados", "desnormalizados"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md",
      pregunta: String.raw`¿Qué son los **ceros signados** y los **desnormalizados** en IEEE 754?`,
      respuesta: String.raw`- **Ceros signados:** $+0 = \text{00000000}_{16}$ y $-0 = \text{80000000}_{16}$ (difieren solo en el bit de signo).
- **Desnormalizados:** cifras de la forma $0{,}xxxx\dots$ (sin el 1 implícito) que **amplían el rango cerca de cero**, a costa de precisión.`,
    },
    {
      id: "arq-u03-020",
      tipo: "completar",
      dificultad: "facil",
      tags: ["ieee754", "formatos"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-03-numeros-reales-y-codigos.html"],
      pregunta: String.raw`IEEE 754 define 4 formatos por cantidad de bits: ____ (32), ____ (43), ____ (64), ____ (80). ¿Cuál desarrolla el curso?`,
      respuesta: String.raw`Simple (32), simple extendida (43), doble (64), doble extendida (80).

El curso desarrolla **solo precisión simple (32 bits)**; los otros 3 solo se nombran.`,
    },

    /* ── Precisión vs rango · truncamiento ─────────────────────── */
    {
      id: "arq-u03-021",
      tipo: "concepto",
      dificultad: "media",
      tags: ["precision", "rango", "trade-off"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf",
      pregunta: String.raw`Con una cantidad **fija** de dígitos, ¿qué relación hay entre **rango** y **precisión**?`,
      respuesta: String.raw`Es un **trade-off**: más dígitos a la **izquierda** de la coma → más **rango**; más a la **derecha** → más **precisión**. No se puede mejorar uno sin sacrificar el otro.

El error máximo de representación es la **mitad** de la precisión.`,
    },
    {
      id: "arq-u03-022",
      tipo: "completar",
      dificultad: "media",
      tags: ["truncamiento", "redondeo", "error"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md",
      pregunta: String.raw`Con $m$ dígitos fraccionarios, el error máximo con **truncamiento** es ____ y con **redondeo** es ____.`,
      respuesta: String.raw`Truncamiento: $< 2^{-m}$. Redondeo: $< 2^{-(m+1)}$ (**la mitad**).

El redondeo (a la combinación más próxima y luego truncar) reduce el error frente a descartar directamente.`,
    },

    /* ── Códigos ───────────────────────────────────────────────── */
    {
      id: "arq-u03-023",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["codigos", "definicion"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf",
      pregunta: String.raw`¿Qué es un **código** en el contexto de transmisión de información?`,
      respuesta: String.raw`Un conjunto de **reglas preestablecidas** para transmitir información, **respetadas por emisor y receptor**.`,
    },
    {
      id: "arq-u03-024",
      tipo: "concepto",
      dificultad: "media",
      tags: ["ascii", "codigos", "final"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf", "arquitectura-de-computadores/cheatsheets/unidad-03-numeros-reales-y-codigos.html"],
      pregunta: String.raw`¿Cómo es el código **ASCII** (estándar y extendido)?`,
      respuesta: String.raw`- **Estándar:** 7 bits = **128 combinaciones** ($\text{00}_{16}$–$\text{7F}_{16}$); se agrega un 0 a la izquierda → **1 byte**.
- Los **primeros 32** ($\text{00}_{16}$–$\text{1F}_{16}$) son caracteres de **control** (NUL, LF, CR, ESC), no gráficos.
- **Extendido:** 256 combinaciones ($2^{8}$, 1 byte), agrega acentos y caracteres de otros idiomas.

Regla práctica: 1 byte = 1 carácter alfanumérico ASCII.`,
    },
    {
      id: "arq-u03-025",
      tipo: "practica",
      tags: ["bcd", "codigos", "final"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf", "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md"],
      concepto: String.raw`BCD Natural: cada dígito decimal (0–9) se reemplaza por su binario de 4 bits, por separado (NO es binario puro). Sube por ejes: más dígitos → con dígitos 0 que igual ocupan 4 bits.`,
      variantes: [
        // N1 — 1 dígito
        [
          { pregunta: String.raw`Codificá $5_{10}$ en BCD.`, respuesta: String.raw`$$5_{10} = 0101_{\text{BCD}}$$`, pista: "Cada dígito decimal → su binario de 4 bits, por separado." },
          { pregunta: String.raw`Codificá $7_{10}$ en BCD.`, respuesta: String.raw`$$7_{10} = 0111_{\text{BCD}}$$` },
        ],
        // N2 — 2 dígitos (uno con cero)
        [
          { pregunta: String.raw`Codificá $39_{10}$ en BCD.`, respuesta: String.raw`$3\to0011$, $9\to1001$:

$$39_{10} = 0011\ 1001_{\text{BCD}}$$` },
          { pregunta: String.raw`Codificá $60_{10}$ en BCD.`, respuesta: String.raw`$6\to0110$, $0\to0000$:

$$60_{10} = 0110\ 0000_{\text{BCD}}$$` },
        ],
        // N3 — 3 dígitos con cero interno
        [
          { pregunta: String.raw`Codificá $208_{10}$ en BCD.`, respuesta: String.raw`$2\to0010$, $0\to0000$, $8\to1000$:

$$208_{10} = 0010\ 0000\ 1000_{\text{BCD}}$$

> [!trampa]
> No confundir con binario sin signo ($208 = 11010000_{2}$).` },
          { pregunta: String.raw`Codificá $512_{10}$ en BCD.`, respuesta: String.raw`$5\to0101$, $1\to0001$, $2\to0010$:

$$512_{10} = 0101\ 0001\ 0010_{\text{BCD}}$$` },
        ],
        // N4 — 4 dígitos
        [
          { pregunta: String.raw`Codificá $1024_{10}$ en BCD.`, respuesta: String.raw`$1\to0001$, $0\to0000$, $2\to0010$, $4\to0100$:

$$1024_{10} = 0001\ 0000\ 0010\ 0100_{\text{BCD}}$$` },
          { pregunta: String.raw`Codificá $2025_{10}$ en BCD.`, respuesta: String.raw`$2\to0010$, $0\to0000$, $2\to0010$, $5\to0101$:

$$2025_{10} = 0010\ 0000\ 0010\ 0101_{\text{BCD}}$$` },
        ],
        // N5 — 4 dígitos, casos densos
        [
          { pregunta: String.raw`Codificá $4096_{10}$ en BCD.`, respuesta: String.raw`$4\to0100$, $0\to0000$, $9\to1001$, $6\to0110$:

$$4096_{10} = 0100\ 0000\ 1001\ 0110_{\text{BCD}}$$` },
          { pregunta: String.raw`Codificá $9999_{10}$ en BCD.`, respuesta: String.raw`Los cuatro dígitos son $9\to1001$:

$$9999_{10} = 1001\ 1001\ 1001\ 1001_{\text{BCD}}$$` },
        ],
      ],
    },
    {
      id: "arq-u03-026",
      tipo: "concepto",
      dificultad: "media",
      tags: ["paridad", "deteccion-error", "final"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf", "arquitectura-de-computadores/cheatsheets/unidad-03-numeros-reales-y-codigos.html"],
      pregunta: String.raw`¿Qué es un **bit de paridad** y cuántos errores detecta?`,
      respuesta: String.raw`Un bit agregado que fuerza la **paridad** deseada del código (par = cantidad par de unos; impar = cantidad impar).

Detecta errores de **hasta 1 bit**: si cambia un bit, la paridad cambia y se detecta. Costo $\approx 25\%$ de overhead (de 4 a 5 bits).`,
    },
    {
      id: "arq-u03-027",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["paridad", "limitacion"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf",
      pregunta: String.raw`Un código con bit de paridad recibe una combinación con **2 bits cambiados**. ¿Detecta el error?`,
      opciones: [
        "Sí, siempre detecta cualquier cantidad de errores",
        "No: con 2 bits cambiados la paridad se conserva y el error pasa desapercibido",
        "Sí, pero solo si es paridad impar",
        "Sí, y además lo corrige automáticamente",
      ],
      correcta: 1,
      respuesta: String.raw`**No.** Con 2 bits cambiados la cantidad de unos vuelve a tener la **misma paridad**, así que el error no se detecta. Se acepta porque los errores de 1 bit son mucho más frecuentes que los de 2 simultáneos. (Para detectar/corregir más se usan otros códigos, como Hamming, ya en E/S.)`,
    },
    {
      id: "arq-u03-028",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["unicode", "utf-8", "final"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf",
      pregunta: String.raw`¿Qué es **UTF-8** y por qué es retrocompatible con ASCII?`,
      respuesta: String.raw`Codificación de Unicode de **longitud variable: 1 a 4 bytes** por carácter.

Los **primeros 128** caracteres coinciden 1:1 con ASCII (1 byte cada uno) → **todo texto ASCII es UTF-8 válido**.`,
    },

    /* ── Unidades de medida ────────────────────────────────────── */
    {
      id: "arq-u03-029",
      tipo: "completar",
      dificultad: "facil",
      tags: ["unidades", "almacenamiento", "final"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf", "arquitectura-de-computadores/cheatsheets/unidad-03-numeros-reales-y-codigos.html"],
      pregunta: String.raw`Completá la escala de almacenamiento: bit → ____ → byte → KB → MB → GB → ____ → PB → EB → ZB. ¿Cuánto vale cada salto?`,
      respuesta: String.raw`bit → **nibble** (4 bits) → byte (8 bits) → KB → MB → GB → **TB** → PB → EB → ZB.

Cada salto es $\times 1000$ (potencias de 10): "kilo es 1000, siempre de 1000 en 1000".`,
    },
    {
      id: "arq-u03-030",
      tipo: "concepto",
      dificultad: "media",
      tags: ["unidades", "bytes-bits", "1024"],
      fuente: ["arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-03-numeros-reales-y-codigos.html"],
      pregunta: String.raw`En unidades, ¿qué diferencia hay entre **GB** y **Gb**, y entre 1000 y 1024?`,
      respuesta: String.raw`- **Mayúscula = bytes** (GB = gigabytes); **minúscula = bits** (Gb = gigabits). Importa al leer velocidades de red.
- Hoy se usan **potencias de 10** (1 GB = 1000 MB); antes 1024. Esa diferencia explica por qué un disco "de 1 TB" muestra $\sim 900$ GB en la PC.`,
    },
    {
      id: "arq-u03-031",
      tipo: "completar",
      dificultad: "facil",
      tags: ["unidades", "frecuencia", "tiempo", "palabra"],
      fuente: "arquitectura-de-computadores/unidad-03-numeros-reales-y-codigos/apuntes/numeros-reales-y-codigos.pdf",
      pregunta: String.raw`Completá: frecuencia Hz → KHz → MHz → ____; tiempo ms ($10^{-3}$) → µs ($10^{-6}$) → ____; **Word** = ____.`,
      respuesta: String.raw`- Frecuencia: **GHz** ($10^{9}$ Hz; PCs actuales 1–6 GHz).
- Tiempo: **ns** ($10^{-9}$ s).
- **Word** = tamaño del **registro de instrucción** del procesador (8/16/32/64 bits); **DWord** = doble palabra.`,
    },

    /* ── Trampas de examen (opción múltiple) ───────────────────── */
    {
      id: "arq-u03-032",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      tags: ["ieee754", "signo", "trampa", "clave"],
      fuente: ["arquitectura-de-computadores/examenes/parcial-2026-1.md", "arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md"],
      pregunta: String.raw`Para representar un número **negativo** en IEEE 754 precisión simple, ¿qué se hace con el signo?`,
      opciones: [
        "Se aplica complemento a 2 a la mantisa",
        "Se pone el bit de signo b31 = 1 y la mantisa/exponente se calculan con el valor absoluto",
        "Se le resta 127 al exponente almacenado",
        "Se invierte el exponente y se deja la mantisa igual",
      ],
      correcta: 1,
      respuesta: String.raw`Se pone **$b_{31}=1$**; la mantisa y el exponente se calculan con el **valor absoluto**. **No** se usa Ca2 (es otro formato) — es el error típico que el profe corrige en el A1.`,
    },
    {
      id: "arq-u03-033",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["overflow", "underflow", "final"],
      fuente: "arquitectura-de-computadores/cheatsheets/unidad-03-numeros-reales-y-codigos.html",
      pregunta: String.raw`En una operación IEEE 754, el exponente del resultado **cae por debajo de** $01_{16}$ (queda demasiado chico). ¿Qué ocurrió?`,
      opciones: [
        "Overflow (sobreflujo) → el resultado se va a ±∞",
        "Underflow (bajoflujo) → cae en desnormalizados o ±0",
        "Se generó un NaN",
        "Nada: el exponente no tiene mínimo",
      ],
      correcta: 1,
      respuesta: String.raw`Es **underflow**: el número es demasiado chico para representarse como normalizado → cae en **desnormalizados** o $\pm 0$. El **overflow** es lo opuesto: el exponente supera $\text{FE}_{16}$ → $\pm\infty$.`,
    },

  ],
});
