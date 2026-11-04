/**
 * Prosty CRM w panelu (4.11.2026, prośba Michała). Świadomie tylko to, o co
 * prosił: imię i nazwisko, miejscowość, kto polecił (osoba albo strona www)
 * i status kupił / nie kupił. Telefon i notatkę Michał dopisał
 * 4.11.2026. Bez e-maila — nie było go w zamówieniu.
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
  /** Dodane 4.11.2026 na prośbę Michała. Starsze wpisy mogą nie mieć numeru. */
  telefon: string | null;
  /** Nieobowiązkowa. */
  notatka: string | null;
  createdAt: string;
  updatedAt: string;
}

export type CrmKlientInput = Omit<CrmKlient, "id" | "createdAt" | "updatedAt">;
