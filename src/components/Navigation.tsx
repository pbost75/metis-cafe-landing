import { useState, type CSSProperties } from 'react'

const linkStyle: CSSProperties = {
  color: 'rgba(255, 255, 255, 0.85)',
  textDecoration: 'none',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '0.7rem',
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  transition: 'color 0.2s',
}

export function Navigation() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav className="site-header">
        <a
          href="#top"
          onClick={close}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#fff',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Métis Café
        </a>
        <ul
          className="nav-desktop"
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {[
            ['#restaurant', 'Le restaurant'],
            ['#carte', 'Carte'],
            ['#concerts', 'Concerts'],
            ['#contact', 'Contact'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} style={linkStyle}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+262692862486"
          className="nav-cta"
          style={{
            background: '#fff',
            color: '#0a0a0a',
            padding: '0.55rem 1.4rem',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          Appeler
        </a>
        <button
          type="button"
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 1.5,
                background: '#fff',
              }}
            />
          ))}
        </button>
      </nav>
      {open ? (
        <div className="mobile-menu-panel" role="dialog" aria-label="Menu">
          {[
            ['#restaurant', 'Le restaurant'],
            ['#carte', 'Carte'],
            ['#concerts', 'Concerts'],
            ['#contact', 'Contact'],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a
            href="tel:+262692862486"
            onClick={close}
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              border: '1px solid rgba(255,255,255,0.5)',
            }}
          >
            Appeler
          </a>
        </div>
      ) : null}
    </>
  )
}
