import Wrapper from "./UI/Wrapper";
import SingleProject from "./SingleProject";
import SectionTitle from "./UI/SectionTitle";
import { FaLaptopCode } from "react-icons/fa";
import { projects } from "../data/projects.data";

const Projects = () => {
  return (
    <Wrapper id="projects" classNames="bg-stone-100 py-10">
      <SectionTitle
        classNames="text-center mb-5"
        title="projects"
        icon={<FaLaptopCode className="text-4xl text-orange-950" />}
      />
      <div className="max-w-6xl w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 rounded-3xl h-3/4 lg:py-10">
        {projects.map((project, index) => (
          <SingleProject key={index} projectInfo={project} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;
