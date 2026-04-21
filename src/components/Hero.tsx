import { HERO_BACKGROUND, TEL_HREF } from '../assets'

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div
        className="hero-bg"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${HERO_BACKGROUND}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.05)',
          transition: 'transform 6s ease-out',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 max(1.5rem, env(safe-area-inset-right)) 0 max(1.5rem, env(safe-area-inset-left))',
          maxWidth: 800,
        }}
      >
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '1.2rem',
            animation: 'fadeUp 0.8s ease 0.2s both',
          }}
        >
          L&apos;Ermitage-les-Bains · La Réunion
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.25rem, 8.5vw, 6.25rem)',
            fontWeight: 600,
            color: '#fff',
            margin: '0 0 0.5rem',
            lineHeight: 1.08,
            letterSpacing: '0.02em',
            textShadow: '0 2px 40px rgba(0,0,0,0.35)',
            animation: 'fadeUp 0.8s ease 0.4s both',
          }}
        >
          Métis Café
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.05rem, 3vw, 1.55rem)',
            fontWeight: 500,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 2.8rem',
            letterSpacing: '0.03em',
            animation: 'fadeUp 0.8s ease 0.6s both',
          }}
        >
          Brasserie · Terrasse ombragée · Concerts
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.8s ease 0.8s both',
          }}
        >
          <a
            href={TEL_HREF}
            style={{
              background: '#fff',
              color: '#0a0a0a',
              padding: '1rem 2.5rem',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
          >
            📞 Nous appeler
          </a>
          <a
            href="#restaurant"
            style={{
              background: 'transparent',
              color: '#fff',
              padding: '1rem 2.5rem',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.6)',
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            Découvrir
          </a>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          animation: 'fadeUp 1s ease 1.2s both',
        }}
      >
        <span
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: 'rgba(255,255,255,0.3)',
            animation: 'lineDown 1.5s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
