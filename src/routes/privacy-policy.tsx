import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PrivacyPage } from "@/components/site/PrivacyPage";

const URL = "https://www.acsius.com/privacy-policy";
const TITLE = "Privacy Policy | ACSIUS Technologies";
const DESCRIPTION =
  "Learn how ACSIUS collects, uses, and protects your personal information. Read our transparent and secure Privacy Policy for complete user data safety.";

export const Route = createFileRoute("/privacy-policy")({
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
  component: PrivacyRoute,
});

function PrivacyRoute() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <PrivacyPage />
      </main>
      <Footer />
    </div>
  );
}
