# HANDOFF — building the Radar Atleticano portal template in Claude Code

This package **is** the Radar Atleticano design system: brand tokens, reusable React primitives, foundation specimens, and a full **reference implementation** of the homepage + article. Use it to build the real site in your Next.js repo (`pedrotavareslannar/radar-alvinegro`: Next 16 · React 19 · Tailwind v4 · Supabase).

> The HTML/JSX here are **design references** — pixel-accurate prototypes of the intended look and behavior, not production code to paste. Recreate them with your codebase's patterns (App Router, Tailwind classes, `next/font`, Supabase). Fidelity is **hi-fi**: match colors, type, spacing, and interactions exactly.

## How to use this in Claude Code
1. Drop this whole folder into your repo (e.g. `design/radar-atleticano/`), or keep it as a skill folder — `SKILL.md` is Agent-Skills compatible, so Claude Code can load it directly.
2. Point Claude Code at `readme.md` (full brand guide) and this file. Ask it to build one section at a time against `ui_kits/portal/` as the visual source of truth.

## The target (homepage, top → bottom)
1. **Sticky header** — gold-bar wordmark + nav (Início · Notícias · Elenco · Jogos · Classificação) + Lucide social/search. Active link = gold with a 2px gold underline. `#0D0D0D/95` + backdrop-blur.
2. **Hero + Próximos jogos** — featured-story carousel (gold category pill, headline, arrows, dots) beside a fixtures panel (rows of `CAM × FLA`, competition/date/venue, "Ver todos os jogos").
3. **Notícias + Classificação** — section header with "+ Notícias" action; 3-up news-card grid; standings table widget with the Galo's row tinted gold + "Classificação completa".
4. **Arena MRV** — centered eyebrow + title, a 1280×800 photo, descriptive copy, "Conheça a Arena".
5. **Footer** — wordmark + tagline, columns (Instituto / Futebol / Cobertura), app-store badges, legal bar.
6. **Article page** — gold kicker, big headline, gold-ruled resumo, byline, 16:9 hero, prose, "Leia também" rail.

No videos section (per brief).

## Design tokens → your stack
All tokens live in `tokens/*.css` and are exposed as CSS custom properties via `styles.css`. Two ways to adopt:
- **Fastest:** copy `tokens/colors.css`, `typography.css`, `spacing.css` into your app and `@import` them from `globals.css`.
- **Tailwind v4:** mirror the core values into your `@theme` block. The essentials:

| Token | Value | Use |
|---|---|---|
| `--preto` | `#0D0D0D` | page background |
| `--branco` | `#FFFFFF` | primary text |
| `--ouro` | `#F5C800` | the single accent |
| `--ouro-escuro` | `#D4AC00` | pressed gold |
| white alpha ramp | `white/90 → /05` | text, borders (`/10`), meta (`/40`) |
| `--surface-panel` | `#121212` | jogos / classificação panels |
| `--surface-row-active` | `rgba(245,200,0,.15)` | highlighted standings row |
| radii | `4 / 8 / full` | bars+chips / cards / pills |
| container | `72rem` / `48rem` | homepage / article |
| font | Inter (400–900) | everything |

Your existing `globals.css` already defines `--cor-primaria #0D0D0D`, `--cor-secundaria #FFFFFF`, `--cor-destaque #F5C800` — these map 1:1 to `--preto / --branco / --ouro`.

## Component map (DS primitive → what to build)
| Reference component | File | Build in Next.js as |
|---|---|---|
| `Logo` | `components/brand/Logo.jsx` | `components/logo.tsx` (swap in the official SVG when ready) |
| `Button` | `components/core/Button.jsx` | `components/ui/button.tsx` (gold / outline / ghost) |
| `SectionHeading` | `components/core/SectionHeading.jsx` | section header partial |
| `NewsCard` | `components/content/NewsCard.jsx` | already exists as `card-noticia.tsx` — extend variants |
| `Kicker` / `Byline` / `Resumo` | `components/content/*` | small text partials |
| `HeroCarousel` | `components/media/HeroCarousel.jsx` | client component (`"use client"`) |
| `MatchFixture` | `components/sports/MatchFixture.jsx` | `components/fixture-row.tsx` (feed from a `jogos` table/API) |
| `StandingsTable` | `components/sports/StandingsTable.jsx` | `components/classificacao.tsx` (feed from standings API) |

Each component has a sibling `.d.ts` (props contract) and `.prompt.md` (usage example) — read those for exact props.

## Data
- News already comes from Supabase `noticias` (`titulo, slug, conteudo, resumo, categoria, imagem_capa, autor, publicado`). The kit's `data.js` mirrors this shape.
- **Próximos jogos** and **Classificação** are new — you'll need a source (a `jogos` table, or a public API like the CBF/Brasileirão feed). The components accept plain arrays; see `ui_kits/portal/data.js` for the exact shapes (`JOGOS`, `CLASSIFICACAO`).

## Images (easy to swap, full quality)
Standard sizes — drop real URLs into the matching prop / `imagem_capa`:
- Hero **1600×900** (16:9) · News card **800×600** (4:3) · Arena **1280×800** · Article hero **1600×900**.
Until then every slot shows a branded gold-bar placeholder. Follow the repo's image licensing rules (`CLAUDE.md`): official club / FIFA / Wikimedia sources only, with credits.

## Icons
The product ships no icon set. The kit uses **Lucide** (CDN) for social/search/app badges — install `lucide-react` in your app. This is a flagged substitution; replace if you adopt an official set.

## Files to reference
- `ui_kits/portal/index.html` — the running prototype (open it to see the target).
- `ui_kits/portal/{Homepage,ArticlePage,Chrome,Helpers}.jsx`, `data.js` — section structure & copy.
- `components/**` — primitive sources + `.d.ts` + `.prompt.md`.
- `readme.md` — full brand guide (voice, visual foundations, iconography).
- `styles.css` + `tokens/**` — the token system.

## Open items
- **Official logo** is *em construção* — the wordmark/mark SVGs are placeholders.
- **Crests** are neutral monograms (copyright-safe) — swap in licensed shields if you have rights.
