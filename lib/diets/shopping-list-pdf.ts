import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { getDietPlan } from "@/data/diets/categories";
import { getShoppingList } from "@/data/diets/shopping-lists";
import { SITE } from "@/lib/utils";

/**
 * Server-side PDF export for a plan's shopping list (spec §17/§30 —
 * "Pobierz PDF" was shipped disabled in ETAP 1-4, see
 * components/diets/shopping-list.tsx). Uses `pdf-lib` — pure JS, no native
 * bindings/headless browser, so it stays cheap in the Alpine Docker image
 * (same reasoning as choosing `bcryptjs` over `bcrypt` in Krok 4 of the
 * Postgres migration).
 *
 * Content is always looked up server-side from `planId` — the client never
 * supplies the list of items itself, only which ones are already checked
 * off (optional, purely cosmetic strikethrough in the PDF). This keeps the
 * export honest: it can only ever contain the same real, disclosed example
 * data already rendered on the page (spec §42 "nie wymyślaj danych").
 *
 * Font: pdf-lib's built-in StandardFonts (WinAnsi encoding) cannot encode
 * Polish diacritics ("ł", "ą", "ę", "ś", "ć", "ż", "ź", "ń" — this broke the
 * very first attempt at this route with a hard crash on "ł"). Instead we
 * register `@pdf-lib/fontkit` and embed DejaVu Sans (public/fonts/pdf/,
 * Bitstream Vera + Arev license — see LICENSE-DejaVu.txt next to the font
 * files), which has full Latin Extended-A coverage. Committed as static
 * files under /public rather than read from node_modules at runtime, so
 * the standalone Docker build always has them without relying on
 * file-tracing picking up an npm package's font assets.
 */
const FONTS_DIR = path.join(process.cwd(), "public", "fonts", "pdf");

async function loadFont(fileName: string): Promise<Uint8Array> {
  const bytes = await readFile(path.join(FONTS_DIR, fileName));
  return new Uint8Array(bytes);
}

export async function renderShoppingListPdf(planId: string, checkedItems: string[] = []): Promise<Uint8Array | null> {
  const plan = getDietPlan(planId);
  const groups = getShoppingList(planId);
  if (!plan || !groups) return null;

  const checked = new Set(checkedItems);
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  doc.setTitle(`Lista zakupów — ${plan.label}`);
  doc.setAuthor(SITE.name);
  doc.setSubject("Przykładowa lista zakupów wygenerowana na agahorche.pl — dane ilustracyjne.");

  const [regularBytes, boldBytes] = await Promise.all([loadFont("DejaVuSans.ttf"), loadFont("DejaVuSans-Bold.ttf")]);
  const font = await doc.embedFont(regularBytes, { subset: true });
  const fontBold = await doc.embedFont(boldBytes, { subset: true });

  const pageWidth = 595.28; // A4 @ 72dpi
  const pageHeight = 841.89;
  const margin = 50;
  const brand = rgb(0.13, 0.42, 0.28); // approximates the site's brand-700 green
  const neutral = rgb(0.15, 0.15, 0.16);
  const muted = rgb(0.45, 0.45, 0.47);

  let page = doc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  function ensureSpace(needed: number) {
    if (y - needed < margin) {
      page = doc.addPage([pageWidth, pageHeight]);
      y = pageHeight - margin;
    }
  }

  function drawLine(text: string, opts: { size?: number; bold?: boolean; color?: ReturnType<typeof rgb>; gap?: number } = {}) {
    const size = opts.size ?? 11;
    ensureSpace(size + (opts.gap ?? 6));
    page.drawText(text, {
      x: margin,
      y,
      size,
      font: opts.bold ? fontBold : font,
      color: opts.color ?? neutral,
    });
    y -= size + (opts.gap ?? 6);
  }

  drawLine(SITE.name.toUpperCase(), { size: 12, bold: true, color: brand, gap: 4 });
  drawLine(`Lista zakupów — ${plan.label}`, { size: 18, bold: true, gap: 14 });
  drawLine(
    "Dane przykładowe/ilustracyjne, nie zweryfikowane przez dietetyka — służą pokazaniu działania konfiguratora.",
    { size: 9, color: muted, gap: 18 },
  );

  for (const group of groups) {
    if (group.items.length === 0) continue;
    ensureSpace(28);
    drawLine(group.category.toUpperCase(), { size: 11, bold: true, color: brand, gap: 8 });
    for (const item of group.items) {
      const prefix = checked.has(item) ? "[x] " : "[ ] ";
      drawLine(`${prefix}${item}`, { size: 11, gap: 5 });
    }
    y -= 6;
  }

  ensureSpace(30);
  drawLine(`Wygenerowano na ${SITE.url}${SITE.url.endsWith("/") ? "" : ""}`, { size: 8, color: muted, gap: 4 });

  return doc.save();
}
