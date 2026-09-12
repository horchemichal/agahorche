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
 * PASŁĘK — gmina miejsko-wiejska w powiecie elbląskim.
 * MIASTO 11 658, GMINA 18 150 (GUS 31.12.2024). 38 SOŁECTW.
 *
 * PRAWA MIEJSKIE 29 WRZEŚNIA 1297 r., akt wydał WIELKI MISTRZ
 * KRZYŻACKI MEINHARD VON QUERFURT. Miasto lokowali osadnicy
 * z NIDERLANDÓW i od nich wzięła się jego dawna nazwa —
 * NAZWY NIE PRZYTACZAM. Wcześniejsza wzmianka o terenie:
 * 1231 (terra Passalucensis).
 * PRZYNALEŻNOŚĆ: POGEZANIA / PRUSY GÓRNE. TO NIE JEST ANI
 * WARMIA, ANI MAZURY — najczęstszy błąd przy tym mieście.
 *
 * ⚠ OBALONE, KLUCZOWE: PASŁĘK NIE LEŻY NAD PASŁĘKĄ.
 * Rzeka Pasłęka ma źródła pod Olsztynkiem, płynie na północ
 * i uchodzi do Zalewu Wiślanego; jedyne miasto na jej trasie
 * to Braniewo. PASŁĘK LEŻY NAD WĄSKĄ. Wspólny jest tylko
 * rdzeń nazwy.
 *
 * ZAMEK: przebudowa z drewnianego na murowany od 1320 r.,
 * ukończona 1578 r. — BUDOWA TRWAŁA DWIEŚCIE PIĘĆDZIESIĄT LAT
 * Z PRZERWAMI. To jest podstawa kąta.
 * KOŚCIÓŁ ŚW. BARTŁOMIEJA — budowa od 1320 r.; ORGANY
 * 1717–1719.
 * MURY MIEJSKIE — ceglane z I poł. XIV w., obwód ok. 1200 m,
 * rozbudowa na przełomie XV/XVI w. Trzy bramy: Kamienna,
 * Garncarska, Młyńska. Baszty: Gruba, Prochowa, Białego
 * Płaszcza. Brama Młyńska odbudowana 1996, Brama Kamienna
 * remontowana 1997.
 * ⚠ OBALONE: „najdłuższe zachowane mury miejskie w Polsce" —
 * 1200 m to OBWÓD PIERWOTNY, a zachowane fragmenty są
 * w większości obniżone. NIE UŻYWAM SUPERLATYWU.
 * CERKIEW PRAWOSŁAWNA z XVII w. KANAŁ ELBLĄSKI przebiega
 * przez gminę. 30 POMNIKÓW PRZYRODY.
 * 1635 — wstępne rozmowy pokojowe polsko-szwedzkie w mieście.
 * JARMARK ŚW. BARTŁOMIEJA — impreza cykliczna. DATY NIE PODAJĘ.
 *
 * KĄT: PRZERWA W ŚRODKU GOTOWANIA — co zrobić, gdy trzeba
 * wyjść, a danie jest w połowie. Kąt od zamku budowanego
 * z przerwami przez dwieście pięćdziesiąt lat.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przerwa w środku gotowania to sytuacja codzienna,
 *   o której nie mówi żaden przepis,
 * — że dania dzielą się na te, które przerwę wybaczają,
 *   i te, w których przerwa jest końcem,
 * — co wybacza: gulasze, sosy, zupy, kasze, wywary, farsze,
 *   ciasta wymagające wyrastania,
 * — czego nie wybacza: ubite piany, emulsje, karmel, wszystko
 *   panierowane i smażone, ciasto naleśnikowe w trakcie,
 *   masy, które tężeją,
 * — że najlepszy moment na przerwę to koniec etapu, a nie
 *   jego środek — i że warto tak planować,
 * — że urządzenie ma tę przewagę nad garnkiem, że przerwane
 *   danie zostaje w zamkniętym naczyniu i nikt go nie musi
 *   pilnować,
 * — i ODMOWA: nie doradzam, jak długo przerwane danie może
 *   stać ani czy wolno je potem dokończyć.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD o bezpieczeństwie przerwanego dania,
 *   o czasie stania i o dokańczaniu po godzinach.
 *   ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE UŻYWAM SUPERLATYWU o murach.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM żadnej z niemieckich nazw miasta ani nie piszę
 *   o zmianie nazwy urzędowej w 1701 r.
 * — ZERO roku 1945 i zniszczeń.
 * — ZERO wysiedleń i akcji „Wisła".
 * — ZERO historii społeczności żydowskiej — to temat
 *   wymagający osobnej wrażliwości, nie wplatam go w treść
 *   handlową.
 * — NIE ROBIĘ TŁA z wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Przerwa w używaniu"
 * dotyczy tygodni bez sprzętu. „Danie, które może poczekać"
 * (Kamieńsk) dotyczy dania GOTOWEGO, które czeka na ludzi.
 * „Wszystko przygotowane przed startem" (Sulejów) dotyczy
 * przygotowań. „Ciepło, które zostaje" (Błaszki) dotyczy
 * minut po wyłączeniu. Tutaj chodzi o PRZERWANIE PROCESU
 * w połowie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że miasto leży nad Pasłęką.
 * — NIE UŻYWAM superlatywu o murach miejskich.
 * — NIE PODAJĘ daty Jarmarku św. Bartłomieja w 2026 r.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PRZYPISUJĘ Pasłękowi produktu z Listy Produktów
 *   Tradycyjnych — nie znaleziono żadnego.
 * — NIE PODAJĘ daty ustanowienia obszaru chronionego
 *   krajobrazu doliny Wąskiej.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 11 658, gmina 18 150 mieszkańców, 38 sołectw,
 * — prawa miejskie 29 września 1297 r. od wielkiego mistrza
 *   krzyżackiego Meinharda von Querfurt; miasto lokowali
 *   osadnicy z Niderlandów,
 * — Pasłęk leży nad Wąską, nie nad Pasłęką,
 * — zamek przebudowywano z drewnianego na murowany od 1320
 *   do 1578 r.,
 * — kościół świętego Bartłomieja budowany od 1320 r.,
 *   z organami z lat 1717–1719,
 * — ceglane mury miejskie z pierwszej połowy XIV w.
 *   o pierwotnym obwodzie około 1200 m; zachowane bramy
 *   i baszty, Brama Młyńska odbudowana w 1996 r.,
 * — w mieście jest cerkiew prawosławna z XVII w.,
 * — przez gminę przebiega Kanał Elbląski,
 * — w 1635 r. prowadzono tu wstępne rozmowy pokojowe
 *   polsko-szwedzkie,
 * — cyklicznie odbywa się Jarmark świętego Bartłomieja.
 */
export const PASLEK: CityContent = {
  slug: "paslek",
  h1: "Thermomix Pasłęk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pasłęk (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Pasłęku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pasłęk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pasłęku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pasłęka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Pasłęk i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Przerwa w środku gotowania to sytuacja codzienna. Żaden przepis o niej nie mówi.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pasłęku – jak wygląda prezentacja?",
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
      id: "przerwa",
      heading: "Zamek budowany dwieście pięćdziesiąt lat — czyli o przerwie w środku gotowania",
      paragraphs: [
        "Pasłęk dostał prawa miejskie 29 września 1297 roku, aktem wielkiego mistrza krzyżackiego Meinharda von Querfurt, a lokowali go osadnicy sprowadzeni z Niderlandów. Od razu prostuję najczęstszą pomyłkę: miasto nie leży nad Pasłęką. Rzeka o tej nazwie zaczyna się pod Olsztynkiem i uchodzi do Zalewu Wiślanego, a jedyne miasto na jej trasie to Braniewo. Pasłęk leży nad Wąską i tyle. Wspólny jest rdzeń nazwy, nie geografia.",
        "Ale najbardziej interesuje mnie tu zamek. Zaczęto go przebudowywać z drewnianego na murowany w 1320 roku, a skończono w 1578. Dwieście pięćdziesiąt osiem lat — czyli budowa z przerwami tak długimi, że kolejne pokolenia zastawały ją w połowie i podejmowały tam, gdzie ktoś przestał.",
        "I o tym chcę napisać, bo to jest sytuacja z każdej kuchni, o której nie mówi żaden przepis: co zrobić, gdy trzeba wyjść, a danie jest w połowie. Dzwoni telefon, trzeba odebrać dziecko, ktoś przyjechał. Przepisy piszą się tak, jakby człowiek miał czterdzieści minut bez przerwy — a prawie nikt ich nie ma.",
        "Rzecz w tym, że dania bardzo różnie znoszą przerwanie i warto wiedzieć, które są które. Przerwę wybaczają wszystkie te, w których nic gwałtownego się nie dzieje: gulasze, sosy, zupy, wywary, kasze, farsze, dania duszone. Ciasto drożdżowe wręcz lubi, gdy się o nim na chwilę zapomni. Tu przerwa nie kosztuje nic.",
        "I są dania, dla których przerwa to koniec. Ubita piana opada i drugi raz się jej nie ubije. Emulsja się rozwarstwia. Karmel zastyga w kamień. Panierka po odstawieniu mięknie i nie odzyska chrupkości. Masa, która ma tężeć, tężeje właśnie wtedy, kiedy nie trzeba. Przy tych rzeczach lepiej nie zaczynać, jeśli wiadomo, że za dwadzieścia minut ktoś zadzwoni do drzwi.",
        "Praktyczny wniosek jest prosty: najlepszy moment na przerwę to koniec etapu, a nie jego środek. Jeśli wiecie, że będziecie musieli wyjść, warto doprowadzić danie do naturalnego punktu — sos gotowy, farsz zrobiony, warzywa rozdrobnione — i dopiero wtedy zostawić. Etap zamknięty czeka spokojnie. Etap przerwany w połowie zwykle nie.",
        "Urządzenie ma tu jedną realną przewagę nad garnkiem i to jest uczciwa zaleta, nie chwyt sprzedażowy: przerwane danie zostaje w zamkniętym naczyniu. Nie stoi na palniku, nie trzeba go pilnować, nic nie kipi ani nie przywiera do dna, bo nic się nie dzieje. Wracacie i po prostu dokańczacie.",
        "I granica: nie powiem Wam, jak długo przerwane danie może czekać ani czy wolno je dokończyć po dwóch godzinach. To pytanie o bezpieczeństwo żywności, nie o technikę, a ja odpowiadam tylko na to drugie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pasłęku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli w Waszym domu gotowanie zawsze coś przerywa — powiedzcie o tym przy umawianiu. Dobiorę dania, które to znoszą, zamiast takich, które wymagają czterdziestu minut bez telefonu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pasłęku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pasłęckiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko dwanaście tysięcy mieszkańców, a cała gmina ponad osiemnaście, w trzydziestu ośmiu sołectwach. Prawa miejskie Pasłęk dostał 29 września 1297 roku, a lokowali go osadnicy z Niderlandów. Historycznie to nie jest ani Warmia, ani Mazury, tylko Pogezania i Prusy Górne — rozróżnienie warto znać, bo mylone jest nagminnie. Zamek przebudowywano tu z drewnianego na murowany od 1320 do 1578 roku, kościół świętego Bartłomieja zaczęto budować w 1320, a jego organy pochodzą z lat 1717–1719. Z ceglanych murów miejskich z czternastego wieku zachowały się bramy i baszty; Bramę Młyńską odbudowano w 1996 roku. W mieście stoi też siedemnastowieczna cerkiew prawosławna, a przez gminę przebiega Kanał Elbląski. W 1635 roku prowadzono tu wstępne rozmowy pokojowe polsko-szwedzkie.",
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

  districtsHeading: "Do których części gminy Pasłęk dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu ośmiu sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Pasłęk też przyjadę",
  nearbyParagraphs: [
    "Elbląg, Morąg, Młynary, Miłakowo, Ostróda i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Elbląg", "Morąg", "Młynary", "Miłakowo"],

  about: blokOMnie("do Pasłęka", "w Pasłęku i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Pasłęka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu ośmiu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy okazji prostuję częstą pomyłkę: Pasłęk leży nad Wąską, a nie nad Pasłęką — ta rzeka płynie zupełnie inną trasą i mija jedynie Braniewo.",
    },
    ...faqWspolne("w Pasłęku"),
    {
      question: "Co zrobić, gdy trzeba przerwać gotowanie w połowie?",
      answer:
        "Zależy, co gotujecie. Gulasze, sosy, zupy, wywary, kasze i farsze przerwę wybaczają, a ciasto drożdżowe wręcz lubi, gdy się o nim na chwilę zapomni. Nie wybaczają jej ubite piany, emulsje, karmel, panierowane i wszystko, co ma tężeć.",
    },
    {
      question: "Kiedy najlepiej zrobić przerwę?",
      answer:
        "Na końcu etapu, nie w jego środku. Jeśli wiecie, że będziecie musieli wyjść, doprowadźcie danie do naturalnego punktu — sos gotowy, farsz zrobiony, warzywa rozdrobnione — i dopiero wtedy zostawcie. Etap zamknięty czeka spokojnie, przerwany w połowie zwykle nie.",
    },
    {
      question: "Jak długo przerwane danie może stać?",
      answer:
        "Tego Wam nie powiem. To pytanie o bezpieczeństwo żywności, a nie o technikę kuchenną — a ja odpowiadam tylko na to drugie. Zaletą urządzenia jest natomiast to, że przerwane danie zostaje w zamkniętym naczyniu i nie trzeba go pilnować.",
    },
  ],

  geo: { lat: 54.0619, lng: 19.664 },
};
