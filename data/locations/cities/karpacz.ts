import type { CityContent } from "../city-content";
import {
  REGION_DOLNOSLASKIE,
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
 * KARPACZ — miasto u stóp Śnieżki, jedna z najbardziej obleganych
 * miejscowości turystycznych w Polsce. Stoi tu Świątynia Wang, drewniany
 * kościół przeniesiony w nastym wieku z Norwegii. Bardzo duża część
 * mieszkańców wynajmuje pokoje albo prowadzi kwatery.
 *
 * KĄT: kuchnia w domu, który przyjmuje płacących gości. To jest jedyne
 * miejsce, gdzie mogę uczciwie napisać sekcję dla osób prowadzących
 * kwaterę — i musi ona zawierać zdanie, którego nie powie żaden sprzedawca:
 * DO OBSŁUGI GOŚCI NA WIĘKSZĄ SKALĘ TO URZĄDZENIE SIĘ NIE NADAJE.
 * Naczynie ma około dwóch litrów; śniadanie dla dwudziestu osób robi się
 * w garnku i na patelni, a nie w tym.
 *
 * CO SIĘ NATOMIAST SPRAWDZA: małe kwatery i apartamenty, gdzie liczy się
 * powtarzalność i czas, oraz — i to jest sedno — WŁASNY POSIŁEK GOSPODARZY,
 * który w sezonie ginie kompletnie.
 *
 * ROZGRANICZENIE. Busko-Zdrój dostało kąt „kuracjusz na trzy tygodnie",
 * czyli GOŚĆ. Ustrzyki — „rok podzielony na sezon i poza sezonem".
 * Tutaj patrzymy od strony GOSPODARZA i jego własnego jedzenia.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Karpacz leży u stóp Śnieżki i jest miejscowością turystyczną,
 * — stoi w nim Świątynia Wang, drewniany kościół przeniesiony z Norwegii,
 * — wielu mieszkańców prowadzi kwatery i wynajem.
 *
 * CZEGO NIE MA: danych o ruchu turystycznym, cen noclegów, porad
 * dotyczących przepisów sanitarnych — to nie moja dziedzina.
 */
export const KARPACZ: CityContent = {
  slug: "karpacz",
  h1: "Thermomix Karpacz – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Karpacz — prezentacja i cena",
  seoDescription:
    "Thermomix w Karpaczu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Karpacz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Karpaczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Karpacza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Karpacz i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Drożdżowa plecionka z kruszonką przygotowana z ciasta wyrobionego w Thermomixie",
    caption: "Ciasto drożdżowe wyrabia się samo — to jedna z rzeczy, które najłatwiej sprawdzić na miejscu.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Karpaczu – jak wygląda prezentacja?",
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
      id: "kwatera",
      heading: "Dom, w którym mieszkają obcy ludzie — i uczciwie o skali",
      paragraphs: [
        "W Karpaczu bardzo dużo domów przyjmuje płacących gości. Ta strona jest właśnie dla Was, a nie dla turystów, i zacznę od zdania, którego nie usłyszycie od nikogo, kto to sprzedaje.",
        "Do obsługi gości na większą skalę to urządzenie się nie nadaje. Naczynie mieści około dwóch litrów. Śniadanie dla dwudziestu osób, jajecznica na cały bufet, dziesięć litrów zupy — to jest robota dla dużego garnka i patelni, i tak zostanie. Kto Wam powie inaczej, nie prowadził nigdy kwatery.",
        "Teraz to, co się faktycznie sprawdza, i dzielę to na dwie rzeczy.",
        "Pierwsza dotyczy małych kwater i apartamentów, gdzie gości jest kilkoro, a nie kilkudziesięcioro. Tam liczy się powtarzalność: ciasto, wypiek, pasta na kanapki albo domowy jogurt wychodzą tak samo za każdym razem i przy tej skali robi się je szybciej niż ręcznie. Wypiek własnego pieczywa na śniadanie jest w takim miejscu rzeczą, którą goście zapamiętują i wpisują potem w opinii.",
        "Druga jest ważniejsza i o niej się nie mówi. W sezonie gospodarze przestają jeść. Naprawdę — obiad zamienia się w to, co zostało po gościach, zjadane na stojąco o piętnastej, przez trzy miesiące. Urządzenie, które ugotuje Wam własny, normalny posiłek bez pilnowania i bez dokładania roboty przy zmywaniu, jest wtedy warte tyle, co dobry pracownik. Nastawia się je między jednym a drugim zadaniem i wraca do niego, gdy jest chwila.",
        "Jeśli więc pytacie mnie, czy to się opłaca „do pensjonatu” — odpowiem, że do obsługi gości niekoniecznie, ale do Waszego własnego jedzenia w sezonie jak najbardziej. I wolę to powiedzieć w tej kolejności.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Karpaczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedz, czy prowadzicie wynajem — wtedy proponuję termin poza szczytem sezonu i porę, w której nikt Wam nie puka do drzwi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Karpaczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla karpackiej rodziny",
      paragraphs: [
        "W domu, który pracuje sezonowo, własny obiad przegrywa z każdą inną rzeczą do zrobienia — i robi go zwykle jedna osoba, między jednym a drugim zadaniem.",
        "Thermomix pomaga tym, że nie wymaga obecności: nastawiasz i wracasz, gdy jest chwila. Gotowanie odbywa się z ustawioną temperaturą i mieszaniem, w jednym naczyniu.",
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

  districtsHeading: "Do których części Karpacza i okolicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać ulicę albo miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Karpacz Dolny",
    "Karpacz Górny",
    "Wilcza Poręba",
    "Bierutowice",
    "Płóczki",
    "Ścięgny",
    "Miłków",
    "Sosnówka",
    "Podgórzyn",
    "Staniszów",
  ],

  nearbyHeading: "Poza Karpacz też przyjadę",
  nearbyParagraphs: [
    "Kowary, Jelenia Góra, Szklarska Poręba i Piechowice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kowary", "Jelenia Góra", "Szklarska Poręba", "Piechowice", "Kamienna Góra"],

  about: blokOMnie("do Karpacza", "w Karpaczu i Karkonoszach", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Karpacza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Karpaczu"),
    {
      question: "Prowadzę pensjonat. Czy to urządzenie obsłuży moich gości?",
      answer:
        "Przy większej skali nie i mówię to wprost — naczynie mieści około dwóch litrów, więc śniadanie dla dwudziestu osób robi się w garnku i na patelni. Przy małej kwaterze sprawdza się przy wypiekach, ciastach i pastach, a najbardziej przy Waszym własnym posiłku, który w sezonie zwykle znika.",
    },
    {
      question: "Kiedy najlepiej umówić spotkanie w sezonie?",
      answer:
        "Poza szczytem, i sama to zaproponuję. Powiedz przy umawianiu, że prowadzisz wynajem — dobiorę porę, w której nikt nie puka do drzwi, a spotkanie trwa około godziny.",
    },
  ],

  geo: { lat: 50.7719, lng: 15.7369 },
};
