import aboutMeImg from "../assets/about.svg";
import Wrapper from "./UI/Wrapper";
import SectionTitle from "./UI/SectionTitle";
import {BsPersonCircle} from "react-icons/bs"
const About = () => {
  return (
    <Wrapper id="about" classes="py-10 bg-green-100">
      <div className="max-w-6xl w-11/12 mx-auto grid gap-4 lg:grid-cols-2 items-center relative h-3/4  rounded-3xl py-6">
     
        <div>
          <SectionTitle classes="text-center mb-9" title="about me" icon = {<BsPersonCircle className="text-4xl text-cyan-950"/>} />
          <p className="text-2xl capitalize font-semibold text-cyan-900 mb-4">
            get to know me!
          </p>
          <p className="text-lg tracking-wider">
            Hello! I'm{" "}
            <span className="text-cyan-900 font-semibold">Mohammad Azhar</span>{" "}
            , a passionate frontend developer with a strong
            foundation in modern web technologies. I
            specialize in crafting engaging user experiences through my
            proficiency in HTML, CSS, and JavaScript, along with expertise in
            React, routing, and Redux. Dedicated to delivering modern,
            responsive websites and committed to optimizing performance and
            accessibility. I am Seeking opportunities to contribute and grow in
            a dynamic team.
          </p>
        </div>
        <img
          className="lg:block max-w-xl mx-auto lg:mx-0"
          src={aboutMeImg}
          alt=""
        />
      </div>
    </Wrapper>
  );
};

export default About;
