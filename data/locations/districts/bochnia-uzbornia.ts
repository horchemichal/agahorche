import type { DistrictContent } from "./typy";

/**
 * UZBORNIA — Osiedle nr 4 miasta Bochnia. Wzgórze na południowym skraju.
 *
 * OŚ STRONY: GIPS. Na zachodnim stoku działał od lat trzydziestych XIX w.
 * do lat dwudziestych XX w. GIPSOŁOM I FABRYKA GIPSU — produkowano PIĘĆ
 * ODMIAN, w tym gips CHIRURGICZNY; wyróżnienie na wystawie przemysłowej
 * w Krakowie w 1887 r. Do dziś w stoku widać zagłębienia po wyrobiskach.
 * Sól ma cała Bochnia. Gips ma tylko Uzbornia.
 *
 * ⚠️⚠️ TO NIE JEST OŚ „OSIEDLE DOMÓW JEDNORODZINNYCH” — ta należy
 * do KRZĘCZKOWA-ŁYCHOWA (największe osiedle domów w mieście, bez
 * komunikacji miejskiej). Fakt, że stoi tu JEDEN blok, wchodzi jako
 * sekcja o kuchniach, nie jako teza strony.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ GIPSOŁOM I FABRYKA GIPSU na zachodnim stoku, od lat 30. XIX w.
 *   do lat 20. XX w. PIĘĆ ODMIAN gipsu, m.in. rolniczy, budowlany
 *   i CHIRURGICZNY. Wyróżnienie na wystawie przemysłowej w Krakowie
 *   w 1887 r. Szczyt produkcji w latach 70. XIX w., zamknięcie w latach
 *   20. XX w. z powodu nieopłacalności. Liczne zagłębienia po
 *   wyrobiskach w południowej i zachodniej części wzgórza
 *   (realgarblog.com, bochenskiedzieje.pl),
 * — ⭐ JEDYNY BLOK SPÓŁDZIELCZY NA OSIEDLU: ul. Sądecka 9, rok 1977,
 *   32 mieszkania, 3 klatki. To jedyna pozycja z tego osiedla wśród
 *   51 budynków SM Bochnia. Reszta to zabudowa jednorodzinna na stoku,
 * — WZGÓRZE 245 m n.p.m. Teren wzmiankowany od 1527 r. jako „zabudowany
 *   głównie przez zagrody mieszczańskie”. Pierwsza wzmianka pisana
 *   u Jana Długosza w latach 1470–80,
 * — ⚠️ NAZWA JEST ZAGADKĄ: w dokumentach formy Huzbornia, Uzwornia,
 *   Rozbornia. Teorie: od nazwiska właściciela działek albo od
 *   zbójeckiej reputacji terenu. NIE ROZSTRZYGAĆ,
 * — W 1684 R. MIESZKAŃCY UWAŻALI OSADĘ NA UZBORNI ZA HAŃBIĄCĄ —
 *   prawdopodobnie przez sąsiedztwo szubienicy,
 * — PARK RODZINNY UZBORNIA: oddawany końcem września 2013 r., koszt
 *   ok. 8,1 mln zł (5,6 mln dofinansowania z Zarządu Województwa
 *   Małopolskiego). Wieża widokowa z zegarem słonecznym, amfiteatr
 *   z muszlą koncertową, boiska, siłownia zewnętrzna, skatepark, staw,
 *   stoły szachowe, górka saneczkowa, duży drewniany plac zabaw, trzy
 *   altany, kawiarnia z tarasem. BEZPŁATNY PARKING przy wjeździe
 *   od ul. Uzbornia; dojazd ul. Dąbrowskiego, potem w lewo,
 * — ULICE OSIEDLA (statut): Andrusikiewicza, Czyżewicza, Dąbrowskiego,
 *   Dembowskiego, Gipsowa, Goslara, Górska, Gródek Wójtowski, Hoszarda,
 *   Kącik, Leśna, Nad Babicą, Sądecka, Sienkiewicza, Uzbornia,
 *   Węgierska, Widok, Wiśnicka (do obwodnicy), Wybickiego, Zalesie
 *   Dolne, Plac Turka. ⭐ UL. GIPSOWA — nazwa została po fabryce,
 * — BUDŻET OBYWATELSKI 2024: wymiana opraw na LED przy Gródku
 *   Wójtowskim, Górskiej, Placu Rekreacyjnym i w Parku.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — POMNIKA 52 OFIAR EGZEKUCJI z 18 grudnia 1939 r. Fakt potwierdzony
 *   i ważny, ale strona sprzedażowa nie jest miejscem na liczby ofiar.
 *   ŚWIADOMIE POMINIĘTE, zgodnie z linią przyjętą przy Brzezince
 *   i Jawiszowicach,
 * — ROZSTRZYGNIĘCIA ETYMOLOGII. Trzy formy, dwie teorie, zero pewności,
 * — LICZBY MIESZKAŃCÓW. Miasto pisze o „kilku tysiącach” w opisie
 *   projektu budżetu obywatelskiego — za miękkie, żeby podać jako fakt,
 * — KAPLICY MB ANIELSKIEJ. ⚠️ Wykaz zabytków lokalizuje ją przy
 *   ul. Sądeckiej, ale dwa mocniejsze źródła przy ul. Brzeźnickiej,
 *   czyli na ŚW. JANA-MUROWIANCE. Wpisana tam, nie tutaj.
 *
 * PUŁAPKI:
 * — ⚠️ ul. Kącik figuruje w wykazie strefy płatnego parkowania, choć
 *   statut przypisuje ją do tego osiedla. Nie pisać, że na Uzborni
 *   strefy nie ma w ogóle,
 * — GIPS TO NIE SÓL. Nie mieszać tych dwóch wątków.
 */
export const BOCHNIA_UZBORNIA: DistrictContent = {
  slug: "bochnia-uzbornia",
  urlPath: "/thermomix/bochnia/uzbornia",
  nazwa: "Uzbornia",
  miejscownik: "Uzborni",
  przyimek: "na",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix Uzbornia — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Uzbornia Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix na Uzborni w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Sądecka, Górska, Leśna, Widok, Zalesie Dolne. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam pod adresy na całym wzgórzu: Sądecka, Górska, Leśna, Widok, Gipsowa, Zalesie Dolne, Nad Babicą i dalej. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  osiedla: [
    "Sądecka",
    "Górska",
    "Leśna",
    "Widok",
    "Gipsowa",
    "Uzbornia",
    "Zalesie Dolne",
    "Nad Babicą",
    "Gródek Wójtowski",
    "Wiśnicka",
    "Węgierska",
    "Sienkiewicza",
    "Dąbrowskiego",
    "Wybickiego",
    "Plac Turka",
  ],

  sections: [
    {
      id: "gips",
      heading: "Wzgórze, z którego brano gips chirurgiczny",
      paragraphs: [
        "Bochnia kojarzy się z solą i słusznie. Ale na zachodnim stoku Uzborni przez blisko sto lat wydobywano coś innego: gips. Kamieniołom i fabryka działały od lat trzydziestych dziewiętnastego wieku do lat dwudziestych dwudziestego, a produkowano tu pięć różnych odmian — rolniczą, budowlaną i między innymi chirurgiczną, czyli tę, z której robi się opatrunki usztywniające.",
        "W tysiąc osiemset osiemdziesiątym siódmym roku gips z Uzborni dostał wyróżnienie na wystawie przemysłowej w Krakowie. Szczyt produkcji przypadł na lata siedemdziesiąte dziewiętnastego wieku, a zamknięto zakład pół wieku później, kiedy przestał się opłacać.",
        "Ślad został w dwóch miejscach. W terenie: w południowej i zachodniej części wzgórza do dziś widać zagłębienia po wyrobiskach. I w adresach: przez osiedle biegnie ulica Gipsowa, która nie wzięła nazwy znikąd.",
        "Nazwa samego wzgórza jest za to zagadką, której nikt nie rozwiązał. W starych dokumentach pojawiają się formy Huzbornia, Uzwornia i Rozbornia; jedni wywodzą ją od nazwiska właściciela działek, inni od zbójeckiej reputacji tego miejsca. W tysiąc sześćset osiemdziesiątym czwartym roku mieszkańcy Bochni uważali osadę na Uzborni za miejsce hańbiące — stała tu wtedy szubienica.",
      ],
    },
    {
      id: "kuchnia",
      heading: "Jeden blok na całe osiedle",
      paragraphs: [
        "W zasobie bocheńskiej spółdzielni mieszkaniowej jest pięćdziesiąt jeden budynków. Z całej Uzborni figuruje wśród nich dokładnie jeden: blok przy Sądeckiej z tysiąc dziewięćset siedemdziesiątego siódmego roku, trzydzieści dwa mieszkania, trzy klatki.",
        "Cała reszta osiedla to domy. Zabudowa na stoku, w dużej części starsza — teren jest wzmiankowany już w tysiąc pięćset dwudziestym siódmym roku jako zabudowany zagrodami mieszczańskimi, a nazwy ulic same to opisują: Leśna, Górska, Widok, Zalesie Dolne, Nad Babicą.",
        "Dla spotkania oznacza to konkret. W domu kuchnia jest zwykle większa niż w bloku, blat dłuższy, a rozmowa idzie w innym kierunku: o gotowaniu dla większej liczby osób, o przetworach, o tym, co się robi z warzywami z własnego ogrodu. Rzadko pada tu pytanie „gdzie ja to postawię”, a często „ile tego naraz zmieści”.",
        "Jeśli mieszkasz w tym jednym bloku przy Sądeckiej, spotkanie wygląda inaczej i też jest sensowne — po prostu przywożę wtedy przepisy na mniejsze porcje.",
      ],
      bullets: [
        "domy jednorodzinne na stoku — większość osiedla",
        "jeden blok spółdzielczy przy Sądeckiej, z tysiąc dziewięćset siedemdziesiątego siódmego",
        "w domu rozmawiamy o większych porcjach i przetworach",
      ],
    },
    {
      id: "dojazd",
      heading: "Pod górę, ale z darmowym parkingiem",
      paragraphs: [
        "Uzbornia to wzgórze o wysokości dwustu czterdziestu pięciu metrów nad poziomem morza, na południowym skraju miasta. Dojeżdża się pod górę i to jest jedyna niedogodność, jaką tu widzę — dla mnie żadna, bo i tak przyjeżdżam samochodem z całym sprzętem.",
        "Przy wjeździe od ulicy Uzbornia, obok parku, jest bezpłatny parking. Dojazd prowadzi ulicą Dąbrowskiego, a potem w lewo. Strefy płatnego parkowania tu nie ma, więc pod większość adresów po prostu się podjeżdża.",
        "W środku osiedla stoi Park Rodzinny Uzbornia, oddany pod koniec dwa tysiące trzynastego roku za ponad osiem milionów złotych, w większości z pieniędzy wojewódzkich. Jest w nim wieża widokowa z zegarem słonecznym, amfiteatr, boiska, skatepark, siłownia zewnętrzna, staw, górka saneczkowa i duży drewniany plac zabaw. Dolną część lasku zostawiono niemal nietkniętą.",
        "Wspominam o tym z jednego praktycznego powodu: jeśli umawiamy się w weekend, a masz dzieci, park jest sto metrów dalej i spotkanie da się ułożyć tak, żeby wszystkim to pasowało.",
      ],
    },
  ],

  faq: [
    {
      question: "Mieszkam wysoko na stoku, dojazd jest wąski. Dasz radę podjechać?",
      answer:
        "Dam i robię to regularnie. Przyjeżdżam samochodem osobowym, a urządzenie waży tyle, że wnoszę je bez pomocy. Jedyne, o co proszę, to numer domu i nazwa ulicy przy umawianiu — Uzbornia jest rozłożona na stoku i nawigacja potrafi poprowadzić naokoło. Strefy płatnego parkowania tu nie ma, więc pod większość adresów da się podjechać pod samą furtkę.",
    },
    {
      question: "Mam dużą kuchnię w domu. Czy Thermomix nie jest bardziej dla ciasnych mieszkań?",
      answer:
        "To pytanie pada na Uzborni częściej niż gdziekolwiek indziej, bo prawie całe osiedle to domy. Odpowiadam tak: miejsce na blacie jest tu argumentem najmniej ważnym. Liczy się to, ile osób siada do stołu i czy przerabiasz coś z ogrodu. Przy większych porcjach urządzenie zdejmuje z rąk tarcie, siekanie i mieszanie — a przy przetworach pilnowanie garnka, żeby nie przywarło. Jeśli gotujesz dla dwóch osób raz na kilka dni, powiem wprost, że zwraca się wolniej.",
    },
  ],

  geo: { lat: 49.9626, lng: 20.4315 },
};
