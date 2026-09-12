import type { CityContent } from "../city-content";
import {
  REGION_LODZKIE,
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
 * TUSZYN — gmina miejsko-wiejska w powiecie łódzkim wschodnim.
 * MIASTO 7 171 mieszkańców, GMINA 12 854 (31.12.2024, GUS).
 * Brief mówił 7 300 — niemal trafione.
 *
 * OBALONE: Tuszyn NIE WYLUDNIA SIĘ. Miasto −0,6% od 2002 r.,
 * ale CAŁA GMINA +11,0% dzięki napływowi z Łodzi; w 2024 r.
 * saldo migracji wewnętrznych +130 osób. Jedyna rosnąca gmina
 * w tej fali obok Konstantynowa.
 *
 * PRAWA MIEJSKIE 1416 r. od króla WŁADYSŁAWA JAGIEŁŁY, prawo
 * magdeburskie, z inicjatywy Dobiesława Kobyły z Żarek.
 * DNIA NIE PODAJĘ — źródła podają 16 albo 17 sierpnia.
 * Utrata praw 19 MAJA 1870 r. ukazem carskim, jako represja
 * po powstaniu styczniowym (miasto trafiło na listę 300
 * zdegradowanych). Przywrócenie 13 LIPCA 1924 r.
 *
 * FAKT OSIOWY DLA KĄTA: dokument lokacyjny z 1416 r. dał
 * miastu m.in. TARG TYGODNIOWY WE WTORKI. Oryginał się nie
 * zachował — znamy go z XVI-wiecznych kopii. Tradycja targowa
 * w Tuszynie ma zatem ponad 600 lat, a dziś przy trasie działa
 * duże targowisko: ponad tysiąc stoisk zadaszonych, kilkanaście
 * hektarów w kompleksie. NAZWY NIE PODAJĘ, a dane o skali
 * pochodzą z katalogu komercyjnego, więc PODAJĘ JE OGÓLNIE.
 *
 * OBALONE: Tuszyn-Las NIE JEST odrębną miejscowością — to jedna
 * z dziewięciu części miasta Tuszyna w rejestrze TERYT.
 * NIE POTWIERDZONO: historii Tuszyna-Lasu jako międzywojennego
 * letniska ani sadowniczego charakteru gminy. OBU WĄTKÓW
 * NIE UŻYWAM.
 *
 * KĄT: TARG. Kupowanie na targu a kupowanie w sklepie — i co
 * z jednym i z drugim robi to urządzenie. Kąt bierze się wprost
 * z przywileju Jagiełły z 1416 r.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że warzywa z targu są NIERÓWNE i to jest ich zaleta,
 *   ale też realny kłopot: nie da się gotować „na sztuki",
 * — że przy nierównych składnikach waga w urządzeniu przestaje
 *   być gadżetem i zaczyna być potrzebna,
 * — że targ rządzi się sezonem: kupuje się to, czego jest dużo
 *   i jest tanie, a potem trzeba wiedzieć, co z tym zrobić,
 * — że nadmiar z targu to nie problem sprzętu, tylko planowania
 *   — i że urządzenie skraca drogę od skrzynki do zupy,
 * — że kupowanie na kilogramy ma sens tylko wtedy, gdy
 *   przetworzy się to tego samego dnia albo następnego,
 * — i ODMOWA: nie doradzam nic o przechowywaniu, myciu
 *   warzyw ani o tym, co jeszcze nadaje się do jedzenia.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O MYCIU WARZYW, ŚRODKACH OCHRONY ROŚLIN,
 *   PRZECHOWYWANIU ani o ocenie świeżości. ODMOWA W TEKŚCIE.
 * — ŻADNYCH PORAD O PRZETWORACH I PASTERYZACJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani porównań „targ zdrowszy
 *   niż sklep". MÓWIĘ NIE.
 * — ŻADNYCH NAZW FIRM, targowisk ani centrów handlowych.
 * — ŻADNYCH LICZB o skali targowiska podanych jako pewne.
 * — ŻADNEGO DNIA lokacji (16 vs 17 sierpnia 1416).
 * — NIE PISZĘ o Tuszynie-Lesie jako o letnisku ani o sadach.
 * — NIE DOTYKAM problemu jakości wody w Tuszynie-Lesie
 *   (komunikaty z 2023 i 2024) — to bieżąca sprawa mieszkańców,
 *   nie scenografia.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Najpierw zakupy, potem
 * przepis — odwrócona kolejność" (inne miasto) dotyczy
 * PLANOWANIA i kolejności decyzji. „Spiżarnia" (Brusy) dotyczy
 * sytuacji, gdy czegoś NIE MA. „Marnowanie" (Rawa Mazowiecka)
 * dotyczy tego, co wyrzucamy. „Owoc, który nie poszedł
 * do skupu" dotyczy producenta. Tutaj chodzi o MIEJSCE ZAKUPU
 * i o to, że towar z targu jest nierówny, sezonowy i kupowany
 * w większych ilościach — czyli o konkretne konsekwencje
 * kuchenne.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ dnia nadania praw miejskich.
 * — NIE PODAJĘ nazwy ani dokładnych rozmiarów targowiska.
 * — NIE PISZĘ, że Tuszyn-Las to osobna miejscowość.
 * — NIE PISZĘ o letnisku ani o sadach — niepotwierdzone.
 * — NIE PODAJĘ listy sołectw — BIP niedostępny.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla gminy Tuszyn nie znalazłam żadnego.
 * — NIE TWIERDZĘ, że warzywa z targu są lepsze albo zdrowsze.
 * — districts: nie potwierdzono jednostek pomocniczych.
 *   PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 7 171, gmina 12 854 mieszkańców (31.12.2024, GUS);
 *   gmina urosła o 11,0% od 2002 r.,
 * — prawa miejskie 1416 r. od Władysława Jagiełły, prawo
 *   magdeburskie, z inicjatywy Dobiesława Kobyły z Żarek;
 *   dokument lokacyjny przyznał m.in. targ tygodniowy
 *   we wtorki, immunitet sądowy i wolnizny podatkowe,
 * — oryginał dokumentu nie zachował się; znany z XVI-wiecznych
 *   kopii w Bibliotece Czartoryskich w Krakowie,
 * — utrata praw miejskich 19 maja 1870 r. jako represja
 *   po powstaniu styczniowym; przywrócenie 13 lipca 1924 r.,
 * — pierwsza wzmianka o Tuszynie: 1260 r.,
 * — dziś przy trasie działa duże targowisko,
 * — dożynki gminno-parafialne 6 września 2026 r.
 */
export const TUSZYN: CityContent = {
  slug: "tuszyn",
  h1: "Thermomix Tuszyn – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Tuszyn (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Tuszynie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Tuszyn — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Tuszynie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Tuszyna z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Tuszyn i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Na targu nie kupuje się sztuk. Kupuje się kilogramy.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Tuszynie – jak wygląda prezentacja?",
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
      id: "targ",
      heading: "Sześćset lat targu we wtorki — czyli o kupowaniu na wagę",
      paragraphs: [
        "Kiedy w 1416 roku Władysław Jagiełło nadawał Tuszynowi prawa miejskie na prawie magdeburskim, w dokumencie lokacyjnym znalazł się między innymi targ tygodniowy we wtorki. Oryginał nie przetrwał — znamy go z szesnastowiecznych kopii przechowywanych w Bibliotece Czartoryskich. Sześćset lat później Tuszyn nadal jest miastem, do którego przyjeżdża się handlować: przy trasie działa jedno z większych targowisk w tej części Polski, z ponad tysiącem stoisk.",
        "Napiszę więc o tym, co kupowanie na targu robi z gotowaniem. Bo robi, i to konkretnie.",
        "Pierwsza rzecz, banalna, a decydująca: na targu nie kupuje się sztuk, tylko kilogramy. W sklepie bierze się „dwie marchewki”. Na targu bierze się kilogram i dostaje się siedem, jedenaście albo cztery — zależnie od tego, jak wyrosły. I tu pojawia się problem, którego w sklepie nie ma: przepisy pisane są na sztuki. „Średnia cebula”, „dwa ziemniaki”, „mała pietruszka”. Przy nierównym towarze te sztuki nic nie znaczą.",
        "Dlatego przy zakupach targowych waga w urządzeniu przestaje być gadżetem. Odmierza się bezpośrednio w naczyniu, w gramach, więc nie ma znaczenia, czy marchewki są duże, czy małe. To brzmi drobno, dopóki nie zrobicie zupy z warzyw, które akurat wyrosły dwa razy mniejsze niż zwykle.",
        "Druga rzecz: targ rządzi się sezonem. Kupuje się to, czego jest dużo, bo wtedy jest tanie — i przywozi się do domu skrzynkę, nie torebkę. Nadmiar to nie jest problem sprzętu, tylko planowania, i tego urządzenie za nikogo nie zrobi. Ale skraca drogę od skrzynki do gotowego: zupa krem, przecier, mus, farsz, pasta — wszystko w jednym naczyniu, bez blendera, bez trzech garnków. Kiedy przetworzenie pięciu kilogramów zajmuje popołudnie, a nie dwa dni, kupowanie na wagę zaczyna się opłacać naprawdę.",
        "Trzecia, uczciwa: kupowanie na kilogramy ma sens tylko wtedy, gdy przerobi się to tego samego dnia albo najdalej następnego. Inaczej połowa wyląduje w koszu i wyjdzie drożej niż w sklepie. To nie jest rada o sprzęcie, tylko o rachunku.",
        "I granica, przy której nie ustąpię: nie doradzę Wam nic o myciu warzyw, o pozostałościach środków ochrony roślin, o przechowywaniu ani o tym, czy coś jest jeszcze świeże. To jest bezpieczeństwo żywności i nie mam do tego kompetencji. Nie napiszę też, że warzywa z targu są zdrowsze od sklepowych — nie wiem tego i nikt tego za mnie nie sprawdził.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Tuszynie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli przywieziecie z targu coś, czego jest za dużo — powiedzcie przy umawianiu. Zrobimy z tego zupę albo przecier na miejscu, a resztę zabierzecie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Tuszynie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla tuszyńskiej rodziny",
      paragraphs: [
        "Samo miasto Tuszyn liczy nieco ponad siedem tysięcy mieszkańców, a cała gmina blisko trzynaście — i, co w tej części Polski rzadkie, gmina rośnie: od 2002 roku przybyło jej jedenaście procent ludności, głównie dzięki osobom przeprowadzającym się z Łodzi. Prawa miejskie na prawie magdeburskim nadał Tuszynowi w 1416 roku Władysław Jagiełło, z inicjatywy Dobiesława Kobyły z Żarek; dokument przyznał miastu między innymi targ tygodniowy we wtorki. Pierwsza wzmianka o miejscowości pochodzi z 1260 roku. W 1870 roku, jako represję po powstaniu styczniowym, Tuszyn znalazł się wśród trzystu miast pozbawionych praw miejskich — odzyskał je 13 lipca 1924 roku. Tradycja handlu trwa tu do dziś.",
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

  districtsHeading: "Do których części gminy Tuszyn dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, w tym do Tuszyna-Lasu, który jest częścią Tuszyna, a nie osobną miejscowością — oraz do wszystkich miejscowości gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Tuszyn też przyjadę",
  nearbyParagraphs: [
    "Rzgów, Pabianice, Łódź, Koluszki, Piotrków Trybunalski i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Rzgów", "Pabianice", "Łódź", "Koluszki", "Piotrków Trybunalski"],

  about: blokOMnie("do Tuszyna", "w Tuszynie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Tuszyna bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta — z Tuszynem-Lasem, który jest jego częścią — i do wszystkich miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o miasto Tuszyn w powiecie łódzkim wschodnim, a nie o wsie o tej samej nazwie w gminie Pajęczno czy Grabica.",
    },
    ...faqWspolne("w Tuszynie"),
    {
      question: "Czy waga w urządzeniu naprawdę jest potrzebna?",
      answer:
        "Przy zakupach na targu — tak, i to bardziej niż przy sklepowych. Na targu kupuje się kilogramy, nie sztuki, a przepisy pisane są na „średnią cebulę” i „dwa ziemniaki”. Przy nierównym towarze te sztuki nic nie znaczą; gramy znaczą zawsze.",
    },
    {
      question: "Co zrobić, gdy przywiozę z targu za dużo?",
      answer:
        "Przerobić tego samego dnia albo najdalej następnego — inaczej połowa wyląduje w koszu i wyjdzie drożej niż w sklepie. Urządzenie skraca drogę od skrzynki do gotowego: zupa krem, przecier, mus, farsz, pasta w jednym naczyniu, bez blendera i trzech garnków.",
    },
    {
      question: "Czy warzywa z targu są lepsze?",
      answer:
        "Nie napiszę Ci, że są zdrowsze — nie wiem tego. Są za to nierówne i sezonowe, a to ma konkretne konsekwencje w kuchni. I nie doradzę nic o myciu warzyw, przechowywaniu ani ocenie świeżości: to bezpieczeństwo żywności, nie sprzęt kuchenny.",
    },
  ],

  geo: { lat: 51.6104, lng: 19.5349 },
};
