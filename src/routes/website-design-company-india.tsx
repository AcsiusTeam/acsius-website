import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { WebDesignPage } from "@/components/site/WebDesignPage";
import { WD_FAQS } from "@/lib/web-design";

const URL = "https://www.acsius.com/website-design-company-india";
const TITLE = "Website Designing Company India, Affordable Web Design Services";
const DESCRIPTION =
  "Get a stunning, budget-friendly website with ACSIUS, a leading Website Designing Company in India. Affordable Web Design Services. Contact us!";

export const Route = createFileRoute("/website-design-company-india")({
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
          serviceType: "Web Design Services",
          name: "Web Design Services in India",
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
          mainEntity: WD_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Website Design Company India", item: URL },
          ],
        }),
      },
    ],
  }),
  component: WebsiteDesignCompanyIndia,
});

function WebsiteDesignCompanyIndia() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <WebDesignPage />
        <CtaBand
          eyebrow="Let's talk design"
          heading="Ready for a Website That Earns Its Keep?"
          body="Send us your current website or a rough brief. We'll come back with a page-by-page scope, a realistic timeline and a fixed budget range for your web design project — usually within two working days."
          primaryLabel="Get a Free Design Consultation"
          secondaryLabel="Request a Quote"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
