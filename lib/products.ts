export interface Product {
  id: number
  brand: string
  model: string
  size: string
  price: number
  originalPrice?: number
  image: string
  label?: string
  season: string
}

export const products: Product[] = [
  {
    id: 1,
    brand: "Pirelli",
    model: "Cinturato P7",
    size: "205/55 R16",
    price: 89900,
    originalPrice: 109900,
    image: "/images/hero-tire.jpg",
    label: "Mas vendido",
    season: "Verano",
  },
  {
    id: 2,
    brand: "Michelin",
    model: "Primacy 4+",
    size: "195/65 R15",
    price: 94500,
    image: "/images/hero-tire.jpg",
    season: "Todo terreno",
  },
  {
    id: 3,
    brand: "Bridgestone",
    model: "Turanza T005",
    size: "225/45 R17",
    price: 112000,
    originalPrice: 135000,
    image: "/images/hero-tire.jpg",
    label: "Oferta",
    season: "Verano",
  },
  {
    id: 4,
    brand: "Continental",
    model: "PremiumContact 6",
    size: "205/55 R16",
    price: 105800,
    image: "/images/hero-tire.jpg",
    season: "Todo clima",
  },
  {
    id: 5,
    brand: "Goodyear",
    model: "EfficientGrip",
    size: "185/65 R15",
    price: 72500,
    originalPrice: 85000,
    image: "/images/hero-tire.jpg",
    label: "Oferta",
    season: "Verano",
  },
  {
    id: 6,
    brand: "Firestone",
    model: "Firehawk 900",
    size: "195/55 R15",
    price: 64900,
    image: "/images/hero-tire.jpg",
    season: "Todo terreno",
  },
  {
    id: 7,
    brand: "Yokohama",
    model: "Advan Sport V105",
    size: "235/40 R18",
    price: 148000,
    image: "/images/hero-tire.jpg",
    label: "Premium",
    season: "Verano",
  },
  {
    id: 8,
    brand: "Hankook",
    model: "Ventus Prime 3",
    size: "215/50 R17",
    price: 86300,
    image: "/images/hero-tire.jpg",
    season: "Todo clima",
  },
]
