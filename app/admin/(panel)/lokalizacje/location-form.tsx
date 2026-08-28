"use client";

import { useActionState } from "react";
import { saveLocationAction } from "./actions";
import { Input, Label, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";
import type { Location } from "@/types/location";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

const selectClass =
  "w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-base text-neutral-900";

export function LocationForm({
  location,
  wojewodztwaOptions,
}: {
  location?: Location;
  wojewodztwaOptions: { slug: string; name: string }[];
}) {
  const [state, formAction, pending] = useActionState(saveLocationAction, initialState);

  return (
    <form action={formAction} className="max-w-3xl space-y-6">
      {location && <input type="hidden" name="locationId" value={location.locationId} />}
      {location && <input type="hidden" name="previousUrlPath" value={location.urlPath} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Nazwa</Label>
          <Input id="name" name="name" defaultValue={location?.name} required placeholder="Kraków" />
        </div>
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" name="slug" defaultValue={location?.slug} required placeholder="krakow" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="nameLocative">Forma miejscownikowa (np. „w Krakowie”)</Label>
          <Input id="nameLocative" name="nameLocative" defaultValue={location?.nameLocative ?? ""} placeholder="w Krakowie" />
        </div>
        <div>
          <Label htmlFor="unitType">Typ jednostki</Label>
          <select id="unitType" name="unitType" defaultValue={location?.unitType ?? "miasto"} className={selectClass}>
            <option value="wojewodztwo">Województwo</option>
            <option value="powiat">Powiat</option>
            <option value="gmina">Gmina</option>
            <option value="miasto">Miasto</option>
            <option value="miejscowosc">Mniejsza miejscowość</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <Label htmlFor="wojewodztwoSlug">Województwo (nadrzędne)</Label>
          <select id="wojewodztwoSlug" name="wojewodztwoSlug" defaultValue={location?.wojewodztwoSlug ?? ""} className={selectClass}>
            <option value="">— brak —</option>
            {wojewodztwaOptions.map((w) => (
              <option key={w.slug} value={w.slug}>
                {w.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="powiatSlug">Slug powiatu (opcjonalnie)</Label>
          <Input id="powiatSlug" name="powiatSlug" defaultValue={location?.powiatSlug ?? ""} placeholder="krakowski" />
        </div>
        <div>
          <Label htmlFor="gminaSlug">Slug gminy (opcjonalnie)</Label>
          <Input id="gminaSlug" name="gminaSlug" defaultValue={location?.gminaSlug ?? ""} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <Label htmlFor="region">Region (etykieta, np. „Małopolska”)</Label>
          <Input id="region" name="region" defaultValue={location?.region ?? ""} />
        </div>
        <div>
          <Label htmlFor="population">Liczba mieszkańców (jeśli znana)</Label>
          <Input id="population" name="population" inputMode="numeric" defaultValue={location?.population ?? ""} />
        </div>
        <div>
          <Label htmlFor="populationSource">Źródło danych o populacji</Label>
          <Input id="populationSource" name="populationSource" defaultValue={location?.populationSource ?? ""} placeholder="GUS 2024" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="neighborSlugs">Sąsiednie lokalizacje (slugi, po przecinku lub w nowych liniach)</Label>
          <Textarea id="neighborSlugs" name="neighborSlugs" defaultValue={location?.neighborSlugs.join(", ")} rows={2} />
        </div>
        <div>
          <Label htmlFor="largerCitySlug">Większe miasto w regionie (slug)</Label>
          <Input id="largerCitySlug" name="largerCitySlug" defaultValue={location?.largerCitySlug ?? ""} />
        </div>
      </div>

      <Checkbox
        name="agaServesLocation"
        defaultChecked={location?.agaServesLocation ?? false}
        label="Aga faktycznie obsługuje tę lokalizację (nie zaznaczaj domyślnie — potwierdź świadomie)"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="seoPriority">Priorytet SEO (1 = najwyższy, 100 = najniższy)</Label>
          <Input id="seoPriority" name="seoPriority" inputMode="numeric" defaultValue={location?.seoPriority ?? 50} />
        </div>
        <div>
          <Label htmlFor="tier">Tier SEO</Label>
          <select id="tier" name="tier" defaultValue={location?.tier ?? "C"} className={selectClass}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="long-tail">long-tail</option>
          </select>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-neutral-50 p-4">
        <p className="mb-3 text-sm font-medium text-neutral-800">Kontrola SEO / indeksowania</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Checkbox name="indexable" defaultChecked={location?.seo.indexable ?? false} label="Dopuść indeksowanie" />
          <Checkbox name="inSitemap" defaultChecked={location?.seo.inSitemap ?? false} label="Uwzględnij w sitemap" />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="robots">Robots (nadpisanie, opcjonalnie)</Label>
            <select id="robots" name="robots" defaultValue={location?.seo.robots ?? ""} className={selectClass}>
              <option value="">— pochodne z „Dopuść indeksowanie” —</option>
              <option value="index,follow">index,follow</option>
              <option value="noindex,follow">noindex,follow</option>
              <option value="noindex,nofollow">noindex,nofollow</option>
            </select>
          </div>
          <div>
            <Label htmlFor="contentStatus">Status treści</Label>
            <select id="contentStatus" name="contentStatus" defaultValue={location?.seo.contentStatus ?? "not_started"} className={selectClass}>
              <option value="not_started">Nierozpoczęta</option>
              <option value="draft">Szkic</option>
              <option value="published">Opublikowana</option>
              <option value="thin">Uboga treść (thin)</option>
              <option value="retired">Wycofana</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="localFacts">Potwierdzone lokalne fakty (jeden na linię — nigdy nie wymyślaj)</Label>
        <Textarea id="localFacts" name="localFacts" defaultValue={location?.localFacts?.join("\n")} rows={3} />
      </div>

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz lokalizację"}
        </Button>
        <ButtonLink href="/admin/lokalizacje" variant="ghost">
          Anuluj
        </ButtonLink>
      </div>
    </form>
  );
}
