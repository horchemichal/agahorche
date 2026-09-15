import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * PIONKI — powiat radomski, woj. mazowieckie.
 * MIASTO 15 922 (GUS 31.12.2024), 18,4 km², 865,3 os./km²,
 * 154 m n.p.m.
 * ⚠ BRIEF PODAWAŁ ~18 tys. — GUS mówi 15 922. UŻYWAM GUS.
 *
 * ⚠⚠ HOMONIMY: PIONKI-MIASTO (gmina miejska) ≠ GMINA WIEJSKA
 * PIONKI (osobna jednostka, siedziba w Pionkach, ale obejmuje
 * Jedlnię i inne wsie) ≠ PIASECZNO. FAQ to rozróżnia.
 * ⚠ Wydarzenie „Miód z Mazowsza" odbyło się w GMINIE WIEJSKIEJ
 *   Pionki (Jedlnia), NIE w mieście. NIE PRZYPISUJĘ GO MIASTU.
 *
 * HISTORIA:
 * — 1391 — pierwsza wzmianka: dwie wsie, Zagożdżon i Pionki,
 *   nad rzeką Zagożdżonką; 1467 — legenda o polowaniu
 *   Kazimierza Jagiellończyka przy młynie Zagożdżon,
 * — ⚠⚠ MIASTO ZBUDOWANE OD ZERA W XX w.: 1922 — decyzja
 *   o budowie zakładu; wiosna 1923 — początek budowy;
 *   1923 — baraki mieszkalne, warsztat, bocznica kolejowa;
 *   1925 — nowy dworzec, Kasa Chorych, spółdzielnia;
 *   1928 — poczta; 1929 — stadion i Staw Górny; 1931 — gmina
 *   Pionki; 9 sierpnia 1932 — zmiana nazwy z „Zagożdżon"
 *   na „Pionki"; 1938 — basen miejski; 1939 — status osady
 *   miejskiej (~7700 mieszk.); 1954 — prawa miejskie,
 * — osiedla: KOLONIA ROBOTNICZA, KOLONIA URZĘDNICZA,
 *   NOWA KOLONIA (od 1928),
 * — ⚠⚠ CHARAKTERU ZAKŁADU NIE OPISUJĘ I NIE NAZYWAM GO.
 *   ZERO TEMATU PRZEMYSŁU ZBROJENIOWEGO, ZERO UPADKU
 *   PRZEMYSŁU. Piszę wyłącznie „zakład", „budowa zakładu".
 *   TWARDA GRANICA.
 *
 * GEOGRAFIA — PODSTAWA KĄTA:
 * — miasto leży W ŚRODKU PUSZCZY KOZIENICKIEJ, nad
 *   Zagożdżonką; jest siedzibą Zespołu ds. Kozienickiego
 *   Parku Krajobrazowego; Staw Górny ma 16 ha,
 * — REZERWAT PRZYRODY „PIONKI": utworzony 1982, 81,60 ha;
 *   chroni las mieszany (grab, sosna, jodła, dąb) i grupę
 *   PONAD DWUSTULETNICH DĘBÓW — pomników przyrody,
 * — ⚠⚠ REZERWAT „ŹRÓDŁO KRÓLEWSKIE": utworzony w 2000 r.;
 *   woda jest opisywana jako KRYSTALICZNIE CZYSTA I ZDATNA
 *   DO PICIA, co dziś rzadkie; wg tradycji pił z niego
 *   Władysław Jagiełło podczas polowań. TO JEST KOTWICA.
 *   ⚠ POWIERZCHNI REZERWATU NIE PODAJĘ — nieustalona.
 *   ⚠ NAZWY „Źródło Miłości" NIE UŻYWAM — to przydomek.
 *
 * ZABYTKI: kościół św. Barbary 1928–1933 (proj. Stefan
 * Szyller); basen miejski 1938 (proj. E. Czyż); budynek
 * międzywojennego kasyna przy ul. Zakładowej — dziś Centrum
 * Aktywności Lokalnej z Izbą Czarnej Płyty; dworzec 1925.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE ZNALEZIONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH.
 * ⚠ PAPRYKA PRZYTYCKA TO GMINY PRZYTYK, POTWORÓW, RADZANÓW,
 *   KLWÓW I WYŚMIERZYCE — NA ZACHÓD OD RADOMIA.
 *   PIONKI LEŻĄ NA WSCHÓD. NIE PRZYPISUJĘ.
 *
 * KĄT: WODA DO GOTOWANIA — z kranu, filtrowana czy
 * butelkowana, i kiedy to w ogóle ma znaczenie.
 * Kąt od rezerwatu „Źródło Królewskie" pod Pionkami,
 * utworzonego w 2000 roku, gdzie woda jest krystalicznie
 * czysta i zdatna do picia — co dziś jest rzadkością.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że woda jest w większości dań największym składnikiem
 *   objętościowo, a jednocześnie jedynym, o którym nikt
 *   nigdy nie myśli,
 * — ⚠⚠ RZECZ NAJWAŻNIEJSZA I UCZCIWA: W WIĘKSZOŚCI DAŃ
 *   NIE MA TO ŻADNEGO ZNACZENIA. Woda z kranu jest
 *   do gotowania makaronu, ziemniaków i zup wystarczająca
 *   i nie ma sensu wydawać na butelkowaną. PISZĘ TO WPROST
 *   I NA POCZĄTKU — to jest cała teza,
 * — GDZIE RÓŻNICA JEST SŁYSZALNA: tam, gdzie wody się
 *   NIE GOTUJE ALBO NIE ODPARUJE, czyli w napojach,
 *   naparach i w lodzie do drinków — bo tam pije się samą
 *   wodę, a nie danie,
 * — ŻE DRUGIM TAKIM MIEJSCEM JEST WYPIEK CHLEBA I CIASTA
 *   DROŻDŻOWEGO, gdzie woda jest jednym z trzech składników,
 * — ŻE SMAK WODY Z KRANU ZMIENIA SIĘ W CIĄGU DOBY i między
 *   miastami — i że to nie jest wyobraźnia,
 * — ⚠ RÓŻNICE MIĘDZY WODAMI OPISUJĘ WYŁĄCZNIE JAKO SMAK
 *   I ZAPACH, NIGDY JAKO JAKOŚĆ, BEZPIECZEŃSTWO
 *   CZY ZDROWOTNOŚĆ. TWARDA GRANICA.
 * — CO DZIAŁA BEZ WYDAWANIA PIENIĘDZY: odstanie wody
 *   w dzbanku przez kilkanaście minut — zapach chloru
 *   ulatuje sam,
 * — ŻE FILTR DZBANKOWY ZMIENIA SMAK, ale wymaga wymiany
 *   wkładu i przechowywania w lodówce; zaniedbany filtr
 *   jest gorszy niż jego brak,
 * — ŻE WODA BUTELKOWANA MA SENS W NAPOJACH I NAPARACH,
 *   a w garnku jest wyrzucaniem pieniędzy,
 * — ŻE WODA Z KRANU CIEPŁA NIE NADAJE SIĘ DO GOTOWANIA —
 *   nabiera się zimną i podgrzewa,
 * — ŻE NIE WOLNO GOTOWAĆ WODY WIELOKROTNIE W KÓŁKO
 *   — ⚠ PISZĘ WYŁĄCZNIE, ŻE SMAK ROBI SIĘ PŁASKI,
 *     BEZ ŻADNYCH TEZ ZDROWOTNYCH. TWARDA GRANICA.
 * — ŻE ILOŚĆ WODY BYWA WAŻNIEJSZA NIŻ JEJ RODZAJ —
 *   ⚠ ODSYŁAM DO OSOBNEJ STRONY, NIE ROZWIJAM,
 * — UCZCIWIE: urządzenie nie poprawia wody i nie ma
 *   żadnego filtra,
 * — ale robi jedną rzecz, która przy naparach ma znaczenie:
 *   utrzymuje stałą temperaturę, więc woda do herbaty
 *   nie musi być wrzątkiem, a to przy delikatnych herbatach
 *   bywa całą różnicą.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR W LICZBACH.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH, SANITARNYCH
 *   I TOKSYKOLOGICZNYCH. ZERO tez o jakości wody
 *   wodociągowej, o ołowiu, azotanach, bakteriach,
 *   „mikroplastiku" i o tym, czy wodę z kranu „można" pić.
 *   ZERO tez o wielokrotnym gotowaniu jako szkodliwym.
 *   TWARDA GRANICA — PISZĘ WYŁĄCZNIE O SMAKU.
 * — ŻADNYCH NAZW FIRM ANI MAREK WODY I FILTRÓW.
 * — ZERO porównań „która woda lepsza".
 * — ⚠ ZERO ZACHĘT DO PICIA WODY ZE ŹRÓDEŁ I STRUMIENI.
 *   Opis rezerwatu podaję jako cytat z opisu przyrodniczego,
 *   NIE jako zaproszenie. TWARDA GRANICA.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych i zbrojeniowych.
 * — ⚠⚠ ZERO CHARAKTERU I NAZWY ZAKŁADU, WOKÓŁ KTÓREGO
 *   ZBUDOWANO MIASTO. TWARDA GRANICA.
 * — ZERO upadku przemysłu.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „twarda woda" (Chełm) dotyczy TWARDOŚCI WODY, kamienia
 *   i jej wpływu na gotowanie strączków oraz na czajnik.
 *   ⚠⚠ TEMATU TWARDOŚCI I KAMIENIA NIE PORUSZAM W OGÓLE.
 * — „WODA PO GOTOWANIU — czy wylewać" (Ryn) dotyczy WYWARU
 *   POZOSTAŁEGO PO GOTOWANIU.
 * — „SKROPLINY I WYKIPIENIE" (Skarszewy) dotyczą WODY
 *   ZBIERAJĄCEJ SIĘ POD POKRYWKĄ.
 * — „ILE WODY NAPRAWDĘ POTRZEBA" (Warta) dotyczy ILOŚCI.
 * — „herbaty, napary i gorące napoje" (Głuchołazy) dotyczą
 *   TEMPERATURY PARZENIA.
 * — „napoje robione w domu" (Nałęczów) dotyczą NAPOJÓW.
 * TUTAJ chodzi WYŁĄCZNIE O ŹRÓDŁO WODY — kran, filtr,
 * butelka — i o to, że w większości dań nie ma to znaczenia.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni rezerwatu „Źródło Królewskie".
 * — NIE NAZYWAM ani nie opisuję zakładu, wokół którego
 *   zbudowano miasto.
 * — NIE PRZYPISUJĘ miastu wydarzeń z gminy wiejskiej Pionki.
 * — NIE PRZYPISUJĘ miastu papryki przytyckiej.
 * — NIE ZACHĘCAM do picia wody ze źródeł.
 * — NIE PISZĘ, czy wodę z kranu „można" pić — piszę tylko,
 *   jak smakuje.
 * — NIE MYLĘ MIASTA PIONKI z GMINĄ WIEJSKĄ PIONKI.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka pochodzi z 1391 r. i dotyczy dwóch
 *   wsi — Zagożdżonu i Pionek — nad rzeką Zagożdżonką,
 * — miasto zbudowano od zera w XX w.: decyzję o budowie
 *   zakładu podjęto w 1922 r., budowę zaczęto wiosną 1923,
 *   w tym samym roku stanęły baraki mieszkalne, warsztat
 *   i bocznica kolejowa; w 1925 powstały nowy dworzec,
 *   Kasa Chorych i spółdzielnia, w 1928 poczta, w 1929
 *   stadion i Staw Górny, w 1931 gmina Pionki, 9 sierpnia
 *   1932 zmieniono nazwę z Zagożdżonu na Pionki, w 1938
 *   otwarto basen miejski, w 1939 miejscowość miała status
 *   osady miejskiej i około 7700 mieszkańców, a prawa
 *   miejskie otrzymała w 1954 r.,
 * — osiedla noszą nazwy Kolonia Robotnicza, Kolonia
 *   Urzędnicza i Nowa Kolonia (ta ostatnia od 1928 r.),
 * — miasto leży w środku Puszczy Kozienickiej, nad
 *   Zagożdżonką, na wysokości 154 m n.p.m., i jest siedzibą
 *   Zespołu do spraw Kozienickiego Parku Krajobrazowego;
 *   Staw Górny ma 16 ha,
 * — rezerwat przyrody „Pionki" utworzono w 1982 r. na 81,60 ha;
 *   chroni las mieszany z grabem, sosną, jodłą i dębem oraz
 *   grupę ponad dwustuletnich dębów będących pomnikami
 *   przyrody, a jodła i dąb odnawiają się tu naturalnie;
 *   w podszycie rosną widłak goździsty, konwalia majowa
 *   i przylaszczka,
 * — rezerwat „Źródło Królewskie" utworzono w 2000 r.; wodę
 *   opisuje się jako krystalicznie czystą i zdatną do picia,
 *   a według tradycji pił z niego Władysław Jagiełło podczas
 *   polowań w Puszczy Kozienickiej,
 * — kościół św. Barbary powstał w latach 1928–1933 według
 *   projektu Stefana Szyllera, basen miejski w 1938 r.,
 *   dworzec w 1925 r., a w budynku międzywojennego kasyna
 *   przy ulicy Zakładowej działa dziś Centrum Aktywności
 *   Lokalnej z Izbą Czarnej Płyty.
 */
export const PIONKI: CityContent = {
  slug: "pionki",
  h1: "Thermomix Pionki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pionki — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Pionkach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pionki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pionkach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pionek z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Pionki"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "W większości dań rodzaj wody nie ma znaczenia. W kilku ma — i tylko o te chodzi.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pionkach – jak wygląda prezentacja?",
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
      id: "woda-do-gotowania",
      heading: "Źródło Królewskie w Puszczy Kozienickiej — czyli o wodzie, z której się gotuje",
      paragraphs: [
        "Pod Pionkami, w Puszczy Kozienickiej, leży rezerwat „Źródło Królewskie”, utworzony w 2000 roku. W opisach przyrodniczych wodę z tego źródła określa się jako krystalicznie czystą i zdatną do picia — a to dziś rzadkość na tyle dużą, że stała się powodem objęcia miejsca ochroną. Według tradycji pił z niego Władysław Jagiełło podczas polowań.",
        "To dobry punkt wyjścia do rozmowy o składniku, który w większości dań jest największy objętościowo, a myśli o nim mniej więcej nikt: o wodzie, z której gotujemy.",
        "I od razu powiem rzecz najważniejszą, bo jest uczciwa i oszczędza pieniądze: w większości dań nie ma to żadnego znaczenia. Do makaronu, do ziemniaków, do zupy, do kompotu woda z kranu jest zupełnie wystarczająca. Kupowanie butelkowanej do garnka to wyrzucanie pieniędzy i nic więcej. Jeśli ktoś oczekiwał, że napiszę odwrotnie, to niestety nie napiszę.",
        "Są jednak dwa miejsca, w których różnicę naprawdę słychać — i warto wiedzieć, które to są.",
        "Pierwsze to wszystko, czego się nie gotuje ani nie odparowuje: napary, herbata, kawa, lemoniada, lód do napojów. Tam pije się właściwie samą wodę, więc jej smak jest smakiem napoju. Ta sama herbata zaparzona na wodzie z dwóch różnych kranów potrafi być wyraźnie inna.",
        "Drugie to wypieki — chleb i ciasto drożdżowe, gdzie woda jest jednym z trzech albo czterech składników i nie ma się za czym schować.",
        "Warto też wiedzieć, że smak wody z kranu zmienia się w ciągu doby i bardzo różni się między miastami. To nie jest wyobraźnia ani przewrażliwienie; ludzie, którzy się przeprowadzili, mówią o tym niemal zawsze.",
        "Co pomaga bez wydawania pieniędzy? Odstanie wody. Wystarczy nalać ją do dzbanka i zostawić na kilkanaście minut — zapach chloru, który najbardziej przeszkadza w herbacie, po prostu ulatuje. To najtańsza rzecz, jaką można w tym temacie zrobić, i przy naparach robi największą różnicę.",
        "Filtr dzbankowy też zmienia smak, ale ma swoje warunki: wkład trzeba wymieniać, a przefiltrowaną wodę trzymać w lodówce. Filtr zaniedbany, z wkładem stojącym od pół roku, jest gorszy niż jego brak — i to jest chyba najczęstszy błąd w tej całej sprawie.",
        "Woda butelkowana ma sens tam, gdzie się ją pije: w napojach, naparach, do niemowlęcia. W garnku z makaronem nie ma żadnego.",
        "Dwie drobne rzeczy na koniec. Do gotowania nabiera się wodę zimną, nie ciepłą z kranu — ciepła stoi w bojlerze i w rurach dłużej, i po prostu inaczej smakuje. I nie warto w kółko przegotowywać tej samej wody w czajniku: smak robi się płaski, jakby coś z niego uszło. Wystarczy dolać świeżej.",
        "Osobna sprawa to ilość wody, nie jej rodzaj — a ona bywa dla dania znacznie ważniejsza. O tym pisałam jednak w innym miejscu.",
        "Teraz uczciwie o sprzęcie. Thermomix nie ma filtra, nie poprawia wody i nie zmienia jej smaku. Cokolwiek wlejecie, takie zostanie.",
        "Jedna rzecz się jednak łączy, akurat z tym miejscem, gdzie woda ma znaczenie. Urządzenie utrzymuje ustawioną temperaturę, więc woda do herbaty nie musi być wrzątkiem — a przy herbatach zielonych i delikatnych czarnych to bywa całą różnicą między naparem łagodnym a cierpkim. Wody to nie poprawi, ale pozwala nie zepsuć tego, co się z nią robi.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pionkach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu pijecie dużo herbaty albo kawy — powiedzcie przy umawianiu, pokażę, co daje trzymanie stałej temperatury przy parzeniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pionkach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pionkowskiej rodziny",
      paragraphs: [
        "Pionki liczą blisko szesnaście tysięcy mieszkańców na osiemnastu kilometrach kwadratowych i leżą na wysokości stu pięćdziesięciu czterech metrów nad poziomem morza, w środku Puszczy Kozienickiej, nad Zagożdżonką. Pierwsza wzmianka pochodzi z 1391 roku i dotyczy dwóch wsi — Zagożdżonu i Pionek. Samo miasto zbudowano jednak od zera w XX wieku: decyzję o budowie zakładu podjęto w 1922, budowę zaczęto wiosną 1923 i w tym samym roku stanęły baraki mieszkalne, warsztat i bocznica kolejowa. W 1925 powstały nowy dworzec, Kasa Chorych i spółdzielnia, w 1928 poczta, w 1929 stadion i Staw Górny o powierzchni szesnastu hektarów, w 1931 gmina, a 9 sierpnia 1932 zmieniono nazwę z Zagożdżonu na Pionki. W 1938 otwarto basen miejski, w 1939 miejscowość miała status osady miejskiej i około siedmiu i pół tysiąca mieszkańców, a prawa miejskie otrzymała w 1954 roku. Osiedla noszą nazwy Kolonia Robotnicza, Kolonia Urzędnicza i Nowa Kolonia. Miasto jest siedzibą Zespołu do spraw Kozienickiego Parku Krajobrazowego. W 1982 roku utworzono tu rezerwat przyrody „Pionki” o powierzchni ponad osiemdziesięciu hektarów, chroniący las mieszany z grabem, sosną, jodłą i dębem oraz grupę ponad dwustuletnich dębów będących pomnikami przyrody; jodła i dąb odnawiają się tam naturalnie, a w podszycie rosną widłak goździsty, konwalia majowa i przylaszczka. W 2000 roku powstał rezerwat „Źródło Królewskie”, którego wodę opisuje się jako krystalicznie czystą. Kościół świętej Barbary wzniesiono w latach 1928–1933 według projektu Stefana Szyllera, basen miejski w 1938, dworzec w 1925, a w budynku międzywojennego kasyna przy ulicy Zakładowej działa dziś Centrum Aktywności Lokalnej z Izbą Czarnej Płyty.",
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

  districtsHeading: "Do których części Pionek dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — na Kolonię Robotniczą, Kolonię Urzędniczą, Nową Kolonię i do pozostałej zabudowy. Dojeżdżam też do miejscowości w gminie wiejskiej: Jedlni i Jedlni-Kolonii, Suskowoli, Suchej, Augustowa, Lasek, Zalesia, Żdżar, Poświętnego i Czarnej Wsi.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Kolonia Robotnicza", "Kolonia Urzędnicza", "Nowa Kolonia"],

  nearbyHeading: "Poza Pionki też przyjadę",
  nearbyParagraphs: [
    "Radom, Kozienice, Zwoleń, Jedlnia-Letnisko i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Radom", "Kozienice", "Zwoleń"],

  about: blokOMnie("do Pionek", "w Pionkach", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pionek bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — na Kolonię Robotniczą, Kolonię Urzędniczą i Nową Kolonię — oraz do miejscowości w gminie wiejskiej Pionki, w tym do Jedlni i Suskowoli. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pionkach"),
    {
      question: "Czy do gotowania warto kupować wodę butelkowaną?",
      answer:
        "W większości dań nie. Do makaronu, ziemniaków, zupy czy kompotu woda z kranu jest zupełnie wystarczająca i butelkowana niczego nie poprawi. Sens ma tam, gdzie wodę się pije: w napojach i naparach.",
    },
    {
      question: "Gdzie rodzaj wody naprawdę słychać?",
      answer:
        "Tam, gdzie wody się nie gotuje ani nie odparowuje — w herbacie, kawie, lemoniadzie i w lodzie do napojów, bo tam pije się właściwie samą wodę. Drugim takim miejscem są wypieki, gdzie woda jest jednym z trzech albo czterech składników.",
    },
    {
      question: "Jak poprawić smak wody z kranu bez wydawania pieniędzy?",
      answer:
        "Nalać ją do dzbanka i zostawić na kilkanaście minut — zapach chloru, który najbardziej przeszkadza w herbacie, ulatuje sam. Warto też nabierać wodę zimną, nie ciepłą z kranu, i nie przegotowywać w kółko tej samej wody w czajniku, bo smak robi się płaski.",
    },
  ],

  geo: { lat: 51.4758, lng: 21.45 },
};
