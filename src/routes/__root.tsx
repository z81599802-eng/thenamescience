import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteProvider } from "@/components/site/site-provider";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import {
  CookieBanner,
  CursorGlow,
  FloatingActions,
  LoadingCurtain,
  ScrollProgress,
  SmoothScroll,
} from "@/components/site/global-ux";
import { STUDIO } from "@/lib/content";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-7xl text-gold">404</p>
        <h1 className="mt-4 text-2xl">This page is not in the chart</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you are looking for has moved or never existed.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-charcoal"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. Try again, or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gold px-6 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-charcoal"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-6 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#faf9f6" },
      { title: `${STUDIO.name} — Numerology & Namelogy Consultations` },
      {
        name: "description",
        content:
          "A premium numerology and namelogy consultation studio: life path readings, name correction, business and baby naming, lucky numbers, colours and dates.",
      },
      { name: "author", content: STUDIO.name },
      { property: "og:site_name", content: STUDIO.name },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.thenamescience.com/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.thenamescience.com/logo.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: STUDIO.name,
          url: "https://www.thenamescience.com",
          logo: "https://www.thenamescience.com/logo.png",
          image: "https://www.thenamescience.com/logo.png",
          description:
            "Practitioner-led numerology and namelogy consultation studio offering life path readings, name correction, business and baby naming.",
          telephone: STUDIO.phone,
          email: STUDIO.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: STUDIO.address,
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600018",
            addressCountry: "IN",
          },
          openingHours: STUDIO.hours,
          priceRange: "$$",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteProvider>
        <LoadingCurtain />
        <SmoothScroll />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main id="main" className="relative">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
        <CookieBanner />
      </SiteProvider>
    </QueryClientProvider>
  );
}
