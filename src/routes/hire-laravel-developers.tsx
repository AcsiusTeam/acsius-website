import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { LaravelDevPage } from "@/components/site/LaravelDevPage";
import { LRV_FAQS } from "@/lib/laravel-dev";

const URL = "https://www.acsius.com/hire-laravel-developers";
const TITLE = "Hire Laravel Developers India | Laravel Development — ACSIUS";
const DESCRIPTION =
  "Hire Laravel developers from ACSIUS — a Laravel web development company in India. Hire dedicated Laravel developers for APIs, SaaS, admin panels and Laravel website development services. Profiles in 48 hours.";

export const Route = createFileRoute("/hire-laravel-developers")({
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
          serviceType: "Laravel Website Development Services",
          name: "Hire Laravel Developers in India",
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
          mainEntity: LRV_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hire Laravel Developers", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HireLaravelDevelopers,
});

function HireLaravelDevelopers() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <LaravelDevPage />
        <CtaBand
          eyebrow="Let's talk Laravel"
          heading="Ready to Hire Laravel Developers?"
          body="Tell us what you're building or what needs rescuing. Within two working days you get matched developer profiles, a suggested engagement model and a written monthly or project cost."
          primaryLabel="Hire Laravel Developers"
          secondaryLabel="Request Developer Profiles"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
