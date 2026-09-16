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
 * CEDYNIA — powiat gryfiński,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 1 444 mieszkańców (GUS 31.12.2024), 1,7 km²,
 *   gęstość 864,7 os./km².
 *   ⚠ NAJMNIEJSZE POWIERZCHNIOWO I NAJGĘSTSZE MIASTO
 *   W CAŁYM WOJEWÓDZTWIE SPOŚRÓD OPISYWANYCH.
 * CAŁA GMINA: 3 906 osób, 180,6 km², gęstość 22 os./km²,
 *   21 miejscowości, 14 sołectw.
 * ⚠⚠ RÓŻNICA 2,7×. NIE MIESZAM TYCH LICZB.
 * ⚠ GEO: 52,8793 / 14,2025.
 *
 * ⚠⚠⚠ ODMIANA — NIETYPOWA, NAJCZĘSTSZY BŁĄD:
 *   MIANOWNIK „CEDYNIA".
 *   ⚠⚠⚠ D. DO CEDYNI, Ms. W CEDYNI — JEDNO „I".
 *   NIGDY „do Cedynii", NIGDY „w Cedynii".
 *   Dopełniacz i miejscownik brzmią TAK SAMO.
 *   ⚠⚠ CZASOWNIK W LICZBIE POJEDYNCZEJ RODZAJU
 *   ŻEŃSKIEGO: „CEDYNIA LEŻY", „CEDYNIA MA".
 *   ⚠⚠ NIE POTWIERDZONE W PWN — reguła dla
 *   rzeczowników na -nia po spółgłosce.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM —
 *   piszę „dla rodziny z Cedyni".
 *
 * ⚠⚠ HOMONIM: nazwa unikatowa w Polsce, ale mylona
 *   z przymiotnikiem „cedyński" przypisywanym
 *   PARKOWI KRAJOBRAZOWEMU, który rozciąga się
 *   DALEKO POZA gminę Cedynia. Osobną jednostką są
 *   też CEDYŃSKIE WZGÓRZA MORENOWE.
 *   ROZGRANICZAM W FAQ.
 *
 * ⚠⚠⚠ ETYKA — TEMAT DOMINUJĄCY, POMIJANY W CAŁOŚCI:
 *   CEDYNIA JEST W WYNIKACH WYSZUKIWANIA PRZEDE
 *   WSZYSTKIM MIEJSCEM BITWY Z 972 R. (Góra Czcibora,
 *   pomnik, inscenizacje).
 *   ⚠⚠⚠ NIE UŻYWAM ANI JEDNEGO FAKTU Z TEGO OBSZARU.
 *   Ani bitwy, ani Czcibora, ani pomnika, ani
 *   inscenizacji. TWARDA GRANICA BEZWZGLĘDNA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠ 1299 — PIERWSZA WZMIANKA INFORMUJĄCA, ŻE MIASTO
 *   JUŻ POSIADA PRAWA MIEJSKIE. ⚠⚠⚠ TO JEST WZMIANKA,
 *   NIE NADANIE — nadanie było wcześniejsze, nieznane.
 *   PISZĘ TO WPROST.
 * — ⚠⚠ ZAKONU CYSTEREK (2. poł. XIII w.) NIE UŻYWAM —
 *   wątek wyznaniowy i zakonny. POMIJAM.
 * — Zabytki: grodzisko wczesnośredniowieczne; dawny
 *   klasztor cysterek; RATUSZ Z 1840 R.;
 *   NEOGOTYCKA WIEŻA WIDOKOWA z 2. poł. XIX w.
 *   ⚠⚠ KOŚCIOŁA NIE OPISUJĘ — wątek wyznaniowy,
 *   a źródła są sprzeczne („XIV-wieczny" w artykule
 *   o mieście, „romański" w artykule o gminie).
 *   ⚠ KLASZTOR WYMIENIAM CO NAJWYŻEJ JAKO BUDOWLĘ,
 *   bez życia zakonnego.
 *
 * GEOGRAFIA — FAKTY UŻYTE:
 * — Gmina: 18 061 ha (= 180,61 km², zgodne z GUS).
 * — Lasy ok. 40,0 % powierzchni = 7 222 ha.
 * — Cedyński Park Krajobrazowy: utworzony
 *   1 KWIETNIA 1993 R., powierzchnia ponad 30 850 HA;
 *   45 gatunków roślin pod ochroną gatunkową.
 *   ⚠⚠⚠ ZESTAWIENIA „PARK JEST WIĘKSZY OD GMINY,
 *   KTÓRA DAŁA MU NAZWĘ" NIE UŻYWAM JAKO KĄTA —
 *   prowadzi w obszar nazw (Borne Sulinowo, Człopa
 *   z poprzedniej fali). PODAJĘ OBIE LICZBY JAKO FAKTY
 *   W SEKCJI RODZINNEJ, bez morału. TWARDA GRANICA.
 * — Najwyższy punkt: Zwierzyniec 167 m n.p.m.
 * — ⚠⚠⚠ RDZEŃ KĄTA — CZTERY REZERWATY:
 *   OLSZYNA ŹRÓDLISKOWA 1,0 HA · DOLINA ŚWIERGOTKI
 *   11 HA · WRZOSOWISKA CEDYŃSKIE 72,02 HA ·
 *   BIELINEK 75,5 HA.
 *   ⚠⚠ NAJMNIEJSZY JEST SIEDEMDZIESIĄT PIĘĆ RAZY
 *   MNIEJSZY OD NAJWIĘKSZEGO — A CHRONI SIĘ JE TAK
 *   SAMO, NA TYCH SAMYCH ZASADACH.
 *   ⚠ Krotność 75× to mój rachunek z dwóch liczb
 *   źródłowych — podaję opisowo.
 *   TO JEST CAŁY KĄT.
 * — Odra — zachodnia granica gminy.
 *   ⚠ WYMIENIAM WYŁĄCZNIE JAKO ELEMENT KRAJOBRAZU.
 *   ⚠⚠ ZERO WĄTKÓW GRANICZNYCH I PRZEJŚĆ.
 * — 14 sołectw: Bielinek, Czachów, Golice, Lubiechów
 *   Dolny, Lubiechów Górny, Łukowice, Orzechów,
 *   Osinów Dolny, Piasek, Radostów, Siekierki,
 *   Stara Rudnica, Stary Kostrzynek, Żelichów.
 *   ⚠⚠ SIEKIEREK NIE WYMIENIAM Z NAZWY — miejscowość
 *   silnie kojarzona z wątkiem wojennym. POMIJAM
 *   CAŁĄ LISTĘ SOŁECTW, podaję samą liczbę.
 * — Sąsiednie gminy (odległości w linii prostej):
 *   Moryń 13,0 km, Chojna 17,8, Mieszkowice 22,1,
 *   Boleszkowice 30,0, Trzcińsko-Zdrój 31,5.
 *   ⚠ PODAJĘ „OKOŁO" — to nie są pomiary drogowe.
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE USTALONO.
 *   ⚠⚠ Z powiatu gryfińskiego pochodzi „Akacjowy miód
 *   cedyński" (22.02.2013) — ⚠⚠⚠ PRZYNALEŻNOŚCI TEGO
 *   WPISU DO GMINY CEDYNIA NIE ZWERYFIKOWANO W TEJ
 *   SESJI. NIE UŻYWAM GO. TEMAT NIE POJAWIA SIĘ
 *   W TEKŚCIE W OGÓLE.
 * ⚠ HERBU NIE USTALONO — NIE OPISUJĘ.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: SKALA NIE DECYDUJE O DBAŁOŚCI — o tym, że rzeczy
 * małe wymagają tyle samo uwagi co duże, choć odruchowo
 * dajemy im mniej.
 * Kąt od rezerwatów gminy Cedynia: najmniejszy ma
 * hektar, największy siedemdziesiąt pięć i pół.
 * Chroni się je na tych samych zasadach.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w gminie Cedynia są cztery rezerwaty: Olszyna
 *   Źródliskowa (1,0 ha), Dolina Świergotki (11 ha),
 *   Wrzosowiska Cedyńskie (72,02 ha) i Bielinek
 *   (75,5 ha),
 * — ŻE NAJMNIEJSZY JEST DZIESIĄTKI RAZY MNIEJSZY
 *   OD NAJWIĘKSZEGO, A CHRONI SIĘ GO DOKŁADNIE TAK
 *   SAMO — to jest rdzeń. Hektar podlega tym samym
 *   zasadom co siedemdziesiąt pięć,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY ODWROTNIE I ROBIMY TO ODRUCHOWO.
 *   Uwaga rozkłada się proporcjonalnie do rozmiaru:
 *   duży garnek dostaje miejsce, opiekę i szacunek,
 *   a mała rzecz ląduje gdzieś na dnie szuflady,
 * — ⚠⚠ ŻE TO JEST BŁĄD PRAKTYCZNY, NIE ESTETYCZNY:
 *   najczęściej używane przedmioty w kuchni są małe.
 *   Nóż, obieraczka, łyżka do mieszania, jedna deska.
 *   Od ich stanu zależy więcej niż od czegokolwiek
 *   dużego,
 * — ⚠⚠ ŻE SPRAWDZIAN JEST PROSTY: policzyć, ile razy
 *   w tygodniu bierze się do ręki największą rzecz
 *   w kuchni, a ile razy najmniejszą. Wynik zwykle
 *   jest odwrotny do tego, ile miejsca i uwagi każda
 *   z nich dostaje,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: NIE KAŻDA MAŁA RZECZ
 *   ZASŁUGUJE NA UWAGĘ. Rezerwaty wyznaczono, bo ktoś
 *   uznał, że są warte — nie dlatego, że są małe.
 *   Chodzi o to, żeby o rozmiarze nie decydował odruch,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie jest tą dużą
 *   rzeczą i nie zastąpi małych. Noża, deski i łyżki
 *   dalej trzeba mieć i dalej trzeba o nie dbać.
 *   MÓWIĘ TO WPROST, bo nikt nie kupuje urządzenia
 *   po to, żeby przestać kroić.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO BITWY Z 972 R., GÓRY CZCIBORA I POMNIKA.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO NAZWY, KTÓRA OBEJMUJE WIĘCEJ ALBO MNIEJ
 *   NIŻ OBIECUJE — obszar zajęty (Borne Sulinowo;
 *   Człopa z poprzedniej fali). Park Krajobrazowy
 *   większy od gminy aż się o to prosi. NIE WCHODZĘ.
 * — ⚠⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU I TEGO, CZEGO SIĘ
 *   UŻYWA — kąt zajęty (Polanów). ⚠⚠ TO JEST
 *   NAJBLIŻSZY KĄT. Tam chodzi o TO, KTÓRE RZECZY
 *   SĄ W UŻYCIU; TUTAJ o TO, ŻE UWAGĘ DAJEMY WEDŁUG
 *   ROZMIARU, A NIE WEDŁUG UŻYCIA. Nie robię przeglądu
 *   szafek, nie proponuję niczego wyrzucać i nie piszę
 *   o krótkiej liście. ROZGRANICZAM WPROST.
 * — ⚠⚠ ZERO POD RĘKĄ CZY SCHOWANE — kąt zajęty (Płoty).
 *   ⚠ Nie piszę o tym, gdzie rzecz trzymać, tylko
 *   o tym, w jakim jest stanie.
 * — ⚠⚠ ZERO DZIESIĘCIU KAWAŁKÓW I FUNKCJI MIEJSC —
 *   kąt zajęty (Tychowo).
 * — ⚠⚠ ZERO JEDNA POZYCJA ZAJMUJE POŁOWĘ — kąt zajęty
 *   (Pełczyce). ⚠ Tam chodzi o NIERÓWNĄ WAGĘ POZYCJI
 *   NA LIŚCIE; TUTAJ o RÓWNE TRAKTOWANIE MIMO
 *   NIERÓWNEGO ROZMIARU. To odwrotność — pilnuję,
 *   żeby nie użyć tych samych słów.
 * — ⚠⚠ ZERO POJEMNOŚCI KONTRA GABARYTU — kąt zajęty
 *   (Nowe Warpno, ta sama fala).
 * — ⚠⚠ ZERO GĘSTOŚCI I POWIERZCHNI UŻYTKOWEJ — obszar
 *   zajęty (Koluszki, Tychowo). ⚠⚠ Gęstość 864,7 os./km²
 *   przy 22 w gminie aż się prosi o morał o ciasnej
 *   strefie roboczej. NIE UŻYWAM GO. Podaję liczby
 *   wyłącznie w sekcji rodzinnej.
 * — ⚠ ZERO SKALOWANIA PORCJI — kąt zajęty (Świdwin).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH KONKRETNYCH ZALECEŃ CO DO SPRZĘTU —
 *   podaję WYŁĄCZNIE sprawdzian.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *   ⚠⚠ W SZCZEGÓLNOŚCI: pisząc o stanie noża i deski
 *   NIE MÓWIĘ NIC o higienie, myciu ani bakteriach.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO BITWY, WOJSKA I WĄTKÓW MILITARNYCH.
 * — ⚠⚠⚠ ZERO SIEKIEREK Z NAZWY — miejscowość silnie
 *   kojarzona z wątkiem wojennym. Podaję samą liczbę
 *   sołectw.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO I ZAKONNEGO — cysterek
 *   i kościoła nie wprowadzam.
 * — ⚠⚠ ZERO WĄTKÓW GRANICZNYCH — Odra wyłącznie jako
 *   element krajobrazu.
 * — ⚠ ZERO HERBU — nieustalony.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH — przynależność
 *   wpisu do gminy niezweryfikowana.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PISZĘ, że w 1299 r. Cedynia otrzymała prawa
 *   miejskie — to wzmianka, że już je miała.
 * — NIE OPISUJĘ kościoła — źródła sprzeczne.
 * — NIE PODAJĘ krotności między rezerwatami jako liczby
 *   ze źródła — to mój rachunek.
 * — NIE SUGERUJĘ, że produkt z Listy pochodzi z gminy
 *   Cedynia.
 * — NIE OPISUJĘ herbu.
 * — NIE PODAJĘ odległości jako pomiarów drogowych.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PODAJĘ ŻADNYCH ZALECEŃ CO DO SPRZĘTU.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Cedynia leży w powiecie gryfińskim, przy zachodniej
 *   granicy gminy wyznaczonej przez Odrę; miasto liczy
 *   1 444 mieszkańców (GUS, 31.12.2024) na 1,7 km²,
 *   co daje 864,7 osoby na kilometr kwadratowy, a cała
 *   gmina 3 906 osób na 180,6 km² — dwadzieścia dwie
 *   osoby na kilometr — z czternastoma sołectwami,
 * — w 1299 r. pojawiła się pierwsza wzmianka mówiąca,
 *   że Cedynia posiada prawa miejskie, co znaczy,
 *   że samo nadanie było wcześniejsze i nie jest znane,
 * — w mieście zachowały się grodzisko
 *   wczesnośredniowieczne, dawny klasztor, ratusz
 *   z 1840 r. i neogotycka wieża widokowa z drugiej
 *   połowy XIX w.,
 * — lasy zajmują około 40 % powierzchni gminy, czyli
 *   7 222 ha, a najwyższy punkt, Zwierzyniec, ma
 *   167 m n.p.m.,
 * — Cedyński Park Krajobrazowy utworzono 1 kwietnia
 *   1993 r.; liczy ponad 30 850 ha i chroni czterdzieści
 *   pięć gatunków roślin objętych ochroną gatunkową,
 * — w gminie są cztery rezerwaty: Olszyna Źródliskowa
 *   (1,0 ha), Dolina Świergotki (11 ha), Wrzosowiska
 *   Cedyńskie (72,02 ha) i Bielinek (75,5 ha).
 */
export const CEDYNIA: CityContent = {
  slug: "cedynia",
  h1: "Thermomix Cedynia – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Cedynia — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Cedyni (powiat gryfiński): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Cedynia — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Cedyni. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Cedyni w powiecie gryfińskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw w gminie.",

  highlights: highlightyStandardowe("Cedynia"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najmniejszy rezerwat ma hektar. Chroni się go tak samo jak ten siedemdziesięciopięciohektarowy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Cedyni – jak wygląda prezentacja?",
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
      id: "hektar-i-siedemdziesiat-piec",
      heading: "Hektar i siedemdziesiąt pięć hektarów",
      paragraphs: [
        "W gminie Cedynia są cztery rezerwaty przyrody. Olszyna Źródliskowa ma równy hektar. Dolina Świergotki — jedenaście. Wrzosowiska Cedyńskie — siedemdziesiąt dwa. Bielinek — siedemdziesiąt pięć i pół.",
        "Najmniejszy jest dziesiątki razy mniejszy od największego. A chroni się go dokładnie tak samo, na tych samych zasadach, z tą samą procedurą. Hektar podlega tym samym regułom co siedemdziesiąt pięć.",
        "W kuchni robimy odwrotnie i robimy to zupełnie odruchowo.",
        "Uwaga rozkłada się u nas proporcjonalnie do rozmiaru. Duży garnek dostaje swoje miejsce, swoją półkę i pewien rodzaj szacunku — wiadomo, gdzie stoi, wiadomo, ile kosztował. Mała rzecz ląduje na dnie szuflady, między siedmioma innymi, i nikt nie pamięta, kiedy ostatnio była w jakimkolwiek stanie poza „jest”.",
        "To jest błąd praktyczny, nie estetyczny.",
        "Najczęściej używane przedmioty w kuchni są małe. Nóż. Obieraczka. Jedna łyżka, którą się miesza wszystko. Jedna deska, na której się kroi wszystko. Od ich stanu zależy więcej niż od czegokolwiek dużego, bo przechodzą przez ręce codziennie i po kilka razy dziennie.",
        "Sprawdzian zajmuje pół minuty i jest dość nieprzyjemny. Policzcie, ile razy w tygodniu bierzecie do ręki największą rzecz w kuchni. A potem — ile razy najmniejszą, tę, którą bierzecie najczęściej. Wynik prawie zawsze jest odwrotny do tego, ile miejsca, uwagi i pieniędzy każda z nich dostała.",
        "Uczciwie o drugiej stronie: nie każda mała rzecz zasługuje na uwagę i nie o to chodzi. Rezerwaty wyznaczono dlatego, że ktoś uznał je za warte ochrony — nie dlatego, że są małe. Chodzi wyłącznie o to, żeby o poziomie dbałości nie decydował odruch, który mówi „duże, więc ważne”.",
        "Na koniec o urządzeniu, wprost i bez udawania.",
        "Thermomix jest tą dużą rzeczą i nie zastąpi małych. Nóż, deska i łyżka dalej będą potrzebne i dalej będzie trzeba o nie dbać — nikt nie kupuje urządzenia po to, żeby przestać kroić. Przejmuje natomiast sporą część tego, co dotąd wymagało kilku naczyń naraz, i tylko w tym zakresie warto go liczyć.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Cedyni?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, po co w kuchni sięgacie najczęściej. Pod to dobiorę dania, żeby porównanie miało sens.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Cedyni"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Cedyni",
      paragraphs: [
        "Cedynia leży w powiecie gryfińskim, przy zachodniej granicy gminy wyznaczonej przez Odrę. Samo miasto liczy ponad tysiąc czterystu mieszkańców (GUS, 31.12.2024) na jednym i siedmiu dziesiątych kilometra kwadratowego, czyli osiemset sześćdziesiąt pięć osób na kilometr, a cała gmina blisko cztery tysiące osób na stu osiemdziesięciu — dwadzieścia dwie osoby na kilometr — z czternastoma sołectwami. W 1299 roku pojawiła się pierwsza wzmianka mówiąca, że Cedynia posiada prawa miejskie; samo nadanie było więc wcześniejsze i nie jest znane. W mieście zachowały się grodzisko wczesnośredniowieczne, dawny klasztor, ratusz z 1840 roku i neogotycka wieża widokowa z drugiej połowy dziewiętnastego wieku. Lasy zajmują około czterdziestu procent powierzchni gminy, a najwyższy punkt, Zwierzyniec, ma sto sześćdziesiąt siedem metrów nad poziomem morza. Cedyński Park Krajobrazowy utworzono 1 kwietnia 1993 roku; liczy ponad trzydzieści tysięcy hektarów i chroni czterdzieści pięć gatunków roślin. W gminie są też cztery rezerwaty: Olszyna Źródliskowa, Dolina Świergotki, Wrzosowiska Cedyńskie i Bielinek.",
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

  districtsHeading: "Do których części Cedyni dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — a jest niewielkie, niecałe dwa kilometry kwadratowe — i do wszystkich czternastu sołectw w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Cedynię też przyjadę",
  nearbyParagraphs: [
    "Moryń jest około trzynastu kilometrów stąd, Chojna osiemnaście, Mieszkowice dwadzieścia dwa. Do Trzcińska-Zdroju i Boleszkowic też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Moryń", "Chojna", "Mieszkowice", "Trzcińsko-Zdrój", "Dębno"],

  about: blokOMnie("do Cedyni", "w Cedyni", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Cedyni bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czternastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Warto pamiętać, że Cedyński Park Krajobrazowy rozciąga się znacznie dalej niż sama gmina Cedynia — podobnie jak Cedyńskie Wzgórza Morenowe, które są osobną jednostką. Chodzi o miasto Cedynia w powiecie gryfińskim.",
    },
    ...faqWspolne("w Cedyni"),
    {
      question: "Na czym w kuchni najbardziej opłaca się skupić uwagę?",
      answer:
        "Zwykle nie na tym, co największe. Najczęściej używane przedmioty są małe — nóż, obieraczka, jedna łyżka, jedna deska — i od ich stanu zależy więcej niż od czegokolwiek dużego. Sprawdzian zajmuje pół minuty: policzcie, ile razy w tygodniu bierzecie do ręki największą rzecz w kuchni, a ile razy najmniejszą. Wynik prawie zawsze jest odwrotny do tego, ile uwagi każda z nich dostała.",
    },
    {
      question: "Czy Thermomix zastępuje noże i deski?",
      answer:
        "Nie i nikt nie kupuje urządzenia po to, żeby przestać kroić. Przejmuje sporą część tego, co dotąd wymagało kilku naczyń naraz — miksowanie, gotowanie z mieszaniem, gotowanie na parze w Varomie — i tylko w tym zakresie warto go liczyć. Reszta drobnego sprzętu zostaje i dalej trzeba o nią dbać.",
    },
  ],

  geo: { lat: 52.8793, lng: 14.2025 },
};
