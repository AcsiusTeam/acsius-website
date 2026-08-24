import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { HospitalPage } from "@/components/site/HospitalPage";
import { HMS_FAQS } from "@/lib/hospital";

const URL = "https://acsius-elevate-digital.lovable.app/hospital-management-software";
const TITLE = "Hospital Management Software India | Cloud HMS with Billing — ACSIUS";
const DESCRIPTION =
  "Cloud based hospital management software for Indian hospitals and clinics — OPD, IPD, EMR, pharmacy, lab, insurance and billing in one system. Live in about 24 days.";

export const Route = createFileRoute("/hospital-management-software")({
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
          name: "ACSIUS Hospital Management Software",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Android, iOS",
          description: DESCRIPTION,
          url: URL,
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "0",
            description: "Monthly subscription or one-time licence; free demo available",
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
          mainEntity: HMS_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hospital Management Software", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HospitalManagementSoftware,
});

function HospitalManagementSoftware() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <HospitalPage />
        <CtaBand
          eyebrow="See it with your own tariff sheet"
          heading="Ready to run OPD, IPD, pharmacy and billing from one system?"
          body="Send us your department list and tariff sheet. Within two working days you get a sandbox with your data, a module list and a written cost."
          primaryLabel="Book a Free HMS Demo"
          secondaryLabel="Talk to a Hospital IT Consultant"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
