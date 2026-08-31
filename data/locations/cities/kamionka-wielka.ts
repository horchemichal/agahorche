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
 * KAMIONKA WIELKA — GMINA WIEJSKA w powiecie nowosądeckim.
 * 10 496 mieszkańców (31.12.2024, GUS), 65 km².
 * ⚠️ STRONA GMINY PODAJE 63 km² — rozbieżność; używam 65 za GUS.
 *
 * OŚ STRONY: DOLINA TRZECH POTOKÓW I NAJMŁODSZA GMINA OKOLICY.
 * Demografia plus geografia — oś twarda, weryfikowalna i nieużywana
 * nigdzie indziej w serwisie.
 *
 * ⚠️ NIE DAWAĆ OSI „LACHY SĄDECKIE” — należy do Podegrodzia
 * (`podegrodzie.ts`). Pogranicze lachowsko-łemkowskie wchodzi tu
 * jako SEKCJA, nie jako oś.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (najmocniejszy wyróżnik):
 *   ŚREDNI WIEK MIESZKAŃCA 36,9 LAT — znacznie niżej niż średnia
 *   wojewódzka i krajowa. WZROST LUDNOŚCI O 19,2% W LATACH
 *   2002–2024. Struktura: przedprodukcyjny 20,3%, produkcyjny 67,5%,
 *   POPRODUKCYJNY TYLKO 12,2%,
 * — GEOGRAFIA: dolina u zbiegu TRZECH POTOKÓW — KAMIONKI, KRÓLÓWKI
 *   I WOLANKI. Pogranicze Beskidu Sądeckiego i zachodniej części
 *   Beskidu Niskiego. LASY PONAD 46% powierzchni. 8 km od Nowego Sącza,
 * — ⚠️ 8 MIEJSCOWOŚCI, ALE 9 SOŁECTW. Miejscowości: Bogusza, Jamnica,
 *   Kamionka Mała, Kamionka Wielka, Królowa Górna, Królowa Polska,
 *   Mszalnica, Mystków. Sołectwa: te same plus MSZALNICA-ZAGÓRA
 *   (Mszalnica podzielona na dwa),
 * — LUDNOŚĆ WG SOŁECTW (31.12.2025, urząd): Kamionka Wielka 3 343,
 *   Mystków 2 163, Mszalnica 1 638, Królowa Górna 954, Jamnica 829,
 *   Bogusza 752, Królowa Polska 627, Kamionka Mała 439,
 * — AKT LOKACYJNY 3 LUTEGO 1336 R. ⚠️ WYDANY PRZEZ JADWIGĘ KALISKĄ,
 *   ŻONĘ WŁADYSŁAWA ŁOKIETKA — NIE przez św. Jadwigę Andegaweńską
 *   (ta żyła 1373/74–1399). Strona gminy pisze po prostu „królowa
 *   Jadwiga” — KONIECZNIE DOPRECYZOWAĆ ALBO POMINĄĆ IMIĘ,
 * — 1402 — przywilej Władysława Jagiełły dot. sprzedaży wsi
 *   mieszczanom sądeckim; wieś należała do dóbr starostwa sądeckiego,
 * — 1539 — pierwsza szkoła parafialna (nauczyciele-organiści
 *   zwani bakałarzami),
 * — 1876 — połączenie kolejowe; rozwój KAMIENIOŁOMÓW.
 *   Po I wojnie TARTAKI, zaliczane do 11 największych zakładów
 *   tego typu na Sądecczyźnie. ⚠️ DZISIEJSZY STATUS TARTAKÓW
 *   I KAMIENIOŁOMÓW NIE POTWIERDZONY — pisać w czasie przeszłym,
 * — OKUPACJA: 80 mieszkańców zginęło z rąk hitlerowców; 1943 —
 *   placówka AK; tajne nauczanie prowadził Feliks Stefański,
 * — BOGUSZA — CERKIEW ŚW. DYMITRA Z 1858 R. (poprzednia z 1627).
 *   Typ: cerkiew łemkowska, typ północno-zachodni, okres schyłkowy;
 *   konstrukcja zrębowa, gont, kopułki cebulaste. POLICHROMIA 1873,
 *   wykonana przez VICTORA ZOMPHA Z BARDIOWA. Wyposażenie z cerkwi
 *   z 1627: IKONOSTAS Z 1670, ołtarz Ostatniej Wieczerzy z 1630.
 *   Dziś kościół rzymskokatolicki św. Antoniego Padewskiego.
 *   Jeden z obiektów Szlaku Architektury Drewnianej,
 * — ZESPÓŁ REGIONALNY „MYSTKOWIANIE” (Mystków) — założony 2014 r.
 *   przez BENEDYKTA PORĘBĘ. 109 CZŁONKÓW: grupa młodzieżowa,
 *   reprezentacyjna, senioralna plus kapela. Reprezentuje folklor
 *   Lachów Sądeckich Z POGRANICZA LACHOWSKO-POGÓRZAŃSKIEGO.
 *   Odznaka „Zasłużony dla Kultury Polskiej”, Srebrny Medal
 *   Województwa Małopolskiego. Pomysłodawca Przeglądu Tradycyjnego
 *   Śpiewu „Ciotcyne Śpiywonie”; organizator Karpackiego Festiwalu
 *   Tańca. ⚠️ TO IMPREZY FOLKLORYSTYCZNE, NIE KULINARNE,
 * — REGON: 963 podmioty (31.12.2024), z czego 947 TO MIKROFIRMY
 *   (0–9 osób),
 * — KOLEJ: linia 96 przebiega przez gminę. ⚠️ NAZW STACJI
 *   NIE POTWIERDZONO w pełni — wiadomo o przystanku Kamionka Wielka
 *   (km 80,645).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. ŻADNEGO NIE POTWIERDZONO.
 *   947 z 963 podmiotów to mikrofirmy,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — NAZW KÓŁ GOSPODYŃ I IMPREZ KULINARNYCH. Nie potwierdzono.
 *   ⚠️ TO GMINA O NAJSŁABSZYM MATERIALE KULINARNYM W POWIECIE —
 *   sekcja kulinarna opiera się na strukturze i pograniczu,
 *   a nie na wymyślonych faktach,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — DOŻYNEK GMINNYCH Z DATĄ. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — 8 MIEJSCOWOŚCI, 9 SOŁECTW — wybrać świadomie,
 * — „KRÓLOWA JADWIGA” 1336 TO JADWIGA KALISKA, nie Andegawenka.
 */

export const KAMIONKA_WIELKA: CityContent = {
  slug: "kamionka-wielka",
  h1: "Thermomix Kamionka Wielka – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Kamionka Wielka — cena",
  seoDescription:
    "Thermomix w gminie Kamionka Wielka: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Kamionka Wielka — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Kamionka Wielka. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Kamionki Wielkiej, Mystkowa, Mszalnicy i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kamionce Wielkiej – jak wygląda prezentacja?",
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
      heading: "Trzy potoki i najmłodsi mieszkańcy w okolicy",
      paragraphs: [
        "Kamionka Wielka leży w dolinie, w której schodzą się trzy potoki: Kamionka, Królówka i Wolanka. To one wyznaczyły układ wsi — każda ciągnie się wzdłuż swojego strumienia — i od jednego z nich wzięła się nazwa całej gminy.",
        "Najciekawsza rzecz o tej gminie jest jednak w statystyce, a nie w krajobrazie. Średni wiek mieszkańca wynosi tu trzydzieści sześć i dziewięć dziesiątych roku — wyraźnie mniej niż średnia wojewódzka i krajowa. Osoby w wieku poprodukcyjnym stanowią zaledwie dwanaście procent.",
        "Druga liczba jest jeszcze wymowniejsza. Od dwa tysiące drugiego roku liczba mieszkańców gminy wzrosła o dziewiętnaście procent — z niecałych dziewięciu tysięcy do ponad dziesięciu i pół. To dwa razy szybciej niż w sąsiedniej Korzennej. Ludzie stąd nie wyjeżdżają, tylko dobudowują się obok rodziców.",
        "Gospodarka jest przy tym drobna aż do przesady: na dziewięćset sześćdziesiąt trzy zarejestrowane firmy dziewięćset czterdzieści siedem to mikroprzedsiębiorstwa zatrudniające do dziewięciu osób. Nie ma tu ani jednego dużego zakładu — kiedyś były kamieniołomy i tartaki, po tysiąc osiemset siedemdziesiątym szóstym roku, kiedy przyszła kolej, ale to już przeszłość.",
        "Sama wieś jest stara. Akt lokacyjny wydano trzeciego lutego tysiąc trzysta trzydziestego szóstego roku; wystawiła go królowa Jadwiga — ale nie ta, o której wszyscy myślą. Chodzi o Jadwigę Kaliską, żonę Władysława Łokietka, bo święta Jadwiga Andegaweńska urodziła się prawie czterdzieści lat później.",
        "Jest tu jeszcze jedna rzecz, którą warto wiedzieć: to gmina graniczna kulturowo. W Boguszy stoi drewniana cerkiew świętego Dymitra z tysiąc osiemset pięćdziesiątego ósmego roku, z ikonostasem z tysiąc sześćset siedemdziesiątego i polichromią wykonaną w tysiąc osiemset siedemdziesiątym trzecim przez malarza z Bardiowa. A kilka kilometrów dalej, w Mystkowie, działa od dwa tysiące czternastego roku stuosobowy zespół regionalny, reprezentujący folklor pogranicza lachowsko-pogórzańskiego. Dwie tradycje obok siebie, w jednej gminie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Kamionka Wielka?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Gmina rozkłada się wzdłuż trzech dolin, a wsie ciągną się każda wzdłuż swojego potoku, więc trasa wygląda inaczej w zależności od tego, w którą stronę trzeba skręcić. Na cenę to nie wpływa.",
        "Do Nowego Sącza jest stąd osiem kilometrów i wielu mieszkańców tam pracuje. Jeśli tak jest u Was, powiedz — wtedy najprościej umówić się na wieczór albo weekend.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Kamionka Wielka"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której dzieci jest więcej niż emerytów",
      paragraphs: [
        "Osoby w wieku przedprodukcyjnym stanowią tu ponad dwadzieścia procent mieszkańców, a w poprodukcyjnym niewiele ponad dwanaście. To znaczy, że w tej gminie dzieci jest istotnie więcej niż emerytów — sytuacja rzadka i mówiąca dużo o tym, jak wyglądają tutejsze domy.",
        "Wygląda to tak, że przy stole siada zwykle więcej niż dwie, trzy osoby, a obiad musi obsłużyć kilka różnych rozkładów dnia naraz. Dzieci wracają ze szkoły wcześniej, dorośli po pracy w Nowym Sączu, a ktoś jeszcze prowadzi własną działalność, bo mikrofirma jest tu najczęstszą formą pracy.",
        "Najbardziej praktyczna rzecz jest przy takim stole prosta. Danie jednogarnkowe na sześć osób gotuje się bez pilnowania, samo się wyłącza i czeka. Nie stygnie w garnku od południa i nie przypala się, bo ktoś zapomniał zejść na dół.",
        "Druga to gotowanie z zapasem, przy większej rodzinie wręcz konieczne. Podwójna porcja zupy, sos na kilka dni, pasty kanapkowe, ciasto — robione seriami, w jednym naczyniu, w weekend.",
        "Trzecia dotyczy tego, kto gotuje. Przepis prowadzi krok po kroku, więc obiad może zrobić nastolatek, który wraca do domu pierwszy. W domu z kilkorgiem dzieci to nie jest ciekawostka, tylko realne odciążenie jednej osoby.",
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
    heading: "Kamionka Wielka i gotowanie — kuchnia na granicy dwóch tradycji",
    paragraphs: [
      "Zacznę uczciwie i bez owijania: nie znalazłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie, żadnej nazwy działającego koła gospodyń ani żadnej cyklicznej imprezy kulinarnej. Nie będę więc wymyślać gminie dorobku, którego nie umiem wskazać źródłem.",
      "To, co jest tu naprawdę interesujące, to położenie. Gmina leży na styku Beskidu Sądeckiego i zachodniej części Beskidu Niskiego, a kulturowo — na granicy dwóch światów. W Boguszy stoi drewniana cerkiew łemkowska, a w Mystkowie działa zespół reprezentujący folklor pogranicza lachowsko-pogórzańskiego.",
      "Kuchnia domowa ma tu więc po trochu z obu stron: ziemniaki w kilkunastu postaciach, kapusta, fasola, kwaśne zupy na zakwasie i mące, biały ser, mięso duszone długo i powoli. Bez jednej kanonicznej listy, bo takiej po prostu nie ma — jest za to konkretny sposób gotowania w konkretnym domu.",
      "Praktycznie oznacza to gotowanie w większych partiach. Przy tak młodej gminie, gdzie w domach jest po kilkoro dzieci, jedno danie robi się na kilka posiłków, a nie na jeden. To nie moda, tylko arytmetyka.",
      "Dla urządzenia najciekawsze są dwie rzeczy: dania długie, które trzeba dusić godzinami w niskiej temperaturze, oraz seryjne przygotowywanie — zupy, sosy, pasty, ciasto na pierogi, przetwory z ogródka. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część, która jest wyłącznie czasem — rozdrabnianie, wyrabianie, mieszanie i stanie przy garnku.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Kamionka Wielka dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez żadnej dopłaty za odległość. Gmina liczy ponad dziesięć i pół tysiąca mieszkańców na sześćdziesięciu pięciu kilometrach kwadratowych, z czego ponad czterdzieści sześć procent to lasy.",
    "Miejscowości jest osiem — Bogusza, Jamnica, Kamionka Mała, Kamionka Wielka, Królowa Górna, Królowa Polska, Mszalnica i Mystków — ale sołectw dziewięć, bo Mszalnica dzieli się na Mszalnicę i Mszalnicę-Zagórę. Największe są Kamionka Wielka i Mystków, obie po ponad dwa tysiące mieszkańców.",
    "Warto zobaczyć cerkiew świętego Dymitra w Boguszy z tysiąc osiemset pięćdziesiątego ósmego roku — drewnianą, z kopułkami cebulastymi, ikonostasem z tysiąc sześćset siedemdziesiątego i polichromią z tysiąc osiemset siedemdziesiątego trzeciego. Dziś służy jako kościół rzymskokatolicki i należy do Szlaku Architektury Drewnianej.",
    "Dojazd: do Nowego Sącza jest stąd osiem kilometrów. Przez gminę biegnie linia kolejowa z Tarnowa do Leluchowa, czynna od tysiąc osiemset siedemdziesiątego szóstego roku — to właśnie ona uruchomiła kiedyś tutejsze kamieniołomy i tartaki.",
  ],
  districts: [
    "Kamionka Wielka",
    "Mystków",
    "Mszalnica",
    "Mszalnica-Zagóra",
    "Królowa Górna",
    "Królowa Polska",
    "Bogusza",
    "Jamnica i Kamionka Mała",
  ],

  nearbyHeading: "Nowy Sącz, Nawojowa i gmina Grybów też są na mojej trasie",
  nearbyParagraphs: [
    "Do Nowego Sącza jest stąd osiem kilometrów, więc to naturalny kierunek dla większości mieszkańców. Dojeżdżam też do Nawojowej, Chełmca, Łabowej i gminy wiejskiej Grybów — bez doliczania kosztu dojazdu.",
    "Przy umawianiu wystarczy, że podasz sołectwo. Resztę zaplanuję sama.",
  ],
  nearbyTowns: [
    "Nowy Sącz",
    "Nawojowa",
    "Chełmiec",
    "Łabowa",
    "Grybów",
    "Kraków",
  ],

  about: blokOMnie("do gminy Kamionka Wielka", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "Mieszkam w Boguszy albo Królowej Górnej. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie sołectwa gminy traktuję dokładnie tak samo. Przy umawianiu podaj nazwę miejscowości — wsie ciągną się tu wzdłuż trzech różnych potoków, więc od tego zależy wyłącznie trasa.",
    },
    ...faqWspolne("w gminie Kamionka Wielka"),
    {
      question: "Mamy trójkę dzieci. Czy to zmienia sposób gotowania?",
      answer:
        "Zmienia i akurat na korzyść tego urządzenia. Przy większym stole najbardziej opłaca się gotowanie jednogarnkowe i z zapasem — jedna duża porcja bez pilnowania zamiast trzech osobnych rzeczy. Dochodzi jeszcze to, że przepis prowadzi krok po kroku, więc obiad może zrobić starsze dziecko. Na prezentacji chętnie ugotuję coś, co jada u Was cała rodzina.",
    },
  ],

  geo: { lat: 49.582, lng: 20.8374 },
};
