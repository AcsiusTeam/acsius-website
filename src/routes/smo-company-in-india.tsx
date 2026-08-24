import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { SmoPage } from "@/components/site/SmoPage";
import { SMO_FAQS } from "@/lib/smo";

const URL = "https://www.acsius.com/smo-company-in-india";
const TITLE = "SMO Company in India | Social Media Optimization Agency — ACSIUS";
const DESCRIPTION =
  "ACSIUS is an SMO company in India offering social media optimization services — profile optimisation, content calendars, community management and lead-level reporting. Plans from ₹24,000/month.";

export const Route = createFileRoute("/smo-company-in-india")({
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
          serviceType: "Social Media Optimization (SMO) Services",
          name: "SMO Company India",
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
          mainEntity: SMO_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "SMO Company in India", item: URL },
          ],
        }),
      },
    ],
  }),
  component: SmoCompanyInIndia,
});

function SmoCompanyInIndia() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <SmoPage />
        <CtaBand
          eyebrow="Let's optimise your social"
          heading="Ready for social media that sends enquiries, not just likes?"
          body="Share your handles and target buyer. Within two working days you get a profile audit, a 30-day calendar outline and a written monthly cost."
          primaryLabel="Get an SMO Proposal"
          secondaryLabel="Book a Free Social Audit"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
