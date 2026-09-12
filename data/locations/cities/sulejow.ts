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
 * SULEJÓW — gmina miejsko-wiejska w powiecie piotrkowskim.
 * MIASTO 5 896 mieszkańców, GMINA 16 546 (31.12.2024, GUS).
 * Brief mówił 6 300 — zawyżone.
 *
 * JEDNOSTKI POMOCNICZE — jeden z nielicznych potwierdzonych
 * wykazów: 25 SOŁECTW i 4 OSIEDLA o nazwach „Nr 1", „Nr 2",
 * „Nr 3", „Nr 4" (kadencja 2024–2029). Wpisuję je w districts.
 *
 * PRAWA MIEJSKIE nadane MIĘDZY 1279 A 1296 r., potwierdzone
 * w 1308 r. przez WŁADYSŁAWA ŁOKIETKA; odebrane 1870 (represja
 * po powstaniu styczniowym, miasto włączono wtedy do gminy
 * Łęczno); odzyskane 14 LUTEGO 1927 r. NADAWCY IMIENNIE
 * NIE PODAJĘ.
 *
 * FAKT OSIOWY: OPACTWO CYSTERSÓW ufundowane w 1176 r. przez
 * księcia KAZIMIERZA SPRAWIEDLIWEGO. Zespół jest POMNIKIEM
 * HISTORII na mocy rozporządzenia Prezydenta RP z 22
 * PAŹDZIERNIKA 2012 r. Zachowane wieże: Opacka, Muzyczna,
 * Attykowa i Mauretańska oraz trójnawowa bazylika. Klasztor
 * skasowano w 1819 r., CYSTERSI WRÓCILI W 1986 r. To CZYNNY
 * KLASZTOR z parafią, nie muzeum.
 * OBALONE: PODKLASZTORZE NIE JEST osobną wsią — to jedna
 * z dziewięciu części miasta Sulejowa.
 * OBALONE: Zalew Sulejowski leży na granicy gmin Sulejów
 * i Tomaszów Mazowiecki, a ZAPORA JEST W SMARDZEWICACH,
 * czyli poza gminą Sulejów. Zbiornik oddano w 1973 r.
 *
 * KĄT: WSZYSTKO PRZYGOTOWANE PRZED STARTEM — porządek pracy
 * w kuchni. Kąt bierze się z reguły zakonnej i z tego, że
 * cystersi byli zakonem porządku i planu.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy tym urządzeniu przygotowanie składników PRZED
 *   startem znaczy więcej niż przy garnku, a nie mniej,
 * — dlaczego: bo wszystko dzieje się w jednym naczyniu i po
 *   kolei, więc brakujący składnik zatrzymuje cały przebieg,
 * — że najczęstsza frustracja pierwszych tygodni bierze się
 *   właśnie stąd: człowiek szuka czegoś w szafce, a urządzenie
 *   tymczasem pracuje,
 * — co robić: przeczytać przepis DO KOŃCA przed włączeniem,
 *   wystawić wszystko na blat, ustawić w kolejności dodawania,
 * — że to nie jest pedanteria, tylko warunek tego, żeby sprzęt
 *   faktycznie oszczędzał czas,
 * — że przy gotowaniu w garnku można improwizować w trakcie,
 *   a tutaj dużo trudniej — i to jest realna wada,
 * — i ODMOWA: żadnych czasów ani „ile trwa przygotowanie".
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU przygotowanych wcześniej
 *   składników. To bezpieczeństwo żywności. ODMOWA W TEKŚCIE.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEJ PSYCHOLOGII ANI MORALIZOWANIA o „organizacji życia".
 *   Piszę o kolejności czynności przy jednym daniu.
 * — ŻADNYCH GODZIN MSZY ani zapraszania do klasztoru.
 * — NIE DOTYKAM bombardowania Sulejowa 4 września 1939 r.
 *   ani degradacji miasta w 1870 r. jako scenografii.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — TU JEST NAJWAŻNIEJSZE.
 * „Najpierw zakupy, potem przepis — odwrócona kolejność"
 * (inne miasto) dotyczy DECYZJI, CO UGOTOWAĆ, i momentu
 * zakupów. „Zaprojektowane naraz kontra dokładane po kolei"
 * (Zamość) dotyczy urządzania kuchni jako pomieszczenia.
 * „Planowanie tygodnia" dotyczy harmonogramu dni. Tutaj chodzi
 * o KWADRANS PRZED WŁĄCZENIEM URZĄDZENIA: o wystawienie
 * składników na blat w kolejności dodawania.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ imiennie, kto nadał prawa miejskie.
 * — NIE PISZĘ, że Podklasztorze to osobna wieś.
 * — NIE PISZĘ, że zapora zalewu jest w gminie Sulejów.
 * — NIE PISZĘ, że opactwo jest muzeum — to czynny klasztor.
 * — NIE PODAJĘ nazwy pracodawcy — nie ustalono żadnego.
 * — NIE PODAJĘ informacji o kąpielisku na zalewie — statusu
 *   na 2026 r. nie potwierdzono.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla gminy Sulejów nie znalazłam żadnego.
 * — NIE MYLĘ Sulejowa z SULEJÓWKIEM pod Warszawą. FAQ
 *   to rozróżnia — to najgroźniejszy homonim tej strony.
 * — districts: wpisuję POTWIERDZONE cztery osiedla.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 5 896, gmina 16 546 mieszkańców (31.12.2024, GUS);
 *   25 sołectw i 4 osiedla,
 * — prawa miejskie nadane między 1279 a 1296 r., potwierdzone
 *   w 1308 r. przez Władysława Łokietka; odebrane w 1870,
 *   odzyskane 14 lutego 1927 r.,
 * — opactwo cystersów ufundowane w 1176 r. przez Kazimierza
 *   Sprawiedliwego; zespół jest Pomnikiem Historii od
 *   22 października 2012 r.; zachowane wieże Opacka, Muzyczna,
 *   Attykowa i Mauretańska oraz trójnawowa bazylika,
 * — klasztor skasowano w 1819 r., cystersi wrócili w 1986 r.;
 *   to czynny klasztor z parafią,
 * — Podklasztorze jest częścią miasta Sulejowa,
 * — Zbiornik Sulejowski na Pilicy oddano w 1973 r.; zapora
 *   leży w Smardzewicach, poza gminą Sulejów,
 * — kopalnie i piece wapienne ruszyły w 1901 r., a kolejka
 *   wąskotorowa z Piotrkowa w 1902 r.
 */
export const SULEJOW: CityContent = {
  slug: "sulejow",
  h1: "Thermomix Sulejów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sulejów (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sulejowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i sołectwa gminy. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sulejów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sulejowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sulejowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Sulejów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Kwadrans przed włączeniem decyduje o całej reszcie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sulejowie – jak wygląda prezentacja?",
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
      id: "porzadek",
      heading: "Opactwo z 1176 roku — czyli o kwadransie przed włączeniem",
      paragraphs: [
        "W Sulejowie stoi opactwo cystersów ufundowane w 1176 roku przez księcia Kazimierza Sprawiedliwego. Od 22 października 2012 roku cały zespół jest Pomnikiem Historii; zachowały się mury z wieżami Opacką, Muzyczną, Attykową i Mauretańską oraz trójnawowa bazylika. Klasztor skasowano w 1819 roku, a cystersi wrócili tu w 1986 — to nie jest muzeum, tylko czynny klasztor z parafią. Cystersi byli zakonem reguły: wszystko miało swój czas, swoją kolejność i swoje miejsce.",
        "I to jest dokładnie ta rzecz, której to urządzenie wymaga bardziej niż garnek — a której nikt nie mówi przed zakupem.",
        "Przy gotowaniu w garnku można improwizować w trakcie. Coś się gotuje, a Wy w tym czasie obieracie następne warzywo, szukacie przyprawy, otwieracie słoik. Garnek czeka. Tutaj nie czeka. Wszystko dzieje się w jednym naczyniu i po kolei, więc kiedy przychodzi moment dodania śmietany, a śmietana leży zamknięta w lodówce za trzema rzeczami, cały przebieg staje.",
        "Największa frustracja pierwszych tygodni bierze się właśnie stąd. Nie z tego, że coś nie wyszło, tylko z tego, że człowiek biega po kuchni, a urządzenie tymczasem pracuje. Po dwóch takich obiadach łatwo uznać, że „to wcale nie jest szybsze”.",
        "Lekarstwo jest banalne i naprawdę działa. Trzy rzeczy, kwadrans przed włączeniem.",
        "Przeczytać przepis do końca, nie do połowy. Brzmi jak rada dla dzieci, a jest to najczęściej pomijany krok — bo w połowie przepisu okazuje się, że coś miało być namoczone albo starte wcześniej.",
        "Wystawić wszystko na blat. Wszystko: łącznie z solą, z olejem i z tym jednym jajkiem. Puste opakowanie jest lepszą informacją niż pełna lodówka, do której trzeba zajrzeć.",
        "Ustawić w kolejności dodawania. To jest ta jedna rzecz, która najbardziej zmienia gotowanie w tym urządzeniu: nie musicie wtedy myśleć, tylko sięgać po następną rzecz z lewej strony.",
        "To nie jest pedanteria. To jest warunek tego, żeby sprzęt faktycznie oszczędzał czas, a nie tylko przenosił bałagan z garnka na blat. I powiem uczciwie: to jest też realna wada tego urządzenia w porównaniu z garnkiem — improwizuje się przy nim trudniej.",
        "Czego nie doradzę: niczego o tym, jak długo przygotowane wcześniej składniki mogą stać na blacie ani co wolno przygotować dzień wcześniej. To jest bezpieczeństwo żywności, nie organizacja pracy, i nie mam do tego kompetencji.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sulejowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu zrobimy to porządnie: najpierw wszystko na blat w kolejności, dopiero potem włączenie. Chcę, żebyście zobaczyli, jak wygląda gotowanie, przy którym nikt nigdzie nie biega.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sulejowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sulejowskiej rodziny",
      paragraphs: [
        "Samo miasto Sulejów liczy blisko sześć tysięcy mieszkańców, a cała gmina ponad szesnaście i pół tysiąca — dzieli się na dwadzieścia pięć sołectw i cztery osiedla. Prawa miejskie miasto otrzymało pod koniec trzynastego wieku, a Władysław Łokietek potwierdził je w 1308 roku; w 1870 zostały odebrane i wróciły dopiero 14 lutego 1927. Najważniejszym zabytkiem jest opactwo cystersów, ufundowane w 1176 roku przez Kazimierza Sprawiedliwego, od 2012 roku Pomnik Historii — z zachowanymi wieżami i trójnawową bazyliką; cystersi wrócili tu w 1986 roku i klasztor jest czynny. Podklasztorze, wbrew częstemu przekonaniu, nie jest osobną wsią, tylko częścią miasta. Nieopodal leży Zbiornik Sulejowski na Pilicy, oddany w 1973 roku, choć sama zapora stoi już w sąsiedniej gminie.",
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

  districtsHeading: "Do których części gminy Sulejów dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — z Podklasztorzem, które jest jego częścią — do wszystkich czterech osiedli i do dwudziestu pięciu sołectw gminy, w tym Przygłowa, Włodzimierzowa, Uszczyna, Witowa, Barkowic i Kłudzic. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę.",
  ],
  districts: ["Osiedle Nr 1", "Osiedle Nr 2", "Osiedle Nr 3", "Osiedle Nr 4"],

  nearbyHeading: "Poza Sulejów też przyjadę",
  nearbyParagraphs: [
    "Piotrków Trybunalski, Tomaszów Mazowiecki, Opoczno, Wolbórz, Przedbórz i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Piotrków Trybunalski", "Tomaszów Mazowiecki", "Opoczno", "Wolbórz", "Przedbórz"],

  about: blokOMnie("do Sulejowa", "w Sulejowie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sulejowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta z Podklasztorzem, do czterech osiedli i do dwudziestu pięciu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo to najczęstsza pomyłka: chodzi o Sulejów w powiecie piotrkowskim, a nie o Sulejówek pod Warszawą.",
    },
    ...faqWspolne("w Sulejowie"),
    {
      question: "Dlaczego pierwsze tygodnie z tym urządzeniem bywają frustrujące?",
      answer:
        "Bo w garnku można improwizować w trakcie, a tutaj dużo trudniej. Wszystko dzieje się w jednym naczyniu i po kolei, więc kiedy przychodzi moment dodania śmietany, a śmietana leży w lodówce za trzema rzeczami, cały przebieg staje. To nie jest wina sprzętu ani Wasza — to kwestia przygotowania.",
    },
    {
      question: "Co konkretnie zrobić przed włączeniem?",
      answer:
        "Trzy rzeczy, kwadrans wcześniej. Przeczytać przepis do końca, nie do połowy — bo w połowie okazuje się, że coś miało być namoczone. Wystawić wszystko na blat, łącznie z solą i olejem. I ustawić w kolejności dodawania: wtedy nie trzeba myśleć, tylko sięgać po następną rzecz.",
    },
    {
      question: "Czy mogę przygotować składniki dzień wcześniej?",
      answer:
        "Tego nie doradzę — jak długo przygotowane składniki mogą stać i co wolno zrobić z wyprzedzeniem, to bezpieczeństwo żywności, a nie organizacja pracy. Nie mam do tego kompetencji.",
    },
  ],

  geo: { lat: 51.354, lng: 19.885 },
};
