import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import {
  GOOGLE_BUSINESS_SUMMARY,
  GOOGLE_PLACE_URL,
  STATIC_GOOGLE_REVIEWS,
  formatRelativeReviewDate,
  googleImageUrl,
  type GoogleReview,
} from '../googleReviews'
import { Reveal } from './Reveal'
import './GoogleReviews.css'

/**
 * Bloc d'avis Google maison, adapté du widget statique de la landing AJDR.
 * Carrousel en défilement natif (swipe mobile, scroll-snap), flèches qui
 * avancent d'une carte, fenêtre de détail en <dialog> natif (Échap, focus).
 */

const AVATAR_SIZE = 'w96-h96-p-rp-mo-br100'
const THUMB_SIZE = 'w600-h400-p-k-no'

function GoogleMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

const STAR_PATH = 'M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z'

/** Étoiles arrondies à la demi-étoile, comme Google (4,4 → 4 étoiles et demie). */
function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  const clipId = `star${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  const rounded = Math.round(rating * 2) / 2
  return (
    <span className="greviews-stars" role="img" aria-label={`${rating.toLocaleString('fr-FR')} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.min(1, Math.max(0, rounded - (i - 1)))
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#e3e3e3" d={STAR_PATH} />
            {fill > 0 ? (
              <>
                <clipPath id={`${clipId}-${i}`}>
                  <rect x="0" y="0" width={24 * fill} height="24" />
                </clipPath>
                <path fill="#FBBC04" d={STAR_PATH} clipPath={`url(#${clipId}-${i})`} />
              </>
            ) : null}
          </svg>
        )
      })}
    </span>
  )
}

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function Avatar({ review, size }: { review: GoogleReview; size: number }) {
  const [failed, setFailed] = useState(false)
  const showImage = review.avatarUrl && !failed
  return (
    <span
      className="greviews-avatar"
      style={{ width: size, height: size, background: showImage ? undefined : review.avatarColor }}
      aria-hidden="true"
    >
      {showImage ? (
        <img
          src={googleImageUrl(review.avatarUrl, AVATAR_SIZE)}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        initialsFromName(review.name)
      )}
    </span>
  )
}

function ReviewCard({ review, onOpen }: { review: GoogleReview; onOpen: (r: GoogleReview) => void }) {
  const textRef = useRef<HTMLParagraphElement>(null)
  const [overflows, setOverflows] = useState(false)
  const thumb = review.imageUrls[0]

  useLayoutEffect(() => {
    const p = textRef.current
    if (!p) return undefined
    const measure = () => setOverflows(p.scrollHeight - p.clientHeight > 2)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(p)
    return () => ro.disconnect()
  }, [review.text])

  return (
    <button type="button" className="greviews-card" onClick={() => onOpen(review)}>
      <span className="greviews-card__head">
        <Avatar review={review} size={40} />
        <span className="greviews-card__who">
          <span className="greviews-card__name">{review.name}</span>
          <span className="greviews-card__date">
            <GoogleMark size={13} />
            {formatRelativeReviewDate(review.isoDate)}
          </span>
        </span>
      </span>
      <Stars rating={review.rating} />
      <span className="greviews-card__body">
        <span ref={textRef} className={`greviews-card__text${thumb ? ' greviews-card__text--short' : ''}`}>
          {review.text}
        </span>
        {overflows ? <span className="greviews-card__more">Lire la suite</span> : null}
      </span>
      {thumb ? (
        <span className="greviews-card__thumb">
          <img src={googleImageUrl(thumb, THUMB_SIZE)} alt="" loading="lazy" referrerPolicy="no-referrer" />
          {review.imageUrls.length > 1 ? (
            <span className="greviews-card__count">{review.imageUrls.length} photos</span>
          ) : null}
        </span>
      ) : null}
    </button>
  )
}

function ReviewDialog({ review, onClose }: { review: GoogleReview | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [photoFailed, setPhotoFailed] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (review) {
      setPhotoIndex(0)
      setPhotoFailed(false)
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [review])

  const photos = review?.imageUrls ?? []
  const goPhoto = (dir: number) => {
    setPhotoFailed(false)
    setPhotoIndex((i) => (i + dir + photos.length) % photos.length)
  }

  return (
    <dialog
      ref={dialogRef}
      className={`greviews-dialog${photos.length ? ' greviews-dialog--photos' : ''}`}
      aria-labelledby="greviews-dialog-title"
      onClose={onClose}
      onCancel={(e) => {
        // Échap : on laisse l'état React piloter la fermeture.
        e.preventDefault()
        onClose()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose()
      }}
      onClick={(e) => {
        // Clic sur le fond (le <dialog> lui-même, hors contenu) : fermeture.
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {review ? (
        <div className="greviews-dialog__inner">
          {photos.length ? (
            <div className="greviews-dialog__media">
              {photoFailed ? (
                <p className="greviews-dialog__media-error">
                  Photo indisponible.{' '}
                  <a href={GOOGLE_PLACE_URL} target="_blank" rel="noopener noreferrer">
                    La voir sur Google
                  </a>
                </p>
              ) : (
                <img
                  key={photos[photoIndex]}
                  src={photos[photoIndex]}
                  alt=""
                  referrerPolicy="no-referrer"
                  onError={() => setPhotoFailed(true)}
                />
              )}
              {photos.length > 1 ? (
                <>
                  <button type="button" className="greviews-dialog__nav greviews-dialog__nav--prev" onClick={() => goPhoto(-1)} aria-label="Photo précédente">
                    <Chevron direction="left" />
                  </button>
                  <button type="button" className="greviews-dialog__nav greviews-dialog__nav--next" onClick={() => goPhoto(1)} aria-label="Photo suivante">
                    <Chevron direction="right" />
                  </button>
                </>
              ) : null}
            </div>
          ) : null}
          <div className="greviews-dialog__content">
            <button type="button" className="greviews-dialog__close" onClick={onClose} aria-label="Fermer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
            <div className="greviews-card__head">
              <Avatar review={review} size={48} />
              <span className="greviews-card__who">
                <span id="greviews-dialog-title" className="greviews-dialog__name">
                  {review.name}
                </span>
                <span className="greviews-card__date">
                  <GoogleMark size={13} />
                  {formatRelativeReviewDate(review.isoDate)}
                </span>
              </span>
            </div>
            <Stars rating={review.rating} size={18} />
            <p className="greviews-dialog__text">{review.text}</p>
            <a className="greviews-dialog__link" href={GOOGLE_PLACE_URL} target="_blank" rel="noopener noreferrer">
              Voir sur Google
            </a>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}

/** Section d'avis placée juste après le hero. */
export function GoogleReviews() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [openReview, setOpenReview] = useState<GoogleReview | null>(null)

  const updateArrows = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setCanPrev(track.scrollLeft > 4)
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined
    updateArrows()
    track.addEventListener('scroll', updateArrows, { passive: true })
    const ro = new ResizeObserver(updateArrows)
    ro.observe(track)
    return () => {
      track.removeEventListener('scroll', updateArrows)
      ro.disconnect()
    }
  }, [updateArrows])

  /** Avance d'une carte (largeur d'une carte + espacement). */
  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    const card = track?.firstElementChild as HTMLElement | null
    if (!track || !card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: reduced ? 'auto' : 'smooth' })
  }

  const closeReview = useCallback(() => setOpenReview(null), [])
  const rating = GOOGLE_BUSINESS_SUMMARY.averageRating.toLocaleString('fr-FR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })

  return (
    <section id="avis-google" className="greviews" aria-labelledby="greviews-title">
      <div className="greviews__wrap">
        <Reveal className="greviews__header">
          <div className="greviews__summary">
            <span className="greviews__rating">{rating}</span>
            <span className="greviews__summary-detail">
              <Stars rating={GOOGLE_BUSINESS_SUMMARY.averageRating} size={20} />
              <span className="greviews__count">
                <GoogleMark size={16} />
                <span id="greviews-title">{GOOGLE_BUSINESS_SUMMARY.reviewCount} avis Google</span>
              </span>
            </span>
          </div>
          <a className="greviews__all" href={GOOGLE_PLACE_URL} target="_blank" rel="noopener noreferrer">
            Voir tous les avis
          </a>
        </Reveal>

        <div className="greviews__carousel">
          <button
            type="button"
            className="greviews__arrow greviews__arrow--prev"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Avis précédents"
          >
            <Chevron direction="left" />
          </button>
          <div ref={trackRef} className="greviews__track">
            {STATIC_GOOGLE_REVIEWS.map((review) => (
              <div key={review.id} className="greviews__slide">
                <ReviewCard review={review} onOpen={setOpenReview} />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="greviews__arrow greviews__arrow--next"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Avis suivants"
          >
            <Chevron direction="right" />
          </button>
        </div>

        <p className="greviews__note">Sélection d’avis 5 étoiles récents, publiés sur Google.</p>
      </div>

      <ReviewDialog review={openReview} onClose={closeReview} />
    </section>
  )
}
