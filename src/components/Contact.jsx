
import Wrapper from "./UI/Wrapper";
import SectionTitle from "./UI/SectionTitle";
import { MdOutgoingMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
const Contact = () => {
  return (
    <Wrapper id="contact" classes="bg-amber-100 py-10">
      <SectionTitle classes="text-center mb-5" title="Contact" />
      <div className="max-w-6xl w-11/12 mx-auto rounded-3xl h-3/4 lg:py-10">
        <div className="max-w-2xl flex justify-center items-center p-5 mx-auto lg:w-2/5 h-[20rem] lg:h-[26rem] bg-white shadow-lg rounded-lg">
          <div className="text-center">
            <p className="capitalize tracking-wider text-2xl mb-6 font-semibold text-orange-800">let's get in touch</p>
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <MdOutgoingMail className="text-4xl text-orange-800" />
              <span className="md:text-xl tracking-wider">azharibraheem482@gmail.com</span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <BsTelephoneFill className="text-4xl  text-orange-800" />
              <span className="md:text-xl tracking-wider">+91-7006924488</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
