import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { PhpDevPage } from "@/components/site/PhpDevPage";
import { PHP_FAQS } from "@/lib/php-dev";

const URL = "https://www.acsius.com/hire-php-developers";
const TITLE = "PHP Development Company India, Hire PHP Developers India";
const DESCRIPTION =
  "Hire Dedicated PHP Developers from ACSIUS, a trusted PHP Development Company in India, for secure & scalable web apps. Get a free quote today!";

export const Route = createFileRoute("/hire-php-developers")({
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
          serviceType: "PHP Development Services India",
          name: "Hire PHP Developers in India",
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
          mainEntity: PHP_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hire PHP Developers", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HirePhpDevelopers,
});

function HirePhpDevelopers() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <PhpDevPage />
        <CtaBand
          eyebrow="Let's talk PHP"
          heading="Ready to Hire PHP Developers?"
          body="Tell us what you're building or what needs rescuing. Within two working days you get matched developer profiles, a suggested engagement model and a written monthly or project cost."
          primaryLabel="Hire PHP Developers"
          secondaryLabel="Request Developer Profiles"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
