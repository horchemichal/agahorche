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
 * KNURÓW — małe miasto między Gliwicami a Rybnikiem, które wyrosło wokół
 * kopalni i do dziś jest z nią związane. Osiedla powstawały tu dla
 * pracowników, więc sąsiedzi bardzo często pracują w tym samym miejscu
 * i chodzą na te same zmiany.
 *
 * KĄT: to jest miasto jednego rytmu. W dużym mieście praca zmianowa
 * rozbija dom — każdy je o innej porze. W Knurowie działa to inaczej:
 * skoro pół klatki schodowej ma tę samą zmianę, to całe osiedle je
 * mniej więcej wtedy samo. I stąd druga, bardzo konkretna rzecz, której
 * nie ma nigdzie indziej w tej fali: JEDZENIE ZABIERANE DO PRACY.
 * Śniadaniówka na dół albo do hali to nie kaprys, tylko codzienność —
 * a to zupełnie inne wymagania niż obiad na talerzu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Knurów rozwinął się wokół górnictwa i należy do powiatu gliwickiego,
 * — miasto leży między Gliwicami a Rybnikiem, przy trasie łączącej
 *   obie części regionu,
 * — osiedla mieszkaniowe budowano tu dla pracowników zakładów,
 * — historyczna Kolonia Robotnicza w Knurowie to zabytkowe osiedle
 *   patronackie,
 * — dzielnice: Krywałd, Szczygłowice, Farskie Pola, Wojska Polskiego.
 *
 * CZEGO NIE MA: liczby zatrudnionych, danych o wydobyciu, twierdzeń
 * o harmonogramach zmian w konkretnych zakładach.
 */
export const KNUROW: CityContent = {
  slug: "knurow",
  h1: "Thermomix Knurów – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Knurów — prezentacja i cena",
  seoDescription:
    "Thermomix w Knurowie: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie osiedla. Cena, raty 0%, terminy też dla pracujących zmianowo. Aga, 517 185 691.",
  ogTitle: "Thermomix Knurów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Knurowie. Prezentacja bezpłatna, terminy też przed południem.",

  lead:
    "Przyjeżdżam do Knurowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w centrum, na Szczygłowicach, Krywałdzie czy Farskich Polach. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cały Knurów, wszystkie osiedla"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Knurowie – jak wygląda prezentacja?",
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
      id: "sniadaniowka",
      heading: "Jedzenie zabierane do pracy — osobne zadanie, nie skrót od obiadu",
      paragraphs: [
        "W Knurowie jedzenie bardzo często wychodzi z domu razem z człowiekiem. Śniadaniówka na zmianę to nie kaprys, tylko codzienność — i to zupełnie inne zadanie niż obiad na talerzu. Musi wytrzymać kilka godzin, dać się zjeść bez ceregieli, nie rozlać się w torbie i smakować także wtedy, gdy jest tylko odgrzane w mikrofalówce albo w ogóle zimne.",
        "Większość poradników o tym nie pisze, bo mówi o „szybkim obiedzie dla rodziny”. A tu pytanie brzmi: co spakować, żeby po sześciu godzinach nadal było jedzeniem, a nie kompromisem.",
        "Thermomix pomaga tu w rzeczach bardzo konkretnych. Gęste zupy i kremy — do termosu, gotowe rano bez pilnowania. Pasty kanapkowe z jajek, twarogu, pieczonego mięsa albo warzyw — kilkanaście sekund, jedno naczynie i starczają na kilka dni. Sosy i dipy, które robią różnicę między suchą kanapką a normalnym posiłkiem. I ciasto — bo drożdżowe wyrobione wieczorem to najlepsza rzecz, jaka może trafić do torby.",
        "Na prezentacji chętnie zrobimy właśnie to, jeśli tak wygląda Wasz dzień. Powiedz przy umawianiu, co zwykle zabierasz do pracy — od tego zacznę.",
      ],
    },
    {
      id: "jeden-rytm",
      heading: "Miasto jednego rytmu",
      paragraphs: [
        "Knurów wyrósł wokół zakładu i osiedla budowano tu dla pracowników. Do dziś oznacza to coś, czego nie ma w dużym mieście: sąsiedzi bardzo często pracują w tym samym miejscu i chodzą na te same zmiany. Pół klatki schodowej wraca o tej samej porze i pół klatki je o tej samej porze.",
        "Praktycznie ma to jedną miłą konsekwencję. W Knurowie wyjątkowo dobrze sprawdzają się prezentacje w kilka osób — bo skoro sąsiadki mają wolne w tych samych godzinach, łatwiej znaleźć jeden dobry termin niż trzy osobne. Jeśli ktoś z Waszej klatki też chce zobaczyć urządzenie, powiedzcie od razu.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Knurowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Jeśli pracujesz zmianowo, napisz od razu, kiedy realnie jesteś w domu — umawiam się też przed południem w dni robocze.",
        "Możesz też zostawić kontakt w formularzu i dopisać, o której oddzwonić.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Knurowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla knurowskiej rodziny",
      paragraphs: [
        "Gdy w domu ktoś pracuje na zmiany, obiad musi umieć poczekać — czasem kilka godzin, czasem do następnego dnia. To zwykle spada na jedną osobę, która gotuje o porze niewygodnej dla siebie.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i czekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka. Dla kogoś, kto wraca po nocce, ta różnica jest bardzo realna.",
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

  districtsHeading: "Do których dzielnic Knurowa dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Miasto jest niewielkie, więc dojazd nie wpływa nawet na porę spotkania — wystarczy, że powiesz, gdzie mieszkasz i na którym piętrze.",
  ],
  districts: [
    "Centrum",
    "Szczygłowice",
    "Krywałd",
    "Farskie Pola",
    "Osiedle Wojska Polskiego",
    "Kolonia Robotnicza",
    "Osiedle 1000-lecia",
  ],

  nearbyHeading: "Poza Knurów też przyjadę",
  nearbyParagraphs: [
    "Gliwice, Zabrze, Rybnik, Czerwionka-Leszczyny, Pilchowice i Gierałtowice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Gliwice",
    "Zabrze",
    "Rybnik",
    "Czerwionka-Leszczyny",
    "Pilchowice",
    "Gierałtowice",
    "Mikołów",
  ],

  about: blokOMnie("do Knurowa", "w Knurowie i okolicy", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Knurowa bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Knurowa jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Knurowie"),
    {
      question: "Zabieram jedzenie do pracy — czy Thermomix w tym pomoże?",
      answer:
        "Tak i to jest tutaj jeden z częstszych powodów zakupu. Gęste zupy do termosu, pasty kanapkowe na kilka dni, sosy i dipy — wszystko w jednym naczyniu, w kilkanaście sekund albo kilkanaście minut. Powiedz przy umawianiu, co zwykle zabierasz, a właśnie to zrobimy na prezentacji.",
    },
    {
      question: "Pracuję na zmiany — czy umówisz się przed południem?",
      answer:
        "Tak i robię to często. Powiedz przy ustalaniu terminu, kiedy realnie jesteś w domu, a dopasuję godzinę.",
    },
    {
      question: "Czy możemy zaprosić sąsiadki na jedną prezentację?",
      answer:
        "Jak najbardziej i w Knurowie zdarza się to często. W grupie pytania padają odważniejsze, a ja przyjeżdżam z tym samym zestawem — nie ma znaczenia, czy przy stole siedzą dwie osoby, czy sześć.",
    },
  ],

  geo: { lat: 50.2192, lng: 18.6511 },
};
