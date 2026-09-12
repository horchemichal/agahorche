import type { CityContent } from "../city-content";
import {
  REGION_OPOLSKIE,
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
 * BIAŁA — miasto w powiecie prudnickim, 2 232 mieszkańców
 * (31.12.2024, GUS); cała gmina 9 808. Prawa miejskie 1311 r.,
 * pierwsza wzmianka 1225 r.; nieprzerwanie do dziś. Gmina jest
 * DWUJĘZYCZNA: urzędowa nazwa niemiecka ZÜLZ wpisana 24 listopada
 * 2008 r., tablice w 23 miejscowościach. W spisie 2021 r.
 * mniejszość niemiecka stanowiła tu 28,41% — JEDYNA gmina
 * w tej grupie powyżej progu 20%. Gmina żyje z rolnictwa,
 * SADOWNICTWA I SZKÓŁKARSTWA.
 *
 * UWAGA — HOMONIMY: to NIE Biała Podlaska, NIE Biała Rawska,
 * NIE Biała Piska ani Biała Nyska. Chodzi o Białą w powiecie
 * prudnickim, nieformalnie zwaną Białą Prudnicką.
 *
 * KĄT: kompoty i musy z własnych owoców — czyli co zrobić,
 * gdy drzewo obrodzi naraz. Gmina, w której działają szkółki
 * drzew i sadownictwo, jest właściwym miejscem na stronę
 * o owocach, których jest za dużo w ciągu jednego tygodnia.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że problemem własnych owoców nie jest ich brak, tylko
 *   kumulacja: wszystko dojrzewa w tym samym tygodniu,
 * — że kompot i mus to najprostsze wyjście, bo nie wymagają
 *   idealnych owoców,
 * — że urządzenie gotuje z mieszaniem, więc nic nie przywiera
 *   i nie trzeba stać,
 * — że NIE obiera, nie dryluje i nie wypestkuje,
 * — i że o pasteryzacji ani przechowywaniu nie doradzam.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O PASTERYZACJI, WEKOWANIU ANI TRWAŁOŚCI.
 *   Bezpieczeństwo żywności — jedno zdanie odmowy, bez
 *   rozwijania (temat gruntownie omówiony przy Paczkowie,
 *   gdzie też odmawiam).
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI CUKRU.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o owocach ani o cukrze.
 * — ŻADNEGO PISANIA O BEZROBOCIU. Gmina ma najwyższe bezrobocie
 *   w okolicy i to jest fakt, ale nie jest to fakt, na którym
 *   wolno budować ofertę drogiego sprzętu.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Dżemy, konfitury i powidła"
 * (Paczków) dotyczą gotowania owoców Z CUKREM NA DŁUGO, żeby się
 * przechowały. „Soki i moszcze" należą do regionu winorośli.
 * „Żelki i galaretki" (Otmuchów) dotyczą tężenia. „Susz"
 * należy do Iwkowej. Tutaj chodzi o RZECZY DO WYPICIA I ZJEDZENIA
 * OD RAZU, w tygodniu, w którym owoców jest za dużo.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PISZĘ, że w Białej stoi zabytkowy ratusz z wieżą. Nie
 *   potwierdziło tego żadne sprawdzone źródło, mimo że brzmi
 *   prawdopodobnie.
 * — NIE PODAJĘ NAZW FIRM. Lista przedsiębiorców na stronie gminy
 *   opiera się na danych kończących się na 2007 r.
 * — NIE WSKAZUJĘ największego pracodawcy — nie ustalono go.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak.
 * — districts: gmina ma 30 sołectw, a jedno z nich —
 *   „Przedmieście" — leży w granicach miasta. To sołectwo,
 *   nie osiedle, i tak jest opisane. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1311 r., pierwsza wzmianka 1225 r.; osada
 *   rozwinęła się wokół zamku książąt opolskich nad rzeką Białą,
 * — zachowany niemal pełny obwód murów miejskich: 1 050 m,
 *   osiem baszt półokrągłych i jedna prostokątna; Wieża Prudnicka
 *   o boku 7,9 m i wysokości 23 m, o murach grubych na 2,1 m,
 *   pełniła później funkcję więzienia; dach odbudowano w 2006 r.
 *   po pożarze z 1971 r.,
 * — gmina dwujęzyczna, nazwa Zülz od 24 listopada 2008 r.,
 *   23 miejscowości z tablicami; mniejszość niemiecka 28,41%
 *   w spisie 2021 r.,
 * — gmina żyje z rolnictwa, sadownictwa i szkółkarstwa,
 * — kolej dotarła 22 października 1896 r.,
 * — historyczne maksimum ludności: 3 784 osoby w 1939 r.,
 * — 2 232 mieszkańców miasta, 9 808 gminy (31.12.2024).
 */
export const BIALA_OPOLSKA: CityContent = {
  slug: "biala-opolska",
  h1: "Thermomix Biała – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Biała (opolskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Białej w powiecie prudnickim: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Biała — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Białej. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Białej z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Biała i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Drzewo nie obradza po trochu. Obradza w jeden tydzień.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Białej – jak wygląda prezentacja?",
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
      id: "kompoty",
      heading: "Gmina szkółek i sadów — czyli co zrobić, gdy wszystko obrodzi naraz",
      paragraphs: [
        "Gmina Biała żyje z rolnictwa, sadownictwa i szkółkarstwa. W takiej okolicy problemem nie jest brak owoców — problemem jest ich rozkład w czasie. Drzewo nie obradza po trochu przez dwa miesiące. Obradza w jeden tydzień, cała gałąź naraz, zwykle wtedy, gdy akurat nie ma na to czasu. I wtedy trzeba coś zrobić z dwoma wiadrami śliwek w cztery dni.",
        "Najprostsze wyjście, o którym pisze się najmniej, to kompot i mus.",
        "Ich zaletą jest to, że nie wymagają owoców idealnych. Do dżemu bierze się to, co ładne. Do kompotu i musu wchodzi wszystko: przejrzałe, nierówne, obite przy zbieraniu, drobne. To jest ta kategoria, która realnie ratuje nadmiar, a nie tylko go przerabia.",
        "Co robi urządzenie: gotuje z mieszaniem i z ustawioną temperaturą. Przy owocach ma to konkretne znaczenie, bo owoce z cukrem osiadają na dnie i przywierają, a mus, którego nikt nie miesza, przypala się od spodu w kilka minut. Tutaj nic nie ma szansy osiąść. Nastawiacie i odchodzicie — a w tygodniu, w którym owoce lecą z drzewa, właśnie tego czasu nie ma.",
        "Po ugotowaniu ten sam sprzęt przeciera masę na gładko, bez przepychania przez sitko. Z tego samego garnka wychodzi więc kompot do picia, mus dla dziecka albo baza do deseru — zależnie od tego, jak długo się miksuje.",
        "Czego nie zrobi, i to jest zwykle większa część roboty: nie umyje, nie obierze, nie wydryluje i nie wypestkuje. Śliwki, wiśnie i jabłka przygotowujecie rękami. Kto Wam mówi, że sprzęt załatwia owoce od drzewa do słoika, ten nigdy nie stał nad miską wiśni.",
        "Jedna uwaga praktyczna: masa owocowa mocno się podnosi podczas gotowania — wyżej, niż wskazuje objętość samych owoców. Gotuje się więc mniejsze partie, niż podpowiada rozsądek.",
        "Czego nie doradzę: niczego o pasteryzacji, wekowaniu ani o tym, jak długo przetwory się trzymają. To bezpieczeństwo żywności — piszę o tym przy innym mieście i tam też odmawiam.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Białej?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli macie swoje owoce, przygotujcie garść — zrobimy z nich mus na miejscu i zobaczycie, ile masa naprawdę urasta w naczyniu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Białej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla bialskiej rodziny",
      paragraphs: [
        "Biała liczy nieco ponad dwa tysiące dwieście mieszkańców, a cała gmina blisko dziesięć tysięcy — dla porównania, w 1939 roku samo miasto miało trzy tysiące siedemset osiemdziesiąt cztery osoby. Prawa miejskie ma od 1311 roku, a pierwsza wzmianka pochodzi z 1225; osada rozwinęła się wokół zamku książąt opolskich nad rzeką Białą. Największym zabytkiem są mury: zachowany niemal pełny obwód o długości tysiąca pięćdziesięciu metrów, z ośmioma basztami półokrągłymi i jedną prostokątną. Wieża Prudnicka, o boku niespełna ośmiu metrów i wysokości dwudziestu trzech, ma mury grube na ponad dwa metry i pełniła później funkcję więzienia; dach odbudowano w 2006 roku, trzydzieści pięć lat po pożarze. Gmina jest dwujęzyczna — urzędowa nazwa niemiecka Zülz została wpisana 24 listopada 2008 roku, a tablice stoją przy dwudziestu trzech miejscowościach; w spisie z 2021 roku mniejszość niemiecką zadeklarowało tu 28,41% mieszkańców, najwięcej w całej okolicy.",
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

  districtsHeading: "Do których części Białej dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — łącznie z Przedmieściem, które leży w jego granicach, choć formalnie jest sołectwem — oraz do pozostałych sołectw gminy, w tym Łącznika, Chrzelic i Ligoty Bialskiej.",
    "Miasto nie ma podziału na osiedla, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Białą też przyjadę",
  nearbyParagraphs: [
    "Prudnik, Głogówek, Korfantów, Krapkowice, Głubczyce i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Prudnik", "Głogówek", "Korfantów", "Krapkowice", "Głubczyce", "Nysa"],

  about: blokOMnie("do Białej", "w Białej i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Białej bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Białą w powiecie prudnickim, nie o Białą Podlaską, Rawską ani Piską.",
    },
    ...faqWspolne("w Białej"),
    {
      question: "Co zrobić, gdy wszystkie owoce dojrzeją naraz?",
      answer:
        "Najprostsze wyjście to kompot i mus — bo nie wymagają owoców idealnych. Wchodzi do nich wszystko: przejrzałe, nierówne, obite przy zbieraniu, drobne. To ta kategoria, która realnie ratuje nadmiar, a nie tylko go przerabia.",
    },
    {
      question: "Czy urządzenie obiera i dryluje owoce?",
      answer:
        "Nie — a to zwykle większa część roboty. Mycie, obieranie, drylowanie i wypestkowanie zostaje przy Waszych rękach. Urządzenie zajmuje się gotowaniem z mieszaniem, dzięki czemu nic nie osiada na dnie i nie przypala się od spodu.",
    },
    {
      question: "Ile owoców można wsypać naraz?",
      answer:
        "Mniej, niż podpowiada rozsądek — masa owocowa mocno się podnosi podczas gotowania. Lepiej zrobić dwie mniejsze partie. O pasteryzacji i trwałości przetworów nie doradzam: to bezpieczeństwo żywności, nie sprzęt kuchenny.",
    },
  ],

  geo: { lat: 50.4, lng: 17.67 },
};
