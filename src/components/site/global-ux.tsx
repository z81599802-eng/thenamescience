"use client";

import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, CalendarDays, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { STUDIO } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Lenis smooth scrolling, mounted once. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.15, smoothWheel: true });
      lenis = instance as unknown as { raf: (t: number) => void; destroy: () => void };
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
  return null;
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[55] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 mix-blend-multiply transition-transform duration-300 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 16%, transparent), transparent 65%)",
      }}
    />
  );
}

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "grid h-11 w-11 place-items-center rounded-full border border-primary/30 bg-card/95 text-foreground shadow-luxe backdrop-blur transition-all duration-500 hover:border-primary/60",
          visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      <a
        href={`https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent("Hello! I would like to enquire about a consultation with The Name Science.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with the studio on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform duration-500 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      {pathname !== "/book" && (
        <Link
          to="/book"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary-foreground shadow-luxe transition-transform duration-500 hover:scale-[1.03]"
        >
          <CalendarDays className="h-4 w-4" />
          <span className="hidden sm:inline">Book Consultation</span>
          <span className="sm:hidden">Book</span>
        </Link>
      )}
    </div>
  );
}

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem("nn-cookies")) {
      const timer = window.setTimeout(() => setShow(true), 1600);
      return () => window.clearTimeout(timer);
    }
    return;
  }, []);

  if (!show) return null;

  const dismiss = (value: string) => {
    window.localStorage.setItem("nn-cookies", value);
    setShow(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-5 left-5 z-50 max-w-sm animate-fade-in"
    >
      <div className="glass-panel rounded-lg p-5 shadow-lift">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs leading-relaxed text-muted-foreground">
            We use a small number of cookies to remember your language and theme. Nothing is sold or
            shared.
          </p>
          <button
            onClick={() => dismiss("dismissed")}
            aria-label="Dismiss cookie notice"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => dismiss("accepted")}
            className="rounded-full bg-gold px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-charcoal"
          >
            Accept
          </button>
          <button
            onClick={() => dismiss("essential")}
            className="rounded-full border border-border px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}

/** Premium first-paint curtain. */
export function LoadingCurtain() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[80] grid place-items-center bg-background transition-opacity duration-700",
        done && "pointer-events-none opacity-0",
      )}
    >
      <div className="text-center">
        <svg viewBox="0 0 100 100" className="mx-auto h-20 w-20">
          <circle cx="50" cy="50" r="34" fill="none" stroke="var(--border)" strokeWidth="0.8" />
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="214"
            strokeDashoffset="60"
            className="origin-center animate-[spin-slow_1.4s_linear_infinite]"
          />
        </svg>
        <img src="/logo.png" alt={STUDIO.name} className="mx-auto mt-5 h-14 w-auto object-contain" />
      </div>
    </div>
  );
}
