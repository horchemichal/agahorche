import type { DailyCount } from "@/lib/admin/dashboard-stats";

/**
 * Deliberately not a charting library (spec §29: minimize JS, avoid heavy
 * deps for something this small) — a handful of <rect>s driven by real
 * per-day lead counts is enough for "prosty wykres".
 */
export function LeadsChart({ data }: { data: DailyCount[] }) {
  const max = Math.max(1, ...data.map((d) => d.count));
  const width = 560;
  const height = 140;
  const barGap = 4;
  const barWidth = (width - barGap * (data.length - 1)) / data.length;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-36 w-full"
      role="img"
      aria-label="Liczba nowych leadów w ostatnich 14 dniach"
    >
      {data.map((d, i) => {
        const barHeight = (d.count / max) * (height - 20);
        const x = i * (barWidth + barGap);
        const y = height - barHeight;
        return (
          <g key={d.date}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={Math.max(barHeight, d.count > 0 ? 2 : 0)}
              rx={2}
              className={d.count > 0 ? "fill-brand-500" : "fill-neutral-200"}
            />
            <title>
              {d.date}: {d.count} {d.count === 1 ? "lead" : "leadów"}
            </title>
          </g>
        );
      })}
    </svg>
  );
}
