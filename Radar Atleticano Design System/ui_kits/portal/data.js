// Fake editorial + sports data for the Radar Atleticano portal UI kit.
// Cover images intentionally omitted -> components render the branded gold-bar placeholder.
// Recommended real image sizes: hero 1600×900 (16:9), news cards 800×600 (4:3).

const NEWS = [
  {
    id: 'saf-diretor', category: 'Bastidores',
    title: 'SAF do Atlético anuncia novo diretor de futebol para o ciclo 2026',
    resumo: 'Executivo chega com a missão de reestruturar o departamento e dar previsibilidade ao planejamento esportivo.',
    author: 'Redação', date: '09 de junho de 2026',
    body: [
      'A SAF do Atlético-MG oficializou nesta segunda-feira a contratação do novo diretor de futebol, em movimento que faz parte da reorganização do departamento esportivo iniciada no fim da temporada passada.',
      'Segundo apurou o Radar Atleticano, o profissional terá autonomia para conduzir negociações e definir prioridades de mercado, sempre alinhado ao conselho gestor. A medida busca dar previsibilidade ao planejamento — ponto que a diretoria considera essencial para a sustentabilidade do projeto.',
      'O impacto institucional é relevante: ao centralizar decisões em um nome de mercado, o clube sinaliza profissionalização. Resta acompanhar como a mudança se traduzirá em resultados esportivos ao longo do calendário.',
    ],
  },
  {
    id: 'meio-campista', category: 'Transferências',
    title: 'Galo encaminha contratação de meio-campista para reforçar o setor',
    resumo: 'Negociação avança nos bastidores; valores não foram revelados e ainda dependem de exames médicos.',
    author: 'Redação', date: '09 de junho de 2026',
    body: [
      'O Atlético-MG avançou nas conversas para a contratação de um meio-campista que deve disputar posição no setor de criação. As tratativas estão adiantadas, mas a operação ainda depende da assinatura e dos exames médicos de praxe.',
      'Trata-se de rumor com fontes consistentes — não há, até o momento, confirmação oficial do clube. O Radar Atleticano mantém a distinção entre fato e especulação até que haja anúncio.',
    ],
  },
  {
    id: 'classico', category: 'Jogos',
    title: 'Atlético vence o clássico e assume a liderança do estadual',
    resumo: 'Equipe mostrou solidez defensiva e eficiência no contra-ataque para confirmar o resultado fora de casa.',
    author: 'Redação', date: '08 de junho de 2026',
    body: [
      'Em jogo de marcação intensa, o Atlético-MG superou o rival e assumiu a ponta da tabela. O time controlou os espaços e foi eficiente nas transições ofensivas.',
      'Do ponto de vista tático, o desempenho confirma a evolução defensiva observada nas últimas rodadas.',
    ],
  },
  {
    id: 'base-selecao', category: 'Base',
    title: 'Base atleticana tem dois jogadores convocados para a seleção sub-20',
    resumo: 'Convocação reforça o trabalho das categorias de base e amplia a vitrine dos jovens do clube.',
    author: 'Redação', date: '08 de junho de 2026',
    body: ['Dois atletas das categorias de base do Atlético foram convocados para a seleção sub-20, resultado do investimento contínuo do clube na formação.'],
  },
  { id: 'arena-show', category: 'Clube', title: 'Arena MRV recebe evento beneficente no fim do mês', date: '07 de junho de 2026',
    body: ['A Arena MRV será palco de um evento beneficente que reunirá ídolos do clube.'] },
  { id: 'mercado-lateral', category: 'Transferências', title: 'Lateral é oferecido, mas clube avalia prioridades antes de avançar', date: '07 de junho de 2026',
    body: ['O nome foi oferecido à diretoria, que avalia se a posição é prioridade nesta janela.'] },
  { id: 'financas-saf', category: 'Clube', title: 'Balanço da SAF aponta redução de custos no primeiro semestre', date: '06 de junho de 2026',
    body: ['O balanço parcial da SAF indica redução de custos operacionais no semestre.'] },
];

// Hero carousel = the top 3 stories.
const DESTAQUES = NEWS.slice(0, 3).map((n) => ({ id: n.id, category: n.category, title: n.title }));

// Próximos jogos.
const JOGOS = [
  { home: { abbr: 'CAM' }, away: { abbr: 'FLA' }, competition: 'Brasileirão', date: '12/06 · 21:30', venue: 'Arena MRV' },
  { home: { abbr: 'CRU' }, away: { abbr: 'CAM' }, competition: 'Copa do Brasil', date: '16/06 · 21:45', venue: 'Mineirão' },
  { home: { abbr: 'CAM' }, away: { abbr: 'SAN' }, competition: 'Brasileirão', date: '20/06 · 18:30', venue: 'Arena MRV' },
];

// Classificação — Série A (recorte).
const CLASSIFICACAO = [
  { pos: 1, team: 'Flamengo', p: 39, j: 18, sg: 15 },
  { pos: 2, team: 'Palmeiras', p: 37, j: 18, sg: 12 },
  { pos: 3, team: 'Atlético-MG', p: 34, j: 18, sg: 10 },
  { pos: 4, team: 'Cruzeiro', p: 31, j: 18, sg: 7 },
  { pos: 5, team: 'Fluminense', p: 30, j: 18, sg: 5 },
];

const ARENA = {
  nome: 'Arena MRV',
  texto: [
    'A Arena MRV é o estádio do Clube Atlético Mineiro, localizada na região da Califórnia, em Belo Horizonte. Inaugurada em 2023, é um marco da nova era institucional do Galo.',
    'Com capacidade para mais de 46.000 torcedores, arquitetura moderna e excelente visibilidade, a Arena recebe os jogos do Atlético e uma variedade de eventos esportivos e culturais. A atmosfera alvinegra torna cada partida uma experiência única.',
  ],
};

const CATEGORIAS = ['Início', 'Notícias', 'Elenco', 'Jogos', 'Classificação'];
