import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { Wyzwanie30Dni, type DzienZPrzepisem } from "@/components/aga-club/wyzwanie-30-dni";
import { pobierzOpublikowaneDni } from "@/lib/database/repositories/aga-club-challenge-repository";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { getRecipe } from "@/data/diets/recipes";
import { PRZEPISY_META } from "@/data/diets/przepisy-meta";

export const metadata: Metadata = buildMetadata({
  title: "30 dni z Thermomixem — plan dla nowej właścicielki",
  description:
    "Trzydzieści dni, trzydzieści zadań: od pierwszego koktajlu po własny repertuar dań. Dla osoby, która dostała Thermomix i nie chce, by stał nieużywany.",
  path: "/aga-club/30-dni-z-aga",
});

/**
 * OŚ STRONY
 * Wyzwanie „30 dni z Thermomixem" — moduł, który od sierpnia 2026 istniał
 * jako pusta tabela i strona „wkrótce”. Teraz ma treść (30 dni), postęp
 * i gating.
 *
 * DLACZEGO PIERWSZY DZIEŃ JEST OTWARTY. Ta sama zasada co przy dietach:
 * gość widzi jeden pełny dzień i tytuły pozostałych, więc wie dokładnie,
 * co dostanie po zalogowaniu. Zamknięcie wszystkiego zamieniłoby stronę
 * w obietnicę bez pokrycia, a otwarcie wszystkiego odebrałoby klubowi
 * jedyny powód, żeby do niego wejść.
 *
 * PRZEPISY dołączamy tu, po stronie serwera, żeby komponent kliencki nie
 * musiał ciągnąć całego rejestru 252 dań do przeglądarki.
 */
export default async function TrzydziesciDniPage() {
  const [dni, client] = await Promise.all([pobierzOpublikowaneDni(), getCurrentClient()]);

  const zPrzepisami: DzienZPrzepisem[] = dni.map((d) => ({
    ...d,
    przepis: d.przepisId ? (getRecipe(d.przepisId) ?? null) : null,
    meta: d.przepisId ? (PRZEPISY_META[d.przepisId] ?? null) : null,
  }));

  const ileZPrzepisem = zPrzepisami.filter((d) => d.przepis).length;

  return (
    <>
      <Section>
        <Breadcrumbs
          items={[
            { name: "Aga Club", path: "/aga-club" },
            { name: "30 dni z Thermomixem", path: "/aga-club/30-dni-z-aga" },
          ]}
        />
        <div className="mt-6 max-w-2xl">
          <Eyebrow>Aga Club</Eyebrow>
          <Heading as="h1" size="xl" className="mt-2">
            30 dni z Thermomixem
          </Heading>
          <Lead className="mt-4">
            Trzydzieści dni, trzydzieści zadań — po jednym dziennie. Od pierwszego koktajlu
            w pięć minut po własny repertuar dań, które robisz bez zaglądania w przepis.
            {ileZPrzepisem > 0 && ` ${ileZPrzepisem} dni prowadzi wprost do konkretnego przepisu.`}
          </Lead>
          <p className="mt-4 max-w-xl text-sm text-muted">
            To plan dla osoby, która właśnie dostała urządzenie i nie chce, żeby po miesiącu
            stało na blacie nieużywane. Nie musisz robić wszystkiego po kolei ani codziennie —
            odhaczaj to, co zrobisz.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        {zPrzepisami.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-0 p-6 text-center text-sm text-neutral-700">
            Wyzwanie jest w przygotowaniu. Zajrzyj tu za kilka dni.
          </p>
        ) : (
          <Wyzwanie30Dni dni={zPrzepisami} zalogowany={Boolean(client)} />
        )}
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-6 md:p-8">
          <Heading as="h2" size="md">
            Gdy skończysz wyzwanie
          </Heading>
          <p className="max-w-2xl text-neutral-700">
            Dalej jest codzienność: gotowe jadłospisy na 7 i 14 dni, wyszukiwarka „Co ugotować
            dzisiaj?” i poradnik na wszystkie kuchenne pytania, które pojawiają się po drodze.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <ButtonLink href="/diety">Diety z Thermomixem</ButtonLink>
            <ButtonLink href="/przepisy" variant="outline" className="bg-neutral-0">
              Co ugotować dzisiaj?
            </ButtonLink>
            <ButtonLink href="/poradnik" variant="ghost">
              Poradnik kuchenny
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
