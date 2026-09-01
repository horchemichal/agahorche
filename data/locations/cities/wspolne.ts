import type { CitySection } from "../city-content";

/**
 * WSPÓLNE KLOCKI STRON MIAST — to, co z założenia brzmi wszędzie tak samo.
 *
 * Dlaczego to w ogóle istnieje. Na stronie miasta część zdań MUSI być
 * identyczna, bo opisuje fakty, które nie zależą od miejscowości: cenę
 * ustala Vorwerk i jest jedna w całej Polsce, warunki finansowania są
 * ogólnopolskie, a Aga jest tą samą osobą w Bochni i w Zakliczynie.
 * Przepisywanie tych samych zdań dwunaście razy „własnymi słowami” byłoby
 * gorsze niż powtórzenie: powstałoby dwanaście lekko różnych wersji tej
 * samej informacji, a przy zmianie warunków trzeba by je tropić po plikach.
 *
 * ZASADA PODZIAŁU. Tutaj trafia tylko to, co nie ma prawa różnić się między
 * miastami. Wszystko, co jest o miejscu — jak wygląda dojazd, gdzie ludzie
 * pracują, co się tu uprawia, jakie są dzielnice — należy do pliku miasta
 * i musi być napisane osobno. Jeśli kiedyś kusi, żeby wrzucić tu sekcję
 * „prezentacja” albo „rodzina”, to znaczy, że ta strona miasta nie powinna
 * powstać, bo nie ma o czym pisać.
 *
 * Cztery pierwsze miasta (Kraków, Wieliczka, Niepołomice, Skawina) mają te
 * bloki wpisane wprost w `city-content.ts` — powstały wcześniej, są wdrożone
 * i celowo ich nie ruszam przy okazji dopisywania kolejnych. Docelowo
 * warto je przełączyć na te funkcje, ale to osobna zmiana.
 */

/** Kim jestem i dlaczego to nie jest call center. */
export function blokOMnie(miejscownik: string, okolica: string) {
  return {
    heading: "Kto poprowadzi Twoją prezentację",
    paragraphs: [
      "Nazywam się Aga Horche i jestem oficjalną przedstawicielką Thermomix® w Małopolsce. Kupujesz u mnie legalnie: z gwarancją producenta, z aktualną promocją i z możliwością zgłoszenia urządzenia do serwisu.",
      `Pracuję pojedynczo, nie przez call center. Ta sama osoba, która przyjedzie do Ciebie ${miejscownik}, odbierze telefon pół roku później, gdy nie będzie wychodzić ciasto.`,
    ],
    bullets: [
      "oficjalna przedstawicielka Vorwerk — gwarancja producenta i legalny zakup",
      `prezentacje w domach klientów ${okolica} i w całej Małopolsce`,
      "pomoc przy pierwszym uruchomieniu i założeniu konta Cookidoo",
      "stały kontakt telefoniczny po zakupie, także przy zgłoszeniu serwisowym",
      "pełne 7-dniowe jadłospisy z listami zakupów dla moich klientek i klientów",
    ],
    photo: {
      src: "/media/aga-przedstawiciel-thermomix-e08f7154.webp",
      alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
      caption: "Aga Horche — oficjalna przedstawicielka Thermomix® w Małopolsce.",
    },
  };
}

/**
 * Sekcja o TM7. Zdjęcie stoi po lewej — na telefonie ląduje nad tekstem,
 * żeby było widać urządzenie, zanim zacznie się o nim czytać.
 */
export function sekcjaTm7(): CitySection {
  return {
    id: "tm7",
    heading: "Thermomix TM7 – co zobaczysz na spotkaniu",
    paragraphs: [
      "TM7 to najnowszy model: duży ekran dotykowy, izolowane naczynie, cichsza praca i większa Varoma do gotowania na parze. Doszło otwarte gotowanie, czyli praca bez pokrywki — przydaje się przy odparowywaniu sosów i przy przetworach.",
      "Pokazuję funkcje, z których faktycznie będziesz korzystać. Jeśli zastanawiasz się nad TM6, mogę pokazać oba modele obok siebie i uczciwie powiedzieć, kiedy starszy wystarczy.",
    ],
    links: [
      { href: "/thermomix/tm7", label: "Wszystko o Thermomix TM7" },
      { href: "/thermomix/tm7-vs-tm6", label: "Porównanie TM7 i TM6" },
    ],
    photo: {
      src: "/zdjecia/thermomix-tm7-varoma.webp",
      alt: "Thermomix TM7 z nałożoną Varomą i odchylonym ekranem dotykowym",
      caption: "TM7 z Varomą — na parze gotuje się piętro wyżej niż obiad.",
    },
    photoSide: "left",
  };
}

/**
 * Cena. Jedyne, co się tu zmienia, to nazwa miejscowości w zdaniu o tym,
 * że cena jest wszędzie taka sama — bo to jest właśnie sedno tej sekcji.
 */
export function sekcjaCena(miejscownik: string): CitySection {
  return {
    id: "cena",
    heading: "Ile kosztuje Thermomix TM7?",
    paragraphs: [
      `Cenę ustala Vorwerk i jest identyczna w całej Polsce — ${miejscownik} zapłacisz tyle samo, co w Krakowie czy w Warszawie. Nie ma „cen lokalnych” ani dopłat za dojazd. Aktualna kwota jest w sekcji z ofertą powyżej; pobiera się wprost z mojego panelu, więc zawsze jest bieżąca.`,
      "Zmieniają się natomiast promocje i zestawy — co miesiąc wyglądają inaczej. Dlatego nie wpisuję w treść kwoty, która za trzy tygodnie byłaby nieprawdziwa.",
    ],
    links: [{ href: "/oferta", label: "Aktualna cena i promocje" }],
  };
}

/** Raty. Kalkulator stoi POD tą sekcją — stąd „poniżej”. */
export function sekcjaRaty(): CitySection {
  return {
    id: "raty",
    heading: "Thermomix na raty — jak to policzyć",
    paragraphs: [
      "Dostępne jest finansowanie ratalne, okresowo z RRSO 0%. Kalkulator poniżej startuje z aktualnej ceny — zmień okres spłaty albo wkład własny i zobacz, jak zmienia się miesięczna kwota. Wynik jest orientacyjny; ostateczne warunki zależą od bieżącej oferty i decyzji instytucji finansującej.",
      "Warto policzyć to przed spotkaniem, na spokojnie i bez nikogo nad głową. Na prezentacji wracamy do tych samych liczb, tylko z dokładnymi danymi.",
    ],
    links: [{ href: "/finansowanie", label: "Więcej o ratach 0%" }],
  };
}

/** Co da się ugotować — lista możliwości urządzenia, nie miejsca. */
export function sekcjaCoUgotujesz(): CitySection {
  return {
    id: "co-ugotujesz",
    heading: "Co możesz ugotować?",
    paragraphs: [
      "Zupy, sosy, dania jednogarnkowe, ciasta, pasty kanapkowe, mleka roślinne, kaszę i ryż, jedzenie dla niemowlaka, przetwory. Cookidoo prowadzi przez przepisy krok po kroku — dlatego Thermomix bywa dobrym pomysłem także dla kogoś, kto gotować raczej nie lubi.",
      "Moim klientkom i klientom przygotowuję pełne 7-dniowe jadłospisy z listami zakupów. Jeden dzień z każdej diety możesz pobrać bezpłatnie już teraz.",
    ],
    links: [
      { href: "/diety", label: "Gotowe jadłospisy i diety — pobierz bezpłatny PDF" },
      { href: "/thermomix/funkcje", label: "Pełna lista funkcji" },
    ],
  };
}

/** Uczciwe „nie zastąpi wszystkiego”. */
export function sekcjaTradycyjneGotowanie(): CitySection {
  return {
    id: "tradycyjne-gotowanie",
    heading: "Czy to zastąpi normalne gotowanie?",
    paragraphs: [
      "Nie i nie udaję, że tak. Naleśniki czy porządnie przysmażone mięso nadal robi się szybciej na patelni. Thermomix zabiera te czynności, które zjadają czas po cichu: siekanie, tarcie, ucieranie, mieszanie, żeby się nie przypaliło.",
      "Większość osób nie wyrzuca garnków. Przestaje tylko odkładać gotowanie na dzień, w którym „będzie czas”.",
    ],
    links: [{ href: "/thermomix/wady-i-zalety", label: "Wady i zalety Thermomixa — bez lukru" }],
  };
}

/**
 * Pytania, na które odpowiedź jest wszędzie taka sama. Pytania lokalne
 * („czy dojeżdżasz do Radziszowa”) dopisuje plik miasta — i to one są
 * powodem, dla którego ta sekcja w ogóle ma sens dla SEO.
 */
export function faqWspolne(dopelniacz: string) {
  return [
    {
      question: `Gdzie kupić Thermomix ${dopelniacz}?`,
      answer:
        "Wyłącznie u przedstawiciela Vorwerk — Thermomixa nie ma w sklepach RTV/AGD ani w oficjalnej sprzedaży internetowej. Możesz umówić się ze mną: przyjeżdżam z urządzeniem, gotujemy, a o zakupie rozmawiamy dopiero potem.",
    },
    {
      question: "Ile kosztuje Thermomix TM7?",
      answer:
        "Cenę ustala Vorwerk i jest taka sama w całej Polsce. Aktualną kwotę znajdziesz w sekcji z ofertą na tej stronie — pobiera się wprost z mojego panelu, więc zawsze jest bieżąca.",
    },
    {
      question: "Czy prezentacja jest bezpłatna i do czegoś zobowiązuje?",
      answer:
        "Jest bezpłatna i do niczego nie zobowiązuje. Nie płacisz za dojazd, za składniki ani za mój czas.",
    },
    {
      question: "Czy można kupić Thermomix na raty?",
      answer:
        "Tak, dostępne jest finansowanie ratalne, okresowo z RRSO 0%. Ratę policzysz w kalkulatorze na tej stronie; wynik jest orientacyjny, a ostateczne warunki zależą od aktualnej oferty i decyzji instytucji finansującej.",
    },
    {
      question: "Czy można umówić się po pracy albo w weekend?",
      answer:
        "Tak. Wieczory w tygodniu i sobotnie przedpołudnia to najczęściej wybierane terminy.",
    },
    {
      question: "Czy pomagasz po zakupie?",
      answer:
        "Tak — przy pierwszym uruchomieniu, przy koncie Cookidoo i przy zgłoszeniu serwisowym. Numer telefonu zostaje ten sam.",
    },
  ];
}

/** Standardowe cztery „highlighty” pod nagłówkiem. Dojazd opisuje miasto. */
export function highlightyStandardowe(opisDojazdu: string) {
  return [
    { label: "Prezentacja", value: "bezpłatna, u Ciebie w domu" },
    { label: "Dojazd", value: opisDojazdu },
    { label: "Termin", value: "też po pracy i w weekend" },
    { label: "Raty", value: "0% — policz ratę w kalkulatorze" },
  ];
}
