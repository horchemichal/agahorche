/**
 * Prosty CRM w panelu (4.11.2026, prośba Michała). Świadomie tylko to, o co
 * prosił: imię i nazwisko, miejscowość, kto polecił (osoba albo strona www)
 * i status kupił / nie kupił. Bez telefonu, e-maila i notatek — tego nie było
 * w zamówieniu, a każde dodatkowe pole to więcej danych osobowych w bazie.
 */
export type CrmPolecenie = "osoba" | "strona-www";

export interface CrmKlient {
  id: string;
  imieNazwisko: string;
  miejscowosc: string;
  polecenie: CrmPolecenie;
  /** Imię i nazwisko osoby polecającej — tylko gdy polecenie = "osoba". */
  polecil: string | null;
  kupil: boolean;
  createdAt: string;
  updatedAt: string;
}

export type CrmKlientInput = Omit<CrmKlient, "id" | "createdAt" | "updatedAt">;
