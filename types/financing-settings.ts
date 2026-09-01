/**
 * Ustawienia finansowania — pojedynczy wiersz, jak `SeoSettings`.
 *
 * Jedyne, co tu jest, to odpowiedź na pytanie „czy raty 0% obowiązują
 * w tej chwili" plus komunikat, który widzi klientka, kiedy nie
 * obowiązują. Przełącznik siedzi w /admin/ustawienia, żeby Aga zmieniała
 * to sama, bez wgrywania kodu — promocja 0% wraca i znika kilka razy
 * w roku (patrz komentarz przy tabeli w db/postgres/schema.sql).
 */
export interface FinancingSettings {
  id: "global";
  ratyZeroDostepne: boolean;
  ratyZeroKomunikat: string;
  updatedAt: string;
  updatedBy: string | null;
}

export type FinancingSettingsInput = Omit<FinancingSettings, "id" | "updatedAt" | "updatedBy">;
