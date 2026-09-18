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
 * CHOCZ — powiat pleszewski, woj. wielkopolskie.
 *   ⚠ TEN SAM POWIAT CO DOBRZYCA.
 * MIASTO W GMINIE MIEJSKO-WIEJSKIEJ (od 1.01.2015).
 *   ⚠⚠ ODRĘBNEJ GMINY WIEJSKIEJ NIE MA (TERYT
 *   3020014 / 3020013).
 * MIASTO: 1 610 mieszkańców (GUS 31.12.2024),
 *   6,9 km², gęstość 234,0 os./km².
 *   ⚠ [ZW — 1 610 / 6,9 = 233,33. Różnica 0,67.
 *   DOMYKA SIĘ. PODAJĘ OBIE.]
 *   ⚠⚠ NIE MNOŻĘ POWIERZCHNI PRZEZ GĘSTOŚĆ.
 *   ⚠ WYSOKOŚCI N.P.M. NIE USTALONO [NP].
 * CAŁA GMINA: 4 362 osoby, 73,6 km², gęstość
 *   60 os./km².
 *   ⚠ [ZW — 4 362 / 73,6 = 59,27. Różnica 0,73.
 *   DOMYKA SIĘ. PODAJĘ.]
 *   ⚠⚠ NIE MIESZAM LICZB MIASTA I GMINY.
 * SOŁECTWA: 11 SOŁECTW i 12 MIEJSCOWOŚCI.
 *   ⚠⚠ JEDNO ŹRÓDŁO PODAJE 12 SOŁECTW — RÓŻNICY
 *   NIE OPISUJĘ, PODAJĘ 11 ZA REJESTREM.
 *   ⚠⚠ OBRĘBÓW (11) NIE PODAJĘ.
 *   MIEJSCOWOŚCI (część): Piła, Stara Kaźmierka,
 *   Nowa Kaźmierka, Stary Olesiec, Nowy Olesiec,
 *   Nowolipsk, Kwileń, Józefów, Niniew, Brudzew.
 *   ⚠⚠ NAJWIĘKSZEJ WSI NIE USTALONO [NP].
 * LESISTOŚĆ GMINY: 39,8 % — NAJWYŻSZA W CAŁEJ
 *   SERII WIELKOPOLSKIEJ. TO RDZEŃ KĄTA.
 * ⚠⚠ DATY:
 *   — PIERWSZA WZMIANKA: 1294 R.
 *   — UTRATA PRAW MIEJSKICH: 1870 R.
 *   — ODZYSKANIE: 1 STYCZNIA 2015 R.
 *   ⚠⚠⚠ DATY NADANIA PRAW NIE PODAJĘ — źródła podają
 *     XIV w. albo XVI w./1521, a rejestr nie podaje
 *     jej wcale (pole zawiera tylko „do 1870 od 2015").
 *     NIE ROZSTRZYGAM I NIE ROBIĘ Z TEGO FIGURY —
 *     kąty „data przyjęta, nie znaleziona" (Krobia),
 *     „dwie wersje" (Przedecz, ta sama fala)
 *     i „przerwa nie kasuje początku" ZAJĘTE.
 *     MÓWIĘ JEDNYM ZDANIEM, ŻE JEJ NIE PODAJĘ.
 *   ⚠⚠⚠ NAJSTARSZY ZAPIS NAZWY BRZMI „CHODECZ" —
 *     jak dzisiejsze miasto Chodecz w powiecie
 *     włocławskim. ⚠⚠⚠ FIGURY Z TEGO NIE ROBIĘ —
 *     kąty „jedno pole to za mało" (Osieczna)
 *     i „nazwa nadana przegrała z używaną" (Sompolno)
 *     ZAJĘTE. WSPOMINAM W SEKCJI ADRESOWEJ, BO TO
 *     REALNA POMYŁKA PRZY UMAWIANIU.
 *   ⚠⚠⚠ OBIEKTÓW SAKRALNYCH NIE WYMIENIAM —
 *     w tym mieście to najlepiej udokumentowany motyw
 *     i świadomie go pomijam w całości.
 *   ⚠⚠⚠ HERBU NIE WSPOMINAM.
 * ⚠ GEO: 51,9758 / 17,8695 (punkt miasta).
 *   ⚠⚠ PUNKT GMINY LEŻY OK. 2,5 KM DALEJ — NIE OPISUJĘ.
 *
 * ⚠⚠ ODMIANA:
 *   D. do CHOCZA · C. CHOCZOWI · Ms. w CHOCZU.
 *   ⚠⚠⚠ PRZYMIOTNIK: CHOCKI — POTWIERDZONY
 *   („chocka", „chockich"). ⚠⚠⚠ NIE „choczowski".
 *   WSPOMINAM, BO FORMA JEST NIEOCZYWISTA.
 *   ⚠ NARZĘDNIKA NIE POTWIERDZONO [NP] — nie używam.
 *   ⚠⚠ NAZWY MIESZKAŃCA NIE UŻYWAM.
 *   ⚠ NIE jest plurale tantum.
 *
 * ⚠⚠⚠ RDZEŃ KĄTA — JEDNO ZDANIE NIE OPISUJE CAŁOŚCI:
 *   GMINĘ CHOCZ OPISUJE SIĘ JAKO TYPOWO ROLNICZĄ.
 *   I TO JEST PRAWDA.
 *   JEDNOCZEŚNIE JEJ LESISTOŚĆ WYNOSI 39,8 % —
 *   NAJWIĘCEJ ZE WSZYSTKICH GMIN, O KTÓRYCH PISAŁAM
 *   W WIELKOPOLSCE. DWIE PIĄTE POWIERZCHNI TO LAS.
 *   OBA ZDANIA SĄ PRAWDZIWE I ŻADNE Z NICH NIE JEST
 *   PEŁNE.
 *   ⚠⚠⚠ NIE TWIERDZĘ, ŻE OPIS JEST BŁĘDNY. TO NIE
 *   JEST SPRZECZNOŚĆ, TYLKO NIEPEŁNOŚĆ.
 *   ⚠⚠⚠ NIE WYMIENIAM ŹRÓDŁA TEGO OPISU I NIKOGO
 *   NIE KRYTYKUJĘ.
 *   ⚠⚠ NIE PRZELICZAM LESISTOŚCI NA KILOMETRY
 *   I NIE PORÓWNUJĘ Z POWIERZCHNIĄ MIASTA.
 *
 * KĄT: JEDNO ZDANIE NIE OPISUJE CAŁOŚCI
 * — o tym, że opisujemy własną kuchnię jednym słowem
 * i to jedno słowo zaczyna rządzić decyzjami. Kąt
 * z Chocza: gmina rolnicza w dwóch piątych zalesiona.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że gminę opisuje się jako typowo rolniczą i że to
 *   prawda, a jednocześnie jej lesistość wynosi
 *   39,8 procent. TO JEST RDZEŃ,
 * — że to nie jest sprzeczność, tylko niepełność —
 *   jedno zdanie wybiera jedną cechę,
 * — ⚠⚠ ŻE W KUCHNI ROBIMY TO SAMO SOBIE: „mam małą
 *   kuchnię", „mam ciemną kuchnię", „mam za mało
 *   miejsca" — jedno zdanie, które zaczyna
 *   rozstrzygać za nas,
 * — ⚠⚠ ŻE TO ZDANIE POTRAFI ZABLOKOWAĆ ROZWIĄZANIA,
 *   które by zadziałały, bo z góry uznajemy je
 *   za niemożliwe,
 * — ⚠⚠ ŻE RUCH JEST JEDEN: dopisać drugą cechę.
 *   Nie „mała kuchnia", tylko „mała kuchnia z długim
 *   blatem". Nie „ciemna", tylko „ciemna, ale z oknem
 *   nad zlewem",
 * — ⚠⚠ UCZCIWIE, DRUGA STRONA: jednozdaniowe opisy
 *   są potrzebne. Bez nich nie da się o niczym
 *   rozmawiać ani niczego zaplanować — problem
 *   zaczyna się dopiero wtedy, gdy zdanie zastępuje
 *   oglądanie,
 * — ⚠ UCZCIWIE O SPRZĘCIE: to samo dotyczy zdań
 *   o sobie, w rodzaju „ja nie gotuję". Nie namawiam
 *   nikogo do zmiany zdania o sobie — mówię tylko,
 *   że warto sprawdzić, czy opis jest aktualny,
 *   zanim rozstrzygnie zakup.
 *
 * TWARDE GRANICE:
 * — ⚠⚠⚠ ZERO LICZBA NIEZGODNA SAMA ZE SOBĄ — kąt
 *   zajęty (Rychwał). ⚠⚠⚠ TO NAJBLIŻSZY SĄSIAD
 *   I MUSZĘ GO ROZGRANICZYĆ JAWNIE: tam liczba BYŁA
 *   BŁĘDNA; tu opis JEST PRAWDZIWY, tylko niepełny.
 *   JEDNO ZDANIE — OBOWIĄZKOWO.
 * — ⚠⚠⚠ ZERO NIELICZONE JEST WIĘKSZE OD LICZONEGO —
 *   kąt zajęty (Pyzdry), a tam też chodziło o lasy.
 *   ⚠⚠⚠ ROZGRANICZAM DRUGIM ZDANIEM — OBOWIĄZKOWO.
 *   Tam PORÓWNYWAŁAM DWIE WIELKOŚCI; tu zestawiam
 *   LICZBĘ ZE ZDANIEM.
 * — ⚠⚠⚠ ZERO PROCENT BEZ MIANOWNIKA — kąt zajęty
 *   (Żerków). DLATEGO LESISTOŚCI NIE PRZELICZAM
 *   NA NIC INNEGO.
 * — ⚠⚠ ZERO STATUS ZMIENIŁ SIĘ, UKŁAD ZOSTAŁ — kąt
 *   zajęty (Dobrzyca, ten sam powiat!). DLATEGO
 *   ODZYSKANIA PRAW W 2015 R. NIE ROZWIJAM.
 * — ⚠⚠ ZERO DWIE WERSJE, ŻADNEJ NIE TRZEBA
 *   UNIEWAŻNIAĆ — kąt zajęty (Przedecz, ta sama fala).
 *   DLATEGO SPORU O DATĘ NADANIA NIE OPISUJĘ.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR URZĄDZENIA.
 * — ŻADNYCH PROPORCJI I PRZEPISÓW.
 * — ŻADNYCH NAZW FIRM I MAREK.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI.
 * — ⚠⚠⚠ ŻADNEGO OCENIANIA CZYJEJŚ KUCHNI ANI
 *   PSYCHOLOGIZOWANIA. Piszę o opisach, nie o ludziach.
 * — ⚠⚠⚠ ŻADNEGO NAMAWIANIA, ŻEBY KTOŚ ZMIENIŁ ZDANIE
 *   O SOBIE.
 *
 * ⚠ ETYKA: ZERO ROKU 1945 I PRZESIEDLEŃ · ZERO WĄTKU
 *   WYZNANIOWEGO · ZERO WĄTKU MILITARNEGO · ZERO
 *   HERALDYKI · ZERO ALKOHOLU · ZERO POŻARÓW · ZERO
 *   BEZROBOCIA I WYLUDNIANIA · ZERO UZDROWISK ·
 *   ZERO POSTACI POLITYCZNYCH · ZERO WĄTKU ZABORCZEGO
 *   PRZY DACIE 1870.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty nadania praw miejskich.
 * — NIE TWIERDZĘ, że opis gminy jest błędny.
 * — NIE WYMIENIAM źródła tego opisu.
 * — NIE PRZELICZAM lesistości na kilometry.
 * — NIE MNOŻĘ powierzchni przez gęstość.
 * — NIE PODAJĘ liczby obrębów ani drugiej liczby
 *   sołectw.
 * — NIE OPISUJĘ okoliczności utraty praw w 1870 r.
 * — NIE PODAJĘ największej wsi ani wysokości n.p.m.
 * — NIE UŻYWAM nazwy mieszkańca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — Chocz leży w powiecie pleszewskim, liczy 1 610
 *   mieszkańców (GUS, 31.12.2024) na 6,9 km², czyli
 *   234 osoby na kilometr kwadratowy,
 * — cała gmina miejsko-wiejska to 4 362 osoby
 *   na 73,6 km², czyli 60 osób na kilometr kwadratowy,
 * — lesistość gminy wynosi 39,8 % — najwięcej spośród
 *   gmin, o których pisałam w Wielkopolsce — mimo że
 *   gminę opisuje się jako typowo rolniczą,
 * — gmina ma 11 sołectw i 12 miejscowości,
 * — pierwsza wzmianka pochodzi z 1294 r., miasto
 *   utraciło prawa miejskie w 1870 r. i odzyskało je
 *   1 stycznia 2015 r.; roku nadania praw nie podaję,
 *   bo źródła się nie zgadzają,
 * — najstarszy zapis nazwy brzmi „Chodecz" — tak samo
 *   jak nazwa odrębnego miasta Chodecz w powiecie
 *   włocławskim,
 * — w gminie leżą m.in. Piła, Kwileń, Józefów, Niniew,
 *   Brudzew, Nowolipsk oraz Stara i Nowa Kaźmierka
 *   i Stary i Nowy Olesiec.
 */
export const CHOCZ: CityContent = {
  slug: "chocz",
  h1: "Thermomix Chocz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Chocz — cena i prezentacja",
  seoDescription:
    "Thermomix w Choczu w powiecie pleszewskim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Chocz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Choczu pod Pleszewem. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Chocza w powiecie pleszewskim z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich jedenastu sołectw w gminie.",

  highlights: highlightyStandardowe("Chocz"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gmina rolnicza, w dwóch piątych zalesiona. Oba zdania prawdziwe.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Choczu – jak wygląda prezentacja?",
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
      id: "jedno-zdanie",
      heading: "Jedno zdanie nie opisuje całości",
      paragraphs: [
        "Gminę Chocz opisuje się jako typowo rolniczą. I to jest prawda. Jednocześnie jej lesistość wynosi trzydzieści dziewięć i osiem dziesiątych procenta — najwięcej spośród wszystkich gmin, o których pisałam w Wielkopolsce. Prawie dwie piąte powierzchni to las.",
        "Oba zdania są prawdziwe i żadne z nich nie jest błędne. To nie jest sprzeczność, tylko niepełność: jedno zdanie wybiera jedną cechę i przez to wygląda, jakby opisywało całość. A opisuje tylko to, co wybrał ten, kto je napisał.",
        "Dopowiem, bo to leży blisko: pisałam już gdzie indziej o urzędowym opisie, w którym liczba była po prostu błędna — tu nie ma żadnego błędu, opis jest prawdziwy. I drugie rozróżnienie, ważne, bo o lasach już raz pisałam: tam zestawiałam ze sobą dwie wielkości i jedna okazała się większa od drugiej. Tutaj zestawiam liczbę ze zdaniem, a to zupełnie inna para.",
        "Piszę o tym, bo własną kuchnię opisujemy jednym słowem i potem to słowo za nas decyduje.",
        "„Mam małą kuchnię.” „Mam ciemną kuchnię.” „U mnie jest za mało miejsca.” Każde z tych zdań jest zwykle prawdziwe. I każde jest niepełne dokładnie tak samo jak zdanie o gminie rolniczej — bo pomija wszystko inne, co o tej kuchni można powiedzieć.",
        "Problem w tym, że takie zdanie zaczyna rozstrzygać. Ktoś nie sprawdza rozwiązania, bo „u mnie i tak się nie zmieści”. Ktoś nie przestawia sprzętu, bo „u mnie jest ciemno”. Decyzja zapada nie na podstawie kuchni, tylko na podstawie jednego zdania o niej — często wypowiedzianego dawno i od tamtej pory niesprawdzonego.",
        "Ruch jest jeden i zajmuje chwilę: dopisać drugą cechę. Nie „mała kuchnia”, tylko „mała kuchnia z długim blatem”. Nie „ciemna”, tylko „ciemna, ale z oknem nad zlewem”. Nie „za mało miejsca”, tylko „za mało szafek, za to wolna cała lodówka”. Drugie zdanie natychmiast otwiera rzeczy, które pierwsze zamykało.",
        "Uczciwie o drugiej stronie, bo jednozdaniowe opisy są potrzebne. Bez nich nie da się o niczym rozmawiać ani niczego zaplanować — także ja, umawiając się na prezentację, pytam o jedno zdanie o Waszej kuchni, bo muszę wiedzieć, czego się spodziewać. Problem zaczyna się dopiero wtedy, gdy zdanie zastępuje oglądanie.",
        "I uczciwie o sprzęcie, bo to samo dotyczy zdań o sobie. „Ja nie gotuję”, „ja się do tego nie nadaję”, „u nas i tak nikt tego nie będzie używał” — nie namawiam nikogo, żeby zmieniał zdanie o sobie, i nie jest moją rolą nikogo przekonywać. Mówię tylko tyle: warto sprawdzić, czy taki opis jest jeszcze aktualny, zanim rozstrzygnie za Was zakup na kilka lat.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Choczu?",
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
    sekcjaCena("w Choczu"),
    sekcjaRaty("w Choczu"),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Chocza",
      paragraphs: [
        "Chocz leży w powiecie pleszewskim i liczy 1 610 mieszkańców (GUS, 31.12.2024) na sześciu i dziewięciu dziesiątych kilometra kwadratowego, czyli dwieście trzydzieści cztery osoby na kilometr kwadratowy. Cała gmina miejsko-wiejska to 4 362 osoby na siedemdziesięciu trzech i sześciu dziesiątych kilometra kwadratowego, czyli sześćdziesiąt osób na kilometr, przy lesistości trzydziestu dziewięciu i ośmiu dziesiątych procenta — najwyższej spośród gmin, o których pisałam w Wielkopolsce. Gmina ma jedenaście sołectw i dwanaście miejscowości. Pierwsza wzmianka pochodzi z 1294 roku, miasto utraciło prawa miejskie w 1870 i odzyskało je 1 stycznia 2015; roku nadania praw nie podaję, bo źródła podają różne stulecia, a rejestr nie podaje go wcale.",
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

  districtsHeading: "Do których części gminy Chocz dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich jedenastu sołectw w gminie. W gminie leżą między innymi: Piła, Kwileń, Józefów, Niniew, Brudzew, Nowolipsk, Stara Kaźmierka, Nowa Kaźmierka, Stary Olesiec i Nowy Olesiec. Wszędzie bez dopłaty.",
    "Trzy uwagi. Pierwsza, adresowa i zaskakująca: jedna ze wsi gminy nazywa się Piła — tak samo jak duże miasto na północy Wielkopolski. Zdanie „jadę do Piły w powiecie pleszewskim” jest całkowicie poprawne, a brzmi jak pomyłka. Warto też pamiętać, że Kaźmierka i Olesiec występują w wersji starej i nowej. Druga: najstarszy zapis nazwy miasta brzmi „Chodecz”, a Chodecz to osobne miasto w powiecie włocławskim — przy umawianiu przez internet warto dopowiedzieć powiat. Trzecia, językowa: mówi się „do Chocza” i „w Choczu”, a przymiotnik brzmi „chocki”, nie „choczowski”.",
  ],
  districts: [],

  nearbyHeading: "Poza Chocz też przyjadę",
  nearbyParagraphs: [
    "Dojeżdżam do Pleszewa, Dobrzycy, Stawiszyna, Kalisza, Jarocina i Żerkowa — wszędzie bezpłatnie, tak samo jak w samym Choczu.",
  ],
  nearbyTowns: ["Pleszew", "Dobrzyca", "Stawiszyn", "Kalisz", "Jarocin", "Żerków"],

  about: blokOMnie("do Chocza", "w Choczu i okolicy", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Chocza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich jedenastu sołectw w gminie. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dwie uwagi przy umawianiu. Adresowa: jedna ze wsi gminy nazywa się Piła — tak samo jak miasto na północy Wielkopolski — więc zdanie „jadę do Piły w powiecie pleszewskim” jest poprawne, choć brzmi jak pomyłka. Językowa: „do Chocza” i „w Choczu”, a przymiotnik brzmi „chocki”, nie „choczowski”.",
    },
    ...faqWspolne("w Choczu"),
    {
      question: "Mam małą kuchnię i chyba nic mi się w niej nie zmieści. Czy w ogóle jest o czym rozmawiać?",
      answer:
        "Jest, bo „mała kuchnia” to jedno zdanie, a nie cały opis. Chocz jest tu dobrym obrazem: gminę opisuje się jako typowo rolniczą i to prawda, a jednocześnie prawie dwie piąte jej powierzchni zajmuje las. Oba zdania są prawdziwe, tylko żadne nie jest pełne. W kuchni działa to identycznie: „mała”, „ciemna”, „za mało miejsca” — każde z tych zdań zwykle jest prawdziwe i każde potrafi zamknąć rozwiązania, których nikt nie sprawdził. Ruch jest prosty: dopiszcie drugą cechę. „Mała kuchnia z długim blatem”, „ciemna, ale z oknem nad zlewem”. Drugie zdanie natychmiast otwiera to, co pierwsze zamykało — a przy umawianiu naprawdę wystarczy powiedzieć, ile macie wolnego blatu.",
    },
    {
      question: "Nie gotuję i nie lubię gotować. Czy taki zakup ma dla mnie sens?",
      answer:
        "Może mieć albo nie mieć i nie będę Was przekonywać do zmiany zdania o sobie — to nie jest moja rola. Warto tylko sprawdzić, czy ten opis jest jeszcze aktualny, zanim rozstrzygnie zakup na kilka lat: czasem „nie gotuję” znaczy „nie mam czasu stać przy garnku”, a to jest zupełnie inne zdanie i wtedy urządzenie faktycznie coś zmienia. A czasem znaczy dokładnie to, co znaczy — i wtedy mówię wprost, że to nie jest dobry wydatek. Na prezentacji nic za to nie płacicie i do niczego się nie zobowiązujecie, więc sprawdzenie nic nie kosztuje.",
    },
  ],

  geo: { lat: 51.9758, lng: 17.8695 },
};
