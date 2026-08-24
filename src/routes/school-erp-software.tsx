import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { SchoolErpPage } from "@/components/site/SchoolErpPage";
import { ERP_FAQS } from "@/lib/school-erp";

const URL = "https://www.acsius.com/school-erp-software";
const TITLE = "School ERP Software India | Cloud School Management System — ACSIUS";
const DESCRIPTION =
  "Cloud based school ERP software in India for CBSE, ICSE, State and IB schools — admissions, attendance, exams, online fees, transport and parent app. Live in about 30 days.";

export const Route = createFileRoute("/school-erp-software")({
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
          name: "ACSIUS School ERP Software",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Android, iOS",
          description: DESCRIPTION,
          url: URL,
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "0",
            description: "Per-student annual subscription; free demo available",
          },
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
          mainEntity: ERP_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "School ERP Software", item: URL },
          ],
        }),
      },
    ],
  }),
  component: SchoolErpSoftware,
});

function SchoolErpSoftware() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <SchoolErpPage />
        <CtaBand
          eyebrow="See it with your own data"
          heading="Ready to run admissions, fees and classrooms in one system?"
          body="Send us your fee structure and report card format. Within two working days you get a sandbox with your data, a module list and a written cost."
          primaryLabel="Book a Free ERP Demo"
          secondaryLabel="Talk to an ERP Consultant"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
