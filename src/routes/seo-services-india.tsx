import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { SeoIndiaPage } from "@/components/site/SeoIndiaPage";
import { INDIA_FAQS } from "@/lib/seo-india";

const URL = "https://www.acsius.com/seo-services-india";
const TITLE = "SEO Services in India | Best Organic SEO Company — ACSIUS";
const DESCRIPTION =
  "Organic SEO services in India by ACSIUS — technical SEO, keyword strategy, content, editorial link building, local and ecommerce SEO plus AI search optimisation. Free audit, transparent reporting.";

export const Route = createFileRoute("/seo-services-india")({
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
          serviceType: "SEO Services",
          name: "SEO Services in India",
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
          mainEntity: INDIA_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "SEO Services in India", item: URL },
          ],
        }),
      },
    ],
  }),
  component: SeoIndia,
});

function SeoIndia() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <SeoIndiaPage />
        <CtaBand
          eyebrow="Let's talk SEO"
          heading="Ready to Own Organic Search in India?"
          body="Send us your website and the queries you want to win. We'll audit your current search visibility and come back with a prioritised SEO roadmap and a clear investment range — usually within two working days."
          primaryLabel="Get a Free SEO Audit"
          secondaryLabel="Talk to an SEO Specialist"
        />

        <Contact />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
