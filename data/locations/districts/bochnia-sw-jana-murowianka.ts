import type { DistrictContent } from "./typy";

/**
 * ŚW. JANA-MUROWIANKA — Osiedle nr 11 miasta Bochnia. SZEŚĆ ULIC.
 *
 * OŚ STRONY: KAPLICA, KTÓRĄ ZBUDOWALI TRZEJ BRACIA GÓRNICY.
 * Kaplica Matki Boskiej Anielskiej na Murowiance, wzniesiona
 * 1854–1856 przez Michała, Wincentego i Tomasza ŁOSIKÓW —
 * Z ZAWODU GÓRNIKÓW — na gruncie ofiarowanym przez Józefa Kronenberga.
 * Rozbudowana 1892 do postaci miniaturowego kościoła. Obok źródełko.
 *
 * ⚠️⚠️ ROZDZIELENIE OD ŚRÓDMIEŚCIA-CAMPI: tam osią jest STREFA PŁATNEGO
 * PARKOWANIA, a warstwy zabudowy wchodzą jako sekcja. Tu odwrotnie:
 * osią jest kaplica, a różnica roczników (1972/78/82 kontra 2022)
 * wchodzi jako sekcja o kuchniach. Wątek parkingowy jest tu KONTRĄ:
 * trzysta metrów od Rynku, a bez parkomatu.
 *
 * FAKTY UŻYTE I ŹRÓDŁA:
 * — ⭐ KAPLICA MATKI BOSKIEJ ANIELSKIEJ na Murowiance, przy
 *   ul. Brzeźnickiej, na stoku opadającym ku centrum. Zbudowana
 *   1854–1856 przez trzech braci MICHAŁA, WINCENTEGO I TOMASZA ŁOSIKÓW,
 *   GÓRNIKÓW Z ZAWODU, na gruncie ofiarowanym przez Józefa Kronenberga.
 *   Późnoklasycystyczna, z kamienia i cegły, z wieżyczką sygnaturką;
 *   ROZBUDOWANA W 1892 R. do postaci miniaturowego kościoła
 *   z prezbiterium; polichromie Jana Lubrańskiego. Obok ŹRÓDEŁKO.
 *   W 1856 r. przeniesiono tu barokową figurę Matki Boskiej Anielskiej —
 *   pierwotnie z kościoła bernardynów, potem w Krzyżanowicach;
 *   ⚠️ ORYGINAŁ ZNAJDUJE SIĘ DZIŚ W KOŚCIELE ŚW. JANA, W KAPLICY STOI
 *   KOPIA. Odpust w pierwszą niedzielę sierpnia (bochenskiedzieje.pl,
 *   fotopolska.eu),
 * — ⚠️ KONFLIKT ŹRÓDEŁ: wykaz zabytków na geoportalu podaje przy tej
 *   kaplicy ul. Sądecką (czyli Uzbornię). Dwa mocniejsze źródła
 *   lokalizują ją przy Brzeźnickiej / na Murowiance i tak przyjęto,
 * — ETYMOLOGIA „MUROWIANKA”: prawdopodobnie od MUROWANEJ ŚWIĄTYNI
 *   sprzed wieków; teoria alternatywna — zniekształcenie słowa
 *   „MOROWIANKA”, czyli miejsce cmentarza epidemicznego. Obie podane
 *   jako otwarte pytanie,
 * — SZEŚĆ ULIC (statut): Brzeźnicka (do obwodnicy), Floris (od
 *   Pl. Bolesława Wstydliwego), św. Jana, Zygmunta Krasińskiego,
 *   Murowianka (do obwodnicy), płk. Stefana Osiki,
 * — BLOKI SPÓŁDZIELCZE: Floris 33a (1972, 34 mieszkania, 2 klatki),
 *   Brzeźnicka 17 (1978, 48 mieszkań, 4 klatki), św. Jana 16 (1982,
 *   20 mieszkań, 1 klatka),
 * — ⭐ NOWA ZABUDOWA: Osiedle Panorama przy ul. Brzeźnickiej, deweloper
 *   Cober — dwa budynki wielorodzinne, 5 kondygnacji nadziemnych
 *   + 1 podziemna, 68 MIESZKAŃ, METRAŻE 31–61 m²; budowa od marca 2022,
 *   planowane zakończenie IV kw. 2023; kolejne etapy w realizacji.
 *   ⚠️ NIE USTALONO na pewno, czy adres mieści się w granicach osiedla
 *   („Brzeźnicka do obwodnicy”) — w treści bez przypisania adresowego,
 * — ⭐ ŻADNA Z SZEŚCIU ULIC OSIEDLA NIE FIGURUJE W WYKAZIE STREFY
 *   PŁATNEGO PARKOWANIA, a oferty rynkowe podają 250–450 m od Rynku,
 * — PARKOWANIE OSIEDLOWE: w budżecie obywatelskim 2024 osiedle zgłosiło
 *   „Parking osiedlowy” — utworzenie miejsc ZA ISTNIEJĄCYMI GARAŻAMI —
 *   oraz „Bezpieczny Pieszy”, czyli przejście dla pieszych przy
 *   skrzyżowaniu ul. św. Jana,
 * — PIERWSZY BOCHEŃSKI PARK KIESZONKOWY — projekt budżetu obywatelskiego
 *   2020 właśnie dla tego osiedla; plac zabaw, boisko.
 *
 * CZEGO TU NIE MA I DLACZEGO:
 * — ⚠️⚠️ PARAFII I KOŚCIOŁA ŚW. JANA NEPOMUCENA. Mieszczą się przy
 *   ul. ks. St. Wójtowicza — to NIE jest ulica tego osiedla (należy
 *   do Krzęczkowa-Łychowa). Parafia erygowana 15 sierpnia 1987 r.
 *   NAZWA OSIEDLA POCHODZI OD ULICY ŚW. JANA, nie od tej parafii.
 *   NIE UMIESZCZAĆ parafii na tej stronie,
 * — DROGI ŁĄCZĄCEJ DK94 Z UL. BRZEŹNICKĄ. Projekt się przeciąga,
 *   bo na planowanym zjeździe WYKRYTO CZYNNE OSUWISKO i GDDKiA nakazała
 *   ok. 18 miesięcy monitoringu. Temat niepewny i zmienny — POMINIĘTY,
 * — LICZBY PIĘTER I WIND w blokach spółdzielczych,
 * — GLINIANKI DAWNEJ CEGIELNI z odsłonięciem gipsów włóknistych
 *   i alabastru. ⚠️ Wątek gipsowy należy do UZBORNI.
 *
 * PUŁAPKI:
 * — ⚠️ Ul. Floris jest podzielona między Osiedle 1 (do Pl. Bolesława
 *   Wstydliwego) i Osiedle 11 (od Pl. Bolesława Wstydliwego),
 * — ⚠️ Ul. Murowianka jest podzielona: do kapliczki należy
 *   do Krzęczkowa-Łychowa, dalej tutaj.
 */
export const BOCHNIA_SW_JANA_MUROWIANKA: DistrictContent = {
  slug: "bochnia-sw-jana-murowianka",
  urlPath: "/thermomix/bochnia/sw-jana-murowianka",
  nazwa: "Św. Jana-Murowianka",
  miejscownik: "Murowiance",
  przyimek: "na",
  miasto: { nazwa: "Bochnia", slug: "bochnia", urlPath: "/thermomix/bochnia" },

  h1: "Thermomix Św. Jana-Murowianka — prezentacja u Ciebie w domu",
  seoTitle: "Thermomix Murowianka Bochnia — prezentacja na osiedlu",
  seoDescription:
    "Thermomix na Murowiance i przy św. Jana w Bochni: bezpłatna prezentacja TM7 u Ciebie w kuchni — Brzeźnicka, Floris, Krasińskiego, Osiki. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam pod adresy przy świętego Jana, Murowiance, Brzeźnickiej, Floris, Krasińskiego i Osiki. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni — w bloku z lat siedemdziesiątych tak samo jak w mieszkaniu oddanym trzy lata temu. Prezentacja jest bezpłatna.",

  osiedla: [
    "Murowianka",
    "św. Jana",
    "Brzeźnicka",
    "Floris",
    "Krasińskiego",
    "płk. Osiki",
  ],

  sections: [
    {
      id: "kaplica",
      heading: "Kaplicę zbudowali trzej bracia górnicy",
      paragraphs: [
        "Na stoku opadającym w stronę centrum, przy Brzeźnickiej, stoi kaplica Matki Boskiej Anielskiej. Postawili ją w latach tysiąc osiemset pięćdziesiątym czwartym do pięćdziesiątego szóstego trzej bracia: Michał, Wincenty i Tomasz Łosikowie, z zawodu górnicy. Grunt podarował im Józef Kronenberg.",
        "To nie była kapliczka przydrożna, tylko budynek z kamienia i cegły, późnoklasycystyczny, z wieżyczką sygnaturką. Prawie czterdzieści lat później, w tysiąc osiemset dziewięćdziesiątym drugim, rozbudowano ją o prezbiterium, przez co stała się miniaturowym kościołem. Wnętrze pokrywają polichromie Jana Lubrańskiego, a obok bije źródełko.",
        "W tysiąc osiemset pięćdziesiątym szóstym przeniesiono tu barokową figurę Matki Boskiej Anielskiej, która wcześniej stała u bernardynów, a potem w Krzyżanowicach. Warto wiedzieć, że oryginał znajduje się dziś w kościele świętego Jana, a w kaplicy stoi kopia. Odpust obchodzi się w pierwszą niedzielę sierpnia.",
        "Sama nazwa Murowianka jest starsza niż nazwa osiedla i nikt nie umie jej rozstrzygnąć. Jedni wywodzą ją od murowanej świątyni sprzed wieków, inni od zniekształconego słowa Morowianka, czyli miejsca cmentarza epidemicznego. Zostawiam obie wersje, bo nie znalazłam źródła, które by którąś przesądziło.",
      ],
    },
    {
      id: "kuchnia",
      heading: "Pięćdziesiąt lat różnicy na jednym osiedlu",
      paragraphs: [
        "To osiedle ma sześć ulic i mieszkania z dwóch zupełnie różnych epok, oddalone od siebie o kilka minut spaceru.",
        "Starsza część to trzy niewielkie bloki spółdzielni: przy Floris z tysiąc dziewięćset siedemdziesiątego drugiego, przy Brzeźnickiej z siedemdziesiątego ósmego i przy świętego Jana z osiemdziesiątego drugiego. Największy ma czterdzieści osiem mieszkań, najmniejszy dwadzieścia. Kuchnia jest tam osobna i niewielka, a instalacja z epoki — więc pytam wtedy, czy na tym samym obwodzie nie pracuje piekarnik albo czajnik, bo urządzenie bierze około tysiąca pięciuset watów.",
        "Nowsza część to zabudowa deweloperska stawiana od dwa tysiące dwudziestego drugiego roku: dwa budynki, sześćdziesiąt osiem mieszkań, metraże od trzydziestu jeden do sześćdziesięciu jeden metrów, pięć kondygnacji i garaż pod spodem. Tam kuchnia jest aneksem otwartym na salon, instalacja nowa, a przy trzydziestu jeden metrach kluczowe jest co innego — ile sprzętów w ogóle trzeba mieć.",
        "Odpowiedź jest w obu przypadkach ta sama, tylko z innym uzasadnieniem. W bloku z lat siedemdziesiątych liczy się to, że jedno urządzenie zastępuje blender, malakser i mikser, więc z krótkiego blatu coś znika. W kawalerce w nowym budynku — że nie trzeba ich kupować w ogóle.",
      ],
      bullets: [
        "trzy bloki spółdzielni z lat siedemdziesiątych i osiemdziesiątych",
        "nowa zabudowa od dwa tysiące dwudziestego drugiego, mieszkania od trzydziestu jeden metrów",
        "w starszej zabudowie pytam o obwód elektryczny",
      ],
    },
    {
      id: "dojazd",
      heading: "Trzysta metrów od Rynku, a parkomatu nie ma",
      paragraphs: [
        "To jest najprzyjemniejsza rzecz w dojeżdżaniu na to osiedle. Do Rynku jest stąd od dwustu pięćdziesięciu do czterystu pięćdziesięciu metrów, czyli spacer, a mimo to żadna z sześciu ulic osiedla nie leży w strefie płatnego parkowania. Sąsiednie Śródmieście-Campi jest w strefie niemal w całości.",
        "Nie znaczy to, że miejsca jest w bród. Mieszkańcy przeznaczyli niedawno pieniądze z budżetu obywatelskiego na wygospodarowanie miejsc postojowych za istniejącymi garażami, a przy skrzyżowaniu świętego Jana musieli wywalczyć przejście dla pieszych. Jedno i drugie mówi sporo o tym, jak tu bywa popołudniami.",
        "Z tego samego budżetu powstał zresztą pierwszy w Bochni park kieszonkowy — właśnie na tym osiedlu — a przy nim plac zabaw i boisko.",
        "Przy umawianiu warto pamiętać o jednej pułapce w adresach. Zarówno Floris, jak i Murowianka są podzielone między dwa osiedla: Floris od placu Bolesława Wstydliwego należy tutaj, a Murowianka dopiero za kapliczką. Dla mnie to bez znaczenia, bo dojeżdżam wszędzie bez dopłaty — po prostu proszę o numer domu.",
      ],
    },
  ],

  faq: [
    {
      question: "Mieszkam blisko Rynku. Czy będziesz miała gdzie zaparkować?",
      answer:
        "Będę i to akurat najłatwiejsze osiedle w tej części miasta. Żadna z sześciu ulic nie leży w strefie płatnego parkowania, mimo że do Rynku jest stąd kilka minut pieszo. Popołudniami bywa ciasno, bo miejsc jest mniej niż samochodów, więc przy późniejszych terminach wyjeżdżam z zapasem — Ciebie to nie kosztuje ani minuty.",
    },
    {
      question: "Mam mieszkanie trzydzieści jeden metrów w nowym bloku. Czy Thermomix się tam zmieści?",
      answer:
        "Zmieści i przy takim metrażu ma nawet więcej sensu niż w dużej kuchni. Urządzenie zajmuje mniej więcej tyle miejsca co czajnik z podstawką, a zastępuje blender kielichowy, malakser, mikser i wagę kuchenną — czyli cztery rzeczy, których wtedy w ogóle nie musisz kupować. Zupa i krem powstają w jednym naczyniu, więc do zlewu idzie mniej. Chętnie pokażę dokładny wymiar na miejscu, żeby to była decyzja na podstawie centymetrów.",
    },
    {
      question: "Mieszkam przy Murowiance. To Wasze osiedle?",
      answer:
        "Zależy, po której stronie kapliczki, bo tak właśnie zapisano granicę w statucie miasta. Odcinek od Brzeźnickiej do kapliczki należy do osiedla Krzęczków-Łychów, dalszy — do Św. Jana-Murowianki. Podobnie podzielona jest ulica Floris, między Śródmieście-Campi a to osiedle. Dojeżdżam na wszystkie bez dopłaty, więc wystarczy, że podasz numer domu.",
    },
  ],

  geo: { lat: 49.9667, lng: 20.4396 },
};
