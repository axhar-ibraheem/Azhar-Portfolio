import { JSX } from "react";
import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoRedux,
  BiLogoGit,
  BiLogoGithub,
  BiLogoTypescript,
  BiLogoSass,
  BiLogoAngular,
} from "react-icons/bi";

import { SiReactrouter } from "react-icons/si";

interface Skill {
  title: string;
  icon: JSX.Element;
}

export const skills: Skill[] = [
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
    title: "TypeScript",
    icon: (
      <BiLogoTypescript className="text-6xl text-yellow-500 px-2 inline pe-2" />
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
    title: "SCSS",
    icon: <BiLogoSass className="text-6xl px-2 inline pe-2 text-blue-600" />,
  },
  {
    title: "TailwindCSS",
    icon: (
      <BiLogoTailwindCss className="text-6xl text-sky-600 px-2 inline pe-2" />
    ),
  },
  {
    title: "React",
    icon: <BiLogoReact className="text-6xl px-2 inline pe-2 text-sky-600" />,
  },
  {
    title: "Angular",
    icon: <BiLogoAngular className="text-6xl px-2 inline pe-2 text-sky-600" />,
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
];
