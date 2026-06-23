/* Mazo — Arquitectura de Computadores · Unidad 12 · Interrupciones y excepciones
   Generado del repaso de examen (repaso-examen-modulos-08-12.html). */
FLASHCARDS.deck({
  materia: "arquitectura-de-computadores",
  unidad: "12-interrupciones-y-excepciones",
  titulo: "Interrupciones y excepciones",
  cards: [
    {
      id: "arq-u12-001",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Qué diferencia hay entre las **interrupciones** y las **excepciones**?`,
      respuesta: String.raw`- **Interrupciones = HARDWARE**: las causa un evento **externo** e **impredecible**. Se subdividen en **enmascarables** (INTR) y **no enmascarables** (NMI).
- **Excepciones = SOFTWARE**, internas. Pueden ser **detectadas por el procesador** (error al ejecutar una instrucción, ej. división por 0) o **programadas** ("pseudo-interrupciones": $INT3$, $INTO$, $INT\ XX_{16}$).

Diferencia central: la interrupción es de **hardware / externa / impredecible**; la excepción es de **software / interna** (y las programadas son **predecibles**). La rutina que atiende cualquiera de ellas es la **ISR** (*Interrupt Service Routine*, Rutina de Servicio de la Interrupción).`,
      pista: String.raw`Una es por evento físico externo; la otra la genera el propio software dentro del CPU.`,
      tags: ["clave", "interrupciones", "excepciones"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-002",
      tipo: "texto",
      dificultad: "dificil",
      pregunta: String.raw`¿Cuáles son las **4 etapas** del ciclo de las interrupciones **enmascarables**? Describí cada una.`,
      respuesta: String.raw`El ciclo de interrupción tiene **cuatro etapas**:

1. **Solicitud (Request)** — el dispositivo envía la señal **INTR** a un pin del CPU. ("le toca timbre")
2. **Reconocimiento (Acknowledge)** — el CPU **termina la instrucción en curso**, responde **INTA**, pone **IF=0**, lee el **Tipo** (1 byte), accede a la **IVT** y hace **PUSH** del Contador de Programa (CS:IP) + las banderas. Es la más complicada.
3. **Atención** — carga la dirección de la ISR en el contador de programa y **ejecuta la ISR**.
4. **Retorno** — la instrucción **IRET** hace **POP** (recupera CS, IP y flags) y vuelve al programa interrumpido.

⚠️ **Trampa:** no confundir con el **ciclo de instrucción** (búsqueda → decodificación → operandos → ejecución). El ciclo de interrupción es **Solicitud → Reconocimiento → Atención → Retorno**. No tienen nada que ver — el profe avisa que esto cae en los exámenes.`,
      pista: String.raw`Nombralas completas y en castellano. Acordate del "ciclo INTA" en las dos primeras.`,
      tags: ["clave", "examen", "trampa", "ciclo"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-003",
      tipo: "concepto",
      dificultad: "facil",
      pregunta: String.raw`¿Para qué sirve el **Flag IF** (Interrupt Flag)?`,
      respuesta: String.raw`El **IF (Interrupt Flag)** es un bit del **registro de estado** que actúa de **máscara**: el programador decide si el CPU atiende o ignora las interrupciones **enmascarables**.

- **IF = 1** → reconoce / atiende
- **IF = 0** → ignora ("enmascarada")

En assembler: **EI** (Enable, IF=1) / **DI** (Disable, IF=0). Al arrancar la máquina se pone en **1** para que el sistema esté listo para ser interrumpido.`,
      pista: String.raw`Es la "máscara" de las enmascarables. EI / DI.`,
      tags: ["interrupciones", "flag-if"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-004",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Cuáles son las **señales** de la **solicitud** y el **reconocimiento**, y quién las envía y recibe?`,
      respuesta: String.raw`- **INTR (solicitud):** la **envía el dispositivo**, la **recibe el CPU** (por un pin). Activa por **flanco ascendente**.
- **INTA (reconocimiento):** la **envía el CPU**, la **recibe el dispositivo**. Señal "negada", **flanco descendente**.

| Señal | Etapa | Envía → Recibe |
|---|---|---|
| INTR | Solicitud | dispositivo → CPU |
| INTA | Reconocimiento | CPU → dispositivo |

A las dos juntas el profe las llama **"ciclo INTA"**.`,
      pista: String.raw`Una va del dispositivo al CPU; la otra al revés.`,
      tags: ["interrupciones", "intr", "inta"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-005",
      tipo: "opcion-multiple",
      dificultad: "media",
      pregunta: String.raw`¿Qué dato recibe el CPU para saber **qué posición leer** del vector de interrupciones (IVT)?`,
      opciones: [
        String.raw`El **Tipo de interrupción**: un número de **1 byte (8 bits)** que el dispositivo le manda en el Reconocimiento (0–255).`,
        String.raw`La dirección física completa de **4 bytes** (CS:IP) de la ISR, que el dispositivo coloca en el bus.`,
        String.raw`El valor del **flag IF**, que indica el índice de la entrada a leer.`,
        String.raw`El número de pin físico (INTR o NMI) por el que entró la señal.`,
      ],
      correcta: 0,
      respuesta: String.raw`Correcta: la primera. El CPU recibe el **Tipo de interrupción**, un número de **1 byte (8 bits)** que el **dispositivo** le manda durante el Reconocimiento. Con ese número (0–255) sabe a qué entrada de la **IVT** acceder.

Por qué no las otras:
- La dirección CS:IP **no** la manda el dispositivo: está **dentro** de la entrada de la IVT; el dispositivo solo aporta el índice (Tipo).
- El **IF** es una máscara de 1 bit (atiende/ignora), no un índice.
- El pin distingue enmascarable de NMI, pero no selecciona la entrada del vector.

Analogía: edificio de 256 pisos; la impresora se identifica con el tipo 203 → "subo al piso 203".`,
      pista: String.raw`Es un solo byte → 256 posibilidades.`,
      tags: ["interrupciones", "ivt", "tipo"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-006",
      tipo: "ejercicio",
      dificultad: "media",
      pregunta: String.raw`¿Qué dato contiene cada entrada de la **Tabla de Vector de Interrupción (IVT)** y cuánto **ocupa la tabla completa**? Justificá el tamaño con la cuenta.`,
      respuesta: String.raw`Cada entrada contiene un **puntero = la dirección de memoria de la primera instrucción de la ISR** de ese tipo. El puntero ocupa **4 bytes**, formado por 2 registros de 16 bits: **CS (Code Segment) + IP (Instruction Pointer)**.

Tamaño de la tabla:

- El Tipo es **1 byte** → $2^8 = 256$ entradas posibles.
- Cada puntero = **4 bytes** (CS + IP).

$$256 \times 4 = 1024 \text{ bytes} = 1\,\text{KB}$$

Se ubica **al inicio de la memoria principal**. Mapa: Tipo 0 → $00000_{16}$–$00003_{16}$ · Tipo 1 → $00004_{16}$–$00007_{16}$ · … · Tipo 255 → $003FC_{16}$–$003FF_{16}$. "No ocupa 10 gigas, ocupa 1 KB."`,
      pista: String.raw`256 entradas, 4 bytes cada una.`,
      tags: ["clave", "examen", "ivt"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-007",
      tipo: "texto",
      dificultad: "media",
      pregunta: String.raw`¿Qué debe **guardar el CPU en la pila** (PUSH) antes de empezar a ejecutar la ISR?`,
      respuesta: String.raw`Hace **PUSH** de:

- el **Contador de Programa (CS:IP)** = dirección de la próxima instrucción del programa interrumpido
- **todas las banderas (flags)** del registro de estado

Es el **"contexto"** para volver exactamente a donde estaba: "me anoto en la billetera dónde estoy (dirección) y hasta qué ejercicio llegué (flags)".

⚠️ **Trampa:** el hardware guarda **solo CS:IP + flags** (el mínimo para volver). Los **registros de datos** (AX, BX…) **no** los salva el hardware: como la ISR los va a pisar, es la **propia ISR (software)** la que hace PUSH/POP de los que usa, al entrar y antes del IRET.`,
      pista: String.raw`Solo el "contexto" mínimo: contador de programa + flags.`,
      tags: ["clave", "trampa", "pila", "push"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-008",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿En qué consiste el **retorno** de una interrupción y qué datos necesita recuperar el CPU?`,
      respuesta: String.raw`El retorno se hace con **IRET (Interrupt Return)**, que ejecuta un **POP** y recupera: **CS, IP** (juntos = Contador de Programa) **y los Flags**. Restablece el contexto y el control vuelve al programa interrumpido "como si nada hubiese ocurrido".

Es la operación **inversa** del Reconocimiento: lo que se hizo PUSH al entrar se hace POP al salir. IRET recupera **solo CS:IP + flags** (lo del hardware); los **registros de datos** los restaura la **ISR con POP, antes** del IRET (orden inverso al PUSH). El IRET va **último**, con la pila ya en el frame del hardware.`,
      pista: String.raw`Una sola instrucción especial; es el espejo del Reconocimiento.`,
      tags: ["interrupciones", "iret", "pop"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-009",
      tipo: "opcion-multiple",
      dificultad: "dificil",
      pregunta: String.raw`¿Qué diferencia hay entre las interrupciones **enmascarables** y las **no enmascarables (NMI)**? Elegí la afirmación **correcta**.`,
      opciones: [
        String.raw`La NMI entra por **otro pin**, el **IF no la afecta**, su Tipo es **fijo (Tipo 2)** y su atención es **inevitable**: el CPU para todo aunque esté en medio de una instrucción.`,
        String.raw`La NMI también se desactiva con **IF=0**, pero tiene **mayor prioridad** que las enmascarables.`,
        String.raw`La enmascarable es **inevitable** y la NMI es **opcional** según decida el programador.`,
        String.raw`Ambas leen su **Tipo desde el dispositivo** durante el ciclo INTR/INTA; solo cambia el pin de entrada.`,
      ],
      correcta: 0,
      respuesta: String.raw`Correcta: la primera. Las **no enmascarables (NMI)** entran por **otro pin**, el **IF no tiene efecto** sobre ellas, su Tipo es **fijo = Tipo 2** y su atención es **inevitable** (la más prioritaria). El profe: "el CPU para todo. No importa si está en el medio del ciclo de instrucción, para y atiende." Se reservan para **errores graves de hardware** (paridad de memoria, disco → pantalla azul).

Por qué no las otras:
- La NMI **no** se desactiva con IF=0: justamente el IF **no** la afecta.
- Es al revés: la **enmascarable** es condicional (IF la puede ignorar); la NMI es inevitable.
- La NMI **no** lee su Tipo del dispositivo: es **fijo (Tipo 2)** y **no** ejecuta el Reconocimiento como las normales.

⚠️ **Trampa:** la analogía del "incendio" es solo didáctica; en el examen la NMI son **errores graves de memoria/disco**, no "se prendió fuego".`,
      pista: String.raw`Pensá si el flag IF puede o no apagar a la NMI.`,
      tags: ["clave", "examen", "nmi", "enmascarable"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-010",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Qué es el **anidamiento** de interrupciones y qué hay que hacer para **anidar** una interrupción en otra?`,
      respuesta: String.raw`El **anidamiento** ocurre cuando una **nueva interrupción interrumpe a una ISR en curso**. Al entrar a una ISR el CPU pone **IF=0 automáticamente**; para **permitir** el anidamiento, la **primera instrucción de la ISR debe ser STI (Set Interrupt Flag)**, que vuelve a poner IF=1.

- **Con STI** (1ª instrucción) → IF vuelve a 1 → la nueva interrupción **se anida**; al terminar la anidada, vuelve a la ISR anterior.
- **Sin STI** → IF queda en 0 → la nueva interrupción **se ignora/espera**; se atiende recién cuando termina la ISR actual.

Quien decide es **el programador del driver** (escribe o no STI). El anidamiento real ocurre solo si la nueva interrupción tiene **mayor prioridad**. (STI pone IF=1; su opuesta CLI lo pone en 0.)`,
      pista: String.raw`El CPU pone IF=0 al entrar; ¿qué instrucción lo vuelve a habilitar?`,
      tags: ["clave", "examen", "anidamiento", "sti"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-011",
      tipo: "opcion-multiple",
      dificultad: "media",
      pregunta: String.raw`Indicá la asociación **correcta** de los **tipos dedicados (0–4)** del vector de interrupción del 8086.`,
      opciones: [
        String.raw`0 = división por cero · 1 = paso a paso · 2 = NMI · 3 = breakpoint · 4 = overflow`,
        String.raw`0 = NMI · 1 = breakpoint · 2 = división por cero · 3 = overflow · 4 = paso a paso`,
        String.raw`0 = overflow · 1 = división por cero · 2 = paso a paso · 3 = NMI · 4 = breakpoint`,
        String.raw`0 = breakpoint · 1 = overflow · 2 = paso a paso · 3 = división por cero · 4 = NMI`,
      ],
      correcta: 0,
      respuesta: String.raw`Correcta: la primera. Los **5 tipos dedicados** "que se suelen preguntar":

| Tipo | Nombre | Causa |
|---|---|---|
| **0** | División por cero | la CPU la invoca tras dividir por 0 |
| **1** | Paso a paso (single step) | depuradores; instrucción por instrucción (flag TF) |
| **2** | No enmascarable (NMI) | la señal NMI; errores graves de hardware |
| **3** | Breakpoint | puntos de ruptura en depuración ($INT3$) |
| **4** | Overflow | desbordamiento ($INTO$) |

Las demás opciones barajan el orden. Memotecnia útil: **0-1-2-3-4 → división, paso a paso, NMI, breakpoint, overflow**. Los tipos **32–255** quedan para que el SO cargue las ISR de los periféricos.`,
      pista: String.raw`Empieza en división por cero y termina en overflow.`,
      tags: ["clave", "examen", "tipos-dedicados"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-012",
      tipo: "concepto",
      dificultad: "media",
      pregunta: String.raw`¿Cómo se maneja la **administración de prioridades** cuando se solicitan varias interrupciones a la vez?`,
      respuesta: String.raw`Con un **controlador de interrupciones programable (PIC)** — el chip **Intel 8259A**. Recibe las solicitudes por **8 entradas IR0–IR7** (**IR0 = mayor prioridad, IR7 = menor**), ordena por prioridad y manda **una sola INTR al CPU por vez**.

- Se conectan **8 en cascada → 64 interrupciones**.
- Se enmascara cada IRₓ por separado.
- Una IR de mayor prioridad interrumpe una ISR en curso.

Analogía: el **recepcionista del médico** — recibe a todos, ordena por prioridad, y el procesador atiende de a uno. Hoy está integrado en el procesador/chipset.`,
      pista: String.raw`Un chip dedicado con 8 entradas, IR0 la más prioritaria.`,
      tags: ["interrupciones", "pic", "prioridades"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-013",
      tipo: "texto",
      dificultad: "media",
      pregunta: String.raw`¿Qué son las **excepciones programadas** (interrupciones por software) y qué instrucciones las generan?`,
      respuesta: String.raw`Son **instrucciones** que hacen que el CPU ejecute una ISR del "tipo" indicado — como una interrupción, pero la genera el programa. Propiedades:

- **Predecibles**
- **No respetan prioridades**
- **Se anidan siempre**
- **No son enmascarables**
- **No ejecutan el Reconocimiento** (sin INTR/INTA)

Instrucciones:

- **INT3** · puntos de ruptura (debug)
- **INT XX$_{16}$** · simula una interrupción (ej. $INT\ 21_{16}$: imprimir)
- **INTO** · interrumpe si OF=1 (overflow)

Uso: aprovechar rutinas del SO (ej. dibujar en pantalla) sin reprogramarlas.`,
      pista: String.raw`Son las "pseudo-interrupciones": INT3, INT XX, INTO.`,
      tags: ["clave", "excepciones", "software"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
    {
      id: "arq-u12-014",
      tipo: "concepto",
      dificultad: "dificil",
      pregunta: String.raw`¿Cómo es el modelo de las **interrupciones señalizadas por mensaje (MSI)** y en qué difiere del ciclo de interrupciones enmascarables clásico?`,
      respuesta: String.raw`En **MSI (Message Signaled Interrupts)**, sobre **PCI Express**, el dispositivo que quiere interrumpir **escribe un mensaje (un paquete TLP)** en una **posición de memoria específica** reservada, en vez de mandar una señal por un pin. El **controlador PCIe** (CPU/chipset) interpreta el mensaje para saber qué interrupción iniciar y en qué núcleo; el SO busca la ISR; al terminar, sigue el programa interrumpido.

| Ciclo enmascarable (clásico) | MSI (moderno) |
|---|---|
| señal eléctrica **INTR por un pin** | **mensaje (TLP) escrito en memoria**, sin pin |
| ciclo **INTR / INTA** | el SO detecta la **escritura en la zona especial** |
| hay que **consultar al PIC** el origen | el mensaje ya trae el origen → **menor latencia** |

**MSI-X**: 2048 mensajes de 32 bits por dispositivo, direccionamiento de 64 bits, dirigibles a distintos núcleos (NUMA). Requiere el **LAPIC** (PIC integrado en cada núcleo). Lo soportan Windows, Linux y FreeBSD.

(Nota de scope: tema de **final**, no de parcial.)`,
      pista: String.raw`En vez de un pin, el dispositivo escribe un paquete en memoria.`,
      tags: ["final", "msi", "pcie"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
    },
  ],
});
