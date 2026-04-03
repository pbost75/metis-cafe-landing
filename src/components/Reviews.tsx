function Star() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#0a0a0a" stroke="#0a0a0a" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

const reviews = [
  {
    quote:
      "Une valeur sûre à L'Ermitage ! La terrasse est magnifique, la cuisine généreuse et le service souriant. Les concerts du samedi sont un vrai plus.",
    author: 'Marie-Claire D.',
    source: 'TripAdvisor',
  },
  {
    quote:
      'Superbe soirée concert musique française. Ambiance fantastique, rhums arrangés excellents. On y retournera sans hésiter.',
    author: 'Julien P.',
    source: 'Google',
  },
  {
    quote:
      'Des plats très bien servis, des frites maison délicieuses et le sourire des serveuses. On y est allés trois fois — c\'est tout dire !',
    author: 'Sophie & Marc',
    source: 'TripAdvisor',
  },
]

export function Reviews() {
  return (
    <section style={{ padding: '8rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#888',
              marginBottom: '1rem',
            }}
          >
            Ce qu&apos;ils en disent
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.1rem, 4.2vw, 3.15rem)',
              fontWeight: 600,
              color: '#0a0a0a',
              margin: 0,
              letterSpacing: '0.01em',
            }}
          >
            +280 avis · Note 4/5
          </h2>
        </div>
        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {reviews.map((r) => (
            <div
              key={r.author}
              style={{
                padding: '2.5rem',
                border: '1px solid #ebebeb',
                background: '#fafafa',
              }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: '1.2rem' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} />
                ))}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.05rem',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: '#333',
                  lineHeight: 1.8,
                  margin: '0 0 1.5rem',
                }}
              >
                &ldquo;{r.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#0a0a0a',
                    margin: 0,
                  }}
                >
                  {r.author}
                </p>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 400,
                    color: '#bbb',
                    margin: 0,
                    letterSpacing: '0.1em',
                  }}
                >
                  {r.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
