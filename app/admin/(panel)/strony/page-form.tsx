"use client";

import { useActionState } from "react";
import { savePageAction } from "./actions";
import { Input, Label, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";
import type { CmsPage } from "@/types/page";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

export function PageForm({ page }: { page?: CmsPage }) {
  const [state, formAction, pending] = useActionState(savePageAction, initialState);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      {page && <input type="hidden" name="id" value={page.id} />}
      {page && <input type="hidden" name="previousSlug" value={page.slug} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="title">Tytuł</Label>
          <Input id="title" name="title" defaultValue={page?.title} required placeholder="Regulamin promocji" />
        </div>
        <div>
          <Label htmlFor="slug">Slug (adres)</Label>
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-muted">/</span>
            <Input id="slug" name="slug" defaultValue={page?.slug} required placeholder="regulamin-promocji" />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="content">Treść (proste akapity — puste linie oddzielają akapity)</Label>
        <Textarea id="content" name="content" defaultValue={page?.content} rows={10} />
      </div>

      <div>
        <Label htmlFor="status">Status</Label>
        <select
          id="status"
          name="status"
          defaultValue={page?.status ?? "draft"}
          className="w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-base text-neutral-900"
        >
          <option value="draft">Szkic (niepubliczny)</option>
          <option value="published">Opublikowana</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="seoTitle">Tytuł SEO (opcjonalnie)</Label>
          <Input id="seoTitle" name="seoTitle" defaultValue={page?.seoTitle ?? ""} placeholder="domyślnie: tytuł strony" />
        </div>
        <div>
          <Label htmlFor="seoDescription">Opis SEO (opcjonalnie)</Label>
          <Input id="seoDescription" name="seoDescription" defaultValue={page?.seoDescription ?? ""} />
        </div>
      </div>

      <Checkbox name="indexable" defaultChecked={page?.indexable ?? true} label="Pozwól na indeksowanie przez Google" />

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz stronę"}
        </Button>
        <ButtonLink href="/admin/strony" variant="ghost">
          Anuluj
        </ButtonLink>
      </div>
    </form>
  );
}
