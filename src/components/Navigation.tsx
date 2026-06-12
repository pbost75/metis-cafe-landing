import { useEffect, useState } from 'react'
import { trackCtaReserve } from '../lib/gtmEvents'
import { CallLink } from './CallReservation'

const MENU_LINKS: [string, string][] = [
  ['#restaurant', 'Le restaurant'],
  ['#cuisine', 'La cuisine'],
  ['#experience', "L'expérience"],
  ['#carte', 'Carte'],
  ['#concerts', 'Concerts'],
  ['#avis', 'Avis'],
  ['#contact', 'Contact'],
]

const SCROLL_THRESHOLD_PX = 48

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Bloque le scroll de la page quand le menu est ouvert */
  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', open)
    return () => document.body.classList.remove('nav-menu-open')
  }, [open])

  /* Fermeture avec la touche Échap */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const solidBar = scrolled || open

  return (
    <>
      <nav
        className={`site-header${solidBar ? ' site-header--solid' : ''}${open ? ' site-header--menu-open' : ''}`}
      >
        <button
          type="button"
          className={`nav-menu-trigger${open ? ' nav-menu-trigger--open' : ''}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="nav-menu-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-burger-icon" aria-hidden>
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
          </span>
          <span className="nav-menu-label">{open ? 'fermer' : 'menu'}</span>
        </button>
        <a href="#top" className="nav-brand-center" onClick={close}>
          Métis Café
        </a>
        <CallLink className="nav-cta" trackLocation="nav">
          Réserver
        </CallLink>
      </nav>

      <div
        className={`nav-menu-root${open ? ' nav-menu-root--open' : ''}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="nav-menu-backdrop"
          aria-label="Fermer le menu"
          tabIndex={open ? 0 : -1}
          onClick={close}
        />
        <div
          id="nav-menu-panel"
          className="nav-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <nav className="nav-menu-panel__links">
            {MENU_LINKS.map(([href, label]) => (
              <a key={href} href={href} onClick={close}>
                {label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+262692862486"
            onClick={() => {
              trackCtaReserve('nav_mobile', 'phone')
              close()
            }}
            className="nav-menu-panel__cta"
          >
            Réserver
          </a>
        </div>
      </div>
    </>
  )
}
