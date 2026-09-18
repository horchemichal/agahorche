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
 * STAWISZYN — powiat kaliski, woj. wielkopolskie.
 * ⚠⚠⚠ KOLIZJA WEWNĘTRZNA SERWISU: MIEJSCOWOŚĆ
 *   O NAZWIE STAWISZYN LEŻY TEŻ W GMINIE BOREK
 *   WIELKOPOLSKI (powiat gostyński), którą już
 *   opisałam. ⚠⚠ TYPU TEJ MIEJSCOWOŚCI NIE USTALONO
 *   [NP] — PISZĘ „MIEJSCOWOŚĆ", NIE „OSADA LEŚNA".
 *   WSPOMINAM W SEKCJI ADRESOWEJ.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ.
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA (TERYT
 *   3007094 / 3007093).
 * MIASTO: 1 352 mieszkańców (GUS 31.12.2024),
 *   ok. 100 ha, czyli 1,0 km².
 *   ⚠⚠⚠ GĘSTOŚCI MIASTA NIE PODAJĘ — źródło podaje
 *   1 365,7 os./km², iloraz z 1,0 km² daje 1 352,0.
 *   ROZBIEŻNOŚĆ 13,7.
 *   ⚠⚠⚠ POWIERZCHNIA 99 ha, PRZY KTÓREJ ILORAZ
 *   DOMYKA SIĘ, JEST ODTWORZONA — NIE PODAJĘ JEJ.
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 6 600 osób, 78,2 km², gęstość
 *   84 os./km².
 *   ⚠⚠⚠ GĘSTOŚCI 86 NIE UŻYWAM — nie domyka się
 *   z żadną znaną powierzchnią (różnica 1,60).
 *   UŻYWAM 84. [ZW — 6 600 / 78,2 = 84,40.
 *   Różnica 0,40. DOMYKA SIĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 14 SOŁECTW (trzy zgodne źródła)
 *   i 20 MIEJSCOWOŚCI.
 *   ⚠⚠ OBRĘBÓW (15) NIE PODAJĘ.
 *   NAJWIĘKSZA WIEŚ: ZBIERSK, wzmiankowany w 1065 r.
 *   PODAJĘ.
 *   MIEJSCOWOŚCI (część): Zbiersk, Zbiersk-Cukrownia,
 *   Zbiersk-Kolonia, Długa Wieś Pierwsza, Długa Wieś
 *   Druga, Długa Wieś Trzecia, Piątek Mały, Piątek
 *   Mały-Kolonia, Piątek Wielki, Złotniki Małe-Kolonia,
 *   Petryki, Werginki.
 * LESISTOŚĆ GMINY: 28,3 %. PODAJĘ.
 * ⚠⚠ RZEKI NIE PODAJĘ — źródła podają „Bawół"
 *   i „Bawoł", zapis sporny [SP].
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1291 R. — już jako miasto
 *     królewskie, w zapisie „Stavissin".
 *   — PRAWO MAGDEBURSKIE: 1419 R.
 *     ⚠⚠ NADAWCY NIE WYMIENIAM.
 *   ⚠⚠⚠ UTRATY PRAW W 1870 R. I ODZYSKANIA W 1919 R.
 *     NIE ROZWIJAM — wątek zaborczy. PODAJĘ SAME DATY
 *     ALBO POMIJAM. WYBIERAM POMINIĘCIE.
 *   ⚠⚠⚠ MURÓW OBRONNYCH NIE WYMIENIAM.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM.
 * ⚠ GEO: 51,9178 / 18,1117 (punkt miasta).
 *
 * ⚠⚠ ODMIANA:
 *   D. do STAWISZYNA · Ms. w STAWISZYNIE ·
 *   N. Stawiszynem.
 *   PRZYMIOTNIK: STAWISZYŃSKI — potwierdzony
 *   („dobra stawiszyńskie"). UŻYWAM.
 *   ⚠⚠ BŁĘDY: „w Stawiszynu", „stawiszynski"
 *   (bez „ń").
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — ZDANIE BYŁO PRAWDZIWE, KIEDY
 *   JE NAPISANO:
 *   W OPISACH STAWISZYNA POJAWIAJĄ SIĘ OBOK SIEBIE
 *   DWA ZDANIA: że to najmniejsze obszarowo miasto
 *   w Polsce, o powierzchni około stu hektarów,
 *   ORAZ że gmina Stawiszyn jest jedyną gminą
 *   miejsko-wiejską w powiecie kaliskim.
 *   ⚠⚠⚠ TO DRUGIE ZDANIE PRZESTAŁO BYĆ AKTUALNE:
 *   1 STYCZNIA 2017 R. PRAWA MIEJSKIE ODZYSKAŁ
 *   OPATÓWEK, A W 2021 R. KOŹMINEK — obie gminy
 *   leżą w tym samym powiecie.
 *   ZDANIE NIE JEST KŁAMSTWEM. BYŁO PRAWDZIWE
 *   W DNIU, W KTÓRYM JE NAPISANO, I NIKT GO PÓŹNIEJ
 *   NIE ODŚWIEŻYŁ.
 *   ⚠⚠⚠ NIE WYMIENIAM AUTORA ANI ŹRÓDŁA TEGO ZDANIA
 *   I NIKOGO NIE KRYTYKUJĘ. MÓWIĘ WPROST, ŻE TO
 *   NORMALNA KOLEJ RZECZY.
 *   ⚠⚠ LICZB OPATÓWKA I KOŹMINKA NIE PODAJĘ
 *   I NIE PORÓWNUJĘ — kąt „jedna liczba, dwa miasta"
 *   ZAJĘTY (Stęszew). PODAJĘ SAME NAZWY I DATY.
 *   ⚠⚠ NIE TWIERDZĘ, ŻE STAWISZYN NADAL JEST
 *   NAJMNIEJSZYM MIASTEM W POLSCE — tego nie
 *   weryfikowałam [NP]. PISZĘ, ŻE TAK BYWA PODAWANY.
 *
 * KĄT: ZDANIE BYŁO PRAWDZIWE, KIEDY JE NAPISANO
 * — o domowych założeniach, których nikt nie
 * odświeżał: „on tego nie je", „ona nie lubi ostrego",
 * „na to nie ma miejsca". Kąt ze Stawiszyna: opis,
 * który unieważniły dwie daty.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że obok siebie stoją dwa zdania o Stawiszynie
 *   i drugie przestało być aktualne, bo w 2017 r.
 *   prawa miejskie odzyskał Opatówek, a w 2021 r.
 *   Koźminek. TO JEST RDZEŃ,
 * — że zdanie nie było kłamstwem — było prawdziwe
 *   w dniu, w którym powstało,
 * — ⚠⚠ ŻE W DOMU JEST PEŁNO TAKICH ZDAŃ: „on tego
 *   nie je", „ona nie lubi ostrego", „dzieci tego
 *   nie tkną", „na to nie ma miejsca",
 * — ⚠⚠ ŻE WSZYSTKIE BYŁY KIEDYŚ PRAWDZIWE i nikt ich
 *   od tamtej pory nie sprawdził, a ludzie się
 *   zmieniają — zwłaszcza dzieci,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: raz na jakiś czas zapytać
 *   zamiast założyć. Jedno pytanie przy stole
 *   zamiast dziesięciu lat omijania jednego składnika,
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: część tych zdań jest
 *   nadal prawdziwa i pytanie o nie w kółko też męczy.
 *   Nie chodzi o ciągłe sprawdzanie, tylko o to,
 *   żeby nie traktować ich jak faktów na zawsze,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to samo dotyczy zdań
 *   o urządzeniach — „to się nie sprawdza", „to stoi
 *   nieużywane". Warto wiedzieć, z którego roku
 *   pochodzi taka opinia i czego dokładnie dotyczyła.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LICZBA NIEZGODNA SAMA ZE SOBĄ — kąt
 *   zajęty (Rychwał). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam liczba BYŁA
 *   BŁĘDNA OD RAZU; tu zdanie było poprawne
 *   i ZDEZAKTUALIZOWAŁO SIĘ. JEDNO ZDANIE —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO JEDNO ZDANIE NIE OPISUJE CAŁOŚCI — kąt
 *   zajęty (Chocz, ta sama fala). Tam zdanie było
 *   NIEPEŁNE, ale nadal prawdziwe; tu przestało być
 *   prawdziwe. ROZGRANICZAM DRUGIM ZDANIEM —
 *   OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO JEDNA LICZBA, DWA RÓŻNE MIASTA — kąt
 *   zajęty (Stęszew). DLATEGO LICZB OPATÓWKA
 *   I KOŹMINKA NIE PODAJĘ.
 * — ⚠⚠ ZERO STATUS ZMIENIŁ SIĘ, UKŁAD ZOSTAŁ — kąt
 *   zajęty (Dobrzyca).
 * — ⚠⚠ ZERO PRZERWA NIE KASUJE POCZĄTKU — kąt zajęty.
 *   DLATEGO LAT 1870 I 1919 NIE OPISUJĘ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. ⚠⚠⚠ TU RYZYKO
 *   PODWYŻSZONE, BO KĄT DOTYCZY TEGO, CZEGO KTOŚ NIE
 *   JE. PISZĘ WYŁĄCZNIE O UPODOBANIACH, NIGDY
 *   O ALERGIACH, NIETOLERANCJACH ANI DIETACH.
 *   ⚠⚠⚠ MÓWIĘ WPROST, ŻE OGRANICZEŃ ZDROWOTNYCH
 *   TO NIE DOTYCZY.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO NAMAWIANIA, ŻEBY KTOŚ KOGOŚ
 *   PRZEKONYWAŁ DO JEDZENIA CZEGOKOLWIEK. ⚠⚠⚠ ZERO
 *   PRESJI WOBEC DZIECI.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH · ZERO WĄTKU ZABORCZEGO.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ gęstości miasta.
 * — NIE PODAJĘ powierzchni 99 ha.
 * — NIE PODAJĘ gęstości gminy 86.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE TWIERDZĘ, że Stawiszyn nadal jest najmniejszym
 *   miastem w Polsce — piszę, że tak bywa podawany.
 * — NIE PODAJĘ liczb Opatówka ani Koźminka.
 * — NIE WYMIENIAM autora ani źródła nieaktualnego
 *   zdania.
 * — NIE PODAJĘ nazwy rzeki (zapis sporny).
 * — NIE OPISUJĘ utraty ani odzyskania praw miejskich.
 * — NIE PODAJĘ liczby obrębów ani wysokości n.p.m.
 * — NIE PISZĘ o alergiach, nietolerancjach ani dietach.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Stawiszyn leży w powiecie kaliskim, liczy 1 352
 *   mieszkańców (GUS, 31.12.2024) i zajmuje około
 *   stu hektarów, czyli jeden kilometr kwadratowy,
 * — bywa podawany jako najmniejsze obszarowo miasto
 *   w Polsce,
 * — cała gmina miejsko-wiejska to 6 600 osób
 *   na 78,2 km², czyli 84 osoby na kilometr
 *   kwadratowy, przy lesistości 28,3 %,
 * — gmina ma 14 sołectw i 20 miejscowości,
 *   a największą wsią jest Zbiersk, wzmiankowany
 *   w 1065 r.,
 * — pierwsza wzmianka o Stawiszynie pochodzi z 1291 r.
 *   i opisuje go już jako miasto królewskie; prawo
 *   magdeburskie miasto otrzymało w 1419 r.,
 * — gmina Stawiszyn bywa opisywana jako jedyna gmina
 *   miejsko-wiejska w powiecie kaliskim, ale prawa
 *   miejskie odzyskały tam także Opatówek
 *   (1 stycznia 2017 r.) i Koźminek (2021 r.),
 * — miejscowość o nazwie Stawiszyn leży również
 *   w gminie Borek Wielkopolski,
 * — w gminie leżą m.in. Zbiersk-Cukrownia,
 *   Zbiersk-Kolonia, Długa Wieś Pierwsza, Druga
 *   i Trzecia, Piątek Mały, Piątek Mały-Kolonia
 *   i Piątek Wielki.
 */
export const STAWISZYN: CityContent = {
  slug: "stawiszyn",
  h1: "Thermomix Stawiszyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Stawiszyn — cena i prezentacja",
  seoDescription:
    "Thermomix w Stawiszynie w powiecie kaliskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stawiszyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Stawiszynie pod Kaliszem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Stawiszyna w powiecie kaliskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich czternastu sołectw w gminie.",

  highlights: highlightyStandardowe("Stawiszyn"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zdanie było prawdziwe w dniu, w którym je napisano. Potem przestało.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Stawiszynie – jak wygląda prezentacja?",
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
      id: "nieodswiezone",
      heading: "Zdanie było prawdziwe, kiedy je napisano",
      paragraphs: [
        "W opisach Stawiszyna stoją obok siebie dwa zdania. Pierwsze: że to najmniejsze obszarowo miasto w Polsce, o powierzchni około stu hektarów. Drugie: że gmina Stawiszyn jest jedyną gminą miejsko-wiejską w powiecie kaliskim.",
        "To drugie zdanie przestało być aktualne. 1 stycznia 2017 roku prawa miejskie odzyskał Opatówek, a w 2021 roku Koźminek — obie gminy leżą w tym samym powiecie. Od tamtej pory gmina Stawiszyn nie jest już jedyna.",
        "I teraz rzecz najważniejsza: to zdanie nie jest kłamstwem. Było w pełni prawdziwe w dniu, w którym je napisano. Po prostu nikt do niego nie wrócił, kiedy świat się przesunął — a to jest zupełnie normalna kolej rzeczy, nie niczyja wina. Samego pierwszego zdania, o najmniejszym mieście w Polsce, nie weryfikowałam; podaję je tak, jak bywa podawane.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o urzędowym opisie, w którym liczba była po prostu błędna od początku — tu nic nie było błędne. I drugie rozróżnienie: pisałam też o zdaniu, które było prawdziwe, ale niepełne, bo opisywało tylko jedną cechę. Tutaj zdanie było pełne i prawdziwe, a przestało być prawdziwe z upływem czasu. To trzy różne rzeczy.",
        "Piszę o tym, bo w każdym domu jest pełno takich zdań i wszystkie mają tę samą historię.",
        "„On tego nie je.” „Ona nie lubi ostrego.” „Dzieci tego nie tkną.” „Na to i tak nie ma u nas miejsca.” „Tego nikt nie będzie jadł drugi dzień.”",
        "Każde z nich było kiedyś prawdziwe. Ktoś kiedyś czegoś nie zjadł, ktoś się skrzywił, coś się nie zmieściło. Zdanie zapisało się w rodzinnej pamięci i od tamtej pory nikt go nie sprawdził — a ludzie się zmieniają, zwłaszcza dzieci, i to w tempie, za którym rodzinne zdania nie nadążają. Potrafi się zdarzyć, że jakiś składnik omija się w domu przez dziesięć lat, bo ktoś nie chciał go zjeść, gdy miał cztery lata.",
        "Ruch jest jeden i naprawdę krótki: raz na jakiś czas zapytać zamiast założyć. Jedno pytanie przy stole zamiast dekady omijania. Nie trzeba niczego udowadniać ani nikogo do niczego przekonywać — wystarczy sprawdzić, czy zdanie jest jeszcze aktualne.",
        "Uczciwie o drugiej stronie, bo część tych zdań jest nadal prawdziwa i pytanie o to samo w kółko też męczy. Nie chodzi o ciągłe testowanie ludzi przy stole ani o namawianie kogokolwiek do jedzenia czegoś, czego nie chce. Chodzi tylko o to, żeby nie traktować takich zdań jak faktów ustalonych raz na zawsze. I jasno: to nie dotyczy ograniczeń zdrowotnych — te są po prostu do respektowania i nie ma tu czego sprawdzać.",
        "I uczciwie o sprzęcie, bo to samo dotyczy zdań o urządzeniach. „To się nie sprawdza”, „u znajomych stoi nieużywane”, „kiedyś tego próbowałam i nic z tego nie wyszło”. Takie opinie też mają swoją datę i swój kontekst — warto wiedzieć, z którego roku pochodzą i czego dokładnie dotyczyły, zanim rozstrzygną decyzję. To działa w obie strony: czasem po sprawdzeniu okazuje się, że opinia była trafna, i wtedy mówię to wprost.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Stawiszynie?",
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
    sekcjaCena("w Stawiszynie"),
    sekcjaRaty("w Stawiszynie"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny ze Stawiszyna",
      paragraphs: [
        "Stawiszyn leży w powiecie kaliskim, liczy 1 352 mieszkańców (GUS, 31.12.2024) i zajmuje około stu hektarów, czyli jeden kilometr kwadratowy — bywa podawany jako najmniejsze obszarowo miasto w Polsce; gęstości nie podaję, bo liczba ze źródła nie zgadza się z ilorazem. Cała gmina miejsko-wiejska to 6 600 osób na siedemdziesięciu ośmiu i dwóch dziesiątych kilometra kwadratowego, czyli osiemdziesiąt cztery osoby na kilometr, przy lesistości dwudziestu ośmiu i trzech dziesiątych procenta. Gmina ma czternaście sołectw i dwadzieścia miejscowości, a największą wsią jest Zbiersk, wzmiankowany już w 1065 roku. Pierwsza wzmianka o samym Stawiszynie pochodzi z 1291 roku i opisuje go jako miasto królewskie, a prawo magdeburskie otrzymał w 1419.",
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

  districtsHeading: "Do których części gminy Stawiszyn dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich czternastu sołectw w gminie. W gminie leżą między innymi: Zbiersk, Zbiersk-Cukrownia, Zbiersk-Kolonia, Długa Wieś Pierwsza, Długa Wieś Druga, Długa Wieś Trzecia, Piątek Mały, Piątek Mały-Kolonia, Piątek Wielki, Złotniki Małe-Kolonia, Petryki i Werginki. Wszędzie bez dopłaty.",
    "Dwie uwagi. Pierwsza, adresowa i wyjątkowo istotna: w tej jednej gminie Zbiersk występuje w trzech wersjach, Długa Wieś w trzech, a Piątek w trzech — samo „Zbiersk” albo „Długa Wieś” nie wystarcza, żeby trafić pod właściwy adres. Druga: miejscowość o nazwie Stawiszyn leży również w gminie Borek Wielkopolski w powiecie gostyńskim, więc przy umawianiu przez internet warto dopowiedzieć „Stawiszyn w powiecie kaliskim”. Językowo: mówi się „do Stawiszyna” i „w Stawiszynie”, a przymiotnik brzmi „stawiszyński”.",
  ],
  districts: [],

  nearbyHeading: "Poza Stawiszyn też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Kalisza, Chocza, Pleszewa, Konina, Turku i Rychwału — wszędzie bezpłatnie, tak samo jak w samym Stawiszynie.",
  ],
  nearbyTowns: ["Kalisz", "Chocz", "Pleszew", "Konin", "Turek", "Rychwał"],

  about: blokOMnie("do Stawiszyna", "w Stawiszynie i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Stawiszyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich czternastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi przy umawianiu. Adresowa: Zbiersk, Długa Wieś i Piątek występują w tej gminie po trzy razy, więc sama nazwa nie wystarcza, żeby trafić pod właściwy adres. Druga: miejscowość Stawiszyn leży też w gminie Borek Wielkopolski, więc warto dopowiedzieć „w powiecie kaliskim”.",
    },
    ...faqWspolne("w Stawiszynie"),
    {
      question: "W domu od lat omijamy pewne składniki, bo „nikt tego nie je”. Czy warto to sprawdzać?",
      answer:
        "Warto, choć bez robienia z tego kampanii. Stawiszyn jest tu dobrym obrazem: w jego opisach stoi zdanie, że gmina jest jedyną gminą miejsko-wiejską w powiecie kaliskim — i było w pełni prawdziwe w dniu, w którym je napisano, tylko że w 2017 roku prawa miejskie odzyskał Opatówek, a w 2021 Koźminek. Nikt nie skłamał; nikt po prostu nie wrócił do tego zdania. W domu jest tak samo: „on tego nie je” zapisuje się raz i zostaje na dekadę, choć ludzie się zmieniają, zwłaszcza dzieci. Ruch jest krótki — raz na jakiś czas zapytać zamiast założyć. Bez przekonywania i bez presji, zwłaszcza wobec dzieci. I jasno: ograniczeń zdrowotnych to nie dotyczy, te są po prostu do respektowania.",
    },
    {
      question: "Słyszałam, że takie urządzenia stoją potem nieużywane. Czy to prawda?",
      answer:
        "Czasem tak i nie będę temu zaprzeczać — widziałam takie przypadki. Warto jednak wiedzieć, z którego roku pochodzi konkretna opinia i czego dokładnie dotyczyła, bo opinie też mają swoją datę. Najczęstsza przyczyna, gdy sprzęt rzeczywiście stoi, jest prozaiczna: kupiono go bez pomysłu, co konkretnie ma zastąpić w zwykłym tygodniu, albo nie miał stałego miejsca na blacie. Dlatego pytam o to na prezentacji wprost — a jeśli odpowiedź wskazuje, że u Was byłoby tak samo, mówię to, zamiast sprzedawać. Sprawdzenie nic nie kosztuje: prezentacja jest bezpłatna i do niczego nie zobowiązuje.",
    },
  ],

  geo: { lat: 51.9178, lng: 18.1117 },
};
