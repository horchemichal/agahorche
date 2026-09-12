import type { CityContent } from "../city-content";
import {
  REGION_WARMIA_MAZURY,
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
 * MIŁAKOWO — gmina miejsko-wiejska w powiecie ostródzkim.
 * MIASTO 2 385, GMINA 4 903 (GUS 31.12.2024).
 * ⚠ Notatka projektowa podawała 2 500 — ZAWYŻONE.
 * LICZBY SOŁECTW NIE PODAJĘ — nie potwierdzono.
 *
 * PRAWA MIEJSKIE UTRACONE w 1945 r., PRZYWRÓCONE
 * 1 STYCZNIA 1998 r. PRZERWA 53 LATA — NAJDŁUŻSZA
 * W CAŁYM WOJEWÓDZTWIE spośród miast, które prawa odzyskały.
 * TO JEST PODSTAWA KĄTA.
 * MURY OBRONNE — 1360 r.
 * PRZYNALEŻNOŚĆ: POGEZANIA / PRUSY GÓRNE (Hockerlandia).
 * ⚠ TO NIE JEST WARMIA. NIE PISZĘ „na Warmii”.
 * RZEKA MIŁAKÓWKA.
 * JEZIORO WUKSNIKI — 67,3 m głębokości, I klasa czystości,
 * obszar Natura 2000. ⚠ DWIE PISOWNIE W ŹRÓDŁACH:
 * Wuksniki / Wukśniki. Używam „Wuksniki” konsekwentnie.
 * MIŁAKOWO NIE NALEŻY DO CITTASLOW.
 *
 * KĄT: ZWYKŁY WTOREK — GOTOWANIE BEZ OKAZJI.
 * Kąt od miasta, które przez 53 lata było wsią i wróciło
 * do bycia miastem — najdłuższa taka przerwa w regionie.
 * Miejsce, które długo funkcjonowało „zwyczajnie”, bez
 * statusu i bez okazji.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że cała kultura mówienia o gotowaniu jest zbudowana
 *   wokół okazji: świąt, gości, weekendu, „czegoś specjalnego”,
 * — a 90% gotowania to zwykły wtorek, kiedy nikt nie przychodzi
 *   i nikt nie oceni,
 * — że wtorek ma inne kryteria niż niedziela: ma być zjedzone,
 *   ma się nie zmarnować, ma nie zabrać całego wieczoru,
 * — że ludzie kupują sprzęt myśląc o niedzieli, a używają
 *   go we wtorek — i że to jest właściwa miara,
 * — że pytanie „czy to się opłaca” trzeba liczyć na wtorkach,
 *   nie na świętach,
 * — UCZCIWIE: na wielkie wypieki i okazje sprzęt też się
 *   przydaje, ale to nie tam się zwraca,
 * — i że jeśli ktoś gotuje wyłącznie od święta, powinien
 *   dwa razy pomyśleć przed zakupem.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH LICZB OSZCZĘDNOŚCI ANI WYLICZEŃ ZWROTU.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 *
 * ⚠ ETYKA — WARMIŃSKO-MAZURSKIE:
 * — NIE UŻYWAM niemieckiej nazwy miasta (Liebstadt).
 * — ZERO roku 1945, zniszczeń i wysiedleń. W szczególności
 *   NIE CYTUJĘ „zniszczone w 50% w 1945”. Utratę praw
 *   miejskich podaję jako fakt administracyjny, bez przyczyny.
 * — ZERO Napoleona i pobytu wojsk w styczniu 1807 —
 *   kontekst militarny, pomijam.
 * — ZERO cmentarzy i pomników.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Danie, które może
 * poczekać” (Kamieńsk) dotyczy odgrzewania. „Synchronizacja
 * obiadu” (Biała Piska) dotyczy zgrywania w czasie. „Wszystko
 * przygotowane przed startem” (Sulejów) dotyczy mise en place.
 * Tutaj chodzi o CZĘSTOTLIWOŚĆ I OKAZJĘ: dla czyjego dnia
 * właściwie kupuje się sprzęt.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE WYMIENIAM zabytków miasta — poza murami z 1360 r.
 *   nie potwierdzono praktycznie żadnych.
 * — NIE PODAJĘ liczby sołectw.
 * — NIE PODAJĘ roku lokacji — źródła są niezgodne.
 * — NIE PRZYPISUJĘ Miłakowu produktu z Listy Produktów
 *   Tradycyjnych — nie ma takiego.
 * — NIE PISZĘ, że Miłakowo leży na Warmii — nie leży.
 * — NIE MYLĘ Miłakowa z MIŁOMŁYNEM ani z MIŁKAMI.
 *   FAQ to rozróżnia.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 2 385, gmina 4 903 mieszkańców,
 * — prawa miejskie przywrócone 1 stycznia 1998 r. po 53 latach
 *   przerwy — najdłuższej w województwie,
 * — mury obronne z 1360 r.,
 * — Miłakowo leży w Prusach Górnych (historyczna Pogezania),
 *   nie na Warmii,
 * — rzeka Miłakówka,
 * — jezioro Wuksniki: 67,3 m głębokości, pierwsza klasa
 *   czystości, obszar Natura 2000.
 */
export const MILAKOWO: CityContent = {
  slug: "milakowo",
  h1: "Thermomix Miłakowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Miłakowo — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Miłakowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Miłakowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Miłakowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Miłakowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Miłakowo i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sprzęt kupuje się z myślą o niedzieli, a używa we wtorek.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Miłakowie – jak wygląda prezentacja?",
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
      id: "zwykly-wtorek",
      heading: "Pięćdziesiąt trzy lata bez tytułu — czyli o gotowaniu bez okazji",
      paragraphs: [
        "Miłakowo straciło prawa miejskie w połowie dwudziestego wieku i odzyskało je dopiero 1 stycznia 1998 roku. Pięćdziesiąt trzy lata przerwy — najdłuższa w całym województwie spośród miejscowości, które status miasta w końcu odzyskały. Przez ponad pół wieku Miłakowo po prostu było: ludzie mieszkali, pracowali i gotowali obiady, a to, jak się miejscowość nazywa w papierach, niczego w tym nie zmieniało.",
        "To jest, moim zdaniem, dobre miejsce na najbardziej niedocenione pytanie o kuchnię: dla którego dnia właściwie gotujecie.",
        "Bo cała kultura mówienia o gotowaniu jest zbudowana wokół okazji. Święta. Goście. Niedzielny obiad. „Coś specjalnego”. Zdjęcia, przy których ktoś ustawiał talerz. A prawda jest taka, że dziewięć dziesiątych gotowania to zwykły wtorek, kiedy nikt nie przychodzi, nikt tego nie oceni i nikt nie zrobi zdjęcia.",
        "Wtorek ma zupełnie inne kryteria niż niedziela. W niedzielę liczy się, żeby było dobre i żeby zrobiło wrażenie. We wtorek liczy się, żeby zostało zjedzone, żeby się nie zmarnowało i żeby nie zabrało całego wieczoru. To są trzy różne rzeczy i żadna z nich nie ma nic wspólnego z efektem.",
        "I tu jest cała rzecz ze sprzętem. Ludzie kupują go, myśląc o niedzieli — o cieście, o zupie dla gości, o tym jednym daniu, które chcieliby wreszcie umieć. A używają go we wtorek: kolacja, pasta do chleba, zupa z tego, co zostało, coś dla dziecka. Miara, która ma sens, to nie „czy zrobię na tym imponujący obiad”, tylko „ile razy w tygodniu to włączę”.",
        "Dlatego kiedy ktoś pyta mnie, czy to się opłaca, zawsze liczę na wtorkach. Nie na świętach. Święta są cztery razy w roku, wtorków jest pięćdziesiąt dwa i to one decydują, czy sprzęt stoi na blacie, czy w szafce.",
        "Powiem też uczciwie drugą stronę. Na wielkie wypieki, na dwadzieścia porcji pasztetu, na wigilijne przygotowania to urządzenie też się bardzo przydaje i wtedy widać je najbardziej. Ale nie tam się zwraca. Zwraca się w te dni, o których nikt nie opowiada.",
        "Z tego wynika rada, którą rzadko usłyszycie od kogoś, kto sprzedaje: jeśli ktoś gotuje wyłącznie od święta, a przez tydzień jada poza domem albo odgrzewa gotowe, niech dwa razy pomyśli. Sprzęt nie stworzy nawyku, którego nie ma. Wzmacnia ten, który już jest.",
      ],
      links: [
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
        { href: "/przepisy", label: "Przepisy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Miłakowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, jak wygląda u Was zwykły tydzień, a nie zwykła niedziela. Na tej podstawie potrafię powiedzieć znacznie więcej niż na podstawie listy świątecznych dań.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Miłakowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla miłakowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy niecałe dwa tysiące czterysta mieszkańców, a cała gmina niespełna pięć tysięcy. Miłakowo leży w Prusach Górnych, w historycznej Pogezanii — to nie jest Warmia, choć bywa tak opisywane. Mury obronne wzniesiono tu w 1360 roku, przez miasto płynie Miłakówka, a w gminie leży jezioro Wuksniki: ponad sześćdziesiąt siedem metrów głębokości, pierwsza klasa czystości i obszar Natura 2000. Prawa miejskie miasto odzyskało 1 stycznia 1998 roku, po pięćdziesięciu trzech latach przerwy.",
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

  districtsHeading: "Do których części gminy Miłakowo dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Miłakowo też przyjadę",
  nearbyParagraphs: [
    "Morąg, Orneta, Dobre Miasto i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Morąg", "Orneta", "Dobre Miasto", "Lidzbark Warmiński"],

  about: blokOMnie("do Miłakowa", "w Miłakowie i całej gminie", REGION_WARMIA_MAZURY),

  faq: [
    {
      question: "Czy dojeżdżasz do Miłakowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo nazwy bywają mylone: Miłakowo w powiecie ostródzkim to nie Miłomłyn i nie Miłki. To trzy różne miejscowości.",
    },
    ...faqWspolne("w Miłakowie"),
    {
      question: "Czy Thermomix opłaca się, jeśli gotuję głównie od święta?",
      answer:
        "Szczerze: raczej nie. To urządzenie zwraca się w zwykłe wtorki, a nie w Wigilię. Na wielkie wypieki i przygotowania świąteczne też bardzo się przydaje, ale cztery okazje w roku nie wystarczą. Jeśli przez tydzień jadacie poza domem albo odgrzewacie gotowe, warto dwa razy pomyśleć przed zakupem — sprzęt nie stworzy nawyku, którego nie ma.",
    },
    {
      question: "Jak sprawdzić, czy Thermomix będzie mi się przydawał?",
      answer:
        "Policzcie nie dania, tylko dni. Ile razy w tygodniu ktoś u Was staje przy kuchence i coś przygotowuje od zera. Ta liczba mówi więcej niż jakikolwiek przepis, który mogłabym pokazać.",
    },
    {
      question: "Czy Miłakowo leży na Warmii?",
      answer:
        "Nie. Miłakowo leży w Prusach Górnych, na terenie historycznej Pogezanii, choć w wielu opisach bywa dołączane do Warmii. Granica historyczna przebiega dalej na wschód.",
    },
  ],

  geo: { lat: 53.9958, lng: 20.0906 },
};
