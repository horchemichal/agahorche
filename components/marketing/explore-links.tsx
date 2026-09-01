import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";

/**
 * Rozdroże linków na stronie głównej. Powstało w sierpniu 2026, bo podstrony
 * tematyczne (funkcje, TM6, jak kupić, dla rodziny/mamy/początkujących) były
 * osierocone — miały treść, ale nie prowadził do nich żaden link ze strony
 * głównej, więc ani użytkownik, ani Google nie miał jak do nich trafić.
 *
 * Świadomie jest to blok tekstowy, nie kolejna sekcja z kaflami i zdjęciami:
 * układ strony głównej jest zatwierdzony przez Agę i ten element ma go
 * uzupełnić nisko na stronie, a nie przebić.
 */
const GRUPY: { tytul: string; linki: { href: string; label: string; opis: string }[] }[] = [
  {
    tytul: "Poznaj urządzenie",
    linki: [
      { href: "/thermomix/funkcje", label: "Funkcje Thermomixa", opis: "Dwanaście rzeczy, które robi w kuchni." },
      { href: "/thermomix/tm7-vs-tm6", label: "TM7 vs TM6", opis: "Dziewięć różnic i kiedy przesiadka ma sens." },
      { href: "/thermomix/wady-i-zalety", label: "Wady i zalety", opis: "Uczciwie, także o tym, co przeszkadza." },
    ],
  },
  {
    tytul: "Zanim kupisz",
    linki: [
      { href: "/jak-kupic-thermomix", label: "Jak kupić Thermomixa", opis: "Cztery kroki, dostawa i gwarancja." },
      { href: "/finansowanie", label: "Raty 0%", opis: "Policz ratę od aktualnej ceny." },
      { href: "/akcesoria", label: "Akcesoria", opis: "Co jest w zestawie, a co dokupujesz." },
    ],
  },
  {
    tytul: "Sprawdź, czy to dla Ciebie",
    linki: [
      { href: "/thermomix/dla-rodziny", label: "Dla rodziny", opis: "Obiad, który gotuje się sam." },
      { href: "/thermomix/dla-mamy", label: "Dla mamy", opis: "Gotowanie z małym dzieckiem w domu." },
      { href: "/thermomix/dla-poczatkujacych", label: "Dla początkujących", opis: "Nie umiesz gotować? Tym bardziej." },
    ],
  },
];

export function ExploreLinksSection() {
  return (
    <Section tone="surface">
      <Heading as="h2" size="md">
        Wszystko, co warto wiedzieć przed decyzją
      </Heading>
      <Lead className="mt-3 max-w-2xl">
        Zebrałam to, o co pytacie najczęściej — bez logowania, bez zapisów, bez dzwonienia do mnie.
      </Lead>

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {GRUPY.map((grupa) => (
          <div key={grupa.tytul}>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">{grupa.tytul}</p>
            <ul className="mt-4 flex flex-col gap-4">
              {grupa.linki.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-medium text-brand-700 underline underline-offset-4 hover:no-underline"
                  >
                    {link.label}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{link.opis}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
