import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { UiUxDesignPage } from "@/components/site/UiUxDesignPage";
import { UIUX_FAQS } from "@/lib/ui-ux";

const URL = "https://acsius-elevate-digital.lovable.app/ui-ux-website-design-company";
const TITLE = "UI/UX Website Design Company India | UI/UX Design Services — ACSIUS";
const DESCRIPTION =
  "ACSIUS is a UI/UX website design company in India offering UI/UX website design services — research, wireframes, high-fidelity UI, prototypes and design systems. First concept in 72 hours.";

export const Route = createFileRoute("/ui-ux-website-design-company")({
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
          serviceType: "UI/UX Website Design Services",
          name: "UI/UX Website Design Company India",
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
          mainEntity: UIUX_FAQS.map((faq) => ({
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
            {
              "@type": "ListItem",
              position: 2,
              name: "UI/UX Website Design Company",
              item: URL,
            },
          ],
        }),
      },
    ],
  }),
  component: UiUxWebsiteDesignCompany,
});

function UiUxWebsiteDesignCompany() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <UiUxDesignPage />
        <CtaBand
          eyebrow="Let's design it right"
          heading="Ready for a UI/UX redesign that pays for itself?"
          body="Send your site or product and the screens that matter. Within two working days you get a scored UX audit, a design scope and a written cost."
          primaryLabel="Get a UI/UX Proposal"
          secondaryLabel="Book a Free UX Audit"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
