/**
 * Media library model (spec §11). Po odcięciu Supabase (sierpień 2026)
 * bajty trzyma wyłącznie własny serwer — `storageProvider` ma zawsze
 * wartość "local", a konkretne miejsce na dysku rozstrzyga prefiks `url`
 * (patrz lib/admin/media-upload.ts): /media/... (wolumen Dockera na VPS,
 * serwowany przez app/media/[filename]/route.ts) albo historyczne
 * /uploads/... ze starego, ulotnego fallbacku.
 */
export interface MediaAsset {
  id: string;
  fileName: string;
  url: string;
  altText: string;
  storageProvider: "local";
  sizeBytes: number;
  mimeType: string;
  createdAt: string;
  uploadedBy: string | null;
}
