/**
 * Avis Google en statique : pas de widget tiers (Trustindex a expiré) ni de
 * Places API (payante au-delà de 1 000 appels, cache interdit).
 *
 * Source : fiche Google Maps du Métis Café, avis triés par date, relevés le
 * 16/09/2026. Sélection des avis 5 étoiles avec un texte. Les `isoDate` sont
 * dérivées des libellés relatifs de Google (« il y a une semaine ») pour que
 * `formatRelativeReviewDate` reste juste au fil des jours.
 *
 * Mise à jour : relever de nouveaux avis sur la fiche, remplacer les entrées,
 * ajuster GOOGLE_BUSINESS_SUMMARY.
 */

export type GoogleReview = {
  id: string
  name: string
  isoDate: string
  rating: number
  /** Photo de profil Google (vide = initiales sur fond de couleur). */
  avatarUrl: string
  /** Couleur de fond des initiales si l'avatar manque ou ne charge pas. */
  avatarColor: string
  /** Photos jointes à l'avis (0, 1 ou plusieurs). */
  imageUrls: string[]
  text: string
}

/** Fiche Google Maps du Métis Café (identifiant CID stable). */
export const GOOGLE_PLACE_URL = 'https://www.google.com/maps?cid=11646352572012739069'

export const GOOGLE_BUSINESS_SUMMARY = {
  averageRating: 4.4,
  reviewCount: 520,
}

export function formatRelativeReviewDate(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00`)
  const diffDays = Math.floor((Date.now() - d.getTime()) / 86400000)
  if (diffDays <= 0) return "aujourd'hui"
  if (diffDays === 1) return 'hier'
  if (diffDays < 7) return `il y a ${diffDays} jours`
  if (diffDays < 14) return 'il y a une semaine'
  if (diffDays < 30) return `il y a ${Math.floor(diffDays / 7)} semaines`
  const months = Math.floor(diffDays / 30)
  if (months < 12) return `il y a ${months} mois`
  const years = Math.floor(diffDays / 365)
  return years <= 1 ? "il y a plus d'un an" : `il y a ${years} ans`
}

/** Taille d'image Google ajustée (suffixe `=w…-h…` des URL lh3). */
export function googleImageUrl(url: string, size: string): string {
  return url.replace(/=[^=/]*$/, `=${size}`)
}

export const STATIC_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'robinson-trusson',
    name: 'Robinson TRUSSON',
    isoDate: '2026-09-10',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocKifTf6rQxrD0TOsRayt5On6NOw0bezCyYhv3zhqlkUqJDxZQ=w72-h72-p-rp-mo-br100',
    avatarColor: '#2f5d50',
    imageUrls: [],
    text: 'Quelle merveilleuse découverte!\nUne joue de veau à tomber par terre, une échine de porc délicieuse et des desserts particulièrement gourmands!\nEncore merci à Raphaël et à sa collègue pour le service aux petits oignons.\nNous reviendrons clairement!',
  },
  {
    id: 'benjamin-smart',
    name: 'Benjamin Smart',
    isoDate: '2026-09-09',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocJfX0KklHVPQoZQqIojjcljOsBqDE3snykOj1C_ohYcJ_m8WQ=w72-h72-p-rp-mo-br100',
    avatarColor: '#5b4a8a',
    imageUrls: [
      'https://lh3.googleusercontent.com/grass-cs/ACvplmMsej0kfmvF-hEn-OhTmFlckJ9tmPxUx2du99Yr_Qlm8w2wjEF6zze8NxZbm9zLoz_3w1yIS0s0i04OXiP9heXXZu22ApAMMK_cHKKGuDaGP220NykCTKwq9O5FgT4-EMlSxEJXZ10FDdQ=w1200-h900-p-k-no',
    ],
    text: "Le meilleur repas de notre séjour à La Réunion. Un cadre magnifique, une cuisine incroyable à des prix raisonnables, et un service impeccable assuré par une serveuse de premier ordre. J'ai pris la Dourade (sashimi de dorade). Mon ami a choisi le Bœuf (rumsteck de picanya). Les deux étaient excellents. Je recommande vivement.",
  },
  {
    id: 'julie-bataille',
    name: 'Julie Bataille',
    isoDate: '2026-09-10',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjXL11ZM7T1cQ9pWVqNKnc0hS1iBdnR_f4IhdHNKNqs1kts6sJEZ=w72-h72-p-rp-mo-br100',
    avatarColor: '#9a4d3a',
    imageUrls: [],
    text: 'Carte originale. Service très agréable.\nJ’ai pris le plat du jour qui était succulent mais je conseille très fort la joue de veau façon bourguignonne et le riz au lait.\n\nLa suggestion de vin coïncidait parfaitement avec ce que nous avons pris à manger !',
  },
  {
    id: 'krystaal-vynckier',
    name: 'Krystaal Vynckier',
    isoDate: '2026-09-09',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocIZO99E4oyjWButWDfGPfdlk-hVskmmHnWY5_tDxbC91Xt2WQ=w72-h72-p-rp-mo-ba12-br100',
    avatarColor: '#3a6a8f',
    imageUrls: [
      'https://lh3.googleusercontent.com/grass-cs/ACvplmNWUAXjmUZP-solNoAKHt3DbeyOz45RdkpPxG2nrTWRWsqnqahGH1apavWF0X16-EpDLr7vaxeqfeCOPyTNDYBjp4MVSCKxfzcatp2nnShQN6rSwbCQKYijSrlxo2mRbcw_4f9w1GFBFx-U=w1200-h900-p-k-no',
    ],
    text: 'On est venus à 6 pour nos vacances belles découverte !!! Délicieux, on s’est régalés un sans faute jusqu’au cocktail 😍',
  },
  {
    id: 'sasha-cornet',
    name: 'Sasha Cornet',
    isoDate: '2026-09-02',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocLjOlV7jOkw0vcOZ9rT0jICGTqqCP7VGkgPn6TK_Vq_h7MWdg=w72-h72-p-rp-mo-br100',
    avatarColor: '#8a6a2f',
    imageUrls: [],
    text: 'Enfin une cohésion d’équipe , un service où la considération est au rdv . Des plats délicieux , du vrai fait maison . Un cadre agréable et soigné .Et une pluie d’attentions . À dimanche prochain',
  },
  {
    id: 'enn-dra',
    name: 'Enn Dra',
    isoDate: '2026-09-09',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocIJwBt96_w6omJvkxeX7ieR9hzZAzaWCZGbSjQa0hv92YRkQQ=w72-h72-p-rp-mo-ba12-br100',
    avatarColor: '#4a7a3a',
    imageUrls: [
      'https://lh3.googleusercontent.com/grass-cs/ACvplmOVJSwHgrE7ddd-bcZFi3anfQgT88mPMRGrLbfAPzwdngA2o2q-Im29_S4126Ey50GpeOlbY-ECnmDCI6F1snHFWnG6-XmCdFBKlOo75K190RP8IVxgJ207rE7qJOctNzEUL46a800g4ePQ=w1200-h900-p-k-no',
    ],
    text: 'Très bien situé. Excellente cuisine à bon prix. Service impeccable.',
  },
  {
    id: 'bregeault-brice',
    name: 'Bregeault Brice',
    isoDate: '2026-09-02',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjVOJse6IdNROPs_-qSSOi2mJLQcmQc1HrBVNfj4FZP-xQoqao5j=w72-h72-p-rp-mo-br100',
    avatarColor: '#6a3a5f',
    imageUrls: [],
    text: 'Super lieu, bel endroit, bel ambiance, un petit bistrot, sophistiqué en bouche mais simple dans les prix et l’accueil, tout ce qu’on aime sur une belle esplanade à l’Hermitage\net l’accueil au top',
  },
  {
    id: 'hugo-ferroux',
    name: 'Hugo Ferroux',
    isoDate: '2026-09-14',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocJi4Sv9_rC6dviRzRa1vPvWedytgMXrjeVKCcLqN0ykMRs8pQ=w72-h72-p-rp-mo-br100',
    avatarColor: '#2f4f6f',
    imageUrls: [],
    text: 'Très belle découverte, avec des qualités tant au niveau de la cuisine que du service\nJe recommande',
  },
  {
    id: 'joelle-gauthier',
    name: 'Joelle Gauthier',
    isoDate: '2026-09-02',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjWv0Lw8uDTcR8z8QglsRzU1FJbDhihKe4Yd5syZDbHTI-V7eXw=w72-h72-p-rp-mo-br100',
    avatarColor: '#7a3a3a',
    imageUrls: [],
    text: 'Très chouette\nService impeccable\nCuisine constante et délicieuse',
  },
  {
    id: 'gilles-bossmann',
    name: 'Gilles Bossmann',
    isoDate: '2026-09-02',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjUNrGInHm3__DjkGHWHGmcrDdDAGNZ1mcTeWuOjIasYrVE7pxtF=w72-h72-p-rp-mo-ba12-br100',
    avatarColor: '#3a5f5f',
    imageUrls: [],
    text: 'Très bonne cuisine et accueil très sympathique. Je recommande cette endroit pour un moment agréable.',
  },
  {
    id: 'daniela-dorr',
    name: 'Daniela Dörr',
    isoDate: '2026-09-02',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocLL_-zzIYwsQWCA-8uphvIFpET71nSMFwXnbtWJfQxFWe7jUA=w72-h72-p-rp-mo-ba12-br100',
    avatarColor: '#5f5f3a',
    imageUrls: [],
    text: 'Nourriture et ambiance exceptionnelles… excellents vins… à essayer absolument ! 👌',
  },
  {
    id: 'bea-nourry',
    name: 'Béa Nourry',
    isoDate: '2026-09-12',
    rating: 5,
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocLJqLbo_dDfarBXTIr10UDgv76m9LTklZX-hFJTA6OwjuI7bA=w72-h72-p-rp-mo-ba12-br100',
    avatarColor: '#4f3a6f',
    imageUrls: [],
    text: 'Endroit chaleureux avec une excellente cuisine. Nous recommandons à 100 %.',
  },
]
