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
 * SZAFLARY — gmina wiejska, powiat nowotarski. Siedem sołectw,
 * 11 336 mieszkańców na 54,3 km², 605–927 m n.p.m.
 *
 * OŚ STRONY: CIEPŁO Z TRZECH KILOMETRÓW POD ZIEMIĄ. To tutaj
 * testowano polską geotermię od 1989 r., tutaj w 1995 r. Bańska
 * Niżna została pierwszą polską wsią ogrzewaną geotermalnie
 * i tutaj w latach 2023–2025 przewiercono 6 103 metry — rekord
 * świata dla otworu geotermalnego.
 *
 * ⚠️ TON: to ma być opowiedziane UCZCIWIE, łącznie z tym, że odwiert
 * NIE OSIĄGNĄŁ CELU. Plan zakładał 7 000 m i wodę powyżej 150°C;
 * skończyło się na 6 103,2 m po serii awarii. To jest lepsza historia
 * niż sukces bez skazy i tak ją piszę.
 *
 * ⚠️ ODRÓŻNIENIE OD BUKOWINY TATRZAŃSKIEJ (`bukowina-tatrzanska.ts`),
 * gdzie termy opisane są jako SPÓŁKA MIESZKAŃCÓW, przedsięwzięcie
 * wspólnotowe. TUTAJ osią jest GEOLOGIA I CIEPŁOWNICTWO — wiercenie,
 * sieć, ogrzewanie domów. Nie powtarzać wątku basenów jako atrakcji.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — BAŃSKA IG-1: wiercony w 1981 r., ok. 2,7 km, woda powyżej 80°C,
 *   ok. 120 m³/h,
 * — PIERWSZA W POLSCE DOŚWIADCZALNA INSTALACJA GEOTERMALNA działała
 *   tu w latach 1989–1993 (dublet Bańska IG-1 + Biały Dunajec PAN-1).
 *   W 1995 r. Bańska Niżna była pierwszą w Polsce wsią ogrzewaną
 *   geotermalnie,
 * — PEC GEOTERMIA PODHALAŃSKA S.A., siedziba w Bańskiej Niżnej.
 *   Spółka zawiązana w grudniu 1993 r. z inicjatywy NFOŚiGW,
 *   zarejestrowana w lutym 1994 r.; 1998 fuzja z PEC „TATRY”;
 *   2001 uruchomienie ciepłowni w Bańskiej Niżnej i ciepłociągu
 *   do Zakopanego. W 2024 r.: ok. 1 699 odbiorców ciepła,
 *   2 029 budynków, 511 581,38 GJ, 99% z geotermii. Sieć ok. 105 km,
 *   wydajność 120–550 m³/h z 2,5–3 km, 82–86°C na wyjściu,
 *   nakłady ponad 250 mln zł,
 * — BAŃSKA PGP-4: wiercenie od 31 marca 2023 r., inwestor i finansujący
 *   NFOŚiGW, koszt 132 mln zł. PLAN: 7 000 m i woda powyżej 150°C.
 *   ZAKOŃCZONO NA 6 103,2 m — po awariach (twarde skały, obwał ścian,
 *   uszkodzenie silnika wiertniczego, pęknięcie węża na 6 096 m).
 *   Zabrakło ok. 900 m. Temperatury: ok. 85°C na ok. 3 km, ok. 120°C
 *   na ok. 5 km; 2 kwietnia 2024 r. przy 5 901 m mierzono ok. 140°C.
 *   MIMO TO REKORD ŚWIATA dla otworu geotermalnego — poprzednie
 *   to Chiny 5 200 m i Islandia 4 659 m,
 * — SOŁECTWA (7), NSP 2021: Szaflary 3 568 (siedziba, największa,
 *   31,7% gminy), Maruszyna 1 982, Zaskale 1 591, Bańska Niżna 1 202,
 *   Bańska Wyżna 1 145, Skrzypne 1 082, Bór 544,
 * — GOSPODARKA: 1 154 podmioty REGON (2024), bezrobocie szac. 6,6%,
 *   płaca 6 883 zł brutto. Zatrudnienie: rolnictwo 26,8%,
 *   przemysł i budownictwo 23,4%, usługi 18,5%,
 * — KOLEJ: stacja Szaflary (linia 99 Chabówka–Zakopane, km 26,530)
 *   oraz przystanki Szaflary Centrum i Bańska Niżna,
 * — DROGA: DK47 (zakopianka), 90–96 km do Krakowa, 1 h 32 – 1 h 39.
 *   Trwa rozbudowa odcinka Nowy Targ–Szaflary,
 * — TERMY SZAFLARY, Osiedle Nowe 20 — 4 baseny z wodą termalną,
 *   zjeżdżalnia ponad 55 m, saunarium. ⚠️ To NIE Termy Chochołowskie
 *   ani Bukovina,
 * — „ZOSKOLAŃSKIE JODEŁKO” — konkurs potraw regionalnych w remizie
 *   OSP Zaskale, XXVI edycja 19 listopada 2022 r. Organizatorzy:
 *   Związek Podhalan Zaskale, OSP, KGW i ośrodek kultury.
 *   Potrawy udokumentowane: moskole, tarcioki, pieczony baran,
 *   nalewki, ciasta,
 * — KONKURS „OGRODY GMINY SZAFLARY” — XII edycja, sierpień 2026 r.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — PROF. JULIANA SOKOŁOWSKIEGO JAKO INICJATORA. Nazwisko nie pada
 *   w żadnym ze sprawdzonych źródeł branżowych. NIE PRZYPISYWAĆ,
 * — TWIERDZENIA, ŻE PGP-4 OSIĄGNĄŁ 7 KM. Nie osiągnął — 6 103 m,
 * — KAMIENIOŁOMU. Nie znalazłam czynnego zakładu górniczego w gminie,
 * — ZAKŁADU PRODUKCJI JOGURTU jako pracodawcy. Źródło wyłącznie
 *   katalogowe, niezweryfikowane w KRS,
 * — STATUSU PROJEKTU „TERM PODHALAŃSKICH”. Wieloletnia inwestycja
 *   o nieustalonym stanie — nie mylić z działającymi Termami Szaflary,
 * — CZASÓW PRZEJAZDU KOLEJĄ. Niepotwierdzone,
 * — DAT ZAŁOŻENIA KÓŁ GOSPODYŃ,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znalazłam.
 *
 * PUŁAPKI:
 * — ODWIERT NAZYWA SIĘ „BAŃSKA PGP-4”, ALE LEŻY W GMINIE SZAFLARY.
 *   Nie pisać „w Chochołowie” ani „w Białym Dunajcu”,
 * — BAŃSKA NIŻNA (gm. Szaflary) ≠ BIAŁY DUNAJEC. Otwór chłonny
 *   Biały Dunajec PAN-1 leży w gminie Biały Dunajec — dublet
 *   przekracza granicę gmin,
 * — TERMY SZAFLARY ISTNIEJĄ i są w tej gminie. To osobny,
 *   kameralny obiekt — nie mylić z Chochołowskimi ani z Bukoviną,
 * — OSCYPEK, BRYNDZA I REDYKOŁKA są podhalańskie, nie szaflarskie.
 */

export const SZAFLARY: CityContent = {
  slug: "szaflary",
  h1: "Thermomix Szaflary – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Szaflary — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Szaflary: bezpłatna prezentacja TM7 u Ciebie w kuchni — Szaflary, Maruszyna, Zaskale, Bańska. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Szaflary — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Szaflary. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Szaflary przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich siedmiu sołectw, bez dopłaty za odległość.",

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
      heading: "Thermomix w gminie Szaflary – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Szaflarach, jak w Maruszynie, Zaskalu czy Bańskiej.",
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
      heading: "Sześć kilometrów w dół i osiemdziesiąt sześć stopni w kaloryferze",
      paragraphs: [
        "W tysiąc dziewięćset osiemdziesiątym pierwszym roku wywiercono w Bańskiej Niżnej otwór na blisko dwa i siedem dziesiątych kilometra. Wyszła z niego woda o temperaturze powyżej osiemdziesięciu stopni. Osiem lat później ruszyła tu pierwsza w Polsce doświadczalna instalacja geotermalna, a w tysiąc dziewięćset dziewięćdziesiątym piątym Bańska Niżna została pierwszą polską wsią ogrzewaną ciepłem z wnętrza ziemi.",
        "Dziś ta sieć ma około stu pięciu kilometrów i dostarcza ciepło do ponad dwóch tysięcy budynków — nie tylko w tej gminie, bo ciepłociąg biegnie aż do Zakopanego. Dziewięćdziesiąt dziewięć procent tego ciepła pochodzi z geotermii. Woda wychodzi z ziemi w temperaturze osiemdziesięciu dwóch do osiemdziesięciu sześciu stopni.",
        "Warto na chwilę zatrzymać się przy tym, co to znaczy w praktyce, bo to jest jedna z niewielu rzeczy, które naprawdę zmieniają codzienność. Podhale ma problem ze smogiem, a jego źródłem są piece. W gminie, w której zimą grzeje się gorącą wodą z odwiertu, tego problemu po prostu nie ma.",
        "W marcu dwa tysiące dwudziestego trzeciego roku ruszyło tu najgłębsze wiercenie geotermalne w historii. Otwór Bańska PGP-4 miał sięgnąć siedmiu kilometrów i wody powyżej stu pięćdziesięciu stopni. Kosztował sto trzydzieści dwa miliony złotych.",
        "I tutaj powiem rzecz, którą folder by przemilczał: nie udało się. Wiercenie zatrzymano na sześciu tysiącach stu trzech metrach, po serii awarii — twarde skały, obwał ścian otworu, uszkodzony silnik wiertniczy, wreszcie pęknięty wąż na głębokości sześciu tysięcy dziewięćdziesięciu sześciu metrów. Zabrakło około dziewięciuset metrów do celu.",
        "A mimo to jest to rekord świata dla otworu geotermalnego — poprzednie należały do Chin z pięcioma tysiącami dwustu metrów i do Islandii z czterema tysiącami sześciuset. Na głębokości blisko sześciu kilometrów zmierzono około stu czterdziestu stopni. Cel był ambitniejszy niż wynik i uważam, że to warto powiedzieć wprost, zamiast zaokrąglać w górę.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Szaflary?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz nazwę sołectwa i uważaj na jedno: Bańska jest podwójna — Niżna i Wyżna. To dwie osobne wsie. Gmina rozciąga się od sześciuset do ponad dziewięciuset metrów nad poziomem morza, więc zimą warto mnie uprzedzić, jeśli podjazd bywa trudny.",
        "Jeśli masz gospodarstwo — a w tej gminie w rolnictwie pracuje ponad jedna czwarta zatrudnionych — powiedz po prostu, o której masz spokojną godzinę. Dopasowuję się do obrządku, nie odwrotnie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Szaflary"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której ćwierć ludzi wciąż pracuje na roli",
      paragraphs: [
        "W gminie Szaflary rolnictwo daje niemal dwadzieścia siedem procent zatrudnienia. To dużo — więcej niż przemysł z budownictwem razem wzięte i znacznie więcej niż w sąsiednich gminach turystycznych. Ta gmina, mimo geotermii i mimo zakopianki za oknem, wciąż w dużej mierze żyje z ziemi i z chowu.",
        "Za tym stoi bardzo konkretny rytm dnia: obrządek rano, obrządek wieczorem, a między nimi wszystko inne. Nie ma stałej pory obiadu — jest przerwa wtedy, kiedy da się ją zrobić. Gotowanie musi się do tego dopasować, a nie odwrotnie.",
        "Praktyczna korzyść jest tu bardzo prosta. Wstawiasz danie jednogarnkowe i wychodzisz do obory albo w pole. Gotuje się bez nikogo, samo się wyłącza, nie przypala i czeka. Wracasz o dowolnej porze i jest ciepły obiad. To nie jest oszczędność czasu — to jest różnica między obiadem ugotowanym a odpuszczonym.",
        "Druga rzecz to przetwarzanie własnego nabiału i tego, co przynosi sezon. Masy serowe, sosy na śmietanie, zupy do zamrożenia, powidła, ciasto na kluski i pierogi robione seriami. W gospodarstwie to i tak się dzieje — chodzi tylko o to, żeby nie trzeba było przy tym stać i mieszać, żeby się nie zwarzyło albo nie przywarło.",
        "Trzecia rzecz jest specyficzna dla tej gminy i dotyczy ogrzewania. W domach podłączonych do sieci geotermalnej nie ma pieca, przy którym się grzeje wodę czy dogotowuje. Wszystko dzieje się na prądzie i w kuchni — a to znaczy, że urządzenie, które gotuje samo i się wyłącza, wpisuje się tu naturalnie, zamiast zastępować coś, co i tak stoi rozpalone.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy. Starsze dzieci często zaczynają gotować same, bo przepis prowadzi krok po kroku — a przy gospodarstwie to bywa realnie potrzebne.",
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
    heading: "Zaskalańskie jodełko — konkurs, który trwa od ćwierćwiecza",
    paragraphs: [
      "W remizie ochotniczej straży pożarnej w Zaskalu odbywa się konkurs potraw regionalnych, który doczekał się już dwudziestu sześciu edycji. Organizują go wspólnie Związek Podhalan, straż, koło gospodyń i ośrodek kultury, a startują w nim gaździny ze wszystkich siedmiu sołectw gminy.",
      "Potrawy, które tam widziano, to moskole, tarcioki, pieczony baran, nalewki i ciasta. Dwie pierwsze są ziemniaczane i to nie przypadek — na wysokości od sześciuset do ponad dziewięciuset metrów ziemniak rośnie lepiej niż pszenica, a tutejsza kuchnia jest tego prostą konsekwencją.",
      "Muszę dodać zastrzeżenie, które powtarzam na każdej podhalańskiej stronie: to są potrawy konkursowe, nie wpisy na ministerialną Listę Produktów Tradycyjnych, a oscypek, bryndza podhalańska i redykołka mają wprawdzie unijną ochronę nazwy, ale obejmuje ona całe Podhale, nie tę gminę. Wpisu przypisanego wprost Szaflarom nie znalazłam.",
      "Co z tego wynika dla urządzenia? Popatrzmy na tarcioki. Nazwa mówi wszystko: trzeba utrzeć ziemniaki, i to sporo. Odcisnąć. Wymieszać. Cała trudność tego dania nie leży w umiejętności, tylko w tarce i w tym, ile przy niej stoisz. Tarcie urządzenie przejmuje w całości, smażenie zostaje przy patelni.",
      "Moskola nie upiecze — moskol wymaga blachy i ognia. Barana nie upiecze tym bardziej. Za to ciasta, masy, nadzienia i sosy to jego robota, a przy gotowaniu na konkurs albo na strażackie święto różnica robi się bardzo konkretna.",
    ],
  },

  districtsHeading: "Gdzie w gminie Szaflary dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich siedmiu sołectw, bez żadnej dopłaty za odległość: Szaflar, Maruszyny, Zaskala, Bańskiej Niżnej, Bańskiej Wyżnej, Skrzypnego i Boru.",
    "Same Szaflary liczą blisko trzy i pół tysiąca mieszkańców, czyli około jednej trzeciej gminy — siedziba jest tu największa. Najmniejszy Bór ma pięćset czterdzieści cztery osoby. Cała gmina to nieco ponad pięćdziesiąt cztery kilometry kwadratowe, a zabudowa rozciąga się od sześciuset pięciu do dziewięciuset dwudziestu siedmiu metrów nad poziomem morza.",
    "W Bańskiej Niżnej mieści się siedziba spółki geotermalnej, a przy niej ciepłownia, z której ciepło płynie rurociągiem aż do Zakopanego. W samych Szaflarach działają Termy Szaflary — kameralny obiekt z czterema basenami, który bywa mylony z Chochołowskimi albo z Bukoviną. To trzy różne miejsca w trzech różnych gminach.",
    "Dojazd jest tu wyjątkowo dobry. Przez gminę przechodzi zakopianka, a na linii z Chabówki do Zakopanego są aż trzy punkty zatrzymania: stacja Szaflary oraz przystanki Szaflary Centrum i Bańska Niżna. Samochodem z Krakowa jest około dziewięćdziesięciu kilometrów, czyli mniej więcej półtorej godziny — z zastrzeżeniem, że trwa rozbudowa odcinka z Nowego Targu, więc bywa wolniej.",
  ],
  districts: [
    "Szaflary",
    "Maruszyna",
    "Zaskale",
    "Bańska Niżna",
    "Bańska Wyżna",
    "Skrzypne",
    "Bór",
  ],

  nearbyHeading: "Nowy Targ, Biały Dunajec i Poronin też są na mojej trasie",
  nearbyParagraphs: [
    "Do Nowego Targu mam stąd kilka kilometrów, do Białego Dunajca, Poronina i Zakopanego kilkanaście. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Ciekawostka geologiczna, która akurat tu ma sens: dublet geotermalny przekracza granicę gmin — otwór wydobywczy jest w Bańskiej Niżnej, czyli w gminie Szaflary, a chłonny w Białym Dunajcu. Woda robi więc rundę pod dwoma gminami, zanim wróci pod ziemię.",
  ],
  nearbyTowns: [
    "Nowy Targ",
    "Biały Dunajec",
    "Poronin",
    "Zakopane",
    "Czarny Dunajec",
    "Kraków",
  ],

  about: blokOMnie("do gminy Szaflary", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Czy najgłębszy odwiert geotermalny naprawdę jest w Szaflarach?",
      answer:
        "Tak — otwór Bańska PGP-4 leży w tej gminie i jest najgłębszym otworem geotermalnym na świecie. Ale powiem uczciwie: nie osiągnął celu. Plan zakładał siedem kilometrów i wodę powyżej stu pięćdziesięciu stopni, a wiercenie zatrzymano na sześciu tysiącach stu trzech metrach po serii awarii. Rekord i tak został pobity — poprzedni należał do Chin z pięcioma tysiącami dwustu metrów.",
    },
    ...faqWspolne("w gminie Szaflary"),
    {
      question: "Mam gospodarstwo, obrządek dwa razy dziennie. Kiedy się umówimy?",
      answer:
        "Kiedy Ci pasuje — dopasowuję się do obrządku, nie odwrotnie. W tej gminie w rolnictwie pracuje ponad jedna czwarta zatrudnionych, więc to bardzo częsty scenariusz. Powiedz po prostu, o której masz dwie spokojne godziny; przedpołudnie w dzień roboczy jest dla mnie równie normalnym terminem jak wieczór.",
    },
    {
      question: "Czy Termy Szaflary to to samo co Termy Chochołowskie?",
      answer:
        "Nie, to trzy różne obiekty w trzech gminach. Termy Szaflary działają w tej gminie i są kameralne — cztery baseny i saunarium. Termy Chochołowskie leżą w gminie Czarny Dunajec, a Bukovina w gminie Bukowina Tatrzańska. Nazwy mylą, więc prostuję przy okazji.",
    },
  ],

  geo: { lat: 49.4142, lng: 19.9997 },
};
