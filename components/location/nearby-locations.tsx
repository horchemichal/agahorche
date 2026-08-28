import Link from "next/link";
import type { Location } from "@/types/location";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";

/** "Obsługiwane okolice" — spec §8. Renders nothing if no neighbors yet. */
export function NearbyLocations({
  wojewodztwo,
  neighbors,
}: {
  wojewodztwo: Location | null;
  neighbors: Location[];
}) {
  if (neighbors.length === 0 && !wojewodztwo) return null;

  return (
    <Section tone="surface">
      <Heading as="h2" size="md" className="mb-6">
        Obsługiwane okolice
      </Heading>
      <div className="flex flex-wrap gap-2.5">
        {wojewodztwo && (
          <Link
            href={wojewodztwo.urlPath}
            className="rounded-full border border-border bg-neutral-0 px-4 py-2 text-sm text-neutral-700 hover:border-brand-500 hover:text-brand-700"
          >
            Województwo {wojewodztwo.name}
          </Link>
        )}
        {neighbors.map((n) => (
          <Link
            key={n.slug}
            href={n.urlPath}
            className="rounded-full border border-border bg-neutral-0 px-4 py-2 text-sm text-neutral-700 hover:border-brand-500 hover:text-brand-700"
          >
            Thermomix {n.name}
          </Link>
        ))}
      </div>
    </Section>
  );
}
