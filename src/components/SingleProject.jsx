import eccomerceImg from "../assets/ecommere.png";
import buttongeneratorImg from "../assets/button-generator.png";
import mailboxImg from "../assets/mail-box.png";
import expenseTrackerImg from "../assets/expense-tracker.png";
import jobquestImg from "../assets/jobquest.png";
const SingleProject = (props) => {
  const { projectInfo } = props;
  const img =
    projectInfo.img === "button"
      ? buttongeneratorImg
      : projectInfo.img === "ecommerce"
      ? eccomerceImg
      : projectInfo.img === "expense"
      ? expenseTrackerImg
      : projectInfo.img === "mail"
      ? mailboxImg
      : jobquestImg;

  return (
    <div className="group bg-gray-800 transition ease-in-out delay-400 duration-700 shadow-xl rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl">
      <div className="grid">
        <div className="relative transition ease-in-out delay-400 duration-700">
          <img
            className="transition ease-in-out delay-400 duration-700 object-cover group-hover:opacity-50 group-hover:bg-yellow-500"
            src={img}
            alt="Project Image"
          />
          <div className="absolute grid grid-rows-2 gap-3 border-cyan-900 transition ease-in-out delay-400 duration-700 opacity-0 group-hover:opacity-100 z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center">
            <div>
              <a
                href={projectInfo.link}
                className="bg-blue-200 text-gray-900 px-2 py-1 text-xl rounded-sm capitalize mb-3"
              >
                live site
              </a>
            </div>
            <div>
              <a
                href={projectInfo.sourceCode}
                className="bg-blue-200 text-gray-900 px-2 py-1 text-xl rounded-sm capitalize"
              >
                source code
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 h-full bg-slate-100">
          <h1 className="capitalize text-xl text-gray-900 font-semibold">
            {projectInfo.title}
          </h1>
          <div className="mt-3">
            {projectInfo.technologies.map((item, index) => (
              <span key={index} className="bg-slate-400 px-2 me-1 rounded-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
