/* Cloudflare Worker — almacén de progreso para sincronizar las flashcards entre dispositivos.
   Un solo usuario: una clave en KV ("progress") protegida por un secret (Bearer).

   Endpoints (mismo path, cualquiera):
     OPTIONS         → preflight CORS
     GET             → devuelve el JSON de progreso ({} si vacío)
     POST  <json>    → guarda el JSON de progreso
   Auth: header  Authorization: Bearer <SYNC_SECRET>

   Deploy: ver sync/README.md. Necesita un KV namespace (binding KV) y el secret SYNC_SECRET. */

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};
const JSON_HEADERS = { ...CORS, "Content-Type": "application/json" };
const KEY = "progress";

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    // Auth: el Bearer debe coincidir con el secret del Worker.
    const token = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    if (!env.SYNC_SECRET || token !== env.SYNC_SECRET) {
      return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401, headers: JSON_HEADERS });
    }

    if (request.method === "GET") {
      const v = await env.KV.get(KEY);
      return new Response(v || "{}", { headers: JSON_HEADERS });
    }

    if (request.method === "POST") {
      const body = await request.text();
      try { JSON.parse(body); } catch (e) {
        return new Response(JSON.stringify({ error: "invalid json" }), { status: 400, headers: JSON_HEADERS });
      }
      await env.KV.put(KEY, body);
      return new Response(JSON.stringify({ ok: true }), { headers: JSON_HEADERS });
    }

    return new Response(JSON.stringify({ error: "method not allowed" }), { status: 405, headers: JSON_HEADERS });
  },
};
