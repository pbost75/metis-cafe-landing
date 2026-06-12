import { MOSAIC_STRIP } from '../assets'
import { Reveal, RevealGroup } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="experience-section">
      {/* Zone texte + bande noire vide en dessous (les photos mordent uniquement là) */}
      <div className="experience-intro">
        <div className="experience-intro__grid">
          <div className="experience-intro__title">
            <RevealGroup>
              <Reveal>
                <p className="experience-intro__eyebrow">L&apos;expérience</p>
                <h2 className="experience-intro__heading">Vivre le Métis</h2>
              </Reveal>
            </RevealGroup>
          </div>
          <Reveal>
            <p className="experience-intro__lede">
              Une terrasse à l&apos;ombre des arbres, une cuisine généreuse, et le son d&apos;une guitare le
              samedi soir. Voilà le Métis.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="ambiance-strip">
        {MOSAIC_STRIP.map((item) => (
          <Reveal
            key={item.src}
            variant="from-bottom"
            image
            media
            className="ambiance-strip__cell"
          >
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
