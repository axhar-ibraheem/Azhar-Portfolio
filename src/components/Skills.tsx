import { FaTools } from "react-icons/fa";
import Wrapper from "./UI/Wrapper";
import SectionTitle from "./UI/SectionTitle";
import { skills } from "../data/skills.data";

const Skills = () => {
  return (
    <Wrapper id="skills" classNames="bg-gray-400 py-10 ">
      <SectionTitle
        classNames="text-center lg:mb-5"
        title="skills"
        icon={<FaTools className="text-3xl text-orange-950" />}
      />
      <div className="grid lg:grid-cols-3 grid-cols-2  max-w-4xl w-11/12 mx-auto content-center items-center h-3/4 lg:py-10 mt-6 gap-4 md:gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="grid items-center justify-center bg-stone-100 rounded-md p-2 shadow-lg text-center"
          >
            <span>{skill.icon}</span>
            <p className="font-bold text-gray-800 md:text-2xl capitalize">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
