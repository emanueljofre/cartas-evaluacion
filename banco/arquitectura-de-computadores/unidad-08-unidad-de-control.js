/* Mazo — Arquitectura de Computadores · Unidad 08 · Unidad de Control
   Generado del repaso de examen (repaso-examen-modulos-08-12.html). */
FLASHCARDS.deck({
  materia: "arquitectura-de-computadores",
  unidad: "08-unidad-de-control",
  titulo: "Unidad de Control",
  cards: [

    /* M8.1 · Función de la UC */
    {
      id: "arq-u08-001",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Cuál es la función de la Unidad de Control (UC)?`,
      respuesta: String.raw`La Unidad de Control (UC/UDC) es la encargada de la **coordinación y administración** de todas las tareas para ejecutar las instrucciones. **Genera todas las señales eléctricas de control**: internas (activan la ALU, FPU, registros) y externas (lectura, escritura). En síntesis: **dirige** el CPU en cada etapa del ciclo de instrucción.

El profe la llama **"el gerente"** (la ALU es "su calculadora"): no calcula, **ordena**. Es uno de los **4 componentes del CPU** (UC + registros + ALU + interconexión interna).`,
      pista: String.raw`No calcula: ordena. "El gerente."`,
      tags: ["unidad-de-control", "definicion", "cpu", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.2 · Niveles de instrucción */
    {
      id: "arq-u08-002",
      tipo: "texto",
      dificultad: "dificil",
      pregunta: String.raw`¿Qué son las instrucciones de alto nivel, las de bajo nivel y las microinstrucciones? ¿Dónde se almacena cada una?`,
      respuesta: String.raw`Tres niveles distintos, cada uno almacenado en un lugar diferente:

- **Alto nivel:** lenguajes como C++, Java, Python (el hardware no las entiende directo; el compilador las traduce). Existen como **archivo fuente en disco**.
- **Bajo nivel / código máquina:** la instrucción en binario/hexadecimal que ejecuta el CPU; se escribe en assembler con **mnemónicos** (ej. \`ADD AX, 5\`) que el ensamblador convierte 1:1 al binario real. Residen en la **memoria principal (RAM)** y se traen de a una al **Registro de Instrucción (IR)**. **Son la cara visible de la ISA** (lo que ve el programador).
- **Microinstrucción:** cada micro-tarea elemental en que la UC descompone una instrucción; forman un **microprograma** almacenado en la **memoria de control (ROM)** dentro de la UC (lo pone el fabricante). Una se ejecuta en ~1 ciclo de reloj. **No son parte de la ISA**: son la implementación interna de la UC (microarquitectura), invisibles al programador y propias de cada CPU — por eso dos CPUs con la misma ISA pueden tener microcódigo distinto, y una UC cableada (ARM/RISC) directamente no las tiene.

Analogía restaurant: cliente pide papas (alto nivel) → mozo lleva el pedido a la cocina (bajo nivel, al IR) → chef = UC dicta tareas → cocineros = circuitos ejecutan cada microinstrucción.`,
      tags: ["niveles-de-instruccion", "microinstruccion", "isa", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.3 · Formato de instrucción */
    {
      id: "arq-u08-003",
      tipo: "ejercicio",
      dificultad: "dificil",
      pregunta: String.raw`¿Cómo es el formato de una instrucción? ¿Cuál es la parte que se decodifica? Desarmá el ejemplo \`MOV AX, 1A3F\` mostrando los campos y los bytes reales.`,
      respuesta: String.raw`Toda instrucción de máquina tiene el formato **[COP][Operando(s)]** — también escrito **[Código de Operación][Objeto]**. Dos partes:

- **COP — Código de Operación** (*OpCode*): indica **QUÉ** operación realizar (mover, sumar, saltar…). Número que identifica de forma única a esa operación dentro del set.
- **Operando(s) / Objeto(s):** indican **SOBRE QUÉ** se opera. Pueden ser un **dato inmediato**, un **registro** o una **dirección de memoria**. Cero, uno o varios.

**La parte que se decodifica es el COP.** El **decodificador** de la UC lo interpreta y genera las **señales de control**. Los operandos *no* se decodifican: se toman tal cual. Según el tamaño, el formato puede ser **fijo** (MIPS), **variable** (VAX) o **combinado** (Intel x86).

**Ejemplo desarmado — \`MOV AX, 1A3F\`** («cargá el valor 1A3F en el registro AX»):
- \`MOV\` → mnemónico de transferencia (copia un dato a un destino).
- \`AX\` → registro acumulador de 16 bits (8086) → destino.
- \`1A3F\` → dato inmediato en hexadecimal → operando que se carga en AX.

$$\text{MOV AX,1A3F} \rightarrow [\text{COP}=B8_{16}]\,[3F_{16}]\,[1A_{16}] = B83F1A_{16}$$

Traducida a **código máquina ocupa 3 bytes**. El **COP es $B8_{16}$** y ya codifica «MOV a AX» (operación + registro destino) — por eso es lo único que se decodifica. Los otros dos bytes ($3F_{16}\,1A_{16}$) son el operando \`1A3F\` guardado en **little-endian** (el byte bajo $3F_{16}$ va primero, después el alto $1A_{16}$).

⚠️ **Trampa:** la computadora **no "busca el COP", busca una instrucción** completa que adentro tiene el COP — el COP no anda suelto en memoria.`,
      tags: ["formato-de-instruccion", "cop", "little-endian", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.5 · Set de instrucciones / ISA */
    {
      id: "arq-u08-004",
      tipo: "concepto",
      dificultad: "dificil",
      pregunta: String.raw`¿Qué es el set de instrucciones o ISA? ¿Dónde se encuentra?`,
      respuesta: String.raw`El **set de instrucciones** es el **repertorio completo de operaciones que el microprocesador puede decodificar y ejecutar** en su circuito físico — el **catálogo de instrucciones** que el hardware "entiende".

La **ISA (Instruction Set Architecture)** es el concepto formal y más amplio: además del set de instrucciones, define los **registros**, los **tipos de datos**, los **modos de direccionamiento** y el **modelo de memoria**. Es la **interfaz (contrato) entre el hardware y el software de bajo nivel** —código máquina y assembler—: a partir de estas instrucciones el programador o el compilador **construyen** los programas (la instrucción es el ladrillo).

**¿Dónde está?** La ISA en sí es una **especificación** (el contrato visible al programador); lo que está **físicamente en la memoria de control (ROM de control)** —dentro de la UC— es el **microprograma que la implementa** (en una UC microprogramada; una UC **cableada** corre la misma ISA sin ROM). ⚠️ El profe lo resume como *«la ISA se encuentra en la ROM de control»*.

Dos ISA distintas (x86 vs ARM) son **incompatibles** (*"como francés y alemán"*), pero un mismo binario corre en cualquier implementación física de la misma ISA. Dos filosofías: **CISC** (muchas instrucciones complejas, x86) vs **RISC** (pocas, simples y uniformes, ARM/RISC-V).`,
      pista: String.raw`Contrato HW↔SW; vive en la ROM de control.`,
      tags: ["isa", "set-de-instrucciones", "cisc-risc", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.4 · UC cableada vs microprogramada */
    {
      id: "arq-u08-005",
      tipo: "concepto",
      dificultad: "dificil",
      pregunta: String.raw`¿Qué es una UC cableada y una microprogramada? ¿Qué diferencia ocurre al decodificar el COP?`,
      respuesta: String.raw`Son las dos formas de implementar la Unidad de Control.

- **Cableada:** usa **circuitos lógicos fijos**. Al decodificar el COP **activa el hardware directamente** (más rápida, poco flexible; típica de RISC/ARM).
- **Microprogramada:** guarda un **microprograma en la memoria de control (ROM)**. El COP decodificado funciona como **dirección de entrada** a ese microprograma, que recién ahí emite las señales (versátil/actualizable, más lenta; x86 son híbridas).

**La diferencia al decodificar el COP:**
- Cableada = COP → hardware directo.
- Microprogramada = COP → dirección → microprograma → señales.

💡 Casi no hay procesadores de escritorio con UC cableada pura: suelen ser **mixtos** (cableada para instrucciones sencillas, microprogramada para complejas).`,
      pista: String.raw`Cableada: COP→hardware. Microprogramada: COP→dirección→microprograma.`,
      tags: ["uc-cableada", "uc-microprogramada", "cop", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.6 · Contador de Programa (PC) */
    {
      id: "arq-u08-006",
      tipo: "opcion-multiple",
      dificultad: "media",
      pregunta: String.raw`¿A dónde apunta el registro Contador de Programa (PC) y qué información contiene?`,
      opciones: [
        String.raw`La instrucción actual que se está decodificando ahora.`,
        String.raw`La dirección de Memoria Principal de la **próxima** instrucción a ejecutar.`,
        String.raw`El dato que la instrucción actual va a procesar.`,
        String.raw`La dirección de la instrucción que se está ejecutando ahora.`,
      ],
      correcta: 1,
      respuesta: String.raw`El **Contador de Programa (PC / Program Counter; también IP)** apunta a la posición de Memoria Principal de la **PRÓXIMA instrucción a ejecutar**. Contiene **la dirección de esa próxima instrucción** — no la instrucción, no el dato, no la dirección de la actual.

En el 8086, PC = **CS:IP**. Modos: normal · salto · indirección.

⚠️ **Trampa del profe (textual):** *"el contador de programa NO tiene la instrucción, tiene la dirección de la PRÓXIMA, no la de ahora, la próxima."* La instrucción actual está en el **IR (Registro de Instrucción)**, no en el PC.`,
      tags: ["contador-de-programa", "pc-vs-ir", "trampa", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.7 · Etapas del ciclo de instrucción */
    {
      id: "arq-u08-007",
      tipo: "texto",
      dificultad: "media",
      pregunta: String.raw`¿Qué etapas tiene el ciclo de instrucción? (Escribilas en castellano completo, como exige la rúbrica.)`,
      respuesta: String.raw`El ciclo de instrucción tiene **cuatro etapas**:

1. **Búsqueda de la instrucción** (*Fetch*): se trae la instrucción desde la Memoria Principal —la posición que apunta el PC— al Registro de Instrucción (IR).
2. **Decodificación** (*Decode*): el decodificador de la UC interpreta el COP y emite las señales de control.
3. **Búsqueda de operandos** (*Operand Fetch*) — **solo si hace falta**: si la instrucción necesita operandos que no lleva adentro, se traen de memoria o registros.
4. **Ejecución** (*Execute*): se realiza la operación (la UC ordena a la ALU si es aritmético-lógica) y se escribe el resultado en el destino.

En el procesador básico la **escritura** del resultado va dentro de la ejecución; con pipeline (Pentium) es una **etapa separada (Escritura / Writeback)**.

📊 **RÚBRICA:** *"No me pongan FI, DI, FO, EX. Escríbanme qué es cada cosa en castellano y completo."* ⚠️ **No confundir con el ciclo de interrupción** (Solicitud → Reconocimiento → Atención → Retorno).`,
      pista: String.raw`Cuatro etapas; la 3ª es condicional.`,
      tags: ["ciclo-de-instruccion", "rubrica", "if-id-of-ex", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.8 · Búsqueda y decodificación */
    {
      id: "arq-u08-008",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Qué ocurre durante la búsqueda (IF) y la decodificación (ID)?`,
      respuesta: String.raw`**Búsqueda (IF):** la UC pone en el **bus de direcciones** la posición que apunta el PC, da señal de **lectura** (bus de control); la instrucción viene por el **bus de datos** al **IR**, y se actualiza el PC.

**Decodificación (ID):** un **decodificador** interpreta el **COP** del IR y emite las señales de control (acá se bifurca cableada/microprogramada).`,
      pista: String.raw`IF: bus de direcciones → lectura → IR. ID: decodificar el COP.`,
      tags: ["ciclo-de-instruccion", "busqueda", "decodificacion"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.9 · ¿Siempre operandos? */
    {
      id: "arq-u08-009",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      pregunta: String.raw`¿Siempre se debe ejecutar la etapa de búsqueda de operandos (OF)? ¿Qué la dispara?`,
      opciones: [
        String.raw`Sí, siempre: toda instrucción necesita traer sus operandos de memoria.`,
        String.raw`No: solo cuando el operando está en memoria (MP). \`[BX]\` la dispara; \`BX\` no.`,
        String.raw`No: solo cuando el operando está en un registro.`,
        String.raw`Sí, salvo en los saltos.`,
      ],
      correcta: 1,
      respuesta: String.raw`**No.** La OF es **ir a leer el operando a la memoria (MP)**; solo se hace cuando el operando **está en memoria**. Si ya está disponible, se omite (decodificación → ejecución directo). Depende del **modo de direccionamiento**:

- **NO necesita OF** (ya disponible) → **implícito** (en el COP, \`INC AX\`), **inmediato** (literal en la instrucción, \`ADD AX, 4\`) y cuando el operando ya está **en un registro** (\`ADD AX, BX\` → acceso interno, no toca la MP).
- **SÍ necesita OF** (está en memoria) → **directo** (\`[120]\`), **indirecto de registro** (\`[BX]\`: el registro tiene la *dirección*, el dato está en MP) e **indirecto** (puntero→puntero, varios accesos).

⚠️ Lo que dispara la OF es que el dato esté **en memoria**: \`BX\` (operando en el registro) → **NO**; \`[BX]\` (lo que BX apunta, en MP) → **SÍ**.`,
      tags: ["busqueda-de-operandos", "direccionamiento", "trampa"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.10 · Ejecución */
    {
      id: "arq-u08-010",
      tipo: "texto",
      dificultad: "media",
      pregunta: String.raw`¿Qué ocurre durante la ejecución (EX)?`,
      respuesta: String.raw`Se realiza la **ejecución propiamente dicha de la instrucción** y el **procesamiento de los datos**. La UC **emite las señales de control** que activan el circuito que corresponda **según el tipo de instrucción**:

- **Aritmética/lógica** (suma, resta, desplazamientos de bits, lógicas): la UC **ordena a la ALU** (dirige, no calcula); los operandos entran a la ALU, que **devuelve el resultado** y **actualiza los flags** del registro de estado.
- **No aritmética/lógica**: se ejecuta **sin ALU** — un **MOV** mueve datos entre registros/memoria, un **salto** carga/modifica el **PC**, una de control (\`CLC\`, \`STI\`) toca flags/estado.

En el procesador básico la **escritura** del resultado va en esta etapa (en el Pentium es aparte), y *cómo* se generan las señales depende de si la UC es **cableada o microprogramada**. Al terminar arranca un **nuevo ciclo** (o el de interrupción si hay solicitud).`,
      tags: ["ejecucion", "alu", "ciclo-de-instruccion"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.11 · Escritura */
    {
      id: "arq-u08-011",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Qué es la escritura (Writeback) luego de la ejecución?`,
      respuesta: String.raw`Es la etapa de **Escritura (Writeback)**: se guarda el **resultado** de la operación en su **destino** — normalmente un **registro**, o una **posición de memoria** (en un *store*).

**No es lo único que cambia:** una operación aritmético/lógica también **actualiza los flags** del registro de estado (CF, ZF, SF, OF…), aunque eso lo hace la **ALU** durante la ejecución.

En el procesador básico la escritura va dentro de la ejecución; con **pipeline** (Pentium) es una etapa separada: **Prefetch → Decode1 → Decode2 → Execute → Writeback**.`,
      pista: String.raw`Guarda el resultado en registro o memoria; los flags los pone la ALU.`,
      tags: ["escritura", "writeback", "flags", "pipeline"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.12 · ¿Cuándo sensa interrupciones? */
    {
      id: "arq-u08-012",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      pregunta: String.raw`¿Cuándo el CPU sensa si hay alguna solicitud de interrupción?`,
      opciones: [
        String.raw`Después de cada microinstrucción.`,
        String.raw`Al final de cada ciclo de instrucción (último pulso de reloj), para las enmascarables; las NMI no esperan.`,
        String.raw`Solo al encender la máquina.`,
        String.raw`Únicamente durante la etapa de búsqueda (IF).`,
      ],
      correcta: 1,
      respuesta: String.raw`Al **final de cada ciclo de instrucción** (último pulso de reloj), la UC chequea si hay una solicitud **enmascarable** pendiente (si el flag IF lo permite). Las **no enmascarables (NMI)** no esperan: suspenden el ciclo en cualquier punto.

🧠 El **DMA** también puede frenar el ciclo en ciertos puntos → *"robo de ciclo"* (es **robo de bus**, **NO una interrupción**: el CPU pierde 1 ciclo pero no salta a ninguna rutina). La interrupción real del DMA llega **al terminar** la transferencia.`,
      tags: ["interrupciones", "nmi", "robo-de-ciclo", "trampa"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.13 · Longitud de palabra del procesador */
    {
      id: "arq-u08-013",
      tipo: "ejercicio",
      dificultad: "media",
      pregunta: String.raw`¿Qué es la longitud de palabra de un CPU (procesador)?`,
      respuesta: String.raw`La **palabra (word) del procesador** es la **unidad normal de datos que el CPU almacena, procesa y transmite** — el ancho del **camino de datos entero: registros de propósito general + ALU**. Su longitud es siempre **múltiplo de 2** y normalmente **múltiplo de 8 bits** (un número entero de bytes). Sus múltiplos con nombre propio son **Double Word (DW)** y **Quad Word (QW)**.

- **8086/8088:** palabra = 1 byte · DW = 16 bits · QW = 32 bits
- **Procesador moderno:** palabra = 64 bits = 8 bytes
- **Primeros procesadores:** 4 y 8 bits

⚠️ **No confundir con la palabra de memoria:** la del **procesador** es cuánto opera/transmite el CPU *de una vez*; la de **memoria** es lo que entra en cada dirección de la RAM. El procesador pide **UNA palabra**; la RAM/caché le trae un **BLOQUE** entero (localidad). En **x86 moderno QWORD = 64 bits**.`,
      pista: String.raw`Ancho del camino de datos: registros GP + ALU. Siempre múltiplo de 8.`,
      tags: ["longitud-de-palabra", "procesador", "trampa"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.13b · Longitud de palabra de memoria */
    {
      id: "arq-u08-014",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Qué es la longitud (tamaño) de palabra de memoria?`,
      respuesta: String.raw`Es la **cantidad de bits almacenados en cada posición direccionable de la memoria principal (RAM)** — una **"fila"** de la matriz de celdas, lo que se **lee o escribe en un acceso a una dirección**.

En las **DRAM** suele ser de **8 bits = 1 byte**: cada palabra de 8 bits está formada por **8 celdas** (en DRAM, 1 MOSFET + 1 capacitor por celda = 1 bit; en SRAM, flip-flops). Se accede con una **dirección binaria** que un **decodificador** traduce a la palabra buscada.

La memoria se organiza en una **matriz de filas × columnas**; cada **fila = una palabra** de $n$ bits accesibles en paralelo.

⚠️ No confundir con el **ancho de la dirección**: esos bits definen *cuántas* posiciones hay ($2^n$), no el tamaño de cada palabra. ⚠️ Distinta de la palabra del procesador: un CPU de 64 bits pide su palabra de 8 bytes, pero la RAM la sirve leyendo varias palabras de memoria y **trae un bloque completo a la caché** (localidad espacial).`,
      pista: String.raw`Bits por posición direccionable de la RAM (una fila de la matriz).`,
      tags: ["longitud-de-palabra", "memoria", "dram", "trampa"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.14 · Capacidad de direccionamiento */
    {
      id: "arq-u08-015",
      tipo: "ejercicio",
      dificultad: "media",
      pregunta: String.raw`¿Cómo se calcula la capacidad de direccionamiento de un CPU? Aplicalo al 8086 (20 líneas de dirección) y a los puertos E/S (16 líneas).`,
      respuesta: String.raw`Las **líneas de dirección** son los **conductores físicos del bus de direcciones**: cada una es un **pin** del microprocesador y transporta **1 bit** de la dirección. Con **$n$ líneas** se forman **$2^n$** combinaciones binarias distintas → **$2^n$ posiciones** direccionables. El $n$ lo fija el hardware (cuántos pines de dirección tiene el chip).

$$\text{8086: } 2^{20} = 1\ \text{Mega} \rightarrow \text{20 líneas (A0–A19)} = 1\ \text{MB de RAM}$$
$$\text{Puertos E/S: } 2^{16} = 64\ \text{K} \rightarrow \text{16 líneas (A0–A15)}$$

No confundir los buses: el **bus de direcciones** dice *QUÉ* posición → fija la capacidad; el **bus de datos** transporta *el contenido* de esa posición; el **bus de control** lleva las señales (lectura/escritura, clock).`,
      pista: String.raw`n líneas → $2^n$ posiciones direccionables.`,
      tags: ["capacidad-de-direccionamiento", "bus-de-direcciones", "8086"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.16 · Intel 80386 */
    {
      id: "arq-u08-016",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Qué características principales introdujo el procesador Intel 80386?`,
      respuesta: String.raw`El **80386 (1985)** introdujo:

- **Arquitectura de 32 bits** (registros, ALU, direccionamiento).
- **MMU** con direccionamiento virtual de **4 GB**.
- **Memoria virtual paginada**.
- **Modo protegido**.

Su set de 32 bits lo mantienen todos los x86. UC microprogramada.

🧠 El profe **no pide dibujar** su diagrama; importa ver cómo el ciclo **IF-ID-OF-EX** está implementado en hardware real.`,
      pista: String.raw`1985: 32 bits, MMU 4 GB, memoria virtual paginada, modo protegido.`,
      tags: ["80386", "32-bits", "mmu", "memoria-virtual"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.15 · Modos de direccionamiento */
    {
      id: "arq-u08-017",
      tipo: "texto",
      dificultad: "dificil",
      pregunta: String.raw`Describí los cinco modos de direccionamiento básicos: implícito, inmediato, directo, indirecto y de registro.`,
      respuesta: String.raw`Indican **cómo la instrucción localiza al operando**. Los cinco básicos:

- **Implícito:** el dato va en el propio COP, sin operando explícito. Ej. \`INC AX\`, \`CLC\`.
- **Inmediato:** el operando es un valor literal que viaja dentro de la instrucción. Ej. \`ADD AX, 4\`.
- **Directo:** el operando es la dirección de memoria donde está el dato. Ej. \`ADD CH, [120]\`.
- **Indirecto:** apunta a una dirección que contiene otra dirección (puntero a puntero); el 8086 **no lo usa**. Ej. —
- **Indirecto de registro:** un registro contiene la *dirección* del operando. Ej. \`ADD DL, [BX]\`.

📊 De los 7 modos del 8086 entran estos **5 básicos**; lo más probable es *"mencióneme 3 modos"*. Los 2 complejos (basado/indexado) **no entran**.`,
      pista: String.raw`Implícito, inmediato, directo, indirecto, indirecto de registro.`,
      tags: ["modos-de-direccionamiento", "8086", "operando"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.17 · Compilado vs interpretado */
    {
      id: "arq-u08-018",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Qué diferencia hay entre un lenguaje compilado y uno interpretado?`,
      respuesta: String.raw`Son dos formas de llevar un programa de **alto nivel** a código que el CPU pueda ejecutar:

- **Compilado:** un **compilador** traduce **todo** el código fuente a código máquina **de una sola vez**, y genera un **ejecutable**. Se traduce una vez y corre muchas → **más rápido** en ejecución. Ej.: C, C++.
- **Interpretado:** un **intérprete** lee y ejecuta el programa **línea por línea** en tiempo de ejecución, sin generar un ejecutable aparte → más portable pero **más lento**. Ej.: Python.

El hardware solo entiende código máquina; lo que cambia es **cuándo** se traduce. Hay **híbridos** (Java/C#): compilan a *bytecode* que corre sobre una máquina virtual.`,
      pista: String.raw`Compilado: todo de una, genera ejecutable. Interpretado: línea por línea.`,
      tags: ["compilado", "interpretado", "lenguajes"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.18 · Compatibilidad de arquitectura y virtualización */
    {
      id: "arq-u08-019",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Un programa compilado para una arquitectura corre en otra? ¿Cómo se logra que sí?`,
      respuesta: String.raw`**No directamente.** El ejecutable está en el **código máquina de una ISA concreta** (ej. x86); otra ISA (ej. ARM) tiene **instrucciones distintas** → son **incompatibles** (*"como francés y alemán"*).

Para correrlo igual se usa **virtualización**: una capa de software (**máquina virtual** / emulador) que **traduce o interpreta** las instrucciones de la arquitectura origen sobre la de destino. Ejemplo clásico: la **JVM** ejecuta el mismo *bytecode* Java en cualquier plataforma que tenga una JVM.

🧠 La portabilidad la da la VM, **no** el binario. (Rosetta 2 de Apple traduce x86→ARM con el mismo principio.)`,
      pista: String.raw`No directamente: hace falta una VM/emulador que traduzca la ISA.`,
      tags: ["virtualizacion", "compatibilidad", "isa", "jvm"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

    /* M8.19 · Hertz y operaciones por segundo */
    {
      id: "arq-u08-020",
      tipo: "ejercicio",
      dificultad: "media",
      pregunta: String.raw`¿Qué es un Hertz? Si un CPU corre a 4 GHz y una suma tarda 4 ciclos, ¿cuántas sumas por segundo hace?`,
      respuesta: String.raw`Un **Hertz (Hz)** es **un ciclo (una oscilación) por segundo**; mide la **frecuencia** del reloj. $1\ \text{GHz} = 10^9$ ciclos/segundo.

Cálculo por regla de tres:

$$\text{operaciones/s} = \frac{\text{frecuencia (ciclos/s)}}{\text{ciclos por operación (CPI)}}$$
$$= \frac{4 \times 10^9\ \text{ciclos/s}}{4\ \text{ciclos/suma}} = 10^9 = 1.000.000.000\ \text{sumas/segundo}$$

🧠 Es la base del **IPC**: acá 1 suma = 4 ciclos → IPC 0,25; con el pipeline lleno = 1 ciclo → IPC 1. La frecuencia la genera el **oscilador de cristal** de la placa.`,
      pista: String.raw`Hz = 1 ciclo/s. ops/s = frecuencia ÷ ciclos por operación.`,
      tags: ["hertz", "frecuencia", "cpi", "rendimiento"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },

  ],
});
