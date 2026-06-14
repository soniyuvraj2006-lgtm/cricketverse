import type { Product, Category } from "@/lib/types";
import { slugify } from "@/lib/utils";
import { getProductImages } from "@/lib/images";
import { players } from "./players";
import { teams } from "./teams";
import { vendors } from "./vendors";

const categoryMeta: Record<
  Category,
  { label: string; productTypes: string[]; basePrice: number; hasSizes: boolean }
> = {
  jerseys: {
    label: "Jerseys",
    productTypes: ["Replica Jersey 2024", "Home Jersey", "Away Jersey", "Fan Edition Jersey", "Limited Edition Jersey"],
    basePrice: 1299,
    hasSizes: true,
  },
  "steel-cards": {
    label: "Steel Cards",
    productTypes: ["Premium Steel Card", "Gold Edition Card", "Holographic Steel Card", "Collector Steel Card"],
    basePrice: 499,
    hasSizes: false,
  },
  "fridge-magnets": {
    label: "Fridge Magnets",
    productTypes: ["Player Magnet Set", "Team Logo Magnet", "Action Shot Magnet", "Mini Stadium Magnet"],
    basePrice: 199,
    hasSizes: false,
  },
  posters: {
    label: "Posters",
    productTypes: ["Action Poster", "Vintage Poster", "Championship Poster", "Wall Art Poster"],
    basePrice: 349,
    hasSizes: false,
  },
  collectibles: {
    label: "Collectibles",
    productTypes: ["Limited Edition Box", "Mini Bat Replica", "Commemorative Coin", "Stadium Model"],
    basePrice: 1999,
    hasSizes: false,
  },
  "signed-merch": {
    label: "Signed Merchandise",
    productTypes: ["Signed Mini Bat", "Signed Jersey", "Signed Photo", "Signed Ball"],
    basePrice: 4999,
    hasSizes: false,
  },
};

const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = [
  { name: "Blue", hex: "#004BA0" },
  { name: "Red", hex: "#EC1C24" },
  { name: "Yellow", hex: "#FDB913" },
  { name: "Green", hex: "#138808" },
  { name: "Black", hex: "#1a1a1a" },
];

function generateProducts(): Product[] {
  const products: Product[] = [];
  let id = 1;

  const categories = Object.keys(categoryMeta) as Category[];

  for (const category of categories) {
    const meta = categoryMeta[category];
    const count = category === "jerseys" ? 12 : category === "steel-cards" ? 10 : 8;

    for (let i = 0; i < count; i++) {
      const player = players[i % players.length];
      const team = teams[i % teams.length];
      const vendor = vendors[i % vendors.length];
      const productType = meta.productTypes[i % meta.productTypes.length];
      const name = `${player.name} ${productType}`;
      const slug = slugify(name);
      const price = meta.basePrice + (i % 5) * 100;
      const mrp = Math.round(price * (1.3 + (i % 3) * 0.1));
      const isFlash = i < (category === "jerseys" ? 2 : 1);

      products.push({
        id: `p${id}`,
        slug,
        name,
        description: `Premium ${meta.label.toLowerCase()} featuring ${player.name}. Officially licensed merchandise crafted for true cricket fans. High-quality materials with authentic team branding.`,
        category,
        player: player.name,
        playerSlug: player.slug,
        team: team.name,
        teamSlug: team.slug,
        vendorId: vendor.id,
        price: isFlash ? Math.round(price * 0.7) : price,
        mrp,
        rating: 4.2 + (i % 8) * 0.1,
        reviewCount: 50 + i * 23,
        soldThisWeek: 20 + i * 7,
        inStock: i !== 7,
        stockCount: i === 7 ? 0 : 3 + (i % 20),
        sizes: meta.hasSizes ? sizes : undefined,
        colors: meta.hasSizes ? colors.slice(0, 3) : undefined,
        images: getProductImages(category),
        tags: [player.name, team.shortName, meta.label, productType],
        trending: i < 8,
        featured: i % 5 === 0,
        flashSale: isFlash,
        flashDiscount: isFlash ? 30 : undefined,
        newArrival: i % 7 === 0,
        signed: category === "signed-merch",
      });
      id++;
    }
  }

  return products;
}

export const products = generateProducts();

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category) {
  return products.filter((p) => p.category === category);
}

export function getProductsByPlayer(playerSlug: string) {
  return products.filter((p) => p.playerSlug === playerSlug);
}

export function getProductsByTeam(teamSlug: string) {
  return products.filter((p) => p.teamSlug === teamSlug);
}

export function getProductsByVendor(vendorId: string) {
  return products.filter((p) => p.vendorId === vendorId);
}

export function getFlashSaleProducts() {
  return products.filter((p) => p.flashSale && p.inStock);
}

export function getTrendingProducts() {
  return products.filter((p) => p.trending).slice(0, 12);
}

export function searchProducts(query: string) {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.player?.toLowerCase().includes(q) ||
      p.team?.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export const categoryInfo: Record<Category, { title: string; description: string; gradient: string }> = {
  jerseys: {
    title: "Cricket Jerseys",
    description: "Wear your hero's colors. Premium replica jerseys from all IPL teams and Team India.",
    gradient: "from-blue-900 via-blue-800 to-navy",
  },
  "steel-cards": {
    title: "Steel Player Cards",
    description: "Collector-grade steel cards with holographic finishes. Limited editions drop weekly.",
    gradient: "from-gray-700 via-gray-600 to-gray-900",
  },
  "fridge-magnets": {
    title: "Fridge Magnets",
    description: "Vibrant magnetic cards for your fridge. Show your fandom every day.",
    gradient: "from-purple-600 via-pink-500 to-orange-500",
  },
  posters: {
    title: "Cricket Posters",
    description: "Stadium-quality wall art featuring iconic cricket moments and players.",
    gradient: "from-red-800 via-orange-700 to-yellow-600",
  },
  collectibles: {
    title: "Limited Collectibles",
    description: "Rare memorabilia and limited edition items for serious collectors.",
    gradient: "from-yellow-900 via-amber-800 to-black",
  },
  "signed-merch": {
    title: "Signed Merchandise",
    description: "Authenticated signed bats, jerseys, and photos with certificate of authenticity.",
    gradient: "from-amber-900 via-yellow-800 to-black",
  },
};
