import { z } from "zod";

const PHONE_PATTERN = /^[+]?[\d\s-]{9,20}$/;

const LEAD_SOURCES = [
  "homepage",
  "thermomix-page",
  "city-page",
  "district-page",
  "voivodeship-page",
  "presentation-page",
  "blog",
  "aga-club",
  "other",
] as const;

const PRESENTATION_PREFERENCES = ["w-domu", "online", "nie-wiem"] as const;

/**
 * Validates the JSON body POSTed to /api/leads from components/lead/lead-form.tsx
 * (spec §22). Every public "Umów prezentację" CTA funnels through this one
 * contract regardless of which page it's embedded on.
 */
export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Podaj imię i nazwisko").max(120),
  phone: z.string().trim().regex(PHONE_PATTERN, "Podaj poprawny numer telefonu").max(20),
  email: z.string().trim().email("Podaj poprawny adres e-mail").max(200),
  city: z.string().trim().min(2, "Podaj miejscowość").max(120),
  preferredDate: z
    .string()
    .trim()
    .max(120)
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  message: z
    .string()
    .trim()
    .max(2000)
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  presentationType: z.enum(PRESENTATION_PREFERENCES).optional(),
  consentProcessing: z.literal(true, { message: "Zgoda na przetwarzanie danych jest wymagana" }),
  consentMarketing: z.boolean().optional(),
  // Honeypot — must stay empty for real users; the route handler checks it
  // and silently discards the submission if it's filled in.
  website: z.string().max(200).optional(),
  source: z.enum(LEAD_SOURCES),
  sourcePath: z.string().trim().min(1).max(300),
});

export type LeadFormSchema = z.infer<typeof leadFormSchema>;

/** Valid transitions for the admin's manual status control (Aga Admin §13). */
export const LEAD_STATUSES = ["NEW", "CONTACTED", "PRESENTATION_BOOKED", "SOLD", "LOST"] as const;

export const leadStatusUpdateSchema = z.object({
  status: z.enum(LEAD_STATUSES),
});
