import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Texte : up / fade = bas → haut.
 * Images : left / right, from-top (haut → bas), from-bottom (bas → haut).
 */
export type RevealVariant = 'up' | 'left' | 'right' | 'fade' | 'from-top' | 'from-bottom'

type RevealDelay = 0 | 1 | 2 | 3 | 4 | 5

type RevealProps = {
  children: ReactNode
  variant?: RevealVariant
  /** Décalage en dixièmes de seconde (0 à 5 → 0s à 0.5s). */
  delay?: RevealDelay
  className?: string
  style?: CSSProperties
  /** Images : déplacement uniquement (pas de fondu opacité). */
  image?: boolean
  /** Léger zoom au survol (galeries / mosaïque). */
  media?: boolean
  as?: ElementType
}

/** Enveloppe un bloc : invisible au chargement, apparaît au scroll. */
export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  style,
  image = false,
  media = false,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>()

  const classes = [
    'reveal',
    `reveal--${variant}`,
    delay ? `reveal--delay-${delay}` : '',
    image ? 'reveal--image' : '',
    media ? 'reveal-media' : '',
    visible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref as never} className={classes} style={style}>
      {children}
    </Tag>
  )
}

/** Groupe dont les enfants .reveal s’enchaînent avec un léger décalage. */
export function RevealGroup({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`reveal-group ${className}`.trim()}>{children}</div>
}
