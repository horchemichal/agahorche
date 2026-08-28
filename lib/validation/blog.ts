import { z } from "zod";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const CATEGORY_VALUES = [
  "thermomix",
  "tm7",
  "tm6",
  "gotowanie",
  "dla-rodzin",
  "dla-mam",
  "dla-poczatkujacych",
  "porady",
  "prezentacja",
  "zakup",
  "finansowanie",
  "przepisy",
  "aga-club",
  "lokalne",
] as const;

const CLUSTER_VALUES = [
  "tm7",
  "prezentacja",
  "zakup",
  "gotowanie",
  "dla-rodziny",
  "dla-mam",
  "thermomix-miasto",
  "aga-club",
] as const;

/** Validates the raw FormData shape from the /admin/blog form (spec §14/§15). */
export const postFormSchema = z.object({
  title: z.string().trim().min(2, "Podaj tytuł").max(200),
  slug: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Podaj slug")
    .max(150)
    .regex(SLUG_PATTERN, "Slug: dozwolone tylko małe litery, cyfry i myślniki"),
  excerpt: z.string().trim().min(1, "Podaj krótki zajawkowy opis").max(400),
  content: z.string().trim().max(30000).default(""),
  category: z.enum(CATEGORY_VALUES),
  cluster: z.enum(CLUSTER_VALUES),
  relatedLocationSlug: z.string().trim().max(100).transform((v) => (v === "" ? undefined : v)),
  status: z.enum(["draft", "published"]),
  indexable: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
  coverImage: z.string().trim().max(500).transform((v) => (v === "" ? undefined : v)),
  seoTitle: z.string().trim().max(200).transform((v) => (v === "" ? null : v)),
  seoDescription: z.string().trim().max(300).transform((v) => (v === "" ? null : v)),
  publishedAt: z.string().trim().transform((v) => (v === "" ? null : new Date(v).toISOString())),
});

export type PostFormSchema = z.infer<typeof postFormSchema>;
