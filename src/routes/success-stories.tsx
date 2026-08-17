import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryLink, SectionHeading } from "@/components/luxury/ui";
import { Reveal } from "@/components/motion/primitives";
import { JOURNEY, TESTIMONIALS } from "@/lib/content";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Client Success Stories — The Name Science" },
      {
        name: "description",
        content:
          "Before and after journeys from clients of the studio: brand renaming, career changes, relationship clarity and baby naming.",
      },
      { property: "og:title", content: "Client Success Stories — The Name Science" },
      {
        property: "og:description",
        content: "Quiet changes with measurable outcomes, told by the clients themselves.",
      },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: Stories,
});

function Stories() {
  return (
    <>
      <PageHero
        eyebrow="Success stories"
        title="What changed, and how long it took"
        description="Published with written consent. Names shortened at each client's request."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <GlassCard className="flex h-full flex-col">
                <div className="relative mb-7 aspect-video overflow-hidden rounded-md border border-border/60 bg-muted/60">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/60 text-gold">
                      ▶
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-4 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Video testimonial
                  </span>
                </div>
                <p className="font-display text-xl leading-relaxed">“{t.quote}”</p>
                <GoldRule className="mt-6" />
                <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="eyebrow">Before</dt>
                    <dd className="mt-2 text-muted-foreground">{t.before}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">After</dt>
                    <dd className="mt-2 text-emerald">{t.after}</dd>
                  </div>
                </dl>
                <p className="mt-6 text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="The client journey" title="Five steps, every time" align="center" />
        <ol className="relative mt-16 space-y-10 border-l border-border/70 pl-8">
          {JOURNEY.map((j, i) => (
            <Reveal key={j.step} delay={i * 0.06}>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.35rem] top-1.5 grid h-5 w-5 place-items-center rounded-full border border-gold/70 bg-background text-[0.6rem] text-gold"
                >
                  {i + 1}
                </span>
                <h2 className="text-xl">{j.step}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-14 text-center">
          <LuxuryLink to="/book">Begin your own</LuxuryLink>
        </div>
      </Section>
    </>
  );
}
