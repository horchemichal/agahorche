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
 * MOGILANY — gmina, przez którą przechodzi zakopianka, i to organizuje tu
 * cały dzień. Oś strony: trwająca rozbudowa DK7 w Libertowie, przez którą
 * od lipca 2026 w stronę Krakowa jedzie się jednym pasem. To jest realna,
 * sprawdzalna niedogodność, o której konkurencja nie napisze ani słowa,
 * bo pisze o „doskonałym połączeniu z Krakowem”.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 10 sołectw: Brzyczyna, Buków, Chorowice, Gaj, Konary, Kulerzów,
 *   Libertów, Lusina, Mogilany, Włosań (mogilany.pl/historia-i-geografia-
 *   gminy-mogilany),
 * — gmina wiejska, bez miasta; 16 406 mieszkańców (GUS 2024),
 *   powierzchnia ok. 44 km²,
 * — wzrost liczby ludności o 58,3% od 2002 r. (polskawliczbach.pl),
 * — przeciętna powierzchnia mieszkania 122,5 m², średnio 5,08 pokoju;
 *   mieszkania oddane w 2024 r. miały średnio 163,3 m², z czego 61,8%
 *   powstało na cele indywidualne (polskawliczbach.pl),
 * — Mogilany 3 802 mieszkańców, Libertów 3 029 (NSP 2021),
 * — DK7 (zakopianka) przechodzi przez Libertów, Gaj i Mogilany; gmina
 *   graniczy z Krakowem, ok. 15 km od centrum,
 * — rozbudowa DK7 w Libertowie: 1,1 km drogi, tunel 52 m pod zakopianką,
 *   2 ronda, 3 kładki, ekrany akustyczne; wykonawca IMB-Podbeskidzie,
 *   ok. 150 mln zł, start luty 2025, zakończenie planowane na lato 2027
 *   (dk7-libertow.pl, miasto-info.pl),
 * — stan na 3 lipca 2026: w rejonie robót trzy pasy — dwa w stronę
 *   Myślenic, JEDEN w stronę Krakowa; największe korki w porannym szczycie
 *   (GDDKiA za naszemiasto.pl),
 * — autobusy aglomeracyjne: 245, 255, 275, 285; węzeł przesiadkowy
 *   Borek Fałęcki (busy-krk.pl),
 * — Góra Mogilańska 404 m n.p.m., północna krawędź Pogórza Wielickiego,
 * — rezerwat florystyczny „Cieszynianka” — 10,73 ha, utworzony w 1969 r.,
 *   ok. 1 km na północny zachód od centrum Mogilan,
 * — zespół dworski Konopków: rezydencja z lat 1560–1567, Konopkowie
 *   właścicielami od 1802 do 1939 r., od 1967 r. w zarządzie PAN,
 * — kościół św. Bartłomieja w rejestrze zabytków.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — zwiedzania dworu Konopków — obiekt NIE JEST udostępniony zwiedzającym,
 *   teren ogrodzony. To dokładnie ten fakt, który konkurencja przekręca,
 * — DW 953 jako drogi przez Mogilany — sprawdzone, nie przechodzi tędy,
 * — produktów z ministerialnej Listy Produktów Tradycyjnych — NIE
 *   POTWIERDZONE,
 * — parku krajobrazowego i większych pracodawców — nie potwierdzono,
 * — opisu ołtarza „w kształcie serca” — język promocyjny strony gminy.
 */
export const MOGILANY: CityContent = {
  slug: "mogilany",
  h1: "Thermomix Mogilany – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Mogilany — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Mogilany: bezpłatna prezentacja TM7 u Ciebie w kuchni — Libertów, Gaj, Lusina, Włosań, Konary. Cena i raty 0,6%. Tel. 517 185 691.",
  ogTitle: "Thermomix Mogilany — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Mogilany. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead:
    "Do gminy Mogilany przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Przywożę urządzenie i składniki — Ty nie kupujesz i nie przygotowujesz nic. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina Mogilany, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mogilanach – jak wygląda prezentacja?",
      paragraphs: [
        "Przywożę urządzenie, składniki i naczynia, gdyby były potrzebne. Ty przygotowujesz kawałek wolnego blatu i gniazdko — nic poza tym. Sprzątanie po gotowaniu też jest po mojej stronie.",
        "Gotujemy pełne dania, nie próbki. Zwykle coś obiadowego, coś słodkiego i, jeśli chcesz, coś z tego, co masz akurat w lodówce — bo to pokazuje urządzenie na Waszym jedzeniu, a nie na przepisie dobranym pod pokaz.",
        "Na koniec liczby: aktualna cena, obowiązująca promocja i wysokość raty przy różnych okresach spłaty. Nie oczekuję decyzji tego samego dnia.",
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
      heading: "Zakopianka układa tu rozkład dnia — zwłaszcza teraz",
      paragraphs: [
        "Przez tę gminę przechodzi zakopianka: krajowa siódemka przecina Libertów, Gaj i Mogilany. To zawsze było główną zaletą tego miejsca i główną jego uciążliwością naraz, a od lutego 2025 roku ta druga strona wyraźnie przeważa, bo w Libertowie trwa duża rozbudowa drogi — z tunelem, dwoma rondami i kładkami dla pieszych. Zakończenie zaplanowano na lato 2027.",
        "W praktyce oznacza to jedno: latem 2026 w rejonie robót w stronę Krakowa jedzie się jednym pasem, a największe korki wypadają w porannym szczycie. Piszę o tym wprost, bo inni przedstawiciele w tej okolicy piszą o „doskonałym połączeniu z Krakowem”, jakby budowy nie było.",
        "Dla nas ma to dwie konsekwencje. Pierwsza jest moja: wyjeżdżam z zapasem i staram się nie umawiać spotkań w Libertowie ani Gaju na godziny szczytu. Druga jest Twoja i dużo ważniejsza — jeśli codziennie stoisz w tym korku, wracasz do domu później niż rok temu, a obiad i tak ma być. To jest właśnie moment, w którym urządzenie, które gotuje bez pilnowania, przestaje być gadżetem, a zaczyna być rozwiązaniem konkretnego problemu.",
        "Danie nastawione rano czeka i odgrzewa się w tym samym naczyniu, w którym powstało. Zupa gotuje się, kiedy Ty rozpakowujesz zakupy. Nikt nie musi stać przy garnku o dziewiętnastej, bo urządzenie samo trzyma temperaturę, miesza i wyłącza się w odpowiednim momencie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Mogilany?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej rozmowie. Możesz też zostawić kontakt w formularzu na dole strony i podać porę, o której mogę oddzwonić.",
        "Powiedz, w którym sołectwie mieszkasz, i od razu uprzedź, jeśli to Libertów albo Gaj — wtedy sama zaproponuję godzinę poza szczytem, żeby nie okazało się, że stoję w korku, kiedy masz na mnie czekać. Przyda się też liczba osób na spotkaniu, bo od tego zależy, co ugotujemy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Mogilany"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Mogilany",
      paragraphs: [
        "To gmina domów i to dużych. Przeciętne mieszkanie ma tu ponad sto dwadzieścia metrów, a domy oddawane do użytku w ostatnich latach są jeszcze większe — średnio ponad sto sześćdziesiąt. Dwie trzecie z nich powstaje na własne potrzeby, a nie na sprzedaż. To znaczy, że ludzie budują tu dla siebie i urządzają kuchnię raz, na lata.",
        "W takiej kuchni miejsce na blacie nie jest tematem. Tematem jest co innego: obiad dla kilku osób w domu, w którym każdy wraca o innej porze, i to, co zrobić, żeby nie kończyć każdego wieczoru przy garnku.",
        "Przy małych dzieciach najbardziej praktyczne bywa gotowanie na dwóch piętrach: obiad dla dorosłych w naczyniu, porcja dla dziecka na parze w Varomie, jedno urządzenie i jedno zmywanie. Ugotowanie i zmiksowanie odbywa się w tym samym naczyniu, bez przelewania gorących rzeczy.",
        "Starsze dzieci często zaczynają tu gotować same, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać. To zresztą jeden z częstszych powodów, dla których ludzie do mnie dzwonią.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Gdzie w gminie Mogilany dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dziesięciu sołectw, bez dopłaty za odległość — od Libertowa i Lusiny, które stykają się z Krakowem, po Włosań, Konary i Kulerzów na południu gminy.",
    "Gmina leży na grzbiecie Góry Mogilańskiej, na północnej krawędzi Pogórza Wielickiego — stąd te widoki, które zna każdy, kto tędy jeździł. Dla mnie oznacza to drogi, które potrafią być strome i kręte, zwłaszcza zimą. Przy adresach na stoku warto powiedzieć przy umawianiu, czy da się podjechać pod dom.",
    "Osobno traktuję Libertów i Gaj, przez które przechodzi zakopianka i gdzie trwa rozbudowa drogi. Tam po prostu wybieram godziny poza szczytem. Dla Ciebie nic to nie zmienia — dojazd jest bezpłatny wszędzie w gminie i niezależnie od tego, ile czasu mi zajmie.",
  ],
  districts: [
    "Mogilany",
    "Libertów",
    "Gaj",
    "Lusina",
    "Włosań",
    "Konary",
    "Buków",
    "Chorowice",
    "Brzyczyna",
    "Kulerzów",
  ],

  nearbyHeading: "Południe pod Krakowem też obsługuję",
  nearbyParagraphs: [
    "Mogilany leżą na trasie, którą jeżdżę na południe od Krakowa — obok są Świątniki Górne i Skawina, dalej Myślenice i Dobczyce. Do żadnej z tych miejscowości nie doliczam opłaty za dojazd.",
    "Jeśli umawiasz się razem z kimś z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia — a przy obecnym ruchu na zakopiance to po prostu rozsądniejsze.",
  ],
  nearbyTowns: [
    "Kraków",
    "Świątniki Górne",
    "Skawina",
    "Myślenice",
    "Wieliczka",
    "Dobczyce",
    "Zabierzów",
  ],

  about: blokOMnie("do Mogilan", "w gminach na południe od Krakowa"),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich sołectw gminy Mogilany?",
      answer:
        "Tak — do wszystkich dziesięciu, od Libertowa i Lusiny po Włosań, Konary i Kulerzów. Dojazd jest bezpłatny niezależnie od odległości.",
    },
    ...faqWspolne("w gminie Mogilany"),
    {
      question: "Mieszkam w Libertowie, gdzie trwa przebudowa zakopianki. Dojedziesz?",
      answer:
        "Tak, tylko zaproponuję godzinę poza porannym szczytem. W rejonie robót w stronę Krakowa jedzie się obecnie jednym pasem, więc wolę wyjechać z zapasem niż kazać Ci czekać. To mój problem, nie Twój — dojazd i tak jest bezpłatny.",
    },
    {
      question: "Wracam z Krakowa późno i nie mam już siły gotować. Czy to coś zmieni?",
      answer:
        "Właśnie w takich domach różnica jest największa, choć nie polega na tym, że gotowanie robi się szybsze. Polega na tym, że przestaje wymagać Twojej obecności — nastawiasz i robisz w tym czasie coś innego. Uczciwie: jeśli po prezentacji uznasz, że przy Twoim trybie dnia to się nie zwróci, powiem Ci to wprost.",
    },
    {
      question: "Mamy duży dom i sporo sprzętu kuchennego. Czy prezentacja ma sens?",
      answer:
        "Tym bardziej, bo zobaczysz konkretnie, co z tych sprzętów Thermomix zastępuje, a czego nie. Sama ocenisz, czy to zmiana warta pieniędzy — nie namawiam do dokładania kolejnego urządzenia do szafki.",
    },
  ],

  geo: { lat: 49.9439, lng: 19.8892 },
};
