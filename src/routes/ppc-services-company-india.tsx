import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { PpcPage } from "@/components/site/PpcPage";
import { PPC_FAQS } from "@/lib/ppc";

const URL = "https://www.acsius.com/ppc-services-company-india";
const TITLE = "PPC Services India, Pay per Click Management India";
const DESCRIPTION =
  "ACSIUS is a leading PPC Company in India providing expert PPC Services & Pay per Click Management to maximize leads. Free consultation!";

export const Route = createFileRoute("/ppc-services-company-india")({
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
          serviceType: "PPC Services & Pay Per Click Management",
          name: "PPC Company India",
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
          mainEntity: PPC_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "PPC Services Company India", item: URL },
          ],
        }),
      },
    ],
  }),
  component: PpcServicesCompanyIndia,
});

function PpcServicesCompanyIndia() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <PpcPage />
        <CtaBand
          eyebrow="Let's talk paid media"
          heading="Ready to Cut Your Cost Per Lead?"
          body="Share your ad account, website and target CPL. Within two working days you get a wasted-spend audit, a channel plan with budget splits, and a fixed monthly management fee."
          primaryLabel="Get a Free PPC Audit"
          secondaryLabel="Book a Strategy Call"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
