import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { SeoCompanyPage } from "@/components/site/SeoCompanyPage";
import { SC_FAQS } from "@/lib/seo-company";

const URL = "https://acsius-elevate-digital.lovable.app/seo-company-india";
const TITLE = "SEO Company India | Best SEO Agency in India — ACSIUS";
const DESCRIPTION =
  "ACSIUS is an SEO agency in India delivering technical SEO, keyword strategy, content and editorial link building with reporting on leads and revenue. Free scored audit before you commit.";

export const Route = createFileRoute("/seo-company-india")({
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
          name: "SEO Company India",
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
          mainEntity: SC_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "SEO Company India", item: URL },
          ],
        }),
      },
    ],
  }),
  component: SeoCompanyRoute,
});

function SeoCompanyRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <SeoCompanyPage />
        <CtaBand
          eyebrow="Let's talk search"
          heading="Ready to Work With an SEO Company You Can Audit?"
          body="Send us your domain and the queries you want to own. We'll score your current search health and come back with a prioritised roadmap and a written investment range — usually within two working days."
          primaryLabel="Get a Free SEO Audit"
          secondaryLabel="Talk to an SEO Specialist"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
