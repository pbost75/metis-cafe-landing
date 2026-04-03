import { useCallback, useEffect, useRef, useState } from 'react'
import { CUISINE_SLIDES } from '../assets'

const SLIDE_INTERVAL_MS = 5500

export function Cuisine() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const go = useCallback((i: number) => {
    setActive((i + CUISINE_SLIDES.length) % CUISINE_SLIDES.length)
  }, [])

  useEffect(() => {
    if (reducedMotion.current || paused) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % CUISINE_SLIDES.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused])

  return (
    <section style={{ background: '#fff', padding: '8rem 2rem' }}>
      <div
        className="cuisine-grid"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: '2rem 2rem -2rem -2rem',
              background: '#fff9e5',
              zIndex: 0,
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              role="region"
              aria-roledescription="carrousel"
              aria-label="Photos de la cuisine du Métis Café"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
              }}
              style={{ width: '100%', paddingTop: '120%', position: 'relative', overflow: 'hidden' }}
            >
              {CUISINE_SLIDES.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: index === active ? 1 : 0,
                    transition: 'opacity 0.65s ease',
                    zIndex: index === active ? 1 : 0,
                  }}
                  draggable={false}
                />
              ))}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.2rem',
                  left: '1.2rem',
                  display: 'flex',
                  gap: '0.5rem',
                  zIndex: 10,
                }}
              >
                {CUISINE_SLIDES.map((_, i) => {
                  const isOn = i === active
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Photo ${i + 1} sur ${CUISINE_SLIDES.length}`}
                      aria-current={isOn ? 'true' : undefined}
                      onClick={() => go(i)}
                      style={{
                        width: isOn ? 24 : 6,
                        height: 6,
                        borderRadius: 3,
                        background: isOn ? '#fff' : 'rgba(255,255,255,0.45)',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'width 0.35s ease, background 0.25s ease',
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: '2.5rem' }}>
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
            La cuisine
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.1rem, 4.2vw, 3.15rem)',
              fontWeight: 600,
              color: '#0a0a0a',
              lineHeight: 1.2,
              margin: '0 0 2rem',
              letterSpacing: '0.01em',
            }}
          >
            Fait maison,
            <br />
            <em>avec amour</em>
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.125rem',
              fontWeight: 300,
              color: '#555',
              lineHeight: 1.9,
              marginBottom: 0,
            }}
          >
            Ici, le fait maison est à l&apos;honneur avec des produits frais et une belle dose d&apos;amour
            dans chaque assiette. Midi ou soir, on s&apos;installe entre amis ou en famille, on trinque à la
            fraîche avec un cocktail maison et on profite de la brise qui traverse la terrasse du Métis à
            l&apos;Ermitage. L&apos;ambiance est simple, conviviale, toujours animée par une équipe aux petits
            soins qui aime voir les gens se régaler.
          </p>
        </div>
      </div>
    </section>
  )
}
