import { PropsWithChildren } from "react";

interface WrapperProps {
  id: string;
  classNames: string;
}

const Wrapper = ({
  id,
  classNames,
  children,
}: PropsWithChildren<WrapperProps>) => {
  return (
    <section id={id} className={`${classNames}`}>
      {children}
    </section>
  );
};

export default Wrapper;
