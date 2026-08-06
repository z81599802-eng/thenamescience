import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryButton, NumberDial } from "@/components/luxury/ui";
import { Reveal } from "@/components/motion/primitives";
import {
  compatibility,
  destinyNumber,
  digitsNumber,
  lifePath,
  luckySetFor,
  nameNumber,
  personalYear,
  profileFor,
  karmicNote,
} from "@/lib/numerology";

export const Route = createFileRoute("/calculators")({
  head: () => ({
    meta: [
      { title: "Free Numerology Calculators — Life Path, Name & Lucky Numbers" },
      {
        name: "description",
        content:
          "Twelve free numerology calculators: life path, destiny, name, business name, lucky number, colour and day, compatibility, personal year, house, vehicle and mobile numbers.",
      },
      { property: "og:title", content: "Free Numerology Calculators — Aureum Studio" },
      {
        property: "og:description",
        content: "Instant, private numerology calculators — nothing leaves your browser.",
      },
      { property: "og:url", content: "/calculators" },
    ],
    links: [{ rel: "canonical", href: "/calculators" }],
  }),
  component: Calculators,
});

type Result = { value: number | string; label: string; lines: string[] } | null;

type Calc = {
  id: string;
  title: string;
  blurb: string;
  fields: { name: string; label: string; type: "text" | "date"; placeholder?: string }[];
  run: (v: Record<string, string>) => Result;
};

const lucky = (n: number) => {
  const l = luckySetFor(n);
  return [
    `Lucky numbers: ${l.numbers.join(", ")}`,
    `Lucky colours: ${l.colors.join(", ")}`,
    `Lucky days: ${l.days.join(", ")}`,
  ];
};

const CALCS: Calc[] = [
  {
    id: "life-path",
    title: "Life Path Calculator",
    blurb: "The spine of your chart, from your date of birth.",
    fields: [{ name: "dob", label: "Date of birth", type: "date" }],
    run: (v) => {
      const r = lifePath(v['dob'] ?? "");
      if (!r) return null;
      const p = profileFor(r.number);
      return {
        value: r.number,
        label: p.keyword,
        lines: [`${p.title} — ${p.summary}`, `Working total: ${r.parts.join(" + ")} = ${r.total}`],
      };
    },
  },
  {
    id: "destiny",
    title: "Destiny Number",
    blurb: "The sum of every digit in your birth date.",
    fields: [{ name: "dob", label: "Date of birth", type: "date" }],
    run: (v) => {
      const r = destinyNumber(v['dob'] ?? "");
      if (!r) return null;
      const p = profileFor(r.number);
      const karmic = karmicNote(r.total);
      return {
        value: r.number,
        label: p.keyword,
        lines: [p.summary, `Digit total: ${r.total}`, ...(karmic ? [karmic] : [])],
      };
    },
  },
  {
    id: "name",
    title: "Name Number",
    blurb: "Your name as written today, in both systems.",
    fields: [{ name: "name", label: "Full name", type: "text", placeholder: "Ananya Raghavan" }],
    run: (v) => {
      if (!v['name']?.trim()) return null;
      const py = nameNumber(v['name'], "pythagorean");
      const ch = nameNumber(v['name'], "chaldean");
      const p = profileFor(py.number);
      return {
        value: py.number,
        label: p.keyword,
        lines: [
          p.summary,
          `Pythagorean total ${py.total} → ${py.number}`,
          `Chaldean total ${ch.total} → ${ch.number}`,
        ],
      };
    },
  },
  {
    id: "business",
    title: "Business Name Calculator",
    blurb: "Test an entity, trading or brand name.",
    fields: [{ name: "name", label: "Business name", type: "text", placeholder: "Aureum Studio" }],
    run: (v) => {
      if (!v['name']?.trim()) return null;
      const r = nameNumber(v['name'], "chaldean");
      const p = profileFor(r.number);
      return {
        value: r.number,
        label: p.keyword,
        lines: [
          `${p.title} vibration — ${p.summary}`,
          `Chaldean total: ${r.total}`,
          ...(karmicNote(r.total) ? [karmicNote(r.total)!] : []),
        ],
      };
    },
  },
  {
    id: "lucky-number",
    title: "Lucky Number",
    blurb: "The digits that agree with your chart.",
    fields: [{ name: "dob", label: "Date of birth", type: "date" }],
    run: (v) => {
      const r = lifePath(v['dob'] ?? "");
      if (!r) return null;
      return { value: r.number, label: "Life path", lines: lucky(r.number) };
    },
  },
  {
    id: "lucky-colour",
    title: "Lucky Colour",
    blurb: "A palette drawn from your birth vibration.",
    fields: [{ name: "dob", label: "Date of birth", type: "date" }],
    run: (v) => {
      const r = lifePath(v['dob'] ?? "");
      if (!r) return null;
      return {
        value: r.number,
        label: "Palette",
        lines: [`Lucky colours: ${luckySetFor(r.number).colors.join(", ")}`],
      };
    },
  },
  {
    id: "lucky-day",
    title: "Lucky Day",
    blurb: "The best days to sign, launch and begin.",
    fields: [{ name: "dob", label: "Date of birth", type: "date" }],
    run: (v) => {
      const r = lifePath(v['dob'] ?? "");
      if (!r) return null;
      return {
        value: r.number,
        label: "Timing",
        lines: [`Lucky days: ${luckySetFor(r.number).days.join(", ")}`],
      };
    },
  },
  {
    id: "compatibility",
    title: "Marriage Compatibility",
    blurb: "Two charts, read side by side.",
    fields: [
      { name: "a", label: "Your date of birth", type: "date" },
      { name: "b", label: "Partner's date of birth", type: "date" },
    ],
    run: (v) => {
      const r = compatibility(v['a'] ?? "", v['b'] ?? "");
      if (!r) return null;
      return {
        value: `${r.score}%`,
        label: "Harmony",
        lines: [
          `Life paths ${r.a} and ${r.b} blend into a ${r.blend} vibration.`,
          profileFor(r.blend).summary,
        ],
      };
    },
  },
  {
    id: "personal-year",
    title: "Personal Year Number",
    blurb: "The season you are currently in.",
    fields: [{ name: "dob", label: "Date of birth", type: "date" }],
    run: (v) => {
      const r = personalYear(v['dob'] ?? "");
      if (!r) return null;
      const p = profileFor(r.number);
      return {
        value: r.number,
        label: `${r.year}`,
        lines: [`A ${p.keyword.toLowerCase()} year. ${p.summary}`],
      };
    },
  },
  {
    id: "house",
    title: "House Number",
    blurb: "The vibration of the home you live in.",
    fields: [{ name: "num", label: "House or flat number", type: "text", placeholder: "12B" }],
    run: (v) => {
      const r = digitsNumber(v['num'] ?? "");
      if (!r) return null;
      const p = profileFor(r.number);
      return { value: r.number, label: p.keyword, lines: [p.summary, `Digit total: ${r.total}`] };
    },
  },
  {
    id: "vehicle",
    title: "Vehicle Number",
    blurb: "Registration plates, read numerically.",
    fields: [{ name: "num", label: "Registration number", type: "text", placeholder: "TN 09 AB 1234" }],
    run: (v) => {
      const r = digitsNumber(v['num'] ?? "");
      if (!r) return null;
      const p = profileFor(r.number);
      return { value: r.number, label: p.keyword, lines: [p.summary, `Digit total: ${r.total}`] };
    },
  },
  {
    id: "mobile",
    title: "Mobile Number",
    blurb: "The number you give away most often.",
    fields: [{ name: "num", label: "Mobile number", type: "text", placeholder: "98400 12345" }],
    run: (v) => {
      const r = digitsNumber(v['num'] ?? "");
      if (!r) return null;
      const p = profileFor(r.number);
      return {
        value: r.number,
        label: p.keyword,
        lines: [p.summary, `Digit total: ${r.total}`, ...(karmicNote(r.total) ? [karmicNote(r.total)!] : [])],
      };
    },
  },
];

function Calculators() {
  return (
    <>
      <PageHero
        eyebrow="Calculators"
        title="Twelve calculators, all instant and private"
        description="Everything is computed in your browser — no birth details are ever sent anywhere."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {CALCS.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.03}>
              <CalculatorCard calc={c} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

function CalculatorCard({ calc }: { calc: Calc }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Result>(null);
  const [error, setError] = useState("");

  return (
    <GlassCard hover={false} className="h-full">
      <h2 className="text-2xl">{calc.title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{calc.blurb}</p>

      <form
        className="mt-7 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const r = calc.run(values);
          if (!r) {
            setError("Please complete the field above with a valid value.");
            setResult(null);
            return;
          }
          setError("");
          setResult(r);
        }}
      >
        {calc.fields.map((f) => (
          <div key={f.name}>
            <label
              htmlFor={`${calc.id}-${f.name}`}
              className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground"
            >
              {f.label}
            </label>
            <input
              id={`${calc.id}-${f.name}`}
              type={f.type}
              {...(f.placeholder ? { placeholder: f.placeholder } : {})}
              value={values[f.name] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
              className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-shadow duration-500 placeholder:text-muted-foreground focus:border-gold/70 focus:shadow-luxe"
            />
          </div>
        ))}
        <LuxuryButton type="submit" size="sm">
          Calculate
        </LuxuryButton>
      </form>

      <p aria-live="polite" className="mt-3 min-h-5 text-xs text-destructive">
        {error}
      </p>

      {result && (
        <div className="animate-fade-in">
          <GoldRule className="mt-4" />
          <div className="mt-7 flex flex-wrap items-center gap-8">
            <NumberDial value={result.value} label={result.label} size={150} percent={82} />
            <ul className="min-w-0 flex-1 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {result.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </GlassCard>
  );
}
