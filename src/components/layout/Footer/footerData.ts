import { 
  IoLogoYoutube, 
  IoLogoFacebook, 
  IoLogoInstagram, 
  IoLogoTwitter, 
  IoLogoLinkedin, 
  IoLogoGithub 
} from 'react-icons/io5';
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title?: string;
  links: FooterLink[];
}

export const certifications: FooterLink[] = [
  { label: "Python ATM Simulation Essentials Mini Project", href: "#" },
  { label: "Guess the Number Game - JavaScript Mini Workshop", href: "#" },
  { label: "Cloud and DevOps", href: "#" },
  { label: "Placement Preparation Bootcamp", href: "#" },
  { label: "SQL HAVING Clause Essentials: Filter Grouped Data", href: "#" },
  { label: "Scroll Reveal Animations Essentials Mini Project Workshop", href: "#" },
  { label: "Real-Time SSE Essentials: Modern JS Workshop", href: "#" },
  { label: "Advanced Content-Based Recommender System Essentials Workshop", href: "#" },
  { label: "Python Bootcamp", href: "#" },
  {
    label: "SQL Bootcamp",
    href: "#",
  },
  {
    label: "AI Feynman Technique Essentials: Mistakes, Cases & Tools",
    href: "#",
  },
  {
    label: "Excel Bootcamp",
    href: "#",
  },
  {
    label: "Digital Marketing Bootcamp",
    href: "#",
  },
  {
    label: "Advanced SQL Set Operations Essentials Workshop",
    href: "#",
  },
  {
    label: "Copy to Clipboard Essentials: Modern JS Workshop",
    href: "#",
  },
  {
    label: "GraphQL API Essentials: Your First Server",
    href: "#",
  },
  {
    label: "Autonomous Research Agent Self-Correction Essentials Workshop",
    href: "#",
  },
  {
    label: "Advanced Pivot Table Essentials Workshop with Pandas",
    href: "#",
  },
  {
    label: "Product Card Essentials Mini Project Workshop",
    href: "#",
  },
  {
    label: "Scikit-learn Classification Essentials: Imbalanced Data & Pipelines",
    href: "#",
  },
  {
    label: "Cloud CLI Essentials: AWS CloudShell Power Workshop",
    href: "#",
  },
  {
    label: "E-commerce Review Insights Essentials: End-to-End Python Mini Project",
    href: "#",
  },
  {
    label: "URLSearchParams Essentials: Modern JS Mini Workshop",
    href: "#",
  },
  {
    label: "Data Science",
    href: "#",
  },
  {
    label: "Full Stack Development with AI",
    href: "#",
  },
  {
    label: "Mobile App Development",
    href: "#",
  },
  {
    label: "Git & GitHub Bootcamp",
    href: "#",
  },
  {
    label: "Testimonial Block Essentials Mini Project in HTML & CSS",
    href: "#",
  },
  {
    label: "Advanced Document Q&A with Embeddings Essentials Workshop",
    href: "#",
  },
  {
    label: "GenAI 101: Socratic AI Tutor Essentials Workshop",
    href: "#",
  },
  {
    label: "JavaScript Bootcamp",
    href: "#",
  },
  {
    label: "GenAI 101 Essentials: Reverse Prompt Engineering Workshop",
    href: "#",
  },
  {
    label: "Survey Form Essentials: HTML & CSS Mini Project",
    href: "#",
  },
  {
    label: "React Bootcamp",
    href: "#",
  },
  {
    label: "Java Bootcamp",
    href: "#",
  },
  {
    label: "Figma Bootcamp",
    href: "#",
  },
  {
    label: "React Expense Tracker Essentials Mini Project",
    href: "#",
  },
  {
    label: "AI Resume Parsing Essentials: LLM Mini Project",
    href: "#",
  },
  {
    label: "Shopping Cart Calculator Essentials: Local Storage & Responsive UI",
    href: "#",
  },
  {
    label: "Data Cleaning with SQL String Functions",
    href: "#",
  },
  {
    label: "HTML & CSS Bootcamp",
    href: "#",
  },
  {
    label: "Log Analysis Essentials Workshop for Cyber Security Beginners",
    href: "#",
  },
  {
    label: "GenAI 101: Clean Messy Data with AI Essentials Workshop",
    href: "#",
  },
  {
    label: "SQL LIKE Operator Essentials: Advanced Pattern Matching",
    href: "#",
  },
  {
    label: "SQL CAST Essentials Workshop for Beginners",
    href: "#",
  },
  {
    label: "GenAI 101: Mastering LLMs",
    href: "#",
  },
];

export const blogs: FooterLink[] = [
  { label: "How to Learn AI Without Quitting Your Job", href: "#" },
  { label: "The Most Useful Skillset for 2026 and Beyond", href: "#" },
  { label: "Why Non-Tech Working Professionals Should Learn AI ?", href: "#" },
  { label: "Letsupgrade's Executive AI Generalist Program", href: "#" },
];

export const schoolOfFutureTech: FooterLink[] = [
  { label: "Cloud and DevOps", href: "#" },
  { label: "India's Best BTech CSE", href: "#" },
  { label: "Data Science", href: "#" },
  { label: "Full Stack Development with AI", href: "#" },
  { label: "Mobile App Development", href: "#" },
  { label: "BTech in VLSI & Semiconductors", href: "#" },
  { label: "Executive MTech", href: "#" },
];

export const support: FooterLink[] = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Community Guidelines", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Verify Certificate", href: "#" },
];


export interface SocialLink {
  platform: string;
  count: string;
  href: string;
  iconColor: string;
  logo: string; // URL or Lucide Icon name
}

export const socialLinks: SocialLink[] = [
  { platform: "Instagram", count: "49,477+", href: "#", iconColor: "text-pink-600", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" },
  { platform: "YouTube", count: "2,60,500+", href: "#", iconColor: "text-red-600", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" },
  { platform: "LinkedIn", count: "19,000+", href: "#", iconColor: "text-blue-700", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" },
  { platform: "Whatsapp", count: "2,05,639+", href: "#", iconColor: "text-green-500", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
  { platform: "Discord", count: "20,566+", href: "#", iconColor: "text-indigo-500", logo: "https://lucdn.letsupgrade.net/assets/discord_logo_icon_editorial_free_vector_1f843d7924.webp" },
  { platform: "Twitter", count: "1,360+", href: "#", iconColor: "text-black", logo: "https://lucdn.letsupgrade.net/assets/twitter_7317272a9b.png" },
];


export interface MonochromeSocial {
  Icon: React.ElementType;
  href: string;
  label: string;
}

export const monochromeSocials: MonochromeSocial[] = [
  { Icon: IoLogoYoutube, href: "#", label: "YouTube" },
  { Icon: IoLogoFacebook, href: "#", label: "Facebook" },
  { Icon: IoLogoInstagram, href: "#", label: "Instagram" },
  { Icon: IoLogoTwitter, href: "#", label: "Twitter" },
  { Icon: IoLogoLinkedin, href: "#", label: "LinkedIn" },
  { Icon: IoLogoGithub, href: "#", label: "GitHub" },
];

// ... (keep your existing brandLinks, certifications, etc. here)