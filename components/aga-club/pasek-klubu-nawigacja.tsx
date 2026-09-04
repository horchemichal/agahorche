"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { POZYCJE_KLUBU, czyTrasaKlubu, aktywnaPozycja } from "@/data/aga-club/pozycje-klubu";
import { cn } from "@/lib/utils";

/**
 * OŚ PLIKU
 * Pasek nawigacji Aga Club — wszystkie podstrony klubu w jednym rzędzie,
 * na każdej podstronie klubu (prośba Michała, 4.09.2026: „po zalogowaniu
 * niech będzie widać menu aga klub czyli wszystkie podstrony i niech to
 * menu będzie na każdej podstronie aga club").
 *
 * PROBLEM, KTÓRY TO ROZWIĄZUJE. Klub jest rozsypany po serwisie: diety pod
 * /diety, przepisy pod /przepisy, poradnik pod /poradnik, wyzwanie pod
 * /aga-club/30-dni-z-aga. Klientka, która weszła z pulpitu w „Poradnik",
 * nie miała jak przejść stamtąd do „Lodówki" inaczej niż przez górne menu
 * serwisu — czyli przez to samo menu, które widzi osoba niezalogowana.
 * Klub nie miał własnej nawigacji, tylko listę odnośników na pulpicie.
 *
 * DLACZEGO KOMPONENT KLIENCKI. Trzeba znać bieżący adres — żeby wiedzieć,
 * czy jesteśmy na podstronie klubu, i żeby podświetlić właściwą pozycję.
 * `usePathname()` działa tylko po stronie klienta, a layout jest serwerowy.
 * Sesji ten komponent NIE czyta: dostaje już gotową decyzję od
 * `pasek-klubu.tsx`, więc do przeglądarki nie trafia nic poza adresami,
 * które i tak są publiczne.
 *
 * PRZEWIJANIE W POZIOMIE NA TELEFONIE. Sześć pozycji nie mieści się na
 * szerokości telefonu. Zawijanie do drugiego rzędu zjadałoby pół ekranu
 * nad treścią, więc pasek przewija się w bok — z ukrytym paskiem
 * przewijania, ale z zachowanym przewijaniem klawiaturą i gestem.
 */
export function PasekKlubuNawigacja() {
  const sciezka = usePathname();

  // Poza klubem paska nie ma. Zalogowana klientka czytająca np. /o-mnie
  // jest w zwykłej części serwisu i nie potrzebuje tam nawigacji klubu.
  if (!czyTrasaKlubu(sciezka)) return null;

  const biezaca = aktywnaPozycja(sciezka);

  return (
    <nav aria-label="Aga Club" className="border-b border-border bg-surface">
      <div className="container-page">
        <ul className="-mx-1 flex items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <li className="shrink-0 px-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Aga Club
          </li>
          {POZYCJE_KLUBU.map(({ href, ikona: Ikona, tytul, krotki }) => {
            const aktywna = biezaca?.href === href;
            return (
              <li key={href} className="shrink-0">
                <Link
                  href={href}
                  aria-current={aktywna ? "page" : undefined}
                  title={tytul}
                  className={cn(
                    "flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors",
                    aktywna
                      ? "bg-brand-600 font-medium text-neutral-0"
                      : "text-neutral-700 hover:bg-neutral-0 hover:text-brand-700",
                  )}
                >
                  <Ikona width={15} height={15} className="shrink-0" />
                  {krotki}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
