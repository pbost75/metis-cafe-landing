export type MenuItem = {
  name: string
  description: string
  price: string
}

export const MENU_TABS = [
  { id: 'tapas', label: 'Tapas' },
  { id: 'salades', label: 'Salades' },
  { id: 'burgers', label: 'Burgers & Tartares' },
  { id: 'poissons', label: 'Poissons & Viandes' },
  { id: 'desserts', label: 'Desserts' },
] as const

export type MenuTabId = (typeof MENU_TABS)[number]['id']

/** Carte complète reprise des exports HTML Base44 */
export const MENU_BY_TAB: Record<MenuTabId, MenuItem[]> = {
  tapas: [
    { name: 'Accras', description: 'Thon et Morue – 5 pièces (fait maison)', price: '9€' },
    { name: 'Rillettes de Thon', description: 'Aux herbes et épices', price: '9€' },
    {
      name: 'Assiette Créole',
      description: '3 samoussas, 3 bonbons piment, 3 tempuras de crevette',
      price: '12€',
    },
    {
      name: 'Gyozas Végétariens',
      description: 'Sauce sweet chili, cacahuètes et menthe – 5 pièces',
      price: '9€',
    },
    {
      name: 'Tataki de Thon',
      description: 'Sauce cream cheese wasabi-citron, coleslaw thaï',
      price: '15€',
    },
    {
      name: 'Tigre Qui Pleure',
      description:
        'Émincé de bœuf Black Angus, poivrons marinés, coriandre, cacahuètes, citron vert, vermicelles frites',
      price: '15€',
    },
    {
      name: 'Sélection de Charcuteries',
      description: 'Sélection de la semaine, présentée à la voix',
      price: '14€',
    },
    {
      name: 'Sélection de Fromages',
      description: '100g de fromage de chez "Enfin Le Fromager"',
      price: '14€',
    },
    {
      name: 'Assiette de Frites Fraîches',
      description: 'Supplément cheddar +1€',
      price: '4€',
    },
  ],
  salades: [
    {
      name: 'Salade César',
      description: 'Poulet crispy, copeaux de parmesan, œuf, croutons, sauce César, guancale',
      price: '19€',
    },
    {
      name: 'Salade Takamaka',
      description: 'Salade verte, toasts chèvre miel, tomates cerises et lardons (option VG)',
      price: '19€',
    },
    {
      name: 'Salade du Tigre',
      description:
        'Émincé de bœuf Black Angus, salade, carottes, chou, poivrons, cacahuètes, sauce tigre',
      price: '19€',
    },
    {
      name: 'Gaspacho & Burrata',
      description:
        'Tomates et pastèque, burrata crémeuse, pomme, concombre, croutons, pesto, pickles d\'oignons (VG – option vegan)',
      price: '19€',
    },
    {
      name: 'Courgette Farcie',
      description:
        'Coulis de tomate maison, quinoa façon granola, noisettes torréfiées, parmesan (VG – option vegan)',
      price: '20€',
    },
  ],
  burgers: [
    {
      name: 'Burger du Métis – Bœuf',
      description:
        'Steak 150g, tomates, oignons confits, sauce tartare, cheddar. Servi avec frites fraîches et salade',
      price: '20€',
    },
    {
      name: 'Burger du Métis – Poulet',
      description:
        'Tomates, oignons confits, sauce tartare, cheddar. Servi avec frites fraîches et salade',
      price: '20€',
    },
    {
      name: 'Burger Pulled Pork',
      description:
        'Échine de porc cuite à basse température, oignons confits, sauce barbecue, tomates, cornichons',
      price: '20€',
    },
    {
      name: 'Tartare de Thon Thaï',
      description:
        'Thon, sauce soja, oignons verts, gingembre, cacahuètes, citron vert. Servi avec frites et salade',
      price: '23€',
    },
    {
      name: 'Tartare de Thon Italien',
      description: 'Thon, pesto maison, parmesan, dés de tomates, oignons et oignons verts',
      price: '23€',
    },
    {
      name: 'Tartare de Thon du Jour',
      description: 'Le freestyle du chef ! Présenté à la voix par notre équipe',
      price: '23€',
    },
  ],
  poissons: [
    {
      name: 'Dos de Légine',
      description: 'Riz à la cardamome, légumes confits, vierge d\'agrumes',
      price: '26€',
    },
    {
      name: 'Tataki de Thon',
      description: 'Sauce cream cheese wasabi-citron, coleslaw thaï et frites fraîches',
      price: '24€',
    },
    {
      name: 'Zourite Grillé',
      description: 'Poulpe grillé, purée de patates douces coco, vierge d\'agrumes, petits légumes',
      price: '24€',
    },
    {
      name: 'Poisson du Jour',
      description: 'Garniture du moment, présenté à la voix',
      price: '22€',
    },
    {
      name: 'Magret de Canard',
      description:
        'Magret d\'environ 300g, Pommes Anna, champignons, carottes, sauce au choix',
      price: '26€',
    },
    {
      name: 'Volaille Peï Duchemann',
      description:
        'Ballotine de volaille farcie au comté, crème Dubarry, patates douces rôties, sauce fromagère, pickles d\'oignons',
      price: '24€',
    },
    {
      name: 'Pièce du Boucher',
      description: 'Purée mousseline à la truffe, petits légumes',
      price: 'Prix du moment',
    },
    {
      name: 'Supplément Sauce',
      description: 'Poivre, roquefort, tartare',
      price: '1€',
    },
    {
      name: 'Supplément Garniture',
      description: '',
      price: '3€',
    },
    {
      name: 'Menu Marmaille',
      description:
        'Poulet crispy ou fish & chips – 1 sirop à l\'eau + 1 plat (frites et salade) + 1 boule de glace',
      price: '15€',
    },
  ],
  desserts: [
    {
      name: 'Cheesecake',
      description: 'Coulis mangue et passion, citron',
      price: '8€',
    },
    {
      name: 'Fondant au Chocolat',
      description: 'Cœur coulant caramel et boule de glace vanille',
      price: '9€',
    },
    {
      name: 'Crème Brûlée',
      description: 'À la vanille Bourbon',
      price: '8€',
    },
    {
      name: 'Pavlova',
      description: 'Glace fraise basilic, marmelade de fruits rouges et basilic, chantilly',
      price: '9€',
    },
    {
      name: 'Café ou Thé Gourmand',
      description: 'Assortiment du moment (4 pièces)',
      price: '10€',
    },
    {
      name: 'Affogato',
      description: '1 boule de glace vanille et son espresso',
      price: '6€',
    },
    {
      name: 'Coupe Métis',
      description: '2 boules caramel beurre salé, mini moelleux au chocolat, chantilly vanille maison',
      price: '8€',
    },
    {
      name: 'Coupe Kreol',
      description: '1 boule passion, 1 boule mangue, chantilly vanille maison, dés d\'ananas frais',
      price: '8€',
    },
    {
      name: 'Irish Coffee',
      description: '4 cl de Jameson, café, sirop de vanille, chantilly vanille maison',
      price: '10€',
    },
    {
      name: 'Kreol Coffee',
      description: '4 cl de Rhum, café, sirop de vanille, chantilly vanille maison',
      price: '10€',
    },
    {
      name: 'Colonel',
      description: '2 boules citron, 3 cl de Vodka',
      price: '9€',
    },
    {
      name: 'Coupe Marmaille',
      description: '1 boule vanille, 1 boule fraise, fraises Tagada',
      price: '6€',
    },
    {
      name: 'Boules de Glace',
      description:
        'Vanille · Chocolat · Caramel beurre salé · Fraise · Citron · Mangue · Goyavier · Passion · Coco · Café · Fraise Basilic',
      price: '3 / 5 / 7€',
    },
  ],
}
