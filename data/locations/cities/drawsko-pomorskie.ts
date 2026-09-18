import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * DRAWSKO POMORSKIE — powiat drawski,
 * woj. zachodniopomorskie, nad Drawą.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ, siedziba powiatu.
 * MIASTO: 11 194 mieszkańców (GUS 31.12.2024), 22,3 km²,
 * gęstość 501,3 os./km², 160 m n.p.m.
 * CAŁA GMINA: 16 236 osób, 409,4 km², 37 miejscowości.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,5316 / 15,8139.
 * ⚠ en.wikipedia podaje 11 292 za 31.12.2021 — różnica
 *   +0,9 % w trzy lata, najmniejsza w tej fali. Brak błędu.
 *
 * ⚠ ODMIANA — POTWIERDZONE W PWN:
 *   D. DRAWSKA POMORSKIEGO, Ms. W DRAWSKU POMORSKIM,
 *   przym. DRAWSKI. ⚠⚠ ODMIENIAJĄ SIĘ OBA CZŁONY.
 *   ⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — „drawszczanin"
 *   nie jest potwierdzony w PWN.
 * ⚠⚠⚠ HOMONIM KRYTYCZNY: DRAWSKO POMORSKIE ≠ DRAWNO
 *   (inne miasto, powiat choszczeński, TO SAMO
 *   WOJEWÓDZTWO, ok. 30–40 km na południe). Obie nazwy
 *   pochodzą od rzeki Drawy. ROZGRANICZAM W FAQ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1254 — pierwsza udokumentowana wzmianka o regionie.
 *   ⚠ NADANIA ZIEMI ZAKONOWI NIE UŻYWAM — wątek
 *   wyznaniowy.
 * — ⚠⚠⚠ RDZEŃ KĄTA — DOKUMENT LOKACYJNY:
 *   — 8 MARCA 1297 R., W PRENZLAU, margrabiowie
 *     Otto IV i Konrad wystawiają dokument lokacyjny
 *     Drawska, na wniosek Arnolda von der Goltz,
 *   — ⚠⚠ ORYGINAŁ ZAGINĄŁ. Treść przetrwała WYŁĄCZNIE
 *     dzięki kopii sporządzonej przez historyka Dickmanna
 *     w XVIII wieku,
 *   — ⚠⚠⚠ KRONIKA Z LAT 1724–1744 BŁĘDNIE DATOWAŁA
 *     TEN SAM DOKUMENT NA ROK 1279. Błąd powielano,
 *     aż historycy skorygowali datę na 1297 na podstawie
 *     analizy TREŚCI dokumentu.
 *     TO JEST WŁAŚCIWY HAK: NIE BRAK ZAPISU, TYLKO
 *     ZAPIS BŁĘDNY, POWIELANY PRZEZ POKOLENIA.
 *   — podział nadania: 184 ŁANY, z czego 10 dla
 *     dziedzicznego wójta, reszta dla mieszczan.
 *     ⚠ CZTERECH ŁANÓW DLA KOŚCIOŁA NIE WYMIENIAM —
 *     wątek wyznaniowy. Piszę „sto osiemdziesiąt cztery
 *     łany, z czego dziesięć dla wójta".
 * — 1368 — zmiana nazwy miasta.
 *   ⚠ NAZWY HISTORYCZNEJ NIE PODAJĘ.
 * — 1620 — wielki pożar; kolejne w 1664 i 1696.
 *   ⚠ PODAJĘ JAKO DATY, BEZ OPISU ZNISZCZEŃ.
 * — 1877 — połączenie kolejowe z linią Koszalin–Szczecin.
 * — ⚠⚠ ROKU 1948 I ZMIANY NAZWY NIE UŻYWAM — sąsiaduje
 *   z 1945.
 *
 * ⚠⚠⚠ JEZIORO DRAWSKO — PUŁAPKA GEOGRAFICZNA:
 *   NIE LEŻY W GRANICACH MIASTA DRAWSKO POMORSKIE.
 *   Jego brzegi obsługuje przede wszystkim CZAPLINEK —
 *   inna gmina tego samego powiatu. Mimo wspólnego
 *   rdzenia nazwy TO NIE JEST JEZIORO TEGO MIASTA.
 *   ⚠⚠ NIE UŻYWAM GO WCALE — ani jako kąta, ani w bloku
 *   faktograficznym. Zbyt łatwo o sugestię, że leży
 *   w mieście. TWARDA GRANICA.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE POTWIERDZONO.
 *   Urząd ma artykuł o Liście, ale jego treści nie udało
 *   się pobrać (błąd 429). NIE TWIERDZĘ ANI ŻE JEST,
 *   ANI ŻE NIE MA WPISU. NIE PRZYPISUJĘ PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: BŁĄD, KTÓRY SIĘ PRZEPISUJE — kroki w gotowaniu,
 * które robimy, bo tak było w przepisie, a przepis miał
 * je z czegoś, czego już nie ma.
 * Kąt od dokumentu z 1297 r.: oryginał zaginął, została
 * kopia, a kronika z XVIII w. przepisała datę błędnie —
 * 1279 zamiast 1297. Błąd powielano, dopóki ktoś nie
 * sprawdził go wobec treści, a nie wobec innej kopii.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że dokument lokacyjny wystawiono 8 marca 1297 r.
 *   w Prenzlau, że oryginał zaginął i że treść znamy
 *   z XVIII-wiecznej kopii Dickmanna,
 * — że kronika z lat 1724–1744 podała datę 1279 i błąd
 *   powielano, aż skorygowano go na podstawie treści,
 * — ŻE POPRAWKA NIE PRZYSZŁA Z PORÓWNANIA KOPII
 *   Z KOPIĄ — to jest rdzeń. Porównywanie odpisów
 *   powiela błąd; rozstrzyga dopiero sprawdzenie,
 *   czy treść trzyma się sama,
 * — ⚠⚠ ŻE W KUCHNI DOKŁADNIE TAK DZIAŁAJĄ KROKI
 *   PRZEPISYWANE BEZ ZASTANOWIENIA. Robimy je, bo tak
 *   było w przepisie, a przepis miał je z innego przepisu.
 *   ⚠⚠⚠ NIE WYMIENIAM ANI JEDNEGO KONKRETNEGO KROKU
 *   I NIE OCENIAM ŻADNEJ TECHNIKI — nie jestem od tego,
 *   żeby rozstrzygać, co w gotowaniu ma sens, a co nie.
 *   TWARDA GRANICA BEZWZGLĘDNA,
 * — ⚠⚠ ŻE ZAMIAST OCENIAĆ KROKI Z GÓRY, PODAJĘ SPOSÓB
 *   SPRAWDZENIA U SIEBIE: zrobić raz bez tego kroku
 *   i porównać. Jedno podejście, jedna zmiana naraz —
 *   przy dwóch zmianach naraz nie wiadomo, co zadziałało,
 * — ⚠⚠ ŻE NAJCZĘSTSZYM ŹRÓDŁEM TAKICH KROKÓW SĄ
 *   NIEISTNIEJĄCE JUŻ WARUNKI: przepis pisany dla innego
 *   sprzętu, innych produktów albo innej kolejności pracy
 *   w kuchni. ⚠ MÓWIĘ TO OGÓLNIE, BEZ PRZYKŁADÓW,
 * — ⚠⚠ UCZCIWIE: CZĘŚĆ KROKÓW, KTÓRE WYGLĄDAJĄ
 *   NA ZBĘDNE, ZBĘDNE NIE JEST — i kto wytnie je hurtem,
 *   zepsuje więcej, niż naprawi. Dlatego jedno podejście
 *   i jedna zmiana, a nie porządki,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie orzeka, które
 *   kroki są potrzebne. Ułatwia natomiast samo
 *   sprawdzenie, bo powtarza to samo tak samo — a przy
 *   porównaniu dwóch wersji powtarzalność jest jedyną
 *   rzeczą, która naprawdę się liczy.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ODTWARZANIA PRZEPISU, KTÓREGO NIKT
 *   NIE ZAPISAŁ — kąty zajęte (Golub-Dobrzyń, Puck).
 *   ⚠⚠ TU JEST ODWROTNIE: ZAPIS ISTNIEJE I JEST BŁĘDNY.
 *   Ani jednego zdania o odtwarzaniu z pamięci.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠⚠ ZERO ZAPISYWANIA WŁASNEJ WERSJI — kąt zajęty
 *   (Kamień Krajeński).
 * — ⚠⚠ ZERO „BABCINYCH PRZEPISÓW SĄ MŁODSZE, NIŻ SIĘ
 *   WYDAJE" — kąt zajęty (Suraż).
 * — ⚠⚠ ZERO DAWNYCH MIAR — kąt zajęty (Radziejów),
 *   i ZERO WŁASNEJ MIARY — kąt zajęty (Gryfice).
 * — ⚠⚠ ZERO ZAMIENNIKÓW — kąt zajęty (Kwidzyn).
 * — ⚠ ZERO DANIA, KTÓRE NIE WYSZŁO — kąt zajęty
 *   (Barlinek, ta sama fala).
 * — ⚠⚠⚠ ŻADNEJ OCENY KONKRETNYCH TECHNIK KUCHENNYCH.
 *   Nie piszę, że jakikolwiek krok jest zbędny ani że
 *   jakikolwiek jest konieczny. Podaję WYŁĄCZNIE SPOSÓB
 *   SPRAWDZENIA. TWARDA GRANICA BEZWZGLĘDNA — to jest
 *   największe ryzyko tej strony.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠ przy kącie „może tego kroku nie trzeba" to droga
 *   prosto do wpadki. NIE PISZĘ o żadnym kroku
 *   związanym z myciem, obróbką ani temperaturą produktu.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO POLIGONU. Pod miastem leży jeden
 *   z największych poligonów wojskowych w Europie i jest
 *   to pierwszy skojarzeniowy fakt o Drawsku
 *   w wyszukiwarce. NIE WSPOMINAM ANI RAZU.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ⚠⚠⚠ ZERO 4 MARCA 1945, ZERO ZMIANY NAZWY
 *   W LATACH 1945–1948, ZERO PRZESIEDLEŃ.
 * — ⚠⚠ ZERO EPIDEMII Z 1630 R.
 * — ⚠⚠ ZERO OKRESU PODLEGŁOŚCI ZAKONOWI (1400–1455)
 *   I ZERO NADAŃ ZIEMI ZAKONOM.
 * — ⚠ POŻARY 1620, 1664, 1696 — wyłącznie jako daty,
 *   bez opisu zniszczeń.
 * — ⚠ ZERO JEZIORA DRAWSKO — patrz pułapka geograficzna.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE TWIERDZĘ, że jezioro Drawsko leży w mieście.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE TWIERDZĘ, że gmina ma albo nie ma wpisu na Liście
 *   Produktów Tradycyjnych — nie udało się sprawdzić.
 * — NIE OCENIAM ŻADNEJ TECHNIKI KUCHENNEJ.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Drawsko Pomorskie leży nad Drawą, jest siedzibą
 *   powiatu drawskiego i miastem w gminie
 *   miejsko-wiejskiej; liczy 11 194 mieszkańców
 *   (GUS, 31.12.2024) na 22,3 km², 160 m n.p.m., a cała
 *   gmina 16 236 osób na 409,4 km² w 37 miejscowościach,
 * — pierwsza udokumentowana wzmianka o regionie pochodzi
 *   z 1254 r.,
 * — dokument lokacyjny wystawili 8 marca 1297 r.
 *   w Prenzlau margrabiowie Otto IV i Konrad, na wniosek
 *   Arnolda von der Goltz; miasto dostało 184 łany,
 *   z czego 10 przypadło dziedzicznemu wójtowi,
 * — oryginał dokumentu zaginął, a jego treść znamy
 *   z kopii sporządzonej w XVIII w. przez historyka
 *   Dickmanna; kronika z lat 1724–1744 datowała go
 *   błędnie na 1279 r., a poprawnej daty dowiedziono
 *   na podstawie analizy treści,
 * — nazwa miasta zmieniła się w 1368 r., pożary nawiedzały
 *   je w 1620, 1664 i 1696 r., a kolej dotarła tu
 *   w 1877 r. wraz z linią Koszalin–Szczecin.
 */
export const DRAWSKO_POMORSKIE: CityContent = {
  slug: "drawsko-pomorskie",
  h1: "Thermomix Drawsko Pomorskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Drawsko Pomorskie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Drawsku Pomorskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Drawsko Pomorskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Drawsku Pomorskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Drawska Pomorskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Drawsko Pomorskie"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Porównywanie odpisu z odpisem powiela błąd. Rozstrzyga dopiero sprawdzenie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Drawsku Pomorskim – jak wygląda prezentacja?",
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
      id: "blad-przepisany",
      heading: "1279 zamiast 1297, czyli błąd, który się przepisuje",
      paragraphs: [
        "Dokument lokacyjny Drawska wystawiono ósmego marca 1297 roku w Prenzlau. Podpisali go margrabiowie Otto IV i Konrad, na wniosek Arnolda von der Goltz. Miasto dostało sto osiemdziesiąt cztery łany ziemi, z czego dziesięć przypadło dziedzicznemu wójtowi, a reszta mieszczanom.",
        "Oryginał tego dokumentu zaginął. Jego treść znamy wyłącznie z kopii, którą w osiemnastym wieku sporządził historyk Dickmann.",
        "I tu robi się ciekawie. Kronika pisana w latach 1724–1744 podała datę tego samego dokumentu jako 1279 rok. Osiemnaście lat za wcześnie. Błąd nie został zauważony od razu — przeciwnie, przepisywano go dalej, bo nowe opracowania brały datę ze starszych opracowań, a nie z dokumentu.",
        "Poprawka przyszła dopiero wtedy, gdy ktoś sprawdził, czy treść trzyma się sama — kto wtedy panował, kto mógł wystawić taki dokument, co z czym się zgadza. Nie z porównania kopii z kopią. Porównywanie odpisów powiela błąd, bo wszystkie odpisy mają go tak samo.",
        "Kuchnia jest pełna dokładnie takich kroków i to jest jedyna rzecz, którą chcę tu powiedzieć.",
        "Robimy coś, bo tak było w przepisie. A przepis miał to z innego przepisu, a tamten z jeszcze innego — i na końcu tego łańcucha bywa powód, którego dziś już nie ma. Inny sprzęt. Inne produkty w sklepie. Inna kolejność pracy w kuchni, w której ten krok miał sens, bo coś innego działo się równolegle.",
        "Nie zamierzam wymieniać, o które kroki chodzi, i robię to świadomie. Nie jestem od rozstrzygania, co w gotowaniu ma sens — i nie ufałabym nikomu, kto ogłasza taką listę z góry, dla wszystkich kuchni naraz.",
        "Zamiast tego jest sposób sprawdzenia u siebie i jest banalnie prosty. Zrób raz to samo danie bez tego jednego kroku i porównaj. Jedno podejście, jedna zmiana. Przy dwóch zmianach naraz nie będzie wiadomo, która zadziałała, a która nie — i skończy się tym, że nie dowiecie się niczego.",
        "Uczciwie i to jest ważniejsze niż wszystko powyższe: część kroków, które wyglądają na zbędne, zbędne nie jest. Kto wytnie je hurtem, bo przeczytał, że „tak się już nie robi”, zepsuje więcej, niż naprawi. Dlatego jedno podejście i jedna zmiana — a nie porządki w całym przepisie naraz.",
        "O urządzeniu krótko, bo jego rola jest tu skromna i nie ma sensu jej rozdmuchiwać. Ono nie orzeka, które kroki są potrzebne. Nie wie.",
        "Ułatwia natomiast samo sprawdzenie, i to akurat realnie: powtarza to samo tak samo. Przy porównywaniu dwóch wersji tego samego dania powtarzalność jest jedyną rzeczą, która się liczy — bo jeśli druga próba różni się od pierwszej także tempem mieszania i temperaturą, to nie porównujecie kroku, tylko dwa różne gotowania.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Drawsku Pomorskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy jest u Was krok, który robicie od zawsze i nikt nie pamięta dlaczego — to dobry materiał na wspólne sprawdzenie przy jednym daniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Drawsku Pomorskim"),
    sekcjaRaty("w Drawsku Pomorskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla drawskiej rodziny",
      paragraphs: [
        "Drawsko Pomorskie leży nad Drawą, jest siedzibą powiatu drawskiego i miastem w gminie miejsko-wiejskiej: samo miasto liczy ponad jedenaście tysięcy mieszkańców na dwudziestu dwóch i trzech dziesiątych kilometra kwadratowego, sto sześćdziesiąt metrów nad poziomem morza, a cała gmina ponad szesnaście tysięcy osób na czterystu dziewięciu kilometrach kwadratowych, w trzydziestu siedmiu miejscowościach. Pierwsza udokumentowana wzmianka o regionie pochodzi z 1254 roku. Dokument lokacyjny wystawili ósmego marca 1297 roku w Prenzlau margrabiowie Otto IV i Konrad, na wniosek Arnolda von der Goltz; miasto dostało wtedy sto osiemdziesiąt cztery łany, z czego dziesięć przypadło dziedzicznemu wójtowi. Oryginał zaginął, a treść dokumentu znamy z kopii sporządzonej w osiemnastym wieku przez historyka Dickmanna — kronika z lat 1724–1744 datowała go zresztą błędnie na 1279 rok i dopiero analiza treści pozwoliła ustalić datę właściwą. Nazwa miasta zmieniła się w 1368 roku, pożary nawiedzały je w 1620, 1664 i 1696, a kolej dotarła tu w 1877 wraz z linią z Koszalina do Szczecina.",
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

  districtsHeading: "Do których części Drawska Pomorskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu siedmiu miejscowości w gminie — a gmina jest rozległa, ponad czterysta kilometrów kwadratowych. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Drawsko Pomorskie też przyjadę",
  nearbyParagraphs: [
    "Złocieniec jest jedenaście kilometrów stąd, a Szczecinek, Wałcz i Stargard mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Złocieniec", "Szczecinek", "Wałcz", "Stargard"],

  about: blokOMnie("do Drawska Pomorskiego", "w Drawsku Pomorskim", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Drawska Pomorskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu siedmiu miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo pomyłka jest bardzo częsta: Drawsko Pomorskie to siedziba powiatu drawskiego — a Drawno to zupełnie inne miasto, w powiecie choszczeńskim, choć w tym samym województwie i też nad Drawą.",
    },
    ...faqWspolne("w Drawsku Pomorskim"),
    {
      question: "Jak sprawdzić, czy jakiś krok w przepisie jest naprawdę potrzebny?",
      answer:
        "Zrobić raz to samo danie bez tego jednego kroku i porównać. Jedno podejście, jedna zmiana — przy dwóch zmianach naraz nie będzie wiadomo, która zadziałała. I rzecz ważniejsza: część kroków, które wyglądają na zbędne, zbędna nie jest, więc lepiej nie robić porządków w całym przepisie naraz. Nie podaję listy kroków do wycięcia, bo nie ufałabym nikomu, kto taką listę ogłasza z góry dla wszystkich kuchni.",
    },
    {
      question: "Czy Thermomix pomaga w takim porównaniu?",
      answer:
        "W samym rozstrzygnięciu nie — nie wie, które kroki są potrzebne. Pomaga w czym innym: powtarza to samo tak samo. Przy porównywaniu dwóch wersji jednego dania powtarzalność jest jedyną rzeczą, która się liczy, bo jeśli druga próba różni się także tempem mieszania i temperaturą, to nie porównujecie kroku, tylko dwa różne gotowania.",
    },
  ],

  geo: { lat: 53.5316, lng: 15.8139 },
};
