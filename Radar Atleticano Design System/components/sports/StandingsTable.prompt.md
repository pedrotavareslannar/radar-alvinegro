The "Classificação" league table — a position chip, club name, and configurable stat columns, with the Galo's row highlighted in soft gold.

```jsx
<StandingsTable
  highlight="Atlético-MG"
  columns={[{ key: 'p', label: 'P' }, { key: 'j', label: 'J' }, { key: 'sg', label: 'SG' }]}
  rows={[
    { pos: 1, team: 'Atlético-MG', p: 38, j: 18, sg: 14 },
    { pos: 2, team: 'Flamengo', p: 36, j: 18, sg: 11 },
  ]} />
```

`columns` defaults to points (P) + games (J). Add a "Classificação completa" button beneath it inside a panel to build the sidebar widget.
