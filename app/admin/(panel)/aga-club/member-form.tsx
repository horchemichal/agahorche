"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { dodajKontoAction, ustawHasloAction, PUSTY_STAN } from "./actions";
import { Input, Label, FieldError } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/admin/toast";

/**
 * OŚ PLIKU
 * Zakładanie konta do Strefy Klienta i ustawianie nowego hasła.
 * Dlaczego panel obsługuje konta, a nie dawną listę „członków" —
 * patrz lib/admin/konta-klientow.ts.
 *
 * HASŁO POKAZUJEMY RAZ. W bazie leży wyłącznie jego skrót (bcrypt), więc
 * po odświeżeniu strony nikt go już nie odczyta — także Aga. Stąd wyraźna
 * ramka i przycisk „Kopiuj": to jedyny moment, żeby je przekazać.
 */

function PoleHasla({ haslo }: { haslo: string }) {
  const [skopiowane, setSkopiowane] = useState(false);

  return (
    <div className="mt-4 rounded-xl border border-brand-300 bg-brand-50 p-4">
      <p className="text-sm font-semibold text-neutral-900">Hasło do przekazania — zapisz je teraz</p>
      <p className="mt-1 text-xs text-muted">
        Po odświeżeniu strony hasło zniknie i nie da się go odczytać — w bazie zapisany jest tylko
        jego zaszyfrowany skrót. Jeśli przepadnie, po prostu ustaw nowe.
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <code className="rounded-md border border-brand-200 bg-neutral-0 px-3 py-2 font-mono text-base text-neutral-900">
          {haslo}
        </code>
        <Button
          type="button"
          variant="secondary"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(haslo);
              setSkopiowane(true);
              setTimeout(() => setSkopiowane(false), 2000);
            } catch {
              // Schowek bywa zablokowany (np. bez HTTPS) — hasło i tak
              // jest widoczne obok, więc nie robimy z tego błędu.
              setSkopiowane(false);
            }
          }}
        >
          {skopiowane ? "Skopiowano" : "Kopiuj"}
        </Button>
      </div>
    </div>
  );
}

export function MemberForm() {
  const [stan, formAction, pending] = useActionState(dodajKontoAction, PUSTY_STAN);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { showToast } = useToast();
  const bylPending = useRef(false);

  useEffect(() => {
    if (bylPending.current && !pending && !stan.blad) {
      formRef.current?.reset();
      showToast("Konto założone.", "success");
      router.refresh();
    }
    bylPending.current = pending;
  }, [pending, stan.blad, router, showToast]);

  return (
    <Card>
      <h2 className="mb-1 font-medium text-neutral-900">Załóż konto klientce</h2>
      <p className="mb-4 text-sm text-muted">
        Tworzy konto do logowania w Strefie Klienta. Osoba z takim kontem widzi pełne jadłospisy,
        przepisy, poradnik i wyzwanie 30 dni.
      </p>

      <form ref={formRef} action={formAction} className="flex flex-wrap items-end gap-4">
        <div className="min-w-[180px] flex-1">
          <Label htmlFor="displayName">Imię</Label>
          <Input id="displayName" name="displayName" required autoComplete="off" />
        </div>
        <div className="min-w-[220px] flex-1">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" required autoComplete="off" />
        </div>
        <div className="min-w-[200px] flex-1">
          <Label htmlFor="haslo">Hasło (możesz zostawić puste)</Label>
          <Input id="haslo" name="haslo" type="text" autoComplete="off" placeholder="wygeneruję sama" />
        </div>
        <Button type="submit" disabled={pending}>
          {pending ? "Zakładam…" : "Załóż konto"}
        </Button>
      </form>

      <FieldError>{stan.blad ?? undefined}</FieldError>
      {stan.haslo && <PoleHasla haslo={stan.haslo} />}

      <p className="mt-3 text-xs text-muted">
        Puste pole hasła = wygeneruję bezpieczne, bez znaków, które mylą się przy dyktowaniu (0/O,
        1/l/I). Własne hasło musi mieć co najmniej 8 znaków.
      </p>
    </Card>
  );
}

/** Ustawienie nowego hasła istniejącemu kontu — dla osób, które zapomniały. */
export function ResetHaslaForm({ id, email }: { id: string; email: string }) {
  const [stan, formAction, pending] = useActionState(ustawHasloAction, PUSTY_STAN);
  const [otwarte, setOtwarte] = useState(false);

  if (!otwarte && !stan.haslo) {
    return (
      <Button type="button" variant="secondary" onClick={() => setOtwarte(true)}>
        Ustaw nowe hasło
      </Button>
    );
  }

  return (
    <div className="w-full">
      <form action={formAction} className="flex flex-wrap items-end gap-2">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="email" value={email} />
        <div className="min-w-[200px] flex-1">
          <Label htmlFor={`haslo-${id}`}>Nowe hasło (puste = wygeneruję)</Label>
          <Input id={`haslo-${id}`} name="haslo" type="text" autoComplete="off" placeholder="wygeneruję sama" />
        </div>
        <Button type="submit" disabled={pending}>
          {pending ? "Ustawiam…" : "Ustaw"}
        </Button>
        <Button type="button" variant="ghost" onClick={() => setOtwarte(false)}>
          Anuluj
        </Button>
      </form>
      <FieldError>{stan.blad ?? undefined}</FieldError>
      {stan.haslo && <PoleHasla haslo={stan.haslo} />}
    </div>
  );
}
