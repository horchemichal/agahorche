"use client";

import { useActionState } from "react";
import { saveFaqAction } from "./actions";
import { Input, Label, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";
import type { CmsFaqEntry } from "@/types/faq";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };
const selectClass = "w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-base text-neutral-900";

export function FaqForm({ entry }: { entry?: CmsFaqEntry }) {
  const [state, formAction, pending] = useActionState(saveFaqAction, initialState);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      {entry && <input type="hidden" name="id" value={entry.id} />}

      <div>
        <Label htmlFor="question">Pytanie</Label>
        <Input id="question" name="question" defaultValue={entry?.question} required />
      </div>

      <div>
        <Label htmlFor="answer">Odpowiedź</Label>
        <Textarea id="answer" name="answer" defaultValue={entry?.answer} rows={5} required />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="entityType">Gdzie ma się pojawić</Label>
          <select id="entityType" name="entityType" defaultValue={entry?.entityType ?? "global"} className={selectClass}>
            <option value="global">Globalnie (strona główna, /faq)</option>
            <option value="page">Konkretna strona CMS</option>
            <option value="product">Konkretny produkt/oferta</option>
            <option value="city">Konkretne miasto</option>
            <option value="article">Konkretny artykuł</option>
            <option value="aga-club">Aga Club</option>
          </select>
        </div>
        <div>
          <Label htmlFor="entityId">Identyfikator powiązania (slug/id — puste dla „Globalnie”)</Label>
          <Input id="entityId" name="entityId" defaultValue={entry?.entityId ?? ""} placeholder="np. krakow" />
        </div>
      </div>

      <div>
        <Label htmlFor="priority">Priorytet (niższy = wyżej na liście)</Label>
        <Input id="priority" name="priority" inputMode="numeric" defaultValue={entry?.priority ?? 0} className="max-w-xs" />
      </div>

      <Checkbox name="active" defaultChecked={entry?.active ?? true} label="Aktywne (widoczne publicznie)" />

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz pytanie"}
        </Button>
        <ButtonLink href="/admin/faq" variant="ghost">
          Anuluj
        </ButtonLink>
      </div>
    </form>
  );
}
