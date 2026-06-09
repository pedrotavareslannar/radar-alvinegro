import * as React from 'react'

/** Muted "Autor · data" meta line for headlines and cards. */
export interface BylineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Author name. */
  author?: string
  /** Pre-formatted date string (pt-BR, e.g. "09 de junho de 2026"). */
  date?: string
}

export function Byline(props: BylineProps): JSX.Element
