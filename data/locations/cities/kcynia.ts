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
 * KCYNIA — powiat nakielski, woj. kujawsko-pomorskie,
 * PAŁUKI.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 * MIASTO: 4 215 mieszkańców (GUS 31.12.2024), 6,8 km².
 * CAŁA GMINA MIEJSKO-WIEJSKA: 12 074 osoby, 296,9 km²,
 * ok. 70 wsi. Wysokość miasta: 136 m n.p.m.
 * ⚠ NIE MA ODRĘBNEJ GMINY WIEJSKIEJ KCYNIA.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ BEZ ZAWYŻENIA: powierzchnia podawana przez urząd
 *   (29 702 ha) zgadza się z GUS co do 0,03%.
 * ⚠ ODMIANA: D. KCYNI, Ms. W KCYNI, przym. KCYŃSKI —
 *   poświadczony urzędowo w nazwie produktu
 *   „musztarda kcyńska sarepska".
 *   ⚠ NAZWY MIESZKAŃCA NIE USTALONO — NIE UŻYWAM ŻADNEJ.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1624–1631 — kościół farny, najstarszy zabytek Kcyni
 *   ⚠ WYMIENIAM WYŁĄCZNIE JAKO DATĘ I FAKT
 *   ARCHITEKTONICZNY. ZERO WĄTKU WYZNANIOWEGO.
 * — INFRASTRUKTURA Z DATAMI URUCHOMIENIA:
 *   1867 — poczta; 1880 — sąd grodzki;
 *   1887 — połączenie kolejowe z Gnieznem i Nakłem;
 *   ⚠ 1894 — RZEŹNIA MIEJSKA (wymieniam jako datę,
 *   ZERO ROZWIJANIA — ubój);
 *   1906 — GAZOWNIA;
 *   1908 — połączenie z Bydgoszczą i Poznaniem;
 *   1913 — dworzec; 1915 — WODOCIĄGI I WIEŻA CIŚNIEŃ.
 * — cegielnia, młyn przy ul. Podgórnej i mleczarnia
 *   przy ul. Dworcowej ⚠ DAT URUCHOMIENIA NIE USTALONO —
 *   NIE PODAJĘ.
 * ⚠ SPISÓW RZEMIEŚLNIKÓW, CECHÓW ANI LICZBY WIATRAKÓW
 *   NIE USTALONO — NIE ZGADUJĘ.
 * ⚠⚠ HISTORYCZNYCH LICZB LUDNOŚCI NIE UŻYWAM —
 *   ostrożność po doświadczeniu z innymi miastami tego
 *   województwa, gdzie były wplecione w dane wyznaniowe.
 *
 * ⚠⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — TRAFIENIE
 *   I PODSTAWA CAŁEJ STRONY:
 *   „MUSZTARDA KCYŃSKA SAREPSKA",
 *   kategoria: Inne produkty,
 *   ⚠⚠ DATA WPISU: 22 MAJA 2025 R.
 *   (⚠ W obiegu funkcjonuje też data 26.05.2025 —
 *   KARTA PRODUKTU I ZBIORCZA LISTA KATEGORII NA gov.pl
 *   PODAJĄ ZGODNIE 22.05.2025. UŻYWAM 22 MAJA.
 *   TWARDA GRANICA.)
 *   Miejsce pochodzenia: KCYNIA — gmina Kcynia,
 *   bez ryzyka pomyłki.
 *
 *   ⚠⚠ TECHNOLOGIA Z KARTY (bez proporcji i przepisu):
 *   surowiec — nasiona GORCZYCY SAREPSKIEJ; do tego woda,
 *   ocet spirytusowy, cukier, sól oraz przyprawy: pieprz
 *   ziarnisty, ziele angielskie, kminek, kolendra.
 *   PROCES — CZTERY ETAPY, KAŻDY Z CZASEM TRWANIA:
 *   1. oczyszczenie ziaren,
 *   2. MIESZANIE W KADZIACH DĘBOWYCH — NIE KLEJONYCH
 *      I NIE LAKIEROWANYCH — PRZEZ 24 DO 48 GODZIN,
 *   3. UCIERANIE MASY — DO KILKUNASTU GODZIN,
 *   4. ⚠⚠⚠ ODPOWIETRZANIE PRZEZ SZYBKIE MIESZANIE —
 *      KILKA GODZIN. TO JEST RDZEŃ KĄTA.
 *   Przechowywanie w dębowych beczkach.
 *   Cechy z karty: jednorodna, półpłynna masa z widocznymi
 *   fragmentami nasion; barwa żółtobrunatna; konsystencja
 *   lekko kleista, z wyczuwalnymi grudkami; smak ostry,
 *   słodkawy, lekko piekący.
 *   ⚠ ŻADNYCH PROPORCJI I ŻADNEGO PRZEPISU.
 *   ⚠ ZERO NAZW FIRM I PRODUCENTÓW.
 * ⚠ OSIEDLI MIASTA NIE USTALONO — districts PUSTE.
 *
 * KĄT: ODPOWIETRZANIE — mieszanie, które ma coś usunąć,
 * a nie połączyć.
 * Kąt od karty musztardy kcyńskiej: po dobie mieszania
 * i kilkunastu godzinach ucierania przychodzi osobny etap,
 * który trwa kilka godzin i ma jeden cel — wypuścić
 * powietrze. Trzy różne mieszania, każde po coś innego.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że 22 maja 2025 roku na ministerialną Listę Produktów
 *   Tradycyjnych wpisano musztardę kcyńską sarepską,
 *   a karta produktu opisuje proces w czterech etapach
 *   z podanym czasem każdego: oczyszczenie ziaren,
 *   mieszanie w dębowych kadziach przez dobę do dwóch,
 *   ucieranie do kilkunastu godzin — i dopiero potem
 *   odpowietrzanie przez szybkie mieszanie, przez kilka
 *   godzin,
 * — ⚠⚠ ŻE TO SĄ TRZY RÓŻNE MIESZANIA I KAŻDE MA INNY CEL —
 *   TO JEST RDZEŃ. Pierwsze łączy, drugie rozdrabnia,
 *   a trzecie USUWA. Mieszanie po to, żeby czegoś się
 *   pozbyć, brzmi jak sprzeczność, a jest osobną techniką,
 * — ŻE W DOMOWEJ KUCHNI POWIETRZE W MASIE BYWA CELEM,
 *   ALE RÓWNIE CZĘSTO BYWA PROBLEMEM — i prawie nikt
 *   nie rozróżnia, w którym jest przypadku,
 * — GDZIE POWIETRZE PRZESZKADZA, KONKRETNIE:
 *   — W GŁADKIM KREMIE I W MASIE NA TORT pęcherzyki
 *     robią dziury, które widać po pokrojeniu,
 *   — W SOSIE ZMIKSOWANYM NA WYSOKICH OBROTACH masa
 *     jaśnieje i puszy się, a po chwili opada — i wtedy
 *     okazuje się, że sosu jest mniej, niż się wydawało,
 *   — W GALARETCE I W CZYMKOLWIEK, CO MA STĘŻEĆ,
 *     pęcherzyk zostaje na zawsze tam, gdzie był,
 *   — W SŁOIKU I W BUTELCE powietrze uwięzione przy dnie
 *     wypycha zawartość przy zakręcaniu,
 * — ⚠⚠ JAK SIĘ ODPOWIETRZA W DOMU — TRZY RZECZY,
 *   WSZYSTKIE PROSTE:
 *   — STUKNĄĆ NACZYNIEM O BLAT kilka razy; pęcherzyki
 *     idą do góry same, trzeba im tylko pomóc ruszyć,
 *   — PRZEŁOŻYĆ MASĘ ŁYŻKĄ ZAMIAST WYLAĆ — wylewanie
 *     zabiera powietrze ze sobą,
 *   — ZOSTAWIĆ NA CHWILĘ W SPOKOJU: część pęcherzyków
 *     wychodzi sama, jeśli się jej nie przeszkadza,
 * — ŻE TO SAMO DZIAŁA ODWROTNIE I RÓWNIE ŚWIADOMIE:
 *   tam, gdzie powietrze jest celem, miesza się inaczej
 *   i innym narzędziem ⚠ ODSYŁAM DO STRONY O UBIJANIU
 *   PIANY, NIE ROZWIJAM,
 * — ⚠ UCZCIWIE O SPRZĘCIE — I TU JEST RZECZ WAŻNA:
 *   Thermomix na wysokich obrotach NAPOWIETRZA, nawet
 *   jeśli tego nie chcesz. Przy sosach i kremach
 *   to realna pułapka i nikt o niej nie mówi na pokazie.
 *   ⚠ CO Z TYM ZROBIĆ: miksować krócej i na niższych
 *   obrotach, a potem dać masie chwilę postać.
 *   ⚠⚠ NIE PODAJĘ ŻADNYCH USTAWIEŃ ANI CZASÓW —
 *   mówię o kierunku, nie o liczbach. TWARDA GRANICA.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO MUSZTARDY JAKO TEMATU KULINARNEGO —
 *   kąt zajęty (Działoszyce: chrzan, musztarda, ocet).
 *   Musztarda kcyńska występuje WYŁĄCZNIE jako źródło
 *   opisu technologii. NIE PISZĘ o niej jako o dodatku
 *   do jedzenia. TWARDA GRANICA.
 * — ⚠⚠ ZERO OCTU — kąt zajęty. Występuje wyłącznie
 *   w wyliczeniu składników z karty.
 * — ⚠⚠ ZERO OSTROŚCI I PIEPRZU — kąt zajęty
 *   (Krosno Odrzańskie). Smak z karty cytuję raz
 *   i nie rozwijam.
 * — ⚠⚠ ZERO UBIJANIA PIANY — kąt zajęty (Ostrów
 *   Lubelski). Odsyłam jednym zdaniem.
 * — ⚠ ZERO MIESZANIA JAKO TEMATU — kąt zajęty
 *   (Opole Lubelskie). Tam chodzi o to, czego maszyna
 *   nie zrobi za człowieka; TUTAJ o TRZY RÓŻNE CELE
 *   MIESZANIA.
 * — ⚠ ZERO DODAWANIA STOPNIOWO — kąt zajęty (Janikowo).
 * — ⚠ ZERO KONSYSTENCJI — kąt zajęty (Stryków).
 * — ⚠ ZERO DREWNA JAKO MATERIAŁU — kąt zajęty (Czersk).
 *   Kadzie dębowe wymieniam, nie rozwijam.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I PRODUCENTÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI —
 *   ⚠⚠ przy słoikach mówię WYŁĄCZNIE o pęcherzykach
 *   powietrza i o zakręcaniu, NIGDY o przechowywaniu,
 *   pasteryzacji ani trwałości. TWARDA GRANICA.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ZERO wątków wojennych i okupacyjnych.
 * — ZERO wątków wyznaniowych — klasztor, karmelici,
 *   kościół farny WYŁĄCZNIE jako daty i architektura.
 * — ZERO wątków narodowościowych.
 * — ZERO wyludniania (−10,8% miasto, −12,6% gmina)
 *   i bezrobocia.
 * — ZERO rozwijania wątku rzeźni z 1894 r.
 * — ZERO nazw firm i producentów musztardy.
 * — ZERO niemieckiej nazwy miasta.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „CHRZAN, MUSZTARDA, OCET" (Działoszyce) dotyczy
 *   DODATKÓW, PO KTÓRE SIĘGA SIĘ DO LODÓWKI.
 *   ⚠⚠ TO JEST NAJBLIŻSZY KĄT. TUTAJ musztarda nie jest
 *   tematem — jest źródłem opisu PROCESU. Tematem jest
 *   ODPOWIETRZANIE.
 * — „MIESZANIE" (Opole Lubelskie) dotyczy CZYNNOŚCI,
 *   KTÓREJ CZŁOWIEK NIE ZROBI, A MASZYNA TAK.
 * — „BEZA I UBIJANIE PIANY" (Ostrów Lubelski) dotyczy
 *   WPROWADZANIA POWIETRZA. ⚠ TUTAJ chodzi o jego
 *   USUWANIE. Odsyłam tam wprost.
 * — „KONSYSTENCJA" (Stryków) dotyczy GŁADKO CZY
 *   Z KAWAŁKAMI.
 * TUTAJ chodzi o POWIETRZE W MASIE I O TO, KIEDY JEST
 * PRZESZKODĄ.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ daty 26.05.2025 — wiążąca jest 22 maja.
 * — NIE PODAJĘ przepisu ani proporcji na musztardę.
 * — NIE PODAJĘ nazw producentów.
 * — NIE PODAJĘ ustawień ani czasów miksowania.
 * — NIE DORADZAM niczego w sprawie przechowywania.
 * — NIE PODAJĘ spisów rzemieślników — nie ustalono.
 * — NIE PODAJĘ nazw osiedli ani nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kcynia leży na Pałukach, w powiecie nakielskim,
 *   jest miastem w gminie miejsko-wiejskiej i liczy 4 215
 *   mieszkańców (GUS, 31.12.2024) na 6,8 km², na wysokości
 *   136 metrów nad poziomem morza; cała gmina ma 12 074
 *   osoby na 296,9 km², w około siedemdziesięciu wsiach,
 * — najstarszym zabytkiem miasta jest kościół farny
 *   budowany w latach 1624–1631,
 * — pocztę uruchomiono w 1867 roku, sąd grodzki w 1880,
 *   połączenie kolejowe z Gnieznem i Nakłem w 1887,
 *   rzeźnię miejską w 1894, gazownię w 1906, połączenie
 *   z Bydgoszczą i Poznaniem w 1908, dworzec w 1913,
 *   a wodociągi wraz z wieżą ciśnień w 1915,
 * — 22 maja 2025 roku na ministerialną Listę Produktów
 *   Tradycyjnych wpisano musztardę kcyńską sarepską;
 *   z karty produktu wynika, że powstaje z nasion gorczycy
 *   sarepskiej w czterech etapach: po oczyszczeniu ziaren
 *   masę miesza się w dębowych kadziach — nieklejonych
 *   i nielakierowanych — przez dobę do dwóch, następnie
 *   uciera do kilkunastu godzin, a na końcu odpowietrza
 *   przez szybkie mieszanie trwające kilka godzin;
 *   gotowy wyrób przechowuje się w dębowych beczkach,
 *   ma barwę żółtobrunatną i widoczne fragmenty nasion.
 */
export const KCYNIA: CityContent = {
  slug: "kcynia",
  h1: "Thermomix Kcynia – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kcynia — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kcyni: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kcynia — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kcyni. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kcyni z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Kcynia"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Mieszanie po to, żeby czegoś się pozbyć — osobna technika.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kcyni – jak wygląda prezentacja?",
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
      id: "odpowietrzanie",
      heading: "Trzecie mieszanie, które nic nie łączy",
      paragraphs: [
        "22 maja 2025 roku na ministerialną Listę Produktów Tradycyjnych wpisano musztardę kcyńską sarepską. Karta produktu opisuje proces bardzo dokładnie — w czterech etapach, z podanym czasem trwania każdego.",
        "Najpierw oczyszczenie ziaren gorczycy. Potem mieszanie w dębowych kadziach, nieklejonych i nielakierowanych, przez dobę do dwóch. Potem ucieranie masy — do kilkunastu godzin. A na końcu osobny etap, trwający kilka godzin: odpowietrzanie przez szybkie mieszanie.",
        "To są trzy różne mieszania i każde ma inny cel. Pierwsze łączy. Drugie rozdrabnia. Trzecie — usuwa.",
        "Mieszanie po to, żeby się czegoś pozbyć, brzmi jak sprzeczność. A jest osobną techniką i w domowej kuchni przydaje się znacznie częściej, niż się wydaje.",
        "Bo powietrze w masie bywa celem, ale równie często bywa problemem — i prawie nikt nie rozróżnia, w którym jest akurat przypadku.",
        "Gdzie przeszkadza? W gładkim kremie i w masie na tort pęcherzyki robią dziury, które widać dopiero po pokrojeniu — i wtedy jest już za późno. W sosie zmiksowanym na wysokich obrotach masa jaśnieje i puszy się, a po kilku minutach opada; wtedy okazuje się, że sosu jest wyraźnie mniej, niż wyglądało. W galaretce i w czymkolwiek, co ma stężeć, pęcherzyk zostaje na zawsze dokładnie tam, gdzie był. A w słoiku czy butelce powietrze uwięzione przy dnie wypycha zawartość przy zakręcaniu.",
        "Odpowietrza się w domu trzema sposobami i wszystkie są banalnie proste.",
        "Stuknąć naczyniem o blat kilka razy — pęcherzyki idą do góry same, trzeba im tylko pomóc ruszyć z miejsca. Przełożyć masę łyżką zamiast wylać, bo wylewanie zabiera powietrze ze sobą. I zostawić na chwilę w spokoju: część pęcherzyków wychodzi sama, jeśli się jej nie przeszkadza.",
        "Działa to oczywiście też w drugą stronę i równie świadomie — tam, gdzie powietrze jest celem, miesza się inaczej i innym narzędziem. O ubijaniu piany pisałam osobno przy innym mieście.",
        "I uczciwie o sprzęcie, bo jest tu pułapka, o której na pokazach się nie mówi. Thermomix na wysokich obrotach napowietrza, nawet jeśli wcale tego nie chcesz. Przy sosach i kremach to realny problem — masa wychodzi jaśniejsza i bardziej puszysta niż powinna, a potem opada.",
        "Wyjście jest proste: miksować krócej i na niższych obrotach, a potem dać masie chwilę postać. Nie podam Ci tu żadnych liczb, bo zależą od tego, co robisz — ale kierunek jest zawsze ten sam i warto o nim wiedzieć przed pierwszym kremem, a nie po.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kcyni?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli robisz kremy albo masy na torty, powiedz to przy umawianiu — pokażę różnicę między masą zmiksowaną za długo a taką, która postała chwilę.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kcyni"),
    sekcjaRaty("w Kcyni"),
    {
      id: "rodzina",
      heading: "Thermomix dla kcyńskiej rodziny",
      paragraphs: [
        "Kcynia leży na Pałukach, w powiecie nakielskim, jest miastem w gminie miejsko-wiejskiej i liczy ponad cztery tysiące mieszkańców na sześciu i ośmiu dziesiątych kilometra kwadratowego, na wysokości stu trzydziestu sześciu metrów nad poziomem morza; cała gmina ma ponad dwanaście tysięcy osób w około siedemdziesięciu wsiach. Najstarszym zabytkiem miasta jest kościół farny budowany w latach 1624–1631. Pocztę uruchomiono tu w 1867 roku, sąd grodzki w 1880, połączenie kolejowe z Gnieznem i Nakłem w 1887, rzeźnię miejską w 1894, gazownię w 1906, połączenie z Bydgoszczą i Poznaniem w 1908, dworzec w 1913, a wodociągi wraz z wieżą ciśnień w 1915. 22 maja 2025 roku na ministerialną Listę Produktów Tradycyjnych wpisano musztardę kcyńską sarepską.",
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

  districtsHeading: "Do których części Kcyni dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — od rynku i okolic fary po osiedla przy wylotach dróg. Dojeżdżam też do wsi w gminie, a jest ich około siedemdziesięciu.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Kcynię też przyjadę",
  nearbyParagraphs: [
    "Szubin, Nakło nad Notecią, Żnin, Mrocza, Łabiszyn, Wągrowiec i Gniezno są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Szubin", "Nakło nad Notecią", "Żnin", "Mrocza"],

  about: blokOMnie("do Kcyni", "w Kcyni", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kcyni bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi w gminie — a gmina jest rozległa, liczy około siedemdziesięciu wsi. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kcyni"),
    {
      question: "Jak pozbyć się pęcherzyków powietrza z masy?",
      answer:
        "Trzy sposoby, wszystkie proste. Stuknąć naczyniem o blat kilka razy — pęcherzyki idą do góry same, trzeba im tylko pomóc ruszyć. Przełożyć masę łyżką zamiast wylać, bo wylewanie zabiera powietrze ze sobą. I zostawić na chwilę w spokoju, bo część wychodzi sama. Ma to znaczenie wszędzie tam, gdzie masa ma stężeć: w kremie, w masie na tort, w galaretce.",
    },
    {
      question: "Czy Thermomix napowietrza masę, gdy tego nie chcę?",
      answer:
        "Tak, na wysokich obrotach napowietrza — i przy sosach oraz kremach to realna pułapka, o której na pokazach się nie mówi. Masa wychodzi jaśniejsza i bardziej puszysta, niż powinna, a po kilku minutach opada. Wyjście: miksować krócej i na niższych obrotach, a potem dać masie chwilę postać.",
    },
  ],

  geo: { lat: 52.9917, lng: 17.4884 },
};
