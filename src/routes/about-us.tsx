import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { AboutPage } from "@/components/site/AboutPage";
import { ABOUT_FAQS } from "@/lib/about";

const URL = "https://acsius-elevate-digital.lovable.app/about-us";
const TITLE = "About ACSIUS Technologies | Web Design & Development Company";
const DESCRIPTION =
  "Founded in 2010 by Mr. Arun Singh, ACSIUS Technologies is a New Delhi web design, development and digital growth company — 40+ in-house specialists, 3000+ projects, 35+ countries.";

export const Route = createFileRoute("/about-us")({
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
          "@type": "AboutPage",
          url: URL,
          name: TITLE,
          description: DESCRIPTION,
          mainEntity: {
            "@type": "Organization",
            name: "ACSIUS Technologies",
            url: "https://acsius-elevate-digital.lovable.app/",
            foundingDate: "2010",
            founder: {
              "@type": "Person",
              name: "Arun Singh",
              jobTitle: "Founder & CEO",
            },
            numberOfEmployees: { "@type": "QuantitativeValue", minValue: 40 },
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
          mainEntity: ABOUT_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "About Us", item: URL },
          ],
        }),
      },
    ],
  }),
  component: AboutUs,
});

function AboutUs() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <AboutPage />
        <CtaBand
          eyebrow="Let's build something worth shipping"
          heading="Ready to talk to the people who would actually build it?"
          body="Book a 30-minute discovery call with our founder-led team. You leave with a written scope, timeline and cost — no obligation."
          primaryLabel="Book a Free Consultation"
          secondaryLabel="Talk to Our Team"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
