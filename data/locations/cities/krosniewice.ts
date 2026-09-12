import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * KROŚNIEWICE — gmina miejsko-wiejska w powiecie kutnowskim.
 * MIASTO 3 949 mieszkańców, GMINA 7 655; 22 sołectwa.
 *
 * MUZEUM im. JERZEGO DUNIN-BORKOWSKIEGO — oś strony.
 * Kolekcjoner przekazał CAŁĄ swoją kolekcję państwu
 * 24 WRZEŚNIA 1978 r., muzeum otwarto w LISTOPADZIE 1978 r.
 * Dziś instytucja powiatowa. Od tego czasu ok. 150 kolekcjonerów
 * dołożyło do zbiorów własne dary. Siedziba: klasycystyczny
 * zajazd dworski, Plac Wolności 1, otoczony 17-hektarowym
 * parkiem w stylu angielskim.
 * NAJSTARSZY OBELISK W POLSCE — 1814 r., ku czci
 * ks. Józefa Poniatowskiego.
 *
 * OBALONE: kolejka wąskotorowa NIE KURSUJE od 2008 r. — tory
 * należą do PKP. Nie piszę o niej w czasie teraźniejszym.
 * OBALONE: E30 i E75 NIE KRZYŻUJĄ SIĘ już w mieście — obwodnica
 * od 2010 r. Stare opisy „skrzyżowanie dróg międzynarodowych
 * w centrum" są nieaktualne.
 * OBALONE: miasto powstało przed 1442 r. jako prywatne miasto
 * szlacheckie — NIE MA aktu lokacyjnego królewskiego, więc
 * nie podaję „nadania praw".
 *
 * KĄT: GARNKI I NACZYNIA ODZIEDZICZONE — co zostaje po kimś
 * w kuchni i co z tym zrobić, gdy dochodzi nowe urządzenie.
 * Kąt wyrasta wprost z muzeum kolekcjonera, który oddał
 * wszystko, co zebrał, żeby to przetrwało.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że prawie każdy ma w kuchni naczynia po kimś i że to nie
 *   jest sentymentalny drobiazg, tylko realna część wyposażenia,
 * — że urządzenie NICZEGO nie zastępuje w tym zbiorze — żeliwna
 *   brytfanna, blacha do ciasta i kamionka robią rzeczy, których
 *   ono nie robi,
 * — co realnie przestaje być potrzebne: tarka, trzy miski,
 *   maselnica, sitko do przecierania,
 * — że najczęstszy błąd to wyrzucenie za dużo w pierwszym
 *   miesiącu, zanim się wie, czego się naprawdę używa,
 * — że przepis po babci zapisany „na oko" da się odtworzyć,
 *   ale wymaga zważenia własnej ręki — o tym pisałam osobno
 *   i tu tylko odsyłam,
 * — i ODMOWA: nie doradzę, czy stare naczynie nadaje się
 *   jeszcze do użytku.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD o bezpieczeństwie starych naczyń: powłok,
 *   glazury, aluminium, ołowiu. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — NIE PISZĘ o kolejce wąskotorowej w czasie teraźniejszym.
 * — NIE ROBIĘ TŁA z wyludniania ani z bezrobocia.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Odtwarzanie przepisu,
 * którego nikt nie zapisał" (Puck) dotyczy PRZEPISU i pamięci
 * o smaku. „Przepisy przywiezione z ludźmi" (Zelów) dotyczą
 * migracji kuchni. „Spiżarnia" (Brusy) dotyczy zapasów.
 * „Drewno w kuchni" (Czersk) dotyczy jednego materiału.
 * Tutaj chodzi o SPRZĘT ODZIEDZICZONY: co zostaje, co dalej
 * pracuje, a co można oddać.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ roku nadania praw miejskich — miasto prywatne,
 *   pierwsza wzmianka jako miasto przed 1442 r.
 * — NIE PISZĘ o liczbie eksponatów muzeum — źródła podają
 *   rozbieżne rzędy wielkości.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla gminy Krośniewice nie znalazłam żadnego.
 * — NIE MYLĘ Krośniewic z KROSNEM ani z KROŚCIENKIEM.
 * — districts: nie potwierdzono osiedli statutowych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 3 949, gmina 7 655 mieszkańców, 22 sołectwa,
 * — Muzeum im. Jerzego Dunin-Borkowskiego: kolekcję przekazano
 *   24 września 1978 r., muzeum otwarto w listopadzie 1978 r.,
 * — od tego czasu ok. 150 kolekcjonerów dołożyło własne dary,
 * — siedziba to klasycystyczny zajazd dworski przy Placu
 *   Wolności, otoczony 17-hektarowym parkiem angielskim,
 * — w parku stoi najstarszy obelisk w Polsce z 1814 r., ku czci
 *   księcia Józefa Poniatowskiego,
 * — kolejka wąskotorowa nie kursuje od 2008 r.,
 * — od 2010 r. ruch tranzytowy omija miasto obwodnicą.
 */
export const KROSNIEWICE: CityContent = {
  slug: "krosniewice",
  h1: "Thermomix Krośniewice – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Krośniewice (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Krośniewicach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Krośniewice — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Krośniewicach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Krośniewic z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Krośniewice i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nowe urządzenie nie musi wyrzucić z kuchni tego, co zostało po kimś.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Krośniewicach – jak wygląda prezentacja?",
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
      id: "garnki-po-kims",
      heading: "Miasto, w którym jeden człowiek oddał wszystko, co zebrał — czyli o garnkach po kimś",
      paragraphs: [
        "24 września 1978 roku Jerzy Dunin-Borkowski przekazał państwu całą swoją kolekcję, a w listopadzie tego samego roku w Krośniewicach otwarto muzeum jego imienia. Siedzibą został klasycystyczny zajazd dworski przy Placu Wolności, otoczony siedemnastohektarowym parkiem w stylu angielskim, w którym stoi najstarszy obelisk w Polsce — z 1814 roku, ku czci księcia Józefa Poniatowskiego. Od tamtej pory zbiory rosną dalej: przekazało do nich swoje rzeczy około stu pięćdziesięciu innych kolekcjonerów.",
        "Piszę o tym, bo w prawie każdej kuchni, do której przyjeżdżam, stoi coś po kimś. Żeliwna brytfanna po babci, blacha do ciasta, którą zna cała rodzina po wygiętym rogu, kamionkowy garnek, w którym zawsze kisiło się ogórki. To nie jest sentymentalny drobiazg — to realna część wyposażenia, często lepsza od tego, co dziś stoi w sklepie.",
        "Więc powiem od razu rzecz, której sprzedawca zwykle nie mówi: to urządzenie nie zastępuje tych naczyń. Nie upiecze ciasta na blasze. Nie zrobi tego, co robi żeliwo rozgrzane w piekarniku. Nie ukisi w kamionce. Kupując je, nie zamykacie tamtej półki.",
        "Co realnie przestaje być potrzebne, to zupełnie inny zestaw: tarka i trzy miski wokół niej, sitko do przecierania, maselnica, drobne urządzonka do jednej czynności, których w szufladzie jest zwykle sześć. To one zwalniają miejsce, nie garnki.",
        "I najczęstszy błąd, jaki widzę u ludzi po zakupie: wyrzucanie za dużo w pierwszym miesiącu. Zapał jest wtedy największy, a wiedza o tym, czego się naprawdę używa, najmniejsza. Radzę odwrotnie — odłożyć wątpliwe rzeczy do pudła, schować je na kwartał i dopiero potem zdecydować. Po trzech miesiącach widać dokładnie, po co się sięga, a po co nie.",
        "Osobna sprawa to przepisy zapisane ręką kogoś, kogo już nie ma, gdzie wszystko jest „na oko” i „ile weźmie”. Da się je odtworzyć, ale trzeba najpierw zważyć własną rękę — pisałam o tym osobno i tu tylko odsyłam.",
        "I granica, przy której nie ustąpię: nie ocenię Wam, czy stary garnek, patelnia albo polewane naczynie nadają się jeszcze do użytku. Powłoki, glazury i stopy sprzed lat to nie jest temat, w którym mam kompetencje, a zgadywanie tutaj byłoby nie w porządku.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Krośniewicach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli zastanawiacie się, co z dotychczasowym wyposażeniem kuchni — powiedzcie przy umawianiu. Wolę pokazać, co urządzenie robi obok Waszych garnków, niż udawać, że je wszystkie zastąpi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Krośniewicach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla krośniewickiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko cztery tysiące mieszkańców, a cała gmina ponad siedem i pół tysiąca, w dwudziestu dwóch sołectwach. Krośniewice były miastem prywatnym — pierwsza wzmianka o nich jako o mieście pochodzi sprzed 1442 roku, więc nie ma tu królewskiego aktu lokacyjnego, o którym można by napisać z datą. Najbardziej znane są z muzeum kolekcjonera Jerzego Dunin-Borkowskiego, otwartego w listopadzie 1978 roku w klasycystycznym zajeździe dworskim przy Placu Wolności. Wąskotorówka, z której miasto też było znane, nie kursuje od 2008 roku, a ruch tranzytowy od 2010 roku omija Krośniewice obwodnicą — w centrum zrobiło się dzięki temu wyraźnie ciszej.",
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

  districtsHeading: "Do których części gminy Krośniewice dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu dwóch sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Krośniewice też przyjadę",
  nearbyParagraphs: [
    "Kutno, Łęczyca, Ozorków, Koło i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kutno", "Łęczyca", "Ozorków", "Żychlin"],

  about: blokOMnie("do Krośniewic", "w Krośniewicach i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Krośniewic bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu dwóch sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Krośniewicach"),
    {
      question: "Czy Thermomix zastąpi moje stare garnki?",
      answer:
        "Nie i nie udaję, że tak. Blacha do ciasta, żeliwna brytfanna i kamionka robią rzeczy, których to urządzenie nie robi. Realnie przestają być potrzebne tarka z trzema miskami wokół niej, sitko do przecierania i drobne urządzonka do jednej czynności — a nie naczynia.",
    },
    {
      question: "Co zrobić ze sprzętem, którego przestanę używać?",
      answer:
        "Nie wyrzucać w pierwszym miesiącu. Zapał jest wtedy największy, a wiedza o tym, czego naprawdę używacie, najmniejsza. Lepiej odłożyć wątpliwe rzeczy do pudła na kwartał i dopiero potem zdecydować — po trzech miesiącach widać to dokładnie.",
    },
    {
      question: "Czy stary garnek po babci nadaje się jeszcze do gotowania?",
      answer:
        "Tego Wam nie ocenię. Powłoki, glazury i stopy sprzed lat to nie jest temat, w którym mam kompetencje, a zgadywanie w sprawie, którą się je, byłoby nie w porządku.",
    },
  ],

  geo: { lat: 52.2536, lng: 19.1717 },
};
