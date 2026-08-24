import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { PythonDevPage } from "@/components/site/PythonDevPage";
import { PY_FAQS } from "@/lib/python-dev";

const URL = "https://www.acsius.com/hire-python-developers";
const TITLE = "Hire Python Developers India | Dedicated Python Programmers — ACSIUS";
const DESCRIPTION =
  "Hire dedicated Python developers in India from ACSIUS — senior Python programmers for hire across Django, FastAPI, data pipelines, automation and AI. Profiles in 48 hours.";

export const Route = createFileRoute("/hire-python-developers")({
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
          serviceType: "Python Development Services",
          name: "Hire Python Developers in India",
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
          mainEntity: PY_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hire Python Developers", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HirePythonDevelopers,
});

function HirePythonDevelopers() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <PythonDevPage />
        <CtaBand
          eyebrow="Let's talk Python"
          heading="Ready to Hire Python Developers?"
          body="Tell us what you're building — an API, a data pipeline, an automation or an AI feature. Within two working days you get matched developer profiles, a suggested engagement model and a written monthly or project cost."
          primaryLabel="Hire Python Developers"
          secondaryLabel="Request Developer Profiles"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
