/**
 * Google Analytics 4 (gtag.js) — chargement direct optionnel.
 *
 * Si GTM est actif (VITE_GTM_ID), configure plutôt GA4 dans tagmanager.google.com
 * et laisse VITE_GA4_MEASUREMENT_ID vide pour éviter les pages vues en double.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const GA4_ID_PATTERN = /^G-[A-Z0-9]+$/i

let directGa4Id: string | undefined

/** ID de mesure GA4 (ex. G-XXXXXXXXXX) depuis .env ou Vercel. */
export function getGa4MeasurementId(): string | undefined {
  const id = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim()
  if (!id) return undefined
  if (!GA4_ID_PATTERN.test(id)) {
    console.warn('[GA4] VITE_GA4_MEASUREMENT_ID invalide (attendu : G-XXXXXXXXXX) :', id)
    return undefined
  }
  return id.toUpperCase()
}

/** true si gtag a été initialisé en mode direct (sans passer par GTM). */
export function isGa4DirectActive(): boolean {
  return Boolean(directGa4Id)
}

function ensureGtag(): void {
  window.dataLayer = window.dataLayer ?? []
  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer!.push(arguments as unknown as Record<string, unknown>)
    }
  }
}

/** Charge gtag.js et envoie la config GA4 (pages vues automatiques). */
export function initGa4(measurementId: string): void {
  if (typeof document === 'undefined') return

  directGa4Id = measurementId
  ensureGtag()
  window.gtag!('js', new Date())
  window.gtag!('config', measurementId)

  if (!document.querySelector(`script[data-ga4-id="${measurementId}"]`)) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    script.dataset.ga4Id = measurementId
    document.head.appendChild(script)
  }
}

/** Événement GA4 en mode direct (ignoré si seul GTM est utilisé). */
export function trackGa4Event(
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!directGa4Id || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}
