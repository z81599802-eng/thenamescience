import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryLink, SectionHeading } from "@/components/luxury/ui";
import { Reveal } from "@/components/motion/primitives";
import { NUMEROLOGY_TOPICS } from "@/lib/content";
import { NUMBER_PROFILES } from "@/lib/numerology";
import manuscriptImg from "@/assets/manuscript.jpg";

export const Route = createFileRoute("/numerology")({
  head: () => ({
    meta: [
      { title: "Numerology Explained — Life Path, Destiny & Master Numbers" },
      {
        name: "description",
        content:
          "Life Path, Destiny, Soul, Personality, Expression and Birthday numbers explained, along with master numbers 11, 22, 33 and karmic numbers.",
      },
      { property: "og:title", content: "Numerology Explained — Aureum Studio" },
      {
        property: "og:description",
        content: "The eight core readings in a numerology chart, with the arithmetic shown.",
      },
      { property: "og:url", content: "/numerology" },
    ],
    links: [{ rel: "canonical", href: "/numerology" }],
  }),
  component: Numerology,
});

function Numerology() {
  return (
    <>
      <PageHero
        eyebrow="Numerology"
        title="Every chart is built from eight readings"
        description="Together they describe temperament, motivation, talent and timing. Here is what each one measures and how it is calculated."
      >
        <LuxuryLink to="/calculators" variant="outline">
          Calculate yours
        </LuxuryLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {NUMEROLOGY_TOPICS.map((topic, i) => (
            <Reveal key={topic.key} delay={i * 0.04}>
              <GlassCard className="h-full">
                <p className="eyebrow">{topic.formula}</p>
                <h2 className="mt-4 text-2xl">{topic.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{topic.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src={manuscriptImg}
              alt="Historic manuscript page with numerals and geometric diagrams in gold leaf"
              width={1408}
              height={1008}
              loading="lazy"
              className="rounded-lg shadow-luxe"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The nine vibrations"
              title="Character before calculation"
              description="Learn the temperaments and a chart stops being arithmetic."
            />
            <GoldRule className="mt-10" />
            <ul className="mt-8 divide-y divide-border/60">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
                const p = NUMBER_PROFILES[n]!;
                return (
                  <li key={n} className="flex items-baseline gap-6 py-4">
                    <span className="font-display text-3xl text-gold">{n}</span>
                    <div className="min-w-0">
                      <p className="text-base">
                        {p.title} — <span className="text-muted-foreground">{p.keyword}</span>
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {p.strengths.join(" · ")}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
