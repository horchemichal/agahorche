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
 * ZAKOPANE — gmina miejska, stolica powiatu tatrzańskiego.
 * 25 100 mieszkańców (31.12.2024) na 84,3 km².
 *
 * OŚ STRONY: MIASTO, KTÓRE NIE MA GDZIE ROSNĄĆ ANI GDZIE MIESZKAĆ.
 * Świadomie NIE Krupówki, NIE skocznia, NIE „zimowa stolica Polski”.
 * To strona dla LUDZI, KTÓRZY TU MIESZKAJĄ, a nie dla turystów —
 * i to jest jedyny sposób, żeby nie utonąć w konkurencji na frazy
 * turystyczne, gdzie i tak nie mamy czego szukać.
 *
 * Twarde liczby, na których stoi ta strona:
 *   — 60,2% powierzchni miasta to obszary chronione,
 *   — ok. 34,9 tys. zł/m² średniej ofertowej (lipiec 2026),
 *   — przeciętne wynagrodzenie 7 423 zł brutto (86% średniej krajowej),
 *   — 32,9% samozatrudnionych żyje z zakwaterowania i gastronomii.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — POWIERZCHNIA 84,3 km² (8 426 ha). Lesistość 51,6%.
 *   OBSZARY CHRONIONE 5 073,72 ha = 60,2% powierzchni miasta
 *   (GUS BDL 2025 za poland.gg),
 * — PLANOWANIE: 33 obowiązujące plany miejscowe, 2 uchylone przez sąd;
 *   studium z 1999 r. wygasa, plan ogólny obowiązkowy od 1.07.2026.
 *   Burmistrz Łukasz Filipowicz ostrzega przed paraliżem inwestycyjnym,
 * — MIESZKANIA: ok. 34,9 tys. zł/m² (+12% r/r), najdroższe powyżej
 *   50 tys. zł/m² — zestawienie 24tp.pl z 21.07.2026.
 *   ⚠️ INNE SERWISY PODAJĄ ok. 21 tys. zł/m². Podaję z datą i źródłem.
 *   Ponad 500 mieszkań komunalnych i socjalnych; w 2026 r. oddano
 *   ponad 50 lokali przy ul. Kamieniec,
 * — WYNAGRODZENIE 7 423 zł brutto (2024) = 86% średniej krajowej,
 * — DEMOGRAFIA: 25 100 mieszkańców (31.12.2024, GUS); dwie dekady
 *   wcześniej ponad 29 000. W 2024 r.: 152 urodzenia, 294 zgony
 *   (−142), saldo migracji ogólne −23,
 * — GOSPODARKA: 6 649 podmiotów, 6 476 mikrofirm, 4 868
 *   samozatrudnionych. Wśród samozatrudnionych: zakwaterowanie
 *   i gastronomia 32,9%, handel 12,8%, transport 9,8%, budownictwo
 *   6,9%. Bezrobocie rejestrowane 8,0% (2024). W 2024 r. PO RAZ
 *   PIERWSZY więcej wyrejestrowań firm niż rejestracji,
 * — TURYSTYKA: wejścia do TPN w 2025 r. — ponad 5,2 mln.
 *   Turyści zagraniczni 239 753 (+13,9% r/r), noclegi udzielone
 *   cudzoziemcom 605 740,
 * — PIEKARNIA SZYMONEK (Społem Zakopane sp. z o.o.),
 *   ul. Chyców Potok 26 — chleb pasterski i żytni, modernizacja
 *   produkcji 2022–2023, zaopatruje sklepy, hotele i pensjonaty.
 *   To jedyny zweryfikowany producent żywności w mieście,
 * — 57. MIĘDZYNARODOWY FESTIWAL FOLKLORU ZIEM GÓRSKICH,
 *   21–27 sierpnia 2026 r., Dolna Równia Krupowa,
 * — STYL ZAKOPIAŃSKI, Stanisław Witkiewicz: Koliba (1892–93),
 *   Oksza (1894–95), Pod Jedlami (1897), kaplica w Jaszczurówce
 *   (1904–07), Muzeum Tatrzańskie (1913–24).
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — DZIELENIA 5,2 MLN PRZEZ 25 TYS. To wejścia do PARKU, nie turyści
 *   w mieście, i część z nich to te same osoby wielokrotnie.
 *   NIE ROBIĆ z tego wskaźnika „turystów na mieszkańca”,
 * — LICZBY MIESZKAŃ W NAJMIE KRÓTKOTERMINOWYM. Burmistrz mówi
 *   o „większości kupowanych inwestycyjnie”, ale liczby nie ma,
 * — LICZBY MIEJSC NOCLEGOWYCH. Niedostępna,
 * — TWIERDZENIA, ŻE MŁODZI WYPROWADZAJĄ SIĘ DO NOWEGO TARGU
 *   I BIAŁEGO DUNAJCA. Kierunek niepotwierdzony; przy Białym Dunajcu
 *   dane wręcz temu przeczą (tam saldo migracji też jest ujemne),
 * — LICZBY WILLI W STYLU ZAKOPIAŃSKIM ani tezy o wpływie na dzisiejsze
 *   kuchnie. Niepotwierdzone,
 * — WPISU NA LISTĘ PRODUKTÓW TRADYCYJNYCH. Nie potwierdzono żadnego
 *   przypisanego wprost Zakopanemu,
 * — KOŁA GOSPODYŃ. W granicach miasta niepotwierdzone. Zakopane
 *   jest gminą miejską,
 * — LICZBY POŁĄCZEŃ KOLEJOWYCH I CZASU PRZEJAZDU. Dane z 2021 r.
 *   (EIC Tatry 2 h 56 min) są nieaktualne. Piszę opisowo
 *   i odsyłam do rozkładu.
 *
 * PUŁAPKI:
 * — OSCYPEK, BRYNDZA PODHALAŃSKA I REDYKOŁKA NIE SĄ ZAKOPIAŃSKIE.
 *   Obszar chronionych nazw obejmuje całe Podhale i część Śląska.
 *   Kościelisko, Poronin i Bukowina mają do nich takie samo prawo.
 *   Strona mówi o tym wprost,
 * — CO LEŻY POZA ZAKOPANEM: Dolina Kościeliska i Chochołowska —
 *   gmina Kościelisko. Termy Bukovina i Bania — Bukowina Tatrzańska.
 *   Chochołów i Termy Chochołowskie — Czarny Dunajec.
 *   Morskie Oko — gmina Bukowina Tatrzańska,
 * — KUŹNICE I KRZEPTÓWKI SĄ W ZAKOPANEM, mimo że brzmią
 *   „podtatrzańsko”,
 * — WILLA POD JEDLAMI jest w Zakopanem (Koziniec), NIE w Kościelisku,
 * — ZAKOPANE NIE MA FORMALNYCH JEDNOSTEK POMOCNICZYCH. Nazwy
 *   dzielnic są zwyczajowe i tak je opisuję,
 * — SPADEK LUDNOŚCI ma dwie przyczyny naraz: ujemny przyrost
 *   naturalny (−142) i ujemne saldo migracji (−23). Nie przedstawiać
 *   wyprowadzek jako jedynej.
 */

export const ZAKOPANE: CityContent = {
  slug: "zakopane",
  h1: "Thermomix Zakopane – prezentacja, zakup i doradztwo",
  seoTitle: "Przedstawiciel Thermomix Zakopane — prezentacja i cena",
  seoDescription:
    "Thermomix w Zakopanem: bezpłatna prezentacja TM7 u Ciebie w kuchni, cena i raty 0,6%. Dojeżdżam na Olczę, Harendę i Cyrhlę. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Zakopane — zobacz TM7 na żywo u siebie w kuchni",
  ogDescription:
    "Bezpłatna prezentacja Thermomixa TM7 w Zakopanem. Gotujemy razem u Ciebie, ratę liczymy na miejscu, dojazd bez dopłat.",

  lead: "Do Zakopanego przyjeżdżam z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni — na Twoim blacie, z produktami, które przywożę. Prezentacja jest bezpłatna, trwa około dwóch godzin i do niczego nie zobowiązuje. Umawiam się też poza sezonem i o porach, które pasują do pracy w gastronomii.",

  highlights: highlightyStandardowe("całe miasto, bez dopłat"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-4.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption:
      "Prezentacja odbywa się u Ciebie w kuchni — na Twoim blacie i Twoich naczyniach.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Zakopanem – jak wygląda prezentacja?",
      paragraphs: [
        "Przyjeżdżam z urządzeniem, ze składnikami i z naczyniami, gdyby były potrzebne. Ty nie kupujesz nic i niczego nie przygotowujesz — wystarczy wolny kawałek blatu, gniazdko i godzina spokoju. Tak samo w centrum, jak na Olczy, Harendzie czy Toporowej Cyrhli.",
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
      heading: "Miasto, w którym sześć hektarów na dziesięć jest pod ochroną",
      paragraphs: [
        "Ta strona jest dla ludzi, którzy w Zakopanem mieszkają, a nie dla tych, którzy tu przyjeżdżają. Dlatego nie będzie o Krupówkach ani o skoczni — o tym pisze pół internetu i nie ma tam czego dodać. Będzie o tym, jak się tu żyje i gotuje, kiedy autokary odjadą.",
        "Zacznijmy od liczby, która tłumaczy wszystko inne: obszary chronione zajmują sześćdziesiąt i dwie dziesiąte procent powierzchni miasta. Sześć hektarów na dziesięć jest wyłączonych z zabudowy z mocy ochrony przyrody, a lasy pokrywają ponad połowę Zakopanego. To miasto po prostu nie ma dokąd rosnąć — i nie jest to kwestia polityki, tylko granic parku narodowego.",
        "Skutek widać w cenach. Według zestawienia z lipca dwa tysiące dwudziestego szóstego roku metr kwadratowy mieszkania kosztuje tu średnio blisko trzydzieści pięć tysięcy złotych, a najdroższe przekraczają pięćdziesiąt. Zaznaczę uczciwie, że inne serwisy podają liczby wyraźnie niższe, więc to jest rząd wielkości, a nie wyrocznia. Przeciętne wynagrodzenie w powiecie to natomiast siedem tysięcy czterysta złotych brutto — osiemdziesiąt sześć procent średniej krajowej.",
        "Zestawiając jedno z drugim: roczna pensja brutto kupuje tu mniej więcej dwa i pół metra mieszkania. To jest, moim zdaniem, najkrótszy opis tego, na czym polega dzisiejsze Zakopane.",
        "Miasto się przy tym kurczy. Mieszkańców jest dziś dwadzieścia pięć tysięcy, dwie dekady temu było ponad dwadzieścia dziewięć. W samym dwa tysiące dwudziestym czwartym roku urodziły się sto pięćdziesiąt dwie osoby, a zmarły dwieście dziewięćdziesiąt cztery. Saldo migracji też jest ujemne, choć nieznacznie. Przyczyny są więc dwie naraz i nie warto zwalać wszystkiego na ceny mieszkań.",
        "Jest jeszcze jedna liczba, która najmocniej wpływa na to, co dzieje się w tutejszych kuchniach: prawie co trzeci samozatrudniony w Zakopanem prowadzi działalność w zakwaterowaniu albo gastronomii. Trzydzieści dwa i dziewięć dziesiątych procenta. To znaczy, że w bardzo wielu domach ktoś żywi obcych ludzi zawodowo — i wraca do własnej kuchni wtedy, kiedy inni już dawno pojedli.",
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Zakopanem?",
      paragraphs: [
        "Zadzwoń albo napisz SMS — termin ustalamy zwykle w jednej krótkiej rozmowie. Jeśli wolisz nie dzwonić, zostaw kontakt w formularzu na dole strony i podaj porę, o której mogę oddzwonić.",
        "Jeśli pracujesz w gastronomii albo prowadzisz noclegi, powiedz to od razu. Przedpołudnie w dzień roboczy jest dla mnie równie normalnym terminem jak wieczór, a listopad i kwiecień bywają tu spokojniejsze niż lipiec. Dopasowuję się do sezonu, nie odwrotnie.",
        "Powiedz też, w której części miasta mieszkasz. Zakopane nie ma formalnych dzielnic, ale nazwy są w użyciu i bardzo pomagają: Olcza, Harenda, Cyrhla, Antałówka, Chramcówki, Krzeptówki. Dojazd wszędzie jest bez dopłaty.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Zakopanem"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Kiedy gotujesz zawodowo, a potem wracasz do siebie",
      paragraphs: [
        "W mieście, w którym co trzeci samozatrudniony żyje z zakwaterowania i gastronomii, bardzo wiele osób ma z jedzeniem stosunek zawodowy. Śniadania dla gości, obiady w restauracji, kuchnia pensjonatu. A potem trzeba wrócić do domu i ugotować jeszcze raz — dla siebie i dla swoich.",
        "To jest sytuacja, o której przy urządzeniach kuchennych nie mówi się w ogóle, a w Zakopanem jest bardzo częsta. Po dwunastu godzinach przy patelni nikt nie ma ochoty na kolejne stanie w kuchni. Efekt bywa taki, że własna rodzina je najgorzej ze wszystkich — byle co, na szybko, na stojąco.",
        "Urządzenie, które gotuje bez obecności, zmienia tu jedną konkretną rzecz: obiad dla domu może powstać, kiedy Ciebie w domu nie ma. Wstawiasz rano przed wyjściem albo dziecko wstawia po szkole, bo przepis prowadzi krok po kroku i nie ma czego przypalić. Nie chodzi o oszczędność czasu — chodzi o to, żeby w domu też jedzono porządnie.",
        "Druga rzecz to sezonowość, bardzo tu wyraźna. Zima i lato to praca po kilkanaście godzin, listopad i kwiecień to nagle wolne. W sezonie sprawdza się gotowanie z zapasem: podwójna porcja zupy, sos na kilka dni, pasty kanapkowe, chleb — robione seriami w jednym naczyniu, poza sezonem albo w jeden spokojniejszy dzień.",
        "Trzecia rzecz dotyczy mieszkań. Przy takich cenach metra ludzie mieszkają tu ciasno, a kuchnie bywają małe. Jedno naczynie zamiast blendera, malaksera, miksera i trzech garnków to w małej kuchni realna różnica — nie w czasie, tylko w miejscu na blacie.",
        "Rodzicom najmłodszych dzieci przydaje się to, że da się ugotować i zmiksować bez przelewania gorących rzeczy między naczyniami. Starsze dzieci często zaczynają gotować same — a w domu, w którym rodzice pracują w sezonie do późna, to bywa realnie potrzebne.",
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
    heading: "Zakopane i gotowanie — oscypek nie jest zakopiański",
    paragraphs: [
      "Zacznę od sprostowania, bo to jedno z tych przekonań, które wydają się oczywiste, a nie są. Oscypek, bryndza podhalańska i redykołka mają chronione nazwy pochodzenia w Unii Europejskiej, ale obszar tej ochrony to całe Podhale i część Śląska. Kościelisko, Poronin, Bukowina Tatrzańska i kilkadziesiąt innych gmin mają do nich dokładnie takie samo prawo jak Zakopane. To nie jest produkt tego miasta.",
      "Nie znalazłam też żadnego wpisu przypisanego wprost Zakopanemu na ministerialnej Liście Produktów Tradycyjnych. Mogłabym w to miejsce wstawić kwaśnicę albo moskole i pewnie nikt by nie sprawdził. Nie zrobię tego — te dania są podhalańskie, a nie zakopiańskie, i piszę o nich na stronach gmin, w których faktycznie coś je wyróżnia.",
      "To, co w mieście naprawdę produkuje jedzenie, to piekarnia przy ulicy Chyców Potok, prowadzona przez tutejsze Społem — chleb pasterski i żytni, po modernizacji produkcji w latach dwa tysiące dwadzieścia dwa i trzy. Zaopatruje sklepy, hotele i pensjonaty. W mieście liczącym dwadzieścia pięć tysięcy mieszkańców, gdzie prawie wszystko jest usługą, wytwórnia żywności to rzecz warta odnotowania.",
      "Co z tego wynika dla urządzenia? Rzecz nieoczywista: w Zakopanem najbardziej przydaje się ono nie przy daniach regionalnych, tylko przy codziennych. Zupa, sos, danie jednogarnkowe, pasta kanapkowa, ciasto — rzeczy, które gotuje się dla siebie po pracy, a nie dla gościa. Bo góralską kuchnią zajmują się tu zawodowo restauracje, a w domu je się zwyczajnie, jak wszędzie.",
      "Jednej rzeczy nie zrobi i wolę to powiedzieć wprost: nie zrobi oscypka. Sera z owczego mleka nie da się uzyskać elektrycznie — robi go bacówka, podpuszczka i wędzenie. Za to bryndza w paście, sos serowy czy zupa z serem to już zwykłe rozdrabnianie i podgrzewanie w stałej temperaturze, czyli dokładnie to, do czego urządzenie służy.",
    ],
  },

  districtsHeading: "Gdzie w Zakopanem dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, bez żadnej dopłaty za odległość. Zakopane nie ma formalnych jednostek pomocniczych, więc nazwy poniżej są zwyczajowe — ale w codziennym użyciu są dokładniejsze niż adres i o nie proszę przy umawianiu.",
    "Miasto zajmuje osiemdziesiąt cztery kilometry kwadratowe, z czego ponad połowa to lasy, a sześćdziesiąt procent to obszary chronione. Zabudowa mieści się więc na stosunkowo niewielkim skrawku i dojazd w dowolny jej punkt zajmuje kilkanaście minut.",
    "Warto od razu wyjaśnić, co do Zakopanego nie należy, bo pomyłki są nagminne. Dolina Kościeliska i Dolina Chochołowska leżą w gminie Kościelisko. Termy Bukovina i Terma Bania — w gminie Bukowina Tatrzańska, podobnie jak Morskie Oko. Chochołów i Termy Chochołowskie to gmina Czarny Dunajec. Za to Kuźnice i Krzeptówki są w Zakopanem, choć brzmią jak osobne wsie.",
    "Dojazd z Krakowa: koleją przez Skawinę, Suchą Beskidzką i Nowy Targ albo zakopianką. Świadomie nie podaję liczby połączeń ani czasu przejazdu, bo dane, do których dotarłam, są sprzed kilku lat, a rozkład i remonty zmieniają się co sezon — sprawdź aktualny rozkład. O zakopiance powiem tylko tyle, że w szczycie potrafi zająć trzy godziny i każdy, kto tu mieszka, dobrze o tym wie.",
  ],
  districts: [
    "Centrum",
    "Olcza",
    "Harenda",
    "Toporowa Cyrhla",
    "Antałówka",
    "Chramcówki",
    "Kasprusie",
    "Bystre",
    "Gładkie",
    "Spyrkówka",
    "Krzeptówki",
    "Kuźnice",
  ],

  nearbyHeading: "Kościelisko, Poronin i Biały Dunajec też są na mojej trasie",
  nearbyParagraphs: [
    "Do Kościeliska, Poronina, Białego Dunajca i Bukowiny Tatrzańskiej mam stąd po kilkanaście minut, dalej są Szaflary i Nowy Targ. Do żadnej z tych gmin nie doliczam kosztu dojazdu.",
    "Jeśli mieszkasz na obrzeżach i nie masz pewności, czy to jeszcze Zakopane, czy już Kościelisko albo Poronin — po prostu zapytaj. Dla mnie to jedna trasa i dla ceny nie ma to żadnego znaczenia.",
  ],
  nearbyTowns: [
    "Kościelisko",
    "Poronin",
    "Biały Dunajec",
    "Bukowina Tatrzańska",
    "Szaflary",
    "Nowy Targ",
    "Kraków",
  ],

  about: blokOMnie("do Zakopanego", "w powiecie tatrzańskim"),

  faq: [
    {
      question: "Pracuję w gastronomii, mam sezon. Kiedy da się umówić?",
      answer:
        "Kiedy Ci pasuje, łącznie z przedpołudniem w dzień roboczy i z listopadem albo kwietniem, gdy w Zakopanem jest spokojniej. To najczęstszy scenariusz w tym mieście — prawie co trzeci samozatrudniony żyje tu z zakwaterowania i gastronomii — więc mam go rozpracowany. Powiedz po prostu, kiedy masz spokojne dwie godziny.",
    },
    ...faqWspolne("w Zakopanem"),
    {
      question: "Czy oscypek to produkt zakopiański?",
      answer:
        "Nie i warto to rozróżnić. Oscypek, bryndza podhalańska i redykołka mają chronione nazwy pochodzenia w Unii Europejskiej, ale obszar ochrony obejmuje całe Podhale i część Śląska — Kościelisko, Poronin czy Bukowina mają do nich takie samo prawo. Z samego Zakopanego nie znalazłam żadnego wpisu na ministerialnej Liście Produktów Tradycyjnych.",
    },
    {
      question: "Mam małą kuchnię w mieszkaniu. Zmieści się?",
      answer:
        "Zmieści, i akurat w Zakopanem to pytanie pada często, bo przy tutejszych cenach metra mieszkania bywają ciasne. Urządzenie zajmuje mniej więcej tyle co czajnik z podstawką, a zastępuje blender, malakser, mikser i część garnków — więc na małym blacie zwykle zwalnia miejsce, zamiast je zabierać. Na prezentacji zobaczysz to na własnym blacie, nie na zdjęciu.",
    },
  ],

  geo: { lat: 49.2992, lng: 19.9496 },
};
