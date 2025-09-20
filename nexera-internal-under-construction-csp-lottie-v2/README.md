# NexERA - CSP Lottie v2 (no inline, optional no-XHR)

Incluye animaciones Lottie (pumpjack y drill) y **variantes sin XHR** para entornos CSP donde `connect-src` restringe requests.

## Archivos clave
- `assets/pumpjack.json`, `assets/drill.json` — animaciones Lottie.
- `under_construction.css` — estilos sin inline.
- `under_construction.js` — inicia Lottie desde `path` o desde `window.NEXERA_ANIM` (no-XHR).
- `under_construction_animdata.js` — define `window.NEXERA_ANIM = { pumpjack, drill }` (evita XHR).
- `vendor/lottie_light.min.js` — **colocar aquí** el player self-hosted (o usá CDN en las variantes CDN).

## Demos
- `index_self_hosted.html` — Lottie self-hosted, carga JSON por `path` (requiere `connect-src 'self'`).
- `index_self_hosted_no_xhr.html` — Lottie self-hosted **sin XHR** (usa `animationData` embebido en JS externo).
- `index_cdn_no_xhr.html` — Lottie por CDN + no-XHR.

## CSP mínima sugerida
**Self-hosted + no-XHR:**
```
Content-Security-Policy:
  default-src 'self';
  img-src 'self' data:;
  style-src 'self';
  script-src 'self';
  connect-src 'self';  # (no-XHR puede prescindir de esto si no cargás por path)
  object-src 'none';
  base-uri 'none';
  frame-ancestors 'self';
```
Si usás CDN: agrega `https://cdn.jsdelivr.net` a `script-src`.

> No hay `unsafe-inline` ni `unsafe-eval`. Evitamos inline `style` y `onclick`. El modo **no-XHR** evita llamadas de red para el JSON.
