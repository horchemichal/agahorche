import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { CzatKlubu } from "@/components/klub/czat";
import { DNI_ZYCIA_WIADOMOSCI } from "@/lib/klub/czat";
import { Section } from "@/components/ui/section";
import { Heading, Lead, Eyebrow } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "Czat klubu — Aga Club",
  // `noindex`, bo to prywatna rozmowa klubowiczek, nie treść dla Google.
  robots: { index: false, follow: false },
};

/**
 * Czat Aga Club — wspólny pokój dla klubowiczek.
 *
 * DOSTĘP MA TU DWIE ZAPORY i to jest celowe. Proxy (proxy.ts) nie pilnuje
 * /aga-club/*, bo to publiczna gałąź serwisu, więc strona sprawdza sesję
 * sama i odsyła na logowanie. Druga zapora siedzi w API czatu, które też
 * czyta sesję — bo do API można wejść z pominięciem strony.
 */
export default async function CzatKlubuPage() {
  const client = await getCurrentClient();
  if (!client) redirect("/strefa-klienta/logowanie?next=/aga-club/czat");

  return (
    <>
      <Section className="!pb-0">
        <Eyebrow>Aga Club</Eyebrow>
        <Heading as="h1" size="lg" className="mt-2">
          Czat klubu
        </Heading>
        <Lead className="mt-3 max-w-xl">
          Miejsce na codzienne „co dziś gotujecie”. Piszą tu tylko klubowiczki — nikt z zewnątrz
          tego nie widzi.
        </Lead>
      </Section>

      <Section className="!pt-6">
        <CzatKlubu dniZycia={DNI_ZYCIA_WIADOMOSCI} />

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          Wiadomości i zdjęcia znikają automatycznie po {DNI_ZYCIA_WIADOMOSCI} dniach — razem
          z plikami z serwera. To rozmowa na dziś, nie archiwum. Swoją wiadomość możesz usunąć
          wcześniej, klikając „usuń” pod nią.
        </p>
      </Section>
    </>
  );
}
