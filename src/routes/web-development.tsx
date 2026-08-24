import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { WebDevelopmentPage } from "@/components/site/WebDevelopmentPage";
import { WEB_FAQS } from "@/lib/web-development";

const URL = "https://www.acsius.com/web-development";
const TITLE = "Web Development Company in India | Website Development Services — ACSIUS";
const DESCRIPTION =
  "ACSIUS is a web development company in India offering website development services, web development services India, ecommerce, CMS and landing pages. Hire a website development company in India. Free quote.";

export const Route = createFileRoute("/web-development")({
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
          serviceType: "Website Development Services",
          name: "Web Development Company in India",
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
          mainEntity: WEB_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Web Development", item: URL },
          ],
        }),
      },
    ],
  }),
  component: WebDevelopment,
});

function WebDevelopment() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <WebDevelopmentPage />
        <CtaBand
          eyebrow="Let's talk websites"
          heading="Ready to Build Your Website?"
          body="Tell us what you're selling, who you're selling to and when you need it live. Within two working days you get a sitemap, a design approach and a fixed cost range — plus sites we shipped closest to yours."
          primaryLabel="Get a Website Quote"
          secondaryLabel="Talk to a Specialist"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
