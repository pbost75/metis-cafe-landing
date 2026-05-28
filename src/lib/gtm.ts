/**
 * Google Tag Manager — chargement conditionnel via VITE_GTM_ID.
 * Crée le conteneur sur https://tagmanager.google.com puis copie l’ID (GTM-XXXXXXX).
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/i

/** ID du conteneur lu depuis .env (local) ou les variables Vercel (production). */
export function getGtmId(): string | undefined {
  const id = import.meta.env.VITE_GTM_ID?.trim()
  if (!id) return undefined
  if (!GTM_ID_PATTERN.test(id)) {
    console.warn('[GTM] VITE_GTM_ID invalide (attendu : GTM-XXXXXXX) :', id)
    return undefined
  }
  return id.toUpperCase()
}

/** Injecte le script GTM dans <head> et le fallback <noscript> au début du <body>. */
export function initGtm(containerId: string): void {
  if (typeof document === 'undefined') return

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

  if (!document.querySelector(`script[data-gtm-id="${containerId}"]`)) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`
    script.dataset.gtmId = containerId
    document.head.appendChild(script)
  }

  if (!document.querySelector(`noscript[data-gtm-id="${containerId}"]`)) {
    const noscript = document.createElement('noscript')
    noscript.dataset.gtmId = containerId
    const iframe = document.createElement('iframe')
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${containerId}`
    iframe.height = '0'
    iframe.width = '0'
    iframe.style.display = 'none'
    iframe.style.visibility = 'hidden'
    noscript.appendChild(iframe)
    document.body.insertBefore(noscript, document.body.firstChild)
  }
}

/** Envoie un événement au dataLayer (lu par GTM). No-op si GTM non chargé. */
export function pushDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(payload)
}
