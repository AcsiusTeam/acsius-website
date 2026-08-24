import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { LocalSeoPage } from "@/components/site/LocalSeoPage";
import { LOCAL_FAQS } from "@/lib/local-seo";

const URL = "https://www.acsius.com/local-seo-services";
const TITLE = "Local SEO Services India | Local SEO Company — ACSIUS";
const DESCRIPTION =
  "Local SEO services in India by ACSIUS — Google Business Profile optimisation, locality landing pages, citations, reviews and grid-rank tracking that win map packs and near-me searches. Free local audit.";

export const Route = createFileRoute("/local-seo-services")({
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
          "@type": "Service",
          serviceType: "Local SEO Services",
          name: "Local SEO Services India",
          description: DESCRIPTION,
          areaServed: "IN",
          url: URL,
          provider: {
            "@type": "ProfessionalService",
            name: "ACSIUS Technologies",
            telephone: "+91-9891764802",
            email: "sales@acsius.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "52-A, 301-3rd Floor, Krishna Complex, Hasanpur",
              addressLocality: "New Delhi",
              postalCode: "110092",
              addressCountry: "IN",
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: LOCAL_FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
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
              item: "https://www.acsius.com/",
            },
            { "@type": "ListItem", position: 2, name: "Local SEO Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: LocalSeo,
});

function LocalSeo() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <LocalSeoPage />
        <CtaBand
          eyebrow="Let's talk local"
          heading="Ready to Own the Map Pack in Your City?"
          body="Send us your Google Business Profile and the cities you sell in. We'll audit your local visibility, benchmark your grid rankings against competitors and come back with a prioritised local SEO roadmap — usually within two working days."
          primaryLabel="Get a Free Local SEO Audit"
          secondaryLabel="Talk to a Local SEO Specialist"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
