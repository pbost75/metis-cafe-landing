import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { OPENING_HOURS, PHONE_DISPLAY, SERVICE_HOURS, TEL_HREF } from '../assets'
import { usePhoneLinkMode } from '../hooks/usePhoneLinkMode'
import { trackCtaReserve, type ReserveCtaLocation } from '../lib/gtmEvents'

type CallReservationContextValue = {
  open: () => void
  close: () => void
}

const CallReservationContext = createContext<CallReservationContextValue | null>(null)

function useCallReservationContext(): CallReservationContextValue {
  const ctx = useContext(CallReservationContext)
  if (!ctx) {
    throw new Error('CallLink doit être utilisé dans CallReservationProvider')
  }
  return ctx
}

/** Fournit la popup + le contexte pour tous les CTA « Réserver ». */
export function CallReservationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const titleId = useId()

  const close = useCallback(() => setOpen(false), [])
  const show = useCallback(() => setOpen(true), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <CallReservationContext.Provider value={{ open: show, close }}>
      {children}
      {open ? (
        <div
          className="call-modal-backdrop"
          role="presentation"
          onClick={close}
        >
          <div
            className="call-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="call-modal__close"
              aria-label="Fermer"
              onClick={close}
            >
              ×
            </button>
            <p className="call-modal__eyebrow">Réservation</p>
            <h2 id={titleId} className="call-modal__title">
              Réserver par téléphone
            </h2>
            <p className="call-modal__lead">
              Pour réserver une table, appelez le restaurant au numéro ci-dessous.
              Notre équipe vous confirmera la disponibilité.
            </p>
            <a href={TEL_HREF} className="call-modal__phone">
              {PHONE_DISPLAY}
            </a>
            <div className="call-modal__block">
              <p className="call-modal__label">Horaires d&apos;ouverture</p>
              <ul className="call-modal__hours">
                {OPENING_HOURS.map(({ days, hours }) => (
                  <li key={days}>
                    <span>{days}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="call-modal__block">
              <p className="call-modal__label">Services (repas)</p>
              <ul className="call-modal__hours">
                {SERVICE_HOURS.map(({ label, hours }) => (
                  <li key={label}>
                    <span>{label}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button type="button" className="call-modal__dismiss" onClick={close}>
              Fermer
            </button>
          </div>
        </div>
      ) : null}
    </CallReservationContext.Provider>
  )
}

type CallLinkProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** Emplacement du bouton (pour GTM). */
  trackLocation: ReserveCtaLocation
  /** Ferme le menu mobile si présent */
  onNavigate?: () => void
}

/**
 * Lien « Réserver » : sur mobile → appel direct ; sur desktop → ouvre la popup.
 */
export function CallLink({ children, className, style, trackLocation, onNavigate }: CallLinkProps) {
  const mode = usePhoneLinkMode()
  const { open } = useCallReservationContext()

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.()
    if (mode === 'modal') {
      e.preventDefault()
      trackCtaReserve(trackLocation, 'modal')
      open()
    } else {
      trackCtaReserve(trackLocation, 'phone')
    }
  }

  return (
    <a href={TEL_HREF} className={className} style={style} onClick={onClick}>
      {children}
    </a>
  )
}
