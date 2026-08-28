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
 * RZEZAWA — gmina, przez którą wszyscy przejeżdżają, i która sama
 * codziennie dojeżdża. To jest oś całej strony.
 *
 * Przez południe gminy biegnie A4, przez Łazy DK94, a we wsi Rzezawa
 * jest czynny przystanek kolejowy z kilkudziesięcioma odjazdami na dobę.
 * Mieszka tu dużo osób, które rano jadą do Krakowa albo do Bochni,
 * a wracają po siedemnastej — i to one decydują, o której jest kolacja.
 * Tekst jest napisany dla nich, a nie dla „mieszkańców gminy wiejskiej”.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 11 sołectw: Borek, Bratucice, Buczków, Dąbrówka, Dębina, Jodłówka,
 *   Krzeczów, Łazy, Okulice, Ostrów Królewski, Rzezawa (rzezawa.pl,
 *   wykaz sołtysów i rad sołeckich),
 * — gmina leży między Bochnią a Brzeskiem, ok. 40 km od Krakowa
 *   i ok. 40 km od Tarnowa (rzezawa.pl/polozenie),
 * — A4 przecina południową część gminy (rzezawa.pl/warunki-naturalne;
 *   GDDKiA, odcinek Targowisko–Brzesko),
 * — DK94 na odcinku Bochnia–Brzesko przechodzi przez Łazy
 *   (conadrogach.pl, przebieg DK94),
 * — przystanek kolejowy Rzezawa na linii nr 91 Kraków Główny – Medyka,
 *   ok. 6 km torem od Bochni; ok. 45 odjazdów na dobę, w tym kilkanaście
 *   do Krakowa Głównego; przejazd do Krakowa ok. 50 minut
 *   (Portal Pasażera PKP PLK, Koleje Małopolskie),
 * — budowa łącznika węzła A4 „Bochnia” z DK94, etap III przez Krzeczów,
 *   realizacja 2025–2028 (ZDW Kraków),
 * — wzrost liczby ludności o 11% w latach 2002–2024, saldo migracji
 *   w 2024 dodatnie (polskawliczbach.pl, dane GUS),
 * — Krzeczów i Rzezawa skupiają ok. 61% mieszkańców gminy (rzezawa.pl),
 * — lesistość ok. 26%, Bratucicki Obszar Chronionego Krajobrazu
 *   (GUS; Zespół Parków Krajobrazowych Woj. Małopolskiego),
 * — sanktuarium w Okulicach: obecny kościół 1949–1959, obraz Matki Bożej
 *   Okulickiej koronowany w 1962 r. (sanktuariumokulice.pl); w rejestrze
 *   zabytków figuruje drewniana dzwonnica z lat 1837–1857 (WUOZ Kraków),
 * — „boczek duszony w piwie” — ministerialna Lista Produktów Tradycyjnych,
 *   wpis z 2014 r., przypisany gospodyniom z gminy Rzezawa.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — liczby mieszkańców: w obiegu są cztery różne (11 087 wg gminy,
 *   11 348 wg GUS 2019, 11 487 wg GUS 2024, 11 544 wg geoportalu).
 *   Na stronie sprzedażowej nie wnoszą nic, a wyglądałyby na błąd,
 * — słowa „bazylika” przy Okulicach — statusu bazyliki mniejszej
 *   nie potwierdza żadne źródło; to sanktuarium,
 * — konkretnych czasów przejazdu samochodem i miejsc korków — brak źródła,
 * — terenów zalewowych Raby w tej gminie — NIE POTWIERDZONE w źródłach
 *   urzędowych. Powódź to temat sąsiedniej Drwini, nie Rzezawy.
 *
 * PUŁAPKA NR 1: przez wieś Rzezawa NIE przechodzi DK94. Przechodzi przez
 * Łazy. Wiele stron pisze „Rzezawa przy krajowej czwórce” — to nieprawda.
 *
 * PUŁAPKA NR 2: w gminie NIE MA węzła autostradowego. A4 ją przecina,
 * ale zjazdy są w Bochni i w Brzesku. Nie wolno napisać „zjazd z A4
 * w Rzezawie”.
 */
export const RZEZAWA: CityContent = {
  slug: "rzezawa",
  h1: "Thermomix Rzezawa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Rzezawa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Rzezawa: bezpłatna prezentacja TM7 u Ciebie w kuchni — Krzeczów, Łazy, Okulice, Bratucice i pozostałe sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Rzezawa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Rzezawa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead:
    "Do gminy Rzezawa przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich jedenastu sołectw.",

  highlights: highlightyStandardowe("cała gmina Rzezawa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rzezawie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w domu w Krzeczowie, jak w mieszkaniu w centrum Rzezawy.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
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
      heading: "Gmina, która codziennie dojeżdża — i wraca po siedemnastej",
      paragraphs: [
        "Rzezawa leży dokładnie w połowie drogi między Bochnią a Brzeskiem, a przez jej południową część przechodzi autostrada. Przez Łazy biegnie krajowa dziewięćdziesiąta czwórka. We wsi Rzezawa jest czynny przystanek kolejowy z kilkudziesięcioma odjazdami na dobę, w tym kilkunastoma w stronę Krakowa Głównego — a przejazd zajmuje mniej więcej pięćdziesiąt minut.",
        "To znaczy tyle, że mieszka tu bardzo dużo osób, które pracują gdzie indziej. Rano pociąg albo samochód, wieczorem powrót, a między jednym a drugim cały dzień poza domem. Widać to zresztą w liczbach: od dwóch dekad ludności tu przybywa, a saldo migracji jest dodatnie. Ludzie się tu wprowadzają właśnie dlatego, że stąd wszędzie blisko.",
        "Dla kuchni to jest bardzo konkretna sytuacja. Nie chodzi o to, czy ktoś lubi gotować — najczęściej lubi. Chodzi o to, że obiad ma powstać między osiemnastą a dziewiętnastą, po całym dniu, i że nikt nie ma wtedy siły stać przy garnku i pilnować. To jest jedyne pytanie, które w tej gminie naprawdę ma znaczenie.",
        "Odpowiadam na nie uczciwie: Thermomix nie gotuje za Ciebie i nie zastąpi umiejętności. Zabiera co innego — konieczność stania obok. Zupa może się gotować, kiedy Ty rozpakowujesz zakupy albo przebierasz się po pracy, i sama się wyłączy. Dla kogoś, kto wraca o siedemnastej trzydzieści, to jest różnica między obiadem a kanapką.",
        "Druga rzecz, o której warto wiedzieć: gmina jest podłużna i mocno rozciągnięta z południa na północ. Ponad połowa mieszkańców żyje w Rzezawie i Krzeczowie, a północ — Bratucice, Ostrów Królewski, Dębina — to już rzadsza zabudowa i lasy. Dojazd do każdego z tych adresów jest u mnie tak samo bezpłatny, ale trasa wygląda zupełnie inaczej, więc przy umawianiu proszę o nazwę sołectwa.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Rzezawa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, w którym sołectwie mieszkasz i ile osób będzie na spotkaniu. Pierwsze pozwala mi ułożyć trasę, drugie — dobrać dania i wziąć odpowiednio więcej składników.",
        "Jeśli wracasz z pracy pociągiem albo autostradą, powiedz też, o której realnie jesteś w domu. Wolę przyjechać kwadrans po Tobie niż zastać Cię w drzwiach z torbami. W tej gminie umawiam się na wieczory częściej niż gdziekolwiek indziej w okolicy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Rzezawa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny, która wraca o różnych porach",
      paragraphs: [
        "W domach, gdzie dwoje dorosłych dojeżdża do pracy w dwie różne strony, obiad rzadko jest jeden i o jednej godzinie. Ktoś wraca o szesnastej, ktoś o osiemnastej, dzieci wcześniej. Najczęściej kończy się na tym, że ta sama osoba podgrzewa to samo trzy razy.",
        "Praktyczne bywa tu przede wszystkim to, że danie jednogarnkowe albo zupa mogą się ugotować wcześniej i po prostu poczekać, a każdy weźmie sobie porcję, kiedy wejdzie. Nie trzeba stać obok, nie trzeba mieszać, a urządzenie samo wyłącza się w odpowiednim momencie.",
        "Rodzicom najmłodszych dzieci najczęściej przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci z kolei często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać — a w domu, gdzie rodzice wracają po siedemnastej, to bywa realną pomocą, nie ciekawostką.",
        "W większych rodzinach dochodzi jeszcze gotowanie na parze piętro wyżej: obiad dla dorosłych na dole, porcja dla dziecka w Varomie, wszystko naraz.",
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

  districtsHeading: "Gdzie w gminie Rzezawa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich jedenastu sołectw i bez żadnej dopłaty za odległość — od Krzeczowa i Łazów na południu, przez Rzezawę i Jodłówkę, po Bratucice, Ostrów Królewski i Dębinę na północy.",
    "Południe gminy jest gęsto zabudowane i dobrze skomunikowane: tędy biegnie krajowa droga przez Łazy, tu jest przystanek kolejowy, tędy przechodzi autostrada. Uwaga jednak — zjazdu z autostrady w granicach gminy nie ma. Węzły są w Bochni i w Brzesku, więc do części adresów jadę zwykłymi drogami, tak samo jak Państwo.",
    "Północ wygląda inaczej: Bratucice i Ostrów Królewski to już okolice lasów Bratucickiego Obszaru Chronionego Krajobrazu, z rzadszą zabudową i dłuższymi podjazdami. Dlatego przy umawianiu proszę o nazwę sołectwa, a nie o samą „gminę Rzezawa” — od tego zależy, ile czasu rezerwuję na dojazd.",
    "Osobno zaznaczam Okulice, bo to tu przyjeżdżają ludzie z całej okolicy — do sanktuarium, którego obraz koronowano w 1962 roku. Jeśli umawiamy się na dzień odpustu albo nabożeństwa, warto o tym powiedzieć: wtedy dobieram godzinę tak, żeby nie kolidowała.",
  ],
  districts: [
    "Rzezawa",
    "Krzeczów",
    "Łazy",
    "Jodłówka",
    "Buczków",
    "Okulice",
    "Borek",
    "Dąbrówka",
    "Bratucice",
    "Ostrów Królewski",
    "Dębina",
  ],

  nearbyHeading: "Bochnia i okoliczne gminy też są na mojej trasie",
  nearbyParagraphs: [
    "Rzezawa jest dla mnie częścią większej trasy wokół Bochni. Do samej Bochni jest stąd kilka kilometrów, do Brzeska niewiele więcej — do obu dojeżdżam na co dzień i granica gminy nie zmienia niczego w warunkach.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim.",
  ],
  nearbyTowns: [
    "Bochnia",
    "Brzesko",
    "Drwinia",
    "Nowy Wiśnicz",
    "Niepołomice",
    "Wojnicz",
    "Łapanów",
    "Kraków",
  ],

  about: blokOMnie("do Rzezawy", "w gminach wokół Bochni"),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich sołectw gminy Rzezawa?",
      answer:
        "Tak — do wszystkich jedenastu, od Krzeczowa i Łazów po Bratucice, Ostrów Królewski i Dębinę. Dojazd jest bezpłatny i nie zależy od tego, jak daleko od drogi krajowej mieszkasz.",
    },
    ...faqWspolne("w gminie Rzezawa"),
    {
      question: "Wracam z pracy dopiero po siedemnastej. Czy zdążymy?",
      answer:
        "Spokojnie. Prezentacja trwa około dwóch godzin i wieczory w tygodniu to w tej gminie najczęściej wybierany termin. Powiedz przy umawianiu, o której realnie jesteś w domu — przyjadę kwadrans po tej godzinie, a nie przed nią.",
    },
    {
      question: "Czy urządzenie da się obsłużyć, kiedy jest się zmęczonym po całym dniu?",
      answer:
        "To akurat jest sedno sprawy. Wybierasz przepis, urządzenie prowadzi krok po kroku i samo pilnuje czasu oraz temperatury. Nie musisz nic pamiętać ani nad niczym stać — a to jest zupełnie inny wysiłek niż gotowanie klasyczne po dwunastu godzinach poza domem.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki?",
      answer:
        "Jak najbardziej i w tej gminie często tak to wygląda. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników.",
    },
  ],

  geo: { lat: 49.9907, lng: 20.5187 },
};
