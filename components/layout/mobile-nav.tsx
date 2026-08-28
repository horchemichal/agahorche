"use client";

import Link from "next/link";
import { PRIMARY_NAV } from "@/data/nav";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Full-screen mobile nav. Mobile is the primary device (spec §30), so this
 * is not an afterthought dropdown — large tap targets, a fixed CTA at the
 * bottom, easy one-thumb reach.
 */
export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-30 bg-neutral-0 transition-transform duration-200 lg:hidden",
        open ? "translate-x-0" : "translate-x-full pointer-events-none",
      )}
    >
      <nav className="flex h-full flex-col overflow-y-auto p-5" aria-label="Menu mobilne">
        <ul className="flex flex-1 flex-col gap-1">
          {PRIMARY_NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between rounded-lg px-3 py-3.5 text-lg font-medium text-neutral-900"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="mb-2 ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={onClose}
                        className="block rounded-md px-3 py-2.5 text-base text-neutral-600"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <ButtonLink href="/prezentacja" size="lg" className="w-full" onClick={onClose}>
            Umów bezpłatną prezentację
          </ButtonLink>
        </div>
      </nav>
    </div>
  );
}
