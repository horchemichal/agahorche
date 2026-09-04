import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "Brak połączenia — Aga Club",
  robots: { index: false, follow: false },
};

/**
 * Plansza pokazywana przez service workera (public/sw.js), gdy telefon nie
 * ma połączenia z internetem.
 *
 * To jedyna strona, którą aplikacja trzyma w pamięci telefonu. Cała reszta
 * jest zawsze ściągana z serwera — patrz nagłówek sw.js — bo warunkiem
 * przy zamawianiu tej aplikacji było, żeby zmiany na stronie pojawiały się
 * w niej same. Strona zapisana w telefonie to strona, która kiedyś będzie
 * nieaktualna, więc jest tu dokładnie jedna i nie ma na niej żadnej treści
 * klubu — tylko informacja, co się stało.
 */
export default function OfflinePage() {
  return (
    <Section>
      <div className="mx-auto max-w-md text-center">
        <span className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-brand-600 font-display text-4xl font-bold text-neutral-0">
          A
        </span>
        <Heading as="h1" size="lg" align="center">
          Brak połączenia
        </Heading>
        <Lead className="mt-4">
          Aga Club potrzebuje internetu, żeby pokazać Twoje aktualne jadłospisy i przepisy. Sprawdź
          zasięg albo Wi-Fi i spróbuj ponownie — nic nie przepadło.
        </Lead>
      </div>
    </Section>
  );
}
