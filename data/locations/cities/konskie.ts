import type { CityContent } from "../city-content";
import {
  REGION_SWIETOKRZYSKIE,
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
 * KOŃSKIE — największe miasto północnej części województwa, siedziba
 * dużego, mocno zalesionego powiatu. W środku miasta leży park z zespołem
 * dawnej rezydencji, a w nim budowle, których nikt się w tym miejscu nie
 * spodziewa: egipska oranżeria i świątynia grecka. W gminie leży też
 * Sielpia Wielka z zalewem i muzeum dawnego przemysłu.
 *
 * KĄT: rzeczy, których nikt się nie spodziewa. Miasto, które ma w parku
 * egipską oranżerię, jest jedynym miejscem, gdzie mogę napisać sekcję
 * o TYM, CO ZASKAKUJE LUDZI NA PREZENTACJI — i zrobić to bez taniego
 * efekciarstwa, bo zaskoczenie jest tu miejscowym motywem, a nie chwytem.
 *
 * WARUNEK UCZCIWOŚCI: sekcja musi skończyć się przyznaniem, że sztuczki
 * nie są powodem, dla którego warto to kupić. Powodem jest wtorek.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — w miejskim parku w Końskich stoją budowle dawnej rezydencji, w tym
 *   oranżeria w stylu egipskim i świątynia grecka,
 * — Końskie są siedzibą powiatu koneckiego, jednego z bardziej zalesionych
 *   w regionie,
 * — w gminie leży Sielpia Wielka z zalewem i muzeum dawnego przemysłu,
 * — okolica należy do historycznego Staropolskiego Okręgu Przemysłowego.
 *
 * CZEGO NIE MA: ustawień urządzenia, czasów i temperatur, obietnic
 * dotyczących konkretnych efektów kulinarnych.
 */
export const KONSKIE: CityContent = {
  slug: "konskie",
  h1: "Thermomix Końskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Przedstawiciel Thermomix Końskie — prezentacja i cena",
  seoDescription:
    "Thermomix w Końskich: bezpłatna prezentacja TM7 u Ciebie w domu, miasto i cała gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Końskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Końskich. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Końskich z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — także do Modliszewic, Nieświnia, Sielpi i pozostałych sołectw gminy.",

  highlights: highlightyStandardowe("Końskie i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Świeżo upieczone bułki z ciasta zagniecionego w Thermomixie TM7",
    caption: "Ciasto wyrabia się bez ubrudzenia rąk — to zwykle pierwsza rzecz, którą ludzie chcą zobaczyć.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Końskich – jak wygląda prezentacja?",
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
      id: "czego-sie-nie-spodziewacie",
      heading: "Egipska oranżeria w środku Polski — i rzeczy, których nikt się nie spodziewa",
      paragraphs: [
        "W parku w środku Końskich stoi oranżeria w stylu egipskim, a kawałek dalej świątynia grecka. Nikt, kto tu pierwszy raz przyjeżdża, nie spodziewa się tego w tym miejscu — i to jest chyba najbardziej konecka rzecz, jaką mogę napisać.",
        "Skoro więc jestem w mieście, które ma zaskakiwanie wpisane w pejzaż, powiem, co najczęściej zaskakuje ludzi u mnie na prezentacji. Nie cena i nie liczba funkcji, bo o tym każdy już czytał.",
        "Zaskakuje to, że ciasto drożdżowe powstaje bez ubrudzenia rąk i bez mąki na całym blacie — mnóstwo osób nie piecze wcale właśnie dlatego, że nie chce po tym sprzątać. Zaskakuje lody zrobione wprost z mrożonych owoców, bez żadnych dodatków. Zaskakuje masło ubite ze śmietanki i orzechy zmielone na gładką pastę, bo obie rzeczy wydają się z innego świata niż zwykła domowa kuchnia. I zaskakuje to, ile zmywania po prostu nie ma, bo wszystko działo się w jednym naczyniu.",
        "A teraz część, przez którą ta sekcja w ogóle się broni. Żadna z tych rzeczy nie jest powodem, dla którego warto to kupić. To są sztuczki i po dwóch miesiącach przestaje się je robić — mówię to jako osoba, która sprzedaje te urządzenia i wolałaby, żebyście usłyszeli to ode mnie, a nie odkryli sami.",
        "Powodem jest zwykły wtorek. To, że o siedemnastej powstaje obiad, przy którym nie trzeba stać, i że po nim zostaje jedno naczynie. Jeśli to Wam się przyda — resztę traktujcie jako dodatek. Jeśli nie — najpiękniejsza sztuczka nic tu nie zmieni.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Końskich?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Podaj miejscowość, jeśli mieszkasz poza samym miastem. Powiat konecki jest duży i rozłożony, więc trasę planuję z góry — ale dojazd jest wszędzie bezpłatny.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Końskich"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla koneckiej rodziny",
      paragraphs: [
        "Wąskie gardło jest tu takie jak wszędzie: obiad musi powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba.",
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

  districtsHeading: "Do których miejscowości gminy dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać miejscowość. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Końskie",
    "Modliszewice",
    "Nieświń",
    "Sielpia Wielka",
    "Rogów",
    "Kornica",
    "Barycz",
    "Piła",
    "Stary Dziebałtów",
    "Proćwin",
  ],

  nearbyHeading: "Poza gminę też przyjadę",
  nearbyParagraphs: [
    "Stąporków, Skarżysko-Kamienna, Włoszczowa i Suchedniów są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Stąporków", "Skarżysko-Kamienna", "Włoszczowa", "Suchedniów", "Kielce"],

  about: blokOMnie("do Końskich", "w gminie Końskie i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Końskich bez dodatkowej opłaty?",
      answer:
        "Tak, do miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Końskich"),
    {
      question: "Czy na prezentacji zobaczę te wszystkie efektowne rzeczy?",
      answer:
        "Jeśli chcesz — pokażę. Ale powiem od razu, że to nie one decydują o tym, czy zakup ma sens. Ważniejsze jest, czy urządzenie ułatwi Ci zwykły wtorek, i to właśnie proponuję sprawdzić: gotujemy Wasze codzienne danie, a nie pokazowe.",
    },
    {
      question: "Boję się, że po roku będzie stało w szafce. Co wtedy?",
      answer:
        "To realne ryzyko i nie będę udawać, że nie istnieje — dotyczy każdego sprzętu kupionego z entuzjazmu. Dlatego na spotkaniu pytam, co i jak często gotujecie, i jeśli odpowiedź brzmi „rzadko”, mówię wprost, że to się nie obroni.",
    },
  ],

  geo: { lat: 51.1917, lng: 20.4083 },
};
