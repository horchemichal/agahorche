import type { DietCategory, DietDay, DietPlan, Meal } from "@/types/diet";
import { THERMOMIX_MODELS } from "@/types/diet";
import { meal } from "./meal-factory";
import {
  KETO_1500_DNI_8_14,
  KETO_2000_DNI_8_14,
  WEGETARIANSKA_1500_DNI_8_14,
  WEGETARIANSKA_2000_DNI_8_14,
  ODCHUDZAJACA_1500_DNI_8_14,
  ODCHUDZAJACA_2000_DNI_8_14,
  NISKI_IG_1500_DNI_8_14,
  NISKI_IG_2000_DNI_8_14,
  HASHIMOTO_1500_DNI_8_14,
  HASHIMOTO_2000_DNI_8_14,
  ZAMIENNIKI_1500_DNI_8_14,
  ZAMIENNIKI_2000_DNI_8_14,
  BEZGLUTENOWA_1500_DNI_8_14,
  BEZGLUTENOWA_2000_DNI_8_14,
} from "./plany-14-dni";

/**
 * Builds a 7-day plan with day 1 fully populated and days 2–7 marked
 * `locked: true` for PUBLIC rendering (spec §13: "Nie blokuj całkowicie
 * pierwszego dnia" — the visitor sees one complete, real day, then the
 * rest gate behind the client zone CTA).
 *
 * ETAP 8 (2026-08-19): `days2to7` lets a plan carry REAL meals for those
 * locked days too — `locked` now means "requires Strefa Klienta login",
 * not "no data exists". components/diets/diet-plan-preview.tsx renders
 * the exact same DietDay objects in both places: the public page always
 * respects `locked` (days 2-7 stay gated), while the client dashboard
 * passes `forceUnlocked` to reveal them for logged-in accounts. Categories
 * without full-week content yet just omit `days2to7` (defaults to empty,
 * unchanged from ETAP 3/4 behavior).
 */
function weekPlan(opts: {
  id: string;
  categoryId: DietPlan["categoryId"];
  label: string;
  /** `null` for categories whose configurator has no calorie dimension (children/breastfeeding/weaning — spec §6). */
  caloriesTarget: number | null;
  day1: Meal[];
  days2to7?: Meal[][];
  /** Patrz DietPlan.variantKey — rozróżnia etapy rozszerzania diety niemowląt. */
  variantKey?: string;
  /** Patrz DietPlan.hideNutrition — plan niemowlęcy nie pokazuje kcal. */
  hideNutrition?: boolean;
  /** Patrz DietPlan.note — zdanie kontekstu nad planem. */
  note?: string;
}): DietPlan {
  const days: DietDay[] = [{ dayNumber: 1, meals: opts.day1 }];
  for (let d = 2; d <= 7; d += 1) {
    days.push({ dayNumber: d, meals: opts.days2to7?.[d - 2] ?? [], locked: true });
  }
  return {
    id: opts.id,
    categoryId: opts.categoryId,
    label: opts.label,
    durationDays: 7,
    caloriesTarget: opts.caloriesTarget,
    thermomixModels: THERMOMIX_MODELS,
    visibility: "PUBLIC",
    days,
    isExampleData: true,
    variantKey: opts.variantKey,
    hideNutrition: opts.hideNutrition,
    note: opts.note,
  };
}

/**
 * Wariant dwutygodniowy: dni 1–7 to dokładnie ten sam tydzień co w planie
 * 7-dniowym, dni 8–14 dokłada data/diets/plany-14-dni.ts.
 *
 * DLACZEGO PIERWSZY TYDZIEŃ JEST TEN SAM. Bo to nie jest inna dieta, tylko
 * ta sama dieta na dłużej. Klientka, która obejrzała siedem dni i wraca po
 * czternaście, ma dostać znajomy początek i siedem nowych dni, a nie treść
 * podmienioną pod nią. Przy okazji dzień 1 zostaje odblokowany dokładnie
 * tak samo, więc podgląd publiczny wygląda identycznie w obu wariantach.
 *
 * Obiekty `Meal` są WSPÓŁDZIELONE z planem bazowym, nie kopiowane — to dane
 * tylko do odczytu, a `Meal.id` musi być unikalny w obrębie dnia (klucz
 * Reacta i stan „Zamień danie"), nie w obrębie całej aplikacji.
 */
function fortnightPlan(base: DietPlan, days8to14: Meal[][]): DietPlan {
  return {
    ...base,
    id: base.id.replace("-7d-", "-14d-"),
    label: base.label.replace("7 dni", "14 dni"),
    durationDays: 14,
    days: [
      ...base.days,
      ...days8to14.map((meals, i) => ({ dayNumber: 8 + i, meals, locked: true })),
    ],
  };
}


/**
 * KETO — jadłospisy złożone z PRAWDZIWYCH przepisów Cookidoo (31.08.2026).
 *
 * Każda pozycja wskazuje konkretny przepis na cookidoo.pl, a wartości
 * odżywcze w rejestrze pochodzą z tego przepisu, nie z oszacowania.
 * `portions` to krotność porcji — Cookidoo podaje wartości na porcję,
 * a porcje bywają małe (patrz komentarz przy `Meal.portions`).
 *
 * Sumy sprawdzone: każdy z siedmiu dni mieści się w ±4 kcal od celu,
 * a węglowodany zostają w zakresie ketogenicznym (12–40 g na dobę).
 */
const KETO_1500 = weekPlan({
  id: "keto-7d-1500",
  categoryId: "keto",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "cd-r924701"),
    meal("drugie-sniadanie", "cd-r936264"),
    meal("obiad", "cd-r629256"),
    meal("podwieczorek", "cd-r56968"),
    meal("kolacja", "cd-r550550"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r901400"),
      meal("drugie-sniadanie", "cd-r671211", undefined, 1.5),
      meal("obiad", "cd-r928178"),
      meal("podwieczorek", "cd-r179030"),
      meal("kolacja", "cd-r117331"),
    ],
    [
      meal("sniadanie", "cd-r828221"),
      meal("drugie-sniadanie", "cd-r94722"),
      meal("obiad", "cd-r323093"),
      meal("podwieczorek", "cd-r373411", undefined, 1.5),
      meal("kolacja", "cd-r277666"),
    ],
    [
      meal("sniadanie", "cd-r508640"),
      meal("drugie-sniadanie", "cd-r10791"),
      meal("obiad", "cd-r629256"),
      meal("podwieczorek", "cd-r465526"),
      meal("kolacja", "cd-r458454"),
    ],
    [
      meal("sniadanie", "cd-r253624", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r130668"),
      meal("obiad", "cd-r694482"),
      meal("podwieczorek", "cd-r828222", undefined, 1.5),
      meal("kolacja", "cd-r302807"),
    ],
    [
      meal("sniadanie", "cd-r901400", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r329637"),
      meal("obiad", "cd-r928151", undefined, 1.5),
      meal("podwieczorek", "cd-r724920"),
      meal("kolacja", "cd-r248563"),
    ],
    [
      meal("sniadanie", "cd-r508640"),
      meal("drugie-sniadanie", "cd-r737547"),
      meal("obiad", "cd-r239297"),
      meal("podwieczorek", "cd-r828222"),
      meal("kolacja", "cd-r458454"),
    ],
  ],
});

const KETO_2000 = weekPlan({
  id: "keto-7d-2000",
  categoryId: "keto",
  label: "7 dni / 2000 kcal",
  caloriesTarget: 2000,
  day1: [
    meal("sniadanie", "cd-r828221"),
    meal("drugie-sniadanie", "cd-r10791"),
    meal("obiad", "cd-r323093"),
    meal("podwieczorek", "cd-r179030", undefined, 1.5),
    meal("kolacja", "cd-r277666"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r901400"),
      meal("drugie-sniadanie", "cd-r936264"),
      meal("obiad", "cd-r629256", undefined, 1.5),
      meal("podwieczorek", "cd-r724920"),
      meal("kolacja", "cd-r458454"),
    ],
    [
      meal("sniadanie", "cd-r828221"),
      meal("drugie-sniadanie", "cd-r329637"),
      meal("obiad", "cd-r323093", undefined, 2),
      meal("podwieczorek", "cd-r828222"),
      meal("kolacja", "cd-r248563"),
    ],
    [
      meal("sniadanie", "cd-r253624"),
      meal("drugie-sniadanie", "cd-r737547"),
      meal("obiad", "cd-r928151", undefined, 2),
      meal("podwieczorek", "cd-r179030"),
      meal("kolacja", "cd-r302807"),
    ],
    [
      meal("sniadanie", "cd-r938346"),
      meal("drugie-sniadanie", "cd-r94722"),
      meal("obiad", "cd-r323093", undefined, 1.5),
      meal("podwieczorek", "cd-r179030"),
      meal("kolacja", "cd-r458454"),
    ],
    [
      meal("sniadanie", "cd-r901400"),
      meal("drugie-sniadanie", "cd-r94722", undefined, 1.5),
      meal("obiad", "cd-r323093", undefined, 1.5),
      meal("podwieczorek", "cd-r56968"),
      meal("kolacja", "cd-r550550"),
    ],
    [
      meal("sniadanie", "cd-r508640"),
      meal("drugie-sniadanie", "cd-r595475"),
      meal("obiad", "cd-r323093"),
      meal("podwieczorek", "cd-r179030", undefined, 1.5),
      meal("kolacja", "cd-r302807"),
    ],
  ],
});

/**
 * POZOSTAŁE DIETY na prawdziwych przepisach Cookidoo (31.08.2026).
 *
 * Ta sama zasada co przy keto: każda pozycja wskazuje konkretny przepis,
 * wartości odżywcze pochodzą z jego strony, a `portions` to krotność
 * porcji potrzebna, żeby dzień trafił w cel kaloryczny.
 *
 * Filtry doboru dań są twarde, nie „na oko":
 * — wegetariańska: bez mięsa i ryb,
 * — bezglutenowa: bez pszenicy, makaronów, pieczywa, kasz glutenowych,
 * — hashimoto: to samo plus bez soi,
 * — niski IG: bez słodkich wypieków, węglowodany trzymane niżej,
 * — dla dzieci i karmiące: bez ostrych przypraw i alkoholu.
 *
 * Do każdego dnia dołożone są dwa ograniczenia makro, żeby optymalizacja
 * pod kalorie nie wypuściła czegoś absurdalnego: węglowodany najwyżej 55%
 * energii, białko co najmniej 15%.
 *
 * Sumy sprawdzone — wszystkie 98 dni mieszczą się w ±5 kcal od celu.
 * Dla dzieci cel to 1400 kcal, dla karmiących 2200 kcal (zapotrzebowanie
 * podwyższone o ok. 500 kcal) — te dwie kategorie nie mają w konfiguratorze
 * wymiaru kalorycznego, więc mają po jednym planie.
 */
const WEGE_1500 = weekPlan({
  id: "wegetarianska-7d-1500",
  categoryId: "wegetarianska",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "cd-r806175"),
    meal("drugie-sniadanie", "cd-r724920"),
    meal("obiad", "cd-r253632"),
    meal("podwieczorek", "cd-r78202"),
    meal("kolacja", "cd-r725769"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r912433", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r507517"),
      meal("obiad", "cd-r82992"),
      meal("podwieczorek", "cd-r342470"),
      meal("kolacja", "cd-r694307"),
    ],
    [
      meal("sniadanie", "cd-r10211"),
      meal("drugie-sniadanie", "cd-r608090"),
      meal("obiad", "cd-r755202"),
      meal("podwieczorek", "cd-r123345"),
      meal("kolacja", "cd-r419526", undefined, 1.5),
    ],
    [
      meal("sniadanie", "cd-r820688"),
      meal("drugie-sniadanie", "cd-r629253", undefined, 1.5),
      meal("obiad", "cd-r537068"),
      meal("podwieczorek", "cd-r289759"),
      meal("kolacja", "cd-r772228"),
    ],
    [
      meal("sniadanie", "cd-r901400"),
      meal("drugie-sniadanie", "cd-r56968"),
      meal("obiad", "cd-r824131"),
      meal("podwieczorek", "cd-r253491"),
      meal("kolacja", "cd-r337148"),
    ],
    [
      meal("sniadanie", "cd-r459182"),
      meal("drugie-sniadanie", "cd-r595474"),
      meal("obiad", "cd-r755209", undefined, 1.5),
      meal("podwieczorek", "cd-r756545"),
      meal("kolacja", "cd-r105756"),
    ],
    [
      meal("sniadanie", "cd-r828104"),
      meal("drugie-sniadanie", "cd-r307447"),
      meal("obiad", "cd-r90518"),
      meal("podwieczorek", "cd-r737014", undefined, 1.5),
      meal("kolacja", "cd-r337277"),
    ],
  ],
});

const WEGE_2000 = weekPlan({
  id: "wegetarianska-7d-2000",
  categoryId: "wegetarianska",
  label: "7 dni / 2000 kcal",
  caloriesTarget: 2000,
  day1: [
    meal("sniadanie", "cd-r828234", undefined, 1.5),
    meal("drugie-sniadanie", "cd-r938339"),
    meal("obiad", "cd-r776993"),
    meal("podwieczorek", "cd-r605961"),
    meal("kolacja", "cd-r706924"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r694307"),
      meal("drugie-sniadanie", "cd-r912433"),
      meal("obiad", "cd-r104411"),
      meal("podwieczorek", "cd-r753029"),
      meal("kolacja", "cd-r537068"),
    ],
    [
      meal("sniadanie", "cd-r711761"),
      meal("drugie-sniadanie", "cd-r828101"),
      meal("obiad", "cd-r928936", undefined, 1.5),
      meal("podwieczorek", "cd-r756545"),
      meal("kolacja", "cd-r824131"),
    ],
    [
      meal("sniadanie", "cd-r793259"),
      meal("drugie-sniadanie", "cd-r737014"),
      meal("obiad", "cd-r253632"),
      meal("podwieczorek", "cd-r57004"),
      meal("kolacja", "cd-r928784", undefined, 1.5),
    ],
    [
      meal("sniadanie", "cd-r806179"),
      meal("drugie-sniadanie", "cd-r724920"),
      meal("obiad", "cd-r53547"),
      meal("podwieczorek", "cd-r465526", undefined, 1.5),
      meal("kolacja", "cd-r337277", undefined, 1.5),
    ],
    [
      meal("sniadanie", "cd-r939524"),
      meal("drugie-sniadanie", "cd-r254325"),
      meal("obiad", "cd-r95258", undefined, 1.5),
      meal("podwieczorek", "cd-r253492", undefined, 1.5),
      meal("kolacja", "cd-r908249"),
    ],
    [
      meal("sniadanie", "cd-r10001"),
      meal("drugie-sniadanie", "cd-r253491"),
      meal("obiad", "cd-r139694"),
      meal("podwieczorek", "cd-r254320"),
      meal("kolacja", "cd-r789542", undefined, 2),
    ],
  ],
});

const ODCHUDZAJACA_1500 = weekPlan({
  id: "odchudzajaca-7d-1500",
  categoryId: "odchudzajaca",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "cd-r329637"),
    meal("drugie-sniadanie", "cd-r253491"),
    meal("obiad", "cd-r490892"),
    meal("podwieczorek", "cd-r254325"),
    meal("kolacja", "cd-r917474", undefined, 1.5),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r55281"),
      meal("drugie-sniadanie", "cd-r938339"),
      meal("obiad", "cd-r900139"),
      meal("podwieczorek", "cd-r373411"),
      meal("kolacja", "cd-r629256"),
    ],
    [
      meal("sniadanie", "cd-r806176", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r56968"),
      meal("obiad", "cd-r122664"),
      meal("podwieczorek", "cd-r57004"),
      meal("kolacja", "cd-r289759"),
    ],
    [
      meal("sniadanie", "cd-r221601"),
      meal("drugie-sniadanie", "cd-r759596"),
      meal("obiad", "cd-r806179"),
      meal("podwieczorek", "cd-r507517"),
      meal("kolacja", "cd-r150525"),
    ],
    [
      meal("sniadanie", "cd-r900831"),
      meal("drugie-sniadanie", "cd-r737547"),
      meal("obiad", "cd-r776993", undefined, 1.5),
      meal("podwieczorek", "cd-r99342"),
      meal("kolacja", "cd-r750522"),
    ],
    [
      meal("sniadanie", "cd-r459188"),
      meal("drugie-sniadanie", "cd-r629253"),
      meal("obiad", "cd-r90518"),
      meal("podwieczorek", "cd-r130662"),
      meal("kolacja", "cd-r817907"),
    ],
    [
      meal("sniadanie", "cd-r751441"),
      meal("drugie-sniadanie", "cd-r810086"),
      meal("obiad", "cd-r323093"),
      meal("podwieczorek", "cd-r753029"),
      meal("kolacja", "cd-r822676"),
    ],
  ],
});

const ODCHUDZAJACA_2000 = weekPlan({
  id: "odchudzajaca-7d-2000",
  categoryId: "odchudzajaca",
  label: "7 dni / 2000 kcal",
  caloriesTarget: 2000,
  day1: [
    meal("sniadanie", "cd-r694307"),
    meal("drugie-sniadanie", "cd-r469122"),
    meal("obiad", "cd-r772228"),
    meal("podwieczorek", "cd-r912433"),
    meal("kolacja", "cd-r817907"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r828234", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r253493"),
      meal("obiad", "cd-r902339"),
      meal("podwieczorek", "cd-r671211"),
      meal("kolacja", "cd-r784070"),
    ],
    [
      meal("sniadanie", "cd-r265677", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r345486"),
      meal("obiad", "cd-r675139"),
      meal("podwieczorek", "cd-r737547"),
      meal("kolacja", "cd-r791905"),
    ],
    [
      meal("sniadanie", "cd-r901400"),
      meal("drugie-sniadanie", "cd-r465526"),
      meal("obiad", "cd-r253632", undefined, 1.5),
      meal("podwieczorek", "cd-r254320"),
      meal("kolacja", "cd-r55281"),
    ],
    [
      meal("sniadanie", "cd-r928937", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r595475"),
      meal("obiad", "cd-r903799"),
      meal("podwieczorek", "cd-r936264"),
      meal("kolacja", "cd-r927775"),
    ],
    [
      meal("sniadanie", "cd-r900831"),
      meal("drugie-sniadanie", "cd-r253492"),
      meal("obiad", "cd-r747255"),
      meal("podwieczorek", "cd-r108700", undefined, 1.5),
      meal("kolacja", "cd-r792261"),
    ],
    [
      meal("sniadanie", "cd-r484047"),
      meal("drugie-sniadanie", "cd-r56968"),
      meal("obiad", "cd-r550550"),
      meal("podwieczorek", "cd-r605961"),
      meal("kolacja", "cd-r789542", undefined, 1.5),
    ],
  ],
});

const NISKI_IG_1500 = weekPlan({
  id: "niski-ig-7d-1500",
  categoryId: "niski-ig",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "cd-r671211"),
    meal("drugie-sniadanie", "cd-r123345"),
    meal("obiad", "cd-r725769"),
    meal("podwieczorek", "cd-r289759"),
    meal("kolacja", "cd-r747255"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r293860"),
      meal("drugie-sniadanie", "cd-r254320"),
      meal("obiad", "cd-r772228", undefined, 1.5),
      meal("podwieczorek", "cd-r469122"),
      meal("kolacja", "cd-r724329"),
    ],
    [
      meal("sniadanie", "cd-r944168"),
      meal("drugie-sniadanie", "cd-r465526"),
      meal("obiad", "cd-r149027", undefined, 1.5),
      meal("podwieczorek", "cd-r926582"),
      meal("kolacja", "cd-r53547"),
    ],
    [
      meal("sniadanie", "cd-r753029", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r828101"),
      meal("obiad", "cd-r56971"),
      meal("podwieczorek", "cd-r94722"),
      meal("kolacja", "cd-r806179"),
    ],
    [
      meal("sniadanie", "cd-r430458"),
      meal("drugie-sniadanie", "cd-r56968"),
      meal("obiad", "cd-r179023", undefined, 1.5),
      meal("podwieczorek", "cd-r595474"),
      meal("kolacja", "cd-r484010"),
    ],
    [
      meal("sniadanie", "cd-r806175", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r253491"),
      meal("obiad", "cd-r139694"),
      meal("podwieczorek", "cd-r253492"),
      meal("kolacja", "cd-r900139"),
    ],
    [
      meal("sniadanie", "cd-r55281"),
      meal("drugie-sniadanie", "cd-r828104"),
      meal("obiad", "cd-r537247"),
      meal("podwieczorek", "cd-r345486", undefined, 1.5),
      meal("kolacja", "cd-r239297"),
    ],
  ],
});

const NISKI_IG_2000 = weekPlan({
  id: "niski-ig-7d-2000",
  categoryId: "niski-ig",
  label: "7 dni / 2000 kcal",
  caloriesTarget: 2000,
  day1: [
    meal("sniadanie", "cd-r98452"),
    meal("drugie-sniadanie", "cd-r605961"),
    meal("obiad", "cd-r791905"),
    meal("podwieczorek", "cd-r56968"),
    meal("kolacja", "cd-r820697", undefined, 1.5),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r711761"),
      meal("drugie-sniadanie", "cd-r936264"),
      meal("obiad", "cd-r122664", undefined, 1.5),
      meal("podwieczorek", "cd-r671211"),
      meal("kolacja", "cd-r323093"),
    ],
    [
      meal("sniadanie", "cd-r5416"),
      meal("drugie-sniadanie", "cd-r769590"),
      meal("obiad", "cd-r789542", undefined, 1.5),
      meal("podwieczorek", "cd-r345486"),
      meal("kolacja", "cd-r917474"),
    ],
    [
      meal("sniadanie", "cd-r793259"),
      meal("drugie-sniadanie", "cd-r759596", undefined, 1.5),
      meal("obiad", "cd-r777829"),
      meal("podwieczorek", "cd-r810086"),
      meal("kolacja", "cd-r817907"),
    ],
    [
      meal("sniadanie", "cd-r820688"),
      meal("drugie-sniadanie", "cd-r595475"),
      meal("obiad", "cd-r400321"),
      meal("podwieczorek", "cd-r507517"),
      meal("kolacja", "cd-r706924", undefined, 1.5),
    ],
    [
      meal("sniadanie", "cd-r807338", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r130662"),
      meal("obiad", "cd-r490892"),
      meal("podwieczorek", "cd-r828104"),
      meal("kolacja", "cd-r694482"),
    ],
    [
      meal("sniadanie", "cd-r694307", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r912433"),
      meal("obiad", "cd-r824131"),
      meal("podwieczorek", "cd-r465526"),
      meal("kolacja", "cd-r248563"),
    ],
  ],
});

const HASHIMOTO_1500 = weekPlan({
  id: "hashimoto-7d-1500",
  categoryId: "hashimoto",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "cd-r329637"),
    meal("drugie-sniadanie", "cd-r56968"),
    meal("obiad", "cd-r55281", undefined, 1.5),
    meal("podwieczorek", "cd-r595474"),
    meal("kolacja", "cd-r694482"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r828221"),
      meal("drugie-sniadanie", "cd-r753029"),
      meal("obiad", "cd-r695230"),
      meal("podwieczorek", "cd-r828104"),
      meal("kolacja", "cd-r824331"),
    ],
    [
      meal("sniadanie", "cd-r737547"),
      meal("drugie-sniadanie", "cd-r307447"),
      meal("obiad", "cd-r103953", undefined, 1.5),
      meal("podwieczorek", "cd-r253491"),
      meal("kolacja", "cd-r939504"),
    ],
    [
      meal("sniadanie", "cd-r595475"),
      meal("drugie-sniadanie", "cd-r10001", undefined, 1.5),
      meal("obiad", "cd-r758846"),
      meal("podwieczorek", "cd-r936264"),
      meal("kolacja", "cd-r800554"),
    ],
    [
      meal("sniadanie", "cd-r656643"),
      meal("drugie-sniadanie", "cd-r769590"),
      meal("obiad", "cd-r903888"),
      meal("podwieczorek", "cd-r59062"),
      meal("kolacja", "cd-r149023"),
    ],
    [
      meal("sniadanie", "cd-r239293"),
      meal("drugie-sniadanie", "cd-r608090"),
      meal("obiad", "cd-r149027"),
      meal("podwieczorek", "cd-r629253", undefined, 1.5),
      meal("kolacja", "cd-r817907"),
    ],
    [
      meal("sniadanie", "cd-r924701", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r671211"),
      meal("obiad", "cd-r538895"),
      meal("podwieczorek", "cd-r130662"),
      meal("kolacja", "cd-r515101"),
    ],
  ],
});

const HASHIMOTO_2000 = weekPlan({
  id: "hashimoto-7d-2000",
  categoryId: "hashimoto",
  label: "7 dni / 2000 kcal",
  caloriesTarget: 2000,
  day1: [
    meal("sniadanie", "cd-r807338"),
    meal("drugie-sniadanie", "cd-r810086"),
    meal("obiad", "cd-r55281"),
    meal("podwieczorek", "cd-r342470"),
    meal("kolacja", "cd-r824128"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r149027"),
      meal("drugie-sniadanie", "cd-r345486"),
      meal("obiad", "cd-r903888", undefined, 1.5),
      meal("podwieczorek", "cd-r828104"),
      meal("kolacja", "cd-r10832"),
    ],
    [
      meal("sniadanie", "cd-r924975"),
      meal("drugie-sniadanie", "cd-r10791"),
      meal("obiad", "cd-r675139"),
      meal("podwieczorek", "cd-r759596"),
      meal("kolacja", "cd-r708061", undefined, 1.5),
    ],
    [
      meal("sniadanie", "cd-r912433"),
      meal("drugie-sniadanie", "cd-r108700"),
      meal("obiad", "cd-r747139"),
      meal("podwieczorek", "cd-r753029", undefined, 1.5),
      meal("kolacja", "cd-r708069"),
    ],
    [
      meal("sniadanie", "cd-r239293"),
      meal("drugie-sniadanie", "cd-r253491"),
      meal("obiad", "cd-r538895", undefined, 1.5),
      meal("podwieczorek", "cd-r57004"),
      meal("kolacja", "cd-r400321"),
    ],
    [
      meal("sniadanie", "cd-r793259"),
      meal("drugie-sniadanie", "cd-r254325"),
      meal("obiad", "cd-r800554", undefined, 1.5),
      meal("podwieczorek", "cd-r94722", undefined, 1.5),
      meal("kolacja", "cd-r569406"),
    ],
    [
      meal("sniadanie", "cd-r402648"),
      meal("drugie-sniadanie", "cd-r769590"),
      meal("obiad", "cd-r122664"),
      meal("podwieczorek", "cd-r939318"),
      meal("kolacja", "cd-r928784", undefined, 2),
    ],
  ],
});

const BEZGLUTENOWA_1500 = weekPlan({
  id: "bezglutenowa-7d-1500",
  categoryId: "bezglutenowa",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "cd-r806176"),
    meal("drugie-sniadanie", "cd-r761824"),
    meal("obiad", "cd-r695230"),
    meal("podwieczorek", "cd-r926582", undefined, 1.5),
    meal("kolacja", "cd-r800554"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r656643"),
      meal("drugie-sniadanie", "cd-r759596"),
      meal("obiad", "cd-r694308"),
      meal("podwieczorek", "cd-r616206", undefined, 1.5),
      meal("kolacja", "cd-r551684"),
    ],
    [
      meal("sniadanie", "cd-r938339"),
      meal("drugie-sniadanie", "cd-r724920"),
      meal("obiad", "cd-r292210", undefined, 1.5),
      meal("podwieczorek", "cd-r307447"),
      meal("kolacja", "cd-r104413"),
    ],
    [
      meal("sniadanie", "cd-r149027", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r254320"),
      meal("obiad", "cd-r302807"),
      meal("podwieczorek", "cd-r737014"),
      meal("kolacja", "cd-r550550"),
    ],
    [
      meal("sniadanie", "cd-r329637"),
      meal("drugie-sniadanie", "cd-r629253"),
      meal("obiad", "cd-r10267"),
      meal("podwieczorek", "cd-r608090"),
      meal("kolacja", "cd-r824128", undefined, 1.5),
    ],
    [
      meal("sniadanie", "cd-r756545"),
      meal("drugie-sniadanie", "cd-r108700"),
      meal("obiad", "cd-r469957"),
      meal("podwieczorek", "cd-r828104"),
      meal("kolacja", "cd-r629256"),
    ],
    [
      meal("sniadanie", "cd-r94722", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r671211"),
      meal("obiad", "cd-r777829"),
      meal("podwieczorek", "cd-r239293"),
      meal("kolacja", "cd-r122664"),
    ],
  ],
});

const BEZGLUTENOWA_2000 = weekPlan({
  id: "bezglutenowa-7d-2000",
  categoryId: "bezglutenowa",
  label: "7 dni / 2000 kcal",
  caloriesTarget: 2000,
  day1: [
    meal("sniadanie", "cd-r900831"),
    meal("drugie-sniadanie", "cd-r307447"),
    meal("obiad", "cd-r824128", undefined, 1.5),
    meal("podwieczorek", "cd-r57004"),
    meal("kolacja", "cd-r755202"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r938339"),
      meal("drugie-sniadanie", "cd-r616206"),
      meal("obiad", "cd-r903888"),
      meal("podwieczorek", "cd-r329637"),
      meal("kolacja", "cd-r675139", undefined, 1.5),
    ],
    [
      meal("sniadanie", "cd-r149027"),
      meal("drugie-sniadanie", "cd-r753029"),
      meal("obiad", "cd-r724329", undefined, 1.5),
      meal("podwieczorek", "cd-r56968"),
      meal("kolacja", "cd-r302807"),
    ],
    [
      meal("sniadanie", "cd-r926582"),
      meal("drugie-sniadanie", "cd-r253493"),
      meal("obiad", "cd-r817907", undefined, 1.5),
      meal("podwieczorek", "cd-r737014"),
      meal("kolacja", "cd-r95258"),
    ],
    [
      meal("sniadanie", "cd-r10001"),
      meal("drugie-sniadanie", "cd-r756545"),
      meal("obiad", "cd-r708061", undefined, 1.5),
      meal("podwieczorek", "cd-r810086"),
      meal("kolacja", "cd-r323093"),
    ],
    [
      meal("sniadanie", "cd-r508640", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r936264"),
      meal("obiad", "cd-r629256"),
      meal("podwieczorek", "cd-r828101"),
      meal("kolacja", "cd-r777829"),
    ],
    [
      meal("sniadanie", "cd-r737547"),
      meal("drugie-sniadanie", "cd-r759596"),
      meal("obiad", "cd-r827888"),
      meal("podwieczorek", "cd-r253492"),
      meal("kolacja", "cd-r791905", undefined, 2),
    ],
  ],
});

const ZAMIENNIKI_1500 = weekPlan({
  id: "zamienniki-7d-1500",
  categoryId: "zamienniki",
  label: "7 dni / 1500 kcal",
  caloriesTarget: 1500,
  day1: [
    meal("sniadanie", "cd-r761834"),
    meal("drugie-sniadanie", "cd-r753029"),
    meal("obiad", "cd-r150525"),
    meal("podwieczorek", "cd-r254325"),
    meal("kolacja", "cd-r817907"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r932846"),
      meal("drugie-sniadanie", "cd-r307447"),
      meal("obiad", "cd-r542667"),
      meal("podwieczorek", "cd-r605961", undefined, 1.5),
      meal("kolacja", "cd-r694308"),
    ],
    [
      meal("sniadanie", "cd-r257001"),
      meal("drugie-sniadanie", "cd-r724920"),
      meal("obiad", "cd-r917474"),
      meal("podwieczorek", "cd-r56913"),
      meal("kolacja", "cd-r906767", undefined, 1.5),
    ],
    [
      meal("sniadanie", "cd-r814976"),
      meal("drugie-sniadanie", "cd-r10001"),
      meal("obiad", "cd-r935329"),
      meal("podwieczorek", "cd-r595475", undefined, 1.5),
      meal("kolacja", "cd-r724329"),
    ],
    [
      meal("sniadanie", "cd-r818711"),
      meal("drugie-sniadanie", "cd-r10791"),
      meal("obiad", "cd-r827888"),
      meal("podwieczorek", "cd-r939318"),
      meal("kolacja", "cd-r936541"),
    ],
    [
      meal("sniadanie", "cd-r59062"),
      meal("drugie-sniadanie", "cd-r629253"),
      meal("obiad", "cd-r694307"),
      meal("podwieczorek", "cd-r345486"),
      meal("kolacja", "cd-r908067"),
    ],
    [
      meal("sniadanie", "cd-r656643", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r671211"),
      meal("obiad", "cd-r604465"),
      meal("podwieczorek", "cd-r756545"),
      meal("kolacja", "cd-r515099"),
    ],
  ],
});

const ZAMIENNIKI_2000 = weekPlan({
  id: "zamienniki-7d-2000",
  categoryId: "zamienniki",
  label: "7 dni / 2000 kcal",
  caloriesTarget: 2000,
  day1: [
    meal("sniadanie", "cd-r828234"),
    meal("drugie-sniadanie", "cd-r307447"),
    meal("obiad", "cd-r708070"),
    meal("podwieczorek", "cd-r936264", undefined, 1.5),
    meal("kolacja", "cd-r130482"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r818711"),
      meal("drugie-sniadanie", "cd-r737014"),
      meal("obiad", "cd-r806179"),
      meal("podwieczorek", "cd-r629253", undefined, 1.5),
      meal("kolacja", "cd-r708061"),
    ],
    [
      meal("sniadanie", "cd-r751441"),
      meal("drugie-sniadanie", "cd-r108700"),
      meal("obiad", "cd-r908067"),
      meal("podwieczorek", "cd-r123345"),
      meal("kolacja", "cd-r694307"),
    ],
    [
      meal("sniadanie", "cd-r806175"),
      meal("drugie-sniadanie", "cd-r342470"),
      meal("obiad", "cd-r400321"),
      meal("podwieczorek", "cd-r756545"),
      meal("kolacja", "cd-r908249", undefined, 1.5),
    ],
    [
      meal("sniadanie", "cd-r55281"),
      meal("drugie-sniadanie", "cd-r253491"),
      meal("obiad", "cd-r253632", undefined, 1.5),
      meal("podwieczorek", "cd-r605961"),
      meal("kolacja", "cd-r537247"),
    ],
    [
      meal("sniadanie", "cd-r901400"),
      meal("drugie-sniadanie", "cd-r465526", undefined, 1.5),
      meal("obiad", "cd-r708069"),
      meal("podwieczorek", "cd-r254325"),
      meal("kolacja", "cd-r800554"),
    ],
    [
      meal("sniadanie", "cd-r149027"),
      meal("drugie-sniadanie", "cd-r828104"),
      meal("obiad", "cd-r675139"),
      meal("podwieczorek", "cd-r753029", undefined, 1.5),
      meal("kolacja", "cd-r491087"),
    ],
  ],
});

const DLA_DZIECI_PLAN = weekPlan({
  id: "dla-dzieci-7d",
  categoryId: "dla-dzieci",
  label: "7 dni",
  caloriesTarget: null,
  day1: [
    meal("sniadanie", "cd-r548788"),
    meal("drugie-sniadanie", "cd-r737014"),
    meal("obiad", "cd-r150525", undefined, 1.5),
    meal("podwieczorek", "cd-r56968"),
    meal("kolacja", "cd-r55281"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r254325"),
      meal("drugie-sniadanie", "cd-r828104"),
      meal("obiad", "cd-r940729", undefined, 1.5),
      meal("podwieczorek", "cd-r737547"),
      meal("kolacja", "cd-r820697"),
    ],
    [
      meal("sniadanie", "cd-r99342"),
      meal("drugie-sniadanie", "cd-r342470", undefined, 1.5),
      meal("obiad", "cd-r708061"),
      meal("podwieczorek", "cd-r769590"),
      meal("kolacja", "cd-r149023"),
    ],
    [
      meal("sniadanie", "cd-r253624"),
      meal("drugie-sniadanie", "cd-r130662"),
      meal("obiad", "cd-r755202"),
      meal("podwieczorek", "cd-r507517"),
      meal("kolacja", "cd-r337277"),
    ],
    [
      meal("sniadanie", "cd-r459172"),
      meal("drugie-sniadanie", "cd-r616206", undefined, 1.5),
      meal("obiad", "cd-r547650"),
      meal("podwieczorek", "cd-r257001"),
      meal("kolacja", "cd-r122664"),
    ],
    [
      meal("sniadanie", "cd-r10001"),
      meal("drugie-sniadanie", "cd-r629253"),
      meal("obiad", "cd-r928784"),
      meal("podwieczorek", "cd-r123345", undefined, 1.5),
      meal("kolacja", "cd-r105756"),
    ],
    [
      meal("sniadanie", "cd-r397593"),
      meal("drugie-sniadanie", "cd-r345486", undefined, 1.5),
      meal("obiad", "cd-r536745"),
      meal("podwieczorek", "cd-r756545"),
      meal("kolacja", "cd-r708070"),
    ],
  ],
});

const KOBIETY_KARMIACE_PLAN = weekPlan({
  id: "kobiety-karmiace-7d",
  categoryId: "kobiety-karmiace",
  label: "7 dni",
  caloriesTarget: null,
  day1: [
    meal("sniadanie", "cd-r828234"),
    meal("drugie-sniadanie", "cd-r810086"),
    meal("obiad", "cd-r706924"),
    meal("podwieczorek", "cd-r257001", undefined, 1.5),
    meal("kolacja", "cd-r824128"),
  ],
  days2to7: [
    [
      meal("sniadanie", "cd-r10211"),
      meal("drugie-sniadanie", "cd-r307447", undefined, 1.5),
      meal("obiad", "cd-r708061"),
      meal("podwieczorek", "cd-r828104"),
      meal("kolacja", "cd-r789542"),
    ],
    [
      meal("sniadanie", "cd-r818711"),
      meal("drugie-sniadanie", "cd-r936264"),
      meal("obiad", "cd-r458454", undefined, 1.5),
      meal("podwieczorek", "cd-r108700"),
      meal("kolacja", "cd-r221601"),
    ],
    [
      meal("sniadanie", "cd-r671211"),
      meal("drugie-sniadanie", "cd-r254325"),
      meal("obiad", "cd-r908067"),
      meal("podwieczorek", "cd-r828101"),
      meal("kolacja", "cd-r747255", undefined, 2),
    ],
    [
      meal("sniadanie", "cd-r459176"),
      meal("drugie-sniadanie", "cd-r465526"),
      meal("obiad", "cd-r820697", undefined, 1.5),
      meal("podwieczorek", "cd-r912433"),
      meal("kolacja", "cd-r694307"),
    ],
    [
      meal("sniadanie", "cd-r753029"),
      meal("drugie-sniadanie", "cd-r769590"),
      meal("obiad", "cd-r629256", undefined, 1.5),
      meal("podwieczorek", "cd-r507517"),
      meal("kolacja", "cd-r538895", undefined, 1.5),
    ],
    [
      meal("sniadanie", "cd-r5416", undefined, 1.5),
      meal("drugie-sniadanie", "cd-r56968"),
      meal("obiad", "cd-r824128"),
      meal("podwieczorek", "cd-r938339"),
      meal("kolacja", "cd-r694482"),
    ],
  ],
});


/**
 * ROZSZERZANIE DIETY NIEMOWLĄT — cztery etapy (1.09.2026, prośba Agi).
 *
 * OŚ TEJ SEKCJI. Wcześniej kategoria `niemowleta` była jedyną bez planu,
 * z uzasadnieniem „nie zmyślamy treści niemowlęcej". To uzasadnienie było
 * słuszne wobec WYMYŚLANIA, ale nie wobec pokazania prawdziwych przepisów:
 * wszystkie dania poniżej to realne pozycje z Cookidoo, oznaczone tam
 * „dla dzieci", „BLW" albo wprost wiekiem („od 6. miesiąca życia").
 * Nic tu nie jest wymyślone — ani nazwa, ani link, ani wartości.
 *
 * CZEGO TU NIE MA I DLACZEGO. Nie ma gramatur dla dziecka, nie ma
 * konsystencji i nie ma kalorii (patrz `hideNutrition`). To są rzeczy,
 * które ustala rodzic z pediatrą, a nie strona internetowa — i to jest
 * ta sama ostrożność, co wcześniej, tylko wyrażona przez to, czego
 * NIE pokazujemy, zamiast przez brak całej kategorii.
 *
 * LICZBA POSIŁKÓW ROŚNIE Z ETAPEM: 2 → 3 → 4 → 5. To nie jest kosmetyka.
 * Pięć posiłków stałych dla sześciomiesięcznego dziecka byłoby złą radą —
 * na pierwszym etapie mleko nadal jest głównym pokarmem, a łyżeczka
 * warzywa dodatkiem. Dlatego Etap 1 ma dwa posiłki, a nie pięć.
 */

const NIEMOWLETA_ETAP1 = weekPlan({
  id: "niemowleta-etap-1",
  categoryId: "niemowleta",
  label: "Etap 1 — pierwsze produkty",
  caloriesTarget: null,
  variantKey: "etap-1",
  hideNutrition: true,
  note:
    "Na tym etapie mleko — mamy albo mieszanka — nadal jest głównym pokarmem, a posiłki stałe są dodatkiem. Nowe produkty wprowadza się pojedynczo i obserwuje przez kilka dni. Ile i o jakiej konsystencji — ustalasz z pediatrą; tutaj są pomysły i przepisy, nie zalecenia.",
  day1: [meal("obiad", "cd-r323226"), meal("podwieczorek", "cd-r325765")],
  days2to7: [
    [meal("obiad", "cd-r323220"), meal("podwieczorek", "cd-r325777")],
    [meal("obiad", "cd-r323219"), meal("podwieczorek", "cd-r325765")],
    [meal("obiad", "cd-r323218"), meal("podwieczorek", "cd-r173817")],
    [meal("obiad", "cd-r325781"), meal("podwieczorek", "cd-r325777")],
    [meal("obiad", "cd-r747107"), meal("podwieczorek", "cd-r325765")],
    [meal("obiad", "cd-r323223"), meal("podwieczorek", "cd-r173817")],
  ],
});

const NIEMOWLETA_ETAP2 = weekPlan({
  id: "niemowleta-etap-2",
  categoryId: "niemowleta",
  label: "Etap 2 — większa różnorodność",
  caloriesTarget: null,
  variantKey: "etap-2",
  hideNutrition: true,
  note:
    "Dochodzą kaszki i łączenie dwóch warzyw albo owoców. Mleko wciąż jest ważną częścią dnia. Kolejność i tempo wprowadzania produktów omów z pediatrą.",
  day1: [meal("sniadanie", "cd-r323214"), meal("obiad", "cd-r747112"), meal("podwieczorek", "cd-r747111")],
  days2to7: [
    [meal("sniadanie", "cd-r128302"), meal("obiad", "cd-r323222"), meal("podwieczorek", "cd-r323217")],
    [meal("sniadanie", "cd-r323213"), meal("obiad", "cd-r323224"), meal("podwieczorek", "cd-r325774")],
    [meal("sniadanie", "cd-r173821"), meal("obiad", "cd-r323225"), meal("podwieczorek", "cd-r128303")],
    [meal("sniadanie", "cd-r323214"), meal("obiad", "cd-r323221"), meal("podwieczorek", "cd-r323215")],
    [meal("sniadanie", "cd-r128302"), meal("obiad", "cd-r128298"), meal("podwieczorek", "cd-r325776")],
    [meal("sniadanie", "cd-r323213"), meal("obiad", "cd-r173814"), meal("podwieczorek", "cd-r747111")],
  ],
});

const NIEMOWLETA_ETAP3 = weekPlan({
  id: "niemowleta-etap-3",
  categoryId: "niemowleta",
  label: "Etap 3 — łączenie produktów",
  caloriesTarget: null,
  variantKey: "etap-3",
  hideNutrition: true,
  note:
    "Etap, na którym w posiłkach pojawiają się mięso, ryba i rośliny strączkowe, a dania łączą kilka składników. Produkty potencjalnie alergizujące wprowadzaj według zaleceń pediatry.",
  day1: [
    meal("sniadanie", "cd-r173812"),
    meal("obiad", "cd-r173815"),
    meal("podwieczorek", "cd-r325773"),
    meal("kolacja", "cd-r173813"),
  ],
  days2to7: [
    [meal("sniadanie", "cd-r325766"), meal("obiad", "cd-r325848"), meal("podwieczorek", "cd-r323217"), meal("kolacja", "cd-r325767")],
    [meal("sniadanie", "cd-r323213"), meal("obiad", "cd-r128301"), meal("podwieczorek", "cd-r325772"), meal("kolacja", "cd-r323224")],
    [meal("sniadanie", "cd-r811349"), meal("obiad", "cd-r325783"), meal("podwieczorek", "cd-r128308"), meal("kolacja", "cd-r325768")],
    [meal("sniadanie", "cd-r173812"), meal("obiad", "cd-r173819"), meal("podwieczorek", "cd-r325774"), meal("kolacja", "cd-r323225")],
    [meal("sniadanie", "cd-r325766"), meal("obiad", "cd-r325782"), meal("podwieczorek", "cd-r325776"), meal("kolacja", "cd-r323221")],
    [meal("sniadanie", "cd-r323214"), meal("obiad", "cd-r325780"), meal("podwieczorek", "cd-r173817"), meal("kolacja", "cd-r128300")],
  ],
});

const NIEMOWLETA_ETAP4 = weekPlan({
  id: "niemowleta-etap-4",
  categoryId: "niemowleta",
  label: "Etap 4 — więcej posiłków rodzinnych",
  caloriesTarget: null,
  variantKey: "etap-4",
  hideNutrition: true,
  note:
    "Dania w wersji do samodzielnego jedzenia (BLW) i coraz bliższe temu, co je reszta rodziny — bez soli i cukru. Przy każdym posiłku pilnuj wielkości i kształtu kawałków oraz zostań przy dziecku.",
  day1: [
    meal("sniadanie", "cd-r811349"),
    meal("drugie-sniadanie", "cd-r811354"),
    meal("obiad", "cd-r811352"),
    meal("podwieczorek", "cd-r811351"),
    meal("kolacja", "cd-r811344"),
  ],
  days2to7: [
    [meal("sniadanie", "cd-r811351"), meal("drugie-sniadanie", "cd-r811353"), meal("obiad", "cd-r811357"), meal("podwieczorek", "cd-r811354"), meal("kolacja", "cd-r811347")],
    [meal("sniadanie", "cd-r811349"), meal("drugie-sniadanie", "cd-r325776"), meal("obiad", "cd-r811358"), meal("podwieczorek", "cd-r811355"), meal("kolacja", "cd-r811348")],
    [meal("sniadanie", "cd-r173812"), meal("drugie-sniadanie", "cd-r811354"), meal("obiad", "cd-r173818"), meal("podwieczorek", "cd-r811351"), meal("kolacja", "cd-r811344")],
    [meal("sniadanie", "cd-r325766"), meal("drugie-sniadanie", "cd-r811353"), meal("obiad", "cd-r730342"), meal("podwieczorek", "cd-r811355"), meal("kolacja", "cd-r811347")],
    [meal("sniadanie", "cd-r811349"), meal("drugie-sniadanie", "cd-r325773"), meal("obiad", "cd-r173816"), meal("podwieczorek", "cd-r811351"), meal("kolacja", "cd-r811348")],
    [meal("sniadanie", "cd-r323213"), meal("drugie-sniadanie", "cd-r811354"), meal("obiad", "cd-r811357"), meal("podwieczorek", "cd-r811355"), meal("kolacja", "cd-r811344")],
  ],
});

const NIEMOWLETA_PLANY = [NIEMOWLETA_ETAP1, NIEMOWLETA_ETAP2, NIEMOWLETA_ETAP3, NIEMOWLETA_ETAP4];

/**
 * WARIANTY 14-DNIOWE (1.09.2026). Do tej pory przełącznik „14 dni"
 * w konfiguratorze nie miał czego dopasować — patrz nagłówek
 * data/diets/plany-14-dni.ts.
 */
const KETO_14D_1500 = fortnightPlan(KETO_1500, KETO_1500_DNI_8_14);
const KETO_14D_2000 = fortnightPlan(KETO_2000, KETO_2000_DNI_8_14);
const WEGE_14D_1500 = fortnightPlan(WEGE_1500, WEGETARIANSKA_1500_DNI_8_14);
const WEGE_14D_2000 = fortnightPlan(WEGE_2000, WEGETARIANSKA_2000_DNI_8_14);
const ODCHUDZAJACA_14D_1500 = fortnightPlan(ODCHUDZAJACA_1500, ODCHUDZAJACA_1500_DNI_8_14);
const ODCHUDZAJACA_14D_2000 = fortnightPlan(ODCHUDZAJACA_2000, ODCHUDZAJACA_2000_DNI_8_14);
const NISKI_IG_14D_1500 = fortnightPlan(NISKI_IG_1500, NISKI_IG_1500_DNI_8_14);
const NISKI_IG_14D_2000 = fortnightPlan(NISKI_IG_2000, NISKI_IG_2000_DNI_8_14);
const HASHIMOTO_14D_1500 = fortnightPlan(HASHIMOTO_1500, HASHIMOTO_1500_DNI_8_14);
const HASHIMOTO_14D_2000 = fortnightPlan(HASHIMOTO_2000, HASHIMOTO_2000_DNI_8_14);
const ZAMIENNIKI_14D_1500 = fortnightPlan(ZAMIENNIKI_1500, ZAMIENNIKI_1500_DNI_8_14);
const ZAMIENNIKI_14D_2000 = fortnightPlan(ZAMIENNIKI_2000, ZAMIENNIKI_2000_DNI_8_14);
const BEZGLUTENOWA_14D_1500 = fortnightPlan(BEZGLUTENOWA_1500, BEZGLUTENOWA_1500_DNI_8_14);
const BEZGLUTENOWA_14D_2000 = fortnightPlan(BEZGLUTENOWA_2000, BEZGLUTENOWA_2000_DNI_8_14);

export const DIET_CATEGORIES: DietCategory[] = [
  {
    id: "keto",
    slug: "keto",
    name: "Dieta keto",
    shortName: "Keto",
    description: "Niskowęglowodanowe dania z Thermomixem — więcej tłuszczu i białka, mniej węglowodanów.",
    configuratorMode: "calories",
    icon: "keto",
    plans: [KETO_1500, KETO_2000, KETO_14D_1500, KETO_14D_2000],
  },
  {
    id: "wegetarianska",
    slug: "wegetarianska",
    name: "Dieta wegetariańska",
    shortName: "Vege",
    description: "Roślinne dania na Thermomixie — pełnowartościowe posiłki bez mięsa i ryb.",
    configuratorMode: "calories",
    icon: "leaf",
    plans: [WEGE_1500, WEGE_2000, WEGE_14D_1500, WEGE_14D_2000],
  },
  {
    id: "odchudzajaca",
    slug: "odchudzajaca",
    name: "Dieta odchudzająca",
    shortName: "Odchudzająca",
    description: "Sycące, niżej kaloryczne posiłki ułatwiające utrzymanie deficytu kalorycznego.",
    configuratorMode: "calories",
    icon: "scale",
    medicalDisclaimer:
      "Materiał ma charakter edukacyjny i nie zastępuje indywidualnej konsultacji z lekarzem lub dietetykiem.",
    plans: [ODCHUDZAJACA_1500, ODCHUDZAJACA_2000, ODCHUDZAJACA_14D_1500, ODCHUDZAJACA_14D_2000],
  },
  {
    id: "niski-ig",
    slug: "niski-ig",
    name: "Dieta z niskim indeksem glikemicznym",
    shortName: "Niski IG",
    description: "Posiłki komponowane tak, by ograniczać gwałtowne wahania poziomu cukru we krwi.",
    configuratorMode: "calories",
    icon: "lightning",
    medicalDisclaimer:
      "Materiał ma charakter edukacyjny i nie zastępuje indywidualnej konsultacji z lekarzem lub dietetykiem.",
    plans: [NISKI_IG_1500, NISKI_IG_2000, NISKI_IG_14D_1500, NISKI_IG_14D_2000],
  },
  {
    id: "hashimoto",
    slug: "hashimoto",
    name: "Dieta przy Hashimoto",
    shortName: "Hashimoto",
    description: "Posiłki uwzględniające ogólne zasady żywienia pomocne przy Hashimoto.",
    configuratorMode: "calories",
    icon: "check",
    medicalDisclaimer:
      "Materiał ma charakter edukacyjny i nie zastępuje indywidualnej konsultacji z lekarzem lub dietetykiem. Dieta nie zastępuje leczenia.",
    plans: [HASHIMOTO_1500, HASHIMOTO_2000, HASHIMOTO_14D_1500, HASHIMOTO_14D_2000],
  },
  {
    id: "zamienniki",
    slug: "zamienniki",
    name: "Dieta z zamiennikami dań",
    shortName: "Z zamiennikami",
    /*
     * 4.09.2026: opis obiecywał „gotowe zamienniki dań i składników". Takiej
     * funkcji nie ma — żaden posiłek w bazie nie ma przypisanego zamiennika,
     * więc przycisk „Zamień danie" nigdy się nie pokazuje. Opis mówi teraz,
     * czym ten plan naprawdę jest: zwykłym jadłospisem bez wykluczeń.
     *
     * NAZWA I ADRES ZOSTAJĄ DO DECYZJI AGI. „Dieta z zamiennikami dań"
     * i /diety/zamienniki też obiecują tę funkcję, ale to strona
     * zaindeksowana i jest w mapie serwisu — zmiana nazwy albo adresu to
     * decyzja o SEO, nie poprawka tekstu, więc nie robię jej sam.
     */
    description: "Jadłospis bez wykluczeń — zwyczajne, mieszane menu na tydzień lub dwa, jeśli nie potrzebujesz diety pod konkretne wskazanie.",
    configuratorMode: "calories",
    icon: "swap",
    plans: [ZAMIENNIKI_1500, ZAMIENNIKI_2000, ZAMIENNIKI_14D_1500, ZAMIENNIKI_14D_2000],
  },
  {
    id: "bezglutenowa",
    slug: "bezglutenowa",
    name: "Dieta bezglutenowa",
    shortName: "Bezglutenowa",
    description:
      "Śniadania, II śniadania, obiady, podwieczorki i kolacje — z realnie zweryfikowanymi składnikami, nie tylko z założenia bezglutenowe.",
    configuratorMode: "calories",
    icon: "badge",
    // ETAP 9: dania dobrane pod kątem naturalnie bezglutenowych składników,
    // ale BEZ weryfikacji konkretnych produktów/etykiet (spec §10/§42) —
    // dlatego żaden przepis nie ma tu ustawionej flagi `glutenFree` (patrz
    // types/diet.ts). Ten disclaimer mówi to wprost, zamiast milcząco
    // sugerować certyfikację, której jeszcze nie ma.
    medicalDisclaimer:
      "Przykładowe dania dobrane są pod kątem naturalnie bezglutenowych składników, ale konkretne produkty i ich etykiety nie zostały jeszcze zweryfikowane pod kątem faktycznej zawartości glutenu — przed zakupem zawsze sprawdź etykiety lub skonsultuj się z Agą.",
    plans: [BEZGLUTENOWA_1500, BEZGLUTENOWA_2000, BEZGLUTENOWA_14D_1500, BEZGLUTENOWA_14D_2000],
  },
  {
    id: "dla-dzieci",
    slug: "dla-dzieci",
    name: "Pomysły na rodzinne posiłki dla dzieci",
    shortName: "Dla dzieci",
    description: "Proste, różnorodne posiłki, które ugotujesz raz dla całej rodziny — z osobną porcją dla dziecka.",
    configuratorMode: "children",
    icon: "users",
    plans: [DLA_DZIECI_PLAN],
  },
  {
    id: "kobiety-karmiace",
    slug: "kobiety-karmiace",
    name: "Zbilansowane posiłki dla kobiet karmiących",
    shortName: "Kobiety karmiące",
    description: "Różnorodne, regularne i wygodne posiłki — bez nastawienia na odchudzanie.",
    configuratorMode: "breastfeeding",
    icon: "heart",
    medicalDisclaimer:
      "Jeśli masz indywidualne zalecenia żywieniowe, alergie lub problemy zdrowotne, skonsultuj dietę z lekarzem lub dietetykiem.",
    plans: [KOBIETY_KARMIACE_PLAN],
  },
  {
    id: "niemowleta",
    slug: "niemowleta",
    // Bez „z Thermomixem" w nazwie: szablon strony kategorii dokleja
    // „ z Thermomixem®" do H1, więc wychodziło „…z Thermomixem z Thermomixem®".
    name: "Rozszerzanie diety niemowląt",
    shortName: "Rozszerzanie diety niemowląt",
    description: "Pomysły na proste posiłki i przygotowanie produktów odpowiednio do etapu rozszerzania diety.",
    configuratorMode: "weaning",
    icon: "sprout",
    medicalDisclaimer:
      "Materiały mają charakter edukacyjny i nie zastępują indywidualnych zaleceń pediatry lub dietetyka. Przed wprowadzeniem nowych produktów do diety dziecka warto skonsultować sposób żywienia ze specjalistą.",
    plans: NIEMOWLETA_PLANY,
  },
];

export function getDietCategory(slug: string): DietCategory | undefined {
  return DIET_CATEGORIES.find((c) => c.slug === slug);
}

/**
 * Publiczny plan kategorii, który faktycznie ma treść (dzień 1 z posiłkami).
 * Jedno źródło prawdy dla dwóch miejsc: generatora bezpłatnego jadłospisu
 * PDF (lib/diets/jadlospis-pdf.ts) i konfiguratora, który na tej podstawie
 * decyduje, czy w ogóle pokazać przycisk pobierania
 * (components/diets/diet-configurator.tsx). Od 1.09.2026 każda kategoria
 * ma plan, więc ta funkcja nie odsiewa już nikogo — zostaje jako zabezpieczenie
 * przed przyciskiem prowadzącym do 404, gdyby doszła kategoria bez treści.
 */
export function getPublicDietPlan(category: DietCategory): DietPlan | undefined {
  return category.plans.find((p) => p.visibility === "PUBLIC" && p.days.some((d) => d.meals.length > 0));
}

/**
 * Finds a plan by id across every category (spec §17/§30 — the shopping
 * list and PDF export routes only have a `planId`, not a category slug).
 */
export function getDietPlan(planId: string): DietPlan | undefined {
  for (const category of DIET_CATEGORIES) {
    const plan = category.plans.find((p) => p.id === planId);
    if (plan) return plan;
  }
  return undefined;
}

/**
 * Categories with at least a Day-1 example plan. Od 1.09.2026 mają go
 * WSZYSTKIE — `niemowleta` dostały cztery plany etapowe (patrz
 * NIEMOWLETA_ETAP1…4). Wcześniej były jedynym wyjątkiem, bo treści
 * niemowlęcej nie wolno zmyślać; to nadal obowiązuje — dlatego etapy
 * są zbudowane wyłącznie z prawdziwych przepisów Cookidoo, bez gramatur
 * i bez kalorii.
 */
export const LIVE_EXAMPLE_CATEGORY_IDS = [
  "keto",
  "wegetarianska",
  "odchudzajaca",
  "niski-ig",
  "hashimoto",
  "zamienniki",
  "bezglutenowa",
  "dla-dzieci",
  "kobiety-karmiace",
  "niemowleta",
] as const;
