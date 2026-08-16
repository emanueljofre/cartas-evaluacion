/* Mazo — Arquitectura de Computadores · Unidad 09 · Paralelismo y procesadores de alta prestación
   Generado del repaso de examen (repaso-examen-modulos-08-12.html).
   Bloques del sistema «Manual»: `> [!prof|trampa|vale|exam|nota|fx] tag`.
   Nada de emoji como identificador de bloque (ver card-schema.md § Bloques). */
FLASHCARDS.deck({
  materia: "arquitectura-de-computadores",
  unidad: "09-paralelismo-y-procesadores",
  titulo: "Paralelismo y procesadores",
  cards: [
    {
      id: "arq-u09-001",
      tipo: "concepto",
      dificultad: "media",
      tags: ["pipeline", "paralelismo", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué diferencia hay entre un procesador **sin pipeline** y uno **con pipeline**? ¿Qué es y qué ventaja tiene?`,
      pista: String.raw`Pensá en la línea de montaje de Henry Ford: etapas que solapan tiempos.`,
      respuesta: String.raw`Un **pipeline** (cauce segmentado / vía de ejecución) es la **división del circuito del ciclo de instrucción en etapas independientes que solapan tiempos** para trabajar en paralelo.

- **Sin pipeline:** ejecuta las 4 etapas de una instrucción y recién ahí empieza la siguiente; mientras una etapa trabaja, las otras están ociosas → **5 sumas = 20 ciclos**.
- **Con pipeline:** etapas independientes en paralelo (una ejecuta mientras otra decodifica y otra busca) → **5 sumas = 8 ciclos** (4 para llenar + 1 c/u).

**Ventaja:** con el pipeline lleno se completa ~1 instrucción por ciclo en vez de 1 cada 4.

> [!nota]
> Analogía de Henry Ford: una vez entregado el primer auto, cada siguiente tarda mucho menos. **Sinónimos:** pipeline = cauce segmentado = vía de ejecución.`,
    },
    {
      id: "arq-u09-002",
      tipo: "ejercicio",
      dificultad: "media",
      tags: ["ipc", "rendimiento", "pipeline"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué es el **IPC**? Calculá el IPC de un procesador **sin pipeline** donde cada instrucción tarda 4 ciclos, y el de uno **con pipeline lleno**.`,
      pista: String.raw`IPC = instrucciones completadas ÷ ciclos de reloj.`,
      respuesta: String.raw`El **IPC (Instructions Per Clock)** es la métrica que mide el rendimiento del procesador: el **promedio de instrucciones completadas por ciclo de reloj**. A más IPC, más rendimiento.

**Sin pipeline** (1 instrucción = 4 ciclos):
$$IPC = \frac{1 \text{ instrucción}}{4 \text{ ciclos}} = 0{,}25$$

**Con pipeline lleno** (se completa 1 instrucción por ciclo):
$$IPC = \frac{1 \text{ instrucción}}{1 \text{ ciclo}} = 1 \quad (4\times \text{ más rápido})$$

> [!nota]
> Un superescalar (varios pipelines) llega a **IPC > 1**: ej. 2 pipelines → IPC máx teórico = 2.`,
    },
    {
      id: "arq-u09-003",
      tipo: "concepto",
      dificultad: "media",
      tags: ["superpipelining", "frecuencia", "pipeline"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué es el **superpipelining**?`,
      pista: String.raw`Más etapas, pero más pequeñas.`,
      respuesta: String.raw`Dividir el pipeline en un **número mayor de etapas más pequeñas**, para trabajar con más instrucciones a la vez y **poder elevar la frecuencia** del CPU.

> [!nota]
> Como la frecuencia la limita la etapa más larga, subdividir cada etapa (más cortas) permite subir el reloj.

**Contra:** más transistores → más consumo/calor. Ej. Pentium 4: 20–31 etapas ("consumía como un dragón").`,
    },
    {
      id: "arq-u09-004",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      tags: ["paralelismo", "trampa", "superescalar"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`**Trampa:** ¿qué tipo de paralelismo da el **pipeline** y cuál implementa un **procesador superescalar**?`,
      opciones: [
        String.raw`El pipeline da paralelismo **temporal** (1 resultado/ciclo) y el superescalar da paralelismo **espacial** (N resultados/ciclo).`,
        String.raw`El pipeline da paralelismo **espacial** (N resultados/ciclo) y el superescalar da paralelismo **temporal** (1 resultado/ciclo).`,
        String.raw`Ambos dan paralelismo **temporal**: solapan tiempos en una sola vía de ejecución.`,
        String.raw`Ambos dan paralelismo **espacial**: replican varias vías físicas de ejecución.`,
      ],
      correcta: 0,
      respuesta: String.raw`El **pipeline** da **paralelismo temporal**: solapa tiempos en una sola vía de ejecución → la última etapa entrega **1 resultado por ciclo** (IPC máx 1). Por más larga que sea la vía, siempre 1 número por ciclo.

El **superescalar** da **paralelismo espacial**: varios pipelines en el espacio físico (= **ILP**) → **N resultados por ciclo**; y además **combina ambos** (temporal dentro de cada vía + espacial entre las vías).

> [!trampa]
> El profe avisó que en los exámenes "ponen cruzado los tipos de paralelismos". Pregunta clave: ¿cuántos números calculo por ciclo? **Temporal = 1 · Espacial = N**.

ILP = *Instruction-Level Parallelism* (paralelismo a nivel de instrucciones).`,
    },
    {
      id: "arq-u09-005",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["superescalar", "ilp", "escalar"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué es un **procesador superescalar**?`,
      pista: String.raw`Más de un escalar (número) por ciclo.`,
      respuesta: String.raw`El que **calcula más de un escalar (número) por ciclo de reloj**, teniendo **varios pipelines de ejecución en paralelo**.

> [!nota]
> Un **escalar** = cantidad definida por un solo número y una unidad (un 5, un 8). Analogía del profe: "un pulpo con calculadoras en cada tentáculo".`,
    },
    {
      id: "arq-u09-006",
      tipo: "texto",
      dificultad: "media",
      tags: ["pentium", "superescalar", "harvard"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Por qué el **Intel Pentium (1993)** era un procesador superescalar?`,
      pista: String.raw`2 ALUs, bus de datos, arquitectura de caché.`,
      respuesta: String.raw`El **Pentium (1993)** tenía **2 pipelines de enteros (U y V) con 2 ALUs** → ejecutaba **2 instrucciones de 32 bits a la vez** (por eso su **bus de datos era de 64 bits**); y tenía **arquitectura Harvard** (caché de código y de datos separados).

Fue el **primer superescalar de Intel**.

> [!vale]
> No pide los 3,1 millones de transistores, pero sí que era superescalar, 2 ALUs, bus de 64 bits, Harvard. (No hacía ejecución fuera de orden: era "obediente".)`,
    },
    {
      id: "arq-u09-007",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["pipeline", "hazards", "examen"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Cuáles son los **tipos de problemas** que ocurren al implementar un pipeline? Da un ejemplo y la solución de cada uno.`,
      pista: String.raw`Son tres: datos, control y estructura.`,
      respuesta: String.raw`Hay **tres tipos de problemas**, cada uno con su solución:

**1 · DATOS** — una instrucción necesita el **resultado de otra anterior** que no terminó (ej. R4 = R2+R3 con R2 de la previa) → **burbujas**.
- Solución: **forwarding** (pasa el resultado de la ALU directo a la instrucción que lo espera, sin aguardar el Writeback), **registros de renombramiento** (físicos extra que evitan falsas dependencias) y/o **ejecución fuera de orden**.

**2 · CONTROL** — un **salto condicional**: no se sabe qué instrucción cargar hasta evaluar la condición → si se vacía el pipeline, ciclos perdidos.
- Solución: **predictores de saltos** (estáticos = regla fija; **dinámicos** = por historial, >95%, con **BTB** que guarda el destino); si fallan, se descarta lo especulado.

**3 · ESTRUCTURA** — varias instrucciones quieren la **misma unidad ocupada** (ej. raíz cuadrada en la FPU) → esperan.
- Solución: **más unidades funcionales** (duplicar ALUs/FPUs).

> [!vale]
> Enumerar los 3 tipos, dar un ejemplo y la solución de cada uno. Omitir uno = perder puntaje.

BTB = *Branch Target Buffer* · FPU = Unidad de Punto Flotante.`,
    },
    {
      id: "arq-u09-008",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["flynn", "taxonomia", "mimd"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`Según la **Taxonomía de Flynn**, ¿qué clasificación tienen el **Intel 386** y los **procesadores modernos** (multinúcleo)?`,
      opciones: [
        String.raw`386 = **SISD** · modernos = **MIMD**`,
        String.raw`386 = **SIMD** · modernos = **MISD**`,
        String.raw`386 = **MIMD** · modernos = **SISD**`,
        String.raw`386 = **SISD** · modernos = **SIMD**`,
      ],
      correcta: 0,
      respuesta: String.raw`La **Taxonomía de Flynn** (Michael Flynn) clasifica las arquitecturas según **el flujo de instrucciones y el flujo de datos** (una/varias instrucciones × uno/varios datos) → cuatro tipos:

- **SISD** — 1 instrucción, 1 dato → **Intel 386**, 486, Pentium original.
- **SIMD** — 1 instrucción, muchos datos → SSE/AVX/AVX-512, GPUs, MMX.
- **MISD** — muchas instrucciones, 1 dato → no implementado comercialmente.
- **MIMD** — muchas instrucciones, muchos datos → **procesadores modernos** (multinúcleo).

Entonces: el **386 es SISD** y los **modernos son MIMD**.

> [!nota]
> Los modernos son MIMD a nivel de núcleos, pero cada núcleo incorpora **unidades SIMD** (MMX/SSE/AVX) para operaciones vectoriales.

S/M-I-S/M-D = *Single/Multiple Instruction, Single/Multiple Data*.`,
    },
    {
      id: "arq-u09-009",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["smp", "multiprocesamiento", "uma"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué es el **multiprocesamiento simétrico (SMP)**? Nombrá sus **5 características**.`,
      pista: String.raw`Procesadores iguales + memoria compartida + un solo SO.`,
      respuesta: String.raw`Es una arquitectura con **dos o más procesadores de características similares** que comparten el **mismo espacio de memoria principal y de E/S**, con tiempos de acceso similares, donde todos ejecutan las mismas funciones bajo un **único sistema operativo**. Es **transparente al usuario** (ve una sola máquina).

**Las 5 características:**
1. 2 o más procesadores similares.
2. Comparten memoria y E/S.
3. Tiempos de acceso similares a la MP.
4. Todos ejecutan las mismas funciones.
5. Un único Sistema Operativo.

> [!nota]
> El bus compartido es el cuello de botella → se mitiga con cachés L1/L2/L3. Los SMP son **UMA**.`,
    },
    {
      id: "arq-u09-010",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["smp", "amp", "multiprocesamiento"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué diferencia hay entre multiprocesamiento **simétrico (SMP)** y **asimétrico (AMP)**?`,
      opciones: [
        String.raw`SMP: núcleos **iguales**, sin maestro, un único SO los trata por igual. AMP: núcleos con **roles/capacidades distintos**, con un maestro que reparte trabajo.`,
        String.raw`SMP: un núcleo **maestro** reparte trabajo a núcleos especializados. AMP: todos los núcleos son **idénticos** y equivalentes.`,
        String.raw`SMP: cada núcleo corre **su propio SO**. AMP: todos comparten **un único SO**.`,
        String.raw`SMP: núcleos en **chips separados** por red. AMP: núcleos en **un mismo chip**.`,
      ],
      correcta: 0,
      respuesta: String.raw`**Simétrico (SMP):** procesadores/núcleos **pares (iguales)**; cualquier tarea puede ir a cualquier núcleo, gobernados por un **único SO** que los trata por igual, **sin maestro**. Ej.: multinúcleo homogéneo (Core i7).

**Asimétrico (AMP):** procesadores con **roles o capacidades distintos** — un núcleo **maestro** reparte trabajo a núcleos especializados, o núcleos de distinto tipo. Ej.: **PS3 / Cell** (1 PPE maestro + SPEs vectoriales); **núcleos de rendimiento vs eficiencia** (P/E-cores, big.LITTLE).

SMP = *Symmetric Multiprocessing* · AMP = *Asymmetric Multiprocessing*.`,
    },
    {
      id: "arq-u09-011",
      tipo: "concepto",
      dificultad: "media",
      tags: ["clusters", "numa", "raid"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué son los **Clusters** y en qué se diferencian del SMP?`,
      pista: String.raw`Computadoras completas (nodos) unidas por LAN.`,
      respuesta: String.raw`Conjunto de **computadoras completas interconectadas** por una **red de área local** (LAN: fibra o Ethernet de alta velocidad) que trabajan como una sola **mega-computadora**. Cada computadora es un **nodo**.

A diferencia del **SMP**, cada nodo es una **máquina entera con su propio procesador, memoria y sistema operativo** (no hay un SO único que los gobierne). Lo que **sí comparten** es el **almacenamiento** (típicamente **RAID**) por la red. El acceso a memoria es **NUMA** (heterogéneo), frente al **UMA** uniforme del SMP.

> [!nota]
> **Acoplamiento débil** (vs el fuerte del SMP). **RAID**: arreglo de discos con uno redundante: si uno falla, se reconstruyen los datos. Escalan a millones de núcleos (supercomputadoras).

LAN = *Local Area Network* · RAID = *Redundant Array of Independent Disks*.`,
    },
    {
      id: "arq-u09-012",
      tipo: "opcion-multiple",
      dificultad: "facil",
      tags: ["uma", "numa", "memoria"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué diferencia hay entre el acceso a memoria **UMA** y **NUMA**?`,
      opciones: [
        String.raw`**UMA:** mismo tiempo de acceso a cualquier región para todos (SMP). **NUMA:** el tiempo depende de la región/nodo (clusters).`,
        String.raw`**UMA:** el tiempo depende de la región/nodo (clusters). **NUMA:** mismo tiempo de acceso para todos (SMP).`,
        String.raw`**UMA:** memoria sin caché. **NUMA:** memoria con caché coherente.`,
        String.raw`**UMA:** memoria de un solo procesador. **NUMA:** memoria de varios procesadores idénticos.`,
      ],
      correcta: 0,
      respuesta: String.raw`En un sistema **MIMD** (multiprocesador), varios procesadores acceden a memoria; según si ese acceso tarda lo mismo o varía:

- **UMA** (uniforme): **mismo tiempo de acceso** a cualquier región para todos los procesadores (típico de **SMP**).
- **NUMA** (no uniforme): el tiempo **depende de la región** de memoria / del nodo (típico de **clusters**).

> [!nota]
> **CC-NUMA** = NUMA + coherencia de caché.

UMA/NUMA = *(Non-)Uniform Memory Access*.`,
    },
    {
      id: "arq-u09-013",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["cisc", "risc", "isa"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Cuál describe correctamente la diferencia entre **CISC** y **RISC**?`,
      opciones: [
        String.raw`**CISC:** instrucciones complejas, longitud variable, UC microprogramada (x86). **RISC:** instrucciones simples (~1 ciclo), longitud fija, acceso a memoria solo con LOAD/STORE, UC cableada (ARM).`,
        String.raw`**CISC:** instrucciones simples de longitud fija, UC cableada. **RISC:** instrucciones complejas de longitud variable, UC microprogramada.`,
        String.raw`**CISC:** solo accede a memoria con LOAD/STORE. **RISC:** accede a memoria desde cualquier instrucción.`,
        String.raw`Son idénticas en diseño; solo cambia el fabricante (Intel vs ARM).`,
      ],
      correcta: 0,
      respuesta: String.raw`**CISC** (*Complex Instruction Set*): instrucciones **complejas** (muchas micro-tareas en una), de **longitud variable**, muchos modos de direccionamiento, acceso a memoria desde varias instrucciones y UC **microprogramada** (ej. x86).

**RISC** (*Reduced Instruction Set*): instrucciones **simples** (~1 ciclo), de **longitud fija**, pocos modos, acceso a memoria solo con **LOAD/STORE** y UC **cableada** (ej. ARM).

> [!nota]
> Hoy **convergieron**: los CISC traducen internamente sus instrucciones a **micro-ops tipo RISC** → conecta con el Front End del pipeline moderno.`,
    },
    {
      id: "arq-u09-014",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["pipeline-moderno", "front-end", "examen"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Cuál es el **pipeline de un procesador moderno**? Describí el **Front End** y el **Back End** (motor de ejecución).`,
      pista: String.raw`Front End en orden (CISC→RISC); Back End fuera de orden + ROB.`,
      respuesta: String.raw`El procesador moderno se parte en dos:

**FRONT END · búsqueda + decodificación + asignación** — convierte las instrucciones **CISC en 1–4 micro-ops tipo RISC** y las entrega **en orden**:
1. Búsqueda (caché L1)
2. Cola de instrucciones
3. Predecodificación
4. Decodificación (+ caché de micro-ops)
5. Asignación (allocator)

**BACK END · motor de ejecución** — ejecuta **fuera de orden** según el flujo de datos y, con el **ROB**, reordena las escrituras al orden original:
6. ROB (Reorder Buffer): guarda el orden original
7. Ventana / estación de reserva (despachantes → puertos)
8. Ejecución (en las unidades, según flujo de datos)
9. Retiro: el ROB escribe en el **orden original**

ROB = *Reorder Buffer* · CISC = *Complex Instruction Set Computing*.`,
    },
    {
      id: "arq-u09-015",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["back-end", "rob", "buffers"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué **buffers** tiene el **Back End** del pipeline moderno?`,
      pista: String.raw`Son tres: el clave del OoO, el de despacho y el de forwarding.`,
      respuesta: String.raw`El back end ejecuta **fuera de orden** apoyándose en **tres buffers**:

- **ROB — Reorder Buffer (buffer de reordenamiento):** las micro-ops **entran en orden** y guarda el **orden original del programa**; al retirar, reordena las escrituras finales a ese orden. Es el buffer **clave del OoO**.
- **Ventana de instrucciones / Estación de reserva** (*reservation station*): aloja las micro-ops **esperando despacho**; los despachantes (*schedulers*) las envían **fuera de orden** por los **puertos** a las unidades de ejecución.
- **Buffer de almacenamiento** (*store buffer*): registros temporales que sostienen resultados intermedios para el **forwarding** entre instrucciones.

> [!trampa] No confundir
> Esos son del **Back End**. Los del **Front End** son otros (cola de instrucciones, caché de micro-ops, BPU + BTB). El **Allocator** es la frontera entre ambos.

ROB = *Reorder Buffer* · BPU = *Branch Prediction Unit* · BTB = *Branch Target Buffer* · OoO = *Out of Order*.`,
    },
    {
      id: "arq-u09-016",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["rob", "reordenamiento", "examen"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Por qué los datos se **vuelven a ordenar** después de ser procesados por el Back End?`,
      pista: String.raw`Pensá en cómo debe quedar la memoria respecto al programa.`,
      respuesta: String.raw`Porque el Back End ejecuta las micro-ops **fuera de orden** (según el flujo de datos), pero el resultado debe **escribirse en caché y luego en memoria en el orden original que el programador puso**.

El **ROB (Reorder Buffer)** anotó el orden de entrada y, al **retirar** (etapa 9), reordena las escrituras a ese orden. Si se escribiera en el orden caótico de ejecución, el **estado de memoria quedaría inconsistente** con lo que el programa especificó.

En síntesis: **se reordenan para escribirse en memoria respetando la semántica secuencial del programa.**

> [!nota]
> Si piden profundizar, reordenar también habilita **excepciones precisas** (saber en qué instrucción frenar) y **revertir la especulación** (descartar un salto mal predicho antes de escribir).

ROB = *Reorder Buffer* · OoO = *Out of Order*.`,
    },
    {
      id: "arq-u09-017",
      tipo: "concepto",
      dificultad: "media",
      tags: ["ooo", "ejecucion-fuera-de-orden", "datos"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Cómo se implementa la **ejecución fuera de orden (OoO)** para acelerar el cómputo?`,
      pista: String.raw`Analiza dependencias del flujo de datos y adelanta independientes.`,
      respuesta: String.raw`El procesador **analiza las dependencias del flujo de datos**: si una instrucción depende de un resultado no listo, ejecuta **otras independientes posteriores**; cuando el dato está listo, ejecuta la dependiente. Las **escrituras se reordenan al orden original** (ROB). Usa forwarding + registros de renombramiento.

> [!nota]
> "Le digo A,B,C,D y el procesador hace A,C,B,D" = procesadores "desobedientes". Resuelve el problema de datos.

OoO = *Out of Order*.`,
    },
    {
      id: "arq-u09-018",
      tipo: "texto",
      dificultad: "media",
      tags: ["unidades-de-ejecucion", "alu", "superescalar"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué tipo de **unidades de ejecución** poseen los procesadores modernos?`,
      pista: String.raw`Funcionales especializadas; tener muchas habilita el ILP.`,
      respuesta: String.raw`Múltiples **unidades funcionales especializadas** — tener muchas es lo que habilita el paralelismo espacial (superescalar):

- **ALU** · enteros
- **FPU** · punto flotante
- **SIMD** · vectorial (MMX/SSE/AVX/AVX-512, 64–512 bits)
- **FMA** · multiplicación+suma fusionadas
- **LEA** · cálculo de direcciones/punteros · **SHIFT** · corrimiento de bits
- **BRANCH** · saltos · **AGU** · genera direcciones (load/store)
- **ADD/MUL/DIV** · enteros · **AMX** · matrices (IA/cripto)

> [!nota]
> Un Golden Cove tiene ~5 ALUs por núcleo → habilita el paralelismo espacial.`,
    },
    {
      id: "arq-u09-019",
      tipo: "concepto",
      dificultad: "media",
      tags: ["multithreading", "hyper-threading", "hilos"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué es el procesamiento **multithreading**?`,
      pista: String.raw`Aprovechar las burbujas con instrucciones de otro hilo.`,
      respuesta: String.raw`El Front End envía **2+ hilos** a ejecución, aprovechando las **burbujas** del pipeline con instrucciones de otro proceso. El procesador físico se presenta al SO como **2+ procesadores lógicos** (i9 de 8 núcleos → el SO ve 16).

> [!nota]
> Nombre comercial Intel: **Hyper-Threading** (Pentium 4 HT, 2002). Contra: más registros/consumo.`,
    },
    {
      id: "arq-u09-020",
      tipo: "concepto",
      dificultad: "media",
      tags: ["multinucleo", "smp", "p-cores"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué **arquitecturas multinúcleo** conocés?`,
      pista: String.raw`Un chip con N núcleos: homogéneas vs heterogéneas.`,
      respuesta: String.raw`Una arquitectura multinúcleo es **un solo chip con 2 o más núcleos** interconectados — cada uno con caché **L1 (Harvard) + L2** propia y una **L3 compartida**; internamente implementa **SMP**. Según el tipo de núcleos:

- **Homogéneas (simétricas):** todos los núcleos **idénticos** (ej. Core 2, Core i7).
- **Heterogéneas (asimétricas):** mezclan **núcleos de rendimiento + de eficiencia** — Intel **P-cores + E-cores** (i9-12900K: 8 P Golden Cove + 8 E Gracemont) y **big.LITTLE** de ARM (ej. Samsung S4 octacore, 2013).

> [!nota]
> Otra clasificación, por **empaquetado**: **monolítica** (todos los núcleos en un solo die) vs **chiplet/MCM** (varios dies interconectados).`,
    },
    {
      id: "arq-u09-021",
      tipo: "concepto",
      dificultad: "media",
      tags: ["chiplet", "mcm", "empaquetado"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Cuál es el concepto de **Chiplet** o **MCM**?`,
      pista: String.raw`Analogía de la pizza: varios chips chicos en un paquete.`,
      respuesta: String.raw`Un **MCM (Multi-Chip Module)** es un "procesador" hecho de **varios chips interconectados** en el mismo paquete. Cada chiplet: **CCD** (núcleos) e **IOD** (E/S).

> [!nota]
> Ventaja (analogía pizza): chips pequeños fallan menos en fabricación (mayor yield); si uno sale mal se descarta solo ese. Permite mezclar tecnologías (CCD 7nm + IOD 12nm). Ej. AMD Ryzen. Intel lo llama TILE.

MCM = *Multi-Chip Module* · CCD = *Core Complex Die* · IOD = *Input/Output Die*.`,
    },
    {
      id: "arq-u09-022",
      tipo: "texto",
      dificultad: "media",
      tags: ["proceso", "hilo", "ilp-tlp"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué diferencia hay entre **instrucción, programa, proceso e hilo**? ¿Cómo conecta con el ILP y el TLP?`,
      pista: String.raw`Cuatro niveles que se anidan.`,
      respuesta: String.raw`Son **cuatro niveles que se anidan**:

- **Instrucción:** operación mínima del CPU (sumar, leer memoria); se ejecuta en el pipeline.
- **Programa:** **archivo en disco** (código estático, pasivo).
- **Proceso:** ese programa **en ejecución**, con su propio espacio de memoria; vivo, aislado de otros procesos.
- **Hilo:** **flujo secuencial de instrucciones dentro de un proceso**; comparte la memoria del proceso. Un proceso tiene al menos un hilo y puede tener varios.

> [!nota]
> El **superescalar** exprime **UN** hilo (varias instrucciones del mismo flujo por ciclo = **ILP**). El **multinúcleo** corre **VARIOS** hilos a la vez (**TLP**). Los hilos comparten memoria (rápido, pero hay que sincronizar → *race conditions*); los procesos están aislados.

ILP = *Instruction-Level Parallelism* · TLP = *Thread-Level Parallelism*.`,
    },
    {
      id: "arq-u09-023",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["sintesis", "pipeline", "multinucleo"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿En qué se diferencian **pipeline, superpipelining, superescalar y multinúcleo**?`,
      pista: String.raw`La pregunta que no falla: ¿cuántos resultados por ciclo?`,
      respuesta: String.raw`Son **tres movimientos** sobre el mismo pipeline base (no compiten: un CPU moderno usa los tres a la vez):

- **Pipeline:** dividir el ciclo en etapas que se solapan → paralelismo **temporal**, 1 resultado/ciclo (IPC máx 1).
- **Superpipelining:** el mismo pipeline **más profundo** (más etapas → más GHz) → sigue **temporal**, 1/ciclo. Ej. Pentium 4 (20–31).
- **Superescalar:** **más ancho**, varias vías en paralelo → paralelismo **espacial / ILP**, N resultados/ciclo (IPC máx N). Ej. Pentium 1993 (2 ALUs).
- **Multinúcleo:** **replica el núcleo entero** → paralelismo **de hilo / TLP**, varios hilos a la vez (IPC máx N × núcleos). Ej. Core 2 · i7.

> [!trampa]
> Conecta con la trampa: pipeline/superpipeline = **temporal** (1/ciclo) · superescalar = **espacial** (N/ciclo) · multinúcleo = **de hilo**. La pregunta que no falla: **¿cuántos resultados por ciclo?**

ILP = *Instruction-Level Parallelism* · TLP = *Thread-Level Parallelism* · IPC = *Instructions Per Clock*.`,
    },
  ],
});
