"use client";

import { useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { addMemberAction } from "./actions";
import { Input, Label, FieldError } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/admin/toast";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };
const selectClass = "h-11 rounded-md border border-neutral-300 bg-neutral-0 px-3 text-sm text-neutral-900";

export function MemberForm() {
  const [state, formAction, pending] = useActionState(addMemberAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { showToast } = useToast();
  const wasPending = useRef(false);

  useEffect(() => {
    if (wasPending.current && !pending && !state.error) {
      formRef.current?.reset();
      showToast("Członek dodany.", "success");
      router.refresh();
    }
    wasPending.current = pending;
  }, [pending, state.error, router, showToast]);

  return (
    <Card>
      <h2 className="mb-4 font-medium text-neutral-900">Dodaj członka ręcznie</h2>
      <form ref={formRef} action={formAction} className="flex flex-wrap items-end gap-4">
        <div className="min-w-[180px] flex-1">
          <Label htmlFor="displayName">Imię / pseudonim</Label>
          <Input id="displayName" name="displayName" required />
        </div>
        <div className="min-w-[220px] flex-1">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="tier">Poziom</Label>
          <select id="tier" name="tier" defaultValue="free" className={selectClass}>
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <Button type="submit" disabled={pending}>
          {pending ? "Dodawanie…" : "Dodaj"}
        </Button>
      </form>
      <FieldError>{state.error ?? undefined}</FieldError>
      <p className="mt-3 text-xs text-muted">
        Nie ma jeszcze publicznej rejestracji do Aga Club (spec §16 — logowanie i personalizacja to kolejny etap) — to
        jedyny sposób na dodanie członka na razie.
      </p>
    </Card>
  );
}
