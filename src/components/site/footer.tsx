"use client";

import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { STUDIO } from "@/lib/content";
import { GoldRule, LuxuryButton } from "@/components/luxury/ui";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" aria-label={STUDIO.name} className="inline-block">
              <img src="/logo.png" alt={STUDIO.name} className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A consultation studio where numerology, namelogy and modern counselling meet — calm,
              structured and entirely confidential.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{STUDIO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-gold" />
                <a className="transition-colors hover:text-foreground" href={`tel:${STUDIO.phone}`}>
                  {STUDIO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-gold" />
                <a
                  className="transition-colors hover:text-foreground"
                  href={`mailto:${STUDIO.email}`}
                >
                  {STUDIO.email}
                </a>
              </li>
            </ul>
          </div>

          <FooterColumn
            title="Studio"
            links={[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/success-stories", label: "Success Stories" },
              { to: "/contact", label: "Contact" },
              { to: "/book", label: "Book Consultation" },
            ]}
          />
          <FooterColumn
            title="Explore"
            links={[
              { to: "/numerology", label: "Numerology" },
              { to: "/namelogy", label: "Namelogy" },
              { to: "/calculators", label: "Calculators" },
              { to: "/blog", label: "Journal" },
              { to: "/faqs", label: "FAQs" },
            ]}
          />

          <div>
            <p className="eyebrow">Newsletter</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              One letter each month: a number to work with, a name story, and the auspicious dates
              ahead.
            </p>
            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setEmail("");
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-full border border-border bg-background/60 px-5 py-3 text-sm outline-none transition-shadow duration-500 placeholder:text-muted-foreground focus:border-gold/70 focus:shadow-luxe"
              />
              <div className="mt-3">
                <LuxuryButton type="submit" size="sm" variant="outline">
                  Subscribe
                </LuxuryButton>
              </div>
              <p aria-live="polite" className="mt-3 min-h-5 text-xs text-emerald">
                {sent ? "Thank you — your first letter is on its way." : ""}
              </p>
            </form>
          </div>
        </div>

        <GoldRule className="mt-16" />

        <div className="mt-8 flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {STUDIO.name}. Guidance offered for reflection, not as
            medical, legal or financial advice.
          </p>
          <div className="flex gap-6">
            <Link className="transition-colors hover:text-foreground" to="/privacy">
              Privacy
            </Link>
            <Link className="transition-colors hover:text-foreground" to="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="transition-colors hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
