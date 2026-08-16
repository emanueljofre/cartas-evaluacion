/* Mazo — Arquitectura de Computadores · Unidad 10 · Buses
   Generado del repaso de examen (repaso-examen-modulos-08-12.html).
   Bloques del sistema «Manual»: `> [!prof|trampa|vale|exam|nota|fx] tag`.
   Nada de emoji como identificador de bloque (ver card-schema.md § Bloques). */
FLASHCARDS.deck({
  materia: "arquitectura-de-computadores",
  unidad: "10-buses",
  titulo: "Buses",
  cards: [
    {
      id: "arq-u10-001",
      tipo: "concepto",
      dificultad: "media",
      tags: ["bus", "interconexion", "final"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Cuál es el concepto y las características de la interconexión de bus?`,
      respuesta: String.raw`Un **bus** es un **medio de transporte de señales digitales formado por cables o pistas de cobre** que conecta dos o más dispositivos. Es **el camino** por donde viajan las señales (el bus no las genera; un dispositivo las envía a través de él).

**Características:**

- Medio de transmisión **compartido** entre 2 o más dispositivos.
- Cuando uno transmite, **todos pueden recibir**.
- **Solo uno a la vez** transmite con éxito → hace falta arbitraje.
- Compuesto por **múltiples líneas**; se rige por normas de conexión.`,
    },
    {
      id: "arq-u10-002",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["bus-sistema", "trampa", "final"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué tipos de buses posee el bus de sistema? Describilos y mencioná la función de cada uno.`,
      respuesta: String.raw`El bus de sistema se compone de **tres buses**:

- **Bus de datos** · transporta datos **e instrucciones** entre CPU, memoria y E/S (la instrucción viaja desde memoria al registro de instrucción). Ancho típico 16/32/64/128 bits. **Bidireccional**.
- **Bus de direcciones** · designa el origen/destino del dato (posición de memoria o puerto). Con $n$ líneas → $2^{n}$ posiciones direccionables. **NO es bidireccional**: siempre del CPU hacia afuera.
- **Bus de control** · coordina el acceso: comandos (Memory R/W, I/O R/W), tiempos, IRQ, Bus grant, Clock, Reset. **Bidireccional**.

> [!trampa]
> **Solo el bus de DIRECCIONES no es bidireccional** (siempre del CPU hacia memoria/E/S). Datos y control SÍ son bidireccionales. Ojo también: el bus de datos **no es exclusivo de datos**, también lleva instrucciones.`,
      pista: String.raw`Datos, direcciones y control. Solo uno de los tres no es bidireccional.`,
    },
    {
      id: "arq-u10-003",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["senales", "clock", "final"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué tipos de señales conocés?`,
      respuesta: String.raw`Lo que viaja por el bus son **señales digitales**. Tipos:

- **continua (CC) / alterna (CA)**
- **analógica** (continua) / **digital** (discreta; en computación = **binaria**, 0 y 1)
- lógica positiva / negativa
- **señal de reloj (clock)**: digital rectangular periódica

En síntesis: **señal digital binaria rectangular**.`,
    },
    {
      id: "arq-u10-004",
      tipo: "concepto",
      dificultad: "media",
      tags: ["clock", "frecuencia", "final"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué características tiene la señal de reloj del CPU?`,
      respuesta: String.raw`Es una señal **digital rectangular periódica**, generada por un **oscilador de cristal (cuarzo)** en la placa madre. **Sincroniza** el CPU y los buses síncronos. Su **frecuencia** se mide en **Hz (MHz/GHz)**.

La placa genera una frecuencia base y el procesador **la multiplica internamente** para correr más rápido que el resto.`,
    },
    {
      id: "arq-u10-005",
      tipo: "texto",
      dificultad: "media",
      tags: ["caracteristicas", "ancho-de-banda", "final"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`Mencioná las características de los buses.`,
      respuesta: String.raw`Son los **parámetros que definen un bus** y permiten compararlo (cuánto transmite, a qué velocidad y cómo se coordina el acceso). Las principales:

- **Ancho del bus** · cantidad de líneas/bits.
- **Ancho de banda** · cantidad de datos transferida **por unidad de tiempo**.
- **Sincronización** · síncrono / asíncrono.
- **Velocidad** · frecuencia de operación.
- **Líneas** · multiplexado (señal ALE = *Address Latch Enable*) / dedicado.
- **Ciclo de bus** · completo / partido (time-slots).
- **Arbitraje** · centralizado / distribuido.

> [!vale]
> En ancho de banda, **"por unidad de tiempo"** es obligatorio para el punto.`,
    },
    {
      id: "arq-u10-006",
      tipo: "texto",
      dificultad: "media",
      tags: ["es", "pcie", "final"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`Mencioná ejemplos de buses de E/S implementados en la PC.`,
      respuesta: String.raw`Ejemplos de buses de E/S en la PC:

- **PCIe** · punto a punto serial; reemplazó al PCI; x1–x16.
- **SATA** · discos (HDD/SSD); 6 Gbit/s; hot-swap.
- **USB** · hasta 127 dispositivos; datos + energía; hot plug.
- **HDMI / DisplayPort** · video + audio digital.
- **Thunderbolt** · PCIe + DisplayPort + energía (USB-C).
- **Ethernet** (RJ45) · **Wi-Fi** (802.11).

> [!nota]
> El profe forzó la distinción: **bus ≠ puerto ≠ conector**. M.2 es un *conector* (el bus que corre es PCIe); USB nombra el bus y el conector.`,
    },
    {
      id: "arq-u10-007",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["punto-a-punto", "serial", "final"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué es una interconexión punto a punto? ¿Cómo se compara con un bus paralelo?`,
      respuesta: String.raw`Una **interconexión punto a punto (HSIO Lanes)** es una **conexión serial dedicada entre dos dispositivos** (no compartida); surgió por las limitaciones eléctricas de los buses paralelos anchos a alta frecuencia.

**Bus paralelo:**

- muchos bits a la vez.
- medio **compartido** → requiere arbitraje.
- interferencias en distancias largas; half-duplex.

**Punto a punto (serial):**

- 1 bit/vez con **señales diferenciales** (anulan ruido por cancelación).
- **dedicado** → menor latencia, ancho de banda dedicado, sin arbitraje.
- varios lanes en paralelo = más ancho de banda (PCIe, SATA, USB).

> [!prof] el profe
> «el cambio más grande de los últimos años»

La conexión directa CPU↔SSD por PCIe llevó los discos de ~100 a ~7000 MB/s.

(HSIO = *High Speed Input/Output* Lanes.)`,
      pista: String.raw`Serial dedicada vs medio compartido. Señales diferenciales.`,
    },
    {
      id: "arq-u10-008",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["jerarquia", "chipset", "final"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`Explicá la jerarquía de los buses.`,
      respuesta: String.raw`Ordena los buses por **velocidad y proximidad al CPU** para evitar cuellos de botella: los rápidos cerca del CPU, los lentos lejos.

**Bus interno** (CPU↔caché) → **bus de sistema** (CPU↔memoria↔E/S) → **buses de expansión** (PCI) que hacen de puente a buses lentos (ISA, SCSI).

**Evolución:**

- **Años 80** · muchos chips separados (clock, bus, interrupciones, DMA).
- **2000s** · **Northbridge** (rápido: memoria + gráfica) + **Southbridge** (lento: USB, audio, discos, Ethernet).
- **Hoy** · el **Northbridge se metió en el CPU** (controlador de memoria + PCIe); el Southbridge = **PCH** (Intel) o **chipset/IOD** (AMD), unido por **DMI**.

(PCI = *Peripheral Component Interconnect* · PCH = *Platform Controller Hub* · DMI = *Direct Media Interface* · IOD = *Input/Output Die*.)`,
      pista: String.raw`Rápidos cerca del CPU, lentos lejos. Northbridge/Southbridge → PCH/chipset.`,
    },
  ],
});
