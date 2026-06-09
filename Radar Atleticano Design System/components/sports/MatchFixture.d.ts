import * as React from 'react'

/**
 * One row of the "Próximos jogos" widget — two crests + abbreviations split by an
 * ×, over a competition / date / venue meta line.
 *
 * @startingPoint section="Sports" subtitle="Upcoming match fixture row" viewport="320x90"
 */
export interface MatchFixtureProps extends React.HTMLAttributes<HTMLDivElement> {
  home: Team
  away: Team
  /** Competition label (rendered gold), e.g. "Brasileirão". */
  competition?: string
  /** Date/time string, e.g. "12/06 às 21:30". */
  date?: string
  /** Venue, e.g. "Arena MRV". */
  venue?: string
}

interface Team {
  /** Short abbreviation, e.g. "CAM", "FLA". */
  abbr: string
  /** Optional crest image URL; falls back to a monogram badge. */
  crest?: string
}

export function MatchFixture(props: MatchFixtureProps): JSX.Element
