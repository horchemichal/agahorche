import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * KOPRZYWNICA — miasto w powiecie sandomierskim, 2 357 mieszkańców
 * (31.12.2024, GUS). Lokacja 8 grudnia 1268 r. przez Bolesława
 * Wstydliwego. Opactwo cystersów założone w 1185 r. przez Kazimierza
 * Sprawiedliwego, SKASOWANE w latach 1818–1819 — dziś to zwykła
 * parafia. Prawa miejskie utracone w 1869 r., ODZYSKANE
 * 1 STYCZNIA 2001 r. W mieście działa duża fabryka soków.
 *
 * KĄT: cukier i karmel — czyli składnik, który przypala się
 * najszybciej ze wszystkich. Miasto z fabryką soków, w którym
 * cukier jest surowcem przemysłowym, jest właściwym miejscem
 * na jedyną stronę w serwisie o tym, co ciepło robi z cukrem.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że cukier przechodzi od „jeszcze nic" do „spalony" w kilkanaście
 *   sekund i że to jest najczęstsza przyczyna wyrzuconego garnka,
 * — że trzymana temperatura plus stałe mieszanie to dokładnie to,
 *   czego ta robota wymaga — konfitury, kajmak, masy, sosy słodkie,
 * — że gorący cukier jest NIEBEZPIECZNY i że to jedyne miejsce,
 *   gdzie mówię o tym wprost,
 * — czego NIE zrobi: karmelu na twardo, lizaków, nitek, prażonych
 *   orzechów w karmelu — wszystkiego, co wymaga wysokich temperatur
 *   i patelni,
 * — i uczciwie: to nie jest powód do zakupu sam w sobie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TEMPERATUR, CZASÓW ANI STOPNI KARMELIZACJI. Przy cukrze
 *   to jest granica bezpieczeństwa, nie tylko stylu.
 * — ŻADNEJ INSTRUKCJI ROBIENIA KARMELU NA TWARDO ani cukierków.
 *   To jest praca w temperaturach, przy których poparzenie jest
 *   poważne — i nie jest to temat dla przedstawicielki handlowej.
 * — ŻADNYCH PORAD O PRZETWORACH, PASTERYZACJI I SŁOIKACH — odmowa
 *   postawiona wprost przy Hrubieszowie i powtórzona przy Ożarowie.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o cukrze. Ani „mniej cukru to
 *   zdrowiej", ani nic w drugą stronę. To nie jest strona
 *   dietetyczna.
 * — ŻADNEJ KRYTYKI gotowych konfitur, dżemów ani producentów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Powidła" (Szydłów) dotyczą
 * KONKRETNEGO WYROBU ze śliwek i tam osią jest wielogodzinne
 * smażenie. „Sosy, które się warzą" (Sędziszów Małopolski) —
 * emulsji. „Czekolada" (Kunów) — krystalizacji tłuszczu kakaowego.
 * „Lody i sorbety" — mrożenia. Tutaj osią jest SAM CUKIER
 * i tempo, w jakim przechodzi od dobrego do spalonego — plus
 * ostrzeżenie, którego nigdzie indziej w serwisie nie ma.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że w Koprzywnicy jest opactwo cystersów. NIE MA.
 *   Opactwo założono w 1185 r., ale zostało SKASOWANE w latach
 *   1818–1819 i dziś budynki należą do zwykłej parafii. To jest
 *   dokładnie ten typ faktu, który w przewodnikach żyje w czasie
 *   teraźniejszym dwieście lat po fakcie,
 * — NIE PODAJĘ NAZWY FABRYKI SOKÓW. Jest ustalona i pewna, ale
 *   nie reklamuję cudzych działalności. Piszę opisowo,
 * — NIE PODAJĘ liczby zatrudnionych w fabryce — nie ustalono,
 * — NIE ROZSTRZYGAM daty lokacji. Źródła podają 8 grudnia 1268 r.,
 *   jedno podaje 1267 — podaję rok z zastrzeżeniem stulecia
 *   w tekście,
 * — NIE OPISUJĘ ZWYCZAJU „BZIUKANIA" (dmuchanie ogniem przez
 *   strażaków w Wielką Sobotę). Sprawdzony i prawdziwy, ale to
 *   zwyczaj z otwartym ogniem, a ja na tej samej stronie ostrzegam
 *   przed gorącym cukrem — zestawienie byłoby niezręczne. Odnotowuję
 *   go tutaj i nie używam,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla Koprzywnicy nic nie potwierdzono,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — lokacja w 1268 r. przez Bolesława Wstydliwego,
 * — opactwo cystersów założone w 1185 r. przez Kazimierza
 *   Sprawiedliwego i skasowane w latach 1818–1819; budynki należą
 *   dziś do parafii,
 * — prawa miejskie utracone w 1869 r., odzyskane 1 stycznia 2001 r.,
 * — w mieście działa duża fabryka soków przetwarzająca jabłka,
 * — 2 357 mieszkańców (31.12.2024).
 */
export const KOPRZYWNICA: CityContent = {
  slug: "koprzywnica",
  h1: "Thermomix Koprzywnica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Koprzywnica — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Koprzywnicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Koprzywnica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Koprzywnicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Koprzywnicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Koprzywnica i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-7.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Od „jeszcze nic” do „spalone” — kilkanaście sekund.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Koprzywnicy – jak wygląda prezentacja?",
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
      id: "cukier",
      heading: "Miasto fabryki soków — czyli o cukrze i o tym, jak szybko się pali",
      paragraphs: [
        "Koprzywnica została lokowana w 1268 roku przez Bolesława Wstydliwego, a jeszcze wcześniej, bo w 1185, Kazimierz Sprawiedliwy założył tu opactwo cystersów. Warto od razu powiedzieć rzecz, którą przewodniki gubią: tego opactwa nie ma. Zostało skasowane w latach 1818–1819, a budynki należą dziś do zwykłej parafii. Prawa miejskie miasto straciło w 1869 roku i odzyskało dopiero pierwszego stycznia 2001. Dziś pracuje tu duża fabryka soków, przerabiająca jabłka.",
        "Napiszę o składniku, który w tej okolicy jest surowcem przemysłowym, a w kuchni sprawia najwięcej kłopotu ze wszystkich: o cukrze.",
        "Cukier ma jedną wyjątkowo nieprzyjemną cechę: nie ostrzega. Jest jeszcze za jasny, jeszcze za jasny, jeszcze — i nagle jest spalony, gorzki, a garnek nadaje się do namoczenia na noc. Między tymi dwoma stanami mija kilkanaście sekund i wystarczy w tym czasie odwrócić się do zlewu.",
        "To jest właśnie rodzina zadań, w której urządzenie robi robotę, której człowiek fizycznie nie wykona równie dobrze — bo wymaga jednoczesnego trzymania temperatury i mieszania bez przerwy. Konfitury, kajmak, masy do przełożenia, słodkie sosy do deserów, owoce smażone z cukrem. Wszystko to przestaje wymagać stania nad garnkiem i przestaje się przypalać, bo nie ma momentu, w którym masa leży nieruszana na gorącym dnie.",
        "A teraz rzecz, której na stronach sprzedażowych się nie pisze, a ja napiszę, bo to jedyne miejsce w tym serwisie, gdzie ma to sens: gorący cukier jest niebezpieczny. Nie „gorący jak zupa” — dużo gorętszy, lepki i trzymający się skóry. Poparzenie roztopionym cukrem jest poważne. Jeśli w kuchni są dzieci, to jest ta jedna rzecz, przy której naprawdę nie powinno ich być w zasięgu ręki — i nie ma tu żadnego znaczenia, czy robicie to w garnku, czy w urządzeniu.",
        "Czego nie zrobię i o czym nie będę doradzać: karmelu na twardo, lizaków, karmelowych nitek, orzechów w karmelu. To jest praca w temperaturach, przy których się poważnie parzy, i nie jest to temat dla przedstawicielki handlowej. Nie podam też żadnych stopni ani czasów — w tej akurat dziedzinie to jest kwestia bezpieczeństwa, nie stylu.",
        "I nie doradzę nic o przetworach: pasteryzacji, słoikach, trwałości. To jest dziedzina bezpieczeństwa żywności, powtarzam to na każdej stronie, na której temat się pojawia, i tu też powtarzam.",
        "Skala, uczciwie: sam cukier nie jest powodem do kupienia tego urządzenia. Jest powodem, żeby przestać bać się konfitur i kajmaku, jeśli już je robicie albo chcieliście, a zniechęcił Was jeden przypalony garnek.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Koprzywnicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli kiedyś przypaliliście masę i od tego czasu jej nie robicie — powiedzcie mi to. To jest dobra rzecz do zrobienia na prezentacji, bo różnicę widać w jednym podejściu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Koprzywnicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla koprzywnickiej rodziny",
      paragraphs: [
        "Koprzywnica liczy nieco ponad dwa tysiące trzysta mieszkańców. Lokowana w trzynastym wieku, prawa miejskie straciła w 1869 roku i odzyskała dopiero z początkiem 2001 — czyli przez sto trzydzieści dwa lata była wsią. Opactwo cystersów, które dało początek miejscowości, zostało skasowane dwieście lat temu; dziś jego budynki należą do parafii.",
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

  districtsHeading: "Do których części Koprzywnicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Koprzywnicę też przyjadę",
  nearbyParagraphs: [
    "Sandomierz, Połaniec, Staszów, Klimontów, Osiek i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Sandomierz", "Połaniec", "Staszów", "Klimontów", "Osiek", "Opatów"],

  about: blokOMnie("do Koprzywnicy", "w Koprzywnicy i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Koprzywnicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Koprzywnicy"),
    {
      question: "Ciągle przypalam konfitury i kajmak. Czy to urządzenie pomoże?",
      answer:
        "Tak i to jest jedna z tych rzeczy, przy których pomaga najbardziej. Cukier nie ostrzega — od „jeszcze za jasny” do „spalony” mija kilkanaście sekund, a wystarczy w tym czasie odwrócić się do zlewu. Urządzenie trzyma temperaturę i miesza bez przerwy, więc nie ma momentu, w którym masa leży nieruszana na gorącym dnie. Konkretnych temperatur ani czasów nie podam — przy cukrze to jest kwestia bezpieczeństwa, nie stylu.",
    },
    {
      question: "Zrobię w tym karmel na twardo albo lizaki?",
      answer:
        "Nie będę o tym doradzać i powiem wprost dlaczego: to jest praca w temperaturach, przy których poparzenie roztopionym cukrem jest poważne. Gorący cukier jest lepki i trzyma się skóry — jeśli w kuchni są dzieci, to jest ta jedna rzecz, przy której naprawdę nie powinno ich być w zasięgu ręki, niezależnie od tego, czy używacie garnka, czy urządzenia.",
    },
  ],

  geo: { lat: 50.6086, lng: 21.5828 },
};
