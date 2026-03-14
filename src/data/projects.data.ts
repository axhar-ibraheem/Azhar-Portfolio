export interface ProjectInfo {
  title: string;
  technologies: string[];
  img: "button" | "ecommerce" | "expense" | "mail" | "jobquest";
  link: string;
  sourceCodeLink: string;
}

export const projects: ProjectInfo[] = [
  {
    title: "Ecommerce App",
    technologies: ["React", "HTML", "React Bootstrap"],
    img: "ecommerce",
    link: "https://ecommerce-app-axhar.netlify.app/home",
    sourceCodeLink: "https://github.com/axhar-ibraheem/React-Ecommerce-App",
  },
  {
    title: "JobQuest",
    technologies: ["React", "HTML", "Tailwind"],
    img: "jobquest",
    link: "https://jobquest-axhar.netlify.app/",
    sourceCodeLink: "https://github.com/axhar-ibraheem/JobQuest_Vite",
  },
  {
    title: "Expense Tracker",
    technologies: ["React", "HTML", "React Bootstrap"],
    img: "expense",
    link: "https://expense-tracker-axhar.netlify.app/",
    sourceCodeLink: "https://github.com/axhar-ibraheem/React-Expense-Tracker",
  },
  {
    title: "MailBox Client",
    technologies: ["React", "HTML", "React Bootstrap"],
    img: "mail",
    link: "https://mailbox-client-axhar.netlify.app/auth",
    sourceCodeLink: "https://github.com/axhar-ibraheem/React-Mailbox-client",
  },
];
