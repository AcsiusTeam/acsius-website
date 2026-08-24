import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Newsletter } from "@/components/site/Newsletter";
import { ContactPage } from "@/components/site/ContactPage";
import { CONTACT } from "@/lib/site";

const URL = "https://www.acsius.com/contact";
const TITLE = "Contact ACSIUS Technologies | Website Design & Development Company";
const DESCRIPTION =
  "Contact ACSIUS Technologies in New Delhi. Call +91 98 9176 4802, email info@acsius.com or visit 52-A, 301-3rd Floor, Krishna Complex, Hasanpur, New Delhi-110092. We reply within 4 hours.";

export const Route = createFileRoute("/contact")({
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
          "@type": "ContactPage",
          url: URL,
          name: TITLE,
          description: DESCRIPTION,
          mainEntity: {
            "@type": "Organization",
            name: "ACSIUS Technologies",
            url: "https://www.acsius.com/",
            telephone: CONTACT.phone,
            email: CONTACT.email,
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
            { "@type": "ListItem", position: 2, name: "Contact", item: URL },
          ],
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <ContactPage />
        <CtaBand
          eyebrow="Prefer to talk first?"
          heading="Book a free 30-minute discovery call."
          body="No sales script. You will speak with a strategist and an engineer, and leave with a written scope, timeline and cost."
          primaryLabel="Book a Free Consultation"
          secondaryLabel="Call Our Team"
        />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
