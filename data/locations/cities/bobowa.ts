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
 * BOBOWA — GMINA MIEJSKO-WIEJSKA w powiecie gorlickim.
 * 9 606 mieszkańców (31.12.2024), 49,8 km² — najmniejsza
 * powierzchniowo w powiecie. ⭐ ŚREDNI WIEK 37,7 LAT i WZROST
 * LUDNOŚCI O 6,4% od 2002 — najmłodsza i jedyna wyraźnie rosnąca.
 *
 * OŚ STRONY: KORONKA KLOCKOWA JAKO ŻYWE DZIEDZICTWO.
 * Punkt kotwiczący: WPIS NA KRAJOWĄ LISTĘ NIEMATERIALNEGO
 * DZIEDZICTWA KULTUROWEGO W 2023 R. To status prawny, nie folklor.
 * ⚠️ Koronka rezonuje z tematem strony (rzemiosło ręczne, precyzja,
 * przekazywanie umiejętności) — wykorzystać to w sekcji kulinarnej.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — KORONKA KLOCKOWA znana w Bobowej OD XVI W.
 *   ⚠️ „dokładna data pojawienia się koronkarstwa w Bobowej nie jest
 *   znana” (dzieje.pl) — NIE ZMYŚLAĆ, kto ją przywiózł,
 * — 1899 — powstaje zawodowa KRAJOWA SZKOŁA KORONKARSKA,
 * — ⚠️⚠️ NAGRODY: dwa źródła podają „brązowy medal w St. Louis 1902”
 *   i „złoty w San Francisco 1905”. TO PRAWIE NA PEWNO BŁĄD:
 *   wystawa światowa w St. Louis odbyła się w 1904, a w San Francisco
 *   w 1915. Źródła kopiują ten sam błąd. NIE PODAWAĆ DAT ANI MIAST —
 *   pisać ogólnie o medalach na wystawach światowych,
 * — STOWARZYSZENIE TWÓRCZOŚCI REGIONALNEJ — ⚠️ 1994 albo 1995,
 *   rozbieżność. Nie eksponować roku,
 * — MIĘDZYNARODOWY FESTIWAL KORONKI KLOCKOWEJ — PIERWSZA EDYCJA
 *   PAŹDZIERNIK 2000 R. Chronologia w pełni zgodna: XIII w 2012,
 *   XX w 2019, XXVI w 2025.
 *   ⚠️⚠️ TERMIN SIĘ PRZESUNĄŁ: edycja 2025 odbyła się 4–7 WRZEŚNIA,
 *   nie w październiku. Strona gorlice.pl nadal pisze „początek
 *   października” — NIEAKTUALNE. NIE PODAWAĆ MIESIĄCA STANOWCZO,
 * — XXVI MFKK 2025: koronczarki ze Słowacji, Czech, Niemiec, Węgier,
 *   Holandii, Francji, Kanady, INDII, ARGENTYNY, PANAMY; pokazy mody;
 *   XXXI Ogólnopolski Konkurs Koronki Klockowej; niedzielny
 *   Ogólnopolski Jarmark Rękodzieła na rynku,
 * — ⭐⭐ 2023 — BOBOWSKA KORONKA KLOCKOWA WPISANA NA KRAJOWĄ LISTĘ
 *   NIEMATERIALNEGO DZIEDZICTWA KULTUROWEGO (publikacja 18 marca
 *   2023). NAJMOCNIEJSZY WERYFIKOWALNY WYRÓŻNIK GMINY.
 *   ⚠️ TO INNA LISTA NIŻ LISTA PRODUKTÓW TRADYCYJNYCH — nie mylić,
 * — KORONKARNIA — sklep, galeria i pracownia, otwarta 19 stycznia
 *   2019, ul. Grunwaldzka 27, prowadzą Ewa i Grzegorz Szpila.
 *   Na rynku stoi rzeźba kobiety w stroju regionalnym z poduszką
 *   koronkarską,
 * — ⚠️ UCZCIWA UWAGA za krajoznawcy.info.pl: mimo tytułu stolicy
 *   koronki na co dzień trudno zastać koronczarkę przy pracy,
 *   a sklepy bywają zamknięte w weekendy. Nie obiecywać atrakcji,
 * — HISTORIA CHASYDZKA (pisać rzeczowo): 1732 właściciel Michał
 *   Jaworski sprowadza Żydów; 1756 oddanie SYNAGOGI; 1777–1778
 *   sztukatorski ARON HA-KODESZ na ścianie wschodniej, z motywami
 *   roślinnymi i zwierzęcymi — „jedna z najwspanialszych w Polsce”.
 *   1893 przybywa rabin SZLOMO BEN MEJER NATAN HALBERSTAM, pierwszy
 *   cadyk bobowski, założyciel DYNASTII BOBOV. Syn BEN CIJON
 *   HALBERSTAM — kompozytor melodii chasydzkich. 1931 wesele
 *   ściąga OK. 5 000 UCZESTNIKÓW przyjeżdżających podstawionymi
 *   pociągami. Po wojnie synagoga zamieniona na warsztaty tkackie;
 *   1993 przejmuje ją Gmina Wyznaniowa Żydowska w Krakowie;
 *   LIPIEC 2003 — ponowne otwarcie po remoncie sfinansowanym przez
 *   rabina ASHERA SCHARFA z Nowego Jorku. Cmentarz żydowski
 *   z ohelami cadyków — cel pielgrzymek. Dynastia Bobov działa dziś
 *   głównie w Nowym Jorku (Borough Park),
 * — BOLESŁAW WIENIAWA-DŁUGOSZOWSKI — dwór Długoszowskich w Bobowej,
 *   przyjechał tu jako 6-latek. Po śmierci matki w 1927 współwłaściciel
 *   majątku. Wojna zastała go we Włoszech, NIGDY NIE WRÓCIŁ.
 *   ⭐ BRAT KAZIMIERZ BYŁ BURMISTRZEM BOBOWEJ i DZIAŁAŁ NA RZECZ
 *   OCHRONY BOBOWSKICH ŻYDÓW W CZASIE ZAGŁADY. 2022 — pośmiertny
 *   tytuł Honorowego Obywatela. Dwór dziś: szkoła muzyczna,
 * — 1339 — pierwsza wzmianka; BOBOWA BYŁA JUŻ WTEDY MIASTEM,
 *   lokowanym na prawie niemieckim,
 * — 1889 — wielki pożar niszczy PONAD 300 BUDYNKÓW (uszkodził dach
 *   synagogi; wnętrze ocalało),
 * — 1934 — UTRATA PRAW MIEJSKICH; 1 STYCZNIA 2009 — ODZYSKANIE,
 *   po 75 latach,
 * — MIASTO + 7 SOŁECTW: Berdechów, Brzana (obejmuje Brzanę Dolną
 *   i Górną), Jankowa, Sędziszowa, Siedliska, Stróżna, Wilczyska.
 *   ⚠️ Polska w Liczbach POMIJA BERDECHÓW — używać listy 7-elementowej,
 * — STREFA AKTYWNOŚCI GOSPODARCZEJ W SIEDLISKACH — 12 ha,
 *   7 uzbrojonych działek po 1–3 ha,
 * — REGON: 723 podmioty (2024). Miasto Bobowa ok. 3 000 mieszkańców,
 * — KOLEJ: linia 108 przez gminę (m.in. Wilczyska). ⚠️ NAZW I STATUSU
 *   STACJI NIE POTWIERDZONO PRECYZYJNIE.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — NAZWANYCH DUŻYCH PRACODAWCÓW. ⚠️ Krążą hasła o przetwórstwie
 *   mięsnym i wędliniarstwie w Bobowej — NIE ZNALEZIONO wiarygodnego
 *   potwierdzenia. NIE WYMIENIAĆ NAZW FIRM,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono,
 * — NAZW KÓŁ GOSPODYŃ. Nie potwierdzono,
 * — TWIERDZENIA, ŻE „ZACHWYCAŁ SIĘ BOBOWĄ STANISŁAW WYSPIAŃSKI”.
 *   Publicystyka bez źródła,
 * — BEZROBOCIA I WYNAGRODZEŃ. Dane POWIATOWE.
 *
 * PUŁAPKI:
 * — WILCZYSKA W TEJ GMINIE. Monografia gminy Korzenna wspomina
 *   „pobliską wieś Wilczyska” w kontekście Kazimierza Wątróbskiego —
 *   ale TAMTE Wilczyska leżą w gminie Łużna, powiat gorlicki.
 *   To trzecia wieś o tej nazwie w okolicy. NIE MIESZAĆ.
 */

export const BOBOWA: CityContent = {
  slug: "bobowa",
  h1: "Thermomix Bobowa – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Bobowa — prezentacja i cena",
  seoDescription:
    "Thermomix w gminie Bobowa: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojazd do miasta i wszystkich sołectw bez dopłat. Tel. 517 185 691.",
  ogTitle: "Thermomix Bobowa — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w gminie Bobowa. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Bobowej, Siedlisk, Wilczysk i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie sołectwa, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bobowej – jak wygląda prezentacja?",
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
      heading: "Rzemiosło, które państwo wpisało na listę",
      paragraphs: [
        "W dwa tysiące dwudziestym trzecim roku bobowska koronka klockowa trafiła na Krajową listę niematerialnego dziedzictwa kulturowego. To warto powiedzieć dokładnie: nie jest to wyróżnienie honorowe ani tytuł turystyczny, tylko formalne uznanie przez państwo, że w tym miejscu żyje umiejętność warta ochrony.",
        "Koronka klockowa jest tu obecna od szesnastego wieku, choć — jak uczciwie przyznają badacze — dokładnej daty jej pojawienia się nikt nie zna. Pewne jest natomiast, że w tysiąc osiemset dziewięćdziesiątym dziewiątym roku powstała w Bobowej zawodowa Krajowa Szkoła Koronkarska, a jej wyroby zdobywały medale na wystawach światowych na początku dwudziestego wieku.",
        "Podam to celowo ogólnie, bo popularne wersje są prawie na pewno błędne: krążą daty wystaw w Saint Louis i San Francisco, które nie zgadzają się z faktycznymi latami tych wystaw. Wolę powiedzieć mniej i dobrze niż więcej i źle.",
        "Od dwutysięcznego roku odbywa się tu Międzynarodowy Festiwal Koronki Klockowej — w dwa tysiące dwudziestym piątym w dwudziestej szóstej edycji. Przyjeżdżają koronczarki ze Słowacji, Czech, Niemiec, Węgier, Holandii, Francji, Kanady, a także z Indii, Argentyny i Panamy. W ramach festiwalu rozstrzyga się ogólnopolski konkurs, a w niedzielę na rynku staje jarmark rękodzieła. Nie podaję stałego terminu, bo się zmienił — dawniej był początek października, ostatnia edycja odbyła się we wrześniu.",
        "Jedna uczciwa uwaga do turystów: tytuł stolicy koronki nie znaczy, że koronczarkę zastanie się przy pracy w każdy dzień. Na co dzień to jest praca domowa, a nie pokaz. Warto zajrzeć do Koronkarni przy Grunwaldzkiej, otwartej w dwa tysiące dziewiętnastym, ale lepiej wcześniej zadzwonić.",
        "Bobowa ma też drugą, zupełnie inną historię. Od tysiąc siedemset trzydziestego drugiego roku, kiedy właściciel miasteczka sprowadził tu Żydów, rosła tutejsza gmina żydowska; synagogę oddano do użytku w tysiąc siedemset pięćdziesiątym szóstym, a jej sztukatorski aron ha-kodesz z lat siedemdziesiątych osiemnastego wieku uchodzi za jeden z najwspanialszych w Polsce. W tysiąc osiemset dziewięćdziesiątym trzecim przybył tu rabin Szlomo Halberstam i założył dynastię chasydzką Bobov, znaną dziś na całym świecie. Wesele w tysiąc dziewięćset trzydziestym pierwszym ściągnęło do miasteczka około pięciu tysięcy osób, dowożonych specjalnie podstawianymi pociągami.",
        "Synagoga przetrwała — po wojnie służyła jako warsztaty tkackie, w tysiąc dziewięćset dziewięćdziesiątym trzecim przejęła ją krakowska gmina żydowska, a w lipcu dwa tysiące trzeciego otwarto ją ponownie po remoncie sfinansowanym przez rabina z Nowego Jorku. Warto też wiedzieć, że Kazimierz Wieniawa-Długoszowski, brat słynniejszego Bolesława i burmistrz Bobowej, działał w czasie okupacji na rzecz ochrony tutejszych Żydów.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Bobowa?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Powiedz, czy chodzi o miasto, czy o jedno z siedmiu sołectw: Berdechów, Brzanę, Jankową, Sędziszową, Siedliska, Stróżną albo Wilczyska. Gmina jest niewielka, więc różnice w trasie są małe, a w cenie żadnych.",
        "Jeśli robisz koronkę albo należysz do stowarzyszenia, powiedz to od razu. Chętnie dopasuję termin do kalendarza festiwalowego, bo wiem, że przed wrześniem macie inne rzeczy na głowie.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bobowej"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Najmłodsza gmina w powiecie",
      paragraphs: [
        "Bobowa ma coś, czego nie ma prawie żadna sąsiadka: rośnie. Od dwa tysiące drugiego roku liczba mieszkańców zwiększyła się tu o ponad sześć procent, a średni wiek wynosi trzydzieści osiem lat. Dla porównania w pobliskich Gorlicach mediana przekracza czterdzieści pięć, a ludności ubywa.",
        "To znaczy, że w tutejszych domach jest po prostu dużo dzieci. A dom z dziećmi ma bardzo konkretny problem kuchenny: nie chodzi o wyrafinowanie, tylko o to, żeby obiad był codziennie, o rozsądnej porze i w wystarczającej ilości.",
        "Pierwsza praktyczna rzecz jest przy takim stole banalna, więc powiem ją wprost: dania jednogarnkowe. Zupa albo duszone mięso na sześć osób gotuje się bez pilnowania, samo się wyłącza i czeka. Nie trzeba stać, mieszać ani wracać co dziesięć minut.",
        "Druga to gotowanie z zapasem, przy większej rodzinie właściwie konieczne. Jedna duża porcja podzielona na pojemniki obsługuje kilka dni, a pasty, sosy i ciasto robi się seriami w weekend.",
        "Trzecia dotyczy tego, kto gotuje — i tu Bobowa jest ciekawym przypadkiem. W miejscu, gdzie od pokoleń przekazuje się dzieciom rękodzieło, przekazywanie umiejętności kuchennych też jest naturalne. Ponieważ przepis prowadzi krok po kroku, obiad może zrobić nastolatek, i to nie jako wyjątek, tylko regularnie.",
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
    heading: "Bobowa i gotowanie — cierpliwość, którą się przekazuje",
    paragraphs: [
      "Zacznę uczciwie: nie potwierdziłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych przypisanego tej gminie ani nazwy działającego koła gospodyń. Nie będę więc dopisywać Bobowej kulinarnego dorobku, którego nie umiem wskazać źródłem.",
      "Jest tu za to coś, co z gotowaniem łączy się mocniej, niż widać na pierwszy rzut oka. Koronka klockowa to rzemiosło, w którym liczy się cierpliwość, powtarzalność ruchu i to, że umiejętność przechodzi z babki na wnuczkę. Dokładnie tak samo działa domowa kuchnia — a przynajmniej ta jej część, która jest naprawdę warta zachowania.",
      "Warto też zauważyć, jak Bobowa rozwiązała problem, który dotyczy każdego ginącego rzemiosła. Nie zamknęła koronki w gablocie, tylko zrobiła z niej szkołę, stowarzyszenie, festiwal z międzynarodowym konkursem i wreszcie doprowadziła do wpisu na krajową listę dziedzictwa. Umiejętność przetrwała, bo miała gdzie żyć.",
      "W kuchni jest podobnie: przepis babci przetrwa, jeśli ktoś go faktycznie robi. Urządzenie akurat temu sprzyja, bo nie narzuca własnych przepisów — możesz w nim odtworzyć tutejszą zupę czy ciasto co do składnika, tylko bez godziny stania przy garnku i bez bolących rąk od ucierania.",
      "Czego nie zrobi, mówię wprost, i tu analogia z koronką jest najtrafniejsza: nie zastąpi wprawy. Nie ulepi pierogów, nie upiecze chleba i nie wie, kiedy ciasto jest dobre. Zabiera przygotowanie — rozdrabnianie, wyrabianie, mieszanie — a rzemiosło zostawia człowiekowi.",
    ],
  },

  districtsHeading: "Gdzie w gminie Bobowa dojeżdżam?",
  districtsParagraphs: [
    "Do miasta i do wszystkich siedmiu sołectw, bez żadnej dopłaty za odległość. Gmina zajmuje niecałe pięćdziesiąt kilometrów kwadratowych — najmniej w powiecie gorlickim — i liczy ponad dziewięć i pół tysiąca mieszkańców, z czego około trzech tysięcy w samym mieście.",
    "Sołectwa to: Berdechów, Brzana (obejmująca Brzanę Dolną i Górną), Jankowa, Sędziszowa, Siedliska, Stróżna i Wilczyska. W Siedliskach działa strefa aktywności gospodarczej — dwanaście hektarów z siedmioma uzbrojonymi działkami.",
    "Bobowa ma ciekawą historię statusu: była miastem już w tysiąc trzysta trzydziestym dziewiątym roku, kiedy pojawia się pierwsza wzmianka. Prawa miejskie straciła w tysiąc dziewięćset trzydziestym czwartym i odzyskała pierwszego stycznia dwa tysiące dziewiątego — po siedemdziesięciu pięciu latach.",
    "W miasteczku warto zobaczyć synagogę z tysiąc siedemset pięćdziesiątego szóstego roku ze sztukatorskim aron ha-kodesz, cmentarz żydowski z ohelami cadyków, kościół Wszystkich Świętych, gotycki kościół świętej Zofii oraz dwór Długoszowskich, w którym mieści się dziś szkoła muzyczna. Na rynku stoi rzeźba kobiety z poduszką koronkarską, a przy Grunwaldzkiej działa Koronkarnia.",
    "Dojazd: przez gminę biegnie linia kolejowa ze Stróż do Krościenka, między innymi przez Wilczyska. Nie podaję rozkładu, bo aktualnego stanu ruchu pasażerskiego nie udało mi się potwierdzić. Samochodem najbliżej jest z Grybowa i z Nowego Sącza.",
  ],
  districts: [
    "Bobowa — Rynek i centrum",
    "Bobowa — pozostała zabudowa",
    "Siedliska",
    "Wilczyska",
    "Brzana",
    "Jankowa i Stróżna",
    "Sędziszowa i Berdechów",
  ],

  nearbyHeading: "Grybów, Korzenna i Łużna też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina graniczy z gminą wiejską Grybów, Korzenną, Łużną i Ciężkowicami. Dojeżdżam do wszystkich sąsiadów bez doliczania kosztu dojazdu; blisko jest też do Nowego Sącza.",
    "Jedno rozróżnienie, bo w okolicy są trzy wsie o tej nazwie: Wilczyska w tej gminie to nie te same Wilczyska, o których wspominają monografie sąsiednich gmin. Przy umawianiu wystarczy, że powiesz, że chodzi o gminę Bobowa.",
  ],
  nearbyTowns: [
    "Grybów",
    "Korzenna",
    "Łużna",
    "Gorlice",
    "Nowy Sącz",
    "Kraków",
  ],

  about: blokOMnie("do Bobowej", "w powiecie gorlickim"),

  faq: [
    {
      question: "Mieszkam w Siedliskach albo Brzanie. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie sołectwa gminy traktuję tak samo jak samo miasto. Gmina jest niewielka, więc przy umawianiu wystarczy nazwa wsi.",
    },
    ...faqWspolne("w Bobowej"),
    {
      question: "Mamy w domu trójkę dzieci. Od czego zacząć?",
      answer:
        "Od jednego prawdziwego obiadu, a nie od pokazu. Przy większej rodzinie najwięcej daje gotowanie jednogarnkowe i z zapasem — jedna duża porcja bez pilnowania zamiast trzech osobnych rzeczy. Na prezentacji chętnie ugotuję coś, co jada u Was cała rodzina, żeby było widać to na Waszym jedzeniu, a nie na przepisie z folderu.",
    },
  ],

  geo: { lat: 49.7103, lng: 20.951 },
};
