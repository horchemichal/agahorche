import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * KORSZE — gmina miejsko-wiejska w powiecie kętrzyńskim.
 * MIASTO 3 911, GMINA 8 632 (GUS 31.12.2024). 23 SOŁECTWA.
 * ⚠ Wcześniejsza notatka projektowa podawała 4 200 — ZAWYŻONE.
 *
 * PRAWA MIEJSKIE 2 WRZEŚNIA 1962 r. — nadane w PRL, nie przez
 * zakon ani króla pruskiego. To jedno z najmłodszych miast
 * województwa. Osada od XIV w.
 * ⚠ OBALONE: „stare pruskie miasto" — miasto ma prawa
 * od 1962 r.
 * PRZYNALEŻNOŚĆ: BARCJA / PRUSY DOLNE — ale ⚠ POTWIERDZENIE
 * JEST POŚREDNIE (nazwa lokalnej organizacji). NIE PISZĘ tego
 * kategorycznie; piszę tylko, że to ani Warmia, ani Mazury.
 *
 * KOLEJ: linia z Torunia przez Olsztyn uruchomiona
 * 27 LISTOPADA 1871 r. Węzeł DZIAŁA w 2026 r. — krzyżują się
 * linie nr 353 i nr 38. 14 GRUDNIA 2025 r. pociągi wróciły
 * na zmodernizowany odcinek Giżycko–Korsze po dwóch latach
 * prac; prędkość do 160 km/h.
 * ⚠ NIE PISZĘ o kierunku Skandawa — to przejście graniczne.
 * TRZY KOLEJOWE WIEŻE CIŚNIEŃ, każda o INNEJ TECHNOLOGII
 * ZBIORNIKA: 1890 (odbudowana 1915, zbiornik Intze, 150 m³,
 * wys. 17,90 m), 1915 (zbiornik Klönne, kulisty), 1938 przy
 * parowozowni (zbiornik Barkhausen). Pierwsza w rejestrze
 * zabytków.
 * ⚠ OBALONE: „Klönne — jedna z trzech na świecie" — źródła
 * specjalistyczne tego NIE potwierdzają. NIE UŻYWAM tej liczby.
 * KOŚCIÓŁ PODWYŻSZENIA KRZYŻA ŚWIĘTEGO — 1903 r.
 * CERKIEW PRAWOSŁAWNA ŚW. APOSTOŁÓW PIOTRA I PAWŁA
 * (dawny kościół ewangelicki) — 1905 r.
 * CYKLICZNIE: Dni Korsz, Międzynarodowy Plener Malarski.
 * ⚠ OBALONE: Korsze NIE należą do sieci Cittaslow — jedyne
 * z tej piątki. NIE PISZĘ, że należą.
 *
 * KĄT: RODZAJE MĄKI — ta sama nazwa, różne zachowanie.
 * Kąt od trzech wież ciśnień, które robią to samo, a każda
 * inną technologią.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że „mąka" to nie jest jeden produkt i że zamiana jednej
 *   na drugą zmienia danie bardziej niż większość dodatków,
 * — że o zachowaniu mąki decyduje przede wszystkim ILOŚĆ
 *   BIAŁKA i STOPIEŃ PRZEMIAŁU, a nie marka,
 * — że typ na opakowaniu to liczba mówiąca o zawartości
 *   składników mineralnych, a nie o „jakości",
 * — do czego która pasuje w dużym uproszczeniu: drobna
 *   i o niskim typie do ciast, mocniejsza do chleba
 *   i drożdżowego, pełnoziarnista wchłania więcej płynu,
 * — że mąki bezglutenowe zachowują się zupełnie inaczej
 *   i nie da się ich podmienić jeden do jednego,
 * — że w tym urządzeniu różnice widać wcześniej niż
 *   w garnku, bo maszyna nie „czuje" ciasta ręką,
 * — i ODMOWA: nie doradzam nic o diecie bezglutenowej
 *   ze względów zdrowotnych.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ani przeliczników mąka–płyn.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH: zero o celiakii,
 *   nietolerancji i o tym, która mąka jest zdrowsza.
 *   ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH NAZW FIRM ani marek mąki.
 * — NIE PISZĘ, że Korsze są w Cittaslow.
 * — NIE UŻYWAM liczby „trzy na świecie" o zbiorniku Klönne.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta ani nazw miejscowości
 *   leżących dziś w obwodzie kaliningradzkim.
 * — ZERO granicy i przejścia granicznego w Skandawie.
 * — ZERO roku 1945 i zniszczeń wież w działaniach wojennych.
 * — ZERO wysiedleń.
 * — ZERO znaleziska archeologicznego z grobami.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Mąka i mielenie"
 * dotyczą mielenia ziarna w mieście z czynnym młynem.
 * „Zasmażka" (Ozorków) dotyczy mąki z tłuszczem jako bazy.
 * „Zagęszczanie" (Barczewo) dotyczy ratowania zbyt rzadkiego
 * dania. „Ciasto drożdżowe" dotyczy wyrabiania. Tutaj chodzi
 * o RÓŻNICE MIĘDZY RODZAJAMI MĄKI jako surowca.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PRZYPISUJĘ Korsz kategorycznie do Barcji.
 * — NIE PODAJĘ numerów rejestru zabytków dla kościoła
 *   i cerkwi.
 * — NIE PISZĘ, czy elektryfikacja linii została formalnie
 *   dopuszczona do eksploatacji.
 * — NIE PODAJĘ stanu wież nr 2 i 3.
 * — NIE PRZYPISUJĘ Korszom produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego; „dzyndzałki" pochodzą
 *   z gminy Kętrzyn.
 * — NIE MYLĘ miasta Korsze ze stacją Korsze ani z Kętrzynem.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 3 911, gmina 8 632 mieszkańców, 23 sołectwa,
 * — prawa miejskie nadano 2 września 1962 r.; osada istniała
 *   od XIV w.,
 * — linię kolejową uruchomiono 27 listopada 1871 r.; węzeł
 *   działa do dziś, krzyżują się tu dwie linie,
 * — 14 grudnia 2025 r. pociągi wróciły na zmodernizowany
 *   odcinek Giżycko–Korsze po dwóch latach prac,
 * — w mieście stoją trzy kolejowe wieże ciśnień z 1890,
 *   1915 i 1938 r., każda z innym typem zbiornika,
 * — kościół Podwyższenia Krzyża Świętego z 1903 r.,
 * — cerkiew prawosławna świętych Apostołów Piotra i Pawła
 *   z 1905 r., w dawnym kościele ewangelickim,
 * — cyklicznie odbywają się Dni Korsz i Międzynarodowy
 *   Plener Malarski.
 */
export const KORSZE: CityContent = {
  slug: "korsze",
  h1: "Thermomix Korsze – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Korsze (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Korszach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Korsze — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Korszach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Korsz z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Korsze i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "„Mąka” to nie jest jeden produkt. Podmiana zmienia więcej niż większość dodatków.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Korszach – jak wygląda prezentacja?",
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
      id: "rodzaje-maki",
      heading: "Trzy wieże ciśnień, trzy technologie — czyli o rodzajach mąki",
      paragraphs: [
        "W Korszach stoją trzy kolejowe wieże ciśnień: z 1890, 1915 i 1938 roku. Każda robiła dokładnie to samo — trzymała wodę pod ciśnieniem dla parowozów — i każda ma zbiornik zbudowany w innej technologii. Z zewnątrz to trzy wieże, w środku trzy różne rozwiązania tego samego problemu. Samo miasto wyrosło z węzła kolejowego uruchomionego 27 listopada 1871 roku, a prawa miejskie dostało dopiero 2 września 1962 — to jedno z najmłodszych miast w województwie, choć osada stała tu od czternastego wieku.",
        "Trzy rzeczy, które wyglądają tak samo, a zachowują się inaczej, to dobry wstęp do składnika, przy którym prawie wszyscy zakładają, że to jeden produkt: do mąki.",
        "Bo „mąka” na liście składników nie znaczy prawie nic. Zamiana jednej na drugą zmienia danie mocniej niż większość dodatków, o które ludzie się martwią — i częściej niż cokolwiek innego stoi za pytaniem „dlaczego wyszło inaczej niż zwykle”.",
        "Decydują dwie rzeczy, i żadną z nich nie jest marka. Pierwsza to ilość białka: im więcej, tym mocniejsze ciasto, bardziej sprężyste, lepsze na chleb i drożdżowe. Druga to stopień przemiału: im drobniejsza i bardziej oczyszczona mąka, tym delikatniejszy wypiek.",
        "Warto przy okazji rozbroić nieporozumienie z typem na opakowaniu. Ta liczba nie mówi o jakości ani o tym, że coś jest lepsze. Mówi o zawartości składników mineralnych, czyli pośrednio o tym, ile z ziarna zostało w mące. Niższy typ to mąka jaśniejsza i bardziej oczyszczona, wyższy — ciemniejsza i pełniejsza. Tyle.",
        "W dużym uproszczeniu: mąki drobne i o niskim typie do ciast i naleśników, mocniejsze do chleba i drożdżowego, pełnoziarniste do wypieków o wyraźnym smaku — z tym, że one wchłaniają wyraźnie więcej płynu, więc to samo ciasto zrobione na pełnoziarnistej będzie zbite, jeśli nie dolejecie. To najczęstsza przyczyna nieudanej „zdrowszej wersji” ulubionego przepisu.",
        "Osobna sprawa to mąki bezglutenowe — ryżowa, kukurydziana, gryczana, migdałowa. One nie zachowują się jak pszenna i nie da się ich podmienić jeden do jednego. Nie mają tego, co daje ciastu sprężystość, więc przepis trzeba mieć od razu pisany pod nie, a nie przerabiać.",
        "W tym urządzeniu różnice widać wcześniej niż w garnku i to jest uczciwa uwaga. Ręka wyczuwa, że ciasto jest za suche, i sama dolewa. Maszyna nie czuje nic — zrobi dokładnie to, co jej zlecicie, z tego, co wsypaliście. Dlatego przy zmianie mąki warto zajrzeć wcześniej niż zwykle.",
        "I granica: nie doradzę Wam nic o diecie bezglutenowej ze względów zdrowotnych, o celiakii ani o tym, która mąka jest zdrowsza. Mówię wyłącznie o tym, jak się zachowują w cieście. Wszystko inne to dziedzina lekarza i dietetyka.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Korszach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli pieczecie na innej mące niż zwykła pszenna — powiedzcie przy umawianiu. Wolę zrobić coś na Waszej mące niż na modelowej, bo różnica bywa większa, niż ktokolwiek się spodziewa.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Korszach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla korszeńskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko cztery tysiące mieszkańców, a cała gmina ponad osiem i pół tysiąca, w dwudziestu trzech sołectwach. Korsze wyrosły z kolei: linię uruchomiono 27 listopada 1871 roku, a węzeł działa do dziś — w grudniu 2025 pociągi wróciły tu na zmodernizowany odcinek od strony Giżycka po dwóch latach prac. Prawa miejskie miasto dostało dopiero 2 września 1962 roku, choć osada istniała od czternastego wieku; historycznie to ani Warmia, ani Mazury. Najciekawsze zabytki są kolejowe: trzy wieże ciśnień z 1890, 1915 i 1938 roku, każda z innym typem zbiornika. Poza tym stoją tu kościół Podwyższenia Krzyża Świętego z 1903 roku i cerkiew prawosławna z 1905, w dawnym kościele ewangelickim. Cyklicznie odbywają się Dni Korsz i Międzynarodowy Plener Malarski.",
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

  districtsHeading: "Do których części gminy Korsze dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu trzech sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Korsze też przyjadę",
  nearbyParagraphs: [
    "Kętrzyn, Bartoszyce, Reszel, Bisztynek, Sępopol i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Reszel", "Bisztynek", "Sępopol", "Górowo Iławeckie"],

  about: blokOMnie("do Korsz", "w Korszach i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Korsz bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu trzech sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o miasto Korsze w powiecie kętrzyńskim, a nie o samą stację kolejową o tej nazwie, która w rozkładach bywa bardziej rozpoznawalna niż miasto.",
    },
    ...faqWspolne("w Korszach"),
    {
      question: "Czy rodzaj mąki naprawdę robi różnicę?",
      answer:
        "Większą niż większość dodatków, o które ludzie się martwią. Decydują dwie rzeczy: ilość białka — im więcej, tym mocniejsze i bardziej sprężyste ciasto — oraz stopień przemiału. Marka nie ma tu prawie znaczenia.",
    },
    {
      question: "Co oznacza typ mąki na opakowaniu?",
      answer:
        "Zawartość składników mineralnych, czyli pośrednio to, ile z ziarna zostało w mące — a nie jakość. Niższy typ to mąka jaśniejsza i bardziej oczyszczona, wyższy ciemniejsza i pełniejsza. Nic ponadto.",
    },
    {
      question: "Czy mogę zamienić mąkę pszenną na pełnoziarnistą albo bezglutenową?",
      answer:
        "Pełnoziarnista wchłania wyraźnie więcej płynu, więc bez dolania ciasto wyjdzie zbite — to najczęstsza przyczyna nieudanej „zdrowszej wersji” przepisu. Mąk bezglutenowych nie da się podmienić jeden do jednego, bo nie dają ciastu sprężystości. O celiakii i o tym, która mąka jest zdrowsza, nie wypowiadam się w ogóle — to dziedzina lekarza i dietetyka.",
    },
  ],

  geo: { lat: 54.1697, lng: 21.1391 },
};
