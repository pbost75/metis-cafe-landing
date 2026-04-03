/** Image de fond du hero : fichier dans public/hero/ */
export const HERO_BACKGROUND = '/hero/imgi_17_cc9239c91_photo-bg-metis-cafe.png'

/** Photo « Notre histoire » (colonne droite) : fichier dans public/restaurant/ */
export const RESTAURANT_SECTION_PHOTO =
  '/restaurant/8ae40341a_imgi_24_576077827_17939735445098110_2227828586274030905_n.jpg'

/** Photo piano / section « Concerts » (colonne gauche) : fichier dans public/concerts/ */
export const CONCERT_SECTION_PHOTO =
  '/concerts/1f4b8caad_483847581_10234814764727519_3288959598630268062_n.jpg'

/**
 * Mosaïque « Vivre le Métis » : fichiers dans public/mosaic/
 * (copie de le-metis-cafe/assets/mosaic — ordre = chef, convivialité, terrasse, client).
 */
export const MOSAIC_STRIP: { src: string; alt: string }[] = [
  { src: '/mosaic/5128aa07d_DSCF4780-0.png', alt: 'Le chef en cuisine au Métis Café' },
  {
    src: '/mosaic/bd87de8e4_imgi_14_626277925_17948089029098110_7489075530071709773_n.jpg',
    alt: 'Un toast entre amis au Métis Café',
  },
  {
    src: '/mosaic/ac2584eec_imgi_16_623082418_17946166803098110_4861452393377731094_n.jpg',
    alt: 'Ambiance terrasse au Métis Café',
  },
  {
    src: '/mosaic/eaf3639e0_imgi_21_607843625_17942173047098110_699373008298058242_n.jpg',
    alt: 'Repas en terrasse au Métis Café',
  },
]

/**
 * Carrousel « La cuisine » : images locales dans public/slider/
 * (copie de le-metis-cafe/assets/slider — ajoute ou remplace les fichiers puis ajuste cette liste si besoin).
 */
export const CUISINE_SLIDES: { src: string; alt: string }[] = [
  { src: '/slider/06d9a202c_DSCF4840-8.png', alt: 'Dessert et pâtisserie au Métis Café' },
  { src: '/slider/0ea4a009e_DSCF4905-2.png', alt: 'Plat et dressage au Métis Café' },
  { src: '/slider/02b6d9d61_imgi_30_576599694_17936714103098110_7719843453968648961_n.jpg', alt: 'Ambiance au Métis Café' },
  { src: '/slider/39d49b29a_imgi_19_611252034_17943249816098110_1870459204352139755_n.jpg', alt: 'Moment au restaurant Métis Café' },
  { src: '/slider/dc2392906_imgi_25_587290984_18075533210586352_5234415506079340404_n.jpg', alt: 'Métis Café — brasserie à l’Ermitage' },
]

/** Carte Google Maps (lien classique « output=embed », sans clé API) */
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=2+Mail+de+Rodrigues,+L'Ermitage-les-Bains,+97434+Saint-Paul,+La+R%C3%A9union&hl=fr&z=16&ie=UTF8&iwloc=&output=embed"

export const TEL_HREF = 'tel:+262692862486'
