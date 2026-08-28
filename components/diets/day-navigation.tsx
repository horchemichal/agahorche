import type { DietDay } from "@/types/diet";
import { LockIcon } from "@/components/marketing/icons";
import { cn } from "@/lib/utils";

/**
 * Day pills for stepping through a plan (spec §30). Locked days (spec §13 —
 * everything past day 1 in a PUBLIC plan) stay visible and clickable so the
 * visitor sees the full 7/14-day shape of the plan, but selecting one
 * triggers the client-zone gate instead of content — see DietPlanPreview.
 */
export function DayNavigation({
  days,
  activeDay,
  onSelect,
  forceUnlocked = false,
}: {
  days: DietDay[];
  activeDay: number;
  onSelect: (dayNumber: number) => void;
  /** Strefa Klienta (ETAP 8) — the plan's locked days carry real content there, so hide the lock icon. */
  forceUnlocked?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Dni planu">
      {days.map((day) => (
        <button
          key={day.dayNumber}
          type="button"
          role="tab"
          aria-selected={activeDay === day.dayNumber}
          onClick={() => onSelect(day.dayNumber)}
          className={cn(
            "flex h-9 min-w-9 items-center justify-center gap-1 rounded-full border px-3 text-sm font-medium transition-colors",
            activeDay === day.dayNumber
              ? "border-brand-600 bg-brand-600 text-neutral-0"
              : "border-neutral-300 text-neutral-700 hover:border-brand-400",
          )}
        >
          {day.dayNumber}
          {day.locked && !forceUnlocked && <LockIcon width={12} height={12} />}
        </button>
      ))}
    </div>
  );
}
