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
 * TYCHOWO — powiat białogardzki,
 * woj. zachodniopomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 2 326 mieszkańców (GUS 31.12.2024), 4,0 km²
 *   (strona gminy: 4,10 km²), gęstość 587,4 os./km²,
 *   70 M N.P.M.
 * CAŁA GMINA: 6 187 osób, 350,5 km², gęstość 18 os./km².
 * ⚠⚠ RÓŻNICA 2,66×. NIE MIESZAM TYCH LICZB.
 *   ⚠⚠⚠ ŹRÓDŁA PODAJĄ DLA GMINY AŻ CZTERY RÓŻNE LICZBY
 *   (7 077, 7 059, 7 239, 6 187) — ŻADNEJ NIE UŻYWAM
 *   DLA MIASTA. TWARDA GRANICA.
 * ⚠ GEO: 53,9283 / 16,2580.
 * ⚠ LICZBY MIEJSCOWOŚCI NIE PODAJĘ — źródła podają
 *   45, 43 ALBO „20 wsi i miasto". Piszę opisowo.
 *
 * ⚠⚠⚠ HOMONIM KRYTYCZNY — NAJGROŹNIEJSZY W CAŁEJ FALI:
 *   TYCHOWO ≠ TYCHY (woj. śląskie, 125 tys.).
 *   ⚠⚠ Wyszukiwarki i modele masowo mylą te nazwy.
 *   ⚠⚠ W SAMYM WOJ. ZACHODNIOPOMORSKIM JEST KILKA
 *   MIEJSCOWOŚCI TYCHOWO (m.in. w gminie Stara Dąbrowa,
 *   pow. stargardzki). ZAWSZE PISZĘ „W POWIECIE
 *   BIAŁOGARDZKIM". ROZGRANICZAM W FAQ — obowiązkowo.
 *   ⚠⚠ Dodatkowo w TEJ SAMEJ GMINIE leży TYCZEWO —
 *   jedna litera różnicy.
 *
 * ⚠ ODMIANA: RODZAJ NIJAKI — „to Tychowo".
 *   D. TYCHOWA, Ms. W TYCHOWIE.
 *   ⚠⚠⚠ NIGDY „W TYCHACH" — to Tychy.
 *   ⚠⚠ NIE POTWIERDZONE W PWN — forma regularna.
 *   ⚠⚠ NAZWY MIESZKAŃCA I PRZYMIOTNIKA NIE UŻYWAM —
 *   piszę „dla rodziny z Tychowa".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ok. 1250 — pierwsza wzmianka (dokument o daninie).
 *   ⚠ PODAJĘ SAM ROK I CHARAKTER DOKUMENTU.
 * — ⚠⚠⚠ PRAWA MIEJSKIE: pomeranica.pl podaje
 *   1 STYCZNIA 2010 R. — ⚠⚠⚠ TYLKO JEDNO ŹRÓDŁO,
 *   NIEPOTWIERDZONE. NIE PODAJĘ TEJ DATY.
 *   Piszę wyłącznie, że Tychowo jest młodym miastem
 *   z nadania administracyjnego, bez roku.
 * — Kościół z końca XV w., z kamienia, w konstrukcji
 *   ryglowej. ⚠ NIE OPISUJĘ — wątek wyznaniowy.
 *   ⚠⚠ SPRZECZNOŚĆ 1830: „przedłużenie nawy" ALBO
 *   „dobudowa wieży". NIE UŻYWAM TEJ DATY.
 *   ⚠⚠ POŻARU Z 1870 I ODBUDOWY 1871 NIE UŻYWAM —
 *   dotyczą kościoła; wątek wyznaniowy.
 *   ⚠⚠ TRYPTYKU, KRUCYFIKSU I ORGANÓW NIE WPROWADZAM.
 * — Park dworski z XVIII w.: 13,7 ha, ok. 2 300 drzew;
 *   liściaste 150–180 lat, iglaste 110–130 lat.
 *   ⚠⚠ UWAGA REDAKCYJNA: park ma 13,7 HA, a Trygław
 *   ma wg jednej wersji 13,7 M długości. NIE POMYLIĆ.
 * — Aleja lipowa ok. 1,5 km, między Tychowem
 *   a Trzebiszynem.
 * — Pałac osiemnastowieczny; ruiny rozebrano na początku
 *   lat 70. XX w.
 * — Rzeki: Parsęta (główny ciek, o nieuregulowanym
 *   biegu), Dębnica, Leśnica, Chotla, Leszczynka,
 *   Bąbnica.
 * — Jezioro Dobrowieckie Wielkie: 14,4 ha, głębokość
 *   12 m, długość 500 m, szerokość 350 m.
 * — Lasy 54,73 % gminy (strona gminy: prawie 56 %).
 *   ⚠ PODAJĘ „PONAD POŁOWA".
 * — Linia kolejowa nr 404 (Szczecinek–Kołobrzeg);
 *   miasto wykształciło się z osady wzdłuż tej linii.
 *   ⚠ ROKU OTWARCIA LINII NIE USTALONO — nie podaję.
 * — Tychowo leży na skrzyżowaniu trzech dróg
 *   regionalnych. Gmina to 41,5 % powierzchni powiatu
 *   i 15,7 % jego ludności.
 * — Kościół w Motarzynie ok. 1663, w Tyczewie 1681
 *   z dzwonem z 1780. ⚠ NIE UŻYWAM — wątek wyznaniowy.
 *
 * GŁAZ TRYGŁAW — FAKTY UŻYTE:
 * — Obwód 50 m (zgodne w czterech źródłach).
 * — Wysokość nad ziemią 3,8 m, pod ziemią ponad 4 m,
 *   łącznie ok. 7,8 m.
 * — Objętość ok. 700 m³; masa ok. 2 000 ton.
 *   ⚠⚠⚠ pomeranica.pl podaje „ok. 200 tys. kg" = 200 t.
 *   TO JEST BŁĄD — przy 700 m³ dałoby gęstość
 *   0,29 t/m³, mniej niż drewno. NIE CYTUJĘ.
 * — ⚠⚠ DŁUGOŚCI I SZEROKOŚCI NIE PODAJĘ — źródła
 *   podają 13,7 × 9,3 m ALBO 16 × 11 m.
 * — Granit gnejsowy; rysy lodowcowe na powierzchni.
 * — Pomnik przyrody od 1954 r. (zgodne w trzech
 *   źródłach). Największy głaz narzutowy w Polsce.
 * — ⚠⚠ ZAPADA SIĘ POD WŁASNYM CIĘŻAREM O KILKANAŚCIE
 *   MILIMETRÓW ROCZNIE. ⚠ Jedno źródło — podaję
 *   z zaznaczeniem, że to obserwacja, i nie robię z tego
 *   kąta (obszar osiadania zostawiam wolny).
 * — ⚠⚠ LEŻY NA CMENTARZU. ⚠⚠⚠ TEGO NIE PISZĘ —
 *   miejsce pochówków, temat nie na stronę o gotowaniu.
 *   PODAJĘ WYŁĄCZNIE, ŻE JEST W TYCHOWIE.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA:
 *   MIASTO TYCHOWO OBEJMUJE 4,10 KM² I SKŁADA SIĘ
 *   Z DZIESIĘCIU ODRĘBNYCH FRAGMENTÓW ADMINISTRACYJNYCH.
 *   Źródło: strona gminy. To jest cały kąt.
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE USTALONO.
 *   ⚠⚠ BRAK DOWODU, NIE DOWÓD BRAKU. TEMAT NIE POJAWIA
 *   SIĘ W TEKŚCIE W OGÓLE.
 * ⚠ OSIEDLI STATUTOWYCH NIE USTALONO — districts PUSTE.
 *
 * KĄT: DZIESIĘĆ KAWAŁKÓW — o tym, że kuchnia prawie
 * nigdy nie jest jedną przestrzenią, i że nie trzeba
 * z tym walczyć.
 * Kąt od Tychowa: miasto ma cztery kilometry kwadratowe
 * i składa się z dziesięciu odrębnych fragmentów.
 * To nie jest jedna plama na mapie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że miasto Tychowo obejmuje 4,10 km² i składa się
 *   z dziesięciu odrębnych fragmentów administracyjnych,
 * — ŻE MIMO TO JEST JEDNYM MIASTEM I DZIAŁA — to jest
 *   rdzeń,
 * — ⚠⚠ ŻE KUCHNIA JEST DOKŁADNIE TAKA I PRAWIE NIKT
 *   TAK O NIEJ NIE MYŚLI: blat, szafka nad zlewem,
 *   półka w spiżarni, szuflada z przyprawami, lodówka,
 *   parapet, piwnica, bagażnik po zakupach. Dziesięć
 *   kawałków, które razem nazywamy jednym słowem,
 * — ⚠⚠ ŻE PORZĄDKOWANIE ZWYKLE ZACZYNA SIĘ OD ZŁEJ
 *   AMBICJI: zebrać wszystko w jedno miejsce. To się
 *   nie udaje, bo kuchnia nie ma jednego miejsca —
 *   i po trzech tygodniach wszystko wraca,
 * — ⚠⚠ ŻE DZIAŁA COŚ INNEGO: NIE SCALANIE FRAGMENTÓW,
 *   TYLKO PRZYPISANIE KAŻDEMU JEDNEJ FUNKCJI.
 *   Fragment, który ma dwie funkcje, przestaje mieć
 *   jakąkolwiek — bo nie wiadomo, czego w nim szukać,
 * — ⚠⚠ ŻE TEST JEST JEDNOZDANIOWY: jeśli nie potrafisz
 *   powiedzieć, co jest w danym miejscu, nie zaglądając
 *   tam, to miejsce nie ma funkcji, tylko zawartość,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: ROZBICIE NA KAWAŁKI
 *   MA KOSZT. Tychowo ma dziesięć fragmentów i między
 *   nimi trzeba się przemieszczać. W kuchni to samo:
 *   im więcej osobnych miejsc, tym więcej kroków.
 *   Chodzi o to, żeby fragmenty były przemyślane,
 *   a nie o to, żeby było ich dużo,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie scala kuchni
 *   i zajmuje jeszcze jeden fragment blatu. Zmniejsza
 *   za to liczbę fragmentów potrzebnych do jednego
 *   obiadu, bo kilka etapów dzieje się w tym samym
 *   miejscu. MÓWIĘ TO WPROST: to jest jego realna
 *   przewaga i jego realny koszt naraz.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO POD RĘKĄ CZY SCHOWANE — kąt zajęty
 *   (Płoty). ⚠⚠ TO JEST NAJBLIŻSZY KĄT. Tam chodzi
 *   o TO, CZY RZECZ MA BYĆ WIDOCZNA; TUTAJ o TO,
 *   ŻE MIEJSC JEST WIELE I KAŻDE POWINNO MIEĆ JEDNĄ
 *   FUNKCJĘ. Ani słowa o zasięgu ręki, o chowaniu
 *   i o tym, co trzymać na wierzchu. ROZGRANICZAM
 *   WPROST. TWARDA GRANICA.
 * — ⚠⚠⚠ ZERO BAŁAGANU WOKÓŁ URZĄDZENIA I SPRZĄTANIA —
 *   kąt zajęty (Koluszki).
 * — ⚠⚠ ZERO KRÓTKIEJ LISTY SPRZĘTU — kąt zajęty
 *   (Polanów). Nie piszę o tym, czego się używa,
 *   tylko o tym, gdzie to leży.
 * — ⚠⚠ ZERO GRANICY WIĘKSZEJ NIŻ TO, CO OGRADZA —
 *   kąt zajęty (Recz). Nie piszę o systemie jako
 *   obciążeniu.
 * — ⚠⚠ ZERO KUCHNI SKŁADAJĄCEJ SIĘ Z WIELU KUCHNI —
 *   obszar dotknięty (Katowice: „dwadzieścia kilka").
 *   Tam chodzi o RÓŻNE KUCHNIE RÓŻNYCH LUDZI;
 *   TUTAJ o FRAGMENTY JEDNEJ. Nie piszę o dzielnicach
 *   ani o różnych domach.
 * — ⚠⚠ ZERO ZAPROJEKTOWANIA NARAZ KONTRA DOKŁADANIA
 *   PO KOLEI — kąt zajęty (Zamość).
 * — ⚠⚠ ZERO NIE MA KOŃCA, JEST RYTM — kąt zajęty
 *   (Maszewo). Nie piszę o tym, że porządek wraca.
 * — ⚠⚠ ZERO OSIADANIA I ROZJEŻDŻANIA SIĘ SYSTEMU —
 *   ⚠⚠⚠ Trygław, który zapada się kilkanaście milimetrów
 *   rocznie, aż się o to prosi. NIE WCHODZĘ W TEN MORAŁ.
 *   Podaję fakt o osiadaniu i nie wyciągam z niego
 *   żadnego wniosku o kuchni. TWARDA GRANICA.
 * — ⚠ ZERO INNEJ METODY NA INNYM ETAPIE — kąt zajęty
 *   (Golczewo, ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNEGO GOTOWEGO PODZIAŁU KUCHNI — podaję WYŁĄCZNIE
 *   test sprawdzający.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO CMENTARZA JAKO LOKALIZACJI TRYGŁAWIA.
 *   Piszę wyłącznie „w Tychowie". TWARDA GRANICA.
 * — ⚠⚠ ZERO DATY PRAW MIEJSKICH — jedno źródło.
 * — ⚠⚠ ZERO ROKU 1945, PRZESIEDLEŃ I NIEMIECKIEJ NAZWY.
 * — ⚠⚠ ZERO WĄTKU WYZNANIOWEGO — kościołów, tryptyku,
 *   dzwonu z Tyczewa i pożaru z 1870 r. nie wprowadzam.
 * — ⚠ ZERO MASY 200 TON — błąd w źródle.
 * — ⚠ ZERO DEMOGRAFII.
 * — ⚠ ZERO LISTY PRODUKTÓW TRADYCYJNYCH — nie ustalono.
 * — ⚠ ŹRÓDŁA ODRZUCONE: infodlapolaka.pl; pomeranica.pl
 *   w zakresie masy głazu i liczby ludności.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy — źródła podają
 *   dla gminy cztery różne wartości.
 * — NIE PODAJĘ roku nadania praw miejskich.
 * — NIE PODAJĘ długości i szerokości Trygławia.
 * — NIE PODAJĘ masy 200 ton.
 * — NIE PODAJĘ liczby miejscowości w gminie.
 * — NIE PODAJĘ roku otwarcia linii kolejowej nr 404.
 * — NIE PISZĘ, gdzie dokładnie leży głaz.
 * — NIE PISZĘ, czy gmina ma wpis na Liście Produktów
 *   Tradycyjnych — nie ustalono.
 * — NIE UŻYWAM nazwy mieszkańca ani przymiotnika.
 * — NIE PODAJĘ ŻADNEGO GOTOWEGO PODZIAŁU KUCHNI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Tychowo leży w powiecie białogardzkim, siedemdziesiąt
 *   metrów nad poziomem morza, na skrzyżowaniu trzech
 *   dróg regionalnych; do Białogardu jest stąd 22 km,
 *   do Połczyna-Zdroju i Bobolic po 26, a do Koszalina 35,
 * — miasto liczy 2 326 mieszkańców (GUS, 31.12.2024)
 *   na 4,10 km² i składa się z dziesięciu odrębnych
 *   fragmentów administracyjnych, a cała gmina 6 187 osób
 *   na 350,5 km², co daje osiemnaście osób na kilometr
 *   kwadratowy; gmina zajmuje 41,5 % powierzchni powiatu
 *   przy 15,7 % jego ludności, a lasy to ponad połowa
 *   jej terenu,
 * — pierwsza wzmianka o miejscowości pochodzi z około
 *   1250 r. i dotyczy obowiązku uiszczania daniny;
 *   miasto wykształciło się z osady rozciągniętej wzdłuż
 *   linii kolejowej nr 404 ze Szczecinka do Kołobrzegu,
 * — w Tychowie leży Trygław — największy głaz narzutowy
 *   w Polsce: 50 m obwodu, 3,8 m wysokości nad ziemią
 *   i ponad 4 m pod nią, około 700 m³ objętości
 *   i około 2 000 ton masy; to granit gnejsowy z rysami
 *   lodowcowymi na powierzchni, pomnikiem przyrody
 *   od 1954 r., osiadający pod własnym ciężarem
 *   o kilkanaście milimetrów rocznie,
 * — park dworski z XVIII w. ma 13,7 ha i około 2 300
 *   drzew — liściaste liczą 150–180 lat, iglaste
 *   110–130; między Tychowem a Trzebiszynem ciągnie się
 *   zabytkowa aleja lipowa o długości około 1,5 km,
 * — przez gminę płynie Parsęta, jedna z niewielu rzek
 *   o nieuregulowanym biegu, a także Dębnica, Leśnica,
 *   Chotla, Leszczynka i Bąbnica; Jezioro Dobrowieckie
 *   Wielkie ma 14,4 ha, 500 m długości, 350 m szerokości
 *   i 12 m głębokości.
 */
export const TYCHOWO: CityContent = {
  slug: "tychowo",
  h1: "Thermomix Tychowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tychowo — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Tychowie (powiat białogardzki): bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tychowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tychowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tychowa w powiecie białogardzkim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Tychowo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Miasto Tychowo to dziesięć osobnych kawałków. I mimo to jedno miasto.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tychowie – jak wygląda prezentacja?",
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
      id: "dziesiec-kawalkow",
      heading: "Miasto z dziesięciu kawałków",
      paragraphs: [
        "Miasto Tychowo obejmuje cztery kilometry kwadratowe i składa się z dziesięciu odrębnych fragmentów administracyjnych. Nie jest jedną plamą na mapie — jest dziesięcioma osobnymi kawałkami, które razem nazywają się miastem.",
        "I to działa. Ludzie tam mieszkają, chodzą do pracy, robią zakupy i nikt nie ma poczucia, że mieszka w dziesięciu miejscach naraz.",
        "Kuchnia jest dokładnie taka sama, a prawie nikt tak o niej nie myśli.",
        "Blat. Szafka nad zlewem. Półka w spiżarni albo w przedpokoju. Szuflada z przyprawami. Lodówka. Zamrażarka, czasem w zupełnie innym pomieszczeniu. Parapet z ziołami. Piwnica ze słoikami. Bagażnik, w którym po zakupach coś jeszcze zostało. Dziesięć kawałków, które codziennie nazywacie jednym słowem.",
        "Porządkowanie prawie zawsze zaczyna się od złej ambicji: zebrać wszystko w jedno miejsce.",
        "To się nie udaje, i to nie z braku charakteru. Nie udaje się, bo kuchnia nie ma jednego miejsca — nie ma takiej szafki, w której zmieści się jednocześnie mąka, mrożonki i tarka. Po trzech tygodniach wszystko wraca tam, gdzie było, i zostaje poczucie, że znowu nie wyszło.",
        "Działa co innego: nie scalanie fragmentów, tylko przypisanie każdemu z nich jednej funkcji.",
        "Fragment, który ma dwie funkcje, przestaje w praktyce mieć jakąkolwiek — bo nie wiadomo, czego w nim szukać. Szuflada „na przyprawy i drobiazgi” jest szufladą na drobiazgi. Półka „na kasze i na to, co się nie zmieściło” jest półką na to, co się nie zmieściło.",
        "Test na to jest jednozdaniowy i zajmuje minutę. Stań na środku kuchni i spróbuj powiedzieć, co jest w każdym miejscu, nie zaglądając tam. Wszędzie, gdzie nie potrafisz — to miejsce nie ma funkcji. Ma tylko zawartość.",
        "Uczciwie o drugiej stronie: rozbicie na kawałki ma swój koszt i nie warto go ukrywać. Tychowo ma dziesięć fragmentów i między nimi trzeba się przemieszczać. W kuchni jest tak samo — im więcej osobnych miejsc, tym więcej kroków na jeden obiad. Chodzi więc o to, żeby fragmenty były przemyślane, a nie o to, żeby było ich dużo.",
        "Na koniec o urządzeniu, wprost i w obie strony.",
        "Ono nie scala kuchni i zajmuje na blacie jeszcze jeden fragment — to jest jego realny koszt. Zmniejsza natomiast liczbę fragmentów potrzebnych do jednego obiadu, bo kilka etapów, które normalnie rozłażą się po całej kuchni, dzieje się w tym samym miejscu. Jedno i drugie jest prawdą i nie ma powodu mówić tylko o tym drugim.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tychowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile miejsca macie na blacie — to jedyna rzecz, którą warto sprawdzić przed spotkaniem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tychowie"),
    sekcjaRaty("w Tychowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Tychowa",
      paragraphs: [
        "Tychowo leży w powiecie białogardzkim, siedemdziesiąt metrów nad poziomem morza, na skrzyżowaniu trzech dróg regionalnych: do Białogardu jest stąd dwadzieścia dwa kilometry, do Połczyna-Zdroju i Bobolic po dwadzieścia sześć, a do Koszalina trzydzieści pięć. Samo miasto liczy ponad dwa tysiące trzystu mieszkańców (GUS, 31.12.2024) na czterech kilometrach kwadratowych i składa się z dziesięciu odrębnych fragmentów, a cała gmina ponad sześć tysięcy osób na trzystu pięćdziesięciu — osiemnaście osób na kilometr. Gmina zajmuje czterdzieści jeden i pół procent powierzchni powiatu przy piętnastu i siedmiu dziesiątych procent jego ludności, a lasy to ponad połowa jej terenu. Pierwsza wzmianka o miejscowości pochodzi z około 1250 roku i dotyczy obowiązku uiszczania daniny; samo miasto wykształciło się z osady rozciągniętej wzdłuż linii kolejowej ze Szczecinka do Kołobrzegu. Leży tu Trygław, największy głaz narzutowy w Polsce: pięćdziesiąt metrów obwodu, trzy metry osiemdziesiąt nad ziemią i ponad cztery pod nią, około siedmiuset metrów sześciennych objętości i mniej więcej dwóch tysięcy ton masy — granit gnejsowy z rysami lodowcowymi, pomnik przyrody od 1954 roku, osiadający pod własnym ciężarem o kilkanaście milimetrów rocznie. Park dworski z osiemnastego wieku ma trzynaście i siedem dziesiątych hektara i około dwóch tysięcy trzystu drzew, a między Tychowem a Trzebiszynem ciągnie się zabytkowa aleja lipowa długości półtora kilometra. Przez gminę płynie Parsęta, jedna z niewielu rzek o nieuregulowanym biegu.",
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

  districtsHeading: "Do których części Tychowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dziesięciu fragmentów miasta i do wszystkich wsi w gminie. Bez wyjątku i bez dopłaty za odległość — gmina ma trzysta pięćdziesiąt kilometrów kwadratowych, więc do najdalszych miejscowości też przyjadę.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Tychowo też przyjadę",
  nearbyParagraphs: [
    "Białogard jest dwadzieścia dwa kilometry stąd, Połczyn-Zdrój i Bobolice po dwadzieścia sześć, a Koszalin trzydzieści pięć. Do Barwic też dojeżdżam — bezpłatnie, tak samo jak wszędzie.",
  ],
  nearbyTowns: ["Białogard", "Połczyn-Zdrój", "Bobolice", "Koszalin", "Barwice"],

  about: blokOMnie("do Tychowa", "w Tychowie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tychowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Doprecyzowanie jest tu wyjątkowo potrzebne: chodzi o Tychowo w powiecie białogardzkim w województwie zachodniopomorskim — nie o Tychy na Śląsku, i nie o inne Tychowo w tym samym województwie, na przykład to w gminie Stara Dąbrowa. W samej gminie Tychowo leży zresztą też Tyczewo, więc przy umawianiu warto podać powiat.",
    },
    ...faqWspolne("w Tychowie"),
    {
      question: "Jak zaprowadzić porządek w kuchni, skoro wszystko rozłazi się po domu?",
      answer:
        "Nie próbując zebrać wszystkiego w jedno miejsce — to się nie udaje, bo kuchnia nie ma jednego miejsca. Działa przypisanie każdemu fragmentowi jednej funkcji: blatowi, szufladzie, półce, lodówce. Test zajmuje minutę: stań na środku i spróbuj powiedzieć, co jest w każdym miejscu, nie zaglądając tam. Gdzie nie potrafisz — to miejsce nie ma funkcji, tylko zawartość.",
    },
    {
      question: "Czy Thermomix zajmuje dużo miejsca na blacie?",
      answer:
        "Zajmuje jeden stały fragment blatu i nie ma sensu tego ukrywać — to jego realny koszt. Zmniejsza natomiast liczbę miejsc potrzebnych do jednego obiadu, bo kilka etapów, które normalnie rozłażą się po całej kuchni, dzieje się w tym samym naczyniu. Przy umawianiu wystarczy sprawdzić, ile wolnego blatu macie pod ręką.",
    },
  ],

  geo: { lat: 53.9283, lng: 16.258 },
};
