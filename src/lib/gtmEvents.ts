import { trackGa4Event, isGa4DirectActive } from './ga4'
import { pushDataLayer } from './gtm'

/** Où se trouve le bouton « Réserver » sur la page. */
export type ReserveCtaLocation = 'hero' | 'nav' | 'nav_mobile' | 'sticky' | 'contact'

/** Clic sur le CTA principal « Réserver ». */
export function trackCtaReserve(
  location: ReserveCtaLocation,
  action: 'phone' | 'modal',
): void {
  pushDataLayer({
    event: 'cta_reserve',
    cta_type: 'primary',
    cta_label: 'reserver',
    cta_location: location,
    cta_action: action,
  })

  if (isGa4DirectActive()) {
    trackGa4Event('cta_reserve', {
      cta_type: 'primary',
      cta_label: 'reserver',
      cta_location: location,
      cta_action: action,
    })
  }
}

/** Où se trouve le bouton « Voir la carte ». */
export type ViewMenuCtaLocation = 'hero'

/** Clic sur le CTA secondaire « Voir la carte ». */
export function trackCtaViewMenu(location: ViewMenuCtaLocation): void {
  pushDataLayer({
    event: 'cta_view_menu',
    cta_type: 'secondary',
    cta_label: 'voir_la_carte',
    cta_location: location,
    cta_action: 'scroll',
  })

  if (isGa4DirectActive()) {
    trackGa4Event('cta_view_menu', {
      cta_type: 'secondary',
      cta_label: 'voir_la_carte',
      cta_location: location,
      cta_action: 'scroll',
    })
  }
}
