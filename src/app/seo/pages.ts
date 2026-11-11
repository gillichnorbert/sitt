import { BLOG_POSTS } from '../blog/blog-posts';

export const SEO_PAGES: Record<string, {title: string; description: string; label: string; image: string}> = {
  "": {
    "title": "Sittszállítás és tehertaxi Budapesten | TerraMove",
    "description": "Zsákos sittszállítás, lomtalanítás és tehertaxi rakodással Budapesten és Pest vármegyében. Tájékoztató árak és személyre szabott ajánlat.",
    "label": "Főoldal",
    "image": "/assets/borito.webp"
  },
  "szolgaltatasok": {
    "title": "Sittszállítás, tehertaxi és lomtalanítás | TerraMove",
    "description": "Ismerje meg a TerraMove szolgáltatásait Budapesten és Pest vármegyében: sittszállítás, lomtalanítás és áruszállítás.",
    "label": "Szolgáltatások",
    "image": "/assets/borito.webp"
  },
  "szolgaltatasok/sittszallitas": {
    "title": "Sittszállítás Budapest, Pest megye | TerraMove",
    "description": "Zsákos sittszállítás és lomtalanítás rakodással Budapesten és Pest megyében. Nézze meg az árakat, és kérjen ajánlatot a mennyiség és a helyszín alapján.",
    "label": "Sittszállítás",
    "image": "/assets/sitteszsak.jpg"
  },
  "szolgaltatasok/aruszallitas": {
    "title": "Tehertaxi és áruszállítás Budapesten | TerraMove",
    "description": "Bútorok, raklapos áruk és építőanyagok szállítása rakodással Budapesten és Pest megyében. Egyeztesse az útvonalat, a méreteket és az időpontot.",
    "label": "Áruszállítás",
    "image": "/assets/aruszallitascover.webp"
  },
  "szolgaltatasok/lomtalanitas": {
    "title": "Lomtalanítás Budapest és Pest megye | TerraMove",
    "description": "Lomtalanítás, lakás-, pince- és padláskiürítés rakodással Budapesten és Pest vármegyében. Ingyenes felmérés és fix áras árajánlat.",
    "label": "Lomtalanítás",
    "image": "/assets/lomtalanitas.webp"
  },
  "araink": {
    "title": "Sittszállítás és tehertaxi árak | TerraMove",
    "description": "Sittszállítás és tehertaxi tájékoztató árak. Tudja meg, milyen adatok szükségesek a rakodás, az elszállítás és a kiszállás pontos árajánlatához.",
    "label": "Áraink",
    "image": "/assets/borito.webp"
  },
  "blog": {
    "title": "Sittszállítás és tehertaxi blog | TerraMove",
    "description": "Gyakorlati útmutatók zsákos sittszállításhoz és tehertaxi rendeléséhez: előkészítés, rakodás, csomagolás és a szállításhoz szükséges adatok.",
    "label": "Blog",
    "image": "/assets/borito.webp"
  },
  ...Object.fromEntries(BLOG_POSTS.map(post => ['blog/' + post.slug, {
    title: post.title + ' | TerraMove',
    description: post.description,
    label: post.title,
    image: post.category === 'Sittszállítás' ? '/assets/sitteszsak.jpg' : '/assets/aruszallitascover.webp'
  }])),
  "galeria": {
    "title": "Korábbi munkáink képekben | TerraMove",
    "description": "Nézze meg a TerraMove munkáiról készült képeket, majd ismerje meg szolgáltatásainkat és kérjen ajánlatot saját feladatára.",
    "label": "Galéria",
    "image": "/assets/borito.webp"
  }
};
