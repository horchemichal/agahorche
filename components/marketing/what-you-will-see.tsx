import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";

const ITEMS = [
  { title: "Gotowanie w jednym urządzeniu", description: "Krojenie, miksowanie, gotowanie, ważenie i gotowanie na parze bez przekładania między sprzętami." },
  { title: "Prowadzony przepis krok po kroku", description: "Ekran dotykowy prowadzi Cię przez cały przepis — bez zgadywania." },
  { title: "Realny czas przygotowania", description: "Zobaczysz, ile faktycznie trwa przygotowanie konkretnego dania, na żywo." },
];

export function WhatYouWillSeeSection() {
  return (
    <Section tone="surface">
      <Heading as="h2" size="md" className="mb-8">
        Co możesz zobaczyć na prezentacji?
      </Heading>
      <div className="grid gap-5 md:grid-cols-3">
        {ITEMS.map((item) => (
          <Card key={item.title}>
            <h3 className="mb-1.5 font-semibold text-neutral-900">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
