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
 * MUCHARZ — gmina wiejska, 4 175 mieszkańców (GUS, 31.12.2024),
 * 37,3 km². NAJMNIEJSZA gmina powiatu wadowickiego.
 *
 * OŚ STRONY: gmina, której mapa zmieniła się na oczach jednego
 * pokolenia. Jezioro Mucharskie zajęło ok. 30% powierzchni gminy.
 * Wieś Skawce częściowo znalazła się na dnie. A wieś Zagórze,
 * która w 2002 r. miała 114 mieszkańców, ma dziś 25 — i została
 * odcięta od reszty gminy, kiedy 25 października 2016 r.
 * rozebrano stuletni most.
 *
 * ⚠️ NAJWAŻNIEJSZA ZASADA REDAKCYJNA TEJ STRONY:
 * NIE PISZĘ „Zagórze wyludniło się z powodu zbiornika”.
 * Żadne źródło nie stawia tego zdania wprost. Mam dwa
 * udokumentowane fakty (odcięcie w 2016 i spadek 114 → 25)
 * i ich zbieżność czasową. Zestawiam je obok siebie i pozwalam
 * czytelniczce wyciągnąć wniosek. Sam związek przyczynowy
 * byłby moim wnioskiem, nie faktem — zwłaszcza że wykupy gruntów
 * pod zbiornik trwały od lat 90., więc część spadku mogła nastąpić
 * dużo wcześniej.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — JEZIORO MUCHARSKIE (dawniej Zbiornik Świnna Poręba):
 *   powierzchnia 1 035 ha, pojemność 161 mln m³, długość ok. 11 km,
 *   zapora 604 m długości i 54 m wysokości. Obejmuje gminy
 *   Mucharz, Stryszów i Zembrzyce. Wybór lokalizacji 1973,
 *   początek budowy 1986. Nazwę „Jezioro Mucharskie” nadano
 *   urzędowo w 2018 r.
 *   ⚠️ DATY ZAKOŃCZENIA NAPEŁNIANIA NIE POTWIERDZONO. Napełnianie
 *   ruszyło wiosną 2017, zbiornik opróżniono dla stabilizacji
 *   osuwisk (ochrona ok. 60 domów), ponowne napełnianie
 *   24 lutego 2020. W TEKŚCIE NIE PADA ŻADEN ROK ZAKOŃCZENIA,
 * — SKAWCE: wieś częściowo na dnie jeziora. Ostatnia rodzina
 *   (sześcioosobowa) mieszkająca na dnie przyszłego zbiornika
 *   podpisała porozumienie o dobrowolnym przesiedleniu we
 *   wrześniu 2016 r. Skawce nadal mają 432 mieszkańców — zalano
 *   część wsi w dolinie, nie całą,
 * — ZAGÓRZE: 114 mieszkańców w 2002 (46 gospodarstw domowych),
 *   25 w 2021. Spadek 1998–2021: −92,4%. 56,0% mieszkańców
 *   w wieku poprodukcyjnym,
 * — ODCIĘCIE: 25 października 2016 r. rozpoczęto likwidację drogi
 *   i mostu łączącego Mucharz z Zagórzem. Most stał ponad 100 lat,
 *   od 1988 r. pełnił funkcję drogowego. Wcześniej do urzędu gminy
 *   było 1,5 km; po rozbiórce droga wydłużyła się o ponad 20 km.
 *   Zapowiedziano nowy odcinek ok. 2,5 km przez Świnną Porębę,
 *   Gołębiówkę i Brańkówkę,
 *   ⚠️ NIE POTWIERDZONO, czy droga zastępcza powstała. Dlatego
 *   w tekście piszę o rozbiórce w czasie przeszłym i NIE twierdzę,
 *   jak wygląda dojazd dziś. W FAQ pytam o to czytelniczkę,
 * — WSIE (6): Mucharz 1 127, Świnna Poręba 945, Jaszczurowa 883,
 *   Koziniec 725, Skawce 432, Zagórze 25,
 * — PRZYSTANIE nad jeziorem: Leniówka, WindMill, Oblasek,
 *   Ostałówka. Rejsy statkiem „Róża Wiatrów” i gondolą „Szafir”,
 * — DEMOGRAFIA: +9,8% ludności (2002–2024), saldo migracji +9.
 *   Średni wiek 40,8. Mieszkania 107,0 m², 37,1 m² na osobę.
 *   Gaz sieciowy tylko 16,53%. Zero pracodawców powyżej 49 osób.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NARRACJA „GMINA, KTÓRA PRZESTAWIŁA SIĘ NA TURYSTYKĘ”.
 *   W budżecie 2024 dział Turystyka to 5,0 tys. zł — 0,0%
 *   wydatków gminy. Zakwaterowanie i gastronomia: 5 podmiotów.
 *   Wymieniam przystanie jako fakt, ale NIE buduję z tego obrazu
 *   kurortu, bo liczby temu przeczą,
 * — LICZBA PRZESIEDLONYCH i wyburzonych budynków. Nieznana.
 *   Podaję tylko potwierdzony przypadek ostatniej rodziny,
 * — POTRAWA LOKALNA. Sprawdzone: BRAK. Sekcja `culinary` mówi
 *   o tym wprost,
 * — KGW, IMPREZY. „Dni Ziemi Mucharskiej” mają numerowane edycje
 *   (widziano „13”), ale bez roku ta liczba jest bezużyteczna.
 *   NIE PODAJĘ numeru edycji,
 * — ŻAL, STRATA, „ZATOPIONA WIEŚ” JAKO DRAMAT. Piszę o tym
 *   rzeczowo i krótko. To są domy realnych ludzi, część z nich
 *   nadal tu mieszka, i nie zamierzam robić z ich historii
 *   materiału na wzruszający akapit sprzedażowy.
 *
 * PUŁAPKI:
 * — ZAGÓRZE NIE ZOSTAŁO ZALANE. Zostało ODCIĘTE — to zupełnie
 *   co innego i mylenie tego byłoby błędem rzeczowym,
 * — SKAWCE ISTNIEJĄ i mają 432 mieszkańców. Zalano część wsi,
 *   nie całą. Nie pisać „zatopiona wieś Skawce” bez tego
 *   zastrzeżenia,
 * — jezioro obejmuje TRZY gminy: Mucharz, Stryszów i Zembrzyce.
 *   Nie przypisywać go wyłącznie Mucharzowi,
 * — nazwa urzędowa to Jezioro Mucharskie od 2018 r.; wcześniej
 *   Zbiornik Świnna Poręba. Obie nazwy są w użyciu,
 * — powierzchnia: 1 035 ha to maksymalne piętrzenie; portale
 *   wędkarskie podają 767 ha (stan normalny). Podaję 1 035
 *   albo żadnej — nie mieszam.
 */

export const MUCHARZ: CityContent = {
  slug: "mucharz",
  h1: "Thermomix Mucharz – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Mucharz — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Mucharz: bezpłatna prezentacja TM7 u Ciebie w kuchni — Mucharz, Jaszczurowa, Świnna Poręba, Skawce. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mucharz — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Mucharz. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Mucharz przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich wsi gminy, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("cała gmina Mucharz, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Mucharz – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Mucharzu, jak w Jaszczurowej, Kozińcu czy Skawcach.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Gmina, której mapa zmieniła się w jedno pokolenie",
      paragraphs: [
        "Mucharz jest najmniejszą gminą powiatu wadowickiego i jednocześnie tą, w której przez ostatnie lata zmieniło się najwięcej. Jezioro Mucharskie — ponad tysiąc hektarów wody, jedenaście kilometrów długości, zapora na pięćdziesiąt cztery metry wysokości — zajęło mniej więcej trzydzieści procent powierzchni gminy. Zbiornik obejmuje też sąsiednie Zembrzyce i Stryszów.",
        "Część wsi Skawce znalazła się na dnie. We wrześniu dwa tysiące szesnastego roku ostatnia sześcioosobowa rodzina mieszkająca na terenie przyszłego zbiornika podpisała porozumienie o przesiedleniu. Same Skawce istnieją dalej i mieszka w nich ponad czterysta osób — zalana została dolina, nie cała wieś.",
        "Najbardziej uderza jednak co innego. W dwa tysiące drugim roku w Zagórzu mieszkało sto czternaście osób. Dziś mieszka dwadzieścia pięć. Dwudziestego piątego października dwa tysiące szesnastego roku zaczęto rozbierać drogę i most, który łączył Zagórze z resztą gminy — most stał tam ponad sto lat. Wcześniej do urzędu gminy było stamtąd półtora kilometra. Po rozbiórce droga wydłużyła się o ponad dwadzieścia.",
        "Nie napiszę, że jedno wynika z drugiego, bo tego nie sprawdziłam i nie chcę zgadywać — wykupy gruntów pod zbiornik trwały tu od lat dziewięćdziesiątych, więc ludzie wyjeżdżali stąd długo przed rozbiórką mostu. Podaję te fakty obok siebie, bo obydwa są prawdziwe i obydwa mówią coś o tej gminie.",
        "Praktycznie dla mnie oznacza to jedno: w gminie Mucharz szczególnie proszę o wskazówki dojazdowe. Mapy w telefonie nie zawsze nadążyły za tym, co się tutaj wydarzyło, a droga, która wygląda na najkrótszą, potrafi nie istnieć. Wolę zapytać, niż stać na końcu drogi, która urywa się nad wodą.",
        "Poza tym gmina wygląda dziś zdrowo. Ludności przybyło jej blisko dziesięć procent od dwa tysiące drugiego roku, a przeciętne mieszkanie ma tu sto siedem metrów — na jedną osobę przypada trzydzieści siedem. To są duże domy, w których żyje niewiele osób, i to widać w kuchni.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Mucharz?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w której wsi mieszkasz, i — to ważniejsze niż gdzie indziej — którędy najlepiej do Ciebie dojechać. Po powstaniu jeziora część dawnych połączeń w tej gminie przestała istnieć, a nawigacja nie zawsze o tym wie. Jedna wskazówka od Ciebie oszczędza mi pół godziny.",
        "Weekendy są tu równie normalnym terminem jak wieczory w tygodniu. Jeśli w domu jest gospodarstwo, po prostu powiedz, o której masz spokojną godzinę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Mucharz"),
    sekcjaRaty(),
    {
      id: "jedna-osoba",
      heading: "Duży dom, mało osób przy stole",
      paragraphs: [
        "W gminie Mucharz na jednego mieszkańca przypada trzydzieści siedem metrów kwadratowych mieszkania — więcej niż u któregokolwiek z sąsiadów. Za tą liczbą stoi bardzo konkretna sytuacja: duże domy, często budowane dla rodziny wielopokoleniowej, w których dziś mieszka mniej osób, niż zakładano przy budowie.",
        "To zmienia gotowanie bardziej, niż się wydaje. Gotowanie dla jednej albo dwóch osób jest niewdzięczne: ugotowanie porządnego obiadu od zera zajmuje tyle samo czasu co dla sześciu, tylko potem nie ma komu tego zjeść. Bardzo łatwo skończyć na kanapce, na czymś odgrzanym z torebki albo na jedzeniu byle czego, bo szkoda zachodu.",
        "Praktyczne bywa tu przede wszystkim to, że można ugotować normalnie, jednorazowo, a potem po prostu mieć z czego korzystać. Zupa na kilka dni, sos podzielony na porcje, gotowa baza w lodówce. Kiedy w lodówce stoi coś sensownego, wieczorny rachunek „opłaca się czy nie” wygląda zupełnie inaczej.",
        "Druga rzecz to ta, że danie jednogarnkowe gotuje się, kiedy Ty jesteś przy zwierzętach albo poza domem, i samo się wyłącza. Nie trzeba wracać co dziesięć minut zamieszać. Rozdrabnianie, ucieranie, gotowanie w stałej temperaturze — to wszystko dzieje się bez Twojej obecności w kuchni.",
        "Jeśli w domu bywają wnuki albo dorosłe dzieci na weekend, przydaje się jeszcze jedno: da się szybko przejść ze skali „dla dwojga” na skalę „dla ośmiu” bez rozstawiania połowy kuchni. Ciasto na pierogi, sos, zupa — seriami, w jednym naczyniu.",
      ],
      links: [
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Ten sam sprzęt sprawdza się przy obiedzie dla dwojga i przy weekendzie z wnukami.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Mucharz i gotowanie — bez wymyślonej potrawy lokalnej",
    paragraphs: [
      "Zacznę od tego, czego tu nie ma, bo to uczciwsze. Gmina Mucharz nie ma żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych i nie znalazłam udokumentowanej potrawy, którą można by nazwać wyłącznie tutejszą. Mogłabym w to miejsce wpisać jakieś ogólne danie beskidzkie — kwaśnicę, prażonki — i pewnie nikt by nie sprawdził. Nie zrobię tego.",
      "Jest za to coś, co realnie zmieniło tu kuchnię, i to niedawno. Nad jeziorem działa dziś kilka przystani i wypożyczalni, przyjeżdżają ludzie na weekend, są rejsy statkiem. W gminie, w której jeszcze niedawno nie było powodu, żeby ktokolwiek się zatrzymał, latem pojawił się ruch. Dla domu nad wodą to znaczy gości, którzy wpadają bez zapowiedzi, i weekendy, kiedy nagle gotuje się dla większej liczby osób.",
      "Powiem też uczciwie, jak duża jest ta zmiana, żeby nie robić z niej więcej, niż jest. Gmina wydaje na turystykę pięć tysięcy złotych rocznie, a zakwaterowaniem i gastronomią zajmuje się tu pięć podmiotów. To nie jest kurort i nikt tu nie zbudował drugiego Zakopanego. To jest gmina, która ma nad sobą duże jezioro i powoli się do tego dostosowuje.",
      "Praktycznie najbardziej przydaje się więc to, co przydaje się w każdym domu, do którego zaglądają ludzie: możliwość zrobienia czegoś porządnego bez planowania z trzydniowym wyprzedzeniem. Ciasto w kilkadziesiąt sekund, zupa, która gotuje się sama, sos, który się nie przypali. Nie dlatego, że to wymyślne — dlatego, że wtedy przyjęcie kogoś przestaje być przedsięwzięciem.",
    ],
  },

  districtsHeading: "Gdzie w gminie Mucharz dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu wsi, bez żadnej dopłaty za odległość: Mucharz, Świnna Poręba, Jaszczurowa, Koziniec, Skawce i Zagórze.",
    "Zagórze wymienię osobno, bo to szczególny przypadek: mieszka tam dziś dwadzieścia pięć osób, a w dwa tysiące drugim roku mieszkało sto czternaście. Jeśli mieszkasz w Zagórzu i chcesz się umówić — przyjadę tak samo jak wszędzie indziej, tylko naprawdę proszę o wskazówkę, którędy dziś się do Was dojeżdża.",
    "To samo dotyczy Skawiec i okolic zbiornika. Po powstaniu jeziora część dawnych dróg w tej gminie przestała istnieć, a nawigacja bywa nieaktualna. Nie mam z tym problemu, ale wolę wiedzieć wcześniej.",
    "Nad jeziorem działa dziś kilka przystani — Leniówka, WindMill, Oblasek, Ostałówka — a latem kursuje statek i gondola. Sama zapora stoi około sześciu kilometrów na południe od Wadowic i ma ponad sześćset metrów długości.",
  ],
  districts: [
    "Mucharz",
    "Świnna Poręba",
    "Jaszczurowa",
    "Koziniec",
    "Skawce",
    "Zagórze",
  ],

  nearbyHeading: "Stryszów, Wadowice i Zembrzyce też są na mojej trasie",
  nearbyParagraphs: [
    "Stryszów mam tuż obok — to druga gmina leżąca nad tym samym jeziorem. Do Wadowic jest stąd kilkanaście kilometrów, Kalwaria Zebrzydowska i Zembrzyce też są w zasięgu tego samego wyjazdu. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy gminy — a przy tak poszatkowanym wodą terenie łatwo się pomylić — po prostu zapytaj. Traktuję całą okolicę jako jeden obszar dojazdu.",
  ],
  nearbyTowns: [
    "Stryszów",
    "Wadowice",
    "Kalwaria Zebrzydowska",
    "Andrychów",
    "Kraków",
  ],

  about: blokOMnie("do gminy Mucharz", "w powiecie wadowickim"),

  faq: [
    {
      question: "Mieszkam w Zagórzu. Dojedziesz tam w ogóle?",
      answer:
        "Dojadę i bez dopłaty za odległość — ale przy umawianiu poproszę Cię o dokładną wskazówkę, którędy dziś się do Was jedzie. Wiem, że w dwa tysiące szesnastym roku rozebrano drogę i most do Mucharza, i nie chcę zakładać na podstawie mapy, jak wygląda dojazd teraz. Wolę zapytać Ciebie niż nawigację.",
    },
    ...faqWspolne("w gminie Mucharz"),
    {
      question: "Gotuję dla siebie i męża. Czy to się w ogóle opłaca?",
      answer:
        "To najczęstsze pytanie w tej gminie i odpowiem konkretnie, a nie hasłem. Przy dwóch osobach nie chodzi o oszczędność czasu na jednym obiedzie, tylko o to, żeby dało się ugotować raz i mieć z czego korzystać przez kilka dni, bez stania przy garnku. Na prezentacji policzę to na Waszych realnych porcjach i powiem wprost, jeśli uznam, że w Waszym przypadku to się nie broni.",
    },
    {
      question: "Przyjeżdżają do nas goście nad jezioro. Da się szybko ugotować dla większej liczby osób?",
      answer:
        "Da się i to jest akurat mocna strona tego sprzętu — ciasto, sos czy zupę robi się partiami w jednym naczyniu, bez rozstawiania połowy kuchni. Powiedz przy umawianiu, dla ilu osób zwykle gotujesz w szczycie sezonu, a dobiorę przepisy pod te ilości, nie pod cztery porcje z folderu.",
    },
  ],

  geo: { lat: 49.8118, lng: 19.558 },
};
