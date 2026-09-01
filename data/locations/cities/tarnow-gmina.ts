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
 * TARNÓW — GMINA WIEJSKA w powiecie tarnowskim.
 * ⚠️⚠️ TO ODRĘBNA GMINA OD MIASTA TARNOWA na prawach powiatu.
 * Miasto NIE należy do tej gminy. Najczęstsza pomyłka.
 * 26 483 mieszkańców (GUS, 31.12.2024), 82,7 km², 319 os./km²,
 * +20,8% od 2002, średni wiek 41,0.
 * 15 SOŁECTW przy 14 miejscowościach — Wola Rzędzińska dzieli się
 * na Wolę Rzędzińską I i II (dwóch sołtysów).
 *
 * OŚ STRONY: GMINA, KTÓRA URZĘDUJE W MIEŚCIE, DO KTÓREGO NIE NALEŻY.
 * Urząd Gminy Tarnów mieści się przy ul. Krakowskiej 19 w Tarnowie —
 * czyli w granicach miasta na prawach powiatu, które do gminy nie
 * wchodzi. Gmina opasuje Tarnów od zachodu, południa i wschodu, ale
 * własnego centrum nie ma.
 * ⚠️⚠️ TO NIE JEST OŚ DOJAZDOWA. Oś „zaplecze mieszkaniowe Tarnowa,
 * duże domy, dojazdy” należy do WOJNICZA i jest tu najgroźniejszą
 * kolizją — wszystkie cztery gminy pierścienia są zapleczem Tarnowa.
 * ⚠️ Wzrost +20,8% jest prawdziwy, ale oś demograficzna należy
 * do ZIELONEK. Nie używać jako tezy.
 * ⚠️ Nie mylić z osią WIELKIEJ WSI („gmina bez centrum, zespoły
 * regionalne”) — tam centrum nie ma wcale, tu centrum jest, tylko cudze.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — URZĄD: ul. Krakowska 19, 33-100 Tarnów (gmina.tarnow.pl/kontakt);
 *   współrzędne 50,01075 / 20,98126; tel. 14 688 01 01; wójt Grzegorz
 *   Kozioł,
 * — 15 SOŁECTW (wykaz sołtysów, gmina.tarnow.pl): Biała, Błonie,
 *   Jodłówka-Wałki, Koszyce Małe, Koszyce Wielkie, Łękawka, Nowodworze,
 *   Poręba Radlna, Radlna, Tarnowiec, WOLA RZĘDZIŃSKA I, WOLA
 *   RZĘDZIŃSKA II, Zawada, Zbylitowska Góra, Zgłobice,
 * — POŁOŻENIE: Stowarzyszenie Aglomeracja Tarnowska pisze, że gmina
 *   „otacza miasto Tarnów”. ⚠️ NIE POTWIERDZONO, czy to pełny
 *   pierścień — od północy do miasta przylega gmina LISIA GÓRA.
 *   Z rozmieszczenia sołectw wynika PODKOWA otwarta na północ.
 *   W treści użyta formuła „od zachodu, południa i wschodu”,
 * — ⭐ ROLESKI — zakład w Zbylitowskiej Górze / Zgłobicach. Producent
 *   MAJONEZÓW, MUSZTARD, KETCHUPÓW, DRESSINGÓW I PRZYPRAW. Produkcja
 *   60–70 TYS. TON ROCZNIE, ok. 350 ZATRUDNIONYCH, firma rodzinna
 *   w 100% z polskim kapitałem. Wytwarza też na zlecenie marki
 *   Hellmann's, Calvé i Knorr. Eksport do Włoch, Wielkiej Brytanii,
 *   Niemiec, Francji, Hiszpanii. MAREK ROLESKI W 1985 R. PRZEŁAMAŁ
 *   PAŃSTWOWY MONOPOL NA PRODUKCJĘ MAJONEZU (Gazeta Krakowska),
 * — LEIER POLSKA S.A. — siedziba główna: Wola Rzędzińska 155A.
 *   Producent materiałów budowlanych: stropy, systemy kominowe
 *   i wentylacyjne, kostka brukowa. Cztery zakłady w Polsce,
 *   kapitał zakładowy 37 mln zł,
 * — ZBYLITOWSKA GÓRA, LAS BUCZYNA — miejsce masowych egzekucji.
 *   Rejestr grobów wojennych Małopolskiego UW (obiekt 778): ok. 7 000
 *   osób narodowości żydowskiej — głównie kobiety, starcy i dzieci,
 *   wysiedleni z getta tarnowskiego i brzeskiego — oraz ok. 2 000
 *   Polaków; USTALONO TYLKO 109 NAZWISK; sześć mogił zbiorowych.
 *   Fundacja Zapomniane: ok. 6 000 Żydów z getta tarnowskiego,
 *   W TYM 800 DZIECI Z SIEROCIŃCA W GETCIE. Pierwsza wielka egzekucja
 *   11 CZERWCA 1942. Pierwsze tablice 1948, staraniem Komitetu
 *   Żydowskiego w Tarnowie. Corocznie odbywa się nabożeństwo
 *   ekumeniczne. ⚠️ ŹRÓDŁA RÓŻNIĄ SIĘ CO DO LICZB — w treści podany
 *   PRZEDZIAŁ i źródło. MUZEUM ANI OŚRODKA EDUKACYJNEGO TAM NIE MA:
 *   to teren leśny z cmentarzem wojennym, pomnikiem i tablicami,
 * — ZABYTKI: ZAWADA — drewniany kościół św. Marcina z XV w.;
 *   ZBYLITOWSKA GÓRA — kościół Podwyższenia Krzyża Świętego,
 *   murowany, 1464, parafia od XIII w., pierwsza pewna wzmianka 1326,
 *   nazwa „Zbylitowska” po raz pierwszy 1581; dwór z parkiem;
 *   klasztor Zakonu Najświętszego Serca Jezusowego (tajne komplety
 *   w czasie okupacji); FIGURA ŚW. FLORIANA Z 1767 — najstarsza tego
 *   typu w gminie. RADLNA — dwór księcia Eustachego Sanguszki, 1880.
 *   PORĘBA RADLNA — neogotycki kościół św. Piotra i Pawła.
 *   KOSZYCE WIELKIE — brama seklerska i figura św. Jana Nepomucena,
 * — CENTRUM HISTORII I SZTUKI W KOSZYCACH MAŁYCH — otwarte w 2024 r.
 *   w odrestaurowanym dworze z ok. 1900 r. (tzw. dwór Maschlera,
 *   zbudowany dla żydowskiego kupca, potem klasztor urszulanek,
 *   następnie mieszkania komunalne). Sala ekspozycji multimedialnej
 *   ok. 80 m², sala wystawiennicza, KAWIARNIA Z ZAPLECZEM KUCHENNYM,
 *   pracownia edukacyjna, piwnica regionalna. Koszt blisko 6 MLN ZŁ,
 *   połowa z Polskiego Ładu,
 * — GOSPODARKA: 2 328 podmiotów REGON (GUS 2019): rolnictwo 37,
 *   przemysł 257, budownictwo 426, usługi 888. Lesistość 12,9%
 *   (1 066 ha), 16,6 km ścieżek rowerowych. Inni pracodawcy
 *   wg investintarnow: TAREL, POLMARK, WES-BUD Plus, ROL-PEK
 *   L. Roleski, G&G Piekarnia,
 * — AUTOSTRADA A4: odcinek węzeł Tarnów Zachód – węzeł Tarnów Północ
 *   (Krzyż), 12,939 km, ruch od 29 LISTOPADA 2012, przebiega przez
 *   tereny gmin Wierzchosławice, Żabno, Lisia Góra, TARNÓW (GMINA)
 *   i miasta Tarnowa (archiwum GDDKiA),
 * — AUTOBUSY: linie A31 (Szczepanowice–Świebodzin przez Błonie,
 *   Zgłobice, Koszyce Wielkie, Tarnów, Tarnowiec, Nowodworze, Radlną)
 *   i A35 (Lichwin–Jodłówka-Wałki przez Rzuchową, Pleśną, Koszyce,
 *   Tarnów, Wolę Rzędzińską) — obsługa Koleje Małopolskie. Obie
 *   spinają tę gminę z gminą Pleśna.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DOJAZDÓW DO TARNOWA I DUŻYCH DOMÓW JAKO OSI. To oś WOJNICZA
 *   i najgroźniejsza kolizja w tej fali,
 * — WZROSTU LUDNOŚCI JAKO OSI. +20,8% to prawda, ale oś demograficzna
 *   należy do ZIELONEK,
 * — „PEŁNEGO PIERŚCIENIA” WOKÓŁ MIASTA. Nie potwierdzono; od północy
 *   przylega Lisia Góra. Użyta formuła o trzech stronach,
 * — MUZEUM W BUCZYNIE. Nie ma go. To teren leśny z cmentarzem
 *   wojennym, pomnikiem i tablicami,
 * — JEDNEJ LICZBY OFIAR w Buczynie. Źródła podają od ok. 9 do 10 tys.
 *   W treści przedział i wskazanie źródła urzędowego,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono żadnego —
 *   wyszukiwarka MRiRW blokuje pobieranie,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA,
 *   identyczna dla wszystkich gmin powiatu tarnowskiego.
 *
 * PUŁAPKI:
 * — GMINA WIEJSKA TARNÓW ≠ MIASTO TARNÓW. Osobne jednostki,
 * — DREWNIANY KOŚCIÓŁ MA TEŻ ZAWADA w tej gminie — a oś „drewniany
 *   kościół” przypisano SKRZYSZOWOWI. Tu wyłącznie wzmianka,
 * — ADRES ROLESKIEGO: Kompass podaje „Zgłobice, Zbylitowska Góra,
 *   ul. Spacerowa”. Obie miejscowości są w gminie — w treści bez
 *   licytowania się o numer,
 * — WOLA RZĘDZIŃSKA to DWA sołectwa przy jednej miejscowości.
 */

export const TARNOW_GMINA: CityContent = {
  slug: "tarnow-gmina",
  h1: "Thermomix gmina Tarnów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix gmina Tarnów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie wiejskiej Tarnów: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix gmina Tarnów — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie wiejskiej Tarnów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Woli Rzędzińskiej, Zgłobic, Zbylitowskiej Góry, Koszyc Wielkich i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie piętnaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Tarnów – jak wygląda prezentacja?",
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
      heading: "Gmina, która urzęduje w mieście, do którego nie należy",
      paragraphs: [
        "Urząd Gminy Tarnów stoi przy ulicy Krakowskiej dziewiętnaście — w Tarnowie. Czyli w granicach miasta na prawach powiatu, które do tej gminy nie należy i nigdy nie należało.",
        "To nie jest przeoczenie ani prowizorka. Gmina wiejska Tarnów opasuje miasto od zachodu, południa i wschodu — piętnaście sołectw rozłożonych podkową dookoła, od Zgłobic i Zbylitowskiej Góry po Wolę Rzędzińską i Jodłówkę-Wałki. Nie ma wśród nich miejscowości, która byłaby naturalną stolicą, więc urząd stoi tam, gdzie i tak wszyscy jeżdżą.",
        "Skalę tej gminy łatwo zresztą przeoczyć. Mieszka w niej ponad dwadzieścia sześć tysięcy osób — więcej niż w niejednym powiatowym mieście, i najwięcej ze wszystkich gmin powiatu tarnowskiego.",
        "Jest tu też jedna osobliwość administracyjna, o której warto wiedzieć przy podawaniu adresu: przy czternastu miejscowościach sołectw jest piętnaście, bo Wola Rzędzińska dzieli się na Wolę Rzędzińską pierwszą i drugą, z dwoma sołtysami.",
        "Gmina ma za to coś, czego nie ma żadna inna w okolicy: firmę, której produkty stoją w lodówkach w całej Polsce. W Zbylitowskiej Górze działa zakład Roleskiego, produkujący majonezy, musztardy, ketchupy i dressingi — od sześćdziesięciu do siedemdziesięciu tysięcy ton rocznie, przy około trzystu pięćdziesięciu zatrudnionych. Firma jest rodzinna, w stu procentach z polskim kapitałem, i wytwarza także na zlecenie marek Hellmann's, Calvé i Knorr. Marek Roleski przełamał w tysiąc dziewięćset osiemdziesiątym piątym roku państwowy monopol na produkcję majonezu.",
        "W Woli Rzędzińskiej ma z kolei główną siedzibę Leier Polska, producent stropów, systemów kominowych i kostki brukowej, z czterema zakładami w Polsce.",
        "I jest w tej gminie miejsce, o którym trzeba napisać bez ozdobników. W lesie Buczyna w Zbylitowskiej Górze Niemcy dokonywali masowych egzekucji. Pierwsza wielka odbyła się jedenastego czerwca tysiąc dziewięćset czterdziestego drugiego roku. Rejestr grobów wojennych Małopolskiego Urzędu Wojewódzkiego podaje około siedmiu tysięcy zamordowanych osób narodowości żydowskiej — głównie kobiet, starców i dzieci wysiedlonych z getta w Tarnowie i Brzesku — oraz około dwóch tysięcy Polaków. Fundacja Zapomniane wskazuje, że wśród ofiar było osiemset dzieci z sierocińca w tarnowskim getcie. Ustalono sto dziewięć nazwisk. Są tam cmentarz wojenny z sześcioma mogiłami zbiorowymi, pomnik i tablice postawione w tysiąc dziewięćset czterdziestym ósmym staraniem Komitetu Żydowskiego w Tarnowie. Co roku odbywa się tam nabożeństwo ekumeniczne.",
        "Z rzeczy nowszych: w dwa tysiące dwudziestym czwartym roku otwarto w Koszycach Małych Centrum Historii i Sztuki, urządzone w odrestaurowanym dworze z początku dwudziestego wieku — z salą multimedialną, pracownią edukacyjną, kawiarnią i piwnicą regionalną. Kosztowało blisko sześć milionów złotych.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Tarnów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo, nie samą nazwę gminy. Zgłobice leżą po zachodniej stronie Tarnowa, Jodłówka-Wałki po wschodniej — to przeciwne krańce podkowy i zupełnie inne trasy.",
        "Przy Woli Rzędzińskiej warto dodać, czy chodzi o pierwszą, czy o drugą. To jedna miejscowość, ale dwa sołectwa, a numeracja domów bywa myląca dla nawigacji.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Tarnów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Majonez, którego skład się zna",
      paragraphs: [
        "W gminie, w której produkuje się kilkadziesiąt tysięcy ton majonezu i musztardy rocznie, pisanie o robieniu sosów w domu może brzmieć przewrotnie. Ale to akurat najciekawszy kawałek tej rozmowy.",
        "Domowy majonez powstaje z trzech rzeczy: żółtka, oleju i odrobiny octu albo cytryny. Trwa to niecałą minutę. Problem, przez który mało kto go robi, jest zawsze ten sam — olej trzeba dodawać cienką strużką, ciągle ubijając, a jak się spieszy, masa się warzy. Tu olej wlewa się przez otwór w pokrywce, a mieszanie idzie ze stałą prędkością, więc warzenie praktycznie przestaje się zdarzać.",
        "Ta sama zasada dotyczy całej reszty. Musztarda z gorczycy, ketchup z pomidorów, sos czosnkowy, tatarski, koperkowy, dressing na jogurcie — wszystko z kilku składników, w kilkadziesiąt sekund, bez konserwantów i bez cukru dosypanego tam, gdzie nikt by go nie szukał.",
        "Nie chodzi o to, żeby przestać kupować gotowe. Dobry majonez ze sklepu jest dobry, a jego skład bywa krótszy niż niejednego domowego przepisu. Chodzi o to, że kiedy w lodówce nagle nie ma sosu, a goście są za pół godziny, przestaje to być problemem.",
        "Druga rzecz to sosy do dań, przy których zwykle sięga się po torebkę: beszamel, pieczarkowy, serowy, pomidorowy do makaronu. Wszystkie mają jedną wspólną trudność — trzeba mieszać, żeby nie było grudek i żeby nie przywarło. Tu mieszanie jest wliczone w cenę.",
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
    heading: "Gmina Tarnów i gotowanie — sosy, przyprawy i dwór z kuchnią",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych ani nazw działających tu kół gospodyń. Wyszukiwarka rejestru blokuje pobieranie, więc nie będę twierdzić ani że wpis jest, ani że go nie ma.",
      "To, co o tej gminie da się powiedzieć z pewnością, jest za to nietypowe. W Zbylitowskiej Górze działa zakład Roleskiego — jeden z największych polskich producentów majonezów, musztard, ketchupów i dressingów, wytwarzający od sześćdziesięciu do siedemdziesięciu tysięcy ton rocznie i eksportujący do Włoch, Wielkiej Brytanii, Niemiec, Francji i Hiszpanii. Firma jest rodzinna i w całości polska, a jej założyciel przełamał w tysiąc dziewięćset osiemdziesiątym piątym roku państwowy monopol na produkcję majonezu.",
      "Trudno o gminę, w której temat sosów byłby bardziej na miejscu. I to jest zresztą ciekawe zestawienie: obok fabryki, która produkuje majonez dla pół Polski, w domach robi się go z trzech składników w niecałą minutę. Jedno drugiemu nie przeczy.",
      "Od dwa tysiące dwudziestego czwartego roku w Koszycach Małych działa Centrum Historii i Sztuki, urządzone w dworze z początku dwudziestego wieku — z kawiarnią, zapleczem kuchennym, pracownią edukacyjną i piwnicą regionalną. To miejsce, w którym lokalne jedzenie ma gdzie się pokazać.",
      "Poza tym gotuje się tu jak w całym pierścieniu wokół Tarnowa: rosół, ziemniaki, kotlety, ciasto drożdżowe na niedzielę, przetwory z ogrodu.",
      "Dla urządzenia najsensowniejsze są tu sosy i dressingi robione od zera oraz wszystko, co wymaga równego mieszania — beszamel, ketchup, musztarda. Czego nie zrobi, mówię wprost: nie usmaży kotleta i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i pilnowaniem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Tarnów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich piętnastu, bez żadnej dopłaty za odległość. Gmina liczy ponad dwadzieścia sześć tysięcy mieszkańców na osiemdziesięciu trzech kilometrach kwadratowych i jest najludniejszą gminą powiatu tarnowskiego.",
    "Sołectwa to: Biała, Błonie, Jodłówka-Wałki, Koszyce Małe, Koszyce Wielkie, Łękawka, Nowodworze, Poręba Radlna, Radlna, Tarnowiec, Wola Rzędzińska pierwsza, Wola Rzędzińska druga, Zawada, Zbylitowska Góra i Zgłobice. Miejscowości jest czternaście — Wola Rzędzińska dzieli się na dwa sołectwa.",
    "Urząd gminy mieści się przy ulicy Krakowskiej dziewiętnaście, czyli w granicach miasta Tarnowa, które do tej gminy nie należy. Gmina opasuje miasto od zachodu, południa i wschodu.",
    "W Zbylitowskiej Górze, w lesie Buczyna, znajduje się cmentarz wojenny w miejscu masowych egzekucji z lat czterdziestych, z sześcioma mogiłami zbiorowymi, pomnikiem i tablicami. Co roku odbywa się tam nabożeństwo ekumeniczne. W tej samej miejscowości stoi murowany kościół z tysiąc czterysta sześćdziesiątego czwartego roku i figura świętego Floriana z tysiąc siedemset sześćdziesiątego siódmego.",
    "W Zawadzie zachował się drewniany kościół świętego Marcina z piętnastego wieku, w Radlnej dwór księcia Eustachego Sanguszki z tysiąc osiemset osiemdziesiątego, a w Koszycach Małych od dwa tysiące dwudziestego czwartego roku działa Centrum Historii i Sztuki.",
    "Dojazd: przez teren gminy przechodzi autostrada A4 na odcinku między węzłami Tarnów Zachód i Tarnów Północ. Kursują tu również autobusy aglomeracyjne Kolei Małopolskich.",
  ],
  districts: [
    "Wola Rzędzińska",
    "Zgłobice",
    "Zbylitowska Góra",
    "Koszyce Wielkie",
    "Koszyce Małe",
    "Tarnowiec",
    "Zawada",
    "Biała",
    "Błonie",
    "Jodłówka-Wałki",
    "Nowodworze",
    "Poręba Radlna",
    "Radlna",
    "Łękawka",
  ],

  nearbyHeading: "Lisia Góra, Skrzyszów i Pleśna też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Lisią Górą, Skrzyszowem, Pleśną, Wierzchosławicami, Wojniczem i Żabnem, a od wewnątrz z samym miastem Tarnowem. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Uwaga na nazwę: gmina wiejska Tarnów to odrębna jednostka od miasta Tarnowa, które jest miastem na prawach powiatu i do gminy nie należy. To najczęstsza pomyłka w tej okolicy — a urząd gminy stoi akurat w mieście.",
  ],
  nearbyTowns: [
    "Lisia Góra",
    "Skrzyszów",
    "Pleśna",
    "Wierzchosławice",
    "Wojnicz",
    "Żabno",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Tarnów", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Woli Rzędzińskiej albo w Zgłobicach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie piętnaście sołectw traktuję dokładnie tak samo. Przy Woli Rzędzińskiej warto dodać, czy chodzi o pierwszą, czy o drugą — to jedna miejscowość, ale dwa sołectwa, i numeracja potrafi zmylić nawigację.",
    },
    ...faqWspolne("w gminie Tarnów"),
    {
      question: "Czy domowy majonez naprawdę wychodzi lepiej niż kupny?",
      answer:
        "Nie zawsze lepiej — powiem to uczciwie, zwłaszcza w gminie, w której majonez się produkuje. Dobry majonez ze sklepu ma często krótszy skład niż niejeden domowy przepis. Różnica polega na czym innym: robisz go wtedy, kiedy go potrzebujesz, z tego, co masz, i wiesz dokładnie, co w nim jest. Trwa to niecałą minutę, a jedyna trudność — wlewanie oleju cienką strużką przy ciągłym ubijaniu — znika, bo olej leci przez otwór w pokrywce, a mieszanie idzie ze stałą prędkością. Ta sama zasada dotyczy musztardy, ketchupu i sosów do dań.",
    },
  ],

  geo: { lat: 50.01075, lng: 20.98126 },
};
