import type { Category } from "@/lib/types";

/** Tiny blur placeholder for Next/Image */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQCEAwEPwAB//9k=";

/** Local assets — always reliable, no CDN failures */
export const LOCAL_IMAGES = {
  batsman: "/images/cricket-batsman-hero.png",
  jersey: "/images/products/jersey.png",
  steelCard: "/images/products/steel-card.png",
  fridgeMagnet: "/images/products/fridge-magnet.png",
  poster: "/images/products/poster.png",
  collectible: "/images/products/collectible.png",
};

/** Primary product photo per category */
export const CATEGORY_PRODUCT_IMAGE: Record<Category, string> = {
  jerseys: LOCAL_IMAGES.jersey,
  "steel-cards": LOCAL_IMAGES.steelCard,
  "fridge-magnets": LOCAL_IMAGES.fridgeMagnet,
  posters: LOCAL_IMAGES.poster,
  collectibles: LOCAL_IMAGES.collectible,
  "signed-merch": LOCAL_IMAGES.collectible,
};

/** Verified Unsplash IDs (fallback / hero backgrounds) */
export const REMOTE_IMAGES = {
  stadium: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&q=80",
  stadiumLights: "https://images.unsplash.com/photo-1593766788306-28561086694e?w=800&q=60",
  cricketAction: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80",
};

export const HERO_IMAGES = {
  ...REMOTE_IMAGES,
  batsman: LOCAL_IMAGES.batsman,
};

export const CATEGORY_IMAGES: Record<
  Category | "collectibles" | "signed-merch",
  { hero: string; card: string; accent: string; tagline: string }
> = {
  jerseys: {
    hero: LOCAL_IMAGES.jersey,
    card: LOCAL_IMAGES.jersey,
    accent: "#00AEEF",
    tagline: "Wear your team's colors",
  },
  "steel-cards": {
    hero: LOCAL_IMAGES.steelCard,
    card: LOCAL_IMAGES.steelCard,
    accent: "#C0C0C0",
    tagline: "Premium collector's items",
  },
  "fridge-magnets": {
    hero: LOCAL_IMAGES.fridgeMagnet,
    card: LOCAL_IMAGES.fridgeMagnet,
    accent: "#FF6B35",
    tagline: "Every fridge tells a story",
  },
  posters: {
    hero: LOCAL_IMAGES.poster,
    card: LOCAL_IMAGES.poster,
    accent: "#A855F7",
    tagline: "Frame the legendary moments",
  },
  collectibles: {
    hero: LOCAL_IMAGES.collectible,
    card: LOCAL_IMAGES.collectible,
    accent: "#FFD700",
    tagline: "Own a piece of history",
  },
  "signed-merch": {
    hero: LOCAL_IMAGES.collectible,
    card: LOCAL_IMAGES.collectible,
    accent: "#FFD700",
    tagline: "Authenticated signatures",
  },
};

export const PRODUCT_IMAGES: Record<Category, string[]> = {
  jerseys: [LOCAL_IMAGES.jersey],
  "steel-cards": [LOCAL_IMAGES.steelCard],
  "fridge-magnets": [LOCAL_IMAGES.fridgeMagnet],
  posters: [LOCAL_IMAGES.poster],
  collectibles: [LOCAL_IMAGES.collectible],
  "signed-merch": [LOCAL_IMAGES.collectible],
};

export function getProductImages(category: Category): string[] {
  const primary = CATEGORY_PRODUCT_IMAGE[category];
  return [primary, primary, primary];
}

export const TEAM_COLORS: Record<string, string> = {
  "virat-kohli": "#1B4FFF",
  "rohit-sharma": "#004C97",
  "ms-dhoni": "#FDB913",
  "jasprit-bumrah": "#004C97",
  "hardik-pandya": "#004BA0",
  "sachin-tendulkar": "#FFD700",
  "ab-de-villiers": "#EC1C24",
  "shubman-gill": "#1B2133",
  "kl-rahul": "#A72056",
};
