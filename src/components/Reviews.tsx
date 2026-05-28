import { GOOGLE_REVIEWS_URL, REVIEW_PLATFORMS, TRIPADVISOR_REVIEWS_URL } from '../assets'

/** Affiche la note au format français (4,3). */
function formatRating(value: number): string {
  return value.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
}

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
    source: 'TripAdvisor' as const,
  },
  {
    quote:
      'Superbe soirée concert musique française. Ambiance fantastique, rhums arrangés excellents. On y retournera sans hésiter.',
    author: 'Julien P.',
    source: 'Google' as const,
  },
  {
    quote:
      'Des plats très bien servis, des frites maison délicieuses et le sourire des serveuses. On y est allés trois fois — c\'est tout dire !',
    author: 'Sophie & Marc',
    source: 'TripAdvisor' as const,
  },
]

function reviewUrlForSource(source: 'Google' | 'TripAdvisor'): string {
  return source === 'Google' ? GOOGLE_REVIEWS_URL : TRIPADVISOR_REVIEWS_URL
}

export function Reviews() {
  return (
    <section id="avis" className="section-pad" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reviews-intro">
          <p className="reviews-intro__eyebrow">Ce qu&apos;ils en disent</p>
          <h2 className="reviews-intro__title">+280 avis · Note 4/5</h2>
          <div className="reviews-platform-row">
            {REVIEW_PLATFORMS.map((platform) => (
              <a
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reviews-platform-item"
                aria-label={`Voir les avis sur ${platform.ariaName} — note ${formatRating(platform.rating)} sur 5`}
              >
                <img
                  src={platform.logoSrc}
                  alt=""
                  className={`reviews-platform-logo__img ${platform.logoClass}`}
                  width={platform.logoWidth}
                  height={platform.logoHeight}
                  decoding="async"
                />
                <span className="reviews-platform-score">
                  <span className="reviews-platform-score__value">{formatRating(platform.rating)}</span>
                  <span className="reviews-platform-score__of">/5</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {reviews.map((r) => (
            <div
              key={r.author}
              className="reviews-card"
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
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
                <a
                  href={reviewUrlForSource(r.source)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reviews-card__source"
                  title={`Voir les avis sur ${r.source}`}
                >
                  {r.source}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
