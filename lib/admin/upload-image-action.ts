"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { storeUploadedFile, MediaUploadError } from "@/lib/admin/media-upload";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { MediaAsset } from "@/types/media";

/**
 * Wgranie zdjęcia prosto z okna „Wybierz zdjęcie” (ImagePicker) — bez przechodzenia do sekcji Media.
 * Plik przechodzi tę samą drogę co w Media (sharp, WebP, warianty) i ląduje w bibliotece.
 */
export async function uploadImageInlineAction(
  formData: FormData,
): Promise<{ asset: MediaAsset | null; error: string | null }> {
  const admin = await requireAdmin();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) return { asset: null, error: "Wybierz plik ze zdjęciem." };
  if (!file.type.startsWith("image/")) return { asset: null, error: "To nie jest plik graficzny." };
  try {
    const stored = await storeUploadedFile(file);
    const asset = await getMediaRepository().create({
      fileName: stored.fileName,
      url: stored.url,
      altText: String(formData.get("altText") ?? "").trim(),
      storageProvider: stored.storageProvider,
      sizeBytes: stored.sizeBytes,
      mimeType: stored.mimeType,
      uploadedBy: admin.email,
    });
    await recordAuditEvent({
      actorEmail: admin.email,
      entityType: "media",
      entityId: asset.id,
      action: "create",
      summary: "Przesłano plik „" + asset.fileName + "” z okna wyboru zdjęcia",
    });
    revalidatePath("/admin/media");
    return { asset, error: null };
  } catch (error) {
    if (error instanceof MediaUploadError) return { asset: null, error: error.message };
    return { asset: null, error: error instanceof Error ? error.message : "Nie udało się wgrać zdjęcia." };
  }
}
