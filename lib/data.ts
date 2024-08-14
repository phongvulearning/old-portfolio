import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sefl-taught",
    location: "Ho Chi Minh City, Vietnam",
    description:
      " After six months of self-study, you successfully transitioned into a front-end developer role.",
    icon: React.createElement(LuGraduationCap),
    date: "07/2022",
  },
  {
    title: "Intern Front-End Developer",
    location: "Gridly - Ho Chi Minh City, Vietnam",
    description:
      "Joined Gridly as an intern front-end developer, gaining practical experience and further honing your skills.",
    icon: React.createElement(CgWorkAlt),
    date: "03/2023 - 05/2023",
  },
  {
    title: "Front-End Developer",
    location: "Gridly - Ho Chi Minh City, Vietnam",
    description:
      "Promoted to a full-fledged front-end developer role at Gridly, where you continued to refine your coding abilities and developed expertise in feature development, issue resolution, and effective communication within the team..",
    icon: React.createElement(CgWorkAlt),
    date: "05/2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "Zustand",
  "Framer Motion",
  "REST",
  "Material UI",
  "Sass",
  "Styled Components",
  "Vercel",
  "Netlify",
  "Figma",
  "CMS",
  "DrizzleORM",
  "Elysia",
  "Problem Solving",
  "Communicating",
] as const;
