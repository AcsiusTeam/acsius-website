import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Newsletter } from "@/components/site/Newsletter";
import { EcommerceSeoPage } from "@/components/site/EcommerceSeoPage";
import { ES_FAQS } from "@/lib/ecommerce-seo";
import { CONTACT } from "@/lib/site";

const URL = "https://www.acsius.com/ecommerce-seo-services";
const TITLE = "E-commerce SEO Services | Best eCommerce SEO Company India — ACSIUS";
const DESCRIPTION =
  "ACSIUS is an eCommerce SEO agency in India growing non-brand organic revenue — catalogue architecture, technical fixes, category and product content, and editorial links. Free store audit first.";

export const Route = createFileRoute("/ecommerce-seo-services")({
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
          serviceType: "E-commerce SEO Services",
          name: "E-commerce SEO Services",
          description: DESCRIPTION,
          areaServed: "IN",
          url: URL,
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
          mainEntity: ES_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "E-commerce SEO Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: EcommerceSeoRoute,
});

function EcommerceSeoRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <EcommerceSeoPage />
        <CtaBand
          eyebrow="Let's talk revenue"
          heading="Ready to Grow Non-Brand Organic Revenue From Your Store?"
          body="Send us your store URL and the categories you want to own. We'll score your catalogue health and come back with a prioritised roadmap and a written investment range — usually within two working days."
          primaryLabel="Get a Free Store SEO Audit"
          primaryHref="/contact"
          secondaryLabel="Chat on WhatsApp"
          secondaryHref={CONTACT.whatsapp}
        />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
