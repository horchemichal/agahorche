"use client";

import { useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { uploadMediaAction } from "./actions";
import { Input, Label, FieldError } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/admin/toast";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

export function UploadForm() {
  const [state, formAction, pending] = useActionState(uploadMediaAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { showToast } = useToast();
  const wasPending = useRef(false);

  useEffect(() => {
    if (wasPending.current && !pending && !state.error) {
      formRef.current?.reset();
      showToast("Plik przesłany.", "success");
      router.refresh();
    }
    wasPending.current = pending;
  }, [pending, state.error, router, showToast]);

  return (
    <Card>
      <form ref={formRef} action={formAction} className="flex flex-wrap items-end gap-4">
        <div className="min-w-[220px] flex-1">
          <Label htmlFor="file">Plik (JPG, PNG, WebP, AVIF, SVG — maks. 6MB)</Label>
          <input
            id="file"
            name="file"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif,image/svg+xml"
            required
            className="block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-2.5 text-sm text-neutral-900 file:mr-3 file:rounded-full file:border-0 file:bg-brand-50 file:px-4 file:py-1.5 file:text-sm file:font-medium file:text-brand-700"
          />
        </div>
        <div className="min-w-[220px] flex-1">
          <Label htmlFor="altText">Opis alternatywny (alt)</Label>
          <Input id="altText" name="altText" placeholder="np. Aga podczas prezentacji Thermomixa" />
        </div>
        <Button type="submit" disabled={pending}>
          {pending ? "Przesyłanie…" : "Prześlij plik"}
        </Button>
      </form>
      <FieldError>{state.error ?? undefined}</FieldError>
    </Card>
  );
}
