"use client";
import { Typewriter } from "react-simple-typewriter";
import "./styles/navbar.css";
import { motion } from "framer-motion";
import NavLink from "./styles/components/NavLink";

const NavBarLayout = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 py-7 px-16 bg-zinc-500/[0.5] backdrop-blur-sm flex justify-between">
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
    </div>
  );
};

export default NavBarLayout;
