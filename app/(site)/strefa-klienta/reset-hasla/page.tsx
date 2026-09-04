import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { FormularzProsby } from "./formularze";

export const metadata: Metadata = {
  title: "Nowe hasło — Strefa Klienta",
  robots: { index: false, follow: false },
};

/**
 * Krok 1 resetu hasła — „nie pamiętam hasła".
 *
 * `noindex`, bo to strona obsługowa, nie treść: w wynikach wyszukiwania
 * nie ma czego szukać, a formularz odzyskiwania dostępu tym bardziej nie
 * powinien tam trafiać.
 *
 * Zalogowaną klientkę odsyłamy na pulpit. Skoro ma czynną sesję, hasła
 * nie potrzebuje — a formularz „podaj e-mail" w tym momencie tylko myli.
 */
export default async function ResetHaslaPage() {
  const client = await getCurrentClient();
  if (client) redirect("/strefa-klienta");

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-4 py-16">
      <div className="w-full max-w-sm rounded-lg border border-border bg-neutral-0 p-8 shadow-[var(--shadow-card)]">
        <h1 className="mb-1 font-display text-xl text-neutral-900">Nowe hasło</h1>
        <p className="mb-6 text-sm leading-relaxed text-muted">
          Podaj adres e-mail, na który masz konto w Strefie Klienta. Wyślemy na niego link do
          ustawienia nowego hasła.
        </p>
        <FormularzProsby />
      </div>
    </div>
  );
}
