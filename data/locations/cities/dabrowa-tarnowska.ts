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
 * DĄBROWA TARNOWSKA — GMINA MIEJSKO-WIEJSKA, stolica powiatu
 * dąbrowskiego. 20 883 mieszkańców (31.12.2024), 116,4 km².
 * Miasto 11 368, wieś 9 263 (dane urzędu, 31.12.2022).
 * REGON: 1 906 podmiotów; handel 25,4%, budownictwo 23,8%.
 *
 * OŚ STRONY: MIASTO DWÓCH WIELKICH ŚWIĄTYŃ — synagoga i drewniany
 * kościół. Dwa twarde, datowane fakty; nie powiela osi „duże firmy”
 * (Tarnów, Nowy Sącz).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ SYNAGOGA: zbudowana w latach 60. XIX w. — Wirtualny Sztetl
 *   precyzuje 1855–1860, UKOŃCZONA 1 KWIETNIA 1863 R.
 *   Projekt inż. ABRAHAM GOLDSTEIN, fundator IZAAK STERN.
 *   Eklektyzm z elementami mauretańskimi, TRZY KONDYGNACJE ARKAD.
 *   Zastąpiła drewnianą synagogę z ok. 1697. Uszkodzona w I wojnie,
 *   odnowiona 1936–1937. W okupację magazyn. Rejestr zabytków
 *   maj 1989. REMONT 2007–2012, KOSZT OK. 12 MLN ZŁ, dofinansowanie
 *   UE 9 mln zł. 5 CZERWCA 2012 — OTWARCIE OŚRODKA SPOTKANIA KULTUR.
 *   ⚠️⚠️ FORMUŁA „jedna z największych zachowanych synagog W POLSCE”
 *   NIE JEST JEDNOZNACZNIE POTWIERDZONA. PAP/dzieje.pl pisze
 *   „w WOJEWÓDZTWIE MAŁOPOLSKIM”. UŻYWAĆ WERSJI WOJEWÓDZKIEJ,
 * — ⭐ KOŚCIÓŁ WSZYSTKICH ŚWIĘTYCH (1771) — fundacja KAJETANA
 *   POTOCKIEGO, kanonika krakowskiego. DREWNIANY, konstrukcja
 *   zrębowa, barokowy, TRÓJNAWOWY BAZYLIKOWY; zaliczany
 *   do NAJWIĘKSZYCH DREWNIANYCH KOŚCIOŁÓW W POLSCE;
 *   NA SZLAKU ARCHITEKTURY DREWNIANEJ Małopolski. Krucyfiks
 *   późnogotycki z końca XV w.,
 * — HISTORIA ŻYDOWSKA (pisać rzeczowo, bez ornamentu):
 *   osadnictwo od końca XVI w.; 1697 drewniana synagoga;
 *   1702 samodzielna gmina; poł. XVIII w. — 147 rodzin;
 *   1893 szkoła fundacji barona Hirscha; 1908 jesziwa rabina
 *   Szabsi Katza. MAJ 1942 — 3 100 ŻYDÓW W MIEŚCIE. Getto
 *   od początku lipca 1942. 17 LIPCA 1942 pierwsza deportacja
 *   ~1 800 osób do Bełżca, ~100 zabitych na miejscu.
 *   18 WRZEŚNIA 1942 druga (500–800). Likwidacja getta na początku
 *   października 1942. OSTATNI ŻYD MIESZKAJĄCY W DĄBROWIE ZMARŁ
 *   W 2005 R.,
 * — HISTORIA MIASTA: lokacja przed 1419, POTWIERDZONA W 1422 R.
 *   przez Stanisława Ligęzę. ⚠️ en.wikipedia podaje pierwszą
 *   wzmiankę 1326 — rozbieżność, nie eksponować.
 *   MIKOŁAJ SPYTEK LIGĘZA (kasztelan sandomierski, zm. 1637) —
 *   renesansowy zamek, drukarnia, szpitale. Po 1637 LUBOMIRSCY
 *   do 1785. PRAWA MIEJSKIE OK. 1691–1693 (⚠️ przywilej zaginął,
 *   stąd niepewność). 1855 SIEDZIBA POWIATU. 1906 kolej.
 *   Ludność 6 117 (1939) → 4 520 (1945),
 * — BRAMA ZAMKOWA Z 1697 R. — jedyna pozostałość rezydencji
 *   Lubomirskich. ⚠️ en.wiki mówi o „ruinach pałacu” — realnie
 *   została brama,
 * — 12 SOŁECTW: Brnik, Gruszów Wielki, Gruszów Mały, Laskówka
 *   Chorąska, Lipiny, Morzychna, Nieczajna Dolna, Nieczajna Górna,
 *   Smęgorzów, Sutków, Szarwark, Żelazówka,
 * — ⭐ KULINARIA: „CHLEB ŻYTNI GRUSZOWSKI” — LISTA PRODUKTÓW
 *   TRADYCYJNYCH, WPIS 18 LIPCA 2013 R., z GRUSZOWA WIELKIEGO
 *   (sołectwo TEJ gminy). Pieczony wg tej samej receptury od ponad
 *   45 lat, NA MAŚLANCE.
 *   ⚠️ GRUSZÓW WIELKI NALEŻY DO TEJ GMINY, nie do Radgoszczy ani
 *   Olesna. W Małopolsce są też Gruszowy w gm. Pałecznica
 *   i Nowe Brzesko,
 * — STREFA AKTYWNOŚCI GOSPODARCZEJ W MORZYCHNIE — 12 ha na terenie
 *   byłego lądowiska, operator Krakowski Park Technologiczny;
 *   pierwszy zakład ALPHA INTERIOR (elementy meblowe, hala 5 tys. m²),
 *   budowa od 2024. ZOZ w Dąbrowie Tarnowskiej — szpital powiatowy,
 * — DK73 (Warszawa–Jasło), DW975, DW973; promienisty układ dróg.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ⚠️ RUCHU PASAŻERSKIEGO KOLEJĄ. Linia 115 „Szczucinka”
 *   (Tarnów–Szczucin, 50 km, otwarta 15.10.1906): RUCH PASAŻERSKI
 *   ZAWIESZONY W 2000 R., towarowy w 2006. Rewitalizacja
 *   (ok. 500 mln zł, zakończenie planowane 2029) TO ZAPOWIEDŹ,
 *   NIE FAKT. PISAĆ W TRYBIE PLANU,
 * — LISTY NAJWIĘKSZYCH PRYWATNYCH PRACODAWCÓW z liczbami
 *   zatrudnienia. NIE POTWIERDZONO,
 * — BEZROBOCIA I WYNAGRODZEŃ. ⚠️ 11,4% i 7 161,93 zł to dane
 *   POWIATOWE dla powiatu dąbrowskiego — identyczne na wszystkich
 *   stronach gminnych. NIE CYTOWAĆ JAKO GMINNYCH.
 *
 * PUŁAPKI:
 * — NIE MYLIĆ Z TARNOWEM (`tarnow.ts`) ani z DĄBROWĄ GÓRNICZĄ,
 * — POWIERZCHNIA: urząd podaje 115,89 km², GUS 116,4 km².
 */

export const DABROWA_TARNOWSKA: CityContent = {
  slug: "dabrowa-tarnowska",
  h1: "Thermomix Dąbrowa Tarnowska – prezentacja i zakup",
  seoTitle: "Przedstawiciel Thermomix Dąbrowa Tarnowska — cena",
  seoDescription:
    "Thermomix w Dąbrowie Tarnowskiej: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do miasta i sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Dąbrowa Tarnowska — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Dąbrowie Tarnowskiej. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Dąbrowy Tarnowskiej i wszystkich dwunastu sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

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
      heading: "Thermomix w Dąbrowie Tarnowskiej – jak wygląda prezentacja?",
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
      heading: "Dwie wielkie świątynie w jednym mieście",
      paragraphs: [
        "Dąbrowa Tarnowska ma dwa budynki, które w skali Małopolski są wyjątkowe, i oba są świątyniami — tyle że różnych wyznań i z różnych stuleci.",
        "Pierwszy to synagoga, budowana od tysiąc osiemset pięćdziesiątego piątego roku i ukończona pierwszego kwietnia tysiąc osiemset sześćdziesiątego trzeciego. Zaprojektował ją inżynier Abraham Goldstein, a ufundował Izaak Stern. Jest eklektyczna, z elementami mauretańskimi i trzema kondygnacjami arkad — należy do największych zachowanych synagog w województwie małopolskim.",
        "Po wojnie służyła jako magazyn i popadła w ruinę. Remont trwał od dwa tysiące siódmego do dwa tysiące dwunastego roku i kosztował około dwunastu milionów złotych, w tym dziewięć z funduszy europejskich. Piątego czerwca dwa tysiące dwunastego otwarto tu Ośrodek Spotkania Kultur.",
        "Warto powiedzieć, czyja to była synagoga, bo bez tego budynek jest tylko architekturą. Żydzi mieszkali w Dąbrowie od końca szesnastego wieku, samodzielną gminę mieli od tysiąc siedemset drugiego, a w połowie osiemnastego było ich sto czterdzieści siedem rodzin. W maju tysiąc dziewięćset czterdziestego drugiego roku mieszkało tu trzy tysiące sto osób. Siedemnastego lipca wywieziono do Bełżca około tysiąca ośmiuset, we wrześniu kolejnych kilkuset, a getto zlikwidowano na początku października. Ostatni Żyd mieszkający w Dąbrowie zmarł w dwa tysiące piątym roku.",
        "Druga świątynia stoi po drugiej stronie miasta i jest zbudowana z drewna. Kościół Wszystkich Świętych z tysiąc siedemset siedemdziesiątego pierwszego roku, ufundowany przez Kajetana Potockiego, kanonika krakowskiego, ma konstrukcję zrębową i układ trójnawowy bazylikowy — czyli wygląda jak murowana bazylika barokowa, tylko jest z bali. Zalicza się go do największych drewnianych kościołów w Polsce i figuruje na Szlaku Architektury Drewnianej.",
        "Samo miasto jest starsze od obu. Lokację potwierdził w tysiąc czterysta dwudziestym drugim roku Stanisław Ligęza, a największy rozkwit przyszedł za Mikołaja Spytka Ligęzy, kasztelana sandomierskiego zmarłego w tysiąc sześćset trzydziestym siódmym — to on zbudował tu renesansowy zamek, założył drukarnię i szpitale. Po Ligęzach przyszli Lubomirscy, a po zamku została dziś tylko brama z tysiąc sześćset dziewięćdziesiątego siódmego roku.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Dąbrowa Tarnowska?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o samo miasto, czy o jedno z dwunastu sołectw — od Gruszowa Wielkiego i Nieczajnej po Szarwark i Żelazówkę. Na cenę to nie wpływa, tylko na planowanie trasy.",
        "W mieście przydaje się jeszcze informacja, czy to blok, czy dom. Od tego zależy wyłącznie to, gdzie zaparkuję i którędy wniosę sprzęt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Dąbrowie Tarnowskiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Miasto powiatowe, do którego zjeżdża się z sześciu gmin",
      paragraphs: [
        "Dąbrowa Tarnowska jest stolicą powiatu od tysiąc osiemset pięćdziesiątego piątego roku i ta funkcja wciąż organizuje tu życie. Mieszka w niej ponad jedenaście tysięcy osób, drugie dziewięć tysięcy w sołectwach, a codziennie zjeżdżają się tu ludzie z sześciu okolicznych gmin: do szpitala, urzędu, szkoły średniej i na zakupy.",
        "Handel jest zresztą najliczniejszą branżą w gminie — ponad jedna czwarta zarejestrowanych firm — a zaraz za nim budownictwo. To znaczy, że wiele domów pracuje albo w sklepie, albo na budowie, i w obu przypadkach dzień kończy się późno.",
        "Kuchnia w takim domu musi się mieścić w wieczorze. Rozwiązanie jest banalne, ale skuteczne: danie jednogarnkowe wstawia się rano i wychodzi. Gotuje się bez pilnowania, samo się wyłącza i czeka do powrotu — nie stygnie i nie przypala się.",
        "Druga rzecz to zakupy. W mieście powiatowym robi się je raz na kilka dni, w większym sklepie, i wtedy najbardziej opłaca się gotować seriami: podwójna porcja zupy, sos na kilka dni, pasty na drugie śniadanie, ciasto. Wszystko w jednym naczyniu, jednego popołudnia.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może przygotować nastolatek, który wraca ze szkoły wcześniej niż dorośli. W rodzinie, w której oboje pracują w handlu, to nie jest ciekawostka, tylko realne odciążenie.",
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
    heading: "Chleb żytni gruszowski — pieczony na maślance od czterdziestu pięciu lat",
    paragraphs: [
      "W Gruszowie Wielkim, jednym z sołectw tej gminy, piecze się chleb żytni według tej samej receptury od ponad czterdziestu pięciu lat. Osiemnastego lipca dwa tysiące trzynastego roku trafił on na ministerialną Listę Produktów Tradycyjnych jako chleb żytni gruszowski.",
      "Receptura jest prosta i to jest w niej najlepsze: mąka żytnia i maślanka. Nie mleko, nie woda, nie drożdże piekarskie w dużej ilości — maślanka, czyli produkt uboczny przy robieniu masła, przez pokolenia najtańszy płyn w gospodarstwie.",
      "Warto od razu doprecyzować jedną rzecz, bo bywa mylona: Gruszów Wielki należy do gminy Dąbrowa Tarnowska, a nie do sąsiednich Radgoszczy czy Olesna. W Małopolsce jest zresztą kilka miejscowości o tej nazwie.",
      "Poza chlebem kuchnia jest tu nadwiślańska i rolnicza: ziemniaki, kapusta, fasola, zupy na kościach, wędliny robione w domu, ciasto drożdżowe. Powiśle Dąbrowskie ma zresztą całą grupę produktów wpisanych na listę w tym samym czasie, ale pochodzą one z sąsiednich gmin, więc nie będę ich przypisywać tej.",
      "Dla urządzenia najciekawsze przy takiej kuchni jest to, co poprzedza pieczenie i gotowanie: wyrabianie ciasta, mielenie, ucieranie, przygotowanie farszów. Ciasto na chleb da się w nim wyrobić bez wysiłku, tylko trzeba powiedzieć wprost, czego nie zrobi: nie upiecze i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie siłą rąk i czasem.",
    ],
  },

  districtsHeading: "Gdzie w gminie Dąbrowa Tarnowska dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich dwunastu sołectw, bez żadnej dopłaty za odległość. Gmina liczy blisko dwadzieścia jeden tysięcy mieszkańców na stu szesnastu kilometrach kwadratowych, z czego ponad jedenaście tysięcy przypada na miasto.",
    "Sołectwa to: Brnik, Gruszów Wielki, Gruszów Mały, Laskówka Chorąska, Lipiny, Morzychna, Nieczajna Dolna, Nieczajna Górna, Smęgorzów, Sutków, Szarwark i Żelazówka.",
    "W mieście warto zobaczyć dwie rzeczy. Synagogę z lat sześćdziesiątych dziewiętnastego wieku, po remoncie za dwanaście milionów złotych działającą od dwa tysiące dwunastego jako Ośrodek Spotkania Kultur. Oraz drewniany kościół Wszystkich Świętych z tysiąc siedemset siedemdziesiątego pierwszego roku, jeden z największych drewnianych kościołów w Polsce, na Szlaku Architektury Drewnianej. Po renesansowym zamku Ligęzów została brama z tysiąc sześćset dziewięćdziesiątego siódmego.",
    "W Morzychnie, na terenie dawnego lądowiska, działa dwunastohektarowa strefa aktywności gospodarczej, w której od dwa tysiące dwudziestego czwartego roku buduje się pierwszy zakład produkcyjny.",
    "Dojazd: przez miasto biegnie droga krajowa z Warszawy do Jasła oraz dwie drogi wojewódzkie — układ jest tu promienisty. Kolej to osobna sprawa: linia z Tarnowa do Szczucina, otwarta w tysiąc dziewięćset szóstym roku, straciła ruch pasażerski w dwutysięcznym, a towarowy w dwa tysiące szóstym. Zapowiedziano jej rewitalizację z zakończeniem około dwa tysiące dwudziestego dziewiątego roku, ale to na razie plan, nie rozkład jazdy.",
  ],
  districts: [
    "Dąbrowa Tarnowska — centrum",
    "Dąbrowa Tarnowska — osiedla",
    "Gruszów Wielki i Mały",
    "Nieczajna Dolna i Górna",
    "Smęgorzów",
    "Szarwark i Sutków",
    "Morzychna i Lipiny",
    "Brnik, Laskówka Chorąska, Żelazówka",
  ],

  nearbyHeading: "Olesno, Radgoszcz i Szczucin też są na mojej trasie",
  nearbyParagraphs: [
    "Jako stolica powiatu Dąbrowa jest naturalnym punktem, z którego rozjeżdżam się po całym Powiślu. Dojeżdżam do Olesna, Radgoszczy, Szczucina, Gręboszowa, Mędrzechowa i Bolesławia — do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Blisko jest też do Tarnowa, który ma u mnie osobną stronę.",
  ],
  nearbyTowns: [
    "Olesno",
    "Radgoszcz",
    "Szczucin",
    "Gręboszów",
    "Mędrzechów",
    "Tarnów",
  ],

  about: blokOMnie("do Dąbrowy Tarnowskiej", "w powiecie dąbrowskim"),

  faq: [
    {
      question: "Mieszkam w Nieczajnej albo Gruszowie. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie dwanaście sołectw gminy traktuję dokładnie tak samo jak samo miasto. Przy umawianiu podaj nazwę wsi — to potrzebne wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w Dąbrowie Tarnowskiej"),
    {
      question: "Pieczemy chleb w domu. Ten sprzęt się do tego nada?",
      answer:
        "Do wyrabiania ciasta jak najbardziej — i to jest właśnie ta część, która przy chlebie żytnim zajmuje najwięcej siły. Ciasto wyrabia maszyna, bez wysiłku i za każdym razem tak samo. Pieczenia nie zastąpi i nie będę tego obiecywać. Na prezentacji chętnie zrobię ciasto na Waszym przepisie zamiast na moim.",
    },
  ],

  geo: { lat: 50.1751, lng: 20.9866 },
};
