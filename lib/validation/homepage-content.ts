import { z } from "zod";

function emptyToNull(v: string) {
  return v === "" ? null : v;
}

/** One city name per line in the textarea → a clean, deduped ordered array. */
function linesToList(v: string): string[] {
  return Array.from(
    new Set(
      v
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    ),
  );
}

/** One Instagram reel link per line → a clean, deduped ordered array of valid URLs. */
function linesToInstagramUrls(v: string): string[] {
  return linesToList(v).filter((line) => {
    try {
      const url = new URL(line);
      return url.hostname === "www.instagram.com" || url.hostname === "instagram.com";
    } catch {
      return false;
    }
  });
}

/** Validates the raw FormData shape from the /admin/strona-glowna form. */
export const homepageContentFormSchema = z.object({
  heroHeadline: z.string().trim().min(2, "Podaj nagłówek hero").max(120),
  heroDescription: z.string().trim().min(10, "Podaj opis hero (min. 10 znaków)").max(400),
  heroImageMediaId: z.string().trim().transform(emptyToNull),
  serviceAreaIntro: z.string().trim().min(10, "Podaj opis sekcji „Gdzie pracuje Aga” (min. 10 znaków)").max(400),
  serviceAreaImageMediaId: z.string().trim().transform(emptyToNull),
  serviceAreaCities: z.string().transform(linesToList),
  instagramReelUrls: z.string().transform(linesToInstagramUrls),
});

export type HomepageContentFormSchema = z.infer<typeof homepageContentFormSchema>;
