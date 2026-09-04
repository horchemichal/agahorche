import type { ComponentType, SVGProps } from "react";
import {
  ChefHatIcon,
  CartIcon,
  LeafIcon,
  CalendarIcon,
  LightningIcon,
  BadgeIcon,
} from "@/components/marketing/icons";

/**
 * OŚ PLIKU
 * Jedna lista wszystkiego, co klientka dostaje w Aga Club po zalogowaniu.
 * Czytają ją DWA komponenty i to jest cały sens tego pliku:
 *
 *   components/aga-club/menu-klubu.tsx  — kafelki z opisem na pulpicie
 *   components/aga-club/pasek-klubu.tsx — wąski pasek nawigacji na każdej
 *                                          podstronie klubu
 *
 * Do 4.09.2026 lista siedziała wpisana na sztywno w menu-klubu.tsx. Gdy
 * doszedł pasek, ta sama lista musiałaby istnieć w dwóch plikach — a dwie
 * kopie tej samej listy rozjeżdżają się przy pierwszej zmianie i klientka
 * widzi co innego na pulpicie, a co innego w pasku.
 *
 * DLACZEGO TO NIE JEST AGA_CLUB_FEATURES (data/aga-club/features.ts).
 * Tamta lista opisuje kafelki na PUBLICZNEJ stronie klubu i mówi do kogoś,
 * kto konta jeszcze nie ma — jej zadaniem jest zachęcić. Tutaj mówimy do
 * osoby, która już weszła: krótko, bez sprzedaży. Wspólny plik oszczędziłby
 * kilku linijek, a związałby ze sobą dwa teksty, które mają się różnić.
 */
export interface PozycjaKlubu {
  href: string;
  ikona: ComponentType<SVGProps<SVGSVGElement>>;
  /** Pełna nazwa — kafelek na pulpicie. */
  tytul: string;
  /** Skrót do wąskiego paska, gdzie „Co ugotować dzisiaj?" się nie mieści. */
  krotki: string;
  /** Zdanie na kafelku. W pasku nieużywane. */
  opis: string;
  /**
   * Adresy, na których pozycja liczy się jako bieżąca. Podstrony też —
   * /diety/keto ma podświetlić „Diety". Wyjątkiem jest /przepisy, które
   * dopasowuje się dokładnie, bo /przepisy/co-mam-w-lodowce jest osobną
   * pozycją i podświetlenie obu naraz byłoby mylące.
   */
  prefiksy: string[];
  dokladnie?: boolean;
}

export const POZYCJE_KLUBU: PozycjaKlubu[] = [
  {
    href: "/strefa-klienta",
    ikona: BadgeIcon,
    tytul: "Mój pulpit",
    krotki: "Mój pulpit",
    opis: "Twoje diety, konfigurator i wszystko, co masz w klubie.",
    prefiksy: ["/strefa-klienta"],
  },
  {
    href: "/diety",
    ikona: LeafIcon,
    tytul: "Diety",
    krotki: "Diety",
    opis: "Pełne jadłospisy 7 i 14 dni z listą zakupów.",
    prefiksy: ["/diety"],
  },
  {
    href: "/przepisy",
    ikona: ChefHatIcon,
    tytul: "Co ugotować dzisiaj?",
    krotki: "Co ugotować?",
    opis: "Powiedz, ile masz czasu — pokażę pasujące dania.",
    prefiksy: ["/przepisy"],
    dokladnie: true,
  },
  {
    href: "/przepisy/co-mam-w-lodowce",
    ikona: CartIcon,
    tytul: "Co mam w lodówce?",
    krotki: "Lodówka",
    opis: "Zaznacz produkty, zobacz, co da się z nich zrobić.",
    prefiksy: ["/przepisy/co-mam-w-lodowce"],
  },
  {
    href: "/poradnik",
    ikona: LightningIcon,
    tytul: "Poradnik kuchenny",
    krotki: "Poradnik",
    opis: "Kuchenne pytania i wpadki — krótkie odpowiedzi.",
    prefiksy: ["/poradnik"],
  },
  {
    href: "/aga-club/30-dni-z-aga",
    ikona: CalendarIcon,
    tytul: "30 dni z Thermomixem",
    krotki: "30 dni",
    opis: "Trzydzieści zadań, po jednym dziennie.",
    prefiksy: ["/aga-club/30-dni-z-aga"],
  },
];

/**
 * Gdzie pasek klubu ma się w ogóle pokazywać. To NIE jest to samo co lista
 * pozycji: /aga-club (publiczna strona klubu) nie ma własnego przycisku
 * w pasku, ale pasek na niej ma sens — zalogowana osoba, która tam trafi,
 * powinna móc przejść dalej jednym kliknięciem.
 */
export const TRASY_Z_PASKIEM = ["/strefa-klienta", "/diety", "/przepisy", "/poradnik", "/aga-club"];

/** Czy pod tym adresem pokazujemy pasek klubu. */
export function czyTrasaKlubu(sciezka: string): boolean {
  return TRASY_Z_PASKIEM.some((p) => sciezka === p || sciezka.startsWith(`${p}/`));
}

/**
 * Która pozycja jest bieżąca. Wygrywa NAJDŁUŻSZE dopasowanie, więc
 * /przepisy/co-mam-w-lodowce podświetla „Lodówkę", a nie „Co ugotować?".
 */
export function aktywnaPozycja(sciezka: string): PozycjaKlubu | undefined {
  let najlepsza: PozycjaKlubu | undefined;
  let dlugosc = -1;

  for (const pozycja of POZYCJE_KLUBU) {
    for (const prefiks of pozycja.prefiksy) {
      const pasuje = pozycja.dokladnie
        ? sciezka === prefiks
        : sciezka === prefiks || sciezka.startsWith(`${prefiks}/`);
      if (pasuje && prefiks.length > dlugosc) {
        najlepsza = pozycja;
        dlugosc = prefiks.length;
      }
    }
  }

  return najlepsza;
}
