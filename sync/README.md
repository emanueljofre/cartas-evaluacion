# Sync backend — Cloudflare Worker + KV

Almacén central del progreso de las flashcards para sincronizarlo entre dispositivos (un solo
usuario). El Worker no se publica en GitHub Pages: el workflow excluye `sync/`.

## Deploy (una sola vez)

Requisitos: una cuenta **gratis** de Cloudflare (email, sin tarjeta) y Node instalado.

```bash
cd _flashcards/sync

# 1) Autenticarse (abre el navegador)
npx wrangler login

# 2) Crear el KV namespace y copiar el id que imprime al binding "id" de wrangler.toml
npx wrangler kv namespace create KV

# 3) Definir el secret (elegí una clave larga y aleatoria; la misma irá en la app)
npx wrangler secret put SYNC_SECRET

# 4) Publicar
npx wrangler deploy
```

`wrangler deploy` imprime la URL pública, p. ej. `https://cartas-sync.<subdominio>.workers.dev`.

## Conectar la app

En la app (local o en GitHub Pages) → botón **☁ Sync** → pegar la **URL** del Worker y la **clave**
(`SYNC_SECRET`) → *Guardar y sincronizar*. Repetir en cada dispositivo con la **misma** URL y clave.

## Seguridad

- La URL es pública (es solo un endpoint); el acceso lo protege el secret (`Authorization: Bearer …`).
- El secret vive **solo** en el Worker (`env.SYNC_SECRET`) y en el `localStorage` del navegador.
  **Nunca** se commitea al repo.

## Probar localmente (sin cuenta)

```bash
cd _flashcards/sync
SYNC_SECRET=test npx wrangler dev        # levanta el Worker en http://localhost:8787
# en otra terminal:
curl -H "Authorization: Bearer test" http://localhost:8787            # → {}
curl -X POST -H "Authorization: Bearer test" -d '{"x":1}' http://localhost:8787
curl -H "Authorization: Bearer test" http://localhost:8787            # → {"x":1}
curl -i http://localhost:8787                                         # → 401 (sin Bearer)
```
