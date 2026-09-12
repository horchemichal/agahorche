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
 * PRASZKA — miasto w powiecie oleskim, 7 033 mieszkańców
 * (31.12.2024, GUS); cała gmina 12 793. Prawa miejskie 1392 r.
 * (przywilej Władysława Jagiełły dla Piotra Kowalskiego),
 * UTRACONE W 1870 r., ODZYSKANE W 1919 r. Pierwotna nazwa
 * miejscowości: MICHAŁÓW, notowana od 1260 r.
 *
 * RZECZ NAJWAŻNIEJSZA I NAJCZĘŚCIEJ MYLONA: PRASZKA NIE LEŻY
 * NA ŚLĄSKU. Razem z gminą Rudniki jest jedną z dwóch gmin
 * województwa opolskiego należących historycznie do ZIEMI
 * WIELUŃSKIEJ, wiązanej z Wielkopolską. Prosna była tu granicą
 * państwową — Prus i Rzeczypospolitej, potem zaborów, a od 1922
 * do 1945 r. granicą II RP z Niemcami. Dawne przejście graniczne
 * w Zawisnej leży dziś W GRANICACH MIASTA.
 *
 * UWAGA — HOMONIM: PRASZKA to NIE PRÓSZKÓW. Prószków leży
 * w powiecie opolskim pod Opolem i jest osobnym miastem w tym
 * samym województwie. Wyszukiwarki mylą te nazwy nagminnie.
 *
 * KĄT: pyzy i kluski ziemniaczane — czyli ciasto z ziemniaków.
 * Miasto, które leży nie na Śląsku, tylko w ziemi wieluńskiej
 * związanej z Wielkopolską, jest właściwym miejscem na danie,
 * które jest wielkopolskie, a nie śląskie — i na jedną
 * z niewielu potraw, w których urządzenie potrafi zaszkodzić.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że przy cieście ziemniaczanym urządzenie łatwo przesadza:
 *   przemieszana masa robi się kleista i gumowata, i tego
 *   nie da się odkręcić,
 * — że to jest dokładnie odwrotność większości zastosowań,
 *   w których dłużej znaczy lepiej,
 * — że formowanie, wałkowanie i wrzucanie na wrzątek zostaje
 *   przy rękach i przy garnku,
 * — i że urządzenie realnie pomaga wcześniej: ugotuje ziemniaki
 *   na parze i odmierzy mąkę.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW, PRĘDKOŚCI ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI MĄKI DO ZIEMNIAKÓW. To już przepis,
 *   a w każdym domu jest inny; nie będę rozstrzygać.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH o ziemniakach.
 * — ŻADNEGO ROZSTRZYGANIA, CZY PYZY SĄ WIELKOPOLSKIE,
 *   CZY CZYJEŚ JESZCZE. Piszę o położeniu miasta, które jest
 *   faktem administracyjno-historycznym, nie o własności potrawy.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Ziemniaki" (Nowa Sarzyna)
 * dotyczą ziemniaka jako SKŁADNIKA i tego, co z nim robi
 * urządzenie. „Pierogi" (Oleszyce) dotyczą farszu i lepienia.
 * „Makaron" (Radymno) dotyczy ciasta z mąki i jajek. Tutaj
 * chodzi o CIASTO ZIEMNIACZANE i o jedną konkretną pułapkę:
 * przemieszanie. „Potrawa, która ma dwie nazwy" (inne miasto)
 * dotyczy nazewnictwa — tego wątku tu NIE ruszam.
 *
 * CZEGO NIE TWIERDZĘ, MIMO ŻE BYŁO KUSZĄCE:
 * — NIE PODAJĘ NAZWY FABRYKI. Zakład motoryzacyjny jest
 *   ustalony, zatrudnia rząd wielkości dziewięciuset osób plus
 *   podwykonawcy i w kwietniu 2026 r. jego właściciel przejął
 *   niemiecką grupę — ale nie reklamuję cudzych firm. Piszę
 *   opisowo i bez liczb, bo źródła podają raz 900, raz 950.
 * — NIE PISZĘ, że zakład produkuje układy wydechowe. NIE
 *   PRODUKUJE — robi półosie napędowe. To częsta pomyłka biorąca
 *   się z podobieństwa nazw z czasów PRL.
 * — NIE UŻYWAM listy firm ze strony urzędu. Ta strona jest
 *   datowana na 17 września 2007 r. i jej treść jest bezużyteczna.
 * — NIE PODAJĘ dat dziennych praw miejskich. Znane są tylko lata:
 *   1392, 1870, 1919.
 * — NIE PISZĘ, kiedy Praszka trafiła do powiatu oleskiego
 *   i województwa opolskiego. Nie ustalono tego.
 * — NIE PISZĘ, że Praszka ma dwujęzyczne tablice. NIE MA —
 *   i przyczyna jest inna niż w reszcie województwa: tu
 *   mniejszości niemieckiej po prostu nigdy nie było, bo miasto
 *   nigdy nie było niemieckie. W całym powiecie oleskim
 *   dwujęzyczność ma tylko Radłów.
 * — NIE wymyślam osiedli. Statut mówi wprost, że jednostkami
 *   pomocniczymi gminy są sołectwa; miasto nie ma rad osiedli.
 *   districts to PUSTA TABLICA.
 *
 * ŚWIADOMIE POMINIĘTE. 1 stycznia 1939 r. Praszka liczyła
 * 4 332 mieszkańców, z czego 1 016 było pochodzenia żydowskiego;
 * miasto straciło w czasie wojny około jednej trzeciej ludności.
 * To jest prawda o tym mieście, ale strona handlowa o sprzęcie
 * kuchennym nie jest miejscem, w którym wolno tego używać jako
 * tła dla oferty.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — prawa miejskie 1392 r. (Władysław Jagiełło, przywilej dla
 *   Piotra Kowalskiego), utrata 1870 r., odzyskanie 1919 r.,
 * — pierwotna nazwa Michałów, notowana od 1260 r.,
 * — Praszka leży w ziemi wieluńskiej, nie na Śląsku; Prosna była
 *   granicą państwową, a dawne przejście w Zawisnej leży dziś
 *   w granicach miasta,
 * — „chleb mleczny praszkowski" jest na Liście Produktów
 *   Tradycyjnych od 2 czerwca 2011 r.: okrągły bochenek ok. 0,7 kg,
 *   na zakwasie i mleku, posypany makiem; produkowany od połowy
 *   lat siedemdziesiątych XX w.,
 * — do połowy XVIII w. działały tu cechy rzemieślnicze,
 *   w tym cech piekarzy,
 * — w mieście działa duży zakład motoryzacyjny produkujący
 *   półosie napędowe,
 * — muzeum miejskie otwarto 8 maja 1980 r.; ma osiem działów,
 *   a wśród eksponatów kompletne wyposażenie apteki z początku
 *   XX w.,
 * — 7 033 mieszkańców miasta, 12 793 gminy (31.12.2024).
 */
export const PRASZKA: CityContent = {
  slug: "praszka",
  h1: "Thermomix Praszka – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Praszka — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Praszce: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Praszka — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Praszce. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Praszki z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do miejscowości gminy.",

  highlights: highlightyStandardowe("Praszka i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Tu akurat dłużej znaczy gorzej. Ciasto ziemniaczane tego nie wybacza.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Praszce – jak wygląda prezentacja?",
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
      id: "pyzy",
      heading: "Miasto, które nie leży na Śląsku — czyli o cieście z ziemniaków",
      paragraphs: [
        "Zacznę od rzeczy, którą myli pół internetu, a mieszkańcy wiedzą doskonale: Praszka nie leży na Śląsku. Razem z gminą Rudniki jest jedną z dwóch gmin województwa opolskiego, które historycznie należą do ziemi wieluńskiej, wiązanej z Wielkopolską. Prosna była tu przez stulecia granicą państwową — Prus i Rzeczypospolitej, potem zaborów, a od 1922 do 1945 roku granicą Polski z Niemcami. Dawne przejście graniczne w Zawisnej leży dziś w granicach miasta. Dlatego kuchnia jest tu bliższa wielkopolskiej niż śląskiej, i dlatego akurat tutaj piszę o pyzach.",
        "Ciasto ziemniaczane — na pyzy, kluski, kopytka — jest jedną z niewielu rzeczy, w których to urządzenie potrafi zaszkodzić. I to jest ważniejsze niż wszystko, co mogłabym o nim napisać pochlebnego.",
        "Powód jest prosty: ugotowany ziemniak przemieszany zbyt długo i zbyt intensywnie robi się kleisty i gumowaty. Uwalnia się z niego skrobia, masa zaczyna ciągnąć jak guma i tego się już nie odkręci — ani mąką, ani niczym innym. Cała partia idzie do kosza.",
        "To jest dokładna odwrotność większości zastosowań tego sprzętu. Przy sosie, przy zupie krem, przy pesto obowiązuje zasada „mieszaj, aż będzie gładko”. Przy ziemniakach obowiązuje zasada odwrotna: krótko, delikatnie i przestać, zanim wyda się to skończone. Kto tego nie wie, robi gumowate kopytka i uznaje, że sprzęt jest do niczego — a sprzęt zrobił dokładnie to, o co go poproszono.",
        "Gdzie urządzenie realnie pomaga, to wcześniej i później. Ugotuje ziemniaki na parze, co przy cieście ma znaczenie, bo nie nasiąkają wodą tak jak gotowane w garnku. Zważy mąkę bez wyciągania wagi. A jeśli robicie do tego sos albo okrasę, robi je równolegle.",
        "Czego nie zrobi w ogóle: formowania. Wałkowanie, cięcie, toczenie pyz w dłoniach, wrzucanie na wrzątek i wyławianie łyżką cedzakową — to wszystko zostaje przy Waszych rękach i przy garnku z wodą. Przy tej potrawie urządzenie jest pomocnikiem na dwie minuty, nie wykonawcą.",
        "I nie podam Wam proporcji mąki do ziemniaków. W każdym domu jest inna, zależy od odmiany i od tego, jak mokre wyszły — a przepis, który by to rozstrzygał, byłby przepisem cudzej babci podanym jako mój.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Praszce?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli w domu robi się kluski albo pyzy, powiedzcie to przy umawianiu — pokażę, w którym momencie trzeba przestać mieszać. To jest cała sztuka.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Praszce"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla praszkowskiej rodziny",
      paragraphs: [
        "Praszka liczy nieco ponad siedem tysięcy mieszkańców, cała gmina prawie trzynaście. Pierwotnie nazywała się Michałów i pod tą nazwą notowano ją od 1260 roku; prawa miejskie dostała w 1392 roku przywilejem Władysława Jagiełły, straciła je w 1870 i odzyskała w 1919. Do połowy XVIII wieku działały tu zorganizowane cechy rzemieślnicze, w tym cech piekarzy — i to nie jest przypadkowy szczegół, bo „chleb mleczny praszkowski” jest od 2 czerwca 2011 roku wpisany na ministerialną Listę Produktów Tradycyjnych: okrągły bochenek na zakwasie i mleku, posypany makiem, wypiekany tu od połowy lat siedemdziesiątych. Dziś miasto żyje przede wszystkim z dużego zakładu motoryzacyjnego produkującego półosie napędowe. Warto też wiedzieć o miejscowym muzeum, otwartym w 1980 roku — ma osiem działów, a wśród eksponatów kompletne wyposażenie apteki z początku XX wieku.",
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

  districtsHeading: "Do których części Praszki dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta — łącznie z Zawisną i Kowalami — i do sołectw gminy, w tym Strojca, Przedmościa i Wierzbia, bez dopłaty za dojazd.",
    "Statut gminy przewiduje wyłącznie sołectwa, a miasto nie ma rad osiedli, więc nie będę wymyślać nazw dzielnic; przy umawianiu wystarczy podać ulicę.",
  ],
  districts: [],

  nearbyHeading: "Poza Praszkę też przyjadę",
  nearbyParagraphs: [
    "Olesno, Kluczbork, Wieluń, Wieruszów i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Olesno", "Kluczbork", "Wieluń", "Namysłów", "Opole", "Ozimek"],

  about: blokOMnie("do Praszki", "w Praszce i okolicy", REGION_OPOLSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Praszki bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Praszkę w powiecie oleskim, nie o Prószków pod Opolem — to dwa różne miasta w tym samym województwie.",
    },
    ...faqWspolne("w Praszce"),
    {
      question: "Czy Thermomix zrobi ciasto na pyzy albo kopytka?",
      answer:
        "Może pomóc, ale trzeba uważać — to jedna z niewielu rzeczy, w których potrafi zaszkodzić. Zbyt długo mieszany ugotowany ziemniak uwalnia skrobię i masa robi się kleista oraz gumowata, czego już nie da się odkręcić. Przy ziemniakach obowiązuje zasada odwrotna niż przy sosach: krótko i delikatnie.",
    },
    {
      question: "W czym więc pomaga przy tej potrawie?",
      answer:
        "Ugotuje ziemniaki na parze, przez co nie nasiąkają wodą tak jak w garnku, zważy mąkę bez wyciągania wagi i równolegle zrobi sos albo okrasę. Formowanie, wałkowanie i gotowanie we wrzątku zostaje przy Waszych rękach.",
    },
    {
      question: "Jakie proporcje mąki do ziemniaków polecasz?",
      answer:
        "Nie podam. W każdym domu są inne, zależą od odmiany ziemniaka i od tego, jak mokre wyszły po ugotowaniu. Podawanie cudzego przepisu jako swojego nie jest moją rolą.",
    },
  ],

  geo: { lat: 51.0536, lng: 18.4536 },
};
