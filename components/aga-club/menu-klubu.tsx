import Link from "next/link";
import { ChefHatIcon, CartIcon, LeafIcon, CalendarIcon, LightningIcon } from "@/components/marketing/icons";

/**
 * OŚ PLIKU
 * Mini-menu Aga Club na pulpicie Strefy Klienta — pięć rzeczy, które
 * klientka dostaje po zalogowaniu, w jednym miejscu.
 *
 * PO CO (prośba Michała, 4.09.2026: „po zalogowaniu niech będzie
 * wyświetlone mini menu w panelu"). Do tej pory pulpit pokazywał wyłącznie
 * diety. Reszta klubu — przepisy, lodówka, poradnik, wyzwanie — była
 * osiągalna tylko przez górne menu serwisu, więc po zalogowaniu klientka
 * lądowała na stronie, która nie mówiła jej, co jeszcze dostała.
 *
 * DLACZEGO NIE CZYTAM TEGO Z AGA_CLUB_FEATURES. Tamta lista opisuje
 * kafelki na PUBLICZNEJ stronie klubu i ma inne zadanie: zachęcić kogoś,
 * kto jeszcze nie ma konta. Tutaj mówimy do osoby, która już weszła —
 * krótko i bez sprzedaży. Wspólny plik oszczędziłby pięciu linijek,
 * a związałby ze sobą dwa teksty, które mają się różnić.
 */
const POZYCJE = [
  {
    href: "/diety",
    ikona: LeafIcon,
    tytul: "Diety",
    opis: "Pełne jadłospisy 7 i 14 dni z listą zakupów.",
  },
  {
    href: "/przepisy",
    ikona: ChefHatIcon,
    tytul: "Co ugotować dzisiaj?",
    opis: "Powiedz, ile masz czasu — pokażę pasujące dania.",
  },
  {
    href: "/przepisy/co-mam-w-lodowce",
    ikona: CartIcon,
    tytul: "Co mam w lodówce?",
    opis: "Zaznacz produkty, zobacz, co da się z nich zrobić.",
  },
  {
    href: "/poradnik",
    ikona: LightningIcon,
    tytul: "Poradnik kuchenny",
    opis: "Kuchenne pytania i wpadki — krótkie odpowiedzi.",
  },
  {
    href: "/aga-club/30-dni-z-aga",
    ikona: CalendarIcon,
    tytul: "30 dni z Thermomixem",
    opis: "Trzydzieści zadań, po jednym dziennie.",
  },
] as const;

export function MenuKlubu() {
  return (
    <nav aria-label="Aga Club — co masz w klubie">
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {POZYCJE.map(({ href, ikona: Ikona, tytul, opis }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex h-full items-start gap-3 rounded-2xl border border-border bg-neutral-0 p-4 transition-colors hover:border-brand-400"
            >
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                <Ikona width={18} height={18} />
              </span>
              <span className="min-w-0">
                <span className="block font-medium text-neutral-900">{tytul}</span>
                <span className="mt-0.5 block text-sm leading-relaxed text-muted">{opis}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
