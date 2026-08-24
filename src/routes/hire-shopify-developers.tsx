import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { ShopifyDevPage } from "@/components/site/ShopifyDevPage";
import { SHOPIFY_FAQS } from "@/lib/shopify-dev";

const URL = "https://acsius-elevate-digital.lovable.app/hire-shopify-developers";
const TITLE = "Hire Shopify Developers | Shopify Web Development Company — ACSIUS";
const DESCRIPTION =
  "Hire dedicated Shopify developers from ACSIUS — a Shopify web development company offering Shopify website development services: custom themes, Hydrogen storefronts, private apps, checkout extensions and migrations. Profiles in 48 hours.";

export const Route = createFileRoute("/hire-shopify-developers")({
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
          serviceType: "Shopify Website Development Services",
          name: "Hire Shopify Developers",
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
          mainEntity: SHOPIFY_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hire Shopify Developers", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HireShopifyDevelopers,
});

function HireShopifyDevelopers() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <ShopifyDevPage />
        <CtaBand
          eyebrow="Let's talk Shopify"
          heading="Ready to Hire Shopify Developers?"
          body="Send your store URL or brief. Within two working days you get matched Shopify developer profiles, a suggested engagement model and a written monthly or project cost."
          primaryLabel="Hire Shopify Developers"
          secondaryLabel="Request Developer Profiles"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
