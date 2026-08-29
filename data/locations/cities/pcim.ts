import type { CityContent } from "../city-content";
import {
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
 * PCIM — gmina wiejska, powiat myślenicki, Beskid Makowski / Wyspowy.
 * 11 091 mieszkańców (31.12.2024) na 65,4 km². TRZY MIEJSCOWOŚCI
 * (Pcim, Stróża, Trzebunia), ale SZEŚĆ SOŁECTW — Pcim dzieli się na
 * Pcim Centrum, Pcim Sucha i Pcim Krzywica, Stróża na Stróżę Dolną
 * i Stróżę Górną, Trzebunia jest jednym sołectwem.
 *
 * OŚ STRONY: NAZWA. „Pcim" to w polszczyźnie synonim końca świata —
 * i to jest jedyna rzecz, którą o tej gminie wie cała Polska. Strona
 * ma tę nazwę odwrócić: pokazać jedenaście tysięcy ludzi, węzeł
 * ekspresówki, schronisko na Kudłaczach i Kliszczaków.
 *
 * DRUGA OŚ: gmina rozciągnięta wzdłuż doliny Raby i podzielona
 * na przysiółki rozrzucone po stokach — dojazd trzeba układać
 * z wyprzedzeniem, a nie „na numer domu".
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 11 091
 *   mieszkańców, 65,4 km², ok. 170 os./km²,
 * — SOŁECTWA (6): Pcim Centrum, Pcim Sucha, Pcim Krzywica,
 *   Stróża Dolna, Stróża Górna, Trzebunia. MIEJSCOWOŚCI SĄ TRZY:
 *   Pcim, Stróża, Trzebunia. To nie to samo i mylenie tego jest
 *   najczęstszym błędem w opisach tej gminy,
 * — KLISZCZACKIE DOŻYNKI: 24 sierpnia 2025 r. Gmina należy
 *   do regionu etnograficznego Kliszczaków,
 * — S7: węzeł Pcim na zakopiance oraz rondo wykonane przez Limdrog
 *   (2021). Zakopianka przechodzi przez gminę wzdłuż doliny Raby,
 * — SCHRONISKO PTTK KUDŁACZE: 730 m n.p.m., nad Trzebunią,
 * — DOJAZDY DO PRACY: saldo −539 (więcej wyjeżdża niż przyjeżdża),
 * — TERENY INWESTYCYJNE: gmina oficjalnie deklaruje, że NIE POSIADA
 *   terenów inwestycyjnych na sprzedaż,
 * — LGD: gmina należy do Stowarzyszenia „Turystyczna Podkowa"
 *   (siedziba Siepraw) razem z Dobczycami, Lubniem, Raciechowicami,
 *   Sieprawiem, Tokarnią i Wiśniową,
 * — SĄSIEDZI: Myślenice (od północy), Lubień (od południa),
 *   Tokarnia, Wiśniowa, Sułkowice.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DATY LOKACJI I HISTORII ŚREDNIOWIECZNEJ. Nie zweryfikowane,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH z tej gminy. Baza
 *   ministerialna niedostępna (gov.pl blokuje pobieranie) — nie piszę
 *   ani że jest, ani że go nie ma,
 * — NAZWISK, FIRM I ZAKŁADÓW poza wykonawcą ronda, który jest podany
 *   w źródle gminnym,
 * — DOKŁADNEJ LICZBY PRZYSIÓŁKÓW I ICH NAZW. Wiadomo, że zabudowa
 *   jest rozproszona po stokach, ale pełnej listy nie potwierdziłam,
 * — CZASÓW PRZEJAZDU I NUMERÓW LINII AUTOBUSOWYCH. Nie potwierdzone,
 * — KOŚCIOŁÓW, ZABYTKÓW I DAT ICH BUDOWY. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — „PCIM DOLNY" NIE ISTNIEJE. To żart językowy, nie miejscowość.
 *   Dolna i Górna jest STRÓŻA. Napisanie „Pcim Dolny" na stronie
 *   lokalnej ośmieszyłoby ją w oczach każdego mieszkańca,
 * — SOŁECTW JEST SZEŚĆ, NIE TRZY. Miejscowości są trzy,
 * — TRZEBUNIA to wieś w gminie Pcim, nie osobna gmina,
 * — WĘZEŁ PCIM leży na S7, ale sama gmina nie jest „przy autostradzie",
 * — KUDŁACZE to schronisko nad Trzebunią, nie szczyt.
 */

export const PCIM: CityContent = {
  slug: "pcim",
  h1: "Thermomix Pcim – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Pcim — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Pcim: bezpłatna prezentacja TM7 u Ciebie w kuchni — Pcim, Stróża, Trzebunia. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Pcim — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Pcim. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Pcim przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do Pcimia, Stróży i Trzebuni, także pod górę i na przysiółki, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("Pcim, Stróża, Trzebunia — bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Pcim – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Pcimiu, jak w Stróży i w Trzebuni.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
      ],
      links: [
        {
          href: "/prezentacja/jak-wyglada",
          label: "Zobacz, jak wygląda prezentacja krok po kroku",
        },
      ],
      photo: {
        src: "/media/aga-przedstawiciel-thermomix-hero-f49127f7.webp",
        alt: "Aga Horche z Thermomixem TM7 — napis „Przedstawiciel Thermomix”",
        caption:
          "Prezentację prowadzi Aga — ta sama osoba, która odbierze telefon po zakupie.",
      },
    },
    {
      id: "na-zywo",
      heading: "Jedenaście tysięcy ludzi w miejscu, które podobno jest końcem świata",
      paragraphs: [
        "Zacznę od tego, o czym wszyscy myślą, i od razu to zamknę. Nazwa tej gminy funkcjonuje w polszczyźnie jako synonim odludzia — „gdzieś w Pcimiu”, „Pcim Dolny”. Otóż Pcimia Dolnego nie ma i nigdy nie było. Dolna i Górna jest Stróża, i to zupełnie poważnie: to dwa z sześciu tutejszych sołectw.",
        "Bo sołectw jest sześć, choć miejscowości trzy. Pcim dzieli się na Pcim Centrum, Pcim Suchą i Pcim Krzywicę, Stróża na Dolną i Górną, a Trzebunia jest jedna. Kto myli te dwie liczby, ten prawie na pewno pisze o gminie z mapy, a nie z drogi.",
        "Mieszka tu jedenaście tysięcy dziewięćdziesiąt jeden osób na sześćdziesięciu pięciu kilometrach kwadratowych. To więcej ludzi niż w niejednym mieście powiatowym i mniej więcej dwa razy tyle, co w sąsiedniej Tokarni. Odludzie to nie jest.",
        "Gmina leży wzdłuż doliny Raby, po której biegnie zakopianka, i ma własny węzeł drogi ekspresowej — węzeł Pcim — oraz wykonane w dwa tysiące dwudziestym pierwszym roku rondo. Dla mnie to oznacza dojazd szybki i przewidywalny, dla mieszkańców — codzienny wyjazd do Myślenic i Krakowa.",
        "Zabudowa jest jednak rozrzucona po stokach, na przysiółkach, do których prowadzą wąskie drogi w górę. To jest ten typ gminy, w którym sam numer domu nie wystarcza i lepiej powiedzieć, w którą stronę skręcić za mostem.",
        "Nad Trzebunią, na siedmiuset trzydziestu metrach, stoi schronisko PTTK Kudłacze. A cała gmina należy do regionu Kliszczaków — do tego stopnia, że dożynki, które odbyły się tu dwudziestego czwartego sierpnia dwa tysiące dwudziestego piątego roku, nazywały się Kliszczackimi Dożynkami.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Pcim?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Przy umawianiu podaj nazwę sołectwa, a nie tylko miejscowości: Pcim Centrum, Pcim Sucha, Pcim Krzywica, Stróża Dolna, Stróża Górna albo Trzebunia. Jeśli mieszkacie na przysiółku wysoko nad drogą, powiedzcie to od razu — dojadę tak samo, ale wolę wiedzieć, gdzie skręcić.",
        "Dopłaty za odległość nie ma nigdzie w gminie, także pod górę i także zimą. Terminy mam też w dni robocze przed południem, jeśli tak Wam wygodniej.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Pcim"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dom, z którego wyjeżdża się do pracy w dolinę",
      paragraphs: [
        "Bilans dojazdów do pracy jest tu ujemny o pięćset trzydzieści dziewięć osób — tyle więcej wyjeżdża, niż przyjeżdża. Gmina oficjalnie nie ma terenów inwestycyjnych na sprzedaż, więc nie ma też co liczyć, że praca sama się tu pojawi. Praca jest w Myślenicach i w Krakowie, a zakopianka jest drogą, którą się do niej dojeżdża.",
        "To znaczy dom, w którym o siedemnastej albo osiemnastej trzeba postawić obiad, i to po godzinie w samochodzie. Właśnie w takim domu urządzenie gotujące bez obecności zmienia najwięcej: wstawiacie rano, wracacie wieczorem i obiad jest, zamiast być dopiero zaczynany.",
        "Druga rzecz to zima. Tu jest wyżej niż w dolinie Wisły i drogi na przysiółki bywają trudne. Zapasy robi się większe, gotuje się większymi garnkami i częściej mrozi. Urządzenie nie odśnieży podjazdu, ale zupę na trzy dni ugotuje bez pilnowania.",
        "Trzecia to dzieci. Starsze dziecko, które wraca ze szkoły przed rodzicami, jest w stanie samo wstawić obiad, bo przepis prowadzi je krok po kroku i nie wymaga oceniania „czy już wrze”. Dla domu, w którym oboje dorosłych dojeżdża, to jest konkretna zmiana, a nie gadżet.",
        "I rzecz, którą powiem uczciwie: nie zabierze wszystkiego. Nie usmaży, nie upiecze i nie zastąpi piekarnika przy niedzielnej pieczeni. Zabierze natomiast mieszanie, pilnowanie temperatury i tę część roboty, którą wykonuje się stojąc.",
      ],
      links: [
        { href: "/thermomix/dla-rodziny", label: "Thermomix dla rodziny" },
        { href: "/thermomix/dla-mamy", label: "Thermomix dla mamy" },
      ],
      photo: {
        src: "/media/gotuj-z-dzieckiem-1-be78fd1c.webp",
        alt: "Aga Horche z synem i Thermomixem TM7 — napis „gotuj z dzieckiem i dla dziecka”",
        caption:
          "Posiłek dla dziecka może powstawać równolegle z obiadem dla reszty domu.",
      },
    },
    sekcjaCoUgotujesz(),
    sekcjaTradycyjneGotowanie(),
  ],

  culinary: {
    heading: "Pcim i gotowanie — kuchnia kliszczacka",
    paragraphs: [
      "Gmina Pcim leży w regionie etnograficznym Kliszczaków, ludzi z pogranicza góralszczyzny i podgórza, i sama się do tego przyznaje wprost: dożynki, które odbyły się tutaj dwudziestego czwartego sierpnia dwa tysiące dwudziestego piątego roku, nosiły nazwę Kliszczackich Dożynek.",
      "Kuchnia takiego pogranicza jest kuchnią z ziemniaka, kapusty, mąki i mleka, gotowaną w dużych garnkach dla dużej rodziny. Nie jest to kuchnia bogata i nikt tutaj tak jej nie przedstawia — jest to kuchnia sycąca, robiona z tego, co daje się uprawiać na stoku.",
      "Powiem od razu, czego nie napiszę. Nie udało mi się sprawdzić, czy z tej gminy pochodzi jakikolwiek wpis na ministerialnej Liście Produktów Tradycyjnych, bo baza była dla mnie niedostępna. Nie wymyślę więc nazwy żadnej potrawy „z Pcimia” tylko po to, żeby strona ładniej wyglądała.",
      "To, co potwierdzone, to że kuchnia jest tu wciąż robotą wspólną i publiczną — dożynki, koła gospodyń, konkursy. Kto piecze na dożynki, ten wie, ile godzin idzie na samo wyrobienie ciasta.",
      "I tu urządzenie faktycznie pomaga: wyrobi ciasto drożdżowe, zmieli mak, zetrze ziemniaki na placki, ugotuje kapustę i zrobi to bez stania przy garnku. Kwaśnicy, żuru czy zupy z kiszonej kapusty nie trzeba pilnować — wstawia się i wraca po godzinie.",
      "Czego nie zrobi: nie ulepi pierogów i nie usmaży placków. Ciasto zrobi, farsz zmieli, ale lepienie i patelnia zostają po Waszej stronie. Nie ma sensu obiecywać czegoś innego.",
    ],
  },

  districtsHeading: "Gdzie w gminie Pcim dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich sześciu sołectw: Pcimia Centrum, Pcimia Suchej, Pcimia Krzywicy, Stróży Dolnej, Stróży Górnej i Trzebuni. Dopłaty za odległość nie ma nigdzie.",
    "Miejscowości są trzy — Pcim, Stróża i Trzebunia — ale sołectw sześć, i to sołectwo jest tu praktyczniejszą jednostką. Dlatego przy umawianiu proszę właśnie o nie.",
    "Zabudowa jest rozrzucona po stokach, po przysiółkach, do których trzeba wjechać wąską drogą w górę. Dojeżdżam tam tak samo jak do centrum, tylko wolę wiedzieć wcześniej, żeby ułożyć trasę i zaplanować czas.",
    "Główną osią gminy jest dolina Raby i biegnąca nią zakopianka, z węzłem Pcim i rondem oddanym w dwa tysiące dwudziestym pierwszym roku. Dla mnie to znaczy dojazd szybki od strony Myślenic i od strony Lubnia.",
    "I jedna rzecz na koniec, bo pada za każdym razem: Pcim Dolny nie istnieje. Dolna i Górna jest Stróża. Jeśli ktoś powie mi przez telefon „Pcim Dolny”, dopytam, bo to naprawdę zmienia trasę.",
  ],
  districts: [
    "Pcim Centrum",
    "Pcim Sucha",
    "Pcim Krzywica",
    "Stróża Dolna",
    "Stróża Górna",
    "Trzebunia",
  ],

  nearbyHeading: "Myślenice, Lubień, Tokarnia i Wiśniowa też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Pcim graniczy z Myślenicami od północy i z Lubniem od południa, a od wschodu i zachodu z Tokarnią, Wiśniową i Sułkowicami. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy i nie masz pewności, czy to jeszcze Pcim, czy już Lubień albo Myślenice — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Myślenice",
    "Lubień",
    "Tokarnia",
    "Wiśniowa",
    "Sułkowice",
    "Dobczyce",
    "Kraków",
  ],

  about: blokOMnie("do gminy Pcim", "w powiecie myślenickim"),

  faq: [
    {
      question: "Mieszkamy na przysiółku wysoko nad drogą. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki — także zimą. Proszę tylko, żebyście przy umawianiu powiedzieli, gdzie skręcić, bo w tej gminie zabudowa jest rozrzucona po stokach i sam numer domu czasem nie wystarcza. Jeden zdanie opisu w SMS-ie oszczędza mi kwadrans krążenia.",
    },
    ...faqWspolne("w gminie Pcim"),
    {
      question: "Czy dojeżdżasz do Stróży i Trzebuni tak samo jak do Pcimia?",
      answer:
        "Tak samo, bez dopłat. Obsługuję wszystkie sześć sołectw gminy: Pcim Centrum, Pcim Suchą, Pcim Krzywicę, Stróżę Dolną, Stróżę Górną i Trzebunię. Warto pamiętać, że miejscowości są trzy, a sołectw sześć — przy umawianiu wygodniej podać sołectwo.",
    },
    {
      question: "Wracamy z pracy po siedemnastej. Kiedy się umawiacie?",
      answer:
        "Najczęściej właśnie wieczorem, i to jest tu norma — z tej gminy wyjeżdża do pracy o pięćset trzydzieści dziewięć osób więcej, niż przyjeżdża. Umawiam się też w soboty i w dni robocze przed południem, jeśli ktoś pracuje na zmiany. Prezentacja trwa około dwóch godzin.",
    },
  ],

  geo: { lat: 49.7519, lng: 19.9692 },
};
