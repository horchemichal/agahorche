import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllCities, getAllWojewodztwa } from "@/lib/locations";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";

export const metadata: Metadata = buildMetadata({
  title: "Thermomix w Twoim mieście — lista miejscowości",
  description:
    "Miejscowości, do których Aga Horche dojeżdża z prezentacją Thermomixa — pogrupowane według województw. Najczęściej Bochnia, Brzesko, Kraków, Wieliczka i Tarnów.",
  path: "/miasta",
});

/**
 * Hub miejscowości (spec §7).
 *
 * PRZEBUDOWA Z WRZEŚNIA 2026 — PO AUDYCIE LINKOWANIA WEWNĘTRZNEGO.
 *
 * CO BYŁO NIE TAK. Strona renderowała KARTĘ dla każdej z 967 lokalizacji
 * w bazie — z indeksowanymi i nieindeksowanymi wymieszanymi w trzech
 * grupach po tierze. Efekt: 962 kB HTML-a i 967 odnośników na jednym
 * adresie, z czego około 590 prowadziło do stron `noindex`.
 *
 * DLACZEGO TO BYŁO GORSZE, NIŻ WYGLĄDAŁO. Audyt pokazał, że strony
 * województw nie linkowały do ANI JEDNEGO ze swoich miast, więc ta jedna
 * strona była jedyną drogą do stron lokalnych. 64 adresy — w tym Wrocław,
 * Poznań i Szczecin — nie miały POZA NIĄ żadnego linku wewnętrznego,
 * a kolejne 66 miało dokładnie jeden. Co trzecia indeksowana strona
 * lokalna wisiała na jednej wielkiej liście.
 *
 * CO JEST TERAZ. Grupowanie po województwie zamiast po tierze i tylko
 * miejscowości z WŁASNĄ treścią jako odnośniki. Reszta nie jest tu
 * wymieniana — jest na stronie swojego województwa, do której prowadzi
 * link w nagłówku grupy. Dzięki temu:
 * — z huba znikają setki linków do stron `noindex`,
 * — HTML chudnie o rząd wielkości,
 * — powstaje normalna hierarchia: hub → województwo → miasto,
 * — a człowiek szukający małej miejscowości ma ją o jedno kliknięcie dalej,
 *   zamiast przewijać listę tysiąca kart.
 *
 * Małopolska zostaje pierwsza, bo to region, w którym Aga pracuje
 * najczęściej — reszta alfabetycznie.
 */
export default async function MiastaPage() {
  const [miasta, wojewodztwa] = await Promise.all([getAllCities(), getAllWojewodztwa()]);

  const grupy = wojewodztwa
    .map((w) => {
      const wszystkie = miasta.filter((m) => m.wojewodztwoSlug === w.slug);
      return {
        wojewodztwo: w,
        zTrescia: wszystkie
          .filter((m) => m.seo.indexable)
          .sort((a, b) => a.name.localeCompare(b.name, "pl")),
        pozostalych: wszystkie.filter((m) => !m.seo.indexable).length,
      };
    })
    .filter((g) => g.zTrescia.length > 0 || g.pozostalych > 0)
    .sort((a, b) => {
      if (a.wojewodztwo.slug === "malopolskie") return -1;
      if (b.wojewodztwo.slug === "malopolskie") return 1;
      return a.wojewodztwo.name.localeCompare(b.wojewodztwo.name, "pl");
    });

  const razem = miasta.length;
  const zTresciaRazem = miasta.filter((m) => m.seo.indexable).length;

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
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Poniżej {zTresciaRazem} miejscowości z własną stroną. Dojeżdżam łącznie do {razem} —
          pełne listy znajdziesz na stronach województw.
        </p>
      </Section>

      {grupy.map((g) => (
        <Section key={g.wojewodztwo.slug} tone="surface" className="pt-0">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            <Link href={g.wojewodztwo.urlPath} className="hover:text-brand-700">
              {g.wojewodztwo.name}
            </Link>
          </h2>

          {g.zTrescia.length > 0 && (
            <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
              {g.zTrescia.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={m.urlPath}
                    className="text-neutral-800 underline decoration-neutral-300 underline-offset-4 hover:text-brand-700 hover:decoration-brand-500"
                  >
                    Thermomix {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {g.pozostalych > 0 && (
            <p className={`text-sm text-muted ${g.zTrescia.length > 0 ? "mt-5" : ""}`}>
              Dojeżdżam tu jeszcze do {g.pozostalych}{" "}
              {g.pozostalych === 1 ? "innej miejscowości" : "innych miejscowości"} —{" "}
              <Link href={g.wojewodztwo.urlPath} className="underline underline-offset-4 hover:text-brand-700">
                zobacz pełną listę
              </Link>
              .
            </p>
          )}
        </Section>
      ))}
    </>
  );
}
