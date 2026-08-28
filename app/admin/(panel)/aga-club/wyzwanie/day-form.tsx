"use client";

import { useActionState } from "react";
import { saveChallengeDayAction } from "./actions";
import { Input, Label, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";
import type { AgaClubChallengeDay } from "@/types/aga-club";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

export function DayForm({ day }: { day: AgaClubChallengeDay }) {
  const [state, formAction, pending] = useActionState(saveChallengeDayAction, initialState);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      <input type="hidden" name="day" value={day.day} />

      <div>
        <Label htmlFor="task">Zadanie na dzień</Label>
        <Textarea id="task" name="task" defaultValue={day.task} rows={3} placeholder="Co użytkownik ma dziś zrobić?" />
      </div>

      <div>
        <Label htmlFor="tip">Porada Agi</Label>
        <Textarea id="tip" name="tip" defaultValue={day.tip} rows={3} placeholder="Krótka wskazówka od Agi." />
      </div>

      <div>
        <Label htmlFor="videoUrl">Link do wideo (opcjonalnie)</Label>
        <Input id="videoUrl" name="videoUrl" defaultValue={day.videoUrl ?? ""} placeholder="https://youtube.com/..." />
      </div>

      <Checkbox name="active" defaultChecked={day.active} label="Opublikowany (widoczny w publicznym wyzwaniu)" />

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz dzień"}
        </Button>
        <ButtonLink href="/admin/aga-club/wyzwanie" variant="ghost">
          Anuluj
        </ButtonLink>
      </div>
    </form>
  );
}
