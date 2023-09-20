import Wrapper from "./UI/Wrapper";
import personalImg from "../assets/personal.svg";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiHashnode } from "react-icons/si";
const PersonalInfo = () => {
  const classname = "h-screen flex items-center bg-slate-50";
  const cursor = <div className="h-5 inline-block w-[0.2rem] bg-black"></div>;
  const [text] = useTypewriter({
    words: ["Frontend Developer."],
    loop: {},
  });
  const scrollToSection = (sectionId, gap) => {
    const currentSection = document.querySelector(sectionId);
    if (currentSection) {
      const targetPosition = currentSection.offsetTop - gap;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
        typeSpeed: 30,
        deleteSpeed: 50,
        delaySpeed: 1000,
      });
    }
  };
  return (
    <Wrapper id="home" classes={classname}>
      <div className="grid relative h-3/4 lg:ps-12 lg:pe-12 rounded-3xl lg:bg-blue-100 lg:grid-cols-2 place-content-center items-center max-w-6xl w-11/12 mx-auto py-6 lg:shadow-lg">
        <div className="text-center lg:text-start overflow-hidden">
          <h1 className="text-4xl lg:text-5xl mb-3 tracking-wider text-cyan-950 font-bold">
            Hi! I am Azhar.
          </h1>
          <div className="mb-4">
            <span className="text-2xl tracking-wider overflow-hidden text-indigo-900 font-bold capitalize">
              {text}
            </span>
            <Cursor cursorColor="black" cursorStyle={cursor} />
          </div>

          <div className="text-xl italic mb-4">
            Crafting immersive web experiences through code and creativity.
          </div>

          
            <button
              onClick={() => scrollToSection("#contact", 4 * 16)}
              className="px-7 mt-4 rounded-md uppercase font-semibold  text-white tracking-wider hover:bg-violet-950  py-3 bg-violet-800 transition ease-linear delay-150 duration-300 text-xl"
            >
              hire me
            </button>
           
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
