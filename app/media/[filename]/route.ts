import { NextResponse, type NextRequest } from "next/server";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { MEDIA_STORAGE_DIR } from "@/lib/admin/media-upload";

/**
 * Public file server for the self-hosted media storage provider (Zadanie 4,
 * Krok 3 — zamiennik dla Supabase Storage). Serves whatever
 * storeUploadedFile() wrote into MEDIA_STORAGE_DIR when
 * MEDIA_STORAGE_PROVIDER=local-vps.
 *
 * Deliberately NOT under /api/ — robots.txt disallows that whole prefix
 * (spec §28), which would make every uploaded offer/hero/blog photo
 * unindexable by Google Images. This route is a normal, crawlable public
 * path instead, same as a Supabase Storage public URL would be.
 */

const EXTENSION_MIME_TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

// Matches exactly what safeFileName() in lib/admin/media-upload.ts produces —
// lowercase slug + 8 hex chars + extension. Anything else is refused
// outright rather than attempting to sanitize it (defends against path
// traversal via ../ or an encoded slash in the dynamic segment).
const SAFE_FILENAME = /^[a-z0-9-]{1,80}\.[a-z0-9]{2,5}$/;

export async function GET(_request: NextRequest, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;

  if (!SAFE_FILENAME.test(filename)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const ext = path.extname(filename).toLowerCase();
  const mimeType = EXTENSION_MIME_TYPES[ext];
  if (!mimeType) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filePath = path.join(MEDIA_STORAGE_DIR, filename);
  // Belt-and-braces: confirm the resolved path is still inside the storage
  // dir even though SAFE_FILENAME already rules out "..\/" and separators.
  if (!filePath.startsWith(path.join(MEDIA_STORAGE_DIR, path.sep))) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) return new NextResponse("Not found", { status: 404 });

    const bytes = await readFile(filePath);
    return new NextResponse(new Uint8Array(bytes), {
      status: 200,
      headers: {
        "Content-Type": mimeType,
        "Content-Length": String(fileStat.size),
        // Filenames are effectively immutable (random suffix per upload —
        // re-uploading never overwrites an existing name), so a long,
        // immutable cache is safe.
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
