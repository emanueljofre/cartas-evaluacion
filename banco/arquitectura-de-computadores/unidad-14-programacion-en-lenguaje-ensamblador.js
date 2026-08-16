/* Mazo seed — Arquitectura de Computadores · Unidad 14 · Ensamblador
   Demuestra el tipo `codigo` y el caso cross-materia. fuente: "seed".
   Bloques del sistema «Manual»: `> [!prof|trampa|vale|exam|nota|fx] tag`.
   Nada de emoji como identificador de bloque (ver card-schema.md § Bloques). */
FLASHCARDS.deck({
  materia: "arquitectura-de-computadores",
  unidad: "14-programacion-en-lenguaje-ensamblador",
  titulo: "Programación en ensamblador",
  cards: [
    {
      id: "arq-u14-001",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["cpu", "registros"],
      fuente: "seed",
      pregunta: String.raw`¿Qué es un **registro** en una CPU y por qué es más rápido que la RAM?`,
      respuesta: String.raw`Es una pequeña memoria interna del procesador que guarda operandos y resultados temporales (p. ej. acumulador, contador de programa).

Es más rápido porque está **dentro** del chip, sin latencia de bus ni jerarquía de caché de por medio.`,
    },
    {
      id: "arq-u14-002",
      tipo: "codigo",
      dificultad: "media",
      lenguaje: "asm",
      tags: ["x86", "mov", "add"],
      fuente: "seed",
      pregunta: String.raw`¿Qué valor queda en \`EAX\` tras ejecutar este código (x86, sintaxis Intel)?

\`\`\`asm
mov eax, 5
mov ebx, 3
add eax, ebx
\`\`\``,
      respuesta: String.raw`\`EAX = 8\`.

- \`mov eax, 5\` → carga 5 en EAX.
- \`mov ebx, 3\` → carga 3 en EBX.
- \`add eax, ebx\` → EAX = EAX + EBX = 5 + 3 = **8**.`,
    },
    {
      id: "arq-u14-003",
      tipo: "concepto",
      dificultad: "media",
      tags: ["program-counter", "control"],
      fuente: "seed",
      pregunta: String.raw`¿Para qué sirve el **contador de programa** (PC / EIP)?`,
      respuesta: String.raw`Guarda la **dirección de la próxima instrucción** a ejecutar.

Se incrementa automáticamente tras cada instrucción, salvo en saltos (\`jmp\`, \`call\`, \`ret\`) que lo modifican explícitamente.`,
    },
    {
      id: "arq-u14-004",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["debug", "examen", "8086"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué es el **DEBUG** y para qué se usa?`,
      respuesta: String.raw`Es un **depurador y ensamblador en línea** del MS-DOS (hoy se corre en emuladores como **DOSBox**) que permite **escribir, ver y ejecutar** instrucciones en **lenguaje ensamblador del 8086**, operando directamente sobre los **registros** y la **memoria**.

Es la herramienta de la **parte práctica** de la materia. Direcciones y valores se manejan en **hexadecimal**.`,
      pista: String.raw`Es la herramienta de la parte práctica; trabaja sobre registros y memoria en hexa.`,
    },
    {
      id: "arq-u14-005",
      tipo: "codigo",
      dificultad: "media",
      lenguaje: "asm",
      tags: ["debug", "comandos", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Cuáles son los **comandos del DEBUG** y qué hace cada uno? (los que se toman)`,
      respuesta: String.raw`Se manejan con **una sola letra**, seguida de una dirección u operando en hexadecimal:

- \`R\` (Register) → ver/editar los **registros** (\`R IP\` modifica el contador de programa).
- \`D\` (Dump) → ver la memoria como **datos** (volcado hex + ASCII). Ej: \`D 100\`.
- \`U\` (Unassemble) → ver la memoria como **instrucciones** (desensambla). Ej: \`U 100\`.
- \`E\` (Edit) → **editar**/escribir en una posición de memoria. Ej: \`E 300\`.
- \`A\` (Assemble) → empezar a **ensamblar** (escribir instrucciones). Ej: \`A 100\`.
- \`P\` (Proceed) → ejecutar **paso a paso** (sin entrar en subrutinas).
- \`G\` (Go) → ejecutar **hasta el final**.

Diferencia clave: **D** muestra la memoria como **datos**, **U** la misma memoria como **instrucciones** desensambladas.`,
      pista: String.raw`R, D, U, E, A, P, G. "¿Con qué veo los registros? ¿Cómo edito la posición 300?"`,
    },
    {
      id: "arq-u14-006",
      tipo: "concepto",
      dificultad: "media",
      tags: ["registros", "8086", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Cuáles son los **registros de propósito general** del 8086 y cómo se dividen?`,
      respuesta: String.raw`Son **AX, BX, CX, DX** — los que el **programador** usa libremente. Cada uno es de **16 bits** y se parte en dos mitades de **8 bits**: parte **alta** (**H**, *high*) y parte **baja** (**L**, *low*). Así \`AX\` = \`AH\` + \`AL\`.

Nombres: A = acumulador, B = base, C = contador, D = datos.

El **sufijo decide el tamaño**: \`MOV AX,1A3F\` mueve 16 bits (4 dígitos hex); \`MOV AL,3F\` o \`MOV BL,07\` mueven 8 bits (2 dígitos hex). *"Cuando pongo BL no me va a tomar 4 números, me va a tomar 2."*`,
      pista: String.raw`AX/BX/CX/DX, 16 bits cada uno, partidos en H (alta) + L (baja).`,
    },
    {
      id: "arq-u14-007",
      tipo: "codigo",
      dificultad: "facil",
      lenguaje: "asm",
      tags: ["instrucciones", "mov", "examen"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué **instrucciones** de ensamblador hay que saber para el parcial?`,
      respuesta: String.raw`Tres:

- \`MOV dest, origen\` — **copiar** (transferencia): pone en *dest* el valor de *origen*.
- \`ADD dest, origen\` — **sumar**: *dest = dest + origen*.
- \`INC reg\` — **incrementar** en 1 el registro.

*"Les voy a tomar MOV que es copiar, ADD que es sumar e INC que es incrementar, y listo."*

Nota: \`ADD\` e \`INC\` actualizan los **flags** del registro de estado; \`MOV\` no.`,
      pista: String.raw`MOV = copiar, ADD = sumar, INC = incrementar.`,
    },
    {
      id: "arq-u14-008",
      tipo: "concepto",
      dificultad: "media",
      tags: ["direccionamiento", "corchetes", "trampa"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`En ensamblador, ¿cómo se distingue el direccionamiento **inmediato** del **directo**?`,
      respuesta: String.raw`Por los **corchetes**:

- **Inmediato** (sin corchetes): el operando es el **valor literal**. \`ADD AX,4\` suma **el número 4**.
- **Directo** (con corchetes): el operando es una **posición de memoria**. \`MOV CX,[B310]\` copia a CX **el contenido de la dirección B310**, no el número B310.
- **Implícito**: sin operando explícito (ej. \`INC AX\`).

El corchete cambia por completo el significado: *"cuando había un corchete era un direccionamiento directo."*`,
      pista: String.raw`Corchetes = directo (contenido de la dirección); sin corchetes = inmediato (literal).`,
    },
    {
      id: "arq-u14-009",
      tipo: "practica",
      lenguaje: "asm",
      tags: ["direccionamiento", "instrucciones", "examen", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      concepto: String.raw`Escribir la instrucción (8086/DEBUG) a partir de la consigna: elegir **operación** (MOV copiar / ADD sumar / INC incrementar), **registro** entero o mitad (H/L) y **modo de direccionamiento** (inmediato sin corchetes / directo con corchetes / implícito). Sube por ejes: registro entero → mitad de 8 bits → directo → implícito → secuencia de varias instrucciones.`,
      variantes: [
        // N1 — registro entero (16 b) + inmediato
        [
          { pregunta: String.raw`Cargá el valor \`7\` en el registro \`AX\`.`, respuesta: String.raw`\`MOV AX,7\` — \`MOV\` = copiar; **sin corchetes** = inmediato (el literal 7); \`AX\` entero (16 bits).`, pista: String.raw`Copiar = MOV; valor suelto, sin corchetes = inmediato.` },
          { pregunta: String.raw`Sumá el literal \`5\` al registro \`DX\`.`, respuesta: String.raw`\`ADD DX,5\` — \`ADD\` = sumar; **sin corchetes** = inmediato (el literal 5).` },
        ],
        // N2 — mitad H/L (8 b) + inmediato (trampa de tamaño)
        [
          { pregunta: String.raw`Cargá el valor \`0A\` en la **parte baja** del registro \`BX\`.`, respuesta: String.raw`\`MOV BL,0A\` — \`BL\` = parte **baja** (low, 8 bits) de BX; inmediato. Ojo: una mitad toma **2 dígitos hex**, no 4.`, pista: String.raw`Parte baja = L; una mitad son 8 bits = 2 dígitos hex.` },
          { pregunta: String.raw`Usá direccionamiento **inmediato** para sumar \`8\` a la **parte alta** del registro \`BX\`.`, respuesta: String.raw`\`ADD BH,8\` — \`BH\` = parte **alta** (high) de BX; **sin corchetes** = inmediato (el literal 8).` },
        ],
        // N3 — directo (corchetes); fraseo indirecto que obliga a reconocer "contenido"
        [
          { pregunta: String.raw`Sumá en el registro \`AX\` **lo que está en** la posición de memoria \`1100\`.`, respuesta: String.raw`\`ADD AX,[1100]\` — «lo que está en la posición» = **contenido** ⇒ **corchetes** (directo). No es el número 1100 sino lo guardado en esa dirección.`, pista: String.raw`"Lo que está en la posición" = contenido = corchetes (directo).` },
          { pregunta: String.raw`Copiá en \`CX\` el **contenido** de la dirección \`B310\`.`, respuesta: String.raw`\`MOV CX,[B310]\` — **corchetes** = directo (el contenido de B310, no el número B310).` },
        ],
        // N4 — implícito (INC) + combinar mitad/directo
        [
          { pregunta: String.raw`Incrementá en 1 el registro \`AX\`.`, respuesta: String.raw`\`INC AX\` — \`INC\` = incrementar; direccionamiento **implícito**: el 1 está sobreentendido, no hay operando explícito.`, pista: String.raw`Incrementar en 1 = INC; sin operando suelto = implícito.` },
          { pregunta: String.raw`Sumá a la **parte baja** de \`AX\` el **contenido** de la posición \`1100\`.`, respuesta: String.raw`\`ADD AL,[1100]\` — \`AL\` = parte baja de AX; **corchetes** = directo. Combina mitad de registro **y** direccionamiento directo.` },
        ],
        // N5 — secuencia de varias instrucciones mezclando modos
        [
          { pregunta: String.raw`Traducí a ensamblador, paso a paso: cargá \`4\` en \`AX\`, sumale el **contenido** de la posición \`1100\` y por último incrementá \`AX\` en 1.`, respuesta: String.raw`\`\`\`asm
MOV AX,4      ; inmediato
ADD AX,[1100] ; directo (corchetes)
INC AX        ; implícito
\`\`\`
Tres líneas, los **tres modos** de direccionamiento.`, pista: String.raw`Una instrucción por paso: copiar (inmediato) → sumar contenido (directo) → incrementar (implícito).` },
          { pregunta: String.raw`Traducí: cargá \`1A\` en \`AL\`, sumale el literal \`6\` y después sumale el **contenido** de la dirección \`200\`.`, respuesta: String.raw`\`\`\`asm
MOV AL,1A   ; inmediato (mitad baja, 8 b)
ADD AL,6    ; inmediato
ADD AL,[200] ; directo
\`\`\`
Todo sobre la mitad \`AL\`: dos inmediatos y un directo.` },
        ],
      ],
    },
    {
      id: "arq-u14-010",
      tipo: "concepto",
      dificultad: "media",
      tags: ["direccionamiento", "examen", "trampa"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`El ejercicio **inverso**: el profe te escribe una instrucción y vos identificás el modo de direccionamiento. ¿Qué modo usa cada una?

- \`INC AX\`
- \`MOV AX,12\`
- \`MOV AX,[1100]\``,
      respuesta: String.raw`- \`INC AX\` → **Implícito** — no hay operando explícito; el "1" que se incrementa está sobreentendido en la propia instrucción.
- \`MOV AX,12\` → **Inmediato** — el operando es el **valor literal** 12 (sin corchetes).
- \`MOV AX,[1100]\` → **Directo** — los **corchetes** indican que el operando es el **contenido** de la posición de memoria 1100, no el número 1100.

Truco: **sin operando** → implícito · **número suelto** → inmediato · **número entre corchetes** → directo.`,
      pista: String.raw`Mirá el operando: nada = implícito, número = inmediato, [número] = directo.`,
    },
    {
      id: "arq-u14-011",
      tipo: "concepto",
      dificultad: "media",
      tags: ["flags", "alu", "examen"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué **flags** del registro de estado hay que conocer?`,
      respuesta: String.raw`Cinco:

- **OF** (*Overflow*, desbordamiento)
- **CF** (*Carry*, acarreo)
- **SF** (*Sign*, signo)
- **ZF** (*Zero*, resultado cero)
- **IF** (*Interrupt Flag*)

Una operación aritmética (\`ADD\`/\`INC\`) **actualiza** OF/CF/SF/ZF; el **IF** lo maneja el programador (\`STI\`/\`CLI\`) para habilitar o inhibir las interrupciones enmascarables.`,
      pista: String.raw`Overflow, Carry, Sign, Zero e Interrupt Flag.`,
    },
    {
      id: "arq-u14-015",
      tipo: "opcion-multiple",
      dificultad: "facil",
      tags: ["direccionamiento", "examen"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué modo de direccionamiento usa \`INC AX\`?`,
      opciones: [
        String.raw`Inmediato`,
        String.raw`Directo a memoria`,
        String.raw`Por registro`,
        String.raw`Implícito`,
      ],
      correcta: 3,
      respuesta: String.raw`**Implícito** — no hay operando explícito; el "1" que se incrementa está sobreentendido en la propia instrucción.`,
      pista: String.raw`No hay operando suelto ni corchetes: el valor está sobreentendido.`,
    },
    {
      id: "arq-u14-016",
      tipo: "opcion-multiple",
      dificultad: "facil",
      tags: ["direccionamiento", "examen"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué modo de direccionamiento usa \`MOV AX,12\`?`,
      opciones: [
        String.raw`Inmediato`,
        String.raw`Directo a memoria`,
        String.raw`Por registro`,
        String.raw`Implícito`,
      ],
      correcta: 0,
      respuesta: String.raw`**Inmediato** — el operando es el **valor literal** 12 (sin corchetes), que va inmediatamente después de la instrucción.`,
      pista: String.raw`Número suelto, sin corchetes.`,
    },
    {
      id: "arq-u14-017",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["direccionamiento", "corchetes", "trampa"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué modo de direccionamiento usa \`MOV AX,[1100]\`?`,
      opciones: [
        String.raw`Inmediato`,
        String.raw`Directo a memoria`,
        String.raw`Por registro`,
        String.raw`Implícito`,
      ],
      correcta: 1,
      respuesta: String.raw`**Directo** — los **corchetes** indican que el operando es el **contenido** de la posición de memoria 1100, no el número 1100.`,
      pista: String.raw`Número entre corchetes = contenido de esa dirección de memoria.`,
    },
  ],
});
