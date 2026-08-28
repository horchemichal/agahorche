import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentClient } from "@/lib/auth/client-auth";
import { ClientRegisterForm } from "./register-form";

export const metadata: Metadata = {
  title: "Rejestracja — Strefa Klienta | Aga Horche",
  robots: { index: false, follow: false },
};

export default async function ClientRegisterPage() {
  const client = await getCurrentClient();
  if (client) {
    redirect("/strefa-klienta");
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-4 py-16">
      <div className="relative w-full max-w-md rounded-lg border border-border bg-neutral-0 p-8 shadow-[var(--shadow-card)]">
        <h1 className="mb-1 font-display text-xl text-neutral-900">Załóż konto w Strefie Klienta</h1>
        <p className="mb-6 text-sm text-muted">
          Pełne plany diet na 7 dni, listy zakupów i eksport do PDF — bez umawiania prezentacji.
        </p>
        <ClientRegisterForm />
        <p className="mt-6 text-center text-sm text-muted">
          Masz już konto?{" "}
          <Link href="/strefa-klienta/logowanie" className="font-medium text-brand-700 hover:underline">
            Zaloguj się
          </Link>
        </p>
      </div>
    </div>
  );
}
