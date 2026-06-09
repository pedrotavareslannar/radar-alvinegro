import { Apple } from 'lucide-react'

const COLUNAS = [
  { titulo: 'Instituto', links: ['Apresentação', 'História', 'SAF', 'Política de privacidade'] },
  { titulo: 'Futebol', links: ['Elenco', 'Comissão técnica', 'Calendário de jogos', 'Títulos'] },
  { titulo: 'Cobertura', links: ['Notícias', 'Transferências', 'Classificação', 'Arena MRV'] },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--surface-base)' }}>
      <div
        className="max-w-6xl mx-auto px-4 py-12"
        style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.2fr', gap: 32 }}
      >
        {/* Logo + tagline */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <span className="w-1 h-7 rounded-sm" style={{ background: 'var(--ouro)' }} />
            <span className="text-base font-black uppercase tracking-tight text-white">Radar Atleticano</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)', maxWidth: 220 }}>
            Jornalismo independente sobre o Clube Atlético Mineiro. Credibilidade, precisão e análise.
          </p>
        </div>

        {/* Colunas de links */}
        {COLUNAS.map((col) => (
          <div key={col.titulo} className="flex flex-col gap-2.5">
            <h4
              className="text-xs font-bold uppercase mb-1"
              style={{ letterSpacing: '0.15em', color: 'var(--text-secondary)' }}
            >
              {col.titulo}
            </h4>
            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm transition-colors duration-150"
                style={{ color: 'var(--text-muted)' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--ouro)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        {/* App badges */}
        <div className="flex flex-col gap-3">
          <h4
            className="text-xs font-bold uppercase mb-1"
            style={{ letterSpacing: '0.15em', color: 'var(--text-secondary)' }}
          >
            Baixe o app
          </h4>
          {[
            { icon: Apple, label: 'App Store' },
            { icon: Apple, label: 'Google Play' },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              className="inline-flex items-center gap-2.5 text-sm font-semibold px-3.5 py-2 transition-colors duration-150"
              style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-strong)' }}
              onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--ouro-50)')}
              onMouseOut={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <Icon size={17} strokeWidth={2} />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Barra legal */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center flex-wrap gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span>© {new Date().getFullYear()} Radar Atleticano. Todos os direitos reservados.</span>
          <span>Veículo independente, sem vínculo oficial com o C.A.M.</span>
        </div>
      </div>
    </footer>
  )
}
