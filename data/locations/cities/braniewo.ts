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
 * BRANIEWO — gmina MIEJSKA w powiecie braniewskim.
 * MIASTO 15 968 (GUS 31.12.2024), 12,4 km².
 * ⚠ ISTNIEJE OSOBNA GMINA WIEJSKA BRANIEWO: 5 332 osoby,
 * 307,2 km². TO DWIE RÓŻNE JEDNOSTKI — NIE SUMUJĘ ich do
 * „21 tysięcy". Miasto jako gmina miejska NIE MA SOŁECTW.
 *
 * PRAWA MIEJSKIE 1254 r., biskup warmiński ANZELM, PRAWO
 * LUBECKIE (rzadkość), zasadźca Jan Fleming.
 * 1261 — miasto spalone w powstaniu pruskim.
 * 1284 — DRUGA LOKACJA, potwierdzenie prawa lubeckiego.
 * OBALONE: „prawa miejskie w 1284" — to odnowienie, nie
 * pierwsza lokacja.
 *
 * 1260 — Warmińska Kapituła Katedralna przy kościele
 * św. Andrzeja.
 * 1280 — początek budowy zamku biskupiego; ZACHOWAŁA SIĘ
 * TYLKO WIEŻA BRAMNA Z KAPLICĄ.
 * 1341 — siedziba biskupia przeniesiona do ORNETY
 * (od 1350 Lidzbark Warmiński).
 * OBALONE: „stolica biskupstwa przez całe średniowiecze".
 * 1343 — początek budowy kościoła ŚW. KATARZYNY; BUDOWA
 * TRWAŁA PONAD STO LAT. Odbudowa od 1979 r., pierwsza msza
 * w Boże Narodzenie 1981 r., BAZYLIKA MNIEJSZA OD 2001 r.
 * ⚠ O POWODACH odbudowy NIE PISZĘ — prowadzą do 1945 r.
 * 1358 — wstąpienie do HANZY, jedno z sześciu miast pruskich
 * w Związku.
 * 1564 — Stanisław Hozjusz zakłada COLLEGIUM HOSIANUM,
 * pierwszą placówkę jezuicką w Polsce; 1578 Alumnat Papieski.
 *
 * KĄT: KRUCHE CIASTO — spody, na których stoi reszta.
 * Kąt od kościoła budowanego ponad sto lat: rzeczy, których
 * nie widać, a które trzymają wszystko inne.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kruche ciasto to jedyne ciasto, przy którym urządzenie
 *   bardziej SZKODZI niż pomaga, jeśli nie wie się dlaczego,
 * — że kruchość bierze się z tłuszczu POZOSTAWIONEGO
 *   w kawałkach, a nie z wymieszania go na gładko,
 * — że urządzenie łączy składniki tak dokładnie i tak szybko,
 *   że łatwo przekroczyć moment, w którym ciasto przestaje
 *   być kruche, a zaczyna być twarde,
 * — że drugi wróg to ciepło: praca urządzenia ogrzewa masę,
 *   a rozpuszczony tłuszcz to koniec kruchości,
 * — że rozwiązanie jest proste i nudne: zimne składniki
 *   i krótko,
 * — że wyrabianie długie jest dobre dla ciasta drożdżowego
 *   i złe dla kruchego — i że to jest źródło większości
 *   pomyłek,
 * — i ODMOWA: nie podaję proporcji, czasów ani przepisu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ani przepisów na ciasto.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — BRANIEWO JEST NAJTRUDNIEJSZYM MIASTEM REGIONU:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1945 i zniszczeń miasta. O odbudowie kościoła
 *   piszę wyłącznie z datami, BEZ PRZYCZYNY.
 * — ZERO granicy z obwodem kaliningradzkim, przejść
 *   granicznych, wojska, przemytu.
 * — ZERO cmentarzy wojennych.
 * — ZERO wysiedleń i transportów przez Zalew Wiślany.
 * — ZERO akcji „Wisła" 1947 — także w wersji „o
 *   wielokulturowości".
 * — NIE UŻYWAM określenia „Ateny Północy" — odnosi się do
 *   niemieckojęzycznego ośrodka jezuickiego.
 * — NIE ROBIĘ TŁA z wyludniania (−12,9% w latach 2002–2024).
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ciasto drożdżowe —
 * wyrabianie i rozczyn" dotyczy ciasta, które wymaga długiej
 * pracy — i w tekście wprost przeciwstawiam mu kruche.
 * „Sernik i masy na ciasto" dotyczą wierzchu, nie spodu.
 * „Ciasto naleśnikowe" dotyczy patelni. „Beza" dotyczy piany.
 * „Brak piekarnika" dotyczy pieczenia jako takiego.
 * Tutaj chodzi o KRUCHOŚĆ jako właściwość i o to, jak łatwo
 * ją stracić w tym urządzeniu.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ liczby sołectw gminy wiejskiej Braniewo.
 * — NIE PISZĘ o Pasłęce ani o Zalewie Wiślanym w kontekście
 *   miasta — nie potwierdzono.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PODAJĘ wydarzeń cyklicznych — żadnego nie
 *   potwierdzono.
 * — NIE PRZYPISUJĘ Braniewu produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ gminy miejskiej z gminą wiejską Braniewo.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 15 968 mieszkańców; osobna gmina wiejska Braniewo
 *   liczy 5 332 osoby,
 * — prawa miejskie z 1254 r. od biskupa warmińskiego Anzelma,
 *   na prawie lubeckim; druga lokacja w 1284 r.,
 * — w 1260 r. powstała przy kościele św. Andrzeja Warmińska
 *   Kapituła Katedralna,
 * — z zamku biskupiego, budowanego od 1280 r., zachowała się
 *   wieża bramna z kaplicą,
 * — w 1341 r. siedzibę biskupią przeniesiono do Ornety,
 * — kościół świętej Katarzyny budowano od 1343 r. przez ponad
 *   sto lat; od 2001 r. jest bazyliką mniejszą,
 * — w 1358 r. miasto wstąpiło do Hanzy jako jedno z sześciu
 *   miast pruskich w Związku,
 * — w 1564 r. Stanisław Hozjusz założył tu Collegium
 *   Hosianum — pierwszą placówkę jezuicką w Polsce,
 *   a w 1578 r. powstał Alumnat Papieski.
 */
export const BRANIEWO: CityContent = {
  slug: "braniewo",
  h1: "Thermomix Braniewo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Braniewo (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Braniewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i okolice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Braniewo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Braniewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Braniewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi wokół niego.",

  highlights: highlightyStandardowe("Braniewo i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kruche ciasto to jedyne ciasto, przy którym urządzenie łatwiej zaszkodzi niż pomoże.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Braniewie – jak wygląda prezentacja?",
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
      id: "kruche-ciasto",
      heading: "Kościół budowany ponad sto lat — czyli o kruchym cieście i o spodach",
      paragraphs: [
        "Braniewo dostało prawa miejskie w 1254 roku od biskupa warmińskiego Anzelma, i to na prawie lubeckim, rzadkim w tej części Europy. Sto lat później, w 1358, weszło do Hanzy jako jedno z zaledwie sześciu miast pruskich w Związku, a w 1564 kardynał Stanisław Hozjusz założył tu Collegium Hosianum — pierwszą placówkę jezuicką w Polsce. Kościół świętej Katarzyny zaczęto budować w 1343 roku i budowano go ponad sto lat; od 2001 jest bazyliką mniejszą.",
        "Sto lat na jeden budynek. Zaczynali ludzie, którzy nie zobaczyli końca, a fundamenty, które kładli, nikogo potem nie zachwycały, bo ich nie widać. I właśnie o tym chcę napisać: o spodzie, na którym stoi reszta. O kruchym cieście.",
        "Bo to jest jedyne ciasto, przy którym powiem wprost coś, czego sprzedawca zwykle nie mówi: to urządzenie łatwiej tu zaszkodzi, niż pomoże, jeśli nie wiecie, dlaczego kruche ciasto w ogóle jest kruche.",
        "A jest kruche dlatego, że tłuszcz został w nim w kawałkach. Nie rozprowadzony równo, nie wmieszany na gładko — zostawiony w drobinkach, które w piekarniku rozpuszczają się i zostawiają po sobie puste miejsca. To te puste miejsca sprawiają, że ciasto się kruszy. Kruchość jest więc efektem niedokończonej pracy, i to jest sedno całej sprawy.",
        "Teraz problem. To urządzenie łączy składniki niezwykle dokładnie i bardzo szybko. Robi w kilka sekund to, co palcami robiłoby się kilka minut — i przelatuje przez ten właściwy moment, zanim zdążycie zajrzeć. Za daleko oznacza jednolitą masę, a jednolita masa piecze się na twardo. Nie da się tego cofnąć.",
        "Drugi wróg jest mniej oczywisty: ciepło. Praca urządzenia sama ogrzewa to, co jest w środku. A rozpuszczony tłuszcz przestaje być kawałkiem i wsiąka w mąkę — czyli kruchość znika, zanim ciasto w ogóle trafi do piekarnika. Dlatego przy kruchym cieście zimne składniki nie są kaprysem, tylko warunkiem.",
        "Rozwiązanie jest nudne i skuteczne: zimno i krótko. Wszystko prosto z lodówki, praca możliwie najkrótsza, a jeśli macie wątpliwość — przerwać wcześniej i dokończyć palcami. Ręka nie ma tu przewagi nad maszyną w niczym poza jednym: widzi, kiedy przestać.",
        "Warto zapamiętać jedno przeciwieństwo, bo z niego bierze się większość pomyłek. Ciasto drożdżowe im dłużej wyrabiane, tym lepsze — tam chodzi o rozwinięcie glutenu i tam urządzenie jest wybawieniem, o czym pisałam osobno. Ciasto kruche jest dokładnie odwrotne: im dłużej pracowane, tym gorsze. Jeden sprzęt, dwa przeciwstawne cele.",
        "I granica: nie podam Wam proporcji ani czasu. Zależą od tłuszczu, od mąki i od tego, czy robicie spód pod tartę, czy kruche ciasteczka. Chcę, żebyście rozumieli, na co patrzeć, a nie przepisywali cudze liczby.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Braniewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli pieczecie i chcecie zobaczyć, gdzie urządzenie pomaga, a gdzie trzeba je przypilnować — powiedzcie przy umawianiu. Wolę pokazać jedno i drugie niż tylko to, co wychodzi efektownie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Braniewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla braniewskiej rodziny",
      paragraphs: [
        "Miasto liczy blisko szesnaście tysięcy mieszkańców — i tu ważna uwaga, bo pomyłka jest częsta: Braniewo jako miasto i gmina wiejska Braniewo to dwie odrębne jednostki, a liczby jednej nie należy dodawać do drugiej. Prawa miejskie miasto dostało w 1254 roku od biskupa warmińskiego Anzelma, na prawie lubeckim; po zniszczeniu w 1261 lokację odnowiono w 1284. W 1260 przy kościele świętego Andrzeja powstała Warmińska Kapituła Katedralna, a od 1280 budowano zamek biskupi, z którego zachowała się wieża bramna z kaplicą. Siedzibę biskupią przeniesiono stąd w 1341 roku do Ornety. Najważniejsze pozostają dwie rzeczy: bazylika świętej Katarzyny, budowana od 1343 roku przez ponad sto lat, i Collegium Hosianum, założone w 1564 przez Stanisława Hozjusza jako pierwsza placówka jezuicka w Polsce.",
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

  districtsHeading: "Do których części Braniewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, a także do wsi leżących wokół niego, w gminie wiejskiej Braniewo. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Braniewo też przyjadę",
  nearbyParagraphs: [
    "Frombork, Pieniężno, Orneta, Elbląg, Młynary i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Frombork", "Pieniężno", "Orneta", "Elbląg", "Młynary"],

  about: blokOMnie("do Braniewa", "w Braniewie i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Braniewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi wokół niego. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: miasto Braniewo i gmina wiejska Braniewo to dwie odrębne jednostki o tej samej nazwie — przyjeżdżam i tu, i tam, ale przy umawianiu warto powiedzieć, o którą miejscowość chodzi.",
    },
    ...faqWspolne("w Braniewie"),
    {
      question: "Czy zrobię w Thermomixie kruche ciasto?",
      answer:
        "Zrobicie, ale to jedyne ciasto, przy którym urządzenie łatwiej zaszkodzi, niż pomoże. Kruchość bierze się z tłuszczu zostawionego w kawałkach, a urządzenie łączy składniki tak dokładnie i tak szybko, że przelatuje przez właściwy moment. Zimne składniki, krótka praca, a przy wątpliwości — przerwać i dokończyć palcami.",
    },
    {
      question: "Dlaczego moje kruche ciasto wychodzi twarde?",
      answer:
        "Prawie zawsze z dwóch powodów: pracowało za długo albo się ogrzało. Jednolita masa piecze się na twardo, a rozpuszczony tłuszcz wsiąka w mąkę i kruchości już nie będzie. Dlatego przy tym cieście zimno nie jest kaprysem, tylko warunkiem.",
    },
    {
      question: "Skoro ciasto drożdżowe trzeba wyrabiać długo, to kruche też?",
      answer:
        "Odwrotnie — i stąd bierze się większość pomyłek. Drożdżowe im dłużej wyrabiane, tym lepsze, bo rozwija się gluten. Kruche im dłużej pracowane, tym gorsze. Jeden sprzęt, dwa przeciwstawne cele.",
    },
  ],

  geo: { lat: 54.3797, lng: 19.8201 },
};
