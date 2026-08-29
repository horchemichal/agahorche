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
 * NIEDŹWIEDŹ — gmina wiejska, powiat limanowski, Gorce.
 * 7 282 mieszkańców (31.12.2024, GUS) na ok. 74 km², 99 os./km².
 * CZTERY SOŁECTWA: Konina, Niedźwiedź, Podobin, Poręba Wielka.
 *
 * OŚ STRONY: GMINA, KTÓRA SIĘ NIE WYLUDNIA. Przyrost naturalny +31
 * (89 urodzeń, 58 zgonów), średni wiek 37,2 lat — jeden z najniższych
 * w Małopolsce, wzrost ludności o 10,0% w latach 2002–2024, a SALDO
 * DOJAZDÓW DO PRACY DODATNIE: +22 (204 przyjeżdża, 182 wyjeżdża).
 * To jest RZADKOŚĆ — prawie każda inna gmina w tej okolicy ma saldo
 * głęboko ujemne. Tu się nie tylko mieszka, tu się też pracuje.
 *
 * DRUGA OŚ: DYREKCJA GORCZAŃSKIEGO PARKU NARODOWEGO JEST W PORĘBIE
 * WIELKIEJ, czyli w tej gminie.
 *
 * TRZECIA: WŁADYSŁAW ORKAN urodził się w Porębie Wielkiej
 * 27 listopada 1875 r. (nazwisko rodowe Franciszek Ksawery Smaciarz,
 * później Smreczyński); zm. 14 maja 1930 w Krakowie, pochowany
 * w Zakopanem.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA (31.12.2024, GUS za polskawliczbach): 7 282
 *   mieszkańców, 99 os./km², ŚREDNI WIEK 37,2 LAT; wzrost o 10,0%
 *   w latach 2002–2024; 89 urodzeń, 58 zgonów, PRZYROST NATURALNY +31;
 *   struktura wieku: przedprodukcyjny 19,3%, produkcyjny 67,6%,
 *   poprodukcyjny 13,1%,
 * — POWIERZCHNIA: 74,2 km² (polskawliczbach) / 74,44 km² (inne
 *   źródła) — piszę „około siedemdziesiąt cztery",
 * — SOŁECTWA (4): Konina, Niedźwiedź, Podobin, Poręba Wielka.
 *   Poręba Wielka największa (33,1% ludności gminy),
 * — DOJAZDY DO PRACY: przyjeżdża 204, wyjeżdża 182, SALDO +22,
 * — GOSPODARKA: 792 podmioty REGON (776 mikro, 15 małych, 1 średni);
 *   wśród osób fizycznych BUDOWNICTWO 44,4%, handel 17,9%; pracujący
 *   wg sektorów (2021): rolnictwo 29,4%, przemysł/budownictwo 27,8%,
 *   usługi 16,4%. Turystyka: 1,8 mln zł = 2,9% wydatków gminy 2024,
 * — GORCZAŃSKI PARK NARODOWY: DYREKCJA W PORĘBIE WIELKIEJ; park
 *   utworzony 1981 (początkowo 23,9 km²), obecnie 70,3 km², otulina
 *   166,47 km²; symbol — salamandra plamista; 95% lasów; ponad
 *   90 gatunków ptaków lęgowych; ryś, wilk, niedźwiedź,
 * — REZERWAT Z 1927 R. w majątku hr. LUDWIKA WODZICKIEGO w Porębie
 *   Wielkiej — z niego wyrósł park narodowy,
 * — WŁADYSŁAW ORKAN: ur. 27.11.1875 w Porębie Wielkiej, nazwisko
 *   rodowe Franciszek Ksawery Smaciarz, później Smreczyński;
 *   zm. 14.05.1930 w Krakowie, pochowany w Zakopanem; pisarz Młodej
 *   Polski, legionista; na początku XX w. zbudował w Porębie dom,
 * — TURBACZ: 1310 m n.p.m., najwyższy szczyt Gorców; schronisko PTTK
 *   na 1283 m (otwarte 1958, 100 miejsc). ⚠️ NIE PISZĘ, że leży
 *   w gminie — nie potwierdzone. Piszę „u podnóża Turbacza",
 * — KAPLICA BULANDY na Jaworzynie Kamienickiej — zbudowana przez
 *   pasterza (bacę) Tomasza Chlipałę na początku XX w. (w GPN),
 * — SĄSIEDZI: miasto Mszana Dolna, gmina Mszana Dolna, Kamienica,
 *   Nowy Targ, Rabka-Zdrój,
 * — BEZPIECZEŃSTWO: ok. 67 przestępstw rocznie (9,18/1000) — wyraźnie
 *   poniżej średniej krajowej.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — CZY GMINA LEŻY TAKŻE W BESKIDZIE WYSPOWYM. Nie potwierdzone —
 *   piszę tylko o Gorcach,
 * — REGIONU ETNOGRAFICZNEGO (Zagórzanie? Górale?). NIE POTWIERDZONY.
 *   Nie przypisuję gminie żadnej grupy — to jest rzecz, o którą
 *   mieszkańcy potrafią się spierać i zgadywanie byłoby obraźliwe,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Baza niedostępna,
 * — KÓŁ GOSPODYŃ, DOŻYNEK, LOKALNYCH POTRAW. Nie potwierdzone,
 * — NUMERÓW DRÓG WOJEWÓDZKICH I STACJI KOLEJOWEJ. Nie potwierdzone —
 *   nie podaję żadnego numeru,
 * — ODLEGŁOŚCI DROGOWYCH. Nie potwierdzone,
 * — CZY TURBACZ LEŻY W GRANICACH GMINY. Nie potwierdzone,
 * — NAZWY „ORKANÓWKA" i statusu muzeum Orkana w Porębie Wielkiej.
 *   Nie potwierdzone — piszę tylko o domu, który Orkan zbudował,
 * — STANU DWORU WODZICKICH DZIŚ. Nie potwierdzony.
 *
 * PUŁAPKI:
 * — MYLENIE GMINY NIEDŹWIEDŹ Z GMINĄ MSZANA DOLNA. To trzy różne
 *   jednostki: miasto Mszana Dolna, gmina wiejska Mszana Dolna
 *   i gmina Niedźwiedź,
 * — „NIEDŹWIEDŹ" I „PORĘBA WIELKA" to nazwy powtarzalne w Polsce,
 * — GPN: 1927 to rezerwat leśny, 1981 to utworzenie parku narodowego.
 *   23,9 km² to powierzchnia pierwotna, 70,3 km² obecna,
 * — ORKAN TO PSEUDONIM. Nazwisko rodowe: Smaciarz, później
 *   Smreczyński. Pochowany w Zakopanem, nie w Porębie,
 * — TURBACZ — bezpieczniej „u podnóża Turbacza" niż „Turbacz w gminie",
 * — KONINA ≠ KONIN.
 */

export const NIEDZWIEDZ: CityContent = {
  slug: "niedzwiedz",
  h1: "Thermomix Niedźwiedź – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Niedźwiedź — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Niedźwiedź: bezpłatna prezentacja TM7 u Ciebie w kuchni — Niedźwiedź, Poręba Wielka, Konina, Podobin. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Niedźwiedź — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Niedźwiedź. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Niedźwiedź przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do Niedźwiedzia, Poręby Wielkiej, Koniny i Podobina, także pod górę, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("wszystkie 4 sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Niedźwiedź – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Niedźwiedziu, jak w Porębie Wielkiej, Koninie i Podobinie.",
        "Potem gotujemy. Coś na obiad, coś słodkiego i — jeśli chcesz — coś z tego, co akurat masz w lodówce. To ostatnie jest najlepszym testem, bo pokazuje, czy urządzenie pasuje do jedzenia, które i tak u Was powstaje, a nie do przepisu z folderu.",
        "Na koniec siadamy do liczb: aktualna cena, obowiązująca promocja i rata przy różnych okresach spłaty. Nie domykam niczego tego samego dnia i nie zostawiam nikogo z poczuciem, że musi zdecydować od razu.",
        "Jedziemy tu w góry i drogi bywają wąskie, zwłaszcza zimą. Dojeżdżam mimo to i za dojazd nie liczę nic — proszę tylko, żebyście przy umawianiu powiedzieli, w którą stronę skręcić.",
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
      heading: "Gmina w Gorcach, do której przyjeżdża się do pracy",
      paragraphs: [
        "Jest w statystyce tej gminy liczba, której nie ma prawie żadna inna gmina w tej okolicy: saldo dojazdów do pracy jest tu dodatnie. Przyjeżdża tu dwieście cztery osoby, wyjeżdża sto osiemdziesiąt dwie. Plus dwadzieścia dwie. W okolicy, w której wszystkie sąsiednie gminy mają ten bilans głęboko ujemny, to jest rzecz warta odnotowania.",
        "Do tego demografia, która idzie pod prąd. Osiemdziesiąt dziewięć urodzeń przy pięćdziesięciu ośmiu zgonach, czyli przyrost naturalny plus trzydzieści jeden. Średni wiek trzydzieści siedem i dwie dziesiąte roku — jeden z najniższych w Małopolsce. Ludności przybyło od dwa tysiące drugiego roku o dziesięć procent.",
        "Mieszka tu siedem tysięcy dwieście osiemdziesiąt dwie osoby na czterech sołectwach: w Porębie Wielkiej, Koninie, Niedźwiedziu i Podobinie. Największa jest Poręba Wielka — mieszka w niej co trzeci mieszkaniec gminy.",
        "I to właśnie w Porębie Wielkiej mieści się dyrekcja Gorczańskiego Parku Narodowego. Park utworzono w tysiąc dziewięćset osiemdziesiątym pierwszym roku, ale jego początek jest starszy: w dwudziestym siódmym w majątku hrabiego Ludwika Wodzickiego w Porębie powstał rezerwat leśny, z którego park wyrósł. Dziś ma siedemdziesiąt kilometrów kwadratowych, w dziewięćdziesięciu pięciu procentach lasu, a jego symbolem jest salamandra plamista.",
        "W Porębie Wielkiej urodził się też, dwudziestego siódmego listopada tysiąc osiemset siedemdziesiątego piątego roku, Władysław Orkan. Orkan to pseudonim — nazwisko rodowe brzmiało Smaciarz, później Smreczyński. Na początku dwudziestego wieku zbudował tu dom. Zmarł w Krakowie w trzydziestym roku, pochowany jest w Zakopanem.",
        "Jedno zastrzeżenie, które robię świadomie. Nie napiszę, do której grupy etnograficznej należy ta gmina, bo tego nie potwierdziłam. To jest rzecz, o którą ludzie w Gorcach potrafią się spierać, i zgadywanie byłoby tu gorsze niż milczenie.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Niedźwiedź?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo: Niedźwiedź, Poręba Wielka, Konina albo Podobin. Jeśli mieszkacie wysoko, na przysiółku, powiedzcie to od razu — dojadę tak samo, ale wolę wiedzieć, gdzie skręcić i jak wygląda droga.",
        "Zimą proszę o jedno zdanie o dojeździe: czy droga jest odśnieżana i czy da się podjechać pod dom. Nie zmienia to niczego w cenie, zmienia tylko to, o której wyjeżdżam.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Niedźwiedź"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dużo dzieci, długa zima i kuchnia, która pracuje cały rok",
      paragraphs: [
        "Prawie jedna piąta mieszkańców tej gminy jest w wieku przedprodukcyjnym, a przyrost naturalny wynosi plus trzydzieści jeden. To znaczy dużo domów z małymi dziećmi — i dużo kuchni, w których gotuje się codziennie i dla kilku osób naraz.",
        "Przy małym dziecku najbardziej przydaje się to, że warzywa gotują się na parze i miksują w tym samym naczyniu, bez przelewania gorących rzeczy między garnkiem a blenderem. To brzmi drobno, dopóki nie robi się tego codziennie przez dwa lata.",
        "Druga rzecz to zima, a tu jest ona długa i prawdziwa. Gotuje się większymi garnkami, robi zapasy, częściej mrozi. Zupa na trzy dni, danie jednogarnkowe, bigos — to jest gotowanie, przy którym urządzenie zabiera całe pilnowanie: wstawiacie i wracacie po godzinie.",
        "Trzecia to praca. Wśród firm prowadzonych tu przez osoby fizyczne czterdzieści cztery procent to budownictwo — czyli praca fizyczna, często od świtu, z powrotem o nieregularnej porze. W takim domu obiad, który gotuje się sam i czeka ciepły, jest realnym udogodnieniem.",
        "Czwarta to goście. Gorczański Park Narodowy z dyrekcją w Porębie Wielkiej i szlaki na Turbacz oznaczają, że w wielu domach bywa ruch — kwatery, agroturystyka, rodzina na weekend. Śniadanie dla ośmiu osób robi się inaczej niż dla trzech, a urządzenie zdejmuje z tego rozdrabnianie, wyrabianie i mieszanie.",
        "I uczciwie: nie usmaży, nie upiecze i nie zastąpi piekarnika przy niedzielnej pieczeni. Zabierze mieszanie, siekanie, wyrabianie i pilnowanie temperatury — czyli tę część roboty, którą wykonuje się na stojąco.",
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
    heading: "Niedźwiedź i gotowanie — kuchnia gorczańska",
    paragraphs: [
      "Gorce to kuchnia z ziemniaka, kapusty, mąki, mleka i tego, co daje się uprawiać i wypasać wysoko. Prawie trzydzieści procent pracujących mieszkańców tej gminy pracuje w rolnictwie — to jest wciąż kuchnia z własnego gospodarstwa, nie ze sklepu.",
      "Tradycja pasterska jest tu obecna nawet w krajobrazie parku narodowego: kaplicę na Jaworzynie Kamienickiej zbudował na początku dwudziestego wieku baca Tomasz Chlipała, zwany Bulandą. To była praca ludzi, którzy całe lato spędzali z owcami na halach.",
      "Powiem uczciwie, czego nie sprawdziłam, bo w tej gminie to szczególnie ważne. Nie potwierdziłam, do której grupy etnograficznej się tu ludzie zaliczają, i nie napiszę tego z domysłu. Nie potwierdziłam też, czy z gminy pochodzi jakikolwiek wpis na ministerialną Listę Produktów Tradycyjnych, ani nie znalazłam kół gospodyń z nazwy. Nie wymyślę tego, żeby strona wyglądała bogaciej.",
      "To, co wiem na pewno o kuchni takiego miejsca, jest praktyczne. Gotuje się dużo naraz, bo rodziny są większe niż średnia i dzieci jest więcej. Gotuje się na zapas, bo zima trwa. I gotuje się z surowców, które trzeba obrobić od podstaw, a nie otworzyć.",
      "Tu urządzenie robi najwięcej: zetrze ziemniaki na placki, ugotuje kapustę, zrobi kwaśnicę albo żur bez pilnowania, wyrobi ciasto drożdżowe, zmieli mak. Wszystko to są czynności, które zabierają godziny stania.",
      "Czego nie zrobi: nie ulepi pierogów, nie usmaży placków i nie upiecze. Ciasto zrobi, farsz zmieli — lepienie, patelnia i piekarnik zostają po Waszej stronie.",
    ],
  },

  districtsHeading: "Gdzie w gminie Niedźwiedź dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich czterech sołectw: Niedźwiedzia, Poręby Wielkiej, Koniny i Podobina. Dopłaty za odległość nie ma nigdzie — także pod górę i także zimą.",
    "Największa jest Poręba Wielka: mieszka w niej mniej więcej co trzeci mieszkaniec gminy i to tam mieści się dyrekcja Gorczańskiego Parku Narodowego. Cała gmina liczy siedem tysięcy dwieście osiemdziesiąt dwie osoby na około siedemdziesięciu czterech kilometrach kwadratowych, czyli dziewięćdziesiąt dziewięć osób na kilometr.",
    "Jesteśmy w Gorcach, u podnóża Turbacza. Zabudowa idzie w górę, drogi bywają wąskie, a zimą trudniejsze. Dlatego przy umawianiu proszę o jedno zdanie: gdzie skręcić i czy da się podjechać pod dom.",
    "Sąsiadujemy z miastem Mszana Dolna i z gminą wiejską Mszana Dolna, a dalej z Kamienicą, Rabką i gminą Nowy Targ. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Jedno rozstrzygnięcie na wszelki wypadek: gmina Niedźwiedź to nie jest gmina Mszana Dolna. To trzy różne jednostki obok siebie — miasto Mszana Dolna, gmina wiejska Mszana Dolna i gmina Niedźwiedź. Do wszystkich dojeżdżam, ale przy umawianiu wolę wiedzieć, o którą chodzi.",
  ],
  districts: ["Niedźwiedź", "Poręba Wielka", "Konina", "Podobin"],

  nearbyHeading: "Mszana Dolna, Kamienica i Limanowa też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina Niedźwiedź graniczy z miastem Mszana Dolna, gminą wiejską Mszana Dolna, Kamienicą, Rabką-Zdrojem i gminą Nowy Targ. Do żadnej z okolicznych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy i nie masz pewności, czy to jeszcze Niedźwiedź, czy już Mszana Dolna albo Kamienica — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Mszana Dolna",
    "Kamienica",
    "Limanowa",
    "Tymbark",
    "Dobra",
    "Kraków",
  ],

  about: blokOMnie("do gminy Niedźwiedź", "w powiecie limanowskim"),

  faq: [
    {
      question: "Mieszkamy wysoko, droga jest wąska. Dojedziesz zimą?",
      answer:
        "Dojadę i nie doliczę za to nic. Proszę tylko o jedno zdanie przy umawianiu: gdzie skręcić i czy da się podjechać pod dom. W Gorcach to jest realne pytanie, a nie formalność — nie zmienia ceny, zmienia tylko godzinę, o której wyjeżdżam.",
    },
    ...faqWspolne("w gminie Niedźwiedź"),
    {
      question: "Prowadzimy kwatery. Czy to się przyda przy gościach?",
      answer:
        "Przy śniadaniach i przy gotowaniu dla większej liczby osób — tak. Rozdrabnianie, wyrabianie ciasta, pasty, zupy i dania jednogarnkowe robi się w jednym naczyniu i bez pilnowania, więc odpada mycie trzech garnków i stanie przy każdym z nich. Nie usmaży natomiast jajecznicy ani nie upiecze bułek; to zostaje po Waszej stronie.",
    },
    {
      question: "Czy dojeżdżasz do Poręby Wielkiej i Koniny tak samo?",
      answer:
        "Tak samo, bez dopłat. Obsługuję wszystkie cztery sołectwa gminy: Niedźwiedź, Porębę Wielką, Koninę i Podobin. Przy Porębie Wielkiej warto dopisać „gmina Niedźwiedź”, bo miejscowości o tej nazwie są w Polsce także gdzie indziej.",
    },
  ],

  geo: { lat: 49.6214, lng: 20.08 },
};
