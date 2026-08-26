import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { WordPressDevPage } from "@/components/site/WordPressDevPage";
import { WPD_FAQS } from "@/lib/wordpress-dev";

const URL = "https://www.acsius.com/hire-wordpress-developers";
const TITLE = "Hire Professional Wordpress Developers, Hire Dedicated Wordpress Developer";
const DESCRIPTION =
  "Hire Professional WordPress Developers from ACSIUS for custom, secure WordPress Website Development Services. Get a free consultation today!";

export const Route = createFileRoute("/hire-wordpress-developers")({
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
          serviceType: "WordPress Website Development Services",
          name: "Hire WordPress Developers in India",
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
          mainEntity: WPD_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hire WordPress Developers", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HireWordPressDevelopers,
});

function HireWordPressDevelopers() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <WordPressDevPage />
        <CtaBand
          eyebrow="Let's talk WordPress"
          heading="Ready to Hire a WordPress Expert?"
          body="Tell us what needs building or fixing. We'll send matched developer profiles with the live WordPress sites they maintained, a suggested engagement model and a clear monthly or project cost — usually within two working days."
          primaryLabel="Hire WordPress Developers"
          secondaryLabel="Request Developer Profiles"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
