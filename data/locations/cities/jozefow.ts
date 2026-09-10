import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * JÓZEFÓW (BIŁGORAJSKI, ROZTOCZAŃSKI) — miasto w powiecie
 * biłgorajskim, 2 302 mieszkańców miasta (31.12.2024, GUS),
 * gmina ok. 6 310. Lokacja 3 grudnia 1725 r. przez Tomasza Józefa
 * Zamoyskiego, na prawie magdeburskim, na gruntach wsi Majdan
 * Nepryski. Prawa miejskie odzyskane 1 STYCZNIA 1988 r.
 *
 * UWAGA — TRZY RÓŻNE JÓZEFOWY. Ten (biłgorajski, na Roztoczu),
 * Józefów nad Wisłą (powiat opolski, ma własną stronę w tym
 * serwisie) i Józefów pod Warszawą. Przy każdym fakcie trzeba było
 * sprawdzać powiat — badanie odrzuciło m.in. firmy kamieniarskie
 * i wykazy ulic dotyczące Józefowa k. Otwocka.
 *
 * KĄT: funkcja, po którą nikt tego nie kupuje, a której używa się
 * najczęściej — u mnie to gotowanie na parze. Miasto, którego
 * kamieniołom wykopano dla wapienia, a którego dziś największą
 * wartością jest WIDOK Z GÓRY (wieża widokowa nad nieczynnym
 * wyrobiskiem), jest właściwym miejscem na tekst o tym, że rzecz
 * bywa przydatna do czegoś innego, niż była w zamyśle.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — po co ludzie kupują to urządzenie (zupy, blendowanie, ciasto),
 * — czego używają codziennie po roku — i że to zwykle co innego,
 * — co para robi dobrze i czego NIE zrobi: nie zrumieni, nie
 *   przypiecze, nie da chrupkości. To jest jej twarda granica,
 * — że koszyk i naczynie zajmują miejsce, i o tym też trzeba
 *   powiedzieć przed zakupem, a nie po.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. Przy parze pokusa
 *   jest duża, bo wszyscy pytają „ile minut" — odpowiedź brzmi:
 *   to jest w przepisach urządzenia, nie u mnie.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. Gotowanie na parze jest
 *   obrośnięte hasłami o zdrowiu i ani jednego z nich tu nie ma.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI (mięso, ryba, jaja
 *   na parze — stopień ugotowania). To nie moja dziedzina.
 * — ŻADNEGO OBIECYWANIA, że para zastąpi piekarnik albo patelnię.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Tysiąc przepisów, z których
 * używa się dwudziestu" (miasto kolekcji) dotyczy BAZY PRZEPISÓW.
 * Tutaj chodzi o JEDNĄ FUNKCJĘ SPRZĘTU i o rozjazd między powodem
 * zakupu a codziennym użyciem. „Dwie rzeczy naraz" (miasto
 * skrzyżowania rzek) opisuje RÓWNOLEGŁOŚĆ — tej strony celowo NIE
 * budowałam na tym argumencie, żeby się nie powtarzać; tu chodzi
 * o zaskoczenie własnym sprzętem. „Ryba" i „ryby" są zajęte przez
 * inne miasta i dotyczą surowca, nie sposobu obróbki.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — MASOWA EGZEKUCJA 13 lipca 1942 r. (ok. 1000–1500 osób).
 *   Fakt sprawdzony. NIE UŻYWAM GO — to nie jest ozdobnik
 *   do strony o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że kamieniarstwo józefowskie to dziś żywy zawód
 *   z warsztatami i szkołą. NIE UDAŁO SIĘ TEGO POTWIERDZIĆ na 2026 r.
 *   Dostępne źródła traktują je jako temat historyczny i turystyczny.
 *   W tekście piszę tylko to, co pewne: że kamieniołom Babia Dolina
 *   jest dziś miejscem z wieżą widokową, a nie czynnym zakładem,
 * — NIE PODAJĘ ROKU UTRATY PRAW MIEJSKICH. Źródła podają 24 grudnia
 *   1869 albo 1870. Podaję tylko pewne: odzyskanie 1 stycznia 1988 r.
 *   (trzy niezależne źródła),
 * — NIE PISZĘ, że Józefów leży w Roztoczańskim Parku Narodowym.
 *   Na terenie gminy leży JEDYNIE najdalej wysunięty na zachód
 *   fragment parku; gmina jest wymieniona wśród gmin objętych
 *   parkiem i otuliną. W tekście jest to opisane ostrożnie,
 * — NIE ŁĄCZĘ JÓZEFOWA Z SZUMAMI NA TANWI ANI Z REZERWATEM
 *   „CZARTOWE POLE". Oba leżą w gminie SUSIEC. W gminie Józefów
 *   jest natomiast rezerwat „SZUM" koło Górecka Kościelnego —
 *   nazwy są łudząco podobne i to klasyczna pułapka,
 * — NIE PISZĘ o pszczelarstwie, ziołach ani skupie runa leśnego.
 *   Nic z tego nie udało się potwierdzić dla tej gminy,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla Józefowa i gminy nie znaleziono wpisu,
 * — NIE wymyślam osiedli. Brak wykazu (a serwisy z „wykazem ulic
 *   Józefowa" dotyczą Józefowa k. Otwocka). districts to PUSTA
 *   TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — lokacja 3 grudnia 1725 r., Tomasz Józef Zamoyski, prawo
 *   magdeburskie, na gruntach wsi Majdan Nepryski,
 * — prawa miejskie odzyskane 1 stycznia 1988 r.,
 * — kamieniołom Babia Dolina: dziś miejsce z wieżą widokową,
 *   nie czynny zakład przemysłowy,
 * — drukarnia hebrajska założona ok. 1820 r. przez Całę Waksa,
 *   korzystająca z papieru z miejscowej papierni; księgi trafiały
 *   do Europy Środkowej i Turcji,
 * — Górecko Kościelne (sołectwo gminy) — sanktuarium
 *   ze studzienką „Boże Stópki",
 * — 2 302 mieszkańców miasta (31.12.2024), gmina ok. 6 310.
 */
export const JOZEFOW: CityContent = {
  slug: "jozefow",
  h1: "Thermomix Józefów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Józefów (Roztocze) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Józefowie na Roztoczu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Józefów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Józefowie na Roztoczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Józefowa na Roztoczu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Józefów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kupuje się po jedno. Używa codziennie czego innego.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Józefowie – jak wygląda prezentacja?",
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
      id: "para",
      heading: "Kamieniołom, który jest dziś punktem widokowym — czyli o funkcji, po którą nikt tego nie kupuje",
      paragraphs: [
        "Babią Dolinę wykopano dla wapienia. Przez dziesięciolecia chodziło tu wyłącznie o kamień: co się z niego da zrobić, ile go jest, jak go wyciąć. Dziś wapienia się stąd nie bierze, a ludzie przyjeżdżają po coś, o czym nikt nie myślał, gdy zaczynano kopać — po widok. Nad wyrobiskiem stoi wieża widokowa i to ona jest powodem, dla którego to miejsce w ogóle się odwiedza.",
        "Piszę o tym, bo dokładnie tak samo działa to urządzenie w większości domów, do których wracam po roku.",
        "Ludzie kupują je po zupy. Albo po to, żeby nie stać nad garnkiem. Albo po ciasto drożdżowe, którego nigdy nie chciało im się wyrabiać. To są powody, które słyszę na prezentacjach i to są dobre powody — żadnego z nich nie podważam.",
        "A potem pytam, z czego korzystają najczęściej, i bardzo często pada odpowiedź, której ta osoba sama się nie spodziewała. U mnie w domu i u dużej części moich klientek jest to gotowanie na parze. Nie dlatego, że ktoś to zaplanował. Dlatego, że stoi w kuchni naczynie, w którym para już jest, więc warzywa czy pierogi przestają wymagać osobnego garnka, sitka i pilnowania. Rzecz, po którą się nie kupowało, wchodzi w codzienność, bo przestaje kosztować wysiłek.",
        "Teraz uczciwie o granicach, bo para ma je twarde. Nie zrumieni niczego. Nie zrobi skórki, nie przypiecze, nie da chrupkości — to fizycznie niemożliwe i żadne ustawienie tego nie obejdzie. Jeśli ktoś lubi, gdy warzywa mają brązowe brzegi, para go rozczaruje i lepiej, żeby wiedział to przed zakupem niż po.",
        "Druga uczciwa uwaga: naczynie do gotowania na parze zajmuje miejsce. Nie jest małe i trzeba je gdzieś trzymać. To jest jedna z tych rzeczy, o których na pokazach mówi się najmniej, a które w małej kuchni potrafią zdecydować, czy coś się używa, czy leży w piwnicy.",
        "I trzecia: ile czego się gotuje, znajdziecie w przepisach urządzenia. Ode mnie nie usłyszycie liczb ani minut, bo podawanie ich z pamięci przez przedstawicielkę handlową jest dokładnie tym, przez co potem ludzie mają pretensje do sprzętu.",
      ],
      links: [
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Józefowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, po co byście to urządzenie kupili. Pokażę tę rzecz — i przy okazji dwie, o których nie myśleliście. Zwykle to te drugie okazują się codzienne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Józefowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla józefowskiej rodziny",
      paragraphs: [
        "Józefów liczy nieco ponad dwa tysiące trzysta mieszkańców, a cała gmina około sześciu tysięcy trzystu. Miasto założył w 1725 roku ordynat Tomasz Józef Zamoyski, prawa miejskie wróciły tu pierwszego stycznia 1988 roku. Na terenie gminy leży zachodni skraj Roztoczańskiego Parku Narodowego, a w Górecku Kościelnym — sanktuarium ze studzienką zwaną Bożymi Stópkami.",
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

  districtsHeading: "Do których części Józefowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy — łącznie z Góreckiem Kościelnym i Majdanem Nepryskim — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw. Przy umawianiu wystarczy podać ulicę albo miejscowość — i zaznaczyć, że chodzi o Józefów na Roztoczu, bo miast o tej nazwie jest w Polsce kilka.",
  ],
  districts: [],

  nearbyHeading: "Poza Józefów też przyjadę",
  nearbyParagraphs: [
    "Biłgoraj, Zwierzyniec, Tarnogród, Krasnobród, Susiec i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Biłgoraj", "Zwierzyniec", "Krasnobród", "Tarnogród", "Szczebrzeszyn", "Zamość"],

  about: blokOMnie("do Józefowa", "w Józefowie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Józefowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy — Górecka Kościelnego, Majdanu Nepryskiego i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja. Przy umawianiu zaznaczcie, że chodzi o Józefów na Roztoczu.",
    },
    ...faqWspolne("w Józefowie"),
    {
      question: "Czego się w tym używa najczęściej po roku?",
      answer:
        "Zwykle nie tego, po co się to kupowało. Ludzie kupują po zupy, po blendowanie albo po ciasto, a codzienne okazuje się coś innego — u mnie i u wielu moich klientek jest to gotowanie na parze, bo przestaje wymagać osobnego garnka i pilnowania. Dlatego na prezentacji pokazuję nie tylko to, o co pytacie.",
    },
    {
      question: "Czy na parze zrobię wszystko?",
      answer:
        "Nie. Para nie zrumieni i nie przypiecze niczego — nie zrobi skórki ani chrupkości i żadne ustawienie tego nie obejdzie. Jeśli lubicie brązowe brzegi, para Was rozczaruje i wolę powiedzieć to przed zakupem. Do tego naczynie do gotowania na parze zajmuje miejsce w szafce, co w małej kuchni bywa istotne. Czasy i ilości znajdziecie w przepisach urządzenia — ja ich z pamięci nie podaję.",
    },
  ],

  geo: { lat: 50.4797, lng: 23.0489 },
};
