import { z } from "zod";
import { DZIALY_PORADNIKA } from "@/types/poradnik";

const SLUGI_DZIALOW = DZIALY_PORADNIKA.map((d) => d.slug) as [string, ...string[]];

/**
 * Walidacja formularza /admin/poradnik.
 *
 * `slug` jest wyliczany z tytułu, gdy pole zostanie puste — Aga nie musi
 * wiedzieć, co to slug, a adres i tak musi być czytelny.
 */
export const poradnikFormSchema = z.object({
  dzial: z.enum(SLUGI_DZIALOW),
  slug: z
    .string()
    .trim()
    .max(120)
    .regex(/^[a-z0-9-]*$/, "Adres może zawierać tylko małe litery bez ogonków, cyfry i myślniki"),
  tytul: z.string().trim().min(3, "Podaj tytuł").max(160),
  lead: z.string().trim().max(300),
  tresc: z.string().trim().min(3, "Napisz treść wpisu").max(12000),
  przepisId: z
    .string()
    .trim()
    .max(80)
    .transform((v) => (v === "" ? null : v)),
  wlasne: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
  opublikowany: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
  kolejnosc: z
    .string()
    .trim()
    .transform((val, ctx) => {
      if (val === "") return 0;
      const n = Number(val);
      if (!Number.isInteger(n)) {
        ctx.addIssue({ code: "custom", message: "Kolejność musi być liczbą całkowitą" });
        return z.NEVER;
      }
      return n;
    }),
});

export type PoradnikFormSchema = z.infer<typeof poradnikFormSchema>;

/**
 * Zamienia tytuł na adres: „Zupa wyszła za słona" → „zupa-wyszla-za-slona".
 * Polskie znaki mapujemy ręcznie, bo `normalize("NFD")` nie rozkłada „ł".
 */
export function slugZTytulu(tytul: string): string {
  const ogonki: Record<string, string> = {
    ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z",
  };
  return tytul
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (z) => ogonki[z] ?? z)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}
