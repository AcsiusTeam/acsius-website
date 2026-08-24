export const LOCAL_HERO = {
  eyebrow: "Local SEO Services India · Delhi NCR · Since 2010",
  h1: ["Local SEO Services India", "that win the map pack", "in every city."],
  lead:
    "ACSIUS Technologies is a local SEO company in India helping clinics, showrooms, studios, dealers and multi-branch brands appear in Google Maps, near-me searches and local packs — where buying intent is highest.",
  support:
    "Every engagement begins with a Google Business Profile and locality audit, then a written city-by-city roadmap you can hold us to.",
  stats: [
    { value: 16, suffix: "+", label: "Years in search" },
    { value: 3000, suffix: "+", label: "Projects delivered" },
    { value: 120, suffix: "+", label: "Locations optimised" },
    { value: 3, suffix: "x", label: "Avg. map-pack calls" },
  ],
};

export const LOCAL_INTRO = [
  "Local search is decided in a three-result box. Before anyone reaches your website, Google has already ranked nearby businesses by proximity, relevance and prominence — and most enquiries go to the top three. Local SEO is the work of making your business the obvious answer inside that box.",
  "Our local SEO services in India cover the full picture: Google Business Profile optimisation, distinct locality landing pages, citation and NAP consistency across Indian directories, review generation, local schema and grid-based rank tracking. It pairs directly with our broader organic programme for national and category-level rankings.",
  "You get a named point of contact, updates over email and WhatsApp, and a monthly report that connects map views, direction requests and calls to actual enquiries rather than screenshots.",
];

/** Answer-first blocks written for AI overviews and featured snippets. */
export const LOCAL_ANSWERS = [
  {
    q: "What is local SEO?",
    a: "Local SEO is the practice of optimising a business for location-based searches — map results, near-me queries and city-qualified keywords. It combines Google Business Profile management, locality pages, citations and reviews so the business appears when nearby buyers search.",
  },
  {
    q: "What does a local SEO company in India do?",
    a: "A local SEO company in India audits and optimises your Google Business Profile, builds genuinely distinct city pages, fixes name-address-phone consistency across Indian directories, generates reviews and tracks rankings by map grid instead of a single national average.",
  },
  {
    q: "What is the best local search engine in India?",
    a: "Google Maps and Google Search dominate local discovery in India, with Bing Places, Apple Maps, JustDial and Sulekha as secondary sources. A complete local SEO programme keeps your listing accurate on all of them, with Google as the priority.",
  },
];

export const LOCAL_WHY = [
  {
    title: "Built for map results, not just rankings",
    body: "We optimise for proximity, relevance and prominence — the three signals that decide the local pack — and track them by grid, not average position.",
  },
  {
    title: "One team for profiles and pages",
    body: "Our developers ship locality templates, schema and speed fixes; our local team runs the profile, posts and review workflow. No handoff gaps.",
  },
  {
    title: "Real citations, never spam",
    body: "Verified Indian directories, industry bodies and legitimate local sources. No bulk submissions that get your listing suspended later.",
  },
  {
    title: "Reporting in calls and direction requests",
    body: "Map views, calls, direction requests, form fills and store visits by location — the metrics a branch manager can act on.",
  },
];

export type LocalService = {
  key: string;
  name: string;
  summary: string;
  points: string[];
  outcome: string;
};

export const LOCAL_SERVICES: LocalService[] = [
  {
    key: "gbp",
    name: "Google Business Profile",
    summary:
      "Your profile is the storefront most buyers see first. We make it complete, accurate and active — the fastest lever in local search.",
    points: [
      "Category, service and attribute selection mapped to your real demand",
      "Description, products, services and booking links written for intent",
      "Photo and video cadence, plus weekly Google Posts",
      "Q&A seeding and monitoring for the questions buyers actually ask",
      "Suspension recovery and verification support where needed",
    ],
    outcome: "A profile that earns map-pack placement and turns views into calls.",
  },
  {
    key: "locality",
    name: "Locality Landing Pages",
    summary:
      "City and neighbourhood pages that are genuinely distinct — real service detail, local proof and directions, not spun templates.",
    points: [
      "One page per serviceable city or locality with unique content",
      "Local proof: projects, reviews, team, timings and parking detail",
      "Embedded maps, directions and click-to-call conversion paths",
      "Internal linking from service pages to the right locality page",
      "LocalBusiness and Service schema on every location URL",
    ],
    outcome: "Pages that rank for city-qualified queries and convert local visitors.",
  },
  {
    key: "citations",
    name: "Citations & NAP Consistency",
    summary:
      "Google trusts a business it can verify. Conflicting addresses and old phone numbers quietly cap how high you can rank.",
    points: [
      "Audit of existing listings across Indian and global directories",
      "Duplicate and stale listing clean-up or claim",
      "Consistent name, address, phone and hours everywhere",
      "Industry and association directories relevant to your sector",
      "Quarterly re-checks so drift does not creep back in",
    ],
    outcome: "A verifiable, consistent business identity across the local web.",
  },
  {
    key: "reviews",
    name: "Reviews & Reputation",
    summary:
      "Review volume, recency and sentiment feed local ranking and every conversion decision that follows it.",
    points: [
      "Request workflows over WhatsApp, SMS and email after service",
      "Response templates for positive, neutral and negative reviews",
      "Escalation paths for genuine complaints before they go public",
      "Policy-based removal requests for fake or abusive reviews",
      "Review sentiment themes fed back into service and content",
    ],
    outcome: "Higher ratings, steady review flow and stronger local prominence.",
  },
  {
    key: "multi",
    name: "Multi-Location SEO",
    summary:
      "For chains, dealer networks and franchises where dozens of branches need to rank without competing against each other.",
    points: [
      "Scalable location templates with per-branch unique content",
      "Bulk profile management with per-location owners and permissions",
      "Store locator architecture that crawls and indexes cleanly",
      "Cannibalisation control between branch and city pages",
      "Per-branch dashboards for regional and branch managers",
    ],
    outcome: "Every branch discoverable, with no two locations fighting each other.",
  },
  {
    key: "technical",
    name: "Local Technical SEO",
    summary:
      "The engineering layer behind local visibility — speed, structure and markup that make locations machine-readable.",
    points: [
      "LocalBusiness, Organisation, GeoCoordinates and openingHours schema",
      "Core Web Vitals on mobile, where most local searches happen",
      "Crawl and index hygiene for large location directories",
      "Sitemaps and canonicals for location and service combinations",
      "Click-to-call, WhatsApp and directions tracking events",
    ],
    outcome: "Locations that load fast and are unambiguous to search engines.",
  },
  {
    key: "maps",
    name: "Map Pack & Grid Tracking",
    summary:
      "National average position hides local reality. We measure where you rank street by street around each location.",
    points: [
      "Grid rank tracking across a radius around every branch",
      "Competitor share-of-map analysis by keyword and location",
      "Weak-zone identification and targeted content or citation work",
      "Seasonal and campaign-linked visibility comparisons",
      "Monthly grid movement reporting per location",
    ],
    outcome: "Visibility measured where your customers actually search from.",
  },
  {
    key: "voice",
    name: "Near-Me & Voice Search",
    summary:
      "Near-me and voice queries are conversational and urgent. They reward clear answers, accurate hours and complete entity data.",
    points: [
      "Conversational and question-form keyword coverage",
      "Hours, holiday timings and real-time availability accuracy",
      "Answer-first content blocks for extraction into AI answers",
      "Consistent entity naming across profile, site and directories",
      "Monitoring brand mentions inside AI and assistant answers",
    ],
    outcome: "Presence in near-me, voice and AI answers at the moment of need.",
  },
];

export const LOCAL_PROCESS = [
  {
    step: "01",
    title: "Local Audit",
    duration: "Week 1",
    body:
      "We audit your Google Business Profile, existing citations, review profile, locality pages and current grid visibility, then score every issue by effort against expected impact.",
  },
  {
    step: "02",
    title: "Location Mapping",
    duration: "Week 2",
    body:
      "Every serviceable city and locality is mapped to one URL and one keyword set, with competitor gaps and priority branches identified in a written roadmap.",
  },
  {
    step: "03",
    title: "Profile & Page Build",
    duration: "Month 1",
    body:
      "Profiles are optimised and locality pages built or rewritten with local schema, directions, proof and conversion paths our developers implement directly.",
  },
  {
    step: "04",
    title: "Citations, Reviews & Posts",
    duration: "Month 2 onward",
    body:
      "Citation clean-up, review generation workflows, weekly posts and Q&A management compound local prominence month after month.",
  },
  {
    step: "05",
    title: "Grid Review & Expansion",
    duration: "Ongoing",
    body:
      "Monthly grid reporting shows which zones improved. Winning tactics expand to more locations, weak zones get targeted work.",
  },
];

export const LOCAL_OUTCOMES = [
  { k: "3x", v: "Calls from map results", note: "Within two quarters of launch" },
  { k: "+74%", v: "Direction requests", note: "Google Business Profile insights" },
  { k: "Top 3", v: "Map pack placement", note: "Priority city keywords" },
  { k: "+58%", v: "Near-me impressions", note: "Search Console, local queries" },
  { k: "4.7★", v: "Average review rating", note: "After review workflow rollout" },
  { k: "120+", v: "Locations optimised", note: "Across India and overseas" },
];

export const LOCAL_INDUSTRIES = [
  { name: "Clinics & Hospitals", body: "Treatment and department pages plus branch profiles that bring appointment calls from the immediate catchment." },
  { name: "Retail & Showrooms", body: "Store pages, stock-aware content and directions optimisation that convert nearby shoppers into walk-ins." },
  { name: "Restaurants & Cafés", body: "Menu, photo and review cadence tuned for discovery, plus timings accuracy for peak hours." },
  { name: "Real Estate", body: "Project and locality pages with map-pack visibility and enquiry-first conversion paths." },
  { name: "Home Services", body: "Service-area coverage for plumbers, electricians, movers and pest control across every serviceable pin code." },
  { name: "Salons & Wellness", body: "Booking-linked profiles, review generation and offer posts that fill quiet slots." },
  { name: "Automotive & Dealers", body: "Dealer network templates, per-branch profiles and workshop enquiry tracking." },
  { name: "Education & Coaching", body: "Centre-level pages, admission-cycle content and parent-intent question coverage." },
];

export const LOCAL_DELIVERABLES = [
  {
    name: "Local SEO audit",
    detail:
      "A full review of your profile, citations, reviews, locality pages and grid visibility at kickoff, scored so the highest-value fixes ship first.",
  },
  {
    name: "Google Business Profile optimisation",
    detail:
      "Categories, services, products, attributes, description, photos and booking links completed and kept active with weekly posts.",
  },
  {
    name: "City & locality pages",
    detail:
      "Genuinely distinct pages for every serviceable location, with local proof, embedded maps, directions and click-to-call paths.",
  },
  {
    name: "Citation clean-up & building",
    detail:
      "Duplicate removal and consistent name, address, phone and hours across Indian directories, industry bodies and global aggregators.",
  },
  {
    name: "Review generation workflow",
    detail:
      "WhatsApp, SMS and email request flows, response templates and escalation paths, plus policy removal requests for abusive reviews.",
  },
  {
    name: "Local schema implementation",
    detail:
      "LocalBusiness, GeoCoordinates, openingHours, Service and breadcrumb markup implemented and validated on every location URL.",
  },
  {
    name: "Grid rank tracking",
    detail:
      "Street-level rank tracking in a radius around each branch, with share-of-map comparisons against your real local competitors.",
  },
  {
    name: "Call & direction tracking",
    detail:
      "Click-to-call, WhatsApp, form and directions events configured in analytics so every local enquiry can be traced to a source.",
  },
  {
    name: "Monthly local report",
    detail:
      "Map views, calls, direction requests, grid movement and enquiries by location — in plain language, per branch and in total.",
  },
  {
    name: "Quarterly expansion review",
    detail:
      "A working session where winning zones get more investment, weak zones get targeted work and new cities enter the roadmap.",
  },
];

export const LOCAL_FAQS = [
  {
    q: "How much do local SEO services in India cost?",
    a: "Single-location local SEO in India typically runs between ₹15,000 and ₹45,000 per month, while multi-location and dealer networks are scoped per branch. We quote after the audit, so the number reflects your locations and competition rather than a package guess.",
  },
  {
    q: "How long does local SEO take to work?",
    a: "Google Business Profile improvements can move map visibility within three to six weeks. Competitive city keywords and stable top-three placement usually take three to six months of citation, review and content work.",
  },
  {
    q: "Do I need local SEO if I already do national SEO?",
    a: "Yes, they solve different problems. National organic work wins category and informational queries; local SEO wins the map pack and near-me searches. Most of our clients run both together as one programme.",
  },
  {
    q: "Can you rank a business without a physical address?",
    a: "Service-area businesses can rank in local results without displaying an address, provided the profile is verified and service areas are configured correctly. We set this up and support locality pages for each area you serve.",
  },
  {
    q: "How do you handle multiple branches or franchises?",
    a: "We build a scalable location template, manage profiles in bulk with per-branch permissions, prevent branch pages from cannibalising each other and report grid rankings and enquiries per location.",
  },
  {
    q: "What if my Google Business Profile is suspended?",
    a: "We diagnose the likely cause — address mismatch, category abuse, keyword stuffing or duplicate listings — correct it, and file a reinstatement request with the required documentation.",
  },
  {
    q: "Which local directories matter in India?",
    a: "Google Business Profile first, then Bing Places, Apple Maps, JustDial, Sulekha, IndiaMART where relevant, plus sector-specific directories and associations. Volume matters less than accuracy and relevance.",
  },
  {
    q: "Will you get reviews for us?",
    a: "We build the workflow that earns them — timed requests, easy links, staff prompts and response handling. We never buy or fabricate reviews, because that risks your listing.",
  },
];
