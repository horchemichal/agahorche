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
 * STRYKÓW — gmina miejsko-wiejska w powiecie zgierskim.
 * MIASTO 3 337, GMINA 13 000 (GUS 31.12.2024).
 * 35 SOŁECTW + 4 osiedla (dane urzędu). 42 to liczba
 * MIEJSCOWOŚCI, nie sołectw — nie mylić.
 *
 * PRAWA MIEJSKIE — najlepiej udokumentowane w tej fali:
 * 1394 r. od WŁADYSŁAWA JAGIEŁŁY, na wniosek Deresława Tłuka,
 * podskarbiego łęczyckiego. UTRATA 1869 (nie 1870!),
 * PRZYWRÓCENIE 1923.
 *
 * WĘZEŁ A1/A2 — skrzyżowanie dwóch autostrad. NIE PISZĘ
 * „jedyne w Polsce" — to nieprawda.
 * ZABYTKI: kościół św. Marcina 1907–1914 (NIE średniowieczny),
 * odbudowany 1925; zespół Starokatolickiego Kościoła
 * Mariawitów z 1907 r.; pałac Rzewuskich w Bratoszewicach
 * z 1924 r., proj. Juliusz Nagórski, park 23 ha; drewniany
 * kościół św. Szczepana w Koźlu z 1752 r.
 * Rzeka MOSZCZENICA. Fragment PK Wzniesień Łódzkich
 * (11 580 ha + otulina 3 083 ha) leży w gminie.
 *
 * KĄT: KONSYSTENCJA — gładko czy z kawałkami. Gdzie przestać
 * rozdrabniać. Kąt pasuje do miasta, które samo jest miejscem
 * decyzji: węzłem, na którym trzeba wybrać kierunek.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najczęstszy błąd nowego użytkownika to miksowanie
 *   wszystkiego na gładko, bo urządzenie to potrafi,
 * — że gładkie i kawałkowe to nie jest kwestia staranności,
 *   tylko WYBORU, i że część dań traci na gładkości,
 * — które dania zyskują na gładkości (zupy kremy, pasty,
 *   masy, przeciery), a które tracą (zupy warzywne, sosy
 *   z warzywami, farsze, sałatki),
 * — że gładkości NIE DA SIĘ COFNĄĆ, a kawałki zawsze można
 *   dogonić — więc kierunek pracy jest jednostronny,
 * — że dziecko i osoba starsza to dwa różne powody, dla
 *   których ktoś chce gładko — i tylko jeden z nich jest
 *   o wygodzie,
 * — i ODMOWA: nie doradzę nic o konsystencji jedzenia dla
 *   osób z trudnościami w połykaniu.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD MEDYCZNYCH: dieta o zmienionej konsystencji,
 *   dysfagia, karmienie osób chorych. ODMOWA STOI W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM ani operatorów logistycznych.
 * — NIE PISZĘ, że węzeł Stryków jest jedynym skrzyżowaniem
 *   autostrad w Polsce.
 * — NIE ROBIĘ TŁA z pracy w magazynach.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Noże i ostrzenie"
 * (Drzewica) dotyczą NARZĘDZIA i różnicy między cięciem
 * a siekaniem. Tutaj chodzi o EFEKT: jak drobno i po co.
 * „Purée i płatki" (Głowno) dotyczą jednego dania. „Sernik
 * i masy" dotyczą wypieków. „Zupa" ma własne miasto.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ daty utworzenia PK Wzniesień Łódzkich ani
 *   aktu prawnego — nie potwierdzono.
 * — NIE PODAJĘ numerów rejestru zabytków.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych —
 *   dla Strykowa i powiatu zgierskiego nie ma żadnego.
 * — NIE PODAJĘ nazw imprez cyklicznych — brak potwierdzenia.
 * — NIE MYLĘ Strykowa z wsią Stryków w mazowieckim ani ze
 *   Strykowem w wielkopolskim.
 * — districts: gmina ma 4 osiedla tworzące miasto, ale nie
 *   znalazłam ich urzędowych nazw. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto 3 337, gmina 13 000 mieszkańców; 35 sołectw,
 * — prawa miejskie z 1394 r. od Władysława Jagiełły, utracone
 *   w 1869 r., przywrócone w 1923 r.,
 * — w gminie krzyżują się autostrady A1 i A2,
 * — kościół świętego Marcina z lat 1907–1914, neoromański,
 * — zespół Starokatolickiego Kościoła Mariawitów z 1907 r.,
 * — pałac Rzewuskich w Bratoszewicach z 1924 r., proj. Juliusz
 *   Nagórski, w parku o powierzchni 23 ha,
 * — drewniany kościół świętego Szczepana w Koźlu z 1752 r.,
 * — przez gminę płynie Moszczenica,
 * — część gminy leży w Parku Krajobrazowym Wzniesień Łódzkich.
 */
export const STRYKOW: CityContent = {
  slug: "strykow",
  h1: "Thermomix Stryków – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Stryków (łódzkie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Strykowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Stryków — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Strykowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Strykowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wszystkich sołectw gminy.",

  highlights: highlightyStandardowe("Stryków i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Gładko czy z kawałkami — to wybór, nie miara staranności.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Strykowie – jak wygląda prezentacja?",
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
      id: "konsystencja",
      heading: "Miasto, w którym trzeba wybrać kierunek — czyli gładko czy z kawałkami",
      paragraphs: [
        "W gminie Stryków krzyżują się autostrady A1 i A2. Samo miasto jest małe — trzy i pół tysiąca ludzi, prawa miejskie od Władysława Jagiełły z 1394 roku, utracone w 1869 i przywrócone w 1923 — ale leży w miejscu, w którym trzeba podjąć decyzję i nie da się jej odłożyć. Jedziesz w jedną stronę albo w drugą.",
        "W kuchni z tym urządzeniem jest podobna decyzja i prawie nikt jej nie nazywa: gładko czy z kawałkami.",
        "Najczęstszy błąd nowego użytkownika, jaki widzę, jest właśnie tu. Urządzenie potrafi zmiksować na gładko wszystko, więc przez pierwsze tygodnie miksuje się na gładko wszystko. Zupa jarzynowa staje się kremem. Sos pomidorowy staje się aksamitny. Farsz staje się pastą. I dopiero po jakimś czasie człowiek się orientuje, że część tych dań na tym straciła.",
        "To nie jest kwestia staranności ani umiejętności. To wybór. Są dania, które na gładkości zyskują wszystko: zupy kremy, pasty do chleba, masy na ciasto, przeciery, hummus, sosy, które mają być jednolite. I są takie, które na niej tracą, bo cały ich sens polega na tym, że się coś czuje: zupa warzywna, sos z kawałkami warzyw, farsz, sałatka, bigos, leczo. Danie bez struktury smakuje inaczej, nawet jeśli składniki są identyczne.",
        "Jest jeszcze rzecz mechaniczna, o której warto pamiętać: ta droga jest jednokierunkowa. Z kawałków zawsze można zrobić gładkie, a z gładkiego nigdy nie da się z powrotem zrobić kawałków. Dlatego zawsze warto puścić krócej, zajrzeć i ewentualnie dołożyć — a nie odwrotnie. Sekundy naprawdę robią tu różnicę.",
        "I jeszcze jedno rozróżnienie, bo bywa mylone. Ktoś chce gładko, bo tak lubi, i to jest kwestia gustu. A ktoś chce gładko, bo w domu jest osoba, która inaczej nie da rady zjeść — i to jest zupełnie inna sprawa.",
        "Tu jest moja granica i mówię ją wprost: nie doradzę Wam nic o konsystencji jedzenia dla kogoś, kto ma trudności z przełykaniem albo jest po zabiegu. To jest teren, na którym decyduje lekarz albo dietetyk, a nie sprzedawczyni sprzętu kuchennego. Urządzenie fizycznie da radę zrobić bardzo gładką masę — ale to, czy w konkretnym przypadku ma być taka i jak gęsta, to nie jest pytanie do mnie.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Strykowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli chcecie zobaczyć różnicę między tym samym daniem zmiksowanym i niezmiksowanym — powiedzcie przy umawianiu. To najprostsza rzecz do pokazania i najlepiej tłumaczy, o co w tym urządzeniu chodzi.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Strykowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla strykowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy około trzech i pół tysiąca mieszkańców, a cała gmina trzynaście tysięcy, w trzydziestu pięciu sołectwach. Prawa miejskie Stryków dostał w 1394 roku od Władysława Jagiełły, stracił je w 1869 i odzyskał w 1923. Z zabytków warto wymienić neoromański kościół świętego Marcina z lat 1907–1914, rzadki w skali kraju zespół Starokatolickiego Kościoła Mariawitów z 1907 roku, pałac Rzewuskich w Bratoszewicach z 1924 roku w dwudziestotrzyhektarowym parku i drewniany kościół świętego Szczepana w Koźlu z 1752 roku. Przez gminę płynie Moszczenica, a jej wschodnia część leży w Parku Krajobrazowym Wzniesień Łódzkich.",
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

  districtsHeading: "Do których części gminy Stryków dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich trzydziestu pięciu sołectw gminy — Bratoszewic, Koźla, Niesułkowa, Lipki i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Stryków też przyjadę",
  nearbyParagraphs: [
    "Zgierz, Brzeziny, Głowno, Łódź, Ozorków i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Zgierz", "Głowno", "Brzeziny", "Ozorków"],

  about: blokOMnie("do Strykowa", "w Strykowie i całej gminie", REGION_LODZKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Strykowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich trzydziestu pięciu sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: chodzi o Stryków w powiecie zgierskim — nie o wieś Stryków w mazowieckim ani o Strykowo w wielkopolskim.",
    },
    ...faqWspolne("w Strykowie"),
    {
      question: "Czy Thermomix wszystko miksuje na gładko?",
      answer:
        "Potrafi, ale nie musi i często nie powinien. Zupy kremy, pasty, masy i przeciery zyskują na gładkości. Zupa warzywna, sos z kawałkami, farsz, bigos czy leczo na niej tracą, bo ich sens polega na tym, że się coś czuje. To jest wybór, a nie miara staranności.",
    },
    {
      question: "Jak nie przesadzić z miksowaniem?",
      answer:
        "Pracować krócej i zaglądać. Ta droga jest jednokierunkowa: z kawałków zawsze zrobicie gładkie, z gładkiego nigdy nie wrócicie do kawałków. Sekundy robią tu realną różnicę.",
    },
    {
      question: "Czy zrobię w nim jedzenie dla kogoś, kto ma problem z przełykaniem?",
      answer:
        "Urządzenie fizycznie zrobi bardzo gładką masę, ale tego pytania nie rozstrzygnę. Jaka konsystencja jest właściwa w konkretnym przypadku, decyduje lekarz albo dietetyk — nie ja i nie sprzęt kuchenny.",
    },
  ],

  geo: { lat: 51.9022, lng: 19.6055 },
};
