import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryLink, SectionHeading } from "@/components/luxury/ui";
import { CountUp, Reveal } from "@/components/motion/primitives";
import { JOURNEY, STATS, STUDIO } from "@/lib/content";
import studioImg from "@/assets/studio-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Studio — Aureum Numerology" },
      {
        name: "description",
        content:
          "Eighteen years of practitioner-led numerology and namelogy. Meet the studio, its method and its promise of confidentiality.",
      },
      { property: "og:title", content: "About the Studio — Aureum Numerology" },
      {
        property: "og:description",
        content: "A practitioner-led numerology studio in Chennai, serving clients in 41 countries.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="The studio"
        title="A calm room, a prepared chart, and your question"
        description="Aureum is a single-practitioner studio. Every reading is prepared by hand, held without hurry, and documented so you can return to it long after the session ends."
      >
        <LuxuryLink to="/book">Book a consultation</LuxuryLink>
      </PageHero>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={studioImg}
              alt="The consultation studio: linen chairs, travertine table and soft daylight"
              width={1600}
              height={1104}
              loading="lazy"
              className="rounded-lg shadow-luxe"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our method"
              title="Structure first, interpretation second"
              description="We calculate in both the Pythagorean and Chaldean systems, show you the arithmetic, and only then interpret. Nothing is hidden behind mystique — if you want to check the working, you can."
            />
            <GoldRule className="mt-10" />
            <dl className="mt-10 grid grid-cols-2 gap-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="How a consultation runs"
          title="Five steps, from intake to follow-through"
          align="center"
        />
        <ol className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {JOURNEY.map((j, i) => (
            <Reveal key={j.step} delay={i * 0.06}>
              <li className="h-full rounded-lg border border-border/70 bg-card/60 p-7">
                <p className="font-display text-3xl text-gold/70">0{i + 1}</p>
                <h2 className="mt-5 text-lg">{j.step}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Confidentiality",
              d: "Birth details, business plans and notes never leave the studio. Case studies are published only with written consent.",
            },
            {
              t: "Languages",
              d: "Sessions are held in English, Tamil, Hindi, Telugu, Malayalam or Kannada.",
            },
            { t: "Where to find us", d: `${STUDIO.address} · ${STUDIO.hours}` },
          ].map((c) => (
            <Reveal key={c.t}>
              <GlassCard className="h-full">
                <h2 className="text-xl">{c.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
