import type { CityContent } from "../city-content";
import {
  blokOMnie,
  faqWspolne,
  highlightyStandardowe,
  sekcjaCena,
  sekcjaCoUgotujesz,
  sekcjaRaty,
  sekcjaTm7,
  sekcjaTradycyjneGotowanie,
} from "./wspolne";

/**
 * KRZESZOWICE — jedyna gmina pierścienia krakowskiego, która NIE jest
 * sypialnią. To jest oś strony: samodzielne miasteczko z własnym rynkiem,
 * szpitalem uzdrowiskowym i tężnią, gdzie liczba mieszkańców od 2002 roku
 * praktycznie się nie zmieniła (+1,4%), podczas gdy sąsiedni Zabierzów
 * urósł o 37,5%. Ludzie się tu nie wprowadzają masowo — oni tu po prostu są.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — struktura: miasto Krzeszowice + 18 sołectw (Czerna, Dębnik, Dubie,
 *   Filipowice, Frywałd, Łany, Miękinia, Nawojowa Góra, Nowa Góra,
 *   Ostrężnica, Paczółtowice, Rudno, Sanka, Siedlec, Tenczynek,
 *   Wola Filipowska, Zalas, Żary) — gminakrzeszowice.pl/gmina/solectwa,
 * — miasto dzieli się na 6 osiedli: Centrum, Czatkowice, Jurajskie,
 *   Parkowe, Nowy Świat, Żbik (gminakrzeszowice.pl/gmina/osiedla),
 * — prawa miejskie od 1 stycznia 1925 r.,
 * — gmina 31 844 mieszkańców, miasto 9 755 (GUS, 31.12.2024) — czyli
 *   około dwie trzecie mieszkańców gminy mieszka poza miastem,
 * — wzrost ludności 2002–2024 tylko o 1,4% (polskawliczbach.pl),
 * — przeciętna powierzchnia mieszkania 85,0 m²
 *   (krzeszowice.geoportal-krajowy.pl/statystyki-gus),
 * — kolej: linia E30, stacja Krzeszowice, do Krakowa Głównego do 25 minut
 *   (gminakrzeszowice.pl/gospodarka_i_srodowisko/Dostepnosc_komunikacyjna),
 * — parking P&R przy ul. Kolejowej, czynny od 29.10.2022, 137 miejsc plus
 *   6 dla osób niepełnosprawnych i 4 dla aut elektrycznych, bezpłatny,
 * — DK79 przez środek gminy, A4 przez część południową, węzeł Rudno,
 * — historia uzdrowiskowa: pierwszy zapis o wodach siarczanych 1625 r.,
 *   pierwsze łazienki ok. 1778 r., dziś SPZOZ Ośrodek Rehabilitacji
 *   Narządu Ruchu (gminakrzeszowice.pl/gmina/historia_uzdrowiska),
 * — tężnia solankowa przy Alei Solidarności otwarta w lipcu 2024,
 *   wstęp bezpłatny,
 * — trzy parki krajobrazowe: Tenczyński, Rudniański, Dolinki Krakowskie,
 * — Kopalnia Wapienia „Czatkowice” (Grupa TAURON) w granicach gminy,
 * — klasztor Karmelitów Bosych w Czernej (fundacja 1631) z Muzeum
 *   Karmelitańskim; ruiny zamku Tenczyn w Rudnie udostępnione zwiedzającym.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — słowa „uzdrowisko” w czasie teraźniejszym — Krzeszowice NIE MAJĄ dziś
 *   formalnego statusu uzdrowiska, gmina dopiero prowadzi projekt jego
 *   reaktywacji. To dokładnie ten rodzaj półprawdy, który powtarza
 *   konkurencja,
 * — zwiedzania pałacu Potockich — obiekt jest niedostępny, ogrodzony,
 *   w złym stanie technicznym; można go oglądać tylko z zewnątrz,
 * — godzin i cen zwiedzania zamku Tenczyn i muzeum w Czernej — zmienne,
 *   nie wchodzą na stronę sprzedażową,
 * — produktów z ministerialnej Listy Produktów Tradycyjnych — NIE
 *   POTWIERDZONE,
 * — liczby zatrudnionych w kopalni Czatkowice.
 *
 * PUŁAPKA: oficjalny serwis gminy to gminakrzeszowice.pl, nie krzeszowice.pl.
 */
export const KRZESZOWICE: CityContent = {
  slug: "krzeszowice",
  h1: "Thermomix Krzeszowice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Krzeszowice — prezentacja i cena",
  seoDescription:
    "Thermomix w Krzeszowicach i całej gminie: bezpłatna prezentacja TM7 u Ciebie w kuchni — Tenczynek, Zalas, Wola Filipowska, Rudno. Tel. 517 185 691.",
  ogTitle: "Thermomix Krzeszowice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Krzeszowicach i sołectwach gminy. Gotujemy razem u Ciebie, ratę liczymy na miejscu.",

  lead:
    "Do Krzeszowic i wszystkich sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Przywożę urządzenie i składniki. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("Krzeszowice i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krzeszowicach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam ze wszystkim: z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty przygotowujesz wolny kawałek blatu i gniazdko, nic więcej. Tak samo w bloku na osiedlu Jurajskim, jak w domu w Tenczynku.",
        "Potem gotujemy pełne dania, a nie próbki do spróbowania łyżeczką. Zwykle coś obiadowego, coś słodkiego i coś, co pokazuje, jak urządzenie radzi sobie z tym, co jecie na co dzień. Powiedz mi wcześniej, ile osób jest w domu i czego nie jecie — dobiorę przepisy pod Was.",
        "Na koniec liczby: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. „Przemyślę” jest odpowiedzią, którą słyszę często i która nic nie kosztuje.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Miasteczko, które żyje samo — a nie tylko śpi po pracy",
      paragraphs: [
        "Krzeszowice są pod tym względem wyjątkiem w całym pierścieniu wokół Krakowa. Sąsiednie gminy w ostatnich dwudziestu latach spuchły od nowych mieszkańców — Zabierzów urósł o ponad jedną trzecią. W Krzeszowicach liczba mieszkańców przez ten sam czas praktycznie się nie zmieniła. To nie jest gmina, do której ludzie się masowo wprowadzają. To miasteczko, w którym się po prostu mieszka, często od pokoleń.",
        "Widać to od razu po tym, jak wygląda życie: jest własny rynek, własny szpital rehabilitacyjny, targ, szkoły i praca na miejscu — choćby w kopalni wapienia w Czatkowicach. Nie wszystko musi się tu odbywać w Krakowie i to zmienia rytm dnia.",
        "Dla gotowania ma to konkretną konsekwencję. W gminach sypialnianych rozmawiamy najczęściej o tym, jak zdążyć z obiadem po powrocie z miasta. Tutaj częściej o czymś innym: o gotowaniu dla większej rodziny, o niedzielnym obiedzie, przy którym siedzi więcej osób, i o przetworach — bo w sołectwach niemal każdy dom ma ogród.",
        "Jest jeszcze druga strona tej gminy: dwie trzecie mieszkańców mieszka poza miastem, w osiemnastu sołectwach. Przeciętne mieszkanie ma tu osiemdziesiąt pięć metrów, czyli sporo mniej niż w Zabierzowie — bo na tę średnią składają się zarówno domy w Zalasiu czy Paczółtowicach, jak i bloki na osiedlach w mieście. W bloku pierwsze pytanie brzmi „gdzie to postawię”, w domu — „czy poradzi sobie z większym garnkiem”. Obie odpowiedzi pokazuję na miejscu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Krzeszowice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — jedna rozmowa zwykle wystarczy. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której miejscowości mieszkasz. Gmina ma sto trzydzieści dziewięć kilometrów kwadratowych i sołectwa rozrzucone od Czernej po Sankę, więc sama nazwa „gmina Krzeszowice” niewiele mi mówi przy układaniu trasy. Przyda się też liczba osób na spotkaniu — od tego zależy, co gotujemy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krzeszowicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Krzeszowice",
      paragraphs: [
        "W blokach na osiedlach Jurajskim czy Parkowym kuchnia bywa osobnym, niedużym pomieszczeniem — takim, w którym na blacie mieści się dokładnie jedna deska. To najczęstsza obiekcja, jaką tu słyszę, i najłatwiejsza do sprawdzenia: stawiamy urządzenie na Twoim blacie i po prostu widać, ile zajmuje i czy zostaje miejsce do pracy.",
        "Arytmetyka jest zresztą po stronie urządzenia: zajmuje mniej więcej tyle co jeden większy sprzęt, a zastępuje kilka — miksuje, gotuje, waży, wyrabia ciasto i gotuje na parze. W małej kuchni to bywa ważniejsze niż wszystkie funkcje razem wzięte.",
        "W domach w sołectwach rozmowa idzie w drugą stronę: miejsca jest dość, za to wraca temat przetworów i gotowania dla większej liczby osób. Konfitury, przeciery i sosy powstają z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć — bez godziny stania nad garnkiem.",
        "Przy małych dzieciach najbardziej praktyczne jest to, że da się ugotować i zmiksować w jednym naczyniu, a na parze zrobić porcję dla dziecka równolegle z obiadem dla reszty domu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w Krzeszowicach i gminie dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich osiemnastu sołectw, bez dopłaty za odległość. W samym mieście są sześć osiedli — Centrum, Czatkowice, Jurajskie, Parkowe, Nowy Świat i Żbik — a poza nim miejscowości od Czernej i Dubia po Sankę i Rudno.",
    "Warto wiedzieć, że około dwie trzecie mieszkańców gminy mieszka poza miastem. Dlatego przy umawianiu proszę o konkretną nazwę: „Krzeszowice” i „Wola Filipowska” to z punktu widzenia trasy dwa różne wyjazdy.",
    "Do Krakowa jedzie się stąd pociągiem w mniej więcej dwadzieścia pięć minut, a przy stacji jest bezpłatny parking na ponad sto trzydzieści miejsc. Piszę o tym dlatego, że to jedna z niewielu gmin w tej okolicy, gdzie realnie da się żyć bez codziennego stania w korku — a to zmienia godziny, o których w domu robi się obiad.",
    "Sama jeżdżę tu samochodem z urządzeniem i składnikami, więc dojazd jest moim problemem, nie Twoim. Przy adresach w sołectwach przyda się tylko informacja, czy da się podjechać pod dom.",
  ],
  districts: [
    "Krzeszowice",
    "Centrum",
    "Czatkowice",
    "Jurajskie",
    "Parkowe",
    "Nowy Świat",
    "Żbik",
    "Tenczynek",
    "Zalas",
    "Wola Filipowska",
    "Nawojowa Góra",
    "Nowa Góra",
    "Paczółtowice",
    "Rudno",
    "Sanka",
    "Siedlec",
    "Czerna",
    "Dębnik",
    "Dubie",
    "Filipowice",
    "Frywałd",
    "Łany",
    "Miękinia",
    "Ostrężnica",
    "Żary",
  ],

  nearbyHeading: "Zachodnia Małopolska — dalej też przyjadę",
  nearbyParagraphs: [
    "Krzeszowice leżą mniej więcej w połowie drogi między Krakowem a Chrzanowem, więc naturalnie łączę je z trasami w obie strony. Do Zabierzowa, Chrzanowa i pod sam Kraków dojeżdżam bez dopłat.",
    "Jeśli umawiasz się razem z kimś z sąsiedniej gminy, powiedz o tym od razu — często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin dogodny dla wszystkich.",
  ],
  nearbyTowns: [
    "Kraków",
    "Zabierzów",
    "Chrzanów",
    "Zielonki",
    "Skawina",
    "Mogilany",
  ],

  about: blokOMnie("do Krzeszowic", "w Krzeszowicach, Zabierzowie i Chrzanowie"),

  faq: [
    {
      question: "Czy dojeżdżasz do sołectw gminy Krzeszowice?",
      answer:
        "Tak, do wszystkich osiemnastu — łącznie z tymi najdalszymi: Czerną, Dubiem, Paczółtowicami i Sanką. Dojazd jest bezpłatny i nie zależy od odległości od miasta.",
    },
    ...faqWspolne("w Krzeszowicach"),
    {
      question: "Mieszkam w bloku i mam małą kuchnię. Czy Thermomix się zmieści?",
      answer:
        "Zajmuje mniej więcej tyle miejsca co jeden większy sprzęt, a zastępuje kilka. Na prezentacji stawiamy go na Twoim blacie i od razu widać, ile realnie zajmuje i czy zostaje miejsce na deskę. To zresztą najlepszy powód, żeby spotkanie odbyło się u Ciebie, a nie w salonie.",
    },
    {
      question: "Czy w Thermomixie zrobię przetwory z własnego ogrodu?",
      answer:
        "Tak i w tej gminie pytają o to bardzo często. Konfitury, przeciery i sosy gotują się z ustawioną temperaturą i stałym mieszaniem, więc nic nie przywiera i nie trzeba stać nad garnkiem. Jeśli chcesz, zrobimy coś takiego na spotkaniu — powiedz przy umawianiu.",
    },
    {
      question: "Czy mogę umówić prezentację dla kilku osób naraz?",
      answer:
        "Jak najbardziej. Przy większej grupie padają ciekawsze pytania, a decyzja o zakupie i tak zwykle zapada wspólnie. Powiedz tylko, ile osób będzie, żebym wzięła więcej składników.",
    },
  ],

  geo: { lat: 50.1408, lng: 19.6339 },
};
