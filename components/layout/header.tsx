"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { PRIMARY_NAV } from "@/data/nav";
import { ButtonLink } from "@/components/ui/button";
import { cn, SITE } from "@/lib/utils";
import { PhoneIcon, MessengerIcon } from "@/components/marketing/icons";
import { SocialIcons } from "./social-icons";
import { track } from "@/lib/analytics/track";
import { MobileNav } from "./mobile-nav";

/**
 * Sticky header: a slim top contact bar (phone/Messenger/social — spec
 * "Aga jest przewodnikiem" framing, put real contact channels front and
 * center) plus the main nav below it. Desktop dropdowns stay one level
 * deep to avoid diluting internal-link equity; mobile collapses to a
 * hamburger — see MobileNav.
 */
export function Header({
  sesja,
  kontoKlubu,
  kontoKlubuMobile,
}: {
  sesja?: ReactNode;
  /** Wejście do konta na dole rozwijanego „Aga Club" — patrz klub-konto-link.tsx. */
  kontoKlubu?: ReactNode;
  kontoKlubuMobile?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-neutral-0">
      <div className="hidden bg-neutral-900 text-neutral-0 md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 hover:text-brand-300"
              onClick={() => track("click_phone", { path: pathname, placement: "header-topbar-call" })}
            >
              <PhoneIcon width={14} height={14} />
              {SITE.phone}
            </a>
            <a
              href={SITE.messengerHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-300"
              onClick={() => track("click_phone", { path: pathname, placement: "header-topbar-messenger" })}
            >
              <MessengerIcon width={14} height={14} />
              Napisz do Agi
            </a>
          </div>
          <div className="flex items-center gap-4">
            {/*
              Pasek konta Aga Club — patrz components/layout/client-session-bar.tsx.
              Wchodzi tu jako gotowy węzeł z layoutu, bo ten komponent jest
              kliencki, a odczyt sesji dzieje się na serwerze.
            */}
            {sesja}
            <div className="flex items-center gap-3">
              <span className="text-neutral-400">Znajdź mnie w social mediach:</span>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-neutral-0/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="leading-tight">
            <span className="block font-display text-xl font-semibold text-neutral-900">Aga Horche</span>
            <span className="block text-[0.65rem] uppercase tracking-wide text-muted">
              Oficjalna Przedstawicielka Thermomix®
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Główna nawigacja">
            {PRIMARY_NAV.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium text-neutral-700 hover:text-brand-700 xl:px-3"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div
                    className={cn(
                      "invisible absolute left-0 top-full min-w-52 rounded-lg border border-border bg-neutral-0 p-2 opacity-0 shadow-[var(--shadow-card)] transition-all",
                      "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-surface hover:text-brand-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                    {/* Wejście do konta — tylko pod „Aga Club", patrz klub-konto-link.tsx. */}
                    {item.href === "/aga-club" && kontoKlubu}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/prezentacja" size="md">
              Umów prezentację
            </ButtonLink>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-6 bg-neutral-900 transition-transform",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span className={cn("block h-0.5 w-6 bg-neutral-900 transition-opacity", open && "opacity-0")} />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-neutral-900 transition-transform",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        sesja={sesja}
        kontoKlubu={kontoKlubuMobile}
      />
    </header>
  );
}
