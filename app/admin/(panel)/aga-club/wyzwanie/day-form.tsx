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
        <Textarea id="tip" name="tip" defaultValue={day.tip} rows={10} placeholder="Krótka wskazówka od Agi." />
        <p className="mt-2 text-sm text-muted">
          Pusta linia zaczyna nowy akapit. Linia od „- ” to punkt listy. Tekst w podwójnych
          gwiazdkach (**tak**) będzie pogrubiony.
        </p>
      </div>

      <div>
        <Label htmlFor="przepisId">Przepis na ten dzień (opcjonalnie)</Label>
        <Input id="przepisId" name="przepisId" defaultValue={day.przepisId ?? ""} placeholder="np. cd-r10001" />
        <p className="mt-2 text-sm text-muted">
          Identyfikator z bazy przepisów. Pod zadaniem pojawi się wtedy nazwa dania i link
          do Cookidoo. Zostaw puste, jeśli tego dnia nie ma nic do ugotowania.
        </p>
      </div>

      <div>
        <Label htmlFor="videoUrl">Link do wideo (opcjonalnie)</Label>
        <Input id="videoUrl" name="videoUrl" defaultValue={day.videoUrl ?? ""} placeholder="https://youtube.com/..." />
      </div>

      <div className="space-y-3">
        <Checkbox
          name="wlasne"
          defaultChecked={day.wlasne}
          label="To moja treść (odznacz, jeśli to wgrany plan startowy do przepisania)"
        />
        <Checkbox name="active" defaultChecked={day.active} label="Opublikowany (widoczny w publicznym wyzwaniu)" />
      </div>

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
