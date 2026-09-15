import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-geometry.jpg";
import studioImg from "@/assets/studio-interior.jpg";
import { SacredGeometry, ConstellationLines } from "@/components/luxury/backgrounds";
import {
  GlassCard,
  GoldRule,
  LuxuryLink,
  NumberDial,
  SectionHeading,
} from "@/components/luxury/ui";
import { CountUp, Parallax, Reveal, StaggerText } from "@/components/motion/primitives";
import { NUMBER_PROFILES, profileFor } from "@/lib/numerology";
import { SERVICES, STATS, STUDIO, TESTIMONIALS, WHY_US } from "@/lib/content";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Name Science — Numerology & Namelogy Consultation Studio" },
      {
        name: "description",
        content:
          "Discover your life path, destiny number and name vibration with a premium numerology and namelogy studio. Personal consultations and handcrafted chart preparation.",
      },
      { property: "og:title", content: "The Name Science — Numerology & Namelogy Consultation Studio" },
      {
        property: "og:description",
        content:
          "Unlock the power hidden within your numbers. Life path readings, name correction, business and baby naming.",
      },
      { property: "og:url", content: `${STUDIO.url}/` },
    ],
    links: [{ rel: "canonical", href: `${STUDIO.url}/` }],
  }),
  component: Home,
});

const FEATURED_CALCULATORS = [
  "DOB Analysis",
  "Name Analysis & Correction",
  "Mobile Number Selection",
  "Vehicle Number Selection",
  "ATM PIN & Password Vibrations",
  "Bank Account Number Selection",
  "Business & Brand Naming",
  "Business Mobile Number Selection",
  "Security Passwords & Passcodes",
  "Baby Naming Consultation",
  "Lucky Number & Date Consultation",
];

function Home() {
  return (
    <>
      <Hero />
      <WhatIsNumerology />
      <FeaturedServices />
      <NumberShowcase />
      <WhyChooseUs />
      <Calculators />
      <Stories />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-32 pb-24">
      <SacredGeometry />
      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow">Namelogy · Numerology · 22+ Years</p>
          </Reveal>
          <h1 className="mt-7 font-display text-[2.6rem] leading-[1.06] text-balance-luxe sm:text-6xl lg:text-[4.2rem]">
            <StaggerText text="Unlock the Power Hidden Within Your Names" />
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              Discover your life purpose through professional namelogy and numerology consultations
              designed to guide your personal and professional journey.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <LuxuryLink to="/book">Book Consultation</LuxuryLink>
            </div>
          </Reveal>
          <Reveal delay={0.65}>
            <dl className="mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-border/60 pt-8">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl text-foreground">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Parallax speed={40}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-lg shadow-lift">
              <img
                src={heroImg}
                alt="Golden compass resting on ivory paper marked with sacred geometry"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass-panel absolute -bottom-8 -left-6 hidden rounded-lg p-6 shadow-luxe sm:block">
              <p className="eyebrow">Today's vibration</p>
              <p className="mt-2 font-display text-4xl text-gold">7</p>
              <p className="mt-1 text-xs text-muted-foreground">A day for study and stillness</p>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}

function WhatIsNumerology() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Parallax speed={26}>
            <img
              src={studioImg}
              alt="Calm minimal consultation studio with linen chairs and warm daylight"
              width={1600}
              height={1104}
              loading="lazy"
              className="rounded-lg object-cover shadow-luxe"
            />
          </Parallax>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="What is numerology"
            title="A quiet language you have been speaking your whole life"
            description="Numerology reads the pattern in dates and names — the arithmetic of a life. It does not predict the weather of your years; it describes the shape of the vessel you are sailing in, so the decisions you make can stop arguing with your own nature."
          />
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-6">
              {[
                {
                  t: "Your birth date is fixed",
                  d: "It gives the Life Path — the road, its lessons and its timing.",
                },
                {
                  t: "Your name is chosen",
                  d: "Namelogy works with what can still be refined: spelling, signature, brand.",
                },
                {
                  t: "The two are read together",
                  d: "Where they agree, life feels lighter. Where they differ, we make adjustments.",
                },
              ].map((row) => (
                <div key={row.t} className="flex gap-5">
                  <Sparkles aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <div className="min-w-0">
                    <p className="font-display text-xl">{row.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <LuxuryLink to="/about" variant="ghost" size="sm">
                Learn about the studio <ArrowRight className="h-3.5 w-3.5" />
              </LuxuryLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedServices() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Consultations"
          title="Eleven ways the studio works with you"
          description="Each consultation is prepared by hand before you arrive and documented afterwards."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <GlassCard className="flex h-full flex-col">
                <p className="font-display text-4xl text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
                <GoldRule className="mt-6" />
                <p className="mt-4 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {s.duration} · {s.mode}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12">
            <LuxuryLink to="/services" variant="outline" size="sm">
              All services
            </LuxuryLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NumberShowcase() {
  const [active, setActive] = useState(1);
  const profile = profileFor(active);
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];

  return (
    <section className="relative overflow-hidden bg-secondary/40 py-20 sm:py-28">
      <ConstellationLines className="opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="The vibrations"
          title="Nine temperaments and three master numbers"
          description="Hover or tap a number to read its character."
          align="center"
        />
        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-6 sm:gap-3 lg:grid-cols-4">
            {keys.map((n) => (
              <button
                key={n}
                onMouseEnter={() => setActive(n)}
                onFocus={() => setActive(n)}
                onClick={() => setActive(n)}
                aria-pressed={active === n}
                aria-label={`Number ${n}: ${NUMBER_PROFILES[n]?.title ?? ""}`}
                className={`group relative aspect-square rounded-full border transition-all duration-500 ${active === n
                  ? "border-gold bg-gold/15 shadow-luxe"
                  : "border-border/70 hover:border-gold/60 hover:bg-gold/8"
                  }`}
              >
                <span className="grid h-full w-full place-items-center font-display text-xl sm:text-2xl transition-transform duration-500 group-hover:scale-110">
                  {n}
                </span>
              </button>
            ))}
          </div>

          <Reveal key={active}>
            <GlassCard hover={false} className="p-5 sm:p-8 md:p-10">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8 text-center sm:text-left">
                <div className="shrink-0">
                  <NumberDial value={profile.number} label={profile.keyword} size={140} percent={72} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow">{profile.keyword}</p>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-medium">{profile.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {profile.summary}
                  </p>
                </div>
              </div>
              <GoldRule className="mt-6 sm:mt-8" />
              <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-2">
                {profile.strengths.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-gold/40 px-3 py-1 sm:px-4 sm:py-1.5 text-[0.65rem] sm:text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm italic text-emerald text-center sm:text-left">{profile.caution}</p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand-red py-28 text-white shadow-2xl">
      <ConstellationLines className="opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why the studio"
          title="Considered, private, and unhurried"
          invert={true}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="group h-full rounded-lg border border-white/20 bg-black/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/40 hover:bg-black/35 hover:shadow-2xl">
                <div className="h-[1px] w-10 bg-gradient-to-r from-gold-bright via-white/60 to-transparent transition-all duration-500 group-hover:w-20" />
                <h3 className="mt-6 text-xl text-white font-medium">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Calculators() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Numeric Analysis"
          title="Begin with a number of your own"
          description="Eleven core calculations prepared by hand during your consultation for deep life clarity."
        />
        <div className="mt-14 overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...FEATURED_CALCULATORS, ...FEATURED_CALCULATORS].map((c, i) => (
              <div
                key={`${c}-${i}`}
                className="glass-panel flex items-center gap-4 rounded-full px-8 py-5"
              >
                <span className="font-display text-2xl text-primary font-medium">
                  {String((i % 11) + 1)}
                </span>
                <span className="whitespace-nowrap text-sm tracking-wide">{c}</span>
              </div>
            ))}
          </div>
        </div>
        <Reveal>
          <div className="mt-12">
            <LuxuryLink to="/book">Book consultation</LuxuryLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="bg-secondary/40 py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client stories"
          title="Quiet changes, measurable outcomes"
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.slice(0, 2).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col">
                <div className="relative mb-7 aspect-video overflow-hidden rounded-md border border-border/60 bg-muted/60">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full border border-primary/40 text-primary">
                      ▶
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-4 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Video testimonial
                  </span>
                </div>
                <p className="font-display text-xl leading-relaxed">“{t.quote}”</p>
                <GoldRule className="mt-6" />
                <p className="mt-4 text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12 text-center">
            <LuxuryLink to="/success-stories" variant="outline" size="sm">
              Read all stories
            </LuxuryLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-brand-red py-32 text-white shadow-2xl">
      <SacredGeometry variant="soft" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-4xl leading-tight text-balance-luxe sm:text-6xl text-white">
          <StaggerText text="Your Journey Begins With One Number" />
        </h2>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-[1.02rem] leading-relaxed text-white/90">
            Bring the question you have been carrying. We will look at it together, calmly, with the
            chart in front of us.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <LuxuryLink to="/book" variant="white">
              Book Consultation
            </LuxuryLink>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-transparent px-6 py-3.5 text-[0.8rem] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/15"
            >
              Ask a question <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
