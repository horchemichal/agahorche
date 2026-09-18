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
 * BRZEŚĆ KUJAWSKI — powiat włocławski,
 * woj. kujawsko-pomorskie, KUJAWY.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 522 mieszkańców (GUS 31.12.2024), 7,0 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 11 002 osoby, 151,0 km²,
 * 43 miejscowości.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ NIE WYKRYTO ZAWYŻENIA PO STRONIE URZĘDU — rzadkość.
 * ⚠⚠ ODMIANA — POTWIERDZONA SŁOWNIKOWO (PWN):
 *   D. BRZEŚCIA KUJAWSKIEGO,
 *   Ms. W BRZEŚCIU KUJAWSKIM,
 *   przym. BRZESKI.
 *   ⚠ Forma „brzesko-kujawski" jest HISTORYCZNA —
 *   PWN ma o tym osobne hasło w poradni. NIE UŻYWAM JEJ.
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM ŻADNEJ.
 * ⚠⚠⚠ RYZYKO POMYLENIA — NAJWIĘKSZE Z DOTYCHCZASOWYCH:
 *   — BRZEŚĆ NAD BUGIEM (Białoruś) odmienia się TAK SAMO
 *     w członie głównym; różnicuje WYŁĄCZNIE przydawka
 *     „Kujawski". BEZ NIEJ TEKST JEST DWUZNACZNY —
 *     dlatego w tekście zawsze pełna nazwa,
 *   — BRZESKO (małopolskie) ma TEŻ przymiotnik „brzeski";
 *     powiaty brzeskie istnieją w małopolskim i opolskim.
 *   TWARDA GRANICA: nigdy samo „Brześć".
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1332 — zabudowa zamku i miasta murami z wypalanej cegły.
 * — ZAMEK Kazimierza Wielkiego, budowa po 1343:
 *   budynek mieszkalny 12,6 × 23,3 M, plan prostokątny
 *   z lekko wygiętym bokiem południowym i zachodnim,
 *   skarpa 10 m z trzech stron, jedna baszta cylindryczna
 *   w narożniku południowo-wschodnim, mur z cegły
 *   na kamiennym fundamencie.
 *   ⚠ GRUBOŚCI MURÓW I DATY ROZBIÓRKI NIE USTALONO.
 * — 1450 — prawo do DWÓCH dorocznych targów;
 *   1720 — przywilej na OSIEM jarmarków rocznie;
 *   1798 — reforma ścina je z powrotem do CZTERECH.
 * — 1564–1565 — lustracja naliczyła 115 RZEMIEŚLNIKÓW
 *   I 108 HANDLARZY.
 * — 1598 — cechy: garncarzy, sukienników, szewców,
 *   krawców, kupców, łuczników.
 *   ⚠ ŁUCZNIKÓW POMIJAM — wątek zbrojeniowy.
 * — 1838 — 49 ZAWODÓW w mieście; 23 mistrzów krawiectwa,
 *   20 mistrzów szewstwa, 76 kupców.
 * — ⚠⚠⚠ RDZEŃ KĄTA — SZEREG ZABUDOWY:
 *   1793 — 91 DOMÓW, W TYM JEDEN MUROWANY;
 *   1803 — 94 domy, W TYM SZEŚĆ murowanych;
 *   1865 — 49 MUROWANYCH I 67 DREWNIANYCH;
 *   1880 — 160 domów: 120 MUROWANYCH I 40 DREWNIANYCH.
 *   ⚠ W 87 LAT PROPORCJA ODWRÓCIŁA SIĘ Z 1:90 NA 3:1 —
 *   I NIGDY NIE STAŁO SIĘ TO SKOKOWO.
 *   ⚠⚠ NIE PODAJĘ liczby pustych parcel (33 w 1793,
 *   51 wolnych placów w 1880) — patrz etyka.
 * — 1877 — fabryka maszyn; 1904 — apteka;
 *   1923 — zakłady ceramiczne.
 *   ⚠⚠ ZERO CUKROWNI I SUSZARNI CYKORII — patrz etyka.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: BRAK produktu
 *   z gminy Brześć Kujawski. Sprawdzono WSZYSTKIE
 *   dziesięć kategorii wojewódzkich.
 *   ⚠⚠ PUŁAPKA ROZBROJONA: „ser kozi z Mikanowa"
 *   (produkty mleczne, wpis 24.06.2013) brzmi jak produkt
 *   spod Brześcia, bo Mikanowo leży w powiecie włocławskim
 *   — ale karta wskazuje GMINĘ LUBANIE. NIE PRZYPISUJĘ.
 *   TWARDA GRANICA.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: WYMIANA PO JEDNEJ SZTUCE — jak naprawdę powstaje
 * wyposażenie kuchni.
 * Kąt od szeregu zabudowy: w 1793 r. na dziewięćdziesiąt
 * jeden domów przypadał jeden murowany; w 1880 r. było ich
 * sto dwadzieścia na czterdzieści drewnianych. Osiemdziesiąt
 * siedem lat i ani jednego roku, w którym zmieniłoby się
 * wszystko naraz.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w 1793 roku stało w Brześciu Kujawskim
 *   dziewięćdziesiąt jeden domów, z czego JEDEN murowany;
 *   w 1803 — sześć na dziewięćdziesiąt cztery;
 *   w 1865 — czterdzieści dziewięć murowanych na
 *   sześćdziesiąt siedem drewnianych; w 1880 — sto
 *   dwadzieścia na czterdzieści,
 * — ŻE PROPORCJA ODWRÓCIŁA SIĘ PRZEZ OSIEMDZIESIĄT SIEDEM
 *   LAT I NIGDY SKOKOWO: nie było roku, w którym miasto
 *   przebudowano,
 * — ⚠⚠ ŻE DOKŁADNIE TAK POWSTAJE WYPOSAŻENIE KUCHNI —
 *   TO JEST RDZEŃ: nie remontem i nie jednym zakupem,
 *   tylko po jednym garnku, przez lata,
 * — ⚠⚠ I ŻE MA TO KONSEKWENCJĘ, O KTÓREJ NIKT NIE MÓWI:
 *   PRZEZ WIĘKSZOŚĆ TEGO CZASU MA SIĘ KOMPLET NIEDOBRANY.
 *   Dwie dobre patelnie i trzy takie sobie. Jeden garnek,
 *   w którym nic nie przywiera, i cztery, w których
 *   przywiera wszystko,
 * — CO Z TEGO WYNIKA PRAKTYCZNIE:
 *   — ŻE TO JEST NORMALNE I NIE JEST WSTYDEM. Kuchnia
 *     dobrana w komplecie zdarza się właściwie tylko
 *     na zdjęciach,
 *   — ŻE WYMIENIAĆ WARTO TO, CZEGO UŻYWA SIĘ NAJCZĘŚCIEJ,
 *     a nie to, co najbardziej się zepsuło — bo rzecz
 *     używana raz w roku może być byle jaka i nikomu
 *     to nie przeszkadza,
 *   — ŻE DOKUPYWANIE POJEDYNCZO POZWALA SPRAWDZIĆ, ZANIM
 *     SIĘ POWTÓRZY: jedna dobra patelnia używana pół roku
 *     mówi więcej niż każda opinia,
 * — ⚠ UCZCIWIE O SPRZĘCIE — I TU JEST ISTOTA: urządzenie
 *   wielofunkcyjne jest w tej logice WYJĄTKIEM, bo to
 *   jedyny zakup, który zmienia kilka rzeczy naraz.
 *   ⚠⚠ I WŁAŚNIE DLATEGO TRZEBA GO PRZEMYŚLEĆ INACZEJ
 *   NIŻ KOLEJNY GARNEK — nie „dokupię i zobaczę",
 *   tylko „sprawdzam wcześniej, czy wchodzi w to,
 *   co robię". To jest cała różnica i mówię o niej
 *   przed zakupem, nie po.
 *   ⚠ ODSYŁAM DO STRONY O SZUFLADZIE I DO STRONY
 *   O KUPNIE NA WYROST — ROZGRANICZENIE OBOWIĄZKOWE.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO CUKROWNICTWA I BURAKÓW — kąty zajęte.
 * — ⚠⚠ ZERO SOLI — kąt zajęty (Ciechocinek).
 *   Wątku soli bocheńskiej z 1361 r. NIE UŻYWAM.
 * — ⚠ ZERO LICZBY NARZĘDZI W SZUFLADZIE — kąt zajęty
 *   (Lipno). Odsyłam jednym zdaniem.
 * — ⚠ ZERO KUPOWANIA NA WYROST — kąt zajęty (Kobyłka).
 *   Odsyłam jednym zdaniem.
 * — ⚠ ZERO PRZYWIERANIA JAKO TEMATU — kąt zajęty
 *   (Dobre Miasto). Występuje jako przykład.
 * — ⚠ ZERO ZAMIENNIKÓW — kąt zajęty (Kwidzyn) i dotyczy
 *   SKŁADNIKÓW; tutaj chodzi o SPRZĘT.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO SPOŁECZNOŚCI ŻYDOWSKIEJ. Portale poświęcone
 *   tej historii mają o Brześciu Kujawskim DWIE osobne
 *   strony i obie wychodzą w czołówce wyników przy
 *   zapytaniu o historię miasta. TWARDA GRANICA
 *   BEZWZGLĘDNA.
 * — ⚠⚠⚠ ZERO STRUKTURY WYZNANIOWEJ. Kalendarium urzędu
 *   wplata ją w KAŻDĄ historyczną liczbę mieszkańców.
 *   KONSEKWENCJA: LICZB LUDNOŚCI HISTORYCZNEJ NIE CYTUJĘ
 *   W OGÓLE — używam wyłącznie liczb DOMÓW, które takiego
 *   rozbicia nie mają. TWARDA GRANICA.
 * — ⚠⚠ ZERO ZAPAŚCI DEMOGRAFICZNEJ XVII W. (z ok. 1 150
 *   osób w 1564 do 350 w 1663) i ZERO PUSTYCH PARCEL.
 * — ⚠⚠ ZERO UZDROWISKA W GMINIE i ZERO TWIERDZEŃ
 *   ZDROWOTNYCH O WODACH.
 * — ZERO klasztorów, szpitala, kościoła farnego i sporów
 *   z kapitułą — wątki wyznaniowe.
 * — ZERO cukrowni i suszarni cykorii.
 * — ZERO bezrobocia (13,2%) i przyrostu naturalnego.
 * — ZERO łuczników z wykazu cechów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „SZUFLADA" (Lipno) dotyczy LICZBY NARZĘDZI I LICZNIKA
 *   UŻYĆ. ⚠ TUTAJ chodzi o TEMPO WYMIANY I O TO,
 *   ŻE KOMPLET JEST NIEDOBRANY. Odsyłam tam wprost.
 * — „KUPNO NA WYROST" (Kobyłka) dotyczy SPRZĘTU LEPSZEGO
 *   NIŻ POTRZEBY. Odsyłam tam wprost.
 * — „STARY SPRZĘT, KTÓRY NADAL DZIAŁA" (Dąbrowa
 *   Białostocka) dotyczy TEGO, KIEDY NIE WYMIENIAĆ.
 * — „ZAMIENNIKI" (Kwidzyn) dotyczy SKŁADNIKÓW.
 * TUTAJ chodzi o TO, ŻE WYPOSAŻENIE POWSTAJE PO JEDNEJ
 * SZTUCE I PRZEZ LATA JEST NIEDOBRANE.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIGDY nie piszę samego „Brześć" — zawsze pełna nazwa.
 * — NIE UŻYWAM formy „brzesko-kujawski".
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE CYTUJĘ historycznych liczb mieszkańców.
 * — NIE PRZYPISUJĘ miastu sera koziego z Mikanowa.
 * — NIE PISZĘ o cukrowni ani o uzdrowisku.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Brześć Kujawski leży na Kujawach, w powiecie
 *   włocławskim, jest miastem w gminie miejsko-wiejskiej
 *   i liczy 4 522 mieszkańców (GUS, 31.12.2024) na 7 km²;
 *   cała gmina ma 11 002 osoby w czterdziestu trzech
 *   miejscowościach na 151 km²,
 * — w 1332 roku zabudowano zamek i miasto murami
 *   z wypalanej cegły; zamek Kazimierza Wielkiego,
 *   budowany po 1343 roku, miał budynek mieszkalny
 *   o wymiarach 12,6 na 23,3 metra, skarpę dziesięciu
 *   metrów z trzech stron i jedną cylindryczną basztę,
 * — w 1450 roku miasto miało prawo do dwóch dorocznych
 *   targów, w 1720 przywilej dał osiem jarmarków rocznie,
 *   a reforma z 1798 roku ścięła je do czterech,
 * — lustracja z lat 1564–1565 naliczyła tu stu piętnastu
 *   rzemieślników i stu ośmiu handlarzy, a w 1838 roku
 *   w mieście wykonywano czterdzieści dziewięć zawodów,
 *   w tym dwudziestu trzech mistrzów krawiectwa
 *   i dwudziestu mistrzów szewstwa,
 * — w 1793 roku stało w mieście dziewięćdziesiąt jeden
 *   domów, z czego jeden murowany; w 1803 — sześć
 *   murowanych na dziewięćdziesiąt cztery; w 1865 —
 *   czterdzieści dziewięć murowanych i sześćdziesiąt
 *   siedem drewnianych; w 1880 — sto dwadzieścia
 *   murowanych i czterdzieści drewnianych,
 * — fabrykę maszyn uruchomiono w 1877 roku, aptekę
 *   w 1904, a zakłady ceramiczne w 1923.
 */
export const BRZESC_KUJAWSKI: CityContent = {
  slug: "brzesc-kujawski",
  h1: "Thermomix Brześć Kujawski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Brześć Kujawski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Brześciu Kujawskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Brześć Kujawski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Brześciu Kujawskim. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Brześcia Kujawskiego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Brześć Kujawski"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kuchnia dobrana w komplecie zdarza się właściwie tylko na zdjęciach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Brześciu Kujawskim – jak wygląda prezentacja?",
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
      id: "po-jednej-sztuce",
      heading: "Jeden murowany na dziewięćdziesiąt jeden",
      paragraphs: [
        "W 1793 roku stało w Brześciu Kujawskim dziewięćdziesiąt jeden domów. Murowany był jeden.",
        "Dziesięć lat później domów było dziewięćdziesiąt cztery, a murowanych sześć. W 1865 roku — czterdzieści dziewięć murowanych i sześćdziesiąt siedem drewnianych. W 1880 — sto dwadzieścia murowanych i czterdzieści drewnianych.",
        "Proporcja odwróciła się całkowicie: z jednego na dziewięćdziesiąt jeden do trzech na jeden. Zajęło to osiemdziesiąt siedem lat i nie było w nich ani jednego roku, w którym miasto po prostu przebudowano. Zmieniało się po jednym domu.",
        "Dokładnie tak powstaje wyposażenie kuchni.",
        "Nie remontem i nie jednym zakupem, tylko po jednym garnku, przez lata. Coś się zepsuje, coś przyjdzie w prezencie, coś kupi się w promocji, coś zostanie po przeprowadzce.",
        "I ma to konsekwencję, o której nikt nie mówi: przez większość tego czasu ma się komplet niedobrany. Dwie dobre patelnie i trzy takie sobie. Jeden garnek, w którym nic nie przywiera, i cztery, w których przywiera wszystko. Trzy pokrywki pasujące do czegoś, czego już nie ma.",
        "Pierwsza rzecz, którą chcę o tym powiedzieć: to jest normalne i nie jest wstydem. Kuchnia dobrana w komplecie zdarza się właściwie tylko na zdjęciach — i zwykle w takich, na których nikt nigdy nie gotował.",
        "Druga jest praktyczna: wymieniać warto to, czego używa się najczęściej, a nie to, co najbardziej się zużyło. Rzecz używana raz w roku może być byle jaka i naprawdę nikomu to nie przeszkadza. Rzecz używana codziennie zwraca różnicę w cenie w ciągu kilku tygodni — nie w pieniądzach, tylko w tym, że przestaje irytować. O liczbie narzędzi w szufladzie pisałam osobno, przy innym mieście.",
        "Trzecia: dokupywanie pojedynczo ma tę zaletę, że pozwala sprawdzić, zanim się powtórzy. Jedna dobra patelnia używana pół roku mówi więcej niż każda opinia w internecie. Dopiero potem warto kupić drugą.",
        "I teraz uczciwie o sprzęcie, bo tu jest wyjątek od całej tej logiki. Urządzenie wielofunkcyjne jest jedynym zakupem kuchennym, który zmienia kilka rzeczy naraz — a więc jedynym, którego nie da się sprawdzić metodą małych kroków.",
        "Właśnie dlatego trzeba je przemyśleć inaczej niż kolejny garnek. Nie „dokupię i zobaczę”, tylko „sprawdzam wcześniej, czy wchodzi w to, co naprawdę robię”. Pisałam też osobno o kupowaniu sprzętu lepszego, niż wynika z dzisiejszych potrzeb — to pokrewny problem. Tutaj rzecz jest prostsza: to jeden z niewielu zakupów, przy których warto najpierw zobaczyć, a potem zdecydować. Stąd zresztą bezpłatna prezentacja.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/prezentacja/jak-wyglada", label: "Jak wygląda prezentacja" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Brześciu Kujawskim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czego w Twojej kuchni używasz najczęściej — to zwykle pokazuje od razu, czy urządzenie wejdzie w Twój sposób gotowania, czy nie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Brześciu Kujawskim"),
    sekcjaRaty("w Brześciu Kujawskim"),
    {
      id: "rodzina",
      heading: "Thermomix dla brzeskiej rodziny",
      paragraphs: [
        "Brześć Kujawski leży na Kujawach, w powiecie włocławskim, jest miastem w gminie miejsko-wiejskiej i liczy ponad cztery i pół tysiąca mieszkańców na siedmiu kilometrach kwadratowych; cała gmina ma ponad jedenaście tysięcy osób w czterdziestu trzech miejscowościach. W 1332 roku zabudowano zamek i miasto murami z wypalanej cegły. Zamek Kazimierza Wielkiego, budowany po 1343 roku, miał budynek mieszkalny o wymiarach dwanaście sześć na dwadzieścia trzy trzy metra, skarpę dziesięciu metrów z trzech stron i jedną cylindryczną basztę w narożniku. W 1450 roku miasto miało prawo do dwóch dorocznych targów, w 1720 przywilej dał osiem jarmarków rocznie, a reforma z 1798 ścięła je do czterech. Lustracja z lat 1564–1565 naliczyła tu stu piętnastu rzemieślników i stu ośmiu handlarzy — niemal jeden do jednego. W 1838 roku wykonywano w mieście czterdzieści dziewięć zawodów, w tym dwudziestu trzech mistrzów krawiectwa i dwudziestu mistrzów szewstwa. Fabrykę maszyn uruchomiono w 1877 roku, aptekę w 1904, a zakłady ceramiczne w 1923.",
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

  districtsHeading: "Do których części Brześcia Kujawskiego dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i okolic zamku po osiedla przy wylotach dróg. Dojeżdżam też do wsi w gminie, a jest ich czterdzieści kilka.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Brześć Kujawski też przyjadę",
  nearbyParagraphs: [
    "Włocławek, Radziejów, Lubraniec, Kowal, Aleksandrów Kujawski, Chodecz i Izbica Kujawska są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Włocławek", "Radziejów", "Lubraniec", "Kowal"],

  about: blokOMnie("do Brześcia Kujawskiego", "w Brześciu Kujawskim", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Brześcia Kujawskiego bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Brześć Kujawski w powiecie włocławskim — pełna nazwa jest tu istotna, bo sam „Brześć” to zupełnie inne miasto.",
    },
    ...faqWspolne("w Brześciu Kujawskim"),
    {
      question: "Co wymieniać w kuchni najpierw?",
      answer:
        "To, czego używasz najczęściej — a nie to, co najbardziej się zużyło. Rzecz używana raz w roku może być byle jaka i nikomu to nie przeszkadza; rzecz używana codziennie zwraca różnicę w cenie w kilka tygodni, bo po prostu przestaje irytować. Dokupywanie pojedynczo ma też tę zaletę, że pozwala sprawdzić, zanim się powtórzy.",
    },
    {
      question: "Czy Thermomix to po prostu kolejny zakup do kuchni?",
      answer:
        "Nie, i to jest uczciwa różnica. Wyposażenie kuchni powstaje po jednej sztuce, przez lata, więc każdy błąd jest tani i odwracalny. Urządzenie wielofunkcyjne zmienia kilka rzeczy naraz, więc nie da się go sprawdzić małymi krokami. Dlatego warto je najpierw zobaczyć w działaniu, a dopiero potem decydować — stąd bezpłatna prezentacja.",
    },
  ],

  geo: { lat: 52.6063, lng: 18.9014 },
};
