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
 * OSTRÓW MAZOWIECKA — siedziba i zakład Fabryk Mebli FORTE,
 * producenta mebli w paczkach. Rzecz przyjeżdża w kartonie płasko
 * i dopiero u kogoś w domu staje się meblem.
 *
 * KĄT: dzień, w którym sprzęt przyjeżdża. Pierwsze godziny —
 * rozpakowanie, ustawienie, pierwsze uruchomienie — o których nikt
 * nie mówi, bo sprzedaż kończy się wcześniej.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — pierwsze danie zróbcie najprostsze, jakie umiecie, i nie w dniu,
 *   w którym macie gości,
 * — ustawcie sprzęt tam, gdzie ma stać na stałe, od razu — przenoszenie
 *   „na próbę" kończy się szafką,
 * — dokumenty i wszystko, co przyszło w pudełku, odłóżcie w jedno
 *   miejsce, zanim karton pójdzie do śmieci,
 * — pierwsze mycie zróbcie od razu po pierwszym daniu, żeby wiedzieć,
 *   ile to naprawdę zajmuje.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH INSTRUKCJI TECHNICZNYCH: co włączyć, co ustawić, jak
 *   uruchomić. To jest w materiałach, które przychodzą z urządzeniem,
 *   i tam należy patrzeć.
 * — ŻADNYCH TERMINÓW DOSTAWY ani obietnic, kiedy sprzęt przyjedzie.
 * — ŻADNYCH PORAD O UTYLIZACJI OPAKOWAŃ ani o tym, co zrobić z kartonem
 *   ze względu na ewentualny zwrot — to sprawa dokumentów, nie moja.
 *
 * ROZGRANICZENIE. Toruń mówi o błędach pierwszego tygodnia przy
 * gotowaniu, Nowy Dwór Mazowiecki o tym, co sprawdzić, gdy danie nie
 * wyszło, Brzeziny o instrukcji, która poszła do szuflady. Tutaj chodzi
 * wyłącznie o PIERWSZE GODZINY po dostawie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — w Ostrowi Mazowieckiej mieści się siedziba i zakład Fabryk Mebli
 *   FORTE, producenta mebli w paczkach,
 * — miasto leży na skrzyżowaniu tras Warszawa–Białystok i korytarza
 *   Via Baltica, przy Puszczy Białej,
 * — prawa miejskie nadał w 1434 r. książę Bolesław IV.
 */
export const OSTROW_MAZOWIECKA: CityContent = {
  slug: "ostrow-mazowiecka",
  h1: "Thermomix Ostrów Mazowiecka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ostrów Mazowiecka — prezentacja",
  seoDescription:
    "Thermomix w Ostrowi Mazowieckiej: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ostrów Mazowiecka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Ostrowi Mazowieckiej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ostrowi Mazowieckiej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Ostrów Mazowiecka i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Danie przygotowane w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Pierwsze danie: najprostsze, jakie umiecie. Nie przy gościach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Ostrowi Mazowieckiej – jak wygląda prezentacja?",
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
      id: "dzien-dostawy",
      heading: "Miasto mebli w paczkach — i dzień, w którym sprzęt przyjeżdża",
      paragraphs: [
        "W Ostrowi Mazowieckiej mieści się fabryka mebli sprzedawanych w paczkach: rzecz przyjeżdża płasko w kartonie i dopiero u kogoś w domu staje się meblem. Wykorzystam to do kilku godzin, o których nikt nie mówi, bo sprzedaż kończy się wcześniej — do dnia, w którym urządzenie faktycznie do Was trafia.",
        "Rada pierwsza i najważniejsza: pierwsze danie zróbcie najprostsze, jakie umiecie, i nie w dniu, w którym macie gości. Zupa, sos, cokolwiek, co znacie na pamięć. Chodzi o to, żeby poznać sprzęt na czymś, przy czym nic złego się nie stanie, a nie o efekt. Pierwszego dania nikt nie powinien oceniać, łącznie z Wami.",
        "Rada druga: ustawcie urządzenie od razu tam, gdzie ma stać na stałe. Nie „na razie na stole, potem się zobaczy”. Sprzęt postawiony tymczasowo wędruje potem do szafki, a to jest jedyna droga, żeby przestać go używać. Zdecydujcie o miejscu w pierwszej godzinie, kiedy jeszcze wszystkim się chce.",
        "Rada trzecia jest nudna i dlatego się o niej zapomina: wszystko, co przyszło w pudełku — dokumenty, papiery, drobne części — odłóżcie w jedno miejsce, zanim karton pójdzie do śmieci. Nie doradzę Wam, czy karton zachować i na jak długo, bo to zależy od dokumentów, a nie ode mnie. Papiery jednak schowajcie na pewno.",
        "Rada czwarta: pierwsze mycie zróbcie od razu po pierwszym daniu, a nie następnego dnia. Chodzi o to, żebyście od początku wiedzieli, ile to naprawdę zajmuje — łącznie z pokrywą i uszczelką, o których na pokazach się milczy. Lepiej poznać tę część na własnej skórze pierwszego dnia niż odkryć ją zaskoczonym w drugim tygodniu.",
        "Nie napiszę Wam natomiast, co po kolei włączyć ani jak przeprowadzić pierwsze uruchomienie. To jest w materiałach, które przychodzą razem ze sprzętem, i tam należy patrzeć — moja instrukcja z pamięci mogłaby dotyczyć innego modelu albo być nieaktualna. Nie zadeklaruję też, kiedy urządzenie przyjedzie: terminy dostawy nie zależą ode mnie i nie będę obiecywać w cudzym imieniu.",
      ],
      links: [{ href: "/kontakt", label: "Kontakt" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Ostrowi Mazowieckiej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na pierwsze dni po dostawie umawiam się na pomoc przy konkretnym daniu — wystarczy zadzwonić, kiedy będzie potrzebna.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Ostrowi Mazowieckiej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ostrowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których części Ostrowi Mazowieckiej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie ma oficjalnego podziału na osiedla, więc przy umawianiu wystarczy podać ulicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  // Brak potwierdzonej listy osiedli — ani urząd, ani BIP jej nie publikują.
  districts: [],

  nearbyHeading: "Poza Ostrów Mazowiecką też przyjadę",
  nearbyParagraphs: [
    "Małkinia Górna, Brok, Andrzejewo i Wąsewo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Małkinia Górna", "Brok", "Zaręby Kościelne", "Wyszków", "Ostrołęka", "Zambrów"],

  about: blokOMnie("do Ostrowi Mazowieckiej", "w Ostrowi Mazowieckiej i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Ostrowi Mazowieckiej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Ostrowi Mazowieckiej"),
    {
      question: "Co zrobić w dniu, w którym sprzęt przyjedzie?",
      answer:
        "Cztery rzeczy. Pierwsze danie zróbcie najprostsze, jakie umiecie, i nie przy gościach. Ustawcie urządzenie od razu tam, gdzie ma stać na stałe — postawione tymczasowo wędruje potem do szafki. Papiery z pudełka odłóżcie w jedno miejsce, zanim karton pójdzie do śmieci. I umyjcie sprzęt od razu po pierwszym daniu, żeby wiedzieć, ile to naprawdę zajmuje.",
    },
    {
      question: "Powiesz, jak przeprowadzić pierwsze uruchomienie?",
      answer:
        "Nie z pamięci. To jest opisane w materiałach, które przychodzą razem ze sprzętem, i tam trzeba patrzeć — moja instrukcja mogłaby dotyczyć innego modelu albo być nieaktualna. Nie zadeklaruję też terminu dostawy: to nie zależy ode mnie.",
    },
  ],

  geo: { lat: 52.8022, lng: 21.8944 },
};
