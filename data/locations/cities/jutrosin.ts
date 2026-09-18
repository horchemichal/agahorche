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
 * JUTROSIN — powiat rawicki, woj. wielkopolskie.
 *   ⚠ TEN SAM POWIAT CO BOJANOWO I MIEJSKA GÓRKA.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA (TERYT
 *   3022024 / 3022023).
 * MIASTO: 1 844 mieszkańców (GUS 31.12.2024), 1,6 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 138,3 os./km², iloraz z 1,6 km² daje 1 152,5.
 *   ROZBIEŻNOŚĆ 14,2.
 *   ⚠⚠⚠ POWIERZCHNI ODTWORZONEJ (1,62 km²) TEŻ NIE
 *   PODAJĘ — to rekonstrukcja, nie cytat.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 6 871 osób, 114,9 km², gęstość
 *   60 os./km².
 *   ⚠ [ZW — 6 871 / 114,9 = 59,8. Różnica 0,20.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠⚠ LICZBY 7 005 ZE STRONY GMINY NIE UŻYWAM —
 *   dotyczy 31.12.2025, inny rocznik.
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 19 SOŁECTW i 26 MIEJSCOWOŚCI.
 *   ⚠⚠ OBRĘBÓW (20) NIE PODAJĘ — kąt „samorząd dzieli
 *   drobniej niż kataster" ZAJĘTY (Lwówek).
 *   ⚠⚠⚠ SOŁECTWO „NAD STAWEM" — nazwa będąca
 *   wyrażeniem przyimkowym, w tej samej postaci
 *   w ewidencji gruntów. ⚠⚠ ANGIELSKA WIKIPEDIA
 *   ZAMIENIA JĄ NA NIEISTNIEJĄCE „NADSTAW" —
 *   TEJ FORMY NIE UŻYWAM I NIE CYTUJĘ ŹRÓDŁA.
 *   MIEJSCOWOŚCI (część): Nad Stawem, Nowy Sielec,
 *   Stary Sielec, Dubin, Szkaradowo, Śląskowo,
 *   Zaborowo, Rogożewo, Bartoszewice, Grąbkowo,
 *   Janowo, Ostoje, Płaczkowo.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 14,9 %. PODAJĘ.
 * RZEKA: ORLA. PODAJĘ.
 * ⚠⚠⚠ PRAW MIEJSKICH ANI PIERWSZEJ WZMIANKI
 *   NIE USTALONO [NP] — ŻADNE DOSTĘPNE ŹRÓDŁO
 *   NIE PODAJE ANI DATY NADANIA, ANI ROKU PIERWSZEGO
 *   ZAPISU. TO JEST RDZEŃ KĄTA.
 *   ⚠⚠⚠ NIE ZGADUJĘ I NIE PODAJĘ ŻADNEJ DATY.
 *   ⚠⚠⚠ NIE TWIERDZĘ, ŻE TAKIEJ DATY NIE MA —
 *   twierdzę tylko, że JA JEJ NIE ZNALAZŁAM.
 *   TA RÓŻNICA JEST KLUCZOWA.
 * ⚠ GEO: 51,6523 / 17,1689.
 *
 * ⚠⚠ ODMIANA:
 *   D. do JUTROSINA · Ms. w JUTROSINIE ·
 *   B. Jutrosin · C. Jutrosinowi.
 *   PRZYMIOTNIK: JUTROSIŃSKI — POTWIERDZONY
 *   („Jutrosińskiej" na stronie gminy). UŻYWAM.
 *   ⚠ NARZĘDNIKA NIE POTWIERDZONO [NP] — nie używam.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠ KOLIZJA NAZW:
 *   — OSADA JUTROSIN W ZACHODNIOPOMORSKIEM
 *     (gmina Ostrowice, powiat drawski). WSPOMINAM.
 *     ⚠⚠ LICZB NIE PODAJĘ I NIE PORÓWNUJĘ.
 *   ⚠⚠⚠ FIGURY Z TEJ KOLIZJI NIE ROBIĘ — kąt
 *     „jedno pole to za mało" ZAJĘTY (Osieczna).
 *   — NOWY SIELEC i STARY SIELEC bez samego „Sielca".
 *     ⚠⚠⚠ FIGURY Z TEGO NIE ROBIĘ — kąt „numeracja
 *     zaczyna się od drugiego" ZAJĘTY (Książ
 *     Wielkopolski). WYMIENIAM W WYLICZENIU.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — NIE WSZYSTKO MUSI MIEĆ DATĘ
 *   POCZĄTKU:
 *   JUTROSIN JEST MIASTEM I NIE ZNALAZŁAM DLA NIEGO
 *   ANI DATY PRAW MIEJSKICH, ANI ROKU PIERWSZEJ
 *   WZMIANKI. Rejestry, które przy innych miastach
 *   podają rok albo nawet dzień, w tym miejscu
 *   MILCZĄ.
 *   DOPEŁNIENIE: jedno z sołectw gminy nazywa się
 *   „NAD STAWEM" — czyli nie ma nazwy w zwykłym
 *   sensie, tylko opis położenia, i tak jest
 *   zapisane także w ewidencji gruntów.
 *   DWIE RZECZY, KTÓRYM BRAKUJE TEGO, CO ZWYKLE
 *   UWAŻAMY ZA KONIECZNE — I OBIE DZIAŁAJĄ.
 *   ⚠⚠ NIE ROBIĘ Z TEGO ŻARTU ANI ZARZUTU WOBEC
 *   KOGOKOLWIEK.
 *
 * KĄT: NIE WSZYSTKO MUSI MIEĆ DATĘ POCZĄTKU
 * — o domowych zwyczajach, których nikt nie pamięta,
 * skąd się wzięły, i o tym, że to im nie szkodzi.
 * Kąt z Jutrosina: miasto bez znalezionej daty
 * i sołectwo bez nazwy w zwykłym sensie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że nie znalazłam dla Jutrosina ani daty praw
 *   miejskich, ani pierwszej wzmianki, i że nie
 *   twierdzę przez to, że ich nie ma. TO JEST RDZEŃ,
 * — że sołectwo „Nad Stawem" nazywa się opisem
 *   położenia, a nie nazwą, i figuruje tak w rejestrze,
 * — ⚠⚠ ŻE W DOMU JEST PEŁNO TAKICH RZECZY: zwyczaj
 *   przy stole, kolejność w niedzielę, jedno danie,
 *   które „zawsze" było — i nikt nie pamięta początku,
 * — ⚠⚠ ŻE BRAK DATY NICZEGO NIE UNIEWAŻNIA. Rzecz
 *   działa, bo działa, a nie dlatego, że ma metrykę,
 * — ⚠⚠ ŻE RUCH JEST JEDEN I ŁAGODNY: przestać szukać
 *   uzasadnienia dla zwyczajów, które nikomu nie
 *   przeszkadzają, i zająć się tymi, które przeszkadzają,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: czasem warto zapytać
 *   „dlaczego tak robimy", bo część zwyczajów trwa
 *   wyłącznie siłą rozpędu i nikomu już nie służy.
 *   Pytanie jest w porządku; szukanie daty nie jest
 *   do niczego potrzebne,
 * — ⚠ UCZCIWIE O SPRZĘCIE: urządzenie nie musi zmieniać
 *   wszystkiego. Może obsłużyć jedną albo dwie rzeczy
 *   i zostawić resztę tak, jak jest. TO JEST DOBRY
 *   WYNIK, NIE PORAŻKA.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO DATA PRZYJĘTA, NIE ZNALEZIONA — kąt
 *   zajęty (Krobia). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD I MUSZĘ
 *   GO ROZGRANICZYĆ JAWNIE: tam datę PRZYJĘTO
 *   z braku dokumentów, więc jakaś jest; tu NIE MA
 *   ŻADNEJ, także przyjętej. JEDNO ZDANIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO ISTNIAŁO DŁUGO, ZANIM KTOŚ TO ZAPISAŁ —
 *   kąt zajęty (Kłecko). Tam zapis BYŁ, tylko późny,
 *   a wniosek kazał ZAPISYWAĆ; tu wniosek jest
 *   ODWROTNY: nie wszystko trzeba datować.
 *   ROZGRANICZAM DRUGIM ZDANIEM.
 * — ⚠⚠⚠ ZERO DOKUMENT ZOSTAŁ, RZECZY NIE — kąt zajęty
 *   (Golina).
 * — ⚠⚠ ZERO NAJSTARSZY ŚLAD W CUDZYCH PAPIERACH —
 *   kąt zajęty (Raszków).
 * — ⚠⚠ ZERO NAZWY DLA WTAJEMNICZONYCH — kąt zajęty
 *   (Książ Wielkopolski). DLATEGO „NAD STAWEM"
 *   JEST DOPEŁNIENIEM, NIE RDZENIEM.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA RODZINNYCH ZWYCZAJÓW
 *   ANI NAMAWIANIA DO ICH ZMIANY.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE PODAJĘ powierzchni 1,62 km².
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ żadnej daty praw miejskich ani
 *   pierwszej wzmianki.
 * — NIE TWIERDZĘ, że takich dat nie ma — tylko że
 *   ich nie znalazłam.
 * — NIE UŻYWAM formy „Nadstaw".
 * — NIE PODAJĘ liczb osady Jutrosin w zachodniopomorskiem.
 * — NIE PODAJĘ liczby obrębów ewidencyjnych.
 * — NIE PODAJĘ liczby 7 005 ze strony gminy.
 * — NIE PODAJĘ największej wsi ani wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Jutrosin leży w powiecie rawickim nad Orlą
 *   i liczy 1 844 mieszkańców (GUS, 31.12.2024)
 *   na 1,6 km²,
 * — cała gmina miejsko-wiejska to 6 871 osób
 *   na 114,9 km², czyli 60 osób na kilometr
 *   kwadratowy, przy lesistości 14,9 %,
 * — gmina ma 19 sołectw i 26 miejscowości,
 * — jedno z sołectw nazywa się „Nad Stawem" i w tej
 *   samej postaci figuruje w ewidencji gruntów,
 * — daty praw miejskich ani roku pierwszej wzmianki
 *   nie udało mi się ustalić,
 * — odrębna osada Jutrosin leży w województwie
 *   zachodniopomorskim,
 * — w gminie leżą m.in. Dubin, Szkaradowo, Śląskowo,
 *   Zaborowo, Rogożewo, Grąbkowo, Płaczkowo oraz
 *   Nowy Sielec i Stary Sielec.
 */
export const JUTROSIN: CityContent = {
  slug: "jutrosin",
  h1: "Thermomix Jutrosin – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Jutrosin — cena i prezentacja",
  seoDescription:
    "Thermomix w Jutrosinie w powiecie rawickim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Jutrosin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Jutrosinie nad Orlą. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Jutrosina w powiecie rawickim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich dziewiętnastu sołectw w gminie.",

  highlights: highlightyStandardowe("Jutrosin"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Miasto bez znalezionej daty i sołectwo o nazwie „Nad Stawem”.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Jutrosinie – jak wygląda prezentacja?",
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
      id: "bez-daty",
      heading: "Nie wszystko musi mieć datę początku",
      paragraphs: [
        "Przy każdym mieście, o którym piszę, podaję rok praw miejskich albo przynajmniej pierwszą wzmiankę. Przy Jutrosinie nie podam ani jednego, ani drugiego — nie znalazłam. Rejestry, które przy sąsiednich miastach wpisują rok, a czasem nawet dzień, w tym miejscu po prostu milczą.",
        "Zaznaczam wyraźnie: to nie znaczy, że takiej daty nie ma. Znaczy tylko, że ja jej nie znalazłam, i nie zamierzam niczego w to miejsce wstawiać.",
        "Jest tu jeszcze druga rzecz, która pasuje do tej pierwszej. Jedno z sołectw gminy nazywa się „Nad Stawem”. To nie jest nazwa w zwykłym sensie, tylko opis położenia — i dokładnie w takiej postaci figuruje również w ewidencji gruntów. Dwie rzeczy, którym brakuje tego, co zwykle uważamy za konieczne. Obie działają.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o mieście, które datę swojej lokacji przyjęło w dwudziestoleciu międzywojennym z braku dokumentów — tam data jednak jest, tylko umówiona. Tu nie ma żadnej, także umówionej. I drugie rozróżnienie: pisałam też o mieście, które istniało długo, zanim ktokolwiek je zapisał, i wniosek brzmiał: zapisujcie. Tutaj wniosek jest odwrotny.",
        "Piszę o tym, bo w każdym domu jest pełno rzeczy bez daty początku.",
        "Zwyczaj, że przy stole siada się zawsze tak samo. Jedno danie, które „u nas zawsze jest” w konkretną niedzielę. Kolejność, w jakiej robi się śniadanie. Fakt, że ktoś kroi chleb, a ktoś inny nastawia wodę. Zapytajcie kogokolwiek, od kiedy tak jest, a usłyszycie „no… zawsze”.",
        "I dobrze. Brak daty niczego nie unieważnia. Te rzeczy trwają, bo działają, a nie dlatego, że mają metrykę — dokładnie tak jak miasto, które jest miastem niezależnie od tego, czy znalazłam jego rok.",
        "Ruch jest tu jeden i łagodny: przestać szukać uzasadnienia dla zwyczajów, które nikomu nie przeszkadzają. Energia przydaje się gdzie indziej — przy tych kilku rzeczach, które naprawdę uwierają.",
        "Uczciwie o drugiej stronie, bo pytanie „dlaczego właściwie tak robimy” jest w porządku i czasem warto je zadać. Część domowych zwyczajów trwa wyłącznie siłą rozpędu i nikomu już nie służy — ktoś gotuje w niedzielę dla ośmiu osób, choć przychodzą cztery. Ale to jest pytanie o dziś, nie o początek. Data niczego by tu nie rozstrzygnęła.",
        "I uczciwie o sprzęcie, bo z tego wynika coś praktycznego. Thermomix nie musi zmienić wszystkiego, żeby był dobrym zakupem. Może obsłużyć jedną albo dwie rzeczy — te, które zajmują najwięcej czasu — i zostawić całą resztę tak, jak jest u Was od zawsze. To jest dobry wynik, a nie porażka, i wolę tak to stawiać niż obiecywać przewrót w kuchni.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Jutrosinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, ile macie wolnego blatu i gdzie jest najbliższe gniazdko. Brzmi prozaicznie, a bardzo często rozstrzyga.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Jutrosinie"),
    sekcjaRaty("w Jutrosinie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Jutrosina",
      paragraphs: [
        "Jutrosin leży w powiecie rawickim nad Orlą i liczy 1 844 mieszkańców (GUS, 31.12.2024) na jednym i sześciu dziesiątych kilometra kwadratowego; gęstości dla samego miasta nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 6 871 osób na stu czternastu i dziewięciu dziesiątych kilometra kwadratowego, czyli sześćdziesiąt osób na kilometr, przy lesistości czternastu i dziewięciu dziesiątych procenta. Ma dziewiętnaście sołectw i dwadzieścia sześć miejscowości, a jedno z sołectw nazywa się „Nad Stawem” i w tej samej postaci figuruje w ewidencji gruntów. Daty praw miejskich ani roku pierwszej wzmianki nie udało mi się ustalić i nie będę żadnej wstawiać.",
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

  districtsHeading: "Do których części gminy Jutrosin dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dziewiętnastu sołectw w gminie. Nazywają się między innymi: Dubin, Szkaradowo, Śląskowo, Zaborowo, Rogożewo, Bartoszewice, Grąbkowo, Janowo, Ostoje, Płaczkowo, Nowy Sielec, Stary Sielec oraz Nad Stawem. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa: „Nad Stawem” to pełna i urzędowa nazwa sołectwa, a nie opis dojazdu — tak samo brzmi w ewidencji gruntów, więc przy umawianiu można ją podać wprost. W gminie są też osobno Nowy Sielec i Stary Sielec. Druga: odrębna osada Jutrosin leży w województwie zachodniopomorskim, więc przy umawianiu przez internet warto dopowiedzieć „Jutrosin w powiecie rawickim”. Językowo: „do Jutrosina” i „w Jutrosinie”, przymiotnik brzmi „jutrosiński”.",
  ],
  districts: [],

  nearbyHeading: "Poza Jutrosin też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Rawicza, Miejskiej Górki, Bojanowa, Krobi, Ponieca i Milicza — wszędzie bezpłatnie, tak samo jak w samym Jutrosinie.",
  ],
  nearbyTowns: ["Rawicz", "Miejska Górka", "Bojanowo", "Krobia", "Poniec", "Milicz"],

  about: blokOMnie("do Jutrosina", "w Jutrosinie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Jutrosina bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dziewiętnastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi przy umawianiu. Adresowa: „Nad Stawem” to pełna urzędowa nazwa jednego z sołectw, a nie opis dojazdu — można ją podać wprost; w gminie są też osobno Nowy Sielec i Stary Sielec. Druga: odrębna osada Jutrosin leży w zachodniopomorskiem, więc warto dopowiedzieć „w powiecie rawickim”.",
    },
    ...faqWspolne("w Jutrosinie"),
    {
      question: "Mamy w domu zwyczaje, których nikt nie umie uzasadnić. Trzeba z nimi coś zrobić?",
      answer:
        "Z większością — nic. Brak daty początku niczego nie unieważnia: te rzeczy trwają, bo działają, a nie dlatego, że mają metrykę. Jutrosin jest tu dobrym obrazem, bo nie znalazłam dla niego ani daty praw miejskich, ani roku pierwszej wzmianki, a miastem jest niezależnie od tego; jedno z jego sołectw nazywa się zresztą po prostu „Nad Stawem”. Energię warto wkładać w te kilka zwyczajów, które naprawdę uwierają. Pytanie „dlaczego właściwie tak robimy” jest w porządku i czasem warto je zadać — bo część rzeczy trwa siłą rozpędu i nikomu już nie służy — ale to pytanie o dziś, nie o początek. Data niczego by tu nie rozstrzygnęła.",
    },
    {
      question: "Czy po zakupie trzeba zmienić sposób gotowania w całym domu?",
      answer:
        "Nie trzeba i nie namawiam. Thermomix nie musi zmienić wszystkiego, żeby był dobrym zakupem — może obsłużyć jedną albo dwie rzeczy, te najbardziej czasochłonne, i zostawić resztę tak, jak jest u Was od zawsze. To jest dobry wynik, a nie porażka. Zwykle zresztą tak się kończy: kilka dań przechodzi do urządzenia, a niedzielny obiad zostaje w garnku, bo tak wszystkim pasuje. Na prezentacji staram się pokazać właśnie to, a nie obiecywać przewrót w kuchni.",
    },
  ],

  geo: { lat: 51.6523, lng: 17.1689 },
};
