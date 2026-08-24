import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { LandingPageDesignPage } from "@/components/site/LandingPageDesignPage";
import { LP_FAQS } from "@/lib/landing-page";

const URL = "https://acsius-elevate-digital.lovable.app/landing-page-design";
const TITLE = "Landing Page Design Services India | ACSIUS";
const DESCRIPTION =
  "Landing page design company in India building single, conversion-first pages for Google Ads and PPC — message-matched copy, fast load, tracking and A/B testing. Live in 7 days.";

export const Route = createFileRoute("/landing-page-design")({
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
          serviceType: "Landing Page Design Services",
          name: "Landing Page Design & PPC Landing Pages",
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
          mainEntity: LP_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Landing Page Design", item: URL },
          ],
        }),
      },
    ],
  }),
  component: LandingPageDesign,
});

function LandingPageDesign() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <LandingPageDesignPage />
        <CtaBand
          eyebrow="One page, one goal"
          heading="Ready for a landing page that pays for its own ads?"
          body="Share your offer, traffic source and target CPL. Within two working days you get a wireframe direction, a fixed price and a go-live date — plus an optional Google Ads plan."
          primaryLabel="Get a Landing Page Quote"
          secondaryLabel="Request a Proposal"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
