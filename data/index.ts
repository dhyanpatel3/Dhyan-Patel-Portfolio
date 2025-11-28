import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Project, SocialLink, TechItem } from "../types";

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    username: "dhyan-patel3",
    url: "https://linkedin.com/in/dhyan-patel3",
    icon: Linkedin,
    color: "#0077b5",
    bg: "#e1f0f7",
  },
  {
    name: "GitHub",
    username: "dhyanpatel3",
    url: "https://github.com/dhyanpatel3",
    icon: Github,
    color: "#24292e",
    bg: "#f0f1f2",
  },
  {
    name: "X",
    username: "@dhyannpatel",
    url: "https://x.com/dhyannpatel",
    icon: Twitter,
    color: "#000000",
    bg: "#f4f4f5",
  },
  {
    name: "Instagram",
    username: "@dhyanpatel3",
    url: "https://instagram.com/dhyanpatel3",
    icon: Instagram,
    color: "#E1306C",
    bg: "#fdf2f5",
  },
];

export const techStack: TechItem[] = [
  // Languages
  {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "HTML5",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  // Frontend
  {
    name: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Vite",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },

  // Backend & DB
  {
    name: "Node.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  // Tools & DevOps
  {
    name: "Git",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Vercel",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
];

export const projects: Project[] = [
  {
    title: "ChitChat",
    description:
      "A real-time messenger utilizing the MERN stack. Features secure JWT authentication, instant messaging via Socket.io, online presence tracking, and Cloudinary integration for media sharing.",
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Socket.io",
      "TailwindCSS",
    ],
    github: "https://github.com/dhyanpatel3/ChitChat",
    link: "https://chit-chat-rose-omega.vercel.app/login",
    dates: "2024",
    imageUrl: "/chitchat.png",
  },
  {
    title: "AI-Calculator",
    description:
      "Generative AI math solver that interprets equations drawn on an HTML canvas. Integrated Google Gemini API for analysis and draggable LaTeX for solution display.",
    tags: ["React", "TypeScript", "Google Gemini API", "Mantine", "Node.js"],
    github: "https://github.com/dhyanpatel3/AI-Calculator",
    link: "https://ai-calculator-frontend-tau.vercel.app/",
    dates: "2024",
    imageUrl: "/ai-calculator.png",
  },
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
