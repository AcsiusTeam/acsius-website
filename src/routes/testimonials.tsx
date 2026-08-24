import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TestimonialsPage } from "@/components/site/TestimonialsPage";

const URL = "https://acsius-elevate-digital.lovable.app/testimonials";
const TITLE = "Testimonials | ACSIUS Technologies";
const DESCRIPTION =
  "Read real client reviews and video testimonials for ACSIUS Technologies. Discover why businesses worldwide trust us for web development, SEO, and digital marketing.";

export const Route = createFileRoute("/testimonials")({
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
  }),
  component: TestimonialsRoute,
});

function TestimonialsRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <TestimonialsPage />
      </main>
      <Footer />
    </div>
  );
}
