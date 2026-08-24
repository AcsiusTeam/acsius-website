import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ClientMarquee } from "@/components/site/ClientMarquee";
import { Expertise } from "@/components/site/Expertise";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { SuccessStories } from "@/components/site/SuccessStories";
import { WhyAcsius } from "@/components/site/WhyAcsius";
import { TechEcosystem } from "@/components/site/TechEcosystem";
import { Industries } from "@/components/site/Industries";
import { SeoContent } from "@/components/site/SeoContent";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { CONTACT } from "@/lib/site";

const TITLE = "Website Development Company in India | ACSIUS Technologies";
const DESCRIPTION =
  "ACSIUS is a website designing and development company in India offering web design services, website development services, WordPress, Shopify, Laravel and React builds. 3000+ projects since 2010.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "ACSIUS Technologies",
          description: DESCRIPTION,
          telephone: CONTACT.phone,
          email: CONTACT.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "52-A, 301-3rd Floor, Krishna Complex, Hasanpur",
            addressLocality: "New Delhi",
            postalCode: "110092",
            addressCountry: "IN",
          },
          areaServed: "Worldwide",
          foundingDate: "2010",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What web design services in India does ACSIUS offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ACSIUS offers website design, UI/UX design, responsive website development, WordPress, Shopify and Magento ecommerce development, Laravel and React web applications, and SEO — delivered from New Delhi for clients in 35+ countries.",
              },
            },
            {
              "@type": "Question",
              name: "How much does website development in India cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Business websites typically start around a fixed scope package, while custom web applications and ecommerce platforms are quoted after a discovery call. Every proposal lists scope, milestones and timelines in writing before work starts.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to design and develop a website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A marketing website usually takes 4–8 weeks from discovery to launch. Ecommerce stores and custom web applications typically run 8–16 weeks depending on integrations and content volume.",
              },
            },
            {
              "@type": "Question",
              name: "Why choose ACSIUS as your website designing company in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Since 2010 ACSIUS has delivered 3000+ projects with a named delivery lead, sprint demos, Core Web Vitals budgets enforced before launch, SEO-ready markup and structured data, plus post-launch care plans.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <Hero />
        <ClientMarquee />
        <Expertise />
        <Process />
        <Portfolio />
        <Testimonials />
        <SuccessStories />
        <WhyAcsius />
        <TechEcosystem />
        <Industries />
        <SeoContent />
        <CtaBand />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
