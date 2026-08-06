import { cn } from "@/lib/utils";

/** Layered sacred-geometry / golden-ratio background. Decorative only. */
export function SacredGeometry({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "soft";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 aurora-bg animate-breathe" />

      <svg
        className="absolute left-1/2 top-1/2 h-[130vmin] w-[130vmin] -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-[0.5]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <g stroke="var(--gold)" strokeWidth="0.4" opacity="0.55">
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="112" />
          <circle cx="200" cy="200" r="74" />
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (Math.PI / 3) * i;
            return (
              <circle
                key={i}
                cx={200 + Math.cos(a) * 74}
                cy={200 + Math.sin(a) * 74}
                r="74"
              />
            );
          })}
        </g>
        <g stroke="var(--emerald)" strokeWidth="0.35" opacity="0.32">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (Math.PI / 6) * i;
            return (
              <line
                key={i}
                x1={200 + Math.cos(a) * 40}
                y1={200 + Math.sin(a) * 40}
                x2={200 + Math.cos(a) * 150}
                y2={200 + Math.sin(a) * 150}
              />
            );
          })}
        </g>
      </svg>

      {variant === "full" && (
        <svg
          className="absolute left-1/2 top-1/2 h-[92vmin] w-[92vmin] -translate-x-1/2 -translate-y-1/2 animate-spin-slower opacity-40"
          viewBox="0 0 400 400"
          fill="none"
        >
          <polygon
            points="200,60 340,300 60,300"
            stroke="var(--bronze)"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <polygon
            points="200,340 60,100 340,100"
            stroke="var(--bronze)"
            strokeWidth="0.5"
            opacity="0.35"
          />
          <rect x="90" y="90" width="220" height="220" stroke="var(--gold)" strokeWidth="0.4" opacity="0.4" />
        </svg>
      )}

      <FloatingParticles />
      <div className="absolute inset-0 paper-grain" />
    </div>
  );
}

export function FloatingParticles({ count = 16 }: { count?: number }) {
  const seeds = Array.from({ length: count }, (_, i) => {
    const golden = 0.6180339887;
    const x = ((i * golden * 100) % 100).toFixed(2);
    const y = ((i * 37 * golden) % 100).toFixed(2);
    const size = 2 + ((i * 7) % 5);
    const delay = ((i * 1.37) % 8).toFixed(2);
    const dur = 9 + ((i * 3) % 8);
    return { x, y, size, delay, dur, i };
  });

  return (
    <div aria-hidden="true" className="absolute inset-0">
      {seeds.map(({ x, y, size, delay, dur, i }) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold/50"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            animation: `float-soft ${dur}s ease-in-out ${delay}s infinite, breathe ${dur + 4}s ease-in-out infinite`,
            filter: "blur(0.3px)",
          }}
        />
      ))}
    </div>
  );
}

/** Thin animated constellation lines — used in dark, quiet sections. */
export function ConstellationLines({ className }: { className?: string }) {
  const pts = [
    [8, 22],
    [24, 12],
    [38, 34],
    [55, 18],
    [70, 40],
    [86, 24],
    [94, 52],
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 60"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-50", className)}
    >
      <polyline
        points={pts.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke="var(--gold)"
        strokeWidth="0.15"
        className="animate-draw"
      />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.5" fill="var(--gold)" className="animate-breathe" />
      ))}
    </svg>
  );
}
