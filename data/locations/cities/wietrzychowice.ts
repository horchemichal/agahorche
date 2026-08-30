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
 * WIETRZYCHOWICE — GMINA WIEJSKA w powiecie tarnowskim, województwo
 * małopolskie.
 * ⚠️⚠️ NIE MYLIĆ z Wietrzychowicami w kujawsko-pomorskim (megality,
 * „polskie piramidy”) — to zupełnie inna gmina, która zdominuje wyniki
 * wyszukiwania.
 * 3 697 mieszkańców (GUS, 31.12.2024), 48,4 km², 78 os./km².
 * Średni wiek 44,3 — najstarsza z tej fali. −12,4% od 2002.
 * Wójt: Tomasz Banek.
 *
 * OŚ STRONY: NAJMNIEJSZA GMINA POWIATU TARNOWSKIEGO. 3 697 osób na
 * 48 km², czyli 3,43% powierzchni powiatu. W gminie tej wielkości
 * wszystko dzieje się przez ludzi, których się zna — dwa koła gospodyń
 * gotują na imprezę dla całej gminy, a największe sołectwo jest większe
 * od samej siedziby.
 * ⚠️⚠️ OŚ NIE MOŻE BYĆ O WODZIE, RZEKACH ANI WAŁACH. To oś SZCZUROWEJ
 * (woda, widły Wisły i Raby), a Szczurowa SĄSIADUJE z tą gminą.
 * Powódź 2010 wchodzi wyłącznie jako fakt historyczny w jednym akapicie.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — WIELKOŚĆ: 48,4 km² = 3,43% powierzchni powiatu (powiattarnowski.pl);
 *   3 697 mieszkańców. Określenie „najmniejsza gmina powiatu
 *   tarnowskiego” jest w powszechnym użyciu w mediach regionalnych —
 *   trzy artykuły Nasze Miasto Tarnów używają go wprost. ⚠️ ŻADNE źródło
 *   nie precyzuje, czy chodzi o powierzchnię czy o ludność. W treści
 *   podane obie liczby, bez kategorycznego rozstrzygania,
 * — DEMOGRAFIA: średni wiek 44,3; przyrost naturalny 2024 minus 44
 *   (−11,90 na 1000); saldo migracji 0. GUS 2019: 208 podmiotów REGON,
 *   PRACUJĄCYCH TYLKO 313 OSÓB, 1 166 mieszkań, śr. 93 m²,
 *   LASY ZALEDWIE 9,1 HA — gmina praktycznie bezleśna,
 * — MIEJSCOWOŚCI: ⚠️ ROZBIEŻNOŚĆ ŹRÓDEŁ (9 / 10 / 11 / 15). Pewne
 *   dziewięć: Demblin, Jadowniki Mokre, Miechowice Małe, Miechowice
 *   Wielkie, Nowopole, Pałuszyce, Sikorzyce, Wietrzychowice, Wola
 *   Rogowska. Dodatkowo w części źródeł: Jagodniki i Pasieka Otfinowska.
 *   Statutu NIE UDAŁO SIĘ POBRAĆ (BIP blokuje roboty),
 * — NAJWIĘKSZE SOŁECTWO: JADOWNIKI MOKRE (~950) są większe od samych
 *   Wietrzychowic (~685) — samorzad.gov.pl,
 * — HISTORIA: IX–XII w. tereny w centrum państwa Wiślan; pierwsza
 *   przeprawa przez Wisłę i komora celna pod Opatowcem w I poł. XII w.;
 *   GRÓD W DEMBLINIE strzegł przeprawy; Wietrzychowice powstały
 *   prawdopodobnie w kolonizacji XIII w., z inicjatywy klasztorów
 *   tynieckiego i jędrzejowskiego; 1772 po I rozbiorze WISŁA STAJE SIĘ
 *   GRANICĄ między zaborem austriackim a rosyjskim; 1833 pierwsze kółka
 *   rolnicze; 1912 Komitet Parafialny PSL; 1917–1924 budowa murowanego
 *   kościoła parafialnego; 17–19 stycznia 1945 wyzwolenie,
 *   ⚠️ Źródło (samorzad.gov.pl) ma usterki — błędnie przypisuje gminę
 *   do powiatu dąbrowskiego. Traktowane ostrożnie,
 * — POWÓDŹ 2010: woda zalała NIEMAL 50 KM² powierzchni gminy, czyli
 *   praktycznie całą; najbardziej ucierpiała WOLA ROGOWSKA — CZTEROMETROWA
 *   FALA po przerwaniu wału Uszwicy oddalonej o ok. 10 km (temi.pl),
 * — FASOLA „PIĘKNY JAŚ” Z DOLINY DUNAJCA — ChNP, rejestracja
 *   27 października 2011, obszar obejmuje m.in. gminę Wietrzychowice.
 *   Masa 1000 nasion 1 100–1 500 g, białko 20–24%, tłuszcz 1,0–2,5%,
 *   wilgotność do 18%, kształt nerkowaty, biała błyszcząca okrywa,
 *   smak lekko słodki, w gwarze „groch piechotny”,
 * — ŚWIĘTO FASOLI „PIĘKNY JAŚ”: 17 sierpnia 2024, sołectwo NOWOPOLE.
 *   Organizatorzy: wójt, sołectwo Nowopole, Gminne Centrum Kultury,
 *   KGW NOWOPOLE. Potrawy KGW Nowopole: smalec ze skwarkami, PIEROGI
 *   Z FASOLI, ciasto, fasolka po bretońsku. Program: warsztaty
 *   piekarskie na tradycyjnych patelniach, degustacja produktów
 *   pszczelich. KOŁA GOSPODYŃ POTWIERDZONE Z NAZWY: KGW Nowopole
 *   i KGW Miechowice Małe,
 * — XXIII DOŻYNKI POWIATU TARNOWSKIEGO odbyły się w Wietrzychowicach,
 *   wraz z Dniem Czystego Powietrza i Ekologii — najmniejsza gmina
 *   powiatu gospodarzem imprezy całego powiatu,
 * — NOWY URZĄD GMINY oddany 3 LUTEGO 2023, koszt ok. 3 MLN ZŁ
 *   (blisko 1 mln z dotacji rządowych, 650 tys. ze środków UE);
 *   nadbudowa poddasza, termomodernizacja, fotowoltaika, winda.
 *   Gmina buduje mieszkania w ramach SIM,
 * — PROM: bezpłatna przeprawa przez Dunajec Wietrzychowice–Siedliszowice;
 *   godziny 6:00–18:00, od 1 maja do 31 października 6:00–20:00; czynny
 *   cały rok poza wysoką wodą i lodem. ⚠️ Wykaz przypisuje przystań
 *   administracyjnie do gminy Żabno — w treści bez przypisania,
 * — SĄSIEDZI: Gręboszów, Koszyce, Opatowiec, Radłów, Szczurowa,
 *   Wojnicz, Żabno,
 * — WSPÓŁRZĘDNE (UG, Wietrzychowice 19): 50,1990780 / 20,7706810.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — WODY, RZEK I WAŁÓW JAKO OSI. To oś SZCZUROWEJ, gminy sąsiedniej.
 *   Powódź 2010 — jeden akapit historyczny, nie narracja,
 * — FRAZY „WIDŁY WISŁY I RABY”. To dosłownie Szczurowa. Nie używać,
 * — STATUTOWEJ LISTY SOŁECTW. Nie udało się pobrać. W treści wymienione
 *   dziewięć pewnych miejscowości plus wzmianka o kolejnych,
 * — TWIERDZENIA, ŻE KOSZYCE I OPATOWIEC LEŻĄ W ŚWIĘTOKRZYSKIM.
 *   ⚠️ To BŁĄD z materiału źródłowego: KOSZYCE to gmina w powiecie
 *   PROSZOWICKIM, województwo MAŁOPOLSKIE. Opatowiec faktycznie jest
 *   w świętokrzyskim. Nie powielać pomyłki,
 * — CENY ZA PROM. Źródła sprzeczne. Nie podana,
 * — WIĘKSZYCH PRACODAWCÓW, upraw poza fasolą, rozkładów autobusów.
 *   Niepotwierdzone,
 * — NUMERU ROZPORZĄDZENIA UE dla ChNP fasoli. Nie ustalony,
 * — NUMERU EDYCJI Święta Fasoli. Nie ustalony,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA, identyczna
 *   dla wszystkich gmin powiatu tarnowskiego.
 *
 * PUŁAPKI:
 * — WIETRZYCHOWICE KUJAWSKO-POMORSKIE (megality) to inna gmina,
 * — PASIEKA OTFINOWSKA figuruje w części źródeł i tu, i w gminie Żabno,
 * — MIECHOWICE MAŁE i MIECHOWICE WIELKIE to dwie różne wsie o zbliżonej
 *   liczbie mieszkańców (po ok. 520),
 * — SIEDZIBA nie jest największą miejscowością gminy — Jadowniki Mokre
 *   są liczniejsze.
 */

export const WIETRZYCHOWICE: CityContent = {
  slug: "wietrzychowice",
  h1: "Thermomix Wietrzychowice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Wietrzychowice — prezentacja",
  seoDescription:
    "Thermomix w gminie Wietrzychowice: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wietrzychowice — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Wietrzychowice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Wietrzychowic, Jadownik Mokrych, Woli Rogowskiej, Nowopola i pozostałych wsi gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina, każda wieś, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Wietrzychowice – jak wygląda prezentacja?",
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
      heading: "Najmniejsza gmina w powiecie",
      paragraphs: [
        "Wietrzychowice to trzy tysiące sześćset dziewięćdziesiąt siedem osób na czterdziestu ośmiu kilometrach kwadratowych. To zaledwie trzy i pół procenta powierzchni powiatu tarnowskiego, a media regionalne od lat piszą o tej gminie po prostu: najmniejsza w powiecie.",
        "Kilka liczb pokazuje, co to znaczy w praktyce. Podmiotów gospodarczych zarejestrowanych jest tu nieco ponad dwieście, a pracujących poza rolnictwem liczono w ostatnim pełnym zestawieniu trzysta trzynaście osób. Lasów jest dziewięć hektarów — dziewięć, nie dziewięćset. Średni wiek mieszkańca wynosi czterdzieści cztery lata i jest najwyższy w całej tej okolicy.",
        "Jest też szczegół, który mówi o tej gminie więcej niż statystyka: siedziba nie jest jej największą miejscowością. W Jadownikach Mokrych mieszka około dziewięciuset pięćdziesięciu osób, w samych Wietrzychowicach mniej więcej sześćset osiemdziesiąt pięć.",
        "W gminie tej wielkości wszystko dzieje się przez ludzi, których się zna z imienia. Święto Fasoli Piękny Jaś, największa impreza roku, odbyło się w sierpniu dwa tysiące dwudziestego czwartego w Nowopolu, a przygotowały je wójt, sołectwo, gminne centrum kultury i koło gospodyń z tej właśnie wsi. Kół gospodyń potwierdzonych z nazwy jest tu dwa: w Nowopolu i w Miechowicach Małych. To wystarczy, żeby nakarmić całą gminę.",
        "A gmina bywa gospodarzem imprez znacznie od siebie większych. Dwudzieste trzecie Dożynki Powiatu Tarnowskiego odbyły się właśnie tutaj — najmniejsza gmina przyjęła u siebie święto plonów całego powiatu.",
        "Historia sięga tu bardzo głęboko i wiąże się z jednym: z przeprawą. W dziewiątym i dziesiątym wieku te tereny leżały w centrum państwa Wiślan, a w pierwszej połowie dwunastego wieku działała pod Opatowcem przeprawa przez Wisłę i komora celna. Strzegł jej gród w Demblinie, do dziś jednej z tutejszych wsi. Sama wieś Wietrzychowice powstała prawdopodobnie w trzynastowiecznej kolonizacji prowadzonej przez klasztory z Tyńca i Jędrzejowa.",
        "Po pierwszym rozbiorze Wisła stała się granicą między zaborem austriackim a rosyjskim — i do dziś jest granicą województwa. W tysiąc osiemset trzydziestym trzecim powstały tu pierwsze kółka rolnicze, w tysiąc dziewięćset dwunastym Komitet Parafialny Polskiego Stronnictwa Ludowego. W dwa tysiące dziesiątym roku gminę zalała wielka woda — w Woli Rogowskiej przeszła czterometrowa fala po przerwaniu wału Uszwicy oddalonej o dziesięć kilometrów. Zalane zostało wtedy niemal pięćdziesiąt kilometrów kwadratowych, czyli praktycznie cała gmina.",
        "Dziś w centrum wsi stoi nowy budynek urzędu, oddany trzeciego lutego dwa tysiące dwudziestego trzeciego roku za około trzy miliony złotych, z windą i fotowoltaiką. Gmina buduje też mieszkania w ramach społecznej inicjatywy mieszkaniowej.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Wietrzychowice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj nazwę wsi. Gmina jest mała, więc różnice w trasie są niewielkie, ale Miechowice Małe i Miechowice Wielkie to dwie osobne miejscowości i nawigacja potrafi je pomylić.",
        "Jeśli jesteście w kole gospodyń i chodzi o pokaz dla kilku osób naraz, powiedzcie od razu. W gminie tej wielkości takie spotkanie ma zwykle więcej sensu niż prezentacja w czterech ścianach, a planuję je inaczej: więcej porcji, inne przepisy, więcej czasu na pytania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Wietrzychowice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Fasola, która potrzebuje swojego czasu",
      paragraphs: [
        "Ta gmina leży w obszarze objętym Chronioną Nazwą Pochodzenia fasoli Piękny Jaś z Doliny Dunajca — i to nie jest tu odległa ciekawostka z rejestru, tylko coś, co rośnie na tutejszych polach i ma własne święto w sierpniu.",
        "Fasola ma jednak w kuchni jedną cechę, która zniechęca: trzeba ją namoczyć przez noc, a potem gotować długo i pilnować, żeby nie wykipiała ani nie przywarła. Dlatego w wielu domach robi się ją raz na jakiś czas, a nie wtedy, gdy się ma ochotę.",
        "Pierwsza rzecz, która to zmienia, jest banalna: urządzenie gotuje ją bez nadzoru, z ustawioną temperaturą, i samo się wyłącza. Nie ma wykipień i nie ma przypalonego dna. Nastawia się i wraca.",
        "Warto przy tym wiedzieć, że ta odmiana gotuje się krócej niż zwykła fasola tyczna — ma cieńszą i miększą okrywę. Czasy z przepisów z internetu bywają dla niej zawyżone i łatwo ją rozgotować.",
        "Druga rzecz to wszystko, co powstaje z fasoli już ugotowanej, w tym samym naczyniu. Pasta na kanapki, zupa krem, farsz do pierogów — koło gospodyń z Nowopola robi zresztą pierogi z fasoli i to jest przepis wart podpatrzenia. Do tego smalec ze skwarkami, który przy takim daniu jest obowiązkowy.",
        "Trzecia jest o tym, że fasola najlepiej smakuje na drugi dzień. Ugotowana w większej ilości i podzielona na porcje wchodzi potem do zupy, do sałatki i na pastę bez dogotowywania czegokolwiek.",
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
    heading: "Wietrzychowice i gotowanie — Piękny Jaś, dwa koła gospodyń i święto w sierpniu",
    paragraphs: [
      "Fasola Piękny Jaś z Doliny Dunajca ma Chronioną Nazwę Pochodzenia — najmocniejsze unijne oznaczenie, jakie może dostać produkt spożywczy. Zarejestrowano ją dwudziestego siódmego października dwa tysiące jedenastego roku jako trzydziesty drugi polski produkt w tym systemie, a obszar chroniony obejmuje jedenaście gmin, w tym Wietrzychowice.",
      "Specyfikacja jest bardzo konkretna. Tysiąc nasion waży od tysiąca stu do tysiąca pięciuset gramów, białka jest od dwudziestu do dwudziestu czterech procent, tłuszczu od jednego do dwóch i pół, wilgotność nie może przekroczyć osiemnastu procent. Ziarno ma kształt nerkowaty i białą, błyszczącą okrywę, a smak jest delikatny i lekko słodki. W miejscowej gwarze nazywa się ją grochem piechotnym.",
      "Raz w roku odbywa się tu Święto Fasoli Piękny Jaś. W dwa tysiące dwudziestym czwartym wypadło siedemnastego sierpnia w Nowopolu; przygotowały je gminne centrum kultury i tamtejsze koło gospodyń. Na stole były wtedy smalec ze skwarkami, pierogi z fasoli, fasolka po bretońsku i ciasto, a w programie warsztaty piekarskie na tradycyjnych patelniach.",
      "Kół gospodyń potwierdzonych z nazwy jest w gminie dwa: w Nowopolu i w Miechowicach Małych. W gminie liczącej trzy i pół tysiąca osób to wystarcza, żeby nakarmić wszystkich naraz — i tak było, kiedy Wietrzychowice przyjmowały dwudzieste trzecie Dożynki Powiatu Tarnowskiego.",
      "Dla urządzenia najsensowniejsze jest tu gotowanie fasoli bez pilnowania i to, co powstaje z niej potem: pasty, kremy, farsze. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i staniem przy garnku.",
    ],
  },

  districtsHeading: "Do których miejscowości gminy Wietrzychowice dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez żadnej dopłaty za odległość. Gmina liczy niespełna trzy i pół tysiąca mieszkańców na czterdziestu ośmiu kilometrach kwadratowych i jest najmniejsza w powiecie tarnowskim.",
    "Miejscowości to: Wietrzychowice, Jadowniki Mokre, Miechowice Małe, Miechowice Wielkie, Sikorzyce, Wola Rogowska, Demblin, Nowopole i Pałuszyce; część opracowań wymienia dodatkowo Jagodniki i Pasiekę Otfinowską.",
    "Największą wsią gminy nie jest jej siedziba, tylko Jadowniki Mokre — mieszka tam około dziewięciuset pięćdziesięciu osób, o dwieście pięćdziesiąt więcej niż w samych Wietrzychowicach.",
    "Gmina leży w północno-zachodnim krańcu powiatu, tam gdzie Dunajec wpada do Wisły; Wisła jest tu granicą województwa małopolskiego. Przez Dunajec kursuje bezpłatna przeprawa promowa do Siedliszowic, czynna od szóstej rano, o ile pozwala na to stan wody.",
    "Dojazd: kolei w gminie nie ma. W samych Wietrzychowicach od lutego dwa tysiące dwudziestego trzeciego roku stoi nowy budynek urzędu gminy, z windą i instalacją fotowoltaiczną.",
  ],
  districts: [
    "Wietrzychowice",
    "Jadowniki Mokre",
    "Wola Rogowska",
    "Miechowice Wielkie",
    "Miechowice Małe",
    "Sikorzyce",
    "Demblin",
    "Nowopole",
    "Pałuszyce",
  ],

  nearbyHeading: "Radłów, Żabno i Szczurowa też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Radłowem, Żabnem, Gręboszowem, Szczurową, Wojniczem i Koszycami. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Uwaga na nazwę: to Wietrzychowice w Małopolsce, w powiecie tarnowskim, a nie Wietrzychowice w kujawsko-pomorskim, znane z megalitów nazywanych polskimi piramidami. To zupełnie inna gmina i wyszukiwarki nagminnie je mylą.",
  ],
  nearbyTowns: [
    "Radłów",
    "Żabno",
    "Gręboszów",
    "Szczurowa",
    "Wojnicz",
    "Koszyce",
  ],

  about: blokOMnie("do gminy Wietrzychowice", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Jadownikach Mokrych albo w Woli Rogowskiej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie miejscowości gminy traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy, a przy Miechowicach warto dodać, czy chodzi o Małe, czy o Wielkie.",
    },
    ...faqWspolne("w gminie Wietrzychowice"),
    {
      question: "Czy zrobisz pokaz dla koła gospodyń?",
      answer:
        "Tak i w tak małej gminie to często ma większy sens niż prezentacja dla jednej rodziny. Takie spotkanie planuję inaczej: przywożę więcej składników, dobieram przepisy pod większą liczbę porcji i zostawiam więcej czasu na pytania. Chętnie pokażę też, co da się zrobić z tutejszej fasoli — pastę, krem, farsz — bo to akurat te rzeczy, przy których urządzenie oszczędza najwięcej czasu. Warto uprzedzić o liczbie osób kilka dni wcześniej.",
    },
  ],

  geo: { lat: 50.199078, lng: 20.770681 },
};
