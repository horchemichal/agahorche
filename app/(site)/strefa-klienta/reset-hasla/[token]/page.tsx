import type { Metadata } from "next";
import Link from "next/link";
import { kontoZTokenu } from "@/lib/auth/reset-hasla";
import { FormularzNowegoHasla } from "../formularze";

export const metadata: Metadata = {
  title: "Ustaw nowe hasło — Strefa Klienta",
  robots: { index: false, follow: false },
};

/**
 * Krok 2 i 3 resetu — strona spod linku z maila.
 *
 * Token sprawdzamy TU, przed pokazaniem formularza, żeby ktoś z wygasłym
 * linkiem dowiedział się tego od razu, a nie dopiero po wymyśleniu
 * i dwukrotnym wpisaniu nowego hasła. Drugie, wiążące sprawdzenie dzieje
 * się przy zapisie, w jednej transakcji ze zmianą hasła — patrz
 * `ustawNoweHasloZTokenu` w lib/auth/reset-hasla.ts.
 *
 * NIE POKAZUJEMY ADRESU E-MAIL KONTA. Kusi, żeby napisać „ustawiasz hasło
 * dla ania@…", ale wtedy każdy, kto zobaczy ten link (cudzy telefon,
 * przekazany mail), pozna adres właścicielki konta. Imię wystarczy.
 */
export default async function UstawHasloPage({
  params,
}: PageProps<"/strefa-klienta/reset-hasla/[token]">) {
  const { token } = await params;
  const konto = await kontoZTokenu(token);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-4 py-16">
      <div className="w-full max-w-sm rounded-lg border border-border bg-neutral-0 p-8 shadow-[var(--shadow-card)]">
        {konto ? (
          <>
            <h1 className="mb-1 font-display text-xl text-neutral-900">
              Ustaw nowe hasło
            </h1>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Cześć {konto.displayName.split(" ")[0]}! Wpisz nowe hasło do swojego konta w Strefie
              Klienta.
            </p>
            <FormularzNowegoHasla token={token} />
          </>
        ) : (
          <>
            <h1 className="mb-1 font-display text-xl text-neutral-900">Link już nie działa</h1>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Ten link wygasł, został już użyty albo jest nieprawidłowy. Linki do zmiany hasła
              działają godzinę i tylko raz — poproś o nowy.
            </p>
            <Link
              href="/strefa-klienta/reset-hasla"
              className="block rounded-full bg-brand-600 px-5 py-3 text-center font-medium text-neutral-0 hover:bg-brand-700"
            >
              Wyślij nowy link
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
