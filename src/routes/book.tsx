import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/page-shell";
import { GlassCard, GoldRule, LuxuryButton, NumberDial } from "@/components/luxury/ui";
import { SERVICES, STUDIO } from "@/lib/content";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — The Name Science" },
      {
        name: "description",
        content:
          "Book an online or in-studio numerology consultation in four steps: choose a format, pick a date and time, share your birth details and confirm.",
      },
      { property: "og:title", content: "Book a Consultation — The Name Science" },
      { property: "og:description", content: "A calm, four-step booking flow." },
      { property: "og:url", content: `${STUDIO.url}/book` },
    ],
    links: [{ rel: "canonical", href: `${STUDIO.url}/book` }],
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
    phone: "",
    dob: "",
    tob: "",
    place: "",
    purpose: "",
    notes: "",
  });
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const bookingText = `Hello! I would like to book a consultation:\n- Service: ${form.service}\n- Format: ${form.mode}\n- Preferred Date: ${form.date || "Not specified"}\n- Preferred Slot: ${form.slot || "Not specified"}\n- Full Name: ${form.name}\n- Phone: ${form.phone}\n- Date of Birth: ${form.dob || "Not specified"}\n- Time of Birth: ${form.tob || "Not specified"}\n- Place of Birth: ${form.place || "Not specified"}\n- Purpose: ${form.purpose || "Not specified"}\n- Additional Notes: ${form.notes || "None"}`;
  const whatsappUrl = `https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent(bookingText)}`;

  return (
    <>
      <PageHero
        eyebrow="Book consultation"
        title="Four calm steps to your appointment"
        description="Your details stay in this browser until you confirm; hitting submit opens WhatsApp to send your booking directly."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          {/* Step Indicator Header */}
          <div className="rounded-lg border border-border/70 bg-card/40 p-3 sm:p-5">
            <ol className="grid grid-cols-4 gap-1.5 sm:gap-3 text-center">
              {STEPS.map((s, i) => (
                <li
                  key={s}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 ${
                    i <= step ? "text-foreground font-medium" : "text-muted-foreground opacity-60"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-full border text-xs font-display transition-colors ${
                      i <= step ? "border-gold bg-gold/15 text-gold shadow-sm" : "border-border/70 text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.12em] truncate max-w-full">
                    {s}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <GlassCard hover={false} className="mt-6 sm:mt-8 p-5 sm:p-8">
            {done ? (
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <NumberDial value="✓" label="Requested" size={140} percent={100} />
                </div>
                <h2 className="mt-6 text-xl sm:text-2xl font-medium">Your appointment request is ready!</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {form.service} · {form.mode} · {form.date || "date to confirm"}{" "}
                  {form.slot && `at ${form.slot}`}. Tap below to send your booking directly to the studio via WhatsApp.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-charcoal shadow-luxe transition-transform hover:scale-[1.02]"
                  >
                    Open WhatsApp Now
                  </a>
                  <LuxuryButton
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setDone(false);
                      setStep(0);
                    }}
                  >
                    Start New Booking
                  </LuxuryButton>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (step < STEPS.length - 1) {
                    setStep((s) => s + 1);
                  } else {
                    window.open(whatsappUrl, "_blank");
                    setDone(true);
                  }
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
                      <div className="mt-3 grid grid-cols-3 gap-2.5 sm:flex sm:flex-wrap">
                        {SLOTS.map((s) => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => set("slot", s)}
                            aria-pressed={form.slot === s}
                            className={`rounded-full border px-3 sm:px-5 py-2.5 text-xs sm:text-sm text-center transition-all duration-300 ${
                              form.slot === s
                                ? "border-gold bg-gold/15 text-foreground font-medium"
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
                    <Input id="b-phone" label="Phone number" type="tel" value={form.phone} onChange={(v) => set("phone", v)} required />
                    <Input id="b-dob" label="Date of birth" type="date" value={form.dob} onChange={(v) => set("dob", v)} required />
                    <Input id="b-tob" label="Time of birth" type="time" value={form.tob} onChange={(v) => set("tob", v)} />
                    <div className="sm:col-span-2">
                      <Input id="b-place" label="Place of birth" value={form.place} onChange={(v) => set("place", v)} />
                    </div>
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
                        ["Phone", form.phone || "—"],
                        ["Born", `${form.dob || "—"} ${form.tob}`.trim()],
                      ].map(([k, v]) => (
                        <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 border-b border-border/50 pb-2">
                          <dt className="text-muted-foreground text-xs uppercase tracking-wider sm:normal-case sm:tracking-normal">{k}</dt>
                          <dd className="sm:text-right font-medium sm:font-normal">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                <div className="mt-8 sm:mt-9 flex flex-wrap items-center justify-between gap-3">
                  {step > 0 ? (
                    <LuxuryButton type="button" variant="ghost" size="sm" onClick={() => setStep((s) => s - 1)}>
                      Back
                    </LuxuryButton>
                  ) : <div />}
                  <LuxuryButton type="submit">
                    {step === STEPS.length - 1 ? "Send via WhatsApp" : "Continue"}
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
