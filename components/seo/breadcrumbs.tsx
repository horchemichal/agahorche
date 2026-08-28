import Link from "next/link";
import type { BreadcrumbItem } from "@/types/seo";
import { breadcrumbListSchema } from "@/lib/seo/schema";
import { JsonLdScript } from "./json-ld";

/**
 * Visual breadcrumb trail + matching BreadcrumbList JSON-LD, generated from
 * the SAME data (spec §13: "Dane muszą odpowiadać rzeczywistej hierarchii").
 * Always include "Strona główna" as the first item; callers pass the rest.
 */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const trail: BreadcrumbItem[] = [{ name: "Strona główna", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((item, index) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {index > 0 && <span aria-hidden>/</span>}
            {index === trail.length - 1 ? (
              <span className="text-neutral-700" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-brand-700">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <JsonLdScript data={breadcrumbListSchema(trail)} />
    </nav>
  );
}
