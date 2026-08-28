/**
 * Real customer testimonials only (spec §11/§42: never fabricate opinions).
 * This array starts empty everywhere it's used — the Opinie section renders
 * nothing (not placeholder cards) until Aga supplies real, attributable
 * testimonials here.
 */
export interface Testimonial {
  id: string;
  authorName: string;
  authorCityLabel?: string; // e.g. "Kraków" — only if the customer agreed to it being shown
  quote: string;
  /** Only set when Aga has a genuine, permission-cleared source to link. */
  source?: string;
  ratingOutOf5?: number;
}
