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
 * PIASKI — miasto w powiecie świdnickim (LUBELSKIM), 2 410
 * mieszkańców (31.12.2024), spadek o 10,6% od 2002 r. Od co najmniej
 * kilkunastu lat odbywa się tu FESTIWAL FLAKÓW, a w mieście działa
 * nieprzerwanie od 1948 r. spółdzielcza mleczarnia.
 *
 * KĄT: flaki. Danie, które dzieli ludzi jak żadne inne, wymaga
 * kilku godzin i jest w tym mieście świętowane własnym festiwalem.
 * Jedyne miejsce w serwisie, gdzie można o tym napisać poważnie.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że to jest danie, którego połowa kraju nie tknie, i że nikogo
 *   nie zamierzam do niego przekonywać,
 * — że kto je robi, ten wie, ile to trwa — i że długie, powolne
 *   gotowanie to jedyne miejsce, gdzie urządzenie realnie pomaga,
 * — że urządzenie NIE zdejmie z nikogo czyszczenia i obróbki
 *   wstępnej — najgorszej części tej roboty,
 * — i twarda odmowa: nic o przygotowaniu podrobów, bo to jest
 *   dziedzina bezpieczeństwa żywności.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH PORAD O CZYSZCZENIU, PŁUKANIU I PRZYGOTOWANIU PODROBÓW.
 *   To ta sama rodzina odmów co wędzenie w Zambrowie, przetwory
 *   w Hrubieszowie i mleko surowe w Wieluniu. Podroby to najbardziej
 *   wrażliwy surowiec, jaki jest — i najgorsze możliwe miejsce
 *   na amatorską podpowiedź od przedstawicielki handlowej.
 * — ŻADNEJ RECEPTURY „flaków piaseckich". To wyrób konkretnych
 *   ludzi z tego miasta i nie moja własność.
 * — ŻADNYCH USTAWIEŃ, TEMPERATUR ANI CZASÓW.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani nic o wartościach odżywczych
 *   podrobów.
 * — ŻADNEGO WYŚMIEWANIA ani osób, które flaków nie jedzą, ani tych,
 *   które je uwielbiają. Strona ma stać po środku.
 * — ŻADNEJ KRYTYKI flaków ze słoika ani konkretnych producentów.
 *
 * ROZGRANICZENIE. Kąt „ryba — produkt, którego cała…" jest zajęty
 * przez inne miasto i dotyczy innego surowca. Opole Lubelskie ma
 * kąt „mieszanie" (czynność ciągła) — tutaj chodzi o KONKRETNE
 * DANIE i o to, komu ono w ogóle smakuje. „Gotowanie dla ekipy"
 * i „duża uroczystość" też są zajęte; tu nie ma nic o liczbie osób.
 *
 * DWIE HIPOTEZY, JEDNA OBALONA:
 * — MIASTO PRZY TRASIE: OBALONA. Obwodnica Piask (4,2 km, dwie jezdnie)
 *   została oddana do użytku w 2004 r. i od ponad dwudziestu lat ruch
 *   OMIJA miasto. Wcześniej droga krajowa szła przez centrum. Do tego
 *   nie ma danych z Generalnego Pomiaru Ruchu dla tego odcinka.
 *   Pisanie „miasto żyje tranzytem" byłoby podwójnym błędem:
 *   nieaktualnym i niepopartym. W tekście nie ma o tym słowa,
 * — FESTIWAL FLAKÓW: POTWIERDZONA przez kilka niezależnych mediów
 *   regionalnych, edycje liczone w kilkunastu.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE podaję roku nadania praw miejskich. Krąży rok 1470, ale
 *   to jednocześnie rok PIERWSZEJ WZMIANKI u Długosza („Pyassek
 *   alias Gyelczew") — a to klasyczne mylenie wzmianki z lokacją.
 *   Podaję tylko pewne: utrata w 1869 r. i odzyskanie w 1993 r.,
 * — NIE rozwijam wątku „Piasków Luterskich". Miasto rzeczywiście
 *   nosiło tę nazwę i było ośrodkiem kalwińskim (nie ariańskim —
 *   to częsta pomyłka), a ruiny zboru stoją do dziś. Ale to nie
 *   temat na stronę o kuchni i w tekście go nie ma,
 * — NIE podaję żadnego produktu z Listy Produktów Tradycyjnych.
 *   Sprawdzone: dla powiatu świdnickiego (lubelskiego) NIE MA ANI
 *   JEDNEGO wpisu. Krążące „kasza gryczana zapiekana", „forszmak"
 *   i „żur staropolski" z Rybczewic pochodzą z lokalnego KONKURSU
 *   KULINARNEGO, a nie z listy ministerialnej. To jest dokładnie ta
 *   pomyłka, której pilnuję na wszystkich stronach,
 * — NIE podaję odległości do Lublina i Świdnika w kilometrach ani
 *   minutach — kalkulatory tras zwracały błędy, a jedyne źródło
 *   mówi ogólnie „ok. 30 km na południowy wschód od Lublina".
 *   W tekście jest opisowo,
 * — miasto NIE publikuje wykazu osiedli, więc districts to PUSTA
 *   TABLICA.
 *
 * PUŁAPKA NAZEWNICZA — TU WYJĄTKOWO GĘSTA. „Piaski" to jedna
 * z najczęstszych nazw w Polsce: dzielnice w Lublinie i innych
 * miastach, gmina Piaski w wielkopolskim (powiat gostyński),
 * Piaski Wielkie pod Krakowem, kilkanaście wsi. Do tego SĄ DWA
 * POWIATY ŚWIDNICKIE — ten nasz w lubelskim (siedziba Świdnik)
 * i drugi w dolnośląskim (siedziba Świdnica). Każdy fakt trzeba
 * było sprawdzać dwa razy.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone — źródła w notatce
 * projektowej):
 * — Festiwal Flaków odbywa się tu cyklicznie od kilkunastu lat,
 *   relacjonowany przez media regionalne,
 * — Okręgowa Spółdzielnia Mleczarska w Piaskach działa nieprzerwanie
 *   od 1 stycznia 1948 r. i jest czynna w 2026 r.; twarogi to ok. 60%
 *   jej produkcji,
 * — 2 410 mieszkańców na 31.12.2024,
 * — obwodnica oddana w 2004 r.,
 * — sąsiednie gminy: Mełgiew, Milejów, Rybczewice, Krzczonów,
 *   Jabłonna, Głusk, Trawniki.
 */
export const PIASKI: CityContent = {
  slug: "piaski",
  h1: "Thermomix Piaski – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Piaski — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Piaskach koło Lublina: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Piaski — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Piaskach. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Piask z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Piaski i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-5.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Danie, którego połowa kraju nie tknie. Nikogo nie przekonuję.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Piaskach – jak wygląda prezentacja?",
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
      id: "flaki",
      heading: "Miasto z własnym Festiwalem Flaków — czyli o daniu, które dzieli ludzi na pół",
      paragraphs: [
        "Piaski od kilkunastu lat organizują Festiwal Flaków. Nie żaden festiwal pierogów, nie dni miasta z konkursem na ciasto — flaków. Do tego w mieście działa nieprzerwanie od 1948 roku spółdzielcza mleczarnia, w której twarogi to jakieś sześćdziesiąt procent produkcji. Jak na dwa i pół tysiąca mieszkańców, kuchnia jest tu wyjątkowo obecna.",
        "Powiem od razu rzecz oczywistą: flaki dzielą ludzi jak żadne inne danie w Polsce. Jedni czekają na nie cały rok, inni nie usiądą przy stole, na którym stoją. I nie zamierzam nikogo przekonywać — ani tych pierwszych, że przesadzają, ani tych drugich, że powinni spróbować. To jest kwestia gustu i wychowania, a nie sprawa do rozstrzygnięcia przez kogoś, kto sprzedaje sprzęt AGD.",
        "Piszę o nich dlatego, że flaki są najlepszym możliwym przykładem dania, przy którym to urządzenie faktycznie coś zmienia — i jednocześnie takiego, przy którym trzeba uczciwie powiedzieć, czego nie zmieni.",
        "Zaczynając od tego, co pomaga: flaki gotuje się długo. Bardzo długo, godzinami, na małym ogniu, i przez cały ten czas trzeba mieć na nie oko. Urządzenie robi dokładnie to — trzyma temperaturę i miesza samo, więc garnek nie wymaga obecności. Kto robił flaki, ten wie, że to nie jest danie trudne. To jest danie DŁUGIE. A długie znaczy „nie wychodzę z domu”, i właśnie to przestaje obowiązywać.",
        "A teraz to, czego nie zrobi, i mówię to bez owijania. Nie zdejmie z Was obróbki wstępnej — czyszczenia, płukania, przygotowania mięsa. To jest najgorsza część tej roboty, cała ręczna, i tak zostaje. Kto liczy, że wrzuci wszystko z torebki i wyjdzie do ogrodu, będzie rozczarowany.",
        "I granica, przy której nie ustąpię, bo tutaj naprawdę nie ma miejsca na amatorszczyznę: nie doradzam nic o przygotowaniu podrobów. Ani jak czyścić, ani jak długo moczyć, ani co jest bezpieczne, a co nie. Podroby to najbardziej wrażliwy surowiec, jaki w ogóle bywa w kuchni, a ja jestem przedstawicielką handlową, nie technologiem żywności. Po tę wiedzę idźcie do rzeźnika albo do kogoś, kto robi to od trzydziestu lat — w tym mieście takich ludzi nie brakuje.",
        "Receptury flaków piaseckich też nie podam. To jest wyrób konkretnych ludzi stąd, świętowany raz do roku na własnym festiwalu, i nie moja rzecz, żeby go rozdawać.",
      ],
      links: [{ href: "/przepisy", label: "Przepisy" }],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Piaskach?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, jakie danie robicie u siebie najdłużej — to, przy którym trzeba stać. Właśnie takie warto zobaczyć na prezentacji, bo to jest jedyne miejsce, w którym różnica jest naprawdę odczuwalna.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Piaskach"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla piaseckiej rodziny",
      paragraphs: [
        "Piaski liczą nieco ponad dwa tysiące czterysta mieszkańców i od dwóch dekad ich ubywa. Do Lublina jest stąd około trzydziestu kilometrów na północny zachód — blisko, ale od 2004 roku ruch tranzytowy omija miasto obwodnicą, więc na co dzień jest tu spokojnie.",
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

  districtsHeading: "Do których części Piask dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do miejscowości gminy, bez dopłaty za dojazd.",
    "Miasto nie publikuje wykazu osiedli, więc nie będę wymyślać nazw — przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Piaski też przyjadę",
  nearbyParagraphs: [
    "Mełgiew, Milejów, Trawniki, Rybczewice, Krzczonów, Jabłonna i Głusk są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Świdnik", "Mełgiew", "Milejów", "Trawniki", "Lublin", "Krasnystaw"],

  about: blokOMnie("do Piask", "w Piaskach i okolicy", REGION_LUBELSZCZYZNA),

  faq: [
    {
      question: "Czy dojeżdżasz do Piask bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do miejscowości gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Piaskach"),
    {
      question: "Da się w tym ugotować flaki?",
      answer:
        "Gotowanie — tak, i to jest akurat miejsce, gdzie urządzenie realnie pomaga: flaki nie są daniem trudnym, tylko bardzo długim, a garnek, który trzyma temperaturę i miesza sam, nie wymaga Waszej obecności. Ale obróbki wstępnej nie zdejmie — czyszczenie i przygotowanie zostaje ręczne. I nie doradzam nic o przygotowaniu podrobów; to pytanie do rzeźnika, nie do przedstawicielki handlowej.",
    },
    {
      question: "Przy jakich daniach różnica jest największa?",
      answer:
        "Przy tych długich i gęstych, przy których normalnie trzeba stać: flaki, gulasze, sosy, wszystko, co przywiera do dna, jeśli się odejdzie. Gotowanie nie trwa krócej — po prostu ten czas przestaje być Wasz. Przy daniach szybkich różnica jest dużo mniejsza i nie będę udawać, że jest inaczej.",
    },
  ],

  geo: { lat: 51.1394, lng: 22.8583 },
};
