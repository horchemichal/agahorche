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
 * OŚWIĘCIM — GMINA WIEJSKA w powiecie oświęcimskim.
 * ⚠️⚠️ TO ODRĘBNA GMINA OD MIASTA OŚWIĘCIM. Miasto NIE należy do gminy.
 * TERYT gminy wiejskiej: 1213062.
 * 18 971 mieszkańców (GUS, 31.12.2024), 74,8 km², 253 os./km²,
 * +17,5% od 2002, średni wiek 41,9, saldo migracji +37, REGON 1 986.
 * 14 SOŁECTW, 13 KÓŁ GOSPODYŃ.
 * Siedziba urzędu: ul. Zamkowa 12 w mieście Oświęcim.
 *
 * OŚ STRONY: CZTERNAŚCIE ŚRODKÓW I ANI JEDNEGO CENTRUM. Gmina nie ma
 * własnego miasteczka ani wsi-stolicy; ma 14 sołectw i 13 kół gospodyń —
 * praktycznie jedno na sołectwo — a dożynki odbywają się osobno,
 * w kilku wsiach naraz tego samego roku (udokumentowane w 2019:
 * Brzezinka, Grojec, Poręba Wielka).
 * ⚠️⚠️ TO NIE JEST OŚ „URZĄD W MIEŚCIE, DO KTÓREGO NIE NALEŻY” —
 * ta należy do GMINY TARNÓW. Adres przy Zamkowej wchodzi jako JEDEN
 * DOWÓD w akapicie o rozproszeniu, nie jako teza.
 * ⚠️⚠️ TO NIE JEST LUSTRO OSI MIASTA OŚWIĘCIM („miasto, które od
 * czterdziestu lat traci ludzi na rzecz własnej gminy wiejskiej”).
 * Wzrost +17,5% wchodzi jako JEDNA LICZBA, nie jako narracja migracyjna.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 14 SOŁECTW: Babice, Broszkowice, Brzezinka, Dwory Drugie, Grojec,
 *   Harmęże, Łazy, Osada Stawy Grojeckie, Pławy, Poręba Wielka, Rajsko,
 *   Stawy Monowskie, Włosienica, Zaborze. ⚠️ Prezentacja gminy wymienia
 *   13 (pomija Osadę Stawy Grojeckie); liczba 14 potwierdzona krzyżowo
 *   przez polskawliczbach i wykaz KGW gminy,
 * — 13 KÓŁ GOSPODYŃ (zkgo.gminaoswiecim.pl): Babice, Broszkowice,
 *   Brzezinka, Dwory II, Grojec, Harmęże, Osada Stawy Grojeckie, Pławy,
 *   Poręba Wielka, Rajsko, Stawy Monowskie, Włosienica, Zaborze.
 *   BRAK KGW W ŁAZACH — czyli 13 kół na 14 sołectw,
 * — DOŻYNKI ORGANIZOWANE OSOBNO W SOŁECTWACH — udokumentowane
 *   w 2019 r. równolegle w Brzezince, Grojcu i Porębie Wielkiej,
 * — POŁOŻENIE: gmina pisze o sobie „Centralnie, w środku Gminy, leży
 *   miasto Oświęcim” (gminaoswiecim.pl). ⚠️ NIE POTWIERDZONO, czy
 *   pierścień jest domknięty geometrycznie. Użyta formuła gminy,
 *   NIE „gmina otacza miasto ze wszystkich stron”,
 * — SĄSIEDZI: miasto Oświęcim, miasto Bieruń, gminy Bojszowy,
 *   Brzeszcze, Chełmek, Kęty, Libiąż, Miedźna, Osiek, Polanka Wielka,
 *   Przeciszów,
 * — LGD „DOLINA SOŁY” MA SIEDZIBĘ W RAJSKU, ul. Edukacyjna 9 — czyli
 *   w tej gminie. Obejmuje gminy Oświęcim, Kęty, Chełmek, Brzeszcze
 *   i Wieprz; 59 członków (26 instytucjonalnych, 33 osoby fizyczne),
 * — HISTORIA: koniec XIII w. ziemia oświęcimska do Księstwa
 *   Cieszyńskiego, potem samodzielne księstwo oświęcimskie;
 *   1564 przywilej inkorporacyjny ZYGMUNTA AUGUSTA, wcielenie do
 *   Korony; 1772 zabór austriacki; 1910 starostwo; 1951 samodzielny
 *   powiat; 1975 województwo bielskie; 1999 powrót do Małopolski,
 * — DEMOGRAFIA: +17,5% od 2002 (ok. +2 765 osób). Dla kontrastu
 *   miasto Oświęcim −15,2% w tym samym okresie, średni wiek 45,1
 *   wobec 41,9 w gminie,
 * — DOJAZD: drogi wojewódzkie 44, 933 i 948; autostrada A4 w zasięgu;
 *   kolej w kierunku Katowic i Krakowa (linie 93 i 94). Kraków 70 km,
 *   Katowice 35 km, Bielsko-Biała 35 km,
 * — WSPÓŁRZĘDNE (UG, ul. Zamkowa 12): 50,0405329 / 19,2203080.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH PRACODAWCÓW. ⚠️ NAJWIĘKSZA LUKA. Nie udało się ustalić
 *   ani jednego dużego zakładu W GRANICACH GMINY WIEJSKIEJ. Gminna
 *   baza firm jest pusta. Synthos i inne zakłady chemiczne leżą
 *   W MIEŚCIE Oświęcim, nie w gminie. NIE PRZYPISYWAĆ ICH GMINIE,
 * — MIGRACJI MIASTO–GMINA JAKO NARRACJI. To oś miasta Oświęcim,
 * — „URZĘDU W MIEŚCIE” JAKO OSI. To oś gminy Tarnów,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego
 *   z tej gminy. Napisane wprost,
 * — DATY UTWORZENIA GMINY w obecnym kształcie. Nie potwierdzona,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 7 492,22 zł
 *   i 4,7% IDENTYCZNIE dla wszystkich gmin powiatu oświęcimskiego
 *   i dla samego powiatu. To dane POWIATOWE. NIE UŻYWAĆ jako gminnych.
 *   Tak samo powiatowa jest struktura zatrudnienia 6,2 / 43,0 / 18,0 / 1,4,
 * — CEN NIERUCHOMOŚCI. geoportal-krajowy podaje 5 957 zł/m² i 7 896
 *   zł/m² identycznie dla Zatora, Brzeszcz i Kęt — też powiatowe.
 *
 * PUŁAPKI:
 * — ⚠️⚠️ BRZEZINKA, HARMĘŻE, RAJSKO, PŁAWY I STAWY MONOWSKIE TO
 *   SOŁECTWA TEJ GMINY. Większa część Miejsca Pamięci i Muzeum
 *   Auschwitz-Birkenau leży na terenie gminy, nie miasta.
 *   ZASADA REDAKCYJNA: JEDNO rzeczowe zdanie w sekcji o sołectwach,
 *   bez rozwinięcia. NIE w tytule, NIE w opisie meta, NIE w FAQ,
 *   NIE w sąsiedztwie wezwania do działania, NIE obok treści
 *   o gotowaniu. Nie eksponować liczb ofiar,
 * — GMINA WIEJSKA OŚWIĘCIM ≠ MIASTO OŚWIĘCIM. Osobne jednostki,
 *   osobne dane. Najczęstsza pomyłka,
 * — DWA STANY LUDNOŚCI MIASTA W OBIEGU: 35 420 (polskawliczbach,
 *   31.12.2024) i 34 170 (UM, koniec 2024). Prawdopodobnie ludność
 *   faktyczna vs meldunkowa.
 */

export const OSWIECIM_GMINA: CityContent = {
  slug: "oswiecim-gmina",
  h1: "Thermomix gmina Oświęcim – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix gmina Oświęcim — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie wiejskiej Oświęcim: bezpłatna prezentacja TM7 u Ciebie w kuchni, raty 0%. Dojazd do wszystkich 14 sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix gmina Oświęcim — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie wiejskiej Oświęcim. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Grojca, Rajska, Włosienicy, Zaborza i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie czternaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Oświęcim – jak wygląda prezentacja?",
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
      heading: "Czternaście środków i ani jednego centrum",
      paragraphs: [
        "Ta gmina nie ma stolicy. Nie ma miasteczka, nie ma wsi większej od pozostałych, nie ma rynku, na którym wszyscy się spotykają. Ma czternaście sołectw i urząd, który stoi przy ulicy Zamkowej w Oświęcimiu — czyli w mieście, które do gminy nie należy.",
        "Sama gmina opisuje to zresztą z rozbrajającą prostotą: centralnie, w środku gminy, leży miasto Oświęcim. Wsie rozłożyły się wokół niego jak korale.",
        "Najlepiej widać tę strukturę po kołach gospodyń. Jest ich trzynaście — po jednym w każdym sołectwie poza Łazami. Nie ma jednego koła gminnego, do którego wszystkie się zapisują; jest trzynaście osobnych, w Babicach, Broszkowicach, Brzezince, Dworach Drugich, Grojcu, Harmężach, Osadzie Stawy Grojeckie, Pławach, Porębie Wielkiej, Rajsku, Stawach Monowskich, Włosienicy i Zaborzu.",
        "Dożynki też odbywają się osobno. W dwa tysiące dziewiętnastym roku święto plonów świętowano tego samego lata równolegle w Brzezince, Grojcu i Porębie Wielkiej — trzy korowody, trzy wieńce, trzy poczęstunki, w jednej gminie.",
        "To ma swoje konsekwencje praktyczne, o których warto wiedzieć, jeśli się tu wprowadza. Nie ma jednego miejsca, w którym się załatwia sprawy sąsiedzkie; jest czternaście osobnych wspólnot, z których każda ma własny kalendarz i własną świetlicę. Przynależność deklaruje się do wsi, a nie do gminy.",
        "W Rajsku ma zresztą siedzibę Lokalna Grupa Działania Dolina Soły, obejmująca pięć gmin — czyli instytucja o zasięgu szerszym niż gmina mieści się w jednej z jej wsi, a nie w żadnym centrum administracyjnym.",
        "Historia całej ziemi oświęcimskiej jest starsza od jej dzisiejszych podziałów. Pod koniec trzynastego wieku należała do Księstwa Cieszyńskiego, potem stanowiła samodzielne księstwo oświęcimskie, a do Korony wcielił ją Zygmunt August przywilejem inkorporacyjnym z tysiąc pięćset sześćdziesiątego czwartego roku. Po pierwszym rozbiorze przeszła pod panowanie austriackie, a do Małopolski wróciła dopiero w tysiąc dziewięćset dziewięćdziesiątym dziewiątym.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Oświęcim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo, koniecznie. W gminie bez centrum sama nazwa gminy nie mówi nic o trasie — Broszkowice leżą przy samej granicy miasta, Włosienica i Łazy znacznie dalej na wschód.",
        "Jeśli jesteś w kole gospodyń i chodzi o pokaz dla kilku osób naraz, powiedz od razu. W tej gminie kół jest trzynaście, więc takie pytanie pada często, a spotkanie grupowe planuję inaczej: więcej porcji, inny dobór przepisów, więcej czasu na pytania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Oświęcim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gotować na wieś, a nie na gminę",
      paragraphs: [
        "Trzynaście kół gospodyń w jednej gminie znaczy tyle, że kilkanaście razy w roku ktoś tu gotuje nie dla czterech osób, ale dla pięćdziesięciu. Na dożynki własnego sołectwa, na spotkanie w świetlicy, na jubileusz koła.",
        "I to jest gotowanie zupełnie innego rodzaju niż domowy obiad. Problemem nie jest przepis, tylko logistyka: wszystko musi być gotowe na jedną godzinę, kuchnia jest jedna, a lodówka w świetlicy zwykle mała.",
        "Pierwsza rzecz, która przy tym pomaga, to możliwość zrobienia większości z wyprzedzeniem. Pasty, sosy, ciasto na drożdżówkę, farsze — powstają dzień wcześniej i tylko czekają. Urządzenie pracuje bez nadzoru i samo się wyłącza, więc można nastawić jedno i w tym czasie zająć się drugim.",
        "Druga to przeliczanie. Przepisy z internetu są na cztery porcje, a przy pięćdziesięciu łatwo o pomyłkę w ułamkach. Wbudowana waga i odmierzanie prosto do naczynia usuwają połowę tych błędów — nie trzeba brudzić trzech misek, żeby sprawdzić, ile już poszło.",
        "Trzecia dotyczy powtarzalności. Kiedy coś raz wyszło dobrze na spotkaniu koła, warto, żeby wyszło tak samo za rok — a przy gotowaniu na oko rzadko wychodzi. Zapisany czas, temperatura i gramatura to jedyny sposób, żeby przepis przetrwał zmianę pokoleń w kole.",
        "Rodzicom najmłodszych dzieci przydaje się przy tym to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Gmina Oświęcim i gotowanie — trzynaście kół i trzynaście kuchni",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych. Nie ma tu produktu z rejestrem, i nie będę udawać, że jest.",
      "Za to jest coś, czego nie ma prawie żadna sąsiednia gmina: trzynaście działających kół gospodyń wiejskich, po jednym w niemal każdym sołectwie. Babice, Broszkowice, Brzezinka, Dwory Drugie, Grojec, Harmęże, Osada Stawy Grojeckie, Pławy, Poręba Wielka, Rajsko, Stawy Monowskie, Włosienica i Zaborze. Jedyne sołectwo bez koła to Łazy.",
      "Trzynaście kół to trzynaście osobnych repertuarów. Nie ma tu jednej gminnej kuchni, którą dałoby się opisać w jednym akapicie — jest tyle wersji tego samego dania, ile wsi.",
      "Widać to najlepiej po dożynkach, które w tej gminie odbywają się równolegle w kilku sołectwach tego samego lata. Każde robi własny wieniec, własny korowód i własny poczęstunek.",
      "W Rajsku, jednym z sołectw, ma siedzibę Lokalna Grupa Działania Dolina Soły, obejmująca pięć gmin powiatu — więc lokalne produkty i lokalne jedzenie mają tu instytucjonalne oparcie, choć nie mają jeszcze wpisu do rejestru.",
      "Dla urządzenia najsensowniejsze jest tu gotowanie w większych ilościach na spotkania kół, przygotowywanie rzeczy dzień wcześniej i zapisywanie przepisów z konkretną gramaturą. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Oświęcim dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich czternastu, bez żadnej dopłaty za odległość. Gmina liczy blisko dziewiętnaście tysięcy mieszkańców na siedemdziesięciu pięciu kilometrach kwadratowych, a w jej środku leży miasto Oświęcim, które do gminy nie należy.",
    "Sołectwa to: Babice, Broszkowice, Brzezinka, Dwory Drugie, Grojec, Harmęże, Łazy, Osada Stawy Grojeckie, Pławy, Poręba Wielka, Rajsko, Stawy Monowskie, Włosienica i Zaborze.",
    "Warto wiedzieć, że urząd gminy mieści się przy ulicy Zamkowej w Oświęcimiu — czyli poza granicami samej gminy. To rozwiązanie praktyczne w gminie, która nie ma własnego centrum.",
    "Na terenie gminy, w Brzezince, znajduje się większa część Miejsca Pamięci i Muzeum Auschwitz-Birkenau.",
    "W Rajsku ma siedzibę Lokalna Grupa Działania Dolina Soły, obejmująca gminy Oświęcim, Kęty, Chełmek, Brzeszcze i Wieprz.",
    "Dojazd: przez gminę biegną drogi wojewódzkie czterdzieści cztery, dziewięćset trzydzieści trzy i dziewięćset czterdzieści osiem, a autostrada A4 jest w zasięgu. Do Krakowa siedemdziesiąt kilometrów, do Katowic i Bielska-Białej po trzydzieści pięć.",
  ],
  districts: [
    "Grojec",
    "Rajsko",
    "Włosienica",
    "Zaborze",
    "Brzezinka",
    "Poręba Wielka",
    "Babice",
    "Harmęże",
    "Broszkowice",
    "Pławy",
    "Dwory Drugie",
    "Stawy Monowskie",
    "Osada Stawy Grojeckie",
    "Łazy",
  ],

  nearbyHeading: "Kęty, Brzeszcze i Chełmek też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z miastem Oświęcim, Kętami, Brzeszczami, Chełmkiem, Osiekiem, Polanką Wielką, Przeciszowem i Libiążem, a od zachodu już z gminami województwa śląskiego. Dojeżdżam do wszystkich gmin powiatu oświęcimskiego bez doliczania kosztu dojazdu.",
    "Uwaga na nazwę: gmina wiejska Oświęcim to odrębna jednostka od miasta Oświęcim. Miasto do gminy nie należy, choć stoi w jej środku i mieści jej urząd. To najczęstsza pomyłka w tej okolicy.",
  ],
  nearbyTowns: [
    "Oświęcim",
    "Kęty",
    "Brzeszcze",
    "Chełmek",
    "Osiek",
    "Polanka Wielka",
    "Przeciszów",
    "Libiąż",
  ],

  about: blokOMnie("do gminy Oświęcim", "w powiecie oświęcimskim"),

  faq: [
    {
      question: "Mieszkam w Grojcu albo we Włosienicy. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie czternaście sołectw traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — w gminie bez centrum jest to potrzebne bardziej niż gdzie indziej, bo sama nazwa gminy nie mówi nic o trasie.",
    },
    ...faqWspolne("w gminie Oświęcim"),
    {
      question: "Czy zrobisz pokaz dla koła gospodyń?",
      answer:
        "Tak i w tej gminie pytają o to najczęściej ze wszystkich, bo kół jest tu trzynaście — po jednym w niemal każdym sołectwie. Takie spotkanie planuję inaczej niż domowe: przywożę więcej składników, dobieram przepisy pod większą liczbę porcji i zostawiam więcej czasu na pytania. Chętnie pokażę też, jak zapisać przepis z konkretną gramaturą i czasem, żeby za rok wyszedł tak samo. Warto uprzedzić o liczbie osób kilka dni wcześniej.",
    },
  ],

  geo: { lat: 50.0405329, lng: 19.220308 },
};
