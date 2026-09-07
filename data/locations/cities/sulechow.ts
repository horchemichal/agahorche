import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * SULECHÓW — miasteczko między Zieloną Górą a Świebodzinem, w regionie,
 * w którym od wieków uprawia się winorośl i który dziś tę tradycję
 * odbudowuje.
 *
 * KĄT: soki i moszcze z owoców. Region winorośli jest jedynym właściwym
 * miejscem na temat sezonowy, którego nie ma nigdzie: CO ZROBIĆ Z DUŻĄ
 * ILOŚCIĄ OWOCÓW WE WRZEŚNIU.
 *
 * ŻELAZNE OGRANICZENIE — TO JEST WAŻNE I NIE WOLNO GO PRZEKROCZYĆ:
 * ANI SŁOWA O ALKOHOLU. Nie piszemy o robieniu wina, nalewek ani niczego
 * fermentowanego z zawartością alkoholu, nie podajemy przepisów w tę
 * stronę i nie sugerujemy takiego zastosowania. Winorośl pojawia się
 * wyłącznie jako fakt o regionie, w jednym zdaniu. Wszystko dalej dotyczy
 * soków, musów i przecierów.
 *
 * DRUGIE OGRANICZENIE: nie podajemy zaleceń dotyczących pasteryzacji ani
 * przechowywania przetworów jako norm bezpieczeństwa — to jest dziedzina,
 * w której błędna porada szkodzi. Piszemy o tym, co urządzenie robi
 * technicznie, i odsyłamy do sprawdzonych przepisów.
 *
 * ROZGRANICZENIE. Iwkowa ma suszarnie śliwek, Szydłów powidła, Proszowice
 * skrzynkę warzyw, Łącko sady. Tutaj chodzi konkretnie o SOK i MUS oraz
 * o pytanie, czy to się w ogóle opłaca.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w okolicy Zielonej Góry od wieków uprawia się winorośl,
 *   a tradycja ta jest dziś odbudowywana.
 */
export const SULECHOW: CityContent = {
  slug: "sulechow",
  h1: "Thermomix Sulechów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Sulechów — prezentacja i cena",
  seoDescription:
    "Thermomix w Sulechowie: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sulechów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sulechowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sulechowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Sulechów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Domowa lemoniada przygotowana w Thermomixie TM7, obok urządzenie z przepisem na ekranie",
    caption: "Na spotkaniu robimy też rzeczy proste — takie, które faktycznie robi się potem co tydzień.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sulechowie – jak wygląda prezentacja?",
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
      id: "owoce-wrzesien",
      heading: "Wrzesień, pełne drzewa — i pytanie, czy to się opłaca",
      paragraphs: [
        "To jest okolica, w której od wieków uprawia się winorośl, a i bez niej wrzesień wygląda tu tak samo jak w każdej wsi z ogrodem: drzewa uginają się, ziemia pod nimi zaczyna być lepka, a nikt nie ma czasu. Napiszę więc o tym, co da się z tym zrobić w kuchni — o sokach, musach i przecierach.",
        "Zacznę od pytania, którego zwykle nikt nie zadaje: czy to się w ogóle opłaca. Odpowiedź jest niewygodna i zależy od tego, skąd macie owoce. Jeśli kupujecie je na targu, to sok domowy wyjdzie drożej niż kupiony — i mówię to wprost. Jeśli natomiast owoce są własne i alternatywą jest to, że zgniją pod drzewem, rachunek robi się oczywisty.",
        "Co urządzenie w tym robi technicznie. Rozdrabnia owoce razem ze skórką i podgrzewa je w tym samym naczyniu, z ustawioną temperaturą i bez pilnowania — czyli obie te czynności, które przy przecierach zajmują najwięcej czasu i uwagi, dzieją się bez Was. Mus jabłkowy, przecier ze śliwek, mus z gruszek albo z dyni powstają bez stania nad garnkiem i bez przecierania przez sitko.",
        "Sok jest sprawą osobną i warto ją rozdzielić. Urządzenie nie jest sokowirówką i nie oddziela miąższu — to, co z niego wychodzi, to raczej gęsty przecier albo mus niż klarowny sok. Jeśli chodzi Wam o sok w takim sensie, w jakim rozumie się go przy sokowniku, to jest inne urządzenie i nie będę udawać, że tu je zastąpię.",
        "Zaznaczam też granicę swojej wiedzy: nie doradzam w sprawie pasteryzacji ani przechowywania przetworów. To jest dziedzina, w której zła rada realnie szkodzi, więc trzymajcie się sprawdzonych przepisów, a nie moich domysłów. Ja odpowiadam za to, co dzieje się w naczyniu do momentu przelania.",
        "I rzecz praktyczna na koniec: naczynie mieści około dwóch litrów, więc przy dużej ilości owoców robi się to partiami. Przy dwóch skrzynkach jabłek to jest kilka podejść wieczorem, a nie jedno — warto wiedzieć to przed wrześniem, a nie w jego trakcie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sulechowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie własne owoce, powiedzcie jakie — zrobimy z nich coś na spotkaniu zamiast z kupionych.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sulechowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sulechowskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — a jesienią dochodzi do tego jeszcze to, co przyszło z ogrodu.",
        "Thermomix pomaga tym, że nie wymaga obecności: rozdrabnia i podgrzewa w jednym naczyniu, bez pilnowania.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Sulechów",
    "Kalsk",
    "Brody",
    "Cigacice",
    "Górzykowo",
    "Klępsk",
    "Krężoły",
    "Łęgowo",
    "Nowy Świat",
    "Pomorsko",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Świebodzin, Nowa Sól, Czerwieńsk i Kargowa są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świebodzin", "Nowa Sól", "Czerwieńsk", "Kargowa", "Babimost"],

  about: blokOMnie("do Sulechowa", "w gminie Sulechów i okolicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sulechowa bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Sulechowie"),
    {
      question: "Czy zrobię w tym sok z własnych owoców?",
      answer:
        "Raczej gęsty przecier albo mus niż klarowny sok — urządzenie nie jest sokowirówką i nie oddziela miąższu. Bardzo dobrze wychodzą natomiast musy i przeciery: rozdrabnia owoce ze skórką i podgrzewa w tym samym naczyniu, bez stania nad garnkiem i bez przecierania przez sitko.",
    },
    {
      question: "Czy domowe przetwory się opłacają?",
      answer:
        "Zależy, skąd masz owoce. Kupowane na targu — przetwór wyjdzie drożej niż gotowy ze sklepu i mówię to wprost. Własne, które inaczej zgniją pod drzewem — rachunek jest oczywisty. Warto tylko wiedzieć, że naczynie mieści około dwóch litrów, więc przy dwóch skrzynkach jabłek to kilka podejść, a nie jedno.",
    },
  ],

  geo: { lat: 52.0847, lng: 15.6236 },
};
