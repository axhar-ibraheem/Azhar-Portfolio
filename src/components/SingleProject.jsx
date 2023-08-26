import eccomerceImg from "../assets/ecommere.png";
import buttongeneratorImg from "../assets/button-generator.png";
import mailboxImg from "../assets/mail-box.png";
import expenseTrackerImg from "../assets/expense-tracker.png";

const SingleProject = (props) => {
  const { projectInfo } = props;
  const img =
    projectInfo.img === "button"
      ? buttongeneratorImg
      : projectInfo.img === "ecommerce"
      ? eccomerceImg
      : projectInfo.img === "expense"
      ? expenseTrackerImg
      : mailboxImg;

  return (
    <div className="p-5 group bg-stone-50 rounded-lg transition ease-in-out delay-400 duration-700 shadow-md hover:scale-105 hover:shadow-xl">
      <div>
        <div className="relative transition ease-in-out delay-400 duration-700">
          <img
            className="rounded-md transition ease-in-out delay-400 duration-700 object-cover w-full h-full group-hover:blur-sm"
            src={img}
            alt="Project Image"
          />
          <div className="absolute transition ease-in-out delay-400 duration-700 opacity-0 group-hover:opacity-100 z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center">
            <a
              href="#"
              className="bg-blue-200 text-gray-900 px-2 py-1 inline-block text-xl rounded-sm capitalize mb-3"
            >
              live site
            </a>
            <a
              href="#"
              className="bg-blue-200 text-gray-900 px-2 py-1 inline-block text-xl rounded-sm capitalize"
            >
              source code
            </a>
          </div>
          <div className="w-8 h-8 transition ease-in-out delay-400 duration-700 bg-cyan-900 opacity-0 top-0 left-0 border absolute group-hover:opacity-100 rounded-r-2xl "></div>
        </div>

        <div className="mt-4">
          <h1 className="capitalize text-xl font-semibold ">
            {projectInfo.title}
          </h1>
          <div className="mt-3">
            {projectInfo.technologies.map((item, index) => (
              <span key={index}  className="bg-slate-400 px-2 me-1 rounded-sm">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
