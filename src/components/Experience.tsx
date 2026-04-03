import { MOSAIC_STRIP } from '../assets'

export function Experience() {
  return (
    <section style={{ background: '#0a0a0a', padding: '8rem 0' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto 4rem',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1.5rem',
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
            L&apos;expérience
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.1rem, 4.2vw, 3.15rem)',
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '0.01em',
            }}
          >
            Vivre le Métis
          </h2>
        </div>
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '1.125rem',
            fontWeight: 300,
            color: '#888',
            lineHeight: 1.8,
            maxWidth: 380,
            margin: 0,
          }}
        >
          Une terrasse à l&apos;ombre des arbres, une cuisine généreuse, et le son d&apos;une guitare le
          samedi soir. Voilà le Métis.
        </p>
      </div>
      <div className="ambiance-strip" style={{ display: 'flex', gap: 3, width: '100%', height: 560 }}>
        {MOSAIC_STRIP.map((item) => (
          <div key={item.src} style={{ flex: '1 1 0', position: 'relative', overflow: 'hidden' }}>
            <img
              src={item.src}
              alt={item.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
