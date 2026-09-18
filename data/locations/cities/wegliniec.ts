import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * WĘGLINIEC — powiat zgorzelecki, woj. dolnośląskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 642 mieszkańców (GUS 31.12.2024), 8,7 km²,
 *   gęstość 302,6 os./km² [ZW, domyka się]. PODAJĘ.
 * CAŁA GMINA: 7 725 osób, 339,2 km², gęstość 23 os./km²
 *   [ZW — DOMYKA SIĘ, rzadki przypadek gminy
 *   miejsko-wiejskiej. PODAJĘ].
 *   ⚠⚠⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ: źródło deklaruje
 *   dziewięć, a wymienia dziesięć nazw. PISZĘ „WSIE
 *   W GMINIE" i wymieniam kilka.
 *   ⚠ Miasto to 2,6 % powierzchni gminy i 34,2 % jej
 *   ludności. ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 51,2883 / 15,2256.
 *
 * ⚠⚠ ODMIANA — E RUCHOME:
 *   D. do WĘGLIŃCA · Ms. w WĘGLIŃCU · N. Węglińcem.
 *   ⚠⚠⚠ BŁĘDY: „w Węgliniecu", „do Węgliniec".
 *   SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: WĘGLINIECKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJA WEWNĘTRZNA: STARY WĘGLINIEC — osobna wieś
 *   w tej samej gminie. ⚠⚠⚠ TO WŁAŚNIE JEJ DOTYCZY
 *   WZMIANKA Z 1502 R. ROZGRANICZAM W FAQ —
 *   OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PIERWSZA WZMIANKA: 1502 r., dokument o założeniu
 *     kuźni nad zbiornikiem na rzece Czarna Mała.
 *     ⚠⚠⚠ DOTYCZY WSI, KTÓRA DZIŚ NAZYWA SIĘ STARY
 *     WĘGLINIEC. Dzisiejsze miasto wyrosło przy stacji
 *     kolejowej, ok. 2 km dalej. PISZĘ TO WPROST.
 *   — PRAWA MIEJSKIE: 1967 r. (nadanie nowe).
 *   ⚠⚠ RÓŻNICY 465 LAT NIE ROBIĘ KĄTEM — figura zajęta
 *   (Szklarska Poręba). I tak dotyczy dwóch różnych
 *   miejsc.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — CZTERY LINIE, TRZY ROSNĄCE PRZERWY:
 *   — 1846 — linia Berlin – Wrocław,
 *   — 1847 — połączenie do Drezna przez Zgorzelec
 *     (1 ROK),
 *   — 1865 — do Lubania (18 LAT),
 *   — 1913 — linia lokalna do Czerwonej Wody (48 LAT).
 *   ⚠⚠⚠ ODSTĘPY: 1, 18, 48. Każda kolejna linia
 *   przychodziła po dłuższej przerwie niż poprzednia.
 *   To jest cały kąt.
 *   ⚠⚠⚠ ARYTMETYKA SPRAWDZONA: 1847−1846 = 1;
 *   1865−1847 = 18; 1913−1865 = 48.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE TO PRAWIDŁOWOŚĆ — opisuję
 *   jeden węzeł. Twierdzę, że tu odstępy rosły.
 *   ⚠⚠ KĄTY KOLEJOWE SĄ W TYM CYKLU MOCNO ZUŻYTE
 *   (Pieńsk, Świeradów, Lądek). ⚠⚠⚠ DLATEGO KOLEJ JEST
 *   TU WYŁĄCZNIE NOŚNIKIEM DAT — ANI SŁOWA
 *   O INFRASTRUKTURZE, WĘŹLE CZY TRANSPORCIE.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — Osada powstała pod koniec XV w.; ⚠⚠ CHARAKTERU
 *   DAWNEJ PRODUKCJI NIE ROZWIJAM — wypał to wątek
 *   przemysłowy, a nie mam do niego liczb.
 * — ⚠⚠ DANYCH NADLEŚNICTWA NIE UŻYWAM: spis, który się
 *   nie sumuje, to kąt MIĘDZYBORZA (ta sama fala).
 *   ANI JEDNEJ LICZBY LEŚNEJ.
 * — ⚠⚠ KOŚCIOŁÓW NIE OPISUJĘ — wyznaniowe.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: PRZERWY ROSNĄ
 * — o tym, że pierwsze usprawnienia przychodzą szybko
 * i tanio, a każde następne kosztuje więcej i daje mniej.
 * Kąt od czterech linii kolejowych Węglińca: rok, potem
 * osiemnaście lat, potem czterdzieści osiem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że linie docierały tu w 1846, 1847, 1865 i 1913 r.,
 * — ŻE ODSTĘPY MIĘDZY NIMI ROSŁY: ROK, OSIEMNAŚCIE LAT,
 *   CZTERDZIEŚCI OSIEM. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE POWÓD JEST PROSTY: NAJŁATWIEJSZE POŁĄCZENIA
 *   ROBI SIĘ PIERWSZE. Każde następne jest trudniejsze
 *   i mniej potrzebne,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO IDENTYCZNIE: pierwsze trzy
 *   zmiany w tym, jak się gotuje, przestawiają wszystko
 *   w miesiąc. Czwarta zajmuje pół roku i prawie nie
 *   widać różnicy,
 * — ⚠⚠ ŻE TO NIE JEST PORAŻKA, TYLKO NASYCENIE — i że
 *   właściwą reakcją jest przestać przestawiać
 *   i po prostu gotować,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: jeśli kolejne usprawnienie
 *   kosztuje więcej niż poprzednie i daje mniej, jesteś
 *   w fazie czterdziestu ośmiu lat. Odpuść,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem długa przerwa
 *   nie oznacza nasycenia, tylko brakujący element,
 *   który naprawdę wymaga czasu. Rozróżnia się je jednym
 *   pytaniem: czy zauważyłabyś, gdyby to nigdy nie
 *   powstało,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest dużym krokiem
 *   wchodzącym zwykle PO wielu małych. MÓWIĘ WPROST,
 *   że nie da tego wrażenia, co pierwsze trzy zmiany,
 *   i że kto się tego spodziewa, będzie rozczarowany.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO KAŻDY KOLEJNY KROK IDZIE SZYBCIEJ — kąt
 *   zajęty (Niemcza). ⚠⚠⚠ TO POZORNE PRZECIWIEŃSTWO
 *   I MUSZĘ JE ROZGRANICZYĆ JAWNIE: tam odstępy MALAŁY,
 *   bo chodziło o ZAKŁADANIE czegoś od zera; tu ROSNĄ,
 *   bo chodzi o DOKŁADANIE do czegoś, co już działa.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NAJPIERW DROGA, POTEM RUCH — kąt zajęty
 *   (Pieńsk).
 * — ⚠⚠⚠ ZERO SPISU, KTÓRY SIĘ NIE SUMUJE — kąt zajęty
 *   (Międzybórz, ta sama fala).
 * — ⚠⚠ ZERO DOŁOŻONEGO PO LATACH UŻYWANIA — kąt zajęty
 *   (Syców).
 * — ⚠⚠ ZERO X LAT BEZ STATUSU MIEJSKIEGO — kąt zajęty
 *   (Szklarska Poręba).
 * — ⚠⚠ ZERO KIEDY TO JEST JESZCZE TO SAMO — kąt zajęty
 *   (Świeradów-Zdrój). Dlatego wzmianka z 1502 r. zostaje
 *   faktem z zastrzeżeniem, bez morału.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠ ŻADNYCH LICZB PRZY PRZYKŁADACH KUCHENNYCH —
 *   „miesiąc" i „pół roku" to jedyne dopuszczone
 *   przybliżenia i nie dotyczą żadnej potrawy.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU GRANICZNEGO · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   UPADKU PRZEMYSŁU I BEZROBOCIA · ZERO HERBU
 *   (nieustalony).
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ liczby miejscowości w gminie.
 * — NIE TWIERDZĘ, że wzmianka z 1502 r. dotyczy
 *   dzisiejszego miasta.
 * — NIE PODAJĘ ani jednej liczby o lasach.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Węgliniec leży w powiecie zgorzeleckim; miasto liczy
 *   2 642 mieszkańców (GUS, 31.12.2024) na 8,7 km²,
 *   czyli 302,6 osoby na kilometr kwadratowy, a cała
 *   gmina miejsko-wiejska 7 725 osób na 339,2 km², czyli
 *   23 osoby na kilometr,
 * — wzmianka z 1502 r., mówiąca o założeniu kuźni nad
 *   zbiornikiem na rzece Czarna Mała, dotyczy wsi, która
 *   dziś nazywa się Stary Węgliniec; dzisiejsze miasto
 *   wyrosło około dwóch kilometrów dalej, przy stacji
 *   kolejowej, a prawa miejskie otrzymało w 1967 r.,
 * — linie kolejowe docierały tu kolejno w 1846 r.
 *   (Berlin – Wrocław), 1847 (do Drezna przez Zgorzelec),
 *   1865 (do Lubania) i 1913 (linia lokalna do Czerwonej
 *   Wody).
 */
export const WEGLINIEC: CityContent = {
  slug: "wegliniec",
  h1: "Thermomix Węgliniec – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Węgliniec — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Węglińcu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Węgliniec — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Węglińcu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Węglińca z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich wsi w gminie.",

  highlights: highlightyStandardowe("Węgliniec"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rok. Potem osiemnaście lat. Potem czterdzieści osiem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Węglińcu – jak wygląda prezentacja?",
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
      id: "przerwy-rosna",
      heading: "Przerwy rosną",
      paragraphs: [
        "Do Węglińca linie kolejowe docierały cztery razy: w 1846, 1847, 1865 i 1913 roku.",
        "Pierwsza i druga — rok odstępu. Druga i trzecia — osiemnaście lat. Trzecia i czwarta — czterdzieści osiem.",
        "Odstępy nie maleją. Rosną, i to gwałtownie. Powód jest prosty do nazwania, choć rzadko się go nazywa: najłatwiejsze połączenia robi się pierwsze. Każde następne jest trudniejsze, droższe i mniej komuś potrzebne.",
        "W kuchni działa to identycznie, tylko w latach zamiast dziesięcioleci.",
        "Pierwsze trzy zmiany w tym, jak się gotuje, przestawiają wszystko w miesiąc. Garnek, który wreszcie stoi pod ręką. Zakupy robione raz zamiast czterech razy. Jedno danie, które wchodzi do stałego repertuaru.",
        "Czwarta zmiana zajmuje pół roku i prawie nie widać różnicy. Piąta — nie wiadomo nawet, czy w ogóle coś dała.",
        "To nie jest porażka. To jest nasycenie, i wygląda dokładnie tak samo jak porażka, dlatego tak łatwo je pomylić.",
        "Ruch jest jeden i sprowadza się do rozpoznania fazy. Jeśli kolejne usprawnienie kosztuje więcej niż poprzednie i daje mniej — jesteś w fazie czterdziestu ośmiu lat. Wtedy najlepszą rzeczą, jaką można zrobić, jest przestać przestawiać i po prostu gotować.",
        "Dopowiem, bo to leży blisko i wygląda na sprzeczność: gdzie indziej pisałam, że odstępy między kolejnymi krokami maleją. Tam chodziło o zakładanie czegoś od zera — pierwszy krok jest najwolniejszy, bo nie ma na czym stanąć. Tu chodzi o coś odwrotnego: o dokładanie do czegoś, co już działa. Jedno i drugie jest prawdą, tylko dotyczy innej fazy.",
        "Uczciwie o drugiej stronie: czasem długa przerwa nie oznacza nasycenia, tylko brakujący element, który naprawdę wymaga czasu. Rozróżnia się je jednym pytaniem: czy zauważyłabyś, gdyby to nigdy nie powstało. Jeśli nie — to nasycenie.",
        "I uczciwie o sprzęcie. Thermomix jest dużym krokiem, który u większości ludzi wchodzi po wielu małych. Nie da tego wrażenia, co pierwsze trzy zmiany w kuchni, bo najłatwiejsze usprawnienia już za Wami. Kto spodziewa się rewolucji w pierwszym tygodniu, będzie rozczarowany — i wolę to powiedzieć teraz niż po dostawie.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Węglińcu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, co ostatnio zmieniliście w kuchni i czy to coś dało. To zwykle najlepsza wskazówka, czego szukać na spotkaniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Węglińcu"),
    sekcjaRaty("w Węglińcu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Węglińca",
      paragraphs: [
        "Węgliniec leży w powiecie zgorzeleckim. Samo miasto liczy 2 642 mieszkańców (GUS, 31.12.2024) na niecałych dziewięciu kilometrach kwadratowych, czyli trzysta trzy osoby na kilometr, a cała gmina miejsko-wiejska 7 725 osób na trzystu trzydziestu dziewięciu — czyli dwadzieścia trzy osoby na kilometr. To jedna z najrzadziej zaludnionych gmin, o jakich pisałam. Liczby miejscowości nie podaję, bo źródło deklaruje dziewięć, a wymienia dziesięć nazw; należą do nich Ruszów, Czerwona Woda, Stary Węgliniec, Jagodzin i Zielonka. Z datą początku jest tu rzecz, którą warto powiedzieć wprost: wzmianka z 1502 roku, mówiąca o założeniu kuźni nad zbiornikiem na rzece Czarna Mała, dotyczy wsi, która dziś nazywa się Stary Węgliniec. Dzisiejsze miasto wyrosło około dwóch kilometrów dalej, przy stacji kolejowej, a prawa miejskie otrzymało w 1967 roku. Linie kolejowe docierały tu kolejno w 1846 roku — Berlin–Wrocław, w 1847 — do Drezna przez Zgorzelec, w 1865 — do Lubania, i w 1913 — linia lokalna do Czerwonej Wody.",
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

  districtsHeading: "Do których części Węglińca dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich wsi w gminie: Ruszowa, Czerwonej Wody, Starego Węglińca, Jagodzina, Zielonki i pozostałych. Wszędzie bez dopłaty.",
    "Gmina ma ponad trzysta trzydzieści kilometrów kwadratowych, więc przy umawianiu warto podać nazwę miejscowości. I warto powiedzieć wyraźnie, czy chodzi o Węgliniec, czy o Stary Węgliniec — to dwie różne miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Węgliniec też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Zgorzelca, Bolesławca, Pieńska, Nowogrodźca i Lubania — wszędzie bezpłatnie, tak samo jak w samym Węglińcu.",
  ],
  nearbyTowns: ["Zgorzelec", "Bolesławiec", "Pieńsk", "Nowogrodziec", "Lubań"],

  about: blokOMnie("do Węglińca", "w Węglińcu i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Węglińca bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi: mówi się „do Węglińca” i „w Węglińcu”, a nie „w Węgliniecu”. I warto podawać pełną nazwę — Stary Węgliniec to osobna wieś w tej samej gminie, i to właśnie jej dotyczy najstarsza wzmianka z 1502 roku.",
    },
    ...faqWspolne("w Węglińcu"),
    {
      question: "Zmieniłam już w kuchni wszystko, co się dało, a kolejne pomysły nic nie dają. Co dalej?",
      answer:
        "Prawdopodobnie nic — i to jest dobra wiadomość. Do Węglińca linie kolejowe docierały w 1846, 1847, 1865 i 1913 roku: rok odstępu, potem osiemnaście lat, potem czterdzieści osiem. Najłatwiejsze połączenia robi się pierwsze, każde następne kosztuje więcej i daje mniej. W kuchni jest tak samo: pierwsze trzy zmiany przestawiają wszystko, czwarta ledwie coś zmienia. To nasycenie, nie porażka, choć wygląda identycznie. Sprawdzian: czy zauważyłabyś, gdyby ta kolejna zmiana nigdy nie nastąpiła.",
    },
    {
      question: "Czy Thermomix zrobi w mojej kuchni dużą różnicę?",
      answer:
        "Zależy, w której fazie jesteście, i uczciwie mówiąc — u wielu osób mniejszą, niż obiecują reklamy. Jeśli macie już poukładane zakupy, stałe dania i sprzęt pod ręką, to najłatwiejsze usprawnienia są za Wami i nowe urządzenie nie da tego wrażenia, co pierwsze zmiany. Jeśli natomiast wszystko dopiero się układa, różnica bywa duża. Na prezentacji staram się to rozpoznać, zanim zaczniemy rozmawiać o cenie.",
    },
  ],

  geo: { lat: 51.2883, lng: 15.2256 },
};
