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
                  <h2 className="text-2xl font-medium">{s.title}</h2>
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

      {/* Dedicated Brand Red Section */}
      <Section brand>
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow text-gold-bright font-semibold tracking-[0.24em]">The Studio Standard</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-white">
            What is Included with Every Single Consultation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            We prepare your chart by hand before you arrive so the consultation is focused entirely on insight and actionable direction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Handcrafted Chart",
              desc: "Complete Pythagorean & Chaldean calculations prepared with scientific precision.",
            },
            {
              title: "1-on-1 Consultation",
              desc: "Deep, confidential reading held online or in our Chennai studio without hurry.",
            },
            {
              title: "Written Report",
              desc: "Comprehensive takeaway documentation with all numbers, analysis, and recommendations.",
            },
            {
              title: "Follow-Up Support",
              desc: "Post-consultation clarity and direct communication for subsequent questions.",
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.06}>
              <div className="rounded-lg border border-white/20 bg-black/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/40 hover:bg-black/35 hover:shadow-2xl">
                <span className="font-display text-2xl text-gold-bright font-medium">0{idx + 1}</span>
                <h3 className="mt-3 text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <LuxuryLink to="/book" variant="white">
            Book Consultation
          </LuxuryLink>
        </div>
      </Section>
    </>
  );
}
