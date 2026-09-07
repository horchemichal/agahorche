import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * RUMIA — razem z Redą i Wejherowem tworzy Małe Trójmiasto Kaszubskie:
 * trzy miasta zrośnięte w jeden pas zabudowy, w którym ludzie mieszkają
 * w jednym, pracują w drugim, a rodzinę mają w trzecim.
 *
 * KĄT: „u koleżanki działa" — czyli co zrobić z cudzym entuzjazmem.
 * Polecenie od znajomej jest najczęstszym powodem, dla którego ktoś
 * w ogóle do mnie dzwoni, i jednocześnie najsłabszą podstawą do decyzji,
 * jaką można sobie wyobrazić. Nigdzie w serwisie nie ma o tym ani słowa.
 *
 * SEKCJA MA BYĆ KONKRETNA I NIEWYGODNA DLA SPRZEDAWCY:
 * — entuzjazm znajomej mówi o JEJ kuchni, nie o Waszej,
 * — trzeba zapytać ją o rzeczy, o których sama z siebie nie powie:
 *   co gotuje w tym NAPRAWDĘ, co tydzień; czego przestała używać;
 *   jak długo to stało nieużywane i dlaczego wróciła,
 * — najostrzejsze pytanie brzmi: „gdybyś dziś kupowała jeszcze raz,
 *   kupiłabyś?" — i warto zadać je bez świadków,
 * — a najgorszy z możliwych powodów zakupu to ten, że ktoś z bliskich
 *   już ma.
 *
 * OBOWIĄZKOWE ZDANIE O WŁASNYM INTERESIE: polecenia są dla mnie
 * najlepszym źródłem klientek i mówię to wprost, zamiast udawać, że piszę
 * tę sekcję bezinteresownie.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PROGRAMÓW POLECAJĄCYCH ANI KORZYŚCI ZA POLECENIE. Nie znam
 *   ich warunków i nie będę ich tu wymyślać ani sugerować.
 * — NIE PODWAŻAM NICZYJEJ OPINII. Koleżanka nie kłamie — po prostu mówi
 *   o swoim domu.
 *
 * ROZGRANICZENIE. Lubin mówi „stać nas to najgorszy powód zakupu",
 * Jarocin wylicza chwyty sprzedażowe, Poznań rozbiera pokaz targowy.
 * Tutaj przedmiotem jest POLECENIE OD ZNAJOMEJ jako podstawa decyzji.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Rumia, Reda i Wejherowo tworzą tzw. Małe Trójmiasto Kaszubskie.
 */
export const RUMIA: CityContent = {
  slug: "rumia",
  h1: "Thermomix Rumia – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Rumia — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Rumi: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Rumia — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rumi. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Rumi z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sąsiednich.",

  highlights: highlightyStandardowe("Rumia i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Najlepszy test to nie cudza opinia, tylko Wasza kuchnia i Wasze składniki.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rumi – jak wygląda prezentacja?",
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
      id: "u-kolezanki-dziala",
      heading: "Trzy miasta obok siebie — i zdanie „u koleżanki to działa”",
      paragraphs: [
        "Rumia, Reda i Wejherowo zrosły się w jeden pas zabudowy i ludzie mieszkają tu blisko siebie — a to znaczy, że wiadomości o tym, co ktoś kupił, chodzą szybko. Dlatego napiszę o czymś, o czym sprzedawca zwykle milczy, bo działa to na jego niekorzyść: o poleceniu od znajomej jako podstawie decyzji.",
        "Zacznę od przyznania się. Polecenia są dla mnie najlepszym źródłem klientek — lepszym niż jakakolwiek reklama. Mam więc w tej sprawie oczywisty interes i wolę to powiedzieć, niż udawać, że piszę tę sekcję z czystej troski.",
        "A teraz rzecz, która z tego interesu nie wynika. Entuzjazm koleżanki jest prawdziwy i ona Was nie oszukuje — tylko mówi o SWOJEJ kuchni. O swoim tygodniu, swoich domownikach i swoich przyzwyczajeniach. To, że u niej sprzęt pracuje trzy razy w tygodniu, nie mówi nic o tym, czy u Was będzie pracować w ogóle. Najgorszy z możliwych powodów zakupu to ten, że ktoś z bliskich już ma.",
        "Jest za to sposób, żeby zamienić tę rozmowę w coś wartościowego, i polega on na zadaniu pytań, których nikt sam z siebie nie zadaje. Co ty w tym gotujesz NAPRAWDĘ, co tydzień — nie kiedyś, nie od święta, tylko w zwykłą środę? Czego przestałaś w tym robić po pierwszym miesiącu? Czy stało kiedyś nieużywane i co sprawiło, że wróciłaś? Odpowiedzi na te trzy pytania mówią więcej niż godzina zachwytów.",
        "A najostrzejsze pytanie brzmi tak: gdybyś dziś kupowała jeszcze raz, wiedząc to, co wiesz — kupiłabyś? Warto zadać je bez świadków i bez sprzedawcy w pokoju. Jeśli odpowiedź jest twierdząca i konkretna, ma to realną wagę. Jeśli pada po chwili wahania, też się czegoś dowiedzieliście.",
        "Ja proponuję rzecz prostszą od wszystkich poleceń razem wziętych: sprawdźcie to u siebie. Na spotkaniu gotujemy w Waszej kuchni, z Waszymi składnikami i pod Wasze smaki — i to jest jedyny test, który mówi o Was, a nie o kimś innym.",
      ],
      links: [{ href: "/opinie", label: "Opinie klientek" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rumi?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie, żeby koleżanka, która już ma taki sprzęt, była na spotkaniu — bardzo dobrze. Zadaje wtedy pytania, na które ja bym nie wpadła.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rumi"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla rumskiej rodziny",
      paragraphs: [
        "Obiad musi tu powstać w oknie między pracą, szkołą i wieczorem, a przygotowuje go zwykle jedna osoba — często po dojeździe z sąsiedniego miasta.",
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

  districtsHeading: "Do których części Rumi dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sąsiednich, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać dzielnicę. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Centrum",
    "Janowo",
    "Biała Rzeka",
    "Zagórze",
    "Szmelta",
    "Lotnisko",
    "Stara Rumia",
    "Betlejem",
    "Dębogórze",
    "Górniczy",
  ],

  nearbyHeading: "Poza Rumię też przyjadę",
  nearbyParagraphs: [
    "Reda, Wejherowo, Gdynia i Puck są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Reda", "Wejherowo", "Gdynia", "Puck", "Sopot", "Gdańsk"],

  about: blokOMnie("do Rumi", "w Rumi i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Rumi bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sąsiednich. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Rumi"),
    {
      question: "Koleżanka bardzo chwali. Czy to wystarczający powód?",
      answer:
        "Nie i mówię to wbrew własnemu interesowi, bo polecenia są dla mnie najlepszym źródłem klientek. Jej entuzjazm jest prawdziwy, ale dotyczy jej kuchni i jej tygodnia. Zapytaj ją o trzy rzeczy: co gotuje w tym naprawdę, co tydzień; czego przestała używać po pierwszym miesiącu; czy sprzęt stał kiedyś nieużywany i co sprawiło, że wróciła.",
    },
    {
      question: "Jak najlepiej sprawdzić, czy to się u mnie sprawdzi?",
      answer:
        "Ugotować u siebie, ze swoich składników i pod swoje smaki — czyli dokładnie to, co robimy na prezentacji. To jedyny test, który mówi coś o Waszym domu, a nie o cudzym.",
    },
  ],

  geo: { lat: 54.5711, lng: 18.3886 },
};
