"use client";

import { useActionState, useEffect, useRef } from "react";
import { saveSeoSettingsAction } from "./actions";
import { Input, Label, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/admin/toast";
import type { SeoSettings } from "@/types/seo-settings";
import type { MediaAsset } from "@/types/media";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };
const selectClass = "w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-base text-neutral-900";

export function SeoForm({ settings, mediaAssets }: { settings: SeoSettings; mediaAssets: MediaAsset[] }) {
  const [state, formAction, pending] = useActionState(saveSeoSettingsAction, initialState);
  const { showToast } = useToast();
  const wasPending = useRef(false);

  useEffect(() => {
    if (wasPending.current && !pending && !state.error) {
      showToast("Ustawienia SEO zapisane.", "success");
    }
    wasPending.current = pending;
  }, [pending, state.error, showToast]);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      <Card>
        <div className="mb-5">
          <Label htmlFor="siteTitle">Domyślny tytuł strony</Label>
          <Input id="siteTitle" name="siteTitle" defaultValue={settings.siteTitle} required />
          <p className="mt-1 text-xs text-muted">Używany, gdy konkretna strona nie ustawia własnego tytułu.</p>
        </div>

        <div className="mb-5">
          <Label htmlFor="siteDescription">Domyślny opis strony</Label>
          <Textarea id="siteDescription" name="siteDescription" defaultValue={settings.siteDescription} rows={3} required />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="ogImageMediaId">Domyślny obraz OG (udostępnianie w social media)</Label>
            <select id="ogImageMediaId" name="ogImageMediaId" defaultValue={settings.ogImageMediaId ?? ""} className={selectClass}>
              <option value="">— brak —</option>
              {mediaAssets.map((asset) => (
                <option key={asset.id} value={asset.id}>
                  {asset.fileName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="faviconMediaId">Favicon</Label>
            <select id="faviconMediaId" name="faviconMediaId" defaultValue={settings.faviconMediaId ?? ""} className={selectClass}>
              <option value="">— brak —</option>
              {mediaAssets.map((asset) => (
                <option key={asset.id} value={asset.id}>
                  {asset.fileName}
                </option>
              ))}
            </select>
          </div>
        </div>
        {mediaAssets.length === 0 && (
          <p className="mt-2 text-xs text-muted">
            Biblioteka mediów jest pusta — prześlij obrazy w sekcji „Media”, aby móc je tu wybrać.
          </p>
        )}
      </Card>

      <Card>
        <div className="mb-5">
          <Label htmlFor="robotsDefault">Domyślne indeksowanie (dotyczy stron bez własnego ustawienia)</Label>
          <select id="robotsDefault" name="robotsDefault" defaultValue={settings.robotsDefault} className={selectClass}>
            <option value="index,follow">Indeksuj (index, follow) — normalny tryb</option>
            <option value="noindex,follow">Wyłącz indeksowanie całej strony (noindex, follow)</option>
          </select>
          <p className="mt-1 text-xs text-danger/80">
            Wyłączenie indeksowania ukryje z Google każdą stronę, która nie ustawia własnego robots — używaj tylko
            świadomie (np. na czas prac).
          </p>
        </div>

        <Checkbox
          name="sitemapEnabled"
          defaultChecked={settings.sitemapEnabled}
          label="Generuj sitemap.xml (wyłączenie zwróci pustą sitemapę)"
        />
      </Card>

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz ustawienia"}
        </Button>
      </div>
    </form>
  );
}
