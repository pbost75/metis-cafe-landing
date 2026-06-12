import { CONCERT_SECTION_PHOTO } from '../assets'
import { Reveal, RevealGroup } from './Reveal'

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
    <section id="concerts" className="concert-section">
      <Reveal variant="left" image className="concert-photo">
        <div
          className="concert-photo__frame"
          style={{ backgroundImage: `url("${CONCERT_SECTION_PHOTO}")` }}
          role="img"
          aria-label="Scène de concert au Métis Café"
        />
      </Reveal>

      <div className="concert-content">
        <RevealGroup>
          <div className="concert-content__inner">
            <Reveal>
              <p className="concert-content__eyebrow">Chaque samedi soir</p>
              <h2 className="concert-content__title">
                La musique
                <br />
                <em>entre en scène</em>
              </h2>
              <p className="concert-content__lede">
                Chaque samedi soir, le Métis Café se transforme en scène de concert. Artistes locaux, musiques du
                monde, jazz, pop française — des soirées uniques dans un cadre tropical incomparable.
              </p>
            </Reveal>
            <div className="concert-features">
              {blocks.map(({ Icon, title, text }) => (
                <Reveal key={title}>
                  <div className="concert-feature">
                    <span className="concert-feature__icon" aria-hidden>
                      <Icon />
                    </span>
                    <div>
                      <p className="concert-feature__title">{title}</p>
                      <p className="concert-feature__text">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
