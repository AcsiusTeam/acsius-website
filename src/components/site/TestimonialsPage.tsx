import { useState } from "react";
import { Play, Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const INTRO = {
  heading: "Testimonials",
  body: "Founded in 2010 by Arun Singh, ACSIUS Technologies Pvt. Ltd is a trusted Digital Marketing & Web Development company based in New Delhi, India. With more than a decade of experience, we have been empowering businesses worldwide with innovative, scalable, and ROI-driven digital solutions.",
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We were very pleased with the work that ACSIUS did in revamping our website. At all times we found Arun and his team to be professional, prompt, communicative and competent. Since the website redesign, we have received many positive comments from clients and stakeholders, and the new site will undoubtedly continue to be instrumental in projecting the image we want for ourselves to the world.",
    name: "SEAN ANTHONY",
    role: "FOUNDER & CEO",
  },
  {
    quote:
      "Hello, my Name is Swarn Singh and i am president of our Sikh temple in Sweden! Once I was looking my email and i found one announce from ACSIUS who is making website and more . I contacted to this company and Mr. Arun Singh answered me and i talked to him about make a website of our Temple. When he made a design of our website it was really very impressed. I cound not wait to order for website and i did . They are very attentive to their work and their design skills are great, making it so much easier for me to communicate what i want and how to get it. I feel proud of our new website and can not wait to launch it. With ACSIUS, only the imagination is the limit. I really recommend working with them and on the way to give them new order of my personal website",
    name: "SWARN SINGH",
    role: "PRESIDENT",
  },
  {
    quote:
      "Working with ACSIUS was a great pleasure from start to finish. Before starting working with them, Arun made sure I&rsquo;d get everything I asked for and I felt very good going into business with him. They are very attentive to their work and their design skills are great, making it so much easier for me to communicate what I want and how to get it. I feel proud of our new website and can&rsquo;t wait to launch it. With ASICS, only the imagination is the limit. I really recommend working with them.",
    name: "ANWAR BOUGROUG FOUNDER",
    role: "WWW.BOUGROUG.COM",
  },
  {
    quote:
      "Finding a first rate web designer is challenging for any business and it was nice to finally have a web designer who was prompt with feedback as well as completing the work in a timely manner. Aside from the great team at ACSIUS I am glad to have personally worked with Arun, the genius behind the company, who has totally redefined the levels to which customer satisfaction can be taken to. We continue to use ACSIUS Technologies to manage our site updates, and to create new features and strongly recommend using them for all your web design needs. You will not be disappointed.",
    name: "JOE",
    role: "CEO",
  },
  {
    quote:
      "I have been using the services of ACSIUS Design since March 2018. They have been doing a exceptional job on my eCommerce site. Manish and his team are superb at what they do.. They are always patient and understanding especially with the continuous changes to the website. I was very sceptical at first about outsourcing our design and development to an offshore company but have no regrets since. They have provided a lot more that what was initially discussed and over exceed my expectations. They are about to start work on second project for me and I would recommend ACSIUS Design if you looking for a professional, results driven and competitively priced company to work on your website and SEO.",
    name: "ATISH - GADGETS-SA",
    role: "MANAGING DIRECTOR",
  },
  {
    quote:
      "Today is a great day, for us and for your team too. Finally, delitemerchandise.com is fully finished and meets our requirements. We thank your team for their hard work and diligence. Not only yourself and Soyeb have made sure that all details were dealt with, but dedicated yourselves to solve unforeseen issues with development. Your development teams skills equals the quality of their service. Although we had to postpone the launch by a few weeks but it is worth it in the end, everyone is very please with the result here. Special thanks to Soyeb who&rsquo;s been critical to the success of this project. Our company will surely continue to deal with you in regards other projects. Best Regards and keep in touch.",
    name: "Florian C. - Co-founder",
    role: "DELITE MERCHANDISE CO., LTD",
  },
  {
    quote:
      "I cannot say enough about the wonderful team ACSIUS is. I know nothing about setting up websites, or the technical side of this, however Arun, Manish and Rahul did a fantastic job working with me. I especially appreciate their highest level of technology they can do anything you ask, and their patience with guiding me through the initial set up cannot be stated enough. I now have them work with me on the SEO level and they also maintain the site. The website is extremely effective and I love it as do my clients.",
    name: "LEEANN TURGEON-RUTKOVSKY",
    role: "PRESIDENT/CEO LA, WWW.TEALGROUP.US",
  },
  {
    quote:
      "This feedback is for Arun and his SEO team towards the services they provide for my website: ServicesList.com. The services I received were extremely professional, complete and on time. Arun sent me a weekly report of the work that was completed and pending per the package that I purchased. The overall ranking of the website improved to 5 million from 29 million. Also, some of the keywords that we worked on appeared on the first, second or third page of Google. I would certainly recommend Arun&rsquo;s SEO services and would hire to work with him again myself.",
    name: "SAFA KASHANI",
    role: "SERVICESLIST.COM",
  },
  {
    quote:
      "Finding a first rate web designer is challenging for any business and it was nice to finally have a web designer who was prompt with feedback as well as completing the work in a timely manner. Aside from the great team at ACSIUS I am glad to have personally worked with Arun, the genius behind the company, who has totally redefined the levels to which customer satisfaction can be taken to. We continue to use ACSIUS Technologies to manage our site updates, and to create new features&hellip;",
    name: "ARINZE UZO",
    role: "HEAD, MARKETING LASTPRICE",
  },
  {
    quote:
      "I would like to thank the staff at ACSIUS for their professionalism and great work in assisting me get better Google page ratings and increased inquiries/order over the last 3 months. They have gone beyond my expectations. I could honestly say I was somewhat concerned dealing with an overseas company but with the attention to details and the results received to date I can thoroughly recommend ACSIUS to any potential business looking for a SEO company to take care of all their needs.",
    name: "ARINZE UZO",
    role: "HEAD, MARKETING LASTPRICE",
  },
  {
    quote:
      "We at Bandura were approached by ACSIUS to improve our website ranking, we were a little apprehensive at first, but they seemed very knowledgeable and honest so we gave them our business. The result were better than promised and within a short 3 month period ACSIUS got our site ranked from #330 to #4. I would highly recommend their SEO services to anyone looking to improve their search engine ranking.",
    name: "PHIL PROSSER",
    role: "MANAGING DIRECTOR",
  },
  {
    quote:
      "The Team at ACSIUS are great! Though they approached us through a cold email, they were able to get our business because they impressed us with their analysis of what we had to do to improve our search rankings. Best of all, they were more keen to deliver quality service than they were to charge us. That&rsquo;s why we will recommend them, as they have proven to be very professional, understanding and supportive in our dealings with them. You&rsquo;ve done a great job so far and we really appreciate you guys!",
    name: "RAYMOND UMEH",
    role: "CEO/FOUNDER SKARABRAND.COM",
  },
  {
    quote:
      "I offer my thanks to Manish and his team at Acsius. It has been a pleasure to work with you. Rest assured that I will make every effort to spread the word to my contacts in the Washington, DC business community about your fine work, efficiency and professionalism!",
    name: "TIMOTHY C. MAPLES, ESQ.",
    role: "CARVEL CHRISTOPHER LLP",
  },
  {
    quote:
      "I get my website done by Manish. They did quality work and R&D to make my website an excellent website. Thank you manish and your team to make it successful. I will surely recommend your name here so that you can explore some more business in China.",
    name: "MICHAEL WANG",
    role: "WOODEN-FURNITURE.COM",
  },
  {
    quote:
      "It was a pleasure working with Acsius. I highly recommend Manish and his team for any requirement related to website and app. I really appreciate the communication level and dedication by Manish. We will be keep working together in future and will surely give your name in my references. Keep the good work going.",
    name: "FREUNDLICHE GR&Uuml;SSE",
    role: "RETO PURTSCHERT",
  },
  {
    quote:
      "The guy I email has been doing a great job getting back to me quickly and providing clarity as to what&rsquo;s been focused on as well as providing me with weekly reports that help me keep the client informed.",
    name: "TOM",
    role: "",
  },
  {
    quote:
      "Arun Singh and his team went over our work; they showed determination in fixing the problems and then they increased our traffic. They did a good job and have given us excellent results.",
    name: "BERNARD ZIMMERMANN",
    role: "",
  },
  {
    quote:
      "I do outsourcing and it is critical for me to be on time with my clients. I finally found people trustful on ethics and serious enough to report to me precisely.",
    name: "RACHEL",
    role: "",
  },
  {
    quote: "They did what they said they would. They never tried to attract me with unrealistic promises.",
    name: "JENNIFER",
    role: "",
  },
  {
    quote: "Dear Arun, Good work team! Will recommend your services to all. Thank you so much.",
    name: "NAMAN GARG",
    role: "",
  },
  {
    quote:
      "Very honest, reliable, and professional. I trust him fully and he knows what he is doing which is evident by the results he provides.",
    name: "JUSTIN",
    role: "",
  },
  {
    quote:
      "Even though we are a new customer, we are pleased with progress and attention to our requests.",
    name: "LARRY CURREY",
    role: "CEO PEGHOOKS PEGBOARDHOOKS",
  },
  {
    quote:
      "Project goal was to modernise and transform an existing HTML web site to a WP web site while keeping the original core idea unchanged. The communication process with (your company and specialists) was friendly and efficient. The work process was well done and timely including modification requests that evolved during the process. The resulting product was to my satisfaction. The project stayed in the suggested budget based on a fair offer. I can definitely recommend to use their (the company) great services.",
    name: "JURG SOMMERAUER",
    role: "REAL ART GMBH, SWITZERLAND",
  },
  {
    quote:
      "I am really appreciate the work of www.acsius-com-369016.hostingersite.com, they do the web design for me, this is the first time we work together and I feel so happy. They are so patient with me, they are so kindly and nicely. When I figure the problems, they settle it in a short time, and they response the emails quickly. I will let them do the SEO for me too, and i hope we can have a long-term business corporation in the future. They are so nice, I really recommend them to you.",
    name: "LIN",
    role: "CUSTOM WEDDING DRESS",
  },
  {
    quote:
      "Hi my name is Mr Kim Hartlin owner Thunder Bow Expeditions I operate xpeditions in India. In March 2017 while in New Delhi I came across a small I.T company owned by Arun Singh. I am very impressed with Arun and his team. They ran a SEO campaign for me. They communicated with me on a regular basis to keep me informed on SEO progress. I would recommend Arun and his hard working team to do SEO for any one.",
    name: "KIM HARTLIN",
    role: "",
  },
  {
    quote:
      "I want to express to you how happy I am with ACIUS and your services. I have tried other SEO companies and did not see the level of promptness, responsiveness and flexibility to meet my requests. In addition, I trust your services and look to you for advice and recommendations. I would recommend your company to anyone!!",
    name: "DAWN TRIANA",
    role: "TRIANA MIAMI SKIN CARE, LLC",
  },
  {
    quote:
      "It was a pleasure working experience with Rahul from Acsius. His highly efficient work, helpful and patient attitude impressed me a lot. It only tooks about 3 weeks to finish my company website wholly. My website looks wonderful and gain much compliments from my friends.",
    name: "CLEMENT, CEO",
    role: "CLEMENT ADVISORY LIMITED",
  },
  {
    quote:
      "I was initially scared to contract a SEO agency remotely but everything went without hassle!",
    name: "ROBERT",
    role: "",
  },
  {
    quote: "Great job, delivered on time and with great quality, improved my rankings. Would recommend again.",
    name: "",
    role: "",
  },
  {
    quote:
      "I am fine with the service I am getting. The gentleman I talk to is meeting my expectations and reports to me weekly.",
    name: "LINDA",
    role: "",
  },
];

const VIDEO_IDS = [
  "d-uUTBWHT3s",
  "InK5w-WTvfU",
  "YaASkcABNAM",
  "BJGRiwjsw9k",
  "weSxF_kpT2w",
  "EZUK-4rbKkI",
  "WU27mN7e978",
  "ay9J2dGpjhY",
  "I2uOWAtndoA",
  "edV4OJ3oeFU",
  "PoqJb22ZHp0",
  "WaV8GQJsKHI",
  "hh9PNfkMqNw",
];

const STATS = [
  { value: "2010", label: "Building since" },
  { value: "1200+", label: "Projects delivered" },
  { value: "13", label: "Video reviews" },
  { value: "4.9/5", label: "Average client rating" },
];

function initials(name: string) {
  return name
    .split(/[\s\-]+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function VideoCard({ id }: { id: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-navy-deep shadow-lg">
      {playing ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title="ACSIUS client video review"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 h-full w-full"
          aria-label="Play client video review"
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt="ACSIUS client video review thumbnail"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-navy-deep/35 transition-colors duration-300 group-hover:bg-navy-deep/15"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-ember shadow-xl transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-0.5 h-6 w-6 text-white" fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

function TestimonialCard({ item, featured = false }: { item: Testimonial; featured?: boolean }) {
  if (featured) {
    return (
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-navy-deep p-7 text-white shadow-xl sm:p-9">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(70% 80% at 100% 0%, oklch(0.68 0.17 45 / 0.3), transparent 65%), radial-gradient(60% 70% at 0% 100%, oklch(0.55 0.16 255 / 0.35), transparent 70%)",
          }}
        />
        <div className="relative flex flex-1 flex-col">
          <div className="mb-5 flex items-center gap-1 text-ember">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4" fill="currentColor" />
            ))}
          </div>
          <blockquote
            className="mb-7 flex-1 font-display text-lg leading-relaxed text-white/90"
            dangerouslySetInnerHTML={{ __html: `&ldquo;${item.quote}&rdquo;` }}
          />
          <div className="flex items-center gap-3 border-t border-white/15 pt-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ember font-display text-sm font-bold text-white">
              {initials(item.name || "AC")}
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-bold">{item.name || "Anonymous"}</p>
              {item.role && <p className="truncate text-xs text-white/60">{item.role}</p>}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative mb-6 break-inside-avoid rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ember/40 hover:shadow-xl sm:p-7">
      <span aria-hidden className="absolute left-6 top-0 h-1 w-12 rounded-b-full bg-ember" />
      <Quote className="mb-4 h-6 w-6 shrink-0 text-ember" />
      <blockquote
        className="mb-6 text-[15px] leading-relaxed text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: `&ldquo;${item.quote}&rdquo;` }}
      />
      <div className="flex items-center gap-3 border-t border-border/70 pt-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
          {initials(item.name || "AC")}
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold text-foreground">{item.name || "Anonymous"}</p>
          {item.role && <p className="truncate text-xs text-muted-foreground">{item.role}</p>}
        </div>
      </div>
    </article>
  );
}

export function TestimonialsPage() {
  const featured = TESTIMONIALS.slice(0, 3);
  const rest = TESTIMONIALS.slice(3);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep pb-20 pt-32 sm:pb-24 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 70% at 15% 0%, oklch(0.55 0.16 255 / 0.45), transparent 65%), radial-gradient(50% 60% at 90% 20%, oklch(0.68 0.17 45 / 0.28), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            <Star className="h-3.5 w-3.5" fill="currentColor" /> Client Stories
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {INTRO.heading}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">{INTRO.body}</p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-navy-deep py-14 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Clients Video Reviews</h2>
              <p className="mt-2 text-base text-white/60">Hear it directly from the founders and marketers we work with.</p>
            </div>
            <span className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              {VIDEO_IDS.length} videos
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEO_IDS.map((id) => (
              <VideoCard key={id} id={id} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">Written Reviews</h2>
            <p className="mt-2 text-base text-muted-foreground">What our clients say about working with ACSIUS.</p>
          </div>

          <div className="mb-6 grid gap-6 lg:grid-cols-3">
            {featured.map((item, i) => (
              <TestimonialCard key={`f-${i}`} item={item} featured />
            ))}
          </div>

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {rest.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

