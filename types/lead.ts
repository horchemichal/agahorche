/**
 * Lead capture domain types. Kept intentionally small — only what the
 * primary conversion goal (umów prezentację) needs (spec §22).
 */

export type PresentationPreference = "w-domu" | "online" | "nie-wiem";

export interface LeadFormValues {
  name: string;
  phone: string;
  email: string;
  city: string;
  preferredDate?: string;
  message?: string;
  presentationType?: PresentationPreference;
  /** Required legal consent checkboxes — never pre-checked. */
  consentProcessing: boolean;
  consentMarketing?: boolean;
  /** Anti-spam honeypot field name; must stay empty. */
  website?: string;
}

export type LeadSource =
  | "homepage"
  | "thermomix-page"
  | "city-page"
  /**
   * Strony dzielnic (/thermomix/krakow/nowa-huta). Osobne źródło od
   * `city-page`, bo to jedyny sposób, żeby po miesiącu odpowiedzieć na
   * pytanie „czy podstrony dzielnic w ogóle przynoszą zgłoszenia”.
   * Kolumna `source` w bazie jest zwykłym `text` bez `check`, więc
   * dopisanie wariantu nie wymaga migracji.
   */
  | "district-page"
  | "voivodeship-page"
  | "presentation-page"
  | "blog"
  | "aga-club"
  | "other";

/**
 * Pipeline status (spec, Aga Admin §13). Renamed from the earlier
 * lowercase set to match the CMS spec's exact enum — this is a source-level
 * rename, not a new concept; every write path funnels through
 * leads-repository.ts so this only had to change in one place plus the two
 * call sites (/api/leads, /admin/leady).
 */
export type LeadStatus = "NEW" | "CONTACTED" | "PRESENTATION_BOOKED" | "SOLD" | "LOST";

export interface LeadRecord {
  id: string;
  createdAt: string;
  values: Omit<LeadFormValues, "website">;
  source: LeadSource;
  sourcePath: string;
  /** UTM / referrer context captured at submission time, if present. */
  utm?: Record<string, string>;
  status: LeadStatus;
}

export interface LeadSubmissionResult {
  success: boolean;
  leadId?: string;
  error?: string;
}
