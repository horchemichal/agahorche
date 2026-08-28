"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getBlogRepository, type BlogPostInput } from "@/lib/database/repositories/blog-repository";
import { getBlogCategoriesRepository } from "@/lib/database/repositories/blog-categories-repository";
import { postFormSchema } from "@/lib/validation/blog";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { FormActionState } from "@/lib/admin/actions-helpers";
import type { BlogCategory } from "@/types/blog";

function revalidateBlogSurfaces(slug: string, previousSlug?: string) {
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  if (previousSlug && previousSlug !== slug) revalidatePath(`/blog/${previousSlug}`);
}

export async function savePostAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const previousSlug = String(formData.get("previousSlug") ?? "");

  const parsed = postFormSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    category: formData.get("category"),
    cluster: formData.get("cluster"),
    relatedLocationSlug: formData.get("relatedLocationSlug"),
    status: formData.get("status"),
    indexable: formData.get("indexable") ?? undefined,
    coverImage: formData.get("coverImage"),
    seoTitle: formData.get("seoTitle"),
    seoDescription: formData.get("seoDescription"),
    publishedAt: formData.get("publishedAt"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  const d = parsed.data;
  const publishedAt = d.status === "published" ? d.publishedAt ?? new Date().toISOString() : d.publishedAt;

  const input: BlogPostInput = {
    slug: d.slug,
    title: d.title,
    excerpt: d.excerpt,
    category: d.category,
    cluster: d.cluster,
    relatedLocationSlug: d.relatedLocationSlug,
    status: d.status,
    indexable: d.indexable,
    coverImage: d.coverImage,
    author: "aga-horche",
    content: d.content,
    scheduledFor: null,
    seoTitle: d.seoTitle,
    seoDescription: d.seoDescription,
    publishedAt,
  };

  const repo = getBlogRepository();

  try {
    if (id) {
      await repo.update(id, input, admin.email);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "blog_post",
        entityId: id,
        action: "update",
        summary: `Zaktualizowano artykuł „${input.title}”`,
      });
    } else {
      const created = await repo.create(input, admin.email);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "blog_post",
        entityId: created.id,
        action: "create",
        summary: `Utworzono artykuł „${input.title}”`,
      });
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać artykułu." };
  }

  revalidateBlogSurfaces(d.slug, previousSlug);
  redirect("/admin/blog");
}

export async function deletePostAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const post = await getBlogRepository().get(id);
  await getBlogRepository().remove(id);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "blog_post",
    entityId: id,
    action: "delete",
    summary: `Usunięto artykuł „${post?.title ?? id}”`,
  });
  if (post) revalidateBlogSurfaces(post.slug);
}

export async function saveCategoryLabelAction(slug: BlogCategory, label: string): Promise<void> {
  const admin = await requireAdmin();
  const trimmed = label.trim();
  if (!trimmed) throw new Error("Etykieta nie może być pusta.");
  await getBlogCategoriesRepository().updateLabel(slug, trimmed);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "blog_category",
    entityId: slug,
    action: "update",
    summary: `Zmieniono etykietę kategorii „${slug}” na „${trimmed}”`,
  });
  revalidatePath("/admin/blog/kategorie");
  revalidatePath("/blog");
}
