import "server-only";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/** Images only, matching the media library's purpose (spec §11/§29 — no arbitrary file hosting). */
const ALLOWED_MIME_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/avif", "image/svg+xml"]);
const MAX_SIZE_BYTES = 6 * 1024 * 1024; // 6MB — limit on the ORIGINAL upload, before optimization below.

/**
 * Persistent directory for the self-hosted storage provider (Zadanie 4,
 * Krok 3). On the VPS this is a named Docker volume mounted into the app
 * container (survives `docker compose up -d --build` — unlike the rest of
 * the container filesystem, which is rebuilt from scratch every deploy).
 * Overridable via env for other environments; defaults to a repo-relative
 * folder so local dev needs no configuration.
 *
 * Od odcięcia Supabase (sierpień 2026) to jedyne miejsce zapisu nowych
 * plików — zmienna MEDIA_STORAGE_PROVIDER nie jest już potrzebna i jej
 * brak nie przełącza już zapisu na Supabase Storage ani na ulotny
 * /public/uploads.
 */
export const MEDIA_STORAGE_DIR = process.env.MEDIA_STORAGE_DIR || path.join(process.cwd(), "storage", "media");

/**
 * Every raster upload (hero photo, offer photos, blog images, …) is resized
 * and re-encoded automatically on the way in — nobody has to remember to
 * shrink a photo before uploading it (spec §29, Core Web Vitals; raised
 * directly by Aga re: hero + offer photos). 2000px covers the largest
 * on-site use (hero image at 2x/retina) with room to spare for smaller
 * placements like offer cards; quality 82 is a good size/quality balance
 * for photographic WebP. SVGs are left untouched — they're already
 * vector/lightweight and re-encoding would only make them worse.
 */
const MAX_DIMENSION = 2000;
const WEBP_QUALITY = 82;

export class MediaUploadError extends Error {}

export interface StoredFile {
  fileName: string;
  url: string;
  storageProvider: "local";
  sizeBytes: number;
  mimeType: string;
}

function safeFileName(originalName: string, ext: string): string {
  const base = path
    .basename(originalName, path.extname(originalName))
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return `${base || "plik"}-${randomUUID().slice(0, 8)}${ext}`;
}

interface OptimizedImage {
  bytes: Uint8Array;
  mimeType: string;
  ext: string;
}

async function optimizeImage(bytes: Uint8Array, mimeType: string): Promise<OptimizedImage> {
  if (mimeType === "image/svg+xml") {
    return { bytes, mimeType, ext: ".svg" };
  }
  const optimized = await sharp(bytes)
    .rotate() // apply EXIF orientation before stripping metadata
    .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: "inside", withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer();
  return { bytes: optimized, mimeType: "image/webp", ext: ".webp" };
}

/**
 * Zapisuje przesłany obraz na dysku własnego serwera (MEDIA_STORAGE_DIR,
 * spec §11). Waliduje typ i rozmiar po stronie serwera niezależnie od
 * kontroli w przeglądarce, a każdy obraz rastrowy przepuszcza przez
 * optimizeImage() zanim trafi na dysk.
 */
export async function storeUploadedFile(file: File): Promise<StoredFile> {
  if (!ALLOWED_MIME_TYPES.has(file.type)) {
    throw new MediaUploadError("Dozwolone są tylko obrazy: JPG, PNG, WebP, AVIF, SVG.");
  }
  if (file.size <= 0) {
    throw new MediaUploadError("Plik jest pusty.");
  }
  if (file.size > MAX_SIZE_BYTES) {
    throw new MediaUploadError("Plik jest za duży — maksymalny rozmiar to 6MB.");
  }

  const rawBytes = new Uint8Array(await file.arrayBuffer());

  let bytes: Uint8Array;
  let mimeType: string;
  let ext: string;
  try {
    ({ bytes, mimeType, ext } = await optimizeImage(rawBytes, file.type));
  } catch {
    // Optimization failed (e.g. an unusual/corrupt file) — store the
    // original rather than blocking the upload outright.
    bytes = rawBytes;
    mimeType = file.type;
    ext = path.extname(file.name).toLowerCase();
  }

  const fileName = safeFileName(file.name, ext);

  await mkdir(MEDIA_STORAGE_DIR, { recursive: true });
  await writeFile(path.join(MEDIA_STORAGE_DIR, fileName), bytes);
  return { fileName, url: `/media/${fileName}`, storageProvider: "local", sizeBytes: bytes.byteLength, mimeType };
}

/**
 * Best-effort companion to storeUploadedFile() — removes the underlying
 * bytes when a media_assets row is deleted (see deleteMediaAction). Never
 * throws: a missing/already-gone file shouldn't block the DB delete the
 * caller is doing anyway, and disk cleanup is a nice-to-have, not a
 * correctness requirement.
 *
 * Obsługuje obie lokalne postacie URL-i, jakie ten plik kiedykolwiek
 * zapisywał (/media/... — wolumen na VPS, /uploads/... — stary, ulotny
 * fallback). Rekordy z historycznym `storage_provider = "supabase"` są
 * pomijane: tamtych bajtów i tak nie ma już czym skasować.
 */
export async function deleteStoredFile(asset: { fileName: string; url: string; storageProvider: "local" }): Promise<void> {
  let filePath: string | null = null;
  if (asset.url.startsWith("/media/")) {
    filePath = path.join(MEDIA_STORAGE_DIR, asset.fileName);
  } else if (asset.url.startsWith("/uploads/")) {
    filePath = path.join(process.cwd(), "public", "uploads", asset.fileName);
  }
  if (!filePath) return;

  try {
    await unlink(filePath);
  } catch {
    // Already gone, or storage dir not writable in this environment — fine.
  }
}
