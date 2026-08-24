import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { MobileAppPage } from "@/components/site/MobileAppPage";
import { MAD_FAQS } from "@/lib/mobile-app";

const URL = "https://acsius-elevate-digital.lovable.app/mobile-app-development-services";
const TITLE = "Mobile App Development Company in India | ACSIUS";
const DESCRIPTION =
  "Mobile app development services from ACSIUS — a top mobile app development company in India. iOS, Android, React Native app development with backend, QA and store launch. Free consultation.";

export const Route = createFileRoute("/mobile-app-development-services")({
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
          serviceType: "Mobile App Development Services",
          name: "Mobile App Development Company in India",
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
          mainEntity: MAD_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Mobile App Development Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: MobileAppDevelopmentServices,
});

function MobileAppDevelopmentServices() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <MobileAppPage />
        <CtaBand
          eyebrow="Let's talk apps"
          heading="Ready to Build Your Mobile App?"
          body="Tell us the idea, the audience and the deadline. Within two working days you get a platform recommendation, a phased scope and a fixed cost range — plus the apps we shipped closest to yours."
          primaryLabel="Get an App Estimate"
          secondaryLabel="Book a Free Consultation"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
