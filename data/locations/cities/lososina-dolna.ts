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
 * ŁOSOSINA DOLNA — GMINA WIEJSKA w powiecie nowosądeckim.
 * 11 211 mieszkańców (31.12.2024), 84,8 km², 18 SOŁECTW.
 *
 * OŚ STRONY: GMINA, KTÓRĄ OGLĄDA SIĘ Z POWIETRZA. Lotnisko Aeroklubu
 * Podhalańskiego i Święto Kwitnących Sadów, które jest jednocześnie
 * inauguracją sezonu lotniczego.
 * ⚠️ ŚWIADOMY WYBÓR: sadownictwo jest tu realne, ale OŚ SADOWNICZA
 * NALEŻY DO ŁĄCKA (`lacko.ts` — ks. Piaskowy, sad jako pokuta,
 * jabłka łąckie z ChOG). Tutaj sady wchodzą JAKO KRAJOBRAZ OGLĄDANY
 * Z GÓRY W MAJU, a nie jako produkcja i alkohol.
 * Rozłączne frazy: tam „jabłka i śliwowica”, tu „loty widokowe
 * i kwitnące sady z lotu ptaka”.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — AEROKLUB PODHALAŃSKI IM. LEOPOLDA KWIATKOWSKIEGO — powstał
 *   1956 r., siedziba w Łososinie Dolnej. Wcześniej klub latał
 *   z szybowiska w Tęgoborzu,
 * — 1960 — Społeczny Komitet Budowy Lotniska; 17 WRZEŚNIA 1960 R.
 *   wojska inżynieryjne budują lotnisko, PIERWSZY LĄDUJE MiG-15;
 *   18 WRZEŚNIA gen. JAN FREY-BIELECKI przekazuje lotnisko
 *   aeroklubowi. Rozbudowa wstrzymana z powodu planów podniesienia
 *   poziomu Jeziora Rożnowskiego, wznowiona po 1963. 1965 — hangar
 *   przeniesiony z Jodłowca; 1966 — budynek klubowy,
 * — PAS TRAWIASTY 800 × 150 M, kierunek 043°/223°, tylko VFR,
 * — FLOTA (stan 2013): 14 SZYBOWCÓW (Bocian, Puchacz, Pirat, Junior,
 *   Cobra, Jantar, Krokus) plus 6 statków silnikowych, w tym
 *   AN-2 „ANTEK”. Sekcje: szybowcowa, samolotowa, mikrolotowa;
 *   loty widokowe nad Jeziorem Rożnowskim,
 * — REPLIKA RWD-5 — samolotu, którym w MAJU 1933 R. płk STANISŁAW
 *   SKARŻYŃSKI przeleciał Atlantyk,
 * — ŚWIĘTO KWITNĄCYCH SADÓW — XXX EDYCJA 2 MAJA 2026 R., na lotnisku
 *   Aeroklubu Podhalańskiego; organizatorzy: gmina i aeroklub.
 *   TO ZARAZEM INAUGURACJA SEZONU LOTNICZEGO; pokazy lotnicze.
 *   W 2026 wystąpił m.in. Zespół Regionalny „Jakubkowianie”
 *   (30-lecie),
 * — ŁOSOSIŃSKIE ŚWIĘTO PLONÓW — dożynki, początek września;
 *   korowód, wieńce z sołectw,
 * — SADOWNICZA SPÓŁDZIELNIA HANDLOWA „ŁOSOSINA” — założona 1995 r.,
 *   25 SADOWNIKÓW z gminy, 190 HA SADÓW JABŁONIOWYCH, ponad
 *   2 200 T JABŁEK DESEROWYCH ROCZNIE; Integrowana Produkcja Owoców;
 *   Łososina 340. Także śliwki, gruszki, porzeczki, agrest,
 *   truskawki, maliny; chłodnie, sortowanie, pakowanie,
 * — TĘGOBORZE: pierwsza wzmianka 1325; nazwa od „tęgich borów”.
 *   GÓRA JUST — pustelnia św. Justa (mnich IX–X w.); 1605 właściciel
 *   Cyryl Chrząstowski niszczy kościół św. Justa i klasztor.
 *   DREWNIANA KAPLICA Z XVII W. NA JUŚCIE z obrazem Matki Bożej
 *   Justiańskiej. Klęski: cholera 1845 i 1855; powodzie 1845, 1872
 *   i 1934 (ta ostatnia doprowadziła do budowy zapory w Rożnowie),
 * — PAŁAC W TĘGOBORZY — klasycystyczny, ok. początku XIX w.,
 *   Stadniccy; zniszczony w rabacji 1846; potem Dunikowscy,
 *   Głęboccy, wreszcie Wielogłowscy; kolumny jońskie, owalny salon,
 *   park 3 ha ze stawem. 1958 sprzedany na ośrodek wczasowy;
 *   ⚠️ OD LAT PUSTOSTAN, NISZCZEJE — nie pisać jak o atrakcji,
 * — 18 SOŁECTW: Białawoda, Bilsko, Łęki, Łososina Dolna, Łyczanka,
 *   Michalczowa, Rąbkowa, Skrzętla-Rojówka, Stańkowa, Świdnik,
 *   Tabaszowa, Tęgoborze, Witowice Dolne, Witowice Górne,
 *   Wronowice, Zawadka, Znamirowice, Żbikowice,
 * — REGON: 1 057 podmiotów (31.12.2024),
 * — ZNAMIROWICE — sporty wodne nad Jeziorem Rożnowskim; ⚠️ pełnych
 *   nazw i aktualności ośrodków NIE POTWIERDZONO,
 * — DK75 (Kraków–Brzesko–Nowy Sącz) przez Tęgoborze i Łososinę Dolną.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ⚠️⚠️ „PRZEPOWIEDNI Z TĘGOBORZY”. To LEGENDA / postdykcja,
 *   nie dokument historyczny: rzekomy seans z 1893 r., publikacja
 *   dopiero w 1939 r., rękopis zaginiony. ŚWIADOMIE POMINIĘTA
 *   W CAŁOŚCI. NIE DODAWAĆ, nawet jako ciekawostki,
 * — ⚠️ ZAPORY. ZAPORA ROŻNOWSKA LEŻY W GMINIE GRÓDEK NAD DUNAJCEM.
 *   Łososina ma zachodni brzeg jeziora, ale NIE MA ZAPORY,
 * — DANYCH „129 GOSPODARSTW, 538 HA”. NIE POTWIERDZONE żadnym
 *   źródłem. NIE UŻYWAĆ,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — JABŁEK ŁĄCKICH. GMINA JEST POZA OBSZAREM ChOG (obszar: Łącko,
 *   Podegrodzie, Stary Sącz, Łukowica). NIE UŻYWAĆ TEJ NAZWY.
 *
 * PUŁAPKI:
 * — ⚠️ ŁOSOSINA GÓRNA TO DZIELNICA LIMANOWEJ w powiecie limanowskim,
 *   ze stacją na linii 104. NIE MYLIĆ Z TĄ GMINĄ. W gminie Łososina
 *   Dolna KOLEI NIE MA,
 * — ZNAMIROWICE TO TA GMINA, nie Gródek nad Dunajcem.
 */

export const LOSOSINA_DOLNA: CityContent = {
  slug: "lososina-dolna",
  h1: "Thermomix Łososina Dolna – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Łososina Dolna — cena i prezentacja",
  seoDescription:
    "Thermomix w gminie Łososina Dolna: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Łososina Dolna — zobacz TM7 u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Łososina Dolna. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Łososiny Dolnej, Tęgoborza, Znamirowic i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("wszystkie osiemnaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Łososinie Dolnej – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju.",
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
      heading: "Gmina, którą najlepiej widać z góry",
      paragraphs: [
        "Siedemnastego września tysiąc dziewięćset sześćdziesiątego roku na łąkę w Łososinie Dolnej wjechały wojska inżynieryjne, żeby zbudować lotnisko. Pierwszym samolotem, który tu wylądował, był MiG-piętnaście. Dzień później generał Jan Frey-Bielecki przekazał gotowe lotnisko Aeroklubowi Podhalańskiemu.",
        "Sam aeroklub powstał cztery lata wcześniej i początkowo latał z szybowiska w Tęgoborzu, a potem z terenu zalewanego przez Jezioro Rożnowskie. Rozbudowa lotniska stanęła zresztą na kilka lat właśnie przez plany podniesienia poziomu wody; wznowiono ją po tysiąc dziewięćset sześćdziesiątym trzecim.",
        "Dziś jest to trawiasty pas o wymiarach osiemset na sto pięćdziesiąt metrów. Stacjonuje tu kilkanaście szybowców — Bociany, Puchacze, Piraty, Jantary — oraz kilka samolotów silnikowych, w tym An-dwa nazywany „Antkiem”. Działają sekcje szybowcowa, samolotowa i mikrolotowa, a latem organizuje się loty widokowe nad Jeziorem Rożnowskim.",
        "Stoi tu również replika RWD-pięć — samolotu, którym w maju tysiąc dziewięćset trzydziestego trzeciego roku pułkownik Stanisław Skarżyński przeleciał Atlantyk. Na tak małej maszynie, że to do dziś brzmi nieprawdopodobnie.",
        "I tu jest rzecz, która spina całą tę gminę w jedno. Drugiego maja odbywa się Święto Kwitnących Sadów — w dwa tysiące dwudziestym szóstym roku w trzydziestej edycji — i odbywa się właśnie na lotnisku. Jest to jednocześnie inauguracja sezonu lotniczego, z pokazami w powietrzu.",
        "Sens tego połączenia widać dopiero z góry. Gmina jest sadownicza: sama spółdzielnia sadownicza założona tu w tysiąc dziewięćset dziewięćdziesiątym piątym roku skupia dwudziestu pięciu gospodarzy i sto dziewięćdziesiąt hektarów sadów jabłoniowych, z których zbiera się ponad dwa tysiące dwieście ton jabłek rocznie. Na początku maja te sady kwitną — i wtedy z pokładu szybowca widać całe zbocza na biało.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Łososina Dolna?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Gmina ma ich osiemnaście, rozłożonych między drogą krajową, jeziorem i Beskidem Wyspowym — jazda do Znamirowic to co innego niż do Bilska. Na cenę to nie wpływa.",
        "Jeśli masz sad, powiedz to od razu. W szczycie zbiorów nie ma sensu umawiać się na dwie godziny w kuchni; zima i przedwiośnie są u Was zwykle znacznie spokojniejsze.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Łososina Dolna"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Osiemnaście wsi między drogą, jeziorem i sadami",
      paragraphs: [
        "Gmina liczy ponad jedenaście tysięcy mieszkańców i ma ponad tysiąc zarejestrowanych podmiotów gospodarczych — jest pod tym względem najludniejsza i najbardziej przedsiębiorcza w swojej okolicy. Rozkłada się na osiemnastu wsiach, wzdłuż drogi krajowej i wzdłuż zachodniego brzegu Jeziora Rożnowskiego.",
        "Praca jest tu bardzo różna w zależności od tego, po której stronie się mieszka. Jedni mają sady i pracują sezonowo od kwitnienia do zbiorów, drudzy żyją z ruchu nad wodą, a jeszcze inni dojeżdżają do Nowego Sącza albo Limanowej drogą krajową.",
        "Wspólne jest jedno: dzień rzadko ma stałe godziny. W sezonie — czy to sadowniczym, czy turystycznym — nikt nie wie, o której siądzie do obiadu, a poza sezonem czasu jest nagle dużo.",
        "Najbardziej praktyczna rzecz jest przy takim rytmie prosta. Danie jednogarnkowe wstawia się rano i wychodzi z domu. Gotuje się bez pilnowania, samo się wyłącza i czeka na tego, kto wróci pierwszy. Nie przypala się i nikt nie musi wracać, żeby zamieszać.",
        "Druga to gotowanie z zapasem i do zamrażarki, w gminie sezonowej wręcz konieczne. Zupy, sosy, pasty, ciasto na pierogi — robione seriami zimą, w jednym naczyniu, a odbierane latem, kiedy nie ma czasu na nic.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Łososina Dolna i gotowanie — dwa tysiące ton jabłek rocznie",
    paragraphs: [
      "Zacznę uczciwie: nie znalazłam wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazwy działającego koła gospodyń. Nie będę też przypisywać jej jabłek łąckich — unijne oznaczenie obejmuje cztery inne gminy i Łososina do nich nie należy.",
      "Za to sady są tu jak najbardziej prawdziwe i mam na to konkretną liczbę. Miejscowa spółdzielnia sadownicza, założona w tysiąc dziewięćset dziewięćdziesiątym piątym roku, skupia dwudziestu pięciu gospodarzy i sto dziewięćdziesiąt hektarów sadów jabłoniowych, z których zbiera się ponad dwa tysiące dwieście ton jabłek deserowych rocznie. Rosną tu również śliwki, gruszki, porzeczki, agrest, truskawki i maliny.",
      "W praktyce znaczy to, że jesienią w wielu domach jest owoc, którego trzeba coś zrobić — bo drugiej klasy nikt nie sprzeda, a wyrzucić szkoda. Powidła, mus, sok, przecier, szarlotka, kompot. To są czynności długie, powtarzalne i oparte na rozdrabnianiu oraz mieszaniu w cieple.",
      "Akurat tę część urządzenie zdejmuje w całości. Smażenie powideł potrafi trwać godzinami i wymaga stania przy garnku, żeby nic nie przywarło; tutaj prowadzi się to bez człowieka, w stałej temperaturze, i samo się wyłącza. Przy dwustu hektarach sadów w gminie nie jest to drobiazg.",
      "Poza owocami kuchnia jest tu sądecka i domowa: ziemniaki, kapusta, fasola, zupy na kościach, ciasto drożdżowe. Czego urządzenie nie zrobi, powiem wprost: nie zerwie owocu, nie oceni, czy jest dojrzały, i nie zastąpi wprawy. Zabiera tylko czas.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Łososina Dolna dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich osiemnastu, bez żadnej dopłaty za odległość. Gmina liczy ponad jedenaście tysięcy mieszkańców na osiemdziesięciu pięciu kilometrach kwadratowych.",
    "Sołectwa to: Białawoda, Bilsko, Łęki, Łososina Dolna, Łyczanka, Michalczowa, Rąbkowa, Skrzętla-Rojówka, Stańkowa, Świdnik, Tabaszowa, Tęgoborze, Witowice Dolne, Witowice Górne, Wronowice, Zawadka, Znamirowice i Żbikowice.",
    "Trzy miejsca warto znać. W samej Łososinie działa lotnisko Aeroklubu Podhalańskiego z trawiastym pasem osiemset na sto pięćdziesiąt metrów. W Tęgoborzu, wzmiankowanym już w tysiąc trzysta dwudziestym piątym roku, stoi na Górze Just siedemnastowieczna drewniana kaplica, a niżej klasycystyczny pałac — który jednak od lat stoi pusty i niszczeje, więc nie polecam go jako celu wycieczki. Znamirowice leżą nad Jeziorem Rożnowskim i to tam skupiają się sporty wodne.",
    "Dojazd: przez gminę biegnie droga krajowa z Brzeska do Nowego Sącza, przez Tęgoborze i Łososinę Dolną. Kolei w gminie nie ma — i tu ważna uwaga, bo bywa mylące: stacja Łososina Górna leży w Limanowej, w innym powiecie, i nie ma z tą gminą nic wspólnego.",
  ],
  districts: [
    "Łososina Dolna",
    "Tęgoborze",
    "Znamirowice",
    "Michalczowa",
    "Bilsko i Łęki",
    "Witowice Dolne i Górne",
    "Tabaszowa i Świdnik",
    "Stańkowa, Zawadka, Żbikowice",
  ],

  nearbyHeading: "Gródek nad Dunajcem, Chełmiec i Limanowa też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Gródkiem nad Dunajcem, Chełmcem, Laskową i Limanową. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu.",
    "Dwa rozróżnienia, bo bywają mylone. Zapora rożnowska leży w gminie Gródek nad Dunajcem — Łososina ma zachodni brzeg jeziora, ale nie zaporę. A Łososina Górna to dzielnica Limanowej, w zupełnie innym powiecie.",
  ],
  nearbyTowns: [
    "Gródek nad Dunajcem",
    "Chełmiec",
    "Laskowa",
    "Limanowa",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do gminy Łososina Dolna", "w powiecie nowosądeckim"),

  faq: [
    {
      question: "To Łososina Dolna czy Górna?",
      answer:
        "Ta strona dotyczy gminy Łososina Dolna w powiecie nowosądeckim — tej z lotniskiem, sadami i brzegiem Jeziora Rożnowskiego. Łososina Górna to dzielnica Limanowej, w powiecie limanowskim, i ma tam stację kolejową. To dwa różne miejsca, choć nazwa myli.",
    },
    ...faqWspolne("w gminie Łososina Dolna"),
    {
      question: "Mamy sad. Co ten sprzęt zrobi z jabłkami?",
      answer:
        "Najwięcej pomaga przy tym, co robi się z owocem drugiej klasy — a więc przy powidłach, musach, sokach i przecierach. To są rzeczy długie, wymagające stałego mieszania, żeby nie przywarły; urządzenie prowadzi je bez człowieka, w stałej temperaturze, i samo się wyłącza. Owocu nie zerwie i nie oceni, czy dojrzał, ale całą kuchenną część roboty bierze na siebie. Na prezentacji chętnie zrobię coś z Waszych jabłek zamiast z przepisu w folderze.",
    },
  ],

  geo: { lat: 49.7417, lng: 20.6248 },
};
