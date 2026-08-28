import type { DietCategory, ConfiguratorMode, ThermomixModel } from "@/types/diet";

export interface ConfiguratorSelection {
  category: DietCategory;
  days?: 7 | 14;
  calories?: 1500 | 2000;
  childAgeLabel?: string;
  mealsPerDay?: number;
  breastfeedingVariant?: string;
  weaningStage?: string;
  model: ThermomixModel;
}

const MODE_ROWS: Record<ConfiguratorMode, (s: ConfiguratorSelection) => [string, string][]> = {
  calories: (s) => [
    ["Liczba dni", s.days ? `${s.days} dni` : "—"],
    ["Kaloryczność", s.calories ? `${s.calories} kcal` : "—"],
  ],
  children: (s) => [
    ["Wiek dziecka", s.childAgeLabel ?? "—"],
    ["Posiłki dziennie", s.mealsPerDay ? String(s.mealsPerDay) : "—"],
  ],
  breastfeeding: (s) => [
    ["Wariant planu", s.breastfeedingVariant ?? "—"],
    ["Liczba dni", s.days ? `${s.days} dni` : "—"],
  ],
  weaning: (s) => [["Etap rozszerzania diety", s.weaningStage ?? "—"]],
};

/** "Podsumowanie wyboru" panel (spec §5 reference layout). */
export function DietSummary({ selection }: { selection: ConfiguratorSelection }) {
  const rows = MODE_ROWS[selection.category.configuratorMode](selection);
  return (
    <div className="rounded-lg border border-border p-4 text-sm">
      <p className="mb-2 font-medium text-neutral-800">Podsumowanie wyboru</p>
      <dl className="space-y-1.5">
        <div className="flex justify-between">
          <dt className="text-muted">Dieta</dt>
          <dd className="font-medium text-neutral-900">{selection.category.shortName}</dd>
        </div>
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between">
            <dt className="text-muted">{label}</dt>
            <dd className="font-medium text-neutral-900">{value}</dd>
          </div>
        ))}
        <div className="flex justify-between">
          <dt className="text-muted">Thermomix</dt>
          <dd className="font-medium text-neutral-900">{selection.model}</dd>
        </div>
      </dl>
    </div>
  );
}
