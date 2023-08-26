const SectionTitle = (props) => {
  return (
    <div className={`${props.classes}`}>
      <h2 className="capitalize text-4xl tracking-wider pb-2 font-bold text-cyan-950">
        {props.title}
      </h2>
      <div className="w-20 mx-auto mt-1 h-1 bg-amber-700"></div>
    </div>
  );
};

export default SectionTitle;
