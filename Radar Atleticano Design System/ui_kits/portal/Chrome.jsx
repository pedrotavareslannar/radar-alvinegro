// Portal chrome — sticky header (logo + nav + social/search) and a rich footer.
// Icons: Lucide via CDN (lucide.createIcons() is called after each render).

function useLucide(dep) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

function Header({ onHome, active = 'Início' }) {
  useLucide();
  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'var(--surface-overlay)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '14px var(--container-pad)', display: 'flex', alignItems: 'center', gap: 28 }}>
        <button onClick={onHome} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="Radar Atleticano — início">
          <Logo size="md" />
        </button>
        <nav style={{ display: 'flex', gap: 22, marginRight: 'auto' }}>
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={cat === 'Início' ? onHome : undefined}
              className="ra-navlink"
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0',
                fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)',
                color: active === cat ? 'var(--accent)' : 'var(--text-nav)',
                borderBottom: active === cat ? '2px solid var(--ouro)' : '2px solid transparent',
                transition: 'color var(--dur-fast) var(--ease-standard)',
              }}
            >
              {cat}
            </button>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--text-nav)' }}>
          {['twitter', 'instagram', 'facebook', 'youtube'].map((ic) => (
            <a key={ic} href="#" className="ra-social" aria-label={ic} style={{ display: 'inline-flex', color: 'inherit', transition: 'color var(--dur-fast) var(--ease-standard)' }}>
              <i data-lucide={ic} style={{ width: 18, height: 18 }}></i>
            </a>
          ))}
          <span style={{ width: 1, height: 18, background: 'var(--border)' }}></span>
          <a href="#" className="ra-social" aria-label="Buscar" style={{ display: 'inline-flex', color: 'inherit' }}>
            <i data-lucide="search" style={{ width: 18, height: 18 }}></i>
          </a>
        </div>
      </div>
      <style>{`
        .ra-navlink:hover { color: var(--accent) !important; }
        .ra-social:hover { color: var(--accent); }
      `}</style>
    </header>
  );
}

function Footer() {
  useLucide();
  const cols = [
    { h: 'Instituto', items: ['Apresentação', 'História', 'SAF', 'Política de privacidade'] },
    { h: 'Futebol', items: ['Elenco', 'Comissão técnica', 'Calendário de jogos', 'Títulos'] },
    { h: 'Cobertura', items: ['Notícias', 'Transferências', 'Classificação', 'Arena MRV'] },
  ];
  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: 'auto', background: 'var(--surface-base)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '48px var(--container-pad) 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.2fr', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Logo size="sm" />
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.6, maxWidth: 220 }}>
            Jornalismo independente sobre o Clube Atlético Mineiro. Credibilidade, precisão e análise.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <h4 style={{ margin: '0 0 4px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--text-secondary)' }}>{c.h}</h4>
            {c.items.map((it) => (
              <a key={it} href="#" className="ra-foot-link" style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', transition: 'color var(--dur-fast) var(--ease-standard)' }}>{it}</a>
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h4 style={{ margin: '0 0 4px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--text-secondary)' }}>Baixe o app</h4>
          {[['apple', 'App Store'], ['play', 'Google Play']].map(([ic, label]) => (
            <a key={label} href="#" className="ra-store" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '8px 14px', color: 'var(--text-strong)', transition: 'border-color var(--dur-fast) var(--ease-standard)' }}>
              <i data-lucide={ic} style={{ width: 18, height: 18 }}></i>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)' }}>{label}</span>
            </a>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '18px var(--container-pad)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>© 2026 Radar Atleticano. Todos os direitos reservados.</span>
          <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>Veículo independente, sem vínculo oficial com o C.A.M.</span>
        </div>
      </div>
      <style>{`.ra-foot-link:hover { color: var(--accent); } .ra-store:hover { border-color: var(--ouro-50); }`}</style>
    </footer>
  );
}
