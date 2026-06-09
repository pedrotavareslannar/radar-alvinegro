The featured-story carousel at the top of the homepage — full-bleed cover, bottom protection gradient, gold category pill + headline, prev/next arrows and dot indicators.

```jsx
<HeroCarousel
  height={460}
  onOpen={(s) => openArticle(s.id)}
  slides={[
    { id: 'reforco', category: 'Transferências', title: 'Galo encaminha reforço para o meio-campo', image: '/capa.jpg' },
    { id: 'classico', category: 'Jogos', title: 'Atlético vence o clássico e assume a ponta' },
  ]} />
```

Slides without `image` render the branded gold-bar placeholder. Recommended cover size: 1600×900 (16:9).
