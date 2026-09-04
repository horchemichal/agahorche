import Link from "next/link";
import { getCurrentClient } from "@/lib/auth/client-auth";

/**
 * OŚ PLIKU
 * Wejście do konta Aga Club, wstawiane na dole rozwijanego menu „Aga Club"
 * — na desktopie i w menu mobilnym.
 *
 * DLACZEGO (prośba Agi, 4.09.2026: „niech tu w menu aga klub bedzie
 * zaloguj/wyloguj"). Klub to jedyna część serwisu za logowaniem, a jedyny
 * ślad sesji siedział w czarnej belce na samej górze — ukrytej poniżej
 * `md` i łatwej do przeoczenia. Kto chciał wejść na swoje konto, nie miał
 * gdzie kliknąć: „Zaloguj się" nie było w menu wcale. Skoro klub ma
 * w pasku własną pozycję, to właśnie w niej jest miejsce na wejście
 * do konta.
 *
 * DLACZEGO OSOBNY KOMPONENT SERWEROWY. `header.tsx` i `mobile-nav.tsx`
 * mają "use client" (dropdowny, hamburger), a `getCurrentClient()` czyta
 * ciasteczko sesji po stronie serwera. Zamiast przepychać `isLoggedIn`
 * przez layout, nagłówek dostaje gotowy węzeł w slocie — ten sam wzorzec
 * co `ClientSessionBar`.
 *
 * PUŁAPKA: działa, bo layout publiczny ma `dynamic = "force-dynamic"`
 * (patrz app/(site)/layout.tsx). Gdyby ktoś przywrócił prerenderowanie,
 * menu zamroziłoby się w stanie „niezalogowany".
 */
export async function KlubKontoLink({ wariant }: { wariant: "desktop" | "mobile" }) {
  const client = await getCurrentClient();

  const klasaLinku =
    wariant === "desktop"
      ? "block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-surface hover:text-brand-700"
      : "block rounded-md px-3 py-2.5 text-base text-neutral-600";

  if (!client) {
    return (
      <div className="mt-1 border-t border-border pt-1">
        <Link href="/strefa-klienta/logowanie" className={klasaLinku}>
          Zaloguj się
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-1 border-t border-border pt-1">
      <Link href="/strefa-klienta" className={klasaLinku}>
        Mój pulpit
      </Link>
      {/*
        Wylogowanie jest POST-em (app/(site)/strefa-klienta/wyloguj/route.ts),
        więc <form>, a nie link — działa bez JavaScriptu i nie da się go
        wywołać przypadkowym wejściem na adres ani podrzuconym linkiem.
      */}
      <form action="/strefa-klienta/wyloguj" method="post">
        <button type="submit" className={`${klasaLinku} w-full text-left`}>
          Wyloguj się
        </button>
      </form>
    </div>
  );
}
