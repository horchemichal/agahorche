import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-neutral-0 hover:bg-brand-700 shadow-[var(--shadow-cta)]",
  secondary: "bg-neutral-900 text-neutral-0 hover:bg-neutral-800",
  outline:
    "border border-neutral-300 text-neutral-900 hover:border-brand-500 hover:text-brand-700 bg-transparent",
  ghost: "text-neutral-700 hover:bg-neutral-100",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  external?: boolean;
  /**
   * Renders a plain `<a download>` instead of a `next/link`. Dla plików
   * generowanych przez API (np. /api/diety/jadlospis-pdf) — router Next.js
   * nie ma czego „nawigować”, a prefetch takiego adresu tylko generowałby
   * PDF-a po nic.
   */
  download?: boolean;
  onClick?: () => void;
}

interface NativeButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

/** Button-as-link variant. Use when the CTA navigates. */
export function ButtonLink({
  href,
  external,
  download,
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (download) {
    return (
      <a href={href} className={classes} download onClick={onClick}>
        {children}
      </a>
    );
  }
  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

/**
 * Button primitive for in-page actions (forms, toggles). For navigation
 * CTAs use `ButtonLink` so the semantics stay correct for SEO/a11y.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  ...rest
}: NativeButtonProps) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...rest} />;
}
