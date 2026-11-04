"use client";

import { useActionState, useState } from "react";
import { saveCrmKlientAction } from "./actions";
import { Input, Label, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CrmKlient, CrmPolecenie } from "@/types/crm";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

/** Duży „kafelek" wyboru — wygodny do klikania kciukiem na telefonie. */
function Wybor({
  name,
  value,
  checked,
  onChange,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <label
      className={cn(
        "flex flex-1 cursor-pointer items-center gap-2.5 rounded-md border px-4 py-3 text-base transition-colors",
        checked ? "border-brand-500 bg-brand-50 text-brand-800" : "border-neutral-300 bg-neutral-0 text-neutral-800",
      )}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="h-4 w-4 accent-brand-600" />
      {children}
    </label>
  );
}

export function CrmForm({ klient }: { klient?: CrmKlient }) {
  const [state, formAction, pending] = useActionState(saveCrmKlientAction, initialState);
  const [polecenie, setPolecenie] = useState<CrmPolecenie | "">(klient?.polecenie ?? "");
  const [kupil, setKupil] = useState<"tak" | "nie" | "">(klient ? (klient.kupil ? "tak" : "nie") : "");

  return (
    <form action={formAction} className="max-w-xl space-y-6">
      {klient && <input type="hidden" name="id" value={klient.id} />}

      <div>
        <Label htmlFor="imieNazwisko">1. Imię i nazwisko</Label>
        <Input id="imieNazwisko" name="imieNazwisko" defaultValue={klient?.imieNazwisko} autoComplete="off" required />
      </div>

      <div>
        <Label htmlFor="miejscowosc">2. Miejscowość</Label>
        <Input id="miejscowosc" name="miejscowosc" defaultValue={klient?.miejscowosc} autoComplete="off" required />
      </div>

      <fieldset>
        <legend className="mb-1.5 block text-sm font-medium text-neutral-700">3. Kto polecił</legend>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Wybor name="polecenie" value="osoba" checked={polecenie === "osoba"} onChange={() => setPolecenie("osoba")}>
            Osoba
          </Wybor>
          <Wybor name="polecenie" value="strona-www" checked={polecenie === "strona-www"} onChange={() => setPolecenie("strona-www")}>
            Strona www
          </Wybor>
        </div>
        {polecenie === "osoba" && (
          <div className="mt-3">
            <Label htmlFor="polecil">Imię i nazwisko osoby polecającej</Label>
            <Input id="polecil" name="polecil" defaultValue={klient?.polecil ?? ""} autoComplete="off" required />
          </div>
        )}
      </fieldset>

      <fieldset>
        <legend className="mb-1.5 block text-sm font-medium text-neutral-700">4. Status</legend>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Wybor name="kupil" value="tak" checked={kupil === "tak"} onChange={() => setKupil("tak")}>
            Kupił
          </Wybor>
          <Wybor name="kupil" value="nie" checked={kupil === "nie"} onChange={() => setKupil("nie")}>
            Nie kupił
          </Wybor>
        </div>
      </fieldset>

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : klient ? "Zapisz zmiany" : "Dodaj klienta"}
        </Button>
        <ButtonLink href="/admin/crm" variant="ghost">
          Anuluj
        </ButtonLink>
      </div>
    </form>
  );
}
