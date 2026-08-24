import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Newsletter } from "@/components/site/Newsletter";
import { CareerPage } from "@/components/site/CareerPage";
import { OPENINGS } from "@/lib/career";

const URL = "https://acsius-elevate-digital.lovable.app/career";
const TITLE = "Join ACSIUS Careers | Web, SEO & Digital Experts Hiring";
const DESCRIPTION =
  "Explore careers at ACSIUS Technologies. Current openings for UI/UX designers, WordPress developers, PHP developers, SEO and business development roles in New Delhi. Apply online.";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Latest Openings @ ACSIUS",
          url: URL,
          itemListElement: OPENINGS.map((job, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: job.title,
            item: `${URL}#${job.id}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://acsius-elevate-digital.lovable.app/",
            },
            { "@type": "ListItem", position: 2, name: "Career", item: URL },
          ],
        }),
      },
    ],
  }),
  component: CareerRoute,
});

function CareerRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <CareerPage />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
