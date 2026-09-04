import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryLink, SectionHeading } from "@/components/luxury/ui";
import { CountUp, Reveal } from "@/components/motion/primitives";
import { JOURNEY, SERVICES, NUMEROLOGY_TOPICS, STATS, STUDIO } from "@/lib/content";
import { NUMBER_PROFILES } from "@/lib/numerology";
import studioImg from "@/assets/studio-interior.jpg";
import manuscriptImg from "@/assets/manuscript.jpg";
import writingImg from "@/assets/writing-name.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Studio — The Name Science" },
      {
        name: "description",
        content:
          "Twenty years of practitioner-led numerology and namelogy. Meet the studio, its scientific method, core numerology readings and namelogy guidance.",
      },
      { property: "og:title", content: "About the Studio — The Name Science" },
      {
        property: "og:description",
        content:
          "A practitioner-led numerology and namelogy studio in Chennai, serving clients globally.",
      },
      { property: "og:url", content: `${STUDIO.url}/about` },
    ],
    links: [{ rel: "canonical", href: `${STUDIO.url}/about` }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="The studio"
        title="A calm room, a prepared chart, and your question"
        description="The Name Science is a practitioner-led studio. Every reading is prepared by hand, held without hurry, and documented so you can return to it long after the session ends."
      >
        <LuxuryLink to="/book">Book a consultation</LuxuryLink>
      </PageHero>

      {/* Studio Overview */}
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

      {/* Numerology Core Concepts */}
      <Section muted>
        <SectionHeading
          eyebrow="Numerology Foundations"
          title="Every chart is built from eight core readings"
          description="Together they describe temperament, motivation, talent and timing. Here is what each one measures."
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {NUMEROLOGY_TOPICS.map((topic, i) => (
            <Reveal key={topic.key} delay={i * 0.04}>
              <GlassCard className="h-full">
                <p className="eyebrow">{topic.formula}</p>
                <h3 className="mt-4 text-xl">{topic.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{topic.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
                  <li key={n} className="flex items-baseline gap-6 py-3.5">
                    <span className="font-display text-3xl text-gold">{n}</span>
                    <div className="min-w-0">
                      <p className="text-base">
                        {p.title} — <span className="text-muted-foreground">{p.keyword}</span>
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
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

      {/* Namelogy Science */}
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
            eyebrow="Namelogy & Name Correction"
            title="Two letters can change a total"
            description="We calculate your name in both the Pythagorean and Chaldean systems, test every reasonable variant spelling, and recommend the version that sits most comfortably with your birth chart. In almost every case the change is subtle enough that your name still sounds like your name."
          />
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Our 11 Consultations"
            title="Eleven core numerology & namelogy services"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <GlassCard className="h-full flex flex-col">
                  <p className="font-display text-2xl text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-medium">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.detail}
                  </p>
                  <GoldRule className="mt-5" />
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {s.duration} · {s.mode}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Journey & Studio Details */}
      <Section brand>
        <SectionHeading
          eyebrow="How a consultation runs"
          title="Five steps, from intake to follow-through"
          align="center"
          invert={true}
        />
        <ol className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {JOURNEY.map((j, i) => (
            <Reveal key={j.step} delay={i * 0.06}>
              <li className="h-full rounded-lg border border-white/20 bg-black/25 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/40 hover:bg-black/35 hover:shadow-2xl">
                <p className="font-display text-3xl text-gold-bright font-medium">0{i + 1}</p>
                <h3 className="mt-5 text-lg text-white font-medium">{j.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{j.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              t: "Confidentiality",
              d: "Birth details, business plans and notes never leave the studio. Case studies are published only with written consent.",
            },
            { t: "Where to find us", d: `${STUDIO.address} · ${STUDIO.hours}` },
          ].map((c) => (
            <Reveal key={c.t}>
              <GlassCard className="h-full">
                <h3 className="text-xl font-medium">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section brand className="py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            Ready to discover your chart's unique vibrations?
          </h2>
          <p className="mt-4 text-sm text-white/85 leading-relaxed">
            Every reading is handcrafted with precision, confidentiality, and over 20 years of research.
          </p>
          <div className="mt-8 flex justify-center">
            <LuxuryLink to="/book" variant="white">
              Book Your Consultation
            </LuxuryLink>
          </div>
        </div>
      </Section>
    </>
  );
}
