"use client";

import Link from "next/link";
import { useActionState } from "react";
import {
  poprosOResetAction,
  ustawNoweHasloAction,
  type StanProsby,
  type StanNowegoHasla,
} from "./actions";
import { Input, Label, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";

/**
 * Dwa formularze resetu hasła. Oba są klienckie tylko z jednego powodu:
 * `useActionState` pokazuje stan „wysyłam…" i komunikat bez przeładowania
 * strony. Cała robota dzieje się w akcjach serwerowych (./actions.ts).
 */

const STAN_PROSBY: StanProsby = { blad: null, wyslano: null };

/** Krok 1 — „nie pamiętam hasła". */
export function FormularzProsby() {
  const [stan, akcja, wysylanie] = useActionState(poprosOResetAction, STAN_PROSBY);

  /*
   * Po wysłaniu formularz ZNIKA. Gdyby został, klientka klikałaby „wyślij"
   * kolejny raz, myśląc, że nie zadziałało — a każde kliknięcie unieważnia
   * poprzedni link, więc ten z pierwszego maila przestałby działać.
   */
  if (stan.wyslano) {
    return (
      <div className="space-y-5">
        <p className="rounded-lg border border-brand-200 bg-brand-50 p-4 text-sm leading-relaxed text-neutral-700">
          {stan.wyslano}
        </p>
        <ButtonLink href="/strefa-klienta/logowanie" variant="outline" className="w-full justify-center">
          Wróć do logowania
        </ButtonLink>
      </div>
    );
  }

  return (
    <form action={akcja} className="space-y-5">
      <div>
        <Label htmlFor="email">Adres e-mail konta</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <FieldError>{stan.blad ?? undefined}</FieldError>
      <Button type="submit" className="w-full" disabled={wysylanie}>
        {wysylanie ? "Wysyłam…" : "Wyślij link do zmiany hasła"}
      </Button>
      <p className="text-center text-sm text-muted">
        <Link href="/strefa-klienta/logowanie" className="font-medium text-brand-700 hover:underline">
          Wróć do logowania
        </Link>
      </p>
    </form>
  );
}

const STAN_HASLA: StanNowegoHasla = { blad: null, gotowe: false };

/** Krok 3 — ustawienie nowego hasła po kliknięciu w link z maila. */
export function FormularzNowegoHasla({ token }: { token: string }) {
  const [stan, akcja, wysylanie] = useActionState(ustawNoweHasloAction, STAN_HASLA);

  if (stan.gotowe) {
    return (
      <div className="space-y-5">
        <p className="rounded-lg border border-brand-200 bg-brand-50 p-4 text-sm leading-relaxed text-neutral-700">
          Hasło zmienione. Możesz się teraz zalogować.
        </p>
        <ButtonLink href="/strefa-klienta/logowanie" className="w-full justify-center">
          Zaloguj się
        </ButtonLink>
      </div>
    );
  }

  return (
    <form action={akcja} className="space-y-5">
      <input type="hidden" name="token" value={token} />
      <div>
        <Label htmlFor="haslo">Nowe hasło</Label>
        <Input
          id="haslo"
          name="haslo"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
        />
        <p className="mt-1.5 text-xs text-muted">Co najmniej 8 znaków.</p>
      </div>
      <div>
        <Label htmlFor="powtorzone">Powtórz nowe hasło</Label>
        <Input
          id="powtorzone"
          name="powtorzone"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
        />
      </div>
      <FieldError>{stan.blad ?? undefined}</FieldError>
      <Button type="submit" className="w-full" disabled={wysylanie}>
        {wysylanie ? "Zapisuję…" : "Zapisz nowe hasło"}
      </Button>
    </form>
  );
}
