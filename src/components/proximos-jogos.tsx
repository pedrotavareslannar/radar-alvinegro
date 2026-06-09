const JOGOS = [
  { home: 'CAM', away: 'BAH', competition: 'Brasileirão', date: '22/07 · Qua', venue: 'Arena MRV' },
  { home: 'PAL', away: 'CAM', competition: 'Brasileirão', date: '26/07 · Dom', venue: 'Allianz Parque' },
  { home: 'CAM', away: 'RBB', competition: 'Brasileirão', date: '29/07 · Qua', venue: 'Arena MRV' },
]

function Crest({ abbr }: { abbr: string }) {
  return (
    <span
      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-black uppercase shrink-0"
      style={{ background: 'var(--surface-raised)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
    >
      {abbr}
    </span>
  )
}

export default function ProximosJogos() {
  return (
    <div
      className="flex flex-col"
      style={{ background: 'var(--surface-panel)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 18 }}
    >
      <h3
        className="text-center text-xs font-bold uppercase mb-3"
        style={{ letterSpacing: '0.15em', color: 'var(--text-secondary)' }}
      >
        Próximos jogos
      </h3>

      <div className="flex flex-col gap-2 flex-1">
        {JOGOS.map((j, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-1 py-3"
            style={{ borderBottom: idx < JOGOS.length - 1 ? '1px solid var(--border)' : 'none' }}
          >
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{j.competition} · {j.date}</span>
            <div className="flex items-center justify-center gap-3">
              <Crest abbr={j.home} />
              <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>×</span>
              <Crest abbr={j.away} />
            </div>
            <span className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>{j.venue}</span>
          </div>
        ))}
      </div>

      <a
        href="/jogos"
        className="mt-4 block text-center text-xs font-bold uppercase py-2 rounded transition-colors duration-150"
        style={{ letterSpacing: '0.1em', background: 'var(--ouro)', color: 'var(--preto)', borderRadius: 'var(--radius-sm)' }}
        onMouseOver={e => (e.currentTarget.style.background = 'var(--ouro-escuro)')}
        onMouseOut={e => (e.currentTarget.style.background = 'var(--ouro)')}
      >
        Ver todos os jogos
      </a>
    </div>
  )
}
