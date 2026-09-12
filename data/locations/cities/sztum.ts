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
 * SZTUM — miasto powiatowe na Powiślu, 8 985 mieszkańców
 * (31.12.2024, GUS). Brief mówił 10 000 — zawyżone.
 *
 * PRAWA MIEJSKIE: 23 WRZEŚNIA 1416 r., nadane przez wielkiego
 * mistrza MICHAŁA KÜCHMEISTERA. Data ustalona w pracy naukowej
 * z 2025 r.; starsze źródła podają rok bez dnia albo błędnie.
 *
 * ZAMEK: dawna letnia rezydencja wielkich mistrzów krzyżackich,
 * dziś ODDZIAŁ MUZEUM ZAMKOWEGO W MALBORKU. Wystawa stała
 * otwarta 15 GRUDNIA 2024 r.; frekwencja wzrosła z ok. 2 500
 * do ok. 20 000 zwiedzających rocznie.
 *
 * PRODUKT Z LISTY PRODUKTÓW TRADYCYJNYCH: PIERNIK STAROPOLSKI
 * Z POWIŚLA, wpis 2023 r. TO JEST OŚ STRONY.
 *
 * KĄT: PIERNIKI. Ciasto, które musi poleżeć — czyli jedyne
 * ciasto w polskiej kuchni, przy którym CZAS jest składnikiem,
 * a nie przeszkodą. To odwraca całą narrację sprzedażową
 * o oszczędzaniu czasu i dlatego jest kątem wartym strony.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy piernikach urządzenie NIE SKRACA czasu i nie ma
 *   jak go skrócić — ciasto musi leżeć tygodniami i to jest
 *   sedno,
 * — że to jest dobry moment, żeby powiedzieć, czego ten sprzęt
 *   NIE ROZWIĄZUJE,
 * — co realnie robi: wyrabia ciężkie, gęste ciasto piernikowe
 *   bez mordowania rąk, podgrzewa i miesza miód z tłuszczem
 *   bez przypalania, miele przyprawy i orzechy, robi lukier
 *   i masy przekładane,
 * — że mielenie przypraw w domu naprawdę zmienia zapach
 *   i to nie jest marketing,
 * — że wyrabianie ciężkiego ciasta jest realnym obciążeniem
 *   dla nadgarstków i dla części osób to jest główny argument,
 * — i że pieczenie odbywa się w piekarniku, a nie w urządzeniu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O LEŻAKOWANIU CIASTA — ile tygodni, w jakiej
 *   temperaturze, w czym trzymać. To jest bezpieczeństwo
 *   żywności przy długim przechowywaniu. ODMOWA W TEKŚCIE.
 * — ŻADNEJ RECEPTURY piernika staropolskiego z Powiśla —
 *   to jest cudzy produkt z Listy, nie mój przepis.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o przyprawach (imbir,
 *   cynamon, goździki). To jest szczególna pokusa i mówię NIE.
 * — ŻADNYCH NAZW FIRM.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Tort na okazję" (Byczyna)
 * dotyczy jednego wypieku na uroczystość i tremy. „Ciasto
 * drożdżowe" (Wołczyn) dotyczy wyrastania i drożdży. „Kołocz
 * śląski" (Głogówek) dotyczy produktu regionalnego z ChOG.
 * „Danie robione raz w roku" (Niemodlin) dotyczy potrawy,
 * nie wypieku, i tremy przed nią. Tutaj chodzi o CIASTO,
 * KTÓRE MUSI LEŻEĆ — o czas jako składnik.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ receptury ani składu piernika z Listy.
 * — NIE PISZĘ, ile tygodni ciasto ma leżeć i w jakich warunkach.
 * — NIE PODAJĘ cen biletów ani godzin otwarcia zamku.
 * — NIE PISZĘ, że zamek jest w całości zachowany — zachowane
 *   są części, a wystawa stała działa od grudnia 2024 r.
 * — NIE PRZYPISUJĘ przyprawom żadnego działania na zdrowie.
 * — districts: miasto nie ma statutowych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 8 985 mieszkańców (31.12.2024, GUS),
 * — prawa miejskie 23 września 1416 r. od wielkiego mistrza
 *   Michała Küchmeistera,
 * — zamek jako oddział Muzeum Zamkowego w Malborku, wystawa
 *   stała od 15 grudnia 2024 r., frekwencja z ok. 2 500 do
 *   ok. 20 000 rocznie,
 * — piernik staropolski z Powiśla na Liście Produktów
 *   Tradycyjnych od 2023 r.
 */
export const SZTUM: CityContent = {
  slug: "sztum",
  h1: "Thermomix Sztum – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Sztum (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Sztumie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sztum — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Sztumie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Sztumu z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do sołectw gminy.",

  highlights: highlightyStandardowe("Sztum i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Są ciasta, których nie da się przyspieszyć. I dobrze.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Sztumie – jak wygląda prezentacja?",
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
      id: "pierniki",
      heading: "Ciasto, które musi poleżeć — czyli o piernikach i o tym, czego nie da się przyspieszyć",
      paragraphs: [
        "Piernik staropolski z Powiśla jest od 2023 roku na Liście Produktów Tradycyjnych. Sztum, z prawami miejskimi z 23 września 1416 roku i zamkiem, który był letnią rezydencją wielkich mistrzów krzyżackich, jest dobrym miejscem, żeby napisać o piernikach coś, co psuje typową rozmowę handlową.",
        "Bo cała sprzedaż tego urządzenia opiera się na jednym zdaniu: „oszczędzisz czas”. A piernik jest ciastem, w którym CZAS JEST SKŁADNIKIEM. Ciasto piernikowe musi poleżeć — tygodniami — i nie ma sprzętu na świecie, który by to skrócił. Ani ten, ani żaden inny. Jeżeli ktoś Wam powie inaczej, to nie robił pierników.",
        "Uważam, że warto to powiedzieć głośno, bo pokazuje granicę. Ten sprzęt skraca pracę RĄK, a nie czas, którego potrzebuje jedzenie. Nie przyspieszy kiszenia, nie przyspieszy dojrzewania, nie przyspieszy leżakowania ciasta i nie przyspieszy bigosu, który jest lepszy trzeciego dnia. Kto tego szuka, ten szuka czegoś, co nie istnieje.",
        "A teraz to, co przy piernikach robi naprawdę — i jest tego sporo.",
        "Po pierwsze: wyrabia. Ciasto piernikowe jest ciężkie, gęste i oporne, a wyrabianie go ręką to jest praca, po której bolą nadgarstki. Dla części osób — zwłaszcza tych, które mają z rękami jakikolwiek kłopot — to jest jedyny argument, jakiego potrzebują, i najuczciwszy ze wszystkich.",
        "Po drugie: podgrzewa miód z tłuszczem, mieszając. Kto kiedyś przypalił miód na dnie garnka, wie, że nie da się tego odratować i że cała partia idzie do kosza. Tutaj to się po prostu nie zdarza.",
        "Po trzecie, i to jest różnica, którą się czuje: miele przyprawy. Cynamon, goździki, ziele angielskie, kardamon, imbir — zmielone tuż przed użyciem pachną zupełnie inaczej niż z torebki, która stoi w szafce od dwóch lat. To nie jest marketing, tylko rzecz, którą każdy sprawdzi jednym wąchnięciem. I od razu zaznaczę: mówię o zapachu i o smaku, o niczym więcej. Nie napiszę Wam, że imbir czy cynamon na cokolwiek pomagają — to jest przyprawa, nie lekarstwo.",
        "Po czwarte: miele orzechy, robi lukier, masy przekładane i polewę.",
        "Czego nie robi: nie piecze. Pieczenie jest w piekarniku i tak zostanie.",
        "I ostatnia rzecz, przy której nie ustąpię: nie doradzę Wam, ile tygodni ciasto ma leżeć, w jakiej temperaturze ani w czym je trzymać. Przechowywanie jedzenia przez tygodnie to jest bezpieczeństwo żywności, a nie obsługa sprzętu. Po tę wiedzę idźcie do kogoś, kto pierniki robi od lat — w Sztumie takich osób nie brakuje.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Sztumie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli planujecie pierniki, umówmy się odpowiednio wcześniej — nie dlatego, żebym Was popędzała, tylko dlatego, że to ciasto naprawdę potrzebuje zapasu czasu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Sztumie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla sztumskiej rodziny",
      paragraphs: [
        "Sztum liczy niespełna dziewięć tysięcy mieszkańców i jest miastem powiatowym na Powiślu. Prawa miejskie otrzymał 23 września 1416 roku od wielkiego mistrza Michała Küchmeistera — dokładną datę ustalono w pracy naukowej dopiero w 2025 roku, bo wcześniej podawano sam rok. Tutejszy zamek, dawna letnia rezydencja wielkich mistrzów, jest dziś oddziałem Muzeum Zamkowego w Malborku; od otwarcia wystawy stałej 15 grudnia 2024 roku liczba zwiedzających wzrosła z około dwóch i pół tysiąca do około dwudziestu tysięcy rocznie. Z Powiśla pochodzi też piernik staropolski, wpisany w 2023 roku na Listę Produktów Tradycyjnych.",
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

  districtsHeading: "Do których części Sztumu dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy — Czernina, Postolina, Gościszewa, Piekła, Koniecwałdu i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Miasto nie dzieli się na statutowe osiedla, więc przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Sztum też przyjadę",
  nearbyParagraphs: [
    "Malbork, Kwidzyn, Dzierzgoń, Prabuty, Nowy Staw i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Malbork", "Kwidzyn", "Dzierzgoń", "Prabuty", "Nowy Staw"],

  about: blokOMnie("do Sztumu", "w Sztumie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Sztumu bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Sztumie"),
    {
      question: "Czy Thermomix przyspieszy robienie pierników?",
      answer:
        "Nie i nikt tego nie zrobi. Ciasto piernikowe musi poleżeć tygodniami — czas jest tu składnikiem. Ten sprzęt skraca pracę rąk, a nie czas, którego potrzebuje jedzenie.",
    },
    {
      question: "To w czym pomaga przy piernikach?",
      answer:
        "Wyrabia ciężkie ciasto, którego ręką wyrabia się do bólu nadgarstków. Podgrzewa miód z tłuszczem, mieszając, więc nic się nie przypala. Miele przyprawy tuż przed użyciem — a to naprawdę słychać w zapachu. Robi lukier, masy i mielone orzechy. Nie piecze: pieczenie jest w piekarniku.",
    },
    {
      question: "Ile ciasto piernikowe ma leżeć i gdzie?",
      answer:
        "Tego nie doradzę — przechowywanie jedzenia przez tygodnie to bezpieczeństwo żywności, a nie obsługa sprzętu. Po taką wiedzę warto pójść do kogoś, kto pierniki robi od lat.",
    },
  ],

  geo: { lat: 53.9214, lng: 19.0311 },
};
