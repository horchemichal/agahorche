import type { CityContent } from "../city-content";
import {
  REGION_LUBUSKIE,
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
 * STRZELCE KRAJEŃSKIE — gmina miejsko-wiejska, siedziba
 * powiatu strzelecko-drezdeneckiego.
 * MIASTO 9 683, GMINA 16 052 (GUS 31.12.2024).
 * POWIERZCHNIA GMINY 319,0 km².
 * ⚠⚠ POWIERZCHNI MIASTA NIE PODAJĘ — sprzeczność
 *   (5,5 km² kontra 4,94 km²).
 * ⚠⚠ LICZBY SOŁECTW NIE PODAJĘ — strona gminy deklaruje 24,
 *   ale wypisuje 22 pozycje. NIE UFAM ŻADNEJ.
 * ⚠ „Blisko 11 tysięcy" z portalu turystycznego to dane
 *   nieaktualne. NIE CYTUJĘ.
 *
 * ⚠⚠ HOMONIMY — DWA FAŁSZYWE TROPY ODRZUCONE:
 * „ŚWIĘTO ŚLIWKI" należy do STRZELEC DOLNYCH (Dolina Dolnej
 * Wisły), NIE do Strzelec Krajeńskich. „Gminny Ośrodek Kultury
 * w Strzelcach" to GMINA STRZELCE w powiecie kutnowskim
 * (łódzkie). NIE PRZYPISUJĘ ŻADNEGO Z NICH.
 * Do tego: Strzelce Opolskie, Strzelce Wielkie, Strzelno
 * i Strzelin to osobne miasta. FAQ to rozróżnia.
 *
 * ⚠ PRAWA MIEJSKIE — ŹRÓDŁA SPRZECZNE: „przed 1286"
 * (serwis gminy i inne) kontra „w 1286". NIE ROZSTRZYGAM —
 * piszę „przed 1286 rokiem".
 * NAJSTARSZA WZMIANKA 1272 r. w KRONICE WIELKOPOLSKIEJ.
 * PRZYROSTEK „KRAJEŃSKIE" DODANY W 1946 r.
 * ⚠⚠ CHRONOLOGII PRZYNALEŻNOŚCI PAŃSTWOWEJ NIE PODAJĘ —
 *   dwie niezgodne wersje, a temat i tak jest poza zakresem.
 *
 * GEOGRAFIA: miasto MIĘDZY DWOMA JEZIORAMI — GÓRNYM i DOLNYM
 * (zwanymi też Klasztorne Górne i Klasztorne Dolne),
 * na wysokości 76 m n.p.m.
 * JEZIORO KLASZTORNE GÓRNE: 18,94 ha, długość 1 320 m,
 * głębokość maks. 6,6 m; HISTORYCZNIE ZASILAŁO MŁYN PRZY
 * BRAMIE MŁYŃSKIEJ.
 * Największe jeziora gminy: LIPIE 174,0 ha (gł. maks. 42 m),
 * DANKOWSKIE 90,2 ha, SŁOWA 62,1 ha (woda o dużej
 * przezroczystości).
 * Rzeki: CZŁAPIA (7,1 km w gminie), POLKA (21,3 km —
 * najdłuższy ciek gminy, pierwsza wzmianka 1295 r.),
 * SARBINA (3,8 km).
 * 1345 r. — prawa żeglugowe na Noteci i Warcie.
 * ⚠ ZARYBIENIA I GATUNKÓW RYB NIE WYMIENIAM SZCZEGÓŁOWO —
 *   „ryba" i „ryby" jako kąty są ZAJĘTE.
 * ⚠ NAGŁÓWKA „najlepiej zarybione łowiska w Polsce"
 *   NIE UŻYWAM — widziano tylko tytuł, treści nie sprawdzono.
 *
 * ⚠⚠ RZEMIOSŁO — PODSTAWA KĄTA:
 * 1562 r. — PRZYWILEJ WARZENIA PIWA POSIADAŁO 122 MIESZCZAN.
 * ⚠ Podaję to JAKO FAKT HISTORYCZNY, jednym zdaniem,
 *   BEZ ZACHĘTY DO ALKOHOLU.
 * ⚠⚠ 1800 r. — 309 MISTRZÓW RZEMIEŚLNICZYCH: SUKIENNICY 53,
 * KRAWCY 28, PIEKARZE 14, a ponadto SZEWCY I RZEŹNICY.
 * TO JEST KOTWICA — MIASTO PIEKARZY I RZEŹNIKÓW.
 * 1615 r. — cech kowali otrzymał status.
 * Miasto miało MONOPOL NA HANDEL RYBAMI, później ograniczony
 * do wyłączności margrabiego na połowy pstrągów.
 * MLECZARNIA powstała pod koniec XIX w.; działały też rzeźnia
 * i garbarnia.
 * ⚠ NIE TWIERDZĘ, że mleczarnia i rzeźnia działają dziś.
 * MŁYNY WODNE na Człapii (przy Bramie Młyńskiej, Szypioła,
 * Hinter, Walk, Busch) i na Polce (Buk, Sarnowo); w latach 40.
 * XX w. działał młyn motorowy. Zachowały się tylko pozostałości.
 * ⚠ KĄTA MŁYNARSKIEGO NIE UŻYWAM — ZAJĘTY.
 *
 * JARMARK STRZELECKI — edycja 28 czerwca 2025 r., Stadion
 * Miejski, wstęp wolny, organizator Strzelecki Ośrodek Kultury;
 * zapowiadano „smakołyki regionalne".
 * ⚠ NUMERU EDYCJI NIE PODAJĘ. ⚠ NIE PRECYZUJĘ, jakie to
 *   smakołyki — źródło używa wyłącznie ogólnika.
 * W PIELICACH (sołectwo gminy) działa gospodarstwo ekologiczne
 * wytwarzające produkty z czarnego bzu; w mieście dwie pasieki.
 * ⚠ NAZW I NAZWISK NIE PODAJĘ. ⚠ O CZARNYM BZIE NIE PISZĘ
 *   W SEKCJI KULINARNEJ — wymagałoby to ostrzeżeń o surowych
 *   owocach, a to wątek zdrowotny. Wspominam wyłącznie jako
 *   fakt o producencie.
 *
 * ZABYTKI: MURY MIEJSKIE długości 1 640 m, wysokości 8 m,
 * z 36 CZATOWNIAMI, okalające całe śródmieście; dwie bramy:
 * GORZOWSKA i DREZDENECKA. BASZTA WIĘZIENNA (XIV w.),
 * BRAMA MŁYŃSKA (XV w.), trójnawowy KOŚCIÓŁ FARNY z wieżą
 * (XIII w.), STARY SPICHLERZ z 1764 r., kamienice szachulcowe.
 * Festiwal Piosenki Żeglarskiej „Keja".
 *
 * KĄT: KOLACJA BEZ GOTOWANIA — PÓŁMISEK ZAMIAST DANIA.
 * Kąt od miasta rzemiosła spożywczego: czternastu piekarzy
 * i rzeźnicy wśród trzystu dziewięciu mistrzów w 1800 r.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że kolacja to jedyny posiłek, przy którym nie trzeba nic
 *   gotować, i że w polskich domach jest to od dawna oczywiste,
 *   a mimo to obrosło poczuciem, że „to nie jest gotowanie",
 * — ŻE TO JEST PEŁNOPRAWNY POSIŁEK, nie półśrodek, i że
 *   w wielu krajach kolacja wygląda dokładnie tak,
 * — CO DECYDUJE O DOBRYM PÓŁMISKU: nie liczba rzeczy,
 *   tylko KONTRASTY — coś tłustego i coś kwaśnego, coś
 *   miękkiego i coś chrupiącego, coś słonego i coś słodkiego,
 * — ŻE TRZY DOBRE RZECZY BIJĄ DZIESIĘĆ PRZYPADKOWYCH,
 * — ŻE PIECZYWO JEST PODSTAWĄ, a nie dodatkiem — i że warto
 *   zainwestować w nie najwięcej uwagi,
 * — ŻE COŚ CIEPŁEGO NA ŚRODKU ZMIENIA CAŁOŚĆ: jedna gorąca
 *   rzecz — zapiekany ser, pieczone warzywo, jajko — robi
 *   z półmiska posiłek, a nie przekąskę,
 * — ŻE PASTY I SMAROWIDŁA SĄ NAJTAŃSZYM SPOSOBEM na to,
 *   żeby półmisek wyglądał na przygotowany, a nie wyjęty,
 * — DOBRA WIADOMOŚĆ: taki posiłek nie wymaga synchronizacji
 *   — każdy element może stać gotowy i czekać,
 * — I UCZCIWIE: to jest też najlepszy posiłek dla domu,
 *   w którym każdy je o innej porze,
 * — UCZCIWIE O SPRZĘCIE: na półmisek z wędliną i serem
 *   urządzenie jest niepotrzebne i nie udaję inaczej —
 *   to jest wieczór, w którym stoi wyłączone,
 * — z jednym wyjątkiem: pasty, dipy i smarowidła powstają
 *   w nim w kilka chwil, a to jedyna część półmiska, która
 *   w ogóle wymaga roboty.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ŻADNYCH TWIERDZEŃ ZDROWOTNYCH I ŻYWIENIOWYCH.
 *   ZERO „kolacja powinna być lekka", ZERO pory jedzenia jako
 *   zalecenia zdrowotnego, ZERO wędlin jako tematu
 *   dietetycznego. TWARDA GRANICA.
 * — ⚠ ZERO TEMATÓW PRZECHOWYWANIA I BEZPIECZEŃSTWA ŻYWNOŚCI.
 * — ŻADNYCH NAZW FIRM ANI MAREK WĘDLIN I SERÓW.
 * — ZERO ZACHĘTY DO ALKOHOLU (wątek piwowarski — jedno zdanie
 *   historyczne, bez rozwijania).
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Śniadanie" dotyczy
 * pierwszego posiłku dnia. „Niedzielne popołudnie" dotyczy
 * kawy i ciasta dla gości. „Smalec i pasty do chleba" dotyczą
 * jednego produktu. „Goście bez zapowiedzi" dotyczą braku
 * czasu. „Gotowanie składkowe" (Raczki) dotyczy stołu
 * złożonego z wielu domów. „Dom, w którym prawie się nie je
 * w domu" dotyczy jadania na mieście. Tutaj chodzi
 * o KOLACJĘ BEZ GOTOWANIA jako o świadomy sposób na posiłek.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ powierzchni miasta ani liczby sołectw.
 * — NIE ROZSTRZYGAM roku praw miejskich.
 * — NIE PODAJĘ chronologii przynależności państwowej.
 * — NIE PRZYPISUJĘ miastu „Święta Śliwki" ze Strzelec Dolnych
 *   ani wydarzeń gminy Strzelce w łódzkiem.
 * — NIE UŻYWAM określenia „najlepiej zarybione łowiska
 *   w Polsce".
 * — NIE TWIERDZĘ, że mleczarnia i rzeźnia działają do dziś.
 * — NIE PODAJĘ numeru edycji Jarmarku Strzeleckiego.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko dziesięć tysięcy mieszkańców,
 *   a cała gmina ponad szesnaście tysięcy na 319 km²,
 * — najstarsza wzmianka pochodzi z 1272 r., z Kroniki
 *   Wielkopolskiej, a prawa miejskie nadano przed 1286 r.;
 *   przyrostek „Krajeńskie” dodano w 1946 r.,
 * — miasto leży na wysokości siedemdziesięciu sześciu metrów,
 *   między dwoma jeziorami — Górnym i Dolnym, zwanymi też
 *   Klasztornymi; Klasztorne Górne ma blisko dziewiętnaście
 *   hektarów i historycznie zasilało młyn przy Bramie Młyńskiej.
 *   Największe jeziora gminy to Lipie (174 ha, głębokie
 *   na czterdzieści dwa metry), Dankowskie i Słowa; najdłuższym
 *   ciekiem jest Polka, notowana od 1295 r., a w 1345 miasto
 *   otrzymało prawa żeglugowe na Noteci i Warcie,
 * — w 1562 r. przywilej warzenia piwa miało stu dwudziestu
 *   dwóch mieszczan; w 1800 r. pracowało w mieście trzystu
 *   dziewięciu mistrzów rzemieślniczych, w tym pięćdziesięciu
 *   trzech sukienników, dwudziestu ośmiu krawców i czternastu
 *   piekarzy, a także szewcy i rzeźnicy; cech kowali otrzymał
 *   status w 1615 r.,
 * — miasto miało monopol na handel rybami, później ograniczony
 *   do wyłączności margrabiego na połowy pstrągów; mleczarnia
 *   powstała pod koniec XIX w., działały też rzeźnia
 *   i garbarnia, a nad Człapią i Polką pracowały młyny wodne,
 *   z których zostały pozostałości,
 * — Strzelecki Ośrodek Kultury organizuje Jarmark Strzelecki
 *   — edycja z 28 czerwca 2025 r. odbyła się na Stadionie
 *   Miejskim, ze wstępem wolnym; w gminie działa też
 *   gospodarstwo ekologiczne wytwarzające produkty z czarnego
 *   bzu oraz dwie pasieki,
 * — mury miejskie mają 1 640 m długości i osiem metrów
 *   wysokości, zachowało się w nich trzydzieści sześć czatowni,
 *   a prowadziły przez nie bramy Gorzowska i Drezdenecka;
 *   z zabytków także Baszta Więzienna z XIV w., Brama Młyńska
 *   z XV w., trójnawowy kościół farny z XIII w. i stary
 *   spichlerz z 1764 r.
 */
export const STRZELCE_KRAJENSKIE: CityContent = {
  slug: "strzelce-krajenskie",
  h1: "Thermomix Strzelce Krajeńskie – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Strzelce Krajeńskie — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Strzelcach Krajeńskich: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Strzelce Krajeńskie — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Strzelcach Krajeńskich. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Strzelec Krajeńskich z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Strzelce Krajeńskie i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Trzy dobre rzeczy na desce biją dziesięć przypadkowych.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Strzelcach Krajeńskich – jak wygląda prezentacja?",
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
      id: "kolacja",
      heading: "Czternastu piekarzy i rzeźnicy wśród trzystu dziewięciu mistrzów — czyli o kolacji bez gotowania",
      paragraphs: [
        "W 1800 roku pracowało w Strzelcach trzystu dziewięciu mistrzów rzemieślniczych. Najwięcej było sukienników, ale w tym gronie znalazło się też czternastu piekarzy, a obok nich szewcy i rzeźnicy. Miasto z taką strukturą to miasto, w którym chleb i wędlina były codziennością — i to jest dobry pretekst, żeby napisać o posiłku, którego się nie gotuje.",
        "Kolacja jest bowiem jedynym posiłkiem, przy którym nie trzeba niczego ugotować. W polskich domach jest to oczywiste od pokoleń, a mimo to obrosło dziwnym poczuciem winy: że „to nie jest gotowanie”, że się komuś nie chciało.",
        "Otóż jest to pełnoprawny posiłek, a nie półśrodek. W bardzo wielu krajach kolacja wygląda dokładnie tak — chleb, kilka rzeczy obok, i tyle. Nikomu nie przychodzi do głowy się z tego tłumaczyć.",
        "O tym, czy taki półmisek jest dobry, decyduje jedna rzecz, i nie jest nią liczba składników. Decydują kontrasty. Coś tłustego i coś kwaśnego. Coś miękkiego i coś chrupiącego. Coś słonego i coś słodkiego. Jeśli te pary są na stole, całość działa.",
        "Z tego wynika zasada, która oszczędza pieniądze i miejsce w lodówce: trzy dobre rzeczy biją dziesięć przypadkowych. Półmisek zastawiony ośmioma rodzajami wędliny jest gorszy niż trzy rzeczy, które się uzupełniają.",
        "Pieczywo jest przy tym podstawą, a nie dodatkiem — i to na nie warto przeznaczyć najwięcej uwagi i pieniędzy. Przy dobrym chlebie wystarczy naprawdę niewiele obok. Przy słabym nie pomoże nic.",
        "Jedna rzecz zmienia półmisek w posiłek i warto ją znać: coś ciepłego na środku. Zapiekany ser, pieczone warzywo, jajko na miękko, gorąca pasta. Jeden gorący element sprawia, że to przestaje być przekąska, a staje się kolacją, przy której się siedzi.",
        "Pasty i smarowidła to z kolei najtańszy sposób, żeby stół wyglądał na przygotowany, a nie na wyjęty z lodówki. Miska czegoś zrobionego w domu robi na stole więcej niż dwie dodatkowe wędliny.",
        "Jest w tym wszystkim jeszcze jedna zaleta, rzadko nazywana wprost: taki posiłek nie wymaga synchronizacji. Nic nie stygnie, nic nie czeka, nic się nie rozgotowuje. Każdy element może stać gotowy i po prostu czekać.",
        "Dlatego jest to również najlepsze rozwiązanie dla domu, w którym każdy wraca o innej porze. Nie trzeba nikogo pilnować ani nic odgrzewać — półmisek stoi, a ludzie siadają wtedy, kiedy mogą.",
        "Teraz uczciwie o sprzęcie, bo tym razem wypada on skromnie. Na kolację z chlebem, serem i wędliną Thermomix jest po prostu niepotrzebny i nie będę udawać inaczej. To jest wieczór, w którym stoi wyłączony, i bardzo dobrze — żadne urządzenie nie powinno być używane dlatego, że stoi na blacie.",
        "Jest jeden wyjątek i akurat trafia w to, co przy takim stole wymaga jedynej realnej roboty: pasty, dipy i smarowidła. Powstają w kilka chwil, z tego, co jest w domu, i zamieniają zestaw produktów w coś, co wygląda na przemyślane. To wszystko — i tyle wystarczy.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Strzelcach Krajeńskich?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy u Was jada się kolacje wspólnie, czy każdy o swojej porze. Od tego zależy, co warto pokazać.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Strzelcach Krajeńskich"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla strzeleckiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko dziesięć tysięcy mieszkańców, a cała gmina ponad szesnaście tysięcy na trzystu dziewiętnastu kilometrach kwadratowych. Najstarsza wzmianka o Strzelcach pochodzi z 1272 roku, z Kroniki Wielkopolskiej, a prawa miejskie nadano przed 1286; przyrostek „Krajeńskie” doszedł dopiero w 1946 roku. Miasto stoi na wysokości siedemdziesięciu sześciu metrów, między dwoma jeziorami — Górnym i Dolnym, zwanymi też Klasztornymi — z których Górne, liczące blisko dziewiętnaście hektarów, historycznie zasilało młyn przy Bramie Młyńskiej. Największe jeziora gminy to Lipie, głębokie na czterdzieści dwa metry, Dankowskie i Słowa o wyjątkowo przezroczystej wodzie; najdłuższym ciekiem jest Polka, notowana od 1295 roku, a w 1345 miasto otrzymało prawa żeglugowe na Noteci i Warcie. W 1562 roku przywilej warzenia piwa miało stu dwudziestu dwóch mieszczan, a w 1800 pracowało tu trzystu dziewięciu mistrzów rzemieślniczych — pięćdziesięciu trzech sukienników, dwudziestu ośmiu krawców, czternastu piekarzy, a także szewcy i rzeźnicy; cech kowali otrzymał status w 1615. Miasto miało monopol na handel rybami, później ograniczony do wyłączności margrabiego na połowy pstrągów, pod koniec XIX wieku powstała mleczarnia, działały rzeźnia i garbarnia, a nad Człapią i Polką pracowały młyny wodne, z których zostały pozostałości. Strzelecki Ośrodek Kultury organizuje Jarmark Strzelecki — edycja z 28 czerwca 2025 roku odbyła się na Stadionie Miejskim, ze wstępem wolnym; w gminie działa też gospodarstwo ekologiczne wytwarzające produkty z czarnego bzu oraz dwie pasieki. Mury miejskie mają tysiąc sześćset czterdzieści metrów długości i osiem wysokości, zachowało się w nich trzydzieści sześć czatowni, a prowadziły przez nie bramy Gorzowska i Drezdenecka; stoją tu również Baszta Więzienna z XIV wieku, Brama Młyńska z XV, trójnawowy kościół farny z XIII i stary spichlerz z 1764 roku.",
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

  districtsHeading: "Do których części gminy Strzelce Krajeńskie dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich sołectw gminy. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Strzelce Krajeńskie też przyjadę",
  nearbyParagraphs: [
    "Drezdenko, Dobiegniew, Gorzów Wielkopolski, Choszczno i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Drezdenko", "Dobiegniew", "Gorzów Wielkopolski", "Choszczno"],

  about: blokOMnie("do Strzelec Krajeńskich", "w Strzelcach Krajeńskich i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Strzelec Krajeńskich bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich sołectw gminy. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku, bo tych nazw jest w Polsce kilka: chodzi o Strzelce Krajeńskie w lubuskiem, a nie o Strzelce Opolskie, Strzelce Dolne ani Strzelno.",
    },
    ...faqWspolne("w Strzelcach Krajeńskich"),
    {
      question: "Co decyduje o dobrym półmisku na kolację?",
      answer:
        "Kontrasty, a nie liczba składników: coś tłustego i coś kwaśnego, coś miękkiego i coś chrupiącego, coś słonego i coś słodkiego. Trzy dobre rzeczy, które się uzupełniają, biją dziesięć przypadkowych. Pieczywo jest przy tym podstawą, a nie dodatkiem — na nie warto przeznaczyć najwięcej uwagi.",
    },
    {
      question: "Jak zrobić z przekąski pełny posiłek?",
      answer:
        "Dodając jedną ciepłą rzecz na środku: zapiekany ser, pieczone warzywo, jajko na miękko, gorącą pastę. To wystarczy, żeby przestało być podjadaniem, a stało się kolacją, przy której się siedzi. Pasty i smarowidła robią przy tym więcej niż dwie dodatkowe wędliny.",
    },
    {
      question: "Czy Thermomix przydaje się przy takiej kolacji?",
      answer:
        "Prawie wcale — i nie będę udawać inaczej. Na chleb, ser i wędlinę jest niepotrzebny; to wieczór, w którym stoi wyłączony. Jedyny wyjątek to pasty i dipy: powstają w kilka chwil z tego, co jest w domu, i to jedyna część takiego stołu, która wymaga roboty.",
    },
  ],

  geo: { lat: 52.8792, lng: 15.5311 },
};
