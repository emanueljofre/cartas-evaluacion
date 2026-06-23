/* ============================================================
   Cartas de evaluación — app de flashcards con Leitner
   - Carga dinámica de mazos (classic scripts, funciona en file://)
   - Repetición espaciada (Leitner, 5 cajas)
   - Render markdown-lite + KaTeX
   ============================================================ */
(function () {
  "use strict";

  // ---------- Registro de mazos (contrato con la skill) ----------
  var DECKS = [];
  var ALL = [];           // tarjetas aplanadas
  var SEEN = {};          // ids ya registrados (guard de duplicados)
  var DUP_IDS = [];       // ids duplicados detectados (aviso en consola + UI)
  var pending = 0;
  var manifestSeen = false;

  window.FLASHCARDS = {
    manifest: function (list) {
      manifestSeen = true;
      if (!list || !list.length) { boot(); return; }
      pending = list.length;
      list.forEach(function (path) {
        var s = document.createElement("script");
        s.src = "banco/" + path;
        s.onload = scriptDone;
        s.onerror = function () { console.error("[flashcards] no se pudo cargar mazo:", path); scriptDone(); };
        document.head.appendChild(s);
      });
    },
    deck: function (d) {
      if (!d || !Array.isArray(d.cards)) return;
      DECKS.push(d);
      d.cards.forEach(function (c, i) {
        c.materia = c.materia || d.materia;
        c.unidad = c.unidad || d.unidad;
        c._deckTitulo = d.titulo || d.unidad;
        if (!c.id) {
          // Fallback determinista: índice DENTRO del mazo (no del banco global),
          // así el id no depende del orden en que cargaron los <script>.
          c.id = (c.materia || "x") + "-" + (c.unidad || "u") + "-auto" + pad3(i);
          console.warn("[flashcards] carta sin id, usando autogenerado: " + c.id);
        }
        if (SEEN[c.id]) {
          DUP_IDS.push(c.id);
          console.warn("[flashcards] id DUPLICADO: " + c.id + " — el progreso se comparte entre cartas");
        }
        SEEN[c.id] = true;
        ALL.push(c);
      });
    }
  };
  function scriptDone() { if (--pending <= 0) boot(); }
  // Salvavidas: si el manifest nunca llamó (archivo ausente), arrancá igual.
  window.addEventListener("load", function () {
    setTimeout(function () { if (!manifestSeen) boot(); }, 300);
  });

  // ---------- Estado + persistencia ----------
  var PROGRESS_KEY = "flashcards:progress";
  var PREFS_KEY = "flashcards:prefs";
  var BOX_DAYS = [0, 1, 3, 7, 16];   // intervalo (días) para caja 1..5
  var SESSION_CAP = 20;

  var progress = load(PROGRESS_KEY, {});
  var prefs = load(PREFS_KEY, { materias: [], unidades: [], dificultades: [], tipos: [], mezclar: true, libre: false, filtersOpen: false });

  var session = [];   // array de tarjetas
  var idx = 0;
  var revealed = false;
  var answeredMC = false;
  var ignoreDue = false;  // "repasar de todos modos"
  var focusMode = false;  // modo foco (oculta todo menos la carta)
  var inspector = { open: false, query: "", selectedId: null, simBox: null };  // inspector (sandbox)

  function load(k, def) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? def : v; } catch (e) { return def; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function savePrefs() { save(PREFS_KEY, prefs); }

  // ---------- Leitner ----------
  function today() { var d = new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function pad3(n) { return n < 10 ? "00" + n : n < 100 ? "0" + n : "" + n; }
  function daysBetween(a, b) { return Math.round((Date.parse(b) - Date.parse(a)) / 86400000); }
  function prog(id) { return progress[id]; }
  function isDue(c) {
    var p = prog(c.id);
    if (!p) return true;                         // nueva
    var iv = BOX_DAYS[Math.min(p.box, 5) - 1] || 0;
    return daysBetween(p.last, today()) >= iv;
  }
  function grade(c, outcome) {
    // outcome: 0 = no sabía, 1 = casi, 2 = sabía
    if (prefs.libre) return;                     // modo libre no escribe progreso
    var p = prog(c.id) || { box: 1, seen: 0, correct: 0, wrong: 0, last: today() };
    p.seen++;
    if (outcome === 0) { p.box = 1; p.wrong++; }
    else if (outcome === 2) { p.box = Math.min((p.box || 1) + 1, 5); p.correct++; }
    // "casi" deja la caja igual
    p.last = today();
    progress[c.id] = p;
    save(PROGRESS_KEY, progress);
  }
  function nextReviewLabel(box) {
    var d = BOX_DAYS[Math.min(box, 5) - 1] || 0;
    return d === 0 ? "vuelve hoy" : d === 1 ? "vuelve mañana" : "vuelve en " + d + " días";
  }
  // ---------- Práctica multi-variante ----------
  // Tarjetas `tipo:"practica"` traen `variantes`: array ordenado fácil→difícil (un nivel por
  // caja Leitner). El nivel = la caja actual (nueva/1 → nivel 1 … 5 → nivel 5). Cada nivel puede
  // ser una instancia suelta {pregunta,respuesta,pista} o un POOL (array) de instancias
  // intercambiables; del pool se rota por `seen` para no repetir la misma cuenta al revisitar.
  function boxOf(c) { var p = prog(c.id); return (p && p.box) ? p.box : 1; }   // caja real (nueva→1)
  function variantLevel(c, box) {       // nivel 1-based de la variante; 0 si no es practica
    var vs = c.variantes; if (!vs || !vs.length) return 0;
    return Math.min(Math.max(box == null ? boxOf(c) : box, 1), vs.length);
  }
  function variantForBox(c, box, seen) {  // instancia para una caja dada; null si no es practica
    var vs = c.variantes; if (!vs || !vs.length) return null;
    var entry = vs[variantLevel(c, box) - 1];
    if (Array.isArray(entry)) {
      if (!entry.length) return null;
      return entry[(seen || 0) % entry.length];
    }
    return entry;
  }
  function activeVariant(c) {            // instancia para la caja real (rota por seen)
    var p = prog(c.id);
    return variantForBox(c, (p && p.box) ? p.box : 1, (p && p.seen) ? p.seen : 0);
  }
  // Califica y muestra feedback visible de qué pasó con la caja + cuándo vuelve.
  function gradedToast(c, outcome) {
    if (prefs.libre) { toast("Modo libre · no se guarda", "mid"); return; }
    var before = prog(c.id);
    var prev = before ? before.box : 1;
    grade(c, outcome);
    var after = prog(c.id);
    var next = after ? after.box : 1;
    var when = " · " + nextReviewLabel(next);
    if (outcome === 0) toast("Vuelve a caja 1" + when, "bad");
    else if (outcome === 1) toast("Sigue en caja " + next + " · «Casi»" + when, "mid");
    else if (prev >= 5) toast("Dominada · caja 5 ✓" + when, "good");
    else toast("Caja " + prev + " → " + next + " ✓" + when, "good");
  }
  var toastTimer = null;
  function toast(msg, kind) {
    var host = $("toast");
    if (!host) { host = document.createElement("div"); host.id = "toast"; document.body.appendChild(host); }
    host.className = "toast " + (kind || "") + " show";
    host.textContent = msg;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { host.className = "toast " + (kind || ""); }, 1100);
  }

  // ---------- Filtros / pool ----------
  function uniq(arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); }
  function matchFilter(c) {
    if (prefs.materias.length && prefs.materias.indexOf(c.materia) < 0) return false;
    if (prefs.unidades.length && prefs.unidades.indexOf(c.materia + "/" + c.unidad) < 0) return false;
    if (prefs.dificultades.length && prefs.dificultades.indexOf(c.dificultad) < 0) return false;
    if (prefs.tipos.length && prefs.tipos.indexOf(c.tipo) < 0) return false;
    return true;
  }
  function pool() { return ALL.filter(matchFilter); }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function seqKey(c) { return c.materia + "/" + c.unidad + "/" + c.id; }

  function buildSession() {
    var p = pool();
    var cards = ignoreDue ? p.slice() : p.filter(isDue);
    if (prefs.mezclar) {
      // interleaving: mezcla las unidades DENTRO de cada materia, sin intercalar materias entre sí
      var byMateria = {};
      cards.forEach(function (c) { (byMateria[c.materia] = byMateria[c.materia] || []).push(c); });
      cards = Object.keys(byMateria).sort().reduce(function (acc, m) { return acc.concat(shuffle(byMateria[m])); }, []);
    } else {
      cards.sort(function (a, b) { return seqKey(a) < seqKey(b) ? -1 : 1; });
    }
    session = cards.slice(0, SESSION_CAP);
    idx = 0; revealed = false; answeredMC = false;
  }

  // ---------- Stats ----------
  function stats(cards) {
    var s = { total: cards.length, nuevas: 0, progreso: 0, dominadas: 0, byBox: [0, 0, 0, 0, 0, 0] };
    cards.forEach(function (c) {
      var p = prog(c.id);
      if (!p) { s.nuevas++; s.byBox[0]++; }
      else {
        s.byBox[Math.min(p.box, 5)]++;
        if (p.box >= 5) s.dominadas++; else s.progreso++;
      }
    });
    return s;
  }

  // ---------- Render markdown-lite + KaTeX ----------
  var T_OPEN = "", T_CLOSE = "";
  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function katexTo(expr, display) {
    if (!window.katex) return esc(expr);
    try { return katex.renderToString(expr, { displayMode: display, throwOnError: false }); }
    catch (e) { return esc(expr); }
  }
  function renderContent(text) {
    if (text == null) return "";
    var store = [];
    function stash(html) { store.push(html); return T_OPEN + (store.length - 1) + T_CLOSE; }
    var t = String(text);
    // 0) normalizar backticks escapados de String.raw  (\` -> `)
    t = t.replace(/\\`/g, "`");
    // 1) bloques de código  ```lang … ```  ó  ~~~lang … ~~~
    t = t.replace(/(?:```|~~~)[ \t]*([\w+-]*)\n?([\s\S]*?)(?:```|~~~)/g, function (m, lang, code) {
      return stash('<pre class="code"><code>' + esc(code.replace(/\n$/, "")) + "</code></pre>");
    });
    // 2) matemática display  $$...$$
    t = t.replace(/\$\$([\s\S]+?)\$\$/g, function (m, e) { return stash(katexTo(e.trim(), true)); });
    // 3) matemática inline  $...$
    t = t.replace(/\$([^\n$]+?)\$/g, function (m, e) { return stash(katexTo(e.trim(), false)); });
    // 4) código inline  `...`
    t = t.replace(/`([^`]+?)`/g, function (m, e) { return stash("<code>" + esc(e) + "</code>"); });
    // 5) escapar el resto
    t = esc(t);
    // 6) negrita
    t = t.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
    // 7) bloques de líneas: listas (- / 1.) y párrafos
    var lines = t.split("\n"), out = [], list = null;
    function closeList() { if (list) { out.push("<" + list.tag + ">" + list.items.join("") + "</" + list.tag + ">"); list = null; } }
    lines.forEach(function (ln) {
      var ul = ln.match(/^[ \t]*[-•]\s+(.*)$/);
      var ol = ln.match(/^[ \t]*\d+[.)]\s+(.*)$/);
      if (ul) { if (!list || list.tag !== "ul") { closeList(); list = { tag: "ul", items: [] }; } list.items.push("<li>" + ul[1] + "</li>"); }
      else if (ol) { if (!list || list.tag !== "ol") { closeList(); list = { tag: "ol", items: [] }; } list.items.push("<li>" + ol[1] + "</li>"); }
      else if (ln.trim() === "") { closeList(); out.push("<br>"); }
      else { closeList(); out.push(ln + "<br>"); }
    });
    closeList();
    t = out.join("").replace(/(<br>)+$/, "");
    // 8) reinsertar tokens
    t = t.replace(new RegExp(T_OPEN + "(\\d+)" + T_CLOSE, "g"), function (m, i) { return store[+i]; });
    return t;
  }

  // ---------- UI: helpers ----------
  var $ = function (id) { return document.getElementById(id); };
  function el(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }
  function difLabel(d) { return { facil: "Fácil", media: "Media", dificil: "Difícil" }[d] || d || "—"; }
  function tipoLabel(t) { return ({ concepto: "Concepto", texto: "Texto", "opcion-multiple": "Opción múlt.", ejercicio: "Ejercicio", codigo: "Código", completar: "Completar", practica: "Práctica" })[t] || t; }

  // ---------- UI: fuentes (links a documentos) ----------
  var FUENTE_MAX = 3;
  function basename(p) { return String(p).split("/").pop(); }
  function fuenteItems(f) {
    if (!f) return [];
    return (Array.isArray(f) ? f : [f]).map(function (it) {
      if (it && typeof it === "object") return { doc: it.doc, label: it.label || (it.doc ? basename(it.doc) : "") };
      var s = String(it);
      return s.indexOf("/") >= 0 ? { doc: s, label: basename(s) } : { label: s };
    }).filter(function (it) { return it.label || it.doc; });
  }
  function renderFuente(c) {
    var items = fuenteItems(c.fuente);
    if (!items.length) return null;
    var wrap = el('<div class="fuente"></div>');
    wrap.appendChild(el('<span class="fuente-lbl">fuente</span>'));
    items.forEach(function (it, i) {
      var span = el('<span class="src-item' + (i >= FUENTE_MAX ? " src-extra" : "") + '"></span>');
      if (it.doc) {
        var a = el('<a class="src" target="_blank" rel="noopener"></a>');
        a.setAttribute("href", "../" + it.doc);
        a.title = it.doc;
        a.textContent = it.label;
        span.appendChild(a);
      } else {
        span.textContent = it.label;
      }
      wrap.appendChild(span);
    });
    var extra = items.length - FUENTE_MAX;
    if (extra > 0) {
      wrap.classList.add("collapsed");
      var tog = el('<button class="src-toggle">+' + extra + ' más</button>');
      tog.onclick = function () { wrap.classList.remove("collapsed"); tog.remove(); };
      wrap.appendChild(tog);
    }
    return wrap;
  }

  // ---------- UI: controles ----------
  function unidadLabel(v) { return v.split("/")[1].replace(/-/g, " "); }
  function unidadShort(v) { return "u" + v.split("/")[1].replace(/^(\d+).*/, "$1"); }

  function renderControls() {
    var box = $("controls"); box.innerHTML = "";
    box.classList.toggle("collapsed", !prefs.filtersOpen);

    var materias = uniq(ALL.map(function (c) { return c.materia; })).sort();
    var hasMateria = prefs.materias.length > 0;
    var unidades = hasMateria
      ? uniq(ALL.filter(function (c) { return prefs.materias.indexOf(c.materia) >= 0; }).map(function (c) { return c.materia + "/" + c.unidad; })).sort()
      : [];
    var difs = ["facil", "media", "dificil"];
    var tipos = uniq(ALL.map(function (c) { return c.tipo; })).filter(Boolean).sort();

    // ---- head (siempre visible) ----
    var head = el('<div class="controls-head"></div>');
    var btn = el('<button class="filters-btn" aria-expanded="' + (prefs.filtersOpen ? "true" : "false") + '"><span class="chev">▸</span> Filtros</button>');
    btn.onclick = function () { prefs.filtersOpen = !prefs.filtersOpen; savePrefs(); renderControls(); };
    head.appendChild(btn);
    var insBtn = el('<button class="filters-btn insp-btn' + (inspector.open ? " on" : "") + '" title="Buscar una carta y simular cómo cambia de caja">🔍 Inspector</button>');
    insBtn.onclick = function () { inspector.open = !inspector.open; renderInspector(); renderControls(); };
    head.appendChild(insBtn);
    if (!prefs.filtersOpen) head.appendChild(activeSummary());
    if (prefs.materias.length || prefs.unidades.length || prefs.dificultades.length || prefs.tipos.length) {
      var clr = el('<button class="filters-clear" title="Limpiar todos los filtros">✕ Limpiar</button>');
      clr.onclick = function () { prefs.materias = []; prefs.unidades = []; prefs.dificultades = []; prefs.tipos = []; savePrefs(); restart(); renderControls(); };
      head.appendChild(clr);
    }
    box.appendChild(head);

    // ---- body (colapsable) ----
    var body = el('<div class="controls-body"></div>');

    var row1 = el('<div class="row"></div>');
    row1.appendChild(chipGroup("Materia", materias, prefs.materias, function (v) { return v; }, function (v) { return v; }));
    if (hasMateria) {
      row1.appendChild(chipGroup("Unidad", unidades, prefs.unidades, function (v) { return v; }, unidadLabel));
    } else {
      var ug = el('<div class="fgroup"></div>');
      ug.appendChild(el("<label>Unidad</label>"));
      ug.appendChild(el('<div class="fhint">Elegí una materia para filtrar por unidad</div>'));
      row1.appendChild(ug);
    }
    body.appendChild(row1);

    var row2 = el('<div class="row"></div>');
    row2.appendChild(chipGroup("Dificultad", difs, prefs.dificultades, function (v) { return v; }, difLabel, "dif-"));
    row2.appendChild(chipGroup("Tipo", tipos, prefs.tipos, function (v) { return v; }, tipoLabel));
    body.appendChild(row2);

    var tg = el('<div class="toggles"></div>');
    tg.appendChild(toggle("Mezclar (interleaving)", "Mezcla las unidades de una materia (sin mezclar materias)", prefs.mezclar, function (v) { prefs.mezclar = v; savePrefs(); restart(); }));
    tg.appendChild(toggle("Modo libre", "Practicar sin guardar progreso", prefs.libre, function (v) { prefs.libre = v; savePrefs(); renderStage(); }));
    tg.appendChild(el('<div class="spacer"></div>'));
    var reset = el('<button class="btn ghost tiny">Reiniciar progreso</button>');
    reset.onclick = function () {
      if (confirm("¿Borrar todo el progreso de repaso guardado en este navegador? No afecta el contenido de las cartas.")) {
        progress = {}; save(PROGRESS_KEY, progress); restart();
      }
    };
    tg.appendChild(reset);
    body.appendChild(tg);

    box.appendChild(body);
  }

  // Resumen de filtros activos (mini-chips removibles) — solo cuando el panel está colapsado.
  function activeSummary() {
    var wrap = el('<div class="sumchips"></div>');
    var any = false;
    function add(arr, labeler, onRemove) {
      arr.slice().forEach(function (val) {
        any = true;
        var c = el('<span class="sumchip">' + labeler(val) + ' <b class="x" title="Quitar">✕</b></span>');
        c.querySelector(".x").onclick = function () { onRemove(val); savePrefs(); restart(); renderControls(); };
        wrap.appendChild(c);
      });
    }
    add(prefs.materias, function (v) { return v; }, function (v) {
      prefs.materias.splice(prefs.materias.indexOf(v), 1);
      prefs.unidades = prefs.unidades.filter(function (u) { return prefs.materias.indexOf(u.split("/")[0]) >= 0; });
    });
    add(prefs.unidades, unidadShort, function (v) { prefs.unidades.splice(prefs.unidades.indexOf(v), 1); });
    add(prefs.dificultades, difLabel, function (v) { prefs.dificultades.splice(prefs.dificultades.indexOf(v), 1); });
    add(prefs.tipos, tipoLabel, function (v) { prefs.tipos.splice(prefs.tipos.indexOf(v), 1); });
    if (!any) wrap.appendChild(el('<span class="sumchips-empty">sin filtros · todo el banco</span>'));
    return wrap;
  }

  function chipGroup(label, values, selected, valOf, labelOf, cls) {
    var g = el('<div class="fgroup"></div>');
    g.appendChild(el("<label>" + label + "</label>"));
    var chips = el('<div class="chips"></div>');
    if (!values.length) chips.appendChild(el('<span class="chip" style="opacity:.5;cursor:default">—</span>'));
    values.forEach(function (v) {
      var val = valOf(v);
      var c = el('<span class="chip ' + (cls ? cls + val + " " : "") + (selected.indexOf(val) >= 0 ? "on" : "") + '">' + labelOf(v) + "</span>");
      c.onclick = function () {
        var i = selected.indexOf(val);
        if (i >= 0) selected.splice(i, 1); else selected.push(val);
        if (label === "Materia") prefs.unidades = prefs.unidades.filter(function (u) { return prefs.materias.indexOf(u.split("/")[0]) >= 0; });
        savePrefs(); restart(); renderControls();
      };
      chips.appendChild(c);
    });
    g.appendChild(chips);
    return g;
  }
  function toggle(label, hint, val, onChange) {
    var t = el('<label class="tg"><input type="checkbox" ' + (val ? "checked" : "") + '><span>' + label + ' <span class="hint">· ' + hint + "</span></span></label>");
    t.querySelector("input").onchange = function (e) { onChange(e.target.checked); };
    return t;
  }

  // ---------- UI: stats header ----------
  function scopeLabel() {
    if (prefs.unidades.length === 1) {
      var parts = prefs.unidades[0].split("/");
      return parts[0] + " · u" + parts[1].replace(/^(\d+).*/, "$1");
    }
    if (prefs.unidades.length > 1) return prefs.unidades.length + " unidades";
    if (prefs.materias.length === 1) return prefs.materias[0];
    if (prefs.materias.length > 1) return prefs.materias.length + " materias";
    return "todo el banco";
  }
  function renderStats() {
    var s = stats(pool());
    $("stats").innerHTML =
      '<div class="stat nuevas"><b>' + s.nuevas + '</b><span>nuevas</span></div>' +
      '<div class="stat progreso"><b>' + s.progreso + '</b><span>en repaso</span></div>' +
      '<div class="stat dominadas"><b>' + s.dominadas + '</b><span>dominadas</span></div>' +
      (DUP_IDS.length ? '<div class="stat dupwarn" title="Hay ids repetidos en el banco (revisá la consola). El progreso se comparte entre cartas con el mismo id."><b>⚠ ' + uniq(DUP_IDS).length + '</b><span>ids dup</span></div>' : '');
    var pb = $("progress");
    if (!pb) return;
    if (!s.total) { pb.innerHTML = '<div class="pbar-head">Sin cartas con este filtro</div>'; return; }
    var pct = Math.round(s.dominadas / s.total * 100);
    var SEGS = [
      { cls: "nuevas", label: "Nuevas", tip: "Nuevas (sin empezar)" },
      { cls: "b1", label: "Caja 1", tip: "Caja 1" },
      { cls: "b2", label: "Caja 2", tip: "Caja 2" },
      { cls: "b3", label: "Caja 3", tip: "Caja 3" },
      { cls: "b4", label: "Caja 4", tip: "Caja 4" },
      { cls: "b5", label: "Caja 5", tip: "Caja 5 · dominada" }
    ];
    var bar = "", legend = "";
    SEGS.forEach(function (g, i) {
      var n = s.byBox[i];
      var w = n / s.total * 100;
      var p = Math.round(w);
      bar += '<i class="seg ' + g.cls + '" style="width:' + w + '%" title="' + g.tip + ' · ' + n + ' carta' + (n === 1 ? '' : 's') + ' · ' + p + '%">' +
        (w >= 9 ? '<span class="seg-n">' + n + '</span>' : '') + '</i>';
      legend += '<span class="' + (n ? '' : 'zero') + '"><i class="sw ' + g.cls + '"></i>' + g.label + ' <b>' + n + '</b></span>';
    });
    pb.innerHTML =
      '<div class="pbar-head" title="«Dominado» = carta en la caja máxima (5). Es una foto del momento: una dominada reaparece cada ~16 días, así que la meta es mantener el % alto, no llegar a 100% una sola vez.">' +
        '<span class="pbar-pct">' + pct + '%</span> dominado ' +
        '<span class="pbar-scope">· ' + scopeLabel() + ' · ' + s.total + ' carta' + (s.total === 1 ? '' : 's') + '</span>' +
      '</div>' +
      '<div class="pbar">' + bar + '</div>' +
      '<div class="pbar-legend">' + legend + '</div>';
  }

  // ---------- UI: stage (carta) ----------
  function renderStage() {
    renderStats();
    var stage = $("stage"); stage.innerHTML = "";

    if (prefs.libre) stage.appendChild(el('<div class="libre-banner">⚠ Modo libre activo · el progreso NO se guarda</div>'));

    if (!ALL.length) {
      stage.appendChild(el('<div class="notice"><div class="big">📭</div><h2>Todavía no hay cartas</h2><p>Generá un mazo con la skill <code>flashcards</code> o agregá un archivo en <code>banco/</code>.</p></div>'));
      return;
    }
    if (!session.length) {
      if (!pool().length) {
        stage.appendChild(el('<div class="notice"><div class="big">🔍</div><h2>Ninguna carta con esos filtros</h2><p>Ajustá materia, unidad, dificultad o tipo.</p></div>'));
      } else {
        var done = el('<div class="notice"><div class="big">✅</div><h2>¡Todo al día!</h2><p>No hay cartas pendientes de repaso según el cronograma Leitner.</p></div>');
        var b = el('<button class="btn primary" style="margin-top:1rem">Repasar de todos modos</button>');
        b.onclick = function () { ignoreDue = true; buildSession(); renderStage(); };
        done.appendChild(b);
        stage.appendChild(done);
      }
      return;
    }
    if (idx >= session.length) { renderDone(stage); return; }

    var c = session[idx];
    var v = activeVariant(c);                                  // variante activa (solo "practica")
    var lvl = v ? variantLevel(c) : 0;                         // nivel actual (= caja) para practica
    var dif = v ? (lvl <= 2 ? "facil" : lvl === 3 ? "media" : "dificil") : (c.dificultad || "facil");
    var preguntaTxt = v ? v.pregunta : c.pregunta;
    var respuestaTxt = v ? v.respuesta : c.respuesta;
    var pistaTxt = v ? v.pista : c.pista;
    var tone = "tone-" + dif;
    var bar = el('<div class="deckbar"><span>' + (idx + 1) + " / " + session.length + " · " + (c.materia || "") + " · " + (c._deckTitulo || c.unidad || "") + "</span></div>");
    bar.appendChild(boxDots(c));
    stage.appendChild(bar);

    var card = el('<div class="card ' + tone + '"></div>');
    var meta = '<div class="meta">' +
      '<span class="badge tipo">' + tipoLabel(c.tipo) + "</span>" +
      (v ? '<span class="badge dif-' + dif + '">Nivel ' + lvl + "/" + c.variantes.length + "</span>"
         : '<span class="badge dif-' + dif + '">' + difLabel(dif) + "</span>") +
      (c.tags && c.tags.length ? '<span class="badge">' + c.tags.slice(0, 3).join(" · ") + "</span>" : "") +
      "</div>";
    card.appendChild(el(meta));
    card.appendChild(el('<div class="qlabel">Pregunta</div>'));
    var q = el('<div class="content q"></div>'); q.innerHTML = renderContent(preguntaTxt); card.appendChild(q);

    if (c.tipo === "opcion-multiple" && Array.isArray(c.opciones)) {
      card.appendChild(renderMC(c));
    } else {
      if (!revealed) {
        if (pistaTxt) card.appendChild(el('<div class="pista">💡 ' + esc(pistaTxt) + "</div>"));
      } else {
        card.appendChild(el('<div class="divider"></div>'));
        var rh = el('<div class="resp-head"><span class="qlabel">Respuesta</span></div>');
        rh.appendChild(levelPill(c));
        card.appendChild(rh);
        var a = el('<div class="content answer"></div>'); a.innerHTML = renderContent(respuestaTxt); card.appendChild(a);
      }
    }
    // la fuente solo se muestra junto con la respuesta (revelada / MC respondida)
    var answerShown = (c.tipo === "opcion-multiple") ? answeredMC : revealed;
    if (answerShown) { var fdiv = renderFuente(c); if (fdiv) card.appendChild(fdiv); }
    stage.appendChild(card);

    // acciones
    var actions = el('<div class="actions"></div>');
    if (c.tipo === "opcion-multiple") {
      if (answeredMC) actions.appendChild(nextBtn());
    } else if (!revealed) {
      var rev = el('<button class="btn primary">Revelar respuesta &nbsp;<kbd>espacio</kbd></button>');
      rev.onclick = reveal; actions.appendChild(rev);
    } else {
      actions.appendChild(gradeButtons(c));
    }
    stage.appendChild(actions);
  }

  function boxDots(c) {
    var p = prog(c.id); var box = p ? p.box : 0;
    var d = el('<div class="boxdots" title="Caja Leitner ' + box + ' — el repaso espaciado tiene 5 cajas"></div>');
    d.appendChild(el('<span class="boxlbl">' + (box ? "caja " + box : "nueva") + "</span>"));
    for (var i = 1; i <= 5; i++) d.appendChild(el("<i class=" + (i <= box ? '"fill"' : '""') + "></i>"));
    return d;
  }
  // Pill coloreada con el nivel (caja) actual de la carta — se muestra junto a la respuesta.
  function levelPill(c) {
    var p = prog(c.id); var box = p ? p.box : 0;
    var span = el('<span class="lvl-pill lvl-' + box + '"></span>');
    span.textContent = box ? "Caja " + box : "Nueva";
    span.title = "Caja Leitner actual de esta carta (1–5)";
    return span;
  }

  function renderMC(c) {
    var wrap = el('<div class="opts"></div>');
    var keys = "ABCDEFGH";
    c.opciones.forEach(function (op, i) {
      var o = el('<button class="opt"><span class="key">' + keys[i] + '</span><span class="otext"></span></button>');
      o.querySelector(".otext").innerHTML = renderContent(op);
      if (answeredMC) {
        o.classList.add("locked");
        if (i === c.correcta) o.classList.add("correct");
        else if (i === c._chosen) o.classList.add("wrong");
      } else {
        o.onclick = function () { answerMC(c, i); };
      }
      wrap.appendChild(o);
    });
    if (answeredMC) {
      wrap.appendChild(el('<div class="divider"></div>'));
      var rh = el('<div class="resp-head"></div>');
      if (c.respuesta) rh.appendChild(el('<span class="qlabel">Explicación</span>'));
      rh.appendChild(levelPill(c));
      wrap.appendChild(rh);
      if (c.respuesta) { var ex = el('<div class="content answer"></div>'); ex.innerHTML = renderContent(c.respuesta); wrap.appendChild(ex); }
    }
    return wrap;
  }
  function answerMC(c, i) {
    if (answeredMC) return;
    c._chosen = i; answeredMC = true;
    gradedToast(c, i === c.correcta ? 2 : 0);
    renderStage();
  }

  function gradeButtons(c) {
    var g = el('<div class="grade"></div>');
    var defs = [["bad", "No la sabía", "↓ a caja 1", 0], ["mid", "Casi", "= misma caja", 1], ["good", "La sabía", "↑ +1 caja", 2]];
    defs.forEach(function (d, n) {
      var b = el('<button class="gbtn ' + d[0] + '"><kbd>' + (n + 1) + '</kbd>' + d[1] + " <small>" + d[2] + "</small></button>");
      b.onclick = function () { gradedToast(c, d[3]); advance(); };
      g.appendChild(b);
    });
    return g;
  }
  function nextBtn() {
    var b = el('<button class="btn primary">Siguiente &nbsp;<kbd>→</kbd></button>');
    b.onclick = advance; return b;
  }

  function renderDone(stage) {
    var s = stats(pool());
    var n = el('<div class="notice"><div class="big">🎉</div><h2>Sesión completa</h2><p>Repasaste ' + session.length + ' carta(s).<br>Dominadas: ' + s.dominadas + ' · En repaso: ' + s.progreso + ' · Nuevas restantes: ' + s.nuevas + '</p></div>');
    var b = el('<button class="btn primary" style="margin-top:1rem">Nueva sesión</button>');
    b.onclick = function () { ignoreDue = false; restart(); };
    n.appendChild(b);
    stage.appendChild(n);
  }

  // ---------- Inspector (buscar carta + simular caja · sandbox) ----------
  function inspById(id) { for (var i = 0; i < ALL.length; i++) if (ALL[i].id === id) return ALL[i]; return null; }
  function inspMatch(c, q) {
    if (c.id.toLowerCase().indexOf(q) >= 0) return true;
    if ((c.tags || []).some(function (t) { return String(t).toLowerCase().indexOf(q) >= 0; })) return true;
    var hay = (c.pregunta || "") + " " + (c.concepto || "") + " " + (c.respuesta || "") + " " + (c._deckTitulo || "");
    if (c.variantes) hay += " " + JSON.stringify(c.variantes);
    return hay.toLowerCase().indexOf(q) >= 0;
  }
  function searchCards(q) {
    q = (q || "").trim().toLowerCase();
    if (!q) return [];
    var out = [];
    for (var i = 0; i < ALL.length && out.length < 50; i++) if (inspMatch(ALL[i], q)) out.push(ALL[i]);
    return out;
  }
  function plainText(s) {  // LaTeX/markdown → texto plano para snippets de la lista
    return String(s || "").replace(/\$\$?/g, "").replace(/\\[a-zA-Z]+/g, "").replace(/[{}*_`~]/g, "").replace(/\s+/g, " ").trim();
  }

  function renderInspector() {
    document.body.classList.toggle("inspecting", inspector.open);
    var host = $("inspector"); if (!host) return;
    host.innerHTML = "";
    if (!inspector.open) return;

    var head = el('<div class="insp-head"><h2>🔍 Inspector</h2></div>');
    var close = el('<button class="btn ghost tiny">✕ Cerrar</button>');
    close.onclick = function () { inspector.open = false; renderInspector(); renderControls(); };
    head.appendChild(close);
    host.appendChild(head);

    var search = el('<input class="insp-search" type="search" placeholder="Buscar por texto, id o tag…">');
    search.value = inspector.query;
    search.oninput = function () { inspector.query = search.value; renderResults(); };
    host.appendChild(search);

    var body = el('<div class="insp-body"></div>');
    var listCol = el('<div class="insp-list"></div>');
    var detailCol = el('<div class="insp-detail"></div>');
    body.appendChild(listCol); body.appendChild(detailCol);
    host.appendChild(body);

    function renderResults() {
      listCol.innerHTML = "";
      if (!inspector.query.trim()) { listCol.appendChild(el('<div class="insp-hint">Escribí para buscar entre las ' + ALL.length + ' cartas.</div>')); return; }
      var res = searchCards(inspector.query);
      if (!res.length) { listCol.appendChild(el('<div class="insp-hint">Sin resultados.</div>')); return; }
      listCol.appendChild(el('<div class="insp-count">' + res.length + (res.length === 50 ? "+" : "") + " resultado" + (res.length === 1 ? "" : "s") + '</div>'));
      res.forEach(function (c) {
        var snippet = plainText(c.pregunta || (c.variantes ? c.concepto : "")).slice(0, 70);
        var it = el('<button class="insp-item' + (c.id === inspector.selectedId ? " on" : "") + '"></button>');
        it.innerHTML = '<span class="insp-item-top"><span class="badge tipo">' + tipoLabel(c.tipo) + '</span> <code>' + esc(c.id) + '</code></span>' +
          '<span class="insp-item-sub">' + esc(c.materia) + " · " + esc(c._deckTitulo || c.unidad || "") + '</span>' +
          '<span class="insp-item-snip">' + esc(snippet) + '</span>';
        it.onclick = function () { inspector.selectedId = c.id; inspector.simBox = boxOf(c); renderResults(); renderDetail(); };
        listCol.appendChild(it);
      });
    }

    function renderDetail() {
      detailCol.innerHTML = "";
      var c = inspector.selectedId ? inspById(inspector.selectedId) : null;
      if (!c) { detailCol.appendChild(el('<div class="insp-hint">Elegí una carta de la lista para inspeccionarla.</div>')); return; }
      var p = prog(c.id);
      var realBox = p ? p.box : 0;
      if (inspector.simBox == null) inspector.simBox = realBox || 1;
      var isP = !!(c.variantes && c.variantes.length);

      var meta = el('<div class="insp-meta"></div>');
      meta.innerHTML = '<span class="badge tipo">' + tipoLabel(c.tipo) + '</span> <code>' + esc(c.id) + '</code>' +
        '<div class="insp-sub">' + esc(c.materia) + " · " + esc(c._deckTitulo || c.unidad || "") + (c.tags && c.tags.length ? " · " + esc(c.tags.join(" · ")) : "") + '</div>';
      detailCol.appendChild(meta);

      var est = el('<div class="insp-state"></div>');
      est.innerHTML = '<div class="insp-state-title">Estado Leitner (real)</div>' +
        '<div class="insp-state-grid">' +
          '<span>Caja</span><b>' + (realBox || "nueva") + '</b>' +
          '<span>Vistas</span><b>' + (p ? p.seen : 0) + '</b>' +
          '<span>Aciertos</span><b>' + (p ? p.correct : 0) + '</b>' +
          '<span>Errores</span><b>' + (p ? p.wrong : 0) + '</b>' +
          '<span>Último</span><b>' + (p && p.last ? p.last : "—") + '</b>' +
          '<span>Próximo</span><b>' + nextReviewLabel(realBox || 1) + '</b>' +
        '</div>';
      detailCol.appendChild(est);

      var sim = el('<div class="insp-sim"></div>');
      sim.appendChild(el('<div class="insp-state-title">Simular caja · sandbox (no toca tu progreso)</div>'));
      var ctrl = el('<div class="insp-sim-ctrl"></div>');
      var dn = el('<button class="btn tiny" title="bajar caja">↓</button>');
      var lbl = el('<span class="insp-sim-box"></span>');
      var up = el('<button class="btn tiny" title="subir caja">↑</button>');
      var rst = el('<button class="btn ghost tiny">reset</button>');
      var simView = el('<div class="insp-sim-view"></div>');
      function refreshSim() {
        var b = inspector.simBox;
        lbl.innerHTML = 'Caja <b>' + b + '</b> / 5 · <span class="insp-next">' + nextReviewLabel(b) + '</span>';
        simView.innerHTML = "";
        if (isP) {
          var v = variantForBox(c, b, 0);
          var rh = el('<div class="resp-head"><span class="qlabel">Ejercicio en caja ' + b + '</span></div>');
          rh.appendChild(el('<span class="lvl-pill lvl-' + b + '">Nivel ' + variantLevel(c, b) + "/" + c.variantes.length + '</span>'));
          simView.appendChild(rh);
          var qd = el('<div class="content q"></div>'); qd.innerHTML = renderContent(v ? v.pregunta : ""); simView.appendChild(qd);
          simView.appendChild(el('<div class="divider"></div>'));
          var ad = el('<div class="content answer"></div>'); ad.innerHTML = renderContent(v ? v.respuesta : ""); simView.appendChild(ad);
        } else {
          simView.appendChild(el('<div class="insp-hint">No es carta de práctica: el contenido no cambia entre cajas, solo el intervalo de repaso (arriba).</div>'));
        }
        [].forEach.call(detailCol.querySelectorAll(".insp-lvl"), function (e2) { e2.classList.toggle("on", +e2.getAttribute("data-lvl") === b); });
      }
      dn.onclick = function () { inspector.simBox = Math.max(1, inspector.simBox - 1); refreshSim(); };
      up.onclick = function () { inspector.simBox = Math.min(5, inspector.simBox + 1); refreshSim(); };
      rst.onclick = function () { inspector.simBox = realBox || 1; refreshSim(); };
      ctrl.appendChild(dn); ctrl.appendChild(lbl); ctrl.appendChild(up); ctrl.appendChild(rst);
      sim.appendChild(ctrl); sim.appendChild(simView);
      detailCol.appendChild(sim);

      if (isP) {
        var lvls = el('<div class="insp-lvls"></div>');
        lvls.appendChild(el('<div class="insp-state-title">Los ' + c.variantes.length + ' niveles · caja → ejercicio</div>'));
        c.variantes.forEach(function (lvl, i) {
          var pool = Array.isArray(lvl) ? lvl : [lvl];
          var lb = el('<div class="insp-lvl" data-lvl="' + (i + 1) + '"></div>');
          lb.appendChild(el('<div class="insp-lvl-h"><span class="lvl-pill lvl-' + (i + 1) + '">Nivel ' + (i + 1) + '</span> <span class="insp-lvl-meta">caja ' + (i + 1) + " · " + pool.length + " variante" + (pool.length === 1 ? "" : "s") + '</span></div>'));
          pool.forEach(function (v) {
            var inst = el('<div class="insp-inst"></div>');
            var qd = el('<div class="content q"></div>'); qd.innerHTML = renderContent(v.pregunta || ""); inst.appendChild(qd);
            var ad = el('<div class="content answer"></div>'); ad.innerHTML = renderContent(v.respuesta || ""); inst.appendChild(ad);
            lb.appendChild(inst);
          });
          lvls.appendChild(lb);
        });
        detailCol.appendChild(lvls);
      }
      refreshSim();
    }

    renderResults();
    renderDetail();
  }

  // ---------- Flujo ----------
  function reveal() { if (!revealed) { revealed = true; renderStage(); } }
  function advance() { idx++; revealed = false; answeredMC = false; renderStage(); }
  function back() { if (idx > 0) { idx--; revealed = false; answeredMC = false; renderStage(); } }
  function restart() { buildSession(); renderStage(); }
  function setFocus(on) {
    focusMode = !!on;
    document.body.classList.toggle("focus", focusMode);
    var b = $("focusToggle");
    if (b) {
      b.setAttribute("aria-pressed", focusMode ? "true" : "false");
      b.setAttribute("aria-label", focusMode ? "Salir de modo foco" : "Entrar a modo foco");
    }
  }

  // ---------- Teclado ----------
  document.addEventListener("keydown", function (e) {
    if (inspector.open) { if (e.key === "Escape") { e.preventDefault(); inspector.open = false; renderInspector(); renderControls(); } return; }
    if (e.key === "Escape") { if (focusMode) { e.preventDefault(); setFocus(false); } return; }
    if (!session.length || idx >= session.length) return;
    var c = session[idx];
    if (e.code === "Space" || e.key === "Enter") {
      if (c.tipo !== "opcion-multiple" && !revealed) { e.preventDefault(); reveal(); }
      return;
    }
    if (e.key === "ArrowRight") { advance(); return; }
    if (e.key === "ArrowLeft") { back(); return; }
    if (c.tipo === "opcion-multiple") {
      if (!answeredMC && /^[1-8]$/.test(e.key)) { var i = +e.key - 1; if (i < c.opciones.length) answerMC(c, i); }
      else if (answeredMC && (e.key === "ArrowRight" || e.code === "Space")) advance();
      return;
    }
    if (revealed && /^[123]$/.test(e.key)) gradedToast(c, +e.key - 1), advance();
  });

  // ---------- Boot ----------
  function boot() {
    if (boot._done) return; boot._done = true;
    // saneo prefs contra datos reales
    var validMaterias = uniq(ALL.map(function (c) { return c.materia; }));
    prefs.materias = prefs.materias.filter(function (m) { return validMaterias.indexOf(m) >= 0; });
    // las unidades requieren su materia seleccionada (limpia prefs viejas inconsistentes)
    prefs.unidades = prefs.unidades.filter(function (u) { return prefs.materias.indexOf(u.split("/")[0]) >= 0; });
    renderControls();
    buildSession();
    renderStage();
    var fb = $("focusToggle"); if (fb) fb.onclick = function () { setFocus(!focusMode); };
    // service worker solo si está servido por http(s)
    if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
    console.log("[flashcards] listo:", ALL.length, "cartas en", DECKS.length, "mazo(s)");
  }
})();
