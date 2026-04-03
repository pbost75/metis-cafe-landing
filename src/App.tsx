import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Restaurant } from './components/Restaurant'
import { Cuisine } from './components/Cuisine'
import { Experience } from './components/Experience'
import { Menu } from './components/Menu'
import { Concerts } from './components/Concerts'
import { Reviews } from './components/Reviews'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { StickyCall } from './components/StickyCall'

/**
 * Landing Métis Café — reprise fidèle de l’export Base44 (structure, textes, styles inline convertis en JSX).
 * Les images restent sur le bucket Supabase public d’origine.
 */
export default function App() {
  return (
    <main style={{ background: '#fff' }}>
      <Navigation />
      <Hero />
      <Restaurant />
      <Cuisine />
      <Experience />
      <Menu />
      <Concerts />
      <Reviews />
      <Contact />
      <Footer />
      <StickyCall />
    </main>
  )
}
