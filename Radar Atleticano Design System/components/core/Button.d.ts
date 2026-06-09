import * as React from 'react'

/**
 * Action button in the Radar Atleticano tone — gold primary, outline, or ghost.
 *
 * @startingPoint section="Core" subtitle="Gold / outline / ghost buttons" viewport="420x120"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual tone. Default "primary". */
  variant?: 'primary' | 'outline' | 'ghost'
  /** Control height. Default "md". */
  size?: 'sm' | 'md' | 'lg'
  /** Stretch to container width. Default false. */
  fullWidth?: boolean
}

export function Button(props: ButtonProps): JSX.Element
