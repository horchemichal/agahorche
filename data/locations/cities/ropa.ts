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
 * ROPA — GMINA WIEJSKA w powiecie gorlickim.
 * 5 509 mieszkańców (31.12.2024), 49,1 km², 583 podmioty REGON.
 * TYLKO 3 SOŁECTWA: Ropa, Łosie, Klimkówka.
 * ⚠️ GMINA MŁODA ADMINISTRACYJNIE: utworzona 1 LIPCA 1991 R.
 * przez wydzielenie wsi Ropa z gminy Gorlice i Łosia z gminy Uście
 * Gorlickie. KLIMKÓWKĘ WŁĄCZONO 1 STYCZNIA 2000 R.
 *
 * OŚ STRONY: MAZIARZE Z ŁOSIA — wieś, która sprzedawała smar
 * całej Europie Środkowej.
 * ⚠️⚠️ NIE DAWAĆ OSI „ZAPORA I ZALEW” — należy do Czorsztyna
 * (`czorsztyn.ts`). Klimkówka wchodzi tu jako sekcja krajobrazowa.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ MAZIARSTWO W ŁOSIU: MAŹ (KOŁOMAŹ) — smar do drewnianych osi
 *   wozów, otrzymywany przez SUCHĄ DESTYLACJĘ ODPADÓW SOSNOWYCH;
 *   później mieszkańcy przeszli na handel smarami technicznymi
 *   i olejami kupowanymi w okolicznych rafineriach. Wozy zwane
 *   SEKERAMI, zaprzężone w konie.
 *   ⭐ ZASIĘG: w głąb Polski, Rosji, na LITWĘ, ŁOTWĘ, WĘGRY
 *   AŻ PO SIEDMIOGRÓD; wg strony gminy także Śląsk i Królestwo
 *   Kongresowe.
 *   ⭐⭐ REKORDOWY ROK 1934: WYRUSZYŁO 335 WOZÓW MAZIARSKICH.
 *   OSTATNI MAZIARZ WYJECHAŁ W LATACH 70. XX W.
 *   ŁOSIE BYŁO NAJBOGATSZĄ WSIĄ ŁEMKOWSKĄ — maziarstwo wytworzyło
 *   w międzywojniu warstwę zamożnych gospodarzy,
 * — ⭐ HERB GMINY: LAMPA NAFTOWA, CZARNA KROPLA ROPY I KOŁO BEZ
 *   JEDNEGO DZWONA — bezpośrednie nawiązanie do maziarstwa,
 * — ŁOSIE — HISTORIA: 1359 Kazimierz Wielki nadaje JANOWI GŁADYSZOWI
 *   dobra obejmujące Łosie; 1524 Andrzej Branicki nadaje sołtysostwo
 *   wołoskie WAŚKOWI Z ŁOSIA — ponowna lokacja na prawie wołoskim.
 *   AKCJA WISŁA: WYSIEDLONO PONAD 2/3 MIESZKAŃCÓW WSI; po 1956
 *   wielu Łemków wróciło,
 * — ZAGRODA MAZIARSKA — oddział Muzeum Dwory Karwacjanów
 *   i Gładyszów, OTWARTA 31 PAŹDZIERNIKA 2009 R. Zespół: CHYŻA
 *   Z 1899 R., stodoła, spichlerz oraz TRANSLOKOWANA CHYŻA
 *   Z BARTNEGO Z 1928 R. W ekspozycji WÓZ DYMITRA KAREŁY, jednego
 *   z ostatnich maziarzy. ⚠️ FILIA — cerkiew św. św. Kosmy i Damiana
 *   W BARTNEM — LEŻY W GMINIE SĘKOWA, nie tutaj,
 * — ⭐ ŚWIĘTO MAZIARZY ŁOSIAŃSKICH — doroczne, w Zagrodzie
 *   Maziarskiej, sierpień. Organizator: Muzeum Dwory Karwacjanów
 *   i Gładyszów, współorganizator GOK w Ropie. Program: zespoły
 *   regionalne z Łużnej i Ropy, KONKURS MAZIARSKI „TOCZĄCE SIĘ KOŁA”,
 *   warsztaty rzemieślnicze. ⚠️ NIE POTWIERDZONO elementu stricte
 *   kulinarnego w programie — nie pisać o degustacjach,
 * — KGW ŁOSIE — II MIEJSCE w konkursie „Wypiek Regionalny Ziemi
 *   Gorlickiej” podczas Agro Gorlice 2024. Potwierdzone,
 * — KLIMKÓWKA (SEKCJA, NIE OŚ): ⚠️ ZAPORA LEŻY W GMINIE ROPA —
 *   potwierdzone. ALE zbiornik rozciąga się ku gminie Uście Gorlickie
 *   — NIE PISAĆ, że jezioro leży w całości w tej gminie.
 *   Rzeka Ropa, 54,4 km biegu; budowę rozpoczęto w latach 70.,
 *   ODDANO DO EKSPLOATACJI 1994. Powierzchnia ok. 306 HA, długość
 *   ok. 5,5 km, szerokość 200–700 m, głębokość ponad 25 m;
 *   ZAPORA: WYSOKOŚĆ 34 M, ROZPIĘTOŚĆ 210 M. WIEŚ KLIMKÓWKĘ
 *   PRZENIESIONO W LATACH 80. Przełom rzeki zwany „Pieninami
 *   Gorlickimi”. I klasa czystości wód,
 * — ZABYTKI: DWÓR W ROPIE — początek XVI w., przebudowa 1803
 *   w stylu barokowo-klasycystycznym; właściciele: Siemieńscy
 *   (od ok. 1759), Skorchowscy (ok. 1850), Felicjan Ordynat
 *   Mieroszewski (1918), inż. Romuald Wowkonowicz (1935).
 *   DREWNIANY KOŚCIÓŁ Z 1761 R., ufundowany przez WILHELMA
 *   SIEMIEŃSKIEGO,
 * — DK 28 przez wieś Ropa (Gorlice – Ropica Polska – Szymbark –
 *   Ropa – Grybów – Nowy Sącz). KOLEJ: BRAK.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ⚠️⚠️ TWIERDZENIA, ŻE ŁUKASIEWICZ MIAŁ W ROPIE PIERWSZĄ W POLSCE
 *   RAFINERIĘ. Oficjalna strona gminy tak podaje, ale NIE
 *   POTWIERDZONO tego niezależnym źródłem. Standardowo rafinerie
 *   Łukasiewicza lokuje się w Ulaszowicach k. Jasła, Klęczanach
 *   i Polance. Dodatkowo Klęczany to oś zajęta przez Chełmiec,
 *   a lampa 1854 przez Gorlice. NIE UŻYWAĆ TEGO WĄTKU,
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Żadnego nie potwierdzono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (6,3%, 6 707,16 zł).
 *
 * PUŁAPKI:
 * — KLIMKÓWKA NALEŻY DO TEJ GMINY DOPIERO OD 1.01.2000 —
 *   wcześniej do Uścia Gorlickiego. Ważne przy opisach historycznych,
 * — RZEKA ROPA i WIEŚ ROPA — ta sama nazwa. Nie mylić z ropą naftową,
 * — BARTNE (skąd pochodzi translokowana chyża) TO GMINA SĘKOWA.
 */

export const ROPA: CityContent = {
  slug: "ropa",
  h1: "Thermomix Ropa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Ropa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Ropa: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do Ropy, Łosia i Klimkówki bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ropa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Ropa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Ropy, Łosia i Klimkówki przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie trzy sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Ropa – jak wygląda prezentacja?",
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
      heading: "Trzysta trzydzieści pięć wozów w jednym roku",
      paragraphs: [
        "W tysiąc dziewięćset trzydziestym czwartym roku z Łosia, jednej z trzech wsi tej gminy, wyruszyło trzysta trzydzieści pięć wozów. Wiozły maź — smar do drewnianych osi wozów, otrzymywany przez suchą destylację odpadów sosnowych. Jechały w głąb Polski, do Rosji, na Litwę, na Łotwę, na Węgry, aż po Siedmiogród.",
        "To był zawód wędrowny i pełnoprawny fach. Wozy nazywano tu sekerami, ciągnęły je konie, a maziarz wyjeżdżał na tygodnie albo miesiące. Z czasem, kiedy drewniane osie zaczęły znikać, mieszkańcy przerzucili się na handel smarami technicznymi i olejami kupowanymi w okolicznych rafineriach — i jeździli dalej.",
        "Skutek był taki, że Łosie stało się najbogatszą wsią łemkowską. Maziarstwo wytworzyło w międzywojniu warstwę zamożnych gospodarzy, co w tej części Beskidu Niskiego było rzadkością. Gmina ma to zresztą w herbie: lampę naftową, czarną kroplę i koło bez jednego dzwona.",
        "Historia skończyła się dwukrotnie. Najpierw w tysiąc dziewięćset czterdziestym siódmym, kiedy w ramach akcji „Wisła” wysiedlono z Łosia ponad dwie trzecie mieszkańców — po tysiąc dziewięćset pięćdziesiątym szóstym wielu Łemków wróciło. Potem w latach siedemdziesiątych, kiedy wyjechał ostatni maziarz.",
        "Zostało jednak coś więcej niż wspomnienie. Trzydziestego pierwszego października dwa tysiące dziewiątego roku otwarto w Łosiu Zagrodę Maziarską — oddział gorlickiego muzeum, na który składają się chyża z tysiąc osiemset dziewięćdziesiątego dziewiątego roku, stodoła, spichlerz i przeniesiona tu chyża z Bartnego z dwudziestego ósmego. W ekspozycji stoi wóz Dymitra Kareły, jednego z ostatnich maziarzy.",
        "Co roku w sierpniu odbywa się tu Święto Maziarzy Łosiańskich, z konkursem o nazwie „Toczące się koła”, warsztatami rzemieślniczymi i zespołami regionalnymi. Sama wieś jest zresztą stara: dobra obejmujące Łosie nadał Janowi Gładyszowi Kazimierz Wielki w tysiąc trzysta pięćdziesiątym dziewiątym roku, a w tysiąc pięćset dwudziestym czwartym Andrzej Branicki nadał sołtysostwo wołoskie niejakiemu Waśkowi z Łosia.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Ropa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o Ropę, Łosie czy Klimkówkę. Gmina ma tylko trzy sołectwa, ale rozciąga się wzdłuż doliny aż po zaporę, więc trasa wygląda inaczej. Na cenę to nie wpływa.",
        "Jeśli prowadzisz kwatery nad zalewem, wspomnij o tym od razu. Lipiec i sierpień są u Was zwykle zajęte od rana, a maj, wrzesień i cała zima znacznie spokojniejsze.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Ropa"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Trzy wsie na jednej drodze krajowej",
      paragraphs: [
        "Gmina liczy pięć i pół tysiąca mieszkańców w trzech wsiach i ma pięćset osiemdziesiąt trzy zarejestrowane podmioty gospodarcze — dużo jak na tę wielkość. Przez Ropę biegnie droga krajowa z Gorlic do Nowego Sącza, więc mieszka się tu w miejscu, przez które stale ktoś przejeżdża.",
        "Warto wiedzieć, że jako gmina Ropa jest bardzo młoda: powstała pierwszego lipca tysiąc dziewięćset dziewięćdziesiątego pierwszego roku, przez wydzielenie Ropy z gminy Gorlice i Łosia z Uścia Gorlickiego. Klimkówka dołączyła dopiero pierwszego stycznia dwutysięcznego. To znaczy, że trzy tutejsze wsie mają za sobą trzy różne historie administracyjne.",
        "Praca rozkłada się na kilka stron: część mieszkańców dojeżdża do Gorlic albo Grybowa, część żyje z ruchu nad zalewem, część prowadzi gospodarstwo. Wspólne jest to, że latem dzień nie ma stałych godzin, a zimą czasu jest nagle dużo.",
        "Najbardziej praktyczna rzecz jest w takim rytmie prosta. Danie jednogarnkowe wstawia się i wychodzi — gotuje się bez pilnowania, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie przypala się i nikt nie musi wracać, żeby zamieszać.",
        "Druga to gotowanie z zapasem i do zamrażarki, w gminie o sezonowym rytmie właściwie oczywiste. Zupy, sosy, pasty, ciasto na pierogi, chleb — robione seriami zimą, w jednym naczyniu, a odbierane latem.",
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
    heading: "Ropa i gotowanie — kuchnia trzech wsi o trzech historiach",
    paragraphs: [
      "Najkonkretniejszy fakt kulinarny tej gminy jest taki: koło gospodyń z Łosia zajęło drugie miejsce w konkursie na Wypiek Regionalny Ziemi Gorlickiej podczas dorocznej wystawy rolniczej, w konkurencji z dziewięcioma innymi kołami z okolicy.",
      "Powiem uczciwie, czego nie znalazłam: żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie. Nie potwierdziłam też, żeby Święto Maziarzy Łosiańskich miało w programie część stricte kulinarną — więc nie będę obiecywać degustacji.",
      "Ciekawa jest tu za to sama mieszanka. Ropa to wieś pogórzańska, Łosie łemkowska, a Klimkówka dołączyła do gminy dopiero w dwutysięcznym roku — i to po tym, jak starą wieś przeniesiono w latach osiemdziesiątych, żeby zrobić miejsce zalewowi. Trzy wsie, trzy tradycje, jedna gmina.",
      "Kuchnia jest więc różna w zależności od domu: gdzieś bliższa pogórzańskiej z ziemniakami, kapustą i ciastem drożdżowym, gdzieś łemkowskiej z kwaśnymi zupami, mąką i proziakami. Jednego wspólnego repertuaru nie ma i nie będę takiego wymyślać.",
      "Dla urządzenia najciekawsze są dwie rzeczy niezależnie od tradycji: dania długie, duszone godzinami w niskiej temperaturze, oraz wypieki — wyrabianie ciasta, ucieranie mas, mielenie maku. Czego nie zrobi, mówię wprost: nie upiecze i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i wysiłkiem.",
    ],
  },

  districtsHeading: "Gdzie w gminie Ropa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzech sołectw — Ropy, Łosia i Klimkówki — bez żadnej dopłaty za odległość. Gmina liczy pięć i pół tysiąca mieszkańców na czterdziestu dziewięciu kilometrach kwadratowych.",
    "W Łosiu działa Zagroda Maziarska, otwarta w dwa tysiące dziewiątym roku jako oddział gorlickiego muzeum: chyża z tysiąc osiemset dziewięćdziesiątego dziewiątego, stodoła, spichlerz i przeniesiona chyża z Bartnego. Co roku w sierpniu odbywa się tam Święto Maziarzy Łosiańskich z konkursem „Toczące się koła”.",
    "W samej Ropie stoi dwór z początku szesnastego wieku, przebudowany w tysiąc osiemset trzecim w stylu barokowo-klasycystycznym, oraz drewniany kościół z tysiąc siedemset sześćdziesiątego pierwszego, ufundowany przez Wilhelma Siemieńskiego.",
    "Klimkówka to najmłodsza część gminy — dołączyła w dwutysięcznym roku. Leży nad Jeziorem Klimkowskim, zbiornikiem oddanym do eksploatacji w tysiąc dziewięćset dziewięćdziesiątym czwartym: około trzystu sześciu hektarów, pięć i pół kilometra długości, ponad dwadzieścia pięć metrów głębokości. Zapora ma trzydzieści cztery metry wysokości i dwieście dziesięć rozpiętości; leży w tej gminie, choć samo jezioro sięga już terenu Uścia Gorlickiego. Starą wieś Klimkówkę przeniesiono w latach osiemdziesiątych. Przełom rzeki poniżej zapory nazywa się tu Pieninami Gorlickimi.",
    "Dojazd: kolei w gminie nie ma. Przez Ropę biegnie droga krajowa z Gorlic przez Szymbark i Grybów do Nowego Sącza.",
  ],
  districts: ["Ropa", "Łosie", "Klimkówka"],

  nearbyHeading: "Gorlice, Uście Gorlickie i Grybów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z gminą wiejską Gorlice, Uściem Gorlickim, Sękową i gminą wiejską Grybów. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo bywa mylące: rzeka Ropa i wieś Ropa noszą tę samą nazwę, ale z ropą naftową nie mają nic wspólnego. Cerkiew w Bartnem, filia tutejszej Zagrody Maziarskiej, leży już w gminie Sękowa.",
  ],
  nearbyTowns: [
    "Gorlice",
    "Uście Gorlickie",
    "Sękowa",
    "Grybów",
    "Lipinki",
    "Nowy Sącz",
  ],

  about: blokOMnie("do gminy Ropa", "w powiecie gorlickim"),

  faq: [
    {
      question: "Mieszkam w Łosiu albo Klimkówce. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Gmina ma trzy sołectwa i traktuję wszystkie tak samo. Przy umawianiu podaj nazwę wsi — to potrzebne wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Ropa"),
    {
      question: "Wynajmuję pokoje nad zalewem. Kiedy najlepiej się umówić?",
      answer:
        "Poza szczytem sezonu — maj, wrzesień i zima są u Was zwykle najspokojniejsze. Ale umawiam się też wieczorami w lipcu, jeśli tak Wam wygodniej. Jeśli gotujesz też dla gości, powiedz o tym: pokażę wtedy raczej rzeczy robione seriami niż jeden obiad na dwie osoby.",
    },
  ],

  geo: { lat: 49.5818, lng: 21.0643 },
};
