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
 * SULEJÓWEK — miasto w powiecie mińskim, dwadzieścia dwa kilometry
 * od centrum Warszawy, z dworkiem Milusin, który był prezentem.
 *
 * KĄT: kupno tego urządzenia KOMUŚ INNEMU. Mamie, córce, teściowej,
 * żonie. Sytuacja bardzo częsta, o której nikt w tej branży nie pisze
 * uczciwie — bo uczciwie znaczy tu głównie: uważaj.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — to jest sprzęt, który staje w CUDZEJ kuchni i cudza osoba będzie
 *   go używać codziennie. Prezent, który zajmuje pół blatu, nie jest
 *   neutralny,
 * — trzy rzeczy do przemyślenia przed zakupem: czy ta osoba w ogóle
 *   chce, czy ma gdzie to postawić, i czy nie odbierze tego jako
 *   sugestii, że gotuje źle,
 * — jak to robię u siebie: prezentacja jest dla osoby, która będzie
 *   gotować, nawet jeśli płaci ktoś inny. Nie robię niespodzianek
 *   z dostawą pod drzwi,
 * — i granica: nie będę nikogo przekonywać wbrew niemu, nawet jeśli
 *   kupujący bardzo chce.
 *
 * TWARDE GRANICE:
 * — ŻADNEGO NAMAWIANIA ANI ROZGRYWANIA JEDNEJ OSOBY PRZECIW DRUGIEJ.
 *   Jeśli obdarowany nie chce, to koniec rozmowy — i tak to jest
 *   napisane.
 * — ŻADNYCH SUGESTII, że komuś „przyda się", bo źle gotuje.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — O PIŁSUDSKIM tylko jako o fakcie z historii domu, bez polityki
 *   i bez oceniania. Milusin jest tu punktem wyjścia o prezencie,
 *   a nie tematem historycznym.
 *
 * ROZGRANICZENIE. Inna strona mówi o zakupie na spółkę (kilka osób
 * składa się na jeden sprzęt dla siebie), jeszcze inna o domu,
 * w którym jedna osoba chce, a druga nie. Tutaj chodzi o coś trzeciego:
 * KUPUJĘ TO KOMUŚ, KTO NIE JEST ZE MNĄ W TYM DOMU.
 *
 * ODRZUCONE KĄTY:
 * — „miasto-ogród": hipoteza SPRAWDZONA I OBALONA. Żadne źródło nie
 *   stosuje tego określenia do Sulejówka — to termin od Podkowy Leśnej
 *   i Milanówka. Sulejówek powstał jako osada kolejowo-letniskowa,
 * — „remont kuchni / kuchnia tymczasowa" — kąt zajęty przez Wyszków.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy 21 536 mieszkańców (GUS, 31.12.2024) na 19,3 km²;
 *   urząd podaje 19 403 zameldowanych na pobyt stały na 31.12.2025 —
 *   różnica wynika z metodologii,
 * — ludność wzrosła o 17,8% w latach 2002–2024, ale WYŁĄCZNIE napływem:
 *   saldo migracji w 2024 r. plus 208 przy ujemnym przyroście
 *   naturalnym minus 78,
 * — przeciętne mieszkanie ma 91,9 m² — dużo, co wskazuje na przewagę
 *   zabudowy jednorodzinnej,
 * — dworek Milusin wzniesiono w 1923 r. jako DAR ŻOŁNIERZY POLSKICH;
 *   Piłsudski mieszkał tam w latach 1923–1926,
 * — po wojnie dworek przejęła ambasada ZSRR, a w latach 1956–2001
 *   mieściło się w nim przedszkole,
 * — Muzeum Józefa Piłsudskiego powołano w 2008 r., otwarto uroczyście
 *   14 sierpnia 2020 r., a regularne zwiedzanie ruszyło 11 listopada
 *   2020 r.,
 * — w mieście są dwie stacje: Miłosna (od 1866 r., dziś Sulejówek
 *   Miłosna) i Sulejówek (od 1910 r.); pociągi Kolei Mazowieckich
 *   i SKM linii S2, dla której Sulejówek Miłosna jest krańcówką,
 * — prawa miejskie 18 lipca 1962 r.; pierwsza wzmianka o wsi „Sulewo”
 *   w 1526 r.,
 * — NIE ZNALAZŁAM produktu z tego miasta na ministerialnej Liście
 *   Produktów Tradycyjnych,
 * — NIE ZNALAZŁAM nazw największych pracodawców — miasto ma ponad
 *   trzy i pół tysiąca podmiotów, w większości mikrofirm.
 */
export const SULEJOWEK: CityContent = {
  slug: "sulejowek",
  h1: "Thermomix Sulejówek – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sulejówek — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sulejówku: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sulejówek — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sulejówku. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sulejówka z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Sulejówek i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Jeśli kupujesz to komuś — prezentacja jest dla tej osoby, nie dla Ciebie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sulejówku – jak wygląda prezentacja?",
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
      id: "prezent",
      heading: "Dworek, który był prezentem — i sprzęt, który bywa prezentem",
      paragraphs: [
        "Najbardziej znany dom w Sulejówku dostał się swojemu właścicielowi w prezencie. Milusin postawiono w tysiąc dziewięćset dwudziestym trzecim roku jako dar żołnierzy polskich dla Józefa Piłsudskiego; mieszkał tam trzy lata. Potem dworek przejęła ambasada radziecka, przez blisko pół wieku mieściło się w nim przedszkole, a od dwa tysiące dwudziestego działa tam muzeum. Dom, który raz był prezentem, potem był jeszcze czterema innymi rzeczami.",
        "Biorę to za punkt wyjścia, bo w mojej pracy prezenty to bardzo częsta sytuacja — i taka, o której w tej branży nikt nie pisze uczciwie. Dzwoni ktoś i mówi: chcę kupić to mamie. Albo córce, teściowej, żonie. Zwykle w dobrej wierze i zwykle z pieniędzy, których nie żałuje.",
        "A ja mówię wtedy rzeczy, których się nie spodziewa, bo tu jest kilka pułapek naraz.",
        "Pierwsza: to nie jest prezent, który się kładzie na stole i zapomina. To jest sprzęt, który staje w cudzej kuchni, zajmuje kawałek blatu i wymaga, żeby ktoś się go nauczył. Osoba obdarowana będzie z nim żyła codziennie — a nie ta, która płaci.",
        "Druga jest delikatniejsza i mówię o niej wprost, bo widzę ją regularnie. Nie każdy odbiera takie urządzenie jako miły gest. Część osób słyszy w nim sugestię, że dotąd gotowały źle albo za wolno. Nie twierdzę, że tak jest zawsze — twierdzę, że warto o tym pomyśleć wcześniej, bo tego się potem nie odkręca.",
        "Trzecia jest zupełnie praktyczna: gdzie to stanie. W kuchni, w której blat jest zastawiony, nowe urządzenie oznacza, że coś innego musi zniknąć. To jest decyzja właściciela kuchni, nie moja i nie kupującego.",
        "Dlatego u mnie wygląda to tak. Prezentacja jest dla osoby, która ma z tego korzystać, nawet jeśli płaci ktoś zupełnie inny — i to ona decyduje, czy chce. Nie robię niespodzianek z dostawą pod drzwi, bo niespodzianka za kilka tysięcy złotych stawia obdarowanego w niezręcznej sytuacji: musi się cieszyć, nawet jeśli się nie cieszy.",
        "I rzecz ostatnia, przy której nie ustąpię. Jeśli osoba, dla której to kupujecie, mówi, że nie chce, to jest koniec rozmowy. Nie będę jej przekonywać, nie będę wracać do tematu przez kogoś innego i nie będę sugerować, że się rozmyśli. Wolę nie sprzedać, niż sprzedać sprzęt, który przez rok stoi w pudle w garażu — bo takich historii też się nasłuchałam.",
      ],
      links: [{ href: "/prezentacja", label: "Umów prezentację" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sulejówku?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli dzwonisz w sprawie kogoś innego, powiedz to od razu. Wtedy umawiam się z tą osobą i to z nią rozmawiam — a Ty decydujesz tylko o tym, czy płacisz.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sulejówku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sulejowskiej rodziny",
      paragraphs: [
        "Sulejówek rośnie wyłącznie napływem — w dwa tysiące dwudziestym czwartym roku saldo migracji wyniosło plus dwieście osiem osób przy ujemnym przyroście naturalnym. Do tego dwie stacje kolejowe i dwadzieścia dwa kilometry do centrum Warszawy. W praktyce znaczy to, że bardzo wielu mieszkańców codziennie dojeżdża, a obiad powstaje po powrocie.",
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

  districtsHeading: "Do których części Sulejówka dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Nazwy Miłosna i Ratajewo są historyczne, a nie urzędowe — Miłosna nazywała się do pięćdziesiątego czwartego roku Cechówką. Przy umawianiu najprościej podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Sulejówek też przyjadę",
  nearbyParagraphs: [
    "Halinów, Wiązowna, Zielonka i warszawska Wesoła są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Halinów", "Wiązowna", "Zielonka", "Warszawa", "Mińsk Mazowiecki", "Ząbki"],

  about: blokOMnie("do Sulejówka", "w Sulejówku i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sulejówka bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Sulejówku"),
    {
      question: "Chcę kupić to mamie w prezencie. Jak to zrobić?",
      answer:
        "Najlepiej tak, żeby prezentacja odbyła się u niej i to ona decydowała, czy chce — nawet jeśli płacisz Ty. Nie robię niespodzianek z dostawą pod drzwi, bo niespodzianka za kilka tysięcy stawia obdarowanego w niezręcznej sytuacji. Zadzwoń i powiedz wprost, że dzwonisz w czyjejś sprawie; resztę ustalę z nią.",
    },
    {
      question: "A jeśli ta osoba powie, że nie chce?",
      answer:
        "To koniec rozmowy i nie wracam do tematu. Nie będę nikogo przekonywać wbrew niemu ani działać przez kogoś innego. Wolę nie sprzedać, niż sprzedać sprzęt, który przez rok stoi w pudle — takich historii też się nasłuchałam.",
    },
  ],

  geo: { lat: 52.2467, lng: 21.2669 },
};
