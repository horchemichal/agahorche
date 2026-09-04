import { Header } from "@/components/layout/header";
import { ClientSessionBar } from "@/components/layout/client-session-bar";
import { KlubKontoLink } from "@/components/layout/klub-konto-link";
import { PasekKlubu } from "@/components/aga-club/pasek-klubu";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCta } from "@/components/layout/sticky-cta";
import { JsonLdScript } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import type { ReactNode } from "react";

/**
 * Renderowanie na żądanie dla całej publicznej części serwisu.
 *
 * Wcześniej strony były prerenderowane w trakcie `docker build`. Build nie
 * widzi bazy (kontener `agahorche-postgres` nie istnieje na etapie
 * budowania obrazu), więc dane do HTML-a brał ostatni działający fallback —
 * czyli Supabase. Efekt: publiczne strony pokazywały treści i zdjęcia
 * sprzed migracji, a zmiany zapisane w Aga Admin nie pojawiały się na
 * stronie aż do kolejnego przebudowania obrazu.
 *
 * `force-dynamic` w layoucie dotyczy wszystkich tras pod app/(site), więc
 * każda podstrona renderuje się z aktualnej bazy przy żądaniu i nie da się
 * przypadkiem „zamrozić” treści w obrazie Dockera. Baza stoi w tej samej
 * sieci Dockera, a ruch jest niewielki, więc koszt renderu jest pomijalny.
 */
export const dynamic = "force-dynamic";

/** Public marketing site chrome — every route under app/(site) gets this; app/admin does not. */
export default async function SiteLayout({ children }: { children: ReactNode }) {
  const zalogowana = Boolean(await getCurrentClient());

  return (
    <>
      <Header
        sesja={<ClientSessionBar />}
        kontoKlubu={<KlubKontoLink wariant="desktop" />}
        kontoKlubuMobile={<KlubKontoLink wariant="mobile" />}
      />
      {/*
        Pasek Aga Club stoi TUTAJ, w layoucie, a nie na poszczególnych
        stronach — i to jest cała odpowiedź na „niech to menu będzie na
        każdej podstronie aga club". Podstrony klubu leżą w czterech
        różnych gałęziach tras (/strefa-klienta, /diety, /przepisy,
        /poradnik, /aga-club), więc wstawianie paska z osobna oznaczałoby
        kilkanaście miejsc do pamiętania przy każdej nowej stronie. Pasek
        sam decyduje, czy się pokazać: sesja tutaj, adres w środku.
      */}
      <PasekKlubu />
      {/*
        CIAŚNIEJSZE ODSTĘPY W KLUBIE (prośba Michała, 4.09.2026: „zmniejsz
        odstępy w każdej podstronie w aga klub").

        Klasa siedzi TUTAJ, a nie przy dwudziestu trzech `<Section>` na
        pięciu stronach klubu. Powód ten sam co przy pasku: podstrony klubu
        leżą w różnych gałęziach tras, więc ustawianie odstępów z osobna
        znaczy tyle, że pierwsza zapomniana strona wyłamuje się z rytmu.
        Reguła `.klub-kompakt` w globals.css tnie `py` sekcji o mniej więcej
        połowę.

        TYLKO DLA ZALOGOWANYCH — i to jest istotne. /diety, /przepisy
        i /poradnik są też stronami publicznymi; tam luźniejszy rytm ma
        sens, bo to strony sprzedażowe, które się czyta. W klubie klientka
        nie czyta, tylko szuka konkretnego dnia diety, i każdy pusty ekran
        między sekcjami jest po prostu przewijaniem.
      */}
      <main className={cn("flex-1 pb-20 lg:pb-0", zalogowana && "klub-kompakt")}>{children}</main>
      <Footer />
      <StickyMobileCta />
      <JsonLdScript data={[organizationSchema(), websiteSchema()]} />
    </>
  );
}
