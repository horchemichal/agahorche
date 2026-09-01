import type { Meal } from "@/types/diet";
import { meal } from "./meal-factory";

/**
 * OŚ PLIKU
 * Dni 8–14 wariantów dwutygodniowych. Plany 7-dniowe (data/diets/categories.ts)
 * dostarczają dni 1–7; ten plik dokłada drugi tydzień, a `fortnightPlan()`
 * skleja jedno z drugim.
 *
 * DLACZEGO POWSTAŁ (1.09.2026, pytanie Agi: „czy wszystkie diety i warianty
 * zrobiłeś w panelu diet?"). Konfigurator od początku pokazywał przełącznik
 * „7 dni / 14 dni", ale ani jeden plan nie miał `durationDays: 14` — klik
 * w „14 dni" kończył się komunikatem „ten wariant diety pojawi się wkrótce".
 * Przycisk obiecywał treść, której nie było.
 *
 * SKĄD SIĘ WZIĄŁ DRUGI TYDZIEŃ. Nie z wymyślonych dań. Dla każdej kategorii
 * pula = przepisy użyte już w JEJ własnych planach 1500 i 2000 kcal (każdy
 * z prawdziwym adresem na Cookidoo i wartościami z tego przepisu), pogrupowane
 * według pory posiłku — śniadanie zostaje śniadaniem. Z tej puli złożono
 * siedem nowych dni tak, żeby:
 *   · suma dnia mieściła się w ±3 kcal od celu (1500 albo 2000),
 *   · węglowodany nie przekroczyły maksimum z tygodnia 1 tej kategorii +5%
 *     (dla keto to 42 g na dobę — drugi tydzień zostaje ketogeniczny),
 *   · żaden przepis nie powtórzył się dwa razy w jednym dniu ani więcej
 *     niż dwa razy w tygodniu.
 * Wariant 1500 i 2000 kcal korzystają z tej samej puli, więc drugi tydzień
 * przynosi dania, które w pierwszym tygodniu danego wariantu nie wystąpiły.
 *
 * CZEGO TU NIE MA: nowych przepisów, gramatur i porad zdrowotnych. To ta sama
 * treść przykładowa co w tygodniu 1 — patrz `isExampleData` i baner
 * components/diets/example-data-notice.tsx.
 *
 * Plik jest wygenerowany deterministycznie (ziarno 20260901). Jeśli kiedyś
 * trzeba go przeliczyć od nowa — łatwiej napisać generator jeszcze raz niż
 * ręcznie stroić kalorie; opis algorytmu wyżej wystarczy.
 */

export const KETO_1500_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r253624"),
    meal("drugie-sniadanie", "cd-r10791"),
    meal("obiad", "cd-r694482"),
    meal("podwieczorek", "cd-r179030"),
    meal("kolacja", "cd-r550550", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r924701"),
    meal("drugie-sniadanie", "cd-r130668"),
    meal("obiad", "cd-r323093"),
    meal("podwieczorek", "cd-r56968"),
    meal("kolacja", "cd-r302807"),
  ],
  [
    meal("sniadanie", "cd-r924701"),
    meal("drugie-sniadanie", "cd-r936264", undefined, 1.5),
    meal("obiad", "cd-r239297", undefined, 1.5),
    meal("podwieczorek", "cd-r465526", undefined, 1.5),
    meal("kolacja", "cd-r248563", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r253624"),
    meal("drugie-sniadanie", "cd-r329637"),
    meal("obiad", "cd-r323093", undefined, 1.5),
    meal("podwieczorek", "cd-r724920", undefined, 1.5),
    meal("kolacja", "cd-r117331", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r938346", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r94722"),
    meal("obiad", "cd-r928151", undefined, 2),
    meal("podwieczorek", "cd-r465526", undefined, 1.5),
    meal("kolacja", "cd-r117331", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r828221"),
    meal("drugie-sniadanie", "cd-r595475", undefined, 2),
    meal("obiad", "cd-r629256"),
    meal("podwieczorek", "cd-r724920", undefined, 1.5),
    meal("kolacja", "cd-r248563"),
  ],
  [
    meal("sniadanie", "cd-r901400"),
    meal("drugie-sniadanie", "cd-r10791", undefined, 1.5),
    meal("obiad", "cd-r629256"),
    meal("podwieczorek", "cd-r373411", undefined, 1.5),
    meal("kolacja", "cd-r550550"),
  ],
];

export const KETO_2000_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r253624", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r10791", undefined, 2),
    meal("obiad", "cd-r323093", undefined, 1.5),
    meal("podwieczorek", "cd-r828222", undefined, 1.5),
    meal("kolacja", "cd-r277666"),
  ],
  [
    meal("sniadanie", "cd-r938346", undefined, 2),
    meal("drugie-sniadanie", "cd-r94722", undefined, 2),
    meal("obiad", "cd-r629256", undefined, 2),
    meal("podwieczorek", "cd-r373411"),
    meal("kolacja", "cd-r117331", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r828221"),
    meal("drugie-sniadanie", "cd-r936264", undefined, 2),
    meal("obiad", "cd-r928178"),
    meal("podwieczorek", "cd-r828222", undefined, 1.5),
    meal("kolacja", "cd-r458454"),
  ],
  [
    meal("sniadanie", "cd-r901400", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r737547", undefined, 1.5),
    meal("obiad", "cd-r694482"),
    meal("podwieczorek", "cd-r179030", undefined, 1.5),
    meal("kolacja", "cd-r248563", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r924701", undefined, 2),
    meal("drugie-sniadanie", "cd-r130668"),
    meal("obiad", "cd-r629256", undefined, 2),
    meal("podwieczorek", "cd-r724920"),
    meal("kolacja", "cd-r550550"),
  ],
  [
    meal("sniadanie", "cd-r508640"),
    meal("drugie-sniadanie", "cd-r595475"),
    meal("obiad", "cd-r239297"),
    meal("podwieczorek", "cd-r56968", undefined, 2),
    meal("kolacja", "cd-r302807", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r924701"),
    meal("drugie-sniadanie", "cd-r595475"),
    meal("obiad", "cd-r239297", undefined, 1.5),
    meal("podwieczorek", "cd-r179030", undefined, 1.5),
    meal("kolacja", "cd-r277666", undefined, 2),
  ],
];

export const WEGETARIANSKA_1500_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r10001"),
    meal("drugie-sniadanie", "cd-r507517", undefined, 1.5),
    meal("obiad", "cd-r139694"),
    meal("podwieczorek", "cd-r253492"),
    meal("kolacja", "cd-r105756", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r806175", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r724920"),
    meal("obiad", "cd-r928936"),
    meal("podwieczorek", "cd-r465526"),
    meal("kolacja", "cd-r337148"),
  ],
  [
    meal("sniadanie", "cd-r10001", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r629253", undefined, 2),
    meal("obiad", "cd-r90518"),
    meal("podwieczorek", "cd-r57004", undefined, 1.5),
    meal("kolacja", "cd-r419526", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r828104"),
    meal("drugie-sniadanie", "cd-r938339", undefined, 1.5),
    meal("obiad", "cd-r95258"),
    meal("podwieczorek", "cd-r253492", undefined, 1.5),
    meal("kolacja", "cd-r824131"),
  ],
  [
    meal("sniadanie", "cd-r912433", undefined, 2),
    meal("drugie-sniadanie", "cd-r608090", undefined, 1.5),
    meal("obiad", "cd-r824131"),
    meal("podwieczorek", "cd-r289759"),
    meal("kolacja", "cd-r419526"),
  ],
  [
    meal("sniadanie", "cd-r806179", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r629253", undefined, 1.5),
    meal("obiad", "cd-r90518"),
    meal("podwieczorek", "cd-r342470"),
    meal("kolacja", "cd-r725769"),
  ],
  [
    meal("sniadanie", "cd-r806179"),
    meal("drugie-sniadanie", "cd-r938339", undefined, 2),
    meal("obiad", "cd-r104411"),
    meal("podwieczorek", "cd-r605961"),
    meal("kolacja", "cd-r337277"),
  ],
];

export const WEGETARIANSKA_2000_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r10001", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r629253", undefined, 1.5),
    meal("obiad", "cd-r928936", undefined, 2),
    meal("podwieczorek", "cd-r342470", undefined, 2),
    meal("kolacja", "cd-r105756"),
  ],
  [
    meal("sniadanie", "cd-r901400"),
    meal("drugie-sniadanie", "cd-r938339"),
    meal("obiad", "cd-r95258"),
    meal("podwieczorek", "cd-r342470"),
    meal("kolacja", "cd-r725769", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r711761", undefined, 2),
    meal("drugie-sniadanie", "cd-r629253", undefined, 1.5),
    meal("obiad", "cd-r82992", undefined, 2),
    meal("podwieczorek", "cd-r253491", undefined, 2),
    meal("kolacja", "cd-r824131"),
  ],
  [
    meal("sniadanie", "cd-r901400", undefined, 2),
    meal("drugie-sniadanie", "cd-r724920", undefined, 1.5),
    meal("obiad", "cd-r755202", undefined, 2),
    meal("podwieczorek", "cd-r57004", undefined, 1.5),
    meal("kolacja", "cd-r537068"),
  ],
  [
    meal("sniadanie", "cd-r939524"),
    meal("drugie-sniadanie", "cd-r737014", undefined, 1.5),
    meal("obiad", "cd-r253632"),
    meal("podwieczorek", "cd-r78202", undefined, 1.5),
    meal("kolacja", "cd-r772228", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r820688", undefined, 2),
    meal("drugie-sniadanie", "cd-r56968"),
    meal("obiad", "cd-r755202", undefined, 2),
    meal("podwieczorek", "cd-r78202", undefined, 2),
    meal("kolacja", "cd-r337148"),
  ],
  [
    meal("sniadanie", "cd-r10001", undefined, 2),
    meal("drugie-sniadanie", "cd-r307447", undefined, 1.5),
    meal("obiad", "cd-r537068"),
    meal("podwieczorek", "cd-r605961"),
    meal("kolacja", "cd-r694307"),
  ],
];

export const ODCHUDZAJACA_1500_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r751441"),
    meal("drugie-sniadanie", "cd-r629253"),
    meal("obiad", "cd-r902339"),
    meal("podwieczorek", "cd-r737547", undefined, 1.5),
    meal("kolacja", "cd-r750522", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r806176"),
    meal("drugie-sniadanie", "cd-r253492"),
    meal("obiad", "cd-r776993", undefined, 1.5),
    meal("podwieczorek", "cd-r605961", undefined, 1.5),
    meal("kolacja", "cd-r289759"),
  ],
  [
    meal("sniadanie", "cd-r900831"),
    meal("drugie-sniadanie", "cd-r629253"),
    meal("obiad", "cd-r776993"),
    meal("podwieczorek", "cd-r605961", undefined, 1.5),
    meal("kolacja", "cd-r917474"),
  ],
  [
    meal("sniadanie", "cd-r459188"),
    meal("drugie-sniadanie", "cd-r595475"),
    meal("obiad", "cd-r550550"),
    meal("podwieczorek", "cd-r507517", undefined, 2),
    meal("kolacja", "cd-r750522", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r329637"),
    meal("drugie-sniadanie", "cd-r253491", undefined, 2),
    meal("obiad", "cd-r806179", undefined, 1.5),
    meal("podwieczorek", "cd-r507517"),
    meal("kolacja", "cd-r822676", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r329637", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r253492"),
    meal("obiad", "cd-r550550", undefined, 2),
    meal("podwieczorek", "cd-r912433", undefined, 1.5),
    meal("kolacja", "cd-r150525", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r900831", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r737547", undefined, 2),
    meal("obiad", "cd-r122664"),
    meal("podwieczorek", "cd-r99342"),
    meal("kolacja", "cd-r822676"),
  ],
];

export const ODCHUDZAJACA_2000_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r828234"),
    meal("drugie-sniadanie", "cd-r345486", undefined, 2),
    meal("obiad", "cd-r902339"),
    meal("podwieczorek", "cd-r605961", undefined, 2),
    meal("kolacja", "cd-r792261"),
  ],
  [
    meal("sniadanie", "cd-r751441", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r56968", undefined, 2),
    meal("obiad", "cd-r806179"),
    meal("podwieczorek", "cd-r737547"),
    meal("kolacja", "cd-r629256"),
  ],
  [
    meal("sniadanie", "cd-r806176"),
    meal("drugie-sniadanie", "cd-r737547", undefined, 1.5),
    meal("obiad", "cd-r490892"),
    meal("podwieczorek", "cd-r912433", undefined, 2),
    meal("kolacja", "cd-r150525", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r900831"),
    meal("drugie-sniadanie", "cd-r629253", undefined, 2),
    meal("obiad", "cd-r253632", undefined, 1.5),
    meal("podwieczorek", "cd-r671211"),
    meal("kolacja", "cd-r822676", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r928937"),
    meal("drugie-sniadanie", "cd-r810086"),
    meal("obiad", "cd-r903799"),
    meal("podwieczorek", "cd-r507517", undefined, 2),
    meal("kolacja", "cd-r792261"),
  ],
  [
    meal("sniadanie", "cd-r928937", undefined, 2),
    meal("drugie-sniadanie", "cd-r465526"),
    meal("obiad", "cd-r122664", undefined, 1.5),
    meal("podwieczorek", "cd-r605961"),
    meal("kolacja", "cd-r917474"),
  ],
  [
    meal("sniadanie", "cd-r806176"),
    meal("drugie-sniadanie", "cd-r465526"),
    meal("obiad", "cd-r122664", undefined, 2),
    meal("podwieczorek", "cd-r57004", undefined, 2),
    meal("kolacja", "cd-r784070", undefined, 1.5),
  ],
];

export const NISKI_IG_1500_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r807338"),
    meal("drugie-sniadanie", "cd-r56968"),
    meal("obiad", "cd-r149027"),
    meal("podwieczorek", "cd-r469122"),
    meal("kolacja", "cd-r900139"),
  ],
  [
    meal("sniadanie", "cd-r753029"),
    meal("drugie-sniadanie", "cd-r828104"),
    meal("obiad", "cd-r772228", undefined, 1.5),
    meal("podwieczorek", "cd-r253492", undefined, 2),
    meal("kolacja", "cd-r900139"),
  ],
  [
    meal("sniadanie", "cd-r944168"),
    meal("drugie-sniadanie", "cd-r465526", undefined, 1.5),
    meal("obiad", "cd-r122664", undefined, 1.5),
    meal("podwieczorek", "cd-r469122"),
    meal("kolacja", "cd-r323093"),
  ],
  [
    meal("sniadanie", "cd-r671211", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r605961", undefined, 1.5),
    meal("obiad", "cd-r149027", undefined, 2),
    meal("podwieczorek", "cd-r595474", undefined, 1.5),
    meal("kolacja", "cd-r248563"),
  ],
  [
    meal("sniadanie", "cd-r98452"),
    meal("drugie-sniadanie", "cd-r254320", undefined, 2),
    meal("obiad", "cd-r725769"),
    meal("podwieczorek", "cd-r289759", undefined, 1.5),
    meal("kolacja", "cd-r239297"),
  ],
  [
    meal("sniadanie", "cd-r944168"),
    meal("drugie-sniadanie", "cd-r465526", undefined, 2),
    meal("obiad", "cd-r772228", undefined, 1.5),
    meal("podwieczorek", "cd-r507517", undefined, 1.5),
    meal("kolacja", "cd-r706924"),
  ],
  [
    meal("sniadanie", "cd-r793259"),
    meal("drugie-sniadanie", "cd-r769590"),
    meal("obiad", "cd-r122664"),
    meal("podwieczorek", "cd-r507517"),
    meal("kolacja", "cd-r817907"),
  ],
];

export const NISKI_IG_2000_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r793259", undefined, 2),
    meal("drugie-sniadanie", "cd-r769590"),
    meal("obiad", "cd-r824131", undefined, 1.5),
    meal("podwieczorek", "cd-r469122", undefined, 2),
    meal("kolacja", "cd-r239297", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r753029"),
    meal("drugie-sniadanie", "cd-r828104", undefined, 2),
    meal("obiad", "cd-r789542"),
    meal("podwieczorek", "cd-r345486", undefined, 1.5),
    meal("kolacja", "cd-r694482", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r793259", undefined, 2),
    meal("drugie-sniadanie", "cd-r465526"),
    meal("obiad", "cd-r149027"),
    meal("podwieczorek", "cd-r926582", undefined, 1.5),
    meal("kolacja", "cd-r323093", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r5416"),
    meal("drugie-sniadanie", "cd-r130662", undefined, 2),
    meal("obiad", "cd-r56971"),
    meal("podwieczorek", "cd-r253492"),
    meal("kolacja", "cd-r706924"),
  ],
  [
    meal("sniadanie", "cd-r98452", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r769590"),
    meal("obiad", "cd-r56971", undefined, 1.5),
    meal("podwieczorek", "cd-r345486", undefined, 2),
    meal("kolacja", "cd-r747255", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r944168", undefined, 2),
    meal("drugie-sniadanie", "cd-r759596", undefined, 1.5),
    meal("obiad", "cd-r772228", undefined, 2),
    meal("podwieczorek", "cd-r253492"),
    meal("kolacja", "cd-r820697"),
  ],
  [
    meal("sniadanie", "cd-r753029", undefined, 2),
    meal("drugie-sniadanie", "cd-r253491", undefined, 1.5),
    meal("obiad", "cd-r122664"),
    meal("podwieczorek", "cd-r56968", undefined, 1.5),
    meal("kolacja", "cd-r706924", undefined, 1.5),
  ],
];

export const HASHIMOTO_1500_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r329637", undefined, 2),
    meal("drugie-sniadanie", "cd-r810086", undefined, 1.5),
    meal("obiad", "cd-r103953"),
    meal("podwieczorek", "cd-r57004", undefined, 2),
    meal("kolacja", "cd-r569406"),
  ],
  [
    meal("sniadanie", "cd-r239293", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r253491"),
    meal("obiad", "cd-r149027"),
    meal("podwieczorek", "cd-r828104", undefined, 2),
    meal("kolacja", "cd-r694482"),
  ],
  [
    meal("sniadanie", "cd-r595475", undefined, 2),
    meal("drugie-sniadanie", "cd-r769590", undefined, 2),
    meal("obiad", "cd-r149027"),
    meal("podwieczorek", "cd-r939318"),
    meal("kolacja", "cd-r928784"),
  ],
  [
    meal("sniadanie", "cd-r595475", undefined, 2),
    meal("drugie-sniadanie", "cd-r810086", undefined, 2),
    meal("obiad", "cd-r122664"),
    meal("podwieczorek", "cd-r57004", undefined, 1.5),
    meal("kolacja", "cd-r10832"),
  ],
  [
    meal("sniadanie", "cd-r793259"),
    meal("drugie-sniadanie", "cd-r345486", undefined, 1.5),
    meal("obiad", "cd-r747139"),
    meal("podwieczorek", "cd-r595474"),
    meal("kolacja", "cd-r149023", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r329637", undefined, 2),
    meal("drugie-sniadanie", "cd-r253491", undefined, 1.5),
    meal("obiad", "cd-r55281"),
    meal("podwieczorek", "cd-r629253", undefined, 1.5),
    meal("kolacja", "cd-r824331", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r239293"),
    meal("drugie-sniadanie", "cd-r608090", undefined, 2),
    meal("obiad", "cd-r103953", undefined, 2),
    meal("podwieczorek", "cd-r759596"),
    meal("kolacja", "cd-r824331"),
  ],
];

export const HASHIMOTO_2000_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r239293", undefined, 2),
    meal("drugie-sniadanie", "cd-r671211", undefined, 1.5),
    meal("obiad", "cd-r747139", undefined, 2),
    meal("podwieczorek", "cd-r59062", undefined, 1.5),
    meal("kolacja", "cd-r939504"),
  ],
  [
    meal("sniadanie", "cd-r149027"),
    meal("drugie-sniadanie", "cd-r769590", undefined, 1.5),
    meal("obiad", "cd-r122664", undefined, 2),
    meal("podwieczorek", "cd-r59062", undefined, 2),
    meal("kolacja", "cd-r708069"),
  ],
  [
    meal("sniadanie", "cd-r329637", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r810086", undefined, 2),
    meal("obiad", "cd-r758846", undefined, 1.5),
    meal("podwieczorek", "cd-r94722"),
    meal("kolacja", "cd-r708069"),
  ],
  [
    meal("sniadanie", "cd-r656643", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r345486", undefined, 2),
    meal("obiad", "cd-r695230"),
    meal("podwieczorek", "cd-r936264", undefined, 1.5),
    meal("kolacja", "cd-r928784", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r329637", undefined, 2),
    meal("drugie-sniadanie", "cd-r810086", undefined, 2),
    meal("obiad", "cd-r800554", undefined, 1.5),
    meal("podwieczorek", "cd-r94722"),
    meal("kolacja", "cd-r569406"),
  ],
  [
    meal("sniadanie", "cd-r149027", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r608090", undefined, 1.5),
    meal("obiad", "cd-r800554", undefined, 1.5),
    meal("podwieczorek", "cd-r759596"),
    meal("kolacja", "cd-r515101"),
  ],
  [
    meal("sniadanie", "cd-r737547", undefined, 2),
    meal("drugie-sniadanie", "cd-r253491"),
    meal("obiad", "cd-r747139", undefined, 1.5),
    meal("podwieczorek", "cd-r595474"),
    meal("kolacja", "cd-r149023", undefined, 2),
  ],
];

export const ZAMIENNIKI_1500_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r761834", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r253491"),
    meal("obiad", "cd-r935329"),
    meal("podwieczorek", "cd-r254325", undefined, 1.5),
    meal("kolacja", "cd-r906767", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r806175"),
    meal("drugie-sniadanie", "cd-r10001", undefined, 1.5),
    meal("obiad", "cd-r708070"),
    meal("podwieczorek", "cd-r56913", undefined, 1.5),
    meal("kolacja", "cd-r906767"),
  ],
  [
    meal("sniadanie", "cd-r901400"),
    meal("drugie-sniadanie", "cd-r724920"),
    meal("obiad", "cd-r935329"),
    meal("podwieczorek", "cd-r595475"),
    meal("kolacja", "cd-r694308", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r59062"),
    meal("drugie-sniadanie", "cd-r753029", undefined, 1.5),
    meal("obiad", "cd-r150525", undefined, 1.5),
    meal("podwieczorek", "cd-r939318", undefined, 1.5),
    meal("kolacja", "cd-r491087"),
  ],
  [
    meal("sniadanie", "cd-r656643", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r342470"),
    meal("obiad", "cd-r150525"),
    meal("podwieczorek", "cd-r936264"),
    meal("kolacja", "cd-r537247", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r55281"),
    meal("drugie-sniadanie", "cd-r10001"),
    meal("obiad", "cd-r708070", undefined, 1.5),
    meal("podwieczorek", "cd-r345486", undefined, 1.5),
    meal("kolacja", "cd-r130482"),
  ],
  [
    meal("sniadanie", "cd-r901400"),
    meal("drugie-sniadanie", "cd-r10791", undefined, 2),
    meal("obiad", "cd-r542667", undefined, 1.5),
    meal("podwieczorek", "cd-r56913"),
    meal("kolacja", "cd-r936541", undefined, 1.5),
  ],
];

export const ZAMIENNIKI_2000_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r149027"),
    meal("drugie-sniadanie", "cd-r671211", undefined, 2),
    meal("obiad", "cd-r150525", undefined, 2),
    meal("podwieczorek", "cd-r595475", undefined, 2),
    meal("kolacja", "cd-r817907"),
  ],
  [
    meal("sniadanie", "cd-r932846"),
    meal("drugie-sniadanie", "cd-r724920", undefined, 2),
    meal("obiad", "cd-r542667", undefined, 2),
    meal("podwieczorek", "cd-r254325"),
    meal("kolacja", "cd-r800554", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r761834", undefined, 2),
    meal("drugie-sniadanie", "cd-r671211"),
    meal("obiad", "cd-r935329", undefined, 1.5),
    meal("podwieczorek", "cd-r605961", undefined, 1.5),
    meal("kolacja", "cd-r908067", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r761834", undefined, 2),
    meal("drugie-sniadanie", "cd-r737014"),
    meal("obiad", "cd-r917474"),
    meal("podwieczorek", "cd-r254325", undefined, 1.5),
    meal("kolacja", "cd-r515099", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r751441"),
    meal("drugie-sniadanie", "cd-r342470", undefined, 2),
    meal("obiad", "cd-r806179"),
    meal("podwieczorek", "cd-r753029", undefined, 2),
    meal("kolacja", "cd-r800554"),
  ],
  [
    meal("sniadanie", "cd-r901400"),
    meal("drugie-sniadanie", "cd-r737014"),
    meal("obiad", "cd-r827888", undefined, 2),
    meal("podwieczorek", "cd-r345486", undefined, 2),
    meal("kolacja", "cd-r537247", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r257001", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r465526", undefined, 1.5),
    meal("obiad", "cd-r708069", undefined, 1.5),
    meal("podwieczorek", "cd-r595475"),
    meal("kolacja", "cd-r906767"),
  ],
];

export const BEZGLUTENOWA_1500_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r10001", undefined, 2),
    meal("drugie-sniadanie", "cd-r761824", undefined, 1.5),
    meal("obiad", "cd-r302807"),
    meal("podwieczorek", "cd-r56968", undefined, 2),
    meal("kolacja", "cd-r551684"),
  ],
  [
    meal("sniadanie", "cd-r938339"),
    meal("drugie-sniadanie", "cd-r253493"),
    meal("obiad", "cd-r302807", undefined, 2),
    meal("podwieczorek", "cd-r828104", undefined, 1.5),
    meal("kolacja", "cd-r104413"),
  ],
  [
    meal("sniadanie", "cd-r737547"),
    meal("drugie-sniadanie", "cd-r307447"),
    meal("obiad", "cd-r724329"),
    meal("podwieczorek", "cd-r926582"),
    meal("kolacja", "cd-r755202", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r94722", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r761824", undefined, 1.5),
    meal("obiad", "cd-r694308"),
    meal("podwieczorek", "cd-r608090", undefined, 1.5),
    meal("kolacja", "cd-r323093"),
  ],
  [
    meal("sniadanie", "cd-r938339", undefined, 2),
    meal("drugie-sniadanie", "cd-r756545", undefined, 2),
    meal("obiad", "cd-r10267", undefined, 1.5),
    meal("podwieczorek", "cd-r329637"),
    meal("kolacja", "cd-r675139"),
  ],
  [
    meal("sniadanie", "cd-r94722"),
    meal("drugie-sniadanie", "cd-r756545"),
    meal("obiad", "cd-r694308"),
    meal("podwieczorek", "cd-r926582", undefined, 2),
    meal("kolacja", "cd-r800554"),
  ],
  [
    meal("sniadanie", "cd-r329637", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r724920"),
    meal("obiad", "cd-r292210", undefined, 1.5),
    meal("podwieczorek", "cd-r608090", undefined, 2),
    meal("kolacja", "cd-r104413"),
  ],
];

export const BEZGLUTENOWA_2000_DNI_8_14: Meal[][] = [
  [
    meal("sniadanie", "cd-r508640", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r759596", undefined, 1.5),
    meal("obiad", "cd-r695230", undefined, 2),
    meal("podwieczorek", "cd-r926582"),
    meal("kolacja", "cd-r755202", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r656643", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r307447"),
    meal("obiad", "cd-r292210"),
    meal("podwieczorek", "cd-r57004", undefined, 2),
    meal("kolacja", "cd-r551684", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r94722"),
    meal("drugie-sniadanie", "cd-r756545", undefined, 2),
    meal("obiad", "cd-r695230", undefined, 1.5),
    meal("podwieczorek", "cd-r810086", undefined, 1.5),
    meal("kolacja", "cd-r323093"),
  ],
  [
    meal("sniadanie", "cd-r10001"),
    meal("drugie-sniadanie", "cd-r307447", undefined, 1.5),
    meal("obiad", "cd-r302807", undefined, 2),
    meal("podwieczorek", "cd-r239293"),
    meal("kolacja", "cd-r104413", undefined, 1.5),
  ],
  [
    meal("sniadanie", "cd-r737547", undefined, 2),
    meal("drugie-sniadanie", "cd-r724920", undefined, 2),
    meal("obiad", "cd-r694308", undefined, 2),
    meal("podwieczorek", "cd-r57004"),
    meal("kolacja", "cd-r104413"),
  ],
  [
    meal("sniadanie", "cd-r938339"),
    meal("drugie-sniadanie", "cd-r108700", undefined, 1.5),
    meal("obiad", "cd-r10267"),
    meal("podwieczorek", "cd-r810086"),
    meal("kolacja", "cd-r629256", undefined, 2),
  ],
  [
    meal("sniadanie", "cd-r737547", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r253493"),
    meal("obiad", "cd-r708061", undefined, 1.5),
    meal("podwieczorek", "cd-r616206"),
    meal("kolacja", "cd-r323093"),
  ],
];

