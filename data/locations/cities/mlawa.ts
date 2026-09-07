import type { CityContent } from "../city-content";
import {
  REGION_MAZOWSZE,
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
 * MŁAWA — miasto na północnym Mazowszu, w którym duży zakład montuje
 * sprzęt elektroniczny. Miejsce, gdzie o urządzeniach mówi się jak o pracy,
 * a nie jak o magii.
 *
 * KĄT: co robić, gdy się zepsuje. Miasto montujące elektronikę jest jedynym
 * właściwym miejscem na pytanie, którego nikt nie zadaje przed zakupem,
 * a które jest najważniejsze po nim: AWARIA, GWARANCJA I SERWIS.
 *
 * ŻELAZNE OGRANICZENIE: nie podaję długości gwarancji, terminów naprawy,
 * cen części ani nazw punktów serwisowych. Te rzeczy zmieniają się
 * i wpisane na stałe stałyby się nieprawdą; mogą też różnić się między
 * partiami sprzętu. Piszę wyłącznie o TRYBIE POSTĘPOWANIA — co robi
 * klientka, co robię ja — i odsyłam do sprawdzenia warunków w dokumentach
 * przy zakupie.
 *
 * ROZGRANICZENIE. Ozimek ma „co się zużywa" (części eksploatacyjne, zwykłe
 * zużycie). Wiślica — „obsługa po zakupie w najmniejszym mieście"
 * (dostępność). Tutaj chodzi o konkretną sytuację: urządzenie przestało
 * działać, co teraz.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Mławie działa duży zakład produkujący sprzęt elektroniczny.
 *
 * CZEGO NIE MA: nazw firm, danych o zatrudnieniu, warunków gwarancji.
 */
export const MLAWA: CityContent = {
  slug: "mlawa",
  h1: "Thermomix Mława – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Mława — prezentacja i cena",
  seoDescription:
    "Thermomix w Mławie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Mława — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Mławie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Mławy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Mława i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Mławie – jak wygląda prezentacja?",
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
      id: "gdy-sie-zepsuje",
      heading: "Miasto, które składa elektronikę — więc: a jak się zepsuje?",
      paragraphs: [
        "W Mławie duży zakład montuje sprzęt elektroniczny i sporo osób wie zawodowo, że każde urządzenie kiedyś się psuje. To dobre miejsce na pytanie, którego prawie nikt nie zadaje przed zakupem, a które po zakupie okazuje się najważniejsze: co się dzieje, kiedy przestanie działać.",
        "Zacznę od zastrzeżenia, którego się trzymam: nie podam tu długości gwarancji, terminów naprawy ani cen części. Te warunki bywają różne i się zmieniają, więc wpisane na stałe na stronie stałyby się nieprawdą. Znajdziecie je w dokumentach, które dostaniecie przy zakupie, i namawiam, żeby je wtedy przeczytać przy mnie — chętnie przejdę je z Wami punkt po punkcie, zamiast machnąć ręką.",
        "Napiszę natomiast o trybie postępowania, bo ten się nie zmienia.",
        "Krok pierwszy jest zawsze taki sam: dzwonicie do mnie, a nie szukacie w internecie. Nie dlatego, że muszę być pośrednikiem, tylko dlatego, że w połowie zgłoszeń to nie jest awaria. Najczęstsze przypadki, jakie do mnie wracają, to niedomknięta pokrywa, źle założona uszczelka, przeciążenie przy zbyt gęstym cieście albo woda w miejscu, w którym jej być nie powinno. To wszystko da się rozwiązać przez telefon w pięć minut i nikt nigdzie nie jedzie.",
        "Krok drugi, jeśli to jednak awaria: zgłoszenie idzie do serwisu producenta, a nie do przypadkowego punktu naprawczego. Otwieranie tego samodzielnie albo oddawanie do kogoś z ogłoszenia jest najprostszą drogą do utraty gwarancji, więc odradzam stanowczo.",
        "I krok trzeci, który jest właściwie obietnicą: to ja pilnuję sprawy do końca. Nie zostawiam klientki z numerem infolinii. Jeśli sprzęt jedzie do serwisu, wiem, kiedy pojechał i kiedy wraca, i sama dzwonię, gdy się przeciąga. Uważam, że to jest jedyny sensowny powód, żeby kupować u konkretnej osoby, a nie w sklepie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Mławie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Mławie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla mławskiej rodziny",
      paragraphs: [
        "Gdy w domu pracuje się na zmiany, obiad rzadko powstaje o jednej porze, a przygotowuje go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może pracować, gdy zajmujesz się czymś innym, a wszystko dzieje się w jednym naczyniu.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Mławy i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Osiedle Książąt Mazowieckich",
    "Wólka",
    "Piekiełko",
    "Kościuszki",
    "Podmiejska",
    "Uniszki",
    "Krajewo",
    "Kozły",
    "Dębsk",
  ],

  nearbyHeading: "Poza Mławę też przyjadę",
  nearbyParagraphs: [
    "Ciechanów, Żuromin, Przasnysz i Działdowo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Ciechanów", "Żuromin", "Przasnysz", "Działdowo", "Lidzbark"],

  about: blokOMnie("do Mławy", "w Mławie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Mławy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Mławie"),
    {
      question: "Co robić, jeśli urządzenie przestanie działać?",
      answer:
        "Zadzwonić do mnie, zanim zaczniesz szukać w internecie. W połowie zgłoszeń to nie jest awaria, tylko niedomknięta pokrywa, źle założona uszczelka albo przeciążenie przy zbyt gęstym cieście — takie rzeczy rozwiązujemy przez telefon w pięć minut. Jeśli to jednak awaria, zgłoszenie idzie do serwisu producenta i pilnuję sprawy do końca.",
    },
    {
      question: "Czy mogę oddać sprzęt do naprawy komuś z ogłoszenia?",
      answer:
        "Odradzam stanowczo — to najprostsza droga do utraty gwarancji, podobnie jak otwieranie urządzenia samodzielnie. Warunki gwarancji znajdziesz w dokumentach przy zakupie; chętnie przejdę je z Tobą punkt po punkcie na miejscu, zamiast machnąć ręką.",
    },
  ],

  geo: { lat: 53.1136, lng: 20.3806 },
};
