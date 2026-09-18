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
 * KOŻUCHÓW — gmina miejsko-wiejska w powiecie nowosolskim.
 * MIASTO 8 879, GMINA 15 214 (GUS 31.12.2024).
 * POWIERZCHNIA MIASTA 5,9 km², GMINY 179,2 km², 20 SOŁECTW.
 * Gmina zajmuje 23,25% powierzchni powiatu nowosolskiego.
 *
 * ⚠⚠ ROKU 1125 NIE UŻYWAM — podaje go tylko jedno źródło
 * wtórne i nie potwierdza go żaden serwis gminny.
 * PIERWSZA WZMIANKA 1273 r., w dokumencie księcia głogowskiego
 * KONRADA I, pod nazwą „COSUCHOV"; miasto było wtedy
 * „najprawdopodobniej w pełni ukształtowane".
 * Osada wyrosła w państwie plemiennym DZIADOSZAN.
 * Druga połowa XV w. — rezydencja ostatnich książąt głogowskich.
 * 1516 r. — Jan von Rechenberg przejmuje zamek.
 *
 * ⚠⚠ RZEKI ANI JEZIOR NIE PODAJĘ — hydrografii miasta
 * nie ustalono w żadnym źródle. LUKA ŚWIADOMA.
 *
 * ⚠⚠ CECHY I ROLNICTWO — PODSTAWA KĄTA:
 * Cechy średniowiecznego Kożuchowa: SUKIENNICY, TKACZE,
 * KUŚNIERZE, RZEŹNICY, KOWALE, STOLARZE I PIWOWARZY.
 * Połowa XV w. — prawo bicia własnej monety.
 * ⚠⚠ „ROLNICTWO OBEJMOWAŁO ZBOŻA, WINOROŚL I HODOWLĘ OWIEC."
 * TO JEST KOTWICA — HODOWLA OWIEC.
 * W końcu XIX w. odbywały się w mieście TRZY JARMARKI ROCZNE.
 * ⚠ KĄTA WINIARSKIEGO NIE UŻYWAM — ZAJĘTY. Winorośl podaję
 *   jako fakt historyczny, bez zachęty do alkoholu.
 * ⚠ WSPÓŁCZESNEGO ŚWIĘTA WINA W KOŻUCHOWIE NIE MA —
 *   sprawdzone, nie znaleziono. NIE WYMYŚLAM.
 *
 * WSPÓŁCZEŚNI PRODUCENCI: sad z certyfikacją, sklep
 * z produktami regionalnymi i kawiarenka pałacowa — wszystko
 * w SOLNIKACH (sołectwo gminy); pszczelarstwo w Kożuchowie;
 * hodowla alpak w Radwanowie.
 * ⚠ NAZW WŁASNYCH I NAZWISK NIE PODAJĘ.
 * ⚠⚠ SEROWARNI „QZKO" NIE PRZYPISUJĘ — adres wskazuje
 *   SIEDLISKO, osobną gminę powiatu nowosolskiego.
 * ⚠ WINNICY W CISOWIE NIE WYMIENIAM — przypisanie do gminy
 *   było wnioskowane, nie potwierdzone wprost.
 *
 * TURNIEJ RYCERSKI „OBLĘŻENIE KOŻUCHOWA 1476" — XXI edycja
 * 26–28 maja 2017 r., organizator Centrum Kultury „Zamek".
 * ⚠ AKTUALNEJ EDYCJI ANI DATY NIE PODAJĘ — niepotwierdzone.
 *
 * ZABYTKI: MURY OBRONNE z kamienia polnego, XIII/XIV w.,
 * do 8 m wysokości i do 2 m grubości; fosa miejscami 20 m
 * szeroka; trzy bramy: GŁOGOWSKA, KROŚNIEŃSKA, ŻAGAŃSKA.
 * ZAMEK — koniec XIV w., gotycki, na miejscu grodu
 * kasztelańskiego; dziś Centrum Kultury. Klasztor karmelitów
 * (XVII w.). RATUSZ — najstarszy z początku XIV w., SPŁONĄŁ
 * W 1488 r. KOŚCIÓŁ MATKI BOŻEJ GROMNICZNEJ — XIII w.
 * ⚠ OKREŚLENIA „unikat w skali światowej" (o murach)
 *   NIE POWTARZAM — to formuła promocyjna.
 *
 * KĄT: BARANINA I JAGNIĘCINA — mięso, które z polskich
 * kuchni wypadło najgłębiej.
 * Kąt od miasta, którego rolnictwo opierało się na zbożu,
 * winorośli i HODOWLI OWIEC, i którego cechy obejmowały
 * zarówno rzeźników, jak i kuśnierzy.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że owca dawała kiedyś dwie rzeczy naraz — wełnę i mięso
 *   — i że w polskiej kuchni domowej zostało z tego niewiele,
 * — ŻE BARANINA MA OPINIĘ MIĘSA O MOCNYM ZAPACHU i że ta
 *   opinia bierze się z jednej konkretnej rzeczy: z TŁUSZCZU,
 *   nie z mięsa,
 * — ŻE JAGNIĘCINA TO CO INNEGO NIŻ BARANINA — młode zwierzę
 *   ma smak łagodny i to jest najczęstsze nieporozumienie,
 * — CO ROBIĆ Z TŁUSZCZEM: przyciąć go mocniej, niż podpowiada
 *   odruch, bo to on niesie cały charakterystyczny zapach,
 * — ŻE TO MIĘSO LUBI TOWARZYSTWO WYRAZISTE: czosnek,
 *   rozmaryn, kwaśny owoc, jogurt — i że w kuchniach, w których
 *   jada się je na co dzień, nigdy nie podaje się go samego,
 * — PODZIAŁ JAK PRZY KAŻDYM MIĘSIE: udziec i karkówka
 *   do długiego pieczenia i duszenia, kotlety do krótkiego,
 * — ŻE NAJCZĘSTSZY BŁĄD TO PRZEDŁUŻENIE — jagnięcina
 *   trzymana za długo robi się sucha i wtedy rzeczywiście
 *   pachnie mocniej,
 * — ŻE TO NIE JEST MIĘSO NA CO DZIEŃ i nie udaję,
 *   że jest tanie — raz na jakiś czas, na niedzielę,
 * — CO Z TEGO ZOSTAJE PRAKTYCZNIE: że warto spróbować
 *   raz porządnie, zanim się uzna, że się nie lubi,
 * — UCZCIWIE: urządzenie nie upiecze udźca i nie zrobi
 *   skórki — to zadanie dla piekarnika,
 * — ale robi wszystko wokół: sos, marynatę, pastę
 *   czosnkowo-ziołową i dodatki, a przy tym mięsie dodatki
 *   są połową sprawy.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR. ⚠⚠ PRZY MIĘSIE
 *   PODWÓJNIE.
 * — ŻADNYCH PROPORCJI.
 * — ⚠⚠ ZERO TEMATÓW BEZPIECZEŃSTWA ŻYWNOŚCI I ZDROWIA.
 *   Zero „stopni wysmażenia" w liczbach, zero surowego mięsa
 *   jako zagrożenia, zero argumentów żywieniowych.
 * — ŻADNYCH NAZW FIRM, NAZWISK ANI CEN W ZŁOTÓWKACH.
 * — ZERO tematów hodowli przemysłowej i etyki jedzenia mięsa.
 * — ⚠ ZERO odniesień religijnych i kulturowych do baraniny
 *   (święta, obrzędy, kuchnie narodowe jako egzotyka).
 *   Piszę o niej jako o produkcie kulinarnym.
 * — ZERO ZACHĘTY DO ALKOHOLU przy wątku winorośli.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia i wyludniania.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Kurczak" (Kostrzyn
 * nad Odrą) i „wołowina" (Szprotawa) dotyczą innych gatunków.
 * „Dziczyzna" dotyczy mięsa z lasu. „Tłuste kontra chude"
 * dotyczy zawartości tłuszczu jako zasady ogólnej. „Mielone
 * mięso" dotyczy jednej postaci. Tutaj chodzi o BARANINĘ
 * I JAGNIĘCINĘ i o to, dlaczego z polskich domów wypadły.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE UŻYWAM roku 1125.
 * — NIE PODAJĘ rzeki ani jezior.
 * — NIE PRZYPISUJĘ gminie serowarni z Siedliska.
 * — NIE WYMIENIAM winnicy w Cisowie.
 * — NIE PODAJĘ aktualnej edycji turnieju rycerskiego.
 * — NIE POWTARZAM określenia „unikat w skali światowej".
 * — NIE PISZĘ o współczesnym święcie wina — nie ma takiego.
 * — NIE PRZYPISUJĘ gminie produktu z Listy Produktów
 *   Tradycyjnych — nie potwierdzono żadnego.
 * — NIE MYLĘ KOŻUCHOWA z KOŻUCHAMI ani KOŻUSZKAMI;
 *   powiat kożuchowski to jednostka HISTORYCZNA — dziś
 *   Kożuchów leży w powiecie nowosolskim. FAQ to prostuje.
 * — districts: brak potwierdzonych osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — miasto liczy blisko dziewięć tysięcy mieszkańców
 *   na 5,9 km², cała gmina ponad piętnaście tysięcy
 *   na 179,2 km², z dwudziestoma sołectwami, i zajmuje
 *   blisko jedną czwartą powierzchni powiatu nowosolskiego,
 * — pierwsza wzmianka pochodzi z 1273 r., z dokumentu księcia
 *   głogowskiego Konrada I, pod nazwą „Cosuchov”; osada
 *   wyrosła w plemiennym państwie Dziadoszan, w drugiej
 *   połowie XV w. była rezydencją ostatnich książąt
 *   głogowskich, a w 1516 r. zamek przejął Jan von Rechenberg,
 * — cechy średniowiecznego Kożuchowa to sukiennicy, tkacze,
 *   kuśnierze, rzeźnicy, kowale, stolarze i piwowarzy;
 *   w połowie XV w. miasto otrzymało prawo bicia własnej
 *   monety, a w końcu XIX w. odbywały się tu trzy jarmarki
 *   rocznie,
 * — tutejsze rolnictwo obejmowało zboża, winorośl i hodowlę
 *   owiec,
 * — dziś w Solnikach, jednym z sołectw gminy, działają pod
 *   jednym adresem sad z certyfikacją, sklep z produktami
 *   regionalnymi i kawiarenka pałacowa; w samym Kożuchowie
 *   jest pasieka, a w Radwanowie hodowla alpak,
 * — Centrum Kultury „Zamek” organizuje turniej rycerski
 *   „Oblężenie Kożuchowa 1476” — dwudziesta pierwsza edycja
 *   odbyła się 26–28 maja 2017 r.,
 * — mury obronne z kamienia polnego pochodzą z przełomu XIII
 *   i XIV w., sięgają ośmiu metrów wysokości i dwóch metrów
 *   grubości, a fosa bywa dwudziestometrowej szerokości;
 *   prowadziły przez nie trzy bramy: Głogowska, Krośnieńska
 *   i Żagańska,
 * — gotycki zamek z końca XIV w. stanął na miejscu grodu
 *   kasztelańskiego i mieści dziś Centrum Kultury; w XVII w.
 *   działał przy nim klasztor karmelitów; najstarszy ratusz
 *   z początku XIV w. spłonął w 1488 r., a kościół Matki Bożej
 *   Gromnicznej pochodzi z XIII w.
 */
export const KOZUCHOW: CityContent = {
  slug: "kozuchow",
  h1: "Thermomix Kożuchów – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Kożuchów — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Kożuchowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Kożuchów — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Kożuchowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Kożuchowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do całej gminy.",

  highlights: highlightyStandardowe("Kożuchów i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Zapach baraniny siedzi w tłuszczu, nie w mięsie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Kożuchowie – jak wygląda prezentacja?",
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
      id: "baranina",
      heading: "Zboża, winorośl i hodowla owiec — czyli o baraninie i jagnięcinie",
      paragraphs: [
        "Tak opisuje się dawne rolnictwo Kożuchowa: zboża, winorośl i hodowla owiec. W mieście działały przy tym cechy sukienników, tkaczy i kuśnierzy, ale też rzeźników — owca dawała bowiem dwie rzeczy naraz, wełnę i mięso, i jedno chodziło w parze z drugim.",
        "Z tej drugiej połowy zostało w polskiej kuchni domowej właściwie nic. Baranina wypadła z naszych stołów głębiej niż jakiekolwiek inne mięso i chcę napisać, dlaczego — bo powód jest konkretny i całkiem odwracalny.",
        "Baranina ma opinię mięsa o mocnym, trudnym zapachu. Ta opinia nie wzięła się znikąd, ale dotyczy jednej konkretnej rzeczy: tłuszczu. To on niesie cały charakterystyczny aromat, a nie samo mięso.",
        "Druga rzecz to nieporozumienie nazewnicze, przez które wiele osób odrzuca coś, czego nie próbowało. Jagnięcina to nie jest młodsza baranina w tym sensie, w jakim cielęcina jest młodszą wołowiną — to zupełnie inne doświadczenie smakowe. Młode zwierzę ma smak delikatny i łagodny, bez tej nuty, której wszyscy się obawiają.",
        "Praktyczny wniosek jest prosty: tłuszcz przyciąć mocniej, niż podpowiada odruch. Przy innych mięsach tłuszcz zostawiamy, bo daje smak. Tutaj zostawia się go mniej — i to jedno posunięcie zmienia charakter dania bardziej niż wszystkie przyprawy razem wzięte.",
        "Bo przypraw też trzeba, i to nie w charakterze maskowania. To mięso po prostu lubi wyraziste towarzystwo: czosnek, rozmaryn, kwaśny owoc, jogurt. W kuchniach, w których jada się je codziennie, nikt nie podaje go samego — zawsze jest przy nim coś ostrego, kwaśnego albo ziołowego. To nie jest sztuczka, tylko sposób podania wypracowany przez setki lat.",
        "Podział kawałków jest taki sam jak przy każdym mięsie. Udziec i karkówka do długiego pieczenia i duszenia — wybaczają, miękną, robią sos. Kotlety do krótkiego. Tu nie ma żadnej tajemnicy.",
        "Najczęstszy błąd to przedłużanie. Jagnięcina trzymana za długo robi się sucha, a wtedy — co jest paradoksalne — pachnie mocniej, bo zostaje w niej głównie to, czego chcieliśmy uniknąć. Krócej, niż podpowiada strach, to zwykle lepsza rada.",
        "Nie będę udawać, że to jest mięso na co dzień, bo nie jest — ani cenowo, ani zwyczajowo. To jest propozycja na niedzielę albo na raz na jakiś czas. Ale warto spróbować raz, porządnie zrobionego, zanim się zdecyduje, że się nie lubi. Bardzo wiele osób odrzuca baraninę na podstawie jednego złego doświadczenia sprzed lat.",
        "Teraz uczciwie o sprzęcie. Thermomix nie upiecze udźca i nie zrobi rumianej skórki — to zadanie dla piekarnika i nic tego nie zmieni.",
        "Robi natomiast wszystko wokół, a przy tym mięsie „wokół” to połowa sprawy. Pasta czosnkowo-ziołowa, marynata, sos do podania, dodatki z kwaśnym owocem — to jest dokładnie ten rodzaj drobnej, rozdrabnianej roboty, przy której urządzenie daje najwięcej, a której przy baraninie akurat najbardziej potrzeba.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Kożuchowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Powiedzcie przy umawianiu, czy lubicie wyraziste sosy i dodatki. Od tego zależy, co warto pokazać na miejscu.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Kożuchowie"),
    sekcjaRaty("w Kożuchowie"),
    {
      id: "rodzina",
      heading: "Thermomix dla kożuchowskiej rodziny",
      paragraphs: [
        "Samo miasto liczy blisko dziewięć tysięcy mieszkańców na niecałych sześciu kilometrach kwadratowych, a cała gmina ponad piętnaście tysięcy na stu siedemdziesięciu dziewięciu, z dwudziestoma sołectwami — to blisko jedna czwarta powierzchni powiatu nowosolskiego. Pierwsza wzmianka o Kożuchowie pochodzi z 1273 roku, z dokumentu księcia głogowskiego Konrada I, pod nazwą „Cosuchov”; osada wyrosła w plemiennym państwie Dziadoszan, w drugiej połowie XV wieku była rezydencją ostatnich książąt głogowskich, a w 1516 roku zamek przejął Jan von Rechenberg. Cechy średniowiecznego miasta to sukiennicy, tkacze, kuśnierze, rzeźnicy, kowale, stolarze i piwowarzy; w połowie XV wieku Kożuchów dostał prawo bicia własnej monety, a w końcu XIX wieku odbywały się tu trzy jarmarki rocznie. Tutejsze rolnictwo opierało się na zbożach, winorośli i hodowli owiec. Dziś w Solnikach, jednym z sołectw gminy, działają pod jednym adresem sad z certyfikacją, sklep z produktami regionalnymi i kawiarenka pałacowa; w samym Kożuchowie jest pasieka, a w Radwanowie hodowla alpak. Centrum Kultury „Zamek” organizuje turniej rycerski „Oblężenie Kożuchowa 1476” — dwudziesta pierwsza edycja odbyła się w maju 2017 roku. Mury obronne z kamienia polnego pochodzą z przełomu XIII i XIV wieku, sięgają ośmiu metrów wysokości i dwóch grubości, a fosa bywa dwudziestometrowa; prowadziły przez nie trzy bramy — Głogowska, Krośnieńska i Żagańska. Gotycki zamek z końca XIV wieku stanął na miejscu grodu kasztelańskiego i mieści dziś Centrum Kultury, najstarszy ratusz spłonął w 1488 roku, a kościół Matki Bożej Gromnicznej pochodzi z XIII wieku.",
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

  districtsHeading: "Do których części gminy Kożuchów dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta i do wszystkich dwudziestu sołectw. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać miejscowość i ulicę albo numer domu.",
  ],
  districts: [],

  nearbyHeading: "Poza Kożuchów też przyjadę",
  nearbyParagraphs: [
    "Nowa Sól, Szprotawa, Nowogród Bobrzański, Bytom Odrzański i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Nowa Sól", "Szprotawa", "Nowogród Bobrzański", "Bytom Odrzański"],

  about: blokOMnie("do Kożuchowa", "w Kożuchowie i całej gminie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Kożuchowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wszystkich dwudziestu sołectw. Dojazd jest bezpłatny tak samo jak sama prezentacja. Dla porządku: powiat kożuchowski to jednostka historyczna — dzisiaj Kożuchów należy do powiatu nowosolskiego.",
    },
    ...faqWspolne("w Kożuchowie"),
    {
      question: "Dlaczego baranina ma tak mocny zapach?",
      answer:
        "Bo niesie go tłuszcz, a nie samo mięso. Dlatego przy baraninie tłuszcz przycina się mocniej, niż podpowiada odruch — i to jedno posunięcie zmienia charakter dania bardziej niż wszystkie przyprawy razem wzięte.",
    },
    {
      question: "Czym różni się jagnięcina od baraniny?",
      answer:
        "Smakiem, i to bardzo. Młode zwierzę daje mięso delikatne i łagodne, bez nuty, której wszyscy się obawiają. Wiele osób odrzuca jagnięcinę na podstawie jednego złego doświadczenia z baraniną sprzed lat.",
    },
    {
      question: "Jak przyrządzić jagnięcinę, żeby wyszła?",
      answer:
        "Udziec i karkówkę do długiego pieczenia i duszenia, kotlety do krótkiego — jak przy każdym mięsie. Najczęstszy błąd to przedłużanie: jagnięcina trzymana za długo robi się sucha i wtedy pachnie mocniej. I zawsze coś wyrazistego obok: czosnek, rozmaryn, kwaśny owoc, jogurt.",
    },
  ],

  geo: { lat: 51.7442, lng: 15.5878 },
};
