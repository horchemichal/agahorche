"use client";

import { usePathname } from "next/navigation";
import { PhoneIcon } from "@/components/marketing/icons";
import { track } from "@/lib/analytics/track";
import { SITE } from "@/lib/utils";

/**
 * Small client boundary just for the click_phone event handler — Hero
 * itself stays an async Server Component (it awaits the offers repository),
 * and Server Components can't pass onClick handlers to plain DOM elements.
 */
export function TrackedPhoneLink({ placement, className, label }: { placement: string; className?: string; label: string }) {
  const pathname = usePathname();
  return (
    <a
      href={SITE.phoneHref}
      className={className}
      onClick={() => track("click_phone", { path: pathname, placement })}
    >
      <PhoneIcon width={17} height={17} />
      {label}
    </a>
  );
}
