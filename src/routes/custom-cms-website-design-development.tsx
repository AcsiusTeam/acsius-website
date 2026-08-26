import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { CustomCmsPage } from "@/components/site/CustomCmsPage";
import { CONTACT } from "@/lib/site";
import { CMS_FAQS } from "@/lib/custom-cms";

const URL = "https://www.acsius.com/custom-cms-website-design-development";
const TITLE = "Custom CMS Development Company India, Custom CMS Website Design India";
const DESCRIPTION =
  "ACSIUS – Leading CMS Website Design Agency in India offering Custom CMS Development Services tailored to your business. Get a free consultation!";

export const Route = createFileRoute("/custom-cms-website-design-development")({
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
          serviceType: "Custom CMS Website Design and Development",
          name: "Custom CMS Development Services in India",
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
          mainEntity: CMS_FAQS.map((faq) => ({
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
            {
              "@type": "ListItem",
              position: 2,
              name: "Custom CMS Website Design & Development",
              item: URL,
            },
          ],
        }),
      },
    ],
  }),
  component: CustomCmsWebsiteDesignDevelopment,
});

function CustomCmsWebsiteDesignDevelopment() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <CustomCmsPage />
        <CtaBand
          eyebrow="Let's talk content"
          heading="Ready for a CMS Your Team Enjoys Using?"
          body="Send your current site or a list of the content you manage. Within two working days you get a recommended platform, a page and module scope, a timeline and a fixed budget range."
          primaryLabel="Get a Custom CMS Quote"
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
