import type { DistrictContent } from "./typy";

/**
 * ŁAGIEWNIKI-BOREK FAŁĘCKI (IX) — jedna z mniejszych dzielnic Krakowa,
 * o charakterze mieszanym: bloki, domy i tereny poprzemysłowe.
 *
 * Fakty potwierdzone i użyte:
 * — obszary: Łagiewniki, Borek Fałęcki, Kobierzyn, Cegielniana,
 *   Sanktuarium Bożego Miłosierdzia,
 * — Solvay Park powstał na terenie dawnych zakładów sodowych Solvay,
 * — Sanktuarium Bożego Miłosierdzia — punkt orientacyjny znany w całej
 *   Polsce, ruch pielgrzymkowy,
 * — Trasa Łagiewnicka (otwarta w 2022) zmieniła układ ruchu w dzielnicy,
 * — Zakopianka jako główny korytarz i jednocześnie wąskie gardło,
 * — brak strefy płatnego parkowania,
 * — przewaga starszej zabudowy z osobnymi kuchniami; nowe inwestycje
 *   pojawiają się punktowo.
 *
 * Nie podaję udziałów procentowych struktury wieku — nie mam ich
 * potwierdzonych dla tej dzielnicy.
 */
export const KRAKOW_LAGIEWNIKI_BOREK_FALECKI: DistrictContent = {
  slug: "krakow-lagiewniki-borek-falecki",
  urlPath: "/thermomix/krakow/lagiewniki-borek-falecki",
  nazwa: "Łagiewniki-Borek Fałęcki",
  miejscownik: "Łagiewnikach",
  miasto: { nazwa: "Kraków", slug: "krakow", urlPath: "/thermomix/krakow" },

  h1: "Thermomix Łagiewniki i Borek Fałęcki — prezentacja u Ciebie",
  seoTitle: "Thermomix Łagiewniki-Borek Fałęcki — prezentacja w Krakowie",
  seoDescription:
    "Thermomix w Łagiewnikach i Borku Fałęckim: bezpłatna prezentacja TM7 u Ciebie w kuchni — także Kobierzyn i Cegielniana. Aga, tel. 517 185 691.",

  lead:
    "Dojeżdżam do Łagiewnik, Borku Fałęckiego, na Kobierzyn i Cegielnianą. Przywożę Thermomix TM7 i gotujemy razem u Ciebie w kuchni. Prezentacja jest bezpłatna i do niczego nie zobowiązuje.",

  osiedla: [
    "Łagiewniki",
    "Borek Fałęcki",
    "Kobierzyn",
    "Cegielniana",
    "os. Cegielniana",
    "Zakopiańska",
  ],

  sections: [
    {
      id: "kuchnia",
      heading: "Przewaga starszej zabudowy — czyli kuchnia osobna",
      paragraphs: [
        "W tej dzielnicy przeważa starszy zasób: bloki i domy, w których kuchnia jest osobnym pomieszczeniem, a nie aneksem otwartym na salon. Nowe inwestycje pojawiają się punktowo i nie zmieniają tego obrazu.",
        "To ma dwa praktyczne skutki. Pierwszy: blat bywa krótki, więc przy dwóch osobach robi się ciasno — i wtedy po prostu przenosimy część spotkania do stołu w pokoju. Urządzenie potrzebuje wyłącznie gniazdka, więc nic na tym nie tracimy.",
        "Drugi dotyczy prądu. Thermomix pobiera około tysiąca pięciuset watów, a w starszych mieszkaniach obwód kuchenny bywa zabezpieczony na szesnaście amperów. Nie uruchamiam go wtedy razem z czajnikiem i piekarnikiem. To wszystko, co trzeba wiedzieć — nigdy nie było z tego problemu, ale wolę wiedzieć wcześniej niż w połowie gotowania.",
      ],
    },
    {
      id: "dojazd",
      heading: "Zakopianka, Trasa Łagiewnicka i ruch pielgrzymkowy",
      paragraphs: [
        "Zakopianka to jednocześnie największa zaleta i największy problem tej dzielnicy. Wyjazd na południe masz od razu, ale w piątkowe popołudnia i w sezonie ruch potrafi stanąć. Trasa Łagiewnicka zdjęła część obciążenia z lokalnych ulic, choć nie wszystko.",
        "Drugi czynnik jest tutaj specyficzny: Sanktuarium Bożego Miłosierdzia ściąga ruch pielgrzymkowy z całej Polski, a przy większych uroczystościach okolica potrafi być zakorkowana w środku tygodnia. Śledzę to i przy takich terminach wyjeżdżam odpowiednio wcześniej.",
        "Strefy płatnego parkowania w dzielnicy nie ma, więc samo zaparkowanie pod adresem zwykle nie jest problemem. Za dojazd i tak nie płacisz — bez względu na to, ile mi zajmie.",
      ],
    },
    {
      id: "solvay",
      heading: "Solvay Park w pięć minut — i co z tego wynika",
      paragraphs: [
        "Solvay Park stoi na terenie dawnych zakładów sodowych i jest dla wielu mieszkańców głównym miejscem zakupów. Wygoda jest oczywista, ale ma swoją cenę: przy centrum handlowym łatwo skończyć z gotowym daniem zamiast obiadu ugotowanego w domu.",
        "Nie namawiam, żeby przestać tam jeździć — mówię tylko, że po zakupie zwykle robi się to rzadziej. Nie dlatego, że urządzenie gotuje szybciej niż garnek, tylko dlatego, że nie wymaga, żeby ktoś przy nim stał. Nastawiasz i idziesz zrobić coś innego.",
        "Na prezentacji gotujemy dokładnie takie rzeczy: obiad na wtorek, zupę, coś, co realnie wraca na stół co tydzień. Jeśli masz w domu składniki, z których zwykle coś robisz, powiedz przy umawianiu — ugotujemy z nich.",
      ],
    },
  ],

  faq: [
    {
      question: "Czy dojeżdżasz na Kobierzyn i Cegielnianą?",
      answer:
        "Tak, do wszystkich części dzielnicy — Łagiewnik, Borku Fałęckiego, Kobierzyna i Cegielnianej. Dojazd jest bezpłatny.",
    },
    {
      question: "Mam małą, osobną kuchnię. Czy damy radę gotować we dwie?",
      answer:
        "Zwykle tak, a jeśli nie — przenosimy się do stołu w pokoju. Urządzenie potrzebuje tylko gniazdka, więc nic nie tracimy, a siedzi się wygodniej.",
    },
    {
      question: "Ile trwa prezentacja?",
      answer:
        "Około dwóch godzin. Ugotujemy razem kilka rzeczy, spokojnie przejdziemy przez obsługę i przez ceny oraz raty. Nic nie musisz decydować na miejscu.",
    },
  ],

  geo: { lat: 50.0139, lng: 19.9203 },
};
