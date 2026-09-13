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
 * TYKOCIN — gmina miejsko-wiejska w powiecie białostockim.
 * MIASTO 1 828, GMINA 5 617 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 29,0 km², GMINY 207,4 km².
 * 45 WSI I OSAD. ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 * ⚠ Notatka projektowa podawała 1 900 — ZAWYŻONE.
 * W gminie 22,2% pracujących w rolnictwie, leśnictwie
 * i rybactwie.
 *
 * PRAWA MIEJSKIE 1425 r., NA PRAWIE CHEŁMIŃSKIM, nadał
 * KSIĄŻĘ MAZOWIECKI JANUSZ I. Pierwsza wzmianka jako oppidum
 * z 1423 r. Od 1433 r. przez ponad sto lat w rękach litewskiego
 * rodu GASZTOŁDÓW; w 1569 r. wraz z Podlasiem inkorporowany
 * do Korony.
 * ⚠ UTRATY I PRZYWRÓCENIA PRAW NIE PODAJĘ — SPRZECZNOŚĆ
 * (1950/1993 kontra 1944/1951).
 *
 * ⚠⚠ GOSPODARKA — PODSTAWA KĄTA.
 * NAJWAŻNIEJSZY PORT RZECZNY NA PODLASIU. Trzy filary:
 * MŁYNARSTWO, PIWOWARSTWO I GORZELNICTWO. Port na Narwi
 * służył eksportowi zboża do GDAŃSKA; bazylianie spławiali
 * zboże z folwarku Bernardynka, założonego na gruntach
 * nadanych w 1568 r. Inwentarz z 1701 r. wymieniał 425 DOMÓW.
 * ⚠⚠ W XVII w. działała CERKIEW UNICKA przeznaczona
 * „DLA KUPCÓW GRECKICH PRZYJEŻDŻAJĄCYCH DO TYKOCINA
 * NA JARMARKI". TO JEST ZAKOTWICZENIE KĄTA.
 * Droga przez miasto biegnie DAWNYM SZLAKIEM HANDLOWYM
 * łączącym Koronę z Litwą, Warszawę z Wilnem.
 * ⚠ LICZBY MŁYNÓW, BROWARÓW I JARMARKÓW NIE PODAJĘ —
 * nie potwierdzono.
 *
 * ZABYTKI:
 * KLASZTOR BERNARDYNÓW — fundacja 1479 r., MARCIN GASZTOŁD;
 * obecne zabudowania 1771–1790, z inicjatywy JANA KLEMENSA
 * BRANICKIEGO. ⚠ NIE PISZĘ „klasztor z 1479 r." bez
 * rozróżnienia fundacji od zabudowań.
 * ALUMNAT — 1634–1643, KRZYSZTOF WIESIOŁOWSKI, starosta
 * tykociński; DOM DLA DWUNASTU INWALIDÓW WOJENNYCH,
 * „jedyny obiekt tego typu w Polsce"; przekształcony
 * późnobarokowo 1745–1767 przez Branickiego.
 * ⚠ ALUMNAT OPISUJĘ WYŁĄCZNIE jako instytucję dobroczynną
 * i zabytek — ZERO kontekstu wojennego.
 * KOŚCIÓŁ TRÓJCY PRZENAJŚWIĘTSZEJ z zespołem pomisjonarskim —
 * 1742–1751, TOMASSO BELOTTI i JOHANN HEINRICH KLEMM,
 * fundacja Branickiego.
 * POMNIK STEFANA CZARNIECKIEGO — 1763 r., PIERRE DE COUDRAY.
 * WIELKA SYNAGOGA — 1642 r., barok. ⚠ WYŁĄCZNIE JAKO BUDYNEK.
 * DWOREK ADMINISTRATORA — poł. XVIII w.
 * Jan Klemens Branicki przebudował miasto w latach 1734–1771.
 *
 * NARWIAŃSKI PARK NARODOWY obejmuje m.in. gminę Tykocin;
 * park chroni dolinę Narwi między Surażem a Rzędzianami,
 * ok. 98% jego powierzchni to tereny podmokłe, a tylko 38%
 * gruntów należy do Skarbu Państwa.
 * ⚠ DATY UTWORZENIA ANI POWIERZCHNI PARKU NIE PODAJĘ —
 * sprzeczność źródeł. ⚠ SIEDZIBA PARKU NIE JEST W TYKOCINIE.
 * ⚠ ORDERU ORŁA BIAŁEGO NIE PODAJĘ jako ustanowionego
 * w Tykocinie — samo źródło zastrzega, że pierwszy order
 * nadano wcześniej, a w 1705 r. „odnowiono".
 * TYKOCIN NIE NALEŻY DO CITTASLOW (nie potwierdzono).
 *
 * KĄT: JAK PRZEPIS WĘDRUJE — zapożyczenia w kuchni i co się
 * z daniem dzieje po drodze.
 * Kąt od cerkwi, którą postawiono w Tykocinie specjalnie
 * dla kupców przyjeżdżających z południa na jarmarki.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kuchnia „narodowa" nie istnieje w czystej postaci
 *   i że prawie każde danie uważane za nasze skądś przyszło,
 * — że przepis wędruje ZAWSZE razem z człowiekiem: kupcem,
 *   osadnikiem, kucharką, żołnierzem, emigrantem,
 * — CO SIĘ Z NIM DZIEJE PO DRODZE: zamienia się składniki
 *   na dostępne, upraszcza technikę, dopasowuje do miejscowego
 *   podniebienia — i po dwóch pokoleniach danie jest już inne,
 * — że to NIE JEST psucie oryginału, tylko normalny sposób,
 *   w jaki kuchnia działa,
 * — że dlatego spór „to nie jest prawdziwa wersja" jest
 *   zwykle jałowy: prawdziwa jest ta, którą ktoś naprawdę
 *   gotuje,
 * — PRAKTYCZNIE: przy przepisie z obcej kuchni warto zrozumieć,
 *   PO CO jest dany krok, zanim się go pominie,
 * — że pominięcie kroku, którego się nie rozumie, jest
 *   ryzykowne, a zamiana składnika na podobny — zwykle nie,
 * — UCZCIWIE: przenoszenie przepisu z obcej kuchni do tego
 *   urządzenia to DRUGA warstwa tłumaczenia i tam gubi się
 *   najwięcej,
 * — bo obce przepisy zwykle opierają się na patelni, ogniu
 *   i przypieczeniu — a tego to urządzenie nie robi.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO WARTOŚCIOWANIA KUCHNI NARODOWYCH. Piszę o wymianie,
 *   nigdy o wyższości którejkolwiek. TWARDA GRANICA.
 *
 * ⚠⚠ ETYKA — TYKOCIN JEST JEDNYM Z NAJTRUDNIEJSZYCH MIAST
 * W PROJEKCIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 *   WIELKĄ SYNAGOGĘ wymieniam WYŁĄCZNIE jako barokowy budynek
 *   z 1642 r. — bez jednego słowa o tym, co się z nią działo
 *   i co działo się w mieście. TWARDA GRANICA.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ZERO granicy, wojska, podziemia.
 * — ZERO konfliktów narodowościowych i wyznaniowych; cerkiew
 *   unicka wyłącznie jako fakt gospodarczy (budynek dla kupców).
 * — ZERO kontekstu wojennego przy Alumnacie i przy pomniku
 *   Czarnieckiego — podaję je jako obiekty i daty.
 * — ZERO biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Zamienniki" dotyczą
 * braku jednego składnika. „Składnik zależny od miejsca"
 * (Choroszcz) dotyczy tego, że ten sam produkt gdzie indziej
 * smakuje inaczej. „Co wygląda na tradycję, a co nią jest"
 * dotyczy autentyczności. „Rodzinny przepis przeniesiony
 * do urządzenia" dotyczy jednego przepisu. Tutaj chodzi
 * o DROGĘ PRZEPISU między kuchniami i o to, co się z nim
 * po drodze dzieje.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dat utraty i przywrócenia praw miejskich.
 * — NIE PODAJĘ liczby sołectw, młynów, browarów ani jarmarków.
 * — NIE PODAJĘ daty utworzenia ani powierzchni Narwiańskiego PN.
 * — NIE PISZĘ, że siedziba parku jest w Tykocinie.
 * — NIE PODAJĘ, że Order Orła Białego ustanowiono w Tykocinie.
 * — NIE PODAJĘ daty budowy zamku.
 * — NIE PRZYPISUJĘ Tykocinowi produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE MYLĘ Narwiańskiego PN z Biebrzańskim PN.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 1 828, gmina 5 617 mieszkańców; gmina liczy
 *   207,4 km² i 45 wsi i osad, a w rolnictwie, leśnictwie
 *   i rybactwie pracuje tu ponad jedna piąta zatrudnionych,
 * — prawa miejskie na prawie chełmińskim nadane w 1425 r.
 *   przez księcia mazowieckiego Janusza I; od 1433 r. przez
 *   ponad sto lat w rękach Gasztołdów,
 * — Tykocin był najważniejszym portem rzecznym Podlasia,
 *   a jego gospodarka opierała się na młynarstwie, piwowarstwie
 *   i gorzelnictwie; zboże spławiano Narwią do Gdańska,
 *   a bazylianie robili to z folwarku nadanego im w 1568 r.;
 *   inwentarz z 1701 r. wymieniał 425 domów,
 * — w XVII w. stała tu cerkiew unicka przeznaczona dla kupców
 *   greckich przyjeżdżających na tykocińskie jarmarki,
 * — przez miasto biegł szlak handlowy łączący Koronę z Litwą,
 *   Warszawę z Wilnem,
 * — klasztor bernardynów ufundował w 1479 r. Marcin Gasztołd,
 *   a obecne zabudowania powstały w latach 1771–1790
 *   z inicjatywy Jana Klemensa Branickiego,
 * — Alumnat wzniósł w latach 1634–1643 starosta tykociński
 *   Krzysztof Wiesiołowski jako dom dla dwunastu weteranów —
 *   to jedyny obiekt tego typu w Polsce,
 * — kościół Trójcy Przenajświętszej z zespołem pomisjonarskim
 *   z lat 1742–1751, dzieło Tomassa Belottiego i Johanna
 *   Heinricha Klemma; pomnik Stefana Czarnieckiego z 1763 r.
 *   dłuta Pierre'a de Coudray; barokowa Wielka Synagoga
 *   z 1642 r.,
 * — Jan Klemens Branicki przebudował miasto w latach 1734–1771,
 * — gmina leży w zasięgu Narwiańskiego Parku Narodowego,
 *   chroniącego dolinę Narwi między Surażem a Rzędzianami;
 *   około 98% powierzchni parku to tereny podmokłe, a tylko
 *   38% gruntów należy do Skarbu Państwa.
 */
export const TYKOCIN: CityContent = {
  slug: "tykocin",
  h1: "Thermomix Tykocin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tykocin — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Tykocinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tykocin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tykocinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tykocina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Tykocin i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przepis nigdy nie wędruje sam. Zawsze przyjeżdża z kimś.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tykocinie – jak wygląda prezentacja?",
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
      id: "wedrowka-przepisu",
      heading: "Cerkiew dla przyjezdnych kupców — czyli jak przepis wędruje",
      paragraphs: [
        "Tykocin był najważniejszym portem rzecznym Podlasia. Zboże ładowano tu na szkuty i spławiano Narwią do Gdańska; bazylianie robili to z folwarku nadanego im w 1568 roku. Przez miasto biegł szlak z Korony na Litwę, z Warszawy do Wilna. A w siedemnastym wieku stanęła tu cerkiew unicka przeznaczona — cytuję za źródłami — „dla kupców greckich przyjeżdżających do Tykocina na jarmarki”.",
        "Postawiono budynek pod ludzi, którzy przyjeżdżali na kilka dni w roku. To najlepszy dowód, jak bardzo jarmark był miejscem spotkania, a nie tylko handlu.",
        "I to jest dobre miejsce, żeby powiedzieć rzecz, z którą część osób się nie zgodzi: kuchnia narodowa w czystej postaci nie istnieje. Prawie każde danie, które uważamy za swoje, skądś przyjechało — z Litwy, z Włoch, z Niemiec, z Turcji, z Węgier. Ziemniak jest u nas od kilkuset lat, pomidor krócej, a bez obu nie wyobrażamy sobie polskiego obiadu.",
        "Przepis nigdy nie wędruje sam. Wędruje z człowiekiem: z kupcem, z osadnikiem, z kucharką, która wyszła za mąż do innej wsi, z kimś, kto wrócił z pracy za granicą. Nie ma innego sposobu, żeby danie zmieniło miejsce.",
        "I zawsze zmienia się po drodze, zawsze tak samo. Najpierw wymienia się składniki na te, które są dostępne. Potem upraszcza się technikę, bo nikt nie ma tu sprzętu ani nawyku, którego przepis wymagał. Na końcu dopasowuje się smak do miejscowego podniebienia — mniej ostro, więcej kwaśno, inaczej doprawione. Po dwóch pokoleniach danie ma tę samą nazwę i jest już czymś innym.",
        "Uważam, że to nie jest psucie oryginału. To jest normalny, jedyny możliwy sposób, w jaki kuchnia działa. Danie, które nie zmienia się przy przeprowadzce, po prostu nie przyjmuje się nigdzie.",
        "Dlatego spory o to, „która wersja jest prawdziwa”, wydają mi się jałowe. Prawdziwa jest ta, którą ktoś naprawdę gotuje w kuchni i którą ktoś naprawdę zjada. Wersja z książki, której nikt nie robi, jest zabytkiem, a nie przepisem.",
        "Jest jednak jedna rzecz praktyczna, którą warto wiedzieć, gdy bierzecie się za przepis z obcej kuchni: zanim pominiecie krok, zrozumcie, po co on tam jest. Zamiana składnika na podobny zwykle nie robi szkody. Pominięcie kroku, którego się nie rozumie, potrafi zrujnować danie — bo to zwykle właśnie ten krok był w nim najważniejszy i dlatego autor go zapisał.",
        "I uczciwie o sprzęcie, bo tu jest pułapka, której nie widać. Przeniesienie obcego przepisu do tego urządzenia to druga warstwa tłumaczenia, jedna po drugiej — i tam gubi się najwięcej. Kuchnie południa i wschodu opierają się w dużej mierze na patelni, na otwartym ogniu i na przypieczeniu. Tego to urządzenie nie robi wcale. Dlatego dania, których cały charakter polega na zarumienieniu, warto zostawić patelni, a do urządzenia brać z obcych kuchni to, co gotuje się i dusi. Wtedy tłumaczenie wychodzi wierne.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tykocinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie przepis przywieziony skądś — z wakacji, od rodziny, z pracy za granicą — weźcie go na spotkanie. Sprawdzimy razem, co z niego da się przenieść, a co lepiej zostawić patelni.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tykocinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tykocińskiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad tysiąc osiemset mieszkańców, a cała gmina blisko pięć i pół tysiąca, na ponad dwustu kilometrach kwadratowych i w czterdziestu pięciu wsiach i osadach; ponad jedna piąta pracujących zajmuje się tu rolnictwem, leśnictwem lub rybactwem. Prawa miejskie na prawie chełmińskim nadał Tykocinowi w 1425 roku książę mazowiecki Janusz I, a od 1433 przez ponad sto lat miasto należało do litewskiego rodu Gasztołdów. Był to najważniejszy port rzeczny Podlasia — zboże spławiano stąd Narwią aż do Gdańska, a gospodarka opierała się na młynarstwie, piwowarstwie i gorzelnictwie; inwentarz z 1701 roku wymieniał czterysta dwadzieścia pięć domów. Klasztor bernardynów ufundował w 1479 roku Marcin Gasztołd, a obecne zabudowania powstały w latach 1771–1790. Alumnat, wzniesiony w latach 1634–1643 przez starostę Krzysztofa Wiesiołowskiego jako dom dla dwunastu weteranów, jest jedynym obiektem tego typu w Polsce. Kościół Trójcy Przenajświętszej z lat 1742–1751 zaprojektowali Tomasso Belotti i Johann Heinrich Klemm, a pomnik Stefana Czarnieckiego z 1763 roku wykonał francuski rzeźbiarz Pierre de Coudray. Stoi tu też barokowa Wielka Synagoga z 1642 roku. Gmina leży w zasięgu Narwiańskiego Parku Narodowego.",
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

  districtsHeading: "Do których części gminy Tykocin dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Tykocin też przyjadę",
  nearbyParagraphs: [
    "Choroszcz, Knyszyn, Mońki, Białystok i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Choroszcz", "Knyszyn", "Mońki", "Białystok"],

  about: blokOMnie("do Tykocina", "w Tykocinie i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tykocina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo oba są podlaskie i oba bagienne: Tykocin leży w zasięgu Narwiańskiego Parku Narodowego, a nie Biebrzańskiego — to dwa różne parki, z siedzibami w dwóch różnych miejscowościach.",
    },
    ...faqWspolne("w Tykocinie"),
    {
      question: "Czy warto zmieniać przepis z obcej kuchni?",
      answer:
        "Zwykle nie da się inaczej i nie ma w tym nic złego. Przepis, który zmienia miejsce, zawsze się zmienia: najpierw wymienia się składniki na dostępne, potem upraszcza technikę, na końcu dopasowuje smak. Po dwóch pokoleniach danie ma tę samą nazwę i jest już czymś innym — tak właśnie działa kuchnia.",
    },
    {
      question: "Czego nie należy zmieniać w obcym przepisie?",
      answer:
        "Kroku, którego się nie rozumie. Zamiana składnika na podobny zwykle nie robi szkody, ale pominięcie etapu, którego sens jest niejasny, potrafi zrujnować danie — bo to zwykle właśnie ten etap był w nim najważniejszy i dlatego autor go zapisał.",
    },
    {
      question: "Czy każdy przepis da się przenieść do Thermomixa?",
      answer:
        "Nie i przy kuchniach obcych widać to najwyraźniej. Wiele z nich opiera się na patelni, otwartym ogniu i przypieczeniu, a tego urządzenie nie robi. Dania, których cały charakter polega na zarumienieniu, warto zostawić patelni; do urządzenia brać to, co się gotuje i dusi.",
    },
  ],

  geo: { lat: 53.2058, lng: 22.7756 },
};
