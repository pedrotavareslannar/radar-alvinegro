# UI Kit — Radar Atleticano Portal

A high-fidelity, click-through recreation of the Radar Atleticano club portal, modeled on the rich team-site layout the user provided and rebuilt in the alvinegro palette (preto + branco + ouro). No videos, per the brief.

## Surfaces
- **Homepage** (`Homepage.jsx`)
  - **Hero + Próximos jogos** — featured-story `HeroCarousel` beside a fixtures panel (`MatchFixture` rows + "Ver todos os jogos").
  - **Notícias + Classificação** — a `SectionHeading`, a 3-up `NewsCard` grid, and the `StandingsTable` widget (Galo highlighted) + "Classificação completa".
  - **Arena MRV** — centered `SectionHeading`, a standard-ratio `Photo` placeholder, descriptive copy, and a "Conheça a Arena" button.
- **Article** (`ArticlePage.jsx`) — `max-w-3xl` reading column: back link, gold kicker, headline, gold-ruled `Resumo`, byline, 16:9 hero photo, prose body, and a "Leia também" rail.
- **Chrome** (`Chrome.jsx`) — sticky `Header` (logo + nav + Lucide social/search) and a rich multi-column `Footer` with app-store badges.
- **Helpers** (`Helpers.jsx`) — `Icon` (Lucide wrapper) and `Photo` (standard-ratio image slot with a branded placeholder).

## How it's wired
`index.html` runs a **runtime composition loader**: it fetches the *real* authored primitives from `/components` (Logo, NewsCard, Kicker, Byline, Resumo, Button, SectionHeading, HeroCarousel, MatchFixture, StandingsTable), strips ES-module syntax, and renders them with the screen files. The kit therefore **composes** the design-system primitives rather than re-implementing them, and runs both inside the Design System tab and as a standalone file. Lucide is loaded from CDN.

## Interactions
- Click any card or hero headline → opens its article. Click the logo / **← Voltar** → home.
- Hero carousel: arrows + dots. Nav links and card titles shift to gold on hover; card borders turn gold; images zoom 1.05.

## Images — easy to swap
Every image area is a swap point. Pass a real photo URL and it fills `cover`; otherwise a branded gold-bar placeholder shows with the recommended size. Standard sizes:
- **Hero:** 1600×900 (16:9) — `HeroCarousel` slide `image`
- **News card:** 800×600 (4:3) — `NewsCard` `image`
- **Arena:** 1280×800 — `Photo src`
- **Article hero:** 1600×900 (16:9) — article `image`

Drop the URL into the matching field in `data.js` (or the `Photo`/component `src`) and it renders at full quality.
