"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getHomepageContentRepository } from "@/lib/database/repositories/homepage-content-repository";
import { homepageContentFormSchema } from "@/lib/validation/homepage-content";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { HomepageContentInput } from "@/types/homepage-content";
import type { FormActionState } from "@/lib/admin/actions-helpers";

export async function saveHomepageContentAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const parsed = homepageContentFormSchema.safeParse({
    heroHeadline: formData.get("heroHeadline"),
    heroDescription: formData.get("heroDescription"),
    heroImageMediaId: formData.get("heroImageMediaId"),
    serviceAreaIntro: formData.get("serviceAreaIntro"),
    serviceAreaImageMediaId: formData.get("serviceAreaImageMediaId"),
    serviceAreaCities: formData.get("serviceAreaCities"),
    instagramReelUrls: formData.get("instagramReelUrls"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Formularz zawiera błędy." };
  }

  const input: HomepageContentInput = parsed.data;

  try {
    await getHomepageContentRepository().update(input, admin.email);
    await recordAuditEvent({
      actorEmail: admin.email,
      entityType: "homepage-content",
      entityId: "global",
      action: "update",
      summary: "Zaktualizowano treść strony głównej (hero / Gdzie pracuje Aga)",
    });
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Nie udało się zapisać treści strony głównej." };
  }

  // Hero + ServiceAreaSection render only on "/", but revalidate the whole
  // tree the same way /admin/seo does — cheap, and avoids missing a future
  // second consumer of this content.
  revalidatePath("/", "layout");
  revalidatePath("/admin/strona-glowna");

  return { error: null };
}
