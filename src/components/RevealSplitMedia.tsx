import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type RevealSplitMediaProps = {
  children: ReactNode
  className?: string
  /** Classe du carré décoratif (ex. cuisine-deco). */
  decoClassName?: string
}

/**
 * Animation « split » au scroll : le fond décoratif part vers la droite,
 * l’image vers la gauche, puis ils glissent doucement vers leur place (effet Sauvage).
 */
export function RevealSplitMedia({
  children,
  className = '',
  decoClassName = 'cuisine-deco',
}: RevealSplitMediaProps) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal-split-media${visible ? ' is-visible' : ''} ${className}`.trim()}
    >
      <div className={`reveal-split-media__deco ${decoClassName}`} aria-hidden />
      <div className="reveal-split-media__frame">{children}</div>
    </div>
  )
}
