import { z } from "zod";

/** Validates the raw FormData shape from the /admin/promocje form (spec §6). */
export const promotionFormSchema = z.object({
  title: z.string().trim().min(2, "Podaj tytuł promocji").max(200),
  shortDescription: z.string().trim().min(1, "Podaj krótki opis").max(300),
  fullDescription: z.string().trim().max(3000).default(""),
  ctaLabel: z.string().trim().min(1, "Podaj tekst przycisku").max(80),
  ctaHref: z.string().trim().min(1, "Podaj link przycisku").max(300),
  startsAt: z
    .string()
    .trim()
    .min(1, "Podaj datę rozpoczęcia")
    .transform((v) => new Date(v).toISOString()),
  endsAt: z
    .string()
    .trim()
    .min(1, "Podaj datę zakończenia")
    .transform((v) => new Date(v).toISOString()),
  priority: z
    .string()
    .trim()
    .transform((val, ctx) => {
      if (val === "") return 0;
      const n = Number(val);
      if (!Number.isInteger(n)) {
        ctx.addIssue({ code: "custom", message: "Priorytet musi być liczbą całkowitą" });
        return z.NEVER;
      }
      return n;
    }),
  isDraft: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
});

export type PromotionFormSchema = z.infer<typeof promotionFormSchema>;
