import type { ReactNode } from "react";
import { SacredGeometry } from "@/components/luxury/backgrounds";
import { Reveal, StaggerText } from "@/components/motion/primitives";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <SacredGeometry variant="soft" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <h1 className="mt-6 font-display text-[2.4rem] leading-[1.08] text-balance-luxe sm:text-5xl lg:text-6xl">
          <StaggerText text={title} />
        </h1>
        {description && (
          <Reveal delay={0.3}>
            <p className="mx-auto mt-7 max-w-2xl text-[1rem] leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.42}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className,
  muted = false,
  brand = false,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  brand?: boolean;
}) {
  return (
    <section
      className={cn(
        "py-24 transition-colors",
        muted && "bg-secondary/40",
        brand && "bg-brand-red text-white relative overflow-hidden shadow-2xl",
        className,
      )}
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
