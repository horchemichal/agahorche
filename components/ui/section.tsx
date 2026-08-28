import { cn } from "@/lib/utils";
import { Container } from "./container";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Alternate background tone to break up long pages without heavy dividers. */
  tone?: "default" | "surface";
  id?: string;
  as?: "section" | "div";
}

/** Consistent vertical rhythm wrapper used for every page section. */
export function Section({
  children,
  className,
  containerClassName,
  tone = "default",
  id,
  as: As = "section",
}: SectionProps) {
  return (
    <As
      id={id}
      className={cn(
        "py-14 md:py-20",
        tone === "surface" && "bg-surface",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </As>
  );
}
