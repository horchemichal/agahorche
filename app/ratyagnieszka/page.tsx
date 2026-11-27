import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import { CIASTKO_RATY, maDostepDoRat } from "@/lib/raty/dostep";
import { OKRES_PRZECHOWYWANIA_GODZ } from "@/lib/raty/pola";
import { BramkaHasla } from "./bramka-hasla";
import { FormularzRaty } from "./formularz-raty";

/**
 * OŚ PLIKU
 * Ukryta strona wniosku „Raty 0%” (27.11.2026). Nie ma jej w menu ani
 * w mapie strony, ma noindex. Wejście tylko z hasłem (sprawdza serwer).
 */

export const metadata: Metadata = {
  title: "Wniosek – raty 0%",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export const dynamic = "force-dynamic";

export default async function StronaRaty() {
  const sklep = await cookies();
  const dostep = maDostepDoRat(sklep.get(CIASTKO_RATY)?.value);

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:py-12">
      <header className="mb-8 flex flex-col items-center text-center">
        <div className="leading-tight">
          <span className="block font-display text-2xl font-semibold text-neutral-900">Agnieszka</span>
          <span className="block text-[0.7rem] uppercase tracking-wide text-muted">Oficjalny Przedstawiciel Thermomix®</span>
        </div>
        <Image
          src="/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp"
          alt="Agnieszka – przedstawiciel Thermomix"
          width={1200}
          height={1200}
          priority
          sizes="(max-width: 640px) 80vw, 320px"
          className="mt-5 h-auto w-full max-w-[320px] rounded-2xl shadow-sm"
        />
      </header>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Wniosek o raty 0%</h1>
      <p className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-900">
        <strong>Informacja o danych:</strong> dane z tego formularza są usuwane z naszej bazy danych automatycznie po{" "}
        {OKRES_PRZECHOWYWANIA_GODZ} godzinach. Służą wyłącznie do przygotowania wniosku o raty.
      </p>
      <div className="mt-8">{dostep ? <FormularzRaty /> : <BramkaHasla />}</div>
    </main>
  );
}
