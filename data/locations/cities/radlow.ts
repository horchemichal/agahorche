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
 * RADŁÓW — GMINA MIEJSKO-WIEJSKA w powiecie tarnowskim.
 * Gmina: 9 398 mieszkańców (GUS, 31.12.2024), 86,2 km², 109 os./km²,
 * −3,0% od 2002, średni wiek 41,9, saldo migracji +15 (DODATNIE).
 * Miasto: 2 726 mieszkańców. Burmistrz: Mateusz Borowiec.
 * 13 SOŁECTW + osiedle Radłów.
 *
 * OŚ STRONY: NAJMŁODSZA POLSKA BŁOGOSŁAWIONA POCHODZI Z TEJ GMINY.
 * Karolina Kózkówna urodziła się w WAŁ-RUDZIE, zginęła w wieku 16 lat,
 * a jej sarkofag stoi pod ołtarzem kościoła w ZABAWIE — obie miejscowości
 * to sołectwa gminy Radłów.
 * ⚠️⚠️ OŚ ŚWIADOMIE OMIJA PRAWA MIEJSKIE. Radłów ma wzorzec analogiczny
 * do CZCHOWA (1928→2000) i SKAŁY: utrata 1934 → odzyskanie 1.01.2010.
 * Daty wolno podać w treści, ale NIE budować na nich narracji.
 * ⚠️ Nie eksponować okoliczności śmierci Karoliny w sposób drastyczny —
 * to strona sprzedażowa, nie hagiografia.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — BŁ. KAROLINA KÓZKÓWNA: ur. 2 SIERPNIA 1898 w WAŁ-RUDZIE,
 *   zm. 18 LISTOPADA 1914 w wieku 16 lat. BEATYFIKOWANA 10 CZERWCA 1987
 *   PRZEZ JANA PAWŁA II W TARNOWIE, podczas III pielgrzymki do Polski.
 *   Sarkofag pod ołtarzem kościoła w Zabawie (parafia Trójcy
 *   Przenajświętszej, diecezja tarnowska). Elementy sanktuarium:
 *   Kaplica Męczenników, pomnik „Przejście” dla rodzin ofiar wypadków,
 *   Droga cierpienia w Wał-Rudzie z procesją 18. DNIA MIESIĄCA O 15:00,
 *   nowenna w piątki. Patronka KSM, Ruchu Czystych Serc i Szkolnych Kół
 *   Caritas (ekai.pl, sanktuariumzabawa.pl),
 * — SOŁECTWA z liczbą mieszkańców (gminaradlow.pl): Radłów 2 726,
 *   Biskupice Radłowskie 1 056, Wola Radłowska 1 045, Niwka 920,
 *   ZABAWA 902, WAŁ-RUDA 638, Przybysławice 513, Zdrochec 396,
 *   Siedlec 325, Marcinkowice 283, Łęka Siedlecka 249, Sanoka 231,
 *   Głów 203, Brzeźnica 192,
 * — PRAWA MIEJSKIE: odzyskane 1 STYCZNIA 2010, utracone 1934.
 *   60. miasto w Małopolsce, 7. w powiecie tarnowskim. W 2025 r.
 *   obchodzono 15-lecie. ⚠️ Rok pierwotnego nadania niepewny — jedno
 *   źródło podaje 1866 (okres galicyjski), inne mówią ogólnie
 *   o „miasteczku od wieków”. Numeru rozporządzenia RM nie ustalono,
 * — HISTORIA (gminaradlow.pl, PTTK): nazwa od RADŁA, narzędzia
 *   rolniczego; 1080/1084 pierwsza wzmianka, Radłów uposażeniem
 *   BISKUPÓW KRAKOWSKICH (⚠️ źródła podają dwie daty); 1241 najazd
 *   Tatarów, spalenie drewnianego kościoła; 1337 biskup JAN GROT buduje
 *   murowany kościół (przetrwał do 1915); 1450 kard. ZBIGNIEW OLEŚNICKI
 *   stawia SŁUP GRANICZNY między dobrami biskupimi a wsiami
 *   szlacheckimi — wapień pińczowski, płaskorzeźby, herb Dębno;
 *   1533 STANISŁAW HOZJUSZ proboszczem; 1680 pałac biskupi; 1844 pałac
 *   Radenfeldów; 1911 pomnik Kościuszki na rynku; 1914–1918 całkowite
 *   zniszczenie miasteczka, spalony kościół z XIV w.; 1934 powódź
 *   i utrata praw; od 1945 pałac mieści Liceum Ogólnokształcące,
 * — DWÓR: istniał już w 1390 r.; przebudowy 1638–1639, 1667, ok. 1830
 *   (klasycystyczny); PARK PAŁACOWY OK. 4 HA ze stawem i alejami
 *   grabową, wierzbową i lipową,
 * — BITWA RADŁOWSKA: 7–8 WRZEŚNIA 1939, trwała 48 godzin; 31 spalonych
 *   budynków; grupa ok. 14 polskich żołnierzy zabarykadowanych w szkole
 *   została spalona żywcem. Coroczne uroczystości rocznicowe;
 *   rekonstrukcja historyczna w 2017 r.,
 * — ZALEWY: dwa akweny — w Radłowie i we wsi NIWKA — POWSTAŁE
 *   W WYROBISKACH PO EKSPLOATACJI ŻWIRU. Nadzór: Radłowskie
 *   Towarzystwo Wędkarskie. ⚠️ KĄPIEL OFICJALNIE ZABRONIONA (brak
 *   nadzoru sanitarnego i ratowniczego); odnotowano utonięcia.
 *   Od 2018 prywatny ośrodek rekreacyjny z wyznaczoną strefą kąpielową,
 * — FASOLA „PIĘKNY JAŚ” Z DOLINY DUNAJCA — ChNP, obszar obejmuje
 *   m.in. gminę Radłów,
 * — DOJAZD: DW 975 (Wojnicz–Dąbrowa Tarnowska) główna oś gminy;
 *   7 KM OD AUTOSTRADY A4; Tarnów–Radłów 20 km, ok. 25–29 minut
 *   przez DW 973 i 975. Autobusy przewoźnika JANPOL, rozkład
 *   od 1 marca 2025: Jadowniki Mokre–Radłów–Tarnów oraz Biskupice
 *   Radłowskie–Radłów–Wierzchosławice–Ostrów–Tarnów (soboty),
 * — WSPÓŁRZĘDNE (miasto Radłów): 50,0869 / 20,8531; 184 m n.p.m.
 *   ⚠️ To współrzędne miejscowości, nie zweryfikowane współrzędne urzędu
 *   (adres: ul. Kolejowa 7).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — PRAW MIEJSKICH JAKO OSI. Wzorzec identyczny z Czchowem i Skałą,
 * — „CENTRUM DUSZPASTERSTWA MŁODZIEŻY” W ZABAWIE. NAZWA NIEPOTWIERDZONA.
 *   Diecezjalne Centrum Formacyjno-Rekolekcyjne „Arka” jest w GRÓDKU
 *   NAD DUNAJCEM, nie w Zabawie. NIE UŻYWAĆ tej nazwy,
 * — DATY USTANOWIENIA SANKTUARIUM w Zabawie i daty budowy tamtejszego
 *   kościoła. Nie ustalone,
 * — DRASTYCZNYCH OKOLICZNOŚCI ŚMIERCI KAROLINY. Świadomie pominięte,
 * — STACJI KOLEJOWEJ. W gminie Radłów jej NIE MA. Stacja „Biadoliny
 *   Radłowskie” na linii 91 leży POZA gminą, w gminie Dębno, powiat
 *   brzeski — mimo mylącej nazwy. NIE PISAĆ, że Radłów ma stację,
 * — POWIERZCHNI AKWENÓW i nazw operatorów żwirowni. Niepotwierdzone,
 * — NAZW KÓŁ GOSPODYŃ i wpisów na Listę Produktów Tradycyjnych. Nie
 *   potwierdzono żadnych poza obszarowym ChNP fasoli,
 * — NUMERÓW JEDNOSTEK I STRAT w bitwie radłowskiej. Niepotwierdzone,
 * — BEZROBOCIA I WYNAGRODZEŃ. 6 688,26 zł to dana POWIATOWA.
 *
 * PUŁAPKI:
 * — RADŁÓW W OPOLSKIM to inna gmina; jej domena to www.radlow.pl.
 *   Małopolski Radłów to gminaradlow.pl,
 * — BRZEŹNICA to sołectwo tej gminy, ale istnieje też GMINA Brzeźnica
 *   w powiecie wadowickim. NIE UMIESZCZAĆ w nearbyTowns,
 * — SIEDLEC i ŁĘKA SIEDLECKA to dwa różne sołectwa,
 * — STATUT GMINY (uchwała 92/XIV/2016) NIE ZAWIERA wykazu sołectw —
 *   lista pochodzi z serwisu gminy,
 * — KĄPIEL W ZALEWACH JEST ZABRONIONA. Nie zachęcać.
 */

export const RADLOW: CityContent = {
  slug: "radlow",
  h1: "Thermomix Radłów – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Radłów — prezentacja i cena",
  seoDescription:
    "Thermomix w Radłowie i całej gminie: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0%. Dojazd do wszystkich sołectw bez dopłat. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Radłów — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Radłowie i okolicy. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Radłowa, Zabawy, Wał-Rudy, Woli Radłowskiej i pozostałych sołectw gminy przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje.",

  highlights: highlightyStandardowe("miasto i wszystkie trzynaście sołectw, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Radłowie – jak wygląda prezentacja?",
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
      heading: "Dwie wsie, do których przyjeżdżają pielgrzymi",
      paragraphs: [
        "Karolina Kózkówna urodziła się drugiego sierpnia tysiąc osiemset dziewięćdziesiątego ósmego roku w Wał-Rudzie, jednym z sołectw tej gminy. Zginęła osiemnastego listopada tysiąc dziewięćset czternastego, mając szesnaście lat. Jest najmłodszą polską błogosławioną.",
        "Jan Paweł Drugi beatyfikował ją dziesiątego czerwca tysiąc dziewięćset osiemdziesiątego siódmego roku w Tarnowie, podczas trzeciej pielgrzymki do Polski. Jej sarkofag stoi pod ołtarzem kościoła w Zabawie — to również sołectwo gminy Radłów, liczące niecały tysiąc mieszkańców, dosłownie kilka kilometrów od miejsca, gdzie się urodziła.",
        "Od tamtej pory obie wsie przyjmują pielgrzymów. W Zabawie działa Kaplica Męczenników, poświęcona ofiarom przemocy, i pomnik Przejście, postawiony z myślą o rodzinach, które straciły bliskich w wypadkach. W Wał-Rudzie prowadzi Droga cierpienia, a procesja przechodzi nią osiemnastego dnia każdego miesiąca o piętnastej. W piątki odprawia się nowennę.",
        "Karolina jest patronką Katolickiego Stowarzyszenia Młodzieży, Ruchu Czystych Serc i Szkolnych Kół Caritas, więc wśród przyjeżdżających jest sporo młodych.",
        "Reszta historii gminy jest znacznie starsza i biskupia. Radłów pojawia się w dokumentach w latach osiemdziesiątych jedenastego wieku jako uposażenie biskupów krakowskich, a nazwę wziął od radła — narzędzia rolniczego. W tysiąc trzysta trzydziestym siódmym biskup Jan Grot postawił tu murowany kościół, który przetrwał do tysiąc dziewięćset piętnastego roku. Proboszczem był tu w tysiąc pięćset trzydziestym trzecim Stanisław Hozjusz, późniejszy kardynał.",
        "Został po tamtych czasach zabytek, którego nie ma prawie nigdzie: słup graniczny z tysiąc czterysta pięćdziesiątego roku. Kardynał Zbigniew Oleśnicki kazał go postawić na granicy między dobrami biskupimi a wsiami szlacheckimi. Czworoboczny graniastosłup z wapienia pińczowskiego, z krucyfiksem, postaciami i herbem Dębno. Stoi od pięciuset siedemdziesięciu lat i nikt go nie ruszył.",
        "Dwudziesty wiek obszedł się z Radłowem brutalnie dwa razy. W pierwszej wojnie miasteczko zostało zniszczone doszczętnie, razem z czternastowiecznym kościołem. Siódmego i ósmego września tysiąc dziewięćset trzydziestego dziewiątego roku rozegrała się tu bitwa radłowska, trwająca czterdzieści osiem godzin; spłonęło trzydzieści jeden budynków, a grupa około czternastu polskich żołnierzy, którzy zabarykadowali się w szkole, zginęła w płomieniach. Rocznice obchodzi się tu co roku.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w gminie Radłów?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Podaj sołectwo. Jest ich trzynaście plus samo miasto, a gmina rozciąga się na osiemdziesięciu sześciu kilometrach kwadratowych — z Głowu do Biskupic Radłowskich trasa wygląda zupełnie inaczej.",
        "Jeśli w Waszej wsi wypada akurat jakieś większe wydarzenie parafialne, powiedzcie o tym przy umawianiu. Wolę zaproponować inny termin, niż wpaść w środek przygotowań.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w gminie Radłów"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Lato nad wodą i jedzenie, które nie zdąży się zepsuć",
      paragraphs: [
        "W gminie są dwa zalewy — w samym Radłowie i w Niwce — oba powstałe w wyrobiskach po żwirowniach. Latem ściągają ludzi z całej okolicy, choć od razu zaznaczę uczciwie: kąpiel w nich jest oficjalnie zabroniona, bo nie ma tam nadzoru sanitarnego ani ratowniczego. Od dwa tysiące osiemnastego roku działa prywatny ośrodek z wyznaczoną strefą kąpielową i to jedyne miejsce, gdzie wolno wejść do wody.",
        "Niezależnie od tego lato nad wodą oznacza to samo: jedzenie wychodzi z domu. A jedzenie w upale ma jedną cechę, o której łatwo zapomnieć — psuje się szybciej, niż się myśli, zwłaszcza wszystko z majonezem i z jajkiem.",
        "Pierwsza rzecz, która tu pomaga, to sosy robione samemu. Domowy majonez, dressing na jogurcie, sos czosnkowy czy vinaigrette powstają w kilkadziesiąt sekund i mają skład, który się zna — a bez konserwantów lepiej wiedzieć, jak długo naprawdę wytrzymają.",
        "Druga to sałatki, w których nie ma nic, co się psuje. Z kaszy, z fasoli, z pieczonych warzyw, z papryki i ogórka — pokrojone równo w kilka sekund, wymieszane z dressingiem tuż przed wyjściem. Takie wytrzymują w torbie kilka godzin bez ryzyka.",
        "Trzecia dotyczy napojów. Lemoniada, kompot, mrożona herbata i sorbety z mrożonych owoców robią się szybciej, niż zajmuje wyprawa do sklepu, a przy kilkorgu dzieciach nad wodą znikają w tempie, które i tak przerasta każdy zapas.",
        "Rodzicom najmłodszych dzieci przydaje się przy tym to, że da się ugotować i zmiksować w jednym naczyniu, bez przelewania gorących rzeczy między naczyniami.",
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
    heading: "Radłów i gotowanie — fasola z doliny Dunajca i stół dla pielgrzymów",
    paragraphs: [
      "Gmina Radłów leży w obszarze objętym Chronioną Nazwą Pochodzenia fasoli Piękny Jaś z Doliny Dunajca. To najmocniejsze unijne oznaczenie, jakie może dostać produkt spożywczy, a fasola uzyskała je dwudziestego siódmego października dwa tysiące jedenastego roku, jako trzydziesty drugi polski produkt w tym systemie. Obszar chroniony obejmuje jedenaście gmin — obok Radłowa między innymi sąsiednie Wierzchosławice, Wojnicz i Żabno.",
      "Ta fasola różni się od zwykłej konkretnymi rzeczami, nie marketingiem: ma bardzo duże ziarno, cienką i miękką okrywę, wysoką zawartość białka i krócej się gotuje. W miejscowej gwarze mówi się na nią groch piechotny.",
      "Drugi rytm kuchenny wyznaczają tu pielgrzymki. Zabawa i Wał-Ruda przyjmują ludzi przez cały rok, a osiemnastego dnia każdego miesiąca przechodzi procesja Drogą cierpienia. Grupa pielgrzymów to zawsze pytanie, gdzie się zatrzyma i co zje.",
      "Poza tym gotuje się tu jak w całej dolinie Dunajca: zupy na kościach, ziemniaki, kapusta, kluski, ciasto drożdżowe, przetwory z ogrodu i sadu. Nic wyszukanego, wszystko z tego, co blisko.",
      "Dla urządzenia najsensowniejsze są tu sosy i dressingi robione bez konserwantów, sałatki, które wytrzymują upał, oraz fasola gotowana bez pilnowania. Czego nie zrobi, mówię wprost: nie ulepi pierogów i nie zastąpi wprawy. Zabiera tę część roboty, która jest wyłącznie czasem.",
    ],
  },

  districtsHeading: "Do których sołectw gminy Radłów dojeżdżam?",
  districtsParagraphs: [
    "Do wszystkich trzynastu i do samego miasta, bez żadnej dopłaty za odległość. Gmina liczy blisko dziewięć i pół tysiąca mieszkańców na osiemdziesięciu sześciu kilometrach kwadratowych, z czego w mieście mieszka około dwóch tysięcy siedmiuset.",
    "Sołectwa to: Biskupice Radłowskie, Wola Radłowska, Niwka, Zabawa, Wał-Ruda, Przybysławice, Zdrochec, Siedlec, Marcinkowice, Łęka Siedlecka, Sanoka, Głów i Brzeźnica.",
    "W Wał-Rudzie urodziła się błogosławiona Karolina Kózkówna, a w Zabawie, pod ołtarzem tamtejszego kościoła, stoi jej sarkofag. Obie miejscowości przyjmują pielgrzymów przez cały rok.",
    "W samym Radłowie warto zobaczyć dwór z parkiem liczącym około czterech hektarów, w którym od tysiąc dziewięćset czterdziestego piątego roku mieści się liceum, oraz słup graniczny z tysiąc czterysta pięćdziesiątego roku — kamienny graniastosłup z herbem kardynała Oleśnickiego, postawiony na granicy dóbr biskupich.",
    "Dojazd: kolei w gminie nie ma. Uwaga na mylącą nazwę — stacja Biadoliny Radłowskie leży poza gminą, w powiecie brzeskim. Główną osią jest droga wojewódzka dziewięćset siedemdziesiąt pięć, a do autostrady A4 jest stąd około siedmiu kilometrów. Do Tarnowa dwadzieścia kilometrów, mniej więcej pół godziny.",
  ],
  districts: [
    "Radłów",
    "Biskupice Radłowskie",
    "Wola Radłowska",
    "Niwka",
    "Zabawa",
    "Wał-Ruda",
    "Przybysławice",
    "Zdrochec",
    "Siedlec",
    "Marcinkowice",
    "Łęka Siedlecka",
    "Sanoka",
    "Głów",
    "Brzeźnica",
  ],

  nearbyHeading: "Wierzchosławice, Żabno i Wietrzychowice też są na mojej trasie",
  nearbyParagraphs: [
    "Gmina sąsiaduje z Wierzchosławicami, Żabnem, Wietrzychowicami, Wojniczem, Borzęcinem i Szczurową. Dojeżdżam do wszystkich gmin powiatu tarnowskiego bez doliczania kosztu dojazdu.",
    "Dwa rozróżnienia, bo obydwa bywają mylące. Po pierwsze: Brzeźnica to sołectwo tej gminy, a nie gmina Brzeźnica z powiatu wadowickiego. Po drugie: to Radłów w Małopolsce, a nie Radłów w województwie opolskim — obie gminy mają podobne strony internetowe i łatwo o pomyłkę.",
  ],
  nearbyTowns: [
    "Wierzchosławice",
    "Żabno",
    "Wietrzychowice",
    "Wojnicz",
    "Borzęcin",
    "Szczurowa",
    "Tarnów",
  ],

  about: blokOMnie("do gminy Radłów", "w powiecie tarnowskim"),

  faq: [
    {
      question: "Mieszkam w Zabawie albo w Wał-Rudzie. Dojedziesz?",
      answer:
        "Dojadę i nie doliczę za to ani złotówki. Wszystkie trzynaście sołectw traktuję tak samo jak samo miasto. Przy umawianiu podaj nazwę wsi — potrzebuję jej wyłącznie do zaplanowania trasy.",
    },
    ...faqWspolne("w gminie Radłów"),
    {
      question: "Przyjmujemy w domu pielgrzymów. Czy to zmienia sens takiego urządzenia?",
      answer:
        "Zmienia, i to na plus, choć nie z powodu, o którym się zwykle mówi. Przy większej grupie zysk nie polega na tym, że urządzenie ugotuje wszystko naraz — naczynie ma swoją pojemność. Polega na tym, że pracuje bez nadzoru i samo się wyłącza, więc przy jednej kuchni zwalnia Wam ręce. Do tego sosy, pasty i ciasta da się zrobić dzień wcześniej. Jeśli u Was zatrzymują się grupy, chętnie pokażę na prezentacji właśnie takie przepisy, a nie obiad na cztery osoby — wystarczy uprzedzić.",
    },
  ],

  geo: { lat: 50.0869, lng: 20.8531 },
};
