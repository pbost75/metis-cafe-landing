import { useEffect, useRef } from 'react'

/**
 * Widgets d'avis Trustindex.
 *
 * Le loader Trustindex insère le widget à l'emplacement de sa propre balise
 * script, puis retire cette balise. On l'injecte donc dans un conteneur qu'on
 * maîtrise plutôt que de poser le <script> dans le JSX : React n'exécute pas
 * les balises script rendues via JSX. Le drapeau `injected` évite la double
 * exécution du montage en mode strict (développement uniquement).
 */

/** Carrousel d'avis complets, affiché après le hero. */
export const WIDGET_AVIS = 'e6eb2ea80677787f9316f5664e2'

/** Badge compact « Google 4,4 · 512 avis », réservé à une future intégration. */
export const WIDGET_BADGE = '489fb73809d27863c496aa7200e'

type Props = {
  widgetId: string
  className?: string
  style?: React.CSSProperties
}

/** Conteneur nu : à utiliser pour poser un widget n'importe où dans la page. */
export function TrustindexWidget({ widgetId, className, style }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const injected = useRef(false)

  useEffect(() => {
    if (injected.current || !containerRef.current) return
    injected.current = true

    const script = document.createElement('script')
    script.src = `https://cdn.trustindex.io/loader.js?${widgetId}`
    script.defer = true
    script.async = true
    containerRef.current.appendChild(script)
  }, [widgetId])

  return <div ref={containerRef} className={className} style={style} />
}

/** Section d'avis placée juste après le hero. */
export function TrustindexReviews() {
  return (
    <section
      id="avis-google"
      aria-label="Avis Google des clients du Métis Café"
      style={{ padding: '3rem 1.25rem', background: '#fff' }}
    >
      <TrustindexWidget widgetId={WIDGET_AVIS} style={{ maxWidth: 1100, margin: '0 auto' }} />
    </section>
  )
}
