interface SectionTitleProps {
  title: string;
  classNames: string;
  icon: JSX.Element;
}

const SectionTitle = ({ title, classNames, icon }: SectionTitleProps) => {
  return (
    <div className={`flex justify-center gap-3 items-center ${classNames}`}>
      <span>{icon}</span>
      <h2 className="capitalize text-4xl tracking-wider font-bold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
