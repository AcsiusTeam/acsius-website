import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { LogoDesignPage } from "@/components/site/LogoDesignPage";
import { LD_FAQS } from "@/lib/logo-design";

const URL = "https://www.acsius.com/logo-design-company";
const TITLE = "Logo Design Company in India | Creative Logo Design | ACSIUS";
const DESCRIPTION =
  "ACSIUS offers logo design services in India — creative logo design, monograms and full identity kits with vector source files. Three routes in 48 hours. Get a quote.";

export const Route = createFileRoute("/logo-design-company")({
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
          serviceType: "Logo Design Services",
          name: "Logo Design Services in India",
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
          mainEntity: LD_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Logo Design Company", item: URL },
          ],
        }),
      },
    ],
  }),
  component: LogoDesignCompany,
});

function LogoDesignCompany() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <LogoDesignPage />
        <CtaBand
          eyebrow="Let's draw it"
          heading="Ready for a Logo That Earns Its Place?"
          body="Share your name, sector and three marks you admire. Within one working day you get a written scope with routes, timeline and a fixed cost."
          primaryLabel="Get a Logo Quote"
          secondaryLabel="Chat on WhatsApp"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
