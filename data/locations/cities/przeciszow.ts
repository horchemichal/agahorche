import type { CityContent } from "../city-content";
import {
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
 * PRZECISZÓW — GMINA WIEJSKA w powiecie oświęcimskim. TERYT 1213082.
 * 6 328 mieszkańców (GUS, 31.12.2024), 35,4 km², 181 os./km².
 * −4,9% od 2002 — JEDYNA KURCZĄCA SIĘ z tej czwórki oświęcimskiej.
 * Średni wiek 42,6 — najstarsza z niej. Struktura wieku:
 * 15,1% / 65,1% / 19,8% w wieku 65+. REGON 525 (430 osób fizycznych).
 * Mieszkania: 1 873, średnio 103,8 m², 14 oddanych w 2024.
 * 3 SOŁECTWA: Przeciszów (1 718,8 ha), Piotrowice (1 402,1 ha),
 * Las (467,1 ha). Wójt: Tomasz Kosowski.
 *
 * OŚ STRONY: PRZYSTANEK Z TYSIĄC OSIEMSET OSIEMDZIESIĄTEGO TRZECIEGO
 * ROKU W GMINIE, KTÓRA SIĘ WYLUDNIA. Stacja gotowa w 1883 r., linia
 * Kraków–Oświęcim otwarta w 1884; przystanek działa do dziś na
 * czynnej linii nr 94, obsługiwanej m.in. przez Koleje Małopolskie.
 * A gmina jako jedyna w powiatowej czwórce traci ludzi: −4,9% od 2002,
 * co piąty mieszkaniec ma ponad 65 lat.
 * ⚠️⚠️ TO NIE JEST OŚ KOLEJOWA W SENSIE ZABIERZOWA (przystanki)
 * ANI LISIEJ GÓRY (nieczynna linia). Kolej jest tu TŁEM dla ruchu
 * ludzi, nie tematem samym w sobie. Ciężar kładziemy na demografię.
 * ⚠️ NIE POWTARZAĆ OSI BRZESZCZ („najstarsza i najgęstsza gmina
 * powiatu, kurczy się”) — tam ramą jest kopalnia i gęstość, tu
 * wyjazdy i przystanek.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KOLEJ: przystanek Przeciszów, adres Przeciszów 475, 32-641,
 *   linia nr 94 Kraków Płaszów – Oświęcim; współrzędne przystanku
 *   50,0132894 / 19,3696044; dostosowany dla osób o ograniczonej
 *   mobilności (Portal Pasażera PKP PLK). STACJA UKOŃCZONA W 1883 R.,
 *   LINIA KRAKÓW–OŚWIĘCIM OTWARTA W 1884 (przeciszow.pl/historia).
 *   Obsługiwany m.in. przez Koleje Małopolskie w relacji
 *   Kraków–Oświęcim. ⚠️ LICZBY PAR POCIĄGÓW NIE USTALONO —
 *   rozkłady ładowane dynamicznie. NIE PODAWAĆ,
 * — 3 SOŁECTWA z powierzchniami (przeciszow.pl/o-gminie):
 *   Przeciszów 1 718,8 ha, Piotrowice 1 402,1 ha, Las 467,1 ha,
 * — DROGI I WODY: DK 44 (Gliwice–Kraków), między Wadowicami
 *   a Oświęcimiem, plus drogi wojewódzkie i powiatowe; KANAŁ ŻEGLOWNY
 *   przechodzi przez sołectwo Las; 276 ha wód powierzchniowych;
 *   trzy zlewnie: potok Bachórz, potok Łowiczanka, Wisła (granica
 *   północna); 32 km ścieżek rowerowych; wysokości 220–290 m n.p.m.;
 *   dwie krainy: Dolina Górnej Wisły na północy i Pogórze
 *   Wilamowickie na południu. Lotniska: Katowice 60 km, Kraków 40 km,
 * — STAWY I DOLINA KARPIA: Przeciszów należy do Stowarzyszenia
 *   Dolina Karpia (11 gmin); kompleks stawów „Przyręb” oraz stawy
 *   RSP w Przeciszowie; hodowla ryb kwitła tu od XVI w.
 *   za Myszkowskich. ⚠️ KARP NIE MOŻE BYĆ OSIĄ — to oś ZATORA.
 *   ⚠️ Powierzchni stawów w gminie NIE USTALONO,
 * — OBSZAR ChNP KARPIA ZATORSKIEGO OBEJMUJE TĘ GMINĘ (Zator,
 *   Przeciszów, Spytkowice — łącznie 134 km²),
 * — PIASKOWNIA: złoże kruszywa naturalnego „Przeciszów”, eksploatacja
 *   odkrywkowa przez Krakowskie Zakłady Eksploatacji Kruszywa S.A.;
 *   decyzja środowiskowa na kontynuację wydobycia wydana 16.01.2026.
 *   ⚠️ Wielkości wydobycia i powierzchni złoża NIE USTALONO,
 * — HISTORIA (przeciszow.pl/historia-gminy): XIII w. lokacja na
 *   prawie niemieckim, pierwotnie „Przejców”/„Przeticzów”, Piotrowice
 *   jako Petersdorf; 1325–27 kościół parafialny w Piotrowicach;
 *   1385 erygowanie parafii pw. Narodzenia św. Jana Chrzciciela;
 *   XIV w. Przeciszów należy do Gothardusa; ok. 1441 własność
 *   Mikołaja Myszkowskiego; XV w. trakt z Ukrainy przez Kraków, Zator
 *   i Przeciszów do Oświęcimia, w XVI w. SZLAK MIEDZIOWO-SOLNY;
 *   1578 biskup Piotr Myszkowski dziedziczy Przeciszów; 1627
 *   Ferdynand i Władysław Myszkowscy darowują wieś DOMINIKANOM
 *   KRAKOWSKIM; 1883/1884 stacja i linia kolejowa; 1895 kościół NMP
 *   w Piotrowicach; 1911 OSP; 1975 utworzenie gminy Przeciszów;
 *   1999 przejście do województwa małopolskiego,
 * — IMPREZY: KAŻDE SOŁECTWO MA WŁASNE DOŻYNKI — osobne Dożynki
 *   w Przeciszowie i osobne Święto Plonów w Piotrowicach, co roku
 *   (potwierdzone dla 2022, 2023, 2025, 2026). Do tego Bieg
 *   Przeciszowski (VII edycja 5.09.2026) i Małopolski Pumptrackowy
 *   Tour,
 * — WSPÓŁRZĘDNE (UG, ul. Podlesie 1): 50,0105959 / 19,3714933.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — KARPIA JAKO OSI. To oś ZATORA. Wchodzi jako tło,
 * — KOLEI JAKO OSI SAMEJ W SOBIE. Osie kolejowe należą do ZABIERZOWA
 *   (czynne przystanki) i LISIEJ GÓRY (nieczynna linia). Tu kolej
 *   jest tłem dla ruchu ludzi,
 * — LICZBY PAR POCIĄGÓW,
 * — POWIERZCHNI STAWÓW w gminie ani wielkości wydobycia kruszywa,
 * — ⚠️⚠️ PLANOWANEJ KOPALNI WĘGLA „PRZECISZÓW” w obszarze koncesji
 *   „Oświęcim-Polanka 1”. Istnieje społeczna kampania sprzeciwu,
 *   a aktualnego statusu projektu nie ustalono. TEMAT ŚWIADOMIE
 *   POMINIĘTY — to spór o szkody górnicze i wartość domów, ta sama
 *   kategoria co zapadliska w Trzebini. NIE WPISYWAĆ jako
 *   „perspektywy rozwoju”,
 * — NAZW I LICZBY KÓŁ GOSPODYŃ. Nie ustalono,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH z tej gminy. Nie
 *   znaleziono; obszarowe ChNP karpia zatorskiego to co innego,
 * — BEZROBOCIA I WYNAGRODZEŃ. 7 492,22 zł to dana POWIATOWA;
 *   bezrobocie 4,8% serwis oznacza jako szacunek.
 *
 * PUŁAPKI:
 * — ⚠️ STRONA GMINY PODAJE 6 658 MIESZKAŃCÓW — to zawyżenie o 330
 *   wobec GUS. Ta sama pułapka co w Chełmku i Alwerni. UŻYWAĆ GUS,
 * — SOŁECTWO „LAS” to nazwa własna miejscowości, nie opis terenu,
 * — PRZECISZÓW LEŻY W OBSZARZE ChNP KARPIA ZATORSKIEGO, ale sam
 *   nie ma własnego wpisu na Liście Produktów Tradycyjnych.
 */

export const PRZECISZOW: CityContent = {
  slug: "przeciszow",
  h1: "Thermomix Przeciszów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Przeciszów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Przeciszów: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do Przeciszowa, Piotrowic i Lasu bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Przeciszów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Przeciszów. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Przeciszowa, Piotrowic i Lasu przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie trzy sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Przeciszowie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Przystanek z tysiąc osiemset osiemdziesiątego trzeciego roku",
      paragraphs: [
        "Stacja w Przeciszowie była gotowa w tysiąc osiemset osiemdziesiątym trzecim roku, rok przed otwarciem całej linii z Krakowa do Oświęcimia. Działa do dziś: przystanek leży na czynnej linii numer dziewięćdziesiąt cztery, obsługują go między innymi Koleje Małopolskie, a peron jest przystosowany dla osób o ograniczonej mobilności.",
        "Sto czterdzieści trzy lata w tym samym miejscu. Przez ten czas przez Przeciszów przewinęło się kilka państw i kilka ustrojów, a pociąg jeździ.",
        "Tyle że dziś jeździ w jedną stronę bardziej niż w drugą. Ta gmina jako jedyna w swojej okolicy się kurczy: od dwa tysiące drugiego roku ubyło tu blisko pięć procent mieszkańców. Średni wiek wynosi czterdzieści dwa i sześć dziesiątych, a co piąty mieszkaniec ma ponad sześćdziesiąt pięć lat — dziewiętnaście i osiem dziesiątych procenta.",
        "To nie jest gmina, do której ludzie się wprowadzają. To gmina, z której się wyjeżdża — czasem na osiem godzin, do pracy w Krakowie albo Oświęcimiu, a czasem na stałe.",
        "Ma przy tym dobre położenie: droga krajowa czterdzieści cztery z Gliwic do Krakowa przechodzi przez gminę, do Krakowa jest czterdzieści kilometrów, do Katowic sześćdziesiąt. I trzydzieści dwa kilometry ścieżek rowerowych, co jak na gminę o trzech sołectwach jest liczbą sporą.",
        "Same sołectwa są trzy i bardzo nierówne: Przeciszów ma ponad tysiąc siedemset hektarów, Piotrowice tysiąc czterysta, a Las czterysta sześćdziesiąt siedem. Mimo to każde z nich świętuje dożynki osobno — w Przeciszowie własne, a w Piotrowicach Święto Plonów, co roku, od lat.",
        "Historia jest tu handlowa i wodna. Wieś lokowano na prawie niemieckim w trzynastym wieku, a w piętnastym przechodził tędy trakt z Ukrainy przez Kraków i Zator do Oświęcimia — w szesnastym wieku nazywany szlakiem miedziowo-solnym. Parafię erygowano w tysiąc trzysta osiemdziesiątym piątym, a kościół w Piotrowicach istniał już w latach dwudziestych czternastego wieku.",
        "W tysiąc sześćset dwudziestym siódmym roku Ferdynand i Władysław Myszkowscy darowali Przeciszów dominikanom krakowskim. Wcześniej, od czasów Myszkowskich w szesnastym wieku, kwitła tu hodowla ryb — gmina leży w obszarze objętym Chronioną Nazwą Pochodzenia karpia zatorskiego, razem z Zatorem i Spytkowicami.",
        "Wody jest tu zresztą dużo: dwieście siedemdziesiąt sześć hektarów powierzchni wodnych, trzy zlewnie i kanał żeglowny przechodzący przez sołectwo Las.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Przeciszów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo: Przeciszów, Piotrowice albo Las. Trzy sołectwa to niewiele, ale są rozległe — samo Przeciszów zajmuje ponad tysiąc siedemset hektarów.",
        "Jeśli dojeżdżacie pociągiem do Krakowa albo Oświęcimia, wieczorne terminy sprawdzają się najlepiej. Spotkanie trwa około dwóch godzin i spokojnie mieści się po powrocie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Przeciszów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kiedy dzieci wyjechały, a garnek został ten sam",
      paragraphs: [
        "W gminie, w której co piąty mieszkaniec ma ponad sześćdziesiąt pięć lat, bardzo wiele kuchni obsługuje dziś dwie osoby, choć były urządzane dla pięciu. I to jest sytuacja, o której mówi się rzadko, a która zmienia codzienne gotowanie bardziej niż jakikolwiek nowy przepis.",
        "Problem nie polega na tym, że nie ma dla kogo gotować. Polega na tym, że wszystko jest nie na tę skalę. Garnek za duży, przepis na sześć porcji, a zupa, która w pięcioosobowym domu znikała w jeden wieczór, teraz stoi cztery dni i pod koniec już nikogo nie cieszy.",
        "Pierwsza rzecz, która to porządkuje, to gotowanie mniejszych porcji bez poczucia, że nie warto. Zupa na dwa dni zamiast na tydzień, sos na jeden obiad, jedna porcja kaszy. Przy urządzeniu, które gotuje samo i samo się wyłącza, nie ma znaczenia, czy robi się dużo, czy mało — wysiłek jest ten sam, czyli żaden.",
        "Druga to dzielenie i mrożenie. Większą rzecz robi się raz, rozkłada na porcje i wyjmuje wtedy, kiedy się chce. To jest zresztą najlepsze przygotowanie na wizytę dzieci albo wnuków — bo wtedy nagle trzeba gotować dla siedmiu osób, a nie dla dwóch.",
        "Trzecia dotyczy soli i tego, co się je codziennie. Kiedy zupa, sos i pasta powstają w domu, wiadomo dokładnie, ile w nich soli i cukru — a w tym wieku to nie jest ciekawostka dietetyczna, tylko konkret. Gotowe sosy i zupy w proszku mają jej zwykle wielokrotnie więcej.",
        "Czwarta jest o rękach. Tarcie, ucieranie, siekanie i miksowanie to czynności, które z wiekiem bolą najbardziej — i akurat te urządzenie zabiera w całości.",
        "A kiedy przyjeżdżają wnuki, przydaje się też to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Przeciszów i gotowanie — karp z chronioną nazwą i dwa święta plonów",
    paragraphs: [
      "Zacznę od rozróżnienia, bo bywa mylące. Gmina Przeciszów nie ma własnego wpisu na ministerialnej Liście Produktów Tradycyjnych. Leży za to w obszarze objętym Chronioną Nazwą Pochodzenia karpia zatorskiego — razem z Zatorem i Spytkowicami, na stu trzydziestu czterech kilometrach kwadratowych. To znaczy, że karp wyhodowany w tutejszych stawach może nosić tę chronioną nazwę, ale sama nazwa należy do Zatora.",
      "Hodowla ryb kwitła tu od szesnastego wieku, za Myszkowskich. Do dziś działa kompleks stawów Przyręb oraz stawy spółdzielni w samym Przeciszowie, a gmina należy do Stowarzyszenia Dolina Karpia, obejmującego jedenaście gmin.",
      "Wody jest tu zresztą dużo jak na trzydzieści pięć kilometrów kwadratowych: dwieście siedemdziesiąt sześć hektarów powierzchni wodnych, trzy zlewnie i kanał żeglowny przechodzący przez sołectwo Las.",
      "Dożynki obchodzi się osobno w każdym sołectwie — w Przeciszowie własne, w Piotrowicach Święto Plonów. Przy trzech sołectwach i sześciu tysiącach mieszkańców to znaczy, że każda wieś ma swoją datę i swoje stoły.",
      "Poza karpiem kuchnia jest tu zachodniomałopolska i zwyczajna: ziemniaki, kapusta, zupy, kluski, ciasto drożdżowe, przetwory z ogrodu. Z jedną poprawką, którą warto powiedzieć wprost: w gminie, gdzie co piąty mieszkaniec ma ponad sześćdziesiąt pięć lat, coraz częściej gotuje się dla dwóch osób.",
      "Dla urządzenia najsensowniejsze są tu mniejsze porcje robione bez wysiłku, dzielenie i mrożenie, kontrola soli oraz wszystko, co wymaga tarcia i ucierania. Czego nie zrobi, mówię wprost: nie oprawi ryby i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem i pracą rąk.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Przeciszów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzech, bez żadnej dopłaty za odległość. Gmina liczy ponad sześć tysięcy mieszkańców na trzydziestu pięciu kilometrach kwadratowych.",
    "Sołectwa to: Przeciszów, Piotrowice i Las. Są bardzo nierówne — Przeciszów zajmuje ponad tysiąc siedemset hektarów, Piotrowice tysiąc czterysta, a Las czterysta sześćdziesiąt siedem.",
    "Gmina leży na styku dwóch krain: Doliny Górnej Wisły na północy i Pogórza Wilamowickiego na południu, na wysokości od dwustu dwudziestu do dwustu dziewięćdziesięciu metrów nad poziomem morza. Wisła stanowi jej północną granicę.",
    "W Piotrowicach kościół parafialny istniał już w latach dwudziestych czternastego wieku; obecny, pod wezwaniem Najświętszej Marii Panny, pochodzi z tysiąc osiemset dziewięćdziesiątego piątego roku. Parafię w Przeciszowie erygowano w tysiąc trzysta osiemdziesiątym piątym.",
    "Dojazd: przystanek kolejowy Przeciszów leży na czynnej linii numer dziewięćdziesiąt cztery z Krakowa Płaszowa do Oświęcimia; stacja jest tu od tysiąc osiemset osiemdziesiątego trzeciego roku, a peron dostosowano dla osób o ograniczonej mobilności. Przez gminę biegnie też droga krajowa czterdzieści cztery. Do Krakowa czterdzieści kilometrów, do Katowic sześćdziesiąt.",
  ],
  districts: ["Przeciszów", "Piotrowice", "Las"],

  nearbyHeading: "Zator, Osiek i Polanka Wielka też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Zatorem, Osiekiem, Polanką Wielką, gminą wiejską Oświęcim i Spytkowicami. Dojeżdżam do wszystkich gmin powiatu oświęcimskiego bez doliczania kosztu dojazdu.",
    "Warto wiedzieć, że obszar chroniony karpia zatorskiego obejmuje trzy gminy: Zator, Przeciszów i Spytkowice. Ryba z tutejszych stawów może nosić tę nazwę, choć sam wpis należy do sąsiedniego Zatora.",
  ],
  nearbyTowns: [
    "Zator",
    "Osiek",
    "Polanka Wielka",
    "Oświęcim gmina",
    "Spytkowice",
  ],

  about: blokOMnie("do gminy Przeciszów", "w powiecie oświęcimskim"),

  faq: [
    {
      question: "Mieszkam w Piotrowicach albo w Lesie. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie trzy sołectwa traktuję dokładnie tak samo. Przy umawianiu podaj nazwę wsi i numer domu — sołectwa są rozległe, więc sama nazwa czasem nie wystarcza nawigacji.",
    },
    ...faqWspolne("w gminie Przeciszów"),
    {
      question: "Gotuję już tylko dla dwóch osób. Czy to się jeszcze opłaca?",
      answer:
        "To pytanie pada tu często i zasługuje na uczciwą odpowiedź. Przy dwóch osobach nie chodzi o oszczędność czasu w takiej skali jak przy sześciu — chodzi o co innego. Po pierwsze, mniejsze porcje robi się bez poczucia, że nie warto zaczynać: wysiłek przy zupie na dwa dni i na tydzień jest ten sam, czyli żaden. Po drugie, znika tarcie, ucieranie i siekanie, a to akurat te czynności, które z wiekiem bolą najbardziej. Po trzecie, wiadomo, ile jest soli i cukru, bo wszystko powstaje w domu. A kiedy przyjeżdżają dzieci albo wnuki i nagle trzeba gotować dla siedmiu, to też nie jest problem.",
    },
  ],

  geo: { lat: 50.0105959, lng: 19.3714933 },
};
