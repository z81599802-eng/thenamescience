import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryLink, SectionHeading } from "@/components/luxury/ui";
import { Reveal } from "@/components/motion/primitives";
import { PACKAGES, SERVICES } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Consultations & Packages — Aureum Numerology" },
      {
        name: "description",
        content:
          "Personal and business numerology consultations, baby naming, name correction, lucky dates, compatibility and career guidance, online or in studio.",
      },
      { property: "og:title", content: "Consultations & Packages — Aureum Numerology" },
      {
        property: "og:description",
        content: "Eight consultation formats and three packages, online or in studio.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Consultations for people, families and brands"
        description="Choose the format that fits your question. Every consultation includes a prepared chart, a written report and follow-up support."
      >
        <LuxuryLink to="/book">Book Consultation</LuxuryLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <GlassCard className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl">{s.title}</h2>
                  <span className="shrink-0 rounded-full border border-gold/40 px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {s.duration}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                <GoldRule className="mt-6" />
                <p className="mt-4 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {s.mode}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Packages"
          title="Three ways to work with the studio"
          align="center"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <Reveal key={p.name}>
              <div
                className={`h-full rounded-lg border p-9 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${
                  p.featured ? "border-gold bg-card shadow-luxe" : "border-border/70 bg-card/50"
                }`}
              >
                {p.featured && <p className="eyebrow">Most chosen</p>}
                <h2 className="mt-3 text-2xl">{p.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {p.for}
                </p>
                <p className="mt-6 font-display text-4xl">{p.price}</p>
                <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
                  {p.includes.map((line) => (
                    <li key={line} className="flex gap-3">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <LuxuryLink to="/book" size="sm" variant={p.featured ? "gold" : "outline"}>
                    Choose {p.name}
                  </LuxuryLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
