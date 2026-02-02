import { Project, Skill } from "@shared/schema";
import image1 from "@/images/item1.png"

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Videsk – Video Customer Contact Platform",
    description:
      "Built responsive, user-friendly dashboards and real-time video call interfaces. Integrated video players (WebRTC, YouTube, Plyr) and connected front-end with back-end APIs for secure authentication and live updates. Optimized UI performance, loading speed, and mobile responsiveness. Collaborated with lead full-stack developer to deliver a fast, interactive, and reliable customer video platform.",
    techStack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Plyr/YouTube API", "WebSockets", "REST APIs", "Auth0", "core-js", "Cloudflare", "Webpack"],
    link: "#",
    imageUrl: image1,
  },
  {
    id: 2,
    title: "CLIENT_OPERATIONS_PLATFORM",
    description:
      "A secure internal web application for managing clients, invoices, workflows, and permissions at scale.",
    techStack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL", "Docker"],
    link: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "SAAS_AUTHENTICATION_SYSTEM",
    description:
      "Authentication and authorization system with JWT, role-based access control, and audit logging for SaaS products.",
    techStack: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "AWS"],
    link: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
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

