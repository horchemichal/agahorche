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
 * ZIELONKI — gmina, która przez dwadzieścia lat urosła dwukrotnie.
 * To jest oś całej strony: mieszka tu mnóstwo osób, które PRZEPROWADZIŁY SIĘ
 * z krakowskiego mieszkania do własnego domu. Kuchnia po takiej
 * przeprowadzce jest zupełnie innym pomieszczeniem i to jest temat,
 * o którym da się napisać coś prawdziwego i niepowtarzalnego.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 19 sołectw: Batowice, Bibice, Bosutów–Boleń, Brzozówka, Dziekanowice,
 *   Garlica Duchowna, Garlica Murowana, Garliczka, Grębynice, Januszowice,
 *   Korzkiew, Osiedle Łokietka, Owczary, Pękowice, Przybysławice,
 *   Trojanowice, Węgrzce, Wola Zachariaszowska, Zielonki
 *   (zielonki.pl/soltysi-i-rady-soleckie/),
 * — gmina graniczy bezpośrednio z Krakowem (zielonki.pl/polozenie-gminy/),
 * — wzrost liczby ludności o 91,9% w latach 2002–2024 (polskawliczbach.pl,
 *   dane GUS),
 * — przeciętna powierzchnia mieszkania 124,6 m² — 22. miejsce w Polsce
 *   (zielonki.geoportal-krajowy.pl/statystyki-gus),
 * — S52 Północna Obwodnica Krakowa otwarta 23.12.2024, ponad połowa
 *   przebiegu w gminie, tunel TS-04 (653 m) na terenie Zielonek,
 * — DW 794 Kraków–Skała–Wolbrom przez wieś Zielonki,
 * — 19 linii aglomeracyjnych MPK, Bilet Metropolitalny od sierpnia 2023,
 * — przystanek Kraków Batowice, linia SKA2, ok. 18 min do Krakowa Głównego,
 * — zamek w Korzkwi (XIV/XV w., rejestr zabytków, od 1997 własność
 *   prywatna, po pracach konserwatorskich),
 * — fort pancerny 47a „Węgrzce” Twierdzy Kraków, rejestr zabytków,
 * — pucheroki — zwyczaj Niedzieli Palmowej w Bibicach, Zielonkach
 *   i Trojanowicach.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — liczby mieszkańców: gmina podaje 24 689 (ewidencja, koniec 2025),
 *   GUS 27 965 (koniec 2024). Dwie prawdziwe, różne liczby — na stronie
 *   sprzedażowej niczego nie wnoszą, a wyglądałyby na błąd,
 * — „najlepiej zachowany fort pancerny w Europie” — to sformułowanie
 *   promocyjne samej gminy, nie fakt,
 * — wpisu pucheroków na krajową listę niematerialnego dziedzictwa —
 *   NIE POTWIERDZONE w wykazie NID,
 * — konkretnych miejsc korków — brak wiarygodnego źródła.
 *
 * PUŁAPKA: przystanek Kraków Batowice leży administracyjnie w Krakowie
 * (dzielnica Wzgórza Krzesławickie), a nie w gminie Zielonki. Nie wolno
 * napisać „stacja kolejowa w gminie Zielonki”.
 */
export const ZIELONKI: CityContent = {
  slug: "zielonki",
  h1: "Thermomix Zielonki – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Zielonki — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Zielonki: bezpłatna prezentacja TM7 u Ciebie w kuchni — Bibice, Węgrzce, Trojanowice, Korzkiew i pozostałe sołectwa. Tel. 517 185 691.",
  ogTitle: "Thermomix Zielonki — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Zielonki. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead:
    "Do gminy Zielonki przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich dziewiętnastu sołectw.",

  highlights: highlightyStandardowe("cała gmina Zielonki, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zielonkach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w domu w Bibicach, jak w mieszkaniu na Osiedlu Łokietka.",
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
      heading: "Gmina, która urosła dwukrotnie — i co to zmienia w kuchni",
      paragraphs: [
        "Zielonki to jedna z najszybciej rosnących gmin w Małopolsce: od 2002 do 2024 roku liczba mieszkańców zwiększyła się tu o ponad dziewięćdziesiąt procent. To nie jest ciekawostka statystyczna, tylko opis tego, kto tu dziś mieszka. Bardzo dużo osób przeprowadziło się w ostatnich latach z krakowskiego mieszkania do własnego domu tuż za granicą miasta.",
        "Dla kuchni to jest przeskok, którego nikt się przed przeprowadzką nie spodziewa. Statystyka mówi, że przeciętne mieszkanie w tej gminie ma około stu dwudziestu pięciu metrów — to dwudziesty drugi wynik w Polsce. W praktyce znaczy tyle, że z kuchni, w której blat kończył się po dwóch szafkach, przechodzi się do kuchni z wyspą albo półwyspem.",
        "I wtedy pojawia się pytanie, które słyszę tu częściej niż gdziekolwiek indziej: skoro mam wreszcie miejsce, po co mi jedno urządzenie zamiast pięciu? Odpowiadam uczciwie — jeśli lubisz gotować i masz na to czas, żadne urządzenie tego nie zastąpi. Thermomix zabiera co innego: konieczność stania przy garnku i pilnowania. To się liczy wtedy, gdy wracasz z Krakowa o osiemnastej, a obiad ma być na stole.",
        "Druga rzecz, o której warto wiedzieć przy nowym domu: instalacja jest tu zwykle świeża i mocna, więc nie ma tematu z obwodem kuchennym. To jedyna gmina w mojej okolicy, gdzie w ogóle o to nie pytam.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Zielonki?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz od razu, w którym sołectwie mieszkasz i ile osób będzie na spotkaniu. Pierwsze pozwala mi ułożyć trasę, drugie — dobrać dania i wziąć odpowiednio więcej składników. Sołectwa tej gminy są rozrzucone od Węgrzec po Korzkiew, więc konkretna nazwa naprawdę pomaga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Zielonki"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny spod Krakowa",
      paragraphs: [
        "Typowy dzień w tej gminie zaczyna się wcześnie i kończy późno, bo praca zwykle jest w Krakowie. Między jednym a drugim wypada zrobić obiad dla kilku osób i to jest moment, w którym urządzenie, które gotuje bez pilnowania, przestaje być gadżetem.",
        "Najbardziej praktyczne bywa to, że zupa albo danie jednogarnkowe może się gotować, kiedy Ty rozpakowujesz zakupy albo siedzisz z dzieckiem nad lekcjami. Nie trzeba stać obok, nie trzeba mieszać, a urządzenie samo wyłącza się w odpowiednim momencie.",
        "Rodzicom najmłodszych dzieci najczęściej przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci z kolei często same zaczynają gotować, bo przepis prowadzi krok po kroku i nie trzeba nad nimi stać.",
        "W większych domach dochodzi jeszcze gotowanie na parze piętro wyżej: obiad dla dorosłych na dole, porcja dla dziecka w Varomie, wszystko naraz.",
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

  districtsHeading: "Gdzie w gminie Zielonki dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dziewiętnastu sołectw i bez żadnej dopłaty za odległość — od Węgrzec i Bibic, które praktycznie stykają się z Krakowem, po Korzkiew i Garliczkę na drugim końcu gminy.",
    "Ta gmina ma nietypowy kształt: owija się wokół północnej granicy Krakowa, więc niektóre sołectwa leżą bliżej krakowskiego Prądnika niż siebie nawzajem. Dlatego przy umawianiu proszę o nazwę sołectwa, a nie o „gminę Zielonki” — od tego zależy, którędy jadę i ile czasu rezerwuję.",
    "Od końca 2024 roku dojazd zmieniła Północna Obwodnica Krakowa, której ponad połowa przebiegu leży w granicach gminy — razem z tunelem pod Zielonkami. Dla mnie oznacza to tyle, że część adresów w tej okolicy jest dziś po prostu szybciej osiągalna niż była. Dla Ciebie nie zmienia nic, bo dojazd i tak jest bezpłatny.",
  ],
  districts: [
    "Zielonki",
    "Bibice",
    "Węgrzce",
    "Batowice",
    "Bosutów",
    "Boleń",
    "Brzozówka",
    "Dziekanowice",
    "Garlica Duchowna",
    "Garlica Murowana",
    "Garliczka",
    "Grębynice",
    "Januszowice",
    "Korzkiew",
    "Osiedle Łokietka",
    "Owczary",
    "Pękowice",
    "Przybysławice",
    "Trojanowice",
    "Wola Zachariaszowska",
  ],

  nearbyHeading: "Cały pierścień wokół Krakowa też obsługuję",
  nearbyParagraphs: [
    "Zielonki są dla mnie częścią większej trasy po gminach otaczających Kraków. Do Michałowic, Zabierzowa czy Wieliczki dojeżdżam na co dzień, a granica miasta nie zmienia niczego w warunkach — prezentacja i dojazd są bezpłatne wszędzie.",
    "Jeśli umawiasz się razem z siostrą albo koleżanką z sąsiedniej gminy, powiedz o tym od razu. Często da się ustawić oba spotkania jednego dnia i wtedy łatwiej znaleźć termin, który pasuje wszystkim.",
  ],
  nearbyTowns: [
    "Kraków",
    "Michałowice",
    "Zabierzów",
    "Krzeszowice",
    "Wieliczka",
    "Niepołomice",
    "Skawina",
    "Mogilany",
  ],

  about: blokOMnie("do Zielonek", "w gminach wokół Krakowa"),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich sołectw gminy Zielonki?",
      answer:
        "Tak — do wszystkich dziewiętnastu, od Węgrzec i Bibic po Korzkiew, Garliczkę i Januszowice. Dojazd jest bezpłatny i nie zależy od tego, jak daleko od Krakowa mieszkasz.",
    },
    ...faqWspolne("w gminie Zielonki"),
    {
      question: "Przeprowadziliśmy się z Krakowa do domu. Czy to dobry moment na Thermomix?",
      answer:
        "Zwykle tak, bo po przeprowadzce i tak układa się kuchnię od nowa — łatwiej wtedy znaleźć urządzeniu stałe miejsce, zamiast wciskać je między sprzęty, które już stoją. Na prezentacji od razu widać, ile realnie zajmuje na Twoim blacie.",
    },
    {
      question: "Mam dużą kuchnię i sporo sprzętu. Czy prezentacja ma sens?",
      answer:
        "Tym bardziej, bo zobaczysz konkretnie, co z tego, co masz, Thermomix zastępuje, a czego nie. Sama ocenisz, czy to dla Ciebie zmiana warta pieniędzy. Nie namawiam do dokładania kolejnego urządzenia do szafki.",
    },
    {
      question: "Czy mogę zaprosić na prezentację sąsiadki?",
      answer:
        "Jak najbardziej i w tej gminie często tak to wygląda. Powiedz przy umawianiu, ile osób będzie, żebym dobrała przepisy i wzięła więcej składników.",
    },
  ],

  geo: { lat: 50.1225, lng: 19.9114 },
};
