import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Newsletter } from "@/components/site/Newsletter";
import { SeoDelhiPage } from "@/components/site/SeoDelhiPage";
import { SD_FAQS } from "@/lib/seo-delhi";
import { CONTACT } from "@/lib/site";

const URL = "https://www.acsius.com/seo-company-in-delhi";
const TITLE = "SEO Company in Delhi | Best SEO Services in Delhi — ACSIUS";
const DESCRIPTION =
  "ACSIUS is an SEO company in Delhi delivering technical SEO, keyword strategy, content and editorial link building, with reporting on calls and revenue. Free scored audit first.";

export const Route = createFileRoute("/seo-company-in-delhi")({
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
          serviceType: "SEO Services",
          name: "SEO Company in Delhi",
          description: DESCRIPTION,
          areaServed: { "@type": "City", name: "Delhi" },
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
          mainEntity: SD_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "SEO Company in Delhi", item: URL },
          ],
        }),
      },
    ],
  }),
  component: SeoDelhiRoute,
});

function SeoDelhiRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <SeoDelhiPage />
        <CtaBand
          eyebrow="Let's talk search"
          heading="Ready to Work With an SEO Company in Delhi You Can Audit?"
          body="Send us your domain and the Delhi queries you want to own. We'll score your current search health and come back with a prioritised roadmap and a written investment range — usually within two working days."
          primaryLabel="Get a Free SEO Audit"
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
