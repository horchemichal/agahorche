import { z } from "zod";

const PHONE_PATTERN = /^[+]?[\d\s-]{9,20}$/;

/** Validates POSTed data for the "Strefa Klienta" registration form (ETAP 7). */
export const clientRegisterSchema = z.object({
  displayName: z.string().trim().min(2, "Podaj imię i nazwisko").max(120),
  email: z.string().trim().email("Podaj poprawny adres e-mail").max(200),
  phone: z
    .string()
    .trim()
    .max(20)
    .optional()
    .transform((v) => (v === "" ? undefined : v))
    .refine((v) => v === undefined || PHONE_PATTERN.test(v), "Podaj poprawny numer telefonu"),
  password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków").max(200),
  consentProcessing: z.literal(true, { message: "Zgoda na przetwarzanie danych jest wymagana" }),
  consentMarketing: z.boolean().optional(),
  // Honeypot — same idiom as lib/validation/lead.ts.
  website: z.string().max(200).optional(),
});

export const clientLoginSchema = z.object({
  email: z.string().trim().email("Podaj poprawny adres e-mail").max(200),
  password: z.string().min(1, "Podaj hasło").max(200),
});
