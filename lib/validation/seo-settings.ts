import { z } from "zod";

function emptyToNull(v: string) {
  return v === "" ? null : v;
}

/** Validates the raw FormData shape from the /admin/seo global settings form (spec §12). */
export const seoSettingsFormSchema = z.object({
  siteTitle: z.string().trim().min(2, "Podaj tytuł strony").max(120),
  siteDescription: z.string().trim().min(10, "Podaj opis strony (min. 10 znaków)").max(300),
  robotsDefault: z.enum(["index,follow", "noindex,follow"]),
  sitemapEnabled: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
  ogImageMediaId: z.string().trim().transform(emptyToNull),
  faviconMediaId: z.string().trim().transform(emptyToNull),
});

export type SeoSettingsFormSchema = z.infer<typeof seoSettingsFormSchema>;
