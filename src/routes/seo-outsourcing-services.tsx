import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Newsletter } from "@/components/site/Newsletter";
import { SeoOutsourcingPage } from "@/components/site/SeoOutsourcingPage";
import { SO_FAQS } from "@/lib/seo-outsourcing";
import { CONTACT } from "@/lib/site";

const URL = "https://www.acsius.com/seo-outsourcing-services";
const TITLE = "SEO Outsourcing Company India | White-Label SEO Services — ACSIUS";
const DESCRIPTION =
  "ACSIUS is an SEO outsourcing company in India for agencies and in-house teams — white-label audits, technical fixes, content, link building and reporting under your brand. Get a partner rate card.";

export const Route = createFileRoute("/seo-outsourcing-services")({
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
          serviceType: "SEO Outsourcing Services",
          name: "SEO Outsourcing Company India",
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
          mainEntity: SO_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "SEO Outsourcing Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: SeoOutsourcingRoute,
});

function SeoOutsourcingRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <SeoOutsourcingPage />
        <CtaBand
          eyebrow="Partner with us"
          heading="Ready to Outsource SEO Delivery Without Losing Control?"
          body="Send one client domain and the workstream you want covered. We'll return a sample white-label audit summary, a capacity plan and a partner rate card — usually within two working days."
          primaryLabel="Become a Delivery Partner"
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
