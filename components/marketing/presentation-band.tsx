import { PRESENTATION_STEPS_DETAILED } from "@/data/content/presentation-explainer";
import { Container } from "@/components/ui/container";
import { PhoneIcon, CalendarIcon, LaptopIcon, ChefHatIcon, CartIcon } from "@/components/marketing/icons";
import { cn } from "@/lib/utils";

const ICONS = {
  phone: PhoneIcon,
  calendar: CalendarIcon,
  laptop: LaptopIcon,
  chefHat: ChefHatIcon,
  cart: CartIcon,
};

/** Dark horizontal 5-step band ("Jak wygląda prezentacja?" — mockup layout). */
export function PresentationBand() {
  return (
    <div className="bg-brand-800 py-12 text-neutral-0 md:py-14">
      <Container>
        <h2 className="mb-8 text-center font-display text-2xl md:text-3xl">Jak wygląda prezentacja?</h2>

        {/* Mobile: 2 steps per row. sm+: reverts to a single 5-across row. */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-5 sm:gap-6">
          {PRESENTATION_STEPS_DETAILED.map((step, i) => {
            const Icon = ICONS[step.icon];
            const isLastOdd = i === PRESENTATION_STEPS_DETAILED.length - 1 && PRESENTATION_STEPS_DETAILED.length % 2 === 1;
            return (
              <div
                key={step.title}
                className={cn("flex flex-col items-center text-center", isLastOdd && "col-span-2 sm:col-span-1")}
              >
                {/*
                  4.09.2026, prośba Agi: białe kółka, zielone ikonki.
                  Wcześniej kółko było białe w 10% krycia, a ikona biała —
                  czyli jasny kształt na ciemnym tle, ledwo widoczny.
                  Teraz pełna biel i ikona w brand-700: kontrast 5,2:1 na
                  bieli, więc cienkie kreski ikony naprawdę widać.
                */}
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-0 text-brand-700 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-brand-200">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-0 text-[0.65rem] font-bold text-brand-800">
                    {i + 1}
                  </span>
                  {step.title}
                </p>
                <p className="text-xs leading-relaxed text-neutral-0/70">{step.description}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-0/70">
          Prezentacja jest bezpłatna i niezobowiązująca.
        </p>
      </Container>
    </div>
  );
}
