import Link from "next/link";
import { POZYCJE_KLUBU } from "@/data/aga-club/pozycje-klubu";

/**
 * OŚ PLIKU
 * Kafelki „Co masz w klubie" na pulpicie Strefy Klienta — te same rzeczy
 * co w pasku klubu, ale z jednym zdaniem wyjaśnienia przy każdej.
 *
 * PO CO (prośba Michała, 4.09.2026: „po zalogowaniu niech będzie
 * wyświetlone mini menu w panelu"). Do tej pory pulpit pokazywał wyłącznie
 * diety. Reszta klubu — przepisy, lodówka, poradnik, wyzwanie — była
 * osiągalna tylko przez górne menu serwisu, więc po zalogowaniu klientka
 * lądowała na stronie, która nie mówiła jej, co jeszcze dostała.
 *
 * DLACZEGO ZOSTAJE, SKORO JEST JUŻ PASEK. Pasek to nawigacja: sześć
 * skrótów, żadnego wyjaśnienia — dobry, gdy już wiesz, dokąd idziesz.
 * Pulpit jest miejscem, w którym klientka ląduje zaraz po zalogowaniu
 * i gdzie pyta „co ja tu właściwie mam". Na to pytanie odpowiada zdanie
 * pod nazwą, nie skrót w pasku.
 *
 * 4.09.2026: zniknął stąd filtr odsiewający „Mój pulpit" — ta pozycja nie
 * istnieje już w POZYCJE_KLUBU wcale (Michał usunął ją ze wszystkich menu),
 * więc filtr nie odsiewał niczego. Warunek, który nigdy nie jest prawdziwy,
 * przy następnym czytaniu tego pliku sugerowałby, że coś tu jest ukrywane.
 */
export function MenuKlubu() {
  return (
    <nav aria-label="Aga Club — co masz w klubie">
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {POZYCJE_KLUBU.map(({ href, ikona: Ikona, tytul, opis }) => (
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
