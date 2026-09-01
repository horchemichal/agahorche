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
 * STARY SĄCZ — GMINA MIEJSKO-WIEJSKA w powiecie nowosądeckim.
 * 23 498 mieszkańców (31.12.2024), 100,9 km². Miasto ok. 9 tys.
 *
 * OŚ STRONY: POMNIK HISTORII I BŁONIA. Nie „stare miasto z prawami
 * miejskimi” (ta oś należy do Krościenka — `kroscienko.ts`), tylko
 * status prawny nadany rozporządzeniem Prezydenta RP oraz kanonizacja
 * z 1999 r. Twarde, weryfikowalne, unikalne.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 10 GRUDNIA 2018 R. — rozporządzenie Prezydenta RP uznające
 *   „Stary Sącz — zespół staromiejski wraz z klasztorem Sióstr
 *   Klarysek” za POMNIK HISTORII (Dz.U. 2018 poz. 2415),
 * — 1257 — Kinga otrzymuje ziemię sądecką od Bolesława Wstydliwego;
 *   1280 — fundacja klasztoru klarysek,
 * — PRAWA MIEJSKIE od Kazimierza Wielkiego. ⚠️ ŹRÓDŁA PODAJĄ 1357
 *   ALBO 1358 — w tekście napisane wprost, że rok jest sporny,
 * — 16 CZERWCA 1999 R. — kanonizacja bł. Kingi przez Jana Pawła II
 *   na Błoniach starosądeckich. ⚠️ FREKWENCJA: źródła podają
 *   500 tys. albo 600 tys. — PISAĆ „ok. pół miliona”,
 * — OŁTARZ PAPIESKI: drewniany, proj. Zenon Remi z Zakopanego;
 *   baldachim wspierały pierwotnie DWIE KOLUMNY Z BLOKÓW SOLI
 *   (aluzja do legendy o odkryciu soli przez Kingę) — dziś są
 *   w kopalni w Bochni, zastąpione drewnianymi,
 * — ⚠️ RYNEK NIE MA NAWIERZCHNI KLINKIEROWEJ. To bruk z NATURALNYCH
 *   GRANITOWYCH OTOCZAKÓW naniesionych Dunajcem z Tatr; układany
 *   od 1861 r. przez JEDENAŚCIE LAT. Powierzchnia ok. 0,96 ha,
 * — 1795 — wielki pożar, po nim odbudowa rynku,
 * — STAROSĄDECKI FESTIWAL MUZYKI DAWNEJ — od 1975 r., najstarszy
 *   polski festiwal poświęcony wyłącznie muzyce dawnej. Geneza:
 *   w 1970 r. muzykolog MIROSŁAW PERZ odkrył w bibliotece klarysek
 *   średniowieczne czterogłosowe conductus „Omnia Beneficia”;
 *   od 45. edycji nazwa Omnia Beneficia Festival,
 * — 15 SOŁECTW: Barcice, Barcice Dolne, Gaboń, Gaboń-Praczka,
 *   Gołkowice Dolne, Gołkowice Górne, Łazy Biegonickie, Moszczenica
 *   Niżna, Moszczenica Wyżna, Mostki, Myślec, Popowice, Przysietnica,
 *   Skrudzina, Wola Krogulecka,
 * — REGON: 2 537 podmiotów (31.12.2024), w tym 2 122 osoby fizyczne,
 * — STREFA AKTYWNOŚCI GOSPODARCZEJ przy ul. Wielki Wygon; firmy
 *   wymienione przez urząd: Kalmar, Batim, Car Special, Ekran,
 *   Expert Glass, Kolbon Oak,
 * — LACHOWSKA MICHA — impreza kulinarna na Rynku, gospodynie
 *   z każdego sołectwa plus Stowarzyszenie Gospodyń Miejskich,
 * — STAROSĄDECKI JARMARK RZEMIOSŁA — koniec wakacji,
 * — JABŁKA ŁĄCKIE ChOG OBEJMUJĄ TAKŻE GMINĘ STARY SĄCZ (obszar:
 *   Łącko, Podegrodzie, Stary Sącz, Łukowica),
 * — KOLEJ: linia 96 Tarnów–Leluchów; stacje w gminie — Mostki,
 *   Stary Sącz, Barcice, Przysietnica.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — BEZROBOCIA I WYNAGRODZEŃ. Serwisy podają IDENTYCZNE liczby dla
 *   wszystkich gmin powiatu (6 830,61 zł, 7,8%) — to dane POWIATOWE.
 *   NIE CYTOWAĆ,
 * — WŁASNYCH WPISÓW GMINY NA LIŚCIE PRODUKTÓW TRADYCYJNYCH.
 *   Nie znaleziono żadnego,
 * — LICZBY MIESZKAŃCÓW 33 340. To błąd angielskiej Wikipedii.
 *
 * PUŁAPKI:
 * — NIE MYLIĆ Z NOWYM SĄCZEM (`nowy-sacz.ts`) — to osobne miasto
 *   na prawach powiatu, ok. 10 km dalej,
 * — RYNEK JEST BRUKOWANY OTOCZAKAMI, NIE KLINKIEREM.
 */

export const STARY_SACZ: CityContent = {
  slug: "stary-sacz",
  h1: "Thermomix Stary Sącz – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Stary Sącz — prezentacja i cena",
  seoDescription:
    "Thermomix w Starym Sączu: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do miasta i wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Stary Sącz — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Starym Sączu. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Starego Sącza i wszystkich piętnastu sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Starym Sączu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
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
      heading: "Miasto, które państwo objęło najwyższą ochroną",
      paragraphs: [
        "Dziesiątego grudnia dwa tysiące osiemnastego roku Prezydent Rzeczypospolitej wydał rozporządzenie uznające starosądecki zespół staromiejski wraz z klasztorem sióstr klarysek za Pomnik Historii. To najwyższa forma ochrony zabytków w Polsce i ma ją zaledwie kilkadziesiąt miejsc w całym kraju.",
        "Powód jest widoczny gołym okiem. Rynek nie ma asfaltu ani kostki — ma bruk z naturalnych granitowych otoczaków, tych samych, które Dunajec przyniósł tu z Tatr. Układano go od tysiąc osiemset sześćdziesiątego pierwszego roku i zajęło to jedenaście lat. Wcześniej, w tysiąc siedemset dziewięćdziesiątym piątym, miasto strawił wielki pożar i dzisiejsza zabudowa rynku jest właśnie odbudową po nim.",
        "Klasztor stoi tu nieprzerwanie od tysiąc dwieście osiemdziesiątego roku, kiedy ufundowała go Kinga — ta sama, która trzy lata wcześniej dostała ziemię sądecką od Bolesława Wstydliwego. Prawa miejskie nadał Stary Sącz Kazimierz Wielki; źródła podają rok tysiąc trzysta pięćdziesiąty siódmy albo ósmy i nie umiem tego rozstrzygnąć, więc podaję obie wersje.",
        "Drugie wielkie wydarzenie ma konkretną datę: szesnasty czerwca tysiąc dziewięćset dziewięćdziesiątego dziewiątego roku. Jan Paweł II kanonizował wtedy Kingę na Błoniach starosądeckich, a przyjechało — zależnie od źródła — pół miliona albo sześćset tysięcy ludzi. Piszę „około pół miliona”, bo tyle da się uczciwie powiedzieć.",
        "Ołtarz z tamtego dnia stoi do dziś. Zaprojektował go Zenon Remi z Zakopanego, a baldachim wspierały pierwotnie dwie kolumny wykute z brył soli — aluzja do legendy o Kindze i odkryciu soli w Polsce. Kolumny są dziś w kopalni w Bochni, a na ich miejscu stoją drewniane.",
        "Jest tu jeszcze jedna rzecz, o której mało kto wie, a która ładnie domyka tę historię. W tysiąc dziewięćset siedemdziesiątym roku muzykolog Mirosław Perz znalazł w klasztornej bibliotece średniowieczne czterogłosowe conductus „Omnia Beneficia”. Pięć lat później powstał z tego Starosądecki Festiwal Muzyki Dawnej — najstarszy w Polsce festiwal poświęcony wyłącznie tej muzyce, dziś noszący nazwę tamtego rękopisu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Stary Sącz?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o samo miasto, czy o jedno z sołectw. Gmina ma ich piętnaście — od Barcic i Przysietnicy po Gaboń i Skrudzinę — a to zmienia tylko planowanie trasy, nie cenę.",
        "Jeśli pracujesz w Nowym Sączu, wspomnij o tym od razu. Wielu tutejszych mieszkańców tam dojeżdża i wtedy najprościej umówić się na wieczór albo weekend.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Starym Sączu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której prawie każdy prowadzi coś swojego",
      paragraphs: [
        "W gminie zarejestrowanych jest ponad dwa i pół tysiąca podmiotów gospodarczych, z czego przeszło dwa tysiące sto to działalności osób fizycznych. Do tego dochodzi strefa aktywności gospodarczej przy Wielkim Wygonie, gdzie działa kilka nazwanych z imienia firm produkcyjnych i usługowych.",
        "Rolnictwo jest tu za to bardzo rozdrobnione: prawie połowa gospodarstw ma od dwóch do pięciu hektarów, a ponad jedna trzecia mniej niż dwa. To znaczy, że w wielu domach ziemia jest dodatkiem do pracy, a nie zawodem — i że kuchnia obsługuje ludzi wracających o różnych porach.",
        "Najbardziej praktyczna rzecz jest tu prosta. Danie jednogarnkowe wstawia się rano i wychodzi z domu. Gotuje się bez pilnowania, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie przypala się i nikt nie musi wracać, żeby zamieszać.",
        "Druga to gotowanie z zapasem. Podwójna porcja zupy, sos na kilka dni, pasty do kanapek, ciasto — robione seriami w jednym naczyniu, w weekend albo w spokojne przedpołudnie. W tygodniu tylko się to odgrzewa.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek albo ktokolwiek, kto jest w domu wcześniej. W rodzinie, w której oboje dorośli dojeżdżają do pracy, to bywa realnym odciążeniem.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Stary Sącz i gotowanie — Lachowska Micha i jabłka z ChOG",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie. Nie będę więc dopisywać jej dorobku, którego nie umiem wskazać źródłem.",
      "Za to jest coś lepszego niż wpis w rejestrze — działająca impreza, na której gotują same mieszkanki. Lachowska Micha odbywa się na Rynku, a stają do niej gospodynie z każdego sołectwa oraz Stowarzyszenie Gospodyń Miejskich. To nie pokaz dla turystów, tylko konkurs, w którym startuje cała gmina. Do tego dochodzi Starosądecki Jarmark Rzemiosła na koniec wakacji.",
      "Jest też jeden fakt formalny, o którym warto wiedzieć, bo bywa przypisywany wyłącznie sąsiadom. Unijne chronione oznaczenie geograficzne dla jabłek łąckich obejmuje cztery gminy i Stary Sącz jest jedną z nich. Jabłka stąd mają więc do tej nazwy takie samo prawo jak te z Łącka.",
      "Kuchnia jest tu lachowska, czyli sądecka nizinna, a nie góralska: ziemniaki, kapusta, fasola, zupy na kościach, ciasto drożdżowe, przetwory z tego, co rośnie w sadzie i w ogrodzie. Rzecz robiona sezonami, w większych partiach, na zapas.",
      "I dokładnie w takim rytmie urządzenie sprawdza się najlepiej. Nie przy jednym obiedzie, tylko przy serii: dwie zupy, sos, ciasto na pierogi, mus jabłkowy i pasta kanapkowa zrobione jednego popołudnia, w jednym naczyniu. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część, która jest tylko czasem.",
    ],
  },

  districtsHeading: "Gdzie w gminie Stary Sącz dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich piętnastu sołectw, bez żadnej dopłaty za odległość. Gmina liczy około dwudziestu trzech i pół tysiąca mieszkańców na stu kilometrach kwadratowych, z czego samo miasto ma ich mniej więcej dziewięć tysięcy.",
    "Sołectwa to: Barcice, Barcice Dolne, Gaboń, Gaboń-Praczka, Gołkowice Dolne, Gołkowice Górne, Łazy Biegonickie, Moszczenica Niżna, Moszczenica Wyżna, Mostki, Myślec, Popowice, Przysietnica, Skrudzina i Wola Krogulecka.",
    "Sercem gminy jest oczywiście rynek — objęty od dwa tysiące osiemnastego roku ochroną jako Pomnik Historii, razem z klasztorem klarysek. Kilkaset metrów dalej są Błonia z papieskim ołtarzem z tysiąc dziewięćset dziewięćdziesiątego dziewiątego roku i Diecezjalne Centrum Pielgrzymowania z muzeum poświęconym Janowi Pawłowi II.",
    "Dojazd: przez gminę biegnie linia kolejowa z Tarnowa do Leluchowa, ze stacjami w Mostkach, Starym Sączu, Barcicach i Przysietnicy. Samochodem — drogą krajową z Nowego Sącza w stronę Piwnicznej, obok obwodnicy miasta.",
  ],
  districts: [
    "Stary Sącz — Rynek i starówka",
    "Stary Sącz — pozostałe osiedla",
    "Barcice i Barcice Dolne",
    "Gołkowice Dolne i Górne",
    "Moszczenica Niżna i Wyżna",
    "Przysietnica",
    "Gaboń i Gaboń-Praczka",
    "Mostki, Myślec, Skrudzina",
  ],

  nearbyHeading: "Nowy Sącz, Podegrodzie i Rytro też są na mojej trasie",
  nearbyParagraphs: [
    "Do Nowego Sącza jest stąd kilkanaście minut, do Podegrodzia jeszcze mniej. Dojeżdżam do obu, a także do Rytra, Piwnicznej i Łącka — bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo bywa mylone: Stary Sącz i Nowy Sącz to dwa różne miasta i dwie różne jednostki. Nowy Sącz jest miastem na prawach powiatu, Stary Sącz gminą miejsko-wiejską w powiecie nowosądeckim.",
  ],
  nearbyTowns: [
    "Nowy Sącz",
    "Podegrodzie",
    "Rytro",
    "Piwniczna-Zdrój",
    "Łącko",
    "Kraków",
  ],

  about: blokOMnie("do Starego Sącza", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Barcicach albo Przysietnicy. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie piętnaście sołectw gminy traktuję dokładnie tak samo jak samo miasto. Przy umawianiu podaj nazwę miejscowości, bo od tego zależy tylko to, jak zaplanuję trasę.",
    },
    ...faqWspolne("w Starym Sączu"),
    {
      question: "To ten sam Sącz co Nowy Sącz?",
      answer:
        "Nie, to dwa różne miasta oddalone o kilkanaście kilometrów. Nowy Sącz jest miastem na prawach powiatu i ma u mnie osobną stronę. Stary Sącz to gmina miejsko-wiejska z klasztorem klarysek, brukowanym rynkiem i papieskimi Błoniami. Dojeżdżam i tu, i tam, bez dopłaty.",
    },
  ],

  geo: { lat: 49.5617, lng: 20.6354 },
};
