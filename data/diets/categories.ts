import type { DietCategory, DietDay, DietPlan, Meal } from "@/types/diet";
import { THERMOMIX_MODELS } from "@/types/diet";

let mealCounter = 0;
function meal(type: Meal["type"], recipeId: string, alt?: string, portions?: number): Meal {
  mealCounter += 1;
  return {
    id: `m${mealCounter}-${recipeId}`,
    type,
    recipeId,
    alternativeRecipeIds: alt ? [alt] : undefined,
    portions,
  };
}

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

export const DIET_CATEGORIES: DietCategory[] = [
  {
    id: "keto",
    slug: "keto",
    name: "Dieta keto",
    shortName: "Keto",
    description: "Niskowęglowodanowe dania z Thermomixem — więcej tłuszczu i białka, mniej węglowodanów.",
    configuratorMode: "calories",
    icon: "keto",
    plans: [KETO_1500, KETO_2000],
  },
  {
    id: "wegetarianska",
    slug: "wegetarianska",
    name: "Dieta wegetariańska",
    shortName: "Vege",
    description: "Roślinne dania na Thermomixie — pełnowartościowe posiłki bez mięsa i ryb.",
    configuratorMode: "calories",
    icon: "leaf",
    plans: [WEGE_1500, WEGE_2000],
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
    plans: [ODCHUDZAJACA_1500, ODCHUDZAJACA_2000],
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
    plans: [NISKI_IG_1500, NISKI_IG_2000],
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
    plans: [HASHIMOTO_1500, HASHIMOTO_2000],
  },
  {
    id: "zamienniki",
    slug: "zamienniki",
    name: "Dieta z zamiennikami dań",
    shortName: "Z zamiennikami",
    description: "Elastyczny plan z gotowymi zamiennikami dań i składników, dopasowany do Twoich upodobań.",
    configuratorMode: "calories",
    icon: "swap",
    plans: [ZAMIENNIKI_1500, ZAMIENNIKI_2000],
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
    plans: [BEZGLUTENOWA_1500, BEZGLUTENOWA_2000],
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
    name: "Rozszerzanie diety niemowląt z Thermomixem",
    shortName: "Rozszerzanie diety niemowląt",
    description: "Pomysły na proste posiłki i przygotowanie produktów odpowiednio do etapu rozszerzania diety.",
    configuratorMode: "weaning",
    icon: "sprout",
    medicalDisclaimer:
      "Materiały mają charakter edukacyjny i nie zastępują indywidualnych zaleceń pediatry lub dietetyka. Przed wprowadzeniem nowych produktów do diety dziecka warto skonsultować sposób żywienia ze specjalistą.",
    plans: [],
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
 * (components/diets/diet-configurator.tsx). Dzięki temu `niemowleta` —
 * jedyna kategoria bez planu, celowo (patrz komentarz nad
 * ODCHUDZAJACA_1500) — nigdy nie dostanie przycisku prowadzącego do 404.
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
 * Categories with at least a Day-1 example plan. Updated in ETAP 9 — every
 * category now has one EXCEPT `niemowleta` (deliberately, see the comment
 * above ODCHUDZAJACA_1500 — infant weaning content isn't invented). `keto`
 * and `wegetarianska` are still the only two with the FULL 7-day content
 * unlocked in Strefa Klienta (ETAP 8, see days2to7 usage above).
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
] as const;
