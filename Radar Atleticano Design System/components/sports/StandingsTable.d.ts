import * as React from 'react'

/**
 * League standings table ("Classificação") with a position chip and configurable
 * stat columns; the highlighted club row is tinted gold.
 *
 * @startingPoint section="Sports" subtitle="League standings table" viewport="320x280"
 */
export interface StandingsTableProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: StandingRow[]
  /** Stat columns to show. Default [{key:'p',label:'P'},{key:'j',label:'J'}]. */
  columns?: StandingColumn[]
  /** Club name to highlight (the Galo). */
  highlight?: string
}

interface StandingRow {
  /** Position (defaults to row index + 1). */
  pos?: number
  /** Club name as shown in the table. */
  team: string
  /** Optional crest image URL. */
  crest?: string
  /** Stat values keyed to match `columns` (e.g. p, j, v, e, d, sg). */
  [stat: string]: any
}

interface StandingColumn {
  /** Key into each row's stat values. */
  key: string
  /** Column header label (e.g. "P", "J"). */
  label: string
}

export function StandingsTable(props: StandingsTableProps): JSX.Element
