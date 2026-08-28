"use client";

import { useActionState } from "react";
import { saveOfferAction } from "./actions";
import { Input, Label, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";
import { centsToInputValue } from "@/lib/format";
import { ImagePicker } from "@/components/admin/image-picker";
import type { Offer } from "@/types/offer";
import type { MediaAsset } from "@/types/media";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

function toDateInputValue(iso: string | null): string {
  if (!iso) return "";
  return iso.slice(0, 10);
}

export function OfferForm({ offer, mediaAssets }: { offer?: Offer; mediaAssets: MediaAsset[] }) {
  const [state, formAction, pending] = useActionState(saveOfferAction, initialState);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      {offer && <input type="hidden" name="id" value={offer.id} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="productName">Nazwa produktu</Label>
          <Input id="productName" name="productName" defaultValue={offer?.productName} required placeholder="Thermomix TM7" />
        </div>
        <div>
          <Label htmlFor="model">Model</Label>
          <Input id="model" name="model" defaultValue={offer?.model} required placeholder="TM7" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <Label htmlFor="price">Cena (PLN)</Label>
          <Input id="price" name="price" inputMode="decimal" defaultValue={centsToInputValue(offer?.priceCents)} placeholder="5999" />
        </div>
        <div>
          <Label htmlFor="installmentPrice">Rata miesięczna (PLN)</Label>
          <Input
            id="installmentPrice"
            name="installmentPrice"
            inputMode="decimal"
            defaultValue={centsToInputValue(offer?.installmentCents)}
            placeholder="199"
          />
        </div>
        <div>
          <Label htmlFor="installmentMonths">Liczba miesięcy</Label>
          <Input
            id="installmentMonths"
            name="installmentMonths"
            inputMode="numeric"
            defaultValue={offer?.installmentMonths ?? ""}
            placeholder="30"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Opis</Label>
        <Textarea id="description" name="description" defaultValue={offer?.description} rows={4} />
      </div>

      <ImagePicker
        id="imageMediaId"
        name="imageMediaId"
        label="Zdjęcie produktu"
        defaultValue={offer?.imageMediaId ?? null}
        mediaAssets={mediaAssets}
        fallbackNote="Bez wybranego zdjęcia karta oferty pokazuje ikonę zastępczą — prześlij zdjęcie w sekcji „Media”, żeby móc je tu wybrać."
      />
      {mediaAssets.length === 0 && (
        <p className="text-xs text-muted">
          Biblioteka mediów jest pusta — prześlij zdjęcia w sekcji „Media”, aby móc je tu wybrać.
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="ctaLabel">Tekst przycisku CTA</Label>
          <Input id="ctaLabel" name="ctaLabel" defaultValue={offer?.ctaLabel ?? "Umów bezpłatną prezentację"} required />
        </div>
        <div>
          <Label htmlFor="ctaHref">Link przycisku CTA</Label>
          <Input id="ctaHref" name="ctaHref" defaultValue={offer?.ctaHref ?? "/prezentacja"} required />
        </div>
      </div>

      <div>
        <Label htmlFor="bonuses">Bonusy (jeden na linię)</Label>
        <Textarea
          id="bonuses"
          name="bonuses"
          defaultValue={offer?.bonuses.join("\n")}
          rows={3}
          placeholder={"Zestaw Ready\nDostawa gratis"}
        />
      </div>

      <div>
        <Label htmlFor="conditions">Warunki oferty</Label>
        <Textarea id="conditions" name="conditions" defaultValue={offer?.conditions} rows={3} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="startsAt">Obowiązuje od</Label>
          <Input id="startsAt" name="startsAt" type="date" defaultValue={toDateInputValue(offer?.startsAt ?? null)} />
        </div>
        <div>
          <Label htmlFor="endsAt">Obowiązuje do</Label>
          <Input id="endsAt" name="endsAt" type="date" defaultValue={toDateInputValue(offer?.endsAt ?? null)} />
        </div>
      </div>

      <div className="space-y-3">
        <Checkbox name="isActive" defaultChecked={offer?.isActive ?? true} label="Oferta aktywna" />
        <Checkbox
          name="isPrimary"
          defaultChecked={offer?.isPrimary ?? false}
          label="Oferta główna (cena użyta w hero i na stronie TM7 — NIE pojawia się w karcie „Aktualna oferta” na stronie głównej; tylko jedna może być główna naraz)"
        />
      </div>

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz ofertę"}
        </Button>
        <ButtonLink href="/admin/oferta" variant="ghost">
          Anuluj
        </ButtonLink>
      </div>
    </form>
  );
}
