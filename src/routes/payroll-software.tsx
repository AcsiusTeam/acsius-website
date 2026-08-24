import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { PayrollPage } from "@/components/site/PayrollPage";
import { PAY_FAQS } from "@/lib/payroll";

const URL = "https://acsius-elevate-digital.lovable.app/payroll-software";
const TITLE = "Payroll Software in India | Cloud Payroll for Business — ACSIUS";
const DESCRIPTION =
  "Cloud payroll software for businesses in India — salary structures, attendance inputs, PF, ESI, PT and TDS compliance, payslips and employee self-service. Live in about 21 days.";

export const Route = createFileRoute("/payroll-software")({
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
          name: "ACSIUS Payroll Software",
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
          mainEntity: PAY_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Payroll Software", item: URL },
          ],
        }),
      },
    ],
  }),
  component: PayrollSoftware,
});

function PayrollSoftware() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <PayrollPage />
        <CtaBand
          eyebrow="See it with your own salary sheet"
          heading="Ready to close payroll in hours instead of days?"
          body="Send us last month's salary sheet and CTC structure. Within two working days you get a sandbox with your data, a module list and a written cost."
          primaryLabel="Book a Free Payroll Demo"
          secondaryLabel="Talk to a Payroll Consultant"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
