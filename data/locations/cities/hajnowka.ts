import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * HAJNÓWKA — brama Puszczy Białowieskiej, miasto czterech cerkwi
 * i soboru na pięć tysięcy osób. Około dwóch trzecich mieszkańców
 * należy do tutejszych parafii prawosławnych.
 *
 * KĄT: gotowanie postne — bez mięsa i bez nabiału, przez tygodnie,
 * według kalendarza. To jedyne miejsce w serwisie, w którym ten temat
 * się pojawia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — post w kalendarzu prawosławnym wyklucza nie tylko mięso, ale też
 *   nabiał — to zupełnie inna kuchnia, nie „obiad bez kotleta",
 * — CZEGO NIE ZAKŁADAM: nie wiem, kto w Waszym domu pości i w jakim
 *   zakresie, i nie zamierzam zgadywać. To jest sprawa między Wami
 *   a Waszą parafią, nie moja,
 * — co się realnie zmienia w kuchni, gdy odpada nabiał: strączki,
 *   zupy na wodzie, pasty warzywne, napoje roślinne z orzechów i płatków
 *   — akurat te rzeczy urządzenie robi dobrze,
 * — czego NIE zrobi: nie usmaży, nie upiecze. Marcinka nie zrobi.
 *
 * TWARDE GRANICE — TU SZCZEGÓLNIE:
 * — ŻADNEJ TEOLOGII, ŻADNYCH PORAD, CO POST OBEJMUJE. Nie mówię, co
 *   wolno, a czego nie, w którym tygodniu ani w jakim zakresie.
 *   Od tego jest parafia, nie przedstawicielka handlowa.
 * — ŻADNEGO ZAKŁADANIA, kto pości. Nie piszę „u Was w domu",
 *   tylko „jeśli u Was".
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ani że kuchnia bezmięsna jest
 *   zdrowsza, ani że post komukolwiek służy albo szkodzi.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH OCEN ani komentarzy do czyjejś wiary czy narodowości.
 *
 * ROZGRANICZENIE. Świdnica mówi o gotowaniu z narzuconymi
 * ograniczeniami — ale tam chodzi o ograniczenie INDYWIDUALNE i stałe
 * (ktoś czegoś nie może albo nie chce jeść). Tutaj chodzi o coś
 * innego: ograniczenie WSPÓLNE i OKRESOWE, wyznaczone kalendarzem,
 * które zaczyna się i kończy w konkretnym dniu.
 *
 * ODRZUCONE KĄTY:
 * — runo leśne i zioła: firmy są potwierdzone (Runo, Jackiewicz,
 *   EkoHerba), ale researcher nie znalazł ŻADNYCH danych o skali —
 *   ilu ludzi z tego żyje. Do tego kąt „grzyby" ma już Goleniów,
 * — kryzys graniczny i strefa buforowa: fakty twarde, ale dotyczą
 *   głównie Białowieży i Czeremchy, nie samej Hajnówki. Do tego to
 *   temat polityczny i cudza strata — nie robię z tego chwytu
 *   sprzedażowego. Nie ma go w tekście ani jednym zdaniem.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy 18 836 mieszkańców (GUS, 31.12.2024) na 21,3 km²;
 *   ubyło 16,3% mieszkańców w latach 2002–2024,
 * — ok. dwóch trzecich mieszkańców należy do jednej z trzech parafii
 *   prawosławnych w mieście (encyklopedia Puszczy Białowieskiej);
 *   PTTK pisze ostrożniej: „ponad połowa". W tekście podaję PRZEDZIAŁ,
 *   nie jedną liczbę, bo najświeższe dane liczbowe dla powiatu
 *   pochodzą z przełomu 1998/1999,
 * — ponad 25% mieszkańców deklaruje przynależność do mniejszości
 *   białoruskiej (dane Urzędu Miasta),
 * — w mieście stoją cztery cerkwie; sobór Świętej Trójcy budowano
 *   od lat siedemdziesiątych, oddano do użytku w 1984 r.,
 *   a konsekrowano 11 października 1992 r.; mieści pięć tysięcy osób,
 * — post w kalendarzu prawosławnym wyklucza mięso, nabiał i ryby;
 *   Wielki Post trwa około czterdziestu dni,
 * — Międzynarodowy Festiwal Hajnowskie Dni Muzyki Cerkiewnej odbywa się
 *   od 1982 r.; w 2026 r. czterdziesta piąta edycja,
 * — hajnowski marcinek jest na ministerialnej Liście Produktów
 *   Tradycyjnych od 18 lipca 2016 r.: około trzydziestu placków
 *   grubości dwóch milimetrów, przekładanych kremem, chłodzonych
 *   około dwunastu godzin,
 * — kiszka ziemniaczana jest na tej samej liście od 2005 r., ale jako
 *   produkt CAŁEGO województwa podlaskiego, nie Hajnówki,
 * — miasto wyrosło z tartaku i fabryki suchej destylacji drewna
 *   z 1915 r.; prawa miejskie w 1951 r. (dnia i miesiąca nie ustaliłam),
 * — najwięksi pracodawcy: Forte, Pronar, Runo, Gryfskand, Optima,
 * — bezrobocie 8,2% to wskaźnik POWIATU — w tekście go nie ma.
 */
export const HAJNOWKA: CityContent = {
  slug: "hajnowka",
  h1: "Thermomix Hajnówka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Hajnówka — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Hajnówce: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Hajnówka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Hajnówce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Hajnówki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Hajnówka i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Nie zakładam, kto u Was pości. Pytam i dobieram dania pod odpowiedź.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Hajnówce – jak wygląda prezentacja?",
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
      id: "post",
      heading: "Kuchnia, w której przez tygodnie odpada nie tylko mięso",
      paragraphs: [
        "W Hajnówce stoją cztery cerkwie, a sobór Świętej Trójcy mieści pięć tysięcy osób — przy osiemnastu tysiącach mieszkańców całego miasta. Źródła różnią się co do liczby: encyklopedia regionalna pisze, że do tutejszych parafii prawosławnych należy około dwóch trzecich hajnowian, PTTK ostrożniej — że ponad połowa. Podaję obie wersje, bo najświeższe dane liczbowe, do jakich dotarłam, pochodzą sprzed ćwierćwiecza i wolę nie udawać precyzji, której nie mam.",
        "Z tego wynika rzecz, o której nie piszę nigdzie indziej w tym serwisie. Kalendarz postny w tradycji prawosławnej wyklucza nie tylko mięso, ale też nabiał i ryby, a sam Wielki Post trwa około czterdziestu dni. To nie jest „obiad bez kotleta” — to jest inna kuchnia, przez wiele tygodni w roku.",
        "I teraz najważniejsze zdanie na tej stronie: nie zakładam, że u Was ktoś pości, ani w jakim zakresie. Nie wiem tego, nie zgaduję i nie będę doradzać, co post obejmuje, a czego nie — od tego jest parafia, a nie przedstawicielka handlowa. Pytam o to przy umawianiu tak samo, jak pytam o alergie i o to, ilu was siada do stołu, i po prostu dobieram dania pod odpowiedź.",
        "Jeśli natomiast w Waszym domu ten kalendarz ma znaczenie, to warto wiedzieć, co się w kuchni realnie zmienia. Odpada nabiał, więc odpada połowa zwykłych zagęszczaczy i połowa deserów. Zostają strączki — soczewica, fasola, groch, ciecierzyca — i tu urządzenie jest naprawdę pomocne, bo zupa i pasta z gotowanych strączków to dokładnie ta robota, która polega na rozdrobnieniu i mieszaniu, i którą można zostawić bez pilnowania.",
        "Druga rzecz to napoje roślinne. Kiedy krowie mleko odpada na kilka tygodni, kupowanie go w kartonach robi się drogie i uciążliwe, a z orzechów, migdałów czy płatków owsianych da się je zrobić na miejscu, w kilka minut, w jednym naczyniu. To jest chyba najuczciwszy przykład, jaki mogę tu podać.",
        "Do tego kasze, zupy kremy gotowane na wodzie i pasty warzywne do chleba. Wszystko rzeczy, w których cała trudność polega na rozdrabnianiu — a to akurat maszyna robi lepiej i szybciej niż ręka.",
        "Czego nie zrobi, i mówię to od razu: nie usmaży i nie upiecze. A skoro jestem w Hajnówce, powiem to na konkretnym przykładzie. Hajnowski marcinek — od dwa tysiące szesnastego roku na ministerialnej Liście Produktów Tradycyjnych — to około trzydziestu placków grubości dwóch milimetrów, przekładanych kremem i chłodzonych kilkanaście godzin. Urządzenie zrobi krem. Trzydziestu placków nie upiecze i nikt Wam tej roboty nie skróci.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Hajnówce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Przy umawianiu powiedz, czy w danym okresie gotujecie postnie — wtedy przywiozę składniki pod to, a nie pod przepis, którego i tak byście teraz nie zrobili.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Hajnówce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla hajnowskiej rodziny",
      paragraphs: [
        "Hajnówka wyrosła z tartaku i fabryki drzewnej, a dziś należy do najszybciej wyludniających się miast w Polsce — od dwa tysiące drugiego roku ubyło tu ponad szesnaście procent mieszkańców. W praktyce znaczy to, że w wielu domach przy stole siada mniej osób niż dekadę temu, a największymi pracodawcami są nadal zakłady, do których idzie się na zmianę.",
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

  districtsHeading: "Do których części Hajnówki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Nie znalazłam urzędowego wykazu osiedli — nazwy, których się tu używa, są zwyczajowe. Przy umawianiu najprościej podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Hajnówkę też przyjadę",
  nearbyParagraphs: [
    "Dubiny, Nowoberezowo, Narew, Narewka, Białowieża i Kleszczele są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Dubiny", "Narew", "Narewka", "Białowieża", "Kleszczele", "Bielsk Podlaski"],

  about: blokOMnie("do Hajnówki", "w Hajnówce i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Hajnówki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Hajnówce"),
    {
      question: "Czy da się na prezentacji ugotować coś postnego?",
      answer:
        "Tak, wystarczy powiedzieć o tym przy umawianiu. Nie zakładam z góry, kto pości i w jakim zakresie — pytam o to tak samo jak o alergie i o liczbę osób, a potem przywożę składniki pod odpowiedź. Nie doradzam natomiast, co post obejmuje; od tego jest parafia, nie ja.",
    },
    {
      question: "Co takie urządzenie daje, gdy odpada nabiał?",
      answer:
        "Najbardziej napoje roślinne — z orzechów, migdałów albo płatków owsianych robi się je na miejscu, w jednym naczyniu, zamiast kupować w kartonach. Poza tym zupy i pasty ze strączków: soczewicy, fasoli, ciecierzycy. To jest dokładnie ta robota, która polega na rozdrabnianiu i mieszaniu, więc da się ją zostawić bez pilnowania.",
    },
    {
      question: "Zrobię w tym hajnowskiego marcinka?",
      answer:
        "Krem tak, placków nie. Marcinek to około trzydziestu placków grubości dwóch milimetrów i kilkanaście godzin chłodzenia — urządzenie nie piecze i nie skróci tej roboty nikomu. Wolę to powiedzieć wprost, niż żebyście się przekonali po zakupie.",
    },
  ],

  geo: { lat: 52.7411, lng: 23.5822 },
};
