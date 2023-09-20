import {BsFillLaptopFill} from 'react-icons/bs'
const SectionTitle = (props) => {
  const {title, classes, icon} = props
  console.log(icon)
  return (
    <div className={`flex justify-center gap-3 items-center ${classes}`}>
      <span>
        {icon}
      </span>
      <h2 className="capitalize text-4xl tracking-wider pb-2 font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
