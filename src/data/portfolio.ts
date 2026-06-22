// All site content in one typed place. Edit here to update the portfolio.

export const contact = {
  email: "alejandrosilvacampos@outlook.com",
  githubUrl: "https://github.com/jandrosilva",
  githubLabel: "github.com/jandrosilva",
  linkedinUrl: "https://www.linkedin.com/in/alejandrosilvacampos/",
  linkedinLabel: "in/alejandrosilvacampos",
  resumeHref: "/Alejandro_Silva_Resume.docx",
} as const;

export const mailto = `mailto:${contact.email}`;

export type Stat = {
  value: number | null; // null = static (not counted)
  display: string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 7, suffix: "+", display: "7+", label: "Languages" },
  { value: 10, suffix: "+", display: "10+", label: "Yrs Work Experience" },
  { value: null, display: "CS", label: "B.S. · CSUF '26" },
];

export type AboutCard = {
  label: string;
  title: string;
  sub: string;
  dark?: boolean;
};

export const aboutCards: AboutCard[] = [
  {
    label: "Education",
    title: "B.S. Computer Science",
    sub: "CSU Fullerton · 2026",
  },
  { label: "Focus", title: "Backend · Data · AI", sub: "APIs, SQL, LLM integration" },
  {
    label: "Currently",
    title: "SWE Intern",
    sub: "Greater Angels Software",
    dark: true,
  },
];

export type SkillIcon = "code" | "database" | "cloud" | "grid";

export type SkillGroup = {
  icon: SkillIcon;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    icon: "code",
    title: "Languages",
    items: ["Python", "SQL", "JavaScript / TS", "Java", "C / C++", "HTML", "CSS"],
  },
  {
    icon: "database",
    title: "Data & AI",
    items: [
      "Schema design",
      "Query optimization",
      "Data modeling",
      "REST APIs",
      "LLM integration",
      "Prompt engineering",
    ],
  },
  {
    icon: "cloud",
    title: "Cloud & Infra",
    items: ["AWS", "Google Cloud", "Docker", "CI/CD · GitHub Actions", "Azure", "Jira"],
  },
  {
    icon: "grid",
    title: "Frameworks & Tools",
    items: ["React", "Flask", "FastAPI", "Rails API", "PostgreSQL", "Node.js", "Vite", "Tailwind"],
  },
];

export const practices: string[] = [
  "Agile / Scrum",
  "0→1 product development",
  "Requirements gathering",
  "Technical documentation",
  "Code review",
];

export type Project = {
  tag: string;
  shot: string;
  title: string;
  desc: string;
  stack: string[];
  link: string;
  cta: string;
  wip?: boolean;
};

export const projects: Project[] = [
  {
    tag: "AI",
    shot: "project screenshot",
    title: "AniAskMe",
    desc: "A full-stack anime recommendation engine that turns a plain-English request into personalized, explained picks that's powered by a hybrid recommender and live AniList data.",
    stack: ["Python", "SQLite", "React", "OAuth 2.0", "AniList GraphQL API"],
    link: contact.githubUrl,
    cta: "View project",
  },
  {
    tag: "WEB",
    shot: "project screenshot",
    title: "Library Connect",
    desc: "A full-stack 0→1 platform modernizing the patron sign-up workflow at Orange Public Library, built with a team and containerized with Docker. I focused on the React front-end and CI/CD testing, shaping the interface around how staff and patrons actually use it, informed by four years working in a system serving 70,000+ registered patrons.",
    stack: ["React", "Rails API", "PostgreSQL", "Docker"],
    link: contact.githubUrl,
    cta: "View project",
  },
  {
    tag: "IN PROGRESS",
    shot: "in development",
    title: "In the works",
    desc: "A new project currently in development. Official title and write-up coming soon — check back shortly.",
    stack: [],
    link: contact.githubUrl,
    cta: "Coming soon",
    wip: true,
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  detail: string;
};

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern",
    org: "Greater Angels Software, LLC · Fullerton, CA",
    period: "Mar 2026 — Present",
    detail:
      "Designed relational data models and optimized SQL queries for a schema informed by a production system serving 70,000+ patron records. Built full-stack features in React and Flask for a self-service data portal (ClubHub) to reach 40,000+ CSUF students, plus REST API layers in FastAPI and Rails API — using Claude and prompt engineering to accelerate delivery.",
  },
  {
    role: "Library Clerk",
    org: "Orange Public Library · Orange, CA",
    period: "Feb 2022 — Present",
    detail:
      "Supported the Library Director and Technology Manager in evaluating and procuring cloud-based software across a platform serving 70,000+ registered patrons. Led an audit of 10,000+ physical and digital items to improve metadata accuracy, and lead the clerk marketing team, growing the library audience to 4,000+ followers.",
  },
  {
    role: "K-2 AI Instructor (Internship)",
    org: "NextEdu Lab · Diamond Bar, CA",
    period: "Aug 2025",
    detail:
      "Designed and delivered a 2-week AI literacy curriculum built around prompt-based interaction, achieving 100% student participation across 5+ lessons, and brokered a partnership with Yorba Linda Library to co-host a pop-up event reaching 1,000+ children.",
  },
  {
    role: "B.S. Computer Science",
    org: "California State University, Fullerton · College of Engineering & Computer Science",
    period: "May 2026",
    detail:
      "Graduated from the College of Engineering & Computer Science with a focus on backend systems, data modeling, and applied AI.",
  },
];
