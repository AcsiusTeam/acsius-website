import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { ReactDevPage } from "@/components/site/ReactDevPage";
import { CONTACT } from "@/lib/site";
import { RCT_FAQS } from "@/lib/react-dev";

const URL = "https://www.acsius.com/hire-reactjs-developers";
const TITLE = "Hire Dedicated React App Developers, React JS Development Company";
const DESCRIPTION =
  "ACSIUS – React Development Company in India building high-performance, responsive web & mobile apps. Hire Dedicated React Developers today!";

export const Route = createFileRoute("/hire-reactjs-developers")({
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
          serviceType: "React JS Development Services",
          name: "Hire ReactJS Developers in India",
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
          mainEntity: RCT_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hire ReactJS Developers", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HireReactJsDevelopers,
});

function HireReactJsDevelopers() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <ReactDevPage />
        <CtaBand
          eyebrow="Let's talk React"
          heading="Ready to Hire ReactJS Developers?"
          body="Send your repo, Figma or a short brief. Within two working days you get matched React developer profiles, a suggested engagement model and a written monthly or project cost."
          primaryLabel="Hire ReactJS Developers"
          secondaryLabel="Chat on WhatsApp"
          primaryHref="/contact"
          secondaryHref={CONTACT.whatsapp ?? "/contact"}
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
