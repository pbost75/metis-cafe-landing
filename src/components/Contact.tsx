import { MAPS_EMBED_URL, TEL_HREF } from '../assets'

export function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 2rem', background: '#0a0a0a' }}>
      <div
        className="contact-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#666',
              marginBottom: '1rem',
            }}
          >
            Nous trouver
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.2,
              margin: '0 0 3rem',
            }}
          >
            Venez nous rendre
            <br />
            <em>visite</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#666',
                  marginBottom: '0.6rem',
                }}
              >
                Adresse
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.125rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                2 Mail de Rodrigues
                <br />
                L&apos;Ermitage-les-Bains
                <br />
                97434 Saint-Paul · La Réunion
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#666',
                  marginBottom: '0.6rem',
                }}
              >
                Horaires
              </p>
              {[
                ['Lundi – Samedi', '9h – 23h'],
                ['Dimanche', '8h30 – 15h30'],
              ].map(([d, h]) => (
                <div
                  key={d}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    padding: '0.7rem 0',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.78rem',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {d}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.78rem',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.85)',
                      textAlign: 'right',
                    }}
                  >
                    {h}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={TEL_HREF}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: '#fff',
                padding: '1.5rem 2rem',
                textDecoration: 'none',
                transition: 'background 0.2s',
                marginTop: '0.5rem',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#888',
                    margin: '0 0 0.2rem',
                  }}
                >
                  Téléphone
                </p>
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    color: '#0a0a0a',
                    margin: 0,
                  }}
                >
                  0692 86 24 86
                </p>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div style={{ width: '100%', paddingTop: '100%', position: 'relative', overflow: 'hidden', background: '#1a1a1a' }}>
            <iframe
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Métis Café"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 0,
                filter: 'grayscale(100%) contrast(1.1)',
              }}
            />
          </div>
          <a
            href="https://maps.google.com/?q=2+mail+de+Rodrigues+Ermitage-les-Bains+La+Réunion"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.2rem 1.5rem',
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              transition: 'background 0.2s',
            }}
          >
            <span>Ouvrir dans Google Maps</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
