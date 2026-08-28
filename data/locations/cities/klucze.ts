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
 * KLUCZE — gmina wiejska, 14 206 mieszkańców (GUS BDL, 31.12.2025).
 * Trzecia gmina powiatu olkuskiego.
 *
 * OŚ STRONY: piętnaście kół gospodyń wiejskich — dokładnie po jednym
 * na każde sołectwo. To najlepiej udokumentowana sieć KGW w całym
 * powiecie i naturalny punkt zaczepienia dla strony o gotowaniu.
 * Wątek drugi: papiernia z ponad stuletnią historią.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — 15 sołectw: Bogucin Duży, Bydlin, Chechło, Cieślin, Golczowice,
 *   Hucisko, Jaroszowiec, Klucze, Kolbark, Krzywopłoty, Kwaśniów Dolny,
 *   Kwaśniów Górny, Rodaki, Ryczówek, Zalesie Golczowskie,
 * — 15 KÓŁ GOSPODYŃ, po jednym na sołectwo. Nazwy własne potwierdzone:
 *   „Warszawianki” (Hucisko), „Źródełko” (Kolbark, w KRS),
 *   „Krzywopłockie Kobiety” (Krzywopłoty), „Kwaśniowianki”
 *   (Kwaśniów Górny — ich nalewka malinowa startowała w konkursie
 *   Kryształowy Amonit), KGW Kwaśniów Dolny (rejestr starosty),
 * — Dożynki Parafialno-Gminne rotują między sołectwami; 6.09.2025
 *   w Krzywopłotach,
 * — VELVET CARE w Kluczach: papiernia z ponad 125-letnią historią
 *   (rocznica obchodzona w 2021). Zatrudnienie wzrosło z 280 osób
 *   (2013) do ok. 750 w Polsce; moce z 33 tys. do 150 tys. ton rocznie,
 *   trzy maszyny papiernicze. W PRL zakład produkował m.in. zeszyty
 *   szkolne. Właściciele kolejno: International Paper (1996),
 *   Kimberly-Clark (2003), Avallon (2013),
 * — inni pracodawcy: CEMEX; Małopolski Szpital Chorób Płuc
 *   i Rehabilitacji im. Edmunda Wojtyły w Jaroszowcu,
 * — ponad 1 400 podmiotów gospodarczych; 1 788 wpisów w REGON (2024),
 * — położenie: wieś Klucze ok. 7 km na północ od Olkusza, ok. 41–45 km
 *   od Krakowa, ok. 50 km od Katowic; główny trakt DW791;
 *   gmina graniczy z siedmioma gminami,
 * — KOLEJ CZYNNA: przystanek Jaroszowiec Olkuski na linii 62,
 * — krajobraz: Wyżyna Krakowsko-Częstochowska, wapienne wzgórza, lasy,
 *   dolina Białej Przemszy; część Parku Krajobrazowego Orlich Gniazd,
 *   obszary Natura 2000; powierzchnia 119,3 km²,
 * — PUSTYNIA BŁĘDOWSKA: część północna w gminie Klucze; punkty widokowe
 *   Czubatka (382 m), Dąbrówka (355 m), Róża Wiatrów przy ul.
 *   Bolesławskiej; żółty Szlak Pustynny 28,5 km, ścieżka dydaktyczna 3 km,
 * — ruiny zamku w Bydlinie; Bogucin Duży obchodził 800-lecie,
 * — średni wiek 44,3 lat; spadek ludności 2002–2024 tylko −3%,
 *   najłagodniejszy w powiecie.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — POLIGON NA PUSTYNI BŁĘDOWSKIEJ. Północna część, ok. jednej trzeciej
 *   obszaru w rejonie Dąbrówki i Chechła, to teren ćwiczeń 6 Brygady
 *   Powietrznodesantowej — okresowe zakazy wstępu, wejście wymaga
 *   procedury. NIE ZAPRASZAM czytelniczki „na piknik na pustynię”
 *   jak na łąkę. Pustynia pojawia się jako element krajobrazu
 *   i orientacji w terenie, nie jako propozycja wycieczki,
 * — NIEWYBUCHY I POCISKI znajdowane na pustyni, interwencje saperów,
 *   czasowe zamknięcia terenu,
 * — SKAŻENIE METALAMI CIĘŻKIMI I LEJ DEPRESJI. Klucze są jedną z gmin
 *   wymienianych jako dotknięte zanikiem rzek po zamknięciu kopalni.
 *   Konsekwencja dla treści jak w całym powiecie: ŻADNYCH „warzyw
 *   z własnego ogródka”, żadnych „przetworów z tego, co za domem”,
 * — ZANIK BIAŁEJ PRZEMSZY — do 80% jej przepływu stanowiła woda
 *   pompowana z kopalni,
 * — SPÓR O PRZEBIEG OBWODNICY KLUCZ. Mieszkańcy publicznie kwestionowali
 *   wariant przebiegu,
 * — POCHODZENIE PUSTYNI. Nie piszę o niej jako o „skutku wylesienia pod
 *   hutnictwo”. To prawda historyczna, ale w tekście handlowym brzmi
 *   jak wypominanie.
 *
 * PUŁAPKA:
 * — PUSTYNIA BŁĘDOWSKA: część północna to gmina KLUCZE, nie gmina
 *   Bolesław. Mylące jest to, że dojazd do Róży Wiatrów prowadzi
 *   ULICĄ BOLESŁAWSKĄ W KLUCZACH — to nazwa ulicy, nie gminy.
 *   Część południowa, większa i z wydmami, to Dąbrowa Górnicza,
 *   województwo śląskie. Wieś Błędów, od której pochodzi nazwa,
 *   leży w Dąbrowie Górniczej, nie w powiecie olkuskim,
 * — powierzchnia pustyni podawana sprzecznie: 20 km² wg Dąbrowy
 *   Górniczej, 32–33 km² wg portali tematycznych. NIE PODAJĘ liczby,
 * — Klucze to GMINA WIEJSKA; miejscowość Klucze nie ma praw miejskich,
 * — PARK KRAJOBRAZOWY ORLICH GNIAZD to co innego niż SZLAK ORLICH
 *   GNIAZD. Oba istnieją,
 * — Velvet CARE to PAPIERNIA, nie „fabryka chemiczna”. Zeszyty szkolne
 *   to historia, dziś artykuły higieniczne,
 * — szpital w Jaroszowcu nosi imię EDMUNDA Wojtyły, brata Jana Pawła II,
 *   nie Karola.
 */

export const KLUCZE: CityContent = {
  slug: "klucze",
  h1: "Thermomix Klucze – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Klucze — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Klucze: bezpłatna prezentacja TM7 u Ciebie w kuchni — wszystkie 15 sołectw. Dojazd bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Klucze — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Klucze. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Klucze przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do wszystkich piętnastu sołectw, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 15 sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Klucze – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Kluczach, jak w Rodakach czy w Kwaśniowie Górnym.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu dobranego pod pokaz.",
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
      heading: "Piętnaście sołectw i piętnaście kół gospodyń",
      paragraphs: [
        "W gminie Klucze jest piętnaście sołectw i piętnaście kół gospodyń wiejskich — dokładnie po jednym na wieś. Nie znam w okolicy drugiej gminy, w której ta siatka byłaby tak równa. Warszawianki w Hucisku, Źródełko w Kolbarku, Krzywopłockie Kobiety, Kwaśniowianki z Kwaśniowa Górnego, których nalewka malinowa startowała w konkursie — to nie są martwe wpisy w rejestrze, tylko koła, które realnie się spotykają i gotują.",
        "Dla mojej pracy ma to bardzo praktyczne znaczenie. W tej gminie najczęstszą formą spotkania nie jest prezentacja dla jednej osoby przy kuchennym blacie, tylko dla kilku pań naraz — w świetlicy, w remizie albo u kogoś w domu. Gotuję wtedy więcej, biorę więcej składników i rozmowa wygląda zupełnie inaczej, bo pytania padają z kilku stron.",
        "Praca w gminie rozkłada się na trzy strony. Papiernia w Kluczach działa tu od ponad stu lat — w czasach PRL wychodziły z niej zeszyty szkolne, dziś artykuły higieniczne, a zatrudnienie w ostatniej dekadzie wyraźnie urosło. Do tego zakład materiałów budowlanych i szpital w Jaroszowcu, jeden z większych pracodawców w okolicy. Reszta dojeżdża do Olkusza — siedem kilometrów — albo dalej.",
        "Papiernia i szpital pracują w trybie, który nie kończy się o siedemnastej. Nie będę zgadywać godzin zmian, bo ich nie znam, ale skutek dla kuchni jest zawsze ten sam: w domu ktoś je o innej porze niż reszta i obiad musi przetrwać kilka godzin albo dać się odgrzać bez straty.",
        "I to jest cała rzecz, którą pokazuję na prezentacji. Nie to, że urządzenie ugotuje coś wymyślnego, tylko że jedno gotowanie może obsłużyć dwie albo trzy pory posiłku, a zupa gotuje się sama i sama się wyłącza, kiedy Ty jesteś zajęta czymś innym.",
        "Mówię też wprost, czego Thermomix nie zrobi: nie zastąpi wprawy. W gminie, gdzie każde sołectwo ma własne koło gospodyń, tej wprawy akurat nie brakuje. Zabiera stanie obok garnka i te czynności, przez które gotowanie na zapas odkłada się na później.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Klucze?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, w którym sołectwie mieszkasz. Gmina rozciąga się od Bydlina i Krzywopłotów na północy po Chechło i Bogucin Duży na południu, a to są zupełnie różne kierunki dojazdu — od tego zależy godzina, o której realnie u Ciebie jestem.",
        "Jeśli spotkanie ma być dla koła gospodyń albo dla kilku sąsiadek, powiedz o tym od razu i podaj przybliżoną liczbę osób. Wtedy biorę więcej składników, dobieram inne przepisy i planuję na to więcej czasu. W tej gminie taka forma zdarza się częściej niż gdziekolwiek indziej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Klucze"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gotowanie dla domu, w którym jada się na zmiany",
      paragraphs: [
        "Kiedy jedna osoba pracuje w ruchu ciągłym, druga dojeżdża do Olkusza, a dzieci wracają ze szkoły o jeszcze innej porze, wspólny obiad o jednej godzinie zdarza się głównie w weekend. Reszta tygodnia to trzy albo cztery różne pory jednego posiłku.",
        "Praktyczne bywa tu przede wszystkim to, że jedno gotowanie obsługuje wszystkie te pory. Garnek nastawiony po południu stoi ciepły albo odgrzewa się w kilka minut, bez wysychania i bez smaku odgrzewanego po raz trzeci. To banalna rzecz, a rozwiązuje najczęstszy problem takiego domu.",
        "Druga rzecz to zapasy. Do porządnych zakupów jedzie się do Olkusza, więc robi się je rzadziej i większe. Ciasto na pierogi, pasty kanapkowe, sosy, zupy do zamrożenia, chleb — to wszystko da się przygotować partiami, w jednym naczyniu, zamiast rozkładać na cały tydzień po kawałku.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często same zaczynają gotować, bo przepis prowadzi krok po kroku — i to jest zwykle pierwsza rzecz, którą rodzice zauważają po miesiącu.",
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
    heading: "Klucze i gotowanie — koła gospodyń, dożynki i nalewka z Kwaśniowa",
    paragraphs: [
      "Piętnaście kół gospodyń w piętnastu sołectwach to w praktyce piętnaście kuchni, w których ktoś gotuje dla większej liczby osób regularnie, a nie od święta. Warszawianki w Hucisku, Źródełko w Kolbarku, Krzywopłockie Kobiety, Kwaśniowianki — te nazwy coś tu znaczą i większość mieszkańców gminy wie, o kim mowa.",
      "Dożynki parafialno-gminne rotują między sołectwami, więc co roku organizuje je inna wieś. To jest ten rodzaj wydarzenia, przy którym gotuje się naprawdę dużo i z wyprzedzeniem — i akurat przy takim gotowaniu urządzenie robi największą różnicę, bo rozdrabnianie i mieszanie przestają zajmować pół dnia.",
      "Uczciwie o tym, czego nie ma: żadna gmina powiatu olkuskiego nie ma wpisu na ministerialnej Liście Produktów Tradycyjnych, i Klucze też nie. Jest za to nalewka malinowa Kwaśniowianek, która startowała w konkursie — ale konkurs to nie rejestr i nie zamierzam tych rzeczy mylić, choćby brzmiało to lepiej.",
      "Na spotkaniach w tej gminie najczęściej wychodzi to samo pytanie: czy da się na tym zrobić coś dla dwudziestu osób. Odpowiedź brzmi tak, choć partiami, i właśnie to zwykle pokazuję zamiast przepisu z książki. Jeśli chcecie zobaczyć konkretną rzecz, którą robicie u siebie, powiedzcie przy umawianiu — przywiozę składniki.",
    ],
  },

  districtsHeading: "Gdzie w gminie Klucze dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich piętnastu sołectw i bez żadnej dopłaty za odległość: Bogucin Duży, Bydlin, Chechło, Cieślin, Golczowice, Hucisko, Jaroszowiec, Klucze, Kolbark, Krzywopłoty, Kwaśniów Dolny, Kwaśniów Górny, Rodaki, Ryczówek i Zalesie Golczowskie.",
    "Gmina jest duża i bardzo różnorodna. Na północy, w rejonie Bydlina i Krzywopłotów, jest krajobraz czysto jurajski — wapienne wzgórza, lasy i ruiny zamku nad wsią. Środek to Klucze z papiernią i Jaroszowiec ze szpitalem. Na południu, przy dolinie Białej Przemszy, zaczyna się północny skraj Pustyni Błędowskiej.",
    "O pustyni warto wiedzieć dwie rzeczy, bo obie bywają mylone. Po pierwsze, w gminie Klucze leży tylko jej część północna — większa, ta z wydmami, należy już do Dąbrowy Górniczej w województwie śląskim. Po drugie, część terenu jest wykorzystywana przez wojsko i obowiązują tam okresowe zakazy wstępu, więc nie jest to miejsce, na które wpada się spontanicznie.",
    "Dojazd: głównym traktem jest droga wojewódzka przez Klucze, a do Olkusza mam stąd siedem kilometrów. Jest też kolej — pociągi zatrzymują się w Jaroszowcu, na linii prowadzącej przez Olkusz do Krakowa. Do niektórych sołectw jedzie się już wąsko, więc przy umawianiu warto powiedzieć, którędy najlepiej trafić.",
  ],
  districts: [
    "Klucze",
    "Jaroszowiec",
    "Bydlin",
    "Chechło",
    "Rodaki",
    "Ryczówek",
    "Kwaśniów Górny",
    "Kwaśniów Dolny",
    "Krzywopłoty",
    "Kolbark",
    "Cieślin",
    "Golczowice",
    "Hucisko",
    "Bogucin Duży",
    "Zalesie Golczowskie",
  ],

  nearbyHeading: "Olkusz, Bolesław i Wolbrom też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Klucze graniczy z siedmioma gminami, więc trasy układam stąd we wszystkie strony. Do Olkusza mam siedem kilometrów, do Bolesławia i Bukowna kwadrans, do Wolbromia pół godziny. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Dalej na południe jest Trzebinia i Chrzanów, a stamtąd już pierścień krakowski, w którym pracuję od dawna. Jeśli mieszkasz przy granicy gminy i nie masz pewności, po której stronie jesteś — po prostu zapytaj, wszędzie tam jeżdżę tak samo.",
  ],
  nearbyTowns: [
    "Olkusz",
    "Bolesław",
    "Bukowno",
    "Wolbrom",
    "Trzyciąż",
    "Trzebinia",
    "Chrzanów",
    "Kraków",
  ],

  about: blokOMnie("do gminy Klucze", "w powiecie olkuskim"),

  faq: [
    {
      question: "Chcemy zrobić spotkanie dla koła gospodyń. Da się?",
      answer:
        "Jak najbardziej i w tej gminie to najczęstsza forma — koło działa w każdym z piętnastu sołectw. Powiedz przy umawianiu, ile osób będzie i gdzie się spotykacie: w świetlicy, w remizie czy u kogoś w domu. Wtedy dobiorę przepisy, wezmę więcej składników i zaplanuję na to więcej czasu.",
    },
    ...faqWspolne("w gminie Klucze"),
    {
      question: "Dojeżdżasz do sołectw na północy gminy, do Bydlina i Rodak?",
      answer:
        "Tak, do wszystkich piętnastu sołectw i bez dopłaty za odległość. Gmina jest rozległa — od Bydlina i Krzywopłotów po Chechło i Bogucin Duży to zupełnie różne kierunki — więc przy umawianiu powiedz, gdzie dokładnie mieszkasz, a ja ustawię godzinę realnie, a nie na oko.",
    },
    {
      question: "Czy da się na tym ugotować dla dwudziestu osób, na dożynki albo spotkanie koła?",
      answer:
        "Da się, choć partiami — i właśnie to zwykle pokazuję na spotkaniach w tej gminie, zamiast przepisu z książki. Najwięcej zyskuje się na rzeczach żmudnych: rozdrabnianiu, ucieraniu i mieszaniu, żeby nie przywarło. Jeśli chcecie zobaczyć konkretną potrawę, którą robicie u siebie, powiedzcie przy umawianiu — przywiozę składniki.",
    },
    {
      question: "Pracuję w papierni na zmiany. Kiedy możesz przyjechać?",
      answer:
        "O porze, która pasuje Tobie — także wieczorem albo w weekend. Powiedz przy umawianiu, jak wygląda Twój grafik na najbliższe dni, a ja ułożę spotkanie wokół niego. Prezentacja trwa około dwóch godzin i nie musi kończyć się decyzją tego samego dnia.",
    },
  ],

  geo: { lat: 50.3258, lng: 19.5822 },
};
