import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * RZEPIN — gmina miejsko-wiejska w powiecie słubickim.
 * MIASTO 6 355, GMINA 9 404 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 11,4 km², GMINY 191,0 km², 10 SOŁECTW:
 * Drzeńsko, Gajec, Kowalów, Lubiechnia Mała, Lubiechnia
 * Wielka, Radów, Serbów, Starków, Starościn, Sułów.
 * ⚠ Inne źródło mówi o 15 wsiach i osadach — podaję TYLKO
 *   liczbę sołectw ze strony gminy.
 * W rolnictwie pracuje 7,3% zatrudnionych.
 *
 * ⚠ HOMONIMY: RZEPINEK to WIEŚ W TEJ SAMEJ GMINIE, nie osobna
 * jednostka. RZEPIN PIERWSZY i RZEPIN DRUGI leżą
 * w ŚWIĘTOKRZYSKIEM. „Rzepino" nie istnieje. FAQ to rozróżnia.
 *
 * NAJSTARSZA WZMIANKA 1297 r. PRAWA MIEJSKIE 1329 r.
 * ⚠ Jedno źródło podaje „przed 1329" — piszę „w 1329 roku",
 *   za stroną gminy, ale bez rozstrzygania sporu w tekście.
 * ⚠⚠ ETYMOLOGIA — PODSTAWA KĄTA: NAZWĘ WYWODZI SIĘ OD RZEPY.
 * (Podawana jest też wersja od ryb — wymieniam obie.)
 * Średniowieczne umocnienia to nie mury kamienne, lecz WAŁY
 * ZIEMNO-DREWNIANE Z FOSAMI i dwie bramy.
 * W XIX w. mieszkańcy trudnili się SZEWSTWEM, SUKIENNICTWEM
 * I PIWOWARSTWEM. ⚠ Piwowarstwo jednym słowem, bez zachęty.
 *
 * GEOGRAFIA: OKOŁO POŁOWY POWIERZCHNI GMINY TO PUSZCZA
 * RZEPIŃSKA, rozciągająca się między Odrą, Wartą i Obrą.
 * SIEDEM JEZIOR, największe rekreacyjnie JEZIORO DŁUGIE
 * (8,5 ha) ze strzeżonym kąpieliskiem. Rzeka ILANKA.
 * 38 km szlaku rowerowego, 14 pomników przyrody.
 * KOLEJ: linia Berlin–Poznań 1870, węzeł 1874, odnogi
 * do Wrocławia 1874 i Międzyrzecza 1890.
 * ⚠ KĄTA KOLEJOWEGO NIE UŻYWAM — „węzeł kolejowy" ZAJĘTY.
 * ⚠ KĄTA GRZYBOWEGO NIE UŻYWAM — ZAJĘTY TRZYKROTNIE.
 *
 * ⚠⚠ PRODUKTY TRADYCYJNE — WAŻNE ROZRÓŻNIENIE:
 * Gospodarstwo rolno-agroturystyczne w LUBIECHNI WIELKIEJ
 * (sołectwo gminy RZEPIN) zgłosiło pięć produktów na
 * ministerialną Listę Produktów Tradycyjnych:
 * — SCHAB TRADYCYJNY SŁUBICKI (wpis 16.04.2012), peklowany,
 *   wędzony na zimno drewnem ze starych jabłoni lub śliw,
 * — CHLEB DOMOWY NA ZAKWASIE (wpis 31.05.2012), wyrabiany
 *   ręcznie, często z maślanką lub serwatką, pieczony w piecu
 *   opalanym drewnem,
 * — PIEROGI Z KASZĄ GRYCZANĄ I TWAROGIEM oraz PIEROGI
 *   Z KAPUSTĄ I GRZYBAMI LEŚNYMI (ogłoszone 17.12.2013),
 *   tradycja wiązana z Rzepinem i Lubiechnią Wielką,
 * — NALEWKA Z OWOCÓW DERENIA (wpis 15.05.2014).
 * ⚠⚠ PRZYMIOTNIK „SŁUBICKI" ODNOSI SIĘ DO POWIATU, NIE
 *   DO GMINY SŁUBICE. Piszę „zgłoszone przez gospodarstwo
 *   z gminy Rzepin", NIGDY „produkt gminy Rzepin".
 * ⚠ NALEWKI NIE OPISUJĘ — ZERO ZACHĘTY DO ALKOHOLU.
 * ⚠ KĄTÓW CHLEBOWEGO, PIEROGOWEGO I WĘDZARNICZEGO
 *   NIE UŻYWAM — wszystkie ZAJĘTE. Produkty podaję jako fakty.
 * Gospodarstwo prowadzi warsztaty kuchni staropolskiej
 * i należy do sieci zagród edukacyjnych.
 *
 * ŚWIĘTO PLONÓW GMINY RZEPIN — edycja 29 sierpnia 2026 r.
 * na Stadionie Miejskim: obrzęd dożynkowy, wieńce i STOISKA
 * Z POCZĘSTUNKIEM PRZYGOTOWANE PRZEZ SOŁECTWA. Bywa
 * organizowane pod nazwą „Zakończenie Lata w Puszczy
 * Rzepińskiej". ⚠ NUMERU EDYCJI NIE PODAJĘ.
 *
 * ZABYTKI: kościół (dziś Najświętszego Serca Pana Jezusa,
 * z elementami XIII-wiecznymi), NEOGOTYCKI RATUSZ z 1833 r.,
 * XVII-wieczny dworek myśliwski, 700-letni dąb we wsi Liszki.
 *
 * KĄT: WARZYWA, KTÓRE WYPADŁY Z UŻYCIA — rzepa, brukiew,
 * pasternak, topinambur.
 * Kąt od nazwy miasta, którą wywodzi się OD RZEPY.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że rzepa była przez wieki jednym z podstawowych warzyw
 *   w tej części Europy, a dziś większość ludzi nie umie jej
 *   rozpoznać w sklepie,
 * — DLACZEGO ZNIKNĘŁA: wyparł ją ziemniak, i to jest cała
 *   historia — nie moda, nie smak, tylko jeden konkurent,
 * — CO TO ZA WARZYWA: rzepa, brukiew, pasternak, topinambur
 *   — tanie, odporne, długo się przechowujące,
 * — ŻE MAJĄ WSPÓLNĄ CECHĘ, o której trzeba wiedzieć: są
 *   wyraziste i lekko gorzkawe, więc nie zachowują się jak
 *   ziemniak i nie da się ich podstawić jeden do jednego,
 * — CO Z NIMI ROBIĆ: pieczenie i karmelizacja zamieniają
 *   gorycz w słodycz — to jest klucz do wszystkich,
 * — ŻE ŚWIETNIE ZNOSZĄ TOWARZYSTWO TŁUSZCZU I CZEGOŚ
 *   SŁODKIEGO, a źle znoszą gotowanie w wodzie do miękkości,
 * — PASTERNAK wygląda jak biała marchewka i zachowuje się
 *   inaczej niż ona; TOPINAMBUR ma smak bliższy karczochowi
 *   niż ziemniakowi,
 * — ŻE W PURÉE MIESZANYM PÓŁ NA PÓŁ Z ZIEMNIAKIEM sprawdzają
 *   się najlepiej dla kogoś, kto próbuje ich pierwszy raz,
 * — UCZCIWIE: to nie są warzywa, które zastąpią codzienne
 *   dodatki, i nie udaję, że wszyscy je pokochają,
 * — ale są tanie, są przez większość roku dostępne i warto
 *   raz spróbować, zanim uzna się je za relikt,
 * — UCZCIWIE O SPRZĘCIE: urządzenie nie obierze ich za Ciebie,
 *   a są twarde i nieregularne — obieranie to najgorsza część,
 * — ale purée i zupy krem z warzyw korzeniowych wychodzą w nim
 *   gładkie bez przecierania i bez przelewania, a to jest
 *   akurat postać, w której te warzywa smakują najwięcej osób.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI (poza „pół na pół" jako zasadą, nie miarą).
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ZERO błonnika,
 *   ZERO indeksu glikemicznego, ZERO „zdrowsze niż ziemniak".
 *   Piszę o SMAKU, CENIE I PRZECHOWYWANIU. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ZERO ZACHĘTY DO ALKOHOLU (nalewka — pominięta).
 * — ZERO nostalgii i moralizowania („dawniej jedzono lepiej").
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Warzywa korzeniowe
 * i płaska ziemia" (Przeworsk) dotyczą regionu, który
 * te warzywa UPRAWIA, i marchwi, buraka, selera jako
 * codziennych dodatków. „Dania, które zniknęły z domowych
 * stołów" (Czyżew) dotyczą POTRAW, nie składników. „Buraki"
 * dotyczą jednego warzywa. „Ziemniaki" dotyczą ziemniaka.
 * „Dynia" dotyczy dyni. Tutaj chodzi o WARZYWA, KTÓRE
 * WYPADŁY Z CODZIENNEGO UŻYCIA, i o powód, dla którego
 * wypadły.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE ROZSTRZYGAM sporu „1329" kontra „przed 1329"
 *   w tekście — podaję rok za stroną gminy.
 * — NIE PISZĘ „produkt gminy Rzepin" o wpisach z Listy
 *   Produktów Tradycyjnych — piszę, kto je zgłosił.
 * — NIE OPISUJĘ nalewki.
 * — NIE PODAJĘ numeru edycji Święta Plonów.
 * — NIE PODAJĘ liczby miejscowości (sprzeczność).
 * — NIE MYLĘ RZEPINA z RZEPINEM PIERWSZYM i DRUGIM
 *   w świętokrzyskiem ani z RZEPINKIEM, który leży w tej
 *   samej gminie.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy ponad sześć tysięcy mieszkańców na 11,4 km²,
 *   cała gmina ponad dziewięć tysięcy na 191 km²,
 *   z dziesięcioma sołectwami,
 * — najstarsza wzmianka pochodzi z 1297 r., prawa miejskie
 *   z 1329; nazwę miasta wywodzi się od rzepy, choć podawana
 *   jest też wersja od ryb; średniowieczne umocnienia były
 *   nie kamienne, lecz ziemno-drewniane, z fosami i dwiema
 *   bramami, a w XIX w. mieszkańcy trudnili się szewstwem,
 *   sukiennictwem i piwowarstwem,
 * — około połowy powierzchni gminy zajmuje Puszcza Rzepińska,
 *   rozciągająca się między Odrą, Wartą i Obrą; jest tu
 *   siedem jezior, a największe rekreacyjnie Jezioro Długie
 *   ma 8,5 ha i strzeżone kąpielisko; płynie tędy Ilanka,
 *   wytyczono 38 km szlaku rowerowego i jest czternaście
 *   pomników przyrody,
 * — kolej dotarła tu w 1870 r. linią Berlin–Poznań, węzeł
 *   uformował się w 1874, a odnogi poprowadzono do Wrocławia
 *   i Międzyrzecza,
 * — gospodarstwo rolno-agroturystyczne z Lubiechni Wielkiej,
 *   jednego z sołectw gminy, zgłosiło na ministerialną Listę
 *   Produktów Tradycyjnych pięć wyrobów, w tym schab
 *   tradycyjny słubicki wpisany 16 kwietnia 2012 r., wędzony
 *   na zimno drewnem ze starych jabłoni lub śliw, chleb
 *   domowy na zakwasie wpisany 31 maja 2012 oraz pierogi
 *   z kaszą gryczaną i twarogiem i pierogi z kapustą
 *   i grzybami, ogłoszone w grudniu 2013; przymiotnik
 *   „słubicki” odnosi się przy tym do powiatu, nie do gminy
 *   Słubice. Gospodarstwo prowadzi warsztaty kuchni
 *   staropolskiej i należy do sieci zagród edukacyjnych,
 * — Święto Plonów gminy Rzepin odbywa się na Stadionie
 *   Miejskim — edycja zaplanowana na 29 sierpnia 2026 r.
 *   obejmuje obrzęd dożynkowy, wieńce i stoiska
 *   z poczęstunkiem przygotowane przez sołectwa; bywa
 *   organizowane pod nazwą „Zakończenie Lata w Puszczy
 *   Rzepińskiej”,
 * — z zabytków: kościół z elementami trzynastowiecznymi,
 *   neogotycki ratusz z 1833 r., siedemnastowieczny dworek
 *   myśliwski i siedemsetletni dąb we wsi Liszki.
 */
export const RZEPIN: CityContent = {
  slug: "rzepin",
  h1: "Thermomix Rzepin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rzepin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Rzepinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rzepin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rzepinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rzepina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Rzepin i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rzepy nie wyparła moda — wyparł ją ziemniak.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rzepinie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, aktualna promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "rzepa",
      heading: "Miasto, którego nazwę wywodzi się od rzepy — czyli o warzywach, które wypadły z użycia",
      paragraphs: [
        "Nazwę Rzepina wywodzi się najczęściej od rzepy. To dobra wizytówka, bo mówi coś o tym, co tu kiedyś rosło i co jadano — i jednocześnie przypomina o warzywie, którego dziś większość ludzi nie umiałaby wskazać w sklepie.",
        "A rzepa była przez stulecia jednym z podstawowych warzyw w tej części Europy. Jadano ją codziennie, przechowywano na zimę, robiono z niej to, co potem zaczęto robić z ziemniaków.",
        "I to jest cała historia jej zniknięcia: wyparł ją ziemniak. Nie moda, nie zmiana gustu, nie „upadek tradycji” — po prostu pojawił się konkurent, który dawał więcej z tego samego pola i był łagodniejszy w smaku. Rzepa przegrała i zeszła ze stołów w ciągu dwóch pokoleń.",
        "Razem z nią zeszła cała grupa: brukiew, pasternak, topinambur. Warzywa tanie, odporne i długo przechowujące się — a więc dokładnie takie, jakich w kuchni się szuka, gdy chce się gotować sensownie.",
        "Mają jednak wspólną cechę, o której trzeba wiedzieć, zanim się je kupi: są wyraziste i lekko gorzkawe. Nie zachowują się jak ziemniak i nie da się ich podstawić jeden do jednego. Kto spróbuje, zwykle się zniechęca — i to jest najczęstsza przyczyna, dla której ludzie mówią, że „nie smakują”.",
        "Klucz do wszystkich jest jeden: pieczenie. W wysokiej temperaturze ich cukry karmelizują się i gorycz zamienia się w słodycz. To samo warzywo ugotowane w wodzie do miękkości i upieczone to dwa zupełnie różne doświadczenia, i tylko jedno z nich warto powtarzać.",
        "Z tego wynika reszta. Lubią towarzystwo tłuszczu i czegoś słodkiego — masła, miodu, pieczonej cebuli, jabłka. Nie lubią gotowania w dużej ilości wody, po którym zostaje z nich wodnista miękkość i sama gorycz.",
        "Warto też wiedzieć, czym się różnią, bo wyglądy mylą. Pasternak wygląda jak biała marchewka, ale zachowuje się zupełnie inaczej — jest słodszy i bardziej aromatyczny. Topinambur ma smak bliższy karczochowi niż ziemniakowi, mimo że kształtem przypomina ten drugi.",
        "Dla kogoś, kto próbuje ich pierwszy raz, najbezpieczniejsza jest jedna droga: purée pół na pół z ziemniakiem. Ziemniak łagodzi, tamto warzywo dodaje charakteru, i nagle okazuje się, że to jest bardzo dobre — a nie dziwne.",
        "Nie będę udawać, że to są warzywa, które zastąpią codzienne dodatki, ani że wszyscy je pokochają. Są tańsze od wielu rzeczy w koszyku, dostępne przez większość roku i po prostu warte jednej próby, zanim uzna się je za relikt.",
        "Teraz uczciwie o sprzęcie. Thermomix ich nie obierze, a są twarde i nieregularne — obieranie to przy nich zdecydowanie najgorsza część roboty i zostaje po Twojej stronie.",
        "Robi natomiast to, co przy tych warzywach ma największe znaczenie: purée i zupy krem wychodzą gładkie, bez przecierania przez sito i bez przelewania gorącego do blendera. A akurat gładka, kremowa postać jest tą, w której warzywa korzeniowe smakują największej liczbie osób — łącznie z tymi, które twierdzą, że ich nie lubią.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rzepinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy w domu ktoś nie przepada za warzywami. Wtedy pokażę zupy krem — to najlepszy sposób na taki dom.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rzepinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rzepińskiej rodziny",
      paragraphs: [
        "Samo miasto liczy ponad sześć tysięcy mieszkańców na jedenastu kilometrach kwadratowych, a cała gmina ponad dziewięć tysięcy na stu dziewięćdziesięciu jeden, z dziesięcioma sołectwami. Najstarsza wzmianka o Rzepinie pochodzi z 1297 roku, prawa miejskie z 1329, a nazwę wywodzi się od rzepy — choć podawana jest też wersja od ryb. Średniowieczne umocnienia były tu nie kamienne, lecz ziemno-drewniane, z fosami i dwiema bramami, a w XIX wieku mieszkańcy trudnili się szewstwem, sukiennictwem i piwowarstwem. Około połowy powierzchni gminy zajmuje Puszcza Rzepińska, rozciągająca się między Odrą, Wartą i Obrą; jest tu siedem jezior, a największe rekreacyjnie Jezioro Długie ma osiem i pół hektara i strzeżone kąpielisko. Płynie tędy Ilanka, wytyczono trzydzieści osiem kilometrów szlaku rowerowego i stoi czternaście pomników przyrody. Kolej dotarła do Rzepina w 1870 roku linią Berlin–Poznań, a węzeł uformował się cztery lata później. Gospodarstwo rolno-agroturystyczne z Lubiechni Wielkiej, jednego z sołectw gminy, zgłosiło na ministerialną Listę Produktów Tradycyjnych pięć wyrobów — w tym schab tradycyjny słubicki, wpisany 16 kwietnia 2012 roku i wędzony na zimno drewnem ze starych jabłoni lub śliw, chleb domowy na zakwasie wpisany 31 maja tego samego roku oraz dwa rodzaje pierogów ogłoszone w grudniu 2013; przymiotnik „słubicki” odnosi się przy tym do powiatu, nie do gminy Słubice. Gospodarstwo prowadzi też warsztaty kuchni staropolskiej i należy do sieci zagród edukacyjnych. Święto Plonów gminy odbywa się na Stadionie Miejskim, z obrzędem dożynkowym, wieńcami i stoiskami z poczęstunkiem przygotowanymi przez sołectwa. Z zabytków zostały kościół z elementami trzynastowiecznymi, neogotycki ratusz z 1833 roku, siedemnastowieczny dworek myśliwski i siedemsetletni dąb we wsi Liszki.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z dzieckiem przy Thermomixie TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części gminy Rzepin dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziesięciu sołectw. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Rzepin też przyjadę",
  nearbyParagraphs: [
    "Słubice, Ośno Lubuskie, Cybinka, Torzym i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Słubice", "Ośno Lubuskie", "Cybinka", "Torzym"],

  about: blokOMnie("do Rzepina", "w Rzepinie i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rzepina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziesięciu sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Rzepin w powiecie słubickim to nie Rzepin Pierwszy ani Rzepin Drugi w świętokrzyskiem, a Rzepinek to wieś w tej samej gminie.",
    },
    ...faqWspolne("w Rzepinie"),
    {
      question: "Dlaczego rzepa zniknęła z polskich stołów?",
      answer:
        "Wyparł ją ziemniak — dawał więcej z tego samego pola i był łagodniejszy w smaku. To nie była kwestia mody ani gustu, tylko jednego konkurenta. Razem z rzepą zeszły brukiew, pasternak i topinambur.",
    },
    {
      question: "Jak przyrządzać rzepę, brukiew i pasternak?",
      answer:
        "Piec, a nie gotować w wodzie. W wysokiej temperaturze ich cukry karmelizują się i gorycz zamienia się w słodycz; lubią przy tym tłuszcz i coś słodkiego — masło, miód, pieczone jabłko. Gotowane w dużej ilości wody zostawiają samą wodnistą gorycz.",
    },
    {
      question: "Od czego zacząć, jeśli nigdy się ich nie jadło?",
      answer:
        "Od purée pół na pół z ziemniakiem. Ziemniak łagodzi, drugie warzywo dodaje charakteru — i nagle wychodzi coś bardzo dobrego zamiast dziwnego. Nie da się ich natomiast podstawić jeden do jednego za ziemniaka, bo są znacznie bardziej wyraziste.",
    },
  ],

  geo: { lat: 52.3486, lng: 14.8283 },
};
