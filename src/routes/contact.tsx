import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryButton } from "@/components/luxury/ui";
import { Reveal } from "@/components/motion/primitives";
import { LANGUAGES } from "@/lib/i18n";
import { STUDIO } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact the Studio — Aureum Numerology" },
      {
        name: "description",
        content:
          "Reach the studio by WhatsApp, phone or email, or send an enquiry. Chennai studio, online consultations worldwide in six languages.",
      },
      { property: "og:title", content: "Contact the Studio — Aureum Numerology" },
      { property: "og:description", content: "WhatsApp, phone, email or an enquiry form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to the studio"
        description="Every message is read and answered by the practitioner, usually within one working day."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <GlassCard>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-4">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-muted-foreground">{STUDIO.address}</span>
                </li>
                <li className="flex gap-4">
                  <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a className="text-muted-foreground hover:text-foreground" href={`tel:${STUDIO.phone}`}>
                    {STUDIO.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a
                    className="text-muted-foreground hover:text-foreground"
                    href={`mailto:${STUDIO.email}`}
                  >
                    {STUDIO.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <MessageCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a
                    className="text-muted-foreground hover:text-foreground"
                    href={`https://wa.me/${STUDIO.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
              <GoldRule className="mt-7" />
              <p className="mt-4 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                {STUDIO.hours}
              </p>
            </GlassCard>

            <div className="overflow-hidden rounded-lg border border-border/70">
              <iframe
                title="Studio location on Google Maps"
                src="https://www.google.com/maps?q=Alwarpet,Chennai&output=embed"
                loading="lazy"
                className="h-64 w-full"
              />
            </div>
          </div>

          <Reveal>
            <GlassCard hover={false}>
              <h2 className="text-2xl">Send an enquiry</h2>
              <form
                className="mt-7 grid gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Field id="c-name" label="Your name" />
                <Field id="c-email" label="Email" type="email" />
                <Field id="c-phone" label="Phone or WhatsApp" />
                <div>
                  <label
                    htmlFor="c-lang"
                    className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    Preferred language
                  </label>
                  <select
                    id="c-lang"
                    className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-gold/70"
                  >
                    {LANGUAGES.map((l) => (
                      <option key={l.code} value={l.code}>
                        {l.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="c-message"
                    className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="c-message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-shadow duration-500 focus:border-gold/70 focus:shadow-luxe"
                  />
                </div>
                <div className="sm:col-span-2">
                  <LuxuryButton type="submit">Send enquiry</LuxuryButton>
                  <p aria-live="polite" className="mt-4 min-h-5 text-sm text-emerald">
                    {sent ? "Thank you — the studio will reply within one working day." : ""}
                  </p>
                </div>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-shadow duration-500 focus:border-gold/70 focus:shadow-luxe"
      />
    </div>
  );
}
