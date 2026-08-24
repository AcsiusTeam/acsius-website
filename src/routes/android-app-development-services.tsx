import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { AndroidAppPage } from "@/components/site/AndroidAppPage";
import { AND_FAQS } from "@/lib/android-app";

const URL = "https://acsius-elevate-digital.lovable.app/android-app-development-services";
const TITLE = "Android App Development Services | Android Developers India";
const DESCRIPTION =
  "ACSIUS is an Android development company in India. Hire Android app developers for native Kotlin, Jetpack Compose, Flutter and React Native apps with backend, QA and Google Play launch.";

export const Route = createFileRoute("/android-app-development-services")({
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
          serviceType: "Android App Development",
          name: "Android App Development Services",
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
          mainEntity: AND_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Android App Development Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: AndroidAppDevelopmentServices,
});

function AndroidAppDevelopmentServices() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <AndroidAppPage />
        <CtaBand
          eyebrow="Let's talk Android"
          heading="Ready to Ship Your Android App?"
          body="Tell us the idea, the users and the deadline. Within two working days you get a stack recommendation, a phased scope and the Android apps we shipped closest to yours."
          primaryLabel="Get an Android App Scope"
          secondaryLabel="Book a Free Consultation"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
