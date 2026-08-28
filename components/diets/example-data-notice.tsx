/**
 * "This is illustrative content" disclaimer — same idiom as the
 * installment calculator's "ma charakter orientacyjny" note. Shown
 * wherever an example plan's calories/macros are on screen so nobody
 * mistakes a demo dish for Aga's verified, reviewed recipe (spec §23/§42).
 */
export function ExampleDataNotice({ className }: { className?: string }) {
  return (
    <p className={`text-xs text-muted ${className ?? ""}`}>
      Przykładowy jadłospis ma charakter poglądowy — wartości kaloryczne i makroskładniki są
      orientacyjne i nie zastępują konsultacji z dietetykiem.
    </p>
  );
}
