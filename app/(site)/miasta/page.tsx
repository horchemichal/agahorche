import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllCities } from "@/lib/locations";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Card, Badge } from "@/components/ui/card";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix w Twoim mieście — Małopolska i cała Polska",
  description:
    "Sprawdź, czy Aga Horche organizuje prezentacje Thermomix w Twojej miejscowości. Najczęściej Bochnia, Brzesko, Kraków, Wieliczka, Tarnów i okolice.",
  path: "/miasta",
});

/**
 * Hub page listing every city currently in the location engine (spec §7).
 *
 * Kolejność grup zmieniona w sierpniu 2026. Wcześniej strona pokazywała
 * wyłącznie Tier A i Tier B według wielkości miasta, więc otwierała się
 * Warszawą, a miejscowości, w których Aga faktycznie pracuje, albo były
 * niżej, albo — jeśli miały niższy tier — nie pojawiały się w ogóle.
 * Teraz Małopolska jest pierwsza, a ostatnia grupa łapie wszystko, co nie
 * weszło wyżej, więc żadna lokalizacja z bazy nie może się „zgubić”.
 *
 * Plakietka „W przygotowaniu” nadal wynika z `location.seo.indexable` —
 * strona istnieje i działa, ale świadomie nie jest jeszcze w indeksie,
 * dopóki nie dostanie prawdziwej treści lokalnej.
 */
export default async function MiastaPage() {
  const miasta = await getAllCities();

  // Alfabetycznie w obrębie grupy — kolejność z bazy (seo_priority) jest
  // przydatna redakcyjnie, ale czytelnik szuka tu po prostu swojej miejscowości.
  const alfabetycznie = [...miasta].sort((a, b) => a.name.localeCompare(b.name, "pl"));

  const malopolska = alfabetycznie.filter((m) => m.wojewodztwoSlug === "malopolskie");
  const pozostale = alfabetycznie.filter((m) => m.wojewodztwoSlug !== "malopolskie");
  const tierA = pozostale.filter((m) => m.tier === "A");
  const reszta = pozostale.filter((m) => m.tier !== "A");

  const grupy = [
    {
      label: "Małopolska — tu dojeżdżam najczęściej",
      items: malopolska,
    },
    { label: "Największe miasta w Polsce", items: tierA },
    { label: "Pozostałe miasta", items: reszta },
  ].filter((g) => g.items.length > 0);

  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs items={[{ name: "Miasta", path: "/miasta" }]} />
      </Section>
      <Section className="pt-6">
        <Heading as="h1" size="lg">
          Thermomix w Twoim mieście
        </Heading>
        <Lead className="mt-4 max-w-2xl">
          Na miejscu jestem najczęściej w Małopolsce — Bochnia, Brzesko, Kraków, Wieliczka, Tarnów
          i okolice. Przy dalszych miejscowościach umawiamy się indywidualnie, więc jeśli nie
          widzisz swojej na liście, po prostu zadzwoń.
        </Lead>
      </Section>

      {grupy.map((group) => (
        <Section key={group.label} tone="surface" className="pt-0">
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            {group.label}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {group.items.map((city) => (
              <Link key={city.slug} href={city.urlPath}>
                <Card className="h-full transition-shadow hover:shadow-none">
                  <h3 className="font-semibold text-neutral-900">{city.name}</h3>
                  <p className="mt-1 text-sm text-muted">{city.region}</p>
                  {!city.seo.indexable && (
                    <Badge tone="neutral" className="mt-3">
                      W przygotowaniu
                    </Badge>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
