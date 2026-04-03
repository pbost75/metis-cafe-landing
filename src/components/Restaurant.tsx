import { RESTAURANT_SECTION_PHOTO } from '../assets'

export function Restaurant() {
  return (
    <section id="restaurant" style={{ padding: '8rem 2rem', background: '#fff' }}>
      <div
        className="about-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
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
              color: '#888',
              marginBottom: '1.5rem',
            }}
          >
            Notre histoire
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#0a0a0a',
              lineHeight: 1.2,
              margin: '0 0 2rem',
            }}
          >
            Une brasserie au cœur
            <br />
            <em>de l&apos;Ermitage</em>
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.125rem',
              fontWeight: 300,
              color: '#555',
              lineHeight: 1.9,
              marginBottom: '1.5rem',
            }}
          >
            Niché à deux pas du lagon de l&apos;Ermitage-les-Bains, le Métis Café vous accueille sous une
            terrasse ombragée pour déjeuner, dîner, ou simplement prendre un verre dans une atmosphère
            chaleureuse et détendue.
          </p>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.125rem',
              fontWeight: 300,
              color: '#555',
              lineHeight: 1.9,
              marginBottom: '2.5rem',
            }}
          >
            Notre cuisine mêle saveurs françaises et influences créoles, avec des produits frais du marché
            local. Une cuisine sincère, généreuse, pensée pour le plaisir partagé.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              borderTop: '1px solid #e8e8e8',
              paddingTop: '2rem',
            }}
          >
            {[
              ['Service midi', '11h30 – 14h'],
              ['Service soir', '18h30 – 21h'],
              ['Ouverture', 'Lun – Dim'],
              ['Concerts', 'Samedi soir'],
            ].map(([label, value]) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#aaa',
                    marginBottom: '0.4rem',
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.1rem',
                    fontWeight: 400,
                    color: '#0a0a0a',
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '100%', paddingTop: '120%', position: 'relative', overflow: 'hidden' }}>
            <img
              src={RESTAURANT_SECTION_PHOTO}
              alt="Restaurant Métis Café"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '-1.5rem',
              left: '-1.5rem',
              background: '#0a0a0a',
              color: '#fff',
              padding: '1.5rem',
              width: 150,
            }}
          >
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2rem',
                fontWeight: 300,
                margin: 0,
                lineHeight: 1,
              }}
            >
              +280
            </p>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)',
                marginTop: '0.4rem',
              }}
            >
              Avis clients
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
