import Link from "next/link";
import { FOOTER_NAV } from "@/data/nav";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/utils";
import { PhoneIcon, MessengerIcon } from "@/components/marketing/icons";
import { SocialIcons } from "./social-icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-chrome="marketing"
      className="border-t border-border bg-neutral-900 pb-24 pt-14 text-neutral-0 lg:pb-14"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="md:col-span-3 lg:col-span-1">
            <p className="font-display text-lg font-semibold">Aga Horche</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-neutral-400">
              Oficjalna Przedstawicielka Thermomix®
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Pomagam odkryć Thermomix® od pierwszego spotkania aż po codzienne gotowanie.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-neutral-300">
              <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-brand-300">
                <PhoneIcon width={15} height={15} /> {SITE.phone}
              </a>
              <a href={SITE.messengerHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-300">
                <MessengerIcon width={15} height={15} /> Napisz do Agi
              </a>
            </div>
            <SocialIcons className="mt-5" />
          </div>

          {FOOTER_NAV.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-0">{group.title}</p>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-neutral-400 hover:text-brand-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-neutral-700 pt-6 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p>© {year} Aga Horche. Wszelkie prawa zastrzeżone.</p>
            {/*
              Podpis wykonawcy strony (prośba Michała, 4.09.2026).
              `rel="noopener"` bez `nofollow` — to zwykły link do własnej
              agencji, a nie płatne miejsce reklamowe, więc nie ma powodu
              odcinać mu wartości. Otwiera się w tej samej karcie: to stopka,
              a nie treść, przy której ktoś chce zostać.
            */}
            <p className="mt-1">
              Potrzebujesz sklep lub stronę www?{" "}
              <a
                href="https://agencjaxd.pl"
                rel="noopener"
                className="text-neutral-300 underline underline-offset-2 hover:text-neutral-0"
              >
                agencjaxd.pl
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            {/*
              Link do polityki prywatności (4.09.2026). Musi być dostępny
              z każdej strony: formularz zbiera dane osobowe, a obowiązek
              informacyjny z art. 13 RODO spełnia się przez treść, do której
              da się dojść — nie przez samo zaznaczenie checkboxa.
            */}
            <Link href="/polityka-prywatnosci" className="text-sm text-neutral-400 hover:text-brand-300">
              Polityka prywatności
            </Link>
            <p className="text-xs">
              Thermomix® jest zarejestrowanym znakiem towarowym Vorwerk. Ta strona nie jest oficjalną
              stroną Vorwerk.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
