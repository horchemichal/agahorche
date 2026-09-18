import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * KOBYLIN — powiat krotoszyński, woj. wielkopolskie.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ KOBYLIN NIE MA
 *   w powiecie krotoszyńskim.
 * MIASTO: 3 196 mieszkańców (GUS 31.12.2024), 4,9 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   656,3 os./km², iloraz daje 652,2. ROZBIEŻNOŚĆ 4,1.
 *   NIE PODAJĘ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ NAJLUDNIEJSZE MIASTO TEJ FALI.
 *   ⚠ WYSOKOŚĆ: 104 m n.p.m. PODAJĘ.
 * CAŁA GMINA: 7 663 osoby, 112,1 km², gęstość
 *   69 os./km².
 *   ⚠ [ZW — 7 663 / 112,1 = 68,4 → 69. Różnica 0,64.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 *   ⚠ Drugie źródło podaje 112,37 km². PODAJĘ 112,1.
 * SOŁECTWA: 20 SOŁECTW i 25 MIEJSCOWOŚCI
 *   (GUS Vademecum). PODAJĘ OBIE.
 *   ⚠⚠ Ewidencja podaje 20 obrębów i 27 miejscowości —
 *   ⚠⚠⚠ RÓŻNICY NIE ROBIĘ KĄTEM (Kleczew), ALE
 *   RDZEŃ KĄTA OPIERAM NA WYKAZIE EWIDENCYJNYM (27)
 *   I MÓWIĘ WPROST, Z KTÓREGO WYKAZU LICZĘ.
 * ⚠ GEO: 51,7158 / 17,2267.
 *   ⚠⚠ Wariant en.wikipedii 51,700 / 17,233 jest
 *   zaokrąglony do pełnych minut (różnica ok. 1,75 km)
 *   — NIE UŻYWAM.
 *
 * ⚠⚠⚠ ODMIANA — BRAK CYTATÓW URZĘDOWYCH:
 *   D. do KOBYLINA · Ms. w KOBYLINIE ·
 *   N. Kobylinem · C. Kobylinowi.
 *   ⚠⚠⚠ TO REKONSTRUKCJA GRAMATYCZNA (typ „Szczecin →
 *   w Szczecinie"), NIE CYTAT. Jedyna forma znaleziona
 *   w źródłach to mianownik w nazwie wsi „Stary
 *   Kobylin". W TEKŚCIE UŻYWAM TYCH FORM, bo są
 *   regularne, ALE PRZYMIOTNIKA NIE UŻYWAM WCALE —
 *   „kobyliński" niepotwierdzony [NP].
 *   ⚠⚠⚠ BŁĄD 1: „w Kobylinu" zamiast „w Kobylinie".
 *   ⚠⚠⚠ BŁĄD 2: przeniesienie odmiany z KOBYLINA-
 *   -BORZYM — nazwa dwuczłonowa odmienia się inaczej.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ KOLIZJE NAZW — NAJPOWAŻNIEJSZE W TEJ FALI:
 *   — ⚠⚠⚠ GMINA KOBYLIN-BORZYMY — woj. PODLASKIE,
 *     powiat wysokomazowiecki, siedziba we WSI.
 *     WSPOMINAM OBOWIĄZKOWO.
 *     ⚠⚠⚠ LICZB TEJ GMINY (119,6 km², 3 378 osób)
 *     NIE PODAJĘ I NIE PORÓWNUJĘ — porównanie
 *     „gmina bez miasta większa od gminy z miastem"
 *     byłoby figurą, a figury porównawcze mam zajęte
 *     (Stęszew). WYMIENIAM SAMĄ NAZWĘ I WOJEWÓDZTWO.
 *   — ⚠⚠ WIEŚ GÓRKA w tej gminie — nazwa wspólna
 *     z miastem MIEJSKA GÓRKA, o którym piszę w tej
 *     samej fali. WSPOMINAM.
 *   — KOBYLNICA (pomorskie) i KOBYLANKA
 *     (zachodniopomorskie) — nazwy podobne.
 *     WSPOMINAM JEDNYM ZDANIEM.
 *
 * ⚠⚠ DATY:
 *   — PRAWA MIEJSKIE: „PRZED 1303" — nadawca [NP].
 *     PODAJĘ Z ZASTRZEŻENIEM „przed".
 *   — Utraty praw, rynku, ratusza i rzeki NIE USTALONO
 *     [NP] — NIE PODAJĘ.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *   ⚠⚠⚠ NAZWY INSTYTUTU HODOWLI ROŚLIN W SMOLICACH
 *     NIE WYMIENIAM — nazwa instytucji.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — TRZY PARY, TRZY RÓŻNE KRYTERIA:
 *   W WYKAZIE EWIDENCYJNYM GMINY KOBYLIN (27 POZYCJI)
 *   SZEŚĆ NAZW TWORZY TRZY PARY, A KAŻDA PARA JEST
 *   ROZRÓŻNIONA INNYM KRYTERIUM:
 *     KOBYLIN / STARY KOBYLIN — kryterium WIEKU,
 *     ZALESIE WIELKIE / ZALESIE MAŁE — kryterium
 *       ROZMIARU,
 *     SMOLICE / SMOLICE-KOLONIA — kryterium FORMY
 *       OSADNICZEJ.
 *   TRZY PARY, TRZY RÓŻNE SPOSOBY ODRÓŻNIANIA,
 *   W JEDNEJ GMINIE.
 *   FAKT DODATKOWY: TRZY NAZWY ZACZYNAJĄ SIĘ
 *   OD „STAR-" (Stary Kobylin, Starygród, Starkówiec),
 *   A ANI JEDNA OD „NOW-". GMINA MA TRZY „STARE"
 *   MIEJSCOWOŚCI I ZERO „NOWYCH".
 *   ⚠⚠ PROCENTÓW NIE LICZĘ — podaję sześć z dwudziestu
 *   siedmiu i trzy z dwudziestu siedmiu, bez dzielenia.
 *   ⚠⚠⚠ MÓWIĘ WPROST, ŻE LICZĘ Z WYKAZU
 *   EWIDENCYJNEGO, a GUS podaje 25 miejscowości.
 *   ⚠ PUENTA: miasto ma prawa miejskie „przed 1303",
 *   a STARY KOBYLIN trwa obok jako osobna jednostka
 *   z własnym obrębem. Osada, od której miasto się
 *   oddzieliło, nie została wchłonięta.
 *   ⚠⚠⚠ TEJ PUENTY NIE ROZWIJAM W FIGURĘ „wzięte
 *   z części, a całość została" — kąt ZAJĘTY (Krzyż
 *   Wielkopolski). PODAJĘ JEDNYM ZDANIEM
 *   I ROZGRANICZAM.
 *
 * KĄT: TRZY PARY, TRZY RÓŻNE KRYTERIA
 * — o tym, że rzeczy podobne trzeba odróżniać
 * jednym kryterium, a nie trzema. Kąt z Kobylina:
 * trzy pary nazw w jednej gminie, rozróżnione wiekiem,
 * rozmiarem i formą osadniczą.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w wykazie ewidencyjnym gminy sześć z dwudziestu
 *   siedmiu nazw tworzy trzy pary: Kobylin i Stary
 *   Kobylin, Zalesie Wielkie i Zalesie Małe, Smolice
 *   i Smolice-Kolonia,
 * — że każda para jest rozróżniona innym kryterium:
 *   wiekiem, rozmiarem i formą osadniczą. TO JEST
 *   RDZEŃ,
 * — że trzy nazwy zaczynają się od „star-", a żadna
 *   od „now-",
 * — ⚠⚠ że liczę z wykazu ewidencyjnego, bo GUS podaje
 *   inną liczbę miejscowości,
 * — ⚠⚠ ŻE W KUCHNI DZIAŁA TO SAMO: opisy na pojemnikach
 *   i w zamrażalniku używają za każdym razem innego
 *   kryterium — raz co, raz kiedy, raz dla kogo,
 * — ⚠⚠ ŻE DLATEGO NIC SIĘ NIE ZNAJDUJE: nie dlatego,
 *   że opisów brakuje, tylko dlatego, że są niespójne,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: jedno kryterium na jedną
 *   półkę. Najlepiej data, bo jest jednoznaczna
 *   i zawsze się przydaje,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: to nie jest wezwanie
 *   do systemu opisywania wszystkiego. Wystarczy jedna
 *   półka albo jedna szuflada — ta, w której najwięcej
 *   ginie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie opisuje
 *   niczego i niczego nie porządkuje. Za to gotowanie
 *   na zapas ma sens tylko wtedy, gdy potem wiadomo,
 *   co jest w zamrażalniku — więc opisywanie jest
 *   warunkiem, nie dodatkiem.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LISTY KANONICZNEJ, KTÓRA NIE JEST SPISEM
 *   — kąt zajęty (Mosina). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam chodziło o to,
 *   czego na liście NIE MA; tu o to, że elementy listy
 *   są odróżniane NIESPÓJNIE. JEDNO ZDANIE
 *   ROZGRANICZAJĄCE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO CZTERECH REJESTRÓW, CZTERECH LICZB —
 *   kąt zajęty (Kleczew). Tu nie liczę rejestrów,
 *   tylko nazwy w jednym.
 * — ⚠⚠⚠ ZERO WZIĘTEGO Z CZĘŚCI, A CAŁOŚĆ ZOSTAŁA —
 *   kąt zajęty (Krzyż Wielkopolski). DLATEGO PUENTY
 *   O STARYM KOBYLINIE NIE ROZWIJAM.
 * — ⚠⚠⚠ ZERO SKRÓTU, KTÓRY ZJADA RÓŻNICĘ — kąt zajęty
 *   (Kostrzyn).
 * — ⚠⚠ ZERO DWÓCH NIEZGODNYCH STANDARDÓW W JEDNYM
 *   BUDYNKU — kąt zajęty (Nowe Skalmierzyce). Tam
 *   dwa standardy były PRAWIE ZGODNE; tu trzy kryteria
 *   są JAWNIE RÓŻNE i to jest problem.
 * — ⚠⚠ ZERO WIĘCEJ EKSPONATÓW NIŻ MIESZKAŃCÓW — kąt
 *   zajęty (Rakoniewice).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM, MAREK I INSTYTUCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 *   ⚠⚠⚠ SZCZEGÓLNIE: PISZĄC O OPISYWANIU ZAMRAŻALNIKA
 *   NIE MÓWIĘ NIC O TERMINACH PRZYDATNOŚCI,
 *   O MROŻENIU JAKO METODZIE KONSERWACJI ANI
 *   O BEZPIECZEŃSTWIE. Piszę wyłącznie o odnajdywaniu
 *   rzeczy.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEGOŚ PORZĄDKU.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA · ZERO UZDROWISK.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE MNOŻĘ powierzchni miasta przez gęstość.
 * — NIE LICZĘ procentów z liczby nazw.
 * — NIE PODAJĘ liczb gminy Kobylin-Borzymy.
 * — NIE PODAJĘ przymiotnika ani nazwy mieszkańca.
 * — NIE MAM cytatów na odmianę — formy są regularne,
 *   ale nieudokumentowane.
 * — NIE PODAJĘ rzeki, rynku ani ratusza.
 * — NIE WYMIENIAM obiektów sakralnych ani nazw
 *   instytucji.
 * — NIE PODAJĘ liczby obiektów w rejestrze zabytków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Kobylin leży w powiecie krotoszyńskim, liczy 3 196
 *   mieszkańców (GUS, 31.12.2024) na 4,9 km² i leży
 *   104 m n.p.m.,
 * — cała gmina miejsko-wiejska to 7 663 osoby
 *   na 112,1 km², czyli 69 osób na kilometr
 *   kwadratowy, i obejmuje 20 sołectw oraz 25
 *   miejscowości według GUS,
 * — w wykazie ewidencyjnym gminy, liczącym 27 pozycji,
 *   sześć nazw tworzy trzy pary rozróżnione trzema
 *   różnymi kryteriami: Kobylin i Stary Kobylin
 *   (wiek), Zalesie Wielkie i Zalesie Małe (rozmiar),
 *   Smolice i Smolice-Kolonia (forma osadnicza),
 * — trzy nazwy w tym wykazie zaczynają się od „star-"
 *   — Stary Kobylin, Starygród i Starkówiec — a żadna
 *   od „now-",
 * — prawa miejskie Kobylin miał już przed 1303 r.,
 * — w gminie leżą m.in. Zalesie Wielkie, Zalesie Małe,
 *   Smolice, Smolice-Kolonia, Stary Kobylin, Starygród,
 *   Starkówiec, Kuklinów, Długołęka, Targoszyce,
 *   Wyganów i Górka,
 * — odrębna gmina Kobylin-Borzymy leży w województwie
 *   podlaskim.
 */
export const KOBYLIN: CityContent = {
  slug: "kobylin",
  h1: "Thermomix Kobylin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kobylin — cena i prezentacja",
  seoDescription:
    "Thermomix w Kobylinie w powiecie krotoszyńskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kobylin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kobylinie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kobylina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dwudziestu sołectw w gminie.",

  highlights: highlightyStandardowe("Kobylin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy pary nazw. Trzy różne sposoby odróżniania.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kobylinie – jak wygląda prezentacja?",
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
      id: "trzy-kryteria",
      heading: "Trzy pary, trzy różne kryteria",
      paragraphs: [
        "W wykazie ewidencyjnym gminy Kobylin jest dwadzieścia siedem pozycji — liczę właśnie z tego wykazu, bo GUS podaje inną liczbę miejscowości. Sześć z tych nazw tworzy trzy pary.",
        "Kobylin i Stary Kobylin — para odróżniona wiekiem. Zalesie Wielkie i Zalesie Małe — odróżnione rozmiarem. Smolice i Smolice-Kolonia — odróżnione formą osadniczą. Trzy pary, trzy zupełnie różne sposoby robienia tego samego.",
        "I jeszcze jedno: trzy nazwy w tym wykazie zaczynają się od „star-” — Stary Kobylin, Starygród i Starkówiec — a żadna nie zaczyna się od „now-”. Gmina ma trzy miejscowości „stare” i ani jednej „nowej”.",
        "Na marginesie, bo ten szczegół jest ładny: miasto miało prawa miejskie już przed 1303 rokiem, a Stary Kobylin trwa obok jako osobna jednostka z własnym obrębem ewidencyjnym.",
        "Piszę o tym, bo w kuchni odróżniamy rzeczy dokładnie tak samo — czyli za każdym razem inaczej.",
        "Pojemnik w zamrażalniku podpisany „rosół”. Drugi „na niedzielę”. Trzeci „dla Zuzi”. Czwarty „12.03”. Piąty bez podpisu, bo przecież widać. Każdy z tych opisów jest sensowny z osobna: jeden mówi co, drugi kiedy, trzeci dla kogo, czwarty od kiedy. Razem nie mówią nic, bo nie da się ich porównać.",
        "I dlatego nic się nie znajduje. Nie dlatego, że opisów brakuje — dlatego, że są niespójne. Szukając „tego z fasolą”, trzeba przejrzeć wszystko, bo równie dobrze mogło zostać podpisane datą albo imieniem.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o liście, na której czegoś brakuje. Tu jest inny problem — na liście jest wszystko, tylko każdy element opisano według innej zasady.",
        "Ruch jest jeden: jedno kryterium na jedną półkę. Najlepiej data, bo jest jednoznaczna, zawsze się przydaje i nie wymaga myślenia w momencie podpisywania. Co w środku, i tak zwykle widać.",
        "Uczciwie o drugiej stronie, bo to nie jest wezwanie do zaprowadzania systemu w całej kuchni. Wystarczy jedna półka albo jedna szuflada — ta, w której najwięcej ginie. Reszta może zostać taka, jaka jest, i nic złego się nie stanie.",
        "I uczciwie o sprzęcie, bo to się łączy bezpośrednio. Thermomix niczego nie opisuje i nie porządkuje. Ale gotowanie na zapas — a to jeden z głównych powodów, dla których ludzie kupują urządzenie — ma sens wyłącznie wtedy, gdy potem wiadomo, co się w tym zapasie znajduje. Opisywanie jest tu warunkiem, nie dodatkiem, i warto o tym wiedzieć przed zakupem.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Co Thermomix właściwie robi" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kobylinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, czy gotujecie na zapas i czy potem to odnajdujecie. To dwa różne pytania i drugie bywa ważniejsze.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kobylinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Kobylina",
      paragraphs: [
        "Kobylin leży w powiecie krotoszyńskim, liczy 3 196 mieszkańców (GUS, 31.12.2024) na 4,9 kilometra kwadratowego i leży sto cztery metry nad poziomem morza — najwyżej z miast, o jakich pisałam w tej okolicy; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 7 663 osoby na 112,1 kilometra kwadratowego, czyli sześćdziesiąt dziewięć osób na kilometr, i obejmuje dwadzieścia sołectw oraz dwadzieścia pięć miejscowości według GUS. Prawa miejskie Kobylin miał już przed 1303 rokiem. W gminie leżą między innymi Zalesie Wielkie i Zalesie Małe, Smolice i Smolice-Kolonia, Stary Kobylin, Starygród, Starkówiec, Kuklinów, Długołęka, Targoszyce, Wyganów i Górka.",
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

  districtsHeading: "Do których części Kobylina dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu sołectw w gminie. Nazywają się między innymi: Zalesie Wielkie, Zalesie Małe, Smolice, Smolice-Kolonia, Stary Kobylin, Starygród, Starkówiec, Kuklinów, Długołęka, Targoszyce, Wyganów, Górka, Łagiewniki i Raszewy. Wszędzie bez dopłaty.",
    "Dwie uwagi. Językowa: mówi się „do Kobylina” i „w Kobylinie”, a nie „w Kobylinu”; przymiotnika od nazwy miasta nie używam, bo nie znalazłam go w żadnym źródle. I praktyczna: w województwie podlaskim jest gmina Kobylin-Borzymy — nazwa dwuczłonowa i całkiem inne miejsce — a podobnie brzmią też Kobylnica w pomorskim i Kobylanka w zachodniopomorskim; przy umawianiu warto powiedzieć „Kobylin w powiecie krotoszyńskim”. W tej gminie leży też wieś Górka, której nazwa jest wspólna z miastem Miejska Górka w powiecie rawickim.",
  ],
  districts: [],

  nearbyHeading: "Poza Kobylin też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Krotoszyna, Zdun, Jutrosina, Miejskiej Górki, Borku Wielkopolskiego i Koźmina Wielkopolskiego — wszędzie bezpłatnie, tak samo jak w samym Kobylinie.",
  ],
  nearbyTowns: ["Krotoszyn", "Zduny", "Jutrosin", "Miejska Górka", "Borek Wielkopolski", "Koźmin Wielkopolski"],

  about: blokOMnie("do Kobylina", "w Kobylinie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kobylina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi. Językowa: poprawnie jest „do Kobylina” i „w Kobylinie”, a nie „w Kobylinu”; przymiotnika od nazwy nie używam, bo nie udało mi się go potwierdzić. I praktyczna: w podlaskim jest gmina Kobylin-Borzymy, a podobnie brzmią Kobylnica w pomorskim i Kobylanka w zachodniopomorskim — przy umawianiu warto powiedzieć „Kobylin w powiecie krotoszyńskim”.",
    },
    ...faqWspolne("w Kobylinie"),
    {
      question: "Mam pełny zamrażalnik i nigdy nie wiem, co w nim jest. Od czego zacząć?",
      answer:
        "Od jednego kryterium na jedną półkę — i Kobylin pokazuje, na czym polega problem. W wykazie ewidencyjnym tamtejszej gminy sześć z dwudziestu siedmiu nazw tworzy trzy pary, a każda jest odróżniona inaczej: Kobylin i Stary Kobylin wiekiem, Zalesie Wielkie i Małe rozmiarem, Smolice i Smolice-Kolonia formą osadniczą. Każdy sposób z osobna jest sensowny, razem nie da się ich porównać. W zamrażalniku wygląda to tak: jeden pojemnik podpisany „rosół”, drugi „na niedzielę”, trzeci „dla Zuzi”, czwarty datą. Nic nie ginie z braku opisów, tylko z ich niespójności. Najlepsza jest data — jednoznaczna i nie wymaga myślenia przy podpisywaniu. I bez przesady: wystarczy jedna półka, ta, w której najwięcej ginie.",
    },
    {
      question: "Czy Thermomix ułatwia gotowanie na zapas?",
      answer:
        "Samo gotowanie tak: większą porcję robi się w nim bez pilnowania, w jednym naczyniu, więc nakład pracy prawie nie rośnie wraz z ilością. Ale urządzenie nie porządkuje zapasu i nie podpisuje pojemników, a gotowanie na zapas ma sens tylko wtedy, gdy potem wiadomo, co się w tym zapasie znajduje. To warunek, nie dodatek — i warto o nim wiedzieć przed zakupem, bo dla wielu osób właśnie ta część decyduje o tym, czy zapasy się przydają, czy zalegają.",
    },
  ],

  geo: { lat: 51.7158, lng: 17.2267 },
};
