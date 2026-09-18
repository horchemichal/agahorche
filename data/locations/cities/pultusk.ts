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
 * PUŁTUSK — powiat pułtuski, woj. mazowieckie.
 * MIASTO 19 010 (GUS 31.12.2024), 23,1 km², 824 os./km².
 *
 * ⚠ HOMONIMY: PUŁTUSK ≠ PŁOŃSK ≠ PŁOCK. FAQ to rozróżnia.
 *
 * HISTORIA:
 * — 1227 — pierwsza wzmianka; 1257 — pierwsza lokacja miejska
 *   (ks. Siemowit); 1339 — ponowna lokacja na prawie
 *   chełmińskim przez bpa Klemensa Pierzchałę,
 * — XV–XVI w. — ważny ośrodek rzemiosła i EKSPORTU ZBOŻA
 *   dzięki położeniu nad Narwią,
 * — 1530 — pierwsza drukarnia na Mazowszu; 1566 — kolegium
 *   jezuickie; 1571 — pierwsze w Polsce seminarium
 *   nauczycielskie.
 *   ⚠ KĄTÓW OD DRUKARNI I SEMINARIUM NIE UŻYWAM —
 *     „NIEPRECYZYJNY JĘZYK PRZEPISÓW", „CZAS W PRZEPISIE",
 *     „KIEDY LICZBY W PRZEPISIE MAJĄ ZNACZENIE",
 *     „ODTWARZANIE PRZEPISU, KTÓREGO NIKT NIE ZAPISAŁ"
 *     oraz „PRZEKAZYWANIE UMIEJĘTNOŚCI" SĄ ZAJĘTE.
 *
 * ⚠⚠ BARTNICTWO W PUSZCZY BIAŁEJ — PODSTAWA KĄTA:
 * miód I WOSK jako produkty puszczy; monografia K. Brauna
 * „Bartnictwo w Puszczy Białej" (1989).
 * ⚠ KĄT „MIÓD" JEST ZAJĘTY. Tematem jest WYŁĄCZNIE WOSK —
 *   drugi produkt tej samej pasieki. TWARDA GRANICA.
 *
 * DALSZE FAKTY:
 * — rejestr z 1229 r. wymienia 251 czarnych bobrów nad Narwią;
 *   spławiano zboże, osadzano flisaków,
 * — od początku XVII w. działał odrębny CECH RYBAKÓW
 *   (wiersza, ość, niewód, żaki, siatki, wędka).
 *   ⚠ KĄT „RYBA" ZAJĘTY — cech wymieniam tylko jako fakt.
 * — ⚠⚠ 30 STYCZNIA 1868, godz. 19:00 — SPADEK METEORYTU
 *   PUŁTUSK, największy deszcz meteorytów kamiennych
 *   w historii; ok. 69 tys. okazów znalezionych do dziś,
 *   obszar spadku 127 km², największy okaz 9,095 kg;
 *   Muzeum Regionalne ma 13 odłamków,
 * — zamek biskupów płockich — dziś Dom Polonii; rejsy
 *   gondolami po Narwi („Wenecja Mazowsza").
 *
 * ⚠ „NAJDŁUŻSZEGO RYNKU W EUROPIE" NIE PISZĘ — źródła podają
 *   różne długości (400 m na pultusk.pl, 380 m gdzie indziej),
 *   a porównania europejskiego nikt nie udokumentował.
 *   Piszę wyłącznie: „jeden z najdłuższych rynków w Polsce".
 *   TWARDA GRANICA.
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE ZNALEZIONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH. NIE WYMYŚLAM ŻADNEGO.
 * ⚠ NAZWY „pułtuskie groszki" NIE UŻYWAM — nieudokumentowana.
 *
 * KĄT: WOSK W KUCHNI — woskowana ściereczka, zalewanie
 * słoików, wosk na serze, świeca nad stołem.
 * Kąt od bartnictwa w Puszczy Białej, które dawało dwa
 * produkty: miód i wosk. O miodzie napisano już wszędzie;
 * wosk jest tym, o którym nikt nie pisze.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że pasieka zawsze dawała dwie rzeczy, a my pamiętamy
 *   tylko o jednej,
 * — ŻE WOSK BYŁ PRZEZ WIEKI MATERIAŁEM UŻYTKOWYM,
 *   nie ciekawostką: uszczelniał, konserwował, świecił,
 * — GDZIE WOSK MA SENS W DZISIEJSZEJ KUCHNI:
 *   — WOSKOWANA ŚCIERECZKA zamiast folii — do przykrycia
 *     miski, zawinięcia sera, pieczywa, kanapki; oddycha,
 *     więc ser nie robi się śliski,
 *   — WOSK NA SERZE dojrzewającym — po co tam jest
 *     i czy się go je (nie),
 *   — ŚWIECA — jedyne źródło światła, które nie zmienia
 *     koloru potrawy tak jak świetlówka,
 * — ⚠⚠ CZEGO NIE ROBIĆ: nie używać świec zapachowych
 *   przy stole, bo zapach miesza się z jedzeniem.
 *   ⚠ ZERO TEZ TOKSYKOLOGICZNYCH O ŚWIECACH. TWARDA GRANICA.
 * — JAK SIĘ WOSKOWANEJ ŚCIERECZKI UŻYWA: ciepłem dłoni,
 *   nie żelazkiem przy stole; myje się ją chłodną wodą,
 *   nigdy gorącą,
 * — CZEGO W NIĄ NIE ZAWIJAĆ: surowego mięsa i ryby,
 * — ŻE TO NIE JEST MODA, TYLKO POWRÓT — tak pakowano
 *   jedzenie, zanim pojawiła się folia,
 * — ŻE WOSK JEST PRZY TYM PRODUKTEM UBOCZNYM, a produkty
 *   uboczne bywają użyteczniejsze niż główne — tak jak
 *   serwatka po serze albo tłuszcz z pieczeni,
 * — UCZCIWIE: urządzenie nie ma z woskiem nic wspólnego,
 * — ale jedna rzecz się łączy: woskowana ściereczka jest
 *   najwygodniejszym sposobem na przykrycie miski z ciastem
 *   albo z kiszonką i na zawinięcie sera zrobionego w domu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ANI PRZEPISU NA ROBIENIE
 *   WOSKOWANYCH ŚCIERECZEK W DOMU (wymagałby temperatur).
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I TOKSYKOLOGICZNYCH
 *   — ani o wosku, ani o świecach, ani o folii.
 *   TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO TEMATU MIODU JAKO SKŁADNIKA — kąt ZAJĘTY.
 * — ZERO tematu pszczół jako sprawy ekologicznej.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „miód" dotyczy MIODU JAKO SKŁADNIKA.
 * — „PAPIER W KUCHNI" (Cybinka) dotyczy PAPIERU.
 * — „ŚWIATŁO PRZY BLACIE" (Zbąszynek) dotyczy OŚWIETLENIA
 *   STANOWISKA PRACY. Świeca pojawia się tu w kontekście
 *   STOŁU, nie blatu — i tylko jednym akapitem.
 * — „LODÓWKA" dotyczy UKŁADU W LODÓWCE.
 * — „BLAT I ŚCIERECZKA" dotyczy MIEJSCA I BAŁAGANU.
 * TUTAJ chodzi o JEDEN MATERIAŁ — wosk — i o to, do czego
 * służy przy jedzeniu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE NAZYWAM rynku najdłuższym w Europie.
 * — NIE PODAJĘ długości rynku (źródła rozbieżne).
 * — NIE WYMYŚLAM produktu lokalnego ani imprezy kulinarnej.
 * — NIE PISZĘ, czy wosk jest jadalny — piszę, że się go
 *   nie je, i na tym poprzestaję.
 * — NIE MYLĘ PUŁTUSKA z PŁOŃSKIEM ani PŁOCKIEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka o Pułtusku pochodzi z 1227 r.,
 *   pierwszej lokacji dokonał w 1257 r. książę Siemowit,
 *   a ponownej w 1339 r. biskup Klemens Pierzchała
 *   na prawie chełmińskim,
 * — w XV i XVI w. miasto było ważnym ośrodkiem rzemiosła
 *   i eksportu zboża dzięki położeniu nad Narwią; rejestr
 *   z 1229 r. wymienia nad tą rzeką 251 czarnych bobrów,
 *   spławiano tędy zboże i osadzano flisaków,
 * — w Puszczy Białej rozwinęło się bartnictwo dające miód
 *   i wosk, a od początku XVII w. działał w Pułtusku odrębny
 *   cech rybaków,
 * — w 1530 r. powstała tu pierwsza drukarnia na Mazowszu,
 *   w 1566 kolegium jezuickie, a w 1571 pierwsze w Polsce
 *   seminarium nauczycielskie,
 * — 30 stycznia 1868 r. o godzinie dziewiętnastej spadł
 *   nad Pułtuskiem największy w historii deszcz meteorytów
 *   kamiennych; do dziś znaleziono około 69 tysięcy okazów
 *   na obszarze 127 km², a największy waży 9,095 kg;
 *   Muzeum Regionalne w Pułtusku ma trzynaście odłamków,
 * — kolegiata Zwiastowania NMP pochodzi z 1449 r. i jest
 *   bazyliką mniejszą od 1975 r.; jej renesansowe polichromie
 *   sklepienia odkryto w 1994 r.; wieża ratuszowa powstała
 *   na początku XV w. i od 1964 r. mieści Muzeum Regionalne,
 *   dzwonnica pochodzi z 1507 r., kaplica św. Marii Magdaleny
 *   z 1538 r., a kościół św. Krzyża z lat 1531–1539,
 * — gotycki zamek biskupów płockich mieści dziś Dom Polonii,
 *   a po Narwi pływają gondole.
 */
export const PULTUSK: CityContent = {
  slug: "pultusk",
  h1: "Thermomix Pułtusk – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Pułtusk — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Pułtusku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pułtusk — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pułtusku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Pułtuska z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Pułtusk"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Pasieka zawsze dawała dwie rzeczy. Pamiętamy tylko o jednej.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pułtusku – jak wygląda prezentacja?",
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
      id: "wosk",
      heading: "Bartnictwo w Puszczy Białej — czyli o drugim produkcie pasieki",
      paragraphs: [
        "W Puszczy Białej pod Pułtuskiem przez stulecia rozwijało się bartnictwo — na tyle mocno, że doczekało się osobnej monografii. Bartnik dostawał z barci dwie rzeczy: miód i wosk. My pamiętamy tylko o pierwszej. A wosk był przez większość tej historii materiałem co najmniej równie potrzebnym: uszczelniał, konserwował i świecił, a przy okazji był walutą, którą płacono daniny.",
        "Chciałabym więc napisać o wosku, a nie o miodzie — bo o miodzie napisano już wszystko, a wosk wrócił ostatnio do kuchni tylnymi drzwiami i mało kto wie, co z nim właściwie robić.",
        "Najważniejsze zastosowanie to woskowana ściereczka. Kawałek bawełny nasączony woskiem, którym przykrywa się miskę albo zawija ser, chleb czy kanapkę. Robi to, czego folia nie potrafi: oddycha. Ser zawinięty w folię po dwóch dniach jest śliski, bo wilgoć nie ma dokąd uciec. W woskowanej ściereczce wysycha powoli i równo, czyli dokładnie tak, jak powinien.",
        "Używa się jej ciepłem dłoni — wosk mięknie od dotyku i ściereczka przykleja się do brzegu miski albo do siebie samej. Nie trzeba gumki ani niczego dociskać. Myje się ją chłodną wodą i odrobiną płynu, nigdy gorącą, bo gorąca po prostu zmyje wosk i po ściereczce.",
        "Jest jedno ograniczenie i warto je znać: nie zawija się w nią surowego mięsa ani ryby. Do wszystkiego innego — warzyw, sera, pieczywa, połówki cytryny, miski z ciastem — nadaje się bardzo dobrze.",
        "Drugie miejsce, gdzie spotykamy wosk przy jedzeniu, to skórka serów dojrzewających. Bywa naturalna, bywa woskowa — ta druga jest tam po to, żeby ser dojrzewał bez wysychania i bez pleśni z zewnątrz. Nie je się jej; zdejmuje się ją przed krojeniem. To brzmi oczywisto, a należy do najczęstszych pytań przy desce serów.",
        "I trzecie, najmniej oczywiste: świeca. W czasach, z których pochodzi pułtuskie bartnictwo, świeca była jedynym światłem nad stołem. Dziś jest dodatkiem, ale ma jedną praktyczną zaletę, o której się nie mówi — nie przekłamuje koloru jedzenia tak, jak potrafi to zrobić zimne świetlówkowe światło, przy którym mięso wygląda szaro, a sos zielonkawo.",
        "Jedna uwaga przy świecach: nie stawiać przy stole świec zapachowych. Zapach miesza się z jedzeniem i psuje obie rzeczy naraz. Do stołu nadaje się wyłącznie świeca bezzapachowa.",
        "Wosk jest przy tym wszystkim produktem ubocznym — bartnik szedł po miód. A produkty uboczne bywają w kuchni użyteczniejsze niż główne: serwatka, która zostaje po serze, tłuszcz z pieczeni, woda po gotowaniu warzyw. Wosk należy do tej samej rodziny rzeczy, które kiedyś wykorzystywano z rozsądku, a potem przestano, bo pojawiło się coś wygodniejszego.",
        "Teraz uczciwie o sprzęcie. Thermomix nie ma z woskiem nic wspólnego i nie udaję, że ma.",
        "Jedna rzecz się jednak łączy, całkiem praktycznie. Jeśli robicie w domu ser albo kiszonki, albo zostawiacie ciasto do wyrośnięcia, to woskowana ściereczka jest najwygodniejszą rzeczą do przykrycia miski — lepszą niż talerz, folia i ręcznik. Przylega, oddycha i nie przywiera do ciasta. Kosztuje tyle co nic i służy przez rok albo dwa.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pułtusku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie zobaczyć, jak w tym urządzeniu robi się domowy ser — powiedzcie przy umawianiu, zaplanuję prezentację pod to.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pułtusku"),
    sekcjaRaty("w Pułtusku"),
    {
      id: "rodzina",
      heading: "Thermomix dla pułtuskiej rodziny",
      paragraphs: [
        "Pułtusk liczy ponad dziewiętnaście tysięcy mieszkańców na dwudziestu trzech kilometrach kwadratowych. Pierwsza wzmianka o mieście pochodzi z 1227 roku, pierwszej lokacji dokonał w 1257 książę Siemowit, a ponownej w 1339 biskup Klemens Pierzchała na prawie chełmińskim. W XV i XVI wieku był to ważny ośrodek rzemiosła i eksportu zboża dzięki położeniu nad Narwią — rejestr z 1229 roku wymienia nad tą rzeką dwieście pięćdziesiąt jeden czarnych bobrów, spławiano tędy zboże i osadzano flisaków, a od początku XVII wieku działał w mieście odrębny cech rybaków. W pobliskiej Puszczy Białej rozwinęło się bartnictwo dające miód i wosk. W 1530 roku powstała tu pierwsza drukarnia na Mazowszu, w 1566 kolegium jezuickie, a w 1571 pierwsze w Polsce seminarium nauczycielskie. 30 stycznia 1868 roku o dziewiętnastej spadł nad Pułtuskiem największy w historii deszcz meteorytów kamiennych: do dziś znaleziono około sześćdziesięciu dziewięciu tysięcy okazów na obszarze stu dwudziestu siedmiu kilometrów kwadratowych, największy waży ponad dziewięć kilogramów, a Muzeum Regionalne ma trzynaście odłamków. Kolegiata Zwiastowania Najświętszej Marii Panny pochodzi z 1449 roku i jest bazyliką mniejszą od 1975; jej renesansowe polichromie sklepienia odkryto w 1994. Wieża ratuszowa powstała na początku XV wieku i od 1964 mieści muzeum, dzwonnica pochodzi z 1507, kaplica świętej Marii Magdaleny z 1538, a kościół Świętego Krzyża z lat 1531–1539. Gotycki zamek biskupów płockich mieści dziś Dom Polonii, a po Narwi pływają gondole — stąd nazwa „Wenecja Mazowsza”. Rynek jest jednym z najdłuższych w Polsce.",
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

  districtsHeading: "Do których części Pułtuska dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — na Stare Miasto na wyspie, do Popław, na osiedla wokół rynku i dalej. Dojeżdżam też do wsi w gminie: Kleszewa, Głodowa, Przemiarowa, Płocochowa, Kacic, Trzcińca, Lipnik Starych i Nowych, Gnojna i Ponikwi.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: ["Stare Miasto", "Popławy"],

  nearbyHeading: "Poza Pułtusk też przyjadę",
  nearbyParagraphs: [
    "Serock, Nasielsk, Maków Mazowiecki, Wyszków i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Serock", "Nasielsk", "Maków Mazowiecki", "Wyszków"],

  about: blokOMnie("do Pułtuska", "w Pułtusku", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Pułtuska bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — łącznie ze Starym Miastem na wyspie i Popławami — oraz do wsi w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Pułtusk nad Narwią, a nie o Płońsk czy Płock.",
    },
    ...faqWspolne("w Pułtusku"),
    {
      question: "Po co w kuchni woskowana ściereczka?",
      answer:
        "Do przykrycia miski i zawinięcia sera, chleba czy warzyw. W odróżnieniu od folii oddycha, więc ser nie robi się śliski, tylko wysycha powoli i równo. Przykleja się ciepłem dłoni, myje chłodną wodą — gorąca zmyje wosk. Nie zawija się w nią surowego mięsa ani ryby.",
    },
    {
      question: "Czy je się woskową skórkę sera?",
      answer:
        "Nie. Wosk na serach dojrzewających jest tam po to, żeby ser dojrzewał bez wysychania i bez pleśni z zewnątrz; zdejmuje się go przed krojeniem. To jedno z najczęstszych pytań przy desce serów.",
    },
    {
      question: "Czy świece przy stole przeszkadzają w jedzeniu?",
      answer:
        "Zapachowe tak — zapach miesza się z jedzeniem i psuje obie rzeczy naraz. Zwykła świeca bezzapachowa ma za to praktyczną zaletę: nie przekłamuje koloru potrawy tak jak zimne świetlówkowe światło, przy którym mięso wygląda szaro, a sos zielonkawo.",
    },
  ],

  geo: { lat: 52.6975, lng: 21.0853 },
};
