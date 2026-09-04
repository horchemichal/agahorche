import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { DietCategoryPage } from "@/components/diets/diet-category-page";
import { getDietCategory } from "@/data/diets/categories";

const category = getDietCategory("niemowleta")!;

export const metadata: Metadata = buildMetadata({
  title: category.name,
  description: `${category.description} Cztery etapy rozszerzania diety, każdy po 7 dni — zobacz przykładowy jadłospis.`,
  path: `/diety/${category.slug}`,
});

export default function NiemowletaDietPage() {
  return <DietCategoryPage category={category} />;
}
