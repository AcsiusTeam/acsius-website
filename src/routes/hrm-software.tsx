import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { HrmPage } from "@/components/site/HrmPage";
import { HRM_FAQS } from "@/lib/hrm";

const URL = "https://www.acsius.com/hrm-software";
const TITLE = "Best HRM Software in India | Cloud HR Management System — ACSIUS";
const DESCRIPTION =
  "Cloud based HRM software for Indian businesses — employee records, onboarding, attendance, leave, performance, claims and an employee self-service app. Live in about 18 days.";

export const Route = createFileRoute("/hrm-software")({
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
          "@type": "SoftwareApplication",
          name: "ACSIUS HRM Software",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Android, iOS",
          description: DESCRIPTION,
          url: URL,
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "0",
            description: "Per-employee monthly subscription; free demo available",
          },
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
          mainEntity: HRM_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "HRM Software", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HrmSoftware,
});

function HrmSoftware() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <HrmPage />
        <CtaBand
          eyebrow="See it with your own employee data"
          heading="Ready to run HR from one system instead of six sheets?"
          body="Send us your employee list and leave policy. Within two working days you get a sandbox with your data, a module list and a written cost."
          primaryLabel="Book a Free HRM Demo"
          secondaryLabel="Talk to an HR Consultant"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
