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
 * BEŁŻYCE — 5 889 mieszkańców (31.12.2024, raport gminy). Miasto,
 * w którym działają DWIE fabryki maszyn dla przemysłu spożywczego:
 * Spomasz Bełżyce (od 1971, linie m.in. dla mleczarstwa
 * i LODZIARSTWA) oraz MEGA (maszyny do przetwarzania owoców).
 * W gminie dodatkowo mroźnia owoców Uren Novaberry.
 *
 * KĄT: lody i sorbety. Miasto, które robi maszyny do produkcji lodów,
 * jest jedynym właściwym miejscem, żeby rozdzielić dwie rzeczy, które
 * przy takim sprzęcie nagminnie się myli: SORBET, który naprawdę
 * z tego wyjdzie, i LODY ŚMIETANKOWE, których nie będzie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — co da się zrobić: sorbet z mrożonych owoców, w minutę, bez
 *   maszyny do lodów — i to jest realna, niedoceniana funkcja,
 * — czego NIE będzie: prawdziwych lodów śmietankowych o kremowej
 *   konsystencji, bo do tego trzeba napowietrzania i chłodzenia
 *   podczas mieszania, a tego to urządzenie nie robi,
 * — dlaczego to rozróżnienie jest ważne: bo „lody w minutę" to jedno
 *   z najczęściej nadużywanych haseł przy tym sprzęcie,
 * — i po co to komu: bo sorbet robi się z jednego składnika i wiadomo,
 *   co jest w środku.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — ani „bez cukru", ani „zdrowszy
 *   deser dla dzieci". To jest deser i tyle.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH PORAD O MROŻENIU, ROZMRAŻANIU I PONOWNYM MROŻENIU —
 *   to bezpieczeństwo żywności, czyli nie moja dziedzina.
 * — ŻADNEJ KRYTYKI lodów kupnych ani konkretnych marek. Zasada
 *   z Mrągowa, a tu tym ostrzejsza: miejscowa fabryka robi maszyny
 *   dla producentów lodów. Krytykowanie ich wyrobów byłoby
 *   komentarzem do pracy sąsiadów.
 *
 * ROZGRANICZENIE. Kąt „ja lubię gotować i nie chcę, żeby maszyna mi
 * to odebrała" jest zajęty i tutaj się nie pojawia. Ta strona nie jest
 * też o tym, czego urządzenie nie potrafi w ogóle (to Janów Lubelski
 * i granica techniki), tylko o JEDNEJ konkretnej funkcji rozłożonej
 * na to, co prawdziwe, i to, co reklamowe.
 *
 * PUŁAPKA NAZEWNICZA. Bełżyce to NIE Bełżec (powiat tomaszowski)
 * ani Bełchatów. Wyszukiwarki mieszają je nagminnie — przy researchu
 * wyniki o Bełżcu wypływały nawet przy pytaniach o zabytki Bełżyc.
 * To dwa zupełnie różne miejsca i dwa różne tematy.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE stawiam żadnego superlatywu przy dwóch fabrykach maszyn
 *   spożywczych w mieście tej wielkości. To nietypowe, ale danych
 *   porównawczych nie ma, więc piszę „nietypowe", nie „jedyne
 *   w Polsce",
 * — 140 zatrudnionych w Spomaszu to DANA WŁASNA FIRMY, nie
 *   zweryfikowana zewnętrznie — w tekście jest „ponad sto osób",
 * — NIE używam liczby mieszkańców ze strony gminy. Podaje ona
 *   7 700 dla miasta, podczas gdy oficjalny raport o stanie gminy
 *   za 2024 r. mówi 5 889, a niezależne źródło 5 868. Różnica ponad
 *   30% — to najlepszy w tej serii przykład na zasadę, że strona
 *   gminy nie gwarantuje aktualności,
 * — dane rolnicze (392 ha sadów, 85% powierzchni gminy jako użytki
 *   rolne) pochodzą z 2018 r. i dlatego NIE ma ich w tekście
 *   z liczbami — jest tylko ogólne „gmina rolnicza",
 * — NIE rozwijam wątku reformacyjnego. Bełżyce były w XVI i XVII w.
 *   ośrodkiem różnowierczym z synodami kalwińskimi — fakt
 *   potwierdzony niezależnie, ale na stronie sprzedażowej o kuchni
 *   nie ma dla niego miejsca i nie ma go w treści ani razu,
 * — prawa miejskie: 1417 r., przywilej Władysława Jagiełły uzyskany
 *   staraniem właścicieli miasta, braci Tarnowskich. To NIE to samo
 *   co pierwsza wzmianka (1349, i dotyczy zmiany prawa WSI). Miasto
 *   straciło prawa w 1869 r. i odzyskało je w 1958 r. — ta ostatnia
 *   data pochodzi z jednego źródła, więc podaję ją ostrożnie
 *   i tylko w komentarzu, nie w tekście strony,
 * — miasto NIE ma potwierdzonego wykazu osiedli, więc districts
 *   to PUSTA TABLICA,
 * — produktów z Listy Produktów Tradycyjnych dla tej gminy NIE
 *   udało się sprawdzić (rejestr niedostępny), więc w tekście nie ma
 *   o nich ani słowa.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Spomasz Bełżyce działa od 1971 r., robi maszyny i linie
 *   technologiczne dla przemysłu spożywczego, w tym dla mleczarstwa
 *   i lodziarstwa; eksportuje,
 * — MEGA przy ul. Przemysłowej robi maszyny do przetwarzania owoców,
 * — w gminie, we wsi Krężnica Okrągła, działa mroźnia owoców
 *   Uren Novaberry,
 * — 5 889 mieszkańców na 31.12.2024; gmina 12 612,
 * — do Lublina ok. 28–33 km, około pół godziny.
 */
export const BELZYCE: CityContent = {
  slug: "belzyce",
  h1: "Thermomix Bełżyce – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bełżyce — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Bełżycach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bełżyce — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bełżycach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bełżyc z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Bełżyce i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sorbet w minutę — tak. Lody śmietankowe — nie. Warto znać różnicę przed zakupem.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bełżycach – jak wygląda prezentacja?",
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
      id: "lody",
      heading: "Miasto, które robi maszyny do lodów — więc powiedzmy sobie jasno, co z tego wyjdzie, a co nie",
      paragraphs: [
        "Bełżyce mają niecałe sześć tysięcy mieszkańców i dwie fabryki maszyn dla przemysłu spożywczego. Spomasz działa tu od 1971 roku, zatrudnia ponad sto osób i buduje linie technologiczne między innymi dla mleczarstwa i lodziarstwa — także na eksport. Kilka ulic dalej MEGA robi maszyny do przetwarzania owoców, a w gminie stoi mroźnia owoców. Jak na miasto tej wielkości to nietypowe skupienie; nie napiszę „jedyne w Polsce”, bo tego nie da się porównać, ale nietypowe na pewno.",
        "Skoro więc jesteśmy w mieście, które wie, jak się robi lody przemysłowo, to jest to najuczciwsze możliwe miejsce, żeby rozdzielić dwie rzeczy, które przy tym urządzeniu myli się nagminnie — czasem przez nieuwagę, a czasem całkiem świadomie.",
        "Rzecz pierwsza, prawdziwa: sorbet. Wrzucacie mrożone owoce, uruchamiacie i po niecałej minucie macie gęsty, zimny deser. Bez maszyny do lodów, bez wyjmowania i mieszania co pół godziny, bez niczego. To jest realna funkcja i moim zdaniem najbardziej niedoceniana w całym urządzeniu — zwłaszcza latem i zwłaszcza przy dzieciach, bo robi się to szybciej, niż trwa marudzenie.",
        "Rzecz druga, nieprawdziwa: lody śmietankowe. Takie prawdziwe, kremowe, jakie znacie z lodziarni — z tego nie wyjdą i nie będę udawać, że wyjdą. Do lodów potrzebne jest napowietrzanie i chłodzenie w trakcie mieszania, czyli dokładnie to, co robią maszyny budowane w tym mieście. To urządzenie tego nie robi: ono rozdrabnia zamrożone i miesza, ale nie chłodzi. Wyjdzie coś, co jest bliżej gęstego mrożonego kremu niż lodów.",
        "Piszę o tym tak dokładnie, bo „lody w minutę” to jedno z najczęściej nadużywanych haseł przy tym sprzęcie. Ktoś kupuje z taką myślą, próbuje w pierwszy weekend i czuje się oszukany — nie przez urządzenie, tylko przez obietnicę. Wolę, żebyście wiedzieli przed, a nie po.",
        "Nie usłyszycie też ode mnie, że domowy sorbet jest zdrowszy od kupnych lodów. Nie jestem dietetykiem, a w mieście, w którym buduje się maszyny dla producentów lodów, byłby to komentarz do pracy sąsiadów. To, co mogę powiedzieć uczciwie: sorbet robi się z owoców i wiadomo, co w nim jest, bo sami to wsypaliście. O mrożeniu, rozmrażaniu i ponownym mrożeniu nie doradzam — to bezpieczeństwo żywności, czyli nie moja dziedzina.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bełżycach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie w domu dzieci, powiedzcie o tym przy umawianiu — zrobimy sorbet i zobaczycie na własne oczy, ile to trwa i jak wygląda. To jest jedna z niewielu rzeczy, które lepiej raz zobaczyć, niż przeczytać dziesięć zdań opisu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bełżycach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bełżyckiej rodziny",
      paragraphs: [
        "Bełżyce liczą blisko sześć tysięcy mieszkańców, a cała gmina ponad dwanaście. To gmina rolnicza z zakładami, które trzymają tu ludzi na miejscu, a do Lublina jest stąd niecałe pół godziny — czyli blisko, ale nie na tyle, żeby wpadać tam po zakupy codziennie.",
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

  districtsHeading: "Do których części Bełżyc dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości w gminie, bez dopłaty za dojazd.",
    "Miasto nie ma opublikowanego wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Bełżyce też przyjadę",
  nearbyParagraphs: [
    "Konopnica, Niedrzwica Duża, Borzechów, Wojciechów, Poniatowa i Chodel są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Poniatowa", "Chodel", "Niedrzwica Duża", "Wojciechów", "Lublin", "Opole Lubelskie"],

  about: blokOMnie("do Bełżyc", "w Bełżycach i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Bełżyc bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bełżycach"),
    {
      question: "Zrobię w tym lody?",
      answer:
        "Sorbet — tak, i to w niecałą minutę z mrożonych owoców, bez maszyny do lodów. Prawdziwych lodów śmietankowych — nie, i nie będę udawać, że tak. Do lodów potrzebne jest napowietrzanie i chłodzenie w trakcie mieszania, a to urządzenie rozdrabnia zamrożone i miesza, ale nie chłodzi. Wyjdzie gęsty mrożony krem, nie lody z lodziarni.",
    },
    {
      question: "Czy domowy sorbet jest zdrowszy od kupnych lodów?",
      answer:
        "Nie odpowiem na to — nie jestem dietetykiem, a w mieście, w którym buduje się maszyny dla producentów lodów, byłby to komentarz do pracy sąsiadów. Mogę powiedzieć tylko tyle, że sorbet robi się z owoców i wiadomo, co w nim jest. O mrożeniu i rozmrażaniu też nie doradzam.",
    },
  ],

  geo: { lat: 51.175, lng: 22.2833 },
};
