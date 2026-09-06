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
 * LUBLIN — największe miasto wschodniej Polski i stolica Lubelszczyzny.
 * Zachowane Stare Miasto z Bramą Krakowską, zamek z kaplicą Trójcy Świętej
 * i jej ruskimi freskami, a przede wszystkim kilka uczelni, które co roku
 * ściągają tu dziesiątki tysięcy studentów.
 *
 * KĄT: kuchnia, która nie jest Twoja. W mieście akademickim tej wielkości
 * ogromna liczba kuchni to kuchnie WYNAJMOWANE — czyjeś szafki, czyjeś
 * garnki, czyjaś płyta, i perspektywa przeprowadzki za rok. To jest jedyne
 * miejsce w serwisie, gdzie wypada zadać pytanie, którego nie zadaje żadna
 * strona przedstawiciela: CZY W OGÓLE WARTO KUPOWAĆ DROGI SPRZĘT DO
 * MIESZKANIA, KTÓRE NIE JEST WŁASNE. Odpowiedź jest uczciwa i konkretna:
 * urządzenie się przeprowadza, konto z przepisami idzie za człowiekiem,
 * a jedyne, czego naprawdę potrzebuje, to gniazdko i kawałek blatu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Lublin jest największym miastem po wschodniej stronie Wisły i stolicą
 *   województwa lubelskiego,
 * — działa tu kilka uczelni wyższych, a studenci są istotną częścią miasta,
 * — zachowało się Stare Miasto z Bramą Krakowską oraz zamek z kaplicą
 *   Trójcy Świętej ozdobioną freskami,
 * — dzielnice: Śródmieście, Stare Miasto, Czechów, Kalinowszczyzna,
 *   Bronowice, Tatary, Felin, Ponikwoda, Sławin, Sławinek, Węglin,
 *   Konstantynów, Rury, Wieniawa, Kośminek, Dziesiąta, Wrotków,
 *   Zemborzyce, Głusk, Abramowice.
 *
 * CZEGO NIE MA: liczby studentów, nazw uczelni, danych o rynku najmu,
 * czasów przejazdu.
 */
export const LUBLIN: CityContent = {
  slug: "lublin",
  h1: "Thermomix Lublin – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Lublin — prezentacja i cena",
  seoDescription:
    "Thermomix w Lublinie: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%, terminy pod Wasz grafik. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Lublin — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Lublinie. Prezentacja i dojazd bezpłatne, we wszystkich dzielnicach.",

  lead:
    "Przyjeżdżam do Lublina z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich dzielnic, od Czechowa i Sławina po Felin, Wrotków i Głusk.",

  highlights: highlightyStandardowe("Lublin i okoliczne gminy"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Lublinie – jak wygląda prezentacja?",
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
      id: "kuchnia-ktora-nie-jest-twoja",
      heading: "Miasto wynajętych kuchni",
      paragraphs: [
        "Lublin jest miastem akademickim na taką skalę, że widać to w kalendarzu całego roku: we wrześniu miasto puchnie, w lipcu robi się w nim cicho. Ale najciekawsza konsekwencja jest domowa i mało kto o niej pisze — w mieście z tyloma uczelniami ogromna liczba kuchni to kuchnie WYNAJĘTE. Czyjeś szafki, czyjaś płyta, czyjeś garnki i perspektywa przeprowadzki za rok albo dwa.",
        "To zmienia pytanie, które ludzie sobie zadają. Nie brzmi ono „czy to dobre urządzenie”, tylko „czy warto kupować cokolwiek drogiego do mieszkania, które nie jest moje”. To jest dobre pytanie i zasługuje na konkretną odpowiedź, a nie na zbycie.",
        "Odpowiedź brzmi tak. Urządzenie nie jest częścią zabudowy — nie trzeba go montować, podłączać do wody ani wiercić w cudzej ścianie. Stoi na blacie i wymaga tylko gniazdka. Przy przeprowadzce jedzie z Wami w kartonie, tak jak czajnik. Konto z przepisami jest przypisane do człowieka, a nie do mieszkania, więc też się przenosi. A gwarancja obowiązuje niezależnie od tego, pod jakim adresem akurat mieszkacie.",
        "Powiem też, co w wynajętej kuchni bywa realnym problemem, żeby nie było niespodzianek. Blat: urządzenie musi mieć swoje miejsce, a w małej kawalerce to bywa jedyny wolny kawałek. I gniazdko: potrzebuje własnego, a nie trzeciego wolnego otworu w rozgałęziaczu za lodówką. Na prezentacji od razu to sprawdzimy u Was — to zajmuje minutę i lepiej wiedzieć wcześniej.",
        "Jeśli mieszkacie w kilka osób i myślicie o wspólnym zakupie, powiedzcie o tym przy umawianiu. Wtedy warto, żeby na spotkaniu byli wszyscy, bo pytania o to, kto płaci i co się dzieje przy wyprowadzce, lepiej zadać przy mnie niż po.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Lublinie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia — oddzwaniam także wieczorem.",
        "Podaj dzielnicę i piętro. Lublin jest rozłożony, a przy starszej zabudowie brak windy zmienia tylko to, ile rzeczy wnoszę za jednym razem — nigdy koszt spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Lublinie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla lubelskiej rodziny",
      paragraphs: [
        "Wąskie gardło jest tu takie jak w każdym dużym mieście: obiad musi powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których dzielnic Lublina dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — łącznie z Głuskiem, Zemborzycami i Abramowicami.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Czechów",
    "Kalinowszczyzna",
    "Bronowice",
    "Tatary",
    "Felin",
    "Ponikwoda",
    "Sławin",
    "Sławinek",
    "Węglin",
    "Konstantynów",
    "Rury",
    "Wieniawa",
    "Kośminek",
    "Dziesiąta",
    "Wrotków",
    "Zemborzyce",
    "Głusk",
    "Abramowice",
  ],

  nearbyHeading: "Poza Lublin też przyjadę",
  nearbyParagraphs: [
    "Świdnik, Łęczna, Lubartów, Bełżyce, Bychawa, Piaski i Nałęczów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świdnik", "Łęczna", "Lubartów", "Bełżyce", "Bychawa", "Piaski", "Nałęczów"],

  about: blokOMnie("do Lublina", "w Lublinie i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do wszystkich dzielnic Lublina bez dodatkowej opłaty?",
      answer:
        "Tak, do wszystkich — od Śródmieścia po Głusk, Zemborzyce i Abramowice. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Lublinie"),
    {
      question: "Wynajmuję mieszkanie. Czy warto kupować taki sprzęt?",
      answer:
        "Nic nie trzeba montować ani podłączać — urządzenie stoi na blacie i potrzebuje gniazdka, więc przy przeprowadzce jedzie z Tobą jak czajnik. Konto z przepisami też jest Twoje, nie mieszkania. Sprawdź tylko dwie rzeczy, które naprawdę bywają problemem: wolny kawałek blatu i osobne gniazdko.",
    },
    {
      question: "Chcemy kupić na spółkę ze współlokatorami — da się?",
      answer:
        "Umowa jest zawsze na jedną osobę i to ona odpowiada za płatność — tego nie da się rozpisać na kilka nazwisk. Rozliczenie między Wami to Wasza sprawa, ale radzę ustalić przed zakupem, czyje to będzie przy wyprowadzce. Chętnie odpowiem na te pytania przy wszystkich naraz.",
    },
  ],

  geo: { lat: 51.2465, lng: 22.5684 },
};
