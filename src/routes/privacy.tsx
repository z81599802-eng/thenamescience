import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-shell";
import { STUDIO } from "@/lib/content";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Name Science" },
      {
        name: "description",
        content:
          "How the studio handles birth details, consultation notes, cookies and your right to deletion.",
      },
      { property: "og:title", content: "Privacy Policy — The Name Science" },
      { property: "og:description", content: "What we store, why, and for how long." },
      { property: "og:url", content: `${STUDIO.url}/privacy` },
    ],
    links: [{ rel: "canonical", href: `${STUDIO.url}/privacy` }],
  }),
  component: Privacy,
});

const SECTIONS = [
  {
    h: "What we collect",
    p: "Only what a consultation requires: your name, contact details, date, time and place of birth, and the notes you choose to share.",
  },
  {
    h: "How it is used",
    p: "To prepare your chart, hold your consultation, produce your written report and follow up afterwards. We never sell, rent or share client data with third parties.",
  },
  {
    h: "Cookies",
    p: "We store two small preferences locally — your chosen language and light or dark theme — plus your cookie choice. No advertising or cross-site tracking cookies are used.",
  },
  {
    h: "Retention and deletion",
    p: "Consultation records are kept for five years so returning clients do not have to repeat their details, then deleted. You may request earlier deletion at any time.",
  },
  {
    h: "Case studies",
    p: "Client stories are published only with written consent, and names are shortened or changed at the client's request.",
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Your details stay inside the studio"
        description="Last updated 1 July 2026."
      />
      <Section>
        <div className="mx-auto max-w-2xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="text-2xl">{s.h}</h2>
              <p className="mt-3 text-[1rem] leading-[1.85] text-muted-foreground">{s.p}</p>
            </div>
          ))}
          <p className="text-sm text-muted-foreground">
            Questions about this policy: <a className="text-emerald" href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
          </p>
        </div>
      </Section>
    </>
  );
}
