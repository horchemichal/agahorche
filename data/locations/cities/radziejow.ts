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
 * RADZIEJÓW — powiat radziejowski,
 * woj. kujawsko-pomorskie, KUJAWY.
 * GMINA MIEJSKA. 5 006 mieszkańców (GUS 31.12.2024),
 * 5,7 km².
 * ⚠⚠ OBOK ISTNIEJE ODRĘBNA GMINA WIEJSKA RADZIEJÓW
 *   (4 248 osób, 92,7 km²), Z SIEDZIBĄ W MIEŚCIE.
 *   NIE MIESZAM TYCH DANYCH. TWARDA GRANICA.
 * ⚠⚠ ZAWYŻENIE: urząd miasta podaje 5 483 osoby —
 *   ale to stan z WRZEŚNIA 2020 R., po prostu
 *   nieaktualizowany (+9,5% wobec GUS). UŻYWAM GUS.
 * ⚠ ODMIANA: D. RADZIEJOWA, Ms. W RADZIEJOWIE,
 *   przym. RADZIEJOWSKI.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO SŁOWNIKOWO —
 *   NIE UŻYWAM ŻADNEJ.
 *   ⚠ NIEMIECKIEJ NAZWY MIASTA NIE USTALONO I NIE UŻYWAM.
 * ⚠⚠ ŹRÓDŁO DO ODRZUCENIA: superpolonia.info wypływa
 *   przy zapytaniach o Radziejów i FABRYKUJE produkty
 *   regionalne. NIE KORZYSTAM. TWARDA GRANICA.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — RZEMIOSŁA WYMIENIANE W MIEŚCIE: MIECZOWNICY,
 *   IGLENICY, STELMACHOWIE, CZAPNICY, OLEJNICY.
 *   ⚠⚠ OLEJNIKÓW WYMIENIAM WYŁĄCZNIE JAKO NAZWĘ FACHU.
 *   ZERO OLEJU JAKO TEMATU — kąt zajęty. TWARDA GRANICA.
 *   ⚠ ZERO MIECZOWNIKÓW W ROZWINIĘCIU — wątek zbrojeniowy.
 * — 1616 — 1 240 MIESZKAŃCÓW I 206 DOMÓW.
 * — 1820 — 161 DOMÓW, W TYM TYLKO 10 MUROWANYCH.
 * — ⚠⚠ RDZEŃ KĄTA — 1793–94: 220 BECZEK PIWA
 *   PO 40 GARNCÓW.
 *   ⚠⚠ UŻYWAM WYŁĄCZNIE JAKO PRZYKŁADU DAWNEJ MIARY.
 *   ZERO PIWA JAKO TEMATU, ZERO ZACHĘTY DO ALKOHOLU,
 *   ZERO WARZENIA. Liczba służy wyłącznie pokazaniu,
 *   że „beczka" i „garniec" były jednostkami rozliczeń.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — 12 JARMARKÓW ROCZNIE.
 * — ok. 1767 — w mieście MŁYN KONNY I WIATRAK.
 * ⚠ ROZSTAWU WĄSKOTOROWEJ LINII RADZIEJÓW–NIESZAWA
 *   NIE USTALONO — NIE PODAJĘ.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z miasta Radziejów ani z gminy wiejskiej Radziejów.
 *   ⚠⚠⚠ PUŁAPKA ROZBROJONA: wszystkie produkty
 *   „bronisławskie" (marmolada z buraków cukrowych —
 *   wpis 20.05.2019, mniszek bronisławski — wpis
 *   18.01.2010, i pozostałe) pochodzą z BRONISŁAWIA
 *   W GMINIE DOBRE. GMINA DOBRE TO ODRĘBNA JEDNOSTKA —
 *   w powiecie radziejowskim są trzy różne podmioty:
 *   gmina Dobre, gmina wiejska Radziejów i miasto
 *   Radziejów. NIE PRZYPISUJĘ RADZIEJOWOWI ŻADNEGO
 *   Z TYCH PRODUKTÓW. TWARDA GRANICA BEZWZGLĘDNA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: GARNIEC, BECZKA I FUNT — przepisy zapisane
 * w miarach, których już nie ma.
 * Kąt od rozliczeń z lat 1793–94, gdzie ilości podawano
 * w beczkach po czterdzieści garnców: miara była wtedy
 * oczywista dla wszystkich i nikt jej nie tłumaczył.
 * Dokładnie tak wyglądają dziś babcine zeszyty.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w rozliczeniach z lat 1793–94 ilości w Radziejowie
 *   podawano w beczkach liczących po czterdzieści garnców —
 *   dwieście dwadzieścia takich beczek; że nikt tego wtedy
 *   nie tłumaczył, bo miara była oczywista dla wszystkich,
 * — ŻE DOKŁADNIE TAK WYGLĄDAJĄ DZIŚ STARE ZESZYTY
 *   Z PRZEPISAMI — i to jest problem, z którym ludzie
 *   przychodzą do mnie naprawdę,
 * — ⚠⚠ CO KONKRETNIE W NICH STOI I CZEGO NIE DA SIĘ
 *   PRZELICZYĆ — TO JEST RDZEŃ:
 *   — „SZKLANKA" — bo szklanki miały różną pojemność
 *     i nadal mają ⚠ ODSYŁAM DO STRONY O MIARACH
 *     OBJĘTOŚCI I MASY, NIE ROZWIJAM,
 *   — „KOSTKA MASŁA" — bo kostka zmieniała gramaturę,
 *   — „ŁYŻKA MĄKI" — bo łyżka czubata i płaska to dwie
 *     różne ilości, a zapis nie mówi która,
 *   — „TYLE, ILE WEŹMIE" — zapis najuczciwszy ze wszystkich
 *     i jednocześnie bezużyteczny dla kogoś z zewnątrz,
 * — ⚠⚠ ŻE JEDYNE, CO DZIAŁA, TO ODTWORZENIE OD KOŃCA:
 *   nie przeliczać jednostek, tylko zrobić raz według
 *   zapisu i ZWAŻYĆ TO, CO WYSZŁO. Od tego momentu
 *   przepis jest zapisany w gramach i przestaje zależeć
 *   od czyjejś szklanki,
 * — ŻE TO SIĘ ROBI RAZ, A DZIAŁA ZAWSZE — i że warto to
 *   zrobić, ZANIM osoba, która pamięta tamtą szklankę,
 *   przestanie pamiętać
 *   ⚠ ODSYŁAM DO STRONY O SPISYWANIU PRZEPISU,
 *   NIE ROZWIJAM,
 * — ŻE DRUGA GRUPA ZAPISÓW JEST TRUDNIEJSZA: „do smaku",
 *   „aż będzie dobre", „ile trzeba" — tego nie da się
 *   zważyć i trzeba to zapisać opisowo, po pierwszym
 *   udanym podejściu,
 * — ⚠ UCZCIWIE O SPRZĘCIE: waga wbudowana w urządzenie
 *   jest tu realnie przydatna, bo waży prosto do naczynia
 *   i nie wymaga drugiej miski. TO JEST DOKŁADNIE TEN
 *   PRZYPADEK, W KTÓRYM SIĘ PRZYDAJE.
 *   ⚠ ALE UCZCIWIE TEŻ: waga kuchenna za czterdzieści
 *   złotych zrobi to samo. Nie kupuje się urządzenia
 *   dla wagi i nie będę tego tak sprzedawać.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO PIWA, ZERO WARZENIA, ZERO ZACHĘTY
 *   DO ALKOHOLU. Beczki z 1793 r. występują WYŁĄCZNIE
 *   jako jednostka rozliczeniowa. TWARDA GRANICA.
 * — ⚠⚠ ZERO OLEJU — kąt zajęty. Olejnicy WYŁĄCZNIE
 *   jako nazwa fachu w wyliczeniu.
 * — ⚠⚠ ZERO MIECZOWNIKÓW W ROZWINIĘCIU — wątek
 *   zbrojeniowy. Wymieniam nazwę i idę dalej.
 * — ⚠⚠ ZERO SZKLANKI I WAGI JAKO TEMATU — kąt zajęty
 *   (Chełmno). Odsyłam jednym zdaniem. TWARDA GRANICA.
 * — ⚠ ZERO SPISYWANIA PRZEPISU JAKO TEMATU — kąt zajęty
 *   (Golub-Dobrzyń). Odsyłam jednym zdaniem.
 * — ⚠ ZERO DOPRAWIANIA I PRÓBOWANIA — kąt zajęty.
 *   „Do smaku" wymieniam jako typ zapisu, nie rozwijam.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠ NIE PODAJĘ PRZELICZNIKÓW DAWNYCH MIAR NA GRAMY.
 *   Nie mam ich zweryfikowanych, były regionalne
 *   i zmienne. Mówię wprost, że się NIE DA — i to jest
 *   właśnie sedno tekstu. TWARDA GRANICA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO PROCESÓW O CZARY Z LAT 1646–1700.
 *   Dziewiętnaście oskarżonych kobiet, czternaście
 *   spalonych. Temat stoi w „ciekawostkach" biblioteki
 *   miejskiej i wypływa w wyszukiwaniu.
 *   TWARDA GRANICA BEZWZGLĘDNA — NAJWAŻNIEJSZA
 *   NA TEJ STRONIE.
 * — ZERO wątków wojennych i okupacyjnych.
 * — ZERO wątków wyznaniowych i narodowościowych.
 * — ZERO wyludniania i bezrobocia.
 * — ZERO superpolonia.info jako źródła.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „SZKLANKA CZY WAGA" (Chełmno) dotyczy WYBORU MIĘDZY
 *   MIARĄ OBJĘTOŚCI A MIARĄ MASY — decyzji, którą
 *   podejmujesz DZIŚ, gotując. ⚠⚠ TO JEST NAJBLIŻSZY
 *   KĄT. TUTAJ chodzi o PRZEPIS JUŻ ZAPISANY W MIARACH,
 *   KTÓRYCH NIE DA SIĘ ODTWORZYĆ, i o to, jak go
 *   uratować. Odsyłam tam wprost.
 * — „PRZEPIS, KTÓREGO NIKT NIE ZAPISAŁ" (Golub-Dobrzyń)
 *   dotyczy PRZEPISU ISTNIEJĄCEGO TYLKO W GŁOWIE.
 *   ⚠ TUTAJ przepis JEST na papierze — tylko w miarach,
 *   których nikt już nie rozumie. Odsyłam tam wprost.
 * — „DOPRAWIANIE" dotyczy PRÓBOWANIA W TRAKCIE.
 * — „RODZAJE MĄKI" (Korsze) dotyczy MĄKI.
 * TUTAJ chodzi o ODTWORZENIE PRZEPISU ZAPISANEGO
 * W NIEISTNIEJĄCYCH JEDNOSTKACH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM danych miasta i gminy wiejskiej.
 * — NIE PODAJĘ liczby 5 483 — to dane z 2020 r.
 * — NIE PRZYPISUJĘ Radziejowowi produktów z gminy Dobre.
 * — NIE PODAJĘ przeliczników dawnych miar.
 * — NIE PISZĘ o piwie ani o warzeniu.
 * — NIE ROZWIJAM mieczownictwa.
 * — NIE PODAJĘ rozstawu wąskotorówki — nie ustalono.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Radziejów jest gminą miejską na Kujawach i siedzibą
 *   powiatu radziejowskiego; liczy 5 006 mieszkańców
 *   (GUS, 31.12.2024) na 5,7 km², a obok istnieje odrębna
 *   gmina wiejska o tej samej nazwie, licząca 4 248 osób
 *   na 92,7 km², z siedzibą w tym samym mieście,
 * — wśród rzemiosł wymienianych w dawnym Radziejowie
 *   byli mieczownicy, iglenicy, stelmachowie, czapnicy
 *   i olejnicy,
 * — w 1616 roku mieszkało tu 1 240 osób i stało 206 domów,
 *   a w 1820 — sto sześćdziesiąt jeden domów, z czego
 *   tylko dziesięć murowanych,
 * — w rozliczeniach z lat 1793–94 ilości podawano
 *   w beczkach liczących po czterdzieści garnców;
 *   odnotowano ich dwieście dwadzieścia,
 * — miasto miało prawo do dwunastu jarmarków rocznie,
 *   a około 1767 roku pracował tu młyn konny i wiatrak.
 */
export const RADZIEJOW: CityContent = {
  slug: "radziejow",
  h1: "Thermomix Radziejów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Radziejów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Radziejowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolica. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radziejów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Radziejowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Radziejowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych wsi.",

  highlights: highlightyStandardowe("Radziejów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Miary nie przelicza się. Odtwarza się je od końca — wagą.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Radziejowie – jak wygląda prezentacja?",
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
      id: "dawne-miary",
      heading: "Dwieście dwadzieścia beczek po czterdzieści garnców",
      paragraphs: [
        "W radziejowskich rozliczeniach z lat 1793–94 ilości podawano w beczkach liczących po czterdzieści garnców. Dwieście dwadzieścia takich beczek. Nikt tego wtedy nie tłumaczył, bo nie było czego — każdy wiedział, ile to garniec.",
        "Dokładnie tak wyglądają dziś stare zeszyty z przepisami. I to jest rzecz, z którą ludzie przychodzą do mnie naprawdę, częściej niż z pytaniem o cenę.",
        "W takim zeszycie stoi „szklanka mąki” — a szklanki miały różną pojemność i nadal mają. Stoi „kostka masła” — a kostka zmieniała gramaturę. Stoi „łyżka mąki” — a łyżka czubata i łyżka płaska to dwie różne ilości, i zapis nie mówi która. O samym wyborze między miarą objętości a miarą masy pisałam osobno przy innym mieście.",
        "I stoi najczęściej rzecz najuczciwsza ze wszystkich: „tyle, ile weźmie”. Osoba, która to pisała, wiedziała dokładnie, o co jej chodzi. Dla kogoś z zewnątrz to zdanie nie znaczy nic.",
        "Przez lata próbowałam do tego podchodzić od strony przeliczników. Nie da się. Dawne miary były regionalne i zmienne, a każdy przelicznik, który znajdziesz, będzie przybliżeniem czyjejś innej kuchni.",
        "Działa tylko jedno: odtworzenie od końca.",
        "Nie przeliczać jednostek, tylko zrobić raz dokładnie według zapisu — tą szklanką, tą łyżką, u siebie — i zważyć to, co wyszło. Mąkę przed wsypaniem, masło przed dodaniem, gotowe ciasto na końcu. Od tego momentu przepis jest zapisany w gramach i przestaje zależeć od czyjejkolwiek szklanki.",
        "Robi się to raz, a działa zawsze. I warto zrobić to, zanim osoba, która pamięta tamtą szklankę, przestanie pamiętać — o samym spisywaniu przepisów pisałam osobno, bo to temat na całą stronę.",
        "Gorzej jest z drugą grupą zapisów: „do smaku”, „aż będzie dobre”, „ile trzeba”. Tego nie da się zważyć. To można tylko opisać własnymi słowami, po pierwszym podejściu, które wyszło — i to jest jedyna droga, jaką znam.",
        "Uczciwie o sprzęcie. Waga wbudowana w urządzenie jest tu realnie przydatna, bo waży prosto do naczynia i nie wymaga stawiania drugiej miski na osobnej wadze. To jest dokładnie ten przypadek, w którym ma sens.",
        "Ale powiem też drugą część: waga kuchenna za czterdzieści złotych zrobi to samo. Nie kupuje się Thermomiksa dla wagi i nie zamierzam go tak sprzedawać.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Radziejowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli masz w domu zeszyt z przepisami zapisanymi w szklankach — weź go na spotkanie. Możemy zrobić jedną rzecz z niego i od razu zważyć, co z tego wychodzi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Radziejowie"),
    sekcjaRaty("w Radziejowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla radziejowskiej rodziny",
      paragraphs: [
        "Radziejów jest gminą miejską na Kujawach i siedzibą powiatu radziejowskiego; liczy pięć tysięcy mieszkańców na pięciu i siedmiu dziesiątych kilometra kwadratowego, a obok istnieje odrębna gmina wiejska o tej samej nazwie, licząca ponad cztery tysiące osób, z siedzibą w tym samym mieście. Wśród rzemiosł wymienianych w dawnym Radziejowie byli iglenicy, stelmachowie, czapnicy i olejnicy. W 1616 roku mieszkało tu tysiąc dwieście czterdzieści osób i stało dwieście sześć domów, a w 1820 — sto sześćdziesiąt jeden domów, z czego tylko dziesięć murowanych. W rozliczeniach z lat 1793–94 ilości podawano w beczkach liczących po czterdzieści garnców; odnotowano ich dwieście dwadzieścia. Miasto miało prawo do dwunastu jarmarków rocznie, a około 1767 roku pracował tu młyn konny i wiatrak — dwa sposoby mielenia obok siebie, jeden powolny, ale zawsze dostępny, drugi szybszy, lecz zależny od pogody.",
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

  districtsHeading: "Do których części Radziejowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i centrum po osiedla przy wylotach dróg. Dojeżdżam też do wsi w okolicznej gminie wiejskiej.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Radziejów też przyjadę",
  nearbyParagraphs: [
    "Piotrków Kujawski, Strzelno, Kruszwica, Aleksandrów Kujawski, Brześć Kujawski, Izbica Kujawska i Włocławek są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Piotrków Kujawski", "Strzelno", "Kruszwica", "Brześć Kujawski"],

  about: blokOMnie("do Radziejowa", "w Radziejowie", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Radziejowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w okolicznej gminie wiejskiej. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Radziejów to gmina miejska i siedziba powiatu, a obok istnieje odrębna gmina wiejska o tej samej nazwie — do obu przyjeżdżam tak samo.",
    },
    ...faqWspolne("w Radziejowie"),
    {
      question: "Jak odtworzyć przepis zapisany w szklankach i kostkach?",
      answer:
        "Nie przez przeliczniki — dawne i domowe miary były zmienne, więc każdy przelicznik jest przybliżeniem czyjejś innej kuchni. Działa odtworzenie od końca: zrobić raz dokładnie według zapisu, tą szklanką i tą łyżką, i zważyć to, co wyszło. Od tego momentu przepis jest w gramach i przestaje zależeć od czyjejkolwiek szklanki.",
    },
    {
      question: "Czy warto kupić Thermomix dla wbudowanej wagi?",
      answer:
        "Nie. Waga jest realnie wygodna, bo waży prosto do naczynia i nie trzeba stawiać drugiej miski — ale waga kuchenna za czterdzieści złotych zrobi to samo. Nie sprzedaję urządzenia wagą i nie chcę, żeby ktoś kupował je z tego powodu.",
    },
  ],

  geo: { lat: 52.6267, lng: 18.5257 },
};
