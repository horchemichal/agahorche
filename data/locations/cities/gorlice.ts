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
 * GORLICE — GMINA MIEJSKA, stolica powiatu gorlickiego.
 * 25 367 mieszkańców (31.12.2024), 23,5 km², gęstość 1 078 os./km².
 * ⚠️ SPADEK LUDNOŚCI O 12,3% w latach 2002–2024; mediana wieku 45,1.
 *
 * ⚠️ UWAGA NA BLIŹNIAKA: obok istnieje GMINA WIEJSKA GORLICE
 * (plik `gorlice-gmina.ts`) — 10 sołectw, 16 906 mieszkańców,
 * urząd przy ul. 11 Listopada 2 W TYM MIEŚCIE.
 * WSI O NAZWIE GORLICE NIE MA. Gmina wiejska ROŚNIE, gdy miasto maleje.
 *
 * OŚ STRONY: MIASTO ŚWIATŁA — 1854 I 1915. Konkretny przedmiot
 * (pierwsza na świecie uliczna lampa naftowa) plus konkretne
 * wydarzenie o skali europejskiej (bitwa gorlicka).
 * ⚠️ NIE DAWAĆ OSI „ROPA/PRZEMYSŁ NAFTOWY W OGÓLE” — Chełmiec
 * (`chelmiec.ts`) ma już ropę w Klęczanach od 1858, a Lipinki
 * (`lipinki.ts`) wydobycie trwające do dziś.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⚠️⚠️ LAMPA: TRZY RÓŻNE WYDARZENIA, NAGMINNIE MYLONE.
 *   30 marca 1853, LWÓW — pierwsza lampa naftowa w oknie apteki.
 *   31 lipca 1853, LWÓW — pierwsza nocna operacja przy lampie.
 *   1854, GORLICE — PIERWSZA NA ŚWIECIE ULICZNA LAMPA NAFTOWA.
 *   ⚠️⚠️ ZNANY JEST TYLKO ROK. Żadne z pięciu sprawdzonych źródeł
 *   nie podaje dnia ani miesiąca. NIE WYMYŚLAĆ DATY DZIENNEJ.
 *   Miejsce: skrzyżowanie dzisiejszych ulic WĘGIERSKIEJ I KOŚCIUSZKI
 *   (dzielnica Zawodzie); stoi tam kapliczka z repliką XVI-wiecznej
 *   rzeźby Chrystusa Frasobliwego, a na niej lampa.
 *   Łukasiewicz mieszkał w Gorlicach 1853–1858, dzierżawił aptekę,
 * — MARKA MIASTA: „GORLICE — MIASTO ŚWIATŁA”, oficjalna,
 * — FESTIWAL ŚWIATŁA — 28–29 sierpnia (edycja 2026), Park Miejski.
 *   ⚠️ ROKU PIERWSZEJ EDYCJI I NUMERU NIE POTWIERDZONO,
 * — BITWA GORLICKA 2 MAJA 1915 R.: start godz. 6:00, cztery godziny
 *   przygotowania artyleryjskiego, atak piechoty o 10:00.
 *   OK. 700 DZIAŁ I MOŹDZIERZY. Państwa centralne PONAD 120 TYS.
 *   żołnierzy przeciw ok. 60 TYS. Rosjan. PRZEŁAMANIE FRONTU
 *   NA SZEROKOŚCI 60 KM. Dowódcy: gen. AUGUST VON MACKENSEN
 *   (niemiecka 11. Armia), arcyksiążę Józef Ferdynand,
 *   Svetozar Boroević von Bojna; po stronie rosyjskiej
 *   gen. RADKO DIMITRIEW. Odwrót Rosjan ok. 22:00,
 * — CMENTARZE: 83 cmentarze z I wojny w okolicach Gorlic, w czterech
 *   okręgach. OKRĘG III (GORLICE) — 54 CMENTARZE, projektant
 *   austriacki architekt HANS MAYR. W mieście nry 87, 88, 89, 90, 91.
 *   CMENTARZ NR 91 NA GÓRZE CMENTARNEJ — obiekt reprezentacyjny
 *   okręgu, BLISKO 1 600 ŻOŁNIERZY. Wokół Gorlic pochowano ok. 17 tys.
 *   żołnierzy rosyjskich i co najmniej 8 tys. niemieckich
 *   i austro-węgierskich.
 *   ⚠️ CMENTARZ NR 123 ŁUŻNA-PUSTKI TO GMINA ŁUŻNA, NIE GORLICE,
 * — HISTORIA MIASTA: 1354 Dersław I Karwacjan otrzymuje od Kazimierza
 *   Wielkiego przywilej lokacyjny u zbiegu Ropy i Sękówki;
 *   1417 Władysław Jagiełło przenosi na prawo magdeburskie;
 *   poł. XVI w. Pieniążkowie, miasto ośrodkiem kalwinizmu;
 *   1657 najazd szwedzki, 1662 ludność spada do 284 OSÓB;
 *   1874 pożar niszczy 437 budynków; 1877 Krajowe Towarzystwo Naftowe
 *   z siedzibą w Gorlicach; 1899–1900 park miejski ponad 20 ha
 *   z inicjatywy burmistrza Wojciecha Biechońskiego,
 * — RAFINERIA: 1883 Kanadyjczyk WILLIAM HENRY McGARVEY i JOHN
 *   BERGHEIM zakładają w Gliniku Mariampolskim destylarnię oraz
 *   fabrykę maszyn i narzędzi wiertniczych — wg PTTK pierwsza
 *   profesjonalna rafineria na ziemiach polskich. 1984 nazwa
 *   Rafineria Nafty „Glimar”. ⚠️ UPADŁOŚĆ: ŹRÓDŁA PODAJĄ 2003
 *   ALBO 2005 — nie podawać roku, pisać „w połowie pierwszej dekady”,
 * — PRACODAWCA POTWIERDZONY: Narzędzia i Urządzenia Wiertnicze
 *   „GLINIK” Sp. z o.o. — świdry trójgryzowe, certyfikat API,
 *   PONAD 90% EKSPORTU (USA, Arabia Saudyjska, Kolumbia, Brazylia),
 *   PONAD 220 PRACOWNIKÓW, 140-lecie. Także PGO S.A. Oddział Kuźnia
 *   Glinik. ⚠️ FAMUR Oddział Glinik — w 2025/26 ZWOLNIENIA GRUPOWE
 *   ok. 200 osób. NIE PISAĆ O NIM JAKO O ROSNĄCYM PRACODAWCY,
 * — SKANSEN PRZEMYSŁU NAFTOWEGO „MAGDALENA”, ul. Lipowa — otwarty
 *   31 maja 2012. W rejonie Magdalena–Ropica Polska w latach
 *   1931–2000 odwiercono ok. 110 otworów i wydobyto blisko
 *   310 000 TON ROPY,
 * — BAZYLIKA MNIEJSZA NARODZENIA NMP: budowa 1875–1890, odbudowa
 *   po I wojnie 1920–1931; wnętrza Jan Styka, Piotr Stachiewicz,
 *   JÓZEF MEHOFFER; TYTUŁ BAZYLIKI MNIEJSZEJ NADANY 23 MAJA 2009 R.,
 * — MUZEUM DWORY KARWACJANÓW I GŁADYSZÓW — instytucja Województwa
 *   Małopolskiego, działa od 1 stycznia 2008,
 * — 12 OSIEDLI: Magdalena, Kromera, Łysogórskie, Młodych,
 *   Krasińskiego, Starówka, Mariampol, Korczak, Górne, Skrzyńskich,
 *   Zawodzie, Sokół,
 * — REGON: 2 836 podmiotów (31.12.2024),
 * — KOLEJ: stacja GORLICE ZAGÓRZANY na linii 108 leży W GMINIE
 *   WIEJSKIEJ. Do centrum prowadzi linia 110 — obecnie rzadko
 *   używana. Planowana łącznica ok. 700 m: budowa 2026,
 *   zakończenie 2028. DK 28.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — SZYBU W SIARACH Z 1852 R. ⚠️ SIARY LEŻĄ W GMINIE SĘKOWA,
 *   nie w Gorlicach. Twierdzenie „pierwszy na świecie” konkuruje
 *   z Bóbrką. NIE PRZYPISYWAĆ MIASTU,
 * — BEZROBOCIA I WYNAGRODZEŃ. ⚠️ 6,3% i 6 707,16 zł to dane
 *   POWIATOWE — potwierdzone empirycznie, identyczne dla Gorlic
 *   i Biecza. NIE CYTOWAĆ JAKO MIEJSKICH,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — DATY DZIENNEJ ZAPALENIA LAMPY. Nie istnieje w źródłach.
 *
 * PUŁAPKI:
 * — ⚠️ KLĘCZANY: gmina wiejska Gorlice ma sołectwo o tej nazwie,
 *   ale to INNE Klęczany niż te z gminy Chełmiec, o których pisze
 *   strona Chełmca w kontekście ropy z 1858 r. NIE ZLEPIAĆ,
 * — ZAGRODA MAZIARSKA W ŁOSIU należy do gorlickiego muzeum,
 *   ale Łosie to GMINA ROPA.
 */

export const GORLICE: CityContent = {
  slug: "gorlice",
  h1: "Thermomix Gorlice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Gorlice — prezentacja i cena",
  seoDescription:
    "Thermomix w Gorlicach: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd po całym mieście bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gorlice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Gorlicach. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Gorlic przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("całe miasto, wszystkie osiedla, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gorlicach – jak wygląda prezentacja?",
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
      heading: "Pierwsza uliczna lampa na świecie i najkrótszy dzień w historii miasta",
      paragraphs: [
        "Gorlice nazywają siebie Miastem Światła i akurat ta nazwa nie jest marketingiem. W tysiąc osiemset pięćdziesiątym czwartym roku na skrzyżowaniu dzisiejszych ulic Węgierskiej i Kościuszki zapłonęła pierwsza na świecie uliczna lampa naftowa, skonstruowana przez Ignacego Łukasiewicza. Stoi tam dziś kapliczka z repliką szesnastowiecznej rzeźby Chrystusa Frasobliwego, a na niej lampa.",
        "Muszę być tu precyzyjna, bo krążą trzy różne daty i wszystkie są prawdziwe, tylko dotyczą czego innego. Trzydziestego marca tysiąc osiemset pięćdziesiątego trzeciego lampa zapłonęła w oknie lwowskiej apteki. Trzydziestego pierwszego lipca tego samego roku odbyła się przy niej pierwsza nocna operacja we lwowskim szpitalu. A rok później, tu, w Gorlicach — pierwsza lampa uliczna. Dnia i miesiąca nie podam, bo żadne wiarygodne źródło ich nie zna.",
        "Łukasiewicz mieszkał wtedy w Gorlicach i dzierżawił tutejszą aptekę; został tu do tysiąc osiemset pięćdziesiątego ósmego roku. To, co po nim zostało, było już przemysłem: w tysiąc osiemset siedemdziesiątym siódmym Krajowe Towarzystwo Naftowe miało siedzibę właśnie w tym mieście, a sześć lat później Kanadyjczyk William Henry McGarvey postawił w Gliniku destylarnię i fabrykę narzędzi wiertniczych.",
        "Drugą datą, którą Gorlice pamiętają, jest drugi maja tysiąc dziewięćset piętnastego roku. O szóstej rano zaczęło się czterogodzinne przygotowanie artyleryjskie z około siedmiuset dział, o dziesiątej ruszyła piechota. Po stronie państw centralnych stało ponad sto dwadzieścia tysięcy żołnierzy, po rosyjskiej około sześćdziesięciu tysięcy.",
        "Front pękł na szerokości sześćdziesięciu kilometrów. Miasto zajęto wczesnym popołudniem, a Rosjanie wycofali się około dziesiątej wieczorem. Bitwa gorlicka jest uznawana za największą bitwę pierwszej wojny na froncie wschodnim i za tę, która odwróciła bieg całej kampanii.",
        "Ślady zostały w krajobrazie. Wokół Gorlic jest osiemdziesiąt trzy cmentarze wojenne z tamtej wojny, w czterech okręgach; sam okręg gorlicki obejmuje pięćdziesiąt cztery, zaprojektowane przez austriackiego architekta Hansa Mayra. Reprezentacyjny cmentarz numer dziewięćdziesiąt jeden na Górze Cmentarnej kryje blisko tysiąc sześciuset żołnierzy.",
        "Przemysł, który zaczął się od lampy, wciąż tu jest, choć w innej postaci. Zakład narzędzi wiertniczych w Gliniku obchodził niedawno sto czterdzieści lat, zatrudnia ponad dwieście dwadzieścia osób i wysyła ponad dziewięćdziesiąt procent produkcji na eksport — do Stanów, Arabii Saudyjskiej, Kolumbii i Brazylii. Świdry z Gorlic wiercą dziś na czterech kontynentach.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Gorlicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o miasto, czy o gminę wiejską. To dwie osobne jednostki o tej samej nazwie — jeśli mieszkasz w Szymbarku, Kobylance czy Zagórzanach, to gmina wiejska i ma u mnie własną stronę.",
        "Przy mieście wystarczy adres i informacja, czy to blok, czy dom. Od tego zależy tylko tyle, gdzie zaparkuję i którędy wniosę sprzęt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
        {
          href: "/thermomix/gorlice-gmina",
          label: "Mieszkasz w gminie wiejskiej Gorlice? Tu jest jej strona",
        },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gorlicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Miasto, które się kurczy, i gmina, która rośnie",
      paragraphs: [
        "Powiem to wprost, bo liczby są jednoznaczne: od dwa tysiące drugiego roku Gorlice straciły ponad dwanaście procent mieszkańców, a mediana wieku wynosi tu czterdzieści pięć lat. W tym samym czasie otaczająca miasto gmina wiejska rosła. Ludzie nie wyjeżdżają z okolicy — przenoszą się na jej obrzeża, do własnych domów.",
        "W mieście zostaje dwadzieścia pięć tysięcy osób na dwudziestu trzech kilometrach kwadratowych, w gęstej zabudowie: osiedla bloków, starówka, dzielnice jednorodzinne. To znaczy sporo mieszkań, w których kuchnia ma kilka metrów kwadratowych i nie da się w niej trzymać pięciu urządzeń naraz.",
        "I to jest tu pierwsza praktyczna rzecz. Jedno urządzenie zajmuje mniej więcej tyle co czajnik z podstawką, a zastępuje blender, malakser, mikser i część garnków. W małej kuchni zwykle zwalnia blat, zamiast go zajmować — i akurat to najłatwiej sprawdzić na miejscu, u siebie.",
        "Druga rzecz wynika z wieku. W mieście z medianą powyżej czterdziestu pięciu lat wiele domów gotuje już nie dla piątki, tylko dla dwojga. A gotowanie dla dwojga ma własne problemy: nie opłaca się rozstawiać połowy kuchni, a resztki się marnują. Mniejsze porcje i gotowanie na kilka dni naprzód rozwiązują to lepiej niż cokolwiek innego.",
        "Trzecia dotyczy pracy zmianowej. Zakłady w Gliniku pracują na zmiany i w wielu domach ktoś wraca o innej porze niż reszta. Danie jednogarnkowe gotuje się wtedy bez pilnowania, samo się wyłącza i czeka — nie stygnie w garnku i nie przypala się.",
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
    heading: "Gorlice i gotowanie — kuchnia miasta na pograniczu",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost temu miastu. Gorlice są gminą miejską, a koła gospodyń to struktura wiejska — te działają w gminach dookoła.",
      "To, co jest tu pewne, wynika z położenia. Miasto leży u zbiegu Ropy i Sękówki, na styku Pogórza i Beskidu Niskiego, a wokół niego mieszkali przez wieki Pogórzanie i Łemkowie. Kuchnia domowa ma tu więc po trochu z obu stron i nie da się jej zamknąć w jednej liście dań.",
      "Co się gotuje: ziemniaki, kapusta, fasola, zupy na kościach, kwaśne polewki, wędliny robione w domu, ciasto drożdżowe, przetwory z tego, co rośnie w ogródku albo co się przywiezie z targu.",
      "W mieście z zabudową w dużej części blokową liczy się jednak nie tyle repertuar, ile skala i miejsce. Gotuje się w małych kuchniach, często dla dwóch, trzech osób, i najczęściej wieczorem po pracy. To zupełnie inny tryb niż w gospodarstwie.",
      "Dla urządzenia to dobra sytuacja, bo jego największą zaletą jest właśnie zwolniony blat i brak konieczności pilnowania. Zupa, sos, ciasto i pasta zrobione jednego wieczoru w jednym naczyniu, bez rozstawiania trzech sprzętów. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Gdzie w Gorlicach dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i wszystkich dwunastu osiedli, bez żadnej dopłaty za odległość. Gorlice są gminą miejską na dwudziestu trzech kilometrach kwadratowych, z gęstością zaludnienia powyżej tysiąca osób na kilometr — najwyższą w powiecie.",
    "Osiedla to: Starówka, Magdalena, Kromera, Łysogórskie, Młodych, Krasińskiego, Mariampol, Korczak, Górne, Skrzyńskich, Zawodzie i Sokół.",
    "Kilka miejsc warto znać. Na Zawodziu, na skrzyżowaniu Węgierskiej i Kościuszki, stoi kapliczka upamiętniająca pierwszą na świecie uliczną lampę naftową z tysiąc osiemset pięćdziesiątego czwartego roku. Przy Lipowej działa od dwa tysiące dwunastego roku skansen przemysłu naftowego na terenie dawnej kopalni Magdalena — w tym rejonie w latach tysiąc dziewięćset trzydziestym pierwszym–dwutysięcznym odwiercono około stu dziesięciu otworów i wydobyto blisko trzysta dziesięć tysięcy ton ropy. Na Górze Cmentarnej leży cmentarz wojenny numer dziewięćdziesiąt jeden z blisko tysiącem sześciuset poległymi.",
    "W centrum stoi bazylika Narodzenia Najświętszej Maryi Panny, budowana w latach osiemdziesiątych dziewiętnastego wieku, z wnętrzami Jana Styki, Piotra Stachiewicza i Józefa Mehoffera; tytuł bazyliki mniejszej otrzymała dwudziestego trzeciego maja dwa tysiące dziewiątego roku. Park miejski, ponad dwudziestohektarowy, założono na przełomie wieków z inicjatywy burmistrza Wojciecha Biechońskiego.",
    "Dojazd: przez miasto biegnie droga krajowa z Zatora do Medyki. Z koleją jest trudniej — stacja Gorlice Zagórzany leży w gminie wiejskiej, a linia do centrum jest dziś rzadko używana. Planowana jest siedemsetmetrowa łącznica, która ma umożliwić bezpośrednie pociągi do Stróż, Tarnowa i Krakowa; budowę przewidziano na lata dwa tysiące dwudziesty szósty–dwudziesty ósmy.",
  ],
  districts: [
    "Starówka",
    "Magdalena",
    "Kromera i Krasińskiego",
    "Łysogórskie i Młodych",
    "Mariampol i Glinik",
    "Zawodzie",
    "Korczak i Górne",
    "Skrzyńskich i Sokół",
  ],

  nearbyHeading: "Gmina wiejska Gorlice, Ropa i Sękowa też są na mojej trasie",
  nearbyParagraphs: [
    "Wokół miasta leży gmina wiejska o tej samej nazwie — dziesięć sołectw, od Szymbarku i Kobylanki po Bielankę i Zagórzany. To osobna jednostka, której urząd mieści się zresztą w tym mieście. Wsi o nazwie Gorlice nie ma wcale.",
    "Dalej są Ropa, Sękowa, Lipinki, Łużna, Moszczenica i Biecz. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
  ],
  nearbyTowns: [
    "Ropa",
    "Sękowa",
    "Lipinki",
    "Łużna",
    "Biecz",
    "Nowy Sącz",
  ],

  about: blokOMnie("do Gorlic", "w powiecie gorlickim"),

  faq: [
    {
      question: "Czym miasto Gorlice różni się od gminy Gorlice?",
      answer:
        "To dwie osobne gminy o tej samej nazwie. Miasto ma dwadzieścia trzy kilometry kwadratowe i ponad dwadzieścia pięć tysięcy mieszkańców. Gmina wiejska ma sto trzy kilometry, blisko siedemnaście tysięcy mieszkańców i dziesięć sołectw — Szymbark, Kobylankę, Zagórzany, Bielankę i inne — a jej urząd mieści się w mieście. Wsi o nazwie Gorlice nie ma. Dojeżdżam i tu, i tam, bez dopłaty.",
    },
    ...faqWspolne("w Gorlicach"),
    {
      question: "Mieszkam w bloku, mam małą kuchnię. Zmieści się?",
      answer:
        "Zmieści. Urządzenie zajmuje mniej więcej tyle co czajnik z podstawką, a zastępuje blender, malakser, mikser i część garnków — w małej kuchni zwykle zwalnia blat, zamiast go zajmować. Na prezentacji zobaczysz to na własnym blacie, a nie na zdjęciu.",
    },
  ],

  geo: { lat: 49.6546, lng: 21.1596 },
};
