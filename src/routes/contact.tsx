import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryButton } from "@/components/luxury/ui";
import { Reveal } from "@/components/motion/primitives";
import { STUDIO } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact the Studio — The Name Science" },
      {
        name: "description",
        content:
          "Reach The Name Science studio by WhatsApp, phone or email, or send an enquiry. Chennai studio or online consultations worldwide.",
      },
      { property: "og:title", content: "Contact the Studio — The Name Science" },
      { property: "og:description", content: "WhatsApp, phone, email or an enquiry form." },
      { property: "og:url", content: `${STUDIO.url}/contact` },
    ],
    links: [{ rel: "canonical", href: `${STUDIO.url}/contact` }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const formattedText = `Hello! My name is ${name}.\n- Email: ${email}\n- Phone: ${phone || "Not specified"}\n- Message: ${message}`;
  const whatsappUrl = `https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent(formattedText)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, "_blank");
    setSent(true);
  };

  const handleWhatsAppDirect = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to the studio"
        description="Every message is read and answered by the practitioner. Submitting will open WhatsApp directly with your message."
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
                  <a className="text-muted-foreground hover:text-foreground transition-colors" href={`tel:${STUDIO.phone}`}>
                    {STUDIO.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    href={`mailto:${STUDIO.email}`}
                  >
                    {STUDIO.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <MessageCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                    href={`https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent("Hello! I would like to enquire about a consultation with The Name Science.")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat directly on WhatsApp
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
                className="h-64 w-full border-0"
              />
            </div>
          </div>

          <Reveal>
            <GlassCard hover={false} className="p-8">
              <h2 className="text-2xl">Send an enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your details and question; hitting submit opens WhatsApp to send your message directly.
              </p>

              {sent ? (
                <div className="mt-7 rounded-lg border border-primary/30 bg-primary/10 p-6 text-center">
                  <p className="text-lg font-medium text-foreground">Enquiry ready to send!</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    If WhatsApp didn't open automatically in a new window, tap below to launch it directly.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-charcoal shadow-luxe transition-transform hover:scale-[1.02]"
                    >
                      <MessageCircle className="h-4 w-4" /> Launch WhatsApp Now
                    </a>
                    <LuxuryButton
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setSent(false);
                        setName("");
                        setEmail("");
                        setPhone("");
                        setMessage("");
                      }}
                    >
                      Send another message
                    </LuxuryButton>
                  </div>
                </div>
              ) : (
                <form className="mt-7 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="c-name" className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                      Your name
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-shadow duration-500 focus:border-gold/70 focus:shadow-luxe"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-email" className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                      Email address
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-shadow duration-500 focus:border-gold/70 focus:shadow-luxe"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="c-phone" className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                      Phone or WhatsApp
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91..."
                      className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-shadow duration-500 focus:border-gold/70 focus:shadow-luxe"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                      How can we help?
                    </label>
                    <textarea
                      id="c-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your goals or questions regarding numerology, name correction, business or baby naming..."
                      className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-shadow duration-500 focus:border-gold/70 focus:shadow-luxe"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
                    <LuxuryButton type="submit">
                      <Send className="mr-2 h-4 w-4" /> Send via WhatsApp
                    </LuxuryButton>
                  </div>
                </form>
              )}
            </GlassCard>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
