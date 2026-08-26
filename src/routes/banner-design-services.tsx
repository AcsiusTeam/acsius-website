import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { BannerDesignPage } from "@/components/site/BannerDesignPage";
import { BD_FAQS } from "@/lib/banner-design";

const URL = "https://www.acsius.com/banner-design-services";
const TITLE = "Banner Design Service India, Brochure Design Company India";
const DESCRIPTION =
  "Boost your brand visibility with ACSIUS, a trusted Brochure Design Company in India. Creative Banner Design Services too. Get a free quote today!";

export const Route = createFileRoute("/banner-design-services")({
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
          serviceType: "Banner, Flyer and Brochure Design Services",
          name: "Banner Design Service India",
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
          mainEntity: BD_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Banner Design Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: BannerDesignServices,
});

function BannerDesignServices() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <BannerDesignPage />
        <CtaBand
          eyebrow="Send the brief"
          heading="Ready for Creative That Actually Converts?"
          body="Share your offer, the sizes you need and where it will run. Within one working day you get a written scope with deliverables, timeline and a fixed cost."
          primaryLabel="Get a Design Quote"
          secondaryLabel="Chat on WhatsApp"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
