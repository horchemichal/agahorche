import type { CityContent } from "../city-content";
import {
  REGION_KUJAWSKO_POMORSKIE,
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
 * INOWROCŁAW — miasto uzdrowiskowe leżące na złożach soli, z tężniami
 * w parku. Sól jest tu podstawą wszystkiego: gospodarki, uzdrowiska
 * i nazwy.
 *
 * KĄT: sól w gotowaniu. Miasto soli jest jedynym właściwym miejscem
 * na rzecz drobną, a zmieniającą smak bardziej niż jakikolwiek przepis:
 * KIEDY SOLIĆ, ILE I DLACZEGO W TYM URZĄDZENIU WYCHODZI TO INACZEJ.
 *
 * ŻELAZNE OGRANICZENIE: ANI SŁOWA O ZDROWIU. Nie piszę, ile soli wolno
 * jeść, nie doradzam ograniczania, nie wspominam o ciśnieniu ani o żadnych
 * skutkach zdrowotnych. To dziedzina lekarza i dietetyka, nie moja —
 * i w mieście uzdrowiskowym pokusa, żeby wejść w te buty, jest największa,
 * więc zapisuję to wprost jako zakaz.
 *
 * TREŚĆ SEKCJI jest czysto kuchenna: w zamkniętym naczyniu nic nie odparowuje,
 * więc danie nie zagęszcza się tak jak w garnku — a to znaczy, że posolone
 * „jak zwykle" na początku wychodzi inaczej niż z garnka. Praktyczny wniosek:
 * solić mniej i doprawiać na końcu.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Inowrocław leży na złożach soli, jest uzdrowiskiem i ma tężnie.
 */
export const INOWROCLAW: CityContent = {
  slug: "inowroclaw",
  h1: "Thermomix Inowrocław – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Inowrocław — prezentacja i cena",
  seoDescription:
    "Thermomix w Inowrocławiu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Inowrocław — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Inowrocławiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Inowrocławia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Inowrocław i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Potrawka z domowymi paluchami z sezamem — dania przygotowane na prezentacji Thermomixa TM7",
    caption: "Na spotkaniu gotujemy pełne dania, nie próbki — takie, jakie potem robi się w tygodniu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Inowrocławiu – jak wygląda prezentacja?",
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
      id: "sol",
      heading: "Miasto soli — i drobiazg, który psuje pierwsze dania",
      paragraphs: [
        "Inowrocław stoi na soli i z soli żyje od wieków. Zaznaczam od razu, że nie będę pisać nic o tym, ile soli wolno jeść ani jak wpływa na cokolwiek — to jest rozmowa z lekarzem albo z dietetykiem, a nie ze sprzedawczynią sprzętu kuchennego. Napiszę o czymś czysto kuchennym, co psuje ludziom pierwsze dania i o czym nikt nie uprzedza.",
        "Rzecz wygląda tak. W garnku na płycie część wody odparowuje. Zupa gotowana czterdzieści minut robi się gęstsza i mocniejsza w smaku, bo płynu jest po prostu mniej niż na początku. Doświadczona kucharka soli więc z zapasem, wiedząc, że danie „się jeszcze zejdzie”.",
        "W zamkniętym naczyniu nic nie odparowuje. Ile płynu włożyliście, tyle zostaje. Danie nie zagęszcza się i nie wzmacnia — wychodzi dokładnie takie, jakie było w połowie gotowania.",
        "Skutek jest przewidywalny i widzę go u każdej nowej klientki: pierwsze dwie, trzy zupy wychodzą za słone. Nie dlatego, że ktoś się pomylił, tylko dlatego, że posolił odruchem wyrobionym przy garnku. To jest jedyny nawyk, który trzeba tu świadomie zmienić.",
        "Praktycznie robi się to prosto: solić mniej niż zwykle i doprawiać na samym końcu, po spróbowaniu. Przy przepisach z bazy warto potraktować podaną ilość soli jako punkt wyjścia, a nie jako ustalenie — bo one są liczone na przeciętny gust, a Wasz przeciętny nie jest.",
        "Ta sama zasada dotyczy zresztą płynu: przepisy przenoszone z garnka trzeba układać z mniejszą ilością wody, bo nic z niej nie ubędzie. Kto o tym wie od pierwszego dnia, oszczędza sobie tygodnia rozczarowań.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Inowrocławiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Inowrocławiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla inowrocławskiej rodziny",
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
        src: "/media/gotuj-z-dzieckiem-2-13135854.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption: "Obiad dla dziecka i dla dorosłych w jednym urządzeniu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  districtsHeading: "Do których części Inowrocławia i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Śródmieście",
    "Rąbin",
    "Piastowskie",
    "Uzdrowisko",
    "Solno",
    "Mątwy",
    "Szymborze",
    "Toruńskie",
    "Bydgoskie",
    "Nowe Osiedle",
  ],

  nearbyHeading: "Poza Inowrocław też przyjadę",
  nearbyParagraphs: [
    "Kruszwica, Janikowo, Pakość i Gniewkowo są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kruszwica", "Janikowo", "Pakość", "Gniewkowo", "Strzelno", "Mogilno"],

  about: blokOMnie("do Inowrocławia", "w Inowrocławiu i okolicy", REGION_KUJAWSKO_POMORSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Inowrocławia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Inowrocławiu"),
    {
      question: "Dlaczego pierwsze zupy wychodzą za słone?",
      answer:
        "Bo w zamkniętym naczyniu nic nie odparowuje. W garnku część wody ubywa, więc danie gęstnieje i wzmacnia się w smaku — i wszyscy solimy z tym zapasem odruchowo. Tutaj ile płynu włożysz, tyle zostaje. Rada jest prosta: solić mniej niż zwykle i doprawiać na końcu, po spróbowaniu.",
    },
    {
      question: "Czy przepisy z garnka można przenieść wprost?",
      answer:
        "Prawie — trzeba tylko dać mniej wody, bo nic z niej nie ubędzie. To ta sama zasada co przy soli. Kto wie o tym od pierwszego dnia, oszczędza sobie tygodnia rozczarowań.",
    },
  ],

  geo: { lat: 52.7972, lng: 18.2611 },
};
