# Radar Atleticano — Design System

> The brand and UI system for **Radar Atleticano** (repo: *radar-alvinegro*), an independent journalism portal covering **Clube Atlético Mineiro** — the Galo. "Alvinegro" (black-and-white) names the palette; gold is the single accent.

This is a design system, not a fan page. The product's reason to exist is **credibility, precision and fundamented analysis**, and the visual language reflects that: a disciplined alvinegro canvas with one gold accent, set in Inter, with editorial restraint everywhere. The portal layout is rich (hero carousel, fixtures, standings, news, arena) but the tone stays trustworthy, not loud.

---

## Sources

Everything here was derived from the product's own code and brand definition, plus a visual model the user provided. If you have access, explore these to go deeper:

- **GitHub — production site:** `https://github.com/pedrotavareslannar/radar-alvinegro` (Next.js 16 + React 19 + Tailwind v4 + Supabase). Brand tokens live in `src/app/globals.css`; editorial voice + operating rules in `CLAUDE.md`; UI in `src/components/` (`header.tsx`, `card-noticia.tsx`) and `src/app/` (`page.tsx`, `noticias/[slug]/page.tsx`).
- **Companion repo:** `https://github.com/pedrotavareslannar/fornext` (not used here).
- **Live site:** radaratleticano.com.br · **Instagram:** @radaratleticano
- **Visual model:** the user supplied `modelo site.webp` — a rich team-portal layout (Portland Trail Blazers style) used as the **structural** reference for the homepage. Its red/black palette was **not** adopted; the Galo's alvinegro + gold was kept.
- **`Estilo site.txt`:** a CSS variable dump from third-party libraries (Shoelace, Algolia, etc.) — **not** brand-relevant; ignored.
- **`imagens/`:** attached but **empty** — see Caveats.

Reading the repository above will let any agent build more faithful Radar Atleticano work than this summary alone.

---

## The product

A dark, image-led team portal plus an Instagram presence. Articles live in Supabase (`noticias`: `titulo`, `slug`, `conteudo`, `resumo`, `categoria`, `imagem_capa`, `autor`, `publicado`). The homepage (per the adopted model) is a rich, single-scroll page:

1. **Hero carousel** — full-bleed featured story with a protection-gradient overlay, beside a **Próximos jogos** panel (upcoming fixtures + "Ver todos os jogos").
2. **Notícias** — a 3-up grid of news cards with a **Classificação** (league table) widget alongside.
3. **Arena MRV** — a photo gallery + descriptive copy about the stadium.
4. **Rich footer** — institutional columns, app-store badges, social.

Plus an **article page** (gold kicker, big headline, gold-ruled *resumo*, byline, hero photo, prose, "Leia também"). No video sections (per the user).

---

## Content fundamentals

**Language:** Brazilian Portuguese (`pt-BR`). Long-form dates: *"09 de junho de 2026"*.

**Voice:** journalistic, analytical, professional — objetivo, direto, claro, respeitoso. The editorial bible is explicit: produce *"conteúdo relevante, confiável, analítico e profissional"*, and always **separate fato, rumor e opinião**.

**Person & address:** third-person editorial / institutional ("a Redação", "o portal", "o Galo"), not chummy first-person. The club is *o Galo*, *Atlético-MG*, *o clube*; the brand is *o portal* / *Radar Atleticano*. The fanbase is *a Massa*.

**Casing:** category kickers and the wordmark are **UPPERCASE** (kickers add wide tracking); headlines are sentence case, bold.

**Do:** strong-but-honest headlines; SEO titles ≤ 60 chars; context/impact analysis (esportivo / financeiro / institucional / para a torcida).
**Avoid:** sensacionalismo, clickbait, exageros, clubismo excessivo, gírias em excesso, opinião sem base factual. **No emoji** in editorial copy.

**Example copy:**
- Kicker → headline: *TRANSFERÊNCIAS — "Galo encaminha contratação de meio-campista"*
- Resumo: *"Negociação avança nos bastidores; valores ainda não foram revelados."*
- Footer: *"© 2026 Radar Atleticano. Todos os direitos reservados."*
- Empty state: *"Nenhuma notícia publicada ainda."*

---

## Visual foundations

**Mood.** Nighttime, editorial, focused. The screen is almost entirely `#0D0D0D`; content floats on it via hairline borders and a single warm gold. A serious sports desk, not a stadium.

**Color.**
- Canvas `--preto #0D0D0D`; text `--branco #FFFFFF`; one accent `--ouro #F5C800` (pressed `--ouro-escuro #D4AC00`).
- Almost every non-accent value is **translucent white over the black** — a ramp from `white/90` (strong text) through `white/60` (summaries), `white/40` (meta/byline/footer), to `white/10` (borders) and `white/05` (hairlines). Learn this ramp; it *is* the UI.
- Gold is used **sparingly, with intent**: kickers, the logo bar, hover states, the left rule on a resumo, the primary button, top-4 standings medals, the highlighted Galo row/crest. Never large gold fills beyond the primary button and logo-on-white.

**Type.** A single family — **Inter** (fallback Roboto, then system). Weights 400–900; headlines 700–900, meta 400. High weight contrast is the main expressive lever. Kickers: uppercase + `letter-spacing 0.15em`. Big headlines: slightly negative tracking (`-0.02em`). Article prose ~`1.7` line-height.

**Imagery.** Editorial sports photography, cover-cropped, anchored `object-position: top`. True-to-life tone (not filtered/duotoned). Photos sit in `radius-md` frames and **zoom to 1.05 on hover** over 300ms. **Standard ratios** for clean swaps: hero **16:9 (1280×720)**, news cards **4:3 (800×600)**, arena hero **16:9** + **4:3** thumbnails. When no photo exists, a **branded gold-bar placeholder** on a `#1b1b1b→#0D0D0D` gradient stands in — drop a real photo into the `src`/`image` prop at the standard size to fill it.

**Backgrounds.** Flat near-black. No page gradients, textures, or patterns. The only gradients are the photo placeholder and the hero's bottom **protection gradient** (`rgba(13,13,13,.92)→transparent`) behind overlay text.

**Borders, cards & elevation.** Depth comes from **1px `white/10` borders**, not shadows. A card is a bordered, `radius-md` (8px) frame; raised panels (fixtures, standings) use `--surface-raised #161616`. **On hover, card border + title turn gold** and the image scales 1.05. Shadows are reserved for true overlays. No "rounded box with a colored left border" tropes — the gold rule is a 4px *left rule on text* (resumo), never card decoration.

**Radii.** `sm 4px` (logo bar, thumbnails, chips, buttons), `md 8px` (cards, hero, photos), `full` (pills, crests, dots, medals). Nothing past 12px except the app-icon mark.

**Layout.** Centered columns: `max-w-6xl (72rem)` for the homepage, `max-w-3xl (48rem)` for the article reading column; 16px horizontal padding. 4px spacing grid; card padding 20, grid gap 24, section rhythm 40–56. The **header is sticky** (`#0D0D0D/95` + `backdrop-blur`, hairline bottom border).

**Motion.** Quiet and quick. `150ms` for color/border (links, titles, buttons, arrows), `300ms` for image zoom. Easing `cubic-bezier(0.4,0,0.2,1)`. Buttons nudge down 1px on press. Carousel dots grow to a gold pill when active. No bounces, no looping decoration, no parallax.

**Hover / press.** Links & nav: white/70 → gold. Cards: border → `ouro/50`, title → gold, image 1.05. Carousel arrows: invert to gold fill + black icon. Primary button: gold → `ouro-escuro`. Outline/ghost: border/text → gold. Press: 1px down.

**Transparency & blur.** Used in exactly two places: the sticky header (`#0D0D0D/95` + blur) and the carousel arrows (translucent + blur). No scattered glassmorphism.

**Focus.** 2px solid gold outline, 2px offset. Selection: gold background, black text.

---

## Iconography

The production codebase ships **no icon set** — its only "icon" is the **gold vertical bar** beside the wordmark, and the byline separator is a literal middot `·`. Emoji are not used.

For the richer portal here (social, search, carousel arrows, plus/chevron, app badges), this system uses **[Lucide](https://lucide.dev)** loaded from CDN (`lucide@0.544.0` UMD) — thin 2px stroke, square caps, which matches the spare editorial feel. **This is a documented substitution** (the brand has no icon set of its own) — flagged for review.

Rules: keep icons monochrome — `--text-nav` (white/70) at rest, **gold on hover**, mirroring link behavior. Never multicolor or novelty-filled. Prefer *no* icon when type or the gold bar can carry the meaning. Crests are rendered as **neutral monogram badges** (`Crest`), not real club shields, to avoid reproducing copyrighted marks.

**Assets shipped:** `assets/logo-wordmark.svg` (primary lockup) and `assets/logo-mark.svg` (the RA monogram for favicons/avatars) — faithful reconstructions of the code-defined logo (no logo file existed in the repo).

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. Imports only.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills entry.

**`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `base.css` (all reached from `styles.css`).

**`assets/`** — `logo-wordmark.svg`, `logo-mark.svg`.

**`components/`** (React primitives — `window.RadarAlvinegroDesignSystem_*`)
- `brand/Logo` — gold-bar wordmark / RA monogram.
- `core/Button` — gold / outline / ghost, three sizes.
- `core/SectionHeading` — homepage section header (eyebrow + title + action).
- `content/Kicker` — uppercase gold category label.
- `content/Byline` — "Autor · data" meta line.
- `content/Resumo` — gold-ruled standfirst.
- `content/NewsCard` — editorial card (featured / default / compact).
- `media/HeroCarousel` — featured-story carousel (gold pill, arrows, dots).
- `sports/MatchFixture` — upcoming-fixture row (Próximos jogos), with a monogram crest fallback.
- `sports/StandingsTable` — league-table widget (Classificação), highlightable row.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`ui_kits/portal/`** — the high-fidelity, click-through recreation of the club portal. `index.html` (runtime loader) composes the real primitives plus the kit screens: `Helpers.jsx` (Icon + Photo), `data.js`, `Chrome.jsx` (Header + Footer), `Homepage.jsx` (hero + próximos jogos + notícias + classificação + Arena MRV), `ArticlePage.jsx`. See its `README.md`.

---

## Caveats

- **`imagens/` came through empty**, and the live product loads photos from Supabase Storage. All imagery here uses the branded placeholder at the documented standard ratios — drop real photos into the `src` props to fill them.
- **No logo file existed in the repo** — the wordmark/mark SVGs are reconstructions from `header.tsx`. Replace with official artwork when available (the user noted the logo is *em construção*).
- **Inter loads from Google Fonts** via `@import` (the app uses `next/font`'s Inter). No local font binaries are bundled, so the compiler reports zero `@font-face` — Inter still loads for consumers over the network.
- **Club crests are neutral monograms**, not official shields, to avoid copyright. Swap in licensed crest images if you have rights.
- **Lucide icons are a substitution** — the real product has no icon set.
