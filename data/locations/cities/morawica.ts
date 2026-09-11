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
 * MORAWICA — miasto w powiecie kieleckim, 1 759 mieszkańców
 * (31.12.2024, GUS); cała gmina 18 043. Status miasta NADANY
 * 1 STYCZNIA 2017 r. — i wszystko wskazuje na to, że po raz
 * pierwszy w historii, a nie „odzyskany". Gmina urosła
 * o 43,6% w latach 2002–2024 i ma średnią wieku 39,0 lat —
 * najmłodszą i najszybciej rosnącą w okolicy.
 *
 * KĄT: jedzenie dla najmłodszych — przeciery, kaszki, pierwsze
 * zupy. Najmłodsza demograficznie gmina regionu jest jedynym
 * właściwym miejscem na stronę, która o tym mówi — i która
 * jednocześnie odmawia wszelkich porad żywieniowych.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że urządzenie robi tu rzecz banalną i realną: gotuje
 *   na parze i miksuje w jednym naczyniu, więc mała porcja
 *   powstaje bez rozstawiania garnka, sitka i blendera,
 * — że to jest wygoda, a nie żadna wartość odżywcza,
 * — i że ODMAWIAM doradzania, co i kiedy podawać dziecku.
 *   To jest sprawa pediatry, nie przedstawicielki handlowej —
 *   i to jest najważniejsze zdanie tej strony.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD ŻYWIENIOWYCH DLA DZIECI. Ani wieku
 *   rozszerzania diety, ani kolejności produktów, ani
 *   konsystencji „odpowiedniej dla" jakiegokolwiek miesiąca
 *   życia. Odmowa stoi w tekście wprost i jest powtórzona w FAQ.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH. Ani o parze, ani o tym,
 *   że domowe jest „lepsze" niż słoiczek. Nie porównuję się
 *   do gotowych produktów dla dzieci i ich nie krytykuję.
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O ALERGIACH ani nietolerancjach.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Co dziecko REALNIE może
 * robić przy tym urządzeniu" (inne miasto) dotyczy dziecka jako
 * POMOCNIKA w kuchni. „Dziecko, które nie chce jeść" dotyczy
 * niejadka w wieku przedszkolnym. Tutaj chodzi o gotowanie DLA
 * dziecka, które samo jeszcze nic nie robi i niczego nie
 * komentuje — i o granicę mojej kompetencji przy tym temacie.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PISZĘ, że Morawica „odzyskała" prawa miejskie. Brak jej
 *   w wykazach miejscowości zdegradowanych i w adnotacjach
 *   o wcześniejszym okresie miejskim, a oficjalna historia gminy
 *   mówi o wsi. Piszę: status miasta od 1 stycznia 2017 r.
 * — NIE PISZĘ, że to „jedna z najbogatszych gmin". Potwierdzone
 *   jest 6. miejsce w Polsce w rankingu ZARZĄDZANIA FINANSAMI
 *   za 2025 r. — to nie to samo co zamożność. Piszę ostrożnie.
 * — NIE PODAJĘ NAZW FIRM. Kopalnia wapienia i fabryka filtrów
 *   do wody są ustalone, ale nie reklamuję cudzych działalności.
 *   Piszę opisowo.
 * — NIE PISZĘ, że fabryka filtrów stoi w Morawicy. Stoi
 *   w BILCZY, w tej samej gminie. To rozróżnienie jest świadome.
 * — NIE PODAJĘ największego pracodawcy. Brak porównywalnych
 *   danych o zatrudnieniu (kopalnia, przemysł, szpital).
 * — NIE PISZĘ NIC o szpitalu w Morawicy. To placówka
 *   psychiatryczna i nie jest materiałem na tło oferty
 *   handlowej — pomijam ją świadomie i w całości.
 * — NIE PODAJĘ produktu z Listy Produktów Tradycyjnych.
 *   Dla Morawicy nic nie potwierdzono.
 * — NIE wymyślam osiedli. Brak wykazu. districts to PUSTA
 *   TABLICA; 23 miejscowości gminy to sołectwa, nie dzielnice.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — status miasta od 1 stycznia 2017 r.,
 * — 1 759 mieszkańców miasta i 18 043 całej gminy (31.12.2024),
 * — gmina urosła o 43,6% w latach 2002–2024, średnia wieku
 *   39,0 lat,
 * — działa tu kopalnia wapienia, z której kamień trafił m.in.
 *   na Wawel, do Zamku Królewskiego w Warszawie i do warszawskiego
 *   metra; spółka pozostaje w rękach prywatnych, nie koncernu,
 * — w Bilczy, w tej samej gminie, działa fabryka filtrów
 *   i dzbanków do wody,
 * — młyn wodny nad Czarną Nidą, przebudowany w 1905 r.,
 * — w Chałupkach działa ośrodek tradycji garncarstwa
 *   z autentycznym dwukomorowym piecem.
 */
export const MORAWICA: CityContent = {
  slug: "morawica",
  h1: "Thermomix Morawica – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Morawica — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Morawicy: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Morawica — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Morawicy. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Morawicy z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Morawica i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Ugotuję. Doradzać, co podać dziecku, nie będę.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Morawicy – jak wygląda prezentacja?",
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
      id: "dla-najmlodszych",
      heading: "Najmłodsza gmina w okolicy — i granica, za którą nie doradzam",
      paragraphs: [
        "Morawica jest miastem dopiero od 1 stycznia 2017 roku, a cała gmina urosła od 2002 roku o ponad czterdzieści procent. Średnia wieku to trzydzieści dziewięć lat — w tej części województwa to bardzo mało. Mówiąc prościej: tu się buduje domy i rodzi dzieci. Więc pytanie o gotowanie dla najmłodszych pada u mnie w Morawicy częściej niż gdziekolwiek indziej.",
        "Zacznę od zdania, przy którym nie ustąpię, żeby było jasne od pierwszego akapitu: nie doradzę Wam, co i kiedy podawać dziecku. Ani od którego miesiąca, ani w jakiej kolejności, ani jak gęste to ma być. To jest sprawa dla pediatry albo dietetyka dziecięcego, a ja jestem przedstawicielką handlową i jedyne, co mogę uczciwie zrobić, to nie udawać, że wiem.",
        "Co mogę powiedzieć — to, co dotyczy urządzenia i tylko urządzenia.",
        "Mała porcja gotowana na parze i zmiksowana w jednym naczyniu to jest rzecz banalna, ale realna: nie rozstawiacie garnka, sitka, deski i blendera, a potem nie zmywacie czterech rzeczy o dwudziestej drugiej. Wkładacie, ustawiacie, odchodzicie. Przy dziecku, które akurat zasnęło, to ma konkretną wartość — ale jest to wartość organizacyjna, nie żadna inna.",
        "I to jest cała prawda tej strony. Nie napiszę Wam, że jedzenie z tego urządzenia jest dla dziecka „lepsze”, bo tego nie wiem i nie wolno mi tak mówić. Nie będę też krytykować gotowych słoiczków — nie jest moją rolą wmawiać komukolwiek, że robi źle.",
        "Jedna rzecz praktyczna, o której warto wiedzieć wcześniej: równolegle z obiadem dla dorosłych można w tym samym urządzeniu przygotować osobną, małą porcję na parze. Dla domu, w którym jedno dziecko jada co innego niż reszta stołu, to bywa jedyny sposób, żeby nie gotować dwa razy.",
      ],
      links: [
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Morawicy?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu jest małe dziecko, powiedzcie to przy umawianiu — dopasuję godzinę do drzemki i nie będę Wam robić przedstawienia na półtorej godziny.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Morawicy"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla morawickiej rodziny",
      paragraphs: [
        "Samo miasto liczy nieco ponad tysiąc siedemset osób, ale cała gmina to już ponad osiemnaście tysięcy — i to ona rośnie najszybciej w okolicy. Działa tu kopalnia wapienia, z której kamień trafił między innymi na Wawel, do Zamku Królewskiego w Warszawie i do warszawskiego metra; w Bilczy, w tej samej gminie, produkuje się filtry i dzbanki do wody. Nad Czarną Nidą stoi młyn wodny przebudowany w 1905 roku, a w Chałupkach działa ośrodek tradycji garncarstwa z autentycznym dwukomorowym piecem.",
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

  districtsHeading: "Do których części Morawicy dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy — Bilczy, Brzezin, Brudzowa, Kawczyna i pozostałych — bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw; przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Morawicę też przyjadę",
  nearbyParagraphs: [
    "Kielce, Chmielnik, Daleszyce, Pierzchnica i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kielce", "Chmielnik", "Daleszyce", "Pierzchnica", "Busko-Zdrój", "Jędrzejów"],

  about: blokOMnie("do Morawicy", "w Morawicy i okolicy", REGION_SWIETOKRZYSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Morawicy bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Morawicy"),
    {
      question: "Od kiedy mogę gotować w nim dla dziecka?",
      answer:
        "Tego nie doradzę i przy tym pytaniu nie ustąpię. Co i kiedy podawać dziecku to sprawa pediatry albo dietetyka dziecięcego, nie przedstawicielki handlowej. Mogę powiedzieć wyłącznie, co robi urządzenie: gotuje na parze i miksuje w jednym naczyniu, więc mała porcja powstaje bez rozstawiania garnka, sitka i blendera.",
    },
    {
      question: "Czy jedzenie z Thermomixa jest dla dziecka zdrowsze?",
      answer:
        "Nie napiszę tego, bo tego nie wiem i nie wolno mi tak mówić. Nie będę też krytykować gotowych słoiczków. Przewaga urządzenia jest organizacyjna: mniej naczyń, mniej pilnowania i możliwość zrobienia małej porcji równolegle z obiadem dla dorosłych.",
    },
    {
      question: "Czy da się ugotować osobno dla dziecka i osobno dla nas?",
      answer:
        "Tak — na tym polega Varoma. Porcja na parze powstaje nad naczyniem, w którym gotuje się danie dla dorosłych, w jednym cyklu. Dla domu, w którym jedno dziecko jada co innego niż reszta stołu, to często jedyny sposób, żeby nie gotować dwa razy.",
    },
  ],

  geo: { lat: 50.7461, lng: 20.6178 },
};
