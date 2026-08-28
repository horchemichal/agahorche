"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getSeoSettingsRepository } from "@/lib/database/repositories/seo-settings-repository";
import { seoSettingsFormSchema } from "@/lib/validation/seo-settings";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { SeoSettingsInput } from "@/types/seo-settings";
import type { FormActionState } from "@/lib/admin/actions-helpers";

export async function saveSeoSettingsAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const parsed = seoSettingsFormSchema.safeParse({
    siteTitle: formData.get("siteTitle"),
    siteDescription: formData.get("siteDescription"),
    robotsDefault: formData.get("robotsDefault"),
    sitemapEnabled: formData.get("sitemapEnabled") ?? undefined,
    ogImageMediaId: formData.get("ogImageMediaId"),
    faviconMediaId: formData.get("faviconMediaId"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  const input: SeoSettingsInput = parsed.data;

  try {
    await getSeoSettingsRepository().update(input, admin.email);
    await recordAuditEvent({
      actorEmail: admin.email,
      entityType: "seo-settings",
      entityId: "global",
      action: "update",
      summary: "Zaktualizowano globalne ustawienia SEO",
    });
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać ustawień SEO." };
  }

  // Global settings feed the root layout (title/description/robots/favicon)
  // and the sitemap kill switch — invalidate the whole tree, not one path.
  revalidatePath("/", "layout");
  revalidatePath("/admin/seo");
  revalidatePath("/sitemap.xml");

  return { error: null };
}
