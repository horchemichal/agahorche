import type { CityContent } from "../city-content";
import {
  REGION_WIELKOPOLSKIE,
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
 * PIŁA — największe miasto północnej Wielkopolski, miejsce urodzenia
 * Stanisława Staszica: człowieka, którego cały pomysł na Polskę sprowadzał
 * się do tego, żeby nauczyć ludzi rzeczy, które umieją nieliczni.
 *
 * KĄT: kto w domu umie to obsłużyć. Miasto Staszica jest jedynym właściwym
 * miejscem na problem, którego nie ma w żadnym folderze: URZĄDZENIE, KTÓREGO
 * UMIE UŻYWAĆ TYLKO JEDNA OSOBA, NIE ODCIĄŻA TEJ OSOBY — TYLKO DOKŁADA JEJ
 * OBOWIĄZKÓW. Jeśli obiad nadal może zrobić wyłącznie mama, to nie kupiliście
 * pomocy, tylko kolejny sprzęt do jej obsługi.
 *
 * KONKRET, KTÓRY MUSI PAŚĆ: na prezentacji ma być obecna więcej niż jedna
 * osoba, a gotować mają inni, nie ja. To jest realna zmiana w sposobie
 * prowadzenia spotkania, a nie hasło.
 *
 * ROZGRANICZENIE. Nisko dostało kąt „cichsza połowa pary". Tutaj chodzi
 * o coś innego: nie o to, kto się nie odzywa, tylko o to, kto potrafi
 * nacisnąć przyciski.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Stanisław Staszic urodził się w Pile,
 * — zajmował się oświatą i kształceniem,
 * — Piła jest największym miastem północnej Wielkopolski.
 */
export const PILA: CityContent = {
  slug: "pila",
  h1: "Thermomix Piła – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Piła — prezentacja i cena",
  seoDescription:
    "Thermomix w Pile: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Piła — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Pile. Na spotkaniu gotuje cały dom, nie ja.",

  lead:
    "Przyjeżdżam do Piły z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Piła i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Pile – jak wygląda prezentacja?",
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
      id: "kto-umie-obslugiwac",
      heading: "Miasto Staszica — i pytanie, kto w domu umie to obsłużyć",
      paragraphs: [
        "W Pile urodził się Stanisław Staszic, człowiek, którego cały pomysł na kraj sprowadzał się do tego, żeby nauczyć zwykłych ludzi rzeczy, które dotąd umieli nieliczni. Wykorzystuję to jako pretekst do pytania, którego nie zadaje się na pokazach, a które decyduje o tym, czy ten zakup ma sens.",
        "Pytanie brzmi: kto w Waszym domu będzie umiał tego używać?",
        "Jeżeli odpowiedź brzmi „no, mama” — to zastanówmy się, po co ten zakup. Urządzenie, którego obsługę zna jedna osoba, nie zdejmuje z niej obowiązków. Ono jej dokłada jeszcze jeden sprzęt do ogarnięcia. Obiad nadal może zrobić tylko ona, tyle że teraz robi go w czymś droższym.",
        "A przecież to jest sprzęt, który akurat świetnie się nadaje do przekazania dalej. Przepis prowadzi krok po kroku, wagę ma wbudowaną, temperatury nie trzeba oceniać na oko i nic się nie przypala. To znaczy, że osoba, która nigdy nie ugotowała obiadu, jest w stanie zrobić w nim zupę bez niczyjej pomocy — a to jest zupełnie inna sytuacja niż postawienie jej przy garnku.",
        "Dlatego u Was poproszę o coś, o co zwykle nikt nie prosi: żeby na spotkaniu było więcej osób niż jedna. Mąż, nastolatek, ktokolwiek, kto normalnie do kuchni nie wchodzi. I nie będę gotować sama, tylko dam im urządzenie do ręki — bo dopiero wtedy widać, czy to naprawdę jest proste, czy tylko wygląda na proste, gdy robi to ktoś wprawiony.",
        "Jeśli po takim spotkaniu okaże się, że nikt poza jedną osobą nie zamierza tego dotknąć, to też jest odpowiedź. Wtedy warto policzyć zakup po prostu jako sprzęt dla niej — i nie opowiadać sobie, że to prezent dla całego domu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Pile?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Zaproponuj porę, o której w domu jest więcej niż jedna osoba. To ma tu znaczenie większe niż zwykle.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Pile"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla pilskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — i to właśnie chcemy zmienić.",
        "Thermomix pomaga tym, że prowadzi przez przepis krok po kroku i nie wymaga oceniania temperatury ani pilnowania. Dzięki temu obiad może zrobić ktoś, kto normalnie nie gotuje.",
        "Przy małym dziecku dochodzi Varoma: porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-poczatkujacych", label: "Thermomix dla początkujących" },
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

  districtsHeading: "Do których części Piły i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Zamość",
    "Podlasie",
    "Górne",
    "Jadwiżyn",
    "Motylewo",
    "Koszyce",
    "Gładyszewo",
    "Staszyce",
    "Kalina",
  ],

  nearbyHeading: "Poza Piłę też przyjadę",
  nearbyParagraphs: [
    "Trzcianka, Chodzież, Złotów, Wyrzysk i Ujście są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Trzcianka", "Chodzież", "Złotów", "Wyrzysk", "Ujście", "Czarnków"],

  about: blokOMnie("do Piły", "w Pile i północnej Wielkopolsce", REGION_WIELKOPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Piły bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Pile"),
    {
      question: "Czy mój mąż albo nastolatek dadzą sobie z tym radę?",
      answer:
        "Dadzą i właśnie o to chodzi — przepis prowadzi krok po kroku, waga jest wbudowana, temperatury nie ocenia się na oko i nic się nie przypala. Dlatego proszę, żeby na spotkaniu było więcej osób niż jedna i żeby to oni gotowali, a nie ja. Dopiero wtedy widać, czy jest prosto naprawdę.",
    },
    {
      question: "A jeśli i tak używać będzie tylko jedna osoba?",
      answer:
        "To też jest odpowiedź i warto ją sobie powiedzieć wprost: wtedy jest to sprzęt dla niej, a nie prezent dla całego domu. Urządzenie, które umie obsłużyć jedna osoba, nie zdejmuje z niej obowiązków, tylko dokłada kolejny sprzęt do ogarnięcia.",
    },
  ],

  geo: { lat: 53.1514, lng: 16.7381 },
};
