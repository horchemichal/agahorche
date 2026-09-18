import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * KORONOWO — powiat bydgoski, woj. kujawsko-pomorskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 10 679 mieszkańców (GUS 31.12.2024),
 * ⚠ 28,2 KM² — NAJWIĘKSZA POWIERZCHNIA MIASTA
 *   Z CAŁEJ TEJ FALI; gęstość tylko 379,4 os./km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 23 218 osób, 411,6 km²,
 * 33 sołectwa poza miastem.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ KORONOWO.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ ODMIANA: D. KORONOWA, Ms. W KORONOWIE,
 *   przym. KORONOWSKI — poświadczony urzędowo w nazwie
 *   produktu „lody koronowskie".
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM.
 * ⚠ URZĄD NIE PUBLIKUJE AKTUALNEJ LICZBY MIESZKAŃCÓW
 *   NA STRONIE INFORMACYJNEJ — dane tekstowe są ze stanu
 *   30.06.2020. OPIERAM SIĘ NA GUS.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — ⚠⚠⚠ RDZEŃ KĄTA — CZTERY PRÓBY LOKACJI MIASTA,
 *   Z KTÓRYCH TRZY SIĘ NIE UDAŁY:
 *   — 1286 — książę Ziemomysł, lokacja w BYSZEWIE
 *     na PRAWIE ŚREDZKIM. Nieudana,
 *   — 1292 — książę Mściwój II, osada ZŁA WIEŚ,
 *     PRAWO MAGDEBURSKIE. Nieudana,
 *   — 3 LUTEGO 1359 — Kazimierz Wielki, dokument
 *     wystawiony W ŻNINIE, osada ŁACHOWO. Nieudana,
 *   — ⚠ 18 GRUDNIA 1368 — Kazimierz Wielki, dokument
 *     wystawiony W KRUSZWICY, PRAWO MAGDEBURSKIE.
 *     TA SIĘ UDAŁA.
 *   ⚠ ŹRÓDŁA PODAJĄ TEŻ INNE WERSJE (1359 + wejście
 *   w życie 1370). ZAZNACZAM, ŻE DATY BYWAJĄ PODAWANE
 *   RÓŻNIE. Trzymam się wersji urzędu.
 * — 11 listopada 1370 — przywilej opata Jana: wójt,
 *   rajcy i ławnicy,
 * — 1399 — pierwsza wzmianka o pieczęci miejskiej,
 * — TARGI W KAŻDY CZWARTEK od lokacji, tradycja
 *   zachowana do dziś,
 * — jarmarki: 17 marca (1476), 21 października (1484),
 *   25 stycznia i 29 czerwca (1750),
 *   ⚠ PODAJĘ JAKO FAKTY W RYSIE HISTORYCZNYM.
 *   ⚠ ZERO ROZWIJANIA RYTMU TYGODNIA — „planowanie
 *   tygodnia" to kąt zajęty. TWARDA GRANICA.
 * — RYNEK 90 × 70 M, otoczony ośmioma blokami zabudowy,
 * — bazylika poklasztorna: DŁUGOŚĆ OK. 66 M, korpus
 *   trzynawowy SZEROKOŚCI 18 M; cegła w wątku gotyckim
 *   z zendrówką i cegłami glazurowanymi; w transepcie
 *   fryz z płytek ŻÓŁTYCH, ZIELONYCH I NIEBIESKICH,
 * — 1895 — kolej wąskotorowa Koronowo–Bydgoszcz
 *   ⚠ ROZSTAWU TORÓW NIE USTALONO — NIE PODAJĘ,
 * — 1900 — uruchomienie elektrowni
 *   ⚠⚠ BEZ WZMIANKI O CENTRALI W BERLINIE — kontekst
 *   zaborczy. TWARDA GRANICA,
 * — 1909 — połączenie z Tucholą linią normalnotorową,
 * — struktura gruntów gminy: użytki rolne 56,9%,
 *   LASY 31,0%,
 * — ⚠ BEZROBOCIE 3,3% (2024) — WYJĄTKOWO NISKIE,
 *   efekt sąsiedztwa Bydgoszczy. NIE UŻYWAM — nie
 *   wchodzę w liczby gospodarcze miast w ogóle.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — TRAFIENIE:
 *   „LODY KORONOWSKIE", wpis 29 KWIETNIA 2014 R.,
 *   kategoria: produkty mleczne. Karta wskazuje
 *   KORONOWO WPROST, bez ryzyka pomyłki gminy.
 *   Z karty: dawniej używano urządzenia z dwóch naczyń
 *   — do większego, wypełnionego lodem i solą, wkładano
 *   mniejsze; korbę kręcono ręcznie. Lód rzeczny cięto
 *   zimą piłami ręcznymi i wożono zaprzęgiem konnym
 *   do lodowni. Cztery tradycyjne smaki. Wafelek pszenny
 *   w kształcie kubka.
 *   ⚠⚠ PODAJĘ TO WYŁĄCZNIE JAKO FAKT W RYSIE
 *   HISTORYCZNYM I W JEDNYM ZDANIU W SEKCJI.
 *   ZERO ROZWIJANIA TEMATU LODU I CHŁODZENIA —
 *   KĄT ZAJĘTY (Władysławowo). TWARDA GRANICA.
 *   ⚠ ŻADNYCH PROPORCJI I ŻADNEGO PRZEPISU.
 *   ⚠ PUŁAPKA: katalog KPODR przypisuje Koronowu
 *   „nalewkę wiśniową" — NIE MA JEJ na liście MRiRW,
 *   a poza tym to alkohol. NIE UŻYWAM.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: ZA CZWARTYM RAZEM — dlaczego pierwsze podejście
 * zwykle nie wychodzi i co z tym zrobić.
 * Kąt od czterech lokacji: trzy nieudane próby przez
 * osiemdziesiąt dwa lata, zanim czwarta się przyjęła.
 * W kuchni działa dokładnie to samo, tylko nikt o tym
 * nie mówi, bo w przepisach wszystko wychodzi od razu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Koronowo lokowano cztery razy: w 1286 w Byszewie
 *   na prawie średzkim, w 1292 w Złej Wsi na prawie
 *   magdeburskim, 3 lutego 1359 w Łachowie dokumentem
 *   wystawionym w Żninie — i dopiero 18 grudnia 1368,
 *   dokumentem z Kruszwicy, wyszło. Osiemdziesiąt dwa
 *   lata i trzy nieudane podejścia,
 *   ⚠ ZAZNACZAM, ŻE ŹRÓDŁA PODAJĄ TE DATY RÓŻNIE,
 * — ŻE ZA KAŻDYM RAZEM ZMIENIANO COŚ KONKRETNEGO:
 *   miejsce, prawo, wystawcę. To nie było powtarzanie
 *   tego samego,
 * — ⚠⚠ ŻE W KUCHNI JEST TAK SAMO, A PRZEPISY UDAJĄ,
 *   ŻE NIE — TO JEST RDZEŃ TEKSTU. Żaden przepis nie
 *   zaczyna się od zdania „za pierwszym razem prawdopodobnie
 *   nie wyjdzie",
 * — CO KONKRETNIE NIE WYCHODZI ZA PIERWSZYM RAZEM
 *   I DLACZEGO TO NORMALNE:
 *   — bo nie znasz jeszcze swojego piekarnika ani swojej
 *     patelni, a przepis pisał ktoś, kto zna swoje,
 *   — bo nie wiesz, jak to ma wyglądać w połowie, więc
 *     nie umiesz zareagować,
 *   — bo składniki nie są identyczne — mąka chłonie
 *     różnie, warzywa mają różną wilgotność,
 * — ⚠⚠ ŻE RÓŻNICA MIĘDZY DRUGĄ A CZWARTĄ PRÓBĄ POLEGA
 *   NA JEDNEJ RZECZY: ZMIENIAĆ PO JEDNYM ELEMENCIE
 *   NARAZ. Kto zmienia trzy rzeczy jednocześnie, nie
 *   dowie się, która zadziałała — i piąta próba będzie
 *   równie ślepa jak pierwsza,
 * — ŻE DRUGA RZECZ TO ZAPISYWANIE, CO SIĘ ZMIENIŁO
 *   ⚠ ODSYŁAM DO STRONY O SPISYWANIU PRZEPISU,
 *   NIE ROZWIJAM,
 * — ŻE TRZECIA TO UCZCIWA OCENA, CO WŁAŚCIWIE BYŁO NIE
 *   TAK: „niedobre" nic nie znaczy, „za słone", „zbyt
 *   zbite", „za sucho" — znaczą wszystko,
 * — ⚠ UCZCIWIE O SPRZĘCIE — TO MUSI PAŚĆ WPROST:
 *   Thermomix skraca tę drogę, ale jej nie kasuje.
 *   Powtarzalny jest, bo temperatura i mieszanie są
 *   takie same za każdym razem — więc druga próba różni
 *   się od pierwszej tylko tym, co Ty zmieniłaś.
 *   TO JEST REALNA ZALETA I MÓWIĘ O NIEJ TAK, JAK JEST.
 *   ALE PIERWSZE PODEJŚCIE DO NOWEGO DANIA I TAK BYWA
 *   NIEUDANE — bo urządzenie nie wie, jak ma smakować
 *   u Ciebie w domu.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO ROZWIJANIA LODU, CHŁODZENIA I MROŻENIA —
 *   kąt zajęty. Lody koronowskie WYŁĄCZNIE jako fakt.
 * — ⚠⚠ ZERO RYTMU TYGODNIA I PLANOWANIA — kąt zajęty.
 *   Czwartkowe targi WYŁĄCZNIE jako fakt.
 * — ⚠ ZERO RATOWANIA NIEUDANEGO DANIA — kąt zajęty
 *   (Pszczew). Tutaj chodzi o KOLEJNE PODEJŚCIE,
 *   nie o odkręcanie tego, co już stoi na blacie.
 *   TWARDA GRANICA.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNEJ ZACHĘTY DO ALKOHOLU.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO ZAKŁADU KARNEGO W BUDYNKACH POKLASZTORNYCH.
 *   Od 1819 r. kompleks zajmuje więzienie i pojawia się
 *   to w każdym opisie zabytku. Bazylikę opisuję
 *   WYŁĄCZNIE jako architekturę. TWARDA GRANICA
 *   BEZWZGLĘDNA.
 * — ⚠⚠ ZERO BITWY POD KORONOWEM 1410. To jedno
 *   z najczęściej wyszukiwanych haseł o mieście.
 *   TWARDA GRANICA.
 * — ⚠⚠ ZERO KASATY ZAKONU Z 1819 R.
 * — ZERO wątków wyznaniowych i narodowościowych.
 * — ZERO zniszczenia Byszewa w 1283 r.
 * — ⚠⚠ ZERO BERLINA przy elektrowni z 1900 r.
 * — ZERO spadku liczby mieszkańców gminy — to był temat
 *   osobnego artykułu prasowego i wypływa w wyszukiwaniu.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „RATOWANIE NIEUDANEGO DANIA" (Pszczew) dotyczy TEGO,
 *   CO DA SIĘ ODKRĘCIĆ W TRAKCIE. ⚠⚠ TO JEST NAJBLIŻSZY
 *   KĄT. TUTAJ nie ratuję niczego — tutaj chodzi
 *   o KOLEJNE PODEJŚCIE INNEGO DNIA. Odsyłam tam wprost.
 * — „LÓD I CHŁODZENIE" (Władysławowo) dotyczy CHŁODZENIA.
 * — „POWTARZALNOŚĆ" (Opoczno) dotyczy WZORÓW, KTÓRE MUSZĄ
 *   BYĆ TAKIE SAME.
 * — „PRZEPIS, KTÓREGO NIKT NIE ZAPISAŁ" (Golub-Dobrzyń)
 *   dotyczy SPISYWANIA. Odsyłam tam wprost.
 * TUTAJ chodzi o TO, ŻE PIERWSZE PODEJŚCIE ZWYKLE NIE
 * WYCHODZI I ŻE TO JEST NORMALNE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE ROZSTRZYGAM dat lokacji — zaznaczam rozbieżność.
 * — NIE PODAJĘ rozstawu torów kolei z 1895 r.
 * — NIE PODAJĘ liczby młynów ani cechów — nie ustalono.
 * — NIE PISZĘ o więzieniu ani o bitwie.
 * — NIE PODAJĘ przepisu na lody.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Koronowo leży w powiecie bydgoskim i jest miastem
 *   w gminie miejsko-wiejskiej; samo miasto liczy 10 679
 *   mieszkańców (GUS, 31.12.2024) i zajmuje 28,2 km²,
 *   czyli mniej niż czterysta osób na kilometr kwadratowy;
 *   cała gmina ma 23 218 osób na 411,6 km² i 33 sołectwa
 *   poza miastem, a lasy zajmują 31% jej powierzchni,
 * — miasto lokowano czterokrotnie: w 1286 roku w Byszewie
 *   na prawie średzkim, w 1292 w Złej Wsi na prawie
 *   magdeburskim, 3 lutego 1359 w Łachowie dokumentem
 *   wystawionym w Żninie i wreszcie 18 grudnia 1368
 *   dokumentem wystawionym w Kruszwicy — ta ostatnia
 *   lokacja się przyjęła; źródła podają te daty różnie,
 * — 11 listopada 1370 roku przywilej opata Jana powołał
 *   wójta, rajców i ławników, a w 1399 wzmiankowano
 *   pierwszą pieczęć miejską,
 * — miasto od lokacji miało prawo do targów w każdy
 *   czwartek i tradycja ta trwa do dziś; jarmarki
 *   przypadały 17 marca (od 1476), 21 października
 *   (od 1484) oraz 25 stycznia i 29 czerwca (od 1750),
 * — plac rynkowy ma 90 na 70 metrów i otacza go osiem
 *   bloków zabudowy,
 * — bazylika poklasztorna ma około 66 metrów długości
 *   i trzynawowy korpus szerokości 18 metrów; zbudowano
 *   ją z cegły w wątku gotyckim, z użyciem zendrówki
 *   i cegieł glazurowanych, a w transepcie biegnie fryz
 *   z płytek żółtych, zielonych i niebieskich,
 * — w 1895 roku uruchomiono kolej wąskotorową do
 *   Bydgoszczy, w 1900 elektrownię, a w 1909 połączenie
 *   normalnotorowe z Tucholą,
 * — 29 kwietnia 2014 roku na ministerialną Listę
 *   Produktów Tradycyjnych wpisano lody koronowskie
 *   w kategorii produktów mlecznych.
 */
export const KORONOWO: CityContent = {
  slug: "koronowo",
  h1: "Thermomix Koronowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Koronowo — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Koronowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Koronowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Koronowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Koronowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Koronowo"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Żaden przepis nie zaczyna się od zdania „za pierwszym razem pewnie nie wyjdzie”.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Koronowie – jak wygląda prezentacja?",
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
      id: "za-czwartym-razem",
      heading: "Cztery lokacje, z których trzy się nie udały",
      paragraphs: [
        "Koronowo zakładano czterokrotnie. W 1286 roku książę Ziemomysł lokował miasto w Byszewie, na prawie średzkim — nie wyszło. W 1292 książę Mściwój II spróbował w osadzie Zła Wieś, tym razem na prawie magdeburskim — też nie. 3 lutego 1359 roku Kazimierz Wielki wystawił w Żninie dokument dla osady Łachowo — i to również się nie przyjęło. Dopiero czwarte podejście, 18 grudnia 1368 roku, dokumentem wystawionym w Kruszwicy, dało miasto, które stoi do dziś.",
        "Osiemdziesiąt dwa lata i trzy nieudane próby. Warto dodać, że źródła podają te daty różnie — sama chronologia bywa sporna. Ale kierunek jest jasny i najciekawsze jest w niej co innego: za każdym razem zmieniano coś konkretnego. Inne miejsce, inne prawo, inny wystawca. To nie było uparte powtarzanie tego samego.",
        "W kuchni działa dokładnie to samo, tylko przepisy udają, że nie.",
        "Nie ma przepisu, który zaczynałby się od zdania „za pierwszym razem prawdopodobnie nie wyjdzie”. A powinno ich być sporo — bo to jest prawda i wszyscy o tym wiemy, tylko nikt nie pisze.",
        "Za pierwszym razem nie wychodzi, bo nie znasz jeszcze swojego piekarnika ani swojej patelni, a przepis pisał ktoś, kto zna swoje. Bo nie wiesz, jak to ma wyglądać w połowie, więc nie masz jak zareagować w momencie, w którym jeszcze można. I bo składniki nie są identyczne — mąka chłonie różnie, warzywa mają różną wilgotność, a jajka różną wielkość.",
        "To nie jest brak umiejętności. To jest pierwsze podejście.",
        "Cała różnica między drugą próbą a czwartą sprowadza się do jednej zasady: zmieniać po jednym elemencie naraz. Kto zmienia trzy rzeczy jednocześnie, nie dowie się, która zadziałała — i piąta próba będzie równie ślepa jak pierwsza. Książę Mściwój zmienił miejsce i prawo, i dlatego pewnie nikt do dziś nie wie, co konkretnie zawiodło.",
        "Druga rzecz to zapisywanie, co się zmieniło. Pisałam o tym osobno przy innym mieście, bo to temat sam w sobie, ale zasada jest prosta: pamięć wygładza. Za miesiąc będziesz pamiętać, że „chyba trochę krócej”, a to nie wystarczy.",
        "Trzecia to uczciwa ocena, co właściwie było nie tak. „Niedobre” nie znaczy nic. „Za słone”, „zbyt zbite”, „za sucho w środku”, „skórka za jasna” — znaczą wszystko, bo każde z tych zdań wskazuje na konkretny krok do zmiany.",
        "I uczciwie o sprzęcie, bo tu akurat mam coś dobrego do powiedzenia i coś mniej dobrego. Thermomix tę drogę skraca, ale jej nie kasuje. Skraca ją naprawdę, bo temperatura i mieszanie są takie same za każdym razem — więc druga próba różni się od pierwszej wyłącznie tym, co Ty świadomie zmieniłaś. To jest duża rzecz przy uczeniu się nowego dania.",
        "Ale pierwsze podejście do nowego dania i tak bywa nieudane. Urządzenie nie wie, jak to ma smakować u Ciebie w domu, i nigdy się tego samo nie dowie. Jeśli coś już stoi na blacie i trzeba to uratować, to zupełnie inna historia — o odkręcaniu nieudanego dania pisałam gdzie indziej. Tutaj chodzi o spokojne podejście drugie, innego dnia.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Koronowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli jest danie, które kilka razy Ci nie wyszło i chciałabyś wiedzieć dlaczego — powiedz to przy umawianiu. To zwykle da się rozłożyć na czynniki.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Koronowie"),
    sekcjaRaty("w Koronowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla koronowskiej rodziny",
      paragraphs: [
        "Koronowo leży w powiecie bydgoskim i jest miastem w gminie miejsko-wiejskiej; samo miasto liczy ponad dziesięć i pół tysiąca mieszkańców, ale zajmuje aż dwadzieścia osiem kilometrów kwadratowych, więc gęstość zaludnienia nie sięga czterystu osób na kilometr. Cała gmina ma ponad dwadzieścia trzy tysiące osób, trzydzieści trzy sołectwa poza miastem, a lasy zajmują blisko jedną trzecią jej powierzchni. Miasto lokowano czterokrotnie — w 1286 roku w Byszewie, w 1292 w Złej Wsi, 3 lutego 1359 w Łachowie i wreszcie 18 grudnia 1368 dokumentem wystawionym w Kruszwicy; dopiero ta ostatnia próba się przyjęła. Przywilej opata Jana z 11 listopada 1370 roku powołał wójta, rajców i ławników, a w 1399 wzmiankowano pierwszą pieczęć miejską. Od lokacji miasto miało prawo do targów w każdy czwartek i tradycja ta trwa do dziś, a jarmarki przypadały 17 marca, 21 października, 25 stycznia i 29 czerwca. Plac rynkowy ma dziewięćdziesiąt na siedemdziesiąt metrów i otacza go osiem bloków zabudowy. Bazylika poklasztorna ma około sześćdziesięciu sześciu metrów długości i trzynawowy korpus szerokości osiemnastu metrów — zbudowano ją z cegły w wątku gotyckim, z użyciem zendrówki i cegieł glazurowanych, a w transepcie biegnie fryz z płytek żółtych, zielonych i niebieskich. W 1895 roku uruchomiono kolej wąskotorową do Bydgoszczy, w 1900 elektrownię, w 1909 połączenie normalnotorowe z Tucholą. 29 kwietnia 2014 roku na ministerialną Listę Produktów Tradycyjnych wpisano lody koronowskie.",
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

  districtsHeading: "Do których części Koronowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — a jest ono rozległe, bo zajmuje ponad dwadzieścia osiem kilometrów kwadratowych. Dojeżdżam też do wszystkich sołectw w gminie.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Koronowo też przyjadę",
  nearbyParagraphs: [
    "Bydgoszcz, Tuchola, Świecie, Nakło nad Notecią, Mrocza, Więcbork i Solec Kujawski są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Bydgoszcz", "Tuchola", "Nakło nad Notecią", "Mrocza"],

  about: blokOMnie("do Koronowa", "w Koronowie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Koronowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Warto dodać, że gmina Koronowo jest bardzo rozległa — to niczego nie zmienia, przyjeżdżam wszędzie na tych samych zasadach.",
    },
    ...faqWspolne("w Koronowie"),
    {
      question: "Dlaczego nowe danie nie wychodzi za pierwszym razem?",
      answer:
        "Bo nie znasz jeszcze swojego piekarnika ani swojej patelni, a przepis pisał ktoś, kto zna swoje. Bo nie wiesz, jak to ma wyglądać w połowie, więc nie masz jak zareagować. I bo składniki nie są identyczne — mąka chłonie różnie, warzywa mają różną wilgotność. To nie brak umiejętności, tylko pierwsze podejście.",
    },
    {
      question: "Jak poprawiać przepis, żeby wyszło za kolejnym razem?",
      answer:
        "Zmieniać po jednym elemencie naraz — kto zmienia trzy rzeczy jednocześnie, nie dowie się, która zadziałała. Zapisywać, co się zmieniło, bo pamięć wygładza. I nazywać problem konkretnie: „niedobre” nie znaczy nic, ale „za słone”, „zbyt zbite”, „za sucho w środku” wskazują już konkretny krok do poprawy.",
    },
  ],

  geo: { lat: 53.3156, lng: 17.925 },
};
