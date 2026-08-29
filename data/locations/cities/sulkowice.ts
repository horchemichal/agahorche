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
 * SUŁKOWICE — gmina miejsko-wiejska, powiat myślenicki, Beskid Makowski.
 * 15 232 mieszkańców. Miasto Sułkowice + CZTERY WSIE: Biertowice,
 * Harbutowice, Krzywaczka, Rudnik.
 *
 * OŚ STRONY: KOWALSTWO — ale opisane UCZCIWIE. Tradycja kowalska
 * sięga co najmniej XVII wieku, natomiast SAMA GMINA PISZE O NIEJ
 * W CZASIE PRZESZŁYM („słynąca w minionym stuleciu"). Nie robię więc
 * z tego żywej gałęzi gospodarki, tylko tożsamość, która została
 * w nazwach: rynek „Zielona Podkowa", Spółdzielnia Socjalna
 * „Podkówka", gminny biuletyn „Kłamra". Kłamra to narzędzie kowalskie
 * — miasto nazwało swoją gazetę narzędziem.
 *
 * DRUGA OŚ: NAJMŁODSZE MIASTO W OKOLICY — prawa miejskie DOPIERO
 * OD 1969 R. TRZECIA: gmina, która się rodzi (10,9 urodzeń na 1000
 * mieszkańców wobec 6,7 w kraju), a jednocześnie masowo wyjeżdża
 * do pracy (saldo dojazdów −935).
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — DEMOGRAFIA: 15 232 mieszkańców. URODZENIA 10,9 NA 1000
 *   MIESZKAŃCÓW wobec 6,7 dla Polski — jeden z najwyższych wyników
 *   w powiecie,
 * — PRAWA MIEJSKIE: 1969 R. Sułkowice są najmłodszym miastem
 *   w okolicy,
 * — JEDNOSTKI (5): miasto Sułkowice oraz wsie Biertowice,
 *   Harbutowice, Krzywaczka, Rudnik,
 * — KOWALSTWO: tradycja sięgająca CO NAJMNIEJ XVII WIEKU. Gmina
 *   opisuje ją w czasie przeszłym: „słynąca w minionym stuleciu",
 * — ŚLADY W NAZWACH (potwierdzone): rynek „ZIELONA PODKOWA",
 *   SPÓŁDZIELNIA SOCJALNA „PODKÓWKA", gminny biuletyn „KŁAMRA",
 * — DOJAZDY DO PRACY: saldo −935,
 * — POŁOŻENIE: Beskid Makowski, na północ Kraków, na wschód
 *   Myślenice, na zachód Kalwaria Zebrzydowska i Lanckorona.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — MUZEUM KOWALSTWA. NIE POTWIERDZONE. Kilka źródeł wtórnych o nim
 *   wspomina, żadne pierwotne go nie potwierdza. Nie piszę o nim ani
 *   słowa — wysłanie kogoś do nieistniejącego muzeum to najgorsze,
 *   co można zrobić stronie lokalnej,
 * — DATY ZAŁOŻENIA SZKOŁY KOWALSKIEJ/ŚLUSARSKIEJ. Podawane są różne
 *   lata, żadnego nie potwierdziłam u źródła. Nie podaję żadnego,
 * — NAZW I LICZBY DZIAŁAJĄCYCH DZIŚ KUŹNI. Nie potwierdzone. Właśnie
 *   dlatego piszę o tradycji, a nie o czynnym rzemiośle,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Baza ministerialna
 *   niedostępna — nie piszę ani że jest, ani że go nie ma,
 * — DAT BUDOWY KOŚCIOŁÓW I WPISÓW DO REJESTRU ZABYTKÓW.
 *   Nie potwierdzone,
 * — LICZBY SOŁECTW JAKO ODRĘBNEJ KATEGORII. Potwierdzone są cztery
 *   wsie; nie zakładam, że sołectw jest dokładnie tyle samo,
 * — CZASÓW PRZEJAZDU I NUMERÓW DRÓG. Nie potwierdzone.
 *
 * PUŁAPKI:
 * — NIE PISAĆ, ŻE SUŁKOWICE „SŁYNĄ Z KOWALSTWA" W CZASIE TERAŹNIEJSZYM.
 *   Gmina sama tego nie robi,
 * — KRZYWACZKA to wieś w gminie Sułkowice, nie w gminie Skawina,
 * — SUŁKOWICE W POWIECIE MYŚLENICKIM ≠ SUŁKOWICE pod Warszawą
 *   ani inne miejscowości o tej nazwie,
 * — MIASTO OD 1969 R. — nie pisać o „wielowiekowym mieście",
 * — „KŁAMRA" to nazwa biuletynu i narzędzie kowalskie, nie błąd
 *   ortograficzny („klamra").
 */

export const SULKOWICE: CityContent = {
  slug: "sulkowice",
  h1: "Thermomix Sułkowice – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Sułkowice — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Sułkowice: bezpłatna prezentacja TM7 u Ciebie w kuchni — Sułkowice, Krzywaczka, Harbutowice, Biertowice, Rudnik. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Sułkowice — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Sułkowice. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do gminy Sułkowice przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Dojeżdżam do Sułkowic i do wszystkich czterech wsi, bez dopłaty za odległość.",

  highlights: highlightyStandardowe("miasto i wszystkie 4 wsie, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w gminie Sułkowice – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w Sułkowicach, jak w Krzywaczce, Harbutowicach, Biertowicach i Rudniku.",
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
      heading: "Miasto, które nazwało swoją gazetę narzędziem kowalskim",
      paragraphs: [
        "Gminny biuletyn w Sułkowicach nazywa się „Kłamra”. Kłamra to narzędzie kowalskie — i nie, to nie jest literówka w słowie „klamra”. Rynek nazywa się „Zielona Podkowa”, a tutejsza spółdzielnia socjalna — „Podkówka”. Trzy nazwy z jednego rzemiosła, w jednym miejscu.",
        "Tradycja kowalska sięga tu co najmniej siedemnastego wieku. Napiszę jednak dokładnie to, co pisze sama gmina, i ani słowa więcej: mówi ona o Sułkowicach jako o mieście „słynącym w minionym stuleciu” z kowalstwa. W czasie przeszłym. Nie będę więc opowiadać, że po Sułkowicach dzwonią dziś młoty, bo nie sprawdziłam, ile kuźni tu jeszcze pracuje.",
        "To, co zostało na pewno, to nazwy i tożsamość. A tożsamość, która trwa w nazwie rynku i w nazwie gazety, jest mocniejsza niż niejedna czynna gałąź gospodarki.",
        "Druga rzecz, która mnie tu zaskoczyła: Sułkowice to najmłodsze miasto w okolicy. Prawa miejskie dostały dopiero w tysiąc dziewięćset sześćdziesiątym dziewiątym roku. Kiedy Kraków obchodził siedemsetlecie lokacji, Sułkowice były jeszcze wsią.",
        "Trzecia to demografia, i tu liczba jest naprawdę dobra. Urodzeń jest tu dziesięć i dziewięć dziesiątych na tysiąc mieszkańców, przy sześciu i siedmiu dziesiątych dla całej Polski. Na piętnaście tysięcy dwieście trzydzieści dwie osoby to jest gmina wyraźnie młodsza od średniej.",
        "I czwarta, mniej wesoła: bilans dojazdów do pracy wynosi minus dziewięćset trzydzieści pięć. Tylu więcej ludzi stąd wyjeżdża, niż tu przyjeżdża. Dużo młodych rodzin plus codzienne dojazdy — to jest dokładnie ten dom, o którym piszę niżej.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Sułkowice?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj miejscowość: Sułkowice, Krzywaczka, Harbutowice, Biertowice albo Rudnik. Dopłaty za odległość nie ma w żadnej z nich, także w tych położonych wyżej.",
        "Umawiam się wieczorami i w soboty, bo z tej gminy dojeżdża do pracy o dziewięćset trzydzieści pięć osób więcej, niż do niej przyjeżdża. Mam też terminy w dni robocze przed południem, jeśli ktoś pracuje na zmiany albo jest w domu z dzieckiem.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Sułkowice"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Dużo dzieci i dużo dojeżdżania — obie te rzeczy naraz",
      paragraphs: [
        "Dziesięć i dziewięć dziesiątych urodzeń na tysiąc mieszkańców przy sześciu i siedmiu dziesiątych w skali kraju znaczy, że w tej gminie jest wyraźnie więcej małych dzieci niż przeciętnie. A saldo dojazdów minus dziewięćset trzydzieści pięć znaczy, że rodzice tych dzieci w większości pracują gdzie indziej.",
        "To jest połączenie, które najbardziej obciąża kuchnię. Powrót po siedemnastej, głodne dziecko, i decyzja podejmowana w kurtce. W takim domu urządzenie gotujące bez obecności nie jest udogodnieniem — jest sposobem na to, żeby obiad w ogóle był.",
        "Praktycznie wygląda to tak: zupa albo danie jednogarnkowe wstawione rano gotuje się samo, wyłącza i czeka. Wracacie o dowolnej porze i jest ciepłe. Nie trzeba nikogo prosić, żeby „zajrzał do garnka”.",
        "Druga rzecz przy małym dziecku to kaszki i przeciery. Warzywa gotują się na parze i miksują w tym samym naczyniu, bez przelewania gorących rzeczy między garnkiem a blenderem. To brzmi drobno, dopóki nie robi się tego codziennie przez dwa lata.",
        "Trzecia to gotowanie na zapas w weekend. Trzy zupy i dwa dania robi się seryjnie, jedno po drugim, bez pilnowania, a potem wystarczy odgrzać. W domu, z którego oboje dorosłych wyjeżdża, weekend jest jedynym momentem, kiedy to jest realne.",
        "I uczciwie, żeby nie było niespodzianek: nie usmaży kotletów, nie upiecze blachy ciasta i nie zastąpi piekarnika przy niedzielnej pieczeni. Zabierze mieszanie, pilnowanie temperatury, siekanie i wyrabianie — czyli tę część roboty, którą wykonuje się na stojąco.",
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
    heading: "Sułkowice i gotowanie — kuchnia miasteczka, które było wsią",
    paragraphs: [
      "Sułkowice dostały prawa miejskie w tysiąc dziewięćset sześćdziesiątym dziewiątym roku i to widać w kuchni bardziej niż gdziekolwiek indziej. To nie jest kuchnia mieszczańska ani restauracyjna — to jest kuchnia wiejska, gotowana w domu, tylko przeniesiona do miasta pięćdziesiąt kilka lat temu.",
      "Beskid Makowski daje jej podstawę: ziemniaki, kapusta, mąka, mleko, zupy w dużym garnku, ciasta drożdżowe na odpust. Do tego rzemieślnicza przeszłość, która oznaczała męską pracę fizyczną, a męska praca fizyczna oznaczała jedzenie sycące i porcje duże.",
      "Powiem uczciwie, czego nie sprawdziłam. Nie udało mi się zweryfikować, czy z tej gminy pochodzi wpis na ministerialnej Liście Produktów Tradycyjnych — baza była dla mnie niedostępna. Nie wymyślę więc żadnej „potrawy sułkowickiej”, żeby strona brzmiała bogaciej.",
      "Nie napiszę też o muzeum kowalstwa, o którym wspominają niektóre strony w internecie. Nie potwierdziłam, że istnieje, a wysłanie kogoś do nieistniejącego muzeum to najgorsza rzecz, jaką strona lokalna może zrobić.",
      "To, co potwierdzone, jest lepsze niż zmyślone: rynek nazywa się „Zielona Podkowa”, spółdzielnia socjalna „Podkówka”, a gminny biuletyn „Kłamra” — od narzędzia kowalskiego. Miasto trzyma tożsamość w nazwach, nie w folderze.",
      "Dla urządzenia największą robotą jest tu ciasto i mielenie. Ciasto drożdżowe, kruszonka, mak, farsze, pasty — wyrabianie i mielenie to dwie rzeczy, które w domowej kuchni bolą najbardziej. Czego nie zrobi: nie upiecze i nie usmaży, więc blacha i patelnia zostają.",
    ],
  },

  districtsHeading: "Gdzie w gminie Sułkowice dojeżdżam?",
  districtsParagraphs: [
    "Do miasta Sułkowice i do wszystkich czterech wsi: Krzywaczki, Harbutowic, Biertowic i Rudnika. Dopłaty za odległość nie ma nigdzie.",
    "Gmina liczy piętnaście tysięcy dwieście trzydzieści dwie osoby i leży w Beskidzie Makowskim: na północ Kraków, na wschód Myślenice, na zachód Kalwaria Zebrzydowska i Lanckorona. Ja przyjeżdżam samochodem i dojazd nic nie kosztuje.",
    "Sułkowice są najmłodszym miastem w tej okolicy — prawa miejskie mają od tysiąc dziewięćset sześćdziesiątego dziewiątego roku. Praktycznie znaczy to, że układ zabudowy jest wiejski, a adresy bywają rozciągnięte wzdłuż drogi. Jeśli trafienie pod Wasz dom bywa trudne, napiszcie mi punkt orientacyjny.",
    "Terminy wieczorne i sobotnie mam tu w pierwszej kolejności, bo saldo dojazdów do pracy wynosi minus dziewięćset trzydzieści pięć osób. To gmina, z której się wyjeżdża rano.",
    "Jedno rozstrzygnięcie na wszelki wypadek: Krzywaczka należy do gminy Sułkowice, a nie do Skawiny. Do obu dojeżdżam, ale przy umawianiu wolę wiedzieć, o którą stronę chodzi.",
  ],
  districts: [
    "Sułkowice",
    "Krzywaczka",
    "Harbutowice",
    "Biertowice",
    "Rudnik",
  ],

  nearbyHeading: "Myślenice, Kalwaria Zebrzydowska, Lanckorona i Kraków też są na mojej trasie",
  nearbyParagraphs: [
    "Na wschód od gminy leżą Myślenice, na zachód Kalwaria Zebrzydowska i Lanckorona, na północ Kraków i Skawina. Do żadnej z tych stron nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na granicy gminy i nie masz pewności, czy to jeszcze Sułkowice, czy już Lanckorona albo Myślenice — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Myślenice",
    "Kalwaria Zebrzydowska",
    "Lanckorona",
    "Skawina",
    "Pcim",
    "Kraków",
    "Wadowice",
  ],

  about: blokOMnie("do gminy Sułkowice", "w powiecie myślenickim"),

  faq: [
    {
      question: "Mamy małe dzieci. Czy to naprawdę coś zmienia?",
      answer:
        "W tej gminie to pytanie pada często, bo urodzeń jest tu dziesięć i dziewięć dziesiątych na tysiąc mieszkańców, przy sześciu i siedmiu dziesiątych w skali kraju. Zmienia dwie rzeczy: warzywa gotują się na parze i miksują w tym samym naczyniu, bez przelewania gorących rzeczy, a obiad da się wstawić rano i odebrać po powrocie. Nie zrobi za to prania ani nie uśpi dziecka — reszty nie obiecuję.",
    },
    ...faqWspolne("w gminie Sułkowice"),
    {
      question: "Dojeżdżasz do Krzywaczki i Harbutowic tak samo jak do Sułkowic?",
      answer:
        "Tak samo i bez dopłat. Obsługuję miasto i wszystkie cztery wsie gminy: Krzywaczkę, Harbutowice, Biertowice i Rudnik. Warto tylko doprecyzować, że Krzywaczka to gmina Sułkowice, a nie Skawina — do obu dojeżdżam, ale trasę układam inaczej.",
    },
    {
      question: "Kiedy najlepiej się umówić, jeśli oboje dojeżdżamy do pracy?",
      answer:
        "Wieczorem albo w sobotę — i tak wygląda tu większość moich prezentacji. Z gminy Sułkowice wyjeżdża do pracy o dziewięćset trzydzieści pięć osób więcej, niż przyjeżdża, więc terminy popołudniowe traktuję jako podstawowe, a nie jako wyjątek. Mam też godziny przedpołudniowe w dni robocze, jeśli ktoś pracuje na zmiany.",
    },
  ],

  geo: { lat: 49.8388, lng: 19.7996 },
};
