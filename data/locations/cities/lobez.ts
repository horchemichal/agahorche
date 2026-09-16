import type { CityContent } from "../city-content";
import {
  REGION_POMORZE_ZACHODNIE,
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
 * ŁOBEZ — powiat łobeski, woj. zachodniopomorskie,
 * nad Regą. MIASTO W GMINIE MIEJSKO-WIEJSKIEJ,
 * siedziba powiatu.
 * MIASTO: 9 486 mieszkańców (GUS 31.12.2024), 12,8 km²,
 * gęstość 738,8 os./km², 56–94 m n.p.m.
 * CAŁA GMINA: 12 731 osób, 227,4 km², 34 MIEJSCOWOŚCI.
 * ⚠ NIE MIESZAM LICZB MIASTA I GMINY. TWARDA GRANICA.
 * ⚠ GEO: 53,6392 / 15,6214.
 * ⚠ NIE ISTNIEJE ODRĘBNA GMINA WIEJSKA ŁOBEZ.
 *
 * ⚠⚠⚠ ODMIANA — E RUCHOME, NAJWAŻNIEJSZA RZECZ
 *   JĘZYKOWA NA TEJ STRONIE:
 *   D. ŁOBZA (nie „Łobezu"), Ms. W ŁOBZIE (nie
 *   „w Łobezie"), C. ŁOBZOWI, przym. ŁOBESKI.
 *   ⚠⚠ NIE POTWIERDZONE BEZPOŚREDNIO W PWN — domena
 *   była niedostępna w sesji researchu.
 *   ⭐ ALE PRZYMIOTNIK „ŁOBESKI" JEST PRZESĄDZONY
 *   URZĘDOWĄ NAZWĄ POWIATU ŁOBESKIEGO, a formy „Łobza"
 *   i „w Łobzie" są tym, czego używają instytucje
 *   na miejscu. Stosuję je konsekwentnie.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM — niepotwierdzona.
 * ⚠⚠ PUŁAPKA WYSZUKIWANIA: ŁOBEZ (Pomorze Zachodnie)
 *   ≠ ŁOBZÓW (dzielnica Krakowa, z Pałacem Królewskim).
 *   Obie nazwy wyskakują pod podobnymi frazami.
 *
 * HISTORIA — FAKTY UŻYTE:
 * — 1271 — najstarsza wzmianka (rycerz Wolf Borko).
 * — ⚠⚠ PRAWA MIEJSKIE: „przed 1295", potwierdzone
 *   w 1348 r. na prawie lubeckim. ŹRÓDŁA SIĘ ROZCHODZĄ
 *   CO DO ROKU LOKACJI — piszę „przed 1295 rokiem,
 *   a potwierdzone w 1348", bez wybierania jednej daty.
 * — ⚠⚠⚠ RDZEŃ KĄTA — UKŁAD MIASTA:
 *   RYNEK PROSTOKĄTNY Z RATUSZEM POŚRODKU
 *   i CZTERY GŁÓWNE ULICE WYCHODZĄCE Z NIEGO
 *   PROMIENIŚCIE; mury z XIV w. z DWIEMA BRAMAMI.
 *   Cztery różne drogi prowadzące do tego samego punktu.
 * — ZAMEK BORKÓW: XIII w., przebudowany w 1404 r.
 *   ⚠⚠ SPALENIA I ROZBIÓRKI NIE PODAJĘ — źródła podają
 *   1660 ALBO 1670 dla pożaru i 1832 ALBO 1840
 *   dla rozbiórki. NIE WYBIERAM.
 * — „W ROKU 1782 BYŁO JUŻ PONAD 220 DOMÓW".
 *   ⚠ PODAJĘ JAKO FAKT, BEZ ROBIENIA Z TEGO KĄTA —
 *   „liczby ze spisu jako miara proporcji" zajęte
 *   (Górzno).
 * — ⚠⚠ POŻARÓW (1623, 1637, 1657, 1705) NIE UŻYWAM —
 *   dwa z nich wiążą się wprost z działaniami wojennymi.
 * — 1859 — POŁĄCZENIE KOLEJOWE STARGARD–KOSZALIN
 *   PRZEZ ŁOBEZ.
 * — 1867 — ZAŁOŻENIE STADNINY KONI.
 *   ⚠ PODAJĘ SAMĄ DATĘ I FAKT. Rasy ani liczby koni
 *   NIE USTALONO.
 *   ⚠⚠ DRUGI FAKT Z 1867 R. (szkoła) JEST NIEPEWNY —
 *   dwa źródła przypisują temu rokowi różne rzeczy.
 *   NIE UŻYWAM GO.
 * — PRZEMYSŁ: krochmalnia, młyn, mleczarnia, cegielnia.
 *   ⚠ GORZELNI NIE WYMIENIAM. ⚠ DAT POSZCZEGÓLNYCH
 *   ZAKŁADÓW NIE USTALONO.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH: NIE POTWIERDZONO
 *   wpisu dla Łobza, gminy ani powiatu łobeskiego.
 *   Bazy MRiRW nie udało się przeszukać. NIE TWIERDZĘ
 *   ANI ŻE JEST, ANI ŻE NIE MA. NIE PRZYPISUJĘ PRODUKTU.
 * ⚠ OSIEDLI STATUTOWYCH MIASTA NIE USTALONO —
 *   districts PUSTE.
 *
 * KĄT: CZTERY DROGI DO TEGO SAMEGO — czyli że jedno danie
 * da się zrobić kilkoma metodami i żadna z nich nie jest
 * „tą właściwą".
 * Kąt od układu miasta: rynek z ratuszem pośrodku
 * i cztery główne ulice rozchodzące się z niego
 * promieniście. Cel jeden, dojścia cztery — i o tym,
 * którym się idzie, decyduje to, skąd się zaczyna.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że Łobez ma prostokątny rynek z ratuszem pośrodku
 *   i cztery główne ulice wychodzące z niego promieniście,
 *   a w murach z XIV w. były dwie bramy,
 * — ŻE O WYBORZE DROGI DECYDUJE PUNKT WYJŚCIA,
 *   NIE JAKOŚĆ DROGI — to jest rdzeń,
 * — ⚠⚠ ŻE PRAWIE KAŻDE DANIE DA SIĘ ZROBIĆ NA KILKA
 *   SPOSOBÓW i że w domowej kuchni rozstrzyga o tym
 *   zwykle jedna z trzech rzeczy:
 *   (1) ILE JEST CZASU,
 *   (2) CO JUŻ JEST W DOMU,
 *   (3) CZY MOŻNA PRZY TYM STAĆ, CZY NIE.
 *   ⚠⚠⚠ NIE PODAJĘ ANI JEDNEGO KONKRETNEGO PRZYKŁADU
 *   METODY — to byłaby instrukcja kulinarna.
 *   Piszę o KRYTERIUM WYBORU, nie o metodach,
 * — ⚠⚠ ŻE „TAK SIĘ TEGO NIE ROBI" JEST ZDANIEM
 *   PODEJRZANYM, bo prawie zawsze znaczy „tak się tego
 *   nie robiło w kuchni, z której pochodzi osoba,
 *   która to mówi",
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: TO NIE ZNACZY,
 *   ŻE WSZYSTKIE DROGI SĄ RÓWNE. Różnią się nakładem
 *   pracy i tym, ile trzeba przy nich być — i to są
 *   jedyne dwie różnice, o których mogę uczciwie pisać,
 *   bo są mierzalne. O smaku nie orzekam,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie dokłada nowej
 *   drogi do tych, które już znacie. Zmienia jedną rzecz
 *   w rachunku: przesuwa część dróg z kolumny „trzeba
 *   przy tym być" do kolumny „nie trzeba". Dlatego droga,
 *   która wcześniej odpadała w tygodniu, bywa nagle
 *   możliwa — i to jest cała zmiana, bez cudów.
 *
 * TWARDE GRANICE:
 * — ⚠⚠ ZERO ZAMIENNIKÓW SKŁADNIKÓW — kąt zajęty
 *   (Kwidzyn). Piszę o METODACH, nigdy o SKŁADNIKACH.
 *   TWARDA GRANICA — rozgraniczam wprost.
 * — ⚠⚠ ZERO KROKÓW, KTÓRE ROBIMY BEZ POWODU — kąt zajęty
 *   (Drawsko Pomorskie, ta sama fala). Tam chodzi o KROK
 *   WEWNĄTRZ JEDNEJ METODY; TUTAJ o WYBÓR MIĘDZY
 *   METODAMI. Rozgraniczam wprost.
 * — ⚠⚠ ZERO UKŁADU KUCHNI I TEGO, GDZIE CO STOI — kąt
 *   zajęty (Myślibórz, ta sama fala). Cztery ulice to
 *   metafora METOD, nie rozmieszczenia sprzętów.
 * — ⚠⚠ ZERO PRODUKTÓW GOTOWYCH KONTRA ROBIONYCH SAMEMU —
 *   kąt zajęty (Łabiszyn), i ZERO „DOMOWE KONTRA
 *   PRZEMYSŁOWE" (Mrągowo).
 * — ⚠ ZERO ROSOŁU I WYWARU — kąt zajęty (Gniew).
 * — ⚠ ZERO KSZTAŁTU I POJEMNOŚCI NACZYNIA — kąty zajęte
 *   (Choszczno, Świdwin — ta sama fala).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ⚠⚠⚠ ŻADNEGO OPISU KONKRETNYCH METOD PRZYRZĄDZANIA.
 *   Piszę WYŁĄCZNIE o kryterium wyboru między nimi.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ⚠⚠ przy porównywaniu
 *   metod przyrządzania to najkrótsza droga do wpadki.
 *   NIE PISZĘ, że któraś metoda jest lepsza dla czegoś.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *
 * ⚠ ETYKA — CZEGO NIE WOLNO UŻYĆ:
 * — ⚠⚠⚠ ZERO POŻARÓW Z LAT 1623, 1637 I 1657 — dwa
 *   z nich źródła wiążą wprost z działaniami wojennymi.
 * — ⚠⚠⚠ ZERO DANYCH ZE SPISU WYZNANIOWEGO Z 1886 R.
 *   Źródło podaje rozbicie mieszkańców według wyznania,
 *   w tym liczbę ludności żydowskiej — to prowadzi wprost
 *   do wątku Zagłady. NIE WSPOMINAM.
 *   TWARDA GRANICA BEZWZGLĘDNA.
 * — ⚠⚠ ZERO ROKU 1945 I ZERO PRZEJĘCIA ADMINISTRACJI.
 * — ⚠ ZERO GORZELNI.
 * — ⚠ ŹRÓDŁA ODRZUCONE: superpolonia.info,
 *   infodlapolaka.pl, gminya1.pl, nonsa.pl.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE MIESZAM liczb miasta i gminy.
 * — NIE PODAJĘ roku lokacji jako jednej daty.
 * — NIE PODAJĘ roku pożaru ani rozbiórki zamku.
 * — NIE PODAJĘ rasy ani liczby koni ze stadniny.
 * — NIE UŻYWAM nazwy mieszkańca.
 * — NIE TWIERDZĘ, że gmina ma albo nie ma wpisu na Liście
 *   Produktów Tradycyjnych.
 * — NIE OPISUJĘ ŻADNEJ KONKRETNEJ METODY GOTOWANIA.
 * — NIE PODAJĘ nazw osiedli.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Łobez leży nad Regą, jest siedzibą powiatu łobeskiego
 *   i miastem w gminie miejsko-wiejskiej; liczy
 *   9 486 mieszkańców (GUS, 31.12.2024) na 12,8 km²,
 *   od 56 do 94 m n.p.m., a cała gmina 12 731 osób
 *   na 227,4 km² w 34 miejscowościach,
 * — najstarsza wzmianka pochodzi z 1271 r., prawa miejskie
 *   miasto miało przed 1295 r., a potwierdzono je
 *   w 1348 r. na prawie lubeckim,
 * — miasto ma prostokątny rynek z ratuszem pośrodku
 *   i cztery główne ulice wychodzące z niego promieniście;
 *   w murach z XIV w. były dwie bramy,
 * — zamek Borków wzniesiono w XIII w. i przebudowano
 *   w 1404 r.,
 * — w 1782 r. w mieście było już ponad 220 domów,
 * — w 1859 r. przez Łobez poprowadzono linię kolejową
 *   ze Stargardu do Koszalina, a w 1867 założono tu
 *   stadninę koni,
 * — działały w mieście krochmalnia, młyn, mleczarnia
 *   i cegielnia.
 */
export const LOBEZ: CityContent = {
  slug: "lobez",
  h1: "Thermomix Łobez – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Łobez — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Łobzie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Łobez — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Łobzie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Łobza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi w gminie.",

  highlights: highlightyStandardowe("Łobez"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Do tego samego dania prowadzi zwykle kilka dróg. Wybór zależy od tego, skąd zaczynasz.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łobzie – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co macie w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
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
      id: "cztery-drogi",
      heading: "Cztery ulice, jeden rynek",
      paragraphs: [
        "Łobez ma układ, który widać na pierwszy rzut oka: prostokątny rynek z ratuszem pośrodku i cztery główne ulice wychodzące z niego promieniście. W murach z czternastego wieku były dwie bramy.",
        "Cel jest jeden — środek rynku. Dojść można czterema drogami. I żadna z nich nie jest „tą właściwą”, bo o tym, którą się idzie, decyduje nie jakość drogi, tylko to, skąd się wychodzi.",
        "W kuchni jest dokładnie tak samo i mało która rzecz przynosi tyle spokoju, co przyjęcie tego do wiadomości.",
        "Prawie każde danie da się zrobić na kilka sposobów. Nie chodzi o to, żeby znaleźć jedyny słuszny — chodzi o to, żeby wiedzieć, co w danym dniu rozstrzyga o wyborze.",
        "A rozstrzyga zwykle jedna z trzech rzeczy. Ile jest czasu. Co już jest w domu. I trzecia, najczęściej pomijana: czy można przy tym stać, czy nie można.",
        "To ostatnie kryterium bywa ważniejsze od dwóch pierwszych razem wziętych, a prawie nigdy nie pojawia się w przepisach. Przepis nie wie, że o siedemnastej ktoś odbiera dziecko.",
        "Nie napiszę Wam, które metody do czego — nie jestem od dawania instrukcji kulinarnych i nie ma jednej odpowiedzi, która pasowałaby do wszystkich kuchni. Napiszę co innego: zdanie „tak się tego nie robi” jest zdaniem podejrzanym. W praktyce prawie zawsze znaczy „tak się tego nie robiło w kuchni, z której pochodzi osoba, która to mówi”. To jest informacja o czyimś domu, nie o daniu.",
        "Uczciwie o drugiej stronie, bo bez niej brzmiałoby to zbyt wygodnie. To nie znaczy, że wszystkie drogi są równe. Różnią się nakładem pracy i tym, ile trzeba przy nich być — i to są jedyne dwie różnice, o których mogę pisać uczciwie, bo obie da się zmierzyć. O tym, która wersja smakuje lepiej, nie mam prawa orzekać za nikogo.",
        "Na koniec o urządzeniu i bez obiecywania cudów. Ono nie dokłada nowej, piątej drogi do tych, które już znacie. Robi coś mniej efektownego, ale konkretnego.",
        "Przesuwa część dróg z kolumny „trzeba przy tym stać” do kolumny „nie trzeba”. I tylko tyle — ale to akurat jest ta kolumna, przez którą w tygodniu odpada najwięcej dobrych pomysłów. Droga, która dotąd wchodziła w grę wyłącznie w niedzielę, bywa po prostu możliwa w środę.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Łobzie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, o której godzinie u Was zwykle powstaje obiad — to jedna informacja, a zmienia dobór dań bardziej niż wszystkie pozostałe razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Łobzie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla łobeskiej rodziny",
      paragraphs: [
        "Łobez leży nad Regą, jest siedzibą powiatu łobeskiego i miastem w gminie miejsko-wiejskiej: samo miasto liczy blisko dziewięć i pół tysiąca mieszkańców na dwunastu i ośmiu dziesiątych kilometra kwadratowego, od pięćdziesięciu sześciu do dziewięćdziesięciu czterech metrów nad poziomem morza, a cała gmina ponad dwanaście i pół tysiąca osób na dwustu dwudziestu siedmiu kilometrach kwadratowych, w trzydziestu czterech miejscowościach. Najstarsza wzmianka o Łobzie pochodzi z 1271 roku; prawa miejskie miasto miało już przed 1295 rokiem, a potwierdzono je w 1348 na prawie lubeckim. Układ miasta jest charakterystyczny: prostokątny rynek z ratuszem pośrodku i cztery główne ulice wychodzące z niego promieniście, a w murach z czternastego wieku były dwie bramy. Zamek Borków wzniesiono w trzynastym wieku i przebudowano w 1404 roku. W 1782 było w mieście już ponad dwieście dwadzieścia domów. W 1859 roku poprowadzono przez Łobez linię kolejową ze Stargardu do Koszalina, a w 1867 założono tu stadninę koni; działały w mieście krochmalnia, młyn, mleczarnia i cegielnia.",
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

  districtsHeading: "Do których części Łobza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — wzdłuż wszystkich czterech ulic wychodzących z rynku — i do wszystkich trzydziestu czterech miejscowości w gminie. Bez wyjątku i bez dopłaty za odległość.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza Łobez też przyjadę",
  nearbyParagraphs: [
    "Świdwin jest około trzydziestu kilometrów stąd, a Nowogard, Drawsko Pomorskie i Stargard mieszczą się w tej samej trasie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świdwin", "Nowogard", "Drawsko Pomorskie", "Stargard"],

  about: blokOMnie("do Łobza", "w Łobzie", REGION_POMORZE_ZACHODNIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Łobza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu czterech miejscowości w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo wyszukiwarki to mylą: chodzi o Łobez nad Regą, siedzibę powiatu łobeskiego — nie o krakowski Łobzów.",
    },
    ...faqWspolne("w Łobzie"),
    {
      question: "Czy jest jeden właściwy sposób na zrobienie danego dania?",
      answer:
        "Zwykle nie. Prawie każde danie da się zrobić na kilka sposobów, a w domowej kuchni o wyborze rozstrzyga jedna z trzech rzeczy: ile jest czasu, co już jest w domu i czy można przy tym stać. To trzecie kryterium bywa najważniejsze i prawie nigdy nie pojawia się w przepisach — przepis nie wie, że o siedemnastej ktoś odbiera dziecko.",
    },
    {
      question: "Co w tym rachunku zmienia Thermomix?",
      answer:
        "Jedną rzecz, za to konkretną: przesuwa część sposobów z kolumny „trzeba przy tym stać” do kolumny „nie trzeba”. Nie dokłada nowej metody do tych, które już znacie. Ale to akurat ta kolumna, przez którą w tygodniu odpada najwięcej dobrych pomysłów — i danie, które dotąd wchodziło w grę tylko w niedzielę, bywa po prostu możliwe w środę.",
    },
  ],

  geo: { lat: 53.6392, lng: 15.6214 },
};
