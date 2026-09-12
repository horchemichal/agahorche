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
 * OTMUCHÓW — miasto w powiecie nyskim, 6 108 mieszkańców
 * (31.12.2024, GUS); cała gmina 12 650. Prawa miejskie
 * 29 LISTOPADA 1347 r., nadane przez biskupa wrocławskiego
 * PRZECŁAWA Z POGORZELI; nieprzerwanie do dziś. Działa tu
 * notowana na giełdzie spółka cukiernicza, która w 2025 r.
 * przestawiła się na produkcję ŻELKÓW. Jezioro Otmuchowskie
 * to SZTUCZNY zbiornik zaporowy na Nysie Kłodzkiej.
 *
 * UWAGA — HOMONIM: nie mylić OTMUCHOWA z OTMĘTEM (dzielnica
 * Krapkowic w tym samym województwie).
 *
 * KĄT: żelki, galaretki i kisiele — czyli rzeczy, które tężeją.
 * Miasto, w którym stoi fabryka żelków, jest jedynym właściwym
 * miejscem na stronę o tym, czego domowa kuchnia w tej kategorii
 * NIE podrobi, i o tym, co w niej naprawdę wychodzi.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że żelków w domu się nie zrobi, bo przemysłowe odlewa się
 *   w formach ze skrobi w suszarniach — to proces fabryczny,
 * — że galaretki, kisiele, musy i owoce w żelu wychodzą dobrze
 *   i że to jest realna, choć skromna, rodzina dań,
 * — że urządzenie pomaga w jednej konkretnej rzeczy: podgrzewa
 *   mieszając, więc żelatyna ani skrobia nie tworzą grudek
 *   i nic nie przywiera do dna,
 * — i że galaretki nie wolno zagotować — to jest cała sztuka.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o cukrze, żelatynie, pektynie
 *   ani o „domowym bez barwników". Nie buduję sprzedaży na
 *   sugerowaniu, że w wyrobach sklepowych jest coś złego —
 *   tym bardziej w mieście, które te wyroby produkuje.
 * — ŻADNEJ KRYTYKI tutejszej fabryki ani jej produktów.
 * — ŻADNYCH PORAD O TRWAŁOŚCI I PRZECHOWYWANIU deserów
 *   z żelatyną. Bezpieczeństwo żywności — jedno zdanie.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Czekolada i polewy"
 * (Kunów) dotyczy temperowania czekolady. „Dżemy i konfitury"
 * (Paczków) dotyczą gotowania owoców z cukrem na długo.
 * „Cukier" (Koprzywnica) dotyczy cukru jako składnika
 * i poparzenia karmelem. Tutaj chodzi o TĘŻENIE: żelatynę,
 * pektynę i skrobię — i o granicę między domem a fabryką.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ NAZWY SPÓŁKI ANI LICZBY ZATRUDNIONYCH. Firma
 *   jest ustalona, ale jej nie reklamuję; podana w źródłach
 *   liczba dotyczy całej grupy, nie zakładu w Otmuchowie.
 * — NIE PISZĘ, że rozbudowa linii żelkowych była w Otmuchowie.
 *   Potwierdzona rozbudowa dotyczyła zakładu w NYSIE.
 * — NIE PODAJĘ roku pierwszej edycji „Lata Kwiatów". Podawana
 *   data 1946 nie zgadza się z numeracją edycji.
 * — NIE ROZSTRZYGAM lat budowy zbiornika (1926 czy 1928 –1933).
 *   Piszę „w latach dwudziestych i trzydziestych".
 * — NIE PISZĘ, że Otmuchów ma dwujęzyczne tablice. NIE MA.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych. Brak.
 * — OSIEDLA SĄ PRAWDZIWE, ale z zastrzeżeniem: statut gminy
 *   z 2019 r. wymienia pięć osiedli, w tym Wójcice, które są
 *   też nazwą odrębnej miejscowości. Dlatego w districts
 *   podaję tylko cztery, co do których nie mam wątpliwości,
 *   a w tekście piszę o „osiedlach statutowych" ostrożnie.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 29 listopada 1347 r., biskup Przecław
 *   z Pogorzeli; początkowo prawo polskie, po 1368 r. zachodnie,
 * — w mieście działa giełdowa spółka cukiernicza, od 2025 r.
 *   skoncentrowana na żelkach,
 * — Jezioro Otmuchowskie: zbiornik zaporowy na Nysie Kłodzkiej,
 *   ok. 2 200 ha, blisko 143 mln m³, wał ok. 6,5 km,
 * — zamek biskupów wrocławskich jest dziś domem kultury
 *   z hotelem, restauracją i wieżą widokową; nie jest ruiną,
 * — zamek należał niegdyś do rodziny Wilhelma von Humboldta,
 *   a jego wnuk sprzedał go miastu pod koniec lat dwudziestych,
 * — coroczne „Lato Kwiatów" — w 2026 r. odbyła się 53. edycja,
 * — 6 108 mieszkańców (31.12.2024).
 */
export const OTMUCHOW: CityContent = {
  slug: "otmuchow",
  h1: "Thermomix Otmuchów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Otmuchów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Otmuchowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Otmuchów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Otmuchowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Otmuchowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Otmuchów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Żelków w domu nie zrobicie. Galaretki — owszem, i to dobre.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Otmuchowie – jak wygląda prezentacja?",
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
      id: "zelki",
      heading: "Miasto, w którym robi się żelki — i granica, której domowa kuchnia nie przekroczy",
      paragraphs: [
        "W Otmuchowie stoi fabryka słodyczy, która w ostatnich latach przestawiła się na produkcję żelków. Trudno o lepsze miejsce, żeby powiedzieć rzecz, którą sprzedawcy sprzętu mówią niechętnie: żelków w domu nie zrobicie. Nie „trudno je zrobić” — nie zrobicie.",
        "Powód jest techniczny i prosty. Przemysłowe żelki odlewa się w formach wyciśniętych w skrobi, a potem suszy przez wiele godzin w komorach o kontrolowanej wilgotności. To jest ciąg produkcyjny wielkości hali, nie garnek. Żadne urządzenie kuchenne tego nie zastąpi i moje też nie.",
        "Ale rodzina rzeczy tężejących jest znacznie szersza niż żelki — i ta reszta w domu wychodzi bardzo dobrze.",
        "Galaretki z sokiem albo z owocami. Kisiele, także te bez proszku, na samej skrobi. Musy i przeciery owocowe, które po schłodzeniu trzymają kształt. Warstwowe desery dla dzieci. Zimne serniki na żelatynie. Panna cotta.",
        "Urządzenie pomaga tu w jednej konkretnej rzeczy i warto wiedzieć, w jakiej: podgrzewa, mieszając bez przerwy. A żelatyna i skrobia mają dokładnie dwa problemy — robią grudki i przywierają do dna. Kiedy coś miesza cały czas, oba znikają. Kisiel bez grudek i bez zapachu przypalonej skrobi to nie jest wielkie kulinarne osiągnięcie, ale jest to dokładnie ta rzecz, przy której ludzie w garnku najczęściej się poddają.",
        "Jedna zasada, która decyduje o wszystkim: galaretki nie wolno zagotować. Żelatyna w zbyt wysokiej temperaturze traci zdolność tężenia i deser po prostu nie zastygnie — a wyjdzie to na jaw dopiero po czterech godzinach w lodówce, czyli wtedy, gdy jest już za późno. Urządzenie z ustawioną temperaturą pilnuje tego lepiej niż człowiek przy garnku, bo nie odchodzi do telefonu.",
        "Czego nie doradzę: jak długo taki deser może stać i po czym poznać, że już nie powinien. To bezpieczeństwo żywności, a nie sprzęt kuchenny.",
        "I nie napiszę Wam, że domowe jest zdrowsze od kupnego. Nie wiem tego, nie wolno mi tak mówić, a w mieście, które żyje z produkcji słodyczy, byłoby to zwyczajnie nie w porządku.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Otmuchowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu są dzieci, powiedzcie to przy umawianiu — zrobimy coś, co po schłodzeniu tężeje, bo to zwykle robi na najmłodszych największe wrażenie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Otmuchowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla otmuchowskiej rodziny",
      paragraphs: [
        "Otmuchów liczy nieco ponad sześć tysięcy mieszkańców, a cała gmina ponad dwanaście i pół tysiąca. Prawa miejskie nadał mu 29 listopada 1347 roku biskup wrocławski Przecław z Pogorzeli — ten sam, który trzy lata wcześniej kupił Grodków — i miasto nigdy ich nie straciło. Zamek biskupów wrocławskich nie jest tu ruiną: mieści dom kultury z hotelem, restauracją i wieżą widokową, a przez pewien czas należał do rodziny Wilhelma von Humboldta; wnuk uczonego sprzedał go miastu pod koniec lat dwudziestych. Jezioro Otmuchowskie, wbrew pozorom, nie jest naturalne — to zbiornik zaporowy na Nysie Kłodzkiej o powierzchni około dwóch tysięcy dwustu hektarów, usypany w latach dwudziestych i trzydziestych. Co roku miasto organizuje „Lato Kwiatów”; w 2026 odbyła się pięćdziesiąta trzecia edycja.",
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

  districtsHeading: "Do których części Otmuchowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — Otmuchów jest jednym z niewielu tak małych miast, które mają statutowy podział na osiedla — oraz do sołectw gminy, bez dopłaty za dojazd.",
    "Przy umawianiu wystarczy podać ulicę albo nazwę miejscowości; do dalszych wsi gminy przyjeżdżam tak samo bezpłatnie.",
  ],
  districts: ["Śródmieście", "Nieradowice", "Sarnowice", "Śliwice"],

  nearbyHeading: "Poza Otmuchów też przyjadę",
  nearbyParagraphs: [
    "Nysa, Paczków, Głuchołazy, Grodków, Prudnik i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nysa", "Paczków", "Głuchołazy", "Grodków", "Prudnik", "Brzeg"],

  about: blokOMnie("do Otmuchowa", "w Otmuchowie i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Otmuchowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Otmuchów w powiecie nyskim, nie o Otmęt — dzielnicę Krapkowic.",
    },
    ...faqWspolne("w Otmuchowie"),
    {
      question: "Czy zrobię w Thermomiksie żelki?",
      answer:
        "Nie. Przemysłowe żelki odlewa się w formach ze skrobi i suszy godzinami w komorach o kontrolowanej wilgotności — to ciąg produkcyjny wielkości hali, nie garnek. Żadne urządzenie kuchenne tego nie zastąpi.",
    },
    {
      question: "A co z galaretek i kisieli wychodzi dobrze?",
      answer:
        "Właściwie wszystko, co tężeje: galaretki z sokiem i owocami, kisiele także te bez proszku, musy owocowe, zimne serniki na żelatynie, panna cotta. Urządzenie podgrzewa mieszając, więc żelatyna i skrobia nie robią grudek i nic nie przywiera do dna.",
    },
    {
      question: "Dlaczego moja galaretka czasem nie tężeje?",
      answer:
        "Najczęściej dlatego, że została zagotowana — żelatyna w zbyt wysokiej temperaturze traci zdolność tężenia, a wychodzi to na jaw dopiero po kilku godzinach w lodówce. Ustawiona temperatura pilnuje tego lepiej niż człowiek przy garnku, bo nie odchodzi do telefonu.",
    },
  ],

  geo: { lat: 50.4661, lng: 17.1734 },
};
