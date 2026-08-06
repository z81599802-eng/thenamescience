import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, LuxuryLink, SectionHeading } from "@/components/luxury/ui";
import { Reveal } from "@/components/motion/primitives";
import { NAMELOGY_SERVICES } from "@/lib/content";
import writingImg from "@/assets/writing-name.jpg";

export const Route = createFileRoute("/namelogy")({
  head: () => ({
    meta: [
      { title: "Namelogy — Name, Business & Baby Name Analysis" },
      {
        name: "description",
        content:
          "Name analysis and correction, business and brand naming, baby names, marriage name guidance, signature analysis and lucky spelling.",
      },
      { property: "og:title", content: "Namelogy — Aureum Studio" },
      {
        property: "og:description",
        content: "Eight namelogy services for people, families and brands.",
      },
      { property: "og:url", content: "/namelogy" },
    ],
    links: [{ rel: "canonical", href: "/namelogy" }],
  }),
  component: Namelogy,
});

function Namelogy() {
  return (
    <>
      <PageHero
        eyebrow="Namelogy"
        title="The name you answer to is a repeated vibration"
        description="Namelogy works with what can still be chosen — spelling, signature, brand and the names we give our children."
      >
        <LuxuryLink to="/book">Discuss your name</LuxuryLink>
      </PageHero>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={writingImg}
              alt="A name being written in gold ink on cream stationery"
              width={1408}
              height={1008}
              loading="lazy"
              className="rounded-lg shadow-luxe"
            />
          </Reveal>
          <SectionHeading
            eyebrow="How correction works"
            title="Two letters can change a total"
            description="We calculate your name in both the Pythagorean and Chaldean systems, test every reasonable variant spelling, and recommend the version that sits most comfortably with your birth chart. In almost every case the change is small enough that your name still sounds like your name."
          />
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Services" title="Eight namelogy consultations" align="center" />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {NAMELOGY_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <GlassCard className="h-full">
                <h2 className="text-xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
