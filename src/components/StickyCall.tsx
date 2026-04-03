import { useEffect, useState } from 'react'
import { TEL_HREF } from '../assets'

export function StickyCall() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 380)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={TEL_HREF}
      className="sticky-call sticky-call--compact"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 200,
        background: '#0a0a0a',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.9rem 1.5rem',
        textDecoration: 'none',
        boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <span
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        Appeler
      </span>
    </a>
  )
}
