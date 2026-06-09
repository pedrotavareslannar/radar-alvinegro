// Article page — kicker, headline, gold-ruled resumo, byline, hero photo, prose.
// Mirrors production noticias/[slug]/page.tsx: max-w-3xl reading column.

function ArticlePage({ id, onBack, onOpen }) {
  const n = NEWS.find((x) => x.id === id) || NEWS[0];
  const related = NEWS.filter((x) => x.id !== n.id).slice(0, 3);
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--surface-base)' }}>
      <Header active="Notícias" onHome={onBack} onCategory={onBack} />
      <article style={{ maxWidth: 'var(--container-read)', margin: '0 auto', padding: '40px var(--container-pad)', width: '100%' }}>
        <button onClick={onBack} className="ra-navlink" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-nav)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', padding: 0, marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon name="arrow-left" size={16} /> Voltar
        </button>

        <Kicker as="div">{n.category}</Kicker>

        <h1 style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-5xl)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '16px 0 24px' }}>{n.title}</h1>

        {n.resumo && <Resumo>{n.resumo}</Resumo>}

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: 'var(--text-sm)', margin: '24px 0', paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
          <span>{n.author || 'Redação'}</span>
          <span aria-hidden="true">·</span>
          <span>{n.date}</span>
        </div>

        <div style={{ marginBottom: 32 }}>
          <Photo src={n.image} alt={n.title} ratio="16 / 9" label="1280×720" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(n.body || ['Conteúdo em preparação.']).map((p, i) => (
            <p key={i} style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)' }}>{p}</p>
          ))}
        </div>

        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
          <h2 style={{ margin: '0 0 20px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--text-muted)' }}>Leia também</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {related.map((r) => (
              <NewsCard key={r.id} variant="compact" title={r.title} date={r.date} href="#" onClick={(e) => { e.preventDefault(); onOpen(r.id); }} />
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

// Root router for the kit.
function App() {
  const [route, setRoute] = React.useState({ name: 'home', id: null });
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }, [route]);
  React.useEffect(() => {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  });
  if (route.name === 'article') {
    return <ArticlePage id={route.id} onBack={() => setRoute({ name: 'home' })} onOpen={(id) => setRoute({ name: 'article', id })} />;
  }
  return <Homepage onOpen={(id) => setRoute({ name: 'article', id })} />;
}
