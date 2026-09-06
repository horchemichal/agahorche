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
 * ZABRZE — miasto szpitali i dyżurów. Śląskie Centrum Chorób Serca ściąga
 * tu pacjentów z całej Polski, a razem z nimi personel pracujący w rytmie,
 * w którym „obiad o siedemnastej” jest pojęciem teoretycznym. To jest
 * konkretny, prawdziwy kąt na tę stronę i zupełnie inny niż akademickie
 * Gliwice tuż obok.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Śląskie Centrum Chorób Serca w Zabrzu to ośrodek kardiochirurgiczny
 *   o ogólnopolskim znaczeniu, związany z Zbigniewem Religą,
 * — Kopalnia Guido i Sztolnia Królowa Luiza to udostępnione do zwiedzania
 *   obiekty pogórnicze, wpisane w Szlak Zabytków Techniki,
 * — Zabrze powstało z połączenia kilku odrębnych gmin, stąd dzielnice
 *   o wyraźnie własnym charakterze (Biskupice, Rokitnica, Mikulczyce,
 *   Zaborze, Maciejów, Kończyce, Pawłów, Grzybowice, Makoszowy),
 * — Rokitnica ma zabudowę osiedla patronackiego z początku XX wieku.
 *
 * CZEGO NIE MA: liczby łóżek i zabiegów w szpitalach, danych o zatrudnieniu,
 * godzin otwarcia obiektów turystycznych.
 */
export const ZABRZE: CityContent = {
  slug: "zabrze",
  h1: "Thermomix Zabrze – prezentacja u Ciebie w domu",
  seoTitle: "Przedstawiciel Thermomix Zabrze — prezentacja i cena",
  seoDescription:
    "Thermomix w Zabrzu: bezpłatna prezentacja TM7 u Ciebie w kuchni, wszystkie dzielnice. Cena, raty 0%, także terminy dla pracujących zmianowo. Aga, 517 185 691.",
  ogTitle: "Thermomix Zabrze — prezentacja u Ciebie, także po dyżurze",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zabrzu. Prezentacja bezpłatna, terminy również przed południem i w weekend.",

  lead:
    "Przyjeżdżam do Zabrza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne, a termin dopasowuję także do pracy zmianowej i dyżurów.",

  highlights: highlightyStandardowe("całe Zabrze, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zabrzu – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem i ze składnikami — nie robisz zakupów i nie sprzątasz kuchni na tę okazję. Potrzebny jest blat, gniazdko i godzina spokoju.",
        "Gotujemy naprawdę: obiad, coś słodkiego i chętnie coś z tego, co masz w domu. Powiedz wcześniej, ile osób siada u Was do stołu i czego nie jecie, a dobiorę dania pod Was.",
        "Na koniec liczby: aktualna cena, promocja i rata przy kilku okresach spłaty. Nie musisz decydować od razu i nic za spotkanie nie płacisz.",
      ],
      links: [{ href: "/prezentacja/jak-wyglada", label: "Zobacz, jak wygląda prezentacja krok po kroku" }],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption: "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "dyzury",
      heading: "Miasto, w którym obiad rzadko jest o siedemnastej",
      paragraphs: [
        "Zabrze jest miastem szpitali — Śląskie Centrum Chorób Serca ściąga tu pacjentów z całej Polski, a razem z nimi lekarzy, pielęgniarki, ratowników i techników. Do tego dochodzi to, co na Śląsku było zawsze: praca zmianowa w zakładach i kopalniach. W efekcie w bardzo wielu tutejszych domach nie ma jednej pory obiadu, tylko dwie albo trzy.",
        "To jest dokładnie ta sytuacja, w której Thermomix daje najwięcej — i nie chodzi o szybkość. Chodzi o to, że jedzenie może powstać wtedy, gdy ktoś ma czas je zrobić, a nie wtedy, gdy wszyscy mają czas je zjeść. Danie da się przygotować rano, odłożyć i odgrzać na parze wieczorem, bez wysuszenia, które robi mikrofalówka.",
        "Praktyczna konsekwencja dla samego spotkania: umawiam się też przed południem w dni robocze i w nietypowych porach. Powiedz przy ustalaniu terminu, kiedy realnie jesteś w domu, a nie kiedy „wypada”.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zabrzu?",
      paragraphs: [
        "Zadzwoń lub napisz SMS. Jeśli nie możesz rozmawiać w ciągu dnia, zostaw kontakt w formularzu i dopisz, o której oddzwonić — oddzwonię wtedy, a nie kiedy indziej.",
        "Podaj dzielnicę. Rokitnica i Makoszowy leżą na przeciwnych krańcach miasta i od tego zależy, jaką porę mogę zaproponować.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zabrzu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rodziny z Zabrza",
      paragraphs: [
        "Zabrze powstało ze zrośnięcia kilku odrębnych gmin i do dziś ma dzielnice o zupełnie różnej zabudowie: familoki i kamienice w Biskupicach czy Zaborzu, osiedle patronackie w Rokitnicy, bloki, a na obrzeżach domy z ogrodami. Kuchnia w każdym z tych miejsc wygląda inaczej i wymaga innego ustawienia urządzenia.",
        "Wspólne jest to, po co ludzie tu po Thermomix sięgają: żeby obiad dla kilku osób nie wymagał obecności przy garnku. Danie gotuje się z ustawioną temperaturą i mieszaniem, a Ty w tym czasie robisz coś innego albo w ogóle jeszcze nie ma Cię w domu.",
        "Przy dziecku dochodzi Varoma — porcja na parze powstaje w tym samym urządzeniu, równolegle z obiadem dla dorosłych.",
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

  districtsHeading: "Do których dzielnic Zabrza dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty — od Centrum po Makoszowy i Grzybowice.",
    "W starszej zabudowie kuchnie bywają węższe. Jeśli powiesz o tym przy umawianiu, przywiozę mniej naczyń i ustawimy wszystko tak, żeby dało się przy tym normalnie stać.",
  ],
  districts: [
    "Centrum",
    "Zaborze Północ",
    "Zaborze Południe",
    "Biskupice",
    "Rokitnica",
    "Mikulczyce",
    "Maciejów",
    "Helenka",
    "Kończyce",
    "Pawłów",
    "Makoszowy",
    "Grzybowice",
    "Osiedle Tadeusza Kotarbińskiego",
    "Osiedle Mikołaja Kopernika",
    "Guido",
  ],

  nearbyHeading: "Poza Zabrze też przyjadę",
  nearbyParagraphs: [
    "Zabrze sąsiaduje bezpośrednio z Gliwicami, Bytomiem i Rudą Śląską — to praktycznie jedna trasa. Dalej cała metropolia aż po Katowice.",
  ],
  nearbyTowns: ["Gliwice", "Bytom", "Ruda Śląska", "Knurów", "Świętochłowice", "Chorzów", "Katowice"],

  about: blokOMnie("do Zabrza", "w Zabrzu i całej metropolii", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zabrza bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic Zabrza jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zabrzu"),
    {
      question: "Pracuję na dyżurach — czy da się umówić przed południem?",
      answer:
        "Tak i robię to często. Umawiam się w dni robocze przed południem, wieczorami i w weekendy. Powiedz, kiedy realnie jesteś w domu, a nie kiedy jest „normalna pora”.",
    },
    {
      question: "Czy Thermomix pomoże, gdy w domu każdy je o innej porze?",
      answer:
        "To jest jego najmocniejsza strona. Jedzenie może powstać wtedy, gdy ktoś ma czas je zrobić, i poczekać. Odgrzewanie na parze nie wysusza dania tak jak mikrofalówka, więc drugi i trzeci talerz nie są gorsze od pierwszego.",
    },
  ],

  geo: { lat: 50.3249, lng: 18.7857 },
};
