import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { ImageEditingPage } from "@/components/site/ImageEditingPage";
import { IE_FAQS } from "@/lib/image-editing";

const URL = "https://acsius-elevate-digital.lovable.app/image-editing";
const TITLE = "Image Editing Services in India | Image Editing Company | ACSIUS";
const DESCRIPTION =
  "Image editing services India — clipping path, background removal, product retouching and bulk catalogue editing. Image editing company in India with 24h turnaround and free trial edit.";

export const Route = createFileRoute("/image-editing")({
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
          serviceType: "Image Editing Services",
          name: "Image Editing Services in India",
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
          mainEntity: IE_FAQS.map((faq) => ({
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
            { "@type": "ListItem", position: 2, name: "Image Editing Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: ImageEditingRoute,
});

function ImageEditingRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <ImageEditingPage />
        <CtaBand
          eyebrow="Free trial edit"
          heading="Send 10 Images. See the Difference Tomorrow."
          body="Share sample images and the channels you sell on. Within one working day you get an edited sample set and a written per-image rate card with turnaround committed."
          primaryLabel="Get a Free Trial Edit"
          secondaryLabel="Chat on WhatsApp"
        />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
