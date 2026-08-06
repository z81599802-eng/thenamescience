"use client";

import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, Search, Globe, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LANGUAGES } from "@/lib/i18n";
import { useSite } from "@/components/site/site-provider";
import { LuxuryLink } from "@/components/luxury/ui";
import { cn } from "@/lib/utils";
import { STUDIO } from "@/lib/content";
import { POSTS, SERVICES } from "@/lib/content";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/numerology", key: "nav.numerology" },
  { to: "/namelogy", key: "nav.namelogy" },
  { to: "/calculators", key: "nav.calculators" },
  { to: "/success-stories", key: "nav.stories" },
  { to: "/blog", key: "nav.blog" },
  { to: "/faqs", key: "nav.faqs" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const { t, lang, setLang, theme, toggleTheme } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const results = query.trim()
    ? [
        ...SERVICES.filter((s) => s.title.toLowerCase().includes(query.toLowerCase())).map((s) => ({
          label: s.title,
          to: "/services",
        })),
        ...POSTS.filter((p) => p.title.toLowerCase().includes(query.toLowerCase())).map((p) => ({
          label: p.title,
          to: "/blog",
        })),
      ].slice(0, 6)
    : [];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel border-b border-border/60 py-3" : "py-6",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/60">
            <span className="font-display text-lg text-gold">9</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight sm:text-xl">
              {STUDIO.short}
            </span>
            <span className="hidden text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground sm:block">
              Numerology Studio
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          <nav className="hidden items-center gap-1 xl:flex">
            {NAV.slice(0, 7).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3 py-2 text-[0.78rem] tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search the site"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </button>

          <div className="relative hidden sm:block">
            <label className="sr-only" htmlFor="lang-select">
              {t("common.language")}
            </label>
            <Globe
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
            />
            <select
              id="lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value as (typeof LANGUAGES)[number]["code"])}
              className="appearance-none rounded-full border border-border/70 bg-transparent py-2 pl-8 pr-3 text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.native}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <div className="hidden lg:block">
            <LuxuryLink to="/book" size="sm">
              {t("cta.book")}
            </LuxuryLink>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/70 xl:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="mx-auto mt-3 max-w-3xl px-5 sm:px-8">
          <div className="glass-panel rounded-lg p-3 shadow-luxe">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, articles, calculators…"
              aria-label="Search"
              className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            {results.length > 0 && (
              <ul className="mt-2 border-t border-border/60 pt-2">
                {results.map((r) => (
                  <li key={`${r.to}-${r.label}`}>
                    <Link
                      to={r.to}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-gold/10 hover:text-foreground"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {open && (
        <nav className="mx-auto mt-3 max-w-7xl px-5 sm:px-8 xl:hidden">
          <div className="glass-panel rounded-lg p-4 shadow-luxe">
            <ul className="grid gap-1 sm:grid-cols-2">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="block rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-gold/10 hover:text-foreground"
                    activeProps={{ className: "text-foreground bg-gold/10" }}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <LuxuryLink to="/book" size="sm" className="w-full">
                {t("cta.book")}
              </LuxuryLink>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
