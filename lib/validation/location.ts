import { z } from "zod";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const slugField = (label: string) =>
  z.string().trim().toLowerCase().min(1, `Podaj ${label}`).max(100).regex(SLUG_PATTERN, `${label}: dozwolone tylko małe litery, cyfry i myślniki`);
const optionalSlugField = z
  .string()
  .trim()
  .toLowerCase()
  .max(100)
  .transform((v) => (v === "" ? null : v))
  .refine((v) => v === null || SLUG_PATTERN.test(v), { message: "Dozwolone tylko małe litery, cyfry i myślniki" });

function splitList(raw: string): string[] {
  return raw
    .split(/[\n,]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Validates the raw FormData shape from the /admin/lokalizacje form (spec §6/§21). */
export const locationFormSchema = z.object({
  name: z.string().trim().min(1, "Podaj nazwę").max(150),
  nameLocative: z.string().trim().max(150).transform((v) => (v === "" ? null : v)),
  slug: slugField("slug"),
  unitType: z.enum(["wojewodztwo", "powiat", "gmina", "miasto", "miejscowosc"]),
  wojewodztwoSlug: optionalSlugField,
  powiatSlug: optionalSlugField,
  gminaSlug: optionalSlugField,
  region: z.string().trim().max(100).transform((v) => (v === "" ? null : v)),
  population: z
    .string()
    .trim()
    .transform((val, ctx) => {
      if (val === "") return undefined;
      const n = Number(val);
      if (!Number.isInteger(n) || n < 0) {
        ctx.addIssue({ code: "custom", message: "Liczba mieszkańców musi być liczbą całkowitą" });
        return z.NEVER;
      }
      return n;
    }),
  populationSource: z.string().trim().max(300).transform((v) => (v === "" ? undefined : v)),
  neighborSlugs: z.string().transform(splitList),
  largerCitySlug: z.string().trim().max(100).transform((v) => (v === "" ? undefined : v)),
  agaServesLocation: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
  seoPriority: z
    .string()
    .trim()
    .transform((val, ctx) => {
      const n = val === "" ? 50 : Number(val);
      if (!Number.isInteger(n) || n < 1 || n > 100) {
        ctx.addIssue({ code: "custom", message: "Priorytet SEO musi być liczbą całkowitą 1-100" });
        return z.NEVER;
      }
      return n;
    }),
  tier: z.enum(["A", "B", "C", "long-tail"]),
  indexable: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
  robots: z.enum(["", "index,follow", "noindex,follow", "noindex,nofollow"]).transform((v) => (v === "" ? undefined : v)),
  inSitemap: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
  contentStatus: z.enum(["not_started", "draft", "published", "thin", "retired"]),
  localFacts: z.string().transform(splitList),
});

export type LocationFormSchema = z.infer<typeof locationFormSchema>;

/** Derives the routing urlPath from hierarchy — never hand-typed, so it can never drift from the location catch-all's matching logic (lib/locations/index.ts). */
export function computeUrlPath(data: {
  unitType: LocationFormSchema["unitType"];
  slug: string;
  wojewodztwoSlug: string | null;
  powiatSlug: string | null;
}): string {
  switch (data.unitType) {
    case "wojewodztwo":
    case "miasto":
      return `/thermomix/${data.slug}`;
    case "powiat":
    case "gmina":
      return data.wojewodztwoSlug ? `/thermomix/${data.wojewodztwoSlug}/${data.slug}` : `/thermomix/${data.slug}`;
    case "miejscowosc":
      if (data.wojewodztwoSlug && data.powiatSlug) {
        return `/thermomix/${data.wojewodztwoSlug}/${data.powiatSlug}/${data.slug}`;
      }
      if (data.wojewodztwoSlug) return `/thermomix/${data.wojewodztwoSlug}/${data.slug}`;
      return `/thermomix/${data.slug}`;
  }
}
