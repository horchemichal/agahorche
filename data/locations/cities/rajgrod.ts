import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * RAJGRÓD — gmina miejsko-wiejska w powiecie grajewskim.
 * MIASTO 1 401, GMINA 4 570 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 35,3 km² (!), GMINY 207,2 km².
 * GMINA OBEJMUJE MIASTO I 33 WSIE I OSADY.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 * ⚠ Notatka projektowa podawała 1 600 — ZAWYŻONE.
 * ⚠⚠ STRONA URZĘDU MIEJSKIEGO PODAJE 5 969 (gmina)
 * i 1 799 (miasto) — DANE WYRAŹNIE NIEAKTUALNE. NIE UŻYWAM.
 * Struktura: 5 879 ha lasów, 1 254 ha wód, 58% gruntów
 * użytkowanych rolniczo. Charakter rolniczo-turystyczny.
 * ⚠ EWENEMENT: 35,3 km² miasta przy 1 401 mieszkańcach.
 *
 * PRAWO MAGDEBURSKIE 1568 r. Miasto KRÓLEWSKIE i siedziba
 * powiatu od 1571 r. do trzeciego rozbioru.
 * ⚠ NADAWCY NIE PODAJĘ — nie potwierdzono.
 * Osadnictwo sięga JAĆWINGÓW, którzy zbudowali gród nad
 * brzegiem jeziora. GÓRA ZAMKOWA — pozostałości zamku
 * z XIV w., z fundacji KAZIMIERZA WIELKIEGO, nigdy w pełni
 * nieukończonego; dziś wały ziemne.
 *
 * ⚠⚠ JEZIORO RAJGRODZKIE — PODSTAWA KĄTA:
 * POWIERZCHNIA 1 514 ha. GŁĘBOKOŚĆ MAKSYMALNA 52 m,
 * ŚREDNIA 9,4 m. 18. NAJWIĘKSZE JEZIORO W POLSCE
 * (wg Urzędu Miejskiego). Leży na POJEZIERZU EŁCKIM.
 * Kompleks połączonych akwenów: Przepiórka, Stackie,
 * Czarnowiejskie. GATUNKI RYB: SZCZUPAK, OKOŃ, LESZCZ,
 * SIEJA, WĘGORZ.
 * ⚠ ŹRÓDŁO PODAJE SIEJĘ, NIE SIELAWĘ. Nie zamieniam.
 * Inne jeziora gminy: Dreństwo i Tajno.
 * Miasto leży na WSCHODNIEJ ZATOCE Jeziora Rajgrodzkiego.
 * Gmina GRANICZY z Biebrzańskim Parkiem Narodowym
 * i z kompleksem bagiennym CZERWONE BAGNO.
 * ⚠ NIE PISZĘ, że gmina leży W parku.
 * ⚠⚠ NIE PISZĘ, ŻE RAJGRÓD LEŻY NA KANALE AUGUSTOWSKIM —
 * HIPOTEZA NIEPOTWIERDZONA. Potwierdzona tylko bliskość
 * Augustowa i szlaki kajakowe.
 * ⚠ TYPU JEZIORA, DŁUGOŚCI LINII BRZEGOWEJ I RZEKI ODPŁYWOWEJ
 * NIE PODAJĘ.
 *
 * Główni pracodawcy gminy: zakłady przetwórstwa mięsnego
 * i infrastruktura turystyczna. ⚠ BEZ NAZW FIRM.
 * RAJGRÓD NIE NALEŻY DO CITTASLOW (nie potwierdzono).
 * ⚠ NIE PRZYPISUJĘ Rajgrodowi produktu z Listy Produktów
 * Tradycyjnych — nie ma takiego. „Sielawa wędzona (morenka)"
 * to WOJEWÓDZTWO POMORSKIE, zero związku z Rajgrodem.
 *
 * KĄT: TŁUSTE KONTRA CHUDE — jak zawartość tłuszczu
 * w składniku zmienia całą obróbkę.
 * Kąt od jednego jeziora, w którym żyją obok siebie
 * chuda sieja i tłusty węgorz.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że tłustość składnika mówi o tym, jak go gotować, więcej
 *   niż jego nazwa, a przepisy prawie nigdy o tym nie mówią,
 * — CHUDE (pierś z kurczaka, dorsz, sieja, polędwica, twaróg
 *   chudy): mało wybacza, szybko wysycha, potrzebuje krótkiej
 *   obróbki albo tłuszczu z zewnątrz i wilgoci,
 * — TŁUSTE (karkówka, boczek, węgorz, makrela, łopatka,
 *   udka): wybacza dużo, znosi długie duszenie, samo się
 *   nawilża, ale wymaga czegoś kwaśnego do przełamania,
 * — że stąd bierze się reguła, której nikt nie zapisuje:
 *   CHUDE — krótko i wilgotno, TŁUSTE — długo i sucho,
 * — że najczęstszy błąd to duszenie chudego mięsa godzinami
 *   „żeby zmiękło" — ono nie zmięknie, tylko wyschnie,
 * — że w warzywach odpowiednikiem tłustości jest zawartość
 *   wody i skrobi,
 * — że tłuszcz jest nośnikiem smaku i aromatu, więc danie
 *   całkowicie odtłuszczone bywa po prostu mdłe,
 * — UCZCIWIE: to urządzenie faworyzuje jedną z tych grup —
 *   tłuste i twarde znosi znakomicie, chude potrafi wysuszyć,
 *   bo gotuje długo i równo,
 * — dlatego do chudych rzeczy warto używać funkcji gotowania
 *   na parze zamiast duszenia w naczyniu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ANI DIETETYCZNYCH.
 *   ZERO o tłuszczu a cholesterolu, ZERO o kaloriach,
 *   ZERO o „zdrowszym" i „mniej zdrowym". Piszę WYŁĄCZNIE
 *   o technice i smaku. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — Górę Zamkową podaję jako pozostałość budowli, ZERO wątku
 *   militarnego i ZERO Jaćwingów jako tematu podboju —
 *   wymieniam ich wyłącznie jako pierwszych osadników.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ryba" i „ryby" jako
 * kąty dotyczą samego surowca i tego, co urządzenie z nim
 * zrobi. „Topienie masła i klarowanie" dotyczy jednego
 * tłuszczu. „Wielkość kawałków" (Orzysz) dotyczy rozmiaru.
 * „Twarde rzeczy" (Nidzica) dotyczą twardości surowca.
 * Tutaj chodzi o ZAWARTOŚĆ TŁUSZCZU jako o cechę, która
 * dyktuje metodę obróbki.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ o Kanale Augustowskim w kontekście Rajgrodu.
 * — NIE PODAJĘ typu jeziora, linii brzegowej ani rzeki
 *   odpływowej.
 * — NIE ZAMIENIAM siei na sielawę.
 * — NIE PISZĘ, że gmina leży w Biebrzańskim PN — graniczy.
 * — NIE PODAJĘ nadawcy praw miejskich ani liczby sołectw.
 * — NIE UŻYWAM liczb ludności ze strony urzędu miejskiego.
 * — NIE PRZYPISUJĘ Rajgrodowi produktu z Listy Produktów
 *   Tradycyjnych.
 * — NIE MYLĘ RAJGRODU z GRAJEWEM (siedzibą powiatu).
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 401 mieszkańców na 35,3 km² — jak na miasto
 *   tej wielkości bardzo rozległe; gmina 4 570 mieszkańców
 *   na 207,2 km², w tym 5 879 ha lasów i 1 254 ha wód,
 *   przy 58% gruntów użytkowanych rolniczo,
 * — prawo magdeburskie z 1568 r.; miasto królewskie i siedziba
 *   powiatu od 1571 r. do trzeciego rozbioru,
 * — osadnictwo sięga Jaćwingów, którzy zbudowali gród nad
 *   jeziorem; na Górze Zamkowej zachowały się wały ziemne
 *   po czternastowiecznym zamku z fundacji Kazimierza
 *   Wielkiego, nigdy w pełni nieukończonym,
 * — Jezioro Rajgrodzkie ma 1 514 ha powierzchni, 52 m
 *   głębokości maksymalnej i 9,4 m średniej; to osiemnaste
 *   co do wielkości jezioro w Polsce, leżące na Pojezierzu
 *   Ełckim i złożone z połączonych akwenów — Przepiórki,
 *   Stackiego i Czarnowiejskiego; żyją w nim szczupak, okoń,
 *   leszcz, sieja i węgorz,
 * — miasto leży na wschodniej zatoce jeziora; w gminie są też
 *   jeziora Dreństwo i Tajno, a gmina graniczy z Biebrzańskim
 *   Parkiem Narodowym i z kompleksem bagiennym Czerwone Bagno.
 */
export const RAJGROD: CityContent = {
  slug: "rajgrod",
  h1: "Thermomix Rajgród – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rajgród — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Rajgrodzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rajgród — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rajgrodzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rajgrodu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Rajgród i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Chude — krótko i wilgotno. Tłuste — długo i sucho.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rajgrodzie – jak wygląda prezentacja?",
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
      id: "tluste-chude",
      heading: "Sieja i węgorz z jednego jeziora — czyli o tłustych i chudych składnikach",
      paragraphs: [
        "Jezioro Rajgrodzkie ma tysiąc pięćset czternaście hektarów i pięćdziesiąt dwa metry w najgłębszym miejscu — to osiemnaste co do wielkości jezioro w Polsce. Żyją w nim między innymi sieja i węgorz. To dwie ryby o skrajnie różnym charakterze: sieja jest chuda i delikatna, węgorz bardzo tłusty. Ta sama woda, ta sama okolica, a w kuchni dwie zupełnie różne sprawy.",
        "I to jest rzecz, o której przepisy milczą prawie zawsze, chociaż decyduje więcej niż nazwa składnika: ile w nim jest tłuszczu. Zawartość tłuszczu mówi Wam, jak coś ugotować, lepiej niż jakakolwiek instrukcja.",
        "Składniki chude — pierś z kurczaka, dorsz, sieja, polędwica, chudy twaróg, indyk — nie wybaczają. Nie mają wewnętrznej rezerwy, więc każda minuta za długo to minuta wysychania. Potrzebują obróbki krótkiej albo wilgotnej, a najlepiej jednego i drugiego, oraz tłuszczu dodanego z zewnątrz: masła, oliwy, sosu, śmietany.",
        "Składniki tłuste — karkówka, łopatka, boczek, udka, węgorz, makrela — wybaczają bardzo dużo. Znoszą długie duszenie i pieczenie, bo tłuszcz w środku topi się powoli i cały czas je nawilża. Za to potrzebują czegoś przełamującego: kwasu, ostrości, kiszonki. Bez tego robią się ciężkie po trzech kęsach.",
        "Z tego wynika reguła, której nikt nie zapisuje, a która porządkuje bardzo dużo: chude gotuje się krótko i wilgotno, tłuste długo i sucho.",
        "Najczęstszy błąd wynika z jej odwrócenia. Ktoś dusi chudą pierś z kurczaka przez godzinę „żeby zmiękła” — a ona nie zmięknie, bo nie ma w niej czego zmiękczyć. Zrobi się włóknista i sucha. Miękną rzeczy tłuste i kolagenowe, bo długie gotowanie zamienia w nich twarde tkanki w żelatynę. Chude po prostu się wysusza.",
        "W warzywach odpowiednikiem tłustości jest zawartość wody i skrobi. Cukinia, pomidor i ogórek to warzywa „chude” — puszczają wodę i rozpadają się szybko. Ziemniak, dynia i korzeniowe to warzywa „tłuste” w tym sensie: mają czym wypełnić danie i znoszą długie gotowanie.",
        "I jedna uwaga, którą uważam za ważną: tłuszcz jest nośnikiem smaku i aromatu. Nie chodzi o to, żeby dodawać go dużo — chodzi o to, że danie z niego całkowicie ogołocone bywa po prostu mdłe, bo aromaty nie mają się w czym rozpuścić. Łyżka czegoś tłustego na końcu zmienia zupę bardziej niż dziesięć dodatkowych minut gotowania.",
        "Teraz uczciwie o sprzęcie, bo on ma w tej sprawie wyraźną stronę. To urządzenie faworyzuje składniki tłuste i twarde: gotuje długo, równo i pod przykryciem, czyli robi dokładnie to, czego potrzebuje karkówka albo gulasz. Z rzeczami chudymi radzi sobie znacznie gorzej — potrafi je wysuszyć, i to jest jego realne ograniczenie, o którym uprzedzam.",
        "Rada praktyczna z tego wynikająca jest prosta: chude mięso i chudą rybę lepiej robić na parze niż dusić w naczyniu. Para nie wysusza, bo wilgoć jest wszędzie dookoła, a to jest dokładnie to, czego chudy składnik potrzebuje. To akurat urządzenie robi bardzo dobrze i tu bym mu zaufała.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rajgrodzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chude mięso albo ryba wychodzą Wam sucho, powiedzcie o tym przy umawianiu. Pokażę, jak to samo zrobić na parze — to zwykle wystarcza, żeby problem zniknął.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rajgrodzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rajgrodzkiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad tysiąc czterysta mieszkańców, ale zajmuje przeszło trzydzieści pięć kilometrów kwadratowych — jak na miasto tej wielkości bardzo dużo. Cała gmina ma cztery i pół tysiąca mieszkańców na dwustu siedmiu kilometrach, w tym blisko sześć tysięcy hektarów lasów i ponad tysiąc dwieście hektarów wód. Prawo magdeburskie Rajgród otrzymał w 1568 roku, a od 1571 aż do trzeciego rozbioru był miastem królewskim i siedzibą powiatu. Osadnictwo sięga tu Jaćwingów, którzy zbudowali gród nad jeziorem; na Górze Zamkowej zachowały się wały ziemne po czternastowiecznym zamku z fundacji Kazimierza Wielkiego, którego nigdy w pełni nie ukończono. Jezioro Rajgrodzkie ma tysiąc pięćset czternaście hektarów i pięćdziesiąt dwa metry głębokości w najgłębszym miejscu — to osiemnaste co do wielkości jezioro w Polsce, leżące na Pojezierzu Ełckim i złożone z połączonych akwenów. Żyją w nim szczupak, okoń, leszcz, sieja i węgorz. Gmina graniczy z Biebrzańskim Parkiem Narodowym i z Czerwonym Bagnem.",
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

  districtsHeading: "Do których części gminy Rajgród dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu trzech wsi i osad gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Rajgród też przyjadę",
  nearbyParagraphs: [
    "Grajewo, Goniądz, Augustów, Szczuczyn i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Grajewo", "Goniądz", "Augustów", "Szczuczyn"],

  about: blokOMnie("do Rajgrodu", "w Rajgrodzie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rajgrodu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy są mylone nagminnie: Rajgród leży w powiecie grajewskim, ale nie jest tym samym co Grajewo, które jest siedzibą tego powiatu.",
    },
    ...faqWspolne("w Rajgrodzie"),
    {
      question: "Dlaczego pierś z kurczaka wychodzi mi sucha, choć duszę ją długo?",
      answer:
        "Bo chude mięso nie mięknie od długiego gotowania — ono wysycha. Miękną rzeczy tłuste i kolagenowe, w których długa obróbka zamienia twarde tkanki w żelatynę. Reguła jest odwrotna, niż podpowiada odruch: chude gotuje się krótko i wilgotno, tłuste długo.",
    },
    {
      question: "Po co dodawać tłuszcz, skoro danie i tak jest gotowe?",
      answer:
        "Bo tłuszcz jest nośnikiem smaku i aromatu — bez niego aromaty nie mają się w czym rozpuścić i danie bywa mdłe. Łyżka czegoś tłustego na końcu zmienia zupę bardziej niż dziesięć dodatkowych minut gotowania. Nie chodzi o ilość, tylko o obecność.",
    },
    {
      question: "Czy Thermomix nadaje się do chudego mięsa i ryby?",
      answer:
        "Gorzej niż do tłustych i twardych — gotuje długo, równo i pod przykryciem, więc chude potrafi wysuszyć. To jego realne ograniczenie. Rozwiązanie jest proste: chude mięso i rybę robić na parze zamiast dusić w naczyniu. Para nie wysusza i tu urządzenie sprawdza się bardzo dobrze.",
    },
  ],

  geo: { lat: 53.7369, lng: 22.6919 },
};
