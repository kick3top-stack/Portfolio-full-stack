import { Project, Skill } from "@shared/schema";
import image1 from "@/images/item1.png"
import image2 from "@/images/item2.png"
import image3 from "@/images/item3.png"
import image4 from "@/images/item4.png"


export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Videsk – Video Customer Contact Platform",
    description:
      "Built responsive, user-friendly dashboards and real-time video call interfaces. Integrated video players (WebRTC, YouTube, Plyr) and connected front-end with back-end APIs for secure authentication and live updates. Optimized UI performance, loading speed, and mobile responsiveness. Collaborated with lead full-stack developer to deliver a fast, interactive, and reliable customer video platform.",
    techStack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Plyr/YouTube API", "WebSockets", "REST APIs", "Auth0", "core-js", "Cloudflare", "Webpack"],
    link: "https://videsk.io",
    imageUrl: image1,
  },
  {
    id: 2,
    title: "Adswize Marketing Platform Website",
    description:
      "Implemented marketing and product pages, integrated analytics and third-party services, handled form submissions and API calls, and supported deployment workflows. Integrated analytics and tracking in a clean, maintainable way, enabling the business team to measure conversions without impacting site performance.",
    techStack: ["React", "Next.js", "JavaScript", "Node.js", "REST APIs", "Analytics tools", "Git"],
    link: "https://adswize.io/",
    imageUrl: image2,
  },
  {
    id: 3,
    title: "BrowserBound Agency Website",
    description:
      "Built responsive UI components, integrated dynamic content, implemented SEO-friendly pages, and handled basic back-end interactions and site maintenance. Carefully translated design mockups into reusable components while maintaining consistent spacing, typography, and mobile responsiveness across pages.",
    techStack: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Git"],
    link: "https://browserbound.com/",
    imageUrl: image3,
  },
  {
    id: 4,
    title: "Multihub Marketing Website",
    description:
      "Built responsive UI components, integrated CMS-managed content, and handled analytics and tracking integrations. Implemented reusable components that simplified content updates without developer involvement.",
    techStack: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Git"],
    link: "https://www.multihub.io/",
    imageUrl: image4,
  },
];
export const MOCK_SKILLS: Skill[] = [
  // INTERFACE SYSTEMS
  {
    id: 1,
    name: "React / Next.js",
    category: "interface_systems",
    level: "Expert",
  },
  {
    id: 2,
    name: "TypeScript",
    category: "interface_systems",
    level: "Expert",
  },
  {
    id: 3,
    name: "UI Architecture & State Management",
    category: "interface_systems",
    level: "Advanced",
  },

  // SERVER OPERATIONS
  {
    id: 4,
    name: "Node.js",
    category: "server_operations",
    level: "Expert",
  },
  {
    id: 5,
    name: "REST & API Design",
    category: "server_operations",
    level: "Expert",
  },
  {
    id: 6,
    name: "Authentication & Authorization",
    category: "server_operations",
    level: "Advanced",
  },

  // DATA & INFRASTRUCTURE
  {
    id: 7,
    name: "PostgreSQL",
    category: "data_infrastructure",
    level: "Expert",
  },
  {
    id: 8,
    name: "Docker",
    category: "data_infrastructure",
    level: "Advanced",
  },
  {
    id: 9,
    name: "AWS / Cloud Services",
    category: "data_infrastructure",
    level: "Advanced",
  },
];


export const NAV_ITEMS = [
  { label: "STATUS", href: "/" },
  { label: "CAPABILITIES", href: "/skills" },
  { label: "WORK", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
];