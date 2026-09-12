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
 * LUBAWA — gmina MIEJSKA w powiecie iławskim.
 * MIASTO ok. 10 000 (ewidencja ludności UM, 31.12.2024 —
 * ŹRÓDŁO NIE-GUS, więc piszę „około"). Powierzchnia 17 km².
 * ⚠ ISTNIEJE OSOBNA GMINA WIEJSKA LUBAWA: 10 602 osoby
 * (31.12.2024), z siedzibą w mieście, ale MIASTO DO NIEJ
 * NIE NALEŻY. NIE SUMUJĘ. Liczby sołectw nie potwierdzono.
 *
 * ⚠⚠ LUBAWA TO NIE JEST NOWE MIASTO LUBAWSKIE — to osobne
 * miasto w osobnym powiecie (nowomiejskim), o którym pisałam
 * oddzielnie. FAQ MUSI to rozróżniać. Uwaga też na spółkę
 * giełdową o tej samej nazwie — nie wspominam o niej.
 *
 * PRAWA MIEJSKIE: przywilej lokacyjny wydał BISKUP CHEŁMIŃSKI
 * HERMAN w latach 1303–1311; POTWIERDZIŁ GO 13 KWIETNIA 1326 r.
 * BISKUP OTTON. Słownik historyczno-geograficzny IH PAN podaje
 * status civitas et castrum od 1326 r.
 * ⚠ OBALONE: „prawa miejskie w 1269 r." — 1269 TO ROK
 * ZNISZCZENIA MIASTA przez Prusów, nie lokacji.
 * PRZYNALEŻNOŚĆ: ZIEMIA LUBAWSKA, dominium BISKUPÓW
 * CHEŁMIŃSKICH. NIE WARMIA, NIE MAZURY, NIE PRUSY GÓRNE.
 *
 * ZAMEK BISKUPÓW CHEŁMIŃSKICH — trwała ruina. Budowa
 * 1303–1311 (bp Herman), rozbudowa 1402–1416 (bp Arnold
 * Stapil), przebudowa barokowa 1627–1637; POŻAR 1815,
 * ROZBIÓRKA 1826.
 * KOŚCIÓŁ FARNY ŚW. ANNY — 1330 r., w obrębie murów miejskich.
 * KOŚCIÓŁ I KLASZTOR BERNARDYNÓW — XIV w., rozbudowa
 * XVII–XVIII w.
 * MIKOŁAJ KOPERNIK bywał na tutejszym zamku CZTEROKROTNIE
 * W LATACH 1535–1539, u biskupa TIEDEMANNA GIESEGO;
 * najdłużej w 1539 r., od czerwca do września.
 * ⚠ Tezy, że to TU podjął decyzję o wydaniu dzieła, NIE
 * PODAJĘ JAKO FAKTU — opiera się na lokalnej tradycji.
 * RZEKA SANDELA.
 * SANKTUARIUM MATKI BOŻEJ LIPSKIEJ W LIPACH — odpust
 * w pierwszą niedzielę lipca.
 * DNI LUBAWY — impreza cykliczna; edycja z 2025 r. była 28.
 * NUMERU EDYCJI NA 2026 NIE PODAJĘ.
 *
 * KĄT: CIASTO PARZONE — ptysie, eklery i jedna czynność,
 * której nikt nie lubi. Kąt od miasta, do którego Kopernik
 * przyjeżdżał dopracowywać rzecz wymagającą precyzji.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że ciasto parzone jest jednym z nielicznych, przy których
 *   urządzenie daje przewagę nie odrobinę, tylko zasadniczą,
 * — dlaczego: bo trzeba zagotować płyn z tłuszczem, wsypać
 *   mąkę naraz i mieszać BEZ PRZERWY na ogniu, aż masa
 *   odejdzie od ścianek — i to jest praca, przy której ręka
 *   odpada,
 * — że drugi etap jest odwrotny: jajka wbija się do masy
 *   PODSTUDZONEJ, po jednym, i tu trzeba uważać,
 * — że najczęstszy błąd to dodanie jajek do masy zbyt gorącej
 *   — wtedy się ścinają i nie ma odwrotu,
 * — że gotowość masy poznaje się po tym, jak wygląda, a nie
 *   po zegarze,
 * — że ciasta parzonego nie da się „poprawić" po fakcie
 *   i dlatego lepiej robić je wtedy, gdy nikt nie przeszkadza,
 * — i ODMOWA: nie podaję proporcji, temperatury pieczenia
 *   ani czasu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI ani przepisu.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM — także spółki o nazwie miasta.
 * — NIE PODAJĘ liczby sołectw gminy wiejskiej.
 * — NIE PODAJĘ ludności miasta jako danej GUS.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta.
 * — ZERO roku 1920 i wątku plebiscytowego.
 * — ZERO roku 1945 i wysiedleń.
 * — ZERO akcji „Wisła".
 * — ZERO historii społeczności żydowskiej i cmentarza
 *   żydowskiego — temat wymaga osobnej wrażliwości, nie
 *   wplatam go w treść handlową.
 * — Zniszczenia z 1269 i 1330 r. wymieniam wyłącznie jako
 *   daty przy historii budowli, bez rozwijania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ciasto drożdżowe"
 * dotyczy wyrabiania i rozczynu. „Kruche ciasto" (Braniewo)
 * dotyczy techniki, w której urządzenie szkodzi. „Beza"
 * dotyczy ubijania piany. „Sernik i masy" dotyczą wypieków
 * z masą. Tutaj chodzi o CIASTO PARZONE: jedyne, w którym
 * mąkę gotuje się przed pieczeniem.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ ludności miasta jako liczby GUS.
 * — NIE PISZĘ, że Kopernik podjął tu decyzję o wydaniu dzieła.
 * — NIE PODAJĘ liczby sołectw gminy wiejskiej Lubawa.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PRZYPISUJĘ Lubawie produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE PODAJĘ numeru edycji Dni Lubawy w 2026 r.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy około dziesięciu tysięcy mieszkańców;
 *   osobną jednostką jest gmina wiejska Lubawa z 10 602
 *   mieszkańcami,
 * — przywilej lokacyjny wydał biskup chełmiński Herman
 *   w latach 1303–1311, a potwierdził go 13 kwietnia 1326 r.
 *   biskup Otton; Lubawa leży na ziemi lubawskiej,
 * — zamek biskupów chełmińskich budowano od 1303 r.,
 *   rozbudowywano w latach 1402–1416, przebudowano barokowo
 *   w latach 1627–1637; spłonął w 1815 r. i został rozebrany
 *   w 1826 r.,
 * — kościół farny świętej Anny wzniesiono w 1330 r.,
 * — Mikołaj Kopernik bywał na zamku czterokrotnie w latach
 *   1535–1539, u biskupa Tiedemanna Giesego,
 * — miasto leży nad Sandelą,
 * — w Lipach działa sanktuarium Matki Bożej Lipskiej
 *   z odpustem w pierwszą niedzielę lipca,
 * — cyklicznie odbywają się Dni Lubawy.
 */
export const LUBAWA: CityContent = {
  slug: "lubawa",
  h1: "Thermomix Lubawa – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Lubawa (warmińsko-mazurskie) — przedstawiciel",
  seoDescription:
    "Thermomix w Lubawie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i okolice. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lubawa — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lubawie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Lubawy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi wokół niego.",

  highlights: highlightyStandardowe("Lubawa i okolice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ciasto parzone to jeden z niewielu wypieków, przy których urządzenie robi realną różnicę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lubawie – jak wygląda prezentacja?",
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
      id: "ciasto-parzone",
      heading: "Miasto, do którego przyjeżdżał Kopernik — czyli o cieście parzonym",
      paragraphs: [
        "Lubawa była miastem biskupów chełmińskich — nie warmińskich i nie krzyżackim, co warto rozróżniać. Przywilej lokacyjny wydał biskup Herman między 1303 a 1311 rokiem, a potwierdził go 13 kwietnia 1326 biskup Otton. Rok 1269, który krąży jako data założenia, jest w rzeczywistości rokiem zniszczenia osady. Na tutejszym zamku, dziś trwałej ruinie, bywał czterokrotnie w latach 1535–1539 Mikołaj Kopernik, u swojego przyjaciela biskupa Tiedemanna Giesego; najdłużej został w 1539 roku, od czerwca do września.",
        "Miasto, w którym ktoś przez cztery lata wracał do tej samej rzeczy, żeby ją dopracować, jest dobrym miejscem na stronę o cieście, które albo wyjdzie, albo nie — i nie da się go poprawić.",
        "Ciasto parzone, czyli to, z którego robi się ptysie, eklery i karpatkę, jest jednym z bardzo nielicznych wypieków, przy których to urządzenie nie daje przewagi odrobinę, tylko zasadniczo. Powiem to wprost, bo zwykle jestem po drugiej stronie i tłumaczę, czego sprzęt nie zrobi.",
        "Rzecz w tym, jak takie ciasto powstaje. Zagotowuje się płyn z tłuszczem, wsypuje mąkę naraz i miesza bez przerwy na ogniu, aż masa zbierze się w kulę i zacznie odchodzić od ścianek. To trwa i to jest praca, przy której ręka naprawdę odpada — trzeba mieszać energicznie, cały czas, nad gorącym garnkiem, bez chwili przerwy. Właśnie ten etap urządzenie bierze na siebie w całości: grzeje i miesza jednocześnie, a Wy stoicie obok.",
        "Ale drugi etap jest odwrotny i tu trzeba uważać, bo tego już nie da się „ustawić i odejść”. Jajka wbija się do masy podstudzonej, pojedynczo, czekając, aż każde się połączy. Do masy zbyt gorącej wrzucone jajko po prostu się zetnie — i wtedy nie ma odwrotu, bo z ześciętego jajka nie zrobi się już gładkiej masy. To najczęstszy i najbardziej bolesny błąd przy tym cieście.",
        "Gotowość masy w pierwszym etapie poznaje się zresztą po wyglądzie, a nie po zegarze: po tym, że przestaje się kleić do ścianek i zbiera w jedną całość. Zegar tu kłamie, bo zależy od mąki, od ilości i od tego, jak mocno się grzeje.",
        "I jeszcze jedna uwaga praktyczna: ciasta parzonego nie da się przerwać w połowie ani poprawić po fakcie. Jeśli wyjdzie za rzadkie, ptysie się rozleją; za gęste — nie wyrosną. Dlatego to jest wypiek na spokojne popołudnie, a nie na piętnaście minut między jednym a drugim.",
        "I granica: nie podam Wam proporcji, temperatury ani czasu pieczenia. Przy tym akurat cieście liczby mają znaczenie i właśnie dlatego nie chcę ich zgadywać — wolę, żebyście wzięli sprawdzony przepis i wiedzieli, na co przy nim patrzeć.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lubawie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli pieczecie i chcecie zobaczyć etap, przy którym normalnie boli ręka — powiedzcie przy umawianiu. To pokazuję najchętniej, bo różnicę widać od razu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lubawie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lubawskiej rodziny",
      paragraphs: [
        "Miasto liczy około dziesięciu tysięcy mieszkańców. Uwaga na częstą pomyłkę: gmina wiejska Lubawa to odrębna jednostka z ponad dziesięcioma i pół tysiącami osób, która ma siedzibę w mieście, ale samego miasta nie obejmuje. Lubawa leży na ziemi lubawskiej i była miastem biskupów chełmińskich — prawa nadał jej biskup Herman na początku czternastego wieku, a potwierdził biskup Otton w 1326 roku. Nad miastem stoi ruina zamku biskupiego, budowanego od 1303 roku i rozebranego po pożarze w 1826; bywał na nim Mikołaj Kopernik. Zachował się też kościół farny świętej Anny z 1330 roku oraz czternastowieczny zespół pobernardyński. Miasto leży nad Sandelą, a w pobliskich Lipach działa sanktuarium Matki Bożej Lipskiej z odpustem w pierwszą niedzielę lipca.",
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

  districtsHeading: "Do których części Lubawy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, a także do wsi leżących wokół niego, w gminie wiejskiej Lubawa — w tym do Lip. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę i numer domu albo nazwę miejscowości.",
  ],
  districts: [],

  nearbyHeading: "Poza Lubawę też przyjadę",
  nearbyParagraphs: [
    "Nowe Miasto Lubawskie, Iława, Ostróda, Susz i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nowe Miasto Lubawskie", "Iława", "Ostróda", "Susz"],

  about: blokOMnie("do Lubawy", "w Lubawie i okolicy", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Lubawy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi wokół niego. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: Lubawa to nie Nowe Miasto Lubawskie — to dwa osobne miasta w różnych powiatach. Do obu przyjeżdżam, ale przy umawianiu warto powiedzieć, o które chodzi.",
    },
    ...faqWspolne("w Lubawie"),
    {
      question: "Czy Thermomix pomaga przy cieście parzonym?",
      answer:
        "Bardzo — i to jeden z niewielu wypieków, przy których mówię to bez zastrzeżeń. Pierwszy etap polega na mieszaniu bez przerwy na gorącym garnku, aż masa zbierze się w kulę i odejdzie od ścianek. To urządzenie grzeje i miesza jednocześnie, więc przejmuje tę pracę w całości.",
    },
    {
      question: "Dlaczego moje ciasto parzone się warzy?",
      answer:
        "Bo jajka trafiły do masy zbyt gorącej i po prostu się ścięły. Wbija się je do masy podstudzonej, pojedynczo, czekając, aż każde się połączy. Z ześciętego jajka nie zrobi się już gładkiej masy i tego nie da się cofnąć.",
    },
    {
      question: "Podasz przepis na ptysie?",
      answer:
        "Nie podam proporcji, temperatury ani czasu pieczenia. Przy tym cieście liczby naprawdę mają znaczenie i dlatego nie chcę ich zgadywać — lepiej weźcie sprawdzony przepis, a ja powiem, na co przy nim patrzeć.",
    },
  ],

  geo: { lat: 53.5044, lng: 19.7519 },
};
