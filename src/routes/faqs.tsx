import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-shell";
import { LuxuryLink } from "@/components/luxury/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/content";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Aureum Numerology" },
      {
        name: "description",
        content:
          "Answers on numerology and religion, what details a consultation needs, name changes, timelines, online sessions, languages and privacy.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Aureum Numerology" },
      { property: "og:description", content: "Nine common questions about working with the studio." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions people ask before booking"
        description="If yours is not here, write to the studio — we answer every message ourselves."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border/70">
                <AccordionTrigger className="py-6 text-left font-display text-lg hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-14 text-center">
            <LuxuryLink to="/contact" variant="outline">
              Ask the studio
            </LuxuryLink>
          </div>
        </div>
      </Section>
    </>
  );
}
