"use client";

import { useActionState, useState } from "react";
import { savePoradnikAction } from "./actions";
import { Input, Label, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";
import { DZIALY_PORADNIKA } from "@/types/poradnik";
import type { PoradnikWpis } from "@/types/poradnik";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };
const selectClass =
  "w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-base text-neutral-900";

/**
 * Formularz wpisu poradnika.
 *
 * PODPOWIEDŹ DZIAŁU zmienia się pod selectem — każdy dział ma napisane,
 * czego się po nim spodziewamy (patrz DZIALY_PORADNIKA). To jedyne miejsce,
 * w którym Aga widzi te wskazówki w momencie pisania, a nie po fakcie.
 *
 * ADRES może zostać pusty — wtedy wyliczy się z tytułu przy zapisie.
 */
export function PoradnikForm({ wpis }: { wpis?: PoradnikWpis }) {
  const [state, formAction, pending] = useActionState(savePoradnikAction, initialState);
  const [dzial, setDzial] = useState(wpis?.dzial ?? DZIALY_PORADNIKA[0].slug);

  const wybrany = DZIALY_PORADNIKA.find((d) => d.slug === dzial);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      {wpis && <input type="hidden" name="id" value={wpis.id} />}

      <div>
        <Label htmlFor="dzial">Dział</Label>
        <select
          id="dzial"
          name="dzial"
          value={dzial}
          onChange={(e) => setDzial(e.currentTarget.value)}
          className={selectClass}
        >
          {DZIALY_PORADNIKA.map((d) => (
            <option key={d.slug} value={d.slug}>
              {d.nazwa}
            </option>
          ))}
        </select>
        {wybrany && (
          <p className="mt-2 rounded-lg border border-border bg-surface p-3 text-sm leading-relaxed text-neutral-700">
            {wybrany.podpowiedz}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="tytul">Tytuł</Label>
        <Input
          id="tytul"
          name="tytul"
          defaultValue={wpis?.tytul}
          placeholder="np. Zupa wyszła za słona"
          required
        />
      </div>

      <div>
        <Label htmlFor="lead">Jedno zdanie na kafelku</Label>
        <Input
          id="lead"
          name="lead"
          defaultValue={wpis?.lead}
          placeholder="Krótko: co czytelniczka z tego będzie mieć"
        />
      </div>

      <div>
        <Label htmlFor="tresc">Treść</Label>
        <Textarea id="tresc" name="tresc" defaultValue={wpis?.tresc} rows={14} required />
        <p className="mt-2 text-sm text-muted">
          Pusta linia zaczyna nowy akapit. Linia zaczynająca się od „- ” to punkt listy.
          Tekst w podwójnych gwiazdkach (**tak**) będzie pogrubiony.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="slug">Adres strony (puste = wyliczy się z tytułu)</Label>
          <Input id="slug" name="slug" defaultValue={wpis?.slug ?? ""} placeholder="np. mrozenie-ziemniaki" />
        </div>
        <div>
          <Label htmlFor="kolejnosc">Kolejność (niższa = wyżej)</Label>
          <Input id="kolejnosc" name="kolejnosc" inputMode="numeric" defaultValue={wpis?.kolejnosc ?? 0} />
        </div>
      </div>

      <div>
        <Label htmlFor="przepisId">Identyfikator przepisu (opcjonalnie)</Label>
        <Input id="przepisId" name="przepisId" defaultValue={wpis?.przepisId ?? ""} placeholder="np. cd-r342470" />
        <p className="mt-2 text-sm text-muted">
          Jeśli wpis prowadzi do konkretnego dania, wpisz tu jego identyfikator z bazy przepisów —
          pod treścią pojawi się karta z linkiem do Cookidoo. Zostaw puste, jeśli wpis nie dotyczy
          jednego przepisu.
        </p>
      </div>

      <div className="space-y-3">
        <Checkbox
          name="wlasne"
          defaultChecked={wpis?.wlasne ?? true}
          label="To moja treść (odznacz, jeśli to wgrana wiedza ogólna do przepisania)"
        />
        <Checkbox
          name="opublikowany"
          defaultChecked={wpis?.opublikowany ?? true}
          label="Opublikowany (widoczny na stronie)"
        />
      </div>

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz wpis"}
        </Button>
        <ButtonLink href="/admin/poradnik" variant="ghost">
          Anuluj
        </ButtonLink>
      </div>
    </form>
  );
}
