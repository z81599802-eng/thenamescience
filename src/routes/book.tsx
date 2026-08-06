import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryButton, NumberDial } from "@/components/luxury/ui";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Aureum Numerology" },
      {
        name: "description",
        content:
          "Book an online or in-studio numerology consultation in four steps: choose a format, pick a date and time, share your birth details and confirm.",
      },
      { property: "og:title", content: "Book a Consultation — Aureum Numerology" },
      { property: "og:description", content: "A calm, four-step booking flow." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: Book,
});

const STEPS = ["Consultation", "Date & time", "Birth details", "Confirm"];
const SLOTS = ["10:00", "11:30", "14:00", "15:30", "17:00", "18:30"];

function Book() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    service: SERVICES[0]!.title,
    mode: "Online",
    date: "",
    slot: "",
    name: "",
    dob: "",
    tob: "",
    place: "",
    purpose: "",
    notes: "",
  });
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <>
      <PageHero
        eyebrow="Book consultation"
        title="Four calm steps to your appointment"
        description="Your details stay in this browser until you confirm; the studio then reaches out to settle payment."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <ol className="flex flex-wrap items-center gap-3">
            {STEPS.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <span
                  className={`grid h-8 w-8 place-items-center rounded-full border text-xs transition-colors ${
                    i <= step ? "border-gold bg-gold/15 text-foreground" : "border-border/70 text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`text-[0.68rem] uppercase tracking-[0.16em] ${
                    i <= step ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s}
                </span>
                {i < STEPS.length - 1 && <span aria-hidden="true" className="hairline w-8" />}
              </li>
            ))}
          </ol>

          <GlassCard hover={false} className="mt-10">
            {done ? (
              <div className="text-center">
                <NumberDial value="✓" label="Requested" size={160} percent={100} />
                <h2 className="mt-6 text-2xl">Your appointment request is in</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {form.service} · {form.mode} · {form.date || "date to confirm"}{" "}
                  {form.slot && `at ${form.slot}`}. The studio will confirm by WhatsApp or email
                  shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (step < STEPS.length - 1) setStep((s) => s + 1);
                  else setDone(true);
                }}
              >
                {step === 0 && (
                  <div className="grid gap-5">
                    <Select
                      id="b-service"
                      label="Consultation"
                      value={form.service}
                      onChange={(v) => set("service", v)}
                      options={SERVICES.map((s) => s.title)}
                    />
                    <Select
                      id="b-mode"
                      label="Format"
                      value={form.mode}
                      onChange={(v) => set("mode", v)}
                      options={["Online", "In studio (Chennai)"]}
                    />
                  </div>
                )}

                {step === 1 && (
                  <div className="grid gap-5">
                    <Input
                      id="b-date"
                      label="Preferred date"
                      type="date"
                      value={form.date}
                      onChange={(v) => set("date", v)}
                    />
                    <fieldset>
                      <legend className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                        Time slot
                      </legend>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {SLOTS.map((s) => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => set("slot", s)}
                            aria-pressed={form.slot === s}
                            className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${
                              form.slot === s
                                ? "border-gold bg-gold/15"
                                : "border-border/70 text-muted-foreground hover:border-gold/60"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input id="b-name" label="Full name" value={form.name} onChange={(v) => set("name", v)} required />
                    <Input id="b-dob" label="Date of birth" type="date" value={form.dob} onChange={(v) => set("dob", v)} required />
                    <Input id="b-tob" label="Time of birth" type="time" value={form.tob} onChange={(v) => set("tob", v)} />
                    <Input id="b-place" label="Place of birth" value={form.place} onChange={(v) => set("place", v)} />
                  </div>
                )}

                {step === 3 && (
                  <div className="grid gap-5">
                    <Input
                      id="b-purpose"
                      label="Purpose of the consultation"
                      value={form.purpose}
                      onChange={(v) => set("purpose", v)}
                    />
                    <div>
                      <label
                        htmlFor="b-notes"
                        className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground"
                      >
                        Additional notes
                      </label>
                      <textarea
                        id="b-notes"
                        rows={4}
                        value={form.notes}
                        onChange={(e) => set("notes", e.target.value)}
                        className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-gold/70"
                      />
                    </div>
                    <GoldRule />
                    <dl className="grid gap-3 text-sm sm:grid-cols-2">
                      {[
                        ["Consultation", form.service],
                        ["Format", form.mode],
                        ["Date", form.date || "—"],
                        ["Time", form.slot || "—"],
                        ["Name", form.name || "—"],
                        ["Born", `${form.dob || "—"} ${form.tob}`.trim()],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-4 border-b border-border/50 pb-2">
                          <dt className="text-muted-foreground">{k}</dt>
                          <dd className="text-right">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  {step > 0 && (
                    <LuxuryButton type="button" variant="ghost" size="sm" onClick={() => setStep((s) => s - 1)}>
                      Back
                    </LuxuryButton>
                  )}
                  <LuxuryButton type="submit">
                    {step === STEPS.length - 1 ? "Request appointment" : "Continue"}
                  </LuxuryButton>
                </div>
              </form>
            )}
          </GlassCard>
        </div>
      </Section>
    </>
  );
}

function Input({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-shadow duration-500 focus:border-gold/70 focus:shadow-luxe"
      />
    </div>
  );
}

function Select({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-gold/70"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
