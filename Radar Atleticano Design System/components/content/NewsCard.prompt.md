The portal's core editorial card — cover image, gold category kicker, headline that turns gold on hover, summary, and byline. Compose grids of these for the homepage.

```jsx
<NewsCard variant="featured" category="Transferências"
  title="Galo encaminha contratação de meio-campista"
  resumo="Negociação avança nos bastidores; valores não foram revelados."
  author="Redação" date="09 de junho de 2026" image="/capa.jpg" />

<NewsCard variant="compact" title="Atlético confirma amistoso na pré-temporada" date="08 de junho de 2026" />
```

Variants: `featured` (large hero, xl title), `default` (medium grid card), `compact` (80×64 thumb + 3-line title for the "latest" rail). Without `image` it renders a branded gold-bar placeholder.
