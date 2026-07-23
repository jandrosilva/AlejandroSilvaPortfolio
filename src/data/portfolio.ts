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
  { value: 3, suffix: "", display: "3", label: "Full-Stack Projects" },
  { value: 7, suffix: "+", display: "7+", label: "Languages" },
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
    sub: "CSU Fullerton · Aug 2026",
  },
  { label: "Focus", title: "Full-Stack · Front-End", sub: "React, TypeScript, APIs" },
  {
    label: "Experience",
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
    icon: "grid",
    title: "Front-End",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "Vite", "Accessibility (WCAG)"],
  },
  {
    icon: "code",
    title: "Languages",
    items: ["JavaScript / TS", "Python", "SQL", "C / C++", "Java"],
  },
  {
    icon: "database",
    title: "Back-End & Data",
    items: ["REST APIs", "Node.js", "FastAPI", "Flask", "Rails API", "PostgreSQL", "Schema design"],
  },
  {
    icon: "cloud",
    title: "Cloud & Tooling",
    items: ["Docker", "CI/CD · GitHub Actions", "AWS", "Google Cloud", "Git", "Jira"],
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
    tag: "FULL-STACK",
    shot: "project screenshot",
    title: "AniAskMe",
    desc: "A full-stack anime recommendation app I built because finding the next series to watch meant bouncing between forums and ad-filled sites. I built the React and TypeScript interface and a Python API, integrated the AniList GraphQL API over OAuth 2.0, and wrote a hybrid recommender that weights content similarity, collaborative filtering, and popularity, redistributing those weights when it lacks enough data on a user. It degrades gracefully when the upstream API goes down.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "GraphQL", "OAuth 2.0"],
    link: contact.githubUrl,
    cta: "View project",
  },
  {
    tag: "FRONT-END",
    shot: "project screenshot",
    title: "Library Connect",
    desc: "A full-stack platform built with a team to modernize the patron sign-up workflow at Orange Public Library. I built the React and TypeScript front-end and worked through CI/CD testing, shaping the interface around how staff and patrons actually use it — informed by four years working in a system serving 70,000+ registered patrons.",
    stack: ["React", "TypeScript", "Rails API", "PostgreSQL", "Docker"],
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
    org: "Greater Angels Software, LLC · Azusa, CA",
    period: "Apr 2026 — Jun 2026",
    detail:
      "Built full-stack features in React and TypeScript with Flask, FastAPI, and Rails API back-ends, and designed relational schemas and SQL queries against a data model informed by a system serving 70,000+ patron records. Worked in an Agile team with code review and CI/CD, using AI development tools to move faster while reviewing and validating their output before merging.",
  },
  {
    role: "Library Clerk",
    org: "Orange Public Library · Orange, CA",
    period: "Feb 2022 — Present",
    detail:
      "Support the Lending Services and Technology managers in evaluating and rolling out cloud-based software across a platform serving 70,000+ registered patrons. Led an audit of 10,000+ physical and digital items to improve metadata accuracy, and lead the clerk marketing team, growing the library audience to 4,000+ followers.",
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
    period: "Expected Aug 2026",
    detail:
      "Coursework across web front-end and back-end engineering, software architecture, data structures, database systems, and operating systems.",
  },
];
