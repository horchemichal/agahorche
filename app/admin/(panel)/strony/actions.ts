"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getPagesRepository } from "@/lib/database/repositories/pages-repository";
import { pageFormSchema } from "@/lib/validation/page";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { CmsPageInput } from "@/types/page";
import type { FormActionState } from "@/lib/admin/actions-helpers";

export async function savePageAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const previousSlug = String(formData.get("previousSlug") ?? "");
  const parsed = pageFormSchema.safeParse({
    slug: formData.get("slug"),
    title: formData.get("title"),
    content: formData.get("content"),
    status: formData.get("status"),
    seoTitle: formData.get("seoTitle"),
    seoDescription: formData.get("seoDescription"),
    indexable: formData.get("indexable") ?? undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  const input: CmsPageInput = {
    slug: parsed.data.slug,
    title: parsed.data.title,
    content: parsed.data.content,
    status: parsed.data.status,
    seoTitle: parsed.data.seoTitle,
    seoDescription: parsed.data.seoDescription,
    ogImageMediaId: null,
    canonicalPath: null,
    indexable: parsed.data.indexable,
  };

  const repo = getPagesRepository();

  try {
    if (id) {
      await repo.update(id, input, admin.email);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "page",
        entityId: id,
        action: "update",
        summary: `Zaktualizowano stronę „${input.title}” (/${input.slug})`,
      });
    } else {
      const created = await repo.create(input, admin.email);
      await recordAuditEvent({
        actorEmail: admin.email,
        entityType: "page",
        entityId: created.id,
        action: "create",
        summary: `Utworzono stronę „${input.title}” (/${input.slug})`,
      });
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać strony." };
  }

  revalidatePath("/admin/strony");
  revalidatePath(`/${input.slug}`);
  if (previousSlug && previousSlug !== input.slug) {
    revalidatePath(`/${previousSlug}`);
  }
  redirect("/admin/strony");
}

export async function deletePageAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const page = await getPagesRepository().get(id);
  await getPagesRepository().remove(id);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "page",
    entityId: id,
    action: "delete",
    summary: `Usunięto stronę „${page?.title ?? id}”`,
  });
  revalidatePath("/admin/strony");
  if (page) revalidatePath(`/${page.slug}`);
}
