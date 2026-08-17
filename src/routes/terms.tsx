import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — The Name Science" },
      {
        name: "description",
        content:
          "Terms covering consultations, payments, rescheduling, the nature of guidance offered and intellectual property.",
      },
      { property: "og:title", content: "Terms of Service — The Name Science" },
      { property: "og:description", content: "The terms under which the studio works with clients." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const SECTIONS = [
  {
    h: "Nature of guidance",
    p: "Consultations are offered for reflection and decision support. They are not medical, psychological, legal or financial advice, and no specific outcome is guaranteed.",
  },
  {
    h: "Bookings and payment",
    p: "An appointment is confirmed once the studio replies and payment is received. Fees are quoted per consultation or package and include the written report.",
  },
  {
    h: "Rescheduling and cancellation",
    p: "Reschedule freely up to 24 hours before your appointment. Within 24 hours, one complimentary reschedule is offered. Missed appointments without notice are treated as completed.",
  },
  {
    h: "Your responsibilities",
    p: "Please provide accurate birth details. Readings prepared from incorrect information cannot be reissued free of charge.",
  },
  {
    h: "Intellectual property",
    p: "Charts, reports and written material remain the intellectual property of the studio and are licensed to you for personal use. Commercial redistribution requires written permission.",
  },
  {
    h: "Website calculators",
    p: "Calculators on this website are provided for interest and are not a substitute for a prepared consultation.",
  },
];

function Terms() {
  return (
    <>
      <PageHero eyebrow="Terms" title="How the studio works with you" description="Last updated 1 July 2026." />
      <Section>
        <div className="mx-auto max-w-2xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="text-2xl">{s.h}</h2>
              <p className="mt-3 text-[1rem] leading-[1.85] text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
