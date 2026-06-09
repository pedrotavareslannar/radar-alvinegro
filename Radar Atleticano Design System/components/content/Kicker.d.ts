import * as React from 'react'

/**
 * Uppercase gold category label that sits above a headline.
 *
 * @startingPoint section="Content" subtitle="Gold uppercase category kicker" viewport="320x60"
 */
export interface KickerProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render. Default "span". */
  as?: keyof JSX.IntrinsicElements
}

export function Kicker(props: KickerProps): JSX.Element
