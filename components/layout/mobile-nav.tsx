"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { PRIMARY_NAV } from "@/data/nav";
import { ButtonLink } from "@/components/ui/button";
import { ChevronDownIcon } from "@/components/marketing/icons";
import { cn } from "@/lib/utils";

/**
 * OŚ PLIKU
 * Pełnoekranowe menu mobilne. Telefon jest podstawowym urządzeniem
 * (spec §30), więc to nie jest zwinięty dropdown z desktopu — duże pola
 * dotyku, CTA na dole, wszystko w zasięgu kciuka.
 *
 * ZWIJANIE GRUP (prośba Agi, 4.09.2026: „cale menu kazdej kategorii
 * pokazuje sie rozwiniete"). Wcześniej menu wypisywało naraz wszystkie
 * pozycje wraz z podpunktami — 7 grup i 31 linków, czyli kilka ekranów
 * przewijania, żeby dojść do „Kontaktu" na końcu. Teraz widać same
 * kategorie, a podmenu otwiera się na dotknięcie strzałki.
 *
 * DWA POLA DOTYKU W JEDNYM WIERSZU, NIE JEDNO. Etykieta jest linkiem
 * (prowadzi do strony grupy, np. /thermomix), strzałka obok rozwija listę.
 * Gdyby cały wiersz tylko rozwijał, strony grup zniknęłyby z menu; gdyby
 * cały wiersz był linkiem, nie dałoby się rozwinąć. Oba pola mają 44 px
 * wysokości, czyli minimum dla kciuka.
 *
 * NARAZ OTWARTA JEST JEDNA GRUPA. Inaczej po rozwinięciu dwóch–trzech
 * wracamy do problemu, od którego zaczęliśmy — długiej listy do
 * przewijania.
 */
export function MobileNav({
  open,
  onClose,
  sesja,
  kontoKlubu,
}: {
  open: boolean;
  onClose: () => void;
  sesja?: ReactNode;
  kontoKlubu?: ReactNode;
}) {
  const [otwarta, setOtwarta] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-30 bg-neutral-0 transition-transform duration-200 lg:hidden",
        open ? "translate-x-0" : "translate-x-full pointer-events-none",
      )}
    >
      <nav className="flex h-full flex-col overflow-y-auto p-5" aria-label="Menu mobilne">
        <ul className="flex flex-1 flex-col gap-1">
          {PRIMARY_NAV.map((item) => {
            const rozwinieta = otwarta === item.href;
            const idPodmenu = `podmenu-${item.href.replace(/\W+/g, "-")}`;

            return (
              <li key={item.href} className="border-b border-border/60 last:border-b-0">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex-1 rounded-lg px-3 py-3.5 text-lg font-medium text-neutral-900"
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      onClick={() => setOtwarta((poprzednia) => (poprzednia === item.href ? null : item.href))}
                      aria-expanded={rozwinieta}
                      aria-controls={idPodmenu}
                      aria-label={rozwinieta ? `Zwiń ${item.label}` : `Rozwiń ${item.label}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-neutral-500"
                    >
                      <ChevronDownIcon
                        width={18}
                        height={18}
                        className={cn("transition-transform duration-200", rozwinieta && "rotate-180")}
                      />
                    </button>
                  )}
                </div>

                {item.children && rozwinieta && (
                  <ul id={idPodmenu} className="mb-2 ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block rounded-md px-3 py-2.5 text-base text-neutral-600"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}

                    {/*
                      Wejście do konta — tylko pod „Aga Club", patrz
                      klub-konto-link.tsx.

                      onClick NA <li>, A NIE NA LINKU. To jest komponent
                      serwerowy wstawiony w slot, więc nie da się przekazać
                      mu `onClose` jako propsa. Bez tego menu zostawało
                      otwarte po kliknięciu i przykrywało stronę, na którą
                      się właśnie przeszło — wyglądało to dokładnie tak,
                      jakby link nie działał (zgłoszenie Michała, 4.09.2026:
                      „na telefonie rozwijam menu i nie mogę kliknąć zaloguj
                      się"). Zdarzenie łapiemy więc na rodzicu, gdzie już
                      jesteśmy w komponencie klienckim. Działa i dla linku,
                      i dla przycisku „Wyloguj się".
                    */}
                    {item.href === "/aga-club" && kontoKlubu && (
                      <li onClick={onClose}>{kontoKlubu}</li>
                    )}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className="pt-4">
          <ButtonLink href="/prezentacja" size="lg" className="w-full" onClick={onClose}>
            Umów bezpłatną prezentację
          </ButtonLink>
        </div>

        {/*
          Pasek konta Aga Club musi być też tutaj: górna belka nagłówka,
          w której stoi na desktopie, jest ukryta poniżej `md`, więc na
          telefonie „Wyloguj się" nie byłoby widać wcale.
        */}
        {sesja && (
          <div
            onClick={onClose}
            className="mt-4 flex items-center justify-between gap-3 rounded-lg bg-neutral-900 px-4 py-3 text-xs text-neutral-0"
          >
            {sesja}
          </div>
        )}
      </nav>
    </div>
  );
}
