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
 * CZELADŹ — jedno z najstarszych miast regionu, ściśnięte między Będzinem,
 * Sosnowcem, Siemianowicami i Katowicami. Na jego granicy wyrosły wielkie
 * centra handlowe, do których jeździ pół metropolii.
 *
 * KĄT: to jest miasto, w którym „duże zakupy" są na wyciągnięcie ręki
 * przez cały tydzień. Konsekwencja kuchenna jest odwrotna niż
 * w Świętochłowicach: nie „kupuję tyle, ile uniosę", tylko „przywożę
 * bagażnik i połowa się psuje". Uczciwa rozmowa o Thermomiksie w Czeladzi
 * powinna dotyczyć właśnie tego — przerabiania dużych zakupów na jedzenie,
 * zanim się zmarnują. To także jedyna sensowna wersja argumentu
 * „urządzenie się zwróci": nie z powietrza, tylko z tego, co dziś ląduje
 * w koszu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Czeladź jest jednym z najstarszych miast Zagłębia Dąbrowskiego,
 *   z rynkiem i historyczną zabudową śródmiejską,
 * — na granicy miasta, przy trasie w stronę Katowic, znajdują się duże
 *   obiekty handlowe obsługujące całą aglomerację,
 * — Osiedle Piaski powstało przy dawnej kopalni Saturn, a Kolonia Saturn
 *   to zabytkowe osiedle robotnicze,
 * — miasto graniczy z Będzinem, Sosnowcem, Siemianowicami i Katowicami,
 * — Czeladź leży w Zagłębiu Dąbrowskim, nie na Górnym Śląsku.
 *
 * CZEGO NIE MA: nazw sieci handlowych, danych o marnowaniu żywności
 * podanych jako liczby, wyliczeń „ile zaoszczędzisz".
 */
export const CZELADZ: CityContent = {
  slug: "czeladz",
  h1: "Thermomix Czeladź – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Czeladź — prezentacja i cena",
  seoDescription:
    "Thermomix w Czeladzi: bezpłatna prezentacja TM7 u Ciebie w domu, wszystkie dzielnice. Cena, raty 0%, pomoc po zakupie. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czeladź — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Czeladzi. Prezentacja bezpłatna, ratę liczymy na miejscu.",

  lead:
    "Przyjeżdżam do Czeladzi z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — w Śródmieściu, na Piaskach, w Kolonii Saturn czy na Nowotkach. Prezentacja i dojazd są bezpłatne.",

  highlights: highlightyStandardowe("cała Czeladź, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czeladzi – jak wygląda prezentacja?",
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
      id: "duze-zakupy",
      heading: "Miasto, w którym całe zakupy robi się w jedną sobotę",
      paragraphs: [
        "Na granicy Czeladzi wyrosły obiekty handlowe, do których jeździ pół aglomeracji. Dla mieszkańców oznacza to sytuację nietypową: „duże zakupy” są tu na wyciągnięcie ręki przez cały tydzień, a nie raz na jakiś czas.",
        "Konsekwencja kuchenna jest znana każdemu, kto tak robi. Przywozisz bagażnik, w czwartek okazuje się, że pół warzyw wiotczeje, a w niedzielę część idzie do kosza. Nie dlatego, że ktoś jest niegospodarny — tylko dlatego, że przerobienie dużych zakupów na jedzenie wymaga czasu, którego po pracy nie ma.",
        "To jest jedyna wersja argumentu „urządzenie się zwróci”, którą uważam za uczciwą. Nie z powietrza i nie z reklamowych wyliczeń, tylko z tego, co dziś ląduje w koszu. Zupa krem z warzyw, które zaraz się skończą, przecier z pomidorów, pasta z resztek pieczonego mięsa — to wszystko robi się w jednym naczyniu, bez pilnowania, w czasie, który da się znaleźć wieczorem.",
      ],
      links: [
        { href: "/przepisy/co-mam-w-lodowce", label: "Zobacz, co ugotujesz z tego, co masz w lodówce" },
      ],
    },
    {
      id: "zaglebie",
      heading: "Czeladź to Zagłębie",
      paragraphs: [
        "Czeladź jest jednym z najstarszych miast Zagłębia Dąbrowskiego — starszym niż większość sąsiadów po drugiej stronie Brynicy. Dla ludzi stąd różnica między Zagłębiem a Śląskiem nadal jest oczywista, nawet jeśli mapa województwa niczego takiego nie pokazuje.",
        "Dlatego nie przyjeżdżam z gotowym „zestawem regionalnym” i nie zakładam z góry, co u Was się gotuje. Pytam, co jecie w środę i w niedzielę — od tego zaczyna się prezentacja, która czemuś służy.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Czeladzi?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — ustalenie terminu zajmuje kilka minut. Możesz też zostawić kontakt w formularzu i dopisać, o której oddzwonić.",
        "Miasto jest niewielkie, więc dojazd nie ma tu znaczenia. Przydaje mi się tylko informacja, na którym piętrze mieszkasz i czy da się zaparkować pod blokiem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Czeladzi"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla czeladzkiej rodziny",
      paragraphs: [
        "Czeladź, Będzin, Sosnowiec i Katowice to pod względem dojazdów jedno miasto — pracuje się kilka kilometrów od domu, ale wraca o różnych porach. Obiad przestaje być jednym wydarzeniem i staje się serią talerzy.",
        "Thermomix pomaga tu przez to, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a odgrzewanie na parze nie wysusza go tak, jak robi to mikrofalówka.",
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

  districtsHeading: "Do których dzielnic Czeladzi dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Czeladź jest mała i zwarta, więc dojazd nie wpływa nawet na porę spotkania — wystarczy, że powiesz, gdzie mieszkasz.",
  ],
  districts: [
    "Śródmieście",
    "Stare Miasto",
    "Piaski",
    "Kolonia Saturn",
    "Nowe Miasto",
    "Madera",
    "Borzecka",
  ],

  nearbyHeading: "Zagłębie i okolice",
  nearbyParagraphs: [
    "Będzin, Sosnowiec, Siemianowice i Katowice są tuż za granicą miasta — z każdego z nich jest tu kilka minut, więc spokojnie łączę dwa spotkania w jeden wieczór.",
  ],
  nearbyTowns: [
    "Będzin",
    "Sosnowiec",
    "Siemianowice Śląskie",
    "Katowice",
    "Wojkowice",
    "Dąbrowa Górnicza",
    "Piekary Śląskie",
  ],

  about: blokOMnie("do Czeladzi", "w Czeladzi i całym Zagłębiu", REGION_SLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Czeladzi bez dodatkowej opłaty?",
      answer:
        "Tak. Dojazd do wszystkich dzielnic jest bezpłatny, tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Czeladzi"),
    {
      question: "Czy Thermomix naprawdę się zwraca?",
      answer:
        "Zwraca się wtedy, gdy realnie zmienia to, co robisz — najczęściej przez mniej wyrzuconego jedzenia i mniej kupowanych gotowców. Nie potrafię tego wyliczyć za Ciebie i nie będę udawać, że umiem: to zależy od tego, ile dziś marnujesz i ile zamawiasz. Na prezentacji policzymy to na Waszych zwyczajach, a nie na przykładzie z folderu.",
    },
    {
      question: "Robimy duże zakupy raz w tygodniu — od czego zacząć?",
      answer:
        "Od jednej rzeczy, nie od dziesięciu. Zwykle najlepiej działa zupa krem z warzyw, które najszybciej się psują — powstaje w kilkanaście minut, w jednym naczyniu i bez pilnowania. Pokażę to na prezentacji na Twoich warzywach.",
    },
  ],

  geo: { lat: 50.3159, lng: 19.0847 },
};
