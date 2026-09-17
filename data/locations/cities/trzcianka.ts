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
 * TRZCIANKA — powiat czarnkowsko-trzcianecki,
 * woj. wielkopolskie. ⚠ POWIAT MA DWIE SIEDZIBY:
 *   władze urzędują w Czarnkowie i w Trzciance.
 *   RZADKA KONSTRUKCJA — PODAJĘ JĄ WPROST.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 16 389 mieszkańców (GUS 31.12.2024), 18,3 km²,
 *   gęstość 895,6 os./km².
 *   ⚠ [ZW — DOMYKA SIĘ IDEALNIE: 16 389 ÷ 18,3 = 895,57.
 *   NAJLEPSZA ZGODNOŚĆ, JAKĄ WIDZIAŁAM]. PODAJĘ.
 * CAŁA GMINA: 23 361 osób, 374,0 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — NIE DOMYKA SIĘ:
 *   23 361 ÷ 374,0 = 62,46, a źródło podaje 63
 *   (zaokrąglenie w górę zamiast w dół).
 *   REGUŁA POTWIERDZONA W CZTERNASTU FALACH.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI W GMINIE: 35 ⚠ [SP — GUS podaje 36].
 *   PISZĘ „ponad trzydzieści miejscowości".
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 53,0419 / 16,4618.
 * LASY: ponad połowa powierzchni gminy, ok. 90 %
 *   drzewostanu to sosna zwyczajna.
 *   ⚠⚠⚠ DANYCH NADLEŚNICTWA („prawie 47 hektarów
 *   z 12 leśnictwami") NIE UŻYWAM — TA LICZBA JEST
 *   NA PEWNO BŁĘDNA (to zapewne 47 tys. ha).
 *
 * ⚠⚠⚠ ODMIANA — PUŁAPKA PRZYMIOTNIKOWA:
 *   D. do TRZCIANKI · Ms. w TRZCIANCE · N. Trzcianką.
 *   ⚠⚠⚠ PRZYMIOTNIK: TRZCIANECKI. NIGDY
 *   „trzciankowski". POWIAT CZARNKOWSKO-TRZCIANECKI.
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZW — LICZNE:
 *   TRZCIANKA to także nazwa wielu WSI w Polsce
 *   (m.in. podlaskie, mazowieckie, lubelskie) ·
 *   TRZCIANA · TRZCINICA · TRZCIEL (lubuskie).
 *   ⚠ ROZGRANICZAM W FAQ.
 *   ⚠ SARCZ — jednocześnie jezioro w Trzciance
 *     i miejscowość w gminie. PODAJĘ TO W SEKCJI
 *     DZIELNIC.
 *   ⚠ BIAŁA — wieś w gminie; w Polsce jest kilkanaście
 *     Biał, w tym miasto w opolskim.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — OSADA ROZDRÓŻKA: XIII w.
 *   — NAZWA „TRZCIANA ŁĄKA": 1565 r., potem
 *     „Trzcionka", od 1751 r. „Trzcianka".
 *     ⚠⚠ CIĄGU NAZW NIE ROBIĘ KĄTEM — figura zajęta
 *     (Szklarska Poręba). PODAJĘ JAKO GOŁY FAKT.
 *   — PRAWA MIEJSKIE: 1731 r., przywilej lokacyjny
 *     Augusta II. ⚠ ZGODNE WE WSZYSTKICH ŹRÓDŁACH.
 *   — Utraty praw nie odnotowano.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TRZYDZIEŚCI CZTERY LATA PRZERWY:
 *   MUZEUM ZIEMI NADNOTECKIEJ im. W. Stachowiaka:
 *     — ZAŁOŻONE: 1924 r.,
 *     — REAKTYWOWANE: 1958 r.,
 *     — ponad 25 000 eksponatów.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1958 − 1924 = 34.
 *   ⚠⚠⚠ MIMO TRZYDZIESTU CZTERECH LAT NIEISTNIENIA
 *   INSTYTUCJA WRÓCIŁA DO TEJ SAMEJ NAZWY I TEJ SAMEJ
 *   DATY ZAŁOŻENIA. Licznik się nie wyzerował.
 *   ⚠⚠⚠ POWODÓW PRZERWY NIE PODAJĘ I NIE SPEKULUJĘ.
 *   PISZĘ TO WPROST W TEKŚCIE: „nie wchodzę w powody".
 *   OKRES 1924–1958 OBEJMUJE LATA WYKLUCZONE W CAŁYM
 *   CYKLU — ANI SŁOWA O NICH.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ⚠⚠ RATUSZA (zbudowany 1851 / kupiony 1854 /
 *   rozebrany 1908) NIE UŻYWAM W TEJ FALI — zostaje
 *   w rezerwie jako osobny kąt.
 * — ⚠⚠ SZPITALA, SZKOŁY I KOŚCIOŁA NIE OPISUJĘ.
 * — ⚠⚠⚠ WAPNIARNI PIERWSZEJ I TRZECIEJ NIE KOMENTUJĘ
 *   — figura „niepełna para" zajęta (Prusice).
 *   NIE WYMIENIAM ICH W OGÓLE.
 * — ⚠ ODLEGŁOŚCI SPORNE (Poznań 90 albo 95 km).
 *   NIE PODAJĘ ŻADNEJ LICZBY KILOMETRÓW.
 *
 * KĄT: PRZERWA NIE KASUJE POCZĄTKU
 * — o wracaniu do gotowania po latach i o tym, że nie
 * zaczyna się wtedy od zera. Kąt z muzeum w Trzciance:
 * założone w 1924, reaktywowane w 1958, a data
 * założenia została ta sama.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że muzeum założono w 1924 r. i reaktywowano
 *   w 1958 r., czyli po trzydziestu czterech latach,
 * — ŻE MIMO TEJ PRZERWY ZOSTAŁA TA SAMA NAZWA I TA SAMA
 *   DATA ZAŁOŻENIA. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE POWODÓW PRZERWY NIE PODAJĘ I NIE ZGADUJĘ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO IDENTYCZNIE: kto nie
 *   gotował przez lata, myśli, że musi zaczynać
 *   od zera, a nie musi,
 * — ⚠⚠ ŻE RĘKA PAMIĘTA WIĘCEJ, NIŻ SIĘ WYDAJE, i że
 *   powrót idzie szybciej niż pierwsza nauka,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: nie ogłaszaj nowego
 *   początku i nie rób nowego planu. Ugotuj jedno
 *   danie, które robiłaś kiedyś. To jest krótsza droga,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: umiejętność wraca,
 *   ale warunki nie. Inna kuchnia, inny skład domu,
 *   inne godziny. ROZRÓŻNIK: co wraca samo, a co
 *   trzeba ustawić od nowa,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie wznawia
 *   nawyku. MÓWIĘ WPROST, że skraca drogę, ale ktoś
 *   musi wejść do kuchni, i że sprzęt kupiony po to,
 *   żeby „zmusić się do gotowania", zwykle stoi.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KIEDY TO JEST JESZCZE TO SAMO — kąt
 *   zajęty (Świeradów-Zdrój). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam pytanie
 *   brzmiało, czy rzecz zmieniona jest wciąż tą samą
 *   rzeczą; tu tożsamość jest bezsporna i pytanie
 *   dotyczy wyłącznie tego, co robi z licznikiem
 *   przerwa. JEDNO ZDANIE ROZGRANICZAJĄCE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO UŻYWANE OD DAWNA, ZAPISANE PÓŹNO — kąt
 *   zajęty (Zawidów).
 * — ⚠⚠⚠ ZERO PRZERWY ROSNĄ — kąt zajęty (Węgliniec).
 *   TU JEST JEDNA PRZERWA, NIE CIĄG.
 * — ⚠⚠ ZERO OSIEMNASTU LAT MIESZKANIA, TRZECH LAT
 *   ROBOTY — kąt zajęty (Lądek-Zdrój).
 * — ⚠⚠ ZERO STABILNEJ SUMY — kąt zajęty (Wąsosz).
 * — ⚠⚠ ZERO PRZYŁĄCZONE NIE ZNACZY WROŚNIĘTE — kąt
 *   zajęty (Piechowice).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ⚠⚠⚠ ŻADNYCH SUGESTII, DLACZEGO KTOŚ PRZESTAŁ
 *   GOTOWAĆ. Powody bywają trudne i nie moja to rzecz.
 *   PISZĘ O POWROCIE, NIE O PRZYCZYNIE PRZERWY.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I LAT WOJNY · ZERO
 *   PRZESIEDLEŃ I NIEMIECKICH NAZW · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   POŻARÓW JAKO ŻYWIOŁU · ZERO HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ gęstości gminy.
 * — NIE PODAJĘ powodów przerwy w działaniu muzeum.
 * — NIE PODAJĘ dokładnej liczby miejscowości.
 * — NIE PODAJĘ danych nadleśnictwa.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Trzcianka leży w powiecie czarnkowsko-trzcianeckim,
 *   którego władze urzędują w dwóch miastach —
 *   w Czarnkowie i w Trzciance; miasto liczy 16 389
 *   mieszkańców (GUS, 31.12.2024) na 18,3 km², czyli
 *   895,6 osoby na kilometr kwadratowy, a cała gmina
 *   miejsko-wiejska 23 361 osób na 374,0 km²
 *   i ponad trzydzieści miejscowości,
 * — lasy zajmują ponad połowę powierzchni gminy,
 *   a około 90 % drzewostanu to sosna zwyczajna,
 * — osada Rozdróżka istniała tu w XIII w.; nazwa
 *   „Trzciana Łąka" pojawia się w 1565 r., forma
 *   „Trzcianka" — od 1751 r.,
 * — prawa miejskie miasto otrzymało w 1731 r. na mocy
 *   przywileju lokacyjnego Augusta II,
 * — Muzeum Ziemi Nadnoteckiej im. Wiktora Stachowiaka
 *   założono w 1924 r., reaktywowano w 1958 r.
 *   i gromadzi ponad 25 000 eksponatów.
 */
export const TRZCIANKA: CityContent = {
  slug: "trzcianka",
  h1: "Thermomix Trzcianka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Trzcianka — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Trzciance: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Trzcianka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Trzciance. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Trzcianki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Trzcianka"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzydzieści cztery lata przerwy, a data założenia ta sama.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Trzciance – jak wygląda prezentacja?",
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
      id: "przerwa-nie-kasuje",
      heading: "Przerwa nie kasuje początku",
      paragraphs: [
        "Muzeum Ziemi Nadnoteckiej w Trzciance założono w 1924 roku. Reaktywowano je w 1958.",
        "Między tymi datami jest trzydzieści cztery lata, w których muzeum nie istniało. Nie wchodzę w powody — nie znam ich dobrze i nie zamierzam zgadywać.",
        "Zwróć uwagę na to, co zostało. Ta sama nazwa. I ta sama data założenia — nie 1958, tylko 1924. Trzydzieści cztery lata nieistnienia nie wyzerowały licznika.",
        "Piszę o tym, bo bardzo często słyszę zdanie, które brzmi mniej więcej tak: „kiedyś gotowałam, ale to było dawno, teraz musiałabym się uczyć od nowa”.",
        "Nie musiałabyś. Ręka pamięta znacznie więcej, niż się wydaje — jak długo kroić, kiedy coś jest gotowe, w jakiej kolejności to poukładać, żeby wszystko trafiło na stół ciepłe. Ta wiedza siedzi głęboko i wraca szybciej, niż przychodziła za pierwszym razem. To nie jest pocieszanie, tylko rzecz, którą widziałam dziesiątki razy przy stole.",
        "Dopowiem, bo to leży blisko: pisałam gdzie indziej o tym, kiedy rzecz zmieniona jest jeszcze tą samą rzeczą. Tu tożsamość jest bezsporna — to wciąż ta sama osoba i ta sama umiejętność. Pytanie dotyczy wyłącznie tego, co z licznikiem robi przerwa.",
        "Ruch jest jeden i celowo bardzo mały. Nie ogłaszaj nowego początku i nie rób planu na tydzień. Ugotuj jedno danie, które robiłaś kiedyś — to, które umiałaś na pamięć. Droga przez rzecz znajomą jest krótsza niż przez nowy przepis, choć wygląda mniej ambitnie.",
        "Uczciwie o drugiej stronie: umiejętność wraca, ale warunki nie. Kuchnia jest inna, skład domu inny, godziny inne, a do stołu siada może jedna osoba zamiast pięciu. To trzeba ustawić od nowa i tu nic samo nie wróci. Rozróżnik jest prosty: co wraca samo, a co trzeba poukładać.",
        "I uczciwie o sprzęcie. Thermomix nie wznawia nawyku — skraca drogę, ale ktoś musi wejść do kuchni i zacząć. Urządzenie kupione po to, żeby „zmusić się do gotowania”, zwykle stoi. Kupione wtedy, gdy powrót już się zaczął, potrafi go utrzymać, bo usuwa dokładnie te rzeczy, które zniechęcają najszybciej: stanie nad garnkiem i trzy naczynia do umycia.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Trzciance?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, jakie danie umiałaś kiedyś na pamięć. Jest spora szansa, że właśnie je ugotujemy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Trzciance"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Trzcianki",
      paragraphs: [
        "Trzcianka leży w powiecie czarnkowsko-trzcianeckim, którego władze urzędują w dwóch miastach naraz — w Czarnkowie i w Trzciance. Samo miasto liczy 16 389 mieszkańców (GUS, 31.12.2024) na 18,3 kilometra kwadratowego, czyli osiemset dziewięćdziesiąt sześć osób na kilometr, a cała gmina miejsko-wiejska 23 361 osób na 374 kilometrach i ponad trzydzieści miejscowości. Gęstości dla całej gminy nie podaję, bo liczby ze źródeł się nie domykają. Lasy zajmują ponad połowę powierzchni gminy, a około dziewięćdziesięciu procent drzewostanu to sosna zwyczajna. Osada Rozdróżka istniała tu już w trzynastym wieku; nazwa „Trzciana Łąka” pojawia się w 1565 roku, forma „Trzcianka” — od 1751. Prawa miejskie miasto otrzymało w 1731 roku na mocy przywileju lokacyjnego Augusta II, i akurat ta data jest zgodna we wszystkich źródłach.",
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

  districtsHeading: "Do których części Trzcianki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości w gminie: Białej, Biernatowa, Górnicy, Niekurska, Nowej Wsi, Przyłęgu i Przyłęk, Radolina, Runowa, Rychlika, Siedliska, Smolarni, Stobna, Stradunia, Teresina, Wrzącej, Łomnicy i pozostałych. Wszędzie bez dopłaty.",
    "Przy umawianiu warto podać nazwę miejscowości i ulicę — gmina ma blisko trzysta siedemdziesiąt pięć kilometrów kwadratowych. Uwaga na Sarcz: tak nazywa się i jezioro w Trzciance, i miejscowość w gminie.",
  ],
  districts: [],

  nearbyHeading: "Poza Trzciankę też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Czarnkowa, Wielenia, Krzyża Wielkopolskiego, Wronek i Piły — wszędzie bezpłatnie, tak samo jak w samej Trzciance.",
  ],
  nearbyTowns: ["Czarnków", "Wieleń", "Krzyż Wielkopolski", "Wronki", "Piła"],

  about: blokOMnie("do Trzcianki", "w Trzciance i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Trzcianki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi praktyczne: przymiotnik brzmi „trzcianecki”, a nie „trzciankowski” — stąd powiat czarnkowsko-trzcianecki. I warto dopisać województwo, bo Trzcianka to także nazwa kilku wsi w innych częściach Polski.",
    },
    ...faqWspolne("w Trzciance"),
    {
      question: "Nie gotowałam od lat. Czy będę musiała uczyć się wszystkiego od nowa?",
      answer:
        "Prawie na pewno nie. Muzeum w Trzciance założono w 1924 roku i reaktywowano w 1958 — trzydzieści cztery lata przerwy, a data założenia została ta sama. Z gotowaniem jest podobnie: ręka pamięta więcej, niż się wydaje, i powrót idzie szybciej niż pierwsza nauka. Radzę zacząć od jednego dania, które umiałaś kiedyś na pamięć, zamiast od nowego planu na tydzień. Co innego warunki — inna kuchnia i inne godziny trzeba ustawić od nowa, bo to akurat samo nie wróci.",
    },
    {
      question: "Czy Thermomix sprawi, że zacznę gotować?",
      answer:
        "Sam z siebie nie i nie chcę tak tego sprzedawać. Urządzenie kupione po to, żeby zmusić się do gotowania, zwykle stoi — widziałam to nieraz. Za to kupione wtedy, gdy powrót już się zaczął, potrafi go utrzymać, bo usuwa dokładnie to, co zniechęca najszybciej: stanie nad garnkiem i trzy naczynia do umycia. Na prezentacji łatwo to sprawdzić, bo gotujemy naprawdę, u Ciebie w kuchni, i nic za to nie płacisz.",
    },
  ],

  geo: { lat: 53.0419, lng: 16.4618 },
};
