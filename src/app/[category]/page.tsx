import { notFound } from "next/navigation";
import { CategoryPageClient } from "@/components/catalog/category-page";
import { getProductsByCategory } from "@/lib/data/products";
import { isValidCategory, validCategories } from "@/lib/categories";
import type { Category } from "@/lib/types";
import type { Metadata } from "next";

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: Category };
}): Promise<Metadata> {
  const titles: Record<Category, string> = {
    jerseys: "Cricket Jerseys",
    "steel-cards": "Steel Player Cards",
    "fridge-magnets": "Fridge Magnets",
    posters: "Cricket Posters",
    collectibles: "Limited Collectibles",
    "signed-merch": "Signed Merchandise",
  };
  return { title: titles[params.category] };
}

export default function CategoryRoutePage({ params }: { params: { category: string } }) {
  if (!isValidCategory(params.category)) notFound();
  const products = getProductsByCategory(params.category);
  return <CategoryPageClient category={params.category} products={products} />;
}
