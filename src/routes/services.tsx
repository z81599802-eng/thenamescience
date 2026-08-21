import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryLink } from "@/components/luxury/ui";
import { Reveal } from "@/components/motion/primitives";
import { SERVICES, STUDIO } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Consultations — The Name Science" },
      {
        name: "description",
        content:
          "Personal and business numerology consultations, baby naming, name correction, lucky dates, compatibility and career guidance, online or in studio.",
      },
      { property: "og:title", content: "Consultations — The Name Science" },
      {
        property: "og:description",
        content: "Eleven consultation formats, online or in studio.",
      },
      { property: "og:url", content: `${STUDIO.url}/services` },
    ],
    links: [{ rel: "canonical", href: `${STUDIO.url}/services` }],
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
    </>
  );
}
