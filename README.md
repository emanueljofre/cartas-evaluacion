# Cartas de evaluación · app de flashcards

App de estudio con **repetición espaciada (Leitner)** para preparar parciales y finales. Muestra una
pregunta, intentás responder mentalmente, revelás la respuesta y calificás si la sabías. Lo que fallás
vuelve pronto; lo que dominás se espacia.

Standalone, sin build ni dependencias instalables. El contenido vive en `banco/` y la app lo carga sola.

## En la nube

Publicada en **GitHub Pages**: <https://emanueljofre.github.io/cartas-evaluacion/> — accesible desde
cualquier dispositivo, sin instalar nada. Se **redeploya sola** en cada `git push` (CI/CD con GitHub
Actions, ver `.github/workflows/deploy.yml`).

- **Progreso entre dispositivos**: por defecto el avance vive en `localStorage` (por navegador). Para
  tener el **mismo progreso en todos lados** hay sincronización opcional con un backend gratis
  (Cloudflare Worker + KV), con el botón **☁ Sync** de la app. Setup en [`sync/README.md`](sync/README.md).
- Los links de **fuente** a los PDFs de la cátedra no funcionan en la nube (esos archivos no se
  publican); el repaso en sí no se ve afectado.

### Sincronizar progreso (☁ Sync)

Una vez desplegado el Worker (ver [`sync/README.md`](sync/README.md)), en cada dispositivo: botón
**☁ Sync** → pegar la **URL** del Worker y la **clave** → *Guardar y sincronizar*. La app hace
*merge* al cargar y *push* al calificar, así el avance Leitner queda igual en todos tus equipos. La
clave y la URL se guardan solo en ese navegador (nunca en el repo).

## Uso diario

**Doble clic en `index.html`** → se abre en el navegador. El progreso se guarda en `localStorage` de ese
navegador (no se sincroniza entre equipos). Eso es todo.

- Filtrá por **materia · unidad · dificultad · tipo** (multi-selección).
- **🔍 Inspector**: buscá una carta puntual (por texto, id o tag) y mirá su estado Leitner. En las cartas `practica` ves los 5 niveles y podés **simular** cómo cambia el ejercicio y el próximo repaso al subir/bajar de caja, sin afectar tu progreso.
- **Mezclar (interleaving)**: combina unidades/materias en la sesión (recomendado para repasar de verdad).
- **Modo libre**: practicar sin escribir progreso.
- Atajos: `Espacio` revelar · `1` no lo sabía · `2` casi · `3` lo sabía · `→` siguiente · `←` anterior.

## Instalar como app en el Dock (PWA, opcional)

Los service workers no corren en `file://`, así que para instalarla hay que **servirla una vez**:

```bash
cd _flashcards
python3 -m http.server 8099
```

Abrí `http://localhost:8099` en Chrome/Edge → menú → **Instalar app**. Queda en el Dock y funciona
offline (KaTeX está vendorizado en `vendor/katex/`). Para el uso normal, el doble clic alcanza.

## Agregar contenido

No edites la app: usá la skill **`flashcards`**.

> "Generá las flashcards de la unidad 10 de álgebra"

La skill lee el material de la unidad (`resumen.md`, `examenes/*.md`, glosario), genera las tarjetas y
escribe un mazo en `banco/{materia}/unidad-NN-{tema}.js`, registrándolo en `banco/manifest.js`. Recargá
la app y aparecen. Re-correrla es idempotente (no duplica ni pierde tu progreso).

### Publicar en la nube

Esta carpeta vive **dentro** del repo `facultad`, pero el sitio lo sirve un repo aparte,
[`cartas-evaluacion`](https://github.com/emanueljofre/cartas-evaluacion), donde `_flashcards/`
es la raíz: ahí adentro sí corre `.github/workflows/deploy.yml`. Por eso **pushear `facultad` no
publica nada**: hay que copiar el contenido al otro repo.

```bash
cd $(mktemp -d) && git clone https://github.com/emanueljofre/cartas-evaluacion.git . \
  && find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} + \
  && git -C ~/repos/facultad archive HEAD:_flashcards | tar -x \
  && git add -A && git commit -m "Publicar" && git push
```

Copia el contenido **trackeado** de `_flashcards/` tal como está en `HEAD` de `facultad`, conserva
el historial del repo publicado (no hace falta forzar) y GitHub Actions redeploya en ~1 min.
Commiteá en `facultad` **antes**: lo que no esté en `HEAD` no se publica.

## Estructura

```
_flashcards/
├── index.html              # app: markup + chrome (cartas, filtros, barra de progreso)
├── theme.css               # GENERADO — tokens del sistema «Manual» + gramática de bloques
├── app.js                  # lógica: carga dinámica, Leitner, render KaTeX
├── banco/
│   ├── manifest.js         # lista de mazos a cargar
│   └── {materia}/unidad-NN-*.js   # un mazo por unidad
├── vendor/katex/           # KaTeX vendorizado (matemática offline)
├── manifest.webmanifest    # PWA
├── sw.js                   # service worker (network-first online, cache offline)
├── icons/icon.svg
└── .github/workflows/deploy.yml   # CI/CD: deploy a GitHub Pages en cada push
```

El formato de los mazos está documentado en `references/card-schema.md` de la skill
`palermo:flashcards`.

## Sistema de diseño

La app usa el mismo sistema «Manual» que los cheatsheets: es su **cuarto consumidor**, junto a
`cheatsheet`, `deck` y `anim`. La fuente única es `design/tokens.js` del marketplace
(`~/repos/claude-skills`), que valida contraste WCAG y estampa `theme.css`.

**`theme.css` no se edita a mano.** Para cambiar un color o un componente:

```bash
node design/build.js --only flashcards
node plugins/palermo/skills/flashcards/scripts/sync-theme.mjs {ruta}/_flashcards
```

El mismo script con `--check` sale con 1 si la copia de acá quedó vieja. Si cambia `theme.css` o
la lista `CORE` de `sw.js`, hay que **bumpear `CACHE`** en `sw.js`.

Qué vive en cada lado: `theme.css` trae los tokens, las fuentes y las clases de bloque
(`.prof`, `.nota`, `.vale`, `.fx`); `index.html` trae el chrome de la app, escrito solo con esos
tokens (cero hex propio) y el vocabulario de dominio (`--facil`/`--media`/`--dificil`).

> **Modo claro:** los tokens light ya están en `theme.css` y toda la app los respeta. Falta solo
> el interruptor: poniendo `data-theme="light"` en `<html>` la app entera flipa, como las hojas.

## Tipos de tarjeta

`concepto` · `texto` · `completar` · `opcion-multiple` (autocorrige) · `ejercicio` (LaTeX display) ·
`codigo` (resaltado monoespaciado) · `practica` (ejercicio de procedimiento con 5 niveles: muestra una
instancia distinta y más difícil según la caja Leitner, para practicar el método sin memorizar la cuenta).
Soportan **LaTeX** (`$…$`, `$$…$$`), negrita, itálica, listas y bloques de código, pensado para toda la
carrera (matemática, programación, teoría).

Además, las cartas escriben con la **gramática de bloques** del sistema, la misma de las hojas: una
línea `> [!tipo] tag` más el cuerpo en líneas `>`.

| Sintaxis | Qué es |
|---|---|
| `> [!prof] el profe, clase 05/08` | cita textual, con atribución obligatoria |
| `> [!trampa] La trampa` | error típico, condición que se olvida |
| `> [!vale] Vale puntos` | el criterio de corrección: dónde se cobra el punto |
| `> [!exam] Entra al parcial` | esto pesa, sin ser criterio de corrección |
| `> [!nota] Alcance` | matiz o aclaración |
| `> [!fx] F3 · llevable` | fórmula rotulada |

Nada de emoji como identificador de bloque: para eso están estos componentes.
