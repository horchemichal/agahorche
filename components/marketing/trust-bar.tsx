import { BadgeIcon, LaptopIcon, HeartHandsIcon, UsersIcon } from "@/components/marketing/icons";

const ITEMS = [
  { Icon: BadgeIcon, label: "Oficjalna przedstawicielka Thermomix®" },
  { Icon: LaptopIcon, label: "Prezentacja Thermomix® w Twoim domu" },
  { Icon: HeartHandsIcon, label: "Opieka posprzedażowa i wsparcie" },
  { Icon: UsersIcon, label: "Aga Club — przepisy, plany i pomoc każdego dnia" },
];

export function TrustBar() {
  return (
    <div className="bg-brand-600 py-6">
      <div className="container-page grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
        {ITEMS.map(({ Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon width={22} height={22} className="shrink-0 text-neutral-0" />
            <span className="text-xs font-medium leading-snug text-neutral-0 md:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
