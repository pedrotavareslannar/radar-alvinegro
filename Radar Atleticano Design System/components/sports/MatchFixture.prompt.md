One fixture row for the "Próximos jogos" widget — home and away crests + abbreviations split by an ×, with a competition / date / venue meta line.

```jsx
<MatchFixture
  home={{ abbr: 'CAM' }}
  away={{ abbr: 'FLA' }}
  competition="Brasileirão"
  date="12/06 às 21:30"
  venue="Arena MRV" />
```

Pass `crest` URLs on `home`/`away` for real club badges; otherwise a monogram badge is shown. Stack several inside a panel + a "Ver todos os jogos" button to build the widget.
