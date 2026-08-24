import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { EcommerceDevPage } from "@/components/site/EcommerceDevPage";
import { ECOM_FAQS } from "@/lib/ecommerce-dev";

const URL = "https://www.acsius.com/ecommerce-website-developement";
const TITLE = "eCommerce Website Development Services India | ACSIUS";
const DESCRIPTION =
  "eCommerce website design services in India from ACSIUS — an eCommerce web development company building Shopify, WooCommerce, Magento and headless stores with payments, logistics and CRO built in.";

export const Route = createFileRoute("/ecommerce-website-developement")({
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
          serviceType: "eCommerce Website Development Services",
          name: "eCommerce Website Design & Development",
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
          mainEntity: ECOM_FAQS.map((faq) => ({
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
              name: "eCommerce Website Development",
              item: URL,
            },
          ],
        }),
      },
    ],
  }),
  component: EcommerceWebsiteDevelopment,
});

function EcommerceWebsiteDevelopment() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <EcommerceDevPage />
        <CtaBand
          eyebrow="Let's talk commerce"
          heading="Ready to build an eCommerce website that sells?"
          body="Share your catalogue size, platform preference and target launch date. Within two working days you get a platform recommendation, a milestone plan and a written cost."
          primaryLabel="Get an eCommerce Quote"
          secondaryLabel="Request a Proposal"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
