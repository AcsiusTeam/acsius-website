import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { ContentWritingPage } from "@/components/site/ContentWritingPage";
import { CW_FAQS } from "@/lib/content-writing";

const URL = "https://www.acsius.com/content-writing-services";
const TITLE = "Content Writing Services India | Content Writing Company | ACSIUS";
const DESCRIPTION =
  "ACSIUS is a content writing company in India — website copy, blogs, product descriptions, case studies and email sequences written by sector writers and edited by humans.";

export const Route = createFileRoute("/content-writing-services")({
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
          serviceType: "Content Writing Services",
          name: "Content Writing Services India",
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
          mainEntity: CW_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Content Writing Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: ContentWritingServicesRoute,
});

function ContentWritingServicesRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <ContentWritingPage />
        <CtaBand
          eyebrow="Let's talk content"
          heading="Want a Sample Written on Your Topic?"
          body="Send one page or one blog topic. We'll return a sample draft and a content calendar you can act on — no obligation."
          primaryLabel="Get a Free Content Sample"
          secondaryLabel="Book a Strategy Call"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
