import * as React from 'react'

/**
 * Homepage section header — optional gold eyebrow, bold title, optional action link.
 *
 * @startingPoint section="Core" subtitle="Section header with eyebrow + action" viewport="700x90"
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Section title. */
  title: string
  /** Small uppercase eyebrow above the title (e.g. "Essa semana"). */
  eyebrow?: string
  /** Action link label, rendered gold and prefixed with "+" (e.g. "Notícias"). */
  action?: string
  /** Action click handler. */
  onAction?: () => void
  /** Center the title block (used for the Arena section). Default "left". */
  align?: 'left' | 'center'
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element
