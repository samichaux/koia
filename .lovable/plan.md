# Koia Landing Page — Page A "Coaching Intelligent"

Build a single-page French landing at `/` with a dark editorial design, following the provided spec exactly. LocalStorage-based email capture (Supabase comes in Step 2).

## Files

**Modify**
- `src/routes/__root.tsx` — update `head()` metadata (title "Koia — Le coach IA qui s'adapte vraiment à toi", French description, og/twitter tags, `lang="fr"` on `<html>`), add Google Fonts `<link>` tags (preconnect + Bebas Neue + Inter) via `links`.
- `src/routes/index.tsx` — replace placeholder with the full landing page. Add route `head()` with page-specific title/description/og tags.
- `src/styles.css` — add `--font-display: "Bebas Neue"` and `--font-sans: "Inter"` under `@theme`, plus Koia color tokens (`--koia-navy #0A0F1C`, `--koia-navy-2 #0E1424`, `--koia-card #141926`, `--koia-border #1E2433`, `--koia-crimson #C2001E`, `--koia-text #F5F5F5`, `--koia-muted #8A8F98`, `--koia-footer #4A4F5C`) exposed as Tailwind utilities. Set `html { scroll-behavior: smooth }` and body default background to navy.

**Create**
- `src/components/koia/EmailWaitlistForm.tsx` — email input + button (no `<form>`, `onClick` handler), HTML5 validation via `input.checkValidity()`, writes to `localStorage["koia_waitlist_emails"]` (dedupe append), swaps to success message. Two style variants via prop (hero vs final) if needed; otherwise identical.
- `src/components/koia/FaqAccordion.tsx` — accessible accordion, one open at a time, smooth height/opacity transition. Renders all Q&A as real DOM (answers present in initial HTML, hidden with `max-height`/`opacity` for closed state so crawlers see them).
- `src/components/koia/RevealOnScroll.tsx` — wrapper using IntersectionObserver, applies opacity + translateY fade-in once visible.
- `src/components/koia/sections/Hero.tsx`
- `src/components/koia/sections/Problem.tsx`
- `src/components/koia/sections/Pillars.tsx`
- `src/components/koia/sections/HowItWorks.tsx`
- `src/components/koia/sections/Faq.tsx`
- `src/components/koia/sections/FinalCta.tsx`
- `src/components/koia/sections/Footer.tsx`

## Section content

Exactly the copy from the spec (H1, subtitle, 3 problem blocks, 3 pillars, 3 numbered steps, 6 FAQ items, final CTA, footer line).

## Design mapping

- Hero H1: `font-display uppercase text-4xl md:text-6xl text-[color:var(--koia-text)]`.
- Subtitle/body: `font-sans font-light text-[color:var(--koia-muted)]`.
- CTA button: `bg-[color:var(--koia-crimson)] text-white rounded-lg hover:brightness-110 transition`.
- Cards (Pillars): `bg-[#141926] border border-[#1E2433] rounded-xl p-6 md:p-8 hover:border-[color:var(--koia-crimson)] transition-colors`.
- Section backgrounds alternate navy `#0A0F1C` → `#0E1424` per spec (Hero navy, Problem #0E1424, Pillars navy, HowItWorks #0E1424, FAQ navy, FinalCta #0E1424, Footer navy).
- Layout: `max-w-6xl mx-auto px-6 py-12 md:py-20`.
- Icons: `lucide-react` (already in stack) tinted crimson — Dumbbell/Sparkles/AlertTriangle for Problem; Brain/Eye/Utensils for Pillars.
- Hero background: subtle radial gradient overlay + faint SVG grain for premium feel.
- Step numbers: Bebas Neue, `text-6xl`, crimson.

## Behavior

- Email form: HTML5 `type="email" required`, on click validates then persists to `localStorage`, replaces form node with `"Tu es sur la liste ! On te tient au courant."`.
- FAQ: state = index of open item (or null); all answers rendered in DOM at all times, toggled visually.
- Scroll reveal: 1-shot IntersectionObserver at 15% threshold, `opacity-0 translate-y-4` → `opacity-100 translate-y-0` with `transition-all duration-700`.
- No nav, no hamburger, no footer links, no other routes.

## Fonts

Load Bebas Neue + Inter via `<link>` in `__root.tsx` head `links` (preconnect to fonts.googleapis.com and fonts.gstatic.com, then the two CSS URLs). Reference them via `--font-display` / `--font-sans` tokens in `@theme`. No `@import` of remote URLs in `styles.css`.

## Out of scope

No routing changes beyond `/`, no nav, no other pages, no Supabase, no changes to unrelated files (`server.ts`, `start.ts`, error reporting, `use-mobile`, etc.).
