import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { GraphicDesignPage } from "@/components/site/GraphicDesignPage";
import { GD_FAQS } from "@/lib/graphic-design";

const URL = "https://acsius-elevate-digital.lovable.app/graphic-design-services";
const TITLE = "Graphic Design Company India | Design Agency | ACSIUS";
const DESCRIPTION =
  "ACSIUS is a graphic design company in India offering brand identity, marketing creatives, packaging and deck design. Outsource graphic design to a senior team. Get a quote.";

export const Route = createFileRoute("/graphic-design-services")({
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
          serviceType: "Graphic Design Services",
          name: "Graphic Design Services India",
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
          mainEntity: GD_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Graphic Design Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: GraphicDesignServices,
});

function GraphicDesignServices() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <GraphicDesignPage />
        <CtaBand
          eyebrow="Let's design it"
          heading="Ready for Design That Earns Its Keep?"
          body="Share your brief and three brands you admire. Within one working day you get a written scope with deliverables, timeline and a fixed cost."
          primaryLabel="Get a Design Quote"
          secondaryLabel="Book a Call"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
