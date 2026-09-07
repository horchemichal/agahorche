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
 * SOPOT — najmniejsze z trzech miast Trójmiasta, kurort z molo i Monciakiem,
 * miejsce o wyjątkowo dużym zagęszczeniu lokali gastronomicznych.
 *
 * KĄT: jedzenie na mieście kontra gotowanie w domu. Miasto restauracji
 * jest jedynym właściwym miejscem na rachunek, którego nikt uczciwie
 * nie robi: KIEDY GOTOWANIE W DOMU NAPRAWDĘ SIĘ OPŁACA, A KIEDY NIE.
 *
 * SEKCJA MUSI UNIKNĄĆ DWÓCH PUŁAPEK. Pierwsza: liczenie oszczędności
 * w złotówkach — nie robimy tego, bo to ulubiona sztuczka branży
 * i wymieniłam ją wprost na stronie Jarocina jako chwyt, którego nie
 * używam. Druga: moralizowanie, że jedzenie na mieście jest złe. Nie jest.
 *
 * TEZA SEKCJI: to nie jest wybór między dwiema rzeczami, tylko między
 * trzema — bo trzecią, najczęstszą, jest jedzenie gotowe kupione w sklepie
 * i odgrzane. I to właśnie z NIĄ, a nie z restauracją, konkuruje
 * gotowanie w domu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Sopot jest kurortem z molo i deptakiem, ma dużo lokali
 *   gastronomicznych i jest najmniejszym miastem Trójmiasta.
 */
export const SOPOT: CityContent = {
  slug: "sopot",
  h1: "Thermomix Sopot – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Sopot — prezentacja i cena",
  seoDescription:
    "Thermomix w Sopocie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sopot — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sopocie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sopotu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta.",

  highlights: highlightyStandardowe("Sopot i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Domowa lemoniada przygotowana w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Na spotkaniu robimy też rzeczy proste — takie, które faktycznie robi się potem co tydzień.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sopocie – jak wygląda prezentacja?",
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
      id: "na-miescie-czy-w-domu",
      heading: "Miasto restauracji — i uczciwy rachunek, który ma trzy kolumny",
      paragraphs: [
        "W Sopocie na jednej ulicy jest więcej lokali niż w niejednym powiecie i jedzenie poza domem jest tu czymś zwyczajnym, a nie świętem. To dobre miejsce, żeby zrobić rachunek, którego w tej branży nikt nie robi uczciwie.",
        "Najpierw zastrzeżenie. Nie policzę Wam, po ilu miesiącach urządzenie „się zwróci na jedzeniu”. To jest ulubione zestawienie sprzedawców i uważam je za nieuczciwe, bo zakłada, że jecie inaczej, niż jecie naprawdę. Nie będę też przekonywać, że jedzenie na mieście jest złe — nie jest. Za obiad w restauracji płaci się nie tylko za jedzenie, ale i za to, że nikt nie kupował, nie gotował i nie zmywał, i to ma swoją wartość.",
        "Rzecz w tym, że to nie jest wybór między dwiema rzeczami, tylko między trzema. Trzecią, i w większości domów najczęstszą, jest jedzenie gotowe: kupione w sklepie, odgrzane, zjedzone po dwudziestej pierwszej. Nie restauracja i nie gotowanie — coś pośredniego, co wybiera się ze zmęczenia.",
        "I to właśnie z tą trzecią kolumną konkuruje urządzenie w kuchni, a nie z restauracją. Nikt nie przestanie chodzić na obiad na Monciak dlatego, że kupił Thermomixa, i dobrze. Ale wieczór, w którym alternatywą było odgrzanie czegoś z folii, wygląda inaczej, gdy zupa albo makaron z sosem powstają bez stania przy garnku.",
        "Stąd moje pytanie, które zadam Wam na spotkaniu zamiast pokazywania wyliczeń: ile razy w tygodniu jecie coś, czego tak naprawdę nie chcieliście jeść? Jeśli odpowiedź brzmi „zero, bo jemy na mieście i to nam odpowiada” — nie kupujcie, nie mam Wam nic do zaoferowania. Jeśli brzmi „trzy albo cztery”, to jest o czym rozmawiać, i to bez żadnego kalkulatora.",
      ],
      links: [{ href: "/przepisy/co-mam-w-lodowce", label: "Co ugotować z tego, co masz w lodówce" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sopocie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę i piętro. Przy starszej zabudowie brak windy zmienia tylko to, ile rzeczy wnoszę za jednym razem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sopocie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sopockiej rodziny",
      paragraphs: [
        "Dzień kończy się tu późno, a obiad często przegrywa z tym, co da się kupić gotowe po drodze.",
        "Thermomix pomaga tym, że nie wymaga obecności — nastawiasz i wracasz, gdy jest gotowe. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których części Sopotu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Dolny Sopot",
    "Górny Sopot",
    "Kamienny Potok",
    "Brodwino",
    "Karlikowo",
    "Świemirowo",
    "Wyścigi",
    "Przylesie",
    "Centrum",
    "Kolonia",
  ],

  nearbyHeading: "Poza Sopot też przyjadę",
  nearbyParagraphs: [
    "Żukowo, Pruszcz Gdański, Rumia i Reda są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Żukowo", "Pruszcz Gdański", "Rumia", "Reda", "Wejherowo", "Kartuzy"],

  about: blokOMnie("do Sopotu", "w Sopocie i Trójmieście", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sopotu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Sopocie"),
    {
      question: "Jemy dużo na mieście. Czy taki zakup ma dla nas sens?",
      answer:
        "Jeśli jedzenie poza domem Wam odpowiada i nie macie z tym problemu — nie, i nie będę przekonywać, że restauracja to coś złego. Urządzenie konkuruje nie z restauracją, tylko z gotowym daniem kupionym w sklepie i odgrzanym po dwudziestej pierwszej. Pytanie brzmi: ile razy w tygodniu jecie coś, czego tak naprawdę nie chcieliście jeść?",
    },
    {
      question: "Czy policzysz mi, po ilu miesiącach to się zwróci?",
      answer:
        "Nie i celowo tego nie robię. Takie zestawienia zakładają, że jecie inaczej, niż jecie naprawdę — to ulubiona sztuczka tej branży, której nie używam. Wolę zapytać o Wasz tydzień i uczciwie powiedzieć, jeśli z odpowiedzi wyjdzie, że nie warto.",
    },
  ],

  geo: { lat: 54.4418, lng: 18.5601 },
};
