import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "xl" | "lg" | "md" | "sm";
  className?: string;
  align?: "left" | "center";
}

const sizes: Record<NonNullable<HeadingProps["size"]>, string> = {
  xl: "text-4xl md:text-6xl leading-[1.05]",
  lg: "text-3xl md:text-5xl leading-[1.08]",
  md: "text-2xl md:text-3xl leading-tight",
  sm: "text-xl md:text-2xl leading-snug",
};

export function Heading({
  children,
  as = "h2",
  size = "md",
  className,
  align = "left",
}: HeadingProps) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={cn(
        "font-semibold text-neutral-900 text-balance",
        sizes[size],
        align === "center" && "text-center",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-wide text-brand-700 mb-3",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-lg text-muted leading-relaxed text-balance", className)}>
      {children}
    </p>
  );
}
