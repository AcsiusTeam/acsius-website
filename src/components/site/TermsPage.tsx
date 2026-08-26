type Block =
  | { kind: "p"; html: string }
  | { kind: "h2"; text: string }
  | { kind: "ul"; items: string[] };

const INTRO: Block[] = [
  {
    kind: "p",
    html: "Welcome to ACSIUS Technologies Pvt. Ltd. By accessing and using our website and services, you agree to the Terms &amp; Conditions outlined below. These terms are designed to protect both you as a valued client and us as your trusted service provider. Please review them carefully before proceeding.",
  },
  { kind: "p", html: "<strong>Please Read Carefully Before Using This Site</strong>" },
  {
    kind: "p",
    html: "These Terms &amp; Conditions of Service are a legal agreement between you and <strong>ACSIUS Technologies Pvt. Ltd.</strong>, hereinafter referred to as the <strong>“Service Provider”</strong>.",
  },
  {
    kind: "p",
    html: "The purpose of these Terms &amp; Conditions is to ensure the proper use of the website <strong>www.acsius.com</strong> and to govern the use of services provided by ACSIUS, whether fee-based or free of charge.",
  },
  {
    kind: "p",
    html: "Please print a copy for your records and carefully read these Terms &amp; Conditions. If you do not agree with ACSIUS’s Terms &amp; Conditions, you are not authorized to access or use this website and its services.",
  },
  {
    kind: "p",
    html: "Your use of this website or any services provided indicates that you agree to be bound by these Terms &amp; Conditions, as well as any additional terms specific to other services. These Terms &amp; Conditions may be updated periodically. Continued use of this website and services constitutes acceptance of the modified Terms &amp; Conditions.",
  },
];

const SECTIONS: Block[] = [
  { kind: "h2", text: "1. Restrictions on Use of Materials" },
  {
    kind: "p",
    html: "This website is the property of <strong>ACSIUS Technologies Pvt. Ltd.</strong>. You are not permitted to reproduce, republish, upload, post, transmit, or distribute any material from this website without prior written consent from ACSIUS.",
  },
  {
    kind: "p",
    html: "You may download one copy of the material on your personal computer for private domestic use only, provided you keep intact all copyright and proprietary notices.",
  },
  {
    kind: "p",
    html: "Graphics and images on ACSIUS’s website are protected by copyright and may not be reproduced or appropriated without written consent. Modification or use of the materials for any other purpose constitutes a violation of ACSIUS’s intellectual property rights.",
  },

  { kind: "h2", text: "2. No Representation" },
  {
    kind: "p",
    html: "This website has been created by ACSIUS in good faith. However, the content may not be representative, and no warranty is given regarding its completeness or accuracy.",
  },
  {
    kind: "p",
    html: "You must verify the information contained on this site by contacting ACSIUS directly. Investment or business decisions must not be made solely based on the content of this website.",
  },

  { kind: "h2", text: "3. Disclaimer" },
  {
    kind: "p",
    html: "The materials displayed on ACSIUS’s website are provided on an <strong>“as is”</strong> basis without any warranties to the fullest extent permissible.",
  },
  {
    kind: "p",
    html: "ACSIUS disclaims all warranties, express or implied, including but not limited to warranties of merchantability, satisfactory quality, fitness for a particular purpose, and non-infringement.",
  },
  {
    kind: "p",
    html: "ACSIUS does not warrant that this website will be error-free, that defects will be corrected, or that the server hosting this website is free of viruses or harmful elements. No warranty is given as to the accuracy, reliability, or results of the use of materials on this website.",
  },

  { kind: "h2", text: "4. Limitation of Liability" },
  {
    kind: "p",
    html: "<strong>4.1</strong> Under no circumstances shall ACSIUS be liable for any special, incidental, or consequential damages resulting from the use or misuse of the materials on this website.",
  },
  { kind: "p", html: "ACSIUS is not liable for materials provided by third parties under their own copyright." },
  {
    kind: "p",
    html: "If any liability is established, ACSIUS’s total liability for losses, damages, or expenses, whether in contract, tort, or otherwise, shall not exceed the amount paid by you to access this website.",
  },
  {
    kind: "p",
    html: "<strong>4.2</strong> Any documents provided by ACSIUS may include technical inaccuracies or errors. Corrections may be made from time to time without notice.",
  },
  {
    kind: "p",
    html: "<strong>4.3</strong> The content of this website is provided for informational purposes only and on an “as is” basis. ACSIUS does not guarantee the accuracy, reliability, or authenticity of the information, nor is it responsible for information or services appearing on linked websites.",
  },

  { kind: "h2", text: "5. Modifications" },
  {
    kind: "p",
    html: "ACSIUS reserves the right to change, modify, or remove content from any section of this website at its sole discretion and without notice.",
  },
  { kind: "p", html: "Access to this website may be denied to any individual at any time without liability." },

  { kind: "h2", text: "6. Suggestions, Comments, and Feedback" },
  {
    kind: "p",
    html: "<strong>6.1</strong> Any information, questions, comments, or suggestions provided to ACSIUS shall be deemed non-confidential. ACSIUS may reproduce, use, disclose, and distribute such information without limitation.",
  },
  {
    kind: "p",
    html: "<strong>6.2</strong> Communications sent via email or this website are non-confidential. ACSIUS may reproduce, publish, or use them for any purpose, including developing or marketing goods and services.",
  },

  { kind: "h2", text: "7. Links to Other Sites" },
  {
    kind: "p",
    html: "<strong>7.1</strong> This website may contain links to external websites not maintained by ACSIUS. Likewise, other websites may link to ACSIUS’s website. ACSIUS disclaims responsibility for the content of such websites and shall not be liable for any consequences arising from their use. Accessing linked websites is at your own risk.",
  },
  {
    kind: "p",
    html: "<strong>7.2</strong> Third parties wishing to link to this website must obtain prior written approval from ACSIUS. Permission, if granted, will be subject to ACSIUS’s discretion, including whether reciprocal links are required.",
  },

  { kind: "h2", text: "8. Payments and Refund Policy" },
  {
    kind: "p",
    html: "<strong>8.1</strong> SEO and Internet marketing-related services require upfront monthly payment. These include on-page SEO, off-page SEO, link building, social media marketing, etc.",
  },
  {
    kind: "p",
    html: "For services such as translation, copywriting, web design, or web development, milestone-based payments will apply. An initial advance of 50%, or as per the agreed payment milestones, may be required to initiate the work.",
  },
  { kind: "p", html: "<strong>8.2</strong> If you cancel a service:" },
  {
    kind: "ul",
    items: [
      "SEO services will be delivered until the end of the current month and stopped thereafter.",
      "Other services (translation, copywriting, web design, development) will be stopped immediately.",
    ],
  },
  { kind: "p", html: "Payments made in advance are <strong>non-refundable</strong>." },
  {
    kind: "p",
    html: "<strong>8.3</strong> ACSIUS reserves the right to cancel any service immediately if payment is not received within seven (7) days of billing.",
  },
  {
    kind: "p",
    html: "<strong>8.4</strong> <strong>No refunds</strong> will be available after renewal. Services will continue until the end of the month paid for.",
  },
  {
    kind: "p",
    html: "<strong>8.5</strong> Website design services are provided under defined plans or customized packages. Services will be delivered as agreed in the selected package.",
  },
  {
    kind: "p",
    html: "<strong>8.6</strong> Any additional features, edits, or redesigns requested will incur extra charges.",
  },
  {
    kind: "p",
    html: "<strong>8.7</strong> <strong>No refunds</strong> will be issued once website design services have been delivered. Additional services requested will be chargeable.",
  },

  { kind: "h2", text: "9. Limitation of Liability" },
  {
    kind: "p",
    html: "If you do not agree with these Terms &amp; Conditions, or if you are not satisfied with this website or any services, your sole remedy is to discontinue use of the website and services.",
  },

  { kind: "h2", text: "10. Use of Services / Website" },
  {
    kind: "p",
    html: "<strong>10.1</strong> ACSIUS will provide the services agreed upon under the chosen plan, subject to the applicable fees.",
  },
  {
    kind: "p",
    html: "<strong>10.2</strong> ACSIUS reserves the right to modify, suspend, disable, or terminate the website or services at its sole discretion and without liability. Service performance depends on external factors such as search engine algorithms, for which ACSIUS is not responsible.",
  },
  {
    kind: "p",
    html: "<strong>10.3</strong> You are solely responsible for both authorized and unauthorized access to the information you provide to ACSIUS. Unauthorized access must be reported immediately.",
  },
  {
    kind: "p",
    html: "<strong>10.4</strong> By providing FTP access or login details, you authorize ACSIUS to make changes on your behalf. ACSIUS shall not be held responsible for errors caused by you or any third party attempting to make corrections.",
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
            className="mb-5 text-base leading-relaxed text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        );
      })}
    </>
  );
}

export function TermsPage() {
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
            Our Terms &amp; Conditions – Know Before You Use
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
