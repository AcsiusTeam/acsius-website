export type Opening = {
  id: string;
  title: string;
  urgent?: boolean;
  alwaysOpen?: boolean;
  experience: string;
  openings?: number;
  tools?: string[];
};

export const CAREER_INTRO = [
  "ACSIUS builds your career and supports your growth through constant exposure to learn and technological advancement.",
  "We create the most engaging environment to work on top-notch campaigns, solve real-world challenges, and create meaningful impact for brands in India and across the world.",
  "At ACSIUS, we help you develop advanced skills through hands-on experience, collaborate with industry leaders, and gain insights that set you apart.",
];

export const OPENINGS: Opening[] = [
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    urgent: true,
    experience: "2-5 Years",
    openings: 2,
    tools: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    alwaysOpen: true,
    experience: "2-5 Years",
  },
  {
    id: "email-marketing-executive",
    title: "Email Marketing Executive",
    alwaysOpen: true,
    experience: "1-2 Years",
  },
  {
    id: "wordpress-design-developer",
    title: "WordPress Design & Developer",
    alwaysOpen: true,
    experience: "1+ Year",
  },
  {
    id: "seo-executive",
    title: "SEO Executive",
    experience: "6 Months – 1 Year",
  },
  {
    id: "php-developers",
    title: "PHP Developers",
    experience: "2-5 Years",
    openings: 3,
  },
];

export const APPLY_FIELDS = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "designation", label: "Current Designation", type: "text", required: true },
  { name: "currentCtc", label: "Current CTC", type: "text", required: true },
  { name: "expectedCtc", label: "Expected CTC", type: "text", required: true },
  { name: "noticePeriod", label: "Notice Period", type: "text", required: false },
] as const;
