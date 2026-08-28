import { z } from "zod";
import { parsePlnToCents } from "@/lib/format";

function emptyToNull(v: string) {
  return v === "" ? null : v;
}

/**
 * Validates the raw FormData shape from the /admin/oferta form (spec §5).
 * Prices are entered in PLN and converted to cents here — the repository
 * layer only ever sees integer cents, never floats or currency strings.
 */
export const offerFormSchema = z.object({
  productName: z.string().trim().min(2, "Podaj nazwę produktu").max(200),
  model: z.string().trim().min(1, "Podaj model").max(50),
  price: z
    .string()
    .trim()
    .transform((val, ctx) => {
      const cents = parsePlnToCents(val);
      if (cents === undefined) {
        ctx.addIssue({ code: "custom", message: "Podaj poprawną cenę (np. 5999 lub 5999,99)" });
        return z.NEVER;
      }
      return cents;
    }),
  installmentPrice: z
    .string()
    .trim()
    .transform((val, ctx) => {
      const cents = parsePlnToCents(val);
      if (cents === undefined) {
        ctx.addIssue({ code: "custom", message: "Podaj poprawną ratę miesięczną" });
        return z.NEVER;
      }
      return cents;
    }),
  installmentMonths: z
    .string()
    .trim()
    .transform((val, ctx) => {
      if (val === "") return null;
      const n = Number(val);
      if (!Number.isInteger(n) || n <= 0) {
        ctx.addIssue({ code: "custom", message: "Liczba miesięcy musi być liczbą całkowitą dodatnią" });
        return z.NEVER;
      }
      return n;
    }),
  description: z.string().trim().max(2000).default(""),
  imageMediaId: z.string().trim().transform(emptyToNull),
  ctaLabel: z.string().trim().min(1, "Podaj tekst przycisku").max(80),
  ctaHref: z.string().trim().min(1, "Podaj link przycisku").max(300),
  bonuses: z
    .string()
    .transform((val) =>
      val
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    ),
  conditions: z.string().trim().max(2000).default(""),
  startsAt: z.string().trim().transform((v) => (v === "" ? null : new Date(v).toISOString())),
  endsAt: z.string().trim().transform((v) => (v === "" ? null : new Date(v).toISOString())),
  isActive: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
  isPrimary: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
});

export type OfferFormSchema = z.infer<typeof offerFormSchema>;
