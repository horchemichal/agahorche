import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";

/**
 * Panel wiedzy o produkcie - uzupelnia lokalne FAQ, ktore odpowiada na pytania
 * o dojazd i umawianie. Tu sa pytania o samo urzadzenie.
 *
 * Swiadomie BEZ schematu FAQPage: Google wygasil bogate wyniki FAQ 7 maja 2026,
 * a drugi FAQPage na stronie i tak bylby bledem. Wartosc jest w widocznym HTML-u,
 * bo roboty AI czytaja tresc strony, nie JSON-LD. Dlatego kazda odpowiedz jest
 * samodzielna - da sie ja wyciac i zrozumiec bez reszty strony.
 *
 * Zrodla danych (oficjalne, stan na 18.10.2026):
 * - termin dostawy: vorwerk.com/pl/pl/thermomix/wielofunkcyjny-robot-kuchenny-tm7/termin-dostawy
 * - gwarancja: dokument gwarancyjny Vorwerk Polska (24 mies., 12 mies. na firme)
 * - TM6: vorwerk.com - "Urzadzenie nie jest w sprzedazy od 04.2025 r."
 * - akcesoria: oficjalna kategoria akcesoriow Vorwerka, wysylka do 5 dni
 * Przy zmianie oferty producenta te liczby trzeba zweryfikowac.
 */
export function PanelWiedzy({
  miasto,
  wMiescie,
}: {
  miasto: string | null;
  wMiescie: string | null;
}) {
  const nazwa = miasto ?? "Twojej okolicy";
  const forma = wMiescie ?? nazwa;

  const pytania = [
    {
      q: "Ile czeka się na Thermomix TM7 po jego zakupie?",
      a: `Vorwerk podaje dostawę do 14 dni od opłacenia zamówienia. Kurier przywozi Thermomix TM7 pod wskazany adres w ${forma}, a ja przyjeżdżam pomóc przy pierwszym uruchomieniu i pierwszym gotowaniu.`,
    },
    {
      q: "Ile trwa gwarancja na Thermomix TM7?",
      a: "Vorwerk Polska udziela gwarancji na 24 miesiące, czyli dwa lata od dnia zawarcia umowy sprzedaży. Przy zakupie na działalność gospodarczą gwarancja wynosi 12 miesięcy. Po dużej naprawie okres gwarancji biegnie od nowa, od dnia zwrotu urządzenia.",
    },
    {
      q: "Czy Thermomix TM7 jest trudny w obsłudze?",
      a: "Nie. Urządzenie prowadzi krok po kroku — na ekranie pojawia się kolejny etap przepisu, a Thermomix sam ustawia czas, temperaturę i obroty. Na prezentacji obsługujesz go samodzielnie od pierwszego dania, nie ja. Jeśli po zakupie coś będzie niejasne, dzwonisz i tłumaczę.",
    },
    {
      q: "Czy Thermomix TM6 jest dalej dostępny w sprzedaży?",
      a: "Nie. Vorwerk podaje, że TM6 nie jest w sprzedaży od kwietnia 2025 roku, a aktualnym modelem jest TM7. W oficjalnej ofercie można kupić TM6 odnowiony. Egzemplarze z drugiej ręki chodzą po ogłoszeniach, ale bez gwarancji producenta i bez promocji.",
    },
    {
      q: "Jakie dodatkowe akcesoria mogę dokupić do Thermomixa TM7?",
      a: "W oficjalnej ofercie Vorwerka jest ich kilkadziesiąt. Najczęściej dokupowane to Thermomix Sensor, nakładka krojąca 2.0 z dwoma spiralizerami, mistrzowski zestaw grillowy, dodatkowe naczynie miksujące z pokrywą, koszyczek, osłona noża oraz elementy przystawki Varoma. Vorwerk wysyła akcesoria w ciągu 5 dni.",
    },
  ];

  return (
    <Section>
      <Heading as="h2" size="md" className="mb-3">
        Thermomix TM7 — to warto wiedzieć przed zakupem
      </Heading>
      <p className="mb-8 max-w-2xl text-neutral-700">
        Pytania o samo urządzenie, które najczęściej słyszę na prezentacjach w {forma}.
        Dane pochodzą z oficjalnych materiałów Vorwerka.
      </p>
      <dl className="grid gap-6 md:grid-cols-2">
        {pytania.map((p) => (
          <div key={p.q} className="rounded-xl border border-border bg-neutral-0 p-5">
            <dt className="font-display text-base font-semibold text-brand-700">{p.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-neutral-700">{p.a}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-xs text-muted">
        Masz pytanie, którego tu nie ma? Zadzwoń albo napisz — odpowiem osobiście.
        Thermomix {nazwa}: prezentacja jest bezpłatna i do niczego nie zobowiązuje.
      </p>
    </Section>
  );
}
