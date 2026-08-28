"use client";

import { useActionState } from "react";
import { clientRegisterAction, type ClientRegisterState } from "./actions";
import { Input, Label, FieldError, Checkbox } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";

const initialState: ClientRegisterState = { error: null };

export function ClientRegisterForm() {
  const [state, formAction, pending] = useActionState(clientRegisterAction, initialState);

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot — hidden via CSS (not type="hidden"), same idiom as components/lead/lead-form.tsx */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Strona WWW</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <Label htmlFor="displayName">Imię i nazwisko</Label>
        <Input id="displayName" name="displayName" type="text" autoComplete="name" required />
      </div>
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" autoComplete="username" required />
      </div>
      <div>
        <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div>
        <Label htmlFor="password">Hasło</Label>
        <Input id="password" name="password" type="password" autoComplete="new-password" minLength={8} required />
      </div>

      <div className="space-y-3 border-t border-border pt-4">
        <Checkbox
          name="consentProcessing"
          required
          label="Wyrażam zgodę na przetwarzanie moich danych osobowych w celu założenia i obsługi konta w Strefie Klienta."
        />
        <Checkbox
          name="consentMarketing"
          label="Chcę otrzymywać informacje o nowościach i promocjach Agi (opcjonalnie)."
        />
      </div>

      <FieldError>{state.error ?? undefined}</FieldError>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Tworzenie konta…" : "Załóż konto"}
      </Button>
    </form>
  );
}
