export interface ProjectInfo {
  title: string;
  technologies: string[];
  img: "ecommerce" | "finance-dashboard" | "mail" | "jobquest";
  link: string;
  sourceCodeLink: string;
}

export const projects: ProjectInfo[] = [
  {
    title: "MailBox Client",
    technologies: ["React", "HTML", "React Bootstrap"],
    img: "mail",
    link: "https://mailbox-client-axhar.netlify.app/auth",
    sourceCodeLink: "https://github.com/axhar-ibraheem/React-Mailbox-client",
  },

  {
    title: "Job Quest Dashboard",
    technologies: ["React", "HTML", "Tailwind"],
    img: "jobquest",
    link: "https://jobquest-axhar.netlify.app/",
    sourceCodeLink: "https://github.com/axhar-ibraheem/JobQuest_Vite",
  },
  {
    title: "Finance Dashboard",
    technologies: ["React", "TypeScript", "Redux Toolkit"],
    img: "finance-dashboard",
    link: "https://fintrack-axhar.netlify.app/",
    sourceCodeLink: "https://github.com/axhar-ibraheem/finTrack",
  },
  {
    title: "Ecommerce App",
    technologies: ["React", "HTML", "React Bootstrap"],
    img: "ecommerce",
    link: "https://ecommerce-app-axhar.netlify.app/home",
    sourceCodeLink: "https://github.com/axhar-ibraheem/React-Ecommerce-App",
  },
];
