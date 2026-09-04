import Link from "next/link";

/**
 * OŚ PLIKU
 * Komunikat w miejscu, w którym niezalogowanej osobie pokazywałyby się
 * przepisy — w „Co ugotować dzisiaj?" i w „Co mam w lodówce?".
 *
 * DECYZJA AGI (4.09.2026): „moduł może zostać dla niezalogowanych, ale nie
 * pokazuje przepisów, tylko na dole napis, że taki moduł jest tylko dla
 * klientów Agi Horche i osób polecających".
 *
 * DLACZEGO FILTRY ZOSTAJĄ WIDOCZNE. Można było zamknąć całą stronę za
 * logowaniem. Wtedy jednak osoba z Google trafiałaby na sam formularz
 * logowania i nie miała skąd wiedzieć, co tu w ogóle jest. Tak widzi
 * narzędzie, widzi ILE dań pasuje do jej ustawień — i dopiero lista jest
 * za progiem. To jest zaproszenie, a nie ściana.
 *
 * DLACZEGO LICZBA WYNIKÓW ZOSTAJE. Bez niej suwaki i przyciski nie robią
 * nic widocznego i moduł wygląda na zepsuty. Liczba to nie przepis.
 */
export function TylkoDlaKlubu({ coBySie }: { coBySie: string }) {
  return (
    <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 md:p-8">
      <h3 className="font-display text-lg text-neutral-900">{coBySie}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700">
        Ten moduł jest częścią <strong>Aga Club</strong> — dostępną dla moich klientów, czyli
        osób, które kupiły u mnie Thermomix, oraz dla osób, które poleciły mi sprzedaż.
      </p>
      <div className="mt-5 flex flex-wrap gap-2.5">
        <Link
          href="/strefa-klienta/logowanie"
          className="inline-flex h-11 items-center rounded-full bg-brand-700 px-5 text-sm font-medium text-neutral-0 hover:bg-brand-800"
        >
          Zaloguj się
        </Link>
        <Link
          href="/prezentacja"
          className="inline-flex h-11 items-center rounded-full border border-brand-300 bg-neutral-0 px-5 text-sm font-medium text-brand-800 hover:border-brand-500"
        >
          Umów bezpłatną prezentację →
        </Link>
      </div>
    </div>
  );
}
