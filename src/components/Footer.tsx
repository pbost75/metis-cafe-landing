import { TEL_HREF } from '../assets'

export function Footer() {
  return (
    <footer id="pied-de-page" className="footer-pad" style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#fff',
              margin: '0 0 0.3rem',
              letterSpacing: '0.06em',
            }}
          >
            Métis Café
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 300,
              color: '#555',
              margin: 0,
              letterSpacing: '0.1em',
            }}
          >
            L&apos;Ermitage-les-Bains · La Réunion
          </p>
        </div>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            ['#restaurant', 'Restaurant'],
            ['#carte', 'Carte'],
            ['#concerts', 'Concerts'],
            ['#contact', 'Contact'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 400,
                color: '#555',
                textDecoration: 'none',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a
            href="https://www.instagram.com/metiscafe974/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram @metiscafe974"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: '2rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.6rem',
            fontWeight: 300,
            color: '#333',
            margin: 0,
          }}
        >
          © 2025 Métis Café · Tous droits réservés
        </p>
        <a
          href={TEL_HREF}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.6rem',
            fontWeight: 400,
            color: '#555',
            textDecoration: 'none',
            letterSpacing: '0.1em',
          }}
        >
          0692 86 24 86
        </a>
      </div>
    </footer>
  )
}
