import { WHY_CHOOSE_AGA_POINTS } from "@/data/content/presentation-explainer";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { TargetIcon, LaptopIcon, HeartHandsIcon, UsersIcon, LightningIcon } from "@/components/marketing/icons";

const ICONS = [TargetIcon, LaptopIcon, HeartHandsIcon, UsersIcon, LightningIcon];

export function WhyChooseAgaSection() {
  return (
    <Section>
      <Heading as="h2" size="md" align="center" className="mb-10">
        Dlaczego warto wybrać Agę?
      </Heading>
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {WHY_CHOOSE_AGA_POINTS.map((point, i) => {
          const Icon = ICONS[i];
          return (
            <div key={point.title} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Icon width={22} height={22} />
              </div>
              <p className="text-sm font-semibold text-neutral-900">{point.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{point.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
