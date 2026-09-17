import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * MUROWANA GOŚLINA — powiat poznański,
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * ⚠⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ O TEJ NAZWIE NIE MA —
 *   sprawdzone na liście 17 gmin powiatu poznańskiego.
 * MIASTO: 10 290 mieszkańców (GUS 31.12.2024), 8,6 km²,
 *   gęstość 1 193,7 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia do 8,62 km²]. PODAJĘ.
 *   ⚠ en-wiki podaje 8,16 km² — NIE UŻYWAM, rozbieżność
 *   nierozstrzygnięta.
 * CAŁA GMINA: 17 070 osób, 172,2 km², gęstość
 *   99 os./km² [ZW — DOMYKA SIĘ: 99,13 → 99]. PODAJĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: 33 w katastrze, „około 45" w GUS.
 *   ⚠⚠⚠ LICZBY NIE PODAJĘ — PISZĘ „ponad trzydzieści
 *   miejscowości".
 * WYSOKOŚĆ: 75 m n.p.m.
 * ⚠ GEO: 52,567 / 17,017.
 * RZEKA: TROJANKA, dawniej zwana GOŚLINKĄ — miasto nosi
 *   w nazwie dawną nazwę rzeki.
 *   ⚠⚠ TEGO NIE ROBIĘ KĄTEM — figura „siedem nazw
 *   na jeden przedmiot" zajęta (Szklarska Poręba).
 *   PODAJĘ JAKO GOŁY FAKT.
 *
 * ⚠⚠⚠ ODMIANA — NAZWA DWUCZŁONOWA, ODMIENIAJĄ SIĘ
 *   OBA CZŁONY:
 *   M. MUROWANA GOŚLINA · D. do MUROWANEJ GOŚLINY ·
 *   Ms. w MUROWANEJ GOŚLINIE · B. Murowaną Goślinę ·
 *   N. Murowaną Gośliną.
 *   ⚠⚠⚠ BŁĘDY: „w Murowana Goślina", „do Murowanej
 *   Goślina", „w Murowanej Goślinej". SPRAWDZIĆ OSOBNYM
 *   PRZEBIEGIEM.
 *   ⚠ Człon „Murowana" odmienia się przymiotnikowo,
 *   „Goślina" rzeczownikowo.
 *   ⚠⚠ PRZYMIOTNIKA I NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   formy niepewne.
 *
 * ⚠⚠ DATY USTROJOWE — TRZY WARIANTY, WSZYSTKIE [SP]:
 *   — 1371 r. — prawa miejskie (jedno źródło),
 *   — 1389 r. — najstarsza wzmianka o wójcie
 *     („wójt Andrzej z Górki"); inne źródło stąd
 *     wnioskuje „prawa przed 1389",
 *   — „prawdopodobnie w XIV w." (trzecie źródło).
 *   PISZĘ: „prawa miejskie w XIV wieku; jedne źródła
 *   podają 1371, inne wnioskują o nich z wzmianki
 *   o wójcie z 1389 roku".
 *   ⚠⚠⚠ JUBILEUSZU 600-LECIA (1989) NIE UŻYWAM
 *   I NIE ROZWIJAM — figura „od czego liczymy" zajęta
 *   (Wojcieszów). ANI SŁOWA O ROCZNICY.
 *   — Pierwotna nazwa osady: GÓRKA.
 *   — Utraty praw nie stwierdzono.
 *   — Elektryfikacja 1935–1937, kanalizacja 1956.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — OSIEDLE WIĘKSZE OD MIASTA:
 *   — OSIEDLE „ZIELONE WZGÓRZA" ZAPLANOWANO
 *     NA 6 000 OSÓB; pierwsze budynki 1983–1986,
 *   — ⚠⚠⚠ W 1981 R. CAŁE MIASTO LICZYŁO 4 235
 *     MIESZKAŃCÓW.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 6 000 ÷ 4 235 = 1,417.
 *   PLAN DOTYCZYŁ O BLISKO 42 % WIĘCEJ LUDZI, NIŻ MIAŁO
 *   WÓWCZAS CAŁE MIASTO. To jest cały kąt.
 *   ⚠⚠⚠ I RZECZ NAJWAŻNIEJSZA DLA UCZCIWOŚCI TEKSTU:
 *   TO SIĘ UDAŁO. 1981 — 4 235 osób; początek 2004 —
 *   9 970; 2024 — 10 290. MIASTO WROSŁO W TEN PLAN.
 *   MUSZĘ TO NAPISAĆ WPROST, INACZEJ KĄT BYŁBY
 *   NIEUCZCIWY.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE WZROST WYNIKNĄŁ Z OSIEDLA —
 *   podaję dwie serie liczb i nie orzekam o przyczynie.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ludność: 1842 r. — 1 554 osoby w 196 domach;
 *   1901 — 1 513; 1921 — 1 595; 1947 — 2 398;
 *   1981 — 4 235; początek 2004 — 9 970.
 *   ⚠⚠ ODSTĘPÓW MIĘDZY TYMI DATAMI NIE ANALIZUJĘ —
 *   figury rosnących i malejących przerw zajęte
 *   (Węgliniec, Niemcza).
 * — cis w parku pałacowym: ok. 700 lat, pięć pni
 *   ⚠ [SP — jedno źródło. PISZĘ Z ZASTRZEŻENIEM].
 * — ⚠⚠ PRZYŁĄCZENIA „WIĘKSZOŚCI WSI PIŁA" (1926)
 *   NIE UŻYWAM — figura „przyłączone nie znaczy
 *   wrośnięte" zajęta (Piechowice).
 * — ⚠ ODLEGŁOŚCI: dwa źródła podają 20 i 25 km
 *   do Poznania. NIE PODAJĘ ŻADNEJ.
 *
 * KĄT: PLAN PRZEKRACZA CAŁOŚĆ
 * — o planach większych od tego, do czego się je dokłada.
 * Kąt z Murowanej Gośliny: osiedle zaplanowano na sześć
 * tysięcy osób w mieście, które liczyło wtedy cztery
 * tysiące dwieście trzydzieści pięć.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że „Zielone Wzgórza" zaplanowano na 6 000 osób,
 *   a w 1981 r. całe miasto liczyło 4 235,
 * — ŻE PLAN DOTYCZYŁ O BLISKO POŁOWĘ WIĘCEJ LUDZI, NIŻ
 *   MIAŁO WTEDY CAŁE MIASTO. TO JEST RDZEŃ,
 * — ⚠⚠⚠ ŻE TO SIĘ UDAŁO — dziś miasto ma 10 290
 *   mieszkańców. MÓWIĘ TO OD RAZU, NIE NA KOŃCU,
 * — ⚠⚠ ŻE W KUCHNI TAKIE PLANY ROBIMY CO STYCZEŃ:
 *   czterdzieści dań w rotacji przy czterech
 *   ugotowanych, siedem dni menu przy dwóch
 *   wytrzymanych,
 * — ⚠⚠ ŻE RÓŻNICA MIĘDZY OSIEDLEM A NASZYM PLANEM JEST
 *   JEDNA: TAM KTOŚ BUDOWAŁ DWADZIEŚCIA LAT. W kuchni
 *   nie ma nikogo, kto będzie budował za nas,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: sprawdź proporcję. Jeśli
 *   plan jest większy od tego, co już działa, rozłóż go
 *   na etapy albo zmniejsz,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: zbyt duży plan czasem
 *   ciągnie w górę i tu właśnie tak było. Pytanie
 *   rozstrzygające: czy jest ktoś, kto będzie to
 *   dobudowywał przez lata,
 * — ⚠ UCZCIWIE O SPRZĘCIE: dla wielu osób zakup
 *   urządzenia JEST planem większym od dotychczasowej
 *   podstawy. MÓWIĘ WPROST: rozłożyć na etapy, zacząć
 *   od pięciu dań, nie od czterdziestu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KUPIONE ZA MAŁE — kąt zajęty (Wolsztyn,
 *   ta sama fala). ⚠⚠⚠ TO PARA LUSTRZANA I MUSZĘ JĄ
 *   ROZGRANICZYĆ JAWNIE: tam rzecz była za mała wobec
 *   zadania; tu dokładka jest większa od całości, do
 *   której się ją dokłada. JEDNO ZDANIE ROZGRANICZAJĄCE
 *   — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZERWY ROSNĄ i ZERO KAŻDY KOLEJNY KROK
 *   IDZIE SZYBCIEJ — kąty zajęte (Węgliniec, Niemcza).
 *   ŻADNEJ ANALIZY ODSTĘPÓW W SERII LUDNOŚCI.
 * — ⚠⚠⚠ ZERO SKOKU, KTÓRY NIE BYŁ WZROSTEM — kąt zajęty
 *   (Twardogóra). ⚠⚠ TU WZROST JEST REALNY — PILNOWAĆ,
 *   ŻEBY NIE ZASUGEROWAĆ INACZEJ.
 * — ⚠⚠ ZERO STABILNEJ SUMY — kąt zajęty (Wąsosz).
 * — ⚠⚠ ZERO DRUGIE OBOK ZAMIAST NAPRAWY STAREGO — kąt
 *   zajęty (Grodzisk Wielkopolski).
 * — ⚠⚠ ZERO OD CZEGO LICZYMY — kąt zajęty (Wojcieszów).
 *   DLATEGO ANI SŁOWA O JUBILEUSZU.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ ŻADNEGO OCENIANIA CZYICHŚ POSTANOWIEŃ.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ dokładnej liczby miejscowości.
 * — NIE PODAJĘ powierzchni miasta w wersji en-wiki.
 * — NIE PODAJĘ roku nadania praw jako pewnego.
 * — NIE PISZĘ o rocznicy 600-lecia.
 * — NIE TWIERDZĘ, że wzrost ludności wynikł z osiedla.
 * — NIE PODAJĘ odległości do Poznania.
 * — NIE UŻYWAM przymiotnika ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Murowana Goślina leży w powiecie poznańskim, nad
 *   Trojanką (dawniej zwaną Goślinką), na wysokości
 *   75 m n.p.m.; miasto liczy 10 290 mieszkańców
 *   (GUS, 31.12.2024) na 8,6 km², czyli 1 193,7 osoby
 *   na kilometr kwadratowy, a cała gmina miejsko-wiejska
 *   17 070 osób na 172,2 km², czyli 99 osób na kilometr,
 *   i obejmuje ponad trzydzieści miejscowości,
 * — pierwotnie osada nazywała się Górka; prawa miejskie
 *   miasto otrzymało w XIV w. — jedne źródła podają
 *   1371 r., inne wnioskują o nich ze wzmianki o wójcie
 *   z 1389 r.,
 * — osiedle „Zielone Wzgórza" zaplanowano na 6 000 osób,
 *   a pierwsze budynki powstały w latach 1983–1986,
 * — ludność miasta: 1842 r. — 1 554 osoby w 196 domach;
 *   1901 — 1 513; 1921 — 1 595; 1947 — 2 398; 1981 —
 *   4 235; początek 2004 — 9 970,
 * — elektryfikację przeprowadzono w latach 1935–1937,
 *   kanalizację w 1956 r.,
 * — w parku pałacowym rośnie cis o pięciu pniach,
 *   którego wiek szacuje się na około 700 lat.
 */
export const MUROWANA_GOSLINA: CityContent = {
  slug: "murowana-goslina",
  h1: "Thermomix Murowana Goślina – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Murowana Goślina — cena i prezentacja",
  seoDescription:
    "Thermomix w Murowanej Goślinie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Murowana Goślina — prezentacja w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Murowanej Goślinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Murowanej Gośliny z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Murowana Goślina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Osiedle na sześć tysięcy w mieście, które miało cztery.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Murowanej Goślinie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "plan-przekracza-calosc",
      heading: "Plan przekracza całość",
      paragraphs: [
        "Osiedle „Zielone Wzgórza” w Murowanej Goślinie zaplanowano na sześć tysięcy osób. Pierwsze budynki stanęły w latach 1983–1986.",
        "W 1981 roku całe miasto liczyło cztery tysiące dwieście trzydzieści pięć mieszkańców.",
        "Plan dotyczył więc o blisko połowę więcej ludzi, niż miało wówczas całe miasto. I powiem od razu, zanim wyciągniemy jakikolwiek morał: to się udało. Na początku 2004 roku było tu 9 970 osób, dziś 10 290. Miasto wrosło w ten plan. Nie twierdzę, że wyrosło z powodu osiedla — podaję dwie serie liczb i nie orzekam o przyczynie.",
        "Piszę o tym, bo takie plany robimy w kuchni co styczeń.",
        "Czterdzieści dań w rotacji, przy czterech gotowanych regularnie. Rozpisane menu na siedem dni, przy dwóch dniach, które zwykle udaje się wytrzymać. Gotowanie na cały tydzień w niedzielę, w domu, w którym niedziela jest jedynym dniem, kiedy nikt nie gotuje.",
        "Różnica między tym osiedlem a naszym planem jest jedna i jest zasadnicza. Tam ktoś budował dwadzieścia lat: kolejne bloki, kolejne drogi, kolejni ludzie. W kuchni nie ma nikogo, kto będzie dobudowywał za nas — jest tylko my i poniedziałek.",
        "Dopowiem, bo to leży blisko i wygląda na sprzeczność: pisałam gdzie indziej o rzeczach kupowanych za małe, o hali na cztery stanowiska, którą po dwóch latach trzeba było rozbudować do ośmiu. Tam rzecz była za mała wobec zadania, które już istniało. Tu dokładka jest większa od całości, do której się ją dokłada. To dwa przeciwne błędy i oba są prawdziwe.",
        "Ruch jest jeden i sprowadza się do dzielenia. Sprawdź proporcję: czy plan jest większy od tego, co już działa. Jeśli tak, rozłóż go na etapy albo po prostu zmniejsz — pięć dań zamiast czterdziestu, dwa dni menu zamiast siedmiu.",
        "Uczciwie o drugiej stronie: zbyt duży plan czasem naprawdę ciągnie w górę, i tu właśnie tak było. Pytanie rozstrzygające brzmi: czy jest ktoś, kto będzie to dobudowywał przez lata. W mieście bywa. W kuchni prawie nigdy.",
        "I uczciwie o sprzęcie. Dla wielu osób sam zakup Thermomixa jest planem większym od dotychczasowej podstawy — kupuje się go z zamiarem, że od teraz wszystko będzie inaczej. Radzę rozłożyć to na etapy: najpierw pięć dań, które i tak robicie, potem reszta. Osiedle budowano dwadzieścia lat, a nie w jeden weekend.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Murowanej Goślinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile dań robicie regularnie. Nie ile chcielibyście robić — ile robicie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Murowanej Goślinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Murowanej Gośliny",
      paragraphs: [
        "Murowana Goślina leży w powiecie poznańskim, nad Trojanką — rzeką, którą dawniej nazywano Goślinką, i od której miasto ma drugi członek nazwy. Wysokość: siedemdziesiąt pięć metrów nad poziomem morza. Samo miasto liczy 10 290 mieszkańców (GUS, 31.12.2024) na 8,6 kilometra kwadratowego, czyli tysiąc sto dziewięćdziesiąt cztery osoby na kilometr, a cała gmina miejsko-wiejska 17 070 osób na 172,2 kilometra, czyli dziewięćdziesiąt dziewięć osób na kilometr, i obejmuje ponad trzydzieści miejscowości. Pierwotnie osada nazywała się Górka. Prawa miejskie miasto otrzymało w czternastym wieku — jedne źródła podają 1371 rok, inne wnioskują o nich ze wzmianki o wójcie z 1389. Seria ludnościowa jest tu wyjątkowo wymowna: w 1842 roku mieszkało tu 1 554 osoby w stu dziewięćdziesięciu sześciu domach, w 1901 — 1 513, w 1921 — 1 595, w 1947 — 2 398, w 1981 — 4 235, a na początku 2004 już 9 970. Elektryfikację przeprowadzono w latach 1935–1937, kanalizację w 1956. W parku pałacowym rośnie cis o pięciu pniach, którego wiek szacuje się na około siedemset lat — podaję to za jednym źródłem.",
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

  districtsHeading: "Do których części Murowanej Gośliny dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — na Zielone Wzgórza, do starej części i do centrum — oraz do wszystkich miejscowości w gminie. Wszędzie bez dopłaty.",
    "Przy umawianiu warto powiedzieć pełną nazwę w odmianie: „w Murowanej Goślinie”. Oba członki nazwy się odmieniają, więc „w Murowana Goślina” brzmi w słuchawce jak inna miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Murowaną Goślinę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Rogoźna, Obornik, Pobiedzisk, Skoków i Wągrowca — wszędzie bezpłatnie, tak samo jak w samej Murowanej Goślinie.",
  ],
  nearbyTowns: ["Rogoźno", "Oborniki", "Pobiedziska", "Skoki", "Wągrowiec"],

  about: blokOMnie("do Murowanej Gośliny", "w Murowanej Goślinie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Murowanej Gośliny bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga językowa: w tej nazwie odmieniają się oba członki — „do Murowanej Gośliny”, „w Murowanej Goślinie”, „Murowaną Gośliną”. Forma „w Murowana Goślina” jest błędna.",
    },
    ...faqWspolne("w Murowanej Goślinie"),
    {
      question: "Rozpisałam plan czterdziestu dań i po tygodniu wszystko się rozsypało. Gdzie błąd?",
      answer:
        "W proporcji. Osiedle „Zielone Wzgórza” zaplanowano na sześć tysięcy osób, kiedy całe miasto liczyło cztery tysiące dwieście trzydzieści pięć — i to się udało, ale dlatego, że ktoś budował dwadzieścia lat. W kuchni nie ma nikogo, kto będzie dobudowywał za Was; jest tylko poniedziałek. Sprawdzian: czy plan jest większy od tego, co już działa. Jeśli tak, zostaw pięć dań zamiast czterdziestu i dwa dni menu zamiast siedmiu.",
    },
    {
      question: "Kupić Thermomix i od razu zmienić sposób gotowania w domu?",
      answer:
        "Nie radzę i mówię to wprost, choć sprzedaję to urządzenie. Dla wielu osób sam zakup jest już planem większym od dotychczasowej podstawy, a jeśli do tego dołożyć nowe menu, nowe zakupy i nowe pory posiłków, to nie ma na czym oprzeć pierwszego tygodnia. Zacznijcie od pięciu dań, które i tak robicie, i przenieście je do urządzenia. Resztę dobudujcie później — osiedle też budowano dwadzieścia lat.",
    },
  ],

  geo: { lat: 52.567, lng: 17.017 },
};
