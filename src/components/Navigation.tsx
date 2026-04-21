import { useEffect, useState } from 'react'

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

  const solidBar = scrolled

  return (
    <>
      <nav className={`site-header${solidBar ? ' site-header--solid' : ''}`}>
        <button
          type="button"
          className="nav-menu-trigger"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-burger-icon" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span key={i} className="nav-burger-line" />
            ))}
          </span>
          <span className="nav-menu-label">menu</span>
        </button>
        <a href="#top" className="nav-brand-center" onClick={close}>
          Métis Café
        </a>
        <a href="tel:+262692862486" className="nav-cta">
          Appeler
        </a>
      </nav>
      {open ? (
        <div className="mobile-menu-panel" role="dialog" aria-label="Menu">
          {MENU_LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a
            href="tel:+262692862486"
            onClick={close}
            className="mobile-menu-panel__cta"
          >
            Appeler
          </a>
        </div>
      ) : null}
    </>
  )
}
