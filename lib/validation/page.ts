import { z } from "zod";

const SLUG_PATTERN = /^[a-z0-9]+(?:[-/][a-z0-9]+)*$/;

/** Top-level segments that are never routed through the CMS catch-all — reserved so a page can't be created unreachably. */
const RESERVED_SLUG_PREFIXES = ["admin", "api"];

/** Validates the raw FormData shape from the /admin/strony form (spec §7). */
export const pageFormSchema = z.object({
  slug: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Podaj slug strony")
    .max(200)
    .regex(SLUG_PATTERN, "Slug może zawierać tylko małe litery, cyfry, myślniki i ukośniki (np. regulamin-promocji)")
    .refine((slug) => !RESERVED_SLUG_PREFIXES.includes(slug.split("/")[0]), {
      message: "Ten slug jest zarezerwowany i nigdy nie będzie dostępny publicznie.",
    }),
  title: z.string().trim().min(2, "Podaj tytuł strony").max(200),
  content: z.string().trim().max(20000).default(""),
  status: z.enum(["draft", "published"]),
  seoTitle: z.string().trim().max(200).transform((v) => (v === "" ? null : v)),
  seoDescription: z.string().trim().max(300).transform((v) => (v === "" ? null : v)),
  indexable: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
});

export type PageFormSchema = z.infer<typeof pageFormSchema>;
