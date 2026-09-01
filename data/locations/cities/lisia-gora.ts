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
 * LISIA GÓRA — GMINA WIEJSKA w powiecie tarnowskim.
 * 15 655 mieszkańców (GUS, 31.12.2024), 104,8 km², 148 os./km²,
 * +18,0% od 2002, ŚREDNI WIEK 38,6 — najniższy w pierścieniu
 * tarnowskim. Lesistość 14,1% (1 474 ha).
 * 11 SOŁECTW.
 *
 * OŚ STRONY: TORY, PO KTÓRYCH NIC NIE JEŹDZI OD 2000 ROKU —
 * I POJADĄ ZNOWU. Linia kolejowa nr 115 Tarnów–Szczucin, zbudowana
 * w 1906 r., przechodzi przez gminę ze stacją ŁUKOWA TARNOWSKA
 * (km 9,869; Łukowa jest sołectwem gminy). Ruch pasażerski ZAWIESZONY
 * W 2000 R., towarowy zakończony w 2006. Odbudowa ma kosztować
 * OK. 250 MLN ZŁ; pierwszy etap Tarnów–Żabno możliwy w 2027,
 * cała linia do Szczucina DO KOŃCA 2029 R.; przetarg „zaprojektuj
 * i wybuduj” ogłoszony w pierwszej połowie 2026 r.
 * ⚠️⚠️ ROZDZIELENIE OD ZAJĘTYCH OSI: ZABIERZÓW ma DZIAŁAJĄCE
 * przystanki kolejowe; MICHAŁOWICE mają BRAK KOLEI W OGÓLE.
 * Tutaj kolej JEST, ale ŚPI — i to jest trzeci, osobny przypadek.
 * ⚠️ Wzrost +18,0% jest prawdziwy, ale oś demograficzna należy
 * do ZIELONEK. Nie używać jako tezy.
 * ⚠️ Dojazdy do Tarnowa to oś WOJNICZA. Nie używać.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — LINIA 115: przebieg wg bazakolejowa.pl — Tarnów (km 0,766),
 *   Tarnów Północny, Tarnów Klikowa, ŁUKOWA TARNOWSKA (km 9,869),
 *   Łęg Tarnowski, Niedomice, Żabno, … Szczucin (km 48,800).
 *   Budowa linii 1906 r. (lisiagora.pl/historia). Ruch pasażerski
 *   zawieszony 2000, towarowy 2006 (portalsamorzadowy.pl).
 *   Odbudowa ok. 250 mln zł, etap Tarnów–Żabno możliwy 2027,
 *   całość do końca 2029; zapowiedź wicepremiera Władysława
 *   Kosiniaka-Kamysza. ⚠️ KONKRETNE PRZYSTANKI PLANOWANE NA
 *   ODBUDOWANEJ LINII — NIEPOTWIERDZONE. Nie wymieniać,
 * — 11 SOŁECTW (lisiagora.pl): Breń, Brzozówka, Kobierzyn, Lisia Góra,
 *   Łukowa, Nowa Jastrząbka, Nowe Żukowice, Pawęzów, Stare Żukowice,
 *   Śmigno, Zaczarnie. Gmina podaje własną powierzchnię 105 km²
 *   (13,1% powiatu),
 * — DROGI: DROGA KRAJOWA NR 73 Tarnów–Kielce przechodzi przez gminę,
 *   do tego DW 984. Odległości wg gminy: Tarnów 10 km, KRAKÓW 88 KM,
 *   Kielce 125 km,
 * — AUTOSTRADA A4 PRZECHODZI PRZEZ GMINĘ — potwierdzone archiwum
 *   GDDKiA: odcinek węzeł Tarnów Zachód – węzeł Tarnów Północ (Krzyż),
 *   12,939 km, ruch od 29 listopada 2012, przebiega przez tereny gmin
 *   Wierzchosławice, Żabno, LISIA GÓRA, Tarnów (gmina) i miasta
 *   Tarnowa,
 * — HISTORIA (lisiagora.pl/historia): ceramika powierzchniowa wskazuje
 *   zasiedlenie wzgórza od IX–X w.; 1354 PRZYWILEJ KAZIMIERZA WIELKIEGO
 *   zezwalający lokować wieś „na surowym korzeniu” nad rzeką Czarną,
 *   na prawie niemieckim — pierwsza wzmianka dokumentowa;
 *   1386 Władysław Jagiełło nadaje wsie Janowi Vilidusowi z Tarnowa,
 *   wchodzą do dóbr Tarnowskich; 1448 Rafał z Tarnowa otrzymuje Lisią
 *   Górę; 1586 poświadczona SZKOŁA PARAFIALNA za hetmana Jana
 *   Tarnowskiego; 1728 SANGUSZKOWIE budują BAROKOWY KOŚCIÓŁ w miejsce
 *   drewnianego, 1729 dobra przejmuje Paweł Karol Sanguszko;
 *   1845–1847 głód, cholera, nieurodzaj; 1846 konflikt o pańszczyznę;
 *   1863 szlak ochotników powstania styczniowego; 1887 Ochotnicza
 *   Straż Ogniowa z inicjatywy Tadeusza Artwińskiego; 1906 budowa
 *   linii kolejowej; I wojna — front przeszedł TRZYKROTNIE, w gminie
 *   jeden cmentarz wojenny z 46 pochowanymi; II wojna — placówka AK
 *   „Ligia” od jesieni 1939, 262 żołnierzy w 1944 r., akcja „Kośba”
 *   10 czerwca 1944,
 * — PAWĘZÓW (lisiagora.pl): 1 169 mieszkańców (1.01.2025), 4,51 km²,
 *   5 km od Tarnowa; osada od ok. XV w., wymieniona w Księdze uposażeń
 *   diecezji krakowskiej z 1529 r. jako wieś parafii Lisia Góra;
 *   w XVI w. 24 kmieci; w XIX w. 545 mieszkańców w 95 domach,
 * — GOSPODARKA: GUS 2019 — 1 150 podmiotów REGON (rolnictwo 16,
 *   przemysł 149, budownictwo 253, usługi 747). Portal InvestInTarnów
 *   wymienia jako największe firmy gminy: Unopol, Brzozcar, Budoland,
 *   Sferamet, Żelmet oraz Furioso — ośrodek jazdy konnej w stylu
 *   western; podaje 640 firm. ⚠️ Rozbieżność z GUS wynika z różnych
 *   definicji,
 * — DOŻYNKI GMINNE 2026: sobota 29 sierpnia, Gminne Centrum
 *   Rekreacyjne w Lisiej Górze. Program: 15:00 msza, 16:00 korowód
 *   dożynkowy, obrzędy, POCZĘSTUNEK PRZYGOTOWANY PRZEZ KOŁA GOSPODYŃ
 *   WIEJSKICH, 21:30 zabawa. Konkurs na „Najpiękniejszą Zagrodę
 *   Dożynkową”. Wystąpili m.in. Świerczkowiacy, Chór FOX VOX,
 *   Kabaret Paranienormalni,
 * — ADRES: Urząd Gminy Lisia Góra, ul. 1 Maja 7, 33-140 Lisia Góra;
 *   współrzędne 50,08433 / 21,02351.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DOJAZDÓW DO TARNOWA JAKO OSI. To oś WOJNICZA,
 * — WZROSTU LUDNOŚCI JAKO OSI. +18,0% to prawda, ale oś demograficzna
 *   należy do ZIELONEK,
 * — DZIAŁAJĄCEJ KOLEI. Ruch pasażerski nie istnieje od 2000 r.
 *   NIE PISAĆ, że gmina ma połączenie kolejowe,
 * — PRZYSTANKÓW PLANOWANYCH na odbudowanej linii. Niepotwierdzone,
 * — STREFY PRZEMYSŁOWEJ. NIE POTWIERDZONO jej istnienia w tej gminie.
 *   Strefa Aktywności Gospodarczej, o której mowa w materiałach
 *   regionalnych, to SAG tarnowska przy węźle w Wierzchosławicach —
 *   nie leży w Lisiej Górze,
 * — SPECJALIZACJI ROLNEJ (sadownictwo, hodowla, konkretna uprawa).
 *   BRAK JAKIEGOKOLWIEK ŹRÓDŁA. Nie zgadywać,
 * — NAZW KÓŁ GOSPODYŃ. Potwierdzony jest tylko fakt, że przygotowują
 *   poczęstunek na dożynkach,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono żadnego,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA,
 *   identyczna dla wszystkich gmin powiatu tarnowskiego.
 *
 * PUŁAPKI:
 * — STACJA NAZYWA SIĘ „ŁUKOWA TARNOWSKA” i leży w Łukowej, sołectwie
 *   tej gminy — nie w Lisiej Górze,
 * — LINIA 115 TO NIE TA SAMA CO LINIA 96 (Tarnów–Leluchów), która
 *   obsługuje Tuchów, Gromnik i Pleśną i na której ruch DZIAŁA,
 * — GMINA GRANICZY Z TARNOWEM OD PÓŁNOCY — to ona, a nie gmina
 *   wiejska Tarnów, domyka pierścień wokół miasta od tej strony.
 */

export const LISIA_GORA: CityContent = {
  slug: "lisia-gora",
  h1: "Thermomix Lisia Góra – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Lisia Góra — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Lisia Góra: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich 11 sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Lisia Góra — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Lisia Góra. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Lisiej Góry, Zaczarnia, Pawęzowa, Śmigna i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie jedenaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lisiej Górze – jak wygląda prezentacja?",
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
      heading: "Tory, po których nic nie jeździ od dwutysięcznego roku",
      paragraphs: [
        "Przez gminę Lisia Góra biegnie linia kolejowa numer sto piętnaście, z Tarnowa do Szczucina. Zbudowano ją w tysiąc dziewięćset szóstym roku. W Łukowej, jednym z tutejszych sołectw, jest stacja Łukowa Tarnowska, na dziewiątym kilometrze trasy.",
        "Ruch pasażerski na tej linii zawieszono w dwutysięcznym roku. Przewozy towarowe skończyły się sześć lat później. Od ćwierćwiecza tory po prostu leżą.",
        "To nie jest to samo co brak kolei. Nasyp jest, przejazdy są, budynki stacyjne stoją, a starsi mieszkańcy pamiętają rozkład jazdy. Nie ma tylko pociągów — i przez dwadzieścia pięć lat nikt nie potrafił powiedzieć, czy kiedykolwiek wrócą.",
        "Teraz wygląda na to, że wrócą. Odbudowa całej linii ma kosztować około dwustu pięćdziesięciu milionów złotych. Przetarg w formule zaprojektuj i wybuduj ogłoszono w pierwszej połowie dwa tysiące dwudziestego szóstego roku. Pierwszy etap, z Tarnowa do Żabna, jest możliwy w dwa tysiące dwudziestym siódmym; cała trasa do Szczucina ma być gotowa do końca dwa tysiące dwudziestego dziewiątego.",
        "Uczciwie zaznaczę, że konkretnych przystanków na odbudowanej linii nikt jeszcze nie ogłosił, więc nie wiem, czy pociąg zatrzyma się dokładnie tam, gdzie kiedyś.",
        "Póki co gmina jeździ kołami i ma po temu warunki lepsze niż wielu sąsiadów. Przez jej teren przechodzi droga krajowa siedemdziesiąt trzy z Tarnowa do Kielc, droga wojewódzka dziewięćset osiemdziesiąt cztery i — co ważniejsze — autostrada A4 na odcinku między węzłami Tarnów Zachód i Tarnów Północ. Do Tarnowa jest stąd dziesięć kilometrów, do Krakowa osiemdziesiąt osiem.",
        "Sama Lisia Góra jest przy tym o wiele starsza niż jakakolwiek kolej. Ceramika znajdowana na tutejszym wzgórzu wskazuje na zasiedlenie już w dziewiątym i dziesiątym wieku, a pierwszy dokument to przywilej Kazimierza Wielkiego z tysiąc trzysta pięćdziesiątego czwartego roku, zezwalający lokować wieś na surowym korzeniu nad rzeką Czarną. Od tysiąc trzysta osiemdziesiątego szóstego wieś należała do dóbr Tarnowskich, a szkoła parafialna działała tu już w tysiąc pięćset osiemdziesiątym szóstym, za hetmana Jana Tarnowskiego. Barokowy kościół postawili Sanguszkowie w tysiąc siedemset dwudziestym ósmym.",
        "Przez pierwszą wojnę front przeszedł tędy trzykrotnie; został po niej cmentarz wojenny z czterdziestoma sześcioma pochowanymi. W czasie okupacji działała tu placówka Armii Krajowej o kryptonimie Ligia, licząca w tysiąc dziewięćset czterdziestym czwartym roku dwustu sześćdziesięciu dwóch żołnierzy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Lisia Góra?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo — jest ich jedenaście, a gmina rozciąga się na stu pięciu kilometrach kwadratowych. Pawęzów leży pięć kilometrów od Tarnowa, Breń znacznie dalej na północ.",
        "Przy Żukowicach warto dodać, czy chodzi o Stare, czy o Nowe — to dwie osobne wsie i nawigacja potrafi je pomylić.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Lisia Góra"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Jedzenie, które jedzie razem z Wami",
      paragraphs: [
        "Przez tę gminę przechodzi droga krajowa do Kielc i autostrada, a do Tarnowa jest dziesięć kilometrów. To znaczy, że sporo tutejszych dni wygląda tak: śniadanie w domu, reszta gdzieś po drodze.",
        "Jedzenie w drodze ma dwa problemy. Pierwszy jest oczywisty — kupowane wychodzi drogo i rzadko bywa sensowne. Drugi jest praktyczny: musi przetrwać kilka godzin w torbie i dać się zjeść bez talerza.",
        "Pierwsza rzecz, która się przy tym sprawdza, to zupy w termosie. Krem z warzyw, pomidorowa, dyniowa — ugotowane i zmiksowane w jednym naczyniu, wlane rano do termosu, o trzynastej są nadal ciepłe. To najprostszy sposób, żeby ciepły posiłek nie zależał od tego, czy coś jest po drodze otwarte.",
        "Druga to pasty i smarowidła. Z jajek, z fasoli, z ryby, z pieczonych warzyw — powstają w kilkadziesiąt sekund i starczają na kilka dni. Kanapka z domową pastą kosztuje ułamek tego, co gotowa, i syci znacznie dłużej.",
        "Trzecia to sałatki w słoiku: kasza, warzywa, ser, dressing na dole. Krojenie i szatkowanie zajmuje kilka sekund zamiast kwadransa, a to zwykle właśnie ten kwadrans decyduje, czy rano komuś się chciało.",
        "I czwarta, wieczorna: obiad, który czeka. Kiedy wszyscy wracają o różnych porach, danie jednogarnkowe nastawione rano i wyłączające się samo rozwiązuje sprawę lepiej niż odgrzewanie po kolei czterech porcji.",
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
    heading: "Lisia Góra i gotowanie — dożynki, koła gospodyń i najmłodsza gmina okolicy",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu z tej gminy na ministerialnej Liście Produktów Tradycyjnych ani nazw działających tu kół gospodyń. Nie będę więc wymieniać rzeczy, których nie sprawdziłam.",
      "Potwierdzone jest natomiast to, że koła gospodyń tu działają i że raz w roku gotują dla całej gminy. Dożynki gminne odbywają się w Gminnym Centrum Rekreacyjnym w Lisiej Górze — w dwa tysiące dwudziestym szóstym roku dwudziestego dziewiątego sierpnia. Po mszy i korowodzie przychodzi kolej na poczęstunek, który przygotowują właśnie koła. Osobno rozstrzyga się konkurs na najpiękniejszą zagrodę dożynkową.",
      "Nie potwierdziłam też żadnej specjalizacji rolnej tej gminy — ani sadowniczej, ani hodowlanej. Żadne źródło jej nie podaje, a zgadywanie na stronie o jedzeniu byłoby najgorszym możliwym pomysłem.",
      "To, co o Lisiej Górze mówi statystyka, dotyczy za to ludzi: średni wiek mieszkańca wynosi trzydzieści osiem lat i sześć dziesiątych i jest najniższy w całym pierścieniu wokół Tarnowa. To gmina, w której gotuje się dla dzieci częściej niż dla seniorów.",
      "Poza tym kuchnia jest tu podtarnowska i zwyczajna: rosół, ziemniaki, kotlety, kluski, ciasto drożdżowe na niedzielę, przetwory z ogrodu.",
      "Dla urządzenia najsensowniejsze są tu zupy do termosu, pasty kanapkowe i dania jednogarnkowe czekające na wracających o różnych porach. Czego nie zrobi, mówię wprost: nie usmaży kotleta i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Lisia Góra dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich jedenastu, bez żadnej dopłaty za odległość. Gmina liczy ponad piętnaście i pół tysiąca mieszkańców na stu pięciu kilometrach kwadratowych i graniczy z Tarnowem od północy.",
    "Sołectwa to: Lisia Góra, Zaczarnie, Pawęzów, Śmigno, Łukowa, Brzozówka, Kobierzyn, Nowa Jastrząbka, Nowe Żukowice, Stare Żukowice i Breń.",
    "W Łukowej znajduje się stacja Łukowa Tarnowska na linii kolejowej numer sto piętnaście z Tarnowa do Szczucina. Ruch pasażerski zawieszono na niej w dwutysięcznym roku, ale linia ma zostać odbudowana — pierwszy etap możliwy w dwa tysiące dwudziestym siódmym, całość do końca dwa tysiące dwudziestego dziewiątego.",
    "W Lisiej Górze stoi barokowy kościół wzniesiony przez Sanguszków w tysiąc siedemset dwudziestym ósmym roku, w miejscu wcześniejszego drewnianego. W gminie jest też cmentarz wojenny z pierwszej wojny, z czterdziestoma sześcioma pochowanymi.",
    "Dojazd: przez teren gminy przechodzi droga krajowa siedemdziesiąt trzy z Tarnowa do Kielc, droga wojewódzka dziewięćset osiemdziesiąt cztery oraz autostrada A4 na odcinku między węzłami Tarnów Zachód i Tarnów Północ. Do Tarnowa dziesięć kilometrów, do Krakowa osiemdziesiąt osiem.",
  ],
  districts: [
    "Lisia Góra",
    "Zaczarnie",
    "Pawęzów",
    "Śmigno",
    "Łukowa",
    "Brzozówka",
    "Kobierzyn",
    "Nowa Jastrząbka",
    "Nowe Żukowice",
    "Stare Żukowice",
    "Breń",
  ],

  nearbyHeading: "Żabno, Skrzyszów i gmina Tarnów też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Żabnem, Skrzyszowem, Dąbrową Tarnowską i gminą wiejską Tarnów, a od południa z samym miastem Tarnowem. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie kolejowe, bo bywa mylące: linia sto piętnaście przez Lisią Górę i Żabno do Szczucina nie działa od dwutysięcznego roku. Czynna jest natomiast linia dziewięćdziesiąt sześć z Tarnowa do Leluchowa, ale ona przechodzi zupełnie inną stroną powiatu — przez Pleśną, Gromnik i Tuchów.",
  ],
  nearbyTowns: [
    "Żabno",
    "Skrzyszów",
    "Dąbrowa Tarnowska",
    "Tarnów",
    "Wierzchosławice",
  ],

  about: blokOMnie("do gminy Lisia Góra", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Zaczarniu albo w Starych Żukowicach. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie jedenaście sołectw traktuję dokładnie tak samo. Przy Żukowicach warto dodać, czy chodzi o Stare, czy o Nowe — to dwie osobne wsie.",
    },
    ...faqWspolne("w gminie Lisia Góra"),
    {
      question: "Czy da się przygotować w tym coś do zabrania do pracy?",
      answer:
        "Da się i to jest chyba najczęstsze zastosowanie w gminie, z której codziennie tyle osób wyjeżdża. Najlepiej sprawdzają się trzy rzeczy: zupa krem ugotowana i zmiksowana w jednym naczyniu, wlana rano do termosu i ciepła jeszcze po południu; pasty kanapkowe robione w kilkadziesiąt sekund, które starczają na kilka dni; oraz sałatki w słoiku, przy których szatkowanie zajmuje sekundy zamiast kwadransa. To ostatnie brzmi drobiazgowo, ale zwykle właśnie ten kwadrans decyduje, czy rano komukolwiek się chciało.",
    },
  ],

  geo: { lat: 50.08433, lng: 21.02351 },
};
