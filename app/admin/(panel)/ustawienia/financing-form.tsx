"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { saveFinancingSettingsAction } from "./actions";
import { Label, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/admin/toast";
import type { FinancingSettings } from "@/types/financing-settings";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

/**
 * Przełącznik „raty 0% obowiązują" w /admin/ustawienia.
 *
 * Pole komunikatu jest widoczne tylko wtedy, gdy przełącznik jest
 * WYŁĄCZONY — bo tylko wtedy ten tekst gdziekolwiek się pojawia.
 * Pokazywanie go przy włączonych ratach 0% sugerowałoby, że coś jeszcze
 * trzeba uzupełnić, choć nikt tego nie zobaczy. Wartość i tak jedzie
 * w formularzu (pole zostaje w DOM, tylko ukryte), więc po wyłączeniu
 * promocji wraca dokładnie ten tekst, który tu stoi.
 */
export function FinancingForm({ settings }: { settings: FinancingSettings }) {
  const [state, formAction, pending] = useActionState(saveFinancingSettingsAction, initialState);
  const [dostepne, setDostepne] = useState(settings.ratyZeroDostepne);
  const { showToast } = useToast();
  const wasPending = useRef(false);

  useEffect(() => {
    if (wasPending.current && !pending && !state.error) {
      showToast("Ustawienia finansowania zapisane.", "success");
    }
    wasPending.current = pending;
  }, [pending, state.error, showToast]);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      <Card>
        <h2 className="mb-1 font-display text-lg text-neutral-900">Raty 0%</h2>
        <p className="mb-5 text-sm text-muted">
          Ustaw, czy promocja „raty 0%" obowiązuje w tej chwili. Hasło „Raty 0%" zostaje w menu
          i w treściach niezależnie od tego przełącznika — zmienia się tylko to, co strona mówi
          o dostępności.
        </p>

        <Checkbox
          name="ratyZeroDostepne"
          checked={dostepne}
          onChange={(e) => setDostepne(e.currentTarget.checked)}
          label="Raty 0% obowiązują teraz"
        />

        <div className="mt-5 rounded-lg border border-border bg-surface p-4 text-sm leading-relaxed text-neutral-700">
          <p className="mb-2 font-medium text-neutral-900">Co się zmienia po zapisaniu</p>
          {dostepne ? (
            <ul className="list-disc space-y-1 pl-5">
              <li>kalkulator otwiera się na wariancie <strong>RATY 0%</strong>,</li>
              <li>znika plakietka „chwilowo niedostępne" i komunikat pod kalkulatorem,</li>
              <li>tabele na stronach TM7 i porównania pokazują ratę 0%.</li>
            </ul>
          ) : (
            <ul className="list-disc space-y-1 pl-5">
              <li>kalkulator otwiera się na wariancie <strong>RATY 0,6%</strong>,</li>
              <li>kafelek 0% dostaje plakietkę „chwilowo niedostępne",</li>
              <li>komunikat poniżej pojawia się nad kalkulatorem i na stronie /finansowanie.</li>
            </ul>
          )}
        </div>
      </Card>

      <Card className={dostepne ? "hidden" : undefined}>
        <Label htmlFor="ratyZeroKomunikat">Komunikat, gdy rat 0% nie ma</Label>
        <Textarea
          id="ratyZeroKomunikat"
          name="ratyZeroKomunikat"
          rows={4}
          defaultValue={settings.ratyZeroKomunikat}
        />
        <p className="mt-2 text-sm text-muted">
          Widoczny nad kalkulatorem rat i na stronie „Raty i finansowanie". Napisz go tak, jak
          powiedziałabyś to klientce przez telefon.
        </p>
      </Card>

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz ustawienia"}
        </Button>
        {settings.updatedBy && (
          <p className="text-sm text-muted">
            Ostatnia zmiana: {new Date(settings.updatedAt).toLocaleString("pl-PL")} ({settings.updatedBy})
          </p>
        )}
      </div>
    </form>
  );
}
