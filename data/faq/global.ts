import type { FaqItem } from "@/types/seo";

/**
 * Global, site-wide FAQ used on the homepage and /faq. Location-specific
 * FAQ is generated separately (see /lib/locations/content.ts). Answers
 * that need a fact only Aga can confirm are explicitly marked TODO rather
 * than guessed (spec §42).
 */
export const GLOBAL_FAQ: FaqItem[] = [
  {
    question: "Czy prezentacja Thermomix do czegoś zobowiązuje?",
    answer: "Nie. Prezentacja jest bezpłatna i niezobowiązująca — decyzję podejmujesz po spotkaniu, we własnym tempie.",
  },
  {
    question: "Czy Thermomix zastępuje inne urządzenia kuchenne?",
    answer:
      "Thermomix łączy funkcje wielu urządzeń (m.in. miksowania, gotowania, ważenia, miksowania na parze) w jednym sprzęcie — podczas prezentacji Aga pokazuje to na konkretnych przykładach.",
  },
  {
    question: "Czy działasz na terenie całej Polski?",
    answer:
      "Tak — Aga umawia stacjonarne prezentacje w całej Polsce, dojeżdżając do Ciebie niezależnie od lokalizacji.",
  },
];
