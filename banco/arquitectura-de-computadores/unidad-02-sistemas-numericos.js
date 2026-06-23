/* Mazo — Arquitectura de Computadores · Unidad 02 · Sistemas Numéricos
   Fuentes: resumen.md + cheatsheet (final) + parcial-2026-1.md + preguntas-anunciadas + apunte.
   Campos de contenido SIEMPRE en String.raw. Alcance: FINAL (toda la parte numérica entra). */
FLASHCARDS.deck({
  materia: "arquitectura-de-computadores",
  unidad: "02-sistemas-numericos",
  titulo: "Sistemas Numéricos",
  cards: [

    /* ── Sistemas posicionales y bases ─────────────────────────── */
    {
      id: "arq-u02-001",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["posicional", "peso", "fundamentos"],
      fuente: ["arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md", "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf"],
      pregunta: String.raw`¿Qué es un sistema de numeración **posicional** y cómo se calcula el peso de cada posición?`,
      respuesta: String.raw`Un sistema con un conjunto de símbolos cuya cantidad define la **base**. Es **posicional** porque el valor de cada dígito depende de su **posición**, contada de derecha a izquierda desde 0.

El peso de la posición $i$ es $b^{i}$ (la base elevada a la posición), y el valor del número es $\sum_{i} d_i \cdot b^{i}$.`,
    },
    {
      id: "arq-u02-002",
      tipo: "completar",
      dificultad: "facil",
      tags: ["msb", "lsb"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md",
      pregunta: String.raw`El bit menos significativo (**LSB**) es $d_{\_\_}$, el de más a la ____; el más significativo (**MSB**) es $d_{\_\_}$, el de más a la ____.`,
      respuesta: String.raw`**LSB** = $d_{0}$, el de más a la **derecha** (peso $b^{0}=1$). **MSB** = $d_{n}$, el de más a la **izquierda** (el que más pesa).

En un byte, el nibble derecho es el menos significativo.`,
      pista: String.raw`d sub cero está a un extremo; d sub n al otro.`,
    },
    {
      id: "arq-u02-003",
      tipo: "completar",
      dificultad: "facil",
      tags: ["bases", "simbolos"],
      fuente: ["arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-02-sistemas-numericos.html"],
      pregunta: String.raw`Completá los símbolos de cada base: binario = ____, octal = ____, decimal = ____, hexadecimal = ____.`,
      respuesta: String.raw`- **Binario** (base 2): $\{0,1\}$
- **Octal** (base 8): $\{0,1,2,3,4,5,6,7\}$
- **Decimal** (base 10): $\{0,\dots,9\}$
- **Hexadecimal** (base 16): $\{0,\dots,9,A,B,C,D,E,F\}$ con $A=10,\dots,F=15$.`,
    },
    {
      id: "arq-u02-004",
      tipo: "completar",
      dificultad: "facil",
      tags: ["binario", "potencias-de-2"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md",
      pregunta: String.raw`Escribí los pesos de las primeras 8 posiciones del **binario** (de $d_0$ a $d_7$): ____.`,
      respuesta: String.raw`$$1,\ 2,\ 4,\ 8,\ 16,\ 32,\ 64,\ 128$$

Son las potencias de 2 ($2^{0}$ a $2^{7}$). Siguen $256, 512, 1024,\dots$`,
      pista: String.raw`Cada peso es el doble del anterior, empezando en 1.`,
    },
    {
      id: "arq-u02-005",
      tipo: "practica",
      tags: ["conversion", "decimal-binario"],
      fuente: ["arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf", "arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md"],
      concepto: String.raw`Convertir un decimal a binario (divisiones sucesivas por 2; leer los restos del último al primero).`,
      variantes: [
        // Nivel 1 — números chicos (≤ 4 bits)
        [
          { pregunta: String.raw`Pasá $13_{10}$ a binario.`, respuesta: String.raw`$$13_{10} = 1101_{2}$$

Pesos: $8+4+1 = 13$.`, pista: "Dividí por 2 y leé los restos de abajo hacia arriba." },
          { pregunta: String.raw`Pasá $11_{10}$ a binario.`, respuesta: String.raw`$$11_{10} = 1011_{2}$$

Pesos: $8+2+1 = 11$.` },
        ],
        // Nivel 2 — hasta 6 bits
        [
          { pregunta: String.raw`Pasá $46_{10}$ a binario.`, respuesta: String.raw`$$46_{10} = 101110_{2}$$

Pesos: $32+8+4+2 = 46$.` },
          { pregunta: String.raw`Pasá $53_{10}$ a binario.`, respuesta: String.raw`$$53_{10} = 110101_{2}$$

Pesos: $32+16+4+1 = 53$.` },
        ],
        // Nivel 3 — 8 bits (1 byte)
        [
          { pregunta: String.raw`Pasá $209_{10}$ a binario.`, respuesta: String.raw`$209\to104\,(r1)\to52\,(r0)\to26\,(r0)\to13\,(r0)\to6\,(r1)\to3\,(r0)\to1\,(r1)\to0\,(r1)$

$$209_{10} = 11010001_{2}$$

Pesos: $128+64+16+1 = 209$.` },
          { pregunta: String.raw`Pasá $156_{10}$ a binario.`, respuesta: String.raw`$$156_{10} = 10011100_{2}$$

Pesos: $128+16+8+4 = 156$.` },
        ],
        // Nivel 4 — 9 bits
        [
          { pregunta: String.raw`Pasá $500_{10}$ a binario.`, respuesta: String.raw`$$500_{10} = 111110100_{2}$$

Pesos: $256+128+64+32+16+4 = 500$.` },
          { pregunta: String.raw`Pasá $333_{10}$ a binario.`, respuesta: String.raw`$$333_{10} = 101001101_{2}$$

Pesos: $256+64+8+4+1 = 333$.` },
        ],
        // Nivel 5 — > 1024 (11 bits)
        [
          { pregunta: String.raw`Pasá $2026_{10}$ a binario.`, respuesta: String.raw`$$2026_{10} = 11111101010_{2}$$

Pesos: $1024+512+256+128+64+32+8+2 = 2026$.` },
          { pregunta: String.raw`Pasá $1500_{10}$ a binario.`, respuesta: String.raw`$$1500_{10} = 10111011100_{2}$$

Pesos: $1024+256+128+64+16+8+4 = 1500$.` },
        ],
      ],
    },
    {
      id: "arq-u02-006",
      tipo: "practica",
      tags: ["conversion", "binario-decimal"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf",
      concepto: String.raw`Convertir binario a decimal sumando los pesos (potencias de 2) de los bits en 1.`,
      variantes: [
        // Nivel 1 — ≤ 4 bits
        [
          { pregunta: String.raw`Pasá $1101_{2}$ a decimal.`, respuesta: String.raw`$$1101_{2} = 8+4+1 = 13_{10}$$`, pista: "Pesos desde la derecha: 1, 2, 4, 8…" },
          { pregunta: String.raw`Pasá $1011_{2}$ a decimal.`, respuesta: String.raw`$$1011_{2} = 8+2+1 = 11_{10}$$` },
        ],
        // Nivel 2 — hasta 6 bits
        [
          { pregunta: String.raw`Pasá $101110_{2}$ a decimal.`, respuesta: String.raw`$$101110_{2} = 32+8+4+2 = 46_{10}$$` },
          { pregunta: String.raw`Pasá $110101_{2}$ a decimal.`, respuesta: String.raw`$$110101_{2} = 32+16+4+1 = 53_{10}$$` },
        ],
        // Nivel 3 — 1 byte
        [
          { pregunta: String.raw`Pasá $11010001_{2}$ a decimal.`, respuesta: String.raw`$$11010001_{2} = 128+64+16+1 = 209_{10}$$` },
          { pregunta: String.raw`Pasá $10011100_{2}$ a decimal.`, respuesta: String.raw`$$10011100_{2} = 128+16+8+4 = 156_{10}$$` },
        ],
        // Nivel 4 — 9 bits
        [
          { pregunta: String.raw`Pasá $111110100_{2}$ a decimal.`, respuesta: String.raw`$$111110100_{2} = 256+128+64+32+16+4 = 500_{10}$$` },
          { pregunta: String.raw`Pasá $101001101_{2}$ a decimal.`, respuesta: String.raw`$$101001101_{2} = 256+64+8+4+1 = 333_{10}$$` },
        ],
        // Nivel 5 — 11 bits
        [
          { pregunta: String.raw`Pasá $11111101010_{2}$ a decimal.`, respuesta: String.raw`$$11111101010_{2} = 1024+512+256+128+64+32+8+2 = 2026_{10}$$` },
          { pregunta: String.raw`Pasá $10111011100_{2}$ a decimal.`, respuesta: String.raw`$$10111011100_{2} = 1024+256+128+64+16+8+4 = 1500_{10}$$` },
        ],
      ],
    },
    {
      id: "arq-u02-007",
      tipo: "practica",
      tags: ["hexadecimal", "conversion", "clave"],
      fuente: ["arquitectura-de-computadores/examenes/parcial-2026-1.md", "arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md"],
      concepto: String.raw`Convertir un decimal a hexadecimal (pasar a binario y agrupar de a 4 bits). La dificultad sube por ejes: sin letras → con letras A–F → valor máximo → ceros que se caen al agrupar.`,
      variantes: [
        // Nivel 1 — 2 díg. SIN letras (solo el mecanismo de agrupar de a 4)
        [
          { pregunta: String.raw`Pasá $53_{10}$ a hexadecimal.`, respuesta: String.raw`$53 = 0011\ 0101_{2}$ → $0011=3,\ 0101=5$:

$$53_{10} = \text{35}_{16}$$`, pista: "Agrupá de a 4 bits desde la derecha; cada grupo de 4 es un dígito hexa." },
          { pregunta: String.raw`Pasá $100_{10}$ a hexadecimal.`, respuesta: String.raw`$100 = 0110\ 0100_{2}$ → $0110=6,\ 0100=4$:

$$100_{10} = \text{64}_{16}$$` },
        ],
        // Nivel 2 — 2 díg. CON letra (aparece el mapeo A–F)
        [
          { pregunta: String.raw`Pasá $193_{10}$ a hexadecimal (el "regalito de carnaval" del parcial).`, respuesta: String.raw`$193 = 1100\ 0001_{2}$ → $1100=\text{C}$, $0001=1$:

$$193_{10} = \text{C1}_{16}$$

Corrección estricta del profe: bien en binario pero mal a hexa = medio punto.` },
          { pregunta: String.raw`Pasá $250_{10}$ a hexadecimal.`, respuesta: String.raw`$250 = 1111\ 1010_{2}$ → $1111=\text{F},\ 1010=\text{A}$:

$$250_{10} = \text{FA}_{16}$$` },
        ],
        // Nivel 3 — 3 díg. con VARIAS letras
        [
          { pregunta: String.raw`Pasá $2748_{10}$ a hexadecimal.`, respuesta: String.raw`$2748 = 1010\ 1011\ 1100_{2}$ → $\text{A},\ \text{B},\ \text{C}$:

$$2748_{10} = \text{ABC}_{16}$$` },
          { pregunta: String.raw`Pasá $1000_{10}$ a hexadecimal.`, respuesta: String.raw`$1000 = 0011\ 1110\ 1000_{2}$ → $3,\ \text{E},\ 8$:

$$1000_{10} = \text{3E8}_{16}$$` },
        ],
        // Nivel 4 — 4 díg., valor máximo / todo letras (caso borde)
        [
          { pregunta: String.raw`Pasá $65535_{10}$ a hexadecimal.`, respuesta: String.raw`$65535 = 1111\ 1111\ 1111\ 1111_{2}$ (máximo de 16 bits, todos 1):

$$65535_{10} = \text{FFFF}_{16}$$` },
          { pregunta: String.raw`Pasá $51966_{10}$ a hexadecimal.`, respuesta: String.raw`$51966 = 1100\ 1010\ 1111\ 1110_{2}$ → $\text{C},\text{A},\text{F},\text{E}$:

$$51966_{10} = \text{CAFE}_{16}$$` },
        ],
        // Nivel 5 — 5 díg. con CEROS que se caen al agrupar (trampa)
        [
          { pregunta: String.raw`Pasá $507396_{10}$ a hexadecimal.`, respuesta: String.raw`$507396 = 0111\ 1011\ 1110\ 0000\ 0100_{2}$ → $7,\text{B},\text{E},0,4$:

$$507396_{10} = \text{7BE04}_{16}$$

🚨 No te comas el grupo $0000$: cada 4 bits es un dígito aunque sea cero.` },
          { pregunta: String.raw`Pasá $1000000_{10}$ a hexadecimal.`, respuesta: String.raw`$1000000 = 1111\ 0100\ 0010\ 0100\ 0000_{2}$ → $\text{F},4,2,4,0$:

$$1000000_{10} = \text{F4240}_{16}$$` },
        ],
      ],
    },
    {
      id: "arq-u02-008",
      tipo: "concepto",
      dificultad: "media",
      tags: ["hexadecimal", "agrupar", "clave"],
      fuente: ["arquitectura-de-computadores/cheatsheets/unidad-02-sistemas-numericos.html", "arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md"],
      pregunta: String.raw`¿Cómo se convierte entre **hexadecimal y binario** y por qué se agrupa de a 4 bits?`,
      respuesta: String.raw`Porque $16 = 2^{4}$, cada dígito hexa equivale a **exactamente 4 bits**.

- **Binario → hexa:** agrupar de a 4 desde la derecha (completar con ceros a la izquierda).
- **Hexa → binario:** **desagrupar** cada dígito en sus 4 bits.

Ej: $\text{C1}_{16} = 1100\ 0001 = 11000001_{2}$.`,
    },
    {
      id: "arq-u02-009",
      tipo: "concepto",
      dificultad: "media",
      tags: ["octal", "agrupar"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf",
      pregunta: String.raw`¿Cómo se convierte entre **octal y binario** y por qué de a 3 bits?`,
      respuesta: String.raw`Porque $8 = 2^{3}$, cada dígito octal equivale a **3 bits** (¡siempre 3!). Se agrupa/desagrupa de a 3 desde la derecha.

Ej: $206335_{8} = 010\,000\,110\,011\,011\,101 = 10000110011011101_{2}$.`,
    },
    {
      id: "arq-u02-010",
      tipo: "practica",
      tags: ["hexadecimal", "conversion"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf",
      concepto: String.raw`Convertir hexadecimal a decimal (cada dígito por su peso, potencia de 16). La dificultad sube por ejes: sin letras → con letras A–F → valor máximo → un peso 0 que igual cuenta de posición.`,
      variantes: [
        // Nivel 1 — 2 díg. SIN letras (solo la suma de pesos)
        [
          { pregunta: String.raw`Pasá $\text{35}_{16}$ a decimal.`, respuesta: String.raw`$$\text{35}_{16} = 3{\cdot}16 + 5{\cdot}1 = 53_{10}$$`, pista: "Pesos desde la derecha: ·1, ·16, ·256, …" },
          { pregunta: String.raw`Pasá $\text{64}_{16}$ a decimal.`, respuesta: String.raw`$$\text{64}_{16} = 6{\cdot}16 + 4{\cdot}1 = 100_{10}$$` },
        ],
        // Nivel 2 — 2 díg. CON letra (aparece A–F → su valor)
        [
          { pregunta: String.raw`Pasá $\text{C1}_{16}$ a decimal.`, respuesta: String.raw`Con $\text{C}=12$:

$$\text{C1}_{16} = 12{\cdot}16 + 1{\cdot}1 = 193_{10}$$` },
          { pregunta: String.raw`Pasá $\text{FA}_{16}$ a decimal.`, respuesta: String.raw`Con $\text{F}=15$ y $\text{A}=10$:

$$\text{FA}_{16} = 15{\cdot}16 + 10{\cdot}1 = 250_{10}$$` },
        ],
        // Nivel 3 — 3 díg. con VARIAS letras
        [
          { pregunta: String.raw`Pasá $\text{ABC}_{16}$ a decimal.`, respuesta: String.raw`$$\text{ABC}_{16} = 10{\cdot}256 + 11{\cdot}16 + 12{\cdot}1 = 2748_{10}$$` },
          { pregunta: String.raw`Pasá $\text{3E8}_{16}$ a decimal.`, respuesta: String.raw`$$\text{3E8}_{16} = 3{\cdot}256 + 14{\cdot}16 + 8{\cdot}1 = 1000_{10}$$` },
        ],
        // Nivel 4 — 4 díg., valor máximo / todo letras (caso borde)
        [
          { pregunta: String.raw`Pasá $\text{FFFF}_{16}$ a decimal.`, respuesta: String.raw`$$\text{FFFF}_{16} = 15{\cdot}4096 + 15{\cdot}256 + 15{\cdot}16 + 15{\cdot}1 = 65535_{10}$$

Es el máximo de 16 bits.` },
          { pregunta: String.raw`Pasá $\text{CAFE}_{16}$ a decimal.`, respuesta: String.raw`$$\text{CAFE}_{16} = 12{\cdot}4096 + 10{\cdot}256 + 15{\cdot}16 + 14{\cdot}1 = 51966_{10}$$` },
        ],
        // Nivel 5 — 5 díg. con un peso 0 que igual ocupa posición (trampa)
        [
          { pregunta: String.raw`Pasá $\text{7BE04}_{16}$ a decimal.`, respuesta: String.raw`Con $\text{B}=11$ y $\text{E}=14$. Ojo: el $0$ aporta $0$ pero **no** corre los demás pesos:

$$\text{7BE04}_{16} = 7{\cdot}65536 + 11{\cdot}4096 + 14{\cdot}256 + 0{\cdot}16 + 4{\cdot}1 = 507396_{10}$$` },
          { pregunta: String.raw`Pasá $\text{F4240}_{16}$ a decimal.`, respuesta: String.raw`$$\text{F4240}_{16} = 15{\cdot}65536 + 4{\cdot}4096 + 2{\cdot}256 + 4{\cdot}16 + 0{\cdot}1 = 1000000_{10}$$` },
        ],
      ],
    },
    {
      id: "arq-u02-011",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["hexadecimal", "motivacion"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf",
      pregunta: String.raw`¿Por qué se usa el sistema **hexadecimal** en informática?`,
      respuesta: String.raw`Porque **compacta** cifras binarias largas y difíciles de leer: 4 bits → 1 dígito hexa.

Ej: $10101001011111100101_{2} = \text{A97E5}_{16}$. Los **dumps de memoria** se muestran en hexa por eso.`,
    },

    /* ── Bits, aritmética y rango ──────────────────────────────── */
    {
      id: "arq-u02-012",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["bit", "nibble", "byte"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md",
      pregunta: String.raw`Definí **bit**, **nibble** y **byte**, y su relación.`,
      respuesta: String.raw`- **bit**: un dígito binario (0 o 1), la unidad mínima.
- **nibble**: 4 bits = 1 dígito hexadecimal.
- **byte**: 8 bits = 2 nibbles.

En un byte, el nibble **derecho** es el menos significativo y el **izquierdo** el más significativo.`,
    },
    {
      id: "arq-u02-013",
      tipo: "practica",
      tags: ["aritmetica", "suma-binaria"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf",
      concepto: String.raw`Sumar en binario (columna a columna, llevando 1 al llegar a 2). Sube por ejes: sin acarreo → un acarreo → varios → propagación en cadena.`,
      variantes: [
        // N1 — pocos bits, sin/poco acarreo
        [
          { pregunta: String.raw`Resolvé $10_{2} + 1_{2}$ y verificá en decimal.`, respuesta: String.raw`$$10_{2} + 1_{2} = 11_{2}$$

$2+1=3$, y $11_{2}=3$ ✓.`, pista: "Sumá columna a columna desde la derecha; 1+1 = 10 (llevás 1)." },
          { pregunta: String.raw`Resolvé $100_{2} + 10_{2}$ y verificá en decimal.`, respuesta: String.raw`$$100_{2} + 10_{2} = 110_{2}$$

$4+2=6$, y $110_{2}=6$ ✓.` },
        ],
        // N2 — un acarreo
        [
          { pregunta: String.raw`Resolvé $101_{2} + 10_{2}$ y verificá en decimal.`, respuesta: String.raw`$$101_{2} + 10_{2} = 111_{2}$$

$5+2=7$ ✓.` },
          { pregunta: String.raw`Resolvé $110_{2} + 101_{2}$ y verificá en decimal.`, respuesta: String.raw`$$110_{2} + 101_{2} = 1011_{2}$$

$6+5=11$, y $1011_{2}=11$ ✓.` },
        ],
        // N3 — varios bits con acarreo
        [
          { pregunta: String.raw`Resolvé $1101_{2} + 111_{2}$ y verificá en decimal.`, respuesta: String.raw`$$1101_{2} + 111_{2} = 10100_{2}$$

$13+7=20$, y $10100_{2}=16+4=20$ ✓.` },
          { pregunta: String.raw`Resolvé $1010_{2} + 1100_{2}$ y verificá en decimal.`, respuesta: String.raw`$$1010_{2} + 1100_{2} = 10110_{2}$$

$10+12=22$, y $10110_{2}=22$ ✓.` },
        ],
        // N4 — acarreos encadenados
        [
          { pregunta: String.raw`Resolvé $10110_{2} + 1101_{2}$ y verificá en decimal.`, respuesta: String.raw`$$10110_{2} + 1101_{2} = 100011_{2}$$

$22+13=35$, y $100011_{2}=32+2+1=35$ ✓.` },
          { pregunta: String.raw`Resolvé $11011_{2} + 1011_{2}$ y verificá en decimal.`, respuesta: String.raw`$$11011_{2} + 1011_{2} = 100110_{2}$$

$27+11=38$ ✓.` },
        ],
        // N5 — propagación total del acarreo
        [
          { pregunta: String.raw`Resolvé $1111111_{2} + 1_{2}$ y verificá en decimal.`, respuesta: String.raw`El acarreo se propaga por toda la cadena:

$$1111111_{2} + 1_{2} = 10000000_{2}$$

$127+1=128$ ✓.` },
          { pregunta: String.raw`Resolvé $101010_{2} + 10101_{2}$ y verificá en decimal.`, respuesta: String.raw`$$101010_{2} + 10101_{2} = 111111_{2}$$

$42+21=63$ ✓.` },
        ],
      ],
    },
    {
      id: "arq-u02-014",
      tipo: "completar",
      dificultad: "media",
      tags: ["rango", "sin-signo"],
      fuente: ["arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md", "arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md"],
      pregunta: String.raw`Con **n bits** sin signo hay ____ combinaciones y el rango representable es ____.`,
      respuesta: String.raw`$2^{n}$ combinaciones; rango $$[\,0,\ 2^{n}-1\,]$$

El mayor representable es **uno menos** que el total. Ej: 4 bits → $[0,15]$; 8 bits → $[0,255]$.`,
    },
    {
      id: "arq-u02-015",
      tipo: "concepto",
      dificultad: "media",
      tags: ["overflow", "underflow", "final"],
      fuente: ["arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md", "arquitectura-de-computadores/cheatsheets/unidad-02-sistemas-numericos.html"],
      pregunta: String.raw`¿Qué son **overflow** y **underflow**? (El profe: "se tienen que saber".)`,
      respuesta: String.raw`- **Overflow (sobreflujo):** el resultado **excede el rango** representable — sin signo, mayor que $2^{n}-1$; en Ca2, fuera de $[-2^{n-1},\ 2^{n-1}-1]$.
- **Underflow (bajoflujo):** el número es **demasiado chico** para representarse (sobre todo en punto flotante, Unidad 3).

Lo avisan las **banderas** del registro de estado de la ULA: carry, overflow, signo, cero.`,
    },

    /* ── Enteros con signo ─────────────────────────────────────── */
    {
      id: "arq-u02-016",
      tipo: "completar",
      dificultad: "facil",
      tags: ["signo", "convenios"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf",
      pregunta: String.raw`El signo se indica con el **bit de signo** = el ____ ($0=$ ____, $1=$ ____); no es parte de la magnitud. Los 4 convenios son: ____, ____, ____ y ____.`,
      respuesta: String.raw`El bit de signo es el **MSB** ($0 = +$, $1 = -$).

Los 4 formatos: **Signo y Magnitud**, **Complemento a 1**, **Complemento a 2** y **Exceso $2^{n-1}$**.`,
    },
    {
      id: "arq-u02-017",
      tipo: "concepto",
      dificultad: "media",
      tags: ["signo-magnitud", "doble-cero"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf",
      pregunta: String.raw`¿Cómo funciona **Signo y Magnitud** y cuál es su problema?`,
      respuesta: String.raw`El MSB es el signo; los $n-1$ bits restantes son la magnitud. Ej (3 bits): $001 = +1$, $101 = -1$.

**Problema:** tiene **dos ceros** ($+0 = 000$ y $-0 = 100$) y da resultados erróneos en los cálculos → no se usa para matemática.`,
    },
    {
      id: "arq-u02-018",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      tags: ["trampa", "representaciones", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md", "arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md"],
      pregunta: String.raw`El profe insiste: "no es lo mismo pasar A,B,C,D que pasar a binario sin signo". ¿Cuál afirmación es correcta?`,
      opciones: [
        "Son lo mismo, solo cambia el nombre",
        "Binario sin signo usa todos los bits como magnitud; Signo y Magnitud reserva el MSB para el signo; BCD codifica cada dígito decimal aparte — son representaciones distintas",
        "Binario sin signo solo sirve para números pares",
        "A,B,C,D es notación hexadecimal",
      ],
      correcta: 1,
      respuesta: String.raw`Son **representaciones distintas** del mismo decimal: en binario **sin signo** todos los bits son magnitud; en **Signo y Magnitud** el MSB es signo; en **BCD** se codifica cada dígito decimal por separado. Hay que leer qué representación pide la consigna.`,
    },
    {
      id: "arq-u02-019",
      tipo: "concepto",
      dificultad: "media",
      tags: ["bcd", "codigos", "final"],
      fuente: "arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md",
      pregunta: String.raw`¿Qué es **BCD** y en qué se diferencia del binario puro? (cruza con la Unidad 3)`,
      respuesta: String.raw`**BCD** (Binary Coded Decimal) codifica **cada dígito decimal en 4 bits** por separado.

Ej: $39$ en BCD $= 0011\ 1001$, distinto de $39$ en binario puro $= 100111$.

Es un **código** (se desarrolla en la Unidad 3). El profe: "no es lo mismo, casi siempre entra".`,
    },

    /* ── Complemento a 1 y a 2 ─────────────────────────────────── */
    {
      id: "arq-u02-020",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["complemento-1"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf",
      pregunta: String.raw`¿Qué es el **complemento a 1 (Ca1)** de un número binario?`,
      respuesta: String.raw`**Invertir todos los bits** ($0\to1$, $1\to0$). Un negativo se representa como el Ca1 del positivo de igual magnitud.

Ej (3 bits): $+2 = 010 \to -2 = 101$. Tiene **dos ceros** (000 y 111) y no sirve para matemática: es solo el paso previo al Ca2.`,
    },
    {
      id: "arq-u02-021",
      tipo: "practica",
      tags: ["complemento-1", "decodificar", "final"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf",
      concepto: String.raw`Complemento a 1 (invertir todos los bits). Sube por ejes: codificar un negativo → decodificar → más bits.`,
      variantes: [
        // N1 — codificar (invertir el positivo)
        [
          { pregunta: String.raw`Escribí $-2$ en Ca1 con 3 bits.`, respuesta: String.raw`$+2 = 010_{2}$; invertí todos los bits:

$$-2\ (\text{Ca1}) = 101_{2}$$`, pista: "Ca1 = invertir cada bit (0↔1)." },
          { pregunta: String.raw`Escribí $-3$ en Ca1 con 3 bits.`, respuesta: String.raw`$+3 = 011_{2}$ → invertir:

$$-3\ (\text{Ca1}) = 100_{2}$$` },
        ],
        // N2 — codificar, más bits
        [
          { pregunta: String.raw`Escribí $-10$ en Ca1 con 5 bits.`, respuesta: String.raw`$+10 = 01010_{2}$ → invertir:

$$-10\ (\text{Ca1}) = 10101_{2}$$` },
          { pregunta: String.raw`Escribí $-18$ en Ca1 con 6 bits.`, respuesta: String.raw`$+18 = 010010_{2}$ → invertir:

$$-18\ (\text{Ca1}) = 101101_{2}$$` },
        ],
        // N3 — decodificar (dirección inversa)
        [
          { pregunta: String.raw`El número $1001011_{2}$ está en Ca1. ¿Qué decimal representa?`, respuesta: String.raw`Empieza con 1 → negativo. Invertí para leer la magnitud:

$1001011 \to 0110100 = 32+16+4 = 52$

$$1001011_{2}\ (\text{Ca1}) = -52_{10}$$` },
          { pregunta: String.raw`El número $1010111_{2}$ está en Ca1. ¿Qué decimal representa?`, respuesta: String.raw`$1010111 \to 0101000 = 32+8 = 40$

$$1010111_{2}\ (\text{Ca1}) = -40_{10}$$` },
        ],
        // N4 — decodificar, más bits
        [
          { pregunta: String.raw`El número $10110100_{2}$ está en Ca1. ¿Qué decimal representa?`, respuesta: String.raw`$10110100 \to 01001011 = 64+8+2+1 = 75$

$$10110100_{2}\ (\text{Ca1}) = -75_{10}$$` },
          { pregunta: String.raw`El número $100111000_{2}$ está en Ca1. ¿Qué decimal representa?`, respuesta: String.raw`$100111000 \to 011000111 = 128+64+4+2+1 = 199$

$$100111000_{2}\ (\text{Ca1}) = -199_{10}$$` },
        ],
        // N5 — decodificar, cadenas largas
        [
          { pregunta: String.raw`El número $1000001011_{2}$ está en Ca1. ¿Qué decimal representa?`, respuesta: String.raw`$1000001011 \to 0111110100 = 256+128+64+32+16+4 = 500$

$$1000001011_{2}\ (\text{Ca1}) = -500_{10}$$` },
          { pregunta: String.raw`El número $10000010111_{2}$ está en Ca1. ¿Qué decimal representa?`, respuesta: String.raw`$10000010111 \to 01111101000 = 512+256+128+64+32+8 = 1000$

$$10000010111_{2}\ (\text{Ca1}) = -1000_{10}$$` },
        ],
      ],
    },
    {
      id: "arq-u02-022",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["complemento-2"],
      fuente: "arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md",
      pregunta: String.raw`¿Cómo se calcula el **complemento a 2 (Ca2)** de un número?`,
      respuesta: String.raw`**Ca2 = Ca1 + 1**: invertí todos los bits y sumá 1.

Ej: $+2 = 010 \to \text{Ca1} = 101 \to (+1) \to -2 = 110$.`,
    },
    {
      id: "arq-u02-023",
      tipo: "texto",
      dificultad: "media",
      tags: ["complemento-2", "clave"],
      fuente: ["arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md", "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf"],
      pregunta: String.raw`¿Por qué se usa **Ca2** y no Signo-y-Magnitud ni Ca1 para los enteros con signo?`,
      respuesta: String.raw`Porque Ca2:
- tiene **un solo cero** (no hay $+0$ y $-0$),
- todos los negativos empiezan con 1,
- y **sirve para la matemática**: $+2 + (-3) = 010 + 101 = 111 = -1$ ✓.

Es el sistema que usan las **unidades de cálculo** de los procesadores.`,
    },
    {
      id: "arq-u02-024",
      tipo: "practica",
      tags: ["complemento-2", "clave", "trampa"],
      fuente: ["arquitectura-de-computadores/examenes/parcial-2026-1.md", "arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md"],
      concepto: String.raw`Complemento a 2 (Ca1 + 1). Sube por ejes: codificar positivo → codificar negativo → negativo grande con la trampa del bit de signo → decodificar → borde del rango.`,
      variantes: [
        // N1 — codificar un positivo (solo bit de signo 0)
        [
          { pregunta: String.raw`Escribí $+5$ en Ca2 (4 bits).`, respuesta: String.raw`Positivo → bit de signo 0 + magnitud:

$$+5 = 0101_{2}$$`, pista: "Positivo en Ca2 = bit de signo 0 seguido de la magnitud." },
          { pregunta: String.raw`Escribí $+3$ en Ca2 (3 bits).`, respuesta: String.raw`$$+3 = 011_{2}$$` },
        ],
        // N2 — codificar un negativo chico (Ca1 + 1)
        [
          { pregunta: String.raw`Escribí $-5$ en Ca2 (4 bits).`, respuesta: String.raw`$+5 = 0101$ → invertir $1010$ → $+1$:

$$-5 = 1011_{2}$$` },
          { pregunta: String.raw`Escribí $-10$ en Ca2 (5 bits).`, respuesta: String.raw`$+10 = 01010$ → invertir $10101$ → $+1$:

$$-10 = 10110_{2}$$` },
        ],
        // N3 — negativo grande con la TRAMPA del bit de signo (parcial A2)
        [
          { pregunta: String.raw`Escribí $-199$ en Ca2 (ejercicio A2 del parcial).`, respuesta: String.raw`1. $199 = 11000111_{2}$
2. Agregá el **bit de signo 0**: $011000111$
3. Negativo → invertí y sumá 1: $100111000 + 1$

$$-199 = 100111001_{2}$$

🚨 Si invertís sin agregar antes el bit de signo, da positivo.` },
          { pregunta: String.raw`Escribí $-130$ en Ca2.`, respuesta: String.raw`1. $130 = 10000010_{2}$
2. Bit de signo 0: $010000010$
3. Invertir + 1: $101111101 + 1$

$$-130 = 101111110_{2}$$` },
        ],
        // N4 — decodificar (dirección inversa)
        [
          { pregunta: String.raw`El byte $11111110_{2}$ está en Ca2. ¿Qué decimal representa?`, respuesta: String.raw`Empieza con 1 → negativo. Invertí + 1 para la magnitud:

$11111110 \to 00000001 \to (+1) \to 00000010 = 2$

$$11111110_{2}\ (\text{Ca2}) = -2_{10}$$

Cross-check: sin signo vale 254; como Ca2, $254-256=-2$.` },
          { pregunta: String.raw`El byte $10110101_{2}$ está en Ca2. ¿Qué decimal representa?`, respuesta: String.raw`$10110101 \to 01001010 \to (+1) \to 01001011 = 75$

$$10110101_{2}\ (\text{Ca2}) = -75_{10}$$` },
        ],
        // N5 — borde del rango (mínimo asimétrico: es su propio Ca2)
        [
          { pregunta: String.raw`Con 4 bits en Ca2, ¿qué decimal es $1000_{2}$?`, respuesta: String.raw`Es el **mínimo** del rango $[-8,\ +7]$. Su Ca2 es él mismo ($1000 \to 0111 \to +1 \to 1000$), por eso no tiene $+8$ simétrico:

$$1000_{2}\ (\text{Ca2}) = -8_{10}$$` },
          { pregunta: String.raw`Con 8 bits en Ca2, ¿qué decimal es $10000000_{2}$?`, respuesta: String.raw`Mínimo del rango $[-128,\ +127]$:

$$10000000_{2}\ (\text{Ca2}) = -128_{10}$$` },
        ],
      ],
    },
    {
      id: "arq-u02-025",
      tipo: "completar",
      dificultad: "media",
      tags: ["complemento-2", "error-comun", "trampa"],
      fuente: ["arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md", "arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md"],
      pregunta: String.raw`El error más común al hacer el Ca2 de un negativo es invertir y sumar 1 sin haber ____ primero, lo que da un resultado ____.`,
      respuesta: String.raw`Sin haber **agregado el bit de signo 0** primero → da un resultado **positivo** cuando se pedía un negativo.

Orden correcto: binario → agregar bit de signo 0 → (si es negativo) invertir y sumar 1.`,
    },
    {
      id: "arq-u02-027",
      tipo: "concepto",
      dificultad: "dificil",
      tags: ["complemento-2", "rango", "gotcha"],
      fuente: ["arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf", "arquitectura-de-computadores/cheatsheets/unidad-02-sistemas-numericos.html"],
      pregunta: String.raw`¿Cuál es el rango de **Ca2** con n bits y por qué es **asimétrico**?`,
      respuesta: String.raw`$$[\,-2^{n-1},\ +2^{n-1}-1\,]$$

El negativo llega **uno más lejos** (ej. 3 bits → $[-4, +3]$).

Motivo: el más negativo es **su propio Ca2** — $\text{Ca2}(100) = 100$ — así que $100 = -4$ no tiene un $+4$ simétrico.`,
    },
    {
      id: "arq-u02-028",
      tipo: "texto",
      dificultad: "media",
      tags: ["complemento-2", "cpu", "sumador"],
      fuente: ["arquitectura-de-computadores/unidad-02-sistemas-numericos/resumen.md", "arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf"],
      pregunta: String.raw`¿Por qué al CPU le conviene Ca2? (la idea del hardware)`,
      respuesta: String.raw`Permite **restar usando el mismo sumador** que suma: $A - B = A + \text{Ca2}(B)$ → no hace falta un restador aparte, ahorra hardware.

**Analogía decimal:** $70 - 30 = 70 + (99-30) + 1 = 140$; descarto el 100 → 40. En binario, restarle algo a $1111$ da ese número **invertido**, así que basta un inversor más sumar 1.`,
    },
    {
      id: "arq-u02-029",
      tipo: "concepto",
      dificultad: "media",
      tags: ["extension-signo", "complemento-2"],
      fuente: ["arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf", "arquitectura-de-computadores/cheatsheets/unidad-02-sistemas-numericos.html"],
      pregunta: String.raw`¿Qué es la **extensión de signo** y cuándo se usa?`,
      respuesta: String.raw`Llevar un número con signo a un ancho mayor (8/16/32/64 bits) **replicando el bit de signo**: rellenar con **1s si es negativo**, con 0s si es positivo.

Ej: $-2$ en 1 byte $= 11111110$. Es lo que hace el CPU para operar en el ancho de su registro.`,
    },

    /* ── Cierre conceptual ─────────────────────────────────────── */
    {
      id: "arq-u02-030",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      tags: ["formato-base", "ambiguedad", "clave"],
      fuente: ["arquitectura-de-computadores/unidad-02-sistemas-numericos/apuntes/sistemas-numericos.pdf", "arquitectura-de-computadores/cheatsheets/unidad-02-sistemas-numericos.html"],
      pregunta: String.raw`¿Qué número es el patrón de bits $11111110$?`,
      opciones: [
        "Siempre es 254",
        "Siempre es −2",
        "Depende del formato y la base: −2 en Ca2 (1 byte), o 254 si es binario sin signo",
        "Es inválido porque empieza con 1",
      ],
      correcta: 2,
      respuesta: String.raw`**Depende del formato + base.** En Ca2 (1 byte) $= -2$; en binario sin signo $= 254$; como decimal sería otra cosa.

Sin saber **formato y base**, un patrón de bits es ambiguo — es el cierre conceptual del apunte.`,
    },
    {
      id: "arq-u02-031",
      tipo: "concepto",
      dificultad: "dificil",
      tags: ["punto-flotante", "trampa", "final"],
      fuente: ["arquitectura-de-computadores/examenes/parcial-2026-1.md", "arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md"],
      pregunta: String.raw`En el parcial pidieron pasar $-19{,}3$ a IEEE-754 y muchos aplicaron Ca2 al negativo. ¿Por qué está mal?`,
      respuesta: String.raw`Porque **Ca2 es solo para enteros con signo**. En **punto flotante** el signo es un **bit de signo aparte** (no se complementa la mantisa) y el exponente va en **exceso 127**.

Aplicar Ca2 ahí es el error típico del A1. (El punto flotante completo se desarrolla en la **Unidad 3**.)`,
    },

  ],
});
