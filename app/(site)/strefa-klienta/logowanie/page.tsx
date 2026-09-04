import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { ClientLoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Logowanie — Strefa Klienta | Aga Horche",
  robots: { index: false, follow: false },
};

export default async function ClientLoginPage({
  searchParams,
}: PageProps<"/strefa-klienta/logowanie">) {
  const client = await getCurrentClient();
  if (client) {
    redirect("/strefa-klienta");
  }

  const params = await searchParams;
  const nextParam = params?.next;
  const next = typeof nextParam === "string" && nextParam.startsWith("/strefa-klienta") ? nextParam : "/strefa-klienta";

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-4 py-16">
      <div className="w-full max-w-sm rounded-lg border border-border bg-neutral-0 p-8 shadow-[var(--shadow-card)]">
        <h1 className="mb-1 font-display text-xl text-neutral-900">Strefa Klienta</h1>
        <p className="mb-6 text-sm text-muted">Zaloguj się, aby zobaczyć pełne plany diet i listy zakupów.</p>
        <ClientLoginForm next={next} />
        {/*
          Sierpień 2026: bez linku do rejestracji. Konta zakłada Aga swoim
          klientom, więc odsyłamy do kontaktu zamiast do formularza —
          samodzielne zakładanie konta nie jest już ścieżką w serwisie.
        */}
        <p className="mt-6 text-center text-sm text-muted">
          Konto w Strefie Klienta zakłada Aga swoim klientom.{" "}
          <Link href="/kontakt" className="font-medium text-brand-700 hover:underline">
            Napisz do Agi
          </Link>
          , jeśli masz Thermomixa od niej, a nie masz jeszcze dostępu.
        </p>
        {/*
          4.09.2026 — dopisane po uwadze Michała, że nie ma jak odzyskać
          hasła. Samoobsługowego resetu przez e-mail nie ma (wymagałby
          wysyłki do klientek), więc zamiast martwego linku „nie pamiętam
          hasła" mówimy wprost, co zrobić: Aga ustawia nowe hasło w panelu
          i je przekazuje. To ścieżka, która naprawdę działa.
        */}
        <p className="mt-2 text-center text-sm text-muted">
          Nie pamiętasz hasła?{" "}
          <Link href="/kontakt" className="font-medium text-brand-700 hover:underline">
            Napisz do Agi
          </Link>
          , a ustawi Ci nowe.
        </p>
      </div>
    </div>
  );
}
