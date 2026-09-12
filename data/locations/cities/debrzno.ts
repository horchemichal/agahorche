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
 * DEBRZNO — miasto w powiecie człuchowskim, 4 805 mieszkańców
 * (31.12.2024, GUS); gmina 8 460. Brief mówił 4 500 dla miasta
 * — zaniżone.
 *
 * PRAWA MIEJSKIE 1354 r. — sam rok, BEZ DATY DZIENNEJ I BEZ
 * NADAWCY. Nie zmyślam ich. To najstarsze miasto w swojej
 * grupie: o 634 lata starsze od Brus.
 *
 * Miasto 7,5 km²; gmina 224 km², 34 wsie i osady.
 *
 * OBALONE: Debrzno NIE JEST gminą wiejską — to gmina
 * miejsko-wiejska, jedno z trzech miast powiatu człuchowskiego
 * (obok Człuchowa i Czarnego). OBALONE: 224 km² to gmina,
 * a nie miasto — częsty błąd w kompilacjach.
 *
 * UWAGA — POWIAT: CZŁUCHOWSKI. Nie chojnicki i nie złotowski.
 * Debrzno leży przy granicy z wielkopolskim, stąd częste
 * błędne przypisania województwa.
 *
 * HOMONIM: Debrzno-Wieś. Gmina używa dwóch kodów pocztowych,
 * 77-310 i 77-318 — ten drugi nie jest kodem miasta.
 * NIE POTWIERDZIŁAM statusu Debrzna-Wsi, więc w tekście
 * ograniczam się do ostrzeżenia w FAQ.
 *
 * TEMATY WRAŻLIWE — NIE UŻYWAĆ JAKO TŁA: bezrobocie 9,9%
 * w gminie i 11,5% w powiecie (najwyższe w całym zestawieniu);
 * najniższe ceny mieszkań (3 637 zł/m²); ubytek ludności
 * −9,8% (2002–2024); 25,5% mieszkańców w wieku poprodukcyjnym;
 * historia pogranicza i II wojna — niezbadane, nie dotykać.
 *
 * KĄT: CEBULA I CZOSNEK — baza, od której zaczyna się prawie
 * każde polskie danie. Najzwyklejszy możliwy temat i dlatego
 * warty osobnej strony: nikt o nim nie pisze, a robi się to
 * codziennie. Kąt jest CELOWO neutralny — w mieście o takich
 * statystykach nie buduję treści na zamożności ani na pracy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że siekanie cebuli w tym urządzeniu jest NIERÓWNE i to
 *   jest jego prawdziwa wada: dostaje się mieszankę drobnego
 *   i większego, a nie równą kostkę,
 * — że tam, gdzie kostka ma być widoczna (sałatka, tatar,
 *   surówka), nadal bierze się nóż,
 * — że tam, gdzie cebula i tak się rozpadnie (sos, zupa,
 *   farsz, zasmażka, gulasz), różnicy nie widać i wtedy jest
 *   to czysty zysk,
 * — że łzy faktycznie znikają, bo naczynie jest zamknięte,
 *   i że to nie jest błahostka,
 * — że czosnek w małej ilości potrafi „uciec" pod nóż i lepiej
 *   dodać go do czegoś,
 * — że zapach cebuli i czosnku zostaje w uszczelce, i mówię
 *   o tym przed zakupem,
 * — i ODMOWA: nic o właściwościach czosnku.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH — czosnek „na odporność",
 *   cebula „na przeziębienie", syrop z cebuli. TO JEST TU
 *   NAJWIĘKSZA POKUSA I MÓWIĘ NIE.
 * — ŻADNYCH INSTRUKCJI CZYSZCZENIA URZĄDZENIA — odsyłam do
 *   instrukcji producenta.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU obranego czosnku w oleju
 *   ani innych przetworach — to ma realne ryzyko.
 * — ŻADNYCH NAZW FIRM.
 * — ŻADNEJ DATY DZIENNEJ praw miejskich.
 * — NIE ROBIĘ TŁA z bezrobocia, cen mieszkań ani wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Farsz" pojawia się jako
 * wątek w Miastku (maszynka) i Ujeździe (przyjęcie), ale nigdzie
 * nie jest kątem. „Chrzan, musztarda i ocet" (Działoszyce)
 * dotyczą ostrych dodatków robionych od ręki. Tutaj chodzi
 * o DWA NAJZWYKLEJSZE SKŁADNIKI i o to, co urządzenie robi
 * z nimi dobrze, a co źle.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty dziennej ani nadawcy praw miejskich 1354 r.
 * — NIE PISZĘ o murach miejskich, kościołach ani jeziorze —
 *   nic z tego nie zostało potwierdzone.
 * — NIE PISZĘ o organizacjach pozarządowych w Debrznie —
 *   niepotwierdzone.
 * — NIE PODAJĘ nazwy żadnego pracodawcy — nie ustaliłam.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 * — NIE PODAJĘ listy sołectw jako sołectw — mam wykaz 34 wsi
 *   i osad i tak je nazywam.
 * — districts: PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 4 805 mieszkańców miasta, 8 460 gminy (31.12.2024, GUS),
 * — prawa miejskie 1354 r.,
 * — gmina miejsko-wiejska w powiecie człuchowskim; jedno
 *   z trzech miast powiatu obok Człuchowa i Czarnego,
 * — miasto 7,5 km², gmina 224 km², 34 wsie i osady,
 * — wsie gminy m.in.: Uniechów, Strzeczona, Stare i Nowe
 *   Gronowo, Cierznie, Myśligoszcz, Słupia, Buka, Drozdowo.
 */
export const DEBRZNO: CityContent = {
  slug: "debrzno",
  h1: "Thermomix Debrzno – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Debrzno (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Debrznie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Debrzno — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Debrznie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Debrzna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Debrzno i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Równej kostki nie zrobi. Ale łzy znikają.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Debrznie – jak wygląda prezentacja?",
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
      id: "cebula",
      heading: "Miasto z 1354 roku — czyli o cebuli i czosnku, od których wszystko się zaczyna",
      paragraphs: [
        "Debrzno ma prawa miejskie od 1354 roku. To najstarsze miasto w swojej okolicy — o ponad sześćset lat starsze od sąsiednich Brus, które miastem zostały dopiero w 1988. Sześć i pół wieku codziennego gotowania w jednym miejscu.",
        "I dlatego napiszę tu o rzeczy najzwyklejszej z możliwych, o której nikt nie pisze, a którą wszyscy robimy codziennie: o cebuli i czosnku. Od nich zaczyna się prawie każde polskie danie — i to jest dokładnie ten punkt, w którym warto powiedzieć, co ten sprzęt robi dobrze, a co źle.",
        "Zacznę od wady, bo ona jest realna. Cebula posiekana w tym urządzeniu jest NIERÓWNA. Nóż obraca się szybko i uderza chaotycznie, więc dostajecie mieszankę: część zmielona prawie na papkę, część w większych kawałkach. Równej kostki, takiej jak spod noża, nie będzie. Nigdy.",
        "Wniosek jest prosty i mówię go wprost: wszędzie tam, gdzie kostkę widać na talerzu — w sałatce, w śledziu, w surówce, w tatarze — bierzcie nóż i deskę. Tak samo jak przy bazylii. Urządzenie nie zastępuje noża i nie ma takiego zamiaru, mimo że tak się je czasem reklamuje.",
        "Ale — i to jest większa część życia — w ogromnej liczbie dań cebula i tak ma się rozpaść. Zasmażka. Sos. Zupa. Gulasz. Farsz do pierogów i gołąbków. Leczo. Pasta. Tam nierówność jest kompletnie niewidoczna, a zysk czasu jest pełny: wrzucacie obraną cebulę w całości i po kilku sekundach jest gotowa.",
        "Druga rzecz, z pozoru błaha, a dla wielu osób decydująca: łzy. Naczynie jest zamknięte, więc siekanie cebuli po prostu przestaje szczypać w oczy. Brzmi jak drobiazg do momentu, w którym trzeba pokroić pięć cebul na bigos.",
        "Czosnek. Tu jest jedna praktyczna uwaga, której nikt nie mówi: dwa czy trzy ząbki wrzucone same do dużego naczynia potrafią uciec przed nożem i przykleić się do ścianek. Lepiej dodać je razem z cebulą albo z resztą składników. Wtedy jest dobrze.",
        "I uczciwe ostrzeżenie przed zakupem: zapach cebuli i czosnku lubi zostawać w silikonowej uszczelce. To normalne dla każdego sprzętu z uszczelką i nie jest usterką, ale zdarza się i wolę, żebyście wiedzieli o tym wcześniej. Jak dbać o urządzenie, mówi instrukcja producenta i tam odsyłam.",
        "Na koniec granica: nie napiszę Wam ani słowa o tym, że czosnek albo cebula na cokolwiek pomagają, ani nie podam żadnego przepisu na syrop z cebuli. Wiem, jak bardzo to jest u nas zakorzenione. Ale ja sprzedaję urządzenie kuchenne, nie lekarstwa.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Debrznie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Na spotkaniu pokażę Wam posiekaną cebulę i powiem szczerze, do czego się nadaje, a do czego nie. To zajmuje minutę i oszczędza późniejszego rozczarowania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Debrznie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla debrznieńskiej rodziny",
      paragraphs: [
        "Debrzno liczy nieco ponad cztery i pół tysiąca mieszkańców, a cała gmina ponad osiem. Prawa miejskie ma od 1354 roku — daty dziennej ani nadawcy nie podaję, bo źródła podają sam rok. To jedno z trzech miast powiatu człuchowskiego, obok Człuchowa i Czarnego; sama gmina liczy dwieście dwadzieścia cztery kilometry kwadratowe i trzydzieści cztery wsie i osady, wśród nich Uniechów, Strzeczonę, Stare i Nowe Gronowo, Cierznie i Myśligoszcz.",
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

  districtsHeading: "Do których części gminy Debrzno dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wsi gminy — Uniechowa, Strzeczony, Starego i Nowego Gronowa, Cierzni, Myśligoszczy, Słupi, Buki, Drozdowa i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Debrzno też przyjadę",
  nearbyParagraphs: [
    "Człuchów, Czarne, Chojnice, Złotów, Jastrowie i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Człuchów", "Czarne", "Chojnice", "Złotów", "Miastko"],

  about: blokOMnie("do Debrzna", "w Debrznie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Debrzna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Debrzno w powiecie człuchowskim w województwie pomorskim — miasto leży przy granicy z wielkopolskim i bywa mylnie przypisywane do powiatu złotowskiego. Warto też przy umawianiu doprecyzować, czy chodzi o samo miasto, czy o Debrzno-Wieś.",
    },
    ...faqWspolne("w Debrznie"),
    {
      question: "Czy posieka cebulę w równą kostkę?",
      answer:
        "Nie. Nóż uderza chaotycznie, więc wychodzi mieszanka drobniejszych i większych kawałków. Wszędzie tam, gdzie kostkę widać na talerzu — sałatka, śledź, surówka, tatar — bierzcie nóż i deskę.",
    },
    {
      question: "To kiedy warto siekać w nim cebulę?",
      answer:
        "Zawsze wtedy, gdy cebula i tak ma się rozpaść: zasmażka, sos, zupa, gulasz, farsz, leczo, pasta. Tam nierówności nie widać, a zysk czasu jest pełny. I znikają łzy, bo naczynie jest zamknięte — przy pięciu cebulach na bigos to nie jest drobiazg.",
    },
    {
      question: "Czy zapach cebuli i czosnku zostaje w urządzeniu?",
      answer:
        "Potrafi zostać w silikonowej uszczelce — to normalne dla każdego sprzętu z uszczelką i nie jest usterką, ale wolę uprzedzić przed zakupem. Jak dbać o urządzenie, mówi instrukcja producenta. I nie napiszę Wam, że czosnek na cokolwiek pomaga — sprzedaję sprzęt kuchenny, nie lekarstwa.",
    },
  ],

  geo: { lat: 53.5381, lng: 17.2364 },
};
