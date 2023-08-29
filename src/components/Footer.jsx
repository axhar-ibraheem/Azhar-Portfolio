import Wrapper from "./UI/Wrapper";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
const Footer = () => {
  return (
    <Wrapper classes="bg-slate-700 grid place-items-center py-5 text-center">
      <div>
        <div className="grid grid-cols-4 w-52 mx-auto place-items-center mb-5 text-cyan-950 text-2xl">
          <a href="https://github.com/axhar-ibraheem">
            <BsGithub className="text-slate-50 hover:text-amber-500" />
          </a>
          <a href="https://www.linkedin.com/in/axhar/">
            <BsLinkedin  className="text-slate-50 hover:text-amber-500"  />
          </a>
          <a href="https://twitter.com/axhar_0">
            <BsTwitter  className="text-slate-50 hover:text-amber-500"  />
          </a>
          <a href="https://hashnode.com/@axhar">
            <SiHashnode  className="text-slate-50 hover:text-amber-500"  />
          </a>
        </div>
        <p className="md:text-lg tracking-wide text-stone-50">
          &copy; 2023 Mohammad Azhar. All rights reserved.
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
