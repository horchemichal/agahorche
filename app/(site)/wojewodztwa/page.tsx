import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllWojewodztwa } from "@/lib/locations";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/card";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix w Twoim województwie",
  description: "Wybierz swoje województwo i sprawdź, jak umówić prezentację Thermomix w Twoim regionie.",
  path: "/wojewodztwa",
});

/**
 * Hub page for the top level of the location hierarchy (spec §7). Lists
 * every voivodeship from the location engine — this page itself needs no
 * per-region editing when the dataset grows, since it just maps over
 * WOJEWODZTWA.
 */
export default async function WojewodztwaPage() {
  const wojewodztwa = await getAllWojewodztwa();
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Województwa", path: "/wojewodztwa" }]} />
      </Section>
      <Section className="pt-6">
        <Heading as="h1" size="lg">
          Thermomix w Twoim województwie
        </Heading>
        <Lead className="mt-4 max-w-xl">
          Aga organizuje prezentacje Thermomix na terenie całej Polski. Wybierz swoje
          województwo, aby dowiedzieć się więcej.
        </Lead>
      </Section>
      <Section tone="surface" className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {wojewodztwa.map((w) => (
            <Link key={w.slug} href={w.urlPath}>
              <Card className="h-full transition-shadow hover:shadow-none">
                <h2 className="font-semibold text-neutral-900">{w.name}</h2>
                {w.region && <p className="mt-1 text-sm text-muted">{w.region}</p>}
                {!w.seo.indexable && (
                  <Badge tone="neutral" className="mt-3">
                    W przygotowaniu
                  </Badge>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
