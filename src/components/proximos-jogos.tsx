/* Server component — busca a agenda do Atlético-MG (teamId 282) na API GraphQL
   pública do ge.globo.com, a mesma usada pela página de agenda do ge. */

const GEQL_URL = 'https://geql.globo.com/graphql'
const TEAM_ID = 282

const QUERY = `query byTeamQuery($teamId: Int!, $limit: TeamChampionshipMatchesLimit = 5) {
  teamAgenda(teamId: $teamId, limit: $limit) {
    future: items(filter: { moment: FUTURE }) {
      ... on SoccerEvent {
        match {
          id
          startDate
          startHour
          firstContestant { ... on Team { popularName badgePng: badge(format: "30x30") } }
          secondContestant { ... on Team { popularName badgePng: badge(format: "30x30") } }
          phase { championshipEdition { championship { name } } }
          location { popularName }
        }
      }
    }
  }
}`

type Contestant = { popularName: string; badgePng: string | null }
type Match = {
  id: number
  startDate: string | null
  startHour: string | null
  firstContestant: Contestant | null
  secondContestant: Contestant | null
  phase: { championshipEdition: { championship: { name: string } } | null } | null
  location: { popularName: string } | null
}

async function buscarJogos(): Promise<Match[]> {
  try {
    const res = await fetch(GEQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: QUERY, variables: { teamId: TEAM_ID } }),
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const json = await res.json()
    const items: { match: Match }[] = json?.data?.teamAgenda?.future ?? []
    return items.map(i => i.match).filter(Boolean).slice(0, 3)
  } catch {
    return []
  }
}

const DIAS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

function formatarData(iso: string | null, hora: string | null) {
  if (!iso) return 'A definir'
  const d = new Date(`${iso}T12:00:00-03:00`)
  const dia = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`
  return `${dia} · ${DIAS[d.getDay()]}${hora ? ` · ${hora.slice(0, 5)}` : ''}`
}

function Crest({ team }: { team: Contestant | null }) {
  if (team?.badgePng) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={team.badgePng} alt={team.popularName} title={team.popularName} className="w-9 h-9 object-contain shrink-0" />
    )
  }
  return (
    <span
      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-black uppercase shrink-0"
      style={{ background: 'var(--surface-raised)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
    >
      {team?.popularName?.slice(0, 3) ?? '?'}
    </span>
  )
}

export default async function ProximosJogos() {
  const jogos = await buscarJogos()

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
        {jogos.length === 0 && (
          <p className="text-xs text-center py-6" style={{ color: 'var(--text-muted)' }}>
            Agenda indisponível no momento.
          </p>
        )}
        {jogos.map((j, idx) => (
          <div
            key={j.id}
            className="flex flex-col gap-1 py-3"
            style={{ borderBottom: idx < jogos.length - 1 ? '1px solid var(--border)' : 'none' }}
          >
            <span className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
              {j.phase?.championshipEdition?.championship?.name ?? 'Futebol'} · {formatarData(j.startDate, j.startHour)}
            </span>
            <div className="flex items-center justify-center gap-3">
              <Crest team={j.firstContestant} />
              <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>×</span>
              <Crest team={j.secondContestant} />
            </div>
            <span className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
              {j.firstContestant?.popularName} × {j.secondContestant?.popularName}
              {j.location?.popularName ? ` · ${j.location.popularName}` : ''}
            </span>
          </div>
        ))}
      </div>

      <a
        href="/jogos"
        className="mt-4 block text-center text-xs font-bold uppercase py-2 rounded transition-colors duration-150"
        style={{ letterSpacing: '0.1em', background: 'var(--ouro)', color: 'var(--preto)', borderRadius: 'var(--radius-sm)' }}
      >
        Ver todos os jogos
      </a>
    </div>
  )
}
