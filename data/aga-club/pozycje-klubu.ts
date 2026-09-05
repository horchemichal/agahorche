import type { ComponentType, SVGProps } from "react";
import {
  ChefHatIcon,
  CartIcon,
  LeafIcon,
  CalendarIcon,
  LightningIcon,
  CzatIcon,
  PobierzAplikacjeIcon,
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
  /**
   * Pozycja znika, gdy serwis chodzi już jako zainstalowana aplikacja.
   * Dotyczy „Pobierz aplikację": pokazywanie tego w środku zainstalowanej
   * aplikacji wygląda jak usterka.
   */
  tylkoWPrzegladarce?: boolean;
}

export const POZYCJE_KLUBU: PozycjaKlubu[] = [
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
  /*
   * Czat (5.09.2026). Stoi PRZED „30 dniami”, a nie na końcu przed
   * aplikacją: to jedyna pozycja klubu, do której wraca się kilka razy
   * dziennie, więc powinna być w zasięgu kciuka, a nie za wyzwaniem,
   * które odhacza się raz na dobę.
   */
  {
    href: "/aga-club/czat",
    ikona: CzatIcon,
    tytul: "Czat klubu",
    krotki: "Czat",
    opis: "Codzienne „co dziś gotujecie” z innymi klubowiczkami.",
    prefiksy: ["/aga-club/czat"],
  },
  {
    href: "/aga-club/30-dni-z-aga",
    ikona: CalendarIcon,
    tytul: "30 dni z Thermomixem",
    krotki: "30 dni",
    opis: "Trzydzieści zadań, po jednym dziennie.",
    prefiksy: ["/aga-club/30-dni-z-aga"],
  },
  /*
   * „Pobierz aplikację" na samym końcu paska (prośba Michała, 4.09.2026:
   * „usuń tutaj Mój pulpit, a daj na końcu pobierz aplikację").
   *
   * Prowadzi do sekcji instalacji na /aga-club — tam, gdzie Michał chciał
   * ją mieć („aplikacja niech będzie do pobrania na stronie aga klub po
   * zalogowaniu"). To jedyna pozycja paska, która nie jest częścią klubu,
   * tylko sposobem na wygodniejsze dojście do niego — stąd na końcu,
   * a nie między dietami a poradnikiem.
   */
  {
    href: "/aga-club#aplikacja",
    ikona: PobierzAplikacjeIcon,
    tytul: "Pobierz aplikację",
    krotki: "Aplikacja",
    opis: "Dodaj Aga Club na ekran główny telefonu.",
    // Pusta lista: ta pozycja nigdy nie podświetla się jako bieżąca.
    // Kotwica na innej stronie to nie jest „miejsce, w którym jesteś".
    prefiksy: [],
    tylkoWPrzegladarce: true,
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
