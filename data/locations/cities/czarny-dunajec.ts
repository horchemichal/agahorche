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
 * CZARNY DUNAJEC — GMINA MIEJSKO-WIEJSKA w powiecie nowotarskim.
 * ⚠️ NIE WIEJSKA. Od 1 stycznia 2023 r. Czarny Dunajec ODZYSKAŁ
 * PRAWA MIEJSKIE (miał je 1925–1933). Oficjalna nazwa: Miasto i Gmina
 * Czarny Dunajec. Na czele burmistrz, nie wójt.
 * Ok. 22 tys. mieszkańców, 217,4 km² — jedna z największych
 * powierzchniowo gmin powiatu.
 *
 * OŚ STRONY: MIASTO, KTÓRE WRÓCIŁO PO DZIEWIĘĆDZIESIĘCIU LATACH.
 * Rozłączna z każdą inną stroną: Krościenko ma historię odwrotną
 * (miasto zdegradowane w 1932 i już nieprzywrócone), Nowy Targ ma
 * ciągłość od 1346 r.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — PRAWA MIEJSKIE: nadane 1925, odebrane w reformie 1933,
 *   PRZYWRÓCONE 1 STYCZNIA 2023 R. Czwarte miasto powiatu
 *   po Nowym Targu, Szczawnicy i Rabce-Zdroju. Burmistrz
 *   Marcin Ratułowski,
 * — LOKACJA ok. 1552 r., dokument lokacyjny zaginął; lustracja
 *   królewska 1564 opisuje wieś jako nowo osadzoną, z 15 kmieciami.
 *   Zasadźca i pierwszy sołtys: TOMASZ MIĘTUS; on i syn Jan wystawili
 *   własnym sumptem pierwszy kościół; linia sołtysów wygasła
 *   na Klemensie Miętusie.
 *   ⚠️ ANGIELSKA WIKIPEDIA PODAJE „founded around 1234” — ODRZUCONE
 *   jako sprzeczne z lepiej udokumentowanym 1552/1564,
 * — ZACHOWANY PROSTOKĄTNY RYNEK z bocznymi uliczkami i parterowe
 *   kamienne domy z podcieniami na kolumienkach,
 * — 15 MIEJSCOWOŚCI: Chochołów, Ciche, Czarny Dunajec, Czerwienne,
 *   Dział, Koniówka, Odrowąż, Piekielnik, Pieniążkowice, Podczerwone,
 *   Podszkle, Ratułów, Stare Bystre, Wróblówka, Załuczne,
 * — CHOCHOŁÓW NALEŻY DO TEJ GMINY (nie do Kościeliska) — potwierdzone
 *   wielokrotnie. Ok. 1300 mieszkańców, 12,8 km², 103 OBIEKTY WPISANE
 *   DO REJESTRU ZABYTKÓW. Chałupa Bafiów z 1798 r. — oddział Muzeum
 *   Tatrzańskiego. Kościół św. Jacka, neogotyk, proj. Feliks Księżarski,
 *   polichromia Walerego Eljasza. Tradycja szorowania drewnianych
 *   ścian przed Wielkanocą,
 * — POWSTANIE CHOCHOŁOWSKIE: 21 LUTEGO 1846 R., atak na magazyn straży
 *   skarbowej; zdobyto broń i 600 guldenów. Przywódcy: Jan Kanty
 *   Andrusikiewicz, ks. Józef Kmietowicz, ks. Michał Głowacki,
 *   ks. Michał Janiczak, Julian Goslar; dowódca wojskowy Wojciech
 *   Lebiocki. Ok. 500 chłopów; stłumione 22–23 lutego; ok. 150
 *   aresztowanych, zwolnieni w 1848 r.
 *   ⚠️ TO 1846, NIE 1848. Strona PTTK podaje błędnie,
 * — ⚠️ AUSTRIACY FORTELEM NAKŁONILI MIESZKAŃCÓW CZARNEGO DUNAJCA
 *   DO WYSTĄPIENIA PRZECIW POWSTAŃCOM Z CHOCHOŁOWA. Dziś obie
 *   miejscowości są w jednej gminie — WĄTEK OPISANY OSTROŻNIE,
 *   BEZ PRZYPISYWANIA WINY KOMUKOLWIEK DZISIAJ,
 * — TORFOWISKA ORAWSKO-NOWOTARSKIE, Natura 2000; BALIGÓWKA między
 *   Czarnym Dunajcem a Piekielnikiem — ok. 11 tys. lat, eksploatacja
 *   torfu do lat 50. XX w., ścieżka edukacyjna 3 km,
 * — DAWNA LINIA KOLEJOWA Nowy Targ – Sucha Góra: otwarta 1904,
 *   przeznaczona do rozbiórki decyzją z 16.08.1991, demontaż
 *   od grudnia 1991. NA NASYPIE BIEGNIE DZIŚ ASFALTOWA TRASA
 *   ROWEROWA — 21 km po stronie polskiej, główna trasa Szlaku
 *   wokół Tatr,
 * — PRZEJŚCIE GRANICZNE Chochołów – Suchá Hora,
 * — REGON: 1 848 podmiotów (2024), w tym 1 570 osób fizycznych;
 *   budownictwo 30,8%, handel 19,4%,
 * — CHOCHOŁOWSKIE TERMY w Chochołowie — ponad 3300 m² lustra wody,
 *   46 niecek. Jedyny potwierdzony duży obiekt w gminie,
 * — HOŁDYMAS — GMINNE DOŻYNKI, XXXVI edycja 23 sierpnia 2026 r.:
 *   msza w Podczerwonem, główna część na Placu na Kamieńcu
 *   w Chochołowie; konkurs „Najsilniejszy Harnaśek”, parada bryczek,
 * — KONKURS NA NAJLEPSZĄ POTRAWĘ REGIONALNĄ „Biały ser – wiele smaków,
 *   jedna tradycja”, organizator CKiP Czarny Dunajec, wyłącznie dla
 *   mieszkańców miasta i gminy.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — TWIERDZENIA, ŻE CHOCHOŁÓW JEST NA LIŚCIE UNESCO. NIE JEST.
 *   Fraza krąży po sieci i trafiła nawet do archiwalnego serwisu
 *   gminy. KATEGORYCZNIE NIE UŻYWAĆ,
 * — FRAZY „NAJWIĘKSZE TERMY W POLSCE”. Marketing, nie fakt,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE, nie gminne,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie znaleziono.
 *   Oscypek i bryndza są przypisane REGIONOWI, nie tej gminie,
 * — NAZW KGW. Żadnej nie potwierdzono,
 * — DOKŁADNEJ DATY KONKURSU NA BIAŁY SER. Źródła podają 29.07.2026
 *   i 23.08.2026 — prawdopodobnie zgłoszenia i finał, ale niepewne.
 *
 * PUŁAPKI:
 * — DOLINA CHOCHOŁOWSKA NIE LEŻY W CHOCHOŁOWIE ani w tej gminie —
 *   jej wylot jest w Witowie, gmina Kościelisko. To dwa różne miejsca
 *   ok. 10 km od siebie,
 * — OŚ ORAWSKA JEST ZAJĘTA PRZEZ JABŁONKĘ, mimo że część wsi tej
 *   gminy (Podszkle, Piekielnik) leży w Kotlinie Orawsko-Nowotarskiej,
 * — OŚ „DŁUGOŚĆ WSI” JEST ZAJĘTA PRZEZ OCHOTNICĘ — nie budować
 *   na Cichem (ponad 14 km),
 * — OŚ TERMALNA JEST ZAJĘTA PRZEZ SZAFLARY I BUKOWINĘ.
 */

export const CZARNY_DUNAJEC: CityContent = {
  slug: "czarny-dunajec",
  h1: "Thermomix Czarny Dunajec – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Czarny Dunajec — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Czarny Dunajec: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do wszystkich wsi bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Czarny Dunajec — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Czarny Dunajec. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Czarnego Dunajca, Chochołowa i wszystkich pozostałych miejscowości gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("cała gmina, wszystkie wsie, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Czarnym Dunajcu – jak wygląda prezentacja?",
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
      heading: "Miasto, które wróciło po dziewięćdziesięciu latach",
      paragraphs: [
        "Pierwszego stycznia dwa tysiące dwudziestego trzeciego roku Czarny Dunajec znów stał się miastem. Nie po raz pierwszy — prawa miejskie miał już w latach dwudziestych i trzydziestych dwudziestego wieku, a stracił je w reformie administracyjnej w tysiąc dziewięćset trzydziestym trzecim. Przerwa trwała dziewięćdziesiąt lat.",
        "To dzisiaj czwarte miasto powiatu nowotarskiego, po Nowym Targu, Szczawnicy i Rabce-Zdroju. Formalna nazwa jednostki brzmi Miasto i Gmina Czarny Dunajec, a na jej czele stoi burmistrz. Warto o tym wiedzieć, bo starsze teksty i część serwisów wciąż piszą o wójcie i o gminie wiejskiej.",
        "Ciekawe jest to, że rynek był tu cały czas. Zachował się prostokątny plac z bocznymi uliczkami i parterowymi kamiennymi domami z podcieniami na kolumienkach — układ typowo miejski, który przetrwał te dziewięćdziesiąt lat bycia wsią.",
        "Sama osada jest młodsza, niż się często pisze. Wieś lokowano około tysiąc pięćset pięćdziesiątego drugiego roku; dokument lokacyjny zaginął, ale królewska lustracja z tysiąc pięćset sześćdziesiątego czwartego opisuje ją jako nowo osadzoną, z piętnastoma kmieciami. Zasadźcą i pierwszym sołtysem był Tomasz Miętus, który wraz z synem własnym sumptem wystawił pierwszy kościół. Krążącą po internecie datę tysiąc dwieście trzydziestego czwartego roku pomijam — jest sprzeczna z lustracją.",
        "Gmina jest przy tym ogromna: dwieście siedemnaście kilometrów kwadratowych i piętnaście miejscowości, od Chochołowa po Odrowąż i Podszkle. Mieszka w niej około dwudziestu dwóch tysięcy osób, czyli mniej więcej tyle, ile w niejednym mieście powiatowym.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Czarny Dunajec?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Koniecznie podaj miejscowość. Ta gmina ma dwieście siedemnaście kilometrów kwadratowych i piętnaście wsi — jazda do Chochołowa to co innego niż do Podszkla czy Odrowąża. Na cenę to nie wpływa, ale na planowanie dnia bardzo.",
        "Jeśli pracujesz w budownictwie, wspomnij o tym od razu. To najliczniejsza branża w gminie, a sezon budowlany oznacza wyjazdy o świcie i powroty po zmroku — wtedy najlepiej sprawdzają się weekendy albo późne wieczory.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Czarny Dunajec"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Gmina, w której buduje się najwięcej",
      paragraphs: [
        "W gminie zarejestrowanych jest ponad tysiąc osiemset podmiotów gospodarczych, z czego tysiąc pięćset siedemdziesiąt to działalności osób fizycznych. Wśród nich najliczniejsze jest budownictwo — blisko jedna trzecia wszystkich firm — a zaraz za nim handel.",
        "Budownictwo ma swój rytm i każdy, kto w nim pracuje, zna go na pamięć. Od wiosny do jesieni wyjeżdża się przed szóstą i wraca po zmroku, często z budowy oddalonej o kilkadziesiąt kilometrów. Zimą jest odwrotnie: czasu nagle jest dużo.",
        "Najbardziej praktyczna rzecz jest tu prosta. Danie jednogarnkowe wstawia się rano i wychodzi z domu. Gotuje się bez pilnowania, samo się wyłącza i czeka do wieczora. Nie przypala się i nikt nie musi być w domu, żeby zamieszać.",
        "Druga to gotowanie z zapasem, w tej gminie wręcz naturalne. Podwójna porcja zupy, sos na kilka dni, pasty do kanapek, chleb — robione seriami w niedzielę, w jednym naczyniu. W tygodniu odgrzewa się to, zamiast gotować od zera.",
        "Trzecia dotyczy tego, kto gotuje. Ponieważ przepis prowadzi krok po kroku, obiad może zrobić nastolatek albo ktokolwiek, kto akurat jest w domu. W rodzinie, w której jedno z dorosłych wraca po dwunastu godzinach z budowy, to nie jest ciekawostka, tylko odciążenie.",
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
    heading: "Czarny Dunajec i gotowanie — biały ser, wiele smaków",
    paragraphs: [
      "Ta gmina ma coś, czego nie ma prawie żadna inna, o której pisałam: własny konkurs kulinarny na jeden konkretny produkt. Nazywa się „Biały ser – wiele smaków, jedna tradycja” i organizuje go miejscowe centrum kultury, wyłącznie dla mieszkańców miasta i gminy. Nie dla turystów, nie dla restauracji — dla siebie.",
      "Rozstrzyga się to zwykle w okolicach Hołdymasu, czyli gminnych dożynek, które w dwa tysiące dwudziestym szóstym roku odbędą się dwudziestego trzeciego sierpnia w trzydziestej szóstej edycji: msza w Podczerwonem, główna część na Placu na Kamieńcu w Chochołowie, do tego parada bryczek i konkurs Najsilniejszy Harnaśek.",
      "Powiem uczciwie, czego nie znalazłam. Żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego wprost tej gminie i żadnej nazwy koła gospodyń. Oscypek i bryndza podhalańska mają unijną ochronę nazwy, ale obejmuje ona cały region, a nie tę gminę.",
      "Biały ser to za to temat na wskroś domowy i dobrze pokazuje, co urządzenie robi, a czego nie. Nie zrobi za Ciebie sera — nie zsiądzie mleka, nie odciśnie twarogu i nie zastąpi ręki, która wie, kiedy jest gotowy. Robi natomiast wszystko, co dzieje się z serem potem: pasty, sernikowe masy, nadzienia do pierogów i klusek, kremy.",
      "I to jest chyba najuczciwsze podsumowanie. Ta gmina ma bardzo żywą kuchnię domową — kwaśnicę, ziemniaki, kapustę, sery, ciasto drożdżowe — i urządzenie nie ma tu nic do poprawiania. Zabiera tylko tę część roboty, która jest wyłącznie czasem: rozdrabnianie, wyrabianie, mieszanie i stanie przy garnku.",
    ],
  },

  districtsHeading: "Do których miejscowości gminy Czarny Dunajec dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich piętnastu, bez żadnej dopłaty za odległość. To jedna z największych powierzchniowo gmin powiatu — dwieście siedemnaście kilometrów kwadratowych — więc dojazd naprawdę bywa daleki, ale cena jest wszędzie ta sama.",
    "Osobne miejsce zajmuje tu Chochołów i warto to powiedzieć wprost, bo bywa mylony z inną gminą. Chochołów należy do gminy Czarny Dunajec. Ma około tysiąca trzystu mieszkańców i sto trzy obiekty wpisane do rejestru zabytków — to jedna z najlepiej zachowanych drewnianych wsi w Polsce, z chałupą Bafiów z tysiąc siedemset dziewięćdziesiątego ósmego roku, będącą oddziałem Muzeum Tatrzańskiego, i z tradycją szorowania drewnianych ścian przed Wielkanocą.",
    "To także miejsce powstania chochołowskiego z dwudziestego pierwszego lutego tysiąc osiemset czterdziestego szóstego roku — nie czterdziestego ósmego, jak podają niektóre źródła. Poszło wtedy do walki około pięciuset chłopów pod wodzą nauczyciela Jana Kantego Andrusikiewicza i trzech księży; po dwóch dniach powstanie stłumiono, a stu pięćdziesięciu uczestników aresztowano. Historia ma tu przykry rozdział: Austriacy fortelem nakłonili wtedy mieszkańców Czarnego Dunajca do wystąpienia przeciw sąsiadom. Dziś obie miejscowości są jedną gminą.",
    "Dojazd: kolei w gminie już nie ma. Linia z Nowego Targu do Suchej Góry, otwarta w tysiąc dziewięćset czwartym roku, została rozebrana po decyzji z sierpnia tysiąc dziewięćset dziewięćdziesiątego pierwszego. Na jej nasypie biegnie dziś asfaltowa trasa rowerowa — dwadzieścia jeden kilometrów po polskiej stronie, główny odcinek Szlaku wokół Tatr. W Chochołowie jest przejście graniczne do Suchej Hory.",
  ],
  districts: [
    "Czarny Dunajec",
    "Chochołów",
    "Ciche",
    "Czerwienne",
    "Dział",
    "Koniówka",
    "Odrowąż",
    "Piekielnik",
    "Pieniążkowice",
    "Podczerwone",
    "Podszkle",
    "Ratułów",
    "Stare Bystre",
    "Wróblówka",
    "Załuczne",
  ],

  nearbyHeading: "Nowy Targ, Jabłonka i Szaflary też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z Jabłonką, Rabą Wyżną, gminą wiejską Nowy Targ, Szaflarami, Białym Dunajcem, Poroninem i Kościeliskiem. Dojeżdżam do wszystkich, bez doliczania kosztu dojazdu.",
    "Jedno rozróżnienie, bo bywa mylone: Dolina Chochołowska nie leży w Chochołowie. Jej wylot jest w Witowie, w gminie Kościelisko — to dwa różne miejsca, oddalone o jakieś dziesięć kilometrów.",
  ],
  nearbyTowns: [
    "Nowy Targ",
    "Jabłonka",
    "Szaflary",
    "Kościelisko",
    "Poronin",
    "Kraków",
  ],

  about: blokOMnie("do gminy Czarny Dunajec", "w powiecie nowotarskim"),

  faq: [
    {
      question: "Mieszkam w Chochołowie. To ta gmina?",
      answer:
        "Tak. Chochołów należy do gminy Czarny Dunajec, mimo że bywa przypisywany Kościelisku — myli go z Doliną Chochołowską, której wylot jest w Witowie, w zupełnie innej gminie. Dojeżdżam do Chochołowa tak samo jak do Czarnego Dunajca, bez dopłaty.",
    },
    ...faqWspolne("w gminie Czarny Dunajec"),
    {
      question: "Czarny Dunajec to teraz miasto czy wieś?",
      answer:
        "Miasto — od pierwszego stycznia dwa tysiące dwudziestego trzeciego roku. Prawa miejskie miał już raz, w latach dwudziestych i trzydziestych ubiegłego wieku, i stracił je w reformie z trzydziestego trzeciego. Formalnie jest to dziś Miasto i Gmina Czarny Dunajec, na czele z burmistrzem. Dla mnie nic to nie zmienia — dojeżdżam do całej gminy tak samo.",
    },
  ],

  geo: { lat: 49.4406, lng: 19.8535 },
};
