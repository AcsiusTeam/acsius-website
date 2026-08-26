import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { WixDevPage } from "@/components/site/WixDevPage";
import { CONTACT } from "@/lib/site";
import { WIX_FAQS } from "@/lib/wix-dev";

const URL = "https://www.acsius.com/hire-wix-developers";
const TITLE = "Hire Dedicated Wix Developers, Hire Wix Developer";
const DESCRIPTION =
  "Hire Expert Wix Developers from ACSIUS for custom, professional Wix website development. Get a free consultation today!";

export const Route = createFileRoute("/hire-wix-developers")({
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
          serviceType: "Wix Website Development Services",
          name: "Hire Wix Developers in India",
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
          mainEntity: WIX_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hire Wix Developers", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HireWixDevelopers,
});

function HireWixDevelopers() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <WixDevPage />
        <CtaBand
          eyebrow="Let's talk Wix"
          heading="Ready to Hire Wix Developers?"
          body="Send your Wix URL or a note on what you're building. Within two working days you get matched developer profiles, a suggested engagement model and a written monthly or project cost."
          primaryLabel="Hire Wix Developers"
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
