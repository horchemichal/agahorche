import type { JsonLd } from "@/lib/seo/schema";

/**
 * Renders one or more JSON-LD payloads as <script type="application/ld+json">
 * tags. Accepts `null` entries so callers can conditionally include schema
 * (e.g. FAQPage only when FAQ items exist) without littering call sites
 * with guards.
 */
export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] | null | (JsonLd | null)[] }) {
  const items = (Array.isArray(data) ? data : [data]).filter(
    (item): item is JsonLd => item !== null,
  );

  if (items.length === 0) return null;

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
