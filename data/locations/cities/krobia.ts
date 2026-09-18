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
 * KROBIA — powiat gostyński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ KROBIA NIE MA
 *   (GUS Vademecum: „GMINA MIEJSKO-WIEJSKA").
 *   ⚠⚠⚠ ISTNIEJE NATOMIAST STATYSTYCZNE WYDZIELENIE
 *   „gmina Krobia (obszar wiejski)", kod 3004035 —
 *   TO NIE JEST ODRĘBNA GMINA. NIE MYLIĆ.
 * MIASTO: 4 529 mieszkańców (GUS 31.12.2024), 7,1 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   642,4 os./km², iloraz daje 637,9. ROZBIEŻNOŚĆ 4,5.
 *   Gęstość policzono od ok. 7,05 km². NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 12 554 osoby, 129,5 km².
 *   ⚠⚠⚠ GĘSTOŚCI GMINY NIE PODAJĘ — źródło podaje 98,
 *   iloraz daje 96,9. ROZBIEŻNOŚĆ 1,06. Wariant
 *   geoportalu (12 523 / 130 / 96,7) domyka się, ale
 *   to inna ludność. NIE PODAJĘ ŻADNEJ.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Gmina DRUGA W POWIECIE pod względem ludności.
 *   PODAJĘ.
 * SOŁECTWA: 22 SOŁECTWA i 27 MIEJSCOWOŚCI
 *   (GUS Vademecum). PODAJĘ TĘ PARĘ.
 *   ⚠⚠ Inne rejestry podają 21 obrębów, 28 pozycji
 *   i 25 pozycji — RÓŻNIC NIE ROBIĘ KĄTEM, figura
 *   „cztery rejestry, cztery liczby" należy do Kleczewa
 *   (ta sama fala).
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * ⚠⚠⚠ GEO — DWA RÓŻNE PUNKTY, NIE MYLIĆ:
 *   MIASTO: 51,7740 / 16,9840.
 *   centroid GMINY: 51,7466 / 16,9801 — ok. 3 km
 *   na południe. UŻYWAM WYŁĄCZNIE PUNKTU MIASTA.
 *
 * ⚠⚠⚠ ODMIANA — TEMAT MIĘKKI, DOPEŁNIACZ
 *   I MIEJSCOWNIK SĄ RÓWNE:
 *   M. KROBIA · D. KROBI · Ms. w KROBI ·
 *   C. Krobi · N. Krobią.
 *   ⚠⚠⚠ JEDNO „i", NIE DWA.
 *   ⚠ POTWIERDZENIA: „data lokacji miasta Krobi",
 *   „kościół parafialny w Krobi", „z Krobi",
 *   „informacje o Krobi".
 *   ⚠⚠⚠ BŁĄD 1 (najczęstszy): „do Krobii", „w Krobii"
 *   — kalka z typu „Kalifornia → Kalifornii", gdzie
 *   temat jest na -ni-. TU TEMAT JEST NA -bi-.
 *   ⚠⚠ BŁĄD 2: „w Krobiu", „do Krobia" (rodzaj męski).
 *   ⚠⚠⚠ PRZYMIOTNIKA NIE UŻYWAM — „krobski" bez
 *   cytatu [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ Rodzaj ŻEŃSKI. NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJE NAZW:
 *   — STARA KROBIA — odrębna wieś tej gminy, mylona
 *     z miastem w tekstach o początkach osadnictwa.
 *     WSPOMINAM.
 *   — Krobia jako wieś w pomorskim: NIE ZWERYFIKOWANO
 *     [NP]. NIE TWIERDZĘ.
 *   — „gmina Krobia (obszar wiejski)" to pozycja
 *     statystyczna, nie gmina.
 *   ⚠⚠⚠ PUDLISZEK NIE WYMIENIAM ANI RAZU — nazwa wsi
 *     jest w Polsce tożsama z nazwą handlową, a nazwy
 *     marek mam wykluczone. POMIJAM CAŁKOWICIE.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — DATA PRZYJĘTA, NIE ZNALEZIONA:
 *   Rok 1286, powtarzany jako data lokacji Krobi,
 *   NIE MA ŻADNEGO DOKUMENTU.
 *   CYTAT Z MONOGRAFII: „data lokacji miasta Krobi
 *   nie jest znana, ale w publikacjach okresu
 *   międzywojennego z braku dokumentów źródłowych,
 *   przyjęto jako najbardziej prawdopodobny rok 1286".
 *   A Słownik historyczno-geograficzny datuje pierwszy
 *   zapis, w którym Krobia występuje jako OPPIDUM,
 *   NA 1420 R.; forma „Crobia" jako pierwsze
 *   potwierdzenie statusu miejskiego — 1424 R.
 *   RÓŻNICA: 134 LATA.
 *   ⚠⚠ DODATKOWO: w 1445 r. Krobia jest wymieniona
 *   jako CASTRUM, nie jako miasto.
 *   ⚠⚠⚠ NIE TWIERDZĘ, ŻE KROBIA NIE BYŁA MIASTEM
 *   PRZED 1420 R. Twierdzę tylko, że data 1286 została
 *   PRZYJĘTA jako najprawdopodobniejsza, a nie
 *   ODNALEZIONA w dokumencie.
 *   ⚠⚠⚠ NIE OSKARŻAM AUTORÓW MIĘDZYWOJENNYCH
 *   O FAŁSZOWANIE — zrobili dokładnie to, co trzeba
 *   było zrobić: podali najlepsze dostępne
 *   przypuszczenie i napisali, że nim jest.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — ZAPISY NAZWY: 1232 „Crobya", 1258 „Croba"
 *   (kopia), 1284–1555 „Kroba", 1375 „Crobija",
 *   1400 „Krobi[a]" (oryginał).
 *   ⚠⚠ NAJSTARSZE PODAWANE DATY — 1086 i 1144 —
 *   POCHODZĄ Z RELACJI ZAPISANYCH DOPIERO W XV W.,
 *   czyli o 300–400 lat później od opisywanych
 *   zdarzeń. PODAJĘ Z TYM ZASTRZEŻENIEM.
 * — WŁASNOŚĆ: 1258–1284 książęca, od 1350/1375
 *   biskupstwa poznańskiego — stąd regionalna nazwa
 *   BISKUPIZNA.
 *   ⚠⚠ TO WĄTEK WŁASNOŚCIOWY I NAZEWNICZY, NIE
 *   KULTOWY. Podaję jednym zdaniem.
 *   ⚠ LICZBY WSI BISKUPIZNY NIE USTALONO [NP].
 * — HIPOTEZA Z MONOGRAFII: „Być może pierwsza była…
 *   Stara Krobia?" ⚠⚠ PODAJĘ JAKO HIPOTEZĘ
 *   ZE ZNAKIEM PYTANIA, NIGDY JAKO USTALENIE.
 * ⚠⚠⚠ ETYMOLOGII NAZWY NIE PODAJĘ — monografia
 *   wylicza tylko warianty zapisu i nie rozstrzyga.
 *   NIE TWIERDZĘ, że nazwa pochodzi od „kroby".
 * ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *
 * KĄT: DATA PRZYJĘTA, NIE ZNALEZIONA
 * — o tym, że liczby, które traktujemy jako fakty
 * o sobie, były kiedyś przypuszczeniami, do których
 * nikt nie wrócił. Kąt z Krobi: rok 1286 przyjęto
 * w publikacjach międzywojennych „z braku dokumentów
 * źródłowych", a pierwszy zapis o mieście jest
 * z 1420 r.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że rok 1286 przyjęto w publikacjach
 *   międzywojennych z braku dokumentów, jako
 *   najprawdopodobniejszy,
 * — że pierwszy zapis, w którym Krobia jest oppidum,
 *   pochodzi z 1420 r., a potwierdzenie statusu
 *   miejskiego z 1424 — 134 lata później.
 *   TO JEST RDZEŃ,
 * — ⚠⚠ że nie oskarżam nikogo o fałszowanie: podano
 *   najlepsze przypuszczenie i napisano, że nim jest,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: „to zajmuje
 *   czterdzieści minut", „robię to od pięciu lat",
 *   „dla nas trzeba podwójną porcję" — to liczby raz
 *   oszacowane i nigdy niesprawdzone,
 * — ⚠⚠ ŻE PRZESTAJEMY JE SPRAWDZAĆ, BO PRZESTAJĄ
 *   BRZMIEĆ JAK PRZYPUSZCZENIE,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: wybierz jedną taką liczbę
 *   i sprawdź ją raz, zegarkiem albo wagą,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: przypuszczenia są
 *   potrzebne i nie da się bez nich planować. Chodzi
 *   tylko o to, żeby wiedzieć, które liczby są
 *   sprawdzone, a które przyjęte,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie sprawdzi
 *   tego za Was. Ma wagę i minutnik, więc daje
 *   narzędzia do sprawdzenia — ale liczby w Waszej
 *   głowie zostaną nieruszone, dopóki ktoś ich nie
 *   zmierzy.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO ROCZNICY LICZONEJ OD PÓŹNIEJSZEJ DATY —
 *   kąt zajęty (Odolanów). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam z kilku
 *   ZNANYCH dat wybrano najpóźniejszą; TU nie było
 *   ŻADNEJ daty, więc jedną PRZYJĘTO. JEDNO ZDANIE
 *   ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO LEGENDY, KTÓRA LICZY WIĘCEJ NIŻ REJESTR
 *   — kąt zajęty (Śmigiel). Tu nie ma legendy, jest
 *   ostrożne przypuszczenie badaczy.
 * — ⚠⚠⚠ ZERO AKTU, KTÓRY DOTYCZY SĄSIADA — kąt zajęty
 *   (Czempiń).
 * — ⚠⚠⚠ ZERO CZTERECH REJESTRÓW, CZTERECH LICZB —
 *   kąt zajęty (Kleczew, TA SAMA FALA).
 * — ⚠⚠ ZERO NADANEGO DWA RAZY — kąt zajęty (Wyrzysk).
 * — ⚠⚠ ZERO SPORU O LICZBĘ, KTÓRY JEST SPOREM
 *   O DEFINICJĘ — kąt zajęty (Szamotuły).
 * — ⚠⚠ ZERO DOKUMENTU, KTÓRY ZOSTAŁ, A RZECZY NIE —
 *   kąt zajęty (Golina, ta sama fala). ⚠ UWAGA: tam
 *   dokument BYŁ, a rzeczy nie było. TU DOKUMENTU
 *   NIE MA WCALE. ROZGRANICZAM DRUGIM ZDANIEM.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 *   ⚠⚠⚠ UWAGA: to sekcja o sprawdzaniu liczb.
 *   WOLNO MI MÓWIĆ, ŻE WARTO ZMIERZYĆ CZAS I WAGĘ,
 *   ALE NIE WOLNO PODAĆ ŻADNEJ KONKRETNEJ WARTOŚCI
 *   DLA JAKIEGOKOLWIEK DANIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK. ⚠⚠⚠ DOTYCZY TO NAZWY
 *   JEDNEJ ZE WSI TEJ GMINY — POMIJAM JĄ.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO PODWAŻANIA RZETELNOŚCI HISTORYKÓW.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   ROZBIOROWEGO I POWSTAŃCZEGO · ZERO WĄTKU
 *   WYZNANIOWEGO I OBIEKTÓW SAKRALNYCH · ZERO WĄTKU
 *   MILITARNEGO (castrum podaję wyłącznie jako
 *   łaciński termin z zapisu, bez opisu funkcji) ·
 *   ZERO ALKOHOLU · ZERO POŻARÓW · ZERO BEZROBOCIA ·
 *   ZERO HERBU · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta ani gminy.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE TWIERDZĘ, że Krobia nie była miastem przed
 *   1420 r.
 * — NIE TWIERDZĘ, że data 1286 jest zmyślona.
 * — NIE PODAJĘ etymologii nazwy.
 * — NIE TWIERDZĘ, że pierwsza była Stara Krobia.
 * — NIE PODAJĘ liczby wsi Biskupizny.
 * — NIE PODAJĘ przymiotnika ani nazwy mieszkańca.
 * — NIE PODAJĘ wysokości n.p.m.
 * — NIE WYMIENIAM obiektów sakralnych ani wsi, której
 *   nazwa jest tożsama z nazwą handlową.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 * — NIE UŻYWAM centroidu gminy jako punktu miasta.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Krobia leży w powiecie gostyńskim i liczy 4 529
 *   mieszkańców (GUS, 31.12.2024) na 7,1 km²; cała
 *   gmina miejsko-wiejska to 12 554 osoby na 129,5 km²
 *   i obejmuje 22 sołectwa oraz 27 miejscowości; jest
 *   drugą gminą powiatu pod względem ludności,
 * — rok 1286, podawany jako data lokacji, przyjęto
 *   w publikacjach okresu międzywojennego „z braku
 *   dokumentów źródłowych" jako najbardziej
 *   prawdopodobny,
 * — pierwszy zapis, w którym Krobia występuje jako
 *   oppidum, pochodzi z 1420 r., a forma „Crobia" jako
 *   pierwsze potwierdzenie statusu miejskiego
 *   z 1424 r.; w 1445 r. Krobia jest wymieniona jako
 *   castrum,
 * — zapisy nazwy: 1232 „Crobya", 1258 „Croba",
 *   1284–1555 „Kroba", 1375 „Crobija", 1400
 *   „Krobi[a]"; najstarsze podawane daty, 1086 i 1144,
 *   pochodzą z relacji zapisanych dopiero w XV w.,
 * — w latach 1258–1284 Krobia była własnością
 *   książęcą, a od drugiej połowy XIV w. biskupstwa
 *   poznańskiego — stąd regionalna nazwa Biskupizna,
 * — Stara Krobia jest odrębną wsią tej gminy,
 *   a monografia stawia hipotezę, że mogła być
 *   pierwsza.
 */
export const KROBIA: CityContent = {
  slug: "krobia",
  h1: "Thermomix Krobia – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krobia — cena i prezentacja",
  seoDescription:
    "Thermomix w Krobi w powiecie gostyńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krobia — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krobi. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krobi z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu dwóch sołectw w gminie.",

  highlights: highlightyStandardowe("Krobia"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Rok 1286 nie został znaleziony. Został przyjęty.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krobi – jak wygląda prezentacja?",
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
      id: "data-przyjeta",
      heading: "Data przyjęta, nie znaleziona",
      paragraphs: [
        "Przy Krobi podaje się zwykle rok 1286. I jest z tym rokiem jedna rzecz, o której warto wiedzieć: nie ma pod nim żadnego dokumentu.",
        "Monografia miasta pisze o tym otwarcie — data lokacji nie jest znana, a w publikacjach okresu międzywojennego „z braku dokumentów źródłowych” przyjęto rok 1286 jako najbardziej prawdopodobny. Tymczasem Słownik historyczno-geograficzny datuje pierwszy zapis, w którym Krobia występuje jako oppidum, na 1420 rok, a pierwsze potwierdzenie statusu miejskiego pod formą „Crobia” — na 1424. Sto trzydzieści cztery lata różnicy. W 1445 roku Krobia jest z kolei wymieniona jako castrum.",
        "I od razu powiem, czego tu nie twierdzę. Nie twierdzę, że Krobia nie była miastem przed 1420 rokiem — prawdopodobnie była. Nie twierdzę też, że ktoś tę datę zmyślił. Autorzy międzywojenni zrobili dokładnie to, co należało: podali najlepsze dostępne przypuszczenie i napisali wprost, że jest przypuszczeniem. Dopisek zniknął po drodze, nie oni.",
        "Piszę o tym, bo w kuchni mamy dokładnie takie liczby i prawie każda z nich pochodzi z tego samego mechanizmu.",
        "„To zajmuje czterdzieści minut.” „Robię to od pięciu lat.” „Dla nas trzeba podwójną porcję, inaczej nie wystarczy.” „Na dwie osoby to za dużo.” Każda z tych liczb została kiedyś raz oszacowana — przy innym składzie domu, innym sprzęcie, innym apetycie — i od tamtej pory nikt jej nie sprawdził. Nie dlatego, że ktoś jest niedokładny. Dlatego, że po pewnym czasie przestaje brzmieć jak przypuszczenie i zaczyna brzmieć jak fakt.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, które z kilku znanych dat wybrało do obchodów najpóźniejszą. Tu jest inaczej i to jest sedno — tam daty były i trzeba było wybrać, a tu nie było żadnej, więc jedną przyjęto.",
        "Ruch jest jeden i można go zrobić przy najbliższym obiedzie. Wybierz jedną taką liczbę i sprawdź ją raz. Zegarkiem — ile to naprawdę zajmuje od wyjęcia składników do postawienia na stole. Albo wagą — ile naprawdę zostaje. Jedna liczba, jeden raz. Zwykle okazuje się, że rzeczywistość rozjechała się z szacunkiem w tę wygodniejszą stronę.",
        "Uczciwie o drugiej stronie, bo nie chcę wyjść na osobę, która każe wszystko mierzyć. Przypuszczenia są konieczne — bez nich nie da się zaplanować zakupów ani powiedzieć, o której będzie obiad, a mierzenie każdej rzeczy jest męczące i bezsensowne. Chodzi o coś mniejszego: o wiedzę, które liczby macie sprawdzone, a które przyjęte. Te przyjęte wolno trzymać — tylko nie wolno się nimi rozliczać.",
        "I uczciwie o sprzęcie. Thermomix nie sprawdzi żadnej z tych liczb za Was. Ma wbudowaną wagę i minutnik, więc daje narzędzia — składniki dodaje się jeden po drugim wprost do naczynia i widać, ile czego weszło. Ale liczba w Waszej głowie zostanie nieruszona, dopóki ktoś jej świadomie nie zmierzy, a tego urządzenie nie zrobi z własnej inicjatywy.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krobi?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile czasu według Was zajmuje zrobienie obiadu. Po prezentacji można to porównać z zegarkiem — bywa ciekawie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krobi"),
    sekcjaRaty("w Krobi"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Krobi",
      paragraphs: [
        "Krobia leży w powiecie gostyńskim i liczy 4 529 mieszkańców (GUS, 31.12.2024) na 7,1 kilometra kwadratowego; gęstości nie podaję ani dla miasta, ani dla gminy, bo liczby ze źródeł policzone są od powierzchni niezaokrąglonych i nie zgadzają się z ilorazami. Cała gmina miejsko-wiejska to 12 554 osoby na 129,5 kilometra kwadratowego, obejmuje dwadzieścia dwa sołectwa i dwadzieścia siedem miejscowości, i jest drugą gminą powiatu pod względem ludności. Zapisy nazwy prowadzą przez formy „Crobya” w 1232 roku, „Croba” w 1258, „Kroba” w latach 1284–1555, „Crobija” w 1375 i „Krobi[a]” w 1400 — przy czym najstarsze podawane daty, 1086 i 1144, pochodzą z relacji zapisanych dopiero w piętnastym wieku, czyli o trzy do czterech stuleci później od opisywanych zdarzeń. W latach 1258–1284 Krobia była własnością książęcą, a od drugiej połowy czternastego wieku biskupstwa poznańskiego — stąd wzięła się regionalna nazwa Biskupizna. W gminie leży też odrębna wieś Stara Krobia, o której monografia stawia hipotezę, że mogła być pierwsza.",
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

  districtsHeading: "Do których części Krobi dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dwóch sołectw w gminie, w tym do Starej Krobi. Wszędzie bez dopłaty.",
    "Jedna uwaga językowa, bo to jedna z najczęściej źle odmienianych nazw w Wielkopolsce: dopełniacz i miejscownik mają jedno „i” — „do Krobi” i „w Krobi”, nie „do Krobii” ani „w Krobii”. Ten błąd bierze się z analogii do „Kalifornia — Kalifornii”, gdzie temat kończy się inaczej. Przymiotnika od nazwy miasta nie używam, bo nie udało mi się go potwierdzić w żadnym źródle.",
  ],
  districts: [],

  nearbyHeading: "Poza Krobię też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Gostynia, Ponieca, Kobylina, Miejskiej Górki, Rawicza i Bojanowa — wszędzie bezpłatnie, tak samo jak w samej Krobi.",
  ],
  nearbyTowns: ["Gostyń", "Poniec", "Kobylin", "Miejska Górka", "Rawicz", "Bojanowo"],

  about: blokOMnie("do Krobi", "w Krobi i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krobi bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dwóch sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Uwaga językowa, bo nazwa jest podstępna: dopełniacz i miejscownik brzmią tak samo i mają jedno „i” — „do Krobi” i „w Krobi”, nie „do Krobii” ani „w Krobii”. Błąd bierze się z analogii do „Kalifornia — Kalifornii”, gdzie temat kończy się inaczej niż tutaj. Przymiotnika od nazwy miasta nie używam, bo nie mam dla niego potwierdzenia.",
    },
    ...faqWspolne("w Krobi"),
    {
      question: "Skąd się biorą kuchenne liczby, które wszyscy w domu powtarzają, a nikt nie sprawdził?",
      answer:
        "Z jednego oszacowania, do którego nikt nie wrócił — i Krobia jest tu świetnym przykładem. Rok 1286, podawany jako data lokacji miasta, nie ma żadnego dokumentu: przyjęto go w publikacjach międzywojennych „z braku dokumentów źródłowych” jako najbardziej prawdopodobny, a pierwszy zapis, w którym Krobia występuje jako oppidum, jest z 1420 roku. Autorzy zrobili to porządnie i napisali, że to przypuszczenie; po drodze zniknął dopisek, nie data. W kuchni tak samo działa „to zajmuje czterdzieści minut” albo „dla nas trzeba podwójną porcję” — raz oszacowane przy innym składzie domu i innym sprzęcie. Warto wybrać jedną taką liczbę i sprawdzić ją raz, zegarkiem albo wagą. Przypuszczenia wolno trzymać; nie wolno się nimi rozliczać.",
    },
    {
      question: "Czy Thermomix pomaga panować nad czasem i ilościami?",
      answer:
        "Daje narzędzia, ale nie robi tego za Was. Ma wbudowaną wagę, więc składniki dodaje się jeden po drugim wprost do naczynia i widać, ile czego weszło — bez przesypywania i bez osobnych miarek. Ma też minutnik, więc czas gotowania jest mierzony, a nie zgadywany. Ale to, ile realnie zajmuje Wam cały obiad od wyjęcia składników do postawienia na stole, i ile naprawdę potrzebujecie na osobę, sprawdzicie tylko wtedy, gdy raz świadomie to zmierzycie.",
    },
  ],

  geo: { lat: 51.774, lng: 16.984 },
};
