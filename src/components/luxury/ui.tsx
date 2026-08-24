import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/motion/primitives";

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-panel relative rounded-lg p-8 shadow-luxe transition-all duration-500",
        hover && "hover:-translate-y-1.5 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

const sizes = {
  md: "px-7 py-3.5",
  sm: "px-5 py-2.5 text-[0.7rem]",
  lg: "px-9 py-4",
};

const variants = {
  gold: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-luxe",
  emerald: "bg-primary text-primary-foreground hover:brightness-110 shadow-luxe",
  outline: "border border-primary/40 text-foreground hover:bg-primary/10",
  ghost: "text-foreground/80 hover:text-foreground",
};

type LuxuryButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

export function LuxuryButton({
  variant = "gold",
  size = "md",
  className,
  children,
  ...rest
}: LuxuryButtonProps & ComponentProps<"button">) {
  return (
    <Magnetic strength={6}>
      <button className={cn(base, sizes[size], variants[variant], className)} {...rest}>
        <Sheen />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    </Magnetic>
  );
}

export function LuxuryLink({
  to,
  variant = "gold",
  size = "md",
  className,
  children,
}: LuxuryButtonProps & { to: string }) {
  return (
    <Magnetic strength={6}>
      <Link to={to} className={cn(base, sizes[size], variants[variant], className)}>
        <Sheen />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Link>
    </Magnetic>
  );
}

function Sheen() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/45 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full"
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-3xl leading-[1.12] text-balance-luxe sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("hairline w-full", className)} />;
}

/** Circular golden gauge used across calculator results. */
export function NumberDial({
  value,
  label,
  percent,
  size = 200,
}: {
  value: number | string;
  label?: string;
  percent?: number;
  size?: number;
}) {
  const r = 46;
  const circ = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, percent ?? 78));
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--border)" strokeWidth="1.5" />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ - (circ * pct) / 100}
          style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)" }}
        />
        <circle
          cx="60"
          cy="60"
          r={r - 10}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.8"
          opacity="0.6"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="font-display text-5xl leading-none text-foreground">{value}</div>
          {label && <div className="eyebrow mt-2">{label}</div>}
        </div>
      </div>
    </div>
  );
}
