type Block =
  | { kind: "p"; html: string }
  | { kind: "h2"; text: string }
  | { kind: "ul"; items: string[] };

const INTRO: Block[] = [
  {
    kind: "p",
    html: "We collect and use your information responsibly, transparently, and only when necessary.",
  },
  {
    kind: "p",
    html: "Our systems follow strict security standards to keep your data safe and protected.",
  },
  {
    kind: "p",
    html: "You can trust us to handle your personal information with care and complete confidentiality.",
  },
  { kind: "p", html: "<strong>PLEASE READ CAREFULLY BEFORE USING THIS SITE</strong>" },
  {
    kind: "p",
    html: "This Privacy Policy explains how <strong>ACSIUS Technologies Private Limited (&ldquo;ACSIUS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)</strong> collects, uses, discloses, and protects your personal information when you interact with our website and services.",
  },
];

const SECTIONS: Block[] = [
  { kind: "h2", text: "1. Collection of Personal Information" },
  {
    kind: "p",
    html: "ACSIUS collects Personal Information only when it is necessary to perform our functions or deliver our services.",
  },
  {
    kind: "p",
    html: "<strong>&ldquo;Collection&rdquo;</strong> refers to gathering, obtaining, or acquiring information&mdash;by any method&mdash;that can identify an individual.",
  },
  {
    kind: "p",
    html: "We collect Personal Information for the following purposes:",
  },
  {
    kind: "ul",
    items: [
      "To provide products, services, and customer support",
      "To process payments, billing, and account management",
      "To improve website performance and user experience",
      "To communicate with users regarding updates, offers, or service-related information",
    ],
  },
  {
    kind: "p",
    html: "ACSIUS does <strong>not</strong> collect any <strong>Sensitive Personal Information</strong> without explicit consent, and such collection will only occur under exceptional circumstances.",
  },

  { kind: "h2", text: "2. Use of Personal Information" },
  {
    kind: "p",
    html: "By using our website or services, users consent to the use of their non-sensitive Personal Information for <strong>primary purposes</strong>, such as service delivery and account management.",
  },
  {
    kind: "p",
    html: "For <strong>secondary purposes</strong>&mdash;including marketing, promotions, and analytics&mdash;ACSIUS will obtain additional consent when required.",
  },
  { kind: "p", html: "<strong>Direct Marketing</strong>" },
  {
    kind: "ul",
    items: [
      "Users will always have the option to <strong>opt-out</strong>",
      "All opt-out requests will be <strong>promptly respected</strong>",
      "We ensure all Personal Information used for marketing is accurate, complete, and up to date",
    ],
  },

  { kind: "h2", text: "3. Disclosure of Personal Information" },
  {
    kind: "p",
    html: "ACSIUS may disclose Personal Information to <strong>trusted third-party service providers</strong> to support essential operations such as:",
  },
  {
    kind: "ul",
    items: [
      "Billing and payment processing",
      "Customer relationship management",
      "Order fulfillment",
      "Technical support and hosting services",
    ],
  },
  {
    kind: "p",
    html: "Such disclosures:",
  },
  {
    kind: "ul",
    items: [
      "Will remain within the user&rsquo;s reasonable expectations",
      "Will be communicated to users when required",
      "Will adhere to ACSIUS&rsquo;s Privacy Policy",
    ],
  },
  {
    kind: "p",
    html: "We take reasonable steps to ensure that all third parties handle Personal Information securely and in compliance with industry standards.",
  },

  { kind: "h2", text: "4. Protection of Personal Information" },
  {
    kind: "p",
    html: "ACSIUS implements appropriate administrative, technical, and physical safeguards to protect Personal Information against:",
  },
  {
    kind: "ul",
    items: [
      "Unauthorized access",
      "Misuse or alteration",
      "Loss or disclosure",
    ],
  },

  { kind: "h2", text: "5. User Rights" },
  {
    kind: "p",
    html: "Users may request the following at any time:",
  },
  {
    kind: "ul",
    items: [
      "Access to their Personal Information",
      "Correction or updating of inaccurate data",
      "Withdrawal of consent for marketing or secondary use",
      "Deletion of their Personal Information (subject to legal or contractual obligations)",
    ],
  },

  { kind: "h2", text: "6. Changes to This Privacy Policy" },
  {
    kind: "p",
    html: "ACSIUS reserves the right to update or modify this Privacy Policy at any time. Changes will be posted on this page with the updated revision date.",
  },
  {
    kind: "p",
    html: "Continued use of the website after such changes constitutes acceptance of the revised policy.",
  },

  { kind: "h2", text: "7. Contact Us" },
  {
    kind: "p",
    html: "For any questions about this Privacy Policy or the handling of your Personal Information, please contact:",
  },
  {
    kind: "p",
    html: "<strong>ACSIUS Technologies Pvt. Ltd.</strong><br /><strong>Email:</strong> <a href=\"mailto:info@acsius.com\" class=\"text-ember hover:underline\">info@acsius.com</a><br /><strong>Website:</strong> <a href=\"https://www.acsius.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-ember hover:underline\">www.acsius.com</a>",
  },
];

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.kind === "h2") {
          return (
            <h2
              key={i}
              className="mt-12 mb-4 font-display text-xl font-semibold text-foreground first:mt-0 sm:text-2xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.kind === "ul") {
          return (
            <ul key={i} className="mb-5 space-y-2 pl-5">
              {block.items.map((item, j) => (
                <li key={j} className="list-disc text-base leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className="mb-5 text-base leading-relaxed text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_a]:text-ember [&_a]:hover:underline"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        );
      })}
    </>
  );
}

export function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 70% at 15% 0%, oklch(0.55 0.16 255 / 0.45), transparent 65%), radial-gradient(50% 60% at 90% 20%, oklch(0.68 0.17 45 / 0.28), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Legal</p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Your Privacy, Our Priority
          </h1>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:p-10">
            <Blocks blocks={INTRO} />
            <hr className="my-10 border-border/70" />
            <Blocks blocks={SECTIONS} />
          </div>
        </div>
      </section>
    </>
  );
}
