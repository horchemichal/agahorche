import Link from "next/link";
import type { DietCategory } from "@/types/diet";
import { CategoryIcon } from "./category-icon";
import { Badge } from "@/components/ui/card";

export function DietCategoryCard({ category }: { category: DietCategory }) {
  const hasExample = category.plans.length > 0;
  return (
    <Link href={`/diety/${category.slug}`} className="block h-full">
      <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-neutral-0 p-5 transition-colors hover:border-brand-300">
        <div className="flex items-center justify-between gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-700">
            <CategoryIcon icon={category.icon} width={20} height={20} />
          </span>
          <Badge tone={hasExample ? "brand" : "neutral"}>{hasExample ? "Przykładowy plan" : "Wkrótce"}</Badge>
        </div>
        <div>
          <h3 className="font-semibold text-neutral-900">{category.shortName}</h3>
          <p className="mt-1 text-sm text-muted leading-relaxed">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
