import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { AwsDevPage } from "@/components/site/AwsDevPage";
import { AWS_FAQS } from "@/lib/aws-dev";

const URL = "https://www.acsius.com/hire-aws-developers";
const TITLE = "Hire AWS Developers India, AWS App Development Services";
const DESCRIPTION =
  "Hire AWS Certified Developers on hourly, part-time or full-time basis. Trusted AWS App Development Services by ACSIUS. Get a free quote now!";

export const Route = createFileRoute("/hire-aws-developers")({
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
          serviceType: "AWS App Development Services",
          name: "Hire AWS Developers in India",
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
          mainEntity: AWS_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Hire AWS Developers", item: URL },
          ],
        }),
      },
    ],
  }),
  component: HireAwsDevelopers,
});

function HireAwsDevelopers() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <AwsDevPage />
        <CtaBand
          eyebrow="Let's talk AWS"
          heading="Ready to Hire AWS Developers?"
          body="Tell us what you're building or migrating. Within two working days you get matched certified developer profiles, a suggested engagement model and a written monthly or project cost with an AWS run-rate estimate."
          primaryLabel="Hire AWS Developers"
          secondaryLabel="Talk to an AWS Consultant"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
