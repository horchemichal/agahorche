import { z } from "zod";

/** Validates the raw FormData from the /admin/aga-club "add member" form. */
export const agaClubMemberFormSchema = z.object({
  displayName: z.string().trim().min(2, "Podaj imię/pseudonim").max(120),
  email: z.string().trim().email("Podaj poprawny adres e-mail").max(200),
  tier: z.enum(["free", "premium"]).default("free"),
});

export type AgaClubMemberFormSchema = z.infer<typeof agaClubMemberFormSchema>;

/** Validates the raw FormData from the /admin/aga-club/wyzwanie/[day] editor. */
export const agaClubChallengeDayFormSchema = z.object({
  task: z.string().trim().max(400).default(""),
  tip: z.string().trim().max(400).default(""),
  videoUrl: z
    .string()
    .trim()
    .max(500)
    .refine((v) => v === "" || z.url().safeParse(v).success, "Podaj poprawny URL wideo")
    .transform((v) => (v === "" ? null : v)),
  active: z.union([z.literal("on"), z.undefined()]).transform((v) => v === "on"),
});

export type AgaClubChallengeDayFormSchema = z.infer<typeof agaClubChallengeDayFormSchema>;
