# SEO Action Plan — VOLK Sunglasses
**Created:** 2026-04-20  
**Target Score:** 85/100 (from current 68/100)  
**Implementation Timeline:** 4-6 weeks  

---

## Phase 1: Critical Fixes — ✅ COMPLETADO (2026-04-20)

### 1. ✅ Add Meta Description to All Pages
**Priority:** P1 | **Effort:** 1-2 hours | **Impact:** +5-8 SERP CTR improvement  
**Action Items:**
- [ ] Update `BaseLayout.astro` to accept `meta_description` prop
- [ ] Add default 155-160 character descriptions for homepage and key pages
- [ ] Example homepage description:
  ```
  Премиальные поляризационные очки VOLK с UV400 защитой. 
  Бесплатная доставка по России. Вощаемые, спортивный стиль.
  ```
- [ ] Create description strategy doc for each page type (product, category, blog)
- [ ] Test rendering in browser DevTools

**Code Change:**
```astro
// BaseLayout.astro (add to Props interface)
interface Props {
  title: string;
  description: string;
  meta_description?: string;  // ← Add this
  og_title?: string;
  og_description?: string;
  // ... rest
}

const {
  title,
  description,
  meta_description = description.substring(0, 160),  // ← Use full description as fallback
  // ...
} = Astro.props;

// In <head>:
<meta name="description" content={meta_description} />
```

---

### 2. ✅ Verify & Fix Open Graph Tag Rendering
**Priority:** P1 | **Effort:** 2-3 hours | **Impact:** +10% social sharing CTR  
**Action Items:**
- [ ] Inspect live HTML source (DevTools → View Page Source) at https://volksunglasses.com
- [ ] Confirm Open Graph tags ARE rendering (they're in BaseLayout.astro)
- [ ] If not rendering: check Astro build output; verify `astro build` includes head tags
- [ ] Test with Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/sharing/
- [ ] Test with Twitter Card Validator: https://card-validator.twitter.com/
- [ ] Add fallback og:image if image prop is undefined

**Debug Steps:**
```bash
# Build and inspect
npm run build
head -50 dist/index.html | grep -A5 "og:"  # Should show OG tags

# Test live
curl https://volksunglasses.com | grep -i "og:title"
```

---

### 3. ✅ Add Product Collection Schema (Homepage)
**Priority:** P1 | **Effort:** 3-4 hours | **Impact:** +15-20% product visibility in search  
**Action Items:**
- [ ] Create `ProductSchema.astro` component
- [ ] Add ProductCollection JSON-LD to homepage listing
- [ ] Include: name, description, url, image, brand, offers[0].price, offers[0].availability, aggregateRating (if available)
- [ ] Test with Google Rich Results Test: https://search.google.com/test/rich-results

**Template:**
```json
{
  "@context": "https://schema.org",
  "@type": "ProductCollection",
  "name": "VOLK Sunglasses Collection",
  "description": "Premium polarized UV400 sunglasses",
  "url": "https://volksunglasses.com",
  "image": "https://volksunglasses.com/images/logo-volk.png",
  "brand": {
    "@type": "Brand",
    "@id": "https://volksunglasses.com/#organization"
  },
  "numberOfItems": 48,
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "VOLK Classic",
      "url": "https://volksunglasses.com/product/classic",
      "image": "...",
      "brand": { "@id": "https://volksunglasses.com/#organization" },
      "offers": {
        "@type": "Offer",
        "price": "2990",
        "priceCurrency": "RUB",
        "availability": "https://schema.org/InStock"
      }
    }
    // ... more products
  ]
}
```

---

### 4. ✅ Remove Duplicate Hero Image Preload
**Priority:** P3 | **Effort:** 5 minutes | **Impact:** Minimal (reduces HTTP requests)  
**Action Items:**
- [ ] Edit `BaseLayout.astro` line 37-38: Delete duplicate preload tags
- [ ] Keep ONLY lines 136-138 (later in file)
- [ ] Ensure fetchpriority="high" remains

**Change:**
```astro
<!-- DELETE lines 37-38 (duplicate) -->
<!-- <link rel="preload" as="image" href="/hero-volk.webp" type="image/webp" fetchpriority="high" /> -->
<!-- <link rel="preload" as="image" href="/hero-volk.jpg" fetchpriority="high" /> -->

<!-- KEEP lines 136-138 -->
<link rel="preload" as="image" href="/hero-volk.webp" type="image/webp" fetchpriority="high" />
<link rel="preload" as="image" href="/hero-volk.jpg" fetchpriority="high" />
```

---

## Phase 2: High-Impact Optimizations (Week 2-3)

### 5. ✅ Add Image Alt Text & ImageObject Schema
**Priority:** P2 | **Effort:** 2-3 hours | **Impact:** +8-10% image search traffic + accessibility  
**Action Items:**
- [ ] Add alt attribute to hero image component
- [ ] Audit all 48+ product images; add descriptive alt text
- [ ] Create `ImageSchema.astro` component for product images
- [ ] Example alt for hero:
  ```
  "VOLK поляризационные солнцезащитные очки с UV400 защитой на фоне гор"
  ```
- [ ] Add ImageObject schema for hero image:
  ```json
  {
    "@type": "ImageObject",
    "url": "https://volksunglasses.com/hero-volk.webp",
    "width": 1920,
    "height": 1080,
    "name": "VOLK Premium Sunglasses Hero"
  }
  ```

---

### 6. ✅ Create robots.txt & llms.txt for AI Crawler Management
**Priority:** P2 | **Effort:** 1 hour | **Impact:** +5% AI search readiness  
**Action Items:**
- [ ] Create `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Disallow: /api/
  Sitemap: https://volksunglasses.com/sitemap-index.xml

  # AI Crawlers
  User-agent: GPTBot
  Allow: /

  User-agent: ClaudeBot
  Allow: /

  User-agent: PerplexityBot
  Allow: /

  User-agent: Applebot-Extended
  Allow: /
  ```
- [ ] Create `public/llms.txt`:
  ```
  User-agent: *
  Allow: /
  ```
- [ ] Test with curl: `curl https://volksunglasses.com/robots.txt`

---

### 7. ✅ Add LocalBusiness Schema (Optional but Recommended)
**Priority:** P2 | **Effort:** 1-2 hours | **Impact:** +5-7% local search visibility  
**Action Items:**
- [ ] Add LocalBusiness schema to Organization schema (in BaseLayout.astro)
- [ ] Include: address, phone, email, geo coordinates
- [ ] Use existing contact: +7-960-273-70-38

**Template:**
```json
{
  "@type": "LocalBusiness",
  "@id": "https://volksunglasses.com/#localbusiness",
  "name": "VOLK Sunglasses",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Улица Рубинштейна, 26",
    "addressLocality": "Санкт-Петербург",
    "postalCode": "191025",
    "addressCountry": "RU"
  },
  "telephone": "+7-960-273-70-38",
  "email": "info@volksunglasses.com",
  "sameAs": [
    "https://www.instagram.com/volk.sunglasses/",
    "https://vk.com/volksunglasses"
  ]
}
```

---

## Phase 3: Enhancements (Week 3-4)

### 8. ✅ Optimize Page Title Lengths
**Priority:** P3 | **Effort:** 30 minutes | **Impact:** +2-3% SERP CTR  
**Action Items:**
- [ ] Reduce homepage title to 60-65 characters
- [ ] Ensure all page titles follow pattern: `[Keyword] | [Brand]`
- [ ] Example:
  - Current: "VOLK Sunglasses — Поляризационные солнцезащитные очки с UV400 | Россия" (72 chars)
  - Optimized: "Поляризационные очки VOLK с UV400 | Премиум защита" (52 chars)

---

### 9. ✅ Implement Pagination or Category Filter
**Priority:** P3 | **Effort:** 4-6 hours | **Impact:** +10-15% UX + crawl efficiency  
**Action Items:**
- [ ] Evaluate UX: 48+ products on homepage may overwhelm mobile users
- [ ] Option A: Implement pagination (12 per page)
- [ ] Option B: Filter by category (Mens, Womens, Sport, Lifestyle)
- [ ] Option C: Lazy-load products below fold
- [ ] Add breadcrumb schema for paginated results
- [ ] Test Core Web Vitals (LCP, CLS) after changes

---

### 10. ✅ Enhance E-E-A-T Signals
**Priority:** P2 | **Effort:** 2-3 hours | **Impact:** +5-10% competitive query positioning  
**Action Items:**
- [ ] Create "About VOLK" page with founder bio and credentials
- [ ] Add author/creator schema with expertise markers
- [ ] Display certifications (UV400 compliance, polarization standards, etc.)
- [ ] Add publication dates to product launches/updates
- [ ] Link to third-party reviews or awards
- [ ] Example schema:
  ```json
  {
    "@type": "Person",
    "name": "VOLK Sunglasses Founder",
    "jobTitle": "CEO",
    "affiliation": { "@id": "https://volksunglasses.com/#organization" },
    "knowsAbout": ["Polarized Optics", "UV Protection", "Sports Eyewear"]
  }
  ```

---

## Phase 4: Monitoring & Testing (Week 4-6)

### 11. ✅ Test All Changes with Google Rich Results Test
**Priority:** P1 | **Effort:** 1 hour  
**Action Items:**
- [ ] Test homepage: https://search.google.com/test/rich-results
- [ ] Verify: Organization, WebSite, Product, LocalBusiness schemas render
- [ ] Check for schema errors or warnings
- [ ] Document results in TESTING.md

---

### 12. ✅ Run Core Web Vitals Check (PageSpeed Insights)
**Priority:** P1 | **Effort:** 1 hour  
**Action Items:**
- [ ] Run mobile: https://pagespeed.web.dev/?url=https://volksunglasses.com
- [ ] Run desktop
- [ ] Target scores: LCP <2.5s, INP <200ms, CLS <0.1
- [ ] If below targets, profile and optimize (images, CSS, fonts, JS)

---

### 13. ✅ Monitor SERP Performance (2-4 weeks post-launch)
**Priority:** P2 | **Effort:** Ongoing  
**Action Items:**
- [ ] Set up Google Search Console monitoring
- [ ] Track key queries:
  - "поляризационные очки"
  - "очки UV400"
  - "спортивные очки"
  - "очки солнечные"
- [ ] Monitor CTR, impressions, position over time
- [ ] Aim for position 1-3 on target keywords within 4 weeks

---

## Summary: Task Checklist

### Phase 1 — ✅ COMPLETADO (2026-04-20)
- [x] Meta description — ya presente (description prop → BaseLayout `<meta name="description">`)
- [x] Verify Open Graph rendering — ✓ Verificado en dist/index.html
- [x] Add ItemList + Product schema — ✓ 3 bloques JSON-LD en homepage, 3 en product pages
- [x] Remove duplicate hero preload — ✓ Confirmado: 1 sola ocurrencia
- [x] LocalBusiness schema — ✓ Añadido a BaseLayout @graph
- [x] robots.txt & llms.txt — ✓ Ya existentes y completos
- [x] Enhanced Product schema — ✓ shippingDetails, returnPolicy, additionalProperty añadidos

### Phase 2 — ✅ COMPLETADO (2026-04-21)
- [x] Alt text del hero actualizado con keywords SEO (Hero.astro)
- [x] Alt text de productos ya SEO-friendly en ProductCard.astro (`${name} — поляризационные солнцезащитные очки VOLK`)
- [x] ImageObject schema añadido al @graph de BaseLayout (hero-volk.webp, 1920×1080, caption + creator)
- [x] Title homepage optimizado: 72 → 55 chars ("Поляризационные очки VOLK UV400 TAC Polarized | Россия")

### Phase 3 — Enhancements
- [ ] Paginación/filtros para catálogo grande
- [ ] Señales E-E-A-T (bio del fundador, author schema)

### Phase 4 — Testing & Deploy
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] PageSpeed Insights: https://pagespeed.web.dev/?url=https://volksunglasses.com
- [ ] Deploy y monitorear SERP en Search Console

---

## Expected Outcomes

| Metric | Before | After | Timeline |
|--------|--------|-------|----------|
| SEO Score | 68/100 | 85/100 | 4 weeks |
| Meta Description Coverage | 0% | 100% | 1 week |
| Schema Markup Coverage | 30% | 90% | 2 weeks |
| Estimated SERP CTR Gain | — | +15-25% | 2-4 weeks |
| Estimated Organic Traffic Gain | — | +20-30% | 4-8 weeks |

---

## Technical Stack

- **Framework:** Astro (static site generation)
- **Schema Library:** None (manual JSON-LD)
- **Sitemap:** @astrojs/sitemap (auto-generated)
- **Build Compression:** CSS minify + HTML compression enabled

---

**Questions or blockers?** Reference the FULL-AUDIT-REPORT.md for detailed findings and evidence.
