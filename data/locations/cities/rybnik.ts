import type { CityContent } from "../city-content";
import {
  REGION_SLASKIE,
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
 * RYBNIK — miasto, które na papierze ma sto trzydzieści tysięcy
 * mieszkańców, a w praktyce składa się w dużej części z dawnych wsi
 * z domami i ogrodami. To zupełnie inna sytuacja kuchenna niż
 * w konurbacji: tu problemem nie jest brak miejsca na blacie, tylko
 * nadmiar warzyw i owoców w sezonie oraz dojazd do pracy w innym mieście.
 *
 * Rybnik jest też stolicą subregionu zachodniego — Żory, Jastrzębie
 * i Wodzisław ciążą tutaj, a nie do Katowic. Strona ma to odzwierciedlać
 * w linkowaniu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Rybnik ma 27 dzielnic, z których wiele to dawne samodzielne wsie
 *   przyłączone do miasta w XX wieku,
 * — miasto jest ośrodkiem subregionu zachodniego województwa śląskiego,
 * — Rybnik leży w Rybnickim Okręgu Węglowym; górnictwo pozostaje ważnym
 *   pracodawcą, a praca zmianowa jest tu powszechna,
 * — Zalew Rybnicki to duży zbiornik wodny przy elektrowni,
 * — Kamień i Golejów to dzielnice o charakterze rekreacyjnym i leśnym.
 *
 * CZEGO NIE MA: liczby zatrudnionych w kopalniach, danych o wydobyciu,
 * powierzchni zalewu podanej jako fakt.
 */
export const RYBNIK: CityContent = {
  slug: "rybnik",
  h1: "Thermomix Rybnik – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Rybnik — prezentacja i cena",
  seoDescription:
    "Thermomix w Rybniku: bezpłatna prezentacja TM7 u Ciebie w kuchni, wszystkie dzielnice. Cena, raty 0%, terminy też dla pracujących zmianowo. Aga, 517 185 691.",
  ogTitle: "Thermomix Rybnik — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rybniku. Prezentacja bezpłatna, ratę liczymy na miejscu, decyzja należy do Ciebie.",

  lead:
    "Przyjeżdżam do Rybnika z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu i we wszystkich dzielnicach, także tych, które do dziś wyglądają jak wieś. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cały Rybnik, wszystkie dzielnice"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rybniku – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy realnie: obiad, coś słodkiego i chętnie coś z tego, co masz w domu albo w ogrodzie. Powiedz mi wcześniej, ile osób siada u Was do stołu, a dobiorę dania pod Was.",
        "Na koniec liczby: cena, promocja i rata przy kilku okresach spłaty. Nie musisz decydować tego samego dnia i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "miasto-z-ogrodami",
      heading: "Miasto z ogrodami — czyli sierpień jest tu problemem",
      paragraphs: [
        "Rybnik jest miastem tylko na papierze jednolitym. Z dwudziestu siedmiu dzielnic spora część to dawne wsie przyłączone w XX wieku i do dziś wyglądające jak wieś: domy, obejścia, ogrody, drzewa owocowe. To zupełnie inna sytuacja niż w bloku w Katowicach.",
        "Kuchenna konsekwencja jest bardzo konkretna i widać ją co roku w sierpniu: nadmiar. Śliwki, jabłka, pomidory, cukinia — wszystko naraz i wszystko trzeba przerobić w kilka dni, zwykle po pracy. Robienie przetworów w garnku oznacza sobotę spędzoną przy kuchence i mieszanie, żeby nie przywarło.",
        "Thermomix zdejmuje dokładnie tę część. Przecier, dżem czy powidła gotują się z ustawioną temperaturą i mieszaniem — nie trzeba przy tym stać i nie ma ryzyka, że dno się przypali, bo ktoś odszedł na dziesięć minut. Na prezentacji chętnie pokażę to na tym, co akurat masz w ogrodzie.",
      ],
    },
    {
      id: "zmiany",
      heading: "Dom, w którym obiad czeka na kogoś wracającego ze zmiany",
      paragraphs: [
        "Rybnik leży w Rybnickim Okręgu Węglowym i praca zmianowa jest tu normą, a nie wyjątkiem. W wielu domach oznacza to trzy różne pory posiłku i osobę, która gotuje, choć sama zje dopiero za sześć godzin.",
        "Thermomix nadaje się do tego, bo nie wymaga obecności. Danie może powstać rano i czekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. Dla kogoś, kto wraca po nocce, różnica między odgrzanym a wysuszonym obiadem jest bardzo realna.",
        "Przy umawianiu spotkania działa to tak samo: umawiam się przed południem w dni robocze, wieczorami i w weekendy. Powiedz, kiedy jesteś w domu, a nie kiedy jest „normalna pora”.",
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rybniku"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rybnickiej rodziny",
      paragraphs: [
        "W rybnickich dzielnicach rodziny bywają większe niż w centrum konurbacji, a obiad częściej jest wspólnym posiłkiem niż serią indywidualnych talerzy. Wąskim gardłem jest wtedy nie brak miejsca, tylko czas — i to, że ktoś musi ten obiad zrobić po powrocie z pracy.",
        "Thermomix pomaga tu brakiem konieczności pilnowania: gotuje i miksuje w jednym naczyniu, z ustawioną temperaturą, więc może pracować, gdy Ty robisz coś innego. Po zupie nie zostaje garnek, blender i sitko.",
        "Przy małym dziecku dochodzi Varoma — porcja na parze powstaje równolegle z obiadem dla dorosłych, w tym samym urządzeniu i w tym samym czasie.",
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

  districtsHeading: "Do których dzielnic Rybnika dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich dwudziestu siedmiu, bez dopłaty za dojazd — także do tych, które leżą daleko od centrum i wyglądają jak osobna wieś.",
    "Przy umawianiu wystarczy podać dzielnicę. Stodoły czy Ochojec to inny kierunek niż Boguszowice, a od tego zależy tylko pora spotkania.",
  ],
  districts: [
    "Śródmieście",
    "Maroko-Nowiny",
    "Smolna",
    "Meksyk",
    "Paruszowiec-Piaski",
    "Zamysłów",
    "Zebrzydowice",
    "Ligota-Ligocka Kuźnia",
    "Niedobczyce",
    "Niewiadom",
    "Radziejów",
    "Popielów",
    "Boguszowice Osiedle",
    "Boguszowice Stare",
    "Gotartowice",
    "Kłokocin",
    "Chwałowice",
    "Rybnicka Kuźnia",
    "Golejów",
    "Wielopole",
    "Ochojec",
    "Stodoły",
    "Grabownia",
    "Chwałęcice",
    "Orzepowice",
    "Kamień",
    "Kamienna Ligota",
  ],

  nearbyHeading: "Cały subregion zachodni",
  nearbyParagraphs: [
    "Rybnik jest naturalnym środkiem tej części województwa — Żory, Jastrzębie-Zdrój, Wodzisław i Racibórz ciążą tutaj, a nie do Katowic. Jeżdżę do wszystkich na tych samych zasadach, a jedna trasa obsługuje kilka spotkań.",
  ],
  nearbyTowns: [
    "Żory",
    "Jastrzębie-Zdrój",
    "Wodzisław Śląski",
    "Racibórz",
    "Knurów",
    "Czerwionka-Leszczyny",
    "Pszów",
    "Rydułtowy",
  ],

  about: blokOMnie("do Rybnika", "w Rybniku i całym subregionie zachodnim", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rybnika bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Rybnika i do sąsiednich miast subregionu jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Rybniku"),
    {
      question: "Czy Thermomix nadaje się do przetworów z ogrodu?",
      answer:
        "Tak i to jest jeden z częstszych powodów zakupu w tej okolicy. Przeciery, dżemy i powidła robią się z ustawioną temperaturą i czasem, z mieszaniem, które nie pozwala przywrzeć do dna — czyli bez tej części, przez którą przetwory zajmują całą sobotę.",
    },
    {
      question: "Pracuję na zmiany — czy umówisz się przed południem?",
      answer:
        "Tak, robię to często. Powiedz przy ustalaniu terminu, kiedy realnie jesteś w domu, a dopasuję godzinę.",
    },
    {
      question: "Czy przyjedziesz do Stodół albo Kamienia?",
      answer:
        "Tak, do każdej dzielnicy — również tych położonych przy lesie i daleko od centrum. Nie doliczam za to ani złotówki.",
    },
  ],

  geo: { lat: 50.0921, lng: 18.5461 },
};
