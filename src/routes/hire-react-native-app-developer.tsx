import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { ReactNativeDevPage } from "@/components/site/ReactNativeDevPage";
import { CONTACT } from "@/lib/site";
import { RN_FAQS } from "@/lib/react-native-dev";

const URL = "https://www.acsius.com/hire-react-native-app-developer";
const TITLE = "Hire React Native Developers in India, React Native Development Company";
const DESCRIPTION =
  "Hire React Native Developers in India from ACSIUS, a trusted React Native App Development Company. Get a free consultation today!";

export const Route = createFileRoute("/hire-react-native-app-developer")({
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
          serviceType: "React Native App Development Services",
          name: "Hire React Native Developers in India",
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
          mainEntity: RN_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hire React Native Developers", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HireReactNativeDevelopers,
});

function HireReactNativeDevelopers() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <ReactNativeDevPage />
        <CtaBand
          eyebrow="Let's talk mobile"
          heading="Ready to Hire React Native Developers?"
          body="Tell us what you're launching or what needs rescuing on the stores. Within two working days you get matched developer profiles, a suggested engagement model and a written monthly or project cost."
          primaryLabel="Hire React Native Developers"
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
