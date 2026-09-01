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
 * MĘDRZECHÓW — GMINA WIEJSKA w powiecie dąbrowskim.
 * 3 269 mieszkańców (31.12.2024), 44,4 km², mediana wieku 42,9.
 * SPADEK LUDNOŚCI 10,3% od 2002; w 2024: 28 urodzeń, 52 zgony.
 * 7 SOŁECTW: Mędrzechów, Wola Mędrzechowska, Grądy, Wólka Grądzka,
 * Kupienin, Odmęt, Wójcina.
 *
 * ⚠️⚠️ KOREKTA CZĘSTEGO BŁĘDU: MĘDRZECHÓW NIE JEST NAJMNIEJSZĄ
 * GMINĄ POWIATU. Najmniejszy — i ludnościowo (2 614), i powierzchniowo
 * (35,7 km²) — jest BOLESŁAW (`boleslaw-dabrowski.ts`). Mędrzechów
 * jest drugi od końca w obu wymiarach.
 *
 * OŚ STRONY: BLACHORZE — NAJPROSTSZY PRZEPIS W POWIECIE.
 * Kulinarnie unikalne i w 100% udokumentowane.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐⭐ „BLACHORZE” — LISTA PRODUKTÓW TRADYCYJNYCH, WPIS
 *   18 LIPCA 2013 R., gmina Mędrzechów. Proste placki z MĄKI, SODY
 *   I KWAŚNEGO MLEKA, PIECZONE BEZPOŚREDNIO NA BLASZE (stąd nazwa),
 * — HISTORIA (medrzechow.net): 1388 — GRĄDY w rachunkach dworu
 *   WŁADYSŁAWA JAGIEŁŁY (najstarsza wzmianka na terenie gminy).
 *   1389 — MĘDRZECHÓW JAKO WIEŚ KRÓLEWSKA W STAROSTWIE
 *   NOWOKORCZYŃSKIM, właściciel Gotard. 1474 — Krzesz z Kars.
 *   DO 1882 LUBOMIRSCY; od 1882 hr. ARTUR POTOCKI, potem żona Zofia;
 *   później Maria Łempicka.
 *   ⭐ XVI W. — WIEŚ SŁYNĘŁA Z HODOWLI BYDŁA.
 *   1768 — zabranie pastwisk mieszkańcom. 1783 — ZBIOROWA SKARGA
 *   O ODSZKODOWANIE I PACYFIKACJA WSI. 1846 — agitacja
 *   niepodległościowa Henryka Rogalińskiego, rabacja galicyjska.
 *   1913 — budowa drogi Mędrzechów–Kupienin. 1917 — samodzielna
 *   ekspozytura parafii. Na przełomie XIX/XX w. cegielnia i kółko
 *   rolnicze,
 * — DOM POMOCY SPOŁECZNEJ „DOM RADOSNEJ STAROŚCI” IM. JANA PAWŁA II
 *   W KUPIENINIE (Kupienin 35, 33-221) — potwierdzony w wykazie DPS
 *   woj. małopolskiego i przez PCPR w Dąbrowie Tarnowskiej.
 *   ⚠️ INFORMACJA ZE STRONY GMINY, że prowadzą go SIOSTRY
 *   BENEDYKTYNKI i że przyjmuje mieszkańców z całej Polski —
 *   NIE POTWIERDZONA NIEZALEŻNIE. LICZBY MIEJSC NIE POTWIERDZONO.
 *   Wspominać ostrożnie,
 * — WSPÓŁRZĘDNE (UG, Mędrzechów 434): 50,281883 / 20,94854.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. Nie potwierdzono,
 * — LICZBY PODMIOTÓW REGON dla gminy. Nie potwierdzono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE (11,4%, 7 161,93 zł).
 *   ⚠️ „Szacunkowa” stopa 13,8% z Polski w Liczbach to SZACUNEK
 *   SERWISU, nie dane GUS. NIE UŻYWAĆ,
 * — RUCHU PASAŻERSKIEGO KOLEJĄ. W całym powiecie go nie ma.
 *
 * PUŁAPKI:
 * — NIE PISAĆ „najmniejsza gmina powiatu” — to Bolesław,
 * — GRĄDY tej gminy to nie Grądy w innych powiatach.
 */

export const MEDRZECHOW: CityContent = {
  slug: "medrzechow",
  h1: "Thermomix Mędrzechów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Mędrzechów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Mędrzechów: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mędrzechów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Mędrzechów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Mędrzechowa, Woli Mędrzechowskiej, Kupienina i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie siedem sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mędrzechowie – jak wygląda prezentacja?",
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
      heading: "Mąka, soda i kwaśne mleko — trzy składniki na ministerialnej liście",
      paragraphs: [
        "Osiemnastego lipca dwa tysiące trzynastego roku na ministerialną Listę Produktów Tradycyjnych wpisano potrawę z gminy Mędrzechów o nazwie blachorze. Przepis składa się z trzech rzeczy: mąki, sody i kwaśnego mleka. Piecze się je bezpośrednio na blasze, bez tłuszczu — stąd nazwa.",
        "To chyba najprostszy przepis, jaki trafił na tę listę z całego Powiśla Dąbrowskiego, i właśnie dlatego wart uwagi. Blachorze to jedzenie z czasów, kiedy w domu było wszystko oprócz pieniędzy: kwaśne mleko brało się z tego, co i tak zostało, blachę miała każda kuchnia, a piekarnika w wielu domach nie było wcale.",
        "Sama gmina jest przy tym stara i ma bardzo konkretne daty. W tysiąc trzysta osiemdziesiątym ósmym roku Grądy pojawiają się w rachunkach dworu Władysława Jagiełły — to najstarsza wzmianka o miejscowości z terenu dzisiejszej gminy. Rok później Mędrzechów jest odnotowany jako wieś królewska w starostwie nowokorczyńskim.",
        "W szesnastym wieku wieś słynęła z hodowli bydła, co w tej okolicy oznaczało dobre pastwiska i realny dochód. I właśnie z pastwiskami wiąże się najbardziej dramatyczna historia tej gminy: w tysiąc siedemset sześćdziesiątym ósmym roku odebrano je mieszkańcom. Piętnaście lat później chłopi złożyli zbiorową skargę o odszkodowanie, po której wieś spacyfikowano.",
        "Właściciele zmieniali się przez wieki: do tysiąc osiemset osiemdziesiątego drugiego Lubomirscy, potem hrabia Artur Potocki i jego żona Zofia, później Maria Łempicka. Na przełomie dziewiętnastego i dwudziestego wieku działała tu cegielnia i kółko rolnicze, a w tysiąc dziewięćset trzynastym zbudowano drogę z Mędrzechowa do Kupienina.",
        "W samym Kupieninie działa dziś dom pomocy społecznej imienia Jana Pawła II, noszący nazwę Dom Radosnej Starości. Jest potwierdzony w wykazie placówek województwa małopolskiego; szczegółów dotyczących tego, kto go prowadzi i ilu ma mieszkańców, nie udało mi się zweryfikować niezależnie, więc ich nie podaję.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Mędrzechów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich siedem: Mędrzechów, Wola Mędrzechowska, Grądy, Wólka Grądzka, Kupienin, Odmęt i Wójcina. Gmina jest niewielka i zwarta, więc trasa jest krótka niezależnie od odpowiedzi.",
        "Jeśli w domu mieszkają dwie osoby, powiedz to od razu. Wtedy gotujemy realnie, tak jak jecie na co dzień, a nie pokazową porcję na sześć osób.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Mędrzechów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Wieś, która słynęła z bydła",
      paragraphs: [
        "W szesnastym wieku Mędrzechów słynął z hodowli bydła — na tyle, że kiedy w tysiąc siedemset sześćdziesiątym ósmym roku odebrano mieszkańcom pastwiska, doprowadziło to do zbiorowej skargi i pacyfikacji wsi. Pastwisko było tu majątkiem, a krowa podstawą gospodarstwa.",
        "Ślad tego został w kuchni i jest bardzo konkretny. Tutejszy przepis wpisany na ministerialną listę opiera się na kwaśnym mleku, a nabiał robiony w domu — twaróg, maślanka, śmietana, masło — był przez pokolenia najtańszym i najpewniejszym składnikiem, jaki gospodarstwo miało zawsze.",
        "Dziś krów jest mniej, ale nawyk został. W wielu domach nadal robi się twarożki, pasty i sery na własny użytek, a mleko kupuje się od sąsiada, nie w kartonie.",
        "Dla urządzenia to akurat dobra sytuacja, bo nabiał wymaga dwóch rzeczy, które maszyna robi lepiej od człowieka: równomiernego podgrzewania w niskiej, kontrolowanej temperaturze i długiego mieszania. Twarożek, serek, masa serowa czy krem wychodzą wtedy gładkie, a nie zwarzone.",
        "Na co dzień zostaje reszta: danie jednogarnkowe, które wstawia się rano i wychodzi z domu; gotuje się bez pilnowania, samo się wyłącza i czeka do wieczora. W gminie, z której do pracy jedzie się do Dąbrowy albo Tarnowa, to najbardziej praktyczne rozwiązanie, jakie znam.",
        "Druga rzecz to zapas. Podwójna porcja zupy, sos na kilka dni, pasty do kanapek — robione seriami w weekend, w jednym naczyniu, bo do większego sklepu i tak jedzie się rzadko.",
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
    heading: "Blachorze — mąka, soda, kwaśne mleko i rozgrzana blacha",
    paragraphs: [
      "Ta gmina ma własny wpis na ministerialnej Liście Produktów Tradycyjnych i jest to potrawa, o której warto powiedzieć więcej niż tylko nazwę. Blachorze wpisano osiemnastego lipca dwa tysiące trzynastego roku.",
      "Składników jest trzy: mąka, soda i kwaśne mleko. Piecze się je na rozgrzanej blasze, bez tłuszczu. Tyle. To przepis z czasów, kiedy w gospodarstwie było wszystko oprócz pieniędzy — kwaśne mleko zostawało samo, blachę miała każda kuchnia, a piekarnika w wielu domach nie było.",
      "Warto zauważyć, jak takie potrawy trafiają na listę. Nie dlatego, że są wyszukane, tylko dlatego, że ktoś potrafi udokumentować, że robi się je w tym miejscu od pokoleń. Blachorze są dowodem, że produkt tradycyjny to nie jest synonim produktu drogiego.",
      "Poza tym gotuje się tu jak w całym Powiślu Dąbrowskim: kapusta, ziemniaki, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe, przetwory z ogrodu. Historycznie wieś słynęła z hodowli bydła, więc mleko i to, co się z niego robi, jest tu składnikiem podstawowym.",
      "Przy blachorzach urządzenie zrobi jedną rzecz i powiem to całkiem szczerze: wymiesza ciasto. To wszystko — bo reszta polega na rozgrzaniu blachy i wprawie w przewracaniu. Znacznie więcej daje przy tym, co w tej kuchni jest pracochłonne: farszach, pastach, zupach na zapas, cieście drożdżowym i przetworach. Czego nie zrobi: nie upiecze i nie zastąpi ręki.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Mędrzechów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu, bez żadnej dopłaty za odległość. Gmina liczy nieco ponad trzy tysiące dwieście mieszkańców na czterdziestu czterech kilometrach kwadratowych.",
    "Sołectwa to: Mędrzechów, Wola Mędrzechowska, Grądy, Wólka Grądzka, Kupienin, Odmęt i Wójcina.",
    "Warto sprostować rzecz, która krąży w opisach powiatu: Mędrzechów nie jest najmniejszą gminą powiatu dąbrowskiego. Zarówno pod względem liczby mieszkańców, jak i powierzchni mniejszy jest sąsiedni Bolesław. Mędrzechów jest drugi od końca w obu tych kategoriach.",
    "Historia gminy sięga czternastego wieku: Grądy pojawiają się w rachunkach dworu Władysława Jagiełły w tysiąc trzysta osiemdziesiątym ósmym roku, a Mędrzechów rok później, jako wieś królewska w starostwie nowokorczyńskim. W Kupieninie działa dom pomocy społecznej imienia Jana Pawła II.",
    "Dojazd: kolei pasażerskiej w powiecie dąbrowskim nie ma. Samochodem najbliżej z Dąbrowy Tarnowskiej i ze Szczucina.",
  ],
  districts: [
    "Mędrzechów",
    "Wola Mędrzechowska",
    "Kupienin",
    "Grądy",
    "Wólka Grądzka",
    "Odmęt",
    "Wójcina",
  ],

  nearbyHeading: "Szczucin, Bolesław i Dąbrowa Tarnowska też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy ze Szczucinem, Bolesławiem, Radgoszczą i Dąbrową Tarnowską. Dojeżdżam do wszystkich gmin powiatu dąbrowskiego bez doliczania kosztu dojazdu.",
    "Przy umawianiu wystarczy, że podasz sołectwo.",
  ],
  nearbyTowns: [
    "Szczucin",
    "Bolesław",
    "Dąbrowa Tarnowska",
    "Radgoszcz",
    "Olesno",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Mędrzechów", "w powiecie dąbrowskim"),

  faq: [
    {
      question: "Mieszkam w Kupieninie albo Grądach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie siedem sołectw gminy traktuję dokładnie tak samo. Gmina jest niewielka, więc przy umawianiu wystarczy nazwa wsi.",
    },
    ...faqWspolne("w gminie Mędrzechów"),
    {
      question: "Robimy blachorze. Ten sprzęt się do tego nada?",
      answer:
        "Do wymieszania ciasta owszem, ale powiem szczerze: przy blachorzach to niewielka pomoc, bo cała robota polega na rozgrzanej blasze i wprawie. Znacznie więcej daje przy tym, co w Waszej kuchni zajmuje naprawdę dużo czasu — farszach, pastach, zupach na zapas, cieście drożdżowym i przetworach. Na prezentacji chętnie pokażę to na czymś, co realnie u Was powstaje.",
    },
  ],

  geo: { lat: 50.2819, lng: 20.9485 },
};
