import { motion } from "framer-motion";
import { ReactNode } from "react";
interface ILogoCardProps {
  key: number;
  logoObject: {
    text?: String;
    element?: ReactNode;
  };
}

function LogoCard(props: ILogoCardProps) {
  const animateLogoAttribute = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const { logoObject, key } = props;
  return (
    <motion.div variants={animateLogoAttribute} key={key} className="">
      <div className="relative h-24">
        <div className="w-16 absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-center cursor-pointer">
          {logoObject.element}
        </div>
      </div>
    </motion.div>
  );
}

export default LogoCard;
