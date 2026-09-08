import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * KAZIMIERZ DOLNY — miasteczko nad Wisłą, od stu lat miejsce malarzy
 * i wakacyjnych wyjazdów, z rynkiem, ruinami zamku, basztą i lessowymi
 * wąwozami wokół. Bardzo małe — i przez większość weekendów w roku
 * wielokrotnie liczniejsze, niż wynikałoby z liczby mieszkańców.
 *
 * KĄT: weekend jako strefa wyłączona. Dla przyjezdnego Kazimierz to
 * sobota. Dla mieszkańca sobota to dzień, w którym nie da się przejechać
 * przez własne miasto ani zaparkować pod własnym domem. Życie codzienne
 * przesuwa się więc na WTOREK — i tak samo przesuwam swoje wizyty.
 * To jest jedyne miasto, w którym termin spotkania jest częścią kąta,
 * a nie tylko formalnością na końcu strony.
 *
 * DROBIAZG, KTÓRY MA ZOSTAĆ: jedno zdanie o tutejszych piekarniach
 * i o tym, żeby nie kupować urządzenia ZAMIAST nich. To nie osłabia
 * sprzedaży, tylko ustawia właściwe proporcje.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Kazimierz Dolny leży nad Wisłą, ma zachowany rynek, ruiny zamku
 *   i basztę, a wokół biegną lessowe wąwozy,
 * — od dawna przyjeżdżają tu malarze i turyści; miasteczko jest małe,
 *   a ruch weekendowy bardzo duży,
 * — miasto słynie z pieczywa sprzedawanego w miejscowych piekarniach,
 * — do gminy należą m.in. Bochotnica, Mięćmierz, Wylągi, Rzeczyca,
 *   Cholewianka, Dąbrówka.
 *
 * CZEGO NIE MA: liczby turystów, nazw piekarni ani przepisów na wyroby,
 * które są tutejszą specjalnością — to nie moja rzecz.
 */
export const KAZIMIERZ_DOLNY: CityContent = {
  slug: "kazimierz-dolny",
  h1: "Thermomix Kazimierz Dolny – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kazimierz Dolny — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Kazimierzu Dolnym: bezpłatna prezentacja TM7 u Ciebie w domu, terminy w tygodniu. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kazimierz Dolny — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kazimierzu Dolnym. Prezentacja bezpłatna, najchętniej w tygodniu.",

  lead:
    "Przyjeżdżam do Kazimierza Dolnego z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Bochotnicy, Mięćmierza, Rzeczycy i pozostałych sołectw.",

  highlights: highlightyStandardowe("Kazimierz Dolny i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kazimierzu Dolnym – jak wygląda prezentacja?",
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
      id: "wtorek-a-nie-sobota",
      heading: "Tutaj wszystko dzieje się we wtorek",
      paragraphs: [
        "Dla przyjezdnych Kazimierz jest sobotą: rynek, wąwozy, kolejka po pieczywo, zdjęcie z basztą. Dla mieszkańca sobota wygląda inaczej — to dzień, w którym nie da się przejechać przez własne miasto, zaparkować pod własnym domem ani załatwić czegokolwiek szybko.",
        "Dlatego tutejsza codzienność przesunęła się na środek tygodnia. Zakupy, wizyty, naprawy, rozmowy z fachowcem — wszystko dzieje się we wtorek albo w środę, bo tylko wtedy miasteczko należy do swoich.",
        "Ja robię dokładnie tak samo i wolę to napisać wprost, zamiast proponować Wam sobotnie popołudnie jak w każdym innym mieście. Do Kazimierza umawiam się w tygodniu — spokojnie dojadę, spokojnie stanę, a Wy nie musicie planować spotkania między dwiema falami gości.",
        "Jeśli u Was weekend jest dniem pracy, bo prowadzicie pokoje albo mały lokal, to ta zasada dotyczy Was podwójnie. Powiedzcie przy umawianiu, w jakie dni macie realnie godzinę spokoju, a resztę dopasuję.",
        "I jedna rzecz, którą powiem, choć nie jest w moim interesie: nie kupujcie tego urządzenia zamiast tutejszych piekarni. Chleb i to, po co ludzie stoją tu w kolejce, robią piekarze, którzy umieją to lepiej ode mnie i od każdego sprzętu na blacie. Urządzenie ma sens do codziennych obiadów, a nie do zastępowania rzeczy, które w tym miasteczku i tak są lepsze.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kazimierzu Dolnym?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Zaproponuję termin w tygodniu — a jeśli Wam pasuje tylko weekend, też przyjadę, tylko wtedy planuję sobie na to więcej czasu.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miasteczkiem. Jeżdżę po całej gminie, a od kierunku zależy tylko pora spotkania.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kazimierzu Dolnym"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla kazimierskiej rodziny",
      paragraphs: [
        "W miasteczku, w którym weekend bywa najcięższą częścią tygodnia, obiad musi się zdarzyć wtedy, gdy akurat jest przerwa — a robi go zwykle jedna osoba.",
        "Thermomix pomaga tym, że nie wymaga obecności. Danie gotuje się z ustawioną temperaturą i mieszaniem, więc może powstać wcześniej i poczekać, a wszystko dzieje się w jednym naczyniu.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Kazimierz Dolny",
    "Bochotnica",
    "Mięćmierz",
    "Wylągi",
    "Rzeczyca",
    "Dąbrówka",
    "Cholewianka",
    "Okale",
    "Jeziorszczyzna",
    "Zbędowice",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Puławy, Nałęczów, Opole Lubelskie i Józefów nad Wisłą są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Puławy", "Nałęczów", "Opole Lubelskie", "Józefów nad Wisłą", "Lublin"],

  about: blokOMnie("do Kazimierza Dolnego", "w gminie i nad Wisłą", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Kazimierza Dolnego bez dodatkowej opłaty?",
      answer:
        "Tak, do miasteczka i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Kazimierzu Dolnym"),
    {
      question: "Czy możesz przyjechać w tygodniu, a nie w weekend?",
      answer:
        "Wolę w tygodniu i sama to proponuję — w sobotę nie da się tu spokojnie dojechać ani stanąć. Jeśli jednak weekend jest dla Was jedyną opcją, przyjadę, tylko rezerwuję sobie wtedy więcej czasu na dojazd.",
    },
    {
      question: "Prowadzę pokoje gościnne — czy prezentacja może być pod to?",
      answer:
        "Tak. Powiedz przy umawianiu, ile osób karmisz i o której podajesz śniadania, a przygotuję spotkanie pod to zamiast pod rodzinny obiad. Umówmy się wtedy poza szczytem, bo w sezonie nie będziesz mieć z tego nic.",
    },
  ],

  geo: { lat: 51.3231, lng: 21.9531 },
};
