import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * RAWA MAZOWIECKA — gmina miejska w powiecie rawskim, 15 884
 * mieszkańców (31.12.2024, GUS). Brief mówił 17 000 — zawyżone;
 * w obiegu krąży też przestarzałe 17 404. Osobno istnieje gmina
 * wiejska Rawa Mazowiecka.
 *
 * PRAWA MIEJSKIE 1321 r. — NADAWCY NIE PODAJĘ, bo żadne źródło
 * go nie wskazuje. Pierwsza wzmianka: 1228 albo 1288 — TEŻ NIE
 * PODAJĘ.
 *
 * OBALONE: ZAMKU W RAWIE NIE MA. Zachowały się zrekonstruowana
 * ośmioboczna wieża i odcinki murów nigdzie nie wyższe niż dwa
 * metry. Piszę „ruiny zamku i odbudowana baszta", NIGDY „zamek".
 * Baszta jest udostępniona tylko sezonowo (czerwiec–wrzesień,
 * soboty i niedziele) — GODZIN ANI CEN NIE PODAJĘ.
 *
 * SKARB RAWSKI — TO JEST OŚ TEJ STRONY I TRZEBA GO ROZUMIEĆ
 * DOKŁADNIE. To NIE BYŁ skarbiec z kosztownościami, tylko
 * ODRĘBNA KASA PAŃSTWOWA na utrzymanie wojska kwarcianego,
 * przechowywana na tutejszym zamku. Sejm w latach 60. XVI w.
 * uchwalił, że ćwierć (kwarta) dochodów z dóbr królewskich idzie
 * na stałe wojsko; w praktyce trafiała jedna piąta, a starostowie
 * i tak zalegali z wpłatami. DLATEGO w polszczyźnie „skarb
 * rawski" znaczy SKARBIEC PUSTY, niewypłacalny. Nie wolno użyć
 * tego jako metafory zamożności — znaczy dokładnie odwrotnie.
 * ROKU umieszczenia skarbu NIE PODAJĘ (źródła: 1559, 1563, 1569)
 * — piszę „lata 60. XVI wieku".
 *
 * KĄT: MARNOWANIE JEDZENIA — to, co ląduje w koszu, ZANIM
 * w ogóle zostanie ugotowane. Kąt bierze się wprost ze skarbu
 * rawskiego: z kasy, w której nigdy nie było tego, co miało być.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najwięcej jedzenia wyrzuca się nie po obiedzie, tylko
 *   PRZED nim: to, co kupiliśmy i o czym zapomnieliśmy,
 * — że urządzenie tego problemu NIE ROZWIĄZUJE — nie przypomni
 *   o pęczku natki w dolnej szufladzie,
 * — że rozwiązuje go pośrednio: skraca drogę od „to zaraz się
 *   zepsuje" do „zrobione", więc rzeczy na granicy trafiają
 *   do zupy zamiast do kosza,
 * — konkretnie: warzywa z końca skrzynki, przejrzałe owoce,
 *   resztka śmietany, twaróg, ostatnie jajka, chleb,
 * — że jednorazowy zryw nic nie da, a nawyk zaglądania
 *   do lodówki przed zakupami — owszem,
 * — i ODMOWA, wyraźna: nie oceniam, czy coś nadaje się jeszcze
 *   do zjedzenia. To bezpieczeństwo żywności.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNEJ OCENY, CZY PRODUKT JEST JESZCZE DOBRY. Żadnych
 *   porad o terminach przydatności, o zapachu, o pleśni,
 *   o „obkrojeniu zepsutego kawałka". ODMOWA STOI W TEKŚCIE
 *   WYRAŹNIE — to jest przy tym temacie największe ryzyko.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH LICZB o skali marnowania żywności — nie
 *   potwierdziłam żadnych i nie będę cytować z pamięci.
 * — ŻADNEGO MORALIZOWANIA. Nie robię z klientek osób winnych.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH CEN BILETÓW ani godzin otwarcia baszty.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — TU JEST NAJWAŻNIEJSZE.
 * „Resztki. Co zrobić z tym, co zostało po obiedzie" (inne
 * miasto) dotyczy jedzenia JUŻ UGOTOWANEGO. „Resztki. Miasto
 * latania na tym, co darmowe" dotyczy czegoś innego.
 * „Czerstwy chleb" (Bodzentyn) dotyczy jednego produktu.
 * „Spiżarnia" (Brusy) dotyczy sytuacji, gdy czegoś NIE MA
 * w domu. Tutaj chodzi o ODWROTNOŚĆ spiżarni: o to, co
 * kupiliśmy, co JEST, i co wyrzucimy, zanim ugotujemy.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że w Rawie stoi zamek.
 * — NIE PODAJĘ nadawcy praw miejskich ani roku pierwszej
 *   wzmianki.
 * — NIE PODAJĘ roku umieszczenia skarbu na zamku.
 * — NIE UŻYWAM „skarbu rawskiego" jako metafory bogactwa.
 * — NIE ŻARTUJĘ ze skarbu rawskiego kosztem mieszkańców —
 *   podaję to jako neutralną ciekawostkę językową.
 * — NIE PODAJĘ nazwy największego pracodawcy — nie ustalono
 *   zatrudnienia w żadnym zakładzie.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla Rawy nie ma żadnego.
 * — NIE PODAJĘ danych o zalewach Tatar i Dolna poza samą
 *   nazwą — powierzchni ani statusu kąpieliska nie ustalono.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 15 884 mieszkańców (31.12.2024, GUS),
 * — prawa miejskie 1321 r.,
 * — zamek murowany wzniesiony w latach 1355–1370 przez książąt
 *   mazowieckich, prawdopodobnie Siemowita III; pożar 1507 r.;
 *   Prusacy rozebrali większość murów w latach 1795–1806;
 *   dziś ruiny i odbudowana ośmioboczna baszta z ekspozycją,
 * — Rawa była stolicą księstwa rawskiego do 1462 r.,
 * — na zamku przechowywano skarb rawski — kasę na wojsko
 *   kwarciane, zasilaną kwartą dochodów z dóbr królewskich;
 *   w praktyce wpływała jedna piąta, a starostowie zalegali,
 * — Muzeum Ziemi Rawskiej działa od 1966 r.,
 * — zbiorniki wodne Tatar i Dolna; przez miasto płynie Rawka,
 * — inwestycje 2025: bieżnia i przebudowa stadionu, place
 *   zabaw, żłobek miejski.
 */
export const RAWA_MAZOWIECKA: CityContent = {
  slug: "rawa-mazowiecka",
  h1: "Thermomix Rawa Mazowiecka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rawa Mazowiecka (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Rawie Mazowieckiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rawa Mazowiecka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rawie Mazowieckiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rawy Mazowieckiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicy.",

  highlights: highlightyStandardowe("Rawa Mazowiecka i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najwięcej wyrzucamy przed obiadem, nie po nim.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rawie Mazowieckiej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "marnowanie",
      heading: "Skarb, w którym nigdy nie było tego, co miało być — czyli o wyrzucaniu jedzenia",
      paragraphs: [
        "Na rawskim zamku, z którego zostały dziś ruiny i odbudowana ośmioboczna baszta, przechowywano przez dwa stulecia skarb rawski. Warto wiedzieć, czym on naprawdę był, bo nazwa myli: to nie był skarbiec z kosztownościami, tylko osobna kasa państwowa na utrzymanie stałego wojska. Sejm w latach sześćdziesiątych szesnastego wieku uchwalił, że idzie na nią ćwierć dochodów z dóbr królewskich. W praktyce wpływała jedna piąta, a starostowie i tak zalegali z wpłatami. Skończyło się tak, że „skarb rawski” wszedł do polszczyzny jako określenie kasy pustej — takiej, w której nigdy nie ma tego, co miało być.",
        "I dokładnie tak wygląda większość lodówek, moja też.",
        "Bo o marnowaniu jedzenia myśli się zwykle jako o resztkach po obiedzie. Tymczasem najwięcej wyrzucamy zanim cokolwiek ugotujemy: pęczek natki, który zwiądł w dolnej szufladzie, pół główki kapusty, trzy marchewki, jogurt kupiony w promocji, śmietana otwarta na jeden sos. Rzeczy, które były w domu, kosztowały i nigdy nie trafiły na patelnię.",
        "Powiem wprost: tego problemu urządzenie nie rozwiązuje. Nie przypomni Wam o niczym, nie zajrzy do lodówki i nie zrobi listy zakupów. Jeżeli ktoś sprzedaje sprzęt hasłem „koniec z wyrzucaniem jedzenia”, to sprzedaje wyrzut sumienia, nie rozwiązanie.",
        "Robi jednak jedną rzecz, która ma tu realne znaczenie: skraca drogę między „to się zaraz zepsuje” a „zrobione”. Kiedy zupa krem z końcówek warzyw znaczy „wrzucić i wrócić za chwilę”, a nie „obrać, pokroić, gotować, przelać do blendera, umyć blender”, to ta zupa faktycznie powstaje. Kiedy przejrzałe jabłka to trzy minuty na mus, a nie wieczór z przecierakiem, mus faktycznie powstaje. Resztka twarogu idzie w pastę, ostatnie jajka w naleśniki, śmietana w sos, wczorajszy chleb w bułkę tartą. Próg jest niższy, więc rzeczy na granicy częściej przechodzą na drugą stronę.",
        "Druga rzecz jest zupełnie nietechniczna i powiem ją mimo to: jednorazowy zryw nic nie zmienia. Zmienia dopiero nawyk zaglądania do lodówki przed zakupami, a nie po. To nie ma nic wspólnego ze sprzętem i nie zamierzam udawać, że ma.",
        "I granica, przy której nie ustąpię, bo przy tym temacie jest najważniejsza. Nie ocenię za Was, czy coś nadaje się jeszcze do zjedzenia. Nie doradzę nic o terminach przydatności, o tym, jak coś pachnie, co zrobić z pleśnią ani czy „wystarczy obkroić”. To jest bezpieczeństwo żywności, ryzyko jest realne, a ja sprzedaję urządzenie kuchenne. Zasada, którą sama stosuję, jest jedna i nudna: w razie wątpliwości nie ratuję.",
        "I na koniec: nie zamierzam Was pouczać. Wyrzucanie jedzenia to nie jest wada charakteru, tylko skutek tego, że tydzień wygląda inaczej, niż wyglądał przy zakupach.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rawie Mazowieckiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie zobaczyć, co da się zrobić z końcówkami warzyw z Waszej lodówki — nie sprzątajcie jej przed moim przyjazdem. Ugotujemy z tego zupę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rawie Mazowieckiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rawskiej rodziny",
      paragraphs: [
        "Rawa Mazowiecka liczy blisko szesnaście tysięcy mieszkańców, a prawa miejskie ma od 1321 roku. Zamek murowany zbudowali książęta mazowieccy w latach 1355–1370 i to tu, do 1462 roku, była stolica księstwa rawskiego. Po pożarze z 1507 roku zamek stracił znaczenie, a większość murów rozebrali Prusacy na przełomie osiemnastego i dziewiętnastego wieku — dziś zostały ruiny i odbudowana ośmioboczna baszta z ekspozycją. Miasto ma Muzeum Ziemi Rawskiej działające od 1966 roku, dwa zbiorniki wodne, Tatar i Dolną, i płynącą przez środek Rawkę. W ostatnich latach powstały tu nowa bieżnia, place zabaw i żłobek miejski.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Rawy Mazowieckiej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do centrum, pod zamek, nad Tatar i do zabudowy przy Rawce — a także do wsi gminy wiejskiej Rawa Mazowiecka. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Rawę Mazowiecką też przyjadę",
  nearbyParagraphs: [
    "Biała Rawska, Skierniewice, Nowe Miasto nad Pilicą, Żyrardów, Tomaszów Mazowiecki i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Biała Rawska", "Skierniewice", "Żyrardów", "Tomaszów Mazowiecki", "Koluszki"],

  about: blokOMnie("do Rawy Mazowieckiej", "w Rawie Mazowieckiej i okolicy", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rawy Mazowieckiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy wiejskiej Rawa Mazowiecka — to dwie odrębne gminy o tej samej nazwie, ale przyjeżdżam do obu. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Rawę Mazowiecką, nie o Białą Rawską ani o Rawicz w Wielkopolsce.",
    },
    ...faqWspolne("w Rawie Mazowieckiej"),
    {
      question: "Czy urządzenie pomoże mi mniej wyrzucać?",
      answer:
        "Nie w sensie, w jakim sprzedaje się to w reklamach — nie przypomni o niczym i nie zajrzy do lodówki. Pomaga inaczej: skraca drogę między „to się zaraz zepsuje” a „zrobione”. Zupa z końcówek warzyw, mus z przejrzałych jabłek, pasta z resztki twarogu — próg jest niższy, więc te rzeczy faktycznie powstają.",
    },
    {
      question: "Co zrobić z warzywami, które zaraz się zepsują?",
      answer:
        "Najprościej zupę krem — wrzucić i wrócić za chwilę, bez przelewania do blendera. Ale nie ocenię za Ciebie, czy coś nadaje się jeszcze do zjedzenia, i nie doradzę nic o terminach przydatności, zapachu ani pleśni. To bezpieczeństwo żywności. Zasada, którą sama stosuję: w razie wątpliwości nie ratuję.",
    },
    {
      question: "Co realnie zmienia najwięcej?",
      answer:
        "Nawyk zaglądania do lodówki przed zakupami, a nie po. To nie ma nic wspólnego ze sprzętem i nie będę udawać, że ma. Jednorazowy zryw nie zmienia nic.",
    },
  ],

  geo: { lat: 51.7658, lng: 20.2533 },
};
