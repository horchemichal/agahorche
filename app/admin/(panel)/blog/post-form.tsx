"use client";

import { useActionState } from "react";
import { savePostAction } from "./actions";
import { Input, Label, Textarea, Checkbox, FieldError } from "@/components/ui/form-fields";
import { Button, ButtonLink } from "@/components/ui/button";
import type { BlogPostRecord } from "@/lib/database/repositories/blog-repository";
import type { BlogCategoryRecord } from "@/lib/database/repositories/blog-categories-repository";
import type { FormActionState } from "@/lib/admin/actions-helpers";

const initialState: FormActionState = { error: null };

const selectClass = "w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-base text-neutral-900";

const CLUSTERS = [
  { value: "tm7", label: "TM7" },
  { value: "prezentacja", label: "Prezentacja" },
  { value: "zakup", label: "Zakup" },
  { value: "gotowanie", label: "Gotowanie" },
  { value: "dla-rodziny", label: "Dla rodziny" },
  { value: "dla-mam", label: "Dla mam" },
  { value: "thermomix-miasto", label: "Thermomix + miasto" },
  { value: "aga-club", label: "Aga Club" },
];

export function PostForm({
  post,
  categories,
}: {
  post?: BlogPostRecord;
  categories: BlogCategoryRecord[];
}) {
  const [state, formAction, pending] = useActionState(savePostAction, initialState);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      {post && <input type="hidden" name="id" value={post.id} />}
      {post && <input type="hidden" name="previousSlug" value={post.slug} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="title">Tytuł</Label>
          <Input id="title" name="title" defaultValue={post?.title} required />
        </div>
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" name="slug" defaultValue={post?.slug} required />
        </div>
      </div>

      <div>
        <Label htmlFor="excerpt">Zajawka (excerpt)</Label>
        <Textarea id="excerpt" name="excerpt" defaultValue={post?.excerpt} rows={2} required />
      </div>

      <div>
        <Label htmlFor="content">Treść</Label>
        <Textarea id="content" name="content" defaultValue={post?.content} rows={10} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="category">Kategoria</Label>
          <select id="category" name="category" defaultValue={post?.category ?? categories[0]?.slug} className={selectClass}>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="cluster">Klaster tematyczny (SEO)</Label>
          <select id="cluster" name="cluster" defaultValue={post?.cluster ?? "tm7"} className={selectClass}>
            {CLUSTERS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="relatedLocationSlug">Powiązana lokalizacja (slug, tylko dla klastra „Thermomix + miasto”)</Label>
        <Input id="relatedLocationSlug" name="relatedLocationSlug" defaultValue={post?.relatedLocationSlug ?? ""} placeholder="krakow" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="status">Status</Label>
          <select id="status" name="status" defaultValue={post?.status ?? "draft"} className={selectClass}>
            <option value="draft">Szkic</option>
            <option value="published">Opublikowany</option>
          </select>
        </div>
        <div>
          <Label htmlFor="publishedAt">Data publikacji (puste = teraz, przy publikacji)</Label>
          <Input id="publishedAt" name="publishedAt" type="date" defaultValue={post?.publishedAt?.slice(0, 10) ?? ""} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="seoTitle">Tytuł SEO (opcjonalnie)</Label>
          <Input id="seoTitle" name="seoTitle" defaultValue={post?.seoTitle ?? ""} />
        </div>
        <div>
          <Label htmlFor="seoDescription">Opis SEO (opcjonalnie)</Label>
          <Input id="seoDescription" name="seoDescription" defaultValue={post?.seoDescription ?? ""} />
        </div>
      </div>

      <div>
        <Label htmlFor="coverImage">Obraz okładki (URL, opcjonalnie)</Label>
        <Input id="coverImage" name="coverImage" defaultValue={post?.coverImage ?? ""} />
      </div>

      <Checkbox name="indexable" defaultChecked={post?.indexable ?? true} label="Pozwól na indeksowanie przez Google" />

      <FieldError>{state.error ?? undefined}</FieldError>

      <div className="flex gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Zapisz artykuł"}
        </Button>
        <ButtonLink href="/admin/blog" variant="ghost">
          Anuluj
        </ButtonLink>
      </div>
    </form>
  );
}
