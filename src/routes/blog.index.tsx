import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/page-shell";
import { GoldRule } from "@/components/luxury/ui";
import { Reveal } from "@/components/motion/primitives";
import { POSTS } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "The Journal — Numerology & Namelogy Writing" },
      {
        name: "description",
        content:
          "Essays on numerology basics, the power of a name, lucky numbers, business naming, baby names, personal growth cycles and yearly forecasts.",
      },
      { property: "og:title", content: "The Journal — The Name Science" },
      {
        property: "og:description",
        content: "Nine essays on numbers, names and the decisions they inform.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Writing from the studio"
        description="Slow, practical essays on numbers, names and the decisions they inform."
      />

      <Section>
        {featured && (
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid gap-10 rounded-lg border border-border/70 bg-card/50 p-10 transition-all duration-500 hover:border-gold/50 hover:shadow-lift lg:grid-cols-2"
            >
              <div>
                <p className="eyebrow">{featured.category}</p>
                <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <GoldRule className="mt-8 w-24 transition-all duration-500 group-hover:w-40" />
                <p className="mt-4 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {featured.readTime} read
                </p>
              </div>
              <div className="aurora-bg paper-grain hidden rounded-md lg:block" />
            </Link>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col rounded-lg border border-border/70 bg-card/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-luxe"
              >
                <p className="eyebrow">{p.category}</p>
                <h2 className="mt-4 text-xl leading-snug">{p.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <GoldRule className="mt-6 w-12 transition-all duration-500 group-hover:w-24" />
                <p className="mt-4 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {p.readTime} read
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
