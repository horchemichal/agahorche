"use client";

import { useId, useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DOWN_PAYMENT_PRESETS = [0, 500, 1000, 1500, 2000];
const MONTH_OPTIONS = [10, 12, 15, 20, 24, 36];
const FLAT_MONTHLY_RATE = 0.006; // 0,6% miesięcznie — jedyne dostępne finansowanie

function formatZl(value: number): string {
  return new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 0 }).format(Math.round(value));
}

function formatZlPrecise(value: number): string {
  return new Intl.NumberFormat("pl-PL", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

/**
 * Kalkulator rat. Cała matematyka liczy się po stronie klienta z
 * `initialPriceZl` — z prawdziwej ceny aktywnej oferty, którą podaje
 * komponent serwerowy, nigdy z drugiej zaszytej liczby.
 *
 * 1.09.2026 — JEDEN WARIANT: 0,6% miesięcznie. Wcześniej kalkulator miał
 * dwa tryby, a domyślnym były RATY 0% z RRSO 0%. Aga potwierdziła, że rat
 * 0% już nie ma, więc wybór został usunięty, a nie tylko przestawiony:
 * kalkulator, który dalej pozwala kliknąć nieistniejące 0%, pokazywałby
 * ratę, której nikt nie dostanie. Zostaje symulacja przy stałej stawce
 * 0,6% miesięcznie, wprost oznaczona jako orientacyjna — to nie jest
 * wiążąca oferta kredytowa (patrz zastrzeżenie na dole).
 *
 * CZEGO TU NIE MA: RRSO. Przy oprocentowaniu 0,6% miesięcznie RRSO nie
 * wynosi zera i nie znamy jego wartości — a RRSO to liczba regulowana,
 * której nie wolno oszacować „na oko". Podaje ją instytucja finansująca
 * przy umowie.
 */
export function InstallmentCalculator({ initialPriceZl }: { initialPriceZl: number }) {
  const [priceZl, setPriceZl] = useState(initialPriceZl);
  const [downPayment, setDownPayment] = useState(1000);
  const [customDownPayment, setCustomDownPayment] = useState(false);
  const [months, setMonths] = useState(24);
  const priceInputId = useId();

  const financedAmount = Math.max(0, priceZl - downPayment);
  const activeMonths = months;

  const { monthlyPayment, totalToRepay } = useMemo(() => {
    if (financedAmount <= 0 || activeMonths <= 0) return { monthlyPayment: 0, totalToRepay: 0 };
    // Stała stawka: odsetki naliczane od kwoty finansowania za cały okres,
    // rozłożone równo na raty.
    const totalInterest = financedAmount * FLAT_MONTHLY_RATE * activeMonths;
    const total = financedAmount + totalInterest;
    return { monthlyPayment: total / activeMonths, totalToRepay: total };
  }, [financedAmount, activeMonths]);

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
            <p className="mb-2 text-sm font-medium text-neutral-700">3. Finansowanie</p>
            <div className="rounded-lg border border-brand-600 bg-brand-50 p-4">
              <p className="font-display text-base font-semibold text-brand-700">RATY 0,6%</p>
              <p className="mt-1 text-xs text-muted">Oprocentowanie 0,6% miesięcznie</p>
              <div className="mt-2 flex justify-between text-xs text-neutral-600">
                <span>Liczba rat</span>
                <span className="font-medium text-neutral-900">do {MONTH_OPTIONS[MONTH_OPTIONS.length - 1]}</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-xs font-medium text-neutral-600">Wybierz liczbę rat</p>
              <div className="flex flex-wrap gap-2">
                {MONTH_OPTIONS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMonths(m)}
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
                <dd className="font-medium text-neutral-900">{activeMonths} rat 0,6%</dd>
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
