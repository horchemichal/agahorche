import { z } from "zod";

/** Validates the raw FormData shape from the /admin/faq form (spec §10). */
export const faqFormSchema = z.object({
  question: z.string().trim().min(3, "Podaj pytanie").max(300),
  answer: z.string().trim().min(3, "Podaj odpowiedź").max(3000),
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
  active: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
  entityType: z.enum(["page", "product", "city", "article", "aga-club", "global"]),
  entityId: z.string().trim().max(200).transform((v) => (v === "" ? null : v)),
});

export type FaqFormSchema = z.infer<typeof faqFormSchema>;
