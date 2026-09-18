import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * KRYNKI — gmina miejsko-wiejska w powiecie sokólskim.
 * MIASTO 2 122, GMINA 2 683 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 3,8 km² (gęstość 554,0 os./km²),
 * GMINY 166,0 km² (gęstość 17 os./km²).
 * 28 MIEJSCOWOŚCI, w tym KRUSZYNIANY.
 * ⚠ LICZBY SOŁECTW NIE PODAJĘ.
 * ⚠ Notatka projektowa podawała 2 400 — ZAWYŻONE.
 * ⚠ Uwaga: miasto ma 2 122 z 2 683 mieszkańców gminy —
 * blisko 80% ludności gminy mieszka w mieście.
 *
 * ⚠⚠ UKŁAD URBANISTYCZNY:
 * Już w 1578 r. istniały Stare Miasto (rynek + 3 ulice)
 * i Nowe Miasto (rynek + 10 ulic). W II POŁ. XVIII w.
 * ANTONI TYZENHAUZ, podskarbi i administrator ekonomii
 * grodzieńskiej, przeprowadził całkowitą przebudowę.
 * RYNEK MA FORMĘ SZEŚCIOBOKU, z którego naroży WYBIEGA
 * PROMIENIŚCIE 12 PROSTYCH ULIC. Plan przypomina GWIAZDĘ.
 * Układ to „UNIKAT NA SKALĘ KRAJOWĄ" (strona gminy).
 * ⚠⚠ NIE POWTARZAM twierdzenia, że to „jedno z dwóch takich
 * rozwiązań na świecie, drugie w Paryżu" — brzmi jak legenda
 * lokalna, brak potwierdzenia. Używam wyłącznie sformułowania
 * urzędowego.
 * Dawny plac rynkowy zamieniono w latach 60. XX w. w park.
 *
 * PRAWA MIEJSKIE — ⚠ SPRZECZNOŚĆ: 1569 r. (Zygmunt August,
 * prawo magdeburskie) kontra 1565 r. bez nadawcy.
 * PISZĘ „w drugiej połowie XVI wieku", BEZ ROZSTRZYGANIA.
 * Utrata praw 1776, krótkie przywrócenie, ponowna utrata;
 * utrata 1950 r.; ODZYSKANIE PRAW MIEJSKICH 1 STYCZNIA 2009 r.
 *
 * GEOGRAFIA: Krynki leżą NAD RZEKĄ KRYNKĄ, na obrzeżach
 * PUSZCZY KNYSZYŃSKIEJ.
 * RZEMIOSŁO XIX w.: GARBARSTWO I SUKIENNICTWO.
 * ⚠ LICZBY ZAKŁADÓW NIE PODAJĘ.
 *
 * ZABYTKI: DZWONNICA BRAMNA z XVIII w. — najstarsza budowla
 * miasta; CERKIEW NARODZENIA NMP z 1864 r.; SYNAGOGA KAUKASKA
 * z 1850 r., dziś siedziba ośrodka kultury; KOŚCIÓŁ ŚW. ANNY
 * z lat 1907–1913, proj. STEFANA SZYLLERA.
 * ⚠ SYNAGOGA I CERKIEW WYŁĄCZNIE JAKO BUDYNKI.
 *
 * ⚠⚠ KRUSZYNIANY (w gminie Krynki) — PODSTAWA KĄTA:
 * W 1679 r. król JAN III SOBIESKI nadał Tatarom ziemie
 * w okolicach Krynek i Sokółki. MECZET TATARSKI: drewniany,
 * konstrukcja zrębowa na kamiennej podmurówce, wzniesiony
 * po 1679 r., pierwsza wzmianka 1782, obecna budowla
 * prawdopodobnie XVIII w., gruntowny remont 1846.
 * STATUS POMNIKA HISTORII.
 * SABANTUJ — tatarskie „święto pługa" po zakończeniu
 * wiosennych prac polowych; w Kruszynianach odbywa się
 * W LIPCU, CO DWA LATA; program artystyczny, kulinarny
 * i sportowy.
 *
 * ⚠⚠⚠ PIEREKACZEWNIK — RDZEŃ KĄTA:
 * Wpis na LISTĘ PRODUKTÓW TRADYCYJNYCH 20 LIPCA 2005 r.,
 * kategoria „gotowe dania i potrawy". BYŁ TO PIERWSZY PRODUKT
 * WPISANY NA KRAJOWĄ LISTĘ.
 * Rejestracja w UE jako GWARANTOWANA TRADYCYJNA SPECJALNOŚĆ
 * 1 LIPCA 2009 r.
 * ⚠ NUMERU ROZPORZĄDZENIA KOMISJI NIE PODAJĘ.
 * TECHNIKA (cytat gov.pl): „Cała umiejętność właściwego
 * wykonania polega na bardzo cienko rozwałkowanym
 * i rozciągniętym cieście."
 * Ciasto rozciąga się niemal do przezroczystości, wielokrotnie
 * przekłada farszem i zwija w rulon. PRZEKRÓJ: liczne warstwy
 * ciasta na przemian z farszem; kształt zewnętrzny LITERY „O",
 * po upieczeniu wygląda jak MUSZLA ŚLIMAKA.
 * ŚREDNICA OK. 30 cm, MASA OK. 3 kg.
 * FARSZE: baranina, wołowina, biały ser z rodzynkami,
 * masa jabłkowa; wersje słodkie także ze śliwkami.
 * BARWA złocista, KONSYSTENCJA zwarta i sprężysta,
 * z chrupiącą skórką.
 * PODANIE NA GORĄCO — wtedy WARSTWY SIĘ ROZDZIELAJĄ.
 * Pieczony w okrągłych MIEDZIANYCH NACZYNIACH.
 * ⚠ CZASU PIECZENIA („ok. 2 godziny") NIE PODAJĘ — zasada
 * projektu zabrania podawania czasów.
 * Nazwa od słowa oznaczającego „przewalać/przetaczać".
 * Ośrodki: KRUSZYNIANY I BOHONIKI (Bohoniki są w gminie
 * Sokółka — NIE MYLIĆ).
 * KRYNKI NIE NALEŻĄ DO CITTASLOW (nie potwierdzono).
 *
 * KĄT: CIASTO ROZCIĄGANE — czwarty rodzaj ciasta, o którym
 * prawie nikt nie pamięta.
 * Kąt od pierekaczewnika: potrawy, której cała trudność
 * polega na rozciągnięciu ciasta niemal do przezroczystości.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w domowej kuchni znamy trzy ciasta — kruche, drożdżowe
 *   i biszkoptowe — a jest jeszcze czwarte, najstarsze:
 *   CIASTO ROZCIĄGANE,
 * — że to jest jedno ciasto rozciągnięte tak cienko, że widać
 *   przez nie rękę, a warstwy powstają przez ZWIJANIE,
 *   nie przez składanie z masłem,
 * — CZYM SIĘ RÓŻNI OD FRANCUSKIEGO: francuskie składa się
 *   z warstwami tłuszczu i rośnie od pary, rozciągane
 *   nie rośnie — po prostu ma warstwy od początku,
 * — ŻE DECYDUJE GLUTEN I ODPOCZYNEK: ciasto musi być
 *   wyrobione, a potem odstawione, bo napięte nie da się
 *   rozciągnąć i pęka,
 * — że rozciąga się je RĘKAMI, grzbietem dłoni, nie wałkiem —
 *   i że to jest umiejętność, nie przepis,
 * — że dziury nie są katastrofą, bo warstw jest wiele,
 * — że ta sama zasada stoi za strudlem, za ciastem
 *   na sernik wiedeński i za wieloma wypiekami z południa
 *   i wschodu — czyli że to jest technika, nie ciekawostka,
 * — UCZCIWIE I WPROST: to urządzenie ZAGNIECIE ciasto,
 *   i to dobrze, ale ROZCIĄGNĄĆ GO NIE MOŻE. To jest praca
 *   rąk i tylko rąk,
 * — i że to dobrze pokazuje granicę: sprzęt przejmuje siłę,
 *   nie zręczność.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR — także żadnego
 *   „dwie godziny pieczenia".
 * — ŻADNYCH PROPORCJI I ŻADNEGO PRZEPISU na pierekaczewnik.
 *   Opisuję technikę ogólnie, nie podaję receptury cudzego
 *   produktu chronionego.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ TATARÓW POLSKO-LITEWSKICH OPISUJĘ Z SZACUNKIEM,
 *   jako żywą społeczność o żywej tradycji kulinarnej.
 *   ZERO egzotyzowania, ZERO folkloryzowania, ZERO kontekstu
 *   politycznego i religijnego poza tym, co niezbędne
 *   (Bajram jako okazja, przy której podaje się potrawę).
 *
 * ⚠ ETYKA — PODLASKIE:
 * — ZERO Zagłady, gett, pogromów, cmentarzy żydowskich.
 *   SYNAGOGĘ KAUKASKĄ wymieniam WYŁĄCZNIE jako budynek
 *   z 1850 r., dziś siedzibę ośrodka kultury.
 * — ZERO lat 1941/1943/1945, wysiedleń, pacyfikacji.
 * — ⚠⚠ ZERO GRANICY Z BIAŁORUSIĄ — Krynki leżą bardzo blisko
 *   granicy. Żadnej wzmianki, w żadnym kontekście.
 *   TWARDA GRANICA.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO podziemia i akcji zbrojnych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ciasto francuskie"
 * (Reszel) dotyczy ciasta składanego z tłuszczem. „Ciasto
 * parzone" (Lubawa) i „kruche ciasto" (Braniewo) dotyczą
 * innych rodzajów. „Dania układane warstwami" dotyczą
 * zapiekanek. „Drożdże świeże kontra suszone" (Pasym) dotyczą
 * spulchniacza. Tutaj chodzi o CIASTO ROZCIĄGANE jako czwarty,
 * osobny rodzaj — o warstwy powstające ze zwijania.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE POWTARZAM legendy o „drugim takim układzie w Paryżu".
 * — NIE ROZSTRZYGAM daty praw miejskich (1565 vs 1569).
 * — NIE PODAJĘ liczby sołectw, garbarni ani fabryk sukna.
 * — NIE PODAJĘ numeru rozporządzenia UE dla pierekaczewnika.
 * — NIE PODAJĘ receptury ani czasu pieczenia.
 * — NIE PRZYPISUJĘ Krynkom BOHONIK — to gmina Sokółka.
 * — NIE MYLĘ KRYNEK z KRYNICĄ-ZDRÓJ, KRYNICĄ MORSKĄ ani
 *   z KRYNICĄ, która jest sołectwem gminy Narewka.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 122, gmina 2 683 mieszkańców na 166 km²,
 *   28 miejscowości,
 * — już w 1578 r. istniały tu Stare i Nowe Miasto; w drugiej
 *   połowie XVIII w. Antoni Tyzenhauz przebudował miasto,
 *   nadając rynkowi formę sześcioboku, z którego naroży
 *   wybiega promieniście dwanaście prostych ulic — układ
 *   określany jako unikat na skalę krajową,
 * — prawa miejskie w drugiej połowie XVI w., utracone
 *   i przywrócone kilkakrotnie; ostatecznie odzyskane
 *   1 stycznia 2009 r.,
 * — miasto leży nad Krynką, na obrzeżach Puszczy Knyszyńskiej;
 *   w XIX w. było ośrodkiem garbarstwa i sukiennictwa,
 * — dzwonnica bramna z XVIII w., cerkiew Narodzenia NMP
 *   z 1864 r., synagoga kaukaska z 1850 r. (dziś ośrodek
 *   kultury) i kościół świętej Anny z lat 1907–1913 projektu
 *   Stefana Szyllera,
 * — w 1679 r. Jan III Sobieski nadał Tatarom ziemie w okolicach
 *   Krynek i Sokółki; w Kruszynianach stoi drewniany meczet
 *   tatarski o statusie Pomnika Historii, wzmiankowany
 *   w 1782 r. i gruntownie remontowany w 1846,
 * — w Kruszynianach obchodzi się co dwa lata, w lipcu, Sabantuj
 *   — tatarskie święto po zakończeniu wiosennych prac polowych,
 *   z programem kulinarnym,
 * — pierekaczewnik trafił na Listę Produktów Tradycyjnych
 *   20 lipca 2005 r. jako pierwszy produkt na tej liście,
 *   a 1 lipca 2009 r. został zarejestrowany w Unii Europejskiej
 *   jako Gwarantowana Tradycyjna Specjalność; jego wykonanie
 *   polega na bardzo cienko rozwałkowanym i rozciągniętym
 *   cieście, przekładanym farszem i zwijanym w kształt litery
 *   „O", o średnicy około trzydziestu centymetrów i masie
 *   około trzech kilogramów; farsze bywają mięsne, serowe
 *   i owocowe, a podany na gorąco rozdziela się na warstwy.
 */
export const KRYNKI: CityContent = {
  slug: "krynki",
  h1: "Thermomix Krynki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krynki — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Krynkach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krynki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krynkach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krynek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Krynki i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Znamy trzy ciasta. Jest czwarte, najstarsze — rozciągane.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krynkach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "ciasto-rozciagane",
      heading: "Ciasto rozciągnięte do przezroczystości — czyli czwarty rodzaj ciasta",
      paragraphs: [
        "W gminie Krynki leżą Kruszyniany. To tam, na ziemiach nadanych Tatarom przez Jana III Sobieskiego w 1679 roku, stoi drewniany meczet o statusie Pomnika Historii — i to stamtąd pochodzi pierekaczewnik. Trafił on na Listę Produktów Tradycyjnych 20 lipca 2005 roku jako pierwszy produkt w ogóle na tej liście, a cztery lata później został zarejestrowany w Unii Europejskiej jako Gwarantowana Tradycyjna Specjalność.",
        "Urzędowy opis zawiera zdanie, które chciałabym, żeby przeczytał każdy, kto piecze: „Cała umiejętność właściwego wykonania polega na bardzo cienko rozwałkowanym i rozciągniętym cieście”. Nie na składnikach. Nie na proporcjach. Na jednej czynności wykonanej rękami. Efekt to krąg o średnicy trzydziestu centymetrów i masie około trzech kilogramów, zwinięty w kształt litery „O”, który podany na gorąco rozdziela się na warstwy.",
        "I tu dochodzimy do rzeczy, którą uważam za lukę w domowej wiedzy o pieczeniu. Znamy trzy ciasta: kruche, drożdżowe i biszkoptowe. Ewentualnie francuskie jako czwarte, choć kupowane w sklepie. A istnieje jeszcze jedno, prawdopodobnie najstarsze ze wszystkich: ciasto rozciągane.",
        "Jego idea jest zupełnie inna niż wszystkich pozostałych. Nie ma tu warstw składanych z masłem ani spulchniacza. Jest jedno ciasto, rozciągnięte tak cienko, że widać przez nie rękę położoną pod spodem, a warstwy powstają dopiero przez zwinięcie tej płachty razem z farszem.",
        "Różnica wobec francuskiego jest zasadnicza i warto ją znać. Francuskie składa się wielokrotnie z warstwami tłuszczu i rośnie w piekarniku, bo para rozpycha te warstwy od środka. Rozciągane nie rośnie wcale — ono ma warstwy od początku, a piekarnik tylko je utrwala i zarumienia.",
        "O powodzeniu decydują dwie rzeczy i obie są niewidoczne. Pierwsza to gluten: ciasto musi być porządnie wyrobione, bo tylko rozwinięta siatka glutenowa wytrzyma rozciąganie i nie pęknie. Druga to odpoczynek: ciasto zaraz po wyrobieniu jest napięte i kurczy się z powrotem przy każdej próbie. Odstawione — rozluźnia się i daje się ciągnąć. Kto pominie ten krok, będzie walczył z ciastem i przegra.",
        "Rozciąga się je rękami, na grzbietach dłoni, przesuwając je od środka na zewnątrz — nie wałkiem. Wałek nie potrafi zejść tak cienko. To jest umiejętność, a nie przepis, i nabywa się jej wyłącznie przez powtarzanie; pierwsze próby będą podarte i to jest normalne. Zresztą dziury nie są katastrofą: skoro warstw będzie kilkanaście, jedna przerwana niczego nie psuje.",
        "Warto wiedzieć, że to nie jest ciekawostka, tylko cała rodzina technik. Ta sama zasada stoi za strudlem, za wieloma wypiekami z południa Europy i z Bliskiego Wschodu, i za cieniutkimi płatami ciasta, które kupujemy dziś mrożone. Kiedyś każdy z tych wypieków ciągnięto ręcznie na stole nakrytym obrusem.",
        "I teraz uczciwie o sprzęcie, bo tu granica jest wyjątkowo czysta. To urządzenie zagniecie takie ciasto bardzo dobrze — wyrobienie glutenu wymaga siły i czasu, a to jest dokładnie jego zadanie. Ale rozciągnąć go nie może i nigdy nie będzie mogło. To jest praca rąk, wyczucia i cierpliwości.",
        "Uważam, że to najlepszy możliwy przykład granicy, o której mówię na każdym spotkaniu: sprzęt przejmuje siłę, nie przejmuje zręczności. Wszystko, co polega na tym, że ręka czuje materiał i reaguje, zostaje po Waszej stronie — i dobrze, bo to jest właśnie ta część gotowania, której się nie chce nikomu oddawać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krynkach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli pieczecie i chcecie zobaczyć, jak urządzenie radzi sobie z wyrabianiem ciasta — powiedzcie to przy umawianiu. To akurat jego mocna strona i lepiej sprawdzić ją na własnym przepisie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krynkach"),
    sekcjaRaty("w Krynkach"),
    {
      id: "rodzina",
      heading: "Thermomix dla kryńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy przeszło dwa tysiące sto mieszkańców na niecałych czterech kilometrach kwadratowych, a cała gmina niespełna dwa tysiące siedemset na stu sześćdziesięciu sześciu — w mieście mieszka więc blisko cztery piąte ludności gminy. Krynki mają jeden z najbardziej niezwykłych układów urbanistycznych w Polsce: w drugiej połowie osiemnastego wieku Antoni Tyzenhauz przebudował miasto tak, że rynek przyjął formę sześcioboku, z którego naroży wybiega promieniście dwanaście prostych ulic — plan przypomina gwiazdę i określa się go jako unikat na skalę krajową. Prawa miejskie miasto otrzymało w drugiej połowie szesnastego wieku, kilkakrotnie je traciło i odzyskało ostatecznie 1 stycznia 2009 roku. Leży nad Krynką, na obrzeżach Puszczy Knyszyńskiej, a w dziewiętnastym wieku było ośrodkiem garbarstwa i sukiennictwa. Najstarszą budowlą jest osiemnastowieczna dzwonnica bramna; stoi tu też cerkiew Narodzenia Najświętszej Maryi Panny z 1864 roku, synagoga kaukaska z 1850, dziś siedziba ośrodka kultury, oraz kościół świętej Anny z lat 1907–1913 projektu Stefana Szyllera. W gminie leżą Kruszyniany z drewnianym meczetem tatarskim uznanym za Pomnik Historii — ziemie nadał tu Tatarom Jan III Sobieski w 1679 roku, a co dwa lata w lipcu obchodzi się tam Sabantuj.",
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

  districtsHeading: "Do których części gminy Krynki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu ośmiu miejscowości gminy, w tym do Kruszynian. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Krynki też przyjadę",
  nearbyParagraphs: [
    "Sokółka, Supraśl, Michałowo, Czarna Białostocka i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sokółka", "Supraśl", "Michałowo", "Czarna Białostocka"],

  about: blokOMnie("do Krynek", "w Krynkach i całej gminie", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krynek bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy, w tym do Kruszynian. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Krynki w powiecie sokólskim to nie Krynica-Zdrój ani Krynica Morska.",
    },
    ...faqWspolne("w Krynkach"),
    {
      question: "Czym ciasto rozciągane różni się od francuskiego?",
      answer:
        "Francuskie składa się wielokrotnie z warstwami tłuszczu i rośnie w piekarniku, bo para rozpycha te warstwy. Rozciągane nie rośnie wcale — jedno ciasto rozciąga się tak cienko, że widać przez nie rękę, a warstwy powstają dopiero przez zwinięcie płachty razem z farszem.",
    },
    {
      question: "Dlaczego ciasto kurczy się przy rozciąganiu?",
      answer:
        "Bo jest napięte. Trzeba je porządnie wyrobić, żeby siatka glutenowa wytrzymała ciągnięcie, a potem koniecznie odstawić — dopiero rozluźnione daje się rozciągać. Kto pominie odpoczynek, będzie z ciastem walczył i przegra. Rozciąga się je rękami, na grzbietach dłoni, nie wałkiem.",
    },
    {
      question: "Czy Thermomix zrobi ciasto rozciągane?",
      answer:
        "Zagniecie je bardzo dobrze, bo wyrobienie glutenu wymaga siły i czasu — to jego zadanie. Ale rozciągnąć go nie może i nigdy nie będzie mogło. To najlepszy przykład granicy, o której mówię na każdym spotkaniu: sprzęt przejmuje siłę, nie przejmuje zręczności.",
    },
  ],

  geo: { lat: 53.2678, lng: 23.7728 },
};
