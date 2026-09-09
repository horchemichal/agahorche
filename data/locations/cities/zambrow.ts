import type { CityContent } from "../city-content";
import {
  REGION_PODLASIE,
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
 * ZAMBRÓW — miasto na pograniczu Mazowsza i Podlasia, bez kolei,
 * za to na skrzyżowaniu trzech dróg krajowych. Z powiatu pochodzi
 * kumpia wieprzowa z komina — jeden z niecałych pięćdziesięciu
 * podlaskich wpisów na ministerialnej Liście Produktów Tradycyjnych.
 *
 * KĄT: wędzenie i peklowanie. To jedyne miejsce w serwisie, w którym
 * ten temat w ogóle się pojawia — i jest to najostrzejsza odmowa
 * na całej stronie, ostrzejsza nawet niż grzybowa w Goleniowie.
 * Peklowanie mięsa to dziedzina, w której zła podpowiedź nie kończy się
 * niesmacznym obiadem, tylko zatruciem jadem kiełbasianym.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — odmowa NA POCZĄTKU, nie na końcu: nie doradzam nic o peklowaniu,
 *   soleniu, wędzeniu, dojrzewaniu ani o tym, co jeszcze nadaje się
 *   do zjedzenia. Ani proporcji, ani czasów, ani „domowych sposobów",
 * — czego urządzenie NIE robi: nie wędzi, nie pekluje, nie dojrzewa,
 *   nie zastępuje wędzarni ani chłodni. Nie ma tu żadnej funkcji,
 *   którą można by w tej sprawie obiecać,
 * — co robi z mięsem, które JUŻ jest gotowe i bezpieczne: mieli, robi
 *   farsze, pasztety, pasty, gulasze i bigos w jednym naczyniu,
 * — i szacunek dla rzemiosła: kumpia powstaje u konkretnego człowieka
 *   według receptury, której nie podaję i nie streszczam.
 *
 * TWARDE GRANICE — NAJOSTRZEJSZE W SERWISIE:
 * — ABSOLUTNIE ŻADNYCH PORAD O PEKLOWANIU, SOLENIU, WĘDZENIU
 *   I DOJRZEWANIU MIĘSA. Żadnych proporcji soli, żadnych czasów,
 *   żadnych temperatur, żadnych „u nas w domu robiło się tak".
 *   Odmowa ma być postawiona NA POCZĄTKU sekcji.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU I BEZPIECZEŃSTWIE ŻYWNOŚCI
 *   (zasada ze Skierniewic).
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW — także przy tym,
 *   co urządzenie faktycznie robi.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o mięsie ani o wędlinach.
 * — NIE PODAJĘ ANI NIE STRESZCZAM RECEPTURY kumpii wieprzowej z komina.
 *   To wyrób konkretnej osoby, wpisany na listę ministerialną.
 *
 * ROZGRANICZENIE. Goleniów odmawia rozpoznawania grzybów, Wieluń —
 * doradzania o mleku surowym, Skierniewice ustanawiają samą zasadę
 * odmowy. Tutaj chodzi o PEKLOWANIE I WĘDZENIE MIĘSA.
 *
 * ODRZUCONE KĄTY (research je podpowiadał, ale nie weszły):
 * — „dom kierowcy" — ruch tranzytowy jest tu duży i potwierdzony
 *   (ok. 12 tys. pojazdów na dobę w GPR 2020/2021, w tym 1 588 ciężkich),
 *   ale researcher NIE potwierdził żadnej nazwanej firmy transportowej,
 *   bazy ani parkingu w mieście. Pisanie strony o kierowcach na samej
 *   statystyce ruchu byłoby domysłem,
 * — „miasto po upadku zakładu" (Zamtex, 57 lat, blisko 4 tys. osób
 *   w szczycie, likwidacja w 2011) — kąt zajęty przez Tarnobrzeg.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — miasto liczy 20 777 mieszkańców na 19 km² (GUS, 31.12.2024),
 * — kumpia wieprzowa z komina została wpisana na ministerialną Listę
 *   Produktów Tradycyjnych w 2005 r.; zgłosił ją Andrzej Modzelewski
 *   z Woli Zambrowskiej — czyli z gminy WIEJSKIEJ Zambrów, nie z miasta,
 * — województwo podlaskie ma na tej liście ok. pięćdziesięciu pozycji,
 *   dla porównania podkarpackie ponad sto pięćdziesiąt,
 * — Stowarzyszenie Zambrowskie Produkty Lokalne działa od 5 kwietnia
 *   2005 r. i liczy dziewiętnastu członków; dwudziestolecie obchodziło
 *   15 listopada 2025 r.,
 * — miasto nie ma kolei: ruch pasażerski istniał tylko w latach
 *   1958–1962, towarowy do 1998 r., a na miejscu wyburzonego dworca
 *   powstała obwodnica miejska; najbliższa czynna stacja to Czyżew,
 *   ok. 22 km stąd,
 * — obwodnica w ciągu S8 (11,07 km) została oddana jesienią 2012 r.
 *   — GDDKiA podaje listopad, lokalny portal 2 października,
 * — pierwsza wzmianka 1283 (wieś książęca), prawa miejskie 1430,
 *   utrata praw 1870 po powstaniu styczniowym, odzyskanie 1919,
 * — kościół Trójcy Przenajświętszej budowano w latach 70. XIX w.,
 *   a konsekrowano dopiero 4 czerwca 1925 r.,
 * — bezrobocie 6,5% to wskaźnik POWIATU — GUS nie liczy go dla gmin,
 *   więc w tekście go nie ma.
 */
export const ZAMBROW: CityContent = {
  slug: "zambrow",
  h1: "Thermomix Zambrów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Zambrów — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Zambrowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zambrów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Zambrowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Zambrowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Zambrów i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-3.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "O peklowaniu nie doradzam ani zdania. Zaczynam od tego, a nie kończę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zambrowie – jak wygląda prezentacja?",
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
      id: "wedzenie",
      heading: "Kumpia z komina — i temat, w którym nie doradzam ani zdania",
      paragraphs: [
        "Z powiatu zambrowskiego pochodzi kumpia wieprzowa z komina — wpisana na ministerialną Listę Produktów Tradycyjnych w dwa tysiące piątym roku, zgłoszona przez Andrzeja Modzelewskiego z Woli Zambrowskiej. To rzadkość: całe Podlaskie ma na tej liście około pięćdziesięciu pozycji, podczas gdy Podkarpackie ponad sto pięćdziesiąt. Od tego samego roku działa tu też Stowarzyszenie Zambrowskie Produkty Lokalne, które w listopadzie dwa tysiące dwudziestego piątego obchodziło dwudziestolecie.",
        "Skoro więc trafiam do domów w okolicy, w której peklowanie i wędzenie są normalną, żywą umiejętnością, muszę zacząć od odmowy — i tym razem stawiam ją naprawdę na początku, bo w tej jednej sprawie kolejność ma znaczenie.",
        "Nie doradzam nic o peklowaniu, soleniu, wędzeniu i dojrzewaniu mięsa. Żadnych proporcji, żadnych czasów, żadnych „u nas w domu robiło się tak”. Nie ocenię też, czy coś jeszcze nadaje się do zjedzenia. Powód jest bardzo konkretny: pomyłka w tej dziedzinie nie kończy się niesmacznym obiadem, tylko zatruciem, przy którym trafia się do szpitala. Jestem przedstawicielką handlową, a nie masarzem ani technologiem żywności, i nie zamierzam udawać, że jest inaczej. Od tego są ludzie, którzy się tego uczyli — na przykład ci, którzy tę kumpię robią.",
        "Idzie za tym rzecz, którą też trzeba powiedzieć wprost. To urządzenie nie wędzi. Nie pekluje. Nie dojrzewa niczego. Nie zastępuje wędzarni, komina ani chłodni. Nie ma tu żadnej funkcji, którą mogłabym Wam w tej sprawie obiecać, a gdyby ktokolwiek taką obiecywał, warto zapytać, na jakiej podstawie.",
        "I jeszcze jedno, zanim przejdę dalej: nie podam ani nie streszczę receptury kumpii. To jest wyrób konkretnego człowieka, robiony według sposobu, który doprowadził go na listę ministerialną. Nie jest mój do rozdawania.",
        "Teraz część, o której mogę mówić spokojnie — czyli co urządzenie robi z mięsem, które ktoś kompetentny uznał już za gotowe i bezpieczne. Mieli, i to jest może najuczciwszy przykład, bo maszynki do mielenia mało kto lubi myć. Robi farsze do pierogów, gołąbków i pasztecików. Robi pasztety i pasty mięsne, w których cała trudność polega na rozdrobnieniu i wymieszaniu. Gotuje gulasz i bigos bez stania obok, w jednym naczyniu — a bigos akurat jest daniem, w którym pilnowanie, żeby nie przywarło, to połowa roboty.",
        "Czego nie zrobi poza wędzeniem: nie usmaży. Kotlet, schabowy, karkówka z grilla — to patelnia i ruszt, i tak zostanie. Jeśli w Waszym domu mięso to głównie smażenie, ten sprzęt niewiele w tej sprawie zmieni i wolę, żebyście wiedzieli to przed zakupem, a nie po.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zambrowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli chcecie, na spotkaniu zrobimy farsz albo pasztet z Waszego mięsa — pod warunkiem, że to Wy odpowiadacie za to, co trafia do naczynia.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zambrowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla zambrowskiej rodziny",
      paragraphs: [
        "Zambrów jest miastem bez kolei — pociągi pasażerskie jeździły tu tylko przez cztery lata na przełomie lat pięćdziesiątych i sześćdziesiątych, a na miejscu wyburzonego dworca stoi dziś obwodnica. Najbliższa czynna stacja jest w Czyżewie, ponad dwadzieścia kilometrów stąd. W praktyce znaczy to, że wszystko dzieje się samochodem, a dzień układa się wokół tego, kto i kiedy wraca.",
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

  districtsHeading: "Do których części Zambrowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości, bez dopłaty za dojazd.",
    "Miasto nie ma urzędowego podziału na osiedla — nazwy, których się tu używa, pochodzą od osiedli spółdzielczych. Przy umawianiu najprościej podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Zambrów też przyjadę",
  nearbyParagraphs: [
    "Kołaki Kościelne, Rutki, Szumowo i wsie gminy wiejskiej są w zasięgu jednej trasy, podobnie Łomża i Wysokie Mazowieckie — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kołaki Kościelne", "Rutki", "Szumowo", "Łomża", "Wysokie Mazowieckie", "Czyżew"],

  about: blokOMnie("do Zambrowa", "w Zambrowie i okolicy", REGION_PODLASIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Zambrowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Zambrowie"),
    {
      question: "Doradzisz, jak zapeklować albo uwędzić mięso?",
      answer:
        "Nie. Nie doradzam nic o peklowaniu, soleniu, wędzeniu ani dojrzewaniu — żadnych proporcji i żadnych czasów. Pomyłka w tej dziedzinie nie kończy się niesmacznym obiadem, tylko zatruciem, przy którym trafia się do szpitala. Jestem przedstawicielką handlową, nie masarzem. Od tego są ludzie, którzy się tego uczyli.",
    },
    {
      question: "Czy to urządzenie wędzi?",
      answer:
        "Nie. Nie wędzi, nie pekluje i niczego nie dojrzewa — nie ma tu funkcji, którą mogłabym w tej sprawie obiecać. Z mięsem, które już jest gotowe, robi za to farsze, pasztety, pasty, gulasz i bigos w jednym naczyniu. Nie usmaży natomiast kotleta — to patelnia i tak zostanie.",
    },
    {
      question: "Dostanę przepis na kumpię z komina?",
      answer:
        "Nie ode mnie. To wyrób konkretnego człowieka z Woli Zambrowskiej, wpisany na ministerialną Listę Produktów Tradycyjnych, i nie jest mój do rozdawania. Chętnie za to pokażę, co urządzenie robi z mięsem na Waszym własnym, domowym przepisie.",
    },
  ],

  geo: { lat: 52.9856, lng: 22.2436 },
};
