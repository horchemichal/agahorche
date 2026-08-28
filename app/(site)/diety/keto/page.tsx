import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { DietCategoryPage } from "@/components/diets/diet-category-page";
import { getDietCategory } from "@/data/diets/categories";

const category = getDietCategory("keto")!;

export const metadata: Metadata = buildMetadata({
  title: category.name,
  description: `${category.description} Skonfiguruj plan i zobacz przykładowy jadłospis na Dzień 1.`,
  path: `/diety/${category.slug}`,
});

export default function KetoDietPage() {
  return <DietCategoryPage category={category} />;
}
