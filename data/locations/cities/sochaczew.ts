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
 * SOCHACZEW — miasto z muzeum kolei wąskotorowej. Wąski tor to inny
 * rozstaw niż sieć główna: dwa układy obok siebie, które trzeba było
 * spinać w jednym miejscu.
 *
 * KĄT: dwa różne talerze przy jednym stole. Dom, w którym ktoś je
 * zupełnie inaczej niż reszta — nie lubi, nie je czegoś, ma swoje
 * przyzwyczajenia — i codzienna logistyka gotowania dwóch rzeczy naraz.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — problemem nie jest ugotowanie dwóch rzeczy, tylko dwa razy ta sama
 *   robota: dwa garnki, dwa pilnowania, dwa zmywania,
 * — co realnie pomaga: Varoma pozwala zrobić drugą porcję nad tym samym
 *   naczyniem, a baza (sos, zupa) dzieli się przed doprawieniem,
 * — czego to NIE załatwia: nie pogodzi ludzi i nie sprawi, że ktoś
 *   zacznie jeść to, czego nie chce,
 * — i uczciwie: czasem sensowniejsze jest zwykłe „dziś jest to, co jest”.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD PRZY DIETACH ZALECONYCH PRZEZ LEKARZA, alergiach
 *   i nietolerancjach (zasada z Kwidzyna i Skierniewic).
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani oceniania, kto je „właściwie”.
 * — ŻADNYCH USTAWIEŃ z pamięci.
 *
 * ROZGRANICZENIE. Gdańsk mówi o tym, że jedno chce urządzenia, a drugie
 * nie. Radomsko o obiedzie o trzech różnych porach, Kwidzyn o brakującym
 * składniku. Tutaj chodzi o DWA RÓŻNE DANIA na jeden posiłek.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Sochaczewie działa muzeum kolei wąskotorowej, a wąski tor ma inny
 *   rozstaw szyn niż sieć normalnotorowa.
 */
export const SOCHACZEW: CityContent = {
  slug: "sochaczew",
  h1: "Thermomix Sochaczew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sochaczew — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sochaczewie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sochaczew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sochaczewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sochaczewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Sochaczew i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Dwie porcje z jednego naczynia — to akurat da się rozwiązać.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sochaczewie – jak wygląda prezentacja?",
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
      id: "dwa-talerze",
      heading: "Miasto dwóch rozstawów szyn — i dwa różne talerze przy jednym stole",
      paragraphs: [
        "W Sochaczewie stoi muzeum kolei wąskotorowej, a wąski tor to po prostu inny rozstaw szyn niż w sieci głównej: dwa układy istniejące obok siebie, które trzeba było spiąć w jednym miejscu, bo inaczej nic nie jechało dalej. Wykorzystam to do sytuacji, którą zna wiele domów, a której nie widać w żadnym materiale sprzedażowym: ktoś przy stole je zupełnie inaczej niż reszta.",
        "Powodów bywa mnóstwo i żadnego nie zamierzam oceniać. Dziecko, które nie tknie warzyw. Ktoś, kto nie je mięsa. Ktoś, kto od dwudziestu lat je pięć rzeczy i nie ma zamiaru tego zmieniać. To nie jest strona o tym, kto je właściwie, a jak ktoś ma dietę zaleconą przez lekarza albo alergię, to nie moja dziedzina i nie doradzam w niej w ogóle.",
        "Prawdziwy kłopot nie polega na ugotowaniu dwóch rzeczy, tylko na tym, że to jest dwa razy ta sama robota: dwa garnki, dwa razy pilnowanie, dwa razy zmywanie i dwa razy „już prawie”. Właśnie ta podwojona krzątanina wykańcza w środku tygodnia, a nie sam pomysł na drugie danie.",
        "Tu sprzęt naprawdę pomaga i powiem dokładnie jak. Varoma pozwala zrobić drugą porcję nad tym samym naczyniem, w którym powstaje pierwsze danie — jedno urządzenie pracuje na dwa talerze i myje się potem jedno. Druga rzecz to dzielenie bazy: sos albo zupa powstaje raz, a rozchodzi się na dwie wersje dopiero na końcu, przy doprawianiu. Obie rzeczy skracają nie gotowanie, tylko liczbę czynności, i to jest realna różnica.",
        "Czego to nie załatwi, mówię od razu. Nie pogodzi nikogo z nikim i nie sprawi, że ktoś zacznie jeść to, czego jeść nie chce. Nie jest też odpowiedzią na wszystko: bywają dni, kiedy uczciwsze i zdrowsze dla domu jest zwykłe „dziś jest to, co jest”, i nie ma w tym nic złego.",
        "Jeśli u Was tak właśnie wygląda obiad, powiedzcie mi to przy umawianiu. Ugotujemy na spotkaniu dwie wersje jednego dania i po prostu zobaczycie, ile z tej podwójnej roboty faktycznie znika, a ile zostaje.",
      ],
      links: [{ href: "/thermomix/funkcje", label: "Funkcje TM7" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sochaczewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz przy umawianiu, kto u Was czego nie je — przygotuję dwie wersje jednego dania zamiast jednej pokazowej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sochaczewie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sochaczewskiej rodziny",
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

  districtsHeading: "Do których części Sochaczewa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Stare Miasto",
    "Chodaków",
    "Trojanów",
    "Boryszew",
    "Rozlazłów",
    "Karwowo",
    "Żyrardowska",
  ],

  nearbyHeading: "Poza Sochaczew też przyjadę",
  nearbyParagraphs: [
    "Żyrardów, Wyszogród, Mszczonów i Teresin są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Żyrardów", "Wyszogród", "Mszczonów", "Łowicz", "Grodzisk Mazowiecki", "Warszawa"],

  about: blokOMnie("do Sochaczewa", "w Sochaczewie i okolicy", REGION_MAZOWSZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sochaczewa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Sochaczewie"),
    {
      question: "U nas jedna osoba je zupełnie co innego. Czy to pomoże?",
      answer:
        "W tej konkretnej rzeczy tak. Varoma pozwala zrobić drugą porcję nad tym samym naczyniem, w którym powstaje pierwsze danie, a bazę — sos czy zupę — robi się raz i dzieli dopiero przy doprawianiu. Znika nie tyle gotowanie, ile podwojona krzątanina: dwa garnki, dwa pilnowania, dwa zmywania.",
    },
    {
      question: "Podpowiesz, co gotować przy alergii albo diecie od lekarza?",
      answer:
        "Nie, w tej sprawie nie doradzam w ogóle. Nie jestem lekarką ani dietetyczką, a zła podpowiedź realnie komuś szkodzi. Mogę pomóc z logistyką dwóch talerzy, nie z tym, co ma być na którym.",
    },
  ],

  geo: { lat: 52.2294, lng: 20.2381 },
};
