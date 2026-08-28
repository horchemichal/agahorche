import { Eyebrow, Heading, Lead } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function ValueSection() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>Dlaczego Aga</Eyebrow>
        <Heading as="h2" size="lg" className="mb-5">
          Nie sprzedaję Ci tylko urządzenia.
        </Heading>
        <Lead>
          Towarzyszę Ci na każdym etapie — od pierwszego pokazu, przez wybór odpowiedniego
          modelu, aż po pierwsze tygodnie gotowania z Thermomixem. Moim celem nie jest jedna
          transakcja, tylko to, żebyś naprawdę z niego korzystała.
        </Lead>
      </div>
    </Section>
  );
}
