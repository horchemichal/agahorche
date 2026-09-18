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
 * WĘGRÓW — powiat węgrowski, woj. mazowieckie.
 * MIASTO 11 791 (GUS 31.12.2024), 35,5 km², 332,0 os./km².
 * PRAWA MIEJSKIE 1441 (Bolesław IV, książę mazowiecki).
 * Plac targowy odnotowany już w 1414 r.
 *
 * ⚠ HOMONIMY: WĘGRÓW ≠ WĘGORZEWO ≠ WĘGIERSKA GÓRKA
 *   ≠ WĄGROWIEC. FAQ to rozróżnia.
 * ⚠⚠ NAZWA NIE POCHODZI OD WĘGRÓW (narodu). Opracowanie
 *   onomastyczne wywodzi ją od hydronimu Węgra Potok,
 *   ze źródłosłowem słowiańskim — związanym z WĘGORZEM albo
 *   z MEANDRYCZNYM CHARAKTEREM RZEK. ⚠ PODAJĘ TO JAKO
 *   USTALENIE JĘZYKOZNAWCZE, NIE JAKO PEWNIK.
 *   ⚠ KĄT „ryba" ZAJĘTY — węgorza NIE ROBIĘ TEMATEM.
 *
 * ⚠⚠ SZKOCCY SUKIENNICY — PODSTAWA KĄTA:
 * Bogusław Radziwiłł sprowadził do Węgrowa SZKOCKICH
 * SUKIENNIKÓW, którzy rozsławili miasto swoimi wyrobami;
 * cudzoziemcy „tak niemieckiego jak szkockiego narodu"
 * dostali równe prawa, a szkoccy rzemieślnicy bywali
 * burmistrzami (Archebald Cambell, Jakub Gordon).
 * ⚠ NIE PISZĘ o szewstwie — źródła wskazują SUKIENNICTWO.
 *
 * DOM GDAŃSKI: barokowa FAKTORIA KUPCÓW GDAŃSKICH z początku
 * XVIII w. przy północnej pierzei rynku; kupcy spławiali
 * ZBOŻE LIWCEM DO BUGU, stąd do Wisły i do morza. Dziś
 * Miejska Biblioteka Publiczna.
 * ⚠ KĄT „targ" ZAJĘTY — placu targowego nie robię tematem.
 *
 * LIWIEC: 142 km długości, lewy dopływ Bugu; dwa źródła
 * (południowe 161 m n.p.m. koło wsi Sobicze, północne koło
 * wsi Zawady), ujście w Kamieńczyku. Dopływy: Stara Rzeka,
 * Helenka, Muchawka, Kostrzyń, Czerwonka, Miedzanka,
 * Osownica. Szerokie koryto, POWOLNY NURT. Ostoja
 * Nadliwiecka włączona do Natura 2000 w 2010 r.
 *
 * DALSZE FAKTY:
 * — pożar 1761 r. strawił około jednej trzeciej miasta
 *   i uderzył w handel,
 *   ⚠ PODAJĘ NEUTRALNIE, BEZ ROZWIJANIA — temat katastrofy.
 * — dziś gospodarka ma charakter rolniczo-przemysłowy,
 *   z przemysłem skupionym na PRZETWÓRSTWIE ROLNO-SPOŻYWCZYM
 *   oraz materiałach budowlanych i meblach; miasto pełni rolę
 *   ośrodka zaopatrzenia dla okolicznych wsi.
 *   ⚠ NAZW FIRM NIE PODAJĘ.
 *
 * ZABYTKI: bazylika mniejsza Wniebowzięcia NMP przy Rynku
 * Mariackim (fundacja kościoła 1414, obecna barokowa);
 * Dom Gdański (pocz. XVIII w.); zespół poreformacki
 * (reformaci przybyli 1672); cmentarz ewangelicki i kaplica
 * cmentarna.
 * ⚠ DAT BUDOWY BAZYLIKI I KOŚCIOŁA POREFORMACKIEGO
 *   NIE PODAJĘ — nieustalone, źródła mówią tylko „barokowy".
 * ⚠ „LUSTRA TWARDOWSKIEGO" NIE WYMIENIAM — brak
 *   wiarygodnego źródła.
 * ⚠⚠ ZERO WĄTKÓW WYZNANIOWYCH. Cmentarz ewangelicki
 *   i zespół poreformacki wymieniam WYŁĄCZNIE jako obiekty
 *   zabytkowe, bez kontekstu. TWARDA GRANICA.
 *
 * ⚠ ŻADNEGO PRODUKTU Z GMINY NIE POTWIERDZONO NA LIŚCIE
 *   PRODUKTÓW TRADYCYJNYCH (weryfikacja niepełna).
 *
 * KĄT: CIEPŁE NA STÓŁ — dlaczego danie stygnie między
 * garnkiem a talerzem i co z tym zrobić.
 * Kąt od szkockich sukienników, którzy rozsławili Węgrów:
 * sukno to materiał wymyślony po to, żeby zatrzymać ciepło
 * — a w kuchni ciepło ucieka najszybciej wtedy, kiedy danie
 * jest już gotowe.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gotowanie kończy się w momencie, w którym większość
 *   ludzi przestaje o daniu myśleć — a wtedy zaczyna się
 *   najszybsza utrata ciepła,
 * — GDZIE CIEPŁO UCIEKA NAPRAWDĘ:
 *   — ZIMNY TALERZ — to jest największy pojedynczy złodziej
 *     ciepła w całym posiłku i zarazem najłatwiejszy
 *     do usunięcia,
 *   — CIENKA WARSTWA NA DUŻEJ POWIERZCHNI — rozłożone
 *     na płasko stygnie w kilka minut,
 *     ⚠ ODSYŁAM DO STRONY O POWIERZCHNI, NIE ROZWIJAM,
 *   — DROGA Z KUCHNI DO POKOJU i czekanie, aż wszyscy usiądą,
 * — ⚠⚠ NAJWAŻNIEJSZA RADA PRAKTYCZNA: PODGRZAĆ TALERZE.
 *   Wystarczy gorąca woda z kranu i wytarcie, albo ustawienie
 *   ich nad garnkiem. Kosztuje minutę i jest jedyną rzeczą
 *   w tym temacie, która daje natychmiastową różnicę,
 * — ŻE DOTYCZY TO SZCZEGÓLNIE MAKARONU, ZIEMNIAKÓW,
 *   JAJECZNICY I WSZYSTKIEGO Z SOSEM — one stygną najszybciej,
 * — ŻE ZUPA W GŁĘBOKIM TALERZU TRZYMA CIEPŁO DŁUŻEJ
 *   niż w płaskim — i to jest cała różnica między naczyniami,
 * — ŻE MIĘSO JEST WYJĄTKIEM: musi odpocząć po upieczeniu
 *   ⚠ ODSYŁAM DO OSOBNEJ STRONY, JEDNYM ZDANIEM,
 * — ŻE PRZY KILKU DANIACH RATUJE KOLEJNOŚĆ WYDAWANIA:
 *   najpierw na stół to, co stygnie najwolniej,
 * — ŻE PRZYKRYCIE TO NIE TO SAMO CO PODGRZANIE
 *   ⚠ ODSYŁAM DO STRONY O OSŁONIE, NIE ROZWIJAM,
 * — ŻE CIEPŁO TO NIE TYLKO TEMPERATURA, ALE I SMAK:
 *   wystygłe danie smakuje słabiej, bo zapach przestaje
 *   z niego uchodzić — dlatego zupa odgrzana bywa lepsza
 *   niż zupa letnia,
 * — UCZCIWIE: urządzenie nie podgrzeje talerzy i nie skróci
 *   drogi do stołu,
 * — ale robi jedną rzecz, która przy tym temacie ma znaczenie:
 *   potrafi utrzymać gotowe danie w ustalonej temperaturze
 *   bez dogotowywania go — więc to, co czeka, nie rozgotowuje
 *   się i nie wysycha, tylko czeka ciepłe.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR W LICZBACH.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I SANITARNYCH.
 *   ZERO tez o trzymaniu ciepłych dań i o bezpieczeństwie
 *   żywności. TWARDA GRANICA.
 * — ⚠ ZERO PORAD DOTYCZĄCYCH WKŁADANIA TALERZY
 *   DO PIEKARNIKA I MIKROFALI — piszę wyłącznie o gorącej
 *   wodzie i o ustawieniu nad garnkiem. TWARDA GRANICA.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠⚠ ZERO WĄTKÓW WYZNANIOWYCH I NARODOWOŚCIOWYCH.
 *   Szkoccy sukiennicy wchodzą WYŁĄCZNIE jako fakt
 *   gospodarczy. TWARDA GRANICA.
 *
 * ⚠ ETYKA:
 * — ZERO tematów wojennych.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ POŻAR 1761 r. PODAJĘ JEDNYM ZDANIEM, NEUTRALNIE.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „OSŁONA — po co się przykrywa jedzenie" (Lipsk) dotyczy
 *   PRZYKRYWANIA.
 * — „SYNCHRONIZACJA — żeby wszystko było gotowe naraz"
 *   (Biała Piska) dotyczy ZGRANIA CZASU GOTOWANIA.
 * — „CIEPŁO, KTÓRE ZOSTAJE" dotyczy DOCHODZENIA DANIA
 *   PO WYŁĄCZENIU.
 * — „POWIERZCHNIA STYKU" (Konstancin) dotyczy STOSUNKU
 *   POWIERZCHNI DO OBJĘTOŚCI.
 * — „ODPOCZYNEK PO UPIECZENIU" dotyczy MIĘSA.
 * — „TALERZ" dotyczy NACZYNIA I SPOSOBU PODANIA.
 *   ⚠ DLATEGO O TALERZU PISZĘ WYŁĄCZNIE JAKO O NOŚNIKU
 *     TEMPERATURY, nigdy o wyglądzie i doborze.
 * TUTAJ chodzi o ODCINEK MIĘDZY GARNKIEM A STOŁEM —
 * o minuty, w których danie jest już gotowe i stygnie.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE WYWODZĘ nazwy miasta od Węgrów jako narodu.
 * — NIE PODAJĘ dat budowy bazyliki ani kościoła
 *   poreformackiego.
 * — NIE WYMIENIAM „lustra Twardowskiego".
 * — NIE PISZĘ o szewstwie — źródła mówią o sukiennictwie.
 * — NIE WYMYŚLAM produktu lokalnego ani święta kulinarnego.
 * — NIE PODAJĘ porad o podgrzewaniu talerzy w piekarniku.
 * — NIE MYLĘ WĘGROWA z WĘGORZEWEM ani WĄGROWCEM.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — plac targowy w Węgrowie odnotowano już w 1414 r.,
 *   a prawa miejskie miasto otrzymało w 1441 r. od Bolesława
 *   IV, księcia mazowieckiego,
 * — nazwy miasta nie wywodzi się od Węgrów: opracowanie
 *   onomastyczne łączy ją z hydronimem Węgra Potok,
 *   o źródłosłowie słowiańskim związanym z węgorzem albo
 *   z meandrycznym charakterem tutejszych rzek,
 * — Bogusław Radziwiłł sprowadził do Węgrowa szkockich
 *   sukienników, którzy rozsławili miasto swoimi wyrobami;
 *   przybysze otrzymali równe prawa, a szkoccy rzemieślnicy
 *   bywali burmistrzami — wśród nich Archebald Cambell
 *   i Jakub Gordon,
 * — przy północnej pierzei rynku stoi Dom Gdański, barokowa
 *   faktoria kupców gdańskich z początku XVIII w.; spławiali
 *   oni zboże Liwcem do Bugu, stamtąd do Wisły i do morza,
 *   a dziś mieści się tam miejska biblioteka,
 * — Liwiec ma 142 km długości i jest lewym dopływem Bugu;
 *   ma dwa źródła i ujście w Kamieńczyku, szerokie koryto
 *   i powolny nurt, a jego dopływami są między innymi Stara
 *   Rzeka, Muchawka, Kostrzyń i Osownica; w 2010 r. Ostoję
 *   Nadliwiecką włączono do sieci Natura 2000,
 * — pożar w 1761 r. strawił około jednej trzeciej miasta,
 * — dziś gospodarka Węgrowa ma charakter rolniczo-przemysłowy,
 *   a przemysł skupia się na przetwórstwie rolno-spożywczym
 *   oraz materiałach budowlanych i meblach; miasto pełni rolę
 *   ośrodka zaopatrzenia dla okolicznych wsi,
 * — przy Rynku Mariackim stoi barokowa bazylika mniejsza
 *   Wniebowzięcia Najświętszej Marii Panny, a kościół
 *   ufundowano tu już w 1414 r.
 */
export const WEGROW: CityContent = {
  slug: "wegrow",
  h1: "Thermomix Węgrów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Węgrów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Węgrowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Węgrów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Węgrowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Węgrowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i okolic.",

  highlights: highlightyStandardowe("Węgrów"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zimny talerz to największy złodziej ciepła w całym posiłku.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Węgrowie – jak wygląda prezentacja?",
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
      id: "cieple-na-stol",
      heading: "Szkoccy sukiennicy w Węgrowie — czyli o drodze z garnka na stół",
      paragraphs: [
        "Bogusław Radziwiłł sprowadził do Węgrowa szkockich sukienników i to oni rozsławili miasto swoimi wyrobami. Przybysze dostali równe prawa, a szkoccy rzemieślnicy bywali tu nawet burmistrzami — w spisach pojawiają się Archebald Cambell i Jakub Gordon. Sukno, którym miasto żyło, jest przy tym materiałem wymyślonym w jednym celu: żeby zatrzymać ciepło.",
        "A w kuchni ciepło ucieka najszybciej dokładnie wtedy, kiedy przestajemy o daniu myśleć — czyli w momencie, w którym jest gotowe. Gotowanie kończy się przy garnku, a posiłek zaczyna się przy stole, i na tym krótkim odcinku ginie więcej, niż się wydaje.",
        "Największym pojedynczym złodziejem ciepła jest zimny talerz. Porcja makaronu albo ziemniaków nałożona na talerz prosto z szafki traci w kilkanaście sekund więcej, niż zdąży stracić przez następne pięć minut. Talerz jest zimny, ma dużą powierzchnię i jest ciężki — zabiera ciepło natychmiast.",
        "I to jest zarazem najłatwiejsza rzecz do naprawienia w całej kuchni. Wystarczy przelać talerze gorącą wodą z kranu i wytrzeć, albo postawić je na chwilę nad garnkiem, w którym coś się gotuje. Kosztuje to minutę i jest jedyną czynnością w tym temacie, która daje różnicę od razu, przy pierwszym obiedzie.",
        "Drugie miejsce, w którym ucieka ciepło, to sposób nałożenia. Danie rozłożone cienko na dużym talerzu stygnie w kilka minut — pisałam o tej zasadzie osobno, przy powierzchni styku. W praktyce oznacza to, że porcja usypana w kopczyk zostanie ciepła dłużej niż rozmazana po całym talerzu.",
        "Trzecie to po prostu droga i czekanie: przeniesienie do pokoju, nakładanie wszystkim po kolei, czekanie, aż ostatnia osoba usiądzie. Przy kilku daniach pomaga kolejność wydawania — najpierw na stół to, co stygnie najwolniej, czyli zupy, gulasze i wszystko gęste; na końcu to, co stygnie najszybciej.",
        "A stygnie najszybciej dokładnie to, co jemy najczęściej: makaron, ziemniaki, jajecznica, ryż, wszystko z rzadkim sosem. Zupa w głębokim talerzu trzyma ciepło wyraźnie dłużej niż w płaskim — to jest ta jedna sytuacja, w której kształt naczynia decyduje bardziej niż cokolwiek innego.",
        "Jest jeden wyjątek, o którym warto pamiętać: mięso po pieczeniu ma odpocząć i nie należy tego skracać. To osobny temat i pisałam o nim gdzie indziej.",
        "Warto też rozdzielić dwie rzeczy, które często się myli. Przykrycie dania spowalnia stygnięcie, ale nie podgrzewa — o samym przykrywaniu pisałam osobno. Talerz podgrzany działa inaczej: on nie zabiera ciepła, zamiast oddawać.",
        "I rzecz, dla której w ogóle warto się tym zajmować: ciepło to nie tylko temperatura, ale i smak. Z wystygłego dania przestają uchodzić zapachy, a bez zapachu jedzenie smakuje wyraźnie słabiej. Dlatego zupa odgrzana do wrzenia bywa lepsza niż ta sama zupa letnia — i dlatego „wystygło” jest w kuchni prawdziwym zarzutem, a nie kaprysem.",
        "Teraz uczciwie o sprzęcie. Thermomix nie podgrzeje talerzy i nie skróci drogi z kuchni do stołu. To zostaje po stronie osoby, która nakłada.",
        "Robi natomiast jedną rzecz, która przy tym temacie ma realne znaczenie: potrafi utrzymać gotowe danie w ustalonej temperaturze, nie dogotowując go dalej. To istotna różnica wobec garnka zostawionego na małym ogniu, w którym wszystko powoli dochodzi, rozgotowuje się i wysycha. Danie, które czeka, ma czekać ciepłe — a nie gotować się dalej.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Węgrowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli u Was do stołu siadają wszyscy o różnych porach — powiedzcie przy umawianiu. To zmienia dobór dań bardziej, niż się wydaje.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Węgrowie"),
    sekcjaRaty("w Węgrowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla węgrowskiej rodziny",
      paragraphs: [
        "Węgrów liczy blisko dwanaście tysięcy mieszkańców na trzydziestu pięciu kilometrach kwadratowych. Plac targowy odnotowano tu już w 1414 roku, a prawa miejskie miasto otrzymało w 1441 od Bolesława IV, księcia mazowieckiego. Nazwy nie wywodzi się od Węgrów: opracowanie onomastyczne łączy ją z hydronimem Węgra Potok, o źródłosłowie słowiańskim związanym z węgorzem albo z meandrycznym charakterem tutejszych rzek. Bogusław Radziwiłł sprowadził do Węgrowa szkockich sukienników, którzy rozsławili miasto swoimi wyrobami — przybysze otrzymali równe prawa, a szkoccy rzemieślnicy bywali burmistrzami, jak Archebald Cambell czy Jakub Gordon. Przy północnej pierzei rynku stoi Dom Gdański, barokowa faktoria kupców gdańskich z początku XVIII wieku; spławiali oni zboże Liwcem do Bugu, stamtąd do Wisły i do morza, a dziś mieści się tam miejska biblioteka. Liwiec ma sto czterdzieści dwa kilometry długości i jest lewym dopływem Bugu: ma dwa źródła, ujście w Kamieńczyku, szerokie koryto i powolny nurt, a jego dopływami są między innymi Stara Rzeka, Muchawka, Kostrzyń i Osownica; w 2010 roku Ostoję Nadliwiecką włączono do sieci Natura 2000. W 1761 roku pożar strawił około jednej trzeciej miasta. Dziś gospodarka Węgrowa ma charakter rolniczo-przemysłowy, a przemysł skupia się na przetwórstwie rolno-spożywczym oraz materiałach budowlanych i meblach; miasto pełni rolę ośrodka zaopatrzenia dla okolicznych wsi. Przy Rynku Mariackim stoi barokowa bazylika mniejsza Wniebowzięcia Najświętszej Marii Panny, a kościół ufundowano tu już w 1414 roku.",
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

  districtsHeading: "Do których części Węgrowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od Rynku Mariackiego po osiedla po północnej stronie i zabudowę nad Liwcem. Dojeżdżam też do okolicznych miejscowości: Liwu, Starejwsi, Korytnicy, Wierzbna i Grębkowa.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Węgrów też przyjadę",
  nearbyParagraphs: [
    "Sokołów Podlaski, Łochów, Siedlce, Mińsk Mazowiecki i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sokołów Podlaski", "Łochów", "Siedlce", "Mińsk Mazowiecki"],

  about: blokOMnie("do Węgrowa", "w Węgrowie", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Węgrowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości, w tym Liwu i Starejwsi. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: chodzi o Węgrów nad Liwcem w powiecie węgrowskim, a nie o Węgorzewo czy Wągrowiec.",
    },
    ...faqWspolne("w Węgrowie"),
    {
      question: "Dlaczego obiad stygnie, zanim wszyscy usiądą?",
      answer:
        "Największym złodziejem ciepła jest zimny talerz — porcja nałożona na talerz prosto z szafki traci w kilkanaście sekund więcej niż przez następne pięć minut. Pomaga też sposób nałożenia: porcja usypana w kopczyk zostaje ciepła dłużej niż rozmazana po całym talerzu.",
    },
    {
      question: "Jak podgrzać talerze przed podaniem?",
      answer:
        "Przelać je gorącą wodą z kranu i wytrzeć albo postawić na chwilę nad garnkiem, w którym coś się gotuje. Kosztuje to minutę i jest jedyną rzeczą w tym temacie, która daje różnicę od razu — szczególnie przy makaronie, ziemniakach, jajecznicy i wszystkim z rzadkim sosem.",
    },
    {
      question: "Czy wystygłe danie naprawdę smakuje gorzej?",
      answer:
        "Tak, i to nie jest kaprys. Z wystygłego dania przestają uchodzić zapachy, a bez zapachu jedzenie smakuje wyraźnie słabiej. Dlatego zupa odgrzana do wrzenia bywa lepsza niż ta sama zupa letnia.",
    },
  ],

  geo: { lat: 52.3992, lng: 22.0165 },
};
