import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { OurWorkPage } from "@/components/site/OurWorkPage";

const URL = "https://www.acsius.com/our-work";
const TITLE = "Our Work | Website Design, Development & SEO Case Studies — ACSIUS";
const DESCRIPTION =
  "Explore ACSIUS portfolio: live website design, web development and SEO case studies for beauty, ecommerce, outdoor and professional services brands.";

export const Route = createFileRoute("/our-work")({
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
          "@type": "CollectionPage",
          name: "Our Work — ACSIUS",
          description: DESCRIPTION,
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
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.acsius.com/",
            },
            { "@type": "ListItem", position: 2, name: "Our Work", item: URL },
          ],
        }),
      },
    ],
  }),
  component: OurWork,
});

function OurWork() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <OurWorkPage />
        <CtaBand
          eyebrow="Ready to start?"
          heading="Let's build your next case study."
          body="Tell us what you are selling, who you are selling to, and when you need it live. Within two working days you get a sitemap, a design approach and a fixed cost range."
          primaryLabel="Discuss on WhatsApp"
          primaryHref="https://wa.me/919891764802"
          secondaryLabel="Email Your Brief"
          secondaryHref="mailto:info@acsius.com?subject=Project%20Brief%20for%20ACSIUS"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
