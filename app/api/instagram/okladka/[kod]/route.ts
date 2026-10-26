import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";

/**
 * Okładka reela z Instagrama jako lekki webp (23.10.2026).
 * Pierwsze zapytanie pobiera obraz z instagram.com/p/<kod>/media/?size=l,
 * zmniejsza do 640 px i zapisuje w wolumenie mediów (storage/media/instagram),
 * kolejne serwują plik z dysku. Plik starszy niż 30 dni jest odświeżany.
 */
export const runtime = "nodejs";

const KATALOG = path.join(
  process.env.MEDIA_STORAGE_DIR || path.join(process.cwd(), "storage", "media"),
  "instagram",
);
const KOD = /^[A-Za-z0-9_-]{5,40}$/;
const UA = "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)";
const MIESIAC_MS = 30 * 24 * 3600 * 1000;

async function pobierz(kod: string): Promise<Buffer> {
  const r = await fetch("https://www.instagram.com/p/" + kod + "/media/?size=l", {
    headers: { "User-Agent": UA },
    redirect: "follow",
    signal: AbortSignal.timeout(10000),
  });
  const typ = r.headers.get("content-type") || "";
  if (!r.ok || !typ.startsWith("image/")) throw new Error("instagram " + r.status + " " + typ);
  const surowe = Buffer.from(await r.arrayBuffer());
  return sharp(surowe).rotate().resize({ width: 640, withoutEnlargement: true }).webp({ quality: 72 }).toBuffer();
}

export async function GET(_req: Request, { params }: { params: Promise<{ kod: string }> }) {
  const { kod } = await params;
  if (!KOD.test(kod)) return new Response("Zły kod", { status: 400 });
  const plik = path.join(KATALOG, kod + ".webp");

  let bufor: Buffer | null = null;
  let stary = true;
  try {
    const st = await fs.stat(plik);
    bufor = await fs.readFile(plik);
    stary = Date.now() - st.mtimeMs > MIESIAC_MS;
  } catch {
    bufor = null;
  }

  if (!bufor || stary) {
    try {
      const nowy = await pobierz(kod);
      await fs.mkdir(KATALOG, { recursive: true });
      await fs.writeFile(plik, nowy);
      bufor = nowy;
    } catch {
      if (!bufor) {
        return new Response("Brak okładki", { status: 404, headers: { "Cache-Control": "public, max-age=600" } });
      }
    }
  }

  return new Response(new Uint8Array(bufor), {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=604800, stale-while-revalidate=86400",
    },
  });
}
