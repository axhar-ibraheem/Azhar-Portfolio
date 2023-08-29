import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoRedux,
  BiLogoGit,
  BiLogoFirebase,
  BiLogoGithub,
} from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import Wrapper from "./UI/Wrapper";
import SectionTitle from "./UI/SectionTitle";
const skills = [
  {
    title: "Java",
    icon: <BiLogoJava className="text-6xl px-2 inline pe-2" />,
  },
  {
    title: "JavaScript",
    icon: (
      <BiLogoJavascript className="text-6xl text-yellow-500 px-2 inline pe-2" />
    ),
  },
  {
    title: "HTML",
    icon: <BiLogoHtml5 className="text-6xl text-orange-600 px-2 inline pe-2" />,
  },
  {
    title: "CSS",
    icon: <BiLogoCss3 className="text-6xl px-2 inline pe-2 text-blue-600" />,
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap className="text-6xl px-2 inline pe-2 text-blue-800" />,
  },
  {
    title: "TailwindCSS",
    icon: (
      <BiLogoTailwindCss className="text-6xl text-sky-600 px-2 inline pe-2" />
    ),
  },
  {
    title: "React Bootstrap",
    icon: <FaBootstrap className="text-6xl text-orange-600 px-2 inline pe-2" />,
  },
  {
    title: "React",
    icon: <BiLogoReact className="text-6xl px-2 inline pe-2 text-sky-600" />,
  },
  {
    title: "React Router",
    icon: (
      <SiReactrouter className="text-6xl text-orange-600 px-2 inline pe-2" />
    ),
  },
  {
    title: "Redux",
    icon: <BiLogoRedux className="text-6xl text-purple-500 px-2 inline pe-2" />,
  },
  {
    title: "Git",
    icon: <BiLogoGit className="text-6xl text-orange-600 px-2 inline pe-2" />,
  },
  {
    title: "Github",
    icon: <BiLogoGithub className="text-6xl text-gray-900 px-2 inline pe-2" />,
  },
  {
    title: "Firebase",
    icon: (
      <BiLogoFirebase className="text-6xl text-yellow-400 px-2 inline pe-2" />
    ),
  },
];
const Skills = () => {
  return (
    <Wrapper id="skills" classes="bg-purple-100 py-10">
      <SectionTitle classes="text-center lg:mb-5" title="skills" />
      <div className="lg:flex grid grid-cols-2 lg:flex-wrap max-w-6xl w-11/12 mx-auto content-center items-center h-3/4 lg:py-10 mt-6 gap-4 md:gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="md:mb-5">
            <p className="text-left font-bold text-gray-800 md:text-2xl mb-2 capitalize">
              <span>{skill.icon}</span>
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
