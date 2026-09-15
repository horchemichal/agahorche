import { z } from "zod";

/** Validates the raw FormData from the /admin/aga-club "add member" form. */
export const agaClubMemberFormSchema = z.object({
  displayName: z.string().trim().min(2, "Podaj imię/pseudonim").max(120),
  email: z.string().trim().email("Podaj poprawny adres e-mail").max(200),
  tier: z.enum(["free", "premium"]).default("free"),
});

export type AgaClubMemberFormSchema = z.infer<typeof agaClubMemberFormSchema>;
