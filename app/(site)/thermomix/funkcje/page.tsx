import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { Section } from "@/components/ui/section";
import { Heading, Lead } from "@/components/ui/heading";
import { Badge, Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Photo, Prose, CtaBand, LocalBand } from "@/components/marketing/content-blocks";

export const metadata: Metadata = buildMetadata({
  title: "Funkcje Thermomixa TM7 — co potrafi",
  description:
    "Wszystkie funkcje Thermomixa TM7 opisane przez to, co realnie robią w kuchni: gotowanie, para, wyrabianie ciasta, mielenie, ważenie, otwarte gotowanie i prowadzenie krok po kroku.",
  path: "/thermomix/funkcje",
  keywords: ["funkcje thermomix", "co potrafi thermomix tm7", "thermomix funkcje tm7"],
});

const FUNKCJE = [
  {
    nazwa: "Gotowanie i duszenie",
    opis: "Ustawiona temperatura, czas i obroty — zupa, sos czy gulasz pilnują się same, bez przypalania.",
  },
  {
    nazwa: "Gotowanie na parze (Varoma)",
    opis: "Dwa poziomy pary nad naczyniem: ryba i warzywa na górze, a na dole w tym samym czasie gotuje się reszta obiadu.",
  },
  {
    nazwa: "Otwarte gotowanie",
    opis: "Nowość w TM7 — gotujesz przy zdjętej pokrywie jak w garnku: doprawiasz, próbujesz, odparowujesz sos.",
  },
  {
    nazwa: "Miksowanie i blendowanie",
    opis: "Kremowe zupy, koktajle, sosy i przeciery bez przekładania do blendera.",
  },
  {
    nazwa: "Siekanie i szatkowanie",
    opis: "Cebula, warzywa na sos, natka, orzechy — kilka sekund zamiast deski i noża.",
  },
  {
    nazwa: "Mielenie",
    opis: "Mięso na kotlety i pulpety, kasza na mąkę, cukier na puder, kawa, mak.",
  },
  {
    nazwa: "Wyrabianie ciasta",
    opis: "Chleb, bułki, pizza, pierogi i drożdżówki — ciasto wyrabia się w naczyniu, blat zostaje czysty.",
  },
  {
    nazwa: "Ubijanie",
    opis: "Piana z białek, bita śmietana, majonez i musy — motylkiem, w kilka minut.",
  },
  {
    nazwa: "Ważenie",
    opis: "Waga wbudowana w naczynie: dosypujesz składniki wprost do środka, bez osobnej miski.",
  },
  {
    nazwa: "Emulgowanie i podgrzewanie",
    opis: "Sos holenderski, budyń, czekolada, karmel — rzeczy, które zwykle trzeba stale mieszać.",
  },
  {
    nazwa: "Fermentacja i wyrastanie",
    opis: "Jogurt, zakwas i ciasto drożdżowe w stałej, niskiej temperaturze.",
  },
  {
    nazwa: "Mycie wstępne",
    opis: "Woda z kroplą płynu i chwila pracy noża — naczynie po zupie jest gotowe na deser.",
  },
];

const FAQ = [
  {
    question: "Czy Thermomix TM7 smaży?",
    answer:
      "Tak, w naczyniu — na przykład podsmaża cebulę i mięso na początku przepisu. Nie zastąpi jednak dużej patelni, gdy chcesz usmażyć kilka kotletów naraz na rumiano.",
  },
  {
    question: "Czy Thermomix piecze?",
    answer:
      "Nie. Ciasto wyrabia i przygotowuje masę, ale pieczenie odbywa się w piekarniku. Za to gotowanie na parze często zastępuje pieczenie tam, gdzie chodzi o lekkość dania.",
  },
  {
    question: "Skąd urządzenie wie, co ma robić?",
    answer:
      "Z przepisu na Cookidoo: wysyłasz go na urządzenie, a ono samo ustawia czas, temperaturę i obroty na każdym kroku. Ty dodajesz składniki, gdy pojawi się komunikat.",
  },
  {
    question: "Czy da się gotować bez przepisu?",
    answer:
      "Tak. Możesz sterować ręcznie — ustawić czas, temperaturę i obroty samodzielnie, jak przy zwykłym garnku i mikserze w jednym.",
  },
];

export default function FunkcjePage() {
  return (
    <>
      <Section className="!pb-0">
        <Breadcrumbs
          items={[
            { name: "Thermomix", path: "/thermomix" },
            { name: "Funkcje", path: "/thermomix/funkcje" },
          ]}
        />
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>Funkcje</Badge>
            <Heading as="h1" size="xl" className="mt-4 max-w-xl">
              Co potrafi Thermomix TM7
            </Heading>
            <Lead className="mt-5 max-w-xl">
              Dwanaście rzeczy, które robi w kuchni — opisane tym, co z nich wychodzi, a nie nazwami
              trybów z instrukcji.
            </Lead>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/prezentacja">Zobacz to na żywo</ButtonLink>
              <ButtonLink href="/thermomix/wady-i-zalety" variant="secondary">
                Wady i zalety
              </ButtonLink>
            </div>
          </div>
          <Photo
            priority
            src="/zdjecia/prezentacja-thermomix-6.webp"
            alt="Świeżo upieczone bułki na blasze obok Thermomixa TM7 z przepisem na ekranie"
            caption="Ciasto na bułki wyrobione w naczyniu — jedna z częściej używanych funkcji."
          />
        </div>
      </Section>

      <Section tone="surface">
        <Heading as="h2" size="md">
          Dwanaście funkcji w jednym urządzeniu
        </Heading>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FUNKCJE.map((f) => (
            <Card as="li" key={f.nazwa}>
              <h3 className="text-base font-semibold text-neutral-900">{f.nazwa}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.opis}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section>
        <Heading as="h2" size="md">
          Co to zastępuje na blacie
        </Heading>
        <Prose className="mt-4">
          <p>
            Blender, mikser, waga kuchenna, parowar, maszynka do mielenia, częściowo robot
            planetarny i sokowirówka — w praktyce tyle sprzętów wraca do szafki albo w ogóle nie
            trzeba ich kupować. Zostaje jedno urządzenie, które myje się w kilkanaście sekund między
            daniami.
          </p>
          <p>
            Czego nie zastąpi: piekarnika i dużej patelni. To warto wiedzieć przed zakupem — piszę o
            tym otwarcie na stronie{" "}
            <Link
              href="/thermomix/wady-i-zalety"
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              wady i zalety
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <FaqSection items={FAQ} title="Funkcje — najczęstsze pytania" />

      <LocalBand />
      <CtaBand
        title="Najlepiej zobaczyć to w działaniu"
        text="Na bezpłatnej prezentacji gotujemy u Ciebie pełny obiad — wtedy widać, które z tych funkcji naprawdę będziesz używać."
      />
    </>
  );
}
