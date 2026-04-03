import { CONCERT_SECTION_PHOTO } from '../assets'

function IconMusic() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2">
      <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 3v4" strokeLinecap="round" />
      <path d="M21 5h-4" strokeLinecap="round" />
    </svg>
  )
}

function IconGlass() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2">
      <path d="M8 22h8" strokeLinecap="round" />
      <path d="M7 10h10" strokeLinecap="round" />
      <path d="M12 10v12" strokeLinecap="round" />
      <path d="M12 2C8.5 2 7 4 7 6c0 2.5 2 3.5 5 4.5 3-1 5-2 5-4.5 0-2-1.5-4-5-4z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const blocks = [
  {
    Icon: IconMusic,
    title: 'Artistes locaux & invités',
    text: 'Une scène ouverte aux talents réunionnais et aux artistes de passage',
  },
  {
    Icon: IconMoon,
    title: 'Terrasse sous les étoiles',
    text: "Sur la rue piétonne de l'Hermitage, à deux pas de la plage et du lagon",
  },
  {
    Icon: IconGlass,
    title: 'Bar & cocktails',
    text: 'Cocktails maison, vins soigneusement sélectionnés, bières fraîches et softs',
  },
]

export function Concerts() {
  return (
    <section id="concerts" className="concert-section" style={{ display: 'flex', height: 'calc(100vh - 72px)' }}>
      <div
        className="concert-photo"
        style={{
          flex: '2 1 40%',
          backgroundImage: `url("${CONCERT_SECTION_PHOTO}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
        }}
      />
      <div
        className="concert-content"
        style={{
          flex: '3 1 60%',
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          padding: '6rem 5rem',
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
              color: 'rgba(255,255,255,0.4)',
              margin: '0 0 1.2rem',
            }}
          >
            Chaque samedi soir
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.15,
              margin: '0 0 1.8rem',
            }}
          >
            La musique
            <br />
            <em>entre en scène</em>
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.125rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.9,
              margin: '0 0 2.5rem',
            }}
          >
            Chaque samedi soir, le Métis Café se transforme en scène de concert. Artistes locaux, musiques du
            monde, jazz, pop française — des soirées uniques dans un cadre tropical incomparable.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {blocks.map(({ Icon, title, text }) => (
              <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ marginTop: '0.2rem', flexShrink: 0 }}>
                  <Icon />
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.125rem',
                      fontWeight: 400,
                      color: '#fff',
                      margin: '0 0 0.25rem',
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1.125rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
