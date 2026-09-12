import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * KRYNICA MORSKA — miasto i zarazem cała gmina miejska, powiat
 * nowodworski (pomorskie), 1 159 mieszkańców (31.12.2024, GUS).
 * Brief mówił 1 300 — zawyżone. Gęstość 9,8 os./km².
 * Powierzchnia podawana rozbieżnie (118,6 / 118 / 102,04 km²) —
 * W TEKŚCIE JEJ NIE PODAJĘ.
 *
 * PRAWA MIEJSKIE 2 KWIETNIA 1991 r. — wtedy połączono trzy wsie:
 * KRYNICĘ MORSKĄ, PRZEBRNO i NOWĄ KARCZMĘ (PIASKI) w jedną gminę
 * miejską. NUMERU AKTU NIE PODAJĘ — nie dotarto do publikatora.
 * Nazwa Krynica Morska obowiązuje OD 1958 r.
 *
 * SUPERLATYWY — TO JEST SEDNO OSTROŻNOŚCI PRZY TYM MIEŚCIE:
 * ✔ POTWIERDZONE: NAJMNIEJ ZALUDNIONA GMINA MIEJSKA W POLSCE.
 *   Wszystkie mniejsze polskie miasta (Opatowiec, Wiślica,
 *   Józefów nad Wisłą, Działoszyce, Wyśmierzyce, Suraż, Nowe
 *   Warpno, Kleszczele) są gminami MIEJSKO-WIEJSKIMI.
 * ✘ OBALONE: NIE jest najmniejszym miastem w Polsce. Ma 1 159
 *   mieszkańców; Opatowiec ma ok. 313.
 * ✘ OBALONE: Wielbłądzi Garb NIE jest najwyższą wydmą Europy —
 *   Diuna Pilat we Francji ma 103,6 m. Wersja „najwyższa
 *   ustabilizowana wydma Europy" TEŻ NIE JEST POTWIERDZONA
 *   i jej nie używam. Wysokość samego Garbu podawana jest
 *   rozbieżnie (49,5 albo 56 m) — LICZBY NIE PODAJĘ.
 * ✘ OBALONE: NIE jest najdalej na północ wysuniętym miastem
 *   Polski — Władysławowo i Jastarnia leżą wyraźnie wyżej.
 * ✘ NIE POTWIERDZONE, więc nieużywane: „najmniejsze miasto
 *   województwa pomorskiego", „najdalej na wschód wysunięte
 *   miasto pomorskiego", „największy port jachtowy na Zalewie".
 *
 * PORT JACHTOWY: po rozbudowie zakończonej 10 stycznia 2024 r.
 * ma 80 miejsc postojowych.
 * LATARNIA MORSKA: pierwsza z 1895 r., zniszczona w 1945 r.,
 * ODBUDOWANA I ODDANA DO UŻYTKU W 1951 r.
 * PIASKI (NOWA KARCZMA): ok. 200 mieszkańców, mały port
 * rybacko-jachtowy, włączone do miasta w 1991 r.
 * ZALEW WIŚLANY: 838 km², część polska 328 km², średnia
 * głębokość 2,7 m.
 * 57,6% przedsiębiorców indywidualnych działa w zakwaterowaniu
 * i gastronomii.
 *
 * KĄT: SAŁATKA JARZYNOWA — danie złożone z wielu składników,
 * które muszą pozostać rozpoznawalne, choć tworzą jedną całość.
 * Kąt bierze się wprost z tego, że miasto powstało 2 kwietnia
 * 1991 r. z połączenia trzech osobnych wsi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że sałatka jarzynowa jest daniem, przy którym urządzenie
 *   POMAGA TYLKO NA POCZĄTKU I NA KOŃCU, a środek trzeba zrobić
 *   nożem,
 * — że warzywa gotuje się na parze w Varomie, a nie w wodzie,
 *   i że to jedyna realna przewaga: nie rozgotowują się i nie
 *   robią wodniste,
 * — że urządzenie NIE POKROI ich w równą kostkę — nóż w naczyniu
 *   siecze chaotycznie i z sałatki zrobi się papka; kostkę robi
 *   się ręcznie i nie ma na to rady,
 * — że o majonezie tutaj nie piszę, bo jajka mają w serwisie
 *   własną stronę,
 * — że w każdym domu ta sałatka jest inna i że to jest jej sens,
 * — i ODMOWA: nic o przechowywaniu sałatki i o tym, ile może
 *   stać — to jedno z najczęstszych zatruć przy stole
 *   świątecznym.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU SAŁATKI, o tym ile może stać
 *   na stole ani w lodówce. ODMOWA STOI W TEKŚCIE WYRAŹNIE.
 * — ŻADNYCH PORAD O SUROWYCH JAJKACH I MAJONEZIE DOMOWYM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEJ WZMIANKI o przekopie Mierzei Wiślanej (temat
 *   politycznie sporny) ani o granicy z Rosją.
 * — NIE DOTYKAM cen nieruchomości ani sezonowego bezrobocia
 *   (dostępna liczba jest powiatowa, nie miejska).
 * — ŻADNEJ POJEMNOŚCI W LITRACH z pamięci.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Cebula i czosnek"
 * (Debrzno) dotyczą nierównej kostki jako właściwości noża —
 * tutaj ten sam fakt pojawia się jako KONSEKWENCJA dla jednego
 * konkretnego dania i jest podany krótko, z odesłaniem.
 * „Surówka" i „sałata" mają własne strony. „Jajka" mają własną
 * stronę i dlatego majonezu tu nie omawiam. „Superlatyw, który
 * przestał być prawdą" (inne miasto) dotyczy rekordu utraconego
 * w czasie — tutaj chodzi o rekordy, których NIGDY NIE BYŁO,
 * i sprostowanie zajmuje jeden akapit, nie stanowi kąta.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że to najmniejsze miasto w Polsce.
 * — NIE PISZĘ, że Wielbłądzi Garb to najwyższa wydma Europy,
 *   ani nie podaję jego wysokości.
 * — NIE PODAJĘ powierzchni miasta ani numeru aktu nadającego
 *   prawa miejskie.
 * — NIE PODAJĘ nazwy największego pracodawcy — nie ustalono;
 *   401 z 499 podmiotów to osoby fizyczne.
 * — NIE PODAJĘ liczby łodzi rybackich w Krynicy i Piaskach.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych — dla
 *   tej gminy nie ma żadnego.
 * — districts: nie potwierdzono formalnych jednostek
 *   pomocniczych. Przebrno i Piaski wymieniam jako DAWNE WSIE
 *   włączone w 1991 r., nie jako osiedla. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 1 159 mieszkańców (31.12.2024, GUS); gęstość 9,8 os./km²,
 * — najmniej zaludniona gmina miejska w Polsce,
 * — prawa miejskie 2 kwietnia 1991 r., z połączenia Krynicy
 *   Morskiej, Przebrna i Nowej Karczmy (Piasków); nazwa Krynica
 *   Morska od 1958 r.,
 * — latarnia z 1895 r., odbudowana i oddana do użytku w 1951 r.,
 * — port jachtowy: 80 miejsc po rozbudowie zakończonej
 *   10 stycznia 2024 r.,
 * — Piaski liczą ok. 200 mieszkańców,
 * — Zalew Wiślany ma 838 km², w tym część polska 328 km²,
 *   przy średniej głębokości 2,7 m,
 * — 57,6% przedsiębiorców indywidualnych działa
 *   w zakwaterowaniu i gastronomii.
 */
export const KRYNICA_MORSKA: CityContent = {
  slug: "krynica-morska",
  h1: "Thermomix Krynica Morska – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krynica Morska (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Krynicy Morskiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto z Przebrnem i Piaskami. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krynica Morska — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krynicy Morskiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krynicy Morskiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, z Przebrnem i Piaskami włącznie.",

  highlights: highlightyStandardowe("Krynica Morska, Przebrno i Piaski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Warzywa ugotuje bez wody. Kostki nie pokroi — i nie udaję, że pokroi.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krynicy Morskiej – jak wygląda prezentacja?",
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
      id: "salatka",
      heading: "Trzy wsie, jedno miasto — czyli o sałatce jarzynowej",
      paragraphs: [
        "Krynica Morska powstała 2 kwietnia 1991 roku z połączenia trzech osobnych wsi: samej Krynicy Morskiej, Przebrna i Nowej Karczmy, którą wszyscy nazywają Piaskami. Trzy miejscowości, które zachowały swoją odrębność, a od trzydziestu pięciu lat są jednym miastem. Dodam od razu dwa sprostowania, bo o tym miejscu powtarza się w internecie nieprawdy: to nie jest najmniejsze miasto w Polsce — jest ich osiem mniejszych, a najmniejsze ma trzysta kilkanaście osób. I Wielbłądzi Garb nie jest najwyższą wydmą Europy; francuska Diuna Pilat jest od niego ponad dwa razy wyższa. Prawdziwy rekord Krynicy brzmi inaczej i jest do obrony: to najmniej zaludniona gmina miejska w Polsce.",
        "A skoro trzy rzeczy, które tworzą jedną całość, nie tracąc swojej odrębności — napiszę o sałatce jarzynowej.",
        "To danie ma w kuchni szczególną właściwość: składniki muszą pozostać rozpoznawalne. Marchewka ma być marchewką, ziemniak ziemniakiem, ogórek ogórkiem. W chwili, gdy przestają być osobne, przestaje to być sałatka i staje się pastą. I dokładnie na tym polega problem z tym urządzeniem.",
        "Powiem więc od razu rzecz najważniejszą: kostki Wam nie pokroi. Nóż w naczyniu obraca się szybko i uderza chaotycznie — z ugotowanych warzyw zrobi w kilka sekund papkę. Kostkę do sałatki kroi się ręcznie, nożem, na desce, i nie ma na to żadnej rady ani nakładki. To jest ta sama właściwość, o której pisałam przy cebuli: tam nierówność nie przeszkadza, bo cebula i tak się rozpada. Tutaj przeszkadza całkowicie.",
        "Jest natomiast jedna rzecz, którą urządzenie robi przy tej sałatce naprawdę dobrze, i jest to rzecz konkretna: gotuje warzywa na parze, a nie w wodzie. Marchew, pietruszka, seler i ziemniaki idą do Varomy w całości i wychodzą ugotowane, ale nie nasiąknięte. Kto kiedykolwiek robił sałatkę z warzyw gotowanych w garnku, wie, o czym mówię — rozgotowana, wodnista marchewka rozpada się przy krojeniu i psuje całość. Tutaj ten problem po prostu nie występuje, a przy okazji wszystko gotuje się naraz, w jednym urządzeniu, na kilku poziomach.",
        "O majonezie tu nie napiszę i to jest świadome: jajka jako składnik mają w tym serwisie własną stronę i tam należy ten temat. Powiem tylko tyle, że domowego majonezu robi się na surowych jajkach i że jest to sprawa, w której nie doradzam.",
        "I granica, przy której nie ustąpię — a przy tym akurat daniu jest ona poważniejsza niż przy większości. Nie doradzę Wam, jak długo sałatka jarzynowa może stać na stole ani ile dni wytrzyma w lodówce. To jest jedno z dań, przy których najczęściej dochodzi do zatruć przy świątecznym stole, ryzyko jest realne i należy do bezpieczeństwa żywności, a nie do obsługi sprzętu kuchennego. Po tę wiedzę trzeba pójść do właściwego źródła.",
        "Na koniec rzecz, którą lubię: w każdym domu ta sałatka jest inna. Jedni dają jabłko, inni nigdy. Jedni groszek, inni fasolę. Jedni jajko, inni same warzywa. I nie ma tu wersji poprawnej — tak samo jak trzy wsie, które od trzydziestu pięciu lat są jednym miastem, a każda wie o sobie swoje.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krynicy Morskiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przyjeżdżam do całego miasta, także do Przebrna i do Piasków na samym końcu mierzei. Odległość nie zmienia ceny ani warunków.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krynicy Morskiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla krynickiej rodziny",
      paragraphs: [
        "Krynica Morska liczy niecałe tysiąc dwieście osób i jest najmniej zaludnioną gminą miejską w Polsce — przy niecałych dziesięciu mieszkańcach na kilometr kwadratowy. Nazwę nosi od 1958 roku, a prawa miejskie otrzymała 2 kwietnia 1991, gdy połączono trzy wsie: Krynicę Morską, Przebrno i Nową Karczmę, czyli Piaski, w których mieszka dziś około dwustu osób. Tutejsza latarnia morska, pierwotnie z 1895 roku i zniszczona pod koniec wojny, została odbudowana i oddana do użytku w 1951. Port jachtowy po rozbudowie zakończonej w styczniu 2024 roku ma osiemdziesiąt miejsc postojowych. Miasto leży między Bałtykiem a Zalewem Wiślanym — akwenem o powierzchni ponad ośmiuset kilometrów kwadratowych i średniej głębokości niespełna trzech metrów.",
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

  districtsHeading: "Do których części Krynicy Morskiej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, w tym do Przebrna i do Piasków — obie te dawne wsie zostały włączone do Krynicy w 1991 roku. Dojazd jest wszędzie bezpłatny, także na sam koniec mierzei.",
    "Przy umawianiu wystarczy podać ulicę albo nazwę części miasta.",
  ],
  districts: [],

  nearbyHeading: "Poza Krynicę Morską też przyjadę",
  nearbyParagraphs: [
    "Sztutowo, Kąty Rybackie, Stegna, Nowy Dwór Gdański, Malbork i Elbląg są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sztutowo", "Nowy Dwór Gdański", "Elbląg", "Malbork", "Nowy Staw"],

  about: blokOMnie("do Krynicy Morskiej", "w Krynicy Morskiej, Przebrnie i Piaskach", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krynicy Morskiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta, w tym do Przebrna i do Piasków na końcu mierzei. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Krynicę Morską nad Zalewem Wiślanym, a nie o Krynicę-Zdrój w Małopolsce.",
    },
    ...faqWspolne("w Krynicy Morskiej"),
    {
      question: "Czy urządzenie pokroi warzywa w kostkę do sałatki?",
      answer:
        "Nie. Nóż obraca się szybko i uderza chaotycznie — z ugotowanych warzyw zrobi w kilka sekund papkę. Kostkę do sałatki kroi się ręcznie, nożem, na desce, i nie ma na to nakładki ani sposobu.",
    },
    {
      question: "To w czym pomaga przy sałatce jarzynowej?",
      answer:
        "Gotuje warzywa na parze, a nie w wodzie. Marchew, pietruszka, seler i ziemniaki idą do Varomy w całości i wychodzą ugotowane, ale nie nasiąknięte — więc nie rozpadają się przy krojeniu i nie robią sałatki wodnistą. Wszystko naraz, w jednym urządzeniu, na kilku poziomach.",
    },
    {
      question: "Ile sałatka może stać w lodówce?",
      answer:
        "Tego nie doradzę. To jedno z dań, przy których najczęściej dochodzi do zatruć przy świątecznym stole — ryzyko jest realne i należy do bezpieczeństwa żywności, a nie do obsługi sprzętu kuchennego.",
    },
  ],

  geo: { lat: 54.38, lng: 19.4441 },
};
