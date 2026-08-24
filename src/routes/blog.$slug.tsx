import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero, Section } from "@/components/site/page-shell";
import { GoldRule, LuxuryLink } from "@/components/luxury/ui";
import { POSTS, STUDIO } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable — The Name Science Journal" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: `${loaderData.post.title} — The Name Science Journal` },
        { name: "description", content: loaderData.post.excerpt },
        { property: "og:title", content: loaderData.post.title },
        { property: "og:description", content: loaderData.post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${STUDIO.url}/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `${STUDIO.url}/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.post.title,
            datePublished: loaderData.post.date,
            description: loaderData.post.excerpt,
          }),
        },
      ],
    };
  },
  component: Article,
});

function Article() {
  const { post } = Route.useLoaderData();
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

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[61] h-[3px] bg-primary/80"
        style={{ width: `${progress}%` }}
      />
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />

      <Section>
        <article className="mx-auto max-w-2xl">
          <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readTime} read
          </p>
          <GoldRule className="mt-6" />
          <div className="mt-10 space-y-7">
            {post.body.map((para: string) => (
              <p key={para.slice(0, 24)} className="text-[1.02rem] leading-[1.85] text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
          <GoldRule className="mt-14" />
          <div className="mt-10">
            <LuxuryLink to="/book">Book a consultation</LuxuryLink>
          </div>
        </article>
      </Section>

      <Section muted>
        <h2 className="font-display text-3xl">Continue reading</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-lg border border-border/70 bg-card/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50"
            >
              <p className="eyebrow">{p.category}</p>
              <p className="mt-3 font-display text-xl leading-snug">{p.title}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
