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
 * BLEDZEW — ⚠ WIEŚ GMINNA (nie miasto), powiat międzyrzecki,
 * woj. lubuskie. Prawa miejskie miał w latach 1433–?; dziś
 * jest wsią i siedzibą gminy wiejskiej.
 * WIEŚ 1 024 mieszkańców (NSP 2021 — GUS nie publikuje
 * danych rocznych dla wsi).
 * GMINA 3 873 (GUS 31.12.2024), 247,5 km².
 * ⚠⚠ W TEKŚCIE PISZĘ „WIEŚ" I „GMINA", NIGDY „MIASTO".
 *
 * ⚠ HOMONIM: BLEDZEW ≠ BLEDZEWO. FAQ to rozróżnia.
 *
 * HISTORIA:
 * — 1235 — pierwsza wzmianka (fundacja kościoła),
 * — 1318 — margrabia brandenburski Waldemar nadaje wieś
 *   cystersom z Zemska,
 * — 1433 — prawa miejskie,
 * — 1485 — Kazimierz Jagiellończyk ustanawia trzy jarmarki
 *   roczne i targi tygodniowe,
 * — 1565 — rozszerzenie przywilejów przez Zygmunta Augusta,
 * — 1592 — pożar drewnianych zabudowań klasztornych,
 *   odbudowa murowana (kościół 1596, krużganki po 1607),
 * — ⚠ DATY KASATY OPACTWA NIE PODAJĘ — źródła rozbieżne
 *   (1835/1836), brak potwierdzenia.
 *
 * ⚠⚠ ELEKTROWNIA WODNA BLEDZEW — PODSTAWA KĄTA:
 * — projekt 1905 (berlińska firma Havested und Contag),
 *   budowa od 1906, uruchomienie koniec 1910, odbiór
 *   15.05.1911,
 * — ⚠⚠ ORYGINALNE MASZYNY Z 1910 r. DO DZIŚ PRACUJĄ
 *   W HALI,
 * — ⚠⚠ PRACUJE JAKO ELEKTROWNIA SZCZYTOWA — czyli
 *   gromadzi wodę i oddaje moc wtedy, gdy jest potrzebna.
 *   TO JEST KOTWICA.
 * — w hali maszyn kolekcja urządzeń z innych elektrowni
 *   regionu, gromadzona od końca lat 80.,
 * — zespół wpisany do rejestru zabytków techniki.
 * ⚠ MOCY ZAINSTALOWANEJ W MW NIE PODAJĘ — nieustalona.
 * ⚠ NAZW FIRM WSPÓŁCZESNYCH NIE PODAJĘ. Nazwy historyczne
 *   projektanta pomijam w tekście — zostają w notatce.
 *
 * ZALEW BLEDZEWSKI: powstał przez spiętrzenie OBRY
 * (⚠⚠ NIE ODRY — ten błąd krąży po streszczeniach),
 * ok. 127 ha, długość ok. 8 km.
 *
 * ⚠⚠ LISTA PRODUKTÓW TRADYCYJNYCH — POTWIERDZONE:
 * „Mieszanka rybna w zalewie octowej", woj. lubuskie,
 * kategoria produkty rybołówstwa, WPIS 24 STYCZNIA 2014 r.
 * Produkt POCHODZI Z GMINY BLEDZEW; ryby z jeziora Cisie,
 * jeziora Chycińskiego i Zalewu Bledzewskiego.
 * ⚠⚠ WYMIENIAM TEN FAKT W BLOKU O MIEJSCOWOŚCI, ALE
 *   NIE ROBIĘ Z NIEGO TEMATU — kąty „ryba" i „MARYNATY
 *   I ZALEWY" SĄ ZAJĘTE. TWARDA GRANICA.
 * ⚠ WIGILII NIE ROBIĘ TEMATEM — kąt świąteczny zajęty.
 *
 * KĄT: MOC — dlaczego mocniejszy ogień nie gotuje szybciej.
 * Kąt od elektrowni wodnej pracującej nad Obrą od 1910 roku
 * na oryginalnych maszynach, w trybie szczytowym: moc nie
 * jest tym samym co efekt, a jej podkręcanie nie zawsze
 * cokolwiek daje.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najczęstszy odruch w kuchni — „podkręcę, to szybciej
 *   będzie" — jest w połowie przypadków bezużyteczny,
 *   a w drugiej połowie szkodliwy,
 * — ⚠⚠ KLUCZOWA RZECZ: WRZĄCA WODA MA JEDNĄ TEMPERATURĘ
 *   I MOCNIEJSZY OGIEŃ JEJ NIE PODNIESIE. Pod dużym
 *   płomieniem woda po prostu szybciej paruje — ziemniaki
 *   gotują się dokładnie tyle samo. To jest fakt fizyczny,
 *   nie ustawienie urządzenia,
 * — ŻE MOC MA ZNACZENIE TYLKO NA DWÓCH ETAPACH:
 *   przy DOPROWADZANIU DO WRZENIA i przy RUMIENIENIU,
 * — ŻE PRZY RUMIENIENIU DZIAŁA ODWROTNA PUŁAPKA: zbyt mocny
 *   ogień daje ciemną skórkę i surowy środek,
 * — ŻE NAJWIĘKSZY WPŁYW NA CZAS MA NIE MOC, TYLKO TRZY
 *   INNE RZECZY: przykrywka, wielkość kawałków i ilość
 *   jedzenia w naczyniu,
 * — ŻE PRZYKRYWKA JEST NAJTAŃSZYM PRZYSPIESZACZEM, JAKI
 *   ISTNIEJE, a najczęściej pomijanym,
 * — ŻE ZA DUŻO JEDZENIA NARAZ ZABIJA MOC SKUTECZNIEJ NIŻ
 *   ZMNIEJSZENIE PŁOMIENIA — zimne składniki wrzucone
 *   hurtem wychładzają patelnię i zaczyna się duszenie,
 * — ŻE PO ZAGOTOWANIU NALEŻY ZMNIEJSZYĆ: burzliwe wrzenie
 *   rozbija ziemniaki i makaron, mętni wywar i nic
 *   nie przyspiesza,
 * — ŻE „NA MAŁYM OGNIU" TO NIE OSZCZĘDNOŚĆ, TYLKO TECHNIKA
 *   — przy duszeniu i wywarach jest jedynym sposobem,
 *   żeby wyszło dobrze,
 * — UCZCIWIE: urządzenie nie łamie fizyki i nie ugotuje
 *   wody goręcej, niż się da,
 * — ale usuwa całą tę klasę błędów: skoro temperatura jest
 *   ustawiona i utrzymywana, nie ma czego podkręcać
 *   ani czego zapominać zmniejszyć.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ URZĄDZENIA.
 * — ⚠ TEMPERATURY WRZENIA W LICZBACH NIE PODAJĘ — piszę
 *   „wrząca woda ma jedną temperaturę", bez stopni.
 * — ŻADNYCH CZASÓW ANI PROPORCJI.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH.
 * — ŻADNYCH NAZW FIRM.
 * — ⚠ ZERO porad dotyczących rachunków za prąd i gaz —
 *   to prowadziłoby do tematu kosztów życia. TWARDA GRANICA.
 *
 * ⚠ ETYKA — LUBUSKIE:
 * — ZERO tematów wojennych i granicznych.
 * — ZERO wysiedleń i przesiedleń po 1945 r.
 * — ZERO „Ziem Odzyskanych" jako tematu politycznego.
 * — ZERO konfliktów narodowościowych i wyznaniowych.
 * — ZERO bezrobocia, biedy i wyludniania.
 * — ⚠ UTRATY PRAW MIEJSKICH I KASATY OPACTWA NIE ROZWIJAM.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH — OBOWIĄZKOWE:
 * — „prąd" i „święta. Elektrownia jest zakładem pracującym
 *   bez przerwy" dotyczą ZASILANIA I PRACY ZAKŁADU.
 *   Tutaj elektrownia jest WYŁĄCZNIE KOTWICĄ OBRAZOWĄ.
 * — „CIEPŁO, KTÓRE ZOSTAJE" dotyczy DOCHODZENIA DANIA
 *   PO WYŁĄCZENIU.
 * — „RÓŻNICA TEMPERATUR — ZIMNE DO GORĄCEGO" dotyczy
 *   ŁĄCZENIA SKŁADNIKÓW O RÓŻNEJ TEMPERATURZE.
 * — „POŚPIECH" (Torzym) dotyczy PODZIAŁU CZYNNOŚCI
 *   NA ŚCIŚLIWE I NIEŚCIŚLIWE.
 * TUTAJ chodzi WYŁĄCZNIE O MOC GRZANIA — o to, kiedy
 * jej podkręcenie cokolwiek zmienia, a kiedy nie zmienia nic.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ mocy elektrowni ani daty kasaty opactwa.
 * — NIE PISZĘ „Odra" — to OBRA.
 * — NIE ROBIĘ TEMATU z produktu rybnego z LPT.
 * — NIE NAZYWAM Bledzewa miastem.
 * — NIE MYLĘ BLEDZEWA z BLEDZEWEM jako nazwą podobną.
 * — districts: brak osiedli. PUSTA TABLICA.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — pierwsza wzmianka o Bledzewie pochodzi z 1235 r.,
 *   w 1318 r. margrabia Waldemar nadał wieś cystersom
 *   z Zemska, w 1433 r. miejscowość otrzymała prawa miejskie,
 *   a w 1485 r. Kazimierz Jagiellończyk ustanowił tu trzy
 *   jarmarki roczne i targi tygodniowe; w 1592 r. drewniane
 *   zabudowania klasztorne spłonęły i odbudowano je
 *   murowane — kościół w 1596 r., krużganki po 1607 r.,
 * — elektrownia wodna na Obrze została zaprojektowana
 *   w 1905 r., budowano ją od 1906 r., uruchomiono pod koniec
 *   1910 r., a odebrano 15 maja 1911 r.; oryginalne maszyny
 *   z 1910 r. pracują w hali do dziś, zakład działa jako
 *   elektrownia szczytowa, a zespół jest wpisany do rejestru
 *   zabytków techniki; w hali maszyn gromadzona jest od końca
 *   lat osiemdziesiątych kolekcja urządzeń z innych
 *   elektrowni regionu,
 * — Zalew Bledzewski powstał przez spiętrzenie Obry, ma około
 *   127 ha powierzchni i około ośmiu kilometrów długości,
 * — na Liście Produktów Tradycyjnych figuruje pochodząca
 *   z gminy Bledzew „mieszanka rybna w zalewie octowej",
 *   wpisana 24 stycznia 2014 r.,
 * — kościół parafialny jest późnogotycki, z XV w., pocysterski;
 *   remontowano go w latach 1881–1882, a wewnątrz znajduje się
 *   barokowe wyposażenie przeniesione z kościoła poklasztornego.
 */
export const BLEDZEW: CityContent = {
  slug: "bledzew",
  h1: "Thermomix Bledzew – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Bledzew — przedstawiciel, prezentacja i cena",
  seoDescription:
    "Thermomix w Bledzewie: bezpłatna prezentacja TM7 u Ciebie w domu, cała gmina. Dojazd bezpłatny. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Bledzew — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Bledzewie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Bledzewa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całej gminy.",

  highlights: highlightyStandardowe("Bledzew"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Wrząca woda ma jedną temperaturę — mocniejszy ogień jej nie podniesie.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Bledzewie – jak wygląda prezentacja?",
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
      id: "moc",
      heading: "Maszyny z 1910 roku nad Obrą — czyli o tym, że mocniej nie znaczy szybciej",
      paragraphs: [
        "W Bledzewie nad Obrą stoi elektrownia wodna zaprojektowana w 1905 roku, budowana od 1906 i uruchomiona pod koniec 1910. Oryginalne maszyny z tamtego roku pracują w hali do dziś, a zakład działa jako elektrownia szczytowa — czyli taka, która gromadzi wodę i oddaje moc wtedy, kiedy jest potrzebna, a nie cały czas równo. Cała jej konstrukcja opiera się na założeniu, które w kuchni prawie nikt nie stosuje: moc ma sens wtedy, kiedy coś z niej wynika.",
        "Bo najczęstszy odruch przy garnku brzmi: „podkręcę, to szybciej będzie”. W połowie przypadków jest bezużyteczny, a w drugiej połowie wręcz szkodzi.",
        "Rzecz najważniejsza i najmniej znana: wrząca woda ma jedną temperaturę i większy płomień jej nie podniesie. Pod dużym ogniem woda nie robi się gorętsza — po prostu szybciej paruje. Ziemniaki gotują się dokładnie tyle samo, makaron tyle samo, jajka tyle samo. Jedyne, co zyskujemy, to mniej wody w garnku i zachlapana kuchenka.",
        "Moc ma realne znaczenie tylko na dwóch etapach. Pierwszy to doprowadzenie do wrzenia — tu mocniej faktycznie znaczy szybciej. Drugi to rumienienie, smażenie i zapiekanie, gdzie temperatura naprawdę idzie w górę.",
        "Ale przy tym drugim czyha pułapka odwrotna. Zbyt mocny ogień daje ciemną skórkę i surowy środek — kotlet jest gotowy z wierzchu, zanim zdąży się dogotować w środku. To najczęstsza przyczyna nieudanych kotletów i piersi z kurczaka, i nie da się jej naprawić inaczej niż zmniejszając płomień.",
        "Największy wpływ na czas gotowania mają zresztą trzy rzeczy zupełnie inne niż moc. Przykrywka. Wielkość kawałków. I ilość jedzenia w naczyniu.",
        "Przykrywka jest najtańszym przyspieszaczem, jaki istnieje, i najczęściej pomijanym. Garnek pod przykryciem dochodzi do wrzenia w ułamku czasu, jakiego potrzebuje odkryty, i nie kosztuje to nic poza jednym ruchem ręki.",
        "Ilość jedzenia działa w drugą stronę i to ona zabija moc najskuteczniej. Zimne składniki wrzucone hurtem na patelnię wychładzają ją tak, że zamiast rumienienia zaczyna się duszenie we własnym soku. Zwiększanie ognia tego nie odwróci — trzeba smażyć partiami. To jest ten moment, w którym „na szybko” oznacza po prostu gorzej.",
        "I jeszcze jedna rzecz, o której łatwo zapomnieć: po zagotowaniu trzeba zmniejszyć. Burzliwe wrzenie rozbija ziemniaki i makaron, mętni wywar i nie przyspiesza niczego. Zupa, która „bulgocze na cały garnek”, nie gotuje się szybciej — tylko mniej ładnie.",
        "Warto przy okazji odkłamać jedno określenie. „Na małym ogniu” nie jest oszczędzaniem ani ostrożnością — to technika. Przy duszeniu, przy wywarze, przy gęstych sosach to jedyny sposób, żeby wyszło dobrze. Tam, gdzie potrzebna jest delikatność, moc jest przeszkodą, a nie zaletą.",
        "Teraz uczciwie o sprzęcie. Thermomix nie łamie fizyki. Nie ugotuje wody goręcej, niż się da, i nie skróci gotowania, które musi trwać.",
        "Usuwa natomiast całą tę klasę błędów naraz. Skoro temperatura jest ustawiona i utrzymywana, nie ma czego podkręcać i nie ma czego zapomnieć zmniejszyć. Nie da się przypadkiem zagotować sosu, który miał tylko dochodzić, ani zostawić mleka na dużym ogniu. To brzmi mało efektownie, ale w praktyce ratuje więcej dań niż jakakolwiek funkcja z nazwą.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Bledzewie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeśli jest danie, które regularnie się przypala albo wykipiuje — powiedzcie przy umawianiu. Zrobimy właśnie je.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Bledzewie"),
    sekcjaRaty("w Bledzewie"),
    {
      id: "rodzina",
      heading: "Thermomix dla bledzewskiej rodziny",
      paragraphs: [
        "Bledzew jest wsią i siedzibą gminy liczącej blisko trzy tysiące dziewięćset mieszkańców na dwustu czterdziestu siedmiu kilometrach kwadratowych. Pierwsza wzmianka o miejscowości pochodzi z 1235 roku, w 1318 margrabia Waldemar nadał ją cystersom z Zemska, w 1433 otrzymała prawa miejskie, a w 1485 Kazimierz Jagiellończyk ustanowił tu trzy jarmarki roczne i targi tygodniowe. W 1592 roku drewniane zabudowania klasztorne spłonęły i odbudowano je murowane — kościół w 1596, krużganki po 1607. Kościół parafialny jest późnogotycki, z XV wieku, pocysterski, remontowany w latach 1881–1882; wewnątrz znajduje się barokowe wyposażenie przeniesione z kościoła poklasztornego. Nad Obrą stoi elektrownia wodna zaprojektowana w 1905 roku, budowana od 1906, uruchomiona pod koniec 1910 i odebrana 15 maja 1911: oryginalne maszyny z 1910 roku pracują w hali do dziś, zakład działa jako elektrownia szczytowa, a cały zespół jest wpisany do rejestru zabytków techniki; od końca lat osiemdziesiątych gromadzi się tu kolekcję urządzeń z innych elektrowni regionu. Zalew Bledzewski, powstały przez spiętrzenie Obry, ma około stu dwudziestu siedmiu hektarów i blisko osiem kilometrów długości. Na Liście Produktów Tradycyjnych figuruje pochodząca z tej gminy mieszanka rybna w zalewie octowej, wpisana 24 stycznia 2014 roku.",
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

  districtsHeading: "Do których miejscowości gminy Bledzew dojeżdżam?",
  districtsParagraphs: [
    "Do całej gminy — Bledzewa, Bledzewka, Chyciny, Dębowca, Goruńska, Katarzynek, Kleszczewa, Krzywoklesza, Nowej Wsi, Osiecka, Pniewa, Popowa, Sokolej Dąbrowy, Starego Dworku, Strużyn, Templewa i Zemska.",
    "Przy umawianiu wystarczy podać miejscowość, ulicę i numer domu. Dojazd jest wszędzie bezpłatny.",
  ],
  districts: [],

  nearbyHeading: "Poza gminę Bledzew też przyjadę",
  nearbyParagraphs: [
    "Międzyrzecz, Skwierzyna, Trzciel, Lubniewice i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Międzyrzecz", "Skwierzyna", "Trzciel", "Lubniewice"],

  about: blokOMnie("do Bledzewa", "w Bledzewie", REGION_LUBUSKIE),

  faq: [
    {
      question: "Czy dojeżdżasz do Bledzewa bez dodatkowej opłaty?",
      answer:
        "Tak, do Bledzewa i do wszystkich miejscowości gminy — Chyciny, Zemska, Templewa, Starego Dworku i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Bledzewie"),
    {
      question: "Czy mocniejszy ogień gotuje szybciej?",
      answer:
        "Przy gotowaniu w wodzie nie. Wrząca woda ma jedną temperaturę i większy płomień jej nie podniesie — powoduje tylko szybsze parowanie. Moc ma znaczenie na dwóch etapach: przy doprowadzaniu do wrzenia i przy rumienieniu.",
    },
    {
      question: "Co naprawdę skraca czas gotowania?",
      answer:
        "Przykrywka, mniejsze kawałki i mniejsza ilość jedzenia w naczyniu. Przykrywka jest najtańszym przyspieszaczem, jaki istnieje, a zbyt pełna patelnia wychładza się tak, że zamiast rumienienia zaczyna się duszenie — wtedy trzeba smażyć partiami, a nie zwiększać ogień.",
    },
    {
      question: "Dlaczego kotlet jest ciemny z wierzchu i surowy w środku?",
      answer:
        "Bo ogień był za mocny. Skórka gotowa jest wtedy dużo wcześniej niż środek i nie da się tego naprawić inaczej niż zmniejszając moc. Podobnie po zagotowaniu zupy trzeba zmniejszyć — burzliwe wrzenie rozbija ziemniaki i makaron i mętni wywar, nie przyspieszając niczego.",
    },
  ],

  geo: { lat: 52.5175, lng: 15.4147 },
};
