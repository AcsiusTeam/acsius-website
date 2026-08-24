import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { WindowsAppPage } from "@/components/site/WindowsAppPage";
import { WIN_FAQS } from "@/lib/windows-app";

const URL = "https://acsius-elevate-digital.lovable.app/windows-app-development-services";
const TITLE = "Windows App Development Services | Windows App Developers";
const DESCRIPTION =
  "ACSIUS is a Windows app development company in India. Hire Windows app developers for WinUI 3, .NET and WPF desktop apps with backend, QA, MSIX packaging and Microsoft Store launch.";

export const Route = createFileRoute("/windows-app-development-services")({
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
          serviceType: "Windows App Development",
          name: "Windows App Development Services",
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
          mainEntity: WIN_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Windows App Development Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: WindowsAppDevelopmentServices,
});

function WindowsAppDevelopmentServices() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <WindowsAppPage />
        <CtaBand
          eyebrow="Let's talk Windows"
          heading="Ready to Ship Your Windows App?"
          body="Tell us the workflow, the users and the deadline. Within two working days you get a framework recommendation, a phased scope and the desktop apps we shipped closest to yours."
          primaryLabel="Get a Windows App Scope"
          secondaryLabel="Book a Free Consultation"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
