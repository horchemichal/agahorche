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
 * WOLSZTYN — powiat wolsztyński (siedziba),
 * woj. wielkopolskie. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 11 854 mieszkańców (GUS 31.12.2024), 4,8 km²,
 *   gęstość 2 479,9 os./km² [ZW — domyka się po
 *   cofnięciu zaokrąglenia powierzchni do 4,78 km²].
 *   PODAJĘ.
 * CAŁA GMINA: 30 172 osoby, 249,9 km², gęstość
 *   121 os./km² [ZW — DOMYKA SIĘ: 120,74 → 121].
 *   PODAJĘ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * MIEJSCOWOŚCI: źródła podają 34 odczytane, 41 i 43.
 *   ⚠⚠⚠ LICZBY NIE PODAJĘ — PISZĘ „ponad trzydzieści
 *   miejscowości".
 * ⚠ WYSOKOŚCI N.P.M. NIE USTALONO — NIE PODAJĘ.
 * ⚠ GEO: 52,1150 / 16,1170.
 * MIASTO LEŻY MIĘDZY DWOMA JEZIORAMI: WOLSZTYŃSKIM
 *   I BERZYŃSKIM.
 *   ⚠⚠⚠ POWIERZCHNI JEZIORA WOLSZTYŃSKIEGO NIE PODAJĘ
 *   — jedno źródło podaje „ponad 1254 ha", co jest
 *   niemal pewnie błędem (zapewne 125,4 ha).
 *   Wyspa Tumidaj: 1,3 ha — TO PODAJĘ.
 *
 * ⚠⚠ ODMIANA:
 *   D. do WOLSZTYNA · Ms. w WOLSZTYNIE · N. Wolsztynem.
 *   ⚠⚠⚠ BŁĘDY: „wolsztyniecki", „wolsztynowski".
 *   Przymiotnik: WOLSZTYŃSKI.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 * ⚠ Wolsztyn w Polsce jeden. Kolizja wewnętrzna:
 *   wsie WRONIAWY (gmina Wolsztyn) i WRONKI (miasto
 *   opisane w TEJ SAMEJ FALI) — NIE MYLIĆ.
 *
 * ⚠⚠ DATY USTROJOWE:
 *   — OSADA: koniec XIII w. ⚠ ROKU NIE USTALONO —
 *     NIE PODAJĘ.
 *   — PRAWA MIEJSKIE: „przed 1424 r." — zgodnie
 *     w źródłach, bez daty punktowej. PISZĘ TAK, JAK
 *     JEST: „przed 1424 rokiem".
 *   — Utraty praw nie potwierdzono.
 *   — PAŁAC: 1845 r., przebudowa 1911 r., odbudowa
 *     1960–1962 r. MUZEUM REGIONALNE: 1968 r.
 *     SKANSEN: 3,5 ha.
 *   — Ludność: ponad 1,5 tys. pod koniec XVIII w.,
 *     blisko 2 600 w 1837 r.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ZBUDOWANE NA CZTERY, ROZBUDOWANE
 *   DO OŚMIU W DWA LATA:
 *   — 1907 r. — hala parowozowni powstaje jako
 *     CZTEROSTANOWISKOWA,
 *   — 1909 r. — ROZBUDOWA DO OŚMIU STANOWISK.
 *   ⚠⚠⚠ ARYTMETYKA: 1909 − 1907 = 2 LATA; 4 → 8 = ×2.
 *   ⚠⚠⚠ DWA LATA TO ZA KRÓTKO, BY BYŁ TO ROZWÓJ —
 *   TO ZNACZY, ŻE PIERWOTNY WYMIAR BYŁ ŹLE OSZACOWANY.
 *   To jest cały kąt.
 *   ⚠⚠ NIE ZNAM PRZYCZYN TEJ DECYZJI I ICH NIE ZGADUJĘ
 *   — PISZĘ TO WPROST.
 *   ⚠⚠⚠ SEKCJA JEST O SZACOWANIU ROZMIARU, NIE
 *   O KOLEJNICTWIE. ANI SŁOWA O TABORZE, WĘŹLE,
 *   TRANSPORCIE CZY TECHNICE — kąty kolejowe zajęte
 *   (Pieńsk, Węgliniec, Pleszew).
 *   ⚠⚠⚠ OBROTNICY (16 m → 20 m → 20,5 m) NIE UŻYWAM —
 *   malejące przyrosty kolidują z Węglińcem
 *   (PRZERWY ROSNĄ). ANI TYCH LICZB, ANI TEJ FIGURY.
 *   ⚠⚠ LICZBY PAROWOZÓW (ok. 30 w 14 seriach)
 *   NIE UŻYWAM — koliduje z Lubawką i Polanicą.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — pierwsza Parada Parowozów: 1991 r.; wznowienie
 *   regularnych przewozów parowych: 15 maja 2017 r.
 * — linia do Zbąszynia: 1 czerwca 1886 r., ok. 23 km.
 *   ⚠⚠ POZOSTAŁYCH LINII NIE WYMIENIAM — to byłby ciąg
 *   dat z odstępami, czyli kąt zajęty.
 * — ⚠⚠ KOŚCIOŁÓW I KRUCYFIKSU NIE OPISUJĘ.
 * — ⚠ ODLEGŁOŚCI [SP] — NIE PODAJĘ.
 *
 * KĄT: KUPIONE ZA MAŁE
 * — o oszczędzaniu na rozmiarze, które kosztuje dwa
 * razy. Kąt z Wolsztyna: halę zbudowano na cztery
 * stanowiska i po dwóch latach rozbudowano do ośmiu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że hala parowozowni powstała w 1907 r. jako
 *   czterostanowiskowa, a już w 1909 r. rozbudowano ją
 *   do ośmiu stanowisk,
 * — ŻE DWA LATA TO ZA KRÓTKO, BY NAZWAĆ TO ROZWOJEM —
 *   PIERWOTNY WYMIAR BYŁ PO PROSTU ŹLE OSZACOWANY.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ ŻE PRZYCZYN NIE ZNAM I ICH NIE ZGADUJĘ,
 * — ⚠⚠ ŻE W KUCHNI TO NAJDROŻSZY BŁĄD, JAKI ZNAM:
 *   garnek za mały, czajnik za mały, lodówka „bo nas
 *   tylko dwoje", i wymiana po roku — czyli zapłacone
 *   dwa razy,
 * — ⚠⚠ ŻE ZA MAŁE ROZPOZNAJE SIĘ PO OBJAWIE: gotujesz
 *   w dwóch turach albo przekładasz do drugiego
 *   naczynia,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: dobieraj rozmiar pod
 *   NAJWIĘKSZE POWTARZALNE obciążenie, a nie pod
 *   typowy dzień,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA — I W KUCHNIACH
 *   CZĘSTSZA: kupowanie za dużego to też błąd, i to
 *   pospolitszy. Wielki garnek „na gości", którzy
 *   przyjeżdżają dwa razy w roku, zajmuje szafkę cały
 *   rok. ROZRÓŻNIK: czy duże obciążenie powtarza się
 *   co miesiąc, czy co rok,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie ma JEDEN rozmiar
 *   naczynia i nie da się go dobrać. MÓWIĘ WPROST,
 *   że przy dużej rodzinie część dań robi się w dwóch
 *   turach — i że to trzeba wiedzieć przed zakupem,
 *   a nie po.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO STAŻ NIE PRZEKŁADA SIĘ NA ROZMIAR — kąt
 *   zajęty (Nowogrodziec). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam rozmiar i wiek
 *   okazały się niepowiązane; tu rozmiar był po prostu
 *   źle dobrany do zadania.
 *   JEDNO ZDANIE ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO PRZERWY ROSNĄ — kąt zajęty (Węgliniec).
 *   DLATEGO ANI SŁOWA O OBROTNICY.
 * — ⚠⚠⚠ ZERO ŚREDNIA OPISUJE CIĄG, KTÓREGO NIE BYŁO —
 *   kąt zajęty (Oborniki). ⚠⚠ TU MOWA O NAJWIĘKSZYM
 *   POWTARZALNYM OBCIĄŻENIU, NIE O ŚREDNIEJ. NIE UŻYWAM
 *   SŁOWA „ŚREDNIA" W TEJ SEKCJI.
 * — ⚠⚠ ZERO WIĘCEJ NARZĘDZI NIŻ RĄK — kąt zajęty
 *   (Lubawka).
 * — ⚠⚠ ZERO ILE UTRZYMANIA NA OSOBĘ — kąt zajęty
 *   (Słupca, ta sama fala).
 * — ⚠⚠ ZERO NOWSZE I WIĘKSZE, A NIŻSZE — kąt zajęty
 *   (Międzylesie).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH POJEMNOŚCI W LITRACH ANI INNYCH DANYCH
 *   TECHNICZNYCH URZĄDZENIA. ⚠⚠⚠ PISZĘ „jeden rozmiar
 *   naczynia" BEZ LICZB.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKICH
 *   NAZW · ZERO WĄTKU WYZNANIOWEGO · ZERO WĄTKU
 *   MILITARNEGO · ZERO POŻARÓW JAKO ŻYWIOŁU · ZERO
 *   HERBU.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ dokładnej liczby miejscowości.
 * — NIE PODAJĘ roku powstania osady.
 * — NIE PODAJĘ powierzchni Jeziora Wolsztyńskiego.
 * — NIE PODAJĘ wymiarów obrotnicy ani liczby parowozów.
 * — NIE ZGADUJĘ, dlaczego halę rozbudowano.
 * — NIE PODAJĘ wysokości n.p.m. ani odległości.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Wolsztyn jest siedzibą powiatu wolsztyńskiego
 *   i leży między Jeziorem Wolsztyńskim a Berzyńskim;
 *   miasto liczy 11 854 mieszkańców (GUS, 31.12.2024)
 *   na 4,8 km², czyli 2 479,9 osoby na kilometr
 *   kwadratowy, a cała gmina miejsko-wiejska 30 172
 *   osoby na 249,9 km², czyli 121 osób na kilometr,
 *   i obejmuje ponad trzydzieści miejscowości,
 * — osada powstała pod koniec XIII w., a prawa miejskie
 *   miasto miało już przed 1424 r.,
 * — halę parowozowni zbudowano w 1907 r. jako
 *   czterostanowiskową i rozbudowano do ośmiu stanowisk
 *   w 1909 r.,
 * — linię do Zbąszynia, długości około 23 km, otwarto
 *   1 czerwca 1886 r.,
 * — pierwsza Parada Parowozów odbyła się w 1991 r.,
 *   a regularne przewozy parowe wznowiono 15 maja
 *   2017 r.,
 * — pałac wzniesiono w 1845 r., przebudowano w 1911 r.
 *   i odbudowano w latach 1960–1962; Muzeum Regionalne
 *   działa od 1968 r., a skansen ma 3,5 ha,
 * — wyspa Tumidaj ma 1,3 ha,
 * — pod koniec XVIII w. mieszkało tu ponad 1,5 tys.
 *   osób, a w 1837 r. blisko 2 600.
 */
export const WOLSZTYN: CityContent = {
  slug: "wolsztyn",
  h1: "Thermomix Wolsztyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wolsztyn — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Wolsztynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wolsztyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Wolsztynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wolsztyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich miejscowości w gminie.",

  highlights: highlightyStandardowe("Wolsztyn"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zbudowana na cztery. Po dwóch latach na osiem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Wolsztynie – jak wygląda prezentacja?",
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
      id: "kupione-za-male",
      heading: "Kupione za małe",
      paragraphs: [
        "Halę wolsztyńskiej parowozowni zbudowano w 1907 roku jako czterostanowiskową.",
        "W 1909 rozbudowano ją do ośmiu stanowisk.",
        "Dwa lata. Przyczyn nie znam i nie będę ich zgadywać, ale jedno wiem: dwa lata to za krótko, żeby nazwać to rozwojem. W dwa lata nie zmienia się skala przedsięwzięcia dwukrotnie — w dwa lata wychodzi, że pierwotny wymiar był po prostu źle oszacowany.",
        "W kuchni to najdroższy błąd, jaki znam, i najczęściej popełniany z rozsądku.",
        "Garnek o jeden rozmiar mniejszy, bo tańszy. Czajnik na półtora litra przy rodzinie pięcioosobowej. Lodówka „bo nas na razie tylko dwoje”. Zmywarka wąska, żeby zmieściła się w tę lukę. A potem, po roku albo po dwóch, wymiana — czyli zapłacone dwa razy za tę samą rzecz.",
        "„Za małe” rozpoznaje się po jednym objawie i jest on niezawodny: gotujesz w dwóch turach albo przekładasz do drugiego naczynia. Jeśli robisz to regularnie, rozmiar jest zły i żadna oszczędność tego nie nadrobi.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o tym, że długi staż nie przekłada się na rozmiar. Tam dwie miary okazały się po prostu niepowiązane. Tu chodzi o coś innego — o rozmiar źle dobrany do zadania, które było znane od początku.",
        "Ruch jest jeden. Dobieraj rozmiar pod największe obciążenie, które się powtarza — nie pod typowy dzień.",
        "Uczciwie o drugiej stronie, i w kuchniach ta strona jest częstsza: kupowanie za dużego to też błąd, tylko mniej widoczny. Wielki garnek na gości, którzy przyjeżdżają dwa razy w roku, zajmuje szafkę przez dwanaście miesięcy. Rozróżnik jest prosty: czy to duże obciążenie powtarza się co miesiąc, czy co rok. Co miesiąc — kupuj pod nie. Co rok — pożycz albo zrób w dwóch turach.",
        "I uczciwie o sprzęcie. Thermomix ma jeden rozmiar naczynia i nie da się go dobrać do rodziny. Przy dużym domu część dań robi się w dwóch turach, i to nie jest usterka, tylko właściwość. Mówię o tym na każdym spotkaniu, bo to jedna z niewielu rzeczy, których po zakupie nie da się już zmienić.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/tm7", label: "Thermomix TM7 — co się zmieniło" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Wolsztynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, dla ilu osób gotujecie w najbardziej obłożony dzień tygodnia. Nie w przeciętny — w ten najbardziej obłożony.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Wolsztynie"),
    sekcjaRaty("w Wolsztynie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Wolsztyna",
      paragraphs: [
        "Wolsztyn jest siedzibą powiatu wolsztyńskiego i leży między dwoma jeziorami — Wolsztyńskim i Berzyńskim, z wysepką Tumidaj o powierzchni jednego i trzech dziesiątych hektara. Samo miasto liczy 11 854 mieszkańców (GUS, 31.12.2024) na 4,8 kilometra kwadratowego, czyli dwa tysiące czterysta osiemdziesiąt osób na kilometr, a cała gmina miejsko-wiejska 30 172 osoby na 249,9 kilometra, czyli sto dwadzieścia jeden osób na kilometr, i obejmuje ponad trzydzieści miejscowości. Osada powstała pod koniec trzynastego wieku, a prawa miejskie miasto miało już przed 1424 rokiem — dokładnej daty źródła nie podają. Linię do Zbąszynia, długości około dwudziestu trzech kilometrów, otwarto 1 czerwca 1886 roku. Pierwsza Parada Parowozów odbyła się w 1991, a regularne przewozy parowe wznowiono 15 maja 2017. Pałac wzniesiono w 1845 roku, przebudowano w 1911 i odbudowano w latach 1960–1962; Muzeum Regionalne działa od 1968, skansen ma trzy i pół hektara. Pod koniec osiemnastego wieku mieszkało tu ponad tysiąc pięćset osób, a w 1837 blisko dwa tysiące sześćset.",
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

  districtsHeading: "Do których części Wolsztyna dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — nad oba jeziora, do centrum i na osiedla — bez dopłaty.",
    "Dojeżdżam też do wszystkich miejscowości w gminie: Kębłowa, Obry, Karpicka, Chorzemina, Gościeszyna, Świętna, Powodowa, Berzyny, Adamowa, Wroniaw, Starego i Nowego Widzimia, Starej i Nowej Dąbrowy i pozostałych. Przy umawianiu warto podać pełną nazwę — kilka wsi występuje w parach Stary i Nowy.",
  ],
  districts: [],

  nearbyHeading: "Poza Wolsztyn też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Rakoniewic, Zbąszynia, Grodziska Wielkopolskiego, Nowego Tomyśla i Wielichowa — wszędzie bezpłatnie, tak samo jak w samym Wolsztynie.",
  ],
  nearbyTowns: ["Rakoniewice", "Zbąszyń", "Grodzisk Wielkopolski", "Nowy Tomyśl", "Wielichowo"],

  about: blokOMnie("do Wolsztyna", "w Wolsztynie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wolsztyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Jedna uwaga językowa: mówi się „do Wolsztyna” i „w Wolsztynie”, a przymiotnik brzmi „wolsztyński” — nie „wolsztyniecki”. I warto podać pełną nazwę wsi, bo kilka z nich występuje w parach Stary i Nowy.",
    },
    ...faqWspolne("w Wolsztynie"),
    {
      question: "Kupować sprzęt mniejszy i tańszy, czy od razu większy?",
      answer:
        "Halę wolsztyńskiej parowozowni zbudowano w 1907 roku na cztery stanowiska i już w 1909 rozbudowano do ośmiu — dwa lata to za krótko, żeby nazwać to rozwojem; to znaczy, że rozmiar był źle oszacowany. W kuchni działa to tak samo i „za małe” rozpoznaje się po jednym objawie: gotowaniu w dwóch turach albo przekładaniu do drugiego naczynia. Ale uwaga, drugi błąd jest częstszy — wielki garnek na gości dwa razy w roku zajmuje szafkę przez dwanaście miesięcy. Sprawdzian: czy duże obciążenie powtarza się co miesiąc, czy co rok.",
    },
    {
      question: "Czy Thermomix wystarczy dla dużej rodziny?",
      answer:
        "Odpowiem wprost: urządzenie ma jeden rozmiar naczynia i nie da się go dobrać do liczby osób. W dużym domu część dań powstaje w dwóch turach — zwłaszcza te objętościowe, jak zupa na cały tydzień. Nie jest to usterka, tylko właściwość, której po zakupie nie da się już zmienić, więc zawsze o niej mówię. Na prezentacji łatwo to sprawdzić na Waszej normalnej porcji, bo gotujemy u Was i nic za to nie płacicie.",
    },
  ],

  geo: { lat: 52.115, lng: 16.117 },
};
