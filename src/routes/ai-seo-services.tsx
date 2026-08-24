import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { AiSeoPage } from "@/components/site/AiSeoPage";
import { AISEO_FAQS } from "@/lib/ai-seo";

const URL = "https://acsius-elevate-digital.lovable.app/ai-seo-services";
const TITLE = "AI SEO Services India | AI SEO Company | ACSIUS";
const DESCRIPTION =
  "ACSIUS is an AI SEO company in India offering AI SEO optimization — entity optimisation, schema, answer-first content and citation tracking. Free audit.";

export const Route = createFileRoute("/ai-seo-services")({
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
          serviceType: "AI SEO Services",
          name: "AI SEO Services India",
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
          mainEntity: AISEO_FAQS.map((faq) => ({
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
              item: "https://acsius-elevate-digital.lovable.app/",
            },
            { "@type": "ListItem", position: 2, name: "AI SEO Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: ContentWritingServices,
});

function ContentWritingServices() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <AiSeoPage />
        <CtaBand
          eyebrow="Let's talk AI search"
          heading="Ready to Be the Source AI Quotes?"
          body="Share your website and your buyers' key questions. Within two working days you get an AI visibility scorecard, a content roadmap and a fixed monthly scope."
          primaryLabel="Get a Free AI SEO Audit"
          secondaryLabel="Book a Strategy Call"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
