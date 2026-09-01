"use client";

import { useId, useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DOWN_PAYMENT_PRESETS = [0, 500, 1000, 1500, 2000];
const MONTH_OPTIONS = [10, 12, 15, 20, 24];
const RATY0_MONTH_OPTIONS = [10, 12, 15, 20, 24, 36];
const FLAT_MONTHLY_RATE = 0.006; // 0,6% miesięcznie — druga opcja finansowania

function formatZl(value: number): string {
  return new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 0 }).format(Math.round(value));
}

function formatZlPrecise(value: number): string {
  return new Intl.NumberFormat("pl-PL", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

/**
 * Interactive financing calculator (mockup section "Kalkulator rat"). All
 * math runs client-side from `initialPriceZl` — the real active-offer
 * price passed in by the server component that renders this, never a
 * second hardcoded number. Two financing modes, each with its own
 * selectable term length: RATY 0% (RRSO 0%, interest-free — Aga confirmed
 * 2026-08-16 the real financing partner offers the same term choices as the
 * 0,6% option plus 36 months, not just a fixed 36) and a flat-rate
 * simulation at 0,6%/mies. for shorter terms. Clearly marked as
 * orientacyjny — this is not a binding loan offer (see disclaimer at the
 * bottom).
 */
export function InstallmentCalculator({
  initialPriceZl,
  ratyZeroDostepne,
  ratyZeroKomunikat,
}: {
  initialPriceZl: number;
  /**
   * Czy promocja „raty 0%" obowiązuje. Przychodzi z propsa, a nie ze
   * stałej w kodzie, bo od 1.09.2026 Aga przełącza to sama
   * w /admin/ustawienia (patrz financing-settings-repository.ts).
   * Ten komponent jest kliencki, więc wartość musi mu podać komponent
   * serwerowy, który go renderuje.
   */
  ratyZeroDostepne: boolean;
  /** Komunikat pokazywany, gdy rat 0% nie ma. Też z panelu. */
  ratyZeroKomunikat: string;
}) {
  const [priceZl, setPriceZl] = useState(initialPriceZl);
  const [downPayment, setDownPayment] = useState(1000);
  const [customDownPayment, setCustomDownPayment] = useState(false);
  /**
   * Wariant domyślny zależy od tego, co realnie obowiązuje (prośba Agi,
   * 1.09.2026). Gdy rat 0% nie ma, kalkulator otwiera się na 0,6% — czyli
   * na racie, którą klientka faktycznie dostanie. Kafelek 0% zostaje
   * widoczny i klikalny, ale opisany jako chwilowo niedostępny; patrz
   * financing-settings-repository.ts.
   */
  const [financing, setFinancing] = useState<"raty0" | "raty06">(ratyZeroDostepne ? "raty0" : "raty06");
  const [months0, setMonths0] = useState(36);
  const [months06, setMonths06] = useState(12);
  const priceInputId = useId();

  const financedAmount = Math.max(0, priceZl - downPayment);
  const activeMonths = financing === "raty0" ? months0 : months06;

  const { monthlyPayment, totalToRepay } = useMemo(() => {
    if (financedAmount <= 0 || activeMonths <= 0) return { monthlyPayment: 0, totalToRepay: 0 };
    if (financing === "raty0") {
      const monthly = financedAmount / activeMonths;
      return { monthlyPayment: monthly, totalToRepay: financedAmount };
    }
    // Simple flat-rate simulation: interest accrues on the financed amount
    // for the whole term, split evenly across installments.
    const totalInterest = financedAmount * FLAT_MONTHLY_RATE * activeMonths;
    const total = financedAmount + totalInterest;
    return { monthlyPayment: total / activeMonths, totalToRepay: total };
  }, [financedAmount, activeMonths, financing]);

  return (
    <div className="rounded-2xl border border-border bg-neutral-0 p-6 shadow-[var(--shadow-card)] md:p-8">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-600">Kalkulator rat</p>
      <h3 className="mb-6 font-display text-xl text-neutral-900 md:text-2xl">
        Ile zapłacisz za Thermomix® TM7?
      </h3>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="mb-6">
            <label htmlFor={priceInputId} className="mb-2 block text-sm font-medium text-neutral-700">
              1. Cena urządzenia (brutto)
            </label>
            <div className="flex items-baseline gap-2">
              <input
                id={priceInputId}
                type="number"
                min={0}
                step={1}
                value={priceZl}
                onChange={(e) => setPriceZl(Math.max(0, Number(e.target.value) || 0))}
                className="w-32 rounded-md border border-neutral-300 bg-neutral-0 px-3 py-2 font-display text-2xl text-neutral-900"
              />
              <span className="font-display text-2xl text-neutral-900">zł</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-baseline justify-between">
              <p className="text-sm font-medium text-neutral-700">2. Wpłata własna</p>
              <p className="font-display text-lg text-neutral-900">{formatZl(Math.min(downPayment, priceZl))} zł</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {DOWN_PAYMENT_PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setDownPayment(preset);
                    setCustomDownPayment(false);
                  }}
                  className={cn(
                    "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                    !customDownPayment && downPayment === preset
                      ? "border-brand-600 bg-brand-600 text-neutral-0"
                      : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                  )}
                >
                  {preset === 0 ? "0 zł" : `${formatZl(preset)} zł`}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setCustomDownPayment(true)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                  customDownPayment ? "border-brand-600 bg-brand-600 text-neutral-0" : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                )}
              >
                Własna
              </button>
            </div>
            <input
              type="range"
              min={0}
              max={priceZl}
              step={50}
              value={Math.min(downPayment, priceZl)}
              onChange={(e) => {
                setDownPayment(Number(e.target.value));
                setCustomDownPayment(true);
              }}
              className="mt-4 w-full accent-brand-600"
              aria-label="Wpłata własna — suwak"
            />
            <div className="mt-1 flex justify-between text-xs text-muted">
              <span>0 zł</span>
              <span>{formatZl(priceZl)} zł</span>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-neutral-700">3. Wybierz finansowanie</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setFinancing("raty0")}
                className={cn(
                  "rounded-lg border p-4 text-left transition-colors",
                  financing === "raty0" ? "border-brand-600 bg-brand-50" : "border-neutral-300 hover:border-brand-300",
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-display text-base font-semibold text-brand-700">RATY 0%</p>
                  {!ratyZeroDostepne && (
                    <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-neutral-700">
                      chwilowo niedostępne
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted">RRSO 0%</p>
                <div className="mt-2 flex justify-between text-xs text-neutral-600">
                  <span>Liczba rat</span>
                  <span className="font-medium text-neutral-900">do {RATY0_MONTH_OPTIONS[RATY0_MONTH_OPTIONS.length - 1]}</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-600">
                  <span>RRSO</span>
                  <span className="font-medium text-neutral-900">0%</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFinancing("raty06")}
                className={cn(
                  "rounded-lg border p-4 text-left transition-colors",
                  financing === "raty06" ? "border-brand-600 bg-brand-50" : "border-neutral-300 hover:border-brand-300",
                )}
              >
                <p className="font-display text-base font-semibold text-neutral-900">RATY 0,6%</p>
                <p className="mt-1 text-xs text-muted">Oprocentowanie 0,6%</p>
              </button>
            </div>

            {!ratyZeroDostepne && (
              <p className="mt-3 rounded-lg border border-border bg-surface p-3 text-xs leading-relaxed text-neutral-700">
                {ratyZeroKomunikat}
              </p>
            )}

            <div className="mt-4">
              <p className="mb-2 text-xs font-medium text-neutral-600">Wybierz liczbę rat</p>
              <div className="flex flex-wrap gap-2">
                {(financing === "raty0" ? RATY0_MONTH_OPTIONS : MONTH_OPTIONS).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => (financing === "raty0" ? setMonths0(m) : setMonths06(m))}
                    className={cn(
                      "h-9 w-11 rounded-md border text-sm font-medium transition-colors",
                      activeMonths === m ? "border-brand-600 bg-brand-600 text-neutral-0" : "border-neutral-300 text-neutral-700 hover:border-brand-400",
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-1 text-sm font-medium text-neutral-700">4. Twoja rata</p>
            <p className="font-display text-4xl text-brand-700">
              {formatZlPrecise(monthlyPayment)} <span className="text-lg text-muted">zł / mies.</span>
            </p>
            <p className="mt-1 text-sm text-muted">Łącznie do spłaty: {formatZlPrecise(totalToRepay)} zł</p>
          </div>

          <div className="rounded-lg bg-surface p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Pozostaje do sfinansowania</p>
            <p className="mt-1 font-display text-2xl text-neutral-900">{formatZl(financedAmount)} zł</p>
          </div>

          <div className="rounded-lg border border-border p-4 text-sm">
            <p className="mb-2 font-medium text-neutral-800">Twój wariant</p>
            <dl className="space-y-1.5">
              <div className="flex justify-between">
                <dt className="text-muted">Cena urządzenia</dt>
                <dd className="font-medium text-neutral-900">{formatZl(priceZl)} zł</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Wpłata własna</dt>
                <dd className="font-medium text-neutral-900">{formatZl(downPayment)} zł</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Finansowanie</dt>
                <dd className="font-medium text-neutral-900">{financing === "raty0" ? `${activeMonths} rat 0%` : `${activeMonths} rat 0,6%`}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Liczba rat</dt>
                <dd className="font-medium text-neutral-900">{activeMonths}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Twoja rata</dt>
                <dd className="font-medium text-neutral-900">{formatZlPrecise(monthlyPayment)} zł/mies.</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-2.5">
            <ButtonLink href="/prezentacja" className="justify-center">
              Chcę taki wariant →
            </ButtonLink>
            <ButtonLink href="/finansowanie" variant="outline" className="justify-center">
              Zapytaj Agę o finansowanie
            </ButtonLink>
          </div>
        </div>
      </div>

      <p className="mt-6 border-t border-border pt-4 text-xs text-muted">
        Kalkulator ma charakter orientacyjny. Ostateczne warunki finansowania zależą od aktualnej
        oferty oraz decyzji instytucji finansującej. Szczegółowe warunki finansowania Aga potwierdza
        indywidualnie.
      </p>
    </div>
  );
}
