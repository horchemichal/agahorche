import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * WŁADYSŁAWOWO — miasto w powiecie puckim, 9 154 mieszkańców
 * (31.12.2024, GUS). W briefie 10 000 — zawyżone.
 *
 * OBALONE, WAŻNE: Władysławowo NIE JEST największym portem
 * rybackim w Polsce. Największy jest HEL. Ta nieprawda krąży
 * po całym internecie i nie wejdzie na naszą stronę.
 *
 * OBALONE, DRUGIE: KUŹNICA NIE NALEŻY do Władysławowa — należy
 * do gminy Jastarnia. Wiele stron myli te granice.
 *
 * PORT: prowadzi go spółka, której WŁAŚCICIELEM W 100% JEST
 * POWIAT PUCKI (5 kutrów, chłodnie o pojemności ok. 1 800 ton).
 * NAZWY SPÓŁKI NIE PODAJĘ — nie reklamuję firm.
 *
 * STRUKTURA GOSPODARKI: 60,9% firm w mieście działa
 * w zakwaterowaniu i gastronomii — najwyższy udział spośród
 * miast tej fali.
 *
 * PIĘĆ OSIEDLI STATUTOWYCH: Cetniewo, Żwirowa, Hallerowo,
 * Śródmieście, Szotland. To jedno z niewielu miast tej fali,
 * gdzie districts NIE JEST pustą tablicą.
 *
 * KĄT: LÓD I CHŁODZENIE — a właściwie fakt, że TO URZĄDZENIE
 * GRZEJE, A NIE CHŁODZI. Kąt bierze się z portu z chłodniami
 * na tysiąc osiemset ton: w mieście, gdzie chłód jest osobnym
 * przemysłem, warto powiedzieć wprost, czego domowy sprzęt
 * kuchenny nie robi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie NIE MA funkcji chłodzenia i nigdy nie będzie
 *   miało — to jest grzałka z mieszadłem,
 * — że lodów „z Thermomixa" nie robi się przez mrożenie w nim,
 *   tylko przez rozbicie czegoś WCZEŚNIEJ zamrożonego,
 * — że to samo dotyczy sorbetów, kruszonego lodu i koktajli
 *   z mrożonymi owocami — praca odbywa się nożem, nie chłodem,
 * — że jest za to rzecz odwrotna, o której nikt nie mówi: gorące
 *   danie trzeba wyjąć i wystudzić OSOBNO, bo naczynie długo
 *   trzyma ciepło,
 * — i że przy studzeniu obowiązuje odmowa: nie doradzam, jak
 *   szybko schładzać jedzenie przed włożeniem do lodówki.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O BEZPIECZEŃSTWIE ŻYWNOŚCI — studzenie,
 *   mrożenie, rozmrażanie, łańcuch chłodniczy. ODMOWA W TEKŚCIE.
 * — ŻADNYCH PORAD O RYBACH mimo portu. Ryby mają własną stronę.
 * — ŻADNYCH NAZW FIRM, w tym spółki portowej.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — NIE PODAJĘ pojemności naczynia w litrach z pamięci.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Gotowanie na zapas
 * i mrożenie" (Stopnica) dotyczy PLANOWANIA i zamrażarki jako
 * magazynu. „Upał w kuchni" (Prószków) dotyczy temperatury
 * w pomieszczeniu. Tutaj chodzi o SAMO URZĄDZENIE i o granicę
 * jego fizyki: grzeje, nie chłodzi.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że to największy port rybacki w Polsce. NIE JEST.
 * — NIE PISZĘ, że Kuźnica należy do Władysławowa. NIE NALEŻY.
 * — NIE PODAJĘ nazwy spółki portowej ani liczby zatrudnionych.
 * — NIE PODAJĘ liczby kutrów jako stanu na dziś — dane mogą się
 *   zmieniać; w tekście mówię ogólnie o niewielkiej flocie.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 9 154 mieszkańców (31.12.2024, GUS),
 * — port rybacki prowadzony przez spółkę w 100% należącą
 *   do powiatu puckiego, z chłodniami o pojemności ok. 1 800 ton,
 * — 60,9% firm w mieście to zakwaterowanie i gastronomia,
 * — pięć osiedli statutowych: Cetniewo, Żwirowa, Hallerowo,
 *   Śródmieście, Szotland.
 */
export const WLADYSLAWOWO: CityContent = {
  slug: "wladyslawowo",
  h1: "Thermomix Władysławowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Władysławowo (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix we Władysławowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Władysławowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni we Władysławowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Władysławowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich osiedli i do miejscowości gminy.",

  highlights: highlightyStandardowe("Władysławowo i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "To jest grzałka z mieszadłem. Chłodzenia w nim nie ma i nie będzie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix we Władysławowie – jak wygląda prezentacja?",
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
      id: "chlodzenie",
      heading: "Miasto z chłodniami na tysiąc osiemset ton — czyli o tym, że to urządzenie nie chłodzi",
      paragraphs: [
        "Port we Władysławowie prowadzi spółka, której właścicielem w stu procentach jest powiat pucki. Ma chłodnie o pojemności około tysiąca ośmiuset ton. To jest miasto, w którym chłód jest osobną gałęzią gospodarki i wszyscy wiedzą, ile kosztuje. Dlatego napiszę tu rzecz, którą sprzedawcy najchętniej przemilczają: Thermomix nie chłodzi. Nigdy nie chłodził i nie będzie.",
        "W środku jest podgrzewane dno i mieszadło. Fizycznie nie ma tam czym odebrać ciepła. Wszystko, co temu urządzeniu przypisuje się w temacie zimna, jest nieporozumieniem albo skrótem myślowym — i chcę te skróty rozwinąć, bo są to najczęstsze pytania, jakie dostaję.",
        "Lody. Owszem, robi się w nim lody. Ale nie przez mrożenie: bierze się coś, co JUŻ jest zamrożone — owoce z zamrażarki, zamrożoną wcześniej masę — i rozbija to nożem na gładko. Praca odbywa się ostrzem, nie chłodem. To samo dotyczy sorbetów i koktajli z mrożonymi owocami. Efekt jest bardzo dobry i naprawdę szybki, ale zamrażarka jest do tego potrzebna tak samo jak wcześniej.",
        "Kruszony lód. Rozbije kostki, tak. Ale znów: kostki muszą przyjść z zamrażarki.",
        "Studzenie. I tu jest rzecz odwrotna, o której nikt nie uprzedza, a która potrafi zaskoczyć. To naczynie długo trzyma ciepło. Jeżeli ugotujesz w nim coś gorącego i zostawisz, żeby ostygło, będzie stygło wolniej, niż się spodziewasz. Rozwiązanie jest proste i nudne: gorące danie przekłada się do innego naczynia, a nie studzi w urządzeniu — inaczej blokujesz sobie sprzęt na godzinę.",
        "Czego natomiast nie zrobię: nie doradzę Ci, jak szybko schłodzić jedzenie przed włożeniem do lodówki, jak długo może stygnąć ani co wolno zamrozić powtórnie. To jest bezpieczeństwo żywności, a nie obsługa sprzętu. W mieście, w którym chłodnie mają własne procedury i kontrole, tym bardziej nie będę udawać, że mam tu kompetencje.",
        "I jeszcze dwa sprostowania, skoro już jesteśmy przy Władysławowie, bo internet powtarza je uparcie. Nie jest to największy port rybacki w Polsce — największy jest Hel. I Kuźnica nie należy do Władysławowa, tylko do gminy Jastarnia. Wolę to napisać, niż powtarzać cudzy błąd.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację we Władysławowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Sześć na dziesięć firm w mieście żyje z gości, więc w lipcu i sierpniu nikomu nie zawracam głowy. Umówmy się poza sezonem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("we Władysławowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla władysławowskiej rodziny",
      paragraphs: [
        "Władysławowo liczy nieco ponad dziewięć tysięcy mieszkańców i jest miastem, w którym niemal sześćdziesiąt jeden procent zarejestrowanych firm to zakwaterowanie i gastronomia — najwyższy taki udział w całej okolicy. Miasto dzieli się na pięć osiedli: Cetniewo, Żwirową, Hallerowo, Śródmieście i Szotland. Port rybacki prowadzi spółka należąca w całości do powiatu puckiego; ma niewielką flotę kutrów i chłodnie o pojemności około tysiąca ośmiuset ton.",
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

  districtsHeading: "Do których osiedli Władysławowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich pięciu osiedli statutowych i do miejscowości gminy — Chłapowa, Karwi, Ostrowa, Tupadeł, Rozewia, Jastrzębiej Góry. Dojazd jest wszędzie bezpłatny.",
    "Dla porządku: Kuźnica nie należy do Władysławowa, tylko do gminy Jastarnia — ale tam też przyjadę.",
  ],
  districts: ["Śródmieście", "Cetniewo", "Hallerowo", "Szotland", "Żwirowa"],

  nearbyHeading: "Poza Władysławowo też przyjadę",
  nearbyParagraphs: [
    "Puck, Jastarnia, Hel, Reda, Rumia, Wejherowo i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Puck", "Jastarnia", "Hel", "Reda", "Rumia", "Wejherowo"],

  about: blokOMnie("do Władysławowa", "we Władysławowie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Władysławowa bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich pięciu osiedli i do miejscowości gminy — Chłapowa, Karwi, Ostrowa, Jastrzębiej Góry i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("we Władysławowie"),
    {
      question: "Czy Thermomix chłodzi albo mrozi?",
      answer:
        "Nie. W środku jest podgrzewane dno i mieszadło — fizycznie nie ma tam czym odebrać ciepła. To grzałka z nożem i tak zostanie.",
    },
    {
      question: "To jak robi się w nim lody?",
      answer:
        "Z czegoś, co już jest zamrożone. Bierze się mrożone owoce albo wcześniej zamrożoną masę i rozbija nożem na gładko. Praca odbywa się ostrzem, nie chłodem — zamrażarka jest do tego potrzebna tak samo jak wcześniej. Tak samo z sorbetami i kruszonym lodem.",
    },
    {
      question: "Jak szybko schłodzić w nim gorące danie?",
      answer:
        "Nie schładzaj w nim — naczynie długo trzyma ciepło i zablokujesz sobie sprzęt. Przełóż do innego naczynia. A o tym, jak długo jedzenie może stygnąć i co wolno zamrozić powtórnie, nie doradzę: to bezpieczeństwo żywności, nie obsługa urządzenia.",
    },
  ],

  geo: { lat: 54.7906, lng: 18.4014 },
};
