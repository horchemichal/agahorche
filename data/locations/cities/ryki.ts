import type { CityContent } from "../city-content";
import {
  REGION_LUBELSZCZYZNA,
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
 * RYKI — 8 932 mieszkańców (31.12.2024). Spółdzielnia Mleczarska Ryki
 * obchodzi w 2026 r. STULECIE i robi sery dojrzewające pod markami
 * Rycki Edam, Rycki Maasdam, Rycka Gouda, Rycki Ementaler.
 *
 * KĄT: czego NIE warto robić w domu. Miasto, w którym jeden zakład
 * robi ser od stu lat, jest jedynym właściwym miejscem na stronę,
 * która mówi wprost: są rzeczy, których to urządzenie nie zrobi
 * lepiej niż ktoś, kto robi je zawodowo — i lepiej je kupić.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że „zrobisz to sam w domu" ma granicę i że ta granica nie jest
 *   wstydliwa,
 * — po której stronie stoi ser dojrzewający: po stronie rzeczy,
 *   których w domowej kuchni się nie odtworzy, i dlaczego —
 *   bez wchodzenia w technologię,
 * — co warto robić samemu: rzeczy szybkie, świeże i robione
 *   pod siebie,
 * — i że kupowanie gotowego nie jest porażką ani „gorszym"
 *   gotowaniem.
 *
 * TWARDE GRANICE — TU KLUCZOWE:
 * — ŻADNYCH PORAD O ROBIENIU SERA, DOJRZEWANIU, PODPUSZCZCE
 *   ANI O PRACY Z MLEKIEM SUROWYM. To jest ta sama rodzina odmów
 *   co przetwory w Hrubieszowie i wędzenie w Zambrowie, z tego
 *   samego powodu.
 * — ŻADNEJ KRYTYKI PRODUKTÓW PRZEMYSŁOWYCH ani konkretnych firm
 *   (zasada z Mrągowa) — tu tym bardziej, bo mówimy o największym
 *   pracodawcy w mieście. Strona jest po stronie tego zakładu,
 *   nie przeciw niemu.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani porównań wartości odżywczej
 *   „domowe kontra kupne".
 * — ŻADNYCH WYLICZEŃ oszczędności.
 *
 * ROZGRANICZENIE. Wieluń ma kąt „nabiał" i tam jest najostrzejsza
 * odmowa o mleku surowym; Mrągowo ma spór „domowe kontra
 * przemysłowe". Ta strona NIE jest ani o nabiale jako kategorii,
 * ani o tym, co jest lepsze. Jest o GRANICY DOMOWEJ KUCHNI —
 * o tym, czego nie ma sensu robić samemu, niezależnie od sprzętu.
 * Ser jest tu przykładem, nie tematem.
 *
 * DWIE HIPOTEZY OBALONE:
 * — MIASTO PRZY TRASIE: pada. Obwodnica S17 została oddana
 *   6 września 2019 r., ale oficjalna oferta inwestycyjna gminy sama
 *   podaje, że trasa biegnie 3,2 km OD MIASTA. To obwodnica, która
 *   miasto omija. Nie znalazłam też żadnych danych o ruchu
 *   generowanym w mieście ani liczb z Generalnego Pomiaru Ruchu
 *   dla tego odcinka. Kąt „miasto przy trasie" byłby domysłem,
 * — TARG: pada. Potwierdzone jest samo istnienie targowiska
 *   miejskiego i NIC WIĘCEJ — ani dni targowych, ani skali, ani
 *   historycznego przywileju jarmarcznego. Budowanie kąta
 *   na niepotwierdzonym fakcie bieżącym to ten sam błąd, który
 *   tępię w innych plikach.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE podaję liczby zatrudnionych w SM Ryki — nie jest publiczna,
 * — NIE wymieniam Kampol-Fruit jako zwykłego pracodawcy. Spółka
 *   ogłosiła upadłość 9 kwietnia 2024 r.; zakład działa pod zarządem
 *   syndyka i zatrudniał 141 osób (stan na październik 2024).
 *   Oficjalna oferta inwestycyjna gminy wymienia ją BEZ tego
 *   zastrzeżenia — czyli jest nieaktualna. W tekście nie ma jej
 *   wcale, bo sytuacja może się zmienić, a strona zostaje,
 * — NIE piszę, że pochodzi stąd admirał Hyman Rickover. To krąży
 *   (nawet na angielskiej Wikipedii, przez nazwisko „Rykower"),
 *   ale urodził się w MAKOWIE MAZOWIECKIM — potwierdza to akt
 *   urodzenia z archiwum. Nazwisko od nazwy miejscowości to nie
 *   to samo co urodzenie w niej,
 * — NIE podaję daty utraty praw miejskich. Krążący rok 1810 jest
 *   nietypowy (większość miast Królestwa traciła je w latach
 *   1869–1870) i nie udało się go potwierdzić drugim źródłem.
 *   Podaję tylko PONOWNE nadanie: 1 stycznia 1957 r.,
 * — miasto ma DWA osiedla, ale ich NAZW nie udało się ustalić
 *   z oficjalnego źródła, więc districts to PUSTA TABLICA,
 * — produktów z Listy Produktów Tradycyjnych dla powiatu ryckiego
 *   NIE POTWIERDZIŁAM ani na tak, ani na nie — rejestr nie dał się
 *   przeszukać. Dlatego w tekście nie ma o tym ani słowa.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Spółdzielnia Mleczarska Ryki obchodzi w 2026 r. stulecie
 *   i nadal jest niezależną spółdzielnią,
 * — marki serów: Rycki Edam, Rycki Maasdam, Rycka Gouda, Rycki
 *   Ementaler,
 * — ponowne prawa miejskie 1 stycznia 1957 r.,
 * — 8 932 mieszkańców na 31.12.2024, spadek o 8,4% od 2002 r.,
 * — do Lublina 64 km, do Warszawy 100 km,
 * — inni działający pracodawcy: NORGPOL i PUMAR.
 */
export const RYKI: CityContent = {
  slug: "ryki",
  h1: "Thermomix Ryki – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Ryki — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Rykach: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Ryki — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Rykach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Ryk z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do okolicznych miejscowości.",

  highlights: highlightyStandardowe("Ryki i okolica"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Są rzeczy, których nie warto robić w domu. Mówienie tego głośno nikomu nie szkodzi.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Rykach – jak wygląda prezentacja?",
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
      id: "granica",
      heading: "Miasto, które robi ser od stu lat — czyli o tym, czego nie warto robić samemu",
      paragraphs: [
        "Spółdzielnia Mleczarska Ryki obchodzi w tym roku stulecie. Sto lat jednego zakładu w mieście, które ma niecałe dziewięć tysięcy mieszkańców — i sery, które zna cały kraj: Rycki Edam, Rycka Gouda, Rycki Maasdam, Rycki Ementaler.",
        "To jest najlepsze możliwe miejsce, żeby powiedzieć coś, czego przy sprzedaży takiego sprzętu się nie mówi, bo to niby psuje ofertę. Otóż domowa kuchnia ma granicę. Są rzeczy, których nie warto robić samemu — i to nie dlatego, że ktoś nie potrafi, tylko dlatego, że efekt będzie gorszy, a roboty więcej.",
        "Ser dojrzewający stoi po tej właśnie stronie granicy. Nie doradzam jego robienia w domu, nie podam nic o dojrzewaniu, podpuszczce ani o pracy z surowym mlekiem — i to jest odmowa, przy której nie ustąpię, bo w tej dziedzinie zła podpowiedź naprawdę komuś szkodzi. Ale nawet gdyby nie to: zakład, który dopracowywał jedną rzecz przez sto lat, ma nad domową kuchnią przewagę, której żaden sprzęt nie nadrobi. To po prostu inna liga i nie ma w tym nic wstydliwego.",
        "Nie usłyszycie też ode mnie, że domowe jest zdrowsze albo lepsze od tego, co robi tutejsza mleczarnia. Nie jest to prawda, której bym dowiodła, a poza tym w tym mieście byłby to komentarz do pracy ludzi, którzy mieszkają obok Was. Nie moja rola.",
        "Co więc warto robić samemu? Rzeczy szybkie, świeże i robione pod siebie — czyli dokładnie to, czego nie da się kupić gotowego w takiej formie, w jakiej chcecie. Zupa z tego, co zostało w lodówce. Sos, w którym sami decydujecie o ostrości. Pasta do chleba bez składnika, którego ktoś w domu nie je. Ciasto, które ma być mniej słodkie, bo tak lubicie. Obiad dla dziecka bez soli. Tego nikt za Was nie ustawi.",
        "I tak wygląda uczciwy podział: kupujecie to, co ktoś robi lepiej i dłużej, a robicie sami to, co ma być zrobione pod Was. Urządzenie pomaga w tej drugiej części — i tam jest naprawdę dobre. Sprzedawanie go jako maszyny, która zastąpi stuletnią mleczarnię, byłoby po prostu głupie.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Rykach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, co u Was w domu robi się najczęściej od zera, a co zawsze się kupuje. Pokażę wtedy rzeczy z tej pierwszej grupy — a przy drugiej powiem szczerze, jeśli uważam, że nie ma sensu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Rykach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla ryckiej rodziny",
      paragraphs: [
        "Ryki mają blisko dziewięć tysięcy mieszkańców i leżą mniej więcej w połowie drogi między Warszawą a Lublinem — sto kilometrów w jedną stronę, sześćdziesiąt cztery w drugą. Prawa miejskie w obecnym kształcie miasto odzyskało z początkiem 1957 roku.",
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

  districtsHeading: "Do których części Ryk dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do okolicznych miejscowości w gminie, bez dopłaty za dojazd.",
    "Miasto dzieli się na dwa osiedla, ale nie znalazłam ich oficjalnych nazw, więc nie będę zgadywać — przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Ryki też przyjadę",
  nearbyParagraphs: [
    "Dęblin, Stężyca, Kock, Ułęż i Nowodwór są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Dęblin", "Stężyca", "Kock", "Puławy", "Lubartów", "Łuków"],

  about: blokOMnie("do Ryk", "w Rykach i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Ryk bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do okolicznych miejscowości. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Rykach"),
    {
      question: "Zrobię w tym ser?",
      answer:
        "Nie doradzam robienia sera w domu i nie powiem nic o dojrzewaniu, podpuszczce ani o pracy z surowym mlekiem — w tej dziedzinie zła podpowiedź komuś szkodzi. Poza tym uczciwie: zakład, który robi jedną rzecz od stu lat, ma przewagę, której żaden domowy sprzęt nie nadrobi. To nie jest wstyd, tylko podział pracy.",
    },
    {
      question: "Co w takim razie warto robić samemu?",
      answer:
        "Rzeczy szybkie, świeże i robione pod siebie — czyli takie, których nie kupicie w tej formie, w jakiej chcecie. Zupę z tego, co zostało w lodówce. Sos o Waszej ostrości. Pastę bez składnika, którego ktoś w domu nie je. Ciasto mniej słodkie. Obiad dla dziecka bez soli. W tej części urządzenie jest naprawdę dobre.",
    },
  ],

  geo: { lat: 51.6256, lng: 21.9339 },
};
