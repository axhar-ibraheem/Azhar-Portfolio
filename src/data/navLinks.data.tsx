import { BiSolidContact } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFolderOpen, FaHome } from "react-icons/fa";
import { GiToolbox } from "react-icons/gi";

interface NavLink {
  id: string;
  title: string;
  icon: JSX.Element;
}

export const navLinks: NavLink[] = [
  {
    id: "#home",
    title: "home",
    icon: <FaHome className="text-2xl text-yellow-800 inline-block" />,
  },
  {
    id: "#about",
    title: "about",
    icon: <BiSolidContact className="text-2xl  text-yellow-800 inline-block" />,
  },
  {
    id: "#skills",
    title: "skills",
    icon: <GiToolbox className="text-2xl  text-yellow-800 inline-block" />,
  },
  {
    id: "#projects",
    title: "projects",
    icon: <FaFolderOpen className="text-2xl  text-yellow-800 inline-block" />,
  },
  {
    id: "#contact",
    title: "contact",
    icon: (
      <BsFillPersonLinesFill className="text-2xl  text-yellow-800 inline-block" />
    ),
  },
];
