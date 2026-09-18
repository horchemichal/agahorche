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
 * ZAWIDÓW — powiat zgorzelecki, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — MIASTO JEST CAŁĄ GMINĄ. Brak wsi.
 * MIASTO/GMINA: 3 738 mieszkańców (GUS 31.12.2024),
 *   6,1 km².
 *   ⚠⚠⚠ GĘSTOŚCI 615,8 NIE CYTUJĘ OBOK POWIERZCHNI
 *   6,1 km²: 3 738 / 6,1 = 612,8. Podana wartość wymaga
 *   6,07 km². PISZĘ „OKOŁO SZEŚCIUSET TRZYNASTU".
 *   ⚠ NAJMNIEJSZE POWIERZCHNIOWO I NAJGĘŚCIEJ ZALUDNIONE
 *   MIASTO TEJ FALI.
 *   ⚠⚠⚠ LICZBY „OKOŁO PIĘCIU TYSIĘCY" ANI DANYCH
 *   Z 2012 R. NIE PODAJĘ — wątek ubytku ludności jest
 *   wykluczony. WYŁĄCZNIE GUS 31.12.2024.
 * ⚠ GEO: 51,02545 / 15,06215.
 *
 * ⚠ ODMIANA — REGULARNA:
 *   D. do Zawidowa · Ms. w Zawidowie · B. Zawidów ·
 *   N. Zawidowem. Przymiotnik: ZAWIDOWSKI.
 *   ⚠⚠ NIE MYLĘ „zawidowskiego" z „zawidzkim" (od
 *   Zawidza) i „zawidowickim" (od Zawidowic).
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *
 * ⚠⚠ KOLIZJE NAZEWNICZE:
 *   — ⚠⚠⚠ ZAWIDOWICE — WIEŚ W GMINIE BIERUTÓW,
 *     woj. dolnośląskie. BIERUTÓW MA WŁASNĄ STRONĘ
 *     W TYM CYKLU. Druga wieś o tej nazwie leży
 *     w gminie Syców — TEŻ OPISANEJ.
 *   — ZAWIDZ i ZAWIDZ KOŚCIELNY (mazowieckie).
 *   — ZAWADA, ZAWADZKIE (opolskie).
 *   ⚠⚠ ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — PRAWA MIEJSKIE: 1369 r. [SP — dwa źródła zgodne
 *     co do roku, NADAWCA NIEUSTALONY].
 *   — ⚠⚠⚠ PIERWSZEJ WZMIANKI NIE PODAJĘ: źródła dają
 *     trzy nieuzgadnialne wersje (gród z X–XI w. /
 *     nazwa w dokumentach z XII w. / osada z XIII w.).
 *     PISZĘ WPROST, ŻE SIĘ RÓŻNIĄ, I NIE WYBIERAM.
 *   — ⚠⚠ ETYMOLOGII NAZWY NIE PODAJĘ — wersja
 *     o „budowniczym zwanym Zawidkiem" pochodzi z jednego
 *     źródła popularnego. NIE UŻYWAM.
 *   — ⚠⚠ NAZWY NIEMIECKIEJ NIE WYMIENIAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — HERB UŻYWANY OD XV W., ZAPISANY
 *   W 1912 R.:
 *   — herb pochodzi z DRUGIEJ POŁOWY XV WIEKU,
 *   — udokumentowany na dokumencie magistratu dopiero
 *     w 1912 r. — POŚREDNIO CZTERY I PÓŁ WIEKU PÓŹNIEJ,
 *   — skodyfikowany w wydawnictwie Ossolineum w 1960 r.
 *   ⚠⚠⚠ RZECZ UŻYWANA CODZIENNIE PRZEZ CZTERY STULECIA
 *   DOCZEKAŁA SIĘ ZAPISU NA KOŃCU — właśnie dlatego,
 *   że wszyscy ją znali. To jest cały kąt.
 *   ⚠⚠⚠ TREŚCI HERBU NIE OPISUJĘ: zawiera wizerunek
 *   świętego z przedmiotami kultu. WĄTEK WYZNANIOWY
 *   WYKLUCZONY. Podaję WYŁĄCZNIE DATY.
 *   ⚠⚠ NIE TWIERDZĘ, że herbu nie zapisywano wcześniej
 *   w ogóle — twierdzę, że NAJSTARSZE ZNANE
 *   UDOKUMENTOWANIE na dokumencie magistratu pochodzi
 *   z 1912 r. PISZĘ TO OSTROŻNIE.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — GRODZISKO NA GÓRZE ZAMKOWEJ: majdan 110 × 40 m;
 *   obok dwa nasypy o średnicach 15 i 20 m.
 *   ⚠ Obiekt jest niemal trzy razy dłuższy niż szerszy.
 *   ⚠⚠ PROPORCJI NIE ROBIĘ KĄTEM — podaję wymiary.
 * — BIBERSTEINOWIE byli właścicielami miasta w latach
 *   1278–1551, czyli 273 lata.
 *   ⚠⚠ „MOMENT PRZEKAZANIA" i „łańcuch właścicieli" —
 *   kąt ZAJĘTY (Żmigród). PODAJĘ JAKO FAKT, BEZ MORAŁU.
 * — 1848 — założenie tkalni; 1914 — elektryfikacja
 *   miasta.
 * — ⚠⚠⚠ KOŚCIOŁÓW I PARAFII NIE OPISUJĘ — wyznaniowe.
 *   Dotyczy to także faktu „parafia starsza od budynku"
 *   (1893 / 1894–96), który byłby dobrym kątem.
 *   ODRZUCAM GO W CAŁOŚCI.
 * — ⚠⚠ SZKOŁY Z KOŃCA XVII W. NIE OPISUJĘ — jedno
 *   źródło, a temat wymaga ostrożności, na którą nie mam
 *   materiału.
 * — ⚠ ODLEGŁOŚCI DROGOWYCH NIE USTALONO. ANI JEDNEJ
 *   LICZBY KILOMETRÓW.
 *
 * KĄT: UŻYWANE OD DAWNA, ZAPISANE PÓŹNO
 * — o tym, że rzecz używana najczęściej zapisuje się
 * ostatnia, bo wszyscy ją znają. Kąt od herbu Zawidowa:
 * pochodzi z drugiej połowy XV wieku, a udokumentowano
 * go na dokumencie magistratu dopiero w 1912 roku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że herb Zawidowa pochodzi z drugiej połowy XV w.,
 *   a najstarsze znane udokumentowanie na dokumencie
 *   magistratu jest z 1912 r.; skodyfikowano go
 *   w wydawnictwie dopiero w 1960,
 * — ŻE RZECZ UŻYWANA PRZEZ CZTERY STULECIA DOCZEKAŁA
 *   SIĘ ZAPISU NA KOŃCU — NIE MIMO TEGO, ŻE BYŁA
 *   OCZYWISTA, TYLKO DLATEGO. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TA SAMA REGUŁA I DZIAŁA
 *   BEZWZGLĘDNIE: zapisujemy przepisy trudne, świąteczne,
 *   wyczytane. Nigdy te, które robimy co tydzień,
 * — ⚠⚠ ŻE TO WŁAŚNIE TE CODZIENNE GINĄ — bo nikt ich nie
 *   pilnuje. Wszyscy zakładają, że są bezpieczne,
 *   skoro każdy je zna,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I ROBI SIĘ GO RAZ: zapisz tę
 *   jedną rzecz, której nigdy nie przyszłoby Ci
 *   do głowy zapisywać. Nie świąteczną — powszednią,
 * — ⚠⚠ ŻE ROZPOZNAJE SIĘ JĄ PO TYM, ŻE NIE UMIESZ
 *   POWIEDZIEĆ, SKĄD SIĘ WZIĘŁA. To znak, że zna ją
 *   tylko pamięć, i to jednej osoby,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: zapis i tak nie zachowa
 *   wszystkiego. Proporcje da się spisać, wyczucia nie.
 *   Ale niepełny zapis jest nieporównanie lepszy
 *   od żadnego,
 * — ⚠ UCZCIWIE O SPRZĘCIE: zbiór przepisów w urządzeniu
 *   składa się z rzeczy, które ktoś uznał za warte
 *   zapisania. MÓWIĘ WPROST, że danie robione u Was
 *   co tydzień prawie na pewno się tam nie znajduje
 *   i że tę lukę trzeba zamknąć samemu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LICZ TO, CO I TAK JEST POLICZONE — kąt
 *   zajęty (Bierutów). ⚠⚠⚠ TO NAJBLIŻSZY OBSZAR I POZORNA
 *   SPRZECZNOŚĆ: tamten tekst mówi, ŻEBY NIE ZAKŁADAĆ
 *   NOWEGO REJESTRU, tylko czytać istniejące; ten mówi
 *   o JEDNEJ RZECZY, KTÓRA NIE MA ŻADNEGO ZAPISU.
 *   ROZGRANICZAM JAWNIE, JEDNYM ZDANIEM — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ZAPISZ WARUNEK, NIE ZDARZENIE — kąt zajęty
 *   (Gryfów Śląski). ⚠⚠ ROZGRANICZAM DRUGIM ZDANIEM:
 *   tamto dotyczy NOTATKI O NIEUDANEJ PRÓBIE, to —
 *   ZAPISANIA DANIA, KTÓRE WYCHODZI ZAWSZE.
 * — ⚠⚠⚠ ZERO DOPISZ, CZYM MIERZYŁAŚ — kąt zajęty
 *   (Twardogóra).
 * — ⚠⚠ ZERO ZNALEZIONE TO NIE POTWIERDZONE — kąt zajęty
 *   (Piława Górna).
 * — ⚠⚠ ZERO MOMENTU PRZEKAZANIA I ŁAŃCUCHA WŁAŚCICIELI
 *   — kąt zajęty (Żmigród).
 * — ⚠⚠ ZERO OSIEMNASTU LAT MIESZKANIA, TRZECH LAT ROBOTY
 *   — kąt zajęty (Lądek-Zdrój).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW — mówię, ŻEBY zapisać,
 *   nigdy CO zapisać.
 * — ŻADNEGO GOTOWEGO FORMULARZA — podaję WYŁĄCZNIE
 *   zasadę: jedna rzecz, ta powszednia.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO OPISU TREŚCI HERBU — wyznaniowe.
 *   WYŁĄCZNIE DATY.
 * — ⚠⚠⚠ ZERO WĄTKU WYZNANIOWEGO W OGÓLE — także kosztem
 *   dobrego faktu o parafii starszej od budynku.
 * — ⚠⚠ ZERO WĄTKU GRANICZNEGO I NARODOWOŚCIOWEGO.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ, NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO UBYTKU LUDNOŚCI I DEMOGRAFII WSPÓŁCZESNEJ.
 * — ⚠⚠ ZERO POŻARÓW I POWODZI JAKO ŻYWIOŁU.
 * — ⚠ ZERO UPADKU PRZEMYSŁU I BEZROBOCIA.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE CYTUJĘ gęstości 615,8 obok powierzchni 6,1 km².
 * — NIE PODAJĘ daty pierwszej wzmianki — trzy sprzeczne
 *   wersje.
 * — NIE PODAJĘ nadawcy praw miejskich.
 * — NIE PODAJĘ etymologii nazwy.
 * — NIE OPISUJĘ treści herbu.
 * — NIE TWIERDZĘ, że herbu nie zapisywano wcześniej
 *   w ogóle — piszę o najstarszym znanym
 *   udokumentowaniu.
 * — NIE PODAJĘ żadnej liczby ludności sprzed 2024 r.
 * — NIE PODAJĘ żadnej odległości drogowej.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Zawidów jest gminą miejską w powiecie zgorzeleckim;
 *   liczy 3 738 mieszkańców (GUS, 31.12.2024) na 6,1 km²,
 *   czyli około 613 osób na kilometr kwadratowy,
 * — prawa miejskie miasto otrzymało w 1369 r.; źródła
 *   różnią się co do pierwszej wzmianki i podają trzy
 *   nieuzgadnialne wersje,
 * — herb pochodzi z drugiej połowy XV w., najstarsze
 *   znane udokumentowanie na dokumencie magistratu jest
 *   z 1912 r., a skodyfikowano go w wydawnictwie
 *   Ossolineum w 1960 r.,
 * — grodzisko na Górze Zamkowej ma majdan o wymiarach
 *   110 × 40 m, a obok leżą dwa nasypy o średnicach
 *   15 i 20 m,
 * — Bibersteinowie byli właścicielami miasta w latach
 *   1278–1551, czyli przez 273 lata,
 * — tkalnię założono w 1848 r., a miasto zelektryfikowano
 *   w 1914.
 */
export const ZAWIDOW: CityContent = {
  slug: "zawidow",
  h1: "Thermomix Zawidów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zawidów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Zawidowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zawidów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zawidowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zawidowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Zawidów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Używany od XV wieku. Zapisany w 1912.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zawidowie – jak wygląda prezentacja?",
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
      id: "uzywane-od-dawna-zapisane-pozno",
      heading: "Używane od dawna, zapisane późno",
      paragraphs: [
        "Herb Zawidowa pochodzi z drugiej połowy piętnastego wieku. Miasto używało go przez cztery stulecia.",
        "Najstarsze znane udokumentowanie tego herbu na dokumencie magistratu pochodzi z 1912 roku. Skodyfikowano go w wydawnictwie dopiero w 1960.",
        "Cztery i pół wieku używania, zanim ktoś uznał, że warto to zapisać.",
        "I nie stało się tak mimo tego, że herb był oczywisty. Stało się tak dlatego, że był oczywisty. Wszyscy go znali, więc nikomu nie przyszło do głowy, że mógłby zniknąć.",
        "W kuchni ta reguła działa bezwzględnie i każdy zna ją z własnego domu.",
        "Zapisujemy przepisy trudne. Świąteczne. Wyczytane gdzieś i wypróbowane raz. Zeszyty i teczki pełne są dań, które robimy raz na rok albo wcale.",
        "Nigdy nie zapisujemy tych, które robimy co tydzień. Zupy, którą wszyscy w domu poznają po zapachu. Sposobu na jajecznicę. Tego, co się dokłada do mielonego. Po co zapisywać coś, co się po prostu wie.",
        "I to właśnie te giną. Nie dlatego, że ktoś je zapomniał — dlatego, że nikt ich nie pilnował. Wszyscy zakładali, że są bezpieczne.",
        "Ruch jest jeden i robi się go raz. Zapisz tę jedną rzecz, której nigdy nie przyszłoby Ci do głowy zapisywać. Nie świąteczną. Powszednią.",
        "Rozpoznasz ją po tym, że nie umiesz powiedzieć, skąd się wzięła. Jeśli nie wiesz, czy to od mamy, z pracy, czy wymyśliło się samo — to znak, że zna ją tylko czyjaś pamięć.",
        "Dopowiem dwie rzeczy, bo obie leżą blisko. Po pierwsze: to nie jest namowa do zakładania rejestru. Przeciwnie — chodzi o jedną jedyną rzecz, która nie ma żadnego zapisu. Po drugie: to nie jest notatka o tym, co nie wyszło. To zapis czegoś, co wychodzi zawsze, i właśnie dlatego jest nieopisane.",
        "Uczciwie o drugiej stronie: zapis i tak nie zachowa wszystkiego. Proporcje da się spisać, wyczucia nie — tego, kiedy przestać mieszać i kiedy jest już dość. Ale niepełny zapis jest nieporównanie lepszy od żadnego, a wyczucie i tak wraca szybciej, gdy jest od czego zacząć.",
        "I uczciwie o sprzęcie. Zbiór przepisów w urządzeniu składa się z rzeczy, które ktoś uznał za warte zapisania — a więc z rzeczy raczej ciekawych niż powszednich. Danie robione u Was co tydzień prawie na pewno się tam nie znajduje. Tę lukę trzeba zamknąć samemu i nikt tego za Was nie zrobi.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zawidowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy jest u Was danie, którego nikt nigdy nie zapisał. Takie najchętniej ugotuję razem z Wami.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zawidowie"),
    sekcjaRaty("w Zawidowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Zawidowa",
      paragraphs: [
        "Zawidów jest gminą miejską w powiecie zgorzeleckim — miasto jest tu całą gminą, bez wsi. Liczy 3 738 mieszkańców (GUS, 31.12.2024) na sześciu kilometrach kwadratowych z okładem, czyli około sześciuset trzynastu osób na kilometr; podaję tę liczbę zaokrągloną, bo publikowana wartość z przecinkiem nie zgadza się z zaokrągloną powierzchnią. To najmniejsze powierzchniowo i zarazem najgęściej zaludnione miasto, o jakim pisałam w tej okolicy. Prawa miejskie Zawidów otrzymał w 1369 roku. Daty pierwszej wzmianki nie podaję — źródła dają trzy nieuzgadnialne wersje, sięgające od dziesiątego do trzynastego wieku, i żadna nie ma przewagi. Herb miasta pochodzi z drugiej połowy piętnastego wieku, ale najstarsze znane udokumentowanie go na dokumencie magistratu jest dopiero z 1912 roku, a skodyfikowano go w wydawnictwie Ossolineum w 1960. Grodzisko na Górze Zamkowej ma majdan o wymiarach stu dziesięciu na czterdzieści metrów — obiekt jest niemal trzy razy dłuższy niż szerszy — a obok leżą dwa nasypy o średnicach piętnastu i dwudziestu metrów. Bibersteinowie byli właścicielami miasta w latach 1278–1551, czyli przez dwieście siedemdziesiąt trzy lata. Tkalnię założono tu w 1848 roku, a miasto zelektryfikowano w 1914.",
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

  districtsHeading: "Do których części Zawidowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — Zawidów jest gminą miejską bez wsi, więc sprawa jest prosta: gdziekolwiek mieszkasz w granicach miasta, dojazd jest bezpłatny.",
    "Miasto ma nieco ponad sześć kilometrów kwadratowych, więc przy umawianiu wystarczy sam adres.",
  ],
  districts: [],

  nearbyHeading: "Poza Zawidów też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Zgorzelca, Bogatyni, Lubania, Pieńska i Leśnej — wszędzie bezpłatnie, tak samo jak w samym Zawidowie.",
  ],
  nearbyTowns: ["Zgorzelec", "Bogatynia", "Lubań", "Pieńsk", "Leśna"],

  about: blokOMnie("do Zawidowa", "w Zawidowie i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zawidowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga na podobne nazwy, bo mylą się często: Zawidowice to wieś w gminie Bierutów i druga w gminie Syców — obie na Dolnym Śląsku, ale po drugiej stronie województwa. Zawidz i Zawidz Kościelny leżą na Mazowszu. Przymiotnik od tego miasta brzmi „zawidowski”, a nie „zawidzki” ani „zawidowicki”.",
    },
    ...faqWspolne("w Zawidowie"),
    {
      question: "Który przepis w domu warto zapisać jako pierwszy?",
      answer:
        "Ten, którego nigdy nie przyszłoby Wam do głowy zapisywać. Herb Zawidowa pochodzi z drugiej połowy piętnastego wieku, a udokumentowano go na dokumencie magistratu dopiero w 1912 — cztery i pół wieku używania bez zapisu, właśnie dlatego, że wszyscy go znali. W kuchni giną tak samo dania powszednie: zupa, którą wszyscy poznają po zapachu, to, co się dokłada do mielonego. Poznacie je po tym, że nie umiecie powiedzieć, skąd się wzięły. Zastrzeżenie: zapis nie zachowa wyczucia, tylko proporcje — ale niepełny jest nieporównanie lepszy od żadnego.",
    },
    {
      question: "Czy w Thermomixie znajdę przepisy, które robimy u siebie od lat?",
      answer:
        "Raczej nie i mówię to wprost. Zbiory przepisów składają się z rzeczy, które ktoś uznał za warte zapisania — a więc z ciekawych, nie z powszednich. Danie robione u Was co tydzień prawie na pewno się tam nie znajdzie. Dlatego na prezentacji zawsze proponuję, żeby jedno z dań było Wasze własne: wtedy od razu widać, jak urządzenie radzi sobie z tym, co naprawdę jecie, a nie z tym, co ładnie wygląda w folderze.",
    },
  ],

  geo: { lat: 51.0255, lng: 15.0622 },
};
