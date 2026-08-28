"use client";

import { useActionState } from "react";
import { savePromotionAction } from "./actions";
import { Input, Label, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";
import type { Promotion } from "@/types/promotion";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

function toDateInputValue(iso: string | undefined): string {
  if (!iso) return "";
  return iso.slice(0, 10);
}

export function PromotionForm({ promotion }: { promotion?: Promotion }) {
  const [state, formAction, pending] = useActionState(savePromotionAction, initialState);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      {promotion && <input type="hidden" name="id" value={promotion.id} />}

      <div>
        <Label htmlFor="title">Tytuł</Label>
        <Input id="title" name="title" defaultValue={promotion?.title} required placeholder="Wiosenna promocja na TM7" />
      </div>

      <div>
        <Label htmlFor="shortDescription">Krótki opis (karta na stronie głównej)</Label>
        <Textarea id="shortDescription" name="shortDescription" defaultValue={promotion?.shortDescription} rows={2} required />
      </div>

      <div>
        <Label htmlFor="fullDescription">Pełny opis</Label>
        <Textarea id="fullDescription" name="fullDescription" defaultValue={promotion?.fullDescription} rows={4} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="ctaLabel">Tekst przycisku CTA</Label>
          <Input id="ctaLabel" name="ctaLabel" defaultValue={promotion?.ctaLabel ?? "Dowiedz się więcej"} required />
        </div>
        <div>
          <Label htmlFor="ctaHref">Link przycisku CTA</Label>
          <Input id="ctaHref" name="ctaHref" defaultValue={promotion?.ctaHref ?? "/prezentacja"} required />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <Label htmlFor="startsAt">Data rozpoczęcia</Label>
          <Input id="startsAt" name="startsAt" type="date" defaultValue={toDateInputValue(promotion?.startsAt)} required />
        </div>
        <div>
          <Label htmlFor="endsAt">Data zakończenia</Label>
          <Input id="endsAt" name="endsAt" type="date" defaultValue={toDateInputValue(promotion?.endsAt)} required />
        </div>
        <div>
          <Label htmlFor="priority">Priorytet</Label>
          <Input id="priority" name="priority" inputMode="numeric" defaultValue={promotion?.priority ?? 0} />
        </div>
      </div>

      <Checkbox
        name="isDraft"
        defaultChecked={promotion?.isDraft ?? false}
        label="Szkic (nie pokazuj publicznie, nawet jeśli data mieści się w zakresie)"
      />

      <p className="text-xs text-muted">
        Status (DRAFT / SCHEDULED / ACTIVE / EXPIRED) jest liczony automatycznie z powyższych dat —
        nie ustawia się go ręcznie.
      </p>

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz promocję"}
        </Button>
        <ButtonLink href="/admin/promocje" variant="ghost">
          Anuluj
        </ButtonLink>
      </div>
    </form>
  );
}
