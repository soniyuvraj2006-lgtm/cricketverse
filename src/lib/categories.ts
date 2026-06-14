import type { Category } from "@/lib/types";

const validCategories: Category[] = [
  "jerseys", "steel-cards", "fridge-magnets", "posters", "collectibles", "signed-merch",
];

export function isValidCategory(cat: string): cat is Category {
  return validCategories.includes(cat as Category);
}

export { validCategories };
