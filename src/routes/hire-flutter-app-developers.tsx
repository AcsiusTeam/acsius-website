import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { FlutterDevPage } from "@/components/site/FlutterDevPage";
import { FLT_FAQS } from "@/lib/flutter-dev";

const URL = "https://www.acsius.com/hire-flutter-app-developers";
const TITLE = "Hire Flutter Developers in India, Flutter App Development Company";
const DESCRIPTION =
  "Hire Dedicated Flutter Developers in India on hourly, part-time or full-time basis. Custom Flutter App Development Services. Get a free quote!";

export const Route = createFileRoute("/hire-flutter-app-developers")({
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
          serviceType: "Flutter App Development Services",
          name: "Hire Flutter App Developers in India",
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
          mainEntity: FLT_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hire Flutter App Developers", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HireFlutterAppDevelopers,
});

function HireFlutterAppDevelopers() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <FlutterDevPage />
        <CtaBand
          eyebrow="Let's talk Flutter"
          heading="Ready to Hire Flutter App Developers?"
          body="Tell us what you're building or what needs rescuing. Within two working days you get matched developer profiles, a suggested engagement model and a written monthly or project cost."
          primaryLabel="Hire Flutter Developers"
          secondaryLabel="Request Developer Profiles"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
