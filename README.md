# Cartas de evaluación · app de flashcards

App de estudio con **repetición espaciada (Leitner)** para preparar parciales y finales. Muestra una
pregunta, intentás responder mentalmente, revelás la respuesta y calificás si la sabías. Lo que fallás
vuelve pronto; lo que dominás se espacia.

Standalone, sin build ni dependencias instalables. El contenido vive en `banco/` y la app lo carga sola.

## En la nube

Publicada en **GitHub Pages**: <https://emanueljofre.github.io/cartas-evaluacion/> — accesible desde
cualquier dispositivo, sin instalar nada. Se **redeploya sola** en cada `git push` (CI/CD con GitHub
Actions, ver `.github/workflows/deploy.yml`).

- **El progreso es por dispositivo/navegador** (`localStorage`): no se sincroniza entre equipos.
- Los links de **fuente** a los PDFs de la cátedra no funcionan en la nube (esos archivos no se
  publican); el repaso en sí no se ve afectado.

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

Para publicar los cambios en la nube: `git add -A && git commit -m "…" && git push` desde `_flashcards/`
→ GitHub Actions redeploya en ~1 min.

## Estructura

```
_flashcards/
├── index.html              # app (estructura + estilos)
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

El formato de los mazos está documentado en `.claude/skills/flashcards/references/card-schema.md`.

## Tipos de tarjeta

`concepto` · `texto` · `completar` · `opcion-multiple` (autocorrige) · `ejercicio` (LaTeX display) ·
`codigo` (resaltado monoespaciado) · `practica` (ejercicio de procedimiento con 5 niveles: muestra una
instancia distinta y más difícil según la caja Leitner, para practicar el método sin memorizar la cuenta).
Soportan **LaTeX** (`$…$`, `$$…$$`), negrita, listas y bloques de código — pensado para toda la carrera
(matemática, programación, teoría).
