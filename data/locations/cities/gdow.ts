import type { CityContent } from "../city-content";
import {
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
 * GDÓW — UWAGA: to WIEŚ i gmina WIEJSKA, nie miasto. W całym tekście nie
 * pada słowo „miasto” w odniesieniu do Gdowa i nie ma tu „osiedli”; są
 * sołectwa i przysiółki. To najczęstszy błąd przy pisaniu o tej gminie
 * i najłatwiejszy sposób, żeby stracić wiarygodność u kogoś stąd.
 *
 * Charakter: najludniejsza gmina wiejska powiatu wielickiego, rolnicza
 * (użytki rolne to zdecydowana większość powierzchni, gleby dobre),
 * praktycznie bez przemysłu, za to z bardzo silnym komponentem dojazdowym —
 * do Wieliczki, Krakowa, Niepołomic i Bochni. Tekst jest zbudowany wokół
 * tego połączenia: gospodarstwo albo ogród przy domu plus praca gdzie
 * indziej.
 *
 * Fakty użyte w tekście:
 * — 29 sołectw, skrzyżowanie dróg wojewódzkich 966 i 967 w centrum,
 * — Niegowić jako pierwsza parafia księdza Karola Wojtyły (1948–1949),
 * — kopiec upamiętniający bitwę pod Gdowem z 1846 r.,
 * — Dom Tadeusza Kantora w Hucisku — jedyny zrealizowany projekt
 *   architektoniczny artysty.
 * Sekcji kulinarnej NIE ma: żaden produkt z gminy nie figuruje na Liście
 * Produktów Tradycyjnych, więc „kuchnia gdowska” byłaby wymyślona.
 */
export const GDOW: CityContent = {
  slug: "gdow",
  h1: "Thermomix Gdów – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Gdów — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Gdów: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Gdów — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Gdowie lub w którymś z sołectw gminy. Bez dopłat za dojazd, bez zobowiązania.",

  lead:
    "Do Gdowa i do wszystkich sołectw gminy dojeżdżam bez dopłaty za dojazd. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina Gdów, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Prezentacja odbywa się u Ciebie — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Gdowie – jak wygląda prezentacja?",
      paragraphs: [
        "Sprzęt i produkty przywożę ze sobą, naczynia również, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — potrzebny jest wolny kawałek blatu i gniazdko, nic ponadto.",
        "Potem gotujemy razem. Powstaje obiad, coś słodkiego i zwykle jeszcze coś z tego, co masz w domu — a jeśli masz własne warzywa albo owoce, to najlepszy możliwy materiał na taki test. Napisz mi wcześniej, ile osób jada u Was i czego nie jecie.",
        "Na koniec liczby, podane wprost: cena, promocja obowiązująca w danym miesiącu i wysokość raty przy kilku okresach spłaty. Decyzja może zapaść tydzień później albo wcale — za samo spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Ziemia pod domem, praca gdzie indziej",
      paragraphs: [
        "Gmina Gdów jest rolnicza w bardzo dosłownym sensie — użytki rolne zajmują większość jej powierzchni, a gleby należą do dobrych. Jednocześnie przemysłu tu praktycznie nie ma, więc pracuje się w Wieliczce, w Niepołomicach, w Bochni albo w Krakowie. W jednym domu spotykają się więc dwie rzeczy: ogród albo pole tuż za progiem i etat trzydzieści kilometrów dalej.",
        "Dla kuchni oznacza to konkretny kłopot. Latem i jesienią warzyw i owoców jest naraz więcej, niż da się zjeść, a czasu na przerobienie ich — najmniej, bo dzień zaczyna się dojazdem i kończy powrotem. Część plonu marnuje się nie z braku chęci, tylko z braku wolnego popołudnia.",
        "Thermomix nie dokłada godzin do doby, ale zmienia charakter tej pracy. Przecier, dżem czy zupa krem powstają z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć — czyli bez konieczności stania przy garnku. Można nastawić i zająć się czymś innym, a to w praktyce decyduje o tym, czy coś w ogóle powstanie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Gdów?",
      paragraphs: [
        "Telefon albo SMS to najprostsza droga — zwykle wystarczy jedna wiadomość. Kto nie lubi dzwonić, może zostawić kontakt w formularzu na dole strony wraz z porą, o której wygodnie odebrać.",
        "Powiedz od razu, w którym sołectwie mieszkasz i ile osób będzie na spotkaniu. Gmina jest duża i rozciągnięta po obu stronach Raby — Niegowić, Pierzchów czy Zręczyce to zupełnie różne kierunki — więc konkret pozwala mi ułożyć trasę zamiast obiecywać godzinę na wyczucie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Gdowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Gdów",
      paragraphs: [
        "Domy są tu przeważnie własne, z kuchnią, w której jest miejsce, i często wielopokoleniowe. Gotuje się więc na więcej osób niż w mieszkaniu w mieście, a przy tym częściej od zera — bo produkty są pod ręką, a do sklepu jest dalej.",
        "Przy takim gotowaniu najbardziej męczy skala: większe garnki, więcej siekania, dłuższe mieszanie. Thermomix przejmuje dokładnie te czynności. Sieka, gotuje i miksuje w jednym naczyniu, więc znika też przekładanie gorących rzeczy i część zmywania.",
        "Jeśli w domu jest małe dziecko, Varoma pozwala zrobić dla niego porcję na parze równolegle z obiadem dla reszty — bez drugiego garnka i bez pilnowania dwóch rzeczy naraz.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-3-f0d591ef.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Warzywa z własnego ogrodu i obiad, którego nie trzeba pilnować.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których sołectw gminy Gdów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich. Za dojazd nie doliczam ani złotówki, niezależnie od tego, czy mieszkasz w samym Gdowie, w Niegowici, czy w Zborczycach.",
    "Gmina Gdów jest najludniejszą gminą wiejską w powiecie wielickim i ma dwadzieścia dziewięć sołectw rozłożonych po obu stronach Raby, na Pogórzu Wielickim i Wiśnickim. Jeśli Twojej miejscowości nie ma na liście, po prostu zapytaj — przy dalszych trasach umawiam kilka spotkań w jednym rejonie tego samego dnia.",
  ],
  districts: [
    "Gdów",
    "Niegowić",
    "Pierzchów",
    "Bilczyce",
    "Cichawa",
    "Czyżów",
    "Fałkowice",
    "Hucisko",
    "Jaroszówka",
    "Klęczana",
    "Krakuszowice",
    "Książnice",
    "Kunice",
    "Liplas",
    "Marszowice",
    "Niewiarów",
    "Nieznanowice",
    "Niżowa",
    "Podolany",
    "Stryszowa",
    "Szczytniki",
    "Świątniki Dolne",
    "Wiatowice",
    "Wieniec",
    "Winiary",
    "Zagórzany",
    "Zalesiany",
    "Zborczyce",
    "Zręczyce",
  ],

  nearbyHeading: "Poza gminą też przyjadę",
  nearbyParagraphs: [
    "W Gdowie krzyżują się drogi wojewódzkie prowadzące z Wieliczki w stronę Łapanowa i z Myślenic w stronę Bochni, więc jestem tu przejazdem częściej, niż wynikałoby z mapy. Okoliczne gminy obsługuję przy okazji.",
  ],
  nearbyTowns: [
    "Wieliczka",
    "Niepołomice",
    "Bochnia",
    "Dobczyce",
    "Łapanów",
    "Biskupice",
    "Raciechowice",
    "Myślenice",
    "Kraków",
  ],

  about: blokOMnie("do Gdowa", "w gminie Gdów, w Wieliczce i Bochni"),

  faq: [
    {
      question: "Czy przyjeżdżasz do Gdowa bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do Gdowa i do wszystkich sołectw gminy jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w gminie Gdów"),
    {
      question: "Czy dojeżdżasz do sołectw, na przykład do Niegowici albo Zręczyc?",
      answer:
        "Tak, do wszystkich dwudziestu dziewięciu sołectw. Przy umawianiu podaj miejscowość — gmina jest rozległa i leży po obu stronach Raby, więc trasę układam z wyprzedzeniem.",
    },
    {
      question: "Czy Thermomix nadaje się do przetworów z własnych warzyw i owoców?",
      answer:
        "Tak i w tej gminie to najczęstszy powód zakupu. Przeciery, dżemy, powidła i pasty robią się z ustawioną temperaturą i czasem, z mieszaniem, które nie pozwala przywrzeć do dna.",
    },
    {
      question: "Wracam z pracy dopiero wieczorem. Da się umówić późno?",
      answer:
        "Tak. Wieczory w tygodniu i sobotnie przedpołudnia to najczęściej wybierane terminy — podaj po prostu godzinę, o której realnie jesteś w domu.",
    },
  ],

  geo: { lat: 49.9072, lng: 20.1986 },
};
