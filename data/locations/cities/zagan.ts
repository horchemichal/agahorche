import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * ŻAGAŃ — miasto z pałacem i klasztorem, w którym mieści się dawna
 * biblioteka opacka. Miejsce, gdzie od wieków przekazywano coś dalej
 * następnym.
 *
 * KĄT: oddanie urządzenia dziecku, które się wyprowadza. Bardzo częsta
 * sytuacja w domach, w których sprzęt stoi od lat, a dorosłe dziecko
 * urządza pierwsze własne mieszkanie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — to jest sensowny pomysł i zdarza się często: sprzęt trafia tam,
 *   gdzie zacznie być używany codziennie,
 * — ale warto sprawdzić, czy osoba, która zostaje, nie zostaje
 *   z niczym — bo zapał do oddawania bywa większy niż przewidywanie,
 * — CZEGO NIE POWIEM: nic o przenoszeniu gwarancji, rejestracji
 *   na inną osobę ani o tym, co dzieje się formalnie przy przekazaniu,
 * — i praktycznie: jeśli oddajecie, oddajcie też dokumenty
 *   i to, co przyszło razem ze sprzętem.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH TWIERDZEŃ O GWARANCJI, jej przenoszeniu, rejestracji
 *   ani o prawach nabywcy przy przekazaniu. Nie wiem tego i wymyślanie
 *   byłoby szkodliwe.
 * — ŻADNYCH PORAD O SPRZEDAŻY UŻYWANEGO ani o cenach na rynku wtórnym.
 * — ŻADNYCH PORAD PODATKOWYCH ANI PRAWNYCH przy darowiźnie.
 *
 * ROZGRANICZENIE. Bolesławiec mówi o zakupie używanego i o tym,
 * czy wymieniać starszy model, Ostrów o prezencie dla kogoś. Tutaj
 * chodzi o ODDANIE WŁASNEGO SPRZĘTU dorosłemu dziecku.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w Żaganiu znajduje się pałac oraz zespół klasztorny z dawną
 *   biblioteką opacką.
 */
export const ZAGAN: CityContent = {
  slug: "zagan",
  h1: "Thermomix Żagań – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żagań — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Żaganiu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żagań — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żaganiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żagania z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Żagań i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-7.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sprzęt powinien stać tam, gdzie się gotuje codziennie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żaganiu – jak wygląda prezentacja?",
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
      id: "oddac-dziecku",
      heading: "Miasto dawnej biblioteki opackiej — i sprzęt oddany dziecku",
      paragraphs: [
        "W Żaganiu stoi klasztor z dawną biblioteką opacką: miejsce, którego cały sens polegał na tym, żeby coś przetrwało i trafiło do następnych. Wykorzystam to do sytuacji, którą spotykam częściej, niż mogłoby się wydawać: dorosłe dziecko urządza pierwsze własne mieszkanie, a w domu rodzinnym od lat stoi urządzenie, którego używa się już rzadziej.",
        "Pomysł, żeby je oddać, jest sensowny i mówię to bez zastrzeżeń. Sprzęt tego rodzaju ma wartość wtedy, gdy pracuje codziennie, a nie wtedy, gdy stoi ładnie na blacie i włącza się go raz na dwa tygodnie. W pierwszym własnym mieszkaniu, gdzie zwykle nie ma jeszcze żadnych porządnych garnków, potrafi być naprawdę pomocny.",
        "Zanim jednak zapadnie decyzja, warto sprawdzić jedną rzecz, o której w zapale rzadko się myśli: czy osoba, która zostaje w domu, nie zostanie z niczym. Rzadziej nie znaczy wcale, a rezygnacja z czegoś, do czego przywykło się przez lata, bywa odczuwalna dopiero za miesiąc. To jest rozmowa do przeprowadzenia w domu, spokojnie, a nie decyzja podejmowana przy pakowaniu kartonów.",
        "Teraz to, czego nie powiem, a co dotyczy tu spraw ważnych. Nie wypowiem się o gwarancji, o jej przenoszeniu, o rejestracji na inną osobę ani o tym, co się dzieje formalnie przy przekazaniu sprzętu komuś innemu. Nie wiem tego na tyle pewnie, żeby o tym pisać, a ktoś mógłby na moim zdaniu polegać. To samo dotyczy spraw podatkowych i prawnych przy darowiźnie — nie jestem ani prawniczką, ani księgową.",
        "Praktycznie mogę doradzić tyle: jeśli oddajecie, oddajcie razem ze sprzętem dokumenty i wszystko, co przyszło razem z nim. Zwykle leży to w szufladzie i o tym się zapomina, a potem okazuje się potrzebne w najmniej wygodnym momencie. Same papiery nic nie ważą, a bywają najważniejszą częścią przekazania.",
        "A jeśli w efekcie w domu rodzinnym zrobi się pusto na blacie i myślicie o drugim urządzeniu — chętnie przyjadę i pogadamy. Zaznaczę tylko uczciwie, że w tej akurat sprawie mam swój interes, więc traktujcie moje entuzjazmy z odpowiednią rezerwą.",
      ],
      links: [{ href: "/thermomix/tm7-vs-tm6", label: "TM7 a TM6 — czym się różnią" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żaganiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu jest już starsze urządzenie, powiedzcie mi o tym — bywa, że wymiana nie ma sensu i powiem to wprost.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żaganiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla żagańskiej rodziny",
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

  districtsHeading: "Do których części Żagania dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Centrum",
    "Osiedle Kolejowe",
    "Łozy",
    "Osiedle Armii Krajowej",
    "Dworcowa",
    "Osiedle Chrobrego",
    "Winnica",
  ],

  nearbyHeading: "Poza Żagań też przyjadę",
  nearbyParagraphs: [
    "Żary, Szprotawa, Iłowa i Małomice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Żary", "Szprotawa", "Iłowa", "Małomice", "Nowa Sól", "Zielona Góra"],

  about: blokOMnie("do Żagania", "w Żaganiu i okolicy", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żagania bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Żaganiu"),
    {
      question: "Chcemy oddać nasze urządzenie dziecku. Dobry pomysł?",
      answer:
        "Zwykle tak — taki sprzęt ma wartość wtedy, gdy pracuje codziennie, a w pierwszym własnym mieszkaniu bywa naprawdę pomocny. Warto tylko sprawdzić, czy osoba, która zostaje w domu, nie zostanie z niczym: rezygnacja z czegoś, do czego przywykło się przez lata, bywa odczuwalna dopiero za miesiąc.",
    },
    {
      question: "Co z gwarancją, gdy przekazujemy sprzęt komuś innemu?",
      answer:
        "Nie wypowiem się o tym — nie wiem tego na tyle pewnie, żeby pisać, a ktoś mógłby na moim zdaniu polegać. To samo dotyczy spraw podatkowych i prawnych przy darowiźnie. Praktycznie mogę doradzić tylko tyle: oddajcie razem ze sprzętem dokumenty i wszystko, co przyszło razem z nim.",
    },
  ],

  geo: { lat: 51.6178, lng: 15.3147 },
};
