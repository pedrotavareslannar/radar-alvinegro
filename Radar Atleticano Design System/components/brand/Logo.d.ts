import * as React from 'react'

/**
 * Radar Atleticano logo lockup — gold bar + uppercase wordmark, or compact monogram.
 *
 * @startingPoint section="Brand" subtitle="Gold-bar wordmark & RA monogram" viewport="360x120"
 */
export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full wordmark or compact "RA" mark. Default "wordmark". */
  variant?: 'wordmark' | 'mark'
  /** Size step. Default "md". */
  size?: 'sm' | 'md' | 'lg'
  /** Render dark ink for placement on white/light surfaces. Default false. */
  onLight?: boolean
}

export function Logo(props: LogoProps): JSX.Element
