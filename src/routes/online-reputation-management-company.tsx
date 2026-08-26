import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { OrmPage } from "@/components/site/OrmPage";
import { ORM_FAQS } from "@/lib/orm";

const URL = "https://www.acsius.com/online-reputation-management-company";
const TITLE = "Online Reputation Management Company, ORM Services Company India";
const DESCRIPTION =
  "Searching for a trusted ORM Services Company in India? ACSIUS delivers customized Online Reputation Management solutions to build brand credibility.";

export const Route = createFileRoute("/online-reputation-management-company")({
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
          name: "Online Reputation Management Services",
          serviceType: "Online Reputation Management",
          description: DESCRIPTION,
          url: URL,
          areaServed: "IN",
          provider: {
            "@type": "ProfessionalService",
            name: "ACSIUS Technologies",
            telephone: "+91-9891764802",
            email: "info@acsius.com",
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
          mainEntity: ORM_FAQS.map((faq) => ({
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
            {
              "@type": "ListItem",
              position: 2,
              name: "Online Reputation Management Company",
              item: URL,
            },
          ],
        }),
      },
    ],
  }),
  component: OrmRoute,
});

function OrmRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <OrmPage />
        <CtaBand
          eyebrow="See your page one, scored"
          heading="Ready to change what people find when they search you?"
          body="Send us your brand name and the URLs that worry you. Within two working days you get a page-one audit, a removal vs suppression split and a written scope."
          primaryLabel="Get a Free Reputation Audit"
          secondaryLabel="Talk to an ORM Specialist"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
