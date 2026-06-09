'use client'

const TABELA = [
  { pos: 7, team: 'CFC', p: 26, j: 18, sg: 4 },
  { pos: 8, team: 'SAO', p: 25, j: 18, sg: 2 },
  { pos: 9, team: 'CAM', p: 24, j: 18, sg: 1 },
  { pos: 10, team: 'COR', p: 24, j: 18, sg: -1 },
  { pos: 11, team: 'CRU', p: 24, j: 18, sg: -2 },
]

export default function Classificacao() {
  return (
    <div
      className="flex flex-col"
      style={{ background: 'var(--surface-panel)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 18 }}
    >
      <h3
        className="text-center text-xs font-bold uppercase mb-3"
        style={{ letterSpacing: '0.15em', color: 'var(--text-secondary)' }}
      >
        Classificação · Série A
      </h3>

      <table className="w-full text-xs" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ color: 'var(--text-muted)' }}>
            <th className="text-left pb-2 font-semibold w-6">#</th>
            <th className="text-left pb-2 font-semibold">Clube</th>
            <th className="text-center pb-2 font-semibold">P</th>
            <th className="text-center pb-2 font-semibold">J</th>
            <th className="text-center pb-2 font-semibold">SG</th>
          </tr>
        </thead>
        <tbody>
          {TABELA.map((row) => {
            const isGalo = row.team === 'CAM'
            return (
              <tr
                key={row.pos}
                style={{
                  background: isGalo ? 'var(--surface-row-active)' : 'transparent',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <td className="py-2 pr-2" style={{ color: 'var(--text-muted)' }}>{row.pos}</td>
                <td className="py-2 font-bold" style={{ color: isGalo ? 'var(--ouro)' : 'var(--text-strong)' }}>{row.team}</td>
                <td className="py-2 text-center font-bold" style={{ color: 'var(--text-strong)' }}>{row.p}</td>
                <td className="py-2 text-center" style={{ color: 'var(--text-muted)' }}>{row.j}</td>
                <td className="py-2 text-center" style={{ color: 'var(--text-muted)' }}>{row.sg > 0 ? `+${row.sg}` : row.sg}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <a
        href="/classificacao"
        className="mt-4 block text-center text-xs font-bold uppercase py-2 rounded transition-colors duration-150"
        style={{ letterSpacing: '0.1em', border: '1px solid var(--border)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)' }}
        onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--ouro)'; e.currentTarget.style.color = 'var(--ouro)' }}
        onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
      >
        Classificação completa
      </a>
    </div>
  )
}
