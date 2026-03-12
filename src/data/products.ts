export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: number;
  woo_id: number;
  name: string;
  slug: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  originalUrl: string;
  stock: number; // 0 = нет в наличии, real from site
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  category: string;
  lens: string; // color of lenses
  frame: string;
  tags: string[];
  images: string[];
  features: string[];
  specs: { label: string; value: string }[];
  bestseller: boolean;
  newArrival: boolean;
  outOfStock: boolean;
}

export const products: Product[] = [
  // ── SIBERIA BLUE ─────────────────────────────────────────────────────────────
  {
    id: 1,
    woo_id: 63,
    name: "SIBERIA BLUE",
    slug: "siberia-blue",
    tagline: "Голубые зеркальные линзы. Классика квадрата.",
    price: 2990,
    priceFormatted: "2 990 ₽",
    originalUrl: "https://volksunglasses.com/siberia-blue/",
    stock: 5,
    rating: 4.8,
    reviewCount: 6,
    description:
      "Очки с голубыми линзами, которые подходят всем! Сверхлёгкие солнцезащитные очки с удобной посадкой позволяют активно заниматься спортом, снимая напряжение и защищая ваши глаза от ультрафиолета. Поляризационное покрытие с антибликовой технологией подходит для вождения автомобиля. Квадратная форма оправы подойдет очень многим, а зеркальные линзы добавят стиля и выделят вас из толпы!",
    shortDescription: "Поляризационные зеркальные голубые линзы. TAC Polarized UV400. Квадратная форма.",
    category: "Siberia",
    lens: "голубые зеркальные",
    frame: "чёрная матовая",
    tags: ["поляризация", "зеркало", "квадрат", "вождение"],
    images: [
      "https://volksunglasses.com/wp-content/uploads/2023/08/Siberia-Blue-Green-Face.jpg",
      "https://volksunglasses.com/wp-content/uploads/2023/08/Siberia-Green-S.jpg",
    ],
    features: [
      "Поляризационные линзы TAC Polarized",
      "Степень защиты UV400",
      "Зеркальные линзы: голубые",
      "Дужки: чёрные матовые",
      "Комплект: очки + чехол из микрофибры",
      "Бесплатная доставка",
    ],
    specs: [
      { label: "Линзы", value: "TAC Polarized (голубые)" },
      { label: "Защита", value: "UV400" },
      { label: "Оправа", value: "Чёрная матовая" },
      { label: "Ширина", value: "14 cm" },
      { label: "Высота", value: "4.8 cm" },
      { label: "Дужки", value: "13.6 cm" },
    ],
    bestseller: true,
    newArrival: false,
    outOfStock: false,
  },

  // ── TAIGA FOREST ─────────────────────────────────────────────────────────────
  {
    id: 2,
    woo_id: 0, // out of stock, no cart ID shown
    name: "TAIGA FOREST",
    slug: "taiga-forest",
    tagline: "Градиентная чёрно-зелёная оправа. Легенда коллекции.",
    price: 2350,
    priceFormatted: "2 350 ₽",
    originalUrl: "https://volksunglasses.com/taiga-forest/",
    stock: 0,
    rating: 4.9,
    reviewCount: 9,
    description:
      "Поляризационные очки на каждый день! Классическая форма и неповторимый дизайн очков в сверхлёгкой оправе подойдут как для занятий спортом, так и для повседневного пользования. Одни из самых стильных очков в нашей коллекции! Любимая многими квадратная форма дополнена необычной градиентной чёрно-зеленой оправой.",
    shortDescription: "Квадратная форма. Зеркальные сине-зелёные линзы. Градиентная оправа.",
    category: "Taiga",
    lens: "сине-зелёные зеркальные",
    frame: "градиент чёрно-зелёная",
    tags: ["поляризация", "спорт", "повседневные", "форест"],
    images: [
      "https://volksunglasses.com/wp-content/uploads/2025/01/Polyarizatcionnie-ochki-taiga-forest-2.jpg",
      "https://volksunglasses.com/wp-content/uploads/2023/08/Polyarizatcionnie-ochki-taiga-forest.jpg",
    ],
    features: [
      "Поляризационные линзы TAC Polarized",
      "Степень защиты UV400",
      "Зеркальные линзы: сине-зелёные",
      "Дужки: чёрные",
      "Комплект: очки + чехол из микрофибры",
    ],
    specs: [
      { label: "Линзы", value: "TAC Polarized (сине-зелёные)" },
      { label: "Защита", value: "UV400" },
      { label: "Оправа", value: "Градиент чёрно-зелёная" },
      { label: "Ширина", value: "14 cm" },
      { label: "Высота", value: "4.8 cm" },
      { label: "Дужки", value: "13.6 cm" },
    ],
    bestseller: false,
    newArrival: false,
    outOfStock: true,
  },

  // ── TAIGA CLASSIC ────────────────────────────────────────────────────────────
  {
    id: 3,
    woo_id: 724,
    name: "TAIGA CLASSIC",
    slug: "taiga-classic",
    tagline: "Чёрные линзы. Вечная классика.",
    price: 2350,
    priceFormatted: "2 350 ₽",
    originalUrl: "https://volksunglasses.com/taiga-classic/",
    stock: 8,
    rating: 4.7,
    reviewCount: 5,
    description:
      "Чёрные солнцезащитные очки – классика, актуальная на все времена и случаи! Поляризационное покрытие с антибликовой технологией идеально для вождения автомобиля, активного спорта или прогулок по городу. Классические чёрные квадратные очки – одна из таких вещей, которая должна быть у каждого.",
    shortDescription: "Классические чёрные квадратные очки. Поляризация. Для города и спорта.",
    category: "Taiga",
    lens: "чёрные",
    frame: "чёрная",
    tags: ["классика", "чёрные", "вождение", "спорт"],
    images: [
      "https://volksunglasses.com/wp-content/uploads/2025/01/Chernye-solncezashitnye-ochki.jpg",
      "https://volksunglasses.com/wp-content/uploads/2023/08/Chernye-solncezashitnye-ochki-side.jpg",
    ],
    features: [
      "Поляризационные линзы TAC Polarized",
      "Степень защиты UV400",
      "Линзы: чёрные",
      "Дужки: чёрные",
      "Комплект: очки + чехол из микрофибры",
      "Бесплатная доставка",
    ],
    specs: [
      { label: "Линзы", value: "TAC Polarized (чёрные)" },
      { label: "Защита", value: "UV400" },
      { label: "Оправа", value: "Чёрная" },
      { label: "Ширина", value: "14 cm" },
      { label: "Высота", value: "4.8 cm" },
      { label: "Дужки", value: "13.6 cm" },
    ],
    bestseller: true,
    newArrival: false,
    outOfStock: false,
  },

  // ── TAIGA SKY ────────────────────────────────────────────────────────────────
  {
    id: 4,
    woo_id: 1225,
    name: "TAIGA SKY",
    slug: "taiga-sky",
    tagline: "Прозрачная оправа. Зеркальные сине-зелёные линзы.",
    price: 2350,
    priceFormatted: "2 350 ₽",
    originalUrl: "https://volksunglasses.com/taiga-sky/",
    stock: 2,
    rating: 4.8,
    reviewCount: 2,
    description:
      "Солнцезащитные очки с зеркальными линзами стильного дизайна для тех, кто любит жить активно! Классическая форма, которая подойдет всем, дополнена поляризационными сине-зелеными линзами, что придает очкам неповторимый стиль. Носите в городе, на пляже или возьмите с собой в горы!",
    shortDescription: "Прозрачная оправа. Зеркальные сине-зелёные линзы. Унисекс.",
    category: "Taiga",
    lens: "сине-зелёные зеркальные",
    frame: "прозрачная",
    tags: ["зеркало", "прозрачная", "пляж", "горы"],
    images: [
      "https://volksunglasses.com/wp-content/uploads/2025/01/Ochki-zerkalnie-sky.jpg",
      "https://volksunglasses.com/wp-content/uploads/2023/08/Ochki-prozrachnye.jpg",
    ],
    features: [
      "Поляризационные линзы TAC Polarized",
      "Степень защиты UV400",
      "Зеркальные линзы: сине-зелёные",
      "Дужки: прозрачные",
      "Комплект: очки + чехол из микрофибры",
      "Бесплатная доставка",
    ],
    specs: [
      { label: "Линзы", value: "TAC Polarized (сине-зелёные)" },
      { label: "Защита", value: "UV400" },
      { label: "Оправа", value: "Прозрачная" },
      { label: "Ширина", value: "14 cm" },
      { label: "Высота", value: "4.8 cm" },
      { label: "Дужки", value: "13.6 cm" },
    ],
    bestseller: false,
    newArrival: false,
    outOfStock: false,
  },

  // ── SIBERIA GREEN/BLUE ───────────────────────────────────────────────────────
  {
    id: 5,
    woo_id: 1143,
    name: "SIBERIA GREEN",
    slug: "siberia-green-blue",
    tagline: "Зелёная поляризация. Стиль без компромиссов.",
    price: 2990,
    priceFormatted: "2 990 ₽",
    originalUrl: "https://volksunglasses.com/siberia-green-blue/",
    stock: 6,
    rating: 4.7,
    reviewCount: 2,
    description:
      "Зелёные очки с поляризованными линзами добавят вам неповторимый стиль! Если никак не решиться, какой цвет подходит больше, тогда стоит выбрать именно эти очки с зеркальными сине-зелеными линзами. Отличное изображение, защита глаз и идеальная посадка подойдет практически каждому.",
    shortDescription: "Зеркальные сине-зелёные линзы. Сверхлёгкая квадратная оправа.",
    category: "Siberia",
    lens: "сине-зелёные зеркальные",
    frame: "чёрная матовая",
    tags: ["зелёные", "поляризация", "квадрат", "вождение"],
    images: [
      "https://volksunglasses.com/wp-content/uploads/2023/08/Siberia-Blue-Green-Face.jpg",
      "https://volksunglasses.com/wp-content/uploads/2023/08/Siberia-Green-S.jpg",
    ],
    features: [
      "Поляризационные линзы TAC Polarized",
      "Степень защиты UV400",
      "Зеркальные линзы: сине-зелёные",
      "Дужки: чёрные матовые",
      "Комплект: очки + чехол из микрофибры",
      "Бесплатная доставка",
    ],
    specs: [
      { label: "Линзы", value: "TAC Polarized (сине-зелёные)" },
      { label: "Защита", value: "UV400" },
      { label: "Оправа", value: "Чёрная матовая" },
      { label: "Ширина", value: "14 cm" },
      { label: "Высота", value: "4.8 cm" },
      { label: "Дужки", value: "13.6 cm" },
    ],
    bestseller: false,
    newArrival: false,
    outOfStock: false,
  },

  // ── SIBERIA ROSE ─────────────────────────────────────────────────────────────
  {
    id: 6,
    woo_id: 1193,
    name: "SIBERIA ROSE",
    slug: "siberia-rose",
    tagline: "Розово-золотые линзы. Стиль, который запоминается.",
    price: 2990,
    priceFormatted: "2 990 ₽",
    originalUrl: "https://volksunglasses.com/siberia-rose/",
    stock: 4,
    rating: 4.8,
    reviewCount: 5,
    description:
      "Стильные, яркие очки с поляризацией для тех, кто любит выделяться из толпы! Оригинальная форма, стильный дизайн розово-золотистых линз и отличное качество изображения – то, что нужно в солнечную погоду. Антибликовая технология линз делает комфортным вождение автомобиля, а также времяпровождения на воде и занятия спортом.",
    shortDescription: "Розово-золотистые зеркальные линзы. Антибликовая технология. Гламур и спорт.",
    category: "Siberia",
    lens: "розово-золотистые зеркальные",
    frame: "чёрная матовая",
    tags: ["розовые", "золото", "гламур", "вождение"],
    images: [
      "https://volksunglasses.com/wp-content/uploads/2023/08/Siberia-Rose-front.jpg",
      "https://volksunglasses.com/wp-content/uploads/2023/08/Siberia-Rose-S.jpg",
    ],
    features: [
      "Поляризационные линзы TAC Polarized",
      "Степень защиты UV400",
      "Зеркальные линзы: розово-золотистые",
      "Дужки: чёрные матовые",
      "Комплект: очки + чехол из микрофибры",
      "Бесплатная доставка",
    ],
    specs: [
      { label: "Линзы", value: "TAC Polarized (розово-золотые)" },
      { label: "Защита", value: "UV400" },
      { label: "Оправа", value: "Чёрная матовая" },
      { label: "Ширина", value: "14 cm" },
      { label: "Высота", value: "4.8 cm" },
      { label: "Дужки", value: "13.6 cm" },
    ],
    bestseller: false,
    newArrival: false,
    outOfStock: false,
  },

  // ── TAIGA FLAME ─────────────────────────────────────────────────────────────
  {
    id: 7,
    woo_id: 0,
    name: "TAIGA FLAME",
    slug: "taiga-flame",
    tagline: "Жёлтые линзы. Максимальный контраст.",
    price: 2790,
    priceFormatted: "2 790 ₽",
    originalUrl: "https://volksunglasses.com/taiga-flame/",
    stock: 0,
    rating: 4.6,
    reviewCount: 1,
    description:
      "Солнцезащитные очки с жёлтыми линзами TAIGA FLAME — это крутые очки в матовой оправе, которые просто нужны для активного отдыха. Они идеально подходят для любителей водных видов спорта и для тех, кто проводит много времени на солнце. Желтые линзы помогут избавиться от бликов и увеличат контрастность и чёткость изображения.",
    shortDescription: "Жёлто-оранжевые линзы. Контрастность и чёткость. Для активного отдыха.",
    category: "Taiga",
    lens: "жёлто-оранжевые зеркальные",
    frame: "чёрная матовая",
    tags: ["жёлтые", "активный отдых", "вода", "контраст"],
    images: [
      "https://volksunglasses.com/wp-content/uploads/2025/01/Polyarizatsionnye-ochki-taiga-flame-flont.jpg",
      "https://volksunglasses.com/wp-content/uploads/2023/08/Polyarizatsionnye-ochki-taiga-flame.jpg",
    ],
    features: [
      "Поляризационные линзы TAC Polarized",
      "Степень защиты UV400",
      "Зеркальные линзы: жёлто-оранжевые",
      "Оправа: чёрная матовая",
      "Комплект: очки + чехол из микрофибры",
    ],
    specs: [
      { label: "Линзы", value: "TAC Polarized (жёлто-оранжевые)" },
      { label: "Защита", value: "UV400" },
      { label: "Оправа", value: "Чёрная матовая" },
      { label: "Ширина", value: "14 cm" },
      { label: "Высота", value: "4.8 cm" },
      { label: "Дужки", value: "13.6 cm" },
    ],
    bestseller: false,
    newArrival: false,
    outOfStock: true,
  },

  // ── HERMITAGE BLACK ──────────────────────────────────────────────────────────
  {
    id: 8,
    woo_id: 0,
    name: "HERMITAGE BLACK",
    slug: "hermitage-black",
    tagline: "Круглые. Матовые. Знаковые.",
    price: 3190,
    priceFormatted: "3 190 ₽",
    originalUrl: "https://volksunglasses.com/hermitage-black/",
    stock: 3,
    rating: 4.9,
    reviewCount: 5,
    description:
      "Круглые солнцезащитные очки Hermitage Black с чёрной матовой оправой и поляризационными линзами – это не просто аксессуар, а настоящий маст-хэв для всех, кто ценит стиль и высокое качество. Линзы с антибликовой технологией отлично подойдут для вождения автомобиля, а также повседневной носки как в городской среде, так и для активного отдыха.",
    shortDescription: "Круглые чёрные матовые очки. Поляризация. Для города и вождения.",
    category: "Hermitage",
    lens: "чёрные",
    frame: "чёрная матовая",
    tags: ["круглые", "чёрные", "город", "вождение"],
    images: [
      "https://volksunglasses.com/wp-content/uploads/2023/08/Kruglye-ochki.jpg",
      "https://volksunglasses.com/wp-content/uploads/2023/08/Kruglye-ochki-side.jpg",
    ],
    features: [
      "Поляризационные линзы TAC Polarized",
      "Степень защиты UV400",
      "Линзы: чёрные",
      "Оправа: чёрная матовая",
      "Круглая форма",
      "Комплект: очки + чехол из микрофибры",
      "Бесплатная доставка",
    ],
    specs: [
      { label: "Линзы", value: "TAC Polarized (чёрные)" },
      { label: "Защита", value: "UV400" },
      { label: "Оправа", value: "Чёрная матовая" },
      { label: "Форма", value: "Круглая" },
      { label: "Ширина", value: "14 cm" },
      { label: "Высота", value: "5 cm" },
      { label: "Дужки", value: "14 cm" },
    ],
    bestseller: true,
    newArrival: false,
    outOfStock: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller && !p.outOfStock);
}

export function getInStock(): Product[] {
  return products.filter((p) => !p.outOfStock);
}

export function getLowStock(): Product[] {
  return products.filter((p) => p.stock > 0 && p.stock < 3);
}
