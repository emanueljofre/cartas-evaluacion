/* Mazo — Arquitectura de Computadores · Unidad 11 · Unidad de Entrada/Salida
   Generado del repaso de examen (repaso-examen-modulos-08-12.html).
   Bloques del sistema «Manual»: `> [!prof|trampa|vale|exam|nota|fx] tag`.
   Nada de emoji como identificador de bloque (ver card-schema.md § Bloques). */
FLASHCARDS.deck({
  materia: "arquitectura-de-computadores",
  unidad: "11-entrada-salida",
  titulo: "Entrada/Salida",
  cards: [
    {
      id: "arq-u11-001",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["es", "modulo-es", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué es la Entrada/Salida (E/S)?`,
      respuesta: String.raw`La **E/S** es el **intercambio de información entre el CPU (y la memoria) y los dispositivos externos (periféricos)**.

El intermediario es el **módulo de E/S (interfaz)**, que conecta los buses del CPU/memoria con los periféricos.`,
      pista: String.raw`El profe prefiere el término **"interfaz"** porque está en la mitad de dos cosas: conecta lo **interno** (CPU+memoria) con lo **externo** (periféricos).`,
    },
    {
      id: "arq-u11-002",
      tipo: "texto",
      dificultad: "media",
      tags: ["modulo-es", "funciones", "examen"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Cuáles son las **5 funciones** del módulo de E/S? ¿Con quién se comunica?`,
      respuesta: String.raw`El módulo de E/S actúa de **interfaz entre la CPU/memoria y los periféricos**. Se comunica con la **CPU/memoria** (por el bus de sistema) y con los **dispositivos/periféricos**.

Las **5 funciones**:

1. **Control y temporización**
2. **Comunicación con la CPU** (reconocer direcciones, decodificar órdenes, datos, estado)
3. **Comunicación con los dispositivos** (igual, salvo reconocer direcciones)
4. **Almacenamiento temporal** (buffers, adaptan velocidades)
5. **Detección de errores** (paridad, Hamming)

> [!trampa]
> La función que NO cumple del lado del periférico es **reconocer direcciones** (las envía el CPU).`,
    },
    {
      id: "arq-u11-003",
      tipo: "texto",
      dificultad: "media",
      tags: ["puertos", "modulo-es", "examen"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Cuáles son los **puertos de E/S**?`,
      respuesta: String.raw`Cada **registro direccionable** del módulo (con dirección única) es un **puerto**. Hay **3 clases**:

- **Control** — la CPU **escribe**; controla el comportamiento del dispositivo.
- **Estado** — la CPU **lee**; representa la situación (listo/ocupado/error).
- **Datos** — la CPU **lee y escribe**; los datos del intercambio.

> [!trampa]
> **No hay "puerto de direcciones"**. La dirección no es un puerto: es lo que **selecciona** cuál de los 3 (cada puerto tiene su dirección única). El CPU la pone en el **bus de direcciones** y el **decodificador** del módulo elige el registro.`,
    },
    {
      id: "arq-u11-004",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["modalidades", "canales", "clave", "trampa"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué **modalidades de E/S** conocés? ¿Cuál es más eficiente? Explicá cada una.`,
      respuesta: String.raw`Son **4 modalidades**, de menor a mayor eficiencia: **Programada < Interrupciones < DMA < Canales**.

1. **Programada (Polling)** — la CPU encuesta continuamente el puerto de estado; pierde tiempo en bucles. No interrumpe; pasa por el CPU (AIM). Eficiencia: la menor.
2. **por Interrupciones** — el periférico interrumpe al CPU cuando necesita atención. Pasa por el CPU (AIM). Eficiencia: media.
3. **ADM / DMA** — un módulo DMA transfiere E/S↔memoria sin pasar por el CPU; se vuelve Máster del bus. Interrumpe al final. Eficiencia: alta.
4. **Canales** — módulo independiente con procesamiento propio (el canal-procesador además tiene memoria propia). Interrumpe al final. Eficiencia: la mayor.

El DMA y los Canales son los más eficientes porque **no pasan por el CPU**; las dos primeras usan **AIM (Acceso Indirecto a Memoria)** = el dato pasa por los registros del CPU → pierde ciclos.

> [!trampa]
> Los **Canales** son la 4ª modalidad que se pierden los que estudian de apuntes viejos de solo 3 modalidades. La diferencia clave: el **canal-procesador tiene memoria propia**.`,
      pista: String.raw`Siglas: AIM = Acceso Indirecto a Memoria · DMA/ADM = *Direct Memory Access* / Acceso Directo a Memoria.`,
    },
    {
      id: "arq-u11-005",
      tipo: "texto",
      dificultad: "media",
      tags: ["dma", "modalidades", "examen"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué necesita el **ADM o DMA** para poder operar?`,
      respuesta: String.raw`Antes de cederle el bus, el CPU **programa el controlador DMA** con **cuatro datos** que definen la transferencia:

1. Dirección de **origen** del bloque
2. Dirección de **destino**
3. **Longitud** del bloque (en bytes)
4. **Modo** (lectura/escritura)

Con eso el DMA transfiere por su cuenta. Luego el CPU le **cede el bus** (el DMA se vuelve **Máster**) y sigue procesando. Al terminar, el DMA **genera una interrupción** para avisar.`,
      pista: String.raw`Robo de ciclo = el DMA usa el bus cuando el CPU no lo necesita.`,
    },
    {
      id: "arq-u11-006",
      tipo: "concepto",
      dificultad: "media",
      tags: ["bus-mastering", "dma"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué es el **Bus Mastering**?`,
      respuesta: String.raw`El **Bus Mastering (First-Party DMA)** es cuando los **propios dispositivos integran lógica DMA** y pueden **tomar control del bus** (volverse Máster) para hablar directo con la memoria y otros periféricos, sin un chip DMA central.

**PCIe, USB y SATA** tienen su propia lógica DMA.

Hoy el DMA está **distribuido** (CPU + chipset + periféricos). Ventajas: **reduce la carga del CPU, mejora el ancho de banda y baja la latencia**.`,
    },
    {
      id: "arq-u11-007",
      tipo: "opcion-multiple",
      dificultad: "media",
      tags: ["direccionamiento", "memory-mapped", "clave"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué tipos de **direccionamiento de E/S** existen?`,
      opciones: [
        String.raw`**Mapeada a memoria** (MP y puertos de E/S comparten el mismo espacio de direcciones) y **mapeada aislada** (espacios separados para MP y E/S, con instrucciones de E/S dedicadas).`,
        String.raw`**Mapeada a memoria** y **mapeada a caché**, según si los puertos de E/S se ubican en RAM o en la caché L3.`,
        String.raw`**Directa** e **indirecta**, según si la dirección del puerto está en la instrucción o en un registro del CPU.`,
        String.raw`**Síncrona** y **asíncrona**, según si la transferencia se sincroniza con el reloj del bus.`,
      ],
      correcta: 0,
      respuesta: String.raw`**Hay dos esquemas:**

- **Mapeada a memoria** — la Memoria Principal y los puertos de E/S **comparten el mismo espacio** de direcciones; las instrucciones de E/S **no se distinguen** de las de memoria. La usan los procesadores actuales: simplifica y **baja la latencia**.
- **Mapeada aislada** — espacios de direcciones **separados** para MP y E/S, con **instrucciones dedicadas** de E/S (señal IO/M̅). Ej. 8086: 20 bits para MP, 16 bits para E/S.`,
    },
    {
      id: "arq-u11-008",
      tipo: "concepto",
      dificultad: "facil",
      tags: ["chipset", "placa-madre"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué es el **chipset**?`,
      respuesta: String.raw`Un **conjunto de chips (hoy un solo chip) que colabora con el CPU** manejando el flujo de información y coordinando la comunicación entre componentes y dispositivos.

Internamente **integra muchos módulos de E/S** — controladores de **USB, SATA, Ethernet, audio** y **líneas PCIe** — y por eso **determina la cantidad y tipo de puertos** de la placa.`,
    },
    {
      id: "arq-u11-009",
      tipo: "concepto",
      dificultad: "media",
      tags: ["chipset", "puente-norte", "final"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Quién cumple la función del **puente norte** en los CPU actuales?`,
      respuesta: String.raw`**El propio CPU.** El **Northbridge se integró dentro del CPU** (controlador de memoria + PCIe Root Complex). En AMD lo cumple el **IOD** dentro del paquete.

Queda afuera solo el Southbridge: **PCH** (Intel) o **chipset** (AMD).`,
      pista: String.raw`La conexión CPU↔chipset es **DMI** (punto a punto sobre PCIe).`,
    },
    {
      id: "arq-u11-010",
      tipo: "concepto",
      dificultad: "media",
      tags: ["chipset", "puente-norte", "puente-sur"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`¿Qué diferencia hay entre el **puente norte** y el **puente sur** de los primeros chipset?`,
      respuesta: String.raw`Los primeros chipset eran **dos chips "puente"**: conectan el CPU con el resto de la placa (memoria, gráfica, periféricos) y **enrutan la comunicación** entre ellos. Se dividían el trabajo **por velocidad**:

- **Puente norte (Northbridge)** — pegado al CPU, las conexiones **rápidas** (CPU ↔ memoria principal ↔ interfaz gráfica).
- **Puente sur (Southbridge)** — colgando del norte, las conexiones **lentas** (USB, audio, discos, Ethernet, teclado).

El sur se comunicaba con el CPU **a través del** norte.`,
      pista: String.raw`Regla: norte = rápido, sur = lento.`,
    },
    {
      id: "arq-u11-011",
      tipo: "texto",
      dificultad: "dificil",
      tags: ["almacenamiento", "ssd", "nvme"],
      fuente: ["arquitectura-de-computadores/repasos/repaso-examen-modulos-08-12.html","arquitectura-de-computadores/repasos/respuestas-examen-modulos-08-12.md"],
      pregunta: String.raw`Explicá la diferencia y las características básicas de los **medios de almacenamiento secundario** (HDD, SSD-SATA, SSD-NVMe).`,
      respuesta: String.raw`| Tecnología | Acceso | Interfaz | Transferencia |
|---|---|---|---|
| **HDD mecánico** (platos + cabezales) | ~10 ms | SATA 3 | ~100–150 MB/s |
| **SSD-SATA** (Flash, sin partes móviles) | ~0,1–0,2 ms | SATA 3 (6 Gbit/s) | ~550 MB/s |
| **SSD-NVMe (M.2)** (Flash + NVMe sobre PCIe) | <0,1 ms | PCIe 4.0 x4 | ~5.000–7.000 MB/s |

**Diferencia clave:** el **HDD es mecánico** (lento, partes móviles que se desgastan); los **SSD son electrónicos** (Flash, sin partes móviles, mucho más rápidos).

El **NVMe va por PCIe** en vez de SATA, y por eso es **>10×** un SSD-SATA, por dos motivos: PCIe tiene **mucho más ancho de banda** (varios **lanes** en paralelo que escalan con la generación — PCIe 4.0 x4 ≈ 8 GB/s vs SATA 3 **fijo** en 6 Gbit/s ≈ 550 MB/s) y **conecta directo al CPU**, sin pasar por el chipset/controlador SATA. Un SSD-SATA es **>3×** un HDD.

Recordá que **ancho de banda = cantidad de datos POR UNIDAD DE TIEMPO** (MB/s, Gbit/s).`,
      pista: String.raw`**PCIe** = el **bus** (transporte); **NVMe** = el **protocolo** que corre sobre él, optimizado para Flash. ⚠️ Los SSD se **desgastan con la escritura** (duran X petabytes escritos). Siglas: HDD = *Hard Disk Drive* · SSD = *Solid State Drive* · NVMe = *Non-Volatile Memory express*.`,
    },
  ],
});
