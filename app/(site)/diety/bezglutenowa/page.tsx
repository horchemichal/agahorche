import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { DietCategoryPage } from "@/components/diets/diet-category-page";
import { getDietCategory } from "@/data/diets/categories";

const category = getDietCategory("bezglutenowa")!;

export const metadata: Metadata = buildMetadata({
  title: category.name,
  description:
    "Śniadania, obiady i kolacje ze składnikami realnie zweryfikowanymi, nie tylko z założenia bezglutenowymi. Skonfiguruj plan i zobacz Dzień 1.",
  path: `/diety/${category.slug}`,
});

export default function BezglutenowaDietPage() {
  return <DietCategoryPage category={category} />;
}
