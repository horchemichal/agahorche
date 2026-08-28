import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { DietCategoryPage } from "@/components/diets/diet-category-page";
import { getDietCategory } from "@/data/diets/categories";

const category = getDietCategory("dla-dzieci")!;

export const metadata: Metadata = buildMetadata({
  title: category.name,
  description: `${category.description} Konfigurator dostępny już teraz — przykładowy plan w przygotowaniu.`,
  path: `/diety/${category.slug}`,
});

export default function DlaDzieciDietPage() {
  return <DietCategoryPage category={category} />;
}
