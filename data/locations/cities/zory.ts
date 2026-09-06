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
 * ŻORY — miasto z bardzo starą historią (prawa miejskie z XIII wieku)
 * i bardzo młodą zabudową: wielkie osiedla powstały tu w latach 70. i 80.
 * przy budowie kopalni. Przez lata Żory były jednym z najmłodszych
 * demograficznie miast w Polsce.
 *
 * KĄT: młode miasto to młode rodziny, a młode rodziny to konkretna
 * kuchenna sytuacja — pierwsze dziecko, pierwsze samodzielne gotowanie,
 * rozszerzanie diety niemowlaka i strach, żeby nie zrobić czegoś źle.
 * To jedyna strona tej fali, na której kątem jest MAŁE DZIECKO,
 * i naturalne miejsce, żeby odesłać do modułu diet niemowlęcych.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Żory otrzymały prawa miejskie w XIII wieku (1272), a ich osiedla
 *   mieszkaniowe powstały głównie w latach 70. i 80. XX wieku,
 * — Święto Ogniowe upamiętnia wielki pożar miasta z 1702 roku,
 * — Żory należą do subregionu zachodniego województwa śląskiego
 *   i sąsiadują z Rybnikiem, Jastrzębiem-Zdrojem i Pszczyną,
 * — osiedla nazwano imionami (Sikorskiego, Korfantego, Powstańców
 *   Śląskich, Pawlikowskiego, Księcia Władysława),
 * — dzielnice Baranowice, Rogoźna, Rowień, Kleszczów i Osiny mają
 *   charakter podmiejski.
 *
 * CZEGO NIE MA: danych demograficznych podanych jako liczby, porad
 * żywieniowych dla dzieci — od tego są lekarz i dietetyk, nie strona
 * sprzedażowa.
 */
export const ZORY: CityContent = {
  slug: "zory",
  h1: "Thermomix Żory – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Żory — prezentacja i cena",
  seoDescription:
    "Thermomix w Żorach: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie osiedla. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żory — prezentacja u Ciebie, bez dopłat za dojazd",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żorach. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Żor z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Sikorskiego, Korfantego, Powstańców Śląskich czy w Baranowicach. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("całe Żory, wszystkie osiedla"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żorach – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów ani porządków na tę okazję. Wystarczy blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Jeśli w domu jest małe dziecko, powiedz o tym od razu — wtedy prezentacja wygląda inaczej i zaczyna się od czego innego.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "mlode-miasto",
      heading: "Młode miasto, młode kuchnie — i pierwsze dziecko",
      paragraphs: [
        "Żory mają prawa miejskie od XIII wieku, ale mieszka się tu w blokach z lat siedemdziesiątych i osiemdziesiątych, postawionych przy budowie kopalni. Przez lata było to jedno z najmłodszych demograficznie miast w Polsce i do dziś widać to na osiedlowych placach zabaw.",
        "Kuchennie oznacza to sytuację, której nie ma w Bytomiu ani w Jastrzębiu: bardzo dużo domów, w których gotuje się od niedawna i w których właśnie pojawiło się pierwsze dziecko. Pytania są wtedy inne niż zwykle — nie „jak zaoszczędzić czas”, tylko „czy robię to dobrze”.",
        "Przy rozszerzaniu diety Thermomix pomaga w jednej konkretnej rzeczy: powtarzalności. Warzywa gotują się na parze z ustawioną temperaturą i czasem, a potem miksują w tym samym naczyniu do takiej gęstości, jakiej dziecko akurat potrzebuje. Nie musisz pilnować garnka, przekładać do blendera ani zgadywać. To nie jest porada żywieniowa — co i kiedy podać, mówi lekarz albo dietetyk. To jest tylko o tym, żeby wykonanie było za każdym razem takie samo.",
        "Druga rzecz, którą pokazuję najchętniej: Varoma. Porcja dla dziecka powstaje na parze równolegle z obiadem dla dorosłych, w tym samym urządzeniu i w tym samym czasie — bez drugiego garnka i bez drugiego pilnowania.",
      ],
      links: [
        { href: "/diety/niemowleta", label: "Zobacz gotowe jadłospisy dla niemowląt" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żorach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu jest niemowlę, powiedz mi, o której zwykle śpi — umówię się pod ten rytm, a nie pod swój. Prezentacja może być krótsza i spokojniejsza, jeśli tak będzie Wam wygodniej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żorach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla żorskiej rodziny",
      paragraphs: [
        "Gdy dzieci podrosną, wąskie gardło się zmienia: nie chodzi już o przecier, tylko o to, żeby obiad był gotowy w oknie między pracą, przedszkolem i wieczorem — i żeby wszyscy go zjedli.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
        "Wszystko dzieje się w jednym naczyniu — po zupie nie zostaje garnek, blender i sitko, co przy małym dziecku na rękach ma znaczenie większe, niż brzmi.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/przepisy", label: "Zobacz, co można ugotować" },
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

  districtsHeading: "Do których dzielnic Żor dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd — również do dawnych wsi na obrzeżach.",
    "Przy umawianiu wystarczy podać osiedle albo dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Osiedle Sikorskiego",
    "Osiedle Korfantego",
    "Osiedle Powstańców Śląskich",
    "Osiedle Pawlikowskiego",
    "Osiedle Księcia Władysława",
    "Osiedle 700-lecia",
    "Kleszczówka",
    "Baranowice",
    "Rogoźna",
    "Rowień",
    "Folwarki",
    "Kleszczów",
    "Osiny",
  ],

  nearbyHeading: "Poza Żory też przyjadę",
  nearbyParagraphs: [
    "Rybnik, Jastrzębie-Zdrój, Pszczyna, Suszec i Świerklany są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: [
    "Rybnik",
    "Jastrzębie-Zdrój",
    "Pszczyna",
    "Suszec",
    "Świerklany",
    "Wodzisław Śląski",
    "Tychy",
  ],

  about: blokOMnie("do Żor", "w Żorach i całym subregionie zachodnim", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żor bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Żor jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Żorach"),
    {
      question: "Mam niemowlę — czy prezentacja da się przeprowadzić spokojnie?",
      answer:
        "Tak i robię to często. Powiedz przy umawianiu, o której dziecko zwykle śpi, a dopasuję godzinę. Jeśli trzeba, prezentacja może być krótsza — pokażę wtedy to, co dla Was najważniejsze, a resztę dopowiem przez telefon.",
    },
    {
      question: "Czy Thermomix powie mi, co podawać dziecku?",
      answer:
        "Nie i nikt nie powinien tak twierdzić. Co i kiedy wprowadzać do diety dziecka, ustala się z lekarzem albo dietetykiem. Urządzenie odpowiada wyłącznie za wykonanie: ugotowanie na parze z ustawioną temperaturą i czasem oraz zmiksowanie do takiej gęstości, jakiej potrzebujesz — za każdym razem tak samo.",
    },
  ],

  geo: { lat: 50.0447, lng: 18.7003 },
};
