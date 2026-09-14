import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * PRZYSUCHA — powiat przysuski, woj. mazowieckie.
 * MIASTO 5 245 (GUS 31.12.2024), 7,0 km², 747,2 os./km².
 * Gmina: 10 772 osoby, 181,5 km².
 * ⚠⚠ STRONA GMINY PODAJE 12 094 (miasto 6 152) ZA KONIEC
 *   2020 R. — DANE ZAWYŻONE O PONAD 15%. NIE UŻYWAĆ.
 *   Obowiązuje GUS 31.12.2024. TWARDA GRANICA.
 *
 * ⚠⚠ ODMIANA — NAJCZĘSTSZY BŁĄD:
 *   Poradnia Języka Polskiego PWN rozstrzyga: nazwa odmienia
 *   się jak rzeczownik, czyli „DO PRZYSUCHY" i „W PRZYSUSZE".
 *   ⚠ NIGDY „w Przysuchie". TWARDA GRANICA — SPRAWDZIĆ
 *   KAŻDE WYSTĄPIENIE W PLIKU.
 *   Przymiotnik: „przysuski".
 * ⚠ Nazwa unikalna w Polsce, ale w tej samej gminie istnieje
 *   osobna wieś PRZYSUCHA-WIEŚ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1415 pierwsza wzmianka („Przesucha"),
 * — koniec XVII w. — Antoni Czermiński wykorzystuje miejscowe
 *   złoża rudy, lasy i sieć rzeczek, buduje kuźnice,
 * — 1710 — sprowadzenie 24 wykwalifikowanych rzemieślników,
 *   osadzonych na prawie magdeburskim; 11 grudnia 1710
 *   przywilej Augusta II Mocnego z PRAWEM TARGÓW,
 *   ⚠⚠ RZEMIEŚLNICY TO BYLI KOWALE, ŚLUSARZE I PUSZKARZE.
 *   ⚠ PUSZKARZY NIE WYMIENIAM — CAŁY WĄTEK ZBROJENIOWY
 *   (szabelnia, rusznikarnia, manufaktura pistoletów, lufy
 *   i działa w wielkim piecu w Janowie) JEST POZA TREŚCIĄ.
 *   Piszę wyłącznie „kowale i ślusarze". TWARDA GRANICA.
 * — 1723 i 1745 kolejne osady; przywilej lokacyjny z 1745
 *   łączy trzy osady → UNIKATOWY UKŁAD TRZECH RYNKÓW,
 *   czytelny do dziś,
 * — ⚠⚠ PODSTAWA KĄTA: DZIEWIĘĆ ZBIORNIKÓW WODNYCH
 *   SPIĘTRZONYCH NA RZECE BIELCZANCE napędzało kuźnice,
 *   PAPIERNIĘ, MŁYNY, TARTAKI I OLEJARNIE,
 * — 1830 — odlewnia żeliwa, działająca do dziś.
 * ⚠ DATY PRAW MIEJSKICH SPRZECZNE: utrata 1869 albo 1870,
 *   przywrócenie 1957 albo 1958. ⚠ NIE PODAJĘ ICH W OGÓLE —
 *   ani utraty, ani odzyskania. TWARDA GRANICA.
 *
 * DZIŚ: przetwórstwo rolno-spożywcze (mrożonki
 * owocowo-warzywne) i przemysł ceramiczny (ceramika
 * klinkierowa z gliny).
 * ⚠ POWIAT PRZYSUSKI wraz z białobrzeskim i radomskim tworzy
 *   NAJWIĘKSZE ZAGŁĘBIE PAPRYKOWE W POLSCE: centrum
 *   to gminy Potworów, Klwów, Przytyk i Rusinów, blisko
 *   500 ha uprawy (400 ha w tunelach, 100 ha w gruncie),
 *   ok. 45 tys. ton rocznie.
 *   ⚠⚠ KĄT „PAPRYKA/OSTROŚĆ" ZAJĘTY (krosno-odrzanskie.ts),
 *   KĄT „MROŻONKI" ZAJĘTY (plonsk.ts). OBA PODAJĘ
 *   WYŁĄCZNIE JAKO FAKTY W BLOKU O MIEŚCIE. TWARDA GRANICA.
 *
 * ⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK wpisu z gminy
 *   Przysucha. ⚠ TRZY PUŁAPKI NARAZ:
 *   — „papryka przytycka" (28.07.2011) — gmina PRZYTYK,
 *     powiat RADOMSKI, nie Przysucha,
 *   — wyroby „szydłowieckie" (kaszanka 23.03.2010 i inne) —
 *     powiat SZYDŁOWIECKI,
 *   — „trepy po załawsku" (02.08.2019) i „kwas chlebowy
 *     z Załawy" (10.04.2020) — Zaława w gminie CHLEWISKA,
 *     powiat szydłowiecki.
 *   ŻADNEGO Z NICH NIE WYMIENIAM.
 * ⚠ OSIEDLI W MIEŚCIE NIE USTALONO (gmina ma 23 sołectwa) —
 *   districts PUSTE.
 *
 * KĄT: ODPAROWANIE — smak, który zostaje, gdy woda odejdzie.
 * Kąt od dziewięciu spiętrzeń na Bielczance: całe miasto
 * powstało z zatrzymywania wody. W kuchni robi się rzecz
 * dokładnie odwrotną — wodę się wypuszcza, żeby została
 * reszta.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Przysucha zbudowała swoje rzemiosło na zatrzymywaniu
 *   wody — dziewięć zbiorników na jednej niedużej rzece
 *   napędzało kuźnice, młyny, tartaki, papiernię i olejarnie,
 * — ŻE W KUCHNI ROBI SIĘ ODWROTNIE I ŻE TO JEST JEDNA
 *   Z NAJMNIEJ ROZUMIANYCH RZECZY: gotowanie bez przykrycia
 *   nie jest niedbalstwem, tylko techniką,
 * — ŻE SMAK NIE JEST DODAWANY, TYLKO ZAGĘSZCZANY: w garnku
 *   nic nie przybywa, ubywa tylko wody, a wszystko inne
 *   zostaje w mniejszej objętości,
 * — ⚠⚠ ŻE STĄD BIERZE SIĘ NAJCZĘSTSZY BŁĄD: SOLENIE
 *   NA POCZĄTKU DANIA, KTÓRE BĘDZIE SIĘ DŁUGO ODPAROWYWAŁO.
 *   Sól nie odparowuje razem z wodą — zostaje w całości
 *   i zagęszcza się wraz z resztą. TO JEST NAJUŻYTECZNIEJSZA
 *   RZECZ W CAŁYM TEKŚCIE,
 * — ŻE TO SAMO DOTYCZY WSZYSTKIEGO SŁONEGO: bulionu w kostce,
 *   sosu sojowego, oliwek, kaparów, sera dodanego wcześnie
 *   ⚠ BEZ NAZW MAREK,
 * — ŻE PRZYKRYWKA JEST WŁĄCZNIKIEM I WYŁĄCZNIKIEM tego
 *   procesu, a nie ozdobą: pod przykryciem para wraca
 *   do garnka i nic się nie redukuje,
 * — ŻE SZEROKI GARNEK ODPAROWUJE SZYBCIEJ NIŻ WYSOKI —
 *   przy tej samej ilości i tym samym ogniu decyduje
 *   powierzchnia,
 * — ŻE DLATEGO SOSU NIE RATUJE SIĘ MĄKĄ W PIERWSZEJ
 *   KOLEJNOŚCI ⚠ ODSYŁAM DO STRONY O ZAGĘSZCZANIU,
 *   NIE ROZWIJAM,
 * — ⚠⚠ UCZCIWIE I NAJWAŻNIEJSZE O SPRZĘCIE: URZĄDZENIE
 *   ODPAROWUJE SŁABIEJ NIŻ SZEROKI GARNEK BEZ POKRYWKI.
 *   Naczynie jest wysokie i wąskie, a przy mieszaniu zwykle
 *   zamknięte. To jest REALNE OGRANICZENIE i mówię o nim
 *   wprost, bo to jedna z niewielu rzeczy, w których
 *   patelnia i szeroki garnek są po prostu lepsze.
 *   TO JEST NAJWAŻNIEJSZE ZDANIE STRONY.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW NA SOSY.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — w szczególności
 *   ⚠ ZERO porad o ograniczaniu soli ze względów
 *   zdrowotnych. Mówię wyłącznie o SMAKU I O TYM,
 *   CO SIĘ DZIEJE W GARNKU. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ZERO TEMATU ALKOHOLU — nie piszę o odparowywaniu wina.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠ ZERO CAŁEGO WĄTKU ZBROJENIOWEGO: szabelnia,
 *   rusznikarnia, manufaktura pistoletów, produkcja dział
 *   i luf. Historię przemysłu podaję WYŁĄCZNIE jako kuźnice,
 *   młyny, olejarnie, papiernię, tartaki i odlewnię żeliwa.
 *   TWARDA GRANICA.
 * — ZERO Przysuchy jako ośrodka chasydyzmu, synagogi
 *   i historii społeczności żydowskiej; ZERO tematów
 *   wojennych i imprez o charakterze wojennym.
 * — ZERO utraty praw miejskich i jej przyczyn.
 * — ⚠ ZERO bezrobocia (najwyższe z całej fali), biedy,
 *   wyludniania i starzenia się populacji.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „ZAGĘSZCZANIE" (Barczewo) dotyczy RATOWANIA DANIA,
 *   w którym jest za dużo płynu — czyli awarii. TUTAJ
 *   odparowanie jest TECHNIKĄ PLANOWANĄ OD POCZĄTKU.
 * — „DUSZENIE" (Łagów) dotyczy WOLNEGO GOTOWANIA
 *   POD PRZYKRYCIEM — czyli sytuacji, w której para MA
 *   wracać. To jest dokładnie druga strona tej samej monety
 *   i strony się nie powtarzają.
 * — „OSŁONA" (Lipsk) dotyczy PRZYKRYWANIA JEDZENIA POZA
 *   GOTOWANIEM.
 * — „ZASMAŻKA" (Ozorków) dotyczy MĄKI Z TŁUSZCZEM.
 * — „WODA PO GOTOWANIU" (Ryn) dotyczy TEGO, CO ZOSTAJE
 *   W GARNKU PO ODCEDZENIU.
 * TUTAJ chodzi o CELOWE POZBYWANIE SIĘ WODY i o to,
 * co wtedy dzieje się z solą.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ „w Przysuchie" — poprawnie „w Przysusze".
 * — NIE WSPOMINAM o puszkarzach ani o zbrojeniówce.
 * — NIE PODAJĘ dat utraty i odzyskania praw miejskich.
 * — NIE UŻYWAM liczby ludności ze strony gminy.
 * — NIE PRZYPISUJĘ Przysusze papryki przytyckiej ani wyrobów
 *   szydłowieckich.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Przysucha liczy 5 245 mieszkańców (GUS, 31.12.2024)
 *   na 7 km², a cała gmina 10 772 osoby na 181,5 km²,
 * — pierwsza wzmianka pochodzi z 1415 roku; pod koniec
 *   XVII wieku Antoni Czermiński wykorzystał miejscowe złoża
 *   rudy, lasy i sieć rzeczek i zbudował tu kuźnice,
 * — w 1710 roku sprowadzono dwudziestu czterech
 *   wykwalifikowanych rzemieślników — kowali i ślusarzy —
 *   osadzonych na prawie magdeburskim, a przywilej Augusta II
 *   Mocnego z tego samego roku potwierdził osadę i dał
 *   jej prawo targów,
 * — kolejne osady powstały w 1723 i 1745 roku, a przywilej
 *   lokacyjny z 1745 połączył je w jedno miasto — stąd
 *   unikatowy w skali Mazowsza układ trzech rynków,
 *   czytelny do dziś,
 * — dziewięć zbiorników wodnych spiętrzonych na rzece
 *   Bielczance napędzało kuźnice, papiernię, młyny, tartaki
 *   i olejarnie, a w 1830 roku powstała odlewnia żeliwa,
 *   działająca do dziś,
 * — dziś miasto żyje z przetwórstwa rolno-spożywczego
 *   i z przemysłu ceramicznego, a powiat przysuski wraz
 *   z białobrzeskim i radomskim tworzy największe zagłębie
 *   paprykowe w Polsce — blisko pięćset hektarów uprawy
 *   i około czterdziestu pięciu tysięcy ton rocznie.
 */
export const PRZYSUCHA: CityContent = {
  slug: "przysucha",
  h1: "Thermomix Przysucha – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Przysucha — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Przysusze: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Przysucha — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Przysusze. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Przysuchy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Przysucha"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Woda odparowuje. Sól zostaje w całości — dlatego solimy na końcu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Przysusze – jak wygląda prezentacja?",
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
      id: "odparowanie",
      heading: "Woda, którą się wypuszcza — i smak, który zostaje",
      paragraphs: [
        "Przysucha powstała z zatrzymywania wody. Na niedużej Bielczance spiętrzono dziewięć zbiorników, a ich energia napędzała kuźnice, młyny, tartaki, papiernię i olejarnie. Całe rzemiosło tego miasta polegało na tym, żeby wody nie puścić dalej.",
        "W kuchni robi się rzecz dokładnie odwrotną i jest to jedna z najmniej rozumianych czynności przy garnku. Gotowanie bez przykrycia nie jest niedbalstwem ani zapomnieniem. To jest technika i ma własną nazwę: odparowanie.",
        "Rzecz polega na tym, że w garnku, który się redukuje, nic nie przybywa. Ubywa wyłącznie wody, a wszystko inne — smak, tłuszcz, cukry, przyprawy — zostaje w coraz mniejszej objętości. Dlatego długo gotowany sos robi się intensywny, choć nikt nic do niego nie dosypał. Smak nie został dodany, tylko ściśnięty.",
        "I stąd bierze się błąd, który popełniają wszyscy, łącznie ze mną, kiedy się spieszę.",
        "Sól nie odparowuje razem z wodą. Zostaje w całości. Więc jeśli dosypiemy jej na początku dania, które ma się gotować godzinę i zredukować o połowę, to na końcu mamy tę samą sól w dwa razy mniejszym sosie. Danie nie jest „przesolone przez przypadek” — zostało przesolone z góry, tylko jeszcze o tym nie wiedziało.",
        "To samo dotyczy wszystkiego, co samo w sobie jest słone: bulionu w kostce, sosu sojowego, oliwek, kaparów, sera dodanego wcześnie, wędzonki. Wszystkie one zachowają się dokładnie tak jak sól. Dlatego dania, które mają się długo gotować, dosala się pod koniec, kiedy już widać, ile z nich zostało.",
        "Druga rzecz: przykrywka jest w tym wszystkim włącznikiem i wyłącznikiem, a nie ozdobą. Pod przykryciem para skrapla się i wraca do garnka, więc nic się nie redukuje, choćby gotowało się trzy godziny. Jeśli sos ma zgęstnieć, pokrywka musi zejść — a jeśli ma nie zgęstnieć, musi zostać.",
        "Trzecia, mniej oczywista: przy tej samej ilości i tym samym ogniu szeroki garnek odparowuje szybciej niż wysoki. Decyduje powierzchnia, z której para ma czym uciec. To dlatego sos redukuje się na patelni w kilka minut, a w wąskim rondlu stoi i nic nie robi.",
        "Sos, który jest za rzadki, można oczywiście zagęścić — ale to jest inna rozmowa i pisałam o niej osobno. Tutaj chodzi o to, że najczęściej wystarczy zdjąć pokrywkę i poczekać.",
        "Teraz uczciwie o sprzęcie i to jest najważniejsze zdanie na tej stronie. Thermomix odparowuje słabiej niż szeroki garnek bez pokrywki. Naczynie jest wysokie i wąskie, a podczas mieszania zwykle zamknięte — czyli ma dokładnie te dwie cechy, które redukcję spowalniają.",
        "To jest realne ograniczenie i nie zamierzam go ładnie opakowywać. Jeśli ktoś robi sosy, które żyją z mocnej redukcji, szeroka patelnia albo szeroki garnek zrobią to lepiej i szybciej. Urządzenie nadrabia w innych miejscach — pilnuje temperatury, miesza samo i nie przypala — ale akurat tu nie jest najlepszym narzędziem i wolę to powiedzieć teraz niż po zakupie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Przysusze?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcesz zobaczyć, gdzie to urządzenie jest naprawdę dobre, a gdzie ustępuje zwykłej patelni — powiedz to przy umawianiu. To dobra rozmowa na spotkanie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Przysusze"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla przysuskiej rodziny",
      paragraphs: [
        "Przysucha liczy nieco ponad pięć tysięcy dwieście mieszkańców na siedmiu kilometrach kwadratowych, a cała gmina blisko jedenaście tysięcy osób na stu osiemdziesięciu jeden kilometrach. Pierwsza wzmianka o niej pochodzi z 1415 roku, a pod koniec XVII wieku Antoni Czermiński wykorzystał miejscowe złoża rudy, lasy i sieć rzeczek i zbudował tu kuźnice. W 1710 roku sprowadzono dwudziestu czterech wykwalifikowanych rzemieślników — kowali i ślusarzy — osadzonych na prawie magdeburskim, a przywilej Augusta II Mocnego z tego samego roku potwierdził osadę i dał jej prawo targów. Kolejne osady powstały w 1723 i 1745 roku, a przywilej lokacyjny z 1745 połączył je w jedno miasto; stąd unikatowy w skali Mazowsza układ trzech rynków, czytelny do dziś. Dziewięć zbiorników wodnych spiętrzonych na Bielczance napędzało kuźnice, papiernię, młyny, tartaki i olejarnie, a w 1830 roku powstała odlewnia żeliwa, która działa do dziś. Współcześnie miasto żyje z przetwórstwa rolno-spożywczego i z przemysłu ceramicznego, a powiat przysuski wraz z białobrzeskim i radomskim tworzy największe zagłębie paprykowe w Polsce — blisko pięćset hektarów uprawy i około czterdziestu pięciu tysięcy ton rocznie.",
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

  districtsHeading: "Do których części Przysuchy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — do wszystkich trzech rynków i do osiedli przy wylotach dróg. Dojeżdżam też do wsi w gminie, w tym do Skrzyńska i Smogorzowa.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Przysuchę też przyjadę",
  nearbyParagraphs: [
    "Potworów, Klwów, Rusinów, Gielniów, Borkowice, Odrzywół, Szydłowiec i Opoczno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Szydłowiec", "Radom", "Opoczno", "Końskie"],

  about: blokOMnie("do Przysuchy", "w Przysusze", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Przysuchy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie — od okolic trzech rynków po Skrzyńsko i Smogorzów. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Przysusze"),
    {
      question: "Dlaczego długo gotowany sos bywa przesolony, choć soli się nie dodawało?",
      answer:
        "Bo sól nie odparowuje razem z wodą — zostaje w całości. Jeśli danie gotuje się długo i redukuje o połowę, ta sama sól jest na końcu w dwa razy mniejszej objętości. Dlatego potrawy, które mają się długo gotować, dosala się pod koniec. Tak samo zachowują się bulion w kostce, sos sojowy, oliwki, kapary i ser dodany wcześnie.",
    },
    {
      question: "Czy Thermomix dobrze redukuje sosy?",
      answer:
        "Słabiej niż szeroki garnek albo patelnia — i mówię to wprost. Naczynie jest wysokie i wąskie, a podczas mieszania zwykle zamknięte, czyli ma obie cechy, które spowalniają odparowanie. Przy sosach żyjących z mocnej redukcji lepiej sprawdzi się patelnia. Urządzenie nadrabia gdzie indziej: pilnuje temperatury, miesza samo i nie przypala.",
    },
  ],

  geo: { lat: 51.3667, lng: 20.6167 },
};
