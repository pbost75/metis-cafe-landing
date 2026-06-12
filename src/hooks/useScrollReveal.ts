import { useEffect, useRef, useState } from 'react'

type ScrollRevealOptions = {
  /** Marge autour du viewport (comme sur sauvage.re). */
  rootMargin?: string
  /**
   * true = animation une seule fois.
   * false = se relance quand on quitte la section puis qu’on y revient.
   */
  once?: boolean
}

/**
 * Détecte quand un élément entre ou sort de l’écran.
 * Le contenu reste toujours dans le HTML (aucun impact SEO).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {},
) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)
  const { rootMargin = '0px 0px -10% 0px', once = false } = options

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
          return
        }

        setVisible(entry.isIntersecting)
      },
      { rootMargin, threshold: 0.12 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, once])

  return { ref, visible }
}
