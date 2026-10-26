import "server-only";
import { readFileSync } from "node:fs";
import path from "node:path";
import manifestStatyczny from "@/data/warianty-obrazow.json";

/**
 * Responsywne zdjecia bez next/image. Kazde zdjecie ma lzejsze warianty
 * (480/768/1200 px, WebP), a przegladarka sama wybiera najmniejszy, ktory
 * wystarczy na dany ekran - telefon nie pobiera pliku pod monitor 27".
 *
 * Skad sa warianty:
 * - /zdjecia/..., /oferty/... - scripts/warianty-obrazow.mjs przed buildem,
 *   manifest w data/warianty-obrazow.json (wbudowany w paczke),
 * - /media/... (wgrane w panelu) - lib/admin/media-upload.ts przy uploadzie,
 *   manifest w MEDIA_STORAGE_DIR/_warianty.json (czytany z dysku, bo
 *   przybywa go w trakcie dzialania serwisu).
 *
 * Zdjecie bez wpisu w manifescie renderuje sie dokladnie jak dotad.
 */
type Wpis = { w: number; h: number; v: number[]; webp?: string };

const STATYCZNE = manifestStatyczny as Record<string, Wpis>;
const KATALOG_MEDIOW = process.env.MEDIA_STORAGE_DIR || path.join(process.cwd(), "storage", "media");
const ODSWIEZANIE_MS = 30_000;

let media: Record<string, Wpis> = {};
let wczytano = 0;

function wariantyMediow(): Record<string, Wpis> {
  if (Date.now() - wczytano > ODSWIEZANIE_MS) {
    try {
      media = JSON.parse(readFileSync(path.join(KATALOG_MEDIOW, "_warianty.json"), "utf8"));
    } catch {
      media = {};
    }
    wczytano = Date.now();
  }
  return media;
}

export function obrazResponsywny(
  src: string,
  sizes: string,
): { src: string; srcSet?: string; sizes?: string } {
  const czysty = src.split("?")[0];
  const wpis = czysty.startsWith("/media/") ? wariantyMediow()[czysty.slice("/media/".length)] : STATYCZNE[czysty];
  if (!wpis) return { src };
  const glowny = wpis.webp ?? czysty;
  if (wpis.v.length === 0) return { src: glowny };
  const baza = glowny.replace(/\.webp$/, "");
  const srcSet = [...wpis.v.map((w) => `${baza}-${w}.webp ${w}w`), `${glowny} ${wpis.w}w`].join(", ");
  return { src: glowny, srcSet, sizes };
}
