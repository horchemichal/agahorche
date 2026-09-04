import "server-only";
import { getLeadsRepository } from "@/lib/database/leads-repository";
import { getAgaClubMembersRepository } from "@/lib/database/repositories/aga-club-members-repository";
import type { LeadRecord, LeadStatus } from "@/types/lead";

/**
 * OŚ MODUŁU
 * Analityka w Aga Admin — policzona WYŁĄCZNIE z danych, które strona ma
 * u siebie: zgłoszenia z formularzy i zapisy do Aga Club.
 *
 * CZEGO TU NIE MA I DLACZEGO. Nie ma odsłon, wejść z Google, pozycji fraz
 * ani współczynnika odrzuceń. To dane, które siedzą w Google Analytics
 * i Search Console, i bez podłączenia ich API nie da się ich pokazać.
 * Wcześniejsza wersja tej strony obiecywała „podgląd danych z Search
 * Console w kolejnym etapie" — obietnica została, dane nie przyszły.
 * Zamiast trzymać pustą zapowiedź, moduł pokazuje to, co naprawdę wiadomo,
 * i wprost pisze, czego nie wie.
 *
 * DLACZEGO TO I TAK JEST NAJWAŻNIEJSZY EKRAN. Odsłony mówią, ile osób
 * weszło. Ta tabela mówi, ile osób NAPISAŁO — a przy sprzedaży Thermomixa
 * liczy się drugie. Do tego `source_path` odpowiada na pytanie, którego
 * Analytics sam z siebie nie rozstrzyga: która z 250 stron lokalnych
 * faktycznie przynosi zgłoszenia, a która tylko zbiera ruch.
 *
 * WSZYSTKIE LICZBY SĄ POLICZONE, ŻADNA NIE JEST WPISANA. Gdy czegoś nie
 * da się policzyć (bo nie ma danych), pole jest puste albo `null`
 * i widok pokazuje to jako brak, a nie jako zero.
 */

export interface PozycjaRankingu {
  klucz: string;
  ile: number;
  /** Udział w całości, 0–100. Liczony tylko gdy jest z czego. */
  procent: number;
}

export interface TydzienZgloszen {
  /** Poniedziałek tygodnia, YYYY-MM-DD. */
  od: string;
  ile: number;
}

export interface LejekEtap {
  status: LeadStatus;
  etykieta: string;
  ile: number;
}

export interface StatystykiAnalityki {
  /** Zakres, z którego liczone są rankingi — null gdy nie ma zgłoszeń. */
  odKiedy: string | null;
  zgloszeniaRazem: number;
  zgloszeniaOstatnie30Dni: number;
  zgloszeniaPoprzednie30Dni: number;
  /** Zmiana m/m w procentach; null gdy poprzedni okres był pusty. */
  zmiana30Dni: number | null;
  tygodnie: TydzienZgloszen[];
  lejek: LejekEtap[];
  /** Udział sprzedanych w zgłoszeniach z rozstrzygniętym statusem; null gdy brak. */
  skutecznosc: number | null;
  wgStrony: PozycjaRankingu[];
  wgMiasta: PozycjaRankingu[];
  wgZrodla: PozycjaRankingu[];
  wgUtm: PozycjaRankingu[];
  /** Ile zgłoszeń w ogóle miało dane UTM — bez tego ranking UTM kłamie. */
  zUtm: number;
  klubCzlonkowie: number;
  /** true, gdy repozytoria odpowiedziały; false = pokazujemy błąd, nie zera. */
  dane: boolean;
}

const ETYKIETY_STATUSU: Record<LeadStatus, string> = {
  NEW: "Nowe",
  CONTACTED: "Skontaktowane",
  PRESENTATION_BOOKED: "Umówiona prezentacja",
  SOLD: "Sprzedaż",
  LOST: "Nie doszło do skutku",
};

const KOLEJNOSC_LEJKA: LeadStatus[] = ["NEW", "CONTACTED", "PRESENTATION_BOOKED", "SOLD", "LOST"];

function czas(iso: string): number | null {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : d.getTime();
}

/**
 * Ranking po dowolnym kluczu. Zgłoszenia bez wartości są POMIJANE, a nie
 * zliczane jako „(brak)" — inaczej pusta wartość potrafiłaby wygrać
 * ranking i wyglądać jak realne źródło.
 */
function ranking(leady: LeadRecord[], klucz: (l: LeadRecord) => string | undefined, ile = 8): PozycjaRankingu[] {
  const licznik = new Map<string, number>();
  let suma = 0;
  for (const l of leady) {
    const k = klucz(l)?.trim();
    if (!k) continue;
    licznik.set(k, (licznik.get(k) ?? 0) + 1);
    suma += 1;
  }
  if (suma === 0) return [];
  return [...licznik.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "pl"))
    .slice(0, ile)
    .map(([klucz, n]) => ({ klucz, ile: n, procent: Math.round((n / suma) * 100) }));
}

/** Poniedziałek tygodnia, w którym leży `d` (UTC). */
function poniedzialek(d: Date): Date {
  const x = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const dzien = (x.getUTCDay() + 6) % 7; // pon = 0
  x.setUTCDate(x.getUTCDate() - dzien);
  return x;
}

function ostatnieTygodnie(leady: LeadRecord[], teraz: Date, ileTygodni = 12): TydzienZgloszen[] {
  const kubelki = new Map<string, number>();
  const start = poniedzialek(teraz);
  const klucze: string[] = [];
  for (let i = ileTygodni - 1; i >= 0; i -= 1) {
    const d = new Date(start);
    d.setUTCDate(d.getUTCDate() - i * 7);
    const k = d.toISOString().slice(0, 10);
    klucze.push(k);
    kubelki.set(k, 0);
  }
  for (const l of leady) {
    const t = czas(l.createdAt);
    if (t === null) continue;
    const k = poniedzialek(new Date(t)).toISOString().slice(0, 10);
    if (kubelki.has(k)) kubelki.set(k, (kubelki.get(k) ?? 0) + 1);
  }
  return klucze.map((od) => ({ od, ile: kubelki.get(od) ?? 0 }));
}

export async function pobierzAnalitykePanelu(teraz: Date = new Date()): Promise<StatystykiAnalityki> {
  let leady: LeadRecord[] = [];
  let klubCzlonkowie = 0;
  let dane = true;

  try {
    leady = await getLeadsRepository().list();
  } catch (error) {
    console.error("[analityka] nie udało się odczytać zgłoszeń", error);
    dane = false;
  }

  try {
    klubCzlonkowie = (await getAgaClubMembersRepository().list()).length;
  } catch (error) {
    // Brak klubu nie może wywrócić całej analityki zgłoszeń.
    console.error("[analityka] nie udało się odczytać członków klubu", error);
  }

  const teraźniejszość = teraz.getTime();
  const dzien = 24 * 60 * 60 * 1000;
  const w30 = leady.filter((l) => {
    const t = czas(l.createdAt);
    return t !== null && teraźniejszość - t <= 30 * dzien;
  }).length;
  const wPoprzednich30 = leady.filter((l) => {
    const t = czas(l.createdAt);
    if (t === null) return false;
    const wiek = teraźniejszość - t;
    return wiek > 30 * dzien && wiek <= 60 * dzien;
  }).length;

  const najstarsze = leady
    .map((l) => czas(l.createdAt))
    .filter((t): t is number => t !== null)
    .sort((a, b) => a - b)[0];

  const lejek: LejekEtap[] = KOLEJNOSC_LEJKA.map((status) => ({
    status,
    etykieta: ETYKIETY_STATUSU[status],
    ile: leady.filter((l) => l.status === status).length,
  }));

  // Skuteczność liczona tylko z zamkniętych spraw. Wliczanie zgłoszeń,
  // które dopiero czekają na kontakt, zaniżałoby wynik bez powodu.
  const sprzedane = lejek.find((e) => e.status === "SOLD")?.ile ?? 0;
  const stracone = lejek.find((e) => e.status === "LOST")?.ile ?? 0;
  const rozstrzygniete = sprzedane + stracone;

  const zUtm = leady.filter((l) => l.utm && Object.keys(l.utm).length > 0).length;

  return {
    odKiedy: najstarsze ? new Date(najstarsze).toISOString().slice(0, 10) : null,
    zgloszeniaRazem: leady.length,
    zgloszeniaOstatnie30Dni: w30,
    zgloszeniaPoprzednie30Dni: wPoprzednich30,
    zmiana30Dni: wPoprzednich30 > 0 ? Math.round(((w30 - wPoprzednich30) / wPoprzednich30) * 100) : null,
    tygodnie: ostatnieTygodnie(leady, teraz),
    lejek,
    skutecznosc: rozstrzygniete > 0 ? Math.round((sprzedane / rozstrzygniete) * 100) : null,
    wgStrony: ranking(leady, (l) => l.sourcePath),
    wgMiasta: ranking(leady, (l) => l.values.city),
    wgZrodla: ranking(leady, (l) => l.source),
    wgUtm: ranking(leady, (l) => l.utm?.utm_source ?? l.utm?.source),
    zUtm,
    klubCzlonkowie,
    dane,
  };
}
