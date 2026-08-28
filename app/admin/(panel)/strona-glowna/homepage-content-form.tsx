"use client";

import { useActionState, useEffect, useRef } from "react";
import { saveHomepageContentAction } from "./actions";
import { Input, Label, Textarea, FieldError } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/admin/toast";
import { ImagePicker } from "@/components/admin/image-picker";
import type { HomepageContent } from "@/types/homepage-content";
import type { MediaAsset } from "@/types/media";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

export function HomepageContentForm({ content, mediaAssets }: { content: HomepageContent; mediaAssets: MediaAsset[] }) {
  const [state, formAction, pending] = useActionState(saveHomepageContentAction, initialState);
  const { showToast } = useToast();
  const wasPending = useRef(false);

  useEffect(() => {
    if (wasPending.current && !pending && !state.error) {
      showToast("Treść strony głównej zapisana.", "success");
    }
    wasPending.current = pending;
  }, [pending, state.error, showToast]);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      <Card>
        <h2 className="mb-4 font-semibold text-neutral-900">Hero (górna sekcja strony głównej)</h2>

        <div className="mb-5">
          <Label htmlFor="heroHeadline">Nagłówek</Label>
          <Input id="heroHeadline" name="heroHeadline" defaultValue={content.heroHeadline} required />
        </div>

        <div className="mb-5">
          <Label htmlFor="heroDescription">Opis pod nagłówkiem</Label>
          <Textarea id="heroDescription" name="heroDescription" defaultValue={content.heroDescription} rows={3} required />
        </div>

        <ImagePicker
          id="heroImageMediaId"
          name="heroImageMediaId"
          label="Zdjęcie hero"
          defaultValue={content.heroImageMediaId}
          mediaAssets={mediaAssets}
          fallbackNote="Bez wybranego zdjęcia pokazuje się miejsce zastępcze z ikoną — prześlij zdjęcie w sekcji „Media”, żeby móc je tu wybrać."
        />
      </Card>

      <Card>
        <h2 className="mb-4 font-semibold text-neutral-900">Sekcja „Gdzie pracuje Aga”</h2>

        <div className="mb-5">
          <Label htmlFor="serviceAreaIntro">Opis sekcji</Label>
          <Textarea id="serviceAreaIntro" name="serviceAreaIntro" defaultValue={content.serviceAreaIntro} rows={3} required />
        </div>

        <div className="mb-5">
          <Label htmlFor="serviceAreaCities">Obsługiwane miasta (jedno na linię)</Label>
          <Textarea
            id="serviceAreaCities"
            name="serviceAreaCities"
            defaultValue={content.serviceAreaCities.join("\n")}
            rows={6}
            placeholder={"Kraków\nBochnia\nBrzesko"}
          />
          <p className="mt-1 text-xs text-muted">
            Miasto pokaże się jako klikalny link tylko jeśli ma już swoją stronę lokalną (np. /thermomix/krakow) —
            w przeciwnym razie pokaże się jako zwykła etykieta, bez martwego linku.
          </p>
        </div>

        <ImagePicker
          id="serviceAreaImageMediaId"
          name="serviceAreaImageMediaId"
          label="Zdjęcie sekcji"
          defaultValue={content.serviceAreaImageMediaId}
          mediaAssets={mediaAssets}
          fallbackNote="Bez wybranego zdjęcia pokazuje się dekoracyjny panel z ikoną pinezki — prześlij zdjęcie w sekcji „Media”, żeby móc je tu wybrać."
        />
      </Card>

      <Card>
        <h2 className="mb-4 font-semibold text-neutral-900">Sekcja „Zostań ze mną na dłużej” (rolki Instagram)</h2>

        <div>
          <Label htmlFor="instagramReelUrls">Linki do rolek (jeden na linię, najnowsza na górze)</Label>
          <Textarea
            id="instagramReelUrls"
            name="instagramReelUrls"
            defaultValue={content.instagramReelUrls.join("\n")}
            rows={4}
            placeholder={"https://www.instagram.com/reel/XXXXXXXXXXX/"}
          />
          <p className="mt-1 text-xs text-muted">
            Pokażą się pierwsze 4 linki z listy. Wklej pełny link do rolki (nie do profilu) — sekcja pojawi się na
            stronie dopiero, gdy dodasz tu co najmniej jeden link.
          </p>
        </div>
      </Card>

      {mediaAssets.length === 0 && (
        <p className="text-xs text-muted">
          Biblioteka mediów jest pusta — prześlij zdjęcia w sekcji „Media”, aby móc je tu wybrać.
        </p>
      )}

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz treść"}
        </Button>
      </div>
    </form>
  );
}
