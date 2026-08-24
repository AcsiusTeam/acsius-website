import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TermsPage } from "@/components/site/TermsPage";

const URL = "https://www.acsius.com/our-terms-conditions";
const TITLE = "Our Terms & Conditions – Know Before You Use | ACSIUS";
const DESCRIPTION =
  "Read the Terms & Conditions of Service for ACSIUS Technologies Pvt. Ltd. covering use of materials, disclaimers, liability, payments and refund policy.";

export const Route = createFileRoute("/our-terms-conditions")({
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
  component: TermsRoute,
});

function TermsRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <TermsPage />
      </main>
      <Footer />
    </div>
  );
}
