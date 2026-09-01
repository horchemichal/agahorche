import { z } from "zod";

/**
 * Walidacja formularza z /admin/ustawienia.
 *
 * Checkbox w HTML nie wysyła nic, gdy jest odznaczony — stąd
 * `z.union([literal("on"), undefined])`, ten sam wzorzec co przy
 * `sitemapEnabled` w seo-settings.
 */
export const financingSettingsFormSchema = z.object({
  ratyZeroDostepne: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
  ratyZeroKomunikat: z
    .string()
    .trim()
    .min(20, "Komunikat powinien mieć co najmniej 20 znaków")
    .max(400, "Komunikat nie może przekraczać 400 znaków"),
});

export type FinancingSettingsFormSchema = z.infer<typeof financingSettingsFormSchema>;
