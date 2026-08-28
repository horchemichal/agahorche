import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/lead/lead-form";
import { PhoneIcon, MessengerIcon } from "@/components/marketing/icons";
import { SITE } from "@/lib/utils";

/** Dark contact band (mockup "Skontaktuj się z Agą") — wraps the existing, already-functional LeadForm. */
export function ContactBand() {
  return (
    <div className="bg-brand-800 py-14 text-neutral-0 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Skontaktuj się z Agą</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-0/75">
              Napisz wiadomość, a odezwę się do Ciebie najszybciej jak to możliwe.
            </p>

            <div className="mt-7 flex flex-col gap-5 text-sm">
              <a href={SITE.phoneHref} className="flex items-start gap-3 hover:text-brand-200">
                <PhoneIcon width={18} height={18} className="mt-0.5 shrink-0" />
                <span>
                  <span className="block font-medium">{SITE.phone}</span>
                  <span className="block text-neutral-0/60">Zadzwoń do Agi</span>
                </span>
              </a>
              <a href={SITE.messengerHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-brand-200">
                <MessengerIcon width={18} height={18} className="mt-0.5 shrink-0" />
                <span>
                  <span className="block font-medium">Napisz do Agi</span>
                  <span className="block text-neutral-0/60">przez Messenger</span>
                </span>
              </a>
              <p className="text-neutral-0/60">
                Obsługuję klientów w całej Polsce
                <br />
                — prezentacje stacjonarne, u Ciebie w domu.
              </p>
            </div>
          </div>

          <Card className="bg-neutral-0">
            <LeadForm source="homepage" />
          </Card>
        </div>
      </Container>
    </div>
  );
}
