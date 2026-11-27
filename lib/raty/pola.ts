/**
 * OŚ PLIKU
 * Pola formularza „Raty 0%” (strona /ratyagnieszka, poza menu, na hasło).
 * Jedna lista dla formularza, walidacji na serwerze i podglądu w panelu,
 * żeby etykiety i kolejność nigdy się nie rozjechały.
 *
 * Punkt 5 (numer dowodu) celowo NIE jest polem: klientka podaje go
 * telefonicznie, więc nie trafia do bazy ani do sieci.
 */

export const OKRES_PRZECHOWYWANIA_GODZ = 24;

export const MALZENSTWO = "Zamężna / żonaty";

export const ZRODLA_DOCHODU = [
  "Umowa o pracę – czas nieokreślony",
  "Umowa o pracę – czas określony",
  "Emerytura",
  "Renta",
  "Działalność – ryczałt",
  "Działalność – karta podatkowa",
  "Działalność – zasady ogólne (skala)",
  "Działalność – podatek liniowy",
  "Umowa zlecenie",
  "Umowa o dzieło",
  "Inne",
];

export interface Pole {
  klucz: string;
  etykieta: string;
  typ: "text" | "textarea" | "select" | "tel" | "email" | "date" | "info";
  opcje?: string[];
  podpowiedz?: string;
  /** Pole pokazuje się (i jest wymagane) tylko przy tej odpowiedzi w innym polu. */
  warunek?: { klucz: string; wartosc: string };
  opcjonalne?: boolean;
  /** Ważna uwaga pokazywana na czerwono pod etykietą. */
  ostrzezenie?: string;
  /** Pole widać zawsze („jeśli dotyczy”), ale wymagane jest tylko przy tej odpowiedzi. */
  wymaganeGdy?: { klucz: string; wartosc: string };
}

export const POLA: Pole[] = [
  {
    klucz: "pesel",
    etykieta: "1. Numer PESEL",
    typ: "text",
    podpowiedz: "11 cyfr",
    ostrzezenie: "W dniu składania wniosku kredytowego PESEL nie może być zastrzeżony.",
  },
  { klucz: "imieNazwisko", etykieta: "2. Imię (drugie imię) i nazwisko", typ: "text" },
  { klucz: "adresZamieszkania", etykieta: "3. Adres zamieszkania", typ: "textarea" },
  {
    klucz: "adresDostawyTakiSam",
    etykieta: "4. Czy adres dostawy jest taki sam jak adres zamieszkania?",
    typ: "select",
    opcje: ["Tak, taki sam", "Nie, inny"],
  },
  {
    klucz: "adresDostawy",
    etykieta: "4a. Adres dostawy",
    typ: "textarea",
    warunek: { klucz: "adresDostawyTakiSam", wartosc: "Nie, inny" },
  },
  {
    klucz: "info-dowod",
    etykieta: "5. Numer dowodu osobistego",
    typ: "info",
    podpowiedz: "Numer dowodu poda Pani/Pan telefonicznie – proszę przygotować dowód, zapytamy o niego w trakcie rozmowy.",
  },
  { klucz: "dowodDataWydania", etykieta: "6. Data wydania dowodu osobistego", typ: "date" },
  { klucz: "dowodDataWaznosci", etykieta: "6a. Data ważności dowodu osobistego", typ: "date" },
  {
    klucz: "wyksztalcenie",
    etykieta: "7. Wykształcenie",
    typ: "select",
    opcje: ["Podstawowe", "Zasadnicze zawodowe", "Średnie", "Policealne", "Wyższe"],
  },
  {
    klucz: "wyksztalcenieStopien",
    etykieta: "7a. Jakie średnie? (np. liceum, technikum)",
    typ: "text",
    warunek: { klucz: "wyksztalcenie", wartosc: "Średnie" },
    opcjonalne: true,
  },
  {
    klucz: "stanCywilny",
    etykieta: "8. Stan cywilny",
    typ: "select",
    opcje: ["Panna / kawaler", MALZENSTWO, "Rozwiedziona / rozwiedziony", "Wdowa / wdowiec", "W separacji"],
  },
  {
    klucz: "statusMieszkania",
    etykieta: "9. Status miejsca zamieszkania",
    typ: "select",
    opcje: ["Dom", "Mieszkanie spółdzielcze", "Mieszkanie własnościowe", "Najem", "U rodziny"],
  },
  { klucz: "telefon", etykieta: "10. Numer telefonu", typ: "tel" },
  { klucz: "email", etykieta: "11. Adres e-mail", typ: "email" },
  { klucz: "zrodloDochodu", etykieta: "12. Źródło dochodu", typ: "select", opcje: ZRODLA_DOCHODU },
  {
    klucz: "zrodloDochoduInne",
    etykieta: "12a. Jakie inne źródło dochodu?",
    typ: "text",
    warunek: { klucz: "zrodloDochodu", wartosc: "Inne" },
  },
  {
    klucz: "dataZatrudnieniaOd",
    etykieta: "13. Data zatrudnienia – od kiedy",
    typ: "date",
    podpowiedz: "przy emeryturze lub rencie można zostawić puste",
    opcjonalne: true,
  },
  {
    klucz: "dataZatrudnieniaDo",
    etykieta: "13a. Umowa na czas określony – do kiedy",
    typ: "date",
    warunek: { klucz: "zrodloDochodu", wartosc: "Umowa o pracę – czas określony" },
  },
  { klucz: "dochodNetto", etykieta: "14. Kwota dochodu netto na rękę (miesięcznie)", typ: "text" },
  {
    klucz: "zakladPracy",
    etykieta: "15. Zakład pracy",
    typ: "textarea",
    podpowiedz: "nazwa, adres, telefon – wystarczy NIP",
  },
  { klucz: "osobyNaUtrzymaniu", etykieta: "16. Osoby na utrzymaniu", typ: "text" },
  { klucz: "oplatyMiesieczne", etykieta: "17. Opłaty miesięczne (na oko)", typ: "text" },
  { klucz: "iloscRat", etykieta: "18. Ilość miesięcznych rat / kredytów / pożyczek", typ: "text" },
  { klucz: "ilosc800", etykieta: "19. Ilość świadczeń 800+", typ: "text" },
  {
    klucz: "dochodMalzonka",
    etykieta: "20. Dochód współmałżonka (na czas nieokreślony, od min. 6 miesięcy – na oko)",
    typ: "text",
    wymaganeGdy: { klucz: "stanCywilny", wartosc: MALZENSTWO },
  },
  {
    klucz: "zobowiazaniaMalzonka",
    etykieta: "21. Zobowiązania kredytowe współmałżonka",
    typ: "textarea",
    wymaganeGdy: { klucz: "stanCywilny", wartosc: MALZENSTWO },
  },
  {
    klucz: "zrodloDochoduMalzonka",
    etykieta: "22. Źródło dochodu współmałżonka",
    typ: "select",
    opcje: ZRODLA_DOCHODU,
    wymaganeGdy: { klucz: "stanCywilny", wartosc: MALZENSTWO },
  },
  {
    klucz: "zrodloDochoduMalzonkaInne",
    etykieta: "22a. Jakie inne źródło dochodu współmałżonka?",
    typ: "text",
    warunek: { klucz: "zrodloDochoduMalzonka", wartosc: "Inne" },
  },
  {
    klucz: "iloscRatKredytu",
    etykieta: "23. Ilość rat",
    typ: "text",
    podpowiedz: "na ile rat ma być rozłożony kredyt na Thermomix",
  },
];

export type DaneRaty = Record<string, string>;

export function poleWidoczne(pole: Pole, dane: DaneRaty): boolean {
  if (!pole.warunek) return true;
  return dane[pole.warunek.klucz] === pole.warunek.wartosc;
}

const MAKS_DLUGOSC = 600;

/** Sprawdza dane z formularza. Zwraca tylko widoczne pola, przycięte. */
export function walidujRaty(
  wejscie: unknown,
): { ok: true; dane: DaneRaty } | { ok: false; bledy: Record<string, string> } {
  const surowe = (wejscie && typeof wejscie === "object" ? wejscie : {}) as Record<string, unknown>;
  const odczyt: DaneRaty = {};
  for (const pole of POLA) {
    const v = surowe[pole.klucz];
    odczyt[pole.klucz] = typeof v === "string" ? v.trim() : "";
  }

  const dane: DaneRaty = {};
  const bledy: Record<string, string> = {};

  for (const pole of POLA) {
    if (pole.typ === "info" || !poleWidoczne(pole, odczyt)) continue;
    const v = odczyt[pole.klucz];
    if (!v) {
      const wymagane =
        !pole.opcjonalne && (!pole.wymaganeGdy || odczyt[pole.wymaganeGdy.klucz] === pole.wymaganeGdy.wartosc);
      if (wymagane) bledy[pole.klucz] = "To pole jest wymagane.";
      continue;
    }
    if (v.length > MAKS_DLUGOSC) {
      bledy[pole.klucz] = "Za długi tekst.";
      continue;
    }
    if (pole.opcje && !pole.opcje.includes(v)) {
      bledy[pole.klucz] = "Wybierz jedną z opcji.";
      continue;
    }
    if (pole.klucz === "pesel" && !/^\d{11}$/.test(v)) {
      bledy[pole.klucz] = "PESEL to 11 cyfr.";
      continue;
    }
    if (pole.typ === "tel" && !/^[+\d][\d\s-]{8,16}$/.test(v)) {
      bledy[pole.klucz] = "Sprawdź numer telefonu.";
      continue;
    }
    if (pole.typ === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(v)) {
      bledy[pole.klucz] = "Wybierz datę z kalendarza.";
      continue;
    }
    if (pole.typ === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      bledy[pole.klucz] = "Sprawdź adres e-mail.";
      continue;
    }
    dane[pole.klucz] = v;
  }

  return Object.keys(bledy).length ? { ok: false, bledy } : { ok: true, dane };
}
