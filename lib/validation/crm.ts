import { z } from "zod";

/** Formularz /admin/crm (nowy klient i edycja). */
export const crmKlientFormSchema = z
  .object({
    imieNazwisko: z.string().trim().min(2, "Podaj imię i nazwisko").max(120),
    miejscowosc: z.string().trim().min(2, "Podaj miejscowość").max(80),
    polecenie: z.enum(["osoba", "strona-www"], { message: "Zaznacz, kto polecił" }),
    polecil: z.string().trim().max(120),
    kupil: z.enum(["tak", "nie"], { message: "Zaznacz: kupił czy nie kupił" }),
    telefon: z
      .string()
      .trim()
      .max(30)
      .refine((v) => /^[+\d][\d\s()-]*$/.test(v) && v.replace(/\D/g, "").length >= 9, "Podaj numer telefonu (min. 9 cyfr)"),
    notatka: z.string().trim().max(2000, "Notatka może mieć najwyżej 2000 znaków"),
  })
  .superRefine((d, ctx) => {
    if (d.polecenie === "osoba" && d.polecil.length < 2) {
      ctx.addIssue({ code: "custom", path: ["polecil"], message: "Wpisz imię i nazwisko osoby, która poleciła" });
    }
  })
  .transform((d) => ({
    imieNazwisko: d.imieNazwisko,
    miejscowosc: d.miejscowosc,
    polecenie: d.polecenie,
    polecil: d.polecenie === "osoba" ? d.polecil : null,
    kupil: d.kupil === "tak",
    telefon: d.telefon.replace(/\s+/g, " "),
    notatka: d.notatka === "" ? null : d.notatka,
  }));
