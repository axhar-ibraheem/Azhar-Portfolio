import Wrapper from "./UI/Wrapper";
import personalImg from "../assets/personal.svg";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
const PersonalInfo = () => {
  const classname = "h-screen flex items-center bg-slate-50";
  return (
    <Wrapper id="home" classes={classname}>
      <div className="grid relative h-3/4 lg:ps-12 lg:pe-12 rounded-3xl lg:bg-blue-100 lg:grid-cols-2 place-content-center items-center max-w-6xl w-11/12 mx-auto py-6 lg:shadow-lg">
        <div className="text-center lg:text-start">
          <h1 className=" text-4xl lg:text-5xl mb-4 tracking-wider text-cyan-950 font-bold">
            Hi! I am Azhar.
          </h1>
          <h3 className="text-2xl text-indigo-900 font-bold mb-4 capitalize">
            frontend developer
          </h3>
          <span className="text-xl italic">
            Crafting immersive web experiences through code and creativity.
          </span>

          <div>
            <button className="px-7 animate-bounce rounded-md uppercase font-semibold  text-red-100 tracking-wider hover:bg-violet-950  py-3 bg-violet-900 text-xl mt-9">
              hire me
            </button>
          </div>
          <div className="grid grid-cols-4 w-52 lg:hidden mx-auto place-items-center lg:place-items-start lg:mx-0 mt-5 text-cyan-950 text-2xl">
            <a href="https://github.com/axhar-ibraheem">
              <BsGithub className="text-indigo-800" />
            </a>
            <a href="https://www.linkedin.com/in/axhar/">
              <BsLinkedin className="text-indigo-800" />
            </a>
            <a href="https://twitter.com/axhar_0">
              <BsTwitter className="text-indigo-800" />
            </a>
            <a href="https://hashnode.com/@axhar">
              <SiHashnode className="text-indigo-800" />
            </a>
          </div>
          <div className="w-20  hidden lg:block absolute top-0 -left-4 h-20 bg-cyan-950 opacity-70 rotate-45 rounded-2xl"></div>
          <div className="w-20 hidden lg:block absolute top-0 -right-4 h-20 bg-violet-800 opacity-70 rounded-full"></div>
          <div className="w-20 hidden lg:block absolute -end-5 bottom-0 right-0 h-20 bg-violet-400 opacity-70 rounded-es-full"></div>
        </div>
        <div className="">
         
          <img className="hidden lg:block" src={personalImg} alt="" />
        </div>
      </div>
      <div className="lg:grid hidden grid-rows-4 absolute gap-8 shadow-md ps-5 py-5 w-16 bg-emerald-100 text-cyan-950 text-2xl">
        <a href="https://github.com/axhar-ibraheem">
          <BsGithub className="text-sky-800" />
        </a>
        <a href="https://www.linkedin.com/in/axhar/">
          <BsLinkedin className="text-sky-800" />
        </a>
        <a href="https://twitter.com/axhar_0">
          <BsTwitter className="text-sky-800" />
        </a>
        <a href="https://hashnode.com/@axhar">
          <SiHashnode className="text-sky-800" />
        </a>
      </div>
    </Wrapper>
  );
};

export default PersonalInfo;
