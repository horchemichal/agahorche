import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * PLESZEW — powiat pleszewski (siedziba),
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 16 579 mieszkańców (GUS 31.12.2024), 13,4 km²,
 *   gęstość 1 239,1 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia powierzchni do 13,38].
 *   PODAJĘ.
 * CAŁA GMINA: 28 911 osób, 180,3 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — nie domyka się
 *   (160,35 z dzielenia wobec 161 w źródle).
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI W GMINIE: 33.
 *   ⚠ LGD podaje 28 wsi sołeckich — inna kategoria.
 *   ⚠⚠⚠ RÓŻNICY 33/28 NIE UŻYWAM — figura „spis, który
 *   się nie zgadza" zajęta (Międzybórz, Węgliniec).
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 51,883 / 17,783. Rzeka Ner, Wysoczyzna Kaliska.
 *
 * ⚠⚠ ODMIANA:
 *   D. do PLESZEWA · Ms. w PLESZEWIE · N. Pleszewem.
 *   ⚠⚠⚠ BŁĄD: „do Pleszewu". Typ -ew odmienia się jak
 *   -ów. SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: PLESZEWSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠⚠ KOLIZJA WEWNĘTRZNA FALI: wieś GRODZISKO leży
 *   w gminie Pleszew, a GRODZISK WIELKOPOLSKI to
 *   osobne miasto opisane w TEJ SAMEJ FALI.
 *   ROZGRANICZAM W SEKCJI DZIELNIC — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 2 października 1283 r.,
 *     dyplom Przemysła II — „civitas Plessow".
 *   — PRAWA MIEJSKIE: ⚠⚠⚠ [SP]. W 1283 r. Pleszew
 *     występuje JUŻ JAKO MIASTO; osobnej daty nadania
 *     źródła nie podają. PISZĘ TO WPROST.
 *     ⚠⚠ FIGURY „używane wcześniej, zapisane później"
 *     NIE ROBIĘ KĄTEM — zajęta (Zawidów).
 *   — 1833 r. — przejście z miasta prywatnego na
 *     miejskie.
 *   — RATUSZ: 1835 r., klasycystyczny,
 *     trzykondygnacyjny; aneks wschodni 1906–1912.
 *     ⚠⚠⚠ DŁUGIEGO DOKAŃCZANIA NIE ROBIĘ KĄTEM —
 *     ta sama figura występuje w Grodzisku Wlkp.
 *     (ta sama fala). PODAJĘ JAKO GOŁY FAKT.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — CZTERY KILOMETRY:
 *   — 1875 r. — połączenie normalnotorowe
 *     Poznań–Jarocin–Pleszew–Kluczbork,
 *   — ⚠⚠⚠ ALE DWORZEC STANĄŁ W KOWALEWIE, CZTERY
 *     KILOMETRY OD MIASTA,
 *   — ok. 1900–1901 r. [SP co do roku] miasto dostało
 *     własną kolej wąskotorową do Kowalewa; sieć
 *     wąskotorowa liczyła prawie 50 km.
 *   ⚠⚠⚠ ARYTMETYKA: 4 km odległości wywołały osobny,
 *     prawie 50-kilometrowy system. STOSUNEK 12,5 : 1.
 *   ⚠⚠⚠ KĄT JEST O DYSTANSIE I TARCIU, NIE
 *     O KOLEJNICTWIE. ANI SŁOWA O INFRASTRUKTURZE,
 *     WĘŹLE, TABORZE CZY TRANSPORCIE — kąty kolejowe
 *     zajęte (Pieńsk, Węgliniec).
 *   ⚠⚠ ROKU URUCHOMIENIA NIE PODAJĘ JAKO PEWNEGO
 *     (1900 albo styczeń 1901).
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ⚠⚠ REKORDÓW GUINNESSA NIE UŻYWAM — jedno źródło,
 *   niepotwierdzone.
 * — ⚠⚠ SPISU RZEMIEŚLNIKÓW Z 1580 R. NIE UŻYWAM —
 *   średnia na cech koliduje z Obornikami (poprzednia
 *   fala).
 * — ⚠ ODLEGŁOŚCI: wiarygodne tylko Poznań ok. 100 km
 *   i Kalisz ok. 30 km [SP]. ⚠⚠ NIE PODAJĘ ICH —
 *   jedyne kilometry w tekście to CZTERY KILOMETRY
 *   rdzenia kąta, żeby liczba nie zgubiła się w innych.
 *
 * KĄT: MAŁY DYSTANS, DUŻY KOSZT
 * — o tym, że kilka kroków za daleko kosztuje więcej
 * niż cokolwiek innego w kuchni. Kąt z Pleszewa: dworzec
 * cztery kilometry od miasta i osobna kolej, którą
 * trzeba było przez to zbudować.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kolej dotarła tu w 1875 r., ale dworzec stanął
 *   cztery kilometry od miasta,
 * — ŻE ĆWIERĆ WIEKU PÓŹNIEJ TRZEBA BYŁO ZBUDOWAĆ
 *   OSOBNE POŁĄCZENIE, ŻEBY TE CZTERY KILOMETRY
 *   POKONAĆ. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE MAŁA ODLEGŁOŚĆ NIE KOSZTUJE RAZ — kosztuje
 *   przy każdym użyciu, i dlatego sumuje się do czegoś
 *   ogromnego,
 * — ⚠⚠ ŻE W KUCHNI TO SAMO: rzecz schowana o dwa kroki
 *   za daleko przestaje być używana, a zamiast niej
 *   pojawia się obejście — druga taka sama rzecz,
 *   zamówione jedzenie, rezygnacja z dania,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: znajdź w kuchni trzy rzeczy,
 *   po które trzeba się schylić, wspiąć albo przejść
 *   do innego pomieszczenia. Przenieś jedną,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: nie wszystko da się
 *   mieć pod ręką i blat ma skończoną długość. Wtedy
 *   trzeba wybrać, co zasługuje na miejsce — a nie
 *   udawać, że dystansu nie ma,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie schowane do
 *   szafki przestaje być używane. MÓWIĘ TO WPROST
 *   I BEZ OWIJANIA — jeśli nie ma dla niego miejsca
 *   na blacie, to jest realny argument przeciw zakupowi.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO NAJPIERW DROGA, POTEM RUCH — kąt zajęty
 *   (Pieńsk). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ GO
 *   ROZGRANICZYĆ JAWNIE: tam chodziło o kolejność
 *   powstawania; tu droga jest i ruch jest, a problemem
 *   jest sam dystans — cztery kilometry, które trzeba
 *   pokonywać za każdym razem.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO TO, CO SIĘ ROZROSŁO, POKAZUJE, KTÓRĘDY
 *   CHODZONO — kąt zajęty (Radków).
 * — ⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka).
 * — ⚠⚠ ZERO DROŻSZE TAM, GDZIE KRAWĘDŹ — kąt zajęty
 *   (Świerzawa).
 * — ⚠⚠ ZERO PRZERWY ROSNĄ — kąt zajęty (Węgliniec).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PODAJĘ roku uruchomienia wąskotorówki jako
 *   pewnego.
 * — NIE PODAJĘ rekordów Guinnessa.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości
 *   do innych miast.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Pleszew jest siedzibą powiatu pleszewskiego; miasto
 *   liczy 16 579 mieszkańców (GUS, 31.12.2024) na
 *   13,4 km², czyli 1 239,1 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 28 911
 *   osób na 180,3 km² i obejmuje 33 miejscowości,
 * — pierwsza wzmianka to dyplom Przemysła II
 *   z 2 października 1283 r., w którym Pleszew
 *   występuje już jako miasto; w 1833 r. przestał być
 *   miastem prywatnym,
 * — ratusz pochodzi z 1835 r., a jego wschodni aneks
 *   z lat 1906–1912,
 * — połączenie kolejowe Poznań–Jarocin–Pleszew–Kluczbork
 *   uruchomiono w 1875 r., ale dworzec stanął
 *   w Kowalewie, cztery kilometry od miasta; około
 *   1900 r. miasto uzyskało własne połączenie
 *   wąskotorowe, a cała sieć wąskotorowa liczyła
 *   prawie 50 km.
 */
export const PLESZEW: CityContent = {
  slug: "pleszew",
  h1: "Thermomix Pleszew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pleszew — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Pleszewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pleszew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pleszewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pleszewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Pleszew"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Cztery kilometry, które kosztowały osobną kolej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pleszewie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "maly-dystans",
      heading: "Mały dystans, duży koszt",
      paragraphs: [
        "Pleszew dostał połączenie kolejowe w 1875 roku. Z jednym drobiazgiem: dworzec stanął w Kowalewie, cztery kilometry od miasta.",
        "Ćwierć wieku później trzeba było zbudować osobne połączenie, żeby te cztery kilometry pokonać.",
        "Cztery kilometry. Nie czterdzieści. I wystarczyło, żeby uruchomić całe przedsięwzięcie, które bez tych czterech kilometrów nigdy by nie powstało.",
        "Mała odległość ma tę właściwość, że nie kosztuje raz. Kosztuje przy każdym pojedynczym użyciu, a użyć są tysiące — i dlatego sumuje się do czegoś, czego nikt na początku nie policzył.",
        "W kuchni to jest najczęstszy i najbardziej niewidoczny koszt, jaki znam.",
        "Rzecz schowana o dwa kroki za daleko po prostu przestaje być używana. Blender w spiżarni. Wielki garnek na najwyższej półce. Przyprawy w szafce, którą trzeba otworzyć drugą ręką, bo pierwsza jest zajęta. Nikt świadomie nie rezygnuje — po prostu za każdym razem jest ciut trudniej, aż przestaje się sięgać.",
        "I wtedy pojawia się obejście, dokładnie jak ta osobna kolej. Kupuje się drugą taką samą rzecz, żeby stała bliżej. Zamawia się jedzenie. Wykreśla danie z repertuaru, tłumacząc sobie, że i tak nikt go nie lubił.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej, że najpierw powstaje droga, a potem ruch. Tam chodziło o kolejność. Tu droga jest i ruch jest — problemem jest sam dystans, który trzeba pokonywać za każdym razem od nowa.",
        "Ruch jest jeden i można go zrobić dziś. Znajdź w kuchni trzy rzeczy, po które trzeba się schylić, wspiąć albo przejść do innego pomieszczenia. Przenieś jedną — tę, której chciałabyś używać najczęściej.",
        "Uczciwie o drugiej stronie: nie wszystko da się mieć pod ręką i blat ma skończoną długość. Trzeba wybrać, co zasługuje na miejsce, i pogodzić się z tym, że reszta pojedzie na daleką półkę. To jest uczciwy wybór. Nieuczciwe jest tylko udawanie, że dystansu nie ma.",
        "I uczciwie o sprzęcie. Thermomix schowany do szafki przestaje być używany — widziałam to wiele razy i mówię o tym na każdej prezentacji. Jeśli w Waszej kuchni nie ma dla niego stałego miejsca na blacie, to jest prawdziwy argument przeciw zakupowi, a nie drobiazg do rozwiązania później.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pleszewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile wolnego blatu macie w kuchni. To pytanie pada najrzadziej, a rozstrzyga najwięcej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pleszewie"),
    sekcjaRaty("w Pleszewie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Pleszewa",
      paragraphs: [
        "Pleszew jest siedzibą powiatu pleszewskiego i leży nad Nerem, na Wysoczyźnie Kaliskiej. Samo miasto liczy 16 579 mieszkańców (GUS, 31.12.2024) na 13,4 kilometra kwadratowego, czyli tysiąc dwieście trzydzieści dziewięć osób na kilometr, a cała gmina miejsko-wiejska 28 911 osób na 180,3 kilometra i obejmuje trzydzieści trzy miejscowości. Gęstości dla całej gminy nie podaję, bo liczby ze źródeł się nie domykają. Pierwsza wzmianka to dyplom Przemysła II z 2 października 1283 roku, w którym Pleszew występuje już jako miasto — osobnej daty nadania praw źródła nie podają. W 1833 roku przestał być miastem prywatnym, ratusz postawiono w 1835, a jego wschodni aneks dobudowano w latach 1906–1912.",
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

  districtsHeading: "Do których części Pleszewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu trzech miejscowości w gminie, łącznie z Kowalewem. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać nazwę miejscowości. Jedna z wsi w gminie nazywa się Grodzisko — to nie to samo co Grodzisk Wielkopolski, osobne miasto po drugiej stronie województwa.",
  ],
  districts: [],

  nearbyHeading: "Poza Pleszew też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Jarocina, Kalisza, Ostrowa Wielkopolskiego, Krotoszyna i Wrześni — wszędzie bezpłatnie, tak samo jak w samym Pleszewie.",
  ],
  nearbyTowns: ["Jarocin", "Kalisz", "Ostrów Wielkopolski", "Krotoszyn", "Września"],

  about: blokOMnie("do Pleszewa", "w Pleszewie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pleszewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu trzech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: mówi się „do Pleszewa”, a nie „do Pleszewu”. I warto podać pełną nazwę wsi — Grodzisko w gminie Pleszew to nie Grodzisk Wielkopolski.",
    },
    ...faqWspolne("w Pleszewie"),
    {
      question: "Mam sporo sprzętu, którego nie używam. Czy to kwestia tego, że jest niepotrzebny?",
      answer:
        "Częściej chodzi o odległość niż o przydatność. Pleszew dostał kolej w 1875 roku, ale dworzec stanął cztery kilometry od miasta — i ćwierć wieku później trzeba było zbudować osobne połączenie, żeby te cztery kilometry pokonać. Mała odległość nie kosztuje raz, tylko przy każdym użyciu. W kuchni rzecz schowana o dwa kroki za daleko po prostu przestaje być używana. Zanim coś wyrzucisz, spróbuj najpierw przenieść to bliżej.",
    },
    {
      question: "Nie mam miejsca na blacie. Czy mogę trzymać Thermomix w szafce?",
      answer:
        "Możesz, ale powiem uczciwie: urządzenie schowane do szafki w większości domów przestaje być używane po kilku tygodniach. Widziałam to wiele razy. Jeśli w Waszej kuchni naprawdę nie ma dla niego stałego miejsca, traktuję to jako poważny argument przeciw zakupowi i mówię o tym na spotkaniu. Czasem da się zwolnić kawałek blatu, przenosząc gdzie indziej coś, czego używacie raz w miesiącu — i wtedy rozmawiamy dalej.",
    },
  ],

  geo: { lat: 51.883, lng: 17.783 },
};
