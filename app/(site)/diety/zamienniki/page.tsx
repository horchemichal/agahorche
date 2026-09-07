import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { DietCategoryPage } from "@/components/diets/diet-category-page";
import { getDietCategory } from "@/data/diets/categories";

const category = getDietCategory("zamienniki")!;

export const metadata: Metadata = buildMetadata({
  title: category.name,
  description:
    "Zwyczajne, mieszane menu na tydzień lub dwa — bez wykluczeń, jeśli nie potrzebujesz diety pod konkretne wskazanie. Skonfiguruj plan i zobacz Dzień 1.",
  path: `/diety/${category.slug}`,
});

export default function ZamiennikiDietPage() {
  return <DietCategoryPage category={category} />;
}
