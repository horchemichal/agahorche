import type { DistrictContent } from "./typy";

/**
 * CHODENICE — Osiedle nr 9 miasta Bochnia. Dawna wieś wójtowska,
 * w granicach miasta od 1 stycznia 1973 r.
 *
 * OŚ STRONY: CAŁA BOCHNIA PIJE WODĘ Z TEGO OSIEDLA. Przy ul. mjr. Bacy
 * stoi Zakład Uzdatniania Wody MPWiK — woda dla całego miasta pobierana
 * jest z Raby i uzdatniana właśnie tu, WYDAJNOŚĆ 17 280 m³/DOBĘ.
 * To oś idealnie zszyta z tematem strony: woda w naczyniu klientki
 * przychodzi z jej własnego osiedla.
 *
 * ⚠️⚠️ ROZDZIELENIE OD KOLANOWA (oś: las 420 ha + solanki wzmiankowane
 * 1123–1125). Tam woda jest HISTORYCZNA i słona, tu WSPÓŁCZESNA
 * i z kranu. NIE mieszać tych dwóch wątków.
 * ⚠️ ROZDZIELENIE OD POZOSTAŁYCH DAWNYCH WSI: Dołuszyce mają dwór,
 * Kurów ród rycerski i wysokość, Smyków autostradę.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ ZAKŁAD UZDATNIANIA WODY MPWiK, ul. mjr. Bacy: cała woda pitna
 *   dla Bochni pobierana z Raby i uzdatniana tutaj. WYDAJNOŚĆ
 *   17 280 m³/dobę. Proces: ozonowanie wstępne, koagulacja, filtry
 *   piaskowe i węglowe, dwutlenek chloru, lampy UV (mpwikbochnia.pl),
 * — HISTORIA: Chodenice pojawiają się już w DOKUMENCIE LOKACYJNYM
 *   BOCHNI Z 1253 R. wydanym przez Bolesława Wstydliwego. Atlas
 *   Historyczny Miast Polskich: powstały jako WIEŚ WÓJTOWSKA, zakładana
 *   równocześnie z lokacją miasta, na zachód od niego. W II poł. XVI w.
 *   należały do Bochni, w powiecie szczyrzyckim,
 * — ⭐ TRYNITATIS: kolonia austriacka założona przy szybie, przy budowie
 *   rozpoczętej ok. 1774–1780 z inicjatywy Techa, austriackiego zarządcy
 *   kopalni; w 1783 r. władze salinarne postulowały budowę domów dla
 *   kierownika robót i sztygarów. Nazwa od łac. Trójcy Świętej.
 *   W 1921 r. 319 mieszkańców. 27 MAJA 1931 zniesiono gminę Trynitatis
 *   i przyłączono ją do Chodenic; do Bochni weszła 1 I 1973 RAZEM
 *   z Chodenicami — NIE jako osobna jednostka (Atlas, e-bochnia),
 * — 1 STYCZNIA 1973: Chodenice (wraz z Trynitatis) włączone do Bochni,
 *   równolegle z budową filii Huty im. Lenina, dziś Stalproduktu;
 *   miasto powiększyło się wtedy do 29,02 km²,
 * — OSP CHODENICE, ul. Chodenicka: jednostka założona w 1923 r.
 *   (wg księgi uchwał Rady Gminnej Trinitatis), WŁĄCZONA DO KSRG
 *   29 STYCZNIA 2024. 30 czynnych członków, młodzieżowa drużyna
 *   od 2013 r. Remiza służy też jako lokal wyborczy,
 * — KOMUNIKACJA: linia 5a BZK kończy bieg na PĘTLI przy ul. Chodenickiej
 *   (Dworzec PKP → pl. Pułaskiego → Karosek I/II/III → Karosek-Wodociągowa
 *   → Chodenicka-Sklep → Chodenicka-Figura → Chodenicka-Pętla),
 * — TERENY NAD RABĄ: ponad 14 ha — stadion MOS „Strażak”, boisko,
 *   asfaltowe boisko do koszykówki i siatkówki, ośrodek TKKF „Raba”,
 *   domki letniskowe, ogródki działkowe i plaża. Decyzja środowiskowa
 *   na kompleks sportowo-rekreacyjny wydana w czerwcu 2024; budowa
 *   nie ruszyła z braku środków,
 * — INNE: obelisk mjr. Jana „Bacy” Kaczmarczyka, dowódcy III batalionu
 *   „Motyl” 12 pp AK; przydrożne kapliczki; w obrębie dawnego Trynitatis
 *   cmentarz komunalny i cmentarz wojenny nr 314 z I wojny światowej.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ⚠️⚠️ DATY „SZYB SOLNY Z 1908 R.” PRZY TRYNITATIS. Atlas Historyczny
 *   datuje początek budowy szybu Trinitatis na 1774–1780; rok 1908
 *   ma jedno źródło wtórne i prawdopodobnie dotyczy NADSZYBIA SUTORIS.
 *   NIE UŻYWAĆ. Ta sama liczba stała na stronie miasta Bochnia
 *   i została przy tej okazji poprawiona,
 * — LICZBY MIESZKAŃCÓW OSIEDLA. Nie ustalona,
 * — STRUKTURY WIEKOWEJ ZABUDOWY. Nie ustalona; wiadomo tylko, że
 *   dominują domy jednorodzinne i nie ma tu bloków,
 * — CMENTARZA WOJENNEGO I OBELISKU jako tematu. Wzmianka jedna,
 *   rzeczowa, w sekcji o dojeździe — nie rozwijana.
 *
 * PUŁAPKI:
 * — ⚠️ e-bochnia.pl podaje w wykazie ulic Chodenic „Bromfeldstraße” —
 *   to artefakt parsowania, nie prawdziwa nazwa. Wiążący jest statut,
 * — ⚠️ NIE pisać, że Trynitatis przyłączono do Bochni w 1973 jako
 *   samodzielną jednostkę — samodzielność straciło już w 1931 r.
 */
export const BOCHNIA_CHODENICE: DistrictContent = {
  slug: "bochnia-chodenice",
  urlPath: "/thermomix/bochnia/chodenice",
  nazwa: "Chodenice",
  miejscownik: "Chodenicach",
  przyimek: "w",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix Chodenice — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Chodenice Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix w Chodenicach i na Trynitatis w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Chodenicka, Karosek, Lipie, Solidarności. Tel. 517 185 691.",

  lead:
    "Dojeżdżam pod adresy w całych Chodenicach i na Trynitatis: Chodenicka, Karosek, Lipie, Solidarności, Wąwóz i dalej, aż po pętlę autobusu. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna.",

  osiedla: [
    "Chodenicka",
    "Trynitatis",
    "Trinitatis",
    "Karosek",
    "Lipie",
    "Solidarności",
    "Wąwóz",
    "Kręta",
    "Brzozowa",
    "Wodociągowa",
    "mjr. Bacy",
    "Lotników Polskich",
  ],

  sections: [
    {
      id: "woda",
      heading: "Cała Bochnia pije wodę z tego osiedla",
      paragraphs: [
        "Przy ulicy majora Bacy stoi zakład uzdatniania wody. Nie jeden z kilku — jedyny. Woda dla całego miasta pobierana jest z Raby właśnie tutaj, przechodzi ozonowanie, koagulację, filtry piaskowe i węglowe, dezynfekcję i lampy ultrafioletowe, a potem płynie do kranów w Śródmieściu, na Niepodległości, na Uzborni i wszędzie indziej. Wydajność to ponad siedemnaście tysięcy metrów sześciennych na dobę.",
        "Piszę o tym na stronie o gotowaniu z konkretnego powodu. Woda jest w Thermomixie składnikiem numer jeden: idzie do zupy, do gotowania na parze, do kaszy i makaronu. Kiedy ktoś w Chodenicach pyta mnie, czy do urządzenia można lać wodę z kranu, odpowiedź brzmi: można, i to tę samą, którą uzdatnia się dwie ulice dalej.",
        "Warto przy okazji rozwiać jedno nieporozumienie, bo pada dość często. Woda mineralna albo lecznicza z butelki to co innego — tej akurat do urządzenia się nie wlewa, bo wysoka mineralizacja osadza kamień na czujniku temperatury dużo szybciej. Zwykła kranówka albo przefiltrowana jest tu najlepszym wyborem.",
        "Jeśli u Ciebie w domu stoi dzbanek filtrujący, to też w porządku — filtr zmienia twardość, nie samą wodę. Powiedz przy umawianiu, czego zwykle używasz, a ustawię przepisy tak, żeby wyszło dokładnie to, co wyjdzie Ci potem samej.",
      ],
    },
    {
      id: "historia",
      heading: "Wieś starsza niż miasto, a w środku kolonia cesarska",
      paragraphs: [
        "Chodenice pojawiają się w dokumencie lokacyjnym Bochni z tysiąc dwieście pięćdziesiątego trzeciego roku, wydanym przez Bolesława Wstydliwego. Zakładano je jako wieś wójtowską, równolegle z samym miastem, tuż na zachód od niego. Do Bochni weszły dopiero siedemset dwadzieścia lat później, pierwszego stycznia tysiąc dziewięćset siedemdziesiątego trzeciego.",
        "W środku osiedla siedzi jeszcze jedna, zupełnie osobna historia: Trynitatis. To była kolonia austriacka, założona pod koniec osiemnastego wieku przy budowie szybu, dla kierownika robót i sztygarów. Nazwa pochodzi od łacińskiej Trójcy Świętej. W tysiąc dziewięćset dwudziestym pierwszym roku mieszkało tam trzysta dziewiętnaście osób i przez lata była to osobna gmina — zniesiono ją i przyłączono do Chodenic w tysiąc dziewięćset trzydziestym pierwszym.",
        "Czyli kolejność była taka: najpierw wieś z trzynastego wieku, potem cesarska kolonia górnicza w niej, potem połączenie obu w tysiąc dziewięćset trzydziestym pierwszym, a na końcu wspólne wejście do Bochni w siedemdziesiątym trzecim. Dziś Trynitatis to nazwa ulicy i nazwa, której ludzie nadal używają, mówiąc, gdzie mieszkają.",
        "Miejscowa straż jest niewiele młodsza od tej ostatniej historii: ochotnicza straż pożarna w Chodenicach powstała w tysiąc dziewięćset dwudziestym trzecim roku, a w styczniu dwa tysiące dwudziestego czwartego weszła do krajowego systemu ratowniczo-gaśniczego.",
      ],
    },
    {
      id: "dojazd",
      heading: "Autobus kończy tu bieg, a nad Rabą jest plaża",
      paragraphs: [
        "Linia piątka a kończy bieg na pętli przy Chodenickiej i to jest najprostszy punkt orientacyjny na tym osiedlu. Jedzie tu z dworca kolejowego przez plac Pułaskiego i Karosek, z przystankami przy sklepie i przy figurze.",
        "Dla mnie dojazd jest łatwy: strefy płatnego parkowania tu nie ma, zabudowa to domy jednorodzinne, więc pod większość adresów po prostu się podjeżdża. Nazwy ulic — Wąwóz, Kręta — sugerują, że nie wszędzie jest szeroko, dlatego proszę o numer domu, a nie samą nazwę ulicy.",
        "Osiedle ma nad Rabą ponad czternaście hektarów terenów rekreacyjnych: stadion, boiska, ośrodek nad wodą, ogródki działkowe, domki letniskowe i plażę. Miasto ma decyzję środowiskową na zbudowanie tam kompleksu sportowo-rekreacyjnego, ale prace nie ruszyły, bo brakuje pieniędzy.",
        "W dawnej części Trynitatis leży cmentarz komunalny, a obok niego cmentarz wojenny z pierwszej wojny światowej. Przy Chodenickiej stoi obelisk majora Jana Kaczmarczyka o pseudonimie Baca — to od niego nazwano ulicę, przy której uzdatnia się wodę.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy do Thermomixa mogę wlewać wodę z kranu?",
      answer:
        "Tak i w Chodenicach ma to nawet pewien smaczek, bo woda dla całej Bochni jest uzdatniana właśnie na tym osiedlu, przy ulicy majora Bacy. Do urządzenia leje się wodę kranową albo przefiltrowaną i to jest najlepszy wybór. Czego nie należy wlewać, to wody mineralnej i leczniczej z butelki — wysoka mineralizacja osadza kamień na czujniku temperatury i na dnie naczynia znacznie szybciej niż zwykła kranówka.",
    },
    {
      question: "Mieszkam na Trynitatis. To jeszcze Chodenice czy już osobna część miasta?",
      answer:
        "Formalnie Chodenice — Trynitatis straciło samodzielność w tysiąc dziewięćset trzydziestym pierwszym roku, kiedy zniesiono tamtejszą gminę i przyłączono ją właśnie tutaj. W praktyce nazwa żyje dalej i ludzie jej używają, więc kiedy mówisz „mieszkam na Trynitatis”, wiem dokładnie, gdzie jechać. Przy umawianiu wystarczy dodać numer domu.",
    },
    {
      question: "Ulice są tu wąskie. Podjedziesz pod dom?",
      answer:
        "Podjadę i robię to regularnie. Strefy płatnego parkowania w Chodenicach nie ma, a zabudowa to domy jednorodzinne, więc zwykle da się stanąć przy furtce. Proszę tylko o numer domu, nie samą nazwę ulicy — przy Wąwozie czy Krętej nawigacja bywa mniej pomocna, niż się wydaje.",
    },
  ],

  geo: { lat: 49.9761, lng: 20.4017 },
};
