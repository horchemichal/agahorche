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
 * NA TELEFONIE LISTA PIONOWA, NA DESKTOPIE RZĄD (prośba Michała,
 * 4.09.2026: „niech to podmenu aga klub na telefonach nie będzie przesuwne
 * tylko jedno pod drugim, tak żeby każdy od razu widział wszystkie
 * kategorie").
 *
 * Pierwsza wersja przewijała się w bok, żeby oszczędzić miejsce nad
 * treścią. Efekt był odwrotny do zamierzonego: na ekranie mieściły się
 * trzy pozycje, czwarta była ucięta w pół, a o istnieniu poradnika
 * i wyzwania trzeba było się domyślić i przesunąć palcem. Menu, którego
 * połowy nie widać, nie jest menu. Sześć wierszy zjada kawałek ekranu,
 * ale za to klub jest widoczny cały — i to jest ta zamiana, o którą
 * chodziło.
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
        <ul className="flex flex-col gap-0.5 py-2 sm:-mx-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-1">
          <li className="px-1 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 sm:px-2 sm:py-0">
            Aga Club
          </li>
          {POZYCJE_KLUBU.map(({ href, ikona: Ikona, tytul, krotki }) => {
            const aktywna = biezaca?.href === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={aktywna ? "page" : undefined}
                  title={tytul}
                  className={cn(
                    // Na telefonie pełna szerokość i pełna nazwa; od `sm`
                    // wracamy do zwartych „pigułek" w jednym rzędzie.
                    "flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors",
                    "sm:w-auto sm:gap-1.5 sm:whitespace-nowrap sm:rounded-full sm:px-3 sm:py-1.5",
                    aktywna
                      ? "bg-brand-600 font-medium text-neutral-0"
                      : "text-neutral-700 hover:bg-neutral-0 hover:text-brand-700",
                  )}
                >
                  <Ikona width={15} height={15} className="shrink-0" />
                  {/*
                    Telefon ma miejsce na pełną nazwę — wiersz jest szeroki
                    na cały ekran. Skrót („Co ugotować?", „Lodówka") jest
                    potrzebny dopiero w zwartym rzędzie na desktopie.
                  */}
                  <span className="sm:hidden">{tytul}</span>
                  <span className="hidden sm:inline">{krotki}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
