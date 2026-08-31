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
 * WIELKA WIEŚ — GMINA WIEJSKA w powiecie krakowskim.
 * 17 171 mieszkańców (GUS, 31.12.2024), 48,3 km².
 * 12 SOŁECTW: Bębło, Będkowice, Biały Kościół, Czajowice, Giebułtów,
 * Modlnica, Modlniczka, Prądnik Korzkiewski, Szyce, Tomaszowice,
 * Wielka Wieś, Wierzchowie.
 * ⚠️ SIEDZIBA URZĘDU JEST W SZYCACH (Plac Wspólnoty 1), a ośrodek kultury
 * w BIAŁYM KOŚCIELE — nie w miejscowości Wielka Wieś.
 *
 * OŚ STRONY: GMINA BEZ JEDNEGO CENTRUM, KTÓRA TRZYMA SIĘ NA SOŁECTWACH.
 * Przy dwunastu sołectwach działa jedenaście–dwanaście zespołów
 * regionalnych i KGW — praktycznie po jednym na wieś — z repertuarem
 * wprost kuchennym („Pieczenie Chleba”, „Wyskubek”, „Pucheroki”),
 * a dożynki nie są jedną imprezą gminną, tylko kilkoma równoległymi
 * świętami w różnych wsiach w okolicach 15 sierpnia.
 * ⚠️⚠️ ŚWIADOMIE POMIJANE, MIMO ŻE PRAWDZIWE:
 * — wzrost ludności +92,8% od 2002 → oś ZIELONEK,
 * — średnia powierzchnia mieszkania 120,6 m², 36. miejsce w Polsce
 *   → oś MICHAŁOWIC,
 * — brak kolei → oś MICHAŁOWIC,
 * — „tu się pracuje na miejscu” (magazyny, handel) → oś ZABIERZOWA.
 *   Logistyka i handel wchodzą wyłącznie jako kontekst, nie jako teza.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ZESPOŁY REGIONALNE (gokisww.pl + wielka-wies.pl): Bęblanie (Bębło),
 *   Będkowianie (Będkowice), Białokościelanki (Biały Kościół),
 *   Czajowianki (Czajowice), Giebułtowianie/Giebułtowianki (Giebułtów),
 *   Modlnicanie (Modlnica), Modlniczanki (Modlniczka), Wielkowsianki
 *   (Wielka Wieś), Tomaszowianie (Tomaszowice), Wierzchowianie
 *   (Wierzchowie), Zespół Seniorów z Wielkiej Wsi, Orkiestra Dęta,
 *   KGW Bębło,
 * — WIDOWISKA OBRZĘDOWE wystawiane przez zespoły: „Pieczenie Chleba”,
 *   „Wyskubek”, „Pucheroki” — źródło jw.,
 * — PUCHEROKI: zwyczaj Niedzieli Palmowej; wg gminy Zielonki przetrwał
 *   tylko w Bibicach, Zielonkach, Trojanowicach (gm. Zielonki)
 *   i TOMASZOWICACH (gm. Wielka Wieś); przed I wojną w ponad 50 wsiach,
 *   w 1966 w piętnastu,
 * — DOŻYNKI: wędrują po sołectwach, kilka naraz w długi weekend wokół
 *   15 sierpnia (w 2014: Bębło, Prądnik Korzkiewski, Giebułtów,
 *   Modlnica); msza z poświęceniem wieńców, korowód, poczęstunek chlebem
 *   ze smalcem i kiszonym ogórkiem (archiwum relacji gminy),
 * — SIEDZIBA URZĘDU: Szyce, Plac Wspólnoty 1 (potwierdzone na stronie
 *   głównej, w Kontakcie i „Jak do nas dojechać”). Szyce leżą
 *   w CENTRALNEJ części gminy, powierzchnia sołectwa 206,9 ha.
 *   GOKiS: Biały Kościół, ul. Królowej Jadwigi 4,
 * — HISTORIA: pierwsze wzmianki — Szyce 1234 (jako „Sicha”, nadanie
 *   Bolesława Wstydliwego), Modlnica 1254, Biały Kościół 1325,
 *   Będkowice 1329, Modlniczka 1388, Wierzchowie 1470,
 * — GIEBUŁTÓW: kościół św. Idziego, obecny zbudowany 1600–1604,
 *   konsekrowany 8.09.1604 przez bp. Bernarda Maciejowskiego; wg tradycji
 *   fundacja Władysława Hermana i Judyty (koniec XI w.); 1801 mieszkańców
 *   (NSP 2021); trzy obiekty w rejestrze zabytków,
 * — MODLNICA: parafia od 1326; DREWNIANY kościół św. Wojciecha zbudowany
 *   1553, konsekrowany 1555, polichromia 1562, kaplica św. Anny 1622;
 *   klasycystyczny zespół dworski Konopków od 1784, park 3,5 ha z 1790,
 * — ZAMKOWA SKAŁA (Wielka Wieś): ruiny strażnicy, koniec I ćwierci XIV w.,
 *   opuszczona ok. poł. XIV w.; badania 1993–1995, udostępnienie 1996,
 * — GRANICA ZABORÓW: po 1815 Szyce były wsią graniczną z rosyjską komorą
 *   celną; potyczka 4.02.1863; bitwa pod Szycami 7.05.1863 (oddział
 *   Józefa Rumockiego, ok. 300 strzelców, przeciw ok. 1000 żołnierzy
 *   rosyjskich); pomnik powstańców w Szycach,
 * — UNIWERSYTET LUDOWY w Szycach: założony 1925 w budynku byłej rosyjskiej
 *   komory celnej, kierownik Ignacy Solarz (usunięty 1931), zamknięty 1952,
 * — JASKINIA WIERZCHOWSKA GÓRNA (Wierzchowie): korytarze ok. 1000 m,
 *   trasa turystyczna ok. 700 m i ok. 50 minut — NAJDŁUŻSZA TRASA
 *   TURYSTYCZNA spośród udostępnionych jaskiń w Polsce; udostępniona
 *   od XIX w.; znaleziska kości niedźwiedzia, lwa i hieny jaskiniowej,
 * — DOLINA KLUCZWODY: rezerwat ponad 35 ha, ok. 5 km długości; potok
 *   Kluczwoda uchodzi do Rudawy; zachodnia część sołectwa Biały Kościół,
 * — OPN: 114,67 ha = 5,34% powierzchni parku, w rejonie Czajowic,
 * — GRANICA Z KRAKOWEM: gmina graniczy BEZPOŚREDNIO z Krakowem od południa
 *   (cytat gminy: „gmina typowo podmiejska, bezpośrednio granicząca
 *   z Krakowem”), ok. 15 km od centrum,
 * — DOJAZD: DK94 przez Modlnicę, Giebułtów, Biały Kościół i Czajowice;
 *   S52 Północna Obwodnica Krakowa otwarta 23.12.2024, węzeł początkowy
 *   MODLNICA; autobusy MPK 310, 220, 230, 200,
 * — GOSPODARSTWA ROLNE: 2 177, z czego 97,5% poniżej 5 ha,
 * — WSPÓŁRZĘDNE (UG, Szyce, Plac Wspólnoty 1): 50,1533249 / 19,8581109.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WZROSTU LUDNOŚCI, METRAŻU MIESZKAŃ I BRAKU KOLEI. Wszystkie trzy są
 *   prawdziwe, ale to osie Zielonek i Michałowic. Nie użyte,
 * — „PARKU BIUROWEGO W MODLNICZCE”. NIE POTWIERDZONY. Kraków Business
 *   Park to ZABIERZÓW. W Modlniczce potwierdzone są magazyny i handel,
 * — GLA I LAT OTWARCIA Factory Kraków oraz Futura Park. Niepotwierdzone,
 * — LICZBY MIEJSC PRACY w centrach logistycznych. Dane z 2010 i 2014 r.,
 *   nieaktualizowane. Nie użyte jako liczby,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono żadnego,
 * — „PUCHEROKI NA LIŚCIE UNESCO/KRAJOWEJ”. NIE SĄ wpisane na Krajową
 *   listę niematerialnego dziedzictwa. Opisane jako rzadki zwyczaj,
 * — „PIERWSZEGO W POLSCE UNIWERSYTETU LUDOWEGO”. Określenie pochodzi
 *   wyłącznie ze strony gminy; istniały wcześniejsze (Dalki 1921).
 *   Użyta formuła „jeden z pierwszych”,
 * — BEZROBOCIA I WYNAGRODZEŃ. polskawliczbach podaje 8 110,12 zł i 4,3%
 *   identycznie dla wszystkich gmin powiatu — to dane POWIATOWE.
 *
 * PUŁAPKI:
 * — SIEDZIBA URZĘDU JEST W SZYCACH, nie w Wielkiej Wsi. Gmina nigdzie
 *   nie tłumaczy przyczyny — nie zmyślać uzasadnienia,
 * — DOLINA KOBYLAŃSKA NALEŻY DO ZABIERZOWA, nie do tej gminy,
 * — DOLINA BĘDKOWSKA leży w TRZECH gminach; Będkowice to sołectwo tej
 *   gminy, ale górny odcinek jest w Jerzmanowicach-Przegini, a wylot
 *   w Zabierzowie,
 * — „GOSPODARSTWO RYBACKIE DOLINA BĘDKOWSKA” ma adres w BOLECHOWICACH,
 *   gmina Zabierzów. Nazwa myli,
 * — JASKINIA WIERZCHOWSKA: źródła spierają się, czy jest największa
 *   na Jurze. Bezpieczne i zgodne: NAJDŁUŻSZA TRASA TURYSTYCZNA
 *   spośród udostępnionych jaskiń w Polsce,
 * — FUNDACJA KOŚCIOŁA W GIEBUŁTOWIE: 1082 vs 1086 w źródłach, i tak
 *   jest to tradycja. Obecny kościół to 1600–1604.
 */

export const WIELKA_WIES: CityContent = {
  slug: "wielka-wies",
  h1: "Thermomix Wielka Wieś – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Wielka Wieś — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Wielka Wieś: bezpłatna prezentacja TM7 u Ciebie w kuchni, raty 0%. Dojazd do Modlnicy, Szyc, Giebułtowa i reszty gminy. Tel. 517 185 691.",
  ogTitle: "Thermomix Wielka Wieś — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Wielka Wieś. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Modlnicy, Szyc, Giebułtowa, Białego Kościoła i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie dwanaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Wielka Wieś – jak wygląda prezentacja?",
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
      heading: "Dwanaście wsi, dwanaście zespołów",
      paragraphs: [
        "Ta gmina nazywa się Wielka Wieś, ale urząd stoi w Szycach, a ośrodek kultury w Białym Kościele. Nie ma tu jednego centrum, do którego wszyscy jadą — i to jest chyba najciekawsza rzecz, jaką da się o niej powiedzieć.",
        "Bo tożsamość trzyma się tu nie na stolicy, tylko na sołectwach. Przy dwunastu wsiach działa jedenaście czy dwanaście zespołów regionalnych i kół gospodyń — praktycznie po jednym na każdą. Bęblanie w Bęble, Będkowianie w Będkowicach, Białokościelanki w Białym Kościele, Czajowianki w Czajowicach, Giebułtowianie w Giebułtowie, Modlnicanie w Modlnicy, Modlniczanki w Modlniczce, Tomaszowianie w Tomaszowicach, Wierzchowianie w Wierzchowiu, Wielkowsianki w Wielkiej Wsi. Do tego zespół seniorów i orkiestra dęta.",
        "Repertuar tych zespołów jest zresztą, dosłownie, kuchenny. Wystawiają widowiska obrzędowe zatytułowane Pieczenie Chleba i Wyskubek — czyli o wypieku i o darciu pierza. To nie są tytuły wymyślone na potrzeby festiwalu, tylko nazwy czynności, które kiedyś zbierały całą wieś w jednej izbie.",
        "Trzecie widowisko to Pucheroki, i ono jest osobno warte uwagi. Ten zwyczaj Niedzieli Palmowej przetrwał już tylko w kilku wsiach pod Krakowem — przed pierwszą wojną praktykowano go w ponad pięćdziesięciu, w tysiąc dziewięćset sześćdziesiątym szóstym w piętnastu. Jedną z tych, które go zachowały, są tutejsze Tomaszowice.",
        "Ta struktura widać też przy dożynkach. W tej gminie nie ma jednego święta plonów na gminnym boisku — jest kilka równoległych, w różnych wsiach, w długi weekend wokół piętnastego sierpnia. Msza, poświęcenie wieńców, korowód i poczęstunek, który w relacjach gminy opisany jest bardzo konkretnie: chleb ze smalcem i kiszony ogórek.",
        "Historia poszczególnych wsi jest przy tym starsza niż sama gmina i bardzo nierówna. Szyce pojawiają się w dokumentach w tysiąc dwieście trzydziestym czwartym roku, Modlnica w tysiąc dwieście pięćdziesiątym czwartym, Wierzchowie dopiero w tysiąc czterysta siedemdziesiątym. W Modlnicy stoi drewniany kościół świętego Wojciecha z tysiąc pięćset pięćdziesiątego trzeciego roku z renesansową polichromią, a obok klasycystyczny dwór Konopków z parkiem założonym w tysiąc siedemset dziewięćdziesiątym.",
        "Szyce mają jeszcze jedną historię. Po tysiąc osiemset piętnastym roku była to wieś graniczna — stała tu rosyjska komora celna, a siódmego maja tysiąc osiemset sześćdziesiątego trzeciego roku doszło w okolicy do bitwy powstańczej. W budynku po komorze celnej otwarto potem, w tysiąc dziewięćset dwudziestym piątym roku, jeden z pierwszych polskich uniwersytetów ludowych, prowadzony przez Ignacego Solarza.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Wielka Wieś?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo, a nie samą nazwę gminy. Modlniczka leży przy granicy Krakowa, Czajowice kilkanaście kilometrów dalej przy skraju Ojcowskiego Parku Narodowego — to zupełnie inne trasy, choć koszt jest ten sam, czyli żaden.",
        "Jeśli jesteś w zespole regionalnym albo w kole gospodyń i myślisz o pokazie dla większej grupy, powiedz od razu. W tej gminie takie pytanie pada często i planuję wtedy spotkanie inaczej: więcej porcji, inny dobór przepisów, więcej czasu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Wielka Wieś"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Chleb, który kiedyś zbierał całą wieś",
      paragraphs: [
        "Tutejsze zespoły regionalne wystawiają widowisko zatytułowane Pieczenie Chleba. To mówi coś o tym, czym wypiek kiedyś był: nie czynnością jednej osoby przy blacie, tylko wydarzeniem, na które schodziła się rodzina i sąsiedzi, bo roboty było na pół dnia.",
        "Dzisiaj chleb piecze się w domach rzadziej, i zwykle nie dlatego, że ktoś nie chce. Powód jest prozaiczny: wyrabianie ciasta ręcznie to kwadrans ciężkiej roboty, a przy cieście żytnim więcej. Kiedy ten kwadrans skraca się do kilku minut, rachunek się zmienia — i to jest jedna z rzeczy, po które ludzie sięgają najczęściej.",
        "Druga rzecz wynika z tego, jak wygląda tu kalendarz. Kiedy w gminie jest kilkanaście zespołów, kół i orkiestra, to znaczy, że kilka razy w roku ktoś w domu gotuje nie dla czterech osób, ale dla dwudziestu. Na próbę, na dożynki w swojej wsi, na spotkanie po występie.",
        "Do takiego gotowania przydają się dwie proste rzeczy: dania jednogarnkowe w dużej ilości, które gotują się bez pilnowania, i ciasto, które można nastawić wieczorem przed. Bigos, gulasz, pasty do chleba, drożdżówka. Nic wyrafinowanego, po prostu dużo.",
        "Trzecia jest sezonowa i bardzo lokalna. Poczęstunek na tutejszych dożynkach to chleb ze smalcem i kiszony ogórek — a smalec ze skwarkami i cebulą oraz zalewa do ogórków to akurat rzeczy, które robi się w domu w kilkanaście minut i które kupione nigdy nie smakują tak samo.",
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
    heading: "Wielka Wieś i gotowanie — Pieczenie Chleba, Wyskubek i Pucheroki",
    paragraphs: [
      "Nie znalazłam wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych i nie będę udawać, że jest. Za to mało która gmina w powiecie ma tak żywy repertuar obrzędowy związany z jedzeniem — i to akurat jest udokumentowane.",
      "Tutejsze zespoły regionalne wystawiają trzy widowiska: Pieczenie Chleba, Wyskubek i Pucheroki. Pierwsze jest o wypieku, drugie o darciu pierza, czyli o pracy, przy której zawsze coś się jadło i przy której gadano do nocy. Trzecie to zwyczaj Niedzieli Palmowej, zachowany już tylko w kilku podkrakowskich wsiach — jedną z nich są tutejsze Tomaszowice.",
      "Zespołów jest tu praktycznie tyle, co sołectw: Bęblanie, Będkowianie, Białokościelanki, Czajowianki, Giebułtowianie, Modlnicanie, Modlniczanki, Tomaszowianie, Wierzchowianie, Wielkowsianki, do tego zespół seniorów, orkiestra dęta i koło gospodyń w Bęble.",
      "Dożynki obchodzi się osobno w kilku wsiach naraz, w długi weekend wokół piętnastego sierpnia, z korowodem wieńców i poczęstunkiem, który w gminnych relacjach opisano bez żadnego upiększania: chleb ze smalcem i kiszony ogórek.",
      "Gospodarstw rolnych jest w gminie ponad dwa tysiące, ale prawie wszystkie — dziewięćdziesiąt siedem i pół procent — mają poniżej pięciu hektarów. To znaczy, że rolnictwo jest tu dodatkiem do reszty życia, a nie zawodem, i że warzywa z własnej grządki trafiają wprost na stół, a nie do skupu.",
      "Dla urządzenia najsensowniejsze jest tu ciasto na chleb i bułki, gotowanie w większych ilościach na spotkania oraz pasty i smarowidła. Czego nie zrobi, mówię wprost: nie upiecze chleba, bo do tego potrzebny jest piekarnik, i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i siłą w rękach.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Wielka Wieś dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwunastu, bez żadnej dopłaty za odległość. Gmina liczy ponad siedemnaście tysięcy mieszkańców na czterdziestu ośmiu kilometrach kwadratowych i graniczy bezpośrednio z Krakowem od strony północno-zachodniej.",
    "Sołectwa to: Bębło, Będkowice, Biały Kościół, Czajowice, Giebułtów, Modlnica, Modlniczka, Prądnik Korzkiewski, Szyce, Tomaszowice, Wielka Wieś i Wierzchowie.",
    "Rzecz, która zaskakuje przyjezdnych: urząd gminy nie stoi w Wielkiej Wsi, tylko w Szycach, przy Placu Wspólnoty. Ośrodek kultury mieści się z kolei w Białym Kościele. Szyce leżą mniej więcej w geograficznym środku gminy.",
    "W Wierzchowiu jest Jaskinia Wierzchowska Górna — około tysiąca metrów korytarzy, z czego udostępniona trasa turystyczna liczy około siedmiuset metrów i zajmuje pół godziny z okładem. To najdłuższa trasa turystyczna spośród wszystkich udostępnionych jaskiń w Polsce. W Białym Kościele zaczyna się Dolina Kluczwody, a w rejonie Czajowic gmina styka się z Ojcowskim Parkiem Narodowym.",
    "Dojazd: przez gminę biegnie droga krajowa dziewięćdziesiąt cztery, a w Modlnicy zaczyna się Północna Obwodnica Krakowa, otwarta w grudniu dwa tysiące dwudziestego czwartego roku. Kursują tu krakowskie autobusy podmiejskie, między innymi linie dwieście, dwieście dwadzieścia, dwieście trzydzieści i trzysta dziesięć.",
  ],
  districts: [
    "Modlnica",
    "Modlniczka",
    "Szyce",
    "Giebułtów",
    "Biały Kościół",
    "Wielka Wieś",
    "Tomaszowice",
    "Bębło",
    "Będkowice",
    "Wierzchowie",
    "Czajowice",
    "Prądnik Korzkiewski",
  ],

  nearbyHeading: "Zielonki, Zabierzów i Skała też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Krakowem, Zielonkami, Zabierzowem, Jerzmanowicami-Przeginią i Skałą. Dojeżdżam do wszystkich gmin powiatu krakowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie dla tych, którzy chodzą po Jurze: Będkowice to sołectwo tej gminy i środkowy odcinek Doliny Będkowskiej rzeczywiście tu leży, ale jej górna część należy do Jerzmanowic-Przegini, a wylot pod Kobylanami do Zabierzowa. Dolina Kobylańska jest w całości zabierzowska.",
  ],
  nearbyTowns: [
    "Zielonki",
    "Zabierzów",
    "Jerzmanowice-Przeginia",
    "Skała",
    "Kraków",
    "Michałowice",
  ],

  about: blokOMnie("do gminy Wielka Wieś", "w powiecie krakowskim"),

  faq: [
    {
      question: "Mieszkam w Czajowicach albo w Bęble. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dwanaście sołectw traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy, bo gmina rozciąga się od granicy Krakowa aż po skraj Ojcowskiego Parku Narodowego.",
    },
    ...faqWspolne("w gminie Wielka Wieś"),
    {
      question: "Czy Thermomix upiecze chleb?",
      answer:
        "Nie upiecze i nie udaję, że tak — do pieczenia potrzebny jest piekarnik. Robi natomiast tę część, która jest najbardziej pracochłonna: wyrabia ciasto w kilka minut zamiast kwadransa ręcznie, także ciasto żytnie na zakwasie, przy którym ręce naprawdę bolą. Wiele osób zaczyna dzięki temu piec regularnie, bo znika bariera, przez którą wypiek odkładało się na weekend.",
    },
  ],

  geo: { lat: 50.1533249, lng: 19.8581109 },
};
