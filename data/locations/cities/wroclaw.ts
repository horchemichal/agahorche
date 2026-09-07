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
 * WROCŁAW — miasto na wyspach i mostach, w którym rzeczy oddzielone wodą
 * trzeba było ze sobą łączyć.
 *
 * KĄT: zakup na spółkę. To jest jedyne miejsce w serwisie na sytuację,
 * o której nikt nie pisze, a która zdarza się bardzo często: DWIE OSOBY
 * SKŁADAJĄ SIĘ NA JEDNO URZĄDZENIE. Para bez ślubu, dwie siostry, matka
 * z córką, dwie osoby mieszkające razem.
 *
 * SEKCJA MA BYĆ PRAKTYCZNA, NIE PRAWNA. Rzeczy, które warto ustalić
 * PRZED, a nie po: na kogo idzie dokument zakupu, kto podpisuje przy
 * ratach, u kogo sprzęt fizycznie stoi. To są konsekwencje, o których
 * ludzie dowiadują się w najgorszym momencie.
 *
 * TWARDA GRANICA — NIE WOLNO JEJ PRZEKROCZYĆ: NIE JESTEM PRAWNIKIEM
 * I NIE DORADZAM W SPRAWACH MAJĄTKOWYCH. Żadnych porad o współwłasności,
 * podziale majątku ani o tym, komu co „się należy". Strona mówi wyłącznie
 * o rzeczach organizacyjnych, które widzę u siebie na spotkaniach.
 *
 * DRUGA GRANICA: żadnych wymyślonych warunków finansowania. Nie podaję,
 * co „można” zmienić w umowie ratalnej ani jak wygląda przepisanie
 * zobowiązania — tego nie wiem.
 *
 * ROZGRANICZENIE. Piaseczno mówi o kupowaniu W PREZENCIE — tam sprzęt ma
 * jednego właściciela od początku. Gdańsk mówi o domu, w którym jedno chce,
 * a drugie nie. Tutaj obie osoby chcą i obie płacą.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, powszechnie znane):
 * — Wrocław leży nad Odrą, ma wyspy i dużą liczbę mostów.
 */
export const WROCLAW: CityContent = {
  slug: "wroclaw",
  h1: "Thermomix Wrocław – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Wrocław — przedstawiciel i cena",
  seoDescription:
    "Thermomix we Wrocławiu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Wrocław — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni we Wrocławiu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Wrocławia z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do wszystkich osiedli i do miejscowości wokół miasta.",

  highlights: highlightyStandardowe("Wrocław i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-6.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix we Wrocławiu – jak wygląda prezentacja?",
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
      id: "na-spolke",
      heading: "Miasto mostów — i zakup, na który składają się dwie osoby",
      paragraphs: [
        "Wrocław jest miastem, w którym to, co rozdzielone wodą, trzeba było ze sobą pospinać. Wykorzystam to do sytuacji, o której nikt nie pisze, a która na moich spotkaniach zdarza się często: na jedno urządzenie składają się dwie osoby. Para bez ślubu. Dwie siostry. Matka z córką. Dwie osoby, które mieszkają razem i razem gotują.",
        "To jest dobry pomysł i nie mam zamiaru go zniechęcać. Chcę tylko, żebyście ustalili między sobą kilka rzeczy PRZED zakupem, a nie pół roku później — bo później ustala się je już w gorszym nastroju.",
        "Rzecz pierwsza: dokument zakupu idzie na jedną osobę. Nie na dwie. Warto, żeby to była decyzja, a nie przypadek — a bardzo często jest przypadkiem, bo ktoś akurat miał przy sobie dowód. Ta osoba będzie stroną w każdej późniejszej sprawie: przy serwisie, przy reklamacji, przy wszystkim.",
        "Rzecz druga, jeśli bierzecie na raty: zobowiązanie ma ten, kto je podpisał. Nie ten, kto częściej używa, i nie ten, kto włożył więcej pieniędzy. Jeśli podpisuje jedna osoba, a druga oddaje jej połowę raty co miesiąc, to jest ustalenie między Wami dwiema — i tak też trzeba je traktować.",
        "Rzecz trzecia, najbardziej praktyczna i najczęściej lekceważona: sprzęt stoi w jednej kuchni. Osoba, u której stoi, będzie go używać, a druga po prostu przestanie — nie ze złej woli, tylko dlatego, że nikt nie wozi takiego urządzenia przez miasto dwa razy w tygodniu. Jeśli mieszkacie osobno, warto powiedzieć to sobie na głos, zanim wyłożycie pieniądze.",
        "I zdanie, którego nie przekroczę: nie jestem prawniczką i nie będę Wam doradzać w sprawach majątkowych ani mówić, komu co „się należy”, gdyby drogi się rozeszły. Nie znam się na tym i udawanie, że jest inaczej, wyrządziłoby więcej szkody niż milczenie. To, co mogę zrobić, to powiedzieć, jak wygląda strona organizacyjna — i tyle właśnie zrobiłam.",
        "Praktyczna rada na koniec, banalna i skuteczna: spiszcie sobie na kartce albo w wiadomości, kto ile dołożył i na kogo idzie zakup. Nie po to, żeby sobie nie ufać. Po to, żeby za dwa lata nikt nie musiał tego odtwarzać z pamięci.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację we Wrocławiu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli kupujecie we dwie osoby, powiedzcie o tym przy umawianiu — dobrze, żeby obie były na spotkaniu, bo pytania zwykle ma każda inne.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("we Wrocławiu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla wrocławskiej rodziny",
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

  districtsHeading: "Do których części Wrocławia dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać osiedle. Wpływa to na porę spotkania, a nie na jego koszt.",
  ],
  districts: [
    "Stare Miasto",
    "Śródmieście",
    "Krzyki",
    "Fabryczna",
    "Psie Pole",
    "Nadodrze",
    "Ołbin",
    "Karłowice",
    "Biskupin",
    "Gaj",
    "Muchobór",
    "Leśnica",
  ],

  nearbyHeading: "Poza Wrocław też przyjadę",
  nearbyParagraphs: [
    "Oleśnica, Oława, Trzebnica i Siechnice są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Oleśnica", "Oława", "Trzebnica", "Siechnice", "Kąty Wrocławskie", "Legnica"],

  about: blokOMnie("do Wrocławia", "we Wrocławiu i okolicy", REGION_DOLNOSLASKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Wrocławia bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości wokół niego. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("we Wrocławiu"),
    {
      question: "Kupujemy we dwie osoby, na kogo idzie zakup?",
      answer:
        "Na jedną — dokument zakupu nie ma dwóch nabywców. Warto, żeby to była świadoma decyzja, bo ta osoba będzie stroną przy serwisie i przy każdej późniejszej sprawie. Przy ratach zobowiązanie ma ten, kto podpisał, niezależnie od tego, kto ile dołożył.",
    },
    {
      question: "Mieszkamy osobno i chcemy się składać. Da się to używać na zmianę?",
      answer:
        "Teoretycznie tak, praktycznie prawie nigdy tak nie wychodzi. Sprzęt stoi w jednej kuchni i używa go ta osoba, u której stoi — nikt nie wozi takiego urządzenia przez miasto dwa razy w tygodniu. Warto to sobie powiedzieć przed zakupem, a nie po.",
    },
  ],

  geo: { lat: 51.1079, lng: 17.0385 },
};
