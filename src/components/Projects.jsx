import Wrapper from "./UI/Wrapper";
import SingleProject from "./SingleProject";
import SectionTitle from "./UI/SectionTitle";
const projects = [
  {
    title: "CSS Button Generator",
    technologies: ["React", "HTML", "CSS"],
    img: "button",
    link: "https://axhar-ibraheem.github.io/CSS-Button-Generator/",
    sourceCode: "https://github.com/axhar-ibraheem/CSS-Button-Generator"
  },
  {
    title: "Ecommerce App",
    technologies: ["React", "HTML", "React Bootstrap"],
    img: "ecommerce",
    link: "https://ecommerce-app-axhar.netlify.app/home",
    sourceCode: "https://github.com/axhar-ibraheem/React-Ecommerce-App"
  },
  {
    title: "Expense Tracker",
    technologies: ["React", "HTML", "React Bootstrap"],
    img: "expense",
    link: "https://expense-tracker-axhar.netlify.app/",
    sourceCode: "https://github.com/axhar-ibraheem/React-Expense-Tracker",
  },
  {
    title: "MailBox Client",
    technologies: ["React", "HTML", "React Bootstrap"],
    img: "mail",
    link: "https://mailbox-client-axhar.netlify.app/auth",
    sourceCode: "https://github.com/axhar-ibraheem/React-Mailbox-client",
  },
];

const Projects = () => {
  return (
    <Wrapper id="projects" classes = "bg-lime-100 py-10">
      <SectionTitle classes="text-center mb-5" title="projects" />
      <div className="max-w-6xl w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 rounded-3xl h-3/4 lg:py-10">
        {projects.map((project, index) => (
          <SingleProject key={index} projectInfo={project} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;
