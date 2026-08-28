import { Section } from "@/components/ui/section";
import { Eyebrow, Heading, Lead } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { CheckCircleIcon } from "@/components/marketing/icons";

const ITEMS = [
  "więcej diet",
  "7 i 14 dni",
  "różne warianty kaloryczne",
  "wymiana posiłków",
  "zamienniki",
  "lista zakupów",
  "Aga AI",
  "materiały dla klientów",
];

/**
 * "To dopiero początek" (spec §14) — the pivot from public demo to lead
 * generation. Behind it stoi realny system kont klienckich
 * (lib/auth/client-auth.ts).
 *
 * SIERPIEŃ 2026: konta NIE są już do samodzielnego zakładania. Aga zakłada je
 * sama swoim klientom, dlatego z tej sekcji (i z pozostałych publicznych
 * miejsc: diet-configurator.tsx, diet-plan-preview.tsx, strony logowania)
 * zniknął przycisk „Załóż konto”. Zostaje jedno wyjście dla osób, które konto
 * już mają — logowanie — plus CTA na prezentację dla reszty.
 *
 * Sama strona /strefa-klienta/rejestracja nadal istnieje i działa (jest
 * `noindex`), ale nie prowadzi do niej ŻADEN link z serwisu — to teraz
 * narzędzie Agi do zakładania konta klientowi, nie ścieżka dla odwiedzającego.
 * Gdyby miała zniknąć całkiem, najpierw trzeba dodać zakładanie kont
 * w panelu admina (dziś go tam nie ma).
 */
export function ClientZoneTeaser() {
  return (
    <Section tone="surface">
      <div className="rounded-2xl border border-border bg-neutral-0 p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>To dopiero początek</Eyebrow>
          <Heading as="h2" size="md" align="center" className="mb-4">
            Strefa Klienta Agi
          </Heading>
          <Lead className="mx-auto mb-8">
            Na stronie pokazujemy przykładowe plany. Klienci Agi otrzymują dostęp do większej
            bazy diet, wariantów kalorycznych, list zakupów, zamienników i dodatkowych narzędzi.
            Konto zakłada Aga — dostają je osoby, które kupiły u niej Thermomixa.
          </Lead>
        </div>
        <ul className="mx-auto mb-8 grid max-w-2xl gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-neutral-700">
              <CheckCircleIcon width={16} height={16} className="shrink-0 text-brand-600" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-2.5">
          <ButtonLink href="/strefa-klienta/logowanie" size="lg">
            Zaloguj się do Strefy Klienta →
          </ButtonLink>
          <ButtonLink href="/prezentacja" variant="outline" size="lg">
            Nie masz konta? Umów prezentację
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
