"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import NavLink from "./styles/components/NavLink";
import "./styles/navbar.css";

const NavBarLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 left-0 z-50 py-7 px-16 bg-darker-green/[0.3] backdrop-blur-sm flex justify-between"
    >
      <div className="font-extrabold my-auto text-3xl text-white">
        <Typewriter
          words={[`Hi I'm thanhpphan`]}
          typeSpeed={120}
          cursor={true}
        />
      </div>
      <ul className="flex my-auto font-bold text-white">
        <NavLink linkText={"HOME"} />
        <NavLink linkText={"TECHNOLOGIES"} />
        <NavLink linkText={"EXPERIENCES"} />
        <NavLink linkText={"ABOUT"} />
        <button className="px-14">MY RESUME</button>
      </ul>
    </motion.div>
  );
};

export default NavBarLayout;
