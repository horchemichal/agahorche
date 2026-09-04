import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { DIET_CATEGORIES, getPublicDietPlan } from "@/data/diets/categories";
import { getRecipe } from "@/data/diets/recipes";
import { MEAL_TYPE_LABELS } from "@/types/diet";
import { SITE } from "@/lib/utils";

/**
 * "Jadłospis na 1 dzień" — jeden bezpłatny, gotowy do pobrania PDF dla
 * KAŻDEJ diety (sierpień 2026, prośba Agi: „każda dieta po 1 szt, po
 * wybraniu do ściągnięcia w PDF”). Zastępuje wcześniejszą bramkę „Dołącz
 * do Aga Club” w konfiguratorze: odwiedzający dostaje realną wartość od
 * razu, a limit („więcej diet tylko dla klientów”) komunikujemy wprost
 * zamiast blokować cokolwiek za rejestracją.
 *
 * Treść pochodzi WYŁĄCZNIE z dnia 1 publicznego planu danej kategorii
 * (data/diets/categories.ts → data/diets/recipes.ts) — dokładnie to samo,
 * co widać na stronie. Nic nie jest tu dopisywane ani generowane, więc PDF
 * nie może „obiecać” dania, którego nie ma w systemie (spec §42).
 *
 * Kategoria `niemowleta` celowo nie ma planu (patrz komentarz w
 * data/diets/categories.ts — treści dot. rozszerzania diety niemowląt nie
 * wymyślamy), więc ta funkcja zwraca dla niej `null`, a konfigurator
 * pokazuje uczciwy komunikat zamiast przycisku pobierania.
 *
 * Silnik PDF i czcionki jak w lib/diets/shopping-list-pdf.ts — pdf-lib +
 * DejaVu Sans z public/fonts/pdf (wbudowane fonty pdf-lib nie kodują
 * polskich znaków).
 */
const FONTS_DIR = path.join(process.cwd(), "public", "fonts", "pdf");

const PAGE_WIDTH = 595.28; // A4 @ 72dpi
const PAGE_HEIGHT = 841.89;
const MARGIN = 50;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const BRAND = rgb(0.13, 0.42, 0.28);
const NEUTRAL = rgb(0.15, 0.15, 0.16);
const MUTED = rgb(0.45, 0.45, 0.47);
const HAIRLINE = rgb(0.86, 0.86, 0.87);

async function loadFont(fileName: string): Promise<Uint8Array> {
  const bytes = await readFile(path.join(FONTS_DIR, fileName));
  return new Uint8Array(bytes);
}

/** Dzieli tekst na linie mieszczące się w `maxWidth` przy danym foncie. */
function wrap(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/** Składniki odżywcze jednego dania w jednej linii, bez pustych wartości. */
function macroLine(recipe: ReturnType<typeof getRecipe>): string | null {
  if (!recipe) return null;
  const parts: string[] = [];
  if (recipe.calories != null) parts.push(`${recipe.calories} kcal`);
  if (recipe.proteinG != null) parts.push(`białko ${recipe.proteinG} g`);
  if (recipe.fatG != null) parts.push(`tłuszcz ${recipe.fatG} g`);
  if (recipe.carbsG != null) parts.push(`węglowodany ${recipe.carbsG} g`);
  return parts.length > 0 ? parts.join("  ·  ") : null;
}

export async function renderJadlospisPdf(slug: string): Promise<{ bytes: Uint8Array; fileName: string } | null> {
  const category = DIET_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return null;
  const plan = getPublicDietPlan(category);
  const day = plan?.days.find((d) => d.meals.length > 0);
  if (!plan || !day) return null;

  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  doc.setTitle(`${category.name} — jadłospis na 1 dzień`);
  doc.setAuthor(SITE.name);
  doc.setSubject(`Bezpłatny przykładowy jadłospis (${category.name}) z agahorche.pl.`);

  const [regularBytes, boldBytes] = await Promise.all([
    loadFont("DejaVuSans.ttf"),
    loadFont("DejaVuSans-Bold.ttf"),
  ]);
  const font = await doc.embedFont(regularBytes, { subset: true });
  const fontBold = await doc.embedFont(boldBytes, { subset: true });

  let page: PDFPage = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  function ensureSpace(needed: number) {
    if (y - needed < MARGIN) {
      page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      y = PAGE_HEIGHT - MARGIN;
    }
  }

  function text(
    value: string,
    opts: { size?: number; bold?: boolean; color?: ReturnType<typeof rgb>; gap?: number; indent?: number } = {},
  ) {
    const size = opts.size ?? 11;
    const gap = opts.gap ?? 6;
    const indent = opts.indent ?? 0;
    const chosen = opts.bold ? fontBold : font;
    for (const line of wrap(value, chosen, size, CONTENT_WIDTH - indent)) {
      ensureSpace(size + gap);
      page.drawText(line, { x: MARGIN + indent, y, size, font: chosen, color: opts.color ?? NEUTRAL });
      y -= size + gap;
    }
  }

  function rule(gap = 14) {
    ensureSpace(gap * 2);
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: PAGE_WIDTH - MARGIN, y },
      thickness: 0.75,
      color: HAIRLINE,
    });
    y -= gap;
  }

  // --- Nagłówek ---
  text(`${SITE.name.toUpperCase()}  ·  OFICJALNY PRZEDSTAWICIEL THERMOMIX`, {
    size: 9,
    bold: true,
    color: BRAND,
    gap: 10,
  });
  text(category.name, { size: 20, bold: true, gap: 6 });
  text("Przykładowy jadłospis na jeden dzień", { size: 13, color: MUTED, gap: 14 });
  rule();

  // --- Posiłki ---
  let totalCalories = 0;
  for (const meal of day.meals) {
    const recipe = getRecipe(meal.recipeId);
    if (!recipe) continue;
    totalCalories += recipe.calories ?? 0;

    ensureSpace(56);
    text(MEAL_TYPE_LABELS[meal.type].toUpperCase(), { size: 9, bold: true, color: BRAND, gap: 5 });
    text(recipe.name, { size: 13, bold: true, gap: 5 });

    const macros = macroLine(recipe);
    if (macros) text(macros, { size: 9.5, color: MUTED, gap: 5 });

    const altId = meal.alternativeRecipeIds?.[0];
    const alt = altId ? getRecipe(altId) : undefined;
    if (alt) text(`Zamiana: ${alt.name}`, { size: 9.5, color: MUTED, gap: 5 });

    y -= 8;
  }

  rule();
  if (totalCalories > 0) {
    text(`Razem w ciągu dnia: około ${totalCalories} kcal`, { size: 11, bold: true, gap: 10 });
  }
  text(
    "Wartości odżywcze są orientacyjne i mają charakter poglądowy — nie zastępują konsultacji z dietetykiem.",
    { size: 8.5, color: MUTED, gap: 6 },
  );
  if (category.medicalDisclaimer) {
    text(category.medicalDisclaimer, { size: 8.5, color: MUTED, gap: 6 });
  }

  // --- Co dalej ---
  y -= 10;
  rule();
  text("Chcesz więcej niż jeden dzień?", { size: 13, bold: true, gap: 8 });
  text(
    "To bezpłatny jadłospis — jeden z każdej diety dostępnej na agahorche.pl. Pełne 7-dniowe " +
      "jadłospisy ze wszystkich diet, warianty 14-dniowe i listy zakupów przekazuję wyłącznie " +
      "moim klientkom i klientom: osobom, które kupiły Thermomix u mnie, oficjalnej " +
      "przedstawicielki Thermomix.",
    { size: 10.5, gap: 6 },
  );
  y -= 6;
  text("Zadzwoń albo napisz, a powiem Ci, jak to działa:", { size: 10.5, gap: 6 });
  const domain = SITE.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  text(`${SITE.name}  ·  tel. ${SITE.phone}  ·  ${domain}`, { size: 10.5, bold: true, color: BRAND, gap: 6 });

  const bytes = await doc.save();
  return { bytes, fileName: `jadlospis-${category.slug}-agahorche.pdf` };
}
