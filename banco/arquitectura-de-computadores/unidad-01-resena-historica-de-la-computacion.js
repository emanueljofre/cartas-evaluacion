/* Mazo — Arquitectura de Computadores · Unidad 01 · Reseña histórica de la computación
   Fuentes: resumen.md + parcial-2026-1.md + preguntas-anunciadas + cheatsheet + apunte + transcripción 2026-06-01.
   Campos de contenido SIEMPRE en String.raw. Alcance: FINAL (incluye el cierre — cuántica, Frontier, GPU/IA). */
FLASHCARDS.deck({
  materia: "arquitectura-de-computadores",
  unidad: "01-resena-historica-de-la-computacion",
  titulo: "Reseña histórica de la computación",
  cards: [

    /* ── Definición y estructura ───────────────────────────────── */
    {
      id: "arq-u01-001",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["definicion", "stallings"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/apuntes/resena-historica-de-la-computacion.pdf"],
      pregunta: String.raw`¿Cómo define **Stallings** a la computadora?`,
      respuesta: String.raw`**Máquina digital electrónica programable** para el tratamiento automático de la información, capaz de **recibirla**, **operar** sobre ella mediante procesos determinados y **suministrar** los resultados.

Los resultados útiles pueden volver a procesarse para generar nuevos resultados.`,
    },
    {
      id: "arq-u01-002",
      tipo: "completar",
      dificultad: "facil",
      tags: ["estructura", "computador"],
      fuente: "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md",
      pregunta: String.raw`Todo computador tiene **cuatro componentes** interconectados por el bus de sistema: ____, ____, ____ y el ____.`,
      respuesta: String.raw`**CPU (UCP)** · **memoria principal (RAM)** · **interfaces de E/S** · **bus de sistema**.

En una PC, el bus de sistema es físicamente la **placa madre**.`,
      pista: String.raw`Uno procesa, uno guarda, uno comunica con periféricos, uno los une.`,
    },
    {
      id: "arq-u01-003",
      tipo: "concepto",
      dificultad: "media",
      tags: ["cpu", "estructura", "clave"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/examenes/parcial-2026-1.md"],
      pregunta: String.raw`¿Cuáles son los componentes internos del **CPU** (no del computador)?`,
      respuesta: String.raw`**Unidad de Control (UC)** + **Unidad Aritmético-Lógica (UAL/ALU)** + **registros** + **bus / interconexión interno**.

⚠️ No confundir con la estructura del **computador** completo (microprocesador + memoria principal + E/S + bus de sistema).`,
    },
    {
      id: "arq-u01-004",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      tags: ["cpu", "trampa", "clave"],
      fuente: ["arquitectura-de-computadores/examenes/parcial-2026-1.md", "arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md"],
      pregunta: String.raw`Te piden la **estructura del CPU**. ¿Cuál es la correcta?`,
      opciones: [
        "Microprocesador + memoria principal + E/S + bus de sistema",
        "UC + UAL + registros + bus interno",
        "UC + memoria RAM + disco + interfaces de E/S",
        "ALU + caché + GPU + bus PCI Express",
      ],
      correcta: 1,
      respuesta: String.raw`La del **CPU** es **UC + UAL + registros + bus interno**. La opción 1 es la del **computador completo**: es el error más frecuente del parcial (corrección 2026-05-11).`,
    },

    /* ── Generaciones y saltos tecnológicos ────────────────────── */
    {
      id: "arq-u01-005",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["generaciones", "circuito-integrado", "clave"],
      fuente: ["arquitectura-de-computadores/examenes/parcial-2026-1.md", "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md"],
      pregunta: String.raw`¿Qué tecnología permitió pasar de la **2ª** a la **3ª** generación?`,
      opciones: ["El transistor", "El circuito integrado", "La válvula de vacío", "El microprocesador"],
      correcta: 1,
      respuesta: String.raw`El **circuito integrado** (Kilby, Texas Instruments, 1958). Memorizá la cadena: 1ª = válvulas, 2ª = transistores, 3ª = CI. El **transistor** fue el salto **1ª→2ª**. Pregunta textual del parcial real (2026-04-27).`,
    },
    {
      id: "arq-u01-006",
      tipo: "completar",
      dificultad: "facil",
      tags: ["generaciones"],
      fuente: "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md",
      pregunta: String.raw`Tecnología base por generación: Gen 1 = ____, Gen 2 = ____, Gen 3 = ____, Gen 4 = ____.`,
      respuesta: String.raw`Gen 1 = **válvulas de vacío** · Gen 2 = **transistores** · Gen 3 = **circuitos integrados** · Gen 4 = **microprocesadores**.

(Gen 0 = dispositivos **mecánicos / electromecánicos**.)`,
    },
    {
      id: "arq-u01-007",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["transistor", "generaciones"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`¿Qué invención marcó el salto de la **1ª** a la **2ª** generación? ¿Quién y cuándo?`,
      respuesta: String.raw`El **transistor**, en **Bell Labs (1947)**, por **Bardeen, Brattain y Shockley** (material: silicio). Reemplazó a la válvula: más robusto, menos calor, menor consumo y tamaño.`,
    },
    {
      id: "arq-u01-008",
      tipo: "completar",
      dificultad: "facil",
      tags: ["generacion-0", "babbage"],
      fuente: "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md",
      pregunta: String.raw`Gen 0: las máquinas **diferencial** y **analítica** (1822/1834) son de ____; la analítica usa tarjetas perforadas de ____; la ____ (1944) tenía 700.000 engranajes.`,
      respuesta: String.raw`**Babbage** · **Jacquard** · **Mark-I** (IBM + Universidad de Harvard).`,
    },

    /* ── Primera generación (válvulas) ─────────────────────────── */
    {
      id: "arq-u01-009",
      tipo: "texto",
      dificultad: "media",
      tags: ["eniac", "primera-generacion"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`¿Qué fue el **ENIAC** (1945) y qué escala tenía?`,
      respuesta: String.raw`Primer computador digital **electrónico de propósito general** (Eckert y Mauchly). Diseñado para calcular **tablas de tiro** de artillería; se programaba conectando cables; lo operaban **6 mujeres**.

**Escala:** 150 kW · 167 m² · 27 toneladas · **17.000 válvulas** · ~5.000 sumas/seg.`,
    },
    {
      id: "arq-u01-010",
      tipo: "concepto",
      dificultad: "media",
      tags: ["abc", "colossus", "primera-generacion"],
      fuente: "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md",
      pregunta: String.raw`¿Qué aportaron la **ABC** y la **Colossus** en la 1ª generación?`,
      respuesta: String.raw`- **ABC** (1937–1942): primera **binaria** con electrónica; separó **cálculo** y **almacenamiento**; no era de propósito general.
- **Colossus** (1944): descifraba la **Enigma**; 2.000+ tubos; al operar dos en simultáneo surge la idea de **computación paralela**.`,
    },
    {
      id: "arq-u01-011",
      tipo: "completar",
      dificultad: "media",
      tags: ["univac", "ibm-701", "ibm-650"],
      fuente: "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md",
      pregunta: String.raw`Máquinas de 1ª gen: la ____ I (1949) se usó en el censo de EEUU; la IBM ____ (1952) fue la 1ª científica comercial de IBM; la IBM ____ (1954) fue la 1ª producida en serie e introdujo la coma flotante.`,
      respuesta: String.raw`**UNIVAC** I · IBM **701** · IBM **650**.`,
    },

    /* ── Von Neumann ───────────────────────────────────────────── */
    {
      id: "arq-u01-012",
      tipo: "texto",
      dificultad: "media",
      tags: ["von-neumann", "memoria", "clave"],
      fuente: ["arquitectura-de-computadores/examenes/parcial-2026-1.md", "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md"],
      pregunta: String.raw`¿Qué característica principal presenta **la memoria** en la arquitectura **Von Neumann**?`,
      respuesta: String.raw`**Datos e instrucciones** se guardan en el **mismo espacio de direcciones** de memoria y se acceden por el **mismo bus**.

⚠️ Respuesta incompleta = no suma (corrección de parcial real, 2026-05-11). No alcanza con "guarda el programa": hay que decir que **comparte el espacio de datos e instrucciones**.`,
    },
    {
      id: "arq-u01-013",
      tipo: "texto",
      dificultad: "media",
      tags: ["von-neumann", "harvard"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`¿En qué se diferencian **Von Neumann** y **Harvard**?`,
      respuesta: String.raw`- **Von Neumann:** **1 bus** y **1 memoria** compartida para datos e instrucciones → cuello de botella (compiten por el bus). Ej.: IBM PC, x86.
- **Harvard:** **2 buses** y **memorias separadas** → se leen en paralelo, sin cuello de botella. Ej.: microcontroladores (PIC, AVR), DSPs.

Los CPU modernos usan **caché L1 separada** (datos / instrucciones) = **Harvard modificado** internamente.`,
    },
    {
      id: "arq-u01-014",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["von-neumann", "edvac", "oral"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`Dato fino (para el oral): ¿**Von Neumann** inventó solo el concepto de programa almacenado?`,
      respuesta: String.raw`No. **Eckert y Mauchly** (los del ENIAC) ya habían documentado la idea de programa almacenado para la **EDVAC**, pero **Von Neumann la publicó primero (1945)** y por eso el modelo lleva su nombre.`,
    },

    /* ── Ley de Moore + circuito integrado ─────────────────────── */
    {
      id: "arq-u01-015",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["ley-de-moore", "clave"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/examenes/parcial-2026-1.md"],
      pregunta: String.raw`Enunciá la **Ley de Moore** y sus **4 consecuencias**.`,
      respuesta: String.raw`**Gordon Moore (1965):** la cantidad de transistores en un chip se **duplica cada ~18 meses**. Surge con el circuito integrado (3ª gen).

**4 consecuencias:**
1. **Baja el costo** de la capacidad de cómputo (más densidad sin subir el precio).
2. **Mayor velocidad** (transistores más chicos y próximos → más frecuencia).
3. **Menor consumo** de energía.
4. **Interconexiones más simples y robustas** (vs las viejas soldaduras).`,
    },
    {
      id: "arq-u01-016",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["ley-de-moore"],
      fuente: "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md",
      pregunta: String.raw`¿Quién enunció la **Ley de Moore**, en qué año, y en qué generación surge?`,
      respuesta: String.raw`**Gordon Moore** (cofundador de Intel), en **1965**. Surge con el **circuito integrado** (3ª generación).`,
    },
    {
      id: "arq-u01-017",
      tipo: "concepto",
      dificultad: "media",
      tags: ["circuito-integrado", "kilby"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`¿Qué es el **circuito integrado** y quién lo creó?`,
      respuesta: String.raw`Múltiples transistores integrados en una sola **pastilla de silicio** (chip). Lo presentó **Jack Kilby** (Texas Instruments, **1958**) con 6 transistores; **Robert Noyce** lo perfeccionó para producción masiva y cofundó **Intel**.`,
    },
    {
      id: "arq-u01-018",
      tipo: "completar",
      dificultad: "media",
      tags: ["miniaturizacion", "ley-de-moore"],
      fuente: ["arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html", "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md"],
      pregunta: String.raw`Miniaturización: un transistor del **386** (1985) medía ~____ nm; uno de un chip actual mide ~____ nm.`,
      respuesta: String.raw`**1.500 nm** → **3 nm**.

La miniaturización (Ley de Moore) permitió ir metiendo dentro del chip primero la **MMU**, luego la **caché**, luego **múltiples núcleos**.`,
    },

    /* ── Tercera generación: IBM S/360 ─────────────────────────── */
    {
      id: "arq-u01-019",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["ibm-s360", "tercera-generacion"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`¿Por qué la **IBM S/360 (1964)** fue tan influyente?`,
      respuesta: String.raw`Fue la primera **familia escalable** con **compatibilidad binaria** entre modelos (el mismo software corría en cualquiera). Aportó:
- **MMU** (Dynamic Address Translator) — memoria protegida.
- **Microprogramación** de la unidad de control.
- **Canales de E/S** dedicados.
- **CP/CMS → VM/CMS**: el **primer sistema de máquina virtual** de la historia.`,
    },

    /* ── Cuarta generación: microprocesadores ──────────────────── */
    {
      id: "arq-u01-020",
      tipo: "ejercicio",
      dificultad: "dificil",
      tags: ["intel", "microprocesadores"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`Armá la línea de tiempo de los **microprocesadores Intel** del 4004 al Pentium (año · bits · hito).`,
      respuesta: String.raw`- **4004** (1971) · 4 bits · **primer microprocesador** (2.300 transistores).
- **8080** (1974) · 8 bits · base del Altair 8800.
- **8086/8088** (1978) · 16 bits · arquitectura **x86**; el 8088 va en la IBM PC.
- **80386** (1985) · 32 bits · **MMU + memoria virtual**; la ISA x86 sigue vigente.
- **80486** (1989) · 32 bits · **caché** integrada + **pipeline**.
- **Pentium** (1993) · 32 bits · primer **superescalar** (2 pipelines).`,
    },
    {
      id: "arq-u01-021",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["intel", "4004"],
      fuente: "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md",
      pregunta: String.raw`¿Qué fue el **Intel 4004** (1971)?`,
      respuesta: String.raw`El **primer microprocesador**: todo el CPU en un solo chip. **4 bits**, 740 KHz, **2.300 transistores**, 16 pines. Fabricado por encargo para una fábrica de **calculadoras japonesas**. Inicia la 4ª generación.`,
    },
    {
      id: "arq-u01-022",
      tipo: "texto",
      dificultad: "media",
      tags: ["ibm-pc", "von-neumann"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`¿Por qué la **IBM PC (1981)** es el ejemplo clásico de **Von Neumann**?`,
      respuesta: String.raw`Usa el **Intel 8088**: programa y datos comparten el **mismo espacio de direcciones** y el **mismo bus**. Hasta **640 KB** de RAM; ~15 ciclos por instrucción = **0,3 MIPS**; corría **MS-DOS**, con ejecución secuencial instrucción por instrucción.`,
    },
    {
      id: "arq-u01-023",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["altair", "apple", "computadora-personal"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`¿Qué fueron el **Altair 8800** y la **Apple I**?`,
      respuesta: String.raw`- **Altair 8800** (MITS, **1975**): basada en Intel 8080, vendida como **kit**; inicia la era de la PC. Gates y Allen le escribieron el BASIC → fundan **Microsoft**.
- **Apple I** (Wozniak y Jobs, **1976**): CPU MOS 6502; **primera** computadora ensamblada **completa en una sola placa madre**; USD 475.`,
    },

    /* ── ARM y software de sistema ─────────────────────────────── */
    {
      id: "arq-u01-024",
      tipo: "concepto",
      dificultad: "media",
      tags: ["arm", "risc", "embebidos"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`¿Qué caracteriza a la arquitectura **ARM** y dónde se usa?`,
      respuesta: String.raw`Arquitectura **RISC** de **bajo consumo** y tamaño reducido, para **sistemas embebidos** (celulares, IoT, autos, cámaras). La diseñan Samsung, Nvidia, Qualcomm, Apple, etc. El **iPhone original (2007)** usó un Samsung ARM 1176JZ de 32 bits a 412 MHz.`,
    },
    {
      id: "arq-u01-025",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["arm", "x86", "risc-cisc"],
      fuente: ["arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html", "arquitectura-de-computadores/repasos/preguntas-anunciadas-por-el-profesor.md"],
      pregunta: String.raw`¿Qué afirmación es correcta sobre **ARM** vs **x86**?`,
      opciones: ["ARM es CISC y x86 es RISC", "ARM es RISC y x86 es CISC", "Ambas son RISC", "Ambas son CISC"],
      correcta: 1,
      respuesta: String.raw`**ARM = RISC** (instrucciones simples, bajo consumo → domina en móviles); **x86 = CISC**. Por su eficiencia energética, ARM se impuso en embebidos y celulares.`,
    },
    {
      id: "arq-u01-026",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["sistema-operativo", "ms-dos", "linux"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`Resumí la historia del **software de sistema operativo** (Microsoft y Linux) según el apunte.`,
      respuesta: String.raw`- **Microsoft (1975):** Gates y Allen; primer producto **Altair BASIC**.
- **MS-DOS / PC-DOS (1981):** para la IBM PC. El contrato **no exclusivo** dejó a Microsoft venderlo a fabricantes de **clones** → dominó el mercado.
- **Windows (1985)** → **2.0 (1987)** con ventanas solapadas → demanda de Apple.
- **Linux:** Tanenbaum escribió **Minix** (1987); **Linus Torvalds** lo reescribió para el **Intel 80386** (memoria virtual); con herramientas **GNU** → clon de UNIX libre.`,
    },

    /* ── Tendencias y vocabulario ──────────────────────────────── */
    {
      id: "arq-u01-027",
      tipo: "completar",
      dificultad: "facil",
      tags: ["quinta-generacion", "tendencias"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`La posible **5ª generación** (no oficial) serían los ____: tamaño de ____ y uso ____ sin necesidad de cursos.`,
      respuesta: String.raw`**smartphones** · de **bolsillo** · **intuitivo**.`,
    },
    {
      id: "arq-u01-028",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["vocabulario", "clave"],
      fuente: "arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/resumen.md",
      pregunta: String.raw`Traducí el **vocabulario informal del profe** al término del apunte: "el procesador", "la pastilla de silicio", "la calculadora del CPU".`,
      respuesta: String.raw`- "el procesador" / "microprocesador" → **UCP / CPU**.
- "la pastilla de silicio" / "la pastilla" → **chip / circuito integrado**.
- "la calculadora del CPU" → **UAL / ALU**.

En el examen escrito usá siempre los términos **formales**.`,
    },
    {
      id: "arq-u01-029",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["eniac", "zuse", "oral"],
      fuente: "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html",
      pregunta: String.raw`¿Por qué se dice que el ENIAC fue el "primer computador de propósito general" si hubo máquinas antes?`,
      opciones: [
        "Porque fue el primero binario",
        "Porque fue el primero electrónico de propósito general (antes hubo electromecánicas como la Z1/Z3 de Zuse)",
        "Porque fue el primero con transistores",
        "Porque fue el primero comercial",
      ],
      correcta: 1,
      respuesta: String.raw`El ENIAC es el primer **electrónico** de propósito general. Konrad **Zuse** ya había hecho en Alemania la **Z1/Z3**, pero eran **electromecánicas**. El apunte lo aclara: "después de la Z1 alemana".`,
    },

    /* ── Cierre que entra al FINAL (nuevas tecnologías) ────────── */
    {
      id: "arq-u01-030",
      tipo: "texto",
      dificultad: "media",
      tags: ["gpu", "ia", "final"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/apuntes/resena-historica-de-la-computacion.pdf", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html", "arquitectura-de-computadores/transcripciones/2026-06-01.md"],
      pregunta: String.raw`¿Qué rol cumplen las **GPU** en la IA actual, según el cierre del apunte? *(entra al final)*`,
      respuesta: String.raw`Modelos como **ChatGPT (OpenAI)** y **Gemini (Google/Microsoft)** se entrenan con grandes **clusters de GPUs en paralelo** (Nvidia, AMD). La **GPU** tiene **procesamiento paralelo muy superior** a la CPU → se volvió el **coprocesador** de las computadoras de alto rendimiento.

🎯 Es "nuevas tecnologías": no entraba al parcial, **sí entra al final**.`,
    },
    {
      id: "arq-u01-031",
      tipo: "concepto",
      dificultad: "media",
      tags: ["cuantica", "ibm-q", "final"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/apuntes/resena-historica-de-la-computacion.pdf", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html", "arquitectura-de-computadores/transcripciones/2026-06-01.md"],
      pregunta: String.raw`¿Qué es el **IBM Q System ONE** y por qué importa para el **final**?`,
      respuesta: String.raw`El **primer ordenador cuántico para uso comercial**, presentado por **IBM en 2019**, de **20 qubits**. Las computadoras cuánticas resuelven **problemas específicos** procesando información **"billones de veces más rápido"** que una convencional.

🎯 Cierre del apunte → **entra al final** (no entraba al parcial). El profe avisó que pregunta "la última parte del apunte".`,
    },
    {
      id: "arq-u01-032",
      tipo: "concepto",
      dificultad: "media",
      tags: ["frontier", "hpc", "final"],
      fuente: ["arquitectura-de-computadores/unidad-01-resena-historica-de-la-computacion/apuntes/resena-historica-de-la-computacion.pdf", "arquitectura-de-computadores/cheatsheets/unidad-01-resena-historica.html"],
      pregunta: String.raw`¿Qué es la supercomputadora **Frontier**? *(cierre — entra al final)*`,
      respuesta: String.raw`Supercomputadora de alto rendimiento del laboratorio **Oak Ridge (EEUU)**: **millones de procesadores** trabajando en conjunto, con consumo de **varios Megawatts**. Muestra que las "computadoras grandes" no desaparecieron: evolucionaron.`,
    },

  ],
});
