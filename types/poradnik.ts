/**
 * OŚ PLIKU
 * Poradnik Aga Club — jeden typ treści obsługujący osiem działów z listy
 * pomysłów Agi (nr 5, 6, 9, 16, 17, 18, 19, 21).
 *
 * DLACZEGO JEDEN TYP, A NIE OSIEM MODUŁÓW. „20 trików na czyszczenie",
 * „triki na czas", „co można zamrozić", „kuchenny SOS", „dlaczego mi nie
 * wyszło", „słownik", „baza podstaw" i „domowe sposoby" to z punktu
 * widzenia kodu ta sama rzecz: tytuł, jedno zdanie wprowadzenia, treść
 * i przynależność do działu. Różni je wyłącznie to, co jest w środku.
 * Osiem osobnych modułów oznaczałoby osiem tabel, osiem formularzy
 * i osiem miejsc do poprawienia przy każdej zmianie.
 *
 * `wlasne` — CZY TO SĄ SŁOWA AGI. Część działów da się wypełnić wiedzą
 * ogólną (co znaczy „blanszowanie", dlaczego ciasto drożdżowe nie wyrosło,
 * czego nie warto mrozić) i taką treść wgraliśmy na start, oznaczoną
 * `wlasne: false`. Działy, które mają sens wyłącznie jako doświadczenie
 * Agi — triki czyszczenia i triki na czas — zostały PUSTE, świadomie:
 * sama napisała, że mają to być „własne porady i doświadczenia zamiast
 * kopiowania instrukcji Vorwerk", a wymyślanie ich za nią byłoby dokładnie
 * tym, przed czym przestrzegała. Panel pokazuje przy każdym wpisie, czy
 * jest jej, czy zastępczy.
 */

export interface PoradnikWpis {
  id: string;
  /** Slug działu — patrz DZIALY_PORADNIKA. */
  dzial: string;
  slug: string;
  tytul: string;
  /** Jedno zdanie widoczne na kafelku listy. */
  lead: string;
  /** Treść: akapity oddzielone pustą linią, listy liniami od „- ". */
  tresc: string;
  /**
   * Identyfikator przepisu z data/diets/recipes.ts, jeśli wpis do jakiegoś
   * prowadzi (używa tego dział „Baza podstaw"). Pod treścią pojawia się
   * wtedy karta dania z linkiem do Cookidoo. `null` = wpis bez przepisu.
   */
  przepisId: string | null;
  /** Czy to treść Agi (true), czy wgrana wiedza ogólna do przepisania (false). */
  wlasne: boolean;
  opublikowany: boolean;
  /** Niższa liczba = wyżej na liście. */
  kolejnosc: number;
  createdAt: string;
  updatedAt: string;
}

export type PoradnikWpisInput = Omit<PoradnikWpis, "id" | "createdAt" | "updatedAt">;

export interface DzialPoradnika {
  slug: string;
  nazwa: string;
  /** Zdanie na kafelku działu i w opisie SEO. */
  opis: string;
  /**
   * Podpowiedź w panelu: co ma się w tym dziale znaleźć. Widzi ją tylko
   * Aga, przy pustym dziale i w formularzu.
   */
  podpowiedz: string;
}

/**
 * Działy są STAŁE — to struktura, nie treść. Dodanie dziewiątego wymaga
 * zmiany w kodzie i to jest w porządku: nowy dział to decyzja o tym, czym
 * poradnik ma być, a nie kolejny wpis.
 */
export const DZIALY_PORADNIKA: DzialPoradnika[] = [
  {
    slug: "czyszczenie",
    nazwa: "Czyszczenie Thermomixa",
    opis: "Szybkie mycie, przypalone dno, tłuste zabrudzenia, uszczelka, nóż, Varoma.",
    podpowiedz:
      "Ten dział czeka na Twoje własne sposoby. Instrukcja Vorwerka jest w pudełku u każdej klientki — wartość ma to, czego nauczyłaś się po kilkuset prezentacjach. Po jednym wpisie na temat: szybkie czyszczenie, przypalone dno, tłuszcz, nóż, pokrywa, uszczelka, koszyczek, Varoma.",
  },
  {
    slug: "triki-na-czas",
    nazwa: "Triki na czas",
    opis: "Sposoby, dzięki którym gotowanie zajmuje mniej czasu niż zwykle.",
    podpowiedz:
      "Też czeka na Ciebie. Format, który się sprawdza: jeden trik = jeden wpis, tytuł mówiący co robić („Przygotuj bazę na trzy obiady naraz”), pod spodem trzy–cztery zdania. Te wpisy nadają się potem wprost na posty w social mediach.",
  },
  {
    slug: "mrozenie",
    nazwa: "Co można zamrozić",
    opis: "Co znosi zamrażanie, co traci, jak przechowywać i jak rozmrażać.",
    podpowiedz:
      "Wgrana jest wiedza ogólna. Dopisz to, co wiesz z własnej kuchni — i popraw wszystko, co u Ciebie wychodzi inaczej.",
  },
  {
    slug: "kuchenny-sos",
    nazwa: "Kuchenny SOS",
    opis: "Za słono, za rzadko, zwarzyło się — co da się jeszcze uratować.",
    podpowiedz:
      "Wgrane są klasyczne ratunki. Najcenniejsze będą te, o które klientki pytają Cię najczęściej po prezentacji.",
  },
  {
    slug: "dlaczego-nie-wyszlo",
    nazwa: "Dlaczego mi nie wyszło",
    opis: "Najczęstsze przyczyny kuchennych wpadek i co zrobić następnym razem.",
    podpowiedz:
      "Wgrane są typowe przyczyny. Dopisz te, które widzisz u klientek na prezentacjach — one są warte najwięcej.",
  },
  {
    slug: "slownik",
    nazwa: "Kuchenny słownik",
    opis: "Blanszowanie, emulgowanie, redukcja — krótko i po ludzku.",
    podpowiedz:
      "Wgrany jest zestaw haseł ogólnych. Dopisuj wszystko, o co ktoś Cię zapyta — jeśli pyta jedna osoba, nie rozumie tego dwadzieścia.",
  },
  {
    slug: "baza-podstaw",
    nazwa: "Baza podstaw",
    opis: "Rzeczy, które warto umieć zrobić samemu: jogurt, hummus, pasty, sosy.",
    podpowiedz:
      "Wgrane są tylko te pozycje, do których mamy sprawdzony przepis na Cookidoo. Resztę (bulion, pesto, majonez, beszamel, ciasto naleśnikowe) dopisz razem z linkiem do przepisu, którego naprawdę używasz.",
  },
  {
    slug: "domowe-sposoby",
    nazwa: "Domowe sposoby",
    opis: "Jak przechowywać, jak organizować kuchnię, jak przedłużyć świeżość.",
    podpowiedz:
      "Wgrana jest wiedza ogólna o przechowywaniu. Dopisz swoje sposoby na organizację kuchni — to dział, w którym najłatwiej pokazać, jak sama gotujesz.",
  },
];

export function dzialPoradnika(slug: string): DzialPoradnika | undefined {
  return DZIALY_PORADNIKA.find((d) => d.slug === slug);
}
