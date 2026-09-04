import Link from "next/link";
import { getCurrentClient } from "@/lib/auth/client-auth";

/**
 * OŚ PLIKU
 * Pasek „Zalogowana jako … · Wyloguj się" w górnej belce
 * nagłówka, widoczny wyłącznie dla zalogowanych klientek i klientów
 * Aga Club.
 *
 * DLACZEGO POWSTAŁ (prośba Agi, 1.09.2026: „na stronie diety gdy jestem
 * zalogowany to nie ma opcji wyloguj"). Przycisk „Wyloguj się" istniał
 * dokładnie w jednym miejscu — na pulpicie w /strefa-klienta. Wystarczyło
 * kliknąć w dietę albo w cokolwiek w menu, żeby wyjść na stronę publiczną
 * i stracić jedyne wyjście z sesji; nie było też żadnego znaku, że
 * przeglądarka nadal jest zalogowana. Nagłówek jest jedynym elementem
 * wspólnym dla wszystkich stron publicznych, więc to jest jego miejsce.
 *
 * DLACZEGO OSOBNY KOMPONENT SERWEROWY, A NIE POLE W `Header`.
 * `components/layout/header.tsx` ma "use client" (dropdowny, hamburger,
 * `usePathname`), a `getCurrentClient()` czyta ciasteczko sesji po stronie
 * serwera. Zamiast przepychać `isLoggedIn` przez layout i psuć nagłówkowi
 * jego klientowość, wstawiamy tu mały komponent serwerowy — React renderuje
 * go w `children` slocie nagłówka.
 *
 * PUŁAPKA: layout publiczny ma `dynamic = "force-dynamic"` (patrz
 * app/(site)/layout.tsx), więc odczyt sesji przy każdym żądaniu jest tu
 * bezpieczny. Gdyby ktoś kiedyś przywrócił prerenderowanie, ten pasek
 * zamroziłby się w stanie „niezalogowany" — wtedy trzeba go przenieść do
 * komponentu klienckiego z endpointem sesji.
 *
 * CZEGO TU NIE MA: nazwiska. Wyświetlamy samo imię, bo pasek widać na
 * każdej stronie, także wtedy, gdy ktoś pokazuje ekran komuś obok.
 */
export async function ClientSessionBar() {
  const client = await getCurrentClient();
  if (!client) return null;

  const imie = client.displayName.split(" ")[0];

  return (
    <div className="flex items-center gap-3">
      {/*
        4.09.2026 — „Mój pulpit" usunięty stąd na prośbę Michała (razem
        z dwoma pozostałymi kopiami: w rozwijanym „Aga Club" i w pasku
        klubu). Prowadził do /strefa-klienta z trzech miejsc naraz.

        Imię ZOSTAJE linkiem do pulpitu: to jedyne dojście do niego z menu,
        jakie się ostało, a bez żadnego strona nadal by istniała, tylko nie
        dałoby się na nią wejść inaczej niż wpisując adres.
      */}
      <Link href="/strefa-klienta" className="hidden text-neutral-400 hover:text-brand-300 lg:inline">
        Zalogowana jako {imie}
      </Link>
      {/*
        Wylogowanie jest POST-em (patrz app/(site)/strefa-klienta/wyloguj/route.ts),
        więc zwykły <form> zamiast linku — działa bez JavaScriptu i nie da się
        go wywołać przypadkowym wejściem na adres.
      */}
      <form action="/strefa-klienta/wyloguj" method="post" className="contents">
        <button type="submit" className="text-neutral-400 underline-offset-2 hover:text-neutral-0 hover:underline">
          Wyloguj się
        </button>
      </form>
    </div>
  );
}
