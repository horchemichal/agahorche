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
 * KUDOWA-ZDRÓJ — powiat kłodzki, woj. dolnośląskie.
 * ⚠⚠⚠ GMINA MIEJSKA — GRANICE GMINY POKRYWAJĄ SIĘ
 *   Z GRANICAMI MIASTA. 9 198 mieszkańców
 *   (GUS 31.12.2024), 33,9 km², gęstość 271,3 os./km².
 *   ⚠ KONTROLA: 9 198 / 33,9 = 271,3 — DOMYKA SIĘ.
 *   ⚠⚠⚠ „LUDNOŚĆ MIASTA" I „LUDNOŚĆ GMINY" TO TA SAMA
 *   LICZBA. ZERO WSI. NIE PISZĘ „MIASTO I GMINA".
 *   ⚠ ODRĘBNA GMINA WIEJSKA NIE ISTNIEJE — sprawdzono
 *   listę 20 gmin powiatu kłodzkiego.
 * ⚠ MIASTO ZSZYTE Z OŚMIU DAWNYCH WSI (m.in. Czermna,
 *   Zakrze, Słone, Pstrążna, Brzozowie, Jakubowice,
 *   Bukowina, Nowy Zdrój) — stąd rozproszona zabudowa
 *   i najniższa gęstość z całej fali.
 *   ⚠⚠ DAT PRZYŁĄCZENIA POSZCZEGÓLNYCH CZĘŚCI
 *   NIE USTALONO — nie podaję.
 * ⚠ WYSOKOŚĆ: 370–420 m n.p.m. ⚠ GEO: 50,4436 / 16,2447.
 *
 * ⚠⚠⚠ NOTA ETYCZNA NAJWYŻSZEJ WAGI:
 *   GŁÓWNYM WĄTKIEM MIASTA JEST UZDROWISKO — wody
 *   lecznicze, sanatoria, kuracje, pijalnia jako obiekt
 *   leczniczy. ⚠⚠⚠ CAŁY TEN WĄTEK POMIJAM W CAŁOŚCI.
 *   Temat zdrowotny. TWARDA GRANICA BEZWZGLĘDNA.
 *   ⚠⚠⚠ KAPLICY CZASZEK W CZERMNEJ — najbardziej znanego
 *   obiektu miasta — NIE WYMIENIAM ANI RAZU: kult,
 *   śmierć, wojny i epidemie naraz.
 *   ⚠⚠ Gmach z 1905 r. w parku pełni dziś funkcję
 *   sanatoryjną — OPISUJĘ GO WYŁĄCZNIE JAKO BUDYNEK
 *   Z DATĄ, BEZ NAZWY I BEZ FUNKCJI.
 *   ⚠⚠ PRAW MIEJSKICH Z ROKU 1945 NIE PODAJĘ —
 *   rok wykluczony. Piszę „prawa miejskie w XX wieku".
 *   ⚠ Data i tak stoi na jednym źródle [NP].
 *
 * ⚠⚠ ODMIANA — OBA CZŁONY ODMIENIANE, ŁĄCZNIK ZOSTAJE:
 *   D. do Kudowy-Zdroju · Ms. w Kudowie-Zdroju
 *   N. Kudową-Zdrojem · B. Kudowę-Zdrój
 *   ⚠⚠⚠ „DO KUDOWA-ZDROJU" I „W KUDOWA-ZDROJU"
 *   SĄ BŁĘDAMI. SPRAWDZIĆ OSOBNYM PRZEBIEGIEM.
 *   Przymiotnik: KUDOWSKI [NP].
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niezweryfikowana.
 *
 * ⚠⚠ PUŁAPKI: W TYM SAMYM POWIECIE KŁODZKIM SĄ CZTERY
 *   INNE MIEJSCOWOŚCI „-ZDRÓJ": Duszniki-Zdrój,
 *   Polanica-Zdrój, Lądek-Zdrój, plus Stronie Śląskie.
 *   WYNIKI WYSZUKIWANIA STALE SIĘ MIESZAJĄ.
 *   ROZGRANICZAM W FAQ — OBOWIĄZKOWO.
 *   ⚠ Chudoba (opolskie) — wieś o nazwie identycznej
 *   z historyczną nazwą Kudowy.
 *   ⚠ Góry Stołowe, Błędne Skały i Szczeliniec leżą
 *   w GMINIE RADKÓW, NIE W KUDOWIE — nie przypisuję.
 *   ⚠ Przymiotnik „kudowski" myli się z „kłodzkim".
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ZAMECZEK STARSZY OD PARKU:
 *   Park Zdrojowy założono w 1787 r. (baron von
 *   Stillfried), a stojący w jego granicach „Zameczek"
 *   pochodzi z 1772 r. — JEST O PIĘTNAŚCIE LAT STARSZY
 *   NIŻ ZAŁOŻENIE, KTÓREGO JEST CZĘŚCIĄ.
 *   Park zaprojektowano wokół czegoś, co już stało.
 *   ⚠ POWIERZCHNIA PARKU: 12,97 ha — podana z dokładnością
 *   do setnej hektara, czyli do około stu metrów
 *   kwadratowych. TO SAMO W SOBIE JEST FAKTEM.
 *   ⚠ DŁUGOŚCI ALEI, LICZBY GATUNKÓW DRZEW I LICZBY
 *   DRZEW POMNIKOWYCH NIE USTALONO — nie podaję.
 *
 * POZOSTAŁE FAKTY UŻYTE:
 * — 1354 — założenie osady [NP, jedno źródło]; nazwa
 *   Chudoba od połowy XVI w.
 * — 1772 — Zameczek. 1787 — Park Zdrojowy.
 *   1905 — duży gmach w parku.
 * — MUZEUM ZABAWEK: od 2002 r., ponad 5 000 eksponatów
 *   na 400 m², w 12 salach tematycznych.
 *   ⚠⚠ PRZELICZNIKA „12,5 eksponata na m²" NIE PODAJĘ
 *   JAKO FAKTU ŹRÓDŁOWEGO — to mój rachunek.
 *   ⚠⚠ MUZEUM NIE JEST KĄTEM — „liczba przegródek ustalana
 *   przed porządkowaniem" ociera się o to, co da się
 *   policzyć (Dobrzany) i o etykiety (Oborniki Śląskie,
 *   ta sama fala). PODAJĘ JAKO FAKT.
 * — SKANSEN W PSTRĄŻNEJ: od 1984 r., koncepcja obejmuje
 *   17 zabytkowych obiektów; zidentyfikowane typy to
 *   dwie chałupy, dom z kuźnią, zajazd, dzwonnica,
 *   stodoła i wiatrak.
 *   ⚠ POWIERZCHNI SKANSENU NIE USTALONO.
 * — SZLAK GINĄCYCH ZAWODÓW: cztery czynne warsztaty —
 *   garncarski, kuźnia, dom chleba, chata rękodzieła.
 *   ⚠ ROKU POWSTANIA SZLAKU NIE USTALONO.
 * — ⚠⚠ PRZEMYSŁU WŁÓKIENNICZEGO NIE OPISUJĘ — źródło
 *   wpada w pętlę przekierowań, ZERO LICZB. To luka,
 *   nie temat.
 * — ⚠ FESTIWALU MONIUSZKOWSKIEGO NIE DATUJĘ —
 *   źródła podają 1962 albo 1968.
 *
 * KĄT: PUNKTY, KTÓRYCH NIE PRZESUNIESZ
 * — o tym, że planowanie kuchni zaczyna się od spisu
 * rzeczy nieruchomych, a nie od układu idealnego.
 * Kąt od kudowskiego parku: założono go w 1787 r. wokół
 * budynku, który stał tam od 1772.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Park Zdrojowy w Kudowie-Zdroju ma 12,97 ha
 *   i powstał w 1787 roku, a Zameczek stojący w jego
 *   granicach jest od niego o piętnaście lat starszy,
 * — ŻE PARK ZAPROJEKTOWANO WOKÓŁ CZEGOŚ, CO JUŻ STAŁO,
 *   i że to jest normalny sposób projektowania,
 *   a nie ustępstwo. TO JEST RDZEŃ,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY ODWROTNIE: rysujemy układ
 *   idealny, a potem przez lata walczymy z tym,
 *   co było tam wcześniej,
 * — ⚠⚠ ŻE PIERWSZY RUCH TO SPIS PUNKTÓW STAŁYCH:
 *   okno, zlew, gniazdko, odpływ, drzwi, ta jedna szafka,
 *   której nikt nie przesunie. Ich się nie przesuwa,
 *   więc to one wyznaczają resztę,
 * — ⚠⚠ ŻE NAJCZĘSTSZY BŁĄD POLEGA NA TYM, ŻE PUNKT STAŁY
 *   BIERZE SIĘ ZA RUCHOMY — „przecież kiedyś przeniesiemy
 *   gniazdko" — i planuje wokół czegoś, co nigdy nie
 *   zostanie przeniesione,
 * — ⚠⚠ ŻE SPIS ROBI SIĘ NA KARTCE I ZAJMUJE KWADRANS,
 *   ⚠⚠⚠ ALE NIE PODAJĘ ŻADNEGO GOTOWEGO UKŁADU
 *   ANI TEGO, CO GDZIE POSTAWIĆ. TWARDA GRANICA,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część punktów stałych
 *   da się jednak ruszyć i warto sprawdzić koszt, zanim
 *   się z góry pogodzisz. Zameczek został, ale gmach
 *   w tym samym parku dobudowano dopiero w 1905 roku,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie jest punktem
 *   stałym i nie należy go tak traktować — trzeba mu
 *   znaleźć miejsce POMIĘDZY punktami stałymi.
 *   MÓWIĘ WPROST, że jeśli takiego miejsca nie ma,
 *   to jest to argument przeciwko zakupowi.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO GĘSTOŚCI, PRZESTRZENI, STREF I UKŁADU
 *   KUCHNI — obszar zajęty WIELOKROTNIE (Koluszki,
 *   Tychowo, Cedynia, Nowe Warpno, Chojnów, Wołów).
 *   ⚠⚠⚠ TO JEST NAJBLIŻSZY OBSZAR I NAJWIĘKSZE RYZYKO
 *   TEGO TEKSTU. Piszę WYŁĄCZNIE o SPISIE PUNKTÓW
 *   NIERUCHOMYCH JAKO PIERWSZYM KROKU — nie o tym,
 *   gdzie co postawić, co mieć pod ręką ani jaka strefa
 *   jest najważniejsza. ROZGRANICZAM JAWNIE, JEDNYM
 *   ZDANIEM W TEKŚCIE.
 * — ⚠⚠⚠ ZERO MIEJSCA, KTÓRE MA BYĆ PUSTE — kąt zajęty
 *   (Wołów).
 * — ⚠⚠⚠ ZERO POD RĘKĄ KONTRA SCHOWANE — kąt zajęty
 *   (Płoty).
 * — ⚠⚠ ZERO DOKŁADANIA PO OKRESIE UŻYWANIA — kąt zajęty
 *   (Syców, poprzednia fala). Tamten mówi „odłóż
 *   decyzję, aż będziesz miał dane"; ten mówi „zacznij
 *   od tego, czego i tak nie zmienisz". ROZGRANICZAM.
 * — ⚠⚠ ZERO STAREGO I NOWEGO OBOK SIEBIE — kąt zajęty
 *   (Brzeg Dolny).
 * — ⚠⚠ ZERO ETYKIET I OPISYWANIA RZECZY — kąt pisany
 *   w tej samej fali (Oborniki Śląskie).
 * — ⚠⚠ ZERO LICZENIA CZĘŚCI I SZWÓW — kąt pisany w tej
 *   samej fali (Pieszyce).
 * — ⚠⚠ ZERO CO DA SIĘ POLICZYĆ, A CZEGO NIE — kąt zajęty
 *   (Dobrzany). Muzeum Zabawek podaję jako fakt.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO UKŁADU KUCHNI — podaję WYŁĄCZNIE
 *   zasadę: najpierw spisz to, czego nie ruszysz.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO UZDROWISKA, WÓD LECZNICZYCH, SANATORIÓW,
 *   KURACJI I PIJALNI JAKO OBIEKTU LECZNICZEGO.
 * — ⚠⚠⚠ ZERO KAPLICY CZASZEK — bez wzmianki, bez aluzji.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — dzwonnicę w skansenie
 *   wymieniam wyłącznie jako typ budynku na liście.
 * — ⚠ ZERO GRANICY PAŃSTWOWEJ I PRZEJŚCIA GRANICZNEGO
 *   JAKO TEMATU.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO HERBU — nieustalony.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PODAJĘ dat przyłączenia ośmiu dawnych wsi.
 * — NIE PODAJĘ nazwy ani funkcji gmachu z 1905 r.
 * — NIE PODAJĘ długości alei, liczby gatunków drzew
 *   ani liczby drzew pomnikowych w parku.
 * — NIE PODAJĘ powierzchni skansenu.
 * — NIE PODAJĘ roku powstania Szlaku Ginących Zawodów.
 * — NIE PODAJĘ roku pierwszego Festiwalu Moniuszkowskiego
 *   — źródła podają 1962 albo 1968.
 * — NIE PRZYPISUJĘ Kudowie Gór Stołowych, Błędnych Skał
 *   ani Szczelińca — to gmina Radków.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych. ⚠ „Pstrąg kłodzki", „ciasto z kruszonką
 *   z Ziemi Kłodzkiej", „twaróg sudecki" i miody sudeckie
 *   to oznaczenia REGIONALNE — NIE KUDOWSKIE.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kudowa-Zdrój leży w powiecie kłodzkim, na wysokości
 *   od 370 do 420 m n.p.m.; jest gminą miejską, więc
 *   granice gminy pokrywają się z granicami miasta;
 *   liczy 9 198 mieszkańców (GUS, 31.12.2024) na 33,9 km²,
 *   a jej rozproszona zabudowa bierze się stąd, że miasto
 *   zszyto z ośmiu dawnych wsi,
 * — Park Zdrojowy ma 12,97 ha i został założony w 1787 r.
 *   przez barona von Stillfrieda; stojący w jego granicach
 *   Zameczek pochodzi z 1772 r., a duży gmach w parku
 *   wzniesiono w 1905,
 * — Muzeum Zabawek działa od 2002 r. i pokazuje ponad
 *   5 000 eksponatów na 400 m², w dwunastu salach
 *   tematycznych,
 * — skansen w Pstrążnej powstał w 1984 r.; jego koncepcja
 *   obejmuje 17 zabytkowych obiektów — wśród nich dwie
 *   chałupy, dom z kuźnią, zajazd, stodołę i wiatrak,
 * — na Szlaku Ginących Zawodów czynne są cztery warsztaty:
 *   garncarski, kuźnia, dom chleba i chata rękodzieła,
 * — osadę założono w 1354 r., a od połowy XVI w.
 *   nosiła nazwę Chudoba; prawa miejskie miasto otrzymało
 *   dopiero w XX wieku.
 */
export const KUDOWA_ZDROJ: CityContent = {
  slug: "kudowa-zdroj",
  h1: "Thermomix Kudowa-Zdrój – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kudowa-Zdrój — prezentacja i cena",
  seoDescription:
    "Thermomix w Kudowie-Zdroju: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kudowa-Zdrój — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kudowie-Zdroju. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kudowy-Zdroju z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta, we wszystkich jego rozrzuconych częściach.",

  highlights: highlightyStandardowe("Kudowa-Zdrój"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Park z 1787 roku zaprojektowano wokół budynku, który stał tam od 1772.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kudowie-Zdroju – jak wygląda prezentacja?",
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
      id: "punkty-stale",
      heading: "Punkty, których nie przesuniesz",
      paragraphs: [
        "Park Zdrojowy w Kudowie-Zdroju ma dwanaście hektarów i dziewięćdziesiąt siedem arów — powierzchnię podano z dokładnością do stu metrów kwadratowych — a założono go w 1787 roku.",
        "Zameczek, który stoi w jego granicach, pochodzi z 1772 roku. Jest o piętnaście lat starszy od założenia, którego jest częścią.",
        "Nikt tego budynku nie rozebrał, żeby park wyszedł regularnie. Park zaprojektowano wokół niego — i tak się to zwykle robi, kiedy ktoś planuje coś na miejscu, które już istnieje.",
        "W kuchni robimy odwrotnie i to jest najdroższy z drobnych błędów.",
        "Najpierw powstaje układ idealny: tu blat, tu zabudowa, tu wyspa, wszystko ładnie w rzędzie. A potem przez lata trwa cicha walka z tym, co było tam wcześniej — bo okno jest, gdzie jest, zlew stoi nad odpływem, a gniazdka są w tej jednej ścianie.",
        "Pierwszy ruch jest inny i zajmuje kwadrans z kartką.",
        "Spisz punkty stałe. Okno. Zlew i odpływ pod nim. Gniazdka. Drzwi i to, w którą stronę się otwierają. Grzejnik. Ta jedna szafka, której nikt nigdy nie przesunie, bo jest wbudowana. To one wyznaczają resztę, bo tylko one się nie ruszą.",
        "Najczęstszy błąd polega na czymś innym, niż się wydaje. Nie na tym, że ktoś nie widzi punktów stałych, tylko na tym, że bierze punkt stały za ruchomy. „Przecież kiedyś przeniesiemy to gniazdko.” Nie przeniesiemy. Przez siedem lat nie przenieśliśmy i przez kolejne siedem nie przeniesiemy, a cały układ był planowany tak, jakby zaraz miało się to stać.",
        "Dopowiem od razu, bo temat leży blisko: nie piszę tu o tym, gdzie co postawić, co trzymać pod ręką ani która część kuchni jest najważniejsza. Piszę wyłącznie o pierwszym kroku — o spisie tego, czego i tak nie zmienisz.",
        "Uczciwie o drugiej stronie: część punktów stałych da się jednak ruszyć i warto sprawdzić koszt, zanim się z góry pogodzisz. W tym samym kudowskim parku Zameczek został na swoim miejscu, ale sto trzydzieści lat później dostawiono w nim duży gmach — czyli coś jednak dołożono, tylko świadomie i w innym miejscu.",
        "Na koniec o urządzeniu i to nie jest wygodne dla mnie.",
        "Thermomix nie jest punktem stałym i nie należy go tak traktować. Trzeba mu znaleźć miejsce pomiędzy punktami stałymi — z dostępem do gniazdka i z blatem wokół. Jeśli po spisaniu punktów stałych okaże się, że takiego miejsca nie ma, to jest to uczciwy argument przeciwko zakupowi i powiem to wprost przy stole, a nie po.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kudowie-Zdroju?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, gdzie w kuchni jest najbliższe wolne gniazdko. To jedyna rzecz, którą warto sprawdzić przed spotkaniem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kudowie-Zdroju"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kudowy-Zdroju",
      paragraphs: [
        "Kudowa-Zdrój leży w powiecie kłodzkim, na wysokości od trzystu siedemdziesięciu do czterystu dwudziestu metrów nad poziomem morza. Jest gminą miejską — granice gminy pokrywają się z granicami miasta, więc nie ma tu podziału na miasto i wsie. Mieszka tu 9 198 osób (GUS, 31.12.2024) na niecałych trzydziestu czterech kilometrach kwadratowych, a rozproszona zabudowa bierze się stąd, że miasto zszyto z ośmiu dawnych wsi. Osadę założono w 1354 roku, od połowy szesnastego wieku nosiła nazwę Chudoba, a prawa miejskie otrzymała dopiero w dwudziestym stuleciu. Park Zdrojowy ma dwanaście hektarów z okładem i powstał w 1787 roku z inicjatywy barona von Stillfrieda; stojący w jego granicach Zameczek pochodzi z 1772, a duży gmach w parku wzniesiono w 1905. Muzeum Zabawek działa od 2002 roku i pokazuje ponad pięć tysięcy eksponatów na czterystu metrach kwadratowych, w dwunastu salach tematycznych. Skansen w Pstrążnej powstał w 1984 roku, a jego koncepcja obejmuje siedemnaście zabytkowych obiektów — wśród nich dwie chałupy, dom z kuźnią, zajazd, stodołę i wiatrak. Na Szlaku Ginących Zawodów czynne są cztery warsztaty: garncarski, kuźnia, dom chleba i chata rękodzieła.",
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

  districtsHeading: "Do których części Kudowy-Zdroju dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta. Kudowa-Zdrój jest gminą miejską, więc nie ma tu odrębnych wsi — jest natomiast prawie trzydzieści cztery kilometry kwadratowe zabudowy zszytej z ośmiu dawnych miejscowości, między innymi Czermnej, Zakrza, Słonego, Pstrążnej, Brzozowia, Jakubowic, Bukowiny i Nowego Zdroju. Do każdej z tych części dojeżdżam bez dopłaty.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę części miasta. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kudowę-Zdrój też przyjadę",
  nearbyParagraphs: [
    "Lewin Kłodzki jest tuż obok, Duszniki-Zdrój jakieś szesnaście kilometrów, Radków i Polanica-Zdrój po dwadzieścia pięć, Kłodzko i Nowa Ruda po trzydzieści pięć. Do Wrocławia też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Lewin Kłodzki", "Duszniki-Zdrój", "Polanica-Zdrój", "Radków", "Kłodzko"],

  about: blokOMnie("do Kudowy-Zdroju", "w Kudowie-Zdroju i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kudowy-Zdroju bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — Kudowa-Zdrój jest gminą miejską, więc nie ma tu odrębnych wsi, jest za to zabudowa rozrzucona po ośmiu dawnych miejscowościach i dojeżdżam do każdej z nich. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy umawianiu warto podać pełną nazwę: w powiecie kłodzkim są jeszcze Duszniki-Zdrój, Polanica-Zdrój i Lądek-Zdrój, a wyniki wyszukiwania stale je ze sobą mieszają.",
    },
    ...faqWspolne("w Kudowie-Zdroju"),
    {
      question: "Od czego zacząć planowanie kuchni?",
      answer:
        "Od spisania tego, czego nie przesuniesz: okna, zlewu i odpływu, gniazdek, drzwi i tego, w którą stronę się otwierają, grzejnika, zabudowanej szafki. Park Zdrojowy w Kudowie-Zdroju założono w 1787 roku wokół Zameczku, który stał tam od 1772 — nikt go nie rozebrał, żeby park wyszedł regularnie. Najczęstszy błąd to wziąć punkt stały za ruchomy: „przecież kiedyś przeniesiemy to gniazdko”. Zwykle nie przenosimy, a cały układ był planowany tak, jakby to miało zaraz nastąpić.",
    },
    {
      question: "Czy Thermomix musi stać w jednym stałym miejscu?",
      answer:
        "Nie jest punktem stałym i nie warto go tak traktować — potrzebuje miejsca pomiędzy punktami stałymi, z dostępem do gniazdka i z blatem wokół. Jeśli po spisaniu punktów stałych okaże się, że takiego miejsca u Was nie ma, to jest uczciwy argument przeciwko zakupowi i powiem to wprost, a nie po fakcie. Najprościej sprawdzić to na prezentacji: przywożę urządzenie i stawiamy je tam, gdzie miałoby stać naprawdę.",
    },
  ],

  geo: { lat: 50.4436, lng: 16.2447 },
};
