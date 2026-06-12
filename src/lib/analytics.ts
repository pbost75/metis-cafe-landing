/**
 * Point d’entrée analytics : GTM (recommandé) ou GA4 direct si pas de GTM.
 */

import { getGa4MeasurementId, initGa4 } from './ga4'
import { getGtmId, initGtm } from './gtm'

/** Charge GTM et/ou GA4 selon les variables d’environnement. */
export function initAnalytics(): void {
  const gtmId = getGtmId()
  const ga4Id = getGa4MeasurementId()

  if (gtmId) {
    initGtm(gtmId)
    if (ga4Id) {
      console.warn(
        '[Analytics] GTM et VITE_GA4_MEASUREMENT_ID sont tous deux définis. ' +
          'Le tag GA4 direct est ignoré : configure GA4 dans Google Tag Manager pour éviter le double comptage.',
      )
    }
    return
  }

  if (ga4Id) {
    initGa4(ga4Id)
    return
  }

  console.info(
    '[Analytics] Aucun tag actif. Définis VITE_GTM_ID (recommandé) ou VITE_GA4_MEASUREMENT_ID dans .env / Vercel.',
  )
}
