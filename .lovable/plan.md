# Numerology & Namelogy Studio — Premium Frontend Build

A luxury, editorial, calm consultation studio site. Frontend-only (no backend/database in this phase): calculators run in the browser, forms validate and show elegant confirmation states locally.

## Visual language

- Palette: Ivory `#F8F6F1`, Warm Beige `#E9E1D4`, Champagne Gold `#C9A66B`, Deep Emerald `#0F6D5E`, Muted Bronze `#8D7355`, Charcoal `#2B2B2B`, Soft Gray `#6B7280`. Dark mode: charcoal-to-ink base with gold/emerald accents.
- Type: Cormorant Garamond (display headings), Plus Jakarta Sans (body/UI). Loaded via font links in the root head.
- Texture: soft paper grain, very low-contrast gradients, thin gold hairlines, generous whitespace, restrained glass panels. No cosmic clichés, no neon.
- Motion: Lenis-style smooth scroll, scroll reveals, staggered text, parallax, count-ups, SVG sacred-geometry path drawing, magnetic buttons, gentle card lift, cursor glow. All respect `prefers-reduced-motion`.

## Pages (each its own route with unique SEO metadata)

Home, About, Services, Numerology, Namelogy, Calculators, Success Stories, Blog (+ article detail), FAQs, Contact, Book Consultation, Privacy, Terms.

Home sections: hero (animated sacred geometry, floating gold circles, three CTAs), "What is Numerology" storytelling, six featured services, interactive animated number showcase (1–9 + master numbers), Why Choose Us with count-up stats, featured calculators, client success stories, closing CTA "Your Journey Begins With One Number".

Numerology: Life Path, Destiny, Soul, Personality, Expression, Birthday, Master and Karmic numbers with interactive illustrated cards.

Namelogy: name analysis, business/brand, baby, marriage name, signature analysis, lucky spelling, corrections.

Calculators (12, all client-side with real numerology math): Life Path, Destiny, Name Number, Business Name, Lucky Number, Lucky Color, Lucky Day, Marriage Compatibility, Personal Year, House, Vehicle, Mobile Number. Each: luxury inputs, animated reveal, circular gold gauge, result card with interpretation and a book-consultation CTA.

Success Stories: animated timeline, before/after cards, testimonial and video-placeholder cards.

Blog: editorial card grid across the nine listed topics, with reading-progress bar on article pages.

Contact: premium contact cards, WhatsApp and email links, map embed, language selector, enquiry form.

Book Consultation: multi-step stepper — consultation type (online/offline) → date and time slot → birth details (name, date, time, place) → purpose and notes → elegant summary confirmation.

## Global shell and UX

Sticky glass navbar with mega-menu, dark/light toggle, language dropdown (English, Tamil, Hindi, Telugu, Malayalam, Kannada), search field; footer with newsletter; scroll progress bar, back-to-top, floating WhatsApp, sticky "Book Consultation" CTA, cookie banner, skeleton loaders, premium initial load animation.

Multilingual: switcher wired to a light i18n dictionary; English fully translated, other languages cover navigation, CTAs and section headings with English fallback elsewhere (full article translation is out of scope for this phase).

## Imagery

AI-generated assets: hero sacred-geometry abstract, minimal studio interior, hands writing a name, luxury stationery, ancient number manuscript, three editorial consultant/client portraits, blog covers. Soft natural light, gold accents, no crystal balls or zodiac cartoons.

## Technical notes

- TanStack Start file routes under `src/routes`; shared chrome in `__root.tsx`.
- Design tokens (colors, radii, shadows, gradients, fonts) in `src/styles.css` `@theme inline` — no hardcoded color utilities in components.
- Reusable primitives: LuxuryButton, GlassCard, NumberCard, StatCard, TestimonialCard, BlogCard, CalculatorCard, Accordion, Tabs, Stepper, Timeline, form fields, Reveal/Parallax/CountUp motion wrappers.
- Numerology logic isolated in `src/lib/numerology.ts` (Pythagorean and Chaldean mapping, reduction with master-number handling) and unit-tested.
- Motion via Motion for React; smooth scroll via Lenis. Images lazy-loaded, semantic HTML, single H1 per page, alt text throughout.

## Build order

1. Tokens, fonts, motion primitives, navbar/footer shell, global UX widgets.
2. Home page in full.
3. Numerology, Namelogy, Services, About.
4. Calculators engine + all 12 calculator UIs.
5. Booking flow, Contact, Success Stories.
6. Blog + article, FAQs, Privacy, Terms.
7. Imagery, i18n wiring, responsive/accessibility/performance pass.
