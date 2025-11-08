## Site hardening and performance optimizations (Maximus) — 2025-11-08

### 1) Liveness and probe isolation
- Added `routes/livez.ts` returning “ok” with `cache-control: no-store`.
- Purpose: Prevent K8s liveness probes from touching heavy SSR.

### 2) Favicon fast-path
- Added `routes/favicon.ico.ts` serving static icon directly with `cache-control: public, max-age=86400, immutable`.
- Purpose: Bypass Live/block resolution and avoid loader work on `/favicon.ico`.

### 3) True Async Rendering for heavy sections
- Implemented `LoadingFallback` exports so sections can be lazy-rendered without warnings:
  - `sections/Images/Carousel.tsx`
  - `sections/Content/BannerSlider.tsx`
  - `sections/Content/BannerSlider2.tsx`
  - `sections/Product/ProductShelf.tsx`
  - `sections/Product/SearchResult.tsx` (PLP)
  - `sections/Product/ProductDetails.tsx` (PDP)
  - `sections/Product/ProductShelfPdp.tsx`
- Impact: Lighter SSR, better TTFB/FCP, fewer long blocks on the critical path.

### 4) Lazy wrapping of expensive blocks (Home, PLP, PDP, Category PLPs)
- Home (`.deco/blocks/Home.json`):
  - Wrapped first heavy `site/sections/Product/ProductShelf.tsx` in `website/sections/Rendering/Lazy.tsx`.
  - Other shelves later in the page were already Lazy.
- PLP (`.deco/blocks/Search Page.json`):
  - Wrapped `site/sections/Product/SearchResult.tsx` in Lazy.
- PDP (`.deco/blocks/Product Page.json`):
  - Wrapped `site/sections/Product/ProductDetails.tsx` and `site/sections/Product/ProductShelfPdp.tsx` in Lazy.
- Category PLPs (`.deco/blocks/Categories.json`):
  - Wrapped the `site/sections/Product/SearchResult.tsx` block in Lazy, affecting hot routes like:
    - `/tecidos`, `/tecidos/malhas`, `/tecidos/organza`, `/tecidos/rendas-e-tules`, `/tecidos/alfaiataria`, `/tecidos/linho`.
- Impact: Async rendering on top traffic pages; removes “Async not implemented” warnings and reduces SSR work.

### 5) Timeouts for networked loaders
- Pattern: `AbortController` with 8s–10s budget; always clear timers.
- Applied:
  - `sections/Social/InstagramPosts.tsx`
  - `sections/Categories.tsx`
- Impact: Prevents hung SSR paths and reduces 503 risk under network stalls.

### 6) Cache public loader results (instance memory)
- Use safe, short TTL in-memory caches for public data when proxy cache is not wired.
- Applied:
  - `sections/Categories.tsx`: category tree cached for 6h.
  - `sections/Social/InstagramPosts.tsx`: Instagram feed cached for 10m.
- Impact: Cuts repeated origin calls across requests within instance lifetime; stabilizes render.

### 7) De-duplicate client fetches and prevent leaks
- Move client fetches into `useEffect` with `AbortController` and stable deps:
  - `components/product/AddToCartButton/vtex.tsx`
  - `components/product/FilePdf.tsx`
- Impact: Avoids repeated fetches on every render; prevents memory leaks during navigation/unmount.

### 8) Keep user features; remove legacy wiring safely
- Removed legacy `decohub` app wiring that wasn’t functionally required.
- YourViews remains fully functional via `sections/Integrations/YourviewsIntegrations.tsx` and PDP anchors; do not remove customer-visible features.

### 9) Cache headers hygiene
- Tiny endpoints set `no-store` (e.g., `/livez`).
- Static assets set long-lived immutable cache (`/favicon.ico`).

### 10) PLP/PDP UX fallbacks
- PLP: grid skeleton while search loads.
- PDP: image + info skeleton to avoid layout jank and reduce perceived latency.

### 11) Post-change verification checklist
- Visit `/livez` → expect “ok”.
- Navigate Home/PLP/PDP → no “Async not implemented” warnings.
- Check logs:
  - Fewer long SSR spans on Home/PLP/PDP.
  - HITs for Instagram/category tree in subsequent requests within process lifetime.
- Observe fewer 503s and faster navigations on top pages (especially `/`, `/s`, `/tecidos/*`, and PDPs).

### 12) Pitfalls to avoid
- Don’t lazy-wrap unsupported sections without fallbacks.
- Don’t remove blocks powering user-visible features (e.g., YourViews) without a safe replacement.
- Don’t introduce blocking fetches in render paths; prefer loaders or effects with abort and caching.

### 13) Optional next steps (for further gains)
- Consider Lazy for additional below-the-fold Home shelves if SSR remains heavy.
- Centralize header/footer as normal sections (avoid PageInclude indirections if any remain).
- Where available, migrate public loaders to platform proxy caching helpers (e.g., fetch with proxy cache).

### Files/blocks touched (high-signal)
- Routes: `routes/livez.ts`, `routes/favicon.ico.ts`.
- Sections (fallbacks): `sections/Images/Carousel.tsx`, `sections/Content/BannerSlider*.tsx`, `sections/Product/ProductShelf*.tsx`, `sections/Product/SearchResult.tsx`, `sections/Product/ProductDetails.tsx`.
- Loaders (timeouts/cache): `sections/Social/InstagramPosts.tsx`, `sections/Categories.tsx`.
- Client effects: `components/product/AddToCartButton/vtex.tsx`, `components/product/FilePdf.tsx`.
- Blocks (Lazy wrapping): `Home.json`, `Search Page.json`, `Product Page.json`, `Categories.json`.


