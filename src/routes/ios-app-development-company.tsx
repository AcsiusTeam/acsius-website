import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { IosAppPage } from "@/components/site/IosAppPage";
import { IOS_FAQS } from "@/lib/ios-app";

const URL = "https://acsius-elevate-digital.lovable.app/ios-app-development-company";
const TITLE = "iOS App Development Company | iOS App Developers India";
const DESCRIPTION =
  "ACSIUS is an iOS app development company in India. Hire iOS app developers for Swift & SwiftUI iPhone, iPad and Watch apps with backend, QA and App Store launch. Free consultation.";

export const Route = createFileRoute("/ios-app-development-company")({
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
          serviceType: "iOS App Development",
          name: "iOS App Development Company in India",
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
          mainEntity: IOS_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "iOS App Development Company", item: URL },
          ],
        }),
      },
    ],
  }),
  component: IosAppDevelopmentCompany,
});

function IosAppDevelopmentCompany() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <IosAppPage />
        <CtaBand
          eyebrow="Let's talk iOS"
          heading="Ready to Ship Your iPhone App?"
          body="Tell us the idea, the audience and the deadline. Within two working days you get a platform recommendation, a phased scope and the iOS apps we shipped closest to yours."
          primaryLabel="Get an iOS App Scope"
          secondaryLabel="Book a Free Consultation"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
