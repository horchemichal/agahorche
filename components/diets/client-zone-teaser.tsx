import { Section } from "@/components/ui/section";
import { Eyebrow, Heading, Lead } from "@/components/ui/heading";
import { ButtonLink } from "@/components/ui/button";
import { CheckCircleIcon } from "@/components/marketing/icons";

/**
 * WYŁĄCZNIE RZECZY, KTÓRE ISTNIEJĄ (prośba Michała, 4.09.2026: „usuń Aga AI
 * i wszystko, czego nie ma"). Lista obiecywała cztery rzeczy, których
 * w serwisie nie było:
 *
 * - „Aga AI" — /api/ai/chat odpowiada 503, funkcji nie ma
 * - „wymiana posiłków" i „zamienniki" — to ta sama rzecz („Zamień danie"
 *   w meal-card.tsx) i ani jeden z 1148 posiłków w bazie nie ma ustawionego
 *   zamiennika, więc przycisk nigdy się nie pokazuje
 * - „materiały dla klientów" — nie ma w serwisie niczego takiego
 *
 * Zniknęło też „więcej diet": zalogowana klientka widzi TE SAME dziesięć
 * diet co każdy odwiedzający, tylko z odblokowanymi wszystkimi dniami.
 * Różnica jest realna, ale to nie jest „więcej diet".
 *
 * W zamian doszły cztery rzeczy, które klub naprawdę daje, a lista o nich
 * milczała: przepisy, lodówka, poradnik i wyzwanie 30 dni.
 */
const ITEMS = [
  "pełne jadłospisy — wszystkie dni odblokowane",
  "7 i 14 dni",
  "warianty 1500 i 2000 kcal",
  "lista zakupów",
  "przepisy z Cookidoo",
  "Co ugotować dzisiaj?",
  "Co mam w lodówce?",
  "poradnik kuchenny",
  "30 dni z Thermomixem",
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
            Na stronie pokazujemy przykładowe plany — pierwszy dzień odsłonięty, reszta zamknięta.
            Klienci Agi mają wszystkie dni każdej diety, warianty 7 i 14 dni, kaloryczności
            1500 i 2000 kcal, listy zakupów oraz pozostałe narzędzia klubu.
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
