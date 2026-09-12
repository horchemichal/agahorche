import type { CityContent } from "../city-content";
import {
  REGION_POMORZE,
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
 * ŻUKOWO — miasto w powiecie kartuskim, 6 723 mieszkańców
 * (31.12.2024, GUS). Brief mówił 7 000 — lekko zawyżone.
 *
 * NAJWAŻNIEJSZA LICZBA: cała GMINA urosła od 2002 r. o 123,9%,
 * podczas gdy samo MIASTO tylko o 10,5%. To znaczy, że przyrost
 * poszedł do wsi wokół miasta — Banina, Chwaszczyna, Borkowa,
 * Rębiechowa, Miszewa. To jest sypialnia Trójmiasta i to jest
 * klucz do zrozumienia tutejszego dnia.
 *
 * OBWODNICA ŻUKOWA — oddana 1 CZERWCA 2026 r.
 *
 * ŻUKOWSKA SZKOŁA HAFTU KASZUBSKIEGO: jedna z kilku szkół haftu
 * na Kaszubach, wyróżniana kolorystyką — dominują błękity
 * i żółcie, CZERWIENI PRAKTYCZNIE NIE MA poza wisienkami.
 * Wywodzi się z klasztoru norbertanek. UWAGA: to jest wiedza
 * Kaszubów o sobie — podaję ją z szacunkiem, powściągliwie,
 * bez pouczania.
 *
 * PIĘĆ OSIEDLI STATUTOWYCH w mieście.
 *
 * KĄT: NAWYK. Jak powstaje nawyk gotowania — i dlaczego sprzęt
 * kupiony bez zmiany nawyku ląduje w szafce. Kąt bierze się
 * z życia sypialni Trójmiasta: wyjazd przed siódmą, powrót po
 * osiemnastej, a między tym dwie godziny na wszystko.
 *
 * SEKCJA MA POWIEDZIEĆ WPROST:
 * — że najczęstszy powód, dla którego to urządzenie stoi
 *   nieużywane, to NIE cena i nie brak umiejętności, tylko brak
 *   zmiany nawyku,
 * — że pierwsze tygodnie są GORSZE, nie lepsze — bo trzeba się
 *   uczyć, a jest się zmęczonym,
 * — że sprzęt schowany do szafki jest sprzętem straconym
 *   i miejsce na blacie jest warunkiem, nie ozdobą,
 * — że nawyk buduje się na JEDNEJ rzeczy powtarzanej, a nie
 *   na dziesięciu nowych przepisach,
 * — że przy dojazdach do Trójmiasta realny plan to gotowanie
 *   w niedzielę, a nie codzienne gotowanie o dziewiętnastej,
 * — i że jeśli ktoś wie o sobie, że nie zmieni rytmu dnia,
 *   to lepiej niech nie kupuje — powiem to i stracę sprzedaż.
 *
 * TWARDE GRANICE:
 * — ŻADNYCH USTAWIEŃ, CZASÓW ANI TEMPERATUR.
 * — ŻADNYCH PORAD O PRZECHOWYWANIU JEDZENIA przez tydzień.
 *   ODMOWA W TEKŚCIE.
 * — ŻADNYCH TWIERDZEŃ ZDROWOTNYCH ani o zmęczeniu, śnie, stresie
 *   czy „work-life balance" jako sprawach zdrowia.
 * — ŻADNEJ PSYCHOLOGII AMATORSKIEJ — piszę o organizacji dnia,
 *   nie o głowie ludzi.
 * — ŻADNYCH NAZW FIRM.
 * — NIE OPOWIADAM Kaszubom o Kaszubach — haft wspominam
 *   krótko i z szacunkiem, jako ich rzecz, nie moją.
 *
 * ROZGRANICZENIE OD KĄTÓW ZAJĘTYCH. „Dojazdy do pracy" — jeśli
 * gdzieś padło — dotyczyłyby transportu i czasu w drodze.
 * „Gotowanie na zapas i mrożenie" (Stopnica) dotyczy techniki
 * zapasu. „Poza sezonem" (Ustka) dotyczy rytmu roku. Tutaj
 * chodzi o NAWYK jako taki: o to, że sprzęt sam z siebie nie
 * zmieni niczego, i o warunki, w których zmienia.
 *
 * CZEGO NIE TWIERDZĘ:
 * — NIE PODAJĘ nazw firm ani liczby dojeżdżających do pracy.
 * — NIE OPISUJĘ wzorów haftu ani ich znaczeń — to nie moja
 *   dziedzina i nie moja kultura.
 * — NIE PODAJĘ długości ani kosztu obwodniczy, tylko datę
 *   oddania.
 * — NIE PISZĘ o produkcie z Listy Produktów Tradycyjnych.
 * — NIE PODAJĘ nazw pięciu osiedli, bo ich pełnej listy
 *   nie potwierdziłam. districts to PUSTA TABLICA, a w tekście
 *   piszę tylko, że osiedla istnieją.
 *
 * FAKTY UŻYTE W TEKŚCIE (publiczne, sprawdzone):
 * — 6 723 mieszkańców miasta (31.12.2024, GUS),
 * — gmina urosła od 2002 r. o 123,9%, miasto o 10,5%,
 * — obwodnica Żukowa oddana 1 czerwca 2026 r.,
 * — żukowska szkoła haftu kaszubskiego, wywodząca się
 *   z klasztoru norbertanek, wyróżniana kolorystyką bez
 *   czerwieni,
 * — miasto dzieli się na pięć osiedli statutowych.
 */
export const ZUKOWO: CityContent = {
  slug: "zukowo",
  h1: "Thermomix Żukowo – prezentacja u Ciebie w kuchni",
  seoTitle: "Thermomix Żukowo (pomorskie) — przedstawiciel i cena",
  seoDescription:
    "Thermomix w Żukowie: bezpłatna prezentacja TM7 u Ciebie w domu, całe miasto i gmina. Cena, raty 0%. Aga, tel. 517 185 691.",
  ogTitle: "Thermomix Żukowo — prezentacja u Ciebie w kuchni",
  ogDescription:
    "Gotujemy razem w Twojej kuchni w Żukowie. Prezentacja i dojazd bezpłatne.",

  lead:
    "Przyjeżdżam do Żukowa z Thermomixem TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja i dojazd są bezpłatne — do całego miasta i do wsi gminy.",

  highlights: highlightyStandardowe("Żukowo i cała gmina"),

  heroPhoto: {
    src: "/zdjecia/prezentacja-thermomix-1.webp",
    alt: "Aga Horche podczas prezentacji Thermomixa TM7 w domu klientki",
    caption: "Sprzęt schowany do szafki to sprzęt stracony.",
  },

  sections: [
    {
      id: "prezentacja",
      heading: "Thermomix w Żukowie – jak wygląda prezentacja?",
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
      id: "nawyk",
      heading: "Gmina, która urosła o sto dwadzieścia procent — czyli o nawyku, nie o sprzęcie",
      paragraphs: [
        "Od 2002 roku gmina Żukowo urosła o prawie sto dwadzieścia cztery procent, a samo miasto tylko o dziesięć. Cała reszta poszła do wsi wokół — Banina, Chwaszczyna, Borkowa, Rębiechowa. Wybudowali się tu ludzie, którzy pracują w Trójmieście: wyjazd przed siódmą, powrót po osiemnastej, a między jednym a drugim całe życie domowe. Obwodnica, oddana 1 czerwca 2026 roku, trochę to poprawiła, ale rytmu dnia nie odwróciła.",
        "Dlatego napiszę tutaj o rzeczy, która decyduje o tym zakupie bardziej niż cena, kolor i wszystkie funkcje razem wzięte: o nawyku.",
        "Znam wystarczająco dużo kuchni, żeby wiedzieć, jak wygląda nieudany zakup. Nie wygląda tak, że urządzenie się zepsuło albo że komuś nie wyszło ciasto. Wygląda tak, że stoi w szafce pod blatem. Ktoś go używał przez trzy tygodnie, potem przyszedł ciężki miesiąc, sprzęt trafił do schowania „na chwilę” i już z niej nie wrócił. Powód nie jest techniczny. Powód jest taki, że nie zmienił się sposób, w jaki ta rodzina organizuje jedzenie.",
        "Powiem więc trzy rzeczy, które nie brzmią jak reklama.",
        "Pierwsza: pierwsze tygodnie są gorsze, nie lepsze. Trzeba się uczyć nowego sprzętu wtedy, gdy jest się zmęczonym po pracy i po drodze. To jest najtrudniejszy moment i tam ludzie odpadają. Kto o tym wie zawczasu, przechodzi przez to spokojniej.",
        "Druga: miejsce na blacie jest warunkiem, nie ozdobą. Urządzenie, które trzeba wyjąć z szafki, podnieść i postawić, będzie używane raz w tygodniu, a potem wcale. Zanim je kupicie, sprawdźcie, gdzie fizycznie stanie i czy tam jest gniazdko. Jeżeli takiego miejsca nie ma, to jest realny argument, żeby się wstrzymać.",
        "Trzecia: nawyk buduje się na jednej rzeczy, nie na dziesięciu. Nie zaczynajcie od dziesięciu nowych przepisów. Wybierzcie jedno danie, które i tak robicie co tydzień, i róbcie je tylko w tym urządzeniu przez miesiąc. Potem drugie. To działa, a rzucanie się na wszystko naraz nie działa.",
        "Przy dojazdach do Trójmiasta dodam jeszcze jedno, konkretne: realny plan to nie jest gotowanie codziennie o dziewiętnastej. Realny plan to jedna dłuższa sesja w niedzielę i odgrzewanie w tygodniu. Ale o tym, jak długo ugotowane jedzenie może stać w lodówce, nie doradzę — to jest bezpieczeństwo żywności, a nie obsługa sprzętu, i po tę wiedzę trzeba pójść gdzie indziej.",
        "I rzecz, która kosztuje mnie sprzedaż, więc tym bardziej ją napiszę: jeżeli wiesz o sobie, że nie zmienisz rytmu dnia i że po powrocie do domu i tak nie podejdziesz do kuchni — nie kupuj. To urządzenie nie robi obiadu za człowieka. Robi go szybciej i bez stania nad garnkiem, ale ktoś musi je włączyć.",
      ],
      links: [
        { href: "/przepisy", label: "Przepisy" },
        { href: "/thermomix/wady-i-zalety", label: "Wady i zalety — bez ściemy" },
      ],
    },
    {
      id: "jak-umowic",
      heading: "Jak umówić prezentację w Żukowie?",
      paragraphs: [
        "Zadzwoń albo napisz SMS. Możesz też zostawić kontakt w formularzu i wskazać porę oddzwonienia.",
        "Jeżeli wracacie z Trójmiasta po osiemnastej, umówmy się na taką godzinę, żeby nikt się nie spieszył. Wieczory i weekendy są w porządku.",
      ],
      links: [
        { href: "/prezentacja", label: "Umów prezentację przez formularz" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
    sekcjaTm7(),
    sekcjaCena("w Żukowie"),
    sekcjaRaty(),
    {
      id: "rodzina",
      heading: "Thermomix dla żukowskiej rodziny",
      paragraphs: [
        "Żukowo liczy niespełna siedem tysięcy mieszkańców, ale cała gmina od 2002 roku urosła o prawie sto dwadzieścia cztery procent — najwięcej przybyło we wsiach wokół miasta, zamieszkanych w dużej części przez osoby pracujące w Trójmieście. Miasto dzieli się na pięć osiedli, a od 1 czerwca 2026 roku ma obwodnicę. Żukowo jest też znane z własnej szkoły haftu kaszubskiego, wywodzącej się z dawnego klasztoru norbertanek i rozpoznawalnej po kolorystyce, w której nie ma właściwie czerwieni — ale to jest wiedza, którą Kaszubi mają lepiej ode mnie, więc zostawiam ją im.",
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

  districtsHeading: "Do których części Żukowa dojeżdżam?",
  districtsParagraphs: [
    "Do całego miasta, do wszystkich jego osiedli, i do wsi gminy — Banina, Chwaszczyna, Borkowa, Rębiechowa, Miszewa, Przyjaźni, Niestępowa i pozostałych. Dojazd jest wszędzie bezpłatny.",
    "Przy umawianiu wystarczy podać ulicę albo miejscowość.",
  ],
  districts: [],

  nearbyHeading: "Poza Żukowo też przyjadę",
  nearbyParagraphs: [
    "Kartuzy, Gdańsk, Gdynia, Pruszcz Gdański, Kościerzyna, Reda i okoliczne miejscowości są w zasięgu jednej trasy — dojazd jest wszędzie bezpłatny.",
  ],
  nearbyTowns: ["Kartuzy", "Gdańsk", "Gdynia", "Pruszcz Gdański", "Kościerzyna", "Rumia"],

  about: blokOMnie("do Żukowa", "w Żukowie i okolicy", REGION_POMORZE),

  faq: [
    {
      question: "Czy dojeżdżasz do Żukowa bez dodatkowej opłaty?",
      answer:
        "Tak, do całego miasta i do wsi gminy — Banina, Chwaszczyna, Borkowa, Rębiechowa i pozostałych. Dojazd jest bezpłatny tak samo jak sama prezentacja.",
    },
    ...faqWspolne("w Żukowie"),
    {
      question: "Boję się, że sprzęt skończy w szafce. Co zrobić?",
      answer:
        "Trzy rzeczy. Wiedzieć, że pierwsze tygodnie są gorsze, nie lepsze — uczysz się wtedy, gdy jesteś zmęczona. Mieć dla niego stałe miejsce na blacie z gniazdkiem, bo sprzęt wyjmowany z szafki przestaje być używany. I budować nawyk na jednym daniu powtarzanym przez miesiąc, a nie na dziesięciu nowych przepisach naraz.",
    },
    {
      question: "Wracam z Trójmiasta po osiemnastej. Czy to ma sens?",
      answer:
        "Ma, ale nie w formie codziennego gotowania o dziewiętnastej — to się nie utrzyma. Realny plan to jedna dłuższa sesja w niedzielę i odgrzewanie w tygodniu.",
    },
    {
      question: "Kiedy odradzasz zakup?",
      answer:
        "Kiedy ktoś wie o sobie, że nie zmieni rytmu dnia i po powrocie do domu i tak nie podejdzie do kuchni. To urządzenie nie robi obiadu za człowieka — robi go szybciej i bez stania nad garnkiem, ale ktoś musi je włączyć.",
    },
  ],

  geo: { lat: 54.3453, lng: 18.3639 },
};
