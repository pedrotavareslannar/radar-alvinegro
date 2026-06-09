import * as React from 'react'

/**
 * The core editorial card of the portal — cover image, gold category kicker,
 * headline that turns gold on hover, summary and byline.
 *
 * @startingPoint section="Content" subtitle="Editorial news card (3 variants)" viewport="380x420"
 */
export interface NewsCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Headline. */
  title: string
  /** Optional standfirst/summary (hidden in compact). */
  resumo?: string
  /** Category label rendered as a gold kicker. */
  category?: string
  /** Author name for the byline. */
  author?: string
  /** Pre-formatted date string. */
  date?: string
  /** Cover image URL. Falls back to a branded gold-bar placeholder. */
  image?: string
  /** Link target. Default "#". */
  href?: string
  /** Layout: featured (large), default (medium grid), compact (thumb + 3-line title). */
  variant?: 'featured' | 'default' | 'compact'
}

export function NewsCard(props: NewsCardProps): JSX.Element
