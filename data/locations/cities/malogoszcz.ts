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
 * MAŁOGOSZCZ — miasto w powiecie jędrzejowskim, 3 330 mieszkańców
 * (31.12.2024, GUS). Pierwsza wzmianka: bulla arcybiskupa
 * gnieźnieńskiego z 1136 r. Prawa miejskie 1408 r. od Władysława
 * Jagiełły. Działa tu duża cementownia, obchodząca w 2024 r.
 * pięćdziesięciolecie.
 *
 * KĄT: ryż — czyli o proporcji, nie o temperaturze. Miasto
 * cementowni, czyli zakładu, w którym o wszystkim decyduje
 * proporcja mieszanki, jest właściwym miejscem na jedyną stronę
 * w serwisie o ryżu — bo przy ryżu w zamkniętym naczyniu liczy się
 * ILOŚĆ WODY, i to inaczej niż w garnku.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że w zamkniętym naczyniu prawie nic nie odparowuje, więc ilość
 *   wody z przepisu „na garnek" będzie ZA DUŻA i ryż wyjdzie mokry,
 * — że to nie jest wada urządzenia, tylko inna fizyka — i że
 *   przepisy urządzenia mają to już przeliczone,
 * — że ryż nie przywrze i nie wykipi, więc nie trzeba przy nim stać,
 * — czego NIE zrobi: ryżu smażonego, zapiekanego ani z chrupiącym
 *   spodem,
 * — i uczciwie: przy jednej torebce ryżu garnek jest prostszy.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH KONKRETNYCH PROPORCJI, CZASÓW ANI USTAWIEŃ. Piszę
 *   WYŁĄCZNIE o kierunku („mniej wody niż w garnku"), nigdy
 *   o liczbach. Liczby są w przepisach urządzenia.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH (biały kontra brązowy, indeks,
 *   arsen w ryżu). To nie jest strona dietetyczna ani medyczna.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU UGOTOWANEGO RYŻU. To jest
 *   dziedzina bezpieczeństwa żywności i akurat przy ryżu pytanie
 *   bywa poważne — tym bardziej nie moja rzecz.
 * — ŻADNEJ KRYTYKI ryżu w torebkach ani producentów.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Kasza" (Dukla) dotyczy ziarna
 * zbożowego, a osią jest tam KONSYSTENCJA (bardziej zwarta niż
 * z garnka). „Strączki" (Sędziszów świętokrzyski) — osią jest CZAS
 * MOCZENIA. „Makaron" (Radymno) — POJEMNOŚĆ. „Ziemniaki" (Nowa
 * Sarzyna) — inny surowiec. Tutaj osią jest PROPORCJA WODY
 * i to, że przepis napisany na garnek trzeba przeliczyć.
 * Każde z tych czterech miast mówi o innym ograniczeniu i tak ma
 * zostać.
 *
 * ŚWIADOME POMINIĘCIE — ODNOTOWANE, NIEUŻYTE:
 * — DWIE BITWY POD MAŁOGOSZCZEM w 1863 r. (24 lutego i 16 września),
 *   jedne z większych starć powstania styczniowego. Fakty
 *   sprawdzone. NIE UŻYWAM ICH — to nie są ozdobniki do strony
 *   o sprzęcie AGD.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE UŻYWAM NAZWY „LAFARGE". Cementownia od 1 lutego 2024 r.
 *   działa pod nazwą Holcim Polska S.A. W tekście piszę opisowo
 *   („duża cementownia") — nie utrwalam nieaktualnej nazwy i nie
 *   reklamuję firmy pod nową,
 * — NIE PODAJĘ liczby zatrudnionych w cementowni. Nie ustalono,
 * — NIE PODAJĘ ROKU ODZYSKANIA PRAW MIEJSKICH JAKO PEWNIKA.
 *   Krąży 1996, ale jedynym źródłem jest angielska Wikipedia,
 *   a strona miasta tego nie potwierdza. Podaję tylko datę pewną:
 *   nadanie w 1408 r. przez Władysława Jagiełłę, i osobno fakt,
 *   że miasto prawa utraciło po powstaniu styczniowym,
 * — NIE PISZĘ, że „Wierna Małogoszcz" to dawna nazwa miasta.
 *   Sprawdzone: to nazwa miejscowego klubu piłkarskiego.
 *   Hipoteza obalona,
 * — NIE PODAJĘ żadnego produktu z Listy Produktów Tradycyjnych.
 *   Dla Małogoszcza nic nie potwierdzono,
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka w bulli z 1136 r.,
 * — prawa miejskie 1408 r. od Władysława Jagiełły; utrata po
 *   powstaniu styczniowym,
 * — w mieście działa duża cementownia, która w 2024 r. obchodziła
 *   pięćdziesięciolecie,
 * — 3 330 mieszkańców (31.12.2024).
 */
export const MALOGOSZCZ: CityContent = {
  slug: "malogoszcz",
  h1: "Thermomix Małogoszcz – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Małogoszcz — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Małogoszczu: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Małogoszcz — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Małogoszczu. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Małogoszcza z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Małogoszcz i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-2.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Tyle wody, co zawsze? Nie. I to jest cała tajemnica.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Małogoszczu – jak wygląda prezentacja?",
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
      id: "ryz",
      heading: "Miasto cementowni — czyli o ryżu i o jednej proporcji, którą trzeba przeliczyć",
      paragraphs: [
        "Małogoszcz pojawia się w źródłach już w bulli z 1136 roku, a prawa miejskie dostał w 1408 od Władysława Jagiełły. Dziś najbardziej rozpoznawalnym punktem miasta jest duża cementownia, która w 2024 roku obchodziła pięćdziesięciolecie. W takim zakładzie o wszystkim decyduje jedna rzecz: proporcja mieszanki. Za dużo jednego składnika i cała partia jest do niczego.",
        "W kuchni jest danie, które działa dokładnie tak samo, i to o nim napiszę: ryż.",
        "Rzecz, którą trzeba wiedzieć przed pierwszym użyciem, bo inaczej pierwszy ryż wyjdzie rozczarowujący: w zamkniętym naczyniu prawie nic nie odparowuje. W garnku część wody ucieka w postaci pary i przepis to uwzględnia. Tutaj nie ucieka nigdzie. Jeśli wlejecie tyle wody, ile zawsze wlewaliście do garnka, dostaniecie ryż mokry i rozgotowany — i najprawdopodobniej uznacie, że urządzenie sobie z ryżem nie radzi.",
        "Radzi sobie bardzo dobrze, tylko przy innej proporcji. Mniej wody niż w garnku. Konkretnych liczb ode mnie nie usłyszycie i nie dlatego, że nie chcę — po prostu one są w przepisach urządzenia, przeliczone i sprawdzone, a podawanie ich z pamięci przez przedstawicielkę handlową jest dokładnie tym, przez co ludzie potem mają pretensje do sprzętu.",
        "Co zyskujecie w zamian: ryż nie przywrze do dna i nie wykipi. To są dwie najczęstsze awarie przy ryżu i obie biorą się z tego, że ktoś odszedł od garnka albo nie zdążył zmniejszyć ognia. W zamkniętym naczyniu z trzymaną temperaturą po prostu nie mają jak się wydarzyć. Nastawiacie i wychodzicie.",
        "Czego nie zrobi: ryżu smażonego, ryżu zapiekanego ani niczego z chrupiącym spodem. Urządzenie gotuje i gotuje na parze, ale nie rumieni — pisałam to przy kilku innych miastach i tutaj jest tak samo.",
        "I skala, jak zwykle uczciwie: przy jednej torebce ryżu do obiadu garnek jest prostszy, bo nie ma czego myć. Sens pojawia się wtedy, gdy w tym samym naczyniu ma powstać jeszcze sos albo coś na parze, albo gdy po prostu nie chcecie przy tym stać.",
        "Czego nie doradzę: niczego o przechowywaniu ugotowanego ryżu. To jest dziedzina bezpieczeństwa żywności, akurat przy ryżu wcale nie błaha, a ja jestem przedstawicielką handlową.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/funkcje", label: "Funkcje TM7" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Małogoszczu?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli ryż jest u Was daniem cotygodniowym, zróbmy go na prezentacji. To jest jedna z tych rzeczy, które lepiej zobaczyć raz, niż przeczytać trzy razy.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Małogoszczu"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla małogoskiej rodziny",
      paragraphs: [
        "Małogoszcz liczy nieco ponad trzy tysiące trzysta mieszkańców. Miasto jest stare — wzmiankowane już w dwunastym wieku, z prawami miejskimi od 1408 roku, utraconymi po powstaniu styczniowym. Cementownia, która dziś jest jego najbardziej rozpoznawalnym punktem, ma dopiero pół wieku.",
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

  districtsHeading: "Do których części Małogoszcza dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do sołectw gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Małogoszcz też przyjadę",
  nearbyParagraphs: [
    "Jędrzejów, Włoszczowa, Sędziszów, Chęciny, Kielce i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Jędrzejów", "Włoszczowa", "Sędziszów", "Chęciny", "Kielce", "Sobków"],

  about: blokOMnie("do Małogoszcza", "w Małogoszczu i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Małogoszcza bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Małogoszczu"),
    {
      question: "Pierwszy ryż wyszedł mi mokry. Co zrobiłam źle?",
      answer:
        "Najprawdopodobniej nic poza tym, że użyliście proporcji z przepisu na garnek. W zamkniętym naczyniu prawie nic nie odparowuje, więc wody trzeba mniej niż w garnku — to nie jest wada urządzenia, tylko inna fizyka. Przepisy urządzenia mają to już przeliczone. Konkretnych proporcji z pamięci nie podam, bo właśnie od takiego podawania zaczynają się nieporozumienia.",
    },
    {
      question: "Zrobię w tym ryż smażony?",
      answer:
        "Nie. Urządzenie gotuje i gotuje na parze, ale nie rumieni — smażonego ryżu ani chrupiącego spodu z niego nie będzie. Zyskujecie natomiast to, że ryż nie przywrze do dna i nie wykipi, więc nie trzeba przy nim stać. Przy jednej torebce do obiadu zwykły garnek i tak wypadnie prościej.",
    },
  ],

  geo: { lat: 50.8092, lng: 20.2647 },
};
