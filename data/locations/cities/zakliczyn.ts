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
 * ZAKLICZYN — najmniejsze miasto w tym zestawie (samo miasto to niecałe
 * dwa tysiące osób) i największa powierzchniowo gmina, w dodatku
 * najbardziej rolnicza: blisko jedna trzecia pracujących w rolnictwie.
 * Do Krakowa jest stąd daleko (blisko 90 km), naturalnym kierunkiem jest
 * Tarnów. Tekst nie udaje więc, że to podkrakowska sypialnia.
 *
 * Fakty użyte w tekście:
 * — 23 sołectwa, gmina miejsko-wiejska; prawa miejskie odzyskane
 *   1 stycznia 2006 r. (lokacja 1557, utrata w 1934),
 * — rynek o wymiarach ok. 170 × 100 m, z ratuszem pośrodku — jeden
 *   z największych w Małopolsce (świadomie BEZ miejsca w rankingu:
 *   spotykane w przewodnikach „drugi po krakowskim” jest nie do obronienia,
 *   choćby wobec rynku w Nowym Sączu),
 * — zachowana drewniana zabudowa małomiasteczkowa z XVIII–XIX w.,
 * — Lusławice: dwór Jacka Malczewskiego, potem rezydencja Krzysztofa
 *   Pendereckiego z arboretum i Europejskie Centrum Muzyki,
 * — fasola „Piękny Jaś” z Doliny Dunajca ze statusem ChNP — gmina Zakliczyn
 *   leży w obszarze objętym rejestracją; zakliczyński sok malinowy na
 *   ministerialnej Liście Produktów Tradycyjnych; coroczny Festiwal Fasoli.
 */
export const ZAKLICZYN: CityContent = {
  slug: "zakliczyn",
  h1: "Thermomix Zakliczyn – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Zakliczyn — prezentacja i cena",
  seoDescription:
    "Thermomix w Zakliczynie: bezpłatna prezentacja TM7 u Ciebie w domu, bez dopłaty za dojazd. Aktualna cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zakliczyn — przyjeżdżam do Ciebie, prezentacja bezpłatna",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zakliczynie lub w którymś z sołectw gminy. Bez dopłat za dojazd, bez zobowiązania.",

  lead:
    "Do Zakliczyna i całej gminy dojeżdżam bez dopłaty za dojazd — także do dalszych sołectw nad Dunajcem. Przywożę Thermomix TM7, gotujemy razem u Ciebie w kuchni i spokojnie liczymy, ile to naprawdę kosztuje. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("Zakliczyn i cała gmina, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Prezentacja odbywa się u Ciebie — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zakliczynie – jak wygląda prezentacja?",
      paragraphs: [
        "Wszystko przywożę ze sobą — urządzenie, produkty i naczynia, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz; wystarczy wolny kawałek blatu i gniazdko.",
        "Potem gotujemy razem, przez jakieś dwie godziny. Powstaje obiad, coś słodkiego i najchętniej jeszcze coś z Twoich własnych produktów — w tej okolicy zwykle znaczy to warzywa, owoce albo fasolę, i właśnie na nich najlepiej widać, czy to urządzenie ma u Ciebie sens. Uprzedź mnie, ile osób jada w domu i czego nie jecie.",
        "Na koniec siadamy do liczb: aktualna cena, dostępna promocja i wysokość raty. „Dziękuję, przemyślę” jest pełnoprawną odpowiedzią i nic za spotkanie nie płacisz. Do Zakliczyna jest z mojej strony kawałek drogi i to jest wyłącznie mój problem, nie Twój.",
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
      heading: "Gmina, w której rolnictwo to nadal zawód",
      paragraphs: [
        "Zakliczyn jest jedną z największych powierzchniowo gmin powiatu tarnowskiego i przy tym rzadko zaludnioną: dwadzieścia trzy sołectwa rozrzucone po pogórzu i nad Dunajcem, a w samym mieście niecałe dwa tysiące osób. Rolnictwo jest tu nadal zawodem, a nie wspomnieniem — i pod tym względem gmina wyraźnie odstaje od reszty miejsc, do których dojeżdżam.",
        "Kuchnia w takim domu wygląda inaczej niż w bloku. Produkty są z pola albo od sąsiada, gotuje się od zera, a największym wrogiem nie jest brak przepisu, tylko sezon — moment, w którym wszystko dojrzewa naraz i trzeba to przerobić w kilka tygodni. Fasola, którą trzeba namoczyć i długo gotować, maliny, które trzeba przetworzyć tego samego dnia, warzywa na zimę.",
        "Thermomix jest tu narzędziem do tej właśnie roboty. Długie gotowanie z ustawioną temperaturą i mieszaniem, które nie pozwala przywrzeć, przeciery i musy bez stania nad garnkiem, szatkowanie w kilkanaście sekund zamiast w kwadrans. Nie zastąpi gospodarstwa, ale zdejmuje z sezonu tę część, która polega wyłącznie na pilnowaniu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zakliczynie?",
      paragraphs: [
        "Najprościej telefonem — zadzwoń albo napisz SMS. Jeśli wolisz nie dzwonić, wypełnij formularz na dole tej strony, a ja oddzwonię o wskazanej porze.",
        "Powiedz od razu, w której miejscowości mieszkasz. Gmina jest bardzo rozległa — Paleśnica, Jamna czy Ruda Kameralna to inny świat dojazdowy niż sam Zakliczyn — a ja i tak jadę tu z daleka, więc zwykle umawiam kilka spotkań w tym samym rejonie jednego dnia. Dzięki temu termin bywa nieco późniejszy, ale za to pewny.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zakliczynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z gminy Zakliczyn",
      paragraphs: [
        "Domy są tu własne, z ogrodem, często wielopokoleniowe, a do najbliższego dużego sklepu jedzie się do Tarnowa. Gotuje się więc dużo, na więcej osób i rzadziej z gotowców — nie z wyboru ideologicznego, tylko dlatego, że tak jest po prostu praktyczniej.",
        "Przy takim gotowaniu Thermomix oszczędza więcej czasu niż w domu, który głównie odgrzewa, bo przejmuje obróbkę wstępną: obieranie zostaje, ale siekanie, szatkowanie, tarcie i ucieranie znikają. Zupa krem powstaje w jednym naczyniu, ciasto wyrabia się samo, kasza nie przypala się do dna.",
        "Przy małym dziecku Varoma pozwala zrobić porcję na parze równolegle z obiadem dla reszty domu — w jednym urządzeniu, bez pilnowania dwóch garnków.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Produkty z własnego ogrodu i obiad, którego nie trzeba pilnować.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Zakliczyn, fasola i maliny",
    paragraphs: [
      "Gmina Zakliczyn leży w obszarze objętym unijną Chronioną Nazwą Pochodzenia dla fasoli „Piękny Jaś” z Doliny Dunajca — to nie jest hasło promocyjne, tylko rejestracja z konkretną specyfikacją i wyznaczonym terenem. Co roku odbywa się tu Festiwal Fasoli, a na ministerialnej Liście Produktów Tradycyjnych jest też zakliczyński sok malinowy.",
      "Obie te rzeczy mają jedną wspólną cechę: wymagają cierpliwości, nie umiejętności. Fasolę trzeba namoczyć i gotować długo, powoli i tak, żeby nie rozpadła się ani nie przywarła. Sok i przetwory z malin trzeba doprowadzić do właściwej temperatury i pilnować, żeby nie wykipiały. To jest praca polegająca na obecności przy garnku.",
      "Dokładnie tę część przejmuje Thermomix — ustawiona temperatura, ustawiony czas, mieszanie, którego nie trzeba robić ręką. Namoczona fasola gotuje się bez nadzoru, a przecier nie przypala się do dna, choć nikt przy nim nie stoi. Jeśli chcesz, na prezentacji ugotujemy coś właśnie z tej półki zamiast standardowego zestawu.",
    ],
  },

  districtsHeading: "Gdzie w gminie Zakliczyn dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — do miasta i do wszystkich dwudziestu trzech sołectw, także tych dalej położonych. Za dojazd nie doliczam ani złotówki.",
    "Zakliczyn ma jeden z największych rynków w Małopolsce, z ratuszem pośrodku, a wokół zachowaną drewnianą zabudowę małomiasteczkową. Dla samej prezentacji nie ma to znaczenia — wystarczy blat i gniazdko — ale dla trasy ma, bo gmina jest rozległa; podaj przy umawianiu miejscowość.",
  ],
  districts: [
    "Zakliczyn — rynek i centrum",
    "Bieśnik",
    "Borowa",
    "Charzewice",
    "Dzierżaniny",
    "Faliszewice",
    "Faściszowa",
    "Filipowice",
    "Gwoździec",
    "Jamna",
    "Kończyska",
    "Lusławice",
    "Melsztyn",
    "Olszowa",
    "Paleśnica",
    "Roztoka",
    "Ruda Kameralna",
    "Słona",
    "Stróże",
    "Wesołów",
    "Wola Stróska",
    "Wróblowice",
    "Zawada Lanckorońska",
    "Zdonia",
  ],

  nearbyHeading: "Dolina Dunajca i okolica",
  nearbyParagraphs: [
    "Dojeżdżam też do sąsiednich gmin — w stronę Czchowa i Gródka nad Dunajcem na zachód, Gromnika i Ciężkowic na południe oraz Wojnicza i Tarnowa na północ. To dalsze trasy, więc umawiam na nich kilka spotkań tego samego dnia.",
  ],
  nearbyTowns: [
    "Wojnicz",
    "Czchów",
    "Gromnik",
    "Ciężkowice",
    "Gródek nad Dunajcem",
    "Korzenna",
    "Pleśna",
    "Dębno",
    "Tarnów",
    "Brzesko",
  ],

  about: blokOMnie("do Zakliczyna", "w Zakliczynie, Wojniczu i Tarnowie"),

  faq: [
    {
      question: "Czy naprawdę dojeżdżasz aż do Zakliczyna bez dopłaty?",
      answer:
        "Tak. Dojazd do Zakliczyna i wszystkich sołectw gminy jest bezpłatny, tak samo jak sama prezentacja. Odległość jest moim problemem, nie Twoim — jedyne, o co proszę, to trochę elastyczności przy ustalaniu terminu.",
    },
    ...faqWspolne("w Zakliczynie"),
    {
      question: "Czy dojeżdżasz do dalszych sołectw, na przykład do Paleśnicy albo Jamnej?",
      answer:
        "Tak, do wszystkich dwudziestu trzech sołectw. Przy umawianiu podaj miejscowość — na tym terenie planuję trasę z wyprzedzeniem i zwykle łączę kilka spotkań w jednym rejonie.",
    },
    {
      question: "Czy Thermomix poradzi sobie z fasolą „Piękny Jaś”?",
      answer:
        "Tak. Namoczoną fasolę gotuje długo i powoli z ustawioną temperaturą, z delikatnym mieszaniem, które nie pozwala przywrzeć do dna — czyli dokładnie tak, jak trzeba, i bez stania przy garnku.",
    },
    {
      question: "A przetwory z malin i innych owoców?",
      answer:
        "Tak, to jedno z najczęstszych zastosowań w tej okolicy. Soki, przeciery i dżemy powstają z ustawioną temperaturą i czasem, bez pilnowania, żeby nie wykipiało ani nie przywarło.",
    },
  ],

  geo: { lat: 49.8558, lng: 20.8093 },
};
