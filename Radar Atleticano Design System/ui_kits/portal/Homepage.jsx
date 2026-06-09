// Homepage — rich club-portal layout in alvinegro + gold:
// hero carousel + próximos jogos, notícias grid + classificação, Arena MRV.

function Panel({ title, children, footer }) {
  return (
    <div style={{ background: 'var(--surface-panel)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 18, display: 'flex', flexDirection: 'column' }}>
      {title && (
        <h3 style={{ margin: '0 0 8px', textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--text-secondary)' }}>{title}</h3>
      )}
      <div style={{ flex: 1 }}>{children}</div>
      {footer && <div style={{ marginTop: 14 }}>{footer}</div>}
    </div>
  );
}

function Homepage({ onOpen }) {
  const noticias = NEWS.slice(0, 3);
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--surface-base)' }}>
      <Header onHome={() => {}} active="Início" />

      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '32px var(--container-pad) 64px', width: '100%', display: 'flex', flexDirection: 'column', gap: 56 }}>

        {/* HERO + PRÓXIMOS JOGOS */}
        <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: 24, alignItems: 'stretch' }}>
          <HeroCarousel height={460} slides={DESTAQUES} onOpen={(s) => onOpen(s.id)} />
          <Panel
            title="Próximos jogos"
            footer={<Button variant="primary" size="sm" fullWidth>Ver todos os jogos</Button>}
          >
            {JOGOS.map((j, i) => <MatchFixture key={i} {...j} />)}
          </Panel>
        </section>

        {/* NOTÍCIAS + CLASSIFICAÇÃO */}
        <section>
          <SectionHeading title="Notícias" action="Notícias" onAction={() => {}} />
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: 24, alignItems: 'start' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {noticias.map((n) => (
                <NewsCard key={n.id} variant="default" category={n.category} title={n.title} resumo={n.resumo} author={n.author} date={n.date} href="#" onClick={(e) => { e.preventDefault(); onOpen(n.id); }} />
              ))}
            </div>
            <Panel
              title="Classificação"
              footer={<Button variant="outline" size="sm" fullWidth>Classificação completa</Button>}
            >
              <StandingsTable highlight="Atlético-MG" columns={[{ key: 'p', label: 'P' }, { key: 'j', label: 'J' }, { key: 'sg', label: 'SG' }]} rows={CLASSIFICACAO} />
            </Panel>
          </div>
        </section>

        {/* ARENA MRV */}
        <section>
          <SectionHeading eyebrow="O templo alvinegro" title="Arena MRV" align="center" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', marginTop: 8 }}>
            <Photo ratio="16 / 10" label="1280×800 · foto da Arena" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {ARENA.texto.map((p, i) => (
                <p key={i} style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)' }}>{p}</p>
              ))}
              <div><Button variant="outline" size="md">Conheça a Arena</Button></div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
