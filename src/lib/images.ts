import type { Category } from "@/lib/types";

/** Tiny blur placeholder for Next/Image */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQCEAwEPwAB//9k=";

/** Local assets — always reliable, no CDN failures */
export const LOCAL_IMAGES = {
  batsman: "/images/cricket-batsman-hero.png",
};

/** Verified Unsplash IDs (tested working) */
export const REMOTE_IMAGES = {
  stadium: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&q=80",
  stadiumLights: "https://images.unsplash.com/photo-1593766788306-28561086694e?w=800&q=60",
  cricketAction: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80",
  steelCard: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=80",
  steelCard2: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
  magnets: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  magnets2: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&q=80",
  poster: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
  collectibles: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
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
    hero: LOCAL_IMAGES.batsman,
    card: LOCAL_IMAGES.batsman,
    accent: "#00AEEF",
    tagline: "Wear your team's colors",
  },
  "steel-cards": {
    hero: REMOTE_IMAGES.steelCard,
    card: REMOTE_IMAGES.steelCard,
    accent: "#C0C0C0",
    tagline: "Premium collector's items",
  },
  "fridge-magnets": {
    hero: REMOTE_IMAGES.magnets,
    card: REMOTE_IMAGES.magnets,
    accent: "#FF6B35",
    tagline: "Every fridge tells a story",
  },
  posters: {
    hero: REMOTE_IMAGES.poster,
    card: REMOTE_IMAGES.poster,
    accent: "#A855F7",
    tagline: "Frame the legendary moments",
  },
  collectibles: {
    hero: REMOTE_IMAGES.collectibles,
    card: REMOTE_IMAGES.collectibles,
    accent: "#FFD700",
    tagline: "Own a piece of history",
  },
  "signed-merch": {
    hero: REMOTE_IMAGES.cricketAction,
    card: REMOTE_IMAGES.cricketAction,
    accent: "#FFD700",
    tagline: "Authenticated signatures",
  },
};

export const PRODUCT_IMAGES: Record<Category, string[]> = {
  jerseys: [LOCAL_IMAGES.batsman, LOCAL_IMAGES.batsman, LOCAL_IMAGES.batsman],
  "steel-cards": [REMOTE_IMAGES.steelCard, REMOTE_IMAGES.steelCard2],
  "fridge-magnets": [REMOTE_IMAGES.magnets, REMOTE_IMAGES.magnets2],
  posters: [REMOTE_IMAGES.poster, REMOTE_IMAGES.collectibles],
  collectibles: [REMOTE_IMAGES.collectibles, REMOTE_IMAGES.cricketAction],
  "signed-merch": [REMOTE_IMAGES.cricketAction, REMOTE_IMAGES.stadium],
};

export function getProductImages(category: Category, index: number): string[] {
  const pool = PRODUCT_IMAGES[category];
  const primary = pool[index % pool.length];
  const secondary = pool[(index + 1) % pool.length];
  const tertiary = pool[(index + 2) % pool.length];
  return [primary, secondary, tertiary];
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
