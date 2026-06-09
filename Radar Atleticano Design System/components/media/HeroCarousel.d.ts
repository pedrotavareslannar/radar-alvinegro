import * as React from 'react'

/**
 * Featured story carousel for the top of the homepage — cover image, protection
 * gradient, gold category pill + headline, arrows and dot indicators.
 *
 * @startingPoint section="Media" subtitle="Featured hero carousel" viewport="760x460"
 */
export interface HeroCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  slides: HeroSlide[]
  /** Called with the active slide when the headline is clicked. */
  onOpen?: (slide: HeroSlide) => void
  /** Pixel height of the carousel. Default 460. */
  height?: number
}

interface HeroSlide {
  /** Cover image URL (16:9 works best). Falls back to a branded placeholder. */
  image?: string
  /** Category label shown as a gold pill. */
  category?: string
  /** Headline. */
  title: string
  /** Article id/href passed back through onOpen. */
  id?: string
}

export function HeroCarousel(props: HeroCarouselProps): JSX.Element
