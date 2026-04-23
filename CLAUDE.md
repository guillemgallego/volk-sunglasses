# CLAUDE.md — VOLK Sunglasses

## Proyecto

Tienda online de gafas de sol polarizadas premium, mercado ruso. Fundada en 2019, con sede en San Petersburgo.

- **Marca:** VOLK Sunglasses
- **Dominio:** https://volksunglasses.com
- **API / Backend:** https://api.volksunglasses.com (WordPress + WooCommerce)
- **Idioma del sitio:** Ruso (ru-RU)

## Stack técnico

| Capa | Tecnología |
|------|------------|
| Frontend | **Astro 6** (static site generation, SSG) |
| Estilos | **Tailwind CSS 4** + CSS custom en componentes |
| Backend | **WordPress + WooCommerce** en `api.volksunglasses.com` |
| Servidor | **Nginx** (`nginx-volk.conf`) — HTTPS, HTTP/2, WebP, cache headers |
| Analytics | Google Tag Manager (GTM-TXNHBWQ) |
| Sitemap | `@astrojs/sitemap` (auto-generado en build) |
| Node | ≥22.12.0 |

## Comandos clave

```bash
npm run dev       # dev server
npm run build     # build a dist/
npm run preview   # preview del build
```

## Estructura del proyecto

```
src/
  layouts/
    BaseLayout.astro       # Head, meta, OG, JSON-LD @graph (Org + LocalBusiness + WebSite + ImageObject)
  components/
    Hero.astro             # Banner principal con hero-volk.webp
    Navbar.astro
    Footer.astro
    ProductCard.astro      # Tarjeta con microdata (itemprop) + JSON-LD via BaseLayout
    ProductGrid.astro
    ProductPage.astro      # Página individual de producto con schema Product completo
    BlogPage.astro
    ChatWidget.astro
    EmailPopup.astro
  pages/
    index.astro            # Homepage — ItemList + BestsellerList schemas
    katalog.astro          # Catálogo completo
    [slug].astro           # Páginas de producto dinámicas
    o-brende.astro
    kontakty.astro
    dostavka-oplata.astro
    vozvrat-obmen-tovara.astro
    blog/
  data/
    products.ts            # Array tipado con todos los productos
    wc-products.json       # Datos WooCommerce sincronizados
  styles/
    global.css
public/
  robots.txt
  llms.txt
  hero-volk.webp / hero-volk.jpg
  sitemap-index.xml        # Generado por build
dist/                      # Output del build (no commitear)
nginx-volk.conf            # Config Nginx producción
```

## SEO — Estado actual (2026-04-21)

**Score global: 68/100 → objetivo 85/100**

### Phase 1 ✅ Completado
- Meta description presente en todas las páginas (`description` prop → `<meta name="description">`)
- Open Graph y Twitter Card verificados en `dist/index.html`
- ItemList + Product schemas en homepage (3 bloques JSON-LD)
- LocalBusiness schema en BaseLayout @graph
- robots.txt y llms.txt con reglas para AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- Product schema enriquecido: shippingDetails, returnPolicy, additionalProperty

### Phase 2 ✅ Completado
- Hero alt text: `"VOLK поляризационные солнцезащитные очки с UV400 защитой — коллекция 2026"`
- ProductCard alt text ya usa patrón SEO: `${product.name} — поляризационные солнцезащитные очки VOLK`
- ImageObject schema añadido al @graph (hero-volk.webp, 1920×1080)
- Title homepage optimizado: 72 → 55 chars: `"Поляризационные очки VOLK UV400 TAC Polarized | Россия"`

### Phase 3 (pendiente)
- [ ] Paginación o filtros para catálogo (48+ productos)
- [ ] Señales E-E-A-T: bio fundador, author schema, certificaciones UV400

### Phase 4 (pendiente)
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] PageSpeed Insights: https://pagespeed.web.dev/?url=https://volksunglasses.com
- [ ] Monitorear SERP en Google Search Console

## Schema JSON-LD implementado

`BaseLayout.astro` @graph contiene:
1. `Organization` + `Brand` (`#organization`) — con logo, fechas, redes sociales
2. `LocalBusiness` (`#localbusiness`) — SPb, teléfono, geo coords
3. `ImageObject` (`#hero-image`) — hero 1920×1080, caption, creator
4. `WebSite` (`#website`) — con `SearchAction` para sitelinks search box

`index.astro` añade:
5. `ItemList` — los primeros 12 productos del catálogo
6. `ItemList` (bestsellers) — productos bestseller con `Product` inline

`[slug].astro` / `ProductPage.astro` añade:
7. `Product` completo — precio RUB, disponibilidad, shippingDetails, returnPolicy, AggregateRating

## Convenciones de código

- **No usar FAQPage schema** — restringido a gov/healthcare desde ago 2023
- **No usar HowTo schema** — eliminado sep 2023
- **Solo JSON-LD**, nunca Microdata suelto ni RDFa
- **INP** (no FID) para métricas de interactividad
- Todo schema en `<script type="application/ld+json">` o `set:html={JSON.stringify(...)}`
- Tailwind solo para utilidades; estilos complejos en `<style>` scoped del componente
- Imágenes: WebP primario + JPG fallback vía `<picture>`; fetchpriority="high" solo para LCP

## Contacto / datos de negocio

- Teléfono: +7-960-273-70-38
- Email: info@volksunglasses.com
- Dirección: Санкт-Петербург, Россия (59.9343, 30.3351)
- WildBerries: https://www.wildberries.ru/brands/2672490-volk-sunglasses
- Instagram: https://www.instagram.com/volk.sunglasses/
- VK: https://vk.com/volksunglasses
- Telegram: https://t.me/volksunglasses

## Archivos de referencia SEO

- `FULL-AUDIT-REPORT.md` — findings detallados con evidencia
- `ACTION-PLAN.md` — plan priorizado con checklist de progreso
