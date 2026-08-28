"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { getMediaRepository } from "@/lib/database/repositories/media-repository";
import { storeUploadedFile, deleteStoredFile, MediaUploadError } from "@/lib/admin/media-upload";
import { recordAuditEvent } from "@/lib/admin/actions-helpers";
import type { FormActionState } from "@/lib/admin/actions-helpers";

function revalidateMediaSurfaces() {
  revalidatePath("/admin/media");
  revalidatePath("/admin/seo");
}

export async function uploadMediaAction(_prevState: FormActionState, formData: FormData): Promise<FormActionState> {
  const admin = await requireAdmin();

  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Wybierz plik do przesłania." };
  }
  const altText = String(formData.get("altText") ?? "").trim();

  try {
    const stored = await storeUploadedFile(file);
    const asset = await getMediaRepository().create({
      fileName: stored.fileName,
      url: stored.url,
      altText,
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
      summary: `Przesłano plik „${asset.fileName}”`,
    });
  } catch (error) {
    if (error instanceof MediaUploadError) return { error: error.message };
    return { error: error instanceof Error ? error.message : "Nie udało się przesłać pliku." };
  }

  revalidateMediaSurfaces();
  return { error: null };
}

export async function updateAltTextAction(id: string, altText: string): Promise<void> {
  const admin = await requireAdmin();
  const asset = await getMediaRepository().updateAltText(id, altText);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "media",
    entityId: id,
    action: "update",
    summary: `Zaktualizowano opis alternatywny pliku „${asset.fileName}”`,
  });
  revalidateMediaSurfaces();
}

export async function deleteMediaAction(id: string): Promise<void> {
  const admin = await requireAdmin();
  const asset = await getMediaRepository().get(id);
  await getMediaRepository().remove(id);
  if (asset) await deleteStoredFile(asset);
  await recordAuditEvent({
    actorEmail: admin.email,
    entityType: "media",
    entityId: id,
    action: "delete",
    summary: `Usunięto plik „${asset?.fileName ?? id}”`,
  });
  revalidateMediaSurfaces();
}
